# AS1 Binomial Expansion Lesson Agent Source

## 0. AI-Agent Usage Instructions

This file is a source for teaching, revision, explanation, diagnostics and lesson retrieval. Core lesson content is in Section 5. Diagram assets are in Section 6. Widgets are in Section 7. Use the lesson content before generated enhancement notes. Do not claim AI-proposed assets came from the original PDF. Preserve syllabus gap notes and uncertainty notes. Use UK/CCEA mathematical vocabulary.

## 1. Pack Metadata

```yaml
pack_type: lesson
unit_code: AS1
unit_name: CCEA AS1 Pure Mathematics
topic_slug: "05_binomial_expansion"
topic_title: "Binomial Expansion"
source_folder: "/Users/evanward/Documents/AS Portal - New /AS1 Files/05. Binomial Expansion"
output_file: "/Users/evanward/Documents/AS Portal - New /AS1 Files/00_AGENT_SOURCE_PACKS/05_binomial_expansion/AS1_binomial_expansion_agent_source.md"
created_from_files:
  lesson: "AS1_binomial_expansion_lesson.md"
  questions: null
  solutions: null
  mermaid: "AS1_binomial_expansion_mermaid.md"
  svg: "AS1_binomial_expansion_svg.md"
  tikz: "AS1_binomial_expansion_tikz.md"
  widgets: "AS1_binomial_expansion_widgets.md"
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
| lesson | AS1_binomial_expansion_lesson.md | 489 | 37786 | `0a6eb4880b63b371ac72932f344b687b1d6c4896ee8491c05123bffa18c6163a` |
| mermaid | AS1_binomial_expansion_mermaid.md | 17 | 806 | `c636206a221976048abaec5e9e2690b9d6cc530ffcddd720635ec677dcfbe48f` |
| svg | AS1_binomial_expansion_svg.md | 69 | 2099 | `fded268fc829cdaf012ff00643f491b26da4bffe5ccb3c2d93fbdddc8ae7b08f` |
| tikz | AS1_binomial_expansion_tikz.md | 28 | 1224 | `f214aa1a18c31ccad51d872ed7c5da079b1d70aa0d573a17a72e134113f3f19c` |
| widgets | AS1_binomial_expansion_widgets.md | 255 | 10182 | `4d99a892f8cbe2ed1ae9c8b3a027ec45eb38feaf3408fbdba4b957e5b01ec2a1` |

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
filename: "AS1_binomial_expansion_lesson.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/05. Binomial Expansion/AS1_binomial_expansion_lesson.md"
lines: 489
bytes_utf8: 37786
sha256: "0a6eb4880b63b371ac72932f344b687b1d6c4896ee8491c05123bffa18c6163a"
```

### Preserved Source Content: AS1_binomial_expansion_lesson.md

# Binomial Expansion

**Unit:** CCEA AS1 Pure Mathematics  \
**Source Lesson PDF:** *Binomial Expression.pdf*  \
**Date generated:** 22 May 2026

This lesson pack transforms the *Binomial Expression* PDF into a complete, self‑study resource aligned to the CCEA GCE Mathematics specification.  You should already be comfortable with Higher Tier GCSE algebra, indices and basic functions; short recap boxes are provided where useful.

## 1. Specification Alignment

The table below cross‑references the CCEA specification and elaboration document with the content of this lesson.  Only points relevant to **AS1 Pure Mathematics** are included.  Anything outside the specification is either flagged as *off‑spec* or treated as an optional extension.

| CCEA specification point (AS1) | Elaboration document guidance | Covered in this lesson? | Where it appears | Gap or action needed | Suggested visual/widget support |
|---|---|---|---|---|---|
| **Demonstrate understanding of and use the binomial expansion of $(a+b)^n$ for positive integer $n$** | States that students should be able to expand $(a+b)^n$ using binomial coefficients and understand the notation for combinations $\displaystyle\binom{n}{r}$.  Examples using Pascal’s triangle and the general term are expected【456165685004427†L294-L302】. | **Yes** | Sections 7–11 cover factorials, combinations, Pascal’s triangle, the binomial theorem, the general term, expanding expressions and finding particular terms and coefficients. | None | Flowchart summarising the expansion process (`MMD‑001`), Pascal’s triangle diagram (`SVG‑001`), exponent pattern diagram (`TIKZ‑001`), interactive expansion and coefficient widgets (`WIDGET‑001`–`003`). |
| **Demonstrate understanding of and use the notations $n!$ and $\displaystyle\binom{n}{r}$** | Defines factorial as the product of positive integers down to 1 with $0!=1$ and notes that $\displaystyle\binom{n}{r}=\dfrac{n!}{r!(n-r)!}$ for integers $0\le r\le n$【456165685004427†L294-L302】.  Points out that $(n\,0)=(n\,n)=1$ and $(n\,1)=(n\,n-1)=n$ and that these numbers are called binomial coefficients. | **Yes** | Section 7 introduces factorials and combinations, including examples and interpretation as arrangements and selections.  Section 7 also details key properties of binomial coefficients. | None | Simple examples in tables; interactive Pascal’s triangle widget (`WIDGET‑001`) reinforces factorial and combination calculations. |
| **Use binomial coefficients to write terms in ascending powers of $x$** | The elaboration document does not explicitly mention ordering terms, but ascending powers of $x$ are standard in exam questions; learners should recognise that the $(r+1)$th term in $(a+b)^n$ contains $b^r$ and the exponent on $b$ determines the power of $x$. | **Yes** | Section 9 explains ascending powers of $x$ and highlights the common trap that term number is not the same as the power of $x$.  Examples with $(1 + \tfrac{x}{4})^8$ and $(2 + kx)^7$ demonstrate ordering. | None | Mermaid flowchart (`MMD‑001`) summarises the procedure; interactive expansion widget (`WIDGET‑002`) helps practise ordering. |
| **Find individual terms or coefficients in a binomial expansion** | While the elaboration document simply states that students must use the general term, exam questions often ask for a specific term or the coefficient of $x^k$. | **Yes** | Section 10 describes how to find a specific term using $T_{r+1}=\displaystyle\binom{n}{r}a^{n-r}b^r$ and includes worked examples.  Section 11 demonstrates how to find the coefficient of $x^k$ and solves examples of solving for unknown parameters. | None | Summary of key formulas table; interactive coefficient widget (`WIDGET‑002`). |
| **Use binomial expansion to approximate $(1+u)^n$ when $|u|$ is small** | Although not listed explicitly in the specification, past exam questions often require using the first few terms of $(1+u)^n$ to estimate powers such as $(1.025)^8$ or $(1.03)^{10}$ when $|u|$ is small.  Only positive integer $n$ cases are considered at AS level (fractional expansions occur at A2). | **Partial/Extension** | Section 12 shows how to write quantities in the form $(1+u)^n$ and use the first few terms for approximation, including worked examples.  This material is labelled as exam‑focused but not strictly specified. | No gap; treat as extension. | None required; interactive approximation widget (`WIDGET‑003`) helps explore accuracy when $u$ is small. |
| **Off‑spec content** | Any references to fractional or negative exponents or infinite series (such as the generalised binomial theorem) are outside AS1. | **Excluded** | This lesson does not cover expansions for non‑integer $n$ or provide infinite binomial series. | None | N/A |

## 2. Learning Objectives

By the end of this lesson you should be able to:

1. **Define and compute factorials**: Recognise that $n!$ is the product of all positive integers from $n$ down to 1, with $0!=1$, and interpret $n!$ as the number of ways of arranging $n$ distinct objects in a line.
2. **Use combinations (the choose function)**: Understand and use the formula
   $$\binom{n}{r}=\frac{n!}{r!(n-r)!},$$
   know that $(n\,0)=(n\,n)=1$ and $(n\,1)=(n\,n-1)=n$, and interpret $\binom{n}{r}$ as the number of ways of choosing $r$ items from $n$ when order does not matter.
