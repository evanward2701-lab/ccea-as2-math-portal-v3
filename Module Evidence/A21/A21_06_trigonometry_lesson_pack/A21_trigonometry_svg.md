```markdown
# A21_trigonometry_svg.md PART 1A

**Unit code:** A21  
**Topic ID:** A21Trigonometry  

## A21TrigonometrySVG-001: Graph of cosec x and sin x

**Source:** PowerPoint slide 10  
**Related lesson section:** 8.1  
**Used in placeholder:** `[VISUAL PLACEHOLDER: A21TrigonometrySVG-001 | ...]`  
**Purpose:** Graph of y = cosec x overlaid on y = sin x showing asymptotes  

### Creation Notes  
This SVG plots $y = \sin x$ in a light dashed line and $y = \operatorname{cosec} x$ in a solid bold line. Vertical asymptotes are drawn at $x = 0, \pi, 2\pi$. The axes are labelled in radians.

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="100%" height="100%">
  <defs>
    <style>
      .axis { stroke: #333; stroke-width: 2; }
      .grid { stroke: #ddd; stroke-width: 1; stroke-dasharray: 4,4; }
      .sin-curve { stroke: #888; stroke-width: 2; stroke-dasharray: 5,5; fill: none; }
      .cosec-curve { stroke: #6c5ce7; stroke-width: 3; fill: none; }
      .asymptote { stroke: #d63031; stroke-width: 2; stroke-dasharray: 6,4; }
      .label { font-family: sans-serif; font-size: 14px; fill: #333; }
      .math { font-family: serif; font-style: italic; font-size: 16px; fill: #333; }
    </style>
  </defs>

  <!-- Background -->
  <rect width="100%" height="100%" fill="#ffffff"/>

  <!-- Grid lines -->
  <line x1="50" y1="100" x2="550" y2="100" class="grid" />
  <line x1="50" y1="300" x2="550" y2="300" class="grid" />

  <!-- Asymptotes -->
  <line x1="150" y1="20" x2="150" y2="380" class="asymptote" />
  <line x1="350" y1="20" x2="350" y2="380" class="asymptote" />
  <line x1="550" y1="20" x2="550" y2="380" class="asymptote" />

  <!-- Axes -->
  <line x1="50" y1="200" x2="570" y2="200" class="axis" /> <!-- X axis -->
  <line x1="150" y1="20" x2="150" y2="380" class="axis" /> <!-- Y axis (at x=0) -->

  <!-- Arrows -->
  <polygon points="570,200 560,195 560,205" fill="#333" />
  <polygon points="150,20 145,30 155,30" fill="#333" />

  <!-- Labels -->
  <text x="575" y="215" class="math">x</text>
  <text x="130" y="30" class="math">y</text>
  <text x="130" y="105" class="label">1</text>
  <text x="120" y="305" class="label">-1</text>
  
  <text x="245" y="220" class="math">π/2</text>
  <text x="345" y="220" class="math">π</text>
  <text x="440" y="220" class="math">3π/2</text>
  <text x="540" y="220" class="math">2π</text>

  <!-- y = sin x curve -->
  <path d="M 150 200 Q 200 20, 250 100 T 350 200 Q 400 380, 450 300 T 550 200" class="sin-curve" />

  <!-- y = cosec x curve -->
  <!-- Between 0 and pi -->
  <path d="M 165 20 Q 200 90, 250 100 Q 300 90, 335 20" class="cosec-curve" />
  <!-- Between pi and 2pi -->
  <path d="M 365 380 Q 400 310, 450 300 Q 500 310, 535 380" class="cosec-curve" />

  <!-- Function Labels -->
  <text x="260" y="160" class="math" fill="#888">y = sin x</text>
  <text x="260" y="60" class="math" fill="#6c5ce7">y = cosec x</text>
</svg>
```

## A21TrigonometrySVG-002: Graph of sec x and cos x

**Source:** PowerPoint slide 11  
**Related lesson section:** 8.1  
**Used in placeholder:** `[VISUAL PLACEHOLDER: A21TrigonometrySVG-002 | ...]`  
**Purpose:** Graph of y = sec x overlaid on y = cos x showing asymptotes  

