# TikZ Diagrams for AS1 Trigonometry

**Pack ID:** AS1Trigonometry

This file contains TikZ recreations of the diagrams that appear in the supplied questions PDF.  The diagrams are not intended to be perfect visual replicas; they are mathematically faithful sketches with the relevant labels, angles, lengths and context preserved.

## AS1TrigonometryQ002TikZ-001: Ships C and D bearing diagram

**Source:** Questions PDF p.3  
**Related question:** Question 2  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1TrigonometryQ002TikZ-001 | Source: Questions PDF p.3 | Insert from AS1_trigonometry_tikz.md | Purpose: bearing diagram for ships C and D leaving harbour]`  
**Purpose:** Shows harbour, north direction, Ship D on bearing $030^\circ$ and Ship C on bearing $140^\circ$, preserving the given $30^\circ$ and $40^\circ$ markings.

### Creation Notes

TikZ is appropriate because this is a formal bearing/geometry diagram with arrows, angle labels and points.

```latex
\begin{tikzpicture}[scale=0.9,>=latex]
  \coordinate (H) at (0,0);
  \draw[->,thick] (H) -- (0,3) node[above] {N};
  \draw[dashed] (H) -- (0,-2.5);
  \draw[->,thick] (H) -- (1.6,2.5) node[right] {Ship D};
  \draw[->,thick] (H) -- (1.8,-1.9) node[right] {Ship C};
  \node[left] at (H) {Harbour};
  \draw (0,1.0) arc (90:60:1.0);
  \node at (0.42,1.05) {$30^\circ$};
  \draw (0,-0.8) arc (-90:-50:0.8);
  \node at (0.45,-0.9) {$40^\circ$};
  \node[below] at (0,-2.8) {Fig. 3};
\end{tikzpicture}
```

---

## AS1TrigonometryQ003TikZ-001: Field ABCD plan

**Source:** Questions PDF p.4  
**Related question:** Question 3  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1TrigonometryQ003TikZ-001 | Source: Questions PDF p.4 | Insert from AS1_trigonometry_tikz.md | Purpose: field ABCD with lengths and angles]`  
**Purpose:** Shows quadrilateral field ABCD with diagonal $AC$, lengths $AB=150$m, $CD=200$m, $AD=300$m, angle $ABC=120^\circ$ and angle $BCA=35^\circ$.

### Creation Notes

TikZ is used because the diagram is a labelled geometry construction involving a quadrilateral and triangles.

```latex
\begin{tikzpicture}[scale=0.85]
  \coordinate (A) at (0,0);
  \coordinate (B) at (1.0,2.2);
  \coordinate (C) at (5.0,1.9);
  \coordinate (D) at (6.4,-1.0);
  \draw[thick] (A)--(B)--(C)--(D)--cycle;
  \draw[thick] (A)--(C);
  \draw[dashed,<->] (-0.35,0.1)--(0.7,2.3) node[midway,left] {150 m};
  \draw[dashed,<->] (5.25,1.85)--(6.65,-0.9) node[midway,right] {200 m};
  \draw[dashed,<->] (-0.1,-0.4)--(6.3,-1.35) node[midway,below] {300 m};
  \node[left] at (A) {$A$};
  \node[above] at (B) {$B$};
  \node[right] at (C) {$C$};
  \node[right] at (D) {$D$};
  \draw (B)+(0.55,-0.2) arc (-15:-120:0.55);
  \node at (1.55,1.55) {$120^\circ$};
  \draw (C)+(-0.75,-0.05) arc (183:220:0.75);
  \node at (4.35,1.65) {$35^\circ$};
  \node at (3.1,-1.75) {Fig. 2};
\end{tikzpicture}
```

---

## AS1TrigonometryQ006TikZ-001: Sound-wave graph

