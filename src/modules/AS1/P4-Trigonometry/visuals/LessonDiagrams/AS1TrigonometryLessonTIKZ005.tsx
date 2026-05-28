import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=1]\n\\coordinate (A) at (0,0);\n\\coordinate (B) at (4,0);\n\\coordinate (C) at (1.5,2.4);\n\\draw[thick] (A)--(B)--(C)--cycle;\n% side labels (opposite vertices)\n\\node[below] at (2,-0.25) {$c$};        % side AB\n\\node[left] at (0.4,1.2) {$b$};         % side AC\n\\node[right] at (2.8,1.2) {$a$};        % side BC\n% vertex labels\n\\node[below left] at (A) {$A$};\n\\node[below right] at (B) {$B$};\n\\node[above] at (C) {$C$};\n\\end{tikzpicture}";

export const AS1TrigonometryLessonTIKZ005: React.FC = () => (
  <DiagramPanel title={"Generic triangle for the sine rule"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-zinc-800 bg-zinc-950/70 p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-zinc-500">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-zinc-300">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
