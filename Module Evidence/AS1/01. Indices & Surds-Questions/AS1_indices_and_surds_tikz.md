# TikZ Diagrams for CCEA AS1 Pure Mathematics Indices and Surds

**Pack ID:** AS1IndicesAndSurds

## AS1IndicesAndSurdsQ015TikZ-001: Trapezium in Figure 2

**Source:** Questions PDF p.5  
**Related question:** Question 15  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1IndicesAndSurdsQ015TikZ-001 | ...]`  
**Purpose:** Recreates the trapezium diagram for the timber-area question, preserving the labels on the parallel sides and the perpendicular height \(h\).

### Creation Notes

This diagram represents the trapezium shown in Fig. 2 of the questions PDF.  TikZ is the best format because the figure is a formal mathematical diagram with labelled lengths, right-angle markers, and a height.  The precise slant of the right-hand side is not mathematically important; the important information is that the top and bottom sides are parallel, the left side is perpendicular to them, and the lengths are labelled \(6-4\sqrt2\), \(\sqrt8\), and \(h\).

```latex
\begin{tikzpicture}[scale=1.1, every node/.style={font=\small}]
  % Coordinates for trapezium
  \coordinate (A) at (0,0);      % bottom left
  \coordinate (B) at (3.0,0);    % bottom right
  \coordinate (C) at (1.8,3.0);  % top right
  \coordinate (D) at (0,3.0);    % top left

  % Trapezium outline
  \draw[thick] (A) -- (B) -- (C) -- (D) -- cycle;

  % Right-angle markers on the left side
  \draw (A) ++(0.18,0) -- ++(0,0.18) -- ++(-0.18,0);
  \draw (D) ++(0.18,0) -- ++(0,-0.18) -- ++(-0.18,0);

  % Labels for lengths
  \node[left] at (0,1.5) {$h$};
  \node[above] at ($(D)!0.5!(C)$) {$6-4\sqrt{2}$};
  \node[below] at ($(A)!0.5!(B)$) {$\sqrt{8}$};

  % Figure label
  \node[below] at (1.5,-0.55) {\textbf{Fig. 2}};
\end{tikzpicture}
```
