import React from 'react';
import { MermaidDiagram } from '@/core/diagram-engine/MermaidDiagram';
import { MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { M1_MERMAID_THEME } from '@/modules/AS2/mermaid.config';

const FMA_BRIDGE_MERMAID = `${M1_MERMAID_THEME}
flowchart LR
  A["Forces on object<br/><span style='font-size:13px; color:#94a3b8'>add external forces</span>"] --> B["Resultant force<br/><b>&Sigma;F</b>"]
  B --> C["Newton's Second Law<br/><b>F = ma</b>"]
  C --> D["Motion response<br/><span style='font-size:13px; color:#94a3b8'>acceleration a</span>"]
  M["Mass m"] --> C

  N1["More resultant force<br/>more acceleration"] -.-> D
  N2["More mass<br/>less acceleration"] -.-> D

  classDef default fill:#0f172a,stroke:#1e293b,stroke-width:1.5px,color:#f8fafc;
  classDef force fill:#0f172a,stroke:#38bdf8,stroke-width:1.5px,color:#bae6fd;
  classDef law fill:#022c22,stroke:#10b981,stroke-width:1.5px,color:#d1fae5;
  classDef note fill:transparent,stroke:#334155,stroke-dasharray: 5 5,stroke-width:1px,color:#cbd5e1;
  class A,B force;
  class C law;
  class D,M,N1,N2 note;`;

export const M1FmaBridgeMermaid: React.FC = () => (
  <DiagramPanel
    title="Fig 1. The F=ma Bridge"
    analysis={
      <div className="grid gap-4 sm:grid-cols-2 w-full max-w-2xl">
        <div className="rounded-xl border border-slate-800/50 bg-slate-900/30 p-4 text-center text-sm text-slate-300">
          <span className="font-medium text-sky-400">Resultant force:</span> add all forces first.
        </div>
        <div className="rounded-xl border border-slate-800/50 bg-slate-900/30 p-4 text-center text-sm text-slate-300">
          <MathText content="F" className="inline text-emerald-400 font-medium [&_p]:inline [&_p]:m-0" /> is the resultant force, not just any single force.
        </div>
      </div>
    }
  >
    <div className="w-full max-w-4xl px-4">
      <MermaidDiagram chart={FMA_BRIDGE_MERMAID} />
    </div>
  </DiagramPanel>
);
