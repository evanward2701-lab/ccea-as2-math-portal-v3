import { CourseModule } from "@/types";

export const M1_CONTENT = `
## 1. Lesson Title
**M1: Quantities, Units and Modelling Foundations**

## 2. Specification Focus
* Demonstrate understanding of and use fundamental quantities and units in the SI system: length, time, and mass.
* Demonstrate understanding of and use derived quantities and units: velocity, acceleration, force, and weight.
* Demonstrate understanding of and use the language of kinematics: position, displacement, distance travelled, velocity, speed, and acceleration.
* Understand and use modelling assumptions to simplify real-world mechanics problems.
* Use vectors and scalar magnitudes correctly in the mechanics context.

## 3. Learning Outcomes
By the end of this lesson, you should be able to:
* Identify and convert quantities into standard SI units.
* Distinguish clearly between mass as a scalar and weight as a force.
* Classify mechanical quantities as either scalars or vectors.
* Convert a 2D vector quantity into a scalar magnitude.
* Define and apply standard modelling assumptions such as particle, smooth surface, rough surface, light string, inextensible string, smooth pulley, and rigid rod.
* Explain why modelling assumptions make a real situation easier to handle mathematically.

## 4. Key Vocabulary
* **Fundamental Quantity:** A base physical measurement, such as mass, time, or length.
* **Derived Quantity:** A measurement built from base units, such as velocity, acceleration, or force.
* **Scalar:** A quantity with magnitude only.
* **Vector:** A quantity with both magnitude and direction.
* **Particle:** A modelling assumption where an object's dimensions are negligible and its mass is concentrated at a single point.
* **Light:** A modelling assumption meaning the object has negligible mass.
* **Inextensible:** A string or cable that does not stretch under load.
* **Tension:** A pulling force transmitted through a string, cable, or light towbar.
* **Normal Reaction:** A contact force acting perpendicular to a surface.
* **Weight:** The force due to gravity acting vertically downwards.

## 5. Prior Knowledge
* Rearranging basic algebraic equations.
* Right-angled trigonometry and Pythagoras' theorem.
* Basic 2D vector notation, such as column vectors or $\\mathbf{i}, \\mathbf{j}$ notation.
* GCSE-level understanding of forces and motion.

## 6. Full Theory Explanation

### MECHANICS OVERVIEW
Mechanics links forces and motion. Kinematics describes motion without investigating its cause. Dynamics connects motion to forces using Newton's laws, especially Newton's Second Law, $F=ma$.

### SI UNITS AND DERIVED UNITS
Mechanics calculations should normally use SI units before substitution into formulae.

* **Mass** is measured in kilograms, kg.
* **Length, distance, and displacement** are measured in metres, m.
* **Time** is measured in seconds, s.

Derived units are created by combining base units:

* **Velocity** is measured in metres per second, $\\text{m}\\,\\text{s}^{-1}$.
* **Acceleration** is measured in metres per second squared, $\\text{m}\\,\\text{s}^{-2}$.
* **Force** is measured in newtons, N. Since $F=ma$, $1\\text{ N}=1\\text{ kg}\\,\\text{m}\\,\\text{s}^{-2}$.

> **Exam Context:** The evidence questions often test unit conversion inside a larger mechanics problem. If mass is given in tonnes, convert to kilograms before using $W=mg$ or $F=ma$.

![visual:M1-SIUnits]()

### MASS VERSUS WEIGHT
Mass is the amount of matter in an object and is measured in kg. Weight is the gravitational force on that mass and is measured in newtons. Weight acts vertically downwards and is calculated using:
$$
W=mg
$$
where $g=9.8\\text{ m}\\,\\text{s}^{-2}$ unless the question gives a different value.

![visual:M1-Lift]()

### SCALARS AND VECTORS
In mechanics, scalar quantities have magnitude only. Vector quantities have magnitude and direction.

* **Scalars:** distance, speed, time, mass, energy.
* **Vectors:** displacement, velocity, acceleration, force, weight, tension.

The speed of a particle is the magnitude of its velocity vector.

![visual:M1-ScalarVectorMap]()

![visual:M1-ScalarVector]()

### MODELLING ASSUMPTIONS
Mathematical models simplify real motion and force systems. Specific words in CCEA mechanics questions have precise meanings:

* **Particle:** Dimensions are negligible. Rotational effects are ignored.
* **Smooth surface:** Friction is absent.
* **Rough surface:** Friction is present.
* **Light string or pulley:** Mass is negligible.
* **Inextensible string:** The string does not stretch, so connected particles have the same magnitude of acceleration.
* **Smooth pulley:** The tension is the same on both sides of the string.
* **Rigid rod or towbar:** The object does not bend or buckle.

![visual:M1-Modelling]()

![visual:M1-ModellingSandbox]()

### TENSION AND TOWING MODELS
When objects are connected by a light towbar or inextensible string, the connecting force is internal to the whole system but external to each separate object. Use a whole-system equation to find the common acceleration, then isolate one object to find the tension or thrust.

![visual:M1-Towing]()

> **Visual placeholder:** Add a compact table comparing modelling words, what they mean physically, and what they allow mathematically.

## 7. Formulae and Notation
* **Weight:** $W=mg$.

![visual:M1-Notation]()
* **Force unit:** $1\\text{ N}=1\\text{ kg}\\,\\text{m}\\,\\text{s}^{-2}$.
* **Magnitude of a 2D vector:** If $\\mathbf{v}=x\\mathbf{i}+y\\mathbf{j}$, then $|\\mathbf{v}|=\\sqrt{x^2+y^2}$.
* **Tonnes to kilograms:** $1\\text{ tonne}=1000\\text{ kg}$.

## 8. Step-by-Step Methods

### Method: Converting Units

![visual:M1-FreeBody]()
1. Identify the quantity and its given unit.
2. Convert to SI units before using any mechanics formula.
3. Substitute into the formula.
4. Give the final answer with the correct SI unit.

### Method: Converting a Vector into a Scalar Magnitude
1. Identify the horizontal and vertical components.
2. Square both components.
3. Add the squares and take the square root.
4. Attach the correct unit.

### Method: Interpreting Modelling Assumptions
1. Highlight the modelling words in the question.
2. Translate each word into a mathematical effect.
3. Use the effect in equations, diagrams, or explanations.

## 9. Worked Examples

### Example 1: Unit Conversion and Weight

**Question:**
A machine has a mass of $3.5$ tonnes. Calculate its weight.

**Solution:**

Convert the mass into kg:
$$
3.5\\times1000=3500\\text{ kg}
$$
Then use $W=mg$:
$$
W=3500\\times9.8=34300\\text{ N}
$$

> **Final Answer:** The weight of the machine is $34300\\text{ N}$.

### Example 2: Vector Speed

**Question:**
A particle has velocity $\\mathbf{v}=6\\mathbf{i}-8\\mathbf{j}\\text{ m}\\,\\text{s}^{-1}$. Find its speed.

**Solution:**
$$
|\\mathbf{v}|=\\sqrt{6^2+(-8)^2}=\\sqrt{100}=10
$$

> **Final Answer:** The speed is $10\\text{ m}\\,\\text{s}^{-1}$.

## 10. Common Traps
* **Forgetting to convert tonnes to kg:** Always convert before using $W=mg$ or $F=ma$.
* **Confusing mass and weight:** Mass is measured in kg. Weight is a force measured in N.
* **Calling velocity a speed:** Speed is scalar. Velocity includes direction.
* **Missing the direction of a vector:** A vector answer without direction may lose marks.
* **Treating modelling words as decoration:** Words like light, smooth, rigid, and inextensible are mathematical instructions.

## 11. Exam Technique
* Mechanics final answers usually need units.
* Unless told otherwise, give decimal answers to 3 significant figures where appropriate.
* If you restart a solution, clearly cross out the version you do not want marked.
* For explanation questions, link each modelling assumption to the specific context.

## 12. Quick Recall Checklist
* Can I state the SI units for mass, length, and time?
* Can I convert tonnes to kilograms?
* Can I explain the difference between mass and weight?
* Can I classify displacement, velocity, acceleration, and force as vectors?
* Can I find the magnitude of a 2D vector?
* Can I define particle, light, smooth, rough, inextensible, and rigid?

## 13. End-of-Lesson Summary
This foundation lesson establishes the language of AS2 mechanics. Before applying SUVAT or Newton's laws, values must be in the correct units, vectors and scalars must be distinguished, and modelling assumptions must be interpreted accurately.

## 14. Source Gaps or Caution Notes
> **Caution - Variable acceleration:** The evidence base mentions calculus-based motion in some places, but AS2 constant acceleration questions should not use differentiation or integration.

> **Caution - Modelling:** Do not over-explain real-world complications unless the question asks for limitations of a model.
`;

