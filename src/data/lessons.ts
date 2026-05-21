import { CourseModule } from "@/types";

export const M1_CONTENT = `
## 1. Lesson Title
**M1: Quantities, Units and Modelling Foundations**

## 2. Specification Focus
* Demonstrate understanding of and use fundamental quantities and units in the SI system: length, time, and mass.
* Demonstrate understanding of and use derived quantities and units: velocity, acceleration, force, and weight.
* Demonstrate understanding of and use the language of kinematics: position, displacement, distance travelled, velocity, speed, and acceleration.
* Understand and use modelling assumptions to simplify real-world mechanics problems.

## 3. Key Vocabulary
* **Fundamental Quantity:** A base physical measurement (e.g., mass, time, length).
* **Derived Quantity:** A measurement built from base units (e.g., acceleration, force).
* **Scalar:** A quantity with magnitude (size) only.
* **Vector:** A quantity with both magnitude and direction.
* **Particle:** A modelling assumption where an object's dimensions are negligible and its mass is concentrated at a single point.
* **Inextensible:** A string or cable that does not stretch under load.
* **Tension:** A pulling force transmitted through a string or cable.
* **Normal Reaction:** A contact force acting perpendicular to a surface.

## 4. Full Theory Explanation

### MECHANICS OVERVIEW
Mechanics focuses on two main ideas: Forces and Motion. These two branches are permanently linked by Newton’s Second Law ($F=ma$), meaning that a resultant force acting on a mass causes it to accelerate.

### SI UNITS AND DERIVED UNITS
To standardise calculations, mechanics relies on the Système International (SI) units. You must convert measurements into SI base units before beginning any calculation.

* **Mass** is measured in kilograms (kg).
* **Length/Displacement** is measured in metres (m).
* **Time** is measured in seconds (s).

Derived units are created by combining these base units:

* **Velocity** is measured in metres per second ($m \\, s^{-1}$).
* **Acceleration** measures the change in velocity per second, giving metres per second squared ($m \\, s^{-2}$). The notation $\\text{ms}^{-2}$ is perfectly acceptable in exams.
* **Force** is measured in newtons (N). Because $F = ma$, one newton is equal to one kilogram multiplied by one metre per second squared ($1 \\text{ N} = 1 \\text{ kg m s}^{-2}$).

> **Exam Context:** CCEA examiners often test unit conversion natively by embedding non-SI units into standard questions, such as providing mass in tonnes in an $F=ma$ exercise. This requires immediate conversion before formula substitution.

### MASS VERSUS WEIGHT
Mass is a scalar measure of the amount of matter in an object, measured in kg. Weight is a force caused by the pull of gravity acting vertically downwards on that mass. Because it is a force, weight is measured in newtons and is calculated using $W = mg$, where $g = 9.8 \\text{ m s}^{-2}$.

![visual:M1-Lift]()

### SCALARS AND VECTORS
In mechanics, quantities are grouped into two categories:

* **Scalars** have magnitude (size) only. Examples include distance, speed, time, and mass.
* **Vectors** have both magnitude and direction. Examples include displacement, velocity, acceleration, and force.

![visual:M1-ScalarVector]()

### MODELLING ASSUMPTIONS
Mathematical models simplify complex real-world situations. In mechanics, specific words in an exam question act as strict mathematical rules:

* **Particle:** The object's dimensions are negligible. Its mass acts at a single point, and rotational effects or air resistance can be ignored.
* **Smooth surface:** There is no friction present.
* **Rough surface:** Friction is present and will oppose any attempted motion.
* **Light string/pulley:** The string or pulley has no mass. For strings, this means tension is equal throughout.
* **Inextensible string:** The string does not stretch. If two objects are connected by it, they will share the exact same magnitude of acceleration.
* **Smooth pulley:** There is no friction in the pulley, ensuring tension is the same on both sides of the string.
* **Rod:** The object is rigid and does not bend or buckle.

![visual:M1-Modelling]()

### TENSION AND TOWING MODELS
 When objects are connected by a light towbar or inextensible string, the tension is an internal force for the whole system but an external force on each separate object. Use a whole-system equation to find the common acceleration, then isolate one object to find the tension.

![visual:M1-Towing]()

## 5. Formulae and Notation
* **Weight:** $W = mg$ (using $g = 9.8 \\text{ m s}^{-2}$ unless otherwise stated).
* **Force Unit Derivation:** $1 \\text{ N} \\equiv 1 \\text{ kg m s}^{-2}$
* **Magnitude of a 2D Vector:** For a vector $\\mathbf{v} = x\\mathbf{i} + y\\mathbf{j}$ or $\\mathbf{v} = \\begin{pmatrix} x \\\\ y \\end{pmatrix}$, the magnitude is $|\\mathbf{v}| = \\sqrt{x^2 + y^2}$.

## 6. Worked Examples

### Example 1: Unit Conversion

**Question:**
A machine has a mass of $3.5$ tonnes. Calculate its weight.

**Solution:**

**Step 1: Convert Mass to SI Units**
$$
\\text{Mass} = 3.5 \\times 1000 = 3500 \\text{ kg}
$$

**Step 2: Apply the Weight Formula**
$$
\\begin{aligned}
W &= mg \\\\
W &= 3500 \\times 9.8 \\\\
&= 34300 \\text{ N}
\\end{aligned}
$$

> **Final Answer:** The weight of the machine is $34300 \\text{ N}$.

### Example 2: Vector Speed

**Question:**
A particle's velocity is modelled by the vector $\\mathbf{v} = 6\\mathbf{i} - 8\\mathbf{j} \\text{ m s}^{-1}$. Find its speed.

**Solution:**

**Step 1: Recognise Speed as the Magnitude of Velocity**
Speed is a scalar quantity, so we find the magnitude of the velocity vector using Pythagoras' theorem.
$$
\\begin{aligned}
\\text{Speed} &= \\sqrt{6^2 + (-8)^2} \\\\
&= \\sqrt{36 + 64} \\\\
&= \\sqrt{100} \\\\
&= 10 \\text{ m s}^{-1}
\\end{aligned}
$$

> **Final Answer:** The speed of the particle is $10 \\text{ m s}^{-1}$.

## 7. Common Traps

* **Leaving answers as surds:** Unlike pure mathematics, mechanics heavily relies on decimal answers in context. Leave answers to 3 significant figures unless an exact surd is cleaner or specified.
* **Forgetting to convert mass:** The exam frequently tests units by giving mass in tonnes. You must convert to kilograms before using $F=ma$ or $W=mg$.
* **Confusing mass and weight:** Always use $W = mg$ to find the force downwards. Do not label a force diagram with just "5 kg"; it must be "$5g$".
* **Using the wrong sign in 1D vectors:** Left and Down are generally negative. Forgetting to assign negative signs to opposite vectors will ruin magnitude and displacement equations.
* **Hedging your bets:** Leaving two distinct mathematical methods on the page because you aren't sure which one is correct. Examiners are forced to penalize this.

## 8. Exam Technique

* **Rounding:** Where rounding is required, your final answer should be given to 3 significant figures. To guarantee final accuracy, you must keep more than 3 significant figures during the intermediate stages of a multi-part question.
* **Multiple Responses:** If you are unsure of a sign (e.g., gravity direction) and offer two solutions on the page without crossing one out, the examiner will award marks for the poorest solution. You must make a clear choice.
* **Units:** Every final answer in a mechanics question must include its correct SI unit.

> ⚠️ **EXAM WARNING: THE "MULTIPLE RESPONSES" RULE** > If you are unsure of how to tackle a problem and you provide two different methods or answers on your page in the hope that the examiner will select the correct one, you will be heavily penalised. Official CCEA examiner guidance dictates that if a candidate provides multiple responses clearly trying to cover all options without crossing one out, the examiner will mark all attempts and award the marks for the **POOREST** solution. If you restart a question or change your mind about a mathematical model, you must decisively cross out the incorrect attempt with a single diagonal line so that only your intended, final solution remains active.
`;

