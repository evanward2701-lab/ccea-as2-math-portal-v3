# A21_parametric_equations_widgets.md

**Unit code:** A21  
**Topic ID:** A21ParametricEquations  

## A21ParametricEquationsWidget-001: Parametric Curve Plotter  

**Source:** AI-proposed teaching enhancement, not present in supplied lesson evidence  
**Related lesson section:** 10  
**Used in placeholder:** `[INTERACTIVE PLACEHOLDER: A21ParametricEquationsWidget-001 | ...]`  
**Purpose:** Interactive parametric curve plotter.  

### Learning Goal  
To help the learner understand how the parameter $t$ drives both the $x$ and $y$ coordinates simultaneously, and how restricting the domain of $t$ restricts the visible curve.  

### Controls  
- `x(t) function`: The mathematical expression for $x$ in terms of $t$.  
- `y(t) function`: The mathematical expression for $y$ in terms of $t$.  
- `t_min` and `t_max`: The lower and upper bounds for the parameter $t$.  

### Live Outputs  
- `Canvas`: A live-drawn curve on a Cartesian grid.  

### What to Notice  
- Notice how changing the bounds of $t$ makes the curve grow or shrink.  
- Notice that curves like $x = \sin t, y = \cos t$ draw a circle, and changing the bounds of $t$ from $0 \to 2\pi$ to $0 \to \pi$ draws only a semicircle.  
- Notice how complex curves (like the figure skater's path) can cross over themselves, which standard $y=f(x)$ functions cannot do.  

### Exam Connection  
This builds intuition for why we must check the domain of $t$ when finding the domain and range of a Cartesian equation. It also visually reinforces that a single point $(x,y)$ might be reached at multiple different times $t$.  

### How to Run  
Copy the code below into a `.html` file and open it in a browser.  

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Parametric Curve Plotter</title>
  <style>
    body { font-family: sans-serif; margin: 20px; }
    canvas { border: 1px solid #ccc; background: #f9f9f9; margin-top: 10px; }
    .controls { margin-bottom: 10px; padding: 10px; background: #eef; border-radius: 5px; }
    input { margin-right: 10px; padding: 5px; }
  </style>
</head>
<body>
  <h2>Parametric Curve Plotter</h2>
  <div class="controls">
    <label>x(t) = <input type="text" id="xt" value="2*t"></label>
    <label>y(t) = <input type="text" id="yt" value="t*t"></label><br><br>
    <label>t min = <input type="number" id="tmin" value="-3"></label>
    <label>t max = <input type="number" id="tmax" value="3"></label>
    <button onclick="draw()">Plot</button>
  </div>
  <canvas id="plot" width="500" height="500"></canvas>

  <script>
    function evaluateMath(expr, t) {
      // Very basic evaluator for demo purposes.
      let safeExpr = expr.replace(/sin/g, 'Math.sin')
                         .replace(/cos/g, 'Math.cos')
                         .replace(/tan/g, 'Math.tan')
                         .replace(/ln/g, 'Math.log')
                         .replace(/e\^/g, 'Math.exp(')
                         .replace(/t/g, '(' + t + ')');
      try { return eval(safeExpr); } catch (e) { return 0; }
    }

    function draw() {
      const canvas = document.getElementById('plot');
      const ctx = canvas.getContext('2d');
      const xtExpr = document.getElementById('xt').value;
      const ytExpr = document.getElementById('yt').value;
      const tMin = parseFloat(document.getElementById('tmin').value);
      const tMax = parseFloat(document.getElementById('tmax').value);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw axes
      ctx.beginPath();
      ctx.strokeStyle = '#aaa';
      ctx.moveTo(0, 250); ctx.lineTo(500, 250);
      ctx.moveTo(250, 0); ctx.lineTo(250, 500);
      ctx.stroke();

      // Draw curve
      ctx.beginPath();
      ctx.strokeStyle = '#007bff';
      ctx.lineWidth = 2;
      
      let first = true;
      const steps = 200;
      for (let i = 0; i <= steps; i++) {
        let t = tMin + (tMax - tMin) * (i / steps);
        let x = evaluateMath(xtExpr, t);
        let y = evaluateMath(ytExpr, t);
        
        // Scale and translate to canvas (assuming roughly -10 to 10 range)
        let cx = 250 + x * 20;
        let cy = 250 - y * 20;
        
        if (first) { ctx.moveTo(cx, cy); first = false; } 
        else { ctx.lineTo(cx, cy); }
      }
      ctx.stroke();
    }
    
    draw();
  </script>
</body>
</html>
```

