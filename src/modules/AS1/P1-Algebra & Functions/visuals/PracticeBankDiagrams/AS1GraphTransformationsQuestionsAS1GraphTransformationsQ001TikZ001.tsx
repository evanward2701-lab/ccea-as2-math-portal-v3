import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=0.65]\n\\draw[->] (-3,0)--(4.5,0) node[right] {$x$};\n\\draw[->] (0,-2)--(0,5.2) node[above] {$y$};\n\\draw (-1,0.12)--(-1,-0.12) node[below] {$-1$};\n\\draw (0.12,4)--(-0.12,4) node[left] {$4$};\n\\draw[thick] (-2.2,-1.4)--(-1,4)--(4,4);\n\\node[above left] at (-1,4) {A};\n\\node at (1.5,-1.0) {Fig. 1};\n\\end{tikzpicture}";

export const AS1GraphTransformationsQuestionsAS1GraphTransformationsQ001TikZ001: React.FC = () => (
  <DiagramPanel title={"Source sketch for C1 January 2010 Question 1"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-primary/20 bg-card p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-muted-foreground">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-foreground">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
