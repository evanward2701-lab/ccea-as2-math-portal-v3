# Interactive Widgets for AS1 Transformations of Trigonometric Graphs

## WIDGET-001: Trigonometric graph transformation explorer
Source: AI-proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[INTERACTIVE PLACEHOLDER: WIDGET-001 | Source: AI-proposed teaching enhancement, not present in lesson PDF | Insert from AS1_transformations_widgets.md | Purpose: slider exploration showing how changing coefficients affects a trigonometric graph]`  
Purpose: Allow learners to explore how changing the parameters \(a\), \(b\), \(c\) and \(d\) in \(y = a\,\sin(bx + c) + d\), \(y = a\,\cos(bx + c) + d\) or \(y = a\,\tan(bx + c) + d\) affects the graph’s amplitude, period, phase shift and vertical shift.

### Learning Goal
This widget helps you understand how each parameter in a trigonometric function changes its graph. By adjusting the sliders you can observe how amplitude, period and shifts change the shape and position of the graph. The aim is to build intuition before sketching exam graphs by hand.

### Controls
- `Function`: select \(\sin\), \(\cos\) or \(\tan\) as the base function.
- `Amplitude (a)`: slider between −5 and 5 (step 0.1) to stretch or compress the graph vertically.
- `Frequency (b)`: slider between −4 and 4 (step 0.1) controlling horizontal compression or stretch. Note that \(b=0\) is not allowed because it would remove the dependence on \(x\).
- `Phase shift (c)` in degrees: slider between −180° and 180° (step 5°) shifting the graph horizontally. Positive values shift the graph to the left and negative values shift the graph to the right.
- `Vertical shift (d)`: slider between −5 and 5 (step 0.1) moving the graph up or down.

### Live Outputs
- Graph: A plot of the chosen function over 0° to 360° showing the effect of the current parameters.
- Key information: The amplitude \(|a|\), period (\(360°/|b|\) for \(\sin\) and \(\cos\) or \(180°/|b|\) for \(\tan\) if \(|b|>0\)), phase shift \(-c/b\) in degrees, and vertical shift \(d\).

### What to Notice
- Changing `a` scales the graph vertically and reverses it in the \(x\)-axis when negative.
- Changing `b` compresses or stretches the graph horizontally. Doubling \(b\) halves the period; halving \(b\) doubles the period.
- Adjusting `c` moves the graph left or right. Remember that adding inside the bracket \((x + c)\) shifts left.
- Adjusting `d` moves the graph up or down without changing its shape.
- For \(\tan\), notice that the vertical asymptotes move according to the period and phase shift.

### Exam Connection
Use this explorer to check your sketches and to develop intuition. However, always practise drawing graphs by hand: exam questions award marks for method and accuracy. When sketching, identify amplitude and period first, then apply shifts.

### How to Run
Copy the code below into a `.html` file and open it in a browser. Use the sliders and dropdown menu to explore different parameter values.

```html
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Trigonometric Graph Transformation Explorer</title>
<style>
  body { font-family: sans-serif; }
  #controls { margin-bottom: 1em; }
  label { margin-right: 1em; }
  canvas { border: 1px solid #ccc; }
</style>
</head>
<body>
  <h2>Trigonometric Graph Transformation Explorer</h2>
  <div id="controls">
    <label>Function:
      <select id="funcSelect">
        <option value="sin">sin</option>
        <option value="cos">cos</option>
        <option value="tan">tan</option>
      </select>
    </label>
    <label>a:
      <input type="range" id="aSlider" min="-5" max="5" step="0.1" value="1">
      <span id="aVal">1</span>
    </label>
    <label>b:
      <input type="range" id="bSlider" min="-4" max="4" step="0.1" value="1">
      <span id="bVal">1</span>
    </label>
    <label>c (°):
      <input type="range" id="cSlider" min="-180" max="180" step="5" value="0">
      <span id="cVal">0°</span>
    </label>
    <label>d:
      <input type="range" id="dSlider" min="-5" max="5" step="0.1" value="0">
      <span id="dVal">0</span>
    </label>
  </div>
  <div id="info"></div>
  <canvas id="graph" width="600" height="300"></canvas>

  <script>
    const aSlider = document.getElementById('aSlider');
    const bSlider = document.getElementById('bSlider');
    const cSlider = document.getElementById('cSlider');
    const dSlider = document.getElementById('dSlider');
    const funcSelect = document.getElementById('funcSelect');
    const canvas = document.getElementById('graph');
    const ctx = canvas.getContext('2d');
    const info = document.getElementById('info');

    function drawGraph() {
      const a = parseFloat(aSlider.value);
      const b = parseFloat(bSlider.value);
      const c = parseFloat(cSlider.value);
      const d = parseFloat(dSlider.value);
      const funcName = funcSelect.value;

      document.getElementById('aVal').textContent = a;
      document.getElementById('bVal').textContent = b;
      document.getElementById('cVal').textContent = c + '°';
      document.getElementById('dVal').textContent = d;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw axes
      ctx.strokeStyle = '#999';
      ctx.lineWidth = 1;
      // Horizontal axis
      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2);
      ctx.lineTo(canvas.width, canvas.height / 2);
      ctx.stroke();
      // Vertical axis at x=0
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, canvas.height);
      ctx.stroke();

      // Plot function
      ctx.strokeStyle = '#0073b7';
      ctx.lineWidth = 2;
      ctx.beginPath();
      let first = true;
      for (let i = 0; i <= canvas.width; i++) {
        // Map pixel to degrees 0-360
        const xDeg = (i / canvas.width) * 360;
        // Convert to radians
        const xRad = (b * (xDeg + c)) * Math.PI / 180;
        let yVal;
        if (funcName === 'sin') {
          yVal = a * Math.sin(xRad) + d;
        } else if (funcName === 'cos') {
          yVal = a * Math.cos(xRad) + d;
        } else {
          // tan: avoid drawing near asymptotes
          const cosVal = Math.cos(xRad / a);
          yVal = a * Math.tan(xRad) + d;
        }
        // Map y to pixel (midpoint at height/2, scale)
        const yPixel = canvas.height / 2 - yVal * (canvas.height / 10);
        if (first) {
          ctx.moveTo(i, yPixel);
          first = false;
        } else {
          ctx.lineTo(i, yPixel);
        }
      }
      ctx.stroke();

      // Display amplitude, period and phase shift
      let period;
      let parentPeriod = (funcName === 'tan') ? 180 : 360;
      if (b !== 0) {
        period = Math.abs(parentPeriod / b);
      } else {
        period = 'undefined';
      }
      const amplitude = Math.abs(a);
      const phase = (b !== 0) ? (-c / b) : 'undefined';
      info.innerHTML =
        `<p><strong>Amplitude:</strong> ${amplitude}</p>` +
        `<p><strong>Period:</strong> ${period}°</p>` +
        `<p><strong>Phase shift:</strong> ${phase}°</p>` +
        `<p><strong>Vertical shift:</strong> ${d}</p>`;
    }

    // Attach event listeners
    [aSlider, bSlider, cSlider, dSlider, funcSelect].forEach(el => {
      el.addEventListener('input', drawGraph);
    });

    // Initial draw
    drawGraph();
  </script>
