import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=0.8]\n  \\draw[->] (-0.5,0) -- (6.5,0) node[right] {$x$};\n  \\draw[->] (0,-0.5) -- (0,4.5) node[above] {$y$};\n  \\fill[gray!25] (2,{8/3}) -- plot[domain=2:4, samples=80] (\\x,{(6*\\x-\\x*\\x)/3}) -- (4,{8/3}) -- cycle;\n  \\draw[domain=0:6, samples=100, smooth, thick] plot (\\x,{(6*\\x-\\x*\\x)/3}) node[right] {$y=6x-x^2$};\n  \\draw[thick] (0,{8/3}) -- (6,{8/3}) node[right] {$y=8$};\n  \\draw[dashed] (2,0) -- (2,{8/3});\n  \\draw[dashed] (4,0) -- (4,{8/3});\n  \\node[below] at (2,0) {$2$};\n  \\node[below] at (4,0) {$4$};\n\\end{tikzpicture}";

export const AS1IntegrationQuestionsAS1IntegrationQ017TikZ001: React.FC = () => (
  <DiagramPanel title={"AI-proposed sketch for $y=8$ and $y=6x-x^2$"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-zinc-800 bg-zinc-950/70 p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-zinc-500">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-zinc-300">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
