import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const htmlSource = "<!doctype html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Vector Magnitude and Direction Explorer</title>\n<style>\n  body { font-family: Arial, sans-serif; margin: 20px; }\n  canvas { border: 1px solid #999; }\n  .controls { margin-bottom: 10px; }\n</style>\n</head>\n<body>\n<h2>Vector Magnitude and Direction Explorer</h2>\n<div class=\"controls\">\n  <label>x component: <input type=\"number\" id=\"xComp\" value=\"3\" step=\"0.1\"></label>\n  <label>y component: <input type=\"number\" id=\"yComp\" value=\"2\" step=\"0.1\"></label>\n</div>\n<p>Magnitude: <span id=\"magnitude\"></span></p>\n<p>Direction: <span id=\"direction\"></span>°</p>\n<canvas id=\"vectorCanvas\" width=\"300\" height=\"300\"></canvas>\n<script>\nfunction updateVector() {\n  const x = parseFloat(document.getElementById('xComp').value);\n  const y = parseFloat(document.getElementById('yComp').value);\n  const mag = Math.sqrt(x*x + y*y);\n  let angle = 0;\n  if (mag > 0) {\n    const theta = Math.atan2(y, x); // returns angle in radians between -π and π\n    angle = theta * 180 / Math.PI;\n    if (angle < 0) angle += 360; // convert to 0–360°\n  }\n  document.getElementById('magnitude').textContent = mag.toFixed(3);\n  document.getElementById('direction').textContent = angle.toFixed(1);\n  drawVector(x, y);\n}\nfunction drawVector(x, y) {\n  const canvas = document.getElementById('vectorCanvas');\n  const ctx = canvas.getContext('2d');\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n  // draw axes\n  ctx.strokeStyle = '#888';\n  ctx.beginPath();\n  ctx.moveTo(150, 0);\n  ctx.lineTo(150, 300);\n  ctx.moveTo(0, 150);\n  ctx.lineTo(300, 150);\n  ctx.stroke();\n  // scale vector for display\n  const scale = 20;\n  ctx.strokeStyle = '#d32f2f';\n  ctx.fillStyle = '#d32f2f';\n  ctx.beginPath();\n  ctx.moveTo(150, 150);\n  ctx.lineTo(150 + x * scale, 150 - y * scale);\n  ctx.stroke();\n  // draw arrow head\n  const endX = 150 + x * scale;\n  const endY = 150 - y * scale;\n  ctx.beginPath();\n  ctx.arc(endX, endY, 3, 0, 2*Math.PI);\n  ctx.fill();\n}\ndocument.getElementById('xComp').addEventListener('input', updateVector);\ndocument.getElementById('yComp').addEventListener('input', updateVector);\nupdateVector();\n</script>\n</body>\n</html>";

export const AS1VectorsLessonWIDGET001: React.FC = () => (
  <DiagramPanel title={"Vector Magnitude and Direction Explorer"} analysis={null} wide>
    <iframe
      title={"AS1-Vectors-Lesson-WIDGET-001"}
      srcDoc={htmlSource}
      sandbox="allow-scripts"
      className="min-h-[540px] w-full rounded-xl border border-zinc-800 bg-white"
    />
  </DiagramPanel>
);
