# TikZ Diagrams for AS1 Quadratic Functions

## TIKZ-001: Parabola shapes, turning points and axes of symmetry
Source: lesson PDF p.2  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: TIKZ-001 | Source: lesson PDF p.2 | Insert from AS1_quadratic_functions_tikz.md | Purpose: illustrate the difference between upward and downward parabolas, and mark the turning point and axis of symmetry]`  
Purpose: This diagram shows two typical parabolas: one opening upwards (\(a>0\)) and one opening downwards (\(a<0\)). Each plot highlights the turning point and the axis of symmetry.

```latex
\begin{tikzpicture}[scale=0.8]
  % Left panel: a>0
  \begin{scope}
    \draw[->] (-3,0) -- (3,0) node[right] {$x$};
    \draw[->] (0,-4) -- (0,4) node[above] {$y$};
    % parabola: y = (x-1)^2 -2
    \draw[samples=200, smooth, domain=-1:3, thick, blue] plot(\x,{(\x-1)^2 - 2});
    % axis of symmetry
    \draw[dashed, blue] (1,-4) -- (1,4);
    % turning point
    \filldraw[blue] (1,-2) circle (2pt) node[below right] {$(h,k)$};
    % labels
    \node[blue] at (2.2,3.2) {$a>0$};
    \node at (-2.2,3.2) {\small \textit{Opens upwards}};
    \node at (-2.2,2.6) {\small \textit{Minimum turning point}};
    \node at (-2.2,2.0) {\small \textit{Axis $x=h$}};
  \end{scope}
  % Right panel: a<0
  \begin{scope}[xshift=7.5cm]
    \draw[->] (-3,0) -- (3,0) node[right] {$x$};
    \draw[->] (0,-4) -- (0,4) node[above] {$y$};
    % parabola: y = -(x+1)^2 +2
    \draw[samples=200, smooth, domain=-3:1, thick, red] plot(\x,{-(\x+1)^2 + 2});
    % axis of symmetry
    \draw[dashed, red] (-1,-4) -- (-1,4);
    % turning point
    \filldraw[red] (-1,2) circle (2pt) node[above left] {$(h,k)$};
    % labels
    \node[red] at (2.2,3.2) {$a<0$};
    \node at (-2.2,3.2) {\small \textit{Opens downwards}};
    \node at (-2.2,2.6) {\small \textit{Maximum turning point}};
    \node at (-2.2,2.0) {\small \textit{Axis $x=h$}};
  \end{scope}
\end{tikzpicture}
```

## TIKZ-002: Discriminant and number of real roots
Source: AI‑proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: TIKZ-002 | Source: AI‑proposed teaching enhancement, not present in lesson PDF | Insert from AS1_quadratic_functions_tikz.md | Purpose: illustrate how the discriminant determines the number of real roots]`  
Purpose: This triple diagram shows how the sign of the discriminant \(D=b^2-4ac\) affects the graph of \(y = ax^2 + bx + c\). The left panel has \(D>0\) (two distinct real roots), the middle panel has \(D=0\) (one repeated root) and the right panel has \(D<0\) (no real roots). 

```latex
\begin{tikzpicture}[scale=0.8]
  % Panel 1: D>0
  \begin{scope}
    \draw[->] (-3,0) -- (3,0) node[right] {$x$};
    \draw[->] (0,-2) -- (0,4) node[above] {$y$};
    % y = (x-1)(x+2) = x^2 + x - 2
    \draw[samples=200, smooth, domain=-2.5:2.5, thick, blue] plot(\x,{(\x-1)*(\x+2)});
    \filldraw[blue] (-2,0) circle (2pt);
    \filldraw[blue] (1,0) circle (2pt);
    \node[blue] at (2.0,3.3) {$D>0$};
    \node at (0,-1.4) {\small Two distinct real roots};
  \end{scope}
  % Panel 2: D=0
  \begin{scope}[xshift=6cm]
    \draw[->] (-3,0) -- (3,0) node[right] {$x$};
    \draw[->] (0,-2) -- (0,4) node[above] {$y$};
    % y = (x-1)^2
    \draw[samples=200, smooth, domain=-1.5:3.5, thick, orange] plot(\x,{(\x-1)^2});
    \filldraw[orange] (1,0) circle (2pt);
    \node[orange] at (2.0,3.3) {$D=0$};
    \node at (0,-1.4) {\small One repeated root};
  \end{scope}
  % Panel 3: D<0
  \begin{scope}[xshift=12cm]
    \draw[->] (-3,0) -- (3,0) node[right] {$x$};
    \draw[->] (0,-2) -- (0,4) node[above] {$y$};
    % y = x^2 + 1
    \draw[samples=200, smooth, domain=-2.5:2.5, thick, red] plot(\x,{\x^2 + 1});
    \node[red] at (2.0,3.3) {$D<0$};
    \node at (0,-1.4) {\small No real roots};
  \end{scope}
\end{tikzpicture}
```
