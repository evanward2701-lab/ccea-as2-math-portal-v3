# AS1 Coordinate Geometry and Circle Questions Agent Source

## 0. AI-Agent Usage Instructions

This file is a source for question retrieval, solution lookup, mark-scheme interpretation, diagnostics and targeted practice. Questions are in Section 5. Solutions and mark schemes are in Section 6. Diagram assets are in Section 7. Widgets are in Section 8. Keep questions and solutions separate unless explicitly asked to combine them. Preserve official mark-scheme labels, uncertainty notes and generated-solution labels. Use UK/CCEA mathematical vocabulary.

## 1. Pack Metadata

```yaml
pack_type: question
unit_code: AS1
unit_name: CCEA AS1 Pure Mathematics
topic_slug: "04_geometry_questions"
topic_title: "Coordinate Geometry and Circle"
source_folder: "/Users/evanward/Documents/AS Portal - New /AS1 Files/04. Geometry-Questions"
output_file: "/Users/evanward/Documents/AS Portal - New /AS1 Files/00_AGENT_SOURCE_PACKS/04_geometry_questions/AS1_coordinate_geometry_circle_questions_agent_source.md"
created_from_files:
  lesson: null
  questions: "AS1_coordinate_geometry_circle_questions.md"
  solutions: "AS1_coordinate_geometry_circle_solutions.md"
  mermaid: "AS1_coordinate_geometry_circle_mermaid.md"
  svg: "AS1_coordinate_geometry_circle_svg.md"
  tikz: "AS1_coordinate_geometry_circle_tikz.md"
  widgets: "AS1_coordinate_geometry_circle_widgets.md"
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
| questions | AS1_coordinate_geometry_circle_questions.md | 1030 | 24973 | `09a4ce73cf6f1237f260de02ede7b86ffbff9abe39246985d381bf59111aaff4` |
| solutions | AS1_coordinate_geometry_circle_solutions.md | 971 | 41335 | `52264a1d0f71c93d71778299bde7a0d7c3f5b823d8c13f0a113d8460e9634536` |
| mermaid | AS1_coordinate_geometry_circle_mermaid.md | 6 | 288 | `109a8bb1f93be2e2199a60b9827b07743fc7330d7120cc6427be2fd09fa5e224` |
| svg | AS1_coordinate_geometry_circle_svg.md | 6 | 346 | `90b10ef0c0019e98334921a5f00990c53b8964ef3513d524efc6934d4b3d3d22` |
| tikz | AS1_coordinate_geometry_circle_tikz.md | 330 | 12614 | `8a48c28db050ce62937f4dca47d0de96a0d9bb46535026a8841a3ecae110c113` |
| widgets | AS1_coordinate_geometry_circle_widgets.md | 6 | 484 | `16594dfe99f666cafc6a19d8cc890b0652767a3d2e906864b3464ec60ced59ca` |

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
filename: "AS1_coordinate_geometry_circle_questions.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/04. Geometry-Questions/AS1_coordinate_geometry_circle_questions.md"
lines: 1030
bytes_utf8: 24973
sha256: "09a4ce73cf6f1237f260de02ede7b86ffbff9abe39246985d381bf59111aaff4"
```

### Preserved Source Content: AS1_coordinate_geometry_circle_questions.md

# Coordinate Geometry and Circle Question Pack

**Unit:** CCEA AS1 Pure Mathematics  
**Questions PDF:** `AS1_Coordinate_Geometry_incl_circle_questions(1).pdf`  
**Solutions / Mark Scheme PDF:** `AS1_Coordinate_Geometry_incl_Circle_solutions(1).pdf`  
**Date generated:** 22 May 2026  
**Pack ID:** `AS1CoordinateGeometryCircle`

---

## 1. Source Document Map

| Document type | Filename | Page count | Role in this pack |
|---|---|---:|---|
| Questions PDF | `AS1_Coordinate_Geometry_incl_circle_questions(1).pdf` | 13 | Source of questions, marks, diagrams, and wording |
| Mark scheme PDF | `AS1_Coordinate_Geometry_incl_Circle_solutions(1).pdf` | 14 | Source of official solutions and marks |

---

## 2. Specification Alignment

| Specification area | Relevant learning outcome | Question numbers testing it | Notes on coverage | Gaps or comments |
|---|---|---|---|---|
| Co-ordinate geometry in the $x,y$ plane | Use the equation of a straight line, including $y-y_1=m(x-x_1)$ and $ax+by+c=0$ | 1, 2, 4, 5, 6, 7, 9, 10, 11, 12, 13, 28 | Strong coverage of gradients, intercepts, line equations, and required forms | Some questions are from older C1/C2 papers but align closely with AS1 coordinate geometry outcomes |
| Co-ordinate geometry in the $x,y$ plane | Find the midpoint and length of a line segment | 2, 3, 4, 7, 13, 14, 17, 18, 26, 28 | Midpoint and distance formula appear repeatedly in both straight-line and circle contexts | None |
| Co-ordinate geometry in the $x,y$ plane | Use gradient conditions for parallel and perpendicular lines | 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 15, 19, 20, 25, 28 | Tested through perpendicular bisectors, tangent gradients, normal/radius gradients and parallel-line equations | None |
| Co-ordinate geometry in the $x,y$ plane | Use coordinate geometry of the circle, including $(x-a)^2+(y-b)^2=r^2$ and $x^2+y^2+2gx+2fy+c=0$ | 15-27 | Includes centre/radius, completing the square, circle from a diameter, intersections with axes, and modelling contexts | None |
| Co-ordinate geometry in the $x,y$ plane | Find the centre and radius of a circle by completing the square | 15, 16, 21, 22, 23, 24, 25, 26, 27 | Frequent use of completing the square and radius formula | None |
| Co-ordinate geometry in the $x,y$ plane | Use circle properties: perpendicularity of radius and tangent; tangent length | 15, 16, 19, 20, 22, 25 | Tangent-gradient and tangent-length questions are included | None |
| Co-ordinate geometry in the $x,y$ plane | Find the equation of the tangent to a circle through a given point on the circumference | 15, 19, 20, 25 | Tested by tangent gradient or perpendicularity of radius and tangent | None |

---

## 3. Question Index

| Pack question | Original reference | Questions PDF page | Marks | Subtopic | Diagram? | AI visual suggested? | Matching solution |
|---:|---|---:|---:|---|---|---|---|
| 1 | C1 January 2010 Question 3 | 2 | 7 | Gradient; perpendicular gradients; angle $ABC=90^\circ$ | No | No | Yes |
| 2 | C1 June 2010 Question 1 | 2 | 6 | Midpoint; perpendicular line | No | No | Yes |
| 3 | C1 January 2011 Question 4 | 2 | 6 | Kite; perpendicular diagonals; line equation | Yes | No | Yes |
| 4 | C1 June 2011 Question 1 | 3 | 6 | Intercepts; parallel line | No | No | Yes |
| 5 | C1 June 2012 Question 3(a) | 3 | 5 | Gradient; perpendicular line | No | No | Yes |
| 6 | C1 January 2013 Question 1 | 3 | 5 | Line through two points; point on a line | No | No | Yes |
| 7 | C1 June 2013 Question 1 | 4 | 6 | Isosceles triangle; midpoint; line equation | Yes | No | Yes |
| 8 | C1 January 2014 Question 2 | 4 | 8 | Intercepts; perpendicular bisector | No | No | Yes |
| 9 | C1 June 2014 Question 1(a) | 4 | 4 | Perpendicular line through a point | No | No | Yes |
| 10 | C1 June 2015 Question 2 | 5 | 7 | Gradient parameter; perpendicular line | No | No | Yes |
| 11 | C1 June 2016 Question 4(b) | 5 | 6 | Perpendicular lines; intersection | No | No | Yes |
| 12 | C1 June 2017 Question 4 (page heading says Question 3) | 5 | 6 | Rhombus diagonals; perpendicular bisector line | Yes | No | Yes |
| 13 | C1 June 2018 Question 2 | 6 | 7 | Gradient; line equation; distance | No | No | Yes |
| 14 | C1 June 2019 Question 4(b) | 6 | 7 | Line/curve intersections; midpoint | Yes | No | Yes |
| 15 | C2 June 2010 Question 2 | 7 | 7 | Circle centre/radius; tangent gradient | No | No | Yes |
| 16 | C2 January 2011 Question 3 | 7 | 8 | Circle centre/radius; tangent length | Yes | No | Yes |
| 17 | C2 June 2011 Question 1 | 8 | 8 | Circle from diameter; points on circumference | No | No | Yes |
| 18 | C2 January 2012 Question 8 | 8 | 7 | Circle through three points | Yes | No | Yes |
| 19 | C2 January 2013 Question 2 | 9 | 8 | Circle centre; axis intersection; tangent gradient | No | No | Yes |
| 20 | C2 June 2013 Question 3 | 9 | 10 | Circle with diameter; tangent proof | Yes | No | Yes |
| 21 | C2 January 2014 Question 7 | 10 | 10 | Modelling circles; shortest distance | Yes | No | Yes |
| 22 | C1 June 2014 Question 4(b) | 11 | 7 | Circle tangents; kite area | Yes | No | Yes |
| 23 | C2 June 2015 Question 2 | 12 | 7 | Touching circles; centre/radius | Yes | No | Yes |
| 24 | C2 June 2016 Question 8 | 12 | 11 | Circle equation with unknown centre | No | No | Yes |
| 25 | C2 June 2018 Question 2 | 13 | 8 | Circle centre/radius; tangent equation | No | No | Yes |
| 26 | C2 June 2019 Question 6 | 13 | 8 | Centre/radius; circle from diameter | No | No | Yes |
| 27 | AS1 (new spec) June 2019 Question 4(b) | 13 | 6 | Centre, radius and area of a circle | No | No | Yes |
| 28 | AS1 (new spec) June 2019 Question 8 | 13 | 13 | Algebraic coordinate geometry; perpendicular line; midpoint | No | No | Yes |

---

## 4. Questions

## Question 1: C1 January 2010 Question 3

**Question ID:** `AS1CoordinateGeometryCircleQ001`  
**Source:** Questions PDF p.2  
**Original reference:** C1 January 2010 Question 3  
**Marks:** 7  
**Subtopic:** Gradient; perpendicular gradients; angle $ABC=90^\circ$

### Question

Points A and B have coordinates $(1,5)$ and $(-2,y)$ respectively.

**(i)** Find an expression for the gradient of the straight line joining A and B. `[2]`

Point C has coordinates $(2,-3)$.

The angle $ABC$ is $90^\circ$.

**(ii)** Find the possible values of $y$. `[5]`

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 2: C1 June 2010 Question 1

**Question ID:** `AS1CoordinateGeometryCircleQ002`  
**Source:** Questions PDF p.2  
**Original reference:** C1 June 2010 Question 1  
**Marks:** 6  
**Subtopic:** Midpoint; equation of a perpendicular line

### Question

A and B are the points $(4,-7)$ and $(-2,3)$ respectively.

**(i)** Find the midpoint P of AB. `[1]`

**(ii)** Find the equation of the line through P which is perpendicular to AB. `[5]`

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 3: C1 January 2011 Question 4

**Question ID:** `AS1CoordinateGeometryCircleQ003`  
**Source:** Questions PDF p.2  
**Original reference:** C1 January 2011 Question 4  
**Marks:** 6  
**Subtopic:** Kite diagonals; perpendicular gradient; line equation

### Question

Points A, B, C and D form the vertices of a kite as shown in Fig. 1 below.

[VISUAL PLACEHOLDER: AS1CoordinateGeometryCircleQ003TikZ-001 | Source: Questions PDF p.2 | Insert from AS1_coordinate_geometry_circle_tikz.md | Purpose: kite diagram showing vertices A, B, C, D and the diagonals]

Point A has coordinates $(2,1)$ and point C has coordinates $(4,-5)$.

Find the equation of the diagonal BD. `[6]`

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 4: C1 June 2011 Question 1

**Question ID:** `AS1CoordinateGeometryCircleQ004`  
**Source:** Questions PDF p.3  
**Original reference:** C1 June 2011 Question 1  
**Marks:** 6  
**Subtopic:** Intercepts; parallel line equation

