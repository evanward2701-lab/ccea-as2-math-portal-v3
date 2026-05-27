# AS1 Trigonometry Questions Agent Source

## 0. AI-Agent Usage Instructions

This file is a source for question retrieval, solution lookup, mark-scheme interpretation, diagnostics and targeted practice. Questions are in Section 5. Solutions and mark schemes are in Section 6. Diagram assets are in Section 7. Widgets are in Section 8. Keep questions and solutions separate unless explicitly asked to combine them. Preserve official mark-scheme labels, uncertainty notes and generated-solution labels. Use UK/CCEA mathematical vocabulary.

## 1. Pack Metadata

```yaml
pack_type: question
unit_code: AS1
unit_name: CCEA AS1 Pure Mathematics
topic_slug: "04_trigonometry_questions"
topic_title: "Trigonometry"
source_folder: "/Users/evanward/Documents/AS Portal - New /AS1 Files/04. Trigonometry-Questions"
output_file: "/Users/evanward/Documents/AS Portal - New /AS1 Files/00_AGENT_SOURCE_PACKS/04_trigonometry_questions/AS1_trigonometry_questions_agent_source.md"
created_from_files:
  lesson: null
  questions: "AS1_trigonometry_questions.md"
  solutions: "AS1_trigonometry_solutions.md"
  mermaid: "AS1_trigonometry_mermaid.md"
  svg: "AS1_trigonometry_svg.md"
  tikz: "AS1_trigonometry_tikz.md"
  widgets: "AS1_trigonometry_widgets.md"
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
| questions | AS1_trigonometry_questions.md | 1158 | 22777 | `c87c441dc254dc3a1e428c9c6f429120f170a250dcf57dae1e7abc7d7e37c592` |
| solutions | AS1_trigonometry_solutions.md | 923 | 41274 | `48ef22ac070503c29db1cebe619d651eae22cf52379d9b277f93a590a614c7db` |
| mermaid | AS1_trigonometry_mermaid.md | 6 | 360 | `dc178c46bdf5f410beaa72b73f752cc43830127d6e984c9fd673aada06c11ed4` |
| svg | AS1_trigonometry_svg.md | 6 | 279 | `37228608f8f7c94daf4f08b3cafe73238589cc756421d370dd90cd30b62674ca` |
| tikz | AS1_trigonometry_tikz.md | 333 | 12539 | `09ea48357693442f74d3e1d562d523641f740b8e07d5a7de86182221d3bca89e` |
| widgets | AS1_trigonometry_widgets.md | 6 | 348 | `83a3ff62173914402961230420be8e9b26a98590ff4799e6175992992364a739` |

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
filename: "AS1_trigonometry_questions.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/04. Trigonometry-Questions/AS1_trigonometry_questions.md"
lines: 1158
bytes_utf8: 22777
sha256: "c87c441dc254dc3a1e428c9c6f429120f170a250dcf57dae1e7abc7d7e37c592"
```

### Preserved Source Content: AS1_trigonometry_questions.md

# Trigonometry Question Pack

**Unit:** CCEA AS1 Pure Mathematics  
**Questions PDF:** AS1_Trigonometry_questions.pdf  
**Solutions / Mark Scheme PDF:** AS1_Trigonometry_solutions.pdf  
**Date generated:** 23 May 2026  
**Pack ID:** AS1Trigonometry

---

## 1. Source Document Map

| Document type | Filename | Page count if available | Role in this pack |
|---|---|---:|---|
| Questions PDF | AS1_Trigonometry_questions.pdf | 16 | Source of questions, marks, diagrams, and wording |
| Mark scheme PDF | AS1_Trigonometry_solutions.pdf | 18 | Source of official solutions and marks |

---

## 2. Specification Alignment

| Specification area | Relevant learning outcome | Question numbers testing it | Notes on coverage | Gaps or comments |
|---|---|---|---|---|
| AS1 Pure Mathematics: Trigonometry | Definitions of sine, cosine and tangent for all arguments; use of exact values and identities | 1, 4, 5, 6, 9, 13, 15, 17, 18, 20, 22, 23, 25 | Includes identities, graph sketches, periodicity, trigonometric equations and transformations. | Some questions are from older C2 papers but are still useful for AS1 trigonometry practice. |
| AS1 Pure Mathematics: Trigonometry | Use the sine and cosine rules, including ambiguous case of sine rule | 2, 3, 7, 8, 10, 12, 14, 16, 19, 21, 24, 26 | Includes bearings, field/triangle geometry, applied triangle problems and non-right-angled triangles. | Question 10 includes arithmetic progression work now noted in the PDF as A2 Mathematics; the triangle work remains useful. |
| AS1 Pure Mathematics: Trigonometry | Calculate the area of a triangle in the form $\frac12 ab\sin C$ | 3, 7, 8, 10, 14, 19, 21 | Area formula is used both directly and inside multi-step triangle problems. | None. |
| AS1 Pure Mathematics: Trigonometry | Solve simple trigonometric equations in a given interval, including quadratics and multiples of the unknown angle | 1, 2, 4, 5, 6, 9, 13, 15, 17, 18, 20, 22, 23, 25 | Covers sine, cosine, tangent, squared trig functions, radians/degrees and interval restrictions. | None. |
| Legacy/A2 material included in PDF | Arithmetic progression and trapezium rule items | 10, 17 | These are included because they appear in the supplied questions PDF. | The PDF itself notes that Arithmetic Progression and Trapezium Rule are now on A2 Mathematics. |

---

## 3. Question Index

| Pack question | Original reference | Questions PDF page | Marks | Subtopic | Diagram? | AI visual suggested? | Matching solution |
|---:|---|---:|---:|---|---|---|---|
| 1 | C2 January 2010 Question 6 | 2 | 11 | Exact trigonometric ratio; trigonometric equation | No | No | Yes |
| 2 | C2 June 2010 Question 7 | 3 | 17 | Trigonometric equation; bearings; cosine/sine rule | Yes | No | Yes |
| 3 | C2 January 2011 Question 2 | 4 | 10 | Sine rule, area formula, cosine rule | Yes | No | Yes |
| 4 | C2 January 2011 Question 4 | 5 | 10 | Tangent graph, period, equation, identity | No | No | Yes |
| 5 | C2 June 2011 Question 6 | 5 | 9 | Trigonometric equation and identity | No | No | Yes |
| 6 | C2 January 2012 Question 6 | 6 | 13 | Trigonometric equation; cosine model | Yes | No | Yes |
| 7 | C2 January 2012 Question 7(a) | 7 | 6 | Ambiguous sine rule; triangle area | Yes | No | Yes |
| 8 | C2 June 2012 Question 2(a) | 7 | 4 | Cosine rule and triangle area | No | No | Yes |
| 9 | C2 June 2012 Question 3 | 8 | 8 | Cosine graph, period, equation | No | No | Yes |
| 10 | C2 June 2013 Question 4 | 8 | 9 | Arithmetic progression note; cosine rule; triangle area | No | No | Yes |
| 11 | C2 June 2013 Question 5 | 8 | 10 | Trigonometric modelling equation | No | No | Yes |
| 12 | C2 January 2014 Question 3(a) | 9 | 6 | Bearings and cosine/sine rule | Yes | No | Yes |
| 13 | C2 January 2014 Question 4 | 9 | 8 | Tangent graph, period, equation | No | No | Yes |
| 14 | C2 June 2014 Question 3 | 10 | 8 | Surveying, cosine/sine rule and area | Yes | No | Yes |
| 15 | C2 June 2014 Question 7 | 10 | 12 | Trigonometric equation and identity | No | No | Yes |
| 16 | C2 June 2015 Question 3(a) | 11 | 6 | Bearings and rescue route triangle | Yes | No | Yes |
| 17 | C2 June 2015 Question 6 | 11 | 14 | Sine graph; trapezium rule note; trig equation | No | No | Yes |
| 18 | C2 June 2016 Question 3(a) | 12 | 5 | Trigonometric equation | No | No | Yes |
| 19 | C2 June 2016 Question 4 | 12 | 9 | Bearings, sine rule, cosine rule | No | No | Yes |
| 20 | C2 June 2017 Question 5 | 12 | 9 | Trigonometric equation | No | No | Yes |
| 21 | C2 June 2018 Question 4 | 13 | 9 | Triangle area, cosine rule, sine rule | Yes | No | Yes |
| 22 | C2 June 2018 Question 6 | 13 | 10 | Trigonometric identity and equation | No | No | Yes |
| 23 | C2 June 2019 Question 4 | 14 | 5 | Trigonometric equation | No | No | Yes |
| 24 | C2 June 2019 Question 8(b) | 14 | 5 | Equilateral triangle geometry / trigonometry | Yes | No | Yes |
| 25 | AS1_(new spec)_June_2019 Question 5(b) | 15 | 7 | Trigonometric equation | No | No | Yes |
| 26 | AS1_(new spec)_June_2019 Question 9 | 16 | 12 | Circle geometry with cosine rule | Yes | No | Yes |

---

## 4. Questions

## Question 1: C2 January 2010 Question 6

**Question ID:** AS1TrigonometryQ001  
**Source:** Questions PDF p.2  
**Original reference:** C2 January 2010 Question 6  
**Marks:** 11  
**Subtopic:** Exact trigonometric ratio; trigonometric equation

### Question

6 (a) Given that

$$
\sin A = \frac{p}{q}
$$

and that $A$ is acute, find

$$
\tan^2 A
$$

[4]

(b) Solve

$$
\frac12 \tan x - \sin x = 0
$$

for $-180^\circ \le x \le 180^\circ$.

[7]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 2: C2 June 2010 Question 7

**Question ID:** AS1TrigonometryQ002  
**Source:** Questions PDF p.3  
**Original reference:** C2 June 2010 Question 7  
**Marks:** 17  
**Subtopic:** Trigonometric equation; bearings; cosine/sine rule

### Question

7 (a) Solve the equation

$$
3\sin^2 x + 8\cos x = 0
$$

for $-\pi \le x < \pi$.

[7]

(b) Two ships, C and D, leave harbour at 0900 hours.  
Ship D travels at a speed of 24 knots on a bearing of $030^\circ$  
Ship C travels at a speed of 15 knots on a bearing of $140^\circ$ as shown in Fig. 3 below.

[VISUAL PLACEHOLDER: AS1TrigonometryQ002TikZ-001 | Source: Questions PDF p.3 | Insert from AS1_trigonometry_tikz.md | Purpose: bearing diagram for ships C and D leaving harbour]

[1 knot is a speed of 1 nautical mile per hour]

Find the bearing and the distance, in nautical miles, of ship C from ship D at 1200 hours.

[10]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 3: C2 January 2011 Question 2

**Question ID:** AS1TrigonometryQ003  
**Source:** Questions PDF p.4  
**Original reference:** C2 January 2011 Question 2  
**Marks:** 10  
**Subtopic:** Sine rule, area formula, cosine rule

### Question

2 Fig. 2 below shows a plan of a field ABCD.

[VISUAL PLACEHOLDER: AS1TrigonometryQ003TikZ-001 | Source: Questions PDF p.4 | Insert from AS1_trigonometry_tikz.md | Purpose: field ABCD with lengths and angles]

(i) Find the length of $AC$.

[2]

(ii) Find the area of the triangle ABC.

[3]

(iii) Find the angle $ADC$.

[3]

(iv) Find the area of the field.

[2]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 4: C2 January 2011 Question 4

**Question ID:** AS1TrigonometryQ004  
**Source:** Questions PDF p.5  
**Original reference:** C2 January 2011 Question 4  
**Marks:** 10  
**Subtopic:** Tangent graph, period, equation, identity

### Question

4 (a) (i) Sketch the graph of

$$
y = \tan 2x
$$

for $-180^\circ < x < 180^\circ$.

[2]

(ii) State the period of this graph.

[1]

(iii) Solve the equation

$$
\tan 2x = 3
$$

for $-180^\circ < x < 180^\circ$.

[4]

(b) Prove the identity

$$
\frac{1 - \cos^2\theta}{\sin\theta\cos\theta} = \tan\theta
$$

