# Interactive Widgets for AS1 differentiation

This file provides HTML/JavaScript code for interactive widgets designed to accompany the differentiation lesson.  Each widget is self‑contained and can be run by copying the code into a file with the extension `.html` and opening it in a modern web browser.  These widgets are intended as learning tools to deepen your understanding of calculus concepts; they are not substitutes for showing written work in an exam.

## WIDGET‑001: Power Rule Explorer
Source: AI‑proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[INTERACTIVE PLACEHOLDER: WIDGET-001 | Source: AI-proposed teaching enhancement, not present in lesson PDF | Insert from AS1_differentiation_widgets.md | Purpose: explore how changing the exponent and coefficient affects the derivative of \(a x^n\)]`  
Purpose: Allow students to experiment with different coefficients and exponents in the function \(f(x) = a x^n\).  As you adjust the controls, the widget displays the resulting derivative \(f'(x) = a n x^{n-1}\) symbolically and numerically evaluates both \(f(x)\) and \(f'(x)\) at a chosen \(x\)-value.

### Learning Goal
Understand how the power rule works for any real exponent and how the coefficient influences the derivative.  Observe how values of \(f(x)\) and \(f'(x)\) change with different choices of \(a\), \(n\) and \(x\).

### Controls
- **Coefficient \(a\):** A number input allowing positive and negative values (default 1, step 0.5).  
- **Exponent \(n\):** A number input for the exponent (default 2, step 0.5).  
- **\(x\)-value:** A number input to evaluate the function and its derivative at a specific \(x\) (default 1, step 0.5).

### Live Outputs
- **Formula display:** Shows \(f(x)\) and its derivative symbolically based on your selected values of \(a\) and \(n\).  
- **Numeric evaluation:** Calculates \(f(x)\) and \(f'(x)\) at the chosen \(x\) and displays the results.

### What to Notice
- When \(n\) is decreased by 1, observe how the exponent of \(x\) in the derivative changes.  
- Negative and fractional exponents are valid; note that the function and derivative may be undefined at certain \(x\)-values (e.g. \(x=0\) when \(n<1\)).  
- The derivative scales with both the exponent and the coefficient.

### Exam Connection
Practising with this widget strengthens intuition about the power rule, which is crucial for differentiating polynomials and rational powers in AS‑level exams.  Remember, however, that in the exam you must show each step of your differentiation by hand.

### How to Run
Copy the code below into a file named `power_rule_explorer.html` (or another name ending with `.html`).  Open it in your web browser to interact with the widget.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Power Rule Explorer</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 20px; }
    label { display: block; margin-bottom: 10px; }
    input[type="number"] { width: 80px; margin-left: 5px; }
    .output { margin-top: 20px; font-size: 16px; }
    .output span { display: block; margin-top: 5px; }
  </style>
</head>
<body>
  <h2>Power Rule Explorer</h2>
  <label>Coefficient a:
    <input id="aInput" type="number" value="1" step="0.5">
  </label>
  <label>Exponent n:
    <input id="nInput" type="number" value="2" step="0.5">
  </label>
  <label>x-value:
    <input id="xInput" type="number" value="1" step="0.5">
  </label>
  <div class="output">
    <span id="formulaDisplay"></span>
    <span id="valueDisplay"></span>
  </div>
  <script>
    function updatePower() {
      const a = parseFloat(document.getElementById('aInput').value);
      const n = parseFloat(document.getElementById('nInput').value);
      const x = parseFloat(document.getElementById('xInput').value);
      // Build symbolic strings
      const fStr = a + 'x^' + n;
      const derivCoeff = a * n;
      const derivativeExp = n - 1;
      const derivativeStr = derivCoeff + 'x^' + derivativeExp;
      // Evaluate numeric values, guarding against invalid operations
      let fVal = 'undefined';
      let dVal = 'undefined';
      if (!(x === 0 && n < 0)) {
        fVal = a * Math.pow(x, n);
      }
      if (!(x === 0 && derivativeExp < 0)) {
        dVal = derivCoeff * Math.pow(x, derivativeExp);
      }
      document.getElementById('formulaDisplay').innerHTML =
        '<strong>f(x)</strong> = ' + fStr + ', &nbsp; <strong>f\'(x)</strong> = ' + derivativeStr;
      document.getElementById('valueDisplay').innerHTML =
        'At x = ' + x + ': f(x) = ' + (typeof fVal === 'number' ? fVal.toFixed(3) : fVal) + ', ' +
        'f\'(x) = ' + (typeof dVal === 'number' ? dVal.toFixed(3) : dVal);
    }
    document.querySelectorAll('input').forEach(function(input) {
      input.addEventListener('input', updatePower);
    });
    updatePower();
  </script>
</body>
</html>
```

