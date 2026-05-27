# AS1 Integration Questions Agent Source

## 0. AI-Agent Usage Instructions

This file is a source for question retrieval, solution lookup, mark-scheme interpretation, diagnostics and targeted practice. Questions are in Section 5. Solutions and mark schemes are in Section 6. Diagram assets are in Section 7. Widgets are in Section 8. Keep questions and solutions separate unless explicitly asked to combine them. Preserve official mark-scheme labels, uncertainty notes and generated-solution labels. Use UK/CCEA mathematical vocabulary.

## 1. Pack Metadata

```yaml
pack_type: question
unit_code: AS1
unit_name: CCEA AS1 Pure Mathematics
topic_slug: "09_integration_questions"
topic_title: "Integration"
source_folder: "/Users/evanward/Documents/AS Portal - New /AS1 Files/09. Integration-Questions"
output_file: "/Users/evanward/Documents/AS Portal - New /AS1 Files/00_AGENT_SOURCE_PACKS/09_integration_questions/AS1_integration_questions_agent_source.md"
created_from_files:
  lesson: null
  questions: "AS1_integration_questions.md"
  solutions: "AS1_integration_solutions.md"
  mermaid: "AS1_integration_mermaid.md"
  svg: "AS1_integration_svg.md"
  tikz: "AS1_integration_tikz.md"
  widgets: "AS1_integration_widgets.md"
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
| questions | AS1_integration_questions.md | 851 | 17771 | `378298b30250d36571225045ea13689c3a6e338c1952b1866ede56c5e51c89ba` |
| solutions | AS1_integration_solutions.md | 753 | 29234 | `e9b27987dcb32c1a1ab0cb23416db73cc59401354173f403bba182b76a7ff3c9` |
| mermaid | AS1_integration_mermaid.md | 6 | 252 | `555018bf50fe07b38199d62f5a24f11b03380f126ebebd4ae0739964dd0b7b62` |
| svg | AS1_integration_svg.md | 6 | 254 | `1a6ab6f0d7cbdaed7e27ea1e959215d3a1de78fc0df47cb543157df2a79d427d` |
| tikz | AS1_integration_tikz.md | 338 | 13769 | `fe97d612b9725dc7596a18b4bb4c2396e91a5d1f1262119dc129511feea7553a` |
| widgets | AS1_integration_widgets.md | 6 | 305 | `deaa96f268711678792d32caf3cea67bd444a6389762261ed6d00c2012749427` |

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
filename: "AS1_integration_questions.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/09. Integration-Questions/AS1_integration_questions.md"
lines: 851
bytes_utf8: 17771
sha256: "378298b30250d36571225045ea13689c3a6e338c1952b1866ede56c5e51c89ba"
```

### Preserved Source Content: AS1_integration_questions.md

# Integration Question Pack

**Unit:** CCEA AS1 Pure Mathematics (legacy C2 Integration past-paper pack; includes some current A2-style area-between-curves items)  
**Questions PDF:** `AS1_Integration_questions.pdf`  
**Solutions / Mark Scheme PDF:** `AS1_Integration_solutions.pdf`  
**Date generated:** 23 May 2026  
**Pack ID:** `AS1Integration`

---

## 1. Source Document Map

| Document type | Filename | Page count | Role in this pack |
|---|---|---:|---|
| Questions PDF | `AS1_Integration_questions.pdf` | 11 | Source of questions, marks, diagrams, and wording |
| Mark scheme PDF | `AS1_Integration_solutions.pdf` | 11 | Source of official solutions and marks |
| Specification | `Specification(17).pdf` | 39 | Source for unit and syllabus alignment |
| Elaboration document | `Elaboration Document(17).pdf` | 28 | Source for guidance on depth and examples |

---

## 2. Specification Alignment

| Specification area | Relevant learning outcome | Question numbers testing it | Notes on coverage | Gaps or comments |
|---|---|---|---|---|
| AS1 Pure: Integration | Indefinite integration as reverse differentiation | 1(ii), 2(a), 3(a), 4(a), 5(a), 6(a), 7, 9(a), 11, 13(a), 14, 16, 18(a), 19(a), 20 | Strong coverage of power-rule integration | Includes rational and negative powers |
| AS1 Pure: Integration | Integrate $x^n$ excluding $n=-1$, with sums, differences and constants | 1(ii), 2(a), 3(a), 4(a), 5(a), 6(a), 7, 9(a), 11, 13(a), 16, 18(a), 19(a) | Core AS1 skill | No logarithmic case required |
| AS1 Pure: Integration | Evaluate definite integrals | 1(ii), 2(b), 5(b), 6(b), 8(ii), 9(b), 10(b), 12(ii), 13(b), 15, 17(ii), 18(b), 19(b), 20 | Good coverage | Some old C2 questions go beyond current AS1 style |
| AS1 Pure: Integration | Use definite integrals to find area defined by a curve and either axis | 2(b), 4(b), 5(b), 6(b), 8(ii), 9(b), 10(b), 13(b), 15, 19(b) | Area-under-curve practice | Some use $y$ as variable or composite regions |
| A2 1 Pure: Integration | Use a definite integral to find area between two curves | 3(b), 12(ii), 17(ii), 18(b) | Included because present in source PDF | The questions PDF itself notes this is A2 specification content |

---

## 3. Question Index

| Pack question | Original reference | Questions PDF page | Marks | Subtopic | Diagram? | AI visual suggested? | Matching solution |
|---:|---|---:|---:|---|---|---|---|
| 1 | C2 Jan 2010 Q2 | 2 | 8 | Algebraic simplification; definite integration | No | No | Yes |
| 2 | C2 Jun 2010 Q6 | 2 | 11 | Indefinite integral; equal shaded areas | Yes | No | Yes |
| 3 | C2 Jan 2011 Q5 | 3 | 10 | Indefinite integral; area between curves | Yes | No | Yes |
| 4 | C2 Jun 2011 Q5 | 4 | 10 | Indefinite integral; area under curve | Yes | No | Yes |
| 5 | C2 Jan 2012 Q4 | 5 | 9 | Indefinite integral; area with axes | Yes | No | Yes |
| 6 | C2 Jun 2012 Q6 | 5 | 10 | Indefinite integral; area using $y$ | Yes | No | Yes |
| 7 | C2 Jan 2013 Q1(a) | 6 | 5 | Indefinite integration | No | No | Yes |
| 8 | C2 Jan 2013 Q4 | 6 | 13 | Intersection check; composite area | Yes | No | Yes |
| 9 | C2 Jun 2013 Q6 | 6 | 12 | Integration from gradient; area condition | No | No | Yes |
| 10 | C2 Jan 2014 Q5 | 7 | 10 | Indefinite integral; area using $y$ | Yes | No | Yes |
| 11 | C2 Jun 2014 Q2 | 7 | 5 | Indefinite integration | No | No | Yes |
| 12 | C2 Jun 2014 Q6 | 8 | 10 | Intersection; area between curves | Yes | No | Yes |
| 13 | C2 Jun 2015 Q7 | 9 | 11 | Indefinite integral; split area | No | No | Yes |
| 14 | C2 Jun 2016 Q1(a) | 9 | 5 | Curve from gradient and point | No | No | Yes |
| 15 | Jun 2016 Q3(b) | 9 | 4 | Area under curve | Yes | No | Yes |
| 16 | C2 Jun 2017 Q1 | 10 | 5 | Indefinite integration | No | No | Yes |
| 17 | C2 Jun 2017 Q3 | 10 | 9 | Area between line and curve | No | Yes | Yes |
| 18 | C2 Jun 2018 Q3 | 10 | 11 | Indefinite integral; area between curves | Yes | No | Yes |
| 19 | C2 Jun 2019 Q5 | 11 | 9 | Indefinite integral; area using $y$ | Yes | No | Yes |
| 20 | AS1 new spec Jun 2019 Q5(a) | 11 | 6 | Definite integral equation | No | No | Yes |

---

## 4. Questions

## Question 1: C2 January 2010 Question 2

**Question ID:** `AS1IntegrationQ001`  
**Source:** Questions PDF p.2  
**Original reference:** C2 January 2010 Question 2  
**Marks:** 8  
**Subtopic:** algebraic simplification; definite integration

### Question

**2**  
**(i)** Given that

$$
\frac{(x^2+2)^2}{x^2}=x^2+B+\frac{C}{x^2},
$$

show that $B=C=4$. **[3]**

**(ii)** Hence find

$$
\int_1^2 \frac{(x^2+2)^2}{x^2}\,dx.
$$

**[5]**

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 2: C2 June 2010 Question 6

**Question ID:** `AS1IntegrationQ002`  
**Source:** Questions PDF p.2  
**Original reference:** C2 June 2010 Question 6  
**Marks:** 11  
**Subtopic:** indefinite integration; definite integration; equal shaded areas

### Question

**6**  
**(a)** Find

$$
\int \left(3-x^{-3}\right)\,dx.
$$

**[3]**

**(b)** Fig. 2 below shows a sketch of the graph of

$$
y=4x^2-x^3
$$

for $0\leq x\leq a$, where $a>4$.

[VISUAL PLACEHOLDER: AS1IntegrationQ002TikZ-001 | Source: Questions PDF p.2 | Insert from AS1_integration_tikz.md | Purpose: recreate Fig. 2 showing the two shaded regions under/above the x-axis.]

Given that the two shaded regions have equal areas, find $a$. **[8]**

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 3: C2 January 2011 Question 5

**Question ID:** `AS1IntegrationQ003`  
**Source:** Questions PDF p.3  
**Original reference:** C2 January 2011 Question 5  
**Marks:** 10  
**Subtopic:** indefinite integration; area between two curves

### Question

**5**  
**(a)** Find

$$
\int \left(6\sqrt{x}-\frac{2}{x^3}\right)\,dx.
$$

**[3]**

**(b)** The graphs of

$$
y=x^2-8x+16
$$

and

$$
y=4+6x-x^2
$$

