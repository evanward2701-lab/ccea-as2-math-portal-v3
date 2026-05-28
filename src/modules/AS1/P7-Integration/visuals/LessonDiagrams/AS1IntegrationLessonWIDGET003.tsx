import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const htmlSource = "<!doctype html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Signed vs Total Area Explorer</title>\n  <style>\n    body { font-family: sans-serif; line-height: 1.4; margin: 20px; max-width: 700px; }\n    label { display: block; margin-top: 10px; }\n    input { width: 80px; }\n    .result { margin-top: 15px; padding: 10px; background: #eaf2f8; border: 1px solid #bcd; }\n    .warning { color: #a00; }\n  </style>\n</head>\n<body>\n  <h2>Signed vs Total Area Explorer</h2>\n  <p>Function: <em>f(x) = x² – 4</em>.  Adjust the limits to see the difference between the signed area (∫ f(x) dx) and the total area (∫ |f(x)| dx).</p>\n  <label>Lower limit a: <input type=\"number\" id=\"lower3\" step=\"0.5\" value=\"-3\"></label>\n  <label>Upper limit b: <input type=\"number\" id=\"upper3\" step=\"0.5\" value=\"3\"></label>\n  <div id=\"out3\" class=\"result\"></div>\n  <script>\n    function f(x) { return x*x - 4; }\n    function F(x) { return (x*x*x)/3 - 4*x; }\n    function update3() {\n      var a = parseFloat(document.getElementById('lower3').value);\n      var b = parseFloat(document.getElementById('upper3').value);\n      var out = document.getElementById('out3');\n      if (isNaN(a) || isNaN(b)) {\n        out.innerHTML = '<span class=\"warning\">Enter numeric limits.</span>';\n        return;\n      }\n      var signed = F(b) - F(a);\n      // Numerical integration of |f(x)| using the trapezium rule\n      var n = 1000;\n      var h = (b - a) / n;\n      var total = 0;\n      for (var i = 0; i < n; i++) {\n        var x0 = a + i * h;\n        var x1 = x0 + h;\n        total += (Math.abs(f(x0)) + Math.abs(f(x1))) * h / 2;\n      }\n      out.innerHTML = '<strong>Signed area:</strong> ' + signed.toFixed(6) + '<br>' +\n                      '<strong>Total area (approx):</strong> ' + total.toFixed(6);\n    }\n    document.getElementById('lower3').addEventListener('input', update3);\n    document.getElementById('upper3').addEventListener('input', update3);\n    update3();\n  </script>\n</body>\n</html>";

export const AS1IntegrationLessonWIDGET003: React.FC = () => (
  <DiagramPanel title={"Signed vs Total Area Explorer"} analysis={null} wide>
    <iframe
      title={"AS1-Integration-Lesson-WIDGET-003"}
      srcDoc={htmlSource}
      sandbox="allow-scripts"
      className="min-h-[540px] w-full rounded-xl border border-zinc-800 bg-white"
    />
  </DiagramPanel>
);
