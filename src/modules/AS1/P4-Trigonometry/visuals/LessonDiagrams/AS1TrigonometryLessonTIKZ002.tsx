import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=1]\n% 30°–60°–90° triangle\n\\begin{scope}\n  \\coordinate (B) at (0,0);\n  \\coordinate (A) at (1.732,0); % \\sqrt{3} \\approx 1.732\n  \\coordinate (C) at (0,1);\n  \\draw[thick] (B)--(A)--(C)--cycle;\n  % right angle at B\n  \\draw (B)+(0.15,0) -- ++(0,0.15) -- ++(-0.15,0);\n  % side labels\n  \\node[below] at (0.866,-0.15) {$\\sqrt{3}$};\n  \\node[left] at (-0.15,0.5) {$1$};\n  \\node at (0.9,0.65) {$2$};\n  % angle labels\n  \\draw (A)+(-0.35,0) arc (180:150:0.35);\n  \\node at (1.45,0.18) {$30^{\\circ}$};\n  \\draw (C)+(0,-0.35) arc (-90:-30:0.35);\n  \\node at (0.22,0.78) {$60^{\\circ}$};\n\\end{scope}\n% 45°–45°–90° triangle shifted to the right\n\\begin{scope}[xshift=4cm]\n  \\coordinate (B2) at (0,0);\n  \\coordinate (A2) at (1,0);\n  \\coordinate (C2) at (0,1);\n  \\draw[thick] (B2)--(A2)--(C2)--cycle;\n  % right angle at B2\n  \\draw (B2)+(0.15,0) -- ++(0,0.15) -- ++(-0.15,0);\n  % side labels\n  \\node[below] at (0.5,-0.15) {$1$};\n  \\node[left] at (-0.15,0.5) {$1$};\n  \\node at (0.7,0.65) {$\\sqrt{2}$};\n  % angle labels\n  \\draw (A2)+(-0.35,0) arc (180:135:0.35);\n  \\node at (0.8,0.18) {$45^{\\circ}$};\n  \\draw (C2)+(0,-0.35) arc (-90:-135:0.35);\n  \\node at (0.22,0.78) {$45^{\\circ}$};\n\\end{scope}\n\\end{tikzpicture}";

export const AS1TrigonometryLessonTIKZ002: React.FC = () => (
  <DiagramPanel title={"Special triangles for exact values"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-primary/20 bg-card p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-muted-foreground">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-foreground">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