export const M2_CONTENT = `
## 1. Lesson Title
**M2: Kinematics - Constant Acceleration, Graphs and SUVAT**

## 2. Specification Focus
* Demonstrate understanding of and use the language of kinematics: position, displacement, distance travelled, velocity, speed, and acceleration.
* Demonstrate understanding of, use and interpret graphs in kinematics for motion in a straight line (displacement-time and velocity-time graphs).
* Demonstrate understanding of and use the formulae for constant acceleration (SUVAT) for motion in a straight line.
* Demonstrate understanding of and use weight and motion in a straight line under gravity.
* Demonstrate understanding of and use the constant acceleration formulae in two dimensions using vectors.

## 3. Key Vocabulary
* **Position Vector:** Location of a particle relative to a fixed origin.
* **Displacement:** Directed change in position from a starting point (vector).
* **Distance:** Total length of the path travelled (scalar).
* **Velocity:** Rate of change of displacement (vector).
* **Speed:** Rate of change of distance, or the magnitude of velocity (scalar).
* **Acceleration:** Rate of change of velocity (vector).
* **Deceleration:** A negative acceleration relative to the direction of motion, indicating the object is slowing down.

## 4. Full Theory Explanation

### LANGUAGE OF KINEMATICS
Kinematics is the study of motion. Distance and speed are scalar quantities, meaning they have magnitude but no direction. Displacement and velocity are vectors, meaning they have both magnitude and direction. For example, if a cyclist travels 5 km away and 5 km back, her total distance is 10 km, but her final displacement is 0 km.

### MOTION GRAPHS
![visual:M2-VTS]()

* **Displacement-time graphs:** The gradient tells us how quickly displacement is changing. Therefore, the gradient gives the velocity. A flat horizontal line means the object is stationary. A straight sloping line means constant velocity.
* **Velocity-time graphs:** The gradient gives the acceleration. A flat horizontal line above the axis means the object is moving at a constant velocity (zero acceleration). The area under a velocity-time graph gives the displacement (and distance, provided the velocity remains positive).

* **Exam-Style Note:** When asked to describe the motion of an athlete or particle between two times from a graph, ensure you give enough detail (such as explicitly stating "constant acceleration" or calculating the exact acceleration value) to gain the mark.

### CONSTANT ACCELERATION (SUVAT)
When an object is moving in a straight line with constant acceleration, its motion is governed by the five SUVAT equations. The variables are:

* $s = \\text{displacement}$
* $u = \\text{initial velocity}$
* $v = \\text{final velocity}$
* $a = \\text{acceleration}$
* $t = \\text{time}$

You must define a positive direction before substituting values.

If a particle is decelerating while moving in the positive direction, its acceleration $a$ will be negative.

### VERTICAL MOTION UNDER GRAVITY
Vertical motion is a standard constant acceleration topic. If we ignore air resistance, an object in freefall accelerates downwards at $g = 9.8 \\text{ m s}^{-2}$ regardless of its mass. You must pick a positive direction. If upwards is positive, $a = -9.8$. If downwards is positive, $a = 9.8$. At the maximum height of a vertical projection, the particle is instantaneously at rest, meaning $v = 0$.

![visual:M2-Gravity]()

### CONSTANT ACCELERATION IN TWO DIMENSIONS (VECTORS)
In 2D kinematics, displacement ($\\mathbf{s}$), initial velocity ($\\mathbf{u}$), final velocity ($\\mathbf{v}$), and acceleration ($\\mathbf{a}$) become vectors, while time ($t$) remains a scalar. You apply the SUVAT formulae component-by-component. For example, the equation $\\mathbf{v} = \\mathbf{u} + \\mathbf{a}t$ applies to the $\\mathbf{i}$ components and the $\\mathbf{j}$ components simultaneously.

![visual:M2-Traffic]()

## 5. Formulae and Notation
1. Area of a trapezium: $A = \\frac{1}{2}(a+b)h$
2. SUVAT Equations (1D & 2D Vectors):
   * $\\mathbf{v} = \\mathbf{u} + \\mathbf{a}t$
   * $\\mathbf{s} = \\frac{1}{2}(\\mathbf{u} + \\mathbf{v})t$
   * $\\mathbf{s} = \\mathbf{u}t + \\frac{1}{2}\\mathbf{a}t^2$
   * $\\mathbf{s} = \\mathbf{v}t - \\frac{1}{2}\\mathbf{a}t^2$ (This is perfectly acceptable to use in CCEA exams)
   * $v^2 = u^2 + 2as$ (1D scalar motion only)
3. Position Vector: $\\mathbf{r} = \\mathbf{r}_0 + \\mathbf{u}t + \\frac{1}{2}\\mathbf{a}t^2$
4. Speed: $|\\mathbf{v}| = \\sqrt{v_x^2 + v_y^2}$

## 6. Worked Examples

### Example 1: Vertical Motion

**Question:**
A ball is projected vertically upwards from a point 7 m above the ground with an initial speed of $21 \\text{ m s}^{-1}$. Find the greatest height above the ground reached by the ball.

**Solution:**

**Step 1: Define Parameters & Sign Convention**

Choose downwards as the positive direction. The initial velocity is upwards, and the velocity at the greatest height is zero.

$$
u = -21
$$

$$
a = 9.8
$$

$$
v = 0
$$

**Step 2: Select SUVAT Equation and Solve for Displacement (s)**
$$
\\begin{aligned}
v^2 &= u^2 + 2as \\\\
0^2 &= (-21)^2 + 2(9.8)s \\\\
0 &= 441 + 19.6s \\\\
-19.6s &= 441 \\\\
s &= -22.5 \\text{ m}
\\end{aligned}
$$

**Step 3: Interpret Result and Find Final Height**

The negative displacement confirms the ball travelled 22.5 m upwards from its starting point.

The question asks for the height above the ground.

$$
\\text{Height} = 7 + 22.5
$$
$$
= 29.5\\text{ m}
$$

> **Final Answer:** The greatest height reached is $29.5 \\text{ m}$.

### Example 2: 2D Vector Velocity

**Question:**
A particle has initial velocity $\\mathbf{u} = 3\\mathbf{i} - \\mathbf{j} \\text{ m s}^{-1}$ and constant acceleration $\\mathbf{a} = 2\\mathbf{i} + 4\\mathbf{j} \\text{ m s}^{-2}$. Find its velocity after 5 seconds.

**Solution:**

**Step 1: Select the Vector SUVAT Equation**
$$
\\mathbf{v} = \\mathbf{u} + \\mathbf{a}t
$$

**Step 2: Substitute the Vectors and Time**
$$
\\mathbf{v} = (3\\mathbf{i} - \\mathbf{j}) + (2\\mathbf{i} + 4\\mathbf{j})(5)
$$

**Step 3: Scale the Acceleration Vector**
$$
\\mathbf{v} = 3\\mathbf{i} - \\mathbf{j} + 10\\mathbf{i} + 20\\mathbf{j}
$$

**Step 4: Group Components to Find Final Velocity**
$$
\\mathbf{v} = (3+10)\\mathbf{i} + (-1+20)\\mathbf{j}
$$

> **Final Answer:** $\\mathbf{v} = 13\\mathbf{i} + 19\\mathbf{j} \\text{ m s}^{-1}$
`;

