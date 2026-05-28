# Interactive Widgets for AS1 Quadratic Functions

## WIDGET-001: Quadratic graph explorer
Source: AI‑proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[INTERACTIVE PLACEHOLDER: WIDGET-001 | Source: AI‑proposed teaching enhancement, not present in lesson PDF | Insert from AS1_quadratic_functions_widgets.md | Purpose: slider exploration showing how changing coefficients affects a quadratic graph]`  
Purpose: This widget allows you to change the coefficients \(a\), \(b\) and \(c\) of a quadratic function and see how the graph, turning point, discriminant and roots change.  It helps you connect algebraic coefficients with graphical features.

### Learning Goal
Understand how the coefficients \(a\), \(b\) and \(c\) affect the shape of the parabola, the position of its turning point, its axis of symmetry, the y‑intercept and the nature of its roots.

### Controls
- **Coefficient a**: slider (range –5 to 5) adjusting the leading coefficient.  Positive values open the parabola upwards; negative values open it downwards.  The absolute value affects the steepness.
- **Coefficient b**: slider (range –10 to 10) controlling the tilt of the parabola.  It shifts the axis of symmetry horizontally.
- **Coefficient c**: slider (range –10 to 10) setting the y‑intercept of the graph.  It shifts the graph up or down.

### Live Outputs
- The canvas displays the graph of \(y = ax^2 + bx + c\) with axes, the turning point, axis of symmetry and roots (if real).
- Below the graph, text updates show the discriminant \(D=b^2-4ac\), classify the number of real roots, and display the coordinates of the turning point and roots (if applicable).

### What to Notice
- When you move **a**, notice how the graph stretches or flips.  Larger \(|a|\) makes the curve steeper; smaller \(|a|\) makes it wider.  Positive values give a minimum turning point; negative values give a maximum.
- Changing **b** moves the axis of symmetry and turning point left or right but does not affect the y‑intercept.
- Changing **c** shifts the whole graph up or down; the y‑intercept is always \((0,c)\).
- Watch how the discriminant value changes.  When \(D>0\) the graph crosses the x‑axis twice; when \(D=0\) it touches once; when \(D<0\) it never meets the x‑axis.

### Exam Connection
Being able to link the coefficients to the graph supports sketching and interpreting quadratic functions in exam questions.  Use this explorer to build intuition, but always practise algebraic methods by hand when solving exam problems.

### How to Run
Copy the code below into a file named `quadratic_graph_explorer.html` and open it in a web browser.  Use the sliders to explore different quadratic functions.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Quadratic Graph Explorer</title>
  <style>
    body { font-family: sans-serif; margin: 0; padding: 1em; }
    #controls { margin-bottom: 1em; }
    label { margin-right: 0.5em; }
    #graphCanvas { border: 1px solid #ccc; background: #f9f9f9; }
    .output { margin-top: 0.5em; font-size: 0.9em; }
  </style>
</head>
<body>
  <h2>Quadratic Graph Explorer</h2>
  <div id="controls">
    <label>a: <input type="range" id="aRange" min="-5" max="5" step="0.1" value="1"></label>
    <span id="aVal">1</span>
    <label style="margin-left:1em;">b: <input type="range" id="bRange" min="-10" max="10" step="0.1" value="0"></label>
    <span id="bVal">0</span>
    <label style="margin-left:1em;">c: <input type="range" id="cRange" min="-10" max="10" step="0.1" value="0"></label>
    <span id="cVal">0</span>
  </div>
  <canvas id="graphCanvas" width="600" height="400"></canvas>
  <div class="output">
    <p id="discInfo">Discriminant: </p>
    <p id="vertexInfo">Turning point: </p>
    <p id="rootsInfo">Roots: </p>
  </div>
  <script>
    const canvas = document.getElementById('graphCanvas');
    const ctx = canvas.getContext('2d');
    const aRange = document.getElementById('aRange');
    const bRange = document.getElementById('bRange');
    const cRange = document.getElementById('cRange');
    const aVal = document.getElementById('aVal');
    const bVal = document.getElementById('bVal');
    const cVal = document.getElementById('cVal');
    const discInfo = document.getElementById('discInfo');
    const vertexInfo = document.getElementById('vertexInfo');
    const rootsInfo = document.getElementById('rootsInfo');
    // domain and range for graphing
    const xmin = -10, xmax = 10;
    const ymin = -10, ymax = 10;

    function update() {
      const a = parseFloat(aRange.value);
      const b = parseFloat(bRange.value);
      const c = parseFloat(cRange.value);
      aVal.textContent = a;
      bVal.textContent = b;
      cVal.textContent = c;
      drawGraph(a, b, c);
    }

    function drawGraph(a, b, c) {
      // clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // draw axes
      const width = canvas.width;
      const height = canvas.height;
      // x-axis
      const yZero = height - ((0 - ymin) / (ymax - ymin)) * height;
      ctx.beginPath();
      ctx.moveTo(0, yZero);
      ctx.lineTo(width, yZero);
      ctx.strokeStyle = '#444';
      ctx.stroke();
      // y-axis
      const xZero = ((0 - xmin) / (xmax - xmin)) * width;
      ctx.beginPath();
      ctx.moveTo(xZero, 0);
      ctx.lineTo(xZero, height);
      ctx.stroke();
      // plot quadratic
      ctx.beginPath();
      for (let px = 0; px <= width; px++) {
        const xVal = xmin + (px / width) * (xmax - xmin);
        const yVal = a * xVal * xVal + b * xVal + c;
        const py = height - ((yVal - ymin) / (ymax - ymin)) * height;
        if (px === 0) {
          ctx.moveTo(px, py);
        } else {
          ctx.lineTo(px, py);
        }
      }
      ctx.strokeStyle = '#0066cc';
      ctx.lineWidth = 2;
      ctx.stroke();
      // draw vertex and axis of symmetry
      if (a !== 0) {
        const xv = -b / (2 * a);
        const yv = a * xv * xv + b * xv + c;
        const pxv = ((xv - xmin) / (xmax - xmin)) * width;
        const pyv = height - ((yv - ymin) / (ymax - ymin)) * height;
        // axis of symmetry
        ctx.beginPath();
        ctx.setLineDash([5,5]);
        ctx.moveTo(pxv, 0);
        ctx.lineTo(pxv, height);
        ctx.strokeStyle = '#888';
        ctx.stroke();
        ctx.setLineDash([]);
        // vertex
        ctx.beginPath();
        ctx.arc(pxv, pyv, 4, 0, 2 * Math.PI);
        ctx.fillStyle = '#cc0000';
        ctx.fill();
        ctx.strokeStyle = '#cc0000';
        ctx.stroke();
        vertexInfo.textContent = `Turning point: ( ${xv.toFixed(2)}, ${yv.toFixed(2)} )`;
      } else {
        vertexInfo.textContent = 'Turning point: undefined (a = 0)';
      }
      // discriminant and roots
      const D = b * b - 4 * a * c;
      discInfo.textContent = `Discriminant: D = ${D.toFixed(2)}`;
      if (D > 0 && a !== 0) {
        const sqrtD = Math.sqrt(D);
        const r1 = (-b - sqrtD) / (2 * a);
        const r2 = (-b + sqrtD) / (2 * a);
        rootsInfo.textContent = `Roots: ${r1.toFixed(2)}, ${r2.toFixed(2)}`;
        // draw roots
        [r1, r2].forEach(r => {
          const pxr = ((r - xmin) / (xmax - xmin)) * width;
          ctx.beginPath();
          ctx.arc(pxr, yZero, 4, 0, 2 * Math.PI);
          ctx.fillStyle = '#00aa00';
          ctx.fill();
          ctx.strokeStyle = '#00aa00';
          ctx.stroke();
        });
      } else if (D === 0 && a !== 0) {
        const r = -b / (2 * a);
        rootsInfo.textContent = `Root: ${r.toFixed(2)} (repeated)`;
        const pxr = ((r - xmin) / (xmax - xmin)) * width;
        ctx.beginPath();
        ctx.arc(pxr, yZero, 4, 0, 2 * Math.PI);
        ctx.fillStyle = '#00aa00';
        ctx.fill();
        ctx.strokeStyle = '#00aa00';
        ctx.stroke();
      } else {
        rootsInfo.textContent = 'Roots: no real roots';
      }
    }
    // add listeners
    aRange.addEventListener('input', update);
    bRange.addEventListener('input', update);
    cRange.addEventListener('input', update);
    // initial draw
    update();
  </script>
</body>
</html>
```

