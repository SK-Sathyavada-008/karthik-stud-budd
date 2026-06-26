"use client";

import { useState } from "react";
import { BookOpen, Award, Info, AlertTriangle, Lightbulb, CheckCircle2, Bookmark, BookmarkCheck } from "lucide-react";
import { Concept } from "@/lib/types";
import { addXP, isBookmarked, addBookmark, removeBookmark } from "@/lib/db";
import MathText from "@/components/ui/MathText";

interface ConceptSectionProps {
  concept: Concept;
  subjectId: string;
  chapterName: string;
}

export default function ConceptSection({ concept, subjectId, chapterName }: ConceptSectionProps) {
  const [activeTab, setActiveTab] = useState<"learn" | "exam" | "analogies">("learn");
  const [showQuickCheck, setShowQuickCheck] = useState(false);
  const [quickCheckAnswered, setQuickCheckAnswered] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  // Check bookmark status on load
  useState(() => {
    async function check() {
      const isSaved = await isBookmarked(concept.id);
      setBookmarked(isSaved);
    }
    check();
  });

  const handleBookmarkToggle = async () => {
    if (bookmarked) {
      await removeBookmark(concept.id);
      setBookmarked(false);
    } else {
      await addBookmark({
        type: "concept",
        targetId: concept.id,
        title: concept.name,
        subjectId,
        chapterName
      });
      setBookmarked(true);
    }
  };

  const handleQuickCheck = async () => {
    setShowQuickCheck(true);
    if (!quickCheckCheck) {
      await addXP(10);
      setQuickCheckCheck(true);
    }
  };

  const [quickCheckCheck, setQuickCheckCheck] = useState(false);

  return (
    <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:p-8">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="text-xs font-semibold tracking-wider text-indigo-600 uppercase dark:text-indigo-400">
            Core Concept
          </span>
          <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-slate-50 md:text-2xl mt-0.5">
            {concept.name}
          </h3>
        </div>
        <button
          onClick={handleBookmarkToggle}
          className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-all ${
            bookmarked
              ? "border-amber-200 bg-amber-50 text-amber-500 dark:border-amber-950/50 dark:bg-amber-950/20"
              : "border-slate-200 bg-slate-50 text-slate-400 hover:text-slate-600 dark:border-slate-800 dark:bg-slate-800/50 dark:hover:text-slate-200"
          }`}
        >
          {bookmarked ? <BookmarkCheck className="h-5 w-5" /> : <Bookmark className="h-5 w-5" />}
        </button>
      </div>

      {/* Tabs */}
      <div className="mt-6 flex border-b border-slate-100 dark:border-slate-800">
        {(["learn", "exam", "analogies"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2.5 text-sm font-semibold capitalize transition-all border-b-2 -mb-[2px] ${
              activeTab === tab
                ? "border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400"
                : "border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            }`}
          >
            {tab === "learn" ? "1. Explanations" : tab === "exam" ? "2. Exam Master" : "3. Visuals & Stories"}
          </button>
        ))}
      </div>

      <div className="mt-6 space-y-6">
        {/* LEARN TAB */}
        {activeTab === "learn" && (
          <div className="space-y-6 animate-fadeIn">
            <p className="text-base text-slate-600 leading-relaxed dark:text-slate-300 md:text-lg">
              <MathText text={concept.definition} />
            </p>

            {/* NCERT BOX */}
            <div className="relative rounded-2xl border-l-4 border-indigo-500 bg-indigo-50/30 p-5 dark:bg-indigo-950/10">
              <span className="absolute right-3 top-3 inline-flex items-center rounded-full bg-indigo-100 px-2 py-0.5 text-[10px] font-bold text-indigo-700 uppercase dark:bg-indigo-950/50 dark:text-indigo-400">
                Official NCERT
              </span>
              <div className="flex items-center gap-2 text-indigo-800 dark:text-indigo-300">
                <BookOpen className="h-4.5 w-4.5" />
                <h4 className="font-bold text-sm">Textbook Wording</h4>
              </div>
              <p className="mt-2 text-sm text-slate-600 italic leading-relaxed dark:text-slate-350">
                "<MathText text={concept.ncertDefinition} />"
              </p>
            </div>

            {/* MINI RECAP */}
            <div className="flex gap-3 rounded-2xl bg-emerald-50/30 border border-emerald-100 p-4 dark:bg-emerald-950/10 dark:border-emerald-900/20">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-emerald-800 dark:text-emerald-400">
                  Concept Recap
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed dark:text-slate-400">
                  <MathText text={concept.miniRecap} />
                </p>
              </div>
            </div>
          </div>
        )}

        {/* EXAM TAB */}
        {activeTab === "exam" && (
          <div className="space-y-6 animate-fadeIn">
            {/* EXAM DEFINITION */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-5 dark:border-slate-800 dark:bg-slate-950/30">
              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                <Award className="h-5 w-5" />
                <h4 className="font-heading font-bold text-sm uppercase tracking-wider">
                  How to Write in Boards
                </h4>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                <MathText text={concept.examDefinition.text} />
              </p>
              
              {/* KEYWORDS */}
              <div className="mt-4">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                  Keywords to include:
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {concept.examDefinition.keywords.map((kw, i) => (
                    <span
                      key={i}
                      className="rounded-lg bg-indigo-50 border border-indigo-100/50 px-2 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-950/50 dark:border-indigo-900/50 dark:text-indigo-400"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* COMMON MISTAKES */}
            <div className="flex gap-4 rounded-2xl border border-rose-100 bg-rose-50/20 p-5 dark:border-rose-950/20 dark:bg-rose-950/10">
              <AlertTriangle className="h-6 w-6 text-rose-500 shrink-0" />
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-rose-800 dark:text-rose-400">
                  Common Exam Mistakes
                </h4>
                <p className="text-xs text-rose-700 leading-relaxed dark:text-rose-450">
                  <MathText text={concept.commonMistakes} />
                </p>
              </div>
            </div>

            {/* MEMORY TRICK & MNEMONIC */}
            <div className="flex gap-4 rounded-2xl border border-amber-100 bg-amber-50/20 p-5 dark:border-amber-950/20 dark:bg-amber-950/10">
              <Info className="h-6 w-6 text-amber-500 shrink-0" />
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-amber-800 dark:text-amber-400">
                  Memory Hack
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed dark:text-slate-300">
                  <MathText text={concept.memoryTrick} />
                </p>
                {concept.mnemonic && (
                  <p className="mt-2 text-xs font-bold text-amber-600 dark:text-amber-450">
                    💡 Mnemonic: <span className="underline">{concept.mnemonic}</span>
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ANALOGIES TAB */}
        {activeTab === "analogies" && (
          <div className="space-y-6 animate-fadeIn">
            {/* REAL-LIFE EXAMPLE */}
            <div className="space-y-2">
              <h4 className="font-heading font-bold text-base text-slate-800 dark:text-slate-200">
                🌍 Real-Life Scenario
              </h4>
              <p className="text-sm leading-relaxed text-slate-650 dark:text-slate-350">
                <MathText text={concept.realLifeExample} />
              </p>
            </div>

            {/* ANALOGY */}
            <div className="space-y-2 border-t border-slate-100 dark:border-slate-800 pt-4">
              <h4 className="font-heading font-bold text-base text-slate-800 dark:text-slate-200">
                ⚖️ Simple Analogy
              </h4>
              <p className="text-sm leading-relaxed text-slate-650 dark:text-slate-350">
                <MathText text={concept.analogy} />
              </p>
            </div>

            {/* VISUAL EXPLANATION */}
            <div className="space-y-2 border-t border-slate-100 dark:border-slate-800 pt-4">
              <h4 className="font-heading font-bold text-base text-slate-800 dark:text-slate-200">
                🎨 Visualizing this
              </h4>
              <p className="text-sm leading-relaxed text-slate-650 dark:text-slate-350">
                <MathText text={concept.visualExplanation} />
              </p>
            </div>

            {/* INTERESTING FACT */}
            <div className="flex gap-4 rounded-2xl bg-amber-50/20 border border-amber-100/50 p-4 dark:bg-amber-950/10 dark:border-amber-900/20">
              <Lightbulb className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-amber-800 dark:text-amber-400">
                  Cool Fact!
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed dark:text-slate-400">
                  <MathText text={concept.interestingFact} />
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* QUICK CHECK FOOTER */}
      <div className="mt-8 border-t border-slate-100 pt-6 dark:border-slate-800">
        {!showQuickCheck ? (
          <button
            onClick={handleQuickCheck}
            className="flex items-center gap-2 rounded-xl border border-indigo-100 bg-indigo-50/50 px-4 py-2 text-xs font-semibold text-indigo-700 transition-all hover:bg-indigo-50 hover:shadow-sm dark:border-indigo-950/30 dark:bg-indigo-950/10 dark:text-indigo-400 dark:hover:bg-indigo-950/35"
          >
            🧠 Test your understanding (+10 XP)
          </button>
        ) : (
          <div className="space-y-3 rounded-2xl bg-slate-50 border border-slate-200/80 p-5 dark:bg-slate-950/40 dark:border-slate-850">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wide dark:text-indigo-400">
                Quick Understanding Check
              </span>
              <span className="text-[10px] rounded bg-emerald-100 text-emerald-700 px-1.5 py-0.5 font-bold dark:bg-emerald-950/50 dark:text-emerald-400 animate-pulse">
                +10 XP Awarded
              </span>
            </div>
            
            <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
              <MathText text="Question: For a car travelling on a complete oval race track and finishing exactly at the pit lane where it started, what are its distance and displacement?" />
            </p>

            {!showAnswer ? (
              <button
                onClick={() => setShowAnswer(true)}
                className="mt-2 text-xs font-bold text-indigo-650 hover:underline dark:text-indigo-450"
              >
                Reveal Answer
              </button>
            ) : (
              <div className="mt-2 space-y-2 border-t border-slate-200/60 pt-3 dark:border-slate-800">
                <p className="text-xs font-bold text-slate-500 dark:text-slate-400">Correct Answer:</p>
                <p className="text-xs leading-relaxed text-slate-650 dark:text-slate-350">
                  <MathText text="The **distance is non-zero** (the total length of the oval track), but the **displacement is exactly zero** because the car's initial and final positions are identical." />
                </p>
                <button
                  onClick={() => {
                    setShowAnswer(false);
                    setShowQuickCheck(false);
                  }}
                  className="text-[11px] font-semibold text-slate-450 hover:text-slate-650"
                >
                  Collapse Check
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
