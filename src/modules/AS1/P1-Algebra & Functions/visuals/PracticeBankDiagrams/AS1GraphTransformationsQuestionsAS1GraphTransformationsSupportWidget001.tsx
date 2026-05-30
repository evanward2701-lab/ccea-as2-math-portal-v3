import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const htmlSource = "<!doctype html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Coordinate Image Checker</title>\n<style>\nbody { font-family: sans-serif; max-width: 760px; margin: 2rem auto; line-height: 1.4; }\nlabel { display: block; margin: 0.5rem 0; }\ninput, select { padding: 0.25rem; }\n.output { margin-top: 1rem; padding: 1rem; border: 1px solid #ccc; background: #f7f7f7; }\n</style>\n</head>\n<body>\n<h1>Coordinate Image Checker</h1>\n<label>Original x: <input id=\"x\" type=\"number\" value=\"1\" step=\"0.5\"></label>\n<label>Original y: <input id=\"y\" type=\"number\" value=\"4\" step=\"0.5\"></label>\n<label>Transformation:\n<select id=\"type\">\n<option value=\"right\">y = f(x - a)</option>\n<option value=\"left\">y = f(x + a)</option>\n<option value=\"vscale\">y = a f(x)</option>\n<option value=\"hscale\">y = f(a x)</option>\n<option value=\"reflectx\">y = -f(x)</option>\n<option value=\"reflecty\">y = f(-x)</option>\n<option value=\"up\">y = f(x) + a</option>\n<option value=\"down\">y = f(x) - a</option>\n</select>\n</label>\n<label>Parameter a: <input id=\"a\" type=\"number\" value=\"1\" step=\"0.5\"></label>\n<button onclick=\"calculate()\">Calculate image point</button>\n<div class=\"output\" id=\"out\"></div>\n<script>\nfunction calculate() {\n  const x = parseFloat(document.getElementById('x').value);\n  const y = parseFloat(document.getElementById('y').value);\n  const a = parseFloat(document.getElementById('a').value);\n  const type = document.getElementById('type').value;\n  let X=x, Y=y, note='';\n  if (type==='right') { X=x+a; note='Shift right by a.'; }\n  if (type==='left') { X=x-a; note='Shift left by a.'; }\n  if (type==='vscale') { Y=a*y; note='Multiply y-coordinate by a.'; }\n  if (type==='hscale') { X=x/a; note='Divide x-coordinate by a.'; }\n  if (type==='reflectx') { Y=-y; note='Reflect in the x-axis.'; }\n  if (type==='reflecty') { X=-x; note='Reflect in the y-axis.'; }\n  if (type==='up') { Y=y+a; note='Shift up by a.'; }\n  if (type==='down') { Y=y-a; note='Shift down by a.'; }\n  document.getElementById('out').innerHTML = `<strong>Image point:</strong> (${X}, ${Y})<br><strong>Rule reminder:</strong> ${note}`;\n}\ncalculate();\n</script>\n</body>\n</html>";

export const AS1GraphTransformationsQuestionsAS1GraphTransformationsSupportWidget001: React.FC = () => (
  <DiagramPanel title={"Coordinate image checker"} analysis={null} wide>
    <iframe
      title={"AS1-Graph-Transformations-Questions-AS1GraphTransformationsSupportWidget-001"}
      srcDoc={htmlSource}
      sandbox="allow-scripts"
      className="min-h-[540px] w-full rounded-xl border border-primary/20 bg-white"
    />
  </DiagramPanel>
);