export const M3_CONTENT = `
## 1. Lesson Title
**M3: Forces, Newton's Laws and Connected Particles**

## 2. Specification Focus
* Demonstrate understanding of and use Newton’s First Law and the concept of a force.
* Resolve forces in two dimensions and find the resultant of a system of forces.
* Demonstrate understanding of and use Newton’s Second Law ($F=ma$), including forces given as 2D vectors.
* Apply Newton's laws to solve problems involving connected particles (horizontal, vertical, and pulleys).
* Solve problems involving equilibrium of forces on a particle.
* Demonstrate understanding of and use the $F \\leq \\mu R$ model of friction and the coefficient of friction.

## 3. Key Vocabulary
* **Resultant Force:** The single overall force acting on an object, obtained by adding all individual force vectors.
* **Equilibrium:** A state where the resultant force is zero. The particle remains at rest or moves with constant velocity.
* **Weight ($W$):** The gravitational force on a mass, acting vertically downwards ($W = mg$).
* **Normal Reaction ($R$ or $N$):** The contact force from a surface, acting strictly perpendicular to that surface.
* **Tension ($T$):** A pulling force transmitted through a taut string, cable, or towbar.
* **Friction ($F$):** A resistive contact force that opposes actual or impending motion.
* **Coefficient of Friction ($\\mu$):** A dimensionless constant measuring the roughness between two surfaces.

## 4. Full Theory Explanation

### NEWTON'S FIRST LAW AND EQUILIBRIUM
If an object has zero acceleration ($a=0$), the resultant force is zero. The forces are in equilibrium:

* Sum of upward forces = sum of downward forces.
* Sum of leftward forces = sum of rightward forces.

### NEWTON'S SECOND LAW ($F=ma$)
When forces are unbalanced, the object accelerates in the direction of the resultant force.
$$
\\text{Resultant Force} = \\text{mass} \\times \\text{acceleration}
$$
$$
F = ma
$$
*Note: $F$ represents the **resultant** force, not just any single applied force.*

### RESOLVING FORCES AND INCLINED PLANES
![visual:M3-Inclined]()
For a particle on an inclined plane at angle $\\theta$ to the horizontal:

* The component of weight acting **down the slope** is $mg \\sin \\theta$.
* The component of weight acting **perpendicularly into the slope** is $mg \\cos \\theta$.
* The Normal Reaction ($R$) acts perpendicular to the surface.
* $R$ only equals $mg \\cos \\theta$ if there are no other angled forces pulling away from or pushing into the slope.

### THE FRICTION MODEL
Rough surfaces generate friction that opposes motion or impending motion.
$$
F \\leq \\mu R
$$
Friction reaches its maximum limiting value, $F = \\mu R$, only when:

* the object is on the point of slipping, or
* the object is actively sliding.

### CONNECTED PARTICLES
![visual:M3-Rough]()

Particles joined by a taut, inextensible string share the exact same magnitude of acceleration.

**Towbars and Trailers:**
* Treat the entire system as one particle to find the common acceleration.
* To find the tension, you must "zoom in" and apply $F=ma$ to just one of the individual particles.

**Pulleys:**
* Particles on a pulley may move in different directions.
* Write a separate $F=ma$ equation for each mass.
* Use the direction of motion as positive for each.
* Solve the equations simultaneously.
* A "smooth pulley" guarantees the tension $T$ is equal on both sides.

![visual:M3-Pulley]()

### DYNAMICS OF LIFT PROBLEMS
* **To find the Cable Tension ($T$):** Zoom out. Treat the lift and the passenger as one single combined mass ($M_{\\text{lift}} + m_{\\text{person}}$). The internal forces cancel out.
* **To find the Normal Reaction ($R$):** Zoom in. Treat the passenger as a single isolated particle. The Normal Reaction is the force the floor pushes up on them.

![visual:M3-Lift]()

## 5. Worked Examples

### Example 1: Horizontal Motion

**Question:**
A body of mass $5 \\text{ kg}$ is pulled along a rough horizontal table by a horizontal force of $20 \\text{ N}$ against a constant friction force of $4 \\text{ N}$. It starts from rest. Find the distance travelled in the first 4 seconds.

**Solution:**

**Step 1: Use $F=ma$ to Find Acceleration**
The resultant force is the driving force minus the resistive friction.
$$
\\begin{aligned}
F &= 20 - 4 = 16 \\text{ N} \\\\
16 &= 5a \\\\
a &= 3.2 \\text{ m s}^{-2}
\\end{aligned}
$$

**Step 2: Apply SUVAT to Find Displacement**
We have $u=0$, $a=3.2$, and $t=4$. We need to find $s$.
$$
\\begin{aligned}
s &= ut + \\frac{1}{2}at^2 \\\\
s &= 0(4) + \\frac{1}{2}(3.2)(4^2) \\\\
&= 1.6 \\times 16 \\\\
&= 25.6 \\text{ m}
\\end{aligned}
$$

> **Final Answer:** The body travels $25.6 \\text{ m}$.

### Example 2: Lift Dynamics

**Question:**
A lift of mass $500 \\text{ kg}$ contains a passenger of mass $80 \\text{ kg}$. The lift is moving upwards and accelerates at $2 \\text{ m s}^{-2}$. Find the tension in the cable and the normal reaction force exerted by the floor on the passenger. (Take Upwards as Positive)

**Solution:**

**Step 1: Find Cable Tension (T) by Isolating the Whole System**
Total mass = $500 + 80 = 580 \\text{ kg}$.
$$
\\begin{aligned}
F &= ma \\\\
T - 580g &= 580a \\\\
T - 580(9.8) &= 580(2) \\\\
T - 5684 &= 1160 \\\\
T &= 6844 \\text{ N}
\\end{aligned}
$$

**Step 2: Find Normal Reaction (R) by Isolating the Passenger**
Consider only the forces acting on the passenger (mass = $80 \\text{ kg}$).
$$
\\begin{aligned}
F &= ma \\\\
R - 80g &= 80a \\\\
R - 80(9.8) &= 80(2) \\\\
R - 784 &= 160 \\\\
R &= 944 \\text{ N}
\\end{aligned}
$$

> **Final Answer:** Tension $T = 6844 \\text{ N}$, Reaction $R = 944 \\text{ N}$.
`;

