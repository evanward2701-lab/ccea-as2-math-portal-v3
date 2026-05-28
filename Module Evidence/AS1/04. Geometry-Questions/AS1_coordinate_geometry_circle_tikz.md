# TikZ Diagrams for AS1 Coordinate Geometry and Circle

**Pack ID:** `AS1CoordinateGeometryCircle`

The diagrams in this file recreate the mathematical meaning of the figures in the questions PDF. They are not intended to be pixel-perfect copies of the PDF artwork; they are cleaner mathematical reconstructions for revision and exam-practice use. TikZ is used because these are coordinate geometry, geometric, circle, tangent and graph diagrams requiring precise labels and line relationships. To compile the snippets, use `\usepackage{tikz}` and `\usetikzlibrary{calc}`.

---

## AS1CoordinateGeometryCircleQ003TikZ-001: Kite with perpendicular diagonals

**Source:** Questions PDF p.2  
**Related question:** Question 3  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1CoordinateGeometryCircleQ003TikZ-001 | Source: Questions PDF p.2 | Insert from AS1_coordinate_geometry_circle_tikz.md | Purpose: kite diagram showing vertices A, B, C, D and the diagonals]`  
**Purpose:** Recreates Fig. 1 for the kite ABCD, showing the diagonals AC and BD. The solution uses the midpoint of AC and the fact that the diagonals of a kite are perpendicular.

### Creation Notes

This diagram represents the qualitative geometry rather than the exact plotted coordinates. It keeps the labels and diagonals clear so the midpoint/perpendicular-gradient reasoning is visible.

```latex
\begin{tikzpicture}[scale=0.85]
  \coordinate (A) at (0,3);
  \coordinate (B) at (3.2,2.4);
  \coordinate (C) at (3.5,0.6);
  \coordinate (D) at (-1.2,0);

  \draw[thick] (A)--(B)--(C)--(D)--cycle;
  \draw[dashed] (A)--(C);
  \draw[dashed] (B)--(D);

  \node[above] at (A) {$A$};
  \node[right] at (B) {$B$};
  \node[right] at (C) {$C$};
  \node[left] at (D) {$D$};
  \node[below] at (1.5,-0.35) {Fig. 1};
\end{tikzpicture}
```

---

## AS1CoordinateGeometryCircleQ007TikZ-001: Isosceles triangle logo

**Source:** Questions PDF p.4  
**Related question:** Question 7  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1CoordinateGeometryCircleQ007TikZ-001 | Source: Questions PDF p.4 | Insert from AS1_coordinate_geometry_circle_tikz.md | Purpose: isosceles triangle with base midpoint D and dashed height AD]`  
**Purpose:** Recreates the airline-logo isosceles triangle in which $AB=AC$ and D is the midpoint of BC. The dashed line AD is used for the line-equation part of the question.

### Creation Notes

The equal side marks highlight $AB=AC$. Since D is the midpoint of BC, AD is shown as a dashed line from the apex to the base midpoint.

```latex
\begin{tikzpicture}[scale=0.9]
  \coordinate (A) at (0,3.2);
  \coordinate (B) at (-2,0);
  \coordinate (C) at (2,0);
  \coordinate (D) at (0,0);

  \draw[thick] (A)--(B)--(C)--cycle;
  \draw[dashed] (A)--(D);

  % equal-side tick marks
  \draw ($(A)!0.5!(B)+(-0.08,0.08)$) -- ($(A)!0.5!(B)+(0.08,-0.08)$);
  \draw ($(A)!0.5!(C)+(-0.08,-0.08)$) -- ($(A)!0.5!(C)+(0.08,0.08)$);

  \node[above] at (A) {$A$};
  \node[left] at (B) {$B$};
  \node[right] at (C) {$C$};
  \node[below] at (D) {$D$};
  \node[below] at (0,-0.55) {Fig. 1};
\end{tikzpicture}
```

---

## AS1CoordinateGeometryCircleQ012TikZ-001: Rhombus ABCD with perpendicular diagonals

**Source:** Questions PDF p.5  
**Related question:** Question 12  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1CoordinateGeometryCircleQ012TikZ-001 | Source: Questions PDF p.5 | Insert from AS1_coordinate_geometry_circle_tikz.md | Purpose: rhombus ABCD with perpendicular diagonals AC and BD]`  
**Purpose:** Recreates Fig. 3 showing rhombus ABCD, with diagonal AC and diagonal BD. The solution uses the midpoint of AC and the fact that diagonals of a rhombus are perpendicular.

### Creation Notes

The diagram keeps the long diagonal AC and short diagonal BD visible, with a small right-angle marker at their intersection.

```latex
\begin{tikzpicture}[scale=0.8]
  \coordinate (A) at (0,0);
  \coordinate (B) at (3.2,0.5);
  \coordinate (C) at (5.3,2.8);
  \coordinate (D) at (2.1,2.3);
  \coordinate (O) at ($(A)!0.5!(C)$);

  \draw[thick] (A)--(B)--(C)--(D)--cycle;
  \draw[dashed] (A)--(C);
  \draw[dashed] (B)--(D);

  % right angle marker near intersection
  \draw ($(O)+(0.16,0.05)$)--($(O)+(0.05,0.22)$)--($(O)+(-0.11,0.12)$);

  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above right] at (C) {$C$};
  \node[above left] at (D) {$D$};
  \node[below] at (2.6,-0.45) {Fig. 3};
