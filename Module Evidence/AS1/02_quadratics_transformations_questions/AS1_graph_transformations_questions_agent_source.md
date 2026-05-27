# AS1 Graph Transformations Questions Agent Source

## 0. AI-Agent Usage Instructions

This file is a source for question retrieval, solution lookup, mark-scheme interpretation, diagnostics and targeted practice. Questions are in Section 5. Solutions and mark schemes are in Section 6. Diagram assets are in Section 7. Widgets are in Section 8. Keep questions and solutions separate unless explicitly asked to combine them. Preserve official mark-scheme labels, uncertainty notes and generated-solution labels. Use UK/CCEA mathematical vocabulary.

## 1. Pack Metadata

```yaml
pack_type: question
unit_code: AS1
unit_name: CCEA AS1 Pure Mathematics
topic_slug: "02_quadratics_transformations_questions"
topic_title: "Graph Transformations"
source_folder: "/Users/evanward/Documents/AS Portal - New /AS1 Files/02. Quadratics-Transformations-Questions"
output_file: "/Users/evanward/Documents/AS Portal - New /AS1 Files/00_AGENT_SOURCE_PACKS/02_quadratics_transformations_questions/AS1_graph_transformations_questions_agent_source.md"
created_from_files:
  lesson: null
  questions: "AS1_graph_transformations_questions.md"
  solutions: "AS1_graph_transformations_solutions.md"
  mermaid: "AS1_graph_transformations_mermaid.md"
  svg: "AS1_graph_transformations_svg.md"
  tikz: "AS1_graph_transformations_tikz.md"
  widgets: "AS1_graph_transformations_widgets.md"
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
| questions | AS1_graph_transformations_questions.md | 595 | 16063 | `3f8d37d299cc7f0f77a50bc05ad5d1374dd9da03e516933559b6a97a75f568ed` |
| solutions | AS1_graph_transformations_solutions.md | 479 | 20950 | `85299a9415d8ccd3f8d4e2216fc5458825ae134521b5914bc78e5b198410dd75` |
| mermaid | AS1_graph_transformations_mermaid.md | 6 | 256 | `442bcdca4226b69d5db9eb6408d345c5b6b2353808bd4a60f04fd6f01e7405ce` |
| svg | AS1_graph_transformations_svg.md | 6 | 223 | `9c06b118c59c0a70c89fcb8e669eccada77ec23ad2b1894e981552ea69b2296d` |
| tikz | AS1_graph_transformations_tikz.md | 403 | 18270 | `32fd3a449c89bb0c8e23f4d0be9ff2a95ddc55712c6af3d84a73161a46c96860` |
| widgets | AS1_graph_transformations_widgets.md | 95 | 3695 | `3ce0932de6f7432a08e2486d2427e0536872aecf40a27c0c7ed71e81d3428c50` |

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
filename: "AS1_graph_transformations_questions.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/02. Quadratics-Transformations-Questions/AS1_graph_transformations_questions.md"
lines: 595
bytes_utf8: 16063
sha256: "3f8d37d299cc7f0f77a50bc05ad5d1374dd9da03e516933559b6a97a75f568ed"
```

### Preserved Source Content: AS1_graph_transformations_questions.md

# Graph Transformations Question Pack

**Unit:** CCEA AS1 Pure Mathematics  
**Questions PDF:** AS1_Graph_Transformations_questions.pdf  
**Solutions / Mark Scheme PDF:** AS1_Graph_Transformations_solutions.pdf  
**Date generated:** 22 May 2026  
**Pack ID:** AS1GraphTransformations

---
## 1. Source Document Map

| Document type | Filename | Page count | Role in this pack |
|---|---|---:|---|
| Questions PDF | AS1_Graph_Transformations_questions.pdf | 15 | Source of questions, marks, diagrams, and wording |
| Mark scheme PDF | AS1_Graph_Transformations_solutions.pdf | 11 | Source of official solutions and marks |

---
## 2. Specification Alignment

| Specification area | Relevant learning outcome | Question numbers testing it | Notes on coverage | Gaps or comments |
|---|---|---|---|---|
| AS1 Algebra and functions | Effect of simple transformations on $y=f(x)$ | 1-16 | Main focus | None |
| AS1 Curve sketching | Sketch associated graphs | 1-7, 9-12, 14, 16 | Frequent sketch tasks | None |
| AS1 Function notation | Use $af(x)$, $f(x+a)$, $f(ax)$ | 1-16 | Old C1 notation aligns with AS1 | None |

---
## 3. Question Index

| Pack question | Original reference | Questions PDF page | Marks | Subtopic | Diagram? | AI visual suggested? | Matching solution |
|---:|---|---:|---:|---|---|---|---|
| 1 | C1 January 2010 Question 1 | 2 | 4 | translations and vertical stretch | Yes | No | High |
| 2 | C1 June 2010 Question 3 | 3 | 6 | vertical shift, reflection, horizontal compression | Yes | No | High |
| 3 | C1 January 2011 Question 5(a) | 3 | 2 | horizontal translation | Yes | No | High |
| 4 | C1 June 2011 Question 3(c) | 4 | 2 | reflection in the x-axis | Yes | No | High |
| 5 | C1 January 2012 Question 2 | 5 | 4 | vertical stretch and horizontal compression | Yes | No | High |
| 6 | C1 June 2012 Question 1(b) | 6 | 4 | horizontal translation and reflection in the y-axis | Yes | No | High |
| 7 | C1 January 2013 Question 2(a) | 7 | 4 | vertical shift and horizontal stretch | Yes | No | Low |
| 8 | C1 June 2013 Question 2 | 8 | 4 | describe transformations using function notation | Yes | No | High |
| 9 | C1 January 2014 Question 1(a) | 9 | 6 | vertical shift, horizontal translation, horizontal compression | Yes | No | High |
| 10 | C1 June 2014 Question 1(b) | 9 | 4 | vertical stretch and reflection in the y-axis | Yes | No | High |
| 11 | C1 June 2015 Question 1 | 10 | 4 | horizontal translation and horizontal compression | Yes | No | High |
| 12 | C1 June 2016 Question 2 | 11 | 5 | vertical shift, horizontal stretch, inverse shift parameter | Yes | No | High |
| 13 | C1 June 2017 Question 2 | 12 | 6 | identify transformations from sketches | Yes | No | High |
| 14 | C1 June 2018 Question 1 | 13 | 6 | vertical shift, vertical compression, reflection in the y-axis | Yes | No | High |
| 15 | C1 June 2019 Question 2 | 14-15 | 6 | identify transformations from sketches | Yes | No | High |
| 16 | AS1 (new spec) June 2019 Question 2 | 15 | 7 | point images and asymptote shift | Yes | No | High |

---

## 4. Questions

## Question 1: C1 January 2010 Question 1

**Question ID:** AS1GraphTransformationsQ001  
**Source:** Questions PDF p.2  
**Original reference:** C1 January 2010 Question 1  
**Marks:** 4  
**Subtopic:** translations and vertical stretch

### Question

1. Fig. 1 below shows a sketch of the graph of the function $y=f(x)$.

Point A has coordinates $(-1,4)$.

Sketch, on separate diagrams, the graphs of:

(i) $y=f(x-4)$ \hfill $[2]$

(ii) $y=3f(x)$ \hfill $[2]$

clearly identifying the image of the point A.

[VISUAL PLACEHOLDER: AS1GraphTransformationsQ001TikZ-001 | Source: Questions PDF p.2 | Insert from AS1_graph_transformations_tikz.md | Purpose: source sketch for C1 January 2010 Question 1]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

## Question 2: C1 June 2010 Question 3

**Question ID:** AS1GraphTransformationsQ002  
**Source:** Questions PDF p.3  
**Original reference:** C1 June 2010 Question 3  
**Marks:** 6  
**Subtopic:** vertical shift, reflection, horizontal compression

### Question

3. The diagram in Fig. 1 below shows the graph of the curve $y=f(x)$.
The point A, $(5,4)$, lies on the curve.

Sketch, on separate diagrams, the graphs of:

(i) $y=f(x)-1$ \hfill $[2]$

(ii) $y=-f(x)$ \hfill $[2]$

(iii) $y=f(2x)$ \hfill $[2]$

clearly indicating the image of the point A on each sketch.

[VISUAL PLACEHOLDER: AS1GraphTransformationsQ002TikZ-001 | Source: Questions PDF p.3 | Insert from AS1_graph_transformations_tikz.md | Purpose: source sketch for C1 June 2010 Question 3]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

## Question 3: C1 January 2011 Question 5(a)

**Question ID:** AS1GraphTransformationsQ003  
**Source:** Questions PDF p.3  
**Original reference:** C1 January 2011 Question 5(a)  
**Marks:** 2  
**Subtopic:** horizontal translation

### Question

5. (a) The graph of the function $y=f(x)$ is sketched in Fig. 2 below.

Draw a sketch of the graph of $y=f(x+2)$ clearly labelling the image of point A. \hfill $[2]$

[VISUAL PLACEHOLDER: AS1GraphTransformationsQ003TikZ-001 | Source: Questions PDF p.3 | Insert from AS1_graph_transformations_tikz.md | Purpose: source sketch for C1 January 2011 Question 5(a)]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

## Question 4: C1 June 2011 Question 3(c)

