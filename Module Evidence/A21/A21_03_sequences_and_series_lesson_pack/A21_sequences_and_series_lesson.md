```markdown
# A21_sequences_and_series_lesson.md PART 1A

## 1. Lesson Title
**Topic:** Sequences and Series  
**Unit:** A2 1 Pure Mathematics (A21)  
**Source Evidence:** Transcript (`03 Sequences and Series.md`), Dr Frost PowerPoint (`Sequences and Series.pdf`), Annotated Video Screenshots (`Sequences and Series - remote teaching.pdf`)  
**Date Generated:** 2026-05-30  
**Relevant LO IDs:** A21-SS-LO001, A21-SS-LO002, A21-SS-LO003, A21-SS-LO004, A21-SS-LO005, A21-SS-LO006, A21-SS-LO007, A21-SS-LO009  
**Suggested Tags:** `#A21`, `#SequencesSeries`, `#ArithmeticSeries`, `#GeometricSeries`, `#SigmaNotation`, `#RecurrenceRelations`, `#Proof`, `#Modelling`

## 2. Evidence Map

| Evidence Type | Filename | Role in this lesson | Pages/Slides/Images Used | Notes on Quality or Uncertainty |
|---|---|---|---|---|
| Specification Map | `CCEA_GCE_Mathematics_Specification_Map copy.md` | Curriculum Authority | A21 Sequences and Series section | Clear mapping to A21 LOs. |
| Transcript | `03 Sequences and Series.md` | Primary Teaching Text | Full document | Excellent detail on explanations, proofs, and worked examples. |
| PowerPoint | `Sequences and Series.pdf` | Visual Sequencing | Slides 1-54 | Clear structure, contains formal proofs and exam questions. |
| PNG/PDF Images | `Sequences and Series - remote teaching.pdf` | Visual Annotations | Pages 1-142 | Shows teacher's handwritten annotations, calculator usage, and step-by-step working. |

## 3. Specification Alignment

| LO ID | CCEA Specification Point | Elaboration Guidance | Covered? | Where it appears | Gap or Action Needed | Suggested Visual/Widget |
|---|---|---|---|---|---|---|
| A21-SS-LO001 | Work with sequences, including $n$th term and $x_{n+1}=f(x_n)$ | None | Yes | Core Theory, Worked Examples | None | Cobweb diagram / Iteration table |
| A21-SS-LO002 | Behaviour of sequences: convergence, divergence, oscillation | None | Yes | Core Theory | None | Convergence graph |
| A21-SS-LO003 | Sigma notation for sums of series | None | Yes | Core Theory, Worked Examples | None | Sigma notation unpacking visual |
| A21-SS-LO004 | Arithmetic sequences and series, formulae for $n$th term and sum | None | Yes | Core Theory, Worked Examples | None | Arithmetic sequence table |
| A21-SS-LO005 | Geometric sequences and series, formulae for $n$th term and sum | None | Yes | Core Theory, Worked Examples | None | Geometric ratio visual |
| A21-SS-LO006 | Prove the formula for the sum of the first $n$ terms of an AP or GP | None | Yes | Core Theory | None | Pairwise sum diagram (TikZ) |
| A21-SS-LO007 | Find the sum to infinity of a convergent GP, including $|r|<1$ | None | Yes | Core Theory, Worked Examples | None | Infinite sum visual |
| A21-SS-LO008 | Binomial expansion of $(a+bx)^n$ for rational $n$ | None | No | N/A | Belongs in a separate Binomial Expansion lesson. | N/A |
| A21-SS-LO009 | Use sequences and series in modelling | None | Yes | Core Theory, Worked Examples | None | Spreadsheet model / Context graph |

## 4. Learning Objectives
By the end of this lesson, you should be able to:
* Identify and use the formulae for the $n$th term and the sum of the first $n$ terms for both arithmetic and geometric series.
* Prove the sum formulae for both arithmetic and geometric series.
* Calculate the sum to infinity of a convergent geometric series and understand the condition $|r| < 1$.
* Interpret and evaluate sums written using Sigma ($\Sigma$) notation.
* Generate terms of a sequence using a recurrence relation (term-to-term rule).
* Classify sequences as strictly increasing, strictly decreasing, or periodic (including stating the order).
* Apply sequences and series to model real-world situations like financial profits, compound interest, and physical extraction.

