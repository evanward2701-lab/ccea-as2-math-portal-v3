import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "% Graph of sine and cosine (requires \\usepackage{tikz})\n\\begin{tikzpicture}[scale=0.9]\n  % axes\n  \\draw[->] (-0.3,0) -- (6.7,0) node[right] {$x$};\n  \\draw[->] (0,-1.3) -- (0,1.3) node[above] {$y$};\n  % x-axis ticks and labels\n  \\foreach \\x/\\label in {0/0,1.5708/{\\tfrac{\\pi}{2}},3.1416/{\\pi},4.7124/{\\tfrac{3\\pi}{2}},6.2832/{2\\pi}} {\n    \\draw (\\x,0.08) -- (\\x,-0.08) node[below] {$\\label$};\n  }\n  % y-axis ticks\n  \\foreach \\y in {-1,1} {\n    \\draw (0.08,\\y) -- (-0.08,\\y) node[left] {\\y};\n  }\n  % sine curve\n  \\draw[blue,thick,domain=0:6.2832,samples=200] plot(\\x,{sin(\\x r)});\n  % cosine curve\n  \\draw[red,dashed,thick,domain=0:6.2832,samples=200] plot(\\x,{cos(\\x r)});\n  % labels\n  \\node[blue] at (6.5,0.8) {$y=\\sin x$};\n  \\node[red] at (6.5,0.2) {$y=\\cos x$};\n\\end{tikzpicture}\n\n\\vspace{1cm}\n\n% Graph of tangent with asymptotes\n\\begin{tikzpicture}[scale=0.9]\n  % axes\n  \\draw[->] (-0.3,0) -- (6.7,0) node[right] {$x$};\n  \\draw[->] (0,-3.3) -- (0,3.3) node[above] {$y$};\n  % x-axis ticks and labels\n  \\foreach \\x/\\label in {0/0,1.5708/{\\tfrac{\\pi}{2}},3.1416/{\\pi},4.7124/{\\tfrac{3\\pi}{2}},6.2832/{2\\pi}} {\n    \\draw (\\x,0.1) -- (\\x,-0.1) node[below] {$\\label$};\n  }\n  % vertical asymptotes at \\pi/2 and 3\\pi/2\n  \\foreach \\x in {1.5708,4.7124} {\n    \\draw[dashed] (\\x,-3.2) -- (\\x,3.2);\n  }\n  % tangent curve segments\n  \\draw[green!70!black,thick,domain=0:1.55,samples=200] plot(\\x,{tan(\\x r)});\n  \\draw[green!70!black,thick,domain=1.61:4.71,samples=200] plot(\\x,{tan(\\x r)});\n  \\draw[green!70!black,thick,domain=4.75:6.2832,samples=200] plot(\\x,{tan(\\x r)});\n  % label\n  \\node[green!70!black] at (5.8,2.5) {$y=\\tan x$};\n\\end{tikzpicture}";

export const AS1TrigonometryLessonTIKZ004: React.FC = () => (
  <DiagramPanel title={"Graphs of sine, cosine and tangent"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-zinc-800 bg-zinc-950/70 p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-zinc-500">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-zinc-300">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
