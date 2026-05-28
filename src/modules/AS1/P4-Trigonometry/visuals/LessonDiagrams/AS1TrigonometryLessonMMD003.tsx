import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { MermaidDiagram } from '@/core/diagram-engine/MermaidDiagram';

const chart = "graph LR\n    RightTrig[Right‑angled trig \\n(SOH CAH TOA)] --> UnitCircle[Unit circle & CAST]\n    RightTrig --> ExactVals[Exact values \\n& special triangles]\n    UnitCircle --> Graphs[Graphs of \\(\\sin\\), \\(\\cos\\), \\(\\tan\\)]\n    Graphs --> Identities[Pythagorean & simple identities]\n    Identities --> Equations[Solving trig equations]\n    Equations --> MultiStep[Multi‑step problems]\n    SineRule[Sine rule & \\nambiguous case] --> MultiStep\n    CosineRule[Cosine rule] --> MultiStep\n    AreaFormula[Area formula \\(\\tfrac{1}{2}ab\\sin C\\)] --> MultiStep\n    ExactVals --> Graphs\n    UnitCircle --> Identities";

export const AS1TrigonometryLessonMMD003: React.FC = () => (
  <DiagramPanel title={"Concept map of trigonometry topics"} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto py-4">
      <MermaidDiagram chart={chart} />
    </div>
  </DiagramPanel>
);
