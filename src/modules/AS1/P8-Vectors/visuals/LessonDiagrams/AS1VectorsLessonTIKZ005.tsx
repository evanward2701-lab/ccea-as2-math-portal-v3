import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[>=stealth,scale=0.8]\n  \\coordinate (A) at (0,0);\n  \\coordinate (B) at (3,-2);\n  \\coordinate (C) at (1,-5);\n  % vectors from A\n  \\draw[->,thick,blue] (A) -- (B) node[midway, above] {$\\mathbf{AB}$};\n  \\draw[->,thick,blue] (A) -- (C) node[midway, left] {$\\mathbf{AC}$};\n  % side BC\n  \\draw[dashed] (B) -- (C) node[midway, right] {$\\mathbf{BC}$};\n  % points\n  \\fill (A) circle (0.04) node[above left] {$A$};\n  \\fill (B) circle (0.04) node[right] {$B$};\n  \\fill (C) circle (0.04) node[below] {$C$};\n  % angle marker at A\n  \\draw (0.7,0) arc (0:-60:0.7);\n  \\node at (0.8,-0.2) {$\\theta$};\n\\end{tikzpicture}";

export const AS1VectorsLessonTIKZ005: React.FC = () => (
  <DiagramPanel title={"Triangle with Vectors"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-zinc-800 bg-zinc-950/70 p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-zinc-500">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-zinc-300">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
