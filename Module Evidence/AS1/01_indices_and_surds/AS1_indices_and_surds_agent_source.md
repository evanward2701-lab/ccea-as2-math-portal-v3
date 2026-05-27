# AS1 Indices and Surds Lesson Agent Source

## 0. AI-Agent Usage Instructions

This file is a source for teaching, revision, explanation, diagnostics and lesson retrieval. Core lesson content is in Section 5. Diagram assets are in Section 6. Widgets are in Section 7. Use the lesson content before generated enhancement notes. Do not claim AI-proposed assets came from the original PDF. Preserve syllabus gap notes and uncertainty notes. Use UK/CCEA mathematical vocabulary.

## 1. Pack Metadata

```yaml
pack_type: lesson
unit_code: AS1
unit_name: CCEA AS1 Pure Mathematics
topic_slug: "01_indices_and_surds"
topic_title: "Indices and Surds"
source_folder: "/Users/evanward/Documents/AS Portal - New /AS1 Files/01. Indices & Surds"
output_file: "/Users/evanward/Documents/AS Portal - New /AS1 Files/00_AGENT_SOURCE_PACKS/01_indices_and_surds/AS1_indices_and_surds_agent_source.md"
created_from_files:
  lesson: "AS1_indices_and_surds_lesson.md"
  questions: null
  solutions: null
  mermaid: "AS1_indices_and_surds_mermaid.md"
  svg: "AS1_indices_and_surds_svg.md"
  tikz: "AS1_indices_and_surds_tikz.md"
  widgets: "AS1_indices_and_surds_widgets.md"
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
| lesson | AS1_indices_and_surds_lesson.md | 586 | 34486 | `6139a3f3bd88c8dbd2400524ab32f5a9b56082987eaa00c1a5e24e8a8fb7b8f8` |
| mermaid | AS1_indices_and_surds_mermaid.md | 48 | 2607 | `cbe277b98a9145e4fbb39a0bfac556f7acdc5d4ab30a39e4d047d95c831fd280` |
| svg | AS1_indices_and_surds_svg.md | 70 | 5487 | `fd256c4d15fdf2d588fcfddbd4f827d8f9ca8cd51fb8b262d855c1c985884695` |
| tikz | AS1_indices_and_surds_tikz.md | 31 | 1520 | `3cf5dd4d4e60ca0c2b96870d6dffd344a90a6ec28d37b6eb607435a91c8412d7` |
| widgets | AS1_indices_and_surds_widgets.md | 278 | 12360 | `a56255f3c1b5dc32aeb3f60a644bfcae24e149c22755d774d6e6a475e0bb03e1` |

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
filename: "AS1_indices_and_surds_lesson.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/01. Indices & Surds/AS1_indices_and_surds_lesson.md"
lines: 586
bytes_utf8: 34486
sha256: "6139a3f3bd88c8dbd2400524ab32f5a9b56082987eaa00c1a5e24e8a8fb7b8f8"
```

### Preserved Source Content: AS1_indices_and_surds_lesson.md

# Indices and Surds

**Unit:** CCEA AS1 Pure Mathematics | **Source:** INDICES AND SURDS (1) lesson PDF | **Date generated:** 22 May 2026

This lesson pack builds a complete, beginner‑friendly introduction to indices and surds.  The notes, diagrams and interactive tools are designed for self‑study.  They follow the CCEA specification and elaboration document for Unit AS1 and extract ideas from the source lesson PDF.  Wherever the PDF omits material required by the specification (for example, rationalising denominators), this pack supplements the content to ensure full coverage.

## 2. Specification Alignment

The table below summarises how this lesson meets the specification and where to find each element.  Specification statements come from the CCEA GCE Mathematics specification and elaboration document【556697932039296†L420-L425】【802688729852813†L163-L168】.

| CCEA specification point | Elaboration guidance | Covered in this lesson? | Where it appears | Gap or action needed | Suggested visual/widget support |
|---|---|---|---|---|---|
| **Demonstrate understanding of and use the laws of indices for all rational exponents.** | Students must know the eight index laws and be able to work with integer, negative and fractional (rational) exponents【556697932039296†L420-L425】. The elaboration document emphasises that these laws apply to rational exponents and that students must apply them correctly【802688729852813†L163-L168】. | **Yes** | Sections 7.1–7.3 explain each law, including negative and fractional indices. Examples and practice questions illustrate their use. | None. The lesson introduces fractional indices explicitly because the PDF only listed integer and negative rules. | MMD‑002 concept map summarises the eight laws; SVG‑001 table of index laws; Widget 001 allows interactive exploration of fractional exponents. |
| **Use and manipulate surds, including rationalising the denominator.** | The specification requires students to simplify surds, combine like surds and rationalise denominators【556697932039296†L420-L425】. The elaboration document gives no extra detail but the specification implies that rationalising denominators must include both simple and binomial cases. | **Yes (extended)** | Sections 7.4–7.8 cover simplifying surds, multiplying and dividing, collecting like surds and rationalising denominators. Worked examples mirror the PDF and add rationalising techniques not present in the original lesson. | The PDF does not cover rationalising denominators. This pack adds examples and exercises to fill that gap. | MMD‑001 flowchart for simplifying surds; SVG‑001 includes surd rules; Widget 002 surd simplifier; Widget 003 rationalising denominator helper. |

## 3. Learning Objectives

By the end of this lesson you should be able to:

* Identify and correctly apply the eight laws of indices for integer, negative and fractional exponents.
* Convert negative indices into reciprocal form and fractional indices into roots.
* Simplify surds by extracting the largest perfect square factor and expressing the result in simplest surd form.
* Multiply and divide surds using the product and quotient rules, and collect like surds correctly.
* Rationalise denominators of the form \(\frac{1}{\sqrt{a}}\) and \(\frac{1}{a+\sqrt{b}}\) by multiplying by suitable forms of 1.
* Expand brackets involving surds using FOIL and special products, then simplify and collect like surds.
* Recognise and avoid common mistakes such as adding under a single root or dropping terms when squaring binomials.
* Practise exam‑style problems and present solutions clearly in the form \(a + b\sqrt{c}\) with no surd left inside a root.

## 4. Compact Prerequisite Recap

This section briefly reminds you of GCSE knowledge needed here.

* **Indices (Exponents).**  An index (or exponent) tells you how many times to multiply a base by itself.  For example, \(2^3 = 2\times2\times2 = 8\).  A zero index gives 1 (\(5^0=1\)) and a negative index gives a reciprocal (\(2^{-1}=\tfrac{1}{2}\)).
* **Square roots.**  The square root of a positive number \(n\) is the number which, when multiplied by itself, gives \(n\).  For example, \(\sqrt{9}=3\) because \(3\times3=9\).  GCSE often restricts square roots to perfect squares; in AS mathematics we simplify roots to leave irrational parts as \(\sqrt{\phantom{n}}\).
* **FOIL.**  The FOIL method stands for *First–Outer–Inner–Last*.  It helps you expand the product of two binomials \((a+b)(c+d)\) by multiplying the first terms, the outer pair, the inner pair and the last terms, then combining like terms.

If any of these concepts feel rusty, review them before diving into the main theory.  The interactive widgets later in this lesson will also help reinforce these ideas.

## 5. Big Picture Explanation

Indices and surds underpin much of algebra and calculus.  The **laws of indices** allow you to simplify and manipulate expressions involving powers, whether those powers are whole numbers, fractions or negatives.  Correct use of these laws lets you solve equations, factorise expressions and work efficiently with functions in later topics.  

**Surds** are irrational roots (usually square roots) that cannot be expressed as rational numbers.  Leaving answers in *simplest surd form* keeps exactness in algebraic problems involving roots.  Surds appear throughout the AS course, for example when completing the square or solving quadratic equations.  Being fluent with surds avoids errors when rationalising denominators or combining roots.

Examiners expect you to apply these techniques confidently.  Many questions in the AS1 paper start with a straightforward simplification or surd manipulation before progressing to more complex algebra.  Mastering indices and surds therefore sets a strong foundation for the rest of your studies.

## 6. Key Definitions and Notation

