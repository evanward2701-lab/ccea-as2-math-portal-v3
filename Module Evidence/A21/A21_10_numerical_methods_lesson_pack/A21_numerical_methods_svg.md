```markdown
# A21_numerical_methods_svg.md PART 1A

**Unit code:** A21  
**Topic ID:** A21NumericalMethods  

## A21NumericalMethodsSVG-001: Staircase Diagram (Converging)

**Source:** PowerPoint slide 14  
**Related lesson section:** 8.4  
**Used in placeholder:** `[VISUAL PLACEHOLDER: A21NumericalMethodsSVG-001 | ...]`  
**Purpose:** Show a converging staircase diagram mapping $x_0$ to $x_1$ to $x_2$.  

### Creation Notes  
This SVG represents the iterative process $x_{n+1} = \sqrt{x_n + 1}$. It plots the curve $y = \sqrt{x+1}$ and the line $y = x$. It then draws the orthogonal path from $x_0$ to the curve, across to the line, and down to $x_1$, repeating to show a staircase converging on the root.

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="100%" height="100%">
  <!-- Background -->
  <rect width="600" height="400" fill="#ffffff"/>
  
  <!-- Grid Lines -->
  <g stroke="#e0e0e0" stroke-width="1">
    <line x1="100" y1="0" x2="100" y2="400"/>
    <line x1="200" y1="0" x2="200" y2="400"/>
    <line x1="300" y1="0" x2="300" y2="400"/>
    <line x1="400" y1="0" x2="400" y2="400"/>
    <line x1="500" y1="0" x2="500" y2="400"/>
    <line x1="0" y1="100" x2="600" y2="100"/>
    <line x1="0" y1="200" x2="600" y2="200"/>
    <line x1="0" y1="300" x2="600" y2="300"/>
  </g>

  <!-- Axes -->
  <g stroke="#000000" stroke-width="2">
    <!-- X Axis (y=300) -->
    <line x1="50" y1="300" x2="550" y2="300"/>
    <!-- Y Axis (x=100) -->
    <line x1="100" y1="50" x2="100" y2="350"/>
  </g>
  
  <!-- Axis Labels -->
  <g font-family="sans-serif" font-size="14" fill="#000000">
    <text x="560" y="305">x</text>
    <text x="95" y="40">y</text>
    <text x="195" y="320">1</text>
    <text x="295" y="320">2</text>
    <text x="395" y="320">3</text>
    <text x="80" y="205">1</text>
    <text x="80" y="105">2</text>
  </g>

  <!-- Line y = x -->
  <!-- Passes through (100,300) which is (0,0) and (400,0) which is (3,3) -->
  <line x1="50" y1="350" x2="350" y2="50" stroke="#ff0000" stroke-width="2"/>
  <text x="320" y="80" font-family="sans-serif" font-size="16" fill="#ff0000" transform="rotate(-45 320,80)">y = x</text>

  <!-- Curve y = sqrt(x+1) -->
  <!-- (0,1)->(100,200), (1, 1.414)->(200, 158.6), (2, 1.732)->(300, 126.8), (3, 2)->(400, 100) -->
  <path d="M 0 300 Q 50 220 100 200 T 200 158.6 T 300 126.8 T 400 100 T 500 76.4" fill="none" stroke="#0078d7" stroke-width="2"/>
  <text x="420" y="90" font-family="sans-serif" font-size="16" fill="#0078d7">y = √(x+1)</text>

  <!-- Staircase Iteration -->
  <!-- Start at x0 = 1 (200, 300) -->
  <!-- Go up to curve: y = sqrt(2) = 1.414 -> (200, 158.6) -->
  <!-- Go right to line y=x: x = 1.414 -> (241.4, 158.6) -->
  <!-- Go down to x-axis to show x1: (241.4, 300) -->
  <!-- Go up to curve: y = sqrt(2.414) = 1.55 -> (241.4, 145) -->
  <!-- Go right to line y=x: x = 1.55 -> (255, 145) -->
  <!-- Go down to x-axis to show x2: (255, 300) -->
  
  <g stroke="#000000" stroke-width="2" stroke-dasharray="4,4" fill="none">
    <!-- x0 to curve -->
    <line x1="200" y1="300" x2="200" y2="158.6"/>
    <!-- curve to line -->
    <line x1="200" y1="158.6" x2="241.4" y2="158.6"/>
    <!-- line to x-axis (x1) -->
    <line x1="241.4" y1="158.6" x2="241.4" y2="300"/>
    
    <!-- x1 to curve -->
    <line x1="241.4" y1="158.6" x2="241.4" y2="145"/>
    <!-- curve to line -->
    <line x1="241.4" y1="145" x2="255" y2="145"/>
    <!-- line to x-axis (x2) -->
    <line x1="255" y1="145" x2="255" y2="300"/>
  </g>

  <!-- Labels for x0, x1, x2 -->
  <g font-family="sans-serif" font-size="14" font-style="italic" fill="#000000">
    <text x="192" y="320">x<tspan baseline-shift="sub" font-size="10">0</tspan></text>
    <text x="233" y="320">x<tspan baseline-shift="sub" font-size="10">1</tspan></text>
    <text x="255" y="320">x<tspan baseline-shift="sub" font-size="10">2</tspan></text>
  </g>
  
  <!-- Root alpha -->
  <circle cx="261.8" cy="138.2" r="4" fill="#000000"/>
  <text x="270" y="135" font-family="sans-serif" font-size="16" font-style="italic" fill="#000000">α</text>

</svg>
```
```
```markdown
## A21NumericalMethodsSVG-002: Cobweb Diagram (Converging)

