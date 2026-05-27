# AS1 Transformations of Trigonometric Graphs Lesson Agent Source

## 0. AI-Agent Usage Instructions

This file is a source for teaching, revision, explanation, diagnostics and lesson retrieval. Core lesson content is in Section 5. Diagram assets are in Section 6. Widgets are in Section 7. Use the lesson content before generated enhancement notes. Do not claim AI-proposed assets came from the original PDF. Preserve syllabus gap notes and uncertainty notes. Use UK/CCEA mathematical vocabulary.

## 1. Pack Metadata

```yaml
pack_type: lesson
unit_code: AS1
unit_name: CCEA AS1 Pure Mathematics
topic_slug: "03_transformations"
topic_title: "Transformations of Trigonometric Graphs"
source_folder: "/Users/evanward/Documents/AS Portal - New /AS1 Files/03 Transformations"
output_file: "/Users/evanward/Documents/AS Portal - New /AS1 Files/00_AGENT_SOURCE_PACKS/03_transformations/AS1_transformations_agent_source.md"
created_from_files:
  lesson: "AS1_transformations_lesson.md"
  questions: null
  solutions: null
  mermaid: "AS1_transformations_mermaid.md"
  svg: "AS1_transformations_svg.md"
  tikz: "AS1_transformations_tikz.md"
  widgets: "AS1_transformations_widgets.md"
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
| lesson | AS1_transformations_lesson.md | 306 | 35391 | `5766ea943156cc58c233243df4513a4f0e33822b2d3cd3784bcf8464a1f2f4b9` |
| mermaid | AS1_transformations_mermaid.md | 38 | 1956 | `135b3dee94af3c53ec10f66e3fb7703c1217a40b599fa0c092c9ef9fde9ea972` |
| svg | AS1_transformations_svg.md | 44 | 2582 | `30600cadaa6d96fd184b16072c2cb189243b7a30262179bd4557754cfb9a883f` |
| tikz | AS1_transformations_tikz.md | 154 | 5038 | `dcb8396d27cff6655272c3529e8109e8e2b93c64124f25f8c77026974e5f68cc` |
| widgets | AS1_transformations_widgets.md | 253 | 11201 | `516a831fa48533297d1a5fec5b73a3c271b75ccbf27b13a6dcc35667b30bdbc2` |

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
filename: "AS1_transformations_lesson.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/03 Transformations/AS1_transformations_lesson.md"
lines: 306
bytes_utf8: 35391
sha256: "5766ea943156cc58c233243df4513a4f0e33822b2d3cd3784bcf8464a1f2f4b9"
```

### Preserved Source Content: AS1_transformations_lesson.md

# Transformations of Trigonometric Graphs

**Unit:** CCEA AS1 Pure Mathematics  
**Source lesson PDF:** TRANSFORMATIONS.pdf  
**Date generated:** 22 May 2026

This lesson pack is designed for independent study by students who have completed GCSE Higher Tier Mathematics.  It follows the CCEA specification and elaboration guidance for AS1 Pure Mathematics.  You should use it alongside the specification and the elaboration document, and you can explore the interactive widgets to build intuition.

## 2. Specification Alignment

The table below links the learning outcomes for trigonometry from the CCEA specification and elaboration document to where each outcome is covered in these notes.  Only items relevant to graph transformations are included.

| CCEA spec point | Elaboration guidance | Covered in this lesson? | Where it appears in the notes | Gap or action needed | Suggested visual/widget support |
|---|---|---|---|---|---|
| Demonstrate understanding of and use the sine, cosine and tangent functions, including their graphs, symmetries and periodicity【757415927963031†L349-L352】 | Students should be able to sketch graphs of \(\sin x\), \(\cos x\) and \(\tan x\) and recognise their symmetries and periodicity.  This includes simple transformations of \(y = \sin x\), \(y = \cos x\) and \(y = \tan x\)【757415927963031†L349-L355】. | Yes | Parent graphs and key definitions in Section 6.  Detailed examples in Section 7. | None | TikZ‑001 for parent graphs; SVG‑001 summary card; Widget‑001 for exploration. |
| Identify amplitude, period, phase shift and vertical shift for functions of the form \(y = a\,f(bx + c) + d\) | The elaboration emphasises linking parameter values with graph features: amplitude = \(|a|\); period = 360°/\(|b|\) for \(\sin\) and \(\cos\), 180°/\(|b|\) for \(\tan\); phase shift = \(-c/b\); vertical shift = \(d\)【757415927963031†L349-L355】. | Yes | Key definitions in Section 6; core theory and worked examples in Section 7. | None | SVG‑001 quick‑reference summary; Widget‑001 displays these values dynamically. |
| Perform simple transformations: vertical stretches/compressions and reflections; horizontal stretches/compressions; phase shifts; vertical shifts | Multiply the output by \(a\) to stretch/compress vertically (amplitude \(|a|\)).  Multiply the input by \(b\) to compress horizontally or divide by \(b\) to stretch horizontally (period changes).  Add \(c\) inside the bracket \(f(x + c)\) to shift the graph left; subtract \(c\) to shift right【752484414195469†L84-L92】【551165776395826†L95-L110】【722163253120748†L24-L39】. | Yes | Section 7: Vertical and horizontal transformations; Section 10: Worked examples. | None | Mermaid MMD‑001 concept map; TikZ diagrams TIKZ‑002 to TIKZ‑005; Widget‑001. |
| Use coordinate mapping or a systematic method to sketch a transformed trigonometric graph | The lesson PDF introduces a coordinate‑mapping technique: for \(y = a\,f(bx + c) + d\), a point \((x_{\text{old}},y_{\text{old}})\) on the parent graph maps to \(x_{\text{new}} = \tfrac{x_{\text{old}} - c}{b}\), \(y_{\text{new}} = a\,y_{\text{old}} + d\).  This method is especially useful when combining several transformations. | Yes | Section 7 (Combining transformations) describes the method; Section 9 provides an interactive calculator. | None | Mermaid MMD‑002 flowchart; Widget‑002 coordinate mapping calculator. |
| Avoid common mistakes and understand exam technique | Students should interpret the sign of the phase shift correctly (\(f(x + k)\) shifts left) and factor out the coefficient \(b\) before interpreting \(c\)【722163253120748†L24-L39】.  Amplitude is always positive and a negative \(a\) causes reflection in the \(x\)-axis【551165776395826†L95-L110】. | Yes | Section 11 (Common mistakes) and Section 14 (Exam technique notes). | None | Worked examples; summary of errors. |

## 3. Learning Objectives

By the end of this lesson, you should be able to:

- Recall the shapes, intercepts and key features of the parent functions \(y = \sin x\), \(y = \cos x\) and \(y = \tan x\) over one period.
- Write trigonometric functions in the general form \(y = a\,f(bx + c) + d\) and state the amplitude, period, phase shift and vertical shift.
- Apply vertical transformations: stretches/compressions by a factor \(|a|\), reflections in the \(x\)-axis when \(a<0\) and vertical shifts by \(d\).
- Apply horizontal transformations: stretches/compressions by factors related to \(b\), reflections in the \(y\)-axis when \(b<0\) and phase shifts determined by \(c\) (remember \(f(x + k)\) shifts left and \(f(x - k)\) shifts right【722163253120748†L24-L39】).
- Combine multiple transformations systematically by factoring out \(b\) and using the coordinate mapping \(x_{\text{new}} = \tfrac{x_{\text{old}} - c}{b}\), \(y_{\text{new}} = a\,y_{\text{old}} + d\).
- Sketch transformed graphs accurately and label intercepts, maximum/minimum points and asymptotes where appropriate.
- Avoid common errors when interpreting sign conventions and period changes.

## 4. Compact Prerequisite Recap

Before tackling trigonometric graph transformations you should be comfortable with the following GCSE‑level ideas:

- **Sine, cosine and tangent ratios.**  Recall that in a right‑angled triangle \(\sin \theta\), \(\cos \theta\) and \(\tan \theta\) are defined using the opposite, adjacent and hypotenuse sides.  On the unit circle, \(\sin \theta\) is the \(y\)‑coordinate and \(\cos \theta\) is the \(x\)‑coordinate.
- **Periodic nature.**  The sine and cosine functions have period 360° (they repeat every full turn) and the tangent function has period 180°.
- **Graphs in degrees.**  Throughout this lesson angles are measured in degrees.  Remember that 360° = one full revolution and 180° = half a revolution.  Each degree can be converted to radians by multiplying by \(\pi/180\) if required.
- **Basic transformations of functions.**  For any function \(f(x)\): multiplying by \(a\) scales vertically; adding \(d\) shifts vertically; replacing \(x\) with \(bx\) scales horizontally by a factor \(1/|b|\); replacing \(x\) with \(x + c\) shifts horizontally (to the left if \(c>0\)).

## 5. Big Picture Explanation

Trigonometric functions model countless phenomena, from tidal motions to alternating currents.  In AS Mathematics you are expected not only to recall the basic shapes of \(\sin x\), \(\cos x\) and \(\tan x\) but also to manipulate these graphs through scaling and shifting.  Questions in the AS1 examination often ask you to sketch graphs of functions such as \(y = 2\sin(3x - 45°) + 1\) or to identify the amplitude, period and phase shift from an equation.  A solid grasp of graph transformations allows you to answer these questions confidently, to cross‑check algebraic solutions and to interpret applied problems such as oscillations and waves.

## 6. Key Definitions and Notation

- **Parent functions**: The untransformed trigonometric functions are
  \[ y = \sin x, \quad y = \cos x, \quad y = \tan x. \]
  For \(\sin x\) and \(\cos x\) the period is 360°, amplitude 1 and the range is \([-1,1]\).  For \(\tan x\) the period is 180° and there are vertical asymptotes at odd multiples of 90°.
- **Amplitude**: The height of the peaks measured from the midline.  In \(y = a\,\sin x\) or \(y = a\,\cos x\) the amplitude is \(|a|\).  A negative \(a\) reflects the graph in the \(x\)‑axis.【752484414195469†L84-L92】
- **Period**: The length of one complete cycle.  For \(y = \sin x\) and \(y = \cos x\) the period is 360°.  For \(y = \tan x\) the period is 180°.  In \(y = a\,\sin(bx)\) or \(y = a\,\cos(bx)\) the period becomes \(360°/|b|\).  In \(y = a\,\tan(bx)\) the period is \(180°/|b|\)【757415927963031†L349-L355】.
- **Phase shift** (horizontal translation): The amount the graph is shifted left or right.  For \(y = f(x + c)\), the graph shifts left by \(c\).  For \(y = f(x - k)\), it shifts right by \(k\)【722163253120748†L24-L39】.  When a coefficient \(b\) multiplies \(x\), factor it out to find the actual shift: \(y = f(bx + c) = f\bigl(b(x + \tfrac{c}{b})\bigr)\), so the shift is \(-\tfrac{c}{b}\).
- **Vertical shift**: Adding \(d\) to a function moves it up by \(d\) if \(d>0\) or down by \(|d|\) if \(d<0\).  The midline of the graph becomes \(y = d\).
- **General transformation**: A transformed trigonometric function can be written as
  \[ y = a\,f(bx + c) + d, \]
  where \(f\) is \(\sin\), \(\cos\) or \(\tan\).  The graph has amplitude \(|a|\), period \(360°/|b|\) (or 180°/|b| for \(\tan\)), phase shift \(-\tfrac{c}{b}\) and vertical shift \(d\).

## 7. Core Theory

### 7.1 Parent graphs

The parent graphs of \(\sin x\) and \(\cos x\) oscillate between −1 and 1 with a period of 360°.  \(\tan x\) has a period of 180° and vertical asymptotes at odd multiples of 90°.  You should memorise the key points at 0°, 90°, 180°, 270° and 360° for \(\sin\) and \(\cos\).  The vertical asymptotes and zeros of \(\tan x\) occur at 90°, 0°, 180° and 270°.

[VISUAL PLACEHOLDER: TIKZ-001 | Source: lesson PDF p.1 | Insert from AS1_transformations_tikz.md | Purpose: graphs of \(y=\sin x\) and \(y=\cos x\)]

### 7.2 General form of a transformed trigonometric function

Any single transformation of a trigonometric graph can be described using parameters \(a\), \(b\), \(c\) and \(d\) in
\[ y = a\,f(bx + c) + d. \]

- **Amplitude** is \(|a|\).  If \(a<0\) the graph is reflected in the \(x\)‑axis.  A larger |a| makes peaks taller while a fraction compresses vertically【752484414195469†L84-L92】.
- **Period** is \(360°/|b|\) for \(\sin\) and \(\cos\), or \(180°/|b|\) for \(\tan\).  If \(|b|>1\) the graph is horizontally compressed; if \(0<|b|<1\) it is stretched horizontally【551165776395826†L95-L110】.
- **Phase shift** is \(-\tfrac{c}{b}\).  Writing \(bx + c = b\bigl(x + \tfrac{c}{b}\bigr)\) shows that a positive \(c\) shifts the graph left by \(\tfrac{c}{b}\) and a negative \(c\) shifts it right【722163253120748†L24-L39】.
- **Vertical shift** is \(d\); the midline becomes \(y = d\).

These parameters can occur simultaneously; you can sketch the graph by applying the transformations in any order or by using coordinate mapping.

[VISUAL PLACEHOLDER: MMD-001 | Source: AI-proposed teaching enhancement | Insert from AS1_transformations_mermaid.md | Purpose: concept map summarising the effect of each parameter]

[VISUAL PLACEHOLDER: SVG-001 | Source: AI-proposed teaching enhancement | Insert from AS1_transformations_svg.md | Purpose: quick reference summary for amplitude and period]

### 7.3 Vertical transformations

Multiplying the entire function by \(a\) multiplies all \(y\)-values by \(a\).  If \(|a|>1\) the graph stretches away from the midline; if \(0<|a|<1\) it compresses towards the midline.  A negative \(a\) reflects the graph in the \(x\)-axis.【752484414195469†L84-L92】  Adding or subtracting \(d\) moves the graph up or down by \(d\), changing the midline but not the amplitude.

**Example:**  For \(y = 4\sin x\), the amplitude is 4.  The period remains 360° (because \(b=1\)), the graph oscillates between −4 and 4 and is otherwise identical in shape to \(\sin x\).  In \(y = 2\cos x - 1\) the amplitude is 2 and the graph is shifted down by 1.  The midline is \(y = -1\) and the peaks occur at \(y = 1\); troughs at \(y = -3\).

[VISUAL PLACEHOLDER: TIKZ-002 | Source: lesson PDF p.3 | Insert from AS1_transformations_tikz.md | Purpose: compare \(\sin x\) with \(4\sin x\)]

### 7.4 Horizontal transformations

Horizontal transformations modify the input to the function.  Replacing \(x\) with \(bx\) compresses or stretches the graph horizontally and alters the period.  The new period for \(\sin\) or \(\cos\) is \(360°/|b|\) and for \(\tan\) it is \(180°/|b|\).  If \(|b|>1\) the graph compresses (more cycles fit in the same interval); if \(0<|b|<1\) the graph stretches.【551165776395826†L95-L110】  A negative \(b\) reflects the graph in the \(y\)-axis.

**Example:**  In \(y = \sin 2x\) the argument is multiplied by 2 so the period is halved to 180°.  The graph completes two cycles between 0° and 360°.  In \(y = \sin \tfrac{x}{2}\) the argument is divided by 2 (equivalent to multiplying by 0.5), so the period doubles to 720°.  Only half of a cycle occurs between 0° and 180°.

[VISUAL PLACEHOLDER: TIKZ-003 | Source: lesson PDF p.4 | Insert from AS1_transformations_tikz.md | Purpose: horizontal compression example]

[VISUAL PLACEHOLDER: TIKZ-004 | Source: lesson PDF p.4 | Insert from AS1_transformations_tikz.md | Purpose: horizontal stretch example]

### 7.5 Phase shifts and reflections

