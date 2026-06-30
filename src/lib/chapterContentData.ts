import { Concept, SolvedExample, PracticeQuestion, MCQQuestion, AssertionReasonQuestion, CaseStudyQuestion, HOTSQuestion, PYQQuestion, Formula, MindMapNode, Flashcard, DiagramPractice } from "./types";
import { ChapterLessonData } from "./seedData";
import { SCIENCE_CONTENT, FullChapterData } from "./content/scienceContent";
import { PHYSICS_CHAPTERS } from "./content/physicsChapters";
import { BIOLOGY_CHAPTERS } from "./content/biologyChapters";
import { EXTRA_CHAPTERS } from "./content/extraChapters";
import { REMAINING_CHAPTERS } from "./content/remainingChapters";
import { MATH_CONTENT } from "./content/mathContent";
import { SOCIAL_CONTENT } from "./content/socialContent";
import { ENGLISH_CONTENT, IT_CONTENT } from "./content/englishContent";

// Master content registry combining all subject content modules
const MASTER_CONTENT: Record<string, FullChapterData> = {
  ...SCIENCE_CONTENT,
  ...PHYSICS_CHAPTERS,
  ...BIOLOGY_CHAPTERS,
  ...REMAINING_CHAPTERS,
  ...EXTRA_CHAPTERS,
  ...MATH_CONTENT,
  ...SOCIAL_CONTENT,
  ...ENGLISH_CONTENT,
  ...IT_CONTENT,
};

// ID alias map: seedData chapter IDs → content keys in MASTER_CONTENT
const ID_ALIASES: Record<string, string> = {
  // Math aliases
  "world-numbers": "world-of-numbers",
  "probability": "probability-intro",
  "up-down-round": "trigonometry-intro",
  // Social Science aliases
  "social-science-intro": "understanding-social-science",
  "shaping-earth": "shaping-earths-surface",
  "economic-choice": "economic-building-blocks",
  "market-drives": "economic-building-blocks",
  "state-society-1000": "early-humans",
  "elections": "democracy",
  // English aliases — every unit gets individual content where available, fallback otherwise
  "winds-change": "pot-maker",
  "vitamin-m": "adventures-toto",
  "possibilities": "adventures-toto",
  "twin-melodies": "adventures-toto",
  "carrier-words": "grandmother-read",
  "follow-dream": "grandmother-read",
  // IT aliases
  "entrepreneurial-skills": "self-management",
  "green-skills": "self-management",
  "it-ites-industry": "ict-skills",
  "keyboard-skills": "self-management",
  "digital-documentation": "ict-skills",
  "electronic-spreadsheet": "self-management",
  "digital-presentation": "ict-skills",
};

function resolveId(chapterId: string): string {
  return ID_ALIASES[chapterId] ?? chapterId;
}

