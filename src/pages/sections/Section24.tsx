import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Math, MathBlock } from '@/components/common/MathBlock';

export default function Section24() {
  return (
    <LessonLayout sectionId={24}>
      {/* Introduction */}
      <p>
        When a matrix has <Math>n</Math> independent eigenvectors, it can be <strong>diagonalized</strong>.
        This factorization <Math>{`A = X\\Lambda X^{-1}`}</Math> makes computing powers of <Math>A</Math> easy.
      </p>

      <h2>The Diagonalization</h2>

      <Theorem title="Diagonalization" className="my-6">
        <p>
          If <Math>A</Math> has <Math>n</Math> linearly independent eigenvectors, put them in the columns of <Math>X</Math>:
        </p>
        <MathBlock>
          {`A = X\\Lambda X^{-1}`}
        </MathBlock>
        <p className="mt-2">
          where <Math>\Lambda</Math> is the diagonal matrix of eigenvalues:
        </p>
        <MathBlock>
          {`\\Lambda = \\begin{bmatrix} \\lambda_1 & & 0 \\\\ & \\ddots & \\\\ 0 & & \\lambda_n \\end{bmatrix}`}
        </MathBlock>
      </Theorem>

      <Example title="Diagonalizing a 2×2 Matrix" className="my-6">
        <MathBlock>
          {`A = \\begin{bmatrix} 4 & -5 \\\\ 2 & -3 \\end{bmatrix}, \\quad \\lambda_1 = 2, \\lambda_2 = -1`}
        </MathBlock>
        <p className="mt-2">Eigenvectors: <Math>{`\\mathbf{x}_1 = (5, 2)`}</Math> and <Math>{`\\mathbf{x}_2 = (1, 1)`}</Math></p>
        <MathBlock>
          {`X = \\begin{bmatrix} 5 & 1 \\\\ 2 & 1 \\end{bmatrix}, \\quad \\Lambda = \\begin{bmatrix} 2 & 0 \\\\ 0 & -1 \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          Check: <Math>{`A = X\\Lambda X^{-1}`}</Math> ✓
        </p>
      </Example>

      <h2>Powers of A</h2>

      <Theorem title="Computing A^k" className="my-6">
        <p>
          The key benefit of diagonalization: powers become easy!
        </p>
        <MathBlock>
          {`A^k = X\\Lambda^k X^{-1}`}
        </MathBlock>
        <p className="mt-2">
          And <Math>\Lambda^k</Math> is just <Math>{`\\text{diag}(\\lambda_1^k, \\lambda_2^k, \\ldots, \\lambda_n^k)`}</Math>.
        </p>
      </Theorem>

      <Example title="Computing A^{100}" className="my-6">
        <MathBlock>
          {`A^{100} = X\\Lambda^{100}X^{-1} = \\begin{bmatrix} 5 & 1 \\\\ 2 & 1 \\end{bmatrix}\\begin{bmatrix} 2^{100} & 0 \\\\ 0 & (-1)^{100} \\end{bmatrix}X^{-1}`}
        </MathBlock>
        <p className="mt-2">
          Since <Math>{`(-1)^{100} = 1`}</Math>, the answer involves <Math>{`2^{100}`}</Math> and <Math>1</Math>.
        </p>
      </Example>

      <h2>When Is A Diagonalizable?</h2>

      <Theorem title="Diagonalizability" className="my-6">
        <p><Math>A</Math> is diagonalizable if and only if it has <Math>n</Math> independent eigenvectors.</p>
        <p className="mt-2">This is <strong>guaranteed</strong> when:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>All <Math>n</Math> eigenvalues are <strong>distinct</strong></li>
          <li><Math>A</Math> is <strong>symmetric</strong> (always diagonalizable with orthogonal eigenvectors)</li>
        </ul>
      </Theorem>

      <div className="bg-dark-800/50 rounded-xl p-4 my-6 border border-amber-500/20">
        <p className="font-semibold text-amber-400 mb-2">Warning: Repeated Eigenvalues</p>
        <p className="text-dark-300 text-sm">
          A repeated eigenvalue <em>might</em> not have enough independent eigenvectors.
          Example: <Math>{`\\begin{bmatrix} 1 & 1 \\\\ 0 & 1 \\end{bmatrix}`}</Math> has <Math>\lambda = 1, 1</Math> but only one eigenvector.
        </p>
      </div>

      <h2>Similar Matrices</h2>

      <Definition title="Similar Matrices" className="my-6">
        <p>
          Matrices <Math>A</Math> and <Math>B</Math> are <strong>similar</strong> if <Math>{`B = M^{-1}AM`}</Math>
          for some invertible <Math>M</Math>.
        </p>
        <p className="mt-2 text-primary-400">
          Similar matrices have the <strong>same eigenvalues</strong>.
        </p>
      </Definition>

      <Theorem title="Properties of Similar Matrices" className="my-6">
        <p>If <Math>A</Math> and <Math>B</Math> are similar:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Same eigenvalues</li>
          <li>Same determinant</li>
          <li>Same trace</li>
          <li>Same rank</li>
        </ul>
      </Theorem>

      <h2>The Eigenvector Matrix X</h2>

      <div className="bg-dark-800/50 rounded-xl p-4 my-6 border border-primary-500/20">
        <p className="font-semibold text-primary-400 mb-2">The Equation <Math>AX = X\Lambda</Math></p>
        <p className="text-dark-300 text-sm">
          Put the eigenvectors in columns of <Math>X</Math>. Then:<br />
          <Math>A[x_1 \cdots x_n] = [\lambda_1 x_1 \cdots \lambda_n x_n] = [x_1 \cdots x_n]\Lambda</Math>
        </p>
        <p className="text-dark-300 text-sm mt-2">
          If <Math>X</Math> is invertible: <Math>{`A = X\\Lambda X^{-1}`}</Math> or <Math>{`\\Lambda = X^{-1}AX`}</Math>.
        </p>
      </div>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span><Math>{`A = X\\Lambda X^{-1}`}</Math> when <Math>X</Math> has <Math>n</Math> independent eigenvectors as columns.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span><Math>{`A^k = X\\Lambda^k X^{-1}`}</Math>. Powers of <Math>\Lambda</Math> are easy: just power the diagonal.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span><Math>A</Math> is diagonalizable if it has <Math>n</Math> independent eigenvectors.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>Distinct eigenvalues guarantee diagonalizability.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>Similar matrices (<Math>{`B = M^{-1}AM`}</Math>) have the same eigenvalues.</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
