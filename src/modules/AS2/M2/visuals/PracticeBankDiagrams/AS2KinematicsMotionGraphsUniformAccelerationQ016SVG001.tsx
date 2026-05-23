import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

export const AS2KinematicsMotionGraphsUniformAccelerationQ016SVG001: React.FC = () => (
  <DiagramPanel title="AS2KinematicsMotionGraphsUniformAccelerationQ016SVG-001" analysis={null}>
    <div className="text-zinc-500 w-full flex justify-center py-4">
      <div className="max-w-full max-h-[400px] flex justify-center items-center overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" width="420" height="440" viewBox="0 0 420 440" role="img" aria-label="Force diagram for falling stone with air resistance">
  <rect width="100%" height="100%" fill="transparent"/>
  <circle cx="210" cy="220" r="55" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="210" y1="165" x2="210" y2="80" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow)"/>
  <line x1="210" y1="275" x2="210" y2="365" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow)"/>
  <text x="230" y="100" font-family="Inter, sans-serif" font-size="12">0.8 N</text>
  <text x="230" y="350" font-family="Inter, sans-serif" font-size="12">0.2g</text>
  <text x="92" y="225" font-family="Inter, sans-serif" font-size="12">stone</text>
  <defs>
    <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="currentColor"/>
    </marker>
  </defs>
</svg>
      </div>
    </div>
  </DiagramPanel>
);
