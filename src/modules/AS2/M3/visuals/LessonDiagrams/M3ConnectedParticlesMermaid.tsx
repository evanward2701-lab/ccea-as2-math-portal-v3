import React from 'react';
import { MermaidDiagram } from '@/core/diagram-engine/MermaidDiagram';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

export const M3ConnectedParticlesMermaid: React.FC = () => {
  const chart = `
    graph TD
      A[Connected Particles] --> B[Single System]
      A --> C[Individual Particles]
      
      B --> B1[External Forces Only]
      B --> B2[Find Acceleration 'a']
      
      C --> C1[Isolate Mass A]
      C --> C2[Isolate Mass B]
      
      C1 --> C1a[Include Tension 'T']
      C2 --> C2a[Include Tension 'T']
      
      style B2 fill:#064e3b,stroke:#10b981,stroke-width:2px,color:#fff
      style C1a fill:#1e3a8a,stroke:#3b82f6,stroke-width:2px,color:#fff
  `;

  return (
    <DiagramPanel
      title="Connected Particles Logic"
      analysis={
        <p className="text-sm text-muted-foreground italic text-center">
          The internal tension cancels out when modelling the system as a whole.
        </p>
      }
    >
      <MermaidDiagram chart={chart} />
    </DiagramPanel>
  );
};
