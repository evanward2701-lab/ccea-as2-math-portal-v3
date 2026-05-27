# AS1 Integration Basics: Reverse Differentiation and Definite Integrals Lesson Agent Source

## 0. AI-Agent Usage Instructions

This file is a source for teaching, revision, explanation, diagnostics and lesson retrieval. Core lesson content is in Section 5. Diagram assets are in Section 6. Widgets are in Section 7. Use the lesson content before generated enhancement notes. Do not claim AI-proposed assets came from the original PDF. Preserve syllabus gap notes and uncertainty notes. Use UK/CCEA mathematical vocabulary.

## 1. Pack Metadata

```yaml
pack_type: lesson
unit_code: AS1
unit_name: CCEA AS1 Pure Mathematics
topic_slug: "09_integration"
topic_title: "Integration Basics: Reverse Differentiation and Definite Integrals"
source_folder: "/Users/evanward/Documents/AS Portal - New /AS1 Files/09. Integration"
output_file: "/Users/evanward/Documents/AS Portal - New /AS1 Files/00_AGENT_SOURCE_PACKS/09_integration/AS1_integration_basics_agent_source.md"
created_from_files:
  lesson: "AS1_integration_basics_lesson.md"
  questions: null
  solutions: null
  mermaid: "AS1_integration_basics_mermaid.md"
  svg: "AS1_integration_basics_svg.md"
  tikz: "AS1_integration_basics_tikz.md"
  widgets: "AS1_integration_basics_widgets.md"
contains_lesson: true
contains_questions: false
contains_solutions: false
contains_mermaid: true
contains_svg: true
contains_tikz: true
contains_widgets: true
agent_use_cases:
  - teach topic
  - explain examples
  - retrieve definitions
  - retrieve diagrams
  - retrieve widgets
  - diagnose misconceptions
```

## 2. Source File Manifest

| Role | Source file | Lines | Bytes UTF-8 | SHA-256 |
|---|---|---:|---:|---|
| lesson | AS1_integration_basics_lesson.md | 404 | 31781 | `ab811d921116ce7e251e43e44c3298ba246d5dd6d27622d1842e9e40a5c641e6` |
| mermaid | AS1_integration_basics_mermaid.md | 22 | 881 | `670a89da1e55671ca060fdfebe6cbdfdc0c51b2abb7adeb48543af6c62e04c15` |
| svg | AS1_integration_basics_svg.md | 52 | 3287 | `917eeea76ea19c0f9211680b8479bb9f0ed5a06740f2816dab2f9490148acdaa` |
| tikz | AS1_integration_basics_tikz.md | 58 | 2701 | `166059307a86fbcacbb2cf1bda84cd093c89284d3fc0310ef44415f6cc4d2252` |
| widgets | AS1_integration_basics_widgets.md | 254 | 13178 | `16fc17386af92ea3ba4220cd34a9f35489caaeef6ad85049d911868761a3c756` |

## 3. Preservation and Retrieval Map

- Original Markdown is preserved verbatim inside labelled source-content sections.
- Mathematical notation, source labels, question IDs, pack IDs, visual placeholders, code blocks and generated/AI-proposed labels are retained.
- Diagram and widget files are separated by asset type so an AI agent can retrieve them without confusing them with explanatory prose.
- Audit details, warnings, file checksums and ID checks are stored in the companion audit file.

## 4. Source Navigation and Pack Boundaries

- Section 5 contains the core lesson Markdown.
- Section 6 contains Mermaid, SVG and TikZ visual assets in that order.
- Section 7 contains widget/HTML/CSS/JavaScript assets.
- Section 8 gives retrieval notes for downstream AI agents.
- Missing optional/expected roles: questions, solutions

## 5. Core Lesson Content

### Source File Metadata

```yaml
filename: "AS1_integration_basics_lesson.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/09. Integration/AS1_integration_basics_lesson.md"
lines: 404
bytes_utf8: 31781
sha256: "ab811d921116ce7e251e43e44c3298ba246d5dd6d27622d1842e9e40a5c641e6"
```

