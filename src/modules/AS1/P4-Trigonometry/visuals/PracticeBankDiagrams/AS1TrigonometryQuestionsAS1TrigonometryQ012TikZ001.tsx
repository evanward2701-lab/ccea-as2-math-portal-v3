import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=0.85,>=latex]\n  \\coordinate (P) at (0,2.2);\n  \\coordinate (Q) at (4.1,1.4);\n  \\coordinate (R) at (2.4,-1.2);\n  \\draw[->] (P) -- +(0,2) node[above] {N};\n  \\draw[->] (Q) -- +(0,1.8) node[above] {N};\n  \\draw[thick] (P)--(Q)--(R)--cycle;\n  \\node[left] at (P) {$P$};\n  \\node[right] at (Q) {$Q$};\n  \\node[below] at (R) {$R$};\n  \\node[above] at ($(P)!0.5!(Q)$) {50};\n  \\node[right] at ($(Q)!0.55!(R)$) {40};\n  \\node at (2.3,-1.8) {Fig. 1};\n\\end{tikzpicture}";

export const AS1TrigonometryQuestionsAS1TrigonometryQ012TikZ001: React.FC = () => (
  <DiagramPanel title={"Ship route P-Q-R bearing diagram"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-primary/20 bg-card p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-muted-foreground">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-foreground">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
