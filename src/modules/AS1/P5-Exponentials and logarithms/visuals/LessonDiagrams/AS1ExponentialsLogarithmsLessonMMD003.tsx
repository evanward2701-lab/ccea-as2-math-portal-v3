import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { MermaidDiagram } from '@/core/diagram-engine/MermaidDiagram';

const chart = "flowchart TD\n    A[Start with a logarithmic equation] --> B[Write down all domain restrictions]\n    B --> C[Use log laws to simplify each side]\n    C --> D{Can you combine to one log on each side?}\n    D -- Yes --> E[Use: if log_a M = log_a N, then M = N]\n    D -- No --> F[Convert to exponential form]\n    E --> G[Solve the algebraic equation]\n    F --> G\n    G --> H[Check every candidate against the domain restrictions]\n    H --> I{Does it make every log input positive?}\n    I -- Yes --> J[Keep the solution]\n    I -- No --> K[Reject the solution]";

export const AS1ExponentialsLogarithmsLessonMMD003: React.FC = () => (
  <DiagramPanel title={"Solving logarithmic equations"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto py-4">
      <MermaidDiagram chart={chart} />
    </div>
  </DiagramPanel>
);
