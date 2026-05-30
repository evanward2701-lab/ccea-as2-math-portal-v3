# A21_sequences_and_series_tikz.md

```markdown
# TikZ Diagrams for A21 Sequences and Series  

**Unit code:** A21  
**Topic ID:** A21SequencesAndSeries  

## A21SequencesAndSeriesTikZ-001: Arithmetic Sum Pairwise Proof  

**Source:** PowerPoint slide 11  
**Related lesson section:** 8.1  
**Used in placeholder:** `[VISUAL PLACEHOLDER: A21SequencesAndSeriesTikZ-001 | ...]`  
**Purpose:** Visual proof of the arithmetic sum formula showing pairwise addition  

### Creation Notes  
This TikZ diagram aligns the forward and backward arithmetic series, using arrows to show how each vertical pair sums to $2a + (n-1)d$.  

```latex
\begin{tikzpicture}[>=stealth, node distance=1.5cm and 2cm]

    % Row 1: Forward Series
    \node (S1) at (0, 2) {$S_n$};
    \node (eq1) at (1, 2) {$=$};
    \node (t11) at (2.5, 2) {$a$};
    \node (p11) at (4, 2) {$+$};
    \node (t12) at (5.5, 2) {$(a+d)$};
    \node (p12) at (7.5, 2) {$+ \dots +$};
    \node (t1n) at (10, 2) {$(a+(n-1)d)$};

    % Row 2: Backward Series
    \node (S2) at (0, 1) {$S_n$};
    \node (eq2) at (1, 1) {$=$};
    \node (t21) at (2.5, 1) {$(a+(n-1)d)$};
    \node (p21) at (4, 1) {$+$};
    \node (t22) at (5.5, 1) {$(a+(n-2)d)$};
    \node (p22) at (7.5, 1) {$+ \dots +$};
    \node (t2n) at (10, 1) {$a$};

    % Row 3: Summed Series
    \node (S3) at (0, -1) {$2S_n$};
    \node (eq3) at (1, -1) {$=$};
    \node (t31) at (2.5, -1) {$[2a+(n-1)d]$};
    \node (p31) at (4, -1) {$+$};
    \node (t32) at (5.5, -1) {$[2a+(n-1)d]$};
    \node (p32) at (7.5, -1) {$+ \dots +$};
    \node (t3n) at (10, -1) {$[2a+(n-1)d]$};

    % Addition line
    \draw[thick] (-0.5, 0.2) -- (11.5, 0.2);
    \node at (-1, 0.2) {$+$};

    % Arrows showing pairwise addition
    \draw[->, blue, thick] (t21.south) -- (t31.north);
    \draw[->, blue, thick] (t22.south) -- (t32.north);
    \draw[->, blue, thick] (t2n.south) -- (t3n.north);

    % Brace for n terms
    \draw[decorate, decoration={brace, amplitude=10pt, mirror}, thick] (1.5, -1.5) -- (11.2, -1.5) node[midway, below=12pt] {$n \text{ lots of } [2a+(n-1)d]$};

\end{tikzpicture}
```
```
