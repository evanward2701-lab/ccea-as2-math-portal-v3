```markdown
# A21_vectors_widgets.md

**Unit code:** A21  
**Topic ID:** A21Vectors  

## A21VectorsWidget-001: Interactive Parallelogram Ratio Proof

**Source:** AI-proposed teaching enhancement, not present in supplied lesson evidence  
**Related lesson section:** 10  
**Used in placeholder:** `[INTERACTIVE PLACEHOLDER: A21VectorsWidget-001 | Source: AI-proposed teaching enhancement, not present in supplied lesson evidence | Insert from A21_vectors_widgets.md | Purpose: Interactive parallelogram to show that the ratio OX:XC remains 1:3 regardless of the vectors a and b]`  
**Purpose:** Interactive parallelogram to show that the ratio OX:XC remains 1:3 regardless of the vectors a and b.  

### Learning Goal  
This widget helps the learner understand that geometric proofs using vectors are universal. The algebraic proof using $\lambda$ and $\mu$ guarantees the $1:3$ ratio, meaning it holds true for *any* valid parallelogram, no matter how it is stretched or skewed.

### Controls  
- `Point A`: Drag to change vector $\mathbf{a}$.
- `Point B`: Drag to change vector $\mathbf{b}$.

### Live Outputs  
- `Ratio OX : XC`: Updates in real-time as the shape changes.

### What to Notice  
- The ratio remains exactly $1.00 : 3.00$ regardless of where you drag the points.
- This visualises the power of abstract algebraic proof over drawing and measuring.

### Exam Connection  
This supports written exam working by building intuition. When you set up simultaneous equations with $\lambda$ and $\mu$, you are proving a structural fact about the shape that is immune to changes in coordinates.

### How to Run  
Copy the code below into a `.html` file and open it in a browser.  

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Vector Ratio Proof Widget</title>
  <style>
    body { font-family: sans-serif; text-align: center; background-color: #f4f4f9; color: #333; }
    canvas { border: 1px solid #ccc; background-color: #fff; cursor: crosshair; box-shadow: 0 4px 8px rgba(0,0,0,0.1); margin-top: 20px; }
    .controls { margin-top: 15px; font-size: 1.1em; }
    .highlight { color: #d93025; font-weight: bold; }
  </style>
</head>
<body>
  <h2>Interactive Geometric Proof</h2>
  <p>Drag points <strong>A</strong> and <strong>B</strong> to change the base vectors.</p>
  <canvas id="vecCanvas" width="600" height="400"></canvas>
  <div class="controls">
    <p>Ratio OX : XC = <span id="ratioOut" class="highlight">1.00 : 3.00</span></p>
    <p style="font-size: 0.9em; color: #666;">Notice that the ratio never changes. The algebraic proof guarantees this structural property.</p>
  </div>

  <script>
    const canvas = document.getElementById('vecCanvas');
    const ctx = canvas.getContext('2d');
    const ratioOut = document.getElementById('ratioOut');

    // Points
    let O = { x: 100, y: 300 };
    let A = { x: 200, y: 100 };
    let B = { x: 400, y: 300 };
    let dragging = null;

    function getDistance(p1, p2) {
      return Math.hypot(p2.x - p1.x, p2.y - p1.y);
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Calculate C and Q
      let C = { x: A.x + B.x - O.x, y: A.y + B.y - O.y };
      let Q = { x: O.x + (A.x - O.x) / 3, y: O.y + (A.y - O.y) / 3 };

      // Calculate Intersection X of OC and BQ
      // OC: O + t(C - O)
      // BQ: B + s(Q - B)
      let vOC = { x: C.x - O.x, y: C.y - O.y };
      let vBQ = { x: Q.x - B.x, y: Q.y - B.y };
      
      // t = ( (O.y - B.y)*vBQ.x - (O.x - B.x)*vBQ.y ) / ( vOC.x*vBQ.y - vOC.y*vBQ.x )
      let denominator = (vOC.x * vBQ.y - vOC.y * vBQ.x);
      let t = ((O.y - B.y) * vBQ.x - (O.x - B.x) * vBQ.y) / denominator;
      
      let X = { x: O.x + t * vOC.x, y: O.y + t * vOC.y };

      // Draw Parallelogram
      ctx.beginPath();
      ctx.moveTo(O.x, O.y);
      ctx.lineTo(A.x, A.y);
      ctx.lineTo(C.x, C.y);
      ctx.lineTo(B.x, B.y);
      ctx.closePath();
      ctx.fillStyle = '#e8f0fe';
      ctx.fill();
      ctx.strokeStyle = '#333';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw Diagonals/Lines
      ctx.beginPath();
      ctx.moveTo(O.x, O.y);
      ctx.lineTo(C.x, C.y);
      ctx.strokeStyle = '#0052cc';
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(B.x, B.y);
      ctx.lineTo(Q.x, Q.y);
      ctx.strokeStyle = '#d93025';
      ctx.stroke();

      // Draw Points
      const drawPoint = (p, label, color) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 6, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.fillStyle = '#000';
        ctx.font = '14px sans-serif';
        ctx.fillText(label, p.x + 10, p.y - 10);
      };

      drawPoint(O, 'O', '#333');
      drawPoint(A, 'A (Drag)', '#34a853');
      drawPoint(B, 'B (Drag)', '#34a853');
      drawPoint(C, 'C', '#333');
      drawPoint(Q, 'Q', '#fbbc05');
      drawPoint(X, 'X', '#d93025');

      // Update Ratio Text
      let lenOX = getDistance(O, X);
      let lenXC = getDistance(X, C);
      let ratio = lenOX / lenXC;
      // It should always be 1/3 = 0.333... so ratio is 1:3
      ratioOut.innerText = `1.00 : ${(1/ratio).toFixed(2)}`;
    }

    // Mouse Events
    canvas.addEventListener('mousedown', (e) => {
      const rect = canvas.getBoundingClientRect();
      const mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      if (getDistance(mouse, A) < 15) dragging = A;
      else if (getDistance(mouse, B) < 15) dragging = B;
    });

    canvas.addEventListener('mousemove', (e) => {
      if (!dragging) return;
      const rect = canvas.getBoundingClientRect();
      dragging.x = e.clientX - rect.left;
      dragging.y = e.clientY - rect.top;
      draw();
    });

    canvas.addEventListener('mouseup', () => dragging = null);
    canvas.addEventListener('mouseleave', () => dragging = null);

    draw();
  </script>
</body>
</html>
```
```

