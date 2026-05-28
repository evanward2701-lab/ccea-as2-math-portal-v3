import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { MermaidDiagram } from '@/core/diagram-engine/MermaidDiagram';

const chart = "flowchart LR\n    Start((Start with point (x_old, y_old) on y = f(x)))\n    Start --> Step1[Compute new x-coordinate: x_new = (x_old − c) / b]\n    Step1 --> Step2[Compute new y-coordinate: y_new = a·y_old + d]\n    Step2 --> End((Point on y = a f(bx + c) + d: (x_new, y_new)))";

export const AS1TrigTransformationsLessonMMD002: React.FC = () => (
  <DiagramPanel title={"Coordinate mapping for \\(y = a\\,f(bx + c) + d\\)"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto py-4">
      <MermaidDiagram chart={chart} />
    </div>
  </DiagramPanel>
);
