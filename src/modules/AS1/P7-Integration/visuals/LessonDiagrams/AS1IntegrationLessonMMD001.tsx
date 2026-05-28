import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { MermaidDiagram } from '@/core/diagram-engine/MermaidDiagram';

const chart = "graph TD\n  A[Integration] --> B[Indefinite Integration]\n  A --> C[Definite Integration]\n  B --> B1[Reverse of differentiation]\n  B --> B2[Power rule: ∫ x^n dx = x^{n+1}/(n+1) + C (n ≠ −1)]\n  B --> B3[Add constant of integration C]\n  C --> C1[Uses limits a and b]\n  C --> C2[Find antiderivative F(x)]\n  C --> C3[Evaluate F(b) − F(a)]\n  C --> C4[Represents signed area under curve]\n  C --> C5[No constant C needed]\n  C4 --> D[Split integral for total area if f(x) crosses x‑axis]";

export const AS1IntegrationLessonMMD001: React.FC = () => (
  <DiagramPanel title={"Concept map for integration"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto py-4">
      <MermaidDiagram chart={chart} />
    </div>
  </DiagramPanel>
);
