# SVG Diagrams for AS1 Integration Basics

## SVG-001: Standard shapes and their area formulae
Source: AI‑proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: SVG-001 | ...]`  
Purpose: Summarise four common functions (constant, linear, quadratic and square‑root) and the formulas for the area under each curve between \(x=0\) and \(x=b\).  This visual cue helps students remember the standard results used when calculating areas under simple curves.

```svg
<svg width="640" height="360" viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg" aria-labelledby="title desc" role="img">
  <title id="title">Standard shapes and areas</title>
  <desc id="desc">Each panel shows a basic function, a shaded region under the curve and the corresponding area formula.</desc>
  <!-- Panel backgrounds -->
  <rect x="10" y="10" width="300" height="160" fill="#f8fbff" stroke="#cccccc"/>
  <rect x="330" y="10" width="300" height="160" fill="#f8fbff" stroke="#cccccc"/>
  <rect x="10" y="190" width="300" height="160" fill="#f8fbff" stroke="#cccccc"/>
  <rect x="330" y="190" width="300" height="160" fill="#f8fbff" stroke="#cccccc"/>
  <!-- Constant function y = k -->
  <text x="20" y="30" font-size="14" font-weight="bold">Constant: y = k</text>
  <rect x="50" y="70" width="200" height="40" fill="#d6eaf8" stroke="none"/>
  <line x1="50" y1="110" x2="250" y2="110" stroke="#555"/>
  <line x1="50" y1="110" x2="50" y2="60" stroke="#555"/>
  <line x1="250" y1="110" x2="250" y2="60" stroke="#555"/>
  <line x1="50" y1="70" x2="250" y2="70" stroke="#2e86c1" stroke-width="2"/>
  <text x="55" y="125" font-size="12">Area = k(b − a)</text>
  <!-- Linear function y = m x -->
  <text x="350" y="30" font-size="14" font-weight="bold">Line: y = m·x</text>
  <polygon points="380,110 580,110 580,60" fill="#d6eaf8" stroke="none"/>
  <line x1="380" y1="110" x2="580" y2="110" stroke="#555"/>
  <line x1="380" y1="110" x2="380" y2="60" stroke="#555"/>
  <line x1="380" y1="110" x2="580" y2="60" stroke="#2e86c1" stroke-width="2"/>
  <text x="385" y="125" font-size="12">Area = ½·m·b²</text>
  <!-- Quadratic function y = a x² -->
  <text x="20" y="210" font-size="14" font-weight="bold">Quadratic: y = a·x²</text>
  <!-- Parabolic region -->
  <path d="M50,330 L250,330 Q150,240 50,330 Z" fill="#d6eaf8" stroke="none"/>
  <line x1="50" y1="330" x2="250" y2="330" stroke="#555"/>
  <line x1="50" y1="330" x2="50" y2="240" stroke="#555"/>
  <line x1="250" y1="330" x2="250" y2="240" stroke="#555"/>
  <path d="M50,330 Q150,240 250,330" fill="none" stroke="#2e86c1" stroke-width="2"/>
  <text x="55" y="345" font-size="12">Area = ⅓·a·b³</text>
  <!-- Square‑root function y = √x -->
  <text x="350" y="210" font-size="14" font-weight="bold">Square‑root: y = √x</text>
  <!-- Square‑root region -->
  <path d="M380,330 L580,330 Q480,240 580,270" fill="#d6eaf8" stroke="none"/>
  <line x1="380" y1="330" x2="580" y2="330" stroke="#555"/>
  <line x1="380" y1="330" x2="380" y2="240" stroke="#555"/>
  <line x1="580" y1="330" x2="580" y2="240" stroke="#555"/>
  <path d="M380,330 Q450,290 580,270" fill="none" stroke="#2e86c1" stroke-width="2"/>
  <text x="385" y="345" font-size="12">Area = ⅔·b^{3/2}</text>
</svg>
```
