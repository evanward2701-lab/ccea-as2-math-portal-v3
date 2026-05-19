import React from 'react';
import { MermaidDiagram as Mermaid } from "@/components/MermaidDiagram";

// Consistent wrapper matching your study portal's editorial design
const MermaidDiagram: React.FC<{ chart: string, caption: string }> = ({ chart, caption }) => {
  return (
    <div className="w-full flex flex-col items-center py-8 mb-12 border border-[#1A1A1A] bg-white relative shadow-[8px_8px_0px_#1A1A1A]">
      <div className="absolute top-0 right-0 bg-[#1A1A1A] text-white px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
        Fig 1. The F=ma Bridge
      </div>
      
      <div className="w-full px-4 my-6 flex justify-center overflow-x-auto">
        <Mermaid chart={chart} />
      </div>
      
      <p className="text-[11px] font-sans text-[#1A1A1A]/70 text-center mt-2 px-6 italic max-w-prose">
        {caption}
        <br />
        <strong className="text-red-600 not-italic uppercase text-[10px]">Core Concept:</strong> Prevents treating force resolution and constant acceleration kinematics as isolated, disconnected topics.
      </p>
    </div>
  );
};

export const FMaBridge: React.FC = () => {
  // CRITICAL: Template string is flush to the left margin to guarantee parsing safety.
  const chart = `graph LR
F["Forces<br/>(Vector magnitude/direction)"] <--> B["F = ma<br/>(Newton's 2nd Law)"]
B <--> M["Motion<br/>(Acceleration a linking to<br/>velocity/displacement)"]

style F fill:#FFFFFF,stroke:#1A1A1A,stroke-width:2px,color:#1A1A1A
style B fill:#F1EFE9,stroke:#1A1A1A,stroke-width:2px,stroke-dasharray: 5 5,color:#1A1A1A,font-weight:bold
style M fill:#FFFFFF,stroke:#1A1A1A,stroke-width:2px,color:#1A1A1A

linkStyle 0,1 stroke:#1A1A1A,stroke-width:5px`;

  return (
    <MermaidDiagram 
      caption="Newton's Second Law links the forces acting on a particle to its resulting acceleration."
      chart={chart}
    />
  );
};