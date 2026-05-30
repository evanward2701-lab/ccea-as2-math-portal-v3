import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=0.65]\n\\draw[->] (-1,0)--(6,0) node[right] {$x$}; \\draw[->] (0,-0.8)--(0,4.6) node[above] {$y$};\n\\draw (3,0.1)--(3,-0.1) node[below] {$3$}; \\draw (0.1,1)--(-0.1,1) node[left] {$1$};\n\\draw[thick, domain=1.4:4.6, smooth, variable=\\x] plot ({\\x},{(\\x-3)^2+1});\n\\node[below right] at (3,1) {P};\n\\node at (3,-0.8) {Fig. 1};\n\\end{tikzpicture}";

export const AS1GraphTransformationsQuestionsAS1GraphTransformationsQ009TikZ001: React.FC = () => (
  <DiagramPanel title={"Source sketch for C1 January 2014 Question 1(a)"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-primary/20 bg-card p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-muted-foreground">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-foreground">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
