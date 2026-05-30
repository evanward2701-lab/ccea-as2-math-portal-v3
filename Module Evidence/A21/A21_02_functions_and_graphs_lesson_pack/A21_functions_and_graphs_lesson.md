```markdown
# A21_functions_and_graphs_lesson.md PART 1A

## 1. Lesson Title

**Functions and Graphs**
**Unit:** A2 1 Pure Mathematics (A21)
**Source Evidence:** `02 functions and graphs.md` (Transcript), `P2 Chapter 2 :: Functions & Graphs` (PowerPoint OCR), `ActivInspire Studio` (Whiteboard Screenshots)
**Date Generated:** 2026-05-30
**Relevant LO IDs:** A21-AF-LO002, A21-AF-LO003, A21-AF-LO004, A21-AF-LO005, A21-AF-LO006, A21-AF-LO007
**Suggested Tags:** `#A21`, `#Functions`, `#Modulus`, `#DomainRange`, `#CompositeFunctions`, `#InverseFunctions`, `#TransformGraphs`, `#LessonNotes`

## 2. Evidence Map

| Evidence Type | Filename / Source | Role in this lesson | Pages/Slides/Images used | Notes on quality or uncertainty |
|---|---|---|---|---|
| Specification Map | `CCEA_GCE_Mathematics_Specification_Map copy.md` | Authority for syllabus boundaries and LO IDs. | A21 Algebra and functions | Clear mapping to A21 requirements. |
| Transcript | `02 functions and graphs.md` | Primary written teaching evidence, explanations, and worked examples. | Full document | Excellent detail on modulus solving, inverse domains/ranges, and exam technique. |
| PowerPoint | `P2 Chapter 2 :: Functions & Graphs` | Visual sequencing, formal definitions, and structured examples. | Slides 1-44 | Good visual summaries of mappings, one-to-one functions, and transformations. |
| PNG Images | `ActivInspire Studio` Whiteboard | Handwritten visual evidence of equation solving and graph sketching. | Pages 1-45 | Confirms the step-by-step algebraic methods used in the transcript. |

## 3. Specification Alignment

| LO ID | CCEA Specification Point | Elaboration Guidance | Covered in this lesson? | Where it appears | Gap or action needed | Suggested visual/widget support |
|---|---|---|---|---|---|---|
| A21-AF-LO002 | Demonstrate understanding of and use the definition of a function | None | Yes | Sections 7, 8 | None | Mapping diagrams |
| A21-AF-LO003 | Demonstrate understanding of and use the terms domain and range in the context of functions | None | Yes | Sections 7, 8 | None | Domain/range interval tables |
| A21-AF-LO004 | Demonstrate understanding of and use composite functions | None | Yes | Section 8 | None | Function machine diagram |
| A21-AF-LO005 | Demonstrate understanding of and use inverse functions and their graphs | None | Yes | Section 8 | None | Reflection in $y=x$ graph |
| A21-AF-LO006 | Demonstrate understanding of and use the modulus function, including $\|x-a\|<b$ | None | Yes | Section 8 | None | Modulus graph sketches |
| A21-AF-LO007 | Demonstrate understanding of the effect of combinations of simple transformations on the graph of $y=f(x)$ | Includes transformation of trigonometric, exponential, logarithmic and modulus functions. | Yes | Section 8 | None | Interactive transformation widget |

## 4. Learning Objectives

By the end of this lesson, you should be able to:
* Sketch modulus graphs of the form $y = |ax + b|$ and apply further transformations to them.
* Solve modulus equations and inequalities algebraically and graphically, always checking for valid solutions.
* Understand the definition of a function, distinguishing between one-to-one and many-to-one mappings.
* Determine the domain and range of various functions, including restricted domains.
* Form and evaluate composite functions $fg(x)$.
* Find the inverse of a one-to-one function $f^{-1}(x)$, sketch its graph, and state its domain and range.
* Apply combinations of transformations to graphs, including $|f(x)|$ and $f(|x|)$.

## 5. Compact Prerequisite Recap

