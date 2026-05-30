import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const htmlSource = "<!doctype html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Indefinite Integral Explorer</title>\n  <style>\n    body { font-family: sans-serif; line-height: 1.4; margin: 20px; max-width: 600px; }\n    label { display: block; margin-top: 10px; }\n    input { width: 80px; }\n    .result { margin-top: 15px; padding: 10px; background: #f0f8ff; border: 1px solid #cce; }\n    .warning { color: #a00; }\n  </style>\n</head>\n<body>\n  <h2>Indefinite Integral Explorer</h2>\n  <p>Adjust the exponent <code>n</code>, coefficient <code>a</code> and constant <code>C</code> for the integrand <em>a·x<sup>n</sup></em>.  The antiderivative is shown below.</p>\n  <label>Exponent n: <input type=\"number\" id=\"exp\" step=\"0.5\" value=\"2\"></label>\n  <label>Coefficient a: <input type=\"number\" id=\"coef\" step=\"0.5\" value=\"1\"></label>\n  <label>Constant C: <input type=\"number\" id=\"const\" step=\"0.5\" value=\"0\"></label>\n  <div id=\"output\" class=\"result\"></div>\n  <script>\n    function update() {\n      var n = parseFloat(document.getElementById('exp').value);\n      var a = parseFloat(document.getElementById('coef').value);\n      var c = parseFloat(document.getElementById('const').value);\n      var out = document.getElementById('output');\n      if (isNaN(n) || isNaN(a) || isNaN(c)) {\n        out.innerHTML = '<span class=\"warning\">Please enter numeric values.</span>';\n        return;\n      }\n      if (Math.abs(n + 1) < 1e-8) {\n        // n = -1 case\n        out.innerHTML = 'Antiderivative: ' + a.toFixed(3) + '·ln|x| + ' + c.toFixed(3) + ' + constant';\n      } else {\n        var newPower = n + 1;\n        var coeff = a / (n + 1);\n        // Format coefficient: hide trailing .000 when integer\n        var coeffStr = Math.abs(coeff - Math.round(coeff)) < 1e-6 ? Math.round(coeff).toString() : coeff.toFixed(3);\n        out.innerHTML = 'Antiderivative: ' + coeffStr + '·x<sup>' + newPower + '</sup> + ' + c.toFixed(3);\n      }\n    }\n    document.getElementById('exp').addEventListener('input', update);\n    document.getElementById('coef').addEventListener('input', update);\n    document.getElementById('const').addEventListener('input', update);\n    update();\n  </script>\n</body>\n</html>";

export const AS1IntegrationLessonWIDGET001: React.FC = () => (
  <DiagramPanel title={"Indefinite Integral Explorer"} analysis={null} wide>
    <iframe
      title={"AS1-Integration-Lesson-WIDGET-001"}
      srcDoc={htmlSource}
      sandbox="allow-scripts"
      className="min-h-[540px] w-full rounded-xl border border-primary/20 bg-white"
    />
  </DiagramPanel>
);
