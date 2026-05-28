export interface LearningOutcome {
  id: string;
  text: string;
}

export type ModuleType = "Mechanics" | "Statistics" | "Pure";

export interface CourseModule {
  id: string;
  title: string;
  type: ModuleType;
  content: string;
  visualId?: string;
  loIds?: string[];
}

export interface Module {
  id: string;
  title: string;
  type: ModuleType;
  overview: string;
  learningOutcomes: LearningOutcome[];
  lessons: CourseModule[];
}

export interface PracticeQuestion {
  id: string;
  moduleId: string;
  topic: string;
  type: "Exam-Style" | "Targeted Practice" | "Definition";
  questionMarkdown: string;
  markSchemeMarkdown: string;
  marks: number;
  visualId?: string;
  questionParts?: { label: string; text: string }[];
  solutionSteps?: { step: number; text: string; mark: string }[];
}