export const S1_CONTENT = `
## 1. Lesson Title
**S1: Statistical Sampling, Data Types and Inference**

## 2. Specification Focus
* Demonstrate understanding of and use the terms population and sample.
* Use samples to make informal inferences about the population.
* Demonstrate understanding of and use sampling techniques, including simple random sampling and stratified sampling.
* Distinguish between qualitative, quantitative, discrete, and continuous data.

## 3. Key Vocabulary
* **Population:** The whole group of individuals or items being investigated.
* **Sample:** A smaller group taken from the population to estimate its characteristics.
* **Census:** Data collected from every single member of the population.
* **Sampling Frame:** A complete numbered list of all members of the population used to draw a sample.
* **Simple Random Sample:** A sample where every member of the population has an equal chance of being selected.
* **Stratified Sample:** A sample that divides the population into distinct groups (strata) and selects a random sample proportionally.
* **Discrete Data:** Quantitative data that can only take specific, usually counted, values.
* **Continuous Data:** Quantitative data that can take any value within a range, usually measured.
* **Bias:** A systematic unfairness in the way data is collected, meaning the sample is not representative of the population.

## 4. SAMPLING METHODS

1. **Simple Random Sampling:** Requires a complete sampling frame. Every item has an equal chance of selection. This removes human bias but does not guarantee the sample will perfectly mirror the population structure.
2. **Stratified Sampling:** The population is divided into distinct, non-overlapping groups. A random sample is then drawn from each stratum in exact proportion to the size of that group in the population.

**Formula:**
$\\text{Stratum sample size} = \\frac{\\text{Stratum population size}}{\\text{Total population size}} \\times \\text{Overall sample size}$

![visual:S1-Sampling]()

## 5. Worked Example

### Example 1: Stratified Sampling

**Question:**
A college has 300 students: 180 study Mathematics and 120 do not. A sample of 40 students is needed, stratified by whether they study Mathematics. Find how many of each group should be selected.

**Solution:**

**Step 1: Calculate Sample Size for Mathematics Students**
Total population = 300. Target sample = 40.
$$
\\begin{aligned}
\\text{Maths sample} &= \\frac{180}{300} \\times 40 \\\\
&= 0.6 \\times 40 \\\\
&= 24
\\end{aligned}
$$

**Step 2: Calculate Sample Size for Non-Mathematics Students**
$$
\\begin{aligned}
\\text{Non-Maths sample} &= \\frac{120}{300} \\times 40 \\\\
&= 0.4 \\times 40 \\\\
&= 16
\\end{aligned}
$$

> **Final Answer:** The sample should contain 24 Mathematics students and 16 non-Mathematics students.
`;

