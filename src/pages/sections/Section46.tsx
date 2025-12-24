import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Math, MathBlock } from '@/components/common/MathBlock';

export default function Section46() {
  return (
    <LessonLayout sectionId={46}>
      {/* Introduction */}
      <p>
        <strong>Iterative methods</strong> solve large systems <Math>Ax = b</Math> by repeatedly
        improving an approximation. They're essential when <Math>A</Math> is too large to factor directly.
      </p>

      <h2>Basic Iteration</h2>

      <Definition title="Splitting Methods" className="my-6">
        <p>
          Write <Math>A = M - N</Math> and iterate:
        </p>
        <MathBlock>
          {`M\\mathbf{x}_{k+1} = N\\mathbf{x}_k + \\mathbf{b}`}
        </MathBlock>
        <p className="mt-2">
          Or equivalently: <Math>{`\\mathbf{x}_{k+1} = M^{-1}N\\mathbf{x}_k + M^{-1}\\mathbf{b}`}</Math>
        </p>
      </Definition>

      <Theorem title="Convergence" className="my-6">
        <p>
          The iteration converges if and only if:
        </p>
        <MathBlock>
          {`\\rho(M^{-1}N) < 1`}
        </MathBlock>
        <p className="mt-2">
          where <Math>\rho</Math> is the <strong>spectral radius</strong> (largest <Math>|\lambda|</Math>).
        </p>
      </Theorem>

      <h2>Classical Methods</h2>

      <Definition title="Jacobi Iteration" className="my-6">
        <p>
          Split <Math>A = D - L - U</Math> (diagonal, lower, upper):
        </p>
        <MathBlock>
          {`x_i^{(k+1)} = \\frac{1}{a_{ii}}\\left(b_i - \\sum_{j \\neq i} a_{ij}x_j^{(k)}\\right)`}
        </MathBlock>
        <p className="mt-2">
          Update all components simultaneously using old values.
        </p>
      </Definition>

      <Definition title="Gauss-Seidel Iteration" className="my-6">
        <p>
          Use new values as soon as they're computed:
        </p>
        <MathBlock>
          {`x_i^{(k+1)} = \\frac{1}{a_{ii}}\\left(b_i - \\sum_{j < i} a_{ij}x_j^{(k+1)} - \\sum_{j > i} a_{ij}x_j^{(k)}\\right)`}
        </MathBlock>
        <p className="mt-2">
          Often converges faster than Jacobi.
        </p>
      </Definition>

      <Example title="Comparing Jacobi and Gauss-Seidel" className="my-6">
        <p>For diagonally dominant systems, both converge, but Gauss-Seidel is typically 2× faster.</p>
        <p className="mt-2">
          For <Math>{`A = \\begin{bmatrix} 4 & 1 \\\\\\\\ 1 & 3 \\end{bmatrix}`}</Math>:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Jacobi: <Math>\rho \approx 0.25</Math></li>
          <li>Gauss-Seidel: <Math>\rho \approx 0.0625</Math></li>
        </ul>
      </Example>

      <h2>Krylov Subspace Methods</h2>

      <Definition title="Krylov Subspace" className="my-6">
        <p>
          The <Math>k</Math>th <strong>Krylov subspace</strong> is:
        </p>
        <MathBlock>
          {`\\mathcal{K}_k(A, \\mathbf{b}) = \\text{span}\\{\\mathbf{b}, A\\mathbf{b}, A^2\\mathbf{b}, \\ldots, A^{k-1}\\mathbf{b}\\}`}
        </MathBlock>
        <p className="mt-2">
          Find the best approximate solution in this subspace.
        </p>
      </Definition>

      <Theorem title="Conjugate Gradient Method" className="my-6">
        <p>
          For symmetric positive definite <Math>A</Math>, <strong>conjugate gradients (CG)</strong>
          minimizes:
        </p>
        <MathBlock>
          {`f(\\mathbf{x}) = \\frac{1}{2}\\mathbf{x}^TA\\mathbf{x} - \\mathbf{b}^T\\mathbf{x}`}
        </MathBlock>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Converges in at most <Math>n</Math> steps (exact arithmetic)</li>
          <li>In practice, convergence rate depends on <Math>\kappa(A)</Math></li>
          <li>Error decreases by factor <Math>{`\\frac{\\sqrt{\\kappa}-1}{\\sqrt{\\kappa}+1}`}</Math> per step</li>
        </ul>
      </Theorem>

      <div className="bg-dark-800/50 rounded-xl p-4 my-6 border border-primary-500/20">
        <p className="font-semibold text-primary-400 mb-2">GMRES</p>
        <p className="text-dark-300 text-sm">
          For non-symmetric <Math>A</Math>, <strong>GMRES</strong> (Generalized Minimal Residual) minimizes
          <Math>{`\\|A\\mathbf{x} - \\mathbf{b}\\|`}</Math> over the Krylov subspace. It's the workhorse of
          modern iterative solvers.
        </p>
      </div>

      <h2>Preconditioning</h2>

      <Definition title="Preconditioning" className="my-6">
        <p>
          Solve <Math>{`M^{-1}Ax = M^{-1}b`}</Math> instead of <Math>Ax = b</Math>:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Choose <Math>M \approx A</Math> but easy to invert</li>
          <li>Goal: <Math>{`\\kappa(M^{-1}A) \\ll \\kappa(A)`}</Math></li>
          <li>Common: incomplete LU, Jacobi, multigrid</li>
        </ul>
      </Definition>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>Iterative methods: <Math>{`\\mathbf{x}_{k+1} = B\\mathbf{x}_k + \\mathbf{c}`}</Math>. Converge if <Math>\rho(B) &lt; 1</Math>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>Jacobi: update all simultaneously. Gauss-Seidel: use new values immediately.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>Krylov methods (CG, GMRES): search in <Math>{`\\text{span}\\{b, Ab, A^2b, \\\\ldots}\\`}</Math>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>CG for SPD matrices; GMRES for general matrices.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>Preconditioning reduces condition number and speeds convergence.</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
