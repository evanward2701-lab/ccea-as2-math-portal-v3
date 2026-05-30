import React from 'react';

export const A21DifferentiationSVG003: React.FC = () => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: '#FAF9F6', padding: '2rem', borderRadius: '12px', overflowX: 'auto' }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 250" width="100%" height="100%" style={{ minWidth: '300px', maxWidth: '400px' }}>
        <defs>
          <style>
            {`
              .math { font-family: 'Inter', monospace, system-ui; font-size: 24px; font-weight: 700; fill: #2C2C2E; }
              .formula { font-family: 'Inter', system-ui, sans-serif; font-size: 20px; font-weight: 600; fill: #2C2C2E; }
              .loop-path { stroke: #6C5CE7; stroke-width: 4; fill: none; marker-end: url(#arrow-purple); stroke-linecap: round; stroke-linejoin: round; }
            `}
          </style>
          <marker id="arrow-purple" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#6C5CE7" />
          </marker>
        </defs>

        {/* Text nodes */}
        <text x="100" y="50" textAnchor="middle" className="math">u = ...</text>
        <text x="300" y="50" textAnchor="middle" className="math">v = ...</text>
        
        <text x="100" y="130" textAnchor="middle" className="math">u' = ...</text>
        <text x="300" y="130" textAnchor="middle" className="math">v' = ...</text>

        {/* Loop path (v -> u' -> u -> v') */}
        {/* start at v (270, 60), to u' (130, 115), up to u (130, 60), to v' (270, 115) */}
        <path d="M 270 60 L 130 115 L 130 60 L 270 115" className="loop-path" />

        {/* Formula */}
        <text x="200" y="180" textAnchor="middle" className="formula">
          <tspan fill="#6C5CE7">vu'</tspan> - <tspan fill="#6C5CE7">uv'</tspan>
        </text>
        <line x1="120" y1="195" x2="280" y2="195" stroke="#2C2C2E" strokeWidth="2" strokeLinecap="round" />
        <text x="200" y="225" textAnchor="middle" className="math" style={{ fontSize: '20px' }}>
          v²
        </text>
      </svg>
    </div>
  );
};
