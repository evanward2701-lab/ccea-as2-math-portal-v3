import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=0.8]\n  % Parameters: adjust length L and radius R for illustrative purposes\n  \\def\\L{8}\n  \\def\\R{2}\n  % Draw the rectangular part\n  \\draw (\\R,-\\R) -- (\\L-\\R,-\\R) -- (\\L-\\R,\\R) -- (\\R,\\R) -- cycle;\n  % Draw the left semicircle: centre at (\\R,0), radius \\R\n  \\draw (\\R,\\R) arc[start angle=90,end angle=270,radius=\\R];\n  % Draw the right semicircle: centre at (\\L-\\R,0), radius \\R\n  \\draw (\\L-\\R,-\\R) arc[start angle=270,end angle=90,radius=\\R];\n  % Label the length l across the top of the rectangular section\n  \\draw[<->] (\\R,\\R+0.6) -- (\\L-\\R,\\R+0.6) node[midway,above]{\\(l\\)};\n  % Label the radius r inside the right semicircle (horizontal arrow)\n  \\draw[<->] (\\L-\\R,0) -- (\\L,0) node[midway,above]{\\(r\\)};\n\\end{tikzpicture}";

export const AS1DifferentiationQuestionsAS1DifferentiationQ003TikZ001: React.FC = () => (
  <DiagramPanel title={"Sports field with semicircular ends"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-zinc-800 bg-zinc-950/70 p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-zinc-500">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-zinc-300">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
