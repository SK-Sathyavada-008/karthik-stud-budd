"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { getSubject, getChapters, getChapterProgressList, getBookmarks } from "@/lib/db";
import { Subject, Chapter, Bookmark, ChapterProgress } from "@/lib/types";
import { Brain, ArrowLeft, Search, Filter, BookOpen, Clock, Activity, AlertCircle, BookmarkCheck, Sun, Moon } from "lucide-react";

export default function SubjectPage() {
  const params = useParams();
  const router = useRouter();
  const subjectId = params.subjectId as string;

  const [subject, setSubject] = useState<Subject | null>(null);
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [progressList, setProgressList] = useState<any[]>([]);
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  
  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    async function loadData() {
      const subData = await getSubject(subjectId);
      if (!subData) {
        router.push("/");
        return;
      }
      setSubject(subData);

      const chData = await getChapters(subjectId);
      setChapters(chData);

      const progData = await getChapterProgressList();
      setProgressList(progData);

      const bookData = await getBookmarks();
      setBookmarks(bookData);
    }
    loadData();

    if (typeof window !== "undefined") {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    }
  }, [subjectId]);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.remove("dark");
      localStorage.theme = "light";
      setIsDarkMode(false);
    } else {
      root.classList.add("dark");
      localStorage.theme = "dark";
      setIsDarkMode(true);
    }
  };

  const getChapterStatus = (chapterId: string) => {
    const p = progressList.find((prog) => prog.chapterId === chapterId);
    return p ? p.status : "not_started";
  };

  const getChapterProgressPercent = (chapterId: string) => {
    const p = progressList.find((prog) => prog.chapterId === chapterId);
    return p ? p.completedPercentage : 0;
  };

  const isChapterBookmarked = (chapterId: string) => {
    return bookmarks.some((b) => b.targetId === chapterId || b.type === "chapter" && b.targetId === chapterId);
  };

  // Filter Logic
  const filteredChapters = chapters.filter((ch) => {
    const matchesSearch = ch.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          ch.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesDifficulty = selectedDifficulty === "all" || ch.difficulty.toLowerCase() === selectedDifficulty.toLowerCase();
    
    const status = getChapterStatus(ch.id);
    const bookmarked = isChapterBookmarked(ch.id);
    
    let matchesStatus = true;
    if (selectedStatus === "completed") matchesStatus = status === "completed";
    else if (selectedStatus === "in_progress") matchesStatus = status === "in_progress";
    else if (selectedStatus === "not_started") matchesStatus = status === "not_started";
    else if (selectedStatus === "bookmarked") matchesStatus = bookmarked;

    return matchesSearch && matchesDifficulty && matchesStatus;
  });

  if (!subject) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 dark:bg-slate-950">
        <div className="text-center space-y-2">
          <Brain className="h-10 w-10 animate-bounce mx-auto text-indigo-500" />
          <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">Loading chapters...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100 font-sans transition-colors duration-300">
      
      {/* HEADER */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-200/50 bg-white/80 backdrop-blur-md dark:border-slate-900/50 dark:bg-slate-950/80">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 hover:text-slate-800 dark:border-slate-850 dark:bg-slate-900 dark:text-slate-450 dark:hover:bg-slate-800"
            >
              <ArrowLeft className="h-4.5 w-4.5" />
            </Link>
            <div className="flex items-center gap-2">
              <span className="font-heading text-base font-extrabold text-slate-905 dark:text-white">
                {subject.name} Chapters
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 hover:text-slate-800 dark:border-slate-850 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800"
            >
              {isDarkMode ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
            </button>
          </div>
        </div>
      </header>

      {/* BODY CONTENT */}
      <main className="flex-grow py-8 max-w-7xl mx-auto px-6 w-full space-y-6">
        
        {/* SUBJECT INFO HEADER CARD */}
        <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-850 dark:bg-slate-900">
          <span className="rounded bg-indigo-50 px-2 py-0.5 text-[10px] font-bold text-indigo-700 uppercase tracking-widest dark:bg-indigo-950 dark:text-indigo-400">
            {subject.code} Course Directory
          </span>
          <h1 className="font-heading text-2xl font-black text-slate-900 dark:text-white mt-2">
            CBSE {subject.name} Class 9
          </h1>
            Click on the chapter below to open the lesson modules. All chapters are synchronized with the latest NCERT 2026 syllabus, with detailed lessons, gamified quizzes, mind maps, and interactive AI Tutor coaching.

        </div>

        {/* SEARCH AND FILTER BAR */}
        <div className="grid gap-4 md:grid-cols-12 rounded-2xl bg-white border border-slate-200 p-4 dark:bg-slate-900 dark:border-slate-850 shadow-sm">
          {/* Search Input */}
          <div className="relative md:col-span-6">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search chapters by keyword..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2 pl-9 pr-4 text-xs focus:border-indigo-500 focus:bg-white focus:outline-none dark:border-slate-800 dark:bg-slate-950 dark:focus:border-indigo-400"
            />
          </div>

          {/* Difficulty Dropdown */}
          <div className="relative md:col-span-3">
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2 px-3 text-xs focus:border-indigo-500 focus:outline-none dark:border-slate-800 dark:bg-slate-950"
            >
              <option value="all">All Difficulties</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>

          {/* Status Dropdown */}
          <div className="relative md:col-span-3">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2 px-3 text-xs focus:border-indigo-500 focus:outline-none dark:border-slate-800 dark:bg-slate-950"
            >
              <option value="all">All Chapter Status</option>
              <option value="completed">Completed</option>
              <option value="in_progress">In Progress</option>
              <option value="not_started">Not Started</option>
              <option value="bookmarked">Bookmarked</option>
            </select>
          </div>
        </div>

        {/* CHAPTERS GRID */}
        <div className="grid gap-6 md:grid-cols-2">
          {filteredChapters.map((ch) => {
            const status = getChapterStatus(ch.id);
            const progressPercent = getChapterProgressPercent(ch.id);
            const bookmarked = isChapterBookmarked(ch.id);

            // Status border and badge colors
            let statusText = "Not Started";
            let statusBadgeColor = "bg-slate-100 text-slate-650 dark:bg-slate-800 dark:text-slate-400";
            if (status === "completed") {
              statusText = "Completed";
              statusBadgeColor = "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400";
            } else if (status === "in_progress") {
              statusText = "In Progress";
              statusBadgeColor = "bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-400";
            }

            return (
              <div
                key={ch.id}
                className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md dark:border-slate-850 dark:bg-slate-900 flex flex-col justify-between"
              >
                {/* Bookmarked small ribbon */}
                {bookmarked && (
                  <div className="absolute right-4 top-4 text-amber-500">
                    <BookmarkCheck className="h-5 w-5" />
                  </div>
                )}

                <div className="space-y-4">
                  {/* Category Meta */}
                  <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    <span>Chapter {ch.chapterNumber}</span>
                    <span>•</span>
                    <span className={`inline-flex items-center rounded px-1.5 py-0.5 ${
                      ch.difficulty === "Easy" 
                        ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400"
                        : ch.difficulty === "Medium"
                        ? "bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400"
                        : "bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-400"
                    }`}>
                      {ch.difficulty}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">
                    {ch.name}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed dark:text-slate-400 line-clamp-3">
                    {ch.description}
                  </p>
                </div>

                {/* Progress Indicators */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/60 grid grid-cols-2 gap-4 text-xs">
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-slate-400" />
                    <div>
                      <span className="text-[10px] text-slate-400 block font-semibold">Estimated Time</span>
                      <span className="font-bold text-slate-700 dark:text-slate-350">{ch.estimatedTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Activity className="h-4 w-4 text-slate-400" />
                    <div>
                      <span className="text-[10px] text-slate-400 block font-semibold">Status</span>
                      <span className={`rounded px-1.5 py-0.5 text-[10px] font-bold ${statusBadgeColor}`}>
                        {statusText} ({progressPercent}%)
                      </span>
                    </div>
                  </div>
                </div>

                {/* ACTION BUTTONS */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/60 flex flex-wrap gap-2 justify-end">
                  <Link
                    href={`/subject/${subjectId}/chapter/${ch.id}?tab=revision`}
                    className="rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-600 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800"
                  >
                    Quick Revision
                  </Link>
                  <Link
                    href={`/subject/${subjectId}/chapter/${ch.id}?tab=quiz`}
                    className="rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-650 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800"
                  >
                    Practice Questions
                  </Link>
                  <Link
                    href={`/subject/${subjectId}/chapter/${ch.id}`}
                    className="rounded-xl bg-indigo-650 px-4 py-2 text-xs font-bold text-white hover:bg-indigo-755 dark:bg-indigo-600 dark:hover:bg-indigo-505"
                  >
                    Study Lesson
                  </Link>
                </div>
              </div>
            );
          })}
          
          {filteredChapters.length === 0 && (
            <div className="col-span-2 text-center p-12 rounded-3xl border border-dashed border-slate-200 bg-white dark:border-slate-850 dark:bg-slate-900 flex flex-col items-center justify-center space-y-3">
              <AlertCircle className="h-8 w-8 text-slate-400" />
              <div>
                <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300">No chapters match your filters</h4>
                <p className="text-xs text-slate-400">Try broadening your search or choosing another difficulty status.</p>
              </div>
            </div>
          )}
        </div>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-250/30 py-8 text-center text-xs text-slate-400 dark:border-slate-900/60 mt-12">
        <p>© 2026 Karthik's Study Buddy (StudBud). Aligned with latest CBSE NCERT 2026 curriculum.</p>
      </footer>
    </div>
  );
}
