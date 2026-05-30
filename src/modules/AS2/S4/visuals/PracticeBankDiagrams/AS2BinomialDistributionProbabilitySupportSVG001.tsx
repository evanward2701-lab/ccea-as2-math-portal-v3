import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

export const AS2BinomialDistributionProbabilitySupportSVG001: React.FC = () => (
  <DiagramPanel title="AS2BinomialDistributionProbabilitySupportSVG-001" analysis={null}>
    <div className="text-muted-foreground w-full flex justify-center py-4">
      <div className="max-w-full max-h-[400px] flex justify-center items-center overflow-hidden">
        <svg width="920" height="430" viewBox="0 0 920 430" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="title desc">
  <title id="title">Binomial Tail Language Guide</title>
  <desc id="desc">A number-line style guide showing exactly r, at most r, fewer than r, at least r and more than r.</desc>
  <rect x="0" y="0" width="920" height="430" fill="transparent"/>
  <text x="460" y="38" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="700">Binomial probability wording</text>
  <text x="460" y="68" text-anchor="middle" font-family="Arial, sans-serif" font-size="12">For a binomial random variable X, the values are whole numbers.</text>

  <line x1="90" y1="130" x2="830" y2="130" stroke="currentColor" stroke-width="2"/>
  <text x="90" y="108" text-anchor="middle" font-family="Arial, sans-serif" font-size="12">0</text>
  <text x="220" y="108" text-anchor="middle" font-family="Arial, sans-serif" font-size="12">1</text>
  <text x="350" y="108" text-anchor="middle" font-family="Arial, sans-serif" font-size="12">2</text>
  <text x="480" y="108" text-anchor="middle" font-family="Arial, sans-serif" font-size="12">r</text>
  <text x="610" y="108" text-anchor="middle" font-family="Arial, sans-serif" font-size="12">r + 1</text>
  <text x="740" y="108" text-anchor="middle" font-family="Arial, sans-serif" font-size="12">...</text>
  <text x="830" y="108" text-anchor="middle" font-family="Arial, sans-serif" font-size="12">n</text>

  <g fill="transparent" stroke="currentColor" stroke-width="2">
    <circle cx="90" cy="130" r="8"/><circle cx="220" cy="130" r="8"/><circle cx="350" cy="130" r="8"/>
    <circle cx="480" cy="130" r="8"/><circle cx="610" cy="130" r="8"/><circle cx="740" cy="130" r="8"/><circle cx="830" cy="130" r="8"/>
  </g>

  <g font-family="Arial, sans-serif" font-size="12">
    <text x="70" y="190" font-weight="700">Exactly r</text>
    <line x1="480" y1="178" x2="480" y2="142" stroke="currentColor" stroke-width="1.5"/>
    <text x="560" y="190">Use: P(X = r)</text>

    <text x="70" y="240" font-weight="700">At most r</text>
    <line x1="90" y1="228" x2="480" y2="228" stroke="currentColor" stroke-width="6"/>
    <text x="560" y="240">Use: P(X ≤ r) = P(0) + ... + P(r)</text>

    <text x="70" y="290" font-weight="700">Fewer than r</text>
    <line x1="90" y1="278" x2="350" y2="278" stroke="currentColor" stroke-width="6"/>
    <text x="560" y="290">Use: P(X &lt; r) = P(0) + ... + P(r − 1)</text>

    <text x="70" y="340" font-weight="700">At least r</text>
    <line x1="480" y1="328" x2="830" y2="328" stroke="currentColor" stroke-width="6"/>
    <text x="560" y="340">Use: P(X ≥ r), often by complement</text>

    <text x="70" y="390" font-weight="700">More than r</text>
    <line x1="610" y1="378" x2="830" y2="378" stroke="currentColor" stroke-width="6"/>
    <text x="560" y="390">Use: P(X &gt; r) = 1 − P(X ≤ r)</text>
  </g>
</svg>
      </div>
    </div>
  </DiagramPanel>
);
