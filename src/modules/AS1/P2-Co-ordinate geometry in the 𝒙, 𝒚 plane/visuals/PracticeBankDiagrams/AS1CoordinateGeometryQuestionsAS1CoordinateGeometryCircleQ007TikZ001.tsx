import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=0.9]\n  \\coordinate (A) at (0,3.2);\n  \\coordinate (B) at (-2,0);\n  \\coordinate (C) at (2,0);\n  \\coordinate (D) at (0,0);\n\n  \\draw[thick] (A)--(B)--(C)--cycle;\n  \\draw[dashed] (A)--(D);\n\n  % equal-side tick marks\n  \\draw ($(A)!0.5!(B)+(-0.08,0.08)$) -- ($(A)!0.5!(B)+(0.08,-0.08)$);\n  \\draw ($(A)!0.5!(C)+(-0.08,-0.08)$) -- ($(A)!0.5!(C)+(0.08,0.08)$);\n\n  \\node[above] at (A) {$A$};\n  \\node[left] at (B) {$B$};\n  \\node[right] at (C) {$C$};\n  \\node[below] at (D) {$D$};\n  \\node[below] at (0,-0.55) {Fig. 1};\n\\end{tikzpicture}";

export const AS1CoordinateGeometryQuestionsAS1CoordinateGeometryCircleQ007TikZ001: React.FC = () => (
  <DiagramPanel title={"Isosceles triangle logo"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-zinc-800 bg-zinc-950/70 p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-zinc-500">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-zinc-300">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
