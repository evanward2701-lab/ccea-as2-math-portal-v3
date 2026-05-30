import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=0.65]\n\\draw[->] (-0.8,0)--(6,0) node[right] {$x$}; \\draw[->] (0,-0.5)--(0,7.5) node[above] {$y$};\n\\draw (3,0.1)--(3,-0.1) node[below] {$3$}; \\draw (0.1,6)--(-0.1,6) node[left] {$6$};\n\\draw[thick, domain=0.8:5.2, smooth, variable=\\x] plot ({\\x},{6-1.1*(\\x-3)^2});\n\\node[above right] at (3,6) {A $(3,6)$};\n\\node at (3,-0.9) {Fig. 1};\n\\end{tikzpicture}";

export const AS1GraphTransformationsQuestionsAS1GraphTransformationsQ014TikZ001: React.FC = () => (
  <DiagramPanel title={"Source sketch for C1 June 2018 Question 1"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-primary/20 bg-card p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-muted-foreground">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-foreground">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
