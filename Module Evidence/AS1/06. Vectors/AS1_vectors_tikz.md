# TikZ Diagrams for AS1 Vectors

## TIKZ-001: Drawing a Vector
Source: lesson PDF p.1  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: TIKZ-001 | ...]`  
Purpose: illustrate a vector $(3,-2)$ and its components.

```latex
\begin{tikzpicture}[scale=0.8]
  % axes
  \draw[->] (-1,0) -- (4,0) node[right] {$x$};
  \draw[->] (0,-3) -- (0,2) node[above] {$y$};
  % vector
  \draw[->,thick,blue] (0,0) -- (3,-2) node[right] {$\mathbf{a}$};
  % dashed projections
  \draw[dashed,gray] (3,-2) -- (3,0);
  \draw[dashed,gray] (3,-2) -- (0,-2);
  % component labels
  \node at (3.3,-2.3) {$\begin{pmatrix}3\\ -2\end{pmatrix}$};
\end{tikzpicture}
```

## TIKZ-002: Route of Vectors
Source: lesson PDF p.1  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: TIKZ-002 | ...]`  
Purpose: illustrate a route of vectors and demonstrate the triangle/parallelogram law.

```latex
\begin{tikzpicture}[>=stealth]
  % define points
  \coordinate (P) at (0,0);
  \coordinate (Q) at (2,1);
  \coordinate (S) at (5,1);
  \coordinate (R) at (4,-1);
  % arrows representing vectors
  \draw[->] (P) -- (Q) node[midway, above] {$\mathbf{a}$};
  \draw[->] (Q) -- (S) node[midway, above] {$\mathbf{b}$};
  \draw[->] (S) -- (R) node[midway, right] {$\mathbf{c}$};
  \draw[->] (R) -- (P) node[midway, below] {$\mathbf{d}$};
  % optional diagonal
  \draw[->,dashed] (Q) -- (R) node[midway, above left] { };
  % point labels
  \fill (P) circle (0.06) node[below left] {$P$};
  \fill (Q) circle (0.06) node[above] {$Q$};
  \fill (S) circle (0.06) node[above] {$S$};
  \fill (R) circle (0.06) node[below] {$R$};
\end{tikzpicture}
```

## TIKZ-003: General Vector with Components and Angle
Source: AI-proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: (no placeholder – used implicitly in explanations)  
Purpose: depict an arbitrary vector $(x,y)$ from the origin, its projections onto the axes and the angle $\theta$.

```latex
\begin{tikzpicture}[scale=0.8]
  \draw[->] (0,0) -- (4,0) node[right] {$x$};
  \draw[->] (0,0) -- (0,3) node[above] {$y$};
  % generic vector a
  \draw[->,thick,blue] (0,0) -- (3,2) node[right] {$\mathbf{a}$};
  % projections
  \draw[dashed,gray] (3,2) -- (3,0) node[below] {$x$};
  \draw[dashed,gray] (3,2) -- (0,2) node[left] {$y$};
  % angle arc
  \draw (0.8,0) arc (0:33.69:0.8);
  \node at (0.95,0.3) {$\theta$};
  % vector label
  \node at (3.4,2.2) {$\begin{pmatrix}x\\y\end{pmatrix}$};
\end{tikzpicture}
```

## TIKZ-004: Parallelogram Ratio and Midpoint Proof
Source: lesson PDF p.4  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: TIKZ-004 | ...]`  
Purpose: illustrate parallelogram $OABC$, the point $X$ dividing $AB$ in the ratio $3:1$ and the midpoint $M$ of $BC$.  Vectors $\overrightarrow{XM}$ and $\overrightarrow{OC}$ are shown to be parallel.

```latex
\begin{tikzpicture}[>=stealth,scale=0.8]
  % vertices of a parallelogram
  \coordinate (O) at (0,0);
  \coordinate (A) at (3,0);
  \coordinate (B) at (0,3);
  \coordinate (C) at (3,3);
  % points X and M
  \coordinate (X) at (0.75,2.25);
  \coordinate (M) at (1.5,3);
  % draw parallelogram
  \draw[->] (O) -- (A) node[midway, below] {$\mathbf{a}$};
  \draw[->] (O) -- (B) node[midway, left] {$\mathbf{b}$};
  \draw (A) -- (C) -- (B) -- cycle;
  % mark points
  \fill (O) circle (0.04) node[below left] {$O$};
  \fill (A) circle (0.04) node[below right] {$A$};
  \fill (B) circle (0.04) node[above left] {$B$};
  \fill (C) circle (0.04) node[above right] {$C$};
  \fill (X) circle (0.04) node[right] {$X$};
  \fill (M) circle (0.04) node[above] {$M$};
  % ratio along AB
  \draw[dashed] (A) -- (X);
  \draw[dashed] (X) -- (B);
  \draw[->,thick] (A) -- (B) node[midway, above] {$3:1$};
  % midpoint connections
  \draw[dashed] (B) -- (M);
  \draw[dashed] (M) -- (C);
  % vectors XM and OC
  \draw[->,red,thick] (X) -- (M) node[midway,right] {$\overrightarrow{XM}$};
  \draw[->,blue,thick] (O) -- (C) node[midway,above] {$\overrightarrow{OC}$};
\end{tikzpicture}
```

## TIKZ-005: Triangle with Vectors
Source: lesson PDF p.4  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: TIKZ-005 | ...]`  
Purpose: draw triangle $ABC$ with vectors $\mathbf{AB}$ and $\mathbf{AC}$ and illustrate the angle at $A$.

```latex
\begin{tikzpicture}[>=stealth,scale=0.8]
  \coordinate (A) at (0,0);
  \coordinate (B) at (3,-2);
  \coordinate (C) at (1,-5);
  % vectors from A
  \draw[->,thick,blue] (A) -- (B) node[midway, above] {$\mathbf{AB}$};
  \draw[->,thick,blue] (A) -- (C) node[midway, left] {$\mathbf{AC}$};
  % side BC
  \draw[dashed] (B) -- (C) node[midway, right] {$\mathbf{BC}$};
  % points
  \fill (A) circle (0.04) node[above left] {$A$};
  \fill (B) circle (0.04) node[right] {$B$};
  \fill (C) circle (0.04) node[below] {$C$};
  % angle marker at A
  \draw (0.7,0) arc (0:-60:0.7);
  \node at (0.8,-0.2) {$\theta$};
\end{tikzpicture}
```
