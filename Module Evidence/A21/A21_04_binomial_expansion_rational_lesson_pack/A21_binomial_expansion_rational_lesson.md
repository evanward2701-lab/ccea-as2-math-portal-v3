```markdown
# A21_binomial_expansion_rational_lesson.md PART 1A

## 1. Lesson Title

**Binomial Expansion (Rational and Negative Powers)**
**Unit:** A2 1 Pure Mathematics (A21)
**Topic:** Sequences and Series
**Source Evidence:** `04 binomial expansion.md`, `CCEA_GCE_Mathematics_Specification_Map copy.md`, DrFrostMaths slides, Remote teaching screenshots
**Date Generated:** 2026-05-30
**Relevant LO IDs:** A21-SS-LO008, A21-AF-LO008
**Suggested Tags:** `#A21`, `#SequencesSeries`, `#BinomialExpansion`, `#PartialFractions`, `#Approximation`, `#LessonNotes`

---

## 2. Evidence Map

| Evidence Type | Filename | Role in this lesson | Pages/Slides/Images Used | Notes on quality or uncertainty |
|---|---|---|---|---|
| Specification Map | `CCEA_GCE_Mathematics_Specification_Map copy.md` | Curriculum authority | A21-SS-LO008, A21-AF-LO008 | Clearly defines the requirement for rational $n$ and validity ranges. |
| Transcript | `04 binomial expansion.md` | Primary teaching text | Full document | Excellent step-by-step worked examples and common pitfalls. |
| PDF Slides | `Binomial Expansion.pdf` | Visual sequencing | All slides | Confirms transcript structure and provides visual layout for expansions. |
| PDF Images | `Binomial Expansion - remote teaching.pdf` | Visual/Handwritten notes | All pages | Shows handwritten annotations, confirming calculation steps and validity number lines. |

---

## 3. Specification Alignment

| LO ID | CCEA Specification Point | Elaboration Guidance | Covered in this lesson? | Where it appears | Gap or action needed | Suggested visual/widget support |
|---|---|---|---|---|---|---|
| A21-SS-LO008 | demonstrate understanding of and use the expansion of $(a+bx)^n$ for any rational $n$, including its use for approximation and knowledge that the expansion is valid for $\|bx/a\|<1$ | No additional elaboration guidance found. | Yes | Sections 8, 11, 15 | None | Validity number line diagram, Expansion term calculator widget. |
| A21-AF-LO008 | decompose rational functions into partial fractions, with denominators not more complicated than squared linear terms | Examples include forms such as $\frac{2x+3}{(x-5)(x+4)}$. | Partial | Section 11 (Example 4) | Focuses only on partial fractions as a prerequisite step for binomial expansion. | Flowchart linking partial fractions to binomial expansion. |

---

## 4. Learning Objectives

By the end of this lesson, you should be able to:
* Expand expressions of the form $(1+x)^n$ where $n$ is a negative integer or a fraction.
* Manipulate expressions of the form $(a+bx)^n$ into $a^n(1+\frac{b}{a}x)^n$ so they can be expanded.
* Determine the range of values of $x$ for which an infinite binomial expansion is valid (converges).
* Combine multiple binomial expansions by multiplying or adding them together.
* Use partial fractions to split complex algebraic fractions before expanding them.
* Substitute small values of $x$ into expansions to find approximations for roots and fractions.

---

## 5. Compact Prerequisite Recap

To succeed in this A2 topic, you need to be confident with the following prior knowledge:
* **AS1 Binomial Expansion (AS1-SS-LO001):** You should already know how to expand $(a+b)^n$ for positive integers using Pascal's triangle or the ${}^nC_r$ formula.
* **AS1 Index Laws (AS1-AF-LO001):** You must be comfortable with negative and fractional indices (e.g., $\frac{1}{x^2} = x^{-2}$ and $\sqrt[3]{x} = x^{1/3}$).
* **A21 Partial Fractions (A21-AF-LO008):** You need to know how to split algebraic fractions with linear denominators into partial fractions.

---

## 6. Big Picture Explanation

In AS Mathematics, you learned how to expand brackets like $(1+x)^4$. Because the power was a positive integer, the expansion eventually stopped (it was finite). 

In A2 Mathematics, we extend this idea to **any rational power**—meaning the power can be a negative number (like $-2$) or a fraction (like $\frac{1}{2}$). 

