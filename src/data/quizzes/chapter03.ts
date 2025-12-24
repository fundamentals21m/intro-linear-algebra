// Chapter 3: Vector Spaces and Subspaces (Sections 10-13)
import type { QuizQuestion } from './types';

// Section 10: Spaces of Vectors
export const section10Quiz: QuizQuestion[] = [
  {
    id: 's10-q1',
    question: 'Which is a vector space?',
    options: ['All vectors with positive components', 'ℝⁿ', 'Vectors with integer components only', 'The empty set'],
    correctAnswer: 1,
    difficulty: 'easy',
    explanation: 'ℝⁿ satisfies all vector space axioms. The others fail closure under scalar multiplication or addition.'
  },
  {
    id: 's10-q2',
    question: 'A subspace must contain:',
    options: ['At least two vectors', 'The zero vector', 'Only unit vectors', 'Exactly n vectors'],
    correctAnswer: 1,
    difficulty: 'easy',
    explanation: 'Every subspace contains 0 (it\'s closed under scalar multiplication by 0).'
  },
  {
    id: 's10-q3',
    question: 'The column space of A contains all vectors that can be written as:',
    options: ['Ax for some x', 'xᵀA for some x', 'Solutions to Ax = 0', 'Rows of A'],
    correctAnswer: 0,
    difficulty: 'medium',
    explanation: 'C(A) = {Ax : x ∈ ℝⁿ} = all linear combinations of columns of A.'
  },
  {
    id: 's10-q4',
    question: 'Which is NOT a subspace of ℝ³?',
    options: ['A plane through the origin', 'A line through the origin', 'The zero vector alone', 'A plane not through the origin'],
    correctAnswer: 3,
    difficulty: 'medium',
    explanation: 'A plane not through origin doesn\'t contain 0, so it\'s not a subspace.'
  }
];

// Section 11: Null Space
export const section11Quiz: QuizQuestion[] = [
  {
    id: 's11-q1',
    question: 'The null space of A consists of all solutions to:',
    options: ['Ax = b', 'Ax = 0', 'xA = 0', 'A = 0'],
    correctAnswer: 1,
    difficulty: 'easy',
    explanation: 'N(A) = {x : Ax = 0}, the set of all solutions to the homogeneous equation.'
  },
  {
    id: 's11-q2',
    question: 'The null space is always a:',
    options: ['Subspace', 'Full space ℝⁿ', 'Single vector', 'Empty set'],
    correctAnswer: 0,
    difficulty: 'easy',
    explanation: 'N(A) is a subspace of ℝⁿ (contains 0, closed under addition and scalar multiplication).'
  },
  {
    id: 's11-q3',
    question: 'If A is invertible, its null space contains:',
    options: ['Infinitely many vectors', 'All of ℝⁿ', 'Only the zero vector', 'No vectors'],
    correctAnswer: 2,
    difficulty: 'medium',
    explanation: 'Invertible A means Ax = 0 has only x = 0 as solution.'
  },
  {
    id: 's11-q4',
    question: 'Free variables in Ax = 0 correspond to:',
    options: ['Pivot columns', 'Non-pivot columns', 'Rows of A', 'Zero rows'],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Free variables come from columns without pivots; they can take any value.'
  }
];

// Section 12: Complete Solution
export const section12Quiz: QuizQuestion[] = [
  {
    id: 's12-q1',
    question: 'The complete solution to Ax = b is written as:',
    options: ['xₚ only', 'xₙ only', 'x = xₚ + xₙ', 'x = xₚ × xₙ'],
    correctAnswer: 2,
    difficulty: 'easy',
    explanation: 'Complete solution = particular solution + any null space vector: x = xₚ + xₙ.'
  },
  {
    id: 's12-q2',
    question: 'A particular solution xₚ satisfies:',
    options: ['Axₚ = 0', 'Axₚ = b', 'xₚ = 0', 'xₚ is in N(A)'],
    correctAnswer: 1,
    difficulty: 'easy',
    explanation: 'A particular solution is any specific solution to Ax = b.'
  },
  {
    id: 's12-q3',
    question: 'If rank(A) = r for an m×n matrix, the null space has dimension:',
    options: ['r', 'm - r', 'n - r', 'm'],
    correctAnswer: 2,
    difficulty: 'medium',
    explanation: 'The rank-nullity theorem: dim(N(A)) = n - r.'
  },
  {
    id: 's12-q4',
    question: 'If Ax = b has a solution, adding any vector from N(A) gives:',
    options: ['A different equation', 'No solution', 'Another solution to Ax = b', 'A solution to Ax = 0'],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation: 'If Axₚ = b and Axₙ = 0, then A(xₚ + xₙ) = b.'
  }
];

