# TikZ Diagrams for AS1 Exponentials and Logarithms

These diagrams use TikZ with `pgfplots`. A typical LaTeX preamble is:

```latex
\usepackage{tikz}
\usepackage{pgfplots}
\pgfplotsset{compat=1.18}
```

## TIKZ-001: Comparing exponential bases
Source: lesson PDF p.1  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: TIKZ-001 | Source: lesson PDF p.1 | Insert from AS1_exponentials_and_logarithms_tikz.md | Purpose: compare exponential graph shapes for different bases]`  
Purpose: Shows how larger bases greater than 1 grow faster, while all graphs pass through `(0,1)` and approach the horizontal asymptote `y=0`.

```latex
\begin{tikzpicture}
\begin{axis}[
    width=11cm,
    height=7cm,
    axis lines=middle,
    xmin=-3.2, xmax=3.2,
    ymin=-0.4, ymax=9.5,
    xlabel={$x$}, ylabel={$y$},
    grid=both,
    minor tick num=1,
    legend style={at={(0.03,0.97)},anchor=north west,draw=none,fill=white},
    samples=200
]
\addplot[thick, domain=-3:3] {3^x};
\addlegendentry{$y=3^x$}
\addplot[thick, domain=-3:3] {2^x};
\addlegendentry{$y=2^x$}
\addplot[thick, domain=-3:3] {1.5^x};
\addlegendentry{$y=1.5^x$}
\addplot[dashed, domain=-3.2:3.2] {0};
\node[circle, fill, inner sep=1.5pt, label=above right:{$(0,1)$}] at (axis cs:0,1) {};
\node[anchor=west] at (axis cs:-3,0.25) {horizontal asymptote $y=0$};
\end{axis}
\end{tikzpicture}
```

---

## TIKZ-002: Comparing `e^x` with other exponentials
Source: lesson PDF p.2  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: TIKZ-002 | Source: lesson PDF p.2 | Insert from AS1_exponentials_and_logarithms_tikz.md | Purpose: compare $e^x$ with $2^x$ and $3^x$]`  
Purpose: Places `e^x` between `2^x` and `3^x` for positive `x`, because `2 < e < 3`.

```latex
\begin{tikzpicture}
\begin{axis}[
    width=11cm,
    height=7cm,
    axis lines=middle,
    xmin=-2.5, xmax=2.5,
    ymin=-0.3, ymax=8,
    xlabel={$x$}, ylabel={$y$},
    grid=both,
    legend style={at={(0.03,0.97)},anchor=north west,draw=none,fill=white},
    samples=200
]
\addplot[thick, domain=-2.5:2.5] {3^x};
\addlegendentry{$y=3^x$}
\addplot[thick, domain=-2.5:2.5] {exp(x)};
\addlegendentry{$y=e^x$}
\addplot[thick, domain=-2.5:2.5] {2^x};
\addlegendentry{$y=2^x$}
\node[circle, fill, inner sep=1.5pt, label=above left:{$(0,1)$}] at (axis cs:0,1) {};
\end{axis}
\end{tikzpicture}
```

---

## TIKZ-003: Exponential-logarithm inverse relationship
Source: lesson PDF p.3  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: TIKZ-003 | Source: lesson PDF p.3 | Insert from AS1_exponentials_and_logarithms_tikz.md | Purpose: show $y=2^x$ and $y=\log_2x$ as reflections in $y=x$]`  
Purpose: Shows that `y = log_2 x` is the reflection of `y = 2^x` in the line `y=x`.

```latex
\begin{tikzpicture}
\begin{axis}[
    width=11cm,
    height=8cm,
    axis lines=middle,
    xmin=-2.5, xmax=5,
    ymin=-2.5, ymax=5,
    xlabel={$x$}, ylabel={$y$},
    grid=both,
    legend style={at={(0.03,0.97)},anchor=north west,draw=none,fill=white},
    samples=220
]
\addplot[thick, domain=-2.2:2.25] {2^x};
\addlegendentry{$y=2^x$}
\addplot[thick, domain=0.13:5] {ln(x)/ln(2)};
\addlegendentry{$y=\log_2 x$}
\addplot[dashed, domain=-2.5:5] {x};
\addlegendentry{$y=x$}
\node[circle, fill, inner sep=1.3pt, label=above left:{$(0,1)$}] at (axis cs:0,1) {};
\node[circle, fill, inner sep=1.3pt, label=below right:{$(1,0)$}] at (axis cs:1,0) {};
\end{axis}
\end{tikzpicture}
```

---

## TIKZ-004: Graph of the natural logarithm
Source: lesson PDF p.4  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: TIKZ-004 | Source: lesson PDF p.4 | Insert from AS1_exponentials_and_logarithms_tikz.md | Purpose: graph of $y=\ln x$ with domain, range and asymptote]`  
Purpose: Shows the domain `x>0`, the vertical asymptote `x=0`, and the point `(1,0)`.

```latex
\begin{tikzpicture}
\begin{axis}[
    width=10cm,
    height=7cm,
    axis lines=middle,
    xmin=-0.6, xmax=5,
    ymin=-3, ymax=3,
    xlabel={$x$}, ylabel={$y$},
    grid=both,
    legend style={at={(0.97,0.08)},anchor=south east,draw=none,fill=white},
    samples=220
]
\addplot[thick, domain=0.05:5] {ln(x)};
\addlegendentry{$y=\ln x$}
\addplot[dashed] coordinates {(0,-3) (0,3)};
\node[anchor=west] at (axis cs:0.12,-2.45) {vertical asymptote $x=0$};
\node[circle, fill, inner sep=1.4pt, label=below right:{$(1,0)$}] at (axis cs:1,0) {};
\end{axis}
\end{tikzpicture}
```

