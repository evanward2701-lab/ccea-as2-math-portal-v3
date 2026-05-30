import { Module } from '@/core/types';

const LESSON_CONTENT = `
# 1. Lesson Title
**Topic:** Sequences and Series  
**Unit:** A2 1 Pure Mathematics (A21)

## 2. Specification Alignment

| LO ID | CCEA Specification Point |
|---|---|
| A21-SS-LO001 | Work with sequences, including $n$th term and $x_{n+1}=f(x_n)$ |
| A21-SS-LO002 | Behaviour of sequences: convergence, divergence, oscillation |
| A21-SS-LO003 | Sigma notation for sums of series |
| A21-SS-LO004 | Arithmetic sequences and series, formulae for $n$th term and sum |
| A21-SS-LO005 | Geometric sequences and series, formulae for $n$th term and sum |
| A21-SS-LO006 | Prove the formula for the sum of the first $n$ terms of an AP or GP |
| A21-SS-LO007 | Find the sum to infinity of a convergent GP, including $|r|<1$ |
| A21-SS-LO009 | Use sequences and series in modelling |

## 3. Learning Objectives
By the end of this lesson, you should be able to:
* Identify and use the formulae for the $n$th term and the sum of the first $n$ terms for both arithmetic and geometric series.
* Prove the sum formulae for both arithmetic and geometric series.
* Calculate the sum to infinity of a convergent geometric series and understand the condition $|r| < 1$.
* Interpret and evaluate sums written using Sigma ($\\Sigma$) notation.
* Generate terms of a sequence using a recurrence relation (term-to-term rule).
* Classify sequences as strictly increasing, strictly decreasing, or periodic (including stating the order).
* Apply sequences and series to model real-world situations like financial profits, compound interest, and physical extraction.

## 4. Compact Prerequisite Recap
To succeed in this lesson, you need to be confident with:
* **GCSE Sequences:** Finding the $n$th term of linear sequences.
* **Simultaneous Equations:** Solving linear simultaneous equations (used heavily to find $a$ and $d$ or $a$ and $r$).
* **Indices and Logarithms (AS1/A21):** Using the laws of indices and solving equations where the unknown is a power (e.g., using $\\ln$ or $\\log$ to solve $r^n < x$).
* **Inequalities (AS1):** Remembering to flip the inequality sign when dividing by a negative number (crucial when dealing with $\\ln(r)$ where $0 < r < 1$).

## 5. Big Picture Explanation
In GCSE, you learned how to spot patterns in numbers and find the $n$th term. In A Level Mathematics, we formalise this into **Sequences and Series**. A sequence is a list of numbers; a series is what you get when you add that list together. 

This topic is incredibly powerful for modelling the real world. Whether it's a business projecting its profits increasing by a fixed amount each year (an *arithmetic* model), a bank calculating compound interest (a *geometric* model), or a computer algorithm repeating a process to hone in on an answer (a *recurrence relation*), sequences are the mathematical engine behind discrete, step-by-step changes. We will also explore the mind-bending concept of adding together an *infinite* list of numbers and still getting a finite, exact answer.

## 6. Key Definitions and Notation
* **Sequence:** A list of numbers following a specific rule (e.g., $2, 5, 8, 11$).
* **Series:** The sum of the terms in a sequence (e.g., $2 + 5 + 8 + 11$).
* **Term ($u_n$):** A specific number in the sequence. $u_3$ is the 3rd term. $n$ is the position.
* **Arithmetic Sequence:** A sequence where the difference between consecutive terms is constant.
* **Geometric Sequence:** A sequence where the ratio between consecutive terms is constant (each term is multiplied by the same number).
* **Common Difference ($d$):** The amount added to each term in an arithmetic sequence.
* **Common Ratio ($r$):** The amount each term is multiplied by in a geometric sequence.
* **First Term ($a$):** The starting number of a sequence ($u_1$).
* **Recurrence Relation:** A rule that defines the next term in a sequence based on previous terms (e.g., $u_{n+1} = 2u_n + 4$).
* **Sigma Notation ($\\Sigma$):** A compact way to write a series. The Greek letter Sigma means "sum of".
* **Convergent:** A sequence or series that approaches a specific, finite limit as $n$ approaches infinity.
* **Divergent:** A sequence or series that does not approach a finite limit (e.g., it grows towards infinity or oscillates wildly).
* **Periodic:** A sequence whose terms repeat in a cycle. The **order** is how many terms are in the repeating cycle.

## 7. Core Theory

### 7.1 Arithmetic Sequences and Series

An **arithmetic sequence** has a common difference, $d$, between consecutive terms. 
If the first term is $a$, the sequence looks like this:
$a, \\quad a+d, \\quad a+2d, \\quad a+3d, \\quad \\dots$

**The $n$th term formula:**
$$u_n = a + (n - 1)d$$
*Why $n-1$?* Because to get to the 2nd term, you add $d$ once. To get to the 3rd term, you add $d$ twice. To get to the $n$th term, you add $d$ exactly $(n-1)$ times.

**The Sum of the first $n$ terms ($S_n$):**
There are two formulae you must memorise. 
Formula 1 (Standard):
$$S_n = \\frac{n}{2} \\left( 2a + (n - 1)d \\right)$$

Formula 2 (First and Last):
$$S_n = \\frac{n}{2} (a + L)$$
*(Where $L$ is the last term, $L = a + (n-1)d$)*

[VISUAL PLACEHOLDER: A21SequencesAndSeriesTikZ001 | Arithmetic Sum Pairwise Proof]

**Proof of the Arithmetic Sum Formula (Required for Exam):**
You must be able to reproduce this proof.
1. Write out the sum forwards:
   $S_n = a + (a+d) + (a+2d) + \\dots + (a + (n-2)d) + (a + (n-1)d)$
2. Write out the sum backwards underneath it:
   $S_n = (a + (n-1)d) + (a + (n-2)d) + \\dots + (a+d) + a$
3. Add the two equations together vertically. Every pair adds up to $2a + (n-1)d$.
   $2S_n = [2a + (n-1)d] + [2a + (n-1)d] + \\dots + [2a + (n-1)d]$
4. Because there are $n$ terms, there are $n$ lots of this bracket:
   $2S_n = n(2a + (n-1)d)$
5. Divide by 2:
   $$S_n = \\frac{n}{2}(2a + (n-1)d)$$

### 7.2 Geometric Sequences and Series

A **geometric sequence** has a common ratio, $r$, between consecutive terms.
If the first term is $a$, the sequence looks like this:
$a, \\quad ar, \\quad ar^2, \\quad ar^3, \\quad \\dots$

**The $n$th term formula:**
$$u_n = ar^{n-1}$$
*Warning:* The power is $n-1$, not $n$. The $r$ is raised to the power, not the $a$.

**The Sum of the first $n$ terms ($S_n$):**
$$S_n = \\frac{a(1 - r^n)}{1 - r}$$
*(Note: You can also write this as $S_n = \\frac{a(r^n - 1)}{r - 1}$ by multiplying top and bottom by $-1$. Both are valid, but the first is usually easier when $r < 1$.)*

**Proof of the Geometric Sum Formula (Required for Exam):**
1. Write out the sum:
   $S_n = a + ar + ar^2 + \\dots + ar^{n-2} + ar^{n-1}$
2. Multiply the entire equation by $r$:
   $rS_n = ar + ar^2 + ar^3 + \\dots + ar^{n-1} + ar^n$
3. Subtract the second equation from the first ($S_n - rS_n$). Notice how almost all the terms cancel out diagonally!
   $S_n - rS_n = a - ar^n$
4. Factorise both sides:
   $S_n(1 - r) = a(1 - r^n)$
5. Divide by $(1 - r)$:
   $$S_n = \\frac{a(1 - r^n)}{1 - r}$$

### 7.3 Sum to Infinity

If a geometric series has a common ratio between $-1$ and $1$ (written as $|r| < 1$), the terms get smaller and smaller as $n$ increases. 
Because $r$ is a fraction, as $n \\to \\infty$, the term $r^n \\to 0$.

If we substitute $r^n = 0$ into our sum formula:
$S_\\infty = \\frac{a(1 - 0)}{1 - r}$

**Sum to Infinity Formula:**
$$S_\\infty = \\frac{a}{1 - r}$$
*Condition:* This only works if $|r| < 1$. If $|r| \\geq 1$, the series is **divergent** and has no finite sum.

[VISUAL PLACEHOLDER: A21SequencesAndSeriesSVG001 | Infinite Geometric Series Convergence]

### 7.4 Sigma Notation ($\\Sigma$)

Sigma notation is a compact way of writing a series.
$$ \\sum_{r=1}^{5} (2r + 1) $$
* **Bottom number ($r=1$):** The starting value to substitute.
* **Top number ($5$):** The final value to substitute.
* **Expression ($2r+1$):** The formula for the terms.

To evaluate this, substitute $r=1, 2, 3, 4, 5$ into the expression and add the results:
$(2(1)+1) + (2(2)+1) + (2(3)+1) + (2(4)+1) + (2(5)+1)$
$= 3 + 5 + 7 + 9 + 11 = 35$

*Exam Tip:* If the expression is linear (e.g., $3n - 4$), it generates an **arithmetic series**. If the expression has the variable in the power (e.g., $5 \\times 3^k$), it generates a **geometric series**. You can extract $a$, $d$ (or $r$), and $n$, and use your $S_n$ formulae rather than calculating every term manually.

*Warning on counting terms:* If a sum goes from $k=5$ to $k=15$, there are NOT 10 terms. There are $15 - 5 + 1 = 11$ terms. Always subtract and add 1.

[INTERACTIVE PLACEHOLDER: A21SequencesAndSeriesWidget001 | Sigma Notation Unpacker]

### 7.5 Recurrence Relations

A recurrence relation defines the *next* term based on the *previous* term(s).
Example: $u_{n+1} = 2u_n + 4$, where $u_1 = 3$.
* $u_1 = 3$
* $u_2 = 2(3) + 4 = 10$
* $u_3 = 2(10) + 4 = 24$

*Exam Tip:* Recurrence relations are rarely arithmetic or geometric. You cannot use the $u_n$ or $S_n$ formulae. If an exam asks for a sum, you will usually have to write out the first few terms and look for a repeating pattern (a periodic sequence).

### 7.6 Sequence Behaviour

* **Strictly Increasing:** Every term is larger than the previous one ($u_{n+1} > u_n$ for all $n$).
* **Strictly Decreasing:** Every term is smaller than the previous one ($u_{n+1} < u_n$ for all $n$).
* **Periodic:** The terms repeat in a cycle. The **order** is the number of terms in one full cycle.
  * Example: $0, 1, 0, -1, 0, 1, 0, -1 \\dots$ is periodic with order 4.

### 7.7 Modelling with Sequences and Series

Sequences are used to model real-world scenarios:
* **Arithmetic:** Adding a fixed amount (e.g., a runner increasing their distance by 400m every day).
* **Geometric:** Multiplying by a fixed amount (e.g., a bank account increasing by 5% per year $\\rightarrow$ multiply by $1.05$).

*Limitations of models:* You must be able to critique models. For example, a business profit cannot increase by exactly £5000 every single year forever. A piece of paper cannot be folded in half 20 times.

## 8. Common Mistakes and Exam Traps
* **Confusing $u_n$ and $S_n$:** Read the question carefully. Are they asking for the 10th term ($u_{10}$) or the sum of the first 10 terms ($S_{10}$)?
* **The Power in Geometric Sequences:** The $n$th term is $ar^{n-1}$, not $ar^n$. The 5th term has a power of 4.
* **Counting Terms in Sigma Notation:** $\\sum_{r=10}^{20}$ has $20 - 10 + 1 = 11$ terms, not 10. Always add 1 after subtracting the limits.
* **Dividing by Negative Logarithms:** If $0 < r < 1$, then $\\ln(r)$ is negative. If you divide an inequality by $\\ln(r)$, you **must** flip the inequality sign (e.g., $<$ becomes $>$).
* **Assuming a Sequence is Arithmetic/Geometric:** If a sequence is defined by a recurrence relation like $u_{n+1} = 2u_n + 3$, it is neither arithmetic nor geometric. You cannot use the standard $S_n$ formulae. You must generate terms manually.

## 9. Practice Questions
1. Xin has been given a 14-day training schedule. She will run for $A$ minutes on day 1. She will increase her running time by $(d+1)$ minutes each day. (a) Show that on day 14, Xin will run for $(A + 13d + 13)$ minutes. (b) Yi has also been given a 14-day schedule. She runs for $(A-13)$ minutes on day 1, and increases her time by $(2d-1)$ minutes each day. Given that Yi and Xin run for the same length of time on day 14, find the value of $d$.
2. Given that $\\sum_{r=1}^{k} 2 \\times 3^r = 59046$: (a) Show that $k = \\frac{\\log(19683)}{\\log(3)}$. (b) Hence, find the value of $k$.
3. A sequence is defined by $x_1 = 1$ and $x_{n+1} = (x_n)^2 - kx_n$ for $n \\geq 1$, where $k$ is a constant. (a) Find an expression for $x_2$ in terms of $k$. (b) Show that $x_3 = 1 - 3k + 2k^2$. (c) Given that $x_3 = 1$, find the possible values of $k$.
`;