**Question ID:** AS1GraphTransformationsQ004  
**Source:** Questions PDF p.4  
**Original reference:** C1 June 2011 Question 3(c)  
**Marks:** 2  
**Subtopic:** reflection in the x-axis

### Question

3. (c) The graph of the function $y=f(x)$ is sketched in Fig. 1 below.

Point A has coordinates $(-2,1)$.
Sketch the graph of $y=-f(x)$ clearly labelling the image of point A. \hfill $[2]$

[VISUAL PLACEHOLDER: AS1GraphTransformationsQ004TikZ-001 | Source: Questions PDF p.4 | Insert from AS1_graph_transformations_tikz.md | Purpose: source sketch for C1 June 2011 Question 3(c)]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

## Question 5: C1 January 2012 Question 2

**Question ID:** AS1GraphTransformationsQ005  
**Source:** Questions PDF p.5  
**Original reference:** C1 January 2012 Question 2  
**Marks:** 4  
**Subtopic:** vertical stretch and horizontal compression

### Question

2. Fig. 1 below shows a sketch of the graph of the function $y=f(x)$.

Point P has coordinates $(2,4)$.

Sketch, on separate diagrams, the graphs of:

(i) $y=3f(x)$ \hfill $[2]$

(ii) $y=f(2x)$ \hfill $[2]$

clearly identifying the image of the point P.

[VISUAL PLACEHOLDER: AS1GraphTransformationsQ005TikZ-001 | Source: Questions PDF p.5 | Insert from AS1_graph_transformations_tikz.md | Purpose: source sketch for C1 January 2012 Question 2]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

## Question 6: C1 June 2012 Question 1(b)

**Question ID:** AS1GraphTransformationsQ006  
**Source:** Questions PDF p.6  
**Original reference:** C1 June 2012 Question 1(b)  
**Marks:** 4  
**Subtopic:** horizontal translation and reflection in the y-axis

### Question

1. (b) Fig. 1 below shows a sketch of the graph of the function $y=f(x)$.

Point A has coordinates $(1,2)$.

Sketch, on separate diagrams, the graphs of:

(i) $y=f(x-1)$ \hfill $[2]$

(ii) $y=f(-x)$ \hfill $[2]$

clearly labelling the image of the point A.

[VISUAL PLACEHOLDER: AS1GraphTransformationsQ006TikZ-001 | Source: Questions PDF p.6 | Insert from AS1_graph_transformations_tikz.md | Purpose: source sketch for C1 June 2012 Question 1(b)]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

## Question 7: C1 January 2013 Question 2(a)

**Question ID:** AS1GraphTransformationsQ007  
**Source:** Questions PDF p.7  
**Original reference:** C1 January 2013 Question 2(a)  
**Marks:** 4  
**Subtopic:** vertical shift and horizontal stretch

### Question

2. (a) The graph of the function $y=f(x)$ is sketched in Fig. 1 below.

Point A has coordinates $(3,2)$.
Sketch, on separate diagrams, the graphs of:

(i) $y=f(x)+2$ \hfill $[2]$

(ii) $y=f\left(\frac{1}{2}x\right)$ \hfill $[2]$

clearly labelling the image of the point A.

[VISUAL PLACEHOLDER: AS1GraphTransformationsQ007TikZ-001 | Source: Questions PDF p.7 | Insert from AS1_graph_transformations_tikz.md | Purpose: source sketch for C1 January 2013 Question 2(a)]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

## Question 8: C1 June 2013 Question 2

**Question ID:** AS1GraphTransformationsQ008  
**Source:** Questions PDF p.8  
**Original reference:** C1 June 2013 Question 2  
**Marks:** 4  
**Subtopic:** describe transformations using function notation

### Question

2. Fig. 2 below shows a sketch of the function $y=f(x)$.

Fig. 3 below shows a sketch of the function $y=f(x)$ after a transformation.

(i) Describe the transformation, using function notation. \hfill $[2]$

Fig. 4 below shows a sketch of the original function $y=f(x)$ after a different transformation.

(ii) Describe the transformation, using function notation. \hfill $[2]$

[VISUAL PLACEHOLDER: AS1GraphTransformationsQ008TikZ-001 | Source: Questions PDF p.8 | Insert from AS1_graph_transformations_tikz.md | Purpose: source sketch for C1 June 2013 Question 2]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

## Question 9: C1 January 2014 Question 1(a)

**Question ID:** AS1GraphTransformationsQ009  
**Source:** Questions PDF p.9  
**Original reference:** C1 January 2014 Question 1(a)  
**Marks:** 6  
**Subtopic:** vertical shift, horizontal translation, horizontal compression

### Question

1. (a) Fig. 1 below shows a sketch of the graph of the function $y=f(x)$.

Point P has coordinates $(3,1)$.
Sketch, on separate diagrams, the graphs of:

(i) $y=f(x)-1$ \hfill $[2]$

(ii) $y=f(x-2)$ \hfill $[2]$

(iii) $y=f(3x)$ \hfill $[2]$

clearly labelling the image of point P.

[VISUAL PLACEHOLDER: AS1GraphTransformationsQ009TikZ-001 | Source: Questions PDF p.9 | Insert from AS1_graph_transformations_tikz.md | Purpose: source sketch for C1 January 2014 Question 1(a)]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

## Question 10: C1 June 2014 Question 1(b)

**Question ID:** AS1GraphTransformationsQ010  
**Source:** Questions PDF p.9  
**Original reference:** C1 June 2014 Question 1(b)  
**Marks:** 4  
**Subtopic:** vertical stretch and reflection in the y-axis

### Question

1. (b) Fig. 1 below shows a sketch of the graph of the function $y=f(x)$.

Point A has coordinates $(2,3)$.
Sketch, on separate diagrams, the graphs of:

(i) $y=2f(x)$ \hfill $[2]$

(ii) $y=f(-x)$ \hfill $[2]$

clearly labelling the image of point A.

[VISUAL PLACEHOLDER: AS1GraphTransformationsQ010TikZ-001 | Source: Questions PDF p.9 | Insert from AS1_graph_transformations_tikz.md | Purpose: source sketch for C1 June 2014 Question 1(b)]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

## Question 11: C1 June 2015 Question 1

**Question ID:** AS1GraphTransformationsQ011  
**Source:** Questions PDF p.10  
**Original reference:** C1 June 2015 Question 1  
**Marks:** 4  
**Subtopic:** horizontal translation and horizontal compression

### Question

1. Fig. 1 below shows a sketch of the graph of the function $y=f(x)$.

Point T has coordinates $(2,4)$.
Sketch, on separate diagrams, the graphs of:

(i) $y=f(x-3)$ \hfill $[2]$

(ii) $y=f(2x)$ \hfill $[2]$

clearly labelling the image of the point T.

[VISUAL PLACEHOLDER: AS1GraphTransformationsQ011TikZ-001 | Source: Questions PDF p.10 | Insert from AS1_graph_transformations_tikz.md | Purpose: source sketch for C1 June 2015 Question 1]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

## Question 12: C1 June 2016 Question 2

**Question ID:** AS1GraphTransformationsQ012  
**Source:** Questions PDF p.11  
**Original reference:** C1 June 2016 Question 2  
**Marks:** 5  
**Subtopic:** vertical shift, horizontal stretch, inverse shift parameter

### Question

2. Fig. 1 below shows a sketch of the graph of the function $y=f(x)$.

Point A has coordinates $(2,3)$.

Sketch, on separate diagrams, the graphs of:

(i) $y=f(x)+1$ \hfill $[2]$

(ii) $y=f\left(\frac{1}{2}x\right)$ \hfill $[2]$

clearly labelling the image of the point A.

(iii) When $y=f(x+a)$ is sketched, the point A maps onto the point with coordinates $(6,3)$.

Write down the value of $a$. \hfill $[1]$

[VISUAL PLACEHOLDER: AS1GraphTransformationsQ012TikZ-001 | Source: Questions PDF p.11 | Insert from AS1_graph_transformations_tikz.md | Purpose: source sketch for C1 June 2016 Question 2]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

## Question 13: C1 June 2017 Question 2

**Question ID:** AS1GraphTransformationsQ013  
**Source:** Questions PDF p.12  
**Original reference:** C1 June 2017 Question 2  
**Marks:** 6  
**Subtopic:** identify transformations from sketches

### Question

2. Fig. 1 below shows a sketch of the graph of the function $y=f(x)$.

Point A has coordinates $(2,4)$.
Each sketch below shows a single transformation of the function $y=f(x)$.

For each sketch, use function notation to describe the transformations shown.

(i) \hfill $[2]$

(ii) \hfill $[2]$

(iii) \hfill $[2]$

[VISUAL PLACEHOLDER: AS1GraphTransformationsQ013TikZ-001 | Source: Questions PDF p.12 | Insert from AS1_graph_transformations_tikz.md | Purpose: source sketch for C1 June 2017 Question 2]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

## Question 14: C1 June 2018 Question 1

**Question ID:** AS1GraphTransformationsQ014  
**Source:** Questions PDF p.13  
**Original reference:** C1 June 2018 Question 1  
**Marks:** 6  
**Subtopic:** vertical shift, vertical compression, reflection in the y-axis

### Question

1. Fig. 1 below shows a sketch of the graph of the function $y=f(x)$.

