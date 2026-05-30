import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}\n\\begin{axis}[\n    width=11cm,\n    height=7cm,\n    axis lines=middle,\n    xmin=-0.3, xmax=1.45,\n    ymin=-1, ymax=10,\n    xlabel={$x$}, ylabel={$y$},\n    grid=both,\n    legend style={at={(0.03,0.97)},anchor=north west,draw=none,fill=white},\n    samples=220\n]\n\\addplot[thick, domain=-0.3:1.45] {exp(2*x)};\n\\addlegendentry{$y=e^{2x}$}\n\\addplot[thick, domain=-0.3:1.45] {5*exp(x)-6};\n\\addlegendentry{$y=5e^x-6$}\n\\node[circle, fill, inner sep=1.4pt, label=below right:{$x=\\ln 2$}] at (axis cs:0.693147,4) {};\n\\node[circle, fill, inner sep=1.4pt, label=above left:{$x=\\ln 3$}] at (axis cs:1.09861,9) {};\n\\end{axis}\n\\end{tikzpicture}";

export const AS1ExponentialsLogarithmsLessonTIKZ006: React.FC = () => (
  <DiagramPanel title={"Corrected equation-intersection view"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-primary/20 bg-card p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-muted-foreground">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-foreground">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
