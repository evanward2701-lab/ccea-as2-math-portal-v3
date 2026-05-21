import React from 'react';
import { MermaidDiagram } from '../../MermaidDiagram';
import { MathText } from '../../MathText';

export const S2_STD_DEV_MERMAID = `%%{init: {
  'theme': 'base',
  'themeVariables': {
    'background': '#020617',
    'fontSize': '16px',
    'primaryColor': '#0f172a',
    'primaryTextColor': '#f8fafc',
    'primaryBorderColor': '#334155',
    'lineColor': '#64748b',
    'secondaryColor': '#1e293b',
    'tertiaryColor': '#020617'
  }
}}%%
graph TD
    Q{"<div style='padding: 10px; font-size: 15px;'>Is the data the <b>whole population</b><br/>or a <b>sample</b> used to estimate?</div>"}
    Q -- "<b>Whole Population</b><br/>Standalone Data" --> N["<div style='padding: 10px;'><div style='font-weight: bold; font-size: 18px;'>&sigma;<sub>n</sub></div><div style='font-size: 14px; opacity: 0.8;'>Divisor: n</div></div>"]
    Q -- "<b>Sample</b> estimating<br/>a Population" --> N1["<div style='padding: 10px;'><div style='font-weight: bold; font-size: 18px;'>&sigma;<sub>n-1</sub></div><div style='font-size: 14px; opacity: 0.8;'>Divisor: n - 1</div></div>"]

    classDef default fill:#0f172a,stroke:#334155,stroke-width:2px,color:#cbd5e1;
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
      
      <div className="w-full px-4 my-8 flex justify-center">
        <MermaidDiagram chart={S2_STD_DEV_MERMAID} />
      </div>
      
      <div className="w-full px-6 mt-2 space-y-4 max-w-2xl mx-auto">
        <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
          <p className="text-sm text-slate-300 leading-relaxed text-center">
            Always check the wording of the question before choosing your standard deviation formula.
          </p>
        </div>

        <div className="p-4 bg-rose-950/30 border border-rose-900/40 rounded-lg">
          <h4 className="font-bold text-rose-400 mb-2 text-sm uppercase tracking-wider text-center">CCEA Exam Pitfall</h4>
          <p className="text-sm text-rose-300 leading-relaxed text-center mb-4">
            Calculators often output both standard deviation versions.
          </p>
          
          <div className="grid grid-cols-2 gap-3">
            {/* Population Card */}
            <div className="p-3 bg-slate-950/40 border border-slate-800/60 rounded-lg text-center">
              <h5 className="font-bold text-emerald-400 mb-2 text-xs uppercase tracking-wider">Population</h5>
              <div className="text-2xl text-emerald-300 mb-2">
                <MathText content="\sigma_n" />
              </div>
              <p className="text-xs text-slate-400 leading-tight">
                Use when the data is the whole population.
              </p>
            </div>
            
            {/* Sample Card */}
            <div className="p-3 bg-slate-950/40 border border-slate-800/60 rounded-lg text-center">
              <h5 className="font-bold text-indigo-400 mb-2 text-xs uppercase tracking-wider">Sample</h5>
              <div className="text-2xl text-indigo-300 mb-2">
                <MathText content="\sigma_{n-1}" />
              </div>
              <p className="text-xs text-slate-400 leading-tight">
                Use when estimating the population spread from a sample.
              </p>
            </div>
          </div>

          <p className="text-xs text-rose-400/80 italic mt-4 text-center">
            Using the wrong one will lose method and accuracy marks.
          </p>
        </div>
      </div>
    </div>
  );
};