# Interactive Widgets for AS1 trigonometry

This file contains self‑contained interactive activities written in HTML, CSS and JavaScript.  Each widget is designed to deepen understanding of trigonometric concepts by allowing students to change values and immediately observe the effect.  To run a widget, copy the code into a `.html` file and open it in a modern web browser.  The widgets do not rely on external libraries.

## WIDGET-001: Trig graph transformation explorer
Source: AI‑proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[INTERACTIVE PLACEHOLDER: WIDGET‑001 | Source: AI‑proposed teaching enhancement, not present in lesson PDF | Insert from AS1_trigonometry_widgets.md | Purpose: slider exploration showing how amplitude and phase shift affect sine and cosine graphs]`  
Purpose: This widget lets you explore how changing the **amplitude** and **phase shift** transforms the graphs of \(y = \sin x\) and \(y = \cos x\).  You can choose the function (sine or cosine), adjust the amplitude from 0.5 to 2, and adjust the phase shift from −180° to 180°.  The graph updates in real time so you can observe how the peaks and troughs move and how the vertical stretch changes.

### Learning Goal
Understand how amplitude and horizontal translation affect trigonometric graphs.  Recognise that the amplitude scales the maximum and minimum values, while the phase shift translates the graph left or right.  Appreciate that these transformations do not change the period.

### Controls
- **Function**: select `sin` or `cos` to choose which base function to explore.  
- **Amplitude**: slider from 0.5 to 2 (step 0.1).  
- **Phase shift (°)**: slider from −180° to 180° (step 5°).  The phase shift is applied inside the function as \(f(x + \phi)\).

### Live Outputs
- **Graph**: the plot of \(y = A f(x + \phi)\) on the interval \(0\le x\le 2\pi\).  
- **Equation display**: a text line showing the current function in mathematical form with the chosen amplitude \(A\) and phase shift \(\phi\).

### What to Notice
- Increasing the amplitude stretches the graph vertically so that its maximum becomes \(A\) and its minimum becomes \(-A\).  
- A positive phase shift moves the graph to the **left** (because the function is evaluated at \(x + \phi\)), while a negative shift moves it to the **right**.  
- The period remains \(2\pi\) regardless of the amplitude or phase shift.

### Exam Connection
Exam questions often require you to sketch or recognise transformations of sine and cosine functions.  Understanding how the amplitude and phase shift change the shape of the graph helps you to match equations to graphs and vice versa.  While graphs in exams are usually static, this widget develops intuition that you can use to check your sketches.

### How to Run
Copy the code below into a file named `trig_graph_explorer.html` and open it in a browser.  Use the sliders and dropdown menu to manipulate the graph.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Trig Graph Transformation Explorer</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 20px; }
    .controls { margin-bottom: 10px; }
    label { margin-right: 15px; }
    canvas { border: 1px solid #888; }
  </style>
</head>
<body>
  <h3>Trig Graph Transformation Explorer</h3>
  <div class="controls">
    <label>Function:
      <select id="func">
        <option value="sin">sin</option>
        <option value="cos">cos</option>
      </select>
    </label>
    <label>Amplitude:
      <input type="range" id="amp" min="0.5" max="2" value="1" step="0.1">
      <span id="ampVal">1.0</span>
    </label>
    <label>Phase shift (°):
      <input type="range" id="phase" min="-180" max="180" value="0" step="5">
      <span id="phaseVal">0</span>
    </label>
  </div>
  <div id="equation" style="margin-bottom:10px;"></div>
  <canvas id="graph" width="600" height="300"></canvas>
  <script>
    const funcSelect = document.getElementById('func');
    const ampInput = document.getElementById('amp');
    const phaseInput = document.getElementById('phase');
    const ampVal = document.getElementById('ampVal');
    const phaseVal = document.getElementById('phaseVal');
    const equationDiv = document.getElementById('equation');
    const canvas = document.getElementById('graph');
    const ctx = canvas.getContext('2d');
    // Draw axes and graph based on current settings
    function drawGraph() {
      const A = parseFloat(ampInput.value);
      const phiDeg = parseFloat(phaseInput.value);
      const phi = phiDeg * Math.PI / 180;
      const func = funcSelect.value;
      ampVal.textContent = A.toFixed(1);
      phaseVal.textContent = phiDeg.toFixed(0);
      // Update equation display
      const fStr = func === 'sin' ? ' \sin' : ' \cos';
      equationDiv.innerHTML = `Current function: y = ${A.toFixed(1)} ${fStr}(x + ${phiDeg.toFixed(0)}°)`;
      // Clear canvas
      ctx.clearRect(0,0,canvas.width,canvas.height);
      // Draw axes
      const midY = canvas.height/2;
      ctx.strokeStyle = '#000';
      ctx.beginPath();
      ctx.moveTo(0, midY);
      ctx.lineTo(canvas.width, midY);
      ctx.moveTo(40, 0);
      ctx.lineTo(40, canvas.height);
      ctx.stroke();
      // X-axis tick positions for 0, π/2, π, 3π/2, 2π
      const ticks = [0, Math.PI/2, Math.PI, 3*Math.PI/2, 2*Math.PI];
      ticks.forEach(t => {
        const x = 40 + (t / (2*Math.PI)) * (canvas.width - 40);
        ctx.beginPath();
        ctx.moveTo(x, midY - 5);
        ctx.lineTo(x, midY + 5);
        ctx.stroke();
        ctx.fillText(String.fromCharCode(0x3C0) === 'π' ? '' : '', 0, 0); // placeholder
      });
      // Draw function
      ctx.strokeStyle = func === 'sin' ? '#0066cc' : '#cc0000';
      ctx.lineWidth = 2;
      ctx.beginPath();
      const samples = 500;
      for (let i = 0; i <= samples; i++) {
        const xPix = i / samples * (canvas.width - 40);
        const x = (xPix / (canvas.width - 40)) * 2 * Math.PI; // x in radians
        const yVal = A * (func === 'sin' ? Math.sin(x + phi) : Math.cos(x + phi));
        const yPix = midY - yVal * 100;
        const drawX = 40 + xPix;
        if (i === 0) ctx.moveTo(drawX, yPix);
        else ctx.lineTo(drawX, yPix);
      }
      ctx.stroke();
      // X-axis labels
      ctx.fillStyle = '#000';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      const labels = ['0','π/2','π','3π/2','2π'];
      ticks.forEach((t, index) => {
        const x = 40 + (t / (2*Math.PI)) * (canvas.width - 40);
        ctx.fillText(labels[index], x, midY + 6);
      });
      // Y-axis labels
      ctx.textAlign = 'right';
      ctx.textBaseline = 'middle';
      ctx.fillText('1', 35, midY - 100);
      ctx.fillText('0', 35, midY);
      ctx.fillText('-1', 35, midY + 100);
    }
    // Attach event listeners
    ampInput.addEventListener('input', drawGraph);
    phaseInput.addEventListener('input', drawGraph);
    funcSelect.addEventListener('change', drawGraph);
    // initial draw
    drawGraph();
  </script>
</body>
</html>
```

