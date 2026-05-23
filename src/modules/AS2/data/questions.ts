import { PracticeQuestion } from "@/core/types";
import { MANUAL_QUESTIONS } from "./manualQuestions";
import { AS2_GENERATED_QUESTIONS } from "./generated/as2Questions";

/**
 * APPLICATION QUESTION BANK AGGREGATOR
 * This file combines hand-authored baseline questions with
 * automatically ingested AS2 question packs.
 */
export const QUESTIONS: PracticeQuestion[] = [
  ...MANUAL_QUESTIONS,
  ...AS2_GENERATED_QUESTIONS
];
