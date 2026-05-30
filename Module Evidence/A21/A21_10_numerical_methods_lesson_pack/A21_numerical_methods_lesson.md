```markdown
# A21_numerical_methods_lesson.md PART 1A

## 1. Lesson Title
**Numerical Methods**
**Unit:** A2 1 Pure Mathematics (A21)
**Source Evidence:** `10 Numerical Methods.md`, DrFrostMaths Presentation Slides, Annotated Teacher Slides
**Date Generated:** 2026-05-30
**Relevant LO IDs:** A21-NUM-LO001, A21-NUM-LO002, A21-NUM-LO004
**Suggested Tags:** `#A21`, `#NumericalMethods`, `#NewtonRaphson`, `#Iteration`, `#LocatingRoots`, `#LessonNotes`

## 2. Evidence Map

| Evidence Type | Filename | Role in this lesson | Pages/Slides/Images Used | Notes on quality or uncertainty |
|---|---|---|---|---|
| Specification Map | `CCEA_GCE_Mathematics_Specification_Map copy.md` | Authority for syllabus boundaries and LO IDs | A21 Numerical Methods section | Clear mapping to A21. |
| Transcript | `10 Numerical Methods.md` | Primary written teaching evidence | Full document | Excellent detail on calculator usage, exam technique, and common pitfalls. |
| PowerPoint / PDF | `Numerical Methods.pdf` | Primary visual sequencing | Slides 1-29 | Clear visual progression of staircase/cobweb diagrams and Newton-Raphson tangents. |
| Annotated PDF | `Numerical Methods - printable booklet one page.pdf` | Secondary visual evidence | Pages 1-18 | Shows handwritten working and exam-style layout. |
| Annotated PDF | `Numerical Methods - remote teaching.pdf` | Secondary visual evidence | Pages 1-14 | Additional handwritten notes on modelling and Newton-Raphson failures. |

## 3. Specification Alignment

| LO ID | CCEA Specification Point | Elaboration Guidance | Covered in this lesson? | Where it appears | Gap or action needed | Suggested visual/widget support |
|---|---|---|---|---|---|---|
| A21-NUM-LO001 | Locate roots of $f(x)=0$ by considering changes of sign of $f(x)$ in an interval of $x$ in which $f(x)$ is continuous | None | Yes | Section 8.1 | None | Graph showing root crossing axis. |
| A21-NUM-LO002 | Solve equations approximately using simple iterative methods, for example the Newton-Raphson method | None | Yes | Section 8.2, 8.3 | None | Staircase/Cobweb SVGs, Newton-Raphson tangent SVG. |
| A21-NUM-LO003 | Numerical integration via the trapezium rule | None | No | N/A | **Gap:** Not present in supplied evidence. | Needs separate lesson/content. |
| A21-NUM-LO004 | Use numerical methods to solve problems in context | None | Yes | Section 11 (Modelling) | None | Contextual graph. |

## 4. Learning Objectives
By the end of this lesson, you should be able to:
* Locate the roots of an equation $f(x) = 0$ by demonstrating a change of sign over a continuous interval.
* Prove that a root is correct to a given degree of accuracy (e.g., to 3 decimal places).
* Rearrange an equation $f(x) = 0$ into the iterative form $x_{n+1} = g(x_n)$ and use it to find approximate solutions.
* Draw and interpret staircase and cobweb diagrams to show whether an iteration converges or diverges.
* Apply the Newton-Raphson method to approximate roots, and understand graphically how and why it works.
* Identify situations where the Newton-Raphson method or iterative methods fail.
* Apply numerical methods to real-world modelling contexts.

## 5. Compact Prerequisite Recap
To succeed in this lesson, you need to be comfortable with:
* **GCSE Iteration:** The basic idea of feeding an answer back into a formula to get a better approximation.
* **AS1 Functions & Graphs:** Understanding $f(x)$ notation, roots (where a graph crosses the x-axis), and asymptotes.
* **AS1 Differentiation:** You must be able to find $f'(x)$ using standard rules, the chain rule, product rule, and quotient rule, as this is required for the Newton-Raphson formula.
* **Radians:** When differentiating trigonometric functions (like $\sin x$ or $\cos x$) in numerical methods, your calculator **must** be in radians mode.

