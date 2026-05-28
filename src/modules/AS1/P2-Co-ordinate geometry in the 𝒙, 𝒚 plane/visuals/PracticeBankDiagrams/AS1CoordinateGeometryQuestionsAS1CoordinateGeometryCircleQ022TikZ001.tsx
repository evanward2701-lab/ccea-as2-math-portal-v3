import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=0.75]\n  \\coordinate (C) at (0,0);\n  \\coordinate (A) at (-3.7,3.1);\n  \\coordinate (B) at (1.0,1.73);\n  \\coordinate (D) at (-1.73,-1.0);\n\n  \\draw[thick] (C) circle (2);\n  \\draw[thick] (A)--(B);\n  \\draw[thick] (A)--(D);\n  \\draw[dashed] (C)--(B);\n  \\draw[dashed] (C)--(D);\n\n  \\fill (A) circle (2pt) node[above left] {$A$};\n  \\fill (B) circle (2pt) node[right] {$B$};\n  \\fill (C) circle (2pt) node[below] {$C$};\n  \\fill (D) circle (2pt) node[left] {$D$};\n\n  \\node[below] at (0,-2.55) {Fig. 4};\n\\end{tikzpicture}";

export const AS1CoordinateGeometryQuestionsAS1CoordinateGeometryCircleQ022TikZ001: React.FC = () => (
  <DiagramPanel title={"Kite formed by two tangents from A"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-zinc-800 bg-zinc-950/70 p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-zinc-500">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-zinc-300">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