[3]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 5: C2 June 2011 Question 6

**Question ID:** AS1TrigonometryQ005  
**Source:** Questions PDF p.5  
**Original reference:** C2 June 2011 Question 6  
**Marks:** 9  
**Subtopic:** Trigonometric equation and identity

### Question

6 (a) Solve the equation

$$
\sin\theta = 3\cos\theta
$$

where $0 \le \theta \le 2\pi$.

[4]

(b) Prove the identity

$$
(\cos\theta + \sin\theta)^2 + (\cos\theta - \sin\theta)^2 = 2
$$

[5]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 6: C2 January 2012 Question 6

**Question ID:** AS1TrigonometryQ006  
**Source:** Questions PDF p.6  
**Original reference:** C2 January 2012 Question 6  
**Marks:** 13  
**Subtopic:** Trigonometric equation; cosine model

### Question

6 (a) Solve the equation

$$
1 + \cos\theta = 2\sin^2\theta
$$

where $0^\circ \le \theta \le 360^\circ$.

[6]

(b) A warning siren in a factory causes a sound wave which can be modelled by the equation

$$
A = p\cos(qt)^\circ
$$

where $p$ and $q$ are constants and $0 \le t \le 30$

where $A$ is the intensity of the siren after $t$ seconds.  
The graph in Fig. 4 below represents the sound wave.

[VISUAL PLACEHOLDER: AS1TrigonometryQ006TikZ-001 | Source: Questions PDF p.6 | Insert from AS1_trigonometry_tikz.md | Purpose: graph of the sound-wave model]

At $t = 0$, the intensity is 6 and at $t = 5$ the intensity is 0.

(i) Find the values of $p$ and $q$.

[4]

(ii) Find the value of $t$ when $A = 2$ for the first time.

[3]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 7: C2 January 2012 Question 7(a)

**Question ID:** AS1TrigonometryQ007  
**Source:** Questions PDF p.7  
**Original reference:** C2 January 2012 Question 7(a)  
**Marks:** 6  
**Subtopic:** Ambiguous sine rule; triangle area

### Question

7 (a) Triangle ABC is shown in Fig. 5 below.

[VISUAL PLACEHOLDER: AS1TrigonometryQ007TikZ-001 | Source: Questions PDF p.7 | Insert from AS1_trigonometry_tikz.md | Purpose: triangle ABC with AC = 28 cm, BC = 12 cm and angle BAC = 22 degrees]

$$
AC = 28\text{ cm}
$$

$$
BC = 12\text{ cm}
$$

Angle $BAC = 22^\circ$

Angle $ABC$ is obtuse.

(i) Find angle $ABC$.

[3]

(ii) Find the area of the triangle ABC.

[3]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 8: C2 June 2012 Question 2(a)

**Question ID:** AS1TrigonometryQ008  
**Source:** Questions PDF p.7  
**Original reference:** C2 June 2012 Question 2(a)  
**Marks:** 4  
**Subtopic:** Cosine rule and triangle area

### Question

2 (a) In the triangle ABC

$$
AB = 20\text{ cm} \qquad AC = 40\text{ cm} \qquad BC = 30\text{ cm}
$$

(i) Find the angle $ABC$.

[2]

(ii) Find the area of the triangle ABC.

[2]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 9: C2 June 2012 Question 3

**Question ID:** AS1TrigonometryQ009  
**Source:** Questions PDF p.8  
**Original reference:** C2 June 2012 Question 3  
**Marks:** 8  
**Subtopic:** Cosine graph, period, equation

### Question

3 (i) Sketch the graph of

$$
y = \cos 2x
$$

for $0 \le x \le 2\pi$.

[2]

(ii) State the period of this graph.

[1]

(iii) Solve the equation

$$
\cos 2x = \frac12
$$

for $0 \le x \le 2\pi$.

[5]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 10: C2 June 2013 Question 4

**Question ID:** AS1TrigonometryQ010  
**Source:** Questions PDF p.8  
**Original reference:** C2 June 2013 Question 4  
**Marks:** 9  
**Subtopic:** Arithmetic progression note; cosine rule; triangle area

### Question

**Note:** Arithmetic Progression is now on A2 Mathematics.

4 A triangle ABC has a perimeter of 19 cm.  
$AB$ is the shortest side and has length 4 cm.  
The lengths of the sides of the triangle form an arithmetic progression.

(i) Using the sum of an arithmetic progression show that the lengths of the other two sides are $6\frac13$ cm and $8\frac23$ cm.

[4]

(ii) Find the angle $BCA$.

[3]

(iii) Find the area of the triangle.

[2]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 11: C2 June 2013 Question 5

**Question ID:** AS1TrigonometryQ011  
**Source:** Questions PDF p.8  
**Original reference:** C2 June 2013 Question 5  
**Marks:** 10  
**Subtopic:** Trigonometric modelling equation

### Question

5 A particle moves along a straight line through a fixed point O.  
At time $t$ seconds its displacement, $x$ cm, from O can be modelled by

$$
x = 7\sin t - 4\cos^2 t + 2
$$

for $0 \le t \le 2\pi$.

(i) Find $x$ when $t = \pi$.

[2]

(ii) Find the times when the particle is at O.

[8]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 12: C2 January 2014 Question 3(a)

**Question ID:** AS1TrigonometryQ012  
**Source:** Questions PDF p.9  
**Original reference:** C2 January 2014 Question 3(a)  
**Marks:** 6  
**Subtopic:** Bearings and cosine/sine rule

### Question

3 (a) A ship sails 50 miles from port P to port Q on a bearing of $100^\circ$.  
It then sails 40 miles from port Q to port R on a bearing of $210^\circ$ as shown in Fig. 1 below.

[VISUAL PLACEHOLDER: AS1TrigonometryQ012TikZ-001 | Source: Questions PDF p.9 | Insert from AS1_trigonometry_tikz.md | Purpose: bearing diagram for route P to Q to R]

(i) Find the distance $PR$.

[3]

(ii) Find the bearing of R from P.

[3]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 13: C2 January 2014 Question 4

**Question ID:** AS1TrigonometryQ013  
**Source:** Questions PDF p.9  
**Original reference:** C2 January 2014 Question 4  
**Marks:** 8  
**Subtopic:** Tangent graph, period, equation

### Question

4 (i) Sketch the graph of

$$
y = \tan 3x
$$

for $0 \le x \le \pi$.

[2]

(ii) State the period of this graph.

[1]

(iii) Solve the equation

$$
\sin 3x = \sqrt{3}\cos 3x
$$

for $0 \le x \le \pi$.

[5]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 14: C2 June 2014 Question 3

**Question ID:** AS1TrigonometryQ014  
**Source:** Questions PDF p.10  
**Original reference:** C2 June 2014 Question 3  
**Marks:** 8  
**Subtopic:** Surveying, cosine/sine rule and area

### Question

3 A surveyor has made a sketch of a patch of waste ground, ABCD, as shown in Fig. 1 below.

[VISUAL PLACEHOLDER: AS1TrigonometryQ014TikZ-001 | Source: Questions PDF p.10 | Insert from AS1_trigonometry_tikz.md | Purpose: patch of waste ground ABCD with distances and angles]

The points A, B and E lie along the same straight line.  
He records the following measurements:

$$
AB = 4.9\text{ km}
$$

$$
AD = 5.4\text{ km}
$$

$$
BC = 2.1\text{ km}
$$

angle $DAB = 35^\circ$

angle $CBE = 50^\circ$

(i) Find the length of $DB$.

[2]

(ii) Find the angle $ABD$.

[2]

(iii) Find the area of the waste ground ABCD.

[4]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 15: C2 June 2014 Question 7

**Question ID:** AS1TrigonometryQ015  
**Source:** Questions PDF p.10  
**Original reference:** C2 June 2014 Question 7  
**Marks:** 12  
**Subtopic:** Trigonometric equation and identity

### Question

7 (a) Solve the equation

$$
4 - \sin\theta = 6\cos^2\theta
$$

for $0^\circ \le \theta \le 360^\circ$.

[7]

(b) Prove the identity

$$
\tan\theta + \frac{1}{\tan\theta} = \frac{1}{\sin\theta\cos\theta}
$$

[5]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 16: C2 June 2015 Question 3(a)

**Question ID:** AS1TrigonometryQ016  
**Source:** Questions PDF p.11  
**Original reference:** C2 June 2015 Question 3(a)  
**Marks:** 6  
**Subtopic:** Bearings and rescue route triangle

### Question

3 (a) A rescue helicopter takes off from its base and flies for 70 km on a bearing of $110^\circ$ to rescue an injured sailor.  
After picking up the sailor, the helicopter flies 80 km, on a bearing of $030^\circ$ to the nearest hospital.  
The helicopter then returns directly to its base, as shown in Fig. 2 below.

[VISUAL PLACEHOLDER: AS1TrigonometryQ016TikZ-001 | Source: Questions PDF p.11 | Insert from AS1_trigonometry_tikz.md | Purpose: helicopter route from base to rescue to hospital]

(i) Calculate the distance the helicopter flies from the hospital directly back to its base.

[3]

(ii) Calculate the bearing of the base from the hospital.

[3]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 17: C2 June 2015 Question 6

**Question ID:** AS1TrigonometryQ017  
**Source:** Questions PDF p.11  
**Original reference:** C2 June 2015 Question 6  
**Marks:** 14  
**Subtopic:** Sine graph; trapezium rule note; trigonometric equation

### Question

**Note:** Trapezium Rule is now on A2 Mathematics.

6 (a) (i) Sketch the graph of

$$
y = \sin 2x
$$

for $0 \le x \le 2\pi$.

[2]

(ii) Use the trapezium rule with 5 ordinates to find an approximate value for

$$
\int_0^1 \sin 2x\,dx
$$

[5]

(b) Solve

$$
2\cos\theta = 3\tan\theta
$$

for $0^\circ < \theta < 360^\circ$.

[7]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 18: C2 June 2016 Question 3(a)

**Question ID:** AS1TrigonometryQ018  
**Source:** Questions PDF p.12  
**Original reference:** C2 June 2016 Question 3(a)  
**Marks:** 5  
**Subtopic:** Trigonometric equation

### Question

3 (a) Solve the equation

$$
1 + \sin\theta + \cos^2\theta - 2\sin^2\theta = 0
$$

where $-180^\circ \le \theta \le 180^\circ$.

[5]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 19: C2 June 2016 Question 4

**Question ID:** AS1TrigonometryQ019  
**Source:** Questions PDF p.12  
**Original reference:** C2 June 2016 Question 4  
**Marks:** 9  
**Subtopic:** Bearings, sine rule, cosine rule

### Question

4 Patrick is going to walk his dog on a path in his local park.  
The path runs due north.  
When he is at the start of the path he sees an oak tree on a bearing of $040^\circ$.

Patrick walks 200 m due north along the path.  
The bearing of the oak tree is now $070^\circ$.

(i) Find, to the nearest metre, the shortest distance of the oak tree from the path.

[6]

Patrick walks a further 200 m due north along the path.

(ii) Find the distance Patrick now is from the oak tree.

[3]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 20: C2 June 2017 Question 5

**Question ID:** AS1TrigonometryQ020  
**Source:** Questions PDF p.12  
**Original reference:** C2 June 2017 Question 5  
**Marks:** 9  
**Subtopic:** Trigonometric equation

### Question

5 Solve the equation

$$
\frac{2}{\tan^2\theta} + 8 = \frac{7}{\sin\theta}
$$

where $0^\circ \le \theta \le 180^\circ$.

[9]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 21: C2 June 2018 Question 4

**Question ID:** AS1TrigonometryQ021  
**Source:** Questions PDF p.13  
**Original reference:** C2 June 2018 Question 4  
**Marks:** 9  
**Subtopic:** Triangle area, cosine rule, sine rule

### Question

4 A wing of a toy aeroplane can be modelled by two triangles ABC and ACD joined together to make a quadrilateral ABCD, as shown in Fig. 2 below.

