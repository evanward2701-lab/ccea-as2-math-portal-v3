import React from 'react';
import { MermaidDiagram } from '@/core/diagram-engine/MermaidDiagram';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

export const DataTypeTree: React.FC = () => {
  const chart = `
    graph TD
      A[Data Type] --> B[Qualitative / Categorical]
      A --> C[Quantitative / Numerical]
      
      B --> B1[Describes attributes or groups]
      B --> B2[e.g., eye colour, brand]
      
      C --> C1[Discrete]
      C --> C2[Continuous]
      
      C1 --> C1a[Counted values]
      C1 --> C1b[e.g., number of pets]
      
      C2 --> C2a[Measured values]
      C2 --> C2b[e.g., mass, time]
      
      style B fill:#1e3a8a,stroke:#3b82f6,stroke-width:2px,color:#fff
      style C1 fill:#064e3b,stroke:#10b981,stroke-width:2px,color:#fff
      style C2 fill:#4c1d95,stroke:#a855f7,stroke-width:2px,color:#fff
  `;

  return (
    <DiagramPanel
      title="Data Taxonomy Overview"
      analysis={
        <p className="text-sm text-zinc-400 italic text-center">
          Understanding the data type is the first step in choosing the correct statistical analysis.
        </p>
      }
    >
      <MermaidDiagram chart={chart} />
    </DiagramPanel>
  );
};