are shown in Fig. 4 below.

[VISUAL PLACEHOLDER: AS1IntegrationQ003TikZ-001 | Source: Questions PDF p.3 | Insert from AS1_integration_tikz.md | Purpose: recreate Fig. 4 showing the two intersecting curves and the region between them.]

The coordinates of the points of intersection of the curves are $(1,9)$ and $(6,4)$.

Find the area between the 2 curves. **[7]**

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 4: C2 June 2011 Question 5

**Question ID:** `AS1IntegrationQ004`  
**Source:** Questions PDF p.4  
**Original reference:** C2 June 2011 Question 5  
**Marks:** 10  
**Subtopic:** indefinite integration; area under a curve

### Question

**5**  
**(a)** Integrate

$$
4x^{-2}+3-7x^{1/2}.
$$

**[4]**

**(b)** A hill walking club has designed a new club logo. The club drew the logo as shown in Fig. 2 below.

[VISUAL PLACEHOLDER: AS1IntegrationQ004TikZ-001 | Source: Questions PDF p.4 | Insert from AS1_integration_tikz.md | Purpose: recreate Fig. 2 showing the shaded logo region under the modelled curve.]

The curve can be modelled by the equation

$$
y=2x^3-8x^2+7x+3.
$$

The shaded area is to be coloured green.

Calculate the area of the green part of the logo. **[6]**

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 5: C2 January 2012 Question 4

**Question ID:** `AS1IntegrationQ005`  
**Source:** Questions PDF p.5  
**Original reference:** C2 January 2012 Question 4  
**Marks:** 9  
**Subtopic:** indefinite integration; area bounded by curve and axes

### Question

**4**  
**(a)** Find

$$
\int \left(5x^2-7x^{-2}\right)\,dx.
$$

**[3]**

**(b)** The curve

$$
y=8-x^{3/2}
$$

is sketched in Fig. 2 below.

[VISUAL PLACEHOLDER: AS1IntegrationQ005TikZ-001 | Source: Questions PDF p.5 | Insert from AS1_integration_tikz.md | Purpose: recreate Fig. 2 showing the curve and the axes bounding the area.]

Find the area bounded by the curve and the axes. **[6]**

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 6: C2 June 2012 Question 6

**Question ID:** `AS1IntegrationQ006`  
**Source:** Questions PDF p.5  
**Original reference:** C2 June 2012 Question 6  
**Marks:** 10  
**Subtopic:** indefinite integration; area enclosed by a reciprocal-square graph

### Question

**6**  
**(a)** Integrate

$$
5x+x^{1/3}+7.
$$

**[4]**

**(b)** Part of the graph of

$$
y=\frac{1}{x^2}
$$

is shown in Fig. 3 below.

[VISUAL PLACEHOLDER: AS1IntegrationQ006TikZ-001 | Source: Questions PDF p.5 | Insert from AS1_integration_tikz.md | Purpose: recreate Fig. 3 showing the reciprocal-square curve and the region enclosed by the y-axis and horizontal lines.]

Find the area enclosed between this part of the graph, the $y$-axis and the lines $y=1$ and $y=4$. **[6]**

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 7: C2 January 2013 Question 1(a)

**Question ID:** `AS1IntegrationQ007`  
**Source:** Questions PDF p.6  
**Original reference:** C2 January 2013 Question 1(a)  
**Marks:** 5  
**Subtopic:** indefinite integration

### Question

**1**  
**(a)** Find

$$
\int \left(4x^3+2x^{1/2}+7+x^{-2}\right)\,dx.
$$

**[5]**

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 8: C2 January 2013 Question 4

**Question ID:** `AS1IntegrationQ008`  
**Source:** Questions PDF p.6  
**Original reference:** C2 January 2013 Question 4  
**Marks:** 13  
**Subtopic:** intersection verification; composite area

### Question

**4**  
Fig. 1 below shows sketches of the curve

$$
y=x^2-4x+4
$$

and the straight line

$$
y=x+4.
$$

[VISUAL PLACEHOLDER: AS1IntegrationQ008TikZ-001 | Source: Questions PDF p.6 | Insert from AS1_integration_tikz.md | Purpose: recreate Fig. 1 showing the line, curve, and shaded composite area.]

**(i)** Verify that the curve and the line intersect at the point $(0,4)$. **[2]**

**(ii)** Find the shaded area. **[11]**

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 9: C2 June 2013 Question 6

**Question ID:** `AS1IntegrationQ009`  
**Source:** Questions PDF p.6  
**Original reference:** C2 June 2013 Question 6  
**Marks:** 12  
**Subtopic:** indefinite integration; equation of a curve from gradient and area

### Question

**6**  
**(a)** Find

$$
\int \left(3x^{1/2}+x^{-2}\right)\,dx.
$$

**[2]**

**(b)** The gradient of a curve at any point on the curve is given by

$$
\frac{dy}{dx}=2x-9x^2.
$$

The area between the curve, the $x$-axis and the lines $x=0$ and $x=1$ is $\frac{19}{12}$.

This area lies above the $x$-axis.

Find the equation of the curve. **[10]**

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 10: C2 January 2014 Question 5

**Question ID:** `AS1IntegrationQ010`  
**Source:** Questions PDF p.7  
**Original reference:** C2 January 2014 Question 5  
**Marks:** 10  
**Subtopic:** simplification before integration; area using integration with respect to $y$

### Question

**5**  
**(a)** Find

$$
\int \frac{2x+3}{\sqrt{x}}\,dx.
$$

**[4]**

**(b)** The rudder for a boat can be modelled by the area enclosed by the graph of

$$
y=\sqrt[3]{x-8},
$$

the $y$-axis and the line $y=1$, as shown shaded in Fig. 3 below.

[VISUAL PLACEHOLDER: AS1IntegrationQ010TikZ-001 | Source: Questions PDF p.7 | Insert from AS1_integration_tikz.md | Purpose: recreate Fig. 3 showing the rudder region bounded by the curve, y-axis and line y=1.]

Find the area of the rudder. **[6]**

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 11: C2 June 2014 Question 2

**Question ID:** `AS1IntegrationQ011`  
**Source:** Questions PDF p.7  
**Original reference:** C2 June 2014 Question 2  
**Marks:** 5  
**Subtopic:** indefinite integration

### Question

**2**  
Find

$$
\int \left(\frac{16}{x^2}+x^{1/3}+9x-7\right)\,dx.
$$

**[5]**

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 12: C2 June 2014 Question 6

**Question ID:** `AS1IntegrationQ012`  
**Source:** Questions PDF p.8  
**Original reference:** C2 June 2014 Question 6  
**Marks:** 10  
**Subtopic:** intersection of curves; area between curves and reflection

### Question

**6**  
The graphs of the curves

$$
y=x^2 \quad \text{and} \quad y=8\sqrt{x}
$$

are shown in Fig. 5 below.

[VISUAL PLACEHOLDER: AS1IntegrationQ012TikZ-001 | Source: Questions PDF p.8 | Insert from AS1_integration_tikz.md | Purpose: recreate Fig. 5 showing the curves and point A.]

The curves cross at the point $A$.

**(i)** Find the coordinates of $A$. **[3]**

A garden centre has created a logo by reflecting the area between the curves

$$
y=x^2 \quad \text{and} \quad y=8\sqrt{x}
$$

in the $y$-axis, as shown shaded in Fig. 6 below.

[VISUAL PLACEHOLDER: AS1IntegrationQ012TikZ-002 | Source: Questions PDF p.8 | Insert from AS1_integration_tikz.md | Purpose: recreate Fig. 6 showing the reflected shaded logo.]

**(ii)** Find the area of the logo. **[7]**

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 13: C2 June 2015 Question 7

**Question ID:** `AS1IntegrationQ013`  
**Source:** Questions PDF p.9  
**Original reference:** C2 June 2015 Question 7  
**Marks:** 11  
**Subtopic:** indefinite integration; total area with sign change

### Question

**7**  
**(a)** Integrate

$$
\frac{x}{3}+\frac{4}{x^2}-6\sqrt{x}
$$

with respect to $x$. **[4]**

**(b)** Find the area enclosed by the curve

$$
y=x^2-4x+3,
$$

the $x$-axis and the lines $x=1$ and $x=4$. **[7]**

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 14: C2 June 2016 Question 1(a)

**Question ID:** `AS1IntegrationQ014`  
**Source:** Questions PDF p.9  
**Original reference:** C2 June 2016 Question 1(a)  
**Marks:** 5  
**Subtopic:** equation of a curve from gradient and point

### Question

**1**  
**(a)** The gradient of a curve is given by

$$
\frac{dy}{dx}=4+\frac{1}{x^2}.
$$

The point $(1,7)$ lies on the curve.

Find the equation of the curve. **[5]**

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 15: June 2016 Question 3(b)

**Question ID:** `AS1IntegrationQ015`  
**Source:** Questions PDF p.9  
**Original reference:** June 2016 Question 3(b)  
**Marks:** 4  
**Subtopic:** area under a curve

### Question

**(b)** The graph of the curve

$$
y=x^{1/3}+4x
$$

is shown in Fig. 1 below.

[VISUAL PLACEHOLDER: AS1IntegrationQ015TikZ-001 | Source: Questions PDF p.9 | Insert from AS1_integration_tikz.md | Purpose: recreate Fig. 1 showing the curve and the area between x=1 and x=8.]

Find the area of the region bounded by the curve, the lines $x=1$ and $x=8$ and the $x$-axis. **[4]**

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 16: C2 June 2017 Question 1

**Question ID:** `AS1IntegrationQ016`  
**Source:** Questions PDF p.10  
**Original reference:** C2 June 2017 Question 1  
**Marks:** 5  
**Subtopic:** indefinite integration

### Question

**1**  
Find

$$
\int \left(6t^2+t^{1/2}+9-3t^{-3}\right)\,dt.
$$

**[5]**

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 17: C2 June 2017 Question 3

