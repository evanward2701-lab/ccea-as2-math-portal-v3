import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=1]\n  % Axes\n  \\draw[->] (-0.2,0) -- (4.5,0) node[right] {$x$};\n  \\draw[->] (0,-0.5) -- (0,8) node[above] {$y$};\n  % Curve y = x^2\n  \\draw[domain=0:4, smooth, variable=\\x, blue, thick] plot ({\\x},{\\x*\\x});\n  % Points on the curve\n  \\draw[fill] (1,1) circle (2pt) node[below left] {$(x,f(x))$};\n  \\draw[fill] (2,4) circle (2pt) node[above right] {$(x+h,f(x+h))$};\n  % Secant line between the two points\n  \\draw[thick, red] (1,1) -- (2,4) node[midway, above left] {Secant line};\n  % Tangent line at x=1: slope = 2; equation y=2(x-1)+1 = 2x-1\n  \\draw[thick, orange, dashed] (0,-1) -- (2.5,4) node[above right] {Tangent line};\n  % Horizontal distance h\n  \\draw[<->] (1,-0.3) -- (2,-0.3) node[midway, below] {$h$};\n\\end{tikzpicture}";

export const AS1DifferentiationLessonTIKZ001: React.FC = () => (
  <DiagramPanel title={"Secant Approaching a Tangent"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-primary/20 bg-card p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-muted-foreground">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-foreground">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