export const M2_CONTENT = `
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

> **Visual placeholder:** Add a velocity-time graph that crosses the time axis, showing displacement as signed area and distance as total area.

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

export const M3_CONTENT = `
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

export const S1_CONTENT = `
## 1. Lesson Title
**S1: Statistical Sampling, Data Types and Inference**

## 2. Specification Focus
* Understand and use the terms population and sample.
* Use samples to make informal inferences about populations.
* Understand sampling techniques, including simple random sampling and stratified sampling.
* Select or critique sampling techniques in context.
* Distinguish between qualitative, quantitative, discrete, and continuous data.

## 3. Learning Outcomes
By the end of this lesson, you should be able to:
* Define population, sample, census, and sampling frame.
* Explain why a sample may be used instead of a census.
* Describe how to take a simple random sample.
* Calculate proportional stratified sample sizes.
* Classify data as qualitative, quantitative discrete, or quantitative continuous.
* Explain sampling bias using context from the question.

## 4. Key Vocabulary
* **Population:** The whole group being investigated.
* **Sample:** A smaller group selected from the population.
* **Census:** Data collected from every member of the population.
* **Sampling Frame:** A complete list of all members of the population.
* **Simple Random Sample:** A sample where every member has an equal chance of being selected.
* **Stratified Sample:** A sample formed by splitting the population into groups and sampling proportionally from each.
* **Qualitative Data:** Non-numerical category data.
* **Quantitative Data:** Numerical data.
* **Discrete Data:** Counted values.
* **Continuous Data:** Measured values that can take any value in a range.
* **Bias:** Systematic unfairness in data collection.

## 5. Prior Knowledge
* Fractions, ratios, and percentages.
* Rounding to whole numbers.
* Interpreting worded contexts.

## 6. Full Theory Explanation

### POPULATIONS, SAMPLES, AND CENSUSES
A statistical investigation begins with a population. A census collects data from every member of the population, while a sample collects data from only part of it.

A census can be accurate, but it is often slow, expensive, or impractical. A sample is faster, but it must be selected carefully to avoid bias.

### INFORMAL INFERENCE
A sample can be used to make an informal inference about a population. For example, if 30% of a representative sample prefer option A, it may be reasonable to estimate that about 30% of the population prefer option A.

Different samples can give different results because of sampling variation.

### DATA TYPES
![visual:S1-Tree]()

![visual:S1-TaxonomyDecision]()

* **Qualitative:** category data, such as favourite subject.
* **Quantitative discrete:** counted numerical data, such as number of siblings.
* **Quantitative continuous:** measured numerical data, such as time, height, or mass.

### SIMPLE RANDOM SAMPLING
A simple random sample needs a complete sampling frame. Number each member and use random numbers to select the sample.

### STRATIFIED SAMPLING
Stratified sampling preserves the structure of the population by sampling proportionally from each group.

![visual:S1-StratifiedSampler]()

![visual:S1-Stratified]()

### BIAS AND CRITIQUE
Bias occurs when the sample is not representative. To explain bias well, name who is missing, who is over-represented, or why the selected group might behave differently from the target population.

![visual:S1-Sampling]()

> **Visual placeholder:** Add a before-and-after diagram comparing a biased convenience sample with a proportional stratified sample.

## 7. Formulae and Notation
* Stratified sample size:
$$
\\text{Group sample size}=\\frac{\\text{Group population size}}{\\text{Total population size}}\\times\\text{Overall sample size}
$$

## 8. Step-by-Step Methods

### Method A: Simple Random Sample
1. Define the population.
2. Obtain a complete sampling frame.
3. Number all members from 1 to $N$.
4. Generate random numbers.
5. Select the corresponding members, ignoring repeats or invalid numbers.

### Method B: Stratified Sampling
1. Identify each stratum and its size.
2. Identify the total population and required sample size.
3. Apply the stratified sample formula to each group.
4. Round carefully if necessary.
5. Check that the group samples add to the required total.

### Method C: Critiquing a Sample
1. Identify the target population.
2. Identify the actual group sampled.
3. State who is excluded or over-represented.
4. Link the bias to the variable being measured.

## 9. Worked Examples

### Example 1: Stratified Sampling

**Question:**
A college has 300 students: 180 study Mathematics and 120 do not. A sample of 40 students is needed, stratified by whether they study Mathematics.

**Solution:**
Mathematics:
$$
\\frac{180}{300}\\times40=24
$$
Non-Mathematics:
$$
\\frac{120}{300}\\times40=16
$$

> **Final Answer:** 24 Mathematics students and 16 non-Mathematics students.

### Example 2: Data Types and Bias

**Question:**
A school wants to estimate the mean number of hours its sixth-form students spend on independent study. It surveys 30 students at an after-school study club.

**Solution:**
Hours of study is quantitative continuous data. The sample is biased because study-club students are likely to study more than the general sixth-form population.

## 10. Common Traps
* **Saying a census means asking lots of people:** It means every member of the population.
* **Giving generic bias answers:** Always link bias to the context.
* **Confusing discrete and continuous data:** Counted values are discrete. Measured values are continuous.
* **Forgetting sampling frame:** A simple random sample needs a complete list.

## 11. Exam Technique
* When asked to criticise a sample, write in full sentences.
* Use the words population, sample, representative, and bias accurately.
* In stratified sampling, show the formula substitution.
* If rounding causes totals not to match, adjust sensibly and explain.

## 12. Quick Recall Checklist
* Can I define population, sample, census, and sampling frame?
* Can I describe a simple random sample?
* Can I calculate a stratified sample size?
* Can I classify data types?
* Can I explain bias in context?

## 13. End-of-Lesson Summary
Sampling is the foundation of statistical investigation. A good sample can support informal inference, but a biased or badly selected sample can lead to misleading conclusions.

## 14. Source Gaps or Caution Notes
> **Caution - Formal hypothesis testing:** Hypothesis testing, p-values, critical regions, and significance levels are not part of this AS2 lesson block.
`;

