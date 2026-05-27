# AS1 Differentiation Questions Agent Source

## 0. AI-Agent Usage Instructions

This file is a source for question retrieval, solution lookup, mark-scheme interpretation, diagnostics and targeted practice. Questions are in Section 5. Solutions and mark schemes are in Section 6. Diagram assets are in Section 7. Widgets are in Section 8. Keep questions and solutions separate unless explicitly asked to combine them. Preserve official mark-scheme labels, uncertainty notes and generated-solution labels. Use UK/CCEA mathematical vocabulary.

## 1. Pack Metadata

```yaml
pack_type: question
unit_code: AS1
unit_name: CCEA AS1 Pure Mathematics
topic_slug: "08_differentiation_questions"
topic_title: "Differentiation"
source_folder: "/Users/evanward/Documents/AS Portal - New /AS1 Files/08. Differentiation-Questions"
output_file: "/Users/evanward/Documents/AS Portal - New /AS1 Files/00_AGENT_SOURCE_PACKS/08_differentiation_questions/AS1_differentiation_questions_agent_source.md"
created_from_files:
  lesson: null
  questions: "AS1_differentiation_questions.md"
  solutions: "AS1_differentiation_solutions.md"
  mermaid: "AS1_differentiation_mermaid.md"
  svg: "AS1_differentiation_svg.md"
  tikz: "AS1_differentiation_tikz.md"
  widgets: "AS1_differentiation_widgets.md"
contains_lesson: false
contains_questions: true
contains_solutions: true
contains_mermaid: true
contains_svg: true
contains_tikz: true
contains_widgets: true
agent_use_cases:
  - retrieve questions
  - retrieve official solutions
  - interpret mark schemes
  - retrieve diagrams
  - retrieve widgets
  - diagnose misconceptions
  - generate targeted practice from source patterns
```

## 2. Source File Manifest

| Role | Source file | Lines | Bytes UTF-8 | SHA-256 |
|---|---|---:|---:|---|
| questions | AS1_differentiation_questions.md | 179 | 6605 | `90515aebe190f409200d6cb1189d9b7677e531562135ce0e02a1129ee4de1c5d` |
| solutions | AS1_differentiation_solutions.md | 189 | 12811 | `7b8b006e16701c791337c285503cd0e37b584454af89452bd489446d10f0d1e0` |
| mermaid | AS1_differentiation_mermaid.md | 6 | 246 | `9d7e10ebb70f7146700026046e0541915d185e2f02aaa3aeaf3194e228b5cd3a` |
| svg | AS1_differentiation_svg.md | 6 | 193 | `fcd9244b5ce2b125c808c2c6c0c2e04de3589d9f2a1d73e4d6aa29b87a5e4f8f` |
| tikz | AS1_differentiation_tikz.md | 33 | 1831 | `ce850282d7eb046b72f673df22b5139f9df29cc9656d84aa287455aee0b7174b` |
| widgets | AS1_differentiation_widgets.md | 6 | 246 | `55edd7dd2f4f95cd508c12ea3cfd238fe61336a34cb58416bc6f9af6b2f60d6f` |

## 3. Preservation and Retrieval Map

- Original Markdown is preserved verbatim inside labelled source-content sections.
- Mathematical notation, source labels, question IDs, pack IDs, visual placeholders, code blocks and generated/AI-proposed labels are retained.
- Diagram and widget files are separated by asset type so an AI agent can retrieve them without confusing them with explanatory prose.
- Audit details, warnings, file checksums and ID checks are stored in the companion audit file.

## 4. Source Navigation and Pack Boundaries

- Section 5 contains the question Markdown.
- Section 6 contains the solutions / mark-scheme Markdown.
- Section 7 contains Mermaid, SVG and TikZ visual assets in that order.
- Section 8 contains widget/HTML/CSS/JavaScript assets.
- Section 9 gives retrieval notes for downstream AI agents.
- Missing optional/expected roles: lesson

## 5. Questions

### Source File Metadata

```yaml
filename: "AS1_differentiation_questions.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/08. Differentiation-Questions/AS1_differentiation_questions.md"
lines: 179
bytes_utf8: 6605
sha256: "90515aebe190f409200d6cb1189d9b7677e531562135ce0e02a1129ee4de1c5d"
```

### Preserved Source Content: AS1_differentiation_questions.md

