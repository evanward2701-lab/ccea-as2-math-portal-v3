import React from 'react';
import { MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { DiagramLabel } from '@/core/diagram-engine/DiagramLabel';

export const BayesResolutionSVG: React.FC = () => (
  <DiagramPanel
    title="Fig 4. Conditional Partition Asset"
    analysis={
      <div className="space-y-4">
        <p className="text-sm text-zinc-400 italic">
          The sample space is divided into mutually exclusive partitions (<MathText content="A_1, A_2, A_3" className="inline"/>).
        </p>
        <div className="p-4 bg-[#141416] rounded-lg border border-zinc-800">
          <span className="text-zinc-400 font-bold uppercase tracking-wider block mb-2 text-[10px]">Total Probability Law:</span>
          <div className="font-mono text-zinc-300 text-sm">
            <MathText content="P(B) = P(A_1 \cap B) + P(A_2 \cap B) + P(A_3 \cap B)" />
          </div>
        </div>
        <p className="text-sm text-zinc-400 italic">
          To isolate a conditional reverse path (Bayes' Theorem), compute the path ratio:
        </p>
        <div className="p-4 bg-[#141416] rounded-lg border border-emerald-900">
          <div className="font-mono text-emerald-400 text-base">
            <MathText content="P(A_1 | B) = \frac{P(A_1 \cap B)}{P(B)}" />
          </div>
        </div>
      </div>
    }
  >
    <div className="relative w-full aspect-54/16 max-w-2xl mx-auto">
      <svg viewBox="30 20 540 160" className="absolute inset-0 w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" overflow="visible">
        {/* Sample Universe Block */}
        <rect x="40" y="30" width="520" height="120" stroke="#475569" strokeWidth="2" fill="#141417" rx="4"/>
        
        {/* Partitions */}
        <line x1="220" y1="30" x2="220" y2="150" stroke="#3f3f46" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="400" y1="30" x2="400" y2="150" stroke="#3f3f46" strokeWidth="1" strokeDasharray="4 4" />
        
        {/* Overlapping Target Event B */}
        <ellipse cx="300" cy="90" rx="180" ry="50" stroke="#f59e0b" strokeWidth="2" fill="#f59e0b" fillOpacity="0.08" />
      </svg>

      <DiagramLabel x="50%" y="50%" text="B" />

      <DiagramLabel x="24.1%" y="56.3%" text="A_1 \cap B" />
      <DiagramLabel x="55.6%" y="65.6%" text="A_2 \cap B" />
      <DiagramLabel x="88.9%" y="56.3%" text="A_3 \cap B" />
    </div>
  </DiagramPanel>
);
