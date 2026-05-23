export interface LearningOutcome {
  id: string;
  text: string;
}

export interface CourseModule {
  id: string;
  title: string;
  type: "Mechanics" | "Statistics";
  content: string;
  visualId?: string;
  loIds?: string[];
}

export interface Module {
  id: string;
  title: string;
  type: "Mechanics" | "Statistics";
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
}