[VISUAL PLACEHOLDER: AS1TrigonometryQ021TikZ-001 | Source: Questions PDF p.13 | Insert from AS1_trigonometry_tikz.md | Purpose: toy aeroplane wing modelled by two triangles]

$AB = 3.5$ cm  
$BC = 6.9$ cm  
The area of the triangle ABC is $9.8\text{ cm}^2$

(i) Find the size of $C\widehat{B}A$.

[3]

$CD = 11.6$ cm

$A\widehat{D}C = 28^\circ$  
$C\widehat{A}D$ is obtuse.

(ii) Find the size of $C\widehat{A}D$.

[6]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 22: C2 June 2018 Question 6

**Question ID:** AS1TrigonometryQ022  
**Source:** Questions PDF p.13  
**Original reference:** C2 June 2018 Question 6  
**Marks:** 10  
**Subtopic:** Trigonometric identity and equation

### Question

6 (i) Prove that

$$
\frac{(1 - \cos\theta)(1 + \cos\theta)}{\sin\theta\cos\theta} \equiv \tan\theta
$$

[4]

(ii) Hence, solve the equation

$$
\frac{(1 - \cos\theta)(1 + \cos\theta)}{\sin\theta\cos\theta} = 2 - \tan^2\theta
$$

for $0 \le \theta \le 2\pi$.

[6]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 23: C2 June 2019 Question 4

**Question ID:** AS1TrigonometryQ023  
**Source:** Questions PDF p.14  
**Original reference:** C2 June 2019 Question 4  
**Marks:** 5  
**Subtopic:** Trigonometric equation

### Question

4 Solve the equation

$$
2\sin\theta\cos\theta = 3\cos\theta
$$

where $0^\circ \le \theta \le 360^\circ$.

[5 marks]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 24: C2 June 2019 Question 8(b)

**Question ID:** AS1TrigonometryQ024  
**Source:** Questions PDF p.14  
**Original reference:** C2 June 2019 Question 8(b)  
**Marks:** 5  
**Subtopic:** Equilateral triangle geometry / trigonometry

### Question

(b) At the beginning of a game of snooker, the 15 red balls each of diameter 52.5 mm are arranged in a triangular pattern as shown in Fig. 3 below.

[VISUAL PLACEHOLDER: AS1TrigonometryQ024TikZ-001 | Source: Questions PDF p.14 | Insert from AS1_trigonometry_tikz.md | Purpose: snooker ball triangular arrangement and equilateral frame]

A plastic frame in the shape of an equilateral triangle is used to arrange the balls into this pattern, as shown in Fig. 4 below.

Calculate the length of one side of the frame.

[5 marks]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 25: AS1_(new spec)_June_2019 Question 5(b)

**Question ID:** AS1TrigonometryQ025  
**Source:** Questions PDF p.15  
**Original reference:** AS1_(new spec)_June_2019 Question 5(b)  
**Marks:** 7  
**Subtopic:** Trigonometric equation

### Question

5. (b) Solve the equation

$$
2\cos^2\theta = 1 - \sin\theta
$$

for $0 \le \theta \le 360^\circ$.

[7]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

---

## Question 26: AS1_(new_spec)_June_2019 Question 9

**Question ID:** AS1TrigonometryQ026  
**Source:** Questions PDF p.16  
**Original reference:** AS1_(new_spec)_June_2019 Question 9  
**Marks:** 12  
**Subtopic:** Circle geometry with cosine rule

### Question

9 Fig. 3 below shows a diagram of a circle with centre O.

[VISUAL PLACEHOLDER: AS1TrigonometryQ026TikZ-001 | Source: Questions PDF p.16 | Insert from AS1_trigonometry_tikz.md | Purpose: circle diagram with diameter AB, point S, perpendicular foot D, and angle BOS]

$AB$ is a diameter of the circle.  
$S$ lies on the circumference of the circle.  
$D$ is the foot of the perpendicular from $B$ to $OS$.

The acute angle $BOS$ is $\theta$.

$$
OA = OB = r
$$

$$
OD = x
$$

(i) By applying the cosine rule to triangle $AOD$, show that

$$
AD^2 = r^2(1 + 3\cos^2\theta)
$$

[7]

(ii) When $BD$ bisects $OS$,

$$
AD = \frac{r\sqrt{k}}{2}
$$

Find the value of $k$, where $k$ is a positive integer.

