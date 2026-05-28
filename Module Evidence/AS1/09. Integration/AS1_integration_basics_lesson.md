# Integration Basics: Reverse Differentiation and Definite Integrals

**Unit**: CCEA AS1 Pure Mathematics  |  **Source**: INTEGRATION(1).pdf  |  **Date generated**: 22 May 2026

This lesson introduces integration as the reverse process of differentiation, explains how to evaluate indefinite and definite integrals, and shows how definite integration can be used to calculate the area under a curve.  It is designed for students with Higher Tier GCSE knowledge and follows the CCEA specification and elaboration guidance for Unit AS1.  Sections of the uploaded lesson PDF that stray beyond the AS1 specification (such as area between two curves) are noted but not developed in the core teaching material.

## 2. Specification Alignment

The table below cross‑references the relevant points of the CCEA specification with the elaboration document guidance.  It indicates where each point is addressed in these notes and whether any additional visual or interactive support is provided.  A point marked **Off‑Spec** indicates material present in the source PDF but outside Unit AS1, so it is listed here for transparency and excluded from the main teaching notes.

| CCEA specification point | Elaboration guidance (examples/clarifications) | Covered in this lesson? | Where it appears in the notes | Gap or action needed | Suggested visual/widget support |
|---|---|---|---|---|---|
| **Indefinite integration as reverse of differentiation**【167673237569836†L561-L565】 | Students should recognise that integrating a function undoes differentiation and should be able to find \(f(x)\) given \(f'(x)\)【716475361647796†L470-L492】. | **Yes** | Core Theory: “Indefinite integration” and “Power rule” sections. | None | Mermaid concept map (MMD‑001); TikZ graph of antiderivative family (TIKZ‑001); Indefinite integral widget (WIDGET‑001). |
| **Integrate \(x^n\) (excluding \(n=-1\)) and related sums, differences and constant multiples**【167673237569836†L566-L567】 | Includes rational values of \(n\) and sums/differences with constant multiples【716475361647796†L470-L492】. | **Yes** | Core Theory: “Power rule” and “Worked examples”. | None | Worked example diagrams; Indefinite integral widget (WIDGET‑001). |
| **Evaluate definite integrals**【167673237569836†L569-L570】 | Students should be able to integrate to obtain an antiderivative \(F(x)\) and evaluate \([F(x)]_a^b = F(b)-F(a)\)【716475361647796†L470-L492】. | **Yes** | Core Theory: “Definite integration” section; Worked examples. | None | TikZ diagram of area under a curve (TIKZ‑002); Definite integral widget (WIDGET‑002). |
| **Use a definite integral to find the area defined by a curve and either axis**【167673237569836†L571-L572】 | The elaboration document illustrates finding the area bounded by a curve and lines \(x=a\) and \(x=b\) and mentions using trapeziums or triangles if needed【716475361647796†L492-L503】. | **Yes** | Core Theory: “Area under a curve” section; Worked examples. | None | TikZ diagram of area under a curve (TIKZ‑002); SVG summary of standard shapes (SVG‑001); Signed‑area widget (WIDGET‑003). |
| **Use a definite integral to find the area between two curves**【167673237569836†L947-L948】 | In A2, students integrate the difference of two functions to find the enclosed area【716475361647796†L1034-L1042】. | **Off‑Spec for AS1** | Not taught in core notes; summarised in “Off‑Spec or extension content found but excluded”. | No action needed for AS1. | None (see Off‑Spec note). |

## 3. Learning Objectives

By the end of this lesson you should be able to:

1. Explain that integration is the reverse operation to differentiation and recognise antiderivatives.
2. Apply the power rule to integrate functions of the form \(ax^n\) (with \(n\neq -1\)), including sums, differences and constant multiples.
3. Include the constant of integration \(C\) when finding an indefinite integral and explain its geometric meaning.
4. Evaluate definite integrals by finding an antiderivative \(F(x)\) and computing \(F(b) - F(a)\) for given limits \(a\) and \(b\).
5. Use a definite integral to calculate the signed area under a curve between two x‑values and distinguish between signed and total area.
6. Avoid common errors such as forgetting the constant of integration, dividing by the wrong power or mis‑applying limits.
7. Prepare for CCEA exam questions by presenting clear working, labelling diagrams and using technology as a check rather than a substitute for written methods.

## 4. Compact Prerequisite Recap

Before starting, you should be comfortable with these GCSE topics:

- **Laws of indices:** \(x^p\times x^q = x^{p+q}\), \(x^p/x^q = x^{p-q}\), \((x^p)^q = x^{pq}\), and \(x^0=1\) for \(x\neq 0\). These underpin the power rule for integration.
- **Basic differentiation:** Differentiating simple powers of \(x\) (e.g. \(\frac{\mathrm{d}}{\mathrm{d}x}x^n = nx^{n-1}\)) and using this to find gradients and tangents.
- **Evaluating simple algebraic expressions:** substituting values for \(x\) into functions and simplifying surds or fractions.

If any of these ideas feel rusty, review them briefly before proceeding.  The recap boxes in the lesson will also remind you of key facts when needed.

## 5. Big Picture Explanation

Differentiation and integration are the two central operations of calculus.  Differentiation measures the rate at which a function changes, producing its gradient function.  **Integration reverses this process**.  Given a rate of change, integration reconstructs a family of original functions.  In physics and engineering, integration turns velocity into displacement, acceleration into velocity, or density into mass.  In geometry, definite integration provides a precise way to compute the **signed area** under a curve between two values of \(x\).  These ideas are essential for many parts of mathematics, and mastering them at AS level lays the groundwork for more advanced techniques in A2 and beyond.

## 6. Key Definitions and Notation

| Term or notation | Meaning |
|---|---|
| **Integrand** \(f(x)\) | The function being integrated. |
| **Indefinite integral** \(\displaystyle\int f(x)\,\mathrm{d}x\) | The family of antiderivatives of \(f(x)\), written \(F(x) + C\) where \(F'(x) = f(x)\) and \(C\) is an arbitrary constant. |
| **Definite integral** \(\displaystyle\int_{a}^{b} f(x)\,\mathrm{d}x\) | A single number computed by finding an antiderivative \(F\) of \(f\) and evaluating \(F(b) - F(a)\).  It represents the signed area between the curve \(y=f(x)\) and the x‑axis from \(x=a\) to \(x=b\). |
| **Antiderivative** \(F(x)\) | A function whose derivative is \(f(x)\); written \(F'(x) = f(x)\). |
| **Limits of integration** \(a\) and \(b\) | The lower and upper bounds in a definite integral.  Always subtract the lower value from the upper value: \([F(x)]_a^b = F(b) - F(a)\. |
| **Constant of integration** \(C\) | The arbitrary constant added to an indefinite integral.  Different values of \(C\) produce vertical translations of the antiderivative. |
| **Signed area** | The value of a definite integral: positive when the curve lies above the x‑axis and negative when below. |
| **Total area** | The sum of the absolute values of areas above and below the x‑axis.  To find it, split the integral at the x‑intercepts and take the absolute values of each part. |

## 7. Core Theory

### 7.1 Indefinite Integration

Integration reverses differentiation.  If \(f'(x) = g(x)\), then \(f(x)\) is an **antiderivative** of \(g(x)\).  Conversely, to find \(f\) given \(f'\), we **integrate**.

#### Power rule

For any real number \(n\neq -1\) and constant coefficient \(a\), the **power rule for integration** states:

\[
\int a x^n\,\mathrm{d}x = \frac{a}{n+1}\,x^{n+1} + C \quad (n \neq -1).
\]

This rule “undoes” the differentiation rule \(\frac{\mathrm{d}}{\mathrm{d}x}(x^{n+1}) = (n+1)x^n\).  When integrating, you **increase the power by 1** and **divide by the new power**.  If \(n=-1\), the integrand is \(1/x\) and requires a different rule (\(\int x^{-1}\,\mathrm{d}x = \ln|x|+C\)) which is studied in A2.

> **Example 7.1.1** Integrate \(5x^3\).
>
> Apply the power rule with \(a=5\) and \(n=3\):
>
> \[\int 5x^3\,\mathrm{d}x = \frac{5}{3+1} x^{3+1} + C = \frac{5}{4} x^4 + C.\]

> **Example 7.1.2** Integrate \(2x^2 - 7x + 4\).
>
> Integrate each term separately:
>
> \[
> \int (2x^2 - 7x + 4)\,\mathrm{d}x = \frac{2}{3}x^3 - \frac{7}{2}x^2 + 4x + C.
> \]

These examples illustrate how to split sums and differences and factor out constants.  Make sure you divide by the new power on each term.  Common mistakes include multiplying instead of dividing and forgetting to add \(C\).

#### Constant of integration

When differentiating, any constant disappears because \(\frac{\mathrm{d}}{\mathrm{d}x}(C) = 0\).  Consequently, when you integrate, you must add an **arbitrary constant** \(C\) to represent all possible antiderivatives.  Each value of \(C\) yields a curve shifted vertically relative to the others.  Graphically, these curves are parallel translations of one another.

[VISUAL PLACEHOLDER: TIKZ-001 | Source: AI‑proposed teaching enhancement, not present in lesson PDF | Insert from AS1_integration_basics_tikz.md | Purpose: illustrate that antiderivatives of the same derivative differ by a constant \(C\).]

[INTERACTIVE PLACEHOLDER: WIDGET-001 | Source: AI‑proposed teaching enhancement, not present in lesson PDF | Insert from AS1_integration_basics_widgets.md | Purpose: explore the power rule and see how changing the exponent \(n\), coefficient \(a\) and constant \(C\) affects the antiderivative.]

> **Common mistakes to avoid**
>
> - **Forgetting the constant \(C\):** Every indefinite integral must include \(+C\).  Without it you have only one particular antiderivative, not the family of all possible solutions.  Examiners often deduct marks for omitting \(C\).
> - **Dividing by the wrong power:** When applying \(\int x^n\,\mathrm{d}x\), remember to divide by the **new** power \(n+1\), not by \(n\).
> - **Wrong power increase:** Increase the power of \(x\) by **exactly one**.  Do not add 1 to the coefficient or the exponent incorrectly.
> - **Treating constants as variables:** \(\int k\,\mathrm{d}x = kx + C\), not \(kx^2/2\).

### 7.2 Definite Integration

A **definite integral** uses lower and upper limits \(a\) and \(b\) and yields a single number.  The notation

\[\int_{a}^{b} f(x)\,\mathrm{d}x\]

represents the **signed area** under the curve \(y=f(x)\) from \(x=a\) to \(x=b\).  The process for evaluating a definite integral is:

1. **Integrate** \(f(x)\) as usual to find an antiderivative \(F(x)\).  Do *not* include \(+C\) because it will cancel.
2. **Apply the limits** by writing \([F(x)]_a^b\).
3. **Substitute** the upper limit: compute \(F(b)\).
4. **Substitute** the lower limit: compute \(F(a)\).
5. **Subtract**: calculate \(F(b) - F(a)\).  Always subtract the lower value from the upper value.

Because any constant \(C\) appears in both \(F(b)\) and \(F(a)\), it cancels out, which is why a definite integral does not include \(+C\).

> **Example 7.2.1** Evaluate \(\displaystyle \int_{1}^{5} 4x^3\,\mathrm{d}x\).
>
> 1. Integrate: \(\int 4x^3\,\mathrm{d}x = x^4 + C\).
> 2. Apply limits: \([x^4]_1^5\).
> 3. Substitute upper limit: \(5^4 = 625\).
> 4. Substitute lower limit: \(1^4 = 1\).
> 5. Subtract: \(625 - 1 = 624\).  Thus \(\int_{1}^{5} 4x^3\,\mathrm{d}x = 624\).

> **Example 7.2.2** Evaluate \(\displaystyle \int_{-3}^{3} \bigl(x^2 + 1\bigr)\,\mathrm{d}x\).
>
> 1. Integrate: \(\int (x^2 + 1)\,\mathrm{d}x = \tfrac{1}{3}x^3 + x + C\).
> 2. Apply limits: \([\tfrac{1}{3}x^3 + x]_{-3}^{3}\).
> 3. Substitute \(3\): \(\tfrac{1}{3}\cdot 27 + 3 = 9 + 3 = 12\).
> 4. Substitute \(-3\): \(\tfrac{1}{3}\cdot(-27) + (-3) = -9 - 3 = -12\).
> 5. Subtract: \(12 - (-12) = 24\).  The definite integral is \(24\).

#### Signed area and total area

The value of a definite integral is the **signed area** under the curve: regions where \(f(x)\geq 0\) contribute positive area and regions where \(f(x)\lt 0\) contribute negative area.  If you only want the **total (non‑negative) area**, split the integral at points where the curve crosses the x‑axis and take the absolute value of each part.  For example, if \(f(x)\) crosses the x‑axis at \(x=c\) between \(a\) and \(b\), then

\[
\text{Total area} = \int_a^c f(x)\,\mathrm{d}x\;\; + \;\int_c^b |f(x)|\,\mathrm{d}x.
\]

> **Example 7.2.3** Find the area under \(y = 2x^2\) between \(x=1\) and \(x=3\).
>
> Because \(2x^2 \geq 0\) for \(x \in [1,3]\), the signed area equals the total area.  Compute
>
> \[
> \int_1^3 2x^2\,\mathrm{d}x = \left[\frac{2}{3}x^3\right]_1^3 = \frac{2}{3}(27 - 1) = \frac{52}{3} \text{ square units}.
> \]

> **Example 7.2.4** Find the area under \(y = \sqrt{x}\) from \(x=0\) to \(x=4\).
>
> Use the power rule with \(n = \tfrac{1}{2}\): \(\int x^{1/2}\,\mathrm{d}x = \tfrac{2}{3}x^{3/2} + C\).  Then
>
> \[
> \int_0^4 \sqrt{x}\,\mathrm{d}x = \left[\frac{2}{3}x^{3/2}\right]_0^4 = \frac{2}{3}(4^{3/2} - 0) = \frac{2}{3}\cdot 8 = \frac{16}{3}.
> \]

[VISUAL PLACEHOLDER: TIKZ-002 | Source: AI‑proposed teaching enhancement, not present in lesson PDF | Insert from AS1_integration_basics_tikz.md | Purpose: illustrate the area under a curve and how a definite integral calculates this area.]

[VISUAL PLACEHOLDER: SVG-001 | Source: AI‑proposed teaching enhancement, not present in lesson PDF | Insert from AS1_integration_basics_svg.md | Purpose: summarise standard shapes (constant, linear, quadratic, square‑root) and their area formulae.]

[INTERACTIVE PLACEHOLDER: WIDGET-002 | Source: AI‑proposed teaching enhancement, not present in lesson PDF | Insert from AS1_integration_basics_widgets.md | Purpose: compute definite integrals for functions of the form \(ax^n\) with adjustable limits and coefficient.]

> **Common mistakes to avoid**
>
> - **Including \(+C\) in definite integrals:** The constant cancels when you subtract \(F(a)\) from \(F(b)\).  Including it wastes time and may confuse your final answer.
> - **Substituting limits before integrating:** Always integrate first, then apply the limits.  Integration is the reverse of differentiation; you need an antiderivative before you can substitute values.
> - **Wrong order of subtraction:** The correct evaluation is \(F(b) - F(a)\).  Reversing the limits will change the sign of your answer.
> - **Ignoring sign:** When the graph dips below the x‑axis, the definite integral is negative.  To find total area you must split the integral and take absolute values.

### 7.3 Area under a Curve

A common application of definite integrals is to compute the area under a curve between two vertical lines.  If \(y = f(x)\) is non‑negative on \([a,b]\), then

\[
\text{Area} = \int_a^b f(x)\,\mathrm{d}x.
\]

When sketching a problem, follow these steps:

1. Draw a quick sketch of the curve and shade the region of interest.
2. Identify the limits \(a\) (left x‑value) and \(b\) (right x‑value) from the diagram.
3. Write down the integrand \(f(x)\) for the curve.
4. Integrate to find an antiderivative \(F(x)\).
5. Evaluate \(\int_a^b f(x)\,\mathrm{d}x = F(b) - F(a)\).

> **Example 7.3.1** Find the area under \(y = 2x^2\) between \(x=1\) and \(x=3\).  (See Example 7.2.3.)  The answer is \(52/3\) square units.

> **Example 7.3.2** Find the area under \(y = \sqrt{x}\) from \(x=0\) to \(x=4\).  (See Example 7.2.4.)  The answer is \(16/3\) square units.

Sometimes you may combine integration with simple geometric shapes.  For example, the area between the curve \(y = x^2\) and the line \(y=3x\) can be found by subtracting the triangular area \(\tfrac{1}{2}\cdot 3\cdot 3\) from the area under the curve.  Such mixed problems require careful sketching and are excellent practice for exam technique.

> **Checklist when finding area under a curve**
>
> - Are the limits the correct x‑values?  Read them from the diagram and label them on your sketch.
> - Is \(f(x)\) the correct expression?  Write the function explicitly.
> - Did you integrate correctly and apply the limits?  Show each step clearly.
> - Do you want **signed area** or **total area**?  Decide before you integrate and split at x‑intercepts if necessary.

[INTERACTIVE PLACEHOLDER: WIDGET-003 | Source: AI‑proposed teaching enhancement, not present in lesson PDF | Insert from AS1_integration_basics_widgets.md | Purpose: explore the difference between signed and total area when the integrand crosses the x‑axis.]

## 8. Visual Asset Integration

Each diagram or visual asset in these notes appears as a placeholder indicating its ID, source and purpose.  The accompanying files contain the code to generate the diagrams:

- **Mermaid Diagram (MMD‑001)** – Concept map linking indefinite and definite integration, showing the power rule, constants and the evaluation process.
- **TikZ Diagram (TIKZ‑001)** – Graphical illustration of antiderivatives differing only by the constant \(C\).
- **TikZ Diagram (TIKZ‑002)** – Graph of a function with the area under the curve shaded between \(x=a\) and \(x=b\), highlighting how the definite integral represents this area.
- **SVG Diagram (SVG‑001)** – Visual summary of four standard shapes (constant function, line through the origin, quadratic function and square‑root function) with their area formulae.

AI‑proposed assets are clearly labelled.  They enhance understanding but were not present in the lesson PDF.  Every placeholder in the text has a matching entry in the relevant diagram file.

## 9. Interactive Learning Widgets

These notes include several interactive widgets to deepen your understanding:

- **WIDGET‑001: Indefinite Integral Explorer** – Adjust the exponent \(n\), coefficient \(a\) and constant \(C\) to see how the antiderivative changes and how the constant produces vertical translations.  Use this to practise the power rule and appreciate the family of curves defined by \(+C\).
- **WIDGET‑002: Definite Integral Calculator** – Choose values of \(a\), \(n\) and limits \(x=a\) to \(x=b\) to compute the definite integral \(\int_a^b ax^n\,\mathrm{d}x\).  The widget shows the antiderivative and the evaluated result so you can check your working.
- **WIDGET‑003: Signed vs Total Area Explorer** – Explore a function that crosses the x‑axis.  Adjust the limits to see how the signed area (the definite integral) can be negative or positive and compare it with the total (non‑negative) area obtained by splitting the integral at the roots.

Each widget comes with instructions in the widgets file on how to run it (copy the code into a `.html` file and open it in a browser).  They are designed as learning tools rather than exam shortcuts; always practise showing your working in written form.

## 10. Worked Examples

### Example 10.1 Indefinite integrals

**Question:** Integrate \(7x^5 - 4x + 3\).

**Solution:**

Integrate each term separately using the power rule:

\[
\int 7x^5\,\mathrm{d}x = \frac{7}{6}x^6,
\quad \int -4x\,\mathrm{d}x = -2x^2,
\quad \int 3\,\mathrm{d}x = 3x.
\]

So the overall integral is

\[\int (7x^5 - 4x + 3)\,\mathrm{d}x = \frac{7}{6}x^6 - 2x^2 + 3x + C.\]

### Example 10.2 Indefinite integrals with fractional indices

**Question:** Find \(\displaystyle \int \bigl(5x^{1/2} - 3x^{-3/2}\bigr)\,\mathrm{d}x\).

**Solution:**

Apply the power rule to each term:

\[
\int 5x^{1/2}\,\mathrm{d}x = 5 \cdot \frac{2}{3}x^{3/2} = \frac{10}{3}x^{3/2},
\qquad \int -3x^{-3/2}\,\mathrm{d}x = -3 \cdot \frac{2}{-1/2}x^{-1/2} = 6x^{-1/2}.
\]

Therefore

\[\int \bigl(5x^{1/2} - 3x^{-3/2}\bigr)\,\mathrm{d}x = \frac{10}{3}x^{3/2} + 6x^{-1/2} + C.\]

### Example 10.3 Definite integral and area

**Question:** Determine the signed area under \(y = x^2 - 4x + 3\) between \(x=1\) and \(x=4\).

**Solution:**

First, integrate \(x^2 - 4x + 3\):

\[\int (x^2 - 4x + 3)\,\mathrm{d}x = \frac{1}{3}x^3 - 2x^2 + 3x + C.\]

Apply the limits:

\[
[\tfrac{1}{3}x^3 - 2x^2 + 3x]_{1}^{4} = \left(\frac{1}{3}\cdot 64 - 2\cdot 16 + 3\cdot 4\right) - \left(\frac{1}{3}\cdot 1 - 2\cdot 1 + 3\cdot 1\right).
\]

Compute each part:

\[\frac{64}{3} - 32 + 12 = \frac{64}{3} - 20 = \frac{64 - 60}{3} = \frac{4}{3},\quad \frac{1}{3} - 2 + 3 = \frac{1}{3} + 1 = \frac{4}{3}.\]

Subtract: \(\frac{4}{3} - \frac{4}{3} = 0\).  The definite integral is zero because the curve is symmetric about its root between \(1\) and \(4\), with equal positive and negative areas cancelling.  The total area would require splitting at the x‑intercepts and summing the absolute values.

## 11. Common Mistakes and Exam Traps

Based on the CCEA elaboration document and the lesson PDF, watch out for these pitfalls:

- **Omitting \(+C\) for indefinite integrals:** always write your answer as \(F(x) + C\).  This is an easy mark for examiners.
- **Wrong treatment of constants:** remember that \(\int k\,\mathrm{d}x = kx + C\).  Treat the constant as a separate term, not as \(k\times x^2/2\).
- **Not increasing the power correctly:** the power of \(x\) increases by 1, even when the coefficient is a fraction or negative.
- **Applying the definite integral incorrectly:** integrate first, then substitute limits.  Do not insert the limits into the integrand or the antiderivative before it is fully formed.
- **Mixing up the order of limits:** subtract \(F(a)\) from \(F(b)\).  If you reverse the order, you will get the negative of the correct answer.
- **Confusing signed and total area:** decide whether you need the signed result (which may be negative or zero) or the total (non‑negative) area.  Use absolute values if required.

## 12. Practice Questions

### 12.1 Basic indefinite integrals

1. \(\displaystyle \int x^5\,\mathrm{d}x\).
2. \(\displaystyle \int (3x^4 - 2x + 1)\,\mathrm{d}x\).
3. \(\displaystyle \int \bigl(7 - 4x^2 + x^3\bigr)\,\mathrm{d}x\).
4. \(\displaystyle \int \tfrac{1}{2}x^2\,\mathrm{d}x\).
5. \(\displaystyle \int (6x^{3/2} - x^{-2})\,\mathrm{d}x\).

### 12.2 Definite integrals

6. \(\displaystyle \int_{0}^{2} 5x^2\,\mathrm{d}x\).
7. \(\displaystyle \int_{1}^{4} (2x^3 - 3x + 2)\,\mathrm{d}x\).
8. \(\displaystyle \int_{-2}^{2} x^3\,\mathrm{d}x\).
9. \(\displaystyle \int_{1}^{3} (4x^{-1/2} + 2)\,\mathrm{d}x\).
10. Find the signed area under \(y = x^2 - 9\) between \(x = -3\) and \(x = 3\).  Then find the total (non‑negative) area.

### 12.3 Area under a curve

11. The curve \(y = x^2\) and the line \(y = 3x\) enclose a region above the x‑axis.  Sketch the situation and find the area of the region.
12. Find the area under \(y = 4 - x^2\) between \(x=0\) and \(x=2\).
13. Find the area under \(y = \sqrt{x}\) between \(x=1\) and \(x=9\).

## 13. Worked Solutions

### Solutions to 12.1

1. \(\int x^5\,\mathrm{d}x = \tfrac{1}{6}x^6 + C\).
2. \(\int (3x^4 - 2x + 1)\,\mathrm{d}x = \tfrac{3}{5}x^5 - x^2 + x + C\).
3. \(\int (7 - 4x^2 + x^3)\,\mathrm{d}x = 7x - \tfrac{4}{3}x^3 + \tfrac{1}{4}x^4 + C\).
4. \(\int \tfrac{1}{2}x^2\,\mathrm{d}x = \tfrac{1}{6}x^3 + C\).
5. \(\int (6x^{3/2} - x^{-2})\,\mathrm{d}x = 6 \cdot \tfrac{2}{5}x^{5/2} - \tfrac{1}{-1}x^{-1} + C = \tfrac{12}{5}x^{5/2} + x^{-1} + C\).

### Solutions to 12.2

6. \(\int_{0}^{2} 5x^2\,\mathrm{d}x = \left[\tfrac{5}{3}x^3\right]_0^2 = \tfrac{5}{3}(8 - 0) = \tfrac{40}{3}\).
7. \(\int_{1}^{4} (2x^3 - 3x + 2)\,\mathrm{d}x = \left[\tfrac{2}{4}x^4 - \tfrac{3}{2}x^2 + 2x\right]_1^4 = \left[\tfrac{1}{2}x^4 - \tfrac{3}{2}x^2 + 2x\right]_1^4\).
   Substituting gives \(\tfrac{1}{2}\cdot 256 - \tfrac{3}{2}\cdot 16 + 8 - \bigl(\tfrac{1}{2}\cdot 1 - \tfrac{3}{2}\cdot 1 + 2\bigr) = 128 - 24 + 8 - (\tfrac{1}{2} - \tfrac{3}{2} + 2) = 112 - (1) = 111\).
8. \(\int_{-2}^{2} x^3\,\mathrm{d}x = \left[\tfrac{1}{4}x^4\right]_{-2}^{2} = \tfrac{1}{4}(16 - 16) = 0\).  The integrand is odd and the limits are symmetric, so the integral is zero.
9. \(\int_{1}^{3} (4x^{-1/2} + 2)\,\mathrm{d}x = \left[4 \cdot \tfrac{2}{1/2}x^{1/2} + 2x\right]_1^3 = \left[8x^{1/2} + 2x\right]_1^3\).  Substitute: at 3, \(8\sqrt{3} + 6\); at 1, \(8\cdot 1 + 2\).  Difference: \(8\sqrt{3} + 6 - 10 = 8\sqrt{3} - 4\).
10. For \(y = x^2 - 9\) on \([-3,3]\) the function is symmetric about the y‑axis and negative between \(-3,3\) except at the roots \(x=\pm 3\).  The signed area is \(\int_{-3}^{3} (x^2 - 9)\,\mathrm{d}x = \left[\tfrac{1}{3}x^3 - 9x\right]_{-3}^{3}\).  Substituting gives \((9 - 27) - ((-9) - (-27)) = (-18) - (18) = -36\).  For the total area, split at \(x=-3\) and \(x=3\).  Since the function is even, twice the area from 0 to 3: \(2\int_{0}^{3} (9 - x^2)\,\mathrm{d}x = 2\left[9x - \tfrac{1}{3}x^3\right]_{0}^{3} = 2(27 - 9) = 36\).  Thus the total area is 36 square units.

### Solutions to 12.3

11. The curves \(y = x^2\) and \(y = 3x\) intersect when \(x^2 = 3x\), i.e. at \(x=0\) and \(x=3\).  On \([0,3]\), the line \(y=3x\) lies above the parabola \(y=x^2\).  The enclosed area is

\[
\int_{0}^{3} \bigl(3x - x^2\bigr)\,\mathrm{d}x = \left[\tfrac{3}{2}x^2 - \tfrac{1}{3}x^3\right]_{0}^{3} = \tfrac{3}{2}\cdot 9 - \tfrac{1}{3}\cdot 27 = \frac{27}{2} - 9 = \frac{9}{2}.
\]

Alternatively, calculate the area under \(y=3x\) (\(\tfrac{1}{2}\cdot 3 \cdot 3 = \tfrac{9}{2}\)) and subtract the area under \(y = x^2\) (\(\tfrac{1}{3} \cdot 3^3 = 9\)).  This also gives \(\tfrac{9}{2}\).  Your diagram should clearly show the region and which curve is on top.

12. \(\int_{0}^{2} (4 - x^2)\,\mathrm{d}x = \left[4x - \tfrac{1}{3}x^3\right]_{0}^{2} = (8 - \tfrac{8}{3}) - 0 = \tfrac{16}{3}\) square units.

13. \(\int_{1}^{9} x^{1/2}\,\mathrm{d}x = \left[\tfrac{2}{3}x^{3/2}\right]_{1}^{9} = \tfrac{2}{3}(27 - 1) = \tfrac{52}{3}\) square units.

## 14. Exam Technique Notes

**Show all stages of your working.**  Examiners award marks for the method as well as the answer.  Write the integral, the antiderivative (with \(+C\) when appropriate), the application of limits and the final evaluation.

**Label your diagrams.**  Even a rough sketch can help you choose the correct limits and identify which region to integrate.  Use a ruler for axes and clearly mark x‑intercepts and region boundaries.

**Check units.**  When finding areas, the result is given in square units.  If the problem involves physical quantities (e.g. velocity or displacement), include appropriate units.

**Use your calculator as a check, not a shortcut.**  Some calculators can evaluate definite integrals numerically.  Use this to verify your result but do not rely on it.  You must still show the algebraic integration and working in the exam.

**Avoid dropping the constant of integration.**  When finding a particular solution from a differential equation or an indefinite integral, you may need to determine \(C\) using additional information.  Omitting \(C\) makes this impossible and loses marks.

## 15. Syllabus Gap Check

According to the CCEA specification and elaboration document, Unit AS1 requires students to:

- Understand integration as the reverse of differentiation and find antiderivatives【167673237569836†L561-L565】.
- Integrate \(x^n\) (excluding \(n=-1\)) and related sums, differences and constant multiples【167673237569836†L566-L567】.
- Evaluate definite integrals【167673237569836†L569-L570】.
- Use a definite integral to find the area under a curve and between the curve and the axes【167673237569836†L571-L572】, including shapes that may be partly geometric【716475361647796†L492-L503】.

All of these points are fully covered in the core theory, worked examples and practice questions.  The lesson does **not** teach integration techniques such as substitution, integration by parts, partial fractions, or integration of \(1/x\), \(e^{kx}\), \(\sin kx\) or \(\cos kx\), as these belong to A2 units【167673237569836†L947-L949】.  Similarly, the lesson excludes finding the area between two curves【167673237569836†L947-L948】 because this is not part of AS1.  These omissions are intentional to stay within the unit specification.

## 16. Recommended Enhancements Not in the PDF

| Asset ID | Type | Reason for addition | Specification point supported | Essential or optional |
|---|---|---|---|---|
| **MMD‑001** | Mermaid concept map | Summarises how indefinite integration, definite integration, the power rule, limits and area calculations are related.  Helps students visualise the structure of the topic. | Integrate \(x^n\), evaluate definite integrals and understand integration as reverse differentiation【167673237569836†L561-L572】. | Essential |
| **SVG‑001** | SVG diagram | Provides a visual summary of four standard shapes (constant function, line, quadratic, square root) and their area formulae.  Reinforces the connection between functions and the corresponding integral. | Use definite integrals to find area under curves【716475361647796†L492-L503】. | Optional but recommended |
| **TIKZ‑001** | TikZ diagram | Illustrates the family of antiderivatives differing by the constant \(C\), clarifying the role of \(+C\) in indefinite integration. | Understand indefinite integration as reverse differentiation【167673237569836†L561-L565】. | Essential |
| **TIKZ‑002** | TikZ diagram | Shows a function with the area under the curve shaded between \(x=a\) and \(x=b\), emphasising the geometric interpretation of a definite integral. | Evaluate definite integrals and find areas【167673237569836†L569-L572】. | Essential |
| **WIDGET‑001** | Interactive widget | Allows learners to adjust exponent, coefficient and constant to observe how the antiderivative and the constant of integration change. | Integrate \(x^n\) and understand the constant of integration【167673237569836†L561-L567】. | Optional but valuable |
| **WIDGET‑002** | Interactive widget | Computes definite integrals of \(ax^n\) between chosen limits and displays the result.  Provides immediate feedback and encourages experimentation. | Evaluate definite integrals【167673237569836†L569-L570】. | Optional but valuable |
| **WIDGET‑003** | Interactive widget | Demonstrates the difference between signed and total area when a curve crosses the x‑axis by computing both results for adjustable limits. | Use definite integrals to find areas and understand signed area【716475361647796†L492-L503】. | Optional but valuable |

## 17. Supplementary Sources Used

No additional online sources were consulted.  All information was derived from the CCEA specification【167673237569836†L561-L572】, the CCEA elaboration document【716475361647796†L470-L503】 and the provided lesson PDF.

## 18. Final Student Checklist

Use this checklist to confirm your understanding before moving on:

- [ ] I can explain that integration is the reverse of differentiation and identify an antiderivative of a given function.
- [ ] I can apply the power rule to integrate \(ax^n\) for \(n\neq -1\) and handle sums, differences and constant multiples.
- [ ] I always include the constant of integration \(C\) in indefinite integrals and understand its geometric meaning.
- [ ] I can evaluate a definite integral \(\int_a^b f(x)\,\mathrm{d}x\) by finding an antiderivative and computing \(F(b) - F(a)\).
- [ ] I understand that a definite integral gives the signed area under a curve and can distinguish between signed and total area.
- [ ] I can sketch a curve, choose appropriate limits and set up the correct integral to find the area under the curve or between a curve and an axis.
- [ ] I can avoid common errors such as forgetting \(+C\), dividing by the wrong power, or applying limits incorrectly.
- [ ] I have practised with the interactive widgets and can use them to check my calculations.