### Question

The straight line

$$
y = 5 - 2x
$$

crosses the $x$-axis at the point A.

**(i)** Find the coordinates of A. `[1]`

The straight line

$$
3x + 5y = 15
$$

crosses the $y$-axis at the point B.

**(ii)** Find the coordinates of B. `[1]`

**(iii)** Find the equation of the line parallel to AB passing through the point $(1,-5)$. `[4]`

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 5: C1 June 2012 Question 3(a)

**Question ID:** `AS1CoordinateGeometryCircleQ005`  
**Source:** Questions PDF p.3  
**Original reference:** C1 June 2012 Question 3(a)  
**Marks:** 5  
**Subtopic:** Gradient; perpendicular line through a point

### Question

**(a)** A straight line passes through the points A $(-1,1)$ and B $(5,13)$.

**(i)** Find the gradient of AB. `[2]`

**(ii)** Hence find the equation of the line through A perpendicular to AB. `[3]`

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 6: C1 January 2013 Question 1

**Question ID:** `AS1CoordinateGeometryCircleQ006`  
**Source:** Questions PDF p.3  
**Original reference:** C1 January 2013 Question 1  
**Marks:** 5  
**Subtopic:** Equation of a line; substitution into a line

### Question

A and B are the points $(2,-5)$ and $(4,1)$ respectively.

**(i)** Find the equation of the line AB. `[3]`

**(ii)** The point $(t,-3)$ lies on the line AB.

Find the value of $t$. `[2]`

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 7: C1 June 2013 Question 1

**Question ID:** `AS1CoordinateGeometryCircleQ007`  
**Source:** Questions PDF p.4  
**Original reference:** C1 June 2013 Question 1  
**Marks:** 6  
**Subtopic:** Isosceles triangle; midpoint; equation of a line

### Question

An outline for an airline logo is in the shape of an isosceles triangle as shown in Fig. 1 below.

[VISUAL PLACEHOLDER: AS1CoordinateGeometryCircleQ007TikZ-001 | Source: Questions PDF p.4 | Insert from AS1_coordinate_geometry_circle_tikz.md | Purpose: isosceles triangle with base midpoint D and dashed height AD]

$$
AB = AC
$$

B has coordinates $(-1,1)$.

C has coordinates $(5,3)$.

D is the midpoint of BC.

**(i)** Find the coordinates of D. `[2]`

**(ii)** Hence find the equation of the line AD. `[4]`

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 8: C1 January 2014 Question 2

**Question ID:** `AS1CoordinateGeometryCircleQ008`  
**Source:** Questions PDF p.4  
**Original reference:** C1 January 2014 Question 2  
**Marks:** 8  
**Subtopic:** Intercepts; perpendicular bisector

### Question

L is the line whose equation is

$$
y + 2x = 10.
$$

L crosses the $y$-axis at A and the $x$-axis at B.

**(i)** Write down the coordinates of A and B. `[2]`

**(ii)** Find the equation of the perpendicular bisector of the line AB. `[6]`

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 9: C1 June 2014 Question 1(a)

**Question ID:** `AS1CoordinateGeometryCircleQ009`  
**Source:** Questions PDF p.4  
**Original reference:** C1 June 2014 Question 1(a)  
**Marks:** 4  
**Subtopic:** Perpendicular line through a point

### Question

**(a)** Find the equation of the line which passes through the point $(-3,4)$ and is perpendicular to the line

$$
y = 7 - 2x.
$$

`[4]`

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 10: C1 June 2015 Question 2

**Question ID:** `AS1CoordinateGeometryCircleQ010`  
**Source:** Questions PDF p.5  
**Original reference:** C1 June 2015 Question 2  
**Marks:** 7  
**Subtopic:** Parameter in gradient formula; perpendicular line

### Question

The points A and B have coordinates $(a,-2a)$ and $(3,10)$ respectively.

**(i)** The gradient of the line AB is 2.

Show that $a=-1$. `[3]`

**(ii)** Hence find the equation of the line perpendicular to AB passing through the point $(5,4)$.

Leave your answer in the form $ax+by+c=0$, where $a$, $b$ and $c$ are integers. `[4]`

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 11: C1 June 2016 Question 4(b)

**Question ID:** `AS1CoordinateGeometryCircleQ011`  
**Source:** Questions PDF p.5  
**Original reference:** C1 June 2016 Question 4(b)  
**Marks:** 6  
**Subtopic:** Perpendicular lines; intersection point

### Question

**(b)** The straight line $L_1$ has equation

$$
y - 2x + 1 = 0.
$$

The straight line $L_2$ passes through the point $(4,2)$.

$L_2$ is perpendicular to $L_1$.

Find the coordinates of the point of intersection of $L_1$ and $L_2$. `[6]`

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 12: C1 June 2017 Question 4

**Question ID:** `AS1CoordinateGeometryCircleQ012`  
**Source:** Questions PDF p.5  
**Original reference:** C1 June 2017 Question 4 (questions page heading states “Question 3”)  
**Marks:** 6  
**Subtopic:** Rhombus diagonals; perpendicular bisector line

### Question

Fig. 3 below shows the rhombus ABCD.

[VISUAL PLACEHOLDER: AS1CoordinateGeometryCircleQ012TikZ-001 | Source: Questions PDF p.5 | Insert from AS1_coordinate_geometry_circle_tikz.md | Purpose: rhombus ABCD with perpendicular diagonals AC and BD]

Point A has coordinates $(-2,1)$.

Point C has coordinates $(3,11)$.

Find the equation of the line BD.

Leave your answer in the form $ax+by+c=0$, where $a$, $b$ and $c$ are integers. `[6]`

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 13: C1 June 2018 Question 2

**Question ID:** `AS1CoordinateGeometryCircleQ013`  
**Source:** Questions PDF p.6  
**Original reference:** C1 June 2018 Question 2  
**Marks:** 7  
**Subtopic:** Gradient; line equation; exact distance

### Question

Point A has coordinates $(7,-2)$.

Point B has coordinates $(1,10)$.

**(i)** Find the gradient of the line AB. `[2]`

**(ii)** Hence find the equation of the line AB. `[2]`

The line AB cuts the $x$-axis at the point P.

**(iii)** Find the exact distance BP. `[3]`

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 14: C1 June 2019 Question 4(b)

**Question ID:** `AS1CoordinateGeometryCircleQ014`  
**Source:** Questions PDF p.6  
**Original reference:** C1 June 2019 Question 4(b)  
**Marks:** 7  
**Subtopic:** Intersection of a line and reciprocal curve; midpoint

### Question

**(b)** Fig. 2 below shows a sketch of a curve and a straight line.

[VISUAL PLACEHOLDER: AS1CoordinateGeometryCircleQ014TikZ-001 | Source: Questions PDF p.6 | Insert from AS1_coordinate_geometry_circle_tikz.md | Purpose: sketch of reciprocal curve and line intersecting at A and B]

The straight line has equation

$$
y=x-2.
$$

The curve has equation

$$
y=\frac{3}{x}.
$$

They intersect at the points A and B.

**(i)** Find the coordinates of A and B. `[5]`

**(ii)** Hence find the midpoint of the line AB. `[2]`

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 15: C2 June 2010 Question 2

**Question ID:** `AS1CoordinateGeometryCircleQ015`  
**Source:** Questions PDF p.7  
**Original reference:** C2 June 2010 Question 2  
**Marks:** 7  
**Subtopic:** Centre and radius from general circle equation; tangent gradient

### Question

**(i)** Write down the centre of the circle whose equation is

$$
x^2+y^2+4y-21=0
$$

and find the circle’s radius. `[4]`

**(ii)** Find the gradient of the tangent to this circle at the point $(3,2)$. `[3]`

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 16: C2 January 2011 Question 3

**Question ID:** `AS1CoordinateGeometryCircleQ016`  
**Source:** Questions PDF p.7  
**Original reference:** C2 January 2011 Question 3  
**Marks:** 8  
**Subtopic:** Completing the square; tangent length

### Question

A circle is given by the equation

$$
x^2-2x+y^2+4y=4.
$$

**(i)** Find the centre and radius of the circle. `[4]`

A tangent is drawn to the circle from the point A $(5,6)$.

The tangent touches the circle at the point B as shown in Fig. 3 below.

[VISUAL PLACEHOLDER: AS1CoordinateGeometryCircleQ016TikZ-001 | Source: Questions PDF p.7 | Insert from AS1_coordinate_geometry_circle_tikz.md | Purpose: tangent from external point A to circle at point B]

**(ii)** Find the length AB. `[4]`

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 17: C2 June 2011 Question 1

**Question ID:** `AS1CoordinateGeometryCircleQ017`  
**Source:** Questions PDF p.8  
**Original reference:** C2 June 2011 Question 1  
**Marks:** 8  
**Subtopic:** Circle with diameter; point on circumference

### Question

The line joining the points A $(-7,4)$ and B $(1,-2)$ is a diameter of a circle.

**(i)** Find the coordinates of the centre of the circle. `[1]`

**(ii)** Find the radius of the circle. `[1]`

**(iii)** Hence write down the equation of the circle. `[2]`

The point $(0,t)$ lies on the circumference of the circle.

**(iv)** Find the two possible values of $t$. `[4]`

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 18: C2 January 2012 Question 8

**Question ID:** `AS1CoordinateGeometryCircleQ018`  
**Source:** Questions PDF p.8  
**Original reference:** C2 January 2012 Question 8  
**Marks:** 7  
**Subtopic:** Circle through three points; general circle equation

### Question

The edge of the network coverage of a radio mast can be modelled by a circle as shown in Fig. 7 below.

[VISUAL PLACEHOLDER: AS1CoordinateGeometryCircleQ018TikZ-001 | Source: Questions PDF p.8 | Insert from AS1_coordinate_geometry_circle_tikz.md | Purpose: circle modelling radio mast coverage with points A, B and C on the circumference]

Points A, B and C lie on the circumference of the circle.

$$
A=(0,6), \qquad B=(0,-2), \qquad C=(1,5).
$$

Find the equation of the circle. `[7]`

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 19: C2 January 2013 Question 2

**Question ID:** `AS1CoordinateGeometryCircleQ019`  
**Source:** Questions PDF p.9  
**Original reference:** C2 January 2013 Question 2  
**Marks:** 8  
**Subtopic:** Centre and tangent gradient of a circle

### Question

A circle has the equation

$$
(x-1)^2+(y-2)^2=13.
$$

**(i)** Write down the centre of this circle. `[2]`

The circle cuts the positive $x$-axis at the point A.

**(ii)** Find the coordinates of A. `[3]`

**(iii)** Find the gradient of the tangent to the circle at the point A. `[3]`

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 20: C2 June 2013 Question 3

**Question ID:** `AS1CoordinateGeometryCircleQ020`  
**Source:** Questions PDF p.9  
**Original reference:** C2 June 2013 Question 3  
**Marks:** 10  
**Subtopic:** Circle with a diameter; tangent proof

### Question

A and B are the points $(5,1)$ and $(2,-3)$ respectively.

AD is the diameter of a circle with centre B as shown in Fig. 1 below.

[VISUAL PLACEHOLDER: AS1CoordinateGeometryCircleQ020TikZ-001 | Source: Questions PDF p.9 | Insert from AS1_coordinate_geometry_circle_tikz.md | Purpose: circle with AD as a diameter and B as the centre]

**(i)** Find the equation of the circle. `[4]`

**(ii)** Verify that D is the point $(-1,-7)$. `[2]`

The point C has coordinates $(3,-10)$.

**(iii)** Prove that CD is a tangent to the circle. `[4]`

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 21: C2 January 2014 Question 7

**Question ID:** `AS1CoordinateGeometryCircleQ021`  
**Source:** Questions PDF p.10  
**Original reference:** C2 January 2014 Question 7  
**Marks:** 10  
**Subtopic:** Modelling two circles; completing the square; shortest distance

### Question

The chain on a bicycle passes over two sprockets. The sprockets can be modelled as two circles A and B as shown in Fig. 4 below.