\end{tikzpicture}
```

---

## AS1CoordinateGeometryCircleQ014TikZ-001: Line and reciprocal curve intersections

**Source:** Questions PDF p.6  
**Related question:** Question 14  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1CoordinateGeometryCircleQ014TikZ-001 | Source: Questions PDF p.6 | Insert from AS1_coordinate_geometry_circle_tikz.md | Purpose: sketch of reciprocal curve and line intersecting at A and B]`  
**Purpose:** Recreates Fig. 2 showing the line $y=x-2$ intersecting the curve $y=\frac{3}{x}$ at points A and B.

### Creation Notes

This uses a coordinate sketch with the positive and negative branches of the reciprocal curve and the straight line. The computed intersections are $A(-1,-3)$ and $B(3,1)$, but the question diagram is a sketch rather than a scale plot.

```latex
\begin{tikzpicture}[scale=0.75]
  % axes
  \draw[->] (-4.2,0)--(5.0,0) node[right] {$x$};
  \draw[->] (0,-4.2)--(0,4.4) node[above] {$y$};

  % reciprocal curve y=3/x
  \draw[thick,domain=0.65:5,samples=100] plot (\x,{3/\x});
  \draw[thick,domain=-4:-0.65,samples=100] plot (\x,{3/\x});

  % line y=x-2
  \draw[thick] (-2.2,-4.2)--(5,3);

  % intersection points
  \fill (-1,-3) circle (2pt) node[left] {$A$};
  \fill (3,1) circle (2pt) node[above] {$B$};

  \node[below] at (0,-4.55) {Fig. 2};
\end{tikzpicture}
```

---

## AS1CoordinateGeometryCircleQ016TikZ-001: Tangent from external point to circle

**Source:** Questions PDF p.7  
**Related question:** Question 16  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1CoordinateGeometryCircleQ016TikZ-001 | Source: Questions PDF p.7 | Insert from AS1_coordinate_geometry_circle_tikz.md | Purpose: tangent from external point A to circle at point B]`  
**Purpose:** Recreates Fig. 3 showing a tangent drawn from external point A to a circle, touching at B.

### Creation Notes

The diagram shows only the qualitative tangent setup. In the solution, the radius to the tangent point is perpendicular to the tangent, forming a right triangle.

```latex
\begin{tikzpicture}[scale=0.9]
  \coordinate (O) at (0,0);
  \coordinate (B) at (-1.05,1.05);
  \coordinate (A) at (1.7,3.8);

  \draw[thick] (O) circle (1.5);
  \draw[thick] (-2.2,-0.15)--(A);
  \draw[thick] (A)--(B);
  \fill (B) circle (2pt);
  \node[left] at (B) {$B$};
  \node[above] at (A) {$A$};
  \node[below] at (0,-1.9) {Fig. 3};
\end{tikzpicture}
```

---

## AS1CoordinateGeometryCircleQ018TikZ-001: Radio mast coverage circle

**Source:** Questions PDF p.8  
**Related question:** Question 18  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1CoordinateGeometryCircleQ018TikZ-001 | Source: Questions PDF p.8 | Insert from AS1_coordinate_geometry_circle_tikz.md | Purpose: circle modelling radio mast coverage with points A, B and C on the circumference]`  
**Purpose:** Recreates Fig. 7 showing a circle modelling radio mast coverage, with A, B and C on the circumference.

### Creation Notes

The coordinates in the question lead to centre $(-3,2)$ and radius $5$. This diagram uses that circle to place A, B and C accurately.

```latex
\begin{tikzpicture}[scale=0.55]
  \coordinate (O) at (-3,2);
  \coordinate (A) at (0,6);
  \coordinate (B) at (0,-2);
  \coordinate (C) at (1,5);

  \draw[thick] (O) circle (5);
  \fill (O) circle (2pt) node[below] {Mast};
  \fill (A) circle (2pt) node[above right] {$A$};
  \fill (B) circle (2pt) node[below right] {$B$};
  \fill (C) circle (2pt) node[right] {$C$};

  \node[below] at (-3,-4) {Fig. 7};
\end{tikzpicture}
```

---

## AS1CoordinateGeometryCircleQ020TikZ-001: Circle with AD as diameter and B as centre

