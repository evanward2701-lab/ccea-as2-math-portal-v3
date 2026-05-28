# Quadratic Functions – Solving, Graphs and Applications

**Unit:** CCEA AS1 Pure Mathematics  
**Source lesson PDF:** QUADRATIC FUNCTIONS.pdf  
**Date generated:** 22 May 2026

This lesson pack expands the material from the uploaded PDF into a full set of notes for independent study.  The structure follows the CCEA specification and elaboration document for AS1 Pure Mathematics【517932045546412†L474-L492】【202274881086976†L182-L213】.  Citations refer to these documents.  Diagrams and widgets are provided in separate files and referenced via placeholders.

---

## 1 Specification Alignment

The table below links each relevant specification point to the elaboration guidance.  It notes whether the topic is fully covered in this lesson and lists helpful visuals or widgets.  Specification statements are paraphrased from the official document【517932045546412†L474-L492】.

| Specification point | Elaboration guidance | Covered? | Where in notes | Gap/action | Visual or widget |
| --- | --- | --- | --- | --- | --- |
| Work with quadratic functions and their graphs – recognise the parabola shape, effect of the coefficient a and constant c, identify the turning point and axis of symmetry, interpret the number of real roots | Be aware of the conditions for distinct and non‑real roots; find the turning point by completing the square【202274881086976†L182-L213】. | Yes | §6.1 | None | TikZ‑001, MMD‑002, WIDGET‑001 |
| Solve quadratic equations by factorisation, completing the square and the quadratic formula | Solve equations where the unknown appears in a function; understand when to use each method【202274881086976†L195-L206】. | Yes | §6.2 | None | MMD‑001 |
| Use the discriminant to determine the number and type of real roots | Use b² − 4ac to classify the roots; apply inequalities in parameter questions【202274881086976†L190-L213】. | Yes | §6.3 | None | TIKZ‑002, WIDGET‑002 |
| Solve simultaneous equations (one linear and one quadratic) and interpret graphically | Use the discriminant to identify tangency or non‑intersection【202274881086976†L190-L213】. | Yes | §6.5 | None | — |
| Solve quadratic inequalities and interpret graphically | Solve linear and quadratic inequalities and interpret the solution on a number line【202274881086976†L233-L243】. | Yes | §6.4 | None | SVG‑001, WIDGET‑001 |
| Manipulate polynomials; perform simple algebraic division by a linear factor; apply the remainder and factor theorems; factorise cubic expressions | Perform long division, use the remainder theorem, identify factors, and fully factorise cubic polynomials【202274881086976†L245-L256】. | Yes | §6.6 – §6.7 | None | WIDGET‑003 |
| Sketch curves defined by simple equations, including quadratics | Find roots, intercepts, turning points and decide whether the graph crosses the x‑axis【202274881086976†L260-L265】. | Yes | Throughout the notes | None | TIKZ‑001, WIDGET‑001 |

---

## 2 Learning Objectives

By the end of this lesson you should be able to:

1. Describe the general form of a quadratic function \(y = ax^2 + bx + c\) and explain how the values of \(a\), \(b\) and \(c\) affect the graph.
2. Identify the turning point, axis of symmetry, y‑intercept and x‑intercepts of a quadratic graph.
3. Solve quadratic equations using factorisation, completing the square and the quadratic formula, choosing the appropriate method for a given equation.
4. Use the discriminant \(D = b^2 - 4ac\) to classify equations as having two, one or no real roots, and apply it to parameter problems.
5. Solve quadratic inequalities and represent solutions on a number line or in interval notation.
6. Determine the points of intersection between a line and a quadratic curve, identify tangency or lack of intersection, and interpret solutions in modelling contexts.
7. Perform polynomial division by a linear factor, use the remainder and factor theorems, and factorise cubic polynomials completely.
8. Avoid common errors such as sign mistakes, dropping the ± symbol and ignoring context.

---

## 3 Compact Prerequisite Recap