# Differentiation Question Pack

**Unit:** CCEA AS1&nbsp;Pure Mathematics  
**Questions PDF:** AS1_Differentiation_questions.pdf  
**Solutions / Mark Scheme PDF:** AS1_Differentiation_solutions.pdf  
**Date generated:** 22&nbsp;May&nbsp;2026  
**Pack ID:** AS1Differentiation

---

## 1. Source Document Map

| Document type | Filename | Page count | Role in this pack |
|---|---|---:|---|
| Questions PDF | AS1_Differentiation_questions.pdf | 17 | Source of questions, marks, diagrams and wording |
| Mark scheme PDF | AS1_Differentiation_solutions.pdf | 21 | Source of official solutions and marks |

---

## 2. Specification Alignment

The CCEA specification for AS1 Pure Mathematics lists differentiation as a key topic.  Relevant learning outcomes include interpreting the derivative as a rate of change or gradient, differentiating power functions, finding equations of tangents and normals, locating and classifying stationary points, and using calculus to optimise quantities【694213144107686†L590-L616】.  The questions in this pack address these outcomes as shown below.

| Specification area | Relevant learning outcome | Question numbers testing it | Notes on coverage | Gaps or comments |
|---|---|---|---|---|
| Derivatives of power functions | Differentiate functions of the form \(x^n\) and combinations using linearity【694213144107686†L590-L616】 | Q001–Q004 | All four questions involve differentiating polynomials. | — |
| Tangents and normals | Use the derivative to find the gradient of a curve at a point and hence the equation of a tangent or normal【694213144107686†L590-L616】 | Q001 (a)(ii), Q004 | Q001 finds a tangent, Q004 finds points where the gradient has a specified value. | — |
| Stationary points | Find stationary points of functions, classify them using the second derivative or sign of the first derivative【694213144107686†L590-L616】 | Q002 | Question 2 requires finding stationary points and determining their nature. | Only one question addresses classification. |
| Optimisation | Apply calculus to solve optimisation problems【694213144107686†L590-L616】 | Q001 (b), Q003 | Q001(b) considers when a profit function is increasing; Q003 uses perimeter constraints and calculus to maximise area. | — |

---

## 3. Question Index

| Pack question | Original reference | Questions PDF page | Marks | Subtopic | Diagram? | AI visual suggested? | Matching solution |
|---:|---|---:|---:|---|---|---|---|
| **Q001** | C1 January 2010 Question 7 | 2 | 12 | Differentiation, tangents, optimisation | No | No | Mark scheme p.2 (official solution) |
| **Q002** | C1 June 2010 Question 5 | 2 | 9 | Stationary points of a quartic | No | A sign‐table diagram could help, but none is essential | Official solution not found; generated solution provided |
| **Q003** | C1 June 2010 Question 8 | 3 | 11 | Perimeter constraint; maximise area | Yes (sports field with semicircles) | No | Mark scheme p.3 (official solution) |
| **Q004** | C1 January 2011 Question 1 | 3 | 7 | Cubic derivative and specified gradient | No | No | Mark scheme p.3 (official solution) |

---

## 4. Questions

### Question 1: C1 January 2010 Question 7

**Question ID:** AS1DifferentiationQ001  
**Source:** Questions PDF p.2  
**Original reference:** C1 January 2010 Question 7  
**Marks:** 12  
**Subtopic:** Differentiate a cubic, find a tangent, and determine when a profit function is increasing.

#### Question

**(a)**  A curve has equation \(y = 2x^3 - 4x^2 - 3\).

1. **(i)** Find \(\displaystyle \frac{dy}{dx}\). \([3]\)
2. **(ii)** Hence find the equation of the tangent to the curve at the point where \(x=2\). Give your answer in the form \(y = mx + c\). \([4]\)

**(b)**  The profit \(P\), in thousands of pounds, that a company expects to make from producing and selling \(t\) thousand units of a product is given by

\[
P = 16\sqrt{t} + \frac{27}{t}, \qquad 0 < t < 10.
\]

By differentiating \(P\) with respect to \(t\), determine the range of values of \(t\) for which the company’s profit is increasing.  \([5]\)

#### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

### Question 2: C1 June 2010 Question 5

