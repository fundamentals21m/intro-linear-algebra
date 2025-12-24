import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Math, MathBlock } from '@/components/common/MathBlock';

export default function Section34() {
  return (
    <LessonLayout sectionId={34}>
      {/* Introduction */}
      <p>
        Different bases give different matrices for the same linear transformation. The
        <strong> change of basis</strong> reveals how these matrices are related—they are <em>similar</em>.
      </p>

      <h2>Change of Basis</h2>

      <Definition title="Change of Basis Matrix" className="my-6">
        <p>
          If <Math>V</Math> has two bases <Math>{`\\mathcal{B} = \\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_n\\}`}</Math> and
          <Math>{`\\mathcal{C} = \\{\\mathbf{w}_1, \\ldots, \\mathbf{w}_n\\}`}</Math>, the <strong>change of basis matrix</strong>
          <Math>P</Math> converts coordinates:
        </p>
        <MathBlock>
          {`[\\mathbf{x}]_\\mathcal{C} = P^{-1}[\\mathbf{x}]_\\mathcal{B}`}
        </MathBlock>
        <p className="mt-2">
          Column <Math>j</Math> of <Math>P</Math> contains the coordinates of <Math>{`\\mathbf{v}_j`}</Math> in basis <Math>{`\\mathcal{C}`}</Math>.
        </p>
      </Definition>

      <Example title="Changing to a New Basis" className="my-6">
        <p>
          Old basis: <Math>{`\\mathbf{v}_1 = (1, 0)`}</Math>, <Math>{`\\mathbf{v}_2 = (0, 1)`}</Math> (standard)<br />
          New basis: <Math>{`\\mathbf{w}_1 = (1, 1)`}</Math>, <Math>{`\\mathbf{w}_2 = (1, -1)`}</Math>
        </p>
        <MathBlock>
          {`P = \\begin{bmatrix} 1 & 1 \\\\ 1 & -1 \\end{bmatrix}, \\quad P^{-1} = \\frac{1}{2}\\begin{bmatrix} 1 & 1 \\\\ 1 & -1 \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          The vector <Math>(3, 1)</Math> in standard basis has coordinates <Math>(2, 1)</Math> in the new basis.
        </p>
      </Example>

      <h2>Similar Matrices</h2>

      <Definition title="Similar Matrices" className="my-6">
        <p>
          Matrices <Math>A</Math> and <Math>B</Math> are <strong>similar</strong> if:
        </p>
        <MathBlock>
          {`B = M^{-1}AM`}
        </MathBlock>
        <p className="mt-2">
          for some invertible matrix <Math>M</Math>. They represent the <strong>same transformation</strong>
          in different bases.
        </p>
      </Definition>

      <Theorem title="Matrix of T in Different Bases" className="my-6">
        <p>
          If <Math>A</Math> is the matrix of <Math>T</Math> in basis <Math>{`\\mathcal{B}`}</Math> and
          <Math>B</Math> is the matrix in basis <Math>{`\\mathcal{C}`}</Math>:
        </p>
        <MathBlock>
          {`B = P^{-1}AP`}
        </MathBlock>
        <p className="mt-2">
          where <Math>P</Math> is the change of basis matrix from <Math>{`\\mathcal{B}`}</Math> to <Math>{`\\mathcal{C}`}</Math>.
        </p>
      </Theorem>

      <h2>The Best Basis</h2>

      <Theorem title="Diagonalization as Change of Basis" className="my-6">
        <p>
          If <Math>{`A = X\\Lambda X^{-1}`}</Math> (diagonalization), then:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><Math>X</Math> is the change of basis matrix to eigenvector basis</li>
          <li><Math>\Lambda</Math> is the matrix of <Math>T</Math> in the eigenvector basis</li>
        </ul>
        <p className="mt-2 text-primary-400">
          In the eigenvector basis, <Math>T</Math> just scales each coordinate!
        </p>
      </Theorem>

      <Example title="Finding the Right Basis" className="my-6">
        <MathBlock>
          {`A = \\begin{bmatrix} 1 & 2 \\\\ 0 & 3 \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          Eigenvalues: <Math>\lambda_1 = 1</Math>, <Math>\lambda_2 = 3</Math><br />
          Eigenvectors: <Math>{`\\mathbf{x}_1 = (1, 0)`}</Math>, <Math>{`\\mathbf{x}_2 = (1, 1)`}</Math>
        </p>
        <p className="mt-2">
          In eigenvector basis: <Math>{`\\Lambda = \\begin{bmatrix} 1 & 0 \\\\\\\\ 0 & 3 \\end{bmatrix}`}</Math>
        </p>
      </Example>

      <h2>Properties Preserved Under Similarity</h2>

      <Theorem title="Invariants of Similar Matrices" className="my-6">
        <p>Similar matrices share these properties:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Same <strong>eigenvalues</strong></li>
          <li>Same <strong>determinant</strong></li>
          <li>Same <strong>trace</strong></li>
          <li>Same <strong>rank</strong></li>
          <li>Same <strong>characteristic polynomial</strong></li>
        </ul>
        <p className="mt-2">
          These are properties of the transformation itself, not the choice of basis.
        </p>
      </Theorem>

      <div className="bg-dark-800/50 rounded-xl p-4 my-6 border border-primary-500/20">
        <p className="font-semibold text-primary-400 mb-2">Choosing a Good Basis</p>
        <p className="text-dark-300 text-sm">
          The goal is to find a basis where the matrix is as simple as possible:
        </p>
        <ul className="list-disc list-inside text-dark-300 text-sm mt-2 space-y-1">
          <li><strong>Diagonal:</strong> If <Math>A</Math> is diagonalizable</li>
          <li><strong>Jordan form:</strong> If not diagonalizable, the "next best" form</li>
          <li><strong>SVD bases:</strong> Different bases for input and output, giving <Math>\Sigma</Math></li>
        </ul>
      </div>

      <h2>Coordinate Transformations</h2>

      <Example title="The Action of Similarity" className="my-6">
        <p>
          To compute <Math>{`B\\mathbf{y}`}</Math> where <Math>{`B = P^{-1}AP`}</Math>:
        </p>
        <MathBlock>
          {`B\\mathbf{y} = P^{-1}A(P\\mathbf{y})`}
        </MathBlock>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>Convert <Math>{`\\mathbf{y}`}</Math> to original basis: <Math>{`\\mathbf{x} = P\\mathbf{y}`}</Math></li>
          <li>Apply original transformation: <Math>{`A\\mathbf{x}`}</Math></li>
          <li>Convert back to new basis: <Math>{`P^{-1}(A\\mathbf{x})`}</Math></li>
        </ol>
      </Example>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>Change of basis: <Math>{`[x]_{\\mathcal{C}} = P^{-1}[x]_{\\mathcal{B}}`}</Math>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>Similar matrices: <Math>{`B = P^{-1}AP`}</Math> (same transformation, different basis).</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>Similar matrices have the same eigenvalues, determinant, trace, and rank.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>Eigenvector basis makes the matrix diagonal.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>The goal: find a basis where the matrix is simplest.</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