* **Linear functions:** The graph of \(y = mx + c\) is a straight line.  Gradient \(m\) controls steepness; \(c\) is the y‑intercept.
* **Factorising simple quadratics:** To factorise \(x^2 + bx + c\), find two numbers that multiply to \(c\) and sum to \(b\).  For example \(x^2 + 5x + 6 = (x+2)(x+3)\).
* **Solving by factorising:** Once the quadratic is set equal to zero, solve each factor equal to zero to find the roots.
* **Graphs of quadratics:** Positive \(a\) gives a U‑shaped graph; negative \(a\) gives an n‑shaped graph.  The constant \(c\) is the y‑intercept.  Roots correspond to x‑intercepts.
* **Inequalities:** When solving inequalities, if you multiply or divide by a negative number you must reverse the inequality sign.

---

## 4 Big Picture Explanation

Quadratic functions are fundamental in algebra and appear across mathematics and physics.  In AS‑level Pure Mathematics you will solve quadratic equations, sketch their graphs, and use them in contexts such as motion and optimisation.  The discriminant allows you to classify the nature of the roots without solving the equation fully, and polynomial division extends these ideas to higher‑degree polynomials.  Mastering quadratics now prepares you for calculus later in the course.  Exam questions often ask you to explain your reasoning clearly, choose an appropriate method and interpret solutions in context.

---

## 5 Key Definitions and Notation

* **Quadratic function:** A function of the form \(f(x) = ax^2 + bx + c\) with \(a \neq 0\).  Its graph is a parabola.
* **Coefficient \(a\):** Controls the direction and width of the parabola.  If \(a > 0\) the graph opens upwards; if \(a < 0\) it opens downwards.  A larger absolute value of \(a\) makes the graph steeper.
* **Turning point (vertex):** The maximum or minimum point of the graph.  It occurs at \(x = -b/(2a)\) and the y‑coordinate is \(f(-b/(2a))\).
* **Axis of symmetry:** The vertical line through the turning point given by \(x = -b/(2a)\).  The graph is symmetrical about this line.
* **Roots (solutions):** Values of \(x\) that satisfy \(ax^2 + bx + c = 0\).  They correspond to x‑intercepts when real.
* **Discriminant:** The expression \(D = b^2 - 4ac\).  If \(D > 0\) there are two distinct real roots, if \(D = 0\) there is one repeated real root, and if \(D < 0\) there are no real roots.
* **Polynomial division:** Dividing a polynomial \(f(x)\) by another yields a quotient \(Q(x)\) and remainder \(R\), satisfying \(f(x) = \text{divisor} \times Q(x) + R\).
* **Remainder theorem:** When dividing \(f(x)\) by \(x - a\), the remainder equals \(f(a)\).
* **Factor theorem:** \(x - a\) is a factor of \(f(x)\) if and only if \(f(a) = 0\).

---

## 6 Core Theory and Examples

### 6.1 Quadratic Functions and Graphs

A quadratic function \(y = ax^2 + bx + c\) produces a smooth, symmetrical curve called a parabola.  The sign of \(a\) determines whether the parabola opens upwards (if \(a\) is positive) or downwards (if \(a\) is negative).  The larger the absolute value of \(a\), the steeper the arms of the curve.

The key features to identify when sketching a parabola are:

1. **Direction and steepness:** Look at \(a\) to decide whether the graph opens up or down and whether it is narrow or wide.
2. **Axis of symmetry:** The line \(x = -b/(2a)\) splits the graph into two mirror images.
3. **Turning point:** This occurs at \(x = -b/(2a)\).  Substitute this value into the function to obtain the y‑coordinate.
4. **y‑intercept:** Set \(x = 0\) to find the point \((0, c)\).
5. **x‑intercepts (roots):** Solve \(ax^2 + bx + c = 0\).  The discriminant tells you how many real roots exist.

**Graph examples:**

