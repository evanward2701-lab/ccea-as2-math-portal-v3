# TikZ Diagrams for AS1 Integration Basics

## TIKZ-001: Family of antiderivatives differing by the constant \(C\)
Source: AI‑proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: TIKZ-001 | ...]`  
Purpose: Illustrate that integrating a function produces a family of curves differing only by a constant of integration \(C\).  The example uses \(f'(x)=x^2\), whose antiderivatives are \(F(x)=\tfrac{1}{3}x^3 + C\).

```latex
\begin{tikzpicture}[scale=0.8]
  % Axes
  \draw[->] (-3,0) -- (3.5,0) node[below] {$x$};
  \draw[->] (0,-1) -- (0,4.5) node[left] {$y$};
  % First antiderivative C=0
  \draw[domain=-2:2, smooth, variable=\x, blue, thick] plot (\x, {1/3*\x*\x*\x});
  \node[blue] at (2,1.3) {$C=0$};
  % Second antiderivative C=2
  \draw[domain=-2:2, smooth, variable=\x, red, thick] plot (\x, {1/3*\x*\x*\x + 2});
  \node[red] at (-2.2,3.2) {$C=2$};
  % Third antiderivative C=-1
  \draw[domain=-2:2, smooth, variable=\x, dashed, purple] plot (\x, {1/3*\x*\x*\x - 1});
  \node[purple] at (2.2,-0.8) {$C=-1$};
  % Annotation
  \node[align=left] at (4.1,2.7) {\small $\displaystyle F(x)=\frac{1}{3}x^3 + C$\\ $\;\,f'(x)=x^2$};
  \draw[->] (3.8,2.3) -- (2.4,1.2);
\end{tikzpicture}
```

## TIKZ-002: Area under a curve between \(x=a\) and \(x=b\)
Source: AI‑proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: TIKZ-002 | ...]`  
Purpose: Show the geometric interpretation of a definite integral as the signed area under a curve between two limits.  The example uses \(f(x)=\tfrac{x^2}{4}+1\) with limits \(a=1\) and \(b=3\).

```latex
\begin{tikzpicture}[scale=1.0]
  % Axes
  \draw[->] (0,0) -- (4.5,0) node[below] {$x$};
  \draw[->] (0,0) -- (0,3) node[left] {$y$};
  % Function curve f(x) = x^2/4 + 1
  \draw[domain=0:4, smooth, variable=\x, blue, thick] plot (\x, {\x*\x/4 + 1});
  % Shaded area between x=1 and x=3
  \begin{scope}
    \fill[cyan!30] (1,0) -- plot[domain=1:3, smooth] (\x, {\x*\x/4 + 1}) -- (3,0) -- cycle;
  \end{scope}
  % Draw the curve again over the shaded region for clarity
  \draw[domain=1:3, smooth, variable=\x, blue, thick] plot (\x, {\x*\x/4 + 1});
  % Mark the limits a and b on the x-axis
  \draw (1,0) node[below] {$a$} -- (1,0.05);
  \draw (3,0) node[below] {$b$} -- (3,0.05);
  % Dotted vertical lines from the curve to the x-axis
  \draw[dashed] (1, {1*1/4 + 1}) -- (1,0);
  \draw[dashed] (3, {3*3/4 + 1}) -- (3,0);
  % Annotation
  \node at (2,2.4) {$y = \tfrac{x^2}{4} + 1$};
  \node[align=left] at (4.7,1.2) {\small $\displaystyle \int_{a}^{b} f(x)\,\mathrm{d}x$\\$= F(b)-F(a)$};
  \draw[->] (4.5,1.3) -- (3.3,1.8);
\end{tikzpicture}
```
