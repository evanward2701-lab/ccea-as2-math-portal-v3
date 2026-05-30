import React from 'react';
import { MermaidDiagram } from '@/core/diagram-engine/MermaidDiagram';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

export const M2KinematicsMermaid: React.FC = () => {
  const chart = `
    graph TD
      A[Particle Kinematics] --> B[1D Motion]
      A --> C[2D Vector Motion]
      
      B --> B1[Constant Velocity]
      B --> B2[Constant Acceleration]
      
      B1 --> B1a[s = vt]
      B2 --> B2a[SUVAT Equations]
      
      C --> C1[Horizontal Component]
      C --> C2[Vertical Component]
      
      C1 --> C1a[s_x, u_x, v_x, a_x]
      C2 --> C2b[s_y, u_y, v_y, a_y]
      
      style A fill:#141417,stroke:#3b82f6,stroke-width:2px,color:#fff
      style B2a fill:#064e3b,stroke:#10b981,stroke-width:2px,color:#fff
  `;

  return (
    <DiagramPanel
      title="Kinematics Conceptual Map"
      analysis={
        <p className="text-sm text-muted-foreground italic text-center">
          In 2D motion, we treat horizontal and vertical components as independent 1D problems.
        </p>
      }
    >
      <MermaidDiagram chart={chart} />
    </DiagramPanel>
  );
};