When the power is not a positive integer, the expansion **never stops**; it becomes an infinite series. Because it goes on forever, we have to be careful. An infinite sum is only useful if the terms get smaller and smaller, eventually settling on a specific value (converging). If the terms get bigger and bigger, the sum explodes to infinity (diverges). Therefore, we must always state the **validity range**—the specific values of $x$ that make the expansion mathematically safe to use.

This tool is incredibly powerful. It allows us to turn complex curves, square roots, and algebraic fractions into simple polynomial approximations (like $1 + 2x - 3x^2$), which are much easier to integrate, differentiate, or evaluate.

---

## 7. Key Definitions and Notation

* **Rational Number ($n$):** Any number that can be written as a fraction. In this topic, $n$ will often be negative (e.g., $-1, -3$) or fractional (e.g., $\frac{1}{2}, -\frac{1}{3}$).
* **Infinite Series:** A sequence of terms added together that continues forever.
* **Converge:** When an infinite series approaches a finite, specific value.
* **Diverge:** When an infinite series does not approach a specific value (usually growing infinitely large).
* **Modulus Notation ($|x|$):** The absolute size of $x$, ignoring its sign. The inequality $|x| < 1$ is a compact way of writing $-1 < x < 1$.
* **Factorial ($!$):** The product of an integer and all the integers below it. E.g., $3! = 3 \times 2 \times 1 = 6$.

**The General Binomial Formula (given in the formula booklet):**
$$ (1+x)^n = 1 + nx + \frac{n(n-1)}{2!}x^2 + \frac{n(n-1)(n-2)}{3!}x^3 + \dots $$

---

## 8. Core Theory

### Expanding $(1+x)^n$
When the first term in the bracket is a $1$, you can apply the formula directly. 
* **The Rule:** Substitute your power for $n$, and your $x$-term (including any coefficients or signs) for $x$.
* **Conditions:** This expansion is only valid if the magnitude of the $x$-term is strictly less than 1.
* **Validity:** $|x| < 1$.

### Expanding $(a+bx)^n$
The formula **only works if the first term in the bracket is a 1**. If you have a different number, you must factor it out first.
* **The Rule:** Factor out the $a$ from the bracket. Because the whole bracket is raised to the power of $n$, the $a$ that comes out must also be raised to the power of $n$.
$$ (a+bx)^n = \left[ a \left( 1 + \frac{b}{a}x \right) \right]^n = a^n \left( 1 + \frac{b}{a}x \right)^n $$
* **Conditions:** You now expand $(1 + \frac{b}{a}x)^n$ using the standard formula, treating $\frac{b}{a}x$ as your "$x$". Finally, multiply every term by $a^n$.
* **Validity:** The expansion is valid when the new $x$-term is less than 1 in magnitude: $\left| \frac{b}{a}x \right| < 1$, which simplifies to $|x| < \left| \frac{a}{b} \right|$.

[VISUAL PLACEHOLDER: A21BinomialExpansionRationalMMD-001 | Source: AI-proposed teaching enhancement, not present in supplied lesson evidence | Insert from A21_binomial_expansion_rational_mermaid.md | Purpose: Flowchart showing the decision process for expanding (1+x)^n vs (a+bx)^n]

### Determining Validity
Why do we need $|x| < 1$? 
If you look at the expansion, the powers of $x$ increase ($x^2, x^3, x^4 \dots$). 
* If $x = 2$, then $x^2 = 4$, $x^3 = 8$, $x^4 = 16$. The terms get larger, and the infinite sum diverges.
* If $x = 0.5$, then $x^2 = 0.25$, $x^3 = 0.125$, $x^4 = 0.0625$. The terms get smaller, and the infinite sum converges to a true value.

[VISUAL PLACEHOLDER: A21BinomialExpansionRationalSVG-001 | Source: Remote teaching PDF page 5 | Insert from A21_binomial_expansion_rational_svg.md | Purpose: Number line showing the valid region for convergence]

### Combining Expansions
Sometimes you are asked to expand a fraction like $\frac{1+x}{\sqrt{1-x}}$. 
* **The Rule:** Convert this into a product using negative indices: $(1+x)(1-x)^{-1/2}$. 
* Expand the complex bracket(s) up to the required power.
* Multiply the resulting polynomials together.
* **Exam Trick:** If the question asks for the expansion up to $x^2$, you can ignore any multiplications that create $x^3$ or higher. It saves time and prevents errors.
* **Combined Validity:** If you multiply two expansions together, the final result is only valid where **both** original expansions are valid. You must choose the most restrictive (smallest) range.