* **Base and index:** In \(a^n\), \(a\) is the *base* and \(n\) is the *index* or *exponent*.  It tells you how many times to multiply the base by itself.  When \(n\) is a fraction, the expression represents a root.
* **Rational exponent:** A rational exponent is one that can be written as a fraction \(\tfrac{m}{n}\).  The laws of indices extend naturally to these exponents: \(a^{\frac{m}{n}}=\sqrt[n]{a^m}=\left(\sqrt[n]{a}\right)^m\) for \(a>0\) when \(n\) is even.
* **Surd:** A surd is an irrational root (usually a square root) that cannot be expressed as a rational number.  Examples include \(\sqrt{2}\) and \(\sqrt{3}\).  
* **Simplest surd form:** A surd is in simplest form when all square factors are removed from under the root and no denominators contain surds.  For instance, \(6\sqrt{2}\) is the simplest form of \(\sqrt{72}\) and \(\frac{\sqrt{3}}{2}\) is the simplest form of \(\frac{1}{\sqrt{12}}\).
* **Rationalising the denominator:** To rationalise a denominator means to rewrite a fraction so that no surd remains in the denominator.  For a simple denominator \(\sqrt{a}\), multiply top and bottom by \(\sqrt{a}\).  For a binomial denominator \(a+\sqrt{b}\), multiply top and bottom by the *conjugate* \(a-\sqrt{b}\).

Throughout this lesson we use standard algebraic notation.  Expressions like \(x^n\), \(\sqrt{n}\) and \(\frac{1}{\sqrt{a}}\) are interpreted according to these definitions.

## 7. Core Theory

### 7.1 Laws of Indices – Integer Exponents

The lesson PDF lists eight fundamental rules for indices.  They work for any real base \(a\) (with the obvious restrictions that \(a\neq 0\) when dividing or taking negative powers).

1. **Multiplication:** \(a^m \times a^n = a^{m+n}\).  When multiplying powers with the same base, **add** the indices.  *Example:* \(x^2 \times x^7 = x^{2+7} = x^9\).
2. **Division:** \(a^m \div a^n = a^{m-n}\).  When dividing powers with the same base, **subtract** the indices.  *Example:* \(10^5 \div 10^2 = 10^{5-2} = 10^3\).
3. **Power of a power:** \((a^m)^n = a^{mn}\).  Raising a power to another power multiplies the indices.  *Example:* \((x^3)^4 = x^{12}\).
4. **Negative index:** \(a^{-n} = \frac{1}{a^n}\) (for \(a \neq 0\)).  A negative exponent denotes a reciprocal.  *Example:* \(2^{-3}=\frac{1}{2^3}=\frac{1}{8}\).
5. **Zero index:** \(a^0=1\) for \(a \neq 0\).  Any non‑zero number raised to the power 0 is 1.  *Example:* \(5^0=1\).
6. **Unit index:** \(a^1=a\).  Any number to the power 1 is itself.

These six rules appear in the PDF’s table and form the backbone of exponent manipulation.  Remember that addition or subtraction of indices only occurs when **multiplying** or **dividing** powers with the same base.  Adding bases does not allow you to add exponents (see Section 11 for common mistakes).

### 7.2 Negative and Fractional Indices

The specification requires understanding of rational exponents【556697932039296†L420-L425】, so we extend the index laws to fractions:

* **Negative indices** behave as reciprocals: \(a^{-n} = \frac{1}{a^n}\).  For example, \(3^{-2} = \frac{1}{3^2} = \frac{1}{9}\).
* **Fractional indices:** For \(a>0\) and positive integers \(m,n\), a fractional exponent denotes a root: \(a^{\frac{1}{n}} = \sqrt[n]{a}\) and \(a^{\frac{m}{n}} = \sqrt[n]{a^m} = \left(\sqrt[n]{a}\right)^m\).  For instance,

  \[
  16^{\frac{3}{2}} = \sqrt[2]{16^3} = \sqrt{4096} = 64,\quad\text{or}\quad 16^{\frac{3}{2}} = (\sqrt{16})^3 = 4^3=64.
  \]

  Similarly, \(27^{2/3} = \sqrt[3]{27^2} = \sqrt[3]{729} = 9\) because \(27=3^3\).

* **General index law:** The laws of indices still hold for rational exponents.  For example, \(a^{p/q} \times a^{r/s} = a^{p/q+r/s}\) and \((a^{p/q})^r = a^{pr/q}\).  However, when \(a<0\) and the denominator of the exponent is even, fractional exponents produce complex numbers; such cases are outside the AS1 syllabus.

### 7.3 Common Index Mistakes

Misapplication of the laws leads to frequent errors.  Avoid the following traps (see the exam trap in the PDF):

* **Adding powers incorrectly:** \(a^m + a^n \neq a^{m+n}\).  You cannot add indices when *adding* bases; the law only applies to multiplication.
* **Distributing powers over addition:** \((a+b)^n \neq a^n + b^n\).  Powers distribute over multiplication, not over addition.  To expand \((a+b)^n\) you need the binomial theorem.
* **Mishandling surds:** \(\sqrt{a} + \sqrt{b} \neq \sqrt{a+b}\) in general.  Only when \(a\) and \(b\) produce like surds can they be combined (see Section 7.6).

Use the interactive widget (Widget 001) to explore how negative and fractional indices behave.

### 7.4 Rules of Surds

Surds are manipulated using three key rules (from the PDF’s green box):

1. **Product rule:** \(\sqrt{a}\,\sqrt{b} = \sqrt{ab}\) for \(a\geq0, b\geq0\).  Example: \(\sqrt{2} \times \sqrt{18} = \sqrt{36} = 6\).
2. **Quotient rule:** \(\sqrt{a}/\sqrt{b} = \sqrt{a/b}\) for \(a\geq0, b>0\).  Example: \(\sqrt{50}/\sqrt{2} = \sqrt{50/2} = \sqrt{25} = 5\).
3. **Collecting like surds:** \(a\sqrt{c} + b\sqrt{c} = (a+b)\sqrt{c}\).  Example: \(3\sqrt{5} + 2\sqrt{5} = 5\sqrt{5}\).

These rules allow multiplication, division and addition of surds, provided that any sums involve *like surds* (the same number under the root).

### 7.5 Simplifying Surds – Method

To write a surd in simplest form, follow this procedure:

1. **Find the largest perfect square factor** of the number under the root.  Perfect squares include \(1, 4, 9, 16, 25, 36, 49, 64, 81, \dots\).
2. **Split the number** into the product of that perfect square and its co‑factor.  For example, \(72 = 36\times2\).
3. **Take the square root of the perfect square** outside the radical and leave the remainder inside.  Thus \(\sqrt{72} = \sqrt{36\times 2} = \sqrt{36}\,\sqrt{2} = 6\sqrt{2}\).
4. **Repeat if necessary**.  If the remaining factor under the root still contains a perfect square, extract it as well.  Stop once nothing under the root can be simplified further.

**Example 1:** Simplify \(\sqrt{72}\).

\[
72 = 36\times 2,\quad \sqrt{72}=\sqrt{36}\,\sqrt{2}=6\sqrt{2}.
\]

**Example 2:** Simplify \(\sqrt{98}\).  Write \(98=49\times2\).  Then
\[
\sqrt{98}=\sqrt{49}\,\sqrt{2}=7\sqrt{2}.
\]

**Example 3:** Simplify \(\sqrt{200}\).  The largest square factor of 200 is 100.  Hence
\[
\sqrt{200}=\sqrt{100}\,\sqrt{2}=10\sqrt{2}.
\]

**Example 4:** Simplify \(\sqrt{288}\).  Since \(288=144\times2\), we obtain
\[
\sqrt{288}=\sqrt{144}\,\sqrt{2}=12\sqrt{2}.
\]

When simplifying surds, always use the **largest** square factor first – this leads directly to the simplest form.  See the blue “Top Tip” box in the PDF for this advice.  The flowchart diagram (Mermaid MMD‑001) summarises this method.

### 7.6 Operations with Surds

**Multiplying surds.**  Use the product rule: \(\sqrt{a}\,\sqrt{b} = \sqrt{ab}\), simplify the resulting surd and, if possible, express the final answer in the form \(k\sqrt{c}\).  
*Example:* \(\sqrt{8}\,\sqrt{18} = \sqrt{144} = 12\).

**Dividing surds.**  Use the quotient rule: \(\sqrt{a}/\sqrt{b} = \sqrt{a/b}\).  Ensure that the denominator is positive.  
*Example:* \(\sqrt{50}/\sqrt{2} = \sqrt{25} = 5\).

**Collecting like surds.**  Only surds with the same radicand (number under the root) can be added or subtracted.  Simplify each surd first to reveal common radicands, then combine coefficients.

**Example:** Simplify \(5\sqrt{18} - 3\sqrt{2} + 8\).  First rewrite \(\sqrt{18} = 3\sqrt{2}\).  Then \(5\sqrt{18} = 5 \times 3\sqrt{2} = 15\sqrt{2}\).  The expression becomes \(15\sqrt{2} - 3\sqrt{2} + 8 = 12\sqrt{2} + 8\).

### 7.7 Rationalising Denominators

The specification requires rationalising denominators【556697932039296†L420-L425】, which the PDF does not cover.  Two standard cases occur.

