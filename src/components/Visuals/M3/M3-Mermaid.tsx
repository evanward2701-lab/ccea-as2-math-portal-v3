import React from 'react';
import { MermaidDiagram } from '../../MermaidDiagram';

export const M3_CONNECTED_PARTICLES_MERMAID = `%%{init: {
  'theme': 'base',
  'themeVariables': {
    'background': '#020617',
    'primaryColor': '#0f172a',
    'primaryTextColor': '#f8fafc',
    'primaryBorderColor': '#334155',
    'lineColor': '#64748b',
    'secondaryColor': '#1e293b',
    'tertiaryColor': '#020617'
  }
}}%%
graph TD
    A[Identify Multi-Body Parameters] --> B{Analyze Surface Type}
    B -- Smooth Surface --> C[Set Friction F = 0]
    B -- Rough Surface --> D{Determine Impending Motion Direction}
    
    D -- Forward Motion --> E[Apply Friction: F = mu * R Opposing Motion]
    D -- Limiting Equilibrium --> E
    
    C --> F[Isolate Body 1: Build F=ma Vector System]
    E --> F
    
    F --> G[Isolate Body 2: Build Opposing F=ma System]
    G --> H[Generate Coupled Simultaneous Equations]
    
    H --> I[Eliminate Tension T via Addition]
    I --> J[Solve for Uniform System Acceleration a]
    J --> K[Substitute a back to determine Tension T]

    classDef default fill:#0f172a,stroke:#334155,stroke-width:1px,color:#cbd5e1;
    classDef accent fill:#1e293b,stroke:#34d399,stroke-width:2px,color:#34d399;
    classDef warning fill:#1e293b,stroke:#f43f5e,stroke-width:1px,color:#f43f5e;
    
    class B,H accent;
    class D,E warning;`;

export const M3ConnectedParticlesMermaid: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center py-10 mb-12 border border-slate-800 bg-slate-950 relative shadow-[8px_8px_0px_#0f172a] rounded-xl overflow-hidden">
      <div className="absolute top-0 right-0 bg-slate-900 text-slate-400 border-l border-b border-slate-800 px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
        Fig 6. M3 Connected System Workflow
      </div>
      <div className="w-full mt-8">
        <MermaidDiagram chart={M3_CONNECTED_PARTICLES_MERMAID} />
      </div>
    </div>
  );
};