export const S2_CONTENT = `
## 1. Lesson Title
**S2: Data Presentation and Interpretation**

## 2. Specification Focus
* Interpret diagrams for single-variable data (e.g. histograms where area represents frequency).
* Interpret measures of central tendency and variation, including standard deviation and variance of a population or sample.
* Clean data, recognise/interpret outliers.
* Interpret scatter diagrams and regression lines, including distinct sections of the population.
* Calculate and interpret the product-moment correlation coefficient (PMCC).

## 3. Explanations

### Histograms and Frequency Density
In a histogram, **area represents frequency**.
$\\text{Frequency Density} = \\frac{\\text{Frequency}}{\\text{Class Width}}$

### Variance and Standard Deviation
* **Population ($\\sigma_n$):** Divisor is exactly $n$. Used when data is the entire population or not inferring about a wider group.
* **Sample ($\\sigma_{n-1}$):** Divisor is $n-1$ (Bessel's Correction). Used when estimating the whole population's spread from a sample.

![visual:S2-StdDev]()

### Interpolation for Median
To estimate values within a grouped frequency class, assume data is evenly distributed across the class width.

![visual:S2-Interpolate]()

### PMCC ($r$)
![visual:S2-PMCC]()

Measures the strength and direction of **linear correlation**.
$-1 \\leq r \\leq 1$. Remember correlation does not imply causation.

![visual:S2-Scatter]()

## 4. Worked Example: PMCC
$r = \\frac{n\\sum xy - \\sum x \\sum y}{\\sqrt{\\left(n\\sum x^{2} - (\\sum x)^{2}\\right)\\left(n\\sum y^{2} - (\\sum y)^{2}\\right)}}$
`;