## 5. Compact Prerequisite Recap
To succeed in this lesson, you need to be confident with:
* **GCSE Sequences:** Finding the $n$th term of linear sequences.
* **Simultaneous Equations:** Solving linear simultaneous equations (used heavily to find $a$ and $d$ or $a$ and $r$).
* **Indices and Logarithms (AS1/A21):** Using the laws of indices and solving equations where the unknown is a power (e.g., using $\ln$ or $\log$ to solve $r^n < x$).
* **Inequalities (AS1):** Remembering to flip the inequality sign when dividing by a negative number (crucial when dealing with $\ln(r)$ where $0 < r < 1$).

## 6. Big Picture Explanation
In GCSE, you learned how to spot patterns in numbers and find the $n$th term. In A Level Mathematics, we formalise this into **Sequences and Series**. A sequence is a list of numbers; a series is what you get when you add that list together. 

This topic is incredibly powerful for modelling the real world. Whether it's a business projecting its profits increasing by a fixed amount each year (an *arithmetic* model), a bank calculating compound interest (a *geometric* model), or a computer algorithm repeating a process to hone in on an answer (a *recurrence relation*), sequences are the mathematical engine behind discrete, step-by-step changes. We will also explore the mind-bending concept of adding together an *infinite* list of numbers and still getting a finite, exact answer.

## 7. Key Definitions and Notation
* **Sequence:** A list of numbers following a specific rule (e.g., $2, 5, 8, 11$).
* **Series:** The sum of the terms in a sequence (e.g., $2 + 5 + 8 + 11$).
* **Term ($u_n$):** A specific number in the sequence. $u_3$ is the 3rd term. $n$ is the position.
* **Arithmetic Sequence:** A sequence where the difference between consecutive terms is constant.
* **Geometric Sequence:** A sequence where the ratio between consecutive terms is constant (each term is multiplied by the same number).
* **Common Difference ($d$):** The amount added to each term in an arithmetic sequence.
* **Common Ratio ($r$):** The amount each term is multiplied by in a geometric sequence.
* **First Term ($a$):** The starting number of a sequence ($u_1$).
* **Recurrence Relation:** A rule that defines the next term in a sequence based on previous terms (e.g., $u_{n+1} = 2u_n + 4$).
* **Sigma Notation ($\Sigma$):** A compact way to write a series. The Greek letter Sigma means "sum of".
* **Convergent:** A sequence or series that approaches a specific, finite limit as $n$ approaches infinity.
* **Divergent:** A sequence or series that does not approach a finite limit (e.g., it grows towards infinity or oscillates wildly).
* **Periodic:** A sequence whose terms repeat in a cycle. The **order** is how many terms are in the repeating cycle.

## 8. Core Theory

### 8.1 Arithmetic Sequences and Series

An **arithmetic sequence** has a common difference, $d$, between consecutive terms. 
If the first term is $a$, the sequence looks like this:
$a, \quad a+d, \quad a+2d, \quad a+3d, \quad \dots$

**The $n$th term formula:**
$$u_n = a + (n - 1)d$$
*Why $n-1$?* Because to get to the 2nd term, you add $d$ once. To get to the 3rd term, you add $d$ twice. To get to the $n$th term, you add $d$ exactly $(n-1)$ times.

**The Sum of the first $n$ terms ($S_n$):**
There are two formulae you must memorise. 
Formula 1 (Standard):
$$S_n = \frac{n}{2} \left( 2a + (n - 1)d \right)$$

Formula 2 (First and Last):
$$S_n = \frac{n}{2} (a + L)$$
*(Where $L$ is the last term, $L = a + (n-1)d$)*

[VISUAL PLACEHOLDER: A21SequencesAndSeriesTikZ-001 | Source: PowerPoint slide 11 | Insert from A21_sequences_and_series_tikz.md | Purpose: Visual proof of the arithmetic sum formula showing pairwise addition]

