```markdown
A21_integration_widgets.md
```

```markdown
# Interactive Widgets for A21 Integration  

**Unit code:** A21  
**Topic ID:** A21Integration  

## A21IntegrationWidget-001: Interactive Trapezium Rule Visualizer  

**Source:** AI-proposed teaching enhancement, not present in supplied lesson evidence  
**Related lesson section:** 8.9  
**Used in placeholder:** `[INTERACTIVE PLACEHOLDER: A21IntegrationWidget-001 | Source: AI-proposed teaching enhancement, not present in supplied lesson evidence | Insert from A21_integration_widgets.md | Purpose: Interactive Trapezium Rule visualizer]`  
**Purpose:** Interactive Trapezium Rule visualizer showing how increasing strips improves accuracy and demonstrating over/under estimation based on concavity.  

### Learning Goal  
This widget helps the learner understand that the trapezium rule is an approximation of the area under a curve. It visually demonstrates how increasing the number of strips ($n$) reduces the error, and proves geometrically why convex curves result in overestimates and concave curves result in underestimates.  

### Controls  
- `Number of Strips (n)`: Slider to change how many trapeziums are used to approximate the area.  
- `Curve Type`: Dropdown to switch between a Convex curve ($y = x^2$) and a Concave curve ($y = \sqrt{x}$).  

### Live Outputs  
- `Visual Graph`: Updates to show the curve and the drawn trapeziums.  
- `Calculated Area`: Updates to show the approximate area calculated by the trapezium rule.  
- `Exact Area`: Displays the true analytical area for comparison.  
- `Error`: Shows the percentage error of the approximation.  

### What to Notice  
- As $n$ increases, the straight tops of the trapeziums hug the curve much more closely, and the error percentage drops.  
- When the curve is Convex ($y=x^2$), the trapeziums always stick out slightly above the curve, making the approximation larger than the exact area (Overestimate).  
- When the curve is Concave ($y=\sqrt{x}$), the trapeziums always cut slightly below the curve, making the approximation smaller than the exact area (Underestimate).  

### Exam Connection  
Exam questions frequently ask you to calculate a trapezium rule estimate and then state, with a reason, whether it is an overestimate or an underestimate. This widget builds the visual intuition needed to answer those 1-mark explanation questions confidently.  

### How to Run  
Copy the code below into a `.html` file and open it in a browser.  

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Trapezium Rule Visualizer</title>
  <style>
    body { font-family: system-ui, sans-serif; max-width: 800px; margin: 2rem auto; padding: 0 1rem; color: #1e293b; }
    .controls { background: #f1f5f9; padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem; display: flex; gap: 2rem; align-items: center; }
    .control-group { display: flex; flex-direction: column; gap: 0.5rem; }
    canvas { border: 1px solid #cbd5e1; border-radius: 8px; background: #ffffff; width: 100%; max-width: 600px; display: block; margin: 0 auto; }
    .stats { display: flex; justify-content: space-around; margin-top: 1.5rem; padding: 1rem; background: #e0f2fe; border-radius: 8px; font-weight: bold; }
  </style>
</head>
<body>

  <h2>Trapezium Rule Visualizer</h2>
  
  <div class="controls">
    <div class="control-group">
      <label for="curveSelect"><strong>Curve Type:</strong></label>
      <select id="curveSelect">
        <option value="convex">Convex (y = x²)</option>
        <option value="concave">Concave (y = √x)</option>
      </select>
    </div>
    <div class="control-group" style="flex-grow: 1;">
      <label for="nSlider"><strong>Number of Strips (n): <span id="nValue">4</span></strong></label>
      <input type="range" id="nSlider" min="1" max="20" value="4" style="width: 100%;">
    </div>
  </div>

  <canvas id="graphCanvas" width="600" height="400"></canvas>

  <div class="stats">
    <div>Exact Area: <span id="exactArea"></span></div>
    <div>Trapezium Area: <span id="trapArea"></span></div>
    <div>Error: <span id="errorPct"></span>%</div>
  </div>

  <script>
    const canvas = document.getElementById('graphCanvas');
    const ctx = canvas.getContext('2d');
    const curveSelect = document.getElementById('curveSelect');
    const nSlider = document.getElementById('nSlider');
    const nValue = document.getElementById('nValue');
    const exactAreaSpan = document.getElementById('exactArea');
    const trapAreaSpan = document.getElementById('trapArea');
    const errorPctSpan = document.getElementById('errorPct');

    // Graph settings
    const padding = 40;
    const width = canvas.width - 2 * padding;
    const height = canvas.height - 2 * padding;
    const xMin = 0, xMax = 4;
    
    function f_convex(x) { return x * x; }
    function f_concave(x) { return Math.sqrt(x) * 8; } // Scaled for visual parity

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const isConvex = curveSelect.value === 'convex';
      const f = isConvex ? f_convex : f_concave;
      const yMax = isConvex ? 16 : 16; 
      const exactArea = isConvex ? (64/3) : (128/3);
      const n = parseInt(nSlider.value);
      const h = (xMax - xMin) / n;

      // Coordinate mapping
      const mapX = (x) => padding + (x / xMax) * width;
      const mapY = (y) => canvas.height - padding - (y / yMax) * height;

      // Draw Trapeziums
      let trapArea = 0;
      for (let i = 0; i < n; i++) {
        const x0 = xMin + i * h;
        const x1 = x0 + h;
        const y0 = f(x0);
        const y1 = f(x1);

        // Calculate area
        trapArea += 0.5 * h * (y0 + y1);

        // Draw shape
        ctx.beginPath();
        ctx.moveTo(mapX(x0), mapY(0));
        ctx.lineTo(mapX(x0), mapY(y0));
        ctx.lineTo(mapX(x1), mapY(y1));
        ctx.lineTo(mapX(x1), mapY(0));
        ctx.closePath();
        
        ctx.fillStyle = 'rgba(253, 224, 71, 0.6)'; // Yellow with opacity
        ctx.fill();
        ctx.strokeStyle = '#ca8a04';
        ctx.stroke();
      }

      // Draw Curve
      ctx.beginPath();
      ctx.moveTo(mapX(xMin), mapY(f(xMin)));
      for (let x = xMin; x <= xMax; x += 0.05) {
        ctx.lineTo(mapX(x), mapY(f(x)));
      }
      ctx.strokeStyle = '#2563eb';
      ctx.lineWidth = 3;
      ctx.stroke();

      // Draw Axes
      ctx.beginPath();
      ctx.moveTo(padding, padding);
      ctx.lineTo(padding, canvas.height - padding);
      ctx.lineTo(canvas.width - padding, canvas.height - padding);
      ctx.strokeStyle = '#0f172a';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Update Stats
      exactAreaSpan.innerText = exactArea.toFixed(3);
      trapAreaSpan.innerText = trapArea.toFixed(3);
      const error = Math.abs((trapArea - exactArea) / exactArea) * 100;
      errorPctSpan.innerText = error.toFixed(2);
    }

    curveSelect.addEventListener('change', draw);
    nSlider.addEventListener('input', (e) => {
      nValue.innerText = e.target.value;
      draw();
    });

    // Initial draw
    draw();
  </script>
</body>
</html>
```
```
