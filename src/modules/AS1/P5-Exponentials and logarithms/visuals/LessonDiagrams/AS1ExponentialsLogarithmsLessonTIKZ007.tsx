import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}\n\\begin{axis}[\n    width=11cm,\n    height=7cm,\n    axis lines=middle,\n    xmin=0, xmax=6,\n    ymin=0, ymax=9,\n    xlabel={$t$}, ylabel={$y$},\n    grid=both,\n    legend style={at={(0.03,0.97)},anchor=north west,draw=none,fill=white},\n    samples=220\n]\n\\addplot[thick, domain=0:6] {exp(0.35*x)};\n\\addlegendentry{$y=e^{0.35t}$ growth}\n\\addplot[thick, domain=0:6] {exp(-0.35*x)};\n\\addlegendentry{$y=e^{-0.35t}$ decay}\n\\node[circle, fill, inner sep=1.4pt, label=left:{$A$}] at (axis cs:0,1) {};\n\\end{axis}\n\\end{tikzpicture}";

export const AS1ExponentialsLogarithmsLessonTIKZ007: React.FC = () => (
  <DiagramPanel title={"Exponential growth and decay curves"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-zinc-800 bg-zinc-950/70 p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-zinc-500">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-zinc-300">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
