import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Math, MathBlock } from '@/components/common/MathBlock';

export default function Section13() {
  return (
    <LessonLayout sectionId={13}>
      {/* Introduction */}
      <p>
        Now we solve <Math>{`A\\mathbf{x} = \\mathbf{b}`}</Math> when <Math>{`\\mathbf{b} \\neq \\mathbf{0}`}</Math>. The complete
        solution combines one <strong>particular solution</strong> with the general <strong>nullspace solution</strong>.
      </p>

      <h2>The Structure of Solutions</h2>

      <Theorem title="Complete Solution" className="my-6">
        <p>
          The complete solution to <Math>{`A\\mathbf{x} = \\mathbf{b}`}</Math> is:
        </p>
        <MathBlock>
          {`\\mathbf{x} = \\mathbf{x}_p + \\mathbf{x}_n`}
        </MathBlock>
        <p className="mt-2">
          <Math>{`\\mathbf{x}_p`}</Math> = one <strong>particular solution</strong> (any solution to <Math>{`A\\mathbf{x} = \\mathbf{b}`}</Math>)<br />
          <Math>{`\\mathbf{x}_n`}</Math> = general solution to <Math>{`A\\mathbf{x} = \\mathbf{0}`}</Math> (the nullspace)
        </p>
      </Theorem>

      <p>
        Why does this work? If <Math>{`A\\mathbf{x}_p = \\mathbf{b}`}</Math> and <Math>{`A\\mathbf{x}_n = \\mathbf{0}`}</Math>, then
        <Math>{`A(\\mathbf{x}_p + \\mathbf{x}_n) = \\mathbf{b} + \\mathbf{0} = \\mathbf{b}`}</Math>.
      </p>

      <h2>The Augmented Matrix</h2>

      <Definition title="Augmented Matrix" className="my-6">
        <p>
          To solve <Math>{`A\\mathbf{x} = \\mathbf{b}`}</Math>, we augment <Math>A</Math> with <Math>{`\\mathbf{b}`}</Math>:
        </p>
        <MathBlock>
          {`[A \\mid \\mathbf{b}] = \\begin{bmatrix} 1 & 3 & 0 & 2 & 1 \\\\ 0 & 0 & 1 & 4 & 6 \\\\ 1 & 3 & 1 & 6 & 7 \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          Apply elimination to <Math>{`[A \\mid \\mathbf{b}]`}</Math> to reach <Math>{`[R \\mid \\mathbf{d}]`}</Math>.
        </p>
      </Definition>

      <h2>When Is <Math>{`A\\mathbf{x} = \\mathbf{b}`}</Math> Solvable?</h2>

      <Theorem title="Solvability Conditions" className="my-6">
        <p>
          <Math>{`A\\mathbf{x} = \\mathbf{b}`}</Math> is solvable if and only if:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><Math>{`\\mathbf{b}`}</Math> is in the column space <Math>C(A)</Math></li>
          <li>If a row of <Math>R</Math> is all zeros, the same row of <Math>{`\\mathbf{d}`}</Math> must be zero</li>
        </ul>
      </Theorem>

      <Example title="Checking Solvability" className="my-6">
        <MathBlock>
          {`[R \\mid \\mathbf{d}] = \\begin{bmatrix} 1 & 3 & 0 & 2 & 1 \\\\ 0 & 0 & 1 & 4 & 6 \\\\ 0 & 0 & 0 & 0 & 0 \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          Row 3 has all zeros in <Math>R</Math> and zero in <Math>{`\\mathbf{d}`}</Math>. The system <strong>is solvable</strong>.
        </p>
        <p className="mt-2 text-amber-400">
          If the last entry were nonzero (like <Math>0 = 5</Math>), the system would have <strong>no solution</strong>.
        </p>
      </Example>

      <h2>Finding the Particular Solution</h2>

      <Definition title="Particular Solution" className="my-6">
        <p>
          To find <Math>{`\\mathbf{x}_p`}</Math>: set all <strong>free variables to zero</strong> and solve for the pivot variables.
        </p>
      </Definition>

      <Example title="Finding x_p" className="my-6">
        <p>From the system above with free variables <Math>x_2, x_4</Math>:</p>
        <MathBlock>
          {`x_2 = 0, \\quad x_4 = 0`}
        </MathBlock>
        <p className="mt-2">Then from <Math>{`R\\mathbf{x} = \\mathbf{d}`}</Math>:</p>
        <MathBlock>
          {`x_1 + 3(0) + 2(0) = 1 \\Rightarrow x_1 = 1`}
        </MathBlock>
        <MathBlock>
          {`x_3 + 4(0) = 6 \\Rightarrow x_3 = 6`}
        </MathBlock>
        <p className="mt-2">
          Particular solution: <Math>{`\\mathbf{x}_p = (1, 0, 6, 0)`}</Math>
        </p>
      </Example>

      <h2>The Four Cases</h2>

      <div className="bg-dark-800/50 rounded-xl p-4 my-6 border border-primary-500/20">
        <p className="font-semibold text-primary-400 mb-3">Number of solutions to <Math>{`A\\mathbf{x} = \\mathbf{b}`}</Math>:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="bg-dark-900/50 p-3 rounded-lg">
            <p className="text-emerald-400 font-semibold"><Math>r = m = n</Math></p>
            <p className="text-dark-300">Square, full rank: <strong>1 solution</strong></p>
          </div>
          <div className="bg-dark-900/50 p-3 rounded-lg">
            <p className="text-amber-400 font-semibold"><Math>r = m &lt; n</Math></p>
            <p className="text-dark-300">Short, wide: <Math>\infty</Math> <strong>solutions</strong></p>
          </div>
          <div className="bg-dark-900/50 p-3 rounded-lg">
            <p className="text-cyan-400 font-semibold"><Math>r = n &lt; m</Math></p>
            <p className="text-dark-300">Tall, thin: <strong>0 or 1 solution</strong></p>
          </div>
          <div className="bg-dark-900/50 p-3 rounded-lg">
            <p className="text-rose-400 font-semibold"><Math>r &lt; m, r &lt; n</Math></p>
            <p className="text-dark-300">Not full rank: <strong>0 or </strong><Math>\infty</Math></p>
          </div>
        </div>
      </div>

      <Theorem title="The Rank and Solutions" className="my-6">
        <ul className="list-disc list-inside space-y-2">
          <li><Math>r = n</Math> means <strong>no free variables</strong>: at most 1 solution</li>
          <li><Math>r = m</Math> means <strong>every <Math>{`\\mathbf{b}`}</Math> is solvable</strong></li>
          <li><Math>r &lt; n</Math> means <strong>free variables exist</strong>: <Math>\infty</Math> solutions (if solvable)</li>
          <li><Math>r &lt; m</Math> means <strong>some <Math>{`\\mathbf{b}`}</Math> have no solution</strong></li>
        </ul>
      </Theorem>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>Complete solution: <Math>{`\\mathbf{x} = \\mathbf{x}_p + \\mathbf{x}_n`}</Math> (particular + nullspace).</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>Elimination on <Math>{`[A \\mid \\mathbf{b}]`}</Math> leads to <Math>{`[R \\mid \\mathbf{d}]`}</Math>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span><Math>{`A\\mathbf{x} = \\mathbf{b}`}</Math> is solvable when all zero rows of <Math>R</Math> have zeros in <Math>{`\\mathbf{d}`}</Math>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>For <Math>{`\\mathbf{x}_p`}</Math>: set free variables to zero, solve for pivot variables.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>The rank <Math>r</Math> determines existence (<Math>r = m</Math>) and uniqueness (<Math>r = n</Math>).</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
