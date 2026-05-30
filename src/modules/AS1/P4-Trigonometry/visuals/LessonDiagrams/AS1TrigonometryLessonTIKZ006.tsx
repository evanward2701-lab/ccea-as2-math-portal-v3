import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=1]\n\\coordinate (A) at (0,0);\n\\coordinate (B) at (4,0);\n\\coordinate (C) at (1.5,2.2);\n\\draw[thick] (A)--(B)--(C)--cycle;\n% side labels\n\\node[below] at (2,-0.25) {$c$};\n\\node[left] at (0.5,1.1) {$b$};\n\\node[right] at (2.7,1.1) {$a$};\n% included angle A\n\\draw (A)+(0.5,0) arc(0:atan2(2.2,1.5):0.5);\n\\node at (0.6,0.2) {$A$};\n\\end{tikzpicture}";

export const AS1TrigonometryLessonTIKZ006: React.FC = () => (
  <DiagramPanel title={"Triangle highlighting the cosine rule"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-primary/20 bg-card p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-muted-foreground">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-foreground">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