**Case 1: Simple radical denominator.**  To rationalise \(\displaystyle \frac{k}{\sqrt{a}}\) (with \(a>0\)) multiply numerator and denominator by \(\sqrt{a}\):

\[
\frac{k}{\sqrt{a}} \times \frac{\sqrt{a}}{\sqrt{a}} = \frac{k\sqrt{a}}{a}.
\]

*Example:* \(\frac{2}{\sqrt{5}}\) becomes \(\frac{2\sqrt{5}}{5}\).

**Case 2: Binomial denominator containing a surd.**  For expressions like \(\displaystyle \frac{1}{a+\sqrt{b}}\), multiply by the **conjugate** \(a-\sqrt{b}\).  The difference of squares formula removes the surd in the denominator:

\[
\frac{1}{a+\sqrt{b}} \times \frac{a-\sqrt{b}}{a-\sqrt{b}} = \frac{a-\sqrt{b}}{a^2 - (\sqrt{b})^2} = \frac{a-\sqrt{b}}{a^2-b}.
\]

*Example:* Rationalise \(\displaystyle \frac{3}{4+\sqrt{5}}\).  Multiply numerator and denominator by \(4-\sqrt{5}\) to obtain

\[
\frac{3}{4+\sqrt{5}} = \frac{3(4-\sqrt{5})}{(4+\sqrt{5})(4-\sqrt{5})} = \frac{12-3\sqrt{5}}{16-5} = \frac{12-3\sqrt{5}}{11}.
\]

These techniques appear in the worked examples and exercises.  The third interactive widget (Widget 003) lets you practise rationalising denominators dynamically.

### 7.8 Expanding Brackets with Surds

When multiplying binomials involving surds, treat the surd terms like algebraic variables and use FOIL.  After expanding, simplify any surds and collect like terms.  Two special identities help:

* **Square of a binomial:** \((a+b)^2=a^2+2ab+b^2\).  *Example:* \((3+\sqrt{2})^2 = 3^2 + 2\times3\times\sqrt{2} + (\sqrt{2})^2 = 9 + 6\sqrt{2} + 2 = 11 + 6\sqrt{2}\).
* **Difference of squares:** \((a+b)(a-b)=a^2-b^2\).  *Example:* \((4+\sqrt{5})(4-\sqrt{5}) = 16 - 5 = 11\).

Always simplify surds before applying these identities.  The next section provides detailed worked examples.

## 8. Visual Asset Integration

The lesson PDF contains several diagrams and tables that have been rebuilt or summarised here.  Placeholders indicate where to insert diagrams stored in the separate diagram files.

### Laws of indices and surds summary

The PDF’s first page includes a table of eight index laws and three surd rules.  A clean vector version of this summary is provided as an SVG diagram.  Insert it here for quick reference:

```markdown
[VISUAL PLACEHOLDER: SVG-001 | Source: lesson PDF p.1 | Insert from AS1_indices_and_surds_svg.md | Purpose: visual summary of the eight laws of indices and the three rules of surds]
```

### Simplifying surds flowchart

The method for simplifying surds is summarised in a flowchart.  This flowchart guides you through finding the largest square factor, extracting roots and checking for further simplification.  A Mermaid version is stored separately.  Insert it here:

```markdown
[VISUAL PLACEHOLDER: MMD-001 | Source: lesson PDF p.2 | Insert from AS1_indices_and_surds_mermaid.md | Purpose: flowchart showing the steps to simplify a surd]
```

### Concept map of index and surd laws

To help you see connections between the various rules, an AI‑proposed concept map summarises the eight laws of indices alongside the core surd rules.  This visual was not present in the PDF.  Insert it here:

```markdown
[VISUAL PLACEHOLDER: MMD-002 | Source: AI-proposed teaching enhancement, not present in lesson PDF | Insert from AS1_indices_and_surds_mermaid.md | Purpose: concept map linking index laws, surd rules and their conditions]
```

### Exponent behaviour graph

An AI‑proposed TikZ diagram plots \(y=x^2\), \(y=\sqrt{x}\) and \(y=x^{-1}\) on the same axes.  This graph illustrates how positive, fractional and negative exponents behave differently.  Insert it here:

```markdown
[VISUAL PLACEHOLDER: TIKZ-001 | Source: AI-proposed teaching enhancement, not present in lesson PDF | Insert from AS1_indices_and_surds_tikz.md | Purpose: graph comparing quadratic, square‑root and reciprocal functions]
```

## 9. Interactive Learning Widgets

Interactive widgets allow you to experiment with the abstract rules in a hands‑on way.  Code for each widget is stored separately; follow the “How to Run” instructions in the widgets file.

* **Fractional exponent explorer:** Use sliders to choose a base \(a\) and rational exponent \(\frac{m}{n}\).  The widget computes \(a^{m/n}\), shows it as a root and reciprocal when appropriate, and plots the approximate value.  
  
  ```markdown
  [INTERACTIVE PLACEHOLDER: WIDGET-001 | Source: AI-proposed teaching enhancement, not present in lesson PDF | Insert from AS1_indices_and_surds_widgets.md | Purpose: slider exploration showing how changing the base and exponent affects the value of a power]
  ```

* **Surd simplifier:** Enter a positive integer and the widget returns its simplest surd form by extracting the largest square factor.  It mirrors the method described in Section 7.5.  
  
  ```markdown
  [INTERACTIVE PLACEHOLDER: WIDGET-002 | Source: lesson PDF p.2 | Insert from AS1_indices_and_surds_widgets.md | Purpose: interactive tool to practise simplifying surds]
  ```

* **Rationalising denominators:** Input a simple or binomial surd denominator and see the rationalised form step‑by‑step.  Explore how multiplying by conjugates removes surds from denominators.  
  
  ```markdown
  [INTERACTIVE PLACEHOLDER: WIDGET-003 | Source: AI-proposed teaching enhancement, not present in lesson PDF | Insert from AS1_indices_and_surds_widgets.md | Purpose: tool to practise rationalising simple and binomial surd denominators]
  ```

## 10. Worked Examples

### Example A – Applying index laws

1. **Multiplying powers:** Simplify \(x^4\times x^7\).

   **Solution.** Add the indices because the bases are the same: \(x^{4+7}=x^{11}\).

2. **Dividing powers:** Simplify \(9^6\div 9^2\).

   **Solution.** Subtract the exponents: \(9^{6-2}=9^4=6561\).

3. **Power of a power:** Simplify \((2^3)^4\).

   **Solution.** Multiply the indices: \(2^{3\times4}=2^{12}=4096\).

4. **Negative exponent:** Simplify \(5^{-3}\).

   **Solution.** A negative exponent denotes a reciprocal: \(5^{-3}=\frac{1}{5^3}=\frac{1}{125}\).

5. **Fractional exponent:** Evaluate \(27^{2/3}\).

   **Solution.** The denominator 3 indicates a cube root and the numerator 2 indicates a square.  Either order is permitted:

   \[
   27^{2/3}=\left(\sqrt[3]{27}\right)^2=3^2=9\quad\text{or}\quad\sqrt[3]{27^2}=\sqrt[3]{729}=9.
   \]

### Example B – Simplifying surds

1. Simplify \(\sqrt{72}\).

   **Working.** 72 factors as \(36\times2\).  Extract the square root of 36:

   \[\sqrt{72} = \sqrt{36\times2} = 6\sqrt{2}.\]

2. Simplify \(\sqrt{98}\).

   **Working.** 98 factors as \(49\times2\).  Extract the square root of 49:

   \[\sqrt{98}=\sqrt{49}\,\sqrt{2}=7\sqrt{2}.\]

3. Simplify \(\sqrt{128}\).

   **Working.** 128 factors as \(64\times2\).  Extract the square root of 64:

   \[\sqrt{128}=\sqrt{64}\,\sqrt{2}=8\sqrt{2}.\]

4. Simplify \(\sqrt{242}\).

   **Working.** 242 factors as \(121\times2\).  Extract the square root of 121:

   \[\sqrt{242} = \sqrt{121}\,\sqrt{2} = 11\sqrt{2}.\]

### Example C – Operations with surds

1. Simplify \(2\sqrt{8} + 3\sqrt{18}\).

   **Working.** Simplify each surd: \(\sqrt{8} = 2\sqrt{2}\) and \(\sqrt{18} = 3\sqrt{2}\).  Hence

   \[2\sqrt{8} = 2\times2\sqrt{2} = 4\sqrt{2},\quad 3\sqrt{18} = 3\times3\sqrt{2} = 9\sqrt{2}.
   \]
   Combine like surds: \(4\sqrt{2}+9\sqrt{2} = 13\sqrt{2}.\)

