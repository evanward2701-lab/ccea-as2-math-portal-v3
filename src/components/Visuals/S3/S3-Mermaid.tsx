import React from 'react';
import { MermaidDiagram } from '../../MermaidDiagram';
import { MathText } from '../../MathText';

export const S3_PROBABILITY_TREE_MERMAID = `%%{init: {
  'theme': 'base',
  'themeVariables': {
    'background': '#020617',
    'fontSize': '16px',
    'primaryColor': '#0f172a',
    'primaryTextColor': '#f8fafc',
    'primaryBorderColor': '#334155',
    'lineColor': '#64748b',
    'secondaryColor': '#1e293b',
    'tertiaryColor': '#020617'
  }
}}%%
graph LR
    %% Node Generation
    Start((Start)) -->|P_A| ANode((A))
    Start -->|P_not_A| ANot((not A))

    ANode -->|P_B_given_A| B1((B))
    ANode -->|P_not_B_given_A| BNot1((not B))

    ANot -->|P_B_given_not_A| B2((B))
    ANot -->|P_not_B_given_not_A| BNot2((not B))

    B1 -.-> Out1["P(A ∩ B) = P(A) × P(B|A)"]
    BNot1 -.-> Out2["P(A ∩ B') = P(A) × P(B'|A)"]
    B2 -.-> Out3["P(A' ∩ B) = P(A') × P(B|A')"]
    BNot2 -.-> Out4["P(A' ∩ B') = P(A') × P(B'|A')"]

    classDef default fill:#0f172a,stroke:#334155,stroke-width:1px,color:#cbd5e1;
    classDef startNode fill:#020617,stroke:#64748b,stroke-width:2px,color:#f8fafc;
    classDef success fill:#0f172a,stroke:#10b981,stroke-width:2px,color:#34d399;
    classDef fail fill:#0f172a,stroke:#f43f5e,stroke-width:2px,color:#f43f5e;
    classDef endSuccess fill:#020617,stroke:#10b981,stroke-dasharray: 3 3,color:#34d399;
    classDef endFail fill:#020617,stroke:#f43f5e,stroke-dasharray: 3 3,color:#f43f5e;
    classDef endNeutral fill:#020617,stroke:#64748b,stroke-dasharray: 3 3,color:#94a3b8;

    class Start startNode;
    class ANode,B1,B2 success;
    class ANot,BNot1,BNot2 fail;
    class Out1 endSuccess;
    class Out4 endFail;
    class Out2,Out3 endNeutral;
`;

export const ProbabilityTree: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center py-8 mb-12 border border-slate-800 bg-slate-950 relative shadow-[8px_8px_0px_#0f172a] rounded-xl overflow-hidden">
      <div className="absolute top-0 right-0 bg-slate-900 border-b border-l border-slate-800 text-slate-400 px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
        Fig 3. Probability Tree Diagram
      </div>
      
      <div className="w-full px-4 my-6 flex justify-center overflow-x-auto">
        <MermaidDiagram chart={S3_PROBABILITY_TREE_MERMAID} />
      </div>
      
      <div className="w-full px-6 mt-4 space-y-4 text-center">
        <p className="text-sm text-slate-400 italic">
          Branches represent sequences of conditional dependent execution timelines.
        </p>
        <div className="p-4 bg-slate-900/40 border border-slate-800/60 rounded-lg text-sm text-slate-300">
          <strong className="block text-sky-400 not-italic uppercase text-[10px] mb-2">Key Operations:</strong>
          Multiply along consecutive branches to find an intersection (<MathText content="\cap" className="inline"/>). Add across separate final outcomes to find a union (<MathText content="\cup" className="inline"/>) or total probability.
        </div>
      </div>
    </div>
  );
};