**Source:** PowerPoint slide 15  
**Related lesson section:** 8.4  
**Used in placeholder:** `[VISUAL PLACEHOLDER: A21NumericalMethodsSVG-002 | ...]`  
**Purpose:** Show a converging cobweb diagram spiralling inwards.  

### Creation Notes  
This SVG illustrates the iteration $x_{n+1} = \frac{1}{x_n - 1}$. It plots the curve $y = \frac{1}{x-1}$ (a decreasing curve in the relevant section) and the line $y = x$. The path starts at $x_0$, drops to the curve, moves horizontally to $y=x$, vertically to the curve, and so on, creating a spiral (cobweb) that converges on the root $\alpha$.

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="100%" height="100%">
  <!-- Background -->
  <rect width="600" height="400" fill="#ffffff"/>
  
  <!-- Grid Lines -->
  <g stroke="#e0e0e0" stroke-width="1">
    <line x1="100" y1="0" x2="100" y2="400"/>
    <line x1="200" y1="0" x2="200" y2="400"/>
    <line x1="300" y1="0" x2="300" y2="400"/>
    <line x1="400" y1="0" x2="400" y2="400"/>
    <line x1="500" y1="0" x2="500" y2="400"/>
    <line x1="0" y1="100" x2="600" y2="100"/>
    <line x1="0" y1="200" x2="600" y2="200"/>
    <line x1="0" y1="300" x2="600" y2="300"/>
  </g>

  <!-- Axes -->
  <g stroke="#000000" stroke-width="2">
    <!-- X Axis (y=200) -->
    <line x1="50" y1="200" x2="550" y2="200"/>
    <!-- Y Axis (x=400) -->
    <line x1="400" y1="50" x2="400" y2="350"/>
  </g>
  
  <!-- Axis Labels -->
  <g font-family="sans-serif" font-size="14" fill="#000000">
    <text x="560" y="205">x</text>
    <text x="385" y="40">y</text>
    <text x="295" y="220">-1</text>
    <text x="195" y="220">-2</text>
    <text x="410" y="305">-1</text>
  </g>

  <!-- Line y = x -->
  <line x1="150" y1="450" x2="500" y2="100" stroke="#ff0000" stroke-width="2"/>
  <text x="480" y="110" font-family="sans-serif" font-size="16" fill="#ff0000" transform="rotate(-45 480,110)">y = x</text>

  <!-- Curve y = 1/(x-1) (Approximated for visual clarity in the negative quadrant) -->
  <path d="M 50 210 Q 200 220 300 250 T 380 380" fill="none" stroke="#0078d7" stroke-width="2"/>
  <text x="420" y="350" font-family="sans-serif" font-size="16" fill="#0078d7">y = 1/(x-1)</text>

  <!-- Cobweb Iteration -->
  <!-- Start at x0 = -2 (200, 200) -->
  <!-- Curve intersection approx (200, 233) -->
  <!-- Line intersection approx (367, 233) -->
  <!-- Curve intersection approx (367, 280) -->
  <!-- Line intersection approx (320, 280) -->
  <!-- Curve intersection approx (320, 260) -->
  <!-- Line intersection approx (340, 260) -->
  
  <g stroke="#000000" stroke-width="2" stroke-dasharray="4,4" fill="none">
    <!-- x0 to curve -->
    <line x1="150" y1="200" x2="150" y2="218"/>
    <!-- curve to line -->
    <line x1="150" y1="218" x2="382" y2="218"/>
    <!-- line to curve -->
    <line x1="382" y1="218" x2="382" y2="285"/>
    <!-- curve to line -->
    <line x1="382" y1="285" x2="315" y2="285"/>
    <!-- line to curve -->
    <line x1="315" y1="285" x2="315" y2="255"/>
    <!-- curve to line -->
    <line x1="315" y1="255" x2="345" y2="255"/>
    <!-- line to curve -->
    <line x1="345" y1="255" x2="345" y2="268"/>
  </g>

  <!-- Labels for x0, x1, x2 -->
  <g font-family="sans-serif" font-size="14" font-style="italic" fill="#000000">
    <text x="142" y="190">x<tspan baseline-shift="sub" font-size="10">0</tspan></text>
    <text x="375" y="190">x<tspan baseline-shift="sub" font-size="10">1</tspan></text>
    <text x="305" y="190">x<tspan baseline-shift="sub" font-size="10">2</tspan></text>
  </g>
  
  <!-- Root alpha -->
  <circle cx="338" cy="262" r="4" fill="#000000"/>
  <text x="325" y="245" font-family="sans-serif" font-size="16" font-style="italic" fill="#000000">α</text>

