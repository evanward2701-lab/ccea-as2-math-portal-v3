import { Module } from '@/core/types';

const M1_CONTENT = `
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

![visual:M1-ModellingTable]()

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
2. Tranzinc each word into a mathematical effect.
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

export const M1_MODULE: Module = {
  id: "M1",
  title: "Quantities, Units and Modelling Foundations",
  type: "Mechanics",
  overview: "This foundation module establishes the fundamental language of AS2 mechanics, focusing on SI units, scalars vs vectors, and modelling assumptions.",
  learningOutcomes: [
    { id: "AS2-QUNITS-LO001", text: "demonstrate understanding of and use fundamental quantities and units in the SI system: length, time and mass" },
    { id: "AS2-QUNITS-LO002", text: "demonstrate understanding of and use derived quantities and units: velocity, acceleration, force and weight" },
    { id: "AS2-KIN-LO001", text: "demonstrate understanding of and use the language of kinematics: position, displacement, distance travelled, velocity, speed and acceleration" }
  ],
  lessons: [
    {
      id: "M1-Lesson",
      title: "Quantities, Units and Modelling Foundations",
      visualId: "M1-Bridge",
      type: "Mechanics",
      content: M1_CONTENT,
      loIds: ["AS2-QUNITS-LO001", "AS2-QUNITS-LO002", "AS2-KIN-LO001"]
    }
  ]
};