Adding or subtracting a constant inside the bracket \(bx + c\) shifts the graph horizontally.  The transformation \(y = f(x + c)\) moves the graph left by \(c\); \(y = f(x - k)\) moves it right by \(k\).  Always factor out \(b\) before reading off the shift: \(y = f(bx + c) = f\bigl(b(x + \tfrac{c}{b})\bigr)\).  When \(b<0\) the graph is reflected in the \(y\)-axis and the phase shift is also affected.  Combining a horizontal shift with a vertical reflection can produce identities, for example \(\cos(x + 90°) = -\sin x\).

[VISUAL PLACEHOLDER: TIKZ-005 | Source: lesson PDF p.5 | Insert from AS1_transformations_tikz.md | Purpose: phase shift and reflection example]

### 7.6 Combining transformations

When several parameters act at once you can apply the transformations in any order because they operate independently.  A systematic approach is:

1. **Factor out \(b\)** from \(bx + c\) to find the phase shift: write \(bx + c = b\bigl(x + \tfrac{c}{b}\bigr)\).  The shift is \(-\tfrac{c}{b}\) and the period is \(360°/|b|\) (or \(180°/|b|\) for \(\tan\)).
2. **Identify amplitude \(|a|\)** and the sign of \(a\) (reflection in the \(x\)-axis if negative).
3. **Apply vertical shift \(d\)** to determine the midline.
4. **Mark key points** from the parent graph (maxima, minima, zeros) and apply the coordinate mapping.  A point \((x_{\text{old}},y_{\text{old}})\) on \(y = f(x)\) maps to
   \[
     x_{\text{new}} = \frac{x_{\text{old}} - c}{b},\quad y_{\text{new}} = a\,y_{\text{old}} + d.
   \]
   This method ensures that the transformed graph has the correct shape and position.

[VISUAL PLACEHOLDER: MMD-002 | Source: lesson PDF p.6 | Insert from AS1_transformations_mermaid.md | Purpose: flowchart of coordinate mapping method]

## 8. Visual Asset Integration

Throughout these notes you will encounter visual placeholders.  Each placeholder points to a diagram stored in a separate file.  The table below summarises the visual assets.

| Placeholder ID | Source | Purpose | Diagram file |
|---|---|---|---|
| TIKZ‑001 | Lesson PDF p.1 | Parent graphs of \(\sin x\) and \(\cos x\) over one period | AS1_transformations_tikz.md |
| SVG‑001 | AI‑proposed teaching enhancement | Quick reference summary for amplitude and period | AS1_transformations_svg.md |
| MMD‑001 | AI‑proposed teaching enhancement | Concept map summarising effects of \(a\), \(b\), \(c\) and \(d\) | AS1_transformations_mermaid.md |
| TIKZ‑002 | Lesson PDF p.3 | Compare \(\sin x\) with \(4\sin x\) to illustrate vertical stretch | AS1_transformations_tikz.md |
| TIKZ‑003 | Lesson PDF p.4 | Compare \(\sin x\) with \(\sin 2x\) to illustrate horizontal compression | AS1_transformations_tikz.md |
| TIKZ‑004 | Lesson PDF p.4 | Compare \(\sin x\) with \(\sin\tfrac{x}{2}\) to illustrate horizontal stretch | AS1_transformations_tikz.md |
| TIKZ‑005 | Lesson PDF p.5 | Demonstrate that \(\cos(x+90°) = -\sin x\) (phase shift and reflection) | AS1_transformations_tikz.md |
| MMD‑002 | Lesson PDF p.6 | Flowchart of coordinate mapping method | AS1_transformations_mermaid.md |

Whenever you see a placeholder in the text, refer to the matching diagram file to view the visual or code.

## 9. Interactive Learning Widgets

Two interactive widgets accompany this lesson.  They are stored in a separate file and can be run locally by copying the code into a `.html` file and opening it in a modern web browser.

- **WIDGET‑001: Trigonometric graph transformation explorer** – adjust sliders for \(a\), \(b\), \(c\) and \(d\) and choose between \(\sin\), \(\cos\) and \(\tan\).  Watch how the graph and the amplitude, period and phase shift values change.  This helps develop intuition for exam sketches.
- **WIDGET‑002: Coordinate mapping calculator** – enter a point \((x_{\text{old}},y_{\text{old}})\) on a parent graph and parameters \(a\), \(b\), \(c\), \(d\).  The tool computes \((x_{\text{new}},y_{\text{new}})\).  Use it to practise the mapping method described above.

[INTERACTIVE PLACEHOLDER: WIDGET-001 | Source: AI-proposed teaching enhancement, not present in lesson PDF | Insert from AS1_transformations_widgets.md | Purpose: slider exploration showing how changing coefficients affects a trigonometric graph]

[INTERACTIVE PLACEHOLDER: WIDGET-002 | Source: AI-proposed teaching enhancement, not present in lesson PDF | Insert from AS1_transformations_widgets.md | Purpose: calculator showing how a coordinate transforms under \(y = a f(bx + c) + d\)]

## 10. Worked Examples

### Example 1 – Vertical stretch

**Question.**  Sketch the graph of \(y = 4\sin x\) for \(0° \le x \le 360°\).  State the amplitude and period.

**Solution.**  The parent function \(\sin x\) has amplitude 1 and period 360°.  Multiplying by \(4\) scales all \(y\)-values by 4.  Therefore the amplitude becomes \(|4| = 4\) and the period remains 360° (because \(b=1\)).  Mark key points: the maximum occurs at 90° with \(y=4\), the zeros at 0°, 180° and 360°, and the minimum at 270° with \(y = -4\).  Draw a smooth wave passing through these points and label the midline at \(y=0\).  

### Example 2 – Vertical stretch and shift

**Question.**  Sketch the graph of \(y = 2\cos x - 1\) for \(0° \le x \le 360°\).  Identify the amplitude, period, and vertical shift.

**Solution.**  The coefficient \(a = 2\) gives an amplitude \(|2| = 2\).  The coefficient \(b = 1\) means the period is 360°.  The term \(-1\) shifts the graph down by 1 unit so the midline is \(y = -1\).  Points that were at \(y = 1\) on \(\cos x\) move to \(y = 1\) (midline + amplitude) and those at \(y = -1\) move to \(y = -3\).  Sketch the wave accordingly: start at \(x=0°\) with \(y = 1\) (since \(\cos 0° = 1\) then multiply by 2 and subtract 1: \(2\cdot1 - 1 = 1\)), then proceed through the zeros at 60°? Wait, cos x crosses zero at 90°, 270°, etc.  At 90°, \(\cos 90° = 0\), so \(y = 2\cdot0 - 1 = -1\).  Continue to 180° where \(\cos 180° = -1\) so \(y = 2(-1) - 1 = -3\).  Plot these points and draw a smooth curve.

### Example 3 – Horizontal compression

**Question.**  Sketch the graph of \(y = \sin 2x\) for \(0° \le x \le 360°\).  What is the new period?

**Solution.**  In \(y = \sin 2x\) the coefficient \(b = 2\) multiplies the argument.  According to the period formula the new period is \(360°/|2| = 180°\).  That means two complete cycles occur between 0° and 360°.  Draw the parent \(\sin x\) wave but compress it horizontally so that the wave repeats every 180°.  The zeros occur at multiples of 90° (0°, 90°, 180°, 270°, 360°) and maxima at 45°, 225° and minima at 135°, 315°.  The amplitude remains 1.

### Example 4 – Horizontal stretch

**Question.**  Sketch the graph of \(y = \sin \frac{x}{2}\) for \(0° \le x \le 720°\).  Explain why the domain must be extended.

**Solution.**  Writing \(y = \sin \tfrac{x}{2}\) is equivalent to \(b = \tfrac{1}{2}\).  The period becomes \(360°/|\tfrac{1}{2}| = 720°\).  One cycle now extends over 0° to 720°; between 0° and 360° only half of a cycle appears.  To see a complete wave you must plot from 0° to 720° or beyond.  Mark key points: the zeros at 0°, 360°, 720°; maxima at 180°, 540°; minima at 540°? Wait, we need to correct: For \(\sin x\), maxima at 90°; with half frequency maxima occur at 180°, minima at 540°; the wave is stretched.  Draw accordingly.  The amplitude is unchanged (1).