### Preserved Source Content: AS1_integration_basics_lesson.md

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

## 6. Diagram Assets

## 6.1 Mermaid Assets

### Source File Metadata

```yaml
filename: "AS1_integration_basics_mermaid.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/09. Integration/AS1_integration_basics_mermaid.md"
lines: 22
bytes_utf8: 881
sha256: "670a89da1e55671ca060fdfebe6cbdfdc0c51b2abb7adeb48543af6c62e04c15"
```

### Preserved Source Content: AS1_integration_basics_mermaid.md

# Mermaid Diagrams for AS1 Integration Basics

## MMD-001: Concept map for integration
Source: AI‑proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: MMD-001 | ...]`  
Purpose: Provide a high‑level concept map linking indefinite integration, definite integration, the power rule, constants of integration and areas.

```mermaid
graph TD
  A[Integration] --> B[Indefinite Integration]
  A --> C[Definite Integration]
  B --> B1[Reverse of differentiation]
  B --> B2[Power rule: ∫ x^n dx = x^{n+1}/(n+1) + C (n ≠ −1)]
  B --> B3[Add constant of integration C]
  C --> C1[Uses limits a and b]
  C --> C2[Find antiderivative F(x)]
  C --> C3[Evaluate F(b) − F(a)]
  C --> C4[Represents signed area under curve]
  C --> C5[No constant C needed]
  C4 --> D[Split integral for total area if f(x) crosses x‑axis]
```

## 6.2 SVG Assets

### Source File Metadata

```yaml
filename: "AS1_integration_basics_svg.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/09. Integration/AS1_integration_basics_svg.md"
lines: 52
bytes_utf8: 3287
sha256: "917eeea76ea19c0f9211680b8479bb9f0ed5a06740f2816dab2f9490148acdaa"
```

### Preserved Source Content: AS1_integration_basics_svg.md

# SVG Diagrams for AS1 Integration Basics

## SVG-001: Standard shapes and their area formulae
Source: AI‑proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: SVG-001 | ...]`  
Purpose: Summarise four common functions (constant, linear, quadratic and square‑root) and the formulas for the area under each curve between \(x=0\) and \(x=b\).  This visual cue helps students remember the standard results used when calculating areas under simple curves.

