import React from 'react';
import Mermaid from 'react-mermaid2';

export const StdDevDecisionTree: React.FC = () => {
  const chart = `
    graph TD
    Q{"Is the data the whole population<br/>or a sample used to estimate?"}
    Q -->|Whole Population / Standalone Data| N["σₙ<br/>(Divisor n)"]
    Q -->|Sample estimating a Population| N1["σₙ₋₁<br/>(Divisor n-1)"]

    style Q fill:#1A1A1A,color:#FFFFFF,stroke:#1A1A1A,stroke-width:2px,font-weight:bold
    style N fill:#FAF9F6,stroke:#1A1A1A,stroke-width:2px
    style N1 fill:#FFFFFF,stroke:#1A1A1A,stroke-width:2px,stroke-dasharray: 4 4
  `;

  return (
    <div className="w-full flex flex-col items-center py-8 mb-12 border border-[#1A1A1A] bg-[#FAF9F6] relative shadow-[8px_8px_0px_#1A1A1A]">
      <div className="absolute top-0 right-0 bg-[#1A1A1A] text-white px-3 py-1 text-[10px] uppercase tracking-widest font-bold">Fig 4. Standard Deviation Selector</div>
      
      <div className="w-full px-4 my-6 flex justify-center">
        <Mermaid chart={chart} />
      </div>
      
      <p className="text-[11px] font-sans text-[#1A1A1A]/70 text-center mt-2 px-6 italic">
        Always check the wording of the question before choosing your standard deviation formula.
        <br/><strong className="text-red-600 not-italic uppercase text-[10px]">Exam Misconception:</strong> Calculators output both versions. Using the wrong one will lose you method and accuracy marks.
      </p>
    </div>
  );
};