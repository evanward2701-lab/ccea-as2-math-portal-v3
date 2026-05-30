# A21_parametric_equations_svg.md

**Unit code:** A21  
**Topic ID:** A21ParametricEquations  

## A21ParametricEquationsSVG-001: Parametric Parabola with Time Stamps  

**Source:** PowerPoint slide 5  
**Related lesson section:** 8.1  
**Used in placeholder:** `[VISUAL PLACEHOLDER: A21ParametricEquationsSVG-001 | ...]`  
**Purpose:** Show the parabola $y = 0.25x^2$ with specific $t$ values labelled at points on the curve.  

### Creation Notes  
This SVG draws a simple parabola $y = x^2/4$ (from $x = 2t, y = t^2$) and labels points with their corresponding $t$ values to show how the parameter drives the curve.  

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-100 -20 200 120" width="100%" height="100%">
  <!-- Grid and Axes -->
  <g stroke="#e0e0e0" stroke-width="1">
    <line x1="-100" y1="0" x2="100" y2="0" stroke="#000" stroke-width="1.5"/>
    <line x1="0" y1="-20" x2="0" y2="100" stroke="#000" stroke-width="1.5"/>
  </g>
  
  <!-- Curve y = x^2 / 4 -->
  <!-- Scale: 1 unit = 10px. So x=2t -> 20t, y=t^2 -> 10t^2. SVG y is down, so y = -10t^2 -->
  <path d="M -60 -90 Q -30 -22.5 0 0 T 60 -90" fill="none" stroke="#007bff" stroke-width="2"/>
  
  <!-- Points and Labels -->
  <!-- t = -3, x = -6, y = 9 -> (-60, -90) -->
  <circle cx="-60" cy="-90" r="3" fill="#dc3545"/>
  <text x="-85" y="-95" font-family="sans-serif" font-size="10" fill="#dc3545">t = -3</text>
  
  <!-- t = -2, x = -4, y = 4 -> (-40, -40) -->
  <circle cx="-40" cy="-40" r="3" fill="#dc3545"/>
  <text x="-65" y="-40" font-family="sans-serif" font-size="10" fill="#dc3545">t = -2</text>
  
  <!-- t = 0, x = 0, y = 0 -> (0, 0) -->
  <circle cx="0" cy="0" r="3" fill="#dc3545"/>
  <text x="-10" y="15" font-family="sans-serif" font-size="10" fill="#dc3545">t = 0</text>
  
  <!-- t = 2, x = 4, y = 4 -> (40, -40) -->
  <circle cx="40" cy="-40" r="3" fill="#dc3545"/>
  <text x="45" y="-40" font-family="sans-serif" font-size="10" fill="#dc3545">t = 2</text>
  
  <!-- t = 3, x = 6, y = 9 -> (60, -90) -->
  <circle cx="60" cy="-90" r="3" fill="#dc3545"/>
  <text x="65" y="-95" font-family="sans-serif" font-size="10" fill="#dc3545">t = 3</text>
  
  <!-- Axis Labels -->
  <text x="90" y="15" font-family="sans-serif" font-size="12">x</text>
  <text x="-15" y="-90" font-family="sans-serif" font-size="12">y</text>
</svg>
```

