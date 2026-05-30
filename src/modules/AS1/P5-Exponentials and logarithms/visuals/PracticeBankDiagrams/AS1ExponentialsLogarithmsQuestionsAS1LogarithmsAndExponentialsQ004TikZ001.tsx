import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=0.8, >=Stealth]\n  \\draw[->] (-3.2,0) -- (3.2,0) node[right] {$x$};\n  \\draw[->] (0,-0.3) -- (0,5.5) node[above] {$y$};\n  \\draw[domain=-3:1.78, smooth, samples=80] plot ({\\x}, {0.45*exp(ln(3)*\\x)}) node[right] {$y=3^x$};\n  \\draw[domain=-3:0.1, smooth, samples=80] plot ({\\x}, {0.45*exp(ln(3)*(\\x+2))}) node[above right] {$y=3^{x+2}$};\n  \\draw (-0.08,0.45) -- (0.08,0.45) node[right] {$1$};\n  \\draw (-0.08,4.05) -- (0.08,4.05) node[right] {$9$};\n  \\draw (-2,0.08) -- (-2,-0.08) node[below] {$-2$};\n\\end{tikzpicture}";

export const AS1ExponentialsLogarithmsQuestionsAS1LogarithmsAndExponentialsQ004TikZ001: React.FC = () => (
  <DiagramPanel title={"Mark scheme sketch of $y=3^x$ and $y=3^{x+2}$"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-primary/20 bg-card p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-muted-foreground">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-foreground">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
