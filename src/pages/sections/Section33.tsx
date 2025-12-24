import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Math, MathBlock } from '@/components/common/MathBlock';

export default function Section33() {
  return (
    <LessonLayout sectionId={33}>
      {/* Introduction */}
      <p>
        Every linear transformation between finite-dimensional spaces can be represented by a
        <strong> matrix</strong>. The key is choosing bases for both the input and output spaces.
      </p>

      <h2>The Matrix of a Linear Transformation</h2>

      <Theorem title="From Transformation to Matrix" className="my-6">
        <p>
          Let <Math>T: V \to W</Math> be linear. Choose bases <Math>{`\\mathbf{v}_1, \\ldots, \\mathbf{v}_n`}</Math> for <Math>V</Math>
          and <Math>{`\\mathbf{w}_1, \\ldots, \\mathbf{w}_m`}</Math> for <Math>W</Math>.
        </p>
        <p className="mt-2">
          The <strong>matrix of T</strong> has columns that are the coordinates of <Math>{`T(\\mathbf{v}_j)`}</Math>:
        </p>
        <MathBlock>
          {`T(\\mathbf{v}_j) = a_{1j}\\mathbf{w}_1 + a_{2j}\\mathbf{w}_2 + \\cdots + a_{mj}\\mathbf{w}_m`}
        </MathBlock>
        <MathBlock>
          {`A = \\begin{bmatrix} a_{11} & \\cdots & a_{1n} \\\\ \\vdots & \\ddots & \\vdots \\\\ a_{m1} & \\cdots & a_{mn} \\end{bmatrix}`}
        </MathBlock>
      </Theorem>

      <Example title="Differentiation Matrix" className="my-6">
        <p>
          For <Math>D: P_2 \to P_1</Math> with basis <Math>1, x, x^2</Math> for <Math>P_2</Math> and <Math>1, x</Math> for <Math>P_1</Math>:
        </p>
        <MathBlock>
          {`D(1) = 0, \\quad D(x) = 1, \\quad D(x^2) = 2x`}
        </MathBlock>
        <p className="mt-2">The matrix is:</p>
        <MathBlock>
          {`A = \\begin{bmatrix} 0 & 1 & 0 \\\\ 0 & 0 & 2 \\end{bmatrix}`}
        </MathBlock>
      </Example>

      <h2>Standard Matrix</h2>

      <Definition title="Standard Matrix" className="my-6">
        <p>
          For <Math>{`T: \\mathbb{R}^n \\to \\mathbb{R}^m`}</Math> with standard bases,
          column <Math>j</Math> of <Math>A</Math> is <Math>{`T(\\mathbf{e}_j)`}</Math>:
        </p>
        <MathBlock>
          {`A = \\begin{bmatrix} | & | & & | \\\\ T(\\mathbf{e}_1) & T(\\mathbf{e}_2) & \\cdots & T(\\mathbf{e}_n) \\\\ | & | & & | \\end{bmatrix}`}
        </MathBlock>
      </Definition>

      <Example title="Rotation Matrix" className="my-6">
        <p>
          Rotation by angle <Math>\theta</Math> in <Math>{`\\mathbb{R}^2`}</Math>:
        </p>
        <MathBlock>
          {`T(\\mathbf{e}_1) = \\begin{bmatrix} \\cos\\theta \\\\ \\sin\\theta \\end{bmatrix}, \\quad T(\\mathbf{e}_2) = \\begin{bmatrix} -\\sin\\theta \\\\ \\cos\\theta \\end{bmatrix}`}
        </MathBlock>
        <MathBlock>
          {`R_\\theta = \\begin{bmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{bmatrix}`}
        </MathBlock>
      </Example>

      <Example title="Projection Matrix" className="my-6">
        <p>
          Projection onto the <Math>x</Math>-axis in <Math>{`\\mathbb{R}^2`}</Math>:
        </p>
        <MathBlock>
          {`T(\\mathbf{e}_1) = \\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix}, \\quad T(\\mathbf{e}_2) = \\begin{bmatrix} 0 \\\\ 0 \\end{bmatrix}`}
        </MathBlock>
        <MathBlock>
          {`P = \\begin{bmatrix} 1 & 0 \\\\ 0 & 0 \\end{bmatrix}`}
        </MathBlock>
      </Example>

      <h2>Composition of Transformations</h2>

      <Theorem title="Matrix of a Composition" className="my-6">
        <p>
          If <Math>T_1: U \to V</Math> has matrix <Math>A</Math> and <Math>T_2: V \to W</Math> has matrix <Math>B</Math>,
          then the composition <Math>T_2 \circ T_1: U \to W</Math> has matrix:
        </p>
        <MathBlock>
          {`(T_2 \\circ T_1)(\\mathbf{x}) = T_2(T_1(\\mathbf{x})) \\quad \\Leftrightarrow \\quad BA`}
        </MathBlock>
        <p className="mt-2 text-primary-400">
          Composition of transformations = multiplication of matrices (in reverse order).
        </p>
      </Theorem>

      <h2>Invertible Transformations</h2>

      <Theorem title="Inverse Transformation" className="my-6">
        <p>
          <Math>T</Math> is <strong>invertible</strong> if there exists <Math>{`T^{-1}`}</Math> with:
        </p>
        <MathBlock>
          {`T^{-1}(T(\\mathbf{v})) = \\mathbf{v} \\quad \\text{and} \\quad T(T^{-1}(\\mathbf{w})) = \\mathbf{w}`}
        </MathBlock>
        <p className="mt-2">
          <Math>T</Math> is invertible if and only if its matrix is invertible.
        </p>
      </Theorem>

      <div className="bg-dark-800/50 rounded-xl p-4 my-6 border border-primary-500/20">
        <p className="font-semibold text-primary-400 mb-2">Important Special Matrices</p>
        <ul className="list-disc list-inside text-dark-300 text-sm space-y-1">
          <li><strong>Rotation:</strong> <Math>R_\theta</Math> — preserves lengths and angles</li>
          <li><strong>Reflection:</strong> <Math>{`H = I - 2\\mathbf{u}\\mathbf{u}^T`}</Math> — flips across a hyperplane</li>
          <li><strong>Projection:</strong> <Math>{`P = \\mathbf{a}\\mathbf{a}^T/\\mathbf{a}^T\\mathbf{a}`}</Math> — projects onto a line</li>
          <li><strong>Scaling:</strong> <Math>{`\\text{diag}(c_1, \\ldots, c_n)`}</Math> — stretches along axes</li>
        </ul>
      </div>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>The matrix of <Math>T</Math> depends on the choice of bases.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>Column <Math>j</Math> = coordinates of <Math>{`T(\\mathbf{v}_j)`}</Math> in the output basis.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>Standard matrix: columns are <Math>{`T(\\mathbf{e}_1), T(\\mathbf{e}_2), \\ldots, T(\\mathbf{e}_n)`}</Math>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>Composition <Math>T_2 \circ T_1</Math> corresponds to matrix product <Math>BA</Math>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>Invertible transformation ↔ invertible matrix.</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
