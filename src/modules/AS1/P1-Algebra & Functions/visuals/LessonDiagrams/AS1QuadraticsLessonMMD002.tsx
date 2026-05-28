import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { MermaidDiagram } from '@/core/diagram-engine/MermaidDiagram';

const chart = "graph LR\n    F[\"Quadratic function f(x) = ax^2 + bx + c\"]\n    Graph[\"Graph: parabola\"]\n    Shape[\"Shape & direction: depends on the sign and magnitude of a\"]\n    Vertex[\"Turning point (vertex) and axis of symmetry\"]\n    Discriminant[\"Discriminant D = b² – 4ac\"]\n    Roots[\"Number of real roots / x‑intercepts\"]\n    Methods[\"Solution methods\"]\n    Fact[\"Factorising\"]\n    CS[\"Completing the square\"]\n    QF[\"Quadratic formula\"]\n    YInt[\"y‑intercept: (0,c)\"]\n\n    F --> Graph\n    Graph --> Shape\n    Graph --> Vertex\n    Graph --> YInt\n    F --> Discriminant\n    Discriminant --> Roots\n    F --> Methods\n    Methods --> Fact\n    Methods --> CS\n    Methods --> QF\n    CS --> Vertex\n    Shape --> Roots\n    Roots --> Graph\n    YInt --> Graph";

export const AS1QuadraticsLessonMMD002: React.FC = () => (
  <DiagramPanel title={"Concept map linking quadratic features"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto py-4">
      <MermaidDiagram chart={chart} />
    </div>
  </DiagramPanel>
);
