import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}\n\\begin{axis}[\n    width=10cm,\n    height=7cm,\n    axis lines=middle,\n    xmin=-0.6, xmax=5,\n    ymin=-3, ymax=3,\n    xlabel={$x$}, ylabel={$y$},\n    grid=both,\n    legend style={at={(0.97,0.08)},anchor=south east,draw=none,fill=white},\n    samples=220\n]\n\\addplot[thick, domain=0.05:5] {ln(x)};\n\\addlegendentry{$y=\\ln x$}\n\\addplot[dashed] coordinates {(0,-3) (0,3)};\n\\node[anchor=west] at (axis cs:0.12,-2.45) {vertical asymptote $x=0$};\n\\node[circle, fill, inner sep=1.4pt, label=below right:{$(1,0)$}] at (axis cs:1,0) {};\n\\end{axis}\n\\end{tikzpicture}";

export const AS1ExponentialsLogarithmsLessonTIKZ004: React.FC = () => (
  <DiagramPanel title={"Graph of the natural logarithm"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-zinc-800 bg-zinc-950/70 p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-zinc-500">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-zinc-300">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