**Question ID:** `AS1IntegrationQ017`  
**Source:** Questions PDF p.10  
**Original reference:** C2 June 2017 Question 3  
**Marks:** 9  
**Subtopic:** intersections; area between a line and a curve

### Question

**3**  
The line $y=8$ crosses the curve $y=6x-x^2$ at the points $A$ and $B$.

**(i)** Find the $x$ coordinates of $A$ and $B$. **[2]**

[VISUAL PLACEHOLDER: AS1IntegrationQ017TikZ-001 | Source: AI-proposed visual support, not present in questions PDF | Insert from AS1_integration_tikz.md | Purpose: sketch the line and curve to support the area-between-line-and-curve setup.]

**(ii)** Hence find the area bounded by the line $y=8$ and the curve $y=6x-x^2$. **[7]**

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 18: C2 June 2018 Question 3

**Question ID:** `AS1IntegrationQ018`  
**Source:** Questions PDF p.10  
**Original reference:** C2 June 2018 Question 3  
**Marks:** 11  
**Subtopic:** indefinite integration; area between curves

### Question

**3**  
**(a)** Find

$$
\int \left(2x^3-\sqrt{x}+\frac{1}{x^4}-3\right)\,dx.
$$

**[5]**

**(b)** The curves with equations

$$
y=x^2-5x+8
$$

and

$$
y=-x^2+5x-4
$$

intersect at the points $(2,2)$ and $(3,2)$, as shown in Fig. 1 below.

[VISUAL PLACEHOLDER: AS1IntegrationQ018TikZ-001 | Source: Questions PDF p.10 | Insert from AS1_integration_tikz.md | Purpose: recreate Fig. 1 showing the two parabolas and the enclosed region.]

Find the area enclosed by the curves. **[6]**

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 19: C2 June 2019 Question 5

**Question ID:** `AS1IntegrationQ019`  
**Source:** Questions PDF p.11  
**Original reference:** C2 June 2019 Question 5  
**Marks:** 9  
**Subtopic:** indefinite integration; area using integration with respect to $y$

### Question

**5**  
**(a)** Find

$$
\int \left(\frac{3x^{-3}}{2}-6x\right)\,dx.
$$

**[3 marks]**

**(b)** Fig. 2 below shows a sketch of the curve with equation

$$
x=y^2-5y+4.
$$

[VISUAL PLACEHOLDER: AS1IntegrationQ019TikZ-001 | Source: Questions PDF p.11 | Insert from AS1_integration_tikz.md | Purpose: recreate Fig. 2 showing the curve and shaded area between the curve and y-axis.]

Calculate the shaded area. **[6 marks]**

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 20: AS1_(new spec)_June_2019 Question 5(a)

**Question ID:** `AS1IntegrationQ020`  
**Source:** Questions PDF p.11  
**Original reference:** AS1_(new spec)_June_2019 Question 5(a)  
**Marks:** 6  
**Subtopic:** solving an equation involving a definite integral

### Question

**5**  
**(a)** Given that

$$
\int_1^k 2\sqrt{x}\,dx=\frac{28}{3},
$$

find the value of $k$. **[6]**

