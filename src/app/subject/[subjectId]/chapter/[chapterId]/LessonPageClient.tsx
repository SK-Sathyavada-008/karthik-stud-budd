"use client";

import { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { getSubject, getChapter, getLessonData, updateChapterProgress, addXP } from "@/lib/db";
import { Subject, Chapter } from "@/lib/types";
import { ChapterLessonData } from "@/lib/seedData";

// Lesson sub-components
import WarmupQuestion from "@/components/lessons/WarmupQuestion";
import ConceptSection from "@/components/lessons/ConceptSection";
import DiagramPracticeComponent from "@/components/lessons/DiagramPractice";
import InteractiveQuiz from "@/components/lessons/InteractiveQuiz";
import MindMap from "@/components/lessons/MindMap";
import FlashcardDeck from "@/components/lessons/FlashcardDeck";
import ChatSidebar from "@/components/tutor/ChatSidebar";
import MathText from "@/components/ui/MathText";

import { Brain, ArrowLeft, MessageSquare, Award, Clock, Star, ChevronRight, HelpCircle, BookOpen, Calculator, Sparkles, Sun, Moon, AlertCircle } from "lucide-react";
import confetti from "canvas-confetti";
import katex from "katex";

function LessonPageContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();

  const subjectId = params.subjectId as string;
  const chapterId = params.chapterId as string;
  
  // URL tab helper
  const initialTab = searchParams.get("tab") || "intro";

  const [subject, setSubject] = useState<Subject | null>(null);
  const [chapter, setChapter] = useState<Chapter | null>(null);
  const [lesson, setLesson] = useState<ChapterLessonData | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Layout navigation states
  const [activeSection, setActiveSection] = useState<string>(initialTab);
  const [isTutorOpen, setIsTutorOpen] = useState(searchParams.get("tutor") === "open");
  const [currentConceptIdx, setCurrentConceptIdx] = useState(0);

  // Lesson milestone markers
  const [warmupDone, setWarmupDone] = useState(false);
  const [diagramDone, setDiagramDone] = useState(false);
  const [quizDone, setQuizDone] = useState(false);
  const [dailyAnswer, setDailyAnswer] = useState("");
  const [dailySubmitted, setDailySubmitted] = useState(false);
  const [dailyCorrect, setDailyCorrect] = useState(false);

  useEffect(() => {
    async function loadData() {
      const subData = await getSubject(subjectId);
      const chData = await getChapter(subjectId, chapterId);
      const lessonData = await getLessonData(chapterId);

      if (!subData || !chData || !lessonData) {
        router.push("/");
        return;
      }

      setSubject(subData);
      setChapter(chData);
      setLesson(lessonData);
      
      // Update progress to "in_progress" (20%) when lesson page loads
      await updateChapterProgress(chapterId, 20, "in_progress");
    }
    loadData();

    if (typeof window !== "undefined") {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    }
  }, [subjectId, chapterId]);

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

  const handleWarmupComplete = async () => {
    setWarmupDone(true);
    await updateChapterProgress(chapterId, 40, "in_progress");
  };

  const handleDiagramComplete = async () => {
    setDiagramDone(true);
    await updateChapterProgress(chapterId, 60, "in_progress");
  };

  const handleDailyChallenge = async () => {
    const isCorrect = dailyAnswer.trim() === "550" || dailyAnswer.toLowerCase().includes("550 meters") || dailyAnswer.toLowerCase().includes("550m");
    setDailyCorrect(isCorrect);
    setDailySubmitted(true);
    
    if (isCorrect) {
      confetti({
        particleCount: 50,
        spread: 45,
        origin: { y: 0.8 }
      });
      await addXP(30); // Award 30 XP for crushing the daily challenge!
      await updateChapterProgress(chapterId, 100, "completed");
    }
  };

  if (!subject || !chapter || !lesson) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 dark:bg-slate-955">
        <div className="text-center space-y-2">
          <Brain className="h-10 w-10 animate-bounce mx-auto text-indigo-500" />
          <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">Loading dynamic lesson...</p>
        </div>
      </div>
    );
  }

  const sectionsList = [
    { id: "intro", label: "1. Introduction & Warmup" },
    { id: "concepts", label: "2. Explanations & NCERT" },
    { id: "diagrams", label: "3. Visual Labelling" },
    { id: "formulas", label: "4. Formulas & Examples" },
    { id: "quiz", label: "5. Gamified Quiz Mode" },
    { id: "revision", label: "6. Summary & Flashcards" }
  ];

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-800 dark:bg-slate-955 dark:text-slate-100 font-sans transition-colors duration-300">
      
      {/* TOP HEADER */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-200/50 bg-white/80 backdrop-blur-md dark:border-slate-900/50 dark:bg-slate-950/80">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <Link
              href={`/subject/${subjectId}`}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 hover:text-slate-800 dark:border-slate-850 dark:bg-slate-900 dark:text-slate-450 dark:hover:bg-slate-800"
            >
              <ArrowLeft className="h-4.5 w-4.5" />
            </Link>
            <div>
              <span className="text-[10px] font-bold text-indigo-650 uppercase dark:text-indigo-400">
                Class 9 • {subject.name}
              </span>
              <h2 className="font-heading text-sm font-extrabold text-slate-900 dark:text-white mt-0.5">
                Chapter {chapter.chapterNumber}: {chapter.name}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Dark mode switch */}
            <button
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 hover:text-slate-800 dark:border-slate-850 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800"
            >
              {isDarkMode ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
            </button>

            {/* AI Tutor Toggle */}
            <button
              onClick={() => setIsTutorOpen(!isTutorOpen)}
              className="flex items-center gap-1.5 rounded-xl bg-indigo-650 px-4.5 py-2 text-xs font-bold text-white shadow-sm hover:bg-indigo-755 dark:bg-indigo-650 dark:hover:bg-indigo-505"
            >
              <MessageSquare className="h-4 w-4 fill-white" />
              <span>Ask Tutor AI</span>
            </button>
          </div>
        </div>
      </header>

      {/* DYNAMIC LESSON LAYOUT */}
      <div className="flex-1 max-w-7xl mx-auto px-6 py-8 w-full grid gap-8 lg:grid-cols-12 items-start">
        
        {/* LEFT DIRECTORY NAVIGATION (SIDEBAR) */}
        <aside className="lg:col-span-3 space-y-4 sticky top-24">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-850 dark:bg-slate-900 shadow-sm">
            <h4 className="font-heading text-xs font-bold text-slate-400 uppercase tracking-widest px-2 mb-3">
              Lesson Roadmap
            </h4>
            <div className="space-y-1">
              {sectionsList.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => setActiveSection(sec.id)}
                  className={`w-full rounded-xl px-3 py-2.5 text-left text-xs font-bold transition-all border ${
                    activeSection === sec.id
                      ? "border-indigo-100 bg-indigo-50/50 text-indigo-700 dark:border-indigo-950/45 dark:bg-indigo-950/20 dark:text-indigo-400"
                      : "border-transparent text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-850"
                  }`}
                >
                  {sec.label}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 p-5 border border-indigo-100/50 dark:border-slate-800 dark:bg-slate-900/40 text-center space-y-3">
            <Sparkles className="h-5 w-5 mx-auto text-indigo-500 animate-pulse" />
            <h5 className="font-heading text-xs font-bold text-slate-800 dark:text-slate-200">Stuck on a concept?</h5>
            <p className="text-[10px] text-slate-500 leading-relaxed">
              Ask our AI Tutor for custom Cricket🏏 and Football⚽ analogies, stories, and simple exam tips!
            </p>
            <button
              onClick={() => setIsTutorOpen(true)}
              className="text-[10px] font-bold text-indigo-650 hover:underline dark:text-indigo-400"
            >
              Open AI Chat Sidebar →
            </button>
          </div>
        </aside>

        {/* MAIN PANEL */}
        <main className="lg:col-span-9 space-y-8">
          
          {/* SECTION 1: CURIOSITY INTRO & WARMUP */}
          {activeSection === "intro" && (
            <div className="space-y-8 animate-fadeIn">
              {/* Curiosity intro */}
              <div className="rounded-3xl border border-indigo-100 bg-indigo-50/10 p-6 dark:border-indigo-950/20 dark:bg-indigo-950/5 space-y-4">
                <span className="text-[10px] font-bold text-indigo-700 uppercase tracking-widest dark:text-indigo-400">
                  Curiosity Intro (No Definitions!)
                </span>
                <h3 className="font-heading text-2xl font-black text-slate-900 dark:text-white leading-tight">
                  Imagine Riding Your Bicycle to School... 🚲
                </h3>
                <p className="text-base text-slate-655 leading-relaxed dark:text-slate-350">
                  Every morning, you pedal out of your driveway. You turn left onto the main road, weave around a delivery truck, pedal up a hill, and finally slide into the school bike rack. Your legs did all the work, covering a winding path of 2 kilometers. 
                </p>
                <p className="text-base text-slate-655 leading-relaxed dark:text-slate-350">
                  But if you look at a birds-eye view map, the school is only 1.2 kilometers directly East of your house. If you could fly like a bird in a straight line, your trip would be shorter. Why are these two measurements different? 
                </p>
                <p className="text-base text-slate-655 leading-relaxed dark:text-slate-350">
                  This discrepancy is the key to understanding how we map motion in physics! Let's explore.
                </p>
              </div>

              {/* Chapter info block */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl border border-slate-150 bg-white dark:border-slate-850 dark:bg-slate-900 shadow-sm text-xs">
                <div>
                  <span className="text-slate-400 block font-semibold">NCERT Reference</span>
                  <span className="font-bold text-slate-700 dark:text-slate-300">{lesson.chapterInfo.ncertRef}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-semibold">Estimated Study Time</span>
                  <span className="font-bold text-slate-700 dark:text-slate-300">{lesson.chapterInfo.estimatedTime}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-semibold">Difficulty</span>
                  <span className="font-bold text-slate-700 dark:text-slate-300">{lesson.chapterInfo.difficulty}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-semibold">Class / Syllabus</span>
                  <span className="font-bold text-slate-700 dark:text-slate-300">{lesson.chapterInfo.classLevel} CBSE 2026</span>
                </div>
              </div>

              {/* Learning objectives */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-850 dark:bg-slate-900 space-y-4">
                <h4 className="font-heading text-sm font-bold text-slate-800 dark:text-slate-100 uppercase tracking-wide">
                  What You Will Learn
                </h4>
                <ul className="grid gap-2.5 sm:grid-cols-2 text-sm text-slate-600 dark:text-slate-350">
                  {lesson.learningObjectives.map((obj, i) => (
                    <li key={i} className="flex gap-2 items-start">
                      <ChevronRight className="h-4 w-4 text-indigo-500 shrink-0 mt-0.5" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Warm-up Question Component */}
              <WarmupQuestion
                question={lesson.warmup.question}
                interestFact={lesson.warmup.interestFact}
                hint={lesson.warmup.hint}
                onComplete={handleWarmupComplete}
              />

              {/* Navigation button */}
              <div className="flex justify-end">
                <button
                  onClick={() => setActiveSection("concepts")}
                  className="flex items-center gap-2 rounded-2xl bg-indigo-650 px-6 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-indigo-755 dark:bg-indigo-600 dark:hover:bg-indigo-505"
                >
                  Step 2: Core Concepts
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {/* SECTION 2: CONCEPTS SLIDES (DISTANCE/DISPLACEMENT, SPEED/VELOCITY, ACCEL, EQ) */}
          {activeSection === "concepts" && (
            <div className="space-y-6 animate-fadeIn">
              
              {/* Concept Selector Pills */}
              <div className="flex overflow-x-auto gap-2 pb-2 max-w-full no-scrollbar">
                {lesson.concepts.map((c, idx) => (
                  <button
                    key={c.id}
                    onClick={() => setCurrentConceptIdx(idx)}
                    className={`shrink-0 rounded-full border px-4 py-2 text-xs font-bold transition-all ${
                      currentConceptIdx === idx
                        ? "bg-indigo-50 border-indigo-250 text-indigo-700 dark:bg-indigo-950/40 dark:border-indigo-900/60 dark:text-indigo-400"
                        : "bg-white border-slate-200 text-slate-500 hover:bg-slate-50 dark:bg-slate-900 dark:border-slate-800"
                    }`}
                  >
                    Concept {idx + 1}: {c.name.split(":")[0]}
                  </button>
                ))}
              </div>

              {/* Active Concept render */}
              <ConceptSection
                concept={lesson.concepts[currentConceptIdx]}
                subjectId={subjectId}
                chapterName={chapter.name}
              />

              {/* Concept Pagination controls */}
              <div className="flex justify-between items-center pt-4">
                <button
                  disabled={currentConceptIdx === 0}
                  onClick={() => setCurrentConceptIdx((prev) => prev - 1)}
                  className="rounded-xl border border-slate-205 bg-white px-4 py-2 text-xs font-bold text-slate-500 hover:bg-slate-50 hover:text-slate-800 disabled:opacity-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400"
                >
                  ◀ Previous Concept
                </button>

                {currentConceptIdx < lesson.concepts.length - 1 ? (
                  <button
                    onClick={() => setCurrentConceptIdx((prev) => prev + 1)}
                    className="rounded-xl bg-indigo-50 text-indigo-700 px-4 py-2 text-xs font-bold hover:bg-indigo-100 dark:bg-indigo-950/40 dark:text-indigo-400 dark:hover:bg-indigo-950"
                  >
                    Next Concept ▶
                  </button>
                ) : (
                  <button
                    onClick={() => setActiveSection("diagrams")}
                    className="flex items-center gap-2 rounded-2xl bg-indigo-650 px-6 py-3 text-xs font-bold text-white shadow-sm hover:bg-indigo-755 dark:bg-indigo-600 dark:hover:bg-indigo-505"
                  >
                    Step 3: Visual labeling
                    <ChevronRight className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          )}

          {/* SECTION 3: DIAGRAM PRACTICE */}
          {activeSection === "diagrams" && (
            <div className="space-y-6 animate-fadeIn">
              <DiagramPracticeComponent
                practice={lesson.diagramPractices[0]}
                onComplete={handleDiagramComplete}
              />

              <div className="flex justify-between pt-4">
                <button
                  onClick={() => setActiveSection("concepts")}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-500 hover:bg-slate-50 dark:border-slate-850 dark:bg-slate-900 dark:text-slate-400"
                >
                  ◀ Back to Concepts
                </button>
                <button
                  onClick={() => setActiveSection("formulas")}
                  className="flex items-center gap-2 rounded-2xl bg-indigo-650 px-6 py-3.5 text-xs font-bold text-white hover:bg-indigo-755 dark:bg-indigo-600 dark:hover:bg-indigo-505"
                >
                  Step 4: Formulas & Examples
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {/* SECTION 4: FORMULA SHEET & SOLVED EXAMPLES */}
          {activeSection === "formulas" && (
            <div className="space-y-8 animate-fadeIn">
              
              {/* Formula Sheet Card */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:p-8 space-y-6">
                <div>
                  <span className="text-xs font-semibold tracking-wider text-amber-600 uppercase dark:text-amber-400">
                    Math Reference
                  </span>
                  <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-slate-50 md:text-xl mt-0.5">
                    CBSE Formula Sheet
                  </h3>
                </div>

                <div className="grid gap-4">
                  {lesson.formulas.map((form, i) => {
                    let htmlFormula = "";
                    try {
                      htmlFormula = katex.renderToString(form.equation, { displayMode: true, throwOnError: false });
                    } catch (_) {
                      htmlFormula = `<code>${form.equation}</code>`;
                    }

                    return (
                      <div
                        key={i}
                        className="rounded-2xl border border-slate-100 bg-slate-50/50 p-4 dark:border-slate-850 dark:bg-slate-950/20"
                      >
                        <h4 className="text-xs font-bold text-slate-850 dark:text-slate-200">
                          {form.name}
                        </h4>
                        
                        {/* Latex Equation */}
                        <div className="my-3 overflow-x-auto text-center" dangerouslySetInnerHTML={{ __html: htmlFormula }} />
                        
                        <div className="mt-2 text-[10px] text-slate-500 border-t border-slate-200/50 pt-2 dark:border-slate-800">
                          <p className="font-semibold">Variables:</p>
                          <ul className="list-disc pl-4 mt-0.5 space-y-0.5">
                            {form.variables.map((v, idx) => {
                              let symbolHtml = "";
                              try { symbolHtml = katex.renderToString(v.symbol, { throwOnError: false }); } 
                              catch (_) { symbolHtml = v.symbol; }

                              return (
                                <li key={idx}>
                                  <span className="font-semibold" dangerouslySetInnerHTML={{ __html: symbolHtml }} />: {v.meaning}
                                </li>
                              );
                            })}
                          </ul>
                          <p className="mt-2 font-semibold">Context: <span className="font-normal text-slate-455">{form.context}</span></p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Solved Examples list */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:p-8 space-y-6">
                <div>
                  <span className="text-xs font-semibold tracking-wider text-purple-600 uppercase dark:text-purple-400">
                    Numerical Practice
                  </span>
                  <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-slate-50 md:text-xl mt-0.5">
                    Solved Numerical Examples
                  </h3>
                </div>

                <div className="space-y-6 divide-y divide-slate-100 dark:divide-slate-800">
                  {lesson.solvedExamples.map((ex, idx) => (
                    <div key={ex.id} className={idx > 0 ? "pt-6" : ""}>
                      <span className="text-[10px] font-bold text-purple-600 uppercase tracking-wide dark:text-purple-400">
                        Numerical Example {idx + 1}
                      </span>
                      <h4 className="text-sm font-bold text-slate-800 dark:text-slate-150 leading-relaxed mt-1">
                        {ex.question}
                      </h4>

                      <div className="mt-3 rounded-2xl bg-slate-50 border border-slate-200/80 p-4 dark:bg-slate-950/20 dark:border-slate-850 space-y-3">
                        {/* Thinking process */}
                        <div className="text-xs">
                          <p className="font-bold text-indigo-700 uppercase tracking-wide dark:text-indigo-400">Thinking Process:</p>
                          <p className="mt-0.5 text-slate-600 leading-relaxed dark:text-slate-400 italic">
                            {ex.thinkingProcess}
                          </p>
                        </div>

                        {/* Steps */}
                        <div className="text-xs space-y-1 pt-2 border-t border-slate-200/50 dark:border-slate-800/80">
                          <p className="font-bold text-slate-800 dark:text-slate-200">Step-by-Step Solution:</p>
                          <ol className="list-decimal pl-4 space-y-1 text-slate-655 dark:text-slate-400">
                            {ex.solutionSteps.map((step, sIdx) => {
                              // Render KaTeX inline equations if present in steps
                              const parts = step.split(/(\$[^\$]*\$)/g);
                              const renderedStep = parts.map((part, pIdx) => {
                                if (part.startsWith("$") && part.endsWith("$")) {
                                  try {
                                    const html = katex.renderToString(part.slice(1, -1), { throwOnError: false });
                                    return <span key={pIdx} className="inline-block mx-0.5 font-semibold text-slate-800 dark:text-white" dangerouslySetInnerHTML={{ __html: html }} />;
                                  } catch (_) { return part; }
                                }
                                return part;
                              });

                              return <li key={sIdx}>{renderedStep}</li>;
                            })}
                          </ol>
                        </div>

                        {/* Final Answer */}
                        <div className="text-xs bg-emerald-50 border border-emerald-100 p-2.5 rounded-xl dark:bg-emerald-950/15 dark:border-emerald-900/50">
                          <span className="font-bold text-emerald-800 dark:text-emerald-400">Final Answer:</span>
                          <pre className="mt-0.5 font-sans font-bold text-emerald-950 dark:text-emerald-300 leading-relaxed white-space-pre-line">
                            {ex.finalAnswer}
                          </pre>
                        </div>

                        {/* Exam tips */}
                        <div className="text-xs bg-amber-50 border border-amber-100 p-2.5 rounded-xl dark:bg-amber-950/15 dark:border-amber-900/50">
                          <span className="font-bold text-amber-800 dark:text-amber-400">🔑 Examiner Tip:</span>
                          <span className="ml-1.5 text-amber-900 leading-relaxed dark:text-amber-300">{ex.examTips}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <button
                  onClick={() => setActiveSection("diagrams")}
                  className="rounded-xl border border-slate-205 bg-white px-4 py-2 text-xs font-bold text-slate-500 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400"
                >
                  ◀ Back to Visuals
                </button>
                <button
                  onClick={() => setActiveSection("quiz")}
                  className="flex items-center gap-2 rounded-2xl bg-indigo-650 px-6 py-3.5 text-xs font-bold text-white shadow-sm hover:bg-indigo-755 dark:bg-indigo-600 dark:hover:bg-indigo-505"
                >
                  Step 5: Practice & Quiz
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {/* SECTION 5: ASSESSMENT QUIZ (MCQS, AR, CASE STUDY, HOTS, PYQ) */}
          {activeSection === "quiz" && (
            <div className="space-y-6 animate-fadeIn">
              <InteractiveQuiz
                chapterId={chapterId}
                mcqs={lesson.mcqs}
                assertionReasons={lesson.assertionReasons}
                caseStudy={lesson.caseStudy}
                hots={lesson.hotsQuestions}
                pyqs={lesson.pyqs}
              />

              <div className="flex justify-between pt-4">
                <button
                  onClick={() => setActiveSection("formulas")}
                  className="rounded-xl border border-slate-205 bg-white px-4 py-2 text-xs font-bold text-slate-500 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400"
                >
                  ◀ Back to Formulas
                </button>
                <button
                  onClick={() => setActiveSection("revision")}
                  className="flex items-center gap-2 rounded-2xl bg-indigo-650 px-6 py-3.5 text-xs font-bold text-white shadow-sm hover:bg-indigo-755 dark:bg-indigo-600 dark:hover:bg-indigo-505"
                >
                  Step 6: Revision & Flashcards
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {/* SECTION 6: REVISION, SUMMARY, MIND MAP, FLASHCARDS, DAILY CHALLENGE */}
          {activeSection === "revision" && (
            <div className="space-y-8 animate-fadeIn">
              
              {/* Flashcards Deck widget */}
              <FlashcardDeck chapterId={chapterId} />

              {/* Summary Notes Card */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:p-8 space-y-4">
                <div>
                  <span className="text-xs font-semibold tracking-wider text-indigo-600 uppercase dark:text-indigo-400">
                    Revision Notes
                  </span>
                  <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-slate-50 md:text-xl mt-0.5">
                    10-Point Revision Summary
                  </h3>
                </div>
                
                <ul className="space-y-2.5 text-sm text-slate-655 dark:text-slate-350">
                  {lesson.summaryPoints.map((point, idx) => {
                    const parsedPoint = point.split(/(\$[^\$]*\$)/g).map((part, pIdx) => {
                      if (part.startsWith("$") && part.endsWith("$")) {
                        try {
                          const html = katex.renderToString(part.slice(1, -1), { throwOnError: false });
                          return <span key={pIdx} className="inline-block mx-0.5 font-bold" dangerouslySetInnerHTML={{ __html: html }} />;
                        } catch (_) { return part; }
                      }
                      return part;
                    });

                    return (
                      <li key={idx} className="flex gap-3 items-start">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-indigo-50 text-[10px] font-bold text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-400">
                          {idx + 1}
                        </span>
                        <span className="leading-relaxed">{parsedPoint}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Interactive Mind Map */}
              <MindMap rootNode={lesson.mindMap} />

              {/* DAILY CHALLENGE SECTION */}
              <div className="rounded-3xl border border-amber-100 bg-amber-50/10 p-6 shadow-sm dark:border-amber-950/20 dark:bg-amber-950/5 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-amber-500 dark:bg-amber-950 dark:text-amber-400">
                    <Star className="h-5.5 w-5.5 animate-bounce" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-widest dark:text-amber-400">
                      Surprise Daily Challenge
                    </span>
                    <h4 className="font-heading text-base font-bold text-slate-800 dark:text-slate-205 mt-0.5">
                      Double points (+30 XP)
                    </h4>
                  </div>
                </div>

                <div className="text-sm leading-relaxed text-slate-700 dark:text-slate-350 bg-white/60 p-4 rounded-2xl border border-slate-100 dark:bg-slate-900/50 dark:border-slate-850">
                  <strong>The Challenge:</strong> <MathText text="A car starts from rest ($u=0$) and accelerates at $2 \\text{ m/s}^2$ for 10 seconds. It then travels at constant velocity for 20 seconds, and finally decelerates to a stop at a rate of $4 \\text{ m/s}^2$." /> <strong>What is the total distance traveled by the car in meters?</strong> 
                  <br />
                  <span className="text-[11px] text-slate-455 mt-2 block italic">
                    <MathText text="💡 Hint: Solve in 3 parts: displacement during positive acceleration, displacement at constant speed, and displacement during braking. Sum them up." />
                  </span>
                </div>

                {!dailySubmitted ? (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={dailyAnswer}
                      onChange={(e) => setDailyAnswer(e.target.value)}
                      placeholder="Type your final distance in numbers..."
                      className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs focus:border-amber-550 focus:outline-none dark:border-slate-800 dark:bg-slate-900"
                    />
                    <button
                      onClick={handleDailyChallenge}
                      disabled={!dailyAnswer.trim()}
                      className="rounded-xl bg-amber-500 text-white px-5 py-2 text-xs font-bold hover:bg-amber-600 disabled:opacity-50"
                    >
                      Submit Challenge Answer
                    </button>
                  </div>
                ) : (
                  <div className="rounded-2xl border p-4 text-xs leading-relaxed animate-slideUp bg-white dark:bg-slate-950 dark:border-slate-850">
                    {dailyCorrect ? (
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold">
                          <CheckCircle2 className="h-5 w-5" /> Correct Answer! (+30 XP Awarded!)
                        </div>
                        <div className="text-slate-600 dark:text-slate-400 space-y-1.5 mt-2">
                          <strong>Solution Steps:</strong>
                          <div className="pl-4 space-y-1 text-xs">
                            <p><MathText text="1) Acceleration part: $s_1 = ut + 0.5 a t^2 = 0 + 0.5 \\times 2 \\times 10^2 = 100 \\text{ meters}$. Final velocity $v = u+at = 20 \\text{ m/s}$." /></p>
                            <p><MathText text="2) Constant speed part: traveling at $20 \\text{ m/s}$ for 20s. $s_2 = v \\times t = 20 \\times 20 = 400 \\text{ meters}$." /></p>
                            <p><MathText text="3) Braking part: $u=20 \\text{ m/s}$, final $v=0$, deceleration $a = -4 \\text{ m/s}^2$. Using $v^2 = u^2 + 2as_3 \\implies 0 = 400 - 8s_3 \\implies s_3 = 50 \\text{ meters}$." /></p>
                            <p className="font-bold mt-2"><MathText text="Total distance = $s_1 + s_2 + s_3 = 100 + 400 + 50 = 550 \\text{ meters}$!" /></p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-rose-600 dark:text-rose-455 font-bold">
                          <AlertCircle className="h-5 w-5" /> Incorrect Answer. Try again!
                        </div>
                        <p className="text-slate-500">
                          Check your calculations for the 3 parts and sum them up. Click try again below to submit another number.
                        </p>
                        <button
                          onClick={() => setDailySubmitted(false)}
                          className="text-purple-650 hover:underline font-bold"
                        >
                          Try Again
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Navigation button */}
              <div className="flex justify-between items-center pt-4">
                <button
                  onClick={() => setActiveSection("quiz")}
                  className="rounded-xl border border-slate-205 bg-white px-4 py-2 text-xs font-bold text-slate-500 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400"
                >
                  ◀ Back to Quiz Practice
                </button>

                <Link
                  href="/"
                  className="flex items-center gap-2 rounded-2xl bg-indigo-650 px-6 py-3.5 text-xs font-bold text-white shadow-sm hover:bg-indigo-755 dark:bg-indigo-600 dark:hover:bg-indigo-505"
                >
                  Complete Chapter Study
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          )}

        </main>
      </div>

      {/* FLOATING AI TUTOR SIDEBAR PANEL */}
      <ChatSidebar
        currentConceptName={activeSection === "concepts" ? lesson.concepts[currentConceptIdx].name : chapter.name}
        isOpen={isTutorOpen}
        onClose={() => setIsTutorOpen(false)}
      />
    </div>
  );
}

// Simple fallback components
import { CheckCircle2 } from "lucide-react";

export default function LessonPage() {
  return (
    <Suspense fallback={<div>Loading Dynamic NCERT Lesson...</div>}>
      <LessonPageContent />
    </Suspense>
  );
}
