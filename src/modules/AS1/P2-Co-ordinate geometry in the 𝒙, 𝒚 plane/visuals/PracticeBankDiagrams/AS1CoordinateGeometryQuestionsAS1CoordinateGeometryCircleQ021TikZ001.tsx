import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=0.35]\n  % axes\n  \\draw[->] (-10,0)--(14,0) node[right] {$x$};\n  \\draw[->] (0,-6)--(0,14) node[above] {$y$};\n\n  % circle A\n  \\coordinate (OA) at (6,6);\n  \\draw[thick] (OA) circle (6);\n  \\fill (OA) circle (2pt);\n  \\node[above right] at (10,11) {$A$};\n\n  % circle B\n  \\coordinate (OB) at (-6,-3);\n  \\draw[thick] (OB) circle (2);\n  \\fill (OB) circle (2pt);\n  \\node[left] at (-8,-3) {$B$};\n\n  % illustrative chain/tangent lines\n  \\draw[dashed] (-8.2,-1.0)--(0,8.0);\n  \\draw[dashed] (-4.5,-4.5)--(6,0.0);\n\n  \\node[below] at (1,-6.5) {Fig. 4};\n\\end{tikzpicture}";

export const AS1CoordinateGeometryQuestionsAS1CoordinateGeometryCircleQ021TikZ001: React.FC = () => (
  <DiagramPanel title={"Two sprockets modelled as circles"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-zinc-800 bg-zinc-950/70 p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-zinc-500">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-zinc-300">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
