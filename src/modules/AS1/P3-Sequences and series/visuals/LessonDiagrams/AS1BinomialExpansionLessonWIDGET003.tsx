import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const htmlSource = "<!doctype html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Binomial Approximation Tool</title>\n  <style>\n    body { font-family: sans-serif; padding: 1em; }\n    .controls { margin-bottom: 1em; }\n    .controls label { margin-right: 0.5em; }\n    .output { background: #f9f9f9; padding: 0.5em; border: 1px solid #ddd; }\n  </style>\n</head>\n<body>\n  <h3>Binomial Approximation Tool</h3>\n  <div class=\"controls\">\n    <label for=\"n\">n:</label>\n    <input type=\"range\" id=\"n\" min=\"1\" max=\"20\" value=\"8\" oninput=\"update()\">\n    <span id=\"nVal\">8</span>\n    <br>\n    <label for=\"u\">u (–0.3 to 0.3):</label>\n    <input type=\"range\" id=\"u\" min=\"-0.3\" max=\"0.3\" step=\"0.01\" value=\"0.1\" oninput=\"update()\">\n    <span id=\"uVal\">0.10</span>\n    <br>\n    <label for=\"terms\">Number of terms:</label>\n    <input type=\"range\" id=\"terms\" min=\"1\" max=\"6\" value=\"3\" oninput=\"update()\">\n    <span id=\"termsVal\">3</span>\n  </div>\n  <div class=\"output\" id=\"output\"></div>\n  <script>\n    function factorial(num) {\n      let result = 1;\n      for (let i = 2; i <= num; i++) result *= i;\n      return result;\n    }\n    function nCr(n, r) {\n      return factorial(n) / (factorial(r) * factorial(n - r));\n    }\n    function update() {\n      const n = parseInt(document.getElementById('n').value);\n      const u = parseFloat(document.getElementById('u').value);\n      const m = parseInt(document.getElementById('terms').value);\n      document.getElementById('nVal').textContent = n;\n      document.getElementById('uVal').textContent = u.toFixed(2);\n      document.getElementById('termsVal').textContent = m;\n      // approximate using first m terms\n      let approx = 0;\n      for (let r = 0; r < m; r++) {\n        approx += nCr(n, r) * Math.pow(u, r);\n      }\n      const exact = Math.pow(1 + u, n);\n      const error = Math.abs(exact - approx);\n      document.getElementById('output').innerHTML =\n        '<p>Approximate value (using ' + m + ' term' + (m===1?'':'s') + '): <strong>' + approx.toFixed(6) + '</strong></p>' +\n        '<p>Exact value: <strong>' + exact.toFixed(6) + '</strong></p>' +\n        '<p>Absolute error: <strong>' + error.toExponential(3) + '</strong></p>';\n    }\n    update();\n  </script>\n</body>\n</html>";

export const AS1BinomialExpansionLessonWIDGET003: React.FC = () => (
  <DiagramPanel title={"Binomial Approximation Tool"} analysis={null} wide>
    <iframe
      title={"AS1-Binomial-Expansion-Lesson-WIDGET-003"}
      srcDoc={htmlSource}
      sandbox="allow-scripts"
      className="min-h-[540px] w-full rounded-xl border border-primary/20 bg-white"
    />
  </DiagramPanel>
);
