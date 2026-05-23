import { Module } from '@/core/types';

const M2_CONTENT = `
## 1. Lesson Title
**M2: Kinematics - Constant Acceleration, Graphs and SUVAT**

## 2. Specification Focus
* Demonstrate understanding of and use the language of kinematics: position, displacement, distance travelled, velocity, speed, and acceleration.
* Use and interpret displacement-time and velocity-time graphs for motion in a straight line.
* Use the constant acceleration formulae for motion in a straight line.
* Use weight and motion in a straight line under gravity.
* Use constant acceleration formulae in two dimensions using vectors.

## 3. Learning Outcomes
By the end of this lesson, you should be able to:
* Distinguish between distance and displacement, and between speed and velocity.
* Interpret gradients on displacement-time and velocity-time graphs.
* Calculate displacement or distance from the area under a velocity-time graph.
* Select and apply SUVAT formulae in horizontal and vertical motion.
* Use $g=9.8\\text{ m}\\,\\text{s}^{-2}$ with a clear sign convention.
* Apply SUVAT component-by-component in 2D vector problems.

## 4. Key Vocabulary
* **Position:** Location relative to a fixed origin.
* **Displacement:** Directed change in position from a starting point.
* **Distance:** Total length of the path travelled.
* **Velocity:** Rate of change of displacement.
* **Speed:** Rate of change of distance, or the magnitude of velocity.
* **Acceleration:** Rate of change of velocity.
* **Deceleration:** Acceleration acting opposite to the direction of motion.
* **Uniform acceleration:** Constant acceleration.

## 5. Prior Knowledge
* Rearranging formulae and solving quadratics.
* Areas of rectangles, triangles, and trapezia.
* Basic vector arithmetic.
* Pythagoras' theorem.

## 6. Full Theory Explanation

### LANGUAGE OF KINEMATICS
Kinematics is the study of motion. Distance and speed are scalar quantities. Displacement, velocity, and acceleration are vector quantities.

For example, if a cyclist travels 5 km east and then 5 km west, the total distance is 10 km but the final displacement is 0 km.

### MOTION GRAPHS
![visual:M2-VTS]()

* On a **displacement-time graph**, the gradient gives velocity.
* On a **velocity-time graph**, the gradient gives acceleration.
* On a **velocity-time graph**, the area between the graph and the time axis gives displacement.
* If the velocity is always positive, the area also gives distance travelled.
* If velocity changes sign, distance travelled requires adding the magnitudes of separate areas.

![visual:M2-VTGraphEngine]()

![visual:M2-VTCrossing]()

### CONSTANT ACCELERATION
The SUVAT equations apply only when acceleration is constant. The variables are:

* $s$ = displacement
* $u$ = initial velocity
* $v$ = final velocity
* $a$ = acceleration
* $t$ = time

Always define the positive direction before substitution.

![visual:M2-SUVATMatrix]()

### VERTICAL MOTION UNDER GRAVITY
If air resistance is ignored, vertical motion has constant acceleration $g=9.8\\text{ m}\\,\\text{s}^{-2}$ downwards. If upwards is positive, $a=-9.8$. If downwards is positive, $a=9.8$.

At the greatest height of a vertical projection, the instantaneous velocity is $v=0$.

![visual:M2-Gravity]()

![visual:M2-SignConventionSplit]()

### CONSTANT ACCELERATION IN TWO DIMENSIONS
In 2D kinematics, displacement, velocity, and acceleration are vectors, but time is still a scalar. Apply SUVAT separately to the $\\mathbf{i}$ and $\\mathbf{j}$ components.

![visual:M2-Traffic]()

## 7. Formulae and Notation
* $v=u+at$
* $s=\\frac{1}{2}(u+v)t$
* $s=ut+\\frac{1}{2}at^2$
* $s=vt-\\frac{1}{2}at^2$
* $v^2=u^2+2as$
* Vector form: $\\mathbf{v}=\\mathbf{u}+\\mathbf{a}t$
* Vector form: $\\mathbf{s}=\\mathbf{u}t+\\frac{1}{2}\\mathbf{a}t^2$
* Position vector: $\\mathbf{r}=\\mathbf{r}_0+\\mathbf{u}t+\\frac{1}{2}\\mathbf{a}t^2$
* Speed from vector velocity: $|\\mathbf{v}|=\\sqrt{v_x^2+v_y^2}$

## 8. Step-by-Step Methods

### Method A: Velocity-Time Graphs
1. Mark the known times and velocities.
2. Split the graph into simple shapes.
3. Use gradient for acceleration.
4. Use area for displacement or distance.
5. Watch for negative velocity if asked for total distance.

### Method B: 1D SUVAT
1. Define the positive direction.
2. List $s,u,v,a,t$.
3. Fill in the known values.
4. Choose the equation containing the required unknown.
5. Substitute, solve, and include units.

### Method C: 2D Vector SUVAT
1. Write all vector quantities in component form.
2. Choose the vector SUVAT equation.
3. Substitute time as a scalar.
4. Add $\\mathbf{i}$ and $\\mathbf{j}$ components separately.
5. Use Pythagoras only when asked for a scalar magnitude.

## 9. Worked Examples

### Example 1: Vertical Motion

**Question:**
A ball is projected vertically upwards from a point 7 m above the ground with initial speed $21\\text{ m}\\,\\text{s}^{-1}$. Find the greatest height above the ground.

**Solution:**
Take downwards as positive:
$$
u=-21,\\quad a=9.8,\\quad v=0
$$
Use $v^2=u^2+2as$:
$$
0=(-21)^2+2(9.8)s
$$
$$
s=-22.5\\text{ m}
$$
The ball rises 22.5 m above the release point, so the greatest height above the ground is:
$$
7+22.5=29.5\\text{ m}
$$

> **Final Answer:** $29.5\\text{ m}$.

### Example 2: Vector Velocity

**Question:**
A particle has initial velocity $3\\mathbf{i}-\\mathbf{j}$ and acceleration $2\\mathbf{i}+4\\mathbf{j}$. Find its velocity after 5 seconds.

**Solution:**
$$
\\mathbf{v}=\\mathbf{u}+\\mathbf{a}t
$$
$$
\\mathbf{v}=(3\\mathbf{i}-\\mathbf{j})+(2\\mathbf{i}+4\\mathbf{j})(5)
$$
$$
\\mathbf{v}=13\\mathbf{i}+19\\mathbf{j}
$$

> **Final Answer:** $13\\mathbf{i}+19\\mathbf{j}\\text{ m}\\,\\text{s}^{-1}$.

### Example 3: Velocity-Time Graph Area

**Question:**
A car travels 1500 m in 120 s. It accelerates uniformly from rest to speed $V$, then decelerates uniformly to rest. Find $V$.

**Solution:**
The velocity-time graph is a triangle:
$$
1500=\\frac{1}{2}\\times120\\times V
$$
$$
V=25
$$

> **Final Answer:** $25\\text{ m}\\,\\text{s}^{-1}$.

## 10. Common Traps
* **Using SUVAT when acceleration is not constant:** SUVAT only works for uniform acceleration.
* **Mixing distance and displacement:** Distance is total path length. Displacement is directed change in position.
* **Forgetting sign conventions:** Gravity may be positive or negative depending on your chosen direction.
* **Using $v^2=u^2+2as$ on vectors:** This equation is for 1D scalar motion only.
* **Saying impact speed is zero:** The object stops after impact, but the strike speed is just before impact.

## 11. Exam Technique
* Use a clear sign convention line before vertical motion.
* Keep extra accuracy during working and round final answers appropriately.
* State units on final mechanics answers.
* For graph description questions, use exact words such as constant velocity, uniform acceleration, stationary, and deceleration.

## 12. Quick Recall Checklist
* Does gradient on a displacement-time graph give velocity?
* Does gradient on a velocity-time graph give acceleration?
* Does area under a velocity-time graph give displacement?
* Can I recall all five SUVAT equations?
* Can I use $g=9.8$ with the correct sign?
* Can I apply SUVAT to vector components?

## 13. End-of-Lesson Summary
Kinematics connects graphs, equations, and vectors. Motion graphs show rates of change and accumulated displacement visually, while SUVAT gives a structured algebraic method whenever acceleration is constant.

## 14. Source Gaps or Caution Notes
> **Caution - Variable acceleration:** If displacement or velocity is given as a function of time, do not force SUVAT onto the problem.

> **Caution - Projectiles:** Do not extend this lesson into full projectile range and trajectory formulae unless your teacher explicitly asks for extension material.
`;

export const M2_MODULE: Module = {
  id: "M2",
  title: "Constant Acceleration",
  type: "Mechanics",
  overview: "This module covers the kinematics of particles moving in a straight line with constant acceleration, including the use of SUVAT equations and motion graphs.",
  learningOutcomes: [
    { id: "AS2-KIN-LO002", text: "demonstrate understanding of, use and interpret graphs in kinematics for motion in a straight line: displacement against time and interpretation of gradient; velocity against time and interpretation of gradient and area under the graph" },
    { id: "AS2-KIN-LO003", text: "demonstrate understanding of and use the formulae for constant acceleration for motion in a straight line" },
    { id: "AS2-KIN-LO004", text: "demonstrate understanding of and use the constant acceleration formulae in two dimensions using vectors" }
  ],
  lessons: [
    {
      id: "M2-Lesson",
      title: "Constant Acceleration",
      visualId: "M2-VTS",
      type: "Mechanics",
      content: M2_CONTENT,
      loIds: ["AS2-KIN-LO002", "AS2-KIN-LO003", "AS2-KIN-LO004"]
    }
  ]
};
