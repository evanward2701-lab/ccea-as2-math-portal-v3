import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const htmlSource = "<!doctype html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Binomial Expansion Visualiser</title>\n  <style>\n    body { font-family: sans-serif; padding: 1em; }\n    input { margin-right: 0.5em; }\n    .controls { margin-bottom: 1em; }\n    .output pre { background: #f0f0f0; padding: 0.5em; }\n  </style>\n</head>\n<body>\n  <h3>Binomial Expansion Visualiser</h3>\n  <div class=\"controls\">\n    <label for=\"n\">n:</label>\n    <input type=\"number\" id=\"n\" min=\"0\" max=\"10\" value=\"5\" onchange=\"update()\" oninput=\"update()\">\n    <label for=\"a\">a:</label>\n    <input type=\"number\" id=\"a\" value=\"2\" onchange=\"update()\" oninput=\"update()\">\n    <label for=\"k\">k (coefficient of x):</label>\n    <input type=\"number\" id=\"k\" value=\"1\" onchange=\"update()\" oninput=\"update()\">\n    <label for=\"terms\">Number of terms:</label>\n    <input type=\"number\" id=\"terms\" min=\"1\" max=\"6\" value=\"3\" onchange=\"update()\" oninput=\"update()\">\n  </div>\n  <div class=\"output\" id=\"output\"></div>\n  <script>\n    function factorial(num) {\n      let result = 1;\n      for (let i = 2; i <= num; i++) result *= i;\n      return result;\n    }\n    function nCr(n, r) {\n      return factorial(n) / (factorial(r) * factorial(n - r));\n    }\n    function update() {\n      const n = parseInt(document.getElementById('n').value);\n      const a = parseFloat(document.getElementById('a').value);\n      const k = parseFloat(document.getElementById('k').value);\n      const terms = Math.min(parseInt(document.getElementById('terms').value), n + 1);\n      document.getElementById('terms').max = n + 1;\n      let lines = [];\n      for (let r = 0; r < terms; r++) {\n        const coeff = nCr(n, r) * Math.pow(a, n - r) * Math.pow(k, r);\n        lines.push('Term ' + (r + 1) + ': ' + coeff.toFixed(5) + ' \\u00D7 x^' + r);\n      }\n      document.getElementById('output').innerHTML = '<pre>' + lines.join('\\n') + '</pre>';\n    }\n    update();\n  </script>\n</body>\n</html>";

export const AS1BinomialExpansionLessonWIDGET002: React.FC = () => (
  <DiagramPanel title={"Binomial Expansion Visualiser"} analysis={null} wide>
    <iframe
      title={"AS1-Binomial-Expansion-Lesson-WIDGET-002"}
      srcDoc={htmlSource}
      sandbox="allow-scripts"
      className="min-h-[540px] w-full rounded-xl border border-zinc-800 bg-white"
    />
  </DiagramPanel>
);