* For \(y = x^2\) the graph opens upwards with turning point at (0, 0).  It touches the origin and has one repeated root.  The axis of symmetry is the y‑axis.
* For \(y = (x - 3)^2 - 4\), the graph opens upwards with turning point at (3, −4).  Expanding gives \(y = x^2 - 6x + 5\).  The discriminant is positive, so the graph crosses the x‑axis twice.
* For \(y = -x^2 + 2x + 1\), the graph opens downwards.  Completing the square or using \(x = -b/(2a)\) gives the turning point at (1, 2).  The discriminant is positive, so it crosses the x‑axis twice.

Remember these memory formulas:

* Axis of symmetry: \(x = -b/(2a)\).
* Turning point: \((-b/(2a),\, f(-b/(2a)))\).
* Discriminant: \(D = b^2 - 4ac\).

[VISUAL PLACEHOLDER: TIKZ‑001 | Source: AI‑proposed teaching enhancement, not present in lesson PDF | Insert from AS1_quadratic_functions_tikz.md | Purpose: illustrates different parabola shapes and turning points]

[VISUAL PLACEHOLDER: MMD‑002 | Source: AI‑proposed teaching enhancement, not present in lesson PDF | Insert from AS1_quadratic_functions_mermaid.md | Purpose: concept map linking algebraic form to graph features]

### 6.2 Solving Quadratic Equations

To solve \(ax^2 + bx + c = 0\), first rewrite the equation in standard form with one side equal to zero.  Then choose one of the following methods.

#### Factorisation

Factorising is the quickest method when the quadratic splits into two linear factors.  The steps are:

1. Write the equation in standard form \(ax^2 + bx + c = 0\).
2. Find numbers that multiply to \(a \times c\) and sum to \(b\).  Rewrite the middle term and factor by grouping.
3. Set each factor equal to zero and solve for \(x\).
4. Check your solutions in the original equation.

*Example:* Solve \(x^2 + 5x + 6 = 0\).  Factorising gives \((x+2)(x+3) = 0\), so the roots are \(x = -2\) and \(x = -3\).

#### Completing the square

Completing the square rewrites the quadratic in the form \(a(x - h)^2 + k\).  This method always works and reveals the turning point.  Steps:

1. If \(a\) is not 1, divide through by \(a\) so the coefficient of \(x^2\) is 1.
2. Take half of the coefficient of \(x\), square it, and add and subtract this square.
3. Group terms to form a perfect square and simplify the constants.
4. Solve the resulting equation by taking square roots and remember the ± symbol.

*Example:* Solve \(x^2 + 6x - 2 = 0\) by completing the square.  Write \(x^2 + 6x - 2 = (x + 3)^2 - 11\).  Set \((x + 3)^2 = 11\).  Taking the square root gives \(x + 3 = ±\sqrt{11}\), so \(x = -3 ± \sqrt{11}\).

#### Quadratic formula

When factorisation is difficult and completing the square is messy, use the quadratic formula:

\[x = ( -b ± √( b² − 4ac ) ) / (2a).\]

First compute the discriminant \(D = b^2 - 4ac\).  If \(D > 0\) there are two real solutions; if \(D = 0\) there is one repeated real solution; and if \(D < 0\) there are no real solutions.  Remember to include both the plus and minus cases.

*Example:* Solve \(2x^2 − 3x − 5 = 0\).  Here \(a = 2\), \(b = −3\), \(c = −5\).  The discriminant is 49.  Using the formula gives \(x = (3 ± 7)/4\), so \(x = 5/2\) or \(x = −1\).

#### Choosing a method

Use factorisation when the quadratic splits neatly; completing the square when you need the turning point or the discriminant is awkward; and the quadratic formula for general cases.  A flowchart in the mermaid file summarises this decision.

[VISUAL PLACEHOLDER: MMD‑001 | Source: AI‑proposed teaching enhancement, not present in lesson PDF | Insert from AS1_quadratic_functions_mermaid.md | Purpose: decision tree for choosing a solution method]

#### Common mistakes

