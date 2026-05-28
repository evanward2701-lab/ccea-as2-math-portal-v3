# TikZ Diagrams for AS1 Differentiation

**Pack ID:** AS1Differentiation

## AS1DifferentiationQ003TikZ-001: Sports field with semicircular ends

**Source:** Questions PDF p.3  
**Related question:** Question 3  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1DifferentiationQ003TikZ-001 | Source: Questions PDF p.3 | Insert from AS1_differentiation_tikz.md | Purpose: labelled diagram of the sports field with length \(l\) and radius \(r\).]`  
**Purpose:** To reproduce the labelled diagram of a sports field consisting of a rectangle with semicircular ends.  The diagram illustrates the length \(l\) of the rectangular section and the radius \(r\) of each semicircular end.

### Creation Notes

The original diagram shows a rectangle with two semicircular ends.  The width of the rectangle equals twice the radius of the semicircles.  A horizontal arrow marks the length \(l\) of the straight section, and a horizontal arrow inside the semicircle marks the radius \(r\).  TikZ is used to produce a clean, scalable vector graphic with labelled dimensions.

```latex
\begin{tikzpicture}[scale=0.8]
  % Parameters: adjust length L and radius R for illustrative purposes
  \def\L{8}
  \def\R{2}
  % Draw the rectangular part
  \draw (\R,-\R) -- (\L-\R,-\R) -- (\L-\R,\R) -- (\R,\R) -- cycle;
  % Draw the left semicircle: centre at (\R,0), radius \R
  \draw (\R,\R) arc[start angle=90,end angle=270,radius=\R];
  % Draw the right semicircle: centre at (\L-\R,0), radius \R
  \draw (\L-\R,-\R) arc[start angle=270,end angle=90,radius=\R];
  % Label the length l across the top of the rectangular section
  \draw[<->] (\R,\R+0.6) -- (\L-\R,\R+0.6) node[midway,above]{\(l\)};
  % Label the radius r inside the right semicircle (horizontal arrow)
  \draw[<->] (\L-\R,0) -- (\L,0) node[midway,above]{\(r\)};
\end{tikzpicture}
```
