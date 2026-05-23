import { Module } from '@/core/types';

const M3_CONTENT = `
## 1. Lesson Title
**M3: Forces, Newton's Laws and Connected Particles**

## 2. Specification Focus
* Understand and use Newton's First Law and the concept of force.
* Resolve forces in two dimensions and find resultants.
* Use Newton's Second Law, $F=ma$, including vector force problems.
* Apply Newton's laws to connected particles, including horizontal motion, vertical motion, lifts, and pulleys.
* Solve equilibrium problems for particles.
* Use the friction model $F\\leq \\mu R$ and the coefficient of friction.

## 3. Learning Outcomes
By the end of this lesson, you should be able to:
* Draw force diagrams for particles on horizontal and inclined planes.
* Resolve forces parallel and perpendicular to a plane.
* Apply $F=ma$ in 1D, 2D, and vector contexts.
* Form and solve simultaneous equations for connected particles.
* Use whole-system and isolated-particle methods correctly.
* Apply limiting friction when an object is on the point of slipping or sliding.

## 4. Key Vocabulary
* **Resultant Force:** The single overall force obtained by adding all forces.
* **Equilibrium:** A state where the resultant force is zero.
* **Weight:** The gravitational force $mg$ acting vertically downwards.
* **Normal Reaction:** A contact force acting perpendicular to a surface.
* **Tension:** A pulling force through a taut string, cable, or towbar.
* **Thrust:** A pushing force through a rigid rod or towbar.
* **Friction:** A resistive force opposing actual or impending motion.
* **Limiting Friction:** Maximum friction, where $F=\\mu R$.
* **Coefficient of Friction:** The constant $\\mu$ measuring surface roughness.

## 5. Prior Knowledge
* Rearranging algebraic equations and solving simultaneous equations.
* SOH CAH TOA and Pythagoras.
* SUVAT for straight-line motion.
* Adding vectors in $\\mathbf{i},\\mathbf{j}$ form.

## 6. Full Theory Explanation

### NEWTON'S FIRST LAW AND EQUILIBRIUM
If the resultant force on a particle is zero, the particle remains at rest or continues moving with constant velocity. For equilibrium:

* Sum of upward forces = sum of downward forces.
* Sum of rightward forces = sum of leftward forces.

### NEWTON'S SECOND LAW
When forces are unbalanced, the resultant force causes acceleration:
$$
F=ma
$$
Here $F$ means resultant force, not just one individual force.

In vector form:
$$
\\mathbf{F}_{\\text{resultant}}=m\\mathbf{a}
$$

### NEWTON'S THIRD LAW
For every action there is an equal and opposite reaction. The paired forces act on different bodies, so they should not be cancelled in the same force diagram.

### RESOLVING FORCES AND INCLINED PLANES
![visual:M3-Incline]()

For a particle on a plane inclined at angle $\\theta$ to the horizontal:

* Component of weight down the plane: $mg\\sin\\theta$.
* Component of weight perpendicular to the plane: $mg\\cos\\theta$.
* The normal reaction acts perpendicular to the plane.
* Friction acts along the plane, opposing actual or impending motion.

> **Visual placeholder:** Add a labelled inclined-plane force diagram showing $mg\\sin\\theta$, $mg\\cos\\theta$, $R$, friction, and applied force.

![visual:M3-InclineResolver]()

### THE FRICTION MODEL
Friction satisfies:
$$
F\\leq\\mu R
$$
Use $F=\\mu R$ only when the particle is sliding or on the point of slipping. If the particle is simply at rest and not limiting, friction may be less than $\\mu R$.

![visual:M3-FrictionSimulator]()

### CONNECTED PARTICLES
![visual:M3-Connected]()

Particles connected by a taut inextensible string have the same magnitude of acceleration. A light smooth pulley means the tension is the same on both sides of the string.

For connected systems:

* Use the whole system to find the common acceleration.
* Isolate one particle to find tension or thrust.
* Choose the direction of motion as positive for each particle.

![visual:M3-PulleyEngine]()

![visual:M3-Pulley]()

### LIFTS
For lift problems:

* To find cable tension, treat the lift and passengers as one combined system.
* To find the force of the floor on a person, isolate the person.
* Moving upwards and slowing down means acceleration is downwards.
* Moving downwards and slowing down means acceleration is upwards.

![visual:M3-Lift]()

## 7. Formulae and Notation
* $F=ma$
* $W=mg$
* $F\\leq\\mu R$
* Limiting friction: $F=\\mu R$
* Inclined plane components: $mg\\sin\\theta$ down the plane and $mg\\cos\\theta$ into the plane.
* Vector dynamics: $\\sum\\mathbf{F}=m\\mathbf{a}$

## 8. Step-by-Step Methods

### Method A: Force Diagrams
1. Model the object as a particle.
2. Add weight vertically downwards.
3. Add contact forces, tensions, applied forces, and friction.
4. Resolve forces in sensible perpendicular directions.
5. Apply either equilibrium or $F=ma$.

### Method B: Connected Particles
1. Decide the likely direction of motion.
2. Use a whole-system equation to find acceleration if possible.
3. Isolate one particle to find tension.
4. Check that tension directions are pulling away from the particle.

### Method C: Friction
1. Find the normal reaction first.
2. Decide whether the friction is limiting.
3. Use $F=\\mu R$ only if limiting or sliding.
4. Resolve parallel to the surface.

## 9. Worked Examples

### Example 1: Horizontal Motion

**Question:**
A body of mass $5\\text{ kg}$ is pulled along a rough horizontal table by a horizontal force of $20\\text{ N}$ against a friction force of $4\\text{ N}$. It starts from rest. Find the distance travelled in the first 4 seconds.

**Solution:**
The resultant force is:
$$
20-4=16\\text{ N}
$$
Using $F=ma$:
$$
16=5a
$$
$$
a=3.2\\text{ m}\\,\\text{s}^{-2}
$$
Now use SUVAT:
$$
s=ut+\\frac{1}{2}at^2
$$
$$
s=0+\\frac{1}{2}(3.2)(4^2)=25.6
$$

> **Final Answer:** $25.6\\text{ m}$.

### Example 2: Lift Dynamics

**Question:**
A lift of mass $500\\text{ kg}$ contains a passenger of mass $80\\text{ kg}$. It accelerates upwards at $2\\text{ m}\\,\\text{s}^{-2}$. Find the cable tension and the normal reaction on the passenger.

**Solution:**
For the whole system:
$$
T-580g=580(2)
$$
$$
T=6844\\text{ N}
$$
For the passenger:
$$
R-80g=80(2)
$$
$$
R=944\\text{ N}
$$

> **Final Answer:** $T=6844\\text{ N}$ and $R=944\\text{ N}$.

## 10. Common Traps
* **Forgetting resultant force:** In $F=ma$, $F$ is the overall force.
* **Cancelling Newton's Third Law pairs on one object:** Action-reaction pairs act on different bodies.
* **Using $F=\\mu R$ too early:** Friction is not always limiting.
* **Resolving weight incorrectly:** On an inclined plane, $mg\\sin\\theta$ is down the slope and $mg\\cos\\theta$ is into the slope.
* **Forgetting acceleration direction in lifts:** Deceleration means acceleration is opposite to motion.

## 11. Exam Technique
* Draw a clear force diagram before writing equations.
* State the positive direction when using $F=ma$.
* Use whole-system equations to avoid unnecessary tension terms.
* Keep all forces in newtons and masses in kilograms.

## 12. Quick Recall Checklist
* Can I draw a complete force diagram?
* Can I resolve weight on an inclined plane?
* Can I tell when a particle is in equilibrium?
* Can I apply $F=ma$ to vectors?
* Can I solve connected particle problems using whole-system and isolated equations?
* Can I use $F\\leq\\mu R$ correctly?

## 13. End-of-Lesson Summary
Dynamics explains motion through resultant forces. Force diagrams, resolving, and Newton's laws give a repeatable method for horizontal motion, lifts, pulleys, inclined planes, connected particles, and friction.

## 14. Source Gaps or Caution Notes
> **Caution - Moments:** This lesson focuses on particles. Rotational effects and moments are not part of this lesson block.

> **Caution - Friction:** Do not automatically set friction equal to $\\mu R$ unless the wording supports limiting friction or sliding.
`;

