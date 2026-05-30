import React from 'react';

export const A21DifferentiationSVG004: React.FC = () => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: '#FAF9F6', padding: '2rem', borderRadius: '12px', overflowX: 'auto' }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 300" width="100%" height="100%" style={{ minWidth: '400px', maxWidth: '500px' }}>
        <defs>
          <style>
            {`
              .axis { stroke: #E5E5EA; stroke-width: 2; }
              .curve { stroke: #2C2C2E; stroke-width: 4; fill: none; stroke-linecap: round; }
              .poi { fill: #D63031; }
              .label-poi { font-family: 'Inter', system-ui, sans-serif; font-size: 14px; font-weight: 600; fill: #D63031; }
              .label-math-poi { font-family: 'Inter', system-ui, sans-serif; font-size: 14px; font-style: italic; fill: #D63031; }
              .label-concave { font-family: 'Inter', system-ui, sans-serif; font-size: 16px; font-weight: 600; fill: #0984E3; }
              .label-math-concave { font-family: 'Inter', system-ui, sans-serif; font-size: 14px; font-style: italic; fill: #0984E3; }
              .label-convex { font-family: 'Inter', system-ui, sans-serif; font-size: 16px; font-weight: 600; fill: #00B894; }
              .label-math-convex { font-family: 'Inter', system-ui, sans-serif; font-size: 14px; font-style: italic; fill: #00B894; }
            `}
          </style>
          <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#E5E5EA" />
          </marker>
        </defs>

        {/* Axes */}
        <line x1="40" y1="260" x2="460" y2="260" className="axis" markerEnd="url(#arrow)" />
        <line x1="60" y1="280" x2="60" y2="40" className="axis" markerEnd="url(#arrow)" />
        
        {/* Curve: Bezier curve modeling a cubic */}
        <path d="M 80 200 C 150 20, 250 50, 250 150 C 250 250, 350 280, 420 100" className="curve" />

        {/* Point of Inflection */}
        <circle cx="250" cy="150" r="6" className="poi" />
        <text x="250" y="130" textAnchor="middle" className="label-poi">Point of Inflection</text>
        <text x="250" y="175" textAnchor="middle" className="label-math-poi">f''(x) = 0</text>

        {/* Concave Label */}
        <text x="140" y="80" textAnchor="middle" className="label-concave">Concave</text>
        <text x="140" y="100" textAnchor="middle" className="label-math-concave">f''(x) &lt; 0</text>

        {/* Convex Label */}
        <text x="360" y="220" textAnchor="middle" className="label-convex">Convex</text>
        <text x="360" y="240" textAnchor="middle" className="label-math-convex">f''(x) &gt; 0</text>
      </svg>
    </div>
  );
};
