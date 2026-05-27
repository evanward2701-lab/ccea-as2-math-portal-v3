# AS1 Trigonometry – CCEA AS1 Pure Mathematics Lesson Agent Source

## 0. AI-Agent Usage Instructions

This file is a source for teaching, revision, explanation, diagnostics and lesson retrieval. Core lesson content is in Section 5. Diagram assets are in Section 6. Widgets are in Section 7. Use the lesson content before generated enhancement notes. Do not claim AI-proposed assets came from the original PDF. Preserve syllabus gap notes and uncertainty notes. Use UK/CCEA mathematical vocabulary.

## 1. Pack Metadata

```yaml
pack_type: lesson
unit_code: AS1
unit_name: CCEA AS1 Pure Mathematics
topic_slug: "04_geometry_and_trigonometry"
topic_title: "Trigonometry – CCEA AS1 Pure Mathematics"
source_folder: "/Users/evanward/Documents/AS Portal - New /AS1 Files/04. Geometry & Trigonometry"
output_file: "/Users/evanward/Documents/AS Portal - New /AS1 Files/00_AGENT_SOURCE_PACKS/04_geometry_and_trigonometry/AS1_trigonometry_agent_source.md"
created_from_files:
  lesson: "AS1_trigonometry_lesson.md"
  questions: null
  solutions: null
  mermaid: "AS1_trigonometry_mermaid.md"
  svg: "AS1_trigonometry_svg.md"
  tikz: "AS1_trigonometry_tikz.md"
  widgets: "AS1_trigonometry_widgets.md"
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
| lesson | AS1_trigonometry_lesson.md | 553 | 55837 | `a9edcb8e516d237cd6546359e0b59be1936da2d7845f90a0669455cab4578111` |
| mermaid | AS1_trigonometry_mermaid.md | 87 | 5299 | `c6e8ee6c5922b0eebb4cc8ffbd07aeaa3fcd1ef5b3880f83e92d3bf77f9ebd91` |
| svg | AS1_trigonometry_svg.md | 5 | 440 | `131e1a6bae586bdf4e9f733b007ac2ef0d72dac3f6ae4720c5f2c0c0da7064e2` |
| tikz | AS1_trigonometry_tikz.md | 243 | 10284 | `362981cb00c49e7d9aa3cc0f62fdaaa88698b64b57d2dcdee93f2e1e36ff77e2` |
| widgets | AS1_trigonometry_widgets.md | 452 | 20861 | `d30f774d94ee0d1cc527bca8a0ff186944471c4b9c760e081daf9090581e3630` |

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
filename: "AS1_trigonometry_lesson.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/04. Geometry & Trigonometry/AS1_trigonometry_lesson.md"
lines: 553
bytes_utf8: 55837
sha256: "a9edcb8e516d237cd6546359e0b59be1936da2d7845f90a0669455cab4578111"
```

### Preserved Source Content: AS1_trigonometry_lesson.md

# Trigonometry – CCEA AS1 Pure Mathematics

**Unit:** CCEA AS1 Pure Mathematics  
**Source lesson PDF:** TRIGONOMETRY.pdf  
**Date generated:** 22 May 2026

This lesson pack introduces trigonometry for AS‐level students following the CCEA specification.  It builds from a brief recap of GCSE right‐angled trigonometry and exact values to the general definitions of sine, cosine and tangent for any angle, their graphs, identities, and equations.  It then covers the sine and cosine rules, the area formula for triangles and multi‐step problem solving.  All content is cross checked against the CCEA specification【845314039634229†L520-L546】 and elaboration document【466591847869913†L334-L371】 to ensure it is on specification.  Any off‐specification material is clearly identified and omitted from the main teaching notes.

## 1. Specification Alignment

The table below aligns the main content of this lesson with the CCEA AS1 Pure Mathematics specification and elaboration document.  For each specification point, the table shows whether the point is fully covered in the lesson, partially covered or missing; where in the notes it appears; any gaps or actions needed; and suggested visual or interactive support.

| CCEA spec point【845314039634229†L520-L546】 | Elaboration guidance【466591847869913†L334-L371】 | Covered? | Where in the notes | Gaps/action | Suggested visuals/widgets |
|---|---|---|---|---|---|
| Demonstrate understanding and use of definitions of sine, cosine and tangent for all arguments | Students should know the right‐angle definitions and extend them to any angle using the unit circle and reference angles; include complementary angles and CAST rule | Yes | §§6–7; §§8.1–8.4 | Emphasise radian measure as well as degrees; mention that calculator must be in correct mode | TikZ diagrams of right‐angled triangle (TIKZ‑001) and CAST diagram (TIKZ‑003); AI widget exploring trig sign and quadrants (not present here) |
| Use sine and cosine rules (including ambiguous case)【466591847869913†L334-L342】 | Include when to use each rule, how to set up and solve, and treatment of SSA ambiguous case | Yes | §§8.9–8.10 | Ensure ambiguous case is clearly explained; provide practice questions | TikZ diagrams for sine rule (TIKZ‑005) and cosine rule (TIKZ‑006); AI mermaid decision tree for choosing rules (MMD‑001); Triangle solver widget (WIDGET‑003) |
| Calculate area of a triangle in the form ½ab sin C【466591847869913†L343-L347】 | Explain derivation and use with any pair of sides and included angle | Yes | §8.11 | None | TikZ area diagram (TIKZ‑007); integrated into multi‐step problem flow |
| Demonstrate understanding and use of sine, cosine and tangent functions, including their graphs, symmetries and periodicity【466591847869913†L348-L356】 | Include graphs of sin, cos and tan, symmetries, complementary angles, periodicity and simple transformations | Yes | §§8.4–8.6 | Emphasise radian measure and domain of tan; include transformations | TikZ sine/cosine graphs (TIKZ‑004); AI widget exploring graph transformations (WIDGET‑001) |
| Demonstrate understanding and use of tan = sin / cos【466591847869913†L357-L360】 | Define tan as ratio of sin and cos; note that tan is undefined when cos = 0 | Yes | §6; §8.4 | None | Included in diagrams |
| Demonstrate understanding and use of sin²θ + cos²θ = 1【466591847869913†L361-L365】 | Use identity and rearrangements to find exact values and solve equations; avoid off‐spec sec, cosec identities | Yes | §8.7 | Do not include off‐spec identities (sec² = 1 + tan², etc.) | TikZ Pythagorean identity triangle (part of TIKZ‑002) |
| Solve simple trigonometric equations in a given interval, including quadratic equations in sin, cos and tan and equations involving multiples of the unknown angle【466591847869913†L368-L371】 | Provide strategies: reference angles, CAST, period; use substitution for quadratic equations; include solving 2θ and 3θ equations | Yes | §§8.6–8.8 | Emphasise writing all solutions in specified interval; include exam‐style examples | AI mermaid decision tree for solving trig equations (MMD‑002); quadratic trig equation solver widget (WIDGET‑002) |

Any specification points unrelated to trigonometry (e.g., exponentials, vectors, differentiation, integration) are out of scope for this lesson and are not covered.

## 2. Learning Objectives

By the end of this lesson you should be able to:

1. Recall and use the definitions of sine, cosine and tangent in right‐angled triangles, and extend these definitions to any angle using the unit circle.
2. Convert between degree and radian measure and understand complementary angles.
3. State and use exact values of sine, cosine and tangent for 30°, 45° and 60° (and their radian equivalents).
4. Sketch and interpret the graphs of the sine, cosine and tangent functions, noting key points, symmetries, periodicity and sign in each quadrant.
5. Use the identities \(\tan x = \frac{\sin x}{\cos x}\) and \(\sin^2 x + \cos^2 x = 1\) to simplify expressions or find unknown values.
6. Solve trigonometric equations such as \(\sin x = k\), \(\cos x = k\) and \(\tan x = k\) within a specified interval, including equations of the form \(a\sin^2x + b\sin x + c = 0\) and those involving multiples of the angle.
7. Apply the sine rule (including the ambiguous case) and cosine rule to find missing sides or angles in any triangle.
8. Calculate the area of a non right‐angled triangle using \(\tfrac{1}{2}ab\sin C\).
9. Combine trigonometric techniques in multi‐step problems and justify each step logically.
10. Recognise common mistakes in trigonometric work and avoid them in exams.

## 3. Compact Prerequisite Recap

You should already be confident with basic GCSE trigonometry and algebra.  The key prerequisites are:

* **Right‐angled trigonometry (SOH CAH TOA).**  In a right‐angled triangle, the sides are named relative to an acute angle \(\theta\): the **hypotenuse** is opposite the right angle, the **opposite** side is opposite \(\theta\), and the **adjacent** side is next to \(\theta\) (not the hypotenuse).  The ratios are
  \[\sin\theta = \frac{\text{opposite}}{\text{hypotenuse}}, \quad \cos\theta = \frac{\text{adjacent}}{\text{hypotenuse}}, \quad \tan\theta = \frac{\text{opposite}}{\text{adjacent}}.\]
  A TikZ diagram in the diagrams file illustrates this relationship [see TIKZ‑001].

* **Pythagoras’ theorem.**  For a right‐angled triangle, \(a^2 + b^2 = c^2\), where \(c\) is the hypotenuse.

* **Angle units.**  Degrees (\(360°\) in a full revolution) and radians (\(2\pi\) in a full revolution).  Conversions: \(180° = \pi\) radians, so \(1° = \pi/180\) rad and \(1\,\text{rad} = 180/\pi°\).

* **Exact values.**  Know that \(\sin 30° = 1/2\), \(\sin 45° = \sqrt{2}/2\), \(\sin 60° = \sqrt{3}/2\), and similarly for cosine and tangent.  These come from standard triangles (see TIKZ‑002).

* **Basic algebra.**  Factorising, solving quadratics and rearranging equations are essential for solving trigonometric equations.

## 4. Big Picture Explanation

Trigonometry extends the study of triangles from acute angles in right‐angled triangles to all angles.  AS‐level students need to generalise the sine, cosine and tangent functions so that they are defined for any angle (and thus any real number) using the unit circle.  These functions are periodic: sine and cosine repeat every \(360°\) (or \(2\pi\) radians) and tangent repeats every \(180°\) (\(\pi\) radians).  Trigonometry appears in algebraic equations, coordinate geometry, calculus, mechanics and complex numbers, so mastering it early in the course is vital.  The sine and cosine rules allow you to solve non right‐angled triangles, and the area formula \(\tfrac{1}{2}ab\sin C\) generalises the familiar \(\tfrac{1}{2}bh\) formula.  Trigonometric identities and graph properties help you simplify expressions, solve equations and sketch curves accurately.  Many exam questions combine several techniques, so a systematic approach is essential.

## 5. Key Definitions and Notation

* **Angle measure.**  Degrees (\(°\)) and radians (\(\text{rad}\)).  Unless otherwise stated, answers may be given in either form.  Always set your calculator to the appropriate mode.
* **Sine, cosine and tangent (right‐angled triangle).**  For an acute angle \(\theta\) in a right‐angled triangle: \(\sin\theta = \dfrac{\text{opposite}}{\text{hypotenuse}}\), \(\cos\theta = \dfrac{\text{adjacent}}{\text{hypotenuse}}\) and \(\tan\theta = \dfrac{\text{opposite}}{\text{adjacent}}\).
* **Sine, cosine and tangent (unit circle).**  For any real \(\theta\), draw a ray from the origin making an angle \(\theta\) with the positive \(x\)–axis.  Where this ray meets the unit circle (\(x^2 + y^2 = 1\)), the coordinates are \((\cos\theta,\sin\theta)\).  The tangent function is \(\tan\theta = \dfrac{\sin\theta}{\cos\theta}\) whenever \(\cos\theta \neq 0\).  This defines the functions for all real angles.
* **Complementary angles.**  Two angles that add to \(90°\) (or \(\tfrac{\pi}{2}\) rad) are complements.  For any angle \(\theta\), \(\sin\theta = \cos(90° − \theta)\) and \(\cos\theta = \sin(90° − \theta)\).  This follows from the geometry of a right‐angled triangle and is demonstrated in §8.2.
* **Reference angle (\(\alpha\)).**  For any angle \(\theta\), the reference angle \(\alpha\) is the acute angle (\(0 ≤ \alpha ≤ 90°\)) between the terminal side of \(\theta\) and the \(x\)–axis.  It allows you to evaluate trig functions for \(\theta\) by determining the sign and using the value of the function at \(\alpha\).
* **CAST rule.**  The acronym CAST labels the quadrants (IV, III, II, I) reading clockwise: **C**osine positive, **A**ll positive, **S**ine positive and **T**angent positive.  It helps determine the sign of trigonometric functions for angles beyond \(90°\).  A unit circle diagram is provided in TIKZ‑003.
* **Pythagorean identity.**  For any angle \(\theta\), $$\sin^2\theta + \cos^2\theta = 1.$$  Rearrangements include \(\sin^2\theta = 1 - \cos^2\theta\) and \(\cos^2\theta = 1 - \sin^2\theta\).  These identities underpin many simplifications.
* **Sine rule.**  In any triangle \(ABC\) with sides \(a,b,c\) opposite angles \(A,B,C\), $$\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}.$$  It applies when you know two angles and one side (AAS) or two sides and a non‐included angle (SSA).  The ambiguous SSA case may produce two possible solutions or none – this is covered in §8.9.
* **Cosine rule.**  In any triangle \(ABC\), $$a^2 = b^2 + c^2 - 2bc\cos A,$$ with corresponding cyclic permutations.  It applies when you know two sides and the included angle (SAS) or all three sides (SSS).  Rearranging gives $$\cos A = \frac{b^2 + c^2 - a^2}{2bc}.$$
* **Area of a triangle.**  For triangle \(ABC\), $$\text{Area} = \tfrac{1}{2}ab\sin C = \tfrac{1}{2}bc\sin A = \tfrac{1}{2}ca\sin B.$$  Each form uses two sides and the included angle.  A diagram demonstrating this formula is provided in TIKZ‑007.