## 6. Big Picture Explanation
In mathematics, we are used to solving equations exactly. If you have $x^2 - 5x + 6 = 0$, you can factorise it. If you have $e^x = 5$, you can use natural logarithms to find $x = \ln 5$. 

However, what happens if you need to solve $x - \cos(x) = 0$? Or $x^3 + 2x^2 - 3x + 4 = 0$? 
There is no simple algebraic way to rearrange $x - \cos(x) = 0$ to get "$x = \dots$". The exact solution cannot be expressed using standard algebraic functions. 

Instead of giving up, we use **Numerical Methods**. These are systematic mathematical processes that allow us to find *approximate* solutions to equations. By repeating (iterating) these processes, we can get an answer that is as accurate as we need it to be—whether that is to 3 decimal places for an exam, or 15 decimal places for engineering software. 

This topic bridges the gap between pure algebra and computational mathematics.

## 7. Key Definitions and Notation
* **Root:** A solution to the equation $f(x) = 0$. Graphically, it is the x-coordinate where the curve $y = f(x)$ crosses the x-axis.
* **Continuous Function:** A function whose graph can be drawn without taking your pen off the paper. It has no breaks, jumps, or vertical asymptotes in the given interval.
* **Iteration:** The process of repeatedly applying a mathematical formula, using the output of one step as the input for the next.
* **$x_0$:** The starting value (initial approximation) for an iterative process.
* **$x_n$ and $x_{n+1}$:** $x_n$ is the current approximation, and $x_{n+1}$ is the next, improved approximation.
* **Convergent:** When the sequence of approximations $x_0, x_1, x_2 \dots$ gets closer and closer to a specific, finite value (the true root).
* **Divergent:** When the sequence of approximations gets further and further away from the root, often heading towards infinity.
* **Oscillating / Non-convergent:** When the approximations bounce back and forth between values without settling on a single root.

---

## 8. Core Theory

### 8.1 Locating Roots using the Sign Change Rule

**The Rule:**
If $f(x)$ is a continuous function, and $f(a)$ and $f(b)$ have opposite signs (one is positive, one is negative), then there must be at least one root of $f(x) = 0$ in the interval between $a$ and $b$.

**Plain-English Meaning:**
If a line is drawn without taking your pen off the page, and it goes from below the x-axis to above the x-axis, it *must* have crossed the x-axis somewhere in between.

**Conditions and Restrictions:**
1. The function **must be continuous** in that interval.
2. If there is no sign change, it doesn't necessarily mean there are no roots. The curve could dip down, touch or cross the axis twice, and come back up. An even number of roots in an interval will result in no sign change.

[VISUAL PLACEHOLDER: A21NumericalMethodsTikZ-001 | Source: PowerPoint slide 5 | Insert from A21_numerical_methods_tikz.md | Purpose: Show why the sign change rule fails if the function is not continuous (e.g., an asymptote jumping from negative to positive without crossing zero).]

[VISUAL PLACEHOLDER: A21NumericalMethodsTikZ-002 | Source: PowerPoint slide 6 | Insert from A21_numerical_methods_tikz.md | Purpose: Show why no sign change does not guarantee no roots (e.g., a parabola crossing the axis twice within the interval).]

**Example:**
Show that $f(x) = e^x + 2x - 3$ has a root between $x = 0.5$ and $x = 0.6$.

*Step 1: Substitute the values into the function.*
$f(0.5) = e^{0.5} + 2(0.5) - 3 = -0.351...$ (Negative)
$f(0.6) = e^{0.6} + 2(0.6) - 3 = 0.022...$ (Positive)

*Step 2: Write the concluding statement.*
"Because there is a change in sign, and $f(x)$ is continuous, there is a root for $f(x)$ between $0.5$ and $0.6$."

> **Warning:** You **must** state that the function is continuous. Examiners actively look for the word "continuous" in the mark scheme. If you omit it, you will lose the final reasoning mark.

---

### 8.2 Proving a Solution to a Given Accuracy

Sometimes an exam question will say: *"Given that the root is $\alpha$, show that $\alpha = 2.307$ correct to 3 decimal places."*

