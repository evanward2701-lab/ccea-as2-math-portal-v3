import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { MermaidDiagram } from '@/core/diagram-engine/MermaidDiagram';

const chart = "flowchart TD\n    A[Identify $a$ and $b$ in $(a+b)^n$] --> B[Decide how many terms are needed and write down $n$]\n    B --> C[Obtain coefficients from Pascal's triangle or compute $\\binom{n}{r}$]\n    C --> D[Write general term $T(r+1) = \\binom{n}{r}\\,a^{n-r}\\,b^r$]\n    D --> E[Compute each term for $r=0,1,2,\\dots$]\n    E --> F[Order the terms in ascending powers of $x$ (if $b$ contains $x$)]\n    F --> G[Check coefficients and simplify numerical factors]";

export const AS1BinomialExpansionLessonMMD001: React.FC = () => (
  <DiagramPanel title={"Binomial Expansion Flowchart"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto py-4">
      <MermaidDiagram chart={chart} />
    </div>
  </DiagramPanel>
);