2. Simplify \(4\sqrt{12} - \sqrt{3}\).

   **Working.** \(\sqrt{12} = 2\sqrt{3}\).  Thus \(4\sqrt{12} = 8\sqrt{3}\).  Subtracting gives \(8\sqrt{3}-\sqrt{3}=7\sqrt{3}.\)

3. Simplify \(5\sqrt{75} - 2\sqrt{27} + \sqrt{3}\).

   **Working.** \(\sqrt{75}=5\sqrt{3}\) and \(\sqrt{27}=3\sqrt{3}\).  Then

   \[5\sqrt{75} = 5\times5\sqrt{3}=25\sqrt{3},\quad 2\sqrt{27} = 2\times3\sqrt{3}=6\sqrt{3}.\]
   Combine like surds: \(25\sqrt{3} - 6\sqrt{3} + \sqrt{3} = 20\sqrt{3}.\)

4. Simplify \(3\sqrt{32} + 2\sqrt{50} - \sqrt{8}\).

   **Working.** \(\sqrt{32}=4\sqrt{2}\), \(\sqrt{50}=5\sqrt{2}\) and \(\sqrt{8}=2\sqrt{2}\).  Therefore

   \[3\sqrt{32} = 12\sqrt{2},\quad 2\sqrt{50} = 10\sqrt{2},\quad \sqrt{8} = 2\sqrt{2}.
   \]
   Combining gives \(12\sqrt{2}+10\sqrt{2}-2\sqrt{2}=20\sqrt{2}.\)

### Example D – Rationalising denominators

1. Simplify \(\displaystyle \frac{5}{\sqrt{7}}\).

   **Solution.** Multiply numerator and denominator by \(\sqrt{7}\):

   \[
   \frac{5}{\sqrt{7}} \times \frac{\sqrt{7}}{\sqrt{7}} = \frac{5\sqrt{7}}{7}.
   \]

2. Rationalise \(\displaystyle \frac{2}{3+\sqrt{2}}\).

   **Solution.** Multiply by the conjugate \(3-\sqrt{2}\):

   \[
   \frac{2}{3+\sqrt{2}} \times \frac{3-\sqrt{2}}{3-\sqrt{2}} = \frac{2(3-\sqrt{2})}{(3+\sqrt{2})(3-\sqrt{2})} = \frac{6-2\sqrt{2}}{9-2} = \frac{6-2\sqrt{2}}{7}.
   \]

3. Rationalise \(\displaystyle \frac{4}{5-2\sqrt{3}}\).

   **Solution.** Multiply by the conjugate \(5+2\sqrt{3}\):

   \[
   \frac{4}{5-2\sqrt{3}}\times\frac{5+2\sqrt{3}}{5+2\sqrt{3}} = \frac{4(5+2\sqrt{3})}{25-(2\sqrt{3})^2} = \frac{20+8\sqrt{3}}{25-12} = \frac{20+8\sqrt{3}}{13}.
   \]

### Example E – Expanding brackets with surds

1. Expand and simplify \((2+\sqrt{3})(5-\sqrt{3})\).

   **Solution.** Use FOIL:

   \[(2+\sqrt{3})(5-\sqrt{3}) = 2\times5 + 2\times(-\sqrt{3}) + \sqrt{3}\times5 + \sqrt{3}\times(-\sqrt{3}).\]
   This simplifies to
   \[10 - 2\sqrt{3} + 5\sqrt{3} - 3 = 7 + 3\sqrt{3}.
   \]

2. Expand and simplify \((3-\sqrt{2})(2+\sqrt{5})\).

   **Solution.**
   \[(3-\sqrt{2})(2+\sqrt{5}) = 3\times2 + 3\times\sqrt{5} - \sqrt{2}\times2 - \sqrt{2}\times\sqrt{5}.\]
   Simplifying gives
   \[6 + 3\sqrt{5} - 2\sqrt{2} - \sqrt{10}.\]

3. Expand and simplify \((3+\sqrt{2})^2\).

   **Solution.** Apply the square of a binomial:

   \[(3+\sqrt{2})^2 = 3^2 + 2\times3\times\sqrt{2} + (\sqrt{2})^2 = 9 + 6\sqrt{2} + 2 = 11 + 6\sqrt{2}.
   \]

4. Expand and simplify \((4+\sqrt{5})(4-\sqrt{5})\).

   **Solution.** Use the difference of squares:

   \[(4+\sqrt{5})(4-\sqrt{5}) = 4^2 - (\sqrt{5})^2 = 16 - 5 = 11.\]

5. Expand and simplify \((1+\sqrt{6})(2+\sqrt{3})\).

   **Solution.**
   \[(1+\sqrt{6})(2+\sqrt{3}) = 1\times2 + 1\times\sqrt{3} + \sqrt{6}\times2 + \sqrt{6}\times\sqrt{3}.\]
   Simplify each term: \(1\times2=2\), \(1\times\sqrt{3}=\sqrt{3}\), \(\sqrt{6}\times2=2\sqrt{6}\), and \(\sqrt{6}\times\sqrt{3}=\sqrt{18}=3\sqrt{2}\).  Hence
   \[2 + \sqrt{3} + 2\sqrt{6} + 3\sqrt{2}.\]

6. Expand and simplify \((\sqrt{7}-3)^2\).

   **Solution.**
   \[(\sqrt{7}-3)^2 = (\sqrt{7})^2 - 2\times\sqrt{7}\times3 + 3^2 = 7 - 6\sqrt{7} + 9 = 16 - 6\sqrt{7}.\]

7. Expand and simplify \((2\sqrt{3}+\sqrt{2})(2\sqrt{3}-\sqrt{2})\).

   **Solution.** Use the difference of squares, recognising \(A=2\sqrt{3}\) and \(B=\sqrt{2}\):

   \[(2\sqrt{3})^2 - (\sqrt{2})^2 = 4\times3 - 2 = 12 - 2 = 10.\]

## 11. Common Mistakes and Exam Traps

The PDF highlights several errors that students frequently make.  Keep these in mind:

* **Adding under a single root:** \(\sqrt{12} + \sqrt{27} \neq \sqrt{12+27}\).  You cannot add numbers inside one root; simplify each surd separately.
* **Combining unlike surds:** \(\sqrt{a} + \sqrt{b} \neq \sqrt{a+b}\) unless \(a=b\).  Surds only combine outside the root when the radicands match.
* **Ignoring the middle term in a square:** \((2+\sqrt{3})^2 \neq 4 + \sqrt{9}\).  Use \((a+b)^2 = a^2 + 2ab + b^2\).
* **Distributing powers over addition:** \((a+b)^n \neq a^n+b^n\).  Use the binomial theorem or FOIL.
* **Dropping the absolute value:** For \(\sqrt{a^2}\), the result is \(|a|\), not simply \(a\).  This matters when \(a\) is negative.  In AS1 we generally work with positive quantities under square roots.

Refer back to the index laws and surd rules whenever you are unsure.  The flowchart and concept map can help you decide which rule applies.

## 12. Practice Questions

### 12.1 Surd simplification and operations

Simplify the following surds.  Leave your answers in the form \(k\sqrt{c}\) where \(k\) and \(c\) are integers with \(c\) square‑free.

1. \(\sqrt{48}\)  2. \(\sqrt{75}\)  3. \(\sqrt{128}\)  4. \(\sqrt{242}\)

Write each expression in its simplest form.

5. \(\sqrt{32}\times\sqrt{2}\)

6. \(\displaystyle \frac{\sqrt{72}}{\sqrt{3}}\)

7. \(\displaystyle \frac{\sqrt{45}}{\sqrt{5}}\)

8. \(\sqrt{18}\div \sqrt{2}\)

Simplify and collect like surds.

9. \(2\sqrt{8} + 3\sqrt{18}\)

10. \(4\sqrt{12} - \sqrt{3}\)

11. \(5\sqrt{75} - 2\sqrt{27} + \sqrt{3}\)

12. \(3\sqrt{32} + 2\sqrt{50} - \sqrt{8}\)

### 12.2 Expanding and collecting surds

Expand and simplify each expression.  Express your answer in the form \(a + b\sqrt{c}\).

1. \((2 + \sqrt{5})(3 - \sqrt{5})\)

2. \((\sqrt{3} + 2)^2\)

3. \((4 - \sqrt{2})(4 + \sqrt{2})\)

4. \((1 + \sqrt{6})(2 + \sqrt{3})\)

5. \((\sqrt{7} - 3)^2\)

6. \((2\sqrt{3} + \sqrt{2})(2\sqrt{3} - \sqrt{2})\)

7. Simplify \(3\sqrt{2} + 5\sqrt{2} - 2\sqrt{2}\).

8. Simplify \(2\sqrt{5} + \sqrt{20} - 3\sqrt{5}\).