## WIDGET‑002: Tangent and Normal Explorer
Source: AI‑proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[INTERACTIVE PLACEHOLDER: WIDGET-002 | Source: AI-proposed teaching enhancement, not present in lesson PDF | Insert from AS1_differentiation_widgets.md | Purpose: pick a function and see the tangent and normal at any point]`  
Purpose: Visualise how the tangent and normal lines to a curve depend on the point of contact.  Choose a function and adjust the \(x\)-value to see the gradient, the tangent equation and the normal equation, all plotted on a simple graph.

### Learning Goal
Develop a deeper understanding of tangents and normals, and the relationship between a function and its derivative.  See how the gradient changes along the curve and how the normal is always perpendicular to the tangent.

### Controls
- **Function selector:** Choose between two predefined functions: \(f(x)=x^2\) and \(f(x)=x^3-3x\).  
- **x-value slider:** Move a slider to select the point of tangency on the horizontal axis (default range \([-3,3]\)).

### Live Outputs
- **Graph display:** An interactive canvas shows the function, the selected point, the tangent line and the normal line.  
- **Gradient and equations:** Text output displays the gradient of the tangent \(f'(x)\) and the explicit equations of the tangent and normal lines.

### What to Notice
- As you move the slider, the slope of the tangent line changes according to the derivative.  
- The normal line always has gradient \(-1/m\) when the tangent has gradient \(m\); watch how it flips steepness and direction.  
- Compare the behaviour of the quadratic and cubic functions: the cubic has a point of inflection where the tangent gradient passes through zero.

### Exam Connection
This widget provides a dynamic way to practise writing tangent and normal equations, skills frequently tested in AS‑level exams.  Remember to use the point–slope form and to simplify equations when answering exam questions.

### How to Run
Copy the code below into a file named `tangent_normal_explorer.html` and open it in your web browser.  Use the controls at the top to explore the functions.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Tangent and Normal Explorer</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 20px; }
    #controls { margin-bottom: 10px; }
    canvas { border: 1px solid #ccc; }
    .output { margin-top: 10px; }
  </style>
</head>
<body>
  <h2>Tangent and Normal Explorer</h2>
  <div id="controls">
    <label>Function:
      <select id="funcSelect">
        <option value="quad">f(x) = x^2</option>
        <option value="cubic">f(x) = x^3 - 3x</option>
      </select>
    </label>
    <label style="margin-left: 20px;">x-value:
      <input id="xSlider" type="range" min="-3" max="3" step="0.1" value="0" style="width: 200px;">
    </label>
  </div>
  <canvas id="graphCanvas" width="400" height="400"></canvas>
  <div class="output" id="outputInfo"></div>
  <script>
    const canvas = document.getElementById('graphCanvas');
    const ctx = canvas.getContext('2d');
    const funcSelect = document.getElementById('funcSelect');
    const xSlider = document.getElementById('xSlider');
    // Coordinate system mapping
    const xMin = -3, xMax = 3;
    const yMin = -5, yMax = 5;
    function toCanvasX(x) { return (x - xMin) / (xMax - xMin) * canvas.width; }
    function toCanvasY(y) { return canvas.height - (y - yMin) / (yMax - yMin) * canvas.height; }
    function fValue(func, x) {
      switch (func) {
        case 'quad': return x * x;
        case 'cubic': return x * x * x - 3 * x;
      }
    }
    function fDeriv(func, x) {
      switch (func) {
        case 'quad': return 2 * x;
        case 'cubic': return 3 * x * x - 3;
      }
    }
    function draw() {
      const func = funcSelect.value;
      const x0 = parseFloat(xSlider.value);
      const y0 = fValue(func, x0);
      const m = fDeriv(func, x0);
      // Normal slope; handle zero derivative separately
      let mNorm;
      if (m === 0) {
        mNorm = Infinity;
      } else {
        mNorm = -1 / m;
      }
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Draw axes
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 1;
      // x-axis
      const yZero = toCanvasY(0);
      ctx.beginPath();
      ctx.moveTo(0, yZero);
      ctx.lineTo(canvas.width, yZero);
      ctx.stroke();
      // y-axis
      const xZero = toCanvasX(0);
      ctx.beginPath();
      ctx.moveTo(xZero, 0);
      ctx.lineTo(xZero, canvas.height);
      ctx.stroke();
      // Plot function
      ctx.strokeStyle = 'blue';
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let px = 0; px <= canvas.width; px++) {
        const x = xMin + (xMax - xMin) * (px / canvas.width);
        const y = fValue(func, x);
        const py = toCanvasY(y);
        if (px === 0) {
          ctx.moveTo(px, py);
        } else {
          ctx.lineTo(px, py);
        }
      }
      ctx.stroke();
      // Plot tangent line
      ctx.strokeStyle = 'orange';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      for (let px = 0; px <= canvas.width; px++) {
        const x = xMin + (xMax - xMin) * (px / canvas.width);
        const y = m * (x - x0) + y0;
        const py = toCanvasY(y);
        if (px === 0) {
          ctx.moveTo(px, py);
        } else {
          ctx.lineTo(px, py);
        }
      }
      ctx.stroke();
      // Plot normal line
      ctx.strokeStyle = 'green';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      for (let px = 0; px <= canvas.width; px++) {
        const x = xMin + (xMax - xMin) * (px / canvas.width);
        let y;
        if (m === 0) {
          // Vertical normal line at x0
          if (Math.abs(x - x0) < 0.01) {
            y = yMin;
          } else {
            y = NaN;
          }
        } else {
          y = mNorm * (x - x0) + y0;
        }
        const py = toCanvasY(y);
        if (px === 0) {
          ctx.moveTo(px, py);
        } else if (!isNaN(y)) {
          ctx.lineTo(px, py);
        }
      }
      ctx.stroke();
      // Mark the point of tangency
      ctx.fillStyle = 'red';
      const px0 = toCanvasX(x0);
      const py0 = toCanvasY(y0);
      ctx.beginPath();
      ctx.arc(px0, py0, 4, 0, 2 * Math.PI);
      ctx.fill();
      // Update text output
      const tangentEq = 'y = ' + m.toFixed(2) + '(x - ' + x0.toFixed(2) + ') + ' + y0.toFixed(2);
      let normalEq;
      if (m === 0) {
        normalEq = 'x = ' + x0.toFixed(2);
      } else {
        normalEq = 'y = ' + mNorm.toFixed(2) + '(x - ' + x0.toFixed(2) + ') + ' + y0.toFixed(2);
      }
      document.getElementById('outputInfo').innerHTML =
        '<strong>Gradient f\'(x)</strong> = ' + m.toFixed(2) + '<br>' +
        '<strong>Tangent:</strong> ' + tangentEq + '<br>' +
        '<strong>Normal:</strong> ' + normalEq;
    }
    funcSelect.addEventListener('change', draw);
    xSlider.addEventListener('input', draw);
    draw();
  </script>
</body>
</html>
```

