import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=0.7]\n  \\draw[->] (-1.5,0) -- (9,0) node[right] {$x$};\n  \\draw[->] (0,-1.2) -- (0,6.5) node[above] {$y$};\n  \\fill[gray!25] (1,0) -- plot[domain=1:8, samples=100] (\\x,{0.15*(pow(\\x,1/3)+4*\\x)}) -- (8,0) -- cycle;\n  \\draw[domain=0:8.5, samples=120, smooth, thick] plot (\\x,{0.15*(pow(\\x,1/3)+4*\\x)});\n  \\draw[dashed] (1,0) -- (1,{0.15*(1+4)});\n  \\draw[dashed] (8,0) -- (8,{0.15*(2+32)});\n  \\node[below] at (1,0) {$1$};\n  \\node[below] at (8,0) {$8$};\n  \\node[right] at (3.2,3.2) {$y=x^{1/3}+4x$};\n  \\node[below] at (4,-1.0) {Fig. 1};\n\\end{tikzpicture}";

export const AS1IntegrationQuestionsAS1IntegrationQ015TikZ001: React.FC = () => (
  <DiagramPanel title={"Area under $y=x^{1/3}+4x$ between $x=1$ and $x=8$"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-zinc-800 bg-zinc-950/70 p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-zinc-500">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-zinc-300">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
