# Interactive Widgets for AS1 Vectors

## WIDGET-001: Vector Magnitude and Direction Explorer
Source: AI-proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[INTERACTIVE PLACEHOLDER: WIDGET-001 | ...]`  
Purpose: Let students enter the components of a vector and immediately see its magnitude and direction.

### Learning Goal
This widget helps you understand how the horizontal and vertical components of a vector affect its length and direction.  By adjusting $x$ and $y$ you can see how the magnitude $|\mathbf{a}|=\sqrt{x^2+y^2}$ and the direction angle $\theta$ change, and observe how the vector moves into different quadrants.

### Controls
- **x component:** type any real number to set the horizontal component.
- **y component:** type any real number to set the vertical component.

### Live Outputs
- **Magnitude:** shows $|\mathbf{a}|$ calculated using formula (1).
- **Direction:** shows $\theta$ in degrees measured anticlockwise from the positive $x$‑axis.  The angle automatically adjusts to the correct quadrant.
- **Canvas:** displays the vector arrow from the origin to $(x,y)$ with axes.

### What to Notice
- Vectors in different quadrants have the same magnitude but different directions.
- Changing the sign of $x$ or $y$ flips the vector across an axis.
- When $x$ or $y$ is zero, the vector lies on an axis and the direction is $0^{\circ}$, $90^{\circ}$, $180^{\circ}$ or $270^{\circ}$.

### Exam Connection
Although you cannot use dynamic tools in an exam, developing intuition about vectors helps you choose the correct quadrant when using $\tan^{-1}(y/x)$ and avoid common mistakes.  Always write your calculations and quadrant checks in your answer.

### How to Run
Copy the code below into a file named `vector_magnitude_direction.html` and open it in a browser.

```html
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Vector Magnitude and Direction Explorer</title>
<style>
  body { font-family: Arial, sans-serif; margin: 20px; }
  canvas { border: 1px solid #999; }
  .controls { margin-bottom: 10px; }
</style>
</head>
<body>
<h2>Vector Magnitude and Direction Explorer</h2>
<div class="controls">
  <label>x component: <input type="number" id="xComp" value="3" step="0.1"></label>
  <label>y component: <input type="number" id="yComp" value="2" step="0.1"></label>
</div>
<p>Magnitude: <span id="magnitude"></span></p>
<p>Direction: <span id="direction"></span>°</p>
<canvas id="vectorCanvas" width="300" height="300"></canvas>
<script>
function updateVector() {
  const x = parseFloat(document.getElementById('xComp').value);
  const y = parseFloat(document.getElementById('yComp').value);
  const mag = Math.sqrt(x*x + y*y);
  let angle = 0;
  if (mag > 0) {
    const theta = Math.atan2(y, x); // returns angle in radians between -π and π
    angle = theta * 180 / Math.PI;
    if (angle < 0) angle += 360; // convert to 0–360°
  }
  document.getElementById('magnitude').textContent = mag.toFixed(3);
  document.getElementById('direction').textContent = angle.toFixed(1);
  drawVector(x, y);
}
function drawVector(x, y) {
  const canvas = document.getElementById('vectorCanvas');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // draw axes
  ctx.strokeStyle = '#888';
  ctx.beginPath();
  ctx.moveTo(150, 0);
  ctx.lineTo(150, 300);
  ctx.moveTo(0, 150);
  ctx.lineTo(300, 150);
  ctx.stroke();
  // scale vector for display
  const scale = 20;
  ctx.strokeStyle = '#d32f2f';
  ctx.fillStyle = '#d32f2f';
  ctx.beginPath();
  ctx.moveTo(150, 150);
  ctx.lineTo(150 + x * scale, 150 - y * scale);
  ctx.stroke();
  // draw arrow head
  const endX = 150 + x * scale;
  const endY = 150 - y * scale;
  ctx.beginPath();
  ctx.arc(endX, endY, 3, 0, 2*Math.PI);
  ctx.fill();
}
document.getElementById('xComp').addEventListener('input', updateVector);
document.getElementById('yComp').addEventListener('input', updateVector);
updateVector();
</script>
</body>
</html>
```


## WIDGET-002: Vector Builder from Magnitude and Angle
Source: AI-proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[INTERACTIVE PLACEHOLDER: WIDGET-002 | ...]`  
Purpose: Given a magnitude $r$ and direction $\theta$, calculate the components of the vector and display the arrow.

### Learning Goal
This widget demonstrates how vectors can be constructed from their polar form $(r,\theta)$.  By changing $r$ and $\theta$ you see how the components $x=r\cos\theta$ and $y=r\sin\theta$ depend on the magnitude and angle.

### Controls
- **Magnitude $r$:** slide or type a positive number.
- **Angle $\theta$:** slide or type an angle in degrees ($0$–$360$).

### Live Outputs
- **x component:** shows $x=r\cos\theta$.
- **y component:** shows $y=r\sin\theta$.
- **Canvas:** shows the vector arrow on axes.

### What to Notice
- For fixed $r$, varying $\theta$ moves the vector around a circle of radius $r$.
- Negative $x$ or $y$ components arise naturally when $\theta$ is in quadrants II, III or IV.
- When $\theta$ is a special angle ($30^{\circ}$, $45^{\circ}$, $60^{\circ}$ etc.), the components involve simple fractions and $\sqrt{3}$.

### Exam Connection
In exams you will often be given a magnitude and a direction and asked to find components or resolve forces.  Understanding how to compute $r\cos\theta$ and $r\sin\theta$ prepares you for these questions.

### How to Run
Copy the code below into a file named `vector_builder.html` and open it in a browser.

```html
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Vector Builder from Magnitude and Angle</title>
<style>
  body { font-family: Arial, sans-serif; margin: 20px; }
  canvas { border: 1px solid #999; }
  .controls { margin-bottom: 10px; }
</style>
</head>
<body>
<h2>Vector Builder from Magnitude and Angle</h2>
<div class="controls">
  <label>Magnitude r: <input type="number" id="mag" value="5" min="0" step="0.1"></label>
  <label>Angle θ (degrees): <input type="number" id="angle" value="45" min="0" max="360" step="1"></label>
</div>
<p>x component: <span id="xOut"></span></p>
<p>y component: <span id="yOut"></span></p>
<canvas id="builderCanvas" width="300" height="300"></canvas>
<script>
function updateBuilder() {
  const r = parseFloat(document.getElementById('mag').value);
  const thetaDeg = parseFloat(document.getElementById('angle').value);
  const thetaRad = thetaDeg * Math.PI / 180;
  const x = r * Math.cos(thetaRad);
  const y = r * Math.sin(thetaRad);
  document.getElementById('xOut').textContent = x.toFixed(3);
  document.getElementById('yOut').textContent = y.toFixed(3);
  drawBuilder(x, y);
}
function drawBuilder(x, y) {
  const canvas = document.getElementById('builderCanvas');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // draw axes
  ctx.strokeStyle = '#888';
  ctx.beginPath();
  ctx.moveTo(150, 0);
  ctx.lineTo(150, 300);
  ctx.moveTo(0, 150);
  ctx.lineTo(300, 150);
  ctx.stroke();
  // draw vector
  const scale = 20;
  ctx.strokeStyle = '#00796b';
  ctx.fillStyle = '#00796b';
  ctx.beginPath();
  ctx.moveTo(150, 150);
  ctx.lineTo(150 + x * scale, 150 - y * scale);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(150 + x * scale, 150 - y * scale, 3, 0, 2*Math.PI);
  ctx.fill();
}
document.getElementById('mag').addEventListener('input', updateBuilder);
document.getElementById('angle').addEventListener('input', updateBuilder);
updateBuilder();
</script>
</body>
</html>
```


## WIDGET-003: Vector Addition Explorer
Source: AI-proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[INTERACTIVE PLACEHOLDER: WIDGET-003 | ...]`  
Purpose: Enter two vectors and observe how their sum is constructed geometrically using the triangle/parallelogram law.

### Learning Goal
This widget demonstrates componentwise addition and its geometric interpretation.  By inputting two vectors you see the first vector drawn from the origin, the second drawn from the head of the first, and the resultant drawn from the origin to the final point.

### Controls
- **Vector 1 (x₁, y₁):** type the components of the first vector.
- **Vector 2 (x₂, y₂):** type the components of the second vector.

### Live Outputs
- **Resultant vector:** displays $(x_1+x_2, y_1+y_2)$.
- **Canvas:** shows the head‑to‑tail construction of the vectors and the resultant.

### What to Notice
- Adding vectors componentwise corresponds exactly to placing them head‑to‑tail.
- Swapping the order of the vectors changes the intermediate route but not the resultant.
- Parallel vectors produce a straight‑line resultant; perpendicular vectors produce a right‑angled triangle.

### Exam Connection
Understanding the geometric interpretation of addition helps when justifying statements such as “$\overrightarrow{PQ}+\overrightarrow{QR}=\overrightarrow{PR}$”.  The widget also emphasises that vector addition is commutative ($\mathbf{a}+\mathbf{b}=\mathbf{b}+\mathbf{a}$).

### How to Run
Copy the code below into a file named `vector_addition.html` and open it in a browser.

```html
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Vector Addition Explorer</title>
<style>
  body { font-family: Arial, sans-serif; margin: 20px; }
  canvas { border: 1px solid #999; margin-top: 10px; }
  .controls { margin-bottom: 10px; }
</style>
</head>
<body>
<h2>Vector Addition Explorer</h2>
<div class="controls">
  <label>Vector 1: (x₁, y₁) <input type="number" id="x1" value="2" step="0.1"> <input type="number" id="y1" value="1" step="0.1"></label><br>
  <label>Vector 2: (x₂, y₂) <input type="number" id="x2" value="-1" step="0.1"> <input type="number" id="y2" value="3" step="0.1"></label>
</div>
<p>Resultant vector: <span id="resultOut"></span></p>
<canvas id="addCanvas" width="300" height="300"></canvas>
<script>
function updateAddition() {
  const x1 = parseFloat(document.getElementById('x1').value);
  const y1 = parseFloat(document.getElementById('y1').value);
  const x2 = parseFloat(document.getElementById('x2').value);
  const y2 = parseFloat(document.getElementById('y2').value);
  const rx = x1 + x2;
  const ry = y1 + y2;
  document.getElementById('resultOut').textContent = '(' + rx.toFixed(2) + ', ' + ry.toFixed(2) + ')';
  drawAddition(x1, y1, x2, y2);
}
function drawAddition(x1, y1, x2, y2) {
  const canvas = document.getElementById('addCanvas');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // axes
  ctx.strokeStyle = '#888';
  ctx.beginPath();
  ctx.moveTo(150, 0);
  ctx.lineTo(150, 300);
  ctx.moveTo(0, 150);
  ctx.lineTo(300, 150);
  ctx.stroke();
  const scale = 20;
  // first vector
  ctx.strokeStyle = '#3949ab';
  ctx.beginPath();
  ctx.moveTo(150, 150);
  ctx.lineTo(150 + x1*scale, 150 - y1*scale);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(150 + x1*scale, 150 - y1*scale, 3, 0, 2*Math.PI);
  ctx.fillStyle = '#3949ab';
  ctx.fill();
  // second vector drawn from head of first
  ctx.strokeStyle = '#00897b';
  ctx.beginPath();
  ctx.moveTo(150 + x1*scale, 150 - y1*scale);
  ctx.lineTo(150 + (x1 + x2)*scale, 150 - (y1 + y2)*scale);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(150 + (x1 + x2)*scale, 150 - (y1 + y2)*scale, 3, 0, 2*Math.PI);
  ctx.fillStyle = '#00897b';
  ctx.fill();
  // resultant vector from origin
  ctx.strokeStyle = '#d32f2f';
  ctx.beginPath();
  ctx.moveTo(150, 150);
  ctx.lineTo(150 + (x1 + x2)*scale, 150 - (y1 + y2)*scale);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(150 + (x1 + x2)*scale, 150 - (y1 + y2)*scale, 3, 0, 2*Math.PI);
  ctx.fillStyle = '#d32f2f';
  ctx.fill();
}
document.getElementById('x1').addEventListener('input', updateAddition);
document.getElementById('y1').addEventListener('input', updateAddition);
document.getElementById('x2').addEventListener('input', updateAddition);
document.getElementById('y2').addEventListener('input', updateAddition);
updateAddition();
</script>
</body>
</html>
```
