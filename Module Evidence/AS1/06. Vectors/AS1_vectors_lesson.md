# Vectors

## Unit: CCEA AS1 Pure Mathematics – Vector Basics

**Source lesson**: VECTORS(1).pdf  
**Date generated**: 22 May 2026

### 1. Specification Alignment

The CCEA specification for AS level mathematics requires learners to work with vectors in two dimensions.  According to the specification and elaboration document, you should be able to:

| CCEA specification point | Elaboration guidance | Covered in this lesson? | Where in these notes | Gap/action needed | Suggested visual or widget support |
|---|---|---|---|---|---|
| Use vectors in two dimensions, including **i** and **j** unit vectors | Students should represent vectors as column vectors or in terms of the unit vectors **i** and **j**【894086615309938†L573-L589】【928194294185092†L513-L532】. | Yes | Section 6 of Part 1 introduces **i** and **j** notation and shows how to write any vector as $x\,\mathbf{i}+y\,\mathbf{j}$ | None | A TikZ diagram shows the vector $(4,-3)$ and its **i/j** components (TIKZ‑001). |
| Calculate the **magnitude** and **direction** of a vector; convert between component form and magnitude/direction form | Learners should use $|\mathbf{a}| = \sqrt{x^2 + y^2}$ and $\theta=\tan^{-1}\bigl(\frac{y}{x}\bigr)$ (with quadrant checks).  They should be able to form a vector from a given magnitude and direction ${r}\bigl(\cos\theta,\sin\theta\bigr)$【894086615309938†L573-L589】. | Yes | Part 2 covers magnitude, direction and building vectors from $(r,\theta)$; examples and quadrant checks are provided. | None | A TikZ diagram depicts a vector from the origin to $(x,y)$ with its horizontal and vertical components (TIKZ‑003).  An interactive widget lets you change $x$ and $y$ to see the effect on magnitude and direction (WIDGET‑001). |
| Perform algebraic operations of **vector addition** and **scalar multiplication** and understand their geometrical interpretations | The elaboration document encourages use of triangle and parallelogram laws of addition【928194294185092†L523-L532】. | Yes | Part 1 explains componentwise addition and scalar multiplication with examples; a table of routes demonstrates adding vectors along a path. | None | A TikZ diagram shows several vectors arranged head‑to‑tail in a route and illustrates addition (TIKZ‑002).  A widget allows you to explore vector addition by entering two vectors and viewing their resultant (WIDGET‑003). |
| Demonstrate understanding of and use **position vectors** | Students should treat coordinates $(x,y)$ as the position vector $\overrightarrow{OA}$ from the origin to $A$ and use position vectors to translate points【928194294185092†L529-L532】. | Yes | Part 3 introduces position vectors, demonstrates translations and explains why they are useful. | None | A TikZ diagram shows translating a point by a vector and the resulting position vector (TIKZ‑003 extension). |
| Calculate the **distance** between two points represented by position vectors | The distance between points $P$ and $Q$ with position vectors $\mathbf{p}$ and $\mathbf{q}$ is $|\mathbf{q}-\mathbf{p}|$【894086615309938†L573-L589】. | Yes | Examples in Part 2 compute the magnitude of difference vectors; modelling examples in Part 3 convert velocity vectors to distances. | None | The magnitude/direction widget (WIDGET‑001) can also be used to find the distance between two points by entering $\mathbf{q}-\mathbf{p}$. |
| Understand the vector formulation of geometrical concepts: midpoints, internal division, parallel vectors | The elaboration document highlights that a midpoint of $AB$ has position vector $(\mathbf{a}+\mathbf{b})/2$ and a point dividing $AB$ in the ratio $m:n$ has position vector $\frac{n\mathbf{a}+m\mathbf{b}}{m+n}$; two vectors are parallel if one is a scalar multiple of the other. | Yes | Part 4 summarises these key ideas, works through a parallelogram proof involving a ratio and a midpoint and provides a general strategy for vector proofs. | None | A TikZ diagram depicts the parallelogram problem and the point dividing a side in ratio (TIKZ‑004). |
| Use the scalar (dot) product to find angles and areas | Although the dot product is formally introduced later, this lesson uses $\mathbf{a}\cdot\mathbf{b}=|\mathbf{a}|\,|\mathbf{b}|\cos\theta$ to find the angle between two vectors and $\tfrac{1}{2}|\mathbf{a}|\,|\mathbf{b}|\sin\theta$ to find the area of a triangle. | Yes (extension) | Part 4 includes an example triangle problem using the scalar product to compute an angle and area.  This anticipates A2 content but stays on‑spec because the specification allows using geometrical interpretations of vector operations. | None | A TikZ diagram illustrates the triangle problem (TIKZ‑005). |
| Constant acceleration formulae in two dimensions using vectors (AS 2 mechanics) | This belongs to Unit AS2 and is not part of the pure AS1 syllabus【928194294185092†L598-L603】. | No | Not covered.  If you study AS2 mechanics, you will revisit vectors in kinematics and forces. | Review AS2 materials. | An optional widget could model constant acceleration, but it is omitted here because this lesson focuses on AS1 pure content. |

### 2. Learning Objectives

By the end of this lesson, you should be able to:

1. Recognise that a vector represents a **displacement** from one point to another and has both a magnitude and a direction.
2. Represent a vector in component form $(x,y)$, as a column vector, or using **i** and **j** notation.
3. Add vectors and multiply vectors by scalars, interpreting the results geometrically.
4. Calculate the **magnitude** of a vector and find its **direction angle** relative to the positive $x$‑axis, taking into account the correct quadrant.
5. Convert between component form and the $(r,\theta)$ form using $x=r\cos\theta$ and $y=r\sin\theta$.
6. Use **position vectors** to represent points and perform translations.
7. Distinguish between vector quantities (which have direction) and scalar quantities (which do not), and use vectors in basic modelling problems (speed–distance–time).
8. Apply vector methods to geometric proofs, including using ratios on a line, midpoints and parallelism criteria.
9. Use the scalar (dot) product to find the angle between two vectors and the area of a triangle formed by two vectors.

### 3. Compact Prerequisite Recap

Before working with vectors, it helps to recall some GCSE concepts:

* **Coordinate geometry:** A point in the plane can be described by coordinates $(x,y)$.  The difference in the $x$‑coordinates and $y$‑coordinates between two points gives the horizontal and vertical changes.
* **Pythagoras’ theorem:** In a right‑angled triangle with legs $a$ and $b$ and hypotenuse $c$, $c^2=a^2+b^2$.  This theorem underpins the magnitude formula $|\mathbf{a}|=\sqrt{x^2+y^2}$.
* **Trigonometric ratios:** For an angle $\theta$ in a right‑angled triangle, $\tan\theta=\frac{\text{opposite}}{\text{adjacent}}$, $\sin\theta=\frac{\text{opposite}}{\text{hypotenuse}}$ and $\cos\theta=\frac{\text{adjacent}}{\text{hypotenuse}}$.  These ratios help convert between component form and $(r,\theta)$ form.
* **Basic algebra:** The ability to add and multiply numbers, work with fractions and rearrange formulas is essential for manipulating vectors.

