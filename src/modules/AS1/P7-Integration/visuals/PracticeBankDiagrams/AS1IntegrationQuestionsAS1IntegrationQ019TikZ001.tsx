import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=1.0]\n  \\draw[->] (-3.0,0) -- (2.5,0) node[right] {$x$};\n  \\draw[->] (0,-0.5) -- (0,5.0) node[above] {$y$};\n  \\fill[gray!25] (0,1) -- (0,4) -- plot[domain=4:1, variable=\\t, samples=100] ({\\t*\\t-5*\\t+4},{\\t}) -- cycle;\n  \\draw[domain=0:5, variable=\\t, samples=120, smooth, thick] plot ({\\t*\\t-5*\\t+4},{\\t});\n  \\node[left] at (0,1) {$1$};\n  \\node[left] at (0,4) {$4$};\n  \\node[right] at (0.6,4.4) {$x=y^2-5y+4$};\n  \\node[below] at (0,0) {$0$};\n  \\node[below] at (-1.2,-0.6) {Fig. 2};\n\\end{tikzpicture}";

export const AS1IntegrationQuestionsAS1IntegrationQ019TikZ001: React.FC = () => (
  <DiagramPanel title={"Shaded area for $x=y^2-5y+4$"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-primary/20 bg-card p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-muted-foreground">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-foreground">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