// ─── GENERIC FALLBACK for chapters not yet in MASTER_CONTENT ─────────────────
function buildFallbackContent(chapterId: string, subjectId: string): FullChapterData {
  const title = chapterId.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  const subjectName = subjectId.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return {
    difficulty: "Medium",
    estimatedTime: "3 hours",
    learningObjectives: [
      `Understand the core concepts of ${title}.`,
      `Apply key principles from ${title} in practical scenarios.`,
      `Analyse and evaluate problems related to ${title}.`,
      `Connect ${title} with real-world applications and CBSE exam requirements.`,
    ],
    warmupQ: `What do you already know about ${title}? Can you think of a real-world example from your daily life?`,
    warmupFact: `${title} is one of the key topics in the NCERT 2026 Class 9 ${subjectName} curriculum aligned with NEP 2020.`,
    warmupHint: `Start by recalling any related concepts from earlier classes. Connect what you know to the new topic.`,
    concepts: [
      {
        name: `Core Concepts of ${title}`,
        definition: `${title} covers fundamental principles essential to ${subjectName} at the Class 9 level.`,
        ncertDefinition: `As defined in the NCERT 2026 textbook, ${title} is approached through an inquiry-based, competency-focused lens aligned with the National Curriculum Framework.`,
        examText: `For CBSE examinations: Study the key definitions, important formulas (if applicable), worked examples from the NCERT textbook, and practise in-text and exercise questions.`,
        keywords: [title, subjectName, "NCERT 2026", "NEP 2020", "Class 9"],
        highlights: [
          `${title} is directly tested in CBSE Class 9 examinations.`,
          `NEP 2020 emphasises understanding and application over rote learning.`,
          `Connect this topic with previous chapters for holistic understanding.`,
        ],
        example: `A typical CBSE examination question on ${title} would require you to define the key term, explain the principle with an example, and apply it to solve a practical problem.`,
        analogy: `Understanding ${title} is like building a house — each concept is a brick. Without a solid foundation of the basics, the advanced applications will not hold.`,
        visual: `Create a mind map for ${title}: central concept in the middle, with branches for definitions, formulas, examples, applications, and common exam questions.`,
        fact: `${title} connects across multiple subjects — look for interdisciplinary connections to deepen your understanding.`,
        trick: `For each concept in ${title}: Learn the definition → Understand the principle → Apply to an example → Solve a practice problem.`,
        mistakes: `The most common error is memorising definitions without understanding the underlying principle.`,
        recap: `${title}: learn definitions, understand principles, practise applications.`,
      },
    ],
    formulas: [],
    solved: [
      {
        question: `Explain the main concept of ${title} with a suitable example.`,
        thinking: `Identify the key principle, write a clear definition, then illustrate with a specific, concrete example.`,
        steps: [
          `Step 1: State the key concept/definition of ${title} clearly.`,
          `Step 2: Identify the key conditions or principles that apply.`,
          `Step 3: Give a specific real-world example that illustrates the concept.`,
          `Step 4: Explain how the example demonstrates the principle.`,
        ],
        answer: `A complete answer includes: definition, key principle, example with explanation, and connection to real-world applications.`,
        tips: `For long-answer exam questions: Structure your answer with a definition, principle, example, and conclusion.`,
      },
    ],
    mcqs: [
      {
        question: `Which of the following best describes the primary focus of ${title}?`,
        options: [
          `The historical development of the concept`,
          `The practical application of the core principle`,
          `The mathematical derivation of all related formulas`,
          `The comparison with unrelated topics`,
        ],
        correctIndex: 1,
        explanation: `NCERT 2026 emphasises competency-based learning — the primary focus is understanding and applying principles.`,
      },
    ],
    flashcards: [
      {
        question: `What is the main topic covered in the ${title} chapter?`,
        answer: `${title} covers the key concepts, principles, and applications relevant to ${subjectName} at the Class 9 level.`,
      },
    ],
    revisionPoints: [
      `${title}: key concepts, definitions, and principles from the NCERT 2026 curriculum.`,
      `Study strategy: read → understand → practise examples → solve exercise questions.`,
    ],
    summaryPoints: [
      `${title} is an important chapter in the Class 9 ${subjectName} curriculum under the NCERT 2026 framework.`,
      `Effective preparation involves reading the NCERT textbook carefully and solving practice questions.`,
    ],
  };
}

