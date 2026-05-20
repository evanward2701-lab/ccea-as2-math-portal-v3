import React from 'react';
import { MermaidDiagram } from '../../MermaidDiagram';

export const M2KinematicsMermaid: React.FC = () => {
  const configString = `
    %%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#0f172a', 'primaryBorderColor': '#334155', 'primaryTextColor': '#f8fafc', 'lineColor': '#475569', 'fontFamily': 'ui-sans-serif, system-ui, sans-serif'}}}%%
    graph TD
      classDef default fill:#090d16,stroke:#1e293b,stroke-width:1px,color:#94a3b8;
      classDef accel fill:#0f172a,stroke:#475569,stroke-width:2px,color:#e2e8f0;
      classDef uniform fill:#064e3b,stroke:#10b981,stroke-width:2px,color:#a7f3d0;
      classDef variable fill:#4c0519,stroke:#f43f5e,stroke-width:2px,color:#fecdd3;
      classDef vec1d fill:#0f172a,stroke:#3b82f6,stroke-width:1px,color:#93c5fd;
      classDef vec2d fill:#1e1b4b,stroke:#6366f1,stroke-width:2px,color:#c7d2fe;
      classDef stopRule fill:#451a03,stroke:#f59e0b,stroke-width:2px,color:#fef3c7;
      classDef critical fill:#172554,stroke:#3b82f6,stroke-width:2px,color:#dbeafe;

      START[Analyze Kinematics Problem Statement]:::default --> ACCEL{Is Acceleration Constant?}:::accel
      
      ACCEL -- YES --> UNIFORM[Apply SUVAT Equations]:::uniform
      ACCEL -- NO --> VARIABLE[Variable Acceleration: Requires Calculus]:::variable
      
      VARIABLE --> EXCLUDE[⚠️ STOP: Excluded from CCEA AS2 Pack - A2 Topic Only]:::stopRule

      UNIFORM --> DIMENSION{Is Motion 1D or 2D Vector?}:::accel
      
      DIMENSION -- 1D Straight Line --> VEC1D[Select scalar equation e.g., v² = u² + 2as]:::vec1d
      DIMENSION -- 2D Vectors i, j --> VEC2D[Process component-by-component using vector formulas]:::vec2d
      
      VEC2D --> VECTOR_RULE[⚠️ CRITICAL EXAM STEP: Compute Vector Magnitude for Distance Tasks]:::critical
  `;

  return (
    <div className="w-full bg-slate-950 p-4 rounded-xl border border-slate-800 shadow-inner hover:border-slate-700 transition-colors">
      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
        Interactive Logic Route: CCEA Kinematics Modeling Decisions
      </h4>
      <div className="overflow-x-auto">
        <MermaidDiagram chart={configString} />
      </div>
    </div>
  );
};