import React from 'react';

export const A21NumericalMethodsTikZ001: React.FC = () => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: '#FAF9F6', padding: '2rem', borderRadius: '12px', overflowX: 'auto' }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%" style={{ minWidth: '400px', maxWidth: '500px' }}>
        <defs>
          <style>
            {`
              .axis { stroke: #E5E5EA; stroke-width: 2; }
              .curve { stroke: #0984E3; stroke-width: 3; fill: none; stroke-linecap: round; }
              .asymptote { stroke: #2C2C2E; stroke-width: 1.5; stroke-dasharray: 6 6; }
              .point { fill: #2C2C2E; }
              .label { font-family: 'Inter', system-ui, sans-serif; font-size: 14px; font-weight: 600; fill: #2C2C2E; }
            `}
          </style>
          <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#E5E5EA" />
          </marker>
        </defs>

        {/* Axes */}
        <line x1="20" y1="250" x2="480" y2="250" className="axis" markerEnd="url(#arrow)" />
        <line x1="250" y1="480" x2="250" y2="20" className="axis" markerEnd="url(#arrow)" />
        
        {/* Asymptote */}
        <line x1="250" y1="20" x2="250" y2="480" className="asymptote" />

        {/* Curve y = 1/x */}
        {/* Positive side */}
        <path d="M 270 20 Q 280 200 480 230" className="curve" />
        {/* Negative side */}
        <path d="M 230 480 Q 220 300 20 270" className="curve" />

        {/* Points at x=1 and x=-1 */}
        {/* (Assuming scale: 1 unit = 100px. x=1 is 350, y=1 is 150) */}
        <circle cx="350" cy="150" r="5" className="point" />
        <text x="360" y="145" className="label">(1, 1)</text>

        <circle cx="150" cy="350" r="5" className="point" />
        <text x="140" y="365" className="label" textAnchor="end">(-1, -1)</text>
      </svg>
    </div>
  );
};
