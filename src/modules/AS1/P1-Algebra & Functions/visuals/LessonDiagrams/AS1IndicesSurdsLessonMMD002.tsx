import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { MermaidDiagram } from '@/core/diagram-engine/MermaidDiagram';

const chart = "graph LR\n    A([Index & Surd Laws])\n    A --> B[Index laws]\n    A --> C[Surd rules]\n    %% Index law branches\n    B --> B1[Multiplication: $a^m \\times a^n = a^{m+n}$]\n    B --> B2[Division: $a^m \\div a^n = a^{m-n}$]\n    B --> B3[Power of a power: $(a^m)^n = a^{mn}$]\n    B --> B4[Product to a power: $(ab)^n = a^n b^n$]\n    B --> B5[Quotient to a power: $(\\tfrac{a}{b})^n = \\tfrac{a^n}{b^n}$]\n    B --> B6[Zero index: $a^0 = 1$]\n    B --> B7[Negative index: $a^{-n} = \\tfrac{1}{a^n}$]\n    B --> B8[Fractional index: $a^{m/n} = (\\sqrt[n]{a})^m$]\n    %% Surd rules branches\n    C --> C1[Product: $\\sqrt{a}\\,\\sqrt{b} = \\sqrt{ab}$]\n    C --> C2[Quotient: $\\tfrac{\\sqrt{a}}{\\sqrt{b}} = \\sqrt{\\tfrac{a}{b}}$]\n    C --> C3[Simplification: $\\sqrt{k^2 m} = k \\sqrt{m}$]\n    C --> C4[Rationalise denominator]\n    C4 --> C4a[Simple: multiply top & bottom by $\\sqrt{a}$]\n    C4 --> C4b[Binomial: multiply by the conjugate $a \\mp \\sqrt{b}$]";

export const AS1IndicesSurdsLessonMMD002: React.FC = () => (
  <DiagramPanel title={"Index and Surd Laws Concept Map"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto py-4">
      <MermaidDiagram chart={chart} />
    </div>
  </DiagramPanel>
);
