import { Module } from '@/core/types';

const LESSON_CONTENT = `
# 1. Lesson Title
**Topic:** Trigonometry & Modelling
**Unit:** A2 1 Pure Mathematics (A21)

## 2. Specification Alignment

| LO ID | CCEA Specification Point |
|---|---|
| A21-TRIG-LO005 | Compound angle formulae for $\\sin(A\\pm B)$, $\\cos(A\\pm B)$, $\\tan(A\\pm B)$ |
| A21-TRIG-LO006 | Use and prove double angle formulae |
| A21-TRIG-LO007 | Expressions for $a\\cos\\theta+b\\sin\\theta$ in forms $r\\cos(\\theta\\pm\\alpha)$ |
| A21-TRIG-LO008 | Construct proofs involving trigonometric functions and identities |
| A21-TRIG-LO009 | Use trigonometric functions to solve problems in context |

## 3. Learning Objectives
By the end of this lesson, you should be able to:
* Recall and apply the addition (compound angle) formulae for sine, cosine, and tangent.
* Derive and apply the double angle formulae to simplify expressions and solve equations.
* Combine expressions of the form $a\\sin x \\pm b\\cos x$ into a single harmonic wave $R\\sin(x \\pm \\alpha)$ or $R\\cos(x \\pm \\alpha)$.
* Find the maximum and minimum values of complex trigonometric expressions without using calculus.
* Model real-world periodic phenomena (like temperature or tides) using trigonometric functions.
* Prove complex trigonometric identities by chaining multiple formulae together.

## 4. Big Picture Explanation
In AS Mathematics, you learned how to solve basic trigonometric equations and graph simple waves. However, real-world waves rarely exist in isolation. They overlap, interfere, and combine. 

This chapter provides the algebraic toolkit to handle these combinations. The **Addition Formulae** allow you to break apart angles that are added together inside a function. The **Double Angle Formulae** let you halve or double the frequency of a wave. Finally, the **Harmonic Identity** is a powerful mathematical trick that takes two overlapping waves of the same frequency and proves they perfectly combine into one single, shifted wave.

## 5. Key Definitions and Notation
* **Compound Angle:** An angle created by adding or subtracting two other angles, e.g., $(A + B)$.
* **Harmonic Form:** Writing a sum of sine and cosine terms as a single trigonometric ratio, typically $R\\sin(x \\pm \\alpha)$ or $R\\cos(x \\pm \\alpha)$.
* **Amplitude ($R$):** The maximum displacement of a wave from its centre line.
* **Phase Shift ($\\alpha$):** The horizontal translation of a wave along the x-axis.

## 6. Core Theory

### 6.1 The Addition (Compound Angle) Formulae
**Warning:** $\\sin(A + B) \\neq \\sin A + \\sin B$.
Instead, use the official Addition Formulae:

**Sine Addition Formulae:**
$$ \\sin(A + B) \\equiv \\sin A \\cos B + \\cos A \\sin B $$
$$ \\sin(A - B) \\equiv \\sin A \\cos B - \\cos A \\sin B $$

**Cosine Addition Formulae:**
$$ \\cos(A + B) \\equiv \\cos A \\cos B - \\sin A \\sin B $$
$$ \\cos(A - B) \\equiv \\cos A \\cos B + \\sin A \\sin B $$

**Tangent Addition Formulae:**
$$ \\tan(A + B) \\equiv \\frac{\\tan A + \\tan B}{1 - \\tan A \\tan B} $$
$$ \\tan(A - B) \\equiv \\frac{\\tan A - \\tan B}{1 + \\tan A \\tan B} $$

[VISUAL PLACEHOLDER: A21TrigonometryAndModellingTikZ001 | Geometric proof of sin(A+B)]

### 6.2 The Double Angle Formulae
**Sine Double Angle:**
$$ \\sin 2A \\equiv 2 \\sin A \\cos A $$

**Cosine Double Angle:**
$$ \\cos 2A \\equiv \\cos^2 A - \\sin^2 A $$
* $$ \\cos 2A \\equiv 2 \\cos^2 A - 1 $$
* $$ \\cos 2A \\equiv 1 - 2 \\sin^2 A $$

[VISUAL PLACEHOLDER: A21TrigonometryAndModellingMMD001 | Choosing the Right Cosine Double Angle Formula]

**Tangent Double Angle:**
$$ \\tan 2A \\equiv \\frac{2 \\tan A}{1 - \\tan^2 A} $$

### 6.3 The Harmonic Identity
Adding a sine and a cosine wave of the same frequency produces a single perfect sine wave, shifted.
$$ R \\sin(x \\pm \\alpha) \\quad \\text{or} \\quad R \\cos(x \\mp \\alpha) $$
Where:
* **$R = \\sqrt{a^2 + b^2}$**
* **$\\tan \\alpha = \\frac{b}{a}$** (Found by equating coefficients)

[VISUAL PLACEHOLDER: A21TrigonometryAndModellingSVG001 | Harmonic wave combination]

## 7. Interactive Learning Widgets

[INTERACTIVE PLACEHOLDER: A21TrigonometryAndModellingWidget001 | Harmonic Wave Combiner]

## 8. Common Mistakes and Exam Traps
1.  **The Linear Distribution Trap:** Assuming $\\sin(A + B) = \\sin A + \\sin B$.
2.  **Dividing by a Variable Trig Function:** Never divide an equation by $\\sin x$ to cancel it, or you will lose valid solutions. Factorise instead.
3.  **Forgetting the $\\pm$ Symbol:** When taking the square root, e.g., $\\tan^2 2y = \\frac{3}{7} \\implies \\tan 2y = \\pm\\sqrt{\\frac{3}{7}}$.
4.  **Misjudging the Minimum of a Squared Trig Term:** The minimum value of $\\sin^2(\\theta)$ is $0$, not $-1$.
5.  **Forgetting to Adjust the Working Range:** If you solve for $3x$, multiply your domain bounds by 3 first.

## 9. Practice Questions
1. Solve the equation $4\\cos(x - 30^\\circ) = 8\\sqrt{2}\\sin x$ for $0^\\circ \\le x \\le 360^\\circ$.
2. Express $3\\sin x + 4\\cos x$ in the form $R\\sin(x + \\alpha)$, where $R > 0$ and $0^\\circ < \\alpha < 90^\\circ$.
3. The temperature $T$ ($^\\circ\\text{C}$) of a kiln is modelled by $T = 1100 + 5\\cos\\left(\\frac{x}{3}\\right) - 8\\sin\\left(\\frac{x}{3}\\right)$. Find the maximum temperature.
`;

export const A21_07_MODULE: Module = {
  id: "A21-07",
  title: "Trigonometry and Modelling",
  type: "Pure Mathematics",
  overview: "Master compound angles, double angles, and the harmonic identity to model combined real-world periodic waves.",
  learningOutcomes: [
    { id: "A21-TRIG-LO005", text: "Compound angle formulae" },
    { id: "A21-TRIG-LO006", text: "Double angle formulae" },
    { id: "A21-TRIG-LO007", text: "Harmonic form expressions" },
    { id: "A21-TRIG-LO008", text: "Construct trigonometric proofs" },
    { id: "A21-TRIG-LO009", text: "Trigonometric modelling" }
  ],
  lessons: [
    {
      id: "A21-07-Lesson",
      title: "Trigonometry & Modelling",
      visualId: "A21-Trigonometry-Modelling",
      type: "Pure Mathematics",
      content: LESSON_CONTENT,
      loIds: ["A21-TRIG-LO005", "A21-TRIG-LO006", "A21-TRIG-LO007", "A21-TRIG-LO008", "A21-TRIG-LO009"]
    }
  ]
};