### Space for Working

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
filename: "AS1_integration_solutions.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/09. Integration-Questions/AS1_integration_solutions.md"
lines: 753
bytes_utf8: 29234
sha256: "e9b27987dcb32c1a1ab0cb23416db73cc59401354173f403bba182b76a7ff3c9"
```

### Preserved Source Content: AS1_integration_solutions.md

# Integration Solutions and Mark Scheme Pack

**Unit:** CCEA AS1 Pure Mathematics (legacy C2 Integration past-paper pack; includes some current A2-style area-between-curves items)  
**Questions PDF:** `AS1_Integration_questions.pdf`  
**Solutions / Mark Scheme PDF:** `AS1_Integration_solutions.pdf`  
**Date generated:** 23 May 2026  
**Pack ID:** `AS1Integration`

---

## 1. Mark Scheme Notation Guide

The supplied mark scheme uses short mark codes. Common meanings are:

- `M` usually means a method mark.
- `W` usually means a working or accuracy-style mark in this CCEA mark scheme.
- `MW` usually indicates combined method/working credit for a step.
- A code such as `MW3` indicates 3 marks attached to that official step.
- A code such as `M1 W1` indicates two separate 1-mark credits on the same line.

The exact meaning of each mark code should be interpreted according to the awarding body’s mark scheme conventions.

---

## 2. Question-to-Solution Map

| Pack question | Original reference | Question page | Solution page | Total marks from question | Marks shown in mark scheme | Match confidence | Notes |
|---:|---|---:|---:|---:|---:|---|---|
| 1 | C2 Jan 2010 Q2 | 2 | 2 | 8 | 8 | High | Direct match |
| 2 | C2 Jun 2010 Q6 | 2 | 3 | 11 | 11 | High | Direct match |
| 3 | C2 Jan 2011 Q5 | 3 | 4 | 10 | 10 | High | Direct match |
| 4 | C2 Jun 2011 Q5 | 4 | 4 | 10 | 10 | High | Direct match |
| 5 | C2 Jan 2012 Q4 | 5 | 5 | 9 | 9 | High | Direct match |
| 6 | C2 Jun 2012 Q6 | 5 | 5 | 10 | 10 | High | Direct match |
| 7 | C2 Jan 2013 Q1(a) | 6 | 6 | 5 | 5 | High | Direct match |
| 8 | C2 Jan 2013 Q4 | 6 | 6 | 13 | 13 | High | Direct match |
| 9 | C2 Jun 2013 Q6 | 6 | 7 | 12 | 12 | High | Direct match |
| 10 | C2 Jan 2014 Q5 | 7 | 7 | 10 | 10 | High | Direct match |
| 11 | C2 Jun 2014 Q2 | 7 | 8 | 5 | 5 | High | Direct match |
| 12 | C2 Jun 2014 Q6 | 8 | 8 | 10 | 10 | High | Direct match |
| 13 | C2 Jun 2015 Q7 | 9 | 8 | 11 | 11 | High | Direct match |
| 14 | C2 Jun 2016 Q1(a) | 9 | 9 | 5 | 5 | High | Direct match |
| 15 | Jun 2016 Q3(b) | 9 | 9 | 4 | 4 | High | Mark scheme page shows wider question total |
| 16 | C2 Jun 2017 Q1 | 10 | 9 | 5 | 5 | High | Direct match |
| 17 | C2 Jun 2017 Q3 | 10 | 10 | 9 | 9 | High | Direct match |
| 18 | C2 Jun 2018 Q3 | 10 | 10 | 11 | 11 | High | Direct match |
| 19 | C2 Jun 2019 Q5 | 11 | 11 | 9 | 9 | Medium | Mark scheme heading says C2 Jun 2018 Q5, but content matches |
| 20 | AS1 new spec Jun 2019 Q5(a) | 11 | 11 | 6 | 6 | High | Direct match |

---

## 3. Fully Worked Mark Scheme Solutions

## Solution to Question 1: C2 January 2010 Question 2

**Question ID:** `AS1IntegrationQ001`  
**Source:** Mark Scheme PDF p.2  
**Original reference:** C2 January 2010 Question 2  
**Related question:** See `AS1_integration_questions.md`, Question 1  
**Marks available:** 8  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $\dfrac{(x^2+2)^2}{x^2}=\dfrac{x^4+4x^2+4}{x^2}$ | M1W1 | 2 | Expands and forms one fraction. |
| 2 | $=x^2+4+\dfrac{4}{x^2}\;\therefore\;B=C=4$ | W1 | 1 | Identifies both constants. |
| 3 | $\displaystyle \int_1^2 \frac{(x^2+2)^2}{x^2}\,dx=\int_1^2\left(x^2+4+\frac{4}{x^2}\right)dx$ | — | 0 | Uses part (i). |
| 4 | $\displaystyle \left[\frac{x^3}{3}+4x-\frac{4}{x}\right]_1^2$ | MW3 | 3 | Integrates correctly. |
| 5 | $\displaystyle \left(\frac83+8-2\right)-\left(\frac13+4-4\right)$ | M1 | 1 | Substitutes limits. |
| 6 | $\displaystyle 8\frac13$ | W1 | 1 | Final value. |

### Final Answer

`B = C = 4`, and

$$
\int_1^2 \frac{(x^2+2)^2}{x^2}\,dx=8\frac13.
$$

### What the Examiner Wanted

The key marks came from expanding the numerator, simplifying the integrand, applying the power rule, and subtracting lower from upper.

---

## Solution to Question 2: C2 June 2010 Question 6

**Question ID:** `AS1IntegrationQ002`  
**Source:** Mark Scheme PDF p.3  
**Original reference:** C2 June 2010 Question 6  
**Related question:** See `AS1_integration_questions.md`, Question 2  
**Marks available:** 11  
**Match confidence:** High

[VISUAL REFERENCE: AS1IntegrationQ002TikZ-001 | See question diagram in AS1_integration_tikz.md | Purpose: supports the equal-area interpretation.]

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $\displaystyle \int(3-x^{-3})\,dx=3x+\frac{x^{-2}}{2}+c$ | MW3 | 3 | Integrates part (a). |
| 2 | $\displaystyle \text{Area}=\int_0^a(4x^2-x^3)\,dx$ | M2W1 | 3 | Sets up signed area. |
| 3 | $\displaystyle \left[\frac{4x^3}{3}-\frac{x^4}{4}\right]_0^a$ | MW2 | 2 | Integrates and applies limits. |
| 4 | $\displaystyle =\frac{4a^3}{3}-\frac{a^4}{4}$ | W1 | 1 | Simplifies result. |
| 5 | $\displaystyle \text{if 2 areas equal then }\frac{4a^3}{3}-\frac{a^4}{4}=0$ | M1 | 1 | Uses equal-area condition. |
| 6 | $\displaystyle a^3\left(\frac43-\frac{a}{4}\right)=0$ | — | 0 | Factorisation shown. |
| 7 | $\displaystyle a\ne0\text{ or }a=\frac{16}{3}$ | MW1 | 1 | Uses $a>4$. |

### Final Answer

$$
\int(3-x^{-3})\,dx=3x+\frac{x^{-2}}2+c,\qquad a=\frac{16}{3}.
$$

### What the Examiner Wanted

The examiner wanted correct integration of a negative power, then an equation from the equal shaded areas. The condition $a>4$ rejects $a=0$.

### Alternative Method

Official alternative method shown in the mark scheme:

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $\displaystyle \text{Area}=\int_0^4(4x^2-x^3)\,dx$ | M2W1 | 3 | Finds first shaded area. |
| 2 | $\displaystyle \left[\frac{4x^3}{3}-\frac{x^4}{4}\right]_0^4$ | MW2 | 2 | Integrates over $[0,4]$. |
| 3 | $\displaystyle =\frac{256}{3}-64=21\frac13$ | W1 | 1 | Gets first area. |
| 4 | $\displaystyle \text{Area}=-\int_4^a(4x^2-x^3)\,dx$ | M1 | 1 | Uses absolute area below axis. |
| 5 | $\displaystyle =-\left[\frac{4x^3}{3}-\frac{x^4}{4}\right]_4^a$ | — | 0 | Applies limits. |
| 6 | $\displaystyle =-\left(\frac{4a^3}{3}-\frac{a^4}{4}-21\frac13\right)$ | — | 0 | Rearranges area. |
| 7 | $\displaystyle \text{if 2 areas equal then }21\frac13=-\frac{4a^3}{3}$ | — | 0 | Mark scheme line as printed. |
| 8 | $\displaystyle \Rightarrow a=\frac{16}{3}$ | MW1 | 1 | Final value. |

---

## Solution to Question 3: C2 January 2011 Question 5

**Question ID:** `AS1IntegrationQ003`  
**Source:** Mark Scheme PDF p.4  
**Original reference:** C2 January 2011 Question 5  
**Related question:** See `AS1_integration_questions.md`, Question 3  
**Marks available:** 10  
**Match confidence:** High

[VISUAL REFERENCE: AS1IntegrationQ003TikZ-001 | See question diagram in AS1_integration_tikz.md | Purpose: supports the top-minus-bottom setup.]

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $\displaystyle \int\left(6\sqrt{x}-\frac{2}{x^3}\right)dx=4x^{3/2}+\frac{1}{x^2}+c$ | MW3 | 3 | Integrates part (a). |
| 2 | $\displaystyle \int_1^6\left(4+6x-x^2-(x^2-8x+16)\right)dx$ | M2 W2 | 4 | Uses top minus bottom. |
| 3 | $\displaystyle \int_1^6(-12+14x-2x^2)dx$ | — | 0 | Simplifies integrand. |
| 4 | $\displaystyle \left[-12x+7x^2-\frac23x^3\right]_1^6$ | MW2 | 2 | Integrates and applies limits. |
| 5 | $\displaystyle =36-\left(-5\frac23\right)=41\frac23$ | MW1 | 1 | Final area. |

### Final Answer

$$
4x^{3/2}+\frac{1}{x^2}+c,
\qquad \text{area}=41\frac23.
$$

### What the Examiner Wanted

The main method was to integrate the difference of the two curves between the given intersection points.

---

## Solution to Question 4: C2 June 2011 Question 5

**Question ID:** `AS1IntegrationQ004`  
**Source:** Mark Scheme PDF p.4  
**Original reference:** C2 June 2011 Question 5  
**Related question:** See `AS1_integration_questions.md`, Question 4  
**Marks available:** 10  
**Match confidence:** High

[VISUAL REFERENCE: AS1IntegrationQ004TikZ-001 | See question diagram in AS1_integration_tikz.md | Purpose: supports the area-under-curve limits.]

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $\displaystyle \int(4x^{-2}+3-7x^{1/2})dx$ | — | 0 | Part (a) setup. |
| 2 | $\displaystyle -4x^{-1}+3x-\frac{14}{3}x^{3/2}+c$ | MW4 | 4 | Integrates all terms. |
| 3 | $\displaystyle =-\frac4x+3x-\frac{14\sqrt{x^3}}{3}+c$ | — | 0 | Equivalent form. |
| 4 | $\displaystyle A=\int_0^3(2x^3-8x^2+7x+3)dx$ | M1 W2 | 3 | Sets up logo area. |
| 5 | $\displaystyle A=\left[\frac12x^4-\frac83x^3+\frac72x^2+3x\right]_0^3$ | MW2 | 2 | Integrates and applies limits. |
| 6 | $\displaystyle A=[40.5-72+31.5+9]-0=9$ | W1 | 1 | Final area. |

### Final Answer

$$
-4x^{-1}+3x-\frac{14}{3}x^{3/2}+c,
\qquad A=9.
$$

### What the Examiner Wanted

The key area step was to integrate the modelled curve from $x=0$ to $x=3$.

---

## Solution to Question 5: C2 January 2012 Question 4

**Question ID:** `AS1IntegrationQ005`  
**Source:** Mark Scheme PDF p.5  
**Original reference:** C2 January 2012 Question 4  
**Related question:** See `AS1_integration_questions.md`, Question 5  
**Marks available:** 9  
**Match confidence:** High

[VISUAL REFERENCE: AS1IntegrationQ005TikZ-001 | See question diagram in AS1_integration_tikz.md | Purpose: supports the limits $0$ to $4$.]

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $\displaystyle \int(5x^2-7x^{-2})dx=\frac53x^3+7x^{-1}+c$ | MW3 | 3 | Integrates part (a). |
| 2 | $\displaystyle \int_0^4(8-x^{3/2})dx$ | M2 W1 | 3 | Sets up area. |
| 3 | $\displaystyle \left[8x-\frac25x^{5/2}\right]_0^4$ | MW2 | 2 | Integrates and applies limits. |
| 4 | $\displaystyle (32-12.8)-(0)=19.2\text{ units}^2$ | MW1 | 1 | Final area. |

### Final Answer

$$
\frac53x^3+7x^{-1}+c,
\qquad 19.2\text{ units}^2.
$$

### What the Examiner Wanted

The examiner expected the x-intercept $x=4$ from the diagram and the correct definite integral from $0$ to $4$.

---

## Solution to Question 6: C2 June 2012 Question 6

**Question ID:** `AS1IntegrationQ006`  
**Source:** Mark Scheme PDF p.5  
**Original reference:** C2 June 2012 Question 6  
**Related question:** See `AS1_integration_questions.md`, Question 6  
**Marks available:** 10  
**Match confidence:** High

[VISUAL REFERENCE: AS1IntegrationQ006TikZ-001 | See question diagram in AS1_integration_tikz.md | Purpose: supports the area enclosed by the y-axis and horizontal lines.]

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $\displaystyle \int(5x+x^{1/3}+7)dx=\frac52x^2+\frac34x^{4/3}+7x+c$ | MW4 | 4 | Integrates part (a). |
| 2 | $\displaystyle \int_1^4x\,dy$ | M2W1 | 3 | Sets up area using $y$. |
| 3 | $\displaystyle =\int_1^4 y^{-1/2}\,dy$ | MW1 | 1 | Uses $x=y^{-1/2}$. |
| 4 | $\displaystyle =\left[2y^{1/2}\right]_1^4$ | MW1 | 1 | Integrates. |
| 5 | $\displaystyle =4-2=2$ | MW1 | 1 | Final area. |

### Final Answer

$$
\frac52x^2+\frac34x^{4/3}+7x+c,
\qquad \text{area}=2.
$$

### What the Examiner Wanted

The mark scheme uses integration with respect to $y$, since the region is bounded by horizontal lines $y=1$ and $y=4$.

### Alternative Method

Official alternative method shown in the mark scheme:

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $\displaystyle \int_{1/2}^1x^{-2}\,dx$ | MW1 | 1 | Uses corresponding x-values. |
| 2 | $\displaystyle =[-x^{-1}]_{1/2}^{1}$ | MW1 | 1 | Integrates. |
| 3 | $\displaystyle =(-1)-(-2)=1$ | MW1 | 1 | Evaluates integral. |
| 4 | $\displaystyle \text{Area}=1-\frac12+\frac32=2$ | MW3 | 3 | Adds/subtracts simple regions. |

---

## Solution to Question 7: C2 January 2013 Question 1(a)

**Question ID:** `AS1IntegrationQ007`  
**Source:** Mark Scheme PDF p.6  
**Original reference:** C2 January 2013 Question 1(a)  
**Related question:** See `AS1_integration_questions.md`, Question 7  
**Marks available:** 5  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $\displaystyle \int(4x^3+2x^{1/2}+7+x^{-2})dx$ | — | 0 | Setup. |
| 2 | $\displaystyle =\frac{4x^4}{4}+\frac{2x^{3/2}}{3/2}+7x-x^{-1}+c$ | — | 0 | Applies power rule. |
| 3 | $\displaystyle =x^4+\frac43x^{3/2}+7x-x^{-1}+c$ | MW5 | 5 | Final integrated form. |

### Final Answer

$$
x^4+\frac43x^{3/2}+7x-x^{-1}+c.
$$

### What the Examiner Wanted

The examiner wanted all four terms integrated using the power rule and the constant $c$ included.

---

## Solution to Question 8: C2 January 2013 Question 4

**Question ID:** `AS1IntegrationQ008`  
**Source:** Mark Scheme PDF p.6  
**Original reference:** C2 January 2013 Question 4  
**Related question:** See `AS1_integration_questions.md`, Question 8  
**Marks available:** 13  
**Match confidence:** High

[VISUAL REFERENCE: AS1IntegrationQ008TikZ-001 | See question diagram in AS1_integration_tikz.md | Purpose: supports the triangle plus integral approach.]

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $y=x+4$; if $x=0$ then $y=4$ | — | 0 | Checks line. |
| 2 | $y=x^2-4x+4$; if $x=0$ then $y=4$ | — | 0 | Checks curve. |
| 3 | $\therefore$ intersect at $(0,4)$ | MW2 | 2 | Verifies intersection. |
| 4 | When $y=0$, $x=-4$ for the line | MW1 | 1 | Finds line intercept. |
| 5 | $y=0:\;x^2-4x+4=0$ | — | 0 | Curve intercept equation. |
| 6 | $(x-2)^2=0$, so $x=2$ | M1 W1 | 2 | Finds curve intercept. |
| 7 | $\displaystyle \text{Req. Area}=\text{area }\triangle+\int_0^2(x^2-4x+4)dx$ | M1 M1 W1 | 3 | Sets up composite area. |
| 8 | $\displaystyle =\frac{4\times4}{2}+\left[\frac{x^3}{3}-2x^2+4x\right]_0^2$ | MW2 | 2 | Integrates and adds triangle. |
| 9 | $\displaystyle =8+\left(\frac83-8+8\right)$ | MW1 MW1 | 2 | Evaluates terms. |
| 10 | $\displaystyle =10\frac23\text{ unit}^2$ | W1 | 1 | Final area. |

### Final Answer

$$
\text{Shaded area}=10\frac23\text{ unit}^2.
$$

### What the Examiner Wanted

The method was to split the shaded region into a triangle under the line and an integral under the curve.

---

## Solution to Question 9: C2 June 2013 Question 6

**Question ID:** `AS1IntegrationQ009`  
**Source:** Mark Scheme PDF p.7  
**Original reference:** C2 June 2013 Question 6  
**Related question:** See `AS1_integration_questions.md`, Question 9  
**Marks available:** 12  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $\displaystyle \int(3x^{1/2}+x^{-2})dx=2x^{3/2}-x^{-1}+c$ | MW2 | 2 | Integrates part (a). |
| 2 | $\displaystyle \frac{dy}{dx}=2x-9x^2$ | — | 0 | Given gradient. |
| 3 | $\displaystyle y=x^2-3x^3+c$ | M1 W2 | 3 | Integrates gradient. |
| 4 | $\displaystyle \text{Area}=\int_0^1(x^2-3x^3+c)dx$ | M1 W1 W1 | 3 | Uses area condition. |
| 5 | $\displaystyle =\left[\frac{x^3}{3}-\frac{3x^4}{4}+cx\right]_0^1$ | MW2 | 2 | Integrates with limits. |
| 6 | $\displaystyle \frac13-\frac34+c=\frac{19}{12}$ | M1 | 1 | Forms equation for $c$. |
| 7 | $\displaystyle c=\frac{24}{12}=2$ | — | 0 | Solves for $c$. |
| 8 | $\displaystyle \therefore\text{ eqn }y=x^2-3x^3+2$ | W1 | 1 | Final equation. |

### Final Answer

$$
y=x^2-3x^3+2.
$$

### What the Examiner Wanted

The important idea was to integrate the gradient first, then use the given area to find the constant of integration.

---

## Solution to Question 10: C2 January 2014 Question 5

**Question ID:** `AS1IntegrationQ010`  
**Source:** Mark Scheme PDF p.7  
**Original reference:** C2 January 2014 Question 5  
**Related question:** See `AS1_integration_questions.md`, Question 10  
**Marks available:** 10  
**Match confidence:** High

[VISUAL REFERENCE: AS1IntegrationQ010TikZ-001 | See question diagram in AS1_integration_tikz.md | Purpose: supports the integration with respect to $y$.]

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $\displaystyle \int(2x^{1/2}+3x^{-1/2})dx$ | MW1 | 1 | Rewrites integrand. |
| 2 | $\displaystyle \frac43x^{3/2}+6x^{1/2}+c$ | MW3 | 3 | Integrates part (a). |
| 3 | $\displaystyle A=\int_{-2}^{1}(y^3+8)dy$ | M2 MW1 W1 | 4 | Sets up rudder area. |
| 4 | $\displaystyle A=\left[\frac{y^4}{4}+8y\right]_{-2}^{1}$ | MW1 | 1 | Integrates with limits. |
| 5 | $\displaystyle A=20\frac14\text{ units}^2$ | MW1 | 1 | Final area. |

### Final Answer

$$
\frac43x^{3/2}+6x^{1/2}+c,
\qquad A=20\frac14\text{ units}^2.
$$

### What the Examiner Wanted

The region is more naturally handled by writing $x=y^3+8$ and integrating with respect to $y$.

---

## Solution to Question 11: C2 June 2014 Question 2

**Question ID:** `AS1IntegrationQ011`  
**Source:** Mark Scheme PDF p.8  
**Original reference:** C2 June 2014 Question 2  
**Related question:** See `AS1_integration_questions.md`, Question 11  
**Marks available:** 5  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $\displaystyle \int\left(\frac{16}{x^2}+x^{1/3}+9x-7\right)dx$ | — | 0 | Setup. |
| 2 | $\displaystyle =-16x^{-1}+\frac34x^{4/3}+\frac92x^2-7x+c$ | MW5 | 5 | Integrates all terms. |

### Final Answer

$$
-16x^{-1}+\frac34x^{4/3}+\frac92x^2-7x+c.
$$

### What the Examiner Wanted

The examiner wanted correct treatment of $x^{-2}$ and $x^{1/3}$, plus the constant of integration.

---

## Solution to Question 12: C2 June 2014 Question 6

**Question ID:** `AS1IntegrationQ012`  
**Source:** Mark Scheme PDF p.8  
**Original reference:** C2 June 2014 Question 6  
**Related question:** See `AS1_integration_questions.md`, Question 12  
**Marks available:** 10  
**Match confidence:** High

[VISUAL REFERENCE: AS1IntegrationQ012TikZ-001 | See question diagram in AS1_integration_tikz.md | Purpose: supports locating point A.]

[VISUAL REFERENCE: AS1IntegrationQ012TikZ-002 | See question diagram in AS1_integration_tikz.md | Purpose: supports doubling the lobe area for the logo.]

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $x^2=8\sqrt{x}$ | MW1 | 1 | Equates curves. |
| 2 | $x^{3/2}=8$ | MW1 | 1 | Simplifies equation. |
| 3 | $x=4$; $y=16$; $A=(4,16)$ | MW1 | 1 | Coordinates of A. |
| 4 | $\displaystyle A=\int_0^4(8\sqrt{x}-x^2)dx$ | M2 W1 | 3 | Sets up one lobe area. |
| 5 | $\displaystyle A=\left[\frac{16x^{3/2}}{3}-\frac{x^3}{3}\right]_0^4$ | MW2 | 2 | Integrates with limits. |
| 6 | $\displaystyle A=\frac{64}{3}$ | MW1 | 1 | One lobe area. |
| 7 | $\displaystyle \text{Area}=2\times\frac{64}{3}\approx42.7\text{ unit}^2$ | MW1 | 1 | Doubles for reflection. |

### Final Answer

$$
A=(4,16),
\qquad \text{logo area}=\frac{128}{3}\approx42.7\text{ unit}^2.
$$

### What the Examiner Wanted

The key was to find the intersection first, integrate top minus bottom for one side, then double because of reflection in the $y$-axis.

---

## Solution to Question 13: C2 June 2015 Question 7

**Question ID:** `AS1IntegrationQ013`  
**Source:** Mark Scheme PDF p.8  
**Original reference:** C2 June 2015 Question 7  
**Related question:** See `AS1_integration_questions.md`, Question 13  
**Marks available:** 11  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $\displaystyle \frac{x^2}{6}-\frac4x-4x^{3/2}+c$ | MW4 | 4 | Integrates part (a). |
| 2 | $0=x^2-4x+3$ | — | 0 | Finds x-intercepts. |
| 3 | $x=1\text{ or }x=3$ | M1 W1 | 2 | Roots identified. |
| 4 | $\displaystyle A=-\int_1^3(x^2-4x+3)dx+\int_3^4(x^2-4x+3)dx$ | M2 W1 | 3 | Splits at sign change. |
| 5 | $\displaystyle A=-\left[\frac{x^3}{3}-2x^2+3x\right]_1^3+\left[\frac{x^3}{3}-2x^2+3x\right]_3^4$ | MW1 | 1 | Integrates. |
| 6 | $\displaystyle A=1\frac13+1\frac13=2\frac23$ | W1 | 1 | Final total area. |

### Final Answer

$$
\frac{x^2}{6}-\frac4x-4x^{3/2}+c,
\qquad A=2\frac23.
$$

### What the Examiner Wanted

The area must be split at $x=3$ because the curve changes sign between $x=1$ and $x=4$.

---

## Solution to Question 14: C2 June 2016 Question 1(a)

**Question ID:** `AS1IntegrationQ014`  
**Source:** Mark Scheme PDF p.9  
**Original reference:** C2 June 2016 Question 1(a)  
**Related question:** See `AS1_integration_questions.md`, Question 14  
**Marks available:** 5  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $\displaystyle y=\int\left(4+\frac{1}{x^2}\right)dx$ | M1 | 1 | Integrates gradient. |
| 2 | $y=4x-x^{-1}+c$ | W2 | 2 | Correct general curve. |
| 3 | $x=1,\;y=7\;\therefore\;c=4$ | M1 | 1 | Uses given point. |
| 4 | $\displaystyle y=4x-\frac1x+4$ | W1 | 1 | Final equation. |

### Final Answer

$$
y=4x-\frac1x+4.
$$

### What the Examiner Wanted

The examiner wanted the constant of integration found using the point $(1,7)$.

---

## Solution to Question 15: June 2016 Question 3(b)

**Question ID:** `AS1IntegrationQ015`  
**Source:** Mark Scheme PDF p.9  
**Original reference:** June 2016 Question 3(b)  
**Related question:** See `AS1_integration_questions.md`, Question 15  
**Marks available:** 4  
**Match confidence:** High

[VISUAL REFERENCE: AS1IntegrationQ015TikZ-001 | See question diagram in AS1_integration_tikz.md | Purpose: supports the limits $1$ and $8$.]

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $\displaystyle \int_1^8(x^{1/3}+4x)dx$ | M1 | 1 | Sets up area. |
| 2 | $\displaystyle \left[\frac34x^{4/3}+2x^2\right]_1^8$ | MW2 | 2 | Integrates and applies limits. |
| 3 | $\displaystyle [12+128]-\left[\frac34+2\right]$ | — | 0 | Substitutes limits. |
| 4 | $137.25$ | W1 | 1 | Final area. |

### Final Answer

$$
137.25.
$$

### What the Examiner Wanted

The key was setting up the definite integral over $x=1$ to $x=8$.

---

## Solution to Question 16: C2 June 2017 Question 1

**Question ID:** `AS1IntegrationQ016`  
**Source:** Mark Scheme PDF p.9  
**Original reference:** C2 June 2017 Question 1  
**Related question:** See `AS1_integration_questions.md`, Question 16  
**Marks available:** 5  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $\displaystyle \int(6t^2+t^{1/2}+9-3t^{-3})dt$ | — | 0 | Setup. |
| 2 | $\displaystyle =2t^3+\frac{2t^{3/2}}{3}+9t+\frac{3t^{-2}}{2}+c$ | MW5 | 5 | Integrates all terms. |

### Final Answer

$$
2t^3+\frac{2t^{3/2}}{3}+9t+\frac{3t^{-2}}{2}+c.
$$

### What the Examiner Wanted

The examiner wanted correct handling of fractional and negative powers of $t$.

---

## Solution to Question 17: C2 June 2017 Question 3

**Question ID:** `AS1IntegrationQ017`  
**Source:** Mark Scheme PDF p.10  
**Original reference:** C2 June 2017 Question 3  
**Related question:** See `AS1_integration_questions.md`, Question 17  
**Marks available:** 9  
**Match confidence:** High

[VISUAL REFERENCE: AS1IntegrationQ017TikZ-001 | See AI-proposed diagram in AS1_integration_tikz.md | Purpose: supports the area-between-line-and-curve setup.]

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $6x-x^2=8$ | — | 0 | Equates line and curve. |
| 2 | $x^2-6x+8=0$ | — | 0 | Rearranges. |
| 3 | $(x-2)(x-4)=0$ | — | 0 | Factorises. |
| 4 | $x=2\text{ or }4$ | M1 W1 | 2 | Intersection x-values. |
| 5 | $\displaystyle \text{Area}=\int_2^4(6x-x^2)dx-(4-2)\times8$ | M2 W1 | 3 | Curve area minus rectangle. |
| 6 | $\displaystyle =\left[3x^2-\frac{x^3}{3}\right]_2^4-16$ | MW2 MW1 | 3 | Integrates and subtracts. |
| 7 | $\displaystyle =\left(48-\frac{64}{3}\right)-\left(12-\frac83\right)-16$ | — | 0 | Substitution shown. |
| 8 | $\displaystyle =\frac43\text{ unit}^2$ | MW1 | 1 | Final area. |

### Final Answer

$$
x=2\text{ or }4,
\qquad \text{area}=\frac43\text{ unit}^2.
$$

### What the Examiner Wanted

The examiner wanted intersection points first, then an area calculation between the curve and horizontal line.

---

## Solution to Question 18: C2 June 2018 Question 3

**Question ID:** `AS1IntegrationQ018`  
**Source:** Mark Scheme PDF p.10  
**Original reference:** C2 June 2018 Question 3  
**Related question:** See `AS1_integration_questions.md`, Question 18  
**Marks available:** 11  
**Match confidence:** High

[VISUAL REFERENCE: AS1IntegrationQ018TikZ-001 | See question diagram in AS1_integration_tikz.md | Purpose: supports the top-minus-bottom setup.]

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $\displaystyle \int\left(2x^3-\sqrt{x}+\frac1{x^4}-3\right)dx$ | — | 0 | Setup. |
| 2 | $\displaystyle =\frac12x^4-\frac23x^{3/2}-\frac13x^{-3}-3x+c$ | MW4 W1 | 5 | Integrates part (a). |
| 3 | $\displaystyle =\frac12x^4-\frac{2\sqrt{x^3}}3-\frac{1}{3x^3}-3x+c$ | — | 0 | Equivalent form. |
| 4 | $\displaystyle \text{Area}=\int_2^3\left((-x^2+5x-4)-(x^2-5x+8)\right)dx$ | M2 W1 | 3 | Top minus bottom. |
| 5 | $\displaystyle =\int_2^3(-2x^2+10x-12)dx$ | — | 0 | Simplifies. |
| 6 | $\displaystyle =\left[-\frac23x^3+5x^2-12x\right]_2^3$ | MW2 | 2 | Integrates with limits. |
| 7 | $\displaystyle =\left[-\frac23(3)^3+5(3)^2-12(3)\right]-\left[-\frac23(2)^3+5(2)^2-12(2)\right]$ | — | 0 | Substitution shown. |
| 8 | $\displaystyle =\frac13\text{ units}^2$ | MW1 | 1 | Final area. |

### Final Answer

$$
\frac12x^4-\frac23x^{3/2}-\frac13x^{-3}-3x+c,
\qquad \text{area}=\frac13\text{ units}^2.
$$

### What the Examiner Wanted

The examiner wanted the correct top curve identified and the integral evaluated over $x=2$ to $x=3$.

---

## Solution to Question 19: C2 June 2019 Question 5

**Question ID:** `AS1IntegrationQ019`  
**Source:** Mark Scheme PDF p.11  
**Original reference:** C2 June 2019 Question 5 in questions PDF; mark scheme heading says C2 June 2018 Question 5  
**Related question:** See `AS1_integration_questions.md`, Question 19  
**Marks available:** 9  
**Match confidence:** Medium

[VISUAL REFERENCE: AS1IntegrationQ019TikZ-001 | See question diagram in AS1_integration_tikz.md | Purpose: supports the integration with respect to $y$ and area sign.]

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $\displaystyle \int\left(\frac{3x^{-3}}2-6x\right)dx$ | — | 0 | Setup. |
| 2 | $\displaystyle =-\frac{3x^{-2}}4-3x^2+c$ | MW3 | 3 | Integrates part (a). |
| 3 | $\displaystyle \int_1^4(y^2-5y+4)dy$ | M1W1 | 2 | Sets up signed area. |
| 4 | $\displaystyle =\left[\frac{y^3}{3}-\frac52y^2+4y\right]_1^4$ | MW2 | 2 | Integrates with respect to $y$. |
| 5 | $\displaystyle =\left[-\frac83\right]-\left[\frac{11}{6}\right]$ | — | 0 | Substitutes limits. |
| 6 | $\displaystyle =-\frac92$ | W1 | 1 | Signed integral. |
| 7 | $\displaystyle \text{Area}=\frac92\text{ square units}$ | M1 | 1 | Takes absolute area. |

### Final Answer

$$
-\frac{3x^{-2}}4-3x^2+c,
\qquad \text{area}=\frac92\text{ square units}.
$$

### What the Examiner Wanted

The examiner wanted integration with respect to $y$, then the positive area from the magnitude of the signed integral.

---

## Solution to Question 20: AS1_(new spec)_June_2019 Question 5(a)

**Question ID:** `AS1IntegrationQ020`  
**Source:** Mark Scheme PDF p.11  
**Original reference:** AS1_(new spec)_June_2019 Question 5(a)  
**Related question:** See `AS1_integration_questions.md`, Question 20  
**Marks available:** 6  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $\displaystyle \left[\frac{4x^{3/2}}{3}\right]_1^k=\frac{28}{3}$ | M1 W1 | 2 | Integrates and applies limits. |
| 2 | $\displaystyle \frac{4k^{3/2}}3-\frac43=\frac{28}{3}$ | M1 W1 | 2 | Substitutes limits. |
| 3 | $\displaystyle \Rightarrow 4k^{3/2}=32$ | M1 | 1 | Rearranges. |
| 4 | $\displaystyle k^{3/2}=8$ | — | 0 | Simplifies. |
| 5 | $\displaystyle k=4$ | W1 | 1 | Final value. |

### Final Answer

$$
k=4.
$$

### What the Examiner Wanted

The examiner wanted the definite integral evaluated first, then the resulting equation solved for $k$.

---

## Unmatched Mark Scheme Entries

No unmatched mark scheme entries were found. All visible mark scheme sections were matched to questions in the supplied questions PDF.

## 7. Diagram Assets

## 7.1 Mermaid Assets

### Source File Metadata

```yaml
filename: "AS1_integration_mermaid.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/09. Integration-Questions/AS1_integration_mermaid.md"
lines: 6
bytes_utf8: 252
sha256: "555018bf50fe07b38199d62f5a24f11b03380f126ebebd4ae0739964dd0b7b62"
```

### Preserved Source Content: AS1_integration_mermaid.md

# Mermaid Diagrams for CCEA AS1 Integration

**Pack ID:** `AS1Integration`

No Mermaid diagrams were required for this question pack. The visual assets in the questions are mathematical graphs and area diagrams, so TikZ is the most appropriate format.

## 7.2 SVG Assets

### Source File Metadata

```yaml
filename: "AS1_integration_svg.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/09. Integration-Questions/AS1_integration_svg.md"
lines: 6
bytes_utf8: 254
sha256: "1a6ab6f0d7cbdaed7e27ea1e959215d3a1de78fc0df47cb543157df2a79d427d"
```

### Preserved Source Content: AS1_integration_svg.md

# SVG Diagrams for CCEA AS1 Integration

**Pack ID:** `AS1Integration`

No SVG diagrams were required for this question pack. The questions mainly contain coordinate graphs and mathematically precise shaded regions, which are better represented in TikZ.

## 7.3 TikZ Assets

### Source File Metadata

```yaml
filename: "AS1_integration_tikz.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/09. Integration-Questions/AS1_integration_tikz.md"
lines: 338
bytes_utf8: 13769
sha256: "fe97d612b9725dc7596a18b4bb4c2396e91a5d1f1262119dc129511feea7553a"
```

### Preserved Source Content: AS1_integration_tikz.md

# TikZ Diagrams for CCEA AS1 Integration

**Pack ID:** `AS1Integration`

## AS1IntegrationQ002TikZ-001: Shaded regions for $y=4x^2-x^3$

**Source:** Questions PDF p.2  
**Related question:** Question 2  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1IntegrationQ002TikZ-001 | ...]`  
**Purpose:** Recreate Fig. 2 showing the positive shaded area from $x=0$ to $x=4$ and the negative shaded area from $x=4$ to $x=a$.

