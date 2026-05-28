import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { MermaidDiagram } from '@/core/diagram-engine/MermaidDiagram';

const chart = "graph TD\n    S[Start: Solve \\(f'(x)=0\\) to find stationary point \\(x=a\\)] --> Q{Compute \\(f''(a)\\)}\n    Q -->|\\(f''(a) > 0\\)| M[Local minimum]\n    Q -->|\\(f''(a) < 0\\)| K[Local maximum]\n    Q -->|\\(f''(a) = 0\\)| R{Check sign of \\(f'(x)\\) either side of \\(a\\)}\n    R -->|changes from + to −| K\n    R -->|changes from − to +| M\n    R -->|no change| I[Stationary point of inflection]\n    M --> E([End])\n    K --> E\n    I --> E";

export const AS1DifferentiationLessonMMD002: React.FC = () => (
  <DiagramPanel title={"Stationary Point Classification Decision Tree"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto py-4">
      <MermaidDiagram chart={chart} />
    </div>
  </DiagramPanel>
);
