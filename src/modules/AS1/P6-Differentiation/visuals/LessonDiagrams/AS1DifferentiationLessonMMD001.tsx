import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { MermaidDiagram } from '@/core/diagram-engine/MermaidDiagram';

const chart = "graph TD\n    A([Start]) --> B[Write \\(f(x)\\)]\n    B --> C[Compute \\(f(x+h)\\)]\n    C --> D[Form \\(f(x+h) - f(x)\\)]\n    D --> E[Divide by \\(h\\)]\n    E --> F[Take the limit \\(h\\to 0\\)]\n    F --> G[Result: \\(f'(x)\\)]\n    G --> H([End])";

export const AS1DifferentiationLessonMMD001: React.FC = () => (
  <DiagramPanel title={"First Principles Differentiation Flowchart"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto py-4">
      <MermaidDiagram chart={chart} />
    </div>
  </DiagramPanel>
);
