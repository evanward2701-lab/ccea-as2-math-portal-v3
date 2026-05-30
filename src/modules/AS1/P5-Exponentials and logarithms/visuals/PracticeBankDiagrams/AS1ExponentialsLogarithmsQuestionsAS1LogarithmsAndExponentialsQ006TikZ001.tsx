import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=0.9, >=Stealth]\n  \\draw[->] (-2.5,0) -- (3,0) node[right] {$x$};\n  \\draw[->] (0,-3.4) -- (0,3.5) node[above] {$y$};\n  \\draw[domain=-2.2:1.45, smooth, samples=100] plot ({\\x}, {exp(ln(4)*\\x)-3});\n  \\fill (0.792,0) circle (1.5pt) node[below right] {$A$};\n  \\fill (0,-2) circle (1.5pt) node[below right] {$B$};\n  \\node at (1.4,-3.0) {Fig. 3};\n\\end{tikzpicture}";

export const AS1ExponentialsLogarithmsQuestionsAS1LogarithmsAndExponentialsQ006TikZ001: React.FC = () => (
  <DiagramPanel title={"Fig. 3 sketch of $y=4^x-3$"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-primary/20 bg-card p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-muted-foreground">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-foreground">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
