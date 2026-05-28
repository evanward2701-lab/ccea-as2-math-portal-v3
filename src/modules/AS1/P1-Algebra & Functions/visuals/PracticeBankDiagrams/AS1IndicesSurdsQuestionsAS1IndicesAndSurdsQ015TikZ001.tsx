import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=1.1, every node/.style={font=\\small}]\n  % Coordinates for trapezium\n  \\coordinate (A) at (0,0);      % bottom left\n  \\coordinate (B) at (3.0,0);    % bottom right\n  \\coordinate (C) at (1.8,3.0);  % top right\n  \\coordinate (D) at (0,3.0);    % top left\n\n  % Trapezium outline\n  \\draw[thick] (A) -- (B) -- (C) -- (D) -- cycle;\n\n  % Right-angle markers on the left side\n  \\draw (A) ++(0.18,0) -- ++(0,0.18) -- ++(-0.18,0);\n  \\draw (D) ++(0.18,0) -- ++(0,-0.18) -- ++(-0.18,0);\n\n  % Labels for lengths\n  \\node[left] at (0,1.5) {$h$};\n  \\node[above] at ($(D)!0.5!(C)$) {$6-4\\sqrt{2}$};\n  \\node[below] at ($(A)!0.5!(B)$) {$\\sqrt{8}$};\n\n  % Figure label\n  \\node[below] at (1.5,-0.55) {\\textbf{Fig. 2}};\n\\end{tikzpicture}";

export const AS1IndicesSurdsQuestionsAS1IndicesAndSurdsQ015TikZ001: React.FC = () => (
  <DiagramPanel title={"Trapezium in Figure 2"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-zinc-800 bg-zinc-950/70 p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-zinc-500">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-zinc-300">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