[5]

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
filename: "AS1_trigonometry_solutions.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/04. Trigonometry-Questions/AS1_trigonometry_solutions.md"
lines: 923
bytes_utf8: 41274
sha256: "48ef22ac070503c29db1cebe619d651eae22cf52379d9b277f93a590a614c7db"
```

### Preserved Source Content: AS1_trigonometry_solutions.md

# Trigonometry Solutions and Mark Scheme Pack

**Unit:** CCEA AS1 Pure Mathematics  
**Questions PDF:** AS1_Trigonometry_questions.pdf  
**Solutions / Mark Scheme PDF:** AS1_Trigonometry_solutions.pdf  
**Date generated:** 23 May 2026  
**Pack ID:** AS1Trigonometry

---

## 1. Mark Scheme Notation Guide

- `M` usually means a method mark.
- `A` usually means an accuracy mark.
- `B` usually means an independent mark.
- `W` or `MW` appears in this supplied mark scheme and is preserved exactly as shown. It may represent written/working or method-with-working credit depending on the awarding body conventions.
- Combined codes such as `M1 W1`, `M1W1`, `MW2` and `MW3` are reproduced as shown in the mark scheme. The mark awarded column below records the number visible in the code.

`The exact meaning of each mark code should be interpreted according to the awarding body’s mark scheme conventions.`

---

## 2. Question-to-Solution Map

| Pack question | Original reference | Question page | Solution page | Total marks from question | Marks shown in mark scheme | Match confidence | Notes |
|---:|---|---:|---:|---:|---:|---|---|
| 1 | C2 January 2010 Question 6 | 2 | 2 | 11 | 11 | High | Direct match. |
| 2 | C2 June 2010 Question 7 | 3 | 3 | 17 | 17 | High | Direct match. |
| 3 | C2 January 2011 Question 2 | 4 | 4 | 10 | 10 | High | Direct match. |
| 4 | C2 January 2011 Question 4 | 5 | 5 | 10 | 10 | High | Direct match. |
| 5 | C2 June 2011 Question 6 | 5 | 5 | 9 | 9 | High | Direct match. |
| 6 | C2 January 2012 Question 6 | 6 | 6 | 13 | 13 | High | Direct match. |
| 7 | C2 January 2012 Question 7(a) | 7 | 7 | 6 | 6 shown for part (a) | High | Mark scheme also contains unmatched part (b), listed later. |
| 8 | C2 June 2012 Question 2(a) | 7 | 7 | 4 | 4 | High | Direct match. |
| 9 | C2 June 2012 Question 3 | 8 | 8 | 8 | 8 | High | Direct match. |
| 10 | C2 June 2013 Question 4 | 8 | 8 | 9 | 9 | High | Direct match; note in questions says arithmetic progression is now A2. |
| 11 | C2 June 2013 Question 5 | 8 | 9 | 10 | 10 | High | Direct match. |
| 12 | C2 January 2014 Question 3(a) | 9 | 9 | 6 | 6 | High | Direct match. |
| 13 | C2 January 2014 Question 4 | 9 | 10 | 8 | 8 | High | Direct match. |
| 14 | C2 June 2014 Question 3 | 10 | 10 | 8 | 8 | High | Direct match. |
| 15 | C2 June 2014 Question 7 | 10 | 11 | 12 | 12 | High | Direct match. |
| 16 | C2 June 2015 Question 3(a) | 11 | 11 | 6 | 6 | High | Direct match. |
| 17 | C2 June 2015 Question 6 | 11 | 12 | 14 | 14 | High | Direct match; trapezium rule now noted as A2 in questions PDF. |
| 18 | C2 June 2016 Question 3(a) | 12 | 13 | 5 | 5 | High | Direct match. |
| 19 | C2 June 2016 Question 4 | 12 | 14 | 9 | 9 | High | Direct match. |
| 20 | C2 June 2017 Question 5 | 12 | 15 | 9 | 9 | High | Direct match. |
| 21 | C2 June 2018 Question 4 | 13 | 15 | 9 | 9 | High | Direct match. |
| 22 | C2 June 2018 Question 6 | 13 | 16 | 10 | 10 | High | Direct match. |
| 23 | C2 June 2019 Question 4 | 14 | 16 | 5 | 5 | High | Direct match. |
| 24 | C2 June 2019 Question 8(b) | 14 | 18 | 5 | 5 | High | Direct match. |
| 25 | AS1_(new spec)_June_2019 Question 5(b) | 15 | 16 | 7 | 7 | High | Direct match. |
| 26 | AS1_(new_spec)_June_2019 Question 9 | 16 | 17 | 12 | 12 | High | Direct match. |

---

## 3. Fully Worked Mark Scheme Solutions

## Solution to Question 1: C2 January 2010 Question 6

**Question ID:** AS1TrigonometryQ001  
**Source:** Mark Scheme PDF p.2  
**Original reference:** C2 January 2010 Question 6  
**Related question:** See `AS1_trigonometry_questions.md`, Question 1  
**Marks available:** 11  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | Right triangle with hypotenuse $q$, opposite $p$, adjacent $\sqrt{q^2-p^2}$. | M1W1 | 2 | Constructs a suitable triangle using Pythagoras. |
| 2 | $\displaystyle \tan A=\frac{p}{\sqrt{q^2-p^2}}$ | MW1 | 1 | Forms tangent from opposite over adjacent. |
| 3 | $\displaystyle \tan^2 A=\frac{p^2}{q^2-p^2}$ | MW1 | 1 | Squares the tangent expression. |
| 4 | $\displaystyle \frac12\tan x-\sin x=0$ | — | 0 | Starting equation. |
| 5 | $\displaystyle \frac12\frac{\sin x}{\cos x}-\sin x=0$ | MW1 | 1 | Uses $\tan x=\sin x/\cos x$. |
| 6 | $\displaystyle \sin x\left(\frac{1}{2\cos x}-1\right)=0$ | MW1 | 1 | Factorises using $\sin x$. |
| 7 | $\sin x=0$ or $\cos x=\frac12$ | MW2 | 2 | Splits into cases. |
| 8 | $x=0^\circ,\pm180^\circ,\pm60^\circ$ | MW3 | 3 | Lists all solutions in the required interval. |

### Final Answer

`(a) $\displaystyle \tan^2 A=\frac{p^2}{q^2-p^2}$; (b) $x=0^\circ,\pm 60^\circ,\pm 180^\circ$`

### What the Examiner Wanted

Use a right triangle to express $\tan A$ in terms of $p$ and $q$, then solve the trigonometric equation by rewriting tangent as sine divided by cosine and considering every solution in the given interval.

---

## Solution to Question 2: C2 June 2010 Question 7

**Question ID:** AS1TrigonometryQ002  
**Source:** Mark Scheme PDF p.3  
**Original reference:** C2 June 2010 Question 7  
**Related question:** See `AS1_trigonometry_questions.md`, Question 2  
**Marks available:** 17  
**Match confidence:** High

[VISUAL REFERENCE: AS1TrigonometryQ002TikZ-001 | See question diagram in AS1_trigonometry_tikz.md | Purpose: supports the bearing and cosine-rule reasoning]

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $3\sin^2x+8\cos x=0$ | — | 0 | Starting equation. |
| 2 | $3(1-\cos^2x)+8\cos x=0$ | M1 | 1 | Uses $\sin^2x=1-\cos^2x$. |
| 3 | $3-3\cos^2x+8\cos x=0$ | W1 | 1 | Expands correctly. |
| 4 | $3\cos^2x-8\cos x-3=0$ | — | 0 | Rearranged quadratic. |
| 5 | $(3\cos x+1)(\cos x-3)=0$ | — | 0 | Factorises. |
| 6 | $\cos x=-\frac13$ or $\cos x=3$ | MW2 | 2 | Finds possible cosine values and rejects impossible branch later. |
| 7 | $x=\pm1.91^c$, no solution from $\cos x=3$ | MW3 | 3 | Solves in radians over $-\pi\le x<\pi$. |
| 8 | Distances after 3 hours: $72$ and $45$ nautical miles; included angle $110^\circ$. | MW3 | 3 | Builds the triangle for the positions at 1200. |
| 9 | $d^2=72^2+45^2-2\times72\times45\cos110^\circ$ | M1W1 | 2 | Applies cosine rule. |
| 10 | $d=97.1$ nm | W1 | 1 | Distance from D to C. |
| 11 | $\displaystyle \frac{\sin\theta}{45}=\frac{\sin110^\circ}{97.1}$ | M1W1 | 2 | Applies sine rule to find bearing angle. |
| 12 | $\theta=25.8^\circ$ | W1 | 1 | Finds angle. |
| 13 | Bearing $=180^\circ+30^\circ-25.8^\circ=184^\circ$ | MW1 | 1 | Converts angle to bearing. |

### Final Answer

`(a) $x=\pm1.91^c$; (b) distance $=97.1$ nm, bearing $=184^\circ$`

### What the Examiner Wanted

Part (a) required conversion to a quadratic in $\cos x$. Part (b) required converting speeds into distances travelled after 3 hours, then using the cosine rule and sine rule in the bearing diagram.

---

## Solution to Question 3: C2 January 2011 Question 2

**Question ID:** AS1TrigonometryQ003  
**Source:** Mark Scheme PDF p.4  
**Original reference:** C2 January 2011 Question 2  
**Related question:** See `AS1_trigonometry_questions.md`, Question 3  
**Marks available:** 10  
**Match confidence:** High

[VISUAL REFERENCE: AS1TrigonometryQ003TikZ-001 | See question diagram in AS1_trigonometry_tikz.md | Purpose: supports the field triangle calculations]

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $\displaystyle \frac{AC}{\sin120^\circ}=\frac{150}{\sin35^\circ}$ | M1 | 1 | Uses sine rule in triangle ABC. |
| 2 | $AC=226.48=226\text{ m}$ | W1 | 1 | Finds length of $AC$. |
| 3 | $\displaystyle \text{Area}=\frac12ab\sin C=\frac12\times150\times226.48\times\sin25^\circ$ | M1W1 | 2 | Uses included angle $25^\circ$. |
| 4 | $\text{Area}=7178.59=7180\text{ m}^2$ | W1 | 1 | Area of triangle ABC. |
| 5 | $226.48^2=300^2+200^2-2\times300\times200\cos D$ | M1W1 | 2 | Uses cosine rule in triangle ADC. |
| 6 | $D=49.013^\circ=49.0^\circ$ | W1 | 1 | Angle $ADC$. |
| 7 | $\displaystyle \text{Area ADC}=\frac12\times300\times200\sin49.013^\circ$ | MW1 | 1 | Area of triangle ADC. |
| 8 | $\text{Area ADC}=22645.69$ and field area $=22645.69+7178.59=29824.28=29800\text{ m}^2$ | MW1 | 1 | Adds the two triangle areas. |

### Final Answer

`(i) $AC=226$ m; (ii) $7180\text{ m}^2$; (iii) $49.0^\circ$; (iv) $29800\text{ m}^2$`

### What the Examiner Wanted

The key was splitting the quadrilateral into two triangles and applying the sine rule, area formula, cosine rule and area formula again.

---

## Solution to Question 4: C2 January 2011 Question 4

**Question ID:** AS1TrigonometryQ004  
**Source:** Mark Scheme PDF p.5  
**Original reference:** C2 January 2011 Question 4  
**Related question:** See `AS1_trigonometry_questions.md`, Question 4  
**Marks available:** 10  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | Sketch of $y=\tan2x$ for $-180^\circ<x<180^\circ$, with correct repeating tangent branches and asymptotes. | M1 W1 | 2 | Correct graph shape and key features. |
| 2 | Period $=90^\circ$ | MW1 | 1 | Uses period of $\tan(2x)$. |
| 3 | $2x=71.565^\circ, 251.565^\circ, -108.435^\circ, -288.435^\circ$ | MW2 | 2 | Solves $\tan2x=3$ for possible $2x$ values. |
| 4 | $x=35.8^\circ,126^\circ,-54.2^\circ,-144^\circ$ | MW2 | 2 | Divides by 2 and keeps values in interval. |
| 5 | $\displaystyle \text{LHS}=\frac{\sin^2\theta}{\sin\theta\cos\theta}$ | MW1 | 1 | Uses $1-\cos^2\theta=\sin^2\theta$. |
| 6 | $\displaystyle =\frac{\sin\theta}{\cos\theta}$ | MW1 | 1 | Cancels a common factor. |
| 7 | $=\tan\theta$ | MW1 | 1 | Completes the proof. |

### Final Answer

`Period $=90^\circ$; $x=35.8^\circ,126^\circ,-54.2^\circ,-144^\circ$; identity proved.`

### What the Examiner Wanted

A correct tangent graph with period $90^\circ$, all four solutions to the tangent equation in the interval, and a proof using $1-\cos^2\theta=\sin^2\theta$.

---

## Solution to Question 5: C2 June 2011 Question 6

**Question ID:** AS1TrigonometryQ005  
**Source:** Mark Scheme PDF p.5  
**Original reference:** C2 June 2011 Question 6  
**Related question:** See `AS1_trigonometry_questions.md`, Question 5  
**Marks available:** 9  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $\tan\theta=3$ | M1 W1 | 2 | Divides by $\cos\theta$. |
| 2 | $\theta=1.25$ or $\theta=4.39$ | MW2 | 2 | Gives two radian solutions in $0\le\theta\le2\pi$. |
| 3 | $\cos^2\theta+2\sin\theta\cos\theta+\sin^2\theta+\cos^2\theta-2\sin\theta\cos\theta+\sin^2\theta$ | M1 W1 | 2 | Expands both brackets. |
| 4 | $2\cos^2\theta+2\sin^2\theta=2(\sin^2\theta+
\cos^2\theta)$ | MW1 | 1 | Collects terms. |
| 5 | $=2$ | M1 W1 | 2 | Uses $\sin^2\theta+
\cos^2\theta=1$. |

### Final Answer

`(a) $\theta=1.25,4.39$ radians; (b) identity proved.`

### What the Examiner Wanted

The first part required reducing to a tangent equation. The proof required expanding both squared brackets and using the Pythagorean identity.

---

## Solution to Question 6: C2 January 2012 Question 6

**Question ID:** AS1TrigonometryQ006  
**Source:** Mark Scheme PDF p.6  
**Original reference:** C2 January 2012 Question 6  
**Related question:** See `AS1_trigonometry_questions.md`, Question 6  
**Marks available:** 13  
**Match confidence:** High

[VISUAL REFERENCE: AS1TrigonometryQ006TikZ-001 | See question diagram in AS1_trigonometry_tikz.md | Purpose: supports the interpretation of the sound-wave model]

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $1+\cos\theta=2(1-\cos^2\theta)$ | M1 W1 | 2 | Converts to a quadratic in $\cos\theta$. |
| 2 | $2\cos^2\theta+
\cos\theta-1=0$ | — | 0 | Rearranged quadratic. |
| 3 | $(2\cos\theta-1)(\cos\theta+1)=0$ | — | 0 | Factorisation. |
| 4 | $\cos\theta=\frac12$ or $\cos\theta=-1$ | M1 W1 | 2 | Finds possible cosine values. |
| 5 | $\theta=60^\circ,300^\circ$ or $\theta=180^\circ$ | MW2 | 2 | Gives all solutions. |
| 6 | $t=0$, $A=6\Rightarrow 6=p\cos0$ | M1 | 1 | Uses initial condition. |
| 7 | $p=6$ | W1 | 1 | Finds $p$. |
| 8 | $t=5$, $A=0\Rightarrow0=6\cos5q$ and $90=5q\Rightarrow q=18$ | W2 | 2 | Uses first zero on cosine curve. |
| 9 | $2=6\cos18t$ | M1 | 1 | Sets up equation for $A=2$. |
| 10 | $18t=70.529$ | W1 | 1 | Solves for the first positive angle. |
| 11 | $t=3.92$ seconds | MW1 | 1 | Finds first time. |

### Final Answer

`(a) $\theta=60^\circ,180^\circ,300^\circ$; (b)(i) $p=6$, $q=18$; (ii) $t=3.92$ seconds`

### What the Examiner Wanted

Part (a) required a quadratic in cosine. Part (b) required reading model information from the graph and using the first zero of cosine to identify $q$.

---

## Solution to Question 7: C2 January 2012 Question 7(a)

**Question ID:** AS1TrigonometryQ007  
**Source:** Mark Scheme PDF p.7  
**Original reference:** C2 January 2012 Question 7(a)  
**Related question:** See `AS1_trigonometry_questions.md`, Question 7  
**Marks available:** 6  
**Match confidence:** High

[VISUAL REFERENCE: AS1TrigonometryQ007TikZ-001 | See question diagram in AS1_trigonometry_tikz.md | Purpose: supports the ambiguous sine-rule and area reasoning]

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $\displaystyle \frac{12}{\sin22^\circ}=\frac{28}{\sin B}$ | M1 | 1 | Uses sine rule. |
| 2 | $B=60.937^\circ$ | W1 | 1 | Finds acute value first. |
| 3 | $ABC=119.063^\circ \approx 119^\circ$ | MW1 | 1 | Uses the obtuse condition. |
| 4 | $ACB=38.937^\circ$ | MW1 | 1 | Uses triangle angle sum. |
| 5 | $\displaystyle \text{Area}=\frac12\times28\times12\times\sin38.937^\circ$ | M1 | 1 | Uses area formula. |
| 6 | $\text{Area}=105.58\approx106\text{ cm}^2$ | W1 | 1 | Final area. |

### Final Answer

`(i) $\angle ABC=119^\circ$; (ii) area $=106\text{ cm}^2$`

### What the Examiner Wanted

The key mark came from recognising the ambiguous sine rule and selecting the obtuse angle specified in the question.

---

## Solution to Question 8: C2 June 2012 Question 2(a)

**Question ID:** AS1TrigonometryQ008  
**Source:** Mark Scheme PDF p.7  
**Original reference:** C2 June 2012 Question 2(a)  
**Related question:** See `AS1_trigonometry_questions.md`, Question 8  
**Marks available:** 4  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $40^2=30^2+20^2-2\times30\times20\cos B$ | M1 | 1 | Applies cosine rule. |
| 2 | $B=104.4775^\circ\approx104^\circ$ | W1 | 1 | Finds angle $ABC$. |
| 3 | $\displaystyle \text{Area}=\frac12\times20\times30\sin104.4775^\circ$ | M1 | 1 | Uses area formula. |
| 4 | $\text{Area}=290.474\approx290\text{ cm}^2$ | W1 | 1 | Final area. |

### Final Answer

`(i) $104^\circ$; (ii) $290\text{ cm}^2$`

### What the Examiner Wanted

Use the cosine rule to find the included angle, then use the non-right triangle area formula.

---

## Solution to Question 9: C2 June 2012 Question 3

**Question ID:** AS1TrigonometryQ009  
**Source:** Mark Scheme PDF p.8  
**Original reference:** C2 June 2012 Question 3  
**Related question:** See `AS1_trigonometry_questions.md`, Question 9  
**Marks available:** 8  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | Sketch of $y=\cos2x$ over $0\le x\le2\pi$ with two complete cosine cycles. | MW2 | 2 | Correct graph shape and key points. |
| 2 | Period $=\pi$ (or $180^\circ$) | MW1 | 1 | Period of $\cos2x$. |
| 3 | $2x=\frac\pi3,\frac{5\pi}{3},\frac{7\pi}{3},\frac{11\pi}{3}$ | MW4 | 4 | Finds all values of $2x$. |
| 4 | $x=\frac\pi6,\frac{5\pi}{6},\frac{7\pi}{6},\frac{11\pi}{6}$ | MW1 | 1 | Divides by 2 and keeps values in interval. |

### Final Answer

`Period $=\pi$; $x=\frac\pi6,\frac{5\pi}{6},\frac{7\pi}{6},\frac{11\pi}{6}$`

### What the Examiner Wanted

A correct graph over two cosine periods and a complete set of solutions for $\cos2x=1/2$.

---

## Solution to Question 10: C2 June 2013 Question 4

**Question ID:** AS1TrigonometryQ010  
**Source:** Mark Scheme PDF p.8  
**Original reference:** C2 June 2013 Question 4  
**Related question:** See `AS1_trigonometry_questions.md`, Question 10  
**Marks available:** 9  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $S_n=\frac n2[2a+(n-1)d]$ | M1 | 1 | Uses arithmetic progression sum formula. |
| 2 | $19=\frac32[8+2d]$ and $19=12+3d$ | — | 0 | Substitutes $n=3$, first term 4. |
| 3 | $d=\frac73$ | W1 | 1 | Finds common difference. |
| 4 | Other sides are $6\frac13$ cm and $8\frac23$ cm. | MW2 | 2 | Shows required lengths. |
| 5 | $c^2=a^2+b^2-2ab\cos C$ | M1 | 1 | Applies cosine rule. |
| 6 | $\displaystyle \cos C=\frac{(8\frac23)^2+(6\frac13)^2-4^2}{2\times8\frac23\times6\frac13}$ | W1 | 1 | Substitutes correct side lengths. |
| 7 | $\widehat C=25.33^\circ=25.3^\circ$ | W1 | 1 | Finds $BCA$. |
| 8 | $\displaystyle \text{Area}=\frac12ab\sin C=\frac12\times8\frac23\times6\frac13\times\sin25.33^\circ$ | M1 | 1 | Uses area formula. |
| 9 | $=11.7\text{ cm}^2$ | W1 | 1 | Final area. |

### Final Answer

`(i) other sides $6\frac13$ cm and $8\frac23$ cm; (ii) $25.3^\circ$; (iii) $11.7\text{ cm}^2$`

### What the Examiner Wanted

The official solution first uses the arithmetic progression condition, then applies cosine rule and area formula to the triangle.

---

## Solution to Question 11: C2 June 2013 Question 5

**Question ID:** AS1TrigonometryQ011  
**Source:** Mark Scheme PDF p.9  
**Original reference:** C2 June 2013 Question 5  
**Related question:** See `AS1_trigonometry_questions.md`, Question 11  
**Marks available:** 10  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | At $t=\pi$, $x=7\sin\pi-4\cos^2\pi+2$ | MW1 | 1 | Substitutes $t=\pi$. |
| 2 | $x=-2$ cm | W1 | 1 | Evaluates displacement. |
| 3 | At O, $x=0$: $7\sin t-4\cos^2 t+2=0$ | MW1 | 1 | Sets displacement to zero. |
| 4 | $7\sin t-4(1-\sin^2t)+2=0$ | M1 | 1 | Converts to sine. |
| 5 | $4\sin^2t+7\sin t-2=0$ | W1 | 1 | Forms quadratic in $\sin t$. |
| 6 | $(4s-1)(s+2)=0$ | — | 0 | Factorises with $s=\sin t$. |
| 7 | $\sin t=\frac14$ or $-2$ impossible | M1 W1 | 2 | Solves possible sine value and rejects impossible value. |
| 8 | $t=0.253$ or $2.89$ | MW2 | 2 | Gives the two times in $0\le t\le2\pi$. |

### Final Answer

`(i) $x=-2$ cm; (ii) $t=0.253$ s or $t=2.89$ s`

### What the Examiner Wanted

Set $x=0$, convert the equation into a quadratic in $\sin t$, reject the impossible solution and list both valid times in the interval.

---

## Solution to Question 12: C2 January 2014 Question 3(a)

**Question ID:** AS1TrigonometryQ012  
**Source:** Mark Scheme PDF p.9  
**Original reference:** C2 January 2014 Question 3(a)  
**Related question:** See `AS1_trigonometry_questions.md`, Question 12  
**Marks available:** 6  
**Match confidence:** High

[VISUAL REFERENCE: AS1TrigonometryQ012TikZ-001 | See question diagram in AS1_trigonometry_tikz.md | Purpose: supports the bearing calculations]

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | Angle $PQR=70^\circ$ | W1 | 1 | Uses bearing geometry. |
| 2 | $PR^2=50^2+40^2-2\times50\times40\cos70^\circ$ | M1 | 1 | Applies cosine rule. |
| 3 | $PR=52.268\approx52.3$ miles | W1 | 1 | Finds distance. |
| 4 | $\displaystyle \frac{40}{\sin P}=\frac{52.268}{\sin70^\circ}$ | M1 | 1 | Applies sine rule. |
| 5 | $P=45.983^\circ$ | W1 | 1 | Finds angle at P. |
| 6 | Bearing $=146^\circ$ | MW1 | 1 | Converts to required bearing. |

### Final Answer

`(i) $PR=52.3$ miles; (ii) bearing $=146^\circ$`

### What the Examiner Wanted

The solution required the included angle from bearings, cosine rule for the direct distance, then sine rule plus bearing interpretation.

---

## Solution to Question 13: C2 January 2014 Question 4

**Question ID:** AS1TrigonometryQ013  
**Source:** Mark Scheme PDF p.10  
**Original reference:** C2 January 2014 Question 4  
**Related question:** See `AS1_trigonometry_questions.md`, Question 13  
**Marks available:** 8  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | Sketch of $y=\tan3x$ over $0\le x\le\pi$ with asymptotes at $\frac\pi6$, $\frac\pi2$, $\frac{5\pi}{6}$. | M1 MW1 | 2 | Correct tangent graph over interval. |
| 2 | Period $=\frac\pi3$ (or $60^\circ$) | MW1 | 1 | Period of $\tan3x$. |
| 3 | $\tan3x=\sqrt3$ | MW1 | 1 | Reduces equation by dividing by cosine. |
| 4 | $3x=\frac\pi3,\frac{4\pi}{3},\frac{7\pi}{3}$ | MW3 | 3 | Finds all values for $3x$. |
| 5 | $x=\frac\pi9,\frac{4\pi}{9},\frac{7\pi}{9}$ | MW1 | 1 | Divides by 3. |

### Final Answer

`Period $=\frac\pi3$; $x=\frac\pi9,\frac{4\pi}{9},\frac{7\pi}{9}$`

### What the Examiner Wanted

The examiner wanted a correct transformed tangent graph and all tangent-equation solutions in the interval.

---

## Solution to Question 14: C2 June 2014 Question 3

**Question ID:** AS1TrigonometryQ014  
**Source:** Mark Scheme PDF p.10  
**Original reference:** C2 June 2014 Question 3  
**Related question:** See `AS1_trigonometry_questions.md`, Question 14  
**Marks available:** 8  
**Match confidence:** High

[VISUAL REFERENCE: AS1TrigonometryQ014TikZ-001 | See question diagram in AS1_trigonometry_tikz.md | Purpose: supports the waste-ground area calculation]

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $BD^2=5.4^2+4.9^2-2\times5.4\times4.9\cos35^\circ$ | M1 | 1 | Applies cosine rule. |
| 2 | $BD=3.133776\approx3.13$ km | W1 | 1 | Finds $DB$. |
| 3 | $\displaystyle \frac{5.4}{\sin B}=\frac{3.13376}{\sin35^\circ}$ | M1 | 1 | Uses sine rule. |
| 4 | $B=81.253^\circ\approx81.3^\circ$ | W1 | 1 | Finds angle $ABD$. |
| 5 | $\Delta ABC=\frac12\times5.4\times4.9\times\sin35^\circ=7.58842$ | M1 W1 | 2 | Finds area of triangle ABD (as labelled in mark scheme). |
| 6 | $DBC=48.747^\circ$ and $\Delta DBC=\frac12\times2.1\times3.13376\times\sin48.7474^\circ=2.4738$ | MW1 | 1 | Finds remaining area. |
| 7 | Area $=10.1\text{ km}^2$ | MW1 | 1 | Adds triangle areas. |

### Final Answer

`(i) $DB=3.13$ km; (ii) $\angle ABD=81.3^\circ$; (iii) area $=10.1\text{ km}^2$`

### What the Examiner Wanted

Use cosine rule to find a diagonal, sine rule to find an angle, then split the quadrilateral into two triangles and add the areas.

---

## Solution to Question 15: C2 June 2014 Question 7

**Question ID:** AS1TrigonometryQ015  
**Source:** Mark Scheme PDF p.11  
**Original reference:** C2 June 2014 Question 7  
**Related question:** See `AS1_trigonometry_questions.md`, Question 15  
**Marks available:** 12  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $4-\sin\theta=6(1-\sin^2\theta)$ | M1 W1 | 2 | Converts to sine. |
| 2 | $6\sin^2\theta-\sin\theta-2=0$ | MW1 | 1 | Rearranges quadratic. |
| 3 | $(2\sin\theta+1)(3\sin\theta-2)=0$ | — | 0 | Factorises. |
| 4 | $\sin\theta=-\frac12$ or $\sin\theta=\frac23$ | MW2 | 2 | Finds sine values. |
| 5 | $\theta=210^\circ,330^\circ$ or $\theta=41.8^\circ,138^\circ$ | MW2 | 2 | Lists all solutions. |
| 6 | $\displaystyle \text{LHS}=\frac{\sin\theta}{\cos\theta}+\frac{\cos\theta}{\sin\theta}$ | M1 W1 | 2 | Rewrites tangent and reciprocal. |
| 7 | $\displaystyle =\frac{\sin^2\theta+
\cos^2\theta}{\sin\theta\cos\theta}$ | M1 W1 | 2 | Combines fractions. |
| 8 | $\displaystyle =\frac1{\sin\theta\cos\theta}=\text{RHS}$ | MW1 | 1 | Uses Pythagorean identity. |

### Final Answer

`(a) $\theta=41.8^\circ,138^\circ,210^\circ,330^\circ$; (b) identity proved.`

### What the Examiner Wanted

Part (a) requires converting the equation into a quadratic in $\sin\theta$. Part (b) requires writing both tangent terms as sine/cosine and combining fractions.

---

## Solution to Question 16: C2 June 2015 Question 3(a)

**Question ID:** AS1TrigonometryQ016  
**Source:** Mark Scheme PDF p.11  
**Original reference:** C2 June 2015 Question 3(a)  
**Related question:** See `AS1_trigonometry_questions.md`, Question 16  
**Marks available:** 6  
**Match confidence:** High

[VISUAL REFERENCE: AS1TrigonometryQ016TikZ-001 | See question diagram in AS1_trigonometry_tikz.md | Purpose: supports the helicopter route and bearing calculation]

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | Angle $BRH=100^\circ$ | MW1 | 1 | Finds included angle from bearings. |
| 2 | $BH^2=80^2+70^2-2\times80\times70\cos100^\circ$ | M1 | 1 | Applies cosine rule. |
| 3 | $BH=115.086\approx115$ km | W1 | 1 | Finds direct distance to base. |
| 4 | $\displaystyle \frac{70}{\sin H}=\frac{115.086}{\sin100^\circ}$ | M1 | 1 | Applies sine rule. |
| 5 | $H=36.798^\circ$ | W1 | 1 | Finds angle at hospital. |
| 6 | Bearing $=247^\circ$ | MW1 | 1 | Converts angle to bearing. |

### Final Answer

`(i) $115$ km; (ii) bearing $247^\circ$`

### What the Examiner Wanted

The problem required extracting the included angle from bearings, applying the cosine rule and then determining the bearing from the hospital back to the base.

---

## Solution to Question 17: C2 June 2015 Question 6

**Question ID:** AS1TrigonometryQ017  
**Source:** Mark Scheme PDF p.12  
**Original reference:** C2 June 2015 Question 6  
**Related question:** See `AS1_trigonometry_questions.md`, Question 17  
**Marks available:** 14  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | Sketch of $y=\sin2x$ for $0\le x\le2\pi$. | MW2 | 2 | Correct sine graph with two cycles. |
| 2 | Table with $x=0,0.25,0.5,0.75,1$ and $y=0,0.47943,0.84147,0.99749,0.90930$; $h=0.25$. | MW1, MW2 | 3 | Uses five ordinates for trapezium rule. |
| 3 | $\displaystyle \int_0^1\sin2x\,dx=\frac12\times0.25(0+2(0.47943+0.84147+0.99749)+0.90930)$ | M1 | 1 | Applies trapezium rule. |
| 4 | $=0.69326\approx0.693$ | W1 | 1 | Approximate integral. |
| 5 | $2\cos\theta=\frac{3\sin\theta}{\cos\theta}$ | MW1 | 1 | Uses tangent definition. |
| 6 | $2\cos^2\theta=3\sin\theta$ | MW1 | 1 | Multiplies by $\cos\theta$. |
| 7 | $2(1-\sin^2\theta)=3\sin\theta$ | MW1 | 1 | Converts to sine. |
| 8 | $2\sin^2\theta+3\sin\theta-2=0$ | W1 | 1 | Forms quadratic. |
| 9 | $(2\sin\theta-1)(\sin\theta+2)=0$ | — | 0 | Factorises. |
| 10 | $\sin\theta=\frac12$ or $\sin\theta=-2$; $\theta=30^\circ$ or impossible; $\theta=150^\circ$ | MW1, W2 | 3 | Solves and rejects impossible value. |

### Final Answer

`(a)(i) graph of $y=\sin2x$; (ii) $0.693$; (b) $\theta=30^\circ,150^\circ$`

### What the Examiner Wanted

This question combines graph sketching, a trapezium rule calculation and a trigonometric equation reduced to a quadratic in sine.

---

## Solution to Question 18: C2 June 2016 Question 3(a)

**Question ID:** AS1TrigonometryQ018  
**Source:** Mark Scheme PDF p.13  
**Original reference:** C2 June 2016 Question 3(a)  
**Related question:** See `AS1_trigonometry_questions.md`, Question 18  
**Marks available:** 5  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $1+\sin\theta+
\cos^2\theta-2\sin^2\theta=0$ | — | 0 | Starting equation. |
| 2 | Rearranging and using $\cos^2\theta=1-\sin^2\theta$ gives $2\sin^2\theta+
\sin^2\theta-1-
\sin\theta-1=0$ | M1 | 1 | Converts to sine. |
| 3 | $3\sin^2\theta-
\sin\theta-2=0$ | W1 | 1 | Simplifies quadratic. |
| 4 | $(3\sin\theta+2)(\sin\theta-1)=0$ | M1 | 1 | Factorises. |
| 5 | $\sin\theta=-\frac23$ or $\sin\theta=1$ | W1 | 1 | Finds sine values. |
| 6 | $\theta=-138^\circ,-41.8^\circ$ or $90^\circ$ | MW1 | 1 | Lists all interval solutions. |

### Final Answer

`$\theta=-138^\circ,-41.8^\circ,90^\circ$`

### What the Examiner Wanted

Convert the equation to a quadratic in $\sin\theta$, factorise, and list the valid values in the interval.

---

## Solution to Question 19: C2 June 2016 Question 4

**Question ID:** AS1TrigonometryQ019  
**Source:** Mark Scheme PDF p.14  
**Original reference:** C2 June 2016 Question 4  
**Related question:** See `AS1_trigonometry_questions.md`, Question 19  
**Marks available:** 9  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | Suitable triangle diagram for the oak tree and path. | MW1 | 1 | Sets up bearing geometry. |
| 2 | $180^\circ-(110^\circ+40^\circ)=30^\circ$ | MW1 | 1 | Finds angle in triangle. |
| 3 | $\displaystyle \frac{200}{\sin30^\circ}=\frac{x}{\sin40^\circ}$ | M1 | 1 | Applies sine rule. |
| 4 | $x=257.115\ldots$ | W1 | 1 | Finds distance to oak tree from the middle position. |
| 5 | $\displaystyle \sin70^\circ=\frac{y}{257.115\ldots}$ | M1 | 1 | Uses right-triangle relation for shortest distance. |
| 6 | $y=242\text{ m}$ (3 s.f.) | MW1 | 1 | Shortest distance from path. |
| 7 | $z^2=200^2+257.115^2-2(200)(257.115)
\cos70^\circ$ | M1 W1 | 2 | Applies cosine rule after Patrick walks further. |
| 8 | $z=266\text{ m}$ (3 s.f.) | W1 | 1 | Final distance. |

### Final Answer

`(i) $242$ m; (ii) $266$ m`

### What the Examiner Wanted

Translate bearings into triangle angles, use the sine rule to find a distance, then apply right-triangle geometry and cosine rule.

---

## Solution to Question 20: C2 June 2017 Question 5

**Question ID:** AS1TrigonometryQ020  
**Source:** Mark Scheme PDF p.15  
**Original reference:** C2 June 2017 Question 5  
**Related question:** See `AS1_trigonometry_questions.md`, Question 20  
**Marks available:** 9  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $\displaystyle \frac{2\cos^2\theta}{\sin^2\theta}+8-\frac{7}{\sin\theta}=0$ | M1W1 | 2 | Rewrites using $1/\tan^2\theta=\cos^2\theta/\sin^2\theta$. |
| 2 | $2\cos^2\theta+8\sin^2\theta-7\sin\theta=0$ | MW1 | 1 | Multiplies by $\sin^2\theta$. |
| 3 | $2(1-\sin^2\theta)+8\sin^2\theta-7\sin\theta=0$ | M1 | 1 | Converts to sine. |
| 4 | $6\sin^2\theta-7\sin\theta+2=0$ | W1 | 1 | Forms quadratic. |
| 5 | $(3\sin\theta-2)(2\sin\theta-1)=0$ | — | 0 | Factorises. |
| 6 | $\sin\theta=\frac23$ or $\sin\theta=\frac12$ | MW2 | 2 | Finds sine values. |
| 7 | $\theta=41.8^\circ,138^\circ,30^\circ,150^\circ$ | MW2 | 2 | Lists all solutions in interval. |

### Final Answer

`$\theta=30^\circ,41.8^\circ,138^\circ,150^\circ$`

### What the Examiner Wanted

The key was rewriting the reciprocal tangent expression and reducing the equation to a quadratic in $\sin\theta$.

---

## Solution to Question 21: C2 June 2018 Question 4

**Question ID:** AS1TrigonometryQ021  
**Source:** Mark Scheme PDF p.15  
**Original reference:** C2 June 2018 Question 4  
**Related question:** See `AS1_trigonometry_questions.md`, Question 21  
**Marks available:** 9  
**Match confidence:** High

[VISUAL REFERENCE: AS1TrigonometryQ021TikZ-001 | See question diagram in AS1_trigonometry_tikz.md | Purpose: supports the wing-triangle calculations]

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $9.8=\frac12(6.9)(3.5)\sin C\widehat BA$ | M1 W1 | 2 | Uses area formula to find angle at B. |
| 2 | $\sin C\widehat BA=0.81159\ldots$ | — | 0 | Rearranged sine value. |
| 3 | $C\widehat BA=54.251\ldots^\circ=54.3^\circ$ | W1 | 1 | Finds angle. |
| 4 | $AC^2=6.9^2+3.5^2-2(6.9)(3.5)\cos(54.251\ldots^\circ)$ | M1 W1 | 2 | Applies cosine rule in triangle ABC. |
| 5 | $AC^2=31.642$ and $AC=5.6251\ldots$ cm | W1 | 1 | Finds $AC$. |
| 6 | $\displaystyle \frac{5.625\ldots}{\sin28^\circ}=\frac{11.6}{\sin C\widehat AD}$ | M1 W1 | 2 | Applies sine rule in triangle ACD. |
| 7 | $\sin C\widehat AD=0.96813\ldots$ and $C\widehat AD=75.5^\circ$ or $104.5^\circ$ | — | 0 | Ambiguous sine values. |
| 8 | $C\widehat AD=104.5^\circ=105^\circ$ (3 sf) | W1 | 1 | Uses obtuse condition. |

### Final Answer

`(i) $54.3^\circ$; (ii) $105^\circ$`

### What the Examiner Wanted

Use the area formula first, then cosine rule to find $AC$, then sine rule and the obtuse condition to select the correct angle.

---

## Solution to Question 22: C2 June 2018 Question 6

**Question ID:** AS1TrigonometryQ022  
**Source:** Mark Scheme PDF p.16  
**Original reference:** C2 June 2018 Question 6  
**Related question:** See `AS1_trigonometry_questions.md`, Question 22  
**Marks available:** 10  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $\displaystyle \frac{(1-\cos\theta)(1+
\cos\theta)}{\sin\theta\cos\theta}=\frac{1-
\cos^2\theta}{\sin\theta\cos\theta}$ | MW1 | 1 | Expands numerator as difference of squares. |
| 2 | $\displaystyle =\frac{\sin^2\theta}{\sin\theta\cos\theta}$ | M1 | 1 | Uses Pythagorean identity. |
| 3 | $\displaystyle =\frac{\sin\theta}{\cos\theta}$ | W1 | 1 | Cancels common factor. |
| 4 | $=\tan\theta$ | W1 | 1 | Completes proof. |
| 5 | From part (i), $\tan\theta=2-\tan^2\theta$ | M1 | 1 | Uses proved identity. |
| 6 | $\tan^2\theta+\tan\theta-2=0$ | W1 | 1 | Rearranges. |
| 7 | $(\tan\theta+2)(\tan\theta-1)=0$ | M1 | 1 | Factorises. |
| 8 | $\tan\theta=-2$ or $\tan\theta=1$ | W1 | 1 | Finds tangent values. |
| 9 | $\theta=2.03^c,5.18^c,\frac\pi4,\frac{5\pi}{4}$ | W2 | 2 | Gives all solutions in $0\le\theta\le2\pi$. |

### Final Answer

`(i) identity proved; (ii) $\theta=2.03,5.18,\frac\pi4,\frac{5\pi}{4}$ radians`

### What the Examiner Wanted

Part (i) uses the difference of squares and Pythagorean identity. Part (ii) uses the identity to reduce to a quadratic in $\tan\theta$.

---

## Solution to Question 23: C2 June 2019 Question 4

**Question ID:** AS1TrigonometryQ023  
**Source:** Mark Scheme PDF p.16  
**Original reference:** C2 June 2019 Question 4  
**Related question:** See `AS1_trigonometry_questions.md`, Question 23  
**Marks available:** 5  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $2\sin\theta\cos\theta-3\cos\theta=0$ | — | 0 | Rearranges equation. |
| 2 | $\cos\theta(2\sin\theta-3)=0$ | M1 | 1 | Factorises. |
| 3 | $\cos\theta=0$ or $\sin\theta=\frac32$ | MW2 | 2 | Splits into cases and identifies impossible sine value. |
| 4 | $\theta=90^\circ,270^\circ$; no solutions from $\sin\theta=\frac32$ | MW1 W1 | 2 | Gives valid solutions and rejects impossible branch. |

### Final Answer

`$\theta=90^\circ,270^\circ$`

### What the Examiner Wanted

Factor out $\cos\theta$ rather than dividing by it, because dividing by $\cos\theta$ would lose solutions where $\cos\theta=0$.

---

## Solution to Question 24: C2 June 2019 Question 8(b)

**Question ID:** AS1TrigonometryQ024  
**Source:** Mark Scheme PDF p.18  
**Original reference:** C2 June 2019 Question 8(b)  
**Related question:** See `AS1_trigonometry_questions.md`, Question 24  
**Marks available:** 5  
**Match confidence:** High

[VISUAL REFERENCE: AS1TrigonometryQ024TikZ-001 | See question diagram in AS1_trigonometry_tikz.md | Purpose: supports the equilateral frame calculation]

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | Diagram decomposes the equilateral frame side into $x+4(52.5)+x$. | M1 | 1 | Models the geometry of the frame and row of balls. |
| 2 | Uses a $30^\circ$ right triangle with opposite side $26.25$ and adjacent $x$. | — | 0 | Geometric setup. |
| 3 | $\displaystyle \tan30^\circ=\frac{26.25}{x}$ | MW1 | 1 | Uses tangent in right triangle. |
| 4 | $x=45.466\ldots$ | W1 | 1 | Finds side gap $x$. |
| 5 | $L=2x+4(52.5)$ | M1 | 1 | Builds full side length. |
| 6 | $L=2(45.466\ldots)+210=301$ mm | W1 | 1 | Final side length. |

### Final Answer

`$301$ mm`

### What the Examiner Wanted

Recognise that the frame side consists of four ball diameters plus two equal triangular gaps, and use a $30^\circ$ right-triangle calculation to find each gap.

---

## Solution to Question 25: AS1_(new spec)_June_2019 Question 5(b)

**Question ID:** AS1TrigonometryQ025  
**Source:** Mark Scheme PDF p.16  
**Original reference:** AS1_(new spec)_June_2019 Question 5(b)  
**Related question:** See `AS1_trigonometry_questions.md`, Question 25  
**Marks available:** 7  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $2(1-\sin^2\theta)+\sin\theta=1$ | M1 W1 | 2 | Uses $\cos^2\theta=1-\sin^2\theta$ and rearranges. |
| 2 | $2-2\sin^2\theta+\sin\theta=1$ | — | 0 | Expands. |
| 3 | $0=2\sin^2\theta-
\sin\theta-1$ | MW1 | 1 | Forms quadratic. |
| 4 | $0=(2\sin\theta+1)(\sin\theta-1)$ | M1 | 1 | Factorises. |
| 5 | $\sin\theta=-\frac12$ or $\sin\theta=1$ | W1 | 1 | Finds sine values. |
| 6 | $\theta=210^\circ$, $\theta=90^\circ$, $\theta=330^\circ$ | MW2 | 2 | Lists all solutions. |

### Final Answer

`$\theta=90^\circ,210^\circ,330^\circ$`

### What the Examiner Wanted

Convert to a quadratic in sine, factorise, and find all solutions over $0^\circ\le\theta\le360^\circ$.

---

## Solution to Question 26: AS1_(new_spec)_June_2019 Question 9

**Question ID:** AS1TrigonometryQ026  
**Source:** Mark Scheme PDF p.17  
**Original reference:** AS1_(new_spec)_June_2019 Question 9  
**Related question:** See `AS1_trigonometry_questions.md`, Question 26  
**Marks available:** 12  
**Match confidence:** High

[VISUAL REFERENCE: AS1TrigonometryQ026TikZ-001 | See question diagram in AS1_trigonometry_tikz.md | Purpose: supports the cosine-rule proof in the circle diagram]

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $AD^2=r^2+x^2-2xr\cos(180^\circ-\theta)$ | M1 W1 | 2 | Applies cosine rule in triangle AOD. |
| 2 | $=r^2+x^2+2xr\cos\theta$ | MW1 | 1 | Uses $\cos(180^\circ-
\theta)=-\cos\theta$. |
| 3 | From $\triangle OBD$, $\cos\theta=\frac{x}{r}\Rightarrow x=r\cos\theta$ | M1, W1 | 2 | Uses right triangle OBD. |
| 4 | $AD^2=r^2+r^2\cos^2\theta+2r^2\cos^2\theta$ | M1 | 1 | Substitutes $x=r\cos\theta$. |
| 5 | $=r^2+3r^2\cos^2\theta=r^2(1+3\cos^2\theta)$ | W1 | 1 | Completes required proof. |
| 6 | When $BD$ bisects $OS$, $x=\frac r2$ | MW1 | 1 | Uses midpoint condition. |
| 7 | From $\triangle OBD$, $\cos\theta=(\frac r2)\div r$ | M1 | 1 | Finds cosine. |
| 8 | $\cos\theta=\frac12$ | W1 | 1 | Simplifies. |
| 9 | $AD^2=r^2\left[1+3\left(\frac14\right)\right]=\frac74r^2$ | M1 | 1 | Substitutes into result from part (i). |
| 10 | $AD=\frac r2\sqrt7\Rightarrow k=7$ | W1 | 1 | Matches required form. |

### Final Answer

`(i) $AD^2=r^2(1+3\cos^2\theta)$ shown; (ii) $k=7$`

### What the Examiner Wanted

Apply the cosine rule exactly as requested, use the right triangle to express $x$ in terms of $r$ and $\theta$, then use the bisection condition to find $\cos\theta$ and compare with the given form.

---

## Unmatched Mark Scheme Entries

The supplied mark scheme contains the following entry that does not appear in the supplied questions PDF.

### C2 January 2012 Question 7(b)

**Source:** Mark Scheme PDF p.7  
**Status:** Official solution present, but matching question text not found in supplied questions PDF.  
**Most likely topic:** Arc length / sector area with radians.

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $108=2r+r\theta$ | M1 | 1 | Uses perimeter-type relation. |
| 2 | $\theta=(108-2r)/r$ | W1 | 1 | Rearranges. |
| 3 | $720=\frac12r^2\theta$ | M1 | 1 | Uses sector area formula. |
| 4 | $720=\frac12r^2(108-2r)/r$ | MW1 | 1 | Substitutes for $\theta$. |
| 5 | $2r^2-108r+1440=0$ | MW1 | 1 | Forms quadratic. |
| 6 | $(r-24)(r-30)=0$; $r=24$ or $r=30$ | MW2 | 2 | Solves for $r$. |
| 7 | $\theta=2.5$ or $\theta=1.6$ radians | MW2 | 2 | Finds corresponding angles. |

## 7. Diagram Assets

## 7.1 Mermaid Assets

### Source File Metadata

```yaml
filename: "AS1_trigonometry_mermaid.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/04. Trigonometry-Questions/AS1_trigonometry_mermaid.md"
lines: 6
bytes_utf8: 360
sha256: "dc178c46bdf5f410beaa72b73f752cc43830127d6e984c9fd673aada06c11ed4"
```

### Preserved Source Content: AS1_trigonometry_mermaid.md

# Mermaid Diagrams for AS1 Trigonometry

**Pack ID:** AS1Trigonometry

No Mermaid diagrams were required for this question pack.  The supplied question visuals are geometric, graph, bearing, and circle diagrams, which are better represented using TikZ.  No flowcharts, probability trees, dependency maps, or process diagrams were present in the questions PDF.

## 7.2 SVG Assets

### Source File Metadata

```yaml
filename: "AS1_trigonometry_svg.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/04. Trigonometry-Questions/AS1_trigonometry_svg.md"
lines: 6
bytes_utf8: 279
sha256: "37228608f8f7c94daf4f08b3cafe73238589cc756421d370dd90cd30b62674ca"
```

### Preserved Source Content: AS1_trigonometry_svg.md

# SVG Diagrams for AS1 Trigonometry

**Pack ID:** AS1Trigonometry

No SVG diagrams were required for this question pack.  The diagrams in the questions PDF are formal mathematical and geometric sketches, which have been recreated in the TikZ file using topic-specific asset IDs.

## 7.3 TikZ Assets

### Source File Metadata

```yaml
filename: "AS1_trigonometry_tikz.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/04. Trigonometry-Questions/AS1_trigonometry_tikz.md"
lines: 333
bytes_utf8: 12539
sha256: "09ea48357693442f74d3e1d562d523641f740b8e07d5a7de86182221d3bca89e"
```

### Preserved Source Content: AS1_trigonometry_tikz.md

# TikZ Diagrams for AS1 Trigonometry

**Pack ID:** AS1Trigonometry

This file contains TikZ recreations of the diagrams that appear in the supplied questions PDF.  The diagrams are not intended to be perfect visual replicas; they are mathematically faithful sketches with the relevant labels, angles, lengths and context preserved.

## AS1TrigonometryQ002TikZ-001: Ships C and D bearing diagram

**Source:** Questions PDF p.3  
**Related question:** Question 2  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1TrigonometryQ002TikZ-001 | Source: Questions PDF p.3 | Insert from AS1_trigonometry_tikz.md | Purpose: bearing diagram for ships C and D leaving harbour]`  
**Purpose:** Shows harbour, north direction, Ship D on bearing $030^\circ$ and Ship C on bearing $140^\circ$, preserving the given $30^\circ$ and $40^\circ$ markings.

