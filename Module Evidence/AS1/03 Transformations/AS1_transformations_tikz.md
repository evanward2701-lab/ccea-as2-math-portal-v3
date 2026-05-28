# TikZ Diagrams for AS1 Transformations of Trigonometric Graphs

## TIKZ-001: Parent sine and cosine graphs
Source: lesson PDF p.1  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: TIKZ-001 | Source: lesson PDF p.1 | Insert from AS1_transformations_tikz.md | Purpose: graphs of y=\sin x and y=\cos x]`  
Purpose: Show the parent graphs of \(\sin x\) and \(\cos x\) over one period (0° to 360°) with key intercepts and maximum/minimum points.

```latex
\begin{tikzpicture}
\begin{axis}[
    width=12cm,
    height=4cm,
    domain=0:360,
    samples=200,
    xtick={0,90,180,270,360},
    xticklabels={$0^\circ$,$90^\circ$,$180^\circ$,$270^\circ$,$360^\circ$},
    ytick={-1,0,1},
    ymin=-1.2,ymax=1.2,
    xlabel={$x$ (degrees)},
    ylabel={$y$},
    legend style={at={(0.5,-0.25)},anchor=north,legend columns=2},
    grid=both,
    minor tick num=1
]
    \addplot [blue, thick] {sin(x)};
    \addlegendentry{$y=\sin x$}
    \addplot [red, thick] {cos(x)};
    \addlegendentry{$y=\cos x$}
\end{axis}
\end{tikzpicture}
```

## TIKZ-002: Vertical stretch example \(y = 4\sin x\)
Source: lesson PDF p.3  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: TIKZ-002 | Source: lesson PDF p.3 | Insert from AS1_transformations_tikz.md | Purpose: compare parent \sin x with vertical stretch]`  
Purpose: Compare the parent function \(y = \sin x\) with the vertically stretched function \(y = 4\sin x\).  

```latex
\begin{tikzpicture}
\begin{axis}[
    width=12cm,
    height=4cm,
    domain=0:360,
    samples=200,
    xtick={0,90,180,270,360},
    xticklabels={$0^\circ$,$90^\circ$,$180^\circ$,$270^\circ$,$360^\circ$},
    ytick={-4,-2,0,2,4},
    ymin=-4.5,ymax=4.5,
    xlabel={$x$ (degrees)},
    ylabel={$y$},
    legend style={at={(0.5,-0.25)},anchor=north,legend columns=2},
    grid=both,
    minor tick num=1
]
    \addplot [blue, thick] {sin(x)};
    \addlegendentry{$y=\sin x$}
    \addplot [orange, thick] {4*sin(x)};
    \addlegendentry{$y=4\sin x$}
\end{axis}
\end{tikzpicture}
```

## TIKZ-003: Horizontal compression \(y = \sin 2x\)
Source: lesson PDF p.4  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: TIKZ-003 | Source: lesson PDF p.4 | Insert from AS1_transformations_tikz.md | Purpose: horizontal compression example]`  
Purpose: Compare the parent function \(y=\sin x\) with \(y=\sin 2x\) to illustrate that multiplying the argument by 2 halves the period.  

```latex
\begin{tikzpicture}
\begin{axis}[
    width=12cm,
    height=4cm,
    domain=0:360,
    samples=200,
    xtick={0,90,180,270,360},
    xticklabels={$0^\circ$,$90^\circ$,$180^\circ$,$270^\circ$,$360^\circ$},
    ytick={-1,0,1},
    ymin=-1.2,ymax=1.2,
    xlabel={$x$ (degrees)},
    ylabel={$y$},
    legend style={at={(0.5,-0.25)},anchor=north,legend columns=2},
    grid=both,
    minor tick num=1
]
    \addplot [blue, thick] {sin(x)};
    \addlegendentry{$y=\sin x$}
    \addplot [purple, thick] {sin(2*x)};
    \addlegendentry{$y=\sin 2x$}
\end{axis}
\end{tikzpicture}
```

## TIKZ-004: Horizontal stretch \(y = \sin\tfrac{x}{2}\)
Source: lesson PDF p.4  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: TIKZ-004 | Source: lesson PDF p.4 | Insert from AS1_transformations_tikz.md | Purpose: horizontal stretch example]`  
Purpose: Compare the parent function \(y=\sin x\) with \(y=\sin(\tfrac{x}{2})\). Dividing the argument by 2 doubles the period from 360° to 720°.  

```latex
\begin{tikzpicture}
\begin{axis}[
    width=12cm,
    height=4cm,
    domain=0:720,
    samples=200,
    xtick={0,180,360,540,720},
    xticklabels={$0^\circ$,$180^\circ$,$360^\circ$,$540^\circ$,$720^\circ$},
    ytick={-1,0,1},
    ymin=-1.2,ymax=1.2,
    xlabel={$x$ (degrees)},
    ylabel={$y$},
    legend style={at={(0.5,-0.25)},anchor=north,legend columns=2},
    grid=both,
    minor tick num=1
]
    \addplot [blue, thick] {sin(x)};
    \addlegendentry{$y=\sin x$}
    \addplot [green!60!black, thick] {sin(x/2)};
    \addlegendentry{$y=\sin\tfrac{x}{2}$}
\end{axis}
\end{tikzpicture}
```

## TIKZ-005: Phase shift and reflection example
Source: lesson PDF p.5  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: TIKZ-005 | Source: lesson PDF p.5 | Insert from AS1_transformations_tikz.md | Purpose: phase shift and reflection example]`  
Purpose: Demonstrate that \(y=\cos(x+90^{\circ})\) is equivalent to \(-\sin x\), illustrating horizontal shift and vertical reflection.  

```latex
\begin{tikzpicture}
\begin{axis}[
    width=12cm,
    height=4cm,
    domain=0:360,
    samples=200,
    xtick={0,90,180,270,360},
    xticklabels={$0^\circ$,$90^\circ$,$180^\circ$,$270^\circ$,$360^\circ$},
    ytick={-1,0,1},
    ymin=-1.2,ymax=1.2,
    xlabel={$x$ (degrees)},
    ylabel={$y$},
    legend style={at={(0.5,-0.25)},anchor=north,legend columns=3},
    grid=both,
    minor tick num=1
]
    \addplot [red, thick] {cos(x + 90)};
    \addlegendentry{$y=\cos(x+90^\circ)$}
    \addplot [blue, thick] {-sin(x)};
    \addlegendentry{$y=-\sin x$}
    \addplot [gray, dashed] {cos(x)};
    \addlegendentry{$y=\cos x$}
\end{axis}
\end{tikzpicture}
```