To succeed in this A2 topic, you need to be confident with the following AS1 concepts:
* **AS1 Graph Transformations:** Knowing how $f(x)+a$, $f(x+a)$, $af(x)$, and $f(ax)$ affect a curve.
* **AS1 Quadratics:** Completing the square to find the vertex (minimum/maximum point) of a parabola, which is crucial for finding the range of quadratic functions.
* **AS1 Exponentials and Logarithms:** Knowing the shapes of $y=e^x$ and $y=\ln x$, and understanding that they are inverse operations.
* **AS1 Inequalities:** Solving linear and quadratic inequalities.

## 6. Big Picture Explanation

In AS Mathematics, you worked with equations and simple graphs. In A2 Mathematics, we upgrade our thinking to **Functions**. A function is a strict mathematical machine: you put a valid number in (the domain), and it spits exactly one number out (the range). 

This chapter gives you the ultimate toolkit for manipulating these machines. You will learn how to chain them together (composite functions), run them backwards (inverse functions), and force them to only output positive values (the modulus function). You will also learn how to visually shift, stretch, and reflect these functions on a graph. Understanding how domains and ranges interact when you combine or reverse functions is one of the most important foundational skills for the rest of the A2 Pure course.

## 7. Key Definitions and Notation

* **Mapping:** A rule that links numbers in one set (inputs) to numbers in another set (outputs).
* **Function:** A specific type of mapping where every valid input maps to **exactly one** output.
* **Domain:** The set of all possible valid input values ($x$-values) for a function.
* **Range:** The set of all possible output values ($y$-values or $f(x)$-values) produced by the function.
* **One-to-one function:** A function where every output is produced by exactly one input (e.g., $f(x) = 2x + 1$). These pass the "horizontal line test".
* **Many-to-one function:** A function where multiple inputs can produce the same output (e.g., $f(x) = x^2$, where $x=2$ and $x=-2$ both output $4$).
* **Modulus $|x|$:** The non-negative numerical value (magnitude) of $x$. If $x$ is negative, it becomes positive. If $x$ is positive, it stays positive.
* **Composite Function $fg(x)$:** This means $f(g(x))$. You apply function $g$ first, and put the result into function $f$.
* **Inverse Function $f^{-1}(x)$:** The function that reverses the effect of $f(x)$. It only exists if $f(x)$ is a one-to-one function.

## 8. Core Theory

### 8.1 The Modulus Function

The modulus function, written as $|x|$, gives the absolute size (or magnitude) of a number, ignoring its sign.
* $|6| = 6$
* $|-7.1| = 7.1$

It is particularly useful for expressing the difference or distance between two values without worrying about which is larger: the distance between $a$ and $b$ is $|a - b|$.

#### Sketching Modulus Graphs
The graph of $y = |x|$ takes the standard straight line $y = x$ and reflects any part that falls below the $x$-axis upwards, creating a "V" shape.

[VISUAL PLACEHOLDER: A21FunctionsAndGraphsTikZ-001 | Source: PowerPoint slide 6 | Insert from A21_functions_and_graphs_tikz.md | Purpose: Graph of y = |x| showing the V-shape at the origin]

To sketch a more complex modulus graph like $y = |ax + b|$:
1. Sketch the normal straight line $y = ax + b$ (use a dotted line for the part below the $x$-axis).
2. Reflect the section below the $x$-axis upwards so it becomes positive.
3. Mark the $y$-intercept and the vertex (where it touches the $x$-axis).

**Example:** Sketch $y = |2x - 3|$
The line $y = 2x - 3$ crosses the $y$-axis at $-3$ and the $x$-axis at $x = \frac{3}{2}$. 
When we apply the modulus, the $y$-intercept reflects up to $+3$. The vertex remains at $(\frac{3}{2}, 0)$.

[VISUAL PLACEHOLDER: A21FunctionsAndGraphsTikZ-002 | Source: Transcript / Whiteboard | Insert from A21_functions_and_graphs_tikz.md | Purpose: Sketch of y = |2x - 3| showing the reflection]

#### Solving Modulus Equations
To solve an equation like $|2x - 3| = 5$, you must consider that the expression inside the modulus could have been positive or negative before the modulus was applied.

