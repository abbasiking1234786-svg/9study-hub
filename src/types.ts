export type UserRole = 'student' | 'admin';

export type BoardType = 
  | 'BSEK Karachi' 
  | 'BISE Hyderabad' 
  | 'BISE Sukkur' 
  | 'BISE Larkana' 
  | 'BISE Mirpurkhas' 
  | 'FBISE Islamabad';

export interface QuizRecord {
  id: string;
  subjectId: string;
  subjectTitle: string;
  chapterTitle?: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'extreme';
  score: number;
  totalQuestions: number;
  xpEarned: number;
  accuracy: number;
  date: string;
}

export interface BadgeItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt?: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  board: BoardType;
  school: string;
  xp: number;
  level: number;
  streak: number;
  bestScore: number;
  completedChapters: string[]; // array of chapter IDs
  quizHistory: QuizRecord[];
  badges: BadgeItem[];
  subjectStats: Record<string, { attempted: number; correct: number; wrong: number }>;
  lastActive: string;
  createdAt: string;
}

export interface Definition {
  term: string;
  definition: string;
  urduTerm?: string;
  examTip?: string;
}

export interface Formula {
  name: string;
  formula: string;
  units: string;
  description: string;
}

export interface MemoryTrick {
  title: string;
  trick: string;
  explanation: string;
}

export interface MCQItem {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'extreme';
  boardTag?: string; // e.g. "Karachi Board 2023"
}

export interface QuestionItem {
  id: string;
  question: string;
  urduQuestion?: string;
  answer: string;
  marks: number;
  isImportant?: boolean;
  pastPaperInfo?: string; // e.g. "BSEK 2022, 2019"
}

export interface PastPaperItem {
  id: string;
  year: number;
  board: string;
  question: string;
  section: 'A (MCQ)' | 'B (Short)' | 'C (Long)';
  solution: string;
  frequency: string; // e.g. "Repeated 4 times in 10 years"
}

export interface SectionNote {
  heading: string;
  content: string;
  simpleExplanation: string;
  funnyRealWorldAnalogy: string;
  keyPoints: string[];
}

export interface Chapter {
  id: string;
  subjectId: string;
  number: number;
  title: string;
  urduTitle?: string;
  description: string;
  notes: SectionNote[];
  definitions: Definition[];
  formulas: Formula[];
  memoryTricks: MemoryTrick[];
  mcqs: MCQItem[];
  shortQuestions: QuestionItem[];
  longQuestions: QuestionItem[];
  mainQuestions: QuestionItem[];
  pastPaperQuestions: PastPaperItem[];
  quickRevision: string[];
}

export interface Subject {
  id: string;
  title: string;
  urduTitle: string;
  iconName: string;
  color: string;
  bgColor: string;
  badgeColor: string;
  totalChapters: number;
  description: string;
  chapters: Chapter[];
}
