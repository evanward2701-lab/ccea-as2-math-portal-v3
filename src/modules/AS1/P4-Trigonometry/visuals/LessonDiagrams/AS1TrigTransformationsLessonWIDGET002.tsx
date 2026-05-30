import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const htmlSource = "<!doctype html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Coordinate Mapping Calculator</title>\n<style>\n  body { font-family: sans-serif; }\n  label { display: block; margin-top: 0.5em; }\n  input { width: 100px; }\n</style>\n</head>\n<body>\n  <h2>Coordinate Mapping Calculator</h2>\n  <p>Enter an original point on the parent graph and the transformation parameters to find the image point on \\(y = a\\,f(bx + c) + d\\).</p>\n  <label>x_old (°): <input type=\"number\" id=\"x_old\" value=\"0\"></label>\n  <label>y_old: <input type=\"number\" id=\"y_old\" value=\"0\"></label>\n  <label>a: <input type=\"number\" id=\"a_param\" value=\"1\" step=\"0.1\"></label>\n  <label>b: <input type=\"number\" id=\"b_param\" value=\"1\" step=\"0.1\"></label>\n  <label>c (°): <input type=\"number\" id=\"c_param\" value=\"0\" step=\"1\"></label>\n  <label>d: <input type=\"number\" id=\"d_param\" value=\"0\" step=\"0.1\"></label>\n  <button id=\"calcBtn\">Calculate</button>\n  <div id=\"result\" style=\"margin-top:1em;\"></div>\n\n  <script>\n    document.getElementById('calcBtn').addEventListener('click', function() {\n      const xOld = parseFloat(document.getElementById('x_old').value);\n      const yOld = parseFloat(document.getElementById('y_old').value);\n      const a = parseFloat(document.getElementById('a_param').value);\n      const b = parseFloat(document.getElementById('b_param').value);\n      const c = parseFloat(document.getElementById('c_param').value);\n      const d = parseFloat(document.getElementById('d_param').value);\n      const resultDiv = document.getElementById('result');\n      if (b === 0) {\n        resultDiv.innerHTML = '<p style=\"color:red;\">Error: b cannot be zero.</p>';\n        return;\n      }\n      const xNew = (xOld - c) / b;\n      const yNew = a * yOld + d;\n      resultDiv.innerHTML =\n        `<p>New x (°): ${xNew.toFixed(2)}</p>` +\n        `<p>New y: ${yNew.toFixed(2)}</p>`;\n    });\n  </script>\n</body>\n</html>";

export const AS1TrigTransformationsLessonWIDGET002: React.FC = () => (
  <DiagramPanel title={"Coordinate mapping calculator"} analysis={null} wide>
    <iframe
      title={"AS1-Trig-Transformations-Lesson-WIDGET-002"}
      srcDoc={htmlSource}
      sandbox="allow-scripts"
      className="min-h-[540px] w-full rounded-xl border border-primary/20 bg-white"
    />
  </DiagramPanel>
);