### Creation Notes

TikZ is appropriate because this is a formal bearing/geometry diagram with arrows, angle labels and points.

```latex
\begin{tikzpicture}[scale=0.9,>=latex]
  \coordinate (H) at (0,0);
  \draw[->,thick] (H) -- (0,3) node[above] {N};
  \draw[dashed] (H) -- (0,-2.5);
  \draw[->,thick] (H) -- (1.6,2.5) node[right] {Ship D};
  \draw[->,thick] (H) -- (1.8,-1.9) node[right] {Ship C};
  \node[left] at (H) {Harbour};
  \draw (0,1.0) arc (90:60:1.0);
  \node at (0.42,1.05) {$30^\circ$};
  \draw (0,-0.8) arc (-90:-50:0.8);
  \node at (0.45,-0.9) {$40^\circ$};
  \node[below] at (0,-2.8) {Fig. 3};
\end{tikzpicture}
```

---

## AS1TrigonometryQ003TikZ-001: Field ABCD plan

**Source:** Questions PDF p.4  
**Related question:** Question 3  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1TrigonometryQ003TikZ-001 | Source: Questions PDF p.4 | Insert from AS1_trigonometry_tikz.md | Purpose: field ABCD with lengths and angles]`  
**Purpose:** Shows quadrilateral field ABCD with diagonal $AC$, lengths $AB=150$m, $CD=200$m, $AD=300$m, angle $ABC=120^\circ$ and angle $BCA=35^\circ$.

### Creation Notes

TikZ is used because the diagram is a labelled geometry construction involving a quadrilateral and triangles.

```latex
\begin{tikzpicture}[scale=0.85]
  \coordinate (A) at (0,0);
  \coordinate (B) at (1.0,2.2);
  \coordinate (C) at (5.0,1.9);
  \coordinate (D) at (6.4,-1.0);
  \draw[thick] (A)--(B)--(C)--(D)--cycle;
  \draw[thick] (A)--(C);
  \draw[dashed,<->] (-0.35,0.1)--(0.7,2.3) node[midway,left] {150 m};
  \draw[dashed,<->] (5.25,1.85)--(6.65,-0.9) node[midway,right] {200 m};
  \draw[dashed,<->] (-0.1,-0.4)--(6.3,-1.35) node[midway,below] {300 m};
  \node[left] at (A) {$A$};
  \node[above] at (B) {$B$};
  \node[right] at (C) {$C$};
  \node[right] at (D) {$D$};
  \draw (B)+(0.55,-0.2) arc (-15:-120:0.55);
  \node at (1.55,1.55) {$120^\circ$};
  \draw (C)+(-0.75,-0.05) arc (183:220:0.75);
  \node at (4.35,1.65) {$35^\circ$};
  \node at (3.1,-1.75) {Fig. 2};