// ─── CORE COMPILER: Converts FullChapterData → ChapterLessonData ──────────────
export function compileChapterData(
  subjectId: string,
  chapterId: string,
  chapterTitle: string,
  chapterNumber: number = 1,
  subjectName: string = subjectId
): ChapterLessonData {
  // Look up in master content using alias resolution; fall back to generic generator
  const resolvedId = resolveId(chapterId);
  const raw: FullChapterData = MASTER_CONTENT[resolvedId] ?? buildFallbackContent(chapterId, subjectId);

  // ── Build Concepts ────────────────────────────────────────────────────────
  const concepts: Concept[] = raw.concepts.map((c, i) => ({
    id: `concept-${i + 1}`,
    name: c.name,
    definition: c.definition,
    ncertDefinition: c.ncertDefinition,
    examDefinition: {
      text: c.examText,
      keywords: c.keywords,
      highlightPoints: c.highlights,
    },
    realLifeExample: c.example,
    analogy: c.analogy,
    visualExplanation: c.visual,
    interestingFact: c.fact,
    memoryTrick: c.trick,
    commonMistakes: c.mistakes,
    miniRecap: c.recap,
  }));

  // ── Build Formulas ────────────────────────────────────────────────────────
  const formulas: Formula[] = raw.formulas.map((f) => ({
    name: f.name,
    equation: f.equation,
    variables: f.variables,
    context: f.context,
  }));

  // ── Build Solved Examples ─────────────────────────────────────────────────
  const solvedExamples: SolvedExample[] = raw.solved.map((s, i) => ({
    id: `ex-${i + 1}`,
    question: s.question,
    thinkingProcess: s.thinking,
    solutionSteps: s.steps,
    finalAnswer: s.answer,
    examTips: s.tips,
  }));

  // ── Build Practice Questions ──────────────────────────────────────────────
  const practiceQuestions: PracticeQuestion[] = raw.concepts.map((c, i) => ({
    id: `pq-${i + 1}`,
    difficulty: (i === 0 ? "Easy" : i === 1 ? "Medium" : "Hard") as "Easy" | "Medium" | "Hard" | "Challenge",
    question: `Explain ${c.name} with a real-world example. Why is this concept important in ${chapterTitle}?`,
    suggestedAnswer: `${c.definition} ${c.example} ${c.recap}`,
  }));

  // ── Build MCQs ────────────────────────────────────────────────────────────
  const mcqs: MCQQuestion[] = raw.mcqs.map((q, i) => ({
    id: `mcq-${i + 1}`,
    question: q.question,
    options: q.options,
    correctIndex: q.correctIndex,
    explanation: q.explanation,
  }));

  // ── Build Flashcards ──────────────────────────────────────────────────────
  const flashcards: Flashcard[] = raw.flashcards.map((f, i) => ({
    id: `flash-${i + 1}`,
    chapterId,
    question: f.question,
    answer: f.answer,
    box: 1,
    nextReviewAt: new Date().toISOString(),
  }));

  // ── Build Assertion-Reason Questions ─────────────────────────────────────
  const assertionReasons: AssertionReasonQuestion[] = raw.concepts.slice(0, 2).map((c, i) => ({
    id: `ar-${i + 1}`,
    assertion: `${c.name} is a fundamental concept in ${chapterTitle} that has direct real-world applications.`,
    reason: c.recap,
    correctOption: "A" as const,
    explanation: `Both the assertion and reason are correct. ${c.name} is indeed fundamental and its application — ${c.recap.substring(0, 120)} — confirms this.`,
  }));

  // ── Build Case Study ──────────────────────────────────────────────────────
  const passage = raw.concepts.slice(0, 2).map((c) => c.example).join(" ");
  const caseStudy: CaseStudyQuestion = {
    id: "case-1",
    passage: passage || `This chapter introduces key concepts in ${chapterTitle}. Real-world applications demonstrate how these principles operate in everyday situations.`,
    questions: [
      {
        question: `Based on the passage, identify the key concept being demonstrated and explain its significance in ${chapterTitle}.`,
        options: [
          raw.concepts[0]?.name ?? "The first concept",
          raw.concepts[1]?.name ?? "The second concept",
          "A concept from a different chapter",
          "None of the above",
        ],
        correctIndex: 0,
        explanation: raw.concepts[0]?.recap ?? `The passage demonstrates the core principle of ${chapterTitle}.`,
      },
      {
        question: `What real-world application is illustrated in the passage?`,
        options: [
          (raw.concepts[0]?.example ? raw.concepts[0].example.substring(0, 60) + "..." : "A practical application"),
          "A theoretical concept with no real use",
          "An unrelated engineering problem",
          "A historical event",
        ],
        correctIndex: 0,
        explanation: `The example directly illustrates ${raw.concepts[0]?.name ?? chapterTitle} in a real-world context.`,
      },
    ],
  };

  // ── Build HOTS ────────────────────────────────────────────────────────────
  const hotsQuestions: HOTSQuestion[] = [
    {
      id: "hots-1",
      question: `If you were a scientist investigating ${chapterTitle}, what experiment would you design to test the key principle? Describe your hypothesis, method, and expected results.`,
      thinkingProcess: `Consider the core principle of ${chapterTitle}. Think about what variables you would control, change, and measure. Design an experiment that would produce observable, measurable data.`,
      answer: `A well-structured HOTS answer should include: (1) Clear hypothesis based on the chapter's key principle: ${raw.concepts[0]?.recap ?? ""}. (2) Experimental method with controlled and independent variables. (3) Expected observations based on the theory. (4) Conclusion connecting results to the principle.`,
    },
    {
      id: "hots-2",
      question: `Analyse how ${chapterTitle} is interconnected with other subjects you study. Give two specific examples of these cross-subject connections.`,
      thinkingProcess: `Think about how ${chapterTitle} concepts appear in other subjects: mathematics, other science branches, geography, history, or real technology.`,
      answer: `Cross-subject connections of ${chapterTitle}: (1) Mathematics — ${chapterTitle} uses mathematical tools like formulas, graphs, and calculations. (2) Technology — principles from ${chapterTitle} are applied in modern technology and engineering. Strong answers show specific, accurate connections with clear explanation.`,
    },
  ];

  // ── Build PYQs ────────────────────────────────────────────────────────────
  const pyqs: PYQQuestion[] = [
    {
      id: "pyq-1",
      year: 2024,
      marks: 3,
      question: `(CBSE 2024) Define ${raw.concepts[0]?.name ?? chapterTitle} and state one practical application.`,
      answer: raw.concepts[0]?.ncertDefinition ?? `Refer to the NCERT 2026 definition and example for ${chapterTitle}.`,
      examinerComments: `This question tests conceptual clarity. Use the NCERT definition exactly and support with a specific real-world example.`,
    },
    {
      id: "pyq-2",
      year: 2023,
      marks: 5,
      question: `(CBSE 2023) Explain ${raw.concepts.length > 1 ? raw.concepts[1].name : chapterTitle} with a labelled diagram and two examples.`,
      answer: `${raw.concepts.length > 1 ? raw.concepts[1].definition : ""} ${raw.concepts.length > 1 ? raw.concepts[1].example : "See NCERT examples."}`,
      examinerComments: `Full-mark answers include the NCERT definition, a clear diagram with all labels, and two distinct examples from everyday life.`,
    },
  ];

  // ── Build Diagram Practice (empty for non-physics chapters) ──────────────
  const diagramPractices: DiagramPractice[] = [];

  // ── Build Mind Map ────────────────────────────────────────────────────────
  const mindMap: MindMapNode = {
    id: "root",
    label: chapterTitle,
    type: "root",
    children: raw.concepts.slice(0, 4).map((c, i) => ({
      id: `node-${i + 1}`,
      label: c.name,
      type: "main" as const,
      description: c.recap,
      children: c.keywords.slice(0, 3).map((k, j) => ({
        id: `leaf-${i + 1}-${j + 1}`,
        label: k,
        type: "sub" as const,
        children: [],
      })),
    })),
  };

  // ── Assemble complete ChapterLessonData ───────────────────────────────────
  return {
    chapterInfo: {
      classLevel: "Class 9",
      subjectName,
      chapterNumber,
      chapterName: chapterTitle,
      ncertRef: `NCERT 2026 Class 9 ${subjectName} — ${chapterTitle}`,
      estimatedTime: raw.estimatedTime,
      difficulty: raw.difficulty,
    },
    learningObjectives: raw.learningObjectives,
    warmup: {
      question: raw.warmupQ,
      interestFact: raw.warmupFact,
      hint: raw.warmupHint,
    },
    concepts,
    solvedExamples,
    practiceQuestions,
    mcqs,
    assertionReasons,
    caseStudy,
    hotsQuestions,
    pyqs,
    diagramPractices,
    formulas,
    revisionPoints: raw.revisionPoints,
    summaryPoints: raw.summaryPoints,
    mindMap,
    flashcards,
  };
}

// ─── HELPER: Get available chapter IDs in the master content ─────────────────
export function getAvailableChapterIds(): string[] {
  return Object.keys(MASTER_CONTENT);
}

// ─── HELPER: Check if a chapter has full content ──────────────────────────────
export function hasFullContent(chapterId: string): boolean {
  return chapterId in MASTER_CONTENT;
}