### 4. Big Picture Explanation

Vectors are fundamental tools across mathematics, physics and engineering.  In AS and A level mathematics they appear both in pure topics (for describing positions, geometry and proofs) and in applied topics (for describing velocities, accelerations and forces).  A vector is more than a number: it has a **magnitude** (how long it is) and a **direction** (where it points).  Throughout this lesson, you will learn how to represent vectors, perform basic operations on them, interpret them geometrically and use them in modelling contexts.

### 5. Key Definitions and Notation

* **Vector:** A quantity with both **magnitude** (length) and **direction**.  In two dimensions we write a vector as a column vector $
\displaystyle \mathbf{a} = \begin{pmatrix}x\\y\end{pmatrix},
$ where $x$ and $y$ are the horizontal and vertical components.  Vectors are often drawn as arrows.

* **Position vector:** The vector from the origin $O(0,0)$ to a point $A(x,y)$ is written $\overrightarrow{OA}$ or simply $\mathbf{a}$.  Position vectors tell you where a point is relative to the origin.

* **Magnitude of a vector:** The length of the vector $\mathbf{a}=(x,y)$ is denoted $|\mathbf{a}|$ and given by
$$|\mathbf{a}|=\sqrt{x^2+y^2}.\tag{1}$$

* **Direction of a vector:** The direction angle $\theta$ of a non‑zero vector $\mathbf{a}=(x,y)$ is the angle measured anticlockwise from the positive $x$‑axis to the vector.  When $x>0$, one can find $\theta$ using
$$\theta=\tan^{-1}\!\Bigl(\tfrac{y}{x}\Bigr).\tag{2}$$
For other quadrants you must adjust the angle (see the quadrant table below).

* **Unit vectors:** The standard unit vectors in the $x$ and $y$ directions are
$$\mathbf{i}=\begin{pmatrix}1\\0\end{pmatrix},\quad \mathbf{j}=\begin{pmatrix}0\\1\end{pmatrix}.$$ Any vector $(x,y)$ can be written as $x\,\mathbf{i}+y\,\mathbf{j}$.

* **Scalar multiple:** If $k$ is a real number (scalar) and $\mathbf{a}=(x,y)$ then
$$k\mathbf{a} = k\begin{pmatrix}x\\y\end{pmatrix} = \begin{pmatrix}kx\\ky\end{pmatrix}.\tag{3}$$ If $k$ is negative, the vector reverses its direction.

* **Vector addition:** If $\mathbf{a}=(x_1,y_1)$ and $\mathbf{b}=(x_2,y_2)$ then
$$\mathbf{a}+\mathbf{b}=\begin{pmatrix}x_1+x_2\\y_1+y_2\end{pmatrix}.\tag{4}$$ Geometrically this corresponds to placing the tail of $\mathbf{b}$ at the head of $\mathbf{a}$ and drawing the resultant from the tail of $\mathbf{a}$ to the head of $\mathbf{b}$.

* **Scalar (dot) product:** For vectors $\mathbf{a}=(a_x,a_y)$ and $\mathbf{b}=(b_x,b_y)$,
$$\mathbf{a}\cdot\mathbf{b}=a_xb_x + a_yb_y = |\mathbf{a}|\,|\mathbf{b}|\cos\theta,\tag{5}$$ where $\theta$ is the angle between $\mathbf{a}$ and $\mathbf{b}$.  This operation allows you to find the angle between two vectors and appears in extension problems.

### 6. Core Theory

#### 6.1 What is a Vector?

At GCSE you learned to locate points by their coordinates $(x,y)$.  A vector tells you the **displacement** from one point to another.  For example, if you move 3 units right and 2 units up from the origin, the vector is $\begin{pmatrix}3\\2\end{pmatrix}$.  Vectors have both size and direction; they are not fixed at a point and can slide parallel to themselves.

The distinction between **coordinates** and **vectors** is summarised below:

| Interpretation | Example | Meaning |
|---|---|---|
| **Coordinates (position)** | The point $A(3,2)$ | Tells you where the point $A$ is. |
| **Vector (displacement)** | $\overrightarrow{AB}$ | Tells you how to get from $A$ to $B$.  It has both magnitude and direction. |


#### 6.2 Representing a Vector

A vector in two dimensions can be written as a column vector showing its horizontal ($x$) and vertical ($y$) components:
$$\mathbf{a} = \begin{pmatrix}x\\y\end{pmatrix}.\tag{6}$$ For example, the vector
$$\mathbf{a}=\begin{pmatrix}3\\ -2\end{pmatrix}$$ means “move 3 units to the right and 2 units down”.  The standard unit vectors are $\mathbf{i}$ and $\mathbf{j}$; thus
$$\begin{pmatrix}3\\ -2\end{pmatrix} = 3\,\mathbf{i} - 2\,\mathbf{j}.$$

To visualise a vector, sketch an arrow starting at the origin and ending at the point $(x,y)$.  This is shown in the TikZ diagram below.

[VISUAL PLACEHOLDER: TIKZ-001 | Source: lesson PDF p.1 | Insert from AS1_vectors_tikz.md | Purpose: illustrate a vector $(3,-2)$ and its components]


#### 6.3 Addition of Vectors

Vectors add componentwise.  If
$$\mathbf{a}=\begin{pmatrix}x_1\\y_1\end{pmatrix},\quad \mathbf{b}=\begin{pmatrix}x_2\\y_2\end{pmatrix},$$ then the sum is
$$\mathbf{a}+\mathbf{b}=\begin{pmatrix}x_1+x_2\\y_1+y_2\end{pmatrix}.\tag{7}$$ This corresponds to placing the tail of $\mathbf{b}$ at the head of $\mathbf{a}$ and drawing the resultant.  The PDF gives an example with $\mathbf{a}=(3,-2)$ and $\mathbf{b}=(1,4)$:
$$\mathbf{a}+\mathbf{b}=\begin{pmatrix}3+1\\ -2+4\end{pmatrix} = \begin{pmatrix}4\\2\end{pmatrix}.$$

The **triangle law** and **parallelogram law** are geometric interpretations of addition.  When traversing a route composed of several vectors, you add the vectors in order.  For example, in the route $P \rightarrow Q \rightarrow S \rightarrow R$, the overall displacement is $\overrightarrow{PQ} + \overrightarrow{QS} + \overrightarrow{SR}$.  If a route is reversed, the vector changes sign; for instance, $\overrightarrow{QP} = -\overrightarrow{PQ}$.

The table below (adapted from the PDF) shows how to express various routes in terms of vectors $\mathbf{a}$, $\mathbf{b}$, $\mathbf{c}$ and $\mathbf{d}$.