3. **Generate and interpret Pascal’s triangle**: Construct rows of Pascal’s triangle and use them to obtain binomial coefficients for $(a+b)^n$.
4. **State and apply the binomial theorem for positive integers**: Recall that for a positive integer $n$,
   $$ (a+b)^n=\sum_{r=0}^{n}\binom{n}{r}a^{n-r}b^r, $$
   and use this formula to expand expressions and derive the general term.
5. **Write the general term and recognise power patterns**: Identify the $(r+1)$th term as $T_{r+1}=\binom{n}{r}a^{n-r}b^r$, noting how the exponents of $a$ and $b$ change with $r$.
6. **Expand binomials and order terms**: Expand $(a+b)^n$ using binomial coefficients and write the first few terms in ascending powers of $x$ when $b$ contains $x$ (for example, $(1+\tfrac{x}{4})^8$ and $(2+kx)^7$).  Understand that the term number $r+1$ is not the same as the power of $x$.
7. **Find specific terms and coefficients**: Use the general term to find a particular term (e.g. the 5th term in $(2+3x)^7$) or the coefficient of $x^k$ in a binomial expansion, and solve for unknown parameters when given a coefficient.
8. **Use binomial expansion for estimation**: When $|u|$ is small, use the first few terms of $(1+u)^n$ to approximate $(1+u)^n$ and related quantities, and understand why the approximation works.

## 3. Compact Prerequisite Recap

Before tackling binomial expansion, you should be comfortable with the following GCSE‑level concepts:

* **Index laws** – for positive integers, $a^m \times a^n = a^{m+n}$, $(a^m)^n = a^{mn}$ and $a^m/a^n = a^{m-n}$ (provided $a\ne 0$).  Negative and fractional exponents are covered later in the course.
* **Basic algebraic notation** – expand and simplify expressions such as $(x+2)^2$ or $(2x-3)(x+5)$ and collect like terms.
* **Sequences and patterns** – recognise simple numerical patterns such as triangular numbers or geometric sequences; Pascal’s triangle builds on these ideas.
* **Factor notation** – the factorial symbol $n!$ is new at AS level but you should recall the concept of permutations and combinations from GCSE probability (permutations count the number of arrangements, combinations count selections without regard to order).

## 4. Big Picture Explanation

Binomial expansion is the study of expressions of the form $(a+b)^n$, where $n$ is a positive integer.  Instead of multiplying the bracket repeatedly (which becomes tedious for large $n$), the binomial theorem provides a systematic way to find each term and its coefficient.  Understanding binomial coefficients links together algebra, combinatorics and probability; Pascal’s triangle encodes these coefficients in a simple triangular pattern.  Binomial expansions appear throughout mathematics, from solving equations and modelling physical systems to finding probabilities in the binomial distribution and approximating powers such as $(1.03)^{10}$.  At AS level you will work with positive integer exponents and exact expansions; more general exponents (fractions and negatives) and infinite series are studied at A2.

## 5. Key Definitions and Notation

* **Factorial ($n!$)**: For a positive integer $n$,
  $$n! = n\times(n-1)\times(n-2)\times\cdots\times 3\times 2\times 1.$$  
  By definition $0!=1$.  For example, $5!=5\times4\times3\times2\times1=120$ and $1!=1$.  Factorials count the number of ways of arranging $n$ distinct objects in a line.

* **Combination or choose function ($\displaystyle\binom{n}{r}$)**: The number of ways of choosing $r$ objects from $n$ distinct objects, where order does not matter, is given by
  $$\binom{n}{r} = \frac{n!}{r!(n-r)!}, \qquad 0\le r\le n.$$
  These numbers are called **binomial coefficients**.  They satisfy
  \[(n\,0)=(n\,n)=1, \quad (n\,1)=(n\,n-1)=n, \quad \binom{n}{r} = \binom{n}{n-r}.\]

* **Pascal’s triangle**: An arrangement of numbers in triangular form where each entry is the sum of the two entries immediately above it.  Row $n$ (counting rows starting from $n=0$) lists the binomial coefficients $\binom{n}{0},\binom{n}{1},\dots,\binom{n}{n}$ and gives the coefficients in the expansion of $(a+b)^n$.

* **Binomial theorem**: For a positive integer $n$,
  $$\boxed{\displaystyle (a+b)^n = \sum_{r=0}^{n} \binom{n}{r} a^{\,n-r} b^r}. $$

* **General term**: In the expansion of $(a+b)^n$, the $(r+1)$th term (counting from $r=0$) is
  $$T_{r+1} = \binom{n}{r} a^{\,n-r} b^r, \qquad r=0,1,\dots,n.$$
  When $b$ contains $x$, the power of $x$ in the term is the same as the power of $b$ (that is, $x^r$ appears inside $b^r$).  The term number $r+1$ is **not** the same as the power of $x$.

## 6. Core Theory

### 6.1 Factorials

The factorial of a positive integer $n$ multiplies together all positive integers from $n$ down to 1.  Factorials grow quickly and are used throughout combinatorics.  Remember that $0!=1$ by definition; this ensures that formulas such as $(n\,0)=\dfrac{n!}{0!\,n!}=1$ work consistently.

*Examples:*  $5!=120$, $4!=24$, $3!=6$, $1!=1$, and $0!=1$.  A helpful way to interpret $n!$ is as the number of ways to arrange $n$ distinct objects in a line.

### 6.2 Combinations and Binomial Coefficients

When choosing $r$ objects from $n$ distinct objects without regard to order, the number of possible combinations is given by
$$\binom{n}{r} = \frac{n!}{r!(n-r)!}, \qquad 0\le r \le n.$$
These numbers have several useful properties:

* **Symmetry:** $\binom{n}{r}=\binom{n}{n-r}$.  For example, $\binom{10}{4}=\binom{10}{6}=210$.
* **Boundary values:** $\binom{n}{0}=\binom{n}{n}=1$ and $\binom{n}{1}=\binom{n}{n-1}=n$.
* **Recursive relationship:** $\displaystyle\binom{n+1}{r}=\binom{n}{r}+\binom{n}{r-1}$, which is the rule used to build Pascal’s triangle.

These coefficients appear as the weights in the expansion of $(a+b)^n$.

### 6.3 Pascal’s Triangle

Pascal’s triangle provides a quick way to read off binomial coefficients without calculating factorials each time.  Each row corresponds to a value of $n$ starting from $n=0$ at the top.  The first eight rows are shown in the diagram below (read across each row):

[VISUAL PLACEHOLDER: SVG‑001 | Source: lesson PDF p.1 | Insert from AS1_binomial_expansion_svg.md | Purpose: visual summary of Pascal’s triangle up to $n=8$]

To generate a new row, begin and end with 1 and add adjacent numbers from the row above.  The triangle is symmetric, and the $r$th entry in row $n$ is $\binom{n}{r}$.  In binomial expansions, row $n$ supplies the coefficients for $(a+b)^n$.

### 6.4 Binomial Theorem

For a positive integer $n$, the binomial theorem states that
$$\boxed{(a+b)^n = \sum_{r=0}^{n} \binom{n}{r} a^{n-r} b^r}. $$

This formula allows us to expand $(a+b)^n$ without performing repeated multiplication.  Key points to remember:

* The sum has $n+1$ terms (from $r=0$ to $r=n$).
* The exponent of $a$ starts at $n$ and decreases by 1 each term; the exponent of $b$ starts at 0 and increases by 1.
* The coefficient of each term is the corresponding binomial coefficient $\binom{n}{r}$.

*Example:*  Expand $(a+b)^4$:
$$ (a+b)^4 = \binom{4}{0}a^4b^0 + \binom{4}{1}a^3b^1 + \binom{4}{2}a^2b^2 + \binom{4}{3}a^1b^3 + \binom{4}{4}a^0b^4 \;\;=\; a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4. $$

