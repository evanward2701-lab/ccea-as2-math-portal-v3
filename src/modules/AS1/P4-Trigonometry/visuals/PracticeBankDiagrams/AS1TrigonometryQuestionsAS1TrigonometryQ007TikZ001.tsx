import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=0.95]\n  \\coordinate (A) at (0,0);\n  \\coordinate (B) at (3.2,0.15);\n  \\coordinate (C) at (6.0,2.2);\n  \\draw[thick] (A)--(B)--(C)--cycle;\n  \\draw[dashed,<->] (0.1,0.35)--(5.85,2.55) node[midway,above] {28};\n  \\draw[dashed,<->] (3.45,0.35)--(6.25,2.35) node[midway,right] {12};\n  \\node[below] at (A) {$A$};\n  \\node[below] at (B) {$B$};\n  \\node[above] at (C) {$C$};\n  \\draw (A)+(0.75,0.02) arc (2:22:0.75);\n  \\node at (0.95,0.25) {$22^\\circ$};\n  \\node at (3.2,-0.7) {Fig. 5};\n\\end{tikzpicture}";

export const AS1TrigonometryQuestionsAS1TrigonometryQ007TikZ001: React.FC = () => (
  <DiagramPanel title={"Triangle ABC for ambiguous sine rule"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-primary/20 bg-card p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-muted-foreground">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-foreground">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