export const S2_CONTENT = `
## 1. Lesson Title
**S2: Data Presentation and Interpretation**

## 2. Specification Focus
* Interpret diagrams for single-variable data, including histograms where area represents frequency.
* Interpret measures of central tendency and variation.
* Use standard deviation and variance for populations and samples.
* Clean data and recognise or interpret outliers.
* Interpret scatter diagrams and regression lines.
* Calculate and interpret the product-moment correlation coefficient, PMCC.
* Understand when a linear model is not appropriate.

## 3. Learning Outcomes
By the end of this lesson, you should be able to:
* Interpret and complete histograms using frequency density.
* Estimate values from grouped data using interpolation.
* Compare centre and spread using mean, median, quartiles, range, interquartile range, variance, and standard deviation.
* Identify outliers using a stated rule.
* Interpret scatter diagrams, regression lines, PMCC, and residual plots.
* Explain why correlation does not imply causation.

## 4. Key Vocabulary
* **Frequency Density:** Frequency divided by class width.
* **Histogram:** A diagram where area represents frequency.
* **Median:** The middle value.
* **Quartiles:** Values splitting ordered data into quarters.
* **Interquartile Range:** $Q_3-Q_1$.
* **Outlier:** A value that appears unusually far from the rest of the data, according to a stated rule.
* **Variance:** A measure of average squared spread.
* **Standard Deviation:** A measure of typical spread from the mean.
* **PMCC:** A measure of strength and direction of linear correlation.
* **Residual:** The difference between an observed value and the value predicted by a regression line.

## 5. Prior Knowledge
* Averages and spread from GCSE statistics.
* Drawing and interpreting graphs.
* Substitution into formulae.
* Using calculator statistical functions where allowed by the teacher.

## 6. Full Theory Explanation

### HISTOGRAMS
In a histogram, area represents frequency. The vertical axis is frequency density:
$$
\\text{Frequency Density}=\\frac{\\text{Frequency}}{\\text{Class Width}}
$$
So:
$$
\\text{Frequency}=\\text{Class Width}\\times\\text{Frequency Density}
$$

![visual:S2-Histogram]()

### INTERPOLATION IN GROUPED DATA
When estimating a median, quartile, or percentile from grouped data, assume the data is evenly distributed within the class interval.

![visual:S2-Interpolate]()

> **Visual placeholder:** Add a grouped cumulative-frequency style interpolation strip showing lower boundary, upper boundary, class width, and target position.

### VARIANCE AND STANDARD DEVIATION
Standard deviation measures spread. A larger standard deviation means the data values are more spread out.

* Use the population version when the data is the whole population.
* Use the sample version when the data is being used to estimate a wider population.

![visual:S2-StdDev]()

### OUTLIERS AND CLEANING DATA
Outliers may be genuine extreme values, recording errors, or values from a different population. If an outlier rule is stated, apply that rule exactly.

Common rule:
$$
\\text{Outlier below}=Q_1-1.5\\times\\text{IQR}
$$
$$
\\text{Outlier above}=Q_3+1.5\\times\\text{IQR}
$$

Cleaning data means correcting errors, removing impossible values, or deciding whether an outlier should be retained.

### SCATTER DIAGRAMS, REGRESSION, AND PMCC
A scatter diagram shows the relationship between two variables. PMCC, $r$, measures the strength and direction of linear correlation:
$$
-1\\leq r\\leq1
$$

* $r$ close to 1: strong positive linear correlation.
* $r$ close to -1: strong negative linear correlation.
* $r$ close to 0: weak or no linear correlation.

![visual:S2-PMCC]()

Correlation does not imply causation. A strong correlation may be caused by a hidden third variable or by coincidence.

![visual:S2-Scatter]()

### RESIDUALS
Residuals help check whether a linear regression model is appropriate. A random scatter of residuals around zero supports a linear model. A curved pattern suggests a non-linear model would be better.

![visual:S2-Residual]()

## 7. Formulae and Notation
* $\\text{Frequency Density}=\\frac{\\text{Frequency}}{\\text{Class Width}}$
* $\\text{Frequency}=\\text{Class Width}\\times\\text{Frequency Density}$
* $\\text{IQR}=Q_3-Q_1$
* Outlier limits: $Q_1-1.5\\text{IQR}$ and $Q_3+1.5\\text{IQR}$
* PMCC:
$$
r=\\frac{n\\sum xy-\\sum x\\sum y}{\\sqrt{\\left(n\\sum x^2-(\\sum x)^2\\right)\\left(n\\sum y^2-(\\sum y)^2\\right)}}
$$

## 8. Step-by-Step Methods

### Method A: Histograms
1. Find each class width.
2. Use frequency density = frequency divided by class width.
3. Draw bars with widths matching the class intervals.
4. Use area to recover missing frequencies.

### Method B: Outliers
1. Find $Q_1$ and $Q_3$.
2. Calculate IQR.
3. Calculate lower and upper outlier limits.
4. Compare data values with the limits.
5. Interpret any outliers in context.

### Method C: PMCC Interpretation
1. Check the sign of $r$ for direction.
2. Check the size of $|r|$ for strength.
3. State that it measures linear correlation.
4. Avoid claiming causation unless the context justifies it.

## 9. Worked Examples

### Example 1: Histogram Frequency

**Question:**
A histogram class has interval $20<x\\leq35$ and frequency density 4. Find the frequency.

**Solution:**
Class width is $35-20=15$:
$$
\\text{Frequency}=15\\times4=60
$$

> **Final Answer:** 60.

### Example 2: PMCC

**Question:**
A data set has $r=-0.86$. Interpret this value.

**Solution:**
The value is close to -1, so it shows a strong negative linear correlation. As one variable increases, the other tends to decrease.

## 10. Common Traps
* **Using bar chart logic on histograms:** Histogram area, not height alone, represents frequency.
* **Ignoring class width:** Unequal classes need frequency density.
* **Calling correlation causation:** PMCC does not prove cause.
* **Using a regression line outside the data range:** Extrapolation is unreliable.
* **Ignoring residual patterns:** A high PMCC can still hide a non-linear relationship.

## 11. Exam Technique
* Use the exact outlier rule given in the question.
* When interpreting PMCC, include strength, direction, and linear.
* For regression, mention whether interpolation or extrapolation is being used.
* In histogram questions, label frequency density clearly.

## 12. Quick Recall Checklist
* Can I find frequency density?
* Can I recover frequency from histogram area?
* Can I calculate IQR and outlier limits?
* Can I interpret standard deviation?
* Can I interpret PMCC?
* Can I explain a residual plot?

## 13. End-of-Lesson Summary
Data presentation is about choosing and interpreting the right statistical summary. Histograms handle grouped continuous data, measures of spread compare variation, and PMCC/regression analyse linear relationships while reminding us not to overclaim causation.

## 14. Source Gaps or Caution Notes
> **Caution - Calculator dependence:** This portal should teach interpretation and method. It should not become a calculator-button guide.
`;

