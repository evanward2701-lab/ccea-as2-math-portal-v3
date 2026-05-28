import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=0.9]\n  \\coordinate (O) at (0,0);\n  \\coordinate (B) at (-1.05,1.05);\n  \\coordinate (A) at (1.7,3.8);\n\n  \\draw[thick] (O) circle (1.5);\n  \\draw[thick] (-2.2,-0.15)--(A);\n  \\draw[thick] (A)--(B);\n  \\fill (B) circle (2pt);\n  \\node[left] at (B) {$B$};\n  \\node[above] at (A) {$A$};\n  \\node[below] at (0,-1.9) {Fig. 3};\n\\end{tikzpicture}";

export const AS1CoordinateGeometryQuestionsAS1CoordinateGeometryCircleQ016TikZ001: React.FC = () => (
  <DiagramPanel title={"Tangent from external point to circle"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-zinc-800 bg-zinc-950/70 p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-zinc-500">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-zinc-300">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