### Example 5 – Phase shift and reflection

**Question.**  Show that \(y = \cos(x + 90°)\) is equivalent to \(-\sin x\).  Sketch both graphs for \(0° \le x \le 360°\).

**Solution.**  Starting with \(y = \cos(x + 90°)\), factor out \(b=1\) so the phase shift is \(-90°\) (the graph is shifted left by 90°).  Use the identity \(\cos(\theta + 90°) = -\sin \theta\) to rewrite the function as \(y = -\sin x\).  Thus the graph of \(\cos(x + 90°)\) is the graph of \(\sin x\) reflected in the \(x\)‑axis and shifted left by 90°.  Both functions have period 360° and amplitude 1.  Sketch \(-\sin x\) by reflecting \(\sin x\).  The equivalence can be checked using the coordinate mapping method.

### Example 6 – Combined transformations

**Question.**  Sketch the graph of \(y = 3\sin\bigl(2x - 60°\bigr) + 2\) for \(0° \le x \le 360°\).  State the amplitude, period, phase shift and vertical shift.

**Solution.**  Write the argument as \(2x - 60° = 2\bigl(x - 30°\bigr)\).  The parameters are \(a = 3\), \(b = 2\), \(c = -60°\), \(d = 2\).  The amplitude is \(|3| = 3\).  The period is \(360°/|2| = 180°\).  The phase shift is \(-\tfrac{c}{b} = -\tfrac{-60°}{2} = 30°\); the graph is shifted right by 30°.  The vertical shift is 2, so the midline is \(y=2\).  Sketch one cycle between 30° and 210° (the domain for one period).  Mark the maximum at 30° + 45°/2? Wait, we need to compute: For \(\sin x\), maximum at 90°; multiply by \(b=2\) and apply shift: Solve \(2(x - 30°) = 90°\) giving \(x = 75°\).  At this point \(y = 3 \cdot 1 + 2 = 5\).  The minimum occurs when \(2(x - 30°) = 270°\) giving \(x=165°\), where \(y=-3 + 2 = -1\).  Zeros occur when \(2(x - 30°) = 0°,180°,360°\) giving \(x=30°,120°,210°\).  Plot these points and draw a smooth sine wave starting at (30°,2).  Repeat as needed to fill the domain 0°–360°.

### Example 7 – Coordinate mapping

**Question.**  A point \((90°, 1)\) lies on the graph of \(y = \sin x\).  Under the transformation \(y = 2\sin(x - 45°) + 1\) find the coordinates of the corresponding point on the transformed graph.

**Solution.**  Here \(a = 2\), \(b = 1\), \(c = -45°\) and \(d = 1\).  The mapping formula gives
\[
  x_{\text{new}} = \frac{x_{\text{old}} - c}{b} = \frac{90° - (-45°)}{1} = 135°,
\]
\[
  y_{\text{new}} = a\,y_{\text{old}} + d = 2 \times 1 + 1 = 3.
\]
Therefore \((90°,1)\) on the parent graph maps to \((135°, 3)\) on the graph of \(y = 2\sin(x - 45°) + 1\).

## 11. Common Mistakes and Exam Traps

- **Confusing the sign of the phase shift.**  Remember that \(f(x + k)\) shifts the graph left and \(f(x - k)\) shifts it right【722163253120748†L24-L39】.  Always factor out \(b\) before interpreting the shift.
- **Omitting the effect of \(b\) on the phase shift.**  In \(y = f(bx + c)\) the shift is \(-c/b\), not simply \(-c\).  Failing to divide by \(b\) leads to incorrect positions for maxima and zeros.
- **Treating amplitude as negative.**  Amplitude is \(|a|\); a negative \(a\) reflects the graph in the \(x\)‑axis but does not make the amplitude negative【752484414195469†L84-L92】.
- **Mistaking vertical and horizontal stretches.**  Multiplying the function by \(a\) (outside) affects the \(y\)-values; multiplying the argument by \(b\) (inside) affects the \(x\)-values.  The effect on the period is the reciprocal of \(b\)【551165776395826†L95-L110】.
- **Using an incorrect period for \(\tan x\).**  \(\tan x\) has period 180°, not 360°.  When applying a coefficient \(b\) the new period is 180°/|b|.
- **Sketching only one period.**  In exam questions always match the requested domain.  When the period is longer than the domain you may need to extend the sketch; when it is shorter you may need to repeat cycles.

## 12. Practice Questions

Use these questions to test your understanding.  Full solutions are provided in the next section.  Sketch graphs on squared paper or use the interactive explorer to check your work.

1. **(Amplitude and vertical shift)** Sketch \(y = -3\cos 0.5x + 1\) for \(0° \le x \le 360°\).  State the amplitude, period, phase shift and vertical shift.
2. **(Phase shift)** For \(y = 2\sin(x - 45°) - 2\), determine the amplitude, period, phase shift and vertical shift.
3. **(Tangent compression)** Sketch \(y = \tan 2x\) and state its period and the positions of vertical asymptotes in \(0° \le x \le 180°\).
4. **(Coordinate mapping)** A point \((30°,0.5)\) lies on the graph of \(y = \sin x\).  Under the transformation \(y = 3\sin\bigl(0.5(x + 60°)\bigr) - 2\) find the image point.
5. **(Finding an equation)** Write an equation of the form \(y = a\cos(bx + c) + d\) with amplitude 5, period 360°, phase shift right 30° and vertical shift –1.
6. **(Designing a sine wave)** A sine wave has amplitude 2, period 90° and minimum value –5 at \(x = 45°\).  Find an equation for the wave in the form \(y = a\sin(bx + c) + d\).

## 13. Worked Solutions

**Question 1.**  *Sketch \(y = -3\cos 0.5x + 1\) and state its parameters.*

**Solution.**  Write the argument as \(0.5x = \tfrac{x}{2}\).  The parameters are \(a = -3\), \(b = 0.5\), \(c = 0\), \(d = 1\).  The amplitude is \(|-3| = 3\); the negative sign reflects the graph in the \(x\)‑axis.  The period is \(360°/|0.5| = 720°\).  Since the domain is 0°–360°, only half a cycle appears.  The phase shift is 0° and the vertical shift is 1.  Start with the parent \(\cos x\), flip it in the \(x\)‑axis to get \(-\cos x\), stretch vertically by a factor 3 so the range becomes \([-3,3]\), then compress horizontally (or stretch? Wait: \(b=0.5\) means the graph is stretched horizontally by factor 2).  Finally raise it by 1 so the midline is \(y=1\).  At \(x=0°\), \(\cos 0°=1\) so \(y=-3\cdot1 + 1 = -2\).  At \(x=180°\) (half of the stretched period), \(\cos 90°=0\) giving \(y=1\).  Plot enough key points and draw the half‑cycle.

**Question 2.**  *For \(y = 2\sin(x - 45°) - 2\), determine the amplitude, period, phase shift and vertical shift.*

**Solution.**  Here \(a=2\), \(b=1\), \(c=-45°\) and \(d=-2\).  The amplitude is \(|2|=2\).  The period is \(360°\).  The phase shift is \(-\tfrac{c}{b} = -\tfrac{-45°}{1} = 45°\) – the graph is shifted right by 45°.  The vertical shift is –2.  The midline is \(y = -2\).  The graph of \(\sin x\) is thus moved right 45°, stretched vertically by a factor 2 and shifted down 2 units.

**Question 3.**  *Sketch \(y = \tan 2x\) and state its period and asymptotes on \(0° \le x \le 180°\).* 

**Solution.**  For \(y = \tan 2x\) the parameter \(b=2\) compresses the period from 180° to \(180°/|2| = 90°\).  Vertical asymptotes of \(\tan x\) occur at \(x = 90° + 180°k\).  In the transformed graph the asymptotes satisfy \(2x = 90° + 180°k\), so \(x = 45° + 90°k\).  Between 0° and 180° there are asymptotes at \(x = 45°\) and \(x = 135°\).  Sketch two repeats of the basic tan shape in each 90° interval.  The graph crosses the origin at 0°, 90°, 180°, etc.  The amplitude of the tangent function is not defined but the steepness increases with \(|a|\) if a coefficient multiplies the function.