## 6. Core Theory

### 6.1 Right‐Angled Trigonometry (Recap)

In a right‐angled triangle, identify an acute angle \(\theta\) and label the sides **opposite**, **adjacent** and **hypotenuse** relative to that angle.  The trigonometric ratios are defined by

\[\sin\theta = \frac{\text{opposite}}{\text{hypotenuse}},\quad \cos\theta = \frac{\text{adjacent}}{\text{hypotenuse}},\quad \tan\theta = \frac{\text{opposite}}{\text{adjacent}}.\]

**Why?**  These ratios capture how the side lengths change as the angle varies and allow unknown sides or angles to be found.  For example, if you know the angle and one side, you can compute another side using the appropriate ratio.  A diagram illustrating these definitions is provided in the TikZ file [TIKZ‑001].

**Example 1.**  In a right‐angled triangle, \(\theta = 30°\) and the adjacent side is 4 cm.  To find the hypotenuse \(h\) use \(\cos\theta = \text{adjacent}/h\), so \(h = 4/\cos 30° = 4\,/\,(\sqrt{3}/2) = \dfrac{8}{\sqrt{3}} \approx 4.62\) cm.  Always decide which ratio involves your known side and desired unknown.

**Common mistakes:** confusing the opposite and adjacent sides; choosing the wrong ratio; forgetting to use degrees or radian mode on a calculator.

### 6.2 Complementary Angles and Exact Values

Two angles add to \(90°\) (or \(\tfrac{\pi}{2}\) radians) if they are complementary.  The acute angles in a right‐angled triangle are complementary; therefore

\[\sin \theta = \cos(90° - \theta),\quad \cos \theta = \sin(90° - \theta).\]

These relationships allow you to convert between sine and cosine of complementary angles.  For example, \(\cos 50° = \sin 40°\) and \(\cos 67° = \sin 23°\).  Remember to subtract from \(90°\) only, not from \(180°\) or \(360°\).

**Exact values for special angles.**  Certain angles have exact sine, cosine and tangent values.  Consider a 45°–45°–90° triangle with legs of length 1 (the diagonal is \(\sqrt{2}\)).  This gives \(\sin 45° = \cos 45° = \sqrt{2}/2\) and \(\tan 45° = 1\).  A 30°–60°–90° triangle with hypotenuse 2 and short side 1 yields \(\sin 30° = 1/2\), \(\cos 30° = \sqrt{3}/2\), \(\sin 60° = \sqrt{3}/2\), \(\cos 60° = 1/2\) and \(\tan 30° = 1/\sqrt{3}\), \(\tan 60° = \sqrt{3}\).  The diagrams in [TIKZ‑002] illustrate these triangles and the resulting values.  Memorising these exact values allows you to work in exact surd form without a calculator.

### 6.3 Extending Trigonometric Functions to All Angles

The right‐angle definitions do not apply when \(\theta\) exceeds \(90°\) or is negative.  To define the functions for any real \(\theta\), use the **unit circle**: a circle of radius 1 centred at the origin.  Draw a ray making an angle \(\theta\) (measured anticlockwise from the positive \(x\)–axis) and mark the point \((x,y)\) where it meets the unit circle.  Then \(\cos\theta = x\) and \(\sin\theta = y\).  The tangent function is \(\tan\theta = \dfrac{\sin\theta}{\cos\theta}\) whenever \(\cos\theta \neq 0\).  This definition works for all real \(\theta\) and naturally extends to radian measure.

**Signs in different quadrants.**  Because the unit circle coordinates \((x,y)\) may be positive or negative, the trigonometric functions can be positive or negative.  The CAST rule helps remember which functions are positive in each quadrant: reading clockwise around the quadrants from the fourth, the letters **C**, **A**, **S**, **T** indicate **Cosine** positive (Quadrant IV), **All** positive (Quadrant I), **Sine** positive (Quadrant II) and **Tangent** positive (Quadrant III).  A unit circle diagram with quadrant labels and examples is provided in [TIKZ‑003].

**Reference angles.**  To evaluate \(\sin \theta\) or \(\cos \theta\) for angles outside the first quadrant, find the **reference angle** \(\alpha\) (an acute angle between the terminal side of \(\theta\) and the \(x\)–axis).  Then \(|\sin \theta| = \sin \alpha\) and \(|\cos \theta| = \cos \alpha\).  Use the CAST rule to determine the correct sign.  For example, \(\sin 150° = \sin(180° - 30°) = \sin 30° = 1/2\) (positive in Quadrant II); \(\cos 210° = -\cos 30° = -\sqrt{3}/2\) (negative in Quadrant III).

### 6.4 Graphs, Symmetries and Periodicity

The graphs of \(y = \sin x\), \(y = \cos x\) and \(y = \tan x\) reveal many properties of these functions.  For simplicity, first plot them for \(0 ≤ x ≤ 360°\) (or \(0 ≤ x ≤ 2\pi\)).  Use radian measure where possible.  Key features include:

* **Sine graph:** starts at \((0,0)\), rises to \((90°,1)\) (or \((\tfrac{\pi}{2},1)\)), returns to \((180°,0)\), falls to \((270°,-1)\) and completes a period at \((360°,0)\).  It is **odd** (symmetric about the origin) and has period \(360°\) (\(2\pi\)).
* **Cosine graph:** starts at \((0,1)\), falls to \((90°,0)\), reaches \((180°,-1)\), rises to \((270°,0)\) and completes a period at \((360°,1)\).  It is **even** (symmetric about the \(y\)–axis) and has period \(360°\) (\(2\pi\)).
* **Tangent graph:** has vertical asymptotes at odd multiples of \(90°\) (\(\tfrac{\pi}{2}\)) and passes through the origin.  It has period \(180°\) (\(\pi\)) and is also odd.

Diagrams plotting these graphs and highlighting symmetry and periodicity are provided in [TIKZ‑004].  Notice that shifting a sine graph horizontally by \(90°\) transforms it into a cosine graph; this reflects the complementarity relationships.

**Periodicity and symmetry relations.**  From the graphs and unit circle definition, you can deduce useful angle laws:

* \(\sin (180° - x) = \sin x\) because sine is symmetrical about \(90°\).
* \(\cos (360° - x) = \cos x\) because cosine is symmetrical about \(0°\).
* \(\tan (180° + x) = \tan x\) because the tangent graph repeats every \(180°\).

These properties help simplify expressions and solve equations (§§6.6–6.7).  Always check whether an angle falls into a quadrant where the function is positive or negative.

### 6.5 Pythagorean Identity and Simple Identities

From the unit circle definition, the coordinates satisfy \(x^2 + y^2 = 1\).  Therefore

\[\cos^2 x + \sin^2 x = 1.\]

This identity holds for all real \(x\) and underpins many simplifications.  Rearranging gives \(\sin^2 x = 1 - \cos^2 x\) and \(\cos^2 x = 1 - \sin^2 x\).  You should be able to use these rearrangements to find one trigonometric value given the other or to simplify expressions.  The related identities \(1 + \tan^2 x = \sec^2 x\) and \(1 + \cot^2 x = \csc^2 x\) are **not required** by the CCEA specification and therefore are not taught here; they are mentioned in the lesson PDF but omitted from the main notes (see §16 for off‐spec content).

### 6.6 Solving Basic Trigonometric Equations

When solving equations such as \(\sin x = k\), \(\cos x = k\) or \(\tan x = k\) within a given interval, follow these steps:

1. **Isolate the trigonometric function** on one side if necessary.
2. **Find the reference angle** \(\alpha\) by computing \(\alpha = \sin^{-1}|k|\), \(\alpha = \cos^{-1}|k|\) or \(\alpha = \tan^{-1}|k|\) on your calculator (ensuring it is in the correct mode).  This gives an acute angle satisfying the equation.
3. **Determine the quadrants** where the function is positive or negative using the CAST rule.  Write down the general solutions within \(0° ≤ x < 360°\) (or \(0 ≤ x < 2\pi\)).  For example:
   * If \(\sin x = k\), then \(x = \alpha\) or \(x = 180° - \alpha\).
   * If \(\cos x = k\), then \(x = \alpha\) or \(x = 360° - \alpha\).
   * If \(\tan x = k\), then \(x = \alpha\) or \(x = \alpha + 180°\).
4. **Consider the sign of \(k\).**  If \(k\) is negative, the solutions lie in quadrants where the function is negative.  You can still use the same patterns but remember that \(\alpha\) is defined using \(|k|\).
5. **Check the interval** and include all solutions that fall within it, converting to radians if required.

An AI‐proposed decision tree summarising this process is provided in [MMD‑002].  Worked examples are given in §9.

### 6.7 Quadratic Trigonometric Equations

Equations involving \(\sin^2 x\), \(\cos^2 x\) or \(\tan^2 x\) often become quadratic.  To solve a quadratic in a trigonometric function:

1. **Substitute** \(y = \sin x\), \(\cos x\) or \(\tan x\) to obtain a quadratic equation in \(y\).
2. **Solve the quadratic** using factorisation or the quadratic formula.  If the equation factorises, identify each factor equal to zero.
3. **Replace \(y\) with the original trigonometric function** to obtain one or more basic equations (e.g., \(\sin x = 1/2\) or \(\sin x = -1\)).
4. **Solve each basic equation** using the method described in §6.6.
5. **Reject extraneous solutions** that give \(y\) values outside the range of the function (e.g., \(|\sin x| ≤ 1\)).  Quadratic equations may produce solutions such as \(\sin x = 2\), which must be discarded.

Worked examples in §9 illustrate this substitution technique.  A widget for exploring solutions of quadratic trigonometric equations is provided in [WIDGET‑002].

### 6.8 Trigonometric Identities and Proofs

Beyond the Pythagorean identity, you should be able to manipulate and prove simple identities using known relationships.  For example, verify \(\tan x = \dfrac{\sin x}{\cos x}\) by dividing the definitions of sine and cosine; prove complementary angle relationships; or derive 
\[
\sin (180° - x) = \sin x, \quad \cos (360° - x) = \cos x, \quad \tan (180° + x) = \tan x.
\]
These identities come directly from the symmetry and periodicity of the graphs and should be justified geometrically or using function properties.  You are not expected to use more advanced identities such as compound‐angle or double‐angle formulas at AS1.

### 6.9 The Sine Rule

For any triangle \(ABC\) with sides \(a,b,c\) opposite angles \(A,B,C\) respectively, the **sine rule** states that

\[\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}.\]

This rule is useful when you know two angles and one side (AAS) or two sides and a non‐included angle (SSA).  To use it:

1. Identify a pair of known angle and opposite side.
2. Write the equality involving the unknown (side or angle) and the known pair.
3. Rearrange to solve for the unknown.

When \(B\) or \(C\) is unknown and you have two sides and an angle that is **not** included between them, the SSA configuration can lead to zero, one or two valid solutions.  This is called the **ambiguous case**.  For example, in a triangle with \(a=10\), \(b=7\) and angle \(A=30°\), applying the sine rule may yield two possible angles \(B\) that satisfy \(\sin B = \ldots\).  Always check whether \(\sin\) of the angle leads to an acute or obtuse solution and whether the two possible angles fit within a triangle (the sum of angles must be \(180°\)).  Examples in §9 illustrate both the single‐solution and ambiguous cases.  A general triangle diagram showing sides and angles is provided in [TIKZ‑005].

### 6.10 The Cosine Rule

When a triangle is not conveniently solved by the sine rule – for example, when you know two sides and the included angle (SAS) or all three sides (SSS) – use the **cosine rule**:

\[a^2 = b^2 + c^2 - 2bc \cos A.\]

The rule can be cyclically permuted for \(b^2\) and \(c^2\).  To find an unknown **side**, use \(a = \sqrt{b^2 + c^2 - 2bc\cos A}\).  To find an unknown **angle**, rearrange for \(\cos A\):

\[\cos A = \frac{b^2 + c^2 - a^2}{2bc}.
\]

Always ensure that \(\cos A\) lies between −1 and 1; if it doesn’t, the given side lengths cannot form a triangle.  Label your diagram carefully so that sides opposite angles correspond.  A diagram representing the cosine rule is provided in [TIKZ‑006].

**Choosing between the sine and cosine rules.**  Use the sine rule when a **known angle and its opposite side** appear in the triangle.  Use the cosine rule when dealing with two sides and the **included** angle or all three sides.  An AI‐proposed decision tree summarising this choice is provided in [MMD‑001].

### 6.11 Area of a Non Right‐Angled Triangle

The area of a triangle with sides \(a\) and \(b\) and included angle \(C\) is

\[\text{Area} = \frac{1}{2}ab\sin C.\]

