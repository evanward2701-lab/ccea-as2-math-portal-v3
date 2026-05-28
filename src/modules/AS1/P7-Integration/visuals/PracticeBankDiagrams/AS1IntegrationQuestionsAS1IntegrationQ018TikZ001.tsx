import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=1.0]\n  \\draw[->] (-0.2,0) -- (4.8,0) node[right] {$x$};\n  \\draw[->] (0,-1.0) -- (0,4.0) node[above] {$y$};\n  \\fill[gray!25] plot[domain=2:3, samples=80] (\\x,{-\\x*\\x+5*\\x-4}) -- plot[domain=3:2, samples=80] (\\x,{\\x*\\x-5*\\x+8}) -- cycle;\n  \\draw[domain=0.7:4.2, samples=120, smooth, thick] plot (\\x,{\\x*\\x-5*\\x+8}) node[right] {$y=x^2-5x+8$};\n  \\draw[domain=0.8:4.1, samples=120, smooth, thick] plot (\\x,{-\\x*\\x+5*\\x-4}) node[right] {$y=-x^2+5x-4$};\n  \\fill (2,2) circle (2pt) node[left] {$(2,2)$};\n  \\fill (3,2) circle (2pt) node[right] {$(3,2)$};\n  \\node[below] at (2.3,-0.6) {Fig. 1};\n\\end{tikzpicture}";

export const AS1IntegrationQuestionsAS1IntegrationQ018TikZ001: React.FC = () => (
  <DiagramPanel title={"Enclosed area between two parabolas"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-zinc-800 bg-zinc-950/70 p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-zinc-500">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-zinc-300">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
