import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=0.6]\n\\draw[->] (-1,0)--(7,0) node[right] {$x$};\n\\draw[->] (0,-1)--(0,5.6) node[above] {$y$};\n\\draw (2,0.12)--(2,-0.12) node[below] {$2$};\n\\draw (0.12,4)--(-0.12,4) node[left] {$4$};\n\\draw[thick] (0,0)--(2,4)--(6.7,4);\n\\node[above] at (2,4) {P};\n\\node at (3.2,-1.0) {Fig. 1};\n\\end{tikzpicture}";

export const AS1GraphTransformationsQuestionsAS1GraphTransformationsQ005TikZ001: React.FC = () => (
  <DiagramPanel title={"Source sketch for C1 January 2012 Question 2"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-zinc-800 bg-zinc-950/70 p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-zinc-500">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-zinc-300">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
