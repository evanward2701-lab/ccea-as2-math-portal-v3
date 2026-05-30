import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=2]\n% axes and unit circle\n\\draw[->] (-1.2,0) -- (1.2,0) node[right] {$x$};\n\\draw[->] (0,-1.2) -- (0,1.2) node[above] {$y$};\n\\draw (0,0) circle (1);\n% quadrant labels for CAST (reading clockwise from quadrant IV)\n\\node at (0.5,0.5) {A};   % Quadrant I: All positive\n\\node at (-0.5,0.5) {S};  % Quadrant II: Sine positive\n\\node at (-0.5,-0.5) {T}; % Quadrant III: Tangent positive\n\\node at (0.5,-0.5) {C};   % Quadrant IV: Cosine positive\n% draw angle theta in Quadrant II\n\\draw[->,thick,blue] (0,0) -- ({cos(130)}, {sin(130)});\n% arc for theta\n\\draw[thick] (0.2,0) arc (0:130:0.2);\n\\node at ({0.36*cos(65)},{0.36*sin(65)}) {$\\theta$};\n% reference angle alpha\n\\coordinate (P) at ({cos(130)},{sin(130)});\n\\coordinate (Q) at ({cos(130)},0);\n\\draw[dashed] (P) -- (Q);\n\\draw[thick] ({cos(130)},0.12) arc (90:130:0.12);\n\\node at ({cos(130)+0.16*cos(110)}, {0.05}) {$\\alpha$};\n% point on the circle\n\\fill[blue] (P) circle (0.02);\n\\node[above left] at (P) {$(\\cos\\theta,\\sin\\theta)$};\n\\end{tikzpicture}";

export const AS1TrigonometryLessonTIKZ003: React.FC = () => (
  <DiagramPanel title={"Unit circle and CAST diagram"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-primary/20 bg-card p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-muted-foreground">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-foreground">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
