# TikZ Diagrams for CCEA AS1 Pure Mathematics Logarithms and Exponentials

**Pack ID:** AS1LogarithmsAndExponentials

These diagrams use standard TikZ. For compiling in LaTeX, include:

```latex
\\usepackage{tikz}
\\usetikzlibrary{arrows.meta}
```

## AS1LogarithmsAndExponentialsQ004TikZ-001: Mark scheme sketch of $y=3^x$ and $y=3^{x+2}$

**Source:** Mark Scheme PDF p.4  
**Related question:** Question 4  
**Used in placeholder:** `[VISUAL REFERENCE: AS1LogarithmsAndExponentialsQ004TikZ-001 | ...]`  
**Purpose:** Shows the two exponential curves required by the official solution.

### Creation Notes

TikZ is used because this is a formal coordinate graph sketch. The diagram marks the relative shift, the $y$-intercepts 1 and 9, and the point $x=-2$ where $3^{x+2}=1$.

```latex
\begin{tikzpicture}[scale=0.8, >=Stealth]
  \draw[->] (-3.2,0) -- (3.2,0) node[right] {$x$};
  \draw[->] (0,-0.3) -- (0,5.5) node[above] {$y$};
  \draw[domain=-3:1.78, smooth, samples=80] plot ({\x}, {0.45*exp(ln(3)*\x)}) node[right] {$y=3^x$};
  \draw[domain=-3:0.1, smooth, samples=80] plot ({\x}, {0.45*exp(ln(3)*(\x+2))}) node[above right] {$y=3^{x+2}$};
  \draw (-0.08,0.45) -- (0.08,0.45) node[right] {$1$};
  \draw (-0.08,4.05) -- (0.08,4.05) node[right] {$9$};
  \draw (-2,0.08) -- (-2,-0.08) node[below] {$-2$};
\end{tikzpicture}
```

## AS1LogarithmsAndExponentialsQ006TikZ-001: Fig. 3 sketch of $y=4^x-3$

**Source:** Questions PDF p.4  
**Related question:** Question 6  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1LogarithmsAndExponentialsQ006TikZ-001 | ...]`  
**Purpose:** Recreates the supplied figure showing the graph crossing the axes at $A$ and $B$.

### Creation Notes

The curve is drawn to match the question diagram, with intercepts labelled $A$ and $B$. The exact positions are governed by $A=(\log_4 3,0)$ and $B=(0,-2)$.

```latex
\begin{tikzpicture}[scale=0.9, >=Stealth]
  \draw[->] (-2.5,0) -- (3,0) node[right] {$x$};
  \draw[->] (0,-3.4) -- (0,3.5) node[above] {$y$};
  \draw[domain=-2.2:1.45, smooth, samples=100] plot ({\x}, {exp(ln(4)*\x)-3});
  \fill (0.792,0) circle (1.5pt) node[below right] {$A$};
  \fill (0,-2) circle (1.5pt) node[below right] {$B$};
  \node at (1.4,-3.0) {Fig. 3};
\end{tikzpicture}
```

## AS1LogarithmsAndExponentialsQ010TikZ-001: Mark scheme sketch of $y=4^{-x}$

**Source:** Mark Scheme PDF p.8  
**Related question:** Question 10  
**Used in placeholder:** `[VISUAL REFERENCE: AS1LogarithmsAndExponentialsQ010TikZ-001 | ...]`  
**Purpose:** Shows the decreasing exponential graph required in the official solution.

### Creation Notes

The graph passes through $(0,1)$, decreases as $x$ increases, and has horizontal asymptote $y=0$.

```latex
\begin{tikzpicture}[scale=0.9, >=Stealth]
  \draw[->] (-3,0) -- (4,0) node[right] {$x$};
  \draw[->] (0,-0.3) -- (0,4.2) node[above] {$y$};
  \draw[domain=-1.2:3.4, smooth, samples=100] plot ({\x}, {exp(-ln(4)*\x)});
  \fill (0,1) circle (1.5pt) node[right] {$1$};
  \node[below left] at (0,0) {$0$};
