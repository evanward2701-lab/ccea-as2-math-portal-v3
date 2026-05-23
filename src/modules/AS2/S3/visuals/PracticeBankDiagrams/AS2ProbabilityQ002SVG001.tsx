import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

export const AS2ProbabilityQ002SVG001: React.FC = () => (
  <DiagramPanel title="AS2ProbabilityQ002SVG-001" analysis={null}>
    <div className="text-zinc-500 w-full flex justify-center py-4">
      <div className="max-w-full max-h-[400px] flex justify-center items-center overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" width="720" height="360" viewBox="0 0 720 360" role="img" aria-labelledby="title desc">
  <title id="title">Venn diagram for events A and B</title>
  <desc id="desc">A rectangle contains two overlapping circles labelled A and B. The A-only region is w, the intersection is x, the B-only region is y, and the outside region is z.</desc>
  <rect x="70" y="45" width="580" height="250" fill="transparent" stroke="currentColor" stroke-width="2"/>
  <circle cx="290" cy="170" r="105" fill="none" stroke="currentColor" stroke-width="2"/>
  <circle cx="430" cy="170" r="105" fill="none" stroke="currentColor" stroke-width="2"/>
  <text x="235" y="78" font-family="Inter, sans-serif" font-size="12" font-style="italic">A</text>
  <text x="485" y="78" font-family="Inter, sans-serif" font-size="12" font-style="italic">B</text>
  <text x="240" y="178" font-family="Inter, sans-serif" font-size="12" font-style="italic">w</text>
  <text x="356" y="178" font-family="Inter, sans-serif" font-size="12" font-style="italic">x</text>
  <text x="486" y="178" font-family="Inter, sans-serif" font-size="12" font-style="italic">y</text>
  <text x="590" y="230" font-family="Inter, sans-serif" font-size="12" font-style="italic">z</text>
  <text x="330" y="335" font-family="Inter, sans-serif" font-size="12" font-weight="bold">Fig. 1</text>
</svg>
      </div>
    </div>
  </DiagramPanel>
);