export const M3_MODULE: Module = {
  id: "M3",
  title: "Dynamics and Forces",
  type: "Mechanics",
  overview: "This module explores the relationship between forces and motion through Newton's Laws, including resolving forces and problems involving friction and connected particles.",
  learningOutcomes: [
    { id: "AS2-FORCES-LO001", text: "demonstrate understanding of and use Newton's first law and the concept of a force" },
    { id: "AS2-FORCES-LO002", text: "resolve forces in two dimensions" },
    { id: "AS2-FORCES-LO003", text: "demonstrate understanding of and use addition of forces to find the resultant of a system of forces" },
    { id: "AS2-FORCES-LO004", text: "demonstrate understanding of and use Newton's second law, including forces given as 2D vectors" },
    { id: "AS2-FORCES-LO005", text: "demonstrate understanding of and use the gravitational acceleration, $g$, and its value in SI units to varying degrees of accuracy" },
    { id: "AS2-FORCES-LO006", text: "demonstrate understanding of and use weight and motion in a straight line under gravity" },
    { id: "AS2-FORCES-LO007", text: "demonstrate understanding of and use Newton's third law" },
    { id: "AS2-FORCES-LO008", text: "demonstrate understanding of and use Newton's second and third laws to solve problems involving connected particles" },
    { id: "AS2-FORCES-LO009", text: "solve problems involving equilibrium of forces on a particle" },
    { id: "AS2-FORCES-LO010", text: "demonstrate understanding of and use the $F\\leq\\mu R$ model of friction" },
    { id: "AS2-FORCES-LO011", text: "demonstrate understanding of and use the coefficient of friction" },
    { id: "AS2-FORCES-LO012", text: "solve problems involving the motion of a body on a rough surface" },
    { id: "AS2-FORCES-LO013", text: "solve problems involving limiting friction and statics" }
  ],
  lessons: [
    {
      id: "M3-Lesson",
      title: "Dynamics and Forces",
      visualId: "M3-Rough",
      type: "Mechanics",
      content: M3_CONTENT,
      loIds: [
        "AS2-FORCES-LO001", "AS2-FORCES-LO002", "AS2-FORCES-LO003", 
        "AS2-FORCES-LO004", "AS2-FORCES-LO005", "AS2-FORCES-LO006", 
        "AS2-FORCES-LO007", "AS2-FORCES-LO008", "AS2-FORCES-LO009", 
        "AS2-FORCES-LO010", "AS2-FORCES-LO011", "AS2-FORCES-LO012", 
        "AS2-FORCES-LO013"
      ]
    }
  ]
};
