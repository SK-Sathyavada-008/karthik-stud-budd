"use client";

import { useState } from "react";
import { Award, HelpCircle, Star, AlertCircle, HelpCircle as HelpIcon, ArrowRight, RefreshCw, Eye, EyeOff, BookOpen } from "lucide-react";
import { MCQQuestion, AssertionReasonQuestion, CaseStudyQuestion, HOTSQuestion, PYQQuestion } from "@/lib/types";
import { recordQuizResult } from "@/lib/db";
import confetti from "canvas-confetti";
import MathText from "@/components/ui/MathText";

interface InteractiveQuizProps {
  chapterId: string;
  mcqs: MCQQuestion[];
  assertionReasons: AssertionReasonQuestion[];
  caseStudy: CaseStudyQuestion;
  hots: HOTSQuestion[];
  pyqs: PYQQuestion[];
}

export default function InteractiveQuiz({
  chapterId,
  mcqs,
  assertionReasons,
  caseStudy,
  hots,
  pyqs
}: InteractiveQuizProps) {
  const [activeQuizType, setActiveQuizType] = useState<"mcq" | "ar" | "case" | "hots" | "pyq">("mcq");

  /* ==========================================
     MCQ STATE
     ========================================== */
  const [currentMcqIdx, setCurrentMcqIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [mcqAnswers, setMcqAnswers] = useState<Record<number, number>>({});
  const [mcqScore, setMcqScore] = useState(0);
  const [isMcqCompleted, setIsMcqCompleted] = useState(false);

  const handleMcqSelect = (idx: number) => {
    if (selectedOption !== null) return; // Answered already
    setSelectedOption(idx);
    const correct = idx === mcqs[currentMcqIdx].correctIndex;
    if (correct) {
      setMcqScore((prev) => prev + 1);
    }
    setMcqAnswers((prev) => ({ ...prev, [currentMcqIdx]: idx }));
  };

  const handleMcqNext = async () => {
    setSelectedOption(null);
    if (currentMcqIdx < mcqs.length - 1) {
      setCurrentMcqIdx((prev) => prev + 1);
    } else {
      setIsMcqCompleted(true);
      // Confetti for completion
      if (mcqScore >= 5) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.8 }
        });
      }
      // Record in local database/storage
      await recordQuizResult(chapterId, mcqScore, mcqs.length);
    }
  };

  const handleMcqRestart = () => {
    setCurrentMcqIdx(0);
    setSelectedOption(null);
    setMcqAnswers({});
    setMcqScore(0);
    setIsMcqCompleted(false);
  };

  /* ==========================================
     ASSERTION REASON STATE
     ========================================== */
  const [arSelected, setArSelected] = useState<Record<string, string>>({});
  const arOptions = [
    { key: "A", text: "Both Assertion (A) and Reason (R) are true, and (R) is the correct explanation of (A)." },
    { key: "B", text: "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A)." },
    { key: "C", text: "(A) is true, but (R) is false." },
    { key: "D", text: "(A) is false, but (R) is true." }
  ];

  /* ==========================================
     CASE STUDY STATE
     ========================================== */
  const [caseAnswers, setCaseAnswers] = useState<Record<number, number>>({});

  /* ==========================================
     HOTS & PYQ SHOW/HIDE ANSWERS
     ========================================== */
  const [revealedHots, setRevealedHots] = useState<Record<string, boolean>>({});
  const [revealedPyqs, setRevealedPyqs] = useState<Record<string, boolean>>({});

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:p-8">
      {/* Heading */}
      <div className="flex flex-col gap-1">
        <span className="text-xs font-semibold tracking-wider text-purple-600 uppercase dark:text-purple-400">
          CBSE Assessment Mode
        </span>
        <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-slate-50 md:text-2xl mt-0.5">
          Exam Practice & Quiz
        </h3>
      </div>

      {/* Selector Tabs */}
      <div className="mt-6 flex flex-wrap gap-2 border-b border-slate-100 pb-3 dark:border-slate-800">
        {[
          { id: "mcq", label: "Gamified MCQs (10)" },
          { id: "ar", label: "Assertion-Reason" },
          { id: "case", label: "Case Study" },
          { id: "hots", label: "HOTS Questions" },
          { id: "pyq", label: "Board PYQs" }
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveQuizType(t.id as any)}
            className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${
              activeQuizType === t.id
                ? "bg-purple-650 text-white shadow-sm dark:bg-purple-600"
                : "bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-800 dark:bg-slate-800 dark:text-slate-450 dark:hover:bg-slate-750"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* ====================================================================
          1. MCQS PANEL
          ==================================================================== */}
      {activeQuizType === "mcq" && (
        <div className="mt-6 space-y-6">
          {!isMcqCompleted ? (
            <div className="space-y-6 animate-fadeIn">
              {/* Score and Tracker */}
              <div className="flex justify-between items-center text-xs font-bold text-slate-450">
                <span>QUESTION {currentMcqIdx + 1} OF {mcqs.length}</span>
                <span className="text-purple-600 dark:text-purple-450">SCORE: {mcqScore}</span>
              </div>

              {/* Progress bar */}
              <div className="h-2 w-full rounded-full bg-slate-150 dark:bg-slate-850 overflow-hidden">
                <div
                  className="h-full bg-purple-600 transition-all duration-350"
                  style={{ width: `${((currentMcqIdx + 1) / mcqs.length) * 100}%` }}
                />
              </div>

              {/* Question Text */}
              <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-5 dark:border-slate-800 dark:bg-slate-950/20">
                <p className="text-base font-semibold leading-relaxed text-slate-800 dark:text-slate-200 md:text-lg">
                  <MathText text={mcqs[currentMcqIdx].question} />
                </p>
              </div>

              {/* Options */}
              <div className="grid gap-3">
                {mcqs[currentMcqIdx].options.map((opt, i) => {
                  const isAnswered = selectedOption !== null;
                  const isThisSelected = selectedOption === i;
                  const isCorrect = i === mcqs[currentMcqIdx].correctIndex;
                  const isWrongSelected = isThisSelected && !isCorrect;

                  let borderClass = "border-slate-200 hover:border-purple-300 dark:border-slate-800 dark:hover:border-purple-900";
                  let bgClass = "bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-850/50";
                  let textClass = "text-slate-700 dark:text-slate-350";

                  if (isAnswered) {
                    if (isCorrect) {
                      borderClass = "border-emerald-500 dark:border-emerald-500/50";
                      bgClass = "bg-emerald-50/30 dark:bg-emerald-950/15";
                      textClass = "text-emerald-800 dark:text-emerald-400 font-bold";
                    } else if (isWrongSelected) {
                      borderClass = "border-rose-455 dark:border-rose-900/50";
                      bgClass = "bg-rose-50/30 dark:bg-rose-950/15";
                      textClass = "text-rose-800 dark:text-rose-400 font-bold";
                    } else {
                      borderClass = "border-slate-150 dark:border-slate-850";
                      bgClass = "bg-white/40 dark:bg-slate-900/40 opacity-50";
                    }
                  }

                  return (
                    <button
                      key={i}
                      onClick={() => handleMcqSelect(i)}
                      disabled={isAnswered}
                      className={`flex items-center justify-between rounded-xl border p-4 text-left text-sm transition-all focus:outline-none ${borderClass} ${bgClass}`}
                    >
                      <span className={textClass}>
                        <MathText text={opt} />
                      </span>
                      {isAnswered && isCorrect && (
                        <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">✓ Correct</span>
                      )}
                      {isAnswered && isWrongSelected && (
                        <span className="text-xs font-bold text-rose-600 dark:text-rose-400">✗ Incorrect</span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation box */}
              {selectedOption !== null && (
                <div className="rounded-2xl border border-indigo-50 bg-indigo-50/20 p-5 dark:border-indigo-950/20 dark:bg-indigo-950/10 animate-slideUp">
                  <h4 className="flex items-center gap-1.5 text-xs font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-wide">
                    <BookOpen className="h-4 w-4" /> Explanation
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-slate-655 dark:text-slate-400">
                    <MathText text={mcqs[currentMcqIdx].explanation} />
                  </p>
                </div>
              )}

              {/* Next Button */}
              {selectedOption !== null && (
                <div className="flex justify-end">
                  <button
                    onClick={handleMcqNext}
                    className="flex items-center gap-2 rounded-xl bg-purple-650 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-purple-750 dark:bg-purple-600 dark:hover:bg-purple-550"
                  >
                    {currentMcqIdx === mcqs.length - 1 ? "Finish Quiz" : "Next Question"}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* MCQ SCORECARD */
            <div className="rounded-3xl border border-purple-100 bg-purple-50/10 p-6 text-center dark:border-purple-950/25 dark:bg-purple-950/5 animate-fadeIn">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-purple-600 dark:bg-purple-950 dark:text-purple-400">
                <Award className="h-10 w-10" />
              </div>

              <h4 className="font-heading text-xl font-bold text-slate-800 dark:text-slate-100 mt-4">
                Quiz Completed!
              </h4>

              {/* Star grading */}
              <div className="mt-3 flex justify-center gap-2">
                {[1, 2, 3].map((star) => {
                  const earn3 = mcqScore === mcqs.length;
                  const earn2 = mcqScore >= 7 && mcqScore < mcqs.length;
                  const earn1 = mcqScore >= 5 && mcqScore < 7;
                  
                  let earned = false;
                  if (star === 1) earned = earn1 || earn2 || earn3;
                  if (star === 2) earned = earn2 || earn3;
                  if (star === 3) earned = earn3;

                  return (
                    <Star
                      key={star}
                      className={`h-7 w-7 ${
                        earned ? "fill-amber-400 text-amber-400 animate-bounce" : "text-slate-200 dark:text-slate-800"
                      }`}
                    />
                  );
                })}
              </div>

              <div className="mt-4 space-y-1">
                <p className="text-3xl font-extrabold text-purple-650 dark:text-purple-450">
                  {mcqScore} / {mcqs.length}
                </p>
                <p className="text-xs text-slate-500">
                  {mcqScore === mcqs.length
                    ? "Wow! A perfect score! You are a master! 🚀"
                    : mcqScore >= 7
                    ? "Awesome job! You have a solid grasp! 🌟"
                    : mcqScore >= 5
                    ? "Good try, you passed! Review explanations to score 10/10 next time."
                    : "Need more practice. Let's study again together!"}
                </p>
              </div>

              <div className="mt-6 flex justify-center gap-3">
                <button
                  onClick={handleMcqRestart}
                  className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-xs font-semibold text-slate-600 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800"
                >
                  <RefreshCw className="h-3.5 w-3.5" />
                  Try Again
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ====================================================================
          2. ASSERTION REASON PANEL
          ==================================================================== */}
      {activeQuizType === "ar" && (
        <div className="mt-6 space-y-8 animate-fadeIn">
          {/* Option keys guidance */}
          <div className="rounded-2xl bg-indigo-50/20 border border-indigo-100/50 p-4 dark:bg-indigo-950/10 dark:border-indigo-900/35">
            <h4 className="text-xs font-bold text-indigo-800 dark:text-indigo-400 uppercase tracking-wide">
              CBSE Instruction Guide
            </h4>
            <div className="mt-2.5 grid gap-2 text-xs text-slate-650 dark:text-slate-400 leading-relaxed">
              {arOptions.map((o) => (
                <div key={o.key} className="flex gap-2">
                  <span className="font-bold text-indigo-700 dark:text-indigo-400">Option {o.key}:</span>
                  <span>{o.text}</span>
                </div>
              ))}
            </div>
          </div>

          {assertionReasons.map((ar, index) => {
            const selected = arSelected[ar.id];
            const hasAnswered = !!selected;
            const isCorrect = selected === ar.correctOption;

            return (
              <div key={ar.id} className="space-y-4 border-t border-slate-100 pt-6 dark:border-slate-800">
                <h4 className="font-heading text-sm font-bold text-slate-800 dark:text-slate-200">
                  Question {index + 1}
                </h4>
                <div className="grid gap-2 rounded-2xl bg-slate-50/50 border border-slate-200 p-5 dark:bg-slate-950/20 dark:border-slate-850">
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                    <span className="font-bold text-purple-650 dark:text-purple-400">Assertion (A):</span> <MathText text={ar.assertion} />
                  </p>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                    <span className="font-bold text-purple-650 dark:text-purple-400">Reason (R):</span> <MathText text={ar.reason} />
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {["A", "B", "C", "D"].map((key) => {
                    const active = selected === key;
                    const isKeyCorrect = key === ar.correctOption;

                    let btnClass = "border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-850 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-850";
                    if (hasAnswered) {
                      if (isKeyCorrect) {
                        btnClass = "border-emerald-500 bg-emerald-50/30 text-emerald-700 dark:border-emerald-500/50 dark:bg-emerald-950/20 dark:text-emerald-400";
                      } else if (active) {
                        btnClass = "border-rose-455 bg-rose-50/30 text-rose-700 dark:border-rose-900/50 dark:bg-rose-950/20 dark:text-rose-400";
                      } else {
                        btnClass = "border-slate-150 bg-slate-100/40 text-slate-400 opacity-60 dark:border-slate-850 dark:bg-slate-950/10";
                      }
                    }

                    return (
                      <button
                        key={key}
                        disabled={hasAnswered}
                        onClick={() => setArSelected((prev) => ({ ...prev, [ar.id]: key }))}
                        className={`rounded-xl border py-2.5 text-center text-xs font-bold transition-all focus:outline-none ${btnClass}`}
                      >
                        Option {key}
                      </button>
                    );
                  })}
                </div>

                {hasAnswered && (
                  <div className="rounded-2xl border border-indigo-50 bg-indigo-50/25 p-4 dark:border-indigo-950/20 dark:bg-indigo-950/10 animate-slideUp">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-750 dark:text-indigo-400">
                        Explanation
                      </span>
                      {isCorrect ? (
                        <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">✓ Correct (+10 XP)</span>
                      ) : (
                        <span className="text-xs font-bold text-rose-600 dark:text-rose-400">✗ Incorrect (Correct: {ar.correctOption})</span>
                      )}
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-slate-650 dark:text-slate-400">
                      <MathText text={ar.explanation} />
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* ====================================================================
          3. CASE STUDY PANEL
          ==================================================================== */}
      {activeQuizType === "case" && (
        <div className="mt-6 space-y-6 animate-fadeIn">
          {/* Passage */}
          <div className="rounded-2xl bg-indigo-50/25 border border-indigo-150/40 p-5 dark:bg-indigo-950/10 dark:border-indigo-900/30">
            <h4 className="text-xs font-bold text-indigo-800 dark:text-indigo-400 uppercase tracking-wide">
              Case Study Scenario
            </h4>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-350">
              <MathText text={caseStudy.passage} />
            </p>
          </div>

          {/* Sub-questions */}
          {caseStudy.questions.map((q, idx) => {
            const answer = caseAnswers[idx];
            const answered = answer !== undefined;
            const correct = answer === q.correctIndex;

            return (
              <div key={idx} className="space-y-3 border-t border-slate-100 pt-6 dark:border-slate-800">
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                  Question {idx + 1}: <MathText text={q.question} />
                </p>
                
                <div className="grid gap-2">
                  {q.options.map((opt, i) => {
                    const isCorrectOpt = i === q.correctIndex;
                    const isSelectedOpt = answer === i;

                    let btnClass = "border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-850 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-850";
                    if (answered) {
                      if (isCorrectOpt) {
                        btnClass = "border-emerald-500 bg-emerald-50/30 text-emerald-700 dark:border-emerald-500/50 dark:bg-emerald-950/20 dark:text-emerald-400 font-bold";
                      } else if (isSelectedOpt) {
                        btnClass = "border-rose-455 bg-rose-50/30 text-rose-700 dark:border-rose-900/50 dark:bg-rose-950/20 dark:text-rose-400 font-bold";
                      } else {
                        btnClass = "border-slate-150 bg-slate-100/40 text-slate-400 opacity-60 dark:border-slate-850 dark:bg-slate-950/10";
                      }
                    }

                    return (
                      <button
                        key={i}
                        disabled={answered}
                        onClick={() => setCaseAnswers((prev) => ({ ...prev, [idx]: i }))}
                        className={`rounded-xl border p-3 text-left text-xs transition-all focus:outline-none ${btnClass}`}
                      >
                        <MathText text={opt} />
                      </button>
                    );
                  })}
                </div>

                {answered && (
                  <div className="rounded-2xl border border-indigo-50 bg-indigo-50/25 p-4 dark:border-indigo-950/20 dark:bg-indigo-950/10 animate-slideUp">
                    <p className="text-[11px] font-bold text-indigo-750 uppercase tracking-wider dark:text-indigo-400">
                      Reasoning
                    </p>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-650 dark:text-slate-400">
                      <MathText text={q.explanation} />
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* ====================================================================
          4. HOTS PANEL
          ==================================================================== */}
      {activeQuizType === "hots" && (
        <div className="mt-6 space-y-6 animate-fadeIn">
          {hots.map((h, i) => {
            const isRevealed = !!revealedHots[h.id];
            
            return (
              <div key={h.id} className="rounded-2xl border border-slate-200 p-5 dark:border-slate-800 dark:bg-slate-950/20 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center rounded bg-rose-50 border border-rose-100/60 px-2 py-0.5 text-[10px] font-bold text-rose-700 uppercase dark:bg-rose-950/50 dark:text-rose-400">
                    High Order Thinking
                  </span>
                  <span className="text-xs text-slate-450 font-semibold">Question {i + 1}</span>
                </div>
                
                <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">
                  <MathText text={h.question} />
                </h4>

                {!isRevealed ? (
                  <button
                    onClick={() => setRevealedHots((prev) => ({ ...prev, [h.id]: true }))}
                    className="flex items-center gap-1.5 text-xs font-bold text-purple-650 hover:underline dark:text-purple-450 mt-2"
                  >
                    <Eye className="h-4.5 w-4.5" /> Reveal Thinking Process & Solution
                  </button>
                ) : (
                  <div className="mt-4 border-t border-slate-200/50 pt-4 space-y-3 dark:border-slate-800 animate-fadeIn">
                    <div className="space-y-1">
                      <p className="text-xs font-bold text-indigo-600 uppercase tracking-wider dark:text-indigo-400">
                        Thinking Process:
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed dark:text-slate-450 italic">
                        <MathText text={h.thinkingProcess} />
                      </p>
                    </div>

                    <div className="space-y-1">
                      <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider dark:text-emerald-400">
                        Perfect Answer:
                      </p>
                      <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-350">
                        <MathText text={h.answer} />
                      </p>
                    </div>

                    <button
                      onClick={() => setRevealedHots((prev) => ({ ...prev, [h.id]: false }))}
                      className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-450 hover:text-slate-600"
                    >
                      <EyeOff className="h-4 w-4" /> Hide Solution
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* ====================================================================
          5. PYQS PANEL
          ==================================================================== */}
      {activeQuizType === "pyq" && (
        <div className="mt-6 space-y-6 animate-fadeIn">
          {pyqs.map((p, i) => {
            const isRevealed = !!revealedPyqs[p.id];
            
            return (
              <div key={p.id} className="rounded-2xl border border-slate-250 p-5 dark:border-slate-800 dark:bg-slate-950/20 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex gap-2 items-center">
                    <span className="rounded bg-indigo-55 px-2 py-0.5 text-[10px] font-bold text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-400 uppercase tracking-wide">
                      CBSE {p.year}
                    </span>
                    <span className="text-[10px] rounded border border-slate-200 bg-slate-50 px-1.5 font-bold text-slate-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-450">
                      {p.marks} Mark Question
                    </span>
                  </div>
                  <span className="text-xs text-slate-450 font-semibold">Question {i + 1}</span>
                </div>
                
                <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 leading-relaxed">
                  <MathText text={p.question} />
                </h4>

                {!isRevealed ? (
                  <button
                    onClick={() => setRevealedPyqs((prev) => ({ ...prev, [p.id]: true }))}
                    className="flex items-center gap-1.5 text-xs font-bold text-purple-650 hover:underline dark:text-purple-450 mt-2"
                  >
                    <Eye className="h-4.5 w-4.5" /> Reveal Model Answer & Examiner Comments
                  </button>
                ) : (
                  <div className="mt-4 border-t border-slate-200/50 pt-4 space-y-4 dark:border-slate-800 animate-fadeIn">
                    <div className="space-y-1">
                      <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider dark:text-emerald-400">
                        Model Answer (CBSE Marking Scheme):
                      </p>
                      <div className="text-xs leading-relaxed text-slate-700 dark:text-slate-350 bg-slate-50/50 border border-slate-100 p-3 rounded-xl dark:bg-slate-950/30 dark:border-slate-850">
                        {/* Render simple markdown styling inside answers */}
                        {p.answer.split("\n").map((line, idx) => (
                          <p key={idx} className="mb-1">
                            <MathText text={line} />
                          </p>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3 rounded-xl border border-rose-100 bg-rose-50/20 p-4 dark:border-rose-950/20 dark:bg-rose-950/10">
                      <AlertCircle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                      <div className="space-y-0.5">
                        <h4 className="text-xs font-bold text-rose-800 dark:text-rose-400">
                          Examiner's Comments & Mistakes to Avoid
                        </h4>
                        <p className="text-[11px] text-rose-700 leading-relaxed dark:text-rose-450">
                          <MathText text={p.examinerComments} />
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => setRevealedPyqs((prev) => ({ ...prev, [p.id]: false }))}
                      className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-455 hover:text-slate-655"
                    >
                      <EyeOff className="h-4 w-4" /> Hide Model Answer
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
