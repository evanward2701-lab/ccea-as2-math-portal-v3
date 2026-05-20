import React from 'react';
import { MermaidDiagram } from '../../MermaidDiagram';
import { MathText } from '../../MathText';

export const S4_BINOMIAL_TREE_MERMAID = `%%{init: {
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
graph LR
    Start((Start)) -->|p| S1((S))
    Start -->|1-p| F1((F))
    
    S1 -->|p| S2((S))
    S1 -->|1-p| F2((F))
    
    F1 -->|p| S3((S))
    F1 -->|1-p| F3((F))
    
    S2 -->|p| SSS((S))
    S2 -->|1-p| SSF((F))
    
    F2 -->|p| SFS((S))
    F2 -->|1-p| SFF((F))
    
    S3 -->|p| FSS((S))
    S3 -->|1-p| FSF((F))
    
    F3 -->|p| FFS((S))
    F3 -->|1-p| FFF((F))

    SSF -.-> Result["3C2 × p²(1-p)¹"]
    SFS -.-> Result
    FSS -.-> Result

    classDef default fill:#0f172a,stroke:#334155,stroke-width:1px,color:#cbd5e1;
    classDef startNode fill:#020617,stroke:#64748b,stroke-width:2px,color:#f8fafc;
    classDef success fill:#022c22,stroke:#10b981,stroke-width:2px,color:#34d399;
    classDef fail fill:#451a03,stroke:#f59e0b,stroke-width:2px,color:#fbbf24;
    classDef result fill:#0f172a,stroke:#38bdf8,stroke-width:2px,color:#38bdf8,stroke-dasharray: 4 4;

    class Start startNode;
    class S1,S2,S3,SSS,SSF,SFS,FSS success;
    class F1,F2,F3,FFF,FFS,FSF,SFF fail;
    class Result result;
`;

export const BinomialTree: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center py-8 mb-12 border border-slate-800 bg-slate-950 relative shadow-[8px_8px_0px_#0f172a] rounded-xl overflow-hidden">
      <div className="absolute top-0 right-0 bg-slate-900 border-b border-l border-slate-800 text-slate-400 px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
        Fig 1. Binomial Tree (n=3)
      </div>
      
      <div className="w-full px-4 my-6 flex justify-center overflow-x-auto">
        <MermaidDiagram chart={S4_BINOMIAL_TREE_MERMAID} />
      </div>
      
      <p className="text-[11px] font-sans text-slate-400 text-center mt-2 px-6 italic max-w-prose">
        A binomial distribution models multiple independent binary trials. Notice how different branches result in the exact same combination of successes.
        <br/><strong className="text-rose-400 not-italic uppercase text-[10px]">CCEA Exam Pitfall:</strong> Never manually calculate tree branches for <MathText content="n > 3" className="inline" />. Use the binomial formula to save critical time in the exam.
      </p>
    </div>
  );
};