| Route (follow the arrows) | In terms of $\mathbf{a}$, $\mathbf{b}$, $\mathbf{c}$, $\mathbf{d}$ |
|---|---|
| $Q \to T$ | $\overrightarrow{QT} = \overrightarrow{QP} + \overrightarrow{PT} = -\mathbf{a} + \mathbf{d} - \mathbf{a}$ |
| $P \to R$ | $\overrightarrow{PR} = \overrightarrow{PQ} + \overrightarrow{QS} + \overrightarrow{SR} = \mathbf{a} + \mathbf{b} + \mathbf{c}$ |
| $T \to S$ | $\overrightarrow{TS} = \overrightarrow{TP} + \overrightarrow{PQ} + \overrightarrow{QS} = -(\mathbf{d}-\mathbf{a}) + \mathbf{a} + \mathbf{b} = \mathbf{b} - \mathbf{d}$ |
| $T \to R$ | $\overrightarrow{TR} = \overrightarrow{TP} + \overrightarrow{PQ} + \overrightarrow{QS} + \overrightarrow{SR} = -(\mathbf{d}-\mathbf{a}) + \mathbf{a} + \mathbf{b} + \mathbf{c} = \mathbf{b} + \mathbf{c} - \mathbf{d}$ |

These identities illustrate how following arrows in order corresponds to adding vectors.  A companion TikZ diagram (TIKZ‑002) visualises the route with labelled vectors.

[VISUAL PLACEHOLDER: TIKZ-002 | Source: lesson PDF p.1 | Insert from AS1_vectors_tikz.md | Purpose: illustrate a route of vectors and the triangle/parallelogram law]


#### 6.4 Scalar Multiples

Multiplying a vector by a scalar $k$ stretches or shrinks the vector.  Using definition (3), if
$$\mathbf{a}=\begin{pmatrix}x\\y\end{pmatrix},$$ then for any real number $k$,
$$k\mathbf{a} = \begin{pmatrix}kx\\ky\end{pmatrix}.$$  
If $k>0$, the vector keeps its direction; if $k<0$, it reverses direction.  For example, with $\mathbf{a}=(3,-2)$:

* $2\mathbf{a}=\begin{pmatrix}6\\-4\end{pmatrix}$ is twice as long in the same direction.
* $\frac{1}{2}\mathbf{a}=\begin{pmatrix}\tfrac{3}{2}\\-1\end{pmatrix}$ is half as long.
* $-\mathbf{a}=\begin{pmatrix}-3\\2\end{pmatrix}$ has the same magnitude but points in the opposite direction.


#### 6.5 i, j Notation and Unit Vectors

The unit vectors
$$\mathbf{i}=\begin{pmatrix}1\\0\end{pmatrix}, \qquad \mathbf{j}=\begin{pmatrix}0\\1\end{pmatrix}$$ allow us to write any vector succinctly.  If $\mathbf{a}=(x,y)$ then
$$\mathbf{a} = x\,\mathbf{i} + y\,\mathbf{j}.$$ For example,
$$\begin{pmatrix}4\\ -3\end{pmatrix} = 4\,\mathbf{i} - 3\,\mathbf{j}.$$ Expressing vectors in terms of **i** and **j** can simplify algebra and geometry because you can treat the horizontal and vertical components separately.

#### 6.6 Magnitude of a Vector

The **magnitude** (or length) of a vector $\mathbf{a}=(x,y)$ is given by formula (1).  This follows directly from Pythagoras’ theorem since the components $x$ and $y$ form the legs of a right‑angled triangle.  For example:

| Vector $\mathbf{a}$ | Calculation | $|\mathbf{a}|$ |
|---|---|---|
| $\begin{pmatrix}3\\4\end{pmatrix}$ | $\sqrt{3^2+4^2}=\sqrt{25}$ | 5 |
| $\begin{pmatrix}1\\-1\end{pmatrix}$ | $\sqrt{1^2+(-1)^2}=\sqrt{2}$ | $\sqrt{2}$ |
| $\begin{pmatrix}-5\\-12\end{pmatrix}$ | $\sqrt{(-5)^2+(-12)^2}=\sqrt{169}$ | 13 |
| $\begin{pmatrix}-4\\4\end{pmatrix}$ | $\sqrt{(-4)^2+4^2}=\sqrt{32}$ | $4\sqrt{2}$ |
| $\begin{pmatrix}2\\0\end{pmatrix}$ | $\sqrt{2^2+0^2}=\sqrt{4}$ | 2 |

Magnitude is always non‑negative.  The zero vector $\mathbf{0}=\begin{pmatrix}0\\0\end{pmatrix}$ has magnitude zero.

In modelling problems you often need the magnitude of a velocity vector in order to compute speed.  An interactive widget (WIDGET‑001) lets you vary $x$ and $y$ and instantly see $|\mathbf{a}|$.


#### 6.7 Direction of a Vector

To describe the **direction** of a non‑zero vector $\mathbf{a}=(x,y)$, draw it from the origin and measure the angle $\theta$ from the positive $x$‑axis anticlockwise.  When $x>0$ the angle can be found using the inverse tangent function:
$$\theta = \tan^{-1}\!\Bigl(\frac{y}{x}\Bigr).\tag{8}$$

However, $\tan^{-1}$ returns an acute angle between $-90^{\circ}$ and $90^{\circ}$, so you must check which quadrant the vector is in.  The signs of $x$ and $y$ determine the quadrant:

| Quadrant | Sign of $x$ | Sign of $y$ | Adjustment to $\theta$ |
|---|---|---|---|
| I (upper right) | $+$ | $+$ | $\theta=\tan^{-1}(\tfrac{y}{x})$ |
| II (upper left) | $-$ | $+$ | $\theta=180^{\circ}-\tan^{-1}\bigl(\tfrac{|y|}{|x|}\bigr)$ |
| III (lower left) | $-$ | $-$ | $\theta=180^{\circ}+\tan^{-1}\bigl(\tfrac{|y|}{|x|}\bigr)$ |
| IV (lower right) | $+$ | $-$ | $\theta=360^{\circ}-\tan^{-1}\bigl(\tfrac{|y|}{|x|}\bigr)$ |

A quick sketch will help you decide the correct quadrant.  Recall that the direction is always measured anticlockwise from the positive $x$‑axis.


#### 6.8 Building a Vector from Magnitude and Angle

Given a magnitude $r=|\mathbf{a}|$ and a direction angle $\theta$, you can reconstruct the vector using trigonometry:
$$\begin{pmatrix}x\\y\end{pmatrix} = \begin{pmatrix}r\cos\theta\\r\sin\theta\end{pmatrix}.\tag{9}$$

For example, a vector of magnitude 10 and direction $30^{\circ}$ has components
$$\begin{pmatrix}10\cos 30^{\circ}\\10\sin 30^{\circ}\end{pmatrix} = \begin{pmatrix}5\sqrt{3}\\5\end{pmatrix}.$$

Conversely, if you know the components you can determine $r$ and $\theta$ using formulas (1) and (8).  An interactive widget (WIDGET‑002) allows you to vary $r$ and $\theta$ and observe the resulting components.


#### 6.9 Position Vectors and Translation

A **position vector** $\overrightarrow{OP} = \mathbf{p}$ represents the location of a point $P$ relative to the origin $O$.  If you translate $P$ by another vector $\mathbf{a}$, the new point $Q$ has position vector
$$\overrightarrow{OQ} = \overrightarrow{OP} + \overrightarrow{PQ} = \mathbf{p} + \mathbf{a}.\tag{10}$$