---

## 9. Visual Asset Integration

*   **A21BinomialExpansionRationalMMD-001**: A flowchart guiding the student on whether to factor out a constant before expanding.
*   **A21BinomialExpansionRationalSVG-001**: A visual number line demonstrating why $|x| < 1$ is required for convergence, showing terms shrinking vs growing.
*   **A21BinomialExpansionRationalSVG-002**: A visual representation of overlapping validity ranges (e.g., $|x| < 1$ and $|x| < 4$) showing that the intersection is the most restrictive range.

---

## 10. Interactive Learning Widgets

[INTERACTIVE PLACEHOLDER: A21BinomialExpansionRationalWidget-001 | Source: AI-proposed teaching enhancement, not present in supplied lesson evidence | Insert from A21_binomial_expansion_rational_widgets.md | Purpose: Interactive calculator showing how quickly terms converge to the true value based on the size of x]

---

## 11. Worked Examples

### Example 1: Negative Power Expansion (Factoring out a constant)
**Source:** Transcript Example 1 / Slide 13

**Question:** Find the first three terms in ascending powers of $x$ of the binomial expansion of $\frac{2}{3 + x^2}$. State the values of $x$ for which the expansion is valid.

**Method:**
**Step 1: Rewrite in index form.**
$$ \frac{2}{3 + x^2} = 2(3 + x^2)^{-2} $$

**Step 2: Factor out the 3 to create a '1' at the start of the bracket.**
$$ 2 \left[ 3 \left( 1 + \frac{x^2}{3} \right) \right]^{-2} $$
Apply the power of $-2$ to the $3$:
$$ 2 \times 3^{-2} \left( 1 + \frac{x^2}{3} \right)^{-2} $$
Since $3^{-2} = \frac{1}{9}$, the expression becomes:
$$ \frac{2}{9} \left( 1 + \frac{x^2}{3} \right)^{-2} $$

**Step 3: Apply the binomial formula to the bracket.**
Here, $n = -2$ and our "$x$" term is $\frac{x^2}{3}$.
$$ \left( 1 + \frac{x^2}{3} \right)^{-2} = 1 + (-2)\left(\frac{x^2}{3}\right) + \frac{(-2)(-3)}{2!}\left(\frac{x^2}{3}\right)^2 $$
Simplify the terms:
* 2nd term: $-\frac{2}{3}x^2$
* 3rd term: The negatives cancel, the 2s cancel. $3 \times \frac{x^4}{9} = \frac{1}{3}x^4$.
$$ = 1 - \frac{2}{3}x^2 + \frac{1}{3}x^4 $$

**Step 4: Multiply by the constant at the front.**
$$ \frac{2}{9} \left( 1 - \frac{2}{3}x^2 + \frac{1}{3}x^4 \right) = \frac{2}{9} - \frac{4}{27}x^2 + \frac{2}{27}x^4 $$

**Step 5: State the validity.**
The expansion was performed on $(1 + \frac{x^2}{3})^{-2}$. Therefore, it is valid when:
$$ \left| \frac{x^2}{3} \right| < 1 $$
$$ |x^2| < 3 $$
$$ -\sqrt{3} < x < \sqrt{3} $$

---
```

```markdown
### Example 2: Fractional Power Expansion
**Source:** Transcript Example 2

**Question:** Find the first four terms in ascending powers of $x$ for the binomial expansion of $\sqrt[3]{8 - 2x}$. State the values of $x$ for which the expansion is valid.

**Method:**
**Step 1: Rewrite in index form.**
$$ (8 - 2x)^{1/3} $$

**Step 2: Factor out the 8.**
$$ \left[ 8 \left( 1 - \frac{2x}{8} \right) \right]^{1/3} = 8^{1/3} \left( 1 - \frac{x}{4} \right)^{1/3} $$
Since $8^{1/3} = 2$, we have:
$$ 2 \left( 1 - \frac{x}{4} \right)^{1/3} $$