### Creation Notes

TikZ is used because the figure is a mathematical curve with labelled axes, intercepts and shaded areas.

```latex
\begin{tikzpicture}[scale=0.9]
  \draw[->] (-0.6,0) -- (6.0,0) node[right] {$x$};
  \draw[->] (0,-3.2) -- (0,3.0) node[above] {$y$};
  \fill[gray!25] (0,0) -- plot[domain=0:4, samples=80] (\x,{(4*\x*\x-\x*\x*\x)/8}) -- (4,0) -- cycle;
  \fill[gray!25] (4,0) -- plot[domain=4:5.33, samples=60] (\x,{(4*\x*\x-\x*\x*\x)/8}) -- (5.33,0) -- cycle;
  \draw[domain=0:5.6, samples=120, smooth, thick] plot (\x,{(4*\x*\x-\x*\x*\x)/8});
  \draw[dashed] (5.33,0) -- (5.33,{(4*5.33*5.33-5.33*5.33*5.33)/8});
  \node[below] at (0,0) {$0$};
  \node[below] at (4,0) {$4$};
  \node[below] at (5.33,0) {$a$};
  \node[above right] at (2.1,2.2) {$y=4x^2-x^3$};
  \node[below] at (2.6,-3.0) {Fig. 2};
\end{tikzpicture}
```

