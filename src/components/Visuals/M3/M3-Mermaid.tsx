import React from 'react';
import { MermaidDiagram } from '../../MermaidDiagram';

// Export the raw configuration configuration string if needed elsewhere
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
    A[Identify Multi-Body System Parameters] --> B{Analyze Surface Type}
    B -- Smooth Surface Structure --> C[Set Friction F = 0]
    B -- Rough Surface Structure --> D[Apply Friction Limit Model: F <= mu * R]
    
    C --> E[Isolate Body 1: Build F=ma Vector System]
    D --> E
    
    E --> F[Isolate Body 2: Build Opposing F=ma Vector System]
    F --> G[Generate Coupled Simultaneous Equations]
    
    G --> H[Eliminate Tension T via Vector Addition]
    H --> I[Solve for Uniform System Acceleration a]
    I --> J[Substitute a to determine Tension T]

    classDef default fill:#0f172a,stroke:#334155,stroke-width:1px,color:#cbd5e1;
    classDef accent fill:#1e293b,stroke:#34d399,stroke-width:2px,color:#34d399;
    classDef warning fill:#1e293b,stroke:#f43f5e,stroke-width:1px,color:#f43f5e;
    
    class B,G accent;
    class D warning;`;

// Export the drop-in ready React Visual Component
export const M3ConnectedParticlesMermaid: React.FC = () => {
  return (
    <div className="w-full bg-slate-950 p-6 rounded-xl border border-slate-900 shadow-xl">
      <div className="text-xs text-slate-500 font-mono mb-4 uppercase tracking-wider">
        M3 System Resolution Workflow
      </div>
      <MermaidDiagram chart={M3_CONNECTED_PARTICLES_MERMAID} />
    </div>
  );
};