**The Golden Rule:** ALWAYS sketch the graphs of both sides of the equation. This prevents you from accepting "false" solutions (extraneous roots) that occur when a line intersects the algebraic continuation of a reflected branch, but not the actual modulus graph.

**Method:**
1. **Positive branch:** Solve the equation normally: $2x - 3 = 5 \implies 2x = 8 \implies x = 4$.
2. **Negated branch:** Negate the expression inside the modulus: $-(2x - 3) = 5 \implies -2x + 3 = 5 \implies -2x = 2 \implies x = -1$.
3. **Check:** Look at your sketch or substitute the values back into the original equation to ensure both are valid.

#### Solving Modulus Inequalities
To solve $|3x - 5| > 2 - \frac{1}{2}x$:
1. Sketch $y = |3x - 5|$ and $y = 2 - \frac{1}{2}x$ on the same axes.
2. Find the critical values (the points of intersection) by solving the positive and negated equations.
3. Use the sketch to determine where the modulus graph is *above* the straight line.

### 8.2 Functions, Domain, and Range

A mapping takes inputs and gives outputs. A **function** is a strict mapping where every valid input maps to **exactly one** output. 

* **Domain:** The allowed inputs ($x$-values).
* **Range:** The resulting outputs ($y$-values or $f(x)$-values).

**Finding the Range:**
It is highly recommended to sketch the function to find its range. 
* For $f(x) = x^2$ with domain $x \in \mathbb{R}$, the minimum value is $0$, so the range is $f(x) \ge 0$.
* For $f(x) = x^2 - 4x + 1$ with a restricted domain $0 \le x \le 5$:
  Complete the square: $f(x) = (x-2)^2 - 3$. 
  The minimum point is $(2, -3)$. Since $x=2$ is inside our domain, the lowest output is $-3$.
  Check the endpoints: $f(0) = 1$, $f(5) = 6$. 
  The highest output is $6$. Therefore, the range is $-3 \le f(x) \le 6$.

### 8.3 Composite Functions

A composite function applies one function to the result of another. 
$fg(x)$ means $f(g(x))$. **You apply $g$ first, then $f$.**

**Example:** If $f(x) = x^2 + 1$ and $g(x) = 4x - 2$.
Find $fg(x)$:
Replace every $x$ in the outer function $f$ with the entire inner function $g(x)$.
$fg(x) = f(4x - 2) = (4x - 2)^2 + 1$
$= 16x^2 - 16x + 4 + 1 = 16x^2 - 16x + 5$.

[VISUAL PLACEHOLDER: A21FunctionsAndGraphsSVG-001 | Source: PowerPoint slide 19 | Insert from A21_functions_and_graphs_svg.md | Purpose: Composite function mapping diagram showing x -> g(x) -> f(g(x))]

### 8.4 Inverse Functions

An inverse function $f^{-1}(x)$ reverses the effect of the original function $f(x)$. 
**Crucial Condition:** A function must be **one-to-one** for an inverse to exist. If it were many-to-one (like $x^2$), reversing it would give multiple outputs for a single input, which violates the definition of a function.

**How to find the algebraic inverse:**
1. Write the function as $y = \dots$
2. Swap every $x$ and $y$.
3. Rearrange to make $y$ the subject.
4. Replace $y$ with $f^{-1}(x)$.

**Domain and Range Swap:**
Because the inputs and outputs are physically swapped:
* The **Domain** of $f^{-1}(x)$ is exactly the **Range** of $f(x)$.
* The **Range** of $f^{-1}(x)$ is exactly the **Domain** of $f(x)$.

**Graphical Relationship:**
Because the $x$ and $y$ coordinates are swapped, the graph of $y = f^{-1}(x)$ is a **reflection** of the graph of $y = f(x)$ in the line $y = x$.

[VISUAL PLACEHOLDER: A21FunctionsAndGraphsTikZ-003 | Source: PowerPoint slide 26 | Insert from A21_functions_and_graphs_tikz.md | Purpose: Graph showing f(x) and f^-1(x) reflected across the line y=x]