</body>
</html>
```

## WIDGET-002: Coordinate mapping calculator
Source: AI-proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[INTERACTIVE PLACEHOLDER: WIDGET-002 | Source: AI-proposed teaching enhancement, not present in lesson PDF | Insert from AS1_transformations_widgets.md | Purpose: calculator showing how a coordinate transforms under y = a f(bx + c) + d]`  
Purpose: Allow learners to input a point on a parent graph and parameters \(a\), \(b\), \(c\), \(d\), then calculate the new coordinates on the transformed graph according to the mapping \(x_{\text{new}} = \tfrac{x_{\text{old}} - c}{b}\) and \(y_{\text{new}} = a\,y_{\text{old}} + d\).

### Learning Goal
Understand the coordinate mapping method: to sketch a transformed graph you can take key points from the parent graph and compute their images using the transformation formula.

### Controls
- `x_old`: original \(x\) coordinate in degrees.
- `y_old`: original \(y\) coordinate.
- `a, b, c, d`: transformation parameters.
- `Calculate` button: computes the new coordinates \((x_{\text{new}}, y_{\text{new}})\).

### Live Outputs
- The new \(x\) and \(y\) coordinates after applying the transformation.
- A message indicating if \(b=0\) (which is invalid).

### What to Notice
- The \(x\) coordinate is adjusted by subtracting the phase shift \(c\) and dividing by \(b\).
- The \(y\) coordinate is scaled by \(a\) and shifted by \(d\).
- If \(b\) is negative, the graph reflects in the \(y\)-axis and the phase shift adjusts accordingly.

### Exam Connection
This calculator helps you practise mapping key points when sketching transformed trigonometric graphs. In exams you must perform these calculations manually and show the working; the calculator helps you learn the pattern.

### How to Run
Copy the code below into a `.html` file and open it in a browser. Enter values for the original point and parameters, then click the `Calculate` button.

```html
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Coordinate Mapping Calculator</title>
<style>
  body { font-family: sans-serif; }
  label { display: block; margin-top: 0.5em; }
  input { width: 100px; }
</style>
</head>
<body>
  <h2>Coordinate Mapping Calculator</h2>
  <p>Enter an original point on the parent graph and the transformation parameters to find the image point on \(y = a\,f(bx + c) + d\).</p>
  <label>x_old (°): <input type="number" id="x_old" value="0"></label>
  <label>y_old: <input type="number" id="y_old" value="0"></label>
  <label>a: <input type="number" id="a_param" value="1" step="0.1"></label>
  <label>b: <input type="number" id="b_param" value="1" step="0.1"></label>
  <label>c (°): <input type="number" id="c_param" value="0" step="1"></label>
  <label>d: <input type="number" id="d_param" value="0" step="0.1"></label>
  <button id="calcBtn">Calculate</button>
  <div id="result" style="margin-top:1em;"></div>

  <script>
    document.getElementById('calcBtn').addEventListener('click', function() {
      const xOld = parseFloat(document.getElementById('x_old').value);
      const yOld = parseFloat(document.getElementById('y_old').value);
      const a = parseFloat(document.getElementById('a_param').value);
      const b = parseFloat(document.getElementById('b_param').value);
      const c = parseFloat(document.getElementById('c_param').value);
      const d = parseFloat(document.getElementById('d_param').value);
      const resultDiv = document.getElementById('result');
      if (b === 0) {
        resultDiv.innerHTML = '<p style="color:red;">Error: b cannot be zero.</p>';
        return;
      }
      const xNew = (xOld - c) / b;
      const yNew = a * yOld + d;
      resultDiv.innerHTML =
        `<p>New x (°): ${xNew.toFixed(2)}</p>` +
        `<p>New y: ${yNew.toFixed(2)}</p>`;
    });
  </script>
</body>
</html>
```