---

## WIDGET-002: Trigonometric equation solver
Source: AI‑proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[INTERACTIVE PLACEHOLDER: WIDGET‑002 | Source: AI‑proposed teaching enhancement, not present in lesson PDF | Insert from AS1_trigonometry_widgets.md | Purpose: interactive solver for basic and quadratic trigonometric equations]`  
Purpose: This tool solves equations of the form \(\sin x = k\), \(\cos x = k\), \(\tan x = k\) and quadratic equations in \(\sin x\), \(\cos x\) or \(\tan x\) within a specified interval.  It computes all solutions in the interval and rejects extraneous solutions.

### Learning Goal
Practise the procedure for solving basic and quadratic trigonometric equations, including finding reference angles, determining the correct quadrants and handling extraneous solutions.  See how the number of solutions changes with the value of \(k\) or the coefficients of the quadratic.

### Controls
- **Equation type**: choose `Basic (f(x) = k)` or `Quadratic (a f^2(x) + b f(x) + c = 0)`.  
- **Function**: select `sin`, `cos` or `tan`.  
- **Value k** (for basic equations): input between −1 and 1 for sine/cosine or a wider range for tangent.  
- **Coefficients a, b, c** (for quadratic equations): real numbers defining the quadratic in \(f(x)\).  
- **Domain start** and **domain end** (°): define the interval (in degrees) to search for solutions (default 0° to 360°).

### Live Outputs
- A list of solutions in degrees, sorted in ascending order, or a message indicating that no solutions exist.

### What to Notice
- For basic equations, the number of solutions depends on the sign of \(k\) and the function type.  
- Quadratic equations may yield two, one or no valid values for \(f(x)\).  Solutions where \(|\sin x|>1\) or \(|\cos x|>1\) are invalid and discarded.  
- Tangent equations have period 180°, so solutions occur at regular intervals.

### Exam Connection
This solver mirrors the procedure expected in exam questions but automates the algebra and trigonometric calculations.  Use it to check your work and to explore how the number and location of solutions change with different coefficients or values of \(k\).  Remember that in an exam you must show your working and justify each step.

### How to Run
Copy the code below into a file named `trig_equation_solver.html` and open it in a browser.  Enter your equation parameters and click the “Solve” button.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Trigonometric Equation Solver</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 20px; }
    .row { margin-bottom: 8px; }
    label { display: inline-block; width: 120px; }
    input[type=number] { width: 80px; }
    select { width: 120px; }
    button { margin-top: 10px; }
    #results { margin-top: 15px; white-space: pre-line; }
  </style>
</head>
<body>
  <h3>Trigonometric Equation Solver</h3>
  <div class="row">
    <label for="eqtype">Equation type:</label>
    <select id="eqtype">
      <option value="basic">Basic (f(x) = k)</option>
      <option value="quad">Quadratic (a f² + b f + c = 0)</option>
    </select>
  </div>
  <div class="row">
    <label for="func">Function f(x):</label>
    <select id="func">
      <option value="sin">sin</option>
      <option value="cos">cos</option>
      <option value="tan">tan</option>
    </select>
  </div>
  <div id="basicParams">
    <div class="row">
      <label for="kval">k value:</label>
      <input type="number" id="kval" value="0.5" step="0.01">
    </div>
  </div>
  <div id="quadParams" style="display:none;">
    <div class="row"><label for="aCoef">a :</label><input type="number" id="aCoef" value="1"></div>
    <div class="row"><label for="bCoef">b :</label><input type="number" id="bCoef" value="0"></div>
    <div class="row"><label for="cCoef">c :</label><input type="number" id="cCoef" value="-0.5"></div>
  </div>
  <div class="row">
    <label for="start">Domain start (°):</label>
    <input type="number" id="start" value="0">
    <label for="end">Domain end (°):</label>
    <input type="number" id="end" value="360">
  </div>
  <button id="solveBtn">Solve</button>
  <div id="results"></div>
  <script>
    const eqtype = document.getElementById('eqtype');
    const funcSel = document.getElementById('func');
    const kInput = document.getElementById('kval');
    const aInput = document.getElementById('aCoef');
    const bInput = document.getElementById('bCoef');
    const cInput = document.getElementById('cCoef');
    const startInput = document.getElementById('start');
    const endInput = document.getElementById('end');
    const basicParams = document.getElementById('basicParams');
    const quadParams = document.getElementById('quadParams');
    const resultsDiv = document.getElementById('results');
    eqtype.addEventListener('change', () => {
      if (eqtype.value === 'basic') {
        basicParams.style.display = '';
        quadParams.style.display = 'none';
      } else {
        basicParams.style.display = 'none';
        quadParams.style.display = '';
      }
    });
    document.getElementById('solveBtn').addEventListener('click', solveEq);
    function solveEq() {
      const func = funcSel.value;
      const domainStartDeg = parseFloat(startInput.value);
      const domainEndDeg = parseFloat(endInput.value);
      const domainStart = domainStartDeg * Math.PI / 180;
      const domainEnd = domainEndDeg * Math.PI / 180;
      let solutions = [];
      if (eqtype.value === 'basic') {
        const k = parseFloat(kInput.value);
        solutions = solveBasic(func, k, domainStart, domainEnd);
      } else {
        const a = parseFloat(aInput.value);
        const b = parseFloat(bInput.value);
        const c = parseFloat(cInput.value);
        solutions = solveQuadratic(func, a, b, c, domainStart, domainEnd);
      }
      if (solutions.length === 0) {
        resultsDiv.textContent = 'No solutions in the given interval.';
      } else {
        const solDeg = solutions.map(x => (x * 180 / Math.PI)).sort((p,q) => p - q);
        resultsDiv.textContent = 'Solutions (degrees):\n' + solDeg.map(v => v.toFixed(2)).join(', ');
      }
    }
    function solveBasic(func, k, start, end) {
      const sol = [];
      if (func === 'sin' || func === 'cos') {
        if (Math.abs(k) > 1) return sol; // no solutions
      }
      if (func === 'sin') {
        const alpha = Math.asin(Math.abs(k));
        const baseSolutions = k >= 0 ? [alpha, Math.PI - alpha] : [Math.PI + alpha, 2*Math.PI - alpha];
        for (let n = -2; n <= 2; n++) {
          baseSolutions.forEach(s => {
            const x = s + 2*Math.PI*n;
            if (x >= start - 1e-10 && x <= end + 1e-10) sol.push(x);
          });
        }
      } else if (func === 'cos') {
        const alpha = Math.acos(Math.abs(k));
        const baseSolutions = k >= 0 ? [alpha, 2*Math.PI - alpha] : [Math.PI - alpha, Math.PI + alpha];
        for (let n = -2; n <= 2; n++) {
          baseSolutions.forEach(s => {
            const x = s + 2*Math.PI*n;
            if (x >= start - 1e-10 && x <= end + 1e-10) sol.push(x);
          });
        }
      } else if (func === 'tan') {
        const alpha = Math.atan(k);
        for (let n = -5; n <= 5; n++) {
          const x = alpha + Math.PI*n;
          if (x >= start - 1e-10 && x <= end + 1e-10) sol.push(x);
        }
      }
      return sol;
    }
    function solveQuadratic(func, a, b, c, start, end) {
      const sol = [];
      // Solve ay^2 + by + c = 0 for y = f(x)
      if (Math.abs(a) < 1e-12) {
        // reduce to linear
        if (Math.abs(b) < 1e-12) return sol;
        const y = -c / b;
        return solveBasic(func, y, start, end);
      }
      const disc = b*b - 4*a*c;
      if (disc < 0) return sol;
      const y1 = (-b + Math.sqrt(disc)) / (2*a);
      const y2 = (-b - Math.sqrt(disc)) / (2*a);
      [y1, y2].forEach(yVal => {
        if (func === 'sin' || func === 'cos') {
          if (Math.abs(yVal) > 1 + 1e-12) return;
        }
        sol.push(...solveBasic(func, yVal, start, end));
      });
      return sol;
    }
  </script>
</body>
</html>
```

