import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=0.65]\n\\draw[->] (-1,0)--(5.2,0) node[right] {$x$};\n\\draw[->] (0,-0.5)--(0,3.5) node[above] {$y$};\n\\draw (3,0.12)--(3,-0.12) node[below] {$3$};\n\\draw (0.12,2)--(-0.12,2) node[left] {$2$};\n\\draw[thick] (0,1.2)--(3,2)--(4.0,1.4);\n\\node[above] at (3,2) {A};\n\\node at (2,-0.8) {Fig. 1};\n\\end{tikzpicture}";

export const AS1GraphTransformationsQuestionsAS1GraphTransformationsQ007TikZ001: React.FC = () => (
  <DiagramPanel title={"Source sketch for C1 January 2013 Question 2(a)"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-zinc-800 bg-zinc-950/70 p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-zinc-500">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-zinc-300">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
