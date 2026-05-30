import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { LuxurySVGWrapper } from '@/core/diagram-engine/LuxurySVGWrapper';

const svgSource = "<svg width=\"420\" height=\"140\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Derivative sign table\">\n  <!-- Table outline -->\n  <rect x=\"0\" y=\"0\" width=\"420\" height=\"140\" fill=\"white\" stroke=\"black\" />\n  <!-- Header row -->\n  <rect x=\"0\" y=\"0\" width=\"420\" height=\"35\" fill=\"#e6f2ff\" stroke=\"black\" />\n  <text x=\"105\" y=\"22\" font-family=\"Arial\" font-size=\"14\" font-weight=\"bold\">Sign of \\(f'(x)\\)</text>\n  <text x=\"280\" y=\"22\" font-family=\"Arial\" font-size=\"14\" font-weight=\"bold\">Function behaviour</text>\n  <!-- Row 1: positive -->\n  <rect x=\"0\" y=\"35\" width=\"420\" height=\"35\" fill=\"#f9f9f9\" stroke=\"black\" />\n  <text x=\"65\" y=\"57\" font-family=\"Arial\" font-size=\"13\">\\(f'(x) &gt; 0\\)</text>\n  <text x=\"250\" y=\"57\" font-family=\"Arial\" font-size=\"13\">Function strictly increasing</text>\n  <!-- Row 2: zero -->\n  <rect x=\"0\" y=\"70\" width=\"420\" height=\"35\" fill=\"white\" stroke=\"black\" />\n  <text x=\"65\" y=\"92\" font-family=\"Arial\" font-size=\"13\">\\(f'(x) = 0\\)</text>\n  <text x=\"250\" y=\"92\" font-family=\"Arial\" font-size=\"13\">Stationary point (turning or flat)</text>\n  <!-- Row 3: negative -->\n  <rect x=\"0\" y=\"105\" width=\"420\" height=\"35\" fill=\"#f9f9f9\" stroke=\"black\" />\n  <text x=\"65\" y=\"127\" font-family=\"Arial\" font-size=\"13\">\\(f'(x) &lt; 0\\)</text>\n  <text x=\"250\" y=\"127\" font-family=\"Arial\" font-size=\"13\">Function strictly decreasing</text>\n</svg>";

export const AS1DifferentiationLessonSVG001: React.FC = () => (
  <DiagramPanel title={"Derivative Sign and Function Behaviour"} analysis={null}>
    <LuxurySVGWrapper svgSource={svgSource} className="w-full max-h-[560px] overflow-auto text-foreground [&_svg]:max-w-full [&_svg]:h-auto" />
  </DiagramPanel>
);
