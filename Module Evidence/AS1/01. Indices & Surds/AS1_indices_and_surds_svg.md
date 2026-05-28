# SVG Diagrams for AS1 Indices and Surds

## SVG-001: Summary of Index and Surd Rules
Source: lesson PDF p.1 (table of rules)  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: SVG-001 | Source: lesson PDF p.1 | Insert from AS1_indices_and_surds_svg.md | Purpose: visual summary of laws of indices]`  
Purpose: to present all of the index and surd laws in a single, easy‑to‑read infographic.  This SVG recreates the table of laws from the PDF but improves clarity by grouping the index laws on the left and surd rules on the right, with consistent notation and examples.

```svg
<!--
  SVG summary of index and surd rules.
  Dimensions: 720 × 480.  Two columns: left for index laws, right for surd rules.
  Each rule is listed with its formula and a brief example.
-->
<svg width="720" height="480" viewBox="0 0 720 480" xmlns="http://www.w3.org/2000/svg" aria-labelledby="title desc">
  <title id="title">Index and Surd Rules Summary</title>
  <desc id="desc">An infographic summarising the eight laws of indices and the key rules for surds.</desc>
  <!-- Background -->
  <rect width="720" height="480" fill="#ffffff" stroke="#cccccc"/>
  <!-- Divider line -->
  <line x1="360" y1="60" x2="360" y2="460" stroke="#888888" stroke-width="1" stroke-dasharray="4 2"/>
  <!-- Heading -->
  <text x="360" y="40" text-anchor="middle" font-size="20" font-weight="bold">Index &amp; Surd Rules Summary</text>
  <!-- Column headings -->
  <text x="180" y="70" text-anchor="middle" font-size="16" font-weight="bold">Index Laws</text>
  <text x="540" y="70" text-anchor="middle" font-size="16" font-weight="bold">Surd Rules</text>
  <!-- Index laws list -->
  <g font-size="14">
    <!-- Multiplication -->
    <text x="20" y="100"><tspan font-weight="bold">Multiply:</tspan> <tspan>a</tspan><tspan dy="-6" font-size="10">m</tspan> × <tspan>a</tspan><tspan dy="-6" font-size="10">n</tspan> = <tspan>a</tspan><tspan dy="-6" font-size="10">m+n</tspan>  </text>
    <!-- Division -->
    <text x="20" y="125"><tspan font-weight="bold">Divide:</tspan> <tspan>a</tspan><tspan dy="-6" font-size="10">m</tspan> ÷ <tspan>a</tspan><tspan dy="-6" font-size="10">n</tspan> = <tspan>a</tspan><tspan dy="-6" font-size="10">m−n</tspan></text>
    <!-- Power of a power -->
    <text x="20" y="150"><tspan font-weight="bold">Power of a power:</tspan> (<tspan>a</tspan><tspan dy="-6" font-size="10">m</tspan>)<tspan dy="-6" font-size="10">n</tspan> = <tspan>a</tspan><tspan dy="-6" font-size="10">mn</tspan></text>
    <!-- Product to a power -->
    <text x="20" y="175"><tspan font-weight="bold">Product:</tspan> (<tspan>a b</tspan>)<tspan dy="-6" font-size="10">n</tspan> = <tspan>a</tspan><tspan dy="-6" font-size="10">n</tspan><tspan> · </tspan><tspan>b</tspan><tspan dy="-6" font-size="10">n</tspan></text>
    <!-- Quotient to a power -->
    <text x="20" y="200"><tspan font-weight="bold">Quotient:</tspan> (<tspan>a/b</tspan>)<tspan dy="-6" font-size="10">n</tspan> = <tspan>a</tspan><tspan dy="-6" font-size="10">n</tspan><tspan>/</tspan><tspan>b</tspan><tspan dy="-6" font-size="10">n</tspan></text>
    <!-- Zero index -->
    <text x="20" y="225"><tspan font-weight="bold">Zero index:</tspan> <tspan>a</tspan><tspan dy="-6" font-size="10">0</tspan> = 1</text>
    <!-- Negative index -->
    <text x="20" y="250"><tspan font-weight="bold">Negative index:</tspan> <tspan>a</tspan><tspan dy="-6" font-size="10">−n</tspan> = 1/<tspan>a</tspan><tspan dy="-6" font-size="10">n</tspan></text>
    <!-- Fractional index -->
    <text x="20" y="275"><tspan font-weight="bold">Fractional index:</tspan> <tspan>a</tspan><tspan dy="-6" font-size="10">m/n</tspan> = (√[n]{<tspan>a</tspan>})<tspan dy="-6" font-size="10">m</tspan></text>
    <!-- Example box -->
    <text x="20" y="305" font-style="italic">Example: 8<tspan dy="-6" font-size="10">2/3</tspan> = (∛8)<tspan dy="-6" font-size="10">2</tspan> = 2<sup>2</sup> = 4</text>
  </g>
  <!-- Surd rules list -->
  <g font-size="14">
    <!-- Product rule -->
    <text x="380" y="100"><tspan font-weight="bold">Product:</tspan> √a · √b = √(a b)</text>
    <!-- Quotient rule -->
    <text x="380" y="125"><tspan font-weight="bold">Quotient:</tspan> √a / √b = √(a/b)</text>
    <!-- Simplification rule -->
    <text x="380" y="150"><tspan font-weight="bold">Simplify:</tspan> √(k² m) = k·√m</text>
    <!-- Rationalise simple -->
    <text x="380" y="175"><tspan font-weight="bold">Rationalise (simple):</tspan> multiply numerator &amp; denominator by √a</text>
    <!-- Rationalise binomial -->
    <text x="380" y="200"><tspan font-weight="bold">Rationalise (binomial):</tspan> multiply by conjugate (a ± √b)</text>
    <!-- Note section -->
    <text x="380" y="230" font-style="italic">Tip: combine like surds only when radicands match</text>
    <!-- Example box for surd -->
    <text x="380" y="260" font-style="italic">Example: √72 = √(36·2) = 6√2</text>
  </g>
  <!-- Decorative boxes around columns -->
  <rect x="10" y="80" width="340" height="210" fill="none" stroke="#888888" stroke-dasharray="3 3"/>
  <rect x="370" y="80" width="340" height="210" fill="none" stroke="#888888" stroke-dasharray="3 3"/>
</svg>
```

This SVG summarises the eight index laws and the fundamental surd rules side‑by‑side.  It improves readability by using consistent formatting for superscripts and by grouping related rules together.  A short example under each column illustrates how to apply the respective rules.