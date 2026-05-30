import React from 'react';

export const A21NumericalMethodsSVG001: React.FC = () => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: '#FAF9F6', padding: '2rem', borderRadius: '12px', overflowX: 'auto' }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="100%" height="100%" style={{ minWidth: '400px', maxWidth: '600px' }}>
        <defs>
          <style>
            {`
              .axis { stroke: #2C2C2E; stroke-width: 2; }
              .grid { stroke: #E5E5EA; stroke-width: 1; }
              .curve { stroke: #0984E3; stroke-width: 2; fill: none; }
              .line-y-x { stroke: #D63031; stroke-width: 2; }
              .step { stroke: #2C2C2E; stroke-width: 2; stroke-dasharray: 4 4; fill: none; }
              .label { font-family: 'Inter', system-ui, sans-serif; font-size: 16px; fill: #2C2C2E; }
              .math { font-family: 'Inter', system-ui, sans-serif; font-size: 16px; font-style: italic; fill: #2C2C2E; }
              .curve-label { font-family: 'Inter', system-ui, sans-serif; font-size: 16px; fill: #0984E3; }
              .line-label { font-family: 'Inter', system-ui, sans-serif; font-size: 16px; fill: #D63031; }
              .root-point { fill: #2C2C2E; }
            `}
          </style>
          <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#2C2C2E" />
          </marker>
        </defs>

        {/* Grid */}
        <g className="grid">
          <line x1="100" y1="0" x2="100" y2="400" />
          <line x1="200" y1="0" x2="200" y2="400" />
          <line x1="300" y1="0" x2="300" y2="400" />
          <line x1="400" y1="0" x2="400" y2="400" />
          <line x1="500" y1="0" x2="500" y2="400" />
          <line x1="0" y1="100" x2="600" y2="100" />
          <line x1="0" y1="200" x2="600" y2="200" />
          <line x1="0" y1="300" x2="600" y2="300" />
        </g>

        {/* Axes */}
        <line x1="50" y1="300" x2="550" y2="300" className="axis" markerEnd="url(#arrow)" />
        <line x1="100" y1="350" x2="100" y2="50" className="axis" markerEnd="url(#arrow)" />
        
        {/* Axis Labels */}
        <text x="560" y="305" className="label">x</text>
        <text x="80" y="40" className="label">y</text>
        
        {/* Line y = x */}
        <line x1="50" y1="350" x2="350" y2="50" className="line-y-x" />
        <text x="320" y="70" className="line-label" transform="rotate(-45 320,70)">y = x</text>

        {/* Curve y = sqrt(x+1) */}
        {/* Approx points: (0, 1)->(100,200), (1, 1.41)->(200,159), (3, 2)->(400,100) */}
        <path d="M 100 200 Q 250 140 400 100 T 550 65" className="curve" />
        <text x="420" y="90" className="curve-label">y = √(x+1)</text>

        {/* Staircase Steps */}
        <g className="step">
          {/* x0 = 1 (200, 300) */}
          <line x1="200" y1="300" x2="200" y2="159" /> {/* Up to curve */}
          <line x1="200" y1="159" x2="241" y2="159" /> {/* Right to line */}
          <line x1="241" y1="159" x2="241" y2="300" /> {/* Down to x1 */}
          
          <line x1="241" y1="159" x2="241" y2="145" /> {/* Up to curve */}
          <line x1="241" y1="145" x2="255" y2="145" /> {/* Right to line */}
          <line x1="255" y1="145" x2="255" y2="300" /> {/* Down to x2 */}
        </g>

        {/* Root Point */}
        <circle cx="262" cy="138" r="4" className="root-point" />
        <text x="270" y="130" className="math">α</text>

        {/* Step Labels */}
        <text x="190" y="320" className="math">x<tspan dy="5" fontSize="10">0</tspan></text>
        <text x="233" y="320" className="math">x<tspan dy="5" fontSize="10">1</tspan></text>
        <text x="255" y="335" className="math">x<tspan dy="5" fontSize="10">2</tspan></text>
      </svg>
    </div>
  );
};