### 6.5 General Term

The $(r+1)$th term of $(a+b)^n$ is
$$ T_{r+1}=\binom{n}{r} a^{n-r} b^r. $$
This compact form is very powerful:

* It lets you find any specific term without writing the entire expansion.
* It reveals that the term number is $r+1$, while the power of $b$ (and hence of $x$ if $b$ contains $x$) is $r$.
* It is the basis for finding coefficients of particular powers and for binomial approximations.

### 6.6 Expanding $(a+b)^n$ and Matching Powers

When $b$ contains a variable like $x$, exam questions often ask for the first few terms in **ascending powers of $x**.  Follow these steps:

1. **Identify $a$ and $b$** in the form $(a+b)^n$.  If the bracket contains a factor of $x$, that factor is part of $b$.  For example, in $(1+\tfrac{x}{4})^8$, $a=1$ and $b=\tfrac{x}{4}$.  In $(2+kx)^7$, $a=2$ and $b=kx$.
2. **Get the coefficients** for the required number of terms from Pascal’s triangle.  Row $n$ gives $\binom{n}{0},\binom{n}{1},\dots$.
3. **Match the powers**: the exponent of $a$ is $n-r$ and the exponent of $b$ is $r$ for the $(r+1)$th term.  Ensure that the power of $x$ comes from $b^r$.
4. **Write the terms**: multiply the coefficient, $a^{n-r}$ and $b^r$ for each required $r$.
5. **Order the terms** in ascending powers of $x$.  Remember that the term number $(r+1)$ is not the same as the power of $x$.

#### Example 6.6.1 – Expanding $(a+b)^4$

Using row 4 of Pascal’s triangle $[1,4,6,4,1]$, the expansion of $(a+b)^4$ is
$$\begin{aligned}
(a+b)^4 &= 1\cdot a^4b^0 + 4\cdot a^3b^1 + 6\cdot a^2b^2 + 4\cdot a^1b^3 + 1\cdot a^0b^4 \\
&= a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4.
\end{aligned}$$

#### Example 6.6.2 – First 4 terms of $(1+\tfrac{x}{4})^8$ in ascending powers of $x$

Row 8 of Pascal’s triangle is $[1,8,28,56,70,56,28,8,1]$.  Let $a=1$ and $b=\tfrac{x}{4}$.  Compute the first four terms for $r=0,1,2,3$:

| $r$ | Coefficient $\displaystyle\binom{8}{r}$ | $a^{8-r}$ | $b^r$ | Term | Simplified |
|---:|---:|---:|---:|---|---|
| 0 | 1 | $1^8$ | $(\tfrac{x}{4})^0$ | $1\cdot1\cdot1$ | $1$ |
| 1 | 8 | $1^7$ | $(\tfrac{x}{4})^1$ | $8\cdot1\cdot\tfrac{x}{4}$ | $2x$ |
| 2 | 28 | $1^6$ | $(\tfrac{x}{4})^2$ | $28\cdot1\cdot\tfrac{x^2}{16}$ | $\tfrac{7}{4}x^2$ |
| 3 | 56 | $1^5$ | $(\tfrac{x}{4})^3$ | $56\cdot1\cdot\tfrac{x^3}{64}$ | $\tfrac{7}{8}x^3$ |

So, $$ (1+\tfrac{x}{4})^8 \approx 1 + 2x + \tfrac{7}{4}x^2 + \tfrac{7}{8}x^3 + \dots $$ where the dots denote terms of order $x^4$ and higher.

#### Example 6.6.3 – First 3 terms of $(2+kx)^7$ in ascending powers of $x$

Row 7 of Pascal’s triangle is $[1,7,21,35,\dots]$.  Let $a=2$ and $b=kx$.

| $r$ | Term $T_{r+1}=\displaystyle\binom{7}{r}a^{7-r}b^r$ | Simplified |
|---:|---|---|
| 0 | $\binom{7}{0}2^7(kx)^0$ | $1\cdot 128\cdot1 = 128$ |
| 1 | $\binom{7}{1}2^6(kx)^1$ | $7\cdot64\cdot kx = 448 kx$ |
| 2 | $\binom{7}{2}2^5(kx)^2$ | $21\cdot32\cdot k^2x^2 = 672k^2x^2$ |

Thus, $$(2+kx)^7 = 128 + 448kx + 672k^2 x^2 + \dots,$$ where the omitted terms involve $x^3$ and higher powers.  Note that even though $n=7$, the second term ($r=1$) is linear in $x$ and the third term ($r=2$) is quadratic in $x$.

### 6.7 Finding Specific Terms

To find a particular term in $(a+b)^n$ without writing every term, use the general term formula $T_{r+1}=\binom{n}{r} a^{\,n-r} b^r$.

#### Procedure

1. **Identify $a$ and $b$** in the expression $(a+b)^n$.
2. **Determine which term you need.**  The $(r+1)$th term corresponds to $r$ (for instance, the 5th term means $r=4$).
3. **Substitute** $a$, $b$, $n$ and $r$ into the general term $\binom{n}{r} a^{n-r} b^r$.
4. **Simplify** the result, taking care with signs and powers.

#### Example 6.7.1 – 5th term of $(2+3x)^7$

We want the 5th term, so $r=4$.  Let $a=2$ and $b=3x$.

\[ T_5 = \binom{7}{4} \cdot 2^{7-4} \cdot (3x)^4 = 35 \cdot 2^3 \cdot 3^4 x^4 = 35 \times 8 \times 81\, x^4 = 22{,}680\,x^4. \]

#### Example 6.7.2 – 3rd term of $(5-2x)^6$

The 3rd term corresponds to $r=2$.  Take $a=5$ and $b=-2x$.

\[ T_3 = \binom{6}{2} \cdot 5^{6-2} \cdot (-2x)^2 = 15 \cdot 5^4 \cdot 4x^2 = 15 \times 625 \times 4\, x^2 = 93{,}750\,x^2. \]

### 6.8 Finding the Coefficient of $x^k$

When a binomial expansion is written in powers of $x$, the coefficient of $x^k$ can be found by determining which value of $r$ produces $x^k$ in the general term.  In $(a+b)^n$ with $b$ containing $x$, the power of $x$ in the term $T_{r+1}$ is the exponent of $x$ in $b^r$.  Solve for $r$ such that this exponent equals $k$.

#### Procedure

1. Identify $a$ and $b$ in $(a+b)^n$ and write $b$ in the form $c x^m$ where $c$ does not contain $x$.
2. Let $r$ be the term index.  The power of $x$ in $b^r$ is $m r$.
3. Solve $m r=k$ for $r$ to find which term contains $x^k$.
4. Substitute this $r$ into $\binom{n}{r} a^{n-r} b^r$ and extract the coefficient (the part not involving $x$).

#### Example 6.8.1 – Coefficient of $x^2$ in $(2-cx)^5$

Here $a=2$ and $b=-c x$, so $m=1$.  We want $m r=2$, so $r=2$.  The general term is
\[ T_{3} = \binom{5}{2} \cdot 2^{5-2} \cdot (-c x)^2 = 10 \cdot 2^3 \cdot c^2 x^2 = 80 c^2 x^2. \]
Therefore, the coefficient of $x^2$ is $80 c^2$.

#### Example 6.8.2 – Coefficient of $x^3$ in $(3x+4)^{16}$

Write $(3x+4)^{16}$ as $(a+b)^n$ with $a=4$ and $b=3x$, so $m=1$ and $n=16$.  The power of $x$ in $b^r$ is $r$, so we need $r=3$ for $x^3$.  Hence
\[ T_{4} = \binom{16}{3} \cdot 4^{16-3} \cdot (3x)^3 = 560 \cdot 4^{13} \cdot 27\,x^3 = 560 \times 27 \times 4^{13} \, x^3. \]
The numeric coefficient is $560 \times 27 \times 4^{13}$, which you would normally compute on a calculator.  This coefficient is approximately $1.01\times10^{12}$ (to three significant figures), and the required term is $1.01\times10^{12}\,x^3$.