You cannot just plug $2.307$ into the function. Instead, you must find the upper and lower bounds that would round to $2.307$, and look for a sign change between them.

**Method:**
1. Find the lower bound: $2.3065$
2. Find the upper bound: $2.3075$
3. Substitute both into $f(x)$.
4. Show the sign change and state the conclusion.

**Example:**
Let $g(x) = e^{x-1} + x - 6$. Show that the root $\alpha = 2.307$ to 3 decimal places.

$g(2.3065) = e^{2.3065-1} + 2.3065 - 6 = -2.75 \times 10^{-4}$ (Negative)
$g(2.3075) = e^{2.3075-1} + 2.3075 - 6 = 4.42 \times 10^{-3}$ (Positive)

"There is a change in sign, and $g(x)$ is continuous. Therefore, the root lies in the interval $[2.3065, 2.3075]$, hence $\alpha = 2.307$ correct to 3 decimal places."

---

### 8.3 Iteration Methods

To solve $f(x) = 0$ using iteration, we rearrange the equation into the form $x = g(x)$. 
We then turn this into an iterative formula:
$$x_{n+1} = g(x_n)$$

**How to rearrange:**
There are often multiple ways to rearrange an equation to make $x$ the subject. The exam question will usually give you the target formula, and you have to prove how to get there.

**Example:**
Show that $x^3 + 3x^2 + 4x - 12 = 0$ can be rearranged into $x = \sqrt{\frac{4(3-x)}{3+x}}$.

*Exam Technique:* Work backwards from the target!
If $x = \sqrt{\frac{12-4x}{3+x}}$
Square both sides: $x^2 = \frac{12-4x}{3+x}$
Multiply up: $x^2(3+x) = 12-4x$
Expand: $3x^2 + x^3 = 12 - 4x$
Rearrange to equal zero: $x^3 + 3x^2 + 4x - 12 = 0$. 
Now write these steps in forward order for your final answer.

**Using the Calculator for Iteration:**
If the formula is $x_{n+1} = \ln(6 - x_n) + 1$ and $x_0 = 2$:
1. Type `2` and press `=` (This stores 2 as `ANS`).
2. Type `ln(6 - ANS) + 1` and press `=`. This gives $x_1 = 2.3863$.
3. Press `=` again to get $x_2 = 2.2847$.
4. Press `=` again to get $x_3 = 2.3125$.

> **Exam Technique:** Always write out the full substitution for $x_1$ to guarantee the method mark. E.g., write $x_1 = \ln(6 - 2) + 1 = 2.3863$. For $x_2$ and $x_3$, you can just write down the final values straight from your calculator.

---

### 8.4 Staircase and Cobweb Diagrams

Iteration can be visualised graphically. Solving $x = g(x)$ is the same as finding the intersection of two graphs:
1. $y = x$ (a diagonal straight line)
2. $y = g(x)$ (the curve)

The iterative process $x_{n+1} = g(x_n)$ involves:
1. Starting at $x_0$ on the x-axis.
2. Going vertically to the curve $y = g(x)$ to find the output.
3. Going horizontally to the line $y = x$ to turn that output into the new input ($x_1$).
4. Repeating the process (Curve $\rightarrow$ Line $\rightarrow$ Curve $\rightarrow$ Line).

Depending on the gradient of the curve near the root, this creates two types of patterns:

**1. Staircase Diagram:**
The lines form a staircase shape. If it moves towards the intersection, it is a **converging staircase**. If it moves away, it is a **diverging staircase**.

[VISUAL PLACEHOLDER: A21NumericalMethodsSVG-001 | Source: PowerPoint slide 14 | Insert from A21_numerical_methods_svg.md | Purpose: Show a converging staircase diagram mapping x0 to x1 to x2.]

**2. Cobweb Diagram:**
The lines spiral inwards around the intersection point, looking like a spider's web. This happens when the gradient of the curve is negative near the root. This is a **converging cobweb**.

[VISUAL PLACEHOLDER: A21NumericalMethodsSVG-002 | Source: PowerPoint slide 15 | Insert from A21_numerical_methods_svg.md | Purpose: Show a converging cobweb diagram spiralling inwards.]

