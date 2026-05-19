import React from 'react';
import { MermaidDiagram as Mermaid } from "@/components/MermaidDiagram";

const MermaidDiagram: React.FC<{ chart: string, caption: string }> = ({ chart, caption }) => {
  return (
    <div className="flex flex-col items-center p-6 border border-[#1A1A1A] bg-[#FAF9F6] shadow-[4px_4px_0px_#1A1A1A] my-8">
      <div className="w-full mb-4">
        <Mermaid chart={chart} />
      </div>
      <p className="text-[11px] font-sans text-[#1A1A1A]/70 text-center italic">{caption}</p>
    </div>
  );
};

// If you want the specific F=ma bridge component, export it like this:
export const FMaBridge: React.FC = () => (
  <MermaidDiagram 
    caption="Newton's Second Law links the forces acting on a particle to its resulting acceleration."
    chart={`
      graph LR
      F["Forces<br/>(Vector magnitude/direction)"] <--> B["F = ma<br/>(Newton's 2nd Law)"]
      B <--> M["Motion<br/>(Acceleration a linking to velocity/displacement)"]
      style B fill:#F1EFE9,stroke:#1A1A1A,stroke-width:2px,stroke-dasharray: 5 5
      linkStyle 0,1 stroke:#1A1A1A,stroke-width:4px
    `}
  />
);
