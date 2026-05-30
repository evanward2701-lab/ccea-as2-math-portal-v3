import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=0.55]\n  % triangular arrangement of 15 balls\n  \\foreach \\row in {0,...,4}{\n    \\foreach \\col in {0,...,\\row}{\n      \\pgfmathsetmacro{\\x}{\\col*1.1 - \\row*0.55}\n      \\pgfmathsetmacro{\\y}{-\\row*0.95}\n      \\shade[ball color=gray] (\\x,\\y) circle (0.5);\n    }\n  }\n  \\node at (0,-5.3) {Fig. 3};\n  % frame version shifted right\n  \\begin{scope}[xshift=7cm]\n    \\draw[thick] (-3,-4.1)--(0,1.2)--(3,-4.1)--cycle;\n    \\foreach \\row in {0,...,4}{\n      \\foreach \\col in {0,...,\\row}{\n        \\pgfmathsetmacro{\\x}{\\col*1.05 - \\row*0.525}\n        \\pgfmathsetmacro{\\y}{-\\row*0.9}\n        \\shade[ball color=gray] (\\x,\\y-0.3) circle (0.48);\n      }\n    }\n    \\node at (0,-5.3) {Fig. 4};\n  \\end{scope}\n\\end{tikzpicture}";

export const AS1TrigonometryQuestionsAS1TrigonometryQ024TikZ001: React.FC = () => (
  <DiagramPanel title={"Snooker balls and equilateral frame"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-primary/20 bg-card p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-muted-foreground">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-foreground">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
