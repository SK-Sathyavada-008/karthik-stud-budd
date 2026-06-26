"use client";

import { useState, useEffect } from "react";
import { Brain, Check, X, HelpCircle, Eye, RefreshCw, Award } from "lucide-react";
import { Flashcard } from "@/lib/types";
import { updateFlashcardBox, getFlashcards } from "@/lib/db";

interface FlashcardDeckProps {
  chapterId: string;
}

export default function FlashcardDeck({ chapterId }: FlashcardDeckProps) {
  const [cards, setCards] = useState<Flashcard[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [deckCompleted, setDeckCompleted] = useState(false);

  // Load cards from DB/localStorage
  useEffect(() => {
    async function load() {
      const data = await getFlashcards(chapterId);
      setCards(data);
    }
    load();
  }, [chapterId]);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleCardFeedback = async (gotIt: boolean) => {
    const card = cards[currentIdx];
    let nextBox = card.box;
    
    if (gotIt) {
      nextBox = Math.min(5, card.box + 1);
    } else {
      nextBox = 1; // back to box 1 if incorrect
    }

    // Update database
    await updateFlashcardBox(card.id, nextBox);

    // Update state local copy
    const updatedCards = [...cards];
    updatedCards[currentIdx] = { ...card, box: nextBox };
    setCards(updatedCards);

    // Go to next card
    setIsFlipped(false);
    
    // Short timeout to let flip transition finish before changing text
    setTimeout(() => {
      if (currentIdx < cards.length - 1) {
        setCurrentIdx((prev) => prev + 1);
      } else {
        setDeckCompleted(true);
      }
    }, 200);
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setIsFlipped(false);
    setDeckCompleted(false);
  };

  if (cards.length === 0) {
    return <div className="text-center p-6 text-slate-500">Loading flashcards...</div>;
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:p-8">
      {/* Header */}
      <div className="flex justify-between items-start gap-4">
        <div>
          <span className="text-xs font-semibold tracking-wider text-indigo-600 uppercase dark:text-indigo-400">
            Active Recall Mode
          </span>
          <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-slate-50 md:text-xl mt-0.5">
            NCERT Flashcards
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Uses the Leitner Spaced-Repetition System. Box 5 cards are stored in long-term memory!
          </p>
        </div>
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-650 dark:bg-purple-950/40 dark:text-purple-400">
          <Brain className="h-5.5 w-5.5" />
        </div>
      </div>

      <div className="mt-6 space-y-6">
        {!deckCompleted ? (
          <div className="space-y-6 animate-fadeIn">
            {/* Progress tracker */}
            <div className="flex justify-between items-center text-xs font-bold text-slate-450">
              <span>CARD {currentIdx + 1} OF {cards.length}</span>
              <span className="inline-flex items-center rounded-lg bg-indigo-50 border border-indigo-100/50 px-2 py-0.5 text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-400">
                Leitner Box: {cards[currentIdx].box} / 5
              </span>
            </div>

            {/* Flashcard Flip Area */}
            <div
              onClick={handleFlip}
              className="relative cursor-pointer aspect-[3/2] w-full max-w-md mx-auto group perspective-1000"
            >
              {/* Inner card with rotate styles */}
              <div
                style={{
                  transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                  transformStyle: "preserve-3d",
                  transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
                }}
                className="relative h-full w-full rounded-3xl border border-slate-200/80 shadow-md bg-white dark:border-slate-800 dark:bg-slate-950"
              >
                {/* FRONT FACE */}
                <div
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden"
                  }}
                  className="absolute inset-0 flex flex-col justify-between p-6 dark:bg-slate-955 rounded-3xl"
                >
                  <div className="flex justify-between items-center text-[10px] uppercase font-bold text-indigo-500 tracking-wider">
                    <span>Question</span>
                    <HelpCircle className="h-4.5 w-4.5" />
                  </div>
                  <div className="text-center px-4">
                    <p className="text-base font-bold text-slate-800 leading-relaxed dark:text-slate-100 md:text-lg">
                      {cards[currentIdx].question}
                    </p>
                  </div>
                  <div className="text-center text-[10px] font-bold text-slate-400 group-hover:text-indigo-500 uppercase tracking-wider flex items-center justify-center gap-1">
                    <Eye className="h-3.5 w-3.5" /> Click Card to Flip
                  </div>
                </div>

                {/* BACK FACE */}
                <div
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(180deg)"
                  }}
                  className="absolute inset-0 flex flex-col justify-between p-6 bg-slate-50 dark:bg-slate-900 rounded-3xl"
                >
                  <div className="flex justify-between items-center text-[10px] uppercase font-bold text-emerald-500 tracking-wider">
                    <span>Model Answer</span>
                    <Award className="h-4.5 w-4.5" />
                  </div>
                  <div className="text-center px-2 overflow-y-auto max-h-[140px]">
                    <p className="text-sm font-semibold leading-relaxed text-slate-700 dark:text-slate-250">
                      {cards[currentIdx].answer}
                    </p>
                  </div>
                  <div className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Click Card to Flip back
                  </div>
                </div>
              </div>
            </div>

            {/* Answer Feedbacks (Visible when flipped) */}
            {isFlipped && (
              <div className="flex justify-center gap-4 max-w-sm mx-auto animate-slideUp">
                <button
                  onClick={() => handleCardFeedback(false)}
                  className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-rose-200 bg-rose-50/50 py-3 text-xs font-bold text-rose-700 transition-all hover:bg-rose-100/50 dark:border-rose-950/30 dark:bg-rose-950/15 dark:text-rose-400"
                >
                  <X className="h-4 w-4" />
                  Still Learning
                </button>
                <button
                  onClick={() => handleCardFeedback(true)}
                  className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-emerald-250 bg-emerald-50/50 py-3 text-xs font-bold text-emerald-700 transition-all hover:bg-emerald-100/50 dark:border-emerald-950/30 dark:bg-emerald-950/15 dark:text-emerald-400"
                >
                  <Check className="h-4 w-4" />
                  Got It!
                </button>
              </div>
            )}
          </div>
        ) : (
          /* COMPLETION CARD */
          <div className="rounded-3xl border border-indigo-100 bg-indigo-50/10 p-6 text-center dark:border-indigo-950/25 dark:bg-indigo-950/5 animate-fadeIn">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">
              <Brain className="h-8 w-8" />
            </div>

            <h4 className="font-heading text-lg font-bold text-slate-800 dark:text-slate-100 mt-4">
              Flashcards Reviewed!
            </h4>
            <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto leading-relaxed">
              Great session. These concepts are now updated in your spaced-repetition queue. Check back tomorrow!
            </p>

            <button
              onClick={handleRestart}
              className="mt-6 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-xs font-semibold text-slate-655 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              Review Deck Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
