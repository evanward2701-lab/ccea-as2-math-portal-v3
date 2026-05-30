import React from 'react';

export const A21DifferentiationSVG002: React.FC = () => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: '#FAF9F6', padding: '2rem', borderRadius: '12px', overflowX: 'auto' }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200" width="100%" height="100%" style={{ minWidth: '300px', maxWidth: '400px' }}>
        <defs>
          <style>
            {`
              .math { font-family: 'Inter', monospace, system-ui; font-size: 24px; font-weight: 700; fill: #2C2C2E; }
              .formula { font-family: 'Inter', system-ui, sans-serif; font-size: 20px; font-weight: 600; fill: #2C2C2E; }
              .line-u-v { stroke: #0984E3; stroke-width: 4; marker-end: url(#arrow-blue); stroke-linecap: round; }
              .line-v-u { stroke: #D63031; stroke-width: 4; marker-end: url(#arrow-red); stroke-linecap: round; }
            `}
          </style>
          <marker id="arrow-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#0984E3" />
          </marker>
          <marker id="arrow-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#D63031" />
          </marker>
        </defs>

        {/* Text nodes */}
        <text x="100" y="50" textAnchor="middle" className="math">u = ...</text>
        <text x="300" y="50" textAnchor="middle" className="math">v = ...</text>
        
        <text x="100" y="130" textAnchor="middle" className="math">u' = ...</text>
        <text x="300" y="130" textAnchor="middle" className="math">v' = ...</text>

        {/* Cross lines */}
        <line x1="130" y1="60" x2="270" y2="115" className="line-u-v" />
        <line x1="270" y1="60" x2="130" y2="115" className="line-v-u" />

        {/* Formula */}
        <text x="200" y="180" textAnchor="middle" className="formula">
          <tspan fill="#0984E3">uv'</tspan> + <tspan fill="#D63031">vu'</tspan>
        </text>
      </svg>
    </div>
  );
};
