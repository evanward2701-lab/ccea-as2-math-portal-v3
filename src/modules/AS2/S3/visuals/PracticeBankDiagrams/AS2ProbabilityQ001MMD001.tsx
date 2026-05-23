import React from 'react';
import { MermaidDiagram } from '@/core/diagram-engine/MermaidDiagram';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

export const AS2ProbabilityQ001MMD001: React.FC = () => (
  <DiagramPanel title="AS2ProbabilityQ001MMD-001" analysis={null}>
    <div className="max-h-[400px] overflow-auto py-4">
      <MermaidDiagram chart={`flowchart LR
    S((Start)) -->|x| A[A]
    S -->|1 - x| nA[not A]
    A -->|unlabelled| AB[B]
    A -->|z| AnB[not B]
    nA -->|y| nAB[B]
    nA -->|unlabelled| nAnB[not B]`} />
    </div>
  </DiagramPanel>
);
