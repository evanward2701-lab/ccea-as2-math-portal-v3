import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { MermaidDiagram } from '@/core/diagram-engine/MermaidDiagram';

const chart = "flowchart LR\n    A[Exponential function y = a^x] --> B[Base a is positive]\n    B --> C[a cannot equal 1]\n    A --> D[Domain: all real x]\n    A --> E[Range: y > 0]\n    A --> F[Always passes through (0,1)]\n    A --> G[Inverse function]\n    G --> H[Logarithm y = log_a x]\n    H --> I[Input x must be positive]\n    H --> J[Domain: x > 0]\n    H --> K[Range: all real y]\n    H --> L[log_a n = x means a^x = n]\n    M[Natural case] --> N[y = e^x]\n    N --> O[Inverse is y = ln x]\n    O --> I";

export const AS1ExponentialsLogarithmsLessonMMD001: React.FC = () => (
  <DiagramPanel title={"Exponentials and logarithms concept map"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto py-4">
      <MermaidDiagram chart={chart} />
    </div>
  </DiagramPanel>
);