This formula arises by dropping a perpendicular from one vertex: the height \(h = b \sin C\), so \(\text{Area} = \tfrac{1}{2} a h\).  Analogous formulas hold for the other pairs of sides and included angles.  Always use the included angle between the two known sides.  A diagram illustrating the derivation is provided in [TIKZ‑007].  Use this formula in combination with the sine or cosine rule to solve multi‐step problems.

### 6.12 Multi‐Step Trigonometric Problem Solving

Many exam questions require several trigonometric techniques.  A typical approach is:

1. **Draw a clear labelled diagram.**  Mark given sides and angles.
2. **Decide which rule or identity to use first** based on the available information.  For example, if you know two sides and the included angle, apply the cosine rule to find the third side.  If you know an angle and its opposite side and another side, apply the sine rule.
3. **Compute missing angles or sides** one at a time, justifying each step.  Remember the triangle angle sum \(A + B + C = 180°\).
4. **Calculate the area** using \(\tfrac{1}{2}ab\sin C\) if required.
5. **Check your answers** for reasonableness: do the angles add to \(180°\)?  Are side lengths positive?  Are answers given to appropriate accuracy?

A table of suggested multi‐step methods appears in §13.  Multi‐step problems often combine trigonometric rules with algebra or geometry, so careful organisation is essential.  An AI‐proposed interactive widget [WIDGET‑003] lets you explore how changing sides and angles affects unknown values.

## 7. Visual Asset Integration

The lesson PDF contains numerous diagrams and tables.  They have been rebuilt in the separate diagram files and are referenced here with placeholders.  Each placeholder lists the asset identifier, the source page of the lesson PDF, the diagram file to use and the purpose of the visual.

### 7.1 Diagrams from the Lesson PDF

| Placeholder | Source in PDF | Diagram file (TikZ) | Purpose |
|---|---|---|---|
| **[VISUAL PLACEHOLDER: TIKZ‑001]** | Lesson PDF p.1 | `AS1_trigonometry_tikz.md` | Illustrate a right‐angled triangle and define opposite, adjacent and hypotenuse relative to an angle. |
| **[VISUAL PLACEHOLDER: TIKZ‑002]** | Lesson PDF p.3 | `AS1_trigonometry_tikz.md` | Show the 45°–45°–90° triangle and the 30°–60°–90° triangle used to derive exact trig values. |
| **[VISUAL PLACEHOLDER: TIKZ‑003]** | Lesson PDF p.4 | `AS1_trigonometry_tikz.md` | Unit circle/Cast diagram indicating quadrants and sign of sine, cosine and tangent. |
| **[VISUAL PLACEHOLDER: TIKZ‑004]** | Lesson PDF p.5 | `AS1_trigonometry_tikz.md` | Graphs of \(\sin x\), \(\cos x\) and \(\tan x\) over one period, illustrating symmetries and periodicity. |
| **[VISUAL PLACEHOLDER: TIKZ‑005]** | Lesson PDF p.9 | `AS1_trigonometry_tikz.md` | Triangle labelled \(A,B,C\) and sides \(a,b,c\) to accompany the sine rule. |
| **[VISUAL PLACEHOLDER: TIKZ‑006]** | Lesson PDF p.10 | `AS1_trigonometry_tikz.md` | Triangle demonstrating the cosine rule with sides and included angle labelled. |
| **[VISUAL PLACEHOLDER: TIKZ‑007]** | Lesson PDF p.11 | `AS1_trigonometry_tikz.md` | Diagram deriving the area formula \(\tfrac{1}{2}ab\sin C\) by dropping a perpendicular. |

### 7.2 AI‑Proposed Visuals

| Placeholder | Source | Diagram file (Mermaid) | Purpose |
|---|---|---|---|
| **[VISUAL PLACEHOLDER: MMD‑001]** | AI‐proposed teaching enhancement | `AS1_trigonometry_mermaid.md` | Decision tree for choosing between the sine rule, cosine rule and area formula based on known sides and angles. |
| **[VISUAL PLACEHOLDER: MMD‑002]** | AI‐proposed teaching enhancement | `AS1_trigonometry_mermaid.md` | Decision tree for solving \(\sin x = k\), \(\cos x = k\) or \(\tan x = k\) in a specified interval. |
| **[VISUAL PLACEHOLDER: MMD‑003]** | AI‐proposed teaching enhancement | `AS1_trigonometry_mermaid.md` | Concept map linking the identities \(\sin^2 x + \cos^2 x = 1\), \(\tan x = \sin x/\cos x\) and complementary angle relationships. |

### 7.3 Interactive Learning Widgets

| Placeholder | Source | Widget file | Purpose |
|---|---|---|---|
| **[INTERACTIVE PLACEHOLDER: WIDGET‑001]** | AI‐proposed teaching enhancement | `AS1_trigonometry_widgets.md` | Interactive graph transformation explorer: adjust amplitude, frequency, phase and vertical shift for sine or cosine and see the graph update. |
| **[INTERACTIVE PLACEHOLDER: WIDGET‑002]** | AI‐proposed teaching enhancement | `AS1_trigonometry_widgets.md` | Trigonometric equation solver: choose sine, cosine or tangent, set a value \(k\) and view the reference angle and solutions within \(0° ≤ x < 360°\). |
| **[INTERACTIVE PLACEHOLDER: WIDGET‑003]** | AI‐proposed teaching enhancement | `AS1_trigonometry_widgets.md` | Triangle solver: input two sides and an angle (SAS or SSA) to compute the remaining side, unknown angles and area using sine and cosine rules. |

Each widget includes instructions for copying the HTML/JS code into a browser to run it.  These widgets are optional tools to deepen understanding; they do not replace algebraic working required in examinations.

## 8. Worked Examples

The following worked examples are either derived from the lesson PDF or created to illustrate specification content.  Each example contains step‐by‐step reasoning, commentary on why each step works, and notes on exam technique.  After reading, try the practice questions in §12 before consulting the solutions in §13.

### Example 2.1 – Using Right‐Angled Trigonometry

**Question.**  A ladder 5 m long leans against a vertical wall, making an angle of \(70°\) with the ground.  How high up the wall does it reach?  Give your answer to 2 decimal places.

**Solution.**  Identify the angle \(\theta = 70°\) between the ladder (hypotenuse) and the ground.  The height \(h\) is the side opposite \(\theta\).  Use \(\sin\theta = \text{opposite}/\text{hypotenuse}\):

\[\sin 70° = \frac{h}{5} \quad\Rightarrow\quad h = 5 \sin 70° \approx 5 \times 0.9396926 = 4.70\,\text{m}.\]

**Exam tip.**  Sketch a diagram to label the sides and angle.  Write down the ratio before substituting numbers.  Ensure your calculator is in degree mode for this question.

### Example 2.2 – Using Complementary Angles

**Question.**  Evaluate \(\cos 62°\) using the fact that cosine and sine are complementary.

**Solution.**  \(\cos 62° = \sin(90° - 62°) = \sin 28°\).  Either evaluate numerically (\(\sin 28° \approx 0.4695\)) or use this relationship to simplify expressions involving \(\cos 62°\) without a calculator.  Complementary angle relationships are especially useful when angles like \(62°\) appear in non‐calculator exam questions.

### Example 2.3 – Finding Exact Values Using Standard Triangles

**Question.**  Simplify \(\sin 60° + \cos 30°\) and \(2\tan 30° - \tan 45°\) exactly.

**Solution.**  From the 30°–60°–90° triangle (see TIKZ‑002), \(\sin 60° = \sqrt{3}/2\) and \(\cos 30° = \sqrt{3}/2\).  Hence

\[\sin 60° + \cos 30° = \frac{\sqrt{3}}{2} + \frac{\sqrt{3}}{2} = \sqrt{3}.
\]

From the same triangle, \(\tan 30° = 1/\sqrt{3}\) and from the 45°–45°–90° triangle \(\tan 45° = 1\).  Therefore

\[2\tan 30° - \tan 45° = 2 \times \frac{1}{\sqrt{3}} - 1 = \frac{2}{\sqrt{3}} - 1.
\]

This exact value could be rationalised if required: \(\frac{2}{\sqrt{3}} - 1 = \frac{2\sqrt{3} - \sqrt{3}}{3} = \frac{\sqrt{3}}{3}\).  Always keep surd expressions exact in non‐calculator questions.

### Example 2.4 – Evaluating Trig Functions for General Angles

**Question.**  Compute \(\sin 135°\) and \(\cos 240°\) without a calculator.

**Solution.**  For \(135°\), the reference angle is \(\alpha = 180° - 135° = 45°\) and sine is positive in Quadrant II.  Therefore \(\sin 135° = \sin 45° = \sqrt{2}/2\).  For \(240°\), the reference angle is \(\alpha = 240° - 180° = 60°\) and cosine is negative in Quadrant III, so \(\cos 240° = -\cos 60° = -\tfrac{1}{2}\).

**Exam tip.**  Draw a quick sketch of the unit circle with angles marked at multiples of \(90°\) or \(60°\).  Use reference angles and the CAST rule to determine signs.

### Example 2.5 – Solving Basic Trig Equations

1. **Solve \(\sin x = 0.6\) for \(0° ≤ x < 360°\).**  The reference angle is \(\alpha = \sin^{-1}(0.6) ≈ 36.87°\).  Sine is positive in Quadrants I and II, so the solutions are \(x = 36.87°\) and \(x = 180° - 36.87° = 143.13°\).

2. **Solve \(\cos x = -0.3\) for \(0 ≤ x < 2\pi\).**  First find \(\alpha = \cos^{-1}(0.3) ≈ 1.2661\) rad (72.54°).  Cosine is negative in Quadrants II and III, so \(x = \pi - 1.2661 ≈ 1.8755\) rad and \(x = \pi + 1.2661 ≈ 4.4077\) rad.

3. **Solve \(\tan x = \sqrt{3}\) for \(0° ≤ x < 360°\).**  The reference angle is \(\alpha = \tan^{-1}(\sqrt{3}) = 60°\).  Tangent is positive in Quadrants I and III, so \(x = 60°\) and \(x = 60° + 180° = 240°\).

These examples show how to apply the general solution patterns.  Remember to consider whether the interval is in degrees or radians.  More challenging equations, including those with multiples of \(x\), appear in the practice section.

### Example 2.6 – Solving a Quadratic Trig Equation

**Question.**  Solve the equation \(5\sin^2 x + 3\sin x - 2 = 0\) for \(0° ≤ x < 360°\).

**Solution.**  Set \(y = \sin x\), giving the quadratic \(5y^2 + 3y - 2 = 0\).  Factorise or use the quadratic formula to obtain \((5y - 2)(y + 1) = 0\), so \(y = 2/5\) or \(y = -1\).

*Case 1: \(\sin x = 2/5\).*  The reference angle is \(\alpha = \sin^{-1}(0.4) ≈ 23.58°\).  Sine is positive in Quadrants I and II.  Therefore \(x = 23.58°\) or \(x = 180° - 23.58° = 156.42°\).

*Case 2: \(\sin x = -1\).*  The only solution in \(0° ≤ x < 360°\) is \(x = 270°\).

Hence the solutions are \(x = 23.58°, 156.42°, 270°\).

**Exam tip.**  Always check whether each solution is valid.  If a quadratic yields \(\sin x = 2\), discard it because \(|\sin x| ≤ 1\).  Write answers correct to the number of decimal places specified.

### Example 2.7 – Using the Sine Rule

**Question.**  In \(\triangle ABC\), \(A = 45°\), \(B = 85°\) and \(a = 8\,\text{cm}\).  Find side \(b\).

**Solution.**  First find the third angle: \(C = 180° - (45° + 85°) = 50°\).  Apply the sine rule using the known pair \((a,A)\) and unknown pair \((b,B)\):

\[\frac{b}{\sin B} = \frac{a}{\sin A} \quad \Rightarrow \quad b = \frac{\sin 85°}{\sin 45°} \times 8 \approx \frac{0.9962}{0.7071} \times 8 \approx 11.29\,\text{cm}.\]

**Exam tip.**  When using the sine rule to find a side, make sure the angles are in the numerator (cross multiply appropriately).  Use full calculator accuracy until the final step.

### Example 2.8 – Ambiguous Case of the Sine Rule

**Question.**  A triangle has sides \(a = 10\,\text{cm}\), \(b = 7\,\text{cm}\) and angle \(A = 30°\).  Find angle \(B\) and side \(c\).

**Solution.**  Use the sine rule to find \(B\):

\[\frac{\sin B}{b} = \frac{\sin A}{a} \quad \Rightarrow \quad \sin B = \frac{b\sin A}{a} = \frac{7\sin 30°}{10} = \frac{7 \times 0.5}{10} = 0.35.
\]

The reference angle is \(\alpha = \sin^{-1}(0.35) \approx 20.51°\).  Because \(\sin x\) is positive in Quadrants I and II, there are two possible angles: \(B_1 = 20.51°\) or \(B_2 = 180° - 20.51° = 159.49°\).  However, in a triangle the sum of angles must be \(180°\).  Since \(A = 30°\), the remaining angle \(C\) would be \(180° - (30° + B)\), which must be positive.  If \(B = 159.49°\), then \(C = -9.49°\), which is impossible.  Therefore the triangle only exists for \(B = 20.51°\).  Now find \(C = 180° - 30° - 20.51° = 129.49°\), and use the sine rule again to find \(c\):

