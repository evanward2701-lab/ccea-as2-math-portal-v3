# SVG Diagrams for AS1 differentiation

This file contains the SVG diagrams used in the differentiation lesson.  Each diagram is described with its title, source and purpose, and the corresponding code block can be rendered in a Markdown previewer that supports embedded SVG.  All coordinates and styling have been chosen for clarity when teaching calculus concepts.

## SVG‑001: Derivative Sign and Function Behaviour
Source: AI‑proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: SVG-001 | Source: AI-proposed teaching enhancement, not present in lesson PDF | Insert from AS1_differentiation_svg.md | Purpose: show how the sign of the derivative relates to increasing/decreasing behaviour]`  
Purpose: This table summarises how the sign of the first derivative \(f'(x)\) determines whether a function is increasing, decreasing or stationary at a point.  It reinforces the connection between algebraic sign and the qualitative behaviour of the curve.

```svg
<svg width="420" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Derivative sign table">
  <!-- Table outline -->
  <rect x="0" y="0" width="420" height="140" fill="white" stroke="black" />
  <!-- Header row -->
  <rect x="0" y="0" width="420" height="35" fill="#e6f2ff" stroke="black" />
  <text x="105" y="22" font-family="Arial" font-size="14" font-weight="bold">Sign of \(f'(x)\)</text>
  <text x="280" y="22" font-family="Arial" font-size="14" font-weight="bold">Function behaviour</text>
  <!-- Row 1: positive -->
  <rect x="0" y="35" width="420" height="35" fill="#f9f9f9" stroke="black" />
  <text x="65" y="57" font-family="Arial" font-size="13">\(f'(x) &gt; 0\)</text>
  <text x="250" y="57" font-family="Arial" font-size="13">Function strictly increasing</text>
  <!-- Row 2: zero -->
  <rect x="0" y="70" width="420" height="35" fill="white" stroke="black" />
  <text x="65" y="92" font-family="Arial" font-size="13">\(f'(x) = 0\)</text>
  <text x="250" y="92" font-family="Arial" font-size="13">Stationary point (turning or flat)</text>
  <!-- Row 3: negative -->
  <rect x="0" y="105" width="420" height="35" fill="#f9f9f9" stroke="black" />
  <text x="65" y="127" font-family="Arial" font-size="13">\(f'(x) &lt; 0\)</text>
  <text x="250" y="127" font-family="Arial" font-size="13">Function strictly decreasing</text>
</svg>
```

## SVG‑002: Power Rule and Special Cases
Source: lesson PDF p.2  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: SVG-002 | Source: lesson PDF p.2 | Insert from AS1_differentiation_svg.md | Purpose: summarise the power rule and special cases]`  
Purpose: This table collects the general power rule together with common special cases for differentiation.  It helps students quickly recall derivatives of basic functions, including constants, negative and fractional exponents.

```svg
<svg width="550" height="185" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Power rule table">
  <rect x="0" y="0" width="550" height="185" fill="white" stroke="black" />
  <!-- Header row -->
  <rect x="0" y="0" width="550" height="35" fill="#e6f2ff" stroke="black" />
  <text x="60" y="22" font-family="Arial" font-size="14" font-weight="bold">Function \(y\)</text>
  <text x="240" y="22" font-family="Arial" font-size="14" font-weight="bold">Derivative \(dy/dx\)</text>
  <text x="420" y="22" font-family="Arial" font-size="14" font-weight="bold">Notes</text>
  <!-- Row: general power -->
  <rect x="0" y="35" width="550" height="30" fill="#f9f9f9" stroke="black" />
  <text x="35" y="55" font-family="Arial" font-size="13">\(x^n\)</text>
  <text x="240" y="55" font-family="Arial" font-size="13">\(n\,x^{n-1}\)</text>
  <text x="420" y="55" font-family="Arial" font-size="13">General power rule</text>
  <!-- Row: constant -->
  <rect x="0" y="65" width="550" height="30" fill="white" stroke="black" />
  <text x="35" y="85" font-family="Arial" font-size="13">\(c\) (constant)</text>
  <text x="240" y="85" font-family="Arial" font-size="13">0</text>
  <text x="420" y="85" font-family="Arial" font-size="13">Constants vanish</text>
  <!-- Row: negative exponent -->
  <rect x="0" y="95" width="550" height="30" fill="#f9f9f9" stroke="black" />
  <text x="35" y="115" font-family="Arial" font-size="13">\(x^{-n}\)</text>
  <text x="240" y="115" font-family="Arial" font-size="13">\(-n\,x^{-n-1}\)</text>
  <text x="420" y="115" font-family="Arial" font-size="13">Negative powers allowed</text>
  <!-- Row: reciprocal -->
  <rect x="0" y="125" width="550" height="30" fill="white" stroke="black" />
  <text x="35" y="145" font-family="Arial" font-size="13">\(\dfrac{1}{x}\)</text>
  <text x="240" y="145" font-family="Arial" font-size="13">\(-\dfrac{1}{x^2}\)</text>
  <text x="420" y="145" font-family="Arial" font-size="13">Special case of \(x^{-1}\)</text>
  <!-- Row: square root -->
  <rect x="0" y="155" width="550" height="30" fill="#f9f9f9" stroke="black" />
  <text x="35" y="175" font-family="Arial" font-size="13">\(\sqrt{x}=x^{1/2}\)</text>
  <text x="240" y="175" font-family="Arial" font-size="13">\(\tfrac{1}{2} x^{-1/2}\)</text>
  <text x="420" y="175" font-family="Arial" font-size="13">Fractional exponent case</text>
</svg>
```

## SVG‑003: Concavity and Points of Inflection
Source: AI‑proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: SVG-003 | Source: AI-proposed teaching enhancement, not present in lesson PDF | Insert from AS1_differentiation_svg.md | Purpose: summarise concavity and points of inflection]`  
Purpose: This diagram summarises how the second derivative \(f''(x)\) determines whether a curve is concave up or concave down and indicates when points of inflection occur.  It also reminds you to check whether \(f'(x)\) is zero at an inflection point to distinguish stationary from non‑stationary inflections.

```svg
<svg width="520" height="170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Concavity table">
  <rect x="0" y="0" width="520" height="170" fill="white" stroke="black" />
  <!-- Header row -->
  <rect x="0" y="0" width="520" height="35" fill="#e6f2ff" stroke="black" />
  <text x="40" y="22" font-family="Arial" font-size="14" font-weight="bold">Second derivative \(f''(x)\)</text>
  <text x="300" y="22" font-family="Arial" font-size="14" font-weight="bold">Curve behaviour</text>
  <!-- Row: concave up -->
  <rect x="0" y="35" width="520" height="35" fill="#f9f9f9" stroke="black" />
  <text x="60" y="57" font-family="Arial" font-size="13">\(f''(x) &gt; 0\)</text>
  <text x="300" y="57" font-family="Arial" font-size="13">Curve concave up (cup‑shaped)</text>
  <!-- Row: concave down -->
  <rect x="0" y="70" width="520" height="35" fill="white" stroke="black" />
  <text x="60" y="92" font-family="Arial" font-size="13">\(f''(x) &lt; 0\)</text>
  <text x="300" y="92" font-family="Arial" font-size="13">Curve concave down (cap‑shaped)</text>
  <!-- Row: point of inflection -->
  <rect x="0" y="105" width="520" height="65" fill="#f9f9f9" stroke="black" />
  <text x="60" y="128" font-family="Arial" font-size="13">\(f''(x) = 0\)</text>
  <text x="300" y="120" font-family="Arial" font-size="13">Potential point of inflection</text>
  <text x="300" y="138" font-family="Arial" font-size="12">If \(f''(x)\) changes sign and \(f'(x)\neq 0\): non‑stationary inflection</text>
  <text x="300" y="154" font-family="Arial" font-size="12">If \(f''(x)\) changes sign and \(f'(x)=0\): stationary inflection</text>
</svg>
```