## WIDGET-002: Discriminant classification tool
Source: AI‑proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[INTERACTIVE PLACEHOLDER: WIDGET-002 | Source: AI‑proposed teaching enhancement, not present in lesson PDF | Insert from AS1_quadratic_functions_widgets.md | Purpose: compute discriminant and classify roots]`  
Purpose: This simple calculator computes the discriminant \(D=b^2-4ac\) of a quadratic equation \(ax^2+bx+c=0\).  It reports the discriminant and tells you whether the equation has two distinct real roots, one repeated real root, or no real roots.

### Learning Goal
Practise evaluating the discriminant and interpreting its sign to determine the nature of the roots without solving the equation.

### Controls
- Three number inputs for \(a\), \(b\) and \(c\).
- A button to compute the discriminant.

### Live Outputs
- Displays the computed discriminant.
- States whether there are two real roots, one repeated root or no real roots.

### What to Notice
- The discriminant depends only on \(a\), \(b\) and \(c\).  Changing \(c\) can have a big impact on whether real roots exist.
- When \(a\neq 0\), the sign of \(D\) completely determines the number of real roots.

### Exam Connection
Questions often ask you to show that an equation has no real roots or to find parameter values so that an equation has exactly one real root.  Using this tool builds fluency with the discriminant conditions.

### How to Run
Copy the code below into a file named `discriminant_calculator.html` and open it in a web browser.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Discriminant Calculator</title>
  <style>
    body { font-family: sans-serif; margin: 1em; }
    input[type=number] { width: 60px; }
    button { margin-left: 1em; }
    #output { margin-top: 1em; font-weight: bold; }
  </style>
</head>
<body>
  <h2>Discriminant Classification Tool</h2>
  <label>a: <input type="number" id="a" value="1"></label>
  <label>b: <input type="number" id="b" value="0"></label>
  <label>c: <input type="number" id="c" value="0"></label>
  <button id="compute">Compute</button>
  <div id="output"></div>
  <script>
    const aInput = document.getElementById('a');
    const bInput = document.getElementById('b');
    const cInput = document.getElementById('c');
    const output = document.getElementById('output');
    document.getElementById('compute').addEventListener('click', () => {
      const a = parseFloat(aInput.value);
      const b = parseFloat(bInput.value);
      const c = parseFloat(cInput.value);
      if (isNaN(a) || isNaN(b) || isNaN(c) || a === 0) {
        output.textContent = 'Please enter valid numbers and ensure a ≠ 0.';
        return;
      }
      const D = b*b - 4*a*c;
      let classification;
      if (D > 0) {
        classification = 'Two distinct real roots';
      } else if (D === 0) {
        classification = 'One repeated real root';
      } else {
        classification = 'No real roots';
      }
      output.textContent = `Discriminant D = ${D}. ${classification}.`;
    });
  </script>
</body>
</html>
```

