import React from 'react';
import { MermaidDiagram as Mermaid } from "@/components/MermaidDiagram";

// Diagram 3: Probability Tree Diagram
export const ProbabilityTree: React.FC = () => {
  const chart = `
    graph LR
    Start((Start)) -->|"P(A)"| ANode((A))
    Start -->|"P(not A)"| ANot((not A))
    
    ANode -->|"P(B given A)"| B1((B))
    ANode -->|"P(not B given A)"| BNot1((not B))
    
    ANot -->|"P(B given not A)"| B2((B))
    ANot -->|"P(not B given not A)"| BNot2((not B))

    B1 -.->|"Multiply branches"| Out1["P(A and B)"]
    
    style Start fill:#1A1A1A,color:#FFFFFF,stroke:#1A1A1A,stroke-width:2px
    style ANode fill:#FFFFFF,stroke:#1A1A1A,stroke-width:2px
    style ANot fill:#FFFFFF,stroke:#1A1A1A,stroke-width:2px
    style B1 fill:#FFFFFF,stroke:#1A1A1A,stroke-width:2px
    style BNot1 fill:#FFFFFF,stroke:#1A1A1A,stroke-width:2px
    style B2 fill:#FFFFFF,stroke:#1A1A1A,stroke-width:2px
    style BNot2 fill:#FFFFFF,stroke:#1A1A1A,stroke-width:2px
    style Out1 fill:#FAF9F6,stroke:#1A1A1A,stroke-width:1px,stroke-dasharray: 4 4
  `;

  return (
    <div className="w-full flex flex-col items-center py-8 mb-12 border border-[#1A1A1A] bg-[#FAF9F6] relative shadow-[8px_8px_0px_#1A1A1A]">
      <div className="absolute top-0 right-0 bg-[#1A1A1A] text-white px-3 py-1 text-[10px] uppercase tracking-widest font-bold">Fig 3. Probability Tree</div>
      
      <div className="w-full px-4 my-6 flex justify-center">
        <Mermaid chart={chart} />
      </div>
      
      <p className="text-[11px] font-sans text-[#1A1A1A]/70 text-center mt-2 px-6 italic">
        Tree diagrams efficiently map out repeated events.
        <br/><strong className="text-red-600 not-italic uppercase text-[10px]">Exam Rule:</strong> Multiply along the branches to find intersections. Add across separate paths for total probabilities.
      </p>
    </div>
  );
};
