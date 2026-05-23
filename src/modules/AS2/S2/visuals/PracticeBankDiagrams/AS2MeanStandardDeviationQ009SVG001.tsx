import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

export const AS2MeanStandardDeviationQ009SVG001: React.FC = () => (
  <DiagramPanel title="AS2MeanStandardDeviationQ009SVG-001" analysis={null}>
    <div className="text-zinc-500 w-full flex justify-center py-4">
      <div className="max-w-full max-h-[400px] flex justify-center items-center overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" width="760" height="430" viewBox="0 0 760 430" role="img" aria-label="Histogram of mass in kilograms against frequency density">
  <defs>
    <pattern id="AS2MeanStandardDeviationQ009SVG001Hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="8" stroke="#777" stroke-width="1" />
    </pattern>
    <marker id="AS2MeanStandardDeviationQ009SVG001Arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="#111" />
    </marker>
  </defs>

  <rect x="0" y="0" width="760" height="430" fill="transparent" />
  <text x="380" y="28" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="bold">Fig. 1: Histogram of masses</text>

  
  <g id="grid" stroke="#c9c9c9" stroke-width="1">
    <line x1="80" y1="300" x2="680" y2="300" />
    <line x1="80" y1="252" x2="680" y2="252" />
    <line x1="80" y1="204" x2="680" y2="204" />
    <line x1="80" y1="156" x2="680" y2="156" />
    <line x1="80" y1="108" x2="680" y2="108" />
    <line x1="80" y1="60" x2="680" y2="60" />
    <line x1="80" y1="300" x2="80" y2="60" />
    <line x1="160" y1="300" x2="160" y2="60" />
    <line x1="240" y1="300" x2="240" y2="60" />
    <line x1="400" y1="300" x2="400" y2="60" />
    <line x1="480" y1="300" x2="480" y2="60" />
    <line x1="680" y1="300" x2="680" y2="60" />
  </g>

  <g id="bars" fill="url(#AS2MeanStandardDeviationQ009SVG001Hatch)" stroke="#111" stroke-width="1.5">
    <rect x="80" y="156" width="80" height="144" />
    <rect x="160" y="84" width="80" height="216" />
    <rect x="240" y="252" width="160" height="48" />
    <rect x="400" y="156" width="80" height="144" />
    <rect x="480" y="156" width="200" height="144" />
  </g>

  <g id="axes" stroke="#111" stroke-width="2" marker-end="url(#AS2MeanStandardDeviationQ009SVG001Arrow)">
    <line x1="80" y1="300" x2="705" y2="300" />
    <line x1="80" y1="300" x2="80" y2="40" />
  </g>

  <g id="tick-labels" font-family="Inter, sans-serif" font-size="12" fill="#111">
    <text x="80" y="322" text-anchor="middle">1.5</text>
    <text x="160" y="322" text-anchor="middle">5.5</text>
    <text x="240" y="322" text-anchor="middle">9.5</text>
    <text x="400" y="322" text-anchor="middle">17.5</text>
    <text x="480" y="322" text-anchor="middle">21.5</text>
    <text x="680" y="322" text-anchor="middle">31.5</text>

    <text x="65" y="305" text-anchor="end">0</text>
    <text x="65" y="257" text-anchor="end">0.5</text>
    <text x="65" y="209" text-anchor="end">1</text>
    <text x="65" y="161" text-anchor="end">1.5</text>
    <text x="65" y="113" text-anchor="end">2</text>
    <text x="65" y="65" text-anchor="end">2.5</text>
  </g>

  <text x="380" y="365" text-anchor="middle" font-family="Inter, sans-serif" font-size="12">Mass (kg)</text>
  <text x="28" y="190" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" transform="rotate(-90 28 190)">Frequency Density</text>

  <g font-family="Inter, sans-serif" font-size="12" fill="#111">
    <text x="120" y="148" text-anchor="middle">FD 1.5</text>
    <text x="200" y="76" text-anchor="middle">FD 2.25</text>
    <text x="320" y="244" text-anchor="middle">FD 0.5</text>
    <text x="440" y="148" text-anchor="middle">FD 1.5</text>
    <text x="580" y="148" text-anchor="middle">FD 1.5</text>
  </g>
</svg>
      </div>
    </div>
  </DiagramPanel>
);