## AS1IntegrationQ003TikZ-001: Area between two parabolas

**Source:** Questions PDF p.3  
**Related question:** Question 3  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1IntegrationQ003TikZ-001 | ...]`  
**Purpose:** Recreate Fig. 4 showing the curves $y=x^2-8x+16$ and $y=4+6x-x^2$ with intersection points $(1,9)$ and $(6,4)$.

### Creation Notes

TikZ gives accurate plotted curves and labelled intersection points for the area-between-curves question.

```latex
\begin{tikzpicture}[scale=0.72]
  \draw[->] (-0.3,0) -- (7.5,0) node[right] {$x$};
  \draw[->] (0,-0.3) -- (0,4.0) node[above] {$y$};
  \fill[gray!25] plot[domain=1:6, samples=90] (\x,{(4+6*\x-\x*\x)/4}) -- plot[domain=6:1, samples=90] (\x,{(\x*\x-8*\x+16)/4}) -- cycle;
  \draw[domain=-0.2:7, samples=100, smooth, thick] plot (\x,{(\x*\x-8*\x+16)/4});
  \draw[domain=0.2:6.8, samples=100, smooth, thick] plot (\x,{(4+6*\x-\x*\x)/4});
  \draw[dashed] (1,0) -- (1,{9/4});
  \draw[dashed] (6,0) -- (6,{4/4});
  \node[below] at (1,0) {$1$};
  \node[below] at (6,0) {$6$};
  \node[left] at (0,{9/4}) {$9$};
  \node[left] at (0,{4/4}) {$4$};
  \node[above] at (2.0,3.2) {$y=4+6x-x^2$};
  \node[right] at (4.7,1.0) {$y=x^2-8x+16$};
  \node[below] at (3.7,-0.4) {Fig. 4};
