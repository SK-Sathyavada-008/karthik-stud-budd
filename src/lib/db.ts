import { createClient } from "@supabase/supabase-js";
import { Subject, Chapter, Bookmark, UserProfile, UserNote, Flashcard, Badge } from "./types";
import { MOCK_SUBJECTS, MOCK_CHAPTERS, MOCK_LESSON_DATA, ChapterLessonData } from "./seedData";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const isSupabaseConfigured = !!(supabaseUrl && supabaseAnonKey);
export const supabase = isSupabaseConfigured ? createClient(supabaseUrl, supabaseAnonKey) : null;

// Local storage keys
const KEYS = {
  PROFILE: "stud_bud_profile",
  PROGRESS: "stud_bud_progress",
  BOOKMARKS: "stud_bud_bookmarks",
  NOTES: "stud_bud_notes",
  FLASHCARDS: "stud_bud_flashcards",
  QUIZ_HISTORY: "stud_bud_quiz_history"
};

// Force reset existing client-side cache to let the student start from scratch
if (typeof window !== "undefined") {
  const resetKey = "stud_bud_reset_v4";
  if (!localStorage.getItem(resetKey)) {
    localStorage.removeItem(KEYS.PROFILE);
    localStorage.removeItem(KEYS.PROGRESS);
    localStorage.removeItem(KEYS.BOOKMARKS);
    localStorage.removeItem(KEYS.NOTES);
    localStorage.removeItem(KEYS.FLASHCARDS);
    localStorage.removeItem(KEYS.QUIZ_HISTORY);
    localStorage.setItem(resetKey, "done");
  }
}

// Initial local storage seeds if empty
const DEFAULT_PROFILE: UserProfile = {
  name: "Karthik Annayya",
  xp: 0,
  streak: 0,
  streakUpdatedAt: new Date().toISOString(),
  level: 1,
  badges: []
};

const ALL_BADGES: Omit<Badge, "unlockedAt">[] = [
  { id: "badge-welcome", title: "Curious Mind", description: "Started your first lesson", icon: "compass" },
  { id: "badge-streak-5", title: "Unstoppable", description: "Maintained a 5-day study streak", icon: "zap" },
  { id: "badge-streak-10", title: "Scholar", description: "Maintained a 10-day study streak", icon: "award" },
  { id: "badge-quiz-perfect", title: "Perfect Score", description: "Scored 10/10 in any chapter quiz", icon: "check-circle" },
  { id: "badge-flashcard-master", title: "Memory Champ", description: "Moved 5 flashcards to Box 5", icon: "brain" },
  { id: "badge-level-3", title: "Achiever", description: "Reached Level 3", icon: "trending-up" }
];

// Helper to get item from local storage with fallback
function getLocal<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  const item = localStorage.getItem(key);
  if (!item) {
    localStorage.setItem(key, JSON.stringify(fallback));
    return fallback;
  }
  try {
    return JSON.parse(item);
  } catch (_) {
    return fallback;
  }
}

// Helper to set item in local storage
function setLocal<T>(key: string, data: T): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, JSON.stringify(data));
}

/* ==========================================================================
   USER PROFILE & XP / STREAKS SERVICE
   ========================================================================== */

export async function getUserProfile(): Promise<UserProfile> {
  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase.from("profiles").select("*").single();
    if (!error && data) return data as UserProfile;
  }
  return getLocal<UserProfile>(KEYS.PROFILE, DEFAULT_PROFILE);
}

export async function addXP(amount: number): Promise<UserProfile> {
  const profile = await getUserProfile();
  const currentXP = profile.xp + amount;
  
  // Calculate Level (100 XP per level simple formula)
  const newLevel = Math.floor(currentXP / 100) + 1;
  const leveledUp = newLevel > profile.level;
  
  const updatedProfile: UserProfile = {
    ...profile,
    xp: currentXP,
    level: newLevel
  };

  // Check level up badge
  if (leveledUp && newLevel >= 3) {
    const levelBadgeId = "badge-level-3";
    if (!updatedProfile.badges.some(b => b.id === levelBadgeId)) {
      const badgeTemplate = ALL_BADGES.find(b => b.id === levelBadgeId);
      if (badgeTemplate) {
        updatedProfile.badges.push({
          ...badgeTemplate,
          unlockedAt: new Date().toISOString()
        });
      }
    }
  }

  if (isSupabaseConfigured && supabase) {
    const { data } = await supabase.from("profiles").update({ xp: currentXP, level: newLevel }).select().single();
    if (data) return data as UserProfile;
  }

  setLocal(KEYS.PROFILE, updatedProfile);
  return updatedProfile;
}