Point A has coordinates $(3,6)$.

Sketch, on the axes opposite, the graphs of:

(i) $y=f(x)+1$ \hfill $[2]$

(ii) $y=\frac{1}{3}f(x)$ \hfill $[2]$

(iii) $y=f(-x)$ \hfill $[2]$

clearly labelling the image of the point A.

[VISUAL PLACEHOLDER: AS1GraphTransformationsQ014TikZ-001 | Source: Questions PDF p.13 | Insert from AS1_graph_transformations_tikz.md | Purpose: source sketch for C1 June 2018 Question 1]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

## Question 15: C1 June 2019 Question 2

**Question ID:** AS1GraphTransformationsQ015  
**Source:** Questions PDF p.14-15  
**Original reference:** C1 June 2019 Question 2  
**Marks:** 6  
**Subtopic:** identify transformations from sketches

### Question

2. Fig. 1 below shows a sketch of the graph of the function $y=f(x)$.

Point A has coordinates $(1,4)$.
Each sketch below shows a single transformation of the function $y=f(x)$.

For each sketch, use function notation to describe the transformation shown.

(i) \hfill $[2]$

(ii) \hfill $[2]$

(iii) \hfill $[2]$

[VISUAL PLACEHOLDER: AS1GraphTransformationsQ015TikZ-001 | Source: Questions PDF p.14-15 | Insert from AS1_graph_transformations_tikz.md | Purpose: source sketch for C1 June 2019 Question 2]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

## Question 16: AS1 (new spec) June 2019 Question 2

**Question ID:** AS1GraphTransformationsQ016  
**Source:** Questions PDF p.15  
**Original reference:** AS1 (new spec) June 2019 Question 2  
**Marks:** 7  
**Subtopic:** point images and asymptote shift

### Question

2. Fig. 1 below shows a sketch of the graph of the curve given by the equation $y=f(x)$.

Point A has coordinates $(0,1)$.

(a) Write down the coordinates of the point A under the following transformations:

(i) $y=f(x)+1$ \hfill $[2]$

(ii) $y=f(x-3)$ \hfill $[2]$

(iii) $y=f(-x)$ \hfill $[2]$

(b) $f(x)$ has an asymptote given by the equation $y=0$.

Write down the equation of the asymptote of the curve under the transformation

$$
y+2=f(x).
$$

\hfill $[1]$

[VISUAL PLACEHOLDER: AS1GraphTransformationsQ016TikZ-001 | Source: Questions PDF p.15 | Insert from AS1_graph_transformations_tikz.md | Purpose: source sketch for AS1 (new spec) June 2019 Question 2]

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
filename: "AS1_graph_transformations_solutions.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/02. Quadratics-Transformations-Questions/AS1_graph_transformations_solutions.md"
lines: 479
bytes_utf8: 20950
sha256: "85299a9415d8ccd3f8d4e2216fc5458825ae134521b5914bc78e5b198410dd75"
```

### Preserved Source Content: AS1_graph_transformations_solutions.md

# Graph Transformations Solutions and Mark Scheme Pack

**Unit:** CCEA AS1 Pure Mathematics  
**Questions PDF:** AS1_Graph_Transformations_questions.pdf  
**Solutions / Mark Scheme PDF:** AS1_Graph_Transformations_solutions.pdf  
**Date generated:** 22 May 2026  
**Pack ID:** AS1GraphTransformations

---
## 1. Mark Scheme Notation Guide

- `M` usually means method mark.
- `A` usually means accuracy mark.
- `B` usually means independent mark.
- `W` or `MW` may represent a written/working mark depending on the source.

The exact meaning of each mark code should be interpreted according to the awarding body’s mark scheme conventions.

[INTERACTIVE PLACEHOLDER: AS1GraphTransformationsSupportWidget-001 | Source: AI-proposed checking tool, not present in questions PDF | Insert from AS1_graph_transformations_widgets.md | Purpose: coordinate-image checker for graph transformations]

---
## 2. Question-to-Solution Map

| Pack question | Original reference | Q page | S page | Q marks | Scheme marks | Match | Notes |
|---:|---|---:|---:|---:|---:|---|---|
| 1 | C1 January 2010 Question 1 | 2 | 2 | 4 | 4 | High | Matched |
| 2 | C1 June 2010 Question 3 | 3 | 3 | 6 | 6 | High | Matched |
| 3 | C1 January 2011 Question 5(a) | 3 | 3 | 2 | 2 | High | Matched |
| 4 | C1 June 2011 Question 3(c) | 4 | 4 | 2 | 2 | High | Matched |
| 5 | C1 January 2012 Question 2 | 5 | 4 | 4 | 4 | High | Matched |
| 6 | C1 June 2012 Question 1(b) | 6 | 5 | 4 | 4 | High | Matched |
| 7 | C1 January 2013 Question 2(a) | 7 | — | 4 | — | Low | Official solution not visible |
| 8 | C1 June 2013 Question 2 | 8 | 6 | 4 | 4 | High | Matched |
| 9 | C1 January 2014 Question 1(a) | 9 | 6 | 6 | 6 | High | Matched |
| 10 | C1 June 2014 Question 1(b) | 9 | 7 | 4 | 4 | High | Matched |
| 11 | C1 June 2015 Question 1 | 10 | 8 | 4 | 4 | High | Extra unmatched MS entry |
| 12 | C1 June 2016 Question 2 | 11 | 9 | 5 | 5 | High | Matched |
| 13 | C1 June 2017 Question 2 | 12 | 9 | 6 | 6 | High | Matched |
| 14 | C1 June 2018 Question 1 | 13 | 10 | 6 | 6 | High | Matched |
| 15 | C1 June 2019 Question 2 | 14-15 | 10 | 6 | 6 | High | Matched |
| 16 | AS1 (new spec) June 2019 Question 2 | 15 | 11 | 7 | 7 | High | Matched |

---

## 3. Fully Worked Mark Scheme Solutions

## Solution to Question 1: C1 January 2010 Question 1

**Question ID:** AS1GraphTransformationsQ001  
**Source:** Mark Scheme PDF p.2  
**Original reference:** C1 January 2010 Question 1  
**Related question:** See `AS1_graph_transformations_questions.md`, Question 1  
**Marks available:** 4  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | (i): Sketch of $y=f(x-4)$; $A'=(3,4)$ | M1 | 1 | Correct horizontal translation right by 4. |
| 2 | (i): Sketch of $y=f(x-4)$; $A'=(3,4)$ | W1 | 1 | Image of A correctly labelled. |
| 3 | (ii): Sketch of $y=3f(x)$; $A'=(-1,12)$ | M1 | 1 | Correct vertical stretch by factor 3. |
| 4 | (ii): Sketch of $y=3f(x)$; $A'=(-1,12)$ | W1 | 1 | Image of A correctly labelled. |

### Final Answer

`(i) Sketch of $y=f(x-4)$; $A'=(3,4)$; (ii) Sketch of $y=3f(x)$; $A'=(-1,12)$`

### What the Examiner Wanted

Sketch the correct transformed shape and label the image of the named point.  The key marks come from the correct transformation and the correctly labelled image point.

## Solution to Question 2: C1 June 2010 Question 3

**Question ID:** AS1GraphTransformationsQ002  
**Source:** Mark Scheme PDF p.3  
**Original reference:** C1 June 2010 Question 3  
**Related question:** See `AS1_graph_transformations_questions.md`, Question 2  
**Marks available:** 6  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | (i): Sketch of $y=f(x)-1$; $A'=(5,3)$ | M1 | 1 | Correct shift down 1. |
| 2 | (i): Sketch of $y=f(x)-1$; $A'=(5,3)$ | W1 | 1 | Image of A correctly labelled. |
| 3 | (ii): Sketch of $y=-f(x)$; $A'=(5,-4)$ | M1 | 1 | Correct reflection in the x-axis. |
| 4 | (ii): Sketch of $y=-f(x)$; $A'=(5,-4)$ | W1 | 1 | Image of A correctly labelled. |
| 5 | (iii): Sketch of $y=f(2x)$; $A'=(2.5,4)$ | M1 | 1 | Correct horizontal compression by factor 1/2. |
| 6 | (iii): Sketch of $y=f(2x)$; $A'=(2.5,4)$ | W1 | 1 | Image of A correctly labelled. |

### Final Answer

`(i) Sketch of $y=f(x)-1$; $A'=(5,3)$; (ii) Sketch of $y=-f(x)$; $A'=(5,-4)$; (iii) Sketch of $y=f(2x)$; $A'=(2.5,4)$`

### What the Examiner Wanted

Sketch the correct transformed shape and label the image of the named point.  The key marks come from the correct transformation and the correctly labelled image point.

## Solution to Question 3: C1 January 2011 Question 5(a)

**Question ID:** AS1GraphTransformationsQ003  
**Source:** Mark Scheme PDF p.3  
**Original reference:** C1 January 2011 Question 5(a)  
**Related question:** See `AS1_graph_transformations_questions.md`, Question 3  
**Marks available:** 2  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | (a): Sketch of $y=f(x+2)$; image of A is $A'=(1,2)$ | M1 | 1 | Correct shift left 2. |
| 2 | (a): Sketch of $y=f(x+2)$; image of A is $A'=(1,2)$ | W1 | 1 | Image of A correctly labelled. |

