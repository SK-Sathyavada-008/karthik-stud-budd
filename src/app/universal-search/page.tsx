"use client";

import { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { getAllLessonData } from "@/lib/db";
import { Brain, ArrowLeft, Search, BookOpen, Calculator, HelpCircle, CheckCircle, Sun, Moon } from "lucide-react";
import katex from "katex";

function SearchPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const queryParam = searchParams.get("query") || "";

  const [query, setQuery] = useState(queryParam);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [results, setResults] = useState<{
    concepts: any[];
    formulas: any[];
    examples: any[];
    questions: any[];
  }>({ concepts: [], formulas: [], examples: [], questions: [] });

  useEffect(() => {
    setQuery(queryParam);
    if (queryParam.trim()) {
      performSearch(queryParam);
    } else {
      setResults({ concepts: [], formulas: [], examples: [], questions: [] });
    }
  }, [queryParam]);

  useEffect(() => {
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

  const performSearch = async (searchTerm: string) => {
    const term = searchTerm.toLowerCase().trim();
    if (!term) return;

    const matchedConcepts: any[] = [];
    const matchedFormulas: any[] = [];
    const matchedExamples: any[] = [];
    const matchedQuestions: any[] = [];

    // Search through all seeded and generated lesson content
    const allLessonData = await getAllLessonData();
    Object.entries(allLessonData).forEach(([chapterId, data]) => {
      const chapterName = data.chapterInfo.chapterName;

      // 1. Search Concepts
      data.concepts.forEach((c) => {
        if (
          c.name.toLowerCase().includes(term) ||
          c.definition.toLowerCase().includes(term) ||
          c.ncertDefinition.toLowerCase().includes(term) ||
          c.analogy.toLowerCase().includes(term) ||
          c.realLifeExample.toLowerCase().includes(term)
        ) {
          matchedConcepts.push({ ...c, chapterId, chapterName });
        }
      });

      // 2. Search Formulas
      data.formulas.forEach((f) => {
        if (
          f.name.toLowerCase().includes(term) ||
          f.equation.toLowerCase().includes(term) ||
          f.context.toLowerCase().includes(term)
        ) {
          matchedFormulas.push({ ...f, chapterId, chapterName });
        }
      });

      // 3. Search Solved Examples
      data.solvedExamples.forEach((ex) => {
        if (
          ex.question.toLowerCase().includes(term) ||
          ex.finalAnswer.toLowerCase().includes(term)
        ) {
          matchedExamples.push({ ...ex, chapterId, chapterName });
        }
      });

      // 4. Search Practice Questions & MCQs
      data.practiceQuestions.forEach((pq) => {
        if (
          pq.question.toLowerCase().includes(term) ||
          pq.suggestedAnswer.toLowerCase().includes(term)
        ) {
          matchedQuestions.push({
            type: "Practice",
            id: pq.id,
            question: pq.question,
            answer: pq.suggestedAnswer,
            difficulty: pq.difficulty,
            chapterId,
            chapterName
          });
        }
      });

      data.mcqs.forEach((mcq) => {
        if (
          mcq.question.toLowerCase().includes(term) ||
          mcq.explanation.toLowerCase().includes(term) ||
          mcq.options.some((o) => o.toLowerCase().includes(term))
        ) {
          matchedQuestions.push({
            type: "MCQ",
            id: mcq.id,
            question: mcq.question,
            answer: `Correct Option: ${mcq.options[mcq.correctIndex]}`,
            difficulty: "MCQ",
            chapterId,
            chapterName
          });
        }
      });
    });

    setResults({
      concepts: matchedConcepts,
      formulas: matchedFormulas,
      examples: matchedExamples,
      questions: matchedQuestions
    });
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/universal-search?query=${encodeURIComponent(query)}`);
    }
  };

  const renderFormulaLatex = (equation: string) => {
    try {
      const html = katex.renderToString(equation, { displayMode: false, throwOnError: false });
      return <span dangerouslySetInnerHTML={{ __html: html }} />;
    } catch (_) {
      return <code>{equation}</code>;
    }
  };

  const totalResults = results.concepts.length + results.formulas.length + results.examples.length + results.questions.length;

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
            <span className="font-heading text-base font-extrabold text-slate-900 dark:text-white">
              Universal Search
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
      <main className="flex-grow py-8 max-w-4xl mx-auto px-6 w-full space-y-6">
        
        {/* Large Search Box */}
        <form onSubmit={handleSearchSubmit} className="relative w-full">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type any search query (e.g. 'displacement', 'velocity', 'equations')..."
            className="w-full rounded-2xl border border-slate-250 bg-white py-4 pl-12 pr-6 text-sm shadow-md focus:border-indigo-500 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:focus:border-indigo-400 dark:shadow-slate-950/20"
          />
        </form>

        {queryParam && (
          <div className="text-xs text-slate-450 font-semibold px-1">
            Found {totalResults} match{totalResults !== 1 && "es"} for "{queryParam}"
          </div>
        )}

        {totalResults > 0 ? (
          <div className="space-y-8">
            
            {/* 1. CONCEPTS RESULTS */}
            {results.concepts.length > 0 && (
              <div className="space-y-3">
                <h3 className="flex items-center gap-2 font-heading text-xs font-bold text-indigo-650 dark:text-indigo-400 uppercase tracking-widest">
                  <BookOpen className="h-4.5 w-4.5" /> Core Concepts ({results.concepts.length})
                </h3>
                <div className="grid gap-4">
                  {results.concepts.map((c) => (
                    <Link
                      key={c.id}
                      href={`/subject/physics/chapter/${c.chapterId}?concept=${c.id}`}
                      className="block p-5 rounded-2xl border border-slate-205 bg-white shadow-sm hover:border-indigo-300 transition-all dark:border-slate-850 dark:bg-slate-900"
                    >
                      <div className="flex justify-between items-start text-[10px] text-slate-400 uppercase font-bold">
                        <span>{c.chapterName}</span>
                        <span className="text-indigo-600 dark:text-indigo-400">View Concept</span>
                      </div>
                      <h4 className="font-heading text-base font-bold text-slate-800 dark:text-slate-200 mt-2">
                        {c.name}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1.5 leading-relaxed line-clamp-2 dark:text-slate-400">
                        {c.definition}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* 2. FORMULAS RESULTS */}
            {results.formulas.length > 0 && (
              <div className="space-y-3">
                <h3 className="flex items-center gap-2 font-heading text-xs font-bold text-amber-650 dark:text-amber-400 uppercase tracking-widest">
                  <Calculator className="h-4.5 w-4.5" /> Formulas ({results.formulas.length})
                </h3>
                <div className="grid gap-4">
                  {results.formulas.map((f, i) => (
                    <Link
                      key={i}
                      href={`/subject/physics/chapter/${f.chapterId}?tab=formulas`}
                      className="block p-5 rounded-2xl border border-slate-205 bg-white shadow-sm hover:border-amber-300 transition-all dark:border-slate-850 dark:bg-slate-900"
                    >
                      <div className="flex justify-between items-start text-[10px] text-slate-400 uppercase font-bold">
                        <span>{f.chapterName}</span>
                        <span className="text-amber-650 dark:text-amber-400">View Formula Sheet</span>
                      </div>
                      <h4 className="font-heading text-base font-bold text-slate-800 dark:text-slate-200 mt-2">
                        {f.name}
                      </h4>
                      <div className="my-3 text-sm p-3 rounded-xl bg-slate-50 border border-slate-100 dark:bg-slate-950/50 dark:border-slate-850">
                        {renderFormulaLatex(f.equation)}
                      </div>
                      <p className="text-xs text-slate-500 mt-1 dark:text-slate-400 leading-relaxed">
                        {f.context}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* 3. SOLVED NUMERICALS RESULTS */}
            {results.examples.length > 0 && (
              <div className="space-y-3">
                <h3 className="flex items-center gap-2 font-heading text-xs font-bold text-purple-650 dark:text-purple-450 uppercase tracking-widest">
                  <Calculator className="h-4.5 w-4.5" /> Solved Numericals ({results.examples.length})
                </h3>
                <div className="grid gap-4">
                  {results.examples.map((ex) => (
                    <Link
                      key={ex.id}
                      href={`/subject/physics/chapter/${ex.chapterId}?tab=revision`}
                      className="block p-5 rounded-2xl border border-slate-205 bg-white shadow-sm hover:border-purple-300 transition-all dark:border-slate-850 dark:bg-slate-900"
                    >
                      <div className="flex justify-between items-start text-[10px] text-slate-400 uppercase font-bold">
                        <span>{ex.chapterName}</span>
                        <span className="text-purple-650 dark:text-purple-450">View Example</span>
                      </div>
                      <h4 className="text-xs font-bold text-slate-650 dark:text-slate-350 mt-2 line-clamp-2">
                        Question: {ex.question}
                      </h4>
                      <p className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 mt-2 bg-emerald-50/20 border border-emerald-100/50 p-2.5 rounded-xl">
                        Answer: {ex.finalAnswer}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* 4. QUESTIONS & MCQS RESULTS */}
            {results.questions.length > 0 && (
              <div className="space-y-3">
                <h3 className="flex items-center gap-2 font-heading text-xs font-bold text-rose-650 dark:text-rose-455 uppercase tracking-widest">
                  <HelpCircle className="h-4.5 w-4.5" /> Exam Questions ({results.questions.length})
                </h3>
                <div className="grid gap-4">
                  {results.questions.map((q) => (
                    <Link
                      key={q.id}
                      href={`/subject/physics/chapter/${q.chapterId}?tab=quiz`}
                      className="block p-5 rounded-2xl border border-slate-205 bg-white shadow-sm hover:border-rose-300 transition-all dark:border-slate-850 dark:bg-slate-900"
                    >
                      <div className="flex justify-between items-start text-[10px] text-slate-400 uppercase font-bold">
                        <span>{q.chapterName} ({q.type})</span>
                        <span className="text-rose-600 dark:text-rose-400">Practice now</span>
                      </div>
                      <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-2 line-clamp-2 leading-relaxed">
                        Q: {q.question}
                      </h4>
                      <p className="text-xs text-slate-500 mt-2 leading-relaxed line-clamp-2 dark:text-slate-400">
                        A: {q.answer}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

          </div>
        ) : (
          queryParam && (
            <div className="text-center p-16 rounded-3xl border border-dashed border-slate-200 bg-white dark:border-slate-850 dark:bg-slate-900 flex flex-col items-center justify-center space-y-3 shadow-sm">
              <HelpCircle className="h-10 w-10 text-slate-350" />
              <div>
                <h4 className="text-sm font-bold text-slate-700 dark:text-slate-350">No search results found</h4>
                <p className="text-xs text-slate-450 mt-1">We couldn't find anything matching your term. Try searching 'displacement', 'speed', or 'graph'.</p>
              </div>
            </div>
          )
        )}

      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-250/30 py-8 text-center text-xs text-slate-400 dark:border-slate-900/60 mt-12">
        <p>© 2026 Karthik's Study Buddy (StudBud). Search index covers all active NCERT syllabi.</p>
      </footer>
    </div>
  );
}

export default function UniversalSearchPage() {
  return (
    <Suspense fallback={<div>Loading Search Engine...</div>}>
      <SearchPageContent />
    </Suspense>
  );
}
