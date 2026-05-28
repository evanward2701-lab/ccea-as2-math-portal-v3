import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=0.65]\n\\draw[->] (-2,0)--(5,0) node[right] {$x$};\n\\draw[->] (0,-2)--(0,3.3) node[above] {$y$};\n\\draw (3,0.12)--(3,-0.12) node[below] {$3$};\n\\draw (0.12,2)--(-0.12,2) node[left] {$2$};\n\\draw[thick] (-1.5,2)--(3,2)--(4.6,-1.2);\n\\node[above] at (3,2) {A};\n\\node at (1.8,-1.5) {Fig. 2};\n\\end{tikzpicture}";

export const AS1GraphTransformationsQuestionsAS1GraphTransformationsQ003TikZ001: React.FC = () => (
  <DiagramPanel title={"Source sketch for C1 January 2011 Question 5(a)"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-zinc-800 bg-zinc-950/70 p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-zinc-500">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-zinc-300">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
