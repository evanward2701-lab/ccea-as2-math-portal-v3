# TikZ Diagrams for CCEA AS1 Integration

**Pack ID:** `AS1Integration`

## AS1IntegrationQ002TikZ-001: Shaded regions for $y=4x^2-x^3$

**Source:** Questions PDF p.2  
**Related question:** Question 2  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1IntegrationQ002TikZ-001 | ...]`  
**Purpose:** Recreate Fig. 2 showing the positive shaded area from $x=0$ to $x=4$ and the negative shaded area from $x=4$ to $x=a$.

### Creation Notes

TikZ is used because the figure is a mathematical curve with labelled axes, intercepts and shaded areas.

```latex
\begin{tikzpicture}[scale=0.9]
  \draw[->] (-0.6,0) -- (6.0,0) node[right] {$x$};
  \draw[->] (0,-3.2) -- (0,3.0) node[above] {$y$};
  \fill[gray!25] (0,0) -- plot[domain=0:4, samples=80] (\x,{(4*\x*\x-\x*\x*\x)/8}) -- (4,0) -- cycle;
  \fill[gray!25] (4,0) -- plot[domain=4:5.33, samples=60] (\x,{(4*\x*\x-\x*\x*\x)/8}) -- (5.33,0) -- cycle;
  \draw[domain=0:5.6, samples=120, smooth, thick] plot (\x,{(4*\x*\x-\x*\x*\x)/8});
  \draw[dashed] (5.33,0) -- (5.33,{(4*5.33*5.33-5.33*5.33*5.33)/8});
  \node[below] at (0,0) {$0$};
  \node[below] at (4,0) {$4$};
  \node[below] at (5.33,0) {$a$};
  \node[above right] at (2.1,2.2) {$y=4x^2-x^3$};
  \node[below] at (2.6,-3.0) {Fig. 2};
\end{tikzpicture}
```

## AS1IntegrationQ003TikZ-001: Area between two parabolas

**Source:** Questions PDF p.3  
**Related question:** Question 3  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1IntegrationQ003TikZ-001 | ...]`  
**Purpose:** Recreate Fig. 4 showing the curves $y=x^2-8x+16$ and $y=4+6x-x^2$ with intersection points $(1,9)$ and $(6,4)$.

### Creation Notes

TikZ gives accurate plotted curves and labelled intersection points for the area-between-curves question.

```latex
\begin{tikzpicture}[scale=0.72]
  \draw[->] (-0.3,0) -- (7.5,0) node[right] {$x$};
  \draw[->] (0,-0.3) -- (0,4.0) node[above] {$y$};
  \fill[gray!25] plot[domain=1:6, samples=90] (\x,{(4+6*\x-\x*\x)/4}) -- plot[domain=6:1, samples=90] (\x,{(\x*\x-8*\x+16)/4}) -- cycle;
  \draw[domain=-0.2:7, samples=100, smooth, thick] plot (\x,{(\x*\x-8*\x+16)/4});
  \draw[domain=0.2:6.8, samples=100, smooth, thick] plot (\x,{(4+6*\x-\x*\x)/4});
  \draw[dashed] (1,0) -- (1,{9/4});
  \draw[dashed] (6,0) -- (6,{4/4});
  \node[below] at (1,0) {$1$};
  \node[below] at (6,0) {$6$};
  \node[left] at (0,{9/4}) {$9$};
  \node[left] at (0,{4/4}) {$4$};
  \node[above] at (2.0,3.2) {$y=4+6x-x^2$};
  \node[right] at (4.7,1.0) {$y=x^2-8x+16$};
  \node[below] at (3.7,-0.4) {Fig. 4};
\end{tikzpicture}
```

## AS1IntegrationQ004TikZ-001: Logo area under a cubic curve

**Source:** Questions PDF p.4  
**Related question:** Question 4  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1IntegrationQ004TikZ-001 | ...]`  
**Purpose:** Recreate Fig. 2 showing the shaded logo region under $y=2x^3-8x^2+7x+3$ between $x=0$ and $x=3$.

### Creation Notes

TikZ is suitable because the area is represented by a cubic curve and vertical/x-axis boundaries.

```latex
\begin{tikzpicture}[scale=1.0]
  \draw[->] (-0.4,0) -- (3.8,0) node[right] {$x$};
  \draw[->] (0,-0.3) -- (0,3.8) node[above] {$y$};
  \fill[gray!25] (0,0) -- plot[domain=0:3, samples=100] (\x,{(2*\x*\x*\x-8*\x*\x+7*\x+3)/2}) -- (3,0) -- cycle;
  \draw[domain=0:3, samples=120, smooth, thick] plot (\x,{(2*\x*\x*\x-8*\x*\x+7*\x+3)/2});
  \draw[dashed] (0,3) -- (3,3) -- (3,0);
  \node[left] at (0,3) {$6$};
  \node[below] at (0,0) {$O$};
  \node[below] at (3,0) {$3$};
  \node[below] at (1.7,-0.5) {Fig. 2};
