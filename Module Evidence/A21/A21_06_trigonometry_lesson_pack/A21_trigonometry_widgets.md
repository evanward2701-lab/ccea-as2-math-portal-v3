```markdown
# A21_trigonometry_widgets.md

**Unit code:** A21  
**Topic ID:** A21Trigonometry  

## A21TrigonometryWidget-001: Reciprocal Function Explorer  

**Source:** AI-proposed teaching enhancement, not present in supplied lesson evidence  
**Related lesson section:** 10  
**Used in placeholder:** `[INTERACTIVE PLACEHOLDER: A21TrigonometryWidget-001 | ...]`  
**Purpose:** Interactive graph explorer for reciprocal functions  

### Learning Goal  
This widget helps the learner understand the geometric relationship between a standard trigonometric function (like $\sin x$) and its reciprocal ($\operatorname{cosec} x$). It visually demonstrates why asymptotes occur where the original function crosses zero.

### Controls  
- `Function Toggle`: Switch between viewing Sine/Cosecant, Cosine/Secant, and Tangent/Cotangent pairs.
- `Show/Hide Original`: Toggle the visibility of the base function (e.g., $\sin x$) to see the reciprocal function on its own.

### Live Outputs  
- `Graph Display`: The canvas updates to draw the selected function pair.
- `Asymptote Markers`: Vertical dashed lines appear dynamically where the base function equals zero.

### What to Notice  
- Notice that the peaks of the base function (where $y=1$) touch the valleys of the reciprocal function.
- Notice that as the base function approaches $0$, the reciprocal function shoots off towards positive or negative infinity.
- This helps prevent the common misconception that the reciprocal function is just a phase-shifted version of the original wave.

### Exam Connection  
Understanding the exact locations of asymptotes and the domains/ranges of these functions is crucial for solving equations like $\operatorname{cosec} 3\theta = 2$ and for sketching transformations in the exam.

### How to Run  
Copy the code below into a `.html` file and open it in a browser.  

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Reciprocal Trigonometric Functions Explorer</title>
  <style>
    body { font-family: sans-serif; max-width: 800px; margin: 20px auto; padding: 10px; background: #f8f9fa; }
    .widget-container { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
    canvas { background: #fff; border: 1px solid #ddd; border-radius: 4px; width: 100%; height: 400px; }
    .controls { margin-top: 15px; display: flex; gap: 15px; align-items: center; }
    select, button { padding: 8px 12px; font-size: 16px; border: 1px solid #ccc; border-radius: 4px; cursor: pointer; }
    button:hover { background: #e9ecef; }
  </style>
</head>
<body>
  <div class="widget-container">
    <h2>Reciprocal Function Explorer</h2>
    <canvas id="trigCanvas" width="800" height="400"></canvas>
    <div class="controls">
      <label for="funcSelect"><strong>Select Pair:</strong></label>
      <select id="funcSelect">
        <option value="sin">sin(x) & cosec(x)</option>
        <option value="cos">cos(x) & sec(x)</option>
        <option value="tan">tan(x) & cot(x)</option>
      </select>
      <button id="toggleBase">Hide Base Function</button>
    </div>
    <p style="font-size: 14px; color: #555; margin-top: 15px;">
      <strong>Note:</strong> The grey dashed line is the base function. The solid coloured line is the reciprocal function. Vertical red lines are asymptotes.
    </p>
  </div>

  <script>
    const canvas = document.getElementById('trigCanvas');
    const ctx = canvas.getContext('2d');
    const funcSelect = document.getElementById('funcSelect');
    const toggleBaseBtn = document.getElementById('toggleBase');

    let showBase = true;
    let currentPair = 'sin';

    // Graph settings
    const scaleX = 60; // pixels per radian
    const scaleY = 80; // pixels per unit
    const offsetX = canvas.width / 2;
    const offsetY = canvas.height / 2;

    function drawGrid() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = '#eee';
      ctx.lineWidth = 1;

      // Draw grid
      for(let i = 0; i < canvas.width; i += scaleX * (Math.PI/2)) {
        ctx.beginPath(); ctx.moveTo(offsetX + i, 0); ctx.lineTo(offsetX + i, canvas.height); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(offsetX - i, 0); ctx.lineTo(offsetX - i, canvas.height); ctx.stroke();
      }
      for(let i = 0; i < canvas.height; i += scaleY) {
        ctx.beginPath(); ctx.moveTo(0, offsetY + i); ctx.lineTo(canvas.width, offsetY + i); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(0, offsetY - i); ctx.lineTo(canvas.width, offsetY - i); ctx.stroke();
      }

      // Draw axes
      ctx.strokeStyle = '#333';
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(0, offsetY); ctx.lineTo(canvas.width, offsetY); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(offsetX, 0); ctx.lineTo(offsetX, canvas.height); ctx.stroke();
    }

    function drawFunction(func, color, isDashed, isReciprocal) {
      ctx.strokeStyle = color;
      ctx.lineWidth = isDashed ? 2 : 3;
      if (isDashed) ctx.setLineDash([5, 5]);
      else ctx.setLineDash([]);

      ctx.beginPath();
      let prevY = null;

      for (let px = 0; px < canvas.width; px++) {
        let x = (px - offsetX) / scaleX;
        let y = func(x);
        
        // Handle asymptotes for reciprocals
        if (isReciprocal && Math.abs(y) > 10) {
          prevY = null; // Break the line
          continue;
        }

        let py = offsetY - (y * scaleY);

        if (prevY === null) {
          ctx.moveTo(px, py);
        } else {
          ctx.lineTo(px, py);
        }
        prevY = py;
      }
      ctx.stroke();
      ctx.setLineDash([]); // Reset
    }

    function drawAsymptotes(roots) {
      ctx.strokeStyle = '#ff7675';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      roots.forEach(root => {
        let px = offsetX + (root * scaleX);
        ctx.beginPath();
        ctx.moveTo(px, 0);
        ctx.lineTo(px, canvas.height);
        ctx.stroke();
      });
      ctx.setLineDash([]);
    }

    function render() {
      drawGrid();

      let baseFunc, recFunc, asymptotes;

      if (currentPair === 'sin') {
        baseFunc = Math.sin;
        recFunc = (x) => 1 / Math.sin(x);
        asymptotes = [-2*Math.PI, -Math.PI, 0, Math.PI, 2*Math.PI];
      } else if (currentPair === 'cos') {
        baseFunc = Math.cos;
        recFunc = (x) => 1 / Math.cos(x);
        asymptotes = [-1.5*Math.PI, -0.5*Math.PI, 0.5*Math.PI, 1.5*Math.PI];
      } else if (currentPair === 'tan') {
        baseFunc = Math.tan;
        recFunc = (x) => 1 / Math.tan(x);
        asymptotes = [-2*Math.PI, -1.5*Math.PI, -Math.PI, -0.5*Math.PI, 0, 0.5*Math.PI, Math.PI, 1.5*Math.PI, 2*Math.PI];
      }

      drawAsymptotes(asymptotes);

      if (showBase) {
        drawFunction(baseFunc, '#a4b0be', true, currentPair === 'tan');
      }
      drawFunction(recFunc, '#0984e3', false, true);
    }

    funcSelect.addEventListener('change', (e) => {
      currentPair = e.target.value;
      render();
    });

    toggleBaseBtn.addEventListener('click', () => {
      showBase = !showBase;
      toggleBaseBtn.textContent = showBase ? "Hide Base Function" : "Show Base Function";
      render();
    });

    render();
  </script>
</body>
</html>
```
```
