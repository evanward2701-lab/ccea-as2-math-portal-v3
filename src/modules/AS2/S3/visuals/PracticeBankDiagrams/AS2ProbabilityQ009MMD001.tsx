import React from 'react';
import { MermaidDiagram } from '@/core/diagram-engine/MermaidDiagram';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

export const AS2ProbabilityQ009MMD001: React.FC = () => (
  <DiagramPanel title="AS2ProbabilityQ009MMD-001" analysis={null}>
    <div className="max-h-[400px] overflow-auto py-4">
      <MermaidDiagram chart={`flowchart LR
    Start((Initial bag: 2R, 4W)) -->|R: 2/6, replace + add R| R1[After R: 3R, 4W]
    Start -->|W: 4/6, not replaced| W1[After W: 2R, 3W]

    R1 -->|R: 3/7| RR[After RR: 4R, 4W]
    R1 -->|W: 4/7| RW[After RW: 3R, 3W]
    W1 -->|R: 2/5| WR[After WR: 3R, 3W]
    W1 -->|W: 3/5| WW[After WW: 2R, 2W]

    RR -->|W: 4/8 = 1/2| RRW[rrw: exactly one W]
    RW -->|R: 3/6 = 1/2| RWR[rwr: exactly one W]
    WR -->|R: 3/6 = 1/2| WRR[wrr: exactly one W]
    RR -->|R: 4/8 = 1/2| RRR[rrr: all red]
    WW -->|W: 2/4 = 1/2| WWW[www: all white]`} />
    </div>
  </DiagramPanel>
);
