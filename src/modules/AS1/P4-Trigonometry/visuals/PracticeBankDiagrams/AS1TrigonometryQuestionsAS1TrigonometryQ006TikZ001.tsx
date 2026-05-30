import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=0.8,>=latex]\n  \\draw[->] (0,-2.2) -- (0,2.4) node[above] {$A$};\n  \\draw[->] (0,0) -- (7.5,0) node[right] {$t$};\n  \\draw[domain=0:6.8,samples=160,thick] plot(\\x,{1.7*cos(90*\\x/5)});\n  \\node[left] at (0,1.7) {$6$};\n  \\node[left] at (0,-1.7) {$-6$};\n  \\node[below] at (1.25,0) {$5$};\n  \\node at (4,-2.35) {Fig. 4};\n\\end{tikzpicture}";

export const AS1TrigonometryQuestionsAS1TrigonometryQ006TikZ001: React.FC = () => (
  <DiagramPanel title={"Sound-wave graph"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-primary/20 bg-card p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-muted-foreground">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-foreground">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