**Proof of the Arithmetic Sum Formula (Required for Exam):**
You must be able to reproduce this proof.
1. Write out the sum forwards:
   $S_n = a + (a+d) + (a+2d) + \dots + (a + (n-2)d) + (a + (n-1)d)$
2. Write out the sum backwards underneath it:
   $S_n = (a + (n-1)d) + (a + (n-2)d) + \dots + (a+d) + a$
3. Add the two equations together vertically. Every pair adds up to $2a + (n-1)d$.
   $2S_n = [2a + (n-1)d] + [2a + (n-1)d] + \dots + [2a + (n-1)d]$
4. Because there are $n$ terms, there are $n$ lots of this bracket:
   $2S_n = n(2a + (n-1)d)$
5. Divide by 2:
   $$S_n = \frac{n}{2}(2a + (n-1)d)$$

### 8.2 Geometric Sequences and Series

A **geometric sequence** has a common ratio, $r$, between consecutive terms.
If the first term is $a$, the sequence looks like this:
$a, \quad ar, \quad ar^2, \quad ar^3, \quad \dots$

**The $n$th term formula:**
$$u_n = ar^{n-1}$$
*Warning:* The power is $n-1$, not $n$. The $r$ is raised to the power, not the $a$.

**The Sum of the first $n$ terms ($S_n$):**
$$S_n = \frac{a(1 - r^n)}{1 - r}$$
*(Note: You can also write this as $S_n = \frac{a(r^n - 1)}{r - 1}$ by multiplying top and bottom by $-1$. Both are valid, but the first is usually easier when $r < 1$.)*

**Proof of the Geometric Sum Formula (Required for Exam):**
1. Write out the sum:
   $S_n = a + ar + ar^2 + \dots + ar^{n-2} + ar^{n-1}$
2. Multiply the entire equation by $r$:
   $rS_n = ar + ar^2 + ar^3 + \dots + ar^{n-1} + ar^n$
3. Subtract the second equation from the first ($S_n - rS_n$). Notice how almost all the terms cancel out diagonally!
   $S_n - rS_n = a - ar^n$
4. Factorise both sides:
   $S_n(1 - r) = a(1 - r^n)$
5. Divide by $(1 - r)$:
   $$S_n = \frac{a(1 - r^n)}{1 - r}$$

### 8.3 Sum to Infinity

If a geometric series has a common ratio between $-1$ and $1$ (written as $|r| < 1$), the terms get smaller and smaller as $n$ increases. 
Because $r$ is a fraction, as $n \to \infty$, the term $r^n \to 0$.

If we substitute $r^n = 0$ into our sum formula:
$S_\infty = \frac{a(1 - 0)}{1 - r}$

**Sum to Infinity Formula:**
$$S_\infty = \frac{a}{1 - r}$$
*Condition:* This only works if $|r| < 1$. If $|r| \geq 1$, the series is **divergent** and has no finite sum.

[VISUAL PLACEHOLDER: A21SequencesAndSeriesSVG-001 | Source: PowerPoint slide 31 | Insert from A21_sequences_and_series_svg.md | Purpose: Visual representation of an infinite geometric series converging to a finite area]

### 8.4 Sigma Notation ($\Sigma$)

Sigma notation is a compact way of writing a series.
$$ \sum_{r=1}^{5} (2r + 1) $$
* **Bottom number ($r=1$):** The starting value to substitute.
* **Top number ($5$):** The final value to substitute.
* **Expression ($2r+1$):** The formula for the terms.

To evaluate this, substitute $r=1, 2, 3, 4, 5$ into the expression and add the results:
$(2(1)+1) + (2(2)+1) + (2(3)+1) + (2(4)+1) + (2(5)+1)$
$= 3 + 5 + 7 + 9 + 11 = 35$

*Exam Tip:* If the expression is linear (e.g., $3n - 4$), it generates an **arithmetic series**. If the expression has the variable in the power (e.g., $5 \times 3^k$), it generates a **geometric series**. You can extract $a$, $d$ (or $r$), and $n$, and use your $S_n$ formulae rather than calculating every term manually.

