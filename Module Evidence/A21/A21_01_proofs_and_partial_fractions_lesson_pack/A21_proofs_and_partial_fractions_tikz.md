```markdown
# TikZ Diagrams for A21 Proofs and Partial Fractions

**Unit code:** A21  
**Topic ID:** A21ProofsAndPartialFractions  

## A21ProofsAndPartialFractionsTikZ-001: Number Sets Venn Diagram  

**Source:** AI-proposed teaching enhancement, not present in supplied lesson evidence  
**Related lesson section:** 7  
**Purpose:** Venn diagram showing the relationship between Natural numbers, Integers, Rational numbers, and Real numbers to clarify definitions.  

### Creation Notes  
This TikZ diagram creates a nested set of ellipses to represent the hierarchy of number systems. It is crucial for students to visually understand that all integers are rational numbers, but not all real numbers are rational (leaving space for the irrationals like $\sqrt{2}$).

```latex
\begin{tikzpicture}[scale=0.8, every node/.style={scale=0.9}]
    % Colors
    \definecolor{realcolor}{RGB}{227,242,253}
    \definecolor{rationalcolor}{RGB}{187,222,251}
    \definecolor{integercolor}{RGB}{144,202,249}
    \definecolor{naturalcolor}{RGB}{100,181,246}

    % Real Numbers
    \filldraw[fill=realcolor, draw=black, thick] (0,0) ellipse (6cm and 4.5cm);
    \node[anchor=north] at (0, 4.3) {\textbf{Real Numbers ($\mathbb{R}$)}};
    \node[anchor=north] at (3.5, 3) {Irrationals};
    \node[anchor=north] at (3.5, 2.5) {$\sqrt{2}, \pi, e$};

    % Rational Numbers
    \filldraw[fill=rationalcolor, draw=black, thick] (-1,-0.5) ellipse (4.5cm and 3.5cm);
    \node[anchor=north] at (-1, 2.8) {\textbf{Rational Numbers ($\mathbb{Q}$)}};
    \node[anchor=north] at (1.5, 1.5) {$\frac{1}{2}, -0.75, \frac{22}{7}$};

    % Integers
    \filldraw[fill=integercolor, draw=black, thick] (-1.5,-1) ellipse (3cm and 2.5cm);
    \node[anchor=north] at (-1.5, 1.3) {\textbf{Integers ($\mathbb{Z}$)}};
    \node[anchor=north] at (0, 0.2) {$-3, -1, 0$};

    % Natural Numbers
    \filldraw[fill=naturalcolor, draw=black, thick] (-2,-1.5) ellipse (1.5cm and 1.5cm);
    \node[anchor=north] at (-2, -0.2) {\textbf{Natural ($\mathbb{N}$)}};
    \node[anchor=north] at (-2, -1.2) {$1, 2, 3, \dots$};

\end{tikzpicture}
```
```

