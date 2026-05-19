import React from 'react';
import { MermaidDiagram as Mermaid } from "@/components/MermaidDiagram";

// Diagram 3: Probability Tree Diagram
export const ProbabilityTree: React.FC = () => {
  // CRITICAL: Template literal must start perfectly flush left with no leading indentation.
  const chart = `graph LR
Start((Start)) -->|P_A| ANode((A))
Start -->|P_not_A| ANot((not A))

ANode -->|P_B_given_A| B1((B))
ANode -->|P_not_B_given_A| BNot1((not B))

ANot -->|P_B_given_not_A| B2((B))
ANot -->|P_not_B_given_not_A| BNot2((not B))

B1 -->|Multiply| Out1["P(A and B) = P(A) x P(B|A)"]
BNot1 -->|Multiply| Out2["P(A and not B) = P(A) x P(not B|A)"]
B2 -->|Multiply| Out3["P(not A and B) = P(not A) x P(B|not A)"]
BNot2 -->|Multiply| Out4["P(not A and not B) = P(not A) x P(not B|not A)"]

style Start fill:#1A1A1A,color:#FFFFFF,stroke:#1A1A1A,stroke-width:2px,font-weight:bold
style ANode fill:#FFFFFF,stroke:#1A1A1A,stroke-width:2px,color:#1A1A1A
style ANot fill:#FFFFFF,stroke:#1A1A1A,stroke-width:2px,color:#1A1A1A
style B1 fill:#FFFFFF,stroke:#1A1A1A,stroke-width:2px,color:#1A1A1A
style BNot1 fill:#FFFFFF,stroke:#1A1A1A,stroke-width:2px,color:#1A1A1A
style B2 fill:#FFFFFF,stroke:#1A1A1A,stroke-width:2px,color:#1A1A1A
style BNot2 fill:#FFFFFF,stroke:#1A1A1A,stroke-width:2px,color:#1A1A1A

style Out1 fill:#FAF9F6,stroke:#1A1A1A,stroke-width:1px,stroke-dasharray: 3 3,color:#1A1A1A
style Out2 fill:#FAF9F6,stroke:#1A1A1A,stroke-width:1px,stroke-dasharray: 3 3,color:#1A1A1A
style Out3 fill:#FAF9F6,stroke:#1A1A1A,stroke-width:1px,stroke-dasharray: 3 3,color:#1A1A1A
style Out4 fill:#FAF9F6,stroke:#1A1A1A,stroke-width:1px,stroke-dasharray: 3 3,color:#1A1A1A

linkStyle 0,1,2,3,4,5 stroke:#1A1A1A,stroke-width:2px
linkStyle 6,7,8,9 stroke:#1A1A1A,stroke-width:1px,stroke-dasharray: 4 4`;

  return (
    <div className="w-full flex flex-col items-center py-8 mb-12 border border-[#1A1A1A] bg-[#FAF9F6] relative shadow-[8px_8px_0px_#1A1A1A]">
      <div className="absolute top-0 right-0 bg-[#1A1A1A] text-white px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
        Fig 3. Probability Tree
      </div>
      
      <div className="w-full px-4 my-6 flex justify-center overflow-x-auto">
        <Mermaid chart={chart} />
      </div>
      
      <p className="text-[11px] font-sans text-[#1A1A1A]/70 text-center mt-2 px-6 italic max-w-prose">
        Tree diagrams efficiently map out repeated events.
        <br />
        <strong className="text-red-600 not-italic uppercase text-[10px] block mt-1">
          Exam Rule / Misconception:
        </strong>{" "}
        Multiply along the branches to find intersections. Add across separate paths for total probabilities. Never add values along a single sequential branch timeline.
      </p>
    </div>
  );
};