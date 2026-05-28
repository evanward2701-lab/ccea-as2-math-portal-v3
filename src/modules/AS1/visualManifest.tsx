import React from 'react';
import * as P1 from './P1-Algebra & Functions/visuals/PracticeBankDiagrams';
import * as P2 from './P2-Co-ordinate geometry in the 𝒙, 𝒚 plane/visuals/PracticeBankDiagrams';
import * as P3 from './P3-Sequences and series/visuals/PracticeBankDiagrams';
import * as P4 from './P4-Trigonometry/visuals/PracticeBankDiagrams';
import * as P5 from './P5-Exponentials and logarithms/visuals/PracticeBankDiagrams';
import * as P6 from './P6-Differentiation/visuals/PracticeBankDiagrams';
import * as P7 from './P7-Integration/visuals/PracticeBankDiagrams';
import * as P8 from './P8-Vectors/visuals/PracticeBankDiagrams';

const Registry: Record<string, any> = {
  P1,
  P2,
  P3,
  P4,
  P5,
  P6,
  P7,
  P8,
};

export interface VisualEntry {
  id: string;
  kind: "mermaid" | "svg" | "latex" | "html" | "pending";
  componentName: string;
  module: string;
  questionId?: string;
  sourceContent?: string;
}

export const VISUAL_MANIFEST: Record<string, VisualEntry> = {
  "AS1-Indices-Surds-Questions-AS1IndicesAndSurdsQ015TikZ-001": {
    "id": "AS1-Indices-Surds-Questions-AS1IndicesAndSurdsQ015TikZ-001",
    "kind": "latex",
    "componentName": "AS1IndicesSurdsQuestionsAS1IndicesAndSurdsQ015TikZ001",
    "module": "P1",
    "sourceContent": "\\begin{tikzpicture}[scale=1.1, every node/.style={font=\\small}]\n  % Coordinates for trapezium\n  \\coordinate (A) at (0,0);      % bottom left\n  \\coordinate (B) at (3.0,0);    % bottom right\n  \\coordinate (C) at (1.8,3.0);  % top right\n  \\coordinate (D) at (0,3.0);    % top left\n\n  % Trapezium outline\n  \\draw[thick] (A) -- (B) -- (C) -- (D) -- cycle;\n\n  % Right-angle markers on the left side\n  \\draw (A) ++(0.18,0) -- ++(0,0.18) -- ++(-0.18,0);\n  \\draw (D) ++(0.18,0) -- ++(0,-0.18) -- ++(-0.18,0);\n\n  % Labels for lengths\n  \\node[left] at (0,1.5) {$h$};\n  \\node[above] at ($(D)!0.5!(C)$) {$6-4\\sqrt{2}$};\n  \\node[below] at ($(A)!0.5!(B)$) {$\\sqrt{8}$};\n\n  % Figure label\n  \\node[below] at (1.5,-0.55) {\\textbf{Fig. 2}};\n\\end{tikzpicture}"
  },
  "AS1-Curve-Sketching-Questions-AS1CurveSketchingQ003TikZ-001": {
    "id": "AS1-Curve-Sketching-Questions-AS1CurveSketchingQ003TikZ-001",
    "kind": "latex",
    "componentName": "AS1CurveSketchingQuestionsAS1CurveSketchingQ003TikZ001",
    "module": "P1",
    "sourceContent": "\\begin{tikzpicture}[scale=0.75]\n  \\draw[->] (-4.2,0) -- (4.2,0) node[right] {$x$};\n  \\draw[->] (0,-4.2) -- (0,4.2) node[above] {$y$};\n  \\draw[thick, domain=-3.3:3.8, samples=200, smooth]\n    plot (\\x, {0.18*(\\x-3)*(\\x+1)^2});\n  \\draw (-1,0) -- (-1,0.12);\n  \\node[above] at (-1,0.05) {$-1$};\n  \\draw (3,0) -- (3,-0.12);\n  \\node[below] at (3,-0.05) {$3$};\n  \\node[below] at (0,-4.2) {Fig. 2};\n\\end{tikzpicture}"
  },
  "AS1-Curve-Sketching-Questions-AS1CurveSketchingQ004TikZ-001": {
    "id": "AS1-Curve-Sketching-Questions-AS1CurveSketchingQ004TikZ-001",
    "kind": "latex",
    "componentName": "AS1CurveSketchingQuestionsAS1CurveSketchingQ004TikZ001",
    "module": "P1",
    "sourceContent": "\\begin{tikzpicture}[scale=0.75]\n  \\draw[->] (-1.0,0) -- (4.6,0) node[right] {$x$};\n  \\draw[->] (0,-5.2) -- (0,1.2) node[above] {$y$};\n  \\draw[thick, domain=-0.35:4.2, samples=200, smooth]\n    plot (\\x, {-(\\x-2)^2});\n  \\fill (2,0) circle (1.5pt);\n  \\node[above] at (2,0.05) {$2$};\n  \\fill (0,-4) circle (1.5pt);\n  \\node[left] at (0,-4) {$-4$};\n  \\node[below] at (2.2,-5.1) {Fig. 2};\n\\end{tikzpicture}"
  },
  "AS1-Graph-Transformations-Questions-AS1GraphTransformationsQ001TikZ-001": {
    "id": "AS1-Graph-Transformations-Questions-AS1GraphTransformationsQ001TikZ-001",
    "kind": "latex",
    "componentName": "AS1GraphTransformationsQuestionsAS1GraphTransformationsQ001TikZ001",
    "module": "P1",
    "sourceContent": "\\begin{tikzpicture}[scale=0.65]\n\\draw[->] (-3,0)--(4.5,0) node[right] {$x$};\n\\draw[->] (0,-2)--(0,5.2) node[above] {$y$};\n\\draw (-1,0.12)--(-1,-0.12) node[below] {$-1$};\n\\draw (0.12,4)--(-0.12,4) node[left] {$4$};\n\\draw[thick] (-2.2,-1.4)--(-1,4)--(4,4);\n\\node[above left] at (-1,4) {A};\n\\node at (1.5,-1.0) {Fig. 1};\n\\end{tikzpicture}"
  },
  "AS1-Graph-Transformations-Questions-AS1GraphTransformationsQ002TikZ-001": {
    "id": "AS1-Graph-Transformations-Questions-AS1GraphTransformationsQ002TikZ-001",
    "kind": "latex",
    "componentName": "AS1GraphTransformationsQuestionsAS1GraphTransformationsQ002TikZ001",
    "module": "P1",
    "sourceContent": "\\begin{tikzpicture}[scale=0.62]\n\\draw[->] (-2,0)--(8,0) node[right] {$x$};\n\\draw[->] (0,-2.2)--(0,6.0) node[above] {$y$};\n\\draw (5,0.12)--(5,-0.12) node[below] {$5$};\n\\draw (0.12,4)--(-0.12,4) node[left] {$4$};\n\\draw[thick, domain=-1.3:7, smooth, variable=\\x] plot ({\\x},{4.9-0.12*(\\x+1)^2});\n\\fill (5,4) circle (2pt) node[above right] {A};\n\\node at (3.5,-1.2) {Fig. 1};\n\\end{tikzpicture}"
  },
  "AS1-Graph-Transformations-Questions-AS1GraphTransformationsQ003TikZ-001": {
    "id": "AS1-Graph-Transformations-Questions-AS1GraphTransformationsQ003TikZ-001",
    "kind": "latex",
    "componentName": "AS1GraphTransformationsQuestionsAS1GraphTransformationsQ003TikZ001",
    "module": "P1",
    "sourceContent": "\\begin{tikzpicture}[scale=0.65]\n\\draw[->] (-2,0)--(5,0) node[right] {$x$};\n\\draw[->] (0,-2)--(0,3.3) node[above] {$y$};\n\\draw (3,0.12)--(3,-0.12) node[below] {$3$};\n\\draw (0.12,2)--(-0.12,2) node[left] {$2$};\n\\draw[thick] (-1.5,2)--(3,2)--(4.6,-1.2);\n\\node[above] at (3,2) {A};\n\\node at (1.8,-1.5) {Fig. 2};\n\\end{tikzpicture}"
  },
  "AS1-Graph-Transformations-Questions-AS1GraphTransformationsQ004TikZ-001": {
    "id": "AS1-Graph-Transformations-Questions-AS1GraphTransformationsQ004TikZ-001",
    "kind": "latex",
    "componentName": "AS1GraphTransformationsQuestionsAS1GraphTransformationsQ004TikZ001",
    "module": "P1",
    "sourceContent": "\\begin{tikzpicture}[scale=0.65]\n\\draw[->] (-5,0)--(2.3,0) node[right] {$x$};\n\\draw[->] (0,-0.5)--(0,4) node[above] {$y$};\n\\draw (-2,0.12)--(-2,-0.12) node[below] {$-2$};\n\\draw (0.12,1)--(-0.12,1) node[right] {$1$};\n\\draw (0.12,3)--(-0.12,3) node[right] {$3$};\n\\draw[thick] (-4,2.7)--(-2,1)--(1,3.4);\n\\node[above] at (-2,1) {A};\n\\node at (-0.7,-0.7) {Fig. 1};\n\\end{tikzpicture}"
  },
  "AS1-Graph-Transformations-Questions-AS1GraphTransformationsQ005TikZ-001": {
    "id": "AS1-Graph-Transformations-Questions-AS1GraphTransformationsQ005TikZ-001",
    "kind": "latex",
    "componentName": "AS1GraphTransformationsQuestionsAS1GraphTransformationsQ005TikZ001",
    "module": "P1",
    "sourceContent": "\\begin{tikzpicture}[scale=0.6]\n\\draw[->] (-1,0)--(7,0) node[right] {$x$};\n\\draw[->] (0,-1)--(0,5.6) node[above] {$y$};\n\\draw (2,0.12)--(2,-0.12) node[below] {$2$};\n\\draw (0.12,4)--(-0.12,4) node[left] {$4$};\n\\draw[thick] (0,0)--(2,4)--(6.7,4);\n\\node[above] at (2,4) {P};\n\\node at (3.2,-1.0) {Fig. 1};\n\\end{tikzpicture}"
  },
  "AS1-Graph-Transformations-Questions-AS1GraphTransformationsQ006TikZ-001": {
    "id": "AS1-Graph-Transformations-Questions-AS1GraphTransformationsQ006TikZ-001",
    "kind": "latex",
    "componentName": "AS1GraphTransformationsQuestionsAS1GraphTransformationsQ006TikZ001",
    "module": "P1",
    "sourceContent": "\\begin{tikzpicture}[scale=0.6]\n\\draw[->] (-2,0)--(5,0) node[right] {$x$};\n\\draw[->] (0,-1)--(0,4.8) node[above] {$y$};\n\\draw (1,0.12)--(1,-0.12) node[below] {$1$};\n\\draw (0.12,2)--(-0.12,2) node[left] {$2$};\n\\draw[thick] (-1.2,3.5)--(1,2)--(4.5,2);\n\\node[above] at (1,2) {A};\n\\node at (2,-1.0) {Fig. 1};\n\\end{tikzpicture}"
  },
  "AS1-Graph-Transformations-Questions-AS1GraphTransformationsQ007TikZ-001": {
    "id": "AS1-Graph-Transformations-Questions-AS1GraphTransformationsQ007TikZ-001",
    "kind": "latex",
    "componentName": "AS1GraphTransformationsQuestionsAS1GraphTransformationsQ007TikZ001",
    "module": "P1",
    "sourceContent": "\\begin{tikzpicture}[scale=0.65]\n\\draw[->] (-1,0)--(5.2,0) node[right] {$x$};\n\\draw[->] (0,-0.5)--(0,3.5) node[above] {$y$};\n\\draw (3,0.12)--(3,-0.12) node[below] {$3$};\n\\draw (0.12,2)--(-0.12,2) node[left] {$2$};\n\\draw[thick] (0,1.2)--(3,2)--(4.0,1.4);\n\\node[above] at (3,2) {A};\n\\node at (2,-0.8) {Fig. 1};\n\\end{tikzpicture}"
  },
  "AS1-Graph-Transformations-Questions-AS1GraphTransformationsQ008TikZ-001": {
    "id": "AS1-Graph-Transformations-Questions-AS1GraphTransformationsQ008TikZ-001",
    "kind": "latex",
    "componentName": "AS1GraphTransformationsQuestionsAS1GraphTransformationsQ008TikZ001",
    "module": "P1",
    "sourceContent": "\\begin{tikzpicture}[scale=0.55]\n\\begin{scope}\n\\draw[->] (-2.2,0)--(2.8,0) node[right] {$x$}; \\draw[->] (0,-0.5)--(0,5.0) node[above] {$y$};\n\\draw (-1,0.1)--(-1,-0.1) node[below] {$-1$}; \\draw (1,0.1)--(1,-0.1) node[below] {$1$};\n\\draw (0.1,2)--(-0.1,2) node[left] {$2$}; \\draw (0.1,4)--(-0.1,4) node[left] {$4$};\n\\draw[thick] (-2,2)--(-1,2)--(0,4)--(1,2)--(2.6,2);\n\\node at (0,-1.0) {Fig. 2};\n\\end{scope}\n\\begin{scope}[xshift=7cm]\n\\draw[->] (-0.5,0)--(3.3,0) node[right] {$x$}; \\draw[->] (0,-0.5)--(0,5.0) node[above] {$y$};\n\\draw (2,0.1)--(2,-0.1) node[below] {$2$}; \\draw (0.1,2)--(-0.1,2) node[left] {$2$}; \\draw (0.1,4)--(-0.1,4) node[left] {$4$};\n\\draw[thick] (-0.4,2)--(0,2)--(1,4)--(2,2)--(3.0,2);\n\\node at (1.5,-1.0) {Fig. 3};\n\\end{scope}\n\\begin{scope}[yshift=-7cm]\n\\draw[->] (-2.2,0)--(2.8,0) node[right] {$x$}; \\draw[->] (0,-4.8)--(0,1.0) node[above] {$y$};\n\\draw (-1,0.1)--(-1,-0.1) node[above] {$-1$}; \\draw (1,0.1)--(1,-0.1) node[above] {$1$};\n\\draw (0.1,-2)--(-0.1,-2) node[right] {$-2$}; \\draw (0.1,-4)--(-0.1,-4) node[right] {$-4$};\n\\draw[thick] (-2,-2)--(-1,-2)--(0,-4)--(1,-2)--(2.6,-2);\n\\node at (0,-5.3) {Fig. 4};\n\\end{scope}\n\\end{tikzpicture}"
  },
  "AS1-Graph-Transformations-Questions-AS1GraphTransformationsQ009TikZ-001": {
    "id": "AS1-Graph-Transformations-Questions-AS1GraphTransformationsQ009TikZ-001",
    "kind": "latex",
    "componentName": "AS1GraphTransformationsQuestionsAS1GraphTransformationsQ009TikZ001",
    "module": "P1",
    "sourceContent": "\\begin{tikzpicture}[scale=0.65]\n\\draw[->] (-1,0)--(6,0) node[right] {$x$}; \\draw[->] (0,-0.8)--(0,4.6) node[above] {$y$};\n\\draw (3,0.1)--(3,-0.1) node[below] {$3$}; \\draw (0.1,1)--(-0.1,1) node[left] {$1$};\n\\draw[thick, domain=1.4:4.6, smooth, variable=\\x] plot ({\\x},{(\\x-3)^2+1});\n\\node[below right] at (3,1) {P};\n\\node at (3,-0.8) {Fig. 1};\n\\end{tikzpicture}"
  },
  "AS1-Graph-Transformations-Questions-AS1GraphTransformationsQ010TikZ-001": {
    "id": "AS1-Graph-Transformations-Questions-AS1GraphTransformationsQ010TikZ-001",
    "kind": "latex",
    "componentName": "AS1GraphTransformationsQuestionsAS1GraphTransformationsQ010TikZ001",
    "module": "P1",
    "sourceContent": "\\begin{tikzpicture}[scale=0.62]\n\\draw[->] (-1,0)--(5.2,0) node[right] {$x$}; \\draw[->] (0,-0.5)--(0,4.5) node[above] {$y$};\n\\draw (2,0.1)--(2,-0.1) node[below] {$2$}; \\draw (4,0.1)--(4,-0.1) node[below] {$4$}; \\draw (0.1,3)--(-0.1,3) node[left] {$3$};\n\\draw[thick] (0,0)--(2,3)--(4,0);\n\\node[above] at (2,3) {A};\n\\node at (2,-0.9) {Fig. 1};\n\\end{tikzpicture}"
  },
  "AS1-Graph-Transformations-Questions-AS1GraphTransformationsQ011TikZ-001": {
    "id": "AS1-Graph-Transformations-Questions-AS1GraphTransformationsQ011TikZ-001",
    "kind": "latex",
    "componentName": "AS1GraphTransformationsQuestionsAS1GraphTransformationsQ011TikZ001",
    "module": "P1",
    "sourceContent": "\\begin{tikzpicture}[scale=0.62]\n\\draw[->] (-1,0)--(5.2,0) node[right] {$x$}; \\draw[->] (0,-0.5)--(0,5.4) node[above] {$y$};\n\\draw (2,0.1)--(2,-0.1) node[below] {$2$}; \\draw (0.1,4)--(-0.1,4) node[left] {$4$};\n\\draw[thick] (1.0,5.0)--(2,4)--(4.5,4);\n\\node[below] at (2,4) {T};\n\\node at (2.4,-0.9) {Fig. 1};\n\\end{tikzpicture}"
  },
  "AS1-Graph-Transformations-Questions-AS1GraphTransformationsQ012TikZ-001": {
    "id": "AS1-Graph-Transformations-Questions-AS1GraphTransformationsQ012TikZ-001",
    "kind": "latex",
    "componentName": "AS1GraphTransformationsQuestionsAS1GraphTransformationsQ012TikZ001",
    "module": "P1",
    "sourceContent": "\\begin{tikzpicture}[scale=0.62]\n\\draw[->] (-1,0)--(5.2,0) node[right] {$x$}; \\draw[->] (0,-0.5)--(0,4.8) node[above] {$y$};\n\\draw (2,0.1)--(2,-0.1) node[below] {$2$}; \\draw (0.1,3)--(-0.1,3) node[left] {$3$};\n\\draw[thick] (0,0)--(2,3)--(4.7,3);\n\\node[above] at (2,3) {A};\n\\node at (2.4,-0.9) {Fig. 1};\n\\end{tikzpicture}"
  },
  "AS1-Graph-Transformations-Questions-AS1GraphTransformationsQ013TikZ-001": {
    "id": "AS1-Graph-Transformations-Questions-AS1GraphTransformationsQ013TikZ-001",
    "kind": "latex",
    "componentName": "AS1GraphTransformationsQuestionsAS1GraphTransformationsQ013TikZ001",
    "module": "P1",
    "sourceContent": "\\begin{tikzpicture}[scale=0.52]\n\\begin{scope}\n\\draw[->] (-0.5,0)--(4,0) node[right] {$x$}; \\draw[->] (0,-0.5)--(0,5) node[above] {$y$};\n\\draw (2,0.1)--(2,-0.1) node[below] {$2$}; \\draw (3,0.1)--(3,-0.1) node[below] {$3$};\n\\draw (0.1,4)--(-0.1,4) node[left] {$4$};\n\\draw[thick] (0,4)--(2,4)--(3,0); \\node[above right] at (2,4) {A $(2,4)$}; \\node at (1.7,-0.8) {Fig. 1};\n\\end{scope}\n\\begin{scope}[yshift=-6cm]\n\\draw[->] (-1.2,0)--(2.2,0) node[right] {$x$}; \\draw[->] (0,-0.5)--(0,5) node[above] {$y$};\n\\draw (1,0.1)--(1,-0.1) node[below] {$1$};\n\\draw[thick] (-1,4)--(0,4)--(1,0); \\node[above right] at (0,4) {$A'(0,4)$}; \\node[left] at (-0.8,4.6) {(i)};\n\\end{scope}\n\\begin{scope}[xshift=6cm,yshift=-6cm]\n\\draw[->] (-0.5,0)--(4,0) node[right] {$x$}; \\draw[->] (0,-0.5)--(0,3) node[above] {$y$};\n\\draw (2,0.1)--(2,-0.1) node[below] {$2$}; \\draw (3,0.1)--(3,-0.1) node[below] {$3$};\n\\draw[thick] (0,2)--(2,2)--(3,0); \\node[above] at (2,2) {$A'(2,2)$}; \\node[left] at (-0.4,2.6) {(ii)};\n\\end{scope}\n\\begin{scope}[yshift=-12cm]\n\\draw[->] (-4.2,0)--(0.7,0) node[right] {$x$}; \\draw[->] (0,-0.5)--(0,5) node[above] {$y$};\n\\draw (-3,0.1)--(-3,-0.1) node[below] {$-3$}; \\draw (-2,0.1)--(-2,-0.1) node[below] {$-2$};\n\\draw[thick] (-3,0)--(-2,4)--(0,4); \\node[above left] at (-2,4) {$A'(-2,4)$}; \\node[left] at (-3.8,4.6) {(iii)};\n\\end{scope}\n\\end{tikzpicture}"
  },
  "AS1-Graph-Transformations-Questions-AS1GraphTransformationsQ014TikZ-001": {
    "id": "AS1-Graph-Transformations-Questions-AS1GraphTransformationsQ014TikZ-001",
    "kind": "latex",
    "componentName": "AS1GraphTransformationsQuestionsAS1GraphTransformationsQ014TikZ001",
    "module": "P1",
    "sourceContent": "\\begin{tikzpicture}[scale=0.65]\n\\draw[->] (-0.8,0)--(6,0) node[right] {$x$}; \\draw[->] (0,-0.5)--(0,7.5) node[above] {$y$};\n\\draw (3,0.1)--(3,-0.1) node[below] {$3$}; \\draw (0.1,6)--(-0.1,6) node[left] {$6$};\n\\draw[thick, domain=0.8:5.2, smooth, variable=\\x] plot ({\\x},{6-1.1*(\\x-3)^2});\n\\node[above right] at (3,6) {A $(3,6)$};\n\\node at (3,-0.9) {Fig. 1};\n\\end{tikzpicture}"
  },
  "AS1-Graph-Transformations-Questions-AS1GraphTransformationsQ015TikZ-001": {
    "id": "AS1-Graph-Transformations-Questions-AS1GraphTransformationsQ015TikZ-001",
    "kind": "latex",
    "componentName": "AS1GraphTransformationsQuestionsAS1GraphTransformationsQ015TikZ001",
    "module": "P1",
    "sourceContent": "\\begin{tikzpicture}[scale=0.5]\n\\begin{scope}\n\\draw[->] (-0.5,0)--(3,0) node[right] {$x$}; \\draw[->] (0,-0.5)--(0,5.2) node[above] {$y$};\n\\draw (1,0.1)--(1,-0.1) node[below] {$1$}; \\draw (2,0.1)--(2,-0.1) node[below] {$2$};\n\\draw[thick] (0,0)--(1,4)--(2,0); \\node[above right] at (1,4) {A $(1,4)$}; \\node at (1,-0.8) {Fig. 1};\n\\end{scope}\n\\begin{scope}[xshift=6cm]\n\\draw[->] (-0.5,0)--(4,0) node[right] {$x$}; \\draw[->] (0,-0.5)--(0,5.2) node[above] {$y$};\n\\draw (1,0.1)--(1,-0.1) node[below] {$1$}; \\draw (2,0.1)--(2,-0.1) node[below] {$2$}; \\draw (3,0.1)--(3,-0.1) node[below] {$3$};\n\\draw[thick] (1,0)--(2,4)--(3,0); \\node[above right] at (2,4) {$A'(2,4)$}; \\node at (1.8,-0.8) {(i)};\n\\end{scope}\n\\begin{scope}[yshift=-6cm]\n\\draw[->] (-0.5,0)--(3,0) node[right] {$x$}; \\draw[->] (0,-0.5)--(0,3.2) node[above] {$y$};\n\\draw (1,0.1)--(1,-0.1) node[below] {$1$}; \\draw (2,0.1)--(2,-0.1) node[below] {$2$};\n\\draw[thick] (0,0)--(1,2)--(2,0); \\node[above right] at (1,2) {$A'(1,2)$}; \\node at (1,-0.8) {(ii)};\n\\end{scope}\n\\begin{scope}[xshift=6cm,yshift=-6cm]\n\\draw[->] (-0.5,0)--(5,0) node[right] {$x$}; \\draw[->] (0,-0.5)--(0,5.2) node[above] {$y$};\n\\draw (2,0.1)--(2,-0.1) node[below] {$2$}; \\draw (4,0.1)--(4,-0.1) node[below] {$4$};\n\\draw[thick] (0,0)--(2,4)--(4,0); \\node[above right] at (2,4) {$A'(2,4)$}; \\node at (2,-0.8) {(iii)};\n\\end{scope}\n\\end{tikzpicture}"
  },
  "AS1-Graph-Transformations-Questions-AS1GraphTransformationsQ016TikZ-001": {
    "id": "AS1-Graph-Transformations-Questions-AS1GraphTransformationsQ016TikZ-001",
    "kind": "latex",
    "componentName": "AS1GraphTransformationsQuestionsAS1GraphTransformationsQ016TikZ001",
    "module": "P1",
    "sourceContent": "\\begin{tikzpicture}[scale=0.65]\n\\draw[->] (-3.2,0)--(4,0) node[right] {$x$}; \\draw[->] (0,-0.5)--(0,5.2) node[above] {$y$};\n\\draw[thick, domain=-3:2.1, smooth, variable=\\x] plot ({\\x},{exp(0.55*\\x)});\n\\fill (0,1) circle (2pt) node[below right] {A $(0,1)$};\n\\node[right] at (2,3.4) {$y=f(x)$};\n\\node[below left] at (0,0) {O};\n\\node at (0,-0.9) {Fig. 1};\n\\end{tikzpicture}"
  },
  "AS1-Graph-Transformations-Questions-AS1GraphTransformationsSupportWidget-001": {
    "id": "AS1-Graph-Transformations-Questions-AS1GraphTransformationsSupportWidget-001",
    "kind": "html",
    "componentName": "AS1GraphTransformationsQuestionsAS1GraphTransformationsSupportWidget001",
    "module": "P1",
    "sourceContent": "<!doctype html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Coordinate Image Checker</title>\n<style>\nbody { font-family: sans-serif; max-width: 760px; margin: 2rem auto; line-height: 1.4; }\nlabel { display: block; margin: 0.5rem 0; }\ninput, select { padding: 0.25rem; }\n.output { margin-top: 1rem; padding: 1rem; border: 1px solid #ccc; background: #f7f7f7; }\n</style>\n</head>\n<body>\n<h1>Coordinate Image Checker</h1>\n<label>Original x: <input id=\"x\" type=\"number\" value=\"1\" step=\"0.5\"></label>\n<label>Original y: <input id=\"y\" type=\"number\" value=\"4\" step=\"0.5\"></label>\n<label>Transformation:\n<select id=\"type\">\n<option value=\"right\">y = f(x - a)</option>\n<option value=\"left\">y = f(x + a)</option>\n<option value=\"vscale\">y = a f(x)</option>\n<option value=\"hscale\">y = f(a x)</option>\n<option value=\"reflectx\">y = -f(x)</option>\n<option value=\"reflecty\">y = f(-x)</option>\n<option value=\"up\">y = f(x) + a</option>\n<option value=\"down\">y = f(x) - a</option>\n</select>\n</label>\n<label>Parameter a: <input id=\"a\" type=\"number\" value=\"1\" step=\"0.5\"></label>\n<button onclick=\"calculate()\">Calculate image point</button>\n<div class=\"output\" id=\"out\"></div>\n<script>\nfunction calculate() {\n  const x = parseFloat(document.getElementById('x').value);\n  const y = parseFloat(document.getElementById('y').value);\n  const a = parseFloat(document.getElementById('a').value);\n  const type = document.getElementById('type').value;\n  let X=x, Y=y, note='';\n  if (type==='right') { X=x+a; note='Shift right by a.'; }\n  if (type==='left') { X=x-a; note='Shift left by a.'; }\n  if (type==='vscale') { Y=a*y; note='Multiply y-coordinate by a.'; }\n  if (type==='hscale') { X=x/a; note='Divide x-coordinate by a.'; }\n  if (type==='reflectx') { Y=-y; note='Reflect in the x-axis.'; }\n  if (type==='reflecty') { X=-x; note='Reflect in the y-axis.'; }\n  if (type==='up') { Y=y+a; note='Shift up by a.'; }\n  if (type==='down') { Y=y-a; note='Shift down by a.'; }\n  document.getElementById('out').innerHTML = `<strong>Image point:</strong> (${X}, ${Y})<br><strong>Rule reminder:</strong> ${note}`;\n}\ncalculate();\n</script>\n</body>\n</html>"
  },
  "AS1-Coordinate-Geometry-Questions-AS1CoordinateGeometryCircleQ003TikZ-001": {
    "id": "AS1-Coordinate-Geometry-Questions-AS1CoordinateGeometryCircleQ003TikZ-001",
    "kind": "latex",
    "componentName": "AS1CoordinateGeometryQuestionsAS1CoordinateGeometryCircleQ003TikZ001",
    "module": "P2",
    "sourceContent": "\\begin{tikzpicture}[scale=0.85]\n  \\coordinate (A) at (0,3);\n  \\coordinate (B) at (3.2,2.4);\n  \\coordinate (C) at (3.5,0.6);\n  \\coordinate (D) at (-1.2,0);\n\n  \\draw[thick] (A)--(B)--(C)--(D)--cycle;\n  \\draw[dashed] (A)--(C);\n  \\draw[dashed] (B)--(D);\n\n  \\node[above] at (A) {$A$};\n  \\node[right] at (B) {$B$};\n  \\node[right] at (C) {$C$};\n  \\node[left] at (D) {$D$};\n  \\node[below] at (1.5,-0.35) {Fig. 1};\n\\end{tikzpicture}"
  },
  "AS1-Coordinate-Geometry-Questions-AS1CoordinateGeometryCircleQ007TikZ-001": {
    "id": "AS1-Coordinate-Geometry-Questions-AS1CoordinateGeometryCircleQ007TikZ-001",
    "kind": "latex",
    "componentName": "AS1CoordinateGeometryQuestionsAS1CoordinateGeometryCircleQ007TikZ001",
    "module": "P2",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9]\n  \\coordinate (A) at (0,3.2);\n  \\coordinate (B) at (-2,0);\n  \\coordinate (C) at (2,0);\n  \\coordinate (D) at (0,0);\n\n  \\draw[thick] (A)--(B)--(C)--cycle;\n  \\draw[dashed] (A)--(D);\n\n  % equal-side tick marks\n  \\draw ($(A)!0.5!(B)+(-0.08,0.08)$) -- ($(A)!0.5!(B)+(0.08,-0.08)$);\n  \\draw ($(A)!0.5!(C)+(-0.08,-0.08)$) -- ($(A)!0.5!(C)+(0.08,0.08)$);\n\n  \\node[above] at (A) {$A$};\n  \\node[left] at (B) {$B$};\n  \\node[right] at (C) {$C$};\n  \\node[below] at (D) {$D$};\n  \\node[below] at (0,-0.55) {Fig. 1};\n\\end{tikzpicture}"
  },
  "AS1-Coordinate-Geometry-Questions-AS1CoordinateGeometryCircleQ012TikZ-001": {
    "id": "AS1-Coordinate-Geometry-Questions-AS1CoordinateGeometryCircleQ012TikZ-001",
    "kind": "latex",
    "componentName": "AS1CoordinateGeometryQuestionsAS1CoordinateGeometryCircleQ012TikZ001",
    "module": "P2",
    "sourceContent": "\\begin{tikzpicture}[scale=0.8]\n  \\coordinate (A) at (0,0);\n  \\coordinate (B) at (3.2,0.5);\n  \\coordinate (C) at (5.3,2.8);\n  \\coordinate (D) at (2.1,2.3);\n  \\coordinate (O) at ($(A)!0.5!(C)$);\n\n  \\draw[thick] (A)--(B)--(C)--(D)--cycle;\n  \\draw[dashed] (A)--(C);\n  \\draw[dashed] (B)--(D);\n\n  % right angle marker near intersection\n  \\draw ($(O)+(0.16,0.05)$)--($(O)+(0.05,0.22)$)--($(O)+(-0.11,0.12)$);\n\n  \\node[below left] at (A) {$A$};\n  \\node[below right] at (B) {$B$};\n  \\node[above right] at (C) {$C$};\n  \\node[above left] at (D) {$D$};\n  \\node[below] at (2.6,-0.45) {Fig. 3};\n\\end{tikzpicture}"
  },
  "AS1-Coordinate-Geometry-Questions-AS1CoordinateGeometryCircleQ014TikZ-001": {
    "id": "AS1-Coordinate-Geometry-Questions-AS1CoordinateGeometryCircleQ014TikZ-001",
    "kind": "latex",
    "componentName": "AS1CoordinateGeometryQuestionsAS1CoordinateGeometryCircleQ014TikZ001",
    "module": "P2",
    "sourceContent": "\\begin{tikzpicture}[scale=0.75]\n  % axes\n  \\draw[->] (-4.2,0)--(5.0,0) node[right] {$x$};\n  \\draw[->] (0,-4.2)--(0,4.4) node[above] {$y$};\n\n  % reciprocal curve y=3/x\n  \\draw[thick,domain=0.65:5,samples=100] plot (\\x,{3/\\x});\n  \\draw[thick,domain=-4:-0.65,samples=100] plot (\\x,{3/\\x});\n\n  % line y=x-2\n  \\draw[thick] (-2.2,-4.2)--(5,3);\n\n  % intersection points\n  \\fill (-1,-3) circle (2pt) node[left] {$A$};\n  \\fill (3,1) circle (2pt) node[above] {$B$};\n\n  \\node[below] at (0,-4.55) {Fig. 2};\n\\end{tikzpicture}"
  },
  "AS1-Coordinate-Geometry-Questions-AS1CoordinateGeometryCircleQ016TikZ-001": {
    "id": "AS1-Coordinate-Geometry-Questions-AS1CoordinateGeometryCircleQ016TikZ-001",
    "kind": "latex",
    "componentName": "AS1CoordinateGeometryQuestionsAS1CoordinateGeometryCircleQ016TikZ001",
    "module": "P2",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9]\n  \\coordinate (O) at (0,0);\n  \\coordinate (B) at (-1.05,1.05);\n  \\coordinate (A) at (1.7,3.8);\n\n  \\draw[thick] (O) circle (1.5);\n  \\draw[thick] (-2.2,-0.15)--(A);\n  \\draw[thick] (A)--(B);\n  \\fill (B) circle (2pt);\n  \\node[left] at (B) {$B$};\n  \\node[above] at (A) {$A$};\n  \\node[below] at (0,-1.9) {Fig. 3};\n\\end{tikzpicture}"
  },
  "AS1-Coordinate-Geometry-Questions-AS1CoordinateGeometryCircleQ018TikZ-001": {
    "id": "AS1-Coordinate-Geometry-Questions-AS1CoordinateGeometryCircleQ018TikZ-001",
    "kind": "latex",
    "componentName": "AS1CoordinateGeometryQuestionsAS1CoordinateGeometryCircleQ018TikZ001",
    "module": "P2",
    "sourceContent": "\\begin{tikzpicture}[scale=0.55]\n  \\coordinate (O) at (-3,2);\n  \\coordinate (A) at (0,6);\n  \\coordinate (B) at (0,-2);\n  \\coordinate (C) at (1,5);\n\n  \\draw[thick] (O) circle (5);\n  \\fill (O) circle (2pt) node[below] {Mast};\n  \\fill (A) circle (2pt) node[above right] {$A$};\n  \\fill (B) circle (2pt) node[below right] {$B$};\n  \\fill (C) circle (2pt) node[right] {$C$};\n\n  \\node[below] at (-3,-4) {Fig. 7};\n\\end{tikzpicture}"
  },
  "AS1-Coordinate-Geometry-Questions-AS1CoordinateGeometryCircleQ020TikZ-001": {
    "id": "AS1-Coordinate-Geometry-Questions-AS1CoordinateGeometryCircleQ020TikZ-001",
    "kind": "latex",
    "componentName": "AS1CoordinateGeometryQuestionsAS1CoordinateGeometryCircleQ020TikZ001",
    "module": "P2",
    "sourceContent": "\\begin{tikzpicture}[scale=0.8]\n  \\coordinate (B) at (0,0);\n  \\coordinate (A) at (2.2,2.2);\n  \\coordinate (D) at (-2.2,-2.2);\n\n  \\draw[thick] (B) circle (3.11);\n  \\draw[thick] (D)--(A);\n  \\fill (B) circle (2pt) node[left] {$B$};\n  \\fill (A) circle (2pt) node[above right] {$A$};\n  \\fill (D) circle (2pt) node[below left] {$D$};\n\n  \\node[below] at (0,-3.55) {Fig. 1};\n\\end{tikzpicture}"
  },
  "AS1-Coordinate-Geometry-Questions-AS1CoordinateGeometryCircleQ021TikZ-001": {
    "id": "AS1-Coordinate-Geometry-Questions-AS1CoordinateGeometryCircleQ021TikZ-001",
    "kind": "latex",
    "componentName": "AS1CoordinateGeometryQuestionsAS1CoordinateGeometryCircleQ021TikZ001",
    "module": "P2",
    "sourceContent": "\\begin{tikzpicture}[scale=0.35]\n  % axes\n  \\draw[->] (-10,0)--(14,0) node[right] {$x$};\n  \\draw[->] (0,-6)--(0,14) node[above] {$y$};\n\n  % circle A\n  \\coordinate (OA) at (6,6);\n  \\draw[thick] (OA) circle (6);\n  \\fill (OA) circle (2pt);\n  \\node[above right] at (10,11) {$A$};\n\n  % circle B\n  \\coordinate (OB) at (-6,-3);\n  \\draw[thick] (OB) circle (2);\n  \\fill (OB) circle (2pt);\n  \\node[left] at (-8,-3) {$B$};\n\n  % illustrative chain/tangent lines\n  \\draw[dashed] (-8.2,-1.0)--(0,8.0);\n  \\draw[dashed] (-4.5,-4.5)--(6,0.0);\n\n  \\node[below] at (1,-6.5) {Fig. 4};\n\\end{tikzpicture}"
  },
  "AS1-Coordinate-Geometry-Questions-AS1CoordinateGeometryCircleQ022TikZ-001": {
    "id": "AS1-Coordinate-Geometry-Questions-AS1CoordinateGeometryCircleQ022TikZ-001",
    "kind": "latex",
    "componentName": "AS1CoordinateGeometryQuestionsAS1CoordinateGeometryCircleQ022TikZ001",
    "module": "P2",
    "sourceContent": "\\begin{tikzpicture}[scale=0.75]\n  \\coordinate (C) at (0,0);\n  \\coordinate (A) at (-3.7,3.1);\n  \\coordinate (B) at (1.0,1.73);\n  \\coordinate (D) at (-1.73,-1.0);\n\n  \\draw[thick] (C) circle (2);\n  \\draw[thick] (A)--(B);\n  \\draw[thick] (A)--(D);\n  \\draw[dashed] (C)--(B);\n  \\draw[dashed] (C)--(D);\n\n  \\fill (A) circle (2pt) node[above left] {$A$};\n  \\fill (B) circle (2pt) node[right] {$B$};\n  \\fill (C) circle (2pt) node[below] {$C$};\n  \\fill (D) circle (2pt) node[left] {$D$};\n\n  \\node[below] at (0,-2.55) {Fig. 4};\n\\end{tikzpicture}"
  },
  "AS1-Coordinate-Geometry-Questions-AS1CoordinateGeometryCircleQ023TikZ-001": {
    "id": "AS1-Coordinate-Geometry-Questions-AS1CoordinateGeometryCircleQ023TikZ-001",
    "kind": "latex",
    "componentName": "AS1CoordinateGeometryQuestionsAS1CoordinateGeometryCircleQ023TikZ001",
    "module": "P2",
    "sourceContent": "\\begin{tikzpicture}[scale=1.1]\n  \\coordinate (L) at (0,0);\n  \\coordinate (S) at (0,1);\n  \\draw[thick] (L) circle (2);\n  \\draw[thick] (S) circle (1);\n  \\fill (L) circle (1.5pt);\n  \\fill (S) circle (1.5pt);\n  \\node[below] at (0,-2.35) {Fig. 1};\n\\end{tikzpicture}"
  },
  "AS1-Trigonometry-Questions-AS1TrigonometryQ002TikZ-001": {
    "id": "AS1-Trigonometry-Questions-AS1TrigonometryQ002TikZ-001",
    "kind": "latex",
    "componentName": "AS1TrigonometryQuestionsAS1TrigonometryQ002TikZ001",
    "module": "P4",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=latex]\n  \\coordinate (H) at (0,0);\n  \\draw[->,thick] (H) -- (0,3) node[above] {N};\n  \\draw[dashed] (H) -- (0,-2.5);\n  \\draw[->,thick] (H) -- (1.6,2.5) node[right] {Ship D};\n  \\draw[->,thick] (H) -- (1.8,-1.9) node[right] {Ship C};\n  \\node[left] at (H) {Harbour};\n  \\draw (0,1.0) arc (90:60:1.0);\n  \\node at (0.42,1.05) {$30^\\circ$};\n  \\draw (0,-0.8) arc (-90:-50:0.8);\n  \\node at (0.45,-0.9) {$40^\\circ$};\n  \\node[below] at (0,-2.8) {Fig. 3};\n\\end{tikzpicture}"
  },
  "AS1-Trigonometry-Questions-AS1TrigonometryQ003TikZ-001": {
    "id": "AS1-Trigonometry-Questions-AS1TrigonometryQ003TikZ-001",
    "kind": "latex",
    "componentName": "AS1TrigonometryQuestionsAS1TrigonometryQ003TikZ001",
    "module": "P4",
    "sourceContent": "\\begin{tikzpicture}[scale=0.85]\n  \\coordinate (A) at (0,0);\n  \\coordinate (B) at (1.0,2.2);\n  \\coordinate (C) at (5.0,1.9);\n  \\coordinate (D) at (6.4,-1.0);\n  \\draw[thick] (A)--(B)--(C)--(D)--cycle;\n  \\draw[thick] (A)--(C);\n  \\draw[dashed,<->] (-0.35,0.1)--(0.7,2.3) node[midway,left] {150 m};\n  \\draw[dashed,<->] (5.25,1.85)--(6.65,-0.9) node[midway,right] {200 m};\n  \\draw[dashed,<->] (-0.1,-0.4)--(6.3,-1.35) node[midway,below] {300 m};\n  \\node[left] at (A) {$A$};\n  \\node[above] at (B) {$B$};\n  \\node[right] at (C) {$C$};\n  \\node[right] at (D) {$D$};\n  \\draw (B)+(0.55,-0.2) arc (-15:-120:0.55);\n  \\node at (1.55,1.55) {$120^\\circ$};\n  \\draw (C)+(-0.75,-0.05) arc (183:220:0.75);\n  \\node at (4.35,1.65) {$35^\\circ$};\n  \\node at (3.1,-1.75) {Fig. 2};\n\\end{tikzpicture}"
  },
  "AS1-Trigonometry-Questions-AS1TrigonometryQ006TikZ-001": {
    "id": "AS1-Trigonometry-Questions-AS1TrigonometryQ006TikZ-001",
    "kind": "latex",
    "componentName": "AS1TrigonometryQuestionsAS1TrigonometryQ006TikZ001",
    "module": "P4",
    "sourceContent": "\\begin{tikzpicture}[scale=0.8,>=latex]\n  \\draw[->] (0,-2.2) -- (0,2.4) node[above] {$A$};\n  \\draw[->] (0,0) -- (7.5,0) node[right] {$t$};\n  \\draw[domain=0:6.8,samples=160,thick] plot(\\x,{1.7*cos(90*\\x/5)});\n  \\node[left] at (0,1.7) {$6$};\n  \\node[left] at (0,-1.7) {$-6$};\n  \\node[below] at (1.25,0) {$5$};\n  \\node at (4,-2.35) {Fig. 4};\n\\end{tikzpicture}"
  },
  "AS1-Trigonometry-Questions-AS1TrigonometryQ007TikZ-001": {
    "id": "AS1-Trigonometry-Questions-AS1TrigonometryQ007TikZ-001",
    "kind": "latex",
    "componentName": "AS1TrigonometryQuestionsAS1TrigonometryQ007TikZ001",
    "module": "P4",
    "sourceContent": "\\begin{tikzpicture}[scale=0.95]\n  \\coordinate (A) at (0,0);\n  \\coordinate (B) at (3.2,0.15);\n  \\coordinate (C) at (6.0,2.2);\n  \\draw[thick] (A)--(B)--(C)--cycle;\n  \\draw[dashed,<->] (0.1,0.35)--(5.85,2.55) node[midway,above] {28};\n  \\draw[dashed,<->] (3.45,0.35)--(6.25,2.35) node[midway,right] {12};\n  \\node[below] at (A) {$A$};\n  \\node[below] at (B) {$B$};\n  \\node[above] at (C) {$C$};\n  \\draw (A)+(0.75,0.02) arc (2:22:0.75);\n  \\node at (0.95,0.25) {$22^\\circ$};\n  \\node at (3.2,-0.7) {Fig. 5};\n\\end{tikzpicture}"
  },
  "AS1-Trigonometry-Questions-AS1TrigonometryQ012TikZ-001": {
    "id": "AS1-Trigonometry-Questions-AS1TrigonometryQ012TikZ-001",
    "kind": "latex",
    "componentName": "AS1TrigonometryQuestionsAS1TrigonometryQ012TikZ001",
    "module": "P4",
    "sourceContent": "\\begin{tikzpicture}[scale=0.85,>=latex]\n  \\coordinate (P) at (0,2.2);\n  \\coordinate (Q) at (4.1,1.4);\n  \\coordinate (R) at (2.4,-1.2);\n  \\draw[->] (P) -- +(0,2) node[above] {N};\n  \\draw[->] (Q) -- +(0,1.8) node[above] {N};\n  \\draw[thick] (P)--(Q)--(R)--cycle;\n  \\node[left] at (P) {$P$};\n  \\node[right] at (Q) {$Q$};\n  \\node[below] at (R) {$R$};\n  \\node[above] at ($(P)!0.5!(Q)$) {50};\n  \\node[right] at ($(Q)!0.55!(R)$) {40};\n  \\node at (2.3,-1.8) {Fig. 1};\n\\end{tikzpicture}"
  },
  "AS1-Trigonometry-Questions-AS1TrigonometryQ014TikZ-001": {
    "id": "AS1-Trigonometry-Questions-AS1TrigonometryQ014TikZ-001",
    "kind": "latex",
    "componentName": "AS1TrigonometryQuestionsAS1TrigonometryQ014TikZ001",
    "module": "P4",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9]\n  \\coordinate (A) at (0,0);\n  \\coordinate (B) at (4.9,0);\n  \\coordinate (E) at (6.2,0);\n  \\coordinate (D) at (4.4,3.1);\n  \\coordinate (C) at (5.7,1.8);\n  \\draw[thick] (A)--(D)--(C)--(B)--cycle;\n  \\draw[thick] (D)--(B);\n  \\draw[dashed] (A)--(E);\n  \\node[below left] at (A) {$A$};\n  \\node[below] at (B) {$B$};\n  \\node[right] at (C) {$C$};\n  \\node[above] at (D) {$D$};\n  \\node[right] at (E) {$E$};\n  \\node[below] at ($(A)!0.5!(B)$) {4.9 km};\n  \\node[left] at ($(A)!0.5!(D)$) {5.4 km};\n  \\node[right] at ($(B)!0.5!(C)$) {2.1 km};\n  \\draw (A)+(0.9,0) arc (0:35:0.9);\n  \\node at (1.15,0.35) {$35^\\circ$};\n  \\draw (B)+(0.75,0) arc (0:50:0.75);\n  \\node at (5.35,0.55) {$50^\\circ$};\n  \\node at (3.1,-0.8) {Fig. 1};\n\\end{tikzpicture}"
  },
  "AS1-Trigonometry-Questions-AS1TrigonometryQ016TikZ-001": {
    "id": "AS1-Trigonometry-Questions-AS1TrigonometryQ016TikZ-001",
    "kind": "latex",
    "componentName": "AS1TrigonometryQuestionsAS1TrigonometryQ016TikZ001",
    "module": "P4",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=latex]\n  \\coordinate (B) at (0,0);\n  \\coordinate (R) at (3.2,-1.2);\n  \\coordinate (H) at (5.0,1.9);\n  \\draw[->] (B)--(0,2.0) node[above] {N};\n  \\draw[thick] (B)--(R)--(H)--cycle;\n  \\node[left] at (B) {Base};\n  \\node[below] at (R) {Rescue};\n  \\node[right] at (H) {Hospital};\n  \\node[below] at ($(B)!0.5!(R)$) {70};\n  \\node[right] at ($(R)!0.5!(H)$) {80};\n  \\node at (2.5,-1.8) {Fig. 2};\n\\end{tikzpicture}"
  },
  "AS1-Trigonometry-Questions-AS1TrigonometryQ021TikZ-001": {
    "id": "AS1-Trigonometry-Questions-AS1TrigonometryQ021TikZ-001",
    "kind": "latex",
    "componentName": "AS1TrigonometryQuestionsAS1TrigonometryQ021TikZ001",
    "module": "P4",
    "sourceContent": "\\begin{tikzpicture}[scale=0.85]\n  \\coordinate (B) at (0,0);\n  \\coordinate (A) at (2.0,0.1);\n  \\coordinate (C) at (1.1,3.0);\n  \\coordinate (D) at (3.8,-2.0);\n  \\draw[thick] (B)--(A)--(D)--(C)--(B);\n  \\draw[thick] (A)--(C);\n  \\node[left] at (B) {$B$};\n  \\node[right] at (A) {$A$};\n  \\node[above] at (C) {$C$};\n  \\node[below] at (D) {$D$};\n  \\node[left] at ($(B)!0.5!(C)$) {6.9};\n  \\node[below] at ($(B)!0.5!(A)$) {3.5};\n  \\node[right] at ($(C)!0.5!(D)$) {11.6};\n  \\draw (D)+(-0.55,0.15) arc (165:120:0.6);\n  \\node at (3.35,-1.35) {$28^\\circ$};\n  \\node[right] at (4.2,1.6) {diagram\\\\not drawn\\\\accurately};\n  \\node at (2.2,-2.6) {Fig. 2};\n\\end{tikzpicture}"
  },
  "AS1-Trigonometry-Questions-AS1TrigonometryQ024TikZ-001": {
    "id": "AS1-Trigonometry-Questions-AS1TrigonometryQ024TikZ-001",
    "kind": "latex",
    "componentName": "AS1TrigonometryQuestionsAS1TrigonometryQ024TikZ001",
    "module": "P4",
    "sourceContent": "\\begin{tikzpicture}[scale=0.55]\n  % triangular arrangement of 15 balls\n  \\foreach \\row in {0,...,4}{\n    \\foreach \\col in {0,...,\\row}{\n      \\pgfmathsetmacro{\\x}{\\col*1.1 - \\row*0.55}\n      \\pgfmathsetmacro{\\y}{-\\row*0.95}\n      \\shade[ball color=gray] (\\x,\\y) circle (0.5);\n    }\n  }\n  \\node at (0,-5.3) {Fig. 3};\n  % frame version shifted right\n  \\begin{scope}[xshift=7cm]\n    \\draw[thick] (-3,-4.1)--(0,1.2)--(3,-4.1)--cycle;\n    \\foreach \\row in {0,...,4}{\n      \\foreach \\col in {0,...,\\row}{\n        \\pgfmathsetmacro{\\x}{\\col*1.05 - \\row*0.525}\n        \\pgfmathsetmacro{\\y}{-\\row*0.9}\n        \\shade[ball color=gray] (\\x,\\y-0.3) circle (0.48);\n      }\n    }\n    \\node at (0,-5.3) {Fig. 4};\n  \\end{scope}\n\\end{tikzpicture}"
  },
  "AS1-Trigonometry-Questions-AS1TrigonometryQ026TikZ-001": {
    "id": "AS1-Trigonometry-Questions-AS1TrigonometryQ026TikZ-001",
    "kind": "latex",
    "componentName": "AS1TrigonometryQuestionsAS1TrigonometryQ026TikZ001",
    "module": "P4",
    "sourceContent": "\\begin{tikzpicture}[scale=1.0]\n  \\coordinate (O) at (0,0);\n  \\coordinate (A) at (0,3);\n  \\coordinate (B) at (0,-3);\n  \\coordinate (S) at (2.6,-1.5);\n  \\coordinate (D) at (1.25,-0.72);\n  \\draw[thick] (O) circle (3);\n  \\draw[thick] (A)--(B);\n  \\draw[thick] (O)--(S);\n  \\draw[thick] (B)--(D);\n  \\draw[thick] (A)--(D);\n  \\node[above] at (A) {$A$};\n  \\node[below] at (B) {$B$};\n  \\node[left] at (O) {$O$};\n  \\node[right] at (D) {$D$};\n  \\node[right] at (S) {$S$};\n  \\draw (D)+(0.22,-0.12)--++(-0.12,-0.22)--++(-0.22,0.12);\n  \\draw (O)+(0,-0.75) arc (-90:-30:0.75);\n  \\node at (0.45,-0.7) {$\\theta$};\n  \\node at (0,-3.8) {Fig. 3};\n\\end{tikzpicture}"
  },
  "AS1-Exponentials-Logarithms-Questions-AS1LogarithmsAndExponentialsQ004TikZ-001": {
    "id": "AS1-Exponentials-Logarithms-Questions-AS1LogarithmsAndExponentialsQ004TikZ-001",
    "kind": "latex",
    "componentName": "AS1ExponentialsLogarithmsQuestionsAS1LogarithmsAndExponentialsQ004TikZ001",
    "module": "P5",
    "sourceContent": "\\begin{tikzpicture}[scale=0.8, >=Stealth]\n  \\draw[->] (-3.2,0) -- (3.2,0) node[right] {$x$};\n  \\draw[->] (0,-0.3) -- (0,5.5) node[above] {$y$};\n  \\draw[domain=-3:1.78, smooth, samples=80] plot ({\\x}, {0.45*exp(ln(3)*\\x)}) node[right] {$y=3^x$};\n  \\draw[domain=-3:0.1, smooth, samples=80] plot ({\\x}, {0.45*exp(ln(3)*(\\x+2))}) node[above right] {$y=3^{x+2}$};\n  \\draw (-0.08,0.45) -- (0.08,0.45) node[right] {$1$};\n  \\draw (-0.08,4.05) -- (0.08,4.05) node[right] {$9$};\n  \\draw (-2,0.08) -- (-2,-0.08) node[below] {$-2$};\n\\end{tikzpicture}"
  },
  "AS1-Exponentials-Logarithms-Questions-AS1LogarithmsAndExponentialsQ006TikZ-001": {
    "id": "AS1-Exponentials-Logarithms-Questions-AS1LogarithmsAndExponentialsQ006TikZ-001",
    "kind": "latex",
    "componentName": "AS1ExponentialsLogarithmsQuestionsAS1LogarithmsAndExponentialsQ006TikZ001",
    "module": "P5",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9, >=Stealth]\n  \\draw[->] (-2.5,0) -- (3,0) node[right] {$x$};\n  \\draw[->] (0,-3.4) -- (0,3.5) node[above] {$y$};\n  \\draw[domain=-2.2:1.45, smooth, samples=100] plot ({\\x}, {exp(ln(4)*\\x)-3});\n  \\fill (0.792,0) circle (1.5pt) node[below right] {$A$};\n  \\fill (0,-2) circle (1.5pt) node[below right] {$B$};\n  \\node at (1.4,-3.0) {Fig. 3};\n\\end{tikzpicture}"
  },
  "AS1-Exponentials-Logarithms-Questions-AS1LogarithmsAndExponentialsQ010TikZ-001": {
    "id": "AS1-Exponentials-Logarithms-Questions-AS1LogarithmsAndExponentialsQ010TikZ-001",
    "kind": "latex",
    "componentName": "AS1ExponentialsLogarithmsQuestionsAS1LogarithmsAndExponentialsQ010TikZ001",
    "module": "P5",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9, >=Stealth]\n  \\draw[->] (-3,0) -- (4,0) node[right] {$x$};\n  \\draw[->] (0,-0.3) -- (0,4.2) node[above] {$y$};\n  \\draw[domain=-1.2:3.4, smooth, samples=100] plot ({\\x}, {exp(-ln(4)*\\x)});\n  \\fill (0,1) circle (1.5pt) node[right] {$1$};\n  \\node[below left] at (0,0) {$0$};\n\\end{tikzpicture}"
  },
  "AS1-Exponentials-Logarithms-Questions-AS1LogarithmsAndExponentialsQ013TikZ-001": {
    "id": "AS1-Exponentials-Logarithms-Questions-AS1LogarithmsAndExponentialsQ013TikZ-001",
    "kind": "latex",
    "componentName": "AS1ExponentialsLogarithmsQuestionsAS1LogarithmsAndExponentialsQ013TikZ001",
    "module": "P5",
    "sourceContent": "\\begin{tikzpicture}[scale=0.8, >=Stealth]\n  \\draw[->] (-3,0) -- (5,0) node[right] {$x$};\n  \\draw[->] (0,-5.6) -- (0,4.2) node[above] {$y$};\n  \\draw[domain=-3:3.1, smooth, samples=100] plot ({\\x}, {exp(ln(2)*\\x)-5});\n  \\draw[dashed] (-3,-5) -- (4.5,-5) node[right] {$y=-5$};\n  \\fill (0,-4) circle (1.5pt) node[left] {$(0,-4)$};\n  \\fill (2.322,0) circle (1.5pt) node[below] {$2.32$};\n\\end{tikzpicture}"
  },
  "AS1-Exponentials-Logarithms-Questions-AS1LogarithmsAndExponentialsQ021TikZ-001": {
    "id": "AS1-Exponentials-Logarithms-Questions-AS1LogarithmsAndExponentialsQ021TikZ-001",
    "kind": "latex",
    "componentName": "AS1ExponentialsLogarithmsQuestionsAS1LogarithmsAndExponentialsQ021TikZ001",
    "module": "P5",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9, >=Stealth]\n  \\draw[->] (-1.2,0) -- (4.2,0) node[right] {$x$};\n  \\draw[->] (0,-2.4) -- (0,2.4) node[above] {$y$};\n  \\draw[domain=0.08:4, smooth, samples=100] plot ({\\x}, {ln(\\x)}) node[right] {$y=\\ln x$};\n  \\fill (1,0) circle (1.5pt) node[below right] {$A$};\n  \\node at (2,-2.0) {Fig. 1};\n\\end{tikzpicture}"
  },
  "AS1-Exponentials-Logarithms-Questions-AS1LogarithmsAndExponentialsQ021TikZ-002": {
    "id": "AS1-Exponentials-Logarithms-Questions-AS1LogarithmsAndExponentialsQ021TikZ-002",
    "kind": "latex",
    "componentName": "AS1ExponentialsLogarithmsQuestionsAS1LogarithmsAndExponentialsQ021TikZ002",
    "module": "P5",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9, >=Stealth]\n  \\draw[->] (-3.2,0) -- (3.8,0) node[right] {$x$};\n  \\draw[->] (0,-2.5) -- (0,2.8) node[above] {$y$};\n  \\draw[dashed] (-2,-2.4) -- (-2,2.5) node[above] {$x=-2$};\n  \\draw[domain=-1.92:3.5, smooth, samples=100] plot ({\\x}, {ln(\\x+2)}) node[right] {$y=\\ln(x+2)$};\n  \\fill (-1,0) circle (1.5pt) node[below right] {$A'(-1,0)$};\n\\end{tikzpicture}"
  },
  "AS1-Exponentials-Logarithms-Questions-AS1LogarithmsAndExponentialsQ021TikZ-003": {
    "id": "AS1-Exponentials-Logarithms-Questions-AS1LogarithmsAndExponentialsQ021TikZ-003",
    "kind": "latex",
    "componentName": "AS1ExponentialsLogarithmsQuestionsAS1LogarithmsAndExponentialsQ021TikZ003",
    "module": "P5",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9, >=Stealth]\n  \\draw[->] (-3.2,0) -- (3.8,0) node[right] {$x$};\n  \\draw[->] (0,-0.3) -- (0,3.0) node[above] {$y$};\n  \\draw[dashed] (-2,-0.2) -- (-2,2.8);\n  \\draw[domain=-1.92:-1, smooth, samples=80] plot ({\\x}, {-ln(\\x+2)});\n  \\draw[domain=-1:3.5, smooth, samples=100] plot ({\\x}, {ln(\\x+2)}) node[right] {$y=\\lvert\\ln(x+2)\\rvert$};\n  \\fill (-1,0) circle (1.5pt) node[below] {$A'(-1,0)$};\n\\end{tikzpicture}"
  },
  "AS1-Differentiation-Questions-AS1DifferentiationQ003TikZ-001": {
    "id": "AS1-Differentiation-Questions-AS1DifferentiationQ003TikZ-001",
    "kind": "latex",
    "componentName": "AS1DifferentiationQuestionsAS1DifferentiationQ003TikZ001",
    "module": "P6",
    "sourceContent": "\\begin{tikzpicture}[scale=0.8]\n  % Parameters: adjust length L and radius R for illustrative purposes\n  \\def\\L{8}\n  \\def\\R{2}\n  % Draw the rectangular part\n  \\draw (\\R,-\\R) -- (\\L-\\R,-\\R) -- (\\L-\\R,\\R) -- (\\R,\\R) -- cycle;\n  % Draw the left semicircle: centre at (\\R,0), radius \\R\n  \\draw (\\R,\\R) arc[start angle=90,end angle=270,radius=\\R];\n  % Draw the right semicircle: centre at (\\L-\\R,0), radius \\R\n  \\draw (\\L-\\R,-\\R) arc[start angle=270,end angle=90,radius=\\R];\n  % Label the length l across the top of the rectangular section\n  \\draw[<->] (\\R,\\R+0.6) -- (\\L-\\R,\\R+0.6) node[midway,above]{\\(l\\)};\n  % Label the radius r inside the right semicircle (horizontal arrow)\n  \\draw[<->] (\\L-\\R,0) -- (\\L,0) node[midway,above]{\\(r\\)};\n\\end{tikzpicture}"
  },
  "AS1-Integration-Questions-AS1IntegrationQ002TikZ-001": {
    "id": "AS1-Integration-Questions-AS1IntegrationQ002TikZ-001",
    "kind": "latex",
    "componentName": "AS1IntegrationQuestionsAS1IntegrationQ002TikZ001",
    "module": "P7",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9]\n  \\draw[->] (-0.6,0) -- (6.0,0) node[right] {$x$};\n  \\draw[->] (0,-3.2) -- (0,3.0) node[above] {$y$};\n  \\fill[gray!25] (0,0) -- plot[domain=0:4, samples=80] (\\x,{(4*\\x*\\x-\\x*\\x*\\x)/8}) -- (4,0) -- cycle;\n  \\fill[gray!25] (4,0) -- plot[domain=4:5.33, samples=60] (\\x,{(4*\\x*\\x-\\x*\\x*\\x)/8}) -- (5.33,0) -- cycle;\n  \\draw[domain=0:5.6, samples=120, smooth, thick] plot (\\x,{(4*\\x*\\x-\\x*\\x*\\x)/8});\n  \\draw[dashed] (5.33,0) -- (5.33,{(4*5.33*5.33-5.33*5.33*5.33)/8});\n  \\node[below] at (0,0) {$0$};\n  \\node[below] at (4,0) {$4$};\n  \\node[below] at (5.33,0) {$a$};\n  \\node[above right] at (2.1,2.2) {$y=4x^2-x^3$};\n  \\node[below] at (2.6,-3.0) {Fig. 2};\n\\end{tikzpicture}"
  },
  "AS1-Integration-Questions-AS1IntegrationQ003TikZ-001": {
    "id": "AS1-Integration-Questions-AS1IntegrationQ003TikZ-001",
    "kind": "latex",
    "componentName": "AS1IntegrationQuestionsAS1IntegrationQ003TikZ001",
    "module": "P7",
    "sourceContent": "\\begin{tikzpicture}[scale=0.72]\n  \\draw[->] (-0.3,0) -- (7.5,0) node[right] {$x$};\n  \\draw[->] (0,-0.3) -- (0,4.0) node[above] {$y$};\n  \\fill[gray!25] plot[domain=1:6, samples=90] (\\x,{(4+6*\\x-\\x*\\x)/4}) -- plot[domain=6:1, samples=90] (\\x,{(\\x*\\x-8*\\x+16)/4}) -- cycle;\n  \\draw[domain=-0.2:7, samples=100, smooth, thick] plot (\\x,{(\\x*\\x-8*\\x+16)/4});\n  \\draw[domain=0.2:6.8, samples=100, smooth, thick] plot (\\x,{(4+6*\\x-\\x*\\x)/4});\n  \\draw[dashed] (1,0) -- (1,{9/4});\n  \\draw[dashed] (6,0) -- (6,{4/4});\n  \\node[below] at (1,0) {$1$};\n  \\node[below] at (6,0) {$6$};\n  \\node[left] at (0,{9/4}) {$9$};\n  \\node[left] at (0,{4/4}) {$4$};\n  \\node[above] at (2.0,3.2) {$y=4+6x-x^2$};\n  \\node[right] at (4.7,1.0) {$y=x^2-8x+16$};\n  \\node[below] at (3.7,-0.4) {Fig. 4};\n\\end{tikzpicture}"
  },
  "AS1-Integration-Questions-AS1IntegrationQ004TikZ-001": {
    "id": "AS1-Integration-Questions-AS1IntegrationQ004TikZ-001",
    "kind": "latex",
    "componentName": "AS1IntegrationQuestionsAS1IntegrationQ004TikZ001",
    "module": "P7",
    "sourceContent": "\\begin{tikzpicture}[scale=1.0]\n  \\draw[->] (-0.4,0) -- (3.8,0) node[right] {$x$};\n  \\draw[->] (0,-0.3) -- (0,3.8) node[above] {$y$};\n  \\fill[gray!25] (0,0) -- plot[domain=0:3, samples=100] (\\x,{(2*\\x*\\x*\\x-8*\\x*\\x+7*\\x+3)/2}) -- (3,0) -- cycle;\n  \\draw[domain=0:3, samples=120, smooth, thick] plot (\\x,{(2*\\x*\\x*\\x-8*\\x*\\x+7*\\x+3)/2});\n  \\draw[dashed] (0,3) -- (3,3) -- (3,0);\n  \\node[left] at (0,3) {$6$};\n  \\node[below] at (0,0) {$O$};\n  \\node[below] at (3,0) {$3$};\n  \\node[below] at (1.7,-0.5) {Fig. 2};\n\\end{tikzpicture}"
  },
  "AS1-Integration-Questions-AS1IntegrationQ005TikZ-001": {
    "id": "AS1-Integration-Questions-AS1IntegrationQ005TikZ-001",
    "kind": "latex",
    "componentName": "AS1IntegrationQuestionsAS1IntegrationQ005TikZ001",
    "module": "P7",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9]\n  \\draw[->] (-0.4,0) -- (4.8,0) node[right] {$x$};\n  \\draw[->] (0,-0.5) -- (0,4.8) node[above] {$y$};\n  \\fill[gray!25] (0,0) -- (0,4) -- plot[domain=0:4, samples=120] (\\x,{(8-pow(\\x,1.5))/2}) -- (4,0) -- cycle;\n  \\draw[domain=0:4.2, samples=120, smooth, thick] plot (\\x,{(8-pow(\\x,1.5))/2});\n  \\node[left] at (0,4) {$8$};\n  \\node[below] at (4,0) {$4$};\n  \\node[below] at (2.1,-0.7) {Fig. 2};\n\\end{tikzpicture}"
  },
  "AS1-Integration-Questions-AS1IntegrationQ006TikZ-001": {
    "id": "AS1-Integration-Questions-AS1IntegrationQ006TikZ-001",
    "kind": "latex",
    "componentName": "AS1IntegrationQuestionsAS1IntegrationQ006TikZ001",
    "module": "P7",
    "sourceContent": "\\begin{tikzpicture}[scale=1.0]\n  \\draw[->] (-0.2,0) -- (3.4,0) node[right] {$x$};\n  \\draw[->] (0,-0.2) -- (0,4.8) node[above] {$y$};\n  \\fill[gray!25] (0,1) -- (0,4) -- plot[domain=4:1, variable=\\t, samples=80] ({1/sqrt(\\t)},{\\t}) -- cycle;\n  \\draw[domain=0.45:3.0, samples=120, smooth, thick] plot (\\x,{1/(\\x*\\x)});\n  \\draw[dashed] (0,1) -- (1,1);\n  \\draw[dashed] (0,4) -- (0.5,4);\n  \\node[left] at (0,1) {$1$};\n  \\node[left] at (0,4) {$4$};\n  \\node[below] at (1.7,-0.5) {Fig. 3};\n\\end{tikzpicture}"
  },
  "AS1-Integration-Questions-AS1IntegrationQ008TikZ-001": {
    "id": "AS1-Integration-Questions-AS1IntegrationQ008TikZ-001",
    "kind": "latex",
    "componentName": "AS1IntegrationQuestionsAS1IntegrationQ008TikZ001",
    "module": "P7",
    "sourceContent": "\\begin{tikzpicture}[scale=0.75]\n  \\draw[->] (-5,0) -- (4.5,0) node[right] {$x$};\n  \\draw[->] (0,-1.2) -- (0,7.0) node[above] {$y$};\n  \\fill[gray!25] (-4,0) -- plot[domain=-4:0, samples=40] (\\x,{\\x+4}) -- (0,0) -- cycle;\n  \\fill[gray!25] (0,0) -- plot[domain=0:2, samples=80] (\\x,{\\x*\\x-4*\\x+4}) -- (2,0) -- cycle;\n  \\draw[domain=-4.5:2.2, samples=80, thick] plot (\\x,{\\x+4}) node[right] {$y=x+4$};\n  \\draw[domain=-1.0:4.0, samples=120, smooth, thick] plot (\\x,{\\x*\\x-4*\\x+4}) node[right] {$y=x^2-4x+4$};\n  \\node[left] at (0,4) {$(0,4)$};\n  \\node[below] at (-4,0) {$-4$};\n  \\node[below] at (2,0) {$2$};\n  \\node[below] at (0,0) {$0$};\n  \\node[below] at (0,-1.1) {Fig. 1};\n\\end{tikzpicture}"
  },
  "AS1-Integration-Questions-AS1IntegrationQ010TikZ-001": {
    "id": "AS1-Integration-Questions-AS1IntegrationQ010TikZ-001",
    "kind": "latex",
    "componentName": "AS1IntegrationQuestionsAS1IntegrationQ010TikZ001",
    "module": "P7",
    "sourceContent": "\\begin{tikzpicture}[scale=0.72]\n  \\draw[->] (-0.5,0) -- (10,0) node[right] {$x$};\n  \\draw[->] (0,-2.5) -- (0,2.0) node[above] {$y$};\n  \\fill[gray!25] (0,-2) -- (0,1) -- plot[domain=1:-2, variable=\\t, samples=100] ({\\t*\\t*\\t+8},{\\t}) -- cycle;\n  \\draw[domain=-2:1, variable=\\t, samples=120, smooth, thick] plot ({\\t*\\t*\\t+8},{\\t});\n  \\draw[dashed] (0,1) -- (9,1);\n  \\node[left] at (0,1) {$1$};\n  \\node[left] at (0,-2) {$-2$};\n  \\node[below] at (8,0) {$8$};\n  \\node[below] at (9,0) {$9$};\n  \\node[right] at (6.7,1.35) {$y=\\sqrt[3]{x-8}$};\n  \\node[below] at (4.7,-2.7) {Fig. 3};\n\\end{tikzpicture}"
  },
  "AS1-Integration-Questions-AS1IntegrationQ012TikZ-001": {
    "id": "AS1-Integration-Questions-AS1IntegrationQ012TikZ-001",
    "kind": "latex",
    "componentName": "AS1IntegrationQuestionsAS1IntegrationQ012TikZ001",
    "module": "P7",
    "sourceContent": "\\begin{tikzpicture}[scale=0.85]\n  \\draw[->] (-0.3,0) -- (5.5,0) node[right] {$x$};\n  \\draw[->] (0,-0.3) -- (0,5.0) node[above] {$y$};\n  \\draw[domain=0:4.6, samples=120, smooth, thick] plot (\\x,{\\x*\\x/4}) node[right] {$y=x^2$};\n  \\draw[domain=0:5.0, samples=120, smooth, thick] plot (\\x,{2*sqrt(\\x)}) node[right] {$y=8\\sqrt{x}$};\n  \\fill (4,4) circle (2pt);\n  \\node[above] at (4,4) {$A$};\n  \\node[below] at (2.8,-0.5) {Fig. 5};\n\\end{tikzpicture}"
  },
  "AS1-Integration-Questions-AS1IntegrationQ012TikZ-002": {
    "id": "AS1-Integration-Questions-AS1IntegrationQ012TikZ-002",
    "kind": "latex",
    "componentName": "AS1IntegrationQuestionsAS1IntegrationQ012TikZ002",
    "module": "P7",
    "sourceContent": "\\begin{tikzpicture}[scale=0.8]\n  \\draw[->] (-5.2,0) -- (5.2,0) node[right] {$x$};\n  \\draw[->] (0,-0.3) -- (0,4.8) node[above] {$y$};\n  % right lobe\n  \\fill[gray!25] plot[domain=0:4, samples=100] (\\x,{2*sqrt(\\x)}) -- plot[domain=4:0, samples=100] (\\x,{\\x*\\x/4}) -- cycle;\n  % left lobe (reflection)\n  \\fill[gray!25] plot[domain=0:4, samples=100] ({-\\x},{2*sqrt(\\x)}) -- plot[domain=4:0, samples=100] ({-\\x},{\\x*\\x/4}) -- cycle;\n  \\draw[domain=0:4, samples=100, smooth, thick] plot (\\x,{2*sqrt(\\x)});\n  \\draw[domain=0:4, samples=100, smooth, thick] plot (\\x,{\\x*\\x/4});\n  \\draw[domain=0:4, samples=100, smooth, thick] plot ({-\\x},{2*sqrt(\\x)});\n  \\draw[domain=0:4, samples=100, smooth, thick] plot ({-\\x},{\\x*\\x/4});\n  \\node[below] at (0,-0.5) {Fig. 6};\n\\end{tikzpicture}"
  },
  "AS1-Integration-Questions-AS1IntegrationQ015TikZ-001": {
    "id": "AS1-Integration-Questions-AS1IntegrationQ015TikZ-001",
    "kind": "latex",
    "componentName": "AS1IntegrationQuestionsAS1IntegrationQ015TikZ001",
    "module": "P7",
    "sourceContent": "\\begin{tikzpicture}[scale=0.7]\n  \\draw[->] (-1.5,0) -- (9,0) node[right] {$x$};\n  \\draw[->] (0,-1.2) -- (0,6.5) node[above] {$y$};\n  \\fill[gray!25] (1,0) -- plot[domain=1:8, samples=100] (\\x,{0.15*(pow(\\x,1/3)+4*\\x)}) -- (8,0) -- cycle;\n  \\draw[domain=0:8.5, samples=120, smooth, thick] plot (\\x,{0.15*(pow(\\x,1/3)+4*\\x)});\n  \\draw[dashed] (1,0) -- (1,{0.15*(1+4)});\n  \\draw[dashed] (8,0) -- (8,{0.15*(2+32)});\n  \\node[below] at (1,0) {$1$};\n  \\node[below] at (8,0) {$8$};\n  \\node[right] at (3.2,3.2) {$y=x^{1/3}+4x$};\n  \\node[below] at (4,-1.0) {Fig. 1};\n\\end{tikzpicture}"
  },
  "AS1-Integration-Questions-AS1IntegrationQ017TikZ-001": {
    "id": "AS1-Integration-Questions-AS1IntegrationQ017TikZ-001",
    "kind": "latex",
    "componentName": "AS1IntegrationQuestionsAS1IntegrationQ017TikZ001",
    "module": "P7",
    "sourceContent": "\\begin{tikzpicture}[scale=0.8]\n  \\draw[->] (-0.5,0) -- (6.5,0) node[right] {$x$};\n  \\draw[->] (0,-0.5) -- (0,4.5) node[above] {$y$};\n  \\fill[gray!25] (2,{8/3}) -- plot[domain=2:4, samples=80] (\\x,{(6*\\x-\\x*\\x)/3}) -- (4,{8/3}) -- cycle;\n  \\draw[domain=0:6, samples=100, smooth, thick] plot (\\x,{(6*\\x-\\x*\\x)/3}) node[right] {$y=6x-x^2$};\n  \\draw[thick] (0,{8/3}) -- (6,{8/3}) node[right] {$y=8$};\n  \\draw[dashed] (2,0) -- (2,{8/3});\n  \\draw[dashed] (4,0) -- (4,{8/3});\n  \\node[below] at (2,0) {$2$};\n  \\node[below] at (4,0) {$4$};\n\\end{tikzpicture}"
  },
  "AS1-Integration-Questions-AS1IntegrationQ018TikZ-001": {
    "id": "AS1-Integration-Questions-AS1IntegrationQ018TikZ-001",
    "kind": "latex",
    "componentName": "AS1IntegrationQuestionsAS1IntegrationQ018TikZ001",
    "module": "P7",
    "sourceContent": "\\begin{tikzpicture}[scale=1.0]\n  \\draw[->] (-0.2,0) -- (4.8,0) node[right] {$x$};\n  \\draw[->] (0,-1.0) -- (0,4.0) node[above] {$y$};\n  \\fill[gray!25] plot[domain=2:3, samples=80] (\\x,{-\\x*\\x+5*\\x-4}) -- plot[domain=3:2, samples=80] (\\x,{\\x*\\x-5*\\x+8}) -- cycle;\n  \\draw[domain=0.7:4.2, samples=120, smooth, thick] plot (\\x,{\\x*\\x-5*\\x+8}) node[right] {$y=x^2-5x+8$};\n  \\draw[domain=0.8:4.1, samples=120, smooth, thick] plot (\\x,{-\\x*\\x+5*\\x-4}) node[right] {$y=-x^2+5x-4$};\n  \\fill (2,2) circle (2pt) node[left] {$(2,2)$};\n  \\fill (3,2) circle (2pt) node[right] {$(3,2)$};\n  \\node[below] at (2.3,-0.6) {Fig. 1};\n\\end{tikzpicture}"
  },
  "AS1-Integration-Questions-AS1IntegrationQ019TikZ-001": {
    "id": "AS1-Integration-Questions-AS1IntegrationQ019TikZ-001",
    "kind": "latex",
    "componentName": "AS1IntegrationQuestionsAS1IntegrationQ019TikZ001",
    "module": "P7",
    "sourceContent": "\\begin{tikzpicture}[scale=1.0]\n  \\draw[->] (-3.0,0) -- (2.5,0) node[right] {$x$};\n  \\draw[->] (0,-0.5) -- (0,5.0) node[above] {$y$};\n  \\fill[gray!25] (0,1) -- (0,4) -- plot[domain=4:1, variable=\\t, samples=100] ({\\t*\\t-5*\\t+4},{\\t}) -- cycle;\n  \\draw[domain=0:5, variable=\\t, samples=120, smooth, thick] plot ({\\t*\\t-5*\\t+4},{\\t});\n  \\node[left] at (0,1) {$1$};\n  \\node[left] at (0,4) {$4$};\n  \\node[right] at (0.6,4.4) {$x=y^2-5y+4$};\n  \\node[below] at (0,0) {$0$};\n  \\node[below] at (-1.2,-0.6) {Fig. 2};\n\\end{tikzpicture}"
  }
};

export function getAS1PracticeComponent(id: string): React.FC | null {
  const entry = VISUAL_MANIFEST[id];
  if (!entry) return null;
  const moduleRegistry = Registry[entry.module];
  if (!moduleRegistry || !entry.componentName) return null;
  return moduleRegistry[entry.componentName] || null;
}