**Question ID:** AS1DifferentiationQ002  
**Source:** Questions PDF p.2  
**Original reference:** C1 June 2010 Question 5  
**Marks:** 9  
**Subtopic:** Stationary points of a quartic polynomial.

#### Question

The function is given by

\[
y = x^4 - 2x^3.
\]

1. **(i)** Find \(\displaystyle \frac{dy}{dx}\). \([2]\)
2. **(ii)** Find the \(x\)-coordinates of the stationary points of the curve and determine the nature of each stationary point. \([7]\)

#### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

### Question 3: C1 June 2010 Question 8

**Question ID:** AS1DifferentiationQ003  
**Source:** Questions PDF p.3  
**Original reference:** C1 June 2010 Question 8  
**Marks:** 11  
**Subtopic:** Perimeter constraint and optimisation of area.

#### Question

A sports field is to be built in the shape shown in **Fig.&nbsp;2** below.  The field consists of a rectangle with semicircular ends.

* The length of the rectangle is \(l\) metres.
* Each semicircle has radius \(r\) metres.

**Fig.&nbsp;2** illustrates the dimensions.

[VISUAL PLACEHOLDER: AS1DifferentiationQ003TikZ-001 | Source: Questions PDF p.3 | Insert from AS1_differentiation_tikz.md | Purpose: labelled diagram of the sports field with length \(l\) and radius \(r\).]

1. **(i)** Write down an expression for the perimeter \(P\) of the field in terms of \(l\) and \(r\). \([1]\)
2. **(ii)** The perimeter of the sports field is \(400\text{ m}\).  Using your answer to part (i), show that
\[
l = 200 - \pi r.
\]
\([2]\)
3. **(iii)** Using calculus, show that the area of the rectangular part of the field is a maximum when \(r = \frac{100}{\pi}\) m and \(l = 100\) m.  Explain how you know that your values give a maximum. \([8]\)

#### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

### Question 4: C1 January 2011 Question 1

**Question ID:** AS1DifferentiationQ004  
**Source:** Questions PDF p.3  
**Original reference:** C1 January 2011 Question 1  
**Marks:** 7  
**Subtopic:** Cubic derivative and solving for a specified gradient.

#### Question

Consider the curve defined by

\[
y = 5x + 4x^3.
\]

1. **(i)** Find \(\displaystyle \frac{dy}{dx}\). \([2]\)
2. **(ii)** Find the coordinates of the points on the curve where the gradient of the tangent is equal to 8. \([5]\)

#### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

## 6. Solutions and Mark Scheme

### Source File Metadata

```yaml
filename: "AS1_differentiation_solutions.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/08. Differentiation-Questions/AS1_differentiation_solutions.md"
lines: 189
bytes_utf8: 12811
sha256: "7b8b006e16701c791337c285503cd0e37b584454af89452bd489446d10f0d1e0"
```

### Preserved Source Content: AS1_differentiation_solutions.md

# Differentiation Solutions and Mark Scheme Pack

**Unit:** CCEA AS1&nbsp;Pure Mathematics  
**Questions PDF:** AS1_Differentiation_questions.pdf  
**Solutions / Mark Scheme PDF:** AS1_Differentiation_solutions.pdf  
**Date generated:** 22&nbsp;May&nbsp;2026  
**Pack ID:** AS1Differentiation

---

## 1. Mark Scheme Notation Guide

The official mark schemes use a variety of mark codes.  While the exact definitions can vary slightly between papers, the following conventions are commonly used:

- **B** – a basic or independent mark for stating a correct fact or result.
- **M** – a method mark for a justified or appropriate method.
- **A** – an accuracy mark, often awarded for a correct final answer following a method.
- **E** or **MW** – a mark for explaining working, laying out reasoning or providing a valid comment.

The exact meaning of each mark code should be interpreted according to the awarding body’s mark scheme conventions.  Marks listed below are those visible in the supplied mark scheme and are transcribed as faithfully as possible.

---

## 2. Question‑to‑Solution Map

| Pack question | Original reference | Question page | Solution page | Total marks (question) | Marks shown in mark scheme | Match confidence | Notes |
|---:|---|---:|---:|---:|---:|---|---|
| **Q001** | C1 January 2010 Question 7 | 2 | 2 | 12 | 12 | High | Official mark scheme present. |
| **Q002** | C1 June 2010 Question 5 | 2 | — | 9 | — | Low | Official solution not located in the supplied mark scheme; a generated solution is provided. |
| **Q003** | C1 June 2010 Question 8 | 3 | 3 | 11 | 11 | High | Official mark scheme present. |
| **Q004** | C1 January 2011 Question 1 | 3 | 3 | 7 | 7 | High | Official mark scheme present. |

