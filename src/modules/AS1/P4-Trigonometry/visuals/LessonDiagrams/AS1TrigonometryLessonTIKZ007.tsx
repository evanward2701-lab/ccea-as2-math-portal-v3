import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=1]\n\\coordinate (A) at (0,0);\n\\coordinate (B) at (4,0);\n\\coordinate (C) at (1,2);\n\\draw[thick] (A)--(B)--(C)--cycle;\n% side labels\n\\node[below] at (2,-0.25) {$c$};\n\\node[left] at (0.3,1) {$b$};\n\\node[right] at (2.6,1) {$a$};\n% included angle C\n\\draw (C)+(-0.35,-0.25) arc(-150:-90:0.5);\n\\node at (1.3,1.4) {$C$};\n% altitude\n\\draw[dashed] (C) -- (1,0);\n\\node[right] at (1,1) {$h$};\n\\end{tikzpicture}";

export const AS1TrigonometryLessonTIKZ007: React.FC = () => (
  <DiagramPanel title={"Triangle for the area formula"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-primary/20 bg-card p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-muted-foreground">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-foreground">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
