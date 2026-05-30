import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=0.8]\n  % Left panel: a>0\n  \\begin{scope}\n    \\draw[->] (-3,0) -- (3,0) node[right] {$x$};\n    \\draw[->] (0,-4) -- (0,4) node[above] {$y$};\n    % parabola: y = (x-1)^2 -2\n    \\draw[samples=200, smooth, domain=-1:3, thick, blue] plot(\\x,{(\\x-1)^2 - 2});\n    % axis of symmetry\n    \\draw[dashed, blue] (1,-4) -- (1,4);\n    % turning point\n    \\filldraw[blue] (1,-2) circle (2pt) node[below right] {$(h,k)$};\n    % labels\n    \\node[blue] at (2.2,3.2) {$a>0$};\n    \\node at (-2.2,3.2) {\\small \\textit{Opens upwards}};\n    \\node at (-2.2,2.6) {\\small \\textit{Minimum turning point}};\n    \\node at (-2.2,2.0) {\\small \\textit{Axis $x=h$}};\n  \\end{scope}\n  % Right panel: a<0\n  \\begin{scope}[xshift=7.5cm]\n    \\draw[->] (-3,0) -- (3,0) node[right] {$x$};\n    \\draw[->] (0,-4) -- (0,4) node[above] {$y$};\n    % parabola: y = -(x+1)^2 +2\n    \\draw[samples=200, smooth, domain=-3:1, thick, red] plot(\\x,{-(\\x+1)^2 + 2});\n    % axis of symmetry\n    \\draw[dashed, red] (-1,-4) -- (-1,4);\n    % turning point\n    \\filldraw[red] (-1,2) circle (2pt) node[above left] {$(h,k)$};\n    % labels\n    \\node[red] at (2.2,3.2) {$a<0$};\n    \\node at (-2.2,3.2) {\\small \\textit{Opens downwards}};\n    \\node at (-2.2,2.6) {\\small \\textit{Maximum turning point}};\n    \\node at (-2.2,2.0) {\\small \\textit{Axis $x=h$}};\n  \\end{scope}\n\\end{tikzpicture}";

export const AS1QuadraticsLessonTIKZ001: React.FC = () => (
  <DiagramPanel title={"Parabola shapes, turning points and axes of symmetry"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-primary/20 bg-card p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-muted-foreground">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-foreground">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