**Source:** Questions PDF p.6  
**Related question:** Question 6  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1TrigonometryQ006TikZ-001 | Source: Questions PDF p.6 | Insert from AS1_trigonometry_tikz.md | Purpose: graph of the sound-wave model]`  
**Purpose:** Shows the sinusoidal model graph for the siren with vertical axis $A$, horizontal axis $t$, maximum $6$, minimum $-6$, and the first zero at $t=5$.

### Creation Notes

TikZ is suitable for a clean mathematical sketch of a trigonometric function with labelled axes and key points.

```latex
\begin{tikzpicture}[scale=0.8,>=latex]
  \draw[->] (0,-2.2) -- (0,2.4) node[above] {$A$};
  \draw[->] (0,0) -- (7.5,0) node[right] {$t$};
  \draw[domain=0:6.8,samples=160,thick] plot(\x,{1.7*cos(90*\x/5)});
  \node[left] at (0,1.7) {$6$};
  \node[left] at (0,-1.7) {$-6$};
  \node[below] at (1.25,0) {$5$};
  \node at (4,-2.35) {Fig. 4};
\end{tikzpicture}
```

---

## AS1TrigonometryQ007TikZ-001: Triangle ABC for ambiguous sine rule

**Source:** Questions PDF p.7  
**Related question:** Question 7  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1TrigonometryQ007TikZ-001 | Source: Questions PDF p.7 | Insert from AS1_trigonometry_tikz.md | Purpose: triangle ABC with AC = 28 cm, BC = 12 cm and angle BAC = 22 degrees]`  
**Purpose:** Shows triangle $ABC$ with $AC=28$ cm, $BC=12$ cm and $\angle BAC=22^\circ$, and indicates that $ABC$ is obtuse.

### Creation Notes

TikZ is appropriate because the diagram is a geometric triangle with labelled sides and angle.

```latex
\begin{tikzpicture}[scale=0.95]
  \coordinate (A) at (0,0);
  \coordinate (B) at (3.2,0.15);
  \coordinate (C) at (6.0,2.2);
  \draw[thick] (A)--(B)--(C)--cycle;
  \draw[dashed,<->] (0.1,0.35)--(5.85,2.55) node[midway,above] {28};
  \draw[dashed,<->] (3.45,0.35)--(6.25,2.35) node[midway,right] {12};
  \node[below] at (A) {$A$};
  \node[below] at (B) {$B$};
  \node[above] at (C) {$C$};
  \draw (A)+(0.75,0.02) arc (2:22:0.75);
  \node at (0.95,0.25) {$22^\circ$};
  \node at (3.2,-0.7) {Fig. 5};
\end{tikzpicture}
```

---

## AS1TrigonometryQ012TikZ-001: Ship route P-Q-R bearing diagram

**Source:** Questions PDF p.9  
**Related question:** Question 12  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1TrigonometryQ012TikZ-001 | Source: Questions PDF p.9 | Insert from AS1_trigonometry_tikz.md | Purpose: bearing diagram for route P to Q to R]`  
**Purpose:** Shows route from port P to Q, then Q to R, with north arrows and lengths $50$ and $40$.

### Creation Notes

TikZ is suited to bearing diagrams with north arrows and labelled route segments.

```latex
\begin{tikzpicture}[scale=0.85,>=latex]
  \coordinate (P) at (0,2.2);
  \coordinate (Q) at (4.1,1.4);
  \coordinate (R) at (2.4,-1.2);
  \draw[->] (P) -- +(0,2) node[above] {N};
  \draw[->] (Q) -- +(0,1.8) node[above] {N};
  \draw[thick] (P)--(Q)--(R)--cycle;
  \node[left] at (P) {$P$};
  \node[right] at (Q) {$Q$};
  \node[below] at (R) {$R$};
  \node[above] at ($(P)!0.5!(Q)$) {50};
  \node[right] at ($(Q)!0.55!(R)$) {40};
  \node at (2.3,-1.8) {Fig. 1};
\end{tikzpicture}
```

---

## AS1TrigonometryQ014TikZ-001: Waste ground ABCD sketch

**Source:** Questions PDF p.10  
**Related question:** Question 14  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1TrigonometryQ014TikZ-001 | Source: Questions PDF p.10 | Insert from AS1_trigonometry_tikz.md | Purpose: patch of waste ground ABCD with distances and angles]`  
**Purpose:** Shows the patch of waste ground with $A$, $B$, $E$ collinear, $AB=4.9$ km, $AD=5.4$ km, $BC=2.1$ km, $\angle DAB=35^\circ$, $\angle CBE=50^\circ$, and the diagonal $DB$.

