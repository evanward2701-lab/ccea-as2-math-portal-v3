import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=1.0]\n  \\draw[->] (-0.2,0) -- (3.4,0) node[right] {$x$};\n  \\draw[->] (0,-0.2) -- (0,4.8) node[above] {$y$};\n  \\fill[gray!25] (0,1) -- (0,4) -- plot[domain=4:1, variable=\\t, samples=80] ({1/sqrt(\\t)},{\\t}) -- cycle;\n  \\draw[domain=0.45:3.0, samples=120, smooth, thick] plot (\\x,{1/(\\x*\\x)});\n  \\draw[dashed] (0,1) -- (1,1);\n  \\draw[dashed] (0,4) -- (0.5,4);\n  \\node[left] at (0,1) {$1$};\n  \\node[left] at (0,4) {$4$};\n  \\node[below] at (1.7,-0.5) {Fig. 3};\n\\end{tikzpicture}";

export const AS1IntegrationQuestionsAS1IntegrationQ006TikZ001: React.FC = () => (
  <DiagramPanel title={"Region bounded by $y=1/x^2$, the y-axis and $y=1,4$"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-zinc-800 bg-zinc-950/70 p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-zinc-500">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-zinc-300">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
