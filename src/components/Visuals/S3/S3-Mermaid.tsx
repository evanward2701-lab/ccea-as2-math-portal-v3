import React from 'react';
import { MermaidDiagram } from '../../MermaidDiagram';
import { MathText } from '../../MathText';

export const S3_PROBABILITY_TREE_MERMAID = `%%{init: {
  'theme': 'base',
  'flowchart': {
    'nodeSpacing': 70,
    'rankSpacing': 70
  },
  'themeVariables': {
    'background': '#020617',
    'fontSize': '18px',
    'primaryColor': '#0f172a',
    'primaryTextColor': '#f8fafc',
    'primaryBorderColor': '#334155',
    'lineColor': '#64748b',
    'secondaryColor': '#1e293b',
    'tertiaryColor': '#020617'
  }
}}%%
graph LR
    Start((Start)) -->|P(A)| ANode((A))
    Start -->|P(A')| ANot((A'))

    ANode -->|P(B|A)| B1((B))
    ANode -->|P(B'|A)| BNot1((B'))

    ANot -->|P(B|A')| B2((B))
    ANot -->|P(B'|A')| BNot2((B'))

    B1 -.-> Out1["P(A ∩ B)"]
    BNot1 -.-> Out2["P(A ∩ B')"]
    B2 -.-> Out3["P(A' ∩ B)"]
    BNot2 -.-> Out4["P(A' ∩ B')"]

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
      
      <div className="w-full px-6 mt-4 space-y-4">
        <p className="text-sm text-slate-400 italic text-center">
          Tree diagrams efficiently map out repeated events.
        </p>
        <div className="space-y-3">
            <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
                <p className="text-sm text-slate-300 leading-relaxed">
                    <strong className="text-sky-400">1. Multiply along branches</strong> to find an intersection (<MathText content="P(A \cap B)" className="inline [&_p]:inline [&_p]:m-0"/>).
                </p>
            </div>
            <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
                <p className="text-sm text-slate-300 leading-relaxed">
                    <strong className="text-sky-400">2. Add across separate final paths</strong> to find a union or total probability.
                </p>
            </div>
        </div>
        <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg text-center font-bold text-slate-300 text-sm">
          Multiply along branches, Add across separate paths.
        </div>
      </div>
    </div>
  );
};

