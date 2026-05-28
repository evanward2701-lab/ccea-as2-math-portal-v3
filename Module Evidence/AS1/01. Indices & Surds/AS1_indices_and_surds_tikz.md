# TikZ Diagrams for AS1 Indices and Surds

## TIKZ-001: Graph of $y=x^2$, $y=\sqrt{x}$ and $y=x^{-1}$
Source: AI-proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: TIKZ-001 | ...]`  
Purpose: to visually compare functions with positive, fractional and negative exponents on the same set of axes.  This graph helps students understand how the sign and magnitude of an exponent affect the shape and behaviour of a function.

```latex
% This diagram uses PGFPlots to draw three curves on the same axes.  It requires \usepackage{pgfplots} in the preamble.
\begin{tikzpicture}
  \begin{axis}[
    width=10cm, height=7cm,
    domain=0.1:4,
    samples=200,
    axis lines=middle,
    xlabel={$x$}, ylabel={$y$},
    xmin=0, xmax=4,
    ymin=0, ymax=5,
    legend style={at={(0.97,0.97)}, anchor=north east}
  ]
    \addplot[blue, thick] {x^2};
    \addlegendentry{$y = x^2$}
    \addplot[red, thick] {sqrt(x)};
    \addlegendentry{$y = \sqrt{x}$}
    \addplot[green!60!black, thick] {1/x};
    \addlegendentry{$y = x^{-1}$}
  \end{axis}
\end{tikzpicture}
```

In this plot, the blue curve ($y=x^2$) represents a positive integer exponent, the red curve ($y=\sqrt{x}$) represents a fractional exponent of one‑half, and the green curve ($y=x^{-1}$) represents a negative exponent.  The common axis system makes it easy to compare their growth and decay: quadratic growth accelerates rapidly, the square root grows slowly, and the reciprocal decreases as $x$ increases.