* Not setting the equation equal to zero before solving.
* Dropping the ± sign when taking square roots.
* Sign errors in the discriminant or when expanding brackets.
* Incomplete factorisation (omitting common factors).
* Failing to check solutions in the original equation.

### 6.3 Discriminant and Roots

The discriminant \(D = b^2 - 4ac\) provides a quick way to determine how many real roots a quadratic equation has and how its graph meets the x‑axis.  The cases are:

| Discriminant | Number of real roots | Graph behaviour |
| --- | --- | --- |
| \(D > 0\) | Two distinct real roots | The parabola crosses the x‑axis twice |
| \(D = 0\) | One repeated real root | The parabola touches the x‑axis (tangent) |
| \(D < 0\) | No real roots | The parabola does not meet the x‑axis |

*Examples:* In \(x^2 + 5x + 6 = 0\) the discriminant is 1, so there are two distinct real roots (−2 and −3).  In \(2x^2 + 4x + 2 = 0\) the discriminant is 0, so there is one repeated root (−1).  In \(3x^2 + 2x + 5 = 0\) the discriminant is negative, so there are no real roots.

Parameter questions often ask you to find values of \(k\) that make \(x^2 + kx + 3 = 0\) have real roots.  Here \(D = k^2 - 12\).  Requiring \(D ≥ 0\) gives \(k ≤ -2√3\) or \(k ≥ 2√3\).

Common errors include using the wrong coefficients, forgetting that the discriminant only tells the number of real roots (not their values), and failing to state a clear conclusion.

[VISUAL PLACEHOLDER: TIKZ‑002 | Source: AI‑proposed teaching enhancement, not present in lesson PDF | Insert from AS1_quadratic_functions_tikz.md | Purpose: summarises discriminant cases with sketches]

[INTERACTIVE PLACEHOLDER: WIDGET‑002 | Source: AI‑proposed teaching enhancement, not present in lesson PDF | Insert from AS1_quadratic_functions_widgets.md | Purpose: interactively explore how changing a, b and c affects the discriminant and the graph]

### 6.4 Quadratic Inequalities

Quadratic inequalities involve expressions such as \(ax^2 + bx + c > 0\), \(< 0\), \(≥ 0\) or \(≤ 0\).  To solve them:

1. **Find the roots:** Solve the corresponding equation \(ax^2 + bx + c = 0\) to obtain critical values \(r_1\) and \(r_2\) (with \(r_1 < r_2\)).  If there is a repeated root, note its multiplicity.
2. **Draw a number line:** Mark \(r_1\) and \(r_2\).  Choose a test value in each interval (below \(r_1\), between \(r_1\) and \(r_2\), above \(r_2\)).  Substitute into \(ax^2 + bx + c\) to see if the result is positive or negative.
3. **Select the intervals** where the inequality holds.  Use open circles for strict inequalities (\(<\), \(>\)) and closed circles for non‑strict inequalities (\(≤\), \(≥\)).
4. **Write the solution set** in interval notation.

General patterns emerge depending on the sign of \(a\) and the direction of the inequality:

* If \(a > 0\) and you require \(ax^2 + bx + c > 0\), the solution lies **outside** the roots (below \(r_1\) or above \(r_2\)).
* If \(a > 0\) and you require \(ax^2 + bx + c < 0\), the solution lies **between** the roots (between \(r_1\) and \(r_2\)).
* If \(a < 0\) and you require \(ax^2 + bx + c > 0\), the solution lies **between** the roots.
* If \(a < 0\) and you require \(ax^2 + bx + c < 0\), the solution lies **outside** the roots.

If the discriminant is zero there is only one critical value.  For a strict inequality like \(ax^2 + bx + c > 0\), the inequality holds for all \(x\) except the repeated root.  For a non‑strict inequality like \(≥ 0\), the repeated root itself is included.

