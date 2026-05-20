import React from 'react';
import { MermaidDiagram as Mermaid } from "@/components/MermaidDiagram";
import { MathText } from "@/components/MathText";

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
    <div className="flex flex-col items-center p-6 border border-slate-800 bg-slate-900 rounded-xl shadow-2xl my-8">
      <div className="w-full mb-4">
        <Mermaid chart={chartConfig} />
      </div>
      <p className="text-[11px] font-sans text-slate-400 text-center italic">
        Newton's Second Law (<MathText content="F=ma" />) acts as the operational interface linking dynamic vector systems directly to directional kinematics.
      </p>
    </div>
  );
};