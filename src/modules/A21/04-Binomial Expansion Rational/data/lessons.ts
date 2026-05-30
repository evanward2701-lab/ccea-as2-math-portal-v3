import { Module } from '@/core/types';

const LESSON_CONTENT = `
# 1. Lesson Title
**Topic:** Binomial Expansion (Rational and Negative Powers)
**Unit:** A2 1 Pure Mathematics (A21)

## 2. Specification Alignment

| LO ID | CCEA Specification Point |
|---|---|
| A21-SS-LO008 | demonstrate understanding of and use the expansion of $(a+bx)^n$ for any rational $n$, including its use for approximation and knowledge that the expansion is valid for $|bx/a|<1$ |
| A21-AF-LO008 | decompose rational functions into partial fractions, with denominators not more complicated than squared linear terms |

## 3. Learning Objectives
By the end of this lesson, you should be able to:
* Expand expressions of the form $(1+x)^n$ where $n$ is a negative integer or a fraction.
* Manipulate expressions of the form $(a+bx)^n$ into $a^n(1+\\frac{b}{a}x)^n$ so they can be expanded.
* Determine the range of values of $x$ for which an infinite binomial expansion is valid (converges).
* Combine multiple binomial expansions by multiplying or adding them together.
* Use partial fractions to split complex algebraic fractions before expanding them.
* Substitute small values of $x$ into expansions to find approximations for roots and fractions.

## 4. Compact Prerequisite Recap
To succeed in this A2 topic, you need to be confident with the following prior knowledge:
* **AS1 Binomial Expansion (AS1-SS-LO001):** You should already know how to expand $(a+b)^n$ for positive integers using Pascal's triangle or the ${}^nC_r$ formula.
* **AS1 Index Laws (AS1-AF-LO001):** You must be comfortable with negative and fractional indices (e.g., $\\frac{1}{x^2} = x^{-2}$ and $\\sqrt[3]{x} = x^{1/3}$).
* **A21 Partial Fractions (A21-AF-LO008):** You need to know how to split algebraic fractions with linear denominators into partial fractions.

## 5. Big Picture Explanation
In AS Mathematics, you learned how to expand brackets like $(1+x)^4$. Because the power was a positive integer, the expansion eventually stopped (it was finite). 

In A2 Mathematics, we extend this idea to **any rational power**—meaning the power can be a negative number (like $-2$) or a fraction (like $\\frac{1}{2}$). 

When the power is not a positive integer, the expansion **never stops**; it becomes an infinite series. Because it goes on forever, we have to be careful. An infinite sum is only useful if the terms get smaller and smaller, eventually settling on a specific value (converging). If the terms get bigger and bigger, the sum explodes to infinity (diverges). Therefore, we must always state the **validity range**—the specific values of $x$ that make the expansion mathematically safe to use.

This tool is incredibly powerful. It allows us to turn complex curves, square roots, and algebraic fractions into simple polynomial approximations (like $1 + 2x - 3x^2$), which are much easier to integrate, differentiate, or evaluate.

## 6. Key Definitions and Notation
* **Rational Number ($n$):** Any number that can be written as a fraction. In this topic, $n$ will often be negative (e.g., $-1, -3$) or fractional (e.g., $\\frac{1}{2}, -\\frac{1}{3}$).
* **Infinite Series:** A sequence of terms added together that continues forever.
* **Converge:** When an infinite series approaches a finite, specific value.
* **Diverge:** When an infinite series does not approach a specific value (usually growing infinitely large).
* **Modulus Notation ($|x|$):** The absolute size of $x$, ignoring its sign. The inequality $|x| < 1$ is a compact way of writing $-1 < x < 1$.
* **Factorial ($!$):** The product of an integer and all the integers below it. E.g., $3! = 3 \\times 2 \\times 1 = 6$.

**The General Binomial Formula (given in the formula booklet):**
$$ (1+x)^n = 1 + nx + \\frac{n(n-1)}{2!}x^2 + \\frac{n(n-1)(n-2)}{3!}x^3 + \\dots $$

## 7. Core Theory

### Expanding $(1+x)^n$
When the first term in the bracket is a $1$, you can apply the formula directly. 
* **The Rule:** Substitute your power for $n$, and your $x$-term (including any coefficients or signs) for $x$.
* **Conditions:** This expansion is only valid if the magnitude of the $x$-term is strictly less than 1.
* **Validity:** $|x| < 1$.

### Expanding $(a+bx)^n$
The formula **only works if the first term in the bracket is a 1**. If you have a different number, you must factor it out first.
* **The Rule:** Factor out the $a$ from the bracket. Because the whole bracket is raised to the power of $n$, the $a$ that comes out must also be raised to the power of $n$.
$$ (a+bx)^n = \\left[ a \\left( 1 + \\frac{b}{a}x \\right) \\right]^n = a^n \\left( 1 + \\frac{b}{a}x \\right)^n $$
* **Conditions:** You now expand $(1 + \\frac{b}{a}x)^n$ using the standard formula, treating $\\frac{b}{a}x$ as your "$x$". Finally, multiply every term by $a^n$.
* **Validity:** The expansion is valid when the new $x$-term is less than 1 in magnitude: $\\left| \\frac{b}{a}x \\right| < 1$, which simplifies to $|x| < \\left| \\frac{a}{b} \\right|$.

[VISUAL PLACEHOLDER: A21BinomialExpansionRationalMMD001 | Expansion Decision Flowchart]

### Determining Validity
Why do we need $|x| < 1$? 
If you look at the expansion, the powers of $x$ increase ($x^2, x^3, x^4 \\dots$). 
* If $x = 2$, then $x^2 = 4$, $x^3 = 8$, $x^4 = 16$. The terms get larger, and the infinite sum diverges.
* If $x = 0.5$, then $x^2 = 0.25$, $x^3 = 0.125$, $x^4 = 0.0625$. The terms get smaller, and the infinite sum converges to a true value.

[VISUAL PLACEHOLDER: A21BinomialExpansionRationalSVG001 | Validity Range Number Line]

### Combining Expansions
Sometimes you are asked to expand a fraction like $\\frac{1+x}{\\sqrt{1-x}}$. 
* **The Rule:** Convert this into a product using negative indices: $(1+x)(1-x)^{-1/2}$. 
* Expand the complex bracket(s) up to the required power.
* Multiply the resulting polynomials together.
* **Exam Trick:** If the question asks for the expansion up to $x^2$, you can ignore any multiplications that create $x^3$ or higher. It saves time and prevents errors.
* **Combined Validity:** If you multiply two expansions together, the final result is only valid where **both** original expansions are valid. You must choose the most restrictive (smallest) range.

[VISUAL PLACEHOLDER: A21BinomialExpansionRationalSVG002 | Overlapping Validity Ranges]

## 8. Interactive Learning Widgets

[INTERACTIVE PLACEHOLDER: A21BinomialExpansionRationalWidget001 | Convergence Approximation Explorer]

## 9. Common Mistakes and Exam Traps
* **Sign Errors with Negative $x$ Terms:** When substituting a negative term like $(-3x)$ into the formula, students often write $-3x^2$ instead of $(-3x)^2$. Remember that $(-3x)^2 = +9x^2$. The sign alternates in many expansions.
* **Forgetting the Factorial:** The formula divides by $2!$ and $3!$. A common mistake is dividing by $3$ instead of $3!$ (which is $6$).
* **Forgetting to Apply the Power to the Factored Constant:** When expanding $(4+x)^{1/2}$, you must factor out the 4. Students often write $4(1 + \\frac{x}{4})^{1/2}$. It must be $4^{1/2}(1 + \\frac{x}{4})^{1/2} = 2(1 + \\frac{x}{4})^{1/2}$.
* **Incorrect Validity Range:** When combining two expansions, you must state the validity range that satisfies *both*. Always pick the most restrictive inequality (the one closest to zero).
* **Substituting Invalid Values for Approximations:** If an expansion is valid for $|x| < 0.25$, and a question asks you to substitute $x = 3$ to find an approximation, you must state that the substitution is unsuitable because it lies outside the valid range, meaning the series will diverge and the approximation will be wildly inaccurate.

## 10. Practice Questions
1. Find the binomial expansion of $\\frac{1}{(1 + 4x)^2}$ up to and including the term in $x^3$. State the values of $x$ for which the expansion is valid.
2. (a) Express $\\frac{2x^2 + 5x - 10}{(x - 1)(x + 2)}$ as partial fractions. (b) Hence, or otherwise, expand $\\frac{2x^2 + 5x - 10}{(x - 1)(x + 2)}$ in ascending powers of $x$, as far as the term in $x^2$. Give each coefficient as a simplified fraction.
3. (a) Find the binomial expansion of $\\sqrt{1 - 8x}$ in ascending powers of $x$ up to and including the term in $x^3$. (b) Show that, when $x = \\frac{1}{100}$, the exact value of $\\sqrt{1 - 8x}$ is $\\frac{\\sqrt{23}}{5}$. (c) Substitute $x = \\frac{1}{100}$ into your binomial expansion to obtain an approximation for $\\sqrt{23}$. Give your answer to 5 decimal places.
`;

export const A21_04_MODULE: Module = {
  id: "A21-04",
  title: "Binomial Expansion Rational",
  type: "Pure Mathematics",
  overview: "Expand binomial expressions with negative or fractional powers, find their validity ranges, and use partial fractions to manipulate them for approximation.",
  learningOutcomes: [
    { id: "A21-SS-LO008", text: "demonstrate understanding of and use the expansion of $(a+bx)^n$ for any rational $n$" },
    { id: "A21-AF-LO008", text: "decompose rational functions into partial fractions" }
  ],
  lessons: [
    {
      id: "A21-04-Lesson",
      title: "Binomial Expansion (Rational and Negative Powers)",
      visualId: "A21-BinomialRational",
      type: "Pure Mathematics",
      content: LESSON_CONTENT,
      loIds: ["A21-SS-LO008", "A21-AF-LO008"]
    }
  ]
};
