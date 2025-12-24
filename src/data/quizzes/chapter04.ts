// Chapter 4: Orthogonality (Sections 14-19)
import type { QuizQuestion } from './types';

// Section 14: Orthogonal Vectors and Subspaces
export const section14Quiz: QuizQuestion[] = [
  {
    id: 's14-q1',
    question: 'Two vectors are orthogonal when their dot product is:',
    options: ['1', '-1', '0', 'Their product of lengths'],
    correctAnswer: 2,
    difficulty: 'easy',
    explanation: 'u · v = 0 defines orthogonality (perpendicular vectors).'
  },
  {
    id: 's14-q2',
    question: 'The row space and null space of A are orthogonal in:',
    options: ['ℝᵐ', 'ℝⁿ', 'ℝʳ', 'They are not orthogonal'],
    correctAnswer: 1,
    difficulty: 'medium',
    explanation: 'Row space and null space are orthogonal complements in ℝⁿ.'
  },
  {
    id: 's14-q3',
    question: 'Orthogonal complement of a subspace V is written as:',
    options: ['V⁻¹', 'Vᵀ', 'V⊥', 'V*'],
    correctAnswer: 2,
    difficulty: 'easy',
    explanation: 'V⊥ ("V perp") contains all vectors orthogonal to every vector in V.'
  },
  {
    id: 's14-q4',
    question: 'If V has dimension k in ℝⁿ, then V⊥ has dimension:',
    options: ['k', 'n - k', 'n + k', 'n/k'],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'V and V⊥ are complements: dim(V) + dim(V⊥) = n.'
  }
];

// Section 15: Projections
export const section15Quiz: QuizQuestion[] = [
  {
    id: 's15-q1',
    question: 'The projection of b onto a line through a is:',
    options: ['a·b', '(a·b/a·a)a', 'a/b', 'b - a'],
    correctAnswer: 1,
    difficulty: 'medium',
    explanation: 'proj_a(b) = (a·b/a·a)a = (aᵀb/aᵀa)a.'
  },
  {
    id: 's15-q2',
    question: 'The error vector e = b - p is orthogonal to:',
    options: ['b', 'The subspace being projected onto', 'The null space', 'Nothing'],
    correctAnswer: 1,
    difficulty: 'medium',
    explanation: 'The error is perpendicular to the subspace: that\'s what makes p the closest point.'
  },
  {
    id: 's15-q3',
    question: 'The projection matrix P satisfies P² = :',
    options: ['2P', 'I', 'P', '0'],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation: 'Projecting twice is the same as projecting once: P² = P (idempotent).'
  },
  {
    id: 's15-q4',
    question: 'If P projects onto a subspace, then I - P projects onto:',
    options: ['The same subspace', 'The orthogonal complement', 'The null space', 'The whole space'],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'P + (I-P) = I, and they project onto complementary subspaces.'
  }
];

// Section 16: Least Squares
export const section16Quiz: QuizQuestion[] = [
  {
    id: 's16-q1',
    question: 'Least squares minimizes:',
    options: ['||Ax - b||', '||Ax - b||²', '|Ax - b|', 'Ax - b'],
    correctAnswer: 1,
    difficulty: 'easy',
    explanation: 'We minimize the squared error ||Ax - b||² (sum of squared residuals).'
  },
  {
    id: 's16-q2',
    question: 'The normal equations are:',
    options: ['Ax = b', 'AᵀAx̂ = Aᵀb', 'AAᵀx̂ = b', 'x̂ = A⁻¹b'],
    correctAnswer: 1,
    difficulty: 'medium',
    explanation: 'Multiply Ax = b by Aᵀ to get AᵀAx̂ = Aᵀb.'
  },
  {
    id: 's16-q3',
    question: 'AᵀA is always:',
    options: ['Invertible', 'Symmetric', 'Orthogonal', 'Diagonal'],
    correctAnswer: 1,
    difficulty: 'medium',
    explanation: '(AᵀA)ᵀ = AᵀAᵀᵀ = AᵀA, so it\'s symmetric.'
  },
  {
    id: 's16-q4',
    question: 'In fitting y = C + Dt, the normal equations find:',
    options: ['Any line', 'The line minimizing vertical distances squared', 'The perpendicular line', 'A horizontal line'],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Least squares finds the line minimizing sum of squared vertical errors.'
  }
];