**Question 4.**  *Map the point \((30°,0.5)\) under \(y = 3\sin\bigl(0.5(x + 60°)\bigr) - 2\).*  

**Solution.**  Write the argument as \(0.5(x + 60°) = 0.5x + 30°\).  So \(a = 3\), \(b = 0.5\), \(c = 30°\), \(d = -2\).  The mapping formula gives
\[ x_{\text{new}} = \frac{x_{\text{old}} - c}{b} = \frac{30° - 30°}{0.5} = 0°, \]
\[ y_{\text{new}} = a\,y_{\text{old}} + d = 3 \times 0.5 - 2 = -0.5. \]
Therefore the point \((30°,0.5)\) on \(\sin x\) maps to \((0°,-0.5)\) on the transformed graph.

**Question 5.**  *Find an equation \(y = a\cos(bx + c) + d\) with amplitude 5, period 360°, phase shift right 30° and vertical shift –1.*

**Solution.**  Amplitude 5 means \(|a| = 5\).  Let \(a = 5\).  A period of 360° implies \(|b| = 360°/360° = 1\), so \(b = 1\).  A phase shift right 30° corresponds to \(-\tfrac{c}{b} = 30°\) giving \(c = -30°\).  A vertical shift of –1 gives \(d = -1\).  Thus one possible equation is
\[
  y = 5\cos(x - 30°) - 1.
\]

**Question 6.**  *Design a sine wave with amplitude 2, period 90°, and minimum value –5 at \(x = 45°\).  Express it in the form \(y = a\sin(bx + c) + d\).* 

**Solution.**  An amplitude of 2 means \(|a| = 2\); to obtain a minimum at the point under consideration, we need \(a = -2\) (so that the wave opens downwards).  A period of 90° means \(|b| = 360°/90° = 4\), so choose \(b = 4\).  The vertical shift \(d\) is the midline; because the minimum value is –5 and the amplitude is 2, the midline is \(-5 + 2 = -3\).  Thus \(d = -3\).  Finally we need to set the phase shift so that the minimum occurs at \(x = 45°\).  For \(y = -2\sin(4x + c) - 3\) a minimum occurs when \(\sin(4x + c) = -1\); that is when \(4x + c = 270° + 360°k\).  Substitute \(x = 45°\) and choose \(k = 0\): \(4 \times 45° + c = 270°\) gives \(180° + c = 270°\), so \(c = 90°\).  Therefore an equation satisfying the conditions is
\[
  y = -2\sin\bigl(4x + 90°\bigr) - 3.
\]
Check: at \(x = 45°\), \(4x + 90° = 180° + 90° = 270°\), \(\sin 270° = -1\), so \(y = -2(-1) - 3 = -2 + (-3) = -5\), as required.

## 14. Exam Technique Notes

- **Factor out before shifting.**  When faced with \(y = a\,f(bx + c) + d\), always rewrite the argument in the form \(b(x + c/b)\) so you can read off the phase shift and period correctly.  Examiners often include a coefficient \(b\) to test whether students remember to divide the phase shift by \(b\).
- **Label key points.**  On a sketch, mark the coordinates of maxima, minima and zeros clearly and indicate the midline.  Include asymptotes for \(\tan\) graphs and show at least one full cycle within the domain.
- **Use degrees appropriately.**  If the question uses degrees, keep your working in degrees.  Avoid switching to radians unless instructed.
- **Reflect and shift correctly.**  A negative \(a\) reflects in the \(x\)-axis; a negative \(b\) reflects in the \(y\)-axis.  A positive constant inside the bracket \((x + c)\) shifts the graph to the left【722163253120748†L24-L39】.
- **Check with technology.**  Use a graphing calculator or the provided interactive widget to check your sketch after you have completed it.  However, marks are awarded for correct method and labelled sketches; technology should support, not replace, your reasoning.

## 15. Syllabus Gap Check

This lesson covers all specification points related to simple transformations of sine, cosine and tangent functions.  The parent graphs, amplitude, period, phase shift and vertical shift are defined and used.  Worked examples include vertical stretches/compressions, horizontal stretches/compressions, phase shifts and reflections.  The coordinate mapping method is explained and implemented via an interactive widget.  We did not include radian measure or more advanced trigonometric identities as those are treated in other lessons.  The calculator instructions on page 7 of the PDF (how to enter transformations into a specific calculator) are omitted as off‑spec operational details.

## 16. Recommended Enhancements Not in the PDF

The following assets were proposed to improve understanding beyond what appears in the lesson PDF:

| Asset ID | Type | Why it was added | Specification point supported | Essential or optional |
|---|---|---|---|---|
| MMD‑001 | Mermaid concept map | Helps visualise how each parameter \(a\), \(b\), \(c\), \(d\) affects the graph of \(y = a f(bx + c) + d\) | Understanding amplitude, period, phase shift and vertical shift【757415927963031†L349-L355】 | Essential |
| MMD‑002 | Mermaid flowchart | Illustrates the coordinate mapping method for transforming individual points | Sketching transformed graphs systematically | Optional but useful |
| SVG‑001 | SVG summary card | Provides a single glance summary of amplitude and period formulas for sine, cosine and tangent | Quick reference for exam revision | Essential |
| TIKZ‑002–TIKZ‑005 | TikZ graphs | Show side‑by‑side comparisons of parent and transformed graphs (vertical stretch, compression, phase shift) | Visual understanding of transformations | Essential |
| WIDGET‑001 | Interactive explorer | Enables students to experiment with different parameters and observe real‑time changes to graphs | Deepens understanding of transformation effects | Essential |
| WIDGET‑002 | Coordinate mapping calculator | Provides practice with the mapping method used to generate transformed graphs | Supports accurate sketching | Optional but helpful |

## 17. Supplementary Sources Used

Because the PDF does not explicitly state the algebraic rules for vertical and horizontal transformations, brief external references were used to confirm definitions.  Only reputable sources aligned with UK mathematics curricula were consulted.

- **Mathwords: Vertical Stretch** – explains that multiplying a function by \(a\) multiplies all output values and changes the amplitude but leaves the period unchanged【752484414195469†L84-L92】.  Used to support the description of vertical stretches and reflections.
- **Mathwords: Horizontal Stretch** – states that multiplying the input variable by \(b\) compresses the graph horizontally and dividing the input stretches it【551165776395826†L95-L110】.  Provided the basis for the period formula and clarified the reciprocal relationship.
- **MathBitsNotebook: Horizontal Shift** – clarifies the sign convention that \(f(x + k)\) shifts a graph to the left and \(f(x - k)\) shifts it to the right【722163253120748†L24-L39】.  Reinforced the phase shift discussion.
- **CCEA Specification and Elaboration Document** – the definitive statements of learning outcomes and examples for trigonometry and graph transformations【757415927963031†L349-L355】【398586815410408†L524-L536】.

## 18. Final Student Checklist

After studying this lesson you should be able to:

- [ ] Sketch the parent graphs of \(\sin x\), \(\cos x\) and \(\tan x\) and mark key points and asymptotes.
- [ ] Write any transformed trigonometric function in the form \(y = a\,f(bx + c) + d\) and state the amplitude, period, phase shift and vertical shift.
- [ ] Distinguish between vertical and horizontal stretches/compressions and understand how the factors \(a\) and \(b\) affect the graph.
- [ ] Determine the direction of a phase shift by factoring out \(b\) and applying \(-c/b\).
- [ ] Apply vertical shifts and reflections correctly and recognise the sign conventions.
- [ ] Use the coordinate mapping method to transform specific points on a graph.
- [ ] Combine multiple transformations when sketching graphs and label intercepts, maxima/minima and asymptotes.
- [ ] Avoid common pitfalls such as misinterpreting the sign of \(c\) or forgetting to adjust the period for \(\tan\) graphs.
- [ ] Use interactive tools to check understanding while maintaining the ability to produce accurate, labelled sketches by hand.

Keep practising by creating your own examples and using the widgets to check your sketches.  Mastery of graph transformations will make later topics, such as trigonometric identities and modelling, much easier.

