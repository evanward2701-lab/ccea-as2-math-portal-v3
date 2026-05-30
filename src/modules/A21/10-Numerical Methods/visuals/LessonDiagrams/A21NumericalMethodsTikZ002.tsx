import React from 'react';

export const A21NumericalMethodsTikZ002: React.FC = () => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: '#FAF9F6', padding: '2rem', borderRadius: '12px', overflowX: 'auto' }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 300" width="100%" height="100%" style={{ minWidth: '400px', maxWidth: '500px' }}>
        <defs>
          <style>
            {`
              .axis { stroke: #E5E5EA; stroke-width: 2; }
              .curve { stroke: #0984E3; stroke-width: 3; fill: none; stroke-linecap: round; }
              .dash-line { stroke: #2C2C2E; stroke-width: 1.5; stroke-dasharray: 6 6; }
              .root-point { fill: #D63031; }
              .eval-point { fill: #2C2C2E; }
              .label { font-family: 'Inter', system-ui, sans-serif; font-size: 14px; font-weight: 600; fill: #2C2C2E; }
              .root-label { font-family: 'Inter', system-ui, sans-serif; font-size: 14px; font-weight: 600; fill: #D63031; }
            `}
          </style>
          <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#E5E5EA" />
          </marker>
        </defs>

        {/* Axes */}
        <line x1="20" y1="150" x2="480" y2="150" className="axis" markerEnd="url(#arrow)" />
        <line x1="50" y1="280" x2="50" y2="20" className="axis" markerEnd="url(#arrow)" />

        {/* Parabola y = -(x-2.5)^2 + 1 */}
        {/* Peak at x=250, y=50 */}
        <path d="M 50 250 Q 250 -150 450 250" className="curve" />

        {/* Roots */}
        <circle cx="150" cy="150" r="5" className="root-point" />
        <text x="140" y="140" className="root-label" textAnchor="end">Root</text>
        
        <circle cx="350" cy="150" r="5" className="root-point" />
        <text x="360" y="140" className="root-label">Root</text>

        {/* Evaluated Bounds (Both Negative) */}
        <circle cx="100" cy="200" r="5" className="eval-point" />
        <line x1="100" y1="200" x2="100" y2="150" className="dash-line" />
        
        <circle cx="400" cy="200" r="5" className="eval-point" />
        <line x1="400" y1="200" x2="400" y2="150" className="dash-line" />
        
        <text x="250" y="270" className="label" textAnchor="middle">f(a) &lt; 0 and f(b) &lt; 0, but 2 roots exist.</text>
      </svg>
    </div>
  );
};
