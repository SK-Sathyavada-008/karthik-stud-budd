"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getBookmarks, removeBookmark, getAllNotes, saveNote } from "@/lib/db";
import { Bookmark, UserNote } from "@/lib/types";
import { Brain, ArrowLeft, BookmarkCheck, FileText, Trash2, Printer, Check, Save, Sun, Moon } from "lucide-react";

export default function NotesPage() {
  const [activeTab, setActiveTab] = useState<"bookmarks" | "notes">("bookmarks");
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [notes, setNotes] = useState<UserNote[]>([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Selected note editing
  const [selectedNoteChId, setSelectedNoteChId] = useState<string>("motion");
  const [noteTitle, setNoteTitle] = useState("My Revision Notes - Chapter 8: Motion");
  const [noteContent, setNoteContent] = useState("");
  const [noteSaved, setNoteSaved] = useState(false);

  useEffect(() => {
    async function loadData() {
      const bookData = await getBookmarks();
      setBookmarks(bookData);

      const notesData = await getAllNotes();
      setNotes(notesData);

      // Seed content for motion note if it exists
      const motionNote = notesData.find(n => n.chapterId === "motion");
      if (motionNote) {
        setNoteTitle(motionNote.title);
        setNoteContent(motionNote.content);
      } else {
        setNoteContent(
          "# Chapter 8: Motion - Study Notes\n\n- Distance is a scalar, displacement is a vector.\n- Equations of Motion:\n  1. v = u + at\n  2. s = ut + 0.5 * a * t^2\n  3. v^2 = u^2 + 2as\n- Odometer measures total distance.\n- In circular motion with constant speed, velocity changes direction constantly, so it is an accelerated motion!"
        );
      }
    }
    loadData();

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

  const handleRemoveBookmark = async (id: string) => {
    await removeBookmark(id);
    const updated = bookmarks.filter(b => b.id !== id);
    setBookmarks(updated);
  };

  const handleSaveNote = async () => {
    const note = await saveNote(selectedNoteChId, noteTitle, noteContent);
    
    // Update local notes state list
    setNotes(prev => {
      const idx = prev.findIndex(n => n.chapterId === selectedNoteChId);
      const updated = [...prev];
      if (idx >= 0) updated[idx] = note;
      else updated.push(note);
      return updated;
    });

    setNoteSaved(true);
    setTimeout(() => setNoteSaved(false), 2000);
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-800 dark:bg-slate-955 dark:text-slate-100 font-sans transition-colors duration-300 print:bg-white print:text-black">
      
      {/* HEADER (hidden during print) */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-200/50 bg-white/80 backdrop-blur-md dark:border-slate-900/50 dark:bg-slate-950/80 print:hidden">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 hover:text-slate-800 dark:border-slate-850 dark:bg-slate-900 dark:text-slate-450 dark:hover:bg-slate-800"
            >
              <ArrowLeft className="h-4.5 w-4.5" />
            </Link>
            <span className="font-heading text-base font-extrabold text-slate-900 dark:text-white">
              My Notes & Bookmarks
            </span>
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
      <main className="flex-grow py-8 max-w-5xl mx-auto px-6 w-full space-y-6">
        
        {/* TABS (hidden during print) */}
        <div className="flex border-b border-slate-200/60 dark:border-slate-850 pb-1 items-center justify-between print:hidden">
          <div className="flex gap-4">
            <button
              onClick={() => setActiveTab("bookmarks")}
              className={`pb-2.5 text-sm font-bold transition-all border-b-2 -mb-[6px] ${
                activeTab === "bookmarks"
                  ? "border-indigo-650 text-indigo-650 dark:border-indigo-400 dark:text-indigo-400"
                  : "border-transparent text-slate-450 hover:text-slate-655"
              }`}
            >
              1. Saved Bookmarks ({bookmarks.length})
            </button>
            <button
              onClick={() => setActiveTab("notes")}
              className={`pb-2.5 text-sm font-bold transition-all border-b-2 -mb-[6px] ${
                activeTab === "notes"
                  ? "border-indigo-650 text-indigo-650 dark:border-indigo-400 dark:text-indigo-400"
                  : "border-transparent text-slate-450 hover:text-slate-655"
              }`}
            >
              2. Chapter Study Notes
            </button>
          </div>

          {activeTab === "notes" && (
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-500 hover:bg-slate-50 hover:text-slate-800 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800"
            >
              <Printer className="h-3.5 w-3.5" /> Export PDF
            </button>
          )}
        </div>

        {/* BOOKMARKS LIST */}
        {activeTab === "bookmarks" && (
          <div className="space-y-4 animate-fadeIn print:hidden">
            {bookmarks.map((b) => (
              <div
                key={b.id}
                className="flex items-center justify-between p-5 rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-850 dark:bg-slate-900"
              >
                <div className="space-y-1 text-left">
                  <div className="flex gap-2 items-center text-[9px] text-slate-400 uppercase font-bold tracking-wider">
                    <span>{b.chapterName || "Physics"}</span>
                    <span>•</span>
                    <span className="text-indigo-600 dark:text-indigo-400">{b.type} Bookmark</span>
                  </div>
                  <h4 className="font-heading text-sm font-bold text-slate-800 dark:text-slate-205">
                    {b.title}
                  </h4>
                  <p className="text-[10px] text-slate-400">
                    Saved on {new Date(b.savedAt).toLocaleDateString()}
                  </p>
                </div>

                <div className="flex gap-2">
                  <Link
                    href={`/subject/${b.subjectId}/chapter/${b.targetId}`}
                    className="flex h-9 items-center justify-center rounded-xl bg-slate-50 text-indigo-650 border border-slate-150 px-3.5 text-xs font-bold hover:bg-slate-100 dark:bg-slate-950 dark:border-slate-850 dark:text-indigo-400 dark:hover:bg-slate-850"
                  >
                    View Lesson
                  </Link>
                  <button
                    onClick={() => handleRemoveBookmark(b.id)}
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-rose-100 bg-rose-50/20 text-rose-500 hover:bg-rose-50 dark:border-rose-950/20 dark:bg-rose-950/10"
                  >
                    <Trash2 className="h-4.5 w-4.5" />
                  </button>
                </div>
              </div>
            ))}

            {bookmarks.length === 0 && (
              <div className="text-center p-16 rounded-3xl border border-dashed border-slate-200 bg-white dark:border-slate-855 dark:bg-slate-900 flex flex-col items-center justify-center space-y-2">
                <BookmarkCheck className="h-9 w-9 text-slate-350" />
                <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300">No bookmarks saved yet</h4>
                <p className="text-xs text-slate-450 leading-relaxed max-w-xs mx-auto">
                  Click the bookmark ribbon next to any concept or question inside a lesson to save it here for quick reference!
                </p>
              </div>
            )}
          </div>
        )}

        {/* STUDY NOTES PANEL (editable + printable) */}
        {activeTab === "notes" && (
          <div className="grid gap-6 md:grid-cols-12 animate-fadeIn">
            
            {/* Editor Area (hidden during print) */}
            <div className="md:col-span-8 space-y-4 print:col-span-12 print:block">
              {/* Note Header Title */}
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  value={noteTitle}
                  onChange={(e) => setNoteTitle(e.target.value)}
                  placeholder="Note Title..."
                  className="w-full text-lg font-bold border-b border-slate-200 bg-transparent pb-1.5 focus:border-indigo-500 focus:outline-none dark:border-slate-800 text-slate-850 dark:text-slate-100 print:border-none print:text-xl"
                />
              </div>

              {/* Text editor box */}
              <textarea
                value={noteContent}
                onChange={(e) => setNoteContent(e.target.value)}
                placeholder="Write your study notes here..."
                rows={12}
                className="w-full rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-relaxed text-slate-750 focus:border-indigo-500 focus:outline-none dark:border-slate-850 dark:bg-slate-900 dark:text-slate-250 print:border-none print:bg-white print:text-black print:p-0 print:overflow-visible"
              />

              {/* Action buttons (hidden during print) */}
              <div className="flex justify-end gap-3 print:hidden">
                <button
                  onClick={handleSaveNote}
                  className="flex items-center gap-2 rounded-xl bg-indigo-650 px-5 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-indigo-755 dark:bg-indigo-600 dark:hover:bg-indigo-500"
                >
                  {noteSaved ? (
                    <>
                      <Check className="h-4.5 w-4.5" /> Saved Successfully
                    </>
                  ) : (
                    <>
                      <Save className="h-4.5 w-4.5" /> Save Note
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Note Metadata and chapter directories (hidden during print) */}
            <div className="md:col-span-4 space-y-4 print:hidden">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-850 dark:bg-slate-900">
                <div className="flex items-center gap-2 text-indigo-750 dark:text-indigo-400 mb-3">
                  <FileText className="h-4.5 w-4.5" />
                  <h4 className="font-heading text-xs font-bold uppercase tracking-wider">Chapter Selector</h4>
                </div>
                <div className="space-y-1.5">
                  {[
                    { id: "motion", title: "Chapter 8: Motion" },
                    { id: "force", title: "Chapter 9: Force & Laws" },
                    { id: "gravitation", title: "Chapter 10: Gravitation" }
                  ].map((ch) => (
                    <button
                      key={ch.id}
                      onClick={() => {
                        setSelectedNoteChId(ch.id);
                        setNoteTitle(`My Revision Notes - ${ch.title}`);
                        
                        // Check if note content already exists in notes state
                        const existing = notes.find(n => n.chapterId === ch.id);
                        if (existing) {
                          setNoteTitle(existing.title);
                          setNoteContent(existing.content);
                        } else {
                          setNoteContent(`# Notes for ${ch.title}\n\nType key study formulas, lists, definitions, and memory hacks here!`);
                        }
                      }}
                      className={`w-full rounded-xl px-3.5 py-2.5 text-left text-xs font-bold transition-all border ${
                        selectedNoteChId === ch.id
                          ? "border-indigo-200 bg-indigo-50/50 text-indigo-750 dark:border-indigo-900/50 dark:bg-indigo-950/20 dark:text-indigo-400"
                          : "border-transparent text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-850"
                      }`}
                    >
                      {ch.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>
        )}

      </main>

      {/* FOOTER (hidden during print) */}
      <footer className="border-t border-slate-250/30 py-8 text-center text-xs text-slate-400 dark:border-slate-900/60 mt-12 print:hidden">
        <p>© 2026 Karthik's Study Buddy (StudBud). Personal notebooks are secure in local profile storage.</p>
      </footer>
    </div>
  );
}
