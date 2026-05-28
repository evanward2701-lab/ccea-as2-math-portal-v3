import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=0.8]\n% vertices of the right‑angled triangle\n\\coordinate (A) at (0,0);\n\\coordinate (C) at (4,0);\n\\coordinate (B) at (4,3);\n% draw triangle\n\\draw[thick] (A)--(C)--(B)--cycle;\n% right angle symbol at C\n\\draw (C)+(0.3,0) -- ++(0,0.3) -- ++(-0.3,0);\n% side labels\n\\node at (2,0.3) {adjacent};\n\\node[rotate=90] at (4.3,1.5) {opposite};\n\\node[rotate= -35] at (2,1.7) {hypotenuse};\n% vertex labels\n\\node[below left] at (A) {$A$};\n\\node[below right] at (C) {$C$};\n\\node[above right] at (B) {$B$};\n% angle theta at A\n\\draw[->,>=latex] (A)+(0.8,0) arc (0:36.87:0.8);\n\\node at (0.6,0.2) {$\\theta$};\n\\end{tikzpicture}";

export const AS1TrigonometryLessonTIKZ001: React.FC = () => (
  <DiagramPanel title={"Right‑angled triangle definitions"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-zinc-800 bg-zinc-950/70 p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-zinc-500">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-zinc-300">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