export const S3_CONTENT = `
## 1. Lesson Title
**S3: Probability Laws, Venn Diagrams, Two-Way Tables and Trees**

## 2. Formulae & Concepts
![visual:S3-Tree]()

* **Addition Law:** $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$
* **Mutually Exclusive:** Cannot happen at the same time. $P(A \\cap B) = 0$.
* **Exhaustive Events:** Cover all possible outcomes. $P(A \\cup B) = 1$.
* **Independent Events:** One outcome doesn't affect the other. Tested mathematically by: $P(A \\cap B) = P(A) \\times P(B)$.

*(Note: Conditional probability formula methods are explicitly excluded from AS2 requirements by CCEA).*

### VENN DIAGRAMS
![visual:S3-Venn]()

### TWO-WAY TABLES
Two-way tables are useful when probabilities are grouped by two categories. Always complete missing row totals, column totals, and the grand total before finding a probability.

![visual:S3-Table]()

### MULTI-STAGE CONDITIONAL SPACE
When modeling complex, multi-stage sequential sample boundaries across independent paths, look to a segmented conditional probability framework.

![visual:S3-Bayes]()

## 3. WORKED EXAMPLE: EXHAUSTIVE EVENTS

**Question:**
Events $A$ and $B$ are exhaustive events such that $P(A) = 0.65$ and $P(B) = 0.42$. Find $P(A \\cap B)$ and determine if the events are mutually exclusive.

**Solution:**

**Step 1: Use the Exhaustive Property and Addition Law**
Since $A$ and $B$ are exhaustive, $P(A \\cup B) = 1$.
$$
\\begin{aligned}
P(A \\cup B) &= P(A) + P(B) - P(A \\cap B) \\\\
1 &= 0.65 + 0.42 - P(A \\cap B) \\\\
1 &= 1.07 - P(A \\cap B) \\\\
P(A \\cap B) &= 0.07
\\end{aligned}
$$

**Step 2: Conclusion**
Because $P(A \\cap B) = 0.07 \\neq 0$, the events are **not** mutually exclusive.

> **Final Answer:** $P(A \\cap B) = 0.07$. Not mutually exclusive.
`;