\end{tikzpicture}
```

---

## AS1TrigonometryQ006TikZ-001: Sound-wave graph

**Source:** Questions PDF p.6  
**Related question:** Question 6  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1TrigonometryQ006TikZ-001 | Source: Questions PDF p.6 | Insert from AS1_trigonometry_tikz.md | Purpose: graph of the sound-wave model]`  
**Purpose:** Shows the sinusoidal model graph for the siren with vertical axis $A$, horizontal axis $t$, maximum $6$, minimum $-6$, and the first zero at $t=5$.

### Creation Notes

TikZ is suitable for a clean mathematical sketch of a trigonometric function with labelled axes and key points.

```latex
\begin{tikzpicture}[scale=0.8,>=latex]
  \draw[->] (0,-2.2) -- (0,2.4) node[above] {$A$};
  \draw[->] (0,0) -- (7.5,0) node[right] {$t$};
  \draw[domain=0:6.8,samples=160,thick] plot(\x,{1.7*cos(90*\x/5)});
  \node[left] at (0,1.7) {$6$};
  \node[left] at (0,-1.7) {$-6$};
  \node[below] at (1.25,0) {$5$};
  \node at (4,-2.35) {Fig. 4};
\end{tikzpicture}
```

---

## AS1TrigonometryQ007TikZ-001: Triangle ABC for ambiguous sine rule

