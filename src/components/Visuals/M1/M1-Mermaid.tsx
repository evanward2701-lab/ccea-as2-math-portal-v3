import React from 'react';
import { MermaidDiagram as Mermaid } from '../../MermaidDiagram';
import { MathText } from '../../MathText';
import { DiagramPanel } from '../../DiagramPanel';

export const FMaBridge: React.FC = () => {
  const chartConfig = `
    graph TD
    F["Forces Field<br/>(Vector Sum: &Sigma;F)"] --> B["Newtonian Bridge<br/>F = ma"]
    M["Kinematics Suite<br/>(s, u, v, a, t)"] --> B
    B --> C["Resultant System Acceleration<br/>(Common Variant Link)"]
    
    style F fill:#0f172a,stroke:#38bdf8,stroke-width:2px,color:#f8fafc
    style M fill:#0f172a,stroke:#f59e0b,stroke-width:2px,color:#f8fafc
    style B fill:#064e3b,stroke:#34d399,stroke-width:3px,color:#f8fafc
    style C fill:#4c0519,stroke:#fb7185,stroke-width:2px,color:#f8fafc
  `;

  return (
    <DiagramPanel
      title="Fig 1. The F=ma Bridge"
      analysis={
        <div className="text-center">
          <p className="font-serif text-slate-300 text-sm">Newton’s Second Law</p>
          <div className="my-2 text-lg">
            <MathText content="F=ma" />
          </div>
          <p className="text-xs text-slate-400 italic max-w-md mx-auto">
            This law links the resultant force acting on an object to its resultant acceleration.
          </p>
        </div>
      }
    >
      <Mermaid chart={chartConfig} />
    </DiagramPanel>
  );
};

// ==========================================
// Fig. SI Unit Derivation Tree
// ==========================================
export const SIUnitDerivationTree: React.FC = () => {
  const chartConfig = `
    graph TD
      subgraph Base SI Units
          L[("Length (m)")]
          M[("Mass (kg)")]
          T[("Time (s)")]
      end

      subgraph Derived Units
          V["Velocity<br/>m s⁻¹"]
          A["Acceleration<br/>m s⁻²"]
          F["<div class='font-bold text-lg'>Force (Newton)</div><br/>N = kg m s⁻²"]
          W["Weight<br/>W = mg"]
      end

      L -- m --> V
      T -- s --> V
      V -- "m s⁻¹" --> A
      T -- s --> A
      M -- kg --> F
      A -- "m s⁻²" --> F
      M -- kg --> W
      
      style L fill:#0f172a,stroke:#38bdf8,stroke-width:2px,color:#f8fafc
      style M fill:#0f172a,stroke:#38bdf8,stroke-width:2px,color:#f8fafc
      style T fill:#0f172a,stroke:#38bdf8,stroke-width:2px,color:#f8fafc
      
      style V fill:#0f172a,stroke:#f59e0b,stroke-width:2px,color:#f8fafc
      style A fill:#0f172a,stroke:#f59e0b,stroke-width:2px,color:#f8fafc
      style W fill:#0f172a,stroke:#f59e0b,stroke-width:2px,color:#f8fafc

      style F fill:#064e3b,stroke:#34d399,stroke-width:3px,color:#f8fafc
  `;

  return (
    <DiagramPanel title="Fig. SI Unit Derivation Tree" analysis={<p className="text-sm text-slate-400 italic text-center">Base SI units for length, mass, and time combine to form the derived units used in mechanics.</p>}>
      <Mermaid chart={chartConfig} />
    </DiagramPanel>
  );
};