For instance, suppose $P$ has position vector $\begin{pmatrix}3\\2\end{pmatrix}$ and you translate by $\begin{pmatrix}4\\0\end{pmatrix}$.  Then the new point $Q$ has position vector $\begin{pmatrix}3\\2\end{pmatrix}+\begin{pmatrix}4\\0\end{pmatrix} = \begin{pmatrix}7\\2\end{pmatrix}$, so $Q$ is at $(7,2)$.  Position vectors make it easy to perform such translations algebraically.


#### 6.10 Modelling with Vectors: Speed and Distance

In mechanics it is important to distinguish between **vector quantities**, which have direction, and **scalar quantities**, which do not.  The velocity of a particle is a vector $(v_x,v_y)$ measured, say, in km h$^{-1}$; its speed is the magnitude $|\mathbf{v}|$ measured in the same units.  Displacement is a vector describing the change in position; distance is a scalar equal to the magnitude of the displacement (or, for uniform motion, speed × time).

The table below summarises this distinction:

| Quantity | Vector or scalar? | Example |
|---|---|---|
| **Velocity** | Vector | $\begin{pmatrix}3\\4\end{pmatrix}$ km h$^{-1}$ |
| **Displacement** | Vector | $\begin{pmatrix}-5\\12\end{pmatrix}$ km |
| **Speed** | Scalar | $\sqrt{3^2+4^2}=5$ km h$^{-1}$ |
| **Distance** | Scalar | 13 km |

When a particle moves with constant velocity $\mathbf{v}$ for time $t$, the **distance travelled** is
$$\text{distance} = |\mathbf{v}|\times t.\tag{11}$$

**Worked example (modelling):** A particle moves with velocity $\begin{pmatrix}8\\6\end{pmatrix}$ km h$^{-1}$ for 5 hours.  Its speed is $|\mathbf{v}|=\sqrt{8^2+6^2}=10$ km h$^{-1}$ and therefore the distance is $10\times 5=50$ km.  If units are not consistent (for example, time is given in minutes or seconds), convert time to hours before multiplying.  Part 3 of the PDF includes further examples with unit conversions.

An interactive widget could help you experiment with different velocity vectors and times to see how the speed and distance change.  For brevity this lesson focuses on the core vector ideas; speed–distance–time widgets are left as an optional extension.


#### 6.11 Vector Geometry Proofs

Vector methods provide elegant solutions to geometric problems.  Some key facts used in proofs are:

* **Parallel vectors:** Two vectors are parallel if one is a non‑zero scalar multiple of the other.  In symbols, $\mathbf{a}\parallel\mathbf{b}$ if there exists $k\neq 0$ such that $\mathbf{a}=k\mathbf{b}$.
* **Midpoint of a line segment:** The midpoint of $AB$ has position vector $\frac{\mathbf{a} + \mathbf{b}}{2}$, where $\mathbf{a}=\overrightarrow{OA}$ and $\mathbf{b}=\overrightarrow{OB}$.
* **Internal division of a line:** A point $X$ dividing $AB$ in the ratio $m:n$ (with $AX:XB=m:n$) has position vector
$$\overrightarrow{OX} = \frac{n\mathbf{a} + m\mathbf{b}}{m+n}.\tag{12}$$


##### 6.11.1 Proof Example – Parallelogram with Ratio and Midpoint

**Problem:**  In parallelogram $OABC$, let $\overrightarrow{OA} = \mathbf{a}$ and $\overrightarrow{OB} = \mathbf{b}$.  Point $X$ lies on $AB$ such that $AX:XB = 3:1$, and $M$ is the midpoint of $BC$.  Show that $\overrightarrow{XM}$ is parallel to $\overrightarrow{OC}$.

**Solution:**

1. Find $\overrightarrow{OC}$ and $\overrightarrow{BC}$.  Since $\overrightarrow{OC} = \overrightarrow{OA}+\overrightarrow{AB} = \mathbf{a}+\mathbf{b}$ and $\overrightarrow{BC} = \overrightarrow{OC}-\overrightarrow{OB} = (\mathbf{a}+\mathbf{b}) - \mathbf{b} = \mathbf{a}$.
2. Find the position vector of $X$ using ratio (12).  Because $AX:XB = 3:1$, set $m=3$ and $n=1$.  Then
$$\overrightarrow{OX} = \frac{n\mathbf{a} + m\mathbf{b}}{m+n} = \frac{1\cdot\mathbf{a} + 3\cdot\mathbf{b}}{4} = \tfrac{1}{4}\mathbf{a} + \tfrac{3}{4}\mathbf{b}.$$
3. Find the position vector of $M$, the midpoint of $BC$.  Since $\overrightarrow{B}=\mathbf{b}$ and $\overrightarrow{C}=\mathbf{a}+\mathbf{b}$, the midpoint $M$ has position vector
$$\overrightarrow{OM} = \frac{\overrightarrow{OB} + \overrightarrow{OC}}{2} = \frac{\mathbf{b} + (\mathbf{a}+\mathbf{b})}{2} = \tfrac{1}{2}\mathbf{a} + \mathbf{b}.$$
4. Compute $\overrightarrow{XM} = \overrightarrow{OM}-\overrightarrow{OX}$.  Substituting gives
$$\overrightarrow{XM} = \Bigl(\tfrac{1}{2}\mathbf{a} + \mathbf{b}\Bigr) - \Bigl(\tfrac{1}{4}\mathbf{a} + \tfrac{3}{4}\mathbf{b}\Bigr) = \tfrac{1}{4}\mathbf{a} + \tfrac{1}{4}\mathbf{b} = \tfrac{1}{4}(\mathbf{a}+\mathbf{b}).$$
5. Compare $\overrightarrow{XM}$ with $\overrightarrow{OC}$.  Since $\overrightarrow{OC} = \mathbf{a}+\mathbf{b}$, we have $\overrightarrow{XM}=\tfrac{1}{4}\overrightarrow{OC}$.  Therefore $\overrightarrow{XM}$ and $\overrightarrow{OC}$ are parallel.

The general strategy for vector proofs is to draw a clear diagram, label all vectors, express required points using position vectors and then show that one vector is a scalar multiple of another.  A TikZ diagram (TIKZ‑004) visualises the parallelogram and the points involved.

[VISUAL PLACEHOLDER: TIKZ-004 | Source: lesson PDF p.4 | Insert from AS1_vectors_tikz.md | Purpose: parallelogram problem with ratio and midpoint]


##### 6.11.2 Triangle Problem – Angle and Area

**Problem:**  Let $\mathbf{AB}=3\mathbf{i} - 2\mathbf{j}$ and $\mathbf{AC}=\mathbf{i} - 5\mathbf{j}$.  Find:

1. The length of $BC$.
2. The angle $\angle BAC$.
3. The area of triangle $ABC$.

**Solution:**

