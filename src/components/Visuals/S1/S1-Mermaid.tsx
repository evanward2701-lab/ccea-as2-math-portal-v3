import React from 'react';
import { MermaidDiagram as Mermaid } from "@/components/MermaidDiagram";

export const DataTypeTree: React.FC = () => {
  const chart = `
    graph TD
    Data[Data Stream] --> Qual["Qualitative<br/>(Categorical Attributes)"]
    Data --> Quant["Quantitative<br/>(Numerical Quantities)"]
    
    Qual -.-> QualEx[e.g., Hair Colour / Car Brand]
    
    Quant --> Disc["Discrete<br/>(Counted / Specific Values)"]
    Quant --> Cont["Continuous<br/>(Measured on continuous scale)"]
    
    Disc -.-> DiscEx["e.g., Shoe Size / Number of Cars<br/><span style='color:#f43f5e;font-size:10px;font-weight:bold;'>⚠️ CCEA TRAP: Counted values are NOT qualitative!</span>"]
    Cont -.-> ContEx[e.g., Running Time / Height]

    %% Dark Canvas Style Mapping
    style Data fill:#0f172a,color:#38bdf8,stroke:#0284c7,stroke-width:2px,font-weight:bold
    style Qual fill:#1e293b,stroke:#475569,stroke-width:2px,color:#e2e8f0
    style Quant fill:#1e293b,stroke:#475569,stroke-width:2px,color:#e2e8f0
    style Disc fill:#0f172a,stroke:#34d399,stroke-width:2px,color:#f8fafc
    style Cont fill:#0f172a,stroke:#fbbf24,stroke-width:2px,color:#f8fafc
    
    style QualEx fill:#111827,stroke:#374151,color:#9ca3af,font-style:italic
    style DiscEx fill:#111827,stroke:#f43f5e,color:#e2e8f0,font-style:italic
    style ContEx fill:#111827,stroke:#374151,color:#9ca3af,font-style:italic

    classDef default color:#e2e8f0,font-family:sans-serif;
  `;

  return (
    <div className="w-full flex flex-col items-center py-8 mb-12 border border-slate-800 bg-slate-900 relative shadow-[8px_8px_0px_#020617] rounded-lg">
      <div className="absolute top-0 right-0 bg-sky-600 text-white px-3 py-1 text-[10px] uppercase tracking-widest font-bold rounded-tr-lg">
        Fig 1. Data Classification Schema
      </div>
      
      <div className="w-full px-4 my-6 flex justify-center dark-mermaid-theme">
        <Mermaid chart={chart} />
      </div>
      
      <p className="text-[12px] font-sans text-slate-400 text-center mt-2 px-6 italic leading-relaxed">
        Always check if numerical data is measured or counted before classifying it as continuous or discrete.
        <br/>
        <strong className="text-rose-400 not-italic uppercase text-[10px] font-bold tracking-wider">
          Exam Misconception:
        </strong> Stop confusing discrete numerical categories (like shoe size) with qualitative data. If it represents a numeric quantity, it is quantitative.
      </p>
    </div>
  );
};