// Section 17: Orthonormal Bases
export const section17Quiz: QuizQuestion[] = [
  {
    id: 's17-q1',
    question: 'Orthonormal vectors satisfy qᵢ · qⱼ = :',
    options: ['1 for all i,j', '0 for all i,j', '1 if i=j, 0 otherwise', 'i + j'],
    correctAnswer: 2,
    difficulty: 'easy',
    explanation: 'Orthonormal: qᵢ · qⱼ = δᵢⱼ (Kronecker delta).'
  },
  {
    id: 's17-q2',
    question: 'For a matrix Q with orthonormal columns, QᵀQ = :',
    options: ['Q', 'I', 'QQᵀ', '0'],
    correctAnswer: 1,
    difficulty: 'medium',
    explanation: 'Orthonormal columns give QᵀQ = I (identity).'
  },
  {
    id: 's17-q3',
    question: 'The Gram-Schmidt process produces:',
    options: ['Eigenvalues', 'An orthonormal basis', 'The inverse matrix', 'Determinants'],
    correctAnswer: 1,
    difficulty: 'easy',
    explanation: 'Gram-Schmidt orthonormalizes a set of vectors.'
  },
  {
    id: 's17-q4',
    question: 'A square matrix with orthonormal columns is called:',
    options: ['Symmetric', 'Diagonal', 'Orthogonal', 'Positive definite'],
    correctAnswer: 2,
    difficulty: 'medium',
    explanation: 'Square Q with QᵀQ = I is orthogonal (Q⁻¹ = Qᵀ).'
  }
];

// Section 18: QR Factorization
export const section18Quiz: QuizQuestion[] = [
  {
    id: 's18-q1',
    question: 'In A = QR, Q has:',
    options: ['The same columns as A', 'Orthonormal columns', 'Upper triangular form', 'Eigenvalues of A'],
    correctAnswer: 1,
    difficulty: 'easy',
    explanation: 'Q has orthonormal columns from Gram-Schmidt on columns of A.'
  },
  {
    id: 's18-q2',
    question: 'In A = QR, R is:',
    options: ['Lower triangular', 'Upper triangular', 'Diagonal', 'Orthogonal'],
    correctAnswer: 1,
    difficulty: 'easy',
    explanation: 'R is upper triangular with positive diagonal entries.'
  },
  {
    id: 's18-q3',
    question: 'Using QR, least squares becomes:',
    options: ['Rx̂ = Qᵀb', 'Qx̂ = b', 'x̂ = QR', 'QRx̂ = b'],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation: 'From AᵀAx̂ = Aᵀb, with A = QR: Rx̂ = Qᵀb (easier to solve).'
  },
  {
    id: 's18-q4',
    question: 'QR factorization is numerically better than normal equations because:',
    options: ['It\'s faster', 'It avoids computing AᵀA', 'It gives exact answers', 'R is always invertible'],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'AᵀA can be ill-conditioned; QR avoids this numerical problem.'
  }
];

// Section 19: Gram-Schmidt
export const section19Quiz: QuizQuestion[] = [
  {
    id: 's19-q1',
    question: 'Gram-Schmidt starts by:',
    options: ['Normalizing all vectors', 'Subtracting projections', 'Taking the first vector as q₁ (normalized)', 'Finding eigenvalues'],
    correctAnswer: 2,
    difficulty: 'easy',
    explanation: 'First step: q₁ = a₁/||a₁|| (normalize the first vector).'
  },
  {
    id: 's19-q2',
    question: 'To make a₂ orthogonal to q₁, we compute:',
    options: ['a₂ - q₁', 'a₂ + q₁', 'a₂ - (q₁ᵀa₂)q₁', 'a₂/(q₁ᵀa₂)'],
    correctAnswer: 2,
    difficulty: 'medium',
    explanation: 'Remove the component in the q₁ direction: a₂ - (q₁ᵀa₂)q₁.'
  },
  {
    id: 's19-q3',
    question: 'If Gram-Schmidt produces a zero vector at step k, the original vectors were:',
    options: ['Orthogonal', 'Linearly dependent', 'Unit vectors', 'Eigenvectors'],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'A zero vector means aₖ was a linear combination of previous vectors.'
  },
  {
    id: 's19-q4',
    question: 'Modified Gram-Schmidt is preferred because:',
    options: ['It\'s faster', 'It\'s more numerically stable', 'It works on complex vectors', 'It produces different results'],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Modified GS reduces numerical errors in floating-point arithmetic.'
  }
];