## WIDGET-003: Factor theorem and remainder calculator
Source: AI‑proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[INTERACTIVE PLACEHOLDER: WIDGET-003 | Source: AI‑proposed teaching enhancement, not present in lesson PDF | Insert from AS1_quadratic_functions_widgets.md | Purpose: evaluate a polynomial at a point to test the factor and remainder theorems]`  
Purpose: This tool evaluates a polynomial at a chosen value \(x=a\) to determine the remainder when the polynomial is divided by \(x-a\) and to check whether \(x-a\) is a factor.  It supports polynomials up to quartic degree.

### Learning Goal
Apply the remainder theorem and factor theorem by substituting into a polynomial to find the remainder and decide if a factor exists.

### Controls
- A text box for entering coefficients of the polynomial, starting with the highest degree and separated by commas.  For example, `2, -5, 0, 7` represents \(2x^3 - 5x^2 + 0x + 7\).
- A number input for the value \(a\) to test.
- A button to evaluate \(f(a)\).

### Live Outputs
- Displays the value \(f(a)\), which equals the remainder when the polynomial is divided by \(x-a\).
- Indicates whether \(x - a\) is a factor (if the remainder is zero).

### What to Notice
- The remainder theorem states that the remainder of dividing \(f(x)\) by \(x - a\) is \(f(a)\).
- If the result is zero, then \(x - a\) is a factor (factor theorem).
- You can try different integer factors of the constant term to find roots of a cubic and factorise it.

### Exam Connection
Factorising cubic polynomials often starts by testing integer values using the factor theorem.  This calculator provides quick feedback but you should learn how to perform the substitution and long division by hand for exam purposes.

### How to Run
Copy the code below into a file named `factor_theorem_calculator.html` and open it in a web browser.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Factor & Remainder Calculator</title>
  <style>
    body { font-family: sans-serif; margin: 1em; }
    input[type=text] { width: 200px; }
    input[type=number] { width: 60px; }
    button { margin-left: 1em; }
    #result { margin-top: 1em; font-weight: bold; }
  </style>
</head>
<body>
  <h2>Factor Theorem & Remainder Calculator</h2>
  <p>
    Enter polynomial coefficients (highest degree first, comma‑separated):
    <input type="text" id="coeffs" value="1, -6, 11, -6">
  </p>
  <p>
    Test value a: <input type="number" id="testValue" value="1">
    <button id="evaluate">Evaluate</button>
  </p>
  <div id="result"></div>
  <script>
    document.getElementById('evaluate').addEventListener('click', () => {
      const coeffStr = document.getElementById('coeffs').value.trim();
      const coeffs = coeffStr.split(',').map(s => parseFloat(s.trim())).filter(s => !isNaN(s));
      const a = parseFloat(document.getElementById('testValue').value);
      if (coeffs.length === 0 || isNaN(a)) {
        document.getElementById('result').textContent = 'Please enter valid coefficients and a value.';
        return;
      }
      // Evaluate polynomial at x=a
      let value = 0;
      for (let i = 0; i < coeffs.length; i++) {
        value = value * a + coeffs[i];
      }
      const remainder = value;
      let message = `f(${a}) = ${remainder}`;
      if (Math.abs(remainder) < 1e-9) {
        message += '. Therefore (x - ' + a + ') is a factor.';
      } else {
        message += '. Therefore (x - ' + a + ') is not a factor.';
      }
      document.getElementById('result').textContent = message;
    });
  </script>
</body>
</html>
```