### Final Answer

`(a) Sketch of $y=f(x+2)$; image of A is $A'=(1,2)$`

### What the Examiner Wanted

Sketch the correct transformed shape and label the image of the named point.  The key marks come from the correct transformation and the correctly labelled image point.

## Solution to Question 4: C1 June 2011 Question 3(c)

**Question ID:** AS1GraphTransformationsQ004  
**Source:** Mark Scheme PDF p.4  
**Original reference:** C1 June 2011 Question 3(c)  
**Related question:** See `AS1_graph_transformations_questions.md`, Question 4  
**Marks available:** 2  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | (c): Sketch of $y=-f(x)$; image of A is $A'=(-2,-1)$ | M1 | 1 | Correct reflection in the x-axis. |
| 2 | (c): Sketch of $y=-f(x)$; image of A is $A'=(-2,-1)$ | W1 | 1 | Image of A correctly labelled. |

### Final Answer

`(c) Sketch of $y=-f(x)$; image of A is $A'=(-2,-1)$`

### What the Examiner Wanted

Sketch the correct transformed shape and label the image of the named point.  The key marks come from the correct transformation and the correctly labelled image point.

## Solution to Question 5: C1 January 2012 Question 2

**Question ID:** AS1GraphTransformationsQ005  
**Source:** Mark Scheme PDF p.4  
**Original reference:** C1 January 2012 Question 2  
**Related question:** See `AS1_graph_transformations_questions.md`, Question 5  
**Marks available:** 4  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | (i): Sketch of $y=3f(x)$; $P'=(2,12)$ | M1 | 1 | Correct vertical stretch by factor 3. |
| 2 | (i): Sketch of $y=3f(x)$; $P'=(2,12)$ | W1 | 1 | Image of P correctly labelled. |
| 3 | (ii): Sketch of $y=f(2x)$; $P'=(1,4)$ | M1 | 1 | Correct horizontal compression by factor 1/2. |
| 4 | (ii): Sketch of $y=f(2x)$; $P'=(1,4)$ | W1 | 1 | Image of P correctly labelled. |

### Final Answer

`(i) Sketch of $y=3f(x)$; $P'=(2,12)$; (ii) Sketch of $y=f(2x)$; $P'=(1,4)$`

### What the Examiner Wanted

Sketch the correct transformed shape and label the image of the named point.  The key marks come from the correct transformation and the correctly labelled image point.

## Solution to Question 6: C1 June 2012 Question 1(b)

**Question ID:** AS1GraphTransformationsQ006  
**Source:** Mark Scheme PDF p.5  
**Original reference:** C1 June 2012 Question 1(b)  
**Related question:** See `AS1_graph_transformations_questions.md`, Question 6  
**Marks available:** 4  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | (i): Sketch of $y=f(x-1)$; $A'=(2,2)$ | M1 | 1 | Correct shift right 1. |
| 2 | (i): Sketch of $y=f(x-1)$; $A'=(2,2)$ | W1 | 1 | Image of A correctly labelled. |
| 3 | (ii): Sketch of $y=f(-x)$; $A'=(-1,2)$ | M1 | 1 | Correct reflection in the y-axis. |
| 4 | (ii): Sketch of $y=f(-x)$; $A'=(-1,2)$ | W1 | 1 | Image of A correctly labelled. |

### Final Answer

`(i) Sketch of $y=f(x-1)$; $A'=(2,2)$; (ii) Sketch of $y=f(-x)$; $A'=(-1,2)$`

### What the Examiner Wanted

Sketch the correct transformed shape and label the image of the named point.  The key marks come from the correct transformation and the correctly labelled image point.

## Solution to Question 7: C1 January 2013 Question 2(a)

**Question ID:** AS1GraphTransformationsQ007  
**Source:** Mark Scheme PDF p.not found  
**Original reference:** C1 January 2013 Question 2(a)  
**Related question:** See `AS1_graph_transformations_questions.md`, Question 7  
**Marks available:** 4  
**Match confidence:** Low

### Official Mark Scheme Solution

Official solution not found in supplied mark scheme PDF.  The supplied mark scheme page appears to repeat the question rather than provide a worked answer.

### Generated solution, not from official mark scheme

| Step | Working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | (i) $y=f(x)+2$ shifts the graph up 2, so $A'=(3,4)$. | Generated | — | Applies vertical shift. |
| 2 | (ii) $y=f(	frac12 x)$ stretches horizontally by factor 2, so $A'=(6,2)$. | Generated | — | Applies horizontal stretch. |

### Final Answer

`(i) $A'=(3,4)$; (ii) $A'=(6,2)$.`

### What the Examiner Wanted

Sketch the correct transformed shape and label the image of the named point.  The key marks come from the correct transformation and the correctly labelled image point.

## Solution to Question 8: C1 June 2013 Question 2

**Question ID:** AS1GraphTransformationsQ008  
**Source:** Mark Scheme PDF p.6  
**Original reference:** C1 June 2013 Question 2  
**Related question:** See `AS1_graph_transformations_questions.md`, Question 8  
**Marks available:** 4  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | (i): $f(x-1)$ | M1 | 1 | Recognises a horizontal shift. |
| 2 | (i): $f(x-1)$ | W1 | 1 | Correct function notation. |
| 3 | (ii): $-f(x)$ | MW2 | 2 | Correct reflection notation. |

### Final Answer

`(i) $f(x-1)$; (ii) $-f(x)$`

### What the Examiner Wanted

Identify the single transformation shown and express it correctly in function notation.  Marks are mainly for recognising the type of transformation and writing the correct notation.

## Solution to Question 9: C1 January 2014 Question 1(a)

**Question ID:** AS1GraphTransformationsQ009  
**Source:** Mark Scheme PDF p.6  
**Original reference:** C1 January 2014 Question 1(a)  
**Related question:** See `AS1_graph_transformations_questions.md`, Question 9  
**Marks available:** 6  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | (i): Sketch of $y=f(x)-1$; $P'=(3,0)$ | M1 | 1 | Correct shift down 1. |
| 2 | (i): Sketch of $y=f(x)-1$; $P'=(3,0)$ | W1 | 1 | Image of P correctly labelled. |
| 3 | (ii): Sketch of $y=f(x-2)$; $P'=(5,1)$ | M1 | 1 | Correct shift right 2. |
| 4 | (ii): Sketch of $y=f(x-2)$; $P'=(5,1)$ | W1 | 1 | Image of P correctly labelled. |
| 5 | (iii): Sketch of $y=f(3x)$; $P'=(1,1)$ | M1 | 1 | Correct horizontal compression by factor 1/3. |
| 6 | (iii): Sketch of $y=f(3x)$; $P'=(1,1)$ | W1 | 1 | Image of P correctly labelled. |

### Final Answer

`(i) Sketch of $y=f(x)-1$; $P'=(3,0)$; (ii) Sketch of $y=f(x-2)$; $P'=(5,1)$; (iii) Sketch of $y=f(3x)$; $P'=(1,1)$`

### What the Examiner Wanted

Sketch the correct transformed shape and label the image of the named point.  The key marks come from the correct transformation and the correctly labelled image point.

## Solution to Question 10: C1 June 2014 Question 1(b)

**Question ID:** AS1GraphTransformationsQ010  
**Source:** Mark Scheme PDF p.7  
**Original reference:** C1 June 2014 Question 1(b)  
**Related question:** See `AS1_graph_transformations_questions.md`, Question 10  
**Marks available:** 4  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | (i): Sketch of $y=2f(x)$; $A'=(2,6)$ | M1 | 1 | Correct vertical stretch by factor 2. |
| 2 | (i): Sketch of $y=2f(x)$; $A'=(2,6)$ | W1 | 1 | Image of A correctly labelled. |
| 3 | (ii): Sketch of $y=f(-x)$; $A'=(-2,3)$ | M1 | 1 | Correct reflection in the y-axis. |
| 4 | (ii): Sketch of $y=f(-x)$; $A'=(-2,3)$ | W1 | 1 | Image of A correctly labelled. |

### Final Answer

`(i) Sketch of $y=2f(x)$; $A'=(2,6)$; (ii) Sketch of $y=f(-x)$; $A'=(-2,3)$`

### What the Examiner Wanted

Sketch the correct transformed shape and label the image of the named point.  The key marks come from the correct transformation and the correctly labelled image point.

## Solution to Question 11: C1 June 2015 Question 1

**Question ID:** AS1GraphTransformationsQ011  
**Source:** Mark Scheme PDF p.8  
**Original reference:** C1 June 2015 Question 1  
**Related question:** See `AS1_graph_transformations_questions.md`, Question 11  
**Marks available:** 4  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | (i): Sketch of $y=f(x-3)$; $T'=(5,4)$ | M1 | 1 | Correct shift right 3. |
| 2 | (i): Sketch of $y=f(x-3)$; $T'=(5,4)$ | W1 | 1 | Image of T correctly labelled. |
| 3 | (ii): Sketch of $y=f(2x)$; $T'=(1,4)$ | M1 | 1 | Correct horizontal compression by factor 1/2. |
| 4 | (ii): Sketch of $y=f(2x)$; $T'=(1,4)$ | W1 | 1 | Image of T correctly labelled. |

### Final Answer

