import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=1.0]\n  \\coordinate (O) at (0,0);\n  \\coordinate (A) at (0,3);\n  \\coordinate (B) at (0,-3);\n  \\coordinate (S) at (2.6,-1.5);\n  \\coordinate (D) at (1.25,-0.72);\n  \\draw[thick] (O) circle (3);\n  \\draw[thick] (A)--(B);\n  \\draw[thick] (O)--(S);\n  \\draw[thick] (B)--(D);\n  \\draw[thick] (A)--(D);\n  \\node[above] at (A) {$A$};\n  \\node[below] at (B) {$B$};\n  \\node[left] at (O) {$O$};\n  \\node[right] at (D) {$D$};\n  \\node[right] at (S) {$S$};\n  \\draw (D)+(0.22,-0.12)--++(-0.12,-0.22)--++(-0.22,0.12);\n  \\draw (O)+(0,-0.75) arc (-90:-30:0.75);\n  \\node at (0.45,-0.7) {$\\theta$};\n  \\node at (0,-3.8) {Fig. 3};\n\\end{tikzpicture}";

export const AS1TrigonometryQuestionsAS1TrigonometryQ026TikZ001: React.FC = () => (
  <DiagramPanel title={"Circle with diameter AB and perpendicular foot D"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-zinc-800 bg-zinc-950/70 p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-zinc-500">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-zinc-300">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
