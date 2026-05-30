import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=0.75]\n  \\draw[->] (-4.2,0) -- (4.2,0) node[right] {$x$};\n  \\draw[->] (0,-4.2) -- (0,4.2) node[above] {$y$};\n  \\draw[thick, domain=-3.3:3.8, samples=200, smooth]\n    plot (\\x, {0.18*(\\x-3)*(\\x+1)^2});\n  \\draw (-1,0) -- (-1,0.12);\n  \\node[above] at (-1,0.05) {$-1$};\n  \\draw (3,0) -- (3,-0.12);\n  \\node[below] at (3,-0.05) {$3$};\n  \\node[below] at (0,-4.2) {Fig. 2};\n\\end{tikzpicture}";

export const AS1CurveSketchingQuestionsAS1CurveSketchingQ003TikZ001: React.FC = () => (
  <DiagramPanel title={"Fig. 2 cubic curve for C1 June 2011 Question 5"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-primary/20 bg-card p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-muted-foreground">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-foreground">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