### Creation Notes  
This SVG plots $y = \cos x$ in a light dashed line and $y = \sec x$ in a solid bold line. Vertical asymptotes are drawn at $x = \pi/2, 3\pi/2$. The axes are labelled in radians.

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="100%" height="100%">
  <defs>
    <style>
      .axis { stroke: #333; stroke-width: 2; }
      .grid { stroke: #ddd; stroke-width: 1; stroke-dasharray: 4,4; }
      .cos-curve { stroke: #888; stroke-width: 2; stroke-dasharray: 5,5; fill: none; }
      .sec-curve { stroke: #0984e3; stroke-width: 3; fill: none; }
      .asymptote { stroke: #d63031; stroke-width: 2; stroke-dasharray: 6,4; }
      .label { font-family: sans-serif; font-size: 14px; fill: #333; }
      .math { font-family: serif; font-style: italic; font-size: 16px; fill: #333; }
    </style>
  </defs>

  <!-- Background -->
  <rect width="100%" height="100%" fill="#ffffff"/>

  <!-- Grid lines -->
  <line x1="50" y1="100" x2="550" y2="100" class="grid" />
  <line x1="50" y1="300" x2="550" y2="300" class="grid" />

  <!-- Asymptotes -->
  <line x1="250" y1="20" x2="250" y2="380" class="asymptote" />
  <line x1="450" y1="20" x2="450" y2="380" class="asymptote" />

  <!-- Axes -->
  <line x1="50" y1="200" x2="570" y2="200" class="axis" /> <!-- X axis -->
  <line x1="150" y1="20" x2="150" y2="380" class="axis" /> <!-- Y axis (at x=0) -->

  <!-- Arrows -->
  <polygon points="570,200 560,195 560,205" fill="#333" />
  <polygon points="150,20 145,30 155,30" fill="#333" />

  <!-- Labels -->
  <text x="575" y="215" class="math">x</text>
  <text x="130" y="30" class="math">y</text>
  <text x="130" y="105" class="label">1</text>
  <text x="120" y="305" class="label">-1</text>
  
  <text x="245" y="220" class="math">π/2</text>
  <text x="345" y="220" class="math">π</text>
  <text x="440" y="220" class="math">3π/2</text>
  <text x="540" y="220" class="math">2π</text>

  <!-- y = cos x curve -->
  <path d="M 150 100 Q 200 100, 250 200 T 350 300 Q 400 300, 450 200 T 550 100" class="cos-curve" />

  <!-- y = sec x curve -->
  <!-- Between 0 and pi/2 -->
  <path d="M 150 100 Q 200 90, 235 20" class="sec-curve" />
  <!-- Between pi/2 and 3pi/2 -->
  <path d="M 265 380 Q 300 310, 350 300 Q 400 310, 435 380" class="sec-curve" />
  <!-- Between 3pi/2 and 2pi -->
  <path d="M 465 20 Q 500 90, 550 100" class="sec-curve" />

  <!-- Function Labels -->
  <text x="360" y="180" class="math" fill="#888">y = cos x</text>
  <text x="360" y="360" class="math" fill="#0984e3">y = sec x</text>
</svg>
```
```
```markdown
## A21TrigonometrySVG-003: Graph of cot x and tan x

**Source:** PowerPoint slide 12  
**Related lesson section:** 8.1  
**Used in placeholder:** `[VISUAL PLACEHOLDER: A21TrigonometrySVG-003 | ...]`  
**Purpose:** Graph of y = cot x overlaid on y = tan x showing asymptotes  

### Creation Notes  
This SVG plots $y = \tan x$ in a light dashed line and $y = \cot x$ in a solid bold line. Vertical asymptotes for $\cot x$ are at $x = 0, \pi, 2\pi$, and for $\tan x$ at $x = \pi/2, 3\pi/2$. The axes are labelled in radians.

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="100%" height="100%">
  <defs>
    <style>
      .axis { stroke: #333; stroke-width: 2; }
      .grid { stroke: #ddd; stroke-width: 1; stroke-dasharray: 4,4; }
      .tan-curve { stroke: #888; stroke-width: 2; stroke-dasharray: 5,5; fill: none; }
      .cot-curve { stroke: #00b894; stroke-width: 3; fill: none; }
      .asymptote-tan { stroke: #888; stroke-width: 1; stroke-dasharray: 4,4; }
      .asymptote-cot { stroke: #d63031; stroke-width: 2; stroke-dasharray: 6,4; }
      .label { font-family: sans-serif; font-size: 14px; fill: #333; }
      .math { font-family: serif; font-style: italic; font-size: 16px; fill: #333; }
    </style>
  </defs>

  <!-- Background -->
  <rect width="100%" height="100%" fill="#ffffff"/>

  <!-- Grid lines -->
  <line x1="50" y1="100" x2="550" y2="100" class="grid" />
  <line x1="50" y1="300" x2="550" y2="300" class="grid" />

  <!-- Asymptotes for cot x -->
  <line x1="150" y1="20" x2="150" y2="380" class="asymptote-cot" />
  <line x1="350" y1="20" x2="350" y2="380" class="asymptote-cot" />
  <line x1="550" y1="20" x2="550" y2="380" class="asymptote-cot" />

  <!-- Asymptotes for tan x -->
  <line x1="250" y1="20" x2="250" y2="380" class="asymptote-tan" />
  <line x1="450" y1="20" x2="450" y2="380" class="asymptote-tan" />

  <!-- Axes -->
  <line x1="50" y1="200" x2="570" y2="200" class="axis" /> <!-- X axis -->
  <line x1="150" y1="20" x2="150" y2="380" class="axis" /> <!-- Y axis (at x=0) -->

  <!-- Arrows -->
  <polygon points="570,200 560,195 560,205" fill="#333" />
  <polygon points="150,20 145,30 155,30" fill="#333" />

  <!-- Labels -->
  <text x="575" y="215" class="math">x</text>
  <text x="130" y="30" class="math">y</text>
  <text x="130" y="105" class="label">1</text>
  <text x="120" y="305" class="label">-1</text>
  
  <text x="245" y="220" class="math">π/2</text>
  <text x="345" y="220" class="math">π</text>
  <text x="440" y="220" class="math">3π/2</text>
  <text x="540" y="220" class="math">2π</text>

  <!-- y = tan x curve -->
  <path d="M 150 200 Q 200 200, 240 20" class="tan-curve" />
  <path d="M 260 380 Q 300 200, 350 200 Q 400 200, 440 20" class="tan-curve" />
  <path d="M 460 380 Q 500 200, 550 200" class="tan-curve" />

  <!-- y = cot x curve -->
  <path d="M 160 20 Q 200 200, 250 200 Q 300 200, 340 380" class="cot-curve" />
  <path d="M 360 20 Q 400 200, 450 200 Q 500 200, 540 380" class="cot-curve" />

  <!-- Function Labels -->
  <text x="270" y="100" class="math" fill="#888">y = tan x</text>
  <text x="270" y="300" class="math" fill="#00b894">y = cot x</text>
</svg>
```

## A21TrigonometrySVG-004: Graphs of Inverse Trigonometric Functions

**Source:** PowerPoint slide 25-26  
**Related lesson section:** 8.6  
**Used in placeholder:** `[VISUAL PLACEHOLDER: A21TrigonometrySVG-004 | ...]`  
**Purpose:** Graphs of arcsin, arccos, and arctan showing restricted domains and ranges  

### Creation Notes  
This SVG creates a three-panel composite showing $y = \arcsin x$, $y = \arccos x$, and $y = \arctan x$ side-by-side, clearly marking the restricted domains and ranges as required by the specification.

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 300" width="100%" height="100%">
  <defs>
    <style>
      .axis { stroke: #333; stroke-width: 2; }
      .curve { stroke: #e17055; stroke-width: 3; fill: none; }
      .asymptote { stroke: #888; stroke-width: 1; stroke-dasharray: 4,4; }
      .label { font-family: sans-serif; font-size: 12px; fill: #333; }
      .math { font-family: serif; font-style: italic; font-size: 14px; fill: #333; }
      .title { font-family: sans-serif; font-size: 16px; font-weight: bold; fill: #333; text-anchor: middle; }
    </style>
  </defs>

  <!-- Background -->
  <rect width="100%" height="100%" fill="#ffffff"/>

  <!-- PANEL 1: arcsin x -->
  <g transform="translate(0, 0)">
    <text x="150" y="30" class="title">y = arcsin x</text>
    <line x1="50" y1="150" x2="250" y2="150" class="axis" /> <!-- X axis -->
    <line x1="150" y1="50" x2="150" y2="250" class="axis" /> <!-- Y axis -->
    
    <text x="240" y="140" class="math">x</text>
    <text x="160" y="60" class="math">y</text>
    
    <text x="210" y="165" class="label">1</text>
    <text x="80" y="165" class="label">-1</text>
    <text x="160" y="85" class="math">π/2</text>
    <text x="160" y="225" class="math">-π/2</text>

    <path d="M 90 220 Q 150 220, 150 150 Q 150 80, 210 80" class="curve" />
  </g>

  <!-- PANEL 2: arccos x -->
  <g transform="translate(300, 0)">
    <text x="150" y="30" class="title">y = arccos x</text>
    <line x1="50" y1="220" x2="250" y2="220" class="axis" /> <!-- X axis -->
    <line x1="150" y1="50" x2="150" y2="250" class="axis" /> <!-- Y axis -->
    
    <text x="240" y="210" class="math">x</text>
    <text x="160" y="60" class="math">y</text>
    
    <text x="210" y="235" class="label">1</text>
    <text x="80" y="235" class="label">-1</text>
    <text x="160" y="85" class="math">π</text>
    <text x="160" y="155" class="math">π/2</text>

    <path d="M 90 80 Q 150 80, 150 150 Q 150 220, 210 220" class="curve" />
  </g>

  <!-- PANEL 3: arctan x -->
  <g transform="translate(600, 0)">
    <text x="150" y="30" class="title">y = arctan x</text>
    <line x1="30" y1="150" x2="270" y2="150" class="axis" /> <!-- X axis -->
    <line x1="150" y1="50" x2="150" y2="250" class="axis" /> <!-- Y axis -->
    
    <line x1="30" y1="80" x2="270" y2="80" class="asymptote" />
    <line x1="30" y1="220" x2="270" y2="220" class="asymptote" />

    <text x="260" y="140" class="math">x</text>
    <text x="160" y="60" class="math">y</text>
    
    <text x="160" y="75" class="math">π/2</text>
    <text x="160" y="235" class="math">-π/2</text>

    <path d="M 40 215 Q 150 210, 150 150 Q 150 90, 260 85" class="curve" />
  </g>
</svg>
```
```

