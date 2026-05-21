import React from 'react';
import { MermaidDiagram } from '../../MermaidDiagram';
import { MathText } from '../../MathText';

const S4_BINOMIAL_TREE_MERMAID = `%%{init: {
  'theme': 'base',
  'flowchart': {
    'nodeSpacing': 50,
    'rankSpacing': 60
  },
  'themeVariables': {
    'background': '#020617',
    'fontSize': '14px',
    'primaryColor': '#0f172a',
    'primaryTextColor': '#f8fafc',
    'primaryBorderColor': '#334155',
    'lineColor': '#64748b',
    'secondaryColor': '#1e293b',
    'tertiaryColor': '#020617'
  }
}}%%
graph LR
    subgraph "n=3 Trials"
        Start(( )) -->|p| S1(S)
        Start -->|1-p| F1(F)

        S1 -->|p| S2(S)
        S1 -->|1-p| F2(F)
        
        F1 -->|p| S3(S)
        F1 -->|1-p| F3(F)

        S2 -->|p| SSS(SSS)
        S2 -->|1-p| SSF(SSF)

        F2 -->|p| SFS(SFS)
        F2 -->|1-p| SFF(SFF)

        S3 -->|p| FSS(FSS)
        S3 -->|1-p| FSF(FSF)

        F3 -->|p| FFS(FFS)
        F3 -->|1-p| FFF(FFF)
    end

    classDef highlight fill:#0f172a,stroke:#10b981,stroke-width:2px,color:#34d399;
    class SSF,SFS,FSS highlight;
`;

export const BinomialTree: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center py-8 mb-12 border border-slate-800 bg-slate-950 relative shadow-[8px_8px_0px_#0f172a] rounded-xl overflow-hidden">
      <div className="absolute top-0 right-0 bg-slate-900 border-b border-l border-slate-800 text-slate-400 px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
        Fig 1. Binomial Tree
      </div>
      
      <div className="w-full px-4 my-6 flex justify-center overflow-x-auto">
        <MermaidDiagram chart={S4_BINOMIAL_TREE_MERMAID} />
      </div>
      
      <div className="w-full px-6 mt-4 space-y-4 max-w-lg">
        <p className="text-sm text-slate-400 italic text-center">
          The binomial coefficient counts the number of successful branch pathways.
        </p>
        <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg text-center">
            <p className="text-sm text-slate-300 leading-relaxed mb-2">
                For 2 successes in 3 trials, there are 3 paths (SSF, SFS, FSS). The total probability is:
            </p>
            <div className="font-mono text-emerald-400 text-lg">
                <MathText content="C(3, 2) p^2(1-p)^1" />
            </div>
        </div>
        <div className="p-3 bg-rose-950/30 border border-rose-900/40 rounded-lg text-sm text-rose-300">
          <strong className="block text-rose-400 not-italic uppercase text-[10px] mb-1">CCEA Exam Pitfall:</strong>
          <p className="leading-relaxed">
            The binomial model only works if the probability of success, <MathText content="p" className="inline [&_p]:inline [&_p]:m-0" />, is constant for each trial. This requires independence or sampling with replacement.
          </p>
        </div>
      </div>
    </div>
  );
};