[VISUAL PLACEHOLDER: AS1CoordinateGeometryCircleQ021TikZ-001 | Source: Questions PDF p.10 | Insert from AS1_coordinate_geometry_circle_tikz.md | Purpose: two sprockets modelled as circles with axes and chain tangents]

Circular sprocket A has a radius of 6 cm and touches both the $x$- and $y$-axes.

**(i)** Find the equation of circle A. `[3]`

The equation of circle B is

$$
x^2+12x+y^2+6y+41=0.
$$

**(ii)** Find the length of the radius and the coordinates of the centre of circle B. `[4]`

**(iii)** Find the shortest distance between the two sprockets. `[3]`

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 22: C1 June 2014 Question 4(b)

**Question ID:** `AS1CoordinateGeometryCircleQ022`  
**Source:** Questions PDF p.11  
**Original reference:** C1 June 2014 Question 4(b)  
**Marks:** 7  
**Subtopic:** Tangents from an external point; area of a kite

### Question

**(b)** The circle

$$
x^2-6x+y^2+10y+18=0
$$

has its centre at the point C.

Tangents drawn from the point A $(-2,4)$ meet the circle at the points B and D respectively, as shown in Fig. 4 below.

[VISUAL PLACEHOLDER: AS1CoordinateGeometryCircleQ022TikZ-001 | Source: Questions PDF p.11 | Insert from AS1_coordinate_geometry_circle_tikz.md | Purpose: circle with two tangents from A forming kite ABCD]

Find the area of the kite ABCD. `[7]`

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 23: C2 June 2015 Question 2

**Question ID:** `AS1CoordinateGeometryCircleQ023`  
**Source:** Questions PDF p.12  
**Original reference:** C2 June 2015 Question 2  
**Marks:** 7  
**Subtopic:** Touching circles; centre and radius

### Question

A jeweller is making a pendant for a necklace.

It can be modelled as two touching circles as shown in Fig. 1 below.

[VISUAL PLACEHOLDER: AS1CoordinateGeometryCircleQ023TikZ-001 | Source: Questions PDF p.12 | Insert from AS1_coordinate_geometry_circle_tikz.md | Purpose: pendant modelled as a large circle with a smaller touching circle inside]

The equation of the larger circle is

$$
x^2-6x+y^2-8y+21=0.
$$

**(i)** Find the centre and radius of this circle. `[4]`

The diameter of the smaller circle is half the diameter of the larger circle.

The centre of the smaller circle is vertically above the centre of the larger circle.

**(ii)** Find the equation of the smaller circle. `[3]`

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 24: C2 June 2016 Question 8

**Question ID:** `AS1CoordinateGeometryCircleQ024`  
**Source:** Questions PDF p.12  
**Original reference:** C2 June 2016 Question 8  
**Marks:** 11  
**Subtopic:** Circle equation with unknown centre and radius

### Question

A circle has centre $(a,b)$ and radius $r$.

The centre of this circle lies on the line $y=2$.

**(i)** Write down the value of $b$. `[1]`

The circle passes through the points $(1,5)$ and $(-6,6)$.

**(ii)** Find the equation of this circle. `[10]`

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 25: C2 June 2018 Question 2

**Question ID:** `AS1CoordinateGeometryCircleQ025`  
**Source:** Questions PDF p.13  
**Original reference:** C2 June 2018 Question 2  
**Marks:** 8  
**Subtopic:** Completing the square; tangent equation

### Question

The equation of a circle is

$$
x^2+y^2+2x-4y=0.
$$

**(i)** Find the centre and radius of this circle. `[4]`

**(ii)** Find the equation of the tangent to this circle at the point $(-3,3)$. `[4]`

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 26: C2 June 2019 Question 6

**Question ID:** `AS1CoordinateGeometryCircleQ026`  
**Source:** Questions PDF p.13  
**Original reference:** C2 June 2019 Question 6  
**Marks:** 8  
**Subtopic:** Centre and radius; circle from diameter

### Question

**(a)** Find the centre and radius of the circle with equation

$$
x^2+y^2-6x+2y+6=0.
$$

`[4 marks]`

**(b)** The line joining the points $(-3,8)$ and $(1,-4)$ is a diameter of a circle.

Find the equation of this circle. `[4 marks]`

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 27: AS1 (new spec) June 2019 Question 4(b)

**Question ID:** `AS1CoordinateGeometryCircleQ027`  
**Source:** Questions PDF p.13  
**Original reference:** AS1 (new spec) June 2019 Question 4(b)  
**Marks:** 6  
**Subtopic:** Centre and area of a circle

### Question

**(b)** Find the centre and area of the circle given by the equation

$$
x^2-4x+y^2+6y-3=0.
$$

`[6]`

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 28: AS1 (new spec) June 2019 Question 8

**Question ID:** `AS1CoordinateGeometryCircleQ028`  
**Source:** Questions PDF p.13  
**Original reference:** AS1 (new spec) June 2019 Question 8  
**Marks:** 13  
**Subtopic:** Algebraic coordinate geometry; perpendicular line; midpoint

### Question

The points A and B have coordinates $(2a,a^2)$ and $(a+1,a)$ respectively, where $a\ne 0$.

**(i)** A straight line, perpendicular to AB and passing through the point A, cuts the $x$-axis at the point P.

Find, in terms of $a$, the coordinates of the point P. `[8]`

**(ii)** The midpoint of the line AB has equal $x$ and $y$ ordinates.