</svg>
```

## A21NumericalMethodsSVG-003: Newton-Raphson Tangent

**Source:** PowerPoint slide 19  
**Related lesson section:** 8.5  
**Used in placeholder:** `[VISUAL PLACEHOLDER: A21NumericalMethodsSVG-003 | ...]`  
**Purpose:** Show the Newton-Raphson tangent dropping from the curve to the x-axis to find $x_1$.  

### Creation Notes  
This SVG illustrates the core geometric principle of the Newton-Raphson method. It shows a curve $y=f(x)$, an initial guess $x_0$, a vertical line up to the curve, and the tangent line at that point intersecting the x-axis at $x_1$, which is closer to the true root $\alpha$.

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="100%" height="100%">
  <!-- Background -->
  <rect width="600" height="400" fill="#ffffff"/>

  <!-- Axes -->
  <g stroke="#000000" stroke-width="2">
    <!-- X Axis -->
    <line x1="50" y1="300" x2="550" y2="300"/>
    <!-- Y Axis -->
    <line x1="100" y1="50" x2="100" y2="350"/>
    <!-- Arrows -->
    <polygon points="550,295 560,300 550,305" fill="#000000"/>
    <polygon points="95,50 100,40 105,50" fill="#000000"/>
  </g>
  
  <!-- Axis Labels -->
  <g font-family="sans-serif" font-size="16" font-style="italic" fill="#000000">
    <text x="565" y="305">x</text>
    <text x="80" y="50">y</text>
  </g>

  <!-- Curve y = f(x) -->
  <path d="M 50 350 Q 250 300 350 150 T 400 50" fill="none" stroke="#0078d7" stroke-width="3"/>
  <text x="340" y="120" font-family="sans-serif" font-size="16" font-style="italic" fill="#0078d7" transform="rotate(-65 340,120)">y = f(x)</text>

  <!-- Newton-Raphson Iteration -->
  <!-- x0 = 400 -->
  <!-- Point on curve = (400, 50) -->
  <!-- Tangent line from (400,50) to (320, 300) -->
  
  <!-- Vertical line from x0 to curve -->
  <line x1="400" y1="300" x2="400" y2="50" stroke="#000000" stroke-width="2" stroke-dasharray="5,5"/>
  
  <!-- Tangent Line -->
  <line x1="420" y1="-12.5" x2="300" y2="362.5" stroke="#ff0000" stroke-width="2"/>

  <!-- Vertical line from x1 to curve -->
  <line x1="320" y1="300" x2="320" y2="215" stroke="#000000" stroke-width="2" stroke-dasharray="5,5"/>
  
  <!-- Second Tangent Line -->
  <line x1="350" y1="110" x2="280" y2="355" stroke="#ff0000" stroke-width="2"/>

  <!-- Labels for x0, x1, x2, alpha -->
  <g font-family="sans-serif" font-size="16" font-style="italic" fill="#000000">
    <text x="390" y="320">x<tspan baseline-shift="sub" font-size="12">0</tspan></text>
    <text x="310" y="320">x<tspan baseline-shift="sub" font-size="12">1</tspan></text>
    <text x="285" y="320">x<tspan baseline-shift="sub" font-size="12">2</tspan></text>
    <text x="240" y="290">α</text>
  </g>
  
  <!-- Root alpha point -->
  <circle cx="250" cy="300" r="4" fill="#000000"/>

</svg>
```
```

