// Chapter 2: Solving Linear Equations (Sections 5-9)
import type { QuizQuestion } from './types';

// Section 5: Elimination
export const section05Quiz: QuizQuestion[] = [
  {
    id: 's05-q1',
    question: 'The goal of elimination is to transform A into what type of matrix?',
    options: ['Diagonal', 'Upper triangular', 'Lower triangular', 'Identity'],
    correctAnswer: 1,
    difficulty: 'easy',
    explanation: 'Gaussian elimination creates zeros below the diagonal, producing upper triangular form U.'
  },
  {
    id: 's05-q2',
    question: 'What is the first pivot in the elimination process?',
    options: ['Any nonzero entry', 'The entry a₁₁', 'The largest entry', 'The entry a₁ₙ'],
    correctAnswer: 1,
    difficulty: 'easy',
    explanation: 'The first pivot is a₁₁ (if nonzero), used to eliminate entries below it in column 1.'
  },
  {
    id: 's05-q3',
    question: 'When does elimination fail (require a row exchange)?',
    options: ['When the pivot is 1', 'When the pivot is 0', 'When the pivot is negative', 'Never'],
    correctAnswer: 1,
    difficulty: 'medium',
    explanation: 'A zero pivot requires a row exchange to find a nonzero pivot below it.'
  },
  {
    id: 's05-q4',
    question: 'The multiplier ℓᵢⱼ used to eliminate entry (i,j) equals:',
    options: ['aᵢⱼ/aⱼⱼ', 'aⱼⱼ/aᵢⱼ', 'aᵢⱼ × aⱼⱼ', 'aᵢⱼ - aⱼⱼ'],
    correctAnswer: 0,
    difficulty: 'medium',
    explanation: 'The multiplier ℓᵢⱼ = (entry to eliminate)/(pivot) = aᵢⱼ/aⱼⱼ.'
  },
  {
    id: 's05-q5',
    question: 'After elimination, if a row becomes 0 = c (where c ≠ 0), the system is:',
    options: ['Consistent', 'Inconsistent', 'Has infinitely many solutions', 'Homogeneous'],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: '0 = c (c ≠ 0) is a contradiction, indicating no solution exists.'
  }
];

// Section 6: Back Substitution
export const section06Quiz: QuizQuestion[] = [
  {
    id: 's06-q1',
    question: 'Back substitution solves equations starting from:',
    options: ['The first equation', 'The last equation', 'Any equation', 'The middle equation'],
    correctAnswer: 1,
    difficulty: 'easy',
    explanation: 'After elimination to upper triangular form, solve from bottom to top.'
  },
  {
    id: 's06-q2',
    question: 'If the last equation is 5x₃ = 10, then x₃ equals:',
    options: ['50', '5', '2', '10'],
    correctAnswer: 2,
    difficulty: 'easy',
    explanation: 'x₃ = 10/5 = 2.'
  },
  {
    id: 's06-q3',
    question: 'A system Ux = c where U is upper triangular has a unique solution when:',
    options: ['All pivots are 1', 'All pivots are nonzero', 'U is symmetric', 'c = 0'],
    correctAnswer: 1,
    difficulty: 'medium',
    explanation: 'Nonzero pivots on the diagonal ensure unique solution via back substitution.'
  },
  {
    id: 's06-q4',
    question: 'The time complexity of back substitution for an n×n system is:',
    options: ['O(n)', 'O(n²)', 'O(n³)', 'O(2ⁿ)'],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Back substitution requires about n²/2 operations, which is O(n²).'
  }
];

