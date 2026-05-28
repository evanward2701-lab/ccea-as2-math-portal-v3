# TikZ Diagrams for AS1 binomial expansion

## TIKZ‑001: Exponent Pattern in $(a+b)^n$
Source: AI‑proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: TIKZ‑001 | ...]`  
Purpose: Illustrate how the exponents of $a$ and $b$ vary with the term index $r$ in the expansion of $(a+b)^n$.  For example, the blue line shows the exponent of $a$, starting at $n$ when $r=0$ and decreasing to 0 when $r=n$.  The red line shows the exponent of $b$, starting at 0 and increasing to $n$.

```latex
\begin{tikzpicture}[scale=0.8]
  % Axes
  \draw[->] (0,0) -- (6.5,0) node[below right] {$r$ (term index)};
  \draw[->] (0,0) -- (0,6.5) node[above left] {Exponent};
  % Lines representing exponents
  \draw[thick,blue] (0,6) -- (6,0) node[right,blue] {$a^{\,n-r}$ (exponent of $a$)};
  \draw[thick,red] (0,0) -- (6,6) node[right,red] {$b^{\,r}$ (exponent of $b$)};
  % Tick marks on r-axis
  \foreach \x in {0,1,2,3,4,5,6} {
    \draw (\x,0.1) -- (\x,-0.1) node[below] {$\x$};
  }
  % Tick marks on exponent axis
  \foreach \y in {0,1,2,3,4,5,6} {
    \draw (0.1,\y) -- (-0.1,\y) node[left] {$\y$};
  }
  % Annotation for n
  \node at (6.3,6.3) {$n$};
\end{tikzpicture}
```
