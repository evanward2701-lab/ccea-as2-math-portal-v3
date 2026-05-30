import { Module } from '@/core/types';

const LESSON_CONTENT = `
# 1. Lesson Title
**Topic:** Differentiation (Rules and Applications)
**Unit:** A21 Pure Mathematics

## 2. Specification Alignment

| LO ID | CCEA Specification Point |
|---|---|
| A21-DIFF-LO001 | Differentiate exponential, logarithmic, and trig functions |
| A21-DIFF-LO002 | Differentiate using the product rule, quotient rule and chain rule |
| A21-DIFF-LO003 | Differentiate $\\cosec x$, $\\sec x$ and $\\cot x$ |
| A21-DIFF-LO004 | Differentiate implicit and parametric relations |
| A21-DIFF-LO005 | Construct simple differential equations (rates of change) |
| AS1-DIFF-LO005 | Use the second derivative to find concavity and points of inflection |

## 3. Learning Objectives
* Differentiate trigonometric, exponential, and logarithmic functions.
* Prove the derivatives of $\\sin x$ and $\\cos x$ from first principles using small angle approximations.
* Apply the **Chain Rule**, **Product Rule**, and **Quotient Rule**.
* Differentiate implicitly and parametrically.
* Solve problems involving **Connected Rates of Change**.
* Use the second derivative to determine concavity and locate **points of inflection**.

## 4. Core Theory

### 4.1 Standard Derivatives
You must memorise these standard derivatives (must be in Radians!):
* **$e^{kx}$** $\\rightarrow$ $k e^{kx}$
* **$\\ln(kx)$** $\\rightarrow$ $\\frac{1}{x}$
* **$\\sin x$** $\\rightarrow$ $\\cos x$
* **$\\cos x$** $\\rightarrow$ $-\\sin x$
* **$\\tan x$** $\\rightarrow$ $\\sec^2 x$
* **$\\sec x$** $\\rightarrow$ $\\sec x \\tan x$
* **$\\cosec x$** $\\rightarrow$ $-\\cosec x \\cot x$
* **$\\cot x$** $\\rightarrow$ $-\\cosec^2 x$

[VISUAL PLACEHOLDER: A21DifferentiationSVG001 | Trig Differentiation Cycle]

**Proof from First Principles: Derivative of $\\sin x$**
Using $f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$:
$f'(x) = \\lim_{h \\to 0} \\frac{\\sin(x+h) - \\sin x}{h}$
Expand using compound angles: $\\sin x \\cos h + \\cos x \\sin h - \\sin x$
Factorise: $\\sin x (\\frac{\\cos h - 1}{h}) + \\cos x (\\frac{\\sin h}{h})$
Apply small angle approximations (in radians) as $h \\to 0$: $\\frac{\\sin h}{h} \\to 1$ and $\\frac{\\cos h - 1}{h} \\to 0$.
Therefore, $f'(x) = \\cos x$.

[INTERACTIVE PLACEHOLDER: A21DifferentiationWidget001 | Secant to Tangent Limit Demonstrator]

### 4.2 The Chain Rule
Used for composite functions $f(g(x))$.
$\\frac{dy}{dx} = \\frac{dy}{du} \\times \\frac{du}{dx}$
**The "Blah" Method:** Differentiate the outer function, leaving the inner (*blah*) alone. Multiply by the derivative of the *blah*.

[VISUAL PLACEHOLDER: A21DifferentiationMMD001 | Chain Rule Decision Flowchart]

### 4.3 The Product Rule
Used when functions are multiplied: $y = uv$.
$\\frac{dy}{dx} = u v' + v u'$

[VISUAL PLACEHOLDER: A21DifferentiationSVG002 | Product Rule Cross Layout]

### 4.4 The Quotient Rule
Used when functions are divided: $y = \\frac{u}{v}$.
$\\frac{dy}{dx} = \\frac{vu' - uv'}{v^2}$
"Bottoms first!"

[VISUAL PLACEHOLDER: A21DifferentiationSVG003 | Quotient Rule Loop Layout]

### 4.5 Implicit Differentiation
When $y$ is not the subject (e.g., $x^2 + y^2 = 16$). Differentiate normally with respect to $y$, then multiply by $\\frac{dy}{dx}$.
**Warning:** For mixed terms like $xy$, you must use the Product Rule! ($x\\frac{dy}{dx} + y$).

### 4.6 Parametric Differentiation
For $x(t)$ and $y(t)$:
$\\frac{dy}{dx} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}}$

### 4.7 Connected Rates of Change
Set up a Chain Rule equation linking the desired rate to the known rate using a connecting derivative. E.g., $\\frac{dA}{dt} = \\frac{dA}{dr} \\times \\frac{dr}{dt}$.

### 4.8 Second Derivatives: Concave and Convex Curves
The second derivative ($f''(x)$) determines concavity:
*   **Concave (swerving right):** $f''(x) \\leq 0$
*   **Convex (swerving left):** $f''(x) \\geq 0$
*   **Point of Inflection:** A point where concavity changes ($f''(x) = 0$).

[VISUAL PLACEHOLDER: A21DifferentiationSVG004 | Concave and Convex Curves]

## 5. Practice Questions
1. Differentiate $y = \\ln(3x)$ with respect to $x$.
2. Differentiate $y = \\sec^3(x)$ with respect to $x$.
3. Find the exact coordinates of the turning point of $y = x e^{2x}$.
4. Find $\\frac{dy}{dx}$ for the curve $e^{2x} + e^{2y} = xy$.
5. A curve is defined parametrically by $x = 3\\sin\\theta$, $y = 5\\cos\\theta$. Find the gradient at $\\theta = \\frac{\\pi}{6}$.
`;

export const A21_09_MODULE: Module = {
  id: "A21-09",
  title: "Differentiation",
  type: "Pure Mathematics",
  overview: "Master the rules of differentiation (Chain, Product, Quotient) and their applications.",
  learningOutcomes: [
    { id: "A21-DIFF-LO001", text: "Standard derivatives" },
    { id: "A21-DIFF-LO002", text: "Differentiation rules" },
    { id: "A21-DIFF-LO003", text: "Reciprocal trig derivatives" },
    { id: "A21-DIFF-LO004", text: "Implicit & Parametric" },
    { id: "A21-DIFF-LO005", text: "Rates of change" },
    { id: "AS1-DIFF-LO005", text: "Concavity and points of inflection" }
  ],
  lessons: [
    {
      id: "A21-09-Lesson",
      title: "Differentiation (Rules and Applications)",
      visualId: "A21-Differentiation",
      type: "Pure Mathematics",
      content: LESSON_CONTENT,
      loIds: ["A21-DIFF-LO001", "A21-DIFF-LO002", "A21-DIFF-LO003", "A21-DIFF-LO004", "A21-DIFF-LO005", "AS1-DIFF-LO005"]
    }
  ]
};