**When Iteration Fails:**
If the curve is too steep (gradient $> 1$ or $< -1$), the staircase or cobweb will spiral outwards, getting further away from the root. We say the iteration **diverges** or is **non-convergent**.

---

### 8.5 The Newton-Raphson Method

The Newton-Raphson method is a much faster, more powerful numerical method for finding roots. Instead of rearranging the equation, it uses **differentiation** to follow the tangents of the curve down to the x-axis.

**The Formula (Given in the Formula Booklet):**
$$x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$$

**How it works graphically:**
1. Start at an initial guess $x_0$.
2. Go up to the curve to find the point $(x_0, f(x_0))$.
3. Draw a tangent to the curve at that point.
4. Where the tangent crosses the x-axis is your new, better approximation, $x_1$.
5. Repeat.

[VISUAL PLACEHOLDER: A21NumericalMethodsSVG-003 | Source: PowerPoint slide 19 | Insert from A21_numerical_methods_svg.md | Purpose: Show the Newton-Raphson tangent dropping from the curve to the x-axis to find x1.]

[INTERACTIVE PLACEHOLDER: A21NumericalMethodsWidget-001 | Source: AI-proposed teaching enhancement, not present in supplied lesson evidence | Insert from A21_numerical_methods_widgets.md | Purpose: Allow the student to drag x0 and see how the tangent projects down to create x1, demonstrating rapid convergence.]

**When Newton-Raphson Fails:**
1. **Stationary Points:** If your starting value $x_0$ (or any subsequent $x_n$) is at a stationary point (a maximum or minimum), the gradient $f'(x_n) = 0$. The tangent is perfectly horizontal and will *never* cross the x-axis. Mathematically, you get a "divide by zero" error in the formula.
2. **Divergence / Oscillation:** Sometimes the tangents bounce you further and further away from the root, or trap you in an infinite loop between two values.

[VISUAL PLACEHOLDER: A21NumericalMethodsTikZ-003 | Source: PowerPoint slide 26 | Insert from A21_numerical_methods_tikz.md | Purpose: Show a horizontal tangent at a minimum point failing to cross the x-axis.]

```
```markdown
## 9. Visual Asset Integration

* **[VISUAL PLACEHOLDER: A21NumericalMethodsTikZ-001]**
  * **Source:** PowerPoint slide 5
  * **Explanation:** Shows the graph of $y = 1/x$. It demonstrates that a sign change between $x = -1$ and $x = 1$ does not mean there is a root, because the function has a vertical asymptote and is not continuous.
  * **Action:** Rebuilt in TikZ for precise mathematical rendering.

* **[VISUAL PLACEHOLDER: A21NumericalMethodsTikZ-002]**
  * **Source:** PowerPoint slide 6
  * **Explanation:** Shows a parabola that crosses the x-axis twice within a given interval. Both the start and end points of the interval are negative, showing that a lack of sign change does not guarantee a lack of roots.
  * **Action:** Rebuilt in TikZ.

* **[VISUAL PLACEHOLDER: A21NumericalMethodsSVG-001]**
  * **Source:** PowerPoint slide 14
  * **Explanation:** A staircase diagram showing the iteration $x_{n+1} = \sqrt{x_n + 1}$. It traces the path from $x_0$ to the curve, across to $y=x$, and back to the curve, converging on the root.
  * **Action:** Rebuilt in SVG for clean web scaling.

* **[VISUAL PLACEHOLDER: A21NumericalMethodsSVG-002]**
  * **Source:** PowerPoint slide 15
  * **Explanation:** A cobweb diagram showing the iteration $x_{n+1} = \frac{1}{x_n - 1}$. It spirals inwards towards the intersection of the curve and $y=x$.
  * **Action:** Rebuilt in SVG.

* **[VISUAL PLACEHOLDER: A21NumericalMethodsSVG-003]**
  * **Source:** PowerPoint slide 19
  * **Explanation:** Demonstrates the Newton-Raphson method. Shows the curve $y=f(x)$, a starting point $x_0$, and the tangent line dropping down to intersect the x-axis at $x_1$.
  * **Action:** Rebuilt in SVG.