\end{tikzpicture}
```

## AS1IntegrationQ005TikZ-001: Area bounded by $y=8-x^{3/2}$ and the axes

**Source:** Questions PDF p.5  
**Related question:** Question 5  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1IntegrationQ005TikZ-001 | ...]`  
**Purpose:** Recreate Fig. 2 showing the curve $y=8-x^{3/2}$ and the area bounded by the coordinate axes.

### Creation Notes

The curve and its intercepts are the key mathematical features; TikZ can show these cleanly.

```latex
\begin{tikzpicture}[scale=0.9]
  \draw[->] (-0.4,0) -- (4.8,0) node[right] {$x$};
  \draw[->] (0,-0.5) -- (0,4.8) node[above] {$y$};
  \fill[gray!25] (0,0) -- (0,4) -- plot[domain=0:4, samples=120] (\x,{(8-pow(\x,1.5))/2}) -- (4,0) -- cycle;
  \draw[domain=0:4.2, samples=120, smooth, thick] plot (\x,{(8-pow(\x,1.5))/2});
  \node[left] at (0,4) {$8$};
  \node[below] at (4,0) {$4$};
  \node[below] at (2.1,-0.7) {Fig. 2};
\end{tikzpicture}
```

## AS1IntegrationQ006TikZ-001: Region bounded by $y=1/x^2$, the y-axis and $y=1,4$

**Source:** Questions PDF p.5  
**Related question:** Question 6  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1IntegrationQ006TikZ-001 | ...]`  
**Purpose:** Recreate Fig. 3 showing the reciprocal-square graph and the enclosed region.

### Creation Notes

TikZ is used to show the curve and the horizontal bounds $y=1$ and $y=4$.

```latex
\begin{tikzpicture}[scale=1.0]
  \draw[->] (-0.2,0) -- (3.4,0) node[right] {$x$};
  \draw[->] (0,-0.2) -- (0,4.8) node[above] {$y$};
  \fill[gray!25] (0,1) -- (0,4) -- plot[domain=4:1, variable=\t, samples=80] ({1/sqrt(\t)},{\t}) -- cycle;
  \draw[domain=0.45:3.0, samples=120, smooth, thick] plot (\x,{1/(\x*\x)});
  \draw[dashed] (0,1) -- (1,1);
  \draw[dashed] (0,4) -- (0.5,4);
  \node[left] at (0,1) {$1$};
  \node[left] at (0,4) {$4$};
  \node[below] at (1.7,-0.5) {Fig. 3};
\end{tikzpicture}
```

## AS1IntegrationQ008TikZ-001: Composite shaded region under a line and a curve

**Source:** Questions PDF p.6  
**Related question:** Question 8  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1IntegrationQ008TikZ-001 | ...]`  
**Purpose:** Recreate Fig. 1 showing $y=x+4$, $y=x^2-4x+4$ and the shaded area.

### Creation Notes

The figure supports the solution split into a triangle and an integral under the curve.

```latex
\begin{tikzpicture}[scale=0.75]
  \draw[->] (-5,0) -- (4.5,0) node[right] {$x$};
  \draw[->] (0,-1.2) -- (0,7.0) node[above] {$y$};
  \fill[gray!25] (-4,0) -- plot[domain=-4:0, samples=40] (\x,{\x+4}) -- (0,0) -- cycle;
  \fill[gray!25] (0,0) -- plot[domain=0:2, samples=80] (\x,{\x*\x-4*\x+4}) -- (2,0) -- cycle;
  \draw[domain=-4.5:2.2, samples=80, thick] plot (\x,{\x+4}) node[right] {$y=x+4$};
  \draw[domain=-1.0:4.0, samples=120, smooth, thick] plot (\x,{\x*\x-4*\x+4}) node[right] {$y=x^2-4x+4$};
  \node[left] at (0,4) {$(0,4)$};
  \node[below] at (-4,0) {$-4$};
  \node[below] at (2,0) {$2$};
  \node[below] at (0,0) {$0$};
  \node[below] at (0,-1.1) {Fig. 1};
\end{tikzpicture}
```

## AS1IntegrationQ010TikZ-001: Rudder region for $y=\sqrt[3]{x-8}$

