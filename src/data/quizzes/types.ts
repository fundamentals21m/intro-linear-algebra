import type { Difficulty } from '@/types/gamification';

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  difficulty: Difficulty;
  explanation: string;
}

export type { Difficulty };