---

## 3. Fully Worked Mark Scheme Solutions

### Solution to Question 1: C1 January 2010 Question 7

**Question ID:** AS1DifferentiationQ001  
**Source:** Mark scheme PDF p.2  
**Original reference:** C1 January 2010 Question 7  
**Related question:** See `AS1_differentiation_questions.md`, Question 1  
**Marks available:** 12  
**Match confidence:** High

#### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | Differentiate \(y = 2x^3 - 4x^2 - 3\) to obtain \(\displaystyle \frac{dy}{dx} = 6x^2 - 8x\). | M | 1 | Uses the power rule on each term. |
| 2 | Substitute \(x = 2\): \(m = 6(2)^2 - 8(2) = 24 - 16 = 8\). | A | 1 | Finds the gradient at \(x=2\). |
| 3 | Evaluate \(y\) at \(x=2\): \(y = 2(2)^3 - 4(2)^2 - 3 = 16 - 16 - 3 = -3\). | A | 1 | Finds the point of tangency \((2,-3)\). |
| 4 | Use \(y - y_1 = m(x - x_1)\) with \((x_1,y_1) = (2,-3)\) and \(m=8\) to get \(y + 3 = 8(x - 2)\), hence \(y = 8x - 19\). | A | 1 | Forms the tangent equation. |
| 5 | Express \(P\) in index form: \(P = 16t^{1/2} + 27t^{-1}\). | M | 1 | Rewrites the profit function for differentiation. |
| 6 | Differentiate: \(\displaystyle \frac{dP}{dt} = 8t^{-1/2} - 27t^{-2}\). | M | 1 | Applies the power rule. |
| 7 | Set \(\frac{dP}{dt} > 0\) and form the inequality \(8t^{-1/2} - 27t^{-2} > 0\). | M | 1 | States condition for increasing profit. |
| 8 | Multiply through by \(t^2\) (valid since \(t>0\)) to obtain \(8t^{3/2} > 27\). | M | 1 | Clears negative powers. |
| 9 | Rearrange to \(t^{3/2} > \frac{27}{8}\) and then \(t > \left(\frac{27}{8}\right)^{2/3} = \frac{9}{4}\). | A | 1 | Solves for \(t\). |
| 10 | Conclude that the profit is increasing when \(\displaystyle \frac{9}{4} < t < 10\). | A | 1 | Interprets the inequality in the context \(0 < t < 10\). |

#### Final Answer

The derivative of the curve is \(\displaystyle \frac{dy}{dx} = 6x^2 - 8x\).  The tangent at \(x=2\) has equation \(y = 8x - 19\).  Differentiating the profit function gives \(\frac{dP}{dt} = 8t^{-1/2} - 27t^{-2}\).  The profit is increasing when \(t > 9/4\) (and \(t < 10\) by the domain restriction).

#### What the Examiner Wanted

- For part (a) a straightforward application of the power rule to differentiate a cubic and then the use of the tangent equation \(y - y_1 = m(x - x_1)\).
- Accuracy marks were awarded for correctly substituting \(x=2\), computing the gradient, evaluating \(y\), and forming the linear equation in simplest form.
- In part (b) the examiner expected candidates to rewrite the profit function with fractional powers, differentiate correctly, and then form an inequality to determine when the derivative is positive.  Careful algebra was required to solve \(8t^{3/2} > 27\).
- Many students lost marks for algebraic slips when handling negative powers or for omitting the domain restriction \(0 < t < 10\).

#### Alternative Method

No significant alternative method was given in the official mark scheme.  Candidates may, however, have squared both sides after a suitable substitution to avoid fractional exponents.

---

### Solution to Question 2: C1 June 2010 Question 5

**Question ID:** AS1DifferentiationQ002  
**Source:** Mark scheme PDF – official solution not located  
**Original reference:** C1 June 2010 Question 5  
**Related question:** See `AS1_differentiation_questions.md`, Question 2  
**Marks available:** 9  
**Match confidence:** Low

