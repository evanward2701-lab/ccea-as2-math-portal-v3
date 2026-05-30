import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=0.85]\n  \\coordinate (B) at (0,0);\n  \\coordinate (A) at (2.0,0.1);\n  \\coordinate (C) at (1.1,3.0);\n  \\coordinate (D) at (3.8,-2.0);\n  \\draw[thick] (B)--(A)--(D)--(C)--(B);\n  \\draw[thick] (A)--(C);\n  \\node[left] at (B) {$B$};\n  \\node[right] at (A) {$A$};\n  \\node[above] at (C) {$C$};\n  \\node[below] at (D) {$D$};\n  \\node[left] at ($(B)!0.5!(C)$) {6.9};\n  \\node[below] at ($(B)!0.5!(A)$) {3.5};\n  \\node[right] at ($(C)!0.5!(D)$) {11.6};\n  \\draw (D)+(-0.55,0.15) arc (165:120:0.6);\n  \\node at (3.35,-1.35) {$28^\\circ$};\n  \\node[right] at (4.2,1.6) {diagram\\\\not drawn\\\\accurately};\n  \\node at (2.2,-2.6) {Fig. 2};\n\\end{tikzpicture}";

export const AS1TrigonometryQuestionsAS1TrigonometryQ021TikZ001: React.FC = () => (
  <DiagramPanel title={"Toy aeroplane wing diagram"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-primary/20 bg-card p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-muted-foreground">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-foreground">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
