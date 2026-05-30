import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const htmlSource = "<!doctype html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Pascal's Triangle Explorer</title>\n  <style>\n    body { font-family: sans-serif; padding: 1em; }\n    input[type=\"range\"] { width: 300px; }\n    .row { margin-top: 1em; font-size: 1.2em; }\n  </style>\n</head>\n<body>\n  <h3>Pascal's Triangle Explorer</h3>\n  <label for=\"n\">Choose n (0–10): </label>\n  <input type=\"range\" id=\"n\" min=\"0\" max=\"10\" value=\"5\" oninput=\"update()\">\n  <span id=\"nVal\">5</span>\n  <div class=\"row\" id=\"row\"></div>\n  <div class=\"row\">Sum of row = <span id=\"sum\"></span></div>\n  <script>\n    function factorial(num) {\n      let result = 1;\n      for (let i = 2; i <= num; i++) result *= i;\n      return result;\n    }\n    function nCr(n, r) {\n      return factorial(n) / (factorial(r) * factorial(n - r));\n    }\n    function update() {\n      const n = parseInt(document.getElementById('n').value);\n      document.getElementById('nVal').textContent = n;\n      let row = [];\n      for (let r = 0; r <= n; r++) {\n        row.push(nCr(n, r));\n      }\n      document.getElementById('row').textContent = row.join('   ');\n      // compute sum\n      let sum = row.reduce((a, b) => a + b, 0);\n      document.getElementById('sum').textContent = sum;\n    }\n    update();\n  </script>\n</body>\n</html>";

export const AS1BinomialExpansionLessonWIDGET001: React.FC = () => (
  <DiagramPanel title={"Pascal’s Triangle Explorer"} analysis={null} wide>
    <iframe
      title={"AS1-Binomial-Expansion-Lesson-WIDGET-001"}
      srcDoc={htmlSource}
      sandbox="allow-scripts"
      className="min-h-[540px] w-full rounded-xl border border-primary/20 bg-white"
    />
  </DiagramPanel>
);
