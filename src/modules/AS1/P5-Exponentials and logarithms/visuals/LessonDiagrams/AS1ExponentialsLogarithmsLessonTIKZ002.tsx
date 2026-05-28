import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}\n\\begin{axis}[\n    width=11cm,\n    height=7cm,\n    axis lines=middle,\n    xmin=-2.5, xmax=2.5,\n    ymin=-0.3, ymax=8,\n    xlabel={$x$}, ylabel={$y$},\n    grid=both,\n    legend style={at={(0.03,0.97)},anchor=north west,draw=none,fill=white},\n    samples=200\n]\n\\addplot[thick, domain=-2.5:2.5] {3^x};\n\\addlegendentry{$y=3^x$}\n\\addplot[thick, domain=-2.5:2.5] {exp(x)};\n\\addlegendentry{$y=e^x$}\n\\addplot[thick, domain=-2.5:2.5] {2^x};\n\\addlegendentry{$y=2^x$}\n\\node[circle, fill, inner sep=1.5pt, label=above left:{$(0,1)$}] at (axis cs:0,1) {};\n\\end{axis}\n\\end{tikzpicture}";

export const AS1ExponentialsLogarithmsLessonTIKZ002: React.FC = () => (
  <DiagramPanel title={"Comparing `e^x` with other exponentials"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-zinc-800 bg-zinc-950/70 p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-zinc-500">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-zinc-300">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