## WIDGET‑003: Stationary Points Explorer
Source: AI‑proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[INTERACTIVE PLACEHOLDER: WIDGET-003 | Source: AI-proposed teaching enhancement, not present in lesson PDF | Insert from AS1_differentiation_widgets.md | Purpose: adjust coefficients of a cubic function and watch how its stationary points and classifications change]`  
Purpose: This widget lets you specify the coefficients of a cubic function \(f(x)=ax^3+bx^2+cx+d\), then it automatically finds and classifies the stationary points by solving \(f'(x)=0\) and evaluating the second derivative.

### Learning Goal
Explore how varying the coefficients of a cubic changes the number and nature of its stationary points.  Observe how the discriminant of the derivative determines whether you have two, one or no real stationary points.

### Controls
- **Coefficient inputs:** Four number inputs for \(a\), \(b\), \(c\) and \(d\).  Default values are set to 1, 0, 0 and 0 to illustrate the simple cubic \(x^3\).  
- **Update button:** Calculates stationary points and updates the output when clicked.

### Live Outputs
- **Stationary points list:** Shows the \(x\)-coordinates and \(y\)-coordinates of any real stationary points.  
- **Classification:** Indicates whether each stationary point is a local maximum, local minimum or point of inflection based on the sign of \(f''(x)\).

### What to Notice
- Changing \(a\) affects the overall steepness and orientation of the cubic.  
- The discriminant of the derivative \(\Delta = 4b^2 - 12ac\) controls the number of real stationary points: if \(\Delta > 0\) there are two distinct stationary points; if \(\Delta = 0\) there is exactly one stationary point (a repeated root); if \(\Delta < 0\) there are no real stationary points.  
- The sign of the second derivative at each stationary point tells you its nature.

### Exam Connection
Understanding how to find and classify stationary points of a cubic function is vital for sketching and optimisation questions.  This widget gives immediate feedback when you change coefficients, reinforcing the connection between algebraic manipulation and curve behaviour.

### How to Run
Save the following code as `stationary_points_explorer.html` and open it in a web browser.  Adjust the coefficients and click **Update** to see the results.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Stationary Points Explorer</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 20px; }
    label { display: block; margin: 5px 0; }
    input[type="number"] { width: 60px; }
    #results { margin-top: 15px; }
  </style>
</head>
<body>
  <h2>Stationary Points Explorer</h2>
  <p>Specify a cubic function f(x) = a x^3 + b x^2 + c x + d.  Click <strong>Update</strong> to find and classify its stationary points.</p>
  <label>a: <input id="aCoef" type="number" value="1" step="0.5"></label>
  <label>b: <input id="bCoef" type="number" value="0" step="0.5"></label>
  <label>c: <input id="cCoef" type="number" value="0" step="0.5"></label>
  <label>d: <input id="dCoef" type="number" value="0" step="0.5"></label>
  <button id="updateBtn">Update</button>
  <div id="results"></div>
  <script>
    function classifyStationaryPoints() {
      const a = parseFloat(document.getElementById('aCoef').value);
      const b = parseFloat(document.getElementById('bCoef').value);
      const c = parseFloat(document.getElementById('cCoef').value);
      const d = parseFloat(document.getElementById('dCoef').value);
      const resultsDiv = document.getElementById('results');
      resultsDiv.innerHTML = '';
      if (a === 0) {
        resultsDiv.textContent = 'Not a cubic function (a must be non-zero).';
        return;
      }
      // Derivative coefficients: 3 a x^2 + 2 b x + c
      const A = 3 * a;
      const B = 2 * b;
      const C = c;
      // Discriminant of derivative
      const discriminant = B * B - 4 * A * C;
      function secondDerivative(x) {
        return 6 * a * x + 2 * b;
      }
      // Helper to append result paragraphs
      function addResult(text) {
        const p = document.createElement('p');
        p.innerHTML = text;
        resultsDiv.appendChild(p);
      }
      addResult('<strong>Derivative:</strong> f\'(x) = ' + A + 'x^2 + ' + B + 'x + ' + C);
      addResult('<strong>Discriminant:</strong> Δ = ' + discriminant.toFixed(3));
      if (discriminant < 0) {
        addResult('The derivative has no real roots → the cubic has no stationary points.');
        return;
      }
      if (discriminant === 0) {
        const x0 = -B / (2 * A);
        const y0 = a * Math.pow(x0, 3) + b * Math.pow(x0, 2) + c * x0 + d;
        const f2 = secondDerivative(x0);
        let nature;
        if (f2 > 0) {
          nature = 'stationary point of inflection (minimum curvature)';
        } else if (f2 < 0) {
          nature = 'stationary point of inflection (maximum curvature)';
        } else {
          nature = 'point of inflection';
        }
        addResult('One repeated stationary point at x = ' + x0.toFixed(3) + ', y = ' + y0.toFixed(3) + ' — ' + nature + '.');
      } else {
        const sqrtDisc = Math.sqrt(discriminant);
        const x1 = (-B + sqrtDisc) / (2 * A);
        const x2 = (-B - sqrtDisc) / (2 * A);
        const xs = [x1, x2];
        xs.forEach(function(xVal, idx) {
          const yVal = a * Math.pow(xVal, 3) + b * Math.pow(xVal, 2) + c * xVal + d;
          const f2Val = secondDerivative(xVal);
          let nature;
          if (f2Val > 0) nature = 'local minimum';
          else if (f2Val < 0) nature = 'local maximum';
          else nature = 'point of inflection';
          addResult('Stationary point ' + (idx + 1) + ': x = ' + xVal.toFixed(3) + ', y = ' + yVal.toFixed(3) + ' — ' + nature + '.');
        });
      }
    }
    document.getElementById('updateBtn').addEventListener('click', classifyStationaryPoints);
    classifyStationaryPoints();
  </script>
</body>
</html>
```