// Section 7: Matrix Operations
export const section07Quiz: QuizQuestion[] = [
  {
    id: 's07-q1',
    question: 'For matrices A and B, when is A + B defined?',
    options: ['Always', 'When they have the same dimensions', 'When A is square', 'When B is square'],
    correctAnswer: 1,
    difficulty: 'easy',
    explanation: 'Matrix addition requires matching dimensions (same number of rows and columns).'
  },
  {
    id: 's07-q2',
    question: 'For AB to be defined, the number of columns of A must equal:',
    options: ['The number of rows of B', 'The number of columns of B', 'The number of rows of A', '1'],
    correctAnswer: 0,
    difficulty: 'easy',
    explanation: 'Matrix multiplication A(m×n) · B(n×p) requires columns of A = rows of B.'
  },
  {
    id: 's07-q3',
    question: 'If A is 3×4 and B is 4×2, what are the dimensions of AB?',
    options: ['3×2', '4×4', '3×4', '2×3'],
    correctAnswer: 0,
    difficulty: 'medium',
    explanation: 'A(3×4) · B(4×2) = C(3×2). Result has rows of A and columns of B.'
  },
  {
    id: 's07-q4',
    question: 'Is matrix multiplication commutative (AB = BA)?',
    options: ['Always', 'Never', 'Only for square matrices', 'Generally not'],
    correctAnswer: 3,
    difficulty: 'medium',
    explanation: 'AB ≠ BA in general. Even when both products exist, they usually differ.'
  },
  {
    id: 's07-q5',
    question: '(AB)C equals:',
    options: ['A(BC)', 'C(BA)', 'ACB', 'CAB'],
    correctAnswer: 0,
    difficulty: 'medium',
    explanation: 'Matrix multiplication is associative: (AB)C = A(BC).'
  }
];

// Section 8: Inverses
export const section08Quiz: QuizQuestion[] = [
  {
    id: 's08-q1',
    question: 'If A⁻¹ exists, then A⁻¹A equals:',
    options: ['A', '2A', 'I (identity)', '0'],
    correctAnswer: 2,
    difficulty: 'easy',
    explanation: 'By definition, A⁻¹A = AA⁻¹ = I (the identity matrix).'
  },
  {
    id: 's08-q2',
    question: 'A matrix with an inverse is called:',
    options: ['Singular', 'Invertible (nonsingular)', 'Orthogonal', 'Symmetric'],
    correctAnswer: 1,
    difficulty: 'easy',
    explanation: 'An invertible (or nonsingular) matrix has an inverse.'
  },
  {
    id: 's08-q3',
    question: 'Which condition guarantees that A is NOT invertible?',
    options: ['All pivots are nonzero', 'det(A) = 0', 'A is square', 'A = Aᵀ'],
    correctAnswer: 1,
    difficulty: 'medium',
    explanation: 'A singular matrix has det(A) = 0 and has no inverse.'
  },
  {
    id: 's08-q4',
    question: 'The inverse of AB (when it exists) is:',
    options: ['A⁻¹B⁻¹', 'B⁻¹A⁻¹', 'BA⁻¹', 'A⁻¹ + B⁻¹'],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: '(AB)⁻¹ = B⁻¹A⁻¹. The order reverses!'
  },
  {
    id: 's08-q5',
    question: 'For a 2×2 matrix A = [[a,b],[c,d]], the inverse involves dividing by:',
    options: ['a + d', 'ad + bc', 'ad - bc', 'a - d'],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation: 'A⁻¹ = (1/(ad-bc))[[d,-b],[-c,a]]. The denominator is det(A) = ad - bc.'
  }
];

// Section 9: LU Factorization
export const section09Quiz: QuizQuestion[] = [
  {
    id: 's09-q1',
    question: 'In the LU factorization A = LU, L is:',
    options: ['Upper triangular', 'Lower triangular', 'Diagonal', 'Orthogonal'],
    correctAnswer: 1,
    difficulty: 'easy',
    explanation: 'L is lower triangular (with 1s on diagonal), U is upper triangular.'
  },
  {
    id: 's09-q2',
    question: 'The entries below the diagonal of L are:',
    options: ['The pivots', 'The multipliers from elimination', 'Always 1', 'Always 0'],
    correctAnswer: 1,
    difficulty: 'medium',
    explanation: 'L stores the multipliers ℓᵢⱼ used during elimination.'
  },
  {
    id: 's09-q3',
    question: 'The main advantage of LU factorization is:',
    options: ['It never fails', 'It works for any matrix', 'Solving Ax = b for multiple b vectors efficiently', 'It is faster than elimination'],
    correctAnswer: 2,
    difficulty: 'medium',
    explanation: 'Once A = LU is computed, solving for new b only requires forward/back substitution.'
  },
  {
    id: 's09-q4',
    question: 'The number of operations for LU factorization of an n×n matrix is approximately:',
    options: ['n²', 'n³/3', 'n³', '2ⁿ'],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'LU factorization requires about n³/3 multiplications and additions.'
  }
];