9. Simplify \(5\sqrt{3} - 2\sqrt{3} + \sqrt{12} - \sqrt{3}\).

### 12.3 Rationalising denominators

Rationalise the denominator of each fraction and simplify your answer.

1. \(\displaystyle \frac{3}{\sqrt{2}}\)

2. \(\displaystyle \frac{4}{2+\sqrt{3}}\)

3. \(\displaystyle \frac{5}{\sqrt{5}}\)

4. \(\displaystyle \frac{2}{3-\sqrt{5}}\)

5. \(\displaystyle \frac{7}{1+\sqrt{7}}\)

## 13. Worked Solutions

Complete solutions for all practice questions are provided here.  Check your answers against these and read the explanations carefully.

### 13.1 Solutions to surd simplification and operations

1. \(\sqrt{48} = \sqrt{16\times 3} = 4\sqrt{3}\).

2. \(\sqrt{75} = \sqrt{25\times 3} = 5\sqrt{3}\).

3. \(\sqrt{128} = \sqrt{64\times 2} = 8\sqrt{2}\).

4. \(\sqrt{242} = \sqrt{121\times 2} = 11\sqrt{2}\).

5. \(\sqrt{32}\times\sqrt{2} = \sqrt{64} = 8\).

6. \(\displaystyle \frac{\sqrt{72}}{\sqrt{3}} = \sqrt{\frac{72}{3}} = \sqrt{24} = 2\sqrt{6}\).

7. \(\displaystyle \frac{\sqrt{45}}{\sqrt{5}} = \sqrt{\frac{45}{5}} = \sqrt{9} = 3\).

8. \(\sqrt{18} \div \sqrt{2} = \sqrt{\frac{18}{2}} = \sqrt{9} = 3\).

9. \(2\sqrt{8} + 3\sqrt{18} = 2\times2\sqrt{2} + 3\times3\sqrt{2} = 4\sqrt{2} + 9\sqrt{2} = 13\sqrt{2}.\)

10. \(4\sqrt{12} - \sqrt{3} = 4\times2\sqrt{3} - \sqrt{3} = 8\sqrt{3} - \sqrt{3} = 7\sqrt{3}.\)

11. \(5\sqrt{75} - 2\sqrt{27} + \sqrt{3} = 25\sqrt{3} - 6\sqrt{3} + \sqrt{3} = 20\sqrt{3}.\)

12. \(3\sqrt{32} + 2\sqrt{50} - \sqrt{8} = 12\sqrt{2} + 10\sqrt{2} - 2\sqrt{2} = 20\sqrt{2}.\)

### 13.2 Solutions to expanding and collecting surds

1. \((2 + \sqrt{5})(3 - \sqrt{5}) = 6 - 2\sqrt{5} + 3\sqrt{5} - 5 = 1 + \sqrt{5}.\)

2. \((\sqrt{3} + 2)^2 = 3 + 4\sqrt{3} + 4 = 7 + 4\sqrt{3}.\)

3. \((4 - \sqrt{2})(4 + \sqrt{2}) = 16 - 2 = 14.\)

4. \((1 + \sqrt{6})(2 + \sqrt{3}) = 2 + \sqrt{3} + 2\sqrt{6} + \sqrt{18} = 2 + \sqrt{3} + 2\sqrt{6} + 3\sqrt{2}.\)

5. \((\sqrt{7} - 3)^2 = 7 - 6\sqrt{7} + 9 = 16 - 6\sqrt{7}.\)

6. \((2\sqrt{3} + \sqrt{2})(2\sqrt{3} - \sqrt{2}) = (2\sqrt{3})^2 - (\sqrt{2})^2 = 12 - 2 = 10.\)

7. \(3\sqrt{2} + 5\sqrt{2} - 2\sqrt{2} = 6\sqrt{2}.\)

8. \(2\sqrt{5} + \sqrt{20} - 3\sqrt{5} = 2\sqrt{5} + 2\sqrt{5} - 3\sqrt{5} = \sqrt{5}.\)

9. \(5\sqrt{3} - 2\sqrt{3} + \sqrt{12} - \sqrt{3} = (5-2-1)\sqrt{3} + 2\sqrt{3} = 4\sqrt{3}.\)

### 13.3 Solutions to rationalising denominators

1. \(\displaystyle \frac{3}{\sqrt{2}} = \frac{3\sqrt{2}}{2}.\)

2. \(\displaystyle \frac{4}{2+\sqrt{3}} = \frac{4(2-\sqrt{3})}{(2+\sqrt{3})(2-\sqrt{3})} = \frac{8-4\sqrt{3}}{4-3} = 8-4\sqrt{3}.\)

3. \(\displaystyle \frac{5}{\sqrt{5}} = \frac{5\sqrt{5}}{5} = \sqrt{5}.\)

4. \(\displaystyle \frac{2}{3-\sqrt{5}} = \frac{2(3+\sqrt{5})}{(3-\sqrt{5})(3+\sqrt{5})} = \frac{6+2\sqrt{5}}{9-5} = \frac{6+2\sqrt{5}}{4} = \frac{3}{2}+\frac{\sqrt{5}}{2}.\)

5. \(\displaystyle \frac{7}{1+\sqrt{7}} = \frac{7(1-\sqrt{7})}{(1+\sqrt{7})(1-\sqrt{7})} = \frac{7-7\sqrt{7}}{1-7} = \frac{7-7\sqrt{7}}{-6} = -\frac{7}{6} + \frac{7\sqrt{7}}{6}.\)

## 14. Exam Technique Notes

* **Structure your work clearly.**  Use one rule at a time and write each step on a new line.  For example, when simplifying \((2+\sqrt{3})(5-\sqrt{3})\), show the FOIL expansion before collecting like terms.
* **Check that your final answer is in simplest form.**  For indices, all bases should be simplified and negative or fractional indices should be written as roots or reciprocals.  For surds, extract all square factors and ensure no surds remain in denominators.  Answers are typically expected in the form \(a + b\sqrt{c}\) with \(c\) square‑free.
* **Avoid sign errors.**  When expanding brackets with surds, pay careful attention to negative signs.  Many lost marks come from missing minus signs in the middle terms.
* **Use exact values.**  Do not convert surds to decimals unless the question explicitly asks for a decimal approximation.  Exact answers carry full marks.
* **State assumptions when necessary.**  For example, when taking even roots, you should assume the base is non‑negative to avoid complex numbers.  In AS1 questions, the variables are typically positive unless stated otherwise.

## 15. Syllabus Gap Check

After completing this lesson, review how it aligns with the specification:

| Aspect | Status | Comment |
|---|---|---|
| Laws of indices (integer, negative, fractional) | **Fully covered** | Section 7.1 explains multiplication, division and power rules; Section 7.2 extends to negative and rational exponents with examples and a concept map. |
| Simplifying surds | **Fully covered** | Section 7.5 outlines the method; examples illustrate different square factors; Widget 002 provides practice. |
| Operations with surds | **Fully covered** | Sections 7.6 and 7.8 deal with multiplying, dividing, collecting like surds and expanding brackets; examples mirror the PDF and go further. |
| Rationalising denominators | **Covered (added)** | Not in the PDF but required by the specification; Section 7.7 and practice questions supply detailed methods for simple and binomial denominators. |
| Common mistakes/exam traps | **Covered** | Section 11 summarises errors highlighted in the PDF and adds reminders about absolute values. |
| Off‑spec or extension content found in PDF | **None included** | The lesson stays within AS1 scope.  Any content in the PDF unrelated to indices or surds has been omitted. |

## 16. Recommended Enhancements Not in the PDF

| Asset ID | Type | Why it was added | Specification point supported | Essential/optional |
|---|---|---|---|---|
| **MMD‑002** | Mermaid concept map | Provides a high‑level overview of how the eight index laws relate to each other and to surd rules.  Helps students recall connections. | Laws of indices and surds【556697932039296†L420-L425】 | Optional but highly beneficial |
| **TIKZ‑001** | TikZ graph | Illustrates visually the difference between positive, fractional and negative exponents.  Supports understanding of rational exponents. | Laws of indices for rational exponents【556697932039296†L420-L425】 | Optional visual aid |
| **WIDGET‑001** | Interactive widget | Allows exploration of different bases and rational exponents.  Students can see how the value of \(a^{m/n}\) changes and how it can be interpreted as a root or reciprocal. | Laws of indices for rational exponents【556697932039296†L420-L425】 | Essential for interactive learning |
| **WIDGET‑003** | Interactive widget | Demonstrates rationalising denominators, filling a gap left by the PDF.  It shows step‑by‑step multiplication by conjugates. | Use and manipulate surds, including rationalising the denominator【556697932039296†L420-L425】 | Essential to cover missing content |
| **TIKZ‑001** | TikZ graph | Reinforces understanding of how exponent signs affect function shape, preparing students for graph sketching later in the course. | Exponent rules and graph interpretations | Optional visual aid |

