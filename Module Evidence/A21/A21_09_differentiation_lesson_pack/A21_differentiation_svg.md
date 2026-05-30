```markdown
# A21_differentiation_svg.md

# SVG Diagrams for A21 Differentiation  

**Unit code:** A21  
**Topic ID:** A21Differentiation  

## A21DifferentiationSVG-001: Trig Differentiation Cycle  

**Source:** PowerPoint slide 6  
**Related lesson section:** 8.1  
**Used in placeholder:** `[VISUAL PLACEHOLDER: A21DifferentiationSVG-001 | ...]`  
**Purpose:** Visual mnemonic showing the cycle of differentiating and integrating sin and cos.  

### Creation Notes  
This recreates the visual mnemonic from the slides showing sin -> cos -> -sin -> -cos. Moving down is differentiation.

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="100%" height="100%">
  <rect width="300" height="300" fill="#ffffff"/>
  
  <text x="150" y="50" font-family="Arial, sans-serif" font-size="24" font-weight="bold" text-anchor="middle" fill="#333333">sin x</text>
  <text x="150" y="120" font-family="Arial, sans-serif" font-size="24" font-weight="bold" text-anchor="middle" fill="#333333">cos x</text>
  <text x="150" y="190" font-family="Arial, sans-serif" font-size="24" font-weight="bold" text-anchor="middle" fill="#333333">-sin x</text>
  <text x="150" y="260" font-family="Arial, sans-serif" font-size="24" font-weight="bold" text-anchor="middle" fill="#333333">-cos x</text>
  
  <!-- Down Arrows (Differentiation) -->
  <path d="M 130 60 L 130 90" stroke="#e74c3c" stroke-width="3" fill="none" marker-end="url(#arrowhead-down)"/>
  <path d="M 130 130 L 130 160" stroke="#e74c3c" stroke-width="3" fill="none" marker-end="url(#arrowhead-down)"/>
  <path d="M 130 200 L 130 230" stroke="#e74c3c" stroke-width="3" fill="none" marker-end="url(#arrowhead-down)"/>
  
  <!-- Up Arrows (Integration) -->
  <path d="M 170 90 L 170 60" stroke="#3498db" stroke-width="3" fill="none" marker-end="url(#arrowhead-up)"/>
  <path d="M 170 160 L 170 130" stroke="#3498db" stroke-width="3" fill="none" marker-end="url(#arrowhead-up)"/>
  <path d="M 170 230 L 170 200" stroke="#3498db" stroke-width="3" fill="none" marker-end="url(#arrowhead-up)"/>
  
  <!-- Loop back arrow -->
  <path d="M 110 250 C 50 200, 50 100, 110 50" stroke="#e74c3c" stroke-width="3" fill="none" marker-end="url(#arrowhead-down)" stroke-dasharray="5,5"/>
  
  <text x="50" y="150" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#e74c3c" transform="rotate(-90 50,150)">Differentiate</text>
  <text x="220" y="150" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#3498db" transform="rotate(90 220,150)">Integrate</text>

  <defs>
    <marker id="arrowhead-down" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#e74c3c" />
    </marker>
    <marker id="arrowhead-up" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#3498db" />
    </marker>
  </defs>
</svg>
```

## A21DifferentiationSVG-002: Product Rule Cross Layout  

**Source:** PowerPoint slide 23  
**Related lesson section:** 8.3  
**Used in placeholder:** `[VISUAL PLACEHOLDER: A21DifferentiationSVG-002 | ...]`  
**Purpose:** Visual cross-multiplication layout for the Product Rule.  

### Creation Notes  
Recreates the 2x2 grid layout recommended in the transcript for the Product Rule, showing the cross-multiplication pattern.

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200" width="100%" height="100%">
  <rect width="400" height="200" fill="#ffffff"/>
  
  <text x="100" y="60" font-family="Courier New, monospace" font-size="24" font-weight="bold" text-anchor="middle" fill="#2c3e50">u = ...</text>
  <text x="300" y="60" font-family="Courier New, monospace" font-size="24" font-weight="bold" text-anchor="middle" fill="#2c3e50">v = ...</text>
  
  <text x="100" y="140" font-family="Courier New, monospace" font-size="24" font-weight="bold" text-anchor="middle" fill="#2c3e50">u' = ...</text>
  <text x="300" y="140" font-family="Courier New, monospace" font-size="24" font-weight="bold" text-anchor="middle" fill="#2c3e50">v' = ...</text>
  
  <!-- Cross lines -->
  <line x1="140" y1="70" x2="260" y2="130" stroke="#3498db" stroke-width="4" marker-end="url(#arrow-blue)"/>
  <line x1="260" y1="70" x2="140" y2="130" stroke="#e74c3c" stroke-width="4" marker-end="url(#arrow-red)"/>
  
  <text x="200" y="180" font-family="Arial, sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="#333333">y' = (u × v') + (v × u')</text>

  <defs>
    <marker id="arrow-blue" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#3498db" />
    </marker>
    <marker id="arrow-red" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#e74c3c" />
    </marker>
  </defs>
