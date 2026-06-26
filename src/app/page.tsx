"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getUserProfile, getSubjects, updateStreak } from "@/lib/db";
import { UserProfile, Subject } from "@/lib/types";
import { Brain, Search, Zap, Award, BookOpen, Compass, ChevronRight, Play, Sun, Moon } from "lucide-react";

export default function DashboardPage() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function loadData() {
      // Update streak first if first study session of the day
      const updatedProfile = await updateStreak();
      setProfile(updatedProfile);

      const subjectsData = await getSubjects();
      setSubjects(subjectsData);
    }
    loadData();

    // Dark mode check
    if (typeof window !== "undefined") {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    }
  }, []);

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

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/universal-search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  if (!profile) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 dark:bg-slate-955">
        <div className="text-center space-y-2">
          <Brain className="h-10 w-10 animate-bounce mx-auto text-indigo-500" />
          <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">Loading your buddy dashboard...</p>
        </div>
      </div>
    );
  }

  // Calculate XP progress bar percentage (100 XP per level model)
  const xpInCurrentLevel = profile.xp % 100;
  const xpProgressPercent = xpInCurrentLevel;

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-800 dark:bg-slate-955 dark:text-slate-100 font-sans transition-colors duration-300">
      
      {/* HEADER */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-200/50 bg-white/80 backdrop-blur-md dark:border-slate-900/50 dark:bg-slate-950/80">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-650 text-white dark:bg-indigo-500">
              <Brain className="h-5.5 w-5.5" />
            </div>
            <span className="font-heading text-lg font-extrabold tracking-tight text-slate-900 dark:text-white">
              StudBud<span className="text-indigo-655 dark:text-indigo-450">.</span>
            </span>
          </Link>

          {/* Quick Nav Links */}
          <nav className="hidden md:flex gap-6 text-sm font-bold text-slate-500">
            <Link href="/" className="text-indigo-650 dark:text-indigo-400">Dashboard</Link>
            <Link href="/notes" className="hover:text-slate-850 dark:hover:text-slate-200">My Notes</Link>
            <Link href="/universal-search" className="hover:text-slate-850 dark:hover:text-slate-200">Search</Link>
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 hover:text-slate-800 dark:border-slate-850 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800"
            >
              {isDarkMode ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
            </button>
            <div className="flex items-center gap-2 text-xs font-bold bg-amber-50 text-amber-700 border border-amber-100 rounded-xl px-3 py-1.5 dark:bg-amber-950/40 dark:border-amber-900/50 dark:text-amber-400">
              <Zap className="h-4 w-4 text-amber-500 animate-pulse" />
              <span>{profile.streak} Day Streak</span>
            </div>
          </div>
        </div>
      </header>

      {/* DASHBOARD BODY */}
      <main className="flex-grow py-8 max-w-7xl mx-auto px-6 w-full space-y-8">
        
        {/* TOP WELCOME BAR */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="font-heading text-2xl font-extrabold tracking-tight text-slate-905 dark:text-white md:text-3xl">
              Yo {profile.name}! 👋
            </h1>
            <p className="text-sm text-slate-450 mt-1">
              Ready to crush your NCERT concepts today?
            </p>
          </div>

          {/* Universal Search Form */}
          <form onSubmit={handleSearchSubmit} className="relative w-full max-w-sm">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search concepts, formulas, definitions..."
              className="w-full rounded-2xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-xs shadow-sm focus:border-indigo-500 focus:outline-none dark:border-slate-850 dark:bg-slate-900 dark:focus:border-indigo-400"
            />
          </form>
        </div>

        {/* STUDY LEVEL & STATS SECTION */}
        <div className="grid gap-6 md:grid-cols-12">
          
          {/* PROFILE SUMMARY CARD */}
          <div className="relative overflow-hidden md:col-span-8 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-850 dark:bg-slate-900 flex flex-col justify-between">
            <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-indigo-500/5 blur-3xl" />
            
            <div className="grid gap-6 md:grid-cols-2 md:items-center">
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] font-bold text-indigo-650 uppercase tracking-widest dark:text-indigo-400">
                    Current Standing
                  </span>
                  <h3 className="font-heading text-2xl font-black text-slate-800 dark:text-slate-200">
                    Level {profile.level} Scholar
                  </h3>
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-bold text-slate-500">
                    <span>XP progress to Level {profile.level + 1}</span>
                    <span>{profile.xp} / {profile.level * 100} XP</span>
                  </div>
                  {/* Progress bar */}
                  <div className="h-2.5 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                    <div
                      className="h-full bg-indigo-600 dark:bg-indigo-500 transition-all duration-350"
                      style={{ width: `${xpProgressPercent}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-around border-t md:border-t-0 md:border-l border-slate-100 dark:border-slate-800 pt-4 md:pt-0 md:pl-6 text-center">
                <div className="space-y-1">
                  <span className="text-xs text-slate-400 font-semibold block">Study Streak</span>
                  <div className="flex items-center gap-1 justify-center text-amber-600 dark:text-amber-400 font-extrabold text-2xl">
                    <Zap className="h-5 w-5 fill-amber-400 text-amber-400" />
                    <span>{profile.streak} Days</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="text-xs text-slate-400 font-semibold block">Total XP earned</span>
                  <div className="flex items-center gap-1 justify-center text-indigo-650 dark:text-indigo-400 font-extrabold text-2xl">
                    <Award className="h-5 w-5 text-indigo-500" />
                    <span>{profile.xp} XP</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CONTINUE STUDY BAR */}
            <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-650 dark:bg-purple-950/60 dark:text-purple-400">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <h4 className="text-xs font-bold text-slate-800 dark:text-slate-105">
                    Physics: Chapter 8 - Motion
                  </h4>
                  <p className="text-[10px] text-slate-455">
                    NCERT explanation, graphs, and Leitner flashcards
                  </p>
                </div>
              </div>

              <Link
                href="/subject/physics/chapter/motion"
                className="flex items-center gap-2 rounded-xl bg-indigo-50 text-indigo-700 px-4 py-2 text-xs font-bold transition-all hover:bg-indigo-100 dark:bg-indigo-950/50 dark:text-indigo-400 dark:hover:bg-indigo-950"
              >
                <Play className="h-3 w-3 fill-indigo-650 stroke-indigo-650 dark:fill-indigo-400 dark:stroke-indigo-400" />
                Continue Learning
              </Link>
            </div>
          </div>

          {/* ACHIEVEMENTS / BADGES SUMMARY */}
          <div className="md:col-span-4 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-850 dark:bg-slate-900 flex flex-col justify-between">
            <div>
              <h3 className="font-heading text-sm font-bold text-slate-900 dark:text-slate-150 uppercase tracking-wide">
                Unlocked Badges
              </h3>
              <p className="text-[10px] text-slate-400">Earn more badges by passing quizzes!</p>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              {profile.badges.slice(0, 4).map((badge) => (
                <div
                  key={badge.id}
                  className="flex flex-col items-center justify-center text-center p-3 rounded-2xl border border-slate-100 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-950/20"
                  title={badge.description}
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 text-amber-500 dark:bg-amber-950/50 dark:text-amber-400 mb-1 animate-fadeIn">
                    <Award className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300 truncate w-full">
                    {badge.title}
                  </span>
                </div>
              ))}
              {profile.badges.length === 0 && (
                <p className="col-span-2 text-center text-xs text-slate-400 italic py-6">No badges yet. Start a quiz!</p>
              )}
            </div>

            <div className="mt-4 text-center">
              <Link href="/notes" className="text-[10px] font-bold text-indigo-655 hover:underline dark:text-indigo-400 flex items-center justify-center gap-1">
                View My Study Notes <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

        </div>

        {/* SUBJECTS DIRECTORY GRID */}
        <div className="space-y-4">
          <div>
            <h2 className="font-heading text-lg font-bold text-slate-900 dark:text-white">
              CBSE Class 9 Subjects
            </h2>
            <p className="text-xs text-slate-450">Select a subject to browse NCERT chapters</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {subjects.map((sub) => {
              // Custom subject themes mapped to styles
              let themeColors = "border-indigo-100 bg-indigo-50/5 hover:border-indigo-300 dark:border-indigo-950/30 dark:bg-indigo-950/5 dark:hover:border-indigo-900";
              let badgeColors = "bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-400";
              let iconBg = "bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400";

              if (sub.colorTheme === "purple") {
                themeColors = "border-purple-100 bg-purple-50/5 hover:border-purple-300 dark:border-purple-950/30 dark:bg-purple-950/5 dark:hover:border-purple-900";
                badgeColors = "bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-400";
                iconBg = "bg-purple-50 text-purple-600 dark:bg-purple-950/60 dark:text-purple-400";
              } else if (sub.colorTheme === "green" || sub.colorTheme === "emerald") {
                themeColors = "border-emerald-100 bg-emerald-50/5 hover:border-emerald-300 dark:border-emerald-950/30 dark:bg-emerald-950/5 dark:hover:border-emerald-900";
                badgeColors = "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400";
                iconBg = "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-450";
              } else if (sub.colorTheme === "orange" || sub.colorTheme === "amber") {
                themeColors = "border-amber-100 bg-amber-50/5 hover:border-amber-300 dark:border-amber-950/30 dark:bg-amber-950/5 dark:hover:border-amber-900";
                badgeColors = "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-400";
                iconBg = "bg-amber-50 text-amber-600 dark:bg-amber-950/60 dark:text-amber-400";
              } else if (sub.colorTheme === "rose" || sub.colorTheme === "violet") {
                themeColors = "border-rose-100 bg-rose-50/5 hover:border-rose-300 dark:border-rose-950/30 dark:bg-rose-950/5 dark:hover:border-rose-900";
                badgeColors = "bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-400";
                iconBg = "bg-rose-50 text-rose-605 dark:bg-rose-950/60 dark:text-rose-400";
              }

              // Percent completion
              const percent = sub.totalChapters > 0 
                ? Math.round(((sub.completedChapters || 0) / sub.totalChapters) * 100)
                : 0;

              return (
                <Link
                  key={sub.id}
                  href={`/subject/${sub.id}`}
                  className={`relative overflow-hidden rounded-3xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${themeColors}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-11 w-11 items-center justify-center rounded-2xl ${iconBg}`}>
                        <Compass className="h-5.5 w-5.5" />
                      </div>
                      <div>
                        <span className={`rounded-lg px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider ${badgeColors}`}>
                          {sub.code}
                        </span>
                        <h3 className="font-heading text-base font-bold text-slate-850 dark:text-slate-200 mt-1">
                          {sub.name}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-4 text-xs border-t border-slate-100 dark:border-slate-800/40 pt-4">
                    <div>
                      <span className="text-slate-400 text-[10px] font-semibold block">Chapters Completed</span>
                      <span className="font-bold text-slate-700 dark:text-slate-300">
                        {sub.completedChapters} / {sub.totalChapters}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] font-semibold block">Estimated hours</span>
                      <span className="font-bold text-slate-700 dark:text-slate-300">
                        {sub.estimatedHours} hrs
                      </span>
                    </div>
                  </div>

                  {/* Progress Bar indicator */}
                  <div className="mt-4 space-y-1">
                    <div className="flex justify-between text-[10px] font-bold text-slate-455">
                      <span>Subject Progress</span>
                      <span>{percent}%</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-slate-100 dark:bg-slate-850 overflow-hidden">
                      <div
                        className="h-full bg-slate-400 dark:bg-slate-600 transition-all duration-300"
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-250/30 py-8 text-center text-xs text-slate-400 dark:border-slate-900/60 mt-12">
        <p>© 2026 Karthik's Study Buddy (StudBud). Aligned with CBSE NCERT Class 9 syllabus.</p>
      </footer>
    </div>
  );
}