**Source:** Questions PDF p.7  
**Related question:** Question 7  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1TrigonometryQ007TikZ-001 | Source: Questions PDF p.7 | Insert from AS1_trigonometry_tikz.md | Purpose: triangle ABC with AC = 28 cm, BC = 12 cm and angle BAC = 22 degrees]`  
**Purpose:** Shows triangle $ABC$ with $AC=28$ cm, $BC=12$ cm and $\angle BAC=22^\circ$, and indicates that $ABC$ is obtuse.

### Creation Notes

TikZ is appropriate because the diagram is a geometric triangle with labelled sides and angle.

```latex
\begin{tikzpicture}[scale=0.95]
  \coordinate (A) at (0,0);
  \coordinate (B) at (3.2,0.15);
  \coordinate (C) at (6.0,2.2);
  \draw[thick] (A)--(B)--(C)--cycle;
  \draw[dashed,<->] (0.1,0.35)--(5.85,2.55) node[midway,above] {28};
  \draw[dashed,<->] (3.45,0.35)--(6.25,2.35) node[midway,right] {12};
  \node[below] at (A) {$A$};
  \node[below] at (B) {$B$};
  \node[above] at (C) {$C$};
  \draw (A)+(0.75,0.02) arc (2:22:0.75);
  \node at (0.95,0.25) {$22^\circ$};
  \node at (3.2,-0.7) {Fig. 5};
