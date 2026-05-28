import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { MermaidDiagram } from '@/core/diagram-engine/MermaidDiagram';

const chart = "flowchart TD\n    A[Start with an equation where x is in the exponent] --> B{Can both sides be written using the same base?}\n    B -- Yes --> C[Rewrite using the same base]\n    C --> D[Equate the exponents]\n    D --> E[Solve the resulting linear or quadratic equation]\n    B -- No --> F[Take logs of both sides]\n    F --> G[Use log laws to bring the exponent down]\n    G --> H[Rearrange to solve for x]\n    E --> I[Substitute into original equation]\n    H --> I\n    I --> J[State answer to required accuracy]";

export const AS1ExponentialsLogarithmsLessonMMD002: React.FC = () => (
  <DiagramPanel title={"Solving exponential equations"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto py-4">
      <MermaidDiagram chart={chart} />
    </div>
  </DiagramPanel>
);
