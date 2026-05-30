import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=1]\n  % Axes\n  \\draw[->] (-3,0) -- (3,0) node[right] {$x$};\n  \\draw[->] (0,-4) -- (0,3) node[above] {$y$};\n  % Graph of y = x^4 - 4x^2\n  \\draw[domain=-2:2, smooth, variable=\\x, blue, thick] plot ({\\x},{\\x^4 - 4*\\x^2});\n  % Local maximum at (0,0)\n  \\draw[fill] (0,0) circle (2pt) node[above right] {local maximum};\n  % Local minima at (-1,-3) and (1,-3)\n  \\draw[fill] (-1,-3) circle (2pt) node[below left] {local minimum};\n  \\draw[fill] (1,-3) circle (2pt) node[below right] {local minimum};\n  % Inflection points at ±sqrt(2/3) ≈ ±0.82; value ≈ -2.22\n  \\def\\a{0.8165}\n  \\def\\yinf{-2.22}\n  \\draw[fill] (\\a,\\yinf) circle (2pt) node[above right] {inflection};\n  \\draw[fill] (-\\a,\\yinf) circle (2pt) node[above left] {inflection};\n\\end{tikzpicture}";

export const AS1DifferentiationLessonTIKZ003: React.FC = () => (
  <DiagramPanel title={"Graph of \\(y = x^4 - 4x^2\\) with Inflection Points"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-primary/20 bg-card p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-muted-foreground">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-foreground">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
