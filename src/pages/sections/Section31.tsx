import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Math, MathBlock } from '@/components/common/MathBlock';

export default function Section31() {
  return (
    <LessonLayout sectionId={31}>
      {/* Introduction */}
      <p>
        The SVD has beautiful <strong>geometric meaning</strong>. Every matrix transformation can be
        decomposed into a rotation, a scaling along coordinate axes, and another rotation.
      </p>

      <h2>Geometric Interpretation</h2>

      <Theorem title="Three Steps of Multiplication by A" className="my-6">
        <p>
          The factorization <Math>A = U\Sigma V^T</Math> means:
        </p>
        <MathBlock>
          {`A\\mathbf{x} = U(\\Sigma(V^T\\mathbf{x}))`}
        </MathBlock>
        <ol className="list-decimal list-inside mt-2 space-y-2">
          <li><Math>V^T</Math>: Rotate/reflect to align with coordinate axes</li>
          <li><Math>\Sigma</Math>: Stretch by <Math>\sigma_i</Math> along each axis</li>
          <li><Math>U</Math>: Rotate/reflect to final position</li>
        </ol>
      </Theorem>

      <Example title="Unit Circle to Ellipse" className="my-6">
        <p>
          A 2×2 matrix <Math>A</Math> maps the unit circle to an ellipse:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>The ellipse has semi-axes of lengths <Math>\sigma_1</Math> and <Math>\sigma_2</Math></li>
          <li>The axes point in directions <Math>u_1</Math> and <Math>u_2</Math></li>
          <li>The preimages of these axes on the circle are <Math>v_1</Math> and <Math>v_2</Math></li>
        </ul>
        <p className="mt-2 text-primary-400">
          Singular values are the semi-axis lengths of the output ellipse!
        </p>
      </Example>

      <h2>Matrix Norms</h2>

      <Definition title="Spectral Norm" className="my-6">
        <p>
          The <strong>spectral norm</strong> (2-norm) of a matrix is:
        </p>
        <MathBlock>
          {`\\|A\\|_2 = \\sigma_1 = \\max_{\\mathbf{x} \\neq 0} \\frac{\\|A\\mathbf{x}\\|}{\\|\\mathbf{x}\\|}`}
        </MathBlock>
        <p className="mt-2">
          The largest singular value is the maximum "stretching factor" of <Math>A</Math>.
        </p>
      </Definition>

      <Definition title="Frobenius Norm" className="my-6">
        <p>
          The <strong>Frobenius norm</strong> is:
        </p>
        <MathBlock>
          {`\\|A\\|_F = \\sqrt{\\sum_{i,j} a_{ij}^2} = \\sqrt{\\sigma_1^2 + \\sigma_2^2 + \\cdots + \\sigma_r^2}`}
        </MathBlock>
        <p className="mt-2">
          Sum of squared entries equals sum of squared singular values.
        </p>
      </Definition>

      <h2>Condition Number</h2>

      <Definition title="Condition Number" className="my-6">
        <p>
          The <strong>condition number</strong> of an invertible matrix is:
        </p>
        <MathBlock>
          {`\\kappa(A) = \\frac{\\sigma_1}{\\sigma_r} = \\|A\\|_2 \\|A^{-1}\\|_2`}
        </MathBlock>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><Math>\kappa \approx 1</Math>: well-conditioned (nearly orthogonal)</li>
          <li><Math>\kappa \gg 1</Math>: ill-conditioned (nearly singular)</li>
        </ul>
      </Definition>

      <div className="bg-dark-800/50 rounded-xl p-4 my-6 border border-amber-500/20">
        <p className="font-semibold text-amber-400 mb-2">Numerical Sensitivity</p>
        <p className="text-dark-300 text-sm">
          If <Math>\kappa(A) = 10^6</Math>, solving <Math>Ax = b</Math> can lose about 6 digits
          of accuracy due to roundoff. Watch out for ill-conditioned systems!
        </p>
      </div>

      <h2>Pseudoinverse</h2>

      <Theorem title="The Moore-Penrose Pseudoinverse" className="my-6">
        <p>
          The <strong>pseudoinverse</strong> of <Math>A</Math> is:
        </p>
        <MathBlock>
          {`A^+ = V\\Sigma^+ U^T`}
        </MathBlock>
        <p className="mt-2">
          where <Math>\Sigma^+</Math> has <Math>1/\sigma_i</Math> on the diagonal (for nonzero <Math>\sigma_i</Math>).
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>If <Math>A</Math> is invertible: <Math>{`A^+ = A^{-1}`}</Math></li>
          <li>For any <Math>A</Math>: <Math>A^+b</Math> is the least-squares solution to <Math>Ax = b</Math></li>
        </ul>
      </Theorem>

      <Example title="Pseudoinverse of a Rank-1 Matrix" className="my-6">
        <MathBlock>
          {`A = \\begin{bmatrix} 1 & 2 \\\\ 2 & 4 \\end{bmatrix} = \\sigma_1 u_1 v_1^T`}
        </MathBlock>
        <p className="mt-2">
          With <Math>\sigma_1 = 5</Math>:
        </p>
        <MathBlock>
          {`A^+ = \\frac{1}{\\sigma_1} v_1 u_1^T = \\frac{1}{25}\\begin{bmatrix} 1 & 2 \\\\ 2 & 4 \\end{bmatrix}`}
        </MathBlock>
      </Example>

      <h2>Polar Decomposition</h2>

      <Theorem title="Polar Decomposition" className="my-6">
        <p>
          Any matrix can be written as:
        </p>
        <MathBlock>
          {`A = QS = (UV^T)(V\\Sigma V^T)`}
        </MathBlock>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><Math>Q = UV^T</Math> is orthogonal (rotation/reflection)</li>
          <li><Math>S = V\Sigma V^T</Math> is symmetric positive semidefinite (stretching)</li>
        </ul>
        <p className="mt-2">
          Like polar form for complex numbers: <Math>{`z = re^{i\\\\theta} = (\\text{rotation})(\\text{scaling})`}</Math>.
        </p>
      </Theorem>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span><Math>A = U\Sigma V^T</Math>: rotate, stretch along axes, rotate again.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>Singular values are semi-axis lengths of the image ellipse.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span><Math>\|A\|_2 = \sigma_1</Math>; <Math>{`\\|A\\|_F = \\sqrt{\\\\sum \\sigma_i^2}`}</Math>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>Condition number <Math>\kappa = \sigma_1/\sigma_r</Math> measures sensitivity to errors.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>Pseudoinverse: <Math>A^+ = V\Sigma^+ U^T</Math> solves least-squares problems.</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
