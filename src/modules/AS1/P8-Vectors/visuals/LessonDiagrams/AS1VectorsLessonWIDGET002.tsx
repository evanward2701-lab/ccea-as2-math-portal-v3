import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const htmlSource = "<!doctype html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Vector Builder from Magnitude and Angle</title>\n<style>\n  body { font-family: Arial, sans-serif; margin: 20px; }\n  canvas { border: 1px solid #999; }\n  .controls { margin-bottom: 10px; }\n</style>\n</head>\n<body>\n<h2>Vector Builder from Magnitude and Angle</h2>\n<div class=\"controls\">\n  <label>Magnitude r: <input type=\"number\" id=\"mag\" value=\"5\" min=\"0\" step=\"0.1\"></label>\n  <label>Angle θ (degrees): <input type=\"number\" id=\"angle\" value=\"45\" min=\"0\" max=\"360\" step=\"1\"></label>\n</div>\n<p>x component: <span id=\"xOut\"></span></p>\n<p>y component: <span id=\"yOut\"></span></p>\n<canvas id=\"builderCanvas\" width=\"300\" height=\"300\"></canvas>\n<script>\nfunction updateBuilder() {\n  const r = parseFloat(document.getElementById('mag').value);\n  const thetaDeg = parseFloat(document.getElementById('angle').value);\n  const thetaRad = thetaDeg * Math.PI / 180;\n  const x = r * Math.cos(thetaRad);\n  const y = r * Math.sin(thetaRad);\n  document.getElementById('xOut').textContent = x.toFixed(3);\n  document.getElementById('yOut').textContent = y.toFixed(3);\n  drawBuilder(x, y);\n}\nfunction drawBuilder(x, y) {\n  const canvas = document.getElementById('builderCanvas');\n  const ctx = canvas.getContext('2d');\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n  // draw axes\n  ctx.strokeStyle = '#888';\n  ctx.beginPath();\n  ctx.moveTo(150, 0);\n  ctx.lineTo(150, 300);\n  ctx.moveTo(0, 150);\n  ctx.lineTo(300, 150);\n  ctx.stroke();\n  // draw vector\n  const scale = 20;\n  ctx.strokeStyle = '#00796b';\n  ctx.fillStyle = '#00796b';\n  ctx.beginPath();\n  ctx.moveTo(150, 150);\n  ctx.lineTo(150 + x * scale, 150 - y * scale);\n  ctx.stroke();\n  ctx.beginPath();\n  ctx.arc(150 + x * scale, 150 - y * scale, 3, 0, 2*Math.PI);\n  ctx.fill();\n}\ndocument.getElementById('mag').addEventListener('input', updateBuilder);\ndocument.getElementById('angle').addEventListener('input', updateBuilder);\nupdateBuilder();\n</script>\n</body>\n</html>";

export const AS1VectorsLessonWIDGET002: React.FC = () => (
  <DiagramPanel title={"Vector Builder from Magnitude and Angle"} analysis={null} wide>
    <iframe
      title={"AS1-Vectors-Lesson-WIDGET-002"}
      srcDoc={htmlSource}
      sandbox="allow-scripts"
      className="min-h-[540px] w-full rounded-xl border border-zinc-800 bg-white"
    />
  </DiagramPanel>
);
