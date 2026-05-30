import { Module } from '@/core/types';

const LESSON_CONTENT = `
# 1. Lesson Title
**Topic:** Numerical Methods
**Unit:** A21 Pure Mathematics

## 2. Specification Alignment

| LO ID | CCEA Specification Point |
|---|---|
| A21-NUM-LO001 | Locate roots of $f(x)=0$ by considering changes of sign of $f(x)$ |
| A21-NUM-LO002 | Solve equations approximately using simple iterative methods, for example the Newton-Raphson method |
| A21-NUM-LO004 | Use numerical methods to solve problems in context |

## 3. Learning Objectives
* Locate the roots of an equation $f(x) = 0$ by demonstrating a change of sign over a continuous interval.
* Prove that a root is correct to a given degree of accuracy (e.g., to 3 decimal places).
* Rearrange an equation $f(x) = 0$ into the iterative form $x_{n+1} = g(x_n)$ and use it to find approximate solutions.
* Draw and interpret staircase and cobweb diagrams to show whether an iteration converges or diverges.
* Apply the Newton-Raphson method to approximate roots, and understand graphically how and why it works.
* Identify situations where the Newton-Raphson method or iterative methods fail.
* Apply numerical methods to real-world modelling contexts.

## 4. Big Picture Explanation
In mathematics, we are used to solving equations exactly. If you have $x^2 - 5x + 6 = 0$, you can factorise it. If you have $e^x = 5$, you can use natural logarithms to find $x = \\ln 5$. 

However, what happens if you need to solve $x - \\cos(x) = 0$? Or $x^3 + 2x^2 - 3x + 4 = 0$? 
There is no simple algebraic way to rearrange $x - \\cos(x) = 0$ to get "$x = \\dots$". The exact solution cannot be expressed using standard algebraic functions. 

Instead of giving up, we use **Numerical Methods**. These are systematic mathematical processes that allow us to find *approximate* solutions to equations. By repeating (iterating) these processes, we can get an answer that is as accurate as we need it to be.

## 5. Core Theory

### 5.1 Locating Roots using the Sign Change Rule

**The Rule:**
If $f(x)$ is a continuous function, and $f(a)$ and $f(b)$ have opposite signs (one is positive, one is negative), then there must be at least one root of $f(x) = 0$ in the interval between $a$ and $b$.

**Conditions and Restrictions:**
1. The function **must be continuous** in that interval.
2. If there is no sign change, it doesn't necessarily mean there are no roots. An even number of roots in an interval will result in no sign change.

[VISUAL PLACEHOLDER: A21NumericalMethodsTikZ001 | Discontinuous Function Sign Change]
*Notice how $y = 1/x$ goes from negative to positive between $x=-1$ and $x=1$, but never crosses $y=0$ because of the asymptote. It is not continuous.*

[VISUAL PLACEHOLDER: A21NumericalMethodsTikZ002 | No Sign Change But Has Roots]
*Notice how the interval bounds are both negative, giving no sign change, but the parabola crosses the axis twice.*

> **Warning:** You **must** state that the function is continuous. Examiners actively look for the word "continuous" in the mark scheme. If you omit it, you will lose the final reasoning mark.

### 5.2 Proving a Solution to a Given Accuracy
To prove a root is $2.307$ to 3 decimal places, test the lower and upper bounds: $2.3065$ and $2.3075$. Find a sign change between them, and conclude the root lies in this interval.

### 5.3 Iteration Methods
To solve $f(x) = 0$ using iteration, we rearrange the equation into the form $x = g(x)$. 
We then turn this into an iterative formula: $x_{n+1} = g(x_n)$

### 5.4 Staircase and Cobweb Diagrams
Solving $x = g(x)$ is the same as finding the intersection of two graphs: $y = x$ and $y = g(x)$.

**1. Staircase Diagram:**
The lines form a staircase shape. If it moves towards the intersection, it is a **converging staircase**.

[VISUAL PLACEHOLDER: A21NumericalMethodsSVG001 | Staircase Diagram (Converging)]

**2. Cobweb Diagram:**
The lines spiral inwards around the intersection point, looking like a spider's web. This happens when the gradient of the curve is negative near the root.

[VISUAL PLACEHOLDER: A21NumericalMethodsSVG002 | Cobweb Diagram (Converging)]

### 5.5 The Newton-Raphson Method
Instead of rearranging the equation, it uses **differentiation** to follow the tangents of the curve down to the x-axis.

**The Formula:**
$$x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$$

[VISUAL PLACEHOLDER: A21NumericalMethodsSVG003 | Newton-Raphson Tangent (Static)]

[INTERACTIVE PLACEHOLDER: A21NumericalMethodsWidget001 | Interactive Newton-Raphson Tangent]

**When Newton-Raphson Fails:**
If your starting value $x_0$ is at a stationary point, the gradient $f'(x_n) = 0$. The tangent is perfectly horizontal and will *never* cross the x-axis (divide by zero error).

[VISUAL PLACEHOLDER: A21NumericalMethodsTikZ003 | Newton-Raphson Failure at Stationary Point]

## 6. Exam Technique Notes
* **The \`ANS\` Button is your best friend:** Type your $x_0$ value and press \`=\`. Then type the iterative formula using \`ANS\` instead of $x$. Every time you press \`=\`, you get the next iteration.
* **Show your working:** Write down the formula with the numbers substituted in for the *first* iteration ($x_1$).
* **Check your mode:** If the function has $\\sin$, $\\cos$, or $\\tan$, and you are differentiating it for Newton-Raphson, your calculator must be in **Radians**.
`;

export const A21_10_MODULE: Module = {
  id: "A21-10",
  title: "Numerical Methods",
  type: "Pure Mathematics",
  overview: "Locate roots using sign changes, iteration, and the Newton-Raphson method.",
  learningOutcomes: [
    { id: "A21-NUM-LO001", text: "Roots by sign change" },
    { id: "A21-NUM-LO002", text: "Iterative methods & Newton-Raphson" },
    { id: "A21-NUM-LO004", text: "Numerical methods in context" }
  ],
  lessons: [
    {
      id: "A21-10-Lesson",
      title: "Numerical Methods",
      visualId: "A21-NumericalMethods",
      type: "Pure Mathematics",
      content: LESSON_CONTENT,
      loIds: ["A21-NUM-LO001", "A21-NUM-LO002", "A21-NUM-LO004"]
    }
  ]
};
