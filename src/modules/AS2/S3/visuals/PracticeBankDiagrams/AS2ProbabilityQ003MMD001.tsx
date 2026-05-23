import React from 'react';
import { MermaidDiagram } from '@/core/diagram-engine/MermaidDiagram';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

export const AS2ProbabilityQ003MMD001: React.FC = () => (
  <DiagramPanel title="AS2ProbabilityQ003MMD-001" analysis={null}>
    <div className="max-h-[400px] overflow-auto py-4">
      <MermaidDiagram chart={`flowchart LR
    Start((Start)) -->|7/12| S1[Friend 1: Strawberry]
    Start -->|5/12| L1[Friend 1: Lemon]

    S1 -->|6/11| SS[Friend 2: Strawberry]
    S1 -->|5/11| SL[Friend 2: Lemon]
    L1 -->|7/11| LS[Friend 2: Strawberry]
    L1 -->|4/11| LL[Friend 2: Lemon]

    SS -->|5/10| SSL[Katy: Lemon]
    SL -->|4/10| SLL[Katy: Lemon]
    LS -->|4/10| LSL[Katy: Lemon]
    LL -->|3/10| LLL[Katy: Lemon]`} />
    </div>
  </DiagramPanel>
);
