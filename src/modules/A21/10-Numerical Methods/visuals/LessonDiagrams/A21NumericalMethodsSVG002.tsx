import React from 'react';

export const A21NumericalMethodsSVG002: React.FC = () => {
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
        <line x1="50" y1="200" x2="550" y2="200" className="axis" markerEnd="url(#arrow)" />
        <line x1="400" y1="350" x2="400" y2="50" className="axis" markerEnd="url(#arrow)" />
        
        {/* Axis Labels */}
        <text x="560" y="205" className="label">x</text>
        <text x="385" y="40" className="label">y</text>
        
        {/* Line y = x */}
        <line x1="150" y1="450" x2="500" y2="100" className="line-y-x" />
        <text x="480" y="110" className="line-label" transform="rotate(-45 480,110)">y = x</text>

        {/* Curve y = 1/(x-1) (decreasing section in negative quadrant approx) */}
        <path d="M 50 210 Q 200 220 300 250 T 380 380" className="curve" />
        <text x="420" y="350" className="curve-label">y = 1/(x-1)</text>

        {/* Cobweb Steps */}
        {/* Start x0 = (200, 200) */}
        {/* Down to curve (200, 218) */}
        {/* Right to line (382, 218) */}
        {/* Down to curve (382, 285) */}
        {/* Left to line (315, 285) */}
        {/* Up to curve (315, 255) */}
        <g className="step">
          <line x1="150" y1="200" x2="150" y2="218" /> {/* x0 to curve */}
          <line x1="150" y1="218" x2="382" y2="218" /> {/* curve to line */}
          <line x1="382" y1="218" x2="382" y2="285" /> {/* line to curve */}
          <line x1="382" y1="285" x2="315" y2="285" /> {/* curve to line */}
          <line x1="315" y1="285" x2="315" y2="255" /> {/* line to curve */}
          <line x1="315" y1="255" x2="345" y2="255" /> {/* curve to line */}
          <line x1="345" y1="255" x2="345" y2="268" /> {/* line to curve */}
        </g>

        {/* Root Point */}
        <circle cx="338" cy="262" r="4" className="root-point" />
        <text x="325" y="245" className="math">α</text>

        {/* Step Labels */}
        <text x="142" y="190" className="math">x<tspan dy="5" fontSize="10">0</tspan></text>
        <text x="375" y="190" className="math">x<tspan dy="5" fontSize="10">1</tspan></text>
        <text x="305" y="190" className="math">x<tspan dy="5" fontSize="10">2</tspan></text>
      </svg>
    </div>
  );
};
