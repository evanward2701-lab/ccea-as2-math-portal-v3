# A21_parametric_equations_tikz.md

**Unit code:** A21  
**Topic ID:** A21ParametricEquations  

## A21ParametricEquationsTikZ-001: Figure Skater Curve  

**Source:** PowerPoint slide 21  
**Related lesson section:** 9  
**Used in placeholder:** `[VISUAL PLACEHOLDER: A21ParametricEquationsTikZ-001 | ...]`  
**Purpose:** Recreate the figure-of-eight curve for the ice skater model.  

### Creation Notes  
This TikZ diagram plots the parametric curve $x = 8\cos(20t)$, $y = 12\sin(10t - \pi/3)$ to illustrate a complex path that cannot be easily represented by a Cartesian equation.  

```latex
\begin{tikzpicture}[scale=0.3]
    % Axes
    \draw[->, thick] (-10, 0) -- (10, 0) node[right] {$x$};
    \draw[->, thick] (0, -15) -- (0, 15) node[above] {$y$};
    
    % Grid/Ticks
    \foreach \x in {-5, 5} \draw (\x, 0.2) -- (\x, -0.2) node[below] {\footnotesize $\x$};
    \foreach \y in {-10, -5, 5, 10} \draw (0.2, \y) -- (-0.2, \y) node[left] {\footnotesize $\y$};
    
    % Parametric Curve
    % x = 8*cos(20*t), y = 12*sin(10*t - 60)
    % t goes from 0 to 360 degrees for a full cycle in the plot domain
    \draw[domain=0:360, samples=100, smooth, variable=\t, blue, thick] 
        plot ({8*cos(2*\t)}, {12*sin(\t - 60)});
        
    % Start point t=0
    \filldraw[black] ({8*cos(0)}, {12*sin(-60)}) circle (5pt) node[right] {$t=0$};
\end{tikzpicture}
```

