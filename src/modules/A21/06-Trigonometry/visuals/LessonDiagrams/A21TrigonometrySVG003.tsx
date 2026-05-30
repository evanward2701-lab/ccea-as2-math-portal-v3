import React from 'react';

export const A21TrigonometrySVG003: React.FC = () => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: '#FAF9F6', padding: '2rem', borderRadius: '12px', overflowX: 'auto' }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="100%" height="100%" style={{ minWidth: '500px' }}>
        <defs>
          <style>
            {`
              .axis { stroke: #2C2C2E; stroke-width: 2; }
              .grid { stroke: #E5E5EA; stroke-width: 1; stroke-dasharray: 4,4; }
              .tan-curve { stroke: #666666; stroke-width: 2; stroke-dasharray: 5,5; fill: none; }
              .cot-curve { stroke: #C5A059; stroke-width: 3; fill: none; stroke-linecap: round; }
              .asymptote-tan { stroke: #666666; stroke-width: 1; stroke-dasharray: 4,4; opacity: 0.5; }
              .asymptote-cot { stroke: #A08C8C; stroke-width: 2; stroke-dasharray: 6,4; }
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

        {/* Asymptotes for cot x at x=0, pi, 2pi (150, 350, 550) */}
        <line x1="150" y1="20" x2="150" y2="380" className="asymptote-cot" />
        <line x1="350" y1="20" x2="350" y2="380" className="asymptote-cot" />
        <line x1="550" y1="20" x2="550" y2="380" className="asymptote-cot" />

        {/* Asymptotes for tan x at x=pi/2, 3pi/2 (250, 450) */}
        <line x1="250" y1="20" x2="250" y2="380" className="asymptote-tan" />
        <line x1="450" y1="20" x2="450" y2="380" className="asymptote-tan" />

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

        {/* y = tan x curve */}
        <path d="M 150 200 Q 200 200, 240 20" className="tan-curve" />
        <path d="M 260 380 Q 300 200, 350 200 Q 400 200, 440 20" className="tan-curve" />
        <path d="M 460 380 Q 500 200, 550 200" className="tan-curve" />

        {/* y = cot x curve */}
        <path d="M 160 20 Q 200 200, 250 200 Q 300 200, 340 380" className="cot-curve" />
        <path d="M 360 20 Q 400 200, 450 200 Q 500 200, 540 380" className="cot-curve" />

        {/* Function Labels */}
        <text x="265" y="100" className="math" fill="#666666" style={{ fontWeight: 600 }}>y = tan x</text>
        <text x="265" y="310" className="math" fill="#C5A059" style={{ fontWeight: 600 }}>y = cot x</text>
      </svg>
    </div>
  );
};
