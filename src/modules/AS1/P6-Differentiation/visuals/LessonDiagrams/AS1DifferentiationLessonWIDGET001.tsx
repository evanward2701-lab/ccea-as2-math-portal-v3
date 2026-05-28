import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const htmlSource = "<!doctype html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Power Rule Explorer</title>\n  <style>\n    body { font-family: Arial, sans-serif; margin: 20px; }\n    label { display: block; margin-bottom: 10px; }\n    input[type=\"number\"] { width: 80px; margin-left: 5px; }\n    .output { margin-top: 20px; font-size: 16px; }\n    .output span { display: block; margin-top: 5px; }\n  </style>\n</head>\n<body>\n  <h2>Power Rule Explorer</h2>\n  <label>Coefficient a:\n    <input id=\"aInput\" type=\"number\" value=\"1\" step=\"0.5\">\n  </label>\n  <label>Exponent n:\n    <input id=\"nInput\" type=\"number\" value=\"2\" step=\"0.5\">\n  </label>\n  <label>x-value:\n    <input id=\"xInput\" type=\"number\" value=\"1\" step=\"0.5\">\n  </label>\n  <div class=\"output\">\n    <span id=\"formulaDisplay\"></span>\n    <span id=\"valueDisplay\"></span>\n  </div>\n  <script>\n    function updatePower() {\n      const a = parseFloat(document.getElementById('aInput').value);\n      const n = parseFloat(document.getElementById('nInput').value);\n      const x = parseFloat(document.getElementById('xInput').value);\n      // Build symbolic strings\n      const fStr = a + 'x^' + n;\n      const derivCoeff = a * n;\n      const derivativeExp = n - 1;\n      const derivativeStr = derivCoeff + 'x^' + derivativeExp;\n      // Evaluate numeric values, guarding against invalid operations\n      let fVal = 'undefined';\n      let dVal = 'undefined';\n      if (!(x === 0 && n < 0)) {\n        fVal = a * Math.pow(x, n);\n      }\n      if (!(x === 0 && derivativeExp < 0)) {\n        dVal = derivCoeff * Math.pow(x, derivativeExp);\n      }\n      document.getElementById('formulaDisplay').innerHTML =\n        '<strong>f(x)</strong> = ' + fStr + ', &nbsp; <strong>f\\'(x)</strong> = ' + derivativeStr;\n      document.getElementById('valueDisplay').innerHTML =\n        'At x = ' + x + ': f(x) = ' + (typeof fVal === 'number' ? fVal.toFixed(3) : fVal) + ', ' +\n        'f\\'(x) = ' + (typeof dVal === 'number' ? dVal.toFixed(3) : dVal);\n    }\n    document.querySelectorAll('input').forEach(function(input) {\n      input.addEventListener('input', updatePower);\n    });\n    updatePower();\n  </script>\n</body>\n</html>";

export const AS1DifferentiationLessonWIDGET001: React.FC = () => (
  <DiagramPanel title={"Power Rule Explorer"} analysis={null} wide>
    <iframe
      title={"AS1-Differentiation-Lesson-WIDGET-001"}
      srcDoc={htmlSource}
      sandbox="allow-scripts"
      className="min-h-[540px] w-full rounded-xl border border-zinc-800 bg-white"
    />
  </DiagramPanel>
);