*Examples:* Solve \(x^2 − 4x − 5 < 0\).  Factorising gives roots at −1 and 5.  Because \(a > 0\) and the inequality is \(< 0\), the solution is between the roots: \(−1 < x < 5\).  Solve \(2x^2 + 3x − 2 > 0\).  The roots are −2 and 0.5.  The solution is outside these values: \(x < −2\) or \(x > 0.5\).  Solve \(3x^2 − 2x − 1 ≤ 0\).  The roots are −1/3 and 1.  Because \(a > 0\) and \(≤ 0\), include the roots and the interval between them: \(−1/3 ≤ x ≤ 1\).

Errors to avoid include choosing the wrong interval without testing a value, forgetting to reverse the inequality when multiplying or dividing by a negative number, and not distinguishing between strict and non‑strict inequalities.

[VISUAL PLACEHOLDER: SVG‑001 | Source: lesson PDF p. 4 | Insert from AS1_quadratic_functions_svg.md | Purpose: visual summary of the sign patterns for quadratic inequalities]

[INTERACTIVE PLACEHOLDER: WIDGET‑001 | Source: AI‑proposed teaching enhancement, not present in lesson PDF | Insert from AS1_quadratic_functions_widgets.md | Purpose: change a, b and c and observe how the graph and inequality solution set change]

### 6.5 Intersections and Modelling

To find where a line meets a quadratic curve, set the two expressions for y equal and rearrange to form a quadratic equation.  Solve this equation for x and substitute back to find y.  The discriminant tells you whether the line cuts the curve twice (\(D > 0\)), touches it once (\(D = 0\)), or does not meet it (\(D < 0\)).

*Example:* Find the points of intersection of \(y = 2x + 3\) and \(y = x^2 − 4x + 1\).  Set \(2x + 3 = x^2 − 4x + 1\).  Rearranging gives \(x^2 − 6x − 2 = 0\).  Solving yields \(x = 3 ± √11\).  Substitute into \(y = 2x + 3\) to find \(y = 9 ± 2√11\).

Modelling questions often involve interpreting the solutions.  In the projectile example, a ball thrown upward from a height of 20 m has height \(h(t) = −5t^2 + 15t + 20\).  Setting \(h = 0\) gives \(t^2 − 3t − 4 = 0\), which solves to \(t = 4\) or \(t = −1\).  Only the positive solution has physical meaning, so the ball hits the ground after 4 seconds.  Always interpret solutions in context and reject extraneous answers.

### 6.6 Polynomial Division and Factorising Cubics

Polynomial division is the process of dividing one polynomial by another.  When the divisor is linear, the remainder is a constant.  Performing long division helps you test whether a binomial such as \(x − a\) is a factor and allows you to factorise higher‑degree polynomials.

Steps for long division by a linear factor:

1. Write the dividend in descending powers of x.  Include terms with zero coefficients if a power is missing.
2. Divide the leading term of the dividend by the leading term of the divisor to find the first term of the quotient.
3. Multiply the divisor by this term and subtract from the dividend.  Bring down the next term.
4. Repeat until the degree of the remainder is less than the degree of the divisor.
5. Check by verifying that dividend = divisor × quotient + remainder.

*Example:* Divide \(2x^3 + 3x^2 − 5x + 6\) by \(x − 2\).  The quotient is \(2x^2 + 7x + 9\) and the remainder is 24.  Therefore \(2x^3 + 3x^2 − 5x + 6 = (x − 2)(2x^2 + 7x + 9) + 24\).

To factorise a cubic polynomial, first use the factor theorem to test possible integer roots (factors of the constant term).  If \(f(a) = 0\), then \(x − a\) is a factor.  Divide the cubic by \(x − a\) to obtain a quadratic.  Factorise the quadratic and write the complete factorisation.

*Example:* Factorise \(x^3 − 6x^2 + 11x − 6\).  Testing values shows that \(f(1) = 0\).  Therefore \(x − 1\) is a factor.  Dividing by \(x − 1\) yields \(x^2 − 5x + 6\), which factorises to \((x − 2)(x − 3)\).  So \(x^3 − 6x^2 + 11x − 6 = (x − 1)(x − 2)(x − 3)\).