`(i) Sketch of $y=f(x-3)$; $T'=(5,4)$; (ii) Sketch of $y=f(2x)$; $T'=(1,4)$`

### What the Examiner Wanted

Sketch the correct transformed shape and label the image of the named point.  The key marks come from the correct transformation and the correctly labelled image point.

## Solution to Question 12: C1 June 2016 Question 2

**Question ID:** AS1GraphTransformationsQ012  
**Source:** Mark Scheme PDF p.9  
**Original reference:** C1 June 2016 Question 2  
**Related question:** See `AS1_graph_transformations_questions.md`, Question 12  
**Marks available:** 5  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | (i): Sketch of $y=f(x)+1$; $A'=(2,4)$ | M1 | 1 | Correct shift up 1. |
| 2 | (i): Sketch of $y=f(x)+1$; $A'=(2,4)$ | W1 | 1 | Image of A correctly labelled. |
| 3 | (ii): Sketch of $y=f(	frac12 x)$; $A'=(4,3)$ | M1 | 1 | Correct horizontal stretch by factor 2. |
| 4 | (ii): Sketch of $y=f(	frac12 x)$; $A'=(4,3)$ | W1 | 1 | Image of A correctly labelled. |
| 5 | (iii): $a=-4$ | MW1 | 1 | Correct value of the shift parameter. |

### Final Answer

`(i) Sketch of $y=f(x)+1$; $A'=(2,4)$; (ii) Sketch of $y=f(	frac12 x)$; $A'=(4,3)$; (iii) $a=-4$`

### What the Examiner Wanted

Sketch the correct transformed shape and label the image of the named point.  The key marks come from the correct transformation and the correctly labelled image point.

## Solution to Question 13: C1 June 2017 Question 2

**Question ID:** AS1GraphTransformationsQ013  
**Source:** Mark Scheme PDF p.9  
**Original reference:** C1 June 2017 Question 2  
**Related question:** See `AS1_graph_transformations_questions.md`, Question 13  
**Marks available:** 6  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | (i): $f(x+2)$ | M1 | 1 | Recognises shift left 2. |
| 2 | (i): $f(x+2)$ | W1 | 1 | Correct function notation. |
| 3 | (ii): $	frac12 f(x)$ | M1 | 1 | Recognises vertical scale factor 1/2. |
| 4 | (ii): $	frac12 f(x)$ | W1 | 1 | Correct function notation. |
| 5 | (iii): $f(-x)$ | M1 | 1 | Recognises reflection in the y-axis. |
| 6 | (iii): $f(-x)$ | W1 | 1 | Correct function notation. |

### Final Answer

`(i) $f(x+2)$; (ii) $	frac12 f(x)$; (iii) $f(-x)$`

### What the Examiner Wanted

Identify the single transformation shown and express it correctly in function notation.  Marks are mainly for recognising the type of transformation and writing the correct notation.

## Solution to Question 14: C1 June 2018 Question 1

**Question ID:** AS1GraphTransformationsQ014  
**Source:** Mark Scheme PDF p.10  
**Original reference:** C1 June 2018 Question 1  
**Related question:** See `AS1_graph_transformations_questions.md`, Question 14  
**Marks available:** 6  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | (i): Sketch of $y=f(x)+1$; $A'=(3,7)$ | M1 | 1 | Correct shift up 1. |
| 2 | (i): Sketch of $y=f(x)+1$; $A'=(3,7)$ | W1 | 1 | Image of A correctly labelled. |
| 3 | (ii): Sketch of $y=	frac13 f(x)$; $A'=(3,2)$ | M1 | 1 | Correct vertical compression by factor 1/3. |
| 4 | (ii): Sketch of $y=	frac13 f(x)$; $A'=(3,2)$ | W1 | 1 | Image of A correctly labelled. |
| 5 | (iii): Sketch of $y=f(-x)$; $A'=(-3,6)$ | M1 | 1 | Correct reflection in the y-axis. |
| 6 | (iii): Sketch of $y=f(-x)$; $A'=(-3,6)$ | W1 | 1 | Image of A correctly labelled. |

### Final Answer

`(i) Sketch of $y=f(x)+1$; $A'=(3,7)$; (ii) Sketch of $y=	frac13 f(x)$; $A'=(3,2)$; (iii) Sketch of $y=f(-x)$; $A'=(-3,6)$`

### What the Examiner Wanted

Sketch the correct transformed shape and label the image of the named point.  The key marks come from the correct transformation and the correctly labelled image point.

## Solution to Question 15: C1 June 2019 Question 2

**Question ID:** AS1GraphTransformationsQ015  
**Source:** Mark Scheme PDF p.10  
**Original reference:** C1 June 2019 Question 2  
**Related question:** See `AS1_graph_transformations_questions.md`, Question 15  
**Marks available:** 6  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | (i): $f(x-1)$ | M1 | 1 | Recognises shift right 1. |
| 2 | (i): $f(x-1)$ | W1 | 1 | Correct function notation. |
| 3 | (ii): $	frac12 f(x)$ | M1 | 1 | Recognises vertical compression by factor 1/2. |
| 4 | (ii): $	frac12 f(x)$ | W1 | 1 | Correct function notation. |
| 5 | (iii): $f(	frac12 x)$ | M1 | 1 | Recognises horizontal stretch by factor 2. |
| 6 | (iii): $f(	frac12 x)$ | W1 | 1 | Correct function notation. |

### Final Answer

`(i) $f(x-1)$; (ii) $	frac12 f(x)$; (iii) $f(	frac12 x)$`

### What the Examiner Wanted

Identify the single transformation shown and express it correctly in function notation.  Marks are mainly for recognising the type of transformation and writing the correct notation.

## Solution to Question 16: AS1 (new spec) June 2019 Question 2

**Question ID:** AS1GraphTransformationsQ016  
**Source:** Mark Scheme PDF p.11  
**Original reference:** AS1 (new spec) June 2019 Question 2  
**Related question:** See `AS1_graph_transformations_questions.md`, Question 16  
**Marks available:** 7  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | (a)(i): $(0,2)$ | M1 | 1 | Correct vertical shift of point A. |
| 2 | (a)(i): $(0,2)$ | W1 | 1 | Coordinate written correctly. |
| 3 | (a)(ii): $(3,1)$ | M1 | 1 | Correct horizontal shift right 3. |
| 4 | (a)(ii): $(3,1)$ | W1 | 1 | Coordinate written correctly. |
| 5 | (a)(iii): $(0,1)$ | M1 | 1 | Correct reflection in the y-axis. |
| 6 | (a)(iii): $(0,1)$ | W1 | 1 | Coordinate written correctly. |
| 7 | (b): $y=-2$ | MW1 | 1 | Correct transformed asymptote. |

### Final Answer

`(a)(i) $(0,2)$; (a)(ii) $(3,1)$; (a)(iii) $(0,1)$; (b) $y=-2$`

### What the Examiner Wanted

Track the image of point A under each transformation and update the horizontal asymptote under the vertical shift.

---

## Unmatched Mark Scheme Entries

The mark scheme PDF contains an additional entry for **June 2015 Question 1 (iii)** showing the answers `$2f(x)$` and `$f(x)+4$` with mark codes `MW1` and `MW1`.  This part is not visible in the supplied questions PDF page for June 2015 Question 1, so it has not been added to the questions file.

## 7. Diagram Assets

## 7.1 Mermaid Assets

### Source File Metadata

```yaml
filename: "AS1_graph_transformations_mermaid.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/02. Quadratics-Transformations-Questions/AS1_graph_transformations_mermaid.md"
lines: 6
bytes_utf8: 256
sha256: "442bcdca4226b69d5db9eb6408d345c5b6b2353808bd4a60f04fd6f01e7405ce"
```

### Preserved Source Content: AS1_graph_transformations_mermaid.md

# Mermaid Diagrams for CCEA AS1 Pure Mathematics Graph Transformations

**Pack ID:** AS1GraphTransformations

No Mermaid diagrams were required for this question pack. The source visuals are graph sketches, which are represented more precisely using TikZ.

## 7.2 SVG Assets

### Source File Metadata

```yaml
filename: "AS1_graph_transformations_svg.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/02. Quadratics-Transformations-Questions/AS1_graph_transformations_svg.md"
lines: 6
bytes_utf8: 223
sha256: "9c06b118c59c0a70c89fcb8e669eccada77ec23ad2b1894e981552ea69b2296d"
```

### Preserved Source Content: AS1_graph_transformations_svg.md

# SVG Diagrams for CCEA AS1 Pure Mathematics Graph Transformations

**Pack ID:** AS1GraphTransformations

No SVG diagrams were required for this question pack. The mathematical graph sketches are provided in the TikZ file.

## 7.3 TikZ Assets

### Source File Metadata

```yaml
filename: "AS1_graph_transformations_tikz.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/02. Quadratics-Transformations-Questions/AS1_graph_transformations_tikz.md"
lines: 403
bytes_utf8: 18270
sha256: "32fd3a449c89bb0c8e23f4d0be9ff2a95ddc55712c6af3d84a73161a46c96860"
```

### Preserved Source Content: AS1_graph_transformations_tikz.md

# TikZ Diagrams for CCEA AS1 Pure Mathematics Graph Transformations

**Pack ID:** AS1GraphTransformations

