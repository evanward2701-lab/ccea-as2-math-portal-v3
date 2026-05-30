```markdown
# SVG Diagrams for A21 Proofs and Partial Fractions

**Unit code:** A21  
**Topic ID:** A21ProofsAndPartialFractions  

## A21ProofsAndPartialFractionsSVG-001: Illegal vs Legal Cancelling in Algebraic Fractions  

**Source:** PowerPoint slide 13  
**Related lesson section:** 8.2  
**Used in placeholder:** `[VISUAL PLACEHOLDER: A21ProofsAndPartialFractionsSVG-001 | ...]`  
**Purpose:** Visual showing the "illegal move" of cancelling terms across an addition sign, contrasted with the correct method of factorising first.  

### Creation Notes  
This SVG recreates the warning from Slide 13 about "Crimes against Mathematics". It uses a side-by-side comparison. On the left, it shows the common student error of cancelling a variable that is part of an addition. On the right, it shows the correct method of factorising the numerator first before cancelling the common factor.

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 300" width="100%" height="100%">
  <defs>
    <style>
      .text-math { font-family: 'Times New Roman', serif; font-size: 32px; font-style: italic; }
      .text-title { font-family: Arial, sans-serif; font-size: 24px; font-weight: bold; }
      .text-sub { font-family: Arial, sans-serif; font-size: 18px; fill: #555; }
      .line-fraction { stroke: #000; stroke-width: 3; }
      .line-illegal { stroke: #e53935; stroke-width: 4; stroke-linecap: round; }
      .line-legal { stroke: #43a047; stroke-width: 4; stroke-linecap: round; }
      .box-illegal { fill: #ffebee; stroke: #e53935; stroke-width: 2; rx: 10; }
      .box-legal { fill: #e8f5e9; stroke: #43a047; stroke-width: 2; rx: 10; }
    </style>
  </defs>

  <!-- Illegal Move Box -->
  <rect x="50" y="20" width="320" height="250" class="box-illegal" />
  <text x="210" y="60" text-anchor="middle" class="text-title" fill="#c62828">ILLEGAL MOVE</text>
  <text x="210" y="90" text-anchor="middle" class="text-sub">Cancelling across addition</text>

  <!-- Illegal Math -->
  <text x="120" y="160" class="text-math">ac + ab</text>
  <line x1="110" y1="175" x2="230" y2="175" class="line-fraction" />
  <text x="160" y="215" class="text-math">b</text>

  <text x="250" y="185" class="text-math" fill="#c62828">≠</text>
  <text x="280" y="185" class="text-math">ac + a</text>

  <!-- Red Slashes for Illegal Cancel -->
  <line x1="195" y1="165" x2="220" y2="135" class="line-illegal" />
  <line x1="160" y1="220" x2="185" y2="190" class="line-illegal" />

  <!-- Legal Move Box -->
  <rect x="430" y="20" width="320" height="250" class="box-legal" />
  <text x="590" y="60" text-anchor="middle" class="text-title" fill="#2e7d32">LEGAL MOVE</text>
  <text x="590" y="90" text-anchor="middle" class="text-sub">Factorise first, then cancel</text>

  <!-- Legal Math -->
  <text x="480" y="160" class="text-math">b(c + a)</text>
  <line x1="470" y1="175" x2="590" y2="175" class="line-fraction" />
  <text x="520" y="215" class="text-math">b</text>

  <text x="610" y="185" class="text-math" fill="#2e7d32">=</text>
  <text x="640" y="185" class="text-math">c + a</text>

  <!-- Green Slashes for Legal Cancel -->
  <line x1="475" y1="165" x2="500" y2="135" class="line-legal" />
  <line x1="520" y1="220" x2="545" y2="190" class="line-legal" />

</svg>
```
```