Find the possible values of $a$ in their simplest surd form. `[5]`

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
filename: "AS1_coordinate_geometry_circle_solutions.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/04. Geometry-Questions/AS1_coordinate_geometry_circle_solutions.md"
lines: 971
bytes_utf8: 41335
sha256: "52264a1d0f71c93d71778299bde7a0d7c3f5b823d8c13f0a113d8460e9634536"
```

### Preserved Source Content: AS1_coordinate_geometry_circle_solutions.md

# Coordinate Geometry and Circle Solutions and Mark Scheme Pack

**Unit:** CCEA AS1 Pure Mathematics  
**Questions PDF:** `AS1_Coordinate_Geometry_incl_circle_questions(1).pdf`  
**Solutions / Mark Scheme PDF:** `AS1_Coordinate_Geometry_incl_Circle_solutions(1).pdf`  
**Date generated:** 22 May 2026  
**Pack ID:** `AS1CoordinateGeometryCircle`

---

## 1. Mark Scheme Notation Guide

The mark scheme uses compressed mark codes. The following guide is for reading the tables below:

- `M` usually means a method mark.
- `A` usually means an accuracy mark.
- `W` or `MW` may represent written, working, or method-with-working marks depending on the source.
- A combined code such as `M1 W1` or `M1W1` means that the displayed line was associated with more than one awarded mark in the supplied mark scheme.
- `MW2` means that two marks were associated with that line or result in the supplied mark scheme.

The exact meaning of each mark code should be interpreted according to the awarding body’s mark scheme conventions.

---

## 2. Question-to-Solution Map

| Pack question | Original reference | Question page | Solution page | Total marks from question | Marks shown in mark scheme | Match confidence | Notes |
|---:|---|---:|---:|---:|---:|---|---|
| 1 | C1 January 2010 Q3 | 2 | 2 | 7 | 7 | High | Matched by heading and content |
| 2 | C1 June 2010 Q1 | 2 | 2 | 6 | 6 | High | Matched by heading and content |
| 3 | C1 January 2011 Q4 | 2 | 2 | 6 | 6 | High | Matched by heading and kite-diagonal method |
| 4 | C1 June 2011 Q1 | 3 | 3 | 6 | 6 | High | Matched by intercepts and parallel line |
| 5 | C1 June 2012 Q3(a) | 3 | 3 | 5 | 5 shown for part (a) | High | Mark scheme also contains a part (b) not present in the questions PDF |
| 6 | C1 January 2013 Q1 | 3 | 3 | 5 | 5 | High | Matched by line through two points |
| 7 | C1 June 2013 Q1 | 4 | 4 | 6 | 6 | High | Matched by isosceles triangle and midpoint |
| 8 | C1 January 2014 Q2 | 4 | 4 | 8 | 8 | High | Matched by intercepts and perpendicular bisector |
| 9 | C1 June 2014 Q1(a) | 4 | 5 | 4 | 4 | High | Matched by perpendicular line through $(-3,4)$ |
| 10 | C1 June 2015 Q2 | 5 | 5 | 7 | 7 | High | Matched by parameter $a$ and final line equation |
| 11 | C1 June 2016 Q4(b) | 5 | 6 | 6 | 6 shown for part (b) | High | Right margin shows original full-question available marks |
| 12 | C1 June 2017 Q4 | 5 | 6 | 6 | 6 | Medium | Questions page heading says “Question 3”, but printed question and mark scheme show Question 4 |
| 13 | C1 June 2018 Q2 | 6 | 7 | 7 | 7 | High | Matched by line AB and distance BP |
| 14 | C1 June 2019 Q4(b) | 6 | 7 | 7 | 7 shown for part (b) | High | Right margin shows original full-question available marks |
| 15 | C2 June 2010 Q2 | 7 | 8 | 7 | 7 | High | Matched by circle $x^2+y^2+4y-21=0$ |
| 16 | C2 January 2011 Q3 | 7 | 8 | 8 | 8 | High | Matched by tangent length from $A(5,6)$ |
| 17 | C2 June 2011 Q1 | 8 | 8 | 8 | 8 | High | Matched by diameter endpoints |
| 18 | C2 January 2012 Q8 | 8 | 9 | 7 | 7 | High | Mark scheme includes an alternative solution |
| 19 | C2 January 2013 Q2 | 9 | 10 | 8 | 8 | High | Matched by circle $(x-1)^2+(y-2)^2=13$ |
| 20 | C2 June 2013 Q3 | 9 | 10 | 10 | 10 | High | Matched by circle with diameter AD and tangent proof |
| 21 | C2 January 2014 Q7 | 10 | 11 | 10 | 10 | High | Matched by bicycle sprocket context |
| 22 | C1 June 2014 Q4(b) | 11 | 11 | 7 | 7 shown for part (b) | High | Right margin shows original full-question available marks |
| 23 | C2 June 2015 Q2 | 12 | 11 | 7 | 7 | High | Matched by pendant/touching circles context |
| 24 | C2 June 2016 Q8 | 12 | 12 | 11 | 11 | High | Matched by centre $(a,b)$ and points $(1,5),(-6,6)$ |
| 25 | C2 June 2018 Q2 | 13 | 13 | 8 | 8 | High | Matched by tangent at $(-3,3)$ |
| 26 | C2 June 2019 Q6 | 13 | 13 | 8 | 8 | High | Matched by centre/radius and circle from diameter |
| 27 | AS1 (new spec) June 2019 Q4(b) | 13 | 13 | 6 | 6 shown for part (b) | High | Right margin shows original full-question available marks |
| 28 | AS1 (new spec) June 2019 Q8 | 13 | 14 | 13 | 13 | High | Matched by algebraic coordinates with parameter $a$ |

---

## 3. Fully Worked Mark Scheme Solutions

## Solution to Question 1: C1 January 2010 Question 3

**Question ID:** `AS1CoordinateGeometryCircleQ001`  
**Source:** Mark Scheme PDF p.2  
**Original reference:** C1 January 2010 Question 3  
**Related question:** See `AS1_coordinate_geometry_circle_questions.md`, Question 1  
**Marks available:** 7  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $m_{AB}=\dfrac{y-5}{-2-1}=\dfrac{y-5}{-3}$ | M1 W1 | 2 | Uses the gradient formula for AB. |
| 2 | $m_{BC}=\dfrac{y+3}{-4}$ | MW1 | 1 | Finds the gradient involving B and C. |
| 3 | $\dfrac{y-5}{-3}\times\dfrac{y+3}{-4}=-1$ | M1 | 1 | Uses the perpendicular gradient condition. |
| 4 | $(y-5)(y+3)=-12$ | MW1 | 1 | Rearranges the perpendicular condition. |
| 5 | $y^2-2y-3=0$ | M1 | 1 | Forms the quadratic equation. |
| 6 | $(y-3)(y+1)=0$ | — | 0 | Factorises the quadratic. |
| 7 | $y=3$ or $y=-1$ | W1 | 1 | Gives both possible values. |

### Final Answer

`$m_{AB}=\dfrac{y-5}{-3}$; $y=3$ or $y=-1$`

### What the Examiner Wanted

Use the gradient formula, apply the perpendicular-gradient condition because $\angle ABC=90^\circ$, then solve the resulting quadratic. Common losses are sign errors in the gradients and giving only one value of $y$.

---

## Solution to Question 2: C1 June 2010 Question 1

**Question ID:** `AS1CoordinateGeometryCircleQ002`  
**Source:** Mark Scheme PDF p.2  
**Original reference:** C1 June 2010 Question 1  
**Related question:** See `AS1_coordinate_geometry_circle_questions.md`, Question 2  
**Marks available:** 6  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | Midpoint $P=(1,-2)$ | MW1 | 1 | Finds the midpoint correctly. |
| 2 | $\text{grad }AB=\dfrac{3-(-7)}{-2-4}=-\dfrac{5}{3}$ | M1 W1 | 2 | Uses gradient formula for AB. |
| 3 | Perpendicular gradient $=\dfrac{3}{5}$ | MW1 | 1 | Uses negative reciprocal gradient. |
| 4 | $y+2=\dfrac{3}{5}(x-1)$ | M1 W1 | 2 | Forms the perpendicular line through P. |
| 5 | $3x-5y-13=0$ | — | 0 | Final rearranged equation. |

### Final Answer

`$P=(1,-2)$; $3x-5y-13=0$`

### What the Examiner Wanted

Find the midpoint, calculate the gradient of AB, invert and change sign for the perpendicular gradient, and substitute the midpoint into the line equation.

---

## Solution to Question 3: C1 January 2011 Question 4

**Question ID:** `AS1CoordinateGeometryCircleQ003`  
**Source:** Mark Scheme PDF p.2  
**Original reference:** C1 January 2011 Question 4  
**Related question:** See `AS1_coordinate_geometry_circle_questions.md`, Question 3  
**Marks available:** 6  
**Match confidence:** High

[VISUAL REFERENCE: AS1CoordinateGeometryCircleQ003TikZ-001 | See question diagram in AS1_coordinate_geometry_circle_tikz.md | Purpose: supports the kite diagonal reasoning]

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | Midpoint of AC $=(3,-2)$ | MW1 | 1 | Finds where the diagonals meet. |
| 2 | Gradient of AC $=\dfrac{y_2-y_1}{x_2-x_1}=\dfrac{-5-1}{4-2}=-3$ | M1 W1 | 2 | Uses gradient formula. |
| 3 | Perpendicular gradient $=\dfrac{1}{3}$ | MW1 | 1 | Uses perpendicular diagonals of a kite. |
| 4 | $y+2=\dfrac{1}{3}(x-3)$ | M1 | 1 | Forms the line BD through the midpoint. |
| 5 | $3y=x-9$ | W1 | 1 | Gives the final equation. |

### Final Answer

`$3y=x-9$`

### What the Examiner Wanted

Use the fact that the diagonals of the kite are perpendicular and meet at the midpoint of AC, then find the equation of BD.

---

## Solution to Question 4: C1 June 2011 Question 1

**Question ID:** `AS1CoordinateGeometryCircleQ004`  
**Source:** Mark Scheme PDF p.3  
**Original reference:** C1 June 2011 Question 1  
**Related question:** See `AS1_coordinate_geometry_circle_questions.md`, Question 4  
**Marks available:** 6  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $A=(2.5,0)$ | MW1 | 1 | Sets $y=0$ for the $x$-intercept. |
| 2 | $B=(0,3)$ | MW1 | 1 | Sets $x=0$ for the $y$-intercept. |
| 3 | $\text{grad }AB=\dfrac{y_2-y_1}{x_2-x_1}=-\dfrac{6}{5}$ | M1 W1 | 2 | Finds the gradient of AB. |
| 4 | $y+5=-\dfrac{6}{5}(x-1)$ | M1 | 1 | Uses parallel gradient through $(1,-5)$. |
| 5 | $5y+6x+19=0$ | W1 | 1 | Gives the final rearranged equation. |

### Final Answer

`$A=(2.5,0)$; $B=(0,3)$; $5y+6x+19=0$`

### What the Examiner Wanted

Find both intercepts, calculate the gradient of AB, then use the same gradient for the parallel line through $(1,-5)$.

---

## Solution to Question 5: C1 June 2012 Question 3(a)

**Question ID:** `AS1CoordinateGeometryCircleQ005`  
**Source:** Mark Scheme PDF p.3  
**Original reference:** C1 June 2012 Question 3(a)  
**Related question:** See `AS1_coordinate_geometry_circle_questions.md`, Question 5  
**Marks available:** 5  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $\text{grad }AB=\dfrac{13-1}{5-(-1)}=2$ | M1 W1 | 2 | Finds the gradient of AB. |
| 2 | Perpendicular gradient $=-\dfrac{1}{2}$ | MW1 | 1 | Uses the negative reciprocal. |
| 3 | $y-1=-\dfrac{1}{2}(x+1)$ | M1 | 1 | Forms the perpendicular line through A. |
| 4 | $2y=1-x$ | W1 | 1 | Gives the final simplified equation. |

### Final Answer

`$2y=1-x$`

### What the Examiner Wanted

Find the gradient of AB and then use the perpendicular gradient through the given point A.

---

## Solution to Question 6: C1 January 2013 Question 1

**Question ID:** `AS1CoordinateGeometryCircleQ006`  
**Source:** Mark Scheme PDF p.3  
**Original reference:** C1 January 2013 Question 1  
**Related question:** See `AS1_coordinate_geometry_circle_questions.md`, Question 6  
**Marks available:** 5  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | Gradient $=\dfrac{1+5}{4-2}=3$ | MW1 | 1 | Uses the gradient formula. |
| 2 | $-5=2(3)+c$, so $c=-11$ | — | 0 | Substitutes point $(2,-5)$ to find the intercept. |
| 3 | $y=3x-11$ | M1 W1 | 2 | Gives the equation of AB. |
| 4 | Substitute $y=-3$: $-3=3t-11$ | — | 0 | Uses the point $(t,-3)$ on the line. |
| 5 | $3t=8$ | M1 | 1 | Rearranges correctly. |
| 6 | $t=\dfrac{8}{3}$ | W1 | 1 | Final value of $t$. |

### Final Answer

`$y=3x-11$; $t=\dfrac{8}{3}$`

### What the Examiner Wanted

Find the equation of AB using the two given points, then substitute the coordinates of the point on the line.

---

## Solution to Question 7: C1 June 2013 Question 1

**Question ID:** `AS1CoordinateGeometryCircleQ007`  
**Source:** Mark Scheme PDF p.4  
**Original reference:** C1 June 2013 Question 1  
**Related question:** See `AS1_coordinate_geometry_circle_questions.md`, Question 7  
**Marks available:** 6  
**Match confidence:** High

[VISUAL REFERENCE: AS1CoordinateGeometryCircleQ007TikZ-001 | See question diagram in AS1_coordinate_geometry_circle_tikz.md | Purpose: supports the midpoint and perpendicular height reasoning]

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $D=\left(\dfrac{-1+5}{2},\dfrac{1+3}{2}\right)=(2,2)$ | M1 W1 | 2 | Finds the midpoint of BC. |
| 2 | Gradient of BC $=\dfrac{3-1}{5-(-1)}=\dfrac{1}{3}$ | MW1 | 1 | Finds the base gradient. |
| 3 | Gradient of AD $=-3$ | MW1 | 1 | Uses the perpendicular height in an isosceles triangle. |
| 4 | $y-2=-3(x-2)$ | M1 | 1 | Forms the equation of AD through D. |
| 5 | $y=-3x+8$ | W1 | 1 | Gives the final line equation. |

### Final Answer

`$D=(2,2)$; $y=-3x+8$`

### What the Examiner Wanted

Use D as the midpoint of BC, then use the perpendicular relationship between the isosceles height AD and the base BC.

---

## Solution to Question 8: C1 January 2014 Question 2

**Question ID:** `AS1CoordinateGeometryCircleQ008`  
**Source:** Mark Scheme PDF p.4  
**Original reference:** C1 January 2014 Question 2  
**Related question:** See `AS1_coordinate_geometry_circle_questions.md`, Question 8  
**Marks available:** 8  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $A=(0,10)$ | MW1 | 1 | Finds the $y$-intercept. |
| 2 | $B=(5,0)$ | MW1 | 1 | Finds the $x$-intercept. |
| 3 | Gradient of AB $=\dfrac{0-10}{5-0}=-2$ | MW1 | 1 | Finds the gradient of AB. |
| 4 | Perpendicular gradient $=\dfrac{1}{2}$ | MW1 | 1 | Uses negative reciprocal. |
| 5 | Midpoint $=\left(2.5,5\right)$ | MW2 | 2 | Finds midpoint of AB. |
| 6 | $y=mx+c$ | M1 | 1 | Starts line equation for perpendicular bisector. |
| 7 | $5=\dfrac{1}{2}\left(\dfrac{5}{2}\right)+c$, so $c=\dfrac{15}{4}$ | — | 0 | Substitutes the midpoint. |
| 8 | $y=\dfrac{1}{2}x+\dfrac{15}{4}$ | W1 | 1 | Final equation. |

### Final Answer

`$A=(0,10)$; $B=(5,0)$; $y=\dfrac{1}{2}x+\dfrac{15}{4}$`

### What the Examiner Wanted

Identify both intercepts, find the midpoint and perpendicular gradient, then write the perpendicular bisector equation.

---

## Solution to Question 9: C1 June 2014 Question 1(a)

**Question ID:** `AS1CoordinateGeometryCircleQ009`  
**Source:** Mark Scheme PDF p.5  
**Original reference:** C1 June 2014 Question 1(a)  
**Related question:** See `AS1_coordinate_geometry_circle_questions.md`, Question 9  
**Marks available:** 4  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | Gradient of given line $=-2$ | MW1 | 1 | Reads the gradient from $y=7-2x$. |
| 2 | Perpendicular gradient $=\dfrac{1}{2}$ | MW1 | 1 | Uses negative reciprocal. |
| 3 | $y=mx+c$ and $4=\dfrac{1}{2}(-3)+c$ | M1 | 1 | Substitutes the point $(-3,4)$. |
| 4 | $y=\dfrac{1}{2}x+\dfrac{11}{2}$, so $2y=x+11$ | W1 | 1 | Final equation. |

### Final Answer

`$2y=x+11$`

### What the Examiner Wanted

Use the perpendicular-gradient rule and substitute the given point to find the constant.

---

## Solution to Question 10: C1 June 2015 Question 2

**Question ID:** `AS1CoordinateGeometryCircleQ010`  
**Source:** Mark Scheme PDF p.5  
**Original reference:** C1 June 2015 Question 2  
**Related question:** See `AS1_coordinate_geometry_circle_questions.md`, Question 10  
**Marks available:** 7  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $\dfrac{10+2a}{3-a}=2$ | M1 | 1 | Uses gradient formula with parameter $a$. |
| 2 | $10+2a=6-2a$ | W1 | 1 | Rearranges correctly. |
| 3 | $4a=-4$, so $a=-1$ | MW1 | 1 | Shows the required value. |
| 4 | Perpendicular gradient $=-\dfrac{1}{2}$ | MW1 | 1 | Uses gradient 2 for AB. |
| 5 | $4=-\dfrac{1}{2}(5)+c$ | M1 | 1 | Substitutes point $(5,4)$. |
| 6 | $c=\dfrac{13}{2}$ | W1 | 1 | Finds the constant. |
| 7 | $y=-\dfrac{1}{2}x+\dfrac{13}{2}$, so $x+2y-13=0$ | W1 | 1 | Final answer in required form. |

### Final Answer

`$a=-1$; $x+2y-13=0$`

### What the Examiner Wanted

Use the given gradient to form an equation for $a$, then find the perpendicular line and give it in the required integer-coefficient form.

---

## Solution to Question 11: C1 June 2016 Question 4(b)

**Question ID:** `AS1CoordinateGeometryCircleQ011`  
**Source:** Mark Scheme PDF p.6  
**Original reference:** C1 June 2016 Question 4(b)  
**Related question:** See `AS1_coordinate_geometry_circle_questions.md`, Question 11  
**Marks available:** 6  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $L_1$ has gradient $2$ | MW1 | 1 | Reads gradient from $y=2x-1$. |
| 2 | $L_2$ has gradient $-\dfrac{1}{2}$ | MW1 | 1 | Uses perpendicular gradient. |
| 3 | $y=mx+c$ and $2=-\dfrac{1}{2}(4)+c$ | M1 | 1 | Substitutes the point $(4,2)$. |
| 4 | $c=4$, so $y=-\dfrac{1}{2}x+4$ | W1 | 1 | Finds equation of $L_2$. |
| 5 | $-\dfrac{1}{2}x+4=2x-1$, so $x=2$ | M1 | 1 | Solves the simultaneous line equations. |
| 6 | $y=3$, hence $(2,3)$ | W1 | 1 | Final intersection point. |

### Final Answer

`$(2,3)$`

### What the Examiner Wanted

Find $L_2$ using the perpendicular gradient and its given point, then solve the two line equations simultaneously.

---

## Solution to Question 12: C1 June 2017 Question 4

**Question ID:** `AS1CoordinateGeometryCircleQ012`  
**Source:** Mark Scheme PDF p.6  
**Original reference:** C1 June 2017 Question 4  
**Related question:** See `AS1_coordinate_geometry_circle_questions.md`, Question 12  
**Marks available:** 6  
**Match confidence:** Medium

[VISUAL REFERENCE: AS1CoordinateGeometryCircleQ012TikZ-001 | See question diagram in AS1_coordinate_geometry_circle_tikz.md | Purpose: supports rhombus diagonal reasoning]

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | Gradient of AC $=\dfrac{11-1}{3-(-2)}=2$ | M1 W1 | 2 | Finds the gradient of diagonal AC. |
| 2 | Gradient of BD $=-\dfrac{1}{2}$ | MW1 | 1 | Uses perpendicular diagonals of a rhombus. |
| 3 | Midpoint of AC $=\left(\dfrac{1}{2},6\right)$ | MW1 | 1 | Finds where the diagonals meet. |
| 4 | $6=-\dfrac{1}{2}\left(\dfrac{1}{2}\right)+c$ | M1 | 1 | Substitutes midpoint into line BD. |
| 5 | $c=\dfrac{25}{4}$ and $y=-\dfrac{1}{2}x+\dfrac{25}{4}$ | — | 0 | Intermediate equation. |
| 6 | $2x+4y-25=0$ | W1 | 1 | Final answer in required form. |

### Final Answer

`$2x+4y-25=0$`

### What the Examiner Wanted

Use the fact that the diagonals of a rhombus bisect each other and are perpendicular, then form the line BD through their midpoint.

---

## Solution to Question 13: C1 June 2018 Question 2

**Question ID:** `AS1CoordinateGeometryCircleQ013`  
**Source:** Mark Scheme PDF p.7  
**Original reference:** C1 June 2018 Question 2  
**Related question:** See `AS1_coordinate_geometry_circle_questions.md`, Question 13  
**Marks available:** 7  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $\text{grad }AB=\dfrac{10-(-2)}{1-7}=-2$ | M1 W1 | 2 | Finds gradient of AB. |
| 2 | $y=mx+c$ and $10=-2(1)+c$ | M1 | 1 | Substitutes point B. |
| 3 | $c=12$, so $y=-2x+12$ | W1 | 1 | Gives equation of AB. |
| 4 | $y=0 \Rightarrow x=6$, so $P=(6,0)$ | MW1 | 1 | Finds $x$-axis intercept. |
| 5 | $BP=\sqrt{5^2+10^2}$ | M1 | 1 | Uses distance formula. |
| 6 | $BP=\sqrt{125}=5\sqrt{5}$ units | W1 | 1 | Gives exact distance. |

### Final Answer

`$y=-2x+12$; $BP=5\sqrt{5}$ units`

### What the Examiner Wanted

Find the line equation from the gradient, locate the $x$-intercept, then apply the distance formula.

---

## Solution to Question 14: C1 June 2019 Question 4(b)

**Question ID:** `AS1CoordinateGeometryCircleQ014`  
**Source:** Mark Scheme PDF p.7  
**Original reference:** C1 June 2019 Question 4(b)  
**Related question:** See `AS1_coordinate_geometry_circle_questions.md`, Question 14  
**Marks available:** 7  
**Match confidence:** High

[VISUAL REFERENCE: AS1CoordinateGeometryCircleQ014TikZ-001 | See question diagram in AS1_coordinate_geometry_circle_tikz.md | Purpose: supports the line/curve intersection interpretation]

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $x-2=\dfrac{3}{x}$ | M1 | 1 | Equates line and curve. |
| 2 | $x^2-2x-3=0$ | W1 | 1 | Forms the quadratic equation. |
| 3 | $(x-3)(x+1)=0$ | M1 | 1 | Factorises. |
| 4 | $x=3$ or $x=-1$ | — | 0 | Solves for $x$. |
| 5 | $y=1$ or $y=-3$ | W2 | 2 | Finds corresponding $y$ values. |
| 6 | $A=(-1,-3),\ B=(3,1)$ | — | 0 | States the intersection coordinates. |
| 7 | Midpoint $=\left(\dfrac{-1+3}{2},\dfrac{-3+1}{2}\right)$ | M1 | 1 | Uses midpoint formula. |
| 8 | $=(1,-1)$ | W1 | 1 | Final midpoint. |

### Final Answer

`$A=(-1,-3)$, $B=(3,1)$; midpoint $(1,-1)$`

### What the Examiner Wanted

Equate the line and curve to get a quadratic, solve for intersections, then use the midpoint formula.

---

## Solution to Question 15: C2 June 2010 Question 2

**Question ID:** `AS1CoordinateGeometryCircleQ015`  
**Source:** Mark Scheme PDF p.8  
**Original reference:** C2 June 2010 Question 2  
**Related question:** See `AS1_coordinate_geometry_circle_questions.md`, Question 15  
**Marks available:** 7  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | Centre $(0,-2)$ | MW2 | 2 | Reads centre from general circle form. |
| 2 | Radius $=\sqrt{g^2+f^2-c}$ | M1 | 1 | Uses radius formula for $x^2+y^2+2gx+2fy+c=0$. |
| 3 | $=\sqrt{25}=5$ | W1 | 1 | Finds radius. |
| 4 | Gradient of radius $=\dfrac{2+2}{3-0}=\dfrac{4}{3}$ | M1 W1 | 2 | Uses centre and tangent point. |
| 5 | Gradient of tangent $=-\dfrac{3}{4}$ | MW1 | 1 | Uses perpendicularity of radius and tangent. |

### Final Answer

`Centre $(0,-2)$, radius $5$; tangent gradient $-\dfrac{3}{4}$`

### What the Examiner Wanted

Identify centre and radius, then use the radius to the point $(3,2)$ and the perpendicular-gradient rule for the tangent.

---

## Solution to Question 16: C2 January 2011 Question 3

**Question ID:** `AS1CoordinateGeometryCircleQ016`  
**Source:** Mark Scheme PDF p.8  
**Original reference:** C2 January 2011 Question 3  
**Related question:** See `AS1_coordinate_geometry_circle_questions.md`, Question 16  
**Marks available:** 8  
**Match confidence:** High

[VISUAL REFERENCE: AS1CoordinateGeometryCircleQ016TikZ-001 | See question diagram in AS1_coordinate_geometry_circle_tikz.md | Purpose: supports the tangent-length right-triangle argument]

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $(x-1)^2-1+(y+2)^2-4=4$ | M1 | 1 | Completes the square. |
| 2 | $(x-1)^2+(y+2)^2=9$ | W1 | 1 | Rearranges to centre-radius form. |
| 3 | Centre $=(1,-2)$, radius $=3$ | MW2 | 2 | Gives centre and radius. |
| 4 | $d=\sqrt{(5-1)^2+(6+2)^2}=\sqrt{80}=4\sqrt5=8.94427$ | M1 W1 | 2 | Finds distance from centre to A. |
| 5 | $(\sqrt{80})^2=3^2+l^2$ | M1 | 1 | Uses right triangle formed by radius and tangent. |
| 6 | $l=\sqrt{71}=8.43$ | W1 | 1 | Finds length AB. |

### Final Answer

`Centre $(1,-2)$, radius $3$; $AB=\sqrt{71}\approx 8.43$`

### What the Examiner Wanted

Complete the square to find the centre and radius, then use the fact that radius to tangent point is perpendicular to the tangent.

---

## Solution to Question 17: C2 June 2011 Question 1

**Question ID:** `AS1CoordinateGeometryCircleQ017`  
**Source:** Mark Scheme PDF p.8  
**Original reference:** C2 June 2011 Question 1  
**Related question:** See `AS1_coordinate_geometry_circle_questions.md`, Question 17  
**Marks available:** 8  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | Midpoint = centre $=(-3,1)$ | MW1 | 1 | Uses diameter midpoint. |
| 2 | Radius $=\sqrt{4^2+3^2}=5$ | MW1 | 1 | Finds radius from centre to an endpoint. |
| 3 | $(x+3)^2+(y-1)^2=25$ | M1 W1 | 2 | Writes circle equation. |
| 4 | $9+(t-1)^2=25$ | M1 W1 | 2 | Substitutes $(0,t)$ into the circle. |
| 5 | $(t-1)^2=16$ or $t^2-2t-15=0$ | — | 0 | Intermediate equation. |
| 6 | $t-1=\pm4$ or $(t-5)(t+3)=0$ | M1 | 1 | Solves quadratic/square. |
| 7 | $t=5$ or $t=-3$ | W1 | 1 | Gives both values. |

### Final Answer

`Centre $(-3,1)$, radius $5$, equation $(x+3)^2+(y-1)^2=25$, $t=5$ or $t=-3$`

### What the Examiner Wanted

Use the diameter midpoint for the centre, find the radius, write the equation and substitute the point on the circle.

---

## Solution to Question 18: C2 January 2012 Question 8

**Question ID:** `AS1CoordinateGeometryCircleQ018`  
**Source:** Mark Scheme PDF p.9  
**Original reference:** C2 January 2012 Question 8  
**Related question:** See `AS1_coordinate_geometry_circle_questions.md`, Question 18  
**Marks available:** 7  
**Match confidence:** High

[VISUAL REFERENCE: AS1CoordinateGeometryCircleQ018TikZ-001 | See question diagram in AS1_coordinate_geometry_circle_tikz.md | Purpose: supports the three-points-on-circle context]

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | Use $x^2+y^2+2gx+2fy+c=0$ | — | 0 | General circle equation. |
| 2 | $(0,6)\Rightarrow 36+12f+c=0$ | M1 W1 | 2 | Substitutes point A. |
| 3 | $(0,-2)\Rightarrow 4-4f+c=0$ | MW1 | 1 | Substitutes point B. |
| 4 | $32+16f=0\Rightarrow f=-2$ | MW1 | 1 | Solves for $f$. |
| 5 | $c=-12$ | MW1 | 1 | Finds $c$. |
| 6 | $(1,5)\Rightarrow 1+25+2g+10f+c=0$ | M1 | 1 | Substitutes point C. |
| 7 | $g=3$ | MW1 | 1 | Finds $g$. |
| 8 | $x^2+y^2+6x-4y-12=0$ | — | 0 | Final equation. |

### Final Answer

`$x^2+y^2+6x-4y-12=0$`

### What the Examiner Wanted

Substitute all three points into the general equation of a circle and solve for $g$, $f$ and $c$.

### Alternative Method

Official alternative shown in the mark scheme:

| Step | Official alternative working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | Use $(x-a)^2+(y-b)^2=r^2$ | — | 0 | Alternative centre-radius form. |
| 2 | $(0,6)\Rightarrow a^2+(6-b)^2=r^2$ | M1 W1 | 2 | Substitutes A. |
| 3 | $(0,-2)\Rightarrow a^2+(-2-b)^2=r^2$ | MW1 | 1 | Substitutes B. |
| 4 | $32-16b=0\Rightarrow b=2$ | MW1 | 1 | Finds $b$. |
| 5 | $a^2+16=r^2$ | — | 0 | Intermediate result. |
| 6 | $(1,5)\Rightarrow (1-a)^2+9=r^2$ | M1 | 1 | Substitutes C. |
| 7 | $a=-3$ | MW1 | 1 | Finds $a$. |
| 8 | $r=5$ | MW1 | 1 | Finds radius. |
| 9 | $(x+3)^2+(y-2)^2=25$ | — | 0 | Equivalent final equation. |

---

## Solution to Question 19: C2 January 2013 Question 2

**Question ID:** `AS1CoordinateGeometryCircleQ019`  
**Source:** Mark Scheme PDF p.10  
**Original reference:** C2 January 2013 Question 2  
**Related question:** See `AS1_coordinate_geometry_circle_questions.md`, Question 19  
**Marks available:** 8  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | Centre $(1,2)$ | MW2 | 2 | Reads centre from centre-radius form. |
| 2 | On $x$-axis, $y=0$: $(x-1)^2+(-2)^2=13$ | M1 | 1 | Substitutes $y=0$. |
| 3 | $(x-1)^2=9$ | — | 0 | Rearranges. |
| 4 | $x-1=\pm3$, so $x=-2$ or $x=4$ | MW1 | 1 | Solves for $x$. |
| 5 | $x=4$ and $A=(4,0)$ | W1 | 1 | Chooses positive $x$-axis point. |
| 6 | Gradient of radius $=\dfrac{2-0}{1-4}=-\dfrac{2}{3}$ | M1 | 1 | Finds radius gradient. |
| 7 | Gradient of tangent $=\dfrac{3}{2}$ | MW1 | 1 | Uses perpendicular gradient. |

### Final Answer

`Centre $(1,2)$; $A=(4,0)$; tangent gradient $\dfrac{3}{2}$`

### What the Examiner Wanted

Read the centre, find the positive $x$-axis intersection, then use the perpendicularity of radius and tangent.

---

## Solution to Question 20: C2 June 2013 Question 3

**Question ID:** `AS1CoordinateGeometryCircleQ020`  
**Source:** Mark Scheme PDF p.10  
**Original reference:** C2 June 2013 Question 3  
**Related question:** See `AS1_coordinate_geometry_circle_questions.md`, Question 20  
**Marks available:** 10  
**Match confidence:** High

[VISUAL REFERENCE: AS1CoordinateGeometryCircleQ020TikZ-001 | See question diagram in AS1_coordinate_geometry_circle_tikz.md | Purpose: supports the diameter and tangent proof]

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | Centre $(2,-3)$ gives radius $\sqrt{(5-2)^2+(1+3)^2}=5$ | M1 W1 | 2 | Uses B as centre and A on circle. |
| 2 | Equation of circle $(x-a)^2+(y-b)^2=r^2$ | M1 | 1 | Uses centre-radius form. |
| 3 | $(x-2)^2+(y+3)^2=25$ | W1 | 1 | Final circle equation. |
| 4 | A$(5,1)$ and D$(-1,-7)$ have midpoint $(2,-3)$ | M1 W1 | 2 | Verifies D using midpoint of diameter. |
| 5 | Gradient of radius BD $=\dfrac{-7+3}{-1-2}=\dfrac{4}{3}$ | M1 W1 | 2 | Finds radius gradient. |
| 6 | Gradient of CD $=\dfrac{-7+10}{-1-3}=-\dfrac{3}{4}$ | MW1 | 1 | Finds tangent-line gradient. |
| 7 | $\dfrac{4}{3}\times\left(-\dfrac{3}{4}\right)=-1$, therefore CD is a tangent | MW1 | 1 | Uses perpendicularity of radius and tangent. |

### Final Answer

`$(x-2)^2+(y+3)^2=25$; D is $(-1,-7)$; CD is a tangent`

### What the Examiner Wanted

Use the diameter/centre relationship, verify the endpoint D, then prove tangent by showing CD is perpendicular to the radius at D.

---

## Solution to Question 21: C2 January 2014 Question 7

**Question ID:** `AS1CoordinateGeometryCircleQ021`  
**Source:** Mark Scheme PDF p.11  
**Original reference:** C2 January 2014 Question 7  
**Related question:** See `AS1_coordinate_geometry_circle_questions.md`, Question 21  
**Marks available:** 10  
**Match confidence:** High

[VISUAL REFERENCE: AS1CoordinateGeometryCircleQ021TikZ-001 | See question diagram in AS1_coordinate_geometry_circle_tikz.md | Purpose: supports the circle-centre distance interpretation]

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | Centre of circle A $=(6,6)$ | M1 | 1 | Uses circle touching both axes with radius 6. |
| 2 | $(x-6)^2+(y-6)^2=36$ | M1 W1 | 2 | Equation of circle A. |
| 3 | $(x+6)^2-36+(y+3)^2-9+41=0$ | M1 | 1 | Completes the square for circle B. |
| 4 | $(x+6)^2+(y+3)^2=4$ | W1 | 1 | Centre-radius form. |
| 5 | Radius $=2$ | MW1 | 1 | Radius of circle B. |
| 6 | Centre $=(-6,-3)$ | MW1 | 1 | Centre of circle B. |
| 7 | Distance between centres $=\sqrt{12^2+9^2}=15$ | M1 W1 | 2 | Finds centre-to-centre distance. |
| 8 | Shortest distance $=15-6-2=7$ | MW1 | 1 | Subtracts both radii. |

### Final Answer

`Circle A: $(x-6)^2+(y-6)^2=36$; circle B radius $2$, centre $(-6,-3)$; shortest distance $7$ cm`

### What the Examiner Wanted

Model the two sprockets as circles, find each centre and radius, then subtract radii from the distance between centres.

---

## Solution to Question 22: C1 June 2014 Question 4(b)

**Question ID:** `AS1CoordinateGeometryCircleQ022`  
**Source:** Mark Scheme PDF p.11  
**Original reference:** C1 June 2014 Question 4(b)  
**Related question:** See `AS1_coordinate_geometry_circle_questions.md`, Question 22  
**Marks available:** 7  
**Match confidence:** High

[VISUAL REFERENCE: AS1CoordinateGeometryCircleQ022TikZ-001 | See question diagram in AS1_coordinate_geometry_circle_tikz.md | Purpose: supports the tangent-radius kite area calculation]

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $(x-3)^2-9+(y+5)^2-25+18=0$ | — | 0 | Completes the square. |
| 2 | $(x-3)^2+(y+5)^2=16$ | M1 | 1 | Centre-radius form. |
| 3 | Centre $(3,-5)$, $r=4$ | MW1 W1 | 2 | Finds centre and radius. |
| 4 | $AC=\sqrt{(3-(-2))^2+(-5-4)^2}=\sqrt{106}$ | MW1 | 1 | Finds distance from A to centre. |
| 5 | $AC^2=AD^2+DC^2$, so $106=4^2+AD^2$ | — | 0 | Uses tangent-radius right triangle. |
| 6 | $AD=\sqrt{90}$ | MW1 | 1 | Finds tangent length. |
| 7 | Area $=2\times\dfrac{1}{2}\times 4\times\sqrt{90}$ | M1 | 1 | Uses two congruent right triangles. |
| 8 | Area $=37.9$ units$^2$ | W1 | 1 | Final area. |

### Final Answer

`Area of kite ABCD $\approx 37.9$ units$^2$`

### What the Examiner Wanted

Find centre and radius, use right-angle tangent geometry to find tangent length, then calculate the area as two congruent right triangles.

---

## Solution to Question 23: C2 June 2015 Question 2

**Question ID:** `AS1CoordinateGeometryCircleQ023`  
**Source:** Mark Scheme PDF p.11  
**Original reference:** C2 June 2015 Question 2  
**Related question:** See `AS1_coordinate_geometry_circle_questions.md`, Question 23  
**Marks available:** 7  
**Match confidence:** High

[VISUAL REFERENCE: AS1CoordinateGeometryCircleQ023TikZ-001 | See question diagram in AS1_coordinate_geometry_circle_tikz.md | Purpose: supports the touching-circles geometry]

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $(x-3)^2-9+(y-4)^2-16+21=0$ | M1 | 1 | Completes the square. |
| 2 | $(x-3)^2+(y-4)^2=4$ | W1 | 1 | Centre-radius form for the larger circle. |
| 3 | Centre $(3,4)$ | MW1 | 1 | Finds centre. |
| 4 | Radius $=2$ | MW1 | 1 | Finds radius. |
| 5 | Smaller circle centre $(3,5)$ | MW1 | 1 | Uses vertical alignment and internal touching. |
| 6 | Smaller circle radius $=1$ | MW1 | 1 | Smaller diameter is half the larger diameter. |
| 7 | $(x-3)^2+(y-5)^2=1$ | MW1 | 1 | Equation of smaller circle. |

### Final Answer

`Larger circle: centre $(3,4)$, radius $2$; smaller circle: $(x-3)^2+(y-5)^2=1$`

### What the Examiner Wanted

Complete the square for the larger circle, then use the geometry of two internally touching circles with vertical centres.

---

## Solution to Question 24: C2 June 2016 Question 8

**Question ID:** `AS1CoordinateGeometryCircleQ024`  
**Source:** Mark Scheme PDF p.12  
**Original reference:** C2 June 2016 Question 8  
**Related question:** See `AS1_coordinate_geometry_circle_questions.md`, Question 24  
**Marks available:** 11  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $b=2$ | MW1 | 1 | Uses the centre lying on $y=2$. |
| 2 | $(x-a)^2+(y-b)^2=r^2$ | M1 | 1 | Uses centre-radius form. |
| 3 | $(x-a)^2+(y-2)^2=r^2$ | MW1 | 1 | Substitutes $b=2$. |
| 4 | For $(1,5)$: $(1-a)^2+(5-2)^2=r^2$, so $(1-a)^2+9=r^2$ | MW1 | 1 | Substitutes first point. |
| 5 | For $(-6,6)$: $(-6-a)^2+(6-2)^2=r^2$, so $(-6-a)^2+16=r^2$ | MW1 | 1 | Substitutes second point. |
| 6 | $(1-a)^2+9=(-6-a)^2+16$ | M1 W1 | 2 | Equates the two expressions for $r^2$. |
| 7 | $1-2a+a^2+9=36+12a+a^2+16$ | — | 0 | Expands. |
| 8 | $-2a+10=52+12a$ | — | 0 | Simplifies. |
| 9 | $a=-3$ | W1 | 1 | Finds centre coordinate. |
| 10 | Radius from $(1,5)$ to $(-3,2)$: $\sqrt{4^2+3^2}=5$ | M1 W1 | 2 | Finds radius. |
| 11 | $(x+3)^2+(y-2)^2=25$ | W1 | 1 | Final circle equation. |

### Final Answer

`$b=2$; $(x+3)^2+(y-2)^2=25$`

### What the Examiner Wanted

Use the fixed $y$-coordinate of the centre, equate squared distances from the centre to the two points, then form the circle equation.

---

## Solution to Question 25: C2 June 2018 Question 2

**Question ID:** `AS1CoordinateGeometryCircleQ025`  
**Source:** Mark Scheme PDF p.13  
**Original reference:** C2 June 2018 Question 2  
**Related question:** See `AS1_coordinate_geometry_circle_questions.md`, Question 25  
**Marks available:** 8  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $(x+1)^2-1+(y-2)^2-4=0$ | M1 | 1 | Completes the square. |
| 2 | $(x+1)^2+(y-2)^2=5$ | — | 0 | Centre-radius form. |
| 3 | Centre $=(-1,2)$ | W1 | 1 | Finds centre. |
| 4 | Radius $=\sqrt5$ | M1 W1 | 2 | Finds radius. |
| 5 | Gradient of radius to $(-3,3)$ is $\dfrac{3-2}{-3-(-1)}=-\dfrac{1}{2}$ | MW1 | 1 | Uses centre and point of contact. |
| 6 | Gradient of tangent $=2$ | MW1 | 1 | Uses perpendicular gradient. |
| 7 | $y-y_1=m(x-x_1)$ | M1 | 1 | Uses point-gradient form. |
| 8 | $y-3=2(x+3)$ | — | 0 | Substitutes point and gradient. |
| 9 | $y=2x+9$ | W1 | 1 | Final tangent equation. |

### Final Answer

`Centre $(-1,2)$, radius $\sqrt5$; tangent $y=2x+9$`

### What the Examiner Wanted

Complete the square, then use the radius gradient and perpendicularity to obtain the tangent equation.

---

## Solution to Question 26: C2 June 2019 Question 6

**Question ID:** `AS1CoordinateGeometryCircleQ026`  
**Source:** Mark Scheme PDF p.13  
**Original reference:** C2 June 2019 Question 6  
**Related question:** See `AS1_coordinate_geometry_circle_questions.md`, Question 26  
**Marks available:** 8  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | Centre $(3,-1)$ | M1 W1 | 2 | Finds centre from completing the square. |
| 2 | $r=\sqrt{(-3)^2+(1)^2-6}$ | M1 | 1 | Finds radius. |
| 3 | $r=2$ | W1 | 1 | Final radius. |
| 4 | Centre of diameter circle $=\left(\dfrac{-3+1}{2},\dfrac{8-4}{2}\right)=(-1,2)$ | MW1 | 1 | Uses midpoint of diameter. |
| 5 | $r^2=(-3-(-1))^2+(8-2)^2$ | M1 | 1 | Uses squared distance to an endpoint. |
| 6 | $r^2=40$ | W1 | 1 | Finds radius squared. |
| 7 | $(x+1)^2+(y-2)^2=40$ | MW1 | 1 | Final circle equation. |

### Final Answer

`(a) centre $(3,-1)$, radius $2$; (b) $(x+1)^2+(y-2)^2=40$`

### What the Examiner Wanted

For part (a), complete the square. For part (b), use the midpoint of the diameter as the centre and the squared distance to an endpoint as $r^2$.

---

## Solution to Question 27: AS1 (new spec) June 2019 Question 4(b)

**Question ID:** `AS1CoordinateGeometryCircleQ027`  
**Source:** Mark Scheme PDF p.13  
**Original reference:** AS1 (new spec) June 2019 Question 4(b)  
**Related question:** See `AS1_coordinate_geometry_circle_questions.md`, Question 27  
**Marks available:** 6  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $(x-2)^2+(y+3)^2-4-9-3=0$ | M1 W1 | 2 | Completes the square. |
| 2 | $(x-2)^2+(y+3)^2=16$ | — | 0 | Centre-radius form. |
| 3 | Centre $(2,-3)$ | MW1 | 1 | Finds centre. |
| 4 | Radius $=4$ | M1 W1 | 2 | Finds radius. |
| 5 | Area $=16\pi$ units$^2$ | MW1 | 1 | Uses area of circle $\pi r^2$. |

### Final Answer

`Centre $(2,-3)$; area $16\pi$ units$^2$`

### What the Examiner Wanted

Complete the square to identify the radius, then use the formula for area of a circle.

---

## Solution to Question 28: AS1 (new spec) June 2019 Question 8

**Question ID:** `AS1CoordinateGeometryCircleQ028`  
**Source:** Mark Scheme PDF p.14  
**Original reference:** AS1 (new spec) June 2019 Question 8  
**Related question:** See `AS1_coordinate_geometry_circle_questions.md`, Question 28  
**Marks available:** 13  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $\text{grad}_{AB}=\dfrac{a-a^2}{(a+1)-2a}=\dfrac{a(1-a)}{1-a}=a$ | M1 W1 | 2 | Finds gradient of AB in terms of $a$. |
| 2 | Perpendicular gradient $=-\dfrac{1}{a}$ | MW1 | 1 | Uses perpendicular gradient. |
| 3 | $y=mx+c$ | M1 | 1 | Starts equation of perpendicular line. |
| 4 | $a^2=-\dfrac{1}{a}(2a)+c$ | — | 0 | Substitutes point A. |
| 5 | $a^2+2=c$ | — | 0 | Finds the constant. |
| 6 | $y=-\dfrac{x}{a}+(a^2+2)$ | W1 | 1 | Equation of line through A. |
| 7 | Cuts $x$-axis $\Rightarrow y=0$ | M1 | 1 | Uses intercept condition. |
| 8 | $\dfrac{x}{a}=a^2+2$ | — | 0 | Rearranges. |
| 9 | $x=a^3+2a$ | W1 | 1 | Finds $x$-coordinate. |
| 10 | $P=(a^3+2a,0)$ | W1 | 1 | Coordinates of P. |
| 11 | Midpoint $=\left(\dfrac{3a+1}{2},\dfrac{a^2+a}{2}\right)$ | M1 W1 | 2 | Uses midpoint formula. |
| 12 | $3a+1=a^2+a$ | M1 | 1 | Equates $x$ and $y$ ordinates. |
| 13 | $0=a^2-2a-1$ | MW1 | 1 | Forms the quadratic. |
| 14 | $0=(a-1)^2-2$ | — | 0 | Completes the square. |
| 15 | $(a-1)^2=2$ | — | 0 | Rearranges. |
| 16 | $a-1=\pm\sqrt2$ | — | 0 | Solves. |
| 17 | $a=1\pm\sqrt2$ | MW1 | 1 | Final surd values. |

### Final Answer

`$P=(a^3+2a,0)$; $a=1\pm\sqrt2$`

### What the Examiner Wanted

Work algebraically with the coordinate expressions, use perpendicular gradients, find the $x$-intercept of the perpendicular line, then equate midpoint ordinates and solve the resulting quadratic.

---

## 4. Unmatched Mark Scheme Entries

The following mark scheme content appears in the supplied mark scheme PDF but does not have a matching question in the supplied questions PDF.

| Source | Mark scheme content | Notes |
|---|---|---|
| Mark Scheme PDF p.3, C1 June 2012 Question 3(b) | $\dfrac{dy}{dx}=12x^2+\dfrac{1}{3}x^{-4}$, awarded `MW2` | The questions PDF includes only C1 June 2012 Question 3(a), the coordinate-geometry part. This calculus part is therefore not included as a pack question. |

## 7. Diagram Assets

## 7.1 Mermaid Assets

### Source File Metadata

```yaml
filename: "AS1_coordinate_geometry_circle_mermaid.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/04. Geometry-Questions/AS1_coordinate_geometry_circle_mermaid.md"
lines: 6
bytes_utf8: 288
sha256: "109a8bb1f93be2e2199a60b9827b07743fc7330d7120cc6427be2fd09fa5e224"
```

### Preserved Source Content: AS1_coordinate_geometry_circle_mermaid.md

# Mermaid Diagrams for AS1 Coordinate Geometry and Circle

**Pack ID:** `AS1CoordinateGeometryCircle`

No Mermaid diagrams were required for this question pack. The visual assets in the questions PDF are geometric and coordinate diagrams, so TikZ was the most appropriate representation.

## 7.2 SVG Assets

### Source File Metadata

```yaml
filename: "AS1_coordinate_geometry_circle_svg.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/04. Geometry-Questions/AS1_coordinate_geometry_circle_svg.md"
lines: 6
bytes_utf8: 346
sha256: "90b10ef0c0019e98334921a5f00990c53b8964ef3513d524efc6934d4b3d3d22"
```

### Preserved Source Content: AS1_coordinate_geometry_circle_svg.md

# SVG Diagrams for AS1 Coordinate Geometry and Circle

**Pack ID:** `AS1CoordinateGeometryCircle`

No SVG diagrams were required for this question pack. The relevant figures are mathematical constructions involving lines, circles, tangents, axes and geometric relationships, so TikZ was chosen for precision and clearer mathematical typesetting.

## 7.3 TikZ Assets

### Source File Metadata

```yaml
filename: "AS1_coordinate_geometry_circle_tikz.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/04. Geometry-Questions/AS1_coordinate_geometry_circle_tikz.md"
lines: 330
bytes_utf8: 12614
sha256: "8a48c28db050ce62937f4dca47d0de96a0d9bb46535026a8841a3ecae110c113"
```

### Preserved Source Content: AS1_coordinate_geometry_circle_tikz.md

# TikZ Diagrams for AS1 Coordinate Geometry and Circle

**Pack ID:** `AS1CoordinateGeometryCircle`

The diagrams in this file recreate the mathematical meaning of the figures in the questions PDF. They are not intended to be pixel-perfect copies of the PDF artwork; they are cleaner mathematical reconstructions for revision and exam-practice use. TikZ is used because these are coordinate geometry, geometric, circle, tangent and graph diagrams requiring precise labels and line relationships. To compile the snippets, use `\usepackage{tikz}` and `\usetikzlibrary{calc}`.

---

## AS1CoordinateGeometryCircleQ003TikZ-001: Kite with perpendicular diagonals

**Source:** Questions PDF p.2  
**Related question:** Question 3  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1CoordinateGeometryCircleQ003TikZ-001 | Source: Questions PDF p.2 | Insert from AS1_coordinate_geometry_circle_tikz.md | Purpose: kite diagram showing vertices A, B, C, D and the diagonals]`  
**Purpose:** Recreates Fig. 1 for the kite ABCD, showing the diagonals AC and BD. The solution uses the midpoint of AC and the fact that the diagonals of a kite are perpendicular.

