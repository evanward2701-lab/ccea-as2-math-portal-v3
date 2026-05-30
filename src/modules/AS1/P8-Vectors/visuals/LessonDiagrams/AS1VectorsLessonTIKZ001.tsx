import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=0.8]\n  % axes\n  \\draw[->] (-1,0) -- (4,0) node[right] {$x$};\n  \\draw[->] (0,-3) -- (0,2) node[above] {$y$};\n  % vector\n  \\draw[->,thick,blue] (0,0) -- (3,-2) node[right] {$\\mathbf{a}$};\n  % dashed projections\n  \\draw[dashed,gray] (3,-2) -- (3,0);\n  \\draw[dashed,gray] (3,-2) -- (0,-2);\n  % component labels\n  \\node at (3.3,-2.3) {$\\begin{pmatrix}3\\\\ -2\\end{pmatrix}$};\n\\end{tikzpicture}";

export const AS1VectorsLessonTIKZ001: React.FC = () => (
  <DiagramPanel title={"Drawing a Vector"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-primary/20 bg-card p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-muted-foreground">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-foreground">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
