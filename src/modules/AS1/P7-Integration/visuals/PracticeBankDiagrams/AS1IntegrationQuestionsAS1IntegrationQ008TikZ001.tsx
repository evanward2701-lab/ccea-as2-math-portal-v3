import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=0.75]\n  \\draw[->] (-5,0) -- (4.5,0) node[right] {$x$};\n  \\draw[->] (0,-1.2) -- (0,7.0) node[above] {$y$};\n  \\fill[gray!25] (-4,0) -- plot[domain=-4:0, samples=40] (\\x,{\\x+4}) -- (0,0) -- cycle;\n  \\fill[gray!25] (0,0) -- plot[domain=0:2, samples=80] (\\x,{\\x*\\x-4*\\x+4}) -- (2,0) -- cycle;\n  \\draw[domain=-4.5:2.2, samples=80, thick] plot (\\x,{\\x+4}) node[right] {$y=x+4$};\n  \\draw[domain=-1.0:4.0, samples=120, smooth, thick] plot (\\x,{\\x*\\x-4*\\x+4}) node[right] {$y=x^2-4x+4$};\n  \\node[left] at (0,4) {$(0,4)$};\n  \\node[below] at (-4,0) {$-4$};\n  \\node[below] at (2,0) {$2$};\n  \\node[below] at (0,0) {$0$};\n  \\node[below] at (0,-1.1) {Fig. 1};\n\\end{tikzpicture}";

export const AS1IntegrationQuestionsAS1IntegrationQ008TikZ001: React.FC = () => (
  <DiagramPanel title={"Composite shaded region under a line and a curve"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-zinc-800 bg-zinc-950/70 p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-zinc-500">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-zinc-300">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