### Creation Notes

TikZ is used for a labelled geometry sketch with straight-line collinearity and two triangles.

```latex
\begin{tikzpicture}[scale=0.9]
  \coordinate (A) at (0,0);
  \coordinate (B) at (4.9,0);
  \coordinate (E) at (6.2,0);
  \coordinate (D) at (4.4,3.1);
  \coordinate (C) at (5.7,1.8);
  \draw[thick] (A)--(D)--(C)--(B)--cycle;
  \draw[thick] (D)--(B);
  \draw[dashed] (A)--(E);
  \node[below left] at (A) {$A$};
  \node[below] at (B) {$B$};
  \node[right] at (C) {$C$};
  \node[above] at (D) {$D$};
  \node[right] at (E) {$E$};
  \node[below] at ($(A)!0.5!(B)$) {4.9 km};
  \node[left] at ($(A)!0.5!(D)$) {5.4 km};
  \node[right] at ($(B)!0.5!(C)$) {2.1 km};
  \draw (A)+(0.9,0) arc (0:35:0.9);
  \node at (1.15,0.35) {$35^\circ$};
  \draw (B)+(0.75,0) arc (0:50:0.75);
  \node at (5.35,0.55) {$50^\circ$};
  \node at (3.1,-0.8) {Fig. 1};
\end{tikzpicture}
```

---

## AS1TrigonometryQ016TikZ-001: Helicopter route diagram

**Source:** Questions PDF p.11  
**Related question:** Question 16  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1TrigonometryQ016TikZ-001 | Source: Questions PDF p.11 | Insert from AS1_trigonometry_tikz.md | Purpose: helicopter route from base to rescue to hospital]`  
**Purpose:** Shows the base, rescue location and hospital with segments labelled $70$ and $80$, preserving the route-triangle structure.

### Creation Notes

TikZ is useful for a clean route diagram that supports the cosine-rule bearing calculation.

```latex
\begin{tikzpicture}[scale=0.9,>=latex]
  \coordinate (B) at (0,0);
  \coordinate (R) at (3.2,-1.2);
  \coordinate (H) at (5.0,1.9);
  \draw[->] (B)--(0,2.0) node[above] {N};
  \draw[thick] (B)--(R)--(H)--cycle;
  \node[left] at (B) {Base};
  \node[below] at (R) {Rescue};
  \node[right] at (H) {Hospital};
  \node[below] at ($(B)!0.5!(R)$) {70};
  \node[right] at ($(R)!0.5!(H)$) {80};
  \node at (2.5,-1.8) {Fig. 2};
\end{tikzpicture}
```

---

## AS1TrigonometryQ021TikZ-001: Toy aeroplane wing diagram

**Source:** Questions PDF p.13  
**Related question:** Question 21  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1TrigonometryQ021TikZ-001 | Source: Questions PDF p.13 | Insert from AS1_trigonometry_tikz.md | Purpose: toy aeroplane wing modelled by two triangles]`  
**Purpose:** Shows quadrilateral $ABCD$ formed by triangles $ABC$ and $ACD$, with $AB=3.5$ cm, $BC=6.9$ cm, $CD=11.6$ cm and angle $ADC=28^\circ$.

### Creation Notes

TikZ is used because this is a geometric sketch with labelled triangles and angle information.

