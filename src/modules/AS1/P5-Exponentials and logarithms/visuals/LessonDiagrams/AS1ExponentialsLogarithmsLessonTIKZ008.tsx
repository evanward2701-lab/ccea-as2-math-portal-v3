import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}\n\\begin{axis}[\n    name=leftplot,\n    width=7cm,\n    height=6cm,\n    axis lines=middle,\n    xmin=0, xmax=4,\n    ymin=0, ymax=18,\n    xlabel={$x$}, ylabel={$y$},\n    grid=both,\n    title={$y=2e^{0.6x}$},\n    samples=160\n]\n\\addplot[thick, domain=0:4] {2*exp(0.6*x)};\n\\end{axis}\n\\begin{axis}[\n    at={(8.2cm,0)},\n    width=7cm,\n    height=6cm,\n    axis lines=middle,\n    xmin=0, xmax=4,\n    ymin=0, ymax=3.2,\n    xlabel={$x$}, ylabel={$\\ln y$},\n    grid=both,\n    title={$\\ln y=0.6x+\\ln 2$},\n    samples=160\n]\n\\addplot[thick, domain=0:4] {0.6*x + ln(2)};\n\\end{axis}\n\\end{tikzpicture}";

export const AS1ExponentialsLogarithmsLessonTIKZ008: React.FC = () => (
  <DiagramPanel title={"Optional straightening with logarithms"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-primary/20 bg-card p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-muted-foreground">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-foreground">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
