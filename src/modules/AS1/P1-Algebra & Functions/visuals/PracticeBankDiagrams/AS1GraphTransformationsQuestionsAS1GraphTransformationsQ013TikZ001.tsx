import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = "\\begin{tikzpicture}[scale=0.52]\n\\begin{scope}\n\\draw[->] (-0.5,0)--(4,0) node[right] {$x$}; \\draw[->] (0,-0.5)--(0,5) node[above] {$y$};\n\\draw (2,0.1)--(2,-0.1) node[below] {$2$}; \\draw (3,0.1)--(3,-0.1) node[below] {$3$};\n\\draw (0.1,4)--(-0.1,4) node[left] {$4$};\n\\draw[thick] (0,4)--(2,4)--(3,0); \\node[above right] at (2,4) {A $(2,4)$}; \\node at (1.7,-0.8) {Fig. 1};\n\\end{scope}\n\\begin{scope}[yshift=-6cm]\n\\draw[->] (-1.2,0)--(2.2,0) node[right] {$x$}; \\draw[->] (0,-0.5)--(0,5) node[above] {$y$};\n\\draw (1,0.1)--(1,-0.1) node[below] {$1$};\n\\draw[thick] (-1,4)--(0,4)--(1,0); \\node[above right] at (0,4) {$A'(0,4)$}; \\node[left] at (-0.8,4.6) {(i)};\n\\end{scope}\n\\begin{scope}[xshift=6cm,yshift=-6cm]\n\\draw[->] (-0.5,0)--(4,0) node[right] {$x$}; \\draw[->] (0,-0.5)--(0,3) node[above] {$y$};\n\\draw (2,0.1)--(2,-0.1) node[below] {$2$}; \\draw (3,0.1)--(3,-0.1) node[below] {$3$};\n\\draw[thick] (0,2)--(2,2)--(3,0); \\node[above] at (2,2) {$A'(2,2)$}; \\node[left] at (-0.4,2.6) {(ii)};\n\\end{scope}\n\\begin{scope}[yshift=-12cm]\n\\draw[->] (-4.2,0)--(0.7,0) node[right] {$x$}; \\draw[->] (0,-0.5)--(0,5) node[above] {$y$};\n\\draw (-3,0.1)--(-3,-0.1) node[below] {$-3$}; \\draw (-2,0.1)--(-2,-0.1) node[below] {$-2$};\n\\draw[thick] (-3,0)--(-2,4)--(0,4); \\node[above left] at (-2,4) {$A'(-2,4)$}; \\node[left] at (-3.8,4.6) {(iii)};\n\\end{scope}\n\\end{tikzpicture}";

export const AS1GraphTransformationsQuestionsAS1GraphTransformationsQ013TikZ001: React.FC = () => (
  <DiagramPanel title={"Source sketch for C1 June 2017 Question 2"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-zinc-800 bg-zinc-950/70 p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-zinc-500">TikZ / LaTeX Source</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-zinc-300">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
