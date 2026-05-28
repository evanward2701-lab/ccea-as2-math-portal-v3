import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}\n\\begin{axis}[\n    width=11cm,\n    height=7cm,\n    axis lines=middle,\n    xmin=-3.2, xmax=3.2,\n    ymin=-0.4, ymax=9.5,\n    xlabel={$x$}, ylabel={$y$},\n    grid=both,\n    minor tick num=1,\n    legend style={at={(0.03,0.97)},anchor=north west,draw=none,fill=white},\n    samples=200\n]\n\\addplot[thick, domain=-3:3] {3^x};\n\\addlegendentry{$y=3^x$}\n\\addplot[thick, domain=-3:3] {2^x};\n\\addlegendentry{$y=2^x$}\n\\addplot[thick, domain=-3:3] {1.5^x};\n\\addlegendentry{$y=1.5^x$}\n\\addplot[dashed, domain=-3.2:3.2] {0};\n\\node[circle, fill, inner sep=1.5pt, label=above right:{$(0,1)$}] at (axis cs:0,1) {};\n\\node[anchor=west] at (axis cs:-3,0.25) {horizontal asymptote $y=0$};\n\\end{axis}\n\\end{tikzpicture}";

export const AS1ExponentialsLogarithmsLessonTIKZ001: React.FC = () => (
  <DiagramPanel title={"Comparing exponential bases"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-zinc-800 bg-zinc-950/70 p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-zinc-500">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-zinc-300">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