---

## TIKZ-005: Comparing logarithmic bases
Source: lesson PDF p.8  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: TIKZ-005 | Source: lesson PDF p.8 | Insert from AS1_exponentials_and_logarithms_tikz.md | Purpose: compare logarithmic graphs for bases greater than 1 and between 0 and 1]`  
Purpose: Shows that bases greater than 1 produce increasing log graphs, while bases between 0 and 1 produce decreasing log graphs.

```latex
\begin{tikzpicture}
\begin{axis}[
    width=11cm,
    height=7cm,
    axis lines=middle,
    xmin=-0.3, xmax=6,
    ymin=-4, ymax=4,
    xlabel={$x$}, ylabel={$y$},
    grid=both,
    legend style={at={(0.98,0.98)},anchor=north east,draw=none,fill=white},
    samples=220
]
\addplot[thick, domain=0.05:6] {ln(x)/ln(3)};
\addlegendentry{$y=\log_3 x$}
\addplot[thick, domain=0.05:6] {ln(x)/ln(2)};
\addlegendentry{$y=\log_2 x$}
\addplot[thick, domain=0.05:6] {ln(x)/ln(0.5)};
\addlegendentry{$y=\log_{0.5} x$}
\addplot[dashed] coordinates {(0,-4) (0,4)};
\node[circle, fill, inner sep=1.4pt, label=above right:{$(1,0)$}] at (axis cs:1,0) {};
\node[anchor=west] at (axis cs:0.15,3.2) {$x=0$ asymptote};
\end{axis}
\end{tikzpicture}
```

---

## TIKZ-006: Corrected equation-intersection view
Source: lesson PDF p.9, corrected and reframed for CCEA AS1  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: TIKZ-006 | Source: lesson PDF p.9, corrected and reframed for CCEA AS1 | Insert from AS1_exponentials_and_logarithms_tikz.md | Purpose: show intersection idea behind exponential equations while warning that graph/numerical checks may be needed]`  
Purpose: Uses an on-spec quadratic-in-an-exponential example. The equation `e^(2x)-5e^x+6=0` can be seen as the intersection of `y=e^(2x)` and `y=5e^x-6`.

```latex
\begin{tikzpicture}
\begin{axis}[
    width=11cm,
    height=7cm,
    axis lines=middle,
    xmin=-0.3, xmax=1.45,
    ymin=-1, ymax=10,
    xlabel={$x$}, ylabel={$y$},
    grid=both,
    legend style={at={(0.03,0.97)},anchor=north west,draw=none,fill=white},
    samples=220
]
\addplot[thick, domain=-0.3:1.45] {exp(2*x)};
\addlegendentry{$y=e^{2x}$}
\addplot[thick, domain=-0.3:1.45] {5*exp(x)-6};
\addlegendentry{$y=5e^x-6$}
\node[circle, fill, inner sep=1.4pt, label=below right:{$x=\ln 2$}] at (axis cs:0.693147,4) {};
\node[circle, fill, inner sep=1.4pt, label=above left:{$x=\ln 3$}] at (axis cs:1.09861,9) {};
\end{axis}
\end{tikzpicture}
```

---

## TIKZ-007: Exponential growth and decay curves
Source: lesson PDF p.10  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: TIKZ-007 | Source: lesson PDF p.10 | Insert from AS1_exponentials_and_logarithms_tikz.md | Purpose: compare growth and decay curves for $y=Ae^{kt}$]`  
Purpose: Shows the qualitative difference between `k>0` and `k<0` in `y=Ae^(kt)`.

```latex
\begin{tikzpicture}
\begin{axis}[
    width=11cm,
    height=7cm,
    axis lines=middle,
    xmin=0, xmax=6,
    ymin=0, ymax=9,
    xlabel={$t$}, ylabel={$y$},
    grid=both,
    legend style={at={(0.03,0.97)},anchor=north west,draw=none,fill=white},
    samples=220
]
\addplot[thick, domain=0:6] {exp(0.35*x)};
\addlegendentry{$y=e^{0.35t}$ growth}
\addplot[thick, domain=0:6] {exp(-0.35*x)};
\addlegendentry{$y=e^{-0.35t}$ decay}
\node[circle, fill, inner sep=1.4pt, label=left:{$A$}] at (axis cs:0,1) {};
\end{axis}
\end{tikzpicture}
```

---

## TIKZ-008: Optional straightening with logarithms
Source: lesson PDF p.11  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: TIKZ-008 | Source: lesson PDF p.11 | Insert from AS1_exponentials_and_logarithms_tikz.md | Purpose: optional extension showing how log plots can turn some curved relationships into straight lines]`  
Purpose: Shows the enrichment idea that an exponential curve can become a straight line when plotting `ln y` against `x`.

```latex
\begin{tikzpicture}
\begin{axis}[
    name=leftplot,
    width=7cm,
    height=6cm,
    axis lines=middle,
    xmin=0, xmax=4,
    ymin=0, ymax=18,
    xlabel={$x$}, ylabel={$y$},
    grid=both,
    title={$y=2e^{0.6x}$},
    samples=160
]
\addplot[thick, domain=0:4] {2*exp(0.6*x)};
\end{axis}
\begin{axis}[
    at={(8.2cm,0)},
    width=7cm,
    height=6cm,
    axis lines=middle,
    xmin=0, xmax=4,
    ymin=0, ymax=3.2,
    xlabel={$x$}, ylabel={$\ln y$},
    grid=both,
    title={$\ln y=0.6x+\ln 2$},
    samples=160
]
\addplot[thick, domain=0:4] {0.6*x + ln(2)};
\end{axis}
\end{tikzpicture}
```
