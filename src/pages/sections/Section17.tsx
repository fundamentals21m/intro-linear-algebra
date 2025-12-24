import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Math, MathBlock } from '@/components/common/MathBlock';

export default function Section17() {
  return (
    <LessonLayout sectionId={17}>
      {/* Introduction */}
      <p>
        When <Math>{`A\\mathbf{x} = \\mathbf{b}`}</Math> has no solution, the best we can do is <strong>project</strong>
        <Math>{`\\mathbf{b}`}</Math> onto the column space. Projections are the key to least squares.
      </p>

      <h2>Projection onto a Line</h2>

      <Definition title="Projection onto a Vector" className="my-6">
        <p>
          The projection of <Math>{`\\mathbf{b}`}</Math> onto the line through <Math>{`\\mathbf{a}`}</Math> is:
        </p>
        <MathBlock>
          {`\\mathbf{p} = \\frac{\\mathbf{a}^T\\mathbf{b}}{\\mathbf{a}^T\\mathbf{a}}\\mathbf{a}`}
        </MathBlock>
        <p className="mt-2">
          The <strong>error</strong> <Math>{`\\mathbf{e} = \\mathbf{b} - \\mathbf{p}`}</Math> is perpendicular to <Math>{`\\mathbf{a}`}</Math>.
        </p>
      </Definition>

      <Example title="Project b onto a" className="my-6">
        <MathBlock>
          {`\\mathbf{a} = \\begin{bmatrix} 1 \\\\ 1 \\\\ 1 \\end{bmatrix}, \\quad \\mathbf{b} = \\begin{bmatrix} 1 \\\\ 2 \\\\ 3 \\end{bmatrix}`}
        </MathBlock>
        <MathBlock>
          {`\\mathbf{p} = \\frac{\\mathbf{a}^T\\mathbf{b}}{\\mathbf{a}^T\\mathbf{a}}\\mathbf{a} = \\frac{1+2+3}{1+1+1}\\begin{bmatrix} 1 \\\\ 1 \\\\ 1 \\end{bmatrix} = \\frac{6}{3}\\begin{bmatrix} 1 \\\\ 1 \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} 2 \\\\ 2 \\\\ 2 \\end{bmatrix}`}
        </MathBlock>
      </Example>

      <h2>The Projection Matrix</h2>

      <Definition title="Projection Matrix P (onto a line)" className="my-6">
        <p>
          The projection onto the line through <Math>{`\\mathbf{a}`}</Math> is <Math>{`\\mathbf{p} = P\\mathbf{b}`}</Math>, where:
        </p>
        <MathBlock>
          {`P = \\frac{\\mathbf{a}\\mathbf{a}^T}{\\mathbf{a}^T\\mathbf{a}}`}
        </MathBlock>
        <p className="mt-2 text-amber-400">
          Note: <Math>{`\\mathbf{a}\\mathbf{a}^T`}</Math> is a matrix, <Math>{`\\mathbf{a}^T\\mathbf{a}`}</Math> is a number!
        </p>
      </Definition>

      <Theorem title="Properties of P" className="my-6">
        <ul className="list-disc list-inside space-y-2">
          <li><Math>P^2 = P</Math> (projecting twice = projecting once)</li>
          <li><Math>P^T = P</Math> (P is symmetric)</li>
          <li>Column space of <Math>P</Math> = line through <Math>{`\\mathbf{a}`}</Math></li>
          <li>Rank of <Math>P</Math> = 1</li>
        </ul>
      </Theorem>

      <h2>Projection onto a Subspace</h2>

      <p>
        When projecting onto a subspace spanned by several vectors (columns of <Math>A</Math>),
        we need to generalize.
      </p>

      <Definition title="Projection onto Column Space" className="my-6">
        <p>
          The projection of <Math>{`\\mathbf{b}`}</Math> onto the column space of <Math>A</Math> is <Math>{`\\mathbf{p} = A\\hat{x}`}</Math>,
          where <Math>{`\\hat{x}`}</Math> solves the <strong>normal equations</strong>:
        </p>
        <MathBlock>
          {`A^TA\\hat{x} = A^T\\mathbf{b}`}
        </MathBlock>
        <p className="mt-2">
          The projection is: <Math>{`\\mathbf{p} = A\\hat{x} = A(A^TA)^{-1}A^T\\mathbf{b}`}</Math>
        </p>
      </Definition>

      <Theorem title="Projection Matrix P (onto a subspace)" className="my-6">
        <MathBlock>
          {`P = A(A^TA)^{-1}A^T`}
        </MathBlock>
        <p className="mt-2 text-amber-400">
          Warning: <Math>{`(A^TA)^{-1}`}</Math> is <strong>not</strong> the same as <Math>{`A^{-1}(A^T)^{-1}`}</Math>!
        </p>
      </Theorem>

      <Example title="Projection in 2D" className="my-6">
        <p>Project onto the column space of:</p>
        <MathBlock>
          {`A = \\begin{bmatrix} 1 & 0 \\\\ 1 & 1 \\\\ 1 & 2 \\end{bmatrix}`}
        </MathBlock>
        <MathBlock>
          {`A^TA = \\begin{bmatrix} 3 & 3 \\\\ 3 & 5 \\end{bmatrix}, \\quad (A^TA)^{-1} = \\frac{1}{6}\\begin{bmatrix} 5 & -3 \\\\ -3 & 3 \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          The projection matrix <Math>{`P = A(A^TA)^{-1}A^T`}</Math> is <Math>3 \times 3</Math> with rank 2.
        </p>
      </Example>

      <h2>The Error Vector</h2>

      <Theorem title="Error is Perpendicular" className="my-6">
        <p>
          The error <Math>{`\\mathbf{e} = \\mathbf{b} - \\mathbf{p} = \\mathbf{b} - A\\hat{x}`}</Math> is perpendicular
          to the column space:
        </p>
        <MathBlock>
          {`A^T(\\mathbf{b} - A\\hat{x}) = \\mathbf{0}`}
        </MathBlock>
        <p className="mt-2">
          This is exactly why the normal equations <Math>{`A^TA\\hat{x} = A^T\\mathbf{b}`}</Math> work!
        </p>
      </Theorem>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>Project <Math>{`\\mathbf{b}`}</Math> onto line through <Math>{`\\mathbf{a}`}</Math>: <Math>{`\\mathbf{p} = \\mathbf{a}(\\mathbf{a}^T\\mathbf{a})^{-1}\\mathbf{a}^T\\mathbf{b}`}</Math>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>Project <Math>{`\\mathbf{b}`}</Math> onto column space of <Math>A</Math>: <Math>{`\\mathbf{p} = A(A^TA)^{-1}A^T\\mathbf{b}`}</Math>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>Projection matrix: <Math>{`P = A(A^TA)^{-1}A^T`}</Math>. Properties: <Math>P^2 = P</Math> and <Math>P^T = P</Math>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>The error <Math>{`\\mathbf{e} = \\mathbf{b} - \\mathbf{p}`}</Math> is perpendicular to the column space.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span><Math>{`\\hat{x}`}</Math> comes from the normal equations: <Math>{`A^TA\\hat{x} = A^T\\mathbf{b}`}</Math>.</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
