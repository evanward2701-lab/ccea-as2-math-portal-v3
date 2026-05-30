import { Module } from '@/core/types';

const LESSON_CONTENT = `
# 1. Lesson Title
**Topic:** Trigonometric Functions, Identities and Modelling
**Unit:** A2 1 Pure Mathematics (A21)

## 2. Specification Alignment

| LO ID | CCEA Specification Point |
|---|---|
| A21-TRIG-LO002 | Definitions of secant, cosecant, cotangent, arcsin, arccos, arctan |
| A21-TRIG-LO003 | Graphs of secant, cosecant, cotangent, arcsin, arccos, arctan |
| A21-TRIG-LO004 | Use $\\sec^2\\theta=1+\\tan^2\\theta$ and $\\operatorname{cosec}^2\\theta=1+\\cot^2\\theta$ |
| A21-TRIG-LO005 | Compound angle formulae for $\\sin(A\\pm B)$, $\\cos(A\\pm B)$, $\\tan(A\\pm B)$ |
| A21-TRIG-LO006 | Use and prove double angle formulae |
| A21-TRIG-LO007 | Expressions for $a\\cos\\theta+b\\sin\\theta$ in forms $r\\cos(\\theta\\pm\\alpha)$ |
| A21-TRIG-LO008 | Construct proofs involving trig functions and identities |
| A21-TRIG-LO009 | Use trigonometric functions to solve problems in context |

## 3. Learning Objectives
By the end of this lesson, you should be able to:
* Define and use the reciprocal trigonometric functions: $\\sec x$, $\\operatorname{cosec} x$, and $\\cot x$.
* Sketch the graphs of reciprocal and inverse trigonometric functions, identifying their domains, ranges, and asymptotes.
* Derive and apply the Pythagorean identities involving $\\sec^2 x$ and $\\operatorname{cosec}^2 x$.
* Use compound angle and double angle formulae to simplify expressions and solve equations.
* Express $a\\cos\\theta + b\\sin\\theta$ in the harmonic form $R\\sin(\\theta \\pm \\alpha)$ or $R\\cos(\\theta \\pm \\alpha)$.
* Construct formal algebraic proofs for trigonometric identities.
* Solve complex trigonometric equations within given intervals (in degrees and radians).
* Apply trigonometric functions to model real-world contexts and find maximum/minimum values.

## 4. Compact Prerequisite Recap
To succeed in this A2 lesson, you need to be confident with the following AS1 concepts:
* **Basic Trigonometry:** $\\sin \\theta$, $\\cos \\theta$, and $\\tan \\theta$, including exact values.
* **AS Identities:** $\\tan \\theta \\equiv \\frac{\\sin \\theta}{\\cos \\theta}$ and $\\sin^2 \\theta + \\cos^2 \\theta \\equiv 1$.
* **Solving Equations:** Using the CAST diagram or graph symmetries to find multiple solutions.
* **Transformations:** How $y = f(2x)$ compresses a graph horizontally, and $y = f(x) + a$ translates it vertically.

## 5. Big Picture Explanation
In AS Mathematics, you worked with sine, cosine, and tangent. In A2 Mathematics, we expand the trigonometric family. First, we introduce the **reciprocal functions** (secant, cosecant, and cotangent). Having specific names for these reciprocals makes calculus (differentiation and integration) much cleaner later in the course. 

We also formalise the **inverse functions** ($\\arcsin$, $\\arccos$, $\\arctan$). We will look at their graphs and understand why their domains must be restricted.

Finally, we introduce a powerful toolkit of **identities and formulae** (compound angles, double angles, and the harmonic form). These tools allow us to take messy, complicated trigonometric expressions and mold them into simpler forms. This is essential for solving advanced equations and for **modelling** real-world phenomena.

## 6. Key Definitions and Notation

### Reciprocal Trigonometric Functions
These are the reciprocals of the standard trigonometric functions. 
* **Secant:** $\\sec x \\equiv \\frac{1}{\\cos x}$
* **Cosecant:** $\\operatorname{cosec} x \\equiv \\frac{1}{\\sin x}$
* **Cotangent:** $\\cot x \\equiv \\frac{1}{\\tan x} \\equiv \\frac{\\cos x}{\\sin x}$

*Memory Tip:* Look at the **third letter** of the reciprocal function to remember which standard function it pairs with:
* $\\text{se}\\mathbf{c} x \\rightarrow \\cos x$
* $\\text{co}\\mathbf{s}\\text{ec} x \\rightarrow \\sin x$
* $\\text{co}\\mathbf{t} x \\rightarrow \\tan x$

### Inverse Trigonometric Functions
Inverse functions "undo" the original function to find the angle.
* $\\arcsin x$ is the inverse of $\\sin x$.
* $\\arccos x$ is the inverse of $\\cos x$.
* $\\arctan x$ is the inverse of $\\tan x$.

**Warning:** Do not confuse the inverse notation $\\cos^{-1} x$ with the reciprocal $(\\cos x)^{-1}$. 
* $\\cos^{-1} x = \\arccos x$ (Finds the angle)
* $(\\cos x)^{-1} = \\frac{1}{\\cos x} = \\sec x$ (Finds the reciprocal value)

## 7. Core Theory

### 7.1 Graphs of Reciprocal Trigonometric Functions
To sketch the graph of a reciprocal function like $y = \\operatorname{cosec} x$, we start by imagining the graph of $y = \\sin x$ and reciprocating every $y$-value.
1. **Where $\\sin x = 1$**, $\\operatorname{cosec} x = 1$. The graphs touch at these peaks.
2. **Where $\\sin x = -1$**, $\\operatorname{cosec} x = -1$. The graphs touch at these troughs.
3. **Where $\\sin x = 0$**, $\\operatorname{cosec} x = \\frac{1}{0}$, which is undefined. This creates **vertical asymptotes**.

[VISUAL PLACEHOLDER: A21TrigonometrySVG001 | Graph of cosec x and sin x]
[VISUAL PLACEHOLDER: A21TrigonometrySVG002 | Graph of sec x and cos x]
[VISUAL PLACEHOLDER: A21TrigonometrySVG003 | Graph of cot x and tan x]

### 7.2 The New Pythagorean Identities
By dividing $\\sin^2 x + \\cos^2 x \\equiv 1$ by either $\\cos^2 x$ or $\\sin^2 x$, we generate two new identities.
* **Divide by $\\cos^2 x$:** $\\tan^2 x + 1 \\equiv \\sec^2 x$
* **Divide by $\\sin^2 x$:** $1 + \\cot^2 x \\equiv \\operatorname{cosec}^2 x$

### 7.3 Addition (Compound Angle) Formulae
* $\\sin(A \\pm B) \\equiv \\sin A \\cos B \\pm \\cos A \\sin B$
* $\\cos(A \\pm B) \\equiv \\cos A \\cos B \\mp \\sin A \\sin B$
* $\\tan(A \\pm B) \\equiv \\frac{\\tan A \\pm \\tan B}{1 \\mp \\tan A \\tan B}$

### 7.4 Double Angle Formulae
* $\\sin(2A) \\equiv 2\\sin A \\cos A$
* $\\cos(2A) \\equiv \\cos^2 A - \\sin^2 A \\equiv 2\\cos^2 A - 1 \\equiv 1 - 2\\sin^2 A$
* $\\tan(2A) \\equiv \\frac{2\\tan A}{1 - \\tan^2 A}$

### 7.5 The Harmonic Identity ($R\\sin(x \\pm \\alpha)$)
An expression like $a\\cos x + b\\sin x$ can be combined into a single wave: $R\\sin(x \\pm \\alpha)$ or $R\\cos(x \\pm \\alpha)$.
* **Amplitude ($R$):** $R = \\sqrt{a^2 + b^2}$
* **Phase shift ($\\alpha$):** Found by expanding the compound angle formula and equating coefficients.

### 7.6 Graphs of Inverse Trigonometric Functions
For a function to have an inverse, it must be **one-to-one**. We must **restrict domains** before finding the inverse.
* **$y = \\arcsin x$:** Domain $[-1, 1]$, Range $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$
* **$y = \\arccos x$:** Domain $[-1, 1]$, Range $[0, \\pi]$
* **$y = \\arctan x$:** Domain $\\mathbb{R}$, Range $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$

[VISUAL PLACEHOLDER: A21TrigonometrySVG004 | Graphs of Inverse Trigonometric Functions]

## 8. Interactive Learning Widgets

[INTERACTIVE PLACEHOLDER: A21TrigonometryWidget001 | Reciprocal Function Explorer]

## 9. Common Mistakes and Exam Traps
* **Illegal Fraction Cancelling:** You cannot cancel terms across an addition or subtraction sign.
* **Confusing Inverse and Reciprocal:** $\\cos^{-1} x$ does *not* mean $\\frac{1}{\\cos x}$.
* **Squaring Negatives in Modelling:** The minimum value of $(\\cos x)^2$ is $0$, not $-1$.
* **Undefined Values:** $\\tan \\theta$, $\\sec \\theta$, and $\\operatorname{cosec} \\theta$ have vertical asymptotes.

## 10. Practice Questions
1. Prove that $\\frac{1 - \\tan^2 a}{1 + \\tan^2 a} \\equiv 1 - 2\\sin^2 a$.
2. Solve $\\sec \\theta = -2.5$ in the interval $0^\\circ \\le \\theta \\le 360^\\circ$.
3. Express $4\\cos x + 5\\sin x$ in the form $R\\cos(x - \\alpha)$.
4. The temperature of a chemical reaction is modelled by $T = \\frac{150}{(4\\cos(0.1t) + 5\\sin(0.1t))^2 + 2}$. Find the minimum and maximum temperatures.
`;

