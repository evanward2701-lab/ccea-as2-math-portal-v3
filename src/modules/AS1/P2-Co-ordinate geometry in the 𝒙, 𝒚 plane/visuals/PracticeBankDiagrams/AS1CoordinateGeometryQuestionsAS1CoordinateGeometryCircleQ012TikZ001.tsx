import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=0.8]\n  \\coordinate (A) at (0,0);\n  \\coordinate (B) at (3.2,0.5);\n  \\coordinate (C) at (5.3,2.8);\n  \\coordinate (D) at (2.1,2.3);\n  \\coordinate (O) at ($(A)!0.5!(C)$);\n\n  \\draw[thick] (A)--(B)--(C)--(D)--cycle;\n  \\draw[dashed] (A)--(C);\n  \\draw[dashed] (B)--(D);\n\n  % right angle marker near intersection\n  \\draw ($(O)+(0.16,0.05)$)--($(O)+(0.05,0.22)$)--($(O)+(-0.11,0.12)$);\n\n  \\node[below left] at (A) {$A$};\n  \\node[below right] at (B) {$B$};\n  \\node[above right] at (C) {$C$};\n  \\node[above left] at (D) {$D$};\n  \\node[below] at (2.6,-0.45) {Fig. 3};\n\\end{tikzpicture}";

export const AS1CoordinateGeometryQuestionsAS1CoordinateGeometryCircleQ012TikZ001: React.FC = () => (
  <DiagramPanel title={"Rhombus ABCD with perpendicular diagonals"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-zinc-800 bg-zinc-950/70 p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-zinc-500">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-zinc-300">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
