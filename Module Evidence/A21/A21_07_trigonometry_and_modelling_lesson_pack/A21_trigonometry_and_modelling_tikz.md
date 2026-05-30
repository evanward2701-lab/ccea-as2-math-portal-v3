```markdown
# A21_trigonometry_and_modelling_tikz.md

**Unit code:** A21
**Topic ID:** A21TrigonometryAndModelling

## A21TrigonometryAndModellingTikZ-001: Geometric Proof of sin(A+B)

**Source:** PowerPoint slide 7
**Related lesson section:** 8.1
**Used in placeholder:** `[VISUAL PLACEHOLDER: A21TrigonometryAndModellingTikZ-001 | Source: PowerPoint slide 7 | Insert from A21_trigonometry_and_modelling_tikz.md | Purpose: Geometric proof of the sine addition formula showing how the right-angled triangles combine]`
**Purpose:** Provides a rigorous, visual geometric proof of the $\sin(A+B)$ identity, which is often difficult for students to conceptualise algebraically.

### Creation Notes
This TikZ code recreates the exact geometric construction from Slide 7. It shows a line of length 1 at an angle of $(A+B)$ to the horizontal, and drops perpendiculars to form two right-angled triangles. The lengths of the opposite sides are labelled to show that the total vertical height is $\sin A \cos B + \cos A \sin B$.

```latex
\begin{tikzpicture}[scale=4, thick]
    % Define coordinates
    \coordinate (O) at (0,0);
    \coordinate (X) at (1.5,0);
    
    % Angles
    \def\angleA{30}
    \def\angleB{25}
    \def\angleSum{\angleA+\angleB}
    
    % Points
    \coordinate (P) at (\angleSum:1.5); % End of hypotenuse length 1
    \coordinate (Q) at (\angleA:{1.5*cos(\angleB)}); % Right angle on lower triangle
    \coordinate (R) at ({1.5*cos(\angleSum)},0); % Base of vertical drop from P
    \coordinate (S) at ({1.5*cos(\angleB)*cos(\angleA)},0); % Base of vertical drop from Q
    \coordinate (T) at ({1.5*cos(\angleB)*cos(\angleA)}, {1.5*sin(\angleSum)}); % Horizontal across from P
    
    % Draw main axes
    \draw[->] (O) -- (1.8,0) node[right] {Horizontal};
    
    % Draw triangles
    \draw[blue!70!black] (O) -- (Q) node[midway, below right] {$\cos B$};
    \draw[red!70!black] (Q) -- (P) node[midway, above left] {$\sin B$};
    \draw[black] (O) -- (P) node[midway, above left] {$1$};
    
    % Drop perpendiculars
    \draw[dashed] (P) -- (R);
    \draw[dashed] (Q) -- (S);
    
    % Draw horizontal/vertical components for the proof
    \draw[green!60!black] (Q) -- ({1.5*cos(\angleB)*cos(\angleA)}, {1.5*cos(\angleB)*sin(\angleA)}) node[midway, right] {$\sin A \cos B$};
    
    % Upper small triangle
    \coordinate (U) at ({1.5*cos(\angleSum)}, {1.5*cos(\angleB)*sin(\angleA)});
    \draw[orange!80!black] (Q) -- (U) -- (P) -- cycle;
    \draw[orange!80!black] (U) -- (P) node[midway, right] {$\cos A \sin B$};
    
    % Angles
    \draw (0.3,0) arc (0:\angleA:0.3) node[midway, right, xshift=2pt] {$A$};
    \draw (\angleA:0.4) arc (\angleA:\angleSum:0.4) node[midway, right, xshift=2pt, yshift=2pt] {$B$};
    
    % Angle A in the upper triangle
    \draw (Q) ++(90+\angleA:0.15) arc (90+\angleA:90:0.15);
    \node at ([shift={(105:0.25)}]Q) {$A$};
    
    % Right angle markers
    \draw (Q) ++(-150:0.05) -- ++(-60:0.05) -- ++(30:0.05);
    \draw (R) ++(90:0.05) -- ++(0:0.05) -- ++(-90:0.05);
    \draw (S) ++(90:0.05) -- ++(180:0.05) -- ++(-90:0.05);
    \draw (U) ++(-90:0.05) -- ++(0:0.05) -- ++(90:0.05);

    % Total height label
    \draw[<->, purple] ([xshift=-15pt]R) -- ([xshift=-15pt]P) node[midway, fill=white, inner sep=1pt] {$\sin(A+B)$};

\end{tikzpicture}
```
```

