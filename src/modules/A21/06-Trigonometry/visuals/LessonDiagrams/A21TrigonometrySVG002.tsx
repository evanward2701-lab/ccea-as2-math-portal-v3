import React from 'react';

export const A21TrigonometrySVG002: React.FC = () => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: '#FAF9F6', padding: '2rem', borderRadius: '12px', overflowX: 'auto' }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="100%" height="100%" style={{ minWidth: '500px' }}>
        <defs>
          <style>
            {`
              .axis { stroke: #2C2C2E; stroke-width: 2; }
              .grid { stroke: #E5E5EA; stroke-width: 1; stroke-dasharray: 4,4; }
              .cos-curve { stroke: #666666; stroke-width: 2; stroke-dasharray: 5,5; fill: none; }
              .sec-curve { stroke: #C5A059; stroke-width: 3; fill: none; stroke-linecap: round; }
              .asymptote { stroke: #A08C8C; stroke-width: 2; stroke-dasharray: 6,4; }
              .label { font-family: 'Inter', system-ui, sans-serif; font-size: 14px; fill: #2C2C2E; }
              .math { font-family: 'Inter', system-ui, sans-serif; font-style: italic; font-size: 16px; fill: #2C2C2E; }
            `}
          </style>
          <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#2C2C2E" />
          </marker>
        </defs>

        {/* Grid lines */}
        <line x1="50" y1="100" x2="550" y2="100" className="grid" />
        <line x1="50" y1="300" x2="550" y2="300" className="grid" />

        {/* Asymptotes at x=pi/2, 3pi/2 (250, 450) */}
        <line x1="250" y1="20" x2="250" y2="380" className="asymptote" />
        <line x1="450" y1="20" x2="450" y2="380" className="asymptote" />

        {/* Axes */}
        <line x1="50" y1="200" x2="570" y2="200" className="axis" markerEnd="url(#arrow)" />
        <line x1="150" y1="380" x2="150" y2="20" className="axis" markerEnd="url(#arrow)" />

        {/* Labels */}
        <text x="575" y="215" className="math">x</text>
        <text x="130" y="30" className="math">y</text>
        <text x="130" y="105" className="label">1</text>
        <text x="120" y="305" className="label">-1</text>
        
        <text x="240" y="220" className="math">π/2</text>
        <text x="345" y="220" className="math">π</text>
        <text x="435" y="220" className="math">3π/2</text>
        <text x="540" y="220" className="math">2π</text>

        {/* y = cos x curve */}
        <path d="M 150 100 Q 200 100, 250 200 T 350 300 Q 400 300, 450 200 T 550 100" className="cos-curve" />

        {/* y = sec x curve */}
        {/* Between 0 and pi/2 */}
        <path d="M 150 100 Q 200 90, 235 20" className="sec-curve" />
        {/* Between pi/2 and 3pi/2 */}
        <path d="M 265 380 Q 300 310, 350 300 Q 400 310, 435 380" className="sec-curve" />
        {/* Between 3pi/2 and 2pi */}
        <path d="M 465 20 Q 500 90, 550 100" className="sec-curve" />

        {/* Function Labels */}
        <text x="355" y="180" className="math" fill="#666666" style={{ fontWeight: 600 }}>y = cos x</text>
        <text x="355" y="370" className="math" fill="#C5A059" style={{ fontWeight: 600 }}>y = sec x</text>
      </svg>
    </div>
  );
};