\end{tikzpicture}
```

## AS1LogarithmsAndExponentialsQ013TikZ-001: Mark scheme sketch of $y=2^x-5$

**Source:** Mark Scheme PDF p.10  
**Related question:** Question 13  
**Used in placeholder:** `[VISUAL REFERENCE: AS1LogarithmsAndExponentialsQ013TikZ-001 | ...]`  
**Purpose:** Shows the exponential sketch and the intercepts $(0,-4)$ and $(\log_2 5,0)$.

### Creation Notes

The diagram includes the two intercepts that the mark scheme explicitly awards.

```latex
\begin{tikzpicture}[scale=0.8, >=Stealth]
  \draw[->] (-3,0) -- (5,0) node[right] {$x$};
  \draw[->] (0,-5.6) -- (0,4.2) node[above] {$y$};
  \draw[domain=-3:3.1, smooth, samples=100] plot ({\x}, {exp(ln(2)*\x)-5});
  \draw[dashed] (-3,-5) -- (4.5,-5) node[right] {$y=-5$};
  \fill (0,-4) circle (1.5pt) node[left] {$(0,-4)$};
  \fill (2.322,0) circle (1.5pt) node[below] {$2.32$};
\end{tikzpicture}
```

## AS1LogarithmsAndExponentialsQ021TikZ-001: Fig. 1 graph of $y=\ln x$

**Source:** Questions PDF p.9  
**Related question:** Question 21  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1LogarithmsAndExponentialsQ021TikZ-001 | ...]`  
**Purpose:** Recreates the supplied Fig. 1 showing $y=\ln x$ and point $A$.

### Creation Notes

The graph shows the logarithmic curve, the vertical asymptote at the $y$-axis, and the point $A=(1,0)$.

```latex
\begin{tikzpicture}[scale=0.9, >=Stealth]
  \draw[->] (-1.2,0) -- (4.2,0) node[right] {$x$};
  \draw[->] (0,-2.4) -- (0,2.4) node[above] {$y$};
  \draw[domain=0.08:4, smooth, samples=100] plot ({\x}, {ln(\x)}) node[right] {$y=\ln x$};
  \fill (1,0) circle (1.5pt) node[below right] {$A$};
  \node at (2,-2.0) {Fig. 1};
\end{tikzpicture}
```

## AS1LogarithmsAndExponentialsQ021TikZ-002: Mark scheme sketch of $y=\ln(x+2)$

**Source:** Mark Scheme PDF p.16  
**Related question:** Question 21  
**Used in placeholder:** `[VISUAL REFERENCE: AS1LogarithmsAndExponentialsQ021TikZ-002 | ...]`  
**Purpose:** Shows the translated logarithmic graph, the asymptote $x=-2$, and $A'=(-1,0)$.

### Creation Notes

The graph is a left shift of $y=\ln x$ by 2 units.

```latex
\begin{tikzpicture}[scale=0.9, >=Stealth]
  \draw[->] (-3.2,0) -- (3.8,0) node[right] {$x$};
  \draw[->] (0,-2.5) -- (0,2.8) node[above] {$y$};
  \draw[dashed] (-2,-2.4) -- (-2,2.5) node[above] {$x=-2$};
  \draw[domain=-1.92:3.5, smooth, samples=100] plot ({\x}, {ln(\x+2)}) node[right] {$y=\ln(x+2)$};
  \fill (-1,0) circle (1.5pt) node[below right] {$A'(-1,0)$};
\end{tikzpicture}
```

## AS1LogarithmsAndExponentialsQ021TikZ-003: Mark scheme sketch of $y=\lvert\ln(x+2)\rvert$

**Source:** Mark Scheme PDF p.16  
**Related question:** Question 21  
**Used in placeholder:** `[VISUAL REFERENCE: AS1LogarithmsAndExponentialsQ021TikZ-003 | ...]`  
**Purpose:** Shows the modulus transformation of $y=\ln(x+2)$.

### Creation Notes

The negative branch of $\ln(x+2)$ is reflected in the $x$-axis, giving a minimum at $A'=(-1,0)$.

```latex
\begin{tikzpicture}[scale=0.9, >=Stealth]
  \draw[->] (-3.2,0) -- (3.8,0) node[right] {$x$};
  \draw[->] (0,-0.3) -- (0,3.0) node[above] {$y$};
  \draw[dashed] (-2,-0.2) -- (-2,2.8);
  \draw[domain=-1.92:-1, smooth, samples=80] plot ({\x}, {-ln(\x+2)});
  \draw[domain=-1:3.5, smooth, samples=100] plot ({\x}, {ln(\x+2)}) node[right] {$y=\lvert\ln(x+2)\rvert$};
  \fill (-1,0) circle (1.5pt) node[below] {$A'(-1,0)$};
\end{tikzpicture}
```