## AS1GraphTransformationsQ001TikZ-001: Source sketch for C1 January 2010 Question 1

**Source:** Questions PDF p.2  
**Related question:** Question 1  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1GraphTransformationsQ001TikZ-001 | Source: Questions PDF p.2 | Insert from AS1_graph_transformations_tikz.md | Purpose: source sketch for C1 January 2010 Question 1]`  
**Purpose:** source graph sketch for the question.

### Creation Notes

A mathematically faithful sketch of the graph(s) shown in the source question. TikZ is appropriate because the diagrams are coordinate graph sketches.

```latex
\begin{tikzpicture}[scale=0.65]
\draw[->] (-3,0)--(4.5,0) node[right] {$x$};
\draw[->] (0,-2)--(0,5.2) node[above] {$y$};
\draw (-1,0.12)--(-1,-0.12) node[below] {$-1$};
\draw (0.12,4)--(-0.12,4) node[left] {$4$};
\draw[thick] (-2.2,-1.4)--(-1,4)--(4,4);
\node[above left] at (-1,4) {A};
\node at (1.5,-1.0) {Fig. 1};
\end{tikzpicture}
```

## AS1GraphTransformationsQ002TikZ-001: Source sketch for C1 June 2010 Question 3

**Source:** Questions PDF p.3  
**Related question:** Question 2  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1GraphTransformationsQ002TikZ-001 | Source: Questions PDF p.3 | Insert from AS1_graph_transformations_tikz.md | Purpose: source sketch for C1 June 2010 Question 3]`  
**Purpose:** source graph sketch for the question.

### Creation Notes

A mathematically faithful sketch of the graph(s) shown in the source question. TikZ is appropriate because the diagrams are coordinate graph sketches.

```latex
\begin{tikzpicture}[scale=0.62]
\draw[->] (-2,0)--(8,0) node[right] {$x$};
\draw[->] (0,-2.2)--(0,6.0) node[above] {$y$};
\draw (5,0.12)--(5,-0.12) node[below] {$5$};
\draw (0.12,4)--(-0.12,4) node[left] {$4$};
\draw[thick, domain=-1.3:7, smooth, variable=\x] plot ({\x},{4.9-0.12*(\x+1)^2});
\fill (5,4) circle (2pt) node[above right] {A};
\node at (3.5,-1.2) {Fig. 1};
\end{tikzpicture}
```

## AS1GraphTransformationsQ003TikZ-001: Source sketch for C1 January 2011 Question 5(a)

**Source:** Questions PDF p.3  
**Related question:** Question 3  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1GraphTransformationsQ003TikZ-001 | Source: Questions PDF p.3 | Insert from AS1_graph_transformations_tikz.md | Purpose: source sketch for C1 January 2011 Question 5(a)]`  
**Purpose:** source graph sketch for the question.

### Creation Notes

A mathematically faithful sketch of the graph(s) shown in the source question. TikZ is appropriate because the diagrams are coordinate graph sketches.

```latex
\begin{tikzpicture}[scale=0.65]
\draw[->] (-2,0)--(5,0) node[right] {$x$};
\draw[->] (0,-2)--(0,3.3) node[above] {$y$};
\draw (3,0.12)--(3,-0.12) node[below] {$3$};
\draw (0.12,2)--(-0.12,2) node[left] {$2$};
\draw[thick] (-1.5,2)--(3,2)--(4.6,-1.2);
\node[above] at (3,2) {A};
\node at (1.8,-1.5) {Fig. 2};
\end{tikzpicture}
```

## AS1GraphTransformationsQ004TikZ-001: Source sketch for C1 June 2011 Question 3(c)

**Source:** Questions PDF p.4  
**Related question:** Question 4  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1GraphTransformationsQ004TikZ-001 | Source: Questions PDF p.4 | Insert from AS1_graph_transformations_tikz.md | Purpose: source sketch for C1 June 2011 Question 3(c)]`  
**Purpose:** source graph sketch for the question.

### Creation Notes

A mathematically faithful sketch of the graph(s) shown in the source question. TikZ is appropriate because the diagrams are coordinate graph sketches.

```latex
\begin{tikzpicture}[scale=0.65]
\draw[->] (-5,0)--(2.3,0) node[right] {$x$};
\draw[->] (0,-0.5)--(0,4) node[above] {$y$};
\draw (-2,0.12)--(-2,-0.12) node[below] {$-2$};
\draw (0.12,1)--(-0.12,1) node[right] {$1$};
\draw (0.12,3)--(-0.12,3) node[right] {$3$};
\draw[thick] (-4,2.7)--(-2,1)--(1,3.4);
\node[above] at (-2,1) {A};
\node at (-0.7,-0.7) {Fig. 1};
\end{tikzpicture}
```

## AS1GraphTransformationsQ005TikZ-001: Source sketch for C1 January 2012 Question 2

**Source:** Questions PDF p.5  
**Related question:** Question 5  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1GraphTransformationsQ005TikZ-001 | Source: Questions PDF p.5 | Insert from AS1_graph_transformations_tikz.md | Purpose: source sketch for C1 January 2012 Question 2]`  
**Purpose:** source graph sketch for the question.

### Creation Notes

A mathematically faithful sketch of the graph(s) shown in the source question. TikZ is appropriate because the diagrams are coordinate graph sketches.

```latex
\begin{tikzpicture}[scale=0.6]
\draw[->] (-1,0)--(7,0) node[right] {$x$};
\draw[->] (0,-1)--(0,5.6) node[above] {$y$};
\draw (2,0.12)--(2,-0.12) node[below] {$2$};
\draw (0.12,4)--(-0.12,4) node[left] {$4$};
\draw[thick] (0,0)--(2,4)--(6.7,4);
\node[above] at (2,4) {P};
\node at (3.2,-1.0) {Fig. 1};
\end{tikzpicture}
```

## AS1GraphTransformationsQ006TikZ-001: Source sketch for C1 June 2012 Question 1(b)

**Source:** Questions PDF p.6  
**Related question:** Question 6  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1GraphTransformationsQ006TikZ-001 | Source: Questions PDF p.6 | Insert from AS1_graph_transformations_tikz.md | Purpose: source sketch for C1 June 2012 Question 1(b)]`  
**Purpose:** source graph sketch for the question.

### Creation Notes

A mathematically faithful sketch of the graph(s) shown in the source question. TikZ is appropriate because the diagrams are coordinate graph sketches.

```latex
\begin{tikzpicture}[scale=0.6]
\draw[->] (-2,0)--(5,0) node[right] {$x$};
\draw[->] (0,-1)--(0,4.8) node[above] {$y$};
\draw (1,0.12)--(1,-0.12) node[below] {$1$};
\draw (0.12,2)--(-0.12,2) node[left] {$2$};
\draw[thick] (-1.2,3.5)--(1,2)--(4.5,2);
\node[above] at (1,2) {A};
\node at (2,-1.0) {Fig. 1};
\end{tikzpicture}
```

## AS1GraphTransformationsQ007TikZ-001: Source sketch for C1 January 2013 Question 2(a)

**Source:** Questions PDF p.7  
**Related question:** Question 7  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1GraphTransformationsQ007TikZ-001 | Source: Questions PDF p.7 | Insert from AS1_graph_transformations_tikz.md | Purpose: source sketch for C1 January 2013 Question 2(a)]`  
**Purpose:** source graph sketch for the question.

### Creation Notes

A mathematically faithful sketch of the graph(s) shown in the source question. TikZ is appropriate because the diagrams are coordinate graph sketches.

```latex
\begin{tikzpicture}[scale=0.65]
\draw[->] (-1,0)--(5.2,0) node[right] {$x$};
\draw[->] (0,-0.5)--(0,3.5) node[above] {$y$};
\draw (3,0.12)--(3,-0.12) node[below] {$3$};
\draw (0.12,2)--(-0.12,2) node[left] {$2$};
\draw[thick] (0,1.2)--(3,2)--(4.0,1.4);
\node[above] at (3,2) {A};
\node at (2,-0.8) {Fig. 1};
\end{tikzpicture}
```

## AS1GraphTransformationsQ008TikZ-001: Source sketch for C1 June 2013 Question 2

**Source:** Questions PDF p.8  
**Related question:** Question 8  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1GraphTransformationsQ008TikZ-001 | Source: Questions PDF p.8 | Insert from AS1_graph_transformations_tikz.md | Purpose: source sketch for C1 June 2013 Question 2]`  
**Purpose:** source graph sketch for the question.

### Creation Notes

A mathematically faithful sketch of the graph(s) shown in the source question. TikZ is appropriate because the diagrams are coordinate graph sketches.

