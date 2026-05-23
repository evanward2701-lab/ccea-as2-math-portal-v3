import React from 'react';
import { MermaidDiagram } from '@/core/diagram-engine/MermaidDiagram';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

export const ProbabilityTree: React.FC = () => {
  const chart = `
    graph LR
      Start((Start)) --> A[Event A]
      Start --> NotA[Event A']
      
      A --> AB[Event B]
      A --> ANotB[Event B']
      
      NotA --> NotAB[Event B]
      NotA --> NotANotB[Event B']
      
      style Start fill:#0f172a,stroke:#3b82f6,stroke-width:2px,color:#fff
  `;

  return (
    <DiagramPanel
      title="Probability Tree Logic"
      analysis={
        <p className="text-sm text-slate-400 italic text-center">
          Multiply along branches for 'AND', add final outcomes for 'OR'.
        </p>
      }
    >
      <MermaidDiagram chart={chart} />
    </DiagramPanel>
  );
};
