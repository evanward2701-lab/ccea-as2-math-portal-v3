import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=0.9]\n  \\draw[->] (-0.6,0) -- (6.0,0) node[right] {$x$};\n  \\draw[->] (0,-3.2) -- (0,3.0) node[above] {$y$};\n  \\fill[gray!25] (0,0) -- plot[domain=0:4, samples=80] (\\x,{(4*\\x*\\x-\\x*\\x*\\x)/8}) -- (4,0) -- cycle;\n  \\fill[gray!25] (4,0) -- plot[domain=4:5.33, samples=60] (\\x,{(4*\\x*\\x-\\x*\\x*\\x)/8}) -- (5.33,0) -- cycle;\n  \\draw[domain=0:5.6, samples=120, smooth, thick] plot (\\x,{(4*\\x*\\x-\\x*\\x*\\x)/8});\n  \\draw[dashed] (5.33,0) -- (5.33,{(4*5.33*5.33-5.33*5.33*5.33)/8});\n  \\node[below] at (0,0) {$0$};\n  \\node[below] at (4,0) {$4$};\n  \\node[below] at (5.33,0) {$a$};\n  \\node[above right] at (2.1,2.2) {$y=4x^2-x^3$};\n  \\node[below] at (2.6,-3.0) {Fig. 2};\n\\end{tikzpicture}";

export const AS1IntegrationQuestionsAS1IntegrationQ002TikZ001: React.FC = () => (
  <DiagramPanel title={"Shaded regions for $y=4x^2-x^3$"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-primary/20 bg-card p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-muted-foreground">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-foreground">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