[INTERACTIVE PLACEHOLDER: WIDGET‑003 | Source: AI‑proposed teaching enhancement, not present in lesson PDF | Insert from AS1_quadratic_functions_widgets.md | Purpose: perform polynomial division and explore remainders and factors]

### 6.7 Factor and Remainder Theorem

The remainder theorem states that when a polynomial \(f(x)\) is divided by \(x − a\), the remainder is \(f(a)\).  The factor theorem follows: \(x − a\) is a factor of \(f(x)\) if and only if \(f(a) = 0\).  These results provide quick checks without performing full long division.

*Example:* Find the remainder when \(f(x) = 2x^3 − 5x^2 + x + 7\) is divided by \(x − 3\).  Evaluate \(f(3) = 19\), so the remainder is 19.  Determine whether \(x − 2\) is a factor of \(x^3 − 2x^2 − 3x + 2\).  Evaluate \(f(2) = −4\); since this is not zero, \(x − 2\) is not a factor.

Using the theorems to find unknown coefficients: If \(f(x) = kx^3 + kx^2 − 4x + 1\) has factor \(x − 2\), then \(f(2) = 0\).  Substituting gives \(12k − 7 = 0\), so \(k = 7/12\).  If \(f(x) = mx^3 + 2x^2 + mx + 5\) has remainder 3 when divided by \(x − 1\), then \(f(1) = 3\).  Substituting gives \(2m + 7 = 3\), so \(m = −2\).

---

## 7 Visual Asset Integration

The notes include placeholders for diagrams and flowcharts.  Each placeholder refers to a separate file containing the code for that visual.  Use the corresponding diagram file when studying or printing.

| Placeholder | Source | Purpose |
| --- | --- | --- |
| **MMD‑001** | AI‑proposed | Decision tree for selecting the solving method. |
| **MMD‑002** | AI‑proposed | Concept map linking algebraic form to graph features. |
| **TIKZ‑001** | AI‑proposed | Parabola shapes with turning points and axes of symmetry. |
| **TIKZ‑002** | AI‑proposed | Sketches of discriminant cases (two, one or no real roots). |
| **SVG‑001** | Lesson PDF | Summary of solution patterns for quadratic inequalities. |

---

## 8 Interactive Learning Widgets

Interactive widgets provide dynamic exploration.  Copy the code from the widgets file into a `.html` file and open it in a browser.

| Placeholder | Source | Description |
| --- | --- | --- |
| **WIDGET‑001** | AI‑proposed | Graph explorer.  Adjust \(a\), \(b\) and \(c\) using sliders to observe changes in the graph and inequality solution sets. |
| **WIDGET‑002** | AI‑proposed | Discriminant calculator.  Input coefficients to compute \(D\), classify the number of real roots and view a small graph. |
| **WIDGET‑003** | AI‑proposed | Polynomial division tool.  Enter coefficients of a polynomial and a divisor; it returns the quotient and remainder and checks for factors. |

---

## 9 Worked Examples

### Solving Equations

1. **Solve \(x^2 − 3x − 18 = 0\).**  Factorising gives \((x − 6)(x + 3) = 0\), so \(x = 6\) or \(x = −3\).

2. **Solve \(2x^2 + 8x + 7 = 0\).**  Divide by 2 to get \(x^2 + 4x + 3.5 = 0\).  Completing the square gives \((x + 2)^2 = 0.5\), so \(x = −2 ± √0.5\).

3. **Solve \(3x^2 − 4x − 1 = 0\).**  Using the formula: \(x = (4 ± √(16 + 12)) / 6 = (4 ± √28)/6 = (2 ± √7)/3\).

### Discriminant and Parameters

4. **Find p such that \(x^2 + px + 9 = 0\) has real roots.**  Compute \(D = p^2 − 36\).  For real roots require \(p^2 ≥ 36\), so \(p ≤ −6\) or \(p ≥ 6\).

