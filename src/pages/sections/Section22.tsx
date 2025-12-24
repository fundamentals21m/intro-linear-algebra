import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Math, MathBlock } from '@/components/common/MathBlock';

export default function Section22() {
  return (
    <LessonLayout sectionId={22}>
      {/* Introduction */}
      <p>
        Determinants have beautiful applications: <strong>Cramer's Rule</strong> for solving equations,
        a formula for <strong>the inverse</strong>, and the connection to <strong>volumes</strong>.
      </p>

      <h2>Cramer's Rule</h2>

      <Theorem title="Cramer's Rule" className="my-6">
        <p>
          If <Math>\det A \neq 0</Math>, the solution to <Math>{`A\\mathbf{x} = \\mathbf{b}`}</Math> is:
        </p>
        <MathBlock>
          {`x_j = \\frac{\\det B_j}{\\det A}`}
        </MathBlock>
        <p className="mt-2">
          where <Math>B_j</Math> is the matrix <Math>A</Math> with column <Math>j</Math> replaced by <Math>{`\\mathbf{b}`}</Math>.
        </p>
      </Theorem>

      <Example title="Cramer's Rule for 2×2" className="my-6">
        <p>Solve <Math>ax + by = e</Math> and <Math>cx + dy = f</Math>:</p>
        <MathBlock>
          {`x = \\frac{\\begin{vmatrix} e & b \\\\ f & d \\end{vmatrix}}{\\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix}} = \\frac{ed - bf}{ad - bc}`}
        </MathBlock>
        <MathBlock>
          {`y = \\frac{\\begin{vmatrix} a & e \\\\ c & f \\end{vmatrix}}{\\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix}} = \\frac{af - ce}{ad - bc}`}
        </MathBlock>
      </Example>

      <div className="bg-dark-800/50 rounded-xl p-4 my-6 border border-amber-500/20">
        <p className="font-semibold text-amber-400 mb-2">Practical Note</p>
        <p className="text-dark-300">
          Cramer's Rule is elegant but <strong>slow</strong> for large systems. Elimination is much faster!
          But Cramer's Rule is useful for theoretical derivations.
        </p>
      </div>

      <h2>Formula for the Inverse</h2>

      <Theorem title="Inverse Using Cofactors" className="my-6">
        <p>
          The inverse of <Math>A</Math> is:
        </p>
        <MathBlock>
          {`A^{-1} = \\frac{1}{\\det A} C^T`}
        </MathBlock>
        <p className="mt-2">
          where <Math>C</Math> is the <strong>cofactor matrix</strong> (with entries <Math>{`C_{ij}`}</Math>),
          and <Math>C^T</Math> is called the <strong>adjugate</strong> (or classical adjoint).
        </p>
      </Theorem>

      <Example title="2×2 Inverse Formula" className="my-6">
        <MathBlock>
          {`A = \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix} \\quad \\Rightarrow \\quad A^{-1} = \\frac{1}{ad-bc}\\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          The cofactor matrix is <Math>{`\\begin{bmatrix} d & -c \\\\ -b & a \\end{bmatrix}`}</Math>.
          Transposing gives the formula above.
        </p>
      </Example>

      <h2>Determinants and Volume</h2>

      <Theorem title="Volume as Determinant" className="my-6">
        <p>
          If the rows (or columns) of <Math>A</Math> are the edges of a box in <Math>{`\\mathbf{R}^n`}</Math>:
        </p>
        <MathBlock>
          {`\\text{Volume of box} = |\\det A|`}
        </MathBlock>
        <p className="mt-2">
          The sign of <Math>\det A</Math> indicates orientation (positive = same as standard basis).
        </p>
      </Theorem>

      <Example title="Area in 2D" className="my-6">
        <p>The parallelogram with edges <Math>(a, c)</Math> and <Math>(b, d)</Math>:</p>
        <MathBlock>
          {`\\text{Area} = \\left| \\det \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix} \\right| = |ad - bc|`}
        </MathBlock>
      </Example>

      <Example title="Volume in 3D" className="my-6">
        <p>The box (parallelepiped) with edges <Math>{`\\mathbf{u}, \\mathbf{v}, \\mathbf{w}`}</Math>:</p>
        <MathBlock>
          {`\\text{Volume} = |\\det [\\mathbf{u} \\; \\mathbf{v} \\; \\mathbf{w}]| = |\\mathbf{u} \\cdot (\\mathbf{v} \\times \\mathbf{w})|`}
        </MathBlock>
        <p className="mt-2">
          The determinant equals the <strong>triple product</strong> <Math>{`\\mathbf{u} \\cdot (\\mathbf{v} \\times \\mathbf{w})`}</Math>.
        </p>
      </Example>

      <h2>The Cross Product</h2>

      <Definition title="Cross Product as Determinant" className="my-6">
        <p>
          For vectors in <Math>{`\\mathbf{R}^3`}</Math>, the cross product is:
        </p>
        <MathBlock>
          {`\\mathbf{u} \\times \\mathbf{v} = \\det \\begin{bmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ u_1 & u_2 & u_3 \\\\ v_1 & v_2 & v_3 \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          The result is perpendicular to both <Math>{`\\mathbf{u}`}</Math> and <Math>{`\\mathbf{v}`}</Math>,
          with length = area of parallelogram.
        </p>
      </Definition>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>Cramer's Rule: <Math>x_j = \det B_j / \det A</Math> where <Math>B_j</Math> has <Math>{`\\mathbf{b}`}</Math> in column <Math>j</Math>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span><Math>{`A^{-1} = C^T / \\det A`}</Math> where <Math>C</Math> is the cofactor matrix.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span><Math>|\det A|</Math> = volume of the box with rows (or columns) of <Math>A</Math> as edges.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>In 2D: area = <Math>|ad - bc|</Math>. In 3D: volume = <Math>{`|\\mathbf{u} \\cdot (\\mathbf{v} \\times \\mathbf{w})|`}</Math>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>The cross product can be computed as a <Math>3 \times 3</Math> determinant.</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
