import React from 'react';
import { MermaidDiagram } from '../../MermaidDiagram';
import { MathText } from '../../MathText';
import { DiagramPanel } from '../../DiagramPanel';
import { M1_MERMAID_THEME } from '../../diagrams/mermaid.config';

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

const SI_UNITS_MERMAID = `${M1_MERMAID_THEME}
flowchart TD
  subgraph Base["Base SI units"]
    KG["Mass<br/><b>kg</b>"]
    M["Length<br/><b>m</b>"]
    S["Time<br/><b>s</b>"]
  end

  subgraph Motion["Derived motion units"]
    V["Velocity<br/>m s^-1"]
    A["Acceleration<br/>m s^-2"]
  end

  subgraph Force["Force units"]
    N["Force<br/><b>N = kg m s^-2</b>"]
    W["Weight<br/><b>W = mg</b><br/><span style='font-size:12px;color:#94a3b8'>measured in N</span>"]
  end

  M --> V
  S --> V
  V --> A
  S --> A
  KG --> N
  A --> N
  KG --> W

  C1["Convert tonnes to kg"] -.-> N
  C2["kg is mass; N is force"] -.-> W
  C3["m s^-2 is acceleration"] -.-> A

  classDef default fill:#0f172a,stroke:#1e293b,stroke-width:1.5px,color:#f8fafc;
  classDef base fill:#0f172a,stroke:#38bdf8,stroke-width:1.5px,color:#bae6fd;
  classDef motion fill:#0f172a,stroke:#f59e0b,stroke-width:1.5px,color:#fde68a;
  classDef force fill:#022c22,stroke:#10b981,stroke-width:1.5px,color:#d1fae5;
  classDef warning fill:transparent,stroke:#fb7185,stroke-dasharray: 4 4,stroke-width:1px,color:#fecdd3;
  class KG,M,S base;
  class V,A motion;
  class N,W force;
  class C1,C2,C3 warning;`;

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

export const M1SIUnitDerivationMermaid: React.FC = () => (
  <DiagramPanel
    title="Fig 2. SI Unit Derivation Tree"
    analysis={
      <div className="grid gap-4 sm:grid-cols-3 w-full max-w-4xl">
        <div className="rounded-xl border border-slate-800/50 bg-slate-900/30 p-4 text-center text-sm text-slate-300">
          <span className="font-medium text-sky-400">Base units:</span> kg, m, s
        </div>
        <div className="rounded-xl border border-slate-800/50 bg-slate-900/30 p-4 text-center text-sm text-slate-300">
          <span className="font-medium text-amber-400">Derived units:</span> m s<sup className="text-[10px] opacity-75">-1</sup>, m s<sup className="text-[10px] opacity-75">-2</sup>
        </div>
        <div className="rounded-xl border border-slate-800/50 bg-slate-900/30 p-4 text-center text-sm text-slate-300">
          <span className="font-medium text-emerald-400">Force units:</span> N = kg m s<sup className="text-[10px] opacity-75">-2</sup>
        </div>
      </div>
    }
  >
    <div className="w-full max-w-4xl px-4">
      <MermaidDiagram chart={SI_UNITS_MERMAID} />
    </div>
  </DiagramPanel>
);
