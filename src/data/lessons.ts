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

### Mechanics Overview
Mechanics focuses on two main ideas: Forces and Motion. These two branches are permanently linked by Newton’s Second Law ($F=ma$), meaning that a resultant force acting on a mass causes it to accelerate.

### SI Units and Derived Units
To standardise calculations, mechanics relies on the Système International (SI) units. You must convert measurements into SI base units before beginning any calculation.
* **Mass** is measured in kilograms (kg).
* **Length/Displacement** is measured in metres (m).
* **Time** is measured in seconds (s).

Derived units are created by combining these base units:
* **Velocity** is measured in metres per second ($m \\, s^{-1}$).
* **Acceleration** measures the change in velocity per second, giving metres per second squared ($m \\, s^{-2}$). The notation $\\text{ms}^{-2}$ is perfectly acceptable in exams.
* **Force** is measured in newtons (N). Because $F = ma$, one newton is equal to one kilogram multiplied by one metre per second squared ($1 \\text{ N} = 1 \\text{ kg m s}^{-2}$).

> **Exam Context:** CCEA examiners often test unit conversion natively by embedding non-SI units into standard questions, such as providing mass in tonnes in an $F=ma$ exercise. This requires immediate conversion before formula substitution.

### Mass versus Weight
Mass is a scalar measure of the amount of matter in an object, measured in kg. Weight is a force caused by the pull of gravity acting vertically downwards on that mass. Because it is a force, weight is measured in newtons and is calculated using $W = mg$, where $g = 9.8 \\text{ m s}^{-2}$.

![visual:M1-Lift]()

### Scalars and Vectors
In mechanics, quantities are grouped into two categories:
* **Scalars** have magnitude (size) only. Examples include distance, speed, time, and mass.
* **Vectors** have both magnitude and direction. Examples include displacement, velocity, acceleration, and force.

![visual:M1-ScalarVector]()

### Modelling Assumptions
Mathematical models simplify complex real-world situations. In mechanics, specific words in an exam question act as strict mathematical rules:
* **Particle:** The object's dimensions are negligible. Its mass acts at a single point, and rotational effects or air resistance can be ignored.
* **Smooth surface:** There is no friction present.
* **Rough surface:** Friction is present and will oppose any attempted motion.
* **Light string/pulley:** The string or pulley has no mass. For strings, this means tension is equal throughout.
* **Inextensible string:** The string does not stretch. If two objects are connected by it, they will share the exact same magnitude of acceleration.
* **Smooth pulley:** There is no friction in the pulley, ensuring tension is the same on both sides of the string.
* **Rod:** The object is rigid and does not bend or buckle.

![visual:M1-Modelling]()

### Tension and Towing Models
When objects are connected by a light towbar or inextensible string, the tension is an internal force for the whole system but an external force on each separate object. Use a whole-system equation to find the common acceleration, then isolate one object to find the tension.

![visual:M1-Towing]()

## 5. Formulae and Notation
* **Weight:** $W = mg$ (using $g = 9.8 \\text{ m s}^{-2}$ unless otherwise stated).
* **Force Unit Derivation:** $1 \\text{ N} \\equiv 1 \\text{ kg m s}^{-2}$
* **Magnitude of a 2D Vector:** For a vector $\\mathbf{v} = x\\mathbf{i} + y\\mathbf{j}$ or $\\mathbf{v} = \\begin{pmatrix} x \\\\ y \\end{pmatrix}$, the magnitude is $|\\mathbf{v}| = \\sqrt{x^2 + y^2}$.

## 6. Worked Examples

### Example 1: Unit Conversion and Weight
A machine has a mass of $3.5$ tonnes. Calculate its weight.
**Step 1:** Convert to SI units. Mass $= 3.5 \\times 1000 = 3500 \\text{ kg}$
**Step 2:** Apply the weight formula.
$W = mg$
$W = 3500 \\times 9.8$
$W = 34300 \\text{ N}$

### Example 2: Vector Magnitude
A particle's velocity is modelled by the vector $\\mathbf{v} = 6\\mathbf{i} - 8\\mathbf{j} \\text{ m s}^{-1}$. Find its speed.
**Step 1:** Recognise speed is the scalar magnitude of velocity.
Speed $= \\sqrt{6^2 + (-8)^2}$
**Step 2:** Calculate.
Speed $= \\sqrt{36 + 64} = \\sqrt{100} = 10 \\text{ m s}^{-1}$

