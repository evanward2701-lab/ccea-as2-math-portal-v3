import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=0.8]\n  % Axes\n  \\draw[->] (0,0) -- (6.5,0) node[below right] {$r$ (term index)};\n  \\draw[->] (0,0) -- (0,6.5) node[above left] {Exponent};\n  % Lines representing exponents\n  \\draw[thick,blue] (0,6) -- (6,0) node[right,blue] {$a^{\\,n-r}$ (exponent of $a$)};\n  \\draw[thick,red] (0,0) -- (6,6) node[right,red] {$b^{\\,r}$ (exponent of $b$)};\n  % Tick marks on r-axis\n  \\foreach \\x in {0,1,2,3,4,5,6} {\n    \\draw (\\x,0.1) -- (\\x,-0.1) node[below] {$\\x$};\n  }\n  % Tick marks on exponent axis\n  \\foreach \\y in {0,1,2,3,4,5,6} {\n    \\draw (0.1,\\y) -- (-0.1,\\y) node[left] {$\\y$};\n  }\n  % Annotation for n\n  \\node at (6.3,6.3) {$n$};\n\\end{tikzpicture}";

export const AS1BinomialExpansionLessonTIKZ001: React.FC = () => (
  <DiagramPanel title={"Exponent Pattern in $(a+b)^n$"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-primary/20 bg-card p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-muted-foreground">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-foreground">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