## 6. Diagram Assets

## 6.1 Mermaid Assets

### Source File Metadata

```yaml
filename: "AS1_transformations_mermaid.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/03 Transformations/AS1_transformations_mermaid.md"
lines: 38
bytes_utf8: 1956
sha256: "135b3dee94af3c53ec10f66e3fb7703c1217a40b599fa0c092c9ef9fde9ea972"
```

### Preserved Source Content: AS1_transformations_mermaid.md

# Mermaid Diagrams for AS1 Transformations of Trigonometric Graphs

## MMD-001: Effect of parameters on \(y = a\,f(bx + c) + d\)
Source: AI-proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: MMD-001 | Source: AI-proposed teaching enhancement | Insert from AS1_transformations_mermaid.md | Purpose: concept map summarising the effect of each parameter]`  
Purpose: Summarises how the parameters \(a\), \(b\), \(c\) and \(d\) in the general transformation \(y = a\,f(bx + c) + d\) affect the graph of a trigonometric function.  

```mermaid
flowchart TD
    A[General transformation: y = a f(bx + c) + d]
    A --> B[Amplitude (vertical stretch)]
    A --> C[Horizontal factor (b)]
    A --> D[Horizontal shift (c)]
    A --> E[Vertical shift (d)]
    B --> B1[Amplitude = |a|]
    B --> B2[If a \(<0\): reflect in x-axis]
    C --> C1[Period = parent period / |b|]
    C --> C2[b \(> 1\): compress horizontally]
    C --> C3[0 < b < 1: stretch horizontally]
    D --> D1[Shift left by c when c \(> 0\)]
    D --> D2[Shift right by |c| when c \(< 0\)]
    E --> E1[Move up by d when d \(> 0\)]
    E --> E2[Move down by |d| when d \(< 0\)]
```

## MMD-002: Coordinate mapping for \(y = a\,f(bx + c) + d\)
Source: lesson PDF p.6  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: MMD-002 | Source: lesson PDF p.6 | Insert from AS1_transformations_mermaid.md | Purpose: flowchart of coordinate mapping method]`  
Purpose: Shows how to map a point \((x_\text{old},y_\text{old})\) on the parent graph \(y = f(x)\) to a point \((x_\text{new},y_\text{new})\) on the transformed graph \(y = a\,f(bx + c) + d\).  

```mermaid
flowchart LR
    Start((Start with point (x_old, y_old) on y = f(x)))
    Start --> Step1[Compute new x-coordinate: x_new = (x_old − c) / b]
    Step1 --> Step2[Compute new y-coordinate: y_new = a·y_old + d]
    Step2 --> End((Point on y = a f(bx + c) + d: (x_new, y_new)))
```

## 6.2 SVG Assets

### Source File Metadata

```yaml
filename: "AS1_transformations_svg.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/03 Transformations/AS1_transformations_svg.md"
lines: 44
bytes_utf8: 2582
sha256: "30600cadaa6d96fd184b16072c2cb189243b7a30262179bd4557754cfb9a883f"
```

### Preserved Source Content: AS1_transformations_svg.md

# SVG Diagrams for AS1 Transformations of Trigonometric Graphs