5. **Show that \(4x^2 + 4x + 5 = 0\) has no real solutions.**  The discriminant is \(16 − 80 = −64\).  Since this is negative, there are no real roots.

### Quadratic Inequalities

6. **Solve \(x^2 + x − 12 ≤ 0\).**  Factorising gives \((x + 4)(x − 3)\).  The roots are −4 and 3.  Since \(a > 0\) and the inequality is non‑strict, the solution is between the roots inclusive: \(−4 ≤ x ≤ 3\).

7. **Solve \(3x^2 + x − 4 > 0\).**  Using the formula gives roots at 1 and −4/3.  Because \(a > 0\) and the inequality is strict, the solution is outside the roots: \(x < −4/3\) or \(x > 1\).

### Intersections and Modelling

8. **Find the points of intersection of \(y = −x + 4\) and \(y = x^2 − 2x − 3\).**  Set \(−x + 4 = x^2 − 2x − 3\) to obtain \(x^2 − x − 7 = 0\).  Solving yields \(x = (1 ± √29)/2\).  Substituting into \(y = −x + 4\) gives \(y = 4 − (1 ± √29)/2\).

9. **Projectile question:** A projectile fired from a cliff 50 m high has height \(h(t) = −4.9t^2 + 14t + 50\).  Set \(h = 0\) to find when it reaches sea level: \(4.9t^2 − 14t − 50 = 0\).  Using the formula gives \(t = [14 ± √(196 + 980)]/(9.8)\).  Simplify \(√1176 = 14√6\).  Thus \(t = (14 ± 14√6)/9.8 = (14/9.8)(1 ± √6)\).  Only the positive value has physical meaning.  Numerically, \(t ≈ 4.9\) seconds.

### Polynomial Division and Factor Theorem

10. **Divide \(3x^3 + x^2 − 10x + 8\) by \(x − 2\).**  Performing long division (or synthetic division) gives quotient \(3x^2 + 7x + 4\) and remainder 16.

11. **Factorise \(2x^3 − 9x^2 + 10x\).**  Factor out \(x\) to get \(x(2x^2 − 9x + 10)\).  Factorising the quadratic gives \((2x − 5)(x − 2)\), so the full factorisation is \(x(2x − 5)(x − 2)\).

12. **Given \(f(x) = ax^3 + 3x^2 − x + 2\) and \(x + 2\) is a factor, find \(a\).**  Substitute \(x = −2\) into \(f(x)\) to get \(f(−2) = −8a + 12 + 2 + 2 = −8a + 16\).  Set this equal to zero: \(−8a + 16 = 0\).  Therefore \(a = 2\).

---

## 10 Common Mistakes and Exam Traps

* **Failing to write the quadratic in standard form** before solving.
* **Omitting the ±** sign when taking square roots.
* **Sign errors** in the discriminant and when expanding brackets.
* **Not testing intervals** when solving inequalities, leading to wrong solution sets.
* **Forgetting to reverse the inequality** when multiplying or dividing by a negative number.
* **Ignoring units or context** in modelling problems – reject non‑physical solutions.
* **Mixing up x − a and x + a** when applying the factor theorem.

---

## 11 Practice Questions

Try these questions before looking at the solutions.

1. Solve \(x^2 − 3x − 18 = 0\) by factorising.
2. Solve \(2x^2 + 8x + 7 = 0\) by completing the square.
3. Solve \(3x^2 − 4x − 1 = 0\) using the quadratic formula.
4. For what values of \(p\) does \(x^2 + px + 9 = 0\) have real roots?
5. Show that \(4x^2 + 4x + 5 = 0\) has no real solutions.
6. Solve \(x^2 + x − 12 ≤ 0\).
7. Solve \(3x^2 + x − 4 > 0\).
8. Find the points of intersection of \(y = −x + 4\) and \(y = x^2 − 2x − 3\).
9. A projectile fired from a cliff 50 m above the sea follows \(h(t) = −4.9t^2 + 14t + 50\).  When does it reach sea level?
10. Divide \(3x^3 + x^2 − 10x + 8\) by \(x − 2\).
11. Factorise \(2x^3 − 9x^2 + 10x\).
12. Given \(f(x) = ax^3 + 3x^2 − x + 2\) and \(x + 2\) is a factor, find \(a\).

