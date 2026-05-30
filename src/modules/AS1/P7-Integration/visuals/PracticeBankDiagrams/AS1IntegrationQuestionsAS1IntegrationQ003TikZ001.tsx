import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=0.72]\n  \\draw[->] (-0.3,0) -- (7.5,0) node[right] {$x$};\n  \\draw[->] (0,-0.3) -- (0,4.0) node[above] {$y$};\n  \\fill[gray!25] plot[domain=1:6, samples=90] (\\x,{(4+6*\\x-\\x*\\x)/4}) -- plot[domain=6:1, samples=90] (\\x,{(\\x*\\x-8*\\x+16)/4}) -- cycle;\n  \\draw[domain=-0.2:7, samples=100, smooth, thick] plot (\\x,{(\\x*\\x-8*\\x+16)/4});\n  \\draw[domain=0.2:6.8, samples=100, smooth, thick] plot (\\x,{(4+6*\\x-\\x*\\x)/4});\n  \\draw[dashed] (1,0) -- (1,{9/4});\n  \\draw[dashed] (6,0) -- (6,{4/4});\n  \\node[below] at (1,0) {$1$};\n  \\node[below] at (6,0) {$6$};\n  \\node[left] at (0,{9/4}) {$9$};\n  \\node[left] at (0,{4/4}) {$4$};\n  \\node[above] at (2.0,3.2) {$y=4+6x-x^2$};\n  \\node[right] at (4.7,1.0) {$y=x^2-8x+16$};\n  \\node[below] at (3.7,-0.4) {Fig. 4};\n\\end{tikzpicture}";

export const AS1IntegrationQuestionsAS1IntegrationQ003TikZ001: React.FC = () => (
  <DiagramPanel title={"Area between two parabolas"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-primary/20 bg-card p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-muted-foreground">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-foreground">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