*Warning on counting terms:* If a sum goes from $k=5$ to $k=15$, there are NOT 10 terms. There are $15 - 5 + 1 = 11$ terms. Always subtract and add 1.

[INTERACTIVE PLACEHOLDER: A21SequencesAndSeriesWidget-001 | Source: AI-proposed teaching enhancement, not present in supplied lesson evidence | Insert from A21_sequences_and_series_widgets.md | Purpose: Interactive Sigma notation unpacker to help students see how the index generates terms]

### 8.5 Recurrence Relations

A recurrence relation defines the *next* term based on the *previous* term(s).
Example: $u_{n+1} = 2u_n + 4$, where $u_1 = 3$.
* $u_1 = 3$
* $u_2 = 2(3) + 4 = 10$
* $u_3 = 2(10) + 4 = 24$

*Exam Tip:* Recurrence relations are rarely arithmetic or geometric. You cannot use the $u_n$ or $S_n$ formulae. If an exam asks for a sum, you will usually have to write out the first few terms and look for a repeating pattern (a periodic sequence).

### 8.6 Sequence Behaviour

* **Strictly Increasing:** Every term is larger than the previous one ($u_{n+1} > u_n$ for all $n$).
* **Strictly Decreasing:** Every term is smaller than the previous one ($u_{n+1} < u_n$ for all $n$).
* **Periodic:** The terms repeat in a cycle. The **order** is the number of terms in one full cycle.
  * Example: $0, 1, 0, -1, 0, 1, 0, -1 \dots$ is periodic with order 4.

### 8.7 Modelling with Sequences and Series

Sequences are used to model real-world scenarios:
* **Arithmetic:** Adding a fixed amount (e.g., a runner increasing their distance by 400m every day).
* **Geometric:** Multiplying by a fixed amount (e.g., a bank account increasing by 5% per year $\rightarrow$ multiply by $1.05$).

*Limitations of models:* You must be able to critique models. For example, a business profit cannot increase by exactly £5000 every single year forever. A piece of paper cannot be folded in half 20 times.
```

```markdown
## 9. Visual Asset Integration

[VISUAL PLACEHOLDER: A21SequencesAndSeriesTikZ-001 | Source: PowerPoint slide 11 | Insert from A21_sequences_and_series_tikz.md | Purpose: Visual proof of the arithmetic sum formula showing pairwise addition]
* **Explanation:** This diagram illustrates the "pairing" trick used to prove the arithmetic sum formula. By writing the sequence forwards and backwards, you can see that every vertical pair adds up to the exact same value ($2a + (n-1)d$). This is a common exam proof and the visual makes the algebraic steps intuitive.

[VISUAL PLACEHOLDER: A21SequencesAndSeriesSVG-001 | Source: PowerPoint slide 31 | Insert from A21_sequences_and_series_svg.md | Purpose: Visual representation of an infinite geometric series converging to a finite area]
* **Explanation:** This visual shows a 1x1 square, with half added, then a quarter, then an eighth, and so on. It demonstrates geometrically why an infinite sum (where $|r| < 1$) does not grow to infinity, but instead converges to a strict limit (in this case, 2).

## 10. Interactive Learning Widgets

[INTERACTIVE PLACEHOLDER: A21SequencesAndSeriesWidget-001 | Source: AI-proposed teaching enhancement, not present in supplied lesson evidence | Insert from A21_sequences_and_series_widgets.md | Purpose: Interactive Sigma notation unpacker to help students see how the index generates terms]
* **What it lets the learner change:** The user can input a starting value ($k$), an ending value ($n$), and a simple linear or exponential expression.
* **What updates:** The widget dynamically generates the list of terms being added, showing the substitution step for each term, and calculates the final sum.
* **What the learner should notice:** The learner should notice that the number of terms is always $n - k + 1$, not just $n - k$. They should also see how a linear expression creates an arithmetic series, while an exponential expression creates a geometric series.
* **Exam connection:** Sigma notation questions often trick students on the number of terms. This widget builds intuition for manually unpacking the first few terms, which is the recommended first step in any exam question involving $\Sigma$.

## 11. Worked Examples