\[\frac{c}{\sin C} = \frac{a}{\sin A} \quad \Rightarrow \quad c = \frac{a\sin C}{\sin A} = 10 \times \frac{\sin 129.49°}{0.5} \approx 10 \times \frac{0.7771}{0.5} \approx 15.54\,\text{cm}.\]

**Exam tip.**  When the sine of an angle is less than 1, always check for both an acute and an obtuse solution.  Ensure that the sum of angles remains \(180°\); discard impossible solutions.

### Example 2.9 – Using the Cosine Rule

**Question.**  In \(\triangle ABC\), \(a = 9\,\text{cm}\), \(b = 8\,\text{cm}\) and \(C = 60°\).  Find side \(c\) and angle \(A\).

**Solution.**  Use the cosine rule for sides:

\[c^2 = a^2 + b^2 - 2ab\cos C = 9^2 + 8^2 - 2\times 9\times 8 \times \cos 60° = 81 + 64 - 144 \times \tfrac{1}{2} = 145 - 72 = 73.
\]

Therefore \(c = \sqrt{73} \approx 8.54\,\text{cm}\).  To find angle \(A\), apply the cosine rule for angles:

\[\cos A = \frac{b^2 + c^2 - a^2}{2bc} = \frac{8^2 + 73 - 9^2}{2 \times 8 \times \sqrt{73}} = \frac{64 + 73 - 81}{16\sqrt{73}} = \frac{56}{16\sqrt{73}} = \frac{7}{2\sqrt{73}} \approx 0.4090.
\]

Thus \(A = \cos^{-1}(0.4090) \approx 65.86°\).  Alternatively, once all sides are known you can apply the sine rule to find \(A\) and avoid rounding error.

### Example 2.10 – Area of a Triangle Using Sine

**Question.**  Find the area of \(\triangle ABC\) if \(a = 9\,\text{cm}\), \(b = 7\,\text{cm}\) and \(C = 65°\).

**Solution.**  Use the area formula with \(a\) and \(b\) and included angle \(C\):

\[\text{Area} = \frac{1}{2}ab\sin C = \tfrac{1}{2} \times 9 \times 7 \times \sin 65° \approx \tfrac{63}{2} \times 0.9063 \approx 28.6\,\text{cm}^2.
\]

### Example 2.11 – Multi‐Step Triangle Problem

**Question.**  In \(\triangle ABC\), \(a = 5\,\text{cm}\), \(b = 7\,\text{cm}\) and \(C = 40°\).  Find side \(c\), angle \(A\) and the area of the triangle.

**Solution.**  **Step 1:**  Use the cosine rule to find \(c\):

\[c^2 = a^2 + b^2 - 2ab\cos C = 5^2 + 7^2 - 2 \times 5 \times 7 \times \cos 40° = 25 + 49 - 70 \times 0.7660 = 74 - 53.62 = 20.38.
\]

Thus \(c = \sqrt{20.38} \approx 4.52\,\text{cm}\).

**Step 2:**  Use the sine rule to find angle \(A\):

\[\frac{\sin A}{a} = \frac{\sin C}{c} \quad \Rightarrow \quad \sin A = \frac{a \sin C}{c} = \frac{5 \times \sin 40°}{4.52} \approx \frac{5 \times 0.6428}{4.52} \approx 0.7117.
\]

Therefore \(A = \sin^{-1}(0.7117) \approx 45.36°\).  The remaining angle is \(B = 180° - (40° + 45.36°) = 94.64°\).

**Step 3:**  Use the area formula:

\[\text{Area} = \tfrac{1}{2} ab \sin C = \tfrac{1}{2} \times 5 \times 7 \times \sin 40° \approx 17.5 \times 0.6428 \approx 11.25\,\text{cm}^2.
\]

**Exam tip.**  Clearly label each side and angle in your diagram.  Avoid rounding until the final step to maximise accuracy.  State final answers with appropriate units.

## 9. Common Mistakes and Exam Traps

1. **Mixing up side names.**  Always label sides opposite their corresponding angles (\(a\) opposite \(A\), etc.).  Errors in labelling often lead to incorrect use of the sine or cosine rule.
2. **Using the wrong rule.**  Use the sine rule when you have a matching pair of side and opposite angle; use the cosine rule with two sides and the included angle or three sides.  The decision tree [MMD‑001] helps decide.
3. **Forgetting the ambiguous case.**  When using the sine rule with two sides and a non‐included angle, check whether there are two possible solutions for the unknown angle and whether both are valid in the triangle.
4. **Incorrect calculator mode.**  Ensure your calculator is in degree or radian mode as appropriate.  Setting it incorrectly can produce wrong answers even if your algebra is correct.
5. **Ignoring domain restrictions.**  The ranges of inverse sine, cosine and tangent functions are restricted.  Use reference angles and CAST rather than relying solely on your calculator.
6. **Rounding prematurely.**  Keep intermediate values in your calculator’s memory or write them in exact or extended decimal form; rounding early can lead to inaccurate final answers.
7. **Dropping absolute values in quadratic equations.**  When solving \(\sin^2 x = k\), remember to consider both \(\sin x = \sqrt{k}\) and \(\sin x = -\sqrt{k}\), provided \(0 ≤ k ≤ 1\).
8. **Confusing radians and degrees.**  In some exam questions, angles are given in radians.  Be comfortable converting between degrees and radians and interpreting \(\pi\), \(\pi/6\), \(\pi/4\), etc.

## 10. Practice Questions

Try the following questions before looking at the solutions.  Work within the specified intervals and give your answers exact or to appropriate decimal accuracy.  Questions marked with * are more challenging.

### Set A – Basic Skills

1. A right‐angled triangle has hypotenuse 10 cm and one acute angle of \(35°\).  Find the other two sides.
2. Use complementary angles to simplify \(\sin 63° + \cos 27°\).
3. Without a calculator, evaluate \(\sin 30° \cdot \cos 60° + \tan 45°\).
4. Determine the sign of \(\sin 220°\), \(\cos 120°\) and \(\tan 300°\) using the CAST rule.
5. Convert \(150°\) and \(-\;30°\) to radians.  Then compute \(\sin 150°\) and \(\cos(-30°)\).
6. Sketch the graph of \(y = \sin x\) for \(0 ≤ x ≤ 2\pi\), labelling intercepts and maxima/minima.
7. Solve \(\tan x = -1\) for \(0 ≤ x < 360°\).
8. Solve \(\sin x = 0.8\) for \(0 ≤ x < 2\pi\)\.

### Set B – Trigonometric Equations

9. Solve \(\cos x = 0.25\) for \(0° ≤ x < 360°\).
10. Solve \(\sin 2x = \sqrt{3}/2\) for \(0° ≤ x < 360°\).
11. Solve \(4\cos^2 x - 3 = 0\) for \(0 ≤ x < 360°\).
12. Solve \(2\sin^2 x - \sin x - 1 = 0\) for \(0 ≤ x < 360°\).
13. Solve \(\tan^2 x - \tan x - 2 = 0\) for \(-180° ≤ x < 180°\).

### Set C – Sine and Cosine Rules

14. In \(\triangle ABC\), \(a = 6\,\text{cm}\), \(b = 9\,\text{cm}\) and \(C = 50°\).  Find \(c\) and \(A\).
15. In \(\triangle ABC\), \(A = 55°\), \(a = 5\,\text{cm}\) and \(b = 8\,\text{cm}\).  Find \(B\) and \(c\).  Is there an ambiguous case?
16. A triangle has sides 5 cm and 6 cm enclosing an angle of \(35°\).  Find the area of the triangle.
17. A triangle has sides \(a = 12\), \(b = 8\) and \(c = 7\).  Find the three angles of the triangle using any appropriate method.
18. A triangle has sides 10 cm and 7 cm and an included angle of \(120°\).  Find the third side and the area of the triangle.

### Set D – Multi‐Step Problems

19. In \(\triangle ABC\), \(a = 8\,\text{cm}\), \(b = 6\,\text{cm}\) and \(C = 30°\).  Find \(c\), \(A\), \(B\) and the area of the triangle.
20. A triangle has sides \(b = 7\,\text{cm}\), \(c = 5\,\text{cm}\) and \(A = 120°\).  Find the other sides, the other angles and the area.
21.* A quadrilateral \(ABCD\) has \(AB = 6\,\text{cm}\), \(BC = 9\,\text{cm}\) and \(CD = 10\,\text{cm}\) with \(\angle ABC = 45°\) and \(\angle BCD = 110°\).  The diagonal \(BD\) divides the quadrilateral into triangles \(ABD\) and \(BCD\).  Find the length of \(BD\) and hence the area of the quadrilateral.  *(Hint: use both the sine and cosine rules.)*

## 11. Worked Solutions

Solutions are provided for all practice questions.  Attempt each question before reading the solution.

### Solutions to Set A

1. \(\sin 35° = \frac{\text{opposite}}{10}\) and \(\cos 35° = \frac{\text{adjacent}}{10}\).  So the opposite side is \(10\sin 35° \approx 5.74\,\text{cm}\) and the adjacent side is \(10\cos 35° \approx 8.19\,\text{cm}\).

2. \(\sin 63° + \cos 27° = \sin 63° + \sin(90° - 27°) = \sin 63° + \sin 63° = 2\sin 63° \approx 1.7820\).

3. \(\sin 30° \cdot \cos 60° + \tan 45° = (1/2)(1/2) + 1 = \tfrac{1}{4} + 1 = 1.25\).

4. \(\sin 220°\) – reference angle \(40°\) in Quadrant III where sine is negative, so \(\sin 220° = -\sin 40° ≈ -0.6428\).  \(\cos 120°\) – reference angle \(60°\) in Quadrant II where cosine is negative, so \(\cos 120° = -1/2\).  \(\tan 300°\) – reference angle \(60°\) in Quadrant IV where tangent is negative, so \(\tan 300° = -\sqrt{3}\).

5. \(150° = 150\times\tfrac{\pi}{180} = \tfrac{5\pi}{6}\).  \(-30° = -30\times\tfrac{\pi}{180} = -\tfrac{\pi}{6}\).  Therefore \(\sin 150° = \sin(30°) = 1/2\) (Quadrant II, sine positive) and \(\cos(-30°) = \cos 30° = \sqrt{3}/2\) (cosine is even: \(\cos(-\theta) = \cos \theta\)).

6. The sine graph is drawn in [TIKZ‑004].  Intercepts occur at \(0\), \(\pi\), \(2\pi\); maxima at \(\pi/2\), minima at \(3\pi/2\).

7. \(\tan x = -1\) has reference angle \(45°\).  Tangent is negative in Quadrants II and IV, so \(x = 180° - 45° = 135°\) or \(x = 360° - 45° = 315°\).

8. \(\sin x = 0.8\) (or 4/5) has reference angle \(\alpha = \sin^{-1}(0.8) ≈ 53.13°\).  Sine is positive in Quadrants I and II, so \(x = 53.13°\) or \(x = 180° - 53.13° = 126.87°\).

### Solutions to Set B

9. \(\cos x = 0.25\) ⇒ \(\alpha = \cos^{-1}(0.25) ≈ 75.52°\).  Cosine is positive in Quadrants I and IV, so \(x = 75.52°\) or \(x = 360° - 75.52° = 284.48°\).

10. \(\sin 2x = \sqrt{3}/2\) ⇒ \(2x = 60°\) or \(2x = 120°\) (within \(0° ≤ 2x < 360°\) there are two solutions per period).  Therefore \(x = 30°, 60°\); also add \(180°\) to each because \(\sin(180° - \theta) = \sin \theta\): the full set of solutions in \(0° ≤ x < 360°\) is \(x = 30°, 60°, 210°, 240°\).

11. \(4\cos^2 x - 3 = 0\) ⇒ \(\cos^2 x = 3/4\) ⇒ \(\cos x = \pm \sqrt{3}/2\).  The reference angle is \(30°\).  Cosine is positive in Quadrants I and IV and negative in Quadrants II and III.  Thus \(x = 30°, 150°, 210°, 330°\).

12. \(2\sin^2 x - \sin x - 1 = 0\) ⇒ let \(y = \sin x\).  Then \(2y^2 - y - 1 = 0\) ⇒ \((2y + 1)(y - 1) = 0\) ⇒ \(y = -1/2\) or \(y = 1\).  *Case 1:* \(\sin x = -1/2\) ⇒ reference angle \(30°\).  Sine is negative in Quadrants III and IV: \(x = 180° + 30° = 210°\) or \(x = 360° - 30° = 330°\).  *Case 2:* \(\sin x = 1\) ⇒ \(x = 90°\).  Therefore \(x = 90°, 210°, 330°\).

13. \(\tan^2 x - \tan x - 2 = 0\) ⇒ let \(y = \tan x\).  Then \(y^2 - y - 2 = 0\) ⇒ \((y - 2)(y + 1) = 0\) ⇒ \(y = 2\) or \(y = -1\).  *Case 1:* \(\tan x = 2\) ⇒ reference angle \(\alpha = \tan^{-1}(2) ≈ 63.43°\).  Tangent is positive in Quadrants I and III, so solutions in \(-180° ≤ x < 180°\) are \(x = 63.43°\) and \(x = 63.43° - 180° = -116.57°\).  *Case 2:* \(\tan x = -1\) ⇒ reference angle \(45°\).  Tangent is negative in Quadrants II and IV, so \(x = 180° - 45° = 135°\) and \(x = -45°\).  Therefore the full solution set is \(x = 63.43°, -116.57°, 135°, -45°\).