---

## 12 Worked Solutions

Solutions to the practice questions are provided in §9.  Ensure you attempt the questions yourself before consulting the worked examples.

---

## 13 Exam Technique Notes

* Show all steps clearly, even if the arithmetic is simple.  Examiners award marks for the method.
* State the discriminant when classifying roots and interpret its sign.
* Use exact values (fractions or square roots) unless asked to provide approximations.
* Present inequalities using interval notation and indicate whether endpoints are included.
* Interpret solutions in context, especially in modelling problems.  Reject non‑physical answers.
* Label key features when sketching graphs: turning points, intercepts and axis of symmetry.

---

## 14 Syllabus Gap Check

This lesson covers all relevant bullet points from the CCEA specification for AS1 quadratics【517932045546412†L474-L492】【202274881086976†L182-L213】.  Topics include graph features, solving methods, the discriminant, simultaneous equations, inequalities, polynomial division, the remainder and factor theorems, and sketching curves.  No off‑spec content has been introduced.  Numerical approximation methods and iteration are not part of the AS1 unit and are therefore not included.

---

## 15 Recommended Enhancements Not in the PDF

To enhance independent learning, the following AI‑proposed assets were added.  They are optional but beneficial.

| Asset | Type | Reason | Specification support | Essential? |
| --- | --- | --- | --- | --- |
| **MMD‑001** | Mermaid flowchart | Guides method selection (factorise, complete the square or formula). | Solving quadratic equations【517932045546412†L474-L492】 | Recommended |
| **MMD‑002** | Mermaid concept map | Shows how coefficients relate to graph features. | Working with quadratic functions【517932045546412†L474-L492】 | Optional |
| **TIKZ‑001** | TikZ diagram | Visualises parabola shapes and turning points. | Sketching curves【202274881086976†L260-L265】 | Helpful |
| **TIKZ‑002** | TikZ diagram | Summarises discriminant cases with sketches. | Using the discriminant【202274881086976†L190-L213】 | Helpful |
| **SVG‑001** | SVG graphic | Presents inequality solution patterns. | Quadratic inequalities【202274881086976†L233-L243】 | Useful |
| **WIDGET‑001** | Interactive widget | Graph explorer with sliders for a, b, c; also shades solution sets. | Working with quadratics and inequalities | Optional |
| **WIDGET‑002** | Interactive widget | Discriminant calculator and small graph. | Discriminant and roots | Optional |
| **WIDGET‑003** | Interactive widget | Polynomial division and factor tester. | Polynomial division and factor theorem | Optional |

---

## 16 Supplementary Sources Used

All explanations and examples are based on the CCEA specification【517932045546412†L474-L492】, the elaboration document【202274881086976†L182-L213】 and the uploaded lesson PDF.  Additional examples (such as the projectile question) come from standard textbook knowledge consistent with the specification.  No external sources were used.

---

## 17 Final Student Checklist

Use this checklist to test your understanding:

* I can explain how the coefficients \(a\), \(b\) and \(c\) affect the graph of a quadratic function.
* I can find the turning point, axis of symmetry, y‑intercept and x‑intercepts of a quadratic.
* I can solve quadratics by factorising, completing the square and using the quadratic formula, and I know when to choose each method.
* I can use the discriminant to decide whether an equation has two, one or no real solutions and solve parameter problems.
* I can solve quadratic inequalities and express the answer using intervals, understanding whether the solution lies inside or outside the roots.
* I can find intersection points of lines and quadratics and interpret tangency and non‑intersection using the discriminant.
* I can perform polynomial division, apply the remainder theorem and factor theorem, and factorise cubic polynomials completely.
* I can check my solutions, interpret them in context and avoid common mistakes.

---