#### Example 6.8.3 – Finding an unknown parameter

Suppose the coefficient of $x^4$ in $(1+q x)^{10}$ is $3360$.  We know that for $x^4$ we need $r=4$.  Therefore the coefficient is
$$\binom{10}{4} q^4 = 210 q^4 = 3360 \quad \Rightarrow \quad q^4 = \frac{3360}{210} = 16 \quad \Rightarrow \quad q = \pm 2.$$  
In many exam questions, $q$ is taken to be positive, so $q=2$.

### 6.9 Binomial Expansion for Approximations (Extension)

Although the specification does not explicitly mention using binomial expansion to approximate powers, examiners often ask you to use the first few terms of $(1+u)^n$ to estimate quantities like $(1.025)^8$ or $(1.03)^{10}$ when $|u|$ is small.  The underlying idea is that higher powers of $u$ become very small, so a few terms give a good approximation.

#### General approximation formula

For $|u|\ll1$ and positive integer $n$,
$$ (1+u)^n = 1 + n u + \frac{n(n-1)}{2!} u^2 + \frac{n(n-1)(n-2)}{3!} u^3 + \cdots. $$
Keeping only the first three or four terms often gives sufficient accuracy.  The error is of order $u^4$ or higher when three terms are used.

#### Example 6.9.1 – Estimate $(1.025)^8$ to four decimal places

1. **Write the quantity in the form $(1+u)^n$**.  Note that $1.025 = 1 + 0.025$, so $u=0.025$ and $n=8$.  Alternatively, recognise that $1.025^8 = \bigl(1 + \tfrac{x}{4}\bigr)^8$ if $\tfrac{x}{4}=0.025$, giving $x=0.1$.
2. **Expand** using the binomial theorem for $(1+u)^8$ and keep the first four terms:
$$ (1+u)^8 \approx 1 + 8u + \frac{8\cdot7}{2}u^2 + \frac{8\cdot7\cdot6}{6}u^3 = 1 + 8u + 28u^2 + 56u^3. $$
3. **Substitute** $u=0.025$:  
   $1 + 8(0.025) + 28(0.025)^2 + 56(0.025)^3  = 1 + 0.2 + 0.0175 + 0.000875 = 1.218375.$
4. **Round** to four decimal places at the end: $(1.025)^8 \approx \mathbf{1.2184}$.

#### Example 6.9.2 – Estimate $(1.03)^{10}$

Write $1.03=1+0.03$, so $u=0.03$ and $n=10$.  Using the first four terms of $(1+u)^{10}$:
$$ (1+u)^{10} \approx 1 + 10u + \frac{10\cdot9}{2}u^2 + \frac{10\cdot9\cdot8}{6}u^3 = 1 + 10u + 45u^2 + 120u^3. $$
Substituting $u=0.03$ gives
$$1 + 0.30 + 45\times 0.0009 + 120\times 0.000027 = 1.34374.$$
Rounding to four decimal places yields $(1.03)^{10} \approx \mathbf{1.3437}$.  
The smaller $|u|$ is, the more accurate the approximation; including more terms improves the estimate.

#### Method summary

* Express the quantity in the form $(1+u)^n$ or $(1+\tfrac{x}{k})^n$.
* Expand using the binomial theorem.
* Keep the first few terms (usually three or four) in ascending powers of $u$ or $x$.
* Substitute the value of $u$ (or $x$) and simplify.
* Round to the required number of decimal places **only at the end**.

## 7. Visual Asset Integration

### Pascal’s Triangle Diagram

The Pascal’s triangle diagram (`SVG‑001`) summarises the first nine rows of the triangle ($n=0$ to $n=8$).  It highlights that the sides are 1, each interior number is the sum of the two numbers above it, and the rows are symmetric.  This diagram is referenced in Section 6.3 and Section 7.

### Binomial Expansion Flowchart

A flowchart (`MMD‑001`) summarises the process of expanding $(a+b)^n$ and ordering terms in ascending powers of $x$.  It guides learners through identifying $a$ and $b$, obtaining coefficients, matching powers, writing terms and ordering them.  This appears after the explanation of the expansion process in Section 6.6.

### Exponent Pattern Diagram

The TikZ diagram (`TIKZ‑001`) illustrates how the exponents of $a$ and $b$ vary with the term index $r$.  It shows two lines: one descending line representing the exponent of $a$ (starting at $n$ and decreasing to 0) and one ascending line representing the exponent of $b$ (starting at 0 and increasing to $n$).  It helps visualise why the sum of exponents is always $n$ and that the power of $b$ (and thus the power of $x$ if $b$ contains $x$) corresponds to the term index.  This diagram is referenced in Section 6.5 and Section 6.6.

### AI‑Proposed Enhancements

Beyond the diagrams inspired by the PDF, three interactive widgets have been created to enrich your understanding:

1. **Pascal’s Triangle Explorer (Widget 001)** – allows you to choose a value of $n$ and view the corresponding row of Pascal’s triangle.  It reinforces the connection between combinations, factorials and binomial coefficients.
2. **Binomial Expansion Visualiser (Widget 002)** – lets you input values of $n$, $a$ and $b$ (including $b$ containing $x$) and displays the expanded form term by term.  You can choose how many terms to display and whether to order them in ascending powers of $x$.
3. **Binomial Approximation Tool (Widget 003)** – enables you to explore how the approximation $(1+u)^n \approx 1 + n u + \cdots$ varies with $n$, $u$ and the number of terms kept.  It illustrates the accuracy of approximations for small $|u|$.

Placeholders for these widgets are inserted at appropriate points in the lesson.

## 8. Interactive Learning Widgets

Interactive exploration deepens understanding by allowing you to manipulate parameters and see the effect immediately.  Each widget is included separately in `AS1_binomial_expansion_widgets.md`.  The placeholders below indicate where to refer to them.

* **Pascal’s Triangle Explorer**:  \
  [INTERACTIVE PLACEHOLDER: WIDGET‑001 | Source: AI‑proposed teaching enhancement, not present in lesson PDF | Insert from AS1_binomial_expansion_widgets.md | Purpose: explore rows of Pascal’s triangle and learn how combinations and factorials generate binomial coefficients]

* **Binomial Expansion Visualiser**:  \
  [INTERACTIVE PLACEHOLDER: WIDGET‑002 | Source: AI‑proposed teaching enhancement, not present in lesson PDF | Insert from AS1_binomial_expansion_widgets.md | Purpose: generate binomial expansions for user‑chosen $n$, $a$ and $b$, and display terms in ascending powers of $x$]

* **Binomial Approximation Tool** (Extension):  \
  [INTERACTIVE PLACEHOLDER: WIDGET‑003 | Source: AI‑proposed teaching enhancement, not present in lesson PDF | Insert from AS1_binomial_expansion_widgets.md | Purpose: see how keeping different numbers of terms affects the approximation of $(1+u)^n$ for small $u$]

If you are reading this material offline, copy the code from the widget file into a `.html` file and open it in a browser to use the widgets.  The widgets are learning tools – in an examination you must show your working using the algebraic methods taught.

## 9. Worked Examples

### Example 9.1 – Expand $(a+b)^4$

**Question:** Expand $(a+b)^4$.

**Method:** Use Pascal’s triangle (row 4: 1 4 6 4 1) and match the powers of $a$ and $b$.

\[ (a+b)^4 = a^4 + 4a^3 b + 6a^2 b^2 + 4a b^3 + b^4. \]

**Commentary:** Notice how the exponent of $a$ decreases from 4 to 0 while the exponent of $b$ increases from 0 to 4.  The total exponent in each term is always 4.