export const A21_06_MODULE: Module = {
  id: "A21-06",
  title: "Trigonometry",
  type: "Pure Mathematics",
  overview: "Master reciprocal and inverse trigonometric functions, derive key identities, and use compound angle formulae to model real-world phenomena.",
  learningOutcomes: [
    { id: "A21-TRIG-LO002", text: "Definitions of secant, cosecant, cotangent, arcsin, arccos, arctan" },
    { id: "A21-TRIG-LO003", text: "Graphs of secant, cosecant, cotangent, arcsin, arccos, arctan" },
    { id: "A21-TRIG-LO004", text: "Use Pythagorean identities" },
    { id: "A21-TRIG-LO005", text: "Compound angle formulae" },
    { id: "A21-TRIG-LO006", text: "Use and prove double angle formulae" },
    { id: "A21-TRIG-LO007", text: "Harmonic form expressions" },
    { id: "A21-TRIG-LO008", text: "Construct proofs" },
    { id: "A21-TRIG-LO009", text: "Modelling with trigonometric functions" }
  ],
  lessons: [
    {
      id: "A21-06-Lesson",
      title: "Trigonometric Functions, Identities and Modelling",
      visualId: "A21-Trigonometry",
      type: "Pure Mathematics",
      content: LESSON_CONTENT,
      loIds: ["A21-TRIG-LO002", "A21-TRIG-LO003", "A21-TRIG-LO004", "A21-TRIG-LO005", "A21-TRIG-LO006", "A21-TRIG-LO007", "A21-TRIG-LO008", "A21-TRIG-LO009"]
    }
  ]
};
