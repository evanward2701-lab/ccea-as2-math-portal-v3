# AS1 Differentiation Lesson Agent Source

## 0. AI-Agent Usage Instructions

This file is a source for teaching, revision, explanation, diagnostics and lesson retrieval. Core lesson content is in Section 5. Diagram assets are in Section 6. Widgets are in Section 7. Use the lesson content before generated enhancement notes. Do not claim AI-proposed assets came from the original PDF. Preserve syllabus gap notes and uncertainty notes. Use UK/CCEA mathematical vocabulary.

## 1. Pack Metadata

```yaml
pack_type: lesson
unit_code: AS1
unit_name: CCEA AS1 Pure Mathematics
topic_slug: "08_differentiation"
topic_title: "Differentiation"
source_folder: "/Users/evanward/Documents/AS Portal - New /AS1 Files/08. Differentiation"
output_file: "/Users/evanward/Documents/AS Portal - New /AS1 Files/00_AGENT_SOURCE_PACKS/08_differentiation/AS1_differentiation_agent_source.md"
created_from_files:
  lesson: "AS1_differentiation_lesson.md"
  questions: null
  solutions: null
  mermaid: "AS1_differentiation_mermaid.md"
  svg: "AS1_differentiation_svg.md"
  tikz: "AS1_differentiation_tikz.md"
  widgets: "AS1_differentiation_widgets.md"
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
| lesson | AS1_differentiation_lesson.md | 541 | 43830 | `15b023c0b9469838517187470a6290c291bba0ff7ba0f87e239c7e981a656b39` |
| mermaid | AS1_differentiation_mermaid.md | 38 | 2430 | `4ff1941ef5b8241db7b19e2c4857a7c3e33855bd8ffcdd95bb9823fbb36efbe9` |
| svg | AS1_differentiation_svg.md | 101 | 7552 | `a83ad6978c1bac495bffd36937d5ca00b60ce6b1ce3c603ebd5901aa2669d9c8` |
| tikz | AS1_differentiation_tikz.md | 73 | 4162 | `b8d99abd248f278fb22b0bd567654097db4b746c8683807a8bfcc5a06aabd548` |
| widgets | AS1_differentiation_widgets.md | 401 | 18062 | `40cb312f6188bfd3411054e01e11fcf6adefea348d8beb96f9296c6f6b7941f6` |

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
filename: "AS1_differentiation_lesson.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/08. Differentiation/AS1_differentiation_lesson.md"
lines: 541
bytes_utf8: 43830
sha256: "15b023c0b9469838517187470a6290c291bba0ff7ba0f87e239c7e981a656b39"
```

### Preserved Source Content: AS1_differentiation_lesson.md

# Differentiation

**Unit:** CCEA AS1 Pure Mathematics  
**Source:** DIFFERENTIATION(2).pdf  
**Date generated:** 22 May 2026

This lesson pack introduces differentiation and its many applications.  It is designed for students progressing from Higher Tier GCSE Maths to the first unit of the CCEA AS Mathematics course.  The material is aligned closely with the CCEA specification【694213144107686†L590-L616】 and its elaboration document【794346718818743†L461-L497】.  Worked examples, diagrams and interactive widgets will help you understand the concepts and practise exam‑style questions.

## 1. Specification Alignment

