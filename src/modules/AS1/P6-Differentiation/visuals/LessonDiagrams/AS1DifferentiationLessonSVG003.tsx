import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const svgSource = "<svg width=\"520\" height=\"170\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Concavity table\">\n  <rect x=\"0\" y=\"0\" width=\"520\" height=\"170\" fill=\"white\" stroke=\"black\" />\n  <!-- Header row -->\n  <rect x=\"0\" y=\"0\" width=\"520\" height=\"35\" fill=\"#e6f2ff\" stroke=\"black\" />\n  <text x=\"40\" y=\"22\" font-family=\"Arial\" font-size=\"14\" font-weight=\"bold\">Second derivative \\(f''(x)\\)</text>\n  <text x=\"300\" y=\"22\" font-family=\"Arial\" font-size=\"14\" font-weight=\"bold\">Curve behaviour</text>\n  <!-- Row: concave up -->\n  <rect x=\"0\" y=\"35\" width=\"520\" height=\"35\" fill=\"#f9f9f9\" stroke=\"black\" />\n  <text x=\"60\" y=\"57\" font-family=\"Arial\" font-size=\"13\">\\(f''(x) &gt; 0\\)</text>\n  <text x=\"300\" y=\"57\" font-family=\"Arial\" font-size=\"13\">Curve concave up (cup‑shaped)</text>\n  <!-- Row: concave down -->\n  <rect x=\"0\" y=\"70\" width=\"520\" height=\"35\" fill=\"white\" stroke=\"black\" />\n  <text x=\"60\" y=\"92\" font-family=\"Arial\" font-size=\"13\">\\(f''(x) &lt; 0\\)</text>\n  <text x=\"300\" y=\"92\" font-family=\"Arial\" font-size=\"13\">Curve concave down (cap‑shaped)</text>\n  <!-- Row: point of inflection -->\n  <rect x=\"0\" y=\"105\" width=\"520\" height=\"65\" fill=\"#f9f9f9\" stroke=\"black\" />\n  <text x=\"60\" y=\"128\" font-family=\"Arial\" font-size=\"13\">\\(f''(x) = 0\\)</text>\n  <text x=\"300\" y=\"120\" font-family=\"Arial\" font-size=\"13\">Potential point of inflection</text>\n  <text x=\"300\" y=\"138\" font-family=\"Arial\" font-size=\"12\">If \\(f''(x)\\) changes sign and \\(f'(x)\\neq 0\\): non‑stationary inflection</text>\n  <text x=\"300\" y=\"154\" font-family=\"Arial\" font-size=\"12\">If \\(f''(x)\\) changes sign and \\(f'(x)=0\\): stationary inflection</text>\n</svg>";

export const AS1DifferentiationLessonSVG003: React.FC = () => (
  <DiagramPanel title={"Concavity and Points of Inflection"} analysis={null}>
    <div
      className="w-full max-h-[560px] overflow-auto text-zinc-100 [&_svg]:max-w-full [&_svg]:h-auto"
      dangerouslySetInnerHTML={{ __html: svgSource }}
    />
  </DiagramPanel>
);
