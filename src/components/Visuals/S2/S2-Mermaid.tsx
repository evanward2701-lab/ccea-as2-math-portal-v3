import React from 'react';
import { MermaidDiagram } from '../../MermaidDiagram';

export const S2_STD_DEV_MERMAID = `%%{init: {
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
    Q{"Is the data the whole population<br/>or a sample used to estimate?"}
    Q -->|Whole Population / Standalone Data| N["Population Std Dev: σ_n<br/>(Divisor: n)"]
    Q -->|Sample estimating a Population| N1["Sample Std Dev: σ_{n-1}<br/>(Divisor: n-1)"]

    classDef default fill:#0f172a,stroke:#334155,stroke-width:1px,color:#cbd5e1;
    classDef decision fill:#1e293b,stroke:#38bdf8,stroke-width:2px,color:#38bdf8;
    classDef pop fill:#022c22,stroke:#059669,stroke-width:2px,color:#34d399;
    classDef samp fill:#1e1b4b,stroke:#4f46e5,stroke-width:2px,color:#818cf8,stroke-dasharray: 4 4;
    
    class Q decision;
    class N pop;
    class N1 samp;`;

export const StdDevDecisionTree: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center py-8 mb-12 border border-slate-800 bg-slate-950 relative shadow-[8px_8px_0px_#0f172a] rounded-xl overflow-hidden">
      <div className="absolute top-0 right-0 bg-slate-900 text-slate-400 border-b border-l border-slate-800 px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
        Fig 4. Standard Deviation Selector
      </div>
      
      <div className="w-full px-4 my-6 flex justify-center">
        <MermaidDiagram chart={S2_STD_DEV_MERMAID} />
      </div>
      
      <p className="text-[11px] font-sans text-slate-400 text-center mt-2 px-6 italic">
        Always check the wording of the question before choosing your standard deviation formula.
        <br/><strong className="text-rose-400 not-italic uppercase text-[10px]">CCEA Exam Pitfall:</strong> Calculators output both versions ($S_x$ and $\sigma_x$). Using the wrong one will lose you method and accuracy marks instantly.
      </p>
    </div>
  );
};