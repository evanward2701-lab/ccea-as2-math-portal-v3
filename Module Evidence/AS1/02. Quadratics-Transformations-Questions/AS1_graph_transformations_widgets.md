# Interactive Widgets for CCEA AS1 Pure Mathematics Graph Transformations

**Pack ID:** AS1GraphTransformations

## AS1GraphTransformationsSupportWidget-001: Coordinate image checker

**Source:** AI-proposed checking tool, not present in questions PDF  
**Related questions:** Questions 1-16  
**Used in placeholder:** `[INTERACTIVE PLACEHOLDER: AS1GraphTransformationsSupportWidget-001 | Source: AI-proposed checking tool, not present in questions PDF | Insert from AS1_graph_transformations_widgets.md | Purpose: coordinate-image checker for graph transformations]`  
**Purpose:** Checks how a single point \((x,y)\) changes under common AS1 graph transformations.

### Learning Goal

This widget helps you check point images under transformations such as $y=f(x-a)$, $y=f(x+a)$, $y=af(x)$, $y=f(ax)$, $y=f(-x)$ and $y=-f(x)$.

### Controls

- `x` and `y`: coordinates of the original point.
- `Transformation`: choose the transformation type.
- `Parameter`: enter the shift or scale factor where needed.

### Live Outputs

- `Image point`: the transformed coordinate.
- `Rule reminder`: short note on how the transformation acts.

### What to Notice

- Horizontal transformations change the $x$-coordinate.
- Vertical transformations change the $y$-coordinate.
- $f(x+a)$ shifts left; $f(x-a)$ shifts right.

### Exam Connection

Use this tool to check your work after sketching. In the exam, you must still show the transformed sketch and label the image point clearly.

### How to Run

Copy the code below into a `.html` file and open it in a browser.

```html
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Coordinate Image Checker</title>
<style>
body { font-family: sans-serif; max-width: 760px; margin: 2rem auto; line-height: 1.4; }
label { display: block; margin: 0.5rem 0; }
input, select { padding: 0.25rem; }
.output { margin-top: 1rem; padding: 1rem; border: 1px solid #ccc; background: #f7f7f7; }
</style>
</head>
<body>
<h1>Coordinate Image Checker</h1>
<label>Original x: <input id="x" type="number" value="1" step="0.5"></label>
<label>Original y: <input id="y" type="number" value="4" step="0.5"></label>
<label>Transformation:
<select id="type">
<option value="right">y = f(x - a)</option>
<option value="left">y = f(x + a)</option>
<option value="vscale">y = a f(x)</option>
<option value="hscale">y = f(a x)</option>
<option value="reflectx">y = -f(x)</option>
<option value="reflecty">y = f(-x)</option>
<option value="up">y = f(x) + a</option>
<option value="down">y = f(x) - a</option>
</select>
</label>
<label>Parameter a: <input id="a" type="number" value="1" step="0.5"></label>
<button onclick="calculate()">Calculate image point</button>
<div class="output" id="out"></div>
<script>
function calculate() {
  const x = parseFloat(document.getElementById('x').value);
  const y = parseFloat(document.getElementById('y').value);
  const a = parseFloat(document.getElementById('a').value);
  const type = document.getElementById('type').value;
  let X=x, Y=y, note='';
  if (type==='right') { X=x+a; note='Shift right by a.'; }
  if (type==='left') { X=x-a; note='Shift left by a.'; }
  if (type==='vscale') { Y=a*y; note='Multiply y-coordinate by a.'; }
  if (type==='hscale') { X=x/a; note='Divide x-coordinate by a.'; }
  if (type==='reflectx') { Y=-y; note='Reflect in the x-axis.'; }
  if (type==='reflecty') { X=-x; note='Reflect in the y-axis.'; }
  if (type==='up') { Y=y+a; note='Shift up by a.'; }
  if (type==='down') { Y=y-a; note='Shift down by a.'; }
  document.getElementById('out').innerHTML = `<strong>Image point:</strong> (${X}, ${Y})<br><strong>Rule reminder:</strong> ${note}`;
}
calculate();
</script>
</body>
</html>
```
