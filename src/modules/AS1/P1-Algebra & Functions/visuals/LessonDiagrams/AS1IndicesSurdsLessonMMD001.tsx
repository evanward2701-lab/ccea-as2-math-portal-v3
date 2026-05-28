import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { MermaidDiagram } from '@/core/diagram-engine/MermaidDiagram';

const chart = "flowchart TD\n    A[Start with $\\sqrt{n}$] --> B{Does $n$ have a square factor $>1$?}\n    B -- No --> F[Result: $\\sqrt{n}$ is already in simplest surd form]\n    B -- Yes --> C[Write $n = k^2 \\times m$ where $k$ is the largest integer $\\leq \\sqrt{n}$]\n    C --> D[Rewrite $\\sqrt{n} = \\sqrt{k^2 \\times m}$]\n    D --> E[Extract the square root of $k^2$: $\\sqrt{n} = k\\sqrt{m}$]\n    E --> B";

export const AS1IndicesSurdsLessonMMD001: React.FC = () => (
  <DiagramPanel title={"Surd Simplification Flowchart"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto py-4">
      <MermaidDiagram chart={chart} />
    </div>
  </DiagramPanel>
);