* **[VISUAL PLACEHOLDER: A21NumericalMethodsTikZ-003]**
  * **Source:** PowerPoint slide 26
  * **Explanation:** Shows a curve with a minimum turning point on the x-axis. The tangent is horizontal, demonstrating why the Newton-Raphson method fails (division by zero) if $x_0$ is a stationary point.
  * **Action:** Rebuilt in TikZ.

## 10. Interactive Learning Widgets

* **[INTERACTIVE PLACEHOLDER: A21NumericalMethodsWidget-001]**
  * **Source:** AI-proposed teaching enhancement, not present in supplied lesson evidence.
  * **Purpose:** To help students intuitively grasp how the Newton-Raphson method uses tangents to find roots.
  * **What it lets the learner change:** The user can drag the starting point $x_0$ along the x-axis.
  * **What updates:** The tangent line dynamically redraws, and the new intersection point $x_1$ updates instantly.
  * **What the learner should notice:** They should notice that if they place $x_0$ near a turning point, $x_1$ shoots off to infinity. If they place it near the root, $x_1$ jumps extremely close to the true root.
  * **Exam connection:** Helps students understand *why* $f'(x_n) = 0$ causes the method to fail, which is a common 1-mark explanation question.

## 11. Worked Examples

### Worked Example 1: Rearranging for Iteration
**Source:** Lesson transcript and annotated slides.
**Question:** Show that the equation $x^3 + 3x^2 + 4x - 12 = 0$ can be rearranged into the iterative formula $x_{n+1} = \sqrt{\frac{4(3-x_n)}{3+x_n}}$.

**Method:**
When asked to show a specific rearrangement, it is often easiest to work backwards from the target on a piece of scrap paper, and then write your final answer forwards.

*Scrap paper working (backwards):*
Target: $x = \sqrt{\frac{12-4x}{3+x}}$
Square both sides: $x^2 = \frac{12-4x}{3+x}$
Multiply by $(3+x)$: $3x^2 + x^3 = 12 - 4x$
Rearrange to equal 0: $x^3 + 3x^2 + 4x - 12 = 0$

*Official Exam Answer (forwards):*
$$x^3 + 3x^2 + 4x - 12 = 0$$
Move the $4x$ and $-12$ to the other side:
$$x^3 + 3x^2 = 12 - 4x$$
Factorise $x^2$ on the left, and $4$ on the right:
$$x^2(x + 3) = 4(3 - x)$$
Divide by $(x + 3)$:
$$x^2 = \frac{4(3 - x)}{x + 3}$$
Square root both sides:
$$x = \sqrt{\frac{4(3 - x)}{3 + x}}$$
Therefore, the iterative formula is $x_{n+1} = \sqrt{\frac{4(3-x_n)}{3+x_n}}$.

### Worked Example 2: Applying the Newton-Raphson Method
**Source:** Lesson transcript and Edexcel FP1 June 2013(R) Q3c.
**Question:** The equation $f(x) = \frac{1}{2}x^4 - x^3 + x - 3 = 0$ has a root $\beta$ in the interval $[-2, -1]$. Taking $-1.5$ as a first approximation to $\beta$, apply the Newton-Raphson process once to obtain a second approximation to $\beta$. Give your answer to 2 decimal places.

**Method:**
*Step 1: Find the derivative, $f'(x)$.*
$$f(x) = \frac{1}{2}x^4 - x^3 + x - 3$$
$$f'(x) = 2x^3 - 3x^2 + 1$$

*Step 2: State the Newton-Raphson formula.*
$$x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$$

*Step 3: Substitute $x_0 = -1.5$ into the formula.*
$$x_1 = -1.5 - \frac{\frac{1}{2}(-1.5)^4 - (-1.5)^3 + (-1.5) - 3}{2(-1.5)^3 - 3(-1.5)^2 + 1}$$

*Step 4: Calculate the value.*
Using the calculator `ANS` button method:
Type `-1.5` and press `=`.
Type `ANS - (0.5*ANS^4 - ANS^3 + ANS - 3) / (2*ANS^3 - 3*ANS^2 + 1)`
$$x_1 = -1.3875$$
Rounding to 2 decimal places:
$$x_1 = -1.39$$