\end{tikzpicture}
```

## AS1IntegrationQ004TikZ-001: Logo area under a cubic curve

**Source:** Questions PDF p.4  
**Related question:** Question 4  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1IntegrationQ004TikZ-001 | ...]`  
**Purpose:** Recreate Fig. 2 showing the shaded logo region under $y=2x^3-8x^2+7x+3$ between $x=0$ and $x=3$.

### Creation Notes

TikZ is suitable because the area is represented by a cubic curve and vertical/x-axis boundaries.

```latex
\begin{tikzpicture}[scale=1.0]
  \draw[->] (-0.4,0) -- (3.8,0) node[right] {$x$};
  \draw[->] (0,-0.3) -- (0,3.8) node[above] {$y$};
  \fill[gray!25] (0,0) -- plot[domain=0:3, samples=100] (\x,{(2*\x*\x*\x-8*\x*\x+7*\x+3)/2}) -- (3,0) -- cycle;
  \draw[domain=0:3, samples=120, smooth, thick] plot (\x,{(2*\x*\x*\x-8*\x*\x+7*\x+3)/2});
  \draw[dashed] (0,3) -- (3,3) -- (3,0);
  \node[left] at (0,3) {$6$};
  \node[below] at (0,0) {$O$};
  \node[below] at (3,0) {$3$};
  \node[below] at (1.7,-0.5) {Fig. 2};
\end{tikzpicture}
```

## AS1IntegrationQ005TikZ-001: Area bounded by $y=8-x^{3/2}$ and the axes

**Source:** Questions PDF p.5  
**Related question:** Question 5  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1IntegrationQ005TikZ-001 | ...]`  
**Purpose:** Recreate Fig. 2 showing the curve $y=8-x^{3/2}$ and the area bounded by the coordinate axes.

### Creation Notes

The curve and its intercepts are the key mathematical features; TikZ can show these cleanly.

```latex
\begin{tikzpicture}[scale=0.9]
  \draw[->] (-0.4,0) -- (4.8,0) node[right] {$x$};
  \draw[->] (0,-0.5) -- (0,4.8) node[above] {$y$};
  \fill[gray!25] (0,0) -- (0,4) -- plot[domain=0:4, samples=120] (\x,{(8-pow(\x,1.5))/2}) -- (4,0) -- cycle;
  \draw[domain=0:4.2, samples=120, smooth, thick] plot (\x,{(8-pow(\x,1.5))/2});
  \node[left] at (0,4) {$8$};
  \node[below] at (4,0) {$4$};
  \node[below] at (2.1,-0.7) {Fig. 2};
\end{tikzpicture}
```

## AS1IntegrationQ006TikZ-001: Region bounded by $y=1/x^2$, the y-axis and $y=1,4$

**Source:** Questions PDF p.5  
**Related question:** Question 6  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1IntegrationQ006TikZ-001 | ...]`  
**Purpose:** Recreate Fig. 3 showing the reciprocal-square graph and the enclosed region.

### Creation Notes

TikZ is used to show the curve and the horizontal bounds $y=1$ and $y=4$.

```latex
\begin{tikzpicture}[scale=1.0]
  \draw[->] (-0.2,0) -- (3.4,0) node[right] {$x$};
  \draw[->] (0,-0.2) -- (0,4.8) node[above] {$y$};
  \fill[gray!25] (0,1) -- (0,4) -- plot[domain=4:1, variable=\t, samples=80] ({1/sqrt(\t)},{\t}) -- cycle;
  \draw[domain=0.45:3.0, samples=120, smooth, thick] plot (\x,{1/(\x*\x)});
  \draw[dashed] (0,1) -- (1,1);
  \draw[dashed] (0,4) -- (0.5,4);
  \node[left] at (0,1) {$1$};
  \node[left] at (0,4) {$4$};
  \node[below] at (1.7,-0.5) {Fig. 3};
\end{tikzpicture}
```

## AS1IntegrationQ008TikZ-001: Composite shaded region under a line and a curve

**Source:** Questions PDF p.6  
**Related question:** Question 8  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1IntegrationQ008TikZ-001 | ...]`  
**Purpose:** Recreate Fig. 1 showing $y=x+4$, $y=x^2-4x+4$ and the shaded area.

### Creation Notes

The figure supports the solution split into a triangle and an integral under the curve.

```latex
\begin{tikzpicture}[scale=0.75]
  \draw[->] (-5,0) -- (4.5,0) node[right] {$x$};
  \draw[->] (0,-1.2) -- (0,7.0) node[above] {$y$};
  \fill[gray!25] (-4,0) -- plot[domain=-4:0, samples=40] (\x,{\x+4}) -- (0,0) -- cycle;
  \fill[gray!25] (0,0) -- plot[domain=0:2, samples=80] (\x,{\x*\x-4*\x+4}) -- (2,0) -- cycle;
  \draw[domain=-4.5:2.2, samples=80, thick] plot (\x,{\x+4}) node[right] {$y=x+4$};
  \draw[domain=-1.0:4.0, samples=120, smooth, thick] plot (\x,{\x*\x-4*\x+4}) node[right] {$y=x^2-4x+4$};
  \node[left] at (0,4) {$(0,4)$};
  \node[below] at (-4,0) {$-4$};
  \node[below] at (2,0) {$2$};
  \node[below] at (0,0) {$0$};
  \node[below] at (0,-1.1) {Fig. 1};
\end{tikzpicture}
```

## AS1IntegrationQ010TikZ-001: Rudder region for $y=\sqrt[3]{x-8}$

**Source:** Questions PDF p.7  
**Related question:** Question 10  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1IntegrationQ010TikZ-001 | ...]`  
**Purpose:** Recreate Fig. 3 showing the region bounded by $x=0$, $y=1$ and $y=\sqrt[3]{x-8}$.

### Creation Notes

The graph is easier to draw as $x=y^3+8$, matching the mark scheme method.

