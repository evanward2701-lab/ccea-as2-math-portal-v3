import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}\n\\begin{axis}[\n    width=11cm,\n    height=7cm,\n    axis lines=middle,\n    xmin=-0.3, xmax=6,\n    ymin=-4, ymax=4,\n    xlabel={$x$}, ylabel={$y$},\n    grid=both,\n    legend style={at={(0.98,0.98)},anchor=north east,draw=none,fill=white},\n    samples=220\n]\n\\addplot[thick, domain=0.05:6] {ln(x)/ln(3)};\n\\addlegendentry{$y=\\log_3 x$}\n\\addplot[thick, domain=0.05:6] {ln(x)/ln(2)};\n\\addlegendentry{$y=\\log_2 x$}\n\\addplot[thick, domain=0.05:6] {ln(x)/ln(0.5)};\n\\addlegendentry{$y=\\log_{0.5} x$}\n\\addplot[dashed] coordinates {(0,-4) (0,4)};\n\\node[circle, fill, inner sep=1.4pt, label=above right:{$(1,0)$}] at (axis cs:1,0) {};\n\\node[anchor=west] at (axis cs:0.15,3.2) {$x=0$ asymptote};\n\\end{axis}\n\\end{tikzpicture}";

export const AS1ExponentialsLogarithmsLessonTIKZ005: React.FC = () => (
  <DiagramPanel title={"Comparing logarithmic bases"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-zinc-800 bg-zinc-950/70 p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-zinc-500">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-zinc-300">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
