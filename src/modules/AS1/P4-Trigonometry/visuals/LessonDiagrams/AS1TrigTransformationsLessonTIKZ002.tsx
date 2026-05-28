import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}\n\\begin{axis}[\n    width=12cm,\n    height=4cm,\n    domain=0:360,\n    samples=200,\n    xtick={0,90,180,270,360},\n    xticklabels={$0^\\circ$,$90^\\circ$,$180^\\circ$,$270^\\circ$,$360^\\circ$},\n    ytick={-4,-2,0,2,4},\n    ymin=-4.5,ymax=4.5,\n    xlabel={$x$ (degrees)},\n    ylabel={$y$},\n    legend style={at={(0.5,-0.25)},anchor=north,legend columns=2},\n    grid=both,\n    minor tick num=1\n]\n    \\addplot [blue, thick] {sin(x)};\n    \\addlegendentry{$y=\\sin x$}\n    \\addplot [orange, thick] {4*sin(x)};\n    \\addlegendentry{$y=4\\sin x$}\n\\end{axis}\n\\end{tikzpicture}";

export const AS1TrigTransformationsLessonTIKZ002: React.FC = () => (
  <DiagramPanel title={"Vertical stretch example \\(y = 4\\sin x\\)"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-zinc-800 bg-zinc-950/70 p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-zinc-500">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-zinc-300">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
