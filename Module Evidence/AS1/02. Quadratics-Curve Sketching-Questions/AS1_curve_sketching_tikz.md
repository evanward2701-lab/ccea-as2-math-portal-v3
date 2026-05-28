# TikZ Diagrams for CCEA AS1 Curve Sketching

**Pack ID:** AS1CurveSketching

## AS1CurveSketchingQ003TikZ-001: Fig. 2 cubic curve for C1 June 2011 Question 5

**Source:** Questions PDF p.3  
**Related question:** Question 3  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1CurveSketchingQ003TikZ-001 | Source: Questions PDF p.3 | Insert from AS1_curve_sketching_tikz.md | Purpose: Fig. 2 cubic curve showing a repeated root at $x=-1$ and a root at $x=3$]`  
**Purpose:** Recreates the printed Fig. 2 curve with equation $y=(x+p)(x+q)^2$, showing a repeated/touching root at $x=-1$ and a simple crossing root at $x=3$.

### Creation Notes

TikZ is the best format because the diagram is a coordinate graph. The plotted curve uses the mathematically equivalent form $y=(x-3)(x+1)^2$ after reading the graph. The diagram preserves the labelled roots from the original question without adding solution explanation.

```latex
\begin{tikzpicture}[scale=0.75]
  \draw[->] (-4.2,0) -- (4.2,0) node[right] {$x$};
  \draw[->] (0,-4.2) -- (0,4.2) node[above] {$y$};
  \draw[thick, domain=-3.3:3.8, samples=200, smooth]
    plot (\x, {0.18*(\x-3)*(\x+1)^2});
  \draw (-1,0) -- (-1,0.12);
  \node[above] at (-1,0.05) {$-1$};
  \draw (3,0) -- (3,-0.12);
  \node[below] at (3,-0.05) {$3$};
  \node[below] at (0,-4.2) {Fig. 2};
\end{tikzpicture}
```

## AS1CurveSketchingQ004TikZ-001: Fig. 2 quadratic curve for C1 June 2014 Question 2(b)

**Source:** Questions PDF p.3  
**Related question:** Question 4  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1CurveSketchingQ004TikZ-001 | Source: Questions PDF p.3 | Insert from AS1_curve_sketching_tikz.md | Purpose: Fig. 2 quadratic curve with vertex at $x=2$ and y-intercept $-4$]`  
**Purpose:** Recreates the printed Fig. 2 quadratic curve with equation $y=q(x+p)^2$, showing the vertex at $x=2$ and the y-intercept $-4$.

### Creation Notes

TikZ is appropriate because the asset is a coordinate sketch. The curve is plotted as $y=-(x-2)^2$, matching the given labels in the question diagram. The graph shows the essential mathematical information but is not intended to be an exact visual clone.

```latex
\begin{tikzpicture}[scale=0.75]
  \draw[->] (-1.0,0) -- (4.6,0) node[right] {$x$};
  \draw[->] (0,-5.2) -- (0,1.2) node[above] {$y$};
  \draw[thick, domain=-0.35:4.2, samples=200, smooth]
    plot (\x, {-(\x-2)^2});
  \fill (2,0) circle (1.5pt);
  \node[above] at (2,0.05) {$2$};
  \fill (0,-4) circle (1.5pt);
  \node[left] at (0,-4) {$-4$};
  \node[below] at (2.2,-5.1) {Fig. 2};
\end{tikzpicture}
```