```latex
\begin{tikzpicture}[scale=0.55]
\begin{scope}
\draw[->] (-2.2,0)--(2.8,0) node[right] {$x$}; \draw[->] (0,-0.5)--(0,5.0) node[above] {$y$};
\draw (-1,0.1)--(-1,-0.1) node[below] {$-1$}; \draw (1,0.1)--(1,-0.1) node[below] {$1$};
\draw (0.1,2)--(-0.1,2) node[left] {$2$}; \draw (0.1,4)--(-0.1,4) node[left] {$4$};
\draw[thick] (-2,2)--(-1,2)--(0,4)--(1,2)--(2.6,2);
\node at (0,-1.0) {Fig. 2};
\end{scope}
\begin{scope}[xshift=7cm]
\draw[->] (-0.5,0)--(3.3,0) node[right] {$x$}; \draw[->] (0,-0.5)--(0,5.0) node[above] {$y$};
\draw (2,0.1)--(2,-0.1) node[below] {$2$}; \draw (0.1,2)--(-0.1,2) node[left] {$2$}; \draw (0.1,4)--(-0.1,4) node[left] {$4$};
\draw[thick] (-0.4,2)--(0,2)--(1,4)--(2,2)--(3.0,2);
\node at (1.5,-1.0) {Fig. 3};
\end{scope}
\begin{scope}[yshift=-7cm]
\draw[->] (-2.2,0)--(2.8,0) node[right] {$x$}; \draw[->] (0,-4.8)--(0,1.0) node[above] {$y$};
\draw (-1,0.1)--(-1,-0.1) node[above] {$-1$}; \draw (1,0.1)--(1,-0.1) node[above] {$1$};
\draw (0.1,-2)--(-0.1,-2) node[right] {$-2$}; \draw (0.1,-4)--(-0.1,-4) node[right] {$-4$};
\draw[thick] (-2,-2)--(-1,-2)--(0,-4)--(1,-2)--(2.6,-2);
\node at (0,-5.3) {Fig. 4};
\end{scope}
\end{tikzpicture}
```

## AS1GraphTransformationsQ009TikZ-001: Source sketch for C1 January 2014 Question 1(a)

**Source:** Questions PDF p.9  
**Related question:** Question 9  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1GraphTransformationsQ009TikZ-001 | Source: Questions PDF p.9 | Insert from AS1_graph_transformations_tikz.md | Purpose: source sketch for C1 January 2014 Question 1(a)]`  
**Purpose:** source graph sketch for the question.

### Creation Notes

A mathematically faithful sketch of the graph(s) shown in the source question. TikZ is appropriate because the diagrams are coordinate graph sketches.

```latex
\begin{tikzpicture}[scale=0.65]
\draw[->] (-1,0)--(6,0) node[right] {$x$}; \draw[->] (0,-0.8)--(0,4.6) node[above] {$y$};
\draw (3,0.1)--(3,-0.1) node[below] {$3$}; \draw (0.1,1)--(-0.1,1) node[left] {$1$};
\draw[thick, domain=1.4:4.6, smooth, variable=\x] plot ({\x},{(\x-3)^2+1});
\node[below right] at (3,1) {P};
\node at (3,-0.8) {Fig. 1};
\end{tikzpicture}
```

## AS1GraphTransformationsQ010TikZ-001: Source sketch for C1 June 2014 Question 1(b)

**Source:** Questions PDF p.9  
**Related question:** Question 10  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1GraphTransformationsQ010TikZ-001 | Source: Questions PDF p.9 | Insert from AS1_graph_transformations_tikz.md | Purpose: source sketch for C1 June 2014 Question 1(b)]`  
**Purpose:** source graph sketch for the question.

### Creation Notes

A mathematically faithful sketch of the graph(s) shown in the source question. TikZ is appropriate because the diagrams are coordinate graph sketches.

```latex
\begin{tikzpicture}[scale=0.62]
\draw[->] (-1,0)--(5.2,0) node[right] {$x$}; \draw[->] (0,-0.5)--(0,4.5) node[above] {$y$};
\draw (2,0.1)--(2,-0.1) node[below] {$2$}; \draw (4,0.1)--(4,-0.1) node[below] {$4$}; \draw (0.1,3)--(-0.1,3) node[left] {$3$};
\draw[thick] (0,0)--(2,3)--(4,0);
\node[above] at (2,3) {A};
\node at (2,-0.9) {Fig. 1};
\end{tikzpicture}
```

## AS1GraphTransformationsQ011TikZ-001: Source sketch for C1 June 2015 Question 1

**Source:** Questions PDF p.10  
**Related question:** Question 11  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1GraphTransformationsQ011TikZ-001 | Source: Questions PDF p.10 | Insert from AS1_graph_transformations_tikz.md | Purpose: source sketch for C1 June 2015 Question 1]`  
**Purpose:** source graph sketch for the question.

### Creation Notes

A mathematically faithful sketch of the graph(s) shown in the source question. TikZ is appropriate because the diagrams are coordinate graph sketches.

```latex
\begin{tikzpicture}[scale=0.62]
\draw[->] (-1,0)--(5.2,0) node[right] {$x$}; \draw[->] (0,-0.5)--(0,5.4) node[above] {$y$};
\draw (2,0.1)--(2,-0.1) node[below] {$2$}; \draw (0.1,4)--(-0.1,4) node[left] {$4$};
\draw[thick] (1.0,5.0)--(2,4)--(4.5,4);
\node[below] at (2,4) {T};
\node at (2.4,-0.9) {Fig. 1};
\end{tikzpicture}
```

## AS1GraphTransformationsQ012TikZ-001: Source sketch for C1 June 2016 Question 2

**Source:** Questions PDF p.11  
**Related question:** Question 12  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1GraphTransformationsQ012TikZ-001 | Source: Questions PDF p.11 | Insert from AS1_graph_transformations_tikz.md | Purpose: source sketch for C1 June 2016 Question 2]`  
**Purpose:** source graph sketch for the question.

### Creation Notes

A mathematically faithful sketch of the graph(s) shown in the source question. TikZ is appropriate because the diagrams are coordinate graph sketches.

```latex
\begin{tikzpicture}[scale=0.62]
\draw[->] (-1,0)--(5.2,0) node[right] {$x$}; \draw[->] (0,-0.5)--(0,4.8) node[above] {$y$};
\draw (2,0.1)--(2,-0.1) node[below] {$2$}; \draw (0.1,3)--(-0.1,3) node[left] {$3$};
\draw[thick] (0,0)--(2,3)--(4.7,3);
\node[above] at (2,3) {A};
\node at (2.4,-0.9) {Fig. 1};
\end{tikzpicture}
```

## AS1GraphTransformationsQ013TikZ-001: Source sketch for C1 June 2017 Question 2