**Exam Trick:** If you are asked to solve $f(x) = f^{-1}(x)$, do not set their algebraic expressions equal to each other—it often creates a very difficult equation (like a quartic). Instead, because they intersect on the mirror line, simply solve **$f(x) = x$**.

**Notation Trick:** If $f^{-1}(-5) = x$, you can switch the inputs and outputs to write $f(x) = -5$. This saves you from having to calculate the inverse function algebraically!

### 8.5 Graph Transformations with Modulus

You must know how to apply the modulus function to entire graphs.

* **$y = |f(x)|$**: The modulus is on the *outside*. It affects the $y$-values. Any part of the graph below the $x$-axis is reflected upwards.
* **$y = f(|x|)$**: The modulus is on the *inside*. It affects the $x$-values before the function processes them. The graph to the right of the $y$-axis ($x \ge 0$) stays the same. The graph to the left of the $y$-axis is deleted and replaced by a reflection of the right-hand side.

[INTERACTIVE PLACEHOLDER: A21FunctionsAndGraphsWidget-001 | Source: AI-proposed teaching enhancement | Insert from A21_functions_and_graphs_widgets.md | Purpose: Interactive widget allowing students to toggle between f(x), |f(x)|, and f(|x|) for various functions]

```

```markdown
# A21_functions_and_graphs_lesson.md PART 1B

## 9. Visual Asset Integration

* **[VISUAL PLACEHOLDER: A21FunctionsAndGraphsTikZ-001 | Source: PowerPoint slide 6 | Insert from A21_functions_and_graphs_tikz.md | Purpose: Graph of y = |x| showing the V-shape at the origin]**
  * **Explanation:** This shows the fundamental modulus shape, demonstrating how the negative $y$-values of $y=x$ are reflected in the $x$-axis to become positive.

* **[VISUAL PLACEHOLDER: A21FunctionsAndGraphsTikZ-002 | Source: Transcript / Whiteboard | Insert from A21_functions_and_graphs_tikz.md | Purpose: Sketch of y = |2x - 3| showing the reflection]**
  * **Explanation:** This illustrates the step-by-step method of sketching a linear modulus graph by first drawing the dotted line $y = 2x - 3$ and then reflecting the negative portion.

* **[VISUAL PLACEHOLDER: A21FunctionsAndGraphsSVG-001 | Source: PowerPoint slide 19 | Insert from A21_functions_and_graphs_svg.md | Purpose: Composite function mapping diagram showing x -> g(x) -> f(g(x))]**
  * **Explanation:** This visualises the "chaining" of functions, reinforcing that $fg(x)$ means applying $g$ first, then $f$.

* **[VISUAL PLACEHOLDER: A21FunctionsAndGraphsTikZ-003 | Source: PowerPoint slide 26 | Insert from A21_functions_and_graphs_tikz.md | Purpose: Graph showing f(x) and f^-1(x) reflected across the line y=x]**
  * **Explanation:** This demonstrates the geometric relationship between a function and its inverse, highlighting the symmetry across the line $y=x$ and how the domains and ranges swap.

## 10. Interactive Learning Widgets

* **[INTERACTIVE PLACEHOLDER: A21FunctionsAndGraphsWidget-001 | Source: AI-proposed teaching enhancement, not present in supplied lesson evidence | Insert from A21_functions_and_graphs_widgets.md | Purpose: Interactive widget allowing students to toggle between f(x), |f(x)|, and f(|x|) for various functions]**
  * **What it lets the learner change:** Students can select different base functions (linear, quadratic, trigonometric) and toggle the $|f(x)|$ and $f(|x|)$ transformations.
  * **What updates:** The graph dynamically updates to show the transformed curve.
  * **What to notice:** Notice how $|f(x)|$ never goes below the $x$-axis (bottom flips up), while $f(|x|)$ always has perfect symmetry across the $y$-axis (left side is replaced by a reflection of the right side).
  * **Exam connection:** Visualising these transformations quickly is essential for A2 curve sketching questions.

## 11. Worked Examples

### Example 1: Solving a Modulus Equation
**Source:** Lesson Transcript
**Question:** Solve the equation $|2x - 3| + 4 = \frac{1}{3}x + 6$.
**Method:**
We must consider both the positive (normal) branch and the negative (reflected) branch of the modulus function.