**Source:** Questions PDF p.7  
**Related question:** Question 10  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1IntegrationQ010TikZ-001 | ...]`  
**Purpose:** Recreate Fig. 3 showing the region bounded by $x=0$, $y=1$ and $y=\sqrt[3]{x-8}$.

### Creation Notes

The graph is easier to draw as $x=y^3+8$, matching the mark scheme method.

```latex
\begin{tikzpicture}[scale=0.72]
  \draw[->] (-0.5,0) -- (10,0) node[right] {$x$};
  \draw[->] (0,-2.5) -- (0,2.0) node[above] {$y$};
  \fill[gray!25] (0,-2) -- (0,1) -- plot[domain=1:-2, variable=\t, samples=100] ({\t*\t*\t+8},{\t}) -- cycle;
  \draw[domain=-2:1, variable=\t, samples=120, smooth, thick] plot ({\t*\t*\t+8},{\t});
  \draw[dashed] (0,1) -- (9,1);
  \node[left] at (0,1) {$1$};
  \node[left] at (0,-2) {$-2$};
  \node[below] at (8,0) {$8$};
  \node[below] at (9,0) {$9$};
  \node[right] at (6.7,1.35) {$y=\sqrt[3]{x-8}$};
  \node[below] at (4.7,-2.7) {Fig. 3};
\end{tikzpicture}
```

## AS1IntegrationQ012TikZ-001: Curves $y=x^2$ and $y=8\sqrt{x}$ meeting at A

**Source:** Questions PDF p.8  
**Related question:** Question 12  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1IntegrationQ012TikZ-001 | ...]`  
**Purpose:** Recreate Fig. 5 showing the two curves and the point A.

### Creation Notes

TikZ allows both curves to be plotted precisely and labelled.

```latex
\begin{tikzpicture}[scale=0.85]
  \draw[->] (-0.3,0) -- (5.5,0) node[right] {$x$};
  \draw[->] (0,-0.3) -- (0,5.0) node[above] {$y$};
  \draw[domain=0:4.6, samples=120, smooth, thick] plot (\x,{\x*\x/4}) node[right] {$y=x^2$};
  \draw[domain=0:5.0, samples=120, smooth, thick] plot (\x,{2*sqrt(\x)}) node[right] {$y=8\sqrt{x}$};
  \fill (4,4) circle (2pt);
  \node[above] at (4,4) {$A$};
  \node[below] at (2.8,-0.5) {Fig. 5};
\end{tikzpicture}
```

## AS1IntegrationQ012TikZ-002: Reflected logo area between $y=x^2$ and $y=8\sqrt{x}$

**Source:** Questions PDF p.8  
**Related question:** Question 12  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1IntegrationQ012TikZ-002 | ...]`  
**Purpose:** Recreate Fig. 6 showing the lobe between the two curves reflected in the y-axis.

### Creation Notes

The diagram shows why the integral for one side is doubled.

```latex
\begin{tikzpicture}[scale=0.8]
  \draw[->] (-5.2,0) -- (5.2,0) node[right] {$x$};
  \draw[->] (0,-0.3) -- (0,4.8) node[above] {$y$};
  % right lobe
  \fill[gray!25] plot[domain=0:4, samples=100] (\x,{2*sqrt(\x)}) -- plot[domain=4:0, samples=100] (\x,{\x*\x/4}) -- cycle;
  % left lobe (reflection)
  \fill[gray!25] plot[domain=0:4, samples=100] ({-\x},{2*sqrt(\x)}) -- plot[domain=4:0, samples=100] ({-\x},{\x*\x/4}) -- cycle;
  \draw[domain=0:4, samples=100, smooth, thick] plot (\x,{2*sqrt(\x)});
  \draw[domain=0:4, samples=100, smooth, thick] plot (\x,{\x*\x/4});
  \draw[domain=0:4, samples=100, smooth, thick] plot ({-\x},{2*sqrt(\x)});
  \draw[domain=0:4, samples=100, smooth, thick] plot ({-\x},{\x*\x/4});
  \node[below] at (0,-0.5) {Fig. 6};
\end{tikzpicture}
```

## AS1IntegrationQ015TikZ-001: Area under $y=x^{1/3}+4x$ between $x=1$ and $x=8$

**Source:** Questions PDF p.9  
**Related question:** Question 15  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1IntegrationQ015TikZ-001 | ...]`  
**Purpose:** Recreate Fig. 1 and indicate the region bounded by the curve, $x=1$, $x=8$ and the x-axis.

### Creation Notes

The original figure is a sketch; this version adds shading for the requested area while preserving the mathematical meaning.

```latex
\begin{tikzpicture}[scale=0.7]
  \draw[->] (-1.5,0) -- (9,0) node[right] {$x$};
  \draw[->] (0,-1.2) -- (0,6.5) node[above] {$y$};
  \fill[gray!25] (1,0) -- plot[domain=1:8, samples=100] (\x,{0.15*(pow(\x,1/3)+4*\x)}) -- (8,0) -- cycle;
  \draw[domain=0:8.5, samples=120, smooth, thick] plot (\x,{0.15*(pow(\x,1/3)+4*\x)});
  \draw[dashed] (1,0) -- (1,{0.15*(1+4)});
  \draw[dashed] (8,0) -- (8,{0.15*(2+32)});
  \node[below] at (1,0) {$1$};
  \node[below] at (8,0) {$8$};
  \node[right] at (3.2,3.2) {$y=x^{1/3}+4x$};
  \node[below] at (4,-1.0) {Fig. 1};
\end{tikzpicture}
```

