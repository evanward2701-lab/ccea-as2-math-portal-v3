import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=0.85]\n  \\draw[->] (-0.3,0) -- (5.5,0) node[right] {$x$};\n  \\draw[->] (0,-0.3) -- (0,5.0) node[above] {$y$};\n  \\draw[domain=0:4.6, samples=120, smooth, thick] plot (\\x,{\\x*\\x/4}) node[right] {$y=x^2$};\n  \\draw[domain=0:5.0, samples=120, smooth, thick] plot (\\x,{2*sqrt(\\x)}) node[right] {$y=8\\sqrt{x}$};\n  \\fill (4,4) circle (2pt);\n  \\node[above] at (4,4) {$A$};\n  \\node[below] at (2.8,-0.5) {Fig. 5};\n\\end{tikzpicture}";

export const AS1IntegrationQuestionsAS1IntegrationQ012TikZ001: React.FC = () => (
  <DiagramPanel title={"Curves $y=x^2$ and $y=8\\sqrt{x}$ meeting at A"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-primary/20 bg-card p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-muted-foreground">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-foreground">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