### Creation Notes

This diagram represents the qualitative geometry rather than the exact plotted coordinates. It keeps the labels and diagonals clear so the midpoint/perpendicular-gradient reasoning is visible.

```latex
\begin{tikzpicture}[scale=0.85]
  \coordinate (A) at (0,3);
  \coordinate (B) at (3.2,2.4);
  \coordinate (C) at (3.5,0.6);
  \coordinate (D) at (-1.2,0);

  \draw[thick] (A)--(B)--(C)--(D)--cycle;
  \draw[dashed] (A)--(C);
  \draw[dashed] (B)--(D);

  \node[above] at (A) {$A$};
  \node[right] at (B) {$B$};
  \node[right] at (C) {$C$};
  \node[left] at (D) {$D$};
  \node[below] at (1.5,-0.35) {Fig. 1};
\end{tikzpicture}
```

---

## AS1CoordinateGeometryCircleQ007TikZ-001: Isosceles triangle logo

**Source:** Questions PDF p.4  
**Related question:** Question 7  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1CoordinateGeometryCircleQ007TikZ-001 | Source: Questions PDF p.4 | Insert from AS1_coordinate_geometry_circle_tikz.md | Purpose: isosceles triangle with base midpoint D and dashed height AD]`  
**Purpose:** Recreates the airline-logo isosceles triangle in which $AB=AC$ and D is the midpoint of BC. The dashed line AD is used for the line-equation part of the question.

### Creation Notes

The equal side marks highlight $AB=AC$. Since D is the midpoint of BC, AD is shown as a dashed line from the apex to the base midpoint.

```latex
\begin{tikzpicture}[scale=0.9]
  \coordinate (A) at (0,3.2);
  \coordinate (B) at (-2,0);
  \coordinate (C) at (2,0);
  \coordinate (D) at (0,0);

  \draw[thick] (A)--(B)--(C)--cycle;
  \draw[dashed] (A)--(D);

  % equal-side tick marks
  \draw ($(A)!0.5!(B)+(-0.08,0.08)$) -- ($(A)!0.5!(B)+(0.08,-0.08)$);
  \draw ($(A)!0.5!(C)+(-0.08,-0.08)$) -- ($(A)!0.5!(C)+(0.08,0.08)$);

  \node[above] at (A) {$A$};
  \node[left] at (B) {$B$};
  \node[right] at (C) {$C$};
  \node[below] at (D) {$D$};
  \node[below] at (0,-0.55) {Fig. 1};
