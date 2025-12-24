import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Math, MathBlock } from '@/components/common/MathBlock';

export default function Section10() {
  return (
    <LessonLayout sectionId={10}>
      {/* Introduction */}
      <p>
        The <strong>transpose</strong> of a matrix flips it across its main diagonal. <strong>Permutations</strong> exchange
        rows—and they become essential when elimination needs row exchanges.
      </p>

      <h2>The Transpose <Math>A^T</Math></h2>

      <Definition title="Transpose" className="my-6">
        <p>
          The <strong>transpose</strong> <Math>A^T</Math> is obtained by exchanging rows and columns:
        </p>
        <MathBlock>
          {`(A^T)_{ij} = A_{ji}`}
        </MathBlock>
        <p className="mt-2">
          Row <Math>i</Math> of <Math>A^T</Math> = Column <Math>i</Math> of <Math>A</Math>.
        </p>
      </Definition>

      <Example title="Computing a Transpose" className="my-6">
        <MathBlock>
          {`A = \\begin{bmatrix} 1 & 2 & 3 \\\\ 0 & 0 & 4 \\end{bmatrix} \\quad \\Rightarrow \\quad A^T = \\begin{bmatrix} 1 & 0 \\\\ 2 & 0 \\\\ 3 & 4 \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          <Math>A</Math> is <Math>2 \times 3</Math>, so <Math>A^T</Math> is <Math>3 \times 2</Math>.
        </p>
      </Example>

      <h2>Properties of Transpose</h2>

      <Theorem title="Transpose Rules" className="my-6">
        <ul className="list-disc list-inside space-y-2">
          <li><Math>(A + B)^T = A^T + B^T</Math></li>
          <li><Math>(AB)^T = B^T A^T</Math> — the order reverses!</li>
          <li><Math>(A^T)^T = A</Math></li>
          <li><Math>{`(A^{-1})^T = (A^T)^{-1}`}</Math></li>
        </ul>
      </Theorem>

      <h2>Symmetric Matrices</h2>

      <Definition title="Symmetric Matrix" className="my-6">
        <p>
          A matrix <Math>S</Math> is <strong>symmetric</strong> if <Math>S^T = S</Math>.
        </p>
        <MathBlock>
          {`S = \\begin{bmatrix} 1 & 2 & 7 \\\\ 2 & 0 & 3 \\\\ 7 & 3 & 5 \\end{bmatrix} \\quad S^T = S`}
        </MathBlock>
        <p className="mt-2">
          A symmetric matrix equals its transpose. It is symmetric about the main diagonal.
        </p>
      </Definition>

      <Theorem title="Creating Symmetric Matrices" className="my-6">
        <p>
          For any matrix <Math>A</Math> (not necessarily square):
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><Math>A^TA</Math> is always symmetric (and square)</li>
          <li><Math>AA^T</Math> is always symmetric (and square)</li>
        </ul>
      </Theorem>

      <h2>Permutation Matrices</h2>

      <Definition title="Permutation Matrix" className="my-6">
        <p>
          A <strong>permutation matrix</strong> <Math>P</Math> has exactly one 1 in each row and column, with zeros elsewhere.
          It reorders the rows of a matrix.
        </p>
        <MathBlock>
          {`P = \\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix} \\quad \\text{exchanges rows 1 and 2}`}
        </MathBlock>
      </Definition>

      <Example title="Row Exchange with Permutation" className="my-6">
        <MathBlock>
          {`PA = \\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix} = \\begin{bmatrix} c & d \\\\ a & b \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          Multiplying on the <em>left</em> by <Math>P</Math> exchanges rows.
        </p>
      </Example>

      <h2>Properties of Permutations</h2>

      <Theorem title="Permutation Properties" className="my-6">
        <ul className="list-disc list-inside space-y-2">
          <li><Math>{`P^{-1} = P^T`}</Math> for any permutation matrix</li>
          <li><Math>P^TP = I</Math> (permutations are <strong>orthogonal</strong>)</li>
          <li>There are <Math>n!</Math> permutation matrices of size <Math>n \times n</Math></li>
        </ul>
      </Theorem>

      <h2><Math>PA = LU</Math> with Row Exchanges</h2>

      <p>
        When elimination needs row exchanges, we factor <Math>PA = LU</Math> instead of <Math>A = LU</Math>.
        The permutation <Math>P</Math> records all the row exchanges.
      </p>

      <Example title="Factorization with Permutation" className="my-6">
        <p>If <Math>A</Math> requires a row exchange:</p>
        <MathBlock>
          {`PA = LU \\quad \\text{where } P \\text{ is the permutation matrix}`}
        </MathBlock>
        <p className="mt-2">
          MATLAB's <code>lu(A)</code> returns <Math>L, U, P</Math> satisfying <Math>PA = LU</Math>.
        </p>
      </Example>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>The transpose <Math>A^T</Math> exchanges rows and columns: <Math>{`(A^T)_{ij} = A_{ji}`}</Math>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>The transpose of a product reverses order: <Math>(AB)^T = B^TA^T</Math>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>A symmetric matrix has <Math>S^T = S</Math>. Products <Math>A^TA</Math> and <Math>AA^T</Math> are always symmetric.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>A permutation matrix <Math>P</Math> has one 1 in each row/column. <Math>{`P^{-1} = P^T`}</Math>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>With row exchanges: <Math>PA = LU</Math> (the permutation records the exchanges).</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
