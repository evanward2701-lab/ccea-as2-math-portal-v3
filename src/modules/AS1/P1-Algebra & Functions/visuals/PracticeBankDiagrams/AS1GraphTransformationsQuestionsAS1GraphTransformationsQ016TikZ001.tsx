import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=0.65]\n\\draw[->] (-3.2,0)--(4,0) node[right] {$x$}; \\draw[->] (0,-0.5)--(0,5.2) node[above] {$y$};\n\\draw[thick, domain=-3:2.1, smooth, variable=\\x] plot ({\\x},{exp(0.55*\\x)});\n\\fill (0,1) circle (2pt) node[below right] {A $(0,1)$};\n\\node[right] at (2,3.4) {$y=f(x)$};\n\\node[below left] at (0,0) {O};\n\\node at (0,-0.9) {Fig. 1};\n\\end{tikzpicture}";

export const AS1GraphTransformationsQuestionsAS1GraphTransformationsQ016TikZ001: React.FC = () => (
  <DiagramPanel title={"Source sketch for AS1 (new spec) June 2019 Question 2"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-primary/20 bg-card p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-muted-foreground">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-foreground">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