**Step 3: Apply the binomial formula.**
Here, $n = \frac{1}{3}$ and our "$x$" term is $-\frac{x}{4}$.
$$ \left( 1 - \frac{x}{4} \right)^{1/3} = 1 + \left(\frac{1}{3}\right)\left(-\frac{x}{4}\right) + \frac{\left(\frac{1}{3}\right)\left(-\frac{2}{3}\right)}{2!}\left(-\frac{x}{4}\right)^2 + \frac{\left(\frac{1}{3}\right)\left(-\frac{2}{3}\right)\left(-\frac{5}{3}\right)}{3!}\left(-\frac{x}{4}\right)^3 $$

**Step 4: Simplify the terms carefully.**
* 2nd term: $-\frac{1}{12}x$
* 3rd term: $\frac{-2/9}{2} \times \frac{x^2}{16} = -\frac{1}{9} \times \frac{x^2}{16} = -\frac{1}{144}x^2$
* 4th term: $\frac{10/27}{6} \times \left(-\frac{x^3}{64}\right) = \frac{5}{81} \times \left(-\frac{x^3}{64}\right) = -\frac{5}{5184}x^3$

So the bracket expands to:
$$ 1 - \frac{1}{12}x - \frac{1}{144}x^2 - \frac{5}{5184}x^3 $$

**Step 5: Multiply by the constant at the front (2).**
$$ 2 \left( 1 - \frac{1}{12}x - \frac{1}{144}x^2 - \frac{5}{5184}x^3 \right) = 2 - \frac{1}{6}x - \frac{1}{72}x^2 - \frac{5}{2592}x^3 $$

**Step 6: State the validity.**
The expansion was performed on $(1 - \frac{x}{4})^{1/3}$.
$$ \left| -\frac{x}{4} \right| < 1 \implies \frac{|x|}{4} < 1 \implies |x| < 4 $$

### Example 3: Combining Binomial Expansions
**Source:** Transcript Example 3

**Question:** Use binomial expansions to show that $\sqrt{\frac{1 + 2x}{4 - x}} \approx \frac{1}{2} + \frac{9}{16}x - \frac{45}{256}x^2$. State the values of $x$ for which this is valid.

**Method:**
**Step 1: Write as a product with index notation.**
$$ \sqrt{\frac{1 + 2x}{4 - x}} = (1 + 2x)^{1/2} (4 - x)^{-1/2} $$

**Step 2: Expand the first bracket up to $x^2$.**
$$ (1 + 2x)^{1/2} = 1 + \left(\frac{1}{2}\right)(2x) + \frac{\left(\frac{1}{2}\right)\left(-\frac{1}{2}\right)}{2!}(2x)^2 $$
$$ = 1 + x - \frac{1}{8}(4x^2) = 1 + x - \frac{1}{2}x^2 $$
*Validity:* $|2x| < 1 \implies |x| < 0.5$

**Step 3: Expand the second bracket up to $x^2$.**
Factor out the 4 first:
$$ (4 - x)^{-1/2} = 4^{-1/2} \left( 1 - \frac{x}{4} \right)^{-1/2} = \frac{1}{2} \left( 1 - \frac{x}{4} \right)^{-1/2} $$
Expand the bracket:
$$ \left( 1 - \frac{x}{4} \right)^{-1/2} = 1 + \left(-\frac{1}{2}\right)\left(-\frac{x}{4}\right) + \frac{\left(-\frac{1}{2}\right)\left(-\frac{3}{2}\right)}{2!}\left(-\frac{x}{4}\right)^2 $$
$$ = 1 + \frac{1}{8}x + \frac{3}{8}\left(\frac{x^2}{16}\right) = 1 + \frac{1}{8}x + \frac{3}{128}x^2 $$
Multiply by the $\frac{1}{2}$ at the front:
$$ \frac{1}{2} + \frac{1}{16}x + \frac{3}{256}x^2 $$
*Validity:* $|-\frac{x}{4}| < 1 \implies |x| < 4$