### Solutions to Set C

14. Apply the cosine rule: \(c^2 = a^2 + b^2 - 2ab \cos C = 6^2 + 9^2 - 2 \times 6 \times 9 \times \cos 50°\).  Compute \(c ≈ 7.93\) cm.  Then use the sine rule to find \(A\): \(\frac{\sin A}{a} = \frac{\sin C}{c}\) ⇒ \(\sin A = \frac{6 \sin 50°}{7.93}\) ⇒ \(A ≈ 37.06°\).  Finally \(B = 180° - (50° + 37.06°) ≈ 92.94°\).

15. \(\frac{\sin B}{b} = \frac{\sin A}{a}\) ⇒ \(\sin B = \frac{8 \sin 55°}{5}\).  The right‐hand side is \(\frac{8 \times 0.8192}{5} = 1.3107\).  Since \(\sin B ≤ 1\), there is **no solution** – the triangle cannot be formed with the given lengths and angle.  This is a case where the sine rule reveals that the data is inconsistent; the so‐called ambiguous case yields no valid triangle.  Therefore there is no value for \(B\) or \(c\).

16. Area \(= \tfrac{1}{2}ab\sin C = \tfrac{1}{2} \times 5 \times 6 \times \sin 35° ≈ 15 \times 0.5736 ≈ 8.60\,\text{cm}^2\).

17. Use the cosine rule to find one angle, say \(A\): \(\cos A = \frac{b^2 + c^2 - a^2}{2bc} = \frac{8^2 + 7^2 - 12^2}{2 \times 8 \times 7} = \frac{64 + 49 - 144}{112} = \frac{-31}{112} ≈ -0.2768\) ⇒ \(A ≈ 106.07°\).  Then use the sine rule to find \(B\) or \(C\).  For example, \(\frac{\sin B}{b} = \frac{\sin A}{a}\) ⇒ \(\sin B = \frac{8 \sin 106.07°}{12} ≈ \frac{8 \times 0.9643}{12} = 0.643\), so \(B ≈ 40.00°\) (Quadrant I for sine).  Then \(C = 180° - (A + B) ≈ 33.93°\).

18. Use the cosine rule: \(c^2 = 10^2 + 7^2 - 2 \times 10 \times 7 \cos 120° = 100 + 49 - 140 \times (-0.5) = 149 + 70 = 219\).  So \(c = \sqrt{219} ≈ 14.80\,\text{cm}\).  The area is \(\tfrac{1}{2}ab\sin C = 35 \times \sin 120° = 35 \times \tfrac{\sqrt{3}}{2} ≈ 30.31\,\text{cm}^2\).

### Solutions to Set D

19. Proceed as in Example 2.11.  **Step 1:** \(c^2 = 8^2 + 6^2 - 2 \times 8 \times 6 \cos 30° = 64 + 36 - 96 \times 0.8660 = 100 - 83.14 = 16.86\).  Hence \(c ≈ 4.11\,\text{cm}\).  **Step 2:** \(\frac{\sin A}{8} = \frac{\sin 30°}{4.11}\) ⇒ \(\sin A ≈ \frac{8 \times 0.5}{4.11} = 0.9730\), so \(A ≈ 76.93°\) (only one valid solution).  **Step 3:** \(B = 180° - (30° + 76.93°) = 73.07°\).  **Step 4:** Area \(= \tfrac{1}{2} \times 8 \times 6 \times \sin 30° = 24\,\text{cm}^2\).

20. Use the cosine rule to find side \(a\): \(a^2 = b^2 + c^2 - 2bc \cos A = 7^2 + 5^2 - 2 \times 7 \times 5 \cos 120° = 49 + 25 - 70 \times (-0.5) = 74 + 35 = 109\).  So \(a ≈ 10.44\,\text{cm}\).  Then use the sine rule: \(\frac{\sin B}{b} = \frac{\sin A}{a}\) ⇒ \(\sin B = \frac{7 \sin 120°}{10.44} ≈ \frac{7 \times 0.8660}{10.44} ≈ 0.5807\), giving \(B ≈ 35.48°\) and \(C = 180° - (120° + 35.48°) = 24.52°\).  Area \(= \tfrac{1}{2} bc \sin A = 0.5 \times 7 \times 5 \times \sin 120° ≈ 15.16\,\text{cm}^2\).

21.* **Solution outline.**  Label \(\triangle ABC\) first.  In \(\triangle BCD\), apply the cosine rule to find \(BD\): \(BD^2 = 9^2 + 10^2 - 2 \times 9 \times 10 \cos 110° ≈ 81 + 100 - 180 \times (-0.3420) = 181 + 61.56 = 242.56\).  Thus \(BD ≈ 15.57\,\text{cm}\).  Then use the sine rule in \(\triangle ABD\) to find \(\angle BAD\) or the necessary quantities, and apply the area formula in both triangles to find the total area.  Ensure that you account for both interior angles at \(B\) and sum the two triangle areas.

## 12. Exam Technique Notes

* **Show all steps.**  Marks are awarded not just for the final answer but for the method.  Write down the relevant ratio or rule before substituting numbers.
* **Sketch diagrams.**  Even a simple sketch helps you identify sides, angles and which rule to apply.  Label diagrams consistently (e.g., side \(a\) opposite angle \(A\)).
* **State angle intervals.**  When solving trigonometric equations, always specify the interval (in degrees or radians) and include all solutions within that interval.  Do not assume a single solution.
* **Use exact values when possible.**  In non‐calculator questions, use standard surd values and identities.  Rationalise denominators and simplify surds.
* **Check ambiguous cases.**  The sine rule may lead to two possible angles.  Always check the viability of each (sum of angles must be \(180°\) and sides must be positive).
* **Be consistent with units.**  Use centimetres (cm) or metres (m) as appropriate.  For angles, clearly state whether values are given in degrees or radians.
* **Technology vs. algebra.**  Graphing tools or the widgets provided can help you visualise functions and verify solutions, but in exams you must demonstrate algebraic methods.  Use technology for learning and practice.

## 13. Syllabus Gap Check

The notes have been cross‐checked against the CCEA specification【845314039634229†L520-L546】 and elaboration document【466591847869913†L334-L371】.  The following checklist summarises coverage:

* **Definitions and graphs of sine, cosine and tangent for all angles:** covered fully in §§6.1–6.4.  Additional emphasis on radian measure could be developed further in class.
* **Exact values of standard angles:** covered in §6.2 and Example 2.3.
* **Identities \(\tan x = \sin x/\cos x\) and \(\sin^2 x + \cos^2 x = 1\):** covered in §§6.5–6.8.
* **Solving simple trigonometric equations, including quadratic equations and multiples:** covered in §§6.6–6.8, Examples 2.5–2.6 and practice questions.
* **Sine rule (ambiguous case) and cosine rule:** covered in §§6.9–6.10, Examples 2.7–2.9 and practice questions.
* **Area of a triangle \(\frac{1}{2}ab\sin C\):** covered in §6.11 and Example 2.10.
* **Multi‐step problems:** covered in §6.12, Example 2.11 and practice questions.
* **Off‐spec content removed:** the PDF mentions identities \(1 + \tan^2 x = \sec^2 x\) and \(1 + \cot^2 x = \csc^2 x\), along with secant and cosecant notation.  These are not required by the CCEA AS1 specification【466591847869913†L334-L371】.  They have therefore been omitted from the core notes.  Students interested in these extensions can explore them as optional enrichment.

## 14. Recommended Enhancements Not in the PDF

The following AI‐proposed assets have been added to enhance independent learning.  Each asset is labelled clearly and does not duplicate PDF content.

| Asset ID | Type | Why added | Spec point supported | Essential/Optional |
|---|---|---|---|---|
| **MMD‑001** | Mermaid decision tree | Helps students decide whether to use the sine rule, cosine rule or area formula based on known sides and angles | Use of sine and cosine rules【466591847869913†L334-L342】 | Essential |
| **MMD‑002** | Mermaid decision tree | Summarises the steps for solving basic trigonometric equations (\(\sin x = k\), etc.), including reference angles and quadrant signs | Solving trigonometric equations【466591847869913†L368-L371】 | Essential |
| **MMD‑003** | Mermaid concept map | Links the Pythagorean identity, the definition of tangent and complementary angle relationships to help students see connections between identities | Understanding identities and relationships【466591847869913†L334-L365】 | Optional |
| **WIDGET‑001** | HTML/JS widget | Allows exploration of transformations of sine and cosine functions by adjusting amplitude, frequency, phase and vertical shift | Graphs, symmetries and periodicity【466591847869913†L348-L356】 | Essential |
| **WIDGET‑002** | HTML/JS widget | Enables interactive solving of basic trigonometric equations with adjustable function and value \(k\); reinforces reference angle and CAST methods | Solving trigonometric equations【466591847869913†L368-L371】 | Essential |
| **WIDGET‑003** | HTML/JS widget | Interactive triangle solver using sine and cosine rules and area formula; demonstrates multi‐step problem solving | Use of sine and cosine rules and area formula【466591847869913†L334-L347】 | Essential |

## 15. Supplementary Sources Used

No additional online sources were required for the core content.  All material is based on the CCEA specification【845314039634229†L520-L546】, elaboration document【466591847869913†L334-L371】 and the lesson PDF.  General definitions of the unit circle and reference angles are standard knowledge, reproduced here for educational completeness.

## 16. Off‐Spec or Extension Content Found but Excluded

The lesson PDF includes a brief mention of identities \(1 + \tan^2 x = \sec^2 x\) and \(1 + \cot^2 x = \csc^2 x\), along with the reciprocal trigonometric functions secant (\(\sec\)), cosecant (\(\csc\)) and cotangent (\(\cot\)).  These functions and identities are not required by the CCEA AS1 specification【466591847869913†L334-L371】.  They have therefore been omitted from the core notes.  Students interested in these extensions can explore them as optional enrichment.

## 17. Final Student Checklist

Use this checklist to review your understanding:

* [ ] Can you correctly label the sides of a right‐angled triangle relative to a given angle and recall the SOH CAH TOA ratios?
* [ ] Can you convert between degrees and radians and use complementary angles to simplify expressions?
* [ ] Have you memorised the exact values of \(\sin\), \(\cos\) and \(\tan\) for 30°, 45° and 60°?
* [ ] Can you sketch and interpret the graphs of \(\sin x\), \(\cos x\) and \(\tan x\) over one period, identifying key points and symmetries?
* [ ] Do you understand and use the identities \(\tan x = \sin x/\cos x\) and \(\sin^2 x + \cos^2 x = 1\)?
* [ ] Can you solve equations of the form \(\sin x = k\), \(\cos x = k\) and \(\tan x = k\) within a specified interval using reference angles and the CAST rule?
* [ ] Can you solve quadratic trigonometric equations by substitution and check for extraneous solutions?
* [ ] Do you know when to use the sine rule versus the cosine rule, and can you handle the ambiguous case of the sine rule?
* [ ] Can you calculate the area of a triangle using \(\tfrac{1}{2}ab\sin C\)?
* [ ] Are you confident tackling multi‐step problems involving combinations of trigonometric rules and identities?

If you can tick all of the above, you are well prepared for trigonometry questions on the CCEA AS1 Pure Mathematics exam.

## 6. Diagram Assets

## 6.1 Mermaid Assets

### Source File Metadata

```yaml
filename: "AS1_trigonometry_mermaid.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/04. Geometry & Trigonometry/AS1_trigonometry_mermaid.md"
lines: 87
bytes_utf8: 5299
sha256: "c6e8ee6c5922b0eebb4cc8ffbd07aeaa3fcd1ef5b3880f83e92d3bf77f9ebd91"
```

### Preserved Source Content: AS1_trigonometry_mermaid.md

# Mermaid Diagrams for AS1 trigonometry

## MMD-001: Decision tree for choosing sine rule, cosine rule or area formula
Source: AI‑proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: MMD‑001 | Source: AI‑proposed teaching enhancement | Insert from AS1_trigonometry_mermaid.md | Purpose: decision tree for choosing between sine rule, cosine rule and area formula]`  
Purpose: This flowchart helps students decide which trigonometric formula to use when solving a non right‑angled triangle.  It prompts them to check whether the triangle is right‑angled, what information is given (sides and angles) and whether the question asks for an area.  It emphasises that the sine rule applies when a known angle is opposite a known side (including ambiguous SSA cases), the cosine rule applies for SAS and SSS situations, and the area formula applies when two sides and the included angle are known.

```mermaid
graph TD
    Start[[Start: determine known values]] --> Right{Is the triangle right‑angled?}
    Right -->|Yes| RightTrig[Use SOH CAH TOA or Pythagoras]
    Right -->|No| Info{Known information?}
    Info -->|Two sides and included angle (SAS) or all three sides (SSS)| Cosine[Use Cosine Rule]
    Info -->|Two angles and one side (AAS/ASA) or two sides and a non‑included angle (SSA)| Sine[Use Sine Rule]
    Sine --> Ambig{Is it the SSA ambiguous case?}
    Ambig -->|Yes| AmbigCase[Consider 0, 1 or 2 solutions]
    Ambig -->|No| SolveSine[Solve normally]
    Cosine --> AreaQ{Need the area?}
    AreaQ -->|Yes| Area[Use area formula \(\tfrac{1}{2}ab\sin C\)]
    AreaQ -->|No| Done1[Compute unknowns]
    AmbigCase --> Done2[Compute possible solutions]
    SolveSine --> Done2
    RightTrig --> Done2
    Area --> Done1
    Done1 --> End1[Finish]
    Done2 --> End2[Finish]