## 17. Supplementary Sources Used

This lesson draws primarily on the CCEA specification and elaboration document【556697932039296†L420-L425】【802688729852813†L163-L168】.  No additional external sources were required beyond general mathematical knowledge.

## 18. Final Student Checklist

* I can state and use each of the eight laws of indices, including negative and fractional exponents.
* I can rewrite a power with a negative or fractional exponent as a reciprocal or a root.
* I can simplify surds by extracting the largest perfect square factor.
* I can multiply, divide and add like surds correctly, and I avoid combining unlike surds.
* I can rationalise denominators in simple and binomial cases using conjugates.
* I can expand brackets containing surds using FOIL and special identities and collect like terms.
* I know the common mistakes to avoid and how to present my answers in exact surd form.
* I have completed and understood all worked examples and practice questions.
* I have experimented with the interactive widgets to deepen my understanding.

## 6. Diagram Assets

## 6.1 Mermaid Assets

### Source File Metadata

```yaml
filename: "AS1_indices_and_surds_mermaid.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/01. Indices & Surds/AS1_indices_and_surds_mermaid.md"
lines: 48
bytes_utf8: 2607
sha256: "cbe277b98a9145e4fbb39a0bfac556f7acdc5d4ab30a39e4d047d95c831fd280"
```

### Preserved Source Content: AS1_indices_and_surds_mermaid.md

# Mermaid Diagrams for AS1 Indices and Surds

## MMD-001: Surd Simplification Flowchart
Source: lesson PDF p.2  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: MMD-001 | ...]`  
Purpose: to give a clear, repeatable procedure for simplifying a square root by extracting the largest square factor and checking if further simplification is possible.

```mermaid
flowchart TD
    A[Start with $\sqrt{n}$] --> B{Does $n$ have a square factor $>1$?}
    B -- No --> F[Result: $\sqrt{n}$ is already in simplest surd form]
    B -- Yes --> C[Write $n = k^2 \times m$ where $k$ is the largest integer $\leq \sqrt{n}$]
    C --> D[Rewrite $\sqrt{n} = \sqrt{k^2 \times m}$]
    D --> E[Extract the square root of $k^2$: $\sqrt{n} = k\sqrt{m}$]
    E --> B
```

The loop back to the decision box emphasises that you should continue checking $m$ for further square factors until no more can be extracted.  This flowchart is based on the method described in the lesson PDF and helps students follow a systematic process when simplifying surds.

## MMD-002: Index and Surd Laws Concept Map
Source: AI-proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: MMD-002 | ...]`  
Purpose: to show how the eight laws of indices and the core surd rules are interrelated.  It serves as a high‑level revision tool linking the rules to their respective operations.

```mermaid
graph LR
    A([Index & Surd Laws])
    A --> B[Index laws]
    A --> C[Surd rules]
    %% Index law branches
    B --> B1[Multiplication: $a^m \times a^n = a^{m+n}$]
    B --> B2[Division: $a^m \div a^n = a^{m-n}$]
    B --> B3[Power of a power: $(a^m)^n = a^{mn}$]
    B --> B4[Product to a power: $(ab)^n = a^n b^n$]
    B --> B5[Quotient to a power: $(\tfrac{a}{b})^n = \tfrac{a^n}{b^n}$]
    B --> B6[Zero index: $a^0 = 1$]
    B --> B7[Negative index: $a^{-n} = \tfrac{1}{a^n}$]
    B --> B8[Fractional index: $a^{m/n} = (\sqrt[n]{a})^m$]
    %% Surd rules branches
    C --> C1[Product: $\sqrt{a}\,\sqrt{b} = \sqrt{ab}$]
    C --> C2[Quotient: $\tfrac{\sqrt{a}}{\sqrt{b}} = \sqrt{\tfrac{a}{b}}$]
    C --> C3[Simplification: $\sqrt{k^2 m} = k \sqrt{m}$]
    C --> C4[Rationalise denominator]
    C4 --> C4a[Simple: multiply top & bottom by $\sqrt{a}$]
    C4 --> C4b[Binomial: multiply by the conjugate $a \mp \sqrt{b}$]
```

This concept map groups the eight index laws under a single branch and the primary surd rules under another.  It highlights key formulas and illustrates the additional technique of rationalising denominators, connecting all the rules required by the specification.

## 6.2 SVG Assets

### Source File Metadata

```yaml
filename: "AS1_indices_and_surds_svg.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/01. Indices & Surds/AS1_indices_and_surds_svg.md"
lines: 70
bytes_utf8: 5487
sha256: "fd256c4d15fdf2d588fcfddbd4f827d8f9ca8cd51fb8b262d855c1c985884695"
```

### Preserved Source Content: AS1_indices_and_surds_svg.md

# SVG Diagrams for AS1 Indices and Surds

## SVG-001: Summary of Index and Surd Rules
Source: lesson PDF p.1 (table of rules)  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: SVG-001 | Source: lesson PDF p.1 | Insert from AS1_indices_and_surds_svg.md | Purpose: visual summary of laws of indices]`  
Purpose: to present all of the index and surd laws in a single, easy‑to‑read infographic.  This SVG recreates the table of laws from the PDF but improves clarity by grouping the index laws on the left and surd rules on the right, with consistent notation and examples.

```svg
<!--
  SVG summary of index and surd rules.
  Dimensions: 720 × 480.  Two columns: left for index laws, right for surd rules.
  Each rule is listed with its formula and a brief example.
-->
<svg width="720" height="480" viewBox="0 0 720 480" xmlns="http://www.w3.org/2000/svg" aria-labelledby="title desc">
  <title id="title">Index and Surd Rules Summary</title>
  <desc id="desc">An infographic summarising the eight laws of indices and the key rules for surds.</desc>
  <!-- Background -->
  <rect width="720" height="480" fill="#ffffff" stroke="#cccccc"/>
  <!-- Divider line -->
  <line x1="360" y1="60" x2="360" y2="460" stroke="#888888" stroke-width="1" stroke-dasharray="4 2"/>
  <!-- Heading -->
  <text x="360" y="40" text-anchor="middle" font-size="20" font-weight="bold">Index &amp; Surd Rules Summary</text>
  <!-- Column headings -->
  <text x="180" y="70" text-anchor="middle" font-size="16" font-weight="bold">Index Laws</text>
  <text x="540" y="70" text-anchor="middle" font-size="16" font-weight="bold">Surd Rules</text>
  <!-- Index laws list -->
  <g font-size="14">
    <!-- Multiplication -->
    <text x="20" y="100"><tspan font-weight="bold">Multiply:</tspan> <tspan>a</tspan><tspan dy="-6" font-size="10">m</tspan> × <tspan>a</tspan><tspan dy="-6" font-size="10">n</tspan> = <tspan>a</tspan><tspan dy="-6" font-size="10">m+n</tspan>  </text>
    <!-- Division -->
    <text x="20" y="125"><tspan font-weight="bold">Divide:</tspan> <tspan>a</tspan><tspan dy="-6" font-size="10">m</tspan> ÷ <tspan>a</tspan><tspan dy="-6" font-size="10">n</tspan> = <tspan>a</tspan><tspan dy="-6" font-size="10">m−n</tspan></text>
    <!-- Power of a power -->
    <text x="20" y="150"><tspan font-weight="bold">Power of a power:</tspan> (<tspan>a</tspan><tspan dy="-6" font-size="10">m</tspan>)<tspan dy="-6" font-size="10">n</tspan> = <tspan>a</tspan><tspan dy="-6" font-size="10">mn</tspan></text>
    <!-- Product to a power -->
    <text x="20" y="175"><tspan font-weight="bold">Product:</tspan> (<tspan>a b</tspan>)<tspan dy="-6" font-size="10">n</tspan> = <tspan>a</tspan><tspan dy="-6" font-size="10">n</tspan><tspan> · </tspan><tspan>b</tspan><tspan dy="-6" font-size="10">n</tspan></text>
    <!-- Quotient to a power -->
    <text x="20" y="200"><tspan font-weight="bold">Quotient:</tspan> (<tspan>a/b</tspan>)<tspan dy="-6" font-size="10">n</tspan> = <tspan>a</tspan><tspan dy="-6" font-size="10">n</tspan><tspan>/</tspan><tspan>b</tspan><tspan dy="-6" font-size="10">n</tspan></text>
    <!-- Zero index -->
    <text x="20" y="225"><tspan font-weight="bold">Zero index:</tspan> <tspan>a</tspan><tspan dy="-6" font-size="10">0</tspan> = 1</text>
    <!-- Negative index -->
    <text x="20" y="250"><tspan font-weight="bold">Negative index:</tspan> <tspan>a</tspan><tspan dy="-6" font-size="10">−n</tspan> = 1/<tspan>a</tspan><tspan dy="-6" font-size="10">n</tspan></text>
    <!-- Fractional index -->
    <text x="20" y="275"><tspan font-weight="bold">Fractional index:</tspan> <tspan>a</tspan><tspan dy="-6" font-size="10">m/n</tspan> = (√[n]{<tspan>a</tspan>})<tspan dy="-6" font-size="10">m</tspan></text>
    <!-- Example box -->
    <text x="20" y="305" font-style="italic">Example: 8<tspan dy="-6" font-size="10">2/3</tspan> = (∛8)<tspan dy="-6" font-size="10">2</tspan> = 2<sup>2</sup> = 4</text>
  </g>
  <!-- Surd rules list -->
  <g font-size="14">
    <!-- Product rule -->
    <text x="380" y="100"><tspan font-weight="bold">Product:</tspan> √a · √b = √(a b)</text>
    <!-- Quotient rule -->
    <text x="380" y="125"><tspan font-weight="bold">Quotient:</tspan> √a / √b = √(a/b)</text>
    <!-- Simplification rule -->
    <text x="380" y="150"><tspan font-weight="bold">Simplify:</tspan> √(k² m) = k·√m</text>
    <!-- Rationalise simple -->
    <text x="380" y="175"><tspan font-weight="bold">Rationalise (simple):</tspan> multiply numerator &amp; denominator by √a</text>
    <!-- Rationalise binomial -->
    <text x="380" y="200"><tspan font-weight="bold">Rationalise (binomial):</tspan> multiply by conjugate (a ± √b)</text>
    <!-- Note section -->
    <text x="380" y="230" font-style="italic">Tip: combine like surds only when radicands match</text>
    <!-- Example box for surd -->
    <text x="380" y="260" font-style="italic">Example: √72 = √(36·2) = 6√2</text>
  </g>
  <!-- Decorative boxes around columns -->
  <rect x="10" y="80" width="340" height="210" fill="none" stroke="#888888" stroke-dasharray="3 3"/>
  <rect x="370" y="80" width="340" height="210" fill="none" stroke="#888888" stroke-dasharray="3 3"/>