\end{tikzpicture}
```

---

## AS1TrigonometryQ012TikZ-001: Ship route P-Q-R bearing diagram

**Source:** Questions PDF p.9  
**Related question:** Question 12  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1TrigonometryQ012TikZ-001 | Source: Questions PDF p.9 | Insert from AS1_trigonometry_tikz.md | Purpose: bearing diagram for route P to Q to R]`  
**Purpose:** Shows route from port P to Q, then Q to R, with north arrows and lengths $50$ and $40$.

### Creation Notes

TikZ is suited to bearing diagrams with north arrows and labelled route segments.

```latex
\begin{tikzpicture}[scale=0.85,>=latex]
  \coordinate (P) at (0,2.2);
  \coordinate (Q) at (4.1,1.4);
  \coordinate (R) at (2.4,-1.2);
  \draw[->] (P) -- +(0,2) node[above] {N};
  \draw[->] (Q) -- +(0,1.8) node[above] {N};
  \draw[thick] (P)--(Q)--(R)--cycle;
  \node[left] at (P) {$P$};
  \node[right] at (Q) {$Q$};
  \node[below] at (R) {$R$};
  \node[above] at ($(P)!0.5!(Q)$) {50};
  \node[right] at ($(Q)!0.55!(R)$) {40};
  \node at (2.3,-1.8) {Fig. 1};
\end{tikzpicture}
```

---

## AS1TrigonometryQ014TikZ-001: Waste ground ABCD sketch

**Source:** Questions PDF p.10  
**Related question:** Question 14  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1TrigonometryQ014TikZ-001 | Source: Questions PDF p.10 | Insert from AS1_trigonometry_tikz.md | Purpose: patch of waste ground ABCD with distances and angles]`  
**Purpose:** Shows the patch of waste ground with $A$, $B$, $E$ collinear, $AB=4.9$ km, $AD=5.4$ km, $BC=2.1$ km, $\angle DAB=35^\circ$, $\angle CBE=50^\circ$, and the diagonal $DB$.

### Creation Notes

TikZ is used for a labelled geometry sketch with straight-line collinearity and two triangles.

```latex
\begin{tikzpicture}[scale=0.9]
  \coordinate (A) at (0,0);
  \coordinate (B) at (4.9,0);
  \coordinate (E) at (6.2,0);
  \coordinate (D) at (4.4,3.1);
  \coordinate (C) at (5.7,1.8);
  \draw[thick] (A)--(D)--(C)--(B)--cycle;
  \draw[thick] (D)--(B);
  \draw[dashed] (A)--(E);
  \node[below left] at (A) {$A$};
  \node[below] at (B) {$B$};
  \node[right] at (C) {$C$};
  \node[above] at (D) {$D$};
  \node[right] at (E) {$E$};
  \node[below] at ($(A)!0.5!(B)$) {4.9 km};
  \node[left] at ($(A)!0.5!(D)$) {5.4 km};
  \node[right] at ($(B)!0.5!(C)$) {2.1 km};
  \draw (A)+(0.9,0) arc (0:35:0.9);
  \node at (1.15,0.35) {$35^\circ$};
  \draw (B)+(0.75,0) arc (0:50:0.75);
  \node at (5.35,0.55) {$50^\circ$};
  \node at (3.1,-0.8) {Fig. 1};
\end{tikzpicture}
```

---

## AS1TrigonometryQ016TikZ-001: Helicopter route diagram

**Source:** Questions PDF p.11  
**Related question:** Question 16  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1TrigonometryQ016TikZ-001 | Source: Questions PDF p.11 | Insert from AS1_trigonometry_tikz.md | Purpose: helicopter route from base to rescue to hospital]`  
**Purpose:** Shows the base, rescue location and hospital with segments labelled $70$ and $80$, preserving the route-triangle structure.

### Creation Notes

TikZ is useful for a clean route diagram that supports the cosine-rule bearing calculation.

```latex
\begin{tikzpicture}[scale=0.9,>=latex]
  \coordinate (B) at (0,0);
  \coordinate (R) at (3.2,-1.2);
  \coordinate (H) at (5.0,1.9);
  \draw[->] (B)--(0,2.0) node[above] {N};
  \draw[thick] (B)--(R)--(H)--cycle;
  \node[left] at (B) {Base};
  \node[below] at (R) {Rescue};
  \node[right] at (H) {Hospital};
  \node[below] at ($(B)!0.5!(R)$) {70};
  \node[right] at ($(R)!0.5!(H)$) {80};
  \node at (2.5,-1.8) {Fig. 2};
\end{tikzpicture}
```

---

## AS1TrigonometryQ021TikZ-001: Toy aeroplane wing diagram

**Source:** Questions PDF p.13  
**Related question:** Question 21  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1TrigonometryQ021TikZ-001 | Source: Questions PDF p.13 | Insert from AS1_trigonometry_tikz.md | Purpose: toy aeroplane wing modelled by two triangles]`  
**Purpose:** Shows quadrilateral $ABCD$ formed by triangles $ABC$ and $ACD$, with $AB=3.5$ cm, $BC=6.9$ cm, $CD=11.6$ cm and angle $ADC=28^\circ$.

### Creation Notes

TikZ is used because this is a geometric sketch with labelled triangles and angle information.

```latex
\begin{tikzpicture}[scale=0.85]
  \coordinate (B) at (0,0);
  \coordinate (A) at (2.0,0.1);
  \coordinate (C) at (1.1,3.0);
  \coordinate (D) at (3.8,-2.0);
  \draw[thick] (B)--(A)--(D)--(C)--(B);
  \draw[thick] (A)--(C);
  \node[left] at (B) {$B$};
  \node[right] at (A) {$A$};
  \node[above] at (C) {$C$};
  \node[below] at (D) {$D$};
  \node[left] at ($(B)!0.5!(C)$) {6.9};
  \node[below] at ($(B)!0.5!(A)$) {3.5};
  \node[right] at ($(C)!0.5!(D)$) {11.6};
  \draw (D)+(-0.55,0.15) arc (165:120:0.6);
  \node at (3.35,-1.35) {$28^\circ$};
  \node[right] at (4.2,1.6) {diagram\\not drawn\\accurately};
  \node at (2.2,-2.6) {Fig. 2};
\end{tikzpicture}
```

---

## AS1TrigonometryQ024TikZ-001: Snooker balls and equilateral frame

**Source:** Questions PDF p.14  
**Related question:** Question 24  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1TrigonometryQ024TikZ-001 | Source: Questions PDF p.14 | Insert from AS1_trigonometry_tikz.md | Purpose: snooker ball triangular arrangement and equilateral frame]`  
**Purpose:** Shows 15 balls in a triangular arrangement and an equilateral triangular frame containing them.  It preserves the key mathematical information that each ball has diameter 52.5 mm and the frame is equilateral.

### Creation Notes

TikZ can recreate the repeated circular ball pattern and the surrounding equilateral triangle cleanly.

```latex
\begin{tikzpicture}[scale=0.55]
  % triangular arrangement of 15 balls
  \foreach \row in {0,...,4}{
    \foreach \col in {0,...,\row}{
      \pgfmathsetmacro{\x}{\col*1.1 - \row*0.55}
      \pgfmathsetmacro{\y}{-\row*0.95}
      \shade[ball color=gray] (\x,\y) circle (0.5);
    }
  }
  \node at (0,-5.3) {Fig. 3};
  % frame version shifted right
  \begin{scope}[xshift=7cm]
    \draw[thick] (-3,-4.1)--(0,1.2)--(3,-4.1)--cycle;
    \foreach \row in {0,...,4}{
      \foreach \col in {0,...,\row}{
        \pgfmathsetmacro{\x}{\col*1.05 - \row*0.525}
        \pgfmathsetmacro{\y}{-\row*0.9}
        \shade[ball color=gray] (\x,\y-0.3) circle (0.48);
      }
    }
    \node at (0,-5.3) {Fig. 4};
  \end{scope}
\end{tikzpicture}
```

---

## AS1TrigonometryQ026TikZ-001: Circle with diameter AB and perpendicular foot D

**Source:** Questions PDF p.16  
**Related question:** Question 26  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1TrigonometryQ026TikZ-001 | Source: Questions PDF p.16 | Insert from AS1_trigonometry_tikz.md | Purpose: circle diagram with diameter AB, point S, perpendicular foot D, and angle BOS]`  
**Purpose:** Shows a circle with centre $O$, diameter $AB$, point $S$ on the circumference, line $OS$, perpendicular foot $D$ from $B$ to $OS$, and angle $BOS=\theta$.

### Creation Notes

TikZ is the best choice because the figure is a precise circle/geometry diagram with points, a right angle and labelled segments.

```latex
\begin{tikzpicture}[scale=1.0]
  \coordinate (O) at (0,0);
  \coordinate (A) at (0,3);
  \coordinate (B) at (0,-3);
  \coordinate (S) at (2.6,-1.5);
  \coordinate (D) at (1.25,-0.72);
  \draw[thick] (O) circle (3);
  \draw[thick] (A)--(B);
  \draw[thick] (O)--(S);
  \draw[thick] (B)--(D);
  \draw[thick] (A)--(D);
  \node[above] at (A) {$A$};
  \node[below] at (B) {$B$};
  \node[left] at (O) {$O$};
  \node[right] at (D) {$D$};
  \node[right] at (S) {$S$};
  \draw (D)+(0.22,-0.12)--++(-0.12,-0.22)--++(-0.22,0.12);
  \draw (O)+(0,-0.75) arc (-90:-30:0.75);
  \node at (0.45,-0.7) {$\theta$};
  \node at (0,-3.8) {Fig. 3};
\end{tikzpicture}
```

## 8. Interactive Widgets

## 8.1 Widget Assets

### Source File Metadata

```yaml
filename: "AS1_trigonometry_widgets.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/04. Trigonometry-Questions/AS1_trigonometry_widgets.md"
lines: 6
bytes_utf8: 348
sha256: "83a3ff62173914402961230420be8e9b26a98590ff4799e6175992992364a739"
```

### Preserved Source Content: AS1_trigonometry_widgets.md

# Interactive Widgets for AS1 Trigonometry

**Pack ID:** AS1Trigonometry

No interactive widgets were required for this question pack. The questions are better practised through written exam-style working, including showing trig identities, solving equations in specified intervals, and applying sine/cosine rules to bearing and triangle problems.

## 9. Agent Retrieval Notes

Use Section 5 as the authoritative question source and Section 6 as the solution/mark-scheme source. Do not merge question wording with solutions unless a user explicitly asks for worked examples or marking guidance.
