# TikZ Diagrams for AS1 differentiation

This file contains TikZ code for the mathematical diagrams used in the AS1 differentiation lesson.  TikZ is a powerful drawing language for LaTeX, ideal for plotting curves and annotating graphs.  Copy the relevant code into a LaTeX document preamble with `\usepackage{tikz}` to render the figures.

## TIKZ‑001: Secant Approaching a Tangent
Source: lesson PDF p.4  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: TIKZ-001 | Source: lesson PDF p.4 | Insert from AS1_differentiation_tikz.md | Purpose: show secant approaching tangent on a curve]`  
Purpose: This diagram illustrates the geometric meaning of the derivative.  For the curve \(y=x^2\), the secant line joining \((x,f(x))\) and \((x+h,f(x+h))\) becomes the tangent line as \(h\) approaches zero.  The horizontal distance \(h\) between the points is indicated below the \(x\)-axis.

```latex
\begin{tikzpicture}[scale=1]
  % Axes
  \draw[->] (-0.2,0) -- (4.5,0) node[right] {$x$};
  \draw[->] (0,-0.5) -- (0,8) node[above] {$y$};
  % Curve y = x^2
  \draw[domain=0:4, smooth, variable=\x, blue, thick] plot ({\x},{\x*\x});
  % Points on the curve
  \draw[fill] (1,1) circle (2pt) node[below left] {$(x,f(x))$};
  \draw[fill] (2,4) circle (2pt) node[above right] {$(x+h,f(x+h))$};
  % Secant line between the two points
  \draw[thick, red] (1,1) -- (2,4) node[midway, above left] {Secant line};
  % Tangent line at x=1: slope = 2; equation y=2(x-1)+1 = 2x-1
  \draw[thick, orange, dashed] (0,-1) -- (2.5,4) node[above right] {Tangent line};
  % Horizontal distance h
  \draw[<->] (1,-0.3) -- (2,-0.3) node[midway, below] {$h$};
\end{tikzpicture}
```

## TIKZ‑002: Graph of \(y = x^3 - 3x\) with Stationary Points
Source: lesson PDF p.5  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: TIKZ-002 | Source: lesson PDF p.5 | Insert from AS1_differentiation_tikz.md | Purpose: graph of \(y=x^3-3x\) illustrating local maxima, minima and point of inflection]`  
Purpose: This graph shows the cubic function \(y=x^3-3x\) together with its local maximum, local minimum and point of inflection.  The axes are labelled and the key points are highlighted to aid understanding of stationary point classification.

```latex
\begin{tikzpicture}[scale=1]
  % Axes
  \draw[->] (-2.5,0) -- (2.5,0) node[right] {$x$};
  \draw[->] (0,-3) -- (0,3) node[above] {$y$};
  % Graph of y = x^3 - 3x
  \draw[domain=-2:2, smooth, variable=\x, blue, thick] plot ({\x},{\x*\x*\x - 3*\x});
  % Local maximum at (-1,2)
  \draw[fill] (-1,2) circle (2pt) node[above left] {local maximum};
  % Inflection point at (0,0)
  \draw[fill] (0,0) circle (2pt) node[above right] {inflection point};
  % Local minimum at (1,-2)
  \draw[fill] (1,-2) circle (2pt) node[below right] {local minimum};
\end{tikzpicture}
```

## TIKZ‑003: Graph of \(y = x^4 - 4x^2\) with Inflection Points
Source: lesson PDF p.7  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: TIKZ-003 | Source: lesson PDF p.7 | Insert from AS1_differentiation_tikz.md | Purpose: graph of \(y=x^4-4x^2\) showing points of inflection]`  
Purpose: This diagram plots the quartic function \(y=x^4-4x^2\) and highlights its local maxima, local minima and points of inflection.  The inflection points occur at \(x = \pm\sqrt{\tfrac{2}{3}}\); although their exact coordinates are irrational, approximate positions are marked for visual clarity.

```latex
\begin{tikzpicture}[scale=1]
  % Axes
  \draw[->] (-3,0) -- (3,0) node[right] {$x$};
  \draw[->] (0,-4) -- (0,3) node[above] {$y$};
  % Graph of y = x^4 - 4x^2
  \draw[domain=-2:2, smooth, variable=\x, blue, thick] plot ({\x},{\x^4 - 4*\x^2});
  % Local maximum at (0,0)
  \draw[fill] (0,0) circle (2pt) node[above right] {local maximum};
  % Local minima at (-1,-3) and (1,-3)
  \draw[fill] (-1,-3) circle (2pt) node[below left] {local minimum};
  \draw[fill] (1,-3) circle (2pt) node[below right] {local minimum};
  % Inflection points at ±sqrt(2/3) ≈ ±0.82; value ≈ -2.22
  \def\a{0.8165}
  \def\yinf{-2.22}
  \draw[fill] (\a,\yinf) circle (2pt) node[above right] {inflection};
  \draw[fill] (-\a,\yinf) circle (2pt) node[above left] {inflection};
\end{tikzpicture}
```