import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "% This diagram uses PGFPlots to draw three curves on the same axes.  It requires \\usepackage{pgfplots} in the preamble.\n\\begin{tikzpicture}\n  \\begin{axis}[\n    width=10cm, height=7cm,\n    domain=0.1:4,\n    samples=200,\n    axis lines=middle,\n    xlabel={$x$}, ylabel={$y$},\n    xmin=0, xmax=4,\n    ymin=0, ymax=5,\n    legend style={at={(0.97,0.97)}, anchor=north east}\n  ]\n    \\addplot[blue, thick] {x^2};\n    \\addlegendentry{$y = x^2$}\n    \\addplot[red, thick] {sqrt(x)};\n    \\addlegendentry{$y = \\sqrt{x}$}\n    \\addplot[green!60!black, thick] {1/x};\n    \\addlegendentry{$y = x^{-1}$}\n  \\end{axis}\n\\end{tikzpicture}";

export const AS1IndicesSurdsLessonTIKZ001: React.FC = () => (
  <DiagramPanel title={"Graph of $y=x^2$, $y=\\sqrt{x}$ and $y=x^{-1}$"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-primary/20 bg-card p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-muted-foreground">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-foreground">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
