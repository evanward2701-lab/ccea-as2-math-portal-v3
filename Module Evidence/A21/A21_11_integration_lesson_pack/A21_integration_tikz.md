```markdown
A21_integration_tikz.md
```

```markdown
# TikZ Diagrams for A21 Integration  

**Unit code:** A21  
**Topic ID:** A21Integration  

## A21IntegrationTikZ-001: Trapezium Rule Over/Under Estimation  

**Source:** PowerPoint slide 49 & 50  
**Related lesson section:** 8.9  
**Used in placeholder:** `[VISUAL PLACEHOLDER: A21IntegrationTikZ-001 | Source: PowerPoint slide 49 & 50 | Insert from A21_integration_tikz.md | Purpose: Diagram illustrating the Trapezium Rule and how concavity affects over/under estimation]`  
**Purpose:** Diagram illustrating the Trapezium Rule and how concavity affects over/under estimation.  

### Creation Notes  
This TikZ diagram recreates the visual explanation of why the trapezium rule overestimates convex curves and underestimates concave curves. TikZ is the right format because it allows for precise mathematical plotting of the curves and the geometric trapeziums overlaying them.  

```latex
\begin{tikzpicture}[scale=0.8]

% Left Graph: Convex (Overestimate)
\begin{scope}[xshift=0cm]
    % Axes
    \draw[->, thick] (-0.5, 0) -- (5, 0) node[right] {$x$};
    \draw[->, thick] (0, -0.5) -- (0, 5) node[above] {$y$};
    
    % Curve: y = 0.2 * x^2 + 0.5 (Convex)
    \draw[thick, blue, domain=0.5:4.5, samples=100] plot (\x, {0.2*\x*\x + 0.5}) node[right] {$f''(x) > 0$};
    
    % Trapeziums
    \foreach \x in {1, 2, 3} {
        \pgfmathsetmacro{\yleft}{0.2*\x*\x + 0.5}
        \pgfmathsetmacro{\xright}{\x+1}
        \pgfmathsetmacro{\yright}{0.2*\xright*\xright + 0.5}
        
        \draw[fill=yellow, fill opacity=0.4, draw=black, thick] 
            (\x, 0) -- (\x, \yleft) -- (\xright, \yright) -- (\xright, 0) -- cycle;
    }
    
    % Labels
    \node[below] at (2.5, -0.5) {\textbf{Convex Curve}};
    \node[below] at (2.5, -1.2) {Trapeziums sit \textbf{above}};
    \node[below] at (2.5, -1.8) {\textbf{Overestimate}};
\end{scope}

% Right Graph: Concave (Underestimate)
\begin{scope}[xshift=8cm]
    % Axes
    \draw[->, thick] (-0.5, 0) -- (5, 0) node[right] {$x$};
    \draw[->, thick] (0, -0.5) -- (0, 5) node[above] {$y$};
    
    % Curve: y = -0.2 * (x-4.5)^2 + 4.5 (Concave)
    \draw[thick, red, domain=0.5:4.5, samples=100] plot (\x, {-0.2*(\x-4.5)*(\x-4.5) + 4.5}) node[right] {$f''(x) < 0$};
    
    % Trapeziums
    \foreach \x in {1, 2, 3} {
        \pgfmathsetmacro{\yleft}{-0.2*(\x-4.5)*(\x-4.5) + 4.5}
        \pgfmathsetmacro{\xright}{\x+1}
        \pgfmathsetmacro{\yright}{-0.2*(\xright-4.5)*(\xright-4.5) + 4.5}
        
        \draw[fill=yellow, fill opacity=0.4, draw=black, thick] 
            (\x, 0) -- (\x, \yleft) -- (\xright, \yright) -- (\xright, 0) -- cycle;
    }
    
    % Labels
    \node[below] at (2.5, -0.5) {\textbf{Concave Curve}};
    \node[below] at (2.5, -1.2) {Trapeziums sit \textbf{below}};
    \node[below] at (2.5, -1.8) {\textbf{Underestimate}};
\end{scope}

\end{tikzpicture}
```
```

