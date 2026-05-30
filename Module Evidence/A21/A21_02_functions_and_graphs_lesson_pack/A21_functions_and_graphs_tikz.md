```markdown
# A21_functions_and_graphs_tikz.md

**Unit code:** A21
**Topic ID:** A21FunctionsAndGraphs

## A21FunctionsAndGraphsTikZ-001: Graph of y = |x|

**Source:** PowerPoint slide 6
**Related lesson section:** 8.1
**Used in placeholder:** `[VISUAL PLACEHOLDER: A21FunctionsAndGraphsTikZ-001 | ...]`
**Purpose:** Graph of y = |x| showing the V-shape at the origin

### Creation Notes
A simple TikZ plot showing the standard modulus function. The V-shape is drawn with a thick blue line, clearly showing the reflection at the origin.

```latex
\begin{tikzpicture}[scale=1.2]
  % Axes
  \draw[->, thick] (-3,0) -- (3,0) node[right] {$x$};
  \draw[->, thick] (0,-1) -- (0,3) node[above] {$y$};
  
  % Graph y = |x|
  \draw[ultra thick, blue] (-2.5,2.5) -- (0,0) -- (2.5,2.5);
  
  % Labels
  \node[below right] at (0,0) {$O$};
  \node[right, blue] at (1.5, 1.5) {$y = |x|$};
\end{tikzpicture}
```

## A21FunctionsAndGraphsTikZ-002: Sketch of y = |2x - 3|

**Source:** Transcript / Whiteboard
**Related lesson section:** 8.1
**Used in placeholder:** `[VISUAL PLACEHOLDER: A21FunctionsAndGraphsTikZ-002 | ...]`
**Purpose:** Sketch of y = |2x - 3| showing the reflection

### Creation Notes
This diagram illustrates the sketching method taught in the transcript. The original line $y = 2x - 3$ is shown as a dashed line below the $x$-axis, and the reflected modulus graph is shown as a solid line.

```latex
\begin{tikzpicture}[scale=1.2]
  % Axes
  \draw[->, thick] (-2,0) -- (4,0) node[right] {$x$};
  \draw[->, thick] (0,-4) -- (0,5) node[above] {$y$};
  
  % Original line (dashed below x-axis)
  \draw[dashed, gray, thick] (-0.5,-4) -- (1.5,0);
  
  % Modulus graph
  \draw[ultra thick, blue] (-0.5,4) -- (1.5,0) -- (3.5,4);
  
  % Key coordinates
  \node[left] at (0,3) {$3$};
  \node[left, gray] at (0,-3) {$-3$};
  \node[below] at (1.5,0) {$\frac{3}{2}$};
  
  % Labels
  \node[right, blue] at (2.5,3) {$y = |2x - 3|$};
\end{tikzpicture}
```

## A21FunctionsAndGraphsTikZ-003: Inverse Function Reflection

**Source:** PowerPoint slide 26
**Related lesson section:** 8.4
**Used in placeholder:** `[VISUAL PLACEHOLDER: A21FunctionsAndGraphsTikZ-003 | ...]`
**Purpose:** Graph showing f(x) and f^-1(x) reflected across the line y=x

### Creation Notes
This diagram shows a generic exponential-style curve and its logarithmic-style inverse to demonstrate the geometric property of inverse functions: reflection in the line $y=x$.

```latex
\begin{tikzpicture}[scale=1.2]
  % Axes
  \draw[->, thick] (-1,0) -- (5,0) node[right] {$x$};
  \draw[->, thick] (0,-1) -- (0,5) node[above] {$y$};
  
  % y = x line
  \draw[dashed, gray, thick] (-1,-1) -- (5,5) node[right] {$y=x$};
  
  % f(x) curve (e.g., e^x style)
  \draw[ultra thick, blue, domain=0:2.2, samples=50] plot (\x, {exp(\x-1)}) node[left] {$y=f(x)$};
  
  % f^-1(x) curve (e.g., ln(x) style)
  \draw[ultra thick, red, domain=0.37:5, samples=50] plot (\x, {ln(\x)+1}) node[below right] {$y=f^{-1}(x)$};
  
  % Intercepts to show swapping
  \filldraw[black] (0, 0.37) circle (1.5pt) node[left] {$a$};
  \filldraw[black] (0.37, 0) circle (1.5pt) node[below] {$a$};
\end{tikzpicture}
```
```