### Worked Example 3: Numerical Methods in Modelling
**Source:** Lesson transcript (Textbook example).
**Question:** The price of a car in £s, $x$ years after purchase, is modelled by the function $f(x) = 15000(0.85)^x - 1000\sin(x)$ for $x > 0$. 
a) Show that $f(x)$ has a root between 19 and 20.
b) Criticise this model with respect to the value of the car as it gets older.

**Method:**
*Part (a):*
Ensure your calculator is in **Radians** mode (because the function involves calculus/trig later in the full question, and $x$ is not explicitly in degrees).
$$f(19) = 15000(0.85)^{19} - 1000\sin(19) = 534.11...$$ (Positive)
$$f(20) = 15000(0.85)^{20} - 1000\sin(20) = -331.55...$$ (Negative)
"There is a change in sign, and $f(x)$ is continuous, so there is a root between $x = 19$ and $x = 20$."

*Part (b):*
The root represents the time when the car's value becomes £0. 
"For some values of $x$ (e.g., $x=20$), the car's value becomes negative. In reality, a car cannot have a negative value, so this model is not reasonable for cars that are approximately 20 or more years old."

## 12. Common Mistakes and Exam Traps

1. **Forgetting the word "Continuous":** When using the sign change rule, you will lose the final reasoning mark if you do not explicitly state that $f(x)$ is continuous.
2. **Calculator in Degrees Mode:** If a numerical methods question involves trigonometric functions (like $\sin x$ or $\cos x$) and you are asked to differentiate it for Newton-Raphson, your calculator **must** be in Radians mode. Standard derivatives of trig functions only work in radians.
3. **Not showing the first substitution:** In iteration and Newton-Raphson questions, examiners need to see your method. Always write out the formula with $x_0$ substituted in before writing the final answer from your calculator.
4. **Rounding too early:** When doing multiple iterations, never round your intermediate answers and type them back in. Always use the `ANS` button on your calculator to maintain full precision until the final step.
5. **Misinterpreting "Accuracy to 3 decimal places":** If asked to prove a root is $1.272$ to 3 decimal places, do not substitute $1.272$. You must test the bounds $1.2715$ and $1.2725$ and look for a sign change.

## 13. Practice Questions

**Question 1 (Newton-Raphson & Failure)**
Let $f(x) = 3x^2 - \frac{11}{x^2}$.
a) Taking $1.4$ as a first approximation to $\alpha$, apply the Newton-Raphson procedure once to $f(x)$ to obtain a second approximation to $\alpha$, giving your answer to 3 decimal places.
b) Explain why, for this question, the Newton-Raphson method cannot be used with $x_1 = 0$.

**Question 2 (Differentiation & Iteration)**
The curve $C$ has equation $y = x^x$, for $x > 0$.
a) Find, by firstly taking logarithms, the x-coordinate of the turning point of $C$.
b) The point $P(\alpha, 2)$ lies on $C$. Show that $1.5 < \alpha < 1.6$.
c) A possible iteration formula to find $\alpha$ is $x_{n+1} = 2x_n^{1-x_n}$. Using $x_1 = 1.5$, find $x_4$ to 3 decimal places.
d) Describe the long-term behaviour of $x_n$.

## 14. Worked Solutions

**Solution to Question 1:**
a) Rewrite $f(x)$ using negative indices: $f(x) = 3x^2 - 11x^{-2}$.
Differentiate to find $f'(x)$:
$f'(x) = 6x + 22x^{-3}$
State the Newton-Raphson formula:
$x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$
Substitute $x_0 = 1.4$:
$x_1 = 1.4 - \frac{3(1.4)^2 - 11(1.4)^{-2}}{6(1.4) + 22(1.4)^{-3}}$
$x_1 = 1.384$ (to 3 d.p.)

b) If $x_1 = 0$, we must evaluate $f'(0)$.
$f'(0) = 6(0) + 22(0)^{-3}$, which is undefined (division by zero). 
Alternatively, state: "There is a stationary point at $x=0$, so the tangent to the curve is horizontal and would not meet the x-axis."