```

---

## MMD-002: Decision tree for solving basic trigonometric equations
Source: AI‑proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: MMD‑002 | Source: AI‑proposed teaching enhancement | Insert from AS1_trigonometry_mermaid.md | Purpose: decision tree for solving trigonometric equations]`  
Purpose: This flowchart outlines a systematic procedure for solving equations of the form \(\sin x = k\), \(\cos x = k\) and \(\tan x = k\) within a specified interval.  It guides students to determine the reference angle, decide which quadrants contain the solutions based on the sign of \(k\), and then list all solutions in the interval.

```mermaid
graph TD
    StartEq[[Start: solve \(f(x)=k\)]] --> Type{Which function?}
    Type -->|\(\sin x = k\)| Sin
    Type -->|\(\cos x = k\)| Cos
    Type -->|\(\tan x = k\)| Tan
    %% Sine branch
    Sin --> SinRA[Compute reference angle \(\alpha = \arcsin(|k|)\)]
    SinRA --> SinSign{Is \(k\) positive?}
    SinSign -->|Yes| SinPos[Solutions: \(x = \alpha\) or \(x = 180^\circ - \alpha\) (Quadrants I & II)]
    SinSign -->|No| SinNeg[Solutions: \(x = 180^\circ + \alpha\) or \(x = 360^\circ - \alpha\) (Quadrants III & IV)]
    %% Cosine branch
    Cos --> CosRA[Compute reference angle \(\alpha = \arccos(|k|)\)]
    CosRA --> CosSign{Is \(k\) positive?}
    CosSign -->|Yes| CosPos[Solutions: \(x = \alpha\) or \(x = 360^\circ - \alpha\) (Quadrants I & IV)]
    CosSign -->|No| CosNeg[Solutions: \(x = 180^\circ - \alpha\) or \(x = 180^\circ + \alpha\) (Quadrants II & III)]
    %% Tangent branch
    Tan --> TanRA[Compute reference angle \(\alpha = \arctan(|k|)\)]
    TanRA --> TanSign{Is \(k\) positive?}
    TanSign -->|Yes| TanPos[Solutions: \(x = \alpha + 180^\circ n\) (Quadrants I & III)]
    TanSign -->|No| TanNeg[Solutions: \(x = 180^\circ - \alpha + 180^\circ n\) (Quadrants II & IV)]
    %% Final note
    TanPos --> EndEq[Check the specified interval and list all solutions]
    TanNeg --> EndEq
    CosPos --> EndEq
    CosNeg --> EndEq
    SinPos --> EndEq
    SinNeg --> EndEq
```

---

## MMD-003: Concept map of trigonometry topics
Source: AI‑proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: MMD‑003 | Source: AI‑proposed teaching enhancement | Insert from AS1_trigonometry_mermaid.md | Purpose: concept map connecting trigonometry topics]`  
Purpose: This concept map visually links the main subtopics of trigonometry covered in the AS1 course.  It shows how right‑angled trigonometry leads to the unit circle and exact values, how the unit circle informs graphs and identities, how identities feed into equation solving, and how the sine and cosine rules and area formula connect to more advanced problems.

```mermaid
graph LR
    RightTrig[Right‑angled trig \n(SOH CAH TOA)] --> UnitCircle[Unit circle & CAST]
    RightTrig --> ExactVals[Exact values \n& special triangles]
    UnitCircle --> Graphs[Graphs of \(\sin\), \(\cos\), \(\tan\)]
    Graphs --> Identities[Pythagorean & simple identities]
    Identities --> Equations[Solving trig equations]
    Equations --> MultiStep[Multi‑step problems]
    SineRule[Sine rule & \nambiguous case] --> MultiStep
    CosineRule[Cosine rule] --> MultiStep
    AreaFormula[Area formula \(\tfrac{1}{2}ab\sin C\)] --> MultiStep
    ExactVals --> Graphs
    UnitCircle --> Identities
```

## 6.2 SVG Assets

### Source File Metadata

```yaml
filename: "AS1_trigonometry_svg.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/04. Geometry & Trigonometry/AS1_trigonometry_svg.md"
lines: 5
bytes_utf8: 440
sha256: "131e1a6bae586bdf4e9f733b007ac2ef0d72dac3f6ae4720c5f2c0c0da7064e2"
```

### Preserved Source Content: AS1_trigonometry_svg.md

# SVG Diagrams for AS1 trigonometry

## Note
The lesson on trigonometry did not require any static SVG diagrams.  All necessary visualisations were provided as TikZ diagrams or Mermaid flowcharts.  Therefore, no standalone SVG code is included in this file.  Should a future lesson require a scalable vector graphic for a particular concept (such as a poster summarising exact values), it can be added here following the prescribed format.

## 6.3 TikZ Assets

### Source File Metadata

```yaml
filename: "AS1_trigonometry_tikz.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/04. Geometry & Trigonometry/AS1_trigonometry_tikz.md"
lines: 243
bytes_utf8: 10284
sha256: "362981cb00c49e7d9aa3cc0f62fdaaa88698b64b57d2dcdee93f2e1e36ff77e2"
```

### Preserved Source Content: AS1_trigonometry_tikz.md

# TikZ Diagrams for AS1 trigonometry

This file contains code for the TikZ diagrams used in the trigonometry lesson.  Each diagram is labelled with an identifier that matches the placeholder in the main lesson.  To compile these diagrams in a LaTeX document, ensure you include `\usepackage{tikz}` (and `\usepackage{pgfplots}` where indicated).  The diagrams have been simplified for clarity and scaled appropriately.

## TIKZ-001: Right‑angled triangle definitions
Source: TRIGONOMETRY.pdf p. 1  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: TIKZ‑001 | Source: lesson PDF p.1 | Insert from AS1_trigonometry_tikz.md | Purpose: illustrate the SOH CAH TOA definitions]`  
Purpose: This diagram labels a right‑angled triangle with the hypotenuse, adjacent and opposite sides relative to angle \(\theta\), and marks \(\theta\) at the base.  It reinforces the definitions \(\sin\theta = \frac{\text{opposite}}{\text{hypotenuse}}\), \(\cos\theta = \frac{\text{adjacent}}{\text{hypotenuse}}\) and \(\tan\theta = \frac{\text{opposite}}{\text{adjacent}}\).

```latex
\begin{tikzpicture}[scale=0.8]
% vertices of the right‑angled triangle
\coordinate (A) at (0,0);
\coordinate (C) at (4,0);
\coordinate (B) at (4,3);
% draw triangle
\draw[thick] (A)--(C)--(B)--cycle;
% right angle symbol at C
\draw (C)+(0.3,0) -- ++(0,0.3) -- ++(-0.3,0);
% side labels
\node at (2,0.3) {adjacent};
\node[rotate=90] at (4.3,1.5) {opposite};
\node[rotate= -35] at (2,1.7) {hypotenuse};
% vertex labels
\node[below left] at (A) {$A$};
\node[below right] at (C) {$C$};
\node[above right] at (B) {$B$};
% angle theta at A
\draw[->,>=latex] (A)+(0.8,0) arc (0:36.87:0.8);
\node at (0.6,0.2) {$\theta$};
\end{tikzpicture}
```

---

## TIKZ-002: Special triangles for exact values
Source: TRIGONOMETRY.pdf p. 3  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: TIKZ‑002 | Source: lesson PDF p.3 | Insert from AS1_trigonometry_tikz.md | Purpose: illustrate the 30°–60°–90° and 45°–45°–90° triangles]`  
Purpose: Two right‑angled triangles are drawn side by side.  The first is a 30°–60°–90° triangle with sides in the ratio \(1:\sqrt{3}:2\).  The second is a 45°–45°–90° triangle with sides in the ratio \(1:1:\sqrt{2}\).  The diagrams show the angles and side lengths so students can read off exact values of the trigonometric functions.

```latex
\begin{tikzpicture}[scale=1]
% 30°–60°–90° triangle
\begin{scope}
  \coordinate (B) at (0,0);
  \coordinate (A) at (1.732,0); % \sqrt{3} \approx 1.732
  \coordinate (C) at (0,1);
  \draw[thick] (B)--(A)--(C)--cycle;
  % right angle at B
  \draw (B)+(0.15,0) -- ++(0,0.15) -- ++(-0.15,0);
  % side labels
  \node[below] at (0.866,-0.15) {$\sqrt{3}$};
  \node[left] at (-0.15,0.5) {$1$};
  \node at (0.9,0.65) {$2$};
  % angle labels
  \draw (A)+(-0.35,0) arc (180:150:0.35);
  \node at (1.45,0.18) {$30^{\circ}$};
  \draw (C)+(0,-0.35) arc (-90:-30:0.35);
  \node at (0.22,0.78) {$60^{\circ}$};
\end{scope}
% 45°–45°–90° triangle shifted to the right
\begin{scope}[xshift=4cm]
  \coordinate (B2) at (0,0);
  \coordinate (A2) at (1,0);
  \coordinate (C2) at (0,1);
  \draw[thick] (B2)--(A2)--(C2)--cycle;
  % right angle at B2
  \draw (B2)+(0.15,0) -- ++(0,0.15) -- ++(-0.15,0);
  % side labels
  \node[below] at (0.5,-0.15) {$1$};
  \node[left] at (-0.15,0.5) {$1$};
  \node at (0.7,0.65) {$\sqrt{2}$};
  % angle labels
  \draw (A2)+(-0.35,0) arc (180:135:0.35);
  \node at (0.8,0.18) {$45^{\circ}$};
  \draw (C2)+(0,-0.35) arc (-90:-135:0.35);
  \node at (0.22,0.78) {$45^{\circ}$};
\end{scope}
\end{tikzpicture}
```

---

## TIKZ-003: Unit circle and CAST diagram
Source: TRIGONOMETRY.pdf p. 4  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: TIKZ‑003 | Source: lesson PDF p.4 | Insert from AS1_trigonometry_tikz.md | Purpose: illustrate the unit circle, CAST rule and reference angle]`  
Purpose: This diagram shows the unit circle with axes, quadrants labelled according to the CAST rule, a representative angle \(\theta\) in the second quadrant and its reference angle \(\alpha\), and the point \((\cos\theta,\sin\theta)\) on the circle.

```latex
\begin{tikzpicture}[scale=2]
% axes and unit circle
\draw[->] (-1.2,0) -- (1.2,0) node[right] {$x$};
\draw[->] (0,-1.2) -- (0,1.2) node[above] {$y$};
\draw (0,0) circle (1);
% quadrant labels for CAST (reading clockwise from quadrant IV)
\node at (0.5,0.5) {A};   % Quadrant I: All positive
\node at (-0.5,0.5) {S};  % Quadrant II: Sine positive
\node at (-0.5,-0.5) {T}; % Quadrant III: Tangent positive
\node at (0.5,-0.5) {C};   % Quadrant IV: Cosine positive
% draw angle theta in Quadrant II
\draw[->,thick,blue] (0,0) -- ({cos(130)}, {sin(130)});
% arc for theta
\draw[thick] (0.2,0) arc (0:130:0.2);
\node at ({0.36*cos(65)},{0.36*sin(65)}) {$\theta$};
% reference angle alpha
\coordinate (P) at ({cos(130)},{sin(130)});
\coordinate (Q) at ({cos(130)},0);
\draw[dashed] (P) -- (Q);
\draw[thick] ({cos(130)},0.12) arc (90:130:0.12);
\node at ({cos(130)+0.16*cos(110)}, {0.05}) {$\alpha$};
% point on the circle
\fill[blue] (P) circle (0.02);
\node[above left] at (P) {$(\cos\theta,\sin\theta)$};
\end{tikzpicture}
```

---

## TIKZ-004: Graphs of sine, cosine and tangent
Source: TRIGONOMETRY.pdf p. 5  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: TIKZ‑004 | Source: lesson PDF p.5 | Insert from AS1_trigonometry_tikz.md | Purpose: plot the graphs of \(\sin x\), \(\cos x\) and \(\tan x\) from 0 to 2\(\pi\)]`  
Purpose: These plots show the shapes, key points and periodicity of the sine, cosine and tangent functions over one full cycle \((0 \le x \le 2\pi)\).  The first diagram overlays the sine (solid blue) and cosine (dashed red) curves on the same axes; the second diagram shows the tangent curve with its vertical asymptotes.

```latex
% Graph of sine and cosine (requires \usepackage{tikz})
\begin{tikzpicture}[scale=0.9]
  % axes
  \draw[->] (-0.3,0) -- (6.7,0) node[right] {$x$};
  \draw[->] (0,-1.3) -- (0,1.3) node[above] {$y$};
  % x-axis ticks and labels
  \foreach \x/\label in {0/0,1.5708/{\tfrac{\pi}{2}},3.1416/{\pi},4.7124/{\tfrac{3\pi}{2}},6.2832/{2\pi}} {
    \draw (\x,0.08) -- (\x,-0.08) node[below] {$\label$};
  }
  % y-axis ticks
  \foreach \y in {-1,1} {
    \draw (0.08,\y) -- (-0.08,\y) node[left] {\y};
  }
  % sine curve
  \draw[blue,thick,domain=0:6.2832,samples=200] plot(\x,{sin(\x r)});
  % cosine curve
  \draw[red,dashed,thick,domain=0:6.2832,samples=200] plot(\x,{cos(\x r)});
  % labels
  \node[blue] at (6.5,0.8) {$y=\sin x$};
  \node[red] at (6.5,0.2) {$y=\cos x$};
