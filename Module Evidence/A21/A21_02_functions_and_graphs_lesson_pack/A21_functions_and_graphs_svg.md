```markdown
# A21_functions_and_graphs_svg.md

**Unit code:** A21
**Topic ID:** A21FunctionsAndGraphs

## A21FunctionsAndGraphsSVG-001: Composite Function Mapping

**Source:** PowerPoint slide 19
**Related lesson section:** 8.3
**Used in placeholder:** `[VISUAL PLACEHOLDER: A21FunctionsAndGraphsSVG-001 | ...]`
**Purpose:** Composite function mapping diagram showing x -> g(x) -> f(g(x))

### Creation Notes
This SVG recreates the mapping diagram from the slide evidence, showing three sets (ovals) and the mapping arrows between them. It visually reinforces that the inner function $g$ is applied first, followed by the outer function $f$, resulting in the composite function $fg$.

```svg
<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
  <!-- Ovals representing sets -->
  <ellipse cx="100" cy="150" rx="60" ry="100" fill="#f8f9fa" stroke="#333" stroke-width="2"/>
  <ellipse cx="300" cy="150" rx="60" ry="100" fill="#f8f9fa" stroke="#333" stroke-width="2"/>
  <ellipse cx="500" cy="150" rx="60" ry="100" fill="#f8f9fa" stroke="#333" stroke-width="2"/>
  
  <!-- Text inside ovals -->
  <text x="100" y="155" font-family="sans-serif" font-size="24" font-style="italic" text-anchor="middle" fill="#333">x</text>
  <text x="300" y="155" font-family="sans-serif" font-size="24" font-style="italic" text-anchor="middle" fill="#333">g(x)</text>
  <text x="500" y="155" font-family="sans-serif" font-size="24" font-style="italic" text-anchor="middle" fill="#333">fg(x)</text>
  
  <!-- Top Arrows -->
  <path d="M 130 100 Q 200 60 270 100" fill="none" stroke="#4A90E2" stroke-width="3" marker-end="url(#arrow)"/>
  <text x="200" y="70" font-family="sans-serif" font-size="24" font-style="italic" text-anchor="middle" fill="#4A90E2">g</text>
  
  <path d="M 330 100 Q 400 60 470 100" fill="none" stroke="#4A90E2" stroke-width="3" marker-end="url(#arrow)"/>
  <text x="400" y="70" font-family="sans-serif" font-size="24" font-style="italic" text-anchor="middle" fill="#4A90E2">f</text>
  
  <!-- Bottom Composite Arrow -->
  <path d="M 120 220 Q 300 300 480 220" fill="none" stroke="#D0021B" stroke-width="3" marker-end="url(#arrow-red)"/>
  <text x="300" y="280" font-family="sans-serif" font-size="24" font-style="italic" text-anchor="middle" fill="#D0021B">fg</text>
  
  <!-- Arrowhead definitions -->
  <defs>
    <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="#4A90E2" />
    </marker>
    <marker id="arrow-red" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="#D0021B" />
    </marker>
  </defs>
</svg>
```
```

