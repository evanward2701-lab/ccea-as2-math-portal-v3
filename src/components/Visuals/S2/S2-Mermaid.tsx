import React from 'react';
import { MermaidDiagram as Mermaid } from "@/components/MermaidDiagram";

export const StdDevDecisionTree: React.FC = () => {
  const chart = `
    graph TD
    Q{"Is the data the whole population<br/>or a sample used to estimate?"}
    Q -->|Whole Population / Standalone Data| N["σₙ<br/>(Divisor: n)"]
    Q -->|Sample estimating a Population| N1["σₙ₋₁<br/>(Divisor: n-1)"]

    style Q fill:#0F172A,color:#F8FAFC,stroke:#334155,stroke-width:2px,font-weight:bold
    style N fill:#022C22,color:#34D399,stroke:#059669,stroke-width:2px
    style N1 fill:#1E1B4B,color:#818CF8,stroke:#4F46E5,stroke-width:2px,stroke-dasharray: 4 4
  `;

  return (
    <div className="w-full flex flex-col items-center py-8 mb-12 border border-slate-800 bg-slate-900 relative rounded-xl shadow-[2px_4px_16px_rgba(0,0,0,0.4)]">
      <div className="absolute top-0 right-0 bg-slate-800 text-slate-400 border-b border-l border-slate-700 px-3 py-1 text-[10px] uppercase tracking-widest font-mono font-bold rounded-tr-xl rounded-bl-md">
        Fig 4. Standard Deviation Selector
      </div>
      
      <div className="w-full px-4 my-6 flex justify-center dark-mermaid-override">
        <Mermaid chart={chart} />
      </div>
      
      <div className="text-[12px] font-sans text-slate-400 text-center mt-2 px-6 max-w-md leading-relaxed">
        Always check the wording of the question before choosing your standard deviation formula.
        <div className="mt-3 text-rose-400 text-[11px] font-mono uppercase tracking-wide border border-rose-950 bg-rose-950/30 px-3 py-1.5 rounded-md">
          <span className="font-bold">🚨 Exam Misconception:</span> Calculators output both versions ($x\sigma_n$ and $x\sigma_{n-1}$). Using the wrong one will lose you method and accuracy marks instantly.
        </div>
      </div>
    </div>
  );
};