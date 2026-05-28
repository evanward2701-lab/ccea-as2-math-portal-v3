import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=0.6]\n\\draw[->] (-2,0)--(5,0) node[right] {$x$};\n\\draw[->] (0,-1)--(0,4.8) node[above] {$y$};\n\\draw (1,0.12)--(1,-0.12) node[below] {$1$};\n\\draw (0.12,2)--(-0.12,2) node[left] {$2$};\n\\draw[thick] (-1.2,3.5)--(1,2)--(4.5,2);\n\\node[above] at (1,2) {A};\n\\node at (2,-1.0) {Fig. 1};\n\\end{tikzpicture}";

export const AS1GraphTransformationsQuestionsAS1GraphTransformationsQ006TikZ001: React.FC = () => (
  <DiagramPanel title={"Source sketch for C1 June 2012 Question 1(b)"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-zinc-800 bg-zinc-950/70 p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-zinc-500">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-zinc-300">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
