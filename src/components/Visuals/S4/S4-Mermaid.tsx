import React from 'react';
import { MermaidDiagram as Mermaid } from "@/components/MermaidDiagram";

export const BinomialTree: React.FC = () => {
  const chart = `
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

    style Start fill:#1E293B,stroke:#475569,stroke-width:1px,color:#FFF
    style S1 fill:#022C22,stroke:#059669,stroke-width:1px,color:#34D399
    style F1 fill:#451A03,stroke:#D97706,stroke-width:1px,color:#FBBF24
    style S2 fill:#022C22,stroke:#059669,stroke-width:1px,color:#34D399
    style F2 fill:#451A03,stroke:#D97706,stroke-width:1px,color:#FBBF24
    style S3 fill:#022C22,stroke:#059669,stroke-width:1px,color:#34D399
    style F3 fill:#451A03,stroke:#D97706,stroke-width:1px,color:#FBBF24
    
    style SSS fill:#0F172A,stroke:#334155,stroke-width:1px,color:#94A3B8
    style SSF fill:#020617,stroke:#38BDF8,stroke-width:2px,color:#38BDF8
    style SFS fill:#020617,stroke:#38BDF8,stroke-width:2px,color:#38BDF8
    style SFF fill:#0F172A,stroke:#334155,stroke-width:1px,color:#94A3B8
    style FSS fill:#020617,stroke:#38BDF8,stroke-width:2px,color:#38BDF8
    style FSF fill:#0F172A,stroke:#334155,stroke-width:1px,color:#94A3B8
    style FFS fill:#0F172A,stroke:#334155,stroke-width:1px,color:#94A3B8
    style FFF fill:#0F172A,stroke:#334155,stroke-width:1px,color:#94A3B8
    
    style Result fill:#0F172A,stroke:#34D399,stroke-width:2px,color:#34D399,font-weight:bold
    
    classDef default fill:#0F172A,stroke:#334155,stroke-width:1px,color:#94A3B8;
  `;

  return (
    <div className="w-full flex flex-col items-center py-6 px-4 mb-8 border border-slate-800 bg-slate-900 rounded-xl relative shadow-2xl overflow-hidden">
      <div className="absolute top-0 right-0 bg-slate-800 border-l border-b border-slate-700 text-slate-400 px-3 py-1 text-[10px] uppercase tracking-widest font-mono font-bold">
        Fig 1. Binomial Tree (n=3)
      </div>
      
      <div className="w-full px-4 my-6 flex justify-center overflow-x-auto">
        <Mermaid chart={chart} />
      </div>
      
      <p className="text-[11px] font-sans text-slate-400 text-center px-4 italic leading-relaxed">
        The binomial coefficient <span className="text-emerald-400 font-mono font-semibold not-italic">ⁿCₓ</span> physically counts the number of successful branch pathways on a tree diagram. 
        <br />
        <span className="text-amber-400 font-mono font-bold uppercase tracking-wider text-[10px]">Exam Tip:</span> Use the formula directly so you do not have to draw extensive, non-scannable trees for large values of <span className="font-mono text-slate-200">n</span>!
      </p>
    </div>
  );
};