export async function updateStreak(): Promise<UserProfile> {
  const profile = await getUserProfile();
  const today = new Date().toDateString();
  const lastUpdated = new Date(profile.streakUpdatedAt).toDateString();
  
  if (today === lastUpdated) {
    return profile; // Already updated today
  }

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayString = yesterday.toDateString();

  let newStreak = profile.streak;
  if (lastUpdated === yesterdayString) {
    newStreak += 1;
  } else {
    // Streak broken, reset to 1
    newStreak = 1;
  }

  const updatedProfile: UserProfile = {
    ...profile,
    streak: newStreak,
    streakUpdatedAt: new Date().toISOString()
  };

  // Check streak badges
  if (newStreak >= 10) {
    const badgeId = "badge-streak-10";
    if (!updatedProfile.badges.some(b => b.id === badgeId)) {
      const bTemp = ALL_BADGES.find(b => b.id === badgeId);
      if (bTemp) updatedProfile.badges.push({ ...bTemp, unlockedAt: new Date().toISOString() });
    }
  }

  if (isSupabaseConfigured && supabase) {
    await supabase.from("profiles").update({ streak: newStreak, streak_updated_at: updatedProfile.streakUpdatedAt });
  }

  setLocal(KEYS.PROFILE, updatedProfile);
  return updatedProfile;
}

export async function unlockBadge(badgeId: string): Promise<UserProfile> {
  const profile = await getUserProfile();
  if (profile.badges.some(b => b.id === badgeId)) return profile;

  const badgeTemplate = ALL_BADGES.find(b => b.id === badgeId);
  if (!badgeTemplate) return profile;

  const updatedProfile: UserProfile = {
    ...profile,
    badges: [...profile.badges, { ...badgeTemplate, unlockedAt: new Date().toISOString() }]
  };

  if (isSupabaseConfigured && supabase) {
    await supabase.from("profiles").update({ badges: updatedProfile.badges });
  }

  setLocal(KEYS.PROFILE, updatedProfile);
  return updatedProfile;
}

/* ==========================================================================
   SUBJECTS & CHAPTERS SERVICE
   ========================================================================== */

export async function getSubjects(): Promise<Subject[]> {
  const subjects = MOCK_SUBJECTS;
  
  // Calculate progress for each subject from progress list
  const progressList = await getChapterProgressList();
  
  return subjects.map(sub => {
    const chapters = MOCK_CHAPTERS[sub.id] || [];
    const completed = chapters.filter(ch => {
      const p = progressList.find(prog => prog.chapterId === ch.id);
      return p?.status === "completed";
    }).length;
    
    return {
      ...sub,
      completedChapters: completed,
      totalChapters: chapters.length
    };
  });
}

export async function getSubject(id: string): Promise<Subject | undefined> {
  const subjects = await getSubjects();
  return subjects.find(s => s.id === id);
}

export async function getChapters(subjectId: string): Promise<Chapter[]> {
  return MOCK_CHAPTERS[subjectId] || [];
}

export async function getChapter(subjectId: string, chapterId: string): Promise<Chapter | undefined> {
  const chapters = await getChapters(subjectId);
  return chapters.find(c => c.id === chapterId);
}

export async function getLessonData(chapterId: string): Promise<ChapterLessonData | undefined> {
  return MOCK_LESSON_DATA[chapterId];
}

/* ==========================================================================
   CHAPTER PROGRESS SERVICE
   ========================================================================== */

interface LocalProgress {
  chapterId: string;
  status: "not_started" | "in_progress" | "completed";
  completedPercentage: number;
  lastStudiedAt: string;
}