```svg
<svg width="640" height="360" viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg" aria-labelledby="title desc" role="img">
  <title id="title">Standard shapes and areas</title>
  <desc id="desc">Each panel shows a basic function, a shaded region under the curve and the corresponding area formula.</desc>
  <!-- Panel backgrounds -->
  <rect x="10" y="10" width="300" height="160" fill="#f8fbff" stroke="#cccccc"/>
  <rect x="330" y="10" width="300" height="160" fill="#f8fbff" stroke="#cccccc"/>
  <rect x="10" y="190" width="300" height="160" fill="#f8fbff" stroke="#cccccc"/>
  <rect x="330" y="190" width="300" height="160" fill="#f8fbff" stroke="#cccccc"/>
  <!-- Constant function y = k -->
  <text x="20" y="30" font-size="14" font-weight="bold">Constant: y = k</text>
  <rect x="50" y="70" width="200" height="40" fill="#d6eaf8" stroke="none"/>
  <line x1="50" y1="110" x2="250" y2="110" stroke="#555"/>
  <line x1="50" y1="110" x2="50" y2="60" stroke="#555"/>
  <line x1="250" y1="110" x2="250" y2="60" stroke="#555"/>
  <line x1="50" y1="70" x2="250" y2="70" stroke="#2e86c1" stroke-width="2"/>
  <text x="55" y="125" font-size="12">Area = k(b − a)</text>
  <!-- Linear function y = m x -->
  <text x="350" y="30" font-size="14" font-weight="bold">Line: y = m·x</text>
  <polygon points="380,110 580,110 580,60" fill="#d6eaf8" stroke="none"/>
  <line x1="380" y1="110" x2="580" y2="110" stroke="#555"/>
  <line x1="380" y1="110" x2="380" y2="60" stroke="#555"/>
  <line x1="380" y1="110" x2="580" y2="60" stroke="#2e86c1" stroke-width="2"/>
  <text x="385" y="125" font-size="12">Area = ½·m·b²</text>
  <!-- Quadratic function y = a x² -->
  <text x="20" y="210" font-size="14" font-weight="bold">Quadratic: y = a·x²</text>
  <!-- Parabolic region -->
  <path d="M50,330 L250,330 Q150,240 50,330 Z" fill="#d6eaf8" stroke="none"/>
  <line x1="50" y1="330" x2="250" y2="330" stroke="#555"/>
  <line x1="50" y1="330" x2="50" y2="240" stroke="#555"/>
  <line x1="250" y1="330" x2="250" y2="240" stroke="#555"/>
  <path d="M50,330 Q150,240 250,330" fill="none" stroke="#2e86c1" stroke-width="2"/>
  <text x="55" y="345" font-size="12">Area = ⅓·a·b³</text>
  <!-- Square‑root function y = √x -->
  <text x="350" y="210" font-size="14" font-weight="bold">Square‑root: y = √x</text>
  <!-- Square‑root region -->
  <path d="M380,330 L580,330 Q480,240 580,270" fill="#d6eaf8" stroke="none"/>
  <line x1="380" y1="330" x2="580" y2="330" stroke="#555"/>
  <line x1="380" y1="330" x2="380" y2="240" stroke="#555"/>
  <line x1="580" y1="330" x2="580" y2="240" stroke="#555"/>
  <path d="M380,330 Q450,290 580,270" fill="none" stroke="#2e86c1" stroke-width="2"/>
  <text x="385" y="345" font-size="12">Area = ⅔·b^{3/2}</text>
</svg>
```

## 6.3 TikZ Assets

### Source File Metadata

```yaml
filename: "AS1_integration_basics_tikz.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/09. Integration/AS1_integration_basics_tikz.md"
lines: 58
bytes_utf8: 2701
sha256: "166059307a86fbcacbb2cf1bda84cd093c89284d3fc0310ef44415f6cc4d2252"
```

### Preserved Source Content: AS1_integration_basics_tikz.md

# TikZ Diagrams for AS1 Integration Basics

