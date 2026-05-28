# TikZ Diagrams for AS1 trigonometry

This file contains code for the TikZ diagrams used in the trigonometry lesson.  Each diagram is labelled with an identifier that matches the placeholder in the main lesson.  To compile these diagrams in a LaTeX document, ensure you include `\usepackage{tikz}` (and `\usepackage{pgfplots}` where indicated).  The diagrams have been simplified for clarity and scaled appropriately.

## TIKZ-001: Right‑angled triangle definitions
Source: TRIGONOMETRY.pdf p. 1  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: TIKZ‑001 | Source: lesson PDF p.1 | Insert from AS1_trigonometry_tikz.md | Purpose: illustrate the SOH CAH TOA definitions]`  
Purpose: This diagram labels a right‑angled triangle with the hypotenuse, adjacent and opposite sides relative to angle \(\theta\), and marks \(\theta\) at the base.  It reinforces the definitions \(\sin\theta = \frac{\text{opposite}}{\text{hypotenuse}}\), \(\cos\theta = \frac{\text{adjacent}}{\text{hypotenuse}}\) and \(\tan\theta = \frac{\text{opposite}}{\text{adjacent}}\).

```latex
\begin{tikzpicture}[scale=0.8]
% vertices of the right‑angled triangle
\coordinate (A) at (0,0);
\coordinate (C) at (4,0);
\coordinate (B) at (4,3);
% draw triangle
\draw[thick] (A)--(C)--(B)--cycle;
% right angle symbol at C
\draw (C)+(0.3,0) -- ++(0,0.3) -- ++(-0.3,0);
% side labels
\node at (2,0.3) {adjacent};
\node[rotate=90] at (4.3,1.5) {opposite};
\node[rotate= -35] at (2,1.7) {hypotenuse};
% vertex labels
\node[below left] at (A) {$A$};
\node[below right] at (C) {$C$};
\node[above right] at (B) {$B$};
% angle theta at A
\draw[->,>=latex] (A)+(0.8,0) arc (0:36.87:0.8);
\node at (0.6,0.2) {$\theta$};
\end{tikzpicture}
```

---

## TIKZ-002: Special triangles for exact values
Source: TRIGONOMETRY.pdf p. 3  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: TIKZ‑002 | Source: lesson PDF p.3 | Insert from AS1_trigonometry_tikz.md | Purpose: illustrate the 30°–60°–90° and 45°–45°–90° triangles]`  
Purpose: Two right‑angled triangles are drawn side by side.  The first is a 30°–60°–90° triangle with sides in the ratio \(1:\sqrt{3}:2\).  The second is a 45°–45°–90° triangle with sides in the ratio \(1:1:\sqrt{2}\).  The diagrams show the angles and side lengths so students can read off exact values of the trigonometric functions.

```latex
\begin{tikzpicture}[scale=1]
% 30°–60°–90° triangle
\begin{scope}
  \coordinate (B) at (0,0);
  \coordinate (A) at (1.732,0); % \sqrt{3} \approx 1.732
  \coordinate (C) at (0,1);
  \draw[thick] (B)--(A)--(C)--cycle;
  % right angle at B
  \draw (B)+(0.15,0) -- ++(0,0.15) -- ++(-0.15,0);
  % side labels
  \node[below] at (0.866,-0.15) {$\sqrt{3}$};
  \node[left] at (-0.15,0.5) {$1$};
  \node at (0.9,0.65) {$2$};
  % angle labels
  \draw (A)+(-0.35,0) arc (180:150:0.35);
  \node at (1.45,0.18) {$30^{\circ}$};
  \draw (C)+(0,-0.35) arc (-90:-30:0.35);
  \node at (0.22,0.78) {$60^{\circ}$};
\end{scope}
% 45°–45°–90° triangle shifted to the right
\begin{scope}[xshift=4cm]
  \coordinate (B2) at (0,0);
  \coordinate (A2) at (1,0);
  \coordinate (C2) at (0,1);
  \draw[thick] (B2)--(A2)--(C2)--cycle;
  % right angle at B2
  \draw (B2)+(0.15,0) -- ++(0,0.15) -- ++(-0.15,0);
  % side labels
  \node[below] at (0.5,-0.15) {$1$};
  \node[left] at (-0.15,0.5) {$1$};
  \node at (0.7,0.65) {$\sqrt{2}$};
  % angle labels
  \draw (A2)+(-0.35,0) arc (180:135:0.35);
  \node at (0.8,0.18) {$45^{\circ}$};
  \draw (C2)+(0,-0.35) arc (-90:-135:0.35);
  \node at (0.22,0.78) {$45^{\circ}$};
\end{scope}
\end{tikzpicture}
```

