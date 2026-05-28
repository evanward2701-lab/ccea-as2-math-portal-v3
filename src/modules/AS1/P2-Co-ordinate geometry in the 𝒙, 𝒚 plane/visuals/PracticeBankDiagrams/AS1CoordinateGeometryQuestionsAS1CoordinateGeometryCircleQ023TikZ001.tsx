import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=1.1]\n  \\coordinate (L) at (0,0);\n  \\coordinate (S) at (0,1);\n  \\draw[thick] (L) circle (2);\n  \\draw[thick] (S) circle (1);\n  \\fill (L) circle (1.5pt);\n  \\fill (S) circle (1.5pt);\n  \\node[below] at (0,-2.35) {Fig. 1};\n\\end{tikzpicture}";

export const AS1CoordinateGeometryQuestionsAS1CoordinateGeometryCircleQ023TikZ001: React.FC = () => (
  <DiagramPanel title={"Pendant modelled by two touching circles"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-zinc-800 bg-zinc-950/70 p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-zinc-500">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-zinc-300">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