// Chapter 4 Comprehensive Quiz
export const chapter04Quiz: QuizQuestion[] = [
  {
    id: 'ch04-q1',
    question: 'Orthogonal vectors have dot product:',
    options: ['1', '-1', '0', '||u|| ||v||'],
    correctAnswer: 2,
    difficulty: 'easy',
    explanation: 'u ⊥ v means u · v = 0.'
  },
  {
    id: 'ch04-q2',
    question: 'The projection matrix onto column space of A is:',
    options: ['A(AᵀA)⁻¹Aᵀ', 'AᵀA', 'AAᵀ', 'A⁻¹'],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation: 'P = A(AᵀA)⁻¹Aᵀ projects onto C(A).'
  },
  {
    id: 'ch04-q3',
    question: 'Least squares solution x̂ minimizes:',
    options: ['||x||', '||Ax||', '||b - Ax||', '||A||'],
    correctAnswer: 2,
    difficulty: 'medium',
    explanation: 'Least squares minimizes the residual ||b - Ax||.'
  },
  {
    id: 'ch04-q4',
    question: 'An orthogonal matrix Q satisfies:',
    options: ['Qᵀ = Q', 'Qᵀ = -Q', 'Qᵀ = Q⁻¹', 'Q² = I'],
    correctAnswer: 2,
    difficulty: 'medium',
    explanation: 'QᵀQ = I, so Qᵀ = Q⁻¹.'
  },
  {
    id: 'ch04-q5',
    question: 'QR factorization expresses A as:',
    options: ['Product of eigenvalues', 'Orthogonal × upper triangular', 'Lower × upper triangular', 'Symmetric × antisymmetric'],
    correctAnswer: 1,
    difficulty: 'medium',
    explanation: 'A = QR where Q is orthogonal (or has orthonormal columns) and R is upper triangular.'
  },
  {
    id: 'ch04-q6',
    question: 'The error b - Ax̂ in least squares is in:',
    options: ['C(A)', 'N(A)', 'N(Aᵀ)', 'Row space of A'],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation: 'The error is orthogonal to C(A), so it\'s in C(A)⊥ = N(Aᵀ).'
  },
  {
    id: 'ch04-q7',
    question: 'Orthonormal basis makes computing projections:',
    options: ['Impossible', 'Easy (just dot products)', 'Require matrix inversion', 'Give zero'],
    correctAnswer: 1,
    difficulty: 'medium',
    explanation: 'With orthonormal q\'s: projection = Σ(qᵢᵀb)qᵢ, just dot products.'
  },
  {
    id: 'ch04-q8',
    question: 'For projection P, the complement I - P projects onto:',
    options: ['The same space', 'The orthogonal complement', 'The zero vector', 'The full space'],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'P and I - P are complementary projections onto orthogonal subspaces.'
  },
  {
    id: 'ch04-q9',
    question: 'Orthogonal matrices preserve:',
    options: ['Only angles', 'Only lengths', 'Both lengths and angles', 'Neither'],
    correctAnswer: 2,
    difficulty: 'medium',
    explanation: '||Qx|| = ||x|| and angles are preserved (Q preserves dot products).'
  },
  {
    id: 'ch04-q10',
    question: 'Gram-Schmidt produces the R in A = QR by:',
    options: ['Eigenvalue decomposition', 'Recording the coefficients of projections', 'Random generation', 'Matrix inversion'],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'The entries of R are the projection coefficients qᵢᵀaⱼ.'
  }
];
