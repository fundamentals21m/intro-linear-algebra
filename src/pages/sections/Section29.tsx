import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Math, MathBlock } from '@/components/common/MathBlock';

export default function Section29() {
  return (
    <LessonLayout sectionId={29}>
      {/* Introduction */}
      <p>
        The <strong>Singular Value Decomposition</strong> provides the perfect bases for both the
        domain and range of a matrix. It reveals the fundamental structure of any linear transformation.
      </p>

      <h2>The SVD Factorization</h2>

      <Theorem title="The Singular Value Decomposition" className="my-6">
        <p>
          Every <Math>m \times n</Math> matrix <Math>A</Math> of rank <Math>r</Math> has the factorization:
        </p>
        <MathBlock>
          {`A = U\\Sigma V^T`}
        </MathBlock>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li><Math>U</Math> is <Math>m \times m</Math> orthogonal: columns are <strong>left singular vectors</strong></li>
          <li><Math>V</Math> is <Math>n \times n</Math> orthogonal: columns are <strong>right singular vectors</strong></li>
          <li><Math>\Sigma</Math> is <Math>m \times n</Math> diagonal with <strong>singular values</strong> <Math>{`\\sigma_1 \\geq \\sigma_2 \\geq \\cdots \\geq \\sigma_r > 0`}</Math></li>
        </ul>
      </Theorem>

      <h2>The Reduced SVD</h2>

      <Definition title="Reduced SVD" className="my-6">
        <p>
          The <strong>reduced (thin) SVD</strong> uses only the nonzero singular values:
        </p>
        <MathBlock>
          {`A = U_r \\Sigma_r V_r^T`}
        </MathBlock>
        <p className="mt-2">where:</p>
        <ul className="list-disc list-inside space-y-1">
          <li><Math>U_r</Math> is <Math>m \times r</Math> (first <Math>r</Math> columns of <Math>U</Math>)</li>
          <li><Math>\Sigma_r</Math> is <Math>r \times r</Math> diagonal</li>
          <li><Math>V_r</Math> is <Math>n \times r</Math> (first <Math>r</Math> columns of <Math>V</Math>)</li>
        </ul>
      </Definition>

      <Example title="SVD of a Rank-2 Matrix" className="my-6">
        <MathBlock>
          {`A = \\begin{bmatrix} 1 & 1 \\\\ 1 & 1 \\\\ 0 & 0 \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          Rank 1, so only one nonzero singular value: <Math>\sigma_1 = 2</Math>
        </p>
        <MathBlock>
          {`A = \\begin{bmatrix} 1/\\sqrt{2} \\\\ 1/\\sqrt{2} \\\\ 0 \\end{bmatrix} [2] \\begin{bmatrix} 1/\\sqrt{2} & 1/\\sqrt{2} \\end{bmatrix}`}
        </MathBlock>
      </Example>

      <h2>Relationship to Eigenvalues</h2>

      <Theorem title="SVD and Eigenvalues" className="my-6">
        <p>The SVD is connected to eigenvalue problems:</p>
        <MathBlock>
          {`A^TA = V\\Sigma^T\\Sigma V^T \\quad \\text{(eigenvalues } \\sigma_i^2\\text{)}`}
        </MathBlock>
        <MathBlock>
          {`AA^T = U\\Sigma\\Sigma^T U^T \\quad \\text{(eigenvalues } \\sigma_i^2\\text{)}`}
        </MathBlock>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Columns of <Math>V</Math> are eigenvectors of <Math>A^TA</Math></li>
          <li>Columns of <Math>U</Math> are eigenvectors of <Math>AA^T</Math></li>
          <li>Singular values are square roots of these eigenvalues</li>
        </ul>
      </Theorem>

      <h2>The Four Fundamental Subspaces</h2>

      <Theorem title="SVD and Subspaces" className="my-6">
        <p>The SVD reveals the four fundamental subspaces:</p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Column space</strong> <Math>C(A)</Math>: first <Math>r</Math> columns of <Math>U</Math></li>
          <li><strong>Row space</strong> <Math>C(A^T)</Math>: first <Math>r</Math> columns of <Math>V</Math></li>
          <li><strong>Nullspace</strong> <Math>N(A)</Math>: last <Math>n-r</Math> columns of <Math>V</Math></li>
          <li><strong>Left nullspace</strong> <Math>N(A^T)</Math>: last <Math>m-r</Math> columns of <Math>U</Math></li>
        </ul>
      </Theorem>

      <div className="bg-dark-800/50 rounded-xl p-4 my-6 border border-primary-500/20">
        <p className="font-semibold text-primary-400 mb-2">The Power of the SVD</p>
        <p className="text-dark-300 text-sm">
          The SVD chooses orthonormal bases for all four subspaces simultaneously.
          This is the "right" way to understand any matrix: <Math>A</Math> maps the
          row space basis <Math>v_i</Math> to the column space basis <Math>\sigma_i u_i</Math>.
        </p>
      </div>

      <h2>The Matrix as a Linear Map</h2>

      <Theorem title="What A Does" className="my-6">
        <p>The SVD shows exactly what <Math>A</Math> does:</p>
        <MathBlock>
          {`Av_i = \\sigma_i u_i \\quad \\text{for } i = 1, \\ldots, r`}
        </MathBlock>
        <MathBlock>
          {`Av_i = 0 \\quad \\text{for } i = r+1, \\ldots, n`}
        </MathBlock>
        <p className="mt-2">
          <Math>A</Math> stretches <Math>v_i</Math> by <Math>\sigma_i</Math> and rotates it to <Math>u_i</Math>.
        </p>
      </Theorem>

      <Example title="Geometric Interpretation" className="my-6">
        <p>
          A 2×2 matrix maps the unit circle to an ellipse:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>The semi-axes of the ellipse have lengths <Math>\sigma_1</Math> and <Math>\sigma_2</Math></li>
          <li>The directions are given by <Math>u_1</Math> and <Math>u_2</Math></li>
          <li>The preimages of the axes are <Math>v_1</Math> and <Math>v_2</Math></li>
        </ul>
      </Example>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span><Math>A = U\Sigma V^T</Math>: orthogonal × diagonal × orthogonal.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>Singular values <Math>{`\\sigma_i = \\sqrt{\\lambda_i}`}</Math> from eigenvalues of <Math>A^TA</Math>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span><Math>V</Math> gives orthonormal bases for row space and nullspace.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span><Math>U</Math> gives orthonormal bases for column space and left nullspace.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span><Math>Av_i = \sigma_i u_i</Math> shows how <Math>A</Math> maps basis to basis.</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