**Step 1: Solve the normal version**
$$2x - 3 + 4 = \frac{1}{3}x + 6$$
$$2x + 1 = \frac{1}{3}x + 6$$
Subtract 1 from both sides:
$$2x = \frac{1}{3}x + 5$$
Subtract $\frac{1}{3}x$ from both sides ($2 - \frac{1}{3} = \frac{5}{3}$):
$$\frac{5}{3}x = 5$$
$$x = 5 \div \frac{5}{3} = 3$$

**Step 2: Solve the negated version**
$$-(2x - 3) + 4 = \frac{1}{3}x + 6$$
$$-2x + 3 + 4 = \frac{1}{3}x + 6$$
$$-2x + 7 = \frac{1}{3}x + 6$$
Subtract 6 from both sides:
$$-2x + 1 = \frac{1}{3}x$$
Add $2x$ to both sides ($2 + \frac{1}{3} = \frac{7}{3}$):
$$1 = \frac{7}{3}x$$
$$x = \frac{3}{7}$$

**Step 3: Check validity**
Substitute $x=3$ into the original equation: $|2(3)-3| + 4 = 7$. Right side: $\frac{1}{3}(3) + 6 = 7$. Valid.
Substitute $x=\frac{3}{7}$ into the original equation: $|2(\frac{3}{7})-3| + 4 = |-\frac{15}{7}| + 4 = \frac{15}{7} + \frac{28}{7} = \frac{43}{7}$. Right side: $\frac{1}{3}(\frac{3}{7}) + 6 = \frac{1}{7} + \frac{42}{7} = \frac{43}{7}$. Valid.
Both solutions are valid.

### Example 2: Modulus Intersections and Gradients
**Source:** Lesson Transcript
**Question:** Given that the graphs with equations $y = |2x - 3| + 4$ and $y = mx + 6$ do not intersect, find the possible values for $m$.
**Method:**
**Step 1: Identify key points**
The vertex of the modulus graph $y = |2x - 3| + 4$ occurs when $2x - 3 = 0 \implies x = \frac{3}{2}$. The $y$-coordinate is $4$. Vertex = $(\frac{3}{2}, 4)$.
The line $y = mx + 6$ always passes through the $y$-intercept $(0, 6)$.

**Step 2: Find the gradient that passes exactly through the vertex**
If the line passes through $(\frac{3}{2}, 4)$ from $(0, 6)$:
$$m = \frac{y_2 - y_1}{x_2 - x_1} = \frac{4 - 6}{\frac{3}{2} - 0} = \frac{-2}{\frac{3}{2}} = -\frac{4}{3}$$
If $m = -\frac{4}{3}$, there is exactly one intersection (at the vertex). To have *no* intersections, the line must be steeper downwards, so $m < -\frac{4}{3}$.

**Step 3: Find the parallel boundary**
The negated branch of the modulus graph has the equation $y = -2x + 3 + 4 = -2x + 7$. Its gradient is $-2$.
If our line $y = mx + 6$ has a gradient of $-2$, it will be parallel to this branch and will never catch up to it. If it becomes steeper than $-2$ (e.g., $-3$), it will eventually intersect the branch further down.
Therefore, $m$ can be $-2$, but cannot be steeper.

**Conclusion:**
The values for $m$ are: $-2 \le m < -\frac{4}{3}$.
In set notation: $\{m : -2 \le m < -\frac{4}{3}\}$.

### Example 3: Finding the Inverse Function and its Domain
**Source:** Lesson Transcript
**Question:** Given $f(x) = \frac{2x - 1}{x + 3}$ for $x > -3$. Find $f^{-1}(x)$ and state its domain.
**Method:**
**Step 1: Find the range of $f(x)$**
As $x \to -3$ from above, the denominator gets very small and positive, so $f(x) \to -\infty$.
As $x \to \infty$, $f(x) \to \frac{2x}{x} = 2$.
Therefore, the range of $f(x)$ is $f(x) < 2$.

