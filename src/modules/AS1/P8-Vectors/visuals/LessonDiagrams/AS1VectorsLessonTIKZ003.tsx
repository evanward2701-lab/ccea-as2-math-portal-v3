import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=0.8]\n  \\draw[->] (0,0) -- (4,0) node[right] {$x$};\n  \\draw[->] (0,0) -- (0,3) node[above] {$y$};\n  % generic vector a\n  \\draw[->,thick,blue] (0,0) -- (3,2) node[right] {$\\mathbf{a}$};\n  % projections\n  \\draw[dashed,gray] (3,2) -- (3,0) node[below] {$x$};\n  \\draw[dashed,gray] (3,2) -- (0,2) node[left] {$y$};\n  % angle arc\n  \\draw (0.8,0) arc (0:33.69:0.8);\n  \\node at (0.95,0.3) {$\\theta$};\n  % vector label\n  \\node at (3.4,2.2) {$\\begin{pmatrix}x\\\\y\\end{pmatrix}$};\n\\end{tikzpicture}";

export const AS1VectorsLessonTIKZ003: React.FC = () => (
  <DiagramPanel title={"General Vector with Components and Angle"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-primary/20 bg-card p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-muted-foreground">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-foreground">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