#### Official Mark Scheme Solution

Official solution not found in the supplied mark scheme PDF.

#### Generated Solution (not from official mark scheme)

The solution below is provided to support independent study.  It is not part of the official mark scheme.

| Step | Working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | The derivative of \(y = x^4 - 2x^3\) is \(\displaystyle \frac{dy}{dx} = 4x^3 - 6x^2\). | M | – | Applies the power rule. |
| 2 | Set the derivative equal to zero: \(4x^3 - 6x^2 = 0\).  Factorising gives \(2x^2(2x - 3) = 0\). | M | – | Finds stationary points by solving \(dy/dx = 0\). |
| 3 | The stationary points occur at \(x = 0\) (a repeated root) and \(x = \tfrac{3}{2}\). | A | – | Lists critical values. |
| 4 | Compute \(y\) at the stationary points:  \\  \(x=0\): \(y = 0\).  \\  \(x = \tfrac{3}{2}\): \(y = \left(\tfrac{3}{2}\right)^4 - 2\left(\tfrac{3}{2}\right)^3 = \tfrac{81}{16} - 2 \times \tfrac{27}{8} = \tfrac{81}{16} - \tfrac{54}{8} = -\tfrac{27}{16}\). | M | – | Evaluates the curve at each critical point. |
| 5 | Find the second derivative: \(\displaystyle \frac{d^2y}{dx^2} = 12x^2 - 12x\). | M | – | For classifying stationary points. |
| 6 | At \(x = \tfrac{3}{2}\), \(d^2y/dx^2 = 12\left(\tfrac{9}{4}\right) - 12\left(\tfrac{3}{2}\right) = 27 - 18 = 9 > 0\); hence \(\left(\tfrac{3}{2}, -\tfrac{27}{16}\right)\) is a local minimum. | A | – | Uses the second derivative test. |
| 7 | At \(x = 0\), \(d^2y/dx^2 = 0\), so the second derivative test is inconclusive.  Examining the sign of \(dy/dx\) either side of \(x=0\) shows that the derivative changes sign from negative to positive, confirming that \((0,0)\) is a point of inflection. | E | – | Completes the classification with a sign‐analysis argument. |

#### Final Answer

The derivative is \(\displaystyle \frac{dy}{dx} = 4x^3 - 6x^2\).  Stationary points occur at \(x=0\) and \(x=\tfrac{3}{2}\).  The point \((\tfrac{3}{2}, -\tfrac{27}{16})\) is a local minimum because the second derivative is positive there.  The point \((0,0)\) is a point of inflection because the derivative changes sign but the second derivative vanishes.

#### What the Examiner Wanted

- Correct differentiation and factorisation of \(4x^3 - 6x^2\) to find the stationary points.
- Evaluation of the function at each critical value to obtain exact coordinates.
- Use of the second derivative test or sign‐chart method to classify the nature of each stationary point.
- A common error is to assume that a zero second derivative at \(x=0\) necessarily implies a maximum or minimum; the sign of \(dy/dx\) must be considered.

---

### Solution to Question 3: C1 June 2010 Question 8

**Question ID:** AS1DifferentiationQ003  
**Source:** Mark scheme PDF p.3  
**Original reference:** C1 June 2010 Question 8  
**Related question:** See `AS1_differentiation_questions.md`, Question 3  
**Marks available:** 11  
**Match confidence:** High

#### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | The perimeter is \(P = 2l + 2\pi r\). | B | 1 | States perimeter as the sum of two straight sides and two semicircular arcs. |
| 2 | Given \(P=400\), substitute to obtain \(400 = 2l + 2\pi r\) and rearrange to \(l = 200 - \pi r\). | M | 2 | Uses the perimeter condition to express \(l\) in terms of \(r\). |
| 3 | The area of the rectangular portion is \(A = 2lr\). | B | 1 | Recognises that the width of the rectangle is the diameter \(2r\), so its area is \(l\times 2r\). |
| 4 | Substitute \(l = 200 - \pi r\) to get \(A = 2(200 - \pi r)r = 400r - 2\pi r^2\). | M | 1 | Expresses area solely in terms of \(r\). |
| 5 | Differentiate: \(\displaystyle \frac{dA}{dr} = 400 - 4\pi r\). | M | 1 | Applies the power rule. |
| 6 | Set \(\frac{dA}{dr} = 0\) and solve: \(400 - 4\pi r = 0\) giving \(r = \frac{100}{\pi}\). | A | 1 | Finds the critical value of \(r\). |
| 7 | Substitute into \(l = 200 - \pi r\) to obtain \(l = 100\). | A | 1 | Determines the corresponding \(l\). |
| 8 | The second derivative is \(\displaystyle \frac{d^2A}{dr^2} = -4\pi\), which is negative, so the stationary value is a maximum. | E | 2 | Justifies that the area is maximised for these dimensions. |

