import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

export const AS2KinematicsMotionGraphsUniformAccelerationQ008SVG001: React.FC = () => (
  <DiagramPanel title="AS2KinematicsMotionGraphsUniformAccelerationQ008SVG-001" analysis={null}>
    <div className="text-muted-foreground w-full flex justify-center py-4">
      <div className="max-w-full max-h-[400px] flex justify-center items-center overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" width="820" height="230" viewBox="0 0 820 230" role="img" aria-label="Timeline A to B to C showing 20 metres then 15 metres">
  <rect width="100%" height="100%" fill="transparent"/>
  <line x1="100" y1="120" x2="720" y2="120" stroke="currentColor" stroke-width="1.5"/>
  <line x1="100" y1="75" x2="100" y2="165" stroke="currentColor" stroke-width="1.5"/>
  <line x1="410" y1="75" x2="410" y2="165" stroke="currentColor" stroke-width="1.5"/>
  <line x1="720" y1="75" x2="720" y2="165" stroke="currentColor" stroke-width="1.5"/>
  <text x="82" y="190" font-family="Inter, sans-serif" font-size="12">A</text>
  <text x="402" y="190" font-family="Inter, sans-serif" font-size="12">B</text>
  <text x="712" y="190" font-family="Inter, sans-serif" font-size="12">C</text>
  <text x="80" y="55" font-family="Inter, sans-serif" font-size="12">t = 0</text>
  <text x="386" y="55" font-family="Inter, sans-serif" font-size="12">t = 1</text>
  <text x="696" y="55" font-family="Inter, sans-serif" font-size="12">t = 2</text>
  <text x="235" y="105" font-family="Inter, sans-serif" font-size="12">20 m</text>
  <text x="545" y="105" font-family="Inter, sans-serif" font-size="12">15 m</text>
</svg>
      </div>
    </div>
  </DiagramPanel>
);