export const S4_CONTENT = `
## 1. Lesson Title
**S4: Statistical Distributions (Discrete Probability and the Binomial Model)**

## 2. The Binomial Model Conditions

![visual:S4-BinomialTree]()

You can only use the binomial model if the situation satisfies four strict conditions:

1. There is a **fixed number of trials** ($n$).
2. There are exactly **two possible outcomes** for each trial ("success" and "failure").
3. The **probability of success** ($p$) is constant for every trial.
4. The trials are **completely independent** of each other.

The notation for a binomial distribution is:
$$
X \\sim B(n, p)
$$

### MODEL SUITABILITY VERIFICATION
Before assigning distribution formulas to physical word problems, you must explicitly confirm all criteria are met.

![visual:S4-BinomialConditions]()

## 3. Exact Probabilities Formula

To find the probability of exactly $x$ successes in $n$ trials:
$$
$P(X=x) = \\binom{n}{x} p^x (1-p)^{n-x}$
$$

![visual:S4-Inequality]()

### NORMAL DISTRIBUTION CONTRAST
The binomial model is discrete, while the normal distribution is continuous. Keep this contrast clear when deciding which model a question is asking for.

![visual:S4-Normal]()

## 4. Worked Example

**Question:**
A factory makes frames. 20% are faulty. Sample of 8 frames. Let $X$ be number of faulty frames.

(a) Find the probability that none are faulty.
(b) Find the probability that at most two are faulty.

**Solution:**

The scenario can be modelled as $X \\sim B(8, 0.2)$.

**(a) Probability of zero faulty frames ($P(X=0)$)**
$$
\\begin{aligned}
P(X=0) &= \\binom{8}{0}(0.2)^0(0.8)^8 \\\\
&= 0.168 \\text{ (3 s.f.)}
\\end{aligned}
$$

**(b) Probability of at most two faulty frames ($P(X \\leq 2)$)**
$P(X \\leq 2) = P(X=0) + P(X=1) + P(X=2)$
$$
\\begin{aligned}
P(X=1) &= \\binom{8}{1}(0.2)^1(0.8)^7 \\\\
&= 0.3355...
\\end{aligned}
$$
$$
\\begin{aligned}
P(X=2) &= \\binom{8}{2}(0.2)^2(0.8)^6 \\\\
&= 0.2936...
\\end{aligned}
$$
$P(X \\leq 2) = 0.1677... + 0.3355... + 0.2936... = 0.7969...$

> **Final Answer:** (a) $0.168$, (b) $0.797$ (to 3 s.f.)
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
    title: "Data Classification",
    visualId: "S1-Tree",
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