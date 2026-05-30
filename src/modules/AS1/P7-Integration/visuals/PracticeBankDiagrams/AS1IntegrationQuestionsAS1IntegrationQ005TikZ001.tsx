import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=0.9]\n  \\draw[->] (-0.4,0) -- (4.8,0) node[right] {$x$};\n  \\draw[->] (0,-0.5) -- (0,4.8) node[above] {$y$};\n  \\fill[gray!25] (0,0) -- (0,4) -- plot[domain=0:4, samples=120] (\\x,{(8-pow(\\x,1.5))/2}) -- (4,0) -- cycle;\n  \\draw[domain=0:4.2, samples=120, smooth, thick] plot (\\x,{(8-pow(\\x,1.5))/2});\n  \\node[left] at (0,4) {$8$};\n  \\node[below] at (4,0) {$4$};\n  \\node[below] at (2.1,-0.7) {Fig. 2};\n\\end{tikzpicture}";

export const AS1IntegrationQuestionsAS1IntegrationQ005TikZ001: React.FC = () => (
  <DiagramPanel title={"Area bounded by $y=8-x^{3/2}$ and the axes"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-primary/20 bg-card p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-muted-foreground">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-foreground">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