### Example 1: Finding the first negative term (Arithmetic)
**Source:** Transcript, Example 1
**Question:** The $n$th term of an arithmetic sequence is $u_n = 55 - 2n$. Find the first term in the sequence that is negative.
**Method:**
1. Set the $n$th term expression to be less than zero.
   $$55 - 2n < 0$$
2. Solve the inequality for $n$.
   $$55 < 2n$$
   $$27.5 < n$$
3. Since $n$ must be a whole number (position in the sequence), the first integer greater than 27.5 is 28.
   $$n = 28$$
4. The question asks for the *term*, not the position. Substitute $n=28$ back into the formula.
   $$u_{28} = 55 - 2(28) = 55 - 56 = -1$$
**Commentary:** Always read the question carefully. Finding $n=28$ is only half the battle; you must evaluate the term.

### Example 2: Finding $a$ and $d$ using simultaneous equations
**Source:** Transcript, Example 3
**Question:** A sequence is generated by the formula $u_n = an + b$. Given that $u_3 = 5$ and $u_8 = 20$, find the values of the constants $a$ and $b$.
**Method:**
1. Recognise that a linear $n$th term means this is an arithmetic sequence. Let's use standard notation where the first term is $A$ and common difference is $D$.
   $$u_3 = A + 2D = 5$$
   $$u_8 = A + 7D = 20$$
2. Subtract the first equation from the second to eliminate $A$.
   $$(A + 7D) - (A + 2D) = 20 - 5$$
   $$5D = 15 \implies D = 3$$
3. Substitute $D=3$ back into the first equation.
   $$A + 2(3) = 5 \implies A = -1$$
4. Write the general formula $u_n = A + (n-1)D$.
   $$u_n = -1 + (n-1)3 = -1 + 3n - 3 = 3n - 4$$
5. Match this to the requested format $u_n = an + b$.
   $$a = 3, \quad b = -4$$
**Commentary:** The question used $a$ and $b$ as constants in a linear equation, which can be confusing since $a$ usually means the first term. Using capital $A$ and $D$ temporarily prevents algebraic mix-ups.

### Example 3: Algebraic terms in an arithmetic sequence
**Source:** Transcript, Example 4
**Question:** For which values of $x$ would the expressions $-8$, $x^2$, and $17x$ form the first three terms of an arithmetic sequence?
**Method:**
1. In an arithmetic sequence, the difference between consecutive terms is constant.
   $$u_2 - u_1 = u_3 - u_2$$
2. Substitute the expressions.
   $$x^2 - (-8) = 17x - x^2$$
3. Simplify and form a quadratic equation.
   $$x^2 + 8 = 17x - x^2$$
   $$2x^2 - 17x + 8 = 0$$
4. Factorise or use the quadratic formula.
   $$(2x - 1)(x - 8) = 0$$
   $$x = 0.5 \quad \text{or} \quad x = 8$$
**Commentary:** This is a classic A Level setup. By setting up an equation based on the *definition* of the sequence (common difference), you turn a sequence problem into a standard algebra problem.

### Example 4: Finding $a$ and $r$ in a geometric sequence
**Source:** Transcript, Example 9
**Question:** The second term of a geometric sequence is 4 and the fourth term is 8. The common ratio is positive. Find the exact values of the common ratio, the first term, and the 10th term.
**Method:**
1. Write out the equations for the given terms.
   $$u_2 = ar = 4$$
   $$u_4 = ar^3 = 8$$
2. Divide the larger power equation by the smaller power equation to eliminate $a$.
   $$\frac{ar^3}{ar} = \frac{8}{4}$$
   $$r^2 = 2$$
3. Solve for $r$. Since the question states $r$ is positive, ignore the negative root.
   $$r = \sqrt{2}$$
4. Substitute $r$ back into the first equation to find $a$.
   $$a(\sqrt{2}) = 4 \implies a = \frac{4}{\sqrt{2}} = 2\sqrt{2}$$
5. Find the 10th term using $u_{10} = ar^9$.
   $$u_{10} = (2\sqrt{2})(\sqrt{2})^9 = 2\sqrt{2} \times 16\sqrt{2} = 32 \times 2 = 64$$
