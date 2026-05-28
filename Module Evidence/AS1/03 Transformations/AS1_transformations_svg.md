# SVG Diagrams for AS1 Transformations of Trigonometric Graphs

## SVG-001: Summary of amplitude and period formulas
Source: AI-proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: SVG-001 | Source: AI-proposed teaching enhancement | Insert from AS1_transformations_svg.md | Purpose: quick reference summary for amplitude and period]`  
Purpose: Provides a quick‑reference card summarising the amplitude, period and phase‑shift formulas for the sine, cosine and tangent functions in the form \(y = a\,\sin(bx + c) + d\), \(y = a\,\cos(bx + c) + d\) or \(y = a\,\tan(bx + c) + d\).  

```svg
<svg width="600" height="240" xmlns="http://www.w3.org/2000/svg">
  <style>
    .title { font-family: sans-serif; font-size: 18px; font-weight: bold; fill: #003366; }
    .header { font-family: sans-serif; font-size: 14px; font-weight: bold; fill: #005a9c; }
    .text { font-family: sans-serif; font-size: 12px; fill: #000000; }
    .box { fill: #e6f2ff; stroke: #005a9c; stroke-width: 1; }
  </style>
  <!-- Title -->
  <text x="20" y="24" class="title">Amplitude and Period Summary</text>
  <!-- Sine -->
  <rect x="20" y="40" width="180" height="160" class="box"/>
  <text x="30" y="60" class="header">y = a sin(bx + c) + d</text>
  <text x="30" y="80" class="text">Amplitude: |a|</text>
  <text x="30" y="100" class="text">Period: 360° / |b|</text>
  <text x="30" y="120" class="text">Phase shift: –c / b</text>
  <text x="30" y="140" class="text">Vertical shift: d</text>
  <text x="30" y="160" class="text">Range: [d − |a|, d + |a|]</text>
  <!-- Cosine -->
  <rect x="210" y="40" width="180" height="160" class="box"/>
  <text x="220" y="60" class="header">y = a cos(bx + c) + d</text>
  <text x="220" y="80" class="text">Amplitude: |a|</text>
  <text x="220" y="100" class="text">Period: 360° / |b|</text>
  <text x="220" y="120" class="text">Phase shift: –c / b</text>
  <text x="220" y="140" class="text">Vertical shift: d</text>
  <text x="220" y="160" class="text">Range: [d − |a|, d + |a|]</text>
  <!-- Tangent -->
  <rect x="400" y="40" width="180" height="160" class="box"/>
  <text x="410" y="60" class="header">y = a tan(bx + c) + d</text>
  <text x="410" y="80" class="text">Vertical stretch: |a|</text>
  <text x="410" y="100" class="text">Period: 180° / |b|</text>
  <text x="410" y="120" class="text">Phase shift: –c / b</text>
  <text x="410" y="140" class="text">Vertical shift: d</text>
  <text x="410" y="160" class="text">Asymptotes at x = (90° − c)/b + k·(180°/|b|)</text>
</svg>
```