\end{tikzpicture}
```

---

## AS1CoordinateGeometryCircleQ012TikZ-001: Rhombus ABCD with perpendicular diagonals

**Source:** Questions PDF p.5  
**Related question:** Question 12  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1CoordinateGeometryCircleQ012TikZ-001 | Source: Questions PDF p.5 | Insert from AS1_coordinate_geometry_circle_tikz.md | Purpose: rhombus ABCD with perpendicular diagonals AC and BD]`  
**Purpose:** Recreates Fig. 3 showing rhombus ABCD, with diagonal AC and diagonal BD. The solution uses the midpoint of AC and the fact that diagonals of a rhombus are perpendicular.

### Creation Notes

The diagram keeps the long diagonal AC and short diagonal BD visible, with a small right-angle marker at their intersection.

```latex
\begin{tikzpicture}[scale=0.8]
  \coordinate (A) at (0,0);
  \coordinate (B) at (3.2,0.5);
  \coordinate (C) at (5.3,2.8);
  \coordinate (D) at (2.1,2.3);
  \coordinate (O) at ($(A)!0.5!(C)$);

  \draw[thick] (A)--(B)--(C)--(D)--cycle;
  \draw[dashed] (A)--(C);
  \draw[dashed] (B)--(D);

  % right angle marker near intersection
  \draw ($(O)+(0.16,0.05)$)--($(O)+(0.05,0.22)$)--($(O)+(-0.11,0.12)$);

  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above right] at (C) {$C$};
  \node[above left] at (D) {$D$};
  \node[below] at (2.6,-0.45) {Fig. 3};
\end{tikzpicture}
```

