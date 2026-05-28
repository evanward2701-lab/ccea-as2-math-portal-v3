import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=0.9,>=latex]\n  \\coordinate (H) at (0,0);\n  \\draw[->,thick] (H) -- (0,3) node[above] {N};\n  \\draw[dashed] (H) -- (0,-2.5);\n  \\draw[->,thick] (H) -- (1.6,2.5) node[right] {Ship D};\n  \\draw[->,thick] (H) -- (1.8,-1.9) node[right] {Ship C};\n  \\node[left] at (H) {Harbour};\n  \\draw (0,1.0) arc (90:60:1.0);\n  \\node at (0.42,1.05) {$30^\\circ$};\n  \\draw (0,-0.8) arc (-90:-50:0.8);\n  \\node at (0.45,-0.9) {$40^\\circ$};\n  \\node[below] at (0,-2.8) {Fig. 3};\n\\end{tikzpicture}";

export const AS1TrigonometryQuestionsAS1TrigonometryQ002TikZ001: React.FC = () => (
  <DiagramPanel title={"Ships C and D bearing diagram"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-zinc-800 bg-zinc-950/70 p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-zinc-500">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-zinc-300">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
