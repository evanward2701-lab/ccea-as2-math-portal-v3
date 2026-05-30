import React from 'react';

export const A21NumericalMethodsSVG003: React.FC = () => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: '#FAF9F6', padding: '2rem', borderRadius: '12px', overflowX: 'auto' }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="100%" height="100%" style={{ minWidth: '400px', maxWidth: '600px' }}>
        <defs>
          <style>
            {`
              .axis { stroke: #2C2C2E; stroke-width: 2; }
              .curve { stroke: #0984E3; stroke-width: 3; fill: none; }
              .tangent { stroke: #D63031; stroke-width: 2; }
              .projection { stroke: #2C2C2E; stroke-width: 2; stroke-dasharray: 5 5; }
              .label { font-family: 'Inter', system-ui, sans-serif; font-size: 16px; font-style: italic; fill: #2C2C2E; }
              .curve-label { font-family: 'Inter', system-ui, sans-serif; font-size: 16px; font-style: italic; fill: #0984E3; }
              .root-point { fill: #2C2C2E; }
            `}
          </style>
          <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#2C2C2E" />
          </marker>
        </defs>

        {/* Axes */}
        <line x1="50" y1="300" x2="550" y2="300" className="axis" markerEnd="url(#arrow)" />
        <line x1="100" y1="350" x2="100" y2="50" className="axis" markerEnd="url(#arrow)" />
        
        <text x="565" y="305" className="label">x</text>
        <text x="80" y="50" className="label">y</text>

        {/* Curve y = f(x) */}
        <path d="M 50 350 Q 250 300 350 150 T 400 50" className="curve" />
        <text x="340" y="120" className="curve-label" transform="rotate(-65 340,120)">y = f(x)</text>

        {/* Newton-Raphson Iteration */}
        {/* x0 = 400 */}
        <line x1="400" y1="300" x2="400" y2="50" className="projection" /> {/* x0 to curve */}
        
        {/* Tangent Line from (400,50) to (320, 300) */}
        <line x1="420" y1="-12.5" x2="300" y2="362.5" className="tangent" />

        {/* x1 = 320 */}
        <line x1="320" y1="300" x2="320" y2="215" className="projection" /> {/* x1 to curve */}
        
        {/* Second Tangent Line from (320,215) */}
        <line x1="350" y1="110" x2="280" y2="355" className="tangent" />

        {/* Root alpha point */}
        <circle cx="250" cy="300" r="4" className="root-point" />

        {/* Labels */}
        <text x="390" y="325" className="label">x<tspan dy="5" fontSize="12">0</tspan></text>
        <text x="310" y="325" className="label">x<tspan dy="5" fontSize="12">1</tspan></text>
        <text x="285" y="325" className="label">x<tspan dy="5" fontSize="12">2</tspan></text>
        <text x="240" y="290" className="label" fontStyle="normal">α</text>
      </svg>
    </div>
  );
};
