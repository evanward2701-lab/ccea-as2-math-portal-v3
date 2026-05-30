```markdown
# A21_differentiation_widgets.md

# Interactive Widgets for A21 Differentiation  

**Unit code:** A21  
**Topic ID:** A21Differentiation  

## A21DifferentiationWidget-001: Secant to Tangent Limit Demonstrator  

**Source:** AI-proposed teaching enhancement, not present in supplied lesson evidence  
**Related lesson section:** 10  
**Used in placeholder:** `[INTERACTIVE PLACEHOLDER: A21DifferentiationWidget-001 | ...]`  
**Purpose:** Interactive secant-to-tangent limit demonstrator.  

### Learning Goal  
This widget helps the learner understand the definition of the derivative from first principles by visualising how a secant line becomes a tangent line as $h \to 0$.  

### Controls  
- `Slider h`: Changes the distance between $x$ and $x+h$ on the x-axis.  

### Live Outputs  
- `Secant Line`: Updates dynamically to connect $(x, f(x))$ and $(x+h, f(x+h))$.  
- `Gradient Calculation`: Shows the live calculation of $\frac{f(x+h) - f(x)}{h}$.  

### What to Notice  
- As $h$ gets closer to 0, the secant line visually merges with the tangent line.  
- The calculated gradient approaches the exact value of the derivative at that point.  
- This helps prevent the misconception that the derivative is just an algebraic trick; it is fundamentally a geometric limit.  

### Exam Connection  
This supports written exam working for LO A21-DIFF-LO002 (Understand the gradient of the tangent to a curve as a limit) and the first principles proof of $\sin x$.  

### How to Run  
Copy the code below into a `.html` file and open it in a browser.  

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Secant to Tangent Limit</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 20px; background-color: #f9f9f9; }
    .container { max-width: 600px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
    canvas { border: 1px solid #ccc; background: #fff; width: 100%; height: 300px; }
    .controls { margin-top: 20px; }
    input[type=range] { width: 100%; }
    .output { margin-top: 10px; font-weight: bold; font-size: 1.1em; }
  </style>
</head>
<body>
  <div class="container">
    <h2>Derivative as a Limit (f(x) = sin x)</h2>
    <canvas id="graphCanvas" width="600" height="300"></canvas>
    <div class="controls">
      <label for="hSlider">Value of h: <span id="hValue">1.00</span></label>
      <input type="range" id="hSlider" min="0.01" max="2" step="0.01" value="1">
    </div>
    <div class="output" id="gradientOutput">Gradient of secant: </div>
  </div>

  <script>
    const canvas = document.getElementById('graphCanvas');
    const ctx = canvas.getContext('2d');
    const hSlider = document.getElementById('hSlider');
    const hValueDisplay = document.getElementById('hValue');
    const gradientOutput = document.getElementById('gradientOutput');

    // Graph settings
    const originX = 100;
    const originY = 150;
    const scaleX = 100; // pixels per unit
    const scaleY = 100; // pixels per unit
    const fixedX = 1; // The point x where we find the tangent

    function f(x) {
      return Math.sin(x);
    }

    function drawGraph() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw axes
      ctx.beginPath();
      ctx.moveTo(0, originY);
      ctx.lineTo(canvas.width, originY);
      ctx.moveTo(originX, 0);
      ctx.lineTo(originX, canvas.height);
      ctx.strokeStyle = '#ccc';
      ctx.stroke();

      // Draw f(x) = sin(x)
      ctx.beginPath();
      for (let px = 0; px < canvas.width; px++) {
        let x = (px - originX) / scaleX;
        let y = f(x);
        let py = originY - y * scaleY;
        if (px === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.strokeStyle = '#2c3e50';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Get h from slider
      let h = parseFloat(hSlider.value);
      hValueDisplay.textContent = h.toFixed(2);

      // Points
      let x1 = fixedX;
      let y1 = f(x1);
      let x2 = fixedX + h;
      let y2 = f(x2);

      let px1 = originX + x1 * scaleX;
      let py1 = originY - y1 * scaleY;
      let px2 = originX + x2 * scaleX;
      let py2 = originY - y2 * scaleY;

      // Draw Secant Line
      ctx.beginPath();
      // Extend line across canvas
      let m = (y2 - y1) / h;
      let c = y1 - m * x1;
      
      let startX = -1;
      let startY = m * startX + c;
      let endX = 5;
      let endY = m * endX + c;

      ctx.moveTo(originX + startX * scaleX, originY - startY * scaleY);
      ctx.lineTo(originX + endX * scaleX, originY - endY * scaleY);
      ctx.strokeStyle = '#e74c3c';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw Points
      ctx.beginPath();
      ctx.arc(px1, py1, 5, 0, 2 * Math.PI);
      ctx.fillStyle = '#2980b9';
      ctx.fill();

      ctx.beginPath();
      ctx.arc(px2, py2, 5, 0, 2 * Math.PI);
      ctx.fillStyle = '#e74c3c';
      ctx.fill();

      // Update Output
      gradientOutput.innerHTML = `Gradient of secant: ${m.toFixed(4)} <br> <span style="color:#7f8c8d; font-size:0.9em;">(Exact tangent gradient: ${Math.cos(fixedX).toFixed(4)})</span>`;
    }

    hSlider.addEventListener('input', drawGraph);
    drawGraph(); // Initial draw
  </script>
</body>
</html>
```
```