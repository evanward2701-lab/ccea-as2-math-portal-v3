import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=0.8]\n  % Axes\n  \\draw[->] (-3,0) -- (3.5,0) node[below] {$x$};\n  \\draw[->] (0,-1) -- (0,4.5) node[left] {$y$};\n  % First antiderivative C=0\n  \\draw[domain=-2:2, smooth, variable=\\x, blue, thick] plot (\\x, {1/3*\\x*\\x*\\x});\n  \\node[blue] at (2,1.3) {$C=0$};\n  % Second antiderivative C=2\n  \\draw[domain=-2:2, smooth, variable=\\x, red, thick] plot (\\x, {1/3*\\x*\\x*\\x + 2});\n  \\node[red] at (-2.2,3.2) {$C=2$};\n  % Third antiderivative C=-1\n  \\draw[domain=-2:2, smooth, variable=\\x, dashed, purple] plot (\\x, {1/3*\\x*\\x*\\x - 1});\n  \\node[purple] at (2.2,-0.8) {$C=-1$};\n  % Annotation\n  \\node[align=left] at (4.1,2.7) {\\small $\\displaystyle F(x)=\\frac{1}{3}x^3 + C$\\\\ $\\;\\,f'(x)=x^2$};\n  \\draw[->] (3.8,2.3) -- (2.4,1.2);\n\\end{tikzpicture}";

export const AS1IntegrationLessonTIKZ001: React.FC = () => (
  <DiagramPanel title={"Family of antiderivatives differing by the constant \\(C\\)"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-zinc-800 bg-zinc-950/70 p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-zinc-500">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-zinc-300">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
