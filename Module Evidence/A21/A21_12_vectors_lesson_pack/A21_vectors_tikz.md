```markdown
# A21_vectors_tikz.md

**Unit code:** A21  
**Topic ID:** A21Vectors  

## A21VectorsTikZ-001: Basic Vector Pathways

**Source:** AI-proposed teaching enhancement, not present in supplied lesson evidence  
**Related lesson section:** 8.1  
**Used in placeholder:** `[VISUAL PLACEHOLDER: A21VectorsTikZ-001 | Source: AI-proposed teaching enhancement, not present in supplied lesson evidence | Insert from A21_vectors_tikz.md | Purpose: Show vector addition and subtraction pathways in a basic triangle and parallelogram]`  
**Purpose:** Show vector addition and subtraction pathways in a basic triangle and parallelogram.  

### Creation Notes  
This TikZ diagram provides a clean, printable reference for the fundamental vector rules: $\vec{AB} = b - a$ in a triangle, and the diagonal $\vec{OC} = a + b$ in a parallelogram. These are the building blocks for the complex proofs that follow.

```latex
\begin{tikzpicture}[scale=1.5, >=stealth]
  % Triangle for Subtraction
  \coordinate (O1) at (0,0);
  \coordinate (A1) at (1.5, 2);
  \coordinate (B1) at (3, 0.5);
  
  \draw[->, thick] (O1) -- (A1) node[midway, above left] {$\mathbf{a}$};
  \draw[->, thick] (O1) -- (B1) node[midway, below] {$\mathbf{b}$};
  \draw[->, thick, red] (A1) -- (B1) node[midway, above right] {$\mathbf{b} - \mathbf{a}$};
  
  \node[left] at (O1) {$O$};
  \node[above] at (A1) {$A$};
  \node[right] at (B1) {$B$};
  
  \node[below] at (1.5, -0.5) {Vector Subtraction: $\vec{AB} = \mathbf{b} - \mathbf{a}$};

  % Parallelogram for Addition
  \begin{scope}[xshift=5cm]
    \coordinate (O2) at (0,0);
    \coordinate (A2) at (1.5, 2);
    \coordinate (B2) at (3, 0);
    \coordinate (C2) at (4.5, 2);
    
    \draw[->, thick] (O2) -- (A2) node[midway, above left] {$\mathbf{a}$};
    \draw[->, thick] (O2) -- (B2) node[midway, below] {$\mathbf{b}$};
    \draw[->, thick, dashed] (A2) -- (C2) node[midway, above] {$\mathbf{b}$};
    \draw[->, thick, dashed] (B2) -- (C2) node[midway, below right] {$\mathbf{a}$};
    \draw[->, thick, blue] (O2) -- (C2) node[midway, above left] {$\mathbf{a} + \mathbf{b}$};
    
    \node[left] at (O2) {$O$};
    \node[above] at (A2) {$A$};
    \node[below] at (B2) {$B$};
    \node[right] at (C2) {$C$};
    
    \node[below] at (2.25, -0.5) {Vector Addition: $\vec{OC} = \mathbf{a} + \mathbf{b}$};
  \end{scope}
\end{tikzpicture}
```
```
