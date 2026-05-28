import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=0.8]\n  \\draw[->] (-5.2,0) -- (5.2,0) node[right] {$x$};\n  \\draw[->] (0,-0.3) -- (0,4.8) node[above] {$y$};\n  % right lobe\n  \\fill[gray!25] plot[domain=0:4, samples=100] (\\x,{2*sqrt(\\x)}) -- plot[domain=4:0, samples=100] (\\x,{\\x*\\x/4}) -- cycle;\n  % left lobe (reflection)\n  \\fill[gray!25] plot[domain=0:4, samples=100] ({-\\x},{2*sqrt(\\x)}) -- plot[domain=4:0, samples=100] ({-\\x},{\\x*\\x/4}) -- cycle;\n  \\draw[domain=0:4, samples=100, smooth, thick] plot (\\x,{2*sqrt(\\x)});\n  \\draw[domain=0:4, samples=100, smooth, thick] plot (\\x,{\\x*\\x/4});\n  \\draw[domain=0:4, samples=100, smooth, thick] plot ({-\\x},{2*sqrt(\\x)});\n  \\draw[domain=0:4, samples=100, smooth, thick] plot ({-\\x},{\\x*\\x/4});\n  \\node[below] at (0,-0.5) {Fig. 6};\n\\end{tikzpicture}";

export const AS1IntegrationQuestionsAS1IntegrationQ012TikZ002: React.FC = () => (
  <DiagramPanel title={"Reflected logo area between $y=x^2$ and $y=8\\sqrt{x}$"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-zinc-800 bg-zinc-950/70 p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-zinc-500">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-zinc-300">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