## 7. Common Traps
* **Leaving answers as surds:** Unlike pure mathematics, mechanics heavily relies on decimal answers in context. Leave answers to 3 significant figures unless an exact surd is cleaner or specified.
* **Forgetting to convert mass:** The exam frequently tests units by giving mass in tonnes. You must convert to kilograms before using $F=ma$ or $W=mg$.
* **Confusing mass and weight:** Always use $W = mg$ to find the force downwards. Do not label a force diagram with just "5 kg"; it must be "$5g$".
* **Using the wrong sign in 1D vectors:** Left and Down are generally negative. Forgetting to assign negative signs to opposite vectors will ruin magnitude and displacement equations.
* **Hedging your bets:** Leaving two distinct mathematical methods on the page because you aren't sure which one is correct. Examiners are forced to penalize this.

### CCEA Scoring Integrity Constraints
Before submitting your exam canvas answers, ensure all draft iterations are fully scrubbed or crossed out.

![visual:M1-Trap]()

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

### Language of Kinematics
Kinematics is the study of motion. Distance and speed are scalar quantities, meaning they have magnitude but no direction. Displacement and velocity are vectors, meaning they have both magnitude and direction. For example, if a cyclist travels 5 km away and 5 km back, her total distance is 10 km, but her final displacement is 0 km.

### Motion Graphs
This structural anchor invokes both the constant velocity velocity-time shapes and the asymmetrical peak traffic light profile validation model natively on the dark canvas view tier:

![visual:M2-VTS]()

* **Displacement-time graphs:** The gradient tells us how quickly displacement is changing. Therefore, the gradient gives the velocity. A flat horizontal line means the object is stationary. A straight sloping line means constant velocity.
* **Velocity-time graphs:** The gradient gives the acceleration. A flat horizontal line above the axis means the object is moving at a constant velocity (zero acceleration). The area under a velocity-time graph gives the displacement (and distance, provided the velocity remains positive).
* **Exam-Style Note:** When asked to describe the motion of an athlete or particle between two times from a graph, ensure you give enough detail (such as explicitly stating "constant acceleration" or calculating the exact acceleration value) to gain the mark.

### Constant Acceleration (SUVAT)
When an object is moving in a straight line with constant acceleration, its motion is governed by the five SUVAT equations. The variables are:
* $s = \\text{displacement}$
* $u = \\text{initial velocity}$
* $v = \\text{final velocity}$
* $a = \\text{acceleration}$
* $t = \\text{time}$

You must define a positive direction before substituting values. If a particle is decelerating while moving in the positive direction, its acceleration $a$ will be negative.

### Vertical Motion Under Gravity
Vertical motion is a standard constant acceleration topic. If we ignore air resistance, an object in freefall accelerates downwards at $g = 9.8 \\text{ m s}^{-2}$ regardless of its mass. You must pick a positive direction. If upwards is positive, $a = -9.8$. If downwards is positive, $a = 9.8$. At the maximum height of a vertical projection, the particle is instantaneously at rest, meaning $v = 0$.

This target marker renders the exact upward versus downward coordinate maps, verifying compliance with CCEA grading metrics against the "Rule of the Poorest Attempt":

![visual:M2-Gravity]()

### Constant Acceleration in Two Dimensions (Vectors)
In 2D kinematics, displacement ($\\mathbf{s}$), initial velocity ($\\mathbf{u}$), final velocity ($\\mathbf{v}$), and acceleration ($\\mathbf{a}$) become vectors, while time ($t$) remains a scalar. You apply the SUVAT formulae component-by-component. For example, the equation $\\mathbf{v} = \\mathbf{u} + \\mathbf{a}t$ applies to the $\\mathbf{i}$ components and the $\\mathbf{j}$ components simultaneously.

This high-yield diagnostic addition acts as a terminal safeguard showing exactly how vector output properties resolve to scalar distance magnitudes using Pythagoras' theorem:

![visual:M2-Traffic]()

## 5. Formulae and Notation
1. Area of a trapezium: $A = \\frac{1}{2}(a+b)h$
2. SUVAT Equations (1D & 2D Vectors):
   * $\\mathbf{v} = \\mathbf{u} + \\mathbf{a}t$
   * $\\mathbf{s} = \\frac{1}{2}(\\mathbf{u} + \\mathbf{v})t$
   * $\\mathbf{s} = \\mathbf{u}t + \\frac{1}{2}\\mathbf{a}t^2$
   * $\\mathbf{s} = \\mathbf{v}t - \\frac{1}{2}\\mathbf{a}t^2$
   * $v^2 = u^2 + 2as$ (1D scalar motion only)
