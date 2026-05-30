import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=0.85]\n  \\coordinate (A) at (0,0);\n  \\coordinate (B) at (1.0,2.2);\n  \\coordinate (C) at (5.0,1.9);\n  \\coordinate (D) at (6.4,-1.0);\n  \\draw[thick] (A)--(B)--(C)--(D)--cycle;\n  \\draw[thick] (A)--(C);\n  \\draw[dashed,<->] (-0.35,0.1)--(0.7,2.3) node[midway,left] {150 m};\n  \\draw[dashed,<->] (5.25,1.85)--(6.65,-0.9) node[midway,right] {200 m};\n  \\draw[dashed,<->] (-0.1,-0.4)--(6.3,-1.35) node[midway,below] {300 m};\n  \\node[left] at (A) {$A$};\n  \\node[above] at (B) {$B$};\n  \\node[right] at (C) {$C$};\n  \\node[right] at (D) {$D$};\n  \\draw (B)+(0.55,-0.2) arc (-15:-120:0.55);\n  \\node at (1.55,1.55) {$120^\\circ$};\n  \\draw (C)+(-0.75,-0.05) arc (183:220:0.75);\n  \\node at (4.35,1.65) {$35^\\circ$};\n  \\node at (3.1,-1.75) {Fig. 2};\n\\end{tikzpicture}";

export const AS1TrigonometryQuestionsAS1TrigonometryQ003TikZ001: React.FC = () => (
  <DiagramPanel title={"Field ABCD plan"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-primary/20 bg-card p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-muted-foreground">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-foreground">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