**Source:** Questions PDF p.12  
**Related question:** Question 13  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1GraphTransformationsQ013TikZ-001 | Source: Questions PDF p.12 | Insert from AS1_graph_transformations_tikz.md | Purpose: source sketch for C1 June 2017 Question 2]`  
**Purpose:** source graph sketch for the question.

### Creation Notes

A mathematically faithful sketch of the graph(s) shown in the source question. TikZ is appropriate because the diagrams are coordinate graph sketches.

```latex
\begin{tikzpicture}[scale=0.52]
\begin{scope}
\draw[->] (-0.5,0)--(4,0) node[right] {$x$}; \draw[->] (0,-0.5)--(0,5) node[above] {$y$};
\draw (2,0.1)--(2,-0.1) node[below] {$2$}; \draw (3,0.1)--(3,-0.1) node[below] {$3$};
\draw (0.1,4)--(-0.1,4) node[left] {$4$};
\draw[thick] (0,4)--(2,4)--(3,0); \node[above right] at (2,4) {A $(2,4)$}; \node at (1.7,-0.8) {Fig. 1};
\end{scope}
\begin{scope}[yshift=-6cm]
\draw[->] (-1.2,0)--(2.2,0) node[right] {$x$}; \draw[->] (0,-0.5)--(0,5) node[above] {$y$};
\draw (1,0.1)--(1,-0.1) node[below] {$1$};
\draw[thick] (-1,4)--(0,4)--(1,0); \node[above right] at (0,4) {$A'(0,4)$}; \node[left] at (-0.8,4.6) {(i)};
\end{scope}
\begin{scope}[xshift=6cm,yshift=-6cm]
\draw[->] (-0.5,0)--(4,0) node[right] {$x$}; \draw[->] (0,-0.5)--(0,3) node[above] {$y$};
\draw (2,0.1)--(2,-0.1) node[below] {$2$}; \draw (3,0.1)--(3,-0.1) node[below] {$3$};
\draw[thick] (0,2)--(2,2)--(3,0); \node[above] at (2,2) {$A'(2,2)$}; \node[left] at (-0.4,2.6) {(ii)};
\end{scope}
\begin{scope}[yshift=-12cm]
\draw[->] (-4.2,0)--(0.7,0) node[right] {$x$}; \draw[->] (0,-0.5)--(0,5) node[above] {$y$};
\draw (-3,0.1)--(-3,-0.1) node[below] {$-3$}; \draw (-2,0.1)--(-2,-0.1) node[below] {$-2$};
\draw[thick] (-3,0)--(-2,4)--(0,4); \node[above left] at (-2,4) {$A'(-2,4)$}; \node[left] at (-3.8,4.6) {(iii)};
\end{scope}
\end{tikzpicture}
```

## AS1GraphTransformationsQ014TikZ-001: Source sketch for C1 June 2018 Question 1

**Source:** Questions PDF p.13  
**Related question:** Question 14  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1GraphTransformationsQ014TikZ-001 | Source: Questions PDF p.13 | Insert from AS1_graph_transformations_tikz.md | Purpose: source sketch for C1 June 2018 Question 1]`  
**Purpose:** source graph sketch for the question.

### Creation Notes

A mathematically faithful sketch of the graph(s) shown in the source question. TikZ is appropriate because the diagrams are coordinate graph sketches.

```latex
\begin{tikzpicture}[scale=0.65]
\draw[->] (-0.8,0)--(6,0) node[right] {$x$}; \draw[->] (0,-0.5)--(0,7.5) node[above] {$y$};
\draw (3,0.1)--(3,-0.1) node[below] {$3$}; \draw (0.1,6)--(-0.1,6) node[left] {$6$};
\draw[thick, domain=0.8:5.2, smooth, variable=\x] plot ({\x},{6-1.1*(\x-3)^2});
\node[above right] at (3,6) {A $(3,6)$};
\node at (3,-0.9) {Fig. 1};
\end{tikzpicture}
```

## AS1GraphTransformationsQ015TikZ-001: Source sketch for C1 June 2019 Question 2

**Source:** Questions PDF p.14-15  
**Related question:** Question 15  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1GraphTransformationsQ015TikZ-001 | Source: Questions PDF p.14-15 | Insert from AS1_graph_transformations_tikz.md | Purpose: source sketch for C1 June 2019 Question 2]`  
**Purpose:** source graph sketch for the question.

### Creation Notes

A mathematically faithful sketch of the graph(s) shown in the source question. TikZ is appropriate because the diagrams are coordinate graph sketches.

```latex
\begin{tikzpicture}[scale=0.5]
\begin{scope}
\draw[->] (-0.5,0)--(3,0) node[right] {$x$}; \draw[->] (0,-0.5)--(0,5.2) node[above] {$y$};
\draw (1,0.1)--(1,-0.1) node[below] {$1$}; \draw (2,0.1)--(2,-0.1) node[below] {$2$};
\draw[thick] (0,0)--(1,4)--(2,0); \node[above right] at (1,4) {A $(1,4)$}; \node at (1,-0.8) {Fig. 1};
\end{scope}
\begin{scope}[xshift=6cm]
\draw[->] (-0.5,0)--(4,0) node[right] {$x$}; \draw[->] (0,-0.5)--(0,5.2) node[above] {$y$};
\draw (1,0.1)--(1,-0.1) node[below] {$1$}; \draw (2,0.1)--(2,-0.1) node[below] {$2$}; \draw (3,0.1)--(3,-0.1) node[below] {$3$};
\draw[thick] (1,0)--(2,4)--(3,0); \node[above right] at (2,4) {$A'(2,4)$}; \node at (1.8,-0.8) {(i)};
\end{scope}
\begin{scope}[yshift=-6cm]
\draw[->] (-0.5,0)--(3,0) node[right] {$x$}; \draw[->] (0,-0.5)--(0,3.2) node[above] {$y$};
\draw (1,0.1)--(1,-0.1) node[below] {$1$}; \draw (2,0.1)--(2,-0.1) node[below] {$2$};
\draw[thick] (0,0)--(1,2)--(2,0); \node[above right] at (1,2) {$A'(1,2)$}; \node at (1,-0.8) {(ii)};
\end{scope}
\begin{scope}[xshift=6cm,yshift=-6cm]
\draw[->] (-0.5,0)--(5,0) node[right] {$x$}; \draw[->] (0,-0.5)--(0,5.2) node[above] {$y$};
\draw (2,0.1)--(2,-0.1) node[below] {$2$}; \draw (4,0.1)--(4,-0.1) node[below] {$4$};
\draw[thick] (0,0)--(2,4)--(4,0); \node[above right] at (2,4) {$A'(2,4)$}; \node at (2,-0.8) {(iii)};
\end{scope}
\end{tikzpicture}
```

## AS1GraphTransformationsQ016TikZ-001: Source sketch for AS1 (new spec) June 2019 Question 2

**Source:** Questions PDF p.15  
**Related question:** Question 16  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1GraphTransformationsQ016TikZ-001 | Source: Questions PDF p.15 | Insert from AS1_graph_transformations_tikz.md | Purpose: source sketch for AS1 (new spec) June 2019 Question 2]`  
**Purpose:** source graph sketch for the question.

### Creation Notes

A mathematically faithful sketch of the graph(s) shown in the source question. TikZ is appropriate because the diagrams are coordinate graph sketches.

```latex
\begin{tikzpicture}[scale=0.65]
\draw[->] (-3.2,0)--(4,0) node[right] {$x$}; \draw[->] (0,-0.5)--(0,5.2) node[above] {$y$};
\draw[thick, domain=-3:2.1, smooth, variable=\x] plot ({\x},{exp(0.55*\x)});
\fill (0,1) circle (2pt) node[below right] {A $(0,1)$};
\node[right] at (2,3.4) {$y=f(x)$};
\node[below left] at (0,0) {O};
\node at (0,-0.9) {Fig. 1};
\end{tikzpicture}
```

## 8. Interactive Widgets

## 8.1 Widget Assets

### Source File Metadata

```yaml
filename: "AS1_graph_transformations_widgets.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/02. Quadratics-Transformations-Questions/AS1_graph_transformations_widgets.md"
lines: 95
bytes_utf8: 3695
sha256: "3ce0932de6f7432a08e2486d2427e0536872aecf40a27c0c7ed71e81d3428c50"
```

### Preserved Source Content: AS1_graph_transformations_widgets.md

# Interactive Widgets for CCEA AS1 Pure Mathematics Graph Transformations

**Pack ID:** AS1GraphTransformations

## AS1GraphTransformationsSupportWidget-001: Coordinate image checker

**Source:** AI-proposed checking tool, not present in questions PDF  
**Related questions:** Questions 1-16  
**Used in placeholder:** `[INTERACTIVE PLACEHOLDER: AS1GraphTransformationsSupportWidget-001 | Source: AI-proposed checking tool, not present in questions PDF | Insert from AS1_graph_transformations_widgets.md | Purpose: coordinate-image checker for graph transformations]`  
**Purpose:** Checks how a single point \((x,y)\) changes under common AS1 graph transformations.

### Learning Goal

This widget helps you check point images under transformations such as $y=f(x-a)$, $y=f(x+a)$, $y=af(x)$, $y=f(ax)$, $y=f(-x)$ and $y=-f(x)$.

### Controls

- `x` and `y`: coordinates of the original point.
- `Transformation`: choose the transformation type.
- `Parameter`: enter the shift or scale factor where needed.

### Live Outputs

- `Image point`: the transformed coordinate.
- `Rule reminder`: short note on how the transformation acts.

### What to Notice

- Horizontal transformations change the $x$-coordinate.
- Vertical transformations change the $y$-coordinate.
- $f(x+a)$ shifts left; $f(x-a)$ shifts right.

### Exam Connection

Use this tool to check your work after sketching. In the exam, you must still show the transformed sketch and label the image point clearly.

### How to Run

Copy the code below into a `.html` file and open it in a browser.

```html
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Coordinate Image Checker</title>
<style>
body { font-family: sans-serif; max-width: 760px; margin: 2rem auto; line-height: 1.4; }
label { display: block; margin: 0.5rem 0; }
input, select { padding: 0.25rem; }
.output { margin-top: 1rem; padding: 1rem; border: 1px solid #ccc; background: #f7f7f7; }
</style>
</head>
<body>
<h1>Coordinate Image Checker</h1>
<label>Original x: <input id="x" type="number" value="1" step="0.5"></label>
<label>Original y: <input id="y" type="number" value="4" step="0.5"></label>
<label>Transformation:
<select id="type">
<option value="right">y = f(x - a)</option>
<option value="left">y = f(x + a)</option>
<option value="vscale">y = a f(x)</option>
<option value="hscale">y = f(a x)</option>
<option value="reflectx">y = -f(x)</option>
<option value="reflecty">y = f(-x)</option>
<option value="up">y = f(x) + a</option>
<option value="down">y = f(x) - a</option>
</select>
</label>
<label>Parameter a: <input id="a" type="number" value="1" step="0.5"></label>
<button onclick="calculate()">Calculate image point</button>
<div class="output" id="out"></div>
<script>
function calculate() {
  const x = parseFloat(document.getElementById('x').value);
  const y = parseFloat(document.getElementById('y').value);
  const a = parseFloat(document.getElementById('a').value);
  const type = document.getElementById('type').value;
  let X=x, Y=y, note='';
  if (type==='right') { X=x+a; note='Shift right by a.'; }
  if (type==='left') { X=x-a; note='Shift left by a.'; }
  if (type==='vscale') { Y=a*y; note='Multiply y-coordinate by a.'; }
  if (type==='hscale') { X=x/a; note='Divide x-coordinate by a.'; }
  if (type==='reflectx') { Y=-y; note='Reflect in the x-axis.'; }
  if (type==='reflecty') { X=-x; note='Reflect in the y-axis.'; }
  if (type==='up') { Y=y+a; note='Shift up by a.'; }
  if (type==='down') { Y=y-a; note='Shift down by a.'; }
  document.getElementById('out').innerHTML = `<strong>Image point:</strong> (${X}, ${Y})<br><strong>Rule reminder:</strong> ${note}`;
}
calculate();
</script>
</body>
</html>
```

## 9. Agent Retrieval Notes

Use Section 5 as the authoritative question source and Section 6 as the solution/mark-scheme source. Do not merge question wording with solutions unless a user explicitly asks for worked examples or marking guidance.