</svg>
```

This SVG summarises the eight index laws and the fundamental surd rules side‑by‑side.  It improves readability by using consistent formatting for superscripts and by grouping related rules together.  A short example under each column illustrates how to apply the respective rules.

## 6.3 TikZ Assets

### Source File Metadata

```yaml
filename: "AS1_indices_and_surds_tikz.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/01. Indices & Surds/AS1_indices_and_surds_tikz.md"
lines: 31
bytes_utf8: 1520
sha256: "3cf5dd4d4e60ca0c2b96870d6dffd344a90a6ec28d37b6eb607435a91c8412d7"
```

### Preserved Source Content: AS1_indices_and_surds_tikz.md

# TikZ Diagrams for AS1 Indices and Surds

## TIKZ-001: Graph of $y=x^2$, $y=\sqrt{x}$ and $y=x^{-1}$
Source: AI-proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: TIKZ-001 | ...]`  
Purpose: to visually compare functions with positive, fractional and negative exponents on the same set of axes.  This graph helps students understand how the sign and magnitude of an exponent affect the shape and behaviour of a function.

```latex
% This diagram uses PGFPlots to draw three curves on the same axes.  It requires \usepackage{pgfplots} in the preamble.
\begin{tikzpicture}
  \begin{axis}[
    width=10cm, height=7cm,
    domain=0.1:4,
    samples=200,
    axis lines=middle,
    xlabel={$x$}, ylabel={$y$},
    xmin=0, xmax=4,
    ymin=0, ymax=5,
    legend style={at={(0.97,0.97)}, anchor=north east}
  ]
    \addplot[blue, thick] {x^2};
    \addlegendentry{$y = x^2$}
    \addplot[red, thick] {sqrt(x)};
    \addlegendentry{$y = \sqrt{x}$}
    \addplot[green!60!black, thick] {1/x};
    \addlegendentry{$y = x^{-1}$}
  \end{axis}
\end{tikzpicture}
```

In this plot, the blue curve ($y=x^2$) represents a positive integer exponent, the red curve ($y=\sqrt{x}$) represents a fractional exponent of one‑half, and the green curve ($y=x^{-1}$) represents a negative exponent.  The common axis system makes it easy to compare their growth and decay: quadratic growth accelerates rapidly, the square root grows slowly, and the reciprocal decreases as $x$ increases.

## 7. Interactive Widgets

## 7.1 Widget Assets

### Source File Metadata

```yaml
filename: "AS1_indices_and_surds_widgets.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/01. Indices & Surds/AS1_indices_and_surds_widgets.md"
lines: 278
bytes_utf8: 12360
sha256: "a56255f3c1b5dc32aeb3f60a644bfcae24e149c22755d774d6e6a475e0bb03e1"
```

### Preserved Source Content: AS1_indices_and_surds_widgets.md

# Interactive Widgets for AS1 Indices and Surds

## WIDGET-001: Fractional Exponent Explorer
Source: AI-proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[INTERACTIVE PLACEHOLDER: WIDGET-001 | ...]`  
Purpose: to let you explore how changing the base and the numerator/denominator of a rational exponent affects the value of a power.  It illustrates the meaning of a fractional exponent as both a root and a repeated power.

### Learning Goal
This widget helps you understand rational exponents.  By adjusting the base \(a\), the numerator \(m\) and the denominator \(n\) of the exponent, you can see how \(a^{m/n}\) behaves.  The widget displays the approximate decimal value along with two equivalent forms:

* The \(n\)th root of \(a^m\) — i.e. \(\sqrt[n]{a^m}\).
* The repeated root \((\sqrt[n]{a})^m\), which multiplies the \(n\)th root of \(a\) by itself \(m\) times.

### Controls
* **Base (a):** integer slider from 1 to 10.
* **Numerator (m):** integer slider from −5 to 5.
* **Denominator (n):** integer slider from 1 to 10 (non‑zero).

### Live Outputs
* **Computed value:** numeric approximation of \(a^{m/n}\).
* **Root form:** shows the expression \(\sqrt[n]{a^m}\) or \(1/\sqrt[n]{a^{|m|}}\) for negative \(m\).
* **Repeated root form:** shows \((\sqrt[n]{a})^m\) or \(1/(\sqrt[n]{a})^{|m|}\) for negative \(m\).

### What to Notice
* Increasing the numerator increases the power, while increasing the denominator reduces it.
* Negative numerators produce reciprocals; the widget shows this explicitly.
* When \(m=0\), the value is always 1 regardless of the base or denominator (zero index law).
* When \(n=1\), the exponent behaves like an integer power.

### Exam Connection
Understanding how fractional exponents work will help you simplify expressions such as \(16^{3/2}\) or \(27^{2/3}\) in exam problems.  The widget reinforces the connection between exponent laws and surd notation, ensuring you can switch between forms fluently.

### How to Run
Copy the code below into a file named, for example, `widget_fractional_exponent.html`, and open it in a modern web browser.  Adjust the sliders to see the outputs update in real time.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Fractional Exponent Explorer</title>
  <style>
    body { font-family: Arial, sans-serif; max-width: 500px; margin: 20px auto; line-height: 1.4; }
    label { display: block; margin-top: 10px; }
    input[type="number"] { width: 60px; }
    output { font-weight: bold; }
    .result { margin-top: 10px; padding: 8px; border: 1px solid #ccc; border-radius: 4px; background: #f9f9f9; }
  </style>
</head>
<body>
  <h2>Fractional Exponent Explorer</h2>
  <label>Base (a):
    <input type="number" id="base" value="2" min="1" max="10" step="1">
  </label>
  <label>Numerator (m):
    <input type="number" id="num" value="1" min="-5" max="5" step="1">
  </label>
  <label>Denominator (n):
    <input type="number" id="den" value="2" min="1" max="10" step="1">
  </label>
  <div class="result">
    <p>Computed value: <output id="value">0</output></p>
    <p>Root form: <output id="rootForm"></output></p>
    <p>Repeated root form: <output id="repeatForm"></output></p>
  </div>
  <script>
    function update() {
      const a = parseFloat(document.getElementById('base').value);
      const m = parseInt(document.getElementById('num').value, 10);
      const n = parseInt(document.getElementById('den').value, 10);
      if (!n) return;
      const exponent = m / n;
      const value = Math.pow(a, exponent);
      document.getElementById('value').textContent = value.toFixed(5);
      const absM = Math.abs(m);
      let rootForm;
      if (m >= 0) {
        rootForm = n + '\u221A( ' + a + '^' + m + ' )';
      } else {
        rootForm = '1 / ' + n + '\u221A( ' + a + '^' + absM + ' )';
      }
      let repeatForm;
      if (m >= 0) {
        repeatForm = '( ' + n + '\u221A( ' + a + ' ) )^' + m;
      } else {
        repeatForm = '1 / ( ' + n + '\u221A( ' + a + ' ) )^' + absM;
      }
      document.getElementById('rootForm').textContent = rootForm;
      document.getElementById('repeatForm').textContent = repeatForm;
    }
    document.getElementById('base').addEventListener('input', update);
    document.getElementById('num').addEventListener('input', update);
    document.getElementById('den').addEventListener('input', update);
    window.addEventListener('DOMContentLoaded', update);
  </script>
</body>
</html>
```


