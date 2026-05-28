import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=0.8]\n  \\coordinate (B) at (0,0);\n  \\coordinate (A) at (2.2,2.2);\n  \\coordinate (D) at (-2.2,-2.2);\n\n  \\draw[thick] (B) circle (3.11);\n  \\draw[thick] (D)--(A);\n  \\fill (B) circle (2pt) node[left] {$B$};\n  \\fill (A) circle (2pt) node[above right] {$A$};\n  \\fill (D) circle (2pt) node[below left] {$D$};\n\n  \\node[below] at (0,-3.55) {Fig. 1};\n\\end{tikzpicture}";

export const AS1CoordinateGeometryQuestionsAS1CoordinateGeometryCircleQ020TikZ001: React.FC = () => (
  <DiagramPanel title={"Circle with AD as diameter and B as centre"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-zinc-800 bg-zinc-950/70 p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-zinc-500">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-zinc-300">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