**Solution to Question 2:**
a) $y = x^x$
Take natural logs of both sides:
$\ln y = \ln(x^x)$
$\ln y = x \ln x$
Differentiate implicitly with respect to $x$ (using the product rule on the right):
$\frac{1}{y} \frac{dy}{dx} = (1)(\ln x) + (x)(\frac{1}{x})$
$\frac{1}{y} \frac{dy}{dx} = \ln x + 1$
$\frac{dy}{dx} = y(\ln x + 1)$
For a turning point, $\frac{dy}{dx} = 0$:
$y(\ln x + 1) = 0$
Since $y = x^x$ and $x > 0$, $y$ cannot be 0.
Therefore, $\ln x + 1 = 0 \Rightarrow \ln x = -1 \Rightarrow x = e^{-1} \approx 0.3679$.

b) $P(\alpha, 2)$ lies on $C$, so $2 = \alpha^\alpha$.
Let $g(x) = x^x - 2$. We want to find the root of $g(x) = 0$.
$g(1.5) = 1.5^{1.5} - 2 = -0.162...$ (Negative)
$g(1.6) = 1.6^{1.6} - 2 = 0.121...$ (Positive)
There is a change in sign, and $g(x)$ is continuous, so $1.5 < \alpha < 1.6$.

c) $x_1 = 1.5$
$x_2 = 2(1.5)^{1-1.5} = 1.63299...$
$x_3 = 2(1.63299)^{1-1.63299} = 1.4663...$
$x_4 = 2(1.4663)^{1-1.4663} = 1.673$ (to 3 d.p.)

d) Looking at the sequence: $1.5 \rightarrow 1.63 \rightarrow 1.46 \rightarrow 1.67 \rightarrow 1.41 \rightarrow 1.73...$
The values are getting further apart. The long-term behaviour of $x_n$ is **divergent** (or non-convergent).

## 15. Exam Technique Notes
* **The `ANS` Button is your best friend:** In the exam, type your $x_0$ value and press `=`. Then type the iterative formula using `ANS` instead of $x$. Every time you press `=`, you get the next iteration. This prevents rounding errors and saves massive amounts of time.
* **Show your working:** Even if you use the `ANS` trick, write down the formula with the numbers substituted in for the *first* iteration ($x_1$). This secures your method marks if you make a typo on the calculator.
* **Check your mode:** If the function has $\sin$, $\cos$, or $\tan$, and you are differentiating it for Newton-Raphson, your calculator must be in **Radians**.

## 16. Syllabus Gap Check
* **Fully Covered:** 
  * A21-NUM-LO001 (Locating roots via sign change)
  * A21-NUM-LO002 (Iterative methods and Newton-Raphson)
  * A21-NUM-LO004 (Numerical methods in context/modelling)
* **Missing LO IDs:** 
  * A21-NUM-LO003 (Numerical integration via the trapezium rule). *Note: This was not present in the supplied lesson transcript or slides and must be covered in a separate lesson.*
* **Off-spec content removed:** None. The transcript perfectly matched the CCEA A21 requirements for roots and iteration.

## 17. Recommended Enhancements Not in the Evidence
* **Asset ID:** A21NumericalMethodsWidget-001
* **Type:** Interactive HTML/JS Widget
* **Why it was added:** The Newton-Raphson method is highly visual. Allowing a student to drag the starting point $x_0$ and see the tangent line project down to the x-axis builds a much deeper understanding of *why* the formula works, and *why* it fails at stationary points, compared to static images.
* **Supported LO ID:** A21-NUM-LO002
* **Essential or Optional:** Optional but highly recommended for conceptual understanding.

## 18. Supplementary Sources Used
No external sources were used. All content was derived from the provided transcript, PowerPoint slides, and CCEA Specification Map.

## 19. Final Student Checklist
* [ ] I can prove a root lies in a given interval by showing a sign change.
* [ ] I remember to state that the function is continuous when using the sign change rule.
* [ ] I can prove a root is correct to a specific number of decimal places by testing the upper and lower bounds.
* [ ] I can rearrange an equation $f(x) = 0$ into an iterative formula $x_{n+1} = g(x_n)$.
* [ ] I can use my calculator efficiently to find successive iterations.
* [ ] I can interpret staircase and cobweb diagrams to determine if an iteration converges or diverges.
* [ ] I can apply the Newton-Raphson formula $x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$.
* [ ] I understand graphically how the Newton-Raphson method uses tangents.
* [ ] I can explain why the Newton-Raphson method fails if $x_0$ is a stationary point.
```
