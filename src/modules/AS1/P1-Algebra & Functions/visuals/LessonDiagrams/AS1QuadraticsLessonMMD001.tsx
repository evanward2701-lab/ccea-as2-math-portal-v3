import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { MermaidDiagram } from '@/core/diagram-engine/MermaidDiagram';

const chart = "flowchart TD\n    Start([Start: quadratic equation ax^2 + bx + c = 0])\n    Q1{Does it factorise easily?}\n    Q2{Is completing the square straightforward?}\n    Factorising[\"Use factorising method\\n– write ax^2+bx+c=0,\\n– factorise the left‑hand side,\\n– set each factor to zero and solve\"]\n    CompletingSquare[\"Use completing the square\\n– rewrite in vertex form,\\n– solve by isolating the squared bracket\"]\n    QuadraticFormula[\"Use the quadratic formula\\n– always works: x = (-b ± √(b²–4ac))/(2a)\"]\n\n    Start --> Q1\n    Q1 -- Yes --> Factorising\n    Q1 -- No --> Q2\n    Q2 -- Yes --> CompletingSquare\n    Q2 -- No --> QuadraticFormula\n    Factorising --> End([Finish: obtain solutions])\n    CompletingSquare --> End\n    QuadraticFormula --> End";

export const AS1QuadraticsLessonMMD001: React.FC = () => (
  <DiagramPanel title={"Decision tree for choosing a solution method"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto py-4">
      <MermaidDiagram chart={chart} />
    </div>
  </DiagramPanel>
);