**Commentary:** Dividing equations is the standard technique for geometric sequences, just as subtracting equations is standard for arithmetic sequences.

### Example 5: Inequalities and Geometric Series
**Source:** Transcript, Example 16
**Question:** The second and third terms of a geometric sequence are 192 and 144 respectively. What is the smallest value of $n$ for which the sum of the first $n$ terms exceeds 1000?
**Method:**
1. Find $r$ and $a$.
   $$r = \frac{u_3}{u_2} = \frac{144}{192} = 0.75$$
   $$ar = 192 \implies a(0.75) = 192 \implies a = 256$$
2. Set up the sum formula inequality.
   $$S_n > 1000$$
   $$\frac{256(1 - 0.75^n)}{1 - 0.75} > 1000$$
3. Simplify the denominator and isolate the $n$ term.
   $$\frac{256(1 - 0.75^n)}{0.25} > 1000$$
   $$1024(1 - 0.75^n) > 1000$$
   $$1 - 0.75^n > \frac{1000}{1024}$$
   $$1 - \frac{1000}{1024} > 0.75^n$$
   $$\frac{24}{1024} > 0.75^n \implies \frac{3}{128} > 0.75^n$$
4. Take natural logarithms ($\ln$) of both sides.
   $$\ln\left(\frac{3}{128}\right) > \ln(0.75^n)$$
   $$\ln\left(\frac{3}{128}\right) > n \ln(0.75)$$
5. Divide by $\ln(0.75)$. **Crucial step:** Because $0.75 < 1$, $\ln(0.75)$ is a *negative number*. When dividing an inequality by a negative number, the inequality sign must flip.
   $$n > \frac{\ln(3/128)}{\ln(0.75)}$$
   $$n > 13.04...$$
6. Since $n$ must be an integer, the smallest value is $n = 14$.
**Commentary:** Forgetting to flip the inequality sign when dividing by $\ln(r)$ (where $r<1$) is one of the most common dropped marks in A Level Mathematics. If you get a result like $n < 13.04$ for an "exceeds" question, you know you've made a sign error.

### Example 6: Evaluating Sigma Notation
**Source:** Transcript, Example 22
**Question:** Evaluate $\sum_{k=5}^{15} (10 - 2k)$
**Method:**
1. Identify the type of series. The expression $10 - 2k$ is linear, so this is an arithmetic series.
2. Find the first term ($a$) by substituting the bottom limit ($k=5$).
   $$a = 10 - 2(5) = 0$$
3. Find the last term ($L$) by substituting the top limit ($k=15$).
   $$L = 10 - 2(15) = -20$$
4. Calculate the number of terms ($n$).
   $$n = \text{Top} - \text{Bottom} + 1 = 15 - 5 + 1 = 11$$
5. Use the arithmetic sum formula $S_n = \frac{n}{2}(a + L)$.
   $$S_{11} = \frac{11}{2}(0 + (-20)) = 5.5 \times -20 = -110$$
**Commentary:** Always write out the first few terms if you are unsure. It immediately reveals whether the sequence is arithmetic or geometric and prevents errors with the number of terms.

### Example 7: Periodic Recurrence Relations
**Source:** Transcript, Example 27
**Question:** A sequence is defined by $a_1 = 3$ and $a_{n+1} = \frac{a_n - 3}{a_n - 2}$. Find $\sum_{r=1}^{100} a_r$.
**Method:**
1. Generate the first few terms to look for a pattern.
   $$a_1 = 3$$
   $$a_2 = \frac{3 - 3}{3 - 2} = \frac{0}{1} = 0$$
   $$a_3 = \frac{0 - 3}{0 - 2} = \frac{-3}{-2} = 1.5$$
   $$a_4 = \frac{1.5 - 3}{1.5 - 2} = \frac{-1.5}{-0.5} = 3$$
2. Notice that $a_4 = a_1$. The sequence is periodic with order 3. The repeating block is $(3, 0, 1.5)$.
3. Calculate the sum of one full repeating block.
   $$\text{Block Sum} = 3 + 0 + 1.5 = 4.5$$
4. Determine how many full blocks fit into 100 terms.
   $$100 \div 3 = 33 \text{ remainder } 1$$
   There are 33 full blocks, plus 1 extra term.
5. Calculate the total sum.
   $$\text{Total} = 33 \times (\text{Block Sum}) + \text{the 1st term of the next block}$$
   $$\text{Total} = 33 \times 4.5 + 3 = 148.5 + 3 = 151.5$$
**Commentary:** Recurrence relations in exams are almost always periodic or eventually constant. Don't panic when you see a complex fraction; just patiently calculate the first 4 or 5 terms.

## 12. Common Mistakes and Exam Traps

* **Confusing $u_n$ and $S_n$:** Read the question carefully. Are they asking for the 10th term ($u_{10}$) or the sum of the first 10 terms ($S_{10}$)?
* **The Power in Geometric Sequences:** The $n$th term is $ar^{n-1}$, not $ar^n$. The 5th term has a power of 4.
* **Counting Terms in Sigma Notation:** $\sum_{r=10}^{20}$ has $20 - 10 + 1 = 11$ terms, not 10. Always add 1 after subtracting the limits.
* **Dividing by Negative Logarithms:** If $0 < r < 1$, then $\ln(r)$ is negative. If you divide an inequality by $\ln(r)$, you **must** flip the inequality sign (e.g., $<$ becomes $>$).
* **Assuming a Sequence is Arithmetic/Geometric:** If a sequence is defined by a recurrence relation like $u_{n+1} = 2u_n + 3$, it is neither arithmetic nor geometric. You cannot use the standard $S_n$ formulae. You must generate terms manually.
* **Rounding Too Early:** When dealing with geometric series (especially compound interest or exponential growth), keep exact values or long decimals in your calculator until the final step.

## 13. Practice Questions

**Question 1 (Arithmetic Modelling):**
Xin has been given a 14-day training schedule. She will run for $A$ minutes on day 1. She will increase her running time by $(d+1)$ minutes each day.
(a) Show that on day 14, Xin will run for $(A + 13d + 13)$ minutes.
Yi has also been given a 14-day schedule. She runs for $(A-13)$ minutes on day 1, and increases her time by $(2d-1)$ minutes each day.
(b) Given that Yi and Xin run for the same length of time on day 14, find the value of $d$.

**Question 2 (Geometric Series & Logs):**
Given that $\sum_{r=1}^{k} 2 \times 3^r = 59046$:
(a) Show that $k = \frac{\log(19683)}{\log(3)}$.
(b) Hence, find the value of $k$.

**Question 3 (Recurrence Relations):**
A sequence is defined by $x_1 = 1$ and $x_{n+1} = (x_n)^2 - kx_n$ for $n \geq 1$, where $k$ is a constant.
(a) Find an expression for $x_2$ in terms of $k$.
(b) Show that $x_3 = 1 - 3k + 2k^2$.
(c) Given that $x_3 = 1$, find the possible values of $k$.

## 14. Worked Solutions

**Solution 1:**
(a) This is an arithmetic sequence. First term $a = A$. Common difference $= (d+1)$.
We want the 14th term ($u_{14}$), not the sum.
$u_{14} = a + 13 \times (\text{difference})$
$u_{14} = A + 13(d+1) = A + 13d + 13$. (Shown)

(b) For Yi: First term $a = A-13$. Common difference $= (2d-1)$.
$u_{14} = (A-13) + 13(2d-1)$
$u_{14} = A - 13 + 26d - 13 = A + 26d - 26$.
Equate Xin's day 14 to Yi's day 14:
$A + 13d + 13 = A + 26d - 26$
Subtract $A$ from both sides:
$13d + 13 = 26d - 26$
$39 = 13d \implies d = 3$.

**Solution 2:**
(a) Write out the first few terms: $r=1 \implies 6$, $r=2 \implies 18$, $r=3 \implies 54$.
This is a geometric series with $a=6$, $r=3$, and $n=k$.
$S_k = \frac{a(1-r^k)}{1-r} = 59046$
$\frac{6(1-3^k)}{1-3} = 59046$
$\frac{6(1-3^k)}{-2} = 59046$
$-3(1-3^k) = 59046$
$1 - 3^k = -19682$
$3^k = 19683$
Take logs of both sides:
$\log(3^k) = \log(19683)$
$k \log(3) = \log(19683)$
$k = \frac{\log(19683)}{\log(3)}$. (Shown)

(b) Type into calculator: $k = 9$.

**Solution 3:**
(a) $x_2 = (x_1)^2 - k(x_1) = (1)^2 - k(1) = 1 - k$.

(b) $x_3 = (x_2)^2 - k(x_2)$
$x_3 = (1-k)^2 - k(1-k)$
$x_3 = (1 - 2k + k^2) - k + k^2$
$x_3 = 1 - 3k + 2k^2$. (Shown)

(c) Set $x_3 = 1$:
$1 - 3k + 2k^2 = 1$
$2k^2 - 3k = 0$
$k(2k - 3) = 0$
$k = 0$ or $k = 1.5$.

## 15. Exam Technique Notes

* **Explicitly state your variables:** At the start of any series question, write down $a = ...$, $d = ...$ (or $r = ...$), and $n = ...$. This prevents you from substituting the wrong number into the formula under exam pressure.
* **Use your calculator's $\Sigma$ button:** Modern scientific calculators (like the Casio ClassWiz) have a summation button. Use it to check your algebraic answers for Sigma notation questions.
* **"Show that" questions:** When asked to "show that" a sum equals a certain value, you cannot just write the answer from your calculator. You must write out the formula, substitute the values, and show the intermediate algebraic steps.
* **Check for negative logarithms:** Always pause when taking logs of an inequality. Ask yourself: "Is the number inside the log less than 1?" If yes, flip the inequality sign.

## 16. Syllabus Gap Check

* **A21-SS-LO001 (Sequences & Recurrence):** Fully covered.
* **A21-SS-LO002 (Convergence/Divergence):** Fully covered.
* **A21-SS-LO003 (Sigma Notation):** Fully covered.
* **A21-SS-LO004 (Arithmetic Series):** Fully covered.
* **A21-SS-LO005 (Geometric Series):** Fully covered.
* **A21-SS-LO006 (Proofs of sum formulae):** Fully covered.
* **A21-SS-LO007 (Sum to infinity):** Fully covered.
* **A21-SS-LO008 (Binomial Expansion):** *Missing.* This is a large topic in its own right and has been deliberately excluded from this core sequences lesson to be covered in a dedicated Binomial Expansion lesson.
* **A21-SS-LO009 (Modelling):** Fully covered.

## 17. Recommended Enhancements Not in the Evidence

* **Sigma Notation Widget:** Added to help students visualise how the index variable increments and generates terms. This directly addresses a common conceptual hurdle where students struggle to translate the abstract $\Sigma$ symbol into a concrete list of numbers.

## 18. Supplementary Sources Used
No external sources were required. All mathematical content, examples, and proofs were extracted directly from the provided transcript and slide evidence.

## 19. Final Student Checklist

- [ ] I can find the $n$th term and sum of an arithmetic series.
- [ ] I can find the $n$th term and sum of a geometric series.
- [ ] I can reproduce the proofs for both the arithmetic and geometric sum formulae.
- [ ] I know when to use the sum to infinity formula and can state the condition $|r| < 1$.
- [ ] I can evaluate a series written in Sigma notation.
- [ ] I can generate terms from a recurrence relation.
- [ ] I can identify if a sequence is increasing, decreasing, or periodic.
- [ ] I remember to flip the inequality sign when dividing by $\ln(r)$ if $r < 1$.

```

## Progress Manifest  

Completed: 
- [x] File 1: `A21_sequences_and_series_lesson.md` sections completed so far: 1-19 (Full file complete)
- [ ] File 2: `A21_sequences_and_series_mermaid.md` 
- [ ] File 3: `A21_sequences_and_series_svg.md` 
- [ ] File 4: `A21_sequences_and_series_tikz.md` 
- [ ] File 5: `A21_sequences_and_series_widgets.md` 
- [ ] ZIP pack or ZIP instructions  

Next: 
- Continue from `A21_sequences_and_series_mermaid.md`. 