#### Final Answer

The perimeter condition gives \(l = 200 - \pi r\).  The area of the rectangular part is \(A = 2lr = 400r - 2\pi r^2\).  Differentiating shows that \(A\) is maximised when \(r = \frac{100}{\pi}\) and the corresponding rectangle length is \(l = 100\) m.  The second derivative is negative at this point, confirming a maximum.

#### What the Examiner Wanted

- A correct expression for the perimeter and careful algebra to isolate \(l\) in terms of \(r\).
- Recognition that only the rectangular area (not the semicircular areas) needed to be maximised, yielding \(A = 2lr\).
- Differentiation of \(A\) with respect to \(r\), identification of the critical value and proof it gives a maximum.
- A common mistake was to include the area of the semicircles, which leads to a different expression and an incorrect optimum.

#### Alternative Method

No alternative solution was provided in the official mark scheme.  An equivalent approach could involve expressing \(l\) in terms of \(P\) and \(r\), finding the product \(lr\) directly and maximising using calculus.

---

### Solution to Question 4: C1 January 2011 Question 1

**Question ID:** AS1DifferentiationQ004  
**Source:** Mark scheme PDF p.3  
**Original reference:** C1 January 2011 Question 1  
**Related question:** See `AS1_differentiation_questions.md`, Question 4  
**Marks available:** 7  
**Match confidence:** High

#### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | For \(y = 5x + 4x^3\), the derivative is \(\displaystyle \frac{dy}{dx} = 5 + 12x^2\). | M | 1 | Differentiates term by term. |
| 2 | Set \(\frac{dy}{dx} = 8\) to find points where the gradient is 8: \(5 + 12x^2 = 8\). | M | 1 | Equates the derivative to the required gradient. |
| 3 | Rearrange to \(12x^2 = 3\) giving \(x^2 = \tfrac{1}{4}\) and hence \(x = \pm \tfrac{1}{2}\). | A | 2 | Solves the quadratic equation for \(x\). |
| 4 | Substitute back into \(y\) to find the coordinates:  \\  For \(x = \tfrac{1}{2}\), \(y = 5\times\tfrac{1}{2} + 4\left(\tfrac{1}{8}\right) = 3\).  \\  For \(x = -\tfrac{1}{2}\), \(y = 5\times (-\tfrac{1}{2}) + 4\left(-\tfrac{1}{8}\right) = -3\). | A | 2 | Determines the points \((\tfrac{1}{2},3)\) and \((-\tfrac{1}{2},-3)\). |

#### Final Answer

The derivative of the curve is \(\displaystyle \frac{dy}{dx} = 5 + 12x^2\).  Setting this equal to 8 gives \(x = \pm \tfrac{1}{2}\).  Substituting into \(y = 5x + 4x^3\) yields the points \(\left(\tfrac{1}{2},3\right)\) and \(\left(-\tfrac{1}{2},-3\right)\).

#### What the Examiner Wanted

- A clear derivative using the power rule, followed by equating the derivative to 8.
- Accurate algebra to solve \(5 + 12x^2 = 8\) and identification of both positive and negative roots.
- Correct substitution back into the original function to find the corresponding \(y\) values.
- Candidates often lost marks by ignoring the negative solution or by substituting into \(dy/dx\) rather than \(y\) when finding the coordinates.

#### Alternative Method

No alternative method was provided in the mark scheme.  Any equivalent algebraic solution that finds the same two points would earn full marks.

## 7. Diagram Assets

## 7.1 Mermaid Assets

### Source File Metadata

```yaml
filename: "AS1_differentiation_mermaid.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/08. Differentiation-Questions/AS1_differentiation_mermaid.md"
lines: 6
bytes_utf8: 246
sha256: "9d7e10ebb70f7146700026046e0541915d185e2f02aaa3aeaf3194e228b5cd3a"
```

