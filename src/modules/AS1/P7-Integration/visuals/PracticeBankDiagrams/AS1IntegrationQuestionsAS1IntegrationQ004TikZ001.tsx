import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=1.0]\n  \\draw[->] (-0.4,0) -- (3.8,0) node[right] {$x$};\n  \\draw[->] (0,-0.3) -- (0,3.8) node[above] {$y$};\n  \\fill[gray!25] (0,0) -- plot[domain=0:3, samples=100] (\\x,{(2*\\x*\\x*\\x-8*\\x*\\x+7*\\x+3)/2}) -- (3,0) -- cycle;\n  \\draw[domain=0:3, samples=120, smooth, thick] plot (\\x,{(2*\\x*\\x*\\x-8*\\x*\\x+7*\\x+3)/2});\n  \\draw[dashed] (0,3) -- (3,3) -- (3,0);\n  \\node[left] at (0,3) {$6$};\n  \\node[below] at (0,0) {$O$};\n  \\node[below] at (3,0) {$3$};\n  \\node[below] at (1.7,-0.5) {Fig. 2};\n\\end{tikzpicture}";

export const AS1IntegrationQuestionsAS1IntegrationQ004TikZ001: React.FC = () => (
  <DiagramPanel title={"Logo area under a cubic curve"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-zinc-800 bg-zinc-950/70 p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-zinc-500">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-zinc-300">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
