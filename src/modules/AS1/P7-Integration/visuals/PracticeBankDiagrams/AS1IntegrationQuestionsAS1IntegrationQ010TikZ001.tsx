import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=0.72]\n  \\draw[->] (-0.5,0) -- (10,0) node[right] {$x$};\n  \\draw[->] (0,-2.5) -- (0,2.0) node[above] {$y$};\n  \\fill[gray!25] (0,-2) -- (0,1) -- plot[domain=1:-2, variable=\\t, samples=100] ({\\t*\\t*\\t+8},{\\t}) -- cycle;\n  \\draw[domain=-2:1, variable=\\t, samples=120, smooth, thick] plot ({\\t*\\t*\\t+8},{\\t});\n  \\draw[dashed] (0,1) -- (9,1);\n  \\node[left] at (0,1) {$1$};\n  \\node[left] at (0,-2) {$-2$};\n  \\node[below] at (8,0) {$8$};\n  \\node[below] at (9,0) {$9$};\n  \\node[right] at (6.7,1.35) {$y=\\sqrt[3]{x-8}$};\n  \\node[below] at (4.7,-2.7) {Fig. 3};\n\\end{tikzpicture}";

export const AS1IntegrationQuestionsAS1IntegrationQ010TikZ001: React.FC = () => (
  <DiagramPanel title={"Rudder region for $y=\\sqrt[3]{x-8}$"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-zinc-800 bg-zinc-950/70 p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-zinc-500">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-zinc-300">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