</svg>
```

## A21DifferentiationSVG-003: Quotient Rule Loop Layout  

**Source:** PowerPoint slide 27  
**Related lesson section:** 8.4  
**Used in placeholder:** `[VISUAL PLACEHOLDER: A21DifferentiationSVG-003 | ...]`  
**Purpose:** Visual loop layout for the Quotient Rule to remember the correct subtraction order.  

### Creation Notes  
Recreates the "alpha" loop visual from the transcript to help students remember the $vu' - uv'$ order.

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 250" width="100%" height="100%">
  <rect width="400" height="250" fill="#ffffff"/>
  
  <text x="100" y="60" font-family="Courier New, monospace" font-size="24" font-weight="bold" text-anchor="middle" fill="#2c3e50">u = ...</text>
  <text x="300" y="60" font-family="Courier New, monospace" font-size="24" font-weight="bold" text-anchor="middle" fill="#2c3e50">v = ...</text>
  
  <text x="100" y="140" font-family="Courier New, monospace" font-size="24" font-weight="bold" text-anchor="middle" fill="#2c3e50">u' = ...</text>
  <text x="300" y="140" font-family="Courier New, monospace" font-size="24" font-weight="bold" text-anchor="middle" fill="#2c3e50">v' = ...</text>
  
  <!-- Loop path (v -> u' -> u -> v') -->
  <path d="M 280 70 L 120 130 L 120 70 L 280 130" stroke="#9b59b6" stroke-width="4" fill="none" marker-end="url(#arrow-purple)" stroke-linejoin="round"/>
  
  <text x="200" y="200" font-family="Arial, sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="#333333">y' = (v × u') - (u × v')</text>
  <line x1="100" y1="210" x2="300" y2="210" stroke="#333333" stroke-width="2"/>
  <text x="200" y="235" font-family="Arial, sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="#333333">v²</text>

  <defs>
    <marker id="arrow-purple" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#9b59b6" />
    </marker>
  </defs>
</svg>
```

## A21DifferentiationSVG-004: Concave and Convex Curves  

**Source:** PowerPoint slide 46  
**Related lesson section:** 8.8  
**Used in placeholder:** `[VISUAL PLACEHOLDER: A21DifferentiationSVG-004 | ...]`  
**Purpose:** Diagram showing concave and convex sections of a curve with a point of inflection marked.  

### Creation Notes  
A smooth cubic-style curve showing a clear transition from concave (hill) to convex (valley) with the point of inflection marked in the middle.

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 300" width="100%" height="100%">
  <rect width="500" height="300" fill="#ffffff"/>
  
  <!-- Axes -->
  <line x1="50" y1="250" x2="450" y2="250" stroke="#bdc3c7" stroke-width="2"/>
  <line x1="50" y1="250" x2="50" y2="50" stroke="#bdc3c7" stroke-width="2"/>
  
  <!-- Curve -->
  <path d="M 80 200 C 150 50, 250 50, 250 150 C 250 250, 350 250, 420 100" stroke="#2c3e50" stroke-width="4" fill="none"/>
  
  <!-- Point of Inflection -->
  <circle cx="250" cy="150" r="6" fill="#e74c3c"/>
  <text x="250" y="130" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#e74c3c">Point of Inflection</text>
  <text x="250" y="170" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#e74c3c">f''(x) = 0</text>
  
  <!-- Concave Label -->
  <text x="150" y="90" font-family="Arial, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="#3498db">Concave</text>
  <text x="150" y="110" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#3498db">f''(x) &lt; 0</text>
  
  <!-- Convex Label -->
  <text x="350" y="210" font-family="Arial, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="#27ae60">Convex</text>
  <text x="350" y="230" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#27ae60">f''(x) &gt; 0</text>
</svg>
```
```