```latex
\begin{tikzpicture}[scale=0.72]
  \draw[->] (-0.5,0) -- (10,0) node[right] {$x$};
  \draw[->] (0,-2.5) -- (0,2.0) node[above] {$y$};
  \fill[gray!25] (0,-2) -- (0,1) -- plot[domain=1:-2, variable=\t, samples=100] ({\t*\t*\t+8},{\t}) -- cycle;
  \draw[domain=-2:1, variable=\t, samples=120, smooth, thick] plot ({\t*\t*\t+8},{\t});
  \draw[dashed] (0,1) -- (9,1);
  \node[left] at (0,1) {$1$};
  \node[left] at (0,-2) {$-2$};
  \node[below] at (8,0) {$8$};
  \node[below] at (9,0) {$9$};
  \node[right] at (6.7,1.35) {$y=\sqrt[3]{x-8}$};
  \node[below] at (4.7,-2.7) {Fig. 3};
\end{tikzpicture}
```

## AS1IntegrationQ012TikZ-001: Curves $y=x^2$ and $y=8\sqrt{x}$ meeting at A

**Source:** Questions PDF p.8  
**Related question:** Question 12  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1IntegrationQ012TikZ-001 | ...]`  
**Purpose:** Recreate Fig. 5 showing the two curves and the point A.

### Creation Notes

TikZ allows both curves to be plotted precisely and labelled.

```latex
\begin{tikzpicture}[scale=0.85]
  \draw[->] (-0.3,0) -- (5.5,0) node[right] {$x$};
  \draw[->] (0,-0.3) -- (0,5.0) node[above] {$y$};
  \draw[domain=0:4.6, samples=120, smooth, thick] plot (\x,{\x*\x/4}) node[right] {$y=x^2$};
  \draw[domain=0:5.0, samples=120, smooth, thick] plot (\x,{2*sqrt(\x)}) node[right] {$y=8\sqrt{x}$};
  \fill (4,4) circle (2pt);
  \node[above] at (4,4) {$A$};
  \node[below] at (2.8,-0.5) {Fig. 5};
\end{tikzpicture}
```

## AS1IntegrationQ012TikZ-002: Reflected logo area between $y=x^2$ and $y=8\sqrt{x}$

**Source:** Questions PDF p.8  
**Related question:** Question 12  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1IntegrationQ012TikZ-002 | ...]`  
**Purpose:** Recreate Fig. 6 showing the lobe between the two curves reflected in the y-axis.

### Creation Notes

The diagram shows why the integral for one side is doubled.

```latex
\begin{tikzpicture}[scale=0.8]
  \draw[->] (-5.2,0) -- (5.2,0) node[right] {$x$};
  \draw[->] (0,-0.3) -- (0,4.8) node[above] {$y$};
  % right lobe
  \fill[gray!25] plot[domain=0:4, samples=100] (\x,{2*sqrt(\x)}) -- plot[domain=4:0, samples=100] (\x,{\x*\x/4}) -- cycle;
  % left lobe (reflection)
  \fill[gray!25] plot[domain=0:4, samples=100] ({-\x},{2*sqrt(\x)}) -- plot[domain=4:0, samples=100] ({-\x},{\x*\x/4}) -- cycle;
  \draw[domain=0:4, samples=100, smooth, thick] plot (\x,{2*sqrt(\x)});
  \draw[domain=0:4, samples=100, smooth, thick] plot (\x,{\x*\x/4});
  \draw[domain=0:4, samples=100, smooth, thick] plot ({-\x},{2*sqrt(\x)});
  \draw[domain=0:4, samples=100, smooth, thick] plot ({-\x},{\x*\x/4});
  \node[below] at (0,-0.5) {Fig. 6};
\end{tikzpicture}
```

## AS1IntegrationQ015TikZ-001: Area under $y=x^{1/3}+4x$ between $x=1$ and $x=8$

**Source:** Questions PDF p.9  
**Related question:** Question 15  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1IntegrationQ015TikZ-001 | ...]`  
**Purpose:** Recreate Fig. 1 and indicate the region bounded by the curve, $x=1$, $x=8$ and the x-axis.

### Creation Notes

The original figure is a sketch; this version adds shading for the requested area while preserving the mathematical meaning.

```latex
\begin{tikzpicture}[scale=0.7]
  \draw[->] (-1.5,0) -- (9,0) node[right] {$x$};
  \draw[->] (0,-1.2) -- (0,6.5) node[above] {$y$};
  \fill[gray!25] (1,0) -- plot[domain=1:8, samples=100] (\x,{0.15*(pow(\x,1/3)+4*\x)}) -- (8,0) -- cycle;
  \draw[domain=0:8.5, samples=120, smooth, thick] plot (\x,{0.15*(pow(\x,1/3)+4*\x)});
  \draw[dashed] (1,0) -- (1,{0.15*(1+4)});
  \draw[dashed] (8,0) -- (8,{0.15*(2+32)});
  \node[below] at (1,0) {$1$};
  \node[below] at (8,0) {$8$};
  \node[right] at (3.2,3.2) {$y=x^{1/3}+4x$};
  \node[below] at (4,-1.0) {Fig. 1};
\end{tikzpicture}
```

## AS1IntegrationQ017TikZ-001: AI-proposed sketch for $y=8$ and $y=6x-x^2$

**Source:** AI-proposed visual support, not present in questions PDF.  
**Related question:** Question 17  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1IntegrationQ017TikZ-001 | ...]`  
**Purpose:** Provide a clear visual support sketch for the area bounded by the line and curve.

### Creation Notes

The original question did not include a diagram. This sketch helps students identify that the curve lies above the line between $x=2$ and $x=4$.

```latex
\begin{tikzpicture}[scale=0.8]
  \draw[->] (-0.5,0) -- (6.5,0) node[right] {$x$};
  \draw[->] (0,-0.5) -- (0,4.5) node[above] {$y$};
  \fill[gray!25] (2,{8/3}) -- plot[domain=2:4, samples=80] (\x,{(6*\x-\x*\x)/3}) -- (4,{8/3}) -- cycle;
  \draw[domain=0:6, samples=100, smooth, thick] plot (\x,{(6*\x-\x*\x)/3}) node[right] {$y=6x-x^2$};
  \draw[thick] (0,{8/3}) -- (6,{8/3}) node[right] {$y=8$};
  \draw[dashed] (2,0) -- (2,{8/3});
  \draw[dashed] (4,0) -- (4,{8/3});
  \node[below] at (2,0) {$2$};
  \node[below] at (4,0) {$4$};
\end{tikzpicture}
```

## AS1IntegrationQ018TikZ-001: Enclosed area between two parabolas

**Source:** Questions PDF p.10  
**Related question:** Question 18  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1IntegrationQ018TikZ-001 | ...]`  
**Purpose:** Recreate Fig. 1 showing $y=x^2-5x+8$ and $y=-x^2+5x-4$ with the enclosed lens-shaped region.

### Creation Notes

TikZ is used to plot both parabolas and shade the enclosed area between $x=2$ and $x=3$.

```latex
\begin{tikzpicture}[scale=1.0]
  \draw[->] (-0.2,0) -- (4.8,0) node[right] {$x$};
  \draw[->] (0,-1.0) -- (0,4.0) node[above] {$y$};
  \fill[gray!25] plot[domain=2:3, samples=80] (\x,{-\x*\x+5*\x-4}) -- plot[domain=3:2, samples=80] (\x,{\x*\x-5*\x+8}) -- cycle;
  \draw[domain=0.7:4.2, samples=120, smooth, thick] plot (\x,{\x*\x-5*\x+8}) node[right] {$y=x^2-5x+8$};
  \draw[domain=0.8:4.1, samples=120, smooth, thick] plot (\x,{-\x*\x+5*\x-4}) node[right] {$y=-x^2+5x-4$};
  \fill (2,2) circle (2pt) node[left] {$(2,2)$};
  \fill (3,2) circle (2pt) node[right] {$(3,2)$};
  \node[below] at (2.3,-0.6) {Fig. 1};
\end{tikzpicture}
```

## AS1IntegrationQ019TikZ-001: Shaded area for $x=y^2-5y+4$

**Source:** Questions PDF p.11  
**Related question:** Question 19  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1IntegrationQ019TikZ-001 | ...]`  
**Purpose:** Recreate Fig. 2 showing the curve $x=y^2-5y+4$ and the shaded area between the curve and the y-axis for $1\le y\le4$.

### Creation Notes

The curve is represented as $x$ in terms of $y$, which matches the official solution method.

```latex
\begin{tikzpicture}[scale=1.0]
  \draw[->] (-3.0,0) -- (2.5,0) node[right] {$x$};
  \draw[->] (0,-0.5) -- (0,5.0) node[above] {$y$};
  \fill[gray!25] (0,1) -- (0,4) -- plot[domain=4:1, variable=\t, samples=100] ({\t*\t-5*\t+4},{\t}) -- cycle;
  \draw[domain=0:5, variable=\t, samples=120, smooth, thick] plot ({\t*\t-5*\t+4},{\t});
  \node[left] at (0,1) {$1$};
  \node[left] at (0,4) {$4$};
  \node[right] at (0.6,4.4) {$x=y^2-5y+4$};
  \node[below] at (0,0) {$0$};
  \node[below] at (-1.2,-0.6) {Fig. 2};
\end{tikzpicture}
```

## 8. Interactive Widgets

## 8.1 Widget Assets

### Source File Metadata

```yaml
filename: "AS1_integration_widgets.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/09. Integration-Questions/AS1_integration_widgets.md"
lines: 6
bytes_utf8: 305
sha256: "deaa96f268711678792d32caf3cea67bd444a6389762261ed6d00c2012749427"
```

### Preserved Source Content: AS1_integration_widgets.md

# Interactive Widgets for CCEA AS1 Integration

**Pack ID:** `AS1Integration`

No interactive widgets were required for this question pack. The questions are better practised through written exam-style working, with the supplied mark scheme and diagram files used for checking structure and presentation.

## 9. Agent Retrieval Notes

Use Section 5 as the authoritative question source and Section 6 as the solution/mark-scheme source. Do not merge question wording with solutions unless a user explicitly asks for worked examples or marking guidance.