export async function getChapterProgressList(): Promise<LocalProgress[]> {
  if (isSupabaseConfigured && supabase) {
    const { data } = await supabase.from("progress").select("*");
    if (data) return data as LocalProgress[];
  }
  return getLocal<LocalProgress[]>(KEYS.PROGRESS, []);
}

export async function getChapterProgress(chapterId: string): Promise<LocalProgress | undefined> {
  const list = await getChapterProgressList();
  return list.find(p => p.chapterId === chapterId);
}

export async function updateChapterProgress(
  chapterId: string, 
  completedPercentage: number, 
  status: "not_started" | "in_progress" | "completed"
): Promise<void> {
  const list = await getChapterProgressList();
  const existingIdx = list.findIndex(p => p.chapterId === chapterId);
  
  const prog: LocalProgress = {
    chapterId,
    status,
    completedPercentage,
    lastStudiedAt: new Date().toISOString()
  };

  if (existingIdx >= 0) {
    // Don't downgrade completed status or percentage
    const existing = list[existingIdx];
    if (existing.status === "completed" && status !== "completed") {
      prog.status = "completed";
    }
    prog.completedPercentage = Math.max(existing.completedPercentage, completedPercentage);
    list[existingIdx] = prog;
  } else {
    list.push(prog);
  }

  if (isSupabaseConfigured && supabase) {
    await supabase.from("progress").upsert({
      chapter_id: chapterId,
      status: prog.status,
      completed_percentage: prog.completedPercentage,
      last_studied_at: prog.lastStudiedAt
    });
  }

  setLocal(KEYS.PROGRESS, list);
}

/* ==========================================================================
   BOOKMARKS SERVICE
   ========================================================================== */

export async function getBookmarks(): Promise<Bookmark[]> {
  if (isSupabaseConfigured && supabase) {
    const { data } = await supabase.from("bookmarks").select("*");
    if (data) return data as Bookmark[];
  }
  return getLocal<Bookmark[]>(KEYS.BOOKMARKS, []);
}

