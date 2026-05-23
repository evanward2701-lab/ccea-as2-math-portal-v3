/**
 * AUTO-GENERATED VISUAL MANIFEST
 */
import React from 'react';
import * as M1 from './M1/visuals/PracticeBankDiagrams';
import * as M2 from './M2/visuals/PracticeBankDiagrams';
import * as M3 from './M3/visuals/PracticeBankDiagrams';
import * as S1 from './S1/visuals/PracticeBankDiagrams';
import * as S2 from './S2/visuals/PracticeBankDiagrams';
import * as S3 from './S3/visuals/PracticeBankDiagrams';
import * as S4 from './S4/visuals/PracticeBankDiagrams';

const Registry: Record<string, any> = { M1, M2, M3, S1, S2, S3, S4 };

export interface VisualEntry {
  id: string;
  kind: "mermaid" | "svg" | "latex" | "html" | "pending";
  componentName: string;
  module: string;
  questionId?: string;
  sourceContent?: string;
}

export const VISUAL_MANIFEST: Record<string, VisualEntry> = {
  "AS2BinomialDistributionProbabilityQ001TikZ-001": {
    "id": "AS2BinomialDistributionProbabilityQ001TikZ-001",
    "kind": "latex",
    "componentName": "",
    "module": "S4",
    "questionId": "AS2BinomialDistributionProbabilityQ001",
    "sourceContent": "\\begin{tikzpicture}[scale=0.85]\n  \\draw[->] (-0.6,0) -- (10.8,0) node[right] {$x$};\n  \\foreach \\x in {0,1,2,3,4,5,6,7,8,9,10} {\n    \\draw (\\x,0.08) -- (\\x,-0.08);\n    \\node[below] at (\\x,-0.08) {\\small \\x};\n  }\n\n  \\node[above] at (5,1.7) {$X =$ number of snowdrops flowering, \\quad $X\\sim B(10,0.65)$};\n\n  % exactly 7\n  \\draw[very thick] (7,0) -- (7,0.85);\n  \\node[above] at (7,0.9) {\\small exactly 7: $X=7$};\n\n  % at least 7\n  \\draw[thick] (7,-0.55) -- (10,-0.55);\n  \\foreach \\x in {7,8,9,10} {\n    \\fill (\\x,-0.55) circle (2pt);\n  }\n  \\node[below] at (8.5,-0.65) {\\small at least 7: $X\\ge 7$};\n\n  % at most 7\n  \\draw[thick] (0,-1.15) -- (7,-1.15);\n  \\foreach \\x in {0,1,2,3,4,5,6,7} {\n    \\fill (\\x,-1.15) circle (2pt);\n  }\n  \\node[below] at (3.5,-1.25) {\\small at most 7: $X\\le 7$};\n\\end{tikzpicture}"
  },
  "AS2BinomialDistributionProbabilitySupportSVG-001": {
    "id": "AS2BinomialDistributionProbabilitySupportSVG-001",
    "kind": "svg",
    "componentName": "AS2BinomialDistributionProbabilitySupportSVG001",
    "module": "S4",
    "questionId": "AS2BinomialDistributionProbabilityQ010"
  },
  "AS2BinomialDistributionProbabilitySupportMMD-001": {
    "id": "AS2BinomialDistributionProbabilitySupportMMD-001",
    "kind": "mermaid",
    "componentName": "AS2BinomialDistributionProbabilitySupportMMD001",
    "module": "S4",
    "questionId": "AS2BinomialDistributionProbabilityQ010"
  },
  "AS2BinomialDistributionProbabilitySupportWidget-001": {
    "id": "AS2BinomialDistributionProbabilitySupportWidget-001",
    "kind": "html",
    "componentName": "",
    "module": "S4",
    "questionId": "AS2BinomialDistributionProbabilityQ010",
    "sourceContent": "<!doctype html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Binomial Probability Checker</title>\n  <style>\n    body {\n      font-family: Arial, sans-serif;\n      margin: 0;\n      padding: 24px;\n      background: #f7f7f7;\n      color: #111;\n    }\n    main {\n      max-width: 860px;\n      margin: 0 auto;\n      background: #fff;\n      border: 1px solid #ddd;\n      border-radius: 16px;\n      padding: 24px;\n      box-shadow: 0 6px 18px rgba(0,0,0,0.08);\n    }\n    h1 {\n      margin-top: 0;\n      font-size: 28px;\n    }\n    .grid {\n      display: grid;\n      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n      gap: 16px;\n      margin: 18px 0;\n    }\n    label {\n      display: block;\n      font-weight: 700;\n      margin-bottom: 6px;\n    }\n    input, select {\n      width: 100%;\n      box-sizing: border-box;\n      padding: 10px;\n      border: 1px solid #bbb;\n      border-radius: 10px;\n      font-size: 16px;\n    }\n    .output {\n      margin-top: 18px;\n      padding: 18px;\n      border-radius: 14px;\n      background: #f1f1f1;\n    }\n    .output p {\n      margin: 8px 0;\n      font-size: 17px;\n    }\n    code {\n      background: #e8e8e8;\n      padding: 2px 5px;\n      border-radius: 6px;\n    }\n    .note {\n      font-size: 14px;\n      color: #444;\n      margin-top: 12px;\n    }\n  </style>\n</head>\n<body>\n  <main>\n    <h1>Binomial Probability Checker</h1>\n    <p>Use this after trying the question by hand. Let <code>X ~ B(n,p)</code>.</p>\n\n    <div class=\"grid\">\n      <div>\n        <label for=\"n\">n</label>\n        <input id=\"n\" type=\"number\" min=\"0\" step=\"1\" value=\"10\">\n      </div>\n      <div>\n        <label for=\"p\">p</label>\n        <input id=\"p\" type=\"number\" min=\"0\" max=\"1\" step=\"0.001\" value=\"0.65\">\n      </div>\n      <div>\n        <label for=\"event\">Event</label>\n        <select id=\"event\">\n          <option value=\"eq\">Exactly k: P(X = k)</option>\n          <option value=\"le\">At most k: P(X ≤ k)</option>\n          <option value=\"lt\">Fewer than k: P(X &lt; k)</option>\n          <option value=\"ge\">At least k: P(X ≥ k)</option>\n          <option value=\"gt\">More than k: P(X &gt; k)</option>\n        </select>\n      </div>\n      <div>\n        <label for=\"k\">k</label>\n        <input id=\"k\" type=\"number\" min=\"0\" step=\"1\" value=\"7\">\n      </div>\n    </div>\n\n    <div class=\"output\" id=\"output\"></div>\n\n    <p class=\"note\">Rounding in official mark schemes is often to 3 significant figures. This tool shows extra digits so you can see what is happening before rounding.</p>\n  </main>\n\n  <script>\n    const nInput = document.getElementById(\"n\");\n    const pInput = document.getElementById(\"p\");\n    const eventInput = document.getElementById(\"event\");\n    const kInput = document.getElementById(\"k\");\n    const output = document.getElementById(\"output\");\n\n    function comb(n, r) {\n      if (r < 0 || r > n) return 0;\n      r = Math.min(r, n - r);\n      let result = 1;\n      for (let i = 1; i <= r; i++) {\n        result *= (n - r + i) / i;\n      }\n      return result;\n    }\n\n    function binProb(n, p, x) {\n      if (x < 0 || x > n) return 0;\n      return comb(n, x) * Math.pow(p, x) * Math.pow(1 - p, n - x);\n    }\n\n    function probability(n, p, eventType, k) {\n      let total = 0;\n      if (eventType === \"eq\") return binProb(n, p, k);\n      if (eventType === \"le\") {\n        for (let x = 0; x <= k; x++) total += binProb(n, p, x);\n        return total;\n      }\n      if (eventType === \"lt\") {\n        for (let x = 0; x < k; x++) total += binProb(n, p, x);\n        return total;\n      }\n      if (eventType === \"ge\") {\n        for (let x = k; x <= n; x++) total += binProb(n, p, x);\n        return total;\n      }\n      if (eventType === \"gt\") {\n        for (let x = k + 1; x <= n; x++) total += binProb(n, p, x);\n        return total;\n      }\n      return NaN;\n    }\n\n    function format(x) {\n      if (!Number.isFinite(x)) return \"Invalid\";\n      return x.toFixed(8).replace(/0+$/, \"\").replace(/\\.$/, \"\");\n    }\n\n    function update() {\n      const n = Math.floor(Number(nInput.value));\n      const p = Number(pInput.value);\n      const k = Math.floor(Number(kInput.value));\n      const eventType = eventInput.value;\n\n      if (!Number.isFinite(n) || !Number.isFinite(p) || !Number.isFinite(k) || n < 0 || p < 0 || p > 1) {\n        output.innerHTML = \"<p>Please enter valid values with n ≥ 0 and 0 ≤ p ≤ 1.</p>\";\n        return;\n      }\n\n      const prob = probability(n, p, eventType, k);\n      const mean = n * p;\n      const variance = n * p * (1 - p);\n      const sd = Math.sqrt(variance);\n\n      output.innerHTML = `\n        <p><strong>Distribution:</strong> X ~ B(${n}, ${p})</p>\n        <p><strong>Probability:</strong> ${format(prob)}</p>\n        <p><strong>Mean:</strong> E(X) = np = ${format(mean)}</p>\n        <p><strong>Variance:</strong> Var(X) = np(1 − p) = ${format(variance)}</p>\n        <p><strong>Standard deviation:</strong> ${format(sd)}</p>\n      `;\n    }\n\n    [nInput, pInput, eventInput, kInput].forEach(el => el.addEventListener(\"input\", update));\n    update();\n  </script>\n</body>\n</html>"
  },
  "AS2ConnectedParticlesQ001TikZ-001": {
    "id": "AS2ConnectedParticlesQ001TikZ-001",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2ConnectedParticlesQ001",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (4,0);\n  \\draw[thick] (4.25,0.25) circle (0.35);\n  \\draw[thick] (1,0) rectangle (1.8,0.55) node[midway] {A};\n  \\draw[thick] (1.8,0.32) -- (4.25,0.32);\n  \\draw[thick] (4.6,0.25) -- (4.6,-1.3);\n  \\draw[thick] (4.25,-1.9) rectangle (4.95,-1.3) node[midway] {B};\n  \\draw[->] (1.4,0.55) -- +(0,0.8) node[above] {$R$};\n  \\draw[->] (1.4,0) -- +(0,-0.8) node[below] {$m_Ag$};\n  \\draw[->] (1.8,0.28) -- +(0.9,0) node[above] {$T$};\n  \\draw[->] (4.6,-1.3) -- +(0,0.8) node[right] {$T$};\n  \\draw[->] (4.6,-1.9) -- +(0,-0.8) node[below] {$m_Bg$};\n\\end{tikzpicture}"
  },
  "AS2ConnectedParticlesQ001TikZ-002": {
    "id": "AS2ConnectedParticlesQ001TikZ-002",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2ConnectedParticlesQ001",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (4,0);\n  \\draw[thick] (4.25,0.25) circle (0.35);\n  \\draw[thick] (1,0) rectangle (1.8,0.55) node[midway] {A};\n  \\draw[thick] (1.8,0.32) -- (4.25,0.32);\n  \\draw[thick] (4.6,0.25) -- (4.6,-1.3);\n  \\draw[thick] (4.25,-1.9) rectangle (4.95,-1.3) node[midway] {B};\n  \\draw[->] (1.4,0.55) -- +(0,0.8) node[above] {$R$};\n  \\draw[->] (1.4,0) -- +(0,-0.8) node[below] {$m_Ag$};\n  \\draw[->] (1.8,0.28) -- +(0.9,0) node[above] {$T$};\n  \\draw[->] (4.6,-1.3) -- +(0,0.8) node[right] {$T$};\n  \\draw[->] (4.6,-1.9) -- +(0,-0.8) node[below] {$m_Bg$};\n\\end{tikzpicture}"
  },
  "AS2ConnectedParticlesQ002TikZ-001": {
    "id": "AS2ConnectedParticlesQ002TikZ-001",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2ConnectedParticlesQ002",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (4,0);\n  \\draw[thick] (4.25,0.25) circle (0.35);\n  \\draw[thick] (1,0) rectangle (1.8,0.55) node[midway] {A};\n  \\draw[thick] (1.8,0.32) -- (4.25,0.32);\n  \\draw[thick] (4.6,0.25) -- (4.6,-1.3);\n  \\draw[thick] (4.25,-1.9) rectangle (4.95,-1.3) node[midway] {B};\n  \\draw[->] (1.4,0.55) -- +(0,0.8) node[above] {$R$};\n  \\draw[->] (1.4,0) -- +(0,-0.8) node[below] {$m_Ag$};\n  \\draw[->] (1.8,0.28) -- +(0.9,0) node[above] {$T$};\n  \\draw[->] (4.6,-1.3) -- +(0,0.8) node[right] {$T$};\n  \\draw[->] (4.6,-1.9) -- +(0,-0.8) node[below] {$m_Bg$};\n\\end{tikzpicture}"
  },
  "AS2ConnectedParticlesQ002TikZ-002": {
    "id": "AS2ConnectedParticlesQ002TikZ-002",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2ConnectedParticlesQ002",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (4,0);\n  \\draw[thick] (4.25,0.25) circle (0.35);\n  \\draw[thick] (1,0) rectangle (1.8,0.55) node[midway] {A};\n  \\draw[thick] (1.8,0.32) -- (4.25,0.32);\n  \\draw[thick] (4.6,0.25) -- (4.6,-1.3);\n  \\draw[thick] (4.25,-1.9) rectangle (4.95,-1.3) node[midway] {B};\n  \\draw[->] (1.4,0.55) -- +(0,0.8) node[above] {$R$};\n  \\draw[->] (1.4,0) -- +(0,-0.8) node[below] {$m_Ag$};\n  \\draw[->] (1.8,0.28) -- +(0.9,0) node[above] {$T$};\n  \\draw[->] (4.6,-1.3) -- +(0,0.8) node[right] {$T$};\n  \\draw[->] (4.6,-1.9) -- +(0,-0.8) node[below] {$m_Bg$};\n\\end{tikzpicture}"
  },
  "AS2ConnectedParticlesQ003TikZ-001": {
    "id": "AS2ConnectedParticlesQ003TikZ-001",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2ConnectedParticlesQ003",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (4,0);\n  \\draw[thick] (4.25,0.25) circle (0.35);\n  \\draw[thick] (1,0) rectangle (1.8,0.55) node[midway] {A};\n  \\draw[thick] (1.8,0.32) -- (4.25,0.32);\n  \\draw[thick] (4.6,0.25) -- (4.6,-1.3);\n  \\draw[thick] (4.25,-1.9) rectangle (4.95,-1.3) node[midway] {B};\n  \\draw[->] (1.4,0.55) -- +(0,0.8) node[above] {$R$};\n  \\draw[->] (1.4,0) -- +(0,-0.8) node[below] {$m_Ag$};\n  \\draw[->] (1.8,0.28) -- +(0.9,0) node[above] {$T$};\n  \\draw[->] (4.6,-1.3) -- +(0,0.8) node[right] {$T$};\n  \\draw[->] (4.6,-1.9) -- +(0,-0.8) node[below] {$m_Bg$};\n\\end{tikzpicture}"
  },
  "AS2ConnectedParticlesQ003TikZ-002": {
    "id": "AS2ConnectedParticlesQ003TikZ-002",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2ConnectedParticlesQ003",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (4,0);\n  \\draw[thick] (4.25,0.25) circle (0.35);\n  \\draw[thick] (1,0) rectangle (1.8,0.55) node[midway] {A};\n  \\draw[thick] (1.8,0.32) -- (4.25,0.32);\n  \\draw[thick] (4.6,0.25) -- (4.6,-1.3);\n  \\draw[thick] (4.25,-1.9) rectangle (4.95,-1.3) node[midway] {B};\n  \\draw[->] (1.4,0.55) -- +(0,0.8) node[above] {$R$};\n  \\draw[->] (1.4,0) -- +(0,-0.8) node[below] {$m_Ag$};\n  \\draw[->] (1.8,0.28) -- +(0.9,0) node[above] {$T$};\n  \\draw[->] (4.6,-1.3) -- +(0,0.8) node[right] {$T$};\n  \\draw[->] (4.6,-1.9) -- +(0,-0.8) node[below] {$m_Bg$};\n\\end{tikzpicture}"
  },
  "AS2ConnectedParticlesQ004TikZ-001": {
    "id": "AS2ConnectedParticlesQ004TikZ-001",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2ConnectedParticlesQ004",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (-0.2,0) -- (6.2,0);\n  \\draw[thick] (0.4,0.15) rectangle (1.6,0.8) node[midway] {car};\n  \\draw[thick] (3.4,0.15) rectangle (5.1,0.8) node[midway] {truck};\n  \\draw[thick] (1.6,0.45) -- (3.4,0.45);\n  \\draw[->] (5.1,0.55) -- +(1.0,0) node[right] {drive};\n  \\draw[->] (0.4,0.35) -- +(-0.9,0) node[left] {resistance};\n  \\draw[->] (3.4,0.35) -- +(-0.9,0) node[left] {resistance};\n\\end{tikzpicture}"
  },
  "AS2ConnectedParticlesQ004TikZ-002": {
    "id": "AS2ConnectedParticlesQ004TikZ-002",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2ConnectedParticlesQ004",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (-0.2,0) -- (6.2,0);\n  \\draw[thick] (0.4,0.15) rectangle (1.6,0.8) node[midway] {car};\n  \\draw[thick] (3.4,0.15) rectangle (5.1,0.8) node[midway] {truck};\n  \\draw[thick] (1.6,0.45) -- (3.4,0.45);\n  \\draw[->] (5.1,0.55) -- +(1.0,0) node[right] {drive};\n  \\draw[->] (0.4,0.35) -- +(-0.9,0) node[left] {resistance};\n  \\draw[->] (3.4,0.35) -- +(-0.9,0) node[left] {resistance};\n\\end{tikzpicture}"
  },
  "AS2ConnectedParticlesQ005TikZ-001": {
    "id": "AS2ConnectedParticlesQ005TikZ-001",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2ConnectedParticlesQ005",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (4,0);\n  \\draw[thick] (4.25,0.25) circle (0.35);\n  \\draw[thick] (1,0) rectangle (1.8,0.55) node[midway] {A};\n  \\draw[thick] (1.8,0.32) -- (4.25,0.32);\n  \\draw[thick] (4.6,0.25) -- (4.6,-1.3);\n  \\draw[thick] (4.25,-1.9) rectangle (4.95,-1.3) node[midway] {B};\n  \\draw[->] (1.4,0.55) -- +(0,0.8) node[above] {$R$};\n  \\draw[->] (1.4,0) -- +(0,-0.8) node[below] {$m_Ag$};\n  \\draw[->] (1.8,0.28) -- +(0.9,0) node[above] {$T$};\n  \\draw[->] (4.6,-1.3) -- +(0,0.8) node[right] {$T$};\n  \\draw[->] (4.6,-1.9) -- +(0,-0.8) node[below] {$m_Bg$};\n\\end{tikzpicture}"
  },
  "AS2ConnectedParticlesQ005TikZ-002": {
    "id": "AS2ConnectedParticlesQ005TikZ-002",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2ConnectedParticlesQ005",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (4,0);\n  \\draw[thick] (4.25,0.25) circle (0.35);\n  \\draw[thick] (1,0) rectangle (1.8,0.55) node[midway] {A};\n  \\draw[thick] (1.8,0.32) -- (4.25,0.32);\n  \\draw[thick] (4.6,0.25) -- (4.6,-1.3);\n  \\draw[thick] (4.25,-1.9) rectangle (4.95,-1.3) node[midway] {B};\n  \\draw[->] (1.4,0.55) -- +(0,0.8) node[above] {$R$};\n  \\draw[->] (1.4,0) -- +(0,-0.8) node[below] {$m_Ag$};\n  \\draw[->] (1.8,0.28) -- +(0.9,0) node[above] {$T$};\n  \\draw[->] (4.6,-1.3) -- +(0,0.8) node[right] {$T$};\n  \\draw[->] (4.6,-1.9) -- +(0,-0.8) node[below] {$m_Bg$};\n\\end{tikzpicture}"
  },
  "AS2ConnectedParticlesQ006TikZ-001": {
    "id": "AS2ConnectedParticlesQ006TikZ-001",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2ConnectedParticlesQ006",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (4,0);\n  \\draw[thick] (4.25,0.25) circle (0.35);\n  \\draw[thick] (1,0) rectangle (1.8,0.55) node[midway] {A};\n  \\draw[thick] (1.8,0.32) -- (4.25,0.32);\n  \\draw[thick] (4.6,0.25) -- (4.6,-1.3);\n  \\draw[thick] (4.25,-1.9) rectangle (4.95,-1.3) node[midway] {B};\n  \\draw[->] (1.4,0.55) -- +(0,0.8) node[above] {$R$};\n  \\draw[->] (1.4,0) -- +(0,-0.8) node[below] {$m_Ag$};\n  \\draw[->] (1.8,0.28) -- +(0.9,0) node[above] {$T$};\n  \\draw[->] (4.6,-1.3) -- +(0,0.8) node[right] {$T$};\n  \\draw[->] (4.6,-1.9) -- +(0,-0.8) node[below] {$m_Bg$};\n\\end{tikzpicture}"
  },
  "AS2ConnectedParticlesQ006TikZ-002": {
    "id": "AS2ConnectedParticlesQ006TikZ-002",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2ConnectedParticlesQ006",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (4,0);\n  \\draw[thick] (4.25,0.25) circle (0.35);\n  \\draw[thick] (1,0) rectangle (1.8,0.55) node[midway] {A};\n  \\draw[thick] (1.8,0.32) -- (4.25,0.32);\n  \\draw[thick] (4.6,0.25) -- (4.6,-1.3);\n  \\draw[thick] (4.25,-1.9) rectangle (4.95,-1.3) node[midway] {B};\n  \\draw[->] (1.4,0.55) -- +(0,0.8) node[above] {$R$};\n  \\draw[->] (1.4,0) -- +(0,-0.8) node[below] {$m_Ag$};\n  \\draw[->] (1.8,0.28) -- +(0.9,0) node[above] {$T$};\n  \\draw[->] (4.6,-1.3) -- +(0,0.8) node[right] {$T$};\n  \\draw[->] (4.6,-1.9) -- +(0,-0.8) node[below] {$m_Bg$};\n\\end{tikzpicture}"
  },
  "AS2ConnectedParticlesQ007TikZ-001": {
    "id": "AS2ConnectedParticlesQ007TikZ-001",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2ConnectedParticlesQ007",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (4,0);\n  \\draw[thick] (4.25,0.25) circle (0.35);\n  \\draw[thick] (1,0) rectangle (1.8,0.55) node[midway] {A};\n  \\draw[thick] (1.8,0.32) -- (4.25,0.32);\n  \\draw[thick] (4.6,0.25) -- (4.6,-1.3);\n  \\draw[thick] (4.25,-1.9) rectangle (4.95,-1.3) node[midway] {B};\n  \\draw[->] (1.4,0.55) -- +(0,0.8) node[above] {$R$};\n  \\draw[->] (1.4,0) -- +(0,-0.8) node[below] {$m_Ag$};\n  \\draw[->] (1.8,0.28) -- +(0.9,0) node[above] {$T$};\n  \\draw[->] (4.6,-1.3) -- +(0,0.8) node[right] {$T$};\n  \\draw[->] (4.6,-1.9) -- +(0,-0.8) node[below] {$m_Bg$};\n\\end{tikzpicture}"
  },
  "AS2ConnectedParticlesQ007TikZ-002": {
    "id": "AS2ConnectedParticlesQ007TikZ-002",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2ConnectedParticlesQ007",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (4,0);\n  \\draw[thick] (4.25,0.25) circle (0.35);\n  \\draw[thick] (1,0) rectangle (1.8,0.55) node[midway] {A};\n  \\draw[thick] (1.8,0.32) -- (4.25,0.32);\n  \\draw[thick] (4.6,0.25) -- (4.6,-1.3);\n  \\draw[thick] (4.25,-1.9) rectangle (4.95,-1.3) node[midway] {B};\n  \\draw[->] (1.4,0.55) -- +(0,0.8) node[above] {$R$};\n  \\draw[->] (1.4,0) -- +(0,-0.8) node[below] {$m_Ag$};\n  \\draw[->] (1.8,0.28) -- +(0.9,0) node[above] {$T$};\n  \\draw[->] (4.6,-1.3) -- +(0,0.8) node[right] {$T$};\n  \\draw[->] (4.6,-1.9) -- +(0,-0.8) node[below] {$m_Bg$};\n\\end{tikzpicture}"
  },
  "AS2ConnectedParticlesQ008TikZ-001": {
    "id": "AS2ConnectedParticlesQ008TikZ-001",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2ConnectedParticlesQ008",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (4,0);\n  \\draw[thick] (4.25,0.25) circle (0.35);\n  \\draw[thick] (1,0) rectangle (1.8,0.55) node[midway] {A};\n  \\draw[thick] (1.8,0.32) -- (4.25,0.32);\n  \\draw[thick] (4.6,0.25) -- (4.6,-1.3);\n  \\draw[thick] (4.25,-1.9) rectangle (4.95,-1.3) node[midway] {B};\n  \\draw[->] (1.4,0.55) -- +(0,0.8) node[above] {$R$};\n  \\draw[->] (1.4,0) -- +(0,-0.8) node[below] {$m_Ag$};\n  \\draw[->] (1.8,0.28) -- +(0.9,0) node[above] {$T$};\n  \\draw[->] (4.6,-1.3) -- +(0,0.8) node[right] {$T$};\n  \\draw[->] (4.6,-1.9) -- +(0,-0.8) node[below] {$m_Bg$};\n\\end{tikzpicture}"
  },
  "AS2ConnectedParticlesQ008TikZ-002": {
    "id": "AS2ConnectedParticlesQ008TikZ-002",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2ConnectedParticlesQ008",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (4,0);\n  \\draw[thick] (4.25,0.25) circle (0.35);\n  \\draw[thick] (1,0) rectangle (1.8,0.55) node[midway] {A};\n  \\draw[thick] (1.8,0.32) -- (4.25,0.32);\n  \\draw[thick] (4.6,0.25) -- (4.6,-1.3);\n  \\draw[thick] (4.25,-1.9) rectangle (4.95,-1.3) node[midway] {B};\n  \\draw[->] (1.4,0.55) -- +(0,0.8) node[above] {$R$};\n  \\draw[->] (1.4,0) -- +(0,-0.8) node[below] {$m_Ag$};\n  \\draw[->] (1.8,0.28) -- +(0.9,0) node[above] {$T$};\n  \\draw[->] (4.6,-1.3) -- +(0,0.8) node[right] {$T$};\n  \\draw[->] (4.6,-1.9) -- +(0,-0.8) node[below] {$m_Bg$};\n\\end{tikzpicture}"
  },
  "AS2ConnectedParticlesQ009TikZ-001": {
    "id": "AS2ConnectedParticlesQ009TikZ-001",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2ConnectedParticlesQ009",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (4,0);\n  \\draw[thick] (4.25,0.25) circle (0.35);\n  \\draw[thick] (1,0) rectangle (1.8,0.55) node[midway] {A};\n  \\draw[thick] (1.8,0.32) -- (4.25,0.32);\n  \\draw[thick] (4.6,0.25) -- (4.6,-1.3);\n  \\draw[thick] (4.25,-1.9) rectangle (4.95,-1.3) node[midway] {B};\n  \\draw[->] (1.4,0.55) -- +(0,0.8) node[above] {$R$};\n  \\draw[->] (1.4,0) -- +(0,-0.8) node[below] {$m_Ag$};\n  \\draw[->] (1.8,0.28) -- +(0.9,0) node[above] {$T$};\n  \\draw[->] (4.6,-1.3) -- +(0,0.8) node[right] {$T$};\n  \\draw[->] (4.6,-1.9) -- +(0,-0.8) node[below] {$m_Bg$};\n\\end{tikzpicture}"
  },
  "AS2ConnectedParticlesQ009TikZ-002": {
    "id": "AS2ConnectedParticlesQ009TikZ-002",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2ConnectedParticlesQ009",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (4,0);\n  \\draw[thick] (4.25,0.25) circle (0.35);\n  \\draw[thick] (1,0) rectangle (1.8,0.55) node[midway] {A};\n  \\draw[thick] (1.8,0.32) -- (4.25,0.32);\n  \\draw[thick] (4.6,0.25) -- (4.6,-1.3);\n  \\draw[thick] (4.25,-1.9) rectangle (4.95,-1.3) node[midway] {B};\n  \\draw[->] (1.4,0.55) -- +(0,0.8) node[above] {$R$};\n  \\draw[->] (1.4,0) -- +(0,-0.8) node[below] {$m_Ag$};\n  \\draw[->] (1.8,0.28) -- +(0.9,0) node[above] {$T$};\n  \\draw[->] (4.6,-1.3) -- +(0,0.8) node[right] {$T$};\n  \\draw[->] (4.6,-1.9) -- +(0,-0.8) node[below] {$m_Bg$};\n\\end{tikzpicture}"
  },
  "AS2ConnectedParticlesQ010TikZ-001": {
    "id": "AS2ConnectedParticlesQ010TikZ-001",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2ConnectedParticlesQ010",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (4,0);\n  \\draw[thick] (4.25,0.25) circle (0.35);\n  \\draw[thick] (1,0) rectangle (1.8,0.55) node[midway] {A};\n  \\draw[thick] (1.8,0.32) -- (4.25,0.32);\n  \\draw[thick] (4.6,0.25) -- (4.6,-1.3);\n  \\draw[thick] (4.25,-1.9) rectangle (4.95,-1.3) node[midway] {B};\n  \\draw[->] (1.4,0.55) -- +(0,0.8) node[above] {$R$};\n  \\draw[->] (1.4,0) -- +(0,-0.8) node[below] {$m_Ag$};\n  \\draw[->] (1.8,0.28) -- +(0.9,0) node[above] {$T$};\n  \\draw[->] (4.6,-1.3) -- +(0,0.8) node[right] {$T$};\n  \\draw[->] (4.6,-1.9) -- +(0,-0.8) node[below] {$m_Bg$};\n\\end{tikzpicture}"
  },
  "AS2ConnectedParticlesQ010TikZ-002": {
    "id": "AS2ConnectedParticlesQ010TikZ-002",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2ConnectedParticlesQ010",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (4,0);\n  \\draw[thick] (4.25,0.25) circle (0.35);\n  \\draw[thick] (1,0) rectangle (1.8,0.55) node[midway] {A};\n  \\draw[thick] (1.8,0.32) -- (4.25,0.32);\n  \\draw[thick] (4.6,0.25) -- (4.6,-1.3);\n  \\draw[thick] (4.25,-1.9) rectangle (4.95,-1.3) node[midway] {B};\n  \\draw[->] (1.4,0.55) -- +(0,0.8) node[above] {$R$};\n  \\draw[->] (1.4,0) -- +(0,-0.8) node[below] {$m_Ag$};\n  \\draw[->] (1.8,0.28) -- +(0.9,0) node[above] {$T$};\n  \\draw[->] (4.6,-1.3) -- +(0,0.8) node[right] {$T$};\n  \\draw[->] (4.6,-1.9) -- +(0,-0.8) node[below] {$m_Bg$};\n\\end{tikzpicture}"
  },
  "AS2ForcesNewtonsLawsQ001TikZ-001": {
    "id": "AS2ForcesNewtonsLawsQ001TikZ-001",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2ForcesNewtonsLawsQ001",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (5,2.6);\n  \\draw (0.8,0) arc (0:27:0.8);\n  \\node at (1.05,0.22) {$\\theta$};\n  \\draw[thick,rotate around={27:(2.6,1.35)}] (2.2,1.05) rectangle (3.0,1.65);\n  \\node at (2.6,1.35) {block};\n  \\draw[->] (2.6,1.35) -- +(0,-1.2) node[below] {$mg$};\n  \\draw[->] (2.6,1.35) -- +(0.55,0.95) node[right] {$R$};\n  \\draw[->] (2.6,1.35) -- +(1.15,0.60) node[right] {$T/P$};\n  \\draw[->] (2.6,1.35) -- +(-0.95,-0.50) node[left] {$F_r$};\n\\end{tikzpicture}"
  },
  "AS2ForcesNewtonsLawsQ001TikZ-002": {
    "id": "AS2ForcesNewtonsLawsQ001TikZ-002",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2ForcesNewtonsLawsQ001",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (5,2.6);\n  \\draw (0.8,0) arc (0:27:0.8);\n  \\node at (1.05,0.22) {$\\theta$};\n  \\draw[thick,rotate around={27:(2.6,1.35)}] (2.2,1.05) rectangle (3.0,1.65);\n  \\node at (2.6,1.35) {block};\n  \\draw[->] (2.6,1.35) -- +(0,-1.2) node[below] {$mg$};\n  \\draw[->] (2.6,1.35) -- +(0.55,0.95) node[right] {$R$};\n  \\draw[->] (2.6,1.35) -- +(1.15,0.60) node[right] {$T/P$};\n  \\draw[->] (2.6,1.35) -- +(-0.95,-0.50) node[left] {$F_r$};\n\\end{tikzpicture}"
  },
  "AS2ForcesNewtonsLawsQ002TikZ-001": {
    "id": "AS2ForcesNewtonsLawsQ002TikZ-001",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2ForcesNewtonsLawsQ002",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (5,2.6);\n  \\draw (0.8,0) arc (0:27:0.8);\n  \\node at (1.05,0.22) {$\\theta$};\n  \\draw[thick,rotate around={27:(2.6,1.35)}] (2.2,1.05) rectangle (3.0,1.65);\n  \\node at (2.6,1.35) {block};\n  \\draw[->] (2.6,1.35) -- +(0,-1.2) node[below] {$mg$};\n  \\draw[->] (2.6,1.35) -- +(0.55,0.95) node[right] {$R$};\n  \\draw[->] (2.6,1.35) -- +(1.15,0.60) node[right] {$T/P$};\n  \\draw[->] (2.6,1.35) -- +(-0.95,-0.50) node[left] {$F_r$};\n\\end{tikzpicture}"
  },
  "AS2ForcesNewtonsLawsQ002TikZ-002": {
    "id": "AS2ForcesNewtonsLawsQ002TikZ-002",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2ForcesNewtonsLawsQ002",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (5,2.6);\n  \\draw (0.8,0) arc (0:27:0.8);\n  \\node at (1.05,0.22) {$\\theta$};\n  \\draw[thick,rotate around={27:(2.6,1.35)}] (2.2,1.05) rectangle (3.0,1.65);\n  \\node at (2.6,1.35) {block};\n  \\draw[->] (2.6,1.35) -- +(0,-1.2) node[below] {$mg$};\n  \\draw[->] (2.6,1.35) -- +(0.55,0.95) node[right] {$R$};\n  \\draw[->] (2.6,1.35) -- +(1.15,0.60) node[right] {$T/P$};\n  \\draw[->] (2.6,1.35) -- +(-0.95,-0.50) node[left] {$F_r$};\n\\end{tikzpicture}"
  },
  "AS2ForcesNewtonsLawsQ003TikZ-001": {
    "id": "AS2ForcesNewtonsLawsQ003TikZ-001",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2ForcesNewtonsLawsQ003",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (5,2.6);\n  \\draw (0.8,0) arc (0:27:0.8);\n  \\node at (1.05,0.22) {$\\theta$};\n  \\draw[thick,rotate around={27:(2.6,1.35)}] (2.2,1.05) rectangle (3.0,1.65);\n  \\node at (2.6,1.35) {block};\n  \\draw[->] (2.6,1.35) -- +(0,-1.2) node[below] {$mg$};\n  \\draw[->] (2.6,1.35) -- +(0.55,0.95) node[right] {$R$};\n  \\draw[->] (2.6,1.35) -- +(1.15,0.60) node[right] {$T/P$};\n  \\draw[->] (2.6,1.35) -- +(-0.95,-0.50) node[left] {$F_r$};\n\\end{tikzpicture}"
  },
  "AS2ForcesNewtonsLawsQ003TikZ-002": {
    "id": "AS2ForcesNewtonsLawsQ003TikZ-002",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2ForcesNewtonsLawsQ003",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (5,2.6);\n  \\draw (0.8,0) arc (0:27:0.8);\n  \\node at (1.05,0.22) {$\\theta$};\n  \\draw[thick,rotate around={27:(2.6,1.35)}] (2.2,1.05) rectangle (3.0,1.65);\n  \\node at (2.6,1.35) {block};\n  \\draw[->] (2.6,1.35) -- +(0,-1.2) node[below] {$mg$};\n  \\draw[->] (2.6,1.35) -- +(0.55,0.95) node[right] {$R$};\n  \\draw[->] (2.6,1.35) -- +(1.15,0.60) node[right] {$T/P$};\n  \\draw[->] (2.6,1.35) -- +(-0.95,-0.50) node[left] {$F_r$};\n\\end{tikzpicture}"
  },
  "AS2ForcesNewtonsLawsQ004TikZ-001": {
    "id": "AS2ForcesNewtonsLawsQ004TikZ-001",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2ForcesNewtonsLawsQ004",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (5,2.6);\n  \\draw (0.8,0) arc (0:27:0.8);\n  \\node at (1.05,0.22) {$\\theta$};\n  \\draw[thick,rotate around={27:(2.6,1.35)}] (2.2,1.05) rectangle (3.0,1.65);\n  \\node at (2.6,1.35) {block};\n  \\draw[->] (2.6,1.35) -- +(0,-1.2) node[below] {$mg$};\n  \\draw[->] (2.6,1.35) -- +(0.55,0.95) node[right] {$R$};\n  \\draw[->] (2.6,1.35) -- +(1.15,0.60) node[right] {$T/P$};\n  \\draw[->] (2.6,1.35) -- +(-0.95,-0.50) node[left] {$F_r$};\n\\end{tikzpicture}"
  },
  "AS2ForcesNewtonsLawsQ004TikZ-002": {
    "id": "AS2ForcesNewtonsLawsQ004TikZ-002",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2ForcesNewtonsLawsQ004",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (5,2.6);\n  \\draw (0.8,0) arc (0:27:0.8);\n  \\node at (1.05,0.22) {$\\theta$};\n  \\draw[thick,rotate around={27:(2.6,1.35)}] (2.2,1.05) rectangle (3.0,1.65);\n  \\node at (2.6,1.35) {block};\n  \\draw[->] (2.6,1.35) -- +(0,-1.2) node[below] {$mg$};\n  \\draw[->] (2.6,1.35) -- +(0.55,0.95) node[right] {$R$};\n  \\draw[->] (2.6,1.35) -- +(1.15,0.60) node[right] {$T/P$};\n  \\draw[->] (2.6,1.35) -- +(-0.95,-0.50) node[left] {$F_r$};\n\\end{tikzpicture}"
  },
  "AS2ForcesNewtonsLawsQ005TikZ-001": {
    "id": "AS2ForcesNewtonsLawsQ005TikZ-001",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2ForcesNewtonsLawsQ005",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\fill (0,0) circle (2pt);\n  \\draw[dashed] (-2,0) -- (2,0);\n  \\draw[dashed] (0,-1.7) -- (0,1.7);\n  \\draw[->,thick] (0,0) -- (1.7,0) node[right] {$Q$};\n  \\draw[->,thick] (0,0) -- (-0.55,1.55) node[above] {$P$};\n  \\draw[->,thick] (0,0) -- (-1.55,-0.85) node[left] {given force};\n  \\node at (0.45,0.25) {angles as in source};\n\\end{tikzpicture}"
  },
  "AS2ForcesNewtonsLawsQ005TikZ-002": {
    "id": "AS2ForcesNewtonsLawsQ005TikZ-002",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2ForcesNewtonsLawsQ005",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\fill (0,0) circle (2pt);\n  \\draw[dashed] (-2,0) -- (2,0);\n  \\draw[dashed] (0,-1.7) -- (0,1.7);\n  \\draw[->,thick] (0,0) -- (1.7,0) node[right] {$Q$};\n  \\draw[->,thick] (0,0) -- (-0.55,1.55) node[above] {$P$};\n  \\draw[->,thick] (0,0) -- (-1.55,-0.85) node[left] {given force};\n  \\node at (0.45,0.25) {angles as in source};\n\\end{tikzpicture}"
  },
  "AS2ForcesNewtonsLawsQ006TikZ-001": {
    "id": "AS2ForcesNewtonsLawsQ006TikZ-001",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2ForcesNewtonsLawsQ006",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (5,2.6);\n  \\draw (0.8,0) arc (0:27:0.8);\n  \\node at (1.05,0.22) {$\\theta$};\n  \\draw[thick,rotate around={27:(2.6,1.35)}] (2.2,1.05) rectangle (3.0,1.65);\n  \\node at (2.6,1.35) {block};\n  \\draw[->] (2.6,1.35) -- +(0,-1.2) node[below] {$mg$};\n  \\draw[->] (2.6,1.35) -- +(0.55,0.95) node[right] {$R$};\n  \\draw[->] (2.6,1.35) -- +(1.15,0.60) node[right] {$T/P$};\n  \\draw[->] (2.6,1.35) -- +(-0.95,-0.50) node[left] {$F_r$};\n\\end{tikzpicture}"
  },
  "AS2ForcesNewtonsLawsQ006TikZ-002": {
    "id": "AS2ForcesNewtonsLawsQ006TikZ-002",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2ForcesNewtonsLawsQ006",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (5,2.6);\n  \\draw (0.8,0) arc (0:27:0.8);\n  \\node at (1.05,0.22) {$\\theta$};\n  \\draw[thick,rotate around={27:(2.6,1.35)}] (2.2,1.05) rectangle (3.0,1.65);\n  \\node at (2.6,1.35) {block};\n  \\draw[->] (2.6,1.35) -- +(0,-1.2) node[below] {$mg$};\n  \\draw[->] (2.6,1.35) -- +(0.55,0.95) node[right] {$R$};\n  \\draw[->] (2.6,1.35) -- +(1.15,0.60) node[right] {$T/P$};\n  \\draw[->] (2.6,1.35) -- +(-0.95,-0.50) node[left] {$F_r$};\n\\end{tikzpicture}"
  },
  "AS2ForcesNewtonsLawsQ007TikZ-001": {
    "id": "AS2ForcesNewtonsLawsQ007TikZ-001",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2ForcesNewtonsLawsQ007",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (0,3.2) node[above] {wall};\n  \\draw[thick] (0,0.3) -- (3,2.0) node[midway,below right] {$AB$};\n  \\draw[thick] (3,2.0) -- (0,3.0) node[midway,above] {cable};\n  \\draw[->] (1.5,1.15) -- +(0,-1) node[below] {$10N$};\n  \\draw[->] (3,2.0) -- +(0,-1.2) node[below] {$40N$};\n  \\draw[->] (0,0.3) -- +(-0.9,0.4) node[left] {hinge reaction};\n\\end{tikzpicture}"
  },
  "AS2ForcesNewtonsLawsQ007TikZ-002": {
    "id": "AS2ForcesNewtonsLawsQ007TikZ-002",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2ForcesNewtonsLawsQ007",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (0,3.2) node[above] {wall};\n  \\draw[thick] (0,0.3) -- (3,2.0) node[midway,below right] {$AB$};\n  \\draw[thick] (3,2.0) -- (0,3.0) node[midway,above] {cable};\n  \\draw[->] (1.5,1.15) -- +(0,-1) node[below] {$10N$};\n  \\draw[->] (3,2.0) -- +(0,-1.2) node[below] {$40N$};\n  \\draw[->] (0,0.3) -- +(-0.9,0.4) node[left] {hinge reaction};\n\\end{tikzpicture}"
  },
  "AS2ForcesNewtonsLawsQ008TikZ-001": {
    "id": "AS2ForcesNewtonsLawsQ008TikZ-001",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2ForcesNewtonsLawsQ008",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\fill (0,0) circle (2pt);\n  \\draw[dashed] (-2,0) -- (2,0);\n  \\draw[dashed] (0,-1.7) -- (0,1.7);\n  \\draw[->,thick] (0,0) -- (1.7,0) node[right] {$Q$};\n  \\draw[->,thick] (0,0) -- (-0.55,1.55) node[above] {$P$};\n  \\draw[->,thick] (0,0) -- (-1.55,-0.85) node[left] {given force};\n  \\node at (0.45,0.25) {angles as in source};\n\\end{tikzpicture}"
  },
  "AS2ForcesNewtonsLawsQ008TikZ-002": {
    "id": "AS2ForcesNewtonsLawsQ008TikZ-002",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2ForcesNewtonsLawsQ008",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\fill (0,0) circle (2pt);\n  \\draw[dashed] (-2,0) -- (2,0);\n  \\draw[dashed] (0,-1.7) -- (0,1.7);\n  \\draw[->,thick] (0,0) -- (1.7,0) node[right] {$Q$};\n  \\draw[->,thick] (0,0) -- (-0.55,1.55) node[above] {$P$};\n  \\draw[->,thick] (0,0) -- (-1.55,-0.85) node[left] {given force};\n  \\node at (0.45,0.25) {angles as in source};\n\\end{tikzpicture}"
  },
  "AS2ForcesNewtonsLawsQ009TikZ-001": {
    "id": "AS2ForcesNewtonsLawsQ009TikZ-001",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2ForcesNewtonsLawsQ009",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (5,2.6);\n  \\draw (0.8,0) arc (0:27:0.8);\n  \\node at (1.05,0.22) {$\\theta$};\n  \\draw[thick,rotate around={27:(2.6,1.35)}] (2.2,1.05) rectangle (3.0,1.65);\n  \\node at (2.6,1.35) {block};\n  \\draw[->] (2.6,1.35) -- +(0,-1.2) node[below] {$mg$};\n  \\draw[->] (2.6,1.35) -- +(0.55,0.95) node[right] {$R$};\n  \\draw[->] (2.6,1.35) -- +(1.15,0.60) node[right] {$T/P$};\n  \\draw[->] (2.6,1.35) -- +(-0.95,-0.50) node[left] {$F_r$};\n\\end{tikzpicture}"
  },
  "AS2ForcesNewtonsLawsQ009TikZ-002": {
    "id": "AS2ForcesNewtonsLawsQ009TikZ-002",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2ForcesNewtonsLawsQ009",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (5,2.6);\n  \\draw (0.8,0) arc (0:27:0.8);\n  \\node at (1.05,0.22) {$\\theta$};\n  \\draw[thick,rotate around={27:(2.6,1.35)}] (2.2,1.05) rectangle (3.0,1.65);\n  \\node at (2.6,1.35) {block};\n  \\draw[->] (2.6,1.35) -- +(0,-1.2) node[below] {$mg$};\n  \\draw[->] (2.6,1.35) -- +(0.55,0.95) node[right] {$R$};\n  \\draw[->] (2.6,1.35) -- +(1.15,0.60) node[right] {$T/P$};\n  \\draw[->] (2.6,1.35) -- +(-0.95,-0.50) node[left] {$F_r$};\n\\end{tikzpicture}"
  },
  "AS2ForcesNewtonsLawsQ010TikZ-001": {
    "id": "AS2ForcesNewtonsLawsQ010TikZ-001",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2ForcesNewtonsLawsQ010",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (5,2.6);\n  \\draw (0.8,0) arc (0:27:0.8);\n  \\node at (1.05,0.22) {$\\theta$};\n  \\draw[thick,rotate around={27:(2.6,1.35)}] (2.2,1.05) rectangle (3.0,1.65);\n  \\node at (2.6,1.35) {block};\n  \\draw[->] (2.6,1.35) -- +(0,-1.2) node[below] {$mg$};\n  \\draw[->] (2.6,1.35) -- +(0.55,0.95) node[right] {$R$};\n  \\draw[->] (2.6,1.35) -- +(1.15,0.60) node[right] {$T/P$};\n  \\draw[->] (2.6,1.35) -- +(-0.95,-0.50) node[left] {$F_r$};\n\\end{tikzpicture}"
  },
  "AS2ForcesNewtonsLawsQ010TikZ-002": {
    "id": "AS2ForcesNewtonsLawsQ010TikZ-002",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2ForcesNewtonsLawsQ010",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (5,2.6);\n  \\draw (0.8,0) arc (0:27:0.8);\n  \\node at (1.05,0.22) {$\\theta$};\n  \\draw[thick,rotate around={27:(2.6,1.35)}] (2.2,1.05) rectangle (3.0,1.65);\n  \\node at (2.6,1.35) {block};\n  \\draw[->] (2.6,1.35) -- +(0,-1.2) node[below] {$mg$};\n  \\draw[->] (2.6,1.35) -- +(0.55,0.95) node[right] {$R$};\n  \\draw[->] (2.6,1.35) -- +(1.15,0.60) node[right] {$T/P$};\n  \\draw[->] (2.6,1.35) -- +(-0.95,-0.50) node[left] {$F_r$};\n\\end{tikzpicture}"
  },
  "AS2ForcesNewtonsLawsQ011TikZ-001": {
    "id": "AS2ForcesNewtonsLawsQ011TikZ-001",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2ForcesNewtonsLawsQ011",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\fill (0,0) circle (2pt);\n  \\draw[dashed] (-2,0) -- (2,0);\n  \\draw[dashed] (0,-1.7) -- (0,1.7);\n  \\draw[->,thick] (0,0) -- (1.7,0) node[right] {$Q$};\n  \\draw[->,thick] (0,0) -- (-0.55,1.55) node[above] {$P$};\n  \\draw[->,thick] (0,0) -- (-1.55,-0.85) node[left] {given force};\n  \\node at (0.45,0.25) {angles as in source};\n\\end{tikzpicture}"
  },
  "AS2ForcesNewtonsLawsQ011TikZ-002": {
    "id": "AS2ForcesNewtonsLawsQ011TikZ-002",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2ForcesNewtonsLawsQ011",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\fill (0,0) circle (2pt);\n  \\draw[dashed] (-2,0) -- (2,0);\n  \\draw[dashed] (0,-1.7) -- (0,1.7);\n  \\draw[->,thick] (0,0) -- (1.7,0) node[right] {$Q$};\n  \\draw[->,thick] (0,0) -- (-0.55,1.55) node[above] {$P$};\n  \\draw[->,thick] (0,0) -- (-1.55,-0.85) node[left] {given force};\n  \\node at (0.45,0.25) {angles as in source};\n\\end{tikzpicture}"
  },
  "AS2ForcesNewtonsLawsQ012TikZ-001": {
    "id": "AS2ForcesNewtonsLawsQ012TikZ-001",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2ForcesNewtonsLawsQ012",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (5,2.6);\n  \\draw (0.8,0) arc (0:27:0.8);\n  \\node at (1.05,0.22) {$\\theta$};\n  \\draw[thick,rotate around={27:(2.6,1.35)}] (2.2,1.05) rectangle (3.0,1.65);\n  \\node at (2.6,1.35) {block};\n  \\draw[->] (2.6,1.35) -- +(0,-1.2) node[below] {$mg$};\n  \\draw[->] (2.6,1.35) -- +(0.55,0.95) node[right] {$R$};\n  \\draw[->] (2.6,1.35) -- +(1.15,0.60) node[right] {$T/P$};\n  \\draw[->] (2.6,1.35) -- +(-0.95,-0.50) node[left] {$F_r$};\n\\end{tikzpicture}"
  },
  "AS2ForcesNewtonsLawsQ012TikZ-002": {
    "id": "AS2ForcesNewtonsLawsQ012TikZ-002",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2ForcesNewtonsLawsQ012",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (5,2.6);\n  \\draw (0.8,0) arc (0:27:0.8);\n  \\node at (1.05,0.22) {$\\theta$};\n  \\draw[thick,rotate around={27:(2.6,1.35)}] (2.2,1.05) rectangle (3.0,1.65);\n  \\node at (2.6,1.35) {block};\n  \\draw[->] (2.6,1.35) -- +(0,-1.2) node[below] {$mg$};\n  \\draw[->] (2.6,1.35) -- +(0.55,0.95) node[right] {$R$};\n  \\draw[->] (2.6,1.35) -- +(1.15,0.60) node[right] {$T/P$};\n  \\draw[->] (2.6,1.35) -- +(-0.95,-0.50) node[left] {$F_r$};\n\\end{tikzpicture}"
  },
  "AS2ForcesNewtonsLawsQ013TikZ-001": {
    "id": "AS2ForcesNewtonsLawsQ013TikZ-001",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2ForcesNewtonsLawsQ013",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (5,2.6);\n  \\draw (0.8,0) arc (0:27:0.8);\n  \\node at (1.05,0.22) {$\\theta$};\n  \\draw[thick,rotate around={27:(2.6,1.35)}] (2.2,1.05) rectangle (3.0,1.65);\n  \\node at (2.6,1.35) {block};\n  \\draw[->] (2.6,1.35) -- +(0,-1.2) node[below] {$mg$};\n  \\draw[->] (2.6,1.35) -- +(0.55,0.95) node[right] {$R$};\n  \\draw[->] (2.6,1.35) -- +(1.15,0.60) node[right] {$T/P$};\n  \\draw[->] (2.6,1.35) -- +(-0.95,-0.50) node[left] {$F_r$};\n\\end{tikzpicture}"
  },
  "AS2ForcesNewtonsLawsQ013TikZ-002": {
    "id": "AS2ForcesNewtonsLawsQ013TikZ-002",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2ForcesNewtonsLawsQ013",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (5,2.6);\n  \\draw (0.8,0) arc (0:27:0.8);\n  \\node at (1.05,0.22) {$\\theta$};\n  \\draw[thick,rotate around={27:(2.6,1.35)}] (2.2,1.05) rectangle (3.0,1.65);\n  \\node at (2.6,1.35) {block};\n  \\draw[->] (2.6,1.35) -- +(0,-1.2) node[below] {$mg$};\n  \\draw[->] (2.6,1.35) -- +(0.55,0.95) node[right] {$R$};\n  \\draw[->] (2.6,1.35) -- +(1.15,0.60) node[right] {$T/P$};\n  \\draw[->] (2.6,1.35) -- +(-0.95,-0.50) node[left] {$F_r$};\n\\end{tikzpicture}"
  },
  "AS2ForcesNewtonsLawsQ014TikZ-001": {
    "id": "AS2ForcesNewtonsLawsQ014TikZ-001",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2ForcesNewtonsLawsQ014",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\fill (0,0) circle (2pt);\n  \\draw[dashed] (-2,0) -- (2,0);\n  \\draw[dashed] (0,-1.7) -- (0,1.7);\n  \\draw[->,thick] (0,0) -- (1.7,0) node[right] {$Q$};\n  \\draw[->,thick] (0,0) -- (-0.55,1.55) node[above] {$P$};\n  \\draw[->,thick] (0,0) -- (-1.55,-0.85) node[left] {given force};\n  \\node at (0.45,0.25) {angles as in source};\n\\end{tikzpicture}"
  },
  "AS2ForcesNewtonsLawsQ014TikZ-002": {
    "id": "AS2ForcesNewtonsLawsQ014TikZ-002",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2ForcesNewtonsLawsQ014",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\fill (0,0) circle (2pt);\n  \\draw[dashed] (-2,0) -- (2,0);\n  \\draw[dashed] (0,-1.7) -- (0,1.7);\n  \\draw[->,thick] (0,0) -- (1.7,0) node[right] {$Q$};\n  \\draw[->,thick] (0,0) -- (-0.55,1.55) node[above] {$P$};\n  \\draw[->,thick] (0,0) -- (-1.55,-0.85) node[left] {given force};\n  \\node at (0.45,0.25) {angles as in source};\n\\end{tikzpicture}"
  },
  "AS2ForcesNewtonsLawsQ015TikZ-001": {
    "id": "AS2ForcesNewtonsLawsQ015TikZ-001",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2ForcesNewtonsLawsQ015",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (5,2.6);\n  \\draw (0.8,0) arc (0:27:0.8);\n  \\node at (1.05,0.22) {$\\theta$};\n  \\draw[thick,rotate around={27:(2.6,1.35)}] (2.2,1.05) rectangle (3.0,1.65);\n  \\node at (2.6,1.35) {block};\n  \\draw[->] (2.6,1.35) -- +(0,-1.2) node[below] {$mg$};\n  \\draw[->] (2.6,1.35) -- +(0.55,0.95) node[right] {$R$};\n  \\draw[->] (2.6,1.35) -- +(1.15,0.60) node[right] {$T/P$};\n  \\draw[->] (2.6,1.35) -- +(-0.95,-0.50) node[left] {$F_r$};\n\\end{tikzpicture}"
  },
  "AS2ForcesNewtonsLawsQ015TikZ-002": {
    "id": "AS2ForcesNewtonsLawsQ015TikZ-002",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2ForcesNewtonsLawsQ015",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (5,2.6);\n  \\draw (0.8,0) arc (0:27:0.8);\n  \\node at (1.05,0.22) {$\\theta$};\n  \\draw[thick,rotate around={27:(2.6,1.35)}] (2.2,1.05) rectangle (3.0,1.65);\n  \\node at (2.6,1.35) {block};\n  \\draw[->] (2.6,1.35) -- +(0,-1.2) node[below] {$mg$};\n  \\draw[->] (2.6,1.35) -- +(0.55,0.95) node[right] {$R$};\n  \\draw[->] (2.6,1.35) -- +(1.15,0.60) node[right] {$T/P$};\n  \\draw[->] (2.6,1.35) -- +(-0.95,-0.50) node[left] {$F_r$};\n\\end{tikzpicture}"
  },
  "AS2ForcesNewtonsLawsQ016TikZ-001": {
    "id": "AS2ForcesNewtonsLawsQ016TikZ-001",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2ForcesNewtonsLawsQ016",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (5,2.6);\n  \\draw (0.8,0) arc (0:27:0.8);\n  \\node at (1.05,0.22) {$\\theta$};\n  \\draw[thick,rotate around={27:(2.6,1.35)}] (2.2,1.05) rectangle (3.0,1.65);\n  \\node at (2.6,1.35) {block};\n  \\draw[->] (2.6,1.35) -- +(0,-1.2) node[below] {$mg$};\n  \\draw[->] (2.6,1.35) -- +(0.55,0.95) node[right] {$R$};\n  \\draw[->] (2.6,1.35) -- +(1.15,0.60) node[right] {$T/P$};\n  \\draw[->] (2.6,1.35) -- +(-0.95,-0.50) node[left] {$F_r$};\n\\end{tikzpicture}"
  },
  "AS2ForcesNewtonsLawsQ016TikZ-002": {
    "id": "AS2ForcesNewtonsLawsQ016TikZ-002",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2ForcesNewtonsLawsQ016",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (5,2.6);\n  \\draw (0.8,0) arc (0:27:0.8);\n  \\node at (1.05,0.22) {$\\theta$};\n  \\draw[thick,rotate around={27:(2.6,1.35)}] (2.2,1.05) rectangle (3.0,1.65);\n  \\node at (2.6,1.35) {block};\n  \\draw[->] (2.6,1.35) -- +(0,-1.2) node[below] {$mg$};\n  \\draw[->] (2.6,1.35) -- +(0.55,0.95) node[right] {$R$};\n  \\draw[->] (2.6,1.35) -- +(1.15,0.60) node[right] {$T/P$};\n  \\draw[->] (2.6,1.35) -- +(-0.95,-0.50) node[left] {$F_r$};\n\\end{tikzpicture}"
  },
  "AS2ForcesNewtonsLawsQ017TikZ-001": {
    "id": "AS2ForcesNewtonsLawsQ017TikZ-001",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2ForcesNewtonsLawsQ017",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (4,0);\n  \\draw[thick] (4.25,0.25) circle (0.35);\n  \\draw[thick] (1,0) rectangle (1.8,0.55) node[midway] {A};\n  \\draw[thick] (1.8,0.32) -- (4.25,0.32);\n  \\draw[thick] (4.6,0.25) -- (4.6,-1.3);\n  \\draw[thick] (4.25,-1.9) rectangle (4.95,-1.3) node[midway] {B};\n  \\draw[->] (1.4,0.55) -- +(0,0.8) node[above] {$R$};\n  \\draw[->] (1.4,0) -- +(0,-0.8) node[below] {$m_Ag$};\n  \\draw[->] (1.8,0.28) -- +(0.9,0) node[above] {$T$};\n  \\draw[->] (4.6,-1.3) -- +(0,0.8) node[right] {$T$};\n  \\draw[->] (4.6,-1.9) -- +(0,-0.8) node[below] {$m_Bg$};\n\\end{tikzpicture}"
  },
  "AS2ForcesNewtonsLawsQ017TikZ-002": {
    "id": "AS2ForcesNewtonsLawsQ017TikZ-002",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2ForcesNewtonsLawsQ017",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (4,0);\n  \\draw[thick] (4.25,0.25) circle (0.35);\n  \\draw[thick] (1,0) rectangle (1.8,0.55) node[midway] {A};\n  \\draw[thick] (1.8,0.32) -- (4.25,0.32);\n  \\draw[thick] (4.6,0.25) -- (4.6,-1.3);\n  \\draw[thick] (4.25,-1.9) rectangle (4.95,-1.3) node[midway] {B};\n  \\draw[->] (1.4,0.55) -- +(0,0.8) node[above] {$R$};\n  \\draw[->] (1.4,0) -- +(0,-0.8) node[below] {$m_Ag$};\n  \\draw[->] (1.8,0.28) -- +(0.9,0) node[above] {$T$};\n  \\draw[->] (4.6,-1.3) -- +(0,0.8) node[right] {$T$};\n  \\draw[->] (4.6,-1.9) -- +(0,-0.8) node[below] {$m_Bg$};\n\\end{tikzpicture}"
  },
  "AS2ForcesNewtonsLawsQ018TikZ-001": {
    "id": "AS2ForcesNewtonsLawsQ018TikZ-001",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2ForcesNewtonsLawsQ018",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (5,2.6);\n  \\draw (0.8,0) arc (0:27:0.8);\n  \\node at (1.05,0.22) {$\\theta$};\n  \\draw[thick,rotate around={27:(2.6,1.35)}] (2.2,1.05) rectangle (3.0,1.65);\n  \\node at (2.6,1.35) {block};\n  \\draw[->] (2.6,1.35) -- +(0,-1.2) node[below] {$mg$};\n  \\draw[->] (2.6,1.35) -- +(0.55,0.95) node[right] {$R$};\n  \\draw[->] (2.6,1.35) -- +(1.15,0.60) node[right] {$T/P$};\n  \\draw[->] (2.6,1.35) -- +(-0.95,-0.50) node[left] {$F_r$};\n\\end{tikzpicture}"
  },
  "AS2ForcesNewtonsLawsQ018TikZ-002": {
    "id": "AS2ForcesNewtonsLawsQ018TikZ-002",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2ForcesNewtonsLawsQ018",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (5,2.6);\n  \\draw (0.8,0) arc (0:27:0.8);\n  \\node at (1.05,0.22) {$\\theta$};\n  \\draw[thick,rotate around={27:(2.6,1.35)}] (2.2,1.05) rectangle (3.0,1.65);\n  \\node at (2.6,1.35) {block};\n  \\draw[->] (2.6,1.35) -- +(0,-1.2) node[below] {$mg$};\n  \\draw[->] (2.6,1.35) -- +(0.55,0.95) node[right] {$R$};\n  \\draw[->] (2.6,1.35) -- +(1.15,0.60) node[right] {$T/P$};\n  \\draw[->] (2.6,1.35) -- +(-0.95,-0.50) node[left] {$F_r$};\n\\end{tikzpicture}"
  },
  "AS2ForcesNewtonsLawsQ019TikZ-001": {
    "id": "AS2ForcesNewtonsLawsQ019TikZ-001",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2ForcesNewtonsLawsQ019",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (5,2.6);\n  \\draw (0.8,0) arc (0:27:0.8);\n  \\node at (1.05,0.22) {$\\theta$};\n  \\draw[thick,rotate around={27:(2.6,1.35)}] (2.2,1.05) rectangle (3.0,1.65);\n  \\node at (2.6,1.35) {block};\n  \\draw[->] (2.6,1.35) -- +(0,-1.2) node[below] {$mg$};\n  \\draw[->] (2.6,1.35) -- +(0.55,0.95) node[right] {$R$};\n  \\draw[->] (2.6,1.35) -- +(1.15,0.60) node[right] {$T/P$};\n  \\draw[->] (2.6,1.35) -- +(-0.95,-0.50) node[left] {$F_r$};\n\\end{tikzpicture}"
  },
  "AS2ForcesNewtonsLawsQ019TikZ-002": {
    "id": "AS2ForcesNewtonsLawsQ019TikZ-002",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2ForcesNewtonsLawsQ019",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (5,2.6);\n  \\draw (0.8,0) arc (0:27:0.8);\n  \\node at (1.05,0.22) {$\\theta$};\n  \\draw[thick,rotate around={27:(2.6,1.35)}] (2.2,1.05) rectangle (3.0,1.65);\n  \\node at (2.6,1.35) {block};\n  \\draw[->] (2.6,1.35) -- +(0,-1.2) node[below] {$mg$};\n  \\draw[->] (2.6,1.35) -- +(0.55,0.95) node[right] {$R$};\n  \\draw[->] (2.6,1.35) -- +(1.15,0.60) node[right] {$T/P$};\n  \\draw[->] (2.6,1.35) -- +(-0.95,-0.50) node[left] {$F_r$};\n\\end{tikzpicture}"
  },
  "AS2InclinedPlanesQ001TikZ-001": {
    "id": "AS2InclinedPlanesQ001TikZ-001",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2InclinedPlanesQ001",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (5,2.6);\n  \\draw (0.8,0) arc (0:27:0.8);\n  \\node at (1.05,0.22) {$\\theta$};\n  \\draw[thick,rotate around={27:(2.6,1.35)}] (2.2,1.05) rectangle (3.0,1.65);\n  \\node at (2.6,1.35) {block};\n  \\draw[->] (2.6,1.35) -- +(0,-1.2) node[below] {$mg$};\n  \\draw[->] (2.6,1.35) -- +(0.55,0.95) node[right] {$R$};\n  \\draw[->] (2.6,1.35) -- +(1.15,0.60) node[right] {$T/P$};\n  \\draw[->] (2.6,1.35) -- +(-0.95,-0.50) node[left] {$F_r$};\n\\end{tikzpicture}"
  },
  "AS2InclinedPlanesQ001TikZ-002": {
    "id": "AS2InclinedPlanesQ001TikZ-002",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2InclinedPlanesQ001",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (5,2.6);\n  \\draw (0.8,0) arc (0:27:0.8);\n  \\node at (1.05,0.22) {$\\theta$};\n  \\draw[thick,rotate around={27:(2.6,1.35)}] (2.2,1.05) rectangle (3.0,1.65);\n  \\node at (2.6,1.35) {block};\n  \\draw[->] (2.6,1.35) -- +(0,-1.2) node[below] {$mg$};\n  \\draw[->] (2.6,1.35) -- +(0.55,0.95) node[right] {$R$};\n  \\draw[->] (2.6,1.35) -- +(1.15,0.60) node[right] {$T/P$};\n  \\draw[->] (2.6,1.35) -- +(-0.95,-0.50) node[left] {$F_r$};\n\\end{tikzpicture}"
  },
  "AS2InclinedPlanesQ002TikZ-001": {
    "id": "AS2InclinedPlanesQ002TikZ-001",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2InclinedPlanesQ002",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (5,2.6);\n  \\draw (0.8,0) arc (0:27:0.8);\n  \\node at (1.05,0.22) {$\\theta$};\n  \\draw[thick,rotate around={27:(2.6,1.35)}] (2.2,1.05) rectangle (3.0,1.65);\n  \\node at (2.6,1.35) {block};\n  \\draw[->] (2.6,1.35) -- +(0,-1.2) node[below] {$mg$};\n  \\draw[->] (2.6,1.35) -- +(0.55,0.95) node[right] {$R$};\n  \\draw[->] (2.6,1.35) -- +(1.15,0.60) node[right] {$T/P$};\n  \\draw[->] (2.6,1.35) -- +(-0.95,-0.50) node[left] {$F_r$};\n\\end{tikzpicture}"
  },
  "AS2InclinedPlanesQ002TikZ-002": {
    "id": "AS2InclinedPlanesQ002TikZ-002",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2InclinedPlanesQ002",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (5,2.6);\n  \\draw (0.8,0) arc (0:27:0.8);\n  \\node at (1.05,0.22) {$\\theta$};\n  \\draw[thick,rotate around={27:(2.6,1.35)}] (2.2,1.05) rectangle (3.0,1.65);\n  \\node at (2.6,1.35) {block};\n  \\draw[->] (2.6,1.35) -- +(0,-1.2) node[below] {$mg$};\n  \\draw[->] (2.6,1.35) -- +(0.55,0.95) node[right] {$R$};\n  \\draw[->] (2.6,1.35) -- +(1.15,0.60) node[right] {$T/P$};\n  \\draw[->] (2.6,1.35) -- +(-0.95,-0.50) node[left] {$F_r$};\n\\end{tikzpicture}"
  },
  "AS2InclinedPlanesQ003TikZ-001": {
    "id": "AS2InclinedPlanesQ003TikZ-001",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2InclinedPlanesQ003",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (5,2.6);\n  \\draw (0.8,0) arc (0:27:0.8);\n  \\node at (1.05,0.22) {$\\theta$};\n  \\draw[thick,rotate around={27:(2.6,1.35)}] (2.2,1.05) rectangle (3.0,1.65);\n  \\node at (2.6,1.35) {block};\n  \\draw[->] (2.6,1.35) -- +(0,-1.2) node[below] {$mg$};\n  \\draw[->] (2.6,1.35) -- +(0.55,0.95) node[right] {$R$};\n  \\draw[->] (2.6,1.35) -- +(1.15,0.60) node[right] {$T/P$};\n  \\draw[->] (2.6,1.35) -- +(-0.95,-0.50) node[left] {$F_r$};\n\\end{tikzpicture}"
  },
  "AS2InclinedPlanesQ003TikZ-002": {
    "id": "AS2InclinedPlanesQ003TikZ-002",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2InclinedPlanesQ003",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (5,2.6);\n  \\draw (0.8,0) arc (0:27:0.8);\n  \\node at (1.05,0.22) {$\\theta$};\n  \\draw[thick,rotate around={27:(2.6,1.35)}] (2.2,1.05) rectangle (3.0,1.65);\n  \\node at (2.6,1.35) {block};\n  \\draw[->] (2.6,1.35) -- +(0,-1.2) node[below] {$mg$};\n  \\draw[->] (2.6,1.35) -- +(0.55,0.95) node[right] {$R$};\n  \\draw[->] (2.6,1.35) -- +(1.15,0.60) node[right] {$T/P$};\n  \\draw[->] (2.6,1.35) -- +(-0.95,-0.50) node[left] {$F_r$};\n\\end{tikzpicture}"
  },
  "AS2InclinedPlanesQ004TikZ-001": {
    "id": "AS2InclinedPlanesQ004TikZ-001",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2InclinedPlanesQ004",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (5,2.6);\n  \\draw (0.8,0) arc (0:27:0.8);\n  \\node at (1.05,0.22) {$\\theta$};\n  \\draw[thick,rotate around={27:(2.6,1.35)}] (2.2,1.05) rectangle (3.0,1.65);\n  \\node at (2.6,1.35) {block};\n  \\draw[->] (2.6,1.35) -- +(0,-1.2) node[below] {$mg$};\n  \\draw[->] (2.6,1.35) -- +(0.55,0.95) node[right] {$R$};\n  \\draw[->] (2.6,1.35) -- +(1.15,0.60) node[right] {$T/P$};\n  \\draw[->] (2.6,1.35) -- +(-0.95,-0.50) node[left] {$F_r$};\n\\end{tikzpicture}"
  },
  "AS2InclinedPlanesQ004TikZ-002": {
    "id": "AS2InclinedPlanesQ004TikZ-002",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2InclinedPlanesQ004",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (5,2.6);\n  \\draw (0.8,0) arc (0:27:0.8);\n  \\node at (1.05,0.22) {$\\theta$};\n  \\draw[thick,rotate around={27:(2.6,1.35)}] (2.2,1.05) rectangle (3.0,1.65);\n  \\node at (2.6,1.35) {block};\n  \\draw[->] (2.6,1.35) -- +(0,-1.2) node[below] {$mg$};\n  \\draw[->] (2.6,1.35) -- +(0.55,0.95) node[right] {$R$};\n  \\draw[->] (2.6,1.35) -- +(1.15,0.60) node[right] {$T/P$};\n  \\draw[->] (2.6,1.35) -- +(-0.95,-0.50) node[left] {$F_r$};\n\\end{tikzpicture}"
  },
  "AS2InclinedPlanesQ005TikZ-001": {
    "id": "AS2InclinedPlanesQ005TikZ-001",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2InclinedPlanesQ005",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (5,2.6);\n  \\draw (0.8,0) arc (0:27:0.8);\n  \\node at (1.05,0.22) {$\\theta$};\n  \\draw[thick,rotate around={27:(2.6,1.35)}] (2.2,1.05) rectangle (3.0,1.65);\n  \\node at (2.6,1.35) {block};\n  \\draw[->] (2.6,1.35) -- +(0,-1.2) node[below] {$mg$};\n  \\draw[->] (2.6,1.35) -- +(0.55,0.95) node[right] {$R$};\n  \\draw[->] (2.6,1.35) -- +(1.15,0.60) node[right] {$T/P$};\n  \\draw[->] (2.6,1.35) -- +(-0.95,-0.50) node[left] {$F_r$};\n\\end{tikzpicture}"
  },
  "AS2InclinedPlanesQ005TikZ-002": {
    "id": "AS2InclinedPlanesQ005TikZ-002",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2InclinedPlanesQ005",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (5,2.6);\n  \\draw (0.8,0) arc (0:27:0.8);\n  \\node at (1.05,0.22) {$\\theta$};\n  \\draw[thick,rotate around={27:(2.6,1.35)}] (2.2,1.05) rectangle (3.0,1.65);\n  \\node at (2.6,1.35) {block};\n  \\draw[->] (2.6,1.35) -- +(0,-1.2) node[below] {$mg$};\n  \\draw[->] (2.6,1.35) -- +(0.55,0.95) node[right] {$R$};\n  \\draw[->] (2.6,1.35) -- +(1.15,0.60) node[right] {$T/P$};\n  \\draw[->] (2.6,1.35) -- +(-0.95,-0.50) node[left] {$F_r$};\n\\end{tikzpicture}"
  },
  "AS2InclinedPlanesQ006TikZ-001": {
    "id": "AS2InclinedPlanesQ006TikZ-001",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2InclinedPlanesQ006",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (5,2.6);\n  \\draw (0.8,0) arc (0:27:0.8);\n  \\node at (1.05,0.22) {$\\theta$};\n  \\draw[thick,rotate around={27:(2.6,1.35)}] (2.2,1.05) rectangle (3.0,1.65);\n  \\node at (2.6,1.35) {block};\n  \\draw[->] (2.6,1.35) -- +(0,-1.2) node[below] {$mg$};\n  \\draw[->] (2.6,1.35) -- +(0.55,0.95) node[right] {$R$};\n  \\draw[->] (2.6,1.35) -- +(1.15,0.60) node[right] {$T/P$};\n  \\draw[->] (2.6,1.35) -- +(-0.95,-0.50) node[left] {$F_r$};\n\\end{tikzpicture}"
  },
  "AS2InclinedPlanesQ006TikZ-002": {
    "id": "AS2InclinedPlanesQ006TikZ-002",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2InclinedPlanesQ006",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (5,2.6);\n  \\draw (0.8,0) arc (0:27:0.8);\n  \\node at (1.05,0.22) {$\\theta$};\n  \\draw[thick,rotate around={27:(2.6,1.35)}] (2.2,1.05) rectangle (3.0,1.65);\n  \\node at (2.6,1.35) {block};\n  \\draw[->] (2.6,1.35) -- +(0,-1.2) node[below] {$mg$};\n  \\draw[->] (2.6,1.35) -- +(0.55,0.95) node[right] {$R$};\n  \\draw[->] (2.6,1.35) -- +(1.15,0.60) node[right] {$T/P$};\n  \\draw[->] (2.6,1.35) -- +(-0.95,-0.50) node[left] {$F_r$};\n\\end{tikzpicture}"
  },
  "AS2InclinedPlanesQ007TikZ-001": {
    "id": "AS2InclinedPlanesQ007TikZ-001",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2InclinedPlanesQ007",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (5,2.6);\n  \\draw (0.8,0) arc (0:27:0.8);\n  \\node at (1.05,0.22) {$\\theta$};\n  \\draw[thick,rotate around={27:(2.6,1.35)}] (2.2,1.05) rectangle (3.0,1.65);\n  \\node at (2.6,1.35) {block};\n  \\draw[->] (2.6,1.35) -- +(0,-1.2) node[below] {$mg$};\n  \\draw[->] (2.6,1.35) -- +(0.55,0.95) node[right] {$R$};\n  \\draw[->] (2.6,1.35) -- +(1.15,0.60) node[right] {$T/P$};\n  \\draw[->] (2.6,1.35) -- +(-0.95,-0.50) node[left] {$F_r$};\n\\end{tikzpicture}"
  },
  "AS2InclinedPlanesQ007TikZ-002": {
    "id": "AS2InclinedPlanesQ007TikZ-002",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2InclinedPlanesQ007",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (5,2.6);\n  \\draw (0.8,0) arc (0:27:0.8);\n  \\node at (1.05,0.22) {$\\theta$};\n  \\draw[thick,rotate around={27:(2.6,1.35)}] (2.2,1.05) rectangle (3.0,1.65);\n  \\node at (2.6,1.35) {block};\n  \\draw[->] (2.6,1.35) -- +(0,-1.2) node[below] {$mg$};\n  \\draw[->] (2.6,1.35) -- +(0.55,0.95) node[right] {$R$};\n  \\draw[->] (2.6,1.35) -- +(1.15,0.60) node[right] {$T/P$};\n  \\draw[->] (2.6,1.35) -- +(-0.95,-0.50) node[left] {$F_r$};\n\\end{tikzpicture}"
  },
  "AS2InclinedPlanesQ008TikZ-001": {
    "id": "AS2InclinedPlanesQ008TikZ-001",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2InclinedPlanesQ008",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (5,2.6);\n  \\draw (0.8,0) arc (0:27:0.8);\n  \\node at (1.05,0.22) {$\\theta$};\n  \\draw[thick,rotate around={27:(2.6,1.35)}] (2.2,1.05) rectangle (3.0,1.65);\n  \\node at (2.6,1.35) {block};\n  \\draw[->] (2.6,1.35) -- +(0,-1.2) node[below] {$mg$};\n  \\draw[->] (2.6,1.35) -- +(0.55,0.95) node[right] {$R$};\n  \\draw[->] (2.6,1.35) -- +(1.15,0.60) node[right] {$T/P$};\n  \\draw[->] (2.6,1.35) -- +(-0.95,-0.50) node[left] {$F_r$};\n\\end{tikzpicture}"
  },
  "AS2InclinedPlanesQ008TikZ-002": {
    "id": "AS2InclinedPlanesQ008TikZ-002",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2InclinedPlanesQ008",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (5,2.6);\n  \\draw (0.8,0) arc (0:27:0.8);\n  \\node at (1.05,0.22) {$\\theta$};\n  \\draw[thick,rotate around={27:(2.6,1.35)}] (2.2,1.05) rectangle (3.0,1.65);\n  \\node at (2.6,1.35) {block};\n  \\draw[->] (2.6,1.35) -- +(0,-1.2) node[below] {$mg$};\n  \\draw[->] (2.6,1.35) -- +(0.55,0.95) node[right] {$R$};\n  \\draw[->] (2.6,1.35) -- +(1.15,0.60) node[right] {$T/P$};\n  \\draw[->] (2.6,1.35) -- +(-0.95,-0.50) node[left] {$F_r$};\n\\end{tikzpicture}"
  },
  "AS2InclinedPlanesQ009TikZ-001": {
    "id": "AS2InclinedPlanesQ009TikZ-001",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2InclinedPlanesQ009",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (4,0);\n  \\draw[thick] (4.25,0.25) circle (0.35);\n  \\draw[thick] (1,0) rectangle (1.8,0.55) node[midway] {A};\n  \\draw[thick] (1.8,0.32) -- (4.25,0.32);\n  \\draw[thick] (4.6,0.25) -- (4.6,-1.3);\n  \\draw[thick] (4.25,-1.9) rectangle (4.95,-1.3) node[midway] {B};\n  \\draw[->] (1.4,0.55) -- +(0,0.8) node[above] {$R$};\n  \\draw[->] (1.4,0) -- +(0,-0.8) node[below] {$m_Ag$};\n  \\draw[->] (1.8,0.28) -- +(0.9,0) node[above] {$T$};\n  \\draw[->] (4.6,-1.3) -- +(0,0.8) node[right] {$T$};\n  \\draw[->] (4.6,-1.9) -- +(0,-0.8) node[below] {$m_Bg$};\n\\end{tikzpicture}"
  },
  "AS2InclinedPlanesQ009TikZ-002": {
    "id": "AS2InclinedPlanesQ009TikZ-002",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2InclinedPlanesQ009",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (4,0);\n  \\draw[thick] (4.25,0.25) circle (0.35);\n  \\draw[thick] (1,0) rectangle (1.8,0.55) node[midway] {A};\n  \\draw[thick] (1.8,0.32) -- (4.25,0.32);\n  \\draw[thick] (4.6,0.25) -- (4.6,-1.3);\n  \\draw[thick] (4.25,-1.9) rectangle (4.95,-1.3) node[midway] {B};\n  \\draw[->] (1.4,0.55) -- +(0,0.8) node[above] {$R$};\n  \\draw[->] (1.4,0) -- +(0,-0.8) node[below] {$m_Ag$};\n  \\draw[->] (1.8,0.28) -- +(0.9,0) node[above] {$T$};\n  \\draw[->] (4.6,-1.3) -- +(0,0.8) node[right] {$T$};\n  \\draw[->] (4.6,-1.9) -- +(0,-0.8) node[below] {$m_Bg$};\n\\end{tikzpicture}"
  },
  "AS2InclinedPlanesQ010TikZ-001": {
    "id": "AS2InclinedPlanesQ010TikZ-001",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2InclinedPlanesQ010",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (5,2.6);\n  \\draw (0.8,0) arc (0:27:0.8);\n  \\node at (1.05,0.22) {$\\theta$};\n  \\draw[thick,rotate around={27:(2.6,1.35)}] (2.2,1.05) rectangle (3.0,1.65);\n  \\node at (2.6,1.35) {block};\n  \\draw[->] (2.6,1.35) -- +(0,-1.2) node[below] {$mg$};\n  \\draw[->] (2.6,1.35) -- +(0.55,0.95) node[right] {$R$};\n  \\draw[->] (2.6,1.35) -- +(1.15,0.60) node[right] {$T/P$};\n  \\draw[->] (2.6,1.35) -- +(-0.95,-0.50) node[left] {$F_r$};\n\\end{tikzpicture}"
  },
  "AS2InclinedPlanesQ010TikZ-002": {
    "id": "AS2InclinedPlanesQ010TikZ-002",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2InclinedPlanesQ010",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (5,2.6);\n  \\draw (0.8,0) arc (0:27:0.8);\n  \\node at (1.05,0.22) {$\\theta$};\n  \\draw[thick,rotate around={27:(2.6,1.35)}] (2.2,1.05) rectangle (3.0,1.65);\n  \\node at (2.6,1.35) {block};\n  \\draw[->] (2.6,1.35) -- +(0,-1.2) node[below] {$mg$};\n  \\draw[->] (2.6,1.35) -- +(0.55,0.95) node[right] {$R$};\n  \\draw[->] (2.6,1.35) -- +(1.15,0.60) node[right] {$T/P$};\n  \\draw[->] (2.6,1.35) -- +(-0.95,-0.50) node[left] {$F_r$};\n\\end{tikzpicture}"
  },
  "AS2KinematicsMotionGraphsUniformAccelerationQ001TikZ-001": {
    "id": "AS2KinematicsMotionGraphsUniformAccelerationQ001TikZ-001",
    "kind": "latex",
    "componentName": "",
    "module": "M2",
    "questionId": "AS2KinematicsMotionGraphsUniformAccelerationQ001",
    "sourceContent": "\\begin{tikzpicture}[x=0.38cm,y=0.12cm,>=Stealth]\n  \\draw[->] (0,0) -- (23,0) node[right] {$t(s)$};\n  \\draw[->] (0,0) -- (0,36) node[above] {$v(\\mathrm{m\\,s^{-1}})$};\n  \\draw[thick] (0,10) -- (4,30) -- (9,30) -- (19,0);\n  \\draw[dashed] (4,0) -- (4,30);\n  \\draw[dashed] (9,0) -- (9,30);\n  \\node[left] at (0,10) {$10$};\n  \\node[left] at (0,30) {$30$};\n  \\node[below] at (4,0) {$t$};\n  \\node[below] at (6.5,0) {$5$};\n  \\node[below] at (14,0) {$10$};\n\\end{tikzpicture}"
  },
  "AS2KinematicsMotionGraphsUniformAccelerationQ003TikZ-001": {
    "id": "AS2KinematicsMotionGraphsUniformAccelerationQ003TikZ-001",
    "kind": "latex",
    "componentName": "",
    "module": "M2",
    "questionId": "AS2KinematicsMotionGraphsUniformAccelerationQ003",
    "sourceContent": "\\begin{tikzpicture}[x=0.18cm,y=0.20cm,>=Stealth]\n  \\draw[->] (0,0) -- (60,0) node[right] {$t(s)$};\n  \\draw[->] (0,0) -- (0,24) node[above] {$v$};\n  \\node[left] at (0,20) {$20$};\n  \\node[left] at (0,0) {$0$};\n  \\node[above left] at (0,24) {$\\mathrm{m\\,s^{-1}}$};\n  \\draw[thick] (0,20) -- (10,5) -- (14,5) -- (50,0);\n  \\draw[dashed] (10,0) -- (10,5);\n  \\draw[dashed] (14,0) -- (14,5);\n  \\node[below] at (10,0) {$10$};\n  \\node[below] at (14,0) {$14$};\n  \\node[below] at (30,-3) {Fig. 2};\n\\end{tikzpicture}"
  },
  "AS2KinematicsMotionGraphsUniformAccelerationQ004TikZ-001": {
    "id": "AS2KinematicsMotionGraphsUniformAccelerationQ004TikZ-001",
    "kind": "latex",
    "componentName": "",
    "module": "M2",
    "questionId": "AS2KinematicsMotionGraphsUniformAccelerationQ004",
    "sourceContent": "\\begin{tikzpicture}[x=0.35cm,y=0.15cm,>=Stealth]\n  \\draw[->] (0,0) -- (24,0) node[right] {$t(s)$};\n  \\draw[->] (0,0) -- (0,31) node[above] {$v(\\mathrm{m\\,s^{-1}})$};\n  \\node[left] at (0,25) {$25$};\n  \\node[left] at (0,14) {$14$};\n  \\node[left] at (0,0) {$0$};\n  \\node[below] at (4,0) {$4$};\n  \\draw[thick] (0,14) -- (22,14) node[right] {Peter};\n  \\draw[dashed] (4,0) -- (4,25);\n  \\draw[thick] (4,25) -- (22,7) node[right] {Richard};\n\\end{tikzpicture}"
  },
  "AS2KinematicsMotionGraphsUniformAccelerationQ005SVG-001": {
    "id": "AS2KinematicsMotionGraphsUniformAccelerationQ005SVG-001",
    "kind": "svg",
    "componentName": "AS2KinematicsMotionGraphsUniformAccelerationQ005SVG001",
    "module": "M2",
    "questionId": "AS2KinematicsMotionGraphsUniformAccelerationQ005"
  },
  "AS2KinematicsMotionGraphsUniformAccelerationQ005TikZ-001": {
    "id": "AS2KinematicsMotionGraphsUniformAccelerationQ005TikZ-001",
    "kind": "latex",
    "componentName": "",
    "module": "M2",
    "questionId": "AS2KinematicsMotionGraphsUniformAccelerationQ005",
    "sourceContent": "\\begin{tikzpicture}[x=0.25cm,y=0.06cm,>=Stealth]\n  \\draw[->] (0,-8) -- (25,-8) node[right] {$t$};\n  \\draw[->] (0,-12) -- (0,100) node[above] {$S$};\n  \\node[left] at (0,90) {$B\\;90$};\n  \\node[left] at (0,50) {$50$};\n  \\node[left] at (0,0) {$A$};\n  \\node[below] at (20,-8) {$20$};\n  \\draw[thick,domain=0:20,smooth,variable=\\x] plot (\\x,{\\x+0.075*\\x*\\x});\n  \\draw[thick] (0,90) -- (20,50);\n  \\node[right] at (20,50) {};\n  \\node[right] at (14,36) {Kathryn};\n  \\node[right] at (8,75) {Victoria};\n\\end{tikzpicture}"
  },
  "AS2KinematicsMotionGraphsUniformAccelerationQ006TikZ-001": {
    "id": "AS2KinematicsMotionGraphsUniformAccelerationQ006TikZ-001",
    "kind": "latex",
    "componentName": "",
    "module": "M2",
    "questionId": "AS2KinematicsMotionGraphsUniformAccelerationQ006",
    "sourceContent": "\\begin{tikzpicture}[x=0.03cm,y=0.12cm,>=Stealth]\n  \\draw[->] (0,0) -- (520,0) node[right] {$t\\;s$};\n  \\draw[->] (0,0) -- (0,46) node[above] {$v\\;\\mathrm{m\\,s^{-1}}$};\n  \\node[left] at (0,15) {$15$};\n  \\node[left] at (0,40) {$40$};\n  \\node[below] at (240,0) {$240$};\n  \\draw[thick] (0,15) -- (500,15) node[right] {Freight};\n  \\draw[thick] (240,0) -- (260,40) -- (500,40) node[right] {Express};\n\\end{tikzpicture}"
  },
  "AS2KinematicsMotionGraphsUniformAccelerationQ007TikZ-001": {
    "id": "AS2KinematicsMotionGraphsUniformAccelerationQ007TikZ-001",
    "kind": "latex",
    "componentName": "",
    "module": "M2",
    "questionId": "AS2KinematicsMotionGraphsUniformAccelerationQ007",
    "sourceContent": "\\begin{tikzpicture}[x=0.028cm,y=0.008cm,>=Stealth]\n  \\draw[->] (0,-360) -- (0,760) node[above] {Displacement (m)};\n  \\draw[->] (0,0) -- (370,0) node[right] {Time (s)};\n  \\draw[thick] (0,0) -- (120,600) -- (180,600) -- (270,0) -- (312,-280);\n  \\draw[dashed] (120,0) -- (120,600);\n  \\draw[dashed] (180,0) -- (180,600);\n  \\draw[dashed] (312,0) -- (312,-280);\n  \\node[left] at (0,600) {$600$};\n  \\node[left] at (0,0) {$O$};\n  \\node[above] at (120,600) {$A$};\n  \\node[above] at (180,600) {$B$};\n  \\node[above right] at (270,0) {$C$};\n  \\node[below] at (312,-280) {$D$};\n  \\node[below] at (120,0) {$120$};\n  \\node[below] at (180,0) {$180$};\n  \\node[below] at (270,0) {$270$};\n  \\node[above] at (312,0) {$312$};\n  \\node[below] at (190,-330) {Fig. 1};\n\\end{tikzpicture}"
  },
  "AS2KinematicsMotionGraphsUniformAccelerationQ008SVG-001": {
    "id": "AS2KinematicsMotionGraphsUniformAccelerationQ008SVG-001",
    "kind": "svg",
    "componentName": "AS2KinematicsMotionGraphsUniformAccelerationQ008SVG001",
    "module": "M2",
    "questionId": "AS2KinematicsMotionGraphsUniformAccelerationQ008"
  },
  "AS2KinematicsMotionGraphsUniformAccelerationQ014SVG-001": {
    "id": "AS2KinematicsMotionGraphsUniformAccelerationQ014SVG-001",
    "kind": "svg",
    "componentName": "AS2KinematicsMotionGraphsUniformAccelerationQ014SVG001",
    "module": "M2",
    "questionId": "AS2KinematicsMotionGraphsUniformAccelerationQ014"
  },
  "AS2KinematicsMotionGraphsUniformAccelerationQ016SVG-001": {
    "id": "AS2KinematicsMotionGraphsUniformAccelerationQ016SVG-001",
    "kind": "svg",
    "componentName": "AS2KinematicsMotionGraphsUniformAccelerationQ016SVG001",
    "module": "M2",
    "questionId": "AS2KinematicsMotionGraphsUniformAccelerationQ016"
  },
  "AS2KinematicsMotionGraphsUniformAccelerationSupportWidget-001": {
    "id": "AS2KinematicsMotionGraphsUniformAccelerationSupportWidget-001",
    "kind": "html",
    "componentName": "",
    "module": "M2",
    "questionId": "AS2KinematicsMotionGraphsUniformAccelerationQ017",
    "sourceContent": "<!doctype html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Motion graph and SUVAT written-work checker</title>\n  <style>\n    :root {\n      font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif;\n      color: #1f2937;\n      background: #f8fafc;\n    }\n    body {\n      margin: 0;\n      padding: 24px;\n    }\n    main {\n      max-width: 980px;\n      margin: 0 auto;\n    }\n    h1 {\n      font-size: 1.8rem;\n      margin-bottom: 0.2rem;\n    }\n    .subtitle {\n      color: #475569;\n      margin-bottom: 1.5rem;\n    }\n    .grid {\n      display: grid;\n      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n      gap: 16px;\n    }\n    section {\n      background: white;\n      border: 1px solid #e2e8f0;\n      border-radius: 18px;\n      padding: 18px;\n      box-shadow: 0 10px 28px rgba(15, 23, 42, 0.06);\n    }\n    h2 {\n      margin-top: 0;\n      font-size: 1.1rem;\n    }\n    label {\n      display: grid;\n      gap: 4px;\n      margin: 10px 0;\n      font-size: 0.92rem;\n    }\n    input {\n      padding: 8px 10px;\n      border: 1px solid #cbd5e1;\n      border-radius: 10px;\n      font-size: 1rem;\n    }\n    button {\n      padding: 10px 14px;\n      border: 0;\n      border-radius: 12px;\n      background: #111827;\n      color: white;\n      cursor: pointer;\n      margin-top: 8px;\n    }\n    button:hover {\n      background: #3f3f46;\n    }\n    .output {\n      margin-top: 12px;\n      padding: 12px;\n      border-radius: 12px;\n      background: #f1f5f9;\n      min-height: 46px;\n      line-height: 1.5;\n    }\n    .note {\n      margin-top: 18px;\n      padding: 14px;\n      border-left: 4px solid #111827;\n      background: white;\n      border-radius: 12px;\n      color: #3f3f46;\n    }\n    code {\n      background: #e2e8f0;\n      padding: 1px 5px;\n      border-radius: 6px;\n    }\n  </style>\n</head>\n<body>\n  <main>\n    <h1>Motion graph and SUVAT written-work checker</h1>\n    <p class=\"subtitle\">A small exam-practice helper for CCEA AS2 kinematics. Write your method first, then use this to check the arithmetic.</p>\n\n    <div class=\"grid\">\n      <section>\n        <h2>1. Displacement-time gradient</h2>\n        <label>Initial time, t₁\n          <input id=\"dt_t1\" type=\"number\" value=\"0\" step=\"any\">\n        </label>\n        <label>Initial displacement, s₁\n          <input id=\"dt_s1\" type=\"number\" value=\"0\" step=\"any\">\n        </label>\n        <label>Final time, t₂\n          <input id=\"dt_t2\" type=\"number\" value=\"120\" step=\"any\">\n        </label>\n        <label>Final displacement, s₂\n          <input id=\"dt_s2\" type=\"number\" value=\"600\" step=\"any\">\n        </label>\n        <button onclick=\"calcGradient()\">Check gradient</button>\n        <div class=\"output\" id=\"gradientOut\"></div>\n      </section>\n\n      <section>\n        <h2>2. Velocity-time trapezium area</h2>\n        <label>Initial velocity, u\n          <input id=\"vt_u\" type=\"number\" value=\"10\" step=\"any\">\n        </label>\n        <label>Final velocity, v\n          <input id=\"vt_v\" type=\"number\" value=\"30\" step=\"any\">\n        </label>\n        <label>Time interval, t\n          <input id=\"vt_t\" type=\"number\" value=\"4\" step=\"any\">\n        </label>\n        <button onclick=\"calcArea()\">Check area</button>\n        <div class=\"output\" id=\"areaOut\"></div>\n      </section>\n\n      <section>\n        <h2>3. SUVAT quick check</h2>\n        <label>Initial velocity, u\n          <input id=\"su_u\" type=\"number\" value=\"20\" step=\"any\">\n        </label>\n        <label>Acceleration, a\n          <input id=\"su_a\" type=\"number\" value=\"-9.8\" step=\"any\">\n        </label>\n        <label>Time, t\n          <input id=\"su_t\" type=\"number\" value=\"2.04\" step=\"any\">\n        </label>\n        <button onclick=\"calcSuvat()\">Check v and s</button>\n        <div class=\"output\" id=\"suvatOut\"></div>\n      </section>\n    </div>\n\n    <div class=\"note\">\n      <strong>Exam reminder:</strong> A velocity-time area gives displacement. For total distance, split the journey into sections and add the distances travelled in each direction.\n    </div>\n  </main>\n\n  <script>\n    function num(id) {\n      return Number(document.getElementById(id).value);\n    }\n\n    function fmt(x) {\n      if (!Number.isFinite(x)) return \"not defined\";\n      return Math.abs(x) >= 1000 || Math.abs(x) < 0.001 && x !== 0\n        ? x.toExponential(4)\n        : Number(x.toFixed(6)).toString();\n    }\n\n    function calcGradient() {\n      const t1 = num(\"dt_t1\");\n      const s1 = num(\"dt_s1\");\n      const t2 = num(\"dt_t2\");\n      const s2 = num(\"dt_s2\");\n      const dt = t2 - t1;\n      const ds = s2 - s1;\n      const out = document.getElementById(\"gradientOut\");\n      if (dt === 0) {\n        out.textContent = \"The time change is 0, so the gradient is undefined.\";\n        return;\n      }\n      const gradient = ds / dt;\n      out.innerHTML = \"Δs = \" + fmt(ds) + \", Δt = \" + fmt(dt) +\n        \"<br>Gradient = Δs / Δt = <strong>\" + fmt(gradient) + \"</strong> m s<sup>-1</sup>\";\n    }\n\n    function calcArea() {\n      const u = num(\"vt_u\");\n      const v = num(\"vt_v\");\n      const t = num(\"vt_t\");\n      const area = 0.5 * (u + v) * t;\n      document.getElementById(\"areaOut\").innerHTML =\n        \"Area = ½(\" + fmt(u) + \" + \" + fmt(v) + \")(\" + fmt(t) + \")\" +\n        \"<br>Displacement = <strong>\" + fmt(area) + \"</strong> m\";\n    }\n\n    function calcSuvat() {\n      const u = num(\"su_u\");\n      const a = num(\"su_a\");\n      const t = num(\"su_t\");\n      const v = u + a * t;\n      const s = u * t + 0.5 * a * t * t;\n      document.getElementById(\"suvatOut\").innerHTML =\n        \"v = u + at = <strong>\" + fmt(v) + \"</strong>\" +\n        \"<br>s = ut + ½at² = <strong>\" + fmt(s) + \"</strong>\";\n    }\n\n    calcGradient();\n    calcArea();\n    calcSuvat();\n  </script>\n</body>\n</html>"
  },
  "AS2MeanStandardDeviationQ009SVG-001": {
    "id": "AS2MeanStandardDeviationQ009SVG-001",
    "kind": "svg",
    "componentName": "AS2MeanStandardDeviationQ009SVG001",
    "module": "S2",
    "questionId": "AS2MeanStandardDeviationQ009"
  },
  "AS2MeanStandardDeviationQ009TikZ-001": {
    "id": "AS2MeanStandardDeviationQ009TikZ-001",
    "kind": "latex",
    "componentName": "",
    "module": "S2",
    "questionId": "AS2MeanStandardDeviationQ009",
    "sourceContent": "\\begin{tikzpicture}[x=0.23cm,y=1.65cm]\n  % Requires: \\usetikzlibrary{patterns}\n\n  % Axes\n  \\draw[->, thick] (1.5,0) -- (32.5,0) node[right] {Mass (kg)};\n  \\draw[->, thick] (1.5,0) -- (1.5,2.75) node[above] {Frequency Density};\n\n  % Grid lines\n  \\foreach \\y in {0,0.5,1.0,1.5,2.0,2.5} {\n    \\draw[gray!35] (1.5,\\y) -- (31.5,\\y);\n    \\node[left] at (1.5,\\y) {\\small \\y};\n  }\n  \\foreach \\x in {1.5,5.5,9.5,17.5,21.5,31.5} {\n    \\draw[gray!35] (\\x,0) -- (\\x,2.5);\n    \\node[below] at (\\x,0) {\\small \\x};\n  }\n\n  % Histogram bars: boundaries and frequency densities\n  \\draw[thick, pattern=north east lines] (1.5,0) rectangle (5.5,1.5);\n  \\draw[thick, pattern=north east lines] (5.5,0) rectangle (9.5,2.25);\n  \\draw[thick, pattern=north east lines] (9.5,0) rectangle (17.5,0.5);\n  \\draw[thick, pattern=north east lines] (17.5,0) rectangle (21.5,1.5);\n  \\draw[thick, pattern=north east lines] (21.5,0) rectangle (31.5,1.5);\n\n  % Labels\n  \\node[below=1.1cm] at (16.5,0) {\\textbf{Fig. 1}};\n  \\node[above] at (3.5,1.5) {\\scriptsize FD $1.5$};\n  \\node[above] at (7.5,2.25) {\\scriptsize FD $2.25$};\n  \\node[above] at (13.5,0.5) {\\scriptsize FD $0.5$};\n  \\node[above] at (19.5,1.5) {\\scriptsize FD $1.5$};\n  \\node[above] at (26.5,1.5) {\\scriptsize FD $1.5$};\n\\end{tikzpicture}"
  },
  "AS2MeanStandardDeviationSupportWidget-001": {
    "id": "AS2MeanStandardDeviationSupportWidget-001",
    "kind": "html",
    "componentName": "",
    "module": "S2",
    "questionId": "AS2MeanStandardDeviationQ011",
    "sourceContent": "<!doctype html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Grouped-data mean, standard deviation and median checker</title>\n  <style>\n    body {\n      font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif;\n      margin: 0;\n      background: #f7f7fb;\n      color: #1f2937;\n    }\n    main {\n      max-width: 980px;\n      margin: 24px auto;\n      padding: 20px;\n    }\n    .card {\n      background: white;\n      border: 1px solid #d9ddea;\n      border-radius: 16px;\n      padding: 18px;\n      box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);\n      margin-bottom: 16px;\n    }\n    textarea {\n      width: 100%;\n      min-height: 180px;\n      font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;\n      font-size: 14px;\n      padding: 12px;\n      border-radius: 12px;\n      border: 1px solid #cbd5e1;\n      box-sizing: border-box;\n    }\n    button, select {\n      border: 1px solid #cbd5e1;\n      border-radius: 10px;\n      padding: 10px 12px;\n      background: white;\n      cursor: pointer;\n      margin-top: 10px;\n    }\n    button {\n      font-weight: 700;\n    }\n    table {\n      width: 100%;\n      border-collapse: collapse;\n      margin-top: 12px;\n      font-size: 14px;\n    }\n    th, td {\n      border-bottom: 1px solid #e5e7eb;\n      padding: 8px;\n      text-align: right;\n    }\n    th:first-child, td:first-child {\n      text-align: left;\n    }\n    .outputs {\n      display: grid;\n      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n      gap: 12px;\n    }\n    .metric {\n      background: #f8fafc;\n      border: 1px solid #e2e8f0;\n      border-radius: 12px;\n      padding: 12px;\n    }\n    .metric strong {\n      display: block;\n      font-size: 12px;\n      color: #64748b;\n      margin-bottom: 4px;\n    }\n    .warning {\n      color: #b45309;\n      font-weight: 600;\n    }\n    code {\n      background: #eef2ff;\n      padding: 2px 5px;\n      border-radius: 6px;\n    }\n  </style>\n</head>\n<body>\n<main>\n  <section class=\"card\">\n    <h1>Grouped-data checker</h1>\n    <p>Enter one class interval and frequency per line, using either <code>lower-upper, frequency</code> or <code>lower, upper, frequency</code>.</p>\n    <textarea id=\"dataInput\">150-159, 6\n160-169, 29\n170-179, 31\n180-189, 5</textarea>\n    <div>\n      <label for=\"sdMode\"><strong>Standard deviation setting:</strong></label>\n      <select id=\"sdMode\">\n        <option value=\"sample\">Sample standard deviation, sigma n-1</option>\n        <option value=\"population\">Population standard deviation, sigma n</option>\n      </select>\n      <button id=\"calculateBtn\">Calculate</button>\n    </div>\n    <p id=\"message\" class=\"warning\"></p>\n  </section>\n\n  <section class=\"card\">\n    <h2>Results</h2>\n    <div class=\"outputs\" id=\"outputs\"></div>\n    <table id=\"workTable\">\n      <thead>\n        <tr>\n          <th>Class</th>\n          <th>Midpoint</th>\n          <th>Frequency</th>\n          <th>Cumulative frequency</th>\n          <th>fx</th>\n          <th>fx²</th>\n        </tr>\n      </thead>\n      <tbody></tbody>\n    </table>\n  </section>\n</main>\n\n<script>\nfunction parseLine(line) {\n  const cleaned = line.trim().replace(/[–—]/g, '-');\n  if (!cleaned) return null;\n\n  let match = cleaned.match(/^\\s*(-?\\d+(?:\\.\\d+)?)\\s*-\\s*(-?\\d+(?:\\.\\d+)?)\\s*,\\s*(-?\\d+(?:\\.\\d+)?)\\s*$/);\n  if (match) {\n    return { lower: Number(match[1]), upper: Number(match[2]), freq: Number(match[3]), label: `${match[1]}-${match[2]}` };\n  }\n\n  const parts = cleaned.split(',').map(x => x.trim()).filter(Boolean);\n  if (parts.length === 3) {\n    return { lower: Number(parts[0]), upper: Number(parts[1]), freq: Number(parts[2]), label: `${parts[0]}-${parts[1]}` };\n  }\n\n  throw new Error(`Could not read line: ${line}`);\n}\n\nfunction fmt(x) {\n  if (!Number.isFinite(x)) return 'N/A';\n  return Math.round(x * 10000) / 10000;\n}\n\nfunction calculate() {\n  const message = document.getElementById('message');\n  const tbody = document.querySelector('#workTable tbody');\n  const outputs = document.getElementById('outputs');\n  message.textContent = '';\n  tbody.innerHTML = '';\n  outputs.innerHTML = '';\n\n  let rows;\n  try {\n    rows = document.getElementById('dataInput').value.split('\\n').map(parseLine).filter(Boolean);\n    rows.forEach(r => {\n      if (!Number.isFinite(r.lower) || !Number.isFinite(r.upper) || !Number.isFinite(r.freq)) throw new Error('All values must be numeric.');\n      if (r.upper <= r.lower) throw new Error('Each upper class boundary must be greater than the lower boundary.');\n      if (r.freq < 0) throw new Error('Frequencies cannot be negative.');\n      r.mid = (r.lower + r.upper) / 2;\n      r.fx = r.mid * r.freq;\n      r.fx2 = r.mid * r.mid * r.freq;\n    });\n  } catch (err) {\n    message.textContent = err.message;\n    return;\n  }\n\n  if (rows.length === 0) {\n    message.textContent = 'Enter at least one class interval.';\n    return;\n  }\n\n  let cum = 0;\n  rows.forEach(r => { cum += r.freq; r.cum = cum; });\n\n  const n = rows.reduce((s, r) => s + r.freq, 0);\n  const sumfx = rows.reduce((s, r) => s + r.fx, 0);\n  const sumfx2 = rows.reduce((s, r) => s + r.fx2, 0);\n  const mean = sumfx / n;\n  const sdMode = document.getElementById('sdMode').value;\n  const variancePop = (sumfx2 / n) - mean * mean;\n  const varianceSample = n > 1 ? (sumfx2 - (sumfx * sumfx / n)) / (n - 1) : NaN;\n  const sd = sdMode === 'sample' ? Math.sqrt(Math.max(0, varianceSample)) : Math.sqrt(Math.max(0, variancePop));\n\n  const medianPosition = n / 2;\n  const medianClass = rows.find(r => r.cum >= medianPosition);\n  let median = NaN;\n  if (medianClass) {\n    const before = medianClass.cum - medianClass.freq;\n    const fraction = (medianPosition - before) / medianClass.freq;\n    median = medianClass.lower + fraction * (medianClass.upper - medianClass.lower);\n  }\n\n  const metrics = [\n    ['Total frequency, Σf', n],\n    ['Σfx', sumfx],\n    ['Σfx²', sumfx2],\n    ['Mean', mean],\n    [sdMode === 'sample' ? 'Sample SD, σ n-1' : 'Population SD, σ n', sd],\n    ['Interpolated median estimate', median]\n  ];\n\n  for (const [label, value] of metrics) {\n    const div = document.createElement('div');\n    div.className = 'metric';\n    div.innerHTML = `<strong>${label}</strong><span>${fmt(value)}</span>`;\n    outputs.appendChild(div);\n  }\n\n  rows.forEach(r => {\n    const tr = document.createElement('tr');\n    tr.innerHTML = `<td>${r.label}</td><td>${fmt(r.mid)}</td><td>${fmt(r.freq)}</td><td>${fmt(r.cum)}</td><td>${fmt(r.fx)}</td><td>${fmt(r.fx2)}</td>`;\n    tbody.appendChild(tr);\n  });\n}\n\ndocument.getElementById('calculateBtn').addEventListener('click', calculate);\ncalculate();\n</script>\n</body>\n</html>"
  },
  "AS2ProbabilityQ001MMD-001": {
    "id": "AS2ProbabilityQ001MMD-001",
    "kind": "mermaid",
    "componentName": "AS2ProbabilityQ001MMD001",
    "module": "S3",
    "questionId": "AS2ProbabilityQ001"
  },
  "AS2ProbabilityQ002SVG-001": {
    "id": "AS2ProbabilityQ002SVG-001",
    "kind": "svg",
    "componentName": "AS2ProbabilityQ002SVG001",
    "module": "S3",
    "questionId": "AS2ProbabilityQ002"
  },
  "AS2ProbabilityQ003MMD-001": {
    "id": "AS2ProbabilityQ003MMD-001",
    "kind": "mermaid",
    "componentName": "AS2ProbabilityQ003MMD001",
    "module": "S3",
    "questionId": "AS2ProbabilityQ003"
  },
  "AS2ProbabilitySupportWidget-001": {
    "id": "AS2ProbabilitySupportWidget-001",
    "kind": "html",
    "componentName": "",
    "module": "S3",
    "questionId": "AS2ProbabilityQ004",
    "sourceContent": "<!doctype html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>AS2 Probability Rule Checker</title>\n  <style>\n    body {\n      font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif;\n      margin: 0;\n      padding: 24px;\n      background: #f7f7fb;\n      color: #1f2937;\n    }\n    .card {\n      max-width: 860px;\n      margin: 0 auto;\n      background: white;\n      border: 1px solid #d7dce5;\n      border-radius: 18px;\n      padding: 22px;\n      box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);\n    }\n    h1 { margin-top: 0; font-size: 1.6rem; }\n    .grid {\n      display: grid;\n      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n      gap: 16px;\n    }\n    label { font-weight: 700; display: block; margin-bottom: 6px; }\n    input[type=\"number\"] {\n      width: 100%;\n      box-sizing: border-box;\n      padding: 10px;\n      border: 1px solid #aeb7c6;\n      border-radius: 10px;\n      font-size: 1rem;\n    }\n    .output {\n      margin-top: 20px;\n      display: grid;\n      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n      gap: 12px;\n    }\n    .pill {\n      border: 1px solid #d7dce5;\n      border-radius: 14px;\n      padding: 12px;\n      background: #fafafa;\n    }\n    .value { font-size: 1.25rem; font-weight: 800; margin-top: 4px; }\n    .status { margin-top: 18px; padding: 12px; border-radius: 14px; background: #eef2ff; }\n    code { background: #eef2f7; padding: 2px 5px; border-radius: 6px; }\n  </style>\n</head>\n<body>\n  <main class=\"card\">\n    <h1>AS2 Probability Rule Checker</h1>\n    <p>Enter probabilities for two events. The checker updates the union, conditional probabilities, and relationship tests.</p>\n\n    <section class=\"grid\">\n      <div>\n        <label for=\"pa\">P(A)</label>\n        <input id=\"pa\" type=\"number\" min=\"0\" max=\"1\" step=\"0.01\" value=\"0.52\">\n      </div>\n      <div>\n        <label for=\"pb\">P(B)</label>\n        <input id=\"pb\" type=\"number\" min=\"0\" max=\"1\" step=\"0.01\" value=\"0.42\">\n      </div>\n      <div>\n        <label for=\"pab\">P(A ∩ B)</label>\n        <input id=\"pab\" type=\"number\" min=\"0\" max=\"1\" step=\"0.01\" value=\"0.14\">\n      </div>\n    </section>\n\n    <section class=\"output\" aria-live=\"polite\">\n      <div class=\"pill\">P(A ∪ B)<div id=\"union\" class=\"value\"></div></div>\n      <div class=\"pill\">P(A | B)<div id=\"agivenb\" class=\"value\"></div></div>\n      <div class=\"pill\">P(B | A)<div id=\"bgivena\" class=\"value\"></div></div>\n      <div class=\"pill\">P(A)P(B)<div id=\"product\" class=\"value\"></div></div>\n    </section>\n\n    <section id=\"status\" class=\"status\"></section>\n  </main>\n\n  <script>\n    const ids = [\"pa\", \"pb\", \"pab\"];\n    const fmt = (x) => Number.isFinite(x) ? x.toFixed(4).replace(/0+$/, \"\").replace(/\\.$/, \"\") : \"undefined\";\n    const close = (a, b) => Math.abs(a - b) < 1e-9;\n\n    function update() {\n      const pa = Number(document.getElementById(\"pa\").value);\n      const pb = Number(document.getElementById(\"pb\").value);\n      const pab = Number(document.getElementById(\"pab\").value);\n      const union = pa + pb - pab;\n      const agivenb = pb === 0 ? NaN : pab / pb;\n      const bgivena = pa === 0 ? NaN : pab / pa;\n      const product = pa * pb;\n\n      document.getElementById(\"union\").textContent = fmt(union);\n      document.getElementById(\"agivenb\").textContent = fmt(agivenb);\n      document.getElementById(\"bgivena\").textContent = fmt(bgivena);\n      document.getElementById(\"product\").textContent = fmt(product);\n\n      const valid = pa >= 0 && pa <= 1 && pb >= 0 && pb <= 1 && pab >= 0 && pab <= Math.min(pa, pb) && union <= 1 && union >= 0;\n      const lines = [];\n      lines.push(valid ? \"Valid probability setup.\" : \"Not a valid setup: check that 0 ≤ P(A ∩ B) ≤ min(P(A), P(B)) and P(A ∪ B) ≤ 1.\");\n      lines.push(close(pab, 0) ? \"Mutually exclusive: yes.\" : \"Mutually exclusive: no, because P(A ∩ B) is not 0.\");\n      lines.push(close(union, 1) ? \"Exhaustive: yes.\" : \"Exhaustive: no, because P(A ∪ B) is not 1.\");\n      lines.push(close(pab, product) ? \"Independent: yes, because P(A ∩ B) = P(A)P(B).\" : \"Independent: no, because P(A ∩ B) ≠ P(A)P(B).\");\n      document.getElementById(\"status\").innerHTML = lines.map(line => `<p>${line}</p>`).join(\"\");\n    }\n\n    ids.forEach(id => document.getElementById(id).addEventListener(\"input\", update));\n    update();\n  </script>\n</body>\n</html>"
  },
  "AS2ProbabilityQ009MMD-001": {
    "id": "AS2ProbabilityQ009MMD-001",
    "kind": "mermaid",
    "componentName": "AS2ProbabilityQ009MMD001",
    "module": "S3",
    "questionId": "AS2ProbabilityQ009"
  },
  "AS2ProbabilityQ012MMD-001": {
    "id": "AS2ProbabilityQ012MMD-001",
    "kind": "mermaid",
    "componentName": "AS2ProbabilityQ012MMD001",
    "module": "S3",
    "questionId": "AS2ProbabilityQ012"
  },
  "AS2ProductMomentCorrelationCoefficientSupportWidget-001": {
    "id": "AS2ProductMomentCorrelationCoefficientSupportWidget-001",
    "kind": "html",
    "componentName": "",
    "module": "S2",
    "questionId": "AS2ProductMomentCorrelationCoefficientQ008",
    "sourceContent": "<!doctype html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>PMCC Checker</title>\n  <style>\n    body { font-family: Arial, sans-serif; margin: 0; padding: 24px; background: #f7f7f7; color: #111; }\n    .wrap { max-width: 900px; margin: 0 auto; background: white; border: 1px solid #ddd; border-radius: 16px; padding: 22px; }\n    h1 { margin-top: 0; }\n    label { display: block; font-weight: 700; margin-top: 14px; }\n    textarea { width: 100%; min-height: 70px; font-size: 16px; padding: 10px; box-sizing: border-box; }\n    button { margin-top: 16px; padding: 10px 16px; font-size: 16px; border: 1px solid #222; background: #fff; border-radius: 10px; cursor: pointer; }\n    .out { margin-top: 18px; padding: 14px; background: #fafafa; border: 1px solid #ddd; border-radius: 12px; }\n    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 8px; }\n    .item { padding: 8px; background: white; border: 1px solid #e2e2e2; border-radius: 10px; }\n    .warn { color: #8a0000; font-weight: 700; }\n  </style>\n</head>\n<body>\n  <div class=\"wrap\">\n    <h1>Product-Moment Correlation Coefficient Checker</h1>\n    <p>Enter paired data as comma-separated values. The two lists must have the same length.</p>\n\n    <label for=\"xvals\">x values</label>\n    <textarea id=\"xvals\">2,5,3,7,8,7</textarea>\n\n    <label for=\"yvals\">y values</label>\n    <textarea id=\"yvals\">8,11,10,7,13,12</textarea>\n\n    <button onclick=\"calculatePMCC()\">Calculate PMCC</button>\n\n    <div id=\"output\" class=\"out\">Results will appear here.</div>\n  </div>\n\n  <script>\n    function parseValues(text) {\n      return text.split(/[,\\s]+/).map(s => s.trim()).filter(Boolean).map(Number);\n    }\n\n    function sf(x, digits = 4) {\n      if (!Number.isFinite(x)) return 'not defined';\n      return Number.parseFloat(x.toPrecision(digits)).toString();\n    }\n\n    function calculatePMCC() {\n      const xs = parseValues(document.getElementById('xvals').value);\n      const ys = parseValues(document.getElementById('yvals').value);\n      const out = document.getElementById('output');\n\n      if (xs.some(Number.isNaN) || ys.some(Number.isNaN)) {\n        out.innerHTML = '<p class=\"warn\">Check your entries: every value must be numeric.</p>';\n        return;\n      }\n      if (xs.length !== ys.length || xs.length < 2) {\n        out.innerHTML = '<p class=\"warn\">The x and y lists must have the same length and at least two pairs.</p>';\n        return;\n      }\n\n      const n = xs.length;\n      const sx = xs.reduce((a,b)=>a+b,0);\n      const sy = ys.reduce((a,b)=>a+b,0);\n      const sx2 = xs.reduce((a,b)=>a+b*b,0);\n      const sy2 = ys.reduce((a,b)=>a+b*b,0);\n      const sxy = xs.reduce((a,b,i)=>a+b*ys[i],0);\n      const Sxx = sx2 - sx*sx/n;\n      const Syy = sy2 - sy*sy/n;\n      const Sxy = sxy - sx*sy/n;\n      const r = Sxy / Math.sqrt(Sxx*Syy);\n      let comment = '';\n      if (r > 0.8) comment = 'strong positive correlation';\n      else if (r > 0.5) comment = 'moderate positive correlation';\n      else if (r > 0.2) comment = 'weak positive correlation';\n      else if (r >= -0.2) comment = 'very weak or no linear correlation';\n      else if (r >= -0.5) comment = 'weak negative correlation';\n      else if (r >= -0.8) comment = 'moderate negative correlation';\n      else comment = 'strong negative correlation';\n\n      out.innerHTML = `\n        <div class=\"grid\">\n          <div class=\"item\"><strong>n</strong><br>${n}</div>\n          <div class=\"item\"><strong>Σx</strong><br>${sf(sx, 8)}</div>\n          <div class=\"item\"><strong>Σy</strong><br>${sf(sy, 8)}</div>\n          <div class=\"item\"><strong>Σx²</strong><br>${sf(sx2, 8)}</div>\n          <div class=\"item\"><strong>Σy²</strong><br>${sf(sy2, 8)}</div>\n          <div class=\"item\"><strong>Σxy</strong><br>${sf(sxy, 8)}</div>\n          <div class=\"item\"><strong>Sxx</strong><br>${sf(Sxx, 8)}</div>\n          <div class=\"item\"><strong>Syy</strong><br>${sf(Syy, 8)}</div>\n          <div class=\"item\"><strong>Sxy</strong><br>${sf(Sxy, 8)}</div>\n          <div class=\"item\"><strong>r</strong><br>${sf(r, 6)}</div>\n        </div>\n        <p><strong>Quick interpretation:</strong> ${comment}.</p>\n        <p>Exam reminder: this checker validates arithmetic only. In an exam answer, show the formula, substitution, final rounded value, and a contextual interpretation.</p>\n      `;\n    }\n  </script>\n</body>\n</html>"
  },
  "AS2StaticsQ001TikZ-001": {
    "id": "AS2StaticsQ001TikZ-001",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2StaticsQ001",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\fill (0,0) circle (2pt);\n  \\draw[dashed] (-2,0) -- (2,0);\n  \\draw[dashed] (0,-1.7) -- (0,1.7);\n  \\draw[->,thick] (0,0) -- (1.7,0) node[right] {$Q$};\n  \\draw[->,thick] (0,0) -- (-0.55,1.55) node[above] {$P$};\n  \\draw[->,thick] (0,0) -- (-1.55,-0.85) node[left] {given force};\n  \\node at (0.45,0.25) {angles as in source};\n\\end{tikzpicture}"
  },
  "AS2StaticsQ001TikZ-002": {
    "id": "AS2StaticsQ001TikZ-002",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2StaticsQ001",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\fill (0,0) circle (2pt);\n  \\draw[dashed] (-2,0) -- (2,0);\n  \\draw[dashed] (0,-1.7) -- (0,1.7);\n  \\draw[->,thick] (0,0) -- (1.7,0) node[right] {$Q$};\n  \\draw[->,thick] (0,0) -- (-0.55,1.55) node[above] {$P$};\n  \\draw[->,thick] (0,0) -- (-1.55,-0.85) node[left] {given force};\n  \\node at (0.45,0.25) {angles as in source};\n\\end{tikzpicture}"
  },
  "AS2StaticsQ002TikZ-001": {
    "id": "AS2StaticsQ002TikZ-001",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2StaticsQ002",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\fill (0,0) circle (2pt);\n  \\draw[dashed] (-2,0) -- (2,0);\n  \\draw[dashed] (0,-1.7) -- (0,1.7);\n  \\draw[->,thick] (0,0) -- (1.7,0) node[right] {$Q$};\n  \\draw[->,thick] (0,0) -- (-0.55,1.55) node[above] {$P$};\n  \\draw[->,thick] (0,0) -- (-1.55,-0.85) node[left] {given force};\n  \\node at (0.45,0.25) {angles as in source};\n\\end{tikzpicture}"
  },
  "AS2StaticsQ002TikZ-002": {
    "id": "AS2StaticsQ002TikZ-002",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2StaticsQ002",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\fill (0,0) circle (2pt);\n  \\draw[dashed] (-2,0) -- (2,0);\n  \\draw[dashed] (0,-1.7) -- (0,1.7);\n  \\draw[->,thick] (0,0) -- (1.7,0) node[right] {$Q$};\n  \\draw[->,thick] (0,0) -- (-0.55,1.55) node[above] {$P$};\n  \\draw[->,thick] (0,0) -- (-1.55,-0.85) node[left] {given force};\n  \\node at (0.45,0.25) {angles as in source};\n\\end{tikzpicture}"
  },
  "AS2StaticsQ003TikZ-001": {
    "id": "AS2StaticsQ003TikZ-001",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2StaticsQ003",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\fill (0,0) circle (2pt);\n  \\draw[dashed] (-2,0) -- (2,0);\n  \\draw[dashed] (0,-1.7) -- (0,1.7);\n  \\draw[->,thick] (0,0) -- (1.7,0) node[right] {$Q$};\n  \\draw[->,thick] (0,0) -- (-0.55,1.55) node[above] {$P$};\n  \\draw[->,thick] (0,0) -- (-1.55,-0.85) node[left] {given force};\n  \\node at (0.45,0.25) {angles as in source};\n\\end{tikzpicture}"
  },
  "AS2StaticsQ003TikZ-002": {
    "id": "AS2StaticsQ003TikZ-002",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2StaticsQ003",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\fill (0,0) circle (2pt);\n  \\draw[dashed] (-2,0) -- (2,0);\n  \\draw[dashed] (0,-1.7) -- (0,1.7);\n  \\draw[->,thick] (0,0) -- (1.7,0) node[right] {$Q$};\n  \\draw[->,thick] (0,0) -- (-0.55,1.55) node[above] {$P$};\n  \\draw[->,thick] (0,0) -- (-1.55,-0.85) node[left] {given force};\n  \\node at (0.45,0.25) {angles as in source};\n\\end{tikzpicture}"
  },
  "AS2StaticsQ004TikZ-001": {
    "id": "AS2StaticsQ004TikZ-001",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2StaticsQ004",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (0,3.2) node[above] {wall};\n  \\draw[thick] (0,0.3) -- (3,2.0) node[midway,below right] {$AB$};\n  \\draw[thick] (3,2.0) -- (0,3.0) node[midway,above] {cable};\n  \\draw[->] (1.5,1.15) -- +(0,-1) node[below] {$10N$};\n  \\draw[->] (3,2.0) -- +(0,-1.2) node[below] {$40N$};\n  \\draw[->] (0,0.3) -- +(-0.9,0.4) node[left] {hinge reaction};\n\\end{tikzpicture}"
  },
  "AS2StaticsQ004TikZ-002": {
    "id": "AS2StaticsQ004TikZ-002",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2StaticsQ004",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (0,3.2) node[above] {wall};\n  \\draw[thick] (0,0.3) -- (3,2.0) node[midway,below right] {$AB$};\n  \\draw[thick] (3,2.0) -- (0,3.0) node[midway,above] {cable};\n  \\draw[->] (1.5,1.15) -- +(0,-1) node[below] {$10N$};\n  \\draw[->] (3,2.0) -- +(0,-1.2) node[below] {$40N$};\n  \\draw[->] (0,0.3) -- +(-0.9,0.4) node[left] {hinge reaction};\n\\end{tikzpicture}"
  },
  "AS2StaticsQ005TikZ-001": {
    "id": "AS2StaticsQ005TikZ-001",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2StaticsQ005",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\fill (0,0) circle (2pt);\n  \\draw[dashed] (-2,0) -- (2,0);\n  \\draw[dashed] (0,-1.7) -- (0,1.7);\n  \\draw[->,thick] (0,0) -- (1.7,0) node[right] {$Q$};\n  \\draw[->,thick] (0,0) -- (-0.55,1.55) node[above] {$P$};\n  \\draw[->,thick] (0,0) -- (-1.55,-0.85) node[left] {given force};\n  \\node at (0.45,0.25) {angles as in source};\n\\end{tikzpicture}"
  },
  "AS2StaticsQ005TikZ-002": {
    "id": "AS2StaticsQ005TikZ-002",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2StaticsQ005",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\fill (0,0) circle (2pt);\n  \\draw[dashed] (-2,0) -- (2,0);\n  \\draw[dashed] (0,-1.7) -- (0,1.7);\n  \\draw[->,thick] (0,0) -- (1.7,0) node[right] {$Q$};\n  \\draw[->,thick] (0,0) -- (-0.55,1.55) node[above] {$P$};\n  \\draw[->,thick] (0,0) -- (-1.55,-0.85) node[left] {given force};\n  \\node at (0.45,0.25) {angles as in source};\n\\end{tikzpicture}"
  },
  "AS2StaticsQ006TikZ-001": {
    "id": "AS2StaticsQ006TikZ-001",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2StaticsQ006",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\fill (0,0) circle (2pt);\n  \\draw[dashed] (-2,0) -- (2,0);\n  \\draw[dashed] (0,-1.7) -- (0,1.7);\n  \\draw[->,thick] (0,0) -- (1.7,0) node[right] {$Q$};\n  \\draw[->,thick] (0,0) -- (-0.55,1.55) node[above] {$P$};\n  \\draw[->,thick] (0,0) -- (-1.55,-0.85) node[left] {given force};\n  \\node at (0.45,0.25) {angles as in source};\n\\end{tikzpicture}"
  },
  "AS2StaticsQ006TikZ-002": {
    "id": "AS2StaticsQ006TikZ-002",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2StaticsQ006",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\fill (0,0) circle (2pt);\n  \\draw[dashed] (-2,0) -- (2,0);\n  \\draw[dashed] (0,-1.7) -- (0,1.7);\n  \\draw[->,thick] (0,0) -- (1.7,0) node[right] {$Q$};\n  \\draw[->,thick] (0,0) -- (-0.55,1.55) node[above] {$P$};\n  \\draw[->,thick] (0,0) -- (-1.55,-0.85) node[left] {given force};\n  \\node at (0.45,0.25) {angles as in source};\n\\end{tikzpicture}"
  },
  "AS2StaticsQ007TikZ-001": {
    "id": "AS2StaticsQ007TikZ-001",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2StaticsQ007",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\fill (0,0) circle (2pt);\n  \\draw[dashed] (-2,0) -- (2,0);\n  \\draw[dashed] (0,-1.7) -- (0,1.7);\n  \\draw[->,thick] (0,0) -- (1.7,0) node[right] {$Q$};\n  \\draw[->,thick] (0,0) -- (-0.55,1.55) node[above] {$P$};\n  \\draw[->,thick] (0,0) -- (-1.55,-0.85) node[left] {given force};\n  \\node at (0.45,0.25) {angles as in source};\n\\end{tikzpicture}"
  },
  "AS2StaticsQ007TikZ-002": {
    "id": "AS2StaticsQ007TikZ-002",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2StaticsQ007",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\fill (0,0) circle (2pt);\n  \\draw[dashed] (-2,0) -- (2,0);\n  \\draw[dashed] (0,-1.7) -- (0,1.7);\n  \\draw[->,thick] (0,0) -- (1.7,0) node[right] {$Q$};\n  \\draw[->,thick] (0,0) -- (-0.55,1.55) node[above] {$P$};\n  \\draw[->,thick] (0,0) -- (-1.55,-0.85) node[left] {given force};\n  \\node at (0.45,0.25) {angles as in source};\n\\end{tikzpicture}"
  },
  "AS2StaticsQ008TikZ-001": {
    "id": "AS2StaticsQ008TikZ-001",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2StaticsQ008",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (5,2.6);\n  \\draw (0.8,0) arc (0:27:0.8);\n  \\node at (1.05,0.22) {$\\theta$};\n  \\draw[thick,rotate around={27:(2.6,1.35)}] (2.2,1.05) rectangle (3.0,1.65);\n  \\node at (2.6,1.35) {block};\n  \\draw[->] (2.6,1.35) -- +(0,-1.2) node[below] {$mg$};\n  \\draw[->] (2.6,1.35) -- +(0.55,0.95) node[right] {$R$};\n  \\draw[->] (2.6,1.35) -- +(1.15,0.60) node[right] {$T/P$};\n  \\draw[->] (2.6,1.35) -- +(-0.95,-0.50) node[left] {$F_r$};\n\\end{tikzpicture}"
  },
  "AS2StaticsQ008TikZ-002": {
    "id": "AS2StaticsQ008TikZ-002",
    "kind": "latex",
    "componentName": "",
    "module": "M3",
    "questionId": "AS2StaticsQ008",
    "sourceContent": "\\begin{tikzpicture}[scale=0.9,>=stealth]\n  \\draw[thick] (0,0) -- (5,2.6);\n  \\draw (0.8,0) arc (0:27:0.8);\n  \\node at (1.05,0.22) {$\\theta$};\n  \\draw[thick,rotate around={27:(2.6,1.35)}] (2.2,1.05) rectangle (3.0,1.65);\n  \\node at (2.6,1.35) {block};\n  \\draw[->] (2.6,1.35) -- +(0,-1.2) node[below] {$mg$};\n  \\draw[->] (2.6,1.35) -- +(0.55,0.95) node[right] {$R$};\n  \\draw[->] (2.6,1.35) -- +(1.15,0.60) node[right] {$T/P$};\n  \\draw[->] (2.6,1.35) -- +(-0.95,-0.50) node[left] {$F_r$};\n\\end{tikzpicture}"
  }
};

export function getPracticeComponent(id: string): React.FC | null {
  const entry = VISUAL_MANIFEST[id];
  if (!entry) return null;
  
  if (entry.kind === 'latex' || entry.kind === 'html') {
    return () => (
      <div className="w-full p-6 bg-zinc-900 rounded-2xl border border-zinc-800 font-mono text-[10px] text-zinc-500 overflow-auto max-h-[300px]">
        <div className="mb-2 text-zinc-600 uppercase tracking-widest font-bold">Source {entry.kind.toUpperCase()} Diagram</div>
        <pre>{entry.sourceContent}</pre>
      </div>
    );
  }

  const moduleRegistry = Registry[entry.module];
  if (!moduleRegistry || !entry.componentName) return null;
  return moduleRegistry[entry.componentName] || null;
}