## SVG-001: Summary of amplitude and period formulas
Source: AI-proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: SVG-001 | Source: AI-proposed teaching enhancement | Insert from AS1_transformations_svg.md | Purpose: quick reference summary for amplitude and period]`  
Purpose: Provides a quick‑reference card summarising the amplitude, period and phase‑shift formulas for the sine, cosine and tangent functions in the form \(y = a\,\sin(bx + c) + d\), \(y = a\,\cos(bx + c) + d\) or \(y = a\,\tan(bx + c) + d\).  

```svg
<svg width="600" height="240" xmlns="http://www.w3.org/2000/svg">
  <style>
    .title { font-family: sans-serif; font-size: 18px; font-weight: bold; fill: #003366; }
    .header { font-family: sans-serif; font-size: 14px; font-weight: bold; fill: #005a9c; }
    .text { font-family: sans-serif; font-size: 12px; fill: #000000; }
    .box { fill: #e6f2ff; stroke: #005a9c; stroke-width: 1; }
  </style>
  <!-- Title -->
  <text x="20" y="24" class="title">Amplitude and Period Summary</text>
  <!-- Sine -->
  <rect x="20" y="40" width="180" height="160" class="box"/>
  <text x="30" y="60" class="header">y = a sin(bx + c) + d</text>
  <text x="30" y="80" class="text">Amplitude: |a|</text>
  <text x="30" y="100" class="text">Period: 360° / |b|</text>
  <text x="30" y="120" class="text">Phase shift: –c / b</text>
  <text x="30" y="140" class="text">Vertical shift: d</text>
  <text x="30" y="160" class="text">Range: [d − |a|, d + |a|]</text>
  <!-- Cosine -->
  <rect x="210" y="40" width="180" height="160" class="box"/>
  <text x="220" y="60" class="header">y = a cos(bx + c) + d</text>
  <text x="220" y="80" class="text">Amplitude: |a|</text>
  <text x="220" y="100" class="text">Period: 360° / |b|</text>
  <text x="220" y="120" class="text">Phase shift: –c / b</text>
  <text x="220" y="140" class="text">Vertical shift: d</text>
  <text x="220" y="160" class="text">Range: [d − |a|, d + |a|]</text>
  <!-- Tangent -->
  <rect x="400" y="40" width="180" height="160" class="box"/>
  <text x="410" y="60" class="header">y = a tan(bx + c) + d</text>
  <text x="410" y="80" class="text">Vertical stretch: |a|</text>
  <text x="410" y="100" class="text">Period: 180° / |b|</text>
  <text x="410" y="120" class="text">Phase shift: –c / b</text>
  <text x="410" y="140" class="text">Vertical shift: d</text>
  <text x="410" y="160" class="text">Asymptotes at x = (90° − c)/b + k·(180°/|b|)</text>
</svg>
```

## 6.3 TikZ Assets

### Source File Metadata

```yaml
filename: "AS1_transformations_tikz.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/03 Transformations/AS1_transformations_tikz.md"
lines: 154
bytes_utf8: 5038
sha256: "dcb8396d27cff6655272c3529e8109e8e2b93c64124f25f8c77026974e5f68cc"
```

### Preserved Source Content: AS1_transformations_tikz.md

# TikZ Diagrams for AS1 Transformations of Trigonometric Graphs

## TIKZ-001: Parent sine and cosine graphs
Source: lesson PDF p.1  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: TIKZ-001 | Source: lesson PDF p.1 | Insert from AS1_transformations_tikz.md | Purpose: graphs of y=\sin x and y=\cos x]`  
Purpose: Show the parent graphs of \(\sin x\) and \(\cos x\) over one period (0° to 360°) with key intercepts and maximum/minimum points.

```latex
\begin{tikzpicture}
\begin{axis}[
    width=12cm,
    height=4cm,
    domain=0:360,
    samples=200,
    xtick={0,90,180,270,360},
    xticklabels={$0^\circ$,$90^\circ$,$180^\circ$,$270^\circ$,$360^\circ$},
    ytick={-1,0,1},
    ymin=-1.2,ymax=1.2,
    xlabel={$x$ (degrees)},
    ylabel={$y$},
    legend style={at={(0.5,-0.25)},anchor=north,legend columns=2},
    grid=both,
    minor tick num=1
]
    \addplot [blue, thick] {sin(x)};
    \addlegendentry{$y=\sin x$}
    \addplot [red, thick] {cos(x)};
    \addlegendentry{$y=\cos x$}
\end{axis}
\end{tikzpicture}
```

## TIKZ-002: Vertical stretch example \(y = 4\sin x\)
Source: lesson PDF p.3  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: TIKZ-002 | Source: lesson PDF p.3 | Insert from AS1_transformations_tikz.md | Purpose: compare parent \sin x with vertical stretch]`  
Purpose: Compare the parent function \(y = \sin x\) with the vertically stretched function \(y = 4\sin x\).  

```latex
\begin{tikzpicture}
\begin{axis}[
    width=12cm,
    height=4cm,
    domain=0:360,
    samples=200,
    xtick={0,90,180,270,360},
    xticklabels={$0^\circ$,$90^\circ$,$180^\circ$,$270^\circ$,$360^\circ$},
    ytick={-4,-2,0,2,4},
    ymin=-4.5,ymax=4.5,
    xlabel={$x$ (degrees)},
    ylabel={$y$},
    legend style={at={(0.5,-0.25)},anchor=north,legend columns=2},
    grid=both,
    minor tick num=1
]
    \addplot [blue, thick] {sin(x)};
    \addlegendentry{$y=\sin x$}
    \addplot [orange, thick] {4*sin(x)};
    \addlegendentry{$y=4\sin x$}
\end{axis}
\end{tikzpicture}
```

## TIKZ-003: Horizontal compression \(y = \sin 2x\)
Source: lesson PDF p.4  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: TIKZ-003 | Source: lesson PDF p.4 | Insert from AS1_transformations_tikz.md | Purpose: horizontal compression example]`  
Purpose: Compare the parent function \(y=\sin x\) with \(y=\sin 2x\) to illustrate that multiplying the argument by 2 halves the period.  

```latex
\begin{tikzpicture}
\begin{axis}[
    width=12cm,
    height=4cm,
    domain=0:360,
    samples=200,
    xtick={0,90,180,270,360},
    xticklabels={$0^\circ$,$90^\circ$,$180^\circ$,$270^\circ$,$360^\circ$},
    ytick={-1,0,1},
    ymin=-1.2,ymax=1.2,
    xlabel={$x$ (degrees)},
    ylabel={$y$},
    legend style={at={(0.5,-0.25)},anchor=north,legend columns=2},
    grid=both,
    minor tick num=1
]
    \addplot [blue, thick] {sin(x)};
    \addlegendentry{$y=\sin x$}
    \addplot [purple, thick] {sin(2*x)};
    \addlegendentry{$y=\sin 2x$}
\end{axis}
\end{tikzpicture}
```

## TIKZ-004: Horizontal stretch \(y = \sin\tfrac{x}{2}\)
Source: lesson PDF p.4  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: TIKZ-004 | Source: lesson PDF p.4 | Insert from AS1_transformations_tikz.md | Purpose: horizontal stretch example]`  
Purpose: Compare the parent function \(y=\sin x\) with \(y=\sin(\tfrac{x}{2})\). Dividing the argument by 2 doubles the period from 360° to 720°.  

```latex
\begin{tikzpicture}
\begin{axis}[
    width=12cm,
    height=4cm,
    domain=0:720,
    samples=200,
    xtick={0,180,360,540,720},
    xticklabels={$0^\circ$,$180^\circ$,$360^\circ$,$540^\circ$,$720^\circ$},
    ytick={-1,0,1},
    ymin=-1.2,ymax=1.2,
    xlabel={$x$ (degrees)},
    ylabel={$y$},
    legend style={at={(0.5,-0.25)},anchor=north,legend columns=2},
    grid=both,
    minor tick num=1
]
    \addplot [blue, thick] {sin(x)};
    \addlegendentry{$y=\sin x$}
    \addplot [green!60!black, thick] {sin(x/2)};
    \addlegendentry{$y=\sin\tfrac{x}{2}$}
\end{axis}
\end{tikzpicture}
```

## TIKZ-005: Phase shift and reflection example
Source: lesson PDF p.5  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: TIKZ-005 | Source: lesson PDF p.5 | Insert from AS1_transformations_tikz.md | Purpose: phase shift and reflection example]`  
Purpose: Demonstrate that \(y=\cos(x+90^{\circ})\) is equivalent to \(-\sin x\), illustrating horizontal shift and vertical reflection.  

```latex
\begin{tikzpicture}
\begin{axis}[
    width=12cm,
    height=4cm,
    domain=0:360,
    samples=200,
    xtick={0,90,180,270,360},
    xticklabels={$0^\circ$,$90^\circ$,$180^\circ$,$270^\circ$,$360^\circ$},
    ytick={-1,0,1},
    ymin=-1.2,ymax=1.2,
    xlabel={$x$ (degrees)},
    ylabel={$y$},
    legend style={at={(0.5,-0.25)},anchor=north,legend columns=3},
    grid=both,
    minor tick num=1
]
    \addplot [red, thick] {cos(x + 90)};
    \addlegendentry{$y=\cos(x+90^\circ)$}
    \addplot [blue, thick] {-sin(x)};
    \addlegendentry{$y=-\sin x$}
    \addplot [gray, dashed] {cos(x)};
    \addlegendentry{$y=\cos x$}
\end{axis}
\end{tikzpicture}
```

## 7. Interactive Widgets

## 7.1 Widget Assets

### Source File Metadata

```yaml
filename: "AS1_transformations_widgets.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/03 Transformations/AS1_transformations_widgets.md"
lines: 253
bytes_utf8: 11201
sha256: "516a831fa48533297d1a5fec5b73a3c271b75ccbf27b13a6dcc35667b30bdbc2"
```

### Preserved Source Content: AS1_transformations_widgets.md

# Interactive Widgets for AS1 Transformations of Trigonometric Graphs

## WIDGET-001: Trigonometric graph transformation explorer
Source: AI-proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[INTERACTIVE PLACEHOLDER: WIDGET-001 | Source: AI-proposed teaching enhancement, not present in lesson PDF | Insert from AS1_transformations_widgets.md | Purpose: slider exploration showing how changing coefficients affects a trigonometric graph]`  
Purpose: Allow learners to explore how changing the parameters \(a\), \(b\), \(c\) and \(d\) in \(y = a\,\sin(bx + c) + d\), \(y = a\,\cos(bx + c) + d\) or \(y = a\,\tan(bx + c) + d\) affects the graph’s amplitude, period, phase shift and vertical shift.

### Learning Goal
This widget helps you understand how each parameter in a trigonometric function changes its graph. By adjusting the sliders you can observe how amplitude, period and shifts change the shape and position of the graph. The aim is to build intuition before sketching exam graphs by hand.

### Controls
- `Function`: select \(\sin\), \(\cos\) or \(\tan\) as the base function.
- `Amplitude (a)`: slider between −5 and 5 (step 0.1) to stretch or compress the graph vertically.
- `Frequency (b)`: slider between −4 and 4 (step 0.1) controlling horizontal compression or stretch. Note that \(b=0\) is not allowed because it would remove the dependence on \(x\).
- `Phase shift (c)` in degrees: slider between −180° and 180° (step 5°) shifting the graph horizontally. Positive values shift the graph to the left and negative values shift the graph to the right.
- `Vertical shift (d)`: slider between −5 and 5 (step 0.1) moving the graph up or down.

### Live Outputs
- Graph: A plot of the chosen function over 0° to 360° showing the effect of the current parameters.
- Key information: The amplitude \(|a|\), period (\(360°/|b|\) for \(\sin\) and \(\cos\) or \(180°/|b|\) for \(\tan\) if \(|b|>0\)), phase shift \(-c/b\) in degrees, and vertical shift \(d\).

### What to Notice
- Changing `a` scales the graph vertically and reverses it in the \(x\)-axis when negative.
- Changing `b` compresses or stretches the graph horizontally. Doubling \(b\) halves the period; halving \(b\) doubles the period.
- Adjusting `c` moves the graph left or right. Remember that adding inside the bracket \((x + c)\) shifts left.
- Adjusting `d` moves the graph up or down without changing its shape.
- For \(\tan\), notice that the vertical asymptotes move according to the period and phase shift.

### Exam Connection
Use this explorer to check your sketches and to develop intuition. However, always practise drawing graphs by hand: exam questions award marks for method and accuracy. When sketching, identify amplitude and period first, then apply shifts.

### How to Run
Copy the code below into a `.html` file and open it in a browser. Use the sliders and dropdown menu to explore different parameter values.

```html
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Trigonometric Graph Transformation Explorer</title>
<style>
  body { font-family: sans-serif; }
  #controls { margin-bottom: 1em; }
  label { margin-right: 1em; }
  canvas { border: 1px solid #ccc; }
</style>
</head>
<body>
  <h2>Trigonometric Graph Transformation Explorer</h2>
  <div id="controls">
    <label>Function:
      <select id="funcSelect">
        <option value="sin">sin</option>
        <option value="cos">cos</option>
        <option value="tan">tan</option>
      </select>
    </label>
    <label>a:
      <input type="range" id="aSlider" min="-5" max="5" step="0.1" value="1">
      <span id="aVal">1</span>
    </label>
    <label>b:
      <input type="range" id="bSlider" min="-4" max="4" step="0.1" value="1">
      <span id="bVal">1</span>
    </label>
    <label>c (°):
      <input type="range" id="cSlider" min="-180" max="180" step="5" value="0">
      <span id="cVal">0°</span>
    </label>
    <label>d:
      <input type="range" id="dSlider" min="-5" max="5" step="0.1" value="0">
      <span id="dVal">0</span>
    </label>
  </div>
  <div id="info"></div>
  <canvas id="graph" width="600" height="300"></canvas>

  <script>
    const aSlider = document.getElementById('aSlider');
    const bSlider = document.getElementById('bSlider');
    const cSlider = document.getElementById('cSlider');
    const dSlider = document.getElementById('dSlider');
    const funcSelect = document.getElementById('funcSelect');
    const canvas = document.getElementById('graph');
    const ctx = canvas.getContext('2d');
    const info = document.getElementById('info');

    function drawGraph() {
      const a = parseFloat(aSlider.value);
      const b = parseFloat(bSlider.value);
      const c = parseFloat(cSlider.value);
      const d = parseFloat(dSlider.value);
      const funcName = funcSelect.value;

      document.getElementById('aVal').textContent = a;
      document.getElementById('bVal').textContent = b;
      document.getElementById('cVal').textContent = c + '°';
      document.getElementById('dVal').textContent = d;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw axes
      ctx.strokeStyle = '#999';
      ctx.lineWidth = 1;
      // Horizontal axis
      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2);
      ctx.lineTo(canvas.width, canvas.height / 2);
      ctx.stroke();
      // Vertical axis at x=0
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, canvas.height);
      ctx.stroke();

      // Plot function
      ctx.strokeStyle = '#0073b7';
      ctx.lineWidth = 2;
      ctx.beginPath();
      let first = true;
      for (let i = 0; i <= canvas.width; i++) {
        // Map pixel to degrees 0-360
        const xDeg = (i / canvas.width) * 360;
        // Convert to radians
        const xRad = (b * (xDeg + c)) * Math.PI / 180;
        let yVal;
        if (funcName === 'sin') {
          yVal = a * Math.sin(xRad) + d;
        } else if (funcName === 'cos') {
          yVal = a * Math.cos(xRad) + d;
        } else {
          // tan: avoid drawing near asymptotes
          const cosVal = Math.cos(xRad / a);
          yVal = a * Math.tan(xRad) + d;
        }
        // Map y to pixel (midpoint at height/2, scale)
        const yPixel = canvas.height / 2 - yVal * (canvas.height / 10);
        if (first) {
          ctx.moveTo(i, yPixel);
          first = false;
        } else {
          ctx.lineTo(i, yPixel);
        }
      }
      ctx.stroke();

      // Display amplitude, period and phase shift
      let period;
      let parentPeriod = (funcName === 'tan') ? 180 : 360;
      if (b !== 0) {
        period = Math.abs(parentPeriod / b);
      } else {
        period = 'undefined';
      }
      const amplitude = Math.abs(a);
      const phase = (b !== 0) ? (-c / b) : 'undefined';
      info.innerHTML =
        `<p><strong>Amplitude:</strong> ${amplitude}</p>` +
        `<p><strong>Period:</strong> ${period}°</p>` +
        `<p><strong>Phase shift:</strong> ${phase}°</p>` +
        `<p><strong>Vertical shift:</strong> ${d}</p>`;
    }

    // Attach event listeners
    [aSlider, bSlider, cSlider, dSlider, funcSelect].forEach(el => {
      el.addEventListener('input', drawGraph);
    });

    // Initial draw
    drawGraph();
  </script>
</body>
</html>
```

## WIDGET-002: Coordinate mapping calculator
Source: AI-proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[INTERACTIVE PLACEHOLDER: WIDGET-002 | Source: AI-proposed teaching enhancement, not present in lesson PDF | Insert from AS1_transformations_widgets.md | Purpose: calculator showing how a coordinate transforms under y = a f(bx + c) + d]`  
Purpose: Allow learners to input a point on a parent graph and parameters \(a\), \(b\), \(c\), \(d\), then calculate the new coordinates on the transformed graph according to the mapping \(x_{\text{new}} = \tfrac{x_{\text{old}} - c}{b}\) and \(y_{\text{new}} = a\,y_{\text{old}} + d\).

### Learning Goal
Understand the coordinate mapping method: to sketch a transformed graph you can take key points from the parent graph and compute their images using the transformation formula.

### Controls
- `x_old`: original \(x\) coordinate in degrees.
- `y_old`: original \(y\) coordinate.
- `a, b, c, d`: transformation parameters.
- `Calculate` button: computes the new coordinates \((x_{\text{new}}, y_{\text{new}})\).

### Live Outputs
- The new \(x\) and \(y\) coordinates after applying the transformation.
- A message indicating if \(b=0\) (which is invalid).

### What to Notice
- The \(x\) coordinate is adjusted by subtracting the phase shift \(c\) and dividing by \(b\).
- The \(y\) coordinate is scaled by \(a\) and shifted by \(d\).
- If \(b\) is negative, the graph reflects in the \(y\)-axis and the phase shift adjusts accordingly.

### Exam Connection
This calculator helps you practise mapping key points when sketching transformed trigonometric graphs. In exams you must perform these calculations manually and show the working; the calculator helps you learn the pattern.

### How to Run
Copy the code below into a `.html` file and open it in a browser. Enter values for the original point and parameters, then click the `Calculate` button.

```html
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Coordinate Mapping Calculator</title>
<style>
  body { font-family: sans-serif; }
  label { display: block; margin-top: 0.5em; }
  input { width: 100px; }
</style>
</head>
<body>
  <h2>Coordinate Mapping Calculator</h2>
  <p>Enter an original point on the parent graph and the transformation parameters to find the image point on \(y = a\,f(bx + c) + d\).</p>
  <label>x_old (°): <input type="number" id="x_old" value="0"></label>
  <label>y_old: <input type="number" id="y_old" value="0"></label>
  <label>a: <input type="number" id="a_param" value="1" step="0.1"></label>
  <label>b: <input type="number" id="b_param" value="1" step="0.1"></label>
  <label>c (°): <input type="number" id="c_param" value="0" step="1"></label>
  <label>d: <input type="number" id="d_param" value="0" step="0.1"></label>
  <button id="calcBtn">Calculate</button>
  <div id="result" style="margin-top:1em;"></div>

  <script>
    document.getElementById('calcBtn').addEventListener('click', function() {
      const xOld = parseFloat(document.getElementById('x_old').value);
      const yOld = parseFloat(document.getElementById('y_old').value);
      const a = parseFloat(document.getElementById('a_param').value);
      const b = parseFloat(document.getElementById('b_param').value);
      const c = parseFloat(document.getElementById('c_param').value);
      const d = parseFloat(document.getElementById('d_param').value);
      const resultDiv = document.getElementById('result');
      if (b === 0) {
        resultDiv.innerHTML = '<p style="color:red;">Error: b cannot be zero.</p>';
        return;
      }
      const xNew = (xOld - c) / b;
      const yNew = a * yOld + d;
      resultDiv.innerHTML =
        `<p>New x (°): ${xNew.toFixed(2)}</p>` +
        `<p>New y: ${yNew.toFixed(2)}</p>`;
    });
  </script>
</body>
</html>
```

## 8. Agent Retrieval Notes

Use Section 5 for teaching sequence and explanation. Use Sections 6 and 7 as asset banks. When an asset is marked as suggested, AI-proposed, generated, or uncertain, preserve that provenance in downstream responses.
