import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Math, MathBlock } from '@/components/common/MathBlock';

export default function Section27() {
  return (
    <LessonLayout sectionId={27}>
      {/* Introduction */}
      <p>
        <strong>Positive definite</strong> matrices are the "good" symmetric matrices. They appear throughout
        optimization, statistics, and physics. Every test for positive definiteness is worth knowing.
      </p>

      <h2>Definition and Tests</h2>

      <Definition title="Positive Definite Matrix" className="my-6">
        <p>
          A symmetric matrix <Math>S</Math> is <strong>positive definite</strong> if:
        </p>
        <MathBlock>
          {`\\mathbf{x}^TS\\mathbf{x} > 0 \\quad \\text{for all } \\mathbf{x} \\neq \\mathbf{0}`}
        </MathBlock>
        <p className="mt-2">
          The quadratic form <Math>{`\\mathbf{x}^TS\\mathbf{x}`}</Math> is always positive (like an upward-opening bowl).
        </p>
      </Definition>

      <Theorem title="Tests for Positive Definiteness" className="my-6">
        <p>A symmetric matrix <Math>S</Math> is positive definite if and only if:</p>
        <ol className="list-decimal list-inside mt-2 space-y-2">
          <li>All <strong>eigenvalues</strong> are positive: <Math>\lambda_i &gt; 0</Math></li>
          <li>All <strong>pivots</strong> are positive: <Math>d_i &gt; 0</Math></li>
          <li>All <strong>leading principal minors</strong> (upper-left determinants) are positive</li>
          <li><Math>S = A^TA</Math> for some matrix <Math>A</Math> with independent columns</li>
        </ol>
      </Theorem>

      <Example title="Testing a 2×2 Matrix" className="my-6">
        <MathBlock>
          {`S = \\begin{bmatrix} 2 & -1 \\\\ -1 & 2 \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2"><strong>Test 1 (Eigenvalues):</strong> <Math>\lambda = 3, 1</Math> ✓ (both positive)</p>
        <p className="mt-2"><strong>Test 2 (Pivots):</strong> <Math>2</Math> and <Math>2 - 1/2 = 3/2</Math> ✓ (both positive)</p>
        <p className="mt-2"><strong>Test 3 (Minors):</strong> <Math>\det[2] = 2 &gt; 0</Math>, <Math>\det S = 3 &gt; 0</Math> ✓</p>
      </Example>

      <h2>Positive Semidefinite</h2>

      <Definition title="Positive Semidefinite" className="my-6">
        <p>
          A symmetric matrix is <strong>positive semidefinite</strong> if:
        </p>
        <MathBlock>
          {`\\mathbf{x}^TS\\mathbf{x} \\geq 0 \\quad \\text{for all } \\mathbf{x}`}
        </MathBlock>
        <p className="mt-2">
          Equivalently: <Math>\lambda_i \geq 0</Math> (eigenvalues are nonnegative).
        </p>
      </Definition>

      <Example title="Semidefinite Example" className="my-6">
        <MathBlock>
          {`S = \\begin{bmatrix} 1 & 2 \\\\ 2 & 4 \\end{bmatrix} = \\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix}\\begin{bmatrix} 1 & 2 \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          Eigenvalues: <Math>5, 0</Math>. This is positive semidefinite (not definite).
        </p>
        <p className="mt-2">
          <Math>{`\\mathbf{x}^TS\\mathbf{x} = (x + 2y)^2 \\geq 0`}</Math>, with equality when <Math>x = -2y</Math>.
        </p>
      </Example>

      <h2>A^T A is Always Positive Semidefinite</h2>

      <Theorem title="A^T A" className="my-6">
        <p>For any matrix <Math>A</Math>:</p>
        <ul className="list-disc list-inside space-y-2">
          <li><Math>A^TA</Math> is symmetric and positive semidefinite</li>
          <li><Math>A^TA</Math> is positive <strong>definite</strong> if and only if <Math>A</Math> has independent columns</li>
        </ul>
        <MathBlock>
          {`\\mathbf{x}^T(A^TA)\\mathbf{x} = (A\\mathbf{x})^T(A\\mathbf{x}) = \\|A\\mathbf{x}\\|^2 \\geq 0`}
        </MathBlock>
      </Theorem>

      <h2>Cholesky Factorization</h2>

      <Theorem title="Cholesky Factorization" className="my-6">
        <p>
          Every positive definite matrix has a unique <strong>Cholesky factorization</strong>:
        </p>
        <MathBlock>
          {`S = LL^T`}
        </MathBlock>
        <p className="mt-2">
          where <Math>L</Math> is lower triangular with positive diagonal entries.
        </p>
        <p className="mt-2 text-primary-400">
          This is like <Math>LU</Math> factorization, but with <Math>U = L^T</Math>.
        </p>
      </Theorem>

      <Example title="Cholesky Example" className="my-6">
        <MathBlock>
          {`\\begin{bmatrix} 4 & 2 \\\\ 2 & 5 \\end{bmatrix} = \\begin{bmatrix} 2 & 0 \\\\ 1 & 2 \\end{bmatrix}\\begin{bmatrix} 2 & 1 \\\\ 0 & 2 \\end{bmatrix} = LL^T`}
        </MathBlock>
      </Example>

      <h2>Applications</h2>

      <div className="bg-dark-800/50 rounded-xl p-4 my-6 border border-primary-500/20">
        <p className="font-semibold text-primary-400 mb-2">Where Positive Definite Matrices Appear</p>
        <ul className="list-disc list-inside text-dark-300 text-sm space-y-1">
          <li><strong>Least squares:</strong> <Math>A^TA</Math> in normal equations</li>
          <li><strong>Optimization:</strong> Hessian matrix at a minimum</li>
          <li><strong>Statistics:</strong> Covariance matrices</li>
          <li><strong>Physics:</strong> Energy and kinetic energy matrices</li>
          <li><strong>Machine learning:</strong> Kernel matrices</li>
        </ul>
      </div>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>Positive definite: <Math>{`\\mathbf{x}^TS\\mathbf{x} &gt; 0`}</Math> for all <Math>{`\\mathbf{x} \\neq \\mathbf{0}`}</Math>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>Equivalent tests: all <Math>\lambda &gt; 0</Math>, all pivots <Math>&gt; 0</Math>, all leading minors <Math>&gt; 0</Math>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span><Math>A^TA</Math> is positive definite when <Math>A</Math> has independent columns.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>Cholesky: <Math>S = LL^T</Math> for positive definite <Math>S</Math>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>Positive semidefinite: <Math>{`\\mathbf{x}^TS\\mathbf{x} \\geq 0`}</Math>, eigenvalues <Math>\geq 0</Math>.</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
