import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=0.75]\n  \\draw[->] (-1.0,0) -- (4.6,0) node[right] {$x$};\n  \\draw[->] (0,-5.2) -- (0,1.2) node[above] {$y$};\n  \\draw[thick, domain=-0.35:4.2, samples=200, smooth]\n    plot (\\x, {-(\\x-2)^2});\n  \\fill (2,0) circle (1.5pt);\n  \\node[above] at (2,0.05) {$2$};\n  \\fill (0,-4) circle (1.5pt);\n  \\node[left] at (0,-4) {$-4$};\n  \\node[below] at (2.2,-5.1) {Fig. 2};\n\\end{tikzpicture}";

export const AS1CurveSketchingQuestionsAS1CurveSketchingQ004TikZ001: React.FC = () => (
  <DiagramPanel title={"Fig. 2 quadratic curve for C1 June 2014 Question 2(b)"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-zinc-800 bg-zinc-950/70 p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-zinc-500">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-zinc-300">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
