export interface CourseModule {
  id: string;
  title: string;
  type: "Mechanics" | "Statistics";
  content: string;
}

export interface PracticeQuestion {
  id: string;
  moduleId: string;
  topic: string;
  type: "Exam-Style" | "Targeted Practice" | "Definition";
  questionMarkdown: string;
  markSchemeMarkdown: string;
  marks: number;
}
