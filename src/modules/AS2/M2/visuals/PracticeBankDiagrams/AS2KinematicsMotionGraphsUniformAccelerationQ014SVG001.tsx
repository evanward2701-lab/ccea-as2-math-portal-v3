import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

export const AS2KinematicsMotionGraphsUniformAccelerationQ014SVG001: React.FC = () => (
  <DiagramPanel title="AS2KinematicsMotionGraphsUniformAccelerationQ014SVG-001" analysis={null}>
    <div className="text-zinc-500 w-full flex justify-center py-4">
      <div className="max-w-full max-h-[400px] flex justify-center items-center overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" width="820" height="240" viewBox="0 0 820 240" role="img" aria-label="Aircraft runway AB with points A, C and B">
  <rect width="100%" height="100%" fill="transparent"/>
  <line x1="210" y1="130" x2="720" y2="130" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="245" cy="130" r="5" fill="currentColor"/>
  <circle cx="475" cy="130" r="5" fill="currentColor"/>
  <circle cx="690" cy="130" r="5" fill="currentColor"/>
  <text x="238" y="160" font-family="Inter, sans-serif" font-size="12">A</text>
  <text x="468" y="160" font-family="Inter, sans-serif" font-size="12">C</text>
  <text x="683" y="160" font-family="Inter, sans-serif" font-size="12">B</text>
  <text x="415" y="190" font-family="Inter, sans-serif" font-size="12">AB = 3 km</text>

  
  <g transform="translate(78 95)">
    <path d="M10 25 L105 25 L138 38 L105 46 L10 46 L25 36 Z" fill="none" stroke="currentColor" stroke-width="1.5"/>
    <path d="M55 25 L25 5 L42 25" fill="none" stroke="currentColor" stroke-width="1.5"/>
    <path d="M62 46 L34 70 L50 46" fill="none" stroke="currentColor" stroke-width="1.5"/>
    <path d="M10 25 L0 12 L17 25" fill="none" stroke="currentColor" stroke-width="1.5"/>
    <circle cx="78" cy="50" r="4" fill="currentColor"/>
    <circle cx="105" cy="50" r="4" fill="currentColor"/>
  </g>
  <path d="M175 120 L230 120" stroke="currentColor" stroke-width="2" marker-end="url(#arrow)"/>
  <text x="255" y="103" font-family="Inter, sans-serif" font-size="12">starts from rest</text>
  <text x="465" y="103" font-family="Inter, sans-serif" font-size="12">take-off speed at C</text>

  <defs>
    <marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="currentColor"/>
    </marker>
  </defs>
</svg>
      </div>
    </div>
  </DiagramPanel>
);
