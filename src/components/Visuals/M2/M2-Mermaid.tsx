import React from 'react';
import { MermaidDiagram } from '../../MermaidDiagram'; // Path adjusted to target repository footprint

export const M2KinematicsMermaid: React.FC = () => {
  const configString = `
    graph TD
      style START fill:#020617,stroke:#334155,stroke-width:2px,color:#f8fafc
      style ACCEL fill:#0f172a,stroke:#475569,stroke-width:2px,color:#e2e8f0
      style UNIFORM fill:#064e3b,stroke:#10b981,stroke-width:2px,color:#a7f3d0
      style VARIABLE fill:#4c0519,stroke:#f43f5e,stroke-width:2px,color:#fecdd3
      style VEC1D fill:#0f172a,stroke:#3b82f6,stroke-width:1px,color:#93c5fd
      style VEC2D fill:#1e1b4b,stroke:#6366f1,stroke-width:2px,color:#c7d2fe

      START[Analyze Kinematics Problem Statement] --> ACCEL{Is Acceleration Constant?}
      
      ACCEL -- YES --> UNIFORM[Apply SUVAT Equations]
      ACCEL -- NO --> VARIABLE[Variable Acceleration: Requires Calculus]
      
      VARIABLE --> EXCLUDE[⚠️ STOP: Excluded from CCEA AS2 Pack - A2 Topic Only]
      style EXCLUDE fill:#451a03,stroke:#f59e0b,stroke-width:2px,color:#fef3c7

      UNIFORM --> DIMENSION{Is Motion 1D or 2D Vector?}
      
      DIMENSION -- 1D Straight Line --> VEC1D[Select scalar equation e.g., v² = u² + 2as]
      DIMENSION -- 2D Vectors i, j --> VEC2D[Process component-by-component using vector formulas]
      
      VEC2D --> VECTOR_RULE[⚠️ CRITICAL EXAM STEP: Compute Vector Magnitude for Distance Tasks]
      style VECTOR_RULE fill:#172554,stroke:#3b82f6,stroke-width:2px,color:#dbeafe
  `;

  return (
    <div className="w-full bg-slate-950 p-4 rounded-xl border border-slate-800 shadow-inner">
      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
        Interactive Logic Route: CCEA Kinematics Modeling Decisions
      </h4>
      <MermaidDiagram chart={configString} />
    </div>
  );
};