---

## AS1CoordinateGeometryCircleQ014TikZ-001: Line and reciprocal curve intersections

**Source:** Questions PDF p.6  
**Related question:** Question 14  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1CoordinateGeometryCircleQ014TikZ-001 | Source: Questions PDF p.6 | Insert from AS1_coordinate_geometry_circle_tikz.md | Purpose: sketch of reciprocal curve and line intersecting at A and B]`  
**Purpose:** Recreates Fig. 2 showing the line $y=x-2$ intersecting the curve $y=\frac{3}{x}$ at points A and B.

### Creation Notes

This uses a coordinate sketch with the positive and negative branches of the reciprocal curve and the straight line. The computed intersections are $A(-1,-3)$ and $B(3,1)$, but the question diagram is a sketch rather than a scale plot.

```latex
\begin{tikzpicture}[scale=0.75]
  % axes
  \draw[->] (-4.2,0)--(5.0,0) node[right] {$x$};
  \draw[->] (0,-4.2)--(0,4.4) node[above] {$y$};

  % reciprocal curve y=3/x
  \draw[thick,domain=0.65:5,samples=100] plot (\x,{3/\x});
  \draw[thick,domain=-4:-0.65,samples=100] plot (\x,{3/\x});

  % line y=x-2
  \draw[thick] (-2.2,-4.2)--(5,3);

  % intersection points
  \fill (-1,-3) circle (2pt) node[left] {$A$};
  \fill (3,1) circle (2pt) node[above] {$B$};

  \node[below] at (0,-4.55) {Fig. 2};