export const S3_CONTENT = `
## 1. Lesson Title
**S3: Probability Laws, Venn Diagrams, Two-Way Tables and Trees**

## 2. Specification Focus
* Use the language of probability, including event, complement, union, and intersection.
* Use Venn diagrams and two-way tables.
* Understand mutually exclusive and exhaustive events.
* Understand independent events.
* Use addition and multiplication laws for probability.
* Use tree diagrams for combined probabilities.

## 3. Learning Outcomes
By the end of this lesson, you should be able to:
* Use notation such as $A'$, $A\\cup B$, and $A\\cap B$.
* Complete and interpret Venn diagrams and two-way tables.
* Apply the addition law for two events.
* Test whether events are mutually exclusive or independent.
* Use tree diagrams to calculate combined probabilities.
* Recognise when events are exhaustive.

## 4. Key Vocabulary
* **Event:** A set of outcomes.
* **Complement:** The event not occurring, written $A'$.
* **Union:** $A\\cup B$, meaning A or B or both.
* **Intersection:** $A\\cap B$, meaning both A and B.
* **Mutually Exclusive:** Events that cannot happen at the same time.
* **Exhaustive:** Events that cover all possible outcomes.
* **Independent:** One event does not affect the probability of the other.
* **Tree Diagram:** A branching diagram for multi-stage probability.

## 5. Prior Knowledge
* Fractions, decimals, and percentages.
* Reading tables.
* Basic set notation.

## 6. Full Theory Explanation

### BASIC PROBABILITY RULES
Probabilities lie between 0 and 1:
$$
0\\leq P(A)\\leq1
$$
For a complement:
$$
P(A')=1-P(A)
$$

### ADDITION LAW
For two events:
$$
P(A\\cup B)=P(A)+P(B)-P(A\\cap B)
$$
If events are mutually exclusive, $P(A\\cap B)=0$, so:
$$
P(A\\cup B)=P(A)+P(B)
$$

![visual:S3-DynamicVenn]()

![visual:S3-Venn]()

### EXHAUSTIVE EVENTS
If events are exhaustive, their union covers the whole sample space:
$$
P(A\\cup B)=1
$$

### INDEPENDENCE
Events A and B are independent if:
$$
P(A\\cap B)=P(A)P(B)
$$
This test is often the cleanest way to prove whether two events are independent.

### TWO-WAY TABLES
Two-way tables organise probabilities or frequencies by two categories. Complete missing row totals, column totals, and the grand total before answering probability questions.

<!-- Conditional probability is explicitly excluded from AS2 core, so S3-ConditionalTable is banked but not injected into S3_CONTENT. -->

![visual:S3-Table]()

### TREE DIAGRAMS
Tree diagrams show stages of an experiment. Multiply along branches and add separate successful paths.

![visual:S3-Tree]()

![visual:S3-TreeEngine]()

> **Visual placeholder:** Add a two-stage tree showing multiply-along-branches and add-endpoints colour coding.

## 7. Formulae and Notation
* $P(A')=1-P(A)$
* $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$
* Mutually exclusive: $P(A\\cap B)=0$
* Exhaustive: $P(A\\cup B)=1$
* Independent: $P(A\\cap B)=P(A)P(B)$
* Tree diagrams: multiply along branches and add separate paths.

## 8. Step-by-Step Methods

### Method A: Venn Diagrams
1. Put the intersection into the overlap first.
2. Subtract the overlap from each event total.
3. Fill the outside region using the total probability of 1.
4. Answer from the completed diagram.

### Method B: Two-Way Tables
1. Fill the given cell values.
2. Use row totals and column totals to complete missing cells.
3. Check the grand total.
4. Use the relevant cell or total for the probability required.

### Method C: Tree Diagrams
1. Fill probabilities on each branch.
2. Use complements where probabilities are missing.
3. Multiply along each route.
4. Add routes that satisfy the event required.

## 9. Worked Examples

### Example 1: Exhaustive Events

**Question:**
Events A and B are exhaustive. $P(A)=0.65$ and $P(B)=0.42$. Find $P(A\\cap B)$.

**Solution:**
Since A and B are exhaustive, $P(A\\cup B)=1$.
$$
1=0.65+0.42-P(A\\cap B)
$$
$$
P(A\\cap B)=0.07
$$

> **Final Answer:** $0.07$.

### Example 2: Independence Test

**Question:**
$P(A)=0.4$, $P(B)=0.5$, and $P(A\\cap B)=0.2$. Are A and B independent?

**Solution:**
$$
P(A)P(B)=0.4\\times0.5=0.2
$$
This equals $P(A\\cap B)$, so the events are independent.

## 10. Common Traps
* **Adding overlapping probabilities twice:** Use the addition law.
* **Confusing mutually exclusive and independent:** Mutually exclusive events cannot happen together. Independent events can happen together without affecting each other's probability.
* **Forgetting complements:** If $P(A)=0.7$, then $P(A')=0.3$.
* **Leaving two-way tables incomplete:** Complete the structure before calculating.

## 11. Exam Technique
* Quote the rule you are using before substituting numbers.
* For independence, show both $P(A\\cap B)$ and $P(A)P(B)$.
* For tree diagrams, write endpoint products clearly.
* Use exact fractions where possible unless decimals are clearly easier.

## 12. Quick Recall Checklist
* Can I use $A'$, $A\\cup B$, and $A\\cap B$?
* Can I apply the addition law?
* Can I test for independence?
* Can I complete a Venn diagram?
* Can I complete a two-way table?
* Can I use a tree diagram to multiply paths and add outcomes?

## 13. End-of-Lesson Summary
Probability questions often become straightforward once the structure is represented clearly. Venn diagrams, two-way tables, and tree diagrams organise the sample space so that addition, multiplication, complements, and independence tests can be applied accurately.

## 14. Source Gaps or Caution Notes
> **Caution - Conditional probability and Bayes:** The evidence references flag formal conditional probability formula methods and Bayes-style reverse probability as beyond the intended AS2 core. Keep the core lesson focused on addition laws, independence, Venn diagrams, two-way tables, and tree diagrams.
`;

