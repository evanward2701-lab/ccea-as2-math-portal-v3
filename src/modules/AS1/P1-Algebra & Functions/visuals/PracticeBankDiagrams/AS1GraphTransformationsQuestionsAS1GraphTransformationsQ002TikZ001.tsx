import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=0.62]\n\\draw[->] (-2,0)--(8,0) node[right] {$x$};\n\\draw[->] (0,-2.2)--(0,6.0) node[above] {$y$};\n\\draw (5,0.12)--(5,-0.12) node[below] {$5$};\n\\draw (0.12,4)--(-0.12,4) node[left] {$4$};\n\\draw[thick, domain=-1.3:7, smooth, variable=\\x] plot ({\\x},{4.9-0.12*(\\x+1)^2});\n\\fill (5,4) circle (2pt) node[above right] {A};\n\\node at (3.5,-1.2) {Fig. 1};\n\\end{tikzpicture}";

export const AS1GraphTransformationsQuestionsAS1GraphTransformationsQ002TikZ001: React.FC = () => (
  <DiagramPanel title={"Source sketch for C1 June 2010 Question 3"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-primary/20 bg-card p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-muted-foreground">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-foreground">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