---

## WIDGET-003: Ambiguous case triangle solver (sine rule)
Source: AI‑proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[INTERACTIVE PLACEHOLDER: WIDGET‑003 | Source: AI‑proposed teaching enhancement, not present in lesson PDF | Insert from AS1_trigonometry_widgets.md | Purpose: interactive ambiguous case solver for the sine rule]`  
Purpose: When two sides and a non‑included angle (SSA) are given, the sine rule may produce 0, 1 or 2 possible triangles.  This widget allows you to enter side lengths \(a\) and \(b\) and angle \(A\) (in degrees), then computes the possible values of angle \(B\), angle \(C\) and the remaining side \(c\).  It tells you whether the ambiguous case yields no solution, one solution or two solutions.

### Learning Goal
Understand the ambiguous SSA case of the sine rule.  Recognise when two different triangles satisfy the given information and when there is no possible triangle.  Practise applying the sine rule and checking that the angles sum to 180°.

### Controls
- **Side a**: length of side opposite angle \(A\).  
- **Side b**: length of side opposite angle \(B\).  
- **Angle A (°)**: the known angle in degrees.  Must be between 0° and 180°.

### Live Outputs
- A table summarising each valid solution: angle \(B\), angle \(C\) and side \(c\).  If there are no solutions, an explanatory message is shown.

### What to Notice
- If \(b \sin A / a > 1\), there is **no solution**.  
- If \(b \sin A / a = 1\), there is exactly **one** right‑angled triangle.  
- If \(0 < b \sin A / a < 1\), there may be **two** valid triangles: one acute and one obtuse at \(B\).  
- Not all potential second solutions are valid; the sum of angles must be less than 180°.

### Exam Connection
The ambiguous case is a common exam trap.  Students must test for two possible angles and then check which are valid.  This widget offers immediate feedback on whether one or two solutions exist and encourages students to show both when appropriate.

### How to Run
Copy the code below into a file named `ambiguous_case_solver.html` and open it in a browser.  Enter the values of \(a\), \(b\) and \(A\) and click “Solve” to see the possible triangles.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Ambiguous Case Triangle Solver</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 20px; }
    label { display: inline-block; width: 120px; }
    input[type=number] { width: 80px; }
    button { margin-top: 10px; }
    table { margin-top: 10px; border-collapse: collapse; }
    th, td { border: 1px solid #ccc; padding: 4px 8px; text-align: right; }
  </style>
</head>
<body>
  <h3>Ambiguous Case Triangle Solver (SSA)</h3>
  <div>
    <label for="sidea">Side a:</label>
    <input type="number" id="sidea" value="7" min="0" step="0.1"><br>
    <label for="sideb">Side b:</label>
    <input type="number" id="sideb" value="5" min="0" step="0.1"><br>
    <label for="angleA">Angle A (°):</label>
    <input type="number" id="angleA" value="30" min="0" max="180" step="0.1"><br>
    <button id="solve">Solve</button>
  </div>
  <div id="output"></div>
  <script>
    document.getElementById('solve').addEventListener('click', function() {
      const a = parseFloat(document.getElementById('sidea').value);
      const b = parseFloat(document.getElementById('sideb').value);
      const Adeg = parseFloat(document.getElementById('angleA').value);
      const output = document.getElementById('output');
      if (a <= 0 || b <= 0 || Adeg <= 0 || Adeg >= 180) {
        output.textContent = 'Please enter positive sides and an angle between 0° and 180°.';
        return;
      }
      const A = Adeg * Math.PI / 180;
      const ratio = b * Math.sin(A) / a;
      output.innerHTML = '';
      if (ratio > 1 + 1e-12 || ratio < -1 - 1e-12) {
        output.textContent = 'No solution: b sin(A) / a > 1.';
        return;
      }
      // Compute potential angle B values
      let solutions = [];
      if (Math.abs(ratio - 1) < 1e-12) {
        // one right‑angled triangle
        const Bdeg = 90;
        const Cdeg = 180 - Adeg - Bdeg;
        const c = a * Math.sin(Cdeg * Math.PI / 180) / Math.sin(A);
        solutions.push({B: Bdeg, C: Cdeg, c: c});
      } else {
        const B1 = Math.asin(ratio);
        const B1deg = B1 * 180 / Math.PI;
        const B2deg = 180 - B1deg;
        // First possible triangle
        const C1deg = 180 - Adeg - B1deg;
        if (C1deg > 0) {
          const c1 = a * Math.sin(C1deg * Math.PI / 180) / Math.sin(A);
          solutions.push({B: B1deg, C: C1deg, c: c1});
        }
        // Second possible triangle (if different)
        if (B2deg > 0 && Math.abs(B2deg - B1deg) > 1e-6) {
          const C2deg = 180 - Adeg - B2deg;
          if (C2deg > 0) {
            const c2 = a * Math.sin(C2deg * Math.PI / 180) / Math.sin(A);
            solutions.push({B: B2deg, C: C2deg, c: c2});
          }
        }
      }
      if (solutions.length === 0) {
        output.textContent = 'No valid triangle can be formed.';
        return;
      }
      // Create a table of results
      let html = '<table><tr><th>Solution</th><th>\u03B2 (°)</th><th>\u03B3 (°)</th><th>c</th></tr>';
      solutions.forEach((sol, i) => {
        html += `<tr><td>${i+1}</td><td>${sol.B.toFixed(2)}</td><td>${sol.C.toFixed(2)}</td><td>${sol.c.toFixed(2)}</td></tr>`;
      });
      html += '</table>';
      output.innerHTML = html;
    });
  </script>
</body>
</html>
```