**Step 4: Multiply the two expansions together.**
$$ \left( 1 + x - \frac{1}{2}x^2 \right) \left( \frac{1}{2} + \frac{1}{16}x + \frac{3}{256}x^2 \right) $$
Only calculate terms up to $x^2$. Ignore $x^3$ and higher.
* Constant: $1 \times \frac{1}{2} = \frac{1}{2}$
* $x$ terms: $\left(1 \times \frac{1}{16}x\right) + \left(x \times \frac{1}{2}\right) = \frac{1}{16}x + \frac{8}{16}x = \frac{9}{16}x$
* $x^2$ terms: $\left(1 \times \frac{3}{256}x^2\right) + \left(x \times \frac{1}{16}x\right) + \left(-\frac{1}{2}x^2 \times \frac{1}{2}\right)$
$$ = \frac{3}{256}x^2 + \frac{16}{256}x^2 - \frac{64}{256}x^2 = -\frac{45}{256}x^2 $$
Result: $\frac{1}{2} + \frac{9}{16}x - \frac{45}{256}x^2$ (as required).

**Step 5: State combined validity.**
The first expansion requires $|x| < 0.5$. The second requires $|x| < 4$. Both must be true, so we take the most restrictive range:
**Valid for $|x| < 0.5$.**

### Example 4: Partial Fractions and Binomial Expansion
**Source:** Transcript "Partial Fractions and Binomial Expansion"

**Question:** Express $\frac{4 - 5x}{(1 + x)(2 - x)}$ as partial fractions. Hence, show that the cubic approximation is $2 - \frac{7}{2}x + \frac{11}{4}x^2 - \frac{25}{8}x^3$.

**Method:**
**Step 1: Partial Fractions.**
$$ \frac{4 - 5x}{(1 + x)(2 - x)} = \frac{A}{1 + x} + \frac{B}{2 - x} $$
$$ 4 - 5x = A(2 - x) + B(1 + x) $$
Let $x = 2$: $4 - 10 = B(3) \implies -6 = 3B \implies B = -2$
Let $x = -1$: $4 + 5 = A(3) \implies 9 = 3A \implies A = 3$
So, $\frac{3}{1 + x} - \frac{2}{2 - x}$.

**Step 2: Rewrite in index form.**
$$ 3(1 + x)^{-1} - 2(2 - x)^{-1} $$

**Step 3: Expand $3(1 + x)^{-1}$.**
$$ 3 \left[ 1 + (-1)x + \frac{(-1)(-2)}{2!}x^2 + \frac{(-1)(-2)(-3)}{3!}x^3 \right] $$
$$ = 3(1 - x + x^2 - x^3) = 3 - 3x + 3x^2 - 3x^3 $$
*(Valid for $|x| < 1$)*

**Step 4: Expand $2(2 - x)^{-1}$.**
Factor out the 2: $2 \left[ 2(1 - \frac{x}{2}) \right]^{-1} = 2 \times 2^{-1} (1 - \frac{x}{2})^{-1} = 1(1 - \frac{x}{2})^{-1}$
$$ 1 \left[ 1 + (-1)\left(-\frac{x}{2}\right) + \frac{(-1)(-2)}{2!}\left(-\frac{x}{2}\right)^2 + \frac{(-1)(-2)(-3)}{3!}\left(-\frac{x}{2}\right)^3 \right] $$
$$ = 1 + \frac{x}{2} + \frac{x^2}{4} + \frac{x^3}{8} $$
*(Valid for $|x| < 2$)*

**Step 5: Subtract the second expansion from the first.**
$$ (3 - 3x + 3x^2 - 3x^3) - \left(1 + \frac{x}{2} + \frac{x^2}{4} + \frac{x^3}{8}\right) $$
* Constant: $3 - 1 = 2$
* $x$: $-3x - 0.5x = -3.5x = -\frac{7}{2}x$
* $x^2$: $3x^2 - 0.25x^2 = 2.75x^2 = \frac{11}{4}x^2$
* $x^3$: $-3x^3 - 0.125x^3 = -3.125x^3 = -\frac{25}{8}x^3$
Result: $2 - \frac{7}{2}x + \frac{11}{4}x^2 - \frac{25}{8}x^3$ (as required).

---

## 12. Common Mistakes and Exam Traps