\end{tikzpicture}

\vspace{1cm}

% Graph of tangent with asymptotes
\begin{tikzpicture}[scale=0.9]
  % axes
  \draw[->] (-0.3,0) -- (6.7,0) node[right] {$x$};
  \draw[->] (0,-3.3) -- (0,3.3) node[above] {$y$};
  % x-axis ticks and labels
  \foreach \x/\label in {0/0,1.5708/{\tfrac{\pi}{2}},3.1416/{\pi},4.7124/{\tfrac{3\pi}{2}},6.2832/{2\pi}} {
    \draw (\x,0.1) -- (\x,-0.1) node[below] {$\label$};
  }
  % vertical asymptotes at \pi/2 and 3\pi/2
  \foreach \x in {1.5708,4.7124} {
    \draw[dashed] (\x,-3.2) -- (\x,3.2);
  }
  % tangent curve segments
  \draw[green!70!black,thick,domain=0:1.55,samples=200] plot(\x,{tan(\x r)});
  \draw[green!70!black,thick,domain=1.61:4.71,samples=200] plot(\x,{tan(\x r)});
  \draw[green!70!black,thick,domain=4.75:6.2832,samples=200] plot(\x,{tan(\x r)});
  % label
  \node[green!70!black] at (5.8,2.5) {$y=\tan x$};
\end{tikzpicture}
```

---

## TIKZ-005: Generic triangle for the sine rule
Source: TRIGONOMETRY.pdf p. 9  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: TIKZ‑005 | Source: lesson PDF p.9 | Insert from AS1_trigonometry_tikz.md | Purpose: illustrate the sine rule in a general triangle]`  
Purpose: A scalene triangle is labelled with vertices \(A\), \(B\) and \(C\).  The sides opposite are labelled \(a\), \(b\) and \(c\) respectively.  This diagram accompanies the statement of the sine rule \(\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}\).

```latex
\begin{tikzpicture}[scale=1]
\coordinate (A) at (0,0);
\coordinate (B) at (4,0);
\coordinate (C) at (1.5,2.4);
\draw[thick] (A)--(B)--(C)--cycle;
% side labels (opposite vertices)
\node[below] at (2,-0.25) {$c$};        % side AB
\node[left] at (0.4,1.2) {$b$};         % side AC
\node[right] at (2.8,1.2) {$a$};        % side BC
% vertex labels
\node[below left] at (A) {$A$};
\node[below right] at (B) {$B$};
\node[above] at (C) {$C$};
\end{tikzpicture}
```

---

## TIKZ-006: Triangle highlighting the cosine rule
Source: TRIGONOMETRY.pdf p. 10  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: TIKZ‑006 | Source: lesson PDF p.10 | Insert from AS1_trigonometry_tikz.md | Purpose: illustrate the cosine rule with the included angle]`  
Purpose: This diagram is similar to the generic triangle but emphasises the included angle \(A\) between sides \(b\) and \(c\), as used in the cosine rule \(a^2 = b^2 + c^2 - 2bc\cos A\).  A small arc marks angle \(A\).

```latex
\begin{tikzpicture}[scale=1]
\coordinate (A) at (0,0);
\coordinate (B) at (4,0);
\coordinate (C) at (1.5,2.2);
\draw[thick] (A)--(B)--(C)--cycle;
% side labels
\node[below] at (2,-0.25) {$c$};
\node[left] at (0.5,1.1) {$b$};
\node[right] at (2.7,1.1) {$a$};
% included angle A
\draw (A)+(0.5,0) arc(0:atan2(2.2,1.5):0.5);
\node at (0.6,0.2) {$A$};
\end{tikzpicture}
```

---

## TIKZ-007: Triangle for the area formula
Source: TRIGONOMETRY.pdf p. 11  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: TIKZ‑007 | Source: lesson PDF p.11 | Insert from AS1_trigonometry_tikz.md | Purpose: illustrate the area formula \(\tfrac{1}{2}ab\sin C\)]`  
Purpose: This diagram shows a triangle with sides \(a\), \(b\) and base \(c\), with included angle \(C\) and a dashed altitude dropping from \(C\) to the base.  It illustrates why the area of the triangle is \(\frac{1}{2}ab\sin C\).

```latex
\begin{tikzpicture}[scale=1]
\coordinate (A) at (0,0);
\coordinate (B) at (4,0);
\coordinate (C) at (1,2);
\draw[thick] (A)--(B)--(C)--cycle;
% side labels
\node[below] at (2,-0.25) {$c$};
\node[left] at (0.3,1) {$b$};
\node[right] at (2.6,1) {$a$};
% included angle C
\draw (C)+(-0.35,-0.25) arc(-150:-90:0.5);
\node at (1.3,1.4) {$C$};
% altitude
\draw[dashed] (C) -- (1,0);
\node[right] at (1,1) {$h$};
\end{tikzpicture}
```

## 7. Interactive Widgets

## 7.1 Widget Assets

### Source File Metadata

```yaml
filename: "AS1_trigonometry_widgets.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/04. Geometry & Trigonometry/AS1_trigonometry_widgets.md"
lines: 452
bytes_utf8: 20861
sha256: "d30f774d94ee0d1cc527bca8a0ff186944471c4b9c760e081daf9090581e3630"
```

### Preserved Source Content: AS1_trigonometry_widgets.md

# Interactive Widgets for AS1 trigonometry

This file contains self‑contained interactive activities written in HTML, CSS and JavaScript.  Each widget is designed to deepen understanding of trigonometric concepts by allowing students to change values and immediately observe the effect.  To run a widget, copy the code into a `.html` file and open it in a modern web browser.  The widgets do not rely on external libraries.

## WIDGET-001: Trig graph transformation explorer
Source: AI‑proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[INTERACTIVE PLACEHOLDER: WIDGET‑001 | Source: AI‑proposed teaching enhancement, not present in lesson PDF | Insert from AS1_trigonometry_widgets.md | Purpose: slider exploration showing how amplitude and phase shift affect sine and cosine graphs]`  
Purpose: This widget lets you explore how changing the **amplitude** and **phase shift** transforms the graphs of \(y = \sin x\) and \(y = \cos x\).  You can choose the function (sine or cosine), adjust the amplitude from 0.5 to 2, and adjust the phase shift from −180° to 180°.  The graph updates in real time so you can observe how the peaks and troughs move and how the vertical stretch changes.

### Learning Goal
Understand how amplitude and horizontal translation affect trigonometric graphs.  Recognise that the amplitude scales the maximum and minimum values, while the phase shift translates the graph left or right.  Appreciate that these transformations do not change the period.

### Controls
- **Function**: select `sin` or `cos` to choose which base function to explore.  
- **Amplitude**: slider from 0.5 to 2 (step 0.1).  
- **Phase shift (°)**: slider from −180° to 180° (step 5°).  The phase shift is applied inside the function as \(f(x + \phi)\).

### Live Outputs
- **Graph**: the plot of \(y = A f(x + \phi)\) on the interval \(0\le x\le 2\pi\).  
- **Equation display**: a text line showing the current function in mathematical form with the chosen amplitude \(A\) and phase shift \(\phi\).

### What to Notice
- Increasing the amplitude stretches the graph vertically so that its maximum becomes \(A\) and its minimum becomes \(-A\).  
- A positive phase shift moves the graph to the **left** (because the function is evaluated at \(x + \phi\)), while a negative shift moves it to the **right**.  
- The period remains \(2\pi\) regardless of the amplitude or phase shift.

### Exam Connection
Exam questions often require you to sketch or recognise transformations of sine and cosine functions.  Understanding how the amplitude and phase shift change the shape of the graph helps you to match equations to graphs and vice versa.  While graphs in exams are usually static, this widget develops intuition that you can use to check your sketches.

### How to Run
Copy the code below into a file named `trig_graph_explorer.html` and open it in a browser.  Use the sliders and dropdown menu to manipulate the graph.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Trig Graph Transformation Explorer</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 20px; }
    .controls { margin-bottom: 10px; }
    label { margin-right: 15px; }
    canvas { border: 1px solid #888; }
  </style>
</head>
<body>
  <h3>Trig Graph Transformation Explorer</h3>
  <div class="controls">
    <label>Function:
      <select id="func">
        <option value="sin">sin</option>
        <option value="cos">cos</option>
      </select>
    </label>
    <label>Amplitude:
      <input type="range" id="amp" min="0.5" max="2" value="1" step="0.1">
      <span id="ampVal">1.0</span>
    </label>
    <label>Phase shift (°):
      <input type="range" id="phase" min="-180" max="180" value="0" step="5">
      <span id="phaseVal">0</span>
    </label>
  </div>
  <div id="equation" style="margin-bottom:10px;"></div>
  <canvas id="graph" width="600" height="300"></canvas>
  <script>
    const funcSelect = document.getElementById('func');
    const ampInput = document.getElementById('amp');
    const phaseInput = document.getElementById('phase');
    const ampVal = document.getElementById('ampVal');
    const phaseVal = document.getElementById('phaseVal');
    const equationDiv = document.getElementById('equation');
    const canvas = document.getElementById('graph');
    const ctx = canvas.getContext('2d');
    // Draw axes and graph based on current settings
    function drawGraph() {
      const A = parseFloat(ampInput.value);
      const phiDeg = parseFloat(phaseInput.value);
      const phi = phiDeg * Math.PI / 180;
      const func = funcSelect.value;
      ampVal.textContent = A.toFixed(1);
      phaseVal.textContent = phiDeg.toFixed(0);
      // Update equation display
      const fStr = func === 'sin' ? ' \sin' : ' \cos';
      equationDiv.innerHTML = `Current function: y = ${A.toFixed(1)} ${fStr}(x + ${phiDeg.toFixed(0)}°)`;
      // Clear canvas
      ctx.clearRect(0,0,canvas.width,canvas.height);
      // Draw axes
      const midY = canvas.height/2;
      ctx.strokeStyle = '#000';
      ctx.beginPath();
      ctx.moveTo(0, midY);
      ctx.lineTo(canvas.width, midY);
      ctx.moveTo(40, 0);
      ctx.lineTo(40, canvas.height);
      ctx.stroke();
      // X-axis tick positions for 0, π/2, π, 3π/2, 2π
      const ticks = [0, Math.PI/2, Math.PI, 3*Math.PI/2, 2*Math.PI];
      ticks.forEach(t => {
        const x = 40 + (t / (2*Math.PI)) * (canvas.width - 40);
        ctx.beginPath();
        ctx.moveTo(x, midY - 5);
        ctx.lineTo(x, midY + 5);
        ctx.stroke();
        ctx.fillText(String.fromCharCode(0x3C0) === 'π' ? '' : '', 0, 0); // placeholder
      });
      // Draw function
      ctx.strokeStyle = func === 'sin' ? '#0066cc' : '#cc0000';
      ctx.lineWidth = 2;
      ctx.beginPath();
      const samples = 500;
      for (let i = 0; i <= samples; i++) {
        const xPix = i / samples * (canvas.width - 40);
        const x = (xPix / (canvas.width - 40)) * 2 * Math.PI; // x in radians
        const yVal = A * (func === 'sin' ? Math.sin(x + phi) : Math.cos(x + phi));
        const yPix = midY - yVal * 100;
        const drawX = 40 + xPix;
        if (i === 0) ctx.moveTo(drawX, yPix);
        else ctx.lineTo(drawX, yPix);
      }
      ctx.stroke();
      // X-axis labels
      ctx.fillStyle = '#000';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      const labels = ['0','π/2','π','3π/2','2π'];
      ticks.forEach((t, index) => {
        const x = 40 + (t / (2*Math.PI)) * (canvas.width - 40);
        ctx.fillText(labels[index], x, midY + 6);
      });
      // Y-axis labels
      ctx.textAlign = 'right';
      ctx.textBaseline = 'middle';
      ctx.fillText('1', 35, midY - 100);
      ctx.fillText('0', 35, midY);
      ctx.fillText('-1', 35, midY + 100);
    }
    // Attach event listeners
    ampInput.addEventListener('input', drawGraph);
    phaseInput.addEventListener('input', drawGraph);
    funcSelect.addEventListener('change', drawGraph);
    // initial draw
    drawGraph();
  </script>
</body>
</html>
```

---