export const S4_CONTENT = `
## 1. Lesson Title
**S4: Statistical Distributions - Discrete Probability and the Binomial Model**

## 2. Specification Focus
* Understand discrete probability distributions.
* Use probability distribution tables.
* Recognise and use the binomial distribution.
* Calculate exact and cumulative binomial probabilities.
* Interpret inequalities such as at most, fewer than, at least, and more than.
* Check whether a binomial model is appropriate.

## 3. Learning Outcomes
By the end of this lesson, you should be able to:
* Identify a discrete random variable.
* Complete and interpret a probability distribution.
* State the four conditions for a binomial distribution.
* Use notation $X\\sim B(n,p)$.
* Calculate exact probabilities using the binomial formula.
* Calculate cumulative probabilities by summing exact probabilities.
* Translate wording into probability inequalities.

## 4. Key Vocabulary
* **Random Variable:** A variable whose value depends on chance.
* **Discrete Random Variable:** A random variable taking separate countable values.
* **Probability Distribution:** A table or rule giving probabilities for each possible value.
* **Binomial Distribution:** A model for the number of successes in a fixed number of independent trials.
* **Trial:** One repetition of an experiment.
* **Success:** The outcome being counted.
* **Failure:** The outcome not being counted.
* **Cumulative Probability:** Probability of a range of values.

## 5. Prior Knowledge
* Basic probability.
* Combinations notation $\\binom{n}{x}$.
* Powers and calculator arithmetic.
* Inequality language.

## 6. Full Theory Explanation

### DISCRETE PROBABILITY DISTRIBUTIONS
A discrete probability distribution lists possible values of a random variable and their probabilities. The probabilities must add to 1.

### THE BINOMIAL MODEL
A binomial model is suitable only if all four conditions are met:

1. There is a fixed number of trials, $n$.
2. Each trial has exactly two outcomes: success or failure.
3. The probability of success, $p$, is constant.
4. The trials are independent.

![visual:S4-BinomialConditions]()

![visual:S4-BinomialEngine]()

Use notation:
$$
X\\sim B(n,p)
$$

![visual:S4-BinomialTree]()

<!-- Normal Approximation is an A2 topic. S4-ContinuityCorrection and S4-NormalStandardizer are banked but not injected. -->

### EXACT BINOMIAL PROBABILITIES
For $X\\sim B(n,p)$:
$$
P(X=x)=\\binom{n}{x}p^x(1-p)^{n-x}
$$

### CUMULATIVE PROBABILITIES AND INEQUALITIES
Translate wording carefully:

* **At most 2:** $X\\leq2$
* **Fewer than 2:** $X<2$, so $X\\leq1$
* **At least 2:** $X\\geq2$
* **More than 2:** $X>2$, so $X\\geq3$

![visual:S4-Inequality]()

![visual:S4-InequalityTranslator]()

For cumulative probabilities, add the relevant exact probabilities.

### MODEL SUITABILITY
Before using the binomial distribution, check the context. If trials affect one another, if $p$ changes, or if there are more than two outcomes, the binomial model may not be appropriate.

> **Visual placeholder:** Add a decision-flow table: fixed trials, two outcomes, constant probability, independent trials, then use binomial.

### DISCRETE VERSUS CONTINUOUS MODELS
The binomial model is discrete because it counts successes. A normal distribution is continuous and should not be used unless specifically part of a later or extension topic.

![visual:S4-Normal]()

## 7. Formulae and Notation
* $X\\sim B(n,p)$
* $P(X=x)=\\binom{n}{x}p^x(1-p)^{n-x}$
* $P(X\\leq r)=P(X=0)+P(X=1)+\\cdots+P(X=r)$
* $P(X\\geq r)=1-P(X\\leq r-1)$

## 8. Step-by-Step Methods

### Method A: Checking the Binomial Model
1. Identify the trial.
2. Check that the number of trials is fixed.
3. Check that there are only two outcomes.
4. Check that $p$ is constant.
5. Check that trials are independent.
6. Write $X\\sim B(n,p)$.

### Method B: Exact Probability
1. Identify $n$, $p$, and $x$.
2. Substitute into the binomial formula.
3. Calculate carefully.
4. Round appropriately.

### Method C: Cumulative Probability
1. Translate the wording into an inequality.
2. List the exact values required.
3. Add the relevant exact probabilities.
4. Consider using the complement if it is shorter.

## 9. Worked Examples

### Example 1: Faulty Frames

**Question:**
A factory makes frames. 20% are faulty. A random sample of 8 frames is taken. Let $X$ be the number of faulty frames.

(a) Find the probability none are faulty.
(b) Find the probability at most two are faulty.

**Solution:**
$$
X\\sim B(8,0.2)
$$

(a)
$$
P(X=0)=\\binom{8}{0}(0.2)^0(0.8)^8=0.168
$$

(b)
$$
P(X\\leq2)=P(X=0)+P(X=1)+P(X=2)
$$
$$
=0.1677...+0.3355...+0.2936...=0.7969...
$$

> **Final Answer:** (a) $0.168$, (b) $0.797$.

### Example 2: Model Suitability

**Question:**
A card is drawn from a pack, not replaced, and then another card is drawn. Is a binomial model suitable for counting red cards?

**Solution:**
No. Although there are two outcomes and a fixed number of trials, the probability of success changes after the first draw because the card is not replaced. The trials are not independent.

## 10. Common Traps
* **Misreading inequalities:** At most, fewer than, at least, and more than mean different things.
* **Forgetting the complement method:** $P(X\\geq1)=1-P(X=0)$.
* **Using binomial when trials are dependent:** Without replacement usually changes probabilities.
* **Not defining success:** State what $X$ counts.
* **Rounding too early:** Keep more accuracy during cumulative sums.

## 11. Exam Technique
* Always state the distribution, such as $X\\sim B(8,0.2)$.
* Show the inequality translation before calculating cumulative probabilities.
* Mention model conditions when the question asks whether a binomial model is appropriate.
* Use 3 significant figures unless otherwise instructed.

## 12. Quick Recall Checklist
* Can I state the four binomial conditions?
* Can I write $X\\sim B(n,p)$?
* Can I use the binomial formula?
* Can I translate at most, fewer than, at least, and more than?
* Can I use complements for shorter calculations?
* Can I explain why a binomial model may not fit?

## 13. End-of-Lesson Summary
The binomial distribution models the number of successes in a fixed number of independent trials with constant probability. The main exam skills are checking suitability, translating wording into inequalities, and calculating exact or cumulative probabilities accurately.

## 14. Source Gaps or Caution Notes
> **Caution - Hypothesis testing and normal approximation:** These should not be built into this AS2 lesson unless deliberately added as extension material.
`;