---

## TIKZ-003: Unit circle and CAST diagram
Source: TRIGONOMETRY.pdf p. 4  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: TIKZ‑003 | Source: lesson PDF p.4 | Insert from AS1_trigonometry_tikz.md | Purpose: illustrate the unit circle, CAST rule and reference angle]`  
Purpose: This diagram shows the unit circle with axes, quadrants labelled according to the CAST rule, a representative angle \(\theta\) in the second quadrant and its reference angle \(\alpha\), and the point \((\cos\theta,\sin\theta)\) on the circle.

```latex
\begin{tikzpicture}[scale=2]
% axes and unit circle
\draw[->] (-1.2,0) -- (1.2,0) node[right] {$x$};
\draw[->] (0,-1.2) -- (0,1.2) node[above] {$y$};
\draw (0,0) circle (1);
% quadrant labels for CAST (reading clockwise from quadrant IV)
\node at (0.5,0.5) {A};   % Quadrant I: All positive
\node at (-0.5,0.5) {S};  % Quadrant II: Sine positive
\node at (-0.5,-0.5) {T}; % Quadrant III: Tangent positive
\node at (0.5,-0.5) {C};   % Quadrant IV: Cosine positive
% draw angle theta in Quadrant II
\draw[->,thick,blue] (0,0) -- ({cos(130)}, {sin(130)});
% arc for theta
\draw[thick] (0.2,0) arc (0:130:0.2);
\node at ({0.36*cos(65)},{0.36*sin(65)}) {$\theta$};
% reference angle alpha
\coordinate (P) at ({cos(130)},{sin(130)});
\coordinate (Q) at ({cos(130)},0);
\draw[dashed] (P) -- (Q);
\draw[thick] ({cos(130)},0.12) arc (90:130:0.12);
\node at ({cos(130)+0.16*cos(110)}, {0.05}) {$\alpha$};
% point on the circle
\fill[blue] (P) circle (0.02);
\node[above left] at (P) {$(\cos\theta,\sin\theta)$};
\end{tikzpicture}
```

---

## TIKZ-004: Graphs of sine, cosine and tangent
Source: TRIGONOMETRY.pdf p. 5  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: TIKZ‑004 | Source: lesson PDF p.5 | Insert from AS1_trigonometry_tikz.md | Purpose: plot the graphs of \(\sin x\), \(\cos x\) and \(\tan x\) from 0 to 2\(\pi\)]`  
Purpose: These plots show the shapes, key points and periodicity of the sine, cosine and tangent functions over one full cycle \((0 \le x \le 2\pi)\).  The first diagram overlays the sine (solid blue) and cosine (dashed red) curves on the same axes; the second diagram shows the tangent curve with its vertical asymptotes.

```latex
% Graph of sine and cosine (requires \usepackage{tikz})
\begin{tikzpicture}[scale=0.9]
  % axes
  \draw[->] (-0.3,0) -- (6.7,0) node[right] {$x$};
  \draw[->] (0,-1.3) -- (0,1.3) node[above] {$y$};
  % x-axis ticks and labels
  \foreach \x/\label in {0/0,1.5708/{\tfrac{\pi}{2}},3.1416/{\pi},4.7124/{\tfrac{3\pi}{2}},6.2832/{2\pi}} {
    \draw (\x,0.08) -- (\x,-0.08) node[below] {$\label$};
  }
  % y-axis ticks
  \foreach \y in {-1,1} {
    \draw (0.08,\y) -- (-0.08,\y) node[left] {\y};
  }
  % sine curve
  \draw[blue,thick,domain=0:6.2832,samples=200] plot(\x,{sin(\x r)});
  % cosine curve
  \draw[red,dashed,thick,domain=0:6.2832,samples=200] plot(\x,{cos(\x r)});
  % labels
  \node[blue] at (6.5,0.8) {$y=\sin x$};
  \node[red] at (6.5,0.2) {$y=\cos x$};
\end{tikzpicture}

\vspace{1cm}

% Graph of tangent with asymptotes
\begin{tikzpicture}[scale=0.9]
  % axes
  \draw[->] (-0.3,0) -- (6.7,0) node[right] {$x$};
  \draw[->] (0,-3.3) -- (0,3.3) node[above] {$y$};
  % x-axis ticks and labels
  \foreach \x/\label in {0/0,1.5708/{\tfrac{\pi}{2}},3.1416/{\pi},4.7124/{\tfrac{3\pi}{2}},6.2832/{2\pi}} {
    \draw (\x,0.1) -- (\x,-0.1) node[below] {$\label$};
  }
  % vertical asymptotes at \pi/2 and 3\pi/2
  \foreach \x in {1.5708,4.7124} {
    \draw[dashed] (\x,-3.2) -- (\x,3.2);
  }
  % tangent curve segments
  \draw[green!70!black,thick,domain=0:1.55,samples=200] plot(\x,{tan(\x r)});
  \draw[green!70!black,thick,domain=1.61:4.71,samples=200] plot(\x,{tan(\x r)});
  \draw[green!70!black,thick,domain=4.75:6.2832,samples=200] plot(\x,{tan(\x r)});
  % label
  \node[green!70!black] at (5.8,2.5) {$y=\tan x$};
\end{tikzpicture}
```

