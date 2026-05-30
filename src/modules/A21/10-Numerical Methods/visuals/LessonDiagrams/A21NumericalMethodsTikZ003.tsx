import React from 'react';

export const A21NumericalMethodsTikZ003: React.FC = () => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: '#FAF9F6', padding: '2rem', borderRadius: '12px', overflowX: 'auto' }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 400" width="100%" height="100%" style={{ minWidth: '400px', maxWidth: '500px' }}>
        <defs>
          <style>
            {`
              .axis { stroke: #E5E5EA; stroke-width: 2; }
              .curve { stroke: #0984E3; stroke-width: 3; fill: none; stroke-linecap: round; }
              .tangent { stroke: #D63031; stroke-width: 3; }
              .dash-line { stroke: #2C2C2E; stroke-width: 1.5; stroke-dasharray: 6 6; }
              .label { font-family: 'Inter', system-ui, sans-serif; font-size: 14px; font-weight: 600; fill: #2C2C2E; }
              .tangent-label { font-family: 'Inter', system-ui, sans-serif; font-size: 14px; font-weight: 600; fill: #D63031; }
            `}
          </style>
          <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#E5E5EA" />
          </marker>
        </defs>

        {/* Axes */}
        <line x1="20" y1="350" x2="480" y2="350" className="axis" markerEnd="url(#arrow)" />
        <line x1="250" y1="380" x2="250" y2="20" className="axis" markerEnd="url(#arrow)" />

        {/* Parabola: y = (x-1)^2 + 0.5 */}
        {/* Minimum at (350, 250) (offset to right) */}
        <path d="M 150 50 Q 350 450 550 50" className="curve" />

        {/* Horizontal Tangent */}
        <line x1="150" y1="250" x2="550" y2="250" className="tangent" />
        <text x="500" y="240" className="tangent-label" textAnchor="end">Horizontal Tangent</text>
        <text x="250" y="100" className="tangent-label" textAnchor="middle">f'(x₀) = 0</text>
        <text x="250" y="120" className="tangent-label" textAnchor="middle">Newton-Raphson fails (Divide by zero)</text>

        {/* x0 Line */}
        <line x1="350" y1="250" x2="350" y2="350" className="dash-line" />
        <text x="350" y="370" className="label" textAnchor="middle">x₀</text>

        <circle cx="350" cy="250" r="5" fill="#2C2C2E" />

      </svg>
    </div>
  );
};
