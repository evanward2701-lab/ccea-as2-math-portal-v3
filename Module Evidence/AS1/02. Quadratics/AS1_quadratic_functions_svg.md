# SVG Diagrams for AS1 Quadratic Functions

## SVG-001: Quadratic inequality solution patterns
Source: lesson PDF p.4  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: SVG-001 | Source: lesson PDF p.4 | Insert from AS1_quadratic_functions_svg.md | Purpose: visual summary of solution patterns for quadratic inequalities]`  
Purpose: This diagram summarises the general patterns for solving quadratic inequalities.  The four panels show how the sign of the leading coefficient \(a\) and the inequality direction determine whether the solution set lies inside or outside the roots.

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="640" height="420" viewBox="0 0 640 420">
  <style>
    .axis { stroke: #444; stroke-width: 1; }
    .curve { stroke-width: 2; fill: none; }
    .label { font-size: 12px; fill: #000; font-family: sans-serif; }
    .shade { fill: rgba(173,216,230,0.4); }
    .root { fill: #fff; stroke: #000; stroke-width: 1; }
    .title { font-size: 14px; font-weight: bold; fill: #000; font-family: sans-serif; }
  </style>
  <!-- Panel 1: a > 0, inequality > 0 (solution outside roots) -->
  <g transform="translate(10,10)">
    <rect x="0" y="0" width="300" height="180" fill="none" stroke="#ccc" />
    <!-- axes -->
    <line x1="0" y1="90" x2="300" y2="90" class="axis" />
    <line x1="150" y1="0" x2="150" y2="180" class="axis" />
    <!-- parabola (U‑shape) -->
    <path d="M0 160 Q150 20 300 160" class="curve" stroke="#377eb8" />
    <!-- shading outside roots -->
    <rect x="0" y="0" width="70" height="180" class="shade" />
    <rect x="230" y="0" width="70" height="180" class="shade" />
    <!-- roots -->
    <circle cx="70" cy="160" r="4" class="root" />
    <circle cx="230" cy="160" r="4" class="root" />
    <!-- labels -->
    <text x="5" y="15" class="title">a &gt; 0, ax²+bx+c &gt; 0</text>
    <text x="5" y="30" class="label">Solution: x &lt; r₁ or x &gt; r₂</text>
  </g>
  <!-- Panel 2: a > 0, inequality < 0 (solution between roots) -->
  <g transform="translate(330,10)">
    <rect x="0" y="0" width="300" height="180" fill="none" stroke="#ccc" />
    <line x1="0" y1="90" x2="300" y2="90" class="axis" />
    <line x1="150" y1="0" x2="150" y2="180" class="axis" />
    <path d="M0 160 Q150 20 300 160" class="curve" stroke="#377eb8" />
    <!-- shading between roots -->
    <rect x="70" y="0" width="160" height="180" class="shade" />
    <circle cx="70" cy="160" r="4" class="root" />
    <circle cx="230" cy="160" r="4" class="root" />
    <text x="5" y="15" class="title">a &gt; 0, ax²+bx+c &lt; 0</text>
    <text x="5" y="30" class="label">Solution: r₁ &lt; x &lt; r₂</text>
  </g>
  <!-- Panel 3: a < 0, inequality > 0 (solution between roots) -->
  <g transform="translate(10,220)">
    <rect x="0" y="0" width="300" height="180" fill="none" stroke="#ccc" />
    <line x1="0" y1="90" x2="300" y2="90" class="axis" />
    <line x1="150" y1="0" x2="150" y2="180" class="axis" />
    <!-- n‑shape parabola (a<0) -->
    <path d="M0 20 Q150 160 300 20" class="curve" stroke="#e41a1c" />
    <!-- shading between roots for >0 -->
    <rect x="70" y="0" width="160" height="180" class="shade" />
    <circle cx="70" cy="20" r="4" class="root" />
    <circle cx="230" cy="20" r="4" class="root" />
    <text x="5" y="15" class="title">a &lt; 0, ax²+bx+c &gt; 0</text>
    <text x="5" y="30" class="label">Solution: r₁ &lt; x &lt; r₂</text>
  </g>
  <!-- Panel 4: a < 0, inequality < 0 (solution outside roots) -->
  <g transform="translate(330,220)">
    <rect x="0" y="0" width="300" height="180" fill="none" stroke="#ccc" />
    <line x1="0" y1="90" x2="300" y2="90" class="axis" />
    <line x1="150" y1="0" x2="150" y2="180" class="axis" />
    <path d="M0 20 Q150 160 300 20" class="curve" stroke="#e41a1c" />
    <!-- shading outside roots -->
    <rect x="0" y="0" width="70" height="180" class="shade" />
    <rect x="230" y="0" width="70" height="180" class="shade" />
    <circle cx="70" cy="20" r="4" class="root" />
    <circle cx="230" cy="20" r="4" class="root" />
    <text x="5" y="15" class="title">a &lt; 0, ax²+bx+c &lt; 0</text>
    <text x="5" y="30" class="label">Solution: x &lt; r₁ or x &gt; r₂</text>
  </g>
</svg>
```
