import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Math, MathBlock } from '@/components/common/MathBlock';

export default function Section32() {
  return (
    <LessonLayout sectionId={32}>
      {/* Introduction */}
      <p>
        A <strong>linear transformation</strong> is a function between vector spaces that respects
        addition and scalar multiplication. Every matrix defines a linear transformation, and
        every linear transformation can be represented by a matrix.
      </p>

      <h2>Definition</h2>

      <Definition title="Linear Transformation" className="my-6">
        <p>
          A function <Math>T: V \to W</Math> is a <strong>linear transformation</strong> if:
        </p>
        <MathBlock>
          {`T(\\mathbf{v} + \\mathbf{w}) = T(\\mathbf{v}) + T(\\mathbf{w})`}
        </MathBlock>
        <MathBlock>
          {`T(c\\mathbf{v}) = cT(\\mathbf{v})`}
        </MathBlock>
        <p className="mt-2">
          for all vectors <Math>{`\\mathbf{v}, \\mathbf{w}`}</Math> in <Math>V</Math> and scalars <Math>c</Math>.
        </p>
      </Definition>

      <Theorem title="Combined Linearity Property" className="my-6">
        <p>
          Both conditions combine into a single test:
        </p>
        <MathBlock>
          {`T(c\\mathbf{v} + d\\mathbf{w}) = cT(\\mathbf{v}) + dT(\\mathbf{w})`}
        </MathBlock>
        <p className="mt-2 text-primary-400">
          Linear transformations preserve linear combinations.
        </p>
      </Theorem>

      <h2>Examples of Linear Transformations</h2>

      <Example title="Matrix Multiplication" className="my-6">
        <p>
          For any <Math>m \times n</Math> matrix <Math>A</Math>, the function
          <Math>{`T(\\mathbf{x}) = A\\mathbf{x}`}</Math> is linear:
        </p>
        <MathBlock>
          {`T(c\\mathbf{x} + d\\mathbf{y}) = A(c\\mathbf{x} + d\\mathbf{y}) = cA\\mathbf{x} + dA\\mathbf{y} = cT(\\mathbf{x}) + dT(\\mathbf{y})`}
        </MathBlock>
      </Example>

      <Example title="Differentiation" className="my-6">
        <p>
          The derivative operator <Math>{`D: P_n \\to P_{n-1}`}</Math> is linear:
        </p>
        <MathBlock>
          {`D(p + q) = D(p) + D(q) \\quad \\text{and} \\quad D(cp) = cD(p)`}
        </MathBlock>
        <p className="mt-2">
          This maps polynomials of degree <Math>\leq n</Math> to polynomials of degree <Math>\leq n-1</Math>.
        </p>
      </Example>

      <Example title="Integration" className="my-6">
        <p>
          The integral operator is also linear:
        </p>
        <MathBlock>
          {`\\int_a^b (f + g)\\,dx = \\int_a^b f\\,dx + \\int_a^b g\\,dx`}
        </MathBlock>
      </Example>

      <h2>Nonlinear Functions</h2>

      <div className="bg-dark-800/50 rounded-xl p-4 my-6 border border-amber-500/20">
        <p className="font-semibold text-amber-400 mb-2">Nonlinear Examples</p>
        <ul className="list-disc list-inside text-dark-300 text-sm space-y-1">
          <li><Math>{`T(\\mathbf{x}) = \\mathbf{x} + \\mathbf{b}`}</Math> (translation) — not linear unless <Math>{`\\mathbf{b} = \\mathbf{0}`}</Math></li>
          <li><Math>T(x) = x^2</Math> — fails since <Math>(x+y)^2 \neq x^2 + y^2</Math></li>
          <li><Math>{`T(\\mathbf{x}) = \\|\\mathbf{x}\\|`}</Math> (norm) — fails since <Math>{`\\|(-1)\\mathbf{x}\\| \\neq -\\|\\mathbf{x}\\|`}</Math></li>
        </ul>
      </div>

      <h2>Properties of Linear Transformations</h2>

      <Theorem title="Zero and Linear Combinations" className="my-6">
        <p>For any linear transformation <Math>T</Math>:</p>
        <ul className="list-disc list-inside space-y-2">
          <li><Math>{`T(\\mathbf{0}) = \\mathbf{0}`}</Math></li>
          <li><Math>{`T(c_1\\mathbf{v}_1 + \\cdots + c_n\\mathbf{v}_n) = c_1T(\\mathbf{v}_1) + \\cdots + c_nT(\\mathbf{v}_n)`}</Math></li>
        </ul>
      </Theorem>

      <h2>Range and Kernel</h2>

      <Definition title="Range (Image)" className="my-6">
        <p>
          The <strong>range</strong> of <Math>T</Math> is all possible outputs:
        </p>
        <MathBlock>
          {`\\text{range}(T) = \\{T(\\mathbf{v}) : \\mathbf{v} \\in V\\}`}
        </MathBlock>
        <p className="mt-2">
          For <Math>{`T(\\mathbf{x}) = A\\mathbf{x}`}</Math>, the range is the <strong>column space</strong> of <Math>A</Math>.
        </p>
      </Definition>

      <Definition title="Kernel (Nullspace)" className="my-6">
        <p>
          The <strong>kernel</strong> of <Math>T</Math> is all vectors mapped to zero:
        </p>
        <MathBlock>
          {`\\ker(T) = \\{\\mathbf{v} : T(\\mathbf{v}) = \\mathbf{0}\\}`}
        </MathBlock>
        <p className="mt-2">
          For <Math>{`T(\\mathbf{x}) = A\\mathbf{x}`}</Math>, the kernel is the <strong>nullspace</strong> of <Math>A</Math>.
        </p>
      </Definition>

      <Theorem title="Rank-Nullity Theorem" className="my-6">
        <p>For <Math>T: V \to W</Math> with <Math>V</Math> finite-dimensional:</p>
        <MathBlock>
          {`\\dim(\\ker T) + \\dim(\\text{range } T) = \\dim V`}
        </MathBlock>
      </Theorem>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>Linear transformations preserve addition and scalar multiplication.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>Every matrix multiplication <Math>{`T(\\mathbf{x}) = A\\mathbf{x}`}</Math> is linear.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>Differentiation and integration are linear transformations.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>Kernel = nullspace; Range = column space.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>dim(kernel) + dim(range) = dim(domain).</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