// Chapter 2 Comprehensive Quiz
export const chapter02Quiz: QuizQuestion[] = [
  {
    id: 'ch02-q1',
    question: 'Gaussian elimination transforms A into:',
    options: ['L (lower triangular)', 'U (upper triangular)', 'D (diagonal)', 'I (identity)'],
    correctAnswer: 1,
    difficulty: 'easy',
    explanation: 'Elimination creates zeros below the diagonal, giving upper triangular U.'
  },
  {
    id: 'ch02-q2',
    question: 'If elimination produces a zero pivot with no nonzero entry below it, then:',
    options: ['The system has a unique solution', 'The system is inconsistent', 'The matrix is singular', 'We multiply by -1'],
    correctAnswer: 2,
    difficulty: 'medium',
    explanation: 'A zero pivot that cannot be fixed means the matrix is singular (not invertible).'
  },
  {
    id: 'ch02-q3',
    question: 'The product of the pivots equals:',
    options: ['0', 'det(A)', 'rank(A)', 'n'],
    correctAnswer: 1,
    difficulty: 'medium',
    explanation: 'For triangular matrices, det = product of diagonal entries. det(A) = det(U) = product of pivots.'
  },
  {
    id: 'ch02-q4',
    question: 'To solve Ax = b using LU factorization, we solve:',
    options: ['Lx = b, then Ux = c', 'Ux = b, then Lx = c', 'Lc = b, then Ux = c', 'LUx = b directly'],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation: 'First solve Lc = b (forward substitution), then Ux = c (back substitution).'
  },
  {
    id: 'ch02-q5',
    question: 'If A and B are both invertible n×n matrices, then AB is:',
    options: ['Always singular', 'Always invertible', 'Invertible only if A = B', 'Sometimes invertible'],
    correctAnswer: 1,
    difficulty: 'medium',
    explanation: 'The product of invertible matrices is invertible: (AB)⁻¹ = B⁻¹A⁻¹.'
  },
  {
    id: 'ch02-q6',
    question: 'A permutation matrix P has the property:',
    options: ['P⁻¹ = P', 'P⁻¹ = Pᵀ', 'P² = I', 'Both P⁻¹ = Pᵀ and P² = I can be true'],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Permutation matrices are orthogonal: P⁻¹ = Pᵀ. P² = I only for some P.'
  },
  {
    id: 'ch02-q7',
    question: 'The equation (AB)ᵀ equals:',
    options: ['AᵀBᵀ', 'BᵀAᵀ', 'AᵀBᵀ only if A = B', 'BA'],
    correctAnswer: 1,
    difficulty: 'medium',
    explanation: 'The transpose of a product reverses order: (AB)ᵀ = BᵀAᵀ.'
  },
  {
    id: 'ch02-q8',
    question: 'A matrix with linearly dependent columns:',
    options: ['Is always invertible', 'Has det ≠ 0', 'Has det = 0', 'Must be square'],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation: 'Dependent columns mean the matrix is singular, so det = 0.'
  },
  {
    id: 'ch02-q9',
    question: 'The identity matrix I has the property that IA equals:',
    options: ['I', 'A', 'AI', '2A'],
    correctAnswer: 1,
    difficulty: 'easy',
    explanation: 'The identity matrix satisfies IA = AI = A for any matrix A.'
  },
  {
    id: 'ch02-q10',
    question: 'If A⁻¹ = A, then A is called:',
    options: ['Symmetric', 'Orthogonal', 'Involutory', 'Nilpotent'],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation: 'A matrix satisfying A⁻¹ = A (or A² = I) is called involutory.'
  }
];
