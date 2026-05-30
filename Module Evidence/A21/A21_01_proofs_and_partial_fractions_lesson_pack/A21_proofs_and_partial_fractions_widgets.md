```markdown
# Interactive Widgets for A21 Proofs and Partial Fractions

**Unit code:** A21  
**Topic ID:** A21ProofsAndPartialFractions  

## A21ProofsAndPartialFractionsWidget-001: Partial Fractions Identity Grapher  

**Source:** AI-proposed teaching enhancement, not present in supplied lesson evidence  
**Related lesson section:** 8.3  
**Used in placeholder:** `[INTERACTIVE PLACEHOLDER: A21ProofsAndPartialFractionsWidget-001 | ...]`  
**Purpose:** Interactive widget allowing students to change A and B and see how the combined rational function graph updates, reinforcing that partial fractions are just an algebraic rewrite of the same curve.  

### Learning Goal  
To visually prove that an algebraic identity ($\equiv$) means two expressions produce the exact same graph for all valid values of $x$. It helps students see that finding $A$ and $B$ is about making the red curve perfectly overlap the blue curve.

### Controls  
- `Slider A`: Changes the numerator of the first partial fraction $\frac{A}{x-3}$.
- `Slider B`: Changes the numerator of the second partial fraction $\frac{B}{x+1}$.

### Live Outputs  
- `Blue Curve`: The original combined fraction $y = \frac{6x-2}{(x-3)(x+1)}$.
- `Red Dashed Curve`: The sum of the partial fractions $y = \frac{A}{x-3} + \frac{B}{x+1}$.

### What to Notice  
- When the sliders are set to random values, the red dashed curve and the solid blue curve look completely different.
- As you move $A$ to $4$ and $B$ to $2$, the red dashed curve perfectly snaps over the blue curve.
- This perfect overlap visually demonstrates what it means for two algebraic expressions to be **identical**.

### Exam Connection  
This supports the written exam working by reinforcing the concept of an identity. When students equate coefficients or substitute values to find $A$ and $B$, they are algebraically forcing these two graphs to become one.

### How to Run  
Copy the code below into a `.html` file and open it in a browser.  

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Partial Fractions Identity Grapher</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 20px; background-color: #f9f9f9; }
    .container { max-width: 800px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
    h2 { color: #333; }
    canvas { border: 1px solid #ccc; background-color: #fff; margin-top: 10px; }
    .controls { margin-top: 20px; padding: 15px; background: #f1f1f1; border-radius: 8px; }
    .control-group { margin-bottom: 15px; }
    label { font-weight: bold; display: inline-block; width: 30px; }
    input[type=range] { width: 300px; vertical-align: middle; }
    .value-display { font-family: monospace; font-size: 16px; margin-left: 10px; background: #fff; padding: 2px 6px; border: 1px solid #ccc; }
    .equation { font-size: 18px; margin-top: 10px; font-family: 'Times New Roman', serif; }
    .blue-text { color: #1976d2; font-weight: bold; }
    .red-text { color: #d32f2f; font-weight: bold; }
  </style>
</head>
<body>
  <div class="container">
    <h2>Partial Fractions Identity Grapher</h2>
    <p>Adjust A and B to make the <span class="red-text">red dashed curve</span> perfectly match the <span class="blue-text">solid blue curve</span>.</p>
    
    <div class="equation">
      <span class="blue-text">y = (6x - 2) / ((x - 3)(x + 1))</span> &nbsp;&nbsp; vs &nbsp;&nbsp; 
      <span class="red-text">y = A / (x - 3) + B / (x + 1)</span>
    </div>

    <canvas id="graphCanvas" width="760" height="400"></canvas>

    <div class="controls">
      <div class="control-group">
        <label for="sliderA">A:</label>
        <input type="range" id="sliderA" min="-5" max="10" step="0.5" value="1">
        <span class="value-display" id="valA">1.0</span>
      </div>
      <div class="control-group">
        <label for="sliderB">B:</label>
        <input type="range" id="sliderB" min="-5" max="10" step="0.5" value="1">
        <span class="value-display" id="valB">1.0</span>
      </div>
      <p id="successMessage" style="color: #2e7d32; font-weight: bold; display: none;">🎉 Perfect Match! The identity is solved.</p>
    </div>
  </div>

  <script>
    const canvas = document.getElementById('graphCanvas');
    const ctx = canvas.getContext('2d');
    const sliderA = document.getElementById('sliderA');
    const sliderB = document.getElementById('sliderB');
    const valA = document.getElementById('valA');
    const valB = document.getElementById('valB');
    const successMessage = document.getElementById('successMessage');

    // Graph settings
    const width = canvas.width;
    const height = canvas.height;
    const scaleX = 40; // pixels per unit x
    const scaleY = 20; // pixels per unit y
    const offsetX = width / 2;
    const offsetY = height / 2;

    function drawAxes() {
      ctx.beginPath();
      ctx.strokeStyle = '#aaa';
      ctx.lineWidth = 1;
      // X axis
      ctx.moveTo(0, offsetY);
      ctx.lineTo(width, offsetY);
      // Y axis
      ctx.moveTo(offsetX, 0);
      ctx.lineTo(offsetX, height);
      ctx.stroke();

      // Tick marks
      ctx.fillStyle = '#666';
      ctx.font = '12px Arial';
      for(let i = -10; i <= 10; i++) {
        if(i !== 0) {
          ctx.fillText(i, offsetX + i * scaleX - 5, offsetY + 15);
          ctx.fillText(i, offsetX - 15, offsetY - i * scaleY + 5);
        }
      }
    }

    function originalFunction(x) {
      if (Math.abs(x - 3) < 0.05 || Math.abs(x + 1) < 0.05) return null; // Asymptotes
      return (6 * x - 2) / ((x - 3) * (x + 1));
    }

    function partialFunction(x, A, B) {
      if (Math.abs(x - 3) < 0.05 || Math.abs(x + 1) < 0.05) return null; // Asymptotes
      return (A / (x - 3)) + (B / (x + 1));
    }

    function drawCurve(func, color, isDashed, A, B) {
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = isDashed ? 3 : 4;
      if (isDashed) ctx.setLineDash([10, 10]);
      else ctx.setLineDash([]);

      let firstPoint = true;
      for (let px = 0; px <= width; px++) {
        let x = (px - offsetX) / scaleX;
        let y = func === originalFunction ? originalFunction(x) : partialFunction(x, A, B);
        
        if (y === null || Math.abs(y) > 50) {
          firstPoint = true; // Break line at asymptotes
          continue;
        }

        let py = offsetY - y * scaleY;

        if (firstPoint) {
          ctx.moveTo(px, py);
          firstPoint = false;
        } else {
          ctx.lineTo(px, py);
        }
      }
      ctx.stroke();
      ctx.setLineDash([]); // reset
    }

    function updateGraph() {
      let A = parseFloat(sliderA.value);
      let B = parseFloat(sliderB.value);
      
      valA.textContent = A.toFixed(1);
      valB.textContent = B.toFixed(1);

      ctx.clearRect(0, 0, width, height);
      drawAxes();
      
      // Draw original function (Blue)
      drawCurve(originalFunction, 'rgba(25, 118, 210, 0.6)', false);
      
      // Draw partial fraction function (Red Dashed)
      drawCurve(partialFunction, '#d32f2f', true, A, B);

      if (A === 4 && B === 2) {
        successMessage.style.display = 'block';
      } else {
        successMessage.style.display = 'none';
      }
    }

    sliderA.addEventListener('input', updateGraph);
    sliderB.addEventListener('input', updateGraph);

    // Initial draw
    updateGraph();
  </script>
</body>
</html>
```
```
