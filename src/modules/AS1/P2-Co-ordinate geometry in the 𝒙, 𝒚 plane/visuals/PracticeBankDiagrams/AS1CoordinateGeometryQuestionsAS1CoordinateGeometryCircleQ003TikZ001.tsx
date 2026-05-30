import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=0.85]\n  \\coordinate (A) at (0,3);\n  \\coordinate (B) at (3.2,2.4);\n  \\coordinate (C) at (3.5,0.6);\n  \\coordinate (D) at (-1.2,0);\n\n  \\draw[thick] (A)--(B)--(C)--(D)--cycle;\n  \\draw[dashed] (A)--(C);\n  \\draw[dashed] (B)--(D);\n\n  \\node[above] at (A) {$A$};\n  \\node[right] at (B) {$B$};\n  \\node[right] at (C) {$C$};\n  \\node[left] at (D) {$D$};\n  \\node[below] at (1.5,-0.35) {Fig. 1};\n\\end{tikzpicture}";

export const AS1CoordinateGeometryQuestionsAS1CoordinateGeometryCircleQ003TikZ001: React.FC = () => (
  <DiagramPanel title={"Kite with perpendicular diagonals"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-primary/20 bg-card p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-muted-foreground">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-foreground">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