export const A21_03_MODULE: Module = {
  id: "A21-03",
  title: "Sequences and Series",
  type: "Pure Mathematics",
  overview: "Formalise pattern recognition into sequences and series. This topic provides the mathematical engine behind discrete, step-by-step changes, exploring arithmetic and geometric models, and infinite sums.",
  learningOutcomes: [
    { id: "A21-SS-LO001", text: "Work with sequences, including $n$th term and $x_{n+1}=f(x_n)$" },
    { id: "A21-SS-LO002", text: "Behaviour of sequences: convergence, divergence, oscillation" },
    { id: "A21-SS-LO003", text: "Sigma notation for sums of series" },
    { id: "A21-SS-LO004", text: "Arithmetic sequences and series, formulae for $n$th term and sum" },
    { id: "A21-SS-LO005", text: "Geometric sequences and series, formulae for $n$th term and sum" },
    { id: "A21-SS-LO006", text: "Prove the formula for the sum of the first $n$ terms of an AP or GP" },
    { id: "A21-SS-LO007", text: "Find the sum to infinity of a convergent GP, including $|r|<1$" },
    { id: "A21-SS-LO009", text: "Use sequences and series in modelling" }
  ],
  lessons: [
    {
      id: "A21-03-Lesson",
      title: "Sequences and Series",
      visualId: "A21-Sequences",
      type: "Pure Mathematics",
      content: LESSON_CONTENT,
      loIds: ["A21-SS-LO001", "A21-SS-LO002", "A21-SS-LO003", "A21-SS-LO004", "A21-SS-LO005", "A21-SS-LO006", "A21-SS-LO007", "A21-SS-LO009"]
    }
  ]
};