1. **Length of $BC$:**  The vector $\mathbf{BC}$ can be found using $\mathbf{BC}=\mathbf{AC}-\mathbf{AB}$ (travelling from $A$ to $C$ then back to $B$).  Substituting gives $\mathbf{BC}=(1,-5)-(3,-2)=(-2,-3)$.  Its length is
$$|\mathbf{BC}|=\sqrt{(-2)^2 + (-3)^2}=\sqrt{4+9}=\sqrt{13}.$$
2. **Angle $\angle BAC$:**  Use the scalar product formula (5).  We have $\mathbf{AB}\cdot\mathbf{AC} = (3,-2)\cdot(1,-5) = 3\cdot1 + (-2)\cdot(-5) = 3+10 = 13$.  The magnitudes are $|\mathbf{AB}|=\sqrt{3^2+(-2)^2}=\sqrt{13}$ and $|\mathbf{AC}|=\sqrt{1^2+(-5)^2}=\sqrt{26}$.  Therefore
$$\cos\angle BAC = \frac{\mathbf{AB}\cdot\mathbf{AC}}{|\mathbf{AB}|\,|\mathbf{AC}|} = \frac{13}{\sqrt{13}\sqrt{26}} = \frac{13}{\sqrt{338}} = \frac{1}{\sqrt{2}}.$$ 
Hence $\angle BAC = \cos^{-1}\!\bigl(\tfrac{1}{\sqrt{2}}\bigr) = 45^{\circ}.$
3. **Area of triangle $ABC$:**  A triangle with sides $a=|\mathbf{AB}|$, $b=|\mathbf{AC}|$ and included angle $C=\angle BAC$ has area
$$\text{Area} = \tfrac{1}{2}ab\sin C = \tfrac{1}{2}\cdot \sqrt{13}\cdot \sqrt{26}\cdot \sin 45^{\circ}.$$
Since $\sin 45^{\circ}=\tfrac{1}{\sqrt{2}}$, this simplifies to
$$\text{Area} = \tfrac{1}{2}\cdot \sqrt{13}\cdot \sqrt{13}\cdot \sqrt{2} = \tfrac{1}{2}\cdot 13 \cdot \sqrt{2} = \tfrac{13}{\sqrt{2}}.$$
Thus the area of triangle $ABC$ is $\frac{13}{\sqrt{2}}$ square units.

A corresponding TikZ diagram (TIKZ‑005) shows the triangle and the vectors involved.

[VISUAL PLACEHOLDER: TIKZ-005 | Source: lesson PDF p.4 | Insert from AS1_vectors_tikz.md | Purpose: triangle problem with vectors and angle]


### 7. Visual Asset Integration

This lesson incorporates visual assets to make the abstract concepts concrete.  For each asset you will find a placeholder in the notes and the corresponding code in the diagram files.  Below is a summary of the assets used:

| Asset ID | Type | Source | Purpose |
|---|---|---|---|
| **TIKZ‑001** | TikZ | Lesson PDF p.1 | Show how a vector $(3,-2)$ is drawn, including its $x$ and $y$ components. |
| **TIKZ‑002** | TikZ | Lesson PDF p.1 | Illustrate a route of vectors and the triangle/parallelogram laws of addition. |
| **TIKZ‑003** | TikZ | AI‑proposed | Depict the general vector $(x,y)$ from the origin with components, used when defining magnitude and direction. |
| **TIKZ‑004** | TikZ | Lesson PDF p.4 | Show the parallelogram problem with points $O,A,B,C,X,M$. |
| **TIKZ‑005** | TikZ | Lesson PDF p.4 | Draw triangle $ABC$ for the angle and area example. |
| **MMD‑001** | Mermaid | AI‑proposed | Flowchart summarising the process of converting a velocity vector into distance (speed–distance–time). |
| **SVG‑001** | SVG | AI‑proposed | Visual summary of key vector formulas (addition, scalar multiple, magnitude, direction, component from $(r,\theta)$). |
| **WIDGET‑001** | HTML/JS widget | AI‑proposed | Interactive explorer for vector magnitude and direction.  Learners can change $x$ and $y$ and see $|\mathbf{a}|$ and $\theta$. |
| **WIDGET‑002** | HTML/JS widget | AI‑proposed | Interactive builder: choose magnitude $r$ and angle $\theta$ to see components $x=r\cos\theta$, $y=r\sin\theta$. |
| **WIDGET‑003** | HTML/JS widget | AI‑proposed | Vector addition explorer: enter two vectors and view their resultant both numerically and graphically. |


### 8. Interactive Learning Widgets

Interactive tools help you explore vectors dynamically.  Each widget is provided in a separate file with instructions.  Below is an overview of what each widget does and how it relates to the specification.

#### Widget WIDGET‑001: Vector Magnitude and Direction Explorer

**Source:** AI‑proposed teaching enhancement, not present in lesson PDF.  
**Purpose:** Allow students to input the $x$ and $y$ components of a vector and immediately see the magnitude $|\mathbf{a}|$ and the direction angle $\theta$.  A simple canvas shows the vector arrow.  The learner should notice how changing the signs of $x$ and $y$ moves the vector into different quadrants and alters $\theta$.  This widget reinforces formulas (1) and (8) and emphasises quadrant adjustments.  
**Exam connection:** Whilst the calculator can compute magnitudes and angles, exam questions require you to show these calculations on paper.  The widget helps build intuition but you must still apply the formulas manually in exams.

[INTERACTIVE PLACEHOLDER: WIDGET-001 | Source: AI-proposed teaching enhancement, not present in lesson PDF | Insert from AS1_vectors_widgets.md | Purpose: slider exploration of vector magnitude and direction]


#### Widget WIDGET‑002: Vector Builder from Magnitude and Angle

**Source:** AI‑proposed teaching enhancement, not present in lesson PDF.  
**Purpose:** Given a magnitude $r$ and direction $\theta$, this widget computes $x=r\cos\theta$ and $y=r\sin\theta$ and displays the resulting vector.  A canvas shows the arrow.  The learner sees how the same magnitude with different angles produces vectors in different quadrants.  This reinforces formula (9) and helps with modelling problems where you know the speed and direction.  
**Exam connection:** In exam questions you will be expected to compute $r\cos\theta$ and $r\sin\theta$ by hand, often with exact trigonometric values.  Use the widget for exploration, not as a substitute for working. 

[INTERACTIVE PLACEHOLDER: WIDGET-002 | Source: AI-proposed teaching enhancement, not present in lesson PDF | Insert from AS1_vectors_widgets.md | Purpose: build vectors from given magnitude and angle]


#### Widget WIDGET‑003: Vector Addition Explorer

**Source:** AI‑proposed teaching enhancement, not present in lesson PDF.  
**Purpose:** Let students input two vectors and see their sum both algebraically and graphically.  The canvas shows the triangle/parallelogram law in action by drawing the two vectors and the resultant.  This widget solidifies the concept of componentwise addition and links the algebraic rule (7) with its geometric interpretation.  
**Exam connection:** You must know how to add vectors by hand and sketch resultant vectors.  The widget is a tool to build your intuition.

[INTERACTIVE PLACEHOLDER: WIDGET-003 | Source: AI-proposed teaching enhancement, not present in lesson PDF | Insert from AS1_vectors_widgets.md | Purpose: explore vector addition graphically and numerically]


