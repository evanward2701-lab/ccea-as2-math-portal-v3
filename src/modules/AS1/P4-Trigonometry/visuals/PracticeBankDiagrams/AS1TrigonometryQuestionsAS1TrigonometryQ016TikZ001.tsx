import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=0.9,>=latex]\n  \\coordinate (B) at (0,0);\n  \\coordinate (R) at (3.2,-1.2);\n  \\coordinate (H) at (5.0,1.9);\n  \\draw[->] (B)--(0,2.0) node[above] {N};\n  \\draw[thick] (B)--(R)--(H)--cycle;\n  \\node[left] at (B) {Base};\n  \\node[below] at (R) {Rescue};\n  \\node[right] at (H) {Hospital};\n  \\node[below] at ($(B)!0.5!(R)$) {70};\n  \\node[right] at ($(R)!0.5!(H)$) {80};\n  \\node at (2.5,-1.8) {Fig. 2};\n\\end{tikzpicture}";

export const AS1TrigonometryQuestionsAS1TrigonometryQ016TikZ001: React.FC = () => (
  <DiagramPanel title={"Helicopter route diagram"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-zinc-800 bg-zinc-950/70 p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-zinc-500">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-zinc-300">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
