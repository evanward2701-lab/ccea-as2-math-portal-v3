```markdown
# A21_radians_svg.md PART 1A

**Unit code:** A21  
**Topic ID:** A21Radians  

## A21RadiansSVG-001: Definition of a Radian  

**Source:** PowerPoint slide 4  
**Related lesson section:** 7  
**Used in placeholder:** `[VISUAL PLACEHOLDER: A21RadiansSVG-001 | ...]`  
**Purpose:** Diagram showing a circle with radius r, arc length r, and the subtended angle labelled as 1 radian.  

### Creation Notes  
This SVG draws a circle sector where the arc length is visually equal to the radius. It uses a clean, textbook-style aesthetic with clear labels for $r$, $r$, and $1\text{ rad}$.

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#333" />
    </marker>
  </defs>
  
  <!-- Background -->
  <rect width="400" height="400" fill="#ffffff" />
  
  <!-- Circle outline (faint) -->
  <circle cx="200" cy="200" r="150" fill="none" stroke="#e0e0e0" stroke-width="2" stroke-dasharray="5,5" />
  
  <!-- Sector -->
  <path d="M 200 200 L 350 200 A 150 150 0 0 0 281.05 73.66 Z" fill="#e8f4f8" stroke="#2b6cb0" stroke-width="3" stroke-linejoin="round" />
  
  <!-- Angle Arc -->
  <path d="M 240 200 A 40 40 0 0 0 221.61 166.31" fill="none" stroke="#333" stroke-width="2" />
  
  <!-- Labels -->
  <text x="260" y="215" font-family="sans-serif" font-size="18" font-style="italic" fill="#333">r</text>
  <text x="220" y="130" font-family="sans-serif" font-size="18" font-style="italic" fill="#333">r</text>
  
  <!-- Arc Length Label with arrows -->
  <path d="M 360 200 A 160 160 0 0 0 286.45 65.24" fill="none" stroke="#e53e3e" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)" />
  <text x="340" y="120" font-family="sans-serif" font-size="18" fill="#e53e3e">Arc length = r</text>
  
  <!-- Angle Label -->
  <text x="245" y="190" font-family="sans-serif" font-size="16" font-weight="bold" fill="#333">1 rad</text>
  
  <!-- Center Point -->
  <circle cx="200" cy="200" r="4" fill="#333" />
</svg>
```

## A21RadiansSVG-002: Sector Area and Arc Length  

**Source:** PowerPoint slide 12  
**Related lesson section:** 8.2 & 8.3  
**Used in placeholder:** `[VISUAL PLACEHOLDER: A21RadiansSVG-002 | ...]`  
**Purpose:** Diagram showing a sector with radius r, angle theta, and arc length l = r*theta.  

### Creation Notes  
A standard geometric representation of a sector, highlighting the radius $r$, the angle $\theta$, and the arc length $l$.

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
  <!-- Background -->
  <rect width="400" height="400" fill="#ffffff" />
  
  <!-- Sector -->
  <path d="M 150 250 L 300 250 A 150 150 0 0 0 225 120.1 Z" fill="#fefcbf" stroke="#d69e2e" stroke-width="3" stroke-linejoin="round" />
  
  <!-- Angle Arc -->
  <path d="M 190 250 A 40 40 0 0 0 170 215.36" fill="none" stroke="#333" stroke-width="2" />
  
  <!-- Labels -->
  <text x="210" y="270" font-family="sans-serif" font-size="20" font-style="italic" fill="#333">r</text>
  <text x="165" y="180" font-family="sans-serif" font-size="20" font-style="italic" fill="#333">r</text>
  
  <!-- Arc Length Label -->
  <text x="280" y="170" font-family="sans-serif" font-size="22" font-style="italic" fill="#d69e2e">l</text>
  
  <!-- Angle Label -->
  <text x="195" y="235" font-family="sans-serif" font-size="20" font-style="italic" fill="#333">θ</text>
  
  <!-- Center Point -->
  <circle cx="150" cy="250" r="4" fill="#333" />
</svg>
```

## A21RadiansSVG-003: Segment Area  

**Source:** PowerPoint slide 18  
**Related lesson section:** 8.4  
**Used in placeholder:** `[VISUAL PLACEHOLDER: A21RadiansSVG-003 | ...]`  
**Purpose:** Diagram showing a segment as the difference between a sector and a triangle.  

### Creation Notes  
This SVG illustrates the chord connecting the two radii endpoints, with the segment area shaded distinctly from the triangle to visually reinforce the subtraction formula.

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
  <!-- Background -->
  <rect width="400" height="400" fill="#ffffff" />
  
  <!-- Full Sector (Base) -->
  <path d="M 150 250 L 300 250 A 150 150 0 0 0 225 120.1 Z" fill="#e2e8f0" stroke="none" />
  
  <!-- Triangle -->
  <path d="M 150 250 L 300 250 L 225 120.1 Z" fill="#ffffff" stroke="#4a5568" stroke-width="2" stroke-linejoin="round" />
  
  <!-- Segment (Shaded) -->
  <path d="M 300 250 A 150 150 0 0 0 225 120.1 L 300 250 Z" fill="#a0aec0" stroke="#4a5568" stroke-width="2" />
  
  <!-- Angle Arc -->
  <path d="M 190 250 A 40 40 0 0 0 170 215.36" fill="none" stroke="#333" stroke-width="2" />
  
  <!-- Labels -->
  <text x="210" y="270" font-family="sans-serif" font-size="20" font-style="italic" fill="#333">r</text>
  <text x="165" y="180" font-family="sans-serif" font-size="20" font-style="italic" fill="#333">r</text>
  
  <!-- Angle Label -->
  <text x="195" y="235" font-family="sans-serif" font-size="20" font-style="italic" fill="#333">θ</text>
  
  <!-- Segment Label -->
  <text x="285" y="190" font-family="sans-serif" font-size="16" font-weight="bold" fill="#2d3748">Segment</text>
  
  <!-- Center Point -->
  <circle cx="150" cy="250" r="4" fill="#333" />
</svg>
```
```
