```markdown
# A21_functions_and_graphs_widgets.md

**Unit code:** A21
**Topic ID:** A21FunctionsAndGraphs

## A21FunctionsAndGraphsWidget-001: Modulus Transformations Explorer

**Source:** AI-proposed teaching enhancement, not present in supplied lesson evidence
**Related lesson section:** 8.5
**Used in placeholder:** `[INTERACTIVE PLACEHOLDER: A21FunctionsAndGraphsWidget-001 | ...]`
**Purpose:** Interactive widget allowing students to toggle between f(x), |f(x)|, and f(|x|) for various functions

### Learning Goal
This widget helps the learner understand the visual difference between applying a modulus to the entire function output ($|f(x)|$) versus applying it only to the input variable ($f(|x|)$).

### Controls
- `Function Select`: Choose between a linear, quadratic, or trigonometric base function.
- `Transformation Toggle`: Switch between $f(x)$ (original), $|f(x)|$ (reflect bottom up), and $f(|x|)$ (reflect right to left).

### Live Outputs
- `Graph Canvas`: Dynamically draws the selected transformation.

### What to Notice
- Notice that for $|f(x)|$, the graph never drops below the $x$-axis. The negative $y$-values are reflected upwards.
- Notice that for $f(|x|)$, the graph is perfectly symmetrical across the $y$-axis. The left side of the original graph is completely ignored and replaced by a mirror image of the right side.

### Exam Connection
In A2 exams, you are frequently asked to sketch these transformations. Memorising the visual rules (bottom flips up vs. right reflects to left) saves time and prevents algebraic errors.

### How to Run
Copy the code below into a `.html` file and open it in a browser.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Modulus Transformations Explorer</title>
  <style>
    body { font-family: sans-serif; margin: 20px; background-color: #f4f4f9; color: #333; }
    .container { max-width: 600px; margin: 0 auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
    canvas { border: 1px solid #ccc; background: #fff; display: block; margin-top: 15px; }
    .controls { margin-top: 15px; display: flex; flex-direction: column; gap: 10px; }
    select, button { padding: 8px; font-size: 16px; }
    .btn-group { display: flex; gap: 10px; }
    button { cursor: pointer; background-color: #e0e0e0; border: none; border-radius: 4px; }
    button.active { background-color: #4A90E2; color: white; }
  </style>
</head>
<body>
  <div class="container">
    <h2>Modulus Transformations</h2>
    <p>Select a function and a transformation to see the effect.</p>
    
    <div class="controls">
      <select id="funcSelect">
        <option value="linear">Linear: f(x) = 2x - 3</option>
        <option value="quad">Quadratic: f(x) = x² - 4</option>
        <option value="trig">Trigonometric: f(x) = 3sin(x)</option>
      </select>
      
      <div class="btn-group">
        <button id="btn-orig" class="active" onclick="setMode('orig')">f(x)</button>
        <button id="btn-modout" onclick="setMode('modout')">|f(x)|</button>
        <button id="btn-modin" onclick="setMode('modin')">f(|x|)</button>
      </div>
    </div>

    <canvas id="graphCanvas" width="560" height="400"></canvas>
  </div>

  <script>
    const canvas = document.getElementById('graphCanvas');
    const ctx = canvas.getContext('2d');
    const funcSelect = document.getElementById('funcSelect');
    
    let mode = 'orig'; // 'orig', 'modout', 'modin'
    
    // Coordinate system setup
    const width = canvas.width;
    const height = canvas.height;
    const scaleX = 40; // pixels per unit
    const scaleY = 40;
    const offsetX = width / 2;
    const offsetY = height / 2;

    function setMode(newMode) {
      mode = newMode;
      document.getElementById('btn-orig').classList.remove('active');
      document.getElementById('btn-modout').classList.remove('active');
      document.getElementById('btn-modin').classList.remove('active');
      document.getElementById('btn-' + newMode).classList.add('active');
      draw();
    }

    funcSelect.addEventListener('change', draw);

    function getBaseY(x, type) {
      if (type === 'linear') return 2 * x - 3;
      if (type === 'quad') return x * x - 4;
      if (type === 'trig') return 3 * Math.sin(x);
      return 0;
    }

    function getY(x, type, mode) {
      if (mode === 'orig') {
        return getBaseY(x, type);
      } else if (mode === 'modout') {
        return Math.abs(getBaseY(x, type));
      } else if (mode === 'modin') {
        return getBaseY(Math.abs(x), type);
      }
    }

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
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      drawAxes();
      
      const type = funcSelect.value;
      
      ctx.beginPath();
      ctx.strokeStyle = '#4A90E2';
      ctx.lineWidth = 3;
      
      let first = true;
      for (let px = 0; px <= width; px++) {
        let x = (px - offsetX) / scaleX;
        let y = getY(x, type, mode);
        let py = offsetY - (y * scaleY);
        
        if (first) {
          ctx.moveTo(px, py);
          first = false;
        } else {
          ctx.lineTo(px, py);
        }
      }
      ctx.stroke();
    }

    // Initial draw
    draw();
  </script>
</body>
</html>
```
```

