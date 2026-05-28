import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}\n\\begin{axis}[\n    width=12cm,\n    height=4cm,\n    domain=0:360,\n    samples=200,\n    xtick={0,90,180,270,360},\n    xticklabels={$0^\\circ$,$90^\\circ$,$180^\\circ$,$270^\\circ$,$360^\\circ$},\n    ytick={-1,0,1},\n    ymin=-1.2,ymax=1.2,\n    xlabel={$x$ (degrees)},\n    ylabel={$y$},\n    legend style={at={(0.5,-0.25)},anchor=north,legend columns=3},\n    grid=both,\n    minor tick num=1\n]\n    \\addplot [red, thick] {cos(x + 90)};\n    \\addlegendentry{$y=\\cos(x+90^\\circ)$}\n    \\addplot [blue, thick] {-sin(x)};\n    \\addlegendentry{$y=-\\sin x$}\n    \\addplot [gray, dashed] {cos(x)};\n    \\addlegendentry{$y=\\cos x$}\n\\end{axis}\n\\end{tikzpicture}";

export const AS1TrigTransformationsLessonTIKZ005: React.FC = () => (
  <DiagramPanel title={"Phase shift and reflection example"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-zinc-800 bg-zinc-950/70 p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-zinc-500">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-zinc-300">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
