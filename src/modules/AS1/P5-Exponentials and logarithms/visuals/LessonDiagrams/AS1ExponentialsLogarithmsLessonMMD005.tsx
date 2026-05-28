import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { MermaidDiagram } from '@/core/diagram-engine/MermaidDiagram';

const chart = "flowchart TD\n    A[Read the context] --> B[Identify the initial value A]\n    B --> C[Decide whether k is positive or negative]\n    C --> D[Write the model y = A e^(kt)]\n    D --> E{Need a value at a given time?}\n    E -- Yes --> F[Substitute t and calculate y]\n    E -- No --> G{Need time for a given value?}\n    G -- Yes --> H[Substitute y, divide by A, take ln, solve for t]\n    G -- No --> I[Interpret the model]\n    F --> I\n    H --> I\n    I --> J[Check units, rounding and whether prediction is realistic]";

export const AS1ExponentialsLogarithmsLessonMMD005: React.FC = () => (
  <DiagramPanel title={"Exponential modelling workflow"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto py-4">
      <MermaidDiagram chart={chart} />
    </div>
  </DiagramPanel>
);
