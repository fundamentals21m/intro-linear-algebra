// Quiz data exports for all sections and chapters
export * from './types';

// Chapter 1: Vectors (Sections 1-4)
export * from './chapter01';

// Chapter 2: Solving Linear Equations (Sections 5-9)
export * from './chapter02';

// Chapter 3: Vector Spaces (Sections 10-13)
export * from './chapter03';

// Chapter 4: Orthogonality (Sections 14-19)
export * from './chapter04';

// Chapter 5: Determinants (Sections 20-22)
export * from './chapter05';

// Chapter 6: Eigenvalues and Eigenvectors (Sections 23-27)
export * from './chapter06';

// Chapter 7: Singular Value Decomposition (Sections 28-31)
export * from './chapter07';

// Chapter 8: Linear Transformations (Sections 32-34)
export * from './chapter08';

// Chapter 9: Complex Vectors and Matrices (Sections 35-37)
export * from './chapter09';

// Chapter 10: Applications (Sections 38-44)
export * from './chapter10';

// Chapter 11: Numerical Linear Algebra (Sections 45-47)
export * from './chapter11';

// Chapter 12: Linear Algebra in Probability and Statistics (Sections 48-50)
export * from './chapter12';

// Convenience mapping from section number to quiz
import { section01Quiz, section02Quiz, section03Quiz, section04Quiz, chapter01Quiz } from './chapter01';
import { section05Quiz, section06Quiz, section07Quiz, section08Quiz, section09Quiz, chapter02Quiz } from './chapter02';
import { section10Quiz, section11Quiz, section12Quiz, section13Quiz, chapter03Quiz } from './chapter03';
import { section14Quiz, section15Quiz, section16Quiz, section17Quiz, section18Quiz, section19Quiz, chapter04Quiz } from './chapter04';
import { section20Quiz, section21Quiz, section22Quiz, chapter05Quiz } from './chapter05';
import { section23Quiz, section24Quiz, section25Quiz, section26Quiz, section27Quiz, chapter06Quiz } from './chapter06';
import { section28Quiz, section29Quiz, section30Quiz, section31Quiz, chapter07Quiz } from './chapter07';
import { section32Quiz, section33Quiz, section34Quiz, chapter08Quiz } from './chapter08';
import { section35Quiz, section36Quiz, section37Quiz, chapter09Quiz } from './chapter09';
import { section38Quiz, section39Quiz, section40Quiz, section41Quiz, section42Quiz, section43Quiz, section44Quiz, chapter10Quiz } from './chapter10';
import { section45Quiz, section46Quiz, section47Quiz, chapter11Quiz } from './chapter11';
import { section48Quiz, section49Quiz, section50Quiz, chapter12Quiz } from './chapter12';

import type { QuizQuestion } from './types';

// Map section ID to quiz questions
export const sectionQuizzes: Record<string, QuizQuestion[]> = {
  '01': section01Quiz,
  '02': section02Quiz,
  '03': section03Quiz,
  '04': section04Quiz,
  '05': section05Quiz,
  '06': section06Quiz,
  '07': section07Quiz,
  '08': section08Quiz,
  '09': section09Quiz,
  '10': section10Quiz,
  '11': section11Quiz,
  '12': section12Quiz,
  '13': section13Quiz,
  '14': section14Quiz,
  '15': section15Quiz,
  '16': section16Quiz,
  '17': section17Quiz,
  '18': section18Quiz,
  '19': section19Quiz,
  '20': section20Quiz,
  '21': section21Quiz,
  '22': section22Quiz,
  '23': section23Quiz,
  '24': section24Quiz,
  '25': section25Quiz,
  '26': section26Quiz,
  '27': section27Quiz,
  '28': section28Quiz,
  '29': section29Quiz,
  '30': section30Quiz,
  '31': section31Quiz,
  '32': section32Quiz,
  '33': section33Quiz,
  '34': section34Quiz,
  '35': section35Quiz,
  '36': section36Quiz,
  '37': section37Quiz,
  '38': section38Quiz,
  '39': section39Quiz,
  '40': section40Quiz,
  '41': section41Quiz,
  '42': section42Quiz,
  '43': section43Quiz,
  '44': section44Quiz,
  '45': section45Quiz,
  '46': section46Quiz,
  '47': section47Quiz,
  '48': section48Quiz,
  '49': section49Quiz,
  '50': section50Quiz,
};

// Map chapter ID to quiz questions
export const chapterQuizzes: Record<string, QuizQuestion[]> = {
  '01': chapter01Quiz,
  '02': chapter02Quiz,
  '03': chapter03Quiz,
  '04': chapter04Quiz,
  '05': chapter05Quiz,
  '06': chapter06Quiz,
  '07': chapter07Quiz,
  '08': chapter08Quiz,
  '09': chapter09Quiz,
  '10': chapter10Quiz,
  '11': chapter11Quiz,
  '12': chapter12Quiz,
};

// Helper to get quiz by section number
export function getSectionQuiz(sectionNumber: number): QuizQuestion[] | undefined {
  const key = sectionNumber.toString().padStart(2, '0');
  return sectionQuizzes[key];
}

// Helper to get quiz by chapter number
export function getChapterQuiz(chapterNumber: number): QuizQuestion[] | undefined {
  const key = chapterNumber.toString().padStart(2, '0');
  return chapterQuizzes[key];
}