### Example 9.2 – First four terms in ascending powers of $x$ of $(1+\tfrac{x}{4})^8$

**Question:** Find the first four terms in ascending powers of $x$ in $(1+\tfrac{x}{4})^8$.

**Solution:**

1. Identify $a=1$ and $b=\tfrac{x}{4}$.
2. Take the first four coefficients from row 8 of Pascal’s triangle: 1, 8, 28, 56.
3. Compute each term:
   * $r=0$: $\binom{8}{0}1^8(\tfrac{x}{4})^0=1$.
   * $r=1$: $\binom{8}{1}1^7(\tfrac{x}{4})^1=8\cdot\tfrac{x}{4}=2x$.
   * $r=2$: $\binom{8}{2}1^6(\tfrac{x}{4})^2=28\cdot\tfrac{x^2}{16}=\tfrac{7}{4}x^2$.
   * $r=3$: $\binom{8}{3}1^5(\tfrac{x}{4})^3=56\cdot\tfrac{x^3}{64}=\tfrac{7}{8}x^3$.

**Answer:** $$ (1+\tfrac{x}{4})^8 = 1 + 2x + \tfrac{7}{4}x^2 + \tfrac{7}{8}x^3 + \dots $$

**Exam technique:** When the question asks for terms in ascending powers of $x$, start from $r=0$ and continue until the highest power requested.  Always simplify fractional coefficients fully.

### Example 9.3 – First three terms of $(2+kx)^7$

Following the same pattern as Example 9.2, we find
\[(2+kx)^7 = 128 + 448kx + 672k^2 x^2 + \dots.\]

This result will be particularly useful when finding coefficients of specific powers or when comparing to a given expression.

### Example 9.4 – Find the 5th term of $(2+3x)^7$

Refer to Section 6.7 for the detailed method.  The answer is $22{,}680\,x^4$.

### Example 9.5 – Find the coefficient of $x^2$ in $(2-cx)^5$

Refer to Section 6.8 for the detailed method.  The coefficient is $80c^2$.

### Example 9.6 – Find $q$ given that the coefficient of $x^4$ in $(1+qx)^{10}$ is 3360

As shown in Section 6.8, $q=\pm2$.  In most contexts $q$ is taken to be positive.

### Example 9.7 – Approximate $(1.025)^8$ and $(1.03)^{10}$

See Section 6.9.  The approximations are $1.2184$ and $1.3437$, respectively (both to four decimal places).

## 10. Common Mistakes and Exam Traps

* **Confusing term number with power of $x$**: In $(1+x)^5$, the 3rd term corresponds to $r=2$ and contains $x^2$.  The term number is $r+1$, not the exponent of $x$.
* **Using the wrong coefficients**: Always select coefficients from the correct row of Pascal’s triangle.  Check by computing a few small binomial coefficients to build confidence.
* **Forgetting to match $a$ and $b$ correctly**: Ensure that $a$ is the part of the bracket without $x$ and $b$ contains all factors of $x$.  For example, in $(3x+4)^{16}$, set $a=4$ and $b=3x$, not the other way around.
* **Failing to simplify constants and powers**: Expand numeric parts (such as $3^4$ or $5^6$) and simplify coefficients before giving your final answer.  Factor out signs carefully when $b$ contains a negative factor.
* **Rounding early in approximations**: When using binomial expansion to estimate powers, do not round intermediate results.  Substitute the decimal value for $u$ and only round the final answer to the required accuracy.

## 11. Practice Questions

Try the following questions to test your understanding.  Full solutions are provided in the next section.

1. Expand $(1+2x)^5$ and write all terms in ascending powers of $x$.
2. Expand $(3-\tfrac{x}{2})^4$ and list the first three terms in ascending powers of $x$.
3. Find the 6th term of $(2-3x)^8$.
4. Find the coefficient of $x^3$ in $(1+5x)^7$.
5. The coefficient of $x^2$ in $(1+qx)^6$ is $15$.  Find the value(s) of $q$.
6. Use the first three terms of the expansion of $(1-u)^9$ to approximate $(0.98)^9$.

## 12. Worked Solutions

### Solution 1

**Expand $(1+2x)^5$**

Row 5 of Pascal’s triangle is $[1,5,10,10,5,1]$.  Let $a=1$ and $b=2x$.

| $r$ | Term $T_{r+1}$ | Simplified term |
|---:|---|---|
| 0 | $\binom{5}{0}1^5(2x)^0$ | $1$ |
| 1 | $\binom{5}{1}1^4(2x)^1$ | $5\cdot2x=10x$ |
| 2 | $\binom{5}{2}1^3(2x)^2$ | $10\cdot4x^2=40x^2$ |
| 3 | $\binom{5}{3}1^2(2x)^3$ | $10\cdot8x^3=80x^3$ |
| 4 | $\binom{5}{4}1^1(2x)^4$ | $5\cdot16x^4=80x^4$ |
| 5 | $\binom{5}{5}1^0(2x)^5$ | $1\cdot32x^5=32x^5$ |

**Answer:** $$ (1+2x)^5 = 1 + 10x + 40x^2 + 80x^3 + 80x^4 + 32x^5. $$

### Solution 2

**Expand $(3-\tfrac{x}{2})^4$**

Row 4: $[1,4,6,4,1]$, $a=3$, $b=-\tfrac{x}{2}$.

| $r$ | $T_{r+1}$ | Simplified term |
|---:|---|---|
| 0 | $\binom{4}{0}3^4(-\tfrac{x}{2})^0$ | $81$ |
| 1 | $\binom{4}{1}3^3(-\tfrac{x}{2})$ | $4\cdot27\cdot(-\tfrac{x}{2}) = -54x$ |
| 2 | $\binom{4}{2}3^2(-\tfrac{x}{2})^2$ | $6\cdot9\cdot\tfrac{x^2}{4} = \tfrac{54}{4}x^2 = 13.5x^2$ |
| 3 | $\binom{4}{3}3^1(-\tfrac{x}{2})^3$ | $4\cdot3\cdot(-\tfrac{x^3}{8}) = -\tfrac{12}{8}x^3 = -1.5x^3$ |
| 4 | $\binom{4}{4}3^0(-\tfrac{x}{2})^4$ | $1\cdot1\cdot\tfrac{x^4}{16} = \tfrac{x^4}{16}$ |

**First three terms:** $81 - 54x + 13.5x^2 + \dots$.

### Solution 3

**Find the 6th term of $(2-3x)^8$**

The 6th term means $r=5$ (since $r+1=6$).  Let $a=2$, $b=-3x$, $n=8$.

\[ T_6 = \binom{8}{5} \cdot 2^{8-5} \cdot (-3x)^5 = 56 \cdot 2^3 \cdot (-3)^5 x^5. \]
Compute: $2^3=8$, $(-3)^5=-243$, so $T_6 = 56 \times 8 \times (-243)\, x^5 = -108{,}864\,x^5$.

**Answer:** $-108{,}864\,x^5$.

### Solution 4

**Find the coefficient of $x^3$ in $(1+5x)^7$**

Write $a=1$, $b=5x$, $n=7$.  The power of $x$ in $b^r$ is $r$, so set $r=3$.

\[ T_{4} = \binom{7}{3} \cdot 1^{4} \cdot (5x)^3 = 35 \cdot 125 \cdot x^3 = 4{,}375\,x^3. \]

Therefore, the coefficient of $x^3$ is $4{,}375$.

### Solution 5

**The coefficient of $x^2$ in $(1+q x)^6$ is 15.  Find $q$.**

Let $a=1$, $b=qx$, $n=6$.  For $x^2$, we need $r=2$, so
\[ \binom{6}{2} q^2 = 15 \quad \Rightarrow \quad 15 q^2 = 15 \quad \Rightarrow \quad q^2 = 1 \quad \Rightarrow \quad q = \pm 1. \]
If $q$ is positive, then $q=1$; if negative, $q=-1$.