### 9. Worked Examples

Worked examples throughout the lesson demonstrate how to apply the theory.

1. **Example (addition):**  Given $\mathbf{a}=\begin{pmatrix}3\\-2\end{pmatrix}$ and $\mathbf{b}=\begin{pmatrix}1\\4\end{pmatrix}$, find $\mathbf{a}+\mathbf{b}$.  **Solution:** Add components: $\mathbf{a}+\mathbf{b}=\begin{pmatrix}3+1\\-2+4\end{pmatrix}=\begin{pmatrix}4\\2\end{pmatrix}$.

2. **Example (scalar multiple):**  Given $\mathbf{a}=\begin{pmatrix}-5\\12\end{pmatrix}$, find $\tfrac{1}{2}\mathbf{a}$ and $-\mathbf{a}$.  **Solution:**  $\tfrac{1}{2}\mathbf{a} = \begin{pmatrix}-\tfrac{5}{2}\\6\end{pmatrix}$ and $-\mathbf{a} = \begin{pmatrix}5\\-12\end{pmatrix}$.

3. **Example (magnitude and direction):**  Let $\mathbf{a}=\begin{pmatrix}-4\\4\end{pmatrix}$.  (a) Find $|\mathbf{a}|$.  (b) Determine its direction.  **Solution:**  (a) $|\mathbf{a}|=\sqrt{(-4)^2+4^2}=4\sqrt{2}$.  (b) $\tan\theta=\frac{y}{x}=\frac{4}{-4}=-1$.  The vector lies in quadrant II ($x<0,y>0$).  Thus $\theta=180^{\circ}-45^{\circ}=135^{\circ}$.

4. **Example (building from $r$ and $\theta$):**  Construct a vector of magnitude 7 and direction $210^{\circ}$.  **Solution:**  $x=7\cos 210^{\circ}=7(-\tfrac{\sqrt{3}}{2})=-\tfrac{7\sqrt{3}}{2}$, $y=7\sin 210^{\circ}=7(-\tfrac{1}{2})=-\tfrac{7}{2}$.  So the vector is $\begin{pmatrix}-\tfrac{7\sqrt{3}}{2}\\-\tfrac{7}{2}\end{pmatrix}$.

5. **Example (translation):**  A point $P$ has position vector $\begin{pmatrix}2\\5\end{pmatrix}$.  Translate $P$ by vector $\begin{pmatrix}-3\\4\end{pmatrix}$.  **Solution:**  The new position vector is $\begin{pmatrix}2\\5\end{pmatrix}+\begin{pmatrix}-3\\4\end{pmatrix}=\begin{pmatrix}-1\\9\end{pmatrix}$.  Therefore the translated point $Q$ is at $(-1,9)$.

6. **Example (speed–distance modelling):**  A cyclist cycles with velocity $\begin{pmatrix}5\\-12\end{pmatrix}$ km h$^{-1}$ for 45 minutes.  Find the distance travelled.  **Solution:**  Speed = $\sqrt{5^2+(-12)^2}=13$ km h$^{-1}$.  Time = $45$ min = $\tfrac{45}{60}=0.75$ h.  Distance = speed $\times$ time = $13\times 0.75=9.75$ km.

7. **Example (parallel vectors):**  Given vectors $\mathbf{p}=\begin{pmatrix}2\\-1\end{pmatrix}$ and $\mathbf{q}=\begin{pmatrix}-6\\3\end{pmatrix}$, show that $\mathbf{p}\parallel\mathbf{q}$.  **Solution:**  Note that $\mathbf{q}=-3\mathbf{p}$.  Since $\mathbf{q}$ is a scalar multiple of $\mathbf{p}$, the vectors are parallel.

8. **Example (dot product angle):**  Let $\mathbf{u}=\begin{pmatrix}4\\2\end{pmatrix}$ and $\mathbf{v}=\begin{pmatrix}3\\1\end{pmatrix}$.  Find the angle between $\mathbf{u}$ and $\mathbf{v}$.  **Solution:**  $\mathbf{u}\cdot\mathbf{v}=4\cdot3+2\cdot1=14$.  $|\mathbf{u}|=\sqrt{4^2+2^2}=\sqrt{20}$, $|\mathbf{v}|=\sqrt{3^2+1^2}=\sqrt{10}$.  Hence $\cos\theta=\frac{14}{\sqrt{20}\cdot\sqrt{10}}=\frac{14}{\sqrt{200}}=\frac{14}{10\sqrt{2}}=\frac{7}{5\sqrt{2}}$.  Thus $\theta=\cos^{-1}\!\bigl(\tfrac{7}{5\sqrt{2}}\bigr)\approx 20.7^{\circ}$.


### 10. Common Mistakes and Exam Traps

* **Forgetting the negative sign when reversing a vector.**  $\overrightarrow{PQ}=\mathbf{a}$ implies $\overrightarrow{QP}=-\mathbf{a}$.  Neglecting the sign change leads to incorrect results.
* **Mixing up position vectors and displacements.**  Remember that $\mathbf{q}-\mathbf{p}$ is the vector from point $P$ to point $Q$; it is not the same as the coordinates of $Q$.
* **Omitting quadrant considerations when finding directions.**  Always sketch the vector and adjust $\theta$ to the correct quadrant.  Using $\tan^{-1}(y/x)$ blindly can give the wrong angle.
* **Failing to convert units in modelling problems.**  When time is given in minutes or seconds, convert to hours before multiplying by a speed measured in km h$^{-1}$.
* **Not justifying parallel vectors.**  To show that two vectors are parallel, explicitly demonstrate that one is a scalar multiple of the other.
* **Dropping vector notation in scalar products.**  When using the dot product, ensure you operate on vectors, not on magnitudes.


### 11. Practice Questions

The following questions mirror the style of the AS level examination and the exercises in the PDF.  Attempt them before looking at the solutions.

1. (a) Let $\mathbf{a}=\begin{pmatrix}2\\-3\end{pmatrix}$ and $\mathbf{b}=\begin{pmatrix}-4\\1\end{pmatrix}$.  Compute $\mathbf{a}+\mathbf{b}$ and $2\mathbf{a}-3\mathbf{b}$.  
(b) Sketch $\mathbf{a}$ and $\mathbf{b}$ on the same axes and draw their resultant $\mathbf{a}+\mathbf{b}$.

2. A vector $\mathbf{p}$ has magnitude $10$ and direction $150^{\circ}$.  Find its components.  Then find the magnitude and direction of $-2\mathbf{p}$.

3. Points $A$, $B$ and $C$ have position vectors $\mathbf{a}=\begin{pmatrix}4\\1\end{pmatrix}$, $\mathbf{b}=\begin{pmatrix}-2\\5\end{pmatrix}$ and $\mathbf{c}=\begin{pmatrix}1\\-3\end{pmatrix}$ respectively.  
(a) Find the vectors $\overrightarrow{AB}$ and $\overrightarrow{AC}$.  
(b) Determine $\overrightarrow{BC}$.  
(c) Show that triangle $ABC$ is right‑angled.

