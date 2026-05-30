```markdown
# A21_numerical_methods_widgets.md

**Unit code:** A21  
**Topic ID:** A21NumericalMethods  

## A21NumericalMethodsWidget-001: Interactive Newton-Raphson Tangent

**Source:** AI-proposed teaching enhancement, not present in supplied lesson evidence  
**Related lesson section:** 8.5  
**Used in placeholder:** `[INTERACTIVE PLACEHOLDER: A21NumericalMethodsWidget-001 | ...]`  
**Purpose:** Allow the student to drag $x_0$ and see how the tangent projects down to create $x_1$, demonstrating rapid convergence and failure points.  

### Learning Goal  
This widget helps the learner intuitively understand the geometric mechanism of the Newton-Raphson method. By dragging the initial guess $x_0$, they can see how the tangent line dictates the next guess $x_1$.

### Controls  
- `Slider for x0`: Changes the initial approximation on the x-axis.

### Live Outputs  
- `Tangent Line`: Redraws dynamically based on the derivative at $x_0$.
- `x1 Point`: Moves along the x-axis to show the new approximation.
- `Calculation Text`: Shows the live values of $f(x_0)$, $f'(x_0)$, and the resulting $x_1$.

### What to Notice  
- **Rapid Convergence:** Notice how placing $x_0$ even moderately close to the root causes $x_1$ to jump almost exactly onto the root.
- **Stationary Point Failure:** Notice what happens if you drag $x_0$ to the minimum turning point of the curve. The tangent becomes horizontal, $f'(x_0)$ becomes zero, and $x_1$ disappears (shoots to infinity). 

### Exam Connection  
Exam questions frequently ask "Explain why the Newton-Raphson method fails if $x_0 = c$". This widget visually proves that if $c$ is a stationary point, the tangent is horizontal and never meets the x-axis.

### How to Run  
Copy the code below into a `.html` file and open it in a browser.  

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Newton-Raphson Interactive</title>
  <style>
    body { font-family: sans-serif; text-align: center; margin-top: 20px; }
    canvas { border: 1px solid #ccc; background-color: #f9f9f9; cursor: crosshair; }
    .controls { margin-top: 20px; }
    .info { margin-top: 10px; font-size: 1.1em; }
  </style>
</head>
<body>
  <h2>Newton-Raphson Method Explorer</h2>
  <canvas id="nrCanvas" width="600" height="400"></canvas>
  
  <div class="controls">
    <label for="x0Slider">Drag x₀: </label>
    <input type="range" id="x0Slider" min="-3" max="4" step="0.05" value="3" style="width: 300px;">
  </div>
  
  <div class="info" id="infoText">
    x₀ = 3.00 | f(x₀) = ... | f'(x₀) = ... | x₁ = ...
  </div>

  <script>
    const canvas = document.getElementById('nrCanvas');
    const ctx = canvas.getContext('2d');
    const slider = document.getElementById('x0Slider');
    const infoText = document.getElementById('infoText');

    // Coordinate mapping
    const scaleX = 60;
    const scaleY = 30;
    const offsetX = 300;
    const offsetY = 300;

    function mapX(x) { return offsetX + x * scaleX; }
    function mapY(y) { return offsetY - y * scaleY; }

    // The function: f(x) = x^3/3 - x^2 - x + 2
    function f(x) { return (Math.pow(x, 3) / 3) - Math.pow(x, 2) - x + 2; }
    function df(x) { return Math.pow(x, 2) - 2 * x - 1; }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw Axes
      ctx.beginPath();
      ctx.strokeStyle = "#aaa";
      ctx.lineWidth = 2;
      ctx.moveTo(0, offsetY); ctx.lineTo(canvas.width, offsetY);
      ctx.moveTo(offsetX, 0); ctx.lineTo(offsetX, canvas.height);
      ctx.stroke();

      // Draw Curve
      ctx.beginPath();
      ctx.strokeStyle = "#0078d7";
      ctx.lineWidth = 3;
      for (let px = 0; px <= canvas.width; px++) {
        let x = (px - offsetX) / scaleX;
        let y = f(x);
        let py = mapY(y);
        if (px === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();

      // Get x0 from slider
      let x0 = parseFloat(slider.value);
      let y0 = f(x0);
      let m = df(x0);

      // Draw x0 line
      ctx.beginPath();
      ctx.strokeStyle = "#555";
      ctx.setLineDash([5, 5]);
      ctx.moveTo(mapX(x0), offsetY);
      ctx.lineTo(mapX(x0), mapY(y0));
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw x0 point
      ctx.beginPath();
      ctx.fillStyle = "#000";
      ctx.arc(mapX(x0), offsetY, 4, 0, Math.PI*2);
      ctx.fill();
      ctx.fillText("x₀", mapX(x0) - 5, offsetY + 15);

      // Draw point on curve
      ctx.beginPath();
      ctx.fillStyle = "#0078d7";
      ctx.arc(mapX(x0), mapY(y0), 5, 0, Math.PI*2);
      ctx.fill();

      // Calculate x1
      if (Math.abs(m) > 0.001) {
        let x1 = x0 - (y0 / m);
        
        // Draw Tangent
        ctx.beginPath();
        ctx.strokeStyle = "#ff0000";
        ctx.lineWidth = 2;
        // Tangent line equation: y - y0 = m(x - x0) => y = m(x - x0) + y0
        let drawX_start = -5;
        let drawY_start = m * (drawX_start - x0) + y0;
        let drawX_end = 5;
        let drawY_end = m * (drawX_end - x0) + y0;
        
        ctx.moveTo(mapX(drawX_start), mapY(drawY_start));
        ctx.lineTo(mapX(drawX_end), mapY(drawY_end));
        ctx.stroke();

        // Draw x1 point
        ctx.beginPath();
        ctx.fillStyle = "#ff0000";
        ctx.arc(mapX(x1), offsetY, 5, 0, Math.PI*2);
        ctx.fill();
        ctx.fillText("x₁", mapX(x1) - 5, offsetY + 15);

        infoText.innerHTML = `x₀ = ${x0.toFixed(2)} | f(x₀) = ${y0.toFixed(2)} | f'(x₀) = ${m.toFixed(2)} | <strong>x₁ = ${x1.toFixed(4)}</strong>`;
      } else {
        // Horizontal tangent
        ctx.beginPath();
        ctx.strokeStyle = "#ff0000";
        ctx.lineWidth = 2;
        ctx.moveTo(0, mapY(y0));
        ctx.lineTo(canvas.width, mapY(y0));
        ctx.stroke();
        infoText.innerHTML = `x₀ = ${x0.toFixed(2)} | f(x₀) = ${y0.toFixed(2)} | f'(x₀) = 0.00 | <strong>x₁ = Undefined (Horizontal Tangent)</strong>`;
      }
    }

    slider.addEventListener('input', draw);
    draw();
  </script>
</body>
</html>
```
```
