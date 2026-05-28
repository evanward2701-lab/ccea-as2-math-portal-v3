import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}\n\\begin{axis}[\n    width=11cm,\n    height=8cm,\n    axis lines=middle,\n    xmin=-2.5, xmax=5,\n    ymin=-2.5, ymax=5,\n    xlabel={$x$}, ylabel={$y$},\n    grid=both,\n    legend style={at={(0.03,0.97)},anchor=north west,draw=none,fill=white},\n    samples=220\n]\n\\addplot[thick, domain=-2.2:2.25] {2^x};\n\\addlegendentry{$y=2^x$}\n\\addplot[thick, domain=0.13:5] {ln(x)/ln(2)};\n\\addlegendentry{$y=\\log_2 x$}\n\\addplot[dashed, domain=-2.5:5] {x};\n\\addlegendentry{$y=x$}\n\\node[circle, fill, inner sep=1.3pt, label=above left:{$(0,1)$}] at (axis cs:0,1) {};\n\\node[circle, fill, inner sep=1.3pt, label=below right:{$(1,0)$}] at (axis cs:1,0) {};\n\\end{axis}\n\\end{tikzpicture}";

export const AS1ExponentialsLogarithmsLessonTIKZ003: React.FC = () => (
  <DiagramPanel title={"Exponential-logarithm inverse relationship"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-zinc-800 bg-zinc-950/70 p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-zinc-500">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-zinc-300">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
