import { PracticeQuestion } from '@/core/types';
import { P1_QUESTIONS } from '../P1-Algebra & Functions/data/questions';
import { P2_QUESTIONS } from '../P2-Co-ordinate geometry in the 𝒙, 𝒚 plane/data/questions';
import { P3_QUESTIONS } from '../P3-Sequences and series/data/questions';
import { P4_QUESTIONS } from '../P4-Trigonometry/data/questions';
import { P5_QUESTIONS } from '../P5-Exponentials and logarithms/data/questions';
import { P6_QUESTIONS } from '../P6-Differentiation/data/questions';
import { P7_QUESTIONS } from '../P7-Integration/data/questions';
import { P8_QUESTIONS } from '../P8-Vectors/data/questions';

export const QUESTIONS: PracticeQuestion[] = [
  ...P1_QUESTIONS,
  ...P2_QUESTIONS,
  ...P3_QUESTIONS,
  ...P4_QUESTIONS,
  ...P5_QUESTIONS,
  ...P6_QUESTIONS,
  ...P7_QUESTIONS,
  ...P8_QUESTIONS,
];