export async function addBookmark(bookmark: Omit<Bookmark, "id" | "savedAt">): Promise<Bookmark> {
  const bookmarks = await getBookmarks();
  const newBookmark: Bookmark = {
    ...bookmark,
    id: `bookmark-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    savedAt: new Date().toISOString()
  };

  bookmarks.push(newBookmark);
  
  if (isSupabaseConfigured && supabase) {
    await supabase.from("bookmarks").insert({
      id: newBookmark.id,
      type: newBookmark.type,
      target_id: newBookmark.targetId,
      title: newBookmark.title,
      subject_id: newBookmark.subjectId,
      chapter_name: newBookmark.chapterName,
      saved_at: newBookmark.savedAt
    });
  }

  setLocal(KEYS.BOOKMARKS, bookmarks);
  return newBookmark;
}

export async function removeBookmark(targetId: string): Promise<void> {
  let bookmarks = await getBookmarks();
  bookmarks = bookmarks.filter(b => b.targetId !== targetId && b.id !== targetId);

  if (isSupabaseConfigured && supabase) {
    await supabase.from("bookmarks").delete().or(`target_id.eq.${targetId},id.eq.${targetId}`);
  }

  setLocal(KEYS.BOOKMARKS, bookmarks);
}

export async function isBookmarked(targetId: string): Promise<boolean> {
  const bookmarks = await getBookmarks();
  return bookmarks.some(b => b.targetId === targetId);
}

/* ==========================================================================
   NOTES SERVICE
   ========================================================================== */

export async function getNotes(chapterId: string): Promise<UserNote[]> {
  if (isSupabaseConfigured && supabase) {
    const { data } = await supabase.from("notes").select("*").eq("chapter_id", chapterId);
    if (data) return data as UserNote[];
  }
  const allNotes = getLocal<UserNote[]>(KEYS.NOTES, []);
  return allNotes.filter(n => n.chapterId === chapterId);
}

export async function getAllNotes(): Promise<UserNote[]> {
  return getLocal<UserNote[]>(KEYS.NOTES, []);
}

export async function saveNote(chapterId: string, title: string, content: string): Promise<UserNote> {
  const allNotes = getLocal<UserNote[]>(KEYS.NOTES, []);
  const existingIdx = allNotes.findIndex(n => n.chapterId === chapterId);
  
  const note: UserNote = {
    id: existingIdx >= 0 ? allNotes[existingIdx].id : `note-${Date.now()}`,
    chapterId,
    title,
    content,
    updatedAt: new Date().toISOString()
  };

  if (existingIdx >= 0) {
    allNotes[existingIdx] = note;
  } else {
    allNotes.push(note);
  }

  if (isSupabaseConfigured && supabase) {
    await supabase.from("notes").upsert({
      id: note.id,
      chapter_id: chapterId,
      title: note.title,
      content: note.content,
      updated_at: note.updatedAt
    });
  }

  setLocal(KEYS.NOTES, allNotes);
  return note;
}

/* ==========================================================================
   FLASHCARDS SERVICE
   ========================================================================== */

export async function getFlashcards(chapterId: string): Promise<Flashcard[]> {
  const defaultFlashcards = MOCK_LESSON_DATA[chapterId]?.flashcards || [];
  const stored = getLocal<Flashcard[]>(KEYS.FLASHCARDS, []);
  
  // Filter flashcards for this chapter
  const chapterStored = stored.filter(fc => fc.chapterId === chapterId);
  
  if (chapterStored.length === 0 && defaultFlashcards.length > 0) {
    // Seed flashcards in storage
    const updated = [...stored, ...defaultFlashcards];
    setLocal(KEYS.FLASHCARDS, updated);
    return defaultFlashcards;
  }
  
  return chapterStored;
}

export async function updateFlashcardBox(id: string, box: number): Promise<void> {
  const stored = getLocal<Flashcard[]>(KEYS.FLASHCARDS, []);
  const idx = stored.findIndex(fc => fc.id === id);
  
  if (idx >= 0) {
    stored[idx].box = box;
    // Calculate next review date based on box size (Leitner system)
    // Box 1: 1 day, Box 2: 3 days, Box 3: 7 days, Box 4: 14 days, Box 5: 30 days
    const days = box === 1 ? 1 : box === 2 ? 3 : box === 3 ? 7 : box === 4 ? 14 : 30;
    const reviewDate = new Date();
    reviewDate.setDate(reviewDate.getDate() + days);
    stored[idx].nextReviewAt = reviewDate.toISOString();
    
    setLocal(KEYS.FLASHCARDS, stored);

    // Check achievement if 5 cards are in Box 5
    const box5Count = stored.filter(fc => fc.box === 5).length;
    if (box5Count >= 5) {
      await unlockBadge("badge-flashcard-master");
    }
  }
}

/* ==========================================================================
   QUIZ HISTORY & SCORING
   ========================================================================== */

interface QuizRecord {
  chapterId: string;
  score: number;
  total: number;
  completedAt: string;
}

export async function getQuizHistory(): Promise<QuizRecord[]> {
  return getLocal<QuizRecord[]>(KEYS.QUIZ_HISTORY, []);
}

export async function recordQuizResult(chapterId: string, score: number, total: number): Promise<void> {
  const history = getLocal<QuizRecord[]>(KEYS.QUIZ_HISTORY, []);
  history.push({
    chapterId,
    score,
    total,
    completedAt: new Date().toISOString()
  });
  setLocal(KEYS.QUIZ_HISTORY, history);

  // Gamification triggers
  if (score === total && total >= 5) {
    await unlockBadge("badge-quiz-perfect");
  }

  // Award XP: 10 XP per correct answer, 50 bonus XP for perfect score!
  let xpAwarded = score * 10;
  if (score === total) {
    xpAwarded += 50;
  }
  await addXP(xpAwarded);

  // Update progress
  const progressPercent = Math.round((score / total) * 100);
  if (progressPercent >= 50) {
    await updateChapterProgress(chapterId, 100, "completed");
  } else {
    await updateChapterProgress(chapterId, 80, "in_progress");
  }
}
