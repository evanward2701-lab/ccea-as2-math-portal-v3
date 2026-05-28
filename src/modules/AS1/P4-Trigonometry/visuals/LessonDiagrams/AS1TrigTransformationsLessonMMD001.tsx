import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { MermaidDiagram } from '@/core/diagram-engine/MermaidDiagram';

const chart = "flowchart TD\n    A[General transformation: y = a f(bx + c) + d]\n    A --> B[Amplitude (vertical stretch)]\n    A --> C[Horizontal factor (b)]\n    A --> D[Horizontal shift (c)]\n    A --> E[Vertical shift (d)]\n    B --> B1[Amplitude = |a|]\n    B --> B2[If a \\(<0\\): reflect in x-axis]\n    C --> C1[Period = parent period / |b|]\n    C --> C2[b \\(> 1\\): compress horizontally]\n    C --> C3[0 < b < 1: stretch horizontally]\n    D --> D1[Shift left by c when c \\(> 0\\)]\n    D --> D2[Shift right by |c| when c \\(< 0\\)]\n    E --> E1[Move up by d when d \\(> 0\\)]\n    E --> E2[Move down by |d| when d \\(< 0\\)]";

export const AS1TrigTransformationsLessonMMD001: React.FC = () => (
  <DiagramPanel title={"Effect of parameters on \\(y = a\\,f(bx + c) + d\\)"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto py-4">
      <MermaidDiagram chart={chart} />
    </div>
  </DiagramPanel>
);
