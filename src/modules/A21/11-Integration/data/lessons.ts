import { Module } from '@/core/types';

const LESSON_CONTENT = `
# 1. Lesson Title
**Topic:** Integration
**Unit:** A21 Pure Mathematics

## 2. Specification Alignment

| LO ID | CCEA Specification Point |
|---|---|
| A21-INT-LO001 | Integrate $e^{kx}$, $\\frac{1}{x}$, $\\sin(kx)$, $\\cos(kx)$ and related functions |
| A21-INT-LO002 | Use a definite integral to find the area between two curves |
| A21-INT-LO003 | Integration as the limit of a sum |
| A21-INT-LO004 | Integration by substitution and integration by parts |
| A21-INT-LO005 | Integrate using partial fractions |
| A21-INT-LO006 | Analytical solution of simple first order differential equations with separable variables |
| A21-INT-LO007 | Interpret the solution of a differential equation in context |
| A21-NUM-LO003 | Numerical integration via the trapezium rule |

## 3. Learning Objectives
* Integrate standard functions, including trigonometric, exponential, and reciprocal functions, applying appropriate scaling.
* Use trigonometric identities to integrate functions like $\\sin^2 x$, $\\cos^2 x$, and $\\tan^2 x$.
* Recognise and apply the reverse chain rule (integration by inspection).
* Carry out integration by substitution, including changing the limits for definite integrals.
* Apply integration by parts to products of functions, including the special case of $\\int \\ln x \\, dx$.
* Integrate rational expressions using partial fractions and algebraic division.
* Approximate the area under a curve using the trapezium rule and determine if it is an over- or under-estimate.
* Form and solve first-order differential equations by separating variables.

## 4. Big Picture Explanation
Integration at AS level was mostly about reversing simple polynomial differentiation to find areas under curves. At A2 level, integration becomes a vast, interconnected toolkit. Because the Product Rule and Chain Rule make differentiation complex, reversing those processes requires specific, targeted strategies. 

Mastering this topic is like learning to play chess; you must look several moves ahead to choose the right technique. Ultimately, these tools allow us to solve **Differential Equations**—the mathematical language used to model everything from population growth to radioactive decay.

## 5. Core Theory

### 5.1 The Integration Strategy Flowchart
When faced with an integration problem, follow a strict hierarchy of checks.

[VISUAL PLACEHOLDER: A21IntegrationMMD001 | Integration Strategy Flowchart]

1.  **Standard Result:** Is it in the formula book or a known derivative? Does it just need linear scaling?
2.  **Manipulation:** Can I expand brackets or use a trig identity?
3.  **Reverse Chain Rule:** Is the numerator the derivative of the denominator? Is one factor the derivative of the "inside" of the other factor?
4.  **Fractions:** Can I split the numerator? Do I need partial fractions? Is it top-heavy (algebraic division)?
5.  **Products:** Use Integration by Parts.
6.  **Last Resort:** Substitution.

### 5.2 Standard Results and Scaling
**Scaling Rule for $f(ax+b)$:**
If you know the integral of $f(x)$, then for any linear inner function $ax+b$, integrate as normal and divide by $a$.
$$ \\int f'(ax+b) \\, dx = \\frac{1}{a}f(ax+b) + c $$

### 5.3 Integrating using Trigonometric Identities
**Integrating $\\sin^2 x$ and $\\cos^2 x$:**
Always use the rearranged double angle formulae for $\\cos 2x$:
*   $\\sin^2 x = \\frac{1}{2} - \\frac{1}{2}\\cos 2x$
*   $\\cos^2 x = \\frac{1}{2} + \\frac{1}{2}\\cos 2x$

**Integrating $\\tan^2 x$:**
Use the Pythagorean identity: $1 + \\tan^2 x \\equiv \\sec^2 x$.

### 5.4 The Reverse Chain Rule (Integration by Inspection)
**Pattern 1: $\\frac{f'(x)}{f(x)}$ integrates to $\\ln|f(x)|$**
**Pattern 2: $k \\cdot f'(x)[f(x)]^n$ integrates to $[f(x)]^{n+1}$ (after scaling)**

### 5.5 Integration by Substitution
When the reverse chain rule doesn't work, we use substitution.
1.  **Differentiate the substitution** to find $dx$.
2.  **Substitute** $x$ terms and $dx$. (Change limits if definite).
3.  **Integrate** with respect to $u$.
4.  **Replace** $u$ with $x$ (if indefinite).

### 5.6 Integration by Parts
For integrating products.
**Formula:** $\\int u v' \\, dx = uv - \\int v u' \\, dx$
Choose $u$ based on **LIATE** priority: Logarithmic, Inverse Trig, Algebraic, Trigonometric, Exponential.

[VISUAL PLACEHOLDER: A21IntegrationSVG001 | Integration by Parts Pattern]

**The Special Case of $\\ln x$:**
Treat as $\\int 1 \\cdot \\ln x \\, dx$. Let $u = \\ln x$ and $v' = 1$.

### 5.7 Integrating Fractions
Check Reverse Chain Rule first.
1.  **Single denominator term:** Split the numerator.
2.  **Factorisable denominator:** Partial Fractions.
3.  **Top-heavy fraction:** Algebraic Long Division.

### 5.8 The Trapezium Rule
When analytical integration fails, approximate the area using trapeziums.
$$ \\int_{a}^{b} y \\, dx \\approx \\frac{h}{2} \\left( y_0 + 2(y_1 + y_2 + ... + y_{n-1}) + y_n \\right) $$

*   **Overestimate:** If the curve is **convex** ($f''(x) \\geq 0$).
*   **Underestimate:** If the curve is **concave** ($f''(x) \\leq 0$).

[VISUAL PLACEHOLDER: A21IntegrationTikZ001 | Trapezium Rule Over/Under Estimation]

[INTERACTIVE PLACEHOLDER: A21IntegrationWidget001 | Interactive Trapezium Rule Visualizer]

### 5.9 Differential Equations
Solve first-order ODEs by separating variables.
1. Rearrange to get all $y$ terms on the left with $dy$, and all $x$ terms on the right with $dx$ (using multiplication/division).
2. Integrate both sides.
3. Add a single $+ c$ (or $\\ln k$ if terms are logs).

## 6. Practice Questions
1. Evaluate $\\int \\sin^2 3x \\, dx$.
2. Use substitution $u=2x+5$ to find $\\int x\\sqrt{2x+5} \\, dx$.
3. Find $\\int x \\sin 2x \\, dx$ using Integration by Parts.
4. Solve $\\frac{dy}{dx} = y(x + 1)$.
`;

export const A21_11_MODULE: Module = {
  id: "A21-11",
  title: "Integration",
  type: "Pure Mathematics",
  overview: "Master advanced integration techniques and solve differential equations.",
  learningOutcomes: [
    { id: "A21-INT-LO001", text: "Integrate standard functions" },
    { id: "A21-INT-LO002", text: "Area between curves" },
    { id: "A21-INT-LO003", text: "Limit of a sum" },
    { id: "A21-INT-LO004", text: "Substitution & Parts" },
    { id: "A21-INT-LO005", text: "Partial fractions" },
    { id: "A21-INT-LO006", text: "Differential equations" },
    { id: "A21-INT-LO007", text: "Modelling" },
    { id: "A21-NUM-LO003", text: "Trapezium rule" }
  ],
  lessons: [
    {
      id: "A21-11-Lesson",
      title: "Integration & Differential Equations",
      visualId: "A21-Integration",
      type: "Pure Mathematics",
      content: LESSON_CONTENT,
      loIds: ["A21-INT-LO001", "A21-INT-LO002", "A21-INT-LO004", "A21-INT-LO005", "A21-INT-LO006", "A21-NUM-LO003"]
    }
  ]
};