// Section 13: Rank
export const section13Quiz: QuizQuestion[] = [
  {
    id: 's13-q1',
    question: 'The rank of a matrix equals:',
    options: ['Number of rows', 'Number of columns', 'Number of pivots', 'Number of entries'],
    correctAnswer: 2,
    difficulty: 'easy',
    explanation: 'Rank = number of pivots = dimension of column space = dimension of row space.'
  },
  {
    id: 's13-q2',
    question: 'For a 5×7 matrix, the maximum possible rank is:',
    options: ['5', '7', '12', '35'],
    correctAnswer: 0,
    difficulty: 'easy',
    explanation: 'Rank ≤ min(m, n) = min(5, 7) = 5.'
  },
  {
    id: 's13-q3',
    question: 'A matrix has full column rank when:',
    options: ['rank = m', 'rank = n', 'rank = 0', 'rank = m + n'],
    correctAnswer: 1,
    difficulty: 'medium',
    explanation: 'Full column rank means rank = n (columns are independent).'
  },
  {
    id: 's13-q4',
    question: 'If rank(A) = rank([A|b]), then Ax = b:',
    options: ['Has no solution', 'Has a unique solution', 'Is consistent (has at least one solution)', 'Has exactly rank solutions'],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation: 'Equal ranks means b is in the column space of A, so a solution exists.'
  }
];

// Chapter 3 Comprehensive Quiz
export const chapter03Quiz: QuizQuestion[] = [
  {
    id: 'ch03-q1',
    question: 'Which is required for a set to be a subspace?',
    options: ['Contains only positive vectors', 'Contains exactly n vectors', 'Closed under addition and scalar multiplication', 'Contains the vector (1,1,...,1)'],
    correctAnswer: 2,
    difficulty: 'easy',
    explanation: 'A subspace must be closed under addition and scalar multiplication (and contain 0).'
  },
  {
    id: 'ch03-q2',
    question: 'The intersection of two subspaces is:',
    options: ['Never a subspace', 'Always a subspace', 'A subspace only if they\'re equal', 'Empty'],
    correctAnswer: 1,
    difficulty: 'medium',
    explanation: 'The intersection of any subspaces is also a subspace.'
  },
  {
    id: 'ch03-q3',
    question: 'For A (m×n), if rank(A) = n, then N(A) = :',
    options: ['ℝⁿ', '{0}', 'ℝᵐ', 'C(A)'],
    correctAnswer: 1,
    difficulty: 'medium',
    explanation: 'Full column rank means no free variables, so only x = 0 solves Ax = 0.'
  },
  {
    id: 'ch03-q4',
    question: 'The rank-nullity theorem states:',
    options: ['rank + nullity = m', 'rank + nullity = n', 'rank × nullity = n', 'rank = nullity'],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'For an m×n matrix: rank(A) + dim(N(A)) = n.'
  },
  {
    id: 'ch03-q5',
    question: 'The four fundamental subspaces are related to matrix A and:',
    options: ['A⁻¹', 'Aᵀ', 'A²', 'A + I'],
    correctAnswer: 1,
    difficulty: 'medium',
    explanation: 'The four subspaces: C(A), N(A), C(Aᵀ), N(Aᵀ).'
  },
  {
    id: 'ch03-q6',
    question: 'If Ax = b is inconsistent, then b is:',
    options: ['In the null space of A', 'In the column space of A', 'Not in the column space of A', 'Zero'],
    correctAnswer: 2,
    difficulty: 'medium',
    explanation: 'Ax = b solvable ⟺ b ∈ C(A). Inconsistent means b ∉ C(A).'
  },
  {
    id: 'ch03-q7',
    question: 'Special solutions to Ax = 0 form a:',
    options: ['Basis for C(A)', 'Basis for N(A)', 'Basis for ℝⁿ', 'Single vector'],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Setting each free variable to 1 (others to 0) gives basis vectors for N(A).'
  },
  {
    id: 'ch03-q8',
    question: 'The row space of A has the same dimension as:',
    options: ['N(A)', 'C(A)', 'N(Aᵀ)', 'ℝᵐ'],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'dim(row space) = dim(column space) = rank(A).'
  },
  {
    id: 'ch03-q9',
    question: 'A matrix is full rank if:',
    options: ['rank = 0', 'rank = max(m,n)', 'rank = min(m,n)', 'rank = m + n'],
    correctAnswer: 2,
    difficulty: 'easy',
    explanation: 'Full rank means rank equals the smaller dimension: min(m, n).'
  },
  {
    id: 'ch03-q10',
    question: 'The column space and left null space are:',
    options: ['Equal', 'Orthogonal complements in ℝᵐ', 'The same dimension', 'Both subspaces of ℝⁿ'],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'C(A) and N(Aᵀ) are orthogonal complements: C(A) ⊕ N(Aᵀ) = ℝᵐ.'
  }
];
