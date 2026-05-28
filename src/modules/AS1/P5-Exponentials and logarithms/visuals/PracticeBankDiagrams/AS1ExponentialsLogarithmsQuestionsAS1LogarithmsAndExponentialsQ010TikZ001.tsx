import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=0.9, >=Stealth]\n  \\draw[->] (-3,0) -- (4,0) node[right] {$x$};\n  \\draw[->] (0,-0.3) -- (0,4.2) node[above] {$y$};\n  \\draw[domain=-1.2:3.4, smooth, samples=100] plot ({\\x}, {exp(-ln(4)*\\x)});\n  \\fill (0,1) circle (1.5pt) node[right] {$1$};\n  \\node[below left] at (0,0) {$0$};\n\\end{tikzpicture}";

export const AS1ExponentialsLogarithmsQuestionsAS1LogarithmsAndExponentialsQ010TikZ001: React.FC = () => (
  <DiagramPanel title={"Mark scheme sketch of $y=4^{-x}$"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-zinc-800 bg-zinc-950/70 p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-zinc-500">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-zinc-300">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
