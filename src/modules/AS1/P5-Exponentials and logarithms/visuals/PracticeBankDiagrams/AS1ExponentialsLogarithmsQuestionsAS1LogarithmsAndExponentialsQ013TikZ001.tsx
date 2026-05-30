import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=0.8, >=Stealth]\n  \\draw[->] (-3,0) -- (5,0) node[right] {$x$};\n  \\draw[->] (0,-5.6) -- (0,4.2) node[above] {$y$};\n  \\draw[domain=-3:3.1, smooth, samples=100] plot ({\\x}, {exp(ln(2)*\\x)-5});\n  \\draw[dashed] (-3,-5) -- (4.5,-5) node[right] {$y=-5$};\n  \\fill (0,-4) circle (1.5pt) node[left] {$(0,-4)$};\n  \\fill (2.322,0) circle (1.5pt) node[below] {$2.32$};\n\\end{tikzpicture}";

export const AS1ExponentialsLogarithmsQuestionsAS1LogarithmsAndExponentialsQ013TikZ001: React.FC = () => (
  <DiagramPanel title={"Mark scheme sketch of $y=2^x-5$"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-primary/20 bg-card p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-muted-foreground">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-foreground">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