**Step 2: Find the algebraic inverse**
Let $y = \frac{2x - 1}{x + 3}$.
Swap $x$ and $y$:
$$x = \frac{2y - 1}{y + 3}$$
Multiply by $(y+3)$:
$$x(y + 3) = 2y - 1$$
$$xy + 3x = 2y - 1$$
Collect $y$ terms on one side:
$$3x + 1 = 2y - xy$$
Factorise out $y$:
$$3x + 1 = y(2 - x)$$
Divide to make $y$ the subject:
$$y = \frac{3x + 1}{2 - x}$$
So, $f^{-1}(x) = \frac{3x + 1}{2 - x}$.

**Step 3: State the domain of $f^{-1}(x)$**
The domain of the inverse is exactly the range of the original function.
Domain of $f^{-1}(x)$ is $x < 2$.

### Example 4: Using Function Notation Shortcuts
**Source:** Lesson Transcript
**Question:** For the function $f(x) = \frac{2x - 1}{x + 3}$, find the value of $f^{-1}(-5)$.
**Method:**
Instead of finding the full inverse function and substituting $-5$, we can use the property that if $f^{-1}(a) = b$, then $f(b) = a$.
Let $f^{-1}(-5) = x$.
Therefore, $f(x) = -5$.
$$\frac{2x - 1}{x + 3} = -5$$
$$2x - 1 = -5(x + 3)$$
$$2x - 1 = -5x - 15$$
$$7x = -14$$
$$x = -2$$
So, $f^{-1}(-5) = -2$.

## 12. Common Mistakes and Exam Traps

* **Not sketching modulus equations:** If you solve $|x+1| = 2x+5$ algebraically without a sketch, you will get two answers ($x=-1.5$ and $x=-2$). However, a sketch reveals the line only intersects the reflected branch. Substituting $x=-1.5$ back in gives $|-0.5| = 2$, which is false. Always sketch to check for "phantom" solutions.
* **Forgetting the domain of the inverse:** Exam questions frequently ask you to state the domain of $f^{-1}(x)$. Remember: **Domain of $f^{-1}$ = Range of $f$**. You must find the range of the original function first.
* **Confusing $f^{-1}(x)$ with $(f(x))^{-1}$:** $f^{-1}(x)$ means the *inverse function* (reversing the mapping). $(f(x))^{-1}$ means the *reciprocal* $\frac{1}{f(x)}$. They are completely different!
* **Incorrectly applying $f(|x|)$:** When sketching $f(|x|)$, students often just reflect the whole graph. The correct method is to **delete** everything to the left of the $y$-axis, and then reflect the right-hand side over to the left.

## 13. Practice Questions

**Q1.** Solve the equation $|x + 1| = 2x + 5$. *(Source: PowerPoint slide 8)*
**Q2.** Solve the inequality $|4x - 1| < 2x$. *(Source: PowerPoint slide 8)*
**Q3.** The function $f$ is defined by $f(x) = e^x + 2, x \in \mathbb{R}$. Find $f^{-1}(x)$, stating its domain. *(Source: Transcript / Slide 29)*
**Q4.** The functions $f$ and $f^{-1}$ intersect. Given $f(x) = x^2 - 3$ for $x \ge 0$, find the exact $x$-coordinate of their point of intersection. *(Source: Transcript)*

## 14. Worked Solutions

**Q1 Solution:**
1. Sketch $y = |x + 1|$ (V-shape with vertex at $x = -1$) and $y = 2x + 5$ (steeper line crossing $y$-axis at 5).
2. The sketch shows the line $y = 2x + 5$ only intersects the *reflected* (left) branch of the modulus graph.
3. Set up the negated equation: $-(x + 1) = 2x + 5$
4. $-x - 1 = 2x + 5$
5. $-6 = 3x \implies x = -2$.
*(Check: $|-2 + 1| = |-1| = 1$. Right side: $2(-2) + 5 = 1$. Valid.)*