### Solution 6

**Approximate $(0.98)^9$ using the first three terms of $(1-u)^9$**

Observe that $0.98 = 1 - 0.02$, so $u=0.02$ and $n=9$.  The first three terms of $(1-u)^9$ are
\[ (1-u)^9 \approx 1 - 9u + \frac{9\cdot8}{2}u^2 = 1 - 9u + 36u^2. \]
Substituting $u=0.02$ gives
\[ 1 - 9(0.02) + 36(0.02)^2 = 1 - 0.18 + 36\times0.0004 = 1 - 0.18 + 0.0144 = 0.8344. \]
Thus, $(0.98)^9 \approx \mathbf{0.8344}$ (to four decimal places).  The actual value is approximately 0.8347, so the approximation is very close.

## 13. Exam Technique Notes

The following tips will help you earn full marks on binomial expansion questions:

* **Show the general term** – Examiners award marks for correctly writing $\binom{n}{r}a^{n-r}b^r$ before substituting values, even if you then calculate the term incorrectly.  Always include this step.
* **Use Pascal’s triangle for coefficients** – For expansions with moderate values of $n$ (up to about 10), it is quicker and less error‑prone to write down the relevant row of Pascal’s triangle than to compute factorials for each coefficient.  You can quickly reconstruct a row by starting and ending with 1 and adding adjacent numbers from the row above.
* **Order terms as requested** – Pay attention to whether the question asks for terms in ascending or descending powers.  In ascending powers of $x$, start with the constant term ($r=0$) and proceed until the required power.  In descending powers, start with the highest power and work backwards.
* **Use a calculator wisely** – Calculators can compute factorials, combinations and powers, but they cannot tell you which term to use.  Identify the correct $r$ using algebra, then use the calculator to evaluate the numeric coefficient.  Always write down intermediate algebraic steps.
* **Handle negative and fractional factors carefully** – If $b$ includes a negative sign or fraction (e.g. $(5-2x)^6$ or $(3-\tfrac{x}{2})^4$), include the negative or fraction inside $b$ and raise it to the appropriate power.  Remember that even powers of a negative number are positive, while odd powers are negative.
* **In approximation questions**, keep at least three significant figures in intermediate calculations and round only at the final stage.  Explain which terms you are keeping and why higher‑order terms are neglected.  If asked to justify the approximation, refer to the small size of $|u|$ (for example, $|u| \le 0.1$).

## 14. Syllabus Gap Check

After preparing these notes, the content was checked against the CCEA specification and elaboration document:

* **Fully covered content:** factorials and permutations; combinations and binomial coefficients; Pascal’s triangle; the binomial theorem for positive integer exponents; general term; expanding binomials and ordering terms; finding specific terms and coefficients.
* **Partially covered content:** using binomial expansion for approximation is included as an extension because it frequently appears in exams but is not explicitly listed in the specification.  All approximation material is clearly labelled as such.
* **Missing content:** expansions for negative or fractional exponents and connections to the binomial distribution (statistics) belong to A2 or AS2 units and are intentionally excluded.
* **Off‑spec content removed:** no off‑spec material from the source PDF was included.  Examples involving fractional exponents or infinite series were not present in the source PDF and therefore do not appear here.
* **Assumptions:** a basic understanding of GCSE algebra and indices was assumed and briefly recapped.  The symbol $(n\,r)$ is used interchangeably with $\binom{n}{r}$.

## 15. Recommended Enhancements Not in the PDF

| Asset ID | Type | Why it was added | Specification point supported | Essential or optional |
|---|---|---|---|---|
| **MMD‑001** | Mermaid flowchart | Summarises the procedure for expanding $(a+b)^n$ and ordering terms.  Helps students visualise the steps in the correct order. | Use of binomial theorem and writing terms in ascending powers. | Essential |
| **SVG‑001** | SVG diagram | Provides a clear, scalable representation of Pascal’s triangle up to $n=8$.  Aids memorisation of coefficients and demonstrates symmetry. | Binomial coefficients and Pascal’s triangle. | Essential |
| **TIKZ‑001** | TikZ diagram | Shows the linear relationship between term index and exponents of $a$ and $b$.  Helps learners understand that the sum of exponents is $n$ and that the power of $b$ matches the term index. | General term; understanding exponent patterns. | Helpful but optional |
| **WIDGET‑001** | Interactive widget | Allows learners to generate rows of Pascal’s triangle for different values of $n$ and see how factorials and combinations produce binomial coefficients. | Understanding combinations and Pascal’s triangle. | Essential for interactive learning |
| **WIDGET‑002** | Interactive widget | Generates binomial expansions for user‑chosen values of $n$, $a$ and $b$.  Helps students practise matching powers and ordering terms. | Application of the binomial theorem and ordering terms. | Essential |
| **WIDGET‑003** | Interactive widget | Visualises the binomial approximation for $(1+u)^n$ and shows how the number of terms and the value of $u$ affect accuracy. | Approximation using binomial expansion (extension). | Optional (extension) |

## 16. Supplementary Sources Used

No external sources beyond the supplied CCEA specification, elaboration document and lesson PDF were required for core content.  General exam practice for binomial approximations was based on typical UK exam board questions; no additional citation was necessary.

## 17. Final Student Checklist

After studying this lesson, you should be able to tick off each item below:

* [ ] I can define $n!$, compute factorial values and explain why $0!=1$.
* [ ] I understand the combination formula $\displaystyle\binom{n}{r}=\frac{n!}{r!(n-r)!}$ and can compute binomial coefficients using symmetry and Pascal’s triangle.
* [ ] I can construct Pascal’s triangle and use row $n$ to obtain the coefficients of $(a+b)^n$.
* [ ] I can state the binomial theorem for positive integer $n$ and identify the general term $T_{r+1}=\binom{n}{r}a^{n-r}b^r$.
* [ ] I can expand expressions like $(1+2x)^5$ or $(2+kx)^7$ and order the terms in ascending powers of $x$.
* [ ] I can find a specific term in $(a+b)^n$ (for example, the 6th term) without writing the entire expansion.
* [ ] I can determine the coefficient of $x^k$ in a binomial expansion and solve for unknown parameters when the coefficient is given.
* [ ] (Extension) I can use the first few terms of $(1+u)^n$ to approximate $(1+u)^n$ when $|u|$ is small, explain why the approximation works and choose an appropriate number of terms.
* [ ] I have practised using the interactive widgets to reinforce my understanding and can explain what happens when $n$, $a$, $b$ or $u$ are varied.

## 6. Diagram Assets

## 6.1 Mermaid Assets

### Source File Metadata

```yaml
filename: "AS1_binomial_expansion_mermaid.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/05. Binomial Expansion/AS1_binomial_expansion_mermaid.md"
lines: 17
bytes_utf8: 806
sha256: "c636206a221976048abaec5e9e2690b9d6cc530ffcddd720635ec677dcfbe48f"
```

### Preserved Source Content: AS1_binomial_expansion_mermaid.md

# Mermaid Diagrams for AS1 binomial expansion

