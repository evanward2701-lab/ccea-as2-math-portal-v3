import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { MermaidDiagram } from '@/core/diagram-engine/MermaidDiagram';

const chart = "graph TD\n    A([Start with velocity vector \\(\\mathbf{v}\\) and time \\(t\\)])\n    B{Calculate speed}\n    C[\\(|\\mathbf{v}| = \\sqrt{x^2 + y^2}\\)]\n    D{Convert time}\n    E[Convert \\(t\\) into hours or consistent units]\n    F{Compute distance}\n    G[Distance \\(= |\\mathbf{v}| \\times t\\)]\n    H([Include units and interpret])\n    A --> B\n    B --> C\n    C --> D\n    D --> E\n    E --> F\n    F --> G\n    G --> H";

export const AS1VectorsLessonMMD001: React.FC = () => (
  <DiagramPanel title={"Velocity to Distance Flowchart"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto py-4">
      <MermaidDiagram chart={chart} />
    </div>
  </DiagramPanel>
);