3. Position Vector: $\\mathbf{r} = \\mathbf{r}_0 + \\mathbf{u}t + \\frac{1}{2}\\mathbf{a}t^2$
4. Speed: $|\\mathbf{v}| = \\sqrt{v_x^2 + v_y^2}$

## 6. Worked Examples

### Example 1: Vertical Motion Exam-Style
A ball is projected vertically upwards from a point 7 m above the ground with an initial speed of $21 \\text{ m s}^{-1}$. Find the greatest height above the ground reached by the ball.

**Step 1:** Choose downwards as positive
$u = -21$ (because it moves up)
$a = 9.8$
$v = 0$ (at greatest height)

**Step 2:** Choose formula. We want $s$.
$v^2 = u^2 + 2as$
$0 = (-21)^2 + 2(9.8)s$
$0 = 441 + 19.6s$
$19.6s = -441 \\Rightarrow s = -22.5 \\text{ m}$

**Step 3:** Interpret $s$. It rose 22.5 m above the launch point.
$\\text{Height above ground} = 22.5 + 7 = 29.5 \\text{ m}$

### Example 2: 2D Vector Velocity Targeted Practice
A particle has initial velocity $\\mathbf{u} = 3\\mathbf{i} - \\mathbf{j} \\text{ m s}^{-1}$ and constant acceleration $\\mathbf{a} = 2\\mathbf{i} + 4\\mathbf{j} \\text{ m s}^{-2}$. Find its velocity after 5 seconds.

**Step 1:** Use $\\mathbf{v} = \\mathbf{u} + \\mathbf{a}t$
**Step 2:** Substitute and scale
$\\mathbf{v} = (3\\mathbf{i} - \\mathbf{j}) + (2\\mathbf{i} + 4\\mathbf{j})(5)$
$\\mathbf{v} = 3\\mathbf{i} - \\mathbf{j} + 10\\mathbf{i} + 20\\mathbf{j}$
**Step 3:** Group components
$\\mathbf{v} = 13\\mathbf{i} + 19\\mathbf{j} \\text{ m s}^{-1}$
`;

export const M3_CONTENT = `
## 1. Lesson Title
**M3: Dynamics and Forces - Newton's Laws & Connected Particles**

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

### Newton's First Law and Equilibrium
If an object has zero acceleration ($a=0$), the resultant force is zero. The forces are in equilibrium:
* Sum of upward forces = sum of downward forces.
* Sum of leftward forces = sum of rightward forces.

### Newton's Second Law ($F=ma$)
When forces are unbalanced, the object accelerates in the direction of the resultant force.
$$\\text{Resultant Force } (F) = \\text{mass } (m) \\times \\text{acceleration } (a)$$
*Note: $F$ represents the net vector sum of all forces along the axis of acceleration, not just a single scalar weight or driving force.*

### Resolving Forces and Inclined Planes
For a particle placed on a rigid inclined plane tilted at an angle $\\theta$ relative to the horizontal datum line:
* The component of weight acting **parallel to the plane (down the slope)** is $mg \\sin \\theta$.
* The component of weight acting **perpendicularly into the plane** is $mg \\cos \\theta$.

The Normal Reaction ($R$) acts strictly perpendicular to the surface. It only balances out to $mg \\cos \\theta$ if there are no external secondary pulling strings or anchoring tension ropes angled away from or into the face of the slope.

![visual:M3-Incline]()

### The Friction Model
Rough surfaces generate a variable resistive contact friction vector opposing active or impending displacement paths.
$$F \\le \\mu R$$
Friction only builds up to its maximum limiting value ($F = \\mu R$) when the object is on the absolute precipice of slipping, or is in an active state of dynamic sliding.

### Connected Particles
Particles joined by a taut, inextensible line share a uniform magnitude of acceleration ($a$).
* **Towbars and Trailers:** Treat the layout as a single consolidated mass to isolate common system acceleration. To uncover internal coupling forces (Tension/Thrust), isolate one single body.
* **Pulleys:** Because masses traversing vertical pulleys change displacement directions, write a distinct $F=ma$ system equation for each body, using its explicit direction of motion as the positive reference axis. A smooth pulley setup ensures string tension ($T$) remains perfectly uniform across both sides.