## TIKZ-001: Family of antiderivatives differing by the constant \(C\)
Source: AI‑proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: TIKZ-001 | ...]`  
Purpose: Illustrate that integrating a function produces a family of curves differing only by a constant of integration \(C\).  The example uses \(f'(x)=x^2\), whose antiderivatives are \(F(x)=\tfrac{1}{3}x^3 + C\).

```latex
\begin{tikzpicture}[scale=0.8]
  % Axes
  \draw[->] (-3,0) -- (3.5,0) node[below] {$x$};
  \draw[->] (0,-1) -- (0,4.5) node[left] {$y$};
  % First antiderivative C=0
  \draw[domain=-2:2, smooth, variable=\x, blue, thick] plot (\x, {1/3*\x*\x*\x});
  \node[blue] at (2,1.3) {$C=0$};
  % Second antiderivative C=2
  \draw[domain=-2:2, smooth, variable=\x, red, thick] plot (\x, {1/3*\x*\x*\x + 2});
  \node[red] at (-2.2,3.2) {$C=2$};
  % Third antiderivative C=-1
  \draw[domain=-2:2, smooth, variable=\x, dashed, purple] plot (\x, {1/3*\x*\x*\x - 1});
  \node[purple] at (2.2,-0.8) {$C=-1$};
  % Annotation
  \node[align=left] at (4.1,2.7) {\small $\displaystyle F(x)=\frac{1}{3}x^3 + C$\\ $\;\,f'(x)=x^2$};
  \draw[->] (3.8,2.3) -- (2.4,1.2);
\end{tikzpicture}
```

## TIKZ-002: Area under a curve between \(x=a\) and \(x=b\)
Source: AI‑proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: TIKZ-002 | ...]`  
Purpose: Show the geometric interpretation of a definite integral as the signed area under a curve between two limits.  The example uses \(f(x)=\tfrac{x^2}{4}+1\) with limits \(a=1\) and \(b=3\).

```latex
\begin{tikzpicture}[scale=1.0]
  % Axes
  \draw[->] (0,0) -- (4.5,0) node[below] {$x$};
  \draw[->] (0,0) -- (0,3) node[left] {$y$};
  % Function curve f(x) = x^2/4 + 1
  \draw[domain=0:4, smooth, variable=\x, blue, thick] plot (\x, {\x*\x/4 + 1});
  % Shaded area between x=1 and x=3
  \begin{scope}
    \fill[cyan!30] (1,0) -- plot[domain=1:3, smooth] (\x, {\x*\x/4 + 1}) -- (3,0) -- cycle;
  \end{scope}
  % Draw the curve again over the shaded region for clarity
  \draw[domain=1:3, smooth, variable=\x, blue, thick] plot (\x, {\x*\x/4 + 1});
  % Mark the limits a and b on the x-axis
  \draw (1,0) node[below] {$a$} -- (1,0.05);
  \draw (3,0) node[below] {$b$} -- (3,0.05);
  % Dotted vertical lines from the curve to the x-axis
  \draw[dashed] (1, {1*1/4 + 1}) -- (1,0);
  \draw[dashed] (3, {3*3/4 + 1}) -- (3,0);
  % Annotation
  \node at (2,2.4) {$y = \tfrac{x^2}{4} + 1$};
  \node[align=left] at (4.7,1.2) {\small $\displaystyle \int_{a}^{b} f(x)\,\mathrm{d}x$\\$= F(b)-F(a)$};
  \draw[->] (4.5,1.3) -- (3.3,1.8);
\end{tikzpicture}
```

## 7. Interactive Widgets

## 7.1 Widget Assets

### Source File Metadata

```yaml
filename: "AS1_integration_basics_widgets.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/09. Integration/AS1_integration_basics_widgets.md"
lines: 254
bytes_utf8: 13178
sha256: "16fc17386af92ea3ba4220cd34a9f35489caaeef6ad85049d911868761a3c756"
```

### Preserved Source Content: AS1_integration_basics_widgets.md

# Interactive Widgets for AS1 Integration Basics

## WIDGET-001: Indefinite Integral Explorer
Source: AI‑proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[INTERACTIVE PLACEHOLDER: WIDGET-001 | ...]`  
Purpose: Allow students to adjust the exponent \(n\), coefficient \(a\) and constant \(C\) for a simple power‑function integrand \(a x^n\) and immediately see the corresponding antiderivative.  This helps cement the power rule and demonstrates how the constant of integration shifts the curve vertically.

### Learning Goal
To practise applying the power rule \(\int a x^n\,\mathrm{d}x = \tfrac{a}{n+1}x^{n+1} + C\) (when \(n\neq -1\)) and to understand how different values of \(C\) produce a family of antiderivatives.

### Controls
- **Exponent \(n\):** number input (default 2) controlling the power of \(x\) in the integrand.  Values close to \(-1\) are allowed except exactly \(-1\) because \(\int x^{-1}\,\mathrm{d}x\) uses the logarithmic rule.
- **Coefficient \(a\):** number input (default 1) controlling the multiplier of \(x^n\).
- **Constant \(C\):** number input (default 0) controlling the vertical shift of the antiderivative.

### Live Outputs
- **Antiderivative formula:** displayed as plain text.  When \(n\neq -1\), the output is \(\frac{a}{n+1}x^{n+1} + C\).  When \(n=-1\), the output uses the logarithmic form \(a\ln|x| + C\).
- The output updates instantly when any control changes.

### What to Notice
- Observe that increasing \(n\) increases the exponent in the antiderivative by one and adjusts the coefficient accordingly.
- Changing \(a\) scales the entire antiderivative proportionally.
- Changing \(C\) shifts the antiderivative graph up or down without altering its shape.  This demonstrates why the constant of integration represents a family of curves.

### Exam Connection
This widget reinforces the mechanics of the power rule and the necessity of including \(+C\) in every indefinite integral.  It does not replace written working, but it provides quick feedback while practising.

### How to Run
Copy the code below into a file named `indefinite_integral_explorer.html` and open it in a web browser.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Indefinite Integral Explorer</title>
  <style>
    body { font-family: sans-serif; line-height: 1.4; margin: 20px; max-width: 600px; }
    label { display: block; margin-top: 10px; }
    input { width: 80px; }
    .result { margin-top: 15px; padding: 10px; background: #f0f8ff; border: 1px solid #cce; }
    .warning { color: #a00; }
  </style>
</head>
<body>
  <h2>Indefinite Integral Explorer</h2>
  <p>Adjust the exponent <code>n</code>, coefficient <code>a</code> and constant <code>C</code> for the integrand <em>a·x<sup>n</sup></em>.  The antiderivative is shown below.</p>
  <label>Exponent n: <input type="number" id="exp" step="0.5" value="2"></label>
  <label>Coefficient a: <input type="number" id="coef" step="0.5" value="1"></label>
  <label>Constant C: <input type="number" id="const" step="0.5" value="0"></label>
  <div id="output" class="result"></div>
  <script>
    function update() {
      var n = parseFloat(document.getElementById('exp').value);
      var a = parseFloat(document.getElementById('coef').value);
      var c = parseFloat(document.getElementById('const').value);
      var out = document.getElementById('output');
      if (isNaN(n) || isNaN(a) || isNaN(c)) {
        out.innerHTML = '<span class="warning">Please enter numeric values.</span>';
        return;
      }
      if (Math.abs(n + 1) < 1e-8) {
        // n = -1 case
        out.innerHTML = 'Antiderivative: ' + a.toFixed(3) + '·ln|x| + ' + c.toFixed(3) + ' + constant';
      } else {
        var newPower = n + 1;
        var coeff = a / (n + 1);
        // Format coefficient: hide trailing .000 when integer
        var coeffStr = Math.abs(coeff - Math.round(coeff)) < 1e-6 ? Math.round(coeff).toString() : coeff.toFixed(3);
        out.innerHTML = 'Antiderivative: ' + coeffStr + '·x<sup>' + newPower + '</sup> + ' + c.toFixed(3);
      }
    }
    document.getElementById('exp').addEventListener('input', update);
    document.getElementById('coef').addEventListener('input', update);
    document.getElementById('const').addEventListener('input', update);
    update();
  </script>
</body>
</html>
```

## WIDGET-002: Definite Integral Calculator
Source: AI‑proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[INTERACTIVE PLACEHOLDER: WIDGET-002 | ...]`  
Purpose: Compute the definite integral \(\int_a^b a x^n\,\mathrm{d}x\) and display both the antiderivative and the evaluated result.  This helps students practise applying limits correctly and checking their answers.

### Learning Goal
To practise evaluating definite integrals of simple power functions, reinforce the procedure \(F(b) - F(a)\), and understand the difference between signed area and the constant of integration.

### Controls
- **Exponent \(n\):** number input (default 2) controlling the power of \(x\).  Values close to \(-1\) are allowed except exactly \(-1\) (logarithmic case).
- **Coefficient \(a\):** number input (default 1).
- **Lower limit \(a\):** number input (default 0).
- **Upper limit \(b\):** number input (default 2).  Ensure \(b\geq a\) for a positive orientation (the widget accepts \(b<a\) but will produce a negative signed area).

### Live Outputs
- **Antiderivative:** The formula \(F(x)\) obtained by integrating \(a x^n\).  Displayed as plain text.
- **Definite integral:** The computed value \(F(b) - F(a)\) (or \(a\ln\frac{b}{a}\) when \(n=-1\)).

### What to Notice
- Increasing \(n\) increases the power in the antiderivative and changes how quickly \(F(x)\) grows.
- Reversing the limits produces the negative of the area, emphasising the order of subtraction \(F(b) - F(a)\).
- If the integrand is negative on the interval, the definite integral will be negative.

### Exam Connection
This widget mirrors the steps required in an exam: integrate first, then substitute limits.  Use it to verify your calculations, but always write full solutions on paper.

### How to Run
Copy the code below into a file named `definite_integral_calculator.html` and open it in a web browser.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Definite Integral Calculator</title>
  <style>
    body { font-family: sans-serif; line-height: 1.4; margin: 20px; max-width: 700px; }
    label { display: block; margin-top: 10px; }
    input { width: 80px; }
    .result { margin-top: 15px; padding: 10px; background: #f9f9f9; border: 1px solid #ccc; }
    .warning { color: #a00; }
  </style>
</head>
<body>
  <h2>Definite Integral Calculator</h2>
  <p>Compute <em>∫<sub>a</sub><sup>b</sup> a·x<sup>n</sup> dx</em>.  The antiderivative and the evaluated result are shown below.</p>
  <label>Exponent n: <input type="number" id="n2" step="0.5" value="2"></label>
  <label>Coefficient a: <input type="number" id="a2" step="0.5" value="1"></label>
  <label>Lower limit a: <input type="number" id="lower" step="0.5" value="0"></label>
  <label>Upper limit b: <input type="number" id="upper" step="0.5" value="2"></label>
  <div id="out2" class="result"></div>
  <script>
    function update2() {
      var n = parseFloat(document.getElementById('n2').value);
      var a = parseFloat(document.getElementById('a2').value);
      var lower = parseFloat(document.getElementById('lower').value);
      var upper = parseFloat(document.getElementById('upper').value);
      var out = document.getElementById('out2');
      if ([n,a,lower,upper].some(function(v){ return isNaN(v); })) {
        out.innerHTML = '<span class="warning">Enter numeric values.</span>';
        return;
      }
      var antiderivative;
      var result;
      if (Math.abs(n + 1) < 1e-8) {
        antiderivative = a.toFixed(3) + '·ln|x| + C';
        if (lower <= 0 || upper <= 0) {
          result = 'Error: limits must be positive for ln|x|.';
        } else {
          result = a * Math.log(Math.abs(upper / lower));
          result = 'Result: ' + result.toFixed(6);
        }
      } else {
        var newPow = n + 1;
        var coeff = a / newPow;
        var coeffStr = Math.abs(coeff - Math.round(coeff)) < 1e-6 ? Math.round(coeff).toString() : coeff.toFixed(6);
        antiderivative = coeffStr + '·x^' + newPow + ' + C';
        var F = function(x) { return coeff * Math.pow(x, newPow); };
        var val = F(upper) - F(lower);
        result = 'Result: ' + val.toFixed(6);
      }
      out.innerHTML = '<strong>Antiderivative:</strong> ' + antiderivative + '<br><strong>' + result + '</strong>';
    }
    document.getElementById('n2').addEventListener('input', update2);
    document.getElementById('a2').addEventListener('input', update2);
    document.getElementById('lower').addEventListener('input', update2);
    document.getElementById('upper').addEventListener('input', update2);
    update2();
  </script>
</body>
</html>
```

## WIDGET-003: Signed vs Total Area Explorer
Source: AI‑proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[INTERACTIVE PLACEHOLDER: WIDGET-003 | ...]`  
Purpose: Compare the signed area (the value of the definite integral) and the total area (sum of absolute areas) for a function that crosses the x‑axis.  The integrand chosen is \(f(x) = x^2 - 4\), which is negative between \(-2\) and \(2\) and positive outside this interval.

### Learning Goal
To understand that a definite integral gives the net (signed) area and that to find the total area you must split the integral at the roots and take absolute values.  This widget provides a numerical demonstration.

### Controls
- **Lower limit \(a\):** number input (default \(-3\)) controlling the left boundary of integration.
- **Upper limit \(b\):** number input (default \(3\)) controlling the right boundary of integration.
  The widget does not require \(a < b\) but will compute accordingly.

### Live Outputs
- **Signed area:** computed exactly using the antiderivative of \(x^2 - 4\), namely \(\tfrac{1}{3}x^3 - 4x\), as \(F(b) - F(a)\).
- **Total area (approx):** estimated numerically by sampling \(|f(x)|\) at many points between \(a\) and \(b\) and summing trapezoids.  This produces a good approximation of the absolute area.

### What to Notice
- When the interval \([a,b]\) lies entirely above or below the x‑axis, the signed and total areas coincide (up to sign).
- When the interval includes the roots \(x=\pm 2\), the signed area may cancel to zero even though there is a significant total area.
- Adjusting the limits illustrates how splitting the integral at the roots and taking absolute values is necessary for total area calculations.

### Exam Connection
Understanding the difference between signed and total area is vital for interpreting definite integrals and answering exam questions about areas.  This widget offers an interactive way to see why splitting at the x‑axis matters.

### How to Run
Copy the code below into a file named `signed_vs_total_area_explorer.html` and open it in a web browser.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Signed vs Total Area Explorer</title>
  <style>
    body { font-family: sans-serif; line-height: 1.4; margin: 20px; max-width: 700px; }
    label { display: block; margin-top: 10px; }
    input { width: 80px; }
    .result { margin-top: 15px; padding: 10px; background: #eaf2f8; border: 1px solid #bcd; }
    .warning { color: #a00; }
  </style>
</head>
<body>
  <h2>Signed vs Total Area Explorer</h2>
  <p>Function: <em>f(x) = x² – 4</em>.  Adjust the limits to see the difference between the signed area (∫ f(x) dx) and the total area (∫ |f(x)| dx).</p>
  <label>Lower limit a: <input type="number" id="lower3" step="0.5" value="-3"></label>
  <label>Upper limit b: <input type="number" id="upper3" step="0.5" value="3"></label>
  <div id="out3" class="result"></div>
  <script>
    function f(x) { return x*x - 4; }
    function F(x) { return (x*x*x)/3 - 4*x; }
    function update3() {
      var a = parseFloat(document.getElementById('lower3').value);
      var b = parseFloat(document.getElementById('upper3').value);
      var out = document.getElementById('out3');
      if (isNaN(a) || isNaN(b)) {
        out.innerHTML = '<span class="warning">Enter numeric limits.</span>';
        return;
      }
      var signed = F(b) - F(a);
      // Numerical integration of |f(x)| using the trapezium rule
      var n = 1000;
      var h = (b - a) / n;
      var total = 0;
      for (var i = 0; i < n; i++) {
        var x0 = a + i * h;
        var x1 = x0 + h;
        total += (Math.abs(f(x0)) + Math.abs(f(x1))) * h / 2;
      }
      out.innerHTML = '<strong>Signed area:</strong> ' + signed.toFixed(6) + '<br>' +
                      '<strong>Total area (approx):</strong> ' + total.toFixed(6);
    }
    document.getElementById('lower3').addEventListener('input', update3);
    document.getElementById('upper3').addEventListener('input', update3);
    update3();
  </script>
</body>
</html>
```

## 8. Agent Retrieval Notes

Use Section 5 for teaching sequence and explanation. Use Sections 6 and 7 as asset banks. When an asset is marked as suggested, AI-proposed, generated, or uncertain, preserve that provenance in downstream responses.