export const LESSONS: CourseModule[] = [
  {
    id: "M1-Lesson",
    title: "Quantities, Units and Modelling Foundations",
    visualId: "M1-Bridge",
    type: "Mechanics",
    content: M1_CONTENT,
  },
  {
    id: "M2-Lesson",
    title: "Constant Acceleration",
    visualId: "M2-VTS",
    type: "Mechanics",
    content: M2_CONTENT,
  },
  {
    id: "M3-Lesson",
    title: "Dynamics and Forces",
    visualId: "M3-Rough",
    type: "Mechanics",
    content: M3_CONTENT,
  },
  {
    id: "S1-Lesson",
    title: "Statistical Sampling, Data Types and Inference",
    visualId: "S1-Sampling",
    type: "Statistics",
    content: S1_CONTENT,
  },
  {
    id: "S2-Lesson",
    title: "Data Presentation",
    visualId: "S2-Histogram",
    type: "Statistics",
    content: S2_CONTENT,
  },
  {
    id: "S3-Lesson",
    title: "Probability",
    visualId: "S3-Tree",
    type: "Statistics",
    content: S3_CONTENT,
  },
  {
    id: "S4-Lesson",
    title: "Distributions",
    visualId: "S4-BinomialTree",
    type: "Statistics",
    content: S4_CONTENT,
  },
];
