import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}\n\\begin{axis}[\n    width=12cm,\n    height=4cm,\n    domain=0:720,\n    samples=200,\n    xtick={0,180,360,540,720},\n    xticklabels={$0^\\circ$,$180^\\circ$,$360^\\circ$,$540^\\circ$,$720^\\circ$},\n    ytick={-1,0,1},\n    ymin=-1.2,ymax=1.2,\n    xlabel={$x$ (degrees)},\n    ylabel={$y$},\n    legend style={at={(0.5,-0.25)},anchor=north,legend columns=2},\n    grid=both,\n    minor tick num=1\n]\n    \\addplot [blue, thick] {sin(x)};\n    \\addlegendentry{$y=\\sin x$}\n    \\addplot [green!60!black, thick] {sin(x/2)};\n    \\addlegendentry{$y=\\sin\\tfrac{x}{2}$}\n\\end{axis}\n\\end{tikzpicture}";

export const AS1TrigTransformationsLessonTIKZ004: React.FC = () => (
  <DiagramPanel title={"Horizontal stretch \\(y = \\sin\\tfrac{x}{2}\\)"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-zinc-800 bg-zinc-950/70 p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-zinc-500">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-zinc-300">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
