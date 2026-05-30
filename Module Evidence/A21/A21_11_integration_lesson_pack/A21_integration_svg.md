```markdown
A21_integration_svg.md
```

```markdown
# SVG Diagrams for A21 Integration  

**Unit code:** A21  
**Topic ID:** A21Integration  

## A21IntegrationSVG-001: Integration by Parts Pattern  

**Source:** PowerPoint slide 31  
**Related lesson section:** 8.6  
**Used in placeholder:** `[VISUAL PLACEHOLDER: A21IntegrationSVG-001 | Source: PowerPoint slide 31 | Insert from A21_integration_svg.md | Purpose: Visual diagram showing the cross-multiplication pattern for Integration by Parts]`  
**Purpose:** Visual diagram showing the cross-multiplication pattern for Integration by Parts.  

### Creation Notes  
This SVG diagram represents the visual layout for Integration by Parts as described in the transcript and slides. SVG is the right format because it allows for precise positioning of text and custom curved arrows to show the diagonal multiplication and horizontal integration steps, which is difficult to achieve cleanly in standard Markdown or Mermaid.  

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 300" width="100%" height="100%">
  <defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#2563eb" />
    </marker>
    <marker id="arrowhead-red" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#dc2626" />
    </marker>
  </defs>

  <!-- Background -->
  <rect width="500" height="300" fill="#f8fafc" rx="10" />

  <!-- Title -->
  <text x="250" y="40" font-family="sans-serif" font-size="20" font-weight="bold" text-anchor="middle" fill="#0f172a">Integration by Parts Visual Pattern</text>

  <!-- Grid Elements -->
  <text x="150" y="120" font-family="serif" font-size="28" font-style="italic" text-anchor="middle" fill="#0f172a">u</text>
  <text x="350" y="120" font-family="serif" font-size="28" font-style="italic" text-anchor="middle" fill="#0f172a">v'</text>
  
  <text x="150" y="220" font-family="serif" font-size="28" font-style="italic" text-anchor="middle" fill="#0f172a">u'</text>
  <text x="350" y="220" font-family="serif" font-size="28" font-style="italic" text-anchor="middle" fill="#0f172a">v</text>

  <!-- Vertical Operations -->
  <text x="100" y="175" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#64748b">Differentiate</text>
  <path d="M 130 140 L 130 190" stroke="#64748b" stroke-width="2" marker-end="url(#arrowhead)" stroke-dasharray="4 4"/>

  <text x="410" y="175" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#64748b">Integrate</text>
  <path d="M 370 140 L 370 190" stroke="#64748b" stroke-width="2" marker-end="url(#arrowhead)" stroke-dasharray="4 4"/>

  <!-- Diagonal Multiplication (uv) -->
  <path d="M 170 130 L 320 200" stroke="#2563eb" stroke-width="3" marker-end="url(#arrowhead)"/>
  <rect x="220" y="145" width="40" height="25" fill="#f8fafc" />
  <text x="240" y="163" font-family="serif" font-size="18" font-style="italic" font-weight="bold" text-anchor="middle" fill="#2563eb">uv</text>

  <!-- Horizontal Integration (- integral v u') -->
  <path d="M 320 220 L 180 220" stroke="#dc2626" stroke-width="3" marker-end="url(#arrowhead-red)"/>
  <rect x="200" y="205" width="100" height="30" fill="#f8fafc" />
  <text x="250" y="226" font-family="serif" font-size="18" font-style="italic" font-weight="bold" text-anchor="middle" fill="#dc2626">- ∫ v u' dx</text>

</svg>
```
```