\end{tikzpicture}
```

---

## AS1CoordinateGeometryCircleQ016TikZ-001: Tangent from external point to circle

**Source:** Questions PDF p.7  
**Related question:** Question 16  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1CoordinateGeometryCircleQ016TikZ-001 | Source: Questions PDF p.7 | Insert from AS1_coordinate_geometry_circle_tikz.md | Purpose: tangent from external point A to circle at point B]`  
**Purpose:** Recreates Fig. 3 showing a tangent drawn from external point A to a circle, touching at B.

### Creation Notes

The diagram shows only the qualitative tangent setup. In the solution, the radius to the tangent point is perpendicular to the tangent, forming a right triangle.

```latex
\begin{tikzpicture}[scale=0.9]
  \coordinate (O) at (0,0);
  \coordinate (B) at (-1.05,1.05);
  \coordinate (A) at (1.7,3.8);

  \draw[thick] (O) circle (1.5);
  \draw[thick] (-2.2,-0.15)--(A);
  \draw[thick] (A)--(B);
  \fill (B) circle (2pt);
  \node[left] at (B) {$B$};
  \node[above] at (A) {$A$};
  \node[below] at (0,-1.9) {Fig. 3};
\end{tikzpicture}
```

---

## AS1CoordinateGeometryCircleQ018TikZ-001: Radio mast coverage circle

**Source:** Questions PDF p.8  
**Related question:** Question 18  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1CoordinateGeometryCircleQ018TikZ-001 | Source: Questions PDF p.8 | Insert from AS1_coordinate_geometry_circle_tikz.md | Purpose: circle modelling radio mast coverage with points A, B and C on the circumference]`  
**Purpose:** Recreates Fig. 7 showing a circle modelling radio mast coverage, with A, B and C on the circumference.

### Creation Notes

The coordinates in the question lead to centre $(-3,2)$ and radius $5$. This diagram uses that circle to place A, B and C accurately.

```latex
\begin{tikzpicture}[scale=0.55]
  \coordinate (O) at (-3,2);
  \coordinate (A) at (0,6);
  \coordinate (B) at (0,-2);
  \coordinate (C) at (1,5);

  \draw[thick] (O) circle (5);
  \fill (O) circle (2pt) node[below] {Mast};
  \fill (A) circle (2pt) node[above right] {$A$};
  \fill (B) circle (2pt) node[below right] {$B$};
  \fill (C) circle (2pt) node[right] {$C$};

  \node[below] at (-3,-4) {Fig. 7};
\end{tikzpicture}
```

---

## AS1CoordinateGeometryCircleQ020TikZ-001: Circle with AD as diameter and B as centre

**Source:** Questions PDF p.9  
**Related question:** Question 20  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1CoordinateGeometryCircleQ020TikZ-001 | Source: Questions PDF p.9 | Insert from AS1_coordinate_geometry_circle_tikz.md | Purpose: circle with AD as a diameter and B as the centre]`  
**Purpose:** Recreates Fig. 1 for a circle in which AD is a diameter and B is the centre. It supports the use of midpoint and radius calculations.

### Creation Notes

The diagram uses a simple circle with a diagonal diameter AD passing through centre B.

```latex
\begin{tikzpicture}[scale=0.8]
  \coordinate (B) at (0,0);
  \coordinate (A) at (2.2,2.2);
  \coordinate (D) at (-2.2,-2.2);

  \draw[thick] (B) circle (3.11);
  \draw[thick] (D)--(A);
  \fill (B) circle (2pt) node[left] {$B$};
  \fill (A) circle (2pt) node[above right] {$A$};
  \fill (D) circle (2pt) node[below left] {$D$};

  \node[below] at (0,-3.55) {Fig. 1};
\end{tikzpicture}
```

---

## AS1CoordinateGeometryCircleQ021TikZ-001: Two sprockets modelled as circles

**Source:** Questions PDF p.10  
**Related question:** Question 21  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1CoordinateGeometryCircleQ021TikZ-001 | Source: Questions PDF p.10 | Insert from AS1_coordinate_geometry_circle_tikz.md | Purpose: two sprockets modelled as circles with axes and chain tangents]`  
**Purpose:** Recreates Fig. 4 showing two circular bicycle sprockets A and B, coordinate axes, and dashed chain tangents.

### Creation Notes

The diagram uses the centres and radii from the question/solution: circle A centre $(6,6)$ radius $6$, and circle B centre $(-6,-3)$ radius $2$. The dashed chain lines are illustrative.

```latex
\begin{tikzpicture}[scale=0.35]
  % axes
  \draw[->] (-10,0)--(14,0) node[right] {$x$};
  \draw[->] (0,-6)--(0,14) node[above] {$y$};

  % circle A
  \coordinate (OA) at (6,6);
  \draw[thick] (OA) circle (6);
  \fill (OA) circle (2pt);
  \node[above right] at (10,11) {$A$};

  % circle B
  \coordinate (OB) at (-6,-3);
  \draw[thick] (OB) circle (2);
  \fill (OB) circle (2pt);
  \node[left] at (-8,-3) {$B$};

  % illustrative chain/tangent lines
  \draw[dashed] (-8.2,-1.0)--(0,8.0);
  \draw[dashed] (-4.5,-4.5)--(6,0.0);

  \node[below] at (1,-6.5) {Fig. 4};
\end{tikzpicture}
```

---

## AS1CoordinateGeometryCircleQ022TikZ-001: Kite formed by two tangents from A

**Source:** Questions PDF p.11  
**Related question:** Question 22  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1CoordinateGeometryCircleQ022TikZ-001 | Source: Questions PDF p.11 | Insert from AS1_coordinate_geometry_circle_tikz.md | Purpose: circle with two tangents from A forming kite ABCD]`  
**Purpose:** Recreates Fig. 4 showing a circle with centre C and two tangents from A touching the circle at B and D, forming kite ABCD.

### Creation Notes

The tangent points are illustrative. The mathematical relationship needed is that the radius to each tangent point is perpendicular to the tangent, forming two congruent right triangles.

```latex
\begin{tikzpicture}[scale=0.75]
  \coordinate (C) at (0,0);
  \coordinate (A) at (-3.7,3.1);
  \coordinate (B) at (1.0,1.73);
  \coordinate (D) at (-1.73,-1.0);

  \draw[thick] (C) circle (2);
  \draw[thick] (A)--(B);
  \draw[thick] (A)--(D);
  \draw[dashed] (C)--(B);
  \draw[dashed] (C)--(D);

  \fill (A) circle (2pt) node[above left] {$A$};
  \fill (B) circle (2pt) node[right] {$B$};
  \fill (C) circle (2pt) node[below] {$C$};
  \fill (D) circle (2pt) node[left] {$D$};

  \node[below] at (0,-2.55) {Fig. 4};
\end{tikzpicture}
```

---

## AS1CoordinateGeometryCircleQ023TikZ-001: Pendant modelled by two touching circles

**Source:** Questions PDF p.12  
**Related question:** Question 23  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1CoordinateGeometryCircleQ023TikZ-001 | Source: Questions PDF p.12 | Insert from AS1_coordinate_geometry_circle_tikz.md | Purpose: pendant modelled as a large circle with a smaller touching circle inside]`  
**Purpose:** Recreates Fig. 1 for the pendant problem, showing a larger circle and a smaller circle vertically above its centre, touching internally at the top.

### Creation Notes

This diagram uses the computed centres and radii from the question: larger circle centre $(3,4)$ radius $2$ and smaller circle centre $(3,5)$ radius $1$. The picture shows the internal tangency clearly.

```latex
\begin{tikzpicture}[scale=1.1]
  \coordinate (L) at (0,0);
  \coordinate (S) at (0,1);
  \draw[thick] (L) circle (2);
  \draw[thick] (S) circle (1);
  \fill (L) circle (1.5pt);
  \fill (S) circle (1.5pt);
  \node[below] at (0,-2.35) {Fig. 1};
\end{tikzpicture}
```

## 8. Interactive Widgets

## 8.1 Widget Assets

### Source File Metadata

```yaml
filename: "AS1_coordinate_geometry_circle_widgets.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/04. Geometry-Questions/AS1_coordinate_geometry_circle_widgets.md"
lines: 6
bytes_utf8: 484
sha256: "16594dfe99f666cafc6a19d8cc890b0652767a3d2e906864b3464ec60ced59ca"
```

### Preserved Source Content: AS1_coordinate_geometry_circle_widgets.md

# Interactive Widgets for AS1 Coordinate Geometry and Circle

**Pack ID:** `AS1CoordinateGeometryCircle`

No interactive widgets were required for this question pack. The questions are best practised through written exam-style working, especially because they focus on gradients, line equations, completing the square, and formal circle/tangent reasoning. Calculator or graphing tools may be used separately for checking, but they are not included as part of this exam-practice pack.

## 9. Agent Retrieval Notes

Use Section 5 as the authoritative question source and Section 6 as the solution/mark-scheme source. Do not merge question wording with solutions unless a user explicitly asks for worked examples or marking guidance.