### Preserved Source Content: AS1_differentiation_mermaid.md

# Mermaid Diagrams for AS1 Differentiation

**Pack ID:** AS1Differentiation

No mermaid diagrams were required for this question pack.  The questions do not involve flowcharts or process diagrams that would benefit from a Mermaid representation.

## 7.2 SVG Assets

### Source File Metadata

```yaml
filename: "AS1_differentiation_svg.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/08. Differentiation-Questions/AS1_differentiation_svg.md"
lines: 6
bytes_utf8: 193
sha256: "fcd9244b5ce2b125c808c2c6c0c2e04de3589d9f2a1d73e4d6aa29b87a5e4f8f"
```

### Preserved Source Content: AS1_differentiation_svg.md

# SVG Diagrams for AS1 Differentiation

**Pack ID:** AS1Differentiation

No standalone SVG diagrams were required for this question pack.  All necessary diagrams are provided in the TikZ file.

## 7.3 TikZ Assets

### Source File Metadata

```yaml
filename: "AS1_differentiation_tikz.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/08. Differentiation-Questions/AS1_differentiation_tikz.md"
lines: 33
bytes_utf8: 1831
sha256: "ce850282d7eb046b72f673df22b5139f9df29cc9656d84aa287455aee0b7174b"
```

### Preserved Source Content: AS1_differentiation_tikz.md

# TikZ Diagrams for AS1 Differentiation

**Pack ID:** AS1Differentiation

## AS1DifferentiationQ003TikZ-001: Sports field with semicircular ends

**Source:** Questions PDF p.3  
**Related question:** Question 3  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1DifferentiationQ003TikZ-001 | Source: Questions PDF p.3 | Insert from AS1_differentiation_tikz.md | Purpose: labelled diagram of the sports field with length \(l\) and radius \(r\).]`  
**Purpose:** To reproduce the labelled diagram of a sports field consisting of a rectangle with semicircular ends.  The diagram illustrates the length \(l\) of the rectangular section and the radius \(r\) of each semicircular end.

### Creation Notes

The original diagram shows a rectangle with two semicircular ends.  The width of the rectangle equals twice the radius of the semicircles.  A horizontal arrow marks the length \(l\) of the straight section, and a horizontal arrow inside the semicircle marks the radius \(r\).  TikZ is used to produce a clean, scalable vector graphic with labelled dimensions.

```latex
\begin{tikzpicture}[scale=0.8]
  % Parameters: adjust length L and radius R for illustrative purposes
  \def\L{8}
  \def\R{2}
  % Draw the rectangular part
  \draw (\R,-\R) -- (\L-\R,-\R) -- (\L-\R,\R) -- (\R,\R) -- cycle;
  % Draw the left semicircle: centre at (\R,0), radius \R
  \draw (\R,\R) arc[start angle=90,end angle=270,radius=\R];
  % Draw the right semicircle: centre at (\L-\R,0), radius \R
  \draw (\L-\R,-\R) arc[start angle=270,end angle=90,radius=\R];
  % Label the length l across the top of the rectangular section
  \draw[<->] (\R,\R+0.6) -- (\L-\R,\R+0.6) node[midway,above]{\(l\)};
  % Label the radius r inside the right semicircle (horizontal arrow)
  \draw[<->] (\L-\R,0) -- (\L,0) node[midway,above]{\(r\)};
\end{tikzpicture}
```

## 8. Interactive Widgets

## 8.1 Widget Assets

### Source File Metadata

```yaml
filename: "AS1_differentiation_widgets.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/08. Differentiation-Questions/AS1_differentiation_widgets.md"
lines: 6
bytes_utf8: 246
sha256: "55edd7dd2f4f95cd508c12ea3cfd238fe61336a34cb58416bc6f9af6b2f60d6f"
```

### Preserved Source Content: AS1_differentiation_widgets.md

# Interactive Widgets for AS1 Differentiation

**Pack ID:** AS1Differentiation

No interactive widgets were required for this question pack.  The questions are best practised through written working and do not require slider‐based exploration.

## 9. Agent Retrieval Notes

Use Section 5 as the authoritative question source and Section 6 as the solution/mark-scheme source. Do not merge question wording with solutions unless a user explicitly asks for worked examples or marking guidance.
