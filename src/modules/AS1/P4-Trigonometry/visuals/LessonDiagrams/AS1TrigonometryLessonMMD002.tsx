import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { MermaidDiagram } from '@/core/diagram-engine/MermaidDiagram';

const chart = "graph TD\n    StartEq[[Start: solve \\(f(x)=k\\)]] --> Type{Which function?}\n    Type -->|\\(\\sin x = k\\)| Sin\n    Type -->|\\(\\cos x = k\\)| Cos\n    Type -->|\\(\\tan x = k\\)| Tan\n    %% Sine branch\n    Sin --> SinRA[Compute reference angle \\(\\alpha = \\arcsin(|k|)\\)]\n    SinRA --> SinSign{Is \\(k\\) positive?}\n    SinSign -->|Yes| SinPos[Solutions: \\(x = \\alpha\\) or \\(x = 180^\\circ - \\alpha\\) (Quadrants I & II)]\n    SinSign -->|No| SinNeg[Solutions: \\(x = 180^\\circ + \\alpha\\) or \\(x = 360^\\circ - \\alpha\\) (Quadrants III & IV)]\n    %% Cosine branch\n    Cos --> CosRA[Compute reference angle \\(\\alpha = \\arccos(|k|)\\)]\n    CosRA --> CosSign{Is \\(k\\) positive?}\n    CosSign -->|Yes| CosPos[Solutions: \\(x = \\alpha\\) or \\(x = 360^\\circ - \\alpha\\) (Quadrants I & IV)]\n    CosSign -->|No| CosNeg[Solutions: \\(x = 180^\\circ - \\alpha\\) or \\(x = 180^\\circ + \\alpha\\) (Quadrants II & III)]\n    %% Tangent branch\n    Tan --> TanRA[Compute reference angle \\(\\alpha = \\arctan(|k|)\\)]\n    TanRA --> TanSign{Is \\(k\\) positive?}\n    TanSign -->|Yes| TanPos[Solutions: \\(x = \\alpha + 180^\\circ n\\) (Quadrants I & III)]\n    TanSign -->|No| TanNeg[Solutions: \\(x = 180^\\circ - \\alpha + 180^\\circ n\\) (Quadrants II & IV)]\n    %% Final note\n    TanPos --> EndEq[Check the specified interval and list all solutions]\n    TanNeg --> EndEq\n    CosPos --> EndEq\n    CosNeg --> EndEq\n    SinPos --> EndEq\n    SinNeg --> EndEq";

export const AS1TrigonometryLessonMMD002: React.FC = () => (
  <DiagramPanel title={"Decision tree for solving basic trigonometric equations"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto py-4">
      <MermaidDiagram chart={chart} />
    </div>
  </DiagramPanel>
);
