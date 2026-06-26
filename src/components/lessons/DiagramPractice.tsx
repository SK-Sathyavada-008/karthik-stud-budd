"use client";

import { useState } from "react";
import { Check, AlertCircle, RefreshCw, Sparkles, CheckCircle2 } from "lucide-react";
import { DiagramPractice } from "@/lib/types";
import { addXP } from "@/lib/db";
import confetti from "canvas-confetti";

interface DiagramPracticeProps {
  practice: DiagramPractice;
  onComplete?: () => void;
}

export default function DiagramPracticeComponent({ practice, onComplete }: DiagramPracticeProps) {
  const [selectedValues, setSelectedValues] = useState<Record<string, string>>({});
  const [isVerified, setIsVerified] = useState(false);
  const [results, setResults] = useState<Record<string, boolean>>({});
  const [allCorrect, setAllCorrect] = useState(false);
  const [xpAwarded, setXpAwarded] = useState(false);

  // List of all options for the dropdowns
  const options = practice.labels.map((l) => l.text);

  const handleSelect = (labelId: string, value: string) => {
    setSelectedValues((prev) => ({ ...prev, [labelId]: value }));
    // Reset verify state if they change values
    setIsVerified(false);
  };

  const handleVerify = async () => {
    const newResults: Record<string, boolean> = {};
    let correctCount = 0;

    practice.labels.forEach((lbl) => {
      const selected = selectedValues[lbl.id];
      const isCorrect = selected === lbl.text;
      newResults[lbl.id] = isCorrect;
      if (isCorrect) correctCount++;
    });

    setResults(newResults);
    setIsVerified(true);

    const isAllCorrect = correctCount === practice.labels.length;
    setAllCorrect(isAllCorrect);

    if (isAllCorrect && !xpAwarded) {
      // Confetti splash!
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 }
      });
      await addXP(25); // Award 25 XP for perfect labeling!
      setXpAwarded(true);
      onComplete?.();
    }
  };

  const handleReset = () => {
    setSelectedValues({});
    setIsVerified(false);
    setResults({});
    setAllCorrect(false);
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:p-8">
      <div>
        <span className="text-xs font-semibold tracking-wider text-indigo-600 uppercase dark:text-indigo-400">
          Visual Learning Practice
        </span>
        <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-slate-50 md:text-xl mt-0.5">
          {practice.title}
        </h3>
        <p className="text-xs text-slate-500 mt-1 dark:text-slate-400">
          Match the correct labels to their corresponding parts on the diagram below.
        </p>
      </div>

      {/* SVG Diagram Canvas */}
      <div className="relative mt-6 overflow-hidden rounded-2xl border border-slate-100 bg-slate-50/50 p-4 dark:border-slate-800/80 dark:bg-slate-950/30">
        <div className="relative mx-auto aspect-video max-w-lg w-full">
          {/* Velocity-Time Graph SVG */}
          {practice.svgType === "velocity-graph" && (
            <svg viewBox="0 0 400 250" className="w-full h-full text-slate-400 dark:text-slate-600">
              {/* Gridlines */}
              <line x1="50" y1="50" x2="350" y2="50" stroke="currentColor" strokeDasharray="3,3" strokeOpacity="0.2" />
              <line x1="50" y1="120" x2="350" y2="120" stroke="currentColor" strokeDasharray="3,3" strokeOpacity="0.2" />
              <line x1="350" y1="50" x2="350" y2="200" stroke="currentColor" strokeDasharray="3,3" strokeOpacity="0.2" />
              
              {/* Axes */}
              <line x1="50" y1="20" x2="50" y2="210" stroke="currentColor" strokeWidth="2.5" />
              <line x1="40" y1="200" x2="370" y2="200" stroke="currentColor" strokeWidth="2.5" />
              
              {/* Axis Arrows */}
              <polygon points="50,15 46,23 54,23" fill="currentColor" />
              <polygon points="375,200 367,196 367,204" fill="currentColor" />

              {/* Shaded Area representing displacement */}
              <path d="M 50 120 L 350 50 L 350 200 L 50 200 Z" fill="rgba(99, 102, 241, 0.08)" />

              {/* Motion Curve (Uniform Acceleration) */}
              <line x1="50" y1="120" x2="350" y2="50" stroke="#6366F1" strokeWidth="4.5" strokeLinecap="round" />
              <circle cx="50" cy="120" r="5" fill="#4F46E5" />
              <circle cx="350" cy="50" r="5" fill="#4F46E5" />

              {/* Axis Titles */}
              <text x="30" y="25" fill="currentColor" fontSize="10" fontWeight="bold" transform="rotate(-90 30 25)" textAnchor="end">
                Velocity (v) ──►
              </text>
              <text x="365" y="218" fill="currentColor" fontSize="10" fontWeight="bold" textAnchor="end">
                Time (t) ──►
              </text>
            </svg>
          )}

          {/* Absolute Positioned Labels */}
          {practice.labels.map((lbl) => {
            const hasVal = !!selectedValues[lbl.id];
            const isCorrect = results[lbl.id];
            
            return (
              <div
                key={lbl.id}
                style={{ left: `${lbl.x}%`, top: `${lbl.y}%` }}
                className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="flex flex-col items-center">
                  {/* Small line pointer */}
                  <div className="h-4 w-[2px] bg-indigo-500/30" />
                  
                  <div className="flex items-center gap-1">
                    <select
                      value={selectedValues[lbl.id] || ""}
                      onChange={(e) => handleSelect(lbl.id, e.target.value)}
                      disabled={allCorrect}
                      className={`h-9 rounded-xl border text-[11px] font-bold shadow-sm focus:outline-none transition-all px-2 pr-3 bg-white text-slate-800 dark:bg-slate-900 dark:text-slate-100 ${
                        isVerified
                          ? isCorrect
                            ? "border-emerald-500 bg-emerald-50 text-emerald-700 dark:border-emerald-500/50 dark:bg-emerald-950/20 dark:text-emerald-400"
                            : "border-rose-400 bg-rose-50 text-rose-700 dark:border-rose-900/50 dark:bg-rose-950/20 dark:text-rose-450"
                          : hasVal
                          ? "border-indigo-400 bg-indigo-50/50 dark:border-indigo-500/50 dark:bg-indigo-950/20"
                          : "border-slate-350 bg-white hover:border-slate-450 dark:border-slate-850"
                      }`}
                    >
                      <option value="">Choose label...</option>
                      {options.map((opt, idx) => (
                        <option key={idx} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>

                    {isVerified && (
                      <div className="shrink-0">
                        {isCorrect ? (
                          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white">
                            <Check className="h-3 w-3 stroke-[3]" />
                          </div>
                        ) : (
                          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-white">
                            <AlertCircle className="h-3 w-3 stroke-[3]" />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Verification footer */}
      <div className="mt-8 flex justify-between items-center">
        <button
          onClick={handleReset}
          className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-semibold text-slate-500 hover:bg-slate-50 hover:text-slate-800 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200"
        >
          <RefreshCw className="h-3.5 w-3.5" />
          Reset
        </button>

        {allCorrect ? (
          <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 animate-fadeIn">
            <CheckCircle2 className="h-5 w-5" />
            <span className="text-sm font-bold">Excellent! Correct labels!</span>
            {xpAwarded && (
              <span className="ml-2 inline-flex items-center rounded-full bg-amber-50 px-2 py-0.5 text-xs font-bold text-amber-600 dark:bg-amber-950/50 dark:text-amber-400 animate-bounce">
                ✨ +25 XP
              </span>
            )}
          </div>
        ) : (
          <button
            onClick={handleVerify}
            disabled={Object.keys(selectedValues).length < practice.labels.length}
            className="flex items-center gap-2 rounded-xl bg-indigo-650 px-5 py-2.5 text-xs font-semibold text-white transition-all hover:bg-indigo-750 hover:shadow-md disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400 dark:bg-indigo-600 dark:hover:bg-indigo-500 dark:disabled:bg-slate-800 dark:disabled:text-slate-650"
          >
            Verify Labels
          </button>
        )}
      </div>
    </div>
  );
}
