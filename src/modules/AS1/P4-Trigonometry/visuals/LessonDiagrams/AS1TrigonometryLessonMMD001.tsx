import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { MermaidDiagram } from '@/core/diagram-engine/MermaidDiagram';

const chart = "graph TD\n    Start[[Start: determine known values]] --> Right{Is the triangle right‑angled?}\n    Right -->|Yes| RightTrig[Use SOH CAH TOA or Pythagoras]\n    Right -->|No| Info{Known information?}\n    Info -->|Two sides and included angle (SAS) or all three sides (SSS)| Cosine[Use Cosine Rule]\n    Info -->|Two angles and one side (AAS/ASA) or two sides and a non‑included angle (SSA)| Sine[Use Sine Rule]\n    Sine --> Ambig{Is it the SSA ambiguous case?}\n    Ambig -->|Yes| AmbigCase[Consider 0, 1 or 2 solutions]\n    Ambig -->|No| SolveSine[Solve normally]\n    Cosine --> AreaQ{Need the area?}\n    AreaQ -->|Yes| Area[Use area formula \\(\\tfrac{1}{2}ab\\sin C\\)]\n    AreaQ -->|No| Done1[Compute unknowns]\n    AmbigCase --> Done2[Compute possible solutions]\n    SolveSine --> Done2\n    RightTrig --> Done2\n    Area --> Done1\n    Done1 --> End1[Finish]\n    Done2 --> End2[Finish]";

export const AS1TrigonometryLessonMMD001: React.FC = () => (
  <DiagramPanel title={"Decision tree for choosing sine rule, cosine rule or area formula"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto py-4">
      <MermaidDiagram chart={chart} />
    </div>
  </DiagramPanel>
);
