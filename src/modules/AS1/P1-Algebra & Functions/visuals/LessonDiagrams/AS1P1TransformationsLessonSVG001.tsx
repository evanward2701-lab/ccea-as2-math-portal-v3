import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const svgSource = "<svg width=\"600\" height=\"240\" xmlns=\"http://www.w3.org/2000/svg\">\n  <style>\n    .title { font-family: sans-serif; font-size: 18px; font-weight: bold; fill: #003366; }\n    .header { font-family: sans-serif; font-size: 14px; font-weight: bold; fill: #005a9c; }\n    .text { font-family: sans-serif; font-size: 12px; fill: #000000; }\n    .box { fill: #e6f2ff; stroke: #005a9c; stroke-width: 1; }\n  </style>\n  <!-- Title -->\n  <text x=\"20\" y=\"24\" class=\"title\">Amplitude and Period Summary</text>\n  <!-- Sine -->\n  <rect x=\"20\" y=\"40\" width=\"180\" height=\"160\" class=\"box\"/>\n  <text x=\"30\" y=\"60\" class=\"header\">y = a sin(bx + c) + d</text>\n  <text x=\"30\" y=\"80\" class=\"text\">Amplitude: |a|</text>\n  <text x=\"30\" y=\"100\" class=\"text\">Period: 360° / |b|</text>\n  <text x=\"30\" y=\"120\" class=\"text\">Phase shift: –c / b</text>\n  <text x=\"30\" y=\"140\" class=\"text\">Vertical shift: d</text>\n  <text x=\"30\" y=\"160\" class=\"text\">Range: [d − |a|, d + |a|]</text>\n  <!-- Cosine -->\n  <rect x=\"210\" y=\"40\" width=\"180\" height=\"160\" class=\"box\"/>\n  <text x=\"220\" y=\"60\" class=\"header\">y = a cos(bx + c) + d</text>\n  <text x=\"220\" y=\"80\" class=\"text\">Amplitude: |a|</text>\n  <text x=\"220\" y=\"100\" class=\"text\">Period: 360° / |b|</text>\n  <text x=\"220\" y=\"120\" class=\"text\">Phase shift: –c / b</text>\n  <text x=\"220\" y=\"140\" class=\"text\">Vertical shift: d</text>\n  <text x=\"220\" y=\"160\" class=\"text\">Range: [d − |a|, d + |a|]</text>\n  <!-- Tangent -->\n  <rect x=\"400\" y=\"40\" width=\"180\" height=\"160\" class=\"box\"/>\n  <text x=\"410\" y=\"60\" class=\"header\">y = a tan(bx + c) + d</text>\n  <text x=\"410\" y=\"80\" class=\"text\">Vertical stretch: |a|</text>\n  <text x=\"410\" y=\"100\" class=\"text\">Period: 180° / |b|</text>\n  <text x=\"410\" y=\"120\" class=\"text\">Phase shift: –c / b</text>\n  <text x=\"410\" y=\"140\" class=\"text\">Vertical shift: d</text>\n  <text x=\"410\" y=\"160\" class=\"text\">Asymptotes at x = (90° − c)/b + k·(180°/|b|)</text>\n</svg>";

export const AS1P1TransformationsLessonSVG001: React.FC = () => (
  <DiagramPanel title={"Summary of amplitude and period formulas"} analysis={null}>
    <div
      className="w-full max-h-[560px] overflow-auto text-zinc-100 [&_svg]:max-w-full [&_svg]:h-auto"
      dangerouslySetInnerHTML={{ __html: svgSource }}
    />
  </DiagramPanel>
);