## MMD‑001: Binomial Expansion Flowchart
Source: AI‑proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: MMD‑001 | ...]`  
Purpose: Summarise the steps for expanding $(a+b)^n$ and ordering terms in ascending powers of $x$.

```mermaid
flowchart TD
    A[Identify $a$ and $b$ in $(a+b)^n$] --> B[Decide how many terms are needed and write down $n$]
    B --> C[Obtain coefficients from Pascal's triangle or compute $\binom{n}{r}$]
    C --> D[Write general term $T(r+1) = \binom{n}{r}\,a^{n-r}\,b^r$]
    D --> E[Compute each term for $r=0,1,2,\dots$]
    E --> F[Order the terms in ascending powers of $x$ (if $b$ contains $x$)]
    F --> G[Check coefficients and simplify numerical factors]
```

## 6.2 SVG Assets

### Source File Metadata

```yaml
filename: "AS1_binomial_expansion_svg.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/05. Binomial Expansion/AS1_binomial_expansion_svg.md"
lines: 69
bytes_utf8: 2099
sha256: "fded268fc829cdaf012ff00643f491b26da4bffe5ccb3c2d93fbdddc8ae7b08f"
```

### Preserved Source Content: AS1_binomial_expansion_svg.md

# SVG Diagrams for AS1 binomial expansion

## SVG‑001: Pascal’s Triangle up to $n=8$
Source: lesson PDF p.1  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: SVG‑001 | ...]`  
Purpose: Visual summary of Pascal’s triangle up to $n=8$ showing binomial coefficients.

```svg
<svg width="650" height="220" viewBox="0 0 650 220" xmlns="http://www.w3.org/2000/svg">
  <style>
    text { font-family: sans-serif; font-size: 14px; }
  </style>
  <!-- Row 0 -->
  <text x="325" y="20">1</text>
  <!-- Row 1 -->
  <text x="300" y="40">1</text>
  <text x="350" y="40">1</text>
  <!-- Row 2 -->
  <text x="280" y="60">1</text>
  <text x="350" y="60">2</text>
  <text x="420" y="60">1</text>
  <!-- Row 3 -->
  <text x="240" y="80">1</text>
  <text x="310" y="80">3</text>
  <text x="380" y="80">3</text>
  <text x="450" y="80">1</text>
  <!-- Row 4 -->
  <text x="200" y="100">1</text>
  <text x="270" y="100">4</text>
  <text x="340" y="100">6</text>
  <text x="410" y="100">4</text>
  <text x="480" y="100">1</text>
  <!-- Row 5 -->
  <text x="160" y="120">1</text>
  <text x="230" y="120">5</text>
  <text x="300" y="120">10</text>
  <text x="370" y="120">10</text>
  <text x="440" y="120">5</text>
  <text x="510" y="120">1</text>
  <!-- Row 6 -->
  <text x="120" y="140">1</text>
  <text x="190" y="140">6</text>
  <text x="260" y="140">15</text>
  <text x="330" y="140">20</text>
  <text x="400" y="140">15</text>
  <text x="470" y="140">6</text>
  <text x="540" y="140">1</text>
  <!-- Row 7 -->
  <text x="80" y="160">1</text>
  <text x="150" y="160">7</text>
  <text x="220" y="160">21</text>
  <text x="290" y="160">35</text>
  <text x="360" y="160">35</text>
  <text x="430" y="160">21</text>
  <text x="500" y="160">7</text>
  <text x="570" y="160">1</text>
  <!-- Row 8 -->
  <text x="40" y="180">1</text>
  <text x="110" y="180">8</text>
  <text x="180" y="180">28</text>
  <text x="250" y="180">56</text>
  <text x="320" y="180">70</text>
  <text x="390" y="180">56</text>
  <text x="460" y="180">28</text>
  <text x="530" y="180">8</text>
  <text x="600" y="180">1</text>
</svg>
```

## 6.3 TikZ Assets

### Source File Metadata

```yaml
filename: "AS1_binomial_expansion_tikz.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/05. Binomial Expansion/AS1_binomial_expansion_tikz.md"
lines: 28
bytes_utf8: 1224
sha256: "f214aa1a18c31ccad51d872ed7c5da079b1d70aa0d573a17a72e134113f3f19c"
```

### Preserved Source Content: AS1_binomial_expansion_tikz.md

# TikZ Diagrams for AS1 binomial expansion

## TIKZ‑001: Exponent Pattern in $(a+b)^n$
Source: AI‑proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: TIKZ‑001 | ...]`  
Purpose: Illustrate how the exponents of $a$ and $b$ vary with the term index $r$ in the expansion of $(a+b)^n$.  For example, the blue line shows the exponent of $a$, starting at $n$ when $r=0$ and decreasing to 0 when $r=n$.  The red line shows the exponent of $b$, starting at 0 and increasing to $n$.

```latex
\begin{tikzpicture}[scale=0.8]
  % Axes
  \draw[->] (0,0) -- (6.5,0) node[below right] {$r$ (term index)};
  \draw[->] (0,0) -- (0,6.5) node[above left] {Exponent};
  % Lines representing exponents
  \draw[thick,blue] (0,6) -- (6,0) node[right,blue] {$a^{\,n-r}$ (exponent of $a$)};
  \draw[thick,red] (0,0) -- (6,6) node[right,red] {$b^{\,r}$ (exponent of $b$)};
  % Tick marks on r-axis
  \foreach \x in {0,1,2,3,4,5,6} {
    \draw (\x,0.1) -- (\x,-0.1) node[below] {$\x$};
  }
  % Tick marks on exponent axis
  \foreach \y in {0,1,2,3,4,5,6} {
    \draw (0.1,\y) -- (-0.1,\y) node[left] {$\y$};
  }
  % Annotation for n
  \node at (6.3,6.3) {$n$};
\end{tikzpicture}
```

## 7. Interactive Widgets

## 7.1 Widget Assets

### Source File Metadata

```yaml
filename: "AS1_binomial_expansion_widgets.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/05. Binomial Expansion/AS1_binomial_expansion_widgets.md"
lines: 255
bytes_utf8: 10182
sha256: "4d99a892f8cbe2ed1ae9c8b3a027ec45eb38feaf3408fbdba4b957e5b01ec2a1"
```

### Preserved Source Content: AS1_binomial_expansion_widgets.md

# Interactive Widgets for AS1 binomial expansion

This file contains the code for the interactive widgets referenced in the lesson.  Copy the desired widget code into a `.html` file and open it in a browser to use it.  Sliders and number inputs allow you to explore the concepts dynamically.  These tools are intended for practice and exploration; during examinations you must show algebraic working.

## WIDGET‑001: Pascal’s Triangle Explorer
Source: AI‑proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[INTERACTIVE PLACEHOLDER: WIDGET‑001 | ...]`  
Purpose: Explore rows of Pascal’s triangle and learn how combinations and factorials generate binomial coefficients.

### Learning Goal
Visualise the rows of Pascal’s triangle, observe how binomial coefficients are generated and notice patterns such as symmetry and the sum of each row being $2^n$.

### Controls
* `n` (slider): choose the row number $n$ (0–10).

### Live Outputs
* The selected row of Pascal’s triangle.
* The sum of the row (which should equal $2^n$).

### What to Notice
* The first and last entries of each row are always 1.
* Each interior entry is the sum of the two entries above it.
* The entries are symmetric about the centre.
* The sum of the $n$th row is $2^n$; try changing $n$ to verify this pattern.

### Exam Connection
Knowing how to generate binomial coefficients quickly (without resorting to factorial calculations each time) is essential when expanding $(a+b)^n$ or finding specific coefficients.  Pascal’s triangle offers a rapid visual method to obtain these coefficients.

### How to Run
Copy the code below into a file called `pascal_explorer.html` and open it in a web browser.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Pascal's Triangle Explorer</title>
  <style>
    body { font-family: sans-serif; padding: 1em; }
    input[type="range"] { width: 300px; }
    .row { margin-top: 1em; font-size: 1.2em; }
  </style>
