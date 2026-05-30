```markdown
# A21_binomial_expansion_rational_svg.md

**Unit code:** A21
**Topic ID:** A21BinomialExpansionRational

## A21BinomialExpansionRationalSVG-001: Validity Range Number Line

**Source:** Remote teaching PDF page 5 (adapted for clarity)
**Related lesson section:** 8
**Used in placeholder:** `[VISUAL PLACEHOLDER: A21BinomialExpansionRationalSVG-001 | ...]`
**Purpose:** Visually demonstrates the valid region for convergence on a number line.

### Creation Notes
A simple SVG number line showing the open interval between -1 and 1. This helps students visualise the algebraic inequality $|x| < 1$.

```svg
<svg viewBox="0 0 600 150" xmlns="http://www.w3.org/2000/svg">
  <!-- Number line -->
  <line x1="50" y1="80" x2="550" y2="80" stroke="black" stroke-width="2" marker-end="url(#arrow)" marker-start="url(#arrow-reverse)"/>
  
  <!-- Markers -->
  <line x1="150" y1="70" x2="150" y2="90" stroke="black" stroke-width="2"/>
  <line x1="300" y1="70" x2="300" y2="90" stroke="black" stroke-width="2"/>
  <line x1="450" y1="70" x2="450" y2="90" stroke="black" stroke-width="2"/>
  
  <!-- Labels -->
  <text x="150" y="110" font-family="Arial" font-size="16" text-anchor="middle">-1</text>
  <text x="300" y="110" font-family="Arial" font-size="16" text-anchor="middle">0</text>
  <text x="450" y="110" font-family="Arial" font-size="16" text-anchor="middle">1</text>
  
  <!-- Valid Region Highlight -->
  <line x1="150" y1="80" x2="450" y2="80" stroke="#4CAF50" stroke-width="6"/>
  
  <!-- Open circles for strict inequality -->
  <circle cx="150" cy="80" r="6" fill="white" stroke="#4CAF50" stroke-width="2"/>
  <circle cx="450" cy="80" r="6" fill="white" stroke="#4CAF50" stroke-width="2"/>
  
  <!-- Text explanation -->
  <text x="300" y="50" font-family="Arial" font-size="16" font-weight="bold" fill="#4CAF50" text-anchor="middle">Valid Region: |x| &lt; 1</text>
  <text x="300" y="140" font-family="Arial" font-size="14" text-anchor="middle">Series converges</text>
  
  <!-- Arrows -->
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="black" />
    </marker>
    <marker id="arrow-reverse" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 10 0 L 0 5 L 10 10 z" fill="black" />
    </marker>
  </defs>
</svg>
```

## A21BinomialExpansionRationalSVG-002: Overlapping Validity Ranges

**Source:** Remote teaching PDF page 31 (adapted for clarity)
**Related lesson section:** 8
**Used in placeholder:** `[VISUAL PLACEHOLDER: A21BinomialExpansionRationalSVG-002 | ...]`
**Purpose:** Shows how to find the combined validity range when multiplying two expansions.

### Creation Notes
This SVG shows two overlapping intervals (e.g., $|x| < 1$ and $|x| < 2$) and highlights the intersection, reinforcing the rule that the most restrictive range applies.

```svg
<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
  <!-- Number line -->
  <line x1="50" y1="150" x2="550" y2="150" stroke="black" stroke-width="2" marker-end="url(#arrow)" marker-start="url(#arrow-reverse)"/>
  
  <!-- Markers -->
  <line x1="100" y1="140" x2="100" y2="160" stroke="black" stroke-width="2"/>
  <line x1="200" y1="140" x2="200" y2="160" stroke="black" stroke-width="2"/>
  <line x1="300" y1="140" x2="300" y2="160" stroke="black" stroke-width="2"/>
  <line x1="400" y1="140" x2="400" y2="160" stroke="black" stroke-width="2"/>
  <line x1="500" y1="140" x2="500" y2="160" stroke="black" stroke-width="2"/>
  
  <!-- Labels -->
  <text x="100" y="180" font-family="Arial" font-size="16" text-anchor="middle">-2</text>
  <text x="200" y="180" font-family="Arial" font-size="16" text-anchor="middle">-1</text>
  <text x="300" y="180" font-family="Arial" font-size="16" text-anchor="middle">0</text>
  <text x="400" y="180" font-family="Arial" font-size="16" text-anchor="middle">1</text>
  <text x="500" y="180" font-family="Arial" font-size="16" text-anchor="middle">2</text>
  
  <!-- Range 1: |x| < 2 -->
  <line x1="100" y1="100" x2="500" y2="100" stroke="#2196F3" stroke-width="4"/>
  <circle cx="100" cy="100" r="5" fill="white" stroke="#2196F3" stroke-width="2"/>
  <circle cx="500" cy="100" r="5" fill="white" stroke="#2196F3" stroke-width="2"/>
  <text x="300" y="90" font-family="Arial" font-size="14" fill="#2196F3" text-anchor="middle">Expansion 2 valid: |x| &lt; 2</text>

  <!-- Range 2: |x| < 1 -->
  <line x1="200" y1="50" x2="400" y2="50" stroke="#F44336" stroke-width="4"/>
  <circle cx="200" cy="50" r="5" fill="white" stroke="#F44336" stroke-width="2"/>
  <circle cx="400" cy="50" r="5" fill="white" stroke="#F44336" stroke-width="2"/>
  <text x="300" y="40" font-family="Arial" font-size="14" fill="#F44336" text-anchor="middle">Expansion 1 valid: |x| &lt; 1</text>
  
  <!-- Intersection Highlight -->
  <rect x="200" y="30" width="200" height="130" fill="#4CAF50" fill-opacity="0.2" />
  <text x="300" y="20" font-family="Arial" font-size="14" font-weight="bold" fill="#4CAF50" text-anchor="middle">Combined Validity: |x| &lt; 1 (Most restrictive)</text>
</svg>
```
```