## WIDGET-002: Surd Simplifier
Source: lesson PDF p.2  
Used in lesson placeholder: `[INTERACTIVE PLACEHOLDER: WIDGET-002 | ...]`  
Purpose: to practise simplifying square roots into the form \(k\sqrt{m}\) by extracting the largest square factor.  It mirrors the flowchart in the PDF but allows you to input any positive integer and see the result instantly.

### Learning Goal
This widget teaches you how to write a surd in its simplest form.  It implements the algorithm from the flowchart: find the largest perfect square factor of a positive integer and rewrite the root accordingly.  It reinforces that only square factors should be extracted.

### Controls
* **Number to simplify:** integer input box for a positive number (e.g. 72).

### Live Outputs
* **Simplified surd form:** shows the surd rewritten as \(k\sqrt{m}\) or left unchanged if no square factors exist.

### What to Notice
* The result always has the radicand \(m\) square‑free (no perfect square factors \(>1\)).
* When the input is already a perfect square, the root becomes an integer (e.g. input 49 returns 7).

### Exam Connection
Simplifying surds is a common first step in longer problems.  This widget helps you practise quickly so you can recognise square factors in exam questions.

### How to Run
Copy the following code into a file named `widget_surd_simplifier.html` and open it in a browser.  Type a positive integer and click the button to see its simplest surd form.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Surd Simplifier</title>
  <style>
    body { font-family: Arial, sans-serif; max-width: 400px; margin: 20px auto; line-height: 1.4; }
    label { display: block; margin-bottom: 8px; }
    input[type="number"] { width: 100px; }
    button { margin-top: 10px; }
    #result { margin-top: 15px; padding: 8px; border: 1px solid #ccc; background: #f9f9f9; }
  </style>
</head>
<body>
  <h2>Surd Simplifier</h2>
  <label>
    Enter a positive integer:
    <input type="number" id="numberInput" value="72" min="1" step="1">
  </label>
  <button id="simplifyBtn">Simplify</button>
  <div id="result"></div>
  <script>
    function simplifySurd(n) {
      const limit = Math.floor(Math.sqrt(n));
      let k = 1;
      for (let i = limit; i >= 2; i--) {
        const square = i * i;
        if (n % square === 0) {
          k = i;
          break;
        }
      }
      if (k === 1) {
        return '\u221A' + n;
      } else {
        const m = n / (k * k);
        return k + '\u221A' + m;
      }
    }
    document.getElementById('simplifyBtn').addEventListener('click', function() {
      const n = parseInt(document.getElementById('numberInput').value, 10);
      if (!n || n < 1) {
        document.getElementById('result').textContent = 'Please enter a positive integer.';
        return;
      }
      const simplified = simplifySurd(n);
      document.getElementById('result').textContent = 'Simplest form: ' + simplified;
    });
  </script>
</body>
</html>
```


## WIDGET-003: Rationalising Surd Denominators
Source: AI-proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[INTERACTIVE PLACEHOLDER: WIDGET-003 | ...]`  
Purpose: to practise rationalising simple and binomial surd denominators.  This widget accepts a denominator of the form \(\sqrt{a}\) or \(a \pm \sqrt{b}\) and shows each step needed to remove the surd from the denominator.

### Learning Goal
You will learn how to eliminate surds from denominators by multiplying by an appropriate form of 1.  The widget illustrates the two strategies: multiplying by the same surd for simple denominators and multiplying by the conjugate for binomial denominators.

### Controls
* **Denominator:** text input for the denominator expression.  Acceptable forms include `sqrt(7)`, `3+sqrt(2)` and `5-sqrt(3)`.  Do not include spaces inside the expression.

### Live Outputs
* **Step‑by‑step explanation:** a list describing how the denominator was rationalised and the resulting expression in simplified form.

### What to Notice
* For denominators like \(\sqrt{a}\), the rationalising factor is another \(\sqrt{a}\), giving a denominator of \(a\).
* For denominators like \(a \pm \sqrt{b}\), the conjugate \(a \mp \sqrt{b}\) removes the surd term via the difference of squares.
* The numerator is assumed to be 1 for simplicity; the same method works for any numerator.

### Exam Connection
Rationalising denominators is required by the specification and often appears in marks‑for‑methods questions.  Being comfortable with conjugates ensures you can tackle questions involving binomial surd denominators without hesitation.

### How to Run
Save the code below to a file named `widget_rationalise_denominator.html` and open it in a browser.  Enter a denominator and click the button to see the rationalisation steps.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Rationalise Surd Denominator</title>
  <style>
    body { font-family: Arial, sans-serif; max-width: 600px; margin: 20px auto; }
    label { display: block; margin-bottom: 8px; }
    input[type="text"] { width: 200px; }
    button { margin-top: 10px; }
    #output { margin-top: 15px; padding: 8px; border: 1px solid #ccc; background: #f9f9f9; }
    ul { list-style-type: disc; padding-left: 20px; }
  </style>
</head>
<body>
  <h2>Rationalise Surd Denominator</h2>
  <label>
    Enter denominator (e.g. sqrt(7), 3+sqrt(2), 5-sqrt(3)):
    <input type="text" id="denom" value="sqrt(7)">
  </label>
  <button id="rationaliseBtn">Rationalise</button>
  <div id="output"></div>
  <script>
    function rationaliseSimple(rad) {
      const steps = [];
      steps.push('Denominator is of the form √a with a = ' + rad + '.');
      steps.push('Multiply numerator and denominator by √' + rad + ' to get a whole number in the denominator.');
      steps.push('Result: ( √' + rad + ' ) / ' + rad);
      return steps;
    }
    function rationaliseBinomial(a, b, sign) {
      const steps = [];
      const denomStr = '' + a + sign + '√' + b;
      const conjSign = sign === '+' ? '-' : '+';
      const conjStr = '' + a + conjSign + '√' + b;
      const denomVal = a * a - b;
      steps.push('Denominator is a binomial surd: ' + denomStr + '.');
      steps.push('Multiply numerator and denominator by the conjugate ' + conjStr + '.');
      steps.push('Numerator becomes ' + conjStr + '.');
      steps.push('Denominator becomes ' + a + '² - (√' + b + ')² = ' + (a * a) + ' - ' + b + ' = ' + denomVal + '.');
      steps.push('Result: ' + conjStr + ' / ' + denomVal);
      return steps;
    }
    document.getElementById('rationaliseBtn').addEventListener('click', function() {
      const input = document.getElementById('denom').value.trim().replace(/\s+/g, '');
      const output = document.getElementById('output');
      if (!input) { output.textContent = 'Please enter a denominator.'; return; }
      let steps;
      let m = input.match(/^sqrt\((\d+)\)$/);
      if (m) {
        const rad = parseInt(m[1], 10);
        steps = rationaliseSimple(rad);
      } else {
        m = input.match(/^(\d+)(\+|-)sqrt\((\d+)\)$/);
        if (m) {
          const a = parseInt(m[1], 10);
          const sign = m[2];
          const b = parseInt(m[3], 10);
          steps = rationaliseBinomial(a, b, sign);
        }
      }
      if (!steps) {
        output.textContent = 'Unsupported format. Use sqrt(a) or a±sqrt(b) with integers.';
        return;
      }
      output.innerHTML = '<ul>' + steps.map(function(s) { return '<li>' + s + '</li>'; }).join('') + '</ul>';
    });
  </script>
</body>
</html>
```

These widgets are intended as learning aids.  They should not replace the written methods required in AS/A Level exams but can help you verify answers and build intuition.

## 8. Agent Retrieval Notes

Use Section 5 for teaching sequence and explanation. Use Sections 6 and 7 as asset banks. When an asset is marked as suggested, AI-proposed, generated, or uncertain, preserve that provenance in downstream responses.
