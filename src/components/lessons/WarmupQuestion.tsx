"use client";

import { useState } from "react";
import { Sparkles, Lightbulb, CheckCircle2, ChevronRight } from "lucide-react";
import { addXP } from "@/lib/db";
import MathText from "@/components/ui/MathText";

interface WarmupQuestionProps {
  question: string;
  interestFact: string;
  hint: string;
  onComplete: () => void;
}

export default function WarmupQuestion({ question, interestFact, hint, onComplete }: WarmupQuestionProps) {
  const [userAnswer, setUserAnswer] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [xpAwarded, setXpAwarded] = useState(false);

  const handleSubmit = async () => {
    if (!userAnswer.trim()) return;
    setIsSubmitted(true);
    try {
      await addXP(15); // Award 15 XP for warming up!
      setXpAwarded(true);
      onComplete();
    } catch (e) {
      console.error("Error awarding XP:", e);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-indigo-100 bg-white p-6 shadow-sm transition-all dark:border-slate-800 dark:bg-slate-900 md:p-8">
      {/* Background soft gradients */}
      <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-indigo-500/5 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-purple-500/5 blur-3xl" />

      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400">
          <Sparkles className="h-6 w-6 animate-pulse" />
        </div>
        <div className="space-y-1">
          <span className="text-xs font-semibold tracking-wider text-indigo-600 uppercase dark:text-indigo-400">
            Let's Warm Up
          </span>
          <h3 className="font-heading text-lg font-bold text-slate-800 dark:text-slate-100 md:text-xl">
            Start with Curiosity
          </h3>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <p className="text-base text-slate-600 leading-relaxed dark:text-slate-300 md:text-lg">
          <MathText text={question} />
        </p>

        {!isSubmitted ? (
          <div className="space-y-3">
            <textarea
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="What do you think? Type your thoughts here..."
              rows={3}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 p-4 text-slate-800 placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:focus:border-indigo-400"
            />
            <div className="flex justify-between items-center">
              <span className="text-xs text-slate-400 dark:text-slate-500">
                💡 Hint: Think about total travel path vs. straight-line distance.
              </span>
              <button
                onClick={handleSubmit}
                disabled={!userAnswer.trim()}
                className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-indigo-700 hover:shadow-md disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400 dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:disabled:bg-slate-800 dark:disabled:text-slate-600"
              >
                Submit Response
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-6 space-y-4 rounded-2xl border border-indigo-50 bg-indigo-50/20 p-5 dark:border-indigo-950/25 dark:bg-indigo-950/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="h-5 w-5" />
                <span className="text-sm font-bold">Answer Submitted!</span>
              </div>
              {xpAwarded && (
                <span className="inline-flex items-center rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-bold text-amber-600 dark:bg-amber-950/50 dark:text-amber-400 animate-bounce">
                  ✨ +15 XP Awarded
                </span>
              )}
            </div>

            <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <p className="font-semibold text-slate-600 dark:text-slate-400">Your thought:</p>
              <p className="italic bg-white/50 p-3 rounded-xl dark:bg-slate-900/50">
                "{userAnswer}"
              </p>
            </div>

            <div className="border-t border-indigo-100/50 pt-3 dark:border-indigo-900/20">
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                👩‍🏫 Teacher's Guide:
              </p>
              <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                <MathText text={hint} />
              </p>
            </div>
          </div>
        )}

        <div className="flex gap-4 rounded-2xl border border-amber-100 bg-amber-50/30 p-4 dark:border-amber-900/20 dark:bg-amber-950/10">
          <Lightbulb className="h-6 w-6 shrink-0 text-amber-500" />
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-amber-800 dark:text-amber-400">
              Did You Know?
            </h4>
            <p className="text-xs text-amber-700 leading-relaxed dark:text-amber-500">
              <MathText text={interestFact} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
