export interface Board {
  id: string;
  name: string;
  code: string;
}

export interface ClassLevel {
  id: string;
  boardId: string;
  level: string;
  numericLevel: number;
}

export interface Subject {
  id: string;
  classId: string;
  name: string;
  code: string;
  colorTheme: string; // Tailwind class groups e.g., 'blue', 'purple', 'green'
  iconName: string;
  totalChapters: number;
  completedChapters?: number;
  estimatedHours: number;
}

export interface Chapter {
  id: string;
  subjectId: string;
  chapterNumber: number;
  name: string;
  estimatedTime: string;
  difficulty: "Easy" | "Medium" | "Hard";
  description: string;
}

export interface LearningObjective {
  text: string;
}

export interface Warmup {
  question: string;
  interestFact: string;
  hint: string;
}

export interface Concept {
  id: string;
  name: string;
  definition: string;
  ncertDefinition: string;
  examDefinition: {
    text: string;
    keywords: string[];
    highlightPoints: string[];
  };
  realLifeExample: string;
  analogy: string;
  visualExplanation: string;
  interestingFact: string;
  memoryTrick: string;
  commonMistakes: string;
  miniRecap: string;
  mnemonic?: string;
}

export interface SolvedExample {
  id: string;
  question: string;
  thinkingProcess: string;
  solutionSteps: string[];
  finalAnswer: string;
  examTips: string;
}

export interface PracticeQuestion {
  id: string;
  difficulty: "Easy" | "Medium" | "Hard" | "Challenge";
  question: string;
  suggestedAnswer: string;
}

export interface MCQQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface AssertionReasonQuestion {
  id: string;
  assertion: string;
  reason: string;
  correctOption: "A" | "B" | "C" | "D"; // A = Both A and R true, R is correct explanation...
  explanation: string;
}

export interface CaseStudyQuestion {
  id: string;
  passage: string;
  questions: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }[];
}

export interface HOTSQuestion {
  id: string;
  question: string;
  thinkingProcess: string;
  answer: string;
}

export interface PYQQuestion {
  id: string;
  year: number;
  marks: number;
  question: string;
  answer: string;
  examinerComments: string;
}

export interface DiagramPracticeLabel {
  id: string;
  text: string;
  x: number; // Percentage from left (0-100)
  y: number; // Percentage from top (0-100)
}

export interface DiagramPractice {
  id: string;
  title: string;
  svgType: "velocity-graph" | "displacement-vector";
  labels: DiagramPracticeLabel[];
}

export interface Formula {
  name: string;
  equation: string;
  variables: { symbol: string; meaning: string }[];
  context: string;
}

export interface RevisionNote {
  title: string;
  points: string[];
}

export interface MindMapNode {
  id: string;
  label: string;
  type: "root" | "main" | "sub" | "detail";
  children?: MindMapNode[];
  description?: string;
}

export interface Flashcard {
  id: string;
  chapterId: string;
  question: string;
  answer: string;
  box: number; // Leitner box (1 to 5)
  nextReviewAt: string;
}

// User Profile & Tracking
export interface UserProfile {
  name: string;
  xp: number;
  streak: number;
  streakUpdatedAt: string;
  level: number;
  badges: Badge[];
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt: string;
}

export interface ChapterProgress {
  chapterId: string;
  status: "not_started" | "in_progress" | "completed";
  completedPercentage: number;
  lastStudiedAt: string;
}

export interface Bookmark {
  id: string;
  type: "chapter" | "concept" | "question";
  targetId: string;
  title: string;
  subjectId: string;
  chapterName?: string;
  savedAt: string;
}

export interface UserNote {
  id: string;
  chapterId: string;
  title: string;
  content: string;
  updatedAt: string;
}
