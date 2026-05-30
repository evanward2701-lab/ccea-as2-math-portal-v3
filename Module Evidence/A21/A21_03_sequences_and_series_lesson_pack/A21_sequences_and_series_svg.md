# A21_sequences_and_series_svg.md

```markdown
# SVG Diagrams for A21 Sequences and Series  

**Unit code:** A21  
**Topic ID:** A21SequencesAndSeries  

## A21SequencesAndSeriesSVG-001: Infinite Geometric Series Convergence  

**Source:** PowerPoint slide 31  
**Related lesson section:** 8.3  
**Used in placeholder:** `[VISUAL PLACEHOLDER: A21SequencesAndSeriesSVG-001 | ...]`  
**Purpose:** Visual representation of an infinite geometric series converging to a finite area  

### Creation Notes  
This SVG illustrates the sum $1 + \frac{1}{2} + \frac{1}{4} + \frac{1}{8} + \dots = 2$. It shows two main blocks (each representing 1 unit of area). The first is solid. The second is subdivided infinitely into halves, quarters, eighths, etc., visually proving that the infinite sum perfectly fills the 2-unit area without exceeding it.  

```svg
<svg viewBox="0 0 440 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <!-- Background -->
  <rect width="440" height="220" fill="#ffffff" />
  
  <!-- First Unit (1) -->
  <rect x="10" y="10" width="200" height="200" fill="#4A90E2" stroke="#333" stroke-width="2"/>
  <text x="110" y="120" font-size="36" fill="#ffffff" text-anchor="middle" font-weight="bold">1</text>
  
  <!-- Second Unit (Subdivided) -->
  <g transform="translate(220, 10)">
    <!-- 1/2 -->
    <rect x="0" y="0" width="100" height="200" fill="#50E3C2" stroke="#333" stroke-width="2"/>
    <text x="50" y="110" font-size="28" fill="#333" text-anchor="middle" font-weight="bold">1/2</text>
    
    <!-- 1/4 -->
    <rect x="100" y="0" width="100" height="100" fill="#B8E986" stroke="#333" stroke-width="2"/>
    <text x="150" y="60" font-size="24" fill="#333" text-anchor="middle" font-weight="bold">1/4</text>
    
    <!-- 1/8 -->
    <rect x="100" y="100" width="50" height="100" fill="#F8E71C" stroke="#333" stroke-width="2"/>
    <text x="125" y="160" font-size="18" fill="#333" text-anchor="middle" font-weight="bold">1/8</text>
    
    <!-- 1/16 -->
    <rect x="150" y="100" width="50" height="50" fill="#F5A623" stroke="#333" stroke-width="2"/>
    <text x="175" y="132" font-size="14" fill="#fff" text-anchor="middle" font-weight="bold">1/16</text>
    
    <!-- 1/32 -->
    <rect x="150" y="150" width="25" height="50" fill="#D0021B" stroke="#333" stroke-width="1"/>
    
    <!-- 1/64 -->
    <rect x="175" y="150" width="25" height="25" fill="#9013FE" stroke="#333" stroke-width="1"/>
    
    <!-- Remaining infinite space -->
    <rect x="175" y="175" width="25" height="25" fill="#4A4A4A" stroke="#333" stroke-width="1"/>
  </g>
  
  <!-- Equation at the bottom -->
  <text x="220" y="240" font-size="20" fill="#333" text-anchor="middle">1 + 1/2 + 1/4 + 1/8 + 1/16 + ... = 2</text>
</svg>
```
```