---

## TIKZ-005: Generic triangle for the sine rule
Source: TRIGONOMETRY.pdf p. 9  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: TIKZ‑005 | Source: lesson PDF p.9 | Insert from AS1_trigonometry_tikz.md | Purpose: illustrate the sine rule in a general triangle]`  
Purpose: A scalene triangle is labelled with vertices \(A\), \(B\) and \(C\).  The sides opposite are labelled \(a\), \(b\) and \(c\) respectively.  This diagram accompanies the statement of the sine rule \(\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}\).

```latex
\begin{tikzpicture}[scale=1]
\coordinate (A) at (0,0);
\coordinate (B) at (4,0);
\coordinate (C) at (1.5,2.4);
\draw[thick] (A)--(B)--(C)--cycle;
% side labels (opposite vertices)
\node[below] at (2,-0.25) {$c$};        % side AB
\node[left] at (0.4,1.2) {$b$};         % side AC
\node[right] at (2.8,1.2) {$a$};        % side BC
% vertex labels
\node[below left] at (A) {$A$};
\node[below right] at (B) {$B$};
\node[above] at (C) {$C$};
\end{tikzpicture}
```

---

## TIKZ-006: Triangle highlighting the cosine rule
Source: TRIGONOMETRY.pdf p. 10  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: TIKZ‑006 | Source: lesson PDF p.10 | Insert from AS1_trigonometry_tikz.md | Purpose: illustrate the cosine rule with the included angle]`  
Purpose: This diagram is similar to the generic triangle but emphasises the included angle \(A\) between sides \(b\) and \(c\), as used in the cosine rule \(a^2 = b^2 + c^2 - 2bc\cos A\).  A small arc marks angle \(A\).

```latex
\begin{tikzpicture}[scale=1]
\coordinate (A) at (0,0);
\coordinate (B) at (4,0);
\coordinate (C) at (1.5,2.2);
\draw[thick] (A)--(B)--(C)--cycle;
% side labels
\node[below] at (2,-0.25) {$c$};
\node[left] at (0.5,1.1) {$b$};
\node[right] at (2.7,1.1) {$a$};
% included angle A
\draw (A)+(0.5,0) arc(0:atan2(2.2,1.5):0.5);
\node at (0.6,0.2) {$A$};
\end{tikzpicture}
```

---

## TIKZ-007: Triangle for the area formula
Source: TRIGONOMETRY.pdf p. 11  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: TIKZ‑007 | Source: lesson PDF p.11 | Insert from AS1_trigonometry_tikz.md | Purpose: illustrate the area formula \(\tfrac{1}{2}ab\sin C\)]`  
Purpose: This diagram shows a triangle with sides \(a\), \(b\) and base \(c\), with included angle \(C\) and a dashed altitude dropping from \(C\) to the base.  It illustrates why the area of the triangle is \(\frac{1}{2}ab\sin C\).

```latex
\begin{tikzpicture}[scale=1]
\coordinate (A) at (0,0);
\coordinate (B) at (4,0);
\coordinate (C) at (1,2);
\draw[thick] (A)--(B)--(C)--cycle;
% side labels
\node[below] at (2,-0.25) {$c$};
\node[left] at (0.3,1) {$b$};
\node[right] at (2.6,1) {$a$};
% included angle C
\draw (C)+(-0.35,-0.25) arc(-150:-90:0.5);
\node at (1.3,1.4) {$C$};
% altitude
\draw[dashed] (C) -- (1,0);
\node[right] at (1,1) {$h$};
\end{tikzpicture}
```
