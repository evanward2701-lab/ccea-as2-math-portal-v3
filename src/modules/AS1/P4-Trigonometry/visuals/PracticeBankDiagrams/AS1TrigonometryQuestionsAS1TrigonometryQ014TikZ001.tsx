import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=0.9]\n  \\coordinate (A) at (0,0);\n  \\coordinate (B) at (4.9,0);\n  \\coordinate (E) at (6.2,0);\n  \\coordinate (D) at (4.4,3.1);\n  \\coordinate (C) at (5.7,1.8);\n  \\draw[thick] (A)--(D)--(C)--(B)--cycle;\n  \\draw[thick] (D)--(B);\n  \\draw[dashed] (A)--(E);\n  \\node[below left] at (A) {$A$};\n  \\node[below] at (B) {$B$};\n  \\node[right] at (C) {$C$};\n  \\node[above] at (D) {$D$};\n  \\node[right] at (E) {$E$};\n  \\node[below] at ($(A)!0.5!(B)$) {4.9 km};\n  \\node[left] at ($(A)!0.5!(D)$) {5.4 km};\n  \\node[right] at ($(B)!0.5!(C)$) {2.1 km};\n  \\draw (A)+(0.9,0) arc (0:35:0.9);\n  \\node at (1.15,0.35) {$35^\\circ$};\n  \\draw (B)+(0.75,0) arc (0:50:0.75);\n  \\node at (5.35,0.55) {$50^\\circ$};\n  \\node at (3.1,-0.8) {Fig. 1};\n\\end{tikzpicture}";

export const AS1TrigonometryQuestionsAS1TrigonometryQ014TikZ001: React.FC = () => (
  <DiagramPanel title={"Waste ground ABCD sketch"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-primary/20 bg-card p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-muted-foreground">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-foreground">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
