import React from 'react';

export const A21SequencesAndSeriesTikZ001: React.FC = () => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: '#FAF9F6', padding: '2rem', borderRadius: '12px', overflowX: 'auto' }}>
      <svg viewBox="0 0 800 240" width="100%" height="100%" style={{ minWidth: '600px' }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <style>
            {`
              .text-math { font-family: 'Times New Roman', serif; font-size: 18px; font-style: italic; fill: #2C2C2E; }
              .text-math-bold { font-family: 'Times New Roman', serif; font-size: 18px; font-weight: bold; fill: #2C2C2E; }
              .text-label { font-family: 'Inter', system-ui, sans-serif; font-size: 14px; fill: #666; }
              .line-add { stroke: #E5E5EA; stroke-width: 2; }
              .arrow-pair { stroke: #C5A059; stroke-width: 2; fill: none; }
              .bracket { stroke: #2C2C2E; stroke-width: 2; fill: none; }
            `}
          </style>
          <marker id="arrowhead-gold" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L9,3 z" fill="#C5A059" />
          </marker>
        </defs>

        <g transform="translate(40, 40)">
          {/* Row 1: Forward Series */}
          <text x="0" y="0" className="text-math">S<tspan dy="5" fontSize="12">n</tspan></text>
          <text x="30" y="0" className="text-math">=</text>
          <text x="80" y="0" className="text-math" textAnchor="middle">a</text>
          <text x="140" y="0" className="text-math">+</text>
          <text x="210" y="0" className="text-math" textAnchor="middle">a + d</text>
          <text x="280" y="0" className="text-math">+</text>
          <text x="350" y="0" className="text-math" textAnchor="middle">...</text>
          <text x="420" y="0" className="text-math">+</text>
          <text x="520" y="0" className="text-math" textAnchor="middle">a + (n-2)d</text>
          <text x="620" y="0" className="text-math">+</text>
          <text x="700" y="0" className="text-math" textAnchor="middle">a + (n-1)d</text>

          {/* Row 2: Backward Series */}
          <text x="0" y="40" className="text-math">S<tspan dy="5" fontSize="12">n</tspan></text>
          <text x="30" y="40" className="text-math">=</text>
          <text x="80" y="40" className="text-math" textAnchor="middle">a + (n-1)d</text>
          <text x="140" y="40" className="text-math">+</text>
          <text x="210" y="40" className="text-math" textAnchor="middle">a + (n-2)d</text>
          <text x="280" y="40" className="text-math">+</text>
          <text x="350" y="40" className="text-math" textAnchor="middle">...</text>
          <text x="420" y="40" className="text-math">+</text>
          <text x="520" y="40" className="text-math" textAnchor="middle">a + d</text>
          <text x="620" y="40" className="text-math">+</text>
          <text x="700" y="40" className="text-math" textAnchor="middle">a</text>

          {/* Addition Line */}
          <text x="-20" y="65" className="text-math">+</text>
          <line x1="-10" y1="70" x2="760" y2="70" className="line-add" />

          {/* Row 3: Summed Series */}
          <text x="0" y="100" className="text-math">2S<tspan dy="5" fontSize="12">n</tspan></text>
          <text x="30" y="100" className="text-math">=</text>
          <text x="80" y="100" className="text-math-bold" textAnchor="middle">[2a + (n-1)d]</text>
          <text x="140" y="100" className="text-math">+</text>
          <text x="210" y="100" className="text-math-bold" textAnchor="middle">[2a + (n-1)d]</text>
          <text x="280" y="100" className="text-math">+</text>
          <text x="350" y="100" className="text-math" textAnchor="middle">...</text>
          <text x="420" y="100" className="text-math">+</text>
          <text x="520" y="100" className="text-math-bold" textAnchor="middle">[2a + (n-1)d]</text>
          <text x="620" y="100" className="text-math">+</text>
          <text x="700" y="100" className="text-math-bold" textAnchor="middle">[2a + (n-1)d]</text>

          {/* Arrows showing pairwise addition (from Row 2 down to Row 3) */}
          <line x1="80" y1="45" x2="80" y2="75" className="arrow-pair" markerEnd="url(#arrowhead-gold)" />
          <line x1="210" y1="45" x2="210" y2="75" className="arrow-pair" markerEnd="url(#arrowhead-gold)" />
          <line x1="520" y1="45" x2="520" y2="75" className="arrow-pair" markerEnd="url(#arrowhead-gold)" />
          <line x1="700" y1="45" x2="700" y2="75" className="arrow-pair" markerEnd="url(#arrowhead-gold)" />

          {/* Brace underneath for n terms */}
          <path d="M 40 120 Q 40 140 390 140 Q 390 160 390 140 Q 740 140 740 120" className="bracket" />
          <text x="390" y="170" className="text-label" textAnchor="middle">n lots of [2a + (n-1)d]</text>
        </g>
      </svg>
    </div>
  );
};
