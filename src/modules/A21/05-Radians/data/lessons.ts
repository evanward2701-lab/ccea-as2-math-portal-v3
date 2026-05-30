import { Module } from '@/core/types';

const LESSON_CONTENT = `
# 1. Lesson Title
**Topic:** Radians, Arc Length, and Sector Area
**Unit:** A2 1 Pure Mathematics (A21)

## 2. Specification Alignment

| LO ID | CCEA Specification Point |
|---|---|
| A21-TRIG-LO001 | Work with radian measure, including use for arc length and area of sector |
| AS1-TRIG-LO007 | Solve simple trigonometric equations in a given interval (extended to radians) |

## 3. Learning Objectives
By the end of this lesson, you should be able to:
* Understand the definition of a radian and why it is used in advanced mathematics.
* Convert fluently between degrees and radians, especially for common exact angles.
* Calculate the arc length of a circle using the formula $l = r\\theta$.
* Calculate the area of a sector using the formula $A = \\frac{1}{2}r^2\\theta$.
* Calculate the area of a segment by combining sector and triangle area formulas.
* Solve trigonometric equations (including quadratics and multiple angles) giving answers in radians.

## 4. Compact Prerequisite Recap
To succeed in this lesson, you need the following prior knowledge:
* **GCSE Mathematics:** 
  * Area of a circle ($A = \\pi r^2$) and circumference ($C = 2\\pi r$).
  * Area of a triangle using sine ($\\text{Area} = \\frac{1}{2}ab\\sin C$).
  * Right-angled trigonometry (SOH CAH TOA) and Pythagoras' Theorem.
* **AS 1 Pure Mathematics:**
  * Solving basic trigonometric equations and using the CAST diagram or trig graphs to find multiple solutions in a given interval.
  * Trigonometric identities: $\\sin^2\\theta + \\cos^2\\theta = 1$ and $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$.

## 5. Big Picture Explanation
So far, you have always measured angles in **degrees**. A degree is defined as $\\frac{1}{360}$th of a full rotation. The number 360 was chosen historically because it is highly divisible (by 2, 3, 4, 5, 6, 8, 9, 10, 12, etc.), making it very convenient for sharing out pieces of a circle. However, mathematically, it is a completely arbitrary human invention.

In A2 Mathematics, we introduce **radians**. Radians are a "natural" way of measuring angles based directly on the geometry of the circle itself—specifically, the relationship between the radius and the arc length. 

**Why do we need radians?** 
Outside of basic geometry, mathematicians almost exclusively use radians. You will have to trust this for now, but it is fundamentally tied to **calculus**. Later in the A2 course, when you learn to differentiate and integrate trigonometric functions (like proving that the derivative of $\\sin x$ is $\\cos x$), the mathematics *only works* if the angle $x$ is measured in radians. 

## 6. Key Definitions and Notation

* **Radian:** One radian is the angle subtended at the centre of a circle when the arc length around the circumference is exactly equal to the radius of the circle.
* **$\\pi$ radians:** Because the full circumference of a circle is $2\\pi r$, a full $360^\\circ$ rotation is exactly $2\\pi$ radians. Therefore, a half-turn ($180^\\circ$) is exactly $\\pi$ radians.
* **Notation:** While degrees use the $^\\circ$ symbol, radians generally do not require a unit symbol. Sometimes you may see a small 'c' (e.g., $\\pi^c$) or the abbreviation "rad", but in A Level exams, if an interval is given as $0 \\le x \\le 2\\pi$, it is implicitly understood to be in radians.

[VISUAL PLACEHOLDER: A21RadiansSVG001 | Definition of a Radian]

[INTERACTIVE PLACEHOLDER: A21RadiansWidget001 | Interactive Radian Explorer]

## 7. Core Theory

### 7.1 Converting Between Degrees and Radians
The most important relationship to commit to memory is:
$$180^\\circ = \\pi \\text{ radians}$$

Everything else flows from this. To convert:
* **Degrees to Radians:** Divide by 180 and multiply by $\\pi$.
* **Radians to Degrees:** Divide by $\\pi$ and multiply by 180.

**Common Exact Angles:**
You must become fluent at recognising common angles in exact radian form (in terms of $\\pi$). Do not rely on converting them to decimals.
* $90^\\circ = \\frac{\\pi}{2}$
* $60^\\circ = \\frac{\\pi}{3}$
* $45^\\circ = \\frac{\\pi}{4}$
* $30^\\circ = \\frac{\\pi}{6}$

*Example:* What is $135^\\circ$ in radians?
Think of it as a fraction of $180^\\circ$. $135$ is three-quarters of $180$. Therefore, $135^\\circ = \\frac{3\\pi}{4}$.

### 7.2 Arc Length
An arc is a section of the circumference of a circle. In GCSE, you found arc length by finding the fraction of the circle ($\\frac{\\theta}{360}$) and multiplying by $2\\pi r$. 

When working in radians, the formula becomes beautifully simple. Because 1 radian creates an arc length of $1r$, an angle of $\\theta$ radians creates an arc length of $\\theta \\times r$.

**Rule:** The length $l$ of an arc of a circle with radius $r$ subtending an angle $\\theta$ (in radians) at the centre is:
$$l = r\\theta$$

*Warning:* This formula *only* works if $\\theta$ is in radians. If you use degrees, you will get a completely wrong answer.

[VISUAL PLACEHOLDER: A21RadiansSVG002 | Sector Area and Arc Length]

### 7.3 Sector Area
A sector is a "pizza slice" of a circle. Again, the radian formula is much cleaner than the GCSE degree formula.

**Rule:** The area $A$ of a sector of a circle with radius $r$ and angle $\\theta$ (in radians) is:
$$A = \\frac{1}{2}r^2\\theta$$

### 7.4 Segment Area
A segment is the region bounded between a chord and the circumference (the "crust" of the pizza slice). 
To find the area of a segment, you find the area of the whole sector and subtract the area of the triangle.

* Area of Sector = $\\frac{1}{2}r^2\\theta$
* Area of Triangle = $\\frac{1}{2}ab\\sin C = \\frac{1}{2}r^2\\sin\\theta$

**Rule:** The area $A$ of a segment is:
$$A = \\frac{1}{2}r^2\\theta - \\frac{1}{2}r^2\\sin\\theta = \\frac{1}{2}r^2(\\theta - \\sin\\theta)$$

*Exam Tip:* You do not necessarily need to memorize the combined formula. If you panic, just remember the logic: **Sector Area minus Triangle Area**.

[VISUAL PLACEHOLDER: A21RadiansSVG003 | Segment Area]

### 7.5 Solving Trigonometric Equations in Radians
Solving equations in radians is exactly the same process as solving them in degrees (from AS1), with two minor adjustments:
1. **Calculator Mode:** Your calculator MUST be in Radians mode (look for the little 'R' at the top of the screen).
2. **Finding additional solutions:** 
   * For $\\sin x$, instead of $180^\\circ - \\text{ans}$, you do $\\pi - \\text{ans}$.
   * For $\\cos x$, instead of $360^\\circ - \\text{ans}$, you do $2\\pi - \\text{ans}$.
   * For $\\tan x$, instead of adding $180^\\circ$, you add $\\pi$.
   * Sine and Cosine repeat every $2\\pi$. Tangent repeats every $\\pi$.

## 8. Common Mistakes and Exam Traps

**1. Forgetting to Change Calculator Mode**
The most common mistake in A2 trigonometry is leaving your calculator in degrees mode when the question is in radians. If the interval is given as $0 \\le x \\le 2\\pi$, or if the question involves arc length/sector area formulas like $l = r\\theta$, your calculator **must** be in radians mode. Look for the little 'R' at the top of your screen.

**2. Misinterpreting "Times Larger" Ratios**
In complex geometry questions, you might be told: *"The area of the triangle is three times the area of the shaded segment."* 
Students often multiply the wrong expression by 3. 
*Trap:* Writing $3 \\times \\text{Triangle} = \\text{Segment}$.
*Correction:* The triangle is the *bigger* shape. To make them equal, you must multiply the *smaller* shape by 3. 
Correct equation: $\\text{Triangle} = 3 \\times \\text{Segment}$.

**3. Forgetting to Adjust the Interval for Multiple Angles**
When solving equations like $\\sin(3\\theta) = 0.5$ for $0 \\le \\theta \\le 2\\pi$, you must adjust the interval *before* finding your solutions. 
If you only find solutions between $0$ and $2\\pi$ and *then* divide by 3, you will miss the majority of the valid answers. Always change the interval to $0 \\le 3\\theta \\le 6\\pi$ first, find all solutions in that wider range, and divide by 3 at the very end.

**4. Using the Wrong Arc Length Formula**
Do not use the GCSE formula $\\frac{\\theta}{360} \\times 2\\pi r$ if the angle is in radians. It wastes time and often leads to conversion errors. Use $l = r\\theta$ directly.

## 9. Practice Questions

1. Figure 1 shows the triangle $ABC$, with $AB = 8\\text{ cm}$, $AC = 11\\text{ cm}$ and $\\angle BAC = 0.7\\text{ radians}$. The arc $BD$, where $D$ lies on $AC$, is an arc of a circle with centre $A$ and radius $8\\text{ cm}$. The region $R$ is bounded by the straight lines $BC$ and $CD$ and the arc $BD$. Find: (a) The length of the arc $BD$. (b) The perimeter of $R$, giving your answer to 3 significant figures.
2. In a diagram, $OAB$ is a sector of a circle, radius $4\\text{ m}$. The chord $AB$ is $5\\text{ m}$ long. Find the area of the shaded segment.
3. Solve the equation $5\\tan\\theta + 3 = 1$ in the interval $0 \\le \\theta \\le 2\\pi$. Give your answers to 2 decimal places.
4. Find all the solutions, in the interval $0 \\le x < 2\\pi$, of the equation $2\\cos^2 x + 1 = 5\\sin x$. Give each solution in terms of $\\pi$.
`;

export const A21_05_MODULE: Module = {
  id: "A21-05",
  title: "Radians",
  type: "Pure Mathematics",
  overview: "Discover radians, the natural way of measuring angles. Learn to calculate arc length, sector area, and segment area using radians, and solve trigonometric equations in radians.",
  learningOutcomes: [
    { id: "A21-TRIG-LO001", text: "Work with radian measure, including use for arc length and area of sector" },
    { id: "AS1-TRIG-LO007", text: "Solve simple trigonometric equations in a given interval" }
  ],
  lessons: [
    {
      id: "A21-05-Lesson",
      title: "Radians, Arc Length, and Sector Area",
      visualId: "A21-Radians",
      type: "Pure Mathematics",
      content: LESSON_CONTENT,
      loIds: ["A21-TRIG-LO001", "AS1-TRIG-LO007"]
    }
  ]
};
