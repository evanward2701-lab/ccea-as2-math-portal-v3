import React from 'react';
import { MermaidDiagram as Mermaid } from "@/components/MermaidDiagram";

// Diagram 1: Data Type Classification Tree
export const DataTypeTree: React.FC = () => {
  // CRITICAL: Text string must sit flush against the left boundary.
  const chart = `graph TD
Data[Data] --> Qual["Qualitative<br/>(Categories)"]
Data --> Quant["Quantitative<br/>(Numbers)"]

Qual -.-> QualEx[e.g., Hair colour]

Quant --> Disc["Discrete<br/>(Counted)"]
Quant --> Cont["Continuous<br/>(Measured)"]

Disc -.-> DiscEx[e.g., Shoe size]
Cont -.-> ContEx[e.g., Height]

style Data fill:#1A1A1A,color:#FFFFFF,stroke:#1A1A1A,stroke-width:2px,font-weight:bold
style Qual fill:#FAF9F6,stroke:#1A1A1A,stroke-width:2px,color:#1A1A1A
style Quant fill:#FAF9F6,stroke:#1A1A1A,stroke-width:2px,color:#1A1A1A
style Disc fill:#FFFFFF,stroke:#1A1A1A,stroke-width:2px,color:#1A1A1A
style Cont fill:#FFFFFF,stroke:#1A1A1A,stroke-width:2px,color:#1A1A1A

style QualEx fill:none,stroke:none,color:#1A1A1A,font-style:italic
style DiscEx fill:none,stroke:none,color:#1A1A1A,font-style:italic
style ContEx fill:none,stroke:none,color:#1A1A1A,font-style:italic

linkStyle 0,1,3,4 stroke:#1A1A1A,stroke-width:2px
linkStyle 2,5,6 stroke:#1A1A1A,stroke-width:1px,stroke-dasharray: 3 3`;

  return (
    <div className="w-full flex flex-col items-center py-8 mb-12 border border-[#1A1A1A] bg-white relative shadow-[8px_8px_0px_#1A1A1A]">
      <div className="absolute top-0 right-0 bg-[#1A1A1A] text-white px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
        Fig 1. Data Classification
      </div>
      
      <div className="w-full px-4 my-6 flex justify-center overflow-x-auto">
        <Mermaid chart={chart} />
      </div>
      
      <p className="text-[11px] font-sans text-[#1A1A1A]/70 text-center mt-2 px-6 italic max-w-prose">
        Always check if numerical data is measured or counted before classifying it as continuous or discrete.
        <br />
        <strong className="text-red-600 not-italic uppercase text-[10px] block mt-1">Exam Misconception:</strong> Stop confusing discrete numerical categories (like shoe size) with qualitative data. If it represents a quantity, it is quantitative.
      </p>
    </div>
  );
};