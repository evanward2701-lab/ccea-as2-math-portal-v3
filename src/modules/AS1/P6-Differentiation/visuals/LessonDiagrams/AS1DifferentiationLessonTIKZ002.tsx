import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=1]\n  % Axes\n  \\draw[->] (-2.5,0) -- (2.5,0) node[right] {$x$};\n  \\draw[->] (0,-3) -- (0,3) node[above] {$y$};\n  % Graph of y = x^3 - 3x\n  \\draw[domain=-2:2, smooth, variable=\\x, blue, thick] plot ({\\x},{\\x*\\x*\\x - 3*\\x});\n  % Local maximum at (-1,2)\n  \\draw[fill] (-1,2) circle (2pt) node[above left] {local maximum};\n  % Inflection point at (0,0)\n  \\draw[fill] (0,0) circle (2pt) node[above right] {inflection point};\n  % Local minimum at (1,-2)\n  \\draw[fill] (1,-2) circle (2pt) node[below right] {local minimum};\n\\end{tikzpicture}";

export const AS1DifferentiationLessonTIKZ002: React.FC = () => (
  <DiagramPanel title={"Graph of \\(y = x^3 - 3x\\) with Stationary Points"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-zinc-800 bg-zinc-950/70 p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-zinc-500">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-zinc-300">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
