import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=0.65]\n\\draw[->] (-5,0)--(2.3,0) node[right] {$x$};\n\\draw[->] (0,-0.5)--(0,4) node[above] {$y$};\n\\draw (-2,0.12)--(-2,-0.12) node[below] {$-2$};\n\\draw (0.12,1)--(-0.12,1) node[right] {$1$};\n\\draw (0.12,3)--(-0.12,3) node[right] {$3$};\n\\draw[thick] (-4,2.7)--(-2,1)--(1,3.4);\n\\node[above] at (-2,1) {A};\n\\node at (-0.7,-0.7) {Fig. 1};\n\\end{tikzpicture}";

export const AS1GraphTransformationsQuestionsAS1GraphTransformationsQ004TikZ001: React.FC = () => (
  <DiagramPanel title={"Source sketch for C1 June 2011 Question 3(c)"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-primary/20 bg-card p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-muted-foreground">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-foreground">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
