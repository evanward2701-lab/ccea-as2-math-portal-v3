import React from 'react';
import { MermaidDiagram as Mermaid } from "@/components/MermaidDiagram"; // Synchronized tracking wrapper

export const ProbabilityTree: React.FC = () => {
  // Configured flush-left template literal mapped to Dark Canvas palette rules
  const chart = `graph LR
%% Node Generation
Start((Start)) -->|P_A| ANode((A))
Start -->|P_not_A| ANot((not A))

ANode -->|P_B_given_A| B1((B))
ANode -->|P_not_B_given_A| BNot1((not B))

ANot -->|P_B_given_not_A| B2((B))
ANot -->|P_not_B_given_not_A| BNot2((not B))

B1 -.-> Out1[\"P(A ∩ B) = P(A) x P(B|A)\"]
BNot1 -.-> Out2[\"P(A ∩ B') = P(A) x P(B'|A)\"]
B2 -.-> Out3[\"P(A' ∩ B) = P(A') x P(B|A')\"]
BNot2 -.-> Out4[\"P(A' ∩ B') = P(A') x P(B'|A')\"]

%% Color Theme Adjustments (Slate / Dark System Interactivity Rules)
style Start fill:#020617,stroke:#64748b,stroke-width:2px,color:#f8fafc
style ANode fill:#0f172a,stroke:#10b981,stroke-width:2px,color:#34d399
style ANot fill:#0f172a,stroke:#3b82f6,stroke-width:2px,color:#60a5fa

style B1 fill:#1e293b,stroke:#10b981,stroke-width:1px,color:#e2e8f0
style BNot1 fill:#1e293b,stroke:#f43f5e,stroke-width:1px,color:#e2e8f0
style B2 fill:#1e293b,stroke:#10b981,stroke-width:1px,color:#e2e8f0
style BNot2 fill:#1e293b,stroke:#f43f5e,stroke-width:1px,color:#e2e8f0

style Out1 fill:#020617,stroke:#10b981,stroke-dasharray: 3 3,color:#34d399
style Out2 fill:#020617,stroke:#64748b,stroke-dasharray: 3 3,color:#94a3b8
style Out3 fill:#020617,stroke:#64748b,stroke-dasharray: 3 3,color:#94a3b8
style Out4 fill:#020617,stroke:#f43f5e,stroke-dasharray: 3 3,color:#f43f5e

%% Connection Mechanics Links
linkStyle 0,1 stroke:#64748b,stroke-width:2px
linkStyle 2,3 stroke:#10b981,stroke-width:2px
linkStyle 4,5 stroke:#3b82f6,stroke-width:2px
linkStyle 6,7,8,9 stroke:#475569,stroke-width:1px`;

  return (
    <div className="w-full flex flex-col items-center py-8 mb-12 border border-slate-800 bg-slate-950 relative shadow-[8px_8px_0px_#020617]">
      <div className="absolute top-0 right-0 bg-slate-900 border-b border-l border-slate-800 text-slate-400 px-3 py-1 text-[10px] uppercase tracking-widest font-bold font-sans">
        Fig 3. Probability Tree Diagram
      </div>
      
      <div className="w-full px-4 my-6 flex justify-center overflow-x-auto dark-mermaid-adjust">
        <Mermaid chart={chart} />
      </div>
      
      <p className="text-[11px] font-sans text-slate-400 text-center mt-2 px-6 italic max-w-prose">
        Branches represent sequences of conditional dependent execution timelines.
        <span className="text-rose-500 font-semibold uppercase text-[10px] block mt-2 bg-rose-950/30 border border-rose-900/40 py-1 px-3 rounded">
          CCEA Rule Matrix: Multiply along consecutive branches to obtain intersections. Add across matching individual column outcomes for total global states.
        </span>
      </p>
    </div>
  );
};