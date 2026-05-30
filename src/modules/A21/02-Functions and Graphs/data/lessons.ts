import { Module } from '@/core/types';

const LESSON_CONTENT = `
# 1. Lesson Title
**Topic:** Functions and Graphs  
**Unit:** A2 1 Pure Mathematics (A21)

## 2. Specification Alignment

| LO ID | CCEA Specification Point |
|---|---|
| A21-AF-LO002 | Demonstrate understanding of and use the definition of a function |
| A21-AF-LO003 | Demonstrate understanding of and use the terms domain and range in the context of functions |
| A21-AF-LO004 | Demonstrate understanding of and use composite functions |
| A21-AF-LO005 | Demonstrate understanding of and use inverse functions and their graphs |
| A21-AF-LO006 | Demonstrate understanding of and use the modulus function, including $|x-a|<b$ |
| A21-AF-LO007 | Demonstrate understanding of the effect of combinations of simple transformations on the graph of $y=f(x)$ |

## 3. Learning Objectives
By the end of this lesson, you should be able to:
* Sketch modulus graphs of the form $y = |ax + b|$ and apply further transformations to them.
* Solve modulus equations and inequalities algebraically and graphically, always checking for valid solutions.
* Understand the definition of a function, distinguishing between one-to-one and many-to-one mappings.
* Determine the domain and range of various functions, including restricted domains.
* Form and evaluate composite functions $fg(x)$.
* Find the inverse of a one-to-one function $f^{-1}(x)$, sketch its graph, and state its domain and range.
* Apply combinations of transformations to graphs, including $|f(x)|$ and $f(|x|)$.

## 4. Compact Prerequisite Recap
To succeed in this A2 topic, you need to be confident with the following AS1 concepts:
* **AS1 Graph Transformations:** Knowing how $f(x)+a$, $f(x+a)$, $af(x)$, and $f(ax)$ affect a curve.
* **AS1 Quadratics:** Completing the square to find the vertex (minimum/maximum point) of a parabola, which is crucial for finding the range of quadratic functions.
* **AS1 Exponentials and Logarithms:** Knowing the shapes of $y=e^x$ and $y=\\ln x$, and understanding that they are inverse operations.
* **AS1 Inequalities:** Solving linear and quadratic inequalities.

## 5. Big Picture Explanation
In AS Mathematics, you worked with equations and simple graphs. In A2 Mathematics, we upgrade our thinking to **Functions**. A function is a strict mathematical machine: you put a valid number in (the domain), and it spits exactly one number out (the range). 

This chapter gives you the ultimate toolkit for manipulating these machines. You will learn how to chain them together (composite functions), run them backwards (inverse functions), and force them to only output positive values (the modulus function). You will also learn how to visually shift, stretch, and reflect these functions on a graph. Understanding how domains and ranges interact when you combine or reverse functions is one of the most important foundational skills for the rest of the A2 Pure course.

## 6. Key Definitions and Notation
* **Mapping:** A rule that links numbers in one set (inputs) to numbers in another set (outputs).
* **Function:** A specific type of mapping where every valid input maps to **exactly one** output.
* **Domain:** The set of all possible valid input values ($x$-values) for a function.
* **Range:** The set of all possible output values ($y$-values or $f(x)$-values) produced by the function.
* **One-to-one function:** A function where every output is produced by exactly one input (e.g., $f(x) = 2x + 1$). These pass the "horizontal line test".
* **Many-to-one function:** A function where multiple inputs can produce the same output (e.g., $f(x) = x^2$, where $x=2$ and $x=-2$ both output $4$).
* **Modulus $|x|$:** The non-negative numerical value (magnitude) of $x$. If $x$ is negative, it becomes positive. If $x$ is positive, it stays positive.
* **Composite Function $fg(x)$:** This means $f(g(x))$. You apply function $g$ first, and put the result into function $f$.
* **Inverse Function $f^{-1}(x)$:** The function that reverses the effect of $f(x)$. It only exists if $f(x)$ is a one-to-one function.

## 7. Core Theory

### 7.1 The Modulus Function
The modulus function, written as $|x|$, gives the absolute size (or magnitude) of a number, ignoring its sign.
* $|6| = 6$
* $|-7.1| = 7.1$

It is particularly useful for expressing the difference or distance between two values without worrying about which is larger: the distance between $a$ and $b$ is $|a - b|$.

#### Sketching Modulus Graphs
The graph of $y = |x|$ takes the standard straight line $y = x$ and reflects any part that falls below the $x$-axis upwards, creating a "V" shape.

[VISUAL PLACEHOLDER: A21FunctionsAndGraphsTikZ001 | Graph of y = |x|]

To sketch a more complex modulus graph like $y = |ax + b|$:
1. Sketch the normal straight line $y = ax + b$ (use a dotted line for the part below the $x$-axis).
2. Reflect the section below the $x$-axis upwards so it becomes positive.
3. Mark the $y$-intercept and the vertex (where it touches the $x$-axis).

**Example:** Sketch $y = |2x - 3|$
The line $y = 2x - 3$ crosses the $y$-axis at $-3$ and the $x$-axis at $x = \\frac{3}{2}$. 
When we apply the modulus, the $y$-intercept reflects up to $+3$. The vertex remains at $(\\frac{3}{2}, 0)$.

[VISUAL PLACEHOLDER: A21FunctionsAndGraphsTikZ002 | Sketch of y = |2x - 3|]

#### Solving Modulus Equations
To solve an equation like $|2x - 3| = 5$, you must consider that the expression inside the modulus could have been positive or negative before the modulus was applied.

**The Golden Rule:** ALWAYS sketch the graphs of both sides of the equation. This prevents you from accepting "false" solutions (extraneous roots) that occur when a line intersects the algebraic continuation of a reflected branch, but not the actual modulus graph.

**Method:**
1. **Positive branch:** Solve the equation normally: $2x - 3 = 5 \\implies 2x = 8 \\implies x = 4$.
2. **Negated branch:** Negate the expression inside the modulus: $-(2x - 3) = 5 \\implies -2x + 3 = 5 \\implies -2x = 2 \\implies x = -1$.
3. **Check:** Look at your sketch or substitute the values back into the original equation to ensure both are valid.

#### Solving Modulus Inequalities
To solve $|3x - 5| > 2 - \\frac{1}{2}x$:
1. Sketch $y = |3x - 5|$ and $y = 2 - \\frac{1}{2}x$ on the same axes.
2. Find the critical values (the points of intersection) by solving the positive and negated equations.
3. Use the sketch to determine where the modulus graph is *above* the straight line.

### 7.2 Functions, Domain, and Range
A mapping takes inputs and gives outputs. A **function** is a strict mapping where every valid input maps to **exactly one** output. 

* **Domain:** The allowed inputs ($x$-values).
* **Range:** The resulting outputs ($y$-values or $f(x)$-values).

**Finding the Range:**
It is highly recommended to sketch the function to find its range. 
* For $f(x) = x^2$ with domain $x \\in \\mathbb{R}$, the minimum value is $0$, so the range is $f(x) \\ge 0$.
* For $f(x) = x^2 - 4x + 1$ with a restricted domain $0 \\le x \\le 5$:
  Complete the square: $f(x) = (x-2)^2 - 3$. 
  The minimum point is $(2, -3)$. Since $x=2$ is inside our domain, the lowest output is $-3$.
  Check the endpoints: $f(0) = 1$, $f(5) = 6$. 
  The highest output is $6$. Therefore, the range is $-3 \\le f(x) \\le 6$.

### 7.3 Composite Functions
A composite function applies one function to the result of another. 
$fg(x)$ means $f(g(x))$. **You apply $g$ first, then $f$.**

**Example:** If $f(x) = x^2 + 1$ and $g(x) = 4x - 2$.
Find $fg(x)$:
Replace every $x$ in the outer function $f$ with the entire inner function $g(x)$.
$fg(x) = f(4x - 2) = (4x - 2)^2 + 1$
$= 16x^2 - 16x + 4 + 1 = 16x^2 - 16x + 5$.

[VISUAL PLACEHOLDER: A21FunctionsAndGraphsSVG001 | Composite function mapping diagram]

### 7.4 Inverse Functions
An inverse function $f^{-1}(x)$ reverses the effect of the original function $f(x)$. 
**Crucial Condition:** A function must be **one-to-one** for an inverse to exist. If it were many-to-one (like $x^2$), reversing it would give multiple outputs for a single input, which violates the definition of a function.

**How to find the algebraic inverse:**
1. Write the function as $y = \\dots$
2. Swap every $x$ and $y$.
3. Rearrange to make $y$ the subject.
4. Replace $y$ with $f^{-1}(x)$.

**Domain and Range Swap:**
Because the inputs and outputs are physically swapped:
* The **Domain** of $f^{-1}(x)$ is exactly the **Range** of $f(x)$.
* The **Range** of $f^{-1}(x)$ is exactly the **Domain** of $f(x)$.

**Graphical Relationship:**
Because the $x$ and $y$ coordinates are swapped, the graph of $y = f^{-1}(x)$ is a **reflection** of the graph of $y = f(x)$ in the line $y = x$.

[VISUAL PLACEHOLDER: A21FunctionsAndGraphsTikZ003 | Inverse Function Reflection]

**Exam Trick:** If you are asked to solve $f(x) = f^{-1}(x)$, do not set their algebraic expressions equal to each other—it often creates a very difficult equation (like a quartic). Instead, because they intersect on the mirror line, simply solve **$f(x) = x$**.

**Notation Trick:** If $f^{-1}(-5) = x$, you can switch the inputs and outputs to write $f(x) = -5$. This saves you from having to calculate the inverse function algebraically!

### 7.5 Graph Transformations with Modulus
You must know how to apply the modulus function to entire graphs.
* **$y = |f(x)|$**: The modulus is on the *outside*. It affects the $y$-values. Any part of the graph below the $x$-axis is reflected upwards.
* **$y = f(|x|)$**: The modulus is on the *inside*. It affects the $x$-values before the function processes them. The graph to the right of the $y$-axis ($x \\ge 0$) stays the same. The graph to the left of the $y$-axis is deleted and replaced by a reflection of the right-hand side.

[INTERACTIVE PLACEHOLDER: A21FunctionsAndGraphsWidget001 | Modulus Transformations Explorer]

## 8. Common Mistakes and Exam Traps
* **Not sketching modulus equations:** Always sketch to check for "phantom" solutions.
* **Forgetting the domain of the inverse:** Remember: **Domain of $f^{-1}$ = Range of $f$**. You must find the range of the original function first.
* **Confusing $f^{-1}(x)$ with $(f(x))^{-1}$:** $f^{-1}(x)$ means the *inverse function* (reversing the mapping). $(f(x))^{-1}$ means the *reciprocal* $\\frac{1}{f(x)}$. They are completely different!
* **Incorrectly applying $f(|x|)$:** When sketching $f(|x|)$, students often just reflect the whole graph. The correct method is to **delete** everything to the left of the $y$-axis, and then reflect the right-hand side over to the left.

## 9. Practice Questions
1. Solve the equation $|x + 1| = 2x + 5$.
2. Solve the inequality $|4x - 1| < 2x$.
3. The function $f$ is defined by $f(x) = e^x + 2, x \\in \\mathbb{R}$. Find $f^{-1}(x)$, stating its domain.
4. The functions $f$ and $f^{-1}$ intersect. Given $f(x) = x^2 - 3$ for $x \\ge 0$, find the exact $x$-coordinate of their point of intersection.
`;