## WIDGET-002: Trigonometric equation solver
Source: AI‑proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[INTERACTIVE PLACEHOLDER: WIDGET‑002 | Source: AI‑proposed teaching enhancement, not present in lesson PDF | Insert from AS1_trigonometry_widgets.md | Purpose: interactive solver for basic and quadratic trigonometric equations]`  
Purpose: This tool solves equations of the form \(\sin x = k\), \(\cos x = k\), \(\tan x = k\) and quadratic equations in \(\sin x\), \(\cos x\) or \(\tan x\) within a specified interval.  It computes all solutions in the interval and rejects extraneous solutions.

### Learning Goal
Practise the procedure for solving basic and quadratic trigonometric equations, including finding reference angles, determining the correct quadrants and handling extraneous solutions.  See how the number of solutions changes with the value of \(k\) or the coefficients of the quadratic.

### Controls
- **Equation type**: choose `Basic (f(x) = k)` or `Quadratic (a f^2(x) + b f(x) + c = 0)`.  
- **Function**: select `sin`, `cos` or `tan`.  
- **Value k** (for basic equations): input between −1 and 1 for sine/cosine or a wider range for tangent.  
- **Coefficients a, b, c** (for quadratic equations): real numbers defining the quadratic in \(f(x)\).  
- **Domain start** and **domain end** (°): define the interval (in degrees) to search for solutions (default 0° to 360°).

### Live Outputs
- A list of solutions in degrees, sorted in ascending order, or a message indicating that no solutions exist.

### What to Notice
- For basic equations, the number of solutions depends on the sign of \(k\) and the function type.  
- Quadratic equations may yield two, one or no valid values for \(f(x)\).  Solutions where \(|\sin x|>1\) or \(|\cos x|>1\) are invalid and discarded.  
- Tangent equations have period 180°, so solutions occur at regular intervals.

### Exam Connection
This solver mirrors the procedure expected in exam questions but automates the algebra and trigonometric calculations.  Use it to check your work and to explore how the number and location of solutions change with different coefficients or values of \(k\).  Remember that in an exam you must show your working and justify each step.

### How to Run
Copy the code below into a file named `trig_equation_solver.html` and open it in a browser.  Enter your equation parameters and click the “Solve” button.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Trigonometric Equation Solver</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 20px; }
    .row { margin-bottom: 8px; }
    label { display: inline-block; width: 120px; }
    input[type=number] { width: 80px; }
    select { width: 120px; }
    button { margin-top: 10px; }
    #results { margin-top: 15px; white-space: pre-line; }
  </style>
</head>
<body>
  <h3>Trigonometric Equation Solver</h3>
  <div class="row">
    <label for="eqtype">Equation type:</label>
    <select id="eqtype">
      <option value="basic">Basic (f(x) = k)</option>
      <option value="quad">Quadratic (a f² + b f + c = 0)</option>
    </select>
  </div>
  <div class="row">
    <label for="func">Function f(x):</label>
    <select id="func">
      <option value="sin">sin</option>
      <option value="cos">cos</option>
      <option value="tan">tan</option>
    </select>
  </div>
  <div id="basicParams">
    <div class="row">
      <label for="kval">k value:</label>
      <input type="number" id="kval" value="0.5" step="0.01">
    </div>
  </div>
  <div id="quadParams" style="display:none;">
    <div class="row"><label for="aCoef">a :</label><input type="number" id="aCoef" value="1"></div>
    <div class="row"><label for="bCoef">b :</label><input type="number" id="bCoef" value="0"></div>
    <div class="row"><label for="cCoef">c :</label><input type="number" id="cCoef" value="-0.5"></div>
  </div>
  <div class="row">
    <label for="start">Domain start (°):</label>
    <input type="number" id="start" value="0">
    <label for="end">Domain end (°):</label>
    <input type="number" id="end" value="360">
  </div>
  <button id="solveBtn">Solve</button>
  <div id="results"></div>
  <script>
    const eqtype = document.getElementById('eqtype');
    const funcSel = document.getElementById('func');
    const kInput = document.getElementById('kval');
    const aInput = document.getElementById('aCoef');
    const bInput = document.getElementById('bCoef');
    const cInput = document.getElementById('cCoef');
    const startInput = document.getElementById('start');
    const endInput = document.getElementById('end');
    const basicParams = document.getElementById('basicParams');
    const quadParams = document.getElementById('quadParams');
    const resultsDiv = document.getElementById('results');
    eqtype.addEventListener('change', () => {
      if (eqtype.value === 'basic') {
        basicParams.style.display = '';
        quadParams.style.display = 'none';
      } else {
        basicParams.style.display = 'none';
        quadParams.style.display = '';
      }
    });
    document.getElementById('solveBtn').addEventListener('click', solveEq);
    function solveEq() {
      const func = funcSel.value;
      const domainStartDeg = parseFloat(startInput.value);
      const domainEndDeg = parseFloat(endInput.value);
      const domainStart = domainStartDeg * Math.PI / 180;
      const domainEnd = domainEndDeg * Math.PI / 180;
      let solutions = [];
      if (eqtype.value === 'basic') {
        const k = parseFloat(kInput.value);
        solutions = solveBasic(func, k, domainStart, domainEnd);
      } else {
        const a = parseFloat(aInput.value);
        const b = parseFloat(bInput.value);
        const c = parseFloat(cInput.value);
        solutions = solveQuadratic(func, a, b, c, domainStart, domainEnd);
      }
      if (solutions.length === 0) {
        resultsDiv.textContent = 'No solutions in the given interval.';
      } else {
        const solDeg = solutions.map(x => (x * 180 / Math.PI)).sort((p,q) => p - q);
        resultsDiv.textContent = 'Solutions (degrees):\n' + solDeg.map(v => v.toFixed(2)).join(', ');
      }
    }
    function solveBasic(func, k, start, end) {
      const sol = [];
      if (func === 'sin' || func === 'cos') {
        if (Math.abs(k) > 1) return sol; // no solutions
      }
      if (func === 'sin') {
        const alpha = Math.asin(Math.abs(k));
        const baseSolutions = k >= 0 ? [alpha, Math.PI - alpha] : [Math.PI + alpha, 2*Math.PI - alpha];
        for (let n = -2; n <= 2; n++) {
          baseSolutions.forEach(s => {
            const x = s + 2*Math.PI*n;
            if (x >= start - 1e-10 && x <= end + 1e-10) sol.push(x);
          });
        }
      } else if (func === 'cos') {
        const alpha = Math.acos(Math.abs(k));
        const baseSolutions = k >= 0 ? [alpha, 2*Math.PI - alpha] : [Math.PI - alpha, Math.PI + alpha];
        for (let n = -2; n <= 2; n++) {
          baseSolutions.forEach(s => {
            const x = s + 2*Math.PI*n;
            if (x >= start - 1e-10 && x <= end + 1e-10) sol.push(x);
          });
        }
      } else if (func === 'tan') {
        const alpha = Math.atan(k);
        for (let n = -5; n <= 5; n++) {
          const x = alpha + Math.PI*n;
          if (x >= start - 1e-10 && x <= end + 1e-10) sol.push(x);
        }
      }
      return sol;
    }
    function solveQuadratic(func, a, b, c, start, end) {
      const sol = [];
      // Solve ay^2 + by + c = 0 for y = f(x)
      if (Math.abs(a) < 1e-12) {
        // reduce to linear
        if (Math.abs(b) < 1e-12) return sol;
        const y = -c / b;
        return solveBasic(func, y, start, end);
      }
      const disc = b*b - 4*a*c;
      if (disc < 0) return sol;
      const y1 = (-b + Math.sqrt(disc)) / (2*a);
      const y2 = (-b - Math.sqrt(disc)) / (2*a);
      [y1, y2].forEach(yVal => {
        if (func === 'sin' || func === 'cos') {
          if (Math.abs(yVal) > 1 + 1e-12) return;
        }
        sol.push(...solveBasic(func, yVal, start, end));
      });
      return sol;
    }
  </script>
</body>
</html>
```

---

## WIDGET-003: Ambiguous case triangle solver (sine rule)
Source: AI‑proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[INTERACTIVE PLACEHOLDER: WIDGET‑003 | Source: AI‑proposed teaching enhancement, not present in lesson PDF | Insert from AS1_trigonometry_widgets.md | Purpose: interactive ambiguous case solver for the sine rule]`  
Purpose: When two sides and a non‑included angle (SSA) are given, the sine rule may produce 0, 1 or 2 possible triangles.  This widget allows you to enter side lengths \(a\) and \(b\) and angle \(A\) (in degrees), then computes the possible values of angle \(B\), angle \(C\) and the remaining side \(c\).  It tells you whether the ambiguous case yields no solution, one solution or two solutions.

### Learning Goal
Understand the ambiguous SSA case of the sine rule.  Recognise when two different triangles satisfy the given information and when there is no possible triangle.  Practise applying the sine rule and checking that the angles sum to 180°.

### Controls
- **Side a**: length of side opposite angle \(A\).  
- **Side b**: length of side opposite angle \(B\).  
- **Angle A (°)**: the known angle in degrees.  Must be between 0° and 180°.

### Live Outputs
- A table summarising each valid solution: angle \(B\), angle \(C\) and side \(c\).  If there are no solutions, an explanatory message is shown.

### What to Notice
- If \(b \sin A / a > 1\), there is **no solution**.  
- If \(b \sin A / a = 1\), there is exactly **one** right‑angled triangle.  
- If \(0 < b \sin A / a < 1\), there may be **two** valid triangles: one acute and one obtuse at \(B\).  
- Not all potential second solutions are valid; the sum of angles must be less than 180°.

### Exam Connection
The ambiguous case is a common exam trap.  Students must test for two possible angles and then check which are valid.  This widget offers immediate feedback on whether one or two solutions exist and encourages students to show both when appropriate.

### How to Run
Copy the code below into a file named `ambiguous_case_solver.html` and open it in a browser.  Enter the values of \(a\), \(b\) and \(A\) and click “Solve” to see the possible triangles.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Ambiguous Case Triangle Solver</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 20px; }
    label { display: inline-block; width: 120px; }
    input[type=number] { width: 80px; }
    button { margin-top: 10px; }
    table { margin-top: 10px; border-collapse: collapse; }
    th, td { border: 1px solid #ccc; padding: 4px 8px; text-align: right; }
  </style>
</head>
<body>
  <h3>Ambiguous Case Triangle Solver (SSA)</h3>
  <div>
    <label for="sidea">Side a:</label>
    <input type="number" id="sidea" value="7" min="0" step="0.1"><br>
    <label for="sideb">Side b:</label>
    <input type="number" id="sideb" value="5" min="0" step="0.1"><br>
    <label for="angleA">Angle A (°):</label>
    <input type="number" id="angleA" value="30" min="0" max="180" step="0.1"><br>
    <button id="solve">Solve</button>
  </div>
  <div id="output"></div>
  <script>
    document.getElementById('solve').addEventListener('click', function() {
      const a = parseFloat(document.getElementById('sidea').value);
      const b = parseFloat(document.getElementById('sideb').value);
      const Adeg = parseFloat(document.getElementById('angleA').value);
      const output = document.getElementById('output');
      if (a <= 0 || b <= 0 || Adeg <= 0 || Adeg >= 180) {
        output.textContent = 'Please enter positive sides and an angle between 0° and 180°.';
        return;
      }
      const A = Adeg * Math.PI / 180;
      const ratio = b * Math.sin(A) / a;
      output.innerHTML = '';
      if (ratio > 1 + 1e-12 || ratio < -1 - 1e-12) {
        output.textContent = 'No solution: b sin(A) / a > 1.';
        return;
      }
      // Compute potential angle B values
      let solutions = [];
      if (Math.abs(ratio - 1) < 1e-12) {
        // one right‑angled triangle
        const Bdeg = 90;
        const Cdeg = 180 - Adeg - Bdeg;
        const c = a * Math.sin(Cdeg * Math.PI / 180) / Math.sin(A);
        solutions.push({B: Bdeg, C: Cdeg, c: c});
      } else {
        const B1 = Math.asin(ratio);
        const B1deg = B1 * 180 / Math.PI;
        const B2deg = 180 - B1deg;
        // First possible triangle
        const C1deg = 180 - Adeg - B1deg;
        if (C1deg > 0) {
          const c1 = a * Math.sin(C1deg * Math.PI / 180) / Math.sin(A);
          solutions.push({B: B1deg, C: C1deg, c: c1});
        }
        // Second possible triangle (if different)
        if (B2deg > 0 && Math.abs(B2deg - B1deg) > 1e-6) {
          const C2deg = 180 - Adeg - B2deg;
          if (C2deg > 0) {
            const c2 = a * Math.sin(C2deg * Math.PI / 180) / Math.sin(A);
            solutions.push({B: B2deg, C: C2deg, c: c2});
          }
        }
      }
      if (solutions.length === 0) {
        output.textContent = 'No valid triangle can be formed.';
        return;
      }
      // Create a table of results
      let html = '<table><tr><th>Solution</th><th>\u03B2 (°)</th><th>\u03B3 (°)</th><th>c</th></tr>';
      solutions.forEach((sol, i) => {
        html += `<tr><td>${i+1}</td><td>${sol.B.toFixed(2)}</td><td>${sol.C.toFixed(2)}</td><td>${sol.c.toFixed(2)}</td></tr>`;
      });
      html += '</table>';
      output.innerHTML = html;
    });
  </script>
</body>
</html>
```

## 8. Agent Retrieval Notes

Use Section 5 for teaching sequence and explanation. Use Sections 6 and 7 as asset banks. When an asset is marked as suggested, AI-proposed, generated, or uncertain, preserve that provenance in downstream responses.