* **Sign Errors with Negative $x$ Terms:** When substituting a negative term like $(-3x)$ into the formula, students often write $-3x^2$ instead of $(-3x)^2$. Remember that $(-3x)^2 = +9x^2$. The sign alternates in many expansions.
* **Forgetting the Factorial:** The formula divides by $2!$ and $3!$. A common mistake is dividing by $3$ instead of $3!$ (which is $6$).
* **Forgetting to Apply the Power to the Factored Constant:** When expanding $(4+x)^{1/2}$, you must factor out the 4. Students often write $4(1 + \frac{x}{4})^{1/2}$. It must be $4^{1/2}(1 + \frac{x}{4})^{1/2} = 2(1 + \frac{x}{4})^{1/2}$.
* **Incorrect Validity Range:** When combining two expansions, you must state the validity range that satisfies *both*. Always pick the most restrictive inequality (the one closest to zero).
* **Substituting Invalid Values for Approximations:** If an expansion is valid for $|x| < 0.25$, and a question asks you to substitute $x = 3$ to find an approximation, you must state that the substitution is unsuitable because it lies outside the valid range, meaning the series will diverge and the approximation will be wildly inaccurate.

---

## 13. Practice Questions

**Question 1**
Find the binomial expansion of $\frac{1}{(1 + 4x)^2}$ up to and including the term in $x^3$. State the values of $x$ for which the expansion is valid.
*(Source: Transcript "Test Your Understanding" / Edexcel Jan 2010)*

**Question 2**
(a) Express $\frac{2x^2 + 5x - 10}{(x - 1)(x + 2)}$ as partial fractions.
(b) Hence, or otherwise, expand $\frac{2x^2 + 5x - 10}{(x - 1)(x + 2)}$ in ascending powers of $x$, as far as the term in $x^2$. Give each coefficient as a simplified fraction.
*(Source: Transcript Example 9 / C4 June 2010 Q5)*

**Question 3**
(a) Find the binomial expansion of $\sqrt{1 - 8x}$ in ascending powers of $x$ up to and including the term in $x^3$.
(b) Show that, when $x = \frac{1}{100}$, the exact value of $\sqrt{1 - 8x}$ is $\frac{\sqrt{23}}{5}$.
(c) Substitute $x = \frac{1}{100}$ into your binomial expansion to obtain an approximation for $\sqrt{23}$. Give your answer to 5 decimal places.
*(Source: Transcript "Test Your Understanding" / Edexcel Jan 2010)*

---

## 14. Worked Solutions

**Solution to Question 1**
Write as $(1 + 4x)^{-2}$.
Here $n = -2$, "$x$" = $4x$.
$$ 1 + (-2)(4x) + \frac{(-2)(-3)}{2!}(4x)^2 + \frac{(-2)(-3)(-4)}{3!}(4x)^3 $$
$$ = 1 - 8x + \frac{6}{2}(16x^2) + \frac{-24}{6}(64x^3) $$
$$ = 1 - 8x + 48x^2 - 256x^3 $$
Validity: $|4x| < 1 \implies |x| < \frac{1}{4}$.

**Solution to Question 2**
**(a)** Let $\frac{2x^2 + 5x - 10}{(x - 1)(x + 2)} = A + \frac{B}{x - 1} + \frac{C}{x + 2}$
Multiply through: $2x^2 + 5x - 10 = A(x - 1)(x + 2) + B(x + 2) + C(x - 1)$
Compare $x^2$ coefficients: $A = 2$.
Let $x = 1$: $2(1) + 5(1) - 10 = B(3) \implies -3 = 3B \implies B = -1$.
Let $x = -2$: $2(4) + 5(-2) - 10 = C(-3) \implies -12 = -3C \implies C = 4$.
Partial fractions: $2 - \frac{1}{x - 1} + \frac{4}{x + 2}$.

**(b)** Rewrite to ensure the constant in the bracket is positive 1.
$- \frac{1}{x - 1} = \frac{1}{1 - x} = (1 - x)^{-1}$.
$\frac{4}{x + 2} = 4(2 + x)^{-1} = 4 \left[ 2(1 + \frac{x}{2}) \right]^{-1} = 4 \times 2^{-1} (1 + \frac{x}{2})^{-1} = 2(1 + \frac{x}{2})^{-1}$.
Expression is: $2 + (1 - x)^{-1} + 2(1 + \frac{x}{2})^{-1}$.
Expand $(1 - x)^{-1} = 1 + (-1)(-x) + \frac{(-1)(-2)}{2}(-x)^2 = 1 + x + x^2$.
Expand $2(1 + \frac{x}{2})^{-1} = 2 \left[ 1 + (-1)(\frac{x}{2}) + \frac{(-1)(-2)}{2}(\frac{x}{2})^2 \right] = 2(1 - \frac{x}{2} + \frac{x^2}{4}) = 2 - x + \frac{x^2}{2}$.
Add them all together:
$2 + (1 + x + x^2) + (2 - x + \frac{x^2}{2}) = 5 + 0x + \frac{3}{2}x^2 = 5 + \frac{3}{2}x^2$.

