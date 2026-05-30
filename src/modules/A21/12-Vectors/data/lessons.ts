import { Module } from '@/core/types';

const LESSON_CONTENT = `
# 1. Lesson Title
**Topic:** Vectors (Geometric Proofs and Pathways)
**Unit:** A21 Pure Mathematics (Note: Mapped to AS1/A22 in CCEA)

## 2. Specification Alignment

| LO ID | CCEA Specification Point |
|---|---|
| AS1-VEC-LO001 | Use vectors in two dimensions, including $\\mathbf{i}$ and $\\mathbf{j}$ unit vectors |
| AS1-VEC-LO003 | Perform algebraic operations of vector addition and scalar multiplication, and understand geometrical interpretations |
| AS1-VEC-LO004 | Demonstrate understanding of and use position vectors |

*Note: Vectors are officially examined in AS1 and A22 in the CCEA specification. Furthermore, CCEA strictly limits vectors to two dimensions. The 3D content has been excluded to adhere to the CCEA Specification Map.*

## 3. Learning Objectives
* Understand and use position vectors and displacement vectors in two dimensions.
* Trace vector pathways through geometric shapes like parallelograms and trapeziums.
* Use scalar variables ($\\lambda$ and $\\mu$) to represent unknown fractions of a vector pathway.
* Prove geometric properties (such as diagonals bisecting) by comparing the coefficients of non-parallel vectors.

## 4. Big Picture Explanation
Vectors are more than just arrows on a grid; they are a powerful algebraic tool for proving geometric facts without ever needing to measure an angle or use a ruler. 

In this topic, we move beyond basic vector addition and look at **Geometric Proofs**. By defining the sides of a shape using abstract vectors (like $a$ and $b$), we can trace different pathways to the same point. Because a point in space has a unique position, the different pathways must be algebraically equal. By "comparing coefficients"—matching the amount of $a$ and the amount of $b$ on both sides of an equation—we can prove profound geometric truths, such as the fact that the diagonals of *any* parallelogram will always cut each other exactly in half.

## 5. Core Theory

### 5.1 Vector Pathways in Geometric Shapes
If you know that $\\vec{OA} = a$ and $\\vec{OB} = b$, you can find the journey between $A$ and $B$:
$$\\vec{AB} = \\vec{AO} + \\vec{OB} = -a + b = b - a$$

**Rule of Thumb:** $\\vec{AB}$ is always the second letter minus the first letter ($b - a$).

[VISUAL PLACEHOLDER: A21VectorsTikZ001 | Basic Vector Pathways]

### 5.2 Geometric Proofs using Scalars ($\\lambda$ and $\\mu$)
A common problem asks you to prove a property about the intersection of two lines using **Comparing Coefficients**.

**The Method:**
1. **Find Way 1 to get to intersection $X$:** Start at the origin and travel along one line. Use scalar $\\lambda$ to represent the fraction of the journey.
2. **Find Way 2 to get to $X$:** Use the other intersecting line and scalar $\\mu$.
3. **Equate and Compare:** Set Way 1 equal to Way 2. 
4. **Compare Coefficients:** Because the base vectors $a$ and $b$ are non-parallel, the amount of $a$ on the left must equal the amount of $a$ on the right. Give yourself simultaneous equations to solve for $\\lambda$ and $\\mu$.

### 5.3 Worked Example: Diagonals of a Parallelogram
$OACB$ is a parallelogram, where $\\vec{OA} = a$ and $\\vec{OB} = b$. The diagonals $OC$ and $AB$ intersect at a point $X$. Prove that the diagonals bisect each other.

[VISUAL PLACEHOLDER: A21VectorsSVG001 | Parallelogram Diagonals Bisect]

**Way 1:**
$\\vec{OC} = a + b$
$\\vec{OX} = \\lambda(a + b) = \\lambda a + \\lambda b$

**Way 2:**
$\\vec{BA} = a - b$
$\\vec{OX} = \\vec{OB} + \\mu \\vec{BA} = b + \\mu(a - b) = \\mu a + (1 - \\mu)b$

**Compare:**
$a: \\lambda = \\mu$
$b: \\lambda = 1 - \\mu$

Solving gives $\\mu = 1/2$ and $\\lambda = 1/2$. Therefore, $X$ is exactly halfway along both diagonals.

### 5.4 Worked Example: Ratio on a Diagonal
In parallelogram $OABC$, $\\vec{OA} = a$ and $\\vec{OB} = b$. $Q$ lies on $OA$ such that $\\vec{OQ} = \\frac{1}{3}a$. $OC$ and $BQ$ intersect at $X$. Determine the ratio $OX : XC$.

[VISUAL PLACEHOLDER: A21VectorsSVG002 | Ratio on a Diagonal]

**Way 1:**
$\\vec{OX} = \\lambda(a + b) = \\lambda a + \\lambda b$

**Way 2:**
$\\vec{BQ} = -b + \\frac{1}{3}a$
$\\vec{OX} = b + \\mu(\\frac{1}{3}a - b) = \\frac{1}{3}\\mu a + (1 - \\mu)b$

**Compare:**
$a: \\lambda = \\frac{1}{3}\\mu \\implies \\mu = 3\\lambda$
$b: \\lambda = 1 - \\mu$
$\\implies \\lambda = 1 - 3\\lambda \\implies 4\\lambda = 1 \\implies \\lambda = \\frac{1}{4}$

The ratio is $\\frac{1}{4} : \\frac{3}{4}$, which simplifies to **$1 : 3$**.

[INTERACTIVE PLACEHOLDER: A21VectorsWidget001 | Interactive Parallelogram Proof]

## 6. Exam Technique Notes
* **Underline your vectors:** If you write $a$ instead of $\\underline{a}$, you risk losing marks for poor notation.
* **State your pathways clearly:** Write "Way 1: $\\vec{OX} = \\dots$" and "Way 2: $\\vec{OX} = \\dots$".
* **Comparing Coefficients Statement:** Write the words "Comparing coefficients of $a$ and $b$" before you set up your simultaneous equations.
`;

export const A21_12_MODULE: Module = {
  id: "A21-12",
  title: "Vectors (Geometric Proofs)",
  type: "Pure Mathematics",
  overview: "Use vectors to construct rigorous algebraic proofs of geometric properties.",
  learningOutcomes: [
    { id: "AS1-VEC-LO001", text: "Vectors in 2D" },
    { id: "AS1-VEC-LO003", text: "Algebraic vector operations" },
    { id: "AS1-VEC-LO004", text: "Position vectors" }
  ],
  lessons: [
    {
      id: "A21-12-Lesson",
      title: "Vector Pathways & Proofs",
      visualId: "A21-Vectors",
      type: "Pure Mathematics",
      content: LESSON_CONTENT,
      loIds: ["AS1-VEC-LO001", "AS1-VEC-LO003", "AS1-VEC-LO004"]
    }
  ]
};