## AS1IntegrationQ017TikZ-001: AI-proposed sketch for $y=8$ and $y=6x-x^2$

**Source:** AI-proposed visual support, not present in questions PDF.  
**Related question:** Question 17  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1IntegrationQ017TikZ-001 | ...]`  
**Purpose:** Provide a clear visual support sketch for the area bounded by the line and curve.

### Creation Notes

The original question did not include a diagram. This sketch helps students identify that the curve lies above the line between $x=2$ and $x=4$.

```latex
\begin{tikzpicture}[scale=0.8]
  \draw[->] (-0.5,0) -- (6.5,0) node[right] {$x$};
  \draw[->] (0,-0.5) -- (0,4.5) node[above] {$y$};
  \fill[gray!25] (2,{8/3}) -- plot[domain=2:4, samples=80] (\x,{(6*\x-\x*\x)/3}) -- (4,{8/3}) -- cycle;
  \draw[domain=0:6, samples=100, smooth, thick] plot (\x,{(6*\x-\x*\x)/3}) node[right] {$y=6x-x^2$};
  \draw[thick] (0,{8/3}) -- (6,{8/3}) node[right] {$y=8$};
  \draw[dashed] (2,0) -- (2,{8/3});
  \draw[dashed] (4,0) -- (4,{8/3});
  \node[below] at (2,0) {$2$};
  \node[below] at (4,0) {$4$};
\end{tikzpicture}
```

## AS1IntegrationQ018TikZ-001: Enclosed area between two parabolas

**Source:** Questions PDF p.10  
**Related question:** Question 18  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1IntegrationQ018TikZ-001 | ...]`  
**Purpose:** Recreate Fig. 1 showing $y=x^2-5x+8$ and $y=-x^2+5x-4$ with the enclosed lens-shaped region.

### Creation Notes

TikZ is used to plot both parabolas and shade the enclosed area between $x=2$ and $x=3$.

```latex
\begin{tikzpicture}[scale=1.0]
  \draw[->] (-0.2,0) -- (4.8,0) node[right] {$x$};
  \draw[->] (0,-1.0) -- (0,4.0) node[above] {$y$};
  \fill[gray!25] plot[domain=2:3, samples=80] (\x,{-\x*\x+5*\x-4}) -- plot[domain=3:2, samples=80] (\x,{\x*\x-5*\x+8}) -- cycle;
  \draw[domain=0.7:4.2, samples=120, smooth, thick] plot (\x,{\x*\x-5*\x+8}) node[right] {$y=x^2-5x+8$};
  \draw[domain=0.8:4.1, samples=120, smooth, thick] plot (\x,{-\x*\x+5*\x-4}) node[right] {$y=-x^2+5x-4$};
  \fill (2,2) circle (2pt) node[left] {$(2,2)$};
  \fill (3,2) circle (2pt) node[right] {$(3,2)$};
  \node[below] at (2.3,-0.6) {Fig. 1};
\end{tikzpicture}
```

## AS1IntegrationQ019TikZ-001: Shaded area for $x=y^2-5y+4$

**Source:** Questions PDF p.11  
**Related question:** Question 19  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1IntegrationQ019TikZ-001 | ...]`  
**Purpose:** Recreate Fig. 2 showing the curve $x=y^2-5y+4$ and the shaded area between the curve and the y-axis for $1\le y\le4$.

### Creation Notes

The curve is represented as $x$ in terms of $y$, which matches the official solution method.

```latex
\begin{tikzpicture}[scale=1.0]
  \draw[->] (-3.0,0) -- (2.5,0) node[right] {$x$};
  \draw[->] (0,-0.5) -- (0,5.0) node[above] {$y$};
  \fill[gray!25] (0,1) -- (0,4) -- plot[domain=4:1, variable=\t, samples=100] ({\t*\t-5*\t+4},{\t}) -- cycle;
  \draw[domain=0:5, variable=\t, samples=120, smooth, thick] plot ({\t*\t-5*\t+4},{\t});
  \node[left] at (0,1) {$1$};
  \node[left] at (0,4) {$4$};
  \node[right] at (0.6,4.4) {$x=y^2-5y+4$};
  \node[below] at (0,0) {$0$};
  \node[below] at (-1.2,-0.6) {Fig. 2};
\end{tikzpicture}
```
