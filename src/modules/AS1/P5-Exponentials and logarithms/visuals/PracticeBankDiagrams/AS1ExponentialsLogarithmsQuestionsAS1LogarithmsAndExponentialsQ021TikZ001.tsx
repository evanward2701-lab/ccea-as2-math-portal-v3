import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=0.9, >=Stealth]\n  \\draw[->] (-1.2,0) -- (4.2,0) node[right] {$x$};\n  \\draw[->] (0,-2.4) -- (0,2.4) node[above] {$y$};\n  \\draw[domain=0.08:4, smooth, samples=100] plot ({\\x}, {ln(\\x)}) node[right] {$y=\\ln x$};\n  \\fill (1,0) circle (1.5pt) node[below right] {$A$};\n  \\node at (2,-2.0) {Fig. 1};\n\\end{tikzpicture}";

export const AS1ExponentialsLogarithmsQuestionsAS1LogarithmsAndExponentialsQ021TikZ001: React.FC = () => (
  <DiagramPanel title={"Fig. 1 graph of $y=\\ln x$"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-primary/20 bg-card p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-muted-foreground">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-foreground">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