export const A21_02_MODULE: Module = {
  id: "A21-02",
  title: "Functions and Graphs",
  type: "Pure Mathematics",
  overview: "In A2 Mathematics, we upgrade our thinking to Functions. This chapter gives you the ultimate toolkit for manipulating these machines, including composite functions, inverse functions, and the modulus function.",
  learningOutcomes: [
    { id: "A21-AF-LO002", text: "Demonstrate understanding of and use the definition of a function" },
    { id: "A21-AF-LO003", text: "Demonstrate understanding of and use the terms domain and range in the context of functions" },
    { id: "A21-AF-LO004", text: "Demonstrate understanding of and use composite functions" },
    { id: "A21-AF-LO005", text: "Demonstrate understanding of and use inverse functions and their graphs" },
    { id: "A21-AF-LO006", text: "Demonstrate understanding of and use the modulus function, including $|x-a|<b$" },
    { id: "A21-AF-LO007", text: "Demonstrate understanding of the effect of combinations of simple transformations on the graph of $y=f(x)$" }
  ],
  lessons: [
    {
      id: "A21-02-Lesson",
      title: "Functions and Graphs",
      visualId: "A21-Functions",
      type: "Pure Mathematics",
      content: LESSON_CONTENT,
      loIds: ["A21-AF-LO002", "A21-AF-LO003", "A21-AF-LO004", "A21-AF-LO005", "A21-AF-LO006", "A21-AF-LO007"]
    }
  ]
};