</head>
<body>
  <h3>Pascal's Triangle Explorer</h3>
  <label for="n">Choose n (0–10): </label>
  <input type="range" id="n" min="0" max="10" value="5" oninput="update()">
  <span id="nVal">5</span>
  <div class="row" id="row"></div>
  <div class="row">Sum of row = <span id="sum"></span></div>
  <script>
    function factorial(num) {
      let result = 1;
      for (let i = 2; i <= num; i++) result *= i;
      return result;
    }
    function nCr(n, r) {
      return factorial(n) / (factorial(r) * factorial(n - r));
    }
    function update() {
      const n = parseInt(document.getElementById('n').value);
      document.getElementById('nVal').textContent = n;
      let row = [];
      for (let r = 0; r <= n; r++) {
        row.push(nCr(n, r));
      }
      document.getElementById('row').textContent = row.join('   ');
      // compute sum
      let sum = row.reduce((a, b) => a + b, 0);
      document.getElementById('sum').textContent = sum;
    }
    update();
  </script>
</body>
</html>
```

---

## WIDGET‑002: Binomial Expansion Visualiser
Source: AI‑proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[INTERACTIVE PLACEHOLDER: WIDGET‑002 | ...]`  
Purpose: Generate binomial expansions for user‑chosen values of $n$, $a$ and $b$ (where $b$ contains $x$).  Display terms in ascending powers of $x$.

### Learning Goal
Practise constructing binomial expansions and matching the correct term number to the power of $x$.  See how coefficients depend on $n$, $a$ and the coefficient of $x$ in $b$.

### Controls
* `n` (number input): choose $n$ (0–10).  Changing $n$ also updates the maximum number of terms.
* `a` (number input): the constant term $a$ in $(a + kx)^n$.
* `k` (number input): the coefficient of $x$ in $b=kx$.
* `terms` (number input): how many terms to display (1 to $n+1$).

### Live Outputs
* A list of terms of the expansion of $(a + kx)^n$ in ascending powers of $x$: each line shows the term number, the coefficient and the power of $x$.

### What to Notice
* The constant term ($r=0$) is $a^n$.
* The coefficient of $x^r$ is $\binom{n}{r} a^{n-r} k^r$.
* The term number is $r+1$, not the power of $x$.

### Exam Connection
This widget helps you practise writing the first few terms of an expansion and finding coefficients of specific powers, which are common tasks in exam questions.

### How to Run
Copy the code below into a file called `binomial_visualiser.html` and open it in a web browser.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Binomial Expansion Visualiser</title>
  <style>
    body { font-family: sans-serif; padding: 1em; }
    input { margin-right: 0.5em; }
    .controls { margin-bottom: 1em; }
    .output pre { background: #f0f0f0; padding: 0.5em; }
  </style>
</head>
<body>
  <h3>Binomial Expansion Visualiser</h3>
  <div class="controls">
    <label for="n">n:</label>
    <input type="number" id="n" min="0" max="10" value="5" onchange="update()" oninput="update()">
    <label for="a">a:</label>
    <input type="number" id="a" value="2" onchange="update()" oninput="update()">
    <label for="k">k (coefficient of x):</label>
    <input type="number" id="k" value="1" onchange="update()" oninput="update()">
    <label for="terms">Number of terms:</label>
    <input type="number" id="terms" min="1" max="6" value="3" onchange="update()" oninput="update()">
  </div>
  <div class="output" id="output"></div>
  <script>
    function factorial(num) {
      let result = 1;
      for (let i = 2; i <= num; i++) result *= i;
      return result;
    }
    function nCr(n, r) {
      return factorial(n) / (factorial(r) * factorial(n - r));
    }
    function update() {
      const n = parseInt(document.getElementById('n').value);
      const a = parseFloat(document.getElementById('a').value);
      const k = parseFloat(document.getElementById('k').value);
      const terms = Math.min(parseInt(document.getElementById('terms').value), n + 1);
      document.getElementById('terms').max = n + 1;
      let lines = [];
      for (let r = 0; r < terms; r++) {
        const coeff = nCr(n, r) * Math.pow(a, n - r) * Math.pow(k, r);
        lines.push('Term ' + (r + 1) + ': ' + coeff.toFixed(5) + ' \u00D7 x^' + r);
      }
      document.getElementById('output').innerHTML = '<pre>' + lines.join('\n') + '</pre>';
    }
    update();
  </script>
</body>
</html>
```

---

## WIDGET‑003: Binomial Approximation Tool
Source: AI‑proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[INTERACTIVE PLACEHOLDER: WIDGET‑003 | ...]`  
Purpose: See how keeping different numbers of terms affects the approximation of $(1+u)^n$ for small $u$.

### Learning Goal
Understand how the binomial approximation $(1+u)^n \approx 1 + n u + \dfrac{n(n-1)}{2!}u^2 + \dfrac{n(n-1)(n-2)}{3!}u^3 + \dots$ converges to the exact value as more terms are included and as $|u|$ becomes smaller.

### Controls
* `n` (slider): choose $n$ (1–20).
* `u` (slider): choose the value of $u$ (–0.3 to 0.3).  Keep $|u|$ small to observe good approximations.
* `terms` (slider): number of terms to include in the approximation (1–6).

### Live Outputs
* Approximate value computed using the chosen number of terms.
* Exact value of $(1+u)^n$.
* Absolute error between the approximation and the exact value.

### What to Notice
* For fixed $n$, the approximation improves as you include more terms.
* For fixed number of terms, the approximation is more accurate when $|u|$ is small.
* The error roughly halves when you include an additional term for small $|u|$.

### Exam Connection
Approximation questions often require writing $(1+u)^n$ in ascending powers of $u$ and keeping three or four terms.  This widget reinforces how and why the approximation works.

### How to Run
Copy the code below into a file called `binomial_approximation.html` and open it in a web browser.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Binomial Approximation Tool</title>
  <style>
    body { font-family: sans-serif; padding: 1em; }
    .controls { margin-bottom: 1em; }
    .controls label { margin-right: 0.5em; }
    .output { background: #f9f9f9; padding: 0.5em; border: 1px solid #ddd; }
  </style>
</head>
<body>
  <h3>Binomial Approximation Tool</h3>
  <div class="controls">
    <label for="n">n:</label>
    <input type="range" id="n" min="1" max="20" value="8" oninput="update()">
    <span id="nVal">8</span>
    <br>
    <label for="u">u (–0.3 to 0.3):</label>
    <input type="range" id="u" min="-0.3" max="0.3" step="0.01" value="0.1" oninput="update()">
    <span id="uVal">0.10</span>
    <br>
    <label for="terms">Number of terms:</label>
    <input type="range" id="terms" min="1" max="6" value="3" oninput="update()">
    <span id="termsVal">3</span>
  </div>
  <div class="output" id="output"></div>
  <script>
    function factorial(num) {
      let result = 1;
      for (let i = 2; i <= num; i++) result *= i;
      return result;
    }
    function nCr(n, r) {
      return factorial(n) / (factorial(r) * factorial(n - r));
    }
    function update() {
      const n = parseInt(document.getElementById('n').value);
      const u = parseFloat(document.getElementById('u').value);
      const m = parseInt(document.getElementById('terms').value);
      document.getElementById('nVal').textContent = n;
      document.getElementById('uVal').textContent = u.toFixed(2);
      document.getElementById('termsVal').textContent = m;
      // approximate using first m terms
      let approx = 0;
      for (let r = 0; r < m; r++) {
        approx += nCr(n, r) * Math.pow(u, r);
      }
      const exact = Math.pow(1 + u, n);
      const error = Math.abs(exact - approx);
      document.getElementById('output').innerHTML =
        '<p>Approximate value (using ' + m + ' term' + (m===1?'':'s') + '): <strong>' + approx.toFixed(6) + '</strong></p>' +
        '<p>Exact value: <strong>' + exact.toFixed(6) + '</strong></p>' +
        '<p>Absolute error: <strong>' + error.toExponential(3) + '</strong></p>';
    }
    update();
  </script>
</body>
</html>
```

## 8. Agent Retrieval Notes

Use Section 5 for teaching sequence and explanation. Use Sections 6 and 7 as asset banks. When an asset is marked as suggested, AI-proposed, generated, or uncertain, preserve that provenance in downstream responses.
