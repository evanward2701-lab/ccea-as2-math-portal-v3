import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=0.75]\n  % axes\n  \\draw[->] (-4.2,0)--(5.0,0) node[right] {$x$};\n  \\draw[->] (0,-4.2)--(0,4.4) node[above] {$y$};\n\n  % reciprocal curve y=3/x\n  \\draw[thick,domain=0.65:5,samples=100] plot (\\x,{3/\\x});\n  \\draw[thick,domain=-4:-0.65,samples=100] plot (\\x,{3/\\x});\n\n  % line y=x-2\n  \\draw[thick] (-2.2,-4.2)--(5,3);\n\n  % intersection points\n  \\fill (-1,-3) circle (2pt) node[left] {$A$};\n  \\fill (3,1) circle (2pt) node[above] {$B$};\n\n  \\node[below] at (0,-4.55) {Fig. 2};\n\\end{tikzpicture}";

export const AS1CoordinateGeometryQuestionsAS1CoordinateGeometryCircleQ014TikZ001: React.FC = () => (
  <DiagramPanel title={"Line and reciprocal curve intersections"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-primary/20 bg-card p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-muted-foreground">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-foreground">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