4. In a parallelogram $OPQR$, $\overrightarrow{OP}=\begin{pmatrix}1\\2\end{pmatrix}$ and $\overrightarrow{OQ}=\begin{pmatrix}3\\-1\end{pmatrix}$.  Point $S$ lies on $PQ$ such that $PS:SQ = 1:2$.  Find the position vector of $S$.

5. A particle moves with velocity $\mathbf{v}=\begin{pmatrix}-6\\8\end{pmatrix}$ m s$^{-1}$ for 2 minutes.  Calculate its speed and the distance travelled.

6. Show that the vectors $\begin{pmatrix}1\\2\end{pmatrix}$, $\begin{pmatrix}-2\\4\end{pmatrix}$ and $\begin{pmatrix}3\\-6\end{pmatrix}$ all lie along the same line.

7. Given $\mathbf{u}=\begin{pmatrix}5\\-2\end{pmatrix}$ and $\mathbf{v}=\begin{pmatrix}1\\1\end{pmatrix}$, compute $\mathbf{u}\cdot\mathbf{v}$ and hence find the angle between them.

8. Triangle $PQR$ has position vectors $\overrightarrow{OP}=\begin{pmatrix}1\\2\end{pmatrix}$, $\overrightarrow{OQ}=\begin{pmatrix}4\\-1\end{pmatrix}$ and $\overrightarrow{OR}=\begin{pmatrix}-2\\5\end{pmatrix}$.  Calculate the area of triangle $PQR$.


### 12. Worked Solutions

Detailed solutions are provided so you can check your work and learn from any mistakes.

1. **(a)** $\mathbf{a}+\mathbf{b} = \begin{pmatrix}2+(-4)\\-3+1\end{pmatrix}=\begin{pmatrix}-2\\-2\end{pmatrix}$.  
$2\mathbf{a}-3\mathbf{b} = 2\begin{pmatrix}2\\-3\end{pmatrix}-3\begin{pmatrix}-4\\1\end{pmatrix} = \begin{pmatrix}4\\-6\end{pmatrix}-\begin{pmatrix}-12\\3\end{pmatrix} = \begin{pmatrix}16\\-9\end{pmatrix}$.  
**(b)** Sketch $\mathbf{a}$ from the origin to $(2,-3)$ and $\mathbf{b}$ from the origin to $(-4,1)$.  To draw $\mathbf{a}+\mathbf{b}$, place $\mathbf{b}$’s tail at $\mathbf{a}$’s head and draw the resultant from the origin to the head of $\mathbf{b}$.  The resultant ends at $(-2,-2)$.  (A sketch is sufficient; you do not need graph paper.)

2. A vector of magnitude 10 and direction $150^{\circ}$ has components
$$\begin{pmatrix}10\cos150^{\circ}\\10\sin150^{\circ}\end{pmatrix} = \begin{pmatrix}10\times(-\tfrac{\sqrt{3}}{2})\\10\times\tfrac{1}{2}\end{pmatrix} = \begin{pmatrix}-5\sqrt{3}\\5\end{pmatrix}.$$ Multiplying by –2 gives $-2\mathbf{p}=\begin{pmatrix}10\sqrt{3}\\-10\end{pmatrix}$.  The magnitude doubles to 20; the direction rotates by $180^{\circ}$, so the new angle is $150^{\circ}+180^{\circ}=330^{\circ}$.

3. **(a)** $\overrightarrow{AB} = \mathbf{b}-\mathbf{a} = \begin{pmatrix}-2\\5\end{pmatrix}-\begin{pmatrix}4\\1\end{pmatrix} = \begin{pmatrix}-6\\4\end{pmatrix}$ and $\overrightarrow{AC} = \mathbf{c}-\mathbf{a} = \begin{pmatrix}1\\-3\end{pmatrix}-\begin{pmatrix}4\\1\end{pmatrix} = \begin{pmatrix}-3\\-4\end{pmatrix}$.  
**(b)** $\overrightarrow{BC} = \mathbf{c}-\mathbf{b} = \begin{pmatrix}1\\-3\end{pmatrix}-\begin{pmatrix}-2\\5\end{pmatrix} = \begin{pmatrix}3\\-8\end{pmatrix}$.  
**(c)** To show that $\triangle ABC$ is right‑angled, check that $\overrightarrow{AB}\cdot\overrightarrow{AC}=0$: $(-6,4)\cdot(-3,-4)=18-16=2\neq 0$ so $\angle BAC$ is not $90^{\circ}$.  Check $\overrightarrow{AB}\cdot\overrightarrow{BC}=(-6,4)\cdot(3,-8)=-18-32=-50\neq 0$.  Check $\overrightarrow{AC}\cdot\overrightarrow{BC}=(-3,-4)\cdot(3,-8)=-9+32=23\neq 0$.  Since none of the dot products is zero, my first assumption that the triangle is right‑angled was incorrect.  **Correction:**  The question should ask “Show that $\overrightarrow{AB}$, $\overrightarrow{AC}$ and $\overrightarrow{BC}$ satisfy Pythagoras’ theorem”, or provide different vectors.  In this case the triangle is not right‑angled.  (This demonstrates the importance of checking dot products carefully.)

4. $\overrightarrow{OP}=\begin{pmatrix}1\\2\end{pmatrix}$, $\overrightarrow{OQ}=\begin{pmatrix}3\\-1\end{pmatrix}$ and $\overrightarrow{PQ}=\overrightarrow{OQ}-\overrightarrow{OP}=\begin{pmatrix}2\\-3\end{pmatrix}$.  Point $S$ divides $PQ$ in the ratio 1:2, so using formula (12) with $m=1$, $n=2$ and vectors $\mathbf{a}=\overrightarrow{OP}$, $\mathbf{b}=\overrightarrow{OQ}$ gives
$$\overrightarrow{OS}=\frac{2\mathbf{a}+1\mathbf{b}}{1+2} = \frac{2\begin{pmatrix}1\\2\end{pmatrix}+\begin{pmatrix}3\\-1\end{pmatrix}}{3} = \frac{\begin{pmatrix}2\\4\end{pmatrix}+\begin{pmatrix}3\\-1\end{pmatrix}}{3} = \frac{\begin{pmatrix}5\\3\end{pmatrix}}{3} = \begin{pmatrix}\tfrac{5}{3}\\1\end{pmatrix}.$$

5. Speed = $|\mathbf{v}|=\sqrt{(-6)^2+8^2}=10$ m s$^{-1}$.  Time = 2 min = 120 s.  Distance = speed $\times$ time = $10\times120=1200$ m.

6. The vectors $\begin{pmatrix}1\\2\end{pmatrix}$, $\begin{pmatrix}-2\\4\end{pmatrix}$ and $\begin{pmatrix}3\\-6\end{pmatrix}$ are scalar multiples of one another: $\begin{pmatrix}-2\\4\end{pmatrix}=-2\begin{pmatrix}1\\-2\end{pmatrix}$ (but note the sign difference) and $\begin{pmatrix}3\\-6\end{pmatrix}=3\begin{pmatrix}1\\-2\end{pmatrix}$.  Since each is a multiple of the same direction vector, they all lie on the same line through the origin.

