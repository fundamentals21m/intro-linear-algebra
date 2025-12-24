import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Math, MathBlock } from '@/components/common/MathBlock';

export default function Section49() {
  return (
    <LessonLayout sectionId={49}>
      {/* Introduction */}
      <p>
        <strong>Linear regression</strong> is the most important statistical model. It finds the best
        linear relationship between variables—and "best" means least squares, which is pure linear algebra.
      </p>

      <h2>The Linear Model</h2>

      <Definition title="Linear Regression Model" className="my-6">
        <p>
          The model assumes:
        </p>
        <MathBlock>
          {`y = X\\boldsymbol{\\beta} + \\boldsymbol{\\varepsilon}`}
        </MathBlock>
        <p className="mt-2">
          <Math>y</Math> = response vector (<Math>n \times 1</Math>)<br />
          <Math>X</Math> = design matrix (<Math>n \times p</Math>)<br />
          <Math>{`\\boldsymbol{\\\\beta}`}</Math> = unknown coefficients (<Math>p \times 1</Math>)<br />
          <Math>{`\\boldsymbol{\\\\varepsilon}`}</Math> = random errors
        </p>
      </Definition>

      <h2>Least Squares Solution</h2>

      <Theorem title="Normal Equations" className="my-6">
        <p>
          The <strong>least squares estimate</strong> <Math>{`\\hat{\\boldsymbol{\\beta}}`}</Math> minimizes <Math>{`\\|y - X\\boldsymbol{\\beta}\\|^2`}</Math>:
        </p>
        <MathBlock>
          {`X^TX\\hat{\\boldsymbol{\\beta}} = X^Ty`}
        </MathBlock>
        <MathBlock>
          {`\\hat{\\boldsymbol{\\beta}} = (X^TX)^{-1}X^Ty`}
        </MathBlock>
        <p className="mt-2 text-primary-400">
          This is exactly the projection formula! <Math>{`\\hat{y} = X\\hat{\\boldsymbol{\\beta}}`}</Math> is the projection of <Math>y</Math> onto <Math>C(X)</Math>.
        </p>
      </Theorem>

      <Example title="Simple Linear Regression" className="my-6">
        <p>
          For <Math>y = \beta_0 + \beta_1 x</Math>, the design matrix is:
        </p>
        <MathBlock>
          {`X = \\begin{bmatrix} 1 & x_1 \\\\ 1 & x_2 \\\\ \\vdots & \\vdots \\\\ 1 & x_n \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          Solving gives the familiar formulas for slope and intercept.
        </p>
      </Example>

      <h2>Geometric Interpretation</h2>

      <Theorem title="Projection Interpretation" className="my-6">
        <ul className="list-disc list-inside space-y-2">
          <li><Math>{`\\hat{y} = X(X^TX)^{-1}X^Ty`}</Math> = projection of <Math>y</Math> onto column space of <Math>X</Math></li>
          <li><Math>{`H = X(X^TX)^{-1}X^T`}</Math> = "hat matrix" (projection matrix)</li>
          <li>Residuals <Math>{`e = y - \\hat{y}`}</Math> are orthogonal to columns of <Math>X</Math></li>
        </ul>
      </Theorem>

      <h2>Variance of Estimates</h2>

      <Theorem title="Covariance of Beta-Hat" className="my-6">
        <p>
          If <Math>{`\\text{Cov}(\\boldsymbol{\\\\varepsilon}) = \\sigma^2 I`}</Math>:
        </p>
        <MathBlock>
          {`\\text{Cov}(\\hat{\\boldsymbol{\\beta}}) = \\sigma^2(X^TX)^{-1}`}
        </MathBlock>
        <p className="mt-2">
          The estimate <Math>{`\\hat{\\sigma}^2 = \\|e\\|^2/(n-p)`}</Math> from residuals.
        </p>
      </Theorem>

      <h2>R-Squared</h2>

      <Definition title="Coefficient of Determination" className="my-6">
        <MathBlock>
          {`R^2 = 1 - \\frac{\\|e\\|^2}{\\|y - \\bar{y}\\|^2} = \\frac{\\|\\hat{y} - \\bar{y}\\|^2}{\\|y - \\bar{y}\\|^2}`}
        </MathBlock>
        <p className="mt-2">
          <Math>R^2</Math> = fraction of variance explained by the model (0 to 1).
        </p>
      </Definition>

      <div className="bg-dark-800/50 rounded-xl p-4 my-6 border border-primary-500/20">
        <p className="font-semibold text-primary-400 mb-2">Pythagorean Theorem in Regression</p>
        <p className="text-dark-300 text-sm">
          <Math>{`\\|y - \\bar{y}\\|^2 = \\|\\hat{y} - \\bar{y}\\|^2 + \\|e\\|^2`}</Math><br /><br />
          Total variance = Explained variance + Unexplained variance<br />
          This is orthogonal decomposition!
        </p>
      </div>

      <h2>Multiple Regression</h2>

      <Example title="Multiple Regression" className="my-6">
        <p>
          With multiple predictors <Math>y = \beta_0 + \beta_1 x_1 + \beta_2 x_2 + \cdots</Math>:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Coefficients account for other variables (partial effects)</li>
          <li>Multicollinearity: if columns of <Math>X</Math> are nearly dependent, <Math>{`(X^TX)^{-1}`}</Math> is ill-conditioned</li>
          <li>Regularization (ridge regression) adds <Math>\lambda I</Math> to stabilize</li>
        </ul>
      </Example>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>Least squares: <Math>{`\\hat{\\boldsymbol{\\beta}} = (X^TX)^{-1}X^Ty`}</Math>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span><Math>{`\\hat{y}`}</Math> is the projection of <Math>y</Math> onto column space of <Math>X</Math>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>Residuals <Math>e</Math> are orthogonal to columns of <Math>X</Math>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span><Math>R^2</Math> = fraction of variance explained.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>Variance of <Math>{`\\hat{\\boldsymbol{\\beta}}`}</Math>: <Math>{`\\sigma^2(X^TX)^{-1}`}</Math>.</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
