import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=0.55]\n  \\coordinate (O) at (-3,2);\n  \\coordinate (A) at (0,6);\n  \\coordinate (B) at (0,-2);\n  \\coordinate (C) at (1,5);\n\n  \\draw[thick] (O) circle (5);\n  \\fill (O) circle (2pt) node[below] {Mast};\n  \\fill (A) circle (2pt) node[above right] {$A$};\n  \\fill (B) circle (2pt) node[below right] {$B$};\n  \\fill (C) circle (2pt) node[right] {$C$};\n\n  \\node[below] at (-3,-4) {Fig. 7};\n\\end{tikzpicture}";

export const AS1CoordinateGeometryQuestionsAS1CoordinateGeometryCircleQ018TikZ001: React.FC = () => (
  <DiagramPanel title={"Radio mast coverage circle"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-primary/20 bg-card p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-muted-foreground">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-foreground">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