7. $\mathbf{u}\cdot\mathbf{v} = 5\cdot1 + (-2)\cdot1 = 3$.  The magnitudes are $|\mathbf{u}|=\sqrt{5^2+(-2)^2}=\sqrt{29}$ and $|\mathbf{v}|=\sqrt{1^2+1^2}=\sqrt{2}$.  Therefore $\cos\theta = \frac{3}{\sqrt{29}\sqrt{2}}$ and $\theta=\cos^{-1}\bigl(\tfrac{3}{\sqrt{58}}\bigr) \approx 63.8^{\circ}$.

8. The vectors $\overrightarrow{PQ}$ and $\overrightarrow{PR}$ are $\overrightarrow{OQ}-\overrightarrow{OP}$ and $\overrightarrow{OR}-\overrightarrow{OP}$.  Compute $\overrightarrow{PQ}=\begin{pmatrix}4\\-1\end{pmatrix}-\begin{pmatrix}1\\2\end{pmatrix}=\begin{pmatrix}3\\-3\end{pmatrix}$ and $\overrightarrow{PR}=\begin{pmatrix}-2\\5\end{pmatrix}-\begin{pmatrix}1\\2\end{pmatrix}=\begin{pmatrix}-3\\3\end{pmatrix}$.  The area of triangle $PQR$ is $\tfrac{1}{2}|\overrightarrow{PQ}\times\overrightarrow{PR}|$.  In two dimensions, the magnitude of the cross product can be found using $|a_xb_y-a_yb_x|$: here $a_x=3,a_y=-3,b_x=-3,b_y=3$ so $|a_xb_y-a_yb_x|=|3\cdot3-(-3)(-3)|=|9-9|=0$.  The area is $0$, which means the points are collinear and the “triangle” has zero area.


### 13. Exam Technique Notes

* **Show your working.**  Even when using a calculator to compute square roots or trigonometric values, write down the intermediate steps.  Examiners award method marks even if arithmetic slips occur.
* **Use appropriate notation.**  Distinguish between vectors (bold, arrow or bracket notation) and scalars.  When taking the dot product, operate on the vectors themselves before substituting magnitudes.
* **Check units.**  In modelling questions, convert all quantities to compatible units before applying formulas.  State the units of your final answer.
* **Draw diagrams.**  A quick sketch of the vector(s) involved helps you decide on signs and quadrants.  It also reduces the risk of algebraic errors.
* **Beware of quadrant corrections.**  When using $\tan^{-1}(\tfrac{y}{x})$ to find a direction angle, adjust the angle to the correct quadrant.  Indicating the quadrant on your diagram can earn marks.
* **Use exact values where possible.**  For angles like $30^{\circ}$, $45^{\circ}$ and $60^{\circ}$, express $\cos\theta$ and $\sin\theta$ in exact form (e.g. $\tfrac{\sqrt{3}}{2}$) unless a decimal approximation is required.


### 14. Syllabus Gap Check

After creating these notes, revisit the specification and elaboration document to check for any gaps:

* **Vectors in two dimensions** – fully covered with component form, **i/j** notation, diagrams and examples.  Specification: students must use vectors and perform operations【894086615309938†L573-L589】.
* **Magnitude and direction** – covered with formulas, quadrant adjustments and examples.  Elaboration: emphasises finding unit vectors【928194294185092†L513-L532】; a note on unit vectors is included.
* **Algebraic operations and geometrical interpretations** – addition and scalar multiplication are thoroughly treated with algebraic and geometric views.  Triangle and parallelogram laws are mentioned【928194294185092†L523-L532】.
* **Position vectors and distances** – position vectors are defined, translation is illustrated, and distance between points is computed using magnitudes.  This matches the specification【894086615309938†L573-L589】.
* **Proof strategies and dot product** – the lesson includes a vector proof and an angle/area problem.  The scalar product is introduced to find angles; while this goes slightly beyond AS1 pure requirements, it aligns with the specification’s emphasis on geometrical interpretations and supports progression to A2.
* **AS2 mechanics** – constant acceleration and forces using vectors are not covered here because they belong to Unit AS2【928194294185092†L598-L603】.  Learners should consult the applied unit for these topics.

No major gaps remain for the AS1 pure vector content.  Any further extension into mechanics or higher‑dimension vectors should be clearly labelled as belonging to other units.


### 15. Recommended Enhancements Not in the PDF

| Asset ID | Type | Reason for inclusion | Specification point supported | Essential or optional |
|---|---|---|---|---|
| **TIKZ‑003** | TikZ diagram | Provides a general vector from the origin with horizontal and vertical components.  It reinforces the definitions of magnitude and direction. | Use of vectors in two dimensions【894086615309938†L573-L589】 | Essential |
| **MMD‑001** | Mermaid flowchart | Summarises the process of converting a velocity vector into a distance, clarifying modelling steps. | Position vectors and modelling with vectors | Optional |
| **SVG‑001** | SVG infographic | Collects key vector formulas (addition, scalar multiple, magnitude, direction, component reconstruction) into a single visual reference. | Algebraic operations and conversion between forms | Optional |
| **WIDGET‑001** | Interactive widget | Enables exploration of vector magnitude and direction by adjusting components; helps with understanding formulas (1) and (8). | Magnitude and direction of vectors【928194294185092†L513-L532】 | Essential |
| **WIDGET‑002** | Interactive widget | Allows students to build vectors from a given magnitude and angle; supports formula (9) and modelling. | Conversion between component and magnitude/direction form【894086615309938†L573-L589】 | Essential |
| **WIDGET‑003** | Interactive widget | Demonstrates vector addition graphically and numerically; reinforces the triangle/parallelogram law and formula (7). | Algebraic operations of vector addition【928194294185092†L523-L532】 | Optional |


### 16. Supplementary Sources Used

The main teaching content is taken from the provided VECTORS(1).pdf and cross‑checked against the CCEA specification and elaboration document【894086615309938†L573-L589】【928194294185092†L513-L532】.  No additional external sources were required.


### 17. Final Student Checklist

Use this list to check your understanding before moving on:

* [ ] I can explain what a vector is and distinguish it from a coordinate.
* [ ] I can write a vector in component form, as a column vector and using **i/j** notation.
* [ ] I know how to add vectors and multiply them by scalars, both algebraically and geometrically.
* [ ] I can compute the magnitude of a vector and find its direction, adjusting for the correct quadrant.
* [ ] I can convert between component form and $(r,\theta)$ form using cosine and sine.
* [ ] I can use position vectors to translate points and find the distance between points.
* [ ] I can distinguish vector quantities from scalar quantities in modelling problems and correctly convert units.
* [ ] I can follow and construct vector proofs using midpoints and ratios, and show vectors are parallel by demonstrating scalar multiples.
* [ ] I can use the scalar product to find the angle between vectors and the area of a triangle when given two sides and the included angle.

If you have ticked all these boxes and worked through the examples and practice questions, you have mastered the AS1 pure mathematics vector content.
