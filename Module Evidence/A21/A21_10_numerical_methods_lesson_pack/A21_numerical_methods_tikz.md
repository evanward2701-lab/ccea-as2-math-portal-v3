```markdown
# A21_numerical_methods_tikz.md

**Unit code:** A21  
**Topic ID:** A21NumericalMethods  

## A21NumericalMethodsTikZ-001: Discontinuous Function Sign Change

**Source:** PowerPoint slide 5  
**Related lesson section:** 8.1  
**Used in placeholder:** `[VISUAL PLACEHOLDER: A21NumericalMethodsTikZ-001 | ...]`  
**Purpose:** Show why the sign change rule fails if the function is not continuous (e.g., an asymptote jumping from negative to positive without crossing zero).  

### Creation Notes  
This TikZ diagram plots $y = 1/x$. It highlights the points at $x = -1$ and $x = 1$ to show a sign change (from $y = -1$ to $y = 1$), but clearly displays the vertical asymptote at $x = 0$ to prove that the curve never crosses the x-axis.

```latex
\begin{tikzpicture}[scale=1.5]
    % Axes
    \draw[->, thick] (-2.5, 0) -- (2.5, 0) node[right] {$x$};
    \draw[->, thick] (0, -2.5) -- (0, 2.5) node[above] {$y$};
    
    % Curve y = 1/x (positive side)
    \draw[domain=0.4:2.4, smooth, variable=\x, blue, thick] plot ({\x}, {1/\x});
    
    % Curve y = 1/x (negative side)
    \draw[domain=-2.4:-0.4, smooth, variable=\x, blue, thick] plot ({\x}, {1/\x});
    
    % Points at x = 1 and x = -1
    \filldraw[black] (1, 1) circle (1.5pt) node[anchor=south west] {$(1, 1)$};
    \filldraw[black] (-1, -1) circle (1.5pt) node[anchor=north east] {$(-1, -1)$};
    
    % Asymptote indication
    \draw[dashed, gray] (0, -2.5) -- (0, 2.5);
\end{tikzpicture}
```

## A21NumericalMethodsTikZ-002: No Sign Change But Has Roots

**Source:** PowerPoint slide 6  
**Related lesson section:** 8.1  
**Used in placeholder:** `[VISUAL PLACEHOLDER: A21NumericalMethodsTikZ-002 | ...]`  
**Purpose:** Show why no sign change does not guarantee no roots (e.g., a parabola crossing the axis twice within the interval).  

### Creation Notes  
This TikZ diagram plots a downward-facing parabola that crosses the x-axis twice. Two points are marked on the curve, both below the x-axis, demonstrating that evaluating the function at these two bounds yields no sign change, even though two roots exist between them.

```latex
\begin{tikzpicture}[scale=1.5]
    % Axes
    \draw[->, thick] (-1, 0) -- (4, 0) node[right] {$x$};
    \draw[->, thick] (0, -2) -- (0, 2) node[above] {$y$};
    
    % Curve y = -(x-2)^2 + 1
    \draw[domain=0.2:3.8, smooth, variable=\x, blue, thick] plot ({\x}, {-(\x-2)^2 + 1});
    
    % Roots
    \filldraw[red] (1, 0) circle (1pt) node[anchor=south east, text=black] {root};
    \filldraw[red] (3, 0) circle (1pt) node[anchor=south west, text=black] {root};
    
    % Interval bounds (both negative)
    \filldraw[black] (0.5, -1.25) circle (1.5pt);
    \draw[dashed] (0.5, -1.25) -- (0.5, 0);
    
    \filldraw[black] (3.5, -1.25) circle (1.5pt);
    \draw[dashed] (3.5, -1.25) -- (3.5, 0);
\end{tikzpicture}
```

## A21NumericalMethodsTikZ-003: Newton-Raphson Failure at Stationary Point

**Source:** PowerPoint slide 26  
**Related lesson section:** 8.5  
**Used in placeholder:** `[VISUAL PLACEHOLDER: A21NumericalMethodsTikZ-003 | ...]`  
**Purpose:** Show a horizontal tangent at a minimum point failing to cross the x-axis.  

### Creation Notes  
This TikZ diagram plots a parabola with a minimum turning point above the x-axis. A tangent line is drawn exactly at the minimum, showing it is perfectly horizontal and parallel to the x-axis, visually explaining the division by zero error in the Newton-Raphson formula.

```latex
\begin{tikzpicture}[scale=1.5]
    % Axes
    \draw[->, thick] (-2, 0) -- (3, 0) node[right] {$x$};
    \draw[->, thick] (0, -0.5) -- (0, 3) node[above] {$y$};
    
    % Curve y = (x-1)^2 + 0.5
    \draw[domain=-0.5:2.5, smooth, variable=\x, blue, thick] plot ({\x}, {(\x-1)^2 + 0.5});
    
    % Point x0 at the minimum
    \draw[dashed] (1, 0.5) -- (1, 0) node[below] {$x_0$};
    
    % Horizontal Tangent
    \draw[red, thick] (-1, 0.5) -- (3, 0.5) node[anchor=south east, text=black] {tangent};
\end{tikzpicture}
```
```
