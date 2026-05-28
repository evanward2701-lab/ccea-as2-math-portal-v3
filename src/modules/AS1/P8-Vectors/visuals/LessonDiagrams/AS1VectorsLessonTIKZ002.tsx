import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[>=stealth]\n  % define points\n  \\coordinate (P) at (0,0);\n  \\coordinate (Q) at (2,1);\n  \\coordinate (S) at (5,1);\n  \\coordinate (R) at (4,-1);\n  % arrows representing vectors\n  \\draw[->] (P) -- (Q) node[midway, above] {$\\mathbf{a}$};\n  \\draw[->] (Q) -- (S) node[midway, above] {$\\mathbf{b}$};\n  \\draw[->] (S) -- (R) node[midway, right] {$\\mathbf{c}$};\n  \\draw[->] (R) -- (P) node[midway, below] {$\\mathbf{d}$};\n  % optional diagonal\n  \\draw[->,dashed] (Q) -- (R) node[midway, above left] { };\n  % point labels\n  \\fill (P) circle (0.06) node[below left] {$P$};\n  \\fill (Q) circle (0.06) node[above] {$Q$};\n  \\fill (S) circle (0.06) node[above] {$S$};\n  \\fill (R) circle (0.06) node[below] {$R$};\n\\end{tikzpicture}";

export const AS1VectorsLessonTIKZ002: React.FC = () => (
  <DiagramPanel title={"Route of Vectors"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-zinc-800 bg-zinc-950/70 p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-zinc-500">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-zinc-300">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
