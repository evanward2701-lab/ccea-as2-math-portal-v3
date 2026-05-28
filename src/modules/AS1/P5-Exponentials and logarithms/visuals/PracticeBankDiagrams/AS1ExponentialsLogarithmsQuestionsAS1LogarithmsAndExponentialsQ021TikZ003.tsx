import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=0.9, >=Stealth]\n  \\draw[->] (-3.2,0) -- (3.8,0) node[right] {$x$};\n  \\draw[->] (0,-0.3) -- (0,3.0) node[above] {$y$};\n  \\draw[dashed] (-2,-0.2) -- (-2,2.8);\n  \\draw[domain=-1.92:-1, smooth, samples=80] plot ({\\x}, {-ln(\\x+2)});\n  \\draw[domain=-1:3.5, smooth, samples=100] plot ({\\x}, {ln(\\x+2)}) node[right] {$y=\\lvert\\ln(x+2)\\rvert$};\n  \\fill (-1,0) circle (1.5pt) node[below] {$A'(-1,0)$};\n\\end{tikzpicture}";

export const AS1ExponentialsLogarithmsQuestionsAS1LogarithmsAndExponentialsQ021TikZ003: React.FC = () => (
  <DiagramPanel title={"Mark scheme sketch of $y=\\lvert\\ln(x+2)\\rvert$"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-zinc-800 bg-zinc-950/70 p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-zinc-500">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-zinc-300">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
