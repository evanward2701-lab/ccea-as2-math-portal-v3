import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=0.55]\n\\begin{scope}\n\\draw[->] (-2.2,0)--(2.8,0) node[right] {$x$}; \\draw[->] (0,-0.5)--(0,5.0) node[above] {$y$};\n\\draw (-1,0.1)--(-1,-0.1) node[below] {$-1$}; \\draw (1,0.1)--(1,-0.1) node[below] {$1$};\n\\draw (0.1,2)--(-0.1,2) node[left] {$2$}; \\draw (0.1,4)--(-0.1,4) node[left] {$4$};\n\\draw[thick] (-2,2)--(-1,2)--(0,4)--(1,2)--(2.6,2);\n\\node at (0,-1.0) {Fig. 2};\n\\end{scope}\n\\begin{scope}[xshift=7cm]\n\\draw[->] (-0.5,0)--(3.3,0) node[right] {$x$}; \\draw[->] (0,-0.5)--(0,5.0) node[above] {$y$};\n\\draw (2,0.1)--(2,-0.1) node[below] {$2$}; \\draw (0.1,2)--(-0.1,2) node[left] {$2$}; \\draw (0.1,4)--(-0.1,4) node[left] {$4$};\n\\draw[thick] (-0.4,2)--(0,2)--(1,4)--(2,2)--(3.0,2);\n\\node at (1.5,-1.0) {Fig. 3};\n\\end{scope}\n\\begin{scope}[yshift=-7cm]\n\\draw[->] (-2.2,0)--(2.8,0) node[right] {$x$}; \\draw[->] (0,-4.8)--(0,1.0) node[above] {$y$};\n\\draw (-1,0.1)--(-1,-0.1) node[above] {$-1$}; \\draw (1,0.1)--(1,-0.1) node[above] {$1$};\n\\draw (0.1,-2)--(-0.1,-2) node[right] {$-2$}; \\draw (0.1,-4)--(-0.1,-4) node[right] {$-4$};\n\\draw[thick] (-2,-2)--(-1,-2)--(0,-4)--(1,-2)--(2.6,-2);\n\\node at (0,-5.3) {Fig. 4};\n\\end{scope}\n\\end{tikzpicture}";

export const AS1GraphTransformationsQuestionsAS1GraphTransformationsQ008TikZ001: React.FC = () => (
  <DiagramPanel title={"Source sketch for C1 June 2013 Question 2"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-zinc-800 bg-zinc-950/70 p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-zinc-500">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-zinc-300">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
