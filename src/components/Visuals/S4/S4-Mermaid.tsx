import React from 'react';
import Mermaid from 'react-mermaid2';

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

    style SSF fill:#1A1A1A,color:#FFF,stroke:#1A1A1A,stroke-width:2px
    style SFS fill:#1A1A1A,color:#FFF,stroke:#1A1A1A,stroke-width:2px
    style FSS fill:#1A1A1A,color:#FFF,stroke:#1A1A1A,stroke-width:2px
    style Result fill:#FAF9F6,stroke:#1A1A1A,stroke-width:2px,font-weight:bold
  `;

  return (
    <div className="w-full flex flex-col items-center py-8 mb-12 border border-[#1A1A1A] bg-white relative shadow-[8px_8px_0px_#1A1A1A]">
      <div className="absolute top-0 right-0 bg-[#1A1A1A] text-white px-3 py-1 text-[10px] uppercase tracking-widest font-bold">Fig 1. Binomial Tree (n=3)</div>
      
      <div className="w-full px-4 my-6 flex justify-center overflow-x-auto">
        <Mermaid chart={chart} />
      </div>
      
      <p className="text-[11px] font-sans text-[#1A1A1A]/70 text-center mt-2 px-6 italic">
        The binomial coefficient ⁿCₓ physically counts the number of successful branch pathways on a tree diagram. 
        <br/><strong className="text-red-600 not-italic uppercase text-[10px]">Exam Tip:</strong> Use the formula so you don't have to draw massive trees for large values of n!
      </p>
    </div>
  );
};