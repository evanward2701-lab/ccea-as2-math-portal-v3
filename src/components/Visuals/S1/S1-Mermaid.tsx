import React from 'react';
import { MermaidDiagram } from '../../MermaidDiagram';

export const S1_DATA_TYPE_MERMAID = `%%{init: {
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
    A[Data Stream] --> B{Numerical Value?}
    B -- No --> C[Qualitative / Categorical]
    B -- Yes --> D[Quantitative]
    
    C -.-> E[e.g., Hair Colour, Car Brand]
    
    D --> F{Counted or Measured?}
    F -- Counted Exact Values --> G[Discrete]
    F -- Measured on a Scale --> H[Continuous]
    
    G -.-> I[e.g., Number of Cars, Shoe Size]
    H -.-> J[e.g., Height, Weight, Time]

    classDef default fill:#0f172a,stroke:#334155,stroke-width:1px,color:#cbd5e1;
    classDef accent fill:#1e293b,stroke:#38bdf8,stroke-width:2px,color:#38bdf8;
    classDef warning fill:#1e293b,stroke:#f43f5e,stroke-width:1px,color:#f43f5e;
    classDef safe fill:#1e293b,stroke:#34d399,stroke-width:2px,color:#34d399;
    
    class A,D accent;
    class G,H safe;
    class I warning;`;

export const DataTypeTree: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center py-8 mb-12 border border-slate-800 bg-slate-950 relative shadow-[8px_8px_0px_#0f172a] rounded-xl overflow-hidden">
      <div className="absolute top-0 right-0 bg-slate-900 text-slate-400 border-l border-b border-slate-800 px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
        Fig 1. Data Classification Schema
      </div>
      
      <div className="w-full px-6 my-6 flex justify-center">
        <MermaidDiagram chart={S1_DATA_TYPE_MERMAID} />
      </div>
      
      <p className="text-[11px] font-sans text-slate-400 text-center px-6 italic">
        Always trace the data back to its origin: was it counted (Discrete) or measured using a continuous instrument (Continuous)?
        <br/><strong className="text-rose-400 not-italic uppercase text-[10px]">CCEA Exam Pitfall:</strong> "Age" is continuous (time flows continuously), even if it is stated as a discrete integer. "Shoe size" is discrete because intermediate values like 7.34 do not exist.
      </p>
    </div>
  );
};