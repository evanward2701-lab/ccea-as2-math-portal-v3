import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=0.9, >=Stealth]\n  \\draw[->] (-2.5,0) -- (3,0) node[right] {$x$};\n  \\draw[->] (0,-3.4) -- (0,3.5) node[above] {$y$};\n  \\draw[domain=-2.2:1.45, smooth, samples=100] plot ({\\x}, {exp(ln(4)*\\x)-3});\n  \\fill (0.792,0) circle (1.5pt) node[below right] {$A$};\n  \\fill (0,-2) circle (1.5pt) node[below right] {$B$};\n  \\node at (1.4,-3.0) {Fig. 3};\n\\end{tikzpicture}";

export const AS1ExponentialsLogarithmsQuestionsAS1LogarithmsAndExponentialsQ006TikZ001: React.FC = () => (
  <DiagramPanel title={"Fig. 3 sketch of $y=4^x-3$"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-zinc-800 bg-zinc-950/70 p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-zinc-500">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-zinc-300">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
