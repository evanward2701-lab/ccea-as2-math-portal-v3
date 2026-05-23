import React from 'react';
import { MermaidDiagram } from '@/core/diagram-engine/MermaidDiagram';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

export const AS2ProbabilityQ012MMD001: React.FC = () => (
  <DiagramPanel title="AS2ProbabilityQ012MMD-001" analysis={null}>
    <div className="max-h-[400px] overflow-auto py-4">
      <MermaidDiagram chart={`flowchart LR
    Start((12 marbles: 5R, 4G, 3Y)) -->|5/12| R1[First: R]
    Start -->|4/12| G1[First: G]
    Start -->|3/12| Y1[First: Y]

    R1 -->|4/11| RR[RR same]
    R1 -->|4/11| RG[RG different]
    R1 -->|3/11| RY[RY different]

    G1 -->|5/11| GR[GR different]
    G1 -->|3/11| GG[GG same]
    G1 -->|3/11| GY[GY different]

    Y1 -->|5/11| YR[YR different]
    Y1 -->|4/11| YG[YG different]
    Y1 -->|2/11| YY[YY same]`} />
    </div>
  </DiagramPanel>
);
