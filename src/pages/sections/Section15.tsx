import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Math, MathBlock } from '@/components/common/MathBlock';

export default function Section15() {
  return (
    <LessonLayout sectionId={15}>
      {/* Introduction */}
      <p>
        Every matrix <Math>A</Math> has <strong>four fundamental subspaces</strong>. Understanding their dimensions
        and relationships is the heart of linear algebra.
      </p>

      <h2>The Four Subspaces</h2>

      <Definition title="The Four Fundamental Subspaces" className="my-6">
        <p>For an <Math>m \times n</Math> matrix <Math>A</Math> with rank <Math>r</Math>:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-dark-900/50 p-4 rounded-lg border border-primary-500/30">
            <p className="text-primary-400 font-semibold">Column Space <Math>C(A)</Math></p>
            <p className="text-sm text-dark-300">All <Math>{`A\\mathbf{x}`}</Math></p>
            <p className="text-sm text-dark-400">In <Math>{`\\mathbf{R}^m`}</Math>, dimension <Math>r</Math></p>
          </div>
          <div className="bg-dark-900/50 p-4 rounded-lg border border-amber-500/30">
            <p className="text-amber-400 font-semibold">Row Space <Math>C(A^T)</Math></p>
            <p className="text-sm text-dark-300">All <Math>{`A^T\\mathbf{y}`}</Math></p>
            <p className="text-sm text-dark-400">In <Math>{`\\mathbf{R}^n`}</Math>, dimension <Math>r</Math></p>
          </div>
          <div className="bg-dark-900/50 p-4 rounded-lg border border-emerald-500/30">
            <p className="text-emerald-400 font-semibold">Nullspace <Math>N(A)</Math></p>
            <p className="text-sm text-dark-300">All <Math>{`\\mathbf{x}`}</Math> with <Math>{`A\\mathbf{x} = \\mathbf{0}`}</Math></p>
            <p className="text-sm text-dark-400">In <Math>{`\\mathbf{R}^n`}</Math>, dimension <Math>n - r</Math></p>
          </div>
          <div className="bg-dark-900/50 p-4 rounded-lg border border-cyan-500/30">
            <p className="text-cyan-400 font-semibold">Left Nullspace <Math>N(A^T)</Math></p>
            <p className="text-sm text-dark-300">All <Math>{`\\mathbf{y}`}</Math> with <Math>{`A^T\\mathbf{y} = \\mathbf{0}`}</Math></p>
            <p className="text-sm text-dark-400">In <Math>{`\\mathbf{R}^m`}</Math>, dimension <Math>m - r</Math></p>
          </div>
        </div>
      </Definition>

      <h2>The Big Picture</h2>

      <div className="bg-gradient-to-r from-primary-500/10 via-dark-800/50 to-amber-500/10 rounded-xl p-6 my-6 border border-primary-500/20">
        <p className="text-center text-lg font-semibold mb-4">The Fundamental Theorem of Linear Algebra</p>
        <div className="flex flex-col md:flex-row justify-around items-center gap-4">
          <div className="text-center">
            <p className="text-primary-400 font-semibold"><Math>{`\\mathbf{R}^n`}</Math></p>
            <p className="text-sm">Row space: dim <Math>r</Math></p>
            <p className="text-sm">Nullspace: dim <Math>n - r</Math></p>
          </div>
          <div className="text-2xl">→</div>
          <div className="text-center">
            <p className="text-amber-400 font-semibold"><Math>{`\\mathbf{R}^m`}</Math></p>
            <p className="text-sm">Column space: dim <Math>r</Math></p>
            <p className="text-sm">Left nullspace: dim <Math>m - r</Math></p>
          </div>
        </div>
      </div>

      <Theorem title="Dimension Formulas" className="my-6">
        <ul className="list-disc list-inside space-y-2">
          <li><Math>\dim C(A) = \dim C(A^T) = r</Math> (the rank)</li>
          <li><Math>\dim N(A) = n - r</Math></li>
          <li><Math>\dim N(A^T) = m - r</Math></li>
          <li><Math>r + (n - r) = n</Math> and <Math>r + (m - r) = m</Math></li>
        </ul>
      </Theorem>

      <h2>Finding Bases for the Four Subspaces</h2>

      <Example title="Complete Example" className="my-6">
        <MathBlock>
          {`A = \\begin{bmatrix} 1 & 3 & 5 & 0 & 7 \\\\ 0 & 0 & 0 & 1 & 2 \\\\ 1 & 3 & 5 & 1 & 9 \\end{bmatrix} \\rightarrow R = \\begin{bmatrix} 1 & 3 & 5 & 0 & 7 \\\\ 0 & 0 & 0 & 1 & 2 \\\\ 0 & 0 & 0 & 0 & 0 \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          Rank <Math>r = 2</Math>. Size is <Math>3 \times 5</Math> (<Math>m = 3</Math>, <Math>n = 5</Math>).
        </p>
      </Example>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-primary-500/20">
          <p className="font-semibold text-primary-400 mb-2">1. Column Space <Math>C(A)</Math></p>
          <p className="text-dark-300 text-sm">
            Basis: pivot columns of <Math>A</Math> (columns 1 and 4)<br />
            Dimension: <Math>r = 2</Math>
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-amber-500/20">
          <p className="font-semibold text-amber-400 mb-2">2. Row Space <Math>C(A^T)</Math></p>
          <p className="text-dark-300 text-sm">
            Basis: nonzero rows of <Math>R</Math><br />
            Dimension: <Math>r = 2</Math>
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-emerald-500/20">
          <p className="font-semibold text-emerald-400 mb-2">3. Nullspace <Math>N(A)</Math></p>
          <p className="text-dark-300 text-sm">
            Basis: special solutions from free variables (columns 2, 3, 5)<br />
            Dimension: <Math>n - r = 5 - 2 = 3</Math>
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-cyan-500/20">
          <p className="font-semibold text-cyan-400 mb-2">4. Left Nullspace <Math>N(A^T)</Math></p>
          <p className="text-dark-300 text-sm">
            Basis: from row operations that produce zero rows<br />
            Dimension: <Math>m - r = 3 - 2 = 1</Math>
          </p>
        </div>
      </div>

      <Theorem title="The Rank Theorem" className="my-6">
        <p>
          <strong>Column rank = Row rank</strong>. The number of independent columns equals the number
          of independent rows.
        </p>
        <MathBlock>
          {`\\dim C(A) = \\dim C(A^T) = r`}
        </MathBlock>
      </Theorem>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>The four subspaces of <Math>A</Math>: <Math>C(A)</Math>, <Math>N(A)</Math>, <Math>C(A^T)</Math>, <Math>N(A^T)</Math>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span><Math>C(A)</Math> and <Math>C(A^T)</Math> both have dimension <Math>r</Math> (column rank = row rank).</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span><Math>N(A)</Math> has dimension <Math>n - r</Math>; <Math>N(A^T)</Math> has dimension <Math>m - r</Math>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>Basis for <Math>C(A)</Math>: pivot columns of <Math>A</Math>. Basis for <Math>C(A^T)</Math>: nonzero rows of <Math>R</Math>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>The dimensions always satisfy <Math>r + (n-r) = n</Math> and <Math>r + (m-r) = m</Math>.</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