```latex
\begin{tikzpicture}[scale=0.85]
  \coordinate (B) at (0,0);
  \coordinate (A) at (2.0,0.1);
  \coordinate (C) at (1.1,3.0);
  \coordinate (D) at (3.8,-2.0);
  \draw[thick] (B)--(A)--(D)--(C)--(B);
  \draw[thick] (A)--(C);
  \node[left] at (B) {$B$};
  \node[right] at (A) {$A$};
  \node[above] at (C) {$C$};
  \node[below] at (D) {$D$};
  \node[left] at ($(B)!0.5!(C)$) {6.9};
  \node[below] at ($(B)!0.5!(A)$) {3.5};
  \node[right] at ($(C)!0.5!(D)$) {11.6};
  \draw (D)+(-0.55,0.15) arc (165:120:0.6);
  \node at (3.35,-1.35) {$28^\circ$};
  \node[right] at (4.2,1.6) {diagram\\not drawn\\accurately};
  \node at (2.2,-2.6) {Fig. 2};
\end{tikzpicture}
```

---

## AS1TrigonometryQ024TikZ-001: Snooker balls and equilateral frame

**Source:** Questions PDF p.14  
**Related question:** Question 24  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1TrigonometryQ024TikZ-001 | Source: Questions PDF p.14 | Insert from AS1_trigonometry_tikz.md | Purpose: snooker ball triangular arrangement and equilateral frame]`  
**Purpose:** Shows 15 balls in a triangular arrangement and an equilateral triangular frame containing them.  It preserves the key mathematical information that each ball has diameter 52.5 mm and the frame is equilateral.

### Creation Notes

TikZ can recreate the repeated circular ball pattern and the surrounding equilateral triangle cleanly.

```latex
\begin{tikzpicture}[scale=0.55]
  % triangular arrangement of 15 balls
  \foreach \row in {0,...,4}{
    \foreach \col in {0,...,\row}{
      \pgfmathsetmacro{\x}{\col*1.1 - \row*0.55}
      \pgfmathsetmacro{\y}{-\row*0.95}
      \shade[ball color=gray] (\x,\y) circle (0.5);
    }
  }
  \node at (0,-5.3) {Fig. 3};
  % frame version shifted right
  \begin{scope}[xshift=7cm]
    \draw[thick] (-3,-4.1)--(0,1.2)--(3,-4.1)--cycle;
    \foreach \row in {0,...,4}{
      \foreach \col in {0,...,\row}{
        \pgfmathsetmacro{\x}{\col*1.05 - \row*0.525}
        \pgfmathsetmacro{\y}{-\row*0.9}
        \shade[ball color=gray] (\x,\y-0.3) circle (0.48);
      }
    }
    \node at (0,-5.3) {Fig. 4};
  \end{scope}
\end{tikzpicture}
```

---

## AS1TrigonometryQ026TikZ-001: Circle with diameter AB and perpendicular foot D

**Source:** Questions PDF p.16  
**Related question:** Question 26  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1TrigonometryQ026TikZ-001 | Source: Questions PDF p.16 | Insert from AS1_trigonometry_tikz.md | Purpose: circle diagram with diameter AB, point S, perpendicular foot D, and angle BOS]`  
**Purpose:** Shows a circle with centre $O$, diameter $AB$, point $S$ on the circumference, line $OS$, perpendicular foot $D$ from $B$ to $OS$, and angle $BOS=\theta$.

### Creation Notes

TikZ is the best choice because the figure is a precise circle/geometry diagram with points, a right angle and labelled segments.

```latex
\begin{tikzpicture}[scale=1.0]
  \coordinate (O) at (0,0);
  \coordinate (A) at (0,3);
  \coordinate (B) at (0,-3);
  \coordinate (S) at (2.6,-1.5);
  \coordinate (D) at (1.25,-0.72);
  \draw[thick] (O) circle (3);
  \draw[thick] (A)--(B);
  \draw[thick] (O)--(S);
  \draw[thick] (B)--(D);
  \draw[thick] (A)--(D);
  \node[above] at (A) {$A$};
  \node[below] at (B) {$B$};
  \node[left] at (O) {$O$};
  \node[right] at (D) {$D$};
  \node[right] at (S) {$S$};
  \draw (D)+(0.22,-0.12)--++(-0.12,-0.22)--++(-0.22,0.12);
  \draw (O)+(0,-0.75) arc (-90:-30:0.75);
  \node at (0.45,-0.7) {$\theta$};
  \node at (0,-3.8) {Fig. 3};
\end{tikzpicture}
```