![visual:M3-Rough]()

![visual:M3-Pulley]()

### Dynamics of Lift Problems
* **To find the Cable Tension ($T$):** Analyze the macro system. Combine the masses ($M_{\\text{lift}} + m_{\\text{passenger}}$) to cancel out internal reaction forces.
* **To find the Normal Floor Reaction ($R$):** Isolate the passenger silhouette individually. The reaction force represents the structural force the floor exerts upward against the traveler's feet.

![visual:M3-Lift]()

### Advanced Connected Boundary Modeling
When particles are coupled over a pulley across an inclined wedge, you must combine your systems carefully:
1. Resolve mass components on the slope parallel and perpendicular to the incline face.
2. Determine the path of impending system motion to correctly orient the friction force vector ($F$).
3. Formulate simultaneous equations for both masses to eliminate Tension ($T$) and extract acceleration ($a$).

![visual:M3-Connected]()

## 5. Worked Examples

### Example 1: Horizontal Motion with Resistance
A body of mass $5 \\text{ kg}$ is pulled along a rough horizontal table by a horizontal force of $20 \\text{ N}$ against a constant friction force of $4 \\text{ N}$. It starts from rest. Find the distance travelled in the first 4 seconds.

**Step 1:** Apply $F=ma$ to establish system acceleration.
$$\\text{Net Resultant Force} = 20 - 4 = 16 \\text{ N}$$
$$16 = 5a \\implies a = 3.2 \\text{ m s}^{-2}$$

**Step 2:** Execute constant acceleration equations (SUVAT).
$$u = 0, \\quad a = 3.2, \\quad t = 4, \\quad s = ?$$
$$s = ut + \\frac{1}{2}at^2$$
$$s = 0(4) + \\frac{1}{2}(3.2)(4^2) = 1.6 \\times 16 = 25.6 \\text{ m}$$

### Example 2: Lift Dynamics
A lift of mass $500 \\text{ kg}$ contains a passenger of mass $80 \\text{ kg}$. The lift is moving upwards and accelerates at $2 \\text{ m s}^{-2}$. Find the tension in the cable and the normal reaction force exerted by the floor on the passenger.

**System Tension ($T$):** Total combined system mass = $580 \\text{ kg}$.
$$T - 580g = 580a$$
$$T - 580(9.8) = 580(2)$$
$$T - 5684 = 1160 \\implies T = 6844 \\text{ N}$$

**Reaction on Passenger ($R$):** Isolate passenger mass = $80 \\text{ kg}$.
$$R - 80g = 80a$$
$$R - 80(9.8) = 80(2)$$
$$R - 784 = 160 \\implies R = 944 \\text{ N}$$
`;

export const S1_CONTENT = `
## 1. Lesson Title
**S1: Data Types & Proportional Sampling Foundations**

## 2. Specification Focus
* Distinguish clearly between qualitative (categorical) data and quantitative (numerical) parameters.
* Classify quantitative data into discrete (counted items) or continuous (measured scales).
* Critically evaluate operational trade-offs between a full census and sampling methodologies.
* Understand the properties, benefits, and constraints of Simple Random Sampling and Stratified Sampling.
* Mathematically allocate proportional sample strata sizes across a multi-layered target population.

## 3. Key Vocabulary
* **Qualitative Data:** Non-numerical attributes or descriptors that fall into distinct categories.
* **Quantitative Data:** Numerical values representing specific counts or absolute physical measurements.
* **Discrete Variable:** A numerical quantity that can only take specific, isolated values (typically integer counts).
* **Continuous Variable:** A numerical quantity that can take any fractional value within a continuous scale or interval.
* **Sampling Frame:** A complete physical or database list containing every single target item in a population.
* **Stratum (Plural Strata):** A mutually exclusive, distinct sub-population layer sharing a common trait.

## 4. Full Theory Explanation

### Classification of Data Vectors
Data must be accurately classified into qualitative structures or numerical quantitative parameters before applying standard statistical modeling tools. 
![visual:S1-Tree]()

### Sampling Methodologies & Operational Constraints
When designing a research framework, choosing between an absolute census or a targeted sample requires a deliberate optimization of precision vs resource boundaries.
![visual:S1-Sampling]()

### Proportional Stratified Selection Mechanics
To extract a truly representative stratified sample that honors the underlying structural proportions of a population, candidates use a strict allocation formula to determine each layer size:

$$\\text{Stratum Sample Size} = \\frac{\\text{Strata Subgroup Size}}{\\text{Total Population Size } (N)} \\times \\text{Total Desired Sample } (n)}$$

Consider an institution with a total population framework ($N = 300$) split into three explicit academic tiers (Strata):
* Year 12 Strata Size = **120**
* Year 13 Strata Size = **100**
* Year 14 Strata Size = **80**

If an investigator demands an optimized sample sizing of $n = 60$, the mathematically bound selection vectors are solved systematically:

![visual:S1-Stratified]()

* **Year 12 Sample Size Allocation:**
  $$\\frac{120}{300} \\times 60 = 0.4 \\times 60 = 24 \\text{ elements}$$
* **Year 13 Sample Size Allocation:**
  $$\\frac{100}{300} \\times 60 = \\frac{1}{3} \\times 60 = 20 \\text{ elements}$$
* **Year 14 Sample Size Allocation:**
  $$\\frac{80}{300} \\times 60 = \\frac{4}{15} \\times 60 = 16 \\text{ elements}$$

$$\\text{Check Total Vector Convergence: } 24 + 20 + 16 = 60$$

> ⚠️ **CCEA Exam Warning:** On examination matrices where division returns rational fractions, candidates must round each individual stratum to the nearest whole integer while validating that the aggregated total exactly equals $n$.
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

![visual:S2-Histogram]()

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

### Model Validation via Residuals
To confirm if a linear regression model is appropriate for a data set, examiners expect you to understand how to analyze residuals ($y - \\hat{y}$). A reliable model shows completely random plot scatter, whereas a clear parabolic pattern invalidates the linear fit.

![visual:S2-Residual]()

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

![visual:S3-Venn]()

### Two-Way Tables
Two-way tables are useful when probabilities are grouped by two categories. Always complete missing row totals, column totals, and the grand total before finding a probability.

![visual:S3-Table]()

## 3. Worked Example: Exhaustive Events
Events $A$ and $B$ are exhaustive events such that $P(A) = 0.65$ and $P(B) = 0.42$. Find $P(A \\cap B)$ and determine if the events are mutually exclusive.

**Step 1:** Since $A$ and $B$ are exhaustive, $P(A \\cup B) = 1$.
**Step 2:** Apply Addition Law.
$1 = 0.65 + 0.42 - P(A \\cap B)$
$1 = 1.07 - P(A \\cap B) \\Rightarrow P(A \\cap B) = 0.07$
**Conclusion:** Because $P(A \\cap B) = 0.07 \\neq 0$, they are not mutually exclusive.
`;

export const S4_CONTENT = `
## 1. Lesson Title
**S4: Statistical Distributions (Discrete Probability and the Binomial Model)**

## 2. The Binomial Model Conditions
![visual:S4-Binomial]()

You can only use the binomial model if the situation satisfies four strict conditions:
1. There is a **fixed number of trials** ($n$).
2. There are exactly **two possible outcomes** for each trial ("success" and "failure").
3. The **probability of success** ($p$) is constant for every trial.
4. The trials are **completely independent** of each other.

Notation: $X \\sim B(n, p)$

## 3. Exact Probabilities Formula
$P(X=x) = \\binom{n}{x} p^x (1-p)^{n-x}$

![visual:S4-Inequality]()

### Normal Distribution Contrast
The binomial model is discrete, while the normal distribution is continuous. Keep this contrast clear when deciding which model a question is asking for.

![visual:S4-Normal]()

## 4. Worked Example
A factory makes frames. 20% are faulty. Sample of 8 frames. Let $X$ be number of faulty frames.
$X \\sim B(8, 0.2)$

**Find probability that none are faulty ($x=0$):**
$P(X=0) = \\binom{8}{0}(0.2)^0(0.8)^8 = 0.168$

**Find probability that at most two are faulty ($X \\leq 2$):**
$P(X \\leq 2) = P(X=0) + P(X=1) + P(X=2)$
$P(X=1) = \\binom{8}{1}(0.2)^1(0.8)^7 = 0.336$
$P(X=2) = \\binom{8}{2}(0.2)^2(0.8)^6 = 0.294$
$P(X \\leq 2) = 0.168 + 0.336 + 0.294 = 0.797$ (to 3 s.f.)
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
    visualId: "M2-VTS", // Keeps the master collection dashboard view sync bound to your switch routing
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
    visualId: "S4-Binomial",
    type: "Statistics",
    content: S4_CONTENT,
  },
];