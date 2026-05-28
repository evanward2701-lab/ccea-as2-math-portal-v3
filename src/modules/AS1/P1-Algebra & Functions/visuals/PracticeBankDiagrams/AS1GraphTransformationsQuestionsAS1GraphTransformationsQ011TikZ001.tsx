import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=0.62]\n\\draw[->] (-1,0)--(5.2,0) node[right] {$x$}; \\draw[->] (0,-0.5)--(0,5.4) node[above] {$y$};\n\\draw (2,0.1)--(2,-0.1) node[below] {$2$}; \\draw (0.1,4)--(-0.1,4) node[left] {$4$};\n\\draw[thick] (1.0,5.0)--(2,4)--(4.5,4);\n\\node[below] at (2,4) {T};\n\\node at (2.4,-0.9) {Fig. 1};\n\\end{tikzpicture}";

export const AS1GraphTransformationsQuestionsAS1GraphTransformationsQ011TikZ001: React.FC = () => (
  <DiagramPanel title={"Source sketch for C1 June 2015 Question 1"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-zinc-800 bg-zinc-950/70 p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-zinc-500">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-zinc-300">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
