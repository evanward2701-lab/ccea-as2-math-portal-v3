import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=1.0]\n  % Axes\n  \\draw[->] (0,0) -- (4.5,0) node[below] {$x$};\n  \\draw[->] (0,0) -- (0,3) node[left] {$y$};\n  % Function curve f(x) = x^2/4 + 1\n  \\draw[domain=0:4, smooth, variable=\\x, blue, thick] plot (\\x, {\\x*\\x/4 + 1});\n  % Shaded area between x=1 and x=3\n  \\begin{scope}\n    \\fill[cyan!30] (1,0) -- plot[domain=1:3, smooth] (\\x, {\\x*\\x/4 + 1}) -- (3,0) -- cycle;\n  \\end{scope}\n  % Draw the curve again over the shaded region for clarity\n  \\draw[domain=1:3, smooth, variable=\\x, blue, thick] plot (\\x, {\\x*\\x/4 + 1});\n  % Mark the limits a and b on the x-axis\n  \\draw (1,0) node[below] {$a$} -- (1,0.05);\n  \\draw (3,0) node[below] {$b$} -- (3,0.05);\n  % Dotted vertical lines from the curve to the x-axis\n  \\draw[dashed] (1, {1*1/4 + 1}) -- (1,0);\n  \\draw[dashed] (3, {3*3/4 + 1}) -- (3,0);\n  % Annotation\n  \\node at (2,2.4) {$y = \\tfrac{x^2}{4} + 1$};\n  \\node[align=left] at (4.7,1.2) {\\small $\\displaystyle \\int_{a}^{b} f(x)\\,\\mathrm{d}x$\\\\$= F(b)-F(a)$};\n  \\draw[->] (4.5,1.3) -- (3.3,1.8);\n\\end{tikzpicture}";

export const AS1IntegrationLessonTIKZ002: React.FC = () => (
  <DiagramPanel title={"Area under a curve between \\(x=a\\) and \\(x=b\\)"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-primary/20 bg-card p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-muted-foreground">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-foreground">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
