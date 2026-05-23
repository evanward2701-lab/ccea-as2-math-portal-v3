import React from 'react';
import { MermaidDiagram } from '@/core/diagram-engine/MermaidDiagram';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

export const BinomialTree: React.FC = () => {
  const chart = `
    graph LR
      Start((Start)) -- p --> S[Success]
      Start -- 1-p --> F[Failure]
      
      S -- p --> SS[Success, Success]
      S -- 1-p --> SF[Success, Failure]
      
      F -- p --> FS[Failure, Success]
      F -- 1-p --> FF[Failure, Failure]
      
      style Start fill:#141417,stroke:#3b82f6,stroke-width:2px,color:#fff
      style S fill:#064e3b,stroke:#10b981,stroke-width:2px,color:#fff
      style F fill:#450a0a,stroke:#f43f5e,stroke-width:2px,color:#fff
  `;

  return (
    <DiagramPanel
      title="Binomial Logic Tree (n=2)"
      analysis={
        <p className="text-sm text-zinc-400 italic text-center">
          In a binomial model, each trial has the same probability 'p' of success, regardless of previous outcomes.
        </p>
      }
    >
      <MermaidDiagram chart={chart} />
    </DiagramPanel>
  );
};
