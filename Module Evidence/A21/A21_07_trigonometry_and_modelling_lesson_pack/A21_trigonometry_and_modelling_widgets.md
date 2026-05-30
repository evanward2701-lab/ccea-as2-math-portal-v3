```markdown
# A21_trigonometry_and_modelling_widgets.md

**Unit code:** A21
**Topic ID:** A21TrigonometryAndModelling

## A21TrigonometryAndModellingWidget-001: Harmonic Wave Combiner

**Source:** AI-proposed teaching enhancement, not present in supplied lesson evidence
**Related lesson section:** 8.3
**Used in placeholder:** `[INTERACTIVE PLACEHOLDER: A21TrigonometryAndModellingWidget-001 | Source: AI-proposed teaching enhancement | Insert from A21_trigonometry_and_modelling_widgets.md | Purpose: Interactive harmonic wave combiner allowing students to change 'a' and 'b' and see the resulting 'R' and 'alpha' visually]`
**Purpose:** Allows students to dynamically change the coefficients of a sine and cosine wave and instantly see how they superimpose to create a single harmonic wave with a new amplitude and phase shift.

### Learning Goal
To build an intuitive understanding that $a\sin x + b\cos x$ always results in a single sine wave $R\sin(x + \alpha)$, and to visually connect the algebraic values of $R$ and $\alpha$ to the graphical amplitude and horizontal shift.

### Controls
- `Slider a`: Changes the coefficient of the $\sin x$ term (from -5 to 5).
- `Slider b`: Changes the coefficient of the $\cos x$ term (from -5 to 5).

### Live Outputs
- `Blue Wave`: $y = a\sin x$
- `Red Wave`: $y = b\cos x$
- `Purple Wave`: The combined wave $y = a\sin x + b\cos x$
- `Text Output`: The calculated values of $R = \sqrt{a^2 + b^2}$ and $\alpha = \arctan(b/a)$.

### What to Notice
- No matter what values of $a$ and $b$ you choose, the purple wave is always a perfect, smooth sine wave.
- The maximum height of the purple wave is exactly $R$.
- When $b$ is positive, the wave shifts to the left (positive phase shift $\alpha$).

### Exam Connection
This visualises the exact process required in exam questions asking you to "Express $a\sin x + b\cos x$ in the form $R\sin(x + \alpha)$" and subsequently find its maximum value.

### How to Run
Copy the code below into a `.html` file and open it in a browser.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Harmonic Wave Combiner</title>
  <style>
    body { font-family: sans-serif; margin: 20px; background-color: #f9f9f9; }
    .container { max-width: 800px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
    canvas { border: 1px solid #ccc; background: #fff; width: 100%; height: 300px; }
    .controls { margin-top: 20px; display: flex; flex-direction: column; gap: 15px; }
    .control-group { display: flex; align-items: center; gap: 10px; }
    input[type=range] { flex-grow: 1; }
    .output { margin-top: 20px; padding: 15px; background: #eef; border-radius: 5px; font-size: 1.2em; }
    .legend { display: flex; gap: 15px; margin-top: 10px; font-weight: bold; }
    .leg-sin { color: blue; }
    .leg-cos { color: red; }
    .leg-comb { color: purple; }
  </style>
</head>
<body>
  <div class="container">
    <h2>Harmonic Wave Combiner</h2>
    <p>Adjust the coefficients to see how <strong>a sin(x) + b cos(x)</strong> combines into <strong>R sin(x + &alpha;)</strong>.</p>
    
    <canvas id="waveCanvas" width="800" height="300"></canvas>
    
    <div class="legend">
      <span class="leg-sin">Blue: a sin(x)</span>
      <span class="leg-cos">Red: b cos(x)</span>
      <span class="leg-comb">Purple: Combined Wave</span>
    </div>

    <div class="controls">
      <div class="control-group">
        <label for="a-slider"><strong>a</strong> (sin coeff): <span id="a-val">3</span></label>
        <input type="range" id="a-slider" min="-5" max="5" step="0.1" value="3">
      </div>
      <div class="control-group">
        <label for="b-slider"><strong>b</strong> (cos coeff): <span id="b-val">4</span></label>
        <input type="range" id="b-slider" min="-5" max="5" step="0.1" value="4">
      </div>
    </div>

    <div class="output" id="math-output">
      Loading...
    </div>
  </div>

  <script>
    const canvas = document.getElementById('waveCanvas');
    const ctx = canvas.getContext('2d');
    const aSlider = document.getElementById('a-slider');
    const bSlider = document.getElementById('b-slider');
    const aVal = document.getElementById('a-val');
    const bVal = document.getElementById('b-val');
    const mathOutput = document.getElementById('math-output');

    function draw() {
      const a = parseFloat(aSlider.value);
      const b = parseFloat(bSlider.value);
      
      aVal.textContent = a.toFixed(1);
      bVal.textContent = b.toFixed(1);

      // Calculate R and alpha
      const R = Math.sqrt(a*a + b*b);
      let alpha = Math.atan2(b, a); // in radians
      let alphaDeg = alpha * (180 / Math.PI);

      mathOutput.innerHTML = `
        <strong>Equation:</strong> ${a.toFixed(1)} sin(x) + ${b.toFixed(1)} cos(x) <br>
        <strong>R (Amplitude):</strong> &radic;(${a.toFixed(1)}&sup2; + ${b.toFixed(1)}&sup2;) = ${R.toFixed(2)} <br>
        <strong>&alpha; (Phase Shift):</strong> arctan(${b.toFixed(1)} / ${a.toFixed(1)}) = ${alphaDeg.toFixed(1)}&deg; <br>
        <strong>Harmonic Form:</strong> ${R.toFixed(2)} sin(x + ${alphaDeg.toFixed(1)}&deg;)
      `;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw axes
      ctx.beginPath();
      ctx.strokeStyle = '#aaa';
      ctx.lineWidth = 1;
      ctx.moveTo(0, canvas.height / 2);
      ctx.lineTo(canvas.width, canvas.height / 2);
      ctx.moveTo(canvas.width / 2, 0);
      ctx.lineTo(canvas.width / 2, canvas.height);
      ctx.stroke();

      const scaleX = 40; // pixels per radian
      const scaleY = 20; // pixels per unit

      function plotFunction(fn, color, width) {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        for (let px = 0; px < canvas.width; px++) {
          const x = (px - canvas.width / 2) / scaleX;
          const y = fn(x);
          const py = canvas.height / 2 - y * scaleY;
          if (px === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();
      }

      // Plot a*sin(x)
      plotFunction(x => a * Math.sin(x), 'rgba(0, 0, 255, 0.4)', 2);
      // Plot b*cos(x)
      plotFunction(x => b * Math.cos(x), 'rgba(255, 0, 0, 0.4)', 2);
      // Plot combined
      plotFunction(x => a * Math.sin(x) + b * Math.cos(x), 'purple', 3);
    }

    aSlider.addEventListener('input', draw);
    bSlider.addEventListener('input', draw);
    draw();
  </script>
</body>
</html>
```
```

