import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=0.5]\n\\begin{scope}\n\\draw[->] (-0.5,0)--(3,0) node[right] {$x$}; \\draw[->] (0,-0.5)--(0,5.2) node[above] {$y$};\n\\draw (1,0.1)--(1,-0.1) node[below] {$1$}; \\draw (2,0.1)--(2,-0.1) node[below] {$2$};\n\\draw[thick] (0,0)--(1,4)--(2,0); \\node[above right] at (1,4) {A $(1,4)$}; \\node at (1,-0.8) {Fig. 1};\n\\end{scope}\n\\begin{scope}[xshift=6cm]\n\\draw[->] (-0.5,0)--(4,0) node[right] {$x$}; \\draw[->] (0,-0.5)--(0,5.2) node[above] {$y$};\n\\draw (1,0.1)--(1,-0.1) node[below] {$1$}; \\draw (2,0.1)--(2,-0.1) node[below] {$2$}; \\draw (3,0.1)--(3,-0.1) node[below] {$3$};\n\\draw[thick] (1,0)--(2,4)--(3,0); \\node[above right] at (2,4) {$A'(2,4)$}; \\node at (1.8,-0.8) {(i)};\n\\end{scope}\n\\begin{scope}[yshift=-6cm]\n\\draw[->] (-0.5,0)--(3,0) node[right] {$x$}; \\draw[->] (0,-0.5)--(0,3.2) node[above] {$y$};\n\\draw (1,0.1)--(1,-0.1) node[below] {$1$}; \\draw (2,0.1)--(2,-0.1) node[below] {$2$};\n\\draw[thick] (0,0)--(1,2)--(2,0); \\node[above right] at (1,2) {$A'(1,2)$}; \\node at (1,-0.8) {(ii)};\n\\end{scope}\n\\begin{scope}[xshift=6cm,yshift=-6cm]\n\\draw[->] (-0.5,0)--(5,0) node[right] {$x$}; \\draw[->] (0,-0.5)--(0,5.2) node[above] {$y$};\n\\draw (2,0.1)--(2,-0.1) node[below] {$2$}; \\draw (4,0.1)--(4,-0.1) node[below] {$4$};\n\\draw[thick] (0,0)--(2,4)--(4,0); \\node[above right] at (2,4) {$A'(2,4)$}; \\node at (2,-0.8) {(iii)};\n\\end{scope}\n\\end{tikzpicture}";

export const AS1GraphTransformationsQuestionsAS1GraphTransformationsQ015TikZ001: React.FC = () => (
  <DiagramPanel title={"Source sketch for C1 June 2019 Question 2"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-primary/20 bg-card p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-muted-foreground">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-foreground">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
