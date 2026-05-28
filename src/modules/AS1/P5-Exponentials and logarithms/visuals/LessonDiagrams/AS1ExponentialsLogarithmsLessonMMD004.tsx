import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { MermaidDiagram } from '@/core/diagram-engine/MermaidDiagram';

const chart = "flowchart TD\n    A[Read the question] --> B{Is it about sketching a graph?}\n    B -- Yes --> C[Use domain, range, intercept, asymptote and shape]\n    B -- No --> D{Is x in an exponent?}\n    D -- Yes --> E{Same base possible?}\n    E -- Yes --> F[Rewrite bases and equate exponents]\n    E -- No --> G[Take logs or ln of both sides]\n    D -- No --> H{Does the equation contain logs?}\n    H -- Yes --> I[Write restrictions, combine logs, solve, check]\n    H -- No --> J{Is it a growth or decay model?}\n    J -- Yes --> K[Identify A, k, t and interpret signs and units]\n    J -- No --> L[Use standard algebra or graph interpretation]\n    A --> M{Is it an inequality?}\n    M -- Yes --> N[Remember: if 0<a<1, taking log base a reverses inequality]";

export const AS1ExponentialsLogarithmsLessonMMD004: React.FC = () => (
  <DiagramPanel title={"Method decision tree for exponential and logarithmic questions"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto py-4">
      <MermaidDiagram chart={chart} />
    </div>
  </DiagramPanel>
);