**Q2 Solution:**
1. Sketch $y = |4x - 1|$ (V-shape, vertex at $x = 0.25$) and $y = 2x$ (shallower line through origin).
2. Find the two critical values where they intersect.
3. Positive branch: $4x - 1 = 2x \implies 2x = 1 \implies x = \frac{1}{2}$.
4. Negated branch: $-(4x - 1) = 2x \implies -4x + 1 = 2x \implies 6x = 1 \implies x = \frac{1}{6}$.
5. We want the modulus graph to be *less than* (below) the line $y = 2x$. Looking at the sketch, this happens between the two intersections.
6. Solution: $\frac{1}{6} < x < \frac{1}{2}$.

**Q3 Solution:**
1. Find the range of $f(x)$. The graph of $e^x$ is strictly $>0$. Therefore $e^x + 2 > 2$. Range is $f(x) > 2$.
2. Find the inverse. Let $y = e^x + 2$.
3. Swap variables: $x = e^y + 2$.
4. Rearrange for $y$: $e^y = x - 2$.
5. Take natural logs: $y = \ln(x - 2)$.
6. $f^{-1}(x) = \ln(x - 2)$.
7. The domain of $f^{-1}$ is the range of $f$. Domain: $x > 2$.

**Q4 Solution:**
1. A function and its inverse always intersect on the line $y = x$.
2. Therefore, we can just solve $f(x) = x$.
3. $x^2 - 3 = x$
4. $x^2 - x - 3 = 0$
5. Use the quadratic formula: $x = \frac{1 \pm \sqrt{(-1)^2 - 4(1)(-3)}}{2} = \frac{1 \pm \sqrt{13}}{2}$.
6. Since the domain of $f(x)$ is $x \ge 0$, we reject the negative root.
7. Exact solution: $x = \frac{1 + \sqrt{13}}{2}$.

## 15. Exam Technique Notes

* **Always sketch modulus problems:** CCEA examiners frequently design questions where one algebraic solution is invalid. The sketch is your primary defence against losing these accuracy marks.
* **Use the $f(x) = x$ shortcut:** If asked where a function meets its inverse, never try to set $f(x) = f^{-1}(x)$ algebraically if it creates a cubic or quartic. Set $f(x) = x$ instead.
* **Domain and Range marks:** There is almost always a standalone mark for stating the domain of an inverse function. Do not forget to write it down at the end of your algebraic rearrangement.
* **Calculator checks:** If you have a graphical calculator, use it to quickly verify the shape of your modulus graphs and the intersections. However, you must still show the algebraic steps (like negating the branch) to get full method marks.

## 16. Syllabus Gap Check

* **A21-AF-LO002 (Definition of a function):** Covered.
* **A21-AF-LO003 (Domain and range):** Covered.
* **A21-AF-LO004 (Composite functions):** Covered.
* **A21-AF-LO005 (Inverse functions):** Covered.
* **A21-AF-LO006 (Modulus function):** Covered.
* **A21-AF-LO007 (Combinations of transformations):** Covered.
* *Note:* The evidence provided focused heavily on the algebraic and graphical manipulation of these functions. Rational expressions and partial fractions (LO001, LO008) belong to this topic area but were not present in this specific lesson's evidence. They will need to be covered in a separate lesson.

## 17. Recommended Enhancements Not in the Evidence

* **A21FunctionsAndGraphsWidget-001:** Added an interactive widget placeholder to allow students to dynamically toggle $|f(x)|$ and $f(|x|)$ transformations. This is highly effective for independent study as it allows learners to build an intuitive feel for the visual difference between the two, which is hard to convey with static images alone. Supports LO007.

## 18. Final Student Checklist

* [ ] I can sketch graphs of the form $y = |ax + b|$.
* [ ] I can solve modulus equations by checking both the positive and negated branches.
* [ ] I always use a sketch to verify my modulus equation solutions.
* [ ] I can determine the domain and range of a function, including restricted quadratics.
* [ ] I can substitute one function into another to find a composite function $fg(x)$.
* [ ] I can find the algebraic inverse of a function $f^{-1}(x)$.
* [ ] I know that the domain of $f^{-1}(x)$ is the range of $f(x)$.
* [ ] I can sketch $y = |f(x)|$ (reflecting bottom up) and $y = f(|x|)$ (reflecting right to left).

```

Next:
- Continue from `A21_functions_and_graphs_mermaid.md`.