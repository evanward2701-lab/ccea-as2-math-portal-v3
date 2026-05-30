import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=0.8]\n  % Panel 1: D>0\n  \\begin{scope}\n    \\draw[->] (-3,0) -- (3,0) node[right] {$x$};\n    \\draw[->] (0,-2) -- (0,4) node[above] {$y$};\n    % y = (x-1)(x+2) = x^2 + x - 2\n    \\draw[samples=200, smooth, domain=-2.5:2.5, thick, blue] plot(\\x,{(\\x-1)*(\\x+2)});\n    \\filldraw[blue] (-2,0) circle (2pt);\n    \\filldraw[blue] (1,0) circle (2pt);\n    \\node[blue] at (2.0,3.3) {$D>0$};\n    \\node at (0,-1.4) {\\small Two distinct real roots};\n  \\end{scope}\n  % Panel 2: D=0\n  \\begin{scope}[xshift=6cm]\n    \\draw[->] (-3,0) -- (3,0) node[right] {$x$};\n    \\draw[->] (0,-2) -- (0,4) node[above] {$y$};\n    % y = (x-1)^2\n    \\draw[samples=200, smooth, domain=-1.5:3.5, thick, orange] plot(\\x,{(\\x-1)^2});\n    \\filldraw[orange] (1,0) circle (2pt);\n    \\node[orange] at (2.0,3.3) {$D=0$};\n    \\node at (0,-1.4) {\\small One repeated root};\n  \\end{scope}\n  % Panel 3: D<0\n  \\begin{scope}[xshift=12cm]\n    \\draw[->] (-3,0) -- (3,0) node[right] {$x$};\n    \\draw[->] (0,-2) -- (0,4) node[above] {$y$};\n    % y = x^2 + 1\n    \\draw[samples=200, smooth, domain=-2.5:2.5, thick, red] plot(\\x,{\\x^2 + 1});\n    \\node[red] at (2.0,3.3) {$D<0$};\n    \\node at (0,-1.4) {\\small No real roots};\n  \\end{scope}\n\\end{tikzpicture}";

export const AS1QuadraticsLessonTIKZ002: React.FC = () => (
  <DiagramPanel title={"Discriminant and number of real roots"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-primary/20 bg-card p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-muted-foreground">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-foreground">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
