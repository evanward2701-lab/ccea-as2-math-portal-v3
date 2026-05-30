```markdown
# A21_trigonometry_and_modelling_svg.md

**Unit code:** A21
**Topic ID:** A21TrigonometryAndModelling

## A21TrigonometryAndModellingSVG-001: Harmonic Wave Combination

**Source:** PowerPoint slide 26
**Related lesson section:** 8.3
**Used in placeholder:** `[VISUAL PLACEHOLDER: A21TrigonometryAndModellingSVG-001 | Source: PowerPoint slide 26 | Insert from A21_trigonometry_and_modelling_svg.md | Purpose: Graph showing y = 3sin(x) + 4cos(x) resulting in a single sinusoidal wave of amplitude 5]`
**Purpose:** Visually demonstrates that adding a sine and cosine wave of the same frequency produces a single, perfectly smooth sine wave with a new amplitude and phase shift.

### Creation Notes
This SVG recreates the Desmos-style plot shown on Slide 26. It plots $y = 3\sin x + 4\cos x$, clearly showing that the resulting maximum amplitude is $5$ (since $\sqrt{3^2 + 4^2} = 5$) and that the wave is shifted horizontally.

```svg
<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="600" height="400" fill="#ffffff" />
  
  <!-- Grid Lines -->
  <g stroke="#e0e0e0" stroke-width="1">
    <line x1="0" y1="50" x2="600" y2="50" />
    <line x1="0" y1="100" x2="600" y2="100" />
    <line x1="0" y1="150" x2="600" y2="150" />
    <line x1="0" y1="250" x2="600" y2="250" />
    <line x1="0" y1="300" x2="600" y2="300" />
    <line x1="0" y1="350" x2="600" y2="350" />
    
    <line x1="100" y1="0" x2="100" y2="400" />
    <line x1="200" y1="0" x2="200" y2="400" />
    <line x1="400" y1="0" x2="400" y2="400" />
    <line x1="500" y1="0" x2="500" y2="400" />
  </g>

  <!-- Axes -->
  <g stroke="#333333" stroke-width="2">
    <!-- X Axis -->
    <line x1="0" y1="200" x2="600" y2="200" />
    <!-- Y Axis -->
    <line x1="300" y1="0" x2="300" y2="400" />
  </g>

  <!-- Axis Labels -->
  <g font-family="sans-serif" font-size="14" fill="#333333">
    <text x="580" y="190">x</text>
    <text x="310" y="20">y</text>
    
    <!-- Y Axis ticks -->
    <text x="275" y="55">5</text>
    <text x="275" y="355">-5</text>
    
    <!-- X Axis ticks (Radians) -->
    <text x="390" y="220">π</text>
    <text x="485" y="220">2π</text>
    <text x="185" y="220">-π</text>
    <text x="80" y="220">-2π</text>
  </g>

  <!-- The Wave: y = 5 * sin(x + 0.927) -->
  <!-- Scaled for SVG: Amplitude 5 = 150px. 1 radian = 100/pi px approx 31.8px -->
  <path d="M 0 240.5 
           Q 30 100, 70 50 
           T 165 200 
           T 260 350 
           T 355 200 
           T 450 50 
           T 545 200 
           T 600 320" 
        fill="none" stroke="#d9534f" stroke-width="3" />

  <!-- Annotations -->
  <text x="320" y="45" font-family="sans-serif" font-size="16" fill="#d9534f" font-weight="bold">y = 3sin(x) + 4cos(x) ≡ 5sin(x + 53.1°)</text>
  
  <!-- Amplitude markers -->
  <line x1="295" y1="50" x2="305" y2="50" stroke="#333" stroke-width="2" />
  <line x1="295" y1="350" x2="305" y2="350" stroke="#333" stroke-width="2" />
  
  <path d="M 300 200 L 300 50" stroke="#000" stroke-width="1" stroke-dasharray="5,5" />
  <text x="310" y="130" font-family="sans-serif" font-size="14" fill="#000">Amplitude = 5</text>
</svg>
```
```