**Source:** Questions PDF p.9  
**Related question:** Question 20  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1CoordinateGeometryCircleQ020TikZ-001 | Source: Questions PDF p.9 | Insert from AS1_coordinate_geometry_circle_tikz.md | Purpose: circle with AD as a diameter and B as the centre]`  
**Purpose:** Recreates Fig. 1 for a circle in which AD is a diameter and B is the centre. It supports the use of midpoint and radius calculations.

### Creation Notes

The diagram uses a simple circle with a diagonal diameter AD passing through centre B.

```latex
\begin{tikzpicture}[scale=0.8]
  \coordinate (B) at (0,0);
  \coordinate (A) at (2.2,2.2);
  \coordinate (D) at (-2.2,-2.2);

  \draw[thick] (B) circle (3.11);
  \draw[thick] (D)--(A);
  \fill (B) circle (2pt) node[left] {$B$};
  \fill (A) circle (2pt) node[above right] {$A$};
  \fill (D) circle (2pt) node[below left] {$D$};

  \node[below] at (0,-3.55) {Fig. 1};
\end{tikzpicture}
```

---

## AS1CoordinateGeometryCircleQ021TikZ-001: Two sprockets modelled as circles

**Source:** Questions PDF p.10  
**Related question:** Question 21  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1CoordinateGeometryCircleQ021TikZ-001 | Source: Questions PDF p.10 | Insert from AS1_coordinate_geometry_circle_tikz.md | Purpose: two sprockets modelled as circles with axes and chain tangents]`  
**Purpose:** Recreates Fig. 4 showing two circular bicycle sprockets A and B, coordinate axes, and dashed chain tangents.

### Creation Notes

The diagram uses the centres and radii from the question/solution: circle A centre $(6,6)$ radius $6$, and circle B centre $(-6,-3)$ radius $2$. The dashed chain lines are illustrative.

```latex
\begin{tikzpicture}[scale=0.35]
  % axes
  \draw[->] (-10,0)--(14,0) node[right] {$x$};
  \draw[->] (0,-6)--(0,14) node[above] {$y$};

  % circle A
  \coordinate (OA) at (6,6);
  \draw[thick] (OA) circle (6);
  \fill (OA) circle (2pt);
  \node[above right] at (10,11) {$A$};

  % circle B
  \coordinate (OB) at (-6,-3);
  \draw[thick] (OB) circle (2);
  \fill (OB) circle (2pt);
  \node[left] at (-8,-3) {$B$};

  % illustrative chain/tangent lines
  \draw[dashed] (-8.2,-1.0)--(0,8.0);
  \draw[dashed] (-4.5,-4.5)--(6,0.0);

  \node[below] at (1,-6.5) {Fig. 4};
\end{tikzpicture}
```

---

## AS1CoordinateGeometryCircleQ022TikZ-001: Kite formed by two tangents from A

**Source:** Questions PDF p.11  
**Related question:** Question 22  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1CoordinateGeometryCircleQ022TikZ-001 | Source: Questions PDF p.11 | Insert from AS1_coordinate_geometry_circle_tikz.md | Purpose: circle with two tangents from A forming kite ABCD]`  
**Purpose:** Recreates Fig. 4 showing a circle with centre C and two tangents from A touching the circle at B and D, forming kite ABCD.

### Creation Notes

The tangent points are illustrative. The mathematical relationship needed is that the radius to each tangent point is perpendicular to the tangent, forming two congruent right triangles.

```latex
\begin{tikzpicture}[scale=0.75]
  \coordinate (C) at (0,0);
  \coordinate (A) at (-3.7,3.1);
  \coordinate (B) at (1.0,1.73);
  \coordinate (D) at (-1.73,-1.0);

  \draw[thick] (C) circle (2);
  \draw[thick] (A)--(B);
  \draw[thick] (A)--(D);
  \draw[dashed] (C)--(B);
  \draw[dashed] (C)--(D);

  \fill (A) circle (2pt) node[above left] {$A$};
  \fill (B) circle (2pt) node[right] {$B$};
  \fill (C) circle (2pt) node[below] {$C$};
  \fill (D) circle (2pt) node[left] {$D$};

  \node[below] at (0,-2.55) {Fig. 4};
\end{tikzpicture}
```

---

## AS1CoordinateGeometryCircleQ023TikZ-001: Pendant modelled by two touching circles

**Source:** Questions PDF p.12  
**Related question:** Question 23  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1CoordinateGeometryCircleQ023TikZ-001 | Source: Questions PDF p.12 | Insert from AS1_coordinate_geometry_circle_tikz.md | Purpose: pendant modelled as a large circle with a smaller touching circle inside]`  
**Purpose:** Recreates Fig. 1 for the pendant problem, showing a larger circle and a smaller circle vertically above its centre, touching internally at the top.

### Creation Notes

This diagram uses the computed centres and radii from the question: larger circle centre $(3,4)$ radius $2$ and smaller circle centre $(3,5)$ radius $1$. The picture shows the internal tangency clearly.

```latex
\begin{tikzpicture}[scale=1.1]
  \coordinate (L) at (0,0);
  \coordinate (S) at (0,1);
  \draw[thick] (L) circle (2);
  \draw[thick] (S) circle (1);
  \fill (L) circle (1.5pt);
  \fill (S) circle (1.5pt);
  \node[below] at (0,-2.35) {Fig. 1};
\end{tikzpicture}
```
