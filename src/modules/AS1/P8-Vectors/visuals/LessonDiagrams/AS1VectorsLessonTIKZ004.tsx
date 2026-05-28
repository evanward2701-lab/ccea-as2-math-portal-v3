import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[>=stealth,scale=0.8]\n  % vertices of a parallelogram\n  \\coordinate (O) at (0,0);\n  \\coordinate (A) at (3,0);\n  \\coordinate (B) at (0,3);\n  \\coordinate (C) at (3,3);\n  % points X and M\n  \\coordinate (X) at (0.75,2.25);\n  \\coordinate (M) at (1.5,3);\n  % draw parallelogram\n  \\draw[->] (O) -- (A) node[midway, below] {$\\mathbf{a}$};\n  \\draw[->] (O) -- (B) node[midway, left] {$\\mathbf{b}$};\n  \\draw (A) -- (C) -- (B) -- cycle;\n  % mark points\n  \\fill (O) circle (0.04) node[below left] {$O$};\n  \\fill (A) circle (0.04) node[below right] {$A$};\n  \\fill (B) circle (0.04) node[above left] {$B$};\n  \\fill (C) circle (0.04) node[above right] {$C$};\n  \\fill (X) circle (0.04) node[right] {$X$};\n  \\fill (M) circle (0.04) node[above] {$M$};\n  % ratio along AB\n  \\draw[dashed] (A) -- (X);\n  \\draw[dashed] (X) -- (B);\n  \\draw[->,thick] (A) -- (B) node[midway, above] {$3:1$};\n  % midpoint connections\n  \\draw[dashed] (B) -- (M);\n  \\draw[dashed] (M) -- (C);\n  % vectors XM and OC\n  \\draw[->,red,thick] (X) -- (M) node[midway,right] {$\\overrightarrow{XM}$};\n  \\draw[->,blue,thick] (O) -- (C) node[midway,above] {$\\overrightarrow{OC}$};\n\\end{tikzpicture}";

export const AS1VectorsLessonTIKZ004: React.FC = () => (
  <DiagramPanel title={"Parallelogram Ratio and Midpoint Proof"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-zinc-800 bg-zinc-950/70 p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-zinc-500">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-zinc-300">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
