import React from 'react';
import { MermaidDiagram as Mermaid } from "@/components/MermaidDiagram";

export const BinomialTree: React.FC = () => {
  // CRITICAL: The string must begin perfectly flush-left to feed character 0 directly to the parser.
  const chart = `graph LR
  Start((Start))
  
  subgraph T1["Trial 1"]
    S1((S))
    F1((F))
  end
  
  subgraph T2["Trial 2"]
    S2((S))
    F2((F))
    S3((S))
    F3((F))
  end
  
  subgraph T3["Trial 3 / Outcomes"]
    SSS((S))
    SSF((F))
    SFS((S))
    SFF((F))
    FSS((S))
    FSF((F))
    FFS((S))
    FFF((F))
  end

  Start -->|p| S1
  Start -->|1-p| F1

  S1 -->|p| S2
  S1 -->|1-p| F2
  F1 -->|p| S3
  F1 -->|1-p| F3

  S2 -->|p| SSS
  S2 -->|1-p| SSF
  F2 -->|p| SFS
  F2 -->|1-p| SFF
  S3 -->|p| FSS
  S3 -->|1-p| FSF
  F3 -->|p| FFS
  F3 -->|1-p| FFF

  SSF -.-> Result["³C₂ × p²(1-p)¹"]
  SFS -.-> Result
  FSS -.-> Result

  style Start fill:#FAF9F6,stroke:#1A1A1A,stroke-width:2px,color:#1A1A1A
  
  style S1 fill:#FFFFFF,stroke:#1A1A1A,stroke-width:1px,color:#1A1A1A
  style F1 fill:#FFFFFF,stroke:#1A1A1A,stroke-width:1px,color:#1A1A1A
  style S2 fill:#FFFFFF,stroke:#1A1A1A,stroke-width:1px,color:#1A1A1A
  style F2 fill:#FFFFFF,stroke:#1A1A1A,stroke-width:1px,color:#1A1A1A
  style S3 fill:#FFFFFF,stroke:#1A1A1A,stroke-width:1px,color:#1A1A1A
  style F3 fill:#FFFFFF,stroke:#1A1A1A,stroke-width:1px,color:#1A1A1A
  style SSS fill:#FFFFFF,stroke:#1A1A1A,stroke-width:1px,color:#1A1A1A
  style SFF fill:#FFFFFF,stroke:#1A1A1A,stroke-width:1px,color:#1A1A1A
  style FSF fill:#FFFFFF,stroke:#1A1A1A,stroke-width:1px,color:#1A1A1A
  style FFS fill:#FFFFFF,stroke:#1A1A1A,stroke-width:1px,color:#1A1A1A
  style FFF fill:#FFFFFF,stroke:#1A1A1A,stroke-width:1px,color:#1A1A1A

  style SSF fill:#1A1A1A,color:#FFFFFF,stroke:#1A1A1A,stroke-width:2px,font-weight:bold
  style SFS fill:#1A1A1A,color:#FFFFFF,stroke:#1A1A1A,stroke-width:2px,font-weight:bold
  style FSS fill:#1A1A1A,color:#FFFFFF,stroke:#1A1A1A,stroke-width:2px,font-weight:bold
  
  style Result fill:#F1EFE9,stroke:#1A1A1A,stroke-width:2px,font-weight:bold,color:#1A1A1A
  
  style T1 fill:none,stroke:#1A1A1A,stroke-width:1px,stroke-dasharray: 5 5,color:#1A1A1A
  style T2 fill:none,stroke:#1A1A1A,stroke-width:1px,stroke-dasharray: 5 5,color:#1A1A1A
  style T3 fill:none,stroke:#1A1A1A,stroke-width:1px,stroke-dasharray: 5 5,color:#1A1A1A

  linkStyle 0,1,2,3,4,5,6,7,8,9,10,11,12,13 stroke:#1A1A1A,stroke-width:1.5px
  linkStyle 14,15,16 stroke:#1A1A1A,stroke-width:2px,stroke-dasharray: 3 3`;

  return (
    <div className="w-full flex flex-col items-center py-8 mb-12 border border-[#1A1A1A] bg-white relative shadow-[8px_8px_0px_#1A1A1A]">
      <div className="absolute top-0 right-0 bg-[#1A1A1A] text-white px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
        Fig 1. Binomial Tree (n=3)
      </div>
      
      <div className="w-full px-4 my-6 flex justify-center overflow-x-auto">
        <Mermaid chart={chart} />
      </div>
      
      <p className="text-[11px] font-sans text-[#1A1A1A]/70 text-center mt-2 px-6 italic max-w-prose">
        {"The binomial coefficient $\\binom{n}{x}$ counts the number of successful branch pathways on a tree diagram, avoiding the need to draw massive trees for large values of $n$."}
        <br />
        <strong className="text-red-600 not-italic uppercase text-[10px] block mt-1">
          Exam Misconception:
        </strong>{" "}
        This physically demonstrates why you must include the $^nC_x$ multiplier prefix. Forgetting it assumes there is only one path configuration (e.g., assuming ordering is fixed as $SSF$), when there are actually 3 unique structural arrangements that yield 2 successes.
      </p>
    </div>
  );
};