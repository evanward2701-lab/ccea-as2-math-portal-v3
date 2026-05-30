import { Module } from '@/core/types';

const LESSON_CONTENT = `
# 1. Lesson Title
**Topic:** Proofs and Partial Fractions  
**Unit:** A21 (A2 1 Pure Mathematics)  

## 2. Specification Alignment

| LO ID | CCEA Specification Point |
|---|---|
| Overarching | Proof by contradiction |
| A21-AF-LO001 | Simplify rational expressions, including by factorising and cancelling, and algebraic division |
| A21-AF-LO008 | Decompose rational functions into partial fractions, with denominators not more complicated than squared linear terms |

## 3. Learning Objectives
By the end of this lesson, you should be able to:
1. Construct a mathematical argument using **proof by contradiction**, including proving the irrationality of $\\sqrt{2}$ and the infinity of primes.
2. Add, subtract, multiply, and divide **algebraic fractions**, correctly factorising to cancel common factors.
3. Decompose proper rational functions into **partial fractions** with distinct linear factors.
4. Decompose rational functions with **repeated linear factors** in the denominator.
5. Identify **improper algebraic fractions** and decompose them using algebraic division or a single identity.

## 4. Compact Prerequisite Recap
To succeed in this lesson, you need to be confident with the following prior knowledge:
*   **GCSE / AS1 Algebra:** Expanding brackets, factorising quadratics, and solving simultaneous equations.
*   **AS1 Algebraic Division:** Dividing a polynomial by a linear expression (e.g., using algebraic long division).
*   **GCSE Fractions:** Adding and subtracting numerical fractions by finding a common denominator; multiplying and dividing fractions.
*   **AS1 Proof:** Proof by deduction and exhaustion.

## 5. Big Picture Explanation
This lesson covers two distinct but highly important algebraic tools for A2 Mathematics: **Proof by Contradiction** and **Partial Fractions**.

**Proof by Contradiction** is a powerful logical technique. Instead of trying to prove a statement is true directly (which can sometimes be incredibly difficult or impossible), we pretend the *exact opposite* is true. We then follow the mathematical consequences of that fake reality until something breaks—a contradiction. Because the opposite reality leads to nonsense, our original statement must have been true all along.

**Partial Fractions** is the reverse of adding algebraic fractions. In GCSE and AS1, you learned how to take $\\frac{1}{x+1} + \\frac{2}{x-3}$ and combine them into a single fraction. In A2, we need to run that process backwards. Why? Because later in the course, you will need to integrate complex fractions or expand them using the binomial theorem. You cannot easily integrate $\\frac{3x-1}{(x+1)(x-3)}$, but you *can* easily integrate its split form. Partial fractions is the algebraic "un-merging" tool that makes advanced calculus possible.

## 6. Key Definitions and Notation
*   **Rational Number ($\\mathbb{Q}$):** A number that can be expressed as a fraction $\\frac{a}{b}$, where $a$ and $b$ are integers and $b \\neq 0$. In its simplest form, $a$ and $b$ have no common factors other than $1$.
*   **Irrational Number:** A real number that cannot be expressed as a simple fraction (e.g., $\\sqrt{2}, \\pi, e$).
*   **Integers ($\\mathbb{Z}$):** Whole numbers, both positive and negative (e.g., $-3, 0, 4$).
*   **Natural Numbers ($\\mathbb{N}$):** Positive integers, often called counting numbers (e.g., $1, 2, 3$).
*   **Negation:** The exact logical opposite of a statement. If a statement is "If A, then B", the negation is "A is true, but B is false" (A and not B).
*   **Identity ($\\equiv$):** A relationship that is true for *all* values of the variable, not just specific solutions.
*   **Proper Algebraic Fraction:** A fraction where the degree (highest power) of the numerator is *strictly less* than the degree of the denominator.
*   **Improper Algebraic Fraction:** A fraction where the degree of the numerator is *greater than or equal to* the degree of the denominator.

[VISUAL PLACEHOLDER: A21ProofsAndPartialFractionsTikZ001 | Number Sets Venn Diagram]

## 7. Core Theory

### 7.1 Proof by Contradiction
To prove a statement is true by contradiction, we follow a strict three-step structure:
1.  **Assume** that the statement is in fact **false** (assume the negation is true).
2.  **Prove** that this assumption leads to a mathematical **contradiction** (something that makes no sense, like an integer being a fraction, or an even number being odd).
3.  **Conclude** that because the assumption led to nonsense, we were wrong to assume the statement was false. Therefore, the original statement must be **true**.

[VISUAL PLACEHOLDER: A21ProofsAndPartialFractionsMMD001 | Flowchart for Proof by Contradiction]

#### Classic Proof 1: Proving $\\sqrt{2}$ is Irrational
**Question:** Prove by contradiction that $\\sqrt{2}$ is an irrational number.

**Step 1: The Assumption**
Assume, for contradiction, that $\\sqrt{2}$ is a rational number.
This means it can be written as a fraction in its simplest form:
$$\\sqrt{2} = \\frac{a}{b}$$
where $a$ and $b$ are integers, and they have **no common factors** other than $1$.

**Step 2: The Maths**
Square both sides to remove the square root:
$$2 = \\frac{a^2}{b^2}$$
Multiply by $b^2$:
$$2b^2 = a^2$$
Because $a^2$ is equal to $2$ multiplied by an integer ($b^2$), $a^2$ must be an **even** number.
If a square number is even, its square root must also be even. Therefore, **$a$ is even**.

Since $a$ is even, we can write it as $a = 2k$ (where $k$ is an integer).
Substitute $a = 2k$ back into our equation:
$$2b^2 = (2k)^2$$
$$2b^2 = 4k^2$$
Divide by 2:
$$b^2 = 2k^2$$
This tells us that $b^2$ is equal to $2$ multiplied by an integer ($k^2$). Therefore, $b^2$ is even, which means **$b$ is even**.

**Step 3: The Contradiction and Conclusion**
We have shown that both $a$ and $b$ are even numbers. This means they share a common factor of $2$.
However, our initial assumption stated that $\\frac{a}{b}$ was a fraction in its simplest form with *no common factors*.
This is a **contradiction**.
Therefore, our assumption was wrong, and $\\sqrt{2}$ must be irrational.

#### Classic Proof 2: Infinite Primes
**Question:** Prove by contradiction that there are infinitely many prime numbers.

**Step 1: The Assumption**
Assume, for contradiction, that there is a **finite** number of prime numbers.
Because the list is finite, we can list every single prime number that exists: $p_1, p_2, p_3, \\dots, p_n$.

**Step 2: The Maths**
Consider a new number, $N$, created by multiplying all the prime numbers together and adding 1:
$$N = (p_1 \\times p_2 \\times p_3 \\times \\dots \\times p_n) + 1$$
If we divide $N$ by $p_1$, the remainder is $1$.
If we divide $N$ by $p_2$, the remainder is $1$.
In fact, if we divide $N$ by *any* of the prime numbers in our complete list, the remainder will always be $1$.
Therefore, $N$ is not divisible by any of the prime numbers in our list.

**Step 3: The Contradiction and Conclusion**
This means either $N$ itself is a new prime number, or its prime factorisation contains prime numbers that were not in our original list.
This contradicts the assumption that our list $p_1, p_2, \\dots, p_n$ contained *all* the prime numbers.
Hence, there must be an infinite number of primes.

### 7.2 Algebraic Fractions

Before tackling partial fractions, we must be completely fluent in manipulating algebraic fractions. The rules are identical to numerical fractions.

#### Multiplying and Dividing
To multiply, multiply the numerators together and the denominators together.
To divide, multiply by the reciprocal of the second fraction (flip it).
**Crucial Step:** Always factorise fully *before* you multiply, so you can cancel common factors easily.

$$\\frac{x+1}{2} \\times \\frac{3}{x^2-1} = \\frac{x+1}{2} \\times \\frac{3}{(x+1)(x-1)}$$
Cancel the common factor of $(x+1)$:
$$= \\frac{3}{2(x-1)}$$

#### Adding and Subtracting
To add or subtract, you must find a **common denominator**.
Do not just blindly multiply the denominators together if they already share a factor. Factorise the denominators first to find the most efficient common denominator.

**Example:**
$$\\frac{3}{x+1} - \\frac{4x}{x^2-1}$$
Factorise the second denominator:
$$= \\frac{3}{x+1} - \\frac{4x}{(x+1)(x-1)}$$
The common denominator is $(x+1)(x-1)$. We only need to multiply the top and bottom of the first fraction by $(x-1)$:
$$= \\frac{3(x-1)}{(x+1)(x-1)} - \\frac{4x}{(x+1)(x-1)}$$
Combine the numerators (be careful with negative signs!):
$$= \\frac{3x - 3 - 4x}{(x+1)(x-1)} = \\frac{-x - 3}{(x+1)(x-1)}$$

#### ⚠️ The Ultimate Crime Against Mathematics: Illegal Cancelling
You can only cancel **factors** (things that are multiplying the whole numerator and the whole denominator). You **cannot** cancel terms that are being added or subtracted.

[VISUAL PLACEHOLDER: A21ProofsAndPartialFractionsSVG001 | Illegal vs Legal Cancelling]

**Illegal:** $\\frac{x^2 + y}{2y} \\rightarrow$ cancelling the $y$'s to get $\\frac{x^2}{2}$. This is completely wrong because $y$ is not a factor of the entire numerator.

### 7.3 Partial Fractions: Distinct Linear Factors
If the denominator of an algebraic fraction is a product of distinct linear terms, it can be split into the sum of 'partial fractions'.

**Rule:**
$$\\frac{px+q}{(x-a)(x-b)} \\equiv \\frac{A}{x-a} + \\frac{B}{x-b}$$

**Example:** Express $\\frac{6x-2}{(x-3)(x+1)}$ in partial fractions.

**Step 1: Set up the identity**
$$\\frac{6x-2}{(x-3)(x+1)} \\equiv \\frac{A}{x-3} + \\frac{B}{x+1}$$

**Step 2: Create a common denominator on the right**
$$\\frac{6x-2}{(x-3)(x+1)} \\equiv \\frac{A(x+1) + B(x-3)}{(x-3)(x+1)}$$

**Step 3: Equate the numerators**
$$6x - 2 \\equiv A(x+1) + B(x-3)$$

**Step 4: Find A and B**
Method 1: Substitution
Let $x = 3$:
$$6(3) - 2 = A(3+1) + B(3-3)$$
$$16 = 4A \\implies A = 4$$

Let $x = -1$:
$$6(-1) - 2 = A(-1+1) + B(-1-3)$$
$$-8 = -4B \\implies B = 2$$

**Step 5: Write the final answer**
$$\\frac{6x-2}{(x-3)(x+1)} \\equiv \\frac{4}{x-3} + \\frac{2}{x+1}$$

[INTERACTIVE PLACEHOLDER: A21ProofsAndPartialFractionsWidget001 | Partial Fractions Identity Grapher]

### 7.4 Partial Fractions: Repeated Linear Factors
For a repeated linear factor $(x+a)^2$, you must include a fraction for the linear term AND a fraction for the squared term.
$$\\frac{px^2+qx+r}{(x+a)^2(x+b)} \\equiv \\frac{A}{x+a} + \\frac{B}{(x+a)^2} + \\frac{C}{x+b}$$

**Example:** Split $\\frac{11x^2+14x+5}{(x+1)^2(2x+1)}$ into partial fractions.

**Step 1: Set up the identity**
$$\\frac{11x^2+14x+5}{(x+1)^2(2x+1)} \\equiv \\frac{A}{x+1} + \\frac{B}{(x+1)^2} + \\frac{C}{2x+1}$$

**Step 2: Equate numerators**
$$11x^2+14x+5 \\equiv A(x+1)(2x+1) + B(2x+1) + C(x+1)^2$$

**Step 3: Find A, B, and C**
Let $x = -1$:
$$11(-1)^2 + 14(-1) + 5 = B(2(-1)+1)$$
$$2 = -B \\implies B = -2$$

Let $x = -0.5$:
$$11(-0.5)^2 + 14(-0.5) + 5 = C(-0.5+1)^2$$
$$0.75 = 0.25C \\implies C = 3$$

Compare $x^2$ coefficients:
Left side: $11$. Right side: $2A + C$.
$$11 = 2A + 3 \\implies 8 = 2A \\implies A = 4$$

**Final Answer:**
$$\\frac{11x^2+14x+5}{(x+1)^2(2x+1)} \\equiv \\frac{4}{x+1} - \\frac{2}{(x+1)^2} + \\frac{3}{2x+1}$$

### 7.5 Partial Fractions: Improper Fractions
If a fraction is improper (top-heavy), you have two choices: Algebraic Division First, or Using a Single Identity (Recommended).

**Example (Degrees are the same):**
Split $\\frac{3x^2 - 3x - 2}{(x-1)(x-2)}$ into partial fractions.

**Step 1: Set up the identity**
Because it is $x^2$ over $x^2$, we need a constant term $A$ at the front.
$$\\frac{3x^2 - 3x - 2}{(x-1)(x-2)} \\equiv A + \\frac{B}{x-1} + \\frac{C}{x-2}$$

**Step 2: Equate numerators**
$$3x^2 - 3x - 2 \\equiv A(x-1)(x-2) + B(x-2) + C(x-1)$$

**Step 3: Find A, B, and C**
Compare $x^2$ coefficients: $A = 3$.
Substitute $x = 1$: $-2 = -B \\implies B = 2$
Substitute $x = 2$: $12 - 6 - 2 = C \\implies C = 4$

**Final Answer:**
$$\\frac{3x^2 - 3x - 2}{(x-1)(x-2)} \\equiv 3 + \\frac{2}{x-1} + \\frac{4}{x-2}$$

## 8. Common Mistakes and Exam Traps
*   **Illegal Cancelling:** Cancelling terms that are added or subtracted rather than factorised.
*   **Forgetting the Conclusion in Proofs:** A proof by contradiction is not finished when you find the contradiction.
*   **Missing the Repeated Root Term:** Forgetting the linear term when splitting a fraction with a squared denominator.
*   **Ignoring Improper Fractions:** Jumping straight into partial fractions without checking the degrees of the numerator and denominator.
*   **Sign Errors when Subtracting Fractions:** When subtracting an algebraic fraction, remember that the minus sign applies to the *entire* numerator of the second fraction.

## 9. Practice Questions
1. Prove by contradiction that there are no positive integers $a$ and $b$, with $a$ being odd, such that $a + 4b = 4\\sqrt{ab}$.
2. Express the following as a single fraction in its simplest form:
   $$\\frac{3x+5}{x^2+x-12} - \\frac{2}{x-3}$$
3. Split the following into partial fractions:
   $$\\frac{6x^2+5x-2}{x(x-1)(2x+1)}$$
`;

export const A21_01_MODULE: Module = {
  id: "A21-01",
  title: "Proofs and Partial Fractions",
  type: "Pure Mathematics",
  overview: "This lesson covers two distinct but highly important algebraic tools for A2 Mathematics: Proof by Contradiction and Partial Fractions.",
  learningOutcomes: [
    { id: "A21-AF-LO001", text: "Simplify rational expressions, including by factorising and cancelling, and algebraic division" },
    { id: "A21-AF-LO008", text: "Decompose rational functions into partial fractions, with denominators not more complicated than squared linear terms" }
  ],
  lessons: [
    {
      id: "A21-01-Lesson",
      title: "Proofs and Partial Fractions",
      visualId: "A21-Proofs",
      type: "Pure Mathematics",
      content: LESSON_CONTENT,
      loIds: ["A21-AF-LO001", "A21-AF-LO008"]
    }
  ]
};
