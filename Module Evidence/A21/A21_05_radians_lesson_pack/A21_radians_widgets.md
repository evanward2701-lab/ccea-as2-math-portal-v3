```markdown
# A21_radians_widgets.md

**Unit code:** A21  
**Topic ID:** A21Radians  

## A21RadiansWidget-001: Interactive Radian Explorer  

**Source:** Transcript demo (Radian Illustrator)  
**Related lesson section:** 7  
**Used in placeholder:** `[INTERACTIVE PLACEHOLDER: A21RadiansWidget-001 | ...]`  
**Purpose:** Interactive widget allowing the student to drag an arc around a circle to see how 1 radian, 2 radians, and Pi radians relate to the radius.  

### Learning Goal  
To build an intuitive understanding of what a radian actually is by visually connecting the angle at the centre of the circle to the length of the arc around the circumference.  

### Controls  
- `Angle Slider`: Changes the angle $\theta$ from $0$ to $2\pi$ radians.  

### Live Outputs  
- `Arc Highlight`: The red line on the circumference grows as the angle increases.  
- `Arc Length Text`: Displays the current arc length as a multiple of the radius $r$.  
- `Milestone Alerts`: Special text appears when the angle hits exactly $1\text{ radian}$, $\pi\text{ radians}$ (half circle), and $2\pi\text{ radians}$ (full circle).  

### What to Notice  
- When the angle is exactly $1\text{ radian}$, the red arc length is exactly equal to $1r$ (one radius).  
- When the angle is $\approx 3.14\text{ radians}$ ($\pi$), the arc covers exactly half the circle.  
- The formula $l = r\theta$ works naturally because the angle in radians *is* the multiplier for the radius.  

### Exam Connection  
Understanding this definition prevents the common mistake of using the GCSE degree formula ($\frac{\theta}{360} \times 2\pi r$) when an A Level question gives an angle in radians. It reinforces why $l = r\theta$ is the correct and simpler formula.  

### How to Run  
Copy the code below into a `.html` file and open it in a browser.  

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Interactive Radian Explorer</title>
  <style>
    body {
      font-family: sans-serif;
      text-align: center;
      padding: 20px;
      background-color: #f7fafc;
      color: #2d3748;
    }
    .widget-container {
      background: #ffffff;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      display: inline-block;
      padding: 20px;
    }
    canvas {
      background: #ffffff;
      margin-top: 20px;
      border: 1px solid #e2e8f0;
      border-radius: 4px;
    }
    .controls {
      margin: 20px 0;
      font-size: 1.1em;
    }
    input[type=range] {
      width: 300px;
      margin-top: 10px;
    }
    .alert {
      font-weight: bold;
      color: #e53e3e;
      height: 24px;
      margin-top: 10px;
    }
  </style>
</head>
<body>
  <div class="widget-container">
    <h2>Interactive Radian Explorer</h2>
    <div class="controls">
      <label for="angleSlider">Angle (&theta;): <span id="angleValue">1.00</span> radians</label><br>
      <input type="range" id="angleSlider" min="0" max="6.2831853" step="0.01" value="1">
    </div>
    <div class="alert" id="alertText">1 Radian! Arc length = 1 radius</div>
    <canvas id="circleCanvas" width="400" height="400"></canvas>
  </div>

  <script>
    const canvas = document.getElementById('circleCanvas');
    const ctx = canvas.getContext('2d');
    const slider = document.getElementById('angleSlider');
    const angleValue = document.getElementById('angleValue');
    const alertText = document.getElementById('alertText');
    
    const cx = 200, cy = 200, r = 150;

    function draw(theta) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw faint full circle
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, 2 * Math.PI);
      ctx.strokeStyle = '#e2e8f0';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Draw sector
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      // Negative theta to draw anti-clockwise (standard math convention)
      ctx.arc(cx, cy, r, 0, -theta, true); 
      ctx.closePath();
      ctx.fillStyle = 'rgba(43, 108, 176, 0.15)';
      ctx.fill();
      ctx.strokeStyle = '#2b6cb0';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Draw highlighted arc
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, -theta, true);
      ctx.strokeStyle = '#e53e3e';
      ctx.lineWidth = 5;
      ctx.stroke();
      
      // Draw initial radius line (x-axis)
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + r, cy);
      ctx.strokeStyle = '#2d3748';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Update alert text
      alertText.textContent = "";
      if (Math.abs(theta - 1) < 0.05) {
          alertText.textContent = "1 Radian! Arc length = 1 radius";
      } else if (Math.abs(theta - Math.PI) < 0.05) {
          alertText.textContent = "π Radians! Half circle (180°)";
      } else if (Math.abs(theta - 2*Math.PI) < 0.05) {
          alertText.textContent = "2π Radians! Full circle (360°)";
      } else {
          alertText.textContent = `Arc Length = ${theta.toFixed(2)} × radius`;
      }
    }

    slider.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value);
      angleValue.textContent = val.toFixed(2);
      draw(val);
    });

    // Initial draw
    draw(1);
  </script>
</body>
</html>
```
```