**Solution to Question 3**
**(a)** $(1 - 8x)^{1/2} = 1 + (\frac{1}{2})(-8x) + \frac{(\frac{1}{2})(-\frac{1}{2})}{2}(-8x)^2 + \frac{(\frac{1}{2})(-\frac{1}{2})(-\frac{3}{2})}{6}(-8x)^3$
$= 1 - 4x - \frac{1}{8}(64x^2) + \frac{3}{48}(-512x^3)$
$= 1 - 4x - 8x^2 - 32x^3$.

**(b)** Substitute $x = \frac{1}{100}$ into $\sqrt{1 - 8x}$:
$\sqrt{1 - \frac{8}{100}} = \sqrt{\frac{92}{100}} = \frac{\sqrt{4 \times 23}}{10} = \frac{2\sqrt{23}}{10} = \frac{\sqrt{23}}{5}$.

**(c)** Substitute $x = 0.01$ into the expansion:
$1 - 4(0.01) - 8(0.01)^2 - 32(0.01)^3 = 1 - 0.04 - 0.0008 - 0.000032 = 0.959168$.
From (b), $\frac{\sqrt{23}}{5} \approx 0.959168$.
Therefore, $\sqrt{23} \approx 5 \times 0.959168 = 4.79584$.

---

## 15. Exam Technique Notes

* **Show your substitution step:** Examiners award method marks for seeing the unsimplified substitution into the formula. Do not jump straight to the simplified answer in your head. Write out $1 + n(x) + \frac{n(n-1)}{2!}(x)^2$.
* **Calculator Use:** You can use your calculator to check the arithmetic of the coefficients, but you must show the algebraic steps. For approximations, use the `ANS` key on your calculator to substitute values like $x=0.01$ quickly and avoid typing errors.
* **Validity Checks:** If a question asks "Comment on the suitability of the substitution $x=3$", you must calculate the validity range (e.g., $|x| < 0.5$) and explicitly state that $3$ is outside this range, so the series diverges and the approximation is invalid.
* **Partial Fractions:** If you are asked to expand a complex algebraic fraction, it is almost guaranteed you need to split it using partial fractions first. This is a classic synoptic A2 question combining two different syllabus areas.

---

## 16. Syllabus Gap Check

* **A21-SS-LO008 (Rational binomial expansion):** Fully covered. Includes negative and fractional powers, validity ranges, and approximations.
* **A21-AF-LO008 (Partial fractions):** Partially covered. The lesson demonstrates how to use partial fractions as a stepping stone to binomial expansion, which is the standard way these topics are combined in exams. A dedicated lesson on partial fractions covers the initial splitting technique in more depth.
* **Assumptions made:** Assumes students are already comfortable with basic partial fraction decomposition from earlier in the A21 Algebra and Functions topic.

---

## 17. Recommended Enhancements Not in the Evidence

* **A21BinomialExpansionRationalMMD-001:** A flowchart added to help students decide whether they can apply the formula immediately or if they need to factor out a constant first. This addresses a common point of confusion not explicitly diagrammed in the transcript.
* **A21BinomialExpansionRationalSVG-001 & 002:** Visual number lines added to clarify the concept of validity ranges and overlapping inequalities, which is often difficult to grasp purely algebraically.
* **A21BinomialExpansionRationalWidget-001:** An interactive widget proposed to let students change the value of $x$ and see how quickly the polynomial approximation converges to the true value of the function, reinforcing the concept of convergence visually.

---

## 18. Final Student Checklist

* [ ] I can expand $(1+x)^n$ for negative and fractional values of $n$.
* [ ] I can factor out a constant to expand $(a+bx)^n$.
* [ ] I can determine the range of values for which an expansion is valid.
* [ ] I can combine multiple expansions by multiplying them and finding the combined validity range.
* [ ] I can use partial fractions to split an expression before expanding it.
* [ ] I can substitute small values of $x$ into an expansion to approximate roots and fractions.

---
```