| CCEA specification point | Elaboration document guidance | Covered in this lesson? | Where it appears | Gap or action needed | Suggested visual/widget support |
| --- | --- | --- | --- | --- | --- |
| **Understand the derivative as the gradient of a tangent**【694213144107686†L590-L616】 | Interpret the gradient of the tangent as a rate of change; limit definition using first principles【794346718818743†L461-L480】 | Yes | Section 7.1 and Section 7.2 | None | TikZ diagram TIKZ‑001 showing secant approaching tangent; widget for exploring slope |
| **Use derivative notation**【694213144107686†L590-L616】 | Recognise \(dy/dx\), \(f'(x)\) and \(\frac{d}{dx}[f(x)]\) as equivalent【794346718818743†L461-L480】 | Yes | Section 6 | None | SVG tables summarising notation |
| **Differentiate \(x^n\) for rational \(n\)**【694213144107686†L590-L616】 | Apply the power rule to constant multiples, sums and differences; understand that constants disappear on differentiating【794346718818743†L461-L484】 | Yes | Section 7.3 | None | SVG‑002 table of special cases; widget exploring the power rule |
| **Find gradients, tangents and normals**【694213144107686†L613-L616】 | Use point–slope form to write the equation of a tangent at \(x=a\); normal gradient is \(-1/m_{\text{tan}}\); tangent horizontal when \(f'(a)=0\)【794346718818743†L461-L497】 | Yes | Section 7.4 | None | TikZ‑001 and TikZ‑002 diagrams; widget exploring tangents and normals |
| **Identify maxima, minima and stationary points**【694213144107686†L613-L616】 | Solve \(f'(x)=0\) to locate stationary points; use the second derivative or sign table to classify them into maxima, minima or points of inflection【794346718818743†L461-L496】 | Yes | Sections 7.5 and 7.6 | None | Mermaid MMD‑002 decision tree; TikZ graph of \(x^3-3x\); widget for stationary points |
| **Identify increasing and decreasing functions**【694213144107686†L616-L616】 | Use the sign of \(f'(x)\) to determine where a function is increasing or decreasing; use \(f''(x)\) to discuss concavity and points of inflection【794346718818743†L461-L497】 | Yes | Section 7.7 | None | SVG‑001 table of derivative sign vs behaviour |
| **Integration as reverse of differentiation**【694213144107686†L624-L632】 | Integrate \(x^n\) (excluding \(n=-1\)) and interpret definite integrals as areas【794346718818743†L499-L529】 | Partial | Section 7.9 summarises integration at a basic level | Further study of integration appears in later lessons | Optional widget exploring area under a curve (not included here) |

## 2. Learning Objectives

By the end of this lesson, you should be able to:

- Explain what a derivative is and why it measures rate of change.
- Use correct notation for derivatives, including \(dy/dx\), \(f'(x)\) and \(\frac{d}{dx}[f(x)]\).
- Differentiate functions of the form \(a x^n\) for any rational exponent \(n\) using the power rule.
- Differentiate sums, differences and constant multiples by treating each term separately.
- Calculate the gradient of a curve at a point and derive the equations of tangents and normals.
- Find stationary points by solving \(f'(x)=0\) and classify them using the second derivative or a sign table.
- Determine intervals where a function is increasing or decreasing and describe its concavity and points of inflection.
- Sketch graphs of functions using derivatives to identify key features such as turning points, intercepts and asymptotic behaviour.
- Apply differentiation to simple optimisation problems and interpret solutions in context.

## 3. Compact Prerequisite Recap

Before tackling differentiation, you should already be comfortable with the following Higher Tier GCSE skills:

* **Powers and indices:** laws of indices for integer and fractional exponents (e.g. \(x^a x^b = x^{a+b}\), \(x^{1/2} = \sqrt{x}\), \(x^{-n} = 1/x^n\)), including simplification and rationalising surds.
* **Straight-line graphs:** gradient \(m\) of \(y=mx+c\), equation of a line through a point with a given gradient.
* **Quadratic functions:** completing the square, plotting simple graphs and locating turning points.
* **Basic algebra:** expanding brackets, factorising expressions, solving linear and quadratic equations and inequalities.
* **Limits and notation:** understanding what happens when a variable tends to zero or infinity, and interpreting functions using algebraic notation.

These topics are summarised here as a reminder only; the main lesson builds on them.

## 4. Big Picture Explanation

Differentiation is a cornerstone of calculus.  It provides a precise way to measure how a quantity changes in response to changes in another variable.  If a car’s distance travelled depends on time, the derivative of the distance with respect to time is the speed.  If a curve \(y = f(x)\) describes a relationship between \(x\) and \(y\), the derivative \(f'(x)\) tells you the gradient (slope) of the tangent line at each point \((x,f(x))\).  Knowing where a function’s derivative is zero or changes sign reveals its peaks, troughs and points of inflection.  Throughout this lesson you will learn how to calculate derivatives, interpret their meaning and apply them to real problems, as required by the CCEA specification【694213144107686†L590-L616】.

## 5. Key Definitions and Notation

* **Function:** A rule that assigns a unique output \(f(x)\) to every input \(x\) in its domain.
* **Derivative:** The derivative of \(y = f(x)\) with respect to \(x\) measures how fast \(y\) changes as \(x\) changes.  It is denoted by any of the following equivalent forms【794346718818743†L461-L480】:
  * \(\displaystyle \frac{dy}{dx}\) (Leibniz notation), pronounced “dee‑y dee‑x”.
  * \(f'(x)\) (Newton’s notation).
  * \(\displaystyle \frac{d}{dx}[f(x)]\) (operator notation).
* **Gradient:** The slope of a straight line.  The gradient of a curve at a point is the gradient of the tangent line drawn at that point.
* **Tangent line:** A straight line that just touches a curve at a point and has the same gradient as the curve there.
* **Normal line:** A line perpendicular to the tangent line at a given point on a curve.  If the gradient of the tangent is \(m\), then the gradient of the normal is \(-1/m\) (provided \(m\neq 0\)).
* **Stationary point:** A point on a curve where \(f'(x)=0\).  Depending on context, it may be a local maximum, local minimum or a stationary point of inflection (where the curve flattens but does not change from increasing to decreasing).
* **Concave up / concave down:** A curve is **concave up** when it bends upwards like a bowl (\(f''(x) > 0\)) and **concave down** when it bends downwards like a cap (\(f''(x) < 0\)).  A point of inflection occurs where concavity changes and \(f''(x)\) changes sign.

## 6. Core Theory

### 6.1 The Idea of Differentiation and Notation

Differentiation tells us *how a function changes when the input changes*.  If the function is \(y=f(x)\), then the expression \(\frac{dy}{dx}\) literally means “the rate at which \(y\) changes with respect to \(x\)”【122875883974921†screenshot】.  In plain English, it answers the question: *for a tiny change in \(x\), how much does \(y\) change?*  The derivative gives the gradient (slope) of the curve \(y=f(x)\) at any particular value of \(x\).  A positive derivative indicates the curve is going upwards; a negative derivative means it is going downwards; a derivative of zero corresponds to a horizontal tangent (which might be a turning point).

Three notations for the derivative are commonly used【122875883974921†screenshot】:

| Notation | Example | Use |
| --- | --- | --- |
| \(\displaystyle \frac{dy}{dx}\) | If \(y=x^2\), then \(\frac{dy}{dx}=2x\). | Preferred in many exam questions. |
| \(f'(x)\) | If \(f(x)=x^2\), then \(f'(x)=2x\). | Common shorthand when a function name is given. |
| \(\displaystyle \frac{d}{dx}[f(x)]\) | \(\frac{d}{dx}[x^2]=2x\). | Useful when the function name is not used explicitly. |

### 6.2 Definition from First Principles

The formal definition of the derivative uses a limiting process.  For a function \(f(x)\), the derivative at a point \(x\) is defined by the limit

\[
f'(x)=\lim_{h\to 0}\frac{f(x+h)-f(x)}{h}.
\]

This expression is sometimes called **differentiation from first principles**【122875883974921†screenshot】.  It can be understood geometrically: the fraction \(\frac{f(x+h)-f(x)}{h}\) is the gradient of the *secant* line joining the points \((x,f(x))\) and \((x+h,f(x+h))\).  As \(h\) gets smaller, the secant line approaches the tangent line at \((x,f(x))\) and its gradient approaches the derivative.  A step‑by‑step procedure is:

1. **Write down** \(f(x)\).
2. **Compute** \(f(x+h)\) by replacing \(x\) with \(x+h\).
3. **Form the difference** \(f(x+h)-f(x)\).
4. **Divide by** \(h\) to get an average rate of change.
5. **Take the limit** as \(h \to 0\) and simplify.

**Example – using first principles:** For \(f(x)=x^2\),

* \(f(x+h)=(x+h)^2=x^2+2xh+h^2\).
* \(f(x+h)-f(x) = 2xh + h^2\).
* Dividing by \(h\) gives \(2x + h\).
* Taking the limit \(h\to 0\) leaves \(2x\).

Therefore \(f'(x)=2x\).  This result agrees with the power rule.  A TikZ diagram (TIKZ‑001) in the diagrams file illustrates this secant‑to‑tangent process.

### 6.3 The Power Rule

For functions of the form \(y=a x^n\), where \(a\) is a constant and \(n\) is any real number (positive, negative or fractional), the **power rule** states that

\[
\frac{dy}{dx} = a\,n\,x^{n-1}.
\]

Intuitively, the exponent \(n\) tells us how quickly \(x^n\) grows, and the derivative measures that rate of change, which is proportional to both \(n\) and \(x^{n-1}\).  To apply the power rule:

1. Bring the power down in front: multiply by \(n\).
2. Multiply by the constant \(a\).
3. Reduce the power of \(x\) by 1.

**Examples:**

| Function \(y\) | Derivative \(dy/dx\) | Comments |
| --- | --- | --- |
| \(x^5\) | \(5x^4\) | Coefficient is 1. |
| \(3x^{10}\) | \(30x^9\) | Multiply by 10, then by 3. |
| \(2x^6\) | \(12x^5\) | Multiply by 6, then by 2. |
| \(\tfrac{1}{4}x^7\) | \(\tfrac{7}{4}x^6\) | Constant factors carry through. |
| \(-5x^3\) | \(-15x^2\) | Keep the negative sign. |
| \(x^{-2}\) | \(-2x^{-3}\) | Works for negative exponents. |
| \(\sqrt{x}=x^{1/2}\) | \(\tfrac{1}{2}x^{-1/2}\) | Express roots as fractional powers. |

The power rule works for all real exponents.  Constants (terms with no \(x\)) vanish under differentiation.  A summary table of special cases is provided as an SVG diagram (SVG‑002) with examples【908776178076130†screenshot】.  Watch out for common pitfalls:

* Always multiply by the coefficient as well as the exponent.  E.g. \(\tfrac{d}{dx}(5x^2)=10x\).
* Reduce the power by 1.  E.g. \(\tfrac{d}{dx}(x^3)=3x^2\), not \(3x^3\).
* Do **not** apply the power rule to a sum or product as if it were a single term; differentiate each term separately.
* Treat \(x\) as the variable; constants disappear.

### 6.4 Multiple Terms, Constants and Linear Combinations

Differentiation is *linear* – you can differentiate sums and differences term by term【571736936791037†screenshot】:

\[
\frac{d}{dx}[f(x) + g(x) - h(x)] = f'(x) + g'(x) - h'(x).
\]

This allows you to break up complicated expressions.  Examples:

1. **Sum and difference:** If \(y = x^3 + 4x^2 - 5x + 7\), then
   \[
   \frac{dy}{dx} = \frac{d}{dx}(x^3) + \frac{d}{dx}(4x^2) - \frac{d}{dx}(5x) + \frac{d}{dx}(7)
   = 3x^2 + 8x - 5 + 0.
   \]

2. **Mixed powers:** To differentiate \(y = 2x^{-3} + x^{1/2} - 4x + 5\), first rewrite all terms with powers of \(x\).  Then
   \[
   \frac{dy}{dx} = 2(-3)x^{-4} + \tfrac{1}{2}x^{-1/2} - 4 + 0
   = -\frac{6}{x^4} + \frac{1}{2\sqrt{x}} - 4.
   \]

3. **Another mixed example:** If \(y = 3x^{-2} - 7x^{3/2} + x^{-1}\), write \(y=3x^{-2} - 7x^{3/2} + x^{-1}\).  Using the power rule:
   \[
   \frac{dy}{dx} = 3(-2)x^{-3} - 7 \cdot \tfrac{3}{2} x^{1/2} + (-1)x^{-2} = -6x^{-3} - \tfrac{21}{2}x^{1/2} - \tfrac{1}{x^2}.
   \]

Constants multiply through; a table of simple constant–term derivatives is included in Section 7.3 and summarised in an SVG diagram (SVG‑002).

### 6.5 Tangents and Normals

The derivative gives the gradient of the tangent line to a curve.  For a curve \(y=f(x)\), the gradient of the tangent at \(x=a\) is \(m_{\text{tan}} = f'(a)\)【766485541006900†screenshot】.  Using the point–slope form of a straight line, the equation of the tangent through the point \(\bigl(a, f(a)\bigr)\) is

\[
y - f(a) = f'(a)\,(x - a).
\]

The **normal** to the curve at \(x=a\) is the line perpendicular to the tangent.  Its gradient is 
\[
m_{\text{norm}} = -\frac{1}{f'(a)}
\]
provided \(f'(a) \neq 0\).  If \(f'(a)=0\), the tangent is horizontal and the normal is vertical.  A TikZ diagram (TIKZ‑002) illustrates tangents and normals on the graph of \(y=x^2\) and the relationship between their gradients.

**Example – tangent and normal to \(y=x^2\) at \(x=3\):**

* \(f(x) = x^2 \Rightarrow f'(x) = 2x\).
* At \(x=3\), gradient \(m_{\text{tan}}=2\times 3=6\) and the point is \((3,9)\).
* **Tangent:** \(y - 9 = 6(x - 3)\Rightarrow y = 6x - 9\).
* **Normal:** gradient \(m_{\text{norm}}=-1/6\).  Equation: \(y - 9 = -\tfrac{1}{6}(x - 3)\Rightarrow y = -\tfrac{1}{6}x + \tfrac{11}{2}\).

### 6.6 Stationary Points and the Second Derivative

A **stationary point** occurs when the gradient function is zero: \(f'(x)=0\).  Stationary points may be:

- **Local maximum:** \(f''(a) < 0\) – the curve bends downwards (concave down) and the stationary point is a peak.
- **Local minimum:** \(f''(a) > 0\) – the curve bends upwards (concave up) and the stationary point is a trough.
- **Stationary point of inflection:** \(f'(a)=0\) and \(f''(a)=0\) but the gradient does not change sign; the curve passes through a flat point without a peak or trough【323011827102861†screenshot】.  A further sign test of \(f'(x)\) on either side of \(a\) is needed.

The **second derivative** \(f''(x)\) is the derivative of the derivative.  It measures how the gradient is changing, sometimes referred to as the curvature of the curve【323011827102861†screenshot】.  A decision‑tree diagram in the mermaid file (MMD‑002) summarises how to classify stationary points using the second derivative or a sign table.

**Procedure to find and classify stationary points**:

1. **Differentiate** \(f(x)\) to find \(f'(x)\).
2. **Solve** \(f'(x)=0\) to find potential stationary points.
3. **Substitute** these \(x\) values back into \(f(x)\) to find their coordinates.
4. **Classify** each point:
   - Compute \(f''(x)\).  If \(f''(a)>0\), it is a local minimum; if \(f''(a)<0\), a local maximum; if \(f''(a)=0\), use the sign of \(f'(x)\) on either side to check whether the derivative changes sign【895737918508391†screenshot】.

**Example – classifying stationary points using \(f''(x)\):**  Let \(y=x^3-3x\).  Then \(f'(x)=3x^2-3=3(x^2-1)\).  Setting \(f'(x)=0\) gives \(x=\pm1\).  The second derivative is \(f''(x)=6x\).  At \(x=-1\), \(f''(-1)=-6<0\), so \((-1,2)\) is a local maximum.  At \(x=1\), \(f''(1)=6>0\), so \((1,-2)\) is a local minimum.  A TikZ graph (TIKZ‑002) illustrates these points.

**Example – using a sign table:**  Consider \(y=x^4-2x^2\).  The derivative is \(f'(x)=4x^3-4x=4x(x^2-1)\), which is zero at \(x=-1,0,1\).  The second derivative is \(f''(x)=12x^2-4\), which gives \(f''(-1)=8>0\) and \(f''(1)=8>0\), but \(f''(0)=-4<0\).  However, because the second derivative test is inconclusive when \(f''(x)=0\), we construct a sign table for \(f'(x)\) and see that the derivative changes from positive to negative at \(x=0\); hence \((0,0)\) is a local maximum.  It changes from negative to positive at \(x=-1\) and again at \(x=1\), so \((-1,-1)\) and \((1,-1)\) are local minima【895737918508391†screenshot】.

### 6.7 Increasing, Decreasing and Points of Inflection

The sign of the first derivative tells you whether a function is rising or falling.  If \(f'(x)>0\) on an interval, the function is **strictly increasing** on that interval.  If \(f'(x)<0\), it is **strictly decreasing**.  If \(f'(x)\ge 0\) (allowing zeros), the function is non‑decreasing; similarly \(f'(x)\le 0\) for non‑increasing【741919382461431†screenshot】.  A summary table and sketch are provided as an SVG diagram (SVG‑001).  Proofs often involve showing that the derivative is positive for all \(x\).  For example, \(f(x)=x^3+6x^2+21x+7\) has derivative \(f'(x)=3x^2+12x+21=3[(x+2)^2+3]\), which is always positive; hence \(f(x)\) is strictly increasing for all real \(x\)【741919382461431†screenshot】.

The **concavity** of a function is determined by the second derivative:

- If \(f''(x)>0\), the curve is concave up (cup shape).  Think of it as curving upwards.
- If \(f''(x)<0\), the curve is concave down (cap shape).
- If \(f''(x)\) changes sign at a point, the curve has a **point of inflection** there.  If \(f'(x)\ne 0\) at the same point, it is a non‑stationary point of inflection; if \(f'(x)=0\), it is a stationary point of inflection.

**Method for finding points of inflection:**

1. Differentiate twice to find \(f''(x)\).
2. Solve \(f''(x)=0\) (and consider where \(f''(x)\) is undefined) to get candidates.
3. Test the sign of \(f''(x)\) on either side of each candidate; if it changes sign, that point is a point of inflection【657145149551224†screenshot】.
4. Optionally check \(f'(x)\) to see whether it is also a stationary point.

**Example – point of inflection for \(y=x^4-4x^2\):**

* \(f'(x)=4x^3-8x\), \(f''(x)=12x^2-8\).
* Solve \(12x^2-8=0\) to obtain \(x=\pm\sqrt{\tfrac{2}{3}}\).
* Testing values on either side shows that \(f''(x)\) changes from positive to negative at \(-\sqrt{2/3}\) and from negative to positive at \(+\sqrt{2/3}\).  Thus both points are points of inflection.
* Substituting into \(f(x)\) gives the coordinates: \(\Bigl(-\sqrt{\tfrac{2}{3}},\; \tfrac{20}{9}\Bigr)\) and \(\Bigl(\sqrt{\tfrac{2}{3}},\; \tfrac{20}{9}\Bigr)\).  These points are labelled on the TikZ graph (TIKZ‑003).

### 6.8 Sketching Curves Using Derivatives

Calculus is an essential tool for sketching accurate graphs.  A general method is as follows【777840937077672†screenshot】:

1. **Differentiate** to find \(f'(x)\).
2. **Solve \(f'(x)=0\)** to locate stationary points and determine their nature using the second derivative or a sign table.
3. **Find intercepts:** set \(x=0\) for \(y\)-intercepts and \(y=0\) for \(x\)-intercepts【814989714953450†screenshot】.
4. **Check asymptotes** if the function involves ratios.  Vertical asymptotes occur where the denominator is zero but the numerator is non‑zero; horizontal asymptotes are found by taking the limit as \(x\to \pm\infty\); oblique asymptotes occur when the degree of the numerator exceeds that of the denominator by exactly one【814989714953450†screenshot】.
5. **Determine behaviour as \(x\to\pm\infty\)** using the highest‑degree term (for polynomials) or by considering limits【814989714953450†screenshot】.
6. **Combine all information**—stationary points, intercepts, asymptotes, end behaviour, concavity and any points of inflection—to sketch the curve.  Label axes and key points clearly.

A TikZ diagram (TIKZ‑002) shows how to use a sign table to sketch \(y=x^3-3x\).  The SVG diagrams summarise derivative sign conditions (SVG‑001) and concavity (SVG‑003).

### 6.9 Optimisation and Modelling

Differentiation is a powerful tool for optimisation problems.  A typical process involves:

1. **Formulate** a function \(f(x)\) representing the quantity to be optimised (e.g. area, volume, cost).
2. **Differentiate** \(f(x)\) to find \(f'(x)\).
3. **Solve \(f'(x)=0\)** to locate critical points and use the second derivative to decide whether they correspond to maxima or minima.
4. **Check boundaries** of the domain because maximum or minimum values may occur at the endpoints【734237103456447†screenshot】.
5. **Interpret** the solution in the context of the problem.

**Example – open box problem:** A rectangular piece of metal measuring 30 cm by 20 cm is turned into an open box by cutting out squares of side \(x\) from each corner and folding up the sides.  The volume is

\[
V(x) = x(30-2x)(20-2x) = 4x^3 - 100x^2 + 600x.
\]

Differentiating gives \(V'(x) = 12x^2 - 200x + 600\).  Solving \(V'(x)=0\) yields critical values (details in the worked examples).  Testing the second derivative and considering physical constraints (e.g. \(0<x<10\) because the cuts cannot exceed half the shorter side) shows that \(x=\tfrac{10}{3}\) cm gives the maximum volume【734237103456447†screenshot】.

Similar techniques apply to finding maximum or minimum values of functions defined on an interval; always check the endpoints as well as critical points【734237103456447†screenshot】.

### 6.10 Brief Note on Integration

The CCEA AS1 unit also introduces **integration** as the reverse of differentiation【694213144107686†L624-L632】.  Integrating \(x^n\) (for \(n\neq -1\)) produces a new function whose derivative is \(x^n\).  Definite integrals calculate the area under a curve between two points and are closely connected to the applications of differentiation discussed here.  A detailed study of integration will follow in a separate lesson; this lesson only provides a brief preview.

## 7. Visual Asset Integration

To aid understanding, this lesson uses several diagrams and flowcharts.  Each placeholder below corresponds to a diagram defined in the accompanying diagram files.

### 7.1 First Principles Flowchart

[VISUAL PLACEHOLDER: MMD-001 | Source: lesson PDF p.1 | Insert from AS1_differentiation_mermaid.md | Purpose: illustrate the step‑by‑step process of differentiating from first principles]

### 7.2 Special Cases and Sign Tables

[VISUAL PLACEHOLDER: SVG-002 | Source: lesson PDF p.2 | Insert from AS1_differentiation_svg.md | Purpose: summarise the power rule and special cases]

[VISUAL PLACEHOLDER: SVG-001 | Source: AI-proposed teaching enhancement, not present in lesson PDF | Insert from AS1_differentiation_svg.md | Purpose: show how the sign of the derivative relates to increasing/decreasing behaviour]

[VISUAL PLACEHOLDER: SVG-003 | Source: AI-proposed teaching enhancement, not present in lesson PDF | Insert from AS1_differentiation_svg.md | Purpose: summarise concavity and points of inflection]

### 7.3 Tangents and Normals Diagram

[VISUAL PLACEHOLDER: TIKZ-001 | Source: lesson PDF p.4 | Insert from AS1_differentiation_tikz.md | Purpose: show secant approaching tangent on a curve]

[VISUAL PLACEHOLDER: TIKZ-002 | Source: lesson PDF p.5 | Insert from AS1_differentiation_tikz.md | Purpose: graph of \(y=x^3-3x\) illustrating local maxima, minima and point of inflection]

[VISUAL PLACEHOLDER: TIKZ-003 | Source: lesson PDF p.7 | Insert from AS1_differentiation_tikz.md | Purpose: graph of \(y=x^4-4x^2\) showing points of inflection]

## 8. Interactive Learning Widgets

Three interactive widgets accompany this lesson.  Each allows you to vary parameters and immediately see the effect.

### 8.1 Power Rule Explorer

[INTERACTIVE PLACEHOLDER: WIDGET-001 | Source: AI-proposed teaching enhancement, not present in lesson PDF | Insert from AS1_differentiation_widgets.md | Purpose: explore how changing the exponent and coefficient affects the derivative of \(a x^n\)]

### 8.2 Tangent and Normal Explorer

[INTERACTIVE PLACEHOLDER: WIDGET-002 | Source: AI-proposed teaching enhancement, not present in lesson PDF | Insert from AS1_differentiation_widgets.md | Purpose: pick a function and see the tangent and normal at any point]

### 8.3 Stationary Points Explorer

[INTERACTIVE PLACEHOLDER: WIDGET-003 | Source: AI-proposed teaching enhancement, not present in lesson PDF | Insert from AS1_differentiation_widgets.md | Purpose: adjust coefficients of a cubic function and watch how its stationary points and classifications change]

## 9. Worked Examples

The following examples are drawn from the lesson PDF【571736936791037†screenshot】【766485541006900†screenshot】.  They demonstrate common techniques and include detailed solutions.

### 9.1 Differentiation from First Principles

**Example 1:** Use first principles to find the derivative of \(f(x)=x^3\).

**Solution:**

1. Write \(f(x)=x^3\) and compute \(f(x+h)=(x+h)^3=x^3+3x^2h+3xh^2+h^3\).
2. Form \(f(x+h)-f(x)=3x^2h+3xh^2+h^3\).
3. Divide by \(h\): \(\dfrac{f(x+h)-f(x)}{h} = 3x^2 + 3xh + h^2\).
4. Take the limit as \(h\to 0\): the terms containing \(h\) vanish, leaving \(3x^2\).

Therefore \(f'(x)=3x^2\).  This result agrees with the power rule.

### 9.2 Applying the Power Rule

**Example 2:** Differentiate the following functions.

1. \(y = 7x^8\).  
   \(\dfrac{dy}{dx} = 7\times 8\,x^{7} = 56x^7\).

2. \(y = x^{-2}\).  
   \(\dfrac{dy}{dx} = -2x^{-3} = -\tfrac{2}{x^3}\).

3. \(y = \sqrt{x}\).  
   Write \(\sqrt{x}=x^{1/2}\).  Then \(\dfrac{dy}{dx} = \tfrac{1}{2}x^{-1/2} = \tfrac{1}{2\sqrt{x}}\).

4. \(y = 3/x^2 - 7x^{3/2} + x^{-1}\).  
   Rewrite as \(y = 3x^{-2} - 7x^{3/2} + x^{-1}\).  Differentiating term by term gives
   \(
   \dfrac{dy}{dx} = 3(-2)x^{-3} - 7 \cdot \tfrac{3}{2} x^{1/2} + (-1)x^{-2} = -6x^{-3} - \tfrac{21}{2} x^{1/2} - \dfrac{1}{x^2}.
   \)

### 9.3 Tangents and Normals

**Example 3:** Find the equations of the tangent and normal to the curve \(y=x^3-4x\) at the point where \(x=2\).

**Solution:**

* First, find \(f'(x)\).  For \(f(x)=x^3-4x\), the derivative is \(f'(x)=3x^2-4\).
* Evaluate \(f'(2)=3\times 2^2-4=3\times 4-4=12-4=8\).  This is the gradient of the tangent.
* The point on the curve is \((2,f(2))=(2,2^3-4\times 2)=(2,8-8)=(2,0)\).
* **Tangent line:** Using \(y - y_1 = m(x - x_1)\) with \(m=8\), \((x_1,y_1)=(2,0)\):
  \[y - 0 = 8(x - 2) \quad \Rightarrow \quad y = 8x - 16.\]
* **Normal line:** The gradient of the normal is \(-\tfrac{1}{8}\).  Using the same point:
  \[y - 0 = -\tfrac{1}{8}(x - 2) \quad \Rightarrow \quad y = -\tfrac{1}{8}x + \tfrac{1}{4}.\]

### 9.4 Classifying Stationary Points

**Example 4:** Find and classify the stationary points of \(y = x^3 - 6x^2 + 9x + 1\).

**Solution:**

1. Differentiate: \(f'(x) = 3x^2 - 12x + 9\).
2. Solve \(f'(x)=0\): \(3x^2 - 12x + 9 = 0 \Rightarrow x^2 - 4x + 3 = 0\), whose roots are \(x=1\) and \(x=3\).
3. Find coordinates: \(f(1) = 1 - 6 + 9 + 1 = 5\); \(f(3) = 27 - 54 + 27 + 1 = 1\).
4. Compute the second derivative: \(f''(x) = 6x - 12\).  Evaluate \(f''(1) = -6\) and \(f''(3) = 6\).
5. Since \(f''(1) < 0\), \((1,5)\) is a **local maximum**.  Since \(f''(3) > 0\), \((3,1)\) is a **local minimum**【895737918508391†screenshot】.

### 9.5 Using a Sign Table

**Example 5:** Find and classify the stationary points of \(y = x^4 - 2x^2\) using a sign table.

**Solution:**

1. Differentiate: \(f'(x)=4x^3-4x=4x(x^2-1)\).  Stationary points occur at \(x=-1,0,1\).
2. Second derivative: \(f''(x)=12x^2-4\).  Evaluating gives \(f''(-1)=8>0\), \(f''(0)=-4<0\), \(f''(1)=8>0\).  When the second derivative is zero or inconclusive, a sign table for \(f'(x)\) is used【895737918508391†screenshot】.
3. Construct a sign table for \(f'(x)\) over the intervals \((-∞,-1),(-1,0),(0,1),(1,∞)\).  Substitute test values (e.g. \(x=-2,-0.5,0.5,2\)) into \(f'(x)=4x(x^2-1)\) to determine whether the derivative is positive or negative.  The derivative changes from positive to negative at \(x=0\), so \((0,0)\) is a local maximum.  It changes from negative to positive at \(x=-1\) and again at \(x=1\), so \((-1,-1)\) and \((1,-1)\) are local minima.

### 9.6 Finding Points of Inflection

**Example 6:** Find the points of inflection of \(y = x^4 - 4x^2\).

**Solution:**

1. Differentiate: \(f'(x) = 4x^3 - 8x\).  Second derivative: \(f''(x) = 12x^2 - 8\).
2. Solve \(f''(x) = 0\): \(12x^2 - 8 = 0 \Rightarrow x^2 = \tfrac{2}{3} \Rightarrow x = \pm\sqrt{\tfrac{2}{3}}\).
3. Test the sign of \(f''(x)\) on either side of each root.  For example, choose \(x=-1\) (left), \(x=0\) (middle) and \(x=1\) (right).  The second derivative changes from positive to negative at \(-\sqrt{2/3}\) and from negative to positive at \(+\sqrt{2/3}\).  Therefore both points are points of inflection【657145149551224†screenshot】.
4. Find the coordinates: substitute into \(f(x)=x^4-4x^2\) to get \(f\bigl(\pm\sqrt{\tfrac{2}{3}}\bigr) = \frac{20}{9}\).  Thus the points of inflection are \(\Bigl(-\sqrt{\tfrac{2}{3}},\,\tfrac{20}{9}\Bigr)\) and \(\Bigl(\sqrt{\tfrac{2}{3}},\,\tfrac{20}{9}\Bigr)\).  These are shown in the TikZ diagram (TIKZ‑003).

## 10. Common Mistakes and Exam Traps

* **Forgetting to multiply by the coefficient:** For \(y = 5x^2\), the derivative is \(10x\), not \(2x\).  Keep track of constant factors.
* **Not reducing the power by one:** For \(y = x^3\), \(\frac{dy}{dx} = 3x^2\), not \(3x^3\).
* **Treating a sum as a single term:** Do not apply the power rule to an entire bracket such as \((x+1)^3\) without using the chain rule (covered in a later lesson).
* **Dropping negative signs:** Differentiating \(x^{-3}\) gives \(-3x^{-4}\), not \(3x^{-4}\).
* **Assuming \(f''(a)=0\) implies a point of inflection:** Always test the sign of \(f''(x)\) either side of the point; \(f''(a)=0\) is necessary but not sufficient【895737918508391†screenshot】.
* **Not checking endpoints:** In optimisation on a closed interval, local maxima or minima may occur at the boundaries; always evaluate \(f(x)\) at the endpoints as well as the stationary points【734237103456447†screenshot】.

## 11. Practice Questions

Try these questions yourself before looking at the solutions.  They cover basic differentiation, tangents/normals, stationary points, sketching and optimisation.

### 11.1 Basic Differentiation

1. Find \(\tfrac{d}{dx}(4x^7)\).
2. Differentiate \(y = 5x^{-3} + 2x^{1/2} - 6\).
3. Write \(y = \sqrt{x} + \tfrac{3}{x}\) in index form and find \(\tfrac{dy}{dx}\).

### 11.2 Tangents and Normals

4. The curve \(y=\tfrac{1}{3}x^3 - 2x\) passes through the point where \(x=3\).  Find the equation of the tangent and the normal at this point.
5. For the curve \(y = 2x^2 - 3x + 4\), find the gradient of the tangent at the point where \(y\)-coordinate is 7.

### 11.3 Stationary Points and Classification

6. Find and classify the stationary points of \(y = x^4 - 4x^3 + 4x + 1\).
7. Show that the function \(g(x) = x^3 + px\) has exactly one stationary point and determine its nature in terms of the parameter \(p\).

### 11.4 Points of Inflection and Concavity

8. Identify all points of inflection on the curve \(y = x^5 - 5x\) and determine whether they are stationary or non‑stationary.

### 11.5 Sketching and Optimisation

9. Sketch the function \(y = \dfrac{2x^2}{x^2 - 1}\).  Show all asymptotes, intercepts, turning points and points of inflection.
10. A manufacturer needs to design a cylindrical can that holds 500 cm³ of liquid.  Find the dimensions (radius and height) of the can that minimise the surface area.  (*Hint:* Surface area of a cylinder is \(2\pi r^2 + 2\pi r h\) and volume is \(\pi r^2 h\).)

## 12. Worked Solutions to Practice Questions

### 12.1 Solutions – Basic Differentiation

1. \(\tfrac{d}{dx}(4x^7) = 4\times 7 x^{6} = 28x^6\).
2. Let \(y = 5x^{-3} + 2x^{1/2} - 6\).  Then \(\dfrac{dy}{dx} = 5(-3)x^{-4} + 2 \times \tfrac{1}{2} x^{-1/2} - 0 = -15x^{-4} + x^{-1/2}\).
3. Write \(y = x^{1/2} + 3x^{-1}\).  Differentiating gives \(\dfrac{dy}{dx} = \tfrac{1}{2}x^{-1/2} - 3x^{-2}\).

### 12.2 Solutions – Tangents and Normals

4. **Curve:** \(y=\tfrac{1}{3}x^3 - 2x\).  Derivative: \(f'(x)=x^2-2\).  At \(x=3\), \(f'(3)=7\).  The point is \((3,f(3))=(3,\tfrac{1}{3}\times 27 - 6)=(3,3)\).  **Tangent:** \(y-3=7(x-3)\Rightarrow y=7x-18\).  **Normal:** gradient is \(-\tfrac{1}{7}\).  Equation: \(y-3=-\tfrac{1}{7}(x-3)\Rightarrow y=-\tfrac{1}{7}x + \tfrac{24}{7}\).

5. The curve is \(y=2x^2-3x+4\).  The derivative is \(4x-3\).  We need the point where \(y=7\).  Set \(2x^2-3x+4=7\Rightarrow 2x^2-3x-3=0\).  Solve: discriminant \(9+24=33\), so \(x=\frac{3\pm\sqrt{33}}{4}\).  There are two points.  The gradients are \(4x-3\) evaluated at each solution; use exact values or approximate numerical values.

### 12.3 Solutions – Stationary Points

6. For \(y=x^4 -4x^3+4x+1\):
   * \(f'(x)=4x^3 -12x^2 +4\).
   * Solve \(f'(x)=0\).  Factor out 4: \(4(x^3 -3x^2 +1)=0\), so \(x^3 -3x^2 +1=0\).  This cubic has roots at \(x=1\) and \(x=...\).  Use the factor theorem or a calculator to factorise as \((x-1)(x^2 -2x -1)=0\).  The quadratic gives \(x=1\pm\sqrt{2}\).  Thus the stationary points occur at \(x=1,1\pm\sqrt{2}\).  Evaluate \(f(x)\) at each and use \(f''(x)=12x^2 -24x\) to classify.

7. For \(g(x)=x^3 + p x\):
   * \(g'(x)=3x^2 + p\).  Setting \(g'(x)=0\) gives \(x^2=-\tfrac{p}{3}\).  If \(p>0\) there are no real stationary points; if \(p=0\) the only stationary point is at the origin (a point of inflection); if \(p<0\) there are two stationary points at \(x=\pm\sqrt{-\tfrac{p}{3}}\).  The second derivative is \(g''(x)=6x\).  At the negative root the second derivative is negative (local maximum); at the positive root it is positive (local minimum).

### 12.4 Solutions – Points of Inflection

8. For \(y=x^5 - 5x\),
   * \(f'(x)=5x^4 -5\) and \(f''(x)=20x^3\).
   * Solve \(f''(x)=0\): \(20x^3=0\) gives \(x=0\).  Test signs on either side: \(f''(-1)=-20<0\) and \(f''(1)=20>0\).  The second derivative changes from negative to positive, so \((0,0)\) is a **point of inflection**.
   * Since \(f'(0)= -5\), the curve is decreasing at the point of inflection; it is therefore a non‑stationary inflection point.

### 12.5 Solutions – Sketching and Optimisation

9. **Sketching** \(y = \dfrac{2x^2}{x^2 - 1}\):
   * **Domain:** exclude \(x=\pm1\) because the denominator is zero; vertical asymptotes at these values.
   * **Intercepts:** set \(x=0\): \(y=0\); set \(y=0\): numerator zero gives \(x=0\).  The only intercept is the origin.
   * **Asymptotes:** as \(x\to \pm\infty\), the leading terms give \(y \approx 2\).  Thus there is a horizontal asymptote \(y=2\).  No oblique asymptote because the degrees of numerator and denominator are equal.
   * **Derivative:** use the quotient rule (covered in a later lesson) or rewrite \(y=2 + \tfrac{2}{x^2-1}\) to analyse behaviour.  The function decreases on \((-\infty,-1)\), has a minimum, increases on \((-1,1)\), has a maximum, and decreases again on \((1,\infty)\).  Draw the curve with appropriate branches and asymptotes.

10. **Optimising a cylinder’s surface area:**
   * Volume constraint: \(\pi r^2 h = 500\Rightarrow h=\tfrac{500}{\pi r^2}\).
   * Surface area: \(S(r)=2\pi r^2 + 2\pi r h = 2\pi r^2 + 2\pi r \tfrac{500}{\pi r^2} = 2\pi r^2 + \frac{1000}{r}\).
   * Differentiate: \(S'(r) = 4\pi r - \frac{1000}{r^2}\).  Set \(S'(r)=0\): \(4\pi r^3 - 1000 = 0 \Rightarrow r^3 = \frac{250}{\pi}\).  So \(r = \sqrt[3]{\tfrac{250}{\pi}}\) cm.
   * Use the second derivative or sign analysis to confirm it is a minimum.  Compute \(h=500/(\pi r^2)\).  The result gives the can with the smallest surface area.

## 13. Exam Technique Notes

* **Show each step clearly.** Examiners award marks for showing differentiation steps, solving \(f'(x)=0\) and substituting into \(f(x)\).
* **Use correct notation.** Write \(\frac{dy}{dx}\) or \(f'(x)\) and avoid ambiguous symbols like “.” for multiplication.
* **Label stationary points.** When sketching, mark each turning point and classify it as a maximum, minimum or point of inflection.
* **Check endpoints in optimisation.** Do not assume that turning points give global maxima or minima; evaluate the function at the boundaries of the domain【734237103456447†screenshot】.
* **Interpret answers.** In modelling questions, write your final answer with appropriate units and in the context of the problem.
* **Sign tables help avoid errors.** Construct a table showing the sign of \(f'(x)\) and \(f''(x)\) across intervals; this reduces mistakes when classifying stationary points【777840937077672†screenshot】.

## 14. Syllabus Gap Check

This lesson covers all differentiation content required for CCEA AS1:

- **Definition and interpretation:** The derivative as the gradient of the tangent and as a rate of change, with first principles explained【694213144107686†L590-L616】.
- **Notation:** Use of \(dy/dx\), \(f'(x)\) and \(\frac{d}{dx}[f(x)]\)【122875883974921†screenshot】.
- **Differentiation of \(x^n\):** Power rule for all rational exponents and constant multiples【694213144107686†L610-L616】, including special cases and negatives【908776178076130†screenshot】.
- **Tangents and normals:** Finding gradients and equations of tangents and normals【694213144107686†L613-L616】.
- **Maxima, minima and stationary points:** Locating and classifying stationary points using the second derivative or sign table【794346718818743†L461-L496】.
- **Increasing/decreasing functions and concavity:** Using the sign of \(f'(x)\) and \(f''(x)\)【741919382461431†screenshot】【657145149551224†screenshot】.
- **Optimisation and simple modelling:** Using calculus to maximise or minimise quantities in context【734237103456447†screenshot】.

Parts of the PDF relating to integration, intercepts, asymptotes and long‑term behaviour of rational functions go beyond the strict differentiation specification.  A brief preview of integration has been included in Section 6.10 and the worked example of sketching a rational function in Practice Question 9 is provided as enrichment.  These topics will be covered fully in later lessons.  Content on exponential growth models and cooling laws presented in the PDF【734237103456447†screenshot】 belongs to the A2 modules and is not included in this lesson.

## 15. Off‑Spec or Extension Content Found but Excluded

The lesson PDF includes material that goes beyond the AS1 differentiation specification.  The following topics are summarised briefly or omitted:

- **Intercepts and asymptotes:** Methods for finding intercepts with coordinate axes and asymptotic behaviour of rational functions【814989714953450†screenshot】 are off‑spec for AS1 and will be handled in the integration and rational functions lessons.
- **Graph sketching using end behaviour and degree of polynomials:** Although useful, the degree–shape correspondence is extension content not required explicitly by the AS specification【814989714953450†screenshot】.
- **Applications of integration and average value:** Integration is covered in AS1 but deserves its own lesson.  Only a short preview has been given here; the PDF’s full integration examples are deferred to that lesson.
- **Modelling of exponential growth/decay and differential equations:** The cooling‑law and population‑growth models presented in the PDF【734237103456447†screenshot】 belong to the A2 modules and are not included in this lesson.

## 16. Recommended Enhancements Not in the PDF

To support independent study, several additional visuals and widgets have been created:

| Asset ID | Type | Why it was added | Spec point supported | Essential/Optional |
| --- | --- | --- | --- | --- |
| **SVG‑001** | SVG table | Summarises how the sign of \(f'(x)\) relates to increasing/decreasing behaviour.  The PDF hints at this but a clear visual aids understanding. | Increasing/decreasing functions【694213144107686†L616-L616】 | Essential |
| **SVG‑003** | SVG table | Provides a concise summary of concavity and points of inflection, linking \(f''(x)\) to curve shape.  Useful when studying stationary points and concavity. | Second derivative and classification【794346718818743†L461-L496】 | Essential |
| **TIKZ‑001** | TikZ diagram | Illustrates the secant–to–tangent process from the first principles definition.  Helps visualise the limit process. | Derivative as gradient and limit【694213144107686†L590-L616】 | Essential |
| **TIKZ‑002** | TikZ diagram | Plots \(y=x^3-3x\) with its local maximum, local minimum and point of inflection.  Reinforces classification of stationary points. | Classification of stationary points【794346718818743†L461-L496】 | Essential |
| **TIKZ‑003** | TikZ diagram | Shows \(y=x^4-4x^2\) and its points of inflection at \(\pm\sqrt{2/3}\).  Demonstrates concavity changes. | Points of inflection【657145149551224†screenshot】 | Optional but helpful |
| **MMD‑001** | Mermaid flowchart | Summarises the first‑principles differentiation process in a clear, stepwise format. | Derivative definition【122875883974921†screenshot】 | Essential |
| **MMD‑002** | Mermaid decision tree | Guides students through classifying stationary points using second derivative or sign table. | Stationary point classification【895737918508391†screenshot】 | Essential |
| **WIDGET‑001** | Interactive widget | Lets students vary \(a\) and \(n\) in \(a x^n\), see the derivative formula update and evaluate \(f(x)\) and \(f'(x)\) at a chosen point. | Power rule【908776178076130†screenshot】 | Essential |
| **WIDGET‑002** | Interactive widget | Allows exploration of tangents and normals on a chosen function by moving a slider.  Shows slopes, equations and a simple graph. | Tangents and normals【766485541006900†screenshot】 | Essential |
| **WIDGET‑003** | Interactive widget | Lets students adjust coefficients of a cubic function and automatically finds and classifies its stationary points.  Reinforces the second derivative test and sign tables. | Classification of stationary points【895737918508391†screenshot】 | Essential |

## 17. Supplementary Sources Used

No external sources beyond the CCEA specification【694213144107686†L590-L616】, elaboration document【794346718818743†L461-L497】 and the provided lesson PDF were required for this lesson.  All additional material and diagrams were generated to enhance understanding and remain within the scope of the AS1 unit.

## 18. Final Student Checklist

Use this checklist to test your mastery of differentiation.  You should be able to:

* Explain what the derivative measures and interpret \(dy/dx\) as a rate of change.
* Use various notations for the derivative correctly.
* Apply the power rule to differentiate \(a x^n\) for any rational \(n\) and recognise when constants disappear.
* Differentiate sums, differences and constant multiples term by term.
* Derive the equation of a tangent and a normal line to a curve at a specified point.
* Solve \(f'(x)=0\) to find stationary points and classify them using the second derivative or a sign table.
* Determine where a function is increasing or decreasing and where it is concave up, concave down or has points of inflection.
* Sketch simple functions using calculus: include turning points, points of inflection, intercepts, asymptotes and end behaviour.
* Apply differentiation techniques to basic optimisation problems and interpret solutions within the given context.

Once you can tick every item on this checklist, you have a solid grasp of AS1 differentiation and are ready to progress to integration and more advanced calculus.

## 6. Diagram Assets

## 6.1 Mermaid Assets

### Source File Metadata

```yaml
filename: "AS1_differentiation_mermaid.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/08. Differentiation/AS1_differentiation_mermaid.md"
lines: 38
bytes_utf8: 2430
sha256: "4ff1941ef5b8241db7b19e2c4857a7c3e33855bd8ffcdd95bb9823fbb36efbe9"
```

### Preserved Source Content: AS1_differentiation_mermaid.md

# Mermaid Diagrams for AS1 differentiation

This file contains the Mermaid diagrams referenced in the main lesson on differentiation.  Each diagram is presented with a clear title, its source, the placeholder used in the lesson file and a brief explanation of its purpose.  Copy the code blocks into a Markdown processor that supports Mermaid to render the diagrams.

## MMD‑001: First Principles Differentiation Flowchart
Source: lesson PDF p.1  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: MMD-001 | Source: lesson PDF p.1 | Insert from AS1_differentiation_mermaid.md | Purpose: illustrate the step‑by‑step process of differentiating from first principles]`  
Purpose: This flowchart summarises the five key steps involved when differentiating a function from first principles.  It begins with the original function, constructs the secant‑difference quotient and ends with the derivative as the limit of this quotient as \(h\) tends to zero.

```mermaid
graph TD
    A([Start]) --> B[Write \(f(x)\)]
    B --> C[Compute \(f(x+h)\)]
    C --> D[Form \(f(x+h) - f(x)\)]
    D --> E[Divide by \(h\)]
    E --> F[Take the limit \(h\to 0\)]
    F --> G[Result: \(f'(x)\)]
    G --> H([End])
```

## MMD‑002: Stationary Point Classification Decision Tree
Source: AI‑proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: MMD-002 | Source: AI-proposed teaching enhancement, not present in lesson PDF | Insert from AS1_differentiation_mermaid.md | Purpose: summarise stationary point classification using the second derivative or a sign table]`  
Purpose: This decision tree guides you through the process of classifying stationary points once they have been located by solving \(f'(x)=0\).  It branches according to the sign of the second derivative and, if necessary, examines the sign of the first derivative on either side of the point to determine whether it is a maximum, minimum or stationary point of inflection.

```mermaid
graph TD
    S[Start: Solve \(f'(x)=0\) to find stationary point \(x=a\)] --> Q{Compute \(f''(a)\)}
    Q -->|\(f''(a) > 0\)| M[Local minimum]
    Q -->|\(f''(a) < 0\)| K[Local maximum]
    Q -->|\(f''(a) = 0\)| R{Check sign of \(f'(x)\) either side of \(a\)}
    R -->|changes from + to −| K
    R -->|changes from − to +| M
    R -->|no change| I[Stationary point of inflection]
    M --> E([End])
    K --> E
    I --> E
```

## 6.2 SVG Assets

### Source File Metadata

```yaml
filename: "AS1_differentiation_svg.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/08. Differentiation/AS1_differentiation_svg.md"
lines: 101
bytes_utf8: 7552
sha256: "a83ad6978c1bac495bffd36937d5ca00b60ce6b1ce3c603ebd5901aa2669d9c8"
```

### Preserved Source Content: AS1_differentiation_svg.md

# SVG Diagrams for AS1 differentiation

This file contains the SVG diagrams used in the differentiation lesson.  Each diagram is described with its title, source and purpose, and the corresponding code block can be rendered in a Markdown previewer that supports embedded SVG.  All coordinates and styling have been chosen for clarity when teaching calculus concepts.

## SVG‑001: Derivative Sign and Function Behaviour
Source: AI‑proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: SVG-001 | Source: AI-proposed teaching enhancement, not present in lesson PDF | Insert from AS1_differentiation_svg.md | Purpose: show how the sign of the derivative relates to increasing/decreasing behaviour]`  
Purpose: This table summarises how the sign of the first derivative \(f'(x)\) determines whether a function is increasing, decreasing or stationary at a point.  It reinforces the connection between algebraic sign and the qualitative behaviour of the curve.

```svg
<svg width="420" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Derivative sign table">
  <!-- Table outline -->
  <rect x="0" y="0" width="420" height="140" fill="white" stroke="black" />
  <!-- Header row -->
  <rect x="0" y="0" width="420" height="35" fill="#e6f2ff" stroke="black" />
  <text x="105" y="22" font-family="Arial" font-size="14" font-weight="bold">Sign of \(f'(x)\)</text>
  <text x="280" y="22" font-family="Arial" font-size="14" font-weight="bold">Function behaviour</text>
  <!-- Row 1: positive -->
  <rect x="0" y="35" width="420" height="35" fill="#f9f9f9" stroke="black" />
  <text x="65" y="57" font-family="Arial" font-size="13">\(f'(x) &gt; 0\)</text>
  <text x="250" y="57" font-family="Arial" font-size="13">Function strictly increasing</text>
  <!-- Row 2: zero -->
  <rect x="0" y="70" width="420" height="35" fill="white" stroke="black" />
  <text x="65" y="92" font-family="Arial" font-size="13">\(f'(x) = 0\)</text>
  <text x="250" y="92" font-family="Arial" font-size="13">Stationary point (turning or flat)</text>
  <!-- Row 3: negative -->
  <rect x="0" y="105" width="420" height="35" fill="#f9f9f9" stroke="black" />
  <text x="65" y="127" font-family="Arial" font-size="13">\(f'(x) &lt; 0\)</text>
  <text x="250" y="127" font-family="Arial" font-size="13">Function strictly decreasing</text>
</svg>
```

## SVG‑002: Power Rule and Special Cases
Source: lesson PDF p.2  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: SVG-002 | Source: lesson PDF p.2 | Insert from AS1_differentiation_svg.md | Purpose: summarise the power rule and special cases]`  
Purpose: This table collects the general power rule together with common special cases for differentiation.  It helps students quickly recall derivatives of basic functions, including constants, negative and fractional exponents.

```svg
<svg width="550" height="185" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Power rule table">
  <rect x="0" y="0" width="550" height="185" fill="white" stroke="black" />
  <!-- Header row -->
  <rect x="0" y="0" width="550" height="35" fill="#e6f2ff" stroke="black" />
  <text x="60" y="22" font-family="Arial" font-size="14" font-weight="bold">Function \(y\)</text>
  <text x="240" y="22" font-family="Arial" font-size="14" font-weight="bold">Derivative \(dy/dx\)</text>
  <text x="420" y="22" font-family="Arial" font-size="14" font-weight="bold">Notes</text>
  <!-- Row: general power -->
  <rect x="0" y="35" width="550" height="30" fill="#f9f9f9" stroke="black" />
  <text x="35" y="55" font-family="Arial" font-size="13">\(x^n\)</text>
  <text x="240" y="55" font-family="Arial" font-size="13">\(n\,x^{n-1}\)</text>
  <text x="420" y="55" font-family="Arial" font-size="13">General power rule</text>
  <!-- Row: constant -->
  <rect x="0" y="65" width="550" height="30" fill="white" stroke="black" />
  <text x="35" y="85" font-family="Arial" font-size="13">\(c\) (constant)</text>
  <text x="240" y="85" font-family="Arial" font-size="13">0</text>
  <text x="420" y="85" font-family="Arial" font-size="13">Constants vanish</text>
  <!-- Row: negative exponent -->
  <rect x="0" y="95" width="550" height="30" fill="#f9f9f9" stroke="black" />
  <text x="35" y="115" font-family="Arial" font-size="13">\(x^{-n}\)</text>
  <text x="240" y="115" font-family="Arial" font-size="13">\(-n\,x^{-n-1}\)</text>
  <text x="420" y="115" font-family="Arial" font-size="13">Negative powers allowed</text>
  <!-- Row: reciprocal -->
  <rect x="0" y="125" width="550" height="30" fill="white" stroke="black" />
  <text x="35" y="145" font-family="Arial" font-size="13">\(\dfrac{1}{x}\)</text>
  <text x="240" y="145" font-family="Arial" font-size="13">\(-\dfrac{1}{x^2}\)</text>
  <text x="420" y="145" font-family="Arial" font-size="13">Special case of \(x^{-1}\)</text>
  <!-- Row: square root -->
  <rect x="0" y="155" width="550" height="30" fill="#f9f9f9" stroke="black" />
  <text x="35" y="175" font-family="Arial" font-size="13">\(\sqrt{x}=x^{1/2}\)</text>
  <text x="240" y="175" font-family="Arial" font-size="13">\(\tfrac{1}{2} x^{-1/2}\)</text>
  <text x="420" y="175" font-family="Arial" font-size="13">Fractional exponent case</text>
</svg>
```

## SVG‑003: Concavity and Points of Inflection
Source: AI‑proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: SVG-003 | Source: AI-proposed teaching enhancement, not present in lesson PDF | Insert from AS1_differentiation_svg.md | Purpose: summarise concavity and points of inflection]`  
Purpose: This diagram summarises how the second derivative \(f''(x)\) determines whether a curve is concave up or concave down and indicates when points of inflection occur.  It also reminds you to check whether \(f'(x)\) is zero at an inflection point to distinguish stationary from non‑stationary inflections.

```svg
<svg width="520" height="170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Concavity table">
  <rect x="0" y="0" width="520" height="170" fill="white" stroke="black" />
  <!-- Header row -->
  <rect x="0" y="0" width="520" height="35" fill="#e6f2ff" stroke="black" />
  <text x="40" y="22" font-family="Arial" font-size="14" font-weight="bold">Second derivative \(f''(x)\)</text>
  <text x="300" y="22" font-family="Arial" font-size="14" font-weight="bold">Curve behaviour</text>
  <!-- Row: concave up -->
  <rect x="0" y="35" width="520" height="35" fill="#f9f9f9" stroke="black" />
  <text x="60" y="57" font-family="Arial" font-size="13">\(f''(x) &gt; 0\)</text>
  <text x="300" y="57" font-family="Arial" font-size="13">Curve concave up (cup‑shaped)</text>
  <!-- Row: concave down -->
  <rect x="0" y="70" width="520" height="35" fill="white" stroke="black" />
  <text x="60" y="92" font-family="Arial" font-size="13">\(f''(x) &lt; 0\)</text>
  <text x="300" y="92" font-family="Arial" font-size="13">Curve concave down (cap‑shaped)</text>
  <!-- Row: point of inflection -->
  <rect x="0" y="105" width="520" height="65" fill="#f9f9f9" stroke="black" />
  <text x="60" y="128" font-family="Arial" font-size="13">\(f''(x) = 0\)</text>
  <text x="300" y="120" font-family="Arial" font-size="13">Potential point of inflection</text>
  <text x="300" y="138" font-family="Arial" font-size="12">If \(f''(x)\) changes sign and \(f'(x)\neq 0\): non‑stationary inflection</text>
  <text x="300" y="154" font-family="Arial" font-size="12">If \(f''(x)\) changes sign and \(f'(x)=0\): stationary inflection</text>
</svg>
```

## 6.3 TikZ Assets

### Source File Metadata

```yaml
filename: "AS1_differentiation_tikz.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/08. Differentiation/AS1_differentiation_tikz.md"
lines: 73
bytes_utf8: 4162
sha256: "b8d99abd248f278fb22b0bd567654097db4b746c8683807a8bfcc5a06aabd548"
```

### Preserved Source Content: AS1_differentiation_tikz.md

# TikZ Diagrams for AS1 differentiation

This file contains TikZ code for the mathematical diagrams used in the AS1 differentiation lesson.  TikZ is a powerful drawing language for LaTeX, ideal for plotting curves and annotating graphs.  Copy the relevant code into a LaTeX document preamble with `\usepackage{tikz}` to render the figures.

## TIKZ‑001: Secant Approaching a Tangent
Source: lesson PDF p.4  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: TIKZ-001 | Source: lesson PDF p.4 | Insert from AS1_differentiation_tikz.md | Purpose: show secant approaching tangent on a curve]`  
Purpose: This diagram illustrates the geometric meaning of the derivative.  For the curve \(y=x^2\), the secant line joining \((x,f(x))\) and \((x+h,f(x+h))\) becomes the tangent line as \(h\) approaches zero.  The horizontal distance \(h\) between the points is indicated below the \(x\)-axis.

```latex
\begin{tikzpicture}[scale=1]
  % Axes
  \draw[->] (-0.2,0) -- (4.5,0) node[right] {$x$};
  \draw[->] (0,-0.5) -- (0,8) node[above] {$y$};
  % Curve y = x^2
  \draw[domain=0:4, smooth, variable=\x, blue, thick] plot ({\x},{\x*\x});
  % Points on the curve
  \draw[fill] (1,1) circle (2pt) node[below left] {$(x,f(x))$};
  \draw[fill] (2,4) circle (2pt) node[above right] {$(x+h,f(x+h))$};
  % Secant line between the two points
  \draw[thick, red] (1,1) -- (2,4) node[midway, above left] {Secant line};
  % Tangent line at x=1: slope = 2; equation y=2(x-1)+1 = 2x-1
  \draw[thick, orange, dashed] (0,-1) -- (2.5,4) node[above right] {Tangent line};
  % Horizontal distance h
  \draw[<->] (1,-0.3) -- (2,-0.3) node[midway, below] {$h$};
\end{tikzpicture}
```

## TIKZ‑002: Graph of \(y = x^3 - 3x\) with Stationary Points
Source: lesson PDF p.5  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: TIKZ-002 | Source: lesson PDF p.5 | Insert from AS1_differentiation_tikz.md | Purpose: graph of \(y=x^3-3x\) illustrating local maxima, minima and point of inflection]`  
Purpose: This graph shows the cubic function \(y=x^3-3x\) together with its local maximum, local minimum and point of inflection.  The axes are labelled and the key points are highlighted to aid understanding of stationary point classification.

```latex
\begin{tikzpicture}[scale=1]
  % Axes
  \draw[->] (-2.5,0) -- (2.5,0) node[right] {$x$};
  \draw[->] (0,-3) -- (0,3) node[above] {$y$};
  % Graph of y = x^3 - 3x
  \draw[domain=-2:2, smooth, variable=\x, blue, thick] plot ({\x},{\x*\x*\x - 3*\x});
  % Local maximum at (-1,2)
  \draw[fill] (-1,2) circle (2pt) node[above left] {local maximum};
  % Inflection point at (0,0)
  \draw[fill] (0,0) circle (2pt) node[above right] {inflection point};
  % Local minimum at (1,-2)
  \draw[fill] (1,-2) circle (2pt) node[below right] {local minimum};
\end{tikzpicture}
```

## TIKZ‑003: Graph of \(y = x^4 - 4x^2\) with Inflection Points
Source: lesson PDF p.7  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: TIKZ-003 | Source: lesson PDF p.7 | Insert from AS1_differentiation_tikz.md | Purpose: graph of \(y=x^4-4x^2\) showing points of inflection]`  
Purpose: This diagram plots the quartic function \(y=x^4-4x^2\) and highlights its local maxima, local minima and points of inflection.  The inflection points occur at \(x = \pm\sqrt{\tfrac{2}{3}}\); although their exact coordinates are irrational, approximate positions are marked for visual clarity.

```latex
\begin{tikzpicture}[scale=1]
  % Axes
  \draw[->] (-3,0) -- (3,0) node[right] {$x$};
  \draw[->] (0,-4) -- (0,3) node[above] {$y$};
  % Graph of y = x^4 - 4x^2
  \draw[domain=-2:2, smooth, variable=\x, blue, thick] plot ({\x},{\x^4 - 4*\x^2});
  % Local maximum at (0,0)
  \draw[fill] (0,0) circle (2pt) node[above right] {local maximum};
  % Local minima at (-1,-3) and (1,-3)
  \draw[fill] (-1,-3) circle (2pt) node[below left] {local minimum};
  \draw[fill] (1,-3) circle (2pt) node[below right] {local minimum};
  % Inflection points at ±sqrt(2/3) ≈ ±0.82; value ≈ -2.22
  \def\a{0.8165}
  \def\yinf{-2.22}
  \draw[fill] (\a,\yinf) circle (2pt) node[above right] {inflection};
  \draw[fill] (-\a,\yinf) circle (2pt) node[above left] {inflection};
\end{tikzpicture}
```

## 7. Interactive Widgets

## 7.1 Widget Assets

### Source File Metadata

```yaml
filename: "AS1_differentiation_widgets.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/08. Differentiation/AS1_differentiation_widgets.md"
lines: 401
bytes_utf8: 18062
sha256: "40cb312f6188bfd3411054e01e11fcf6adefea348d8beb96f9296c6f6b7941f6"
```

### Preserved Source Content: AS1_differentiation_widgets.md

# Interactive Widgets for AS1 differentiation

This file provides HTML/JavaScript code for interactive widgets designed to accompany the differentiation lesson.  Each widget is self‑contained and can be run by copying the code into a file with the extension `.html` and opening it in a modern web browser.  These widgets are intended as learning tools to deepen your understanding of calculus concepts; they are not substitutes for showing written work in an exam.

## WIDGET‑001: Power Rule Explorer
Source: AI‑proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[INTERACTIVE PLACEHOLDER: WIDGET-001 | Source: AI-proposed teaching enhancement, not present in lesson PDF | Insert from AS1_differentiation_widgets.md | Purpose: explore how changing the exponent and coefficient affects the derivative of \(a x^n\)]`  
Purpose: Allow students to experiment with different coefficients and exponents in the function \(f(x) = a x^n\).  As you adjust the controls, the widget displays the resulting derivative \(f'(x) = a n x^{n-1}\) symbolically and numerically evaluates both \(f(x)\) and \(f'(x)\) at a chosen \(x\)-value.

### Learning Goal
Understand how the power rule works for any real exponent and how the coefficient influences the derivative.  Observe how values of \(f(x)\) and \(f'(x)\) change with different choices of \(a\), \(n\) and \(x\).

### Controls
- **Coefficient \(a\):** A number input allowing positive and negative values (default 1, step 0.5).  
- **Exponent \(n\):** A number input for the exponent (default 2, step 0.5).  
- **\(x\)-value:** A number input to evaluate the function and its derivative at a specific \(x\) (default 1, step 0.5).

### Live Outputs
- **Formula display:** Shows \(f(x)\) and its derivative symbolically based on your selected values of \(a\) and \(n\).  
- **Numeric evaluation:** Calculates \(f(x)\) and \(f'(x)\) at the chosen \(x\) and displays the results.

### What to Notice
- When \(n\) is decreased by 1, observe how the exponent of \(x\) in the derivative changes.  
- Negative and fractional exponents are valid; note that the function and derivative may be undefined at certain \(x\)-values (e.g. \(x=0\) when \(n<1\)).  
- The derivative scales with both the exponent and the coefficient.

### Exam Connection
Practising with this widget strengthens intuition about the power rule, which is crucial for differentiating polynomials and rational powers in AS‑level exams.  Remember, however, that in the exam you must show each step of your differentiation by hand.

### How to Run
Copy the code below into a file named `power_rule_explorer.html` (or another name ending with `.html`).  Open it in your web browser to interact with the widget.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Power Rule Explorer</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 20px; }
    label { display: block; margin-bottom: 10px; }
    input[type="number"] { width: 80px; margin-left: 5px; }
    .output { margin-top: 20px; font-size: 16px; }
    .output span { display: block; margin-top: 5px; }
  </style>
</head>
<body>
  <h2>Power Rule Explorer</h2>
  <label>Coefficient a:
    <input id="aInput" type="number" value="1" step="0.5">
  </label>
  <label>Exponent n:
    <input id="nInput" type="number" value="2" step="0.5">
  </label>
  <label>x-value:
    <input id="xInput" type="number" value="1" step="0.5">
  </label>
  <div class="output">
    <span id="formulaDisplay"></span>
    <span id="valueDisplay"></span>
  </div>
  <script>
    function updatePower() {
      const a = parseFloat(document.getElementById('aInput').value);
      const n = parseFloat(document.getElementById('nInput').value);
      const x = parseFloat(document.getElementById('xInput').value);
      // Build symbolic strings
      const fStr = a + 'x^' + n;
      const derivCoeff = a * n;
      const derivativeExp = n - 1;
      const derivativeStr = derivCoeff + 'x^' + derivativeExp;
      // Evaluate numeric values, guarding against invalid operations
      let fVal = 'undefined';
      let dVal = 'undefined';
      if (!(x === 0 && n < 0)) {
        fVal = a * Math.pow(x, n);
      }
      if (!(x === 0 && derivativeExp < 0)) {
        dVal = derivCoeff * Math.pow(x, derivativeExp);
      }
      document.getElementById('formulaDisplay').innerHTML =
        '<strong>f(x)</strong> = ' + fStr + ', &nbsp; <strong>f\'(x)</strong> = ' + derivativeStr;
      document.getElementById('valueDisplay').innerHTML =
        'At x = ' + x + ': f(x) = ' + (typeof fVal === 'number' ? fVal.toFixed(3) : fVal) + ', ' +
        'f\'(x) = ' + (typeof dVal === 'number' ? dVal.toFixed(3) : dVal);
    }
    document.querySelectorAll('input').forEach(function(input) {
      input.addEventListener('input', updatePower);
    });
    updatePower();
  </script>
</body>
</html>
```

## WIDGET‑002: Tangent and Normal Explorer
Source: AI‑proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[INTERACTIVE PLACEHOLDER: WIDGET-002 | Source: AI-proposed teaching enhancement, not present in lesson PDF | Insert from AS1_differentiation_widgets.md | Purpose: pick a function and see the tangent and normal at any point]`  
Purpose: Visualise how the tangent and normal lines to a curve depend on the point of contact.  Choose a function and adjust the \(x\)-value to see the gradient, the tangent equation and the normal equation, all plotted on a simple graph.

### Learning Goal
Develop a deeper understanding of tangents and normals, and the relationship between a function and its derivative.  See how the gradient changes along the curve and how the normal is always perpendicular to the tangent.

### Controls
- **Function selector:** Choose between two predefined functions: \(f(x)=x^2\) and \(f(x)=x^3-3x\).  
- **x-value slider:** Move a slider to select the point of tangency on the horizontal axis (default range \([-3,3]\)).

### Live Outputs
- **Graph display:** An interactive canvas shows the function, the selected point, the tangent line and the normal line.  
- **Gradient and equations:** Text output displays the gradient of the tangent \(f'(x)\) and the explicit equations of the tangent and normal lines.

### What to Notice
- As you move the slider, the slope of the tangent line changes according to the derivative.  
- The normal line always has gradient \(-1/m\) when the tangent has gradient \(m\); watch how it flips steepness and direction.  
- Compare the behaviour of the quadratic and cubic functions: the cubic has a point of inflection where the tangent gradient passes through zero.

### Exam Connection
This widget provides a dynamic way to practise writing tangent and normal equations, skills frequently tested in AS‑level exams.  Remember to use the point–slope form and to simplify equations when answering exam questions.

### How to Run
Copy the code below into a file named `tangent_normal_explorer.html` and open it in your web browser.  Use the controls at the top to explore the functions.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Tangent and Normal Explorer</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 20px; }
    #controls { margin-bottom: 10px; }
    canvas { border: 1px solid #ccc; }
    .output { margin-top: 10px; }
  </style>
</head>
<body>
  <h2>Tangent and Normal Explorer</h2>
  <div id="controls">
    <label>Function:
      <select id="funcSelect">
        <option value="quad">f(x) = x^2</option>
        <option value="cubic">f(x) = x^3 - 3x</option>
      </select>
    </label>
    <label style="margin-left: 20px;">x-value:
      <input id="xSlider" type="range" min="-3" max="3" step="0.1" value="0" style="width: 200px;">
    </label>
  </div>
  <canvas id="graphCanvas" width="400" height="400"></canvas>
  <div class="output" id="outputInfo"></div>
  <script>
    const canvas = document.getElementById('graphCanvas');
    const ctx = canvas.getContext('2d');
    const funcSelect = document.getElementById('funcSelect');
    const xSlider = document.getElementById('xSlider');
    // Coordinate system mapping
    const xMin = -3, xMax = 3;
    const yMin = -5, yMax = 5;
    function toCanvasX(x) { return (x - xMin) / (xMax - xMin) * canvas.width; }
    function toCanvasY(y) { return canvas.height - (y - yMin) / (yMax - yMin) * canvas.height; }
    function fValue(func, x) {
      switch (func) {
        case 'quad': return x * x;
        case 'cubic': return x * x * x - 3 * x;
      }
    }
    function fDeriv(func, x) {
      switch (func) {
        case 'quad': return 2 * x;
        case 'cubic': return 3 * x * x - 3;
      }
    }
    function draw() {
      const func = funcSelect.value;
      const x0 = parseFloat(xSlider.value);
      const y0 = fValue(func, x0);
      const m = fDeriv(func, x0);
      // Normal slope; handle zero derivative separately
      let mNorm;
      if (m === 0) {
        mNorm = Infinity;
      } else {
        mNorm = -1 / m;
      }
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Draw axes
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 1;
      // x-axis
      const yZero = toCanvasY(0);
      ctx.beginPath();
      ctx.moveTo(0, yZero);
      ctx.lineTo(canvas.width, yZero);
      ctx.stroke();
      // y-axis
      const xZero = toCanvasX(0);
      ctx.beginPath();
      ctx.moveTo(xZero, 0);
      ctx.lineTo(xZero, canvas.height);
      ctx.stroke();
      // Plot function
      ctx.strokeStyle = 'blue';
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let px = 0; px <= canvas.width; px++) {
        const x = xMin + (xMax - xMin) * (px / canvas.width);
        const y = fValue(func, x);
        const py = toCanvasY(y);
        if (px === 0) {
          ctx.moveTo(px, py);
        } else {
          ctx.lineTo(px, py);
        }
      }
      ctx.stroke();
      // Plot tangent line
      ctx.strokeStyle = 'orange';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      for (let px = 0; px <= canvas.width; px++) {
        const x = xMin + (xMax - xMin) * (px / canvas.width);
        const y = m * (x - x0) + y0;
        const py = toCanvasY(y);
        if (px === 0) {
          ctx.moveTo(px, py);
        } else {
          ctx.lineTo(px, py);
        }
      }
      ctx.stroke();
      // Plot normal line
      ctx.strokeStyle = 'green';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      for (let px = 0; px <= canvas.width; px++) {
        const x = xMin + (xMax - xMin) * (px / canvas.width);
        let y;
        if (m === 0) {
          // Vertical normal line at x0
          if (Math.abs(x - x0) < 0.01) {
            y = yMin;
          } else {
            y = NaN;
          }
        } else {
          y = mNorm * (x - x0) + y0;
        }
        const py = toCanvasY(y);
        if (px === 0) {
          ctx.moveTo(px, py);
        } else if (!isNaN(y)) {
          ctx.lineTo(px, py);
        }
      }
      ctx.stroke();
      // Mark the point of tangency
      ctx.fillStyle = 'red';
      const px0 = toCanvasX(x0);
      const py0 = toCanvasY(y0);
      ctx.beginPath();
      ctx.arc(px0, py0, 4, 0, 2 * Math.PI);
      ctx.fill();
      // Update text output
      const tangentEq = 'y = ' + m.toFixed(2) + '(x - ' + x0.toFixed(2) + ') + ' + y0.toFixed(2);
      let normalEq;
      if (m === 0) {
        normalEq = 'x = ' + x0.toFixed(2);
      } else {
        normalEq = 'y = ' + mNorm.toFixed(2) + '(x - ' + x0.toFixed(2) + ') + ' + y0.toFixed(2);
      }
      document.getElementById('outputInfo').innerHTML =
        '<strong>Gradient f\'(x)</strong> = ' + m.toFixed(2) + '<br>' +
        '<strong>Tangent:</strong> ' + tangentEq + '<br>' +
        '<strong>Normal:</strong> ' + normalEq;
    }
    funcSelect.addEventListener('change', draw);
    xSlider.addEventListener('input', draw);
    draw();
  </script>
</body>
</html>
```

## WIDGET‑003: Stationary Points Explorer
Source: AI‑proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[INTERACTIVE PLACEHOLDER: WIDGET-003 | Source: AI-proposed teaching enhancement, not present in lesson PDF | Insert from AS1_differentiation_widgets.md | Purpose: adjust coefficients of a cubic function and watch how its stationary points and classifications change]`  
Purpose: This widget lets you specify the coefficients of a cubic function \(f(x)=ax^3+bx^2+cx+d\), then it automatically finds and classifies the stationary points by solving \(f'(x)=0\) and evaluating the second derivative.

### Learning Goal
Explore how varying the coefficients of a cubic changes the number and nature of its stationary points.  Observe how the discriminant of the derivative determines whether you have two, one or no real stationary points.

### Controls
- **Coefficient inputs:** Four number inputs for \(a\), \(b\), \(c\) and \(d\).  Default values are set to 1, 0, 0 and 0 to illustrate the simple cubic \(x^3\).  
- **Update button:** Calculates stationary points and updates the output when clicked.

### Live Outputs
- **Stationary points list:** Shows the \(x\)-coordinates and \(y\)-coordinates of any real stationary points.  
- **Classification:** Indicates whether each stationary point is a local maximum, local minimum or point of inflection based on the sign of \(f''(x)\).

### What to Notice
- Changing \(a\) affects the overall steepness and orientation of the cubic.  
- The discriminant of the derivative \(\Delta = 4b^2 - 12ac\) controls the number of real stationary points: if \(\Delta > 0\) there are two distinct stationary points; if \(\Delta = 0\) there is exactly one stationary point (a repeated root); if \(\Delta < 0\) there are no real stationary points.  
- The sign of the second derivative at each stationary point tells you its nature.

### Exam Connection
Understanding how to find and classify stationary points of a cubic function is vital for sketching and optimisation questions.  This widget gives immediate feedback when you change coefficients, reinforcing the connection between algebraic manipulation and curve behaviour.

### How to Run
Save the following code as `stationary_points_explorer.html` and open it in a web browser.  Adjust the coefficients and click **Update** to see the results.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Stationary Points Explorer</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 20px; }
    label { display: block; margin: 5px 0; }
    input[type="number"] { width: 60px; }
    #results { margin-top: 15px; }
  </style>
</head>
<body>
  <h2>Stationary Points Explorer</h2>
  <p>Specify a cubic function f(x) = a x^3 + b x^2 + c x + d.  Click <strong>Update</strong> to find and classify its stationary points.</p>
  <label>a: <input id="aCoef" type="number" value="1" step="0.5"></label>
  <label>b: <input id="bCoef" type="number" value="0" step="0.5"></label>
  <label>c: <input id="cCoef" type="number" value="0" step="0.5"></label>
  <label>d: <input id="dCoef" type="number" value="0" step="0.5"></label>
  <button id="updateBtn">Update</button>
  <div id="results"></div>
  <script>
    function classifyStationaryPoints() {
      const a = parseFloat(document.getElementById('aCoef').value);
      const b = parseFloat(document.getElementById('bCoef').value);
      const c = parseFloat(document.getElementById('cCoef').value);
      const d = parseFloat(document.getElementById('dCoef').value);
      const resultsDiv = document.getElementById('results');
      resultsDiv.innerHTML = '';
      if (a === 0) {
        resultsDiv.textContent = 'Not a cubic function (a must be non-zero).';
        return;
      }
      // Derivative coefficients: 3 a x^2 + 2 b x + c
      const A = 3 * a;
      const B = 2 * b;
      const C = c;
      // Discriminant of derivative
      const discriminant = B * B - 4 * A * C;
      function secondDerivative(x) {
        return 6 * a * x + 2 * b;
      }
      // Helper to append result paragraphs
      function addResult(text) {
        const p = document.createElement('p');
        p.innerHTML = text;
        resultsDiv.appendChild(p);
      }
      addResult('<strong>Derivative:</strong> f\'(x) = ' + A + 'x^2 + ' + B + 'x + ' + C);
      addResult('<strong>Discriminant:</strong> Δ = ' + discriminant.toFixed(3));
      if (discriminant < 0) {
        addResult('The derivative has no real roots → the cubic has no stationary points.');
        return;
      }
      if (discriminant === 0) {
        const x0 = -B / (2 * A);
        const y0 = a * Math.pow(x0, 3) + b * Math.pow(x0, 2) + c * x0 + d;
        const f2 = secondDerivative(x0);
        let nature;
        if (f2 > 0) {
          nature = 'stationary point of inflection (minimum curvature)';
        } else if (f2 < 0) {
          nature = 'stationary point of inflection (maximum curvature)';
        } else {
          nature = 'point of inflection';
        }
        addResult('One repeated stationary point at x = ' + x0.toFixed(3) + ', y = ' + y0.toFixed(3) + ' — ' + nature + '.');
      } else {
        const sqrtDisc = Math.sqrt(discriminant);
        const x1 = (-B + sqrtDisc) / (2 * A);
        const x2 = (-B - sqrtDisc) / (2 * A);
        const xs = [x1, x2];
        xs.forEach(function(xVal, idx) {
          const yVal = a * Math.pow(xVal, 3) + b * Math.pow(xVal, 2) + c * xVal + d;
          const f2Val = secondDerivative(xVal);
          let nature;
          if (f2Val > 0) nature = 'local minimum';
          else if (f2Val < 0) nature = 'local maximum';
          else nature = 'point of inflection';
          addResult('Stationary point ' + (idx + 1) + ': x = ' + xVal.toFixed(3) + ', y = ' + yVal.toFixed(3) + ' — ' + nature + '.');
        });
      }
    }
    document.getElementById('updateBtn').addEventListener('click', classifyStationaryPoints);
    classifyStationaryPoints();
  </script>
</body>
</html>
```

## 8. Agent Retrieval Notes

Use Section 5 for teaching sequence and explanation. Use Sections 6 and 7 as asset banks. When an asset is marked as suggested, AI-proposed, generated, or uncertain, preserve that provenance in downstream responses.
