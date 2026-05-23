import React from 'react';
import { MermaidDiagram } from '../../../MermaidDiagram';
import { DiagramPanel } from '../../../DiagramPanel';

export const StdDevDecisionTree: React.FC = () => {
  const chart = `
    graph TD
      A[Data Presentation] --> B[Frequency Table]
      A --> C[Grouped Data]
      
      B --> B1[Calculate Midpoints x]
      B --> B2[Sum of fx and fx^2]
      
      C --> C1[Use Class Midpoints]
      C --> C2[Sum of fx and fx^2]
      
      B2 --> D[Variance formula]
      C2 --> D
      
      D --> E[Standard Deviation]
      
      style D fill:#1e3a8a,stroke:#3b82f6,stroke-width:2px,color:#fff
      style E fill:#064e3b,stroke:#10b981,stroke-width:2px,color:#fff
  `;

  return (
    <DiagramPanel
      title="Standard Deviation Workflow"
      analysis={
        <p className="text-sm text-slate-400 italic text-center">
          The process for calculating standard deviation is identical for discrete and grouped data, provided midpoints are used for groups.
        </p>
      }
    >
      <MermaidDiagram chart={chart} />
    </DiagramPanel>
  );
};
