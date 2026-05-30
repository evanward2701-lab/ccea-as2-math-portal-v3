```markdown
# A21_vectors_svg.md

**Unit code:** A21  
**Topic ID:** A21Vectors  

## A21VectorsSVG-001: Parallelogram Diagonals Bisect

**Source:** PowerPoint slide 11  
**Related lesson section:** 11  
**Used in placeholder:** `[VISUAL PLACEHOLDER: A21VectorsSVG-001 | Source: PowerPoint slide 11 | Insert from A21_vectors_svg.md | Purpose: Show the parallelogram OACB with intersecting diagonals to support the proof]`  
**Purpose:** Show the parallelogram OACB with intersecting diagonals to support the proof.  

### Creation Notes  
This SVG illustrates the parallelogram $OACB$ with base vectors $a$ and $b$. The diagonals $OC$ and $AB$ are drawn, intersecting at point $X$. Arrows indicate the direction of the vectors.

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
  <!-- Definitions for arrowheads -->
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#333" />
    </marker>
    <marker id="arrow-blue" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#0052cc" />
    </marker>
  </defs>

  <!-- Parallelogram Fill -->
  <polygon points="20,150 60,50 160,50 120,150" fill="#f0f5ff" stroke="none" />

  <!-- Diagonals -->
  <line x1="20" y1="150" x2="160" y2="50" stroke="#ff6600" stroke-width="2" stroke-dasharray="4,4" />
  <line x1="60" y1="50" x2="120" y2="150" stroke="#ff6600" stroke-width="2" stroke-dasharray="4,4" />

  <!-- Parallelogram Edges -->
  <line x1="20" y1="150" x2="60" y2="50" stroke="#333" stroke-width="2" marker-end="url(#arrow)" />
  <line x1="20" y1="150" x2="120" y2="150" stroke="#333" stroke-width="2" marker-end="url(#arrow)" />
  <line x1="60" y1="50" x2="160" y2="50" stroke="#333" stroke-width="2" />
  <line x1="120" y1="150" x2="160" y2="50" stroke="#333" stroke-width="2" />

  <!-- Intersection Point X -->
  <circle cx="90" cy="100" r="3" fill="#ff0000" />

  <!-- Labels -->
  <text x="5" y="160" font-family="sans-serif" font-size="12" font-weight="bold">O</text>
  <text x="45" y="40" font-family="sans-serif" font-size="12" font-weight="bold">A</text>
  <text x="165" y="40" font-family="sans-serif" font-size="12" font-weight="bold">C</text>
  <text x="125" y="160" font-family="sans-serif" font-size="12" font-weight="bold">B</text>
  <text x="95" y="95" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ff0000">X</text>

  <!-- Vector Labels -->
  <text x="25" y="100" font-family="sans-serif" font-size="14" font-style="italic" font-weight="bold">a</text>
  <text x="70" y="165" font-family="sans-serif" font-size="14" font-style="italic" font-weight="bold">b</text>
</svg>
```

## A21VectorsSVG-002: Ratio on a Diagonal

**Source:** PowerPoint slide 12  
**Related lesson section:** 11  
**Used in placeholder:** `[VISUAL PLACEHOLDER: A21VectorsSVG-002 | Source: PowerPoint slide 12 | Insert from A21_vectors_svg.md | Purpose: Show the parallelogram OABC with point Q and intersection X]`  
**Purpose:** Show the parallelogram OABC with point Q and intersection X.  

### Creation Notes  
This SVG illustrates the parallelogram $OACB$ with point $Q$ positioned one-third of the way along $OA$. The lines $OC$ and $BQ$ intersect at $X$, visually supporting the $1:3$ ratio proof.

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 180" width="100%" height="100%">
  <defs>
    <marker id="arrow2" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#333" />
    </marker>
  </defs>

  <!-- Parallelogram Fill -->
  <polygon points="20,150 80,30 180,30 120,150" fill="#f0f5ff" stroke="none" />

  <!-- Internal Lines -->
  <line x1="20" y1="150" x2="180" y2="30" stroke="#0052cc" stroke-width="2" />
  <line x1="120" y1="150" x2="40" y2="110" stroke="#d93025" stroke-width="2" />

  <!-- Parallelogram Edges -->
  <line x1="20" y1="150" x2="80" y2="30" stroke="#333" stroke-width="2" marker-end="url(#arrow2)" />
  <line x1="20" y1="150" x2="120" y2="150" stroke="#333" stroke-width="2" marker-end="url(#arrow2)" />
  <line x1="80" y1="30" x2="180" y2="30" stroke="#333" stroke-width="2" />
  <line x1="120" y1="150" x2="180" y2="30" stroke="#333" stroke-width="2" />

  <!-- Points -->
  <circle cx="40" cy="110" r="3" fill="#333" />
  <circle cx="60" cy="120" r="3" fill="#ff0000" />

  <!-- Labels -->
  <text x="5" y="160" font-family="sans-serif" font-size="12" font-weight="bold">O</text>
  <text x="75" y="20" font-family="sans-serif" font-size="12" font-weight="bold">A</text>
  <text x="185" y="20" font-family="sans-serif" font-size="12" font-weight="bold">C</text>
  <text x="125" y="160" font-family="sans-serif" font-size="12" font-weight="bold">B</text>
  <text x="20" y="105" font-family="sans-serif" font-size="12" font-weight="bold">Q</text>
  <text x="65" y="135" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ff0000">X</text>

  <!-- Vector Labels -->
  <text x="55" y="90" font-family="sans-serif" font-size="14" font-style="italic" font-weight="bold">a</text>
  <text x="70" y="165" font-family="sans-serif" font-size="14" font-style="italic" font-weight="bold">b</text>
</svg>
```
```
