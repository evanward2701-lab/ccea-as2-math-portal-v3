import React from 'react';

export const A21VectorsTikZ001: React.FC = () => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: '#FAF9F6', padding: '2rem', borderRadius: '12px', overflowX: 'auto' }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 250" width="100%" height="100%" style={{ minWidth: '500px', maxWidth: '600px' }}>
        <defs>
          <style>
            {`
              .vec-line { stroke: #2C2C2E; stroke-width: 2.5; fill: none; }
              .vec-result-sub { stroke: #D63031; stroke-width: 3; fill: none; }
              .vec-result-add { stroke: #0984E3; stroke-width: 3; fill: none; }
              .vec-dash { stroke: #2C2C2E; stroke-width: 2; stroke-dasharray: 6 6; fill: none; }
              .point { font-family: 'Inter', system-ui, sans-serif; font-size: 14px; font-weight: 600; fill: #2C2C2E; }
              .math { font-family: 'Inter', system-ui, sans-serif; font-size: 16px; font-style: italic; font-weight: bold; fill: #2C2C2E; }
              .math-sub { font-family: 'Inter', system-ui, sans-serif; font-size: 16px; font-style: italic; font-weight: bold; fill: #D63031; }
              .math-add { font-family: 'Inter', system-ui, sans-serif; font-size: 16px; font-style: italic; font-weight: bold; fill: #0984E3; }
              .title { font-family: 'Inter', system-ui, sans-serif; font-size: 14px; fill: #666; }
            `}
          </style>
          <marker id="arrow-dark" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#2C2C2E" />
          </marker>
          <marker id="arrow-red" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#D63031" />
          </marker>
          <marker id="arrow-blue" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#0984E3" />
          </marker>
        </defs>

        {/* LEFT: Vector Subtraction */}
        <g transform="translate(40, 40)">
          {/* Vectors */}
          {/* O=(0, 150), A=(80, 0), B=(180, 120) */}
          <line x1="0" y1="150" x2="80" y2="0" className="vec-line" markerEnd="url(#arrow-dark)" />
          <line x1="0" y1="150" x2="180" y2="120" className="vec-line" markerEnd="url(#arrow-dark)" />
          <line x1="80" y1="0" x2="180" y2="120" className="vec-result-sub" markerEnd="url(#arrow-red)" />

          {/* Points */}
          <text x="-15" y="160" className="point">O</text>
          <text x="75" y="-10" className="point">A</text>
          <text x="190" y="130" className="point">B</text>

          {/* Math Labels */}
          <text x="25" y="70" className="math">a</text>
          <text x="90" y="155" className="math">b</text>
          <text x="140" y="55" className="math-sub">b - a</text>

          {/* Title */}
          <text x="90" y="190" className="title" textAnchor="middle">Vector Subtraction: AB = b - a</text>
        </g>

        {/* RIGHT: Vector Addition */}
        <g transform="translate(320, 40)">
          {/* Vectors */}
          {/* O=(0, 150), A=(80, 0), B=(160, 150), C=(240, 0) */}
          <line x1="0" y1="150" x2="80" y2="0" className="vec-line" markerEnd="url(#arrow-dark)" />
          <line x1="0" y1="150" x2="160" y2="150" className="vec-line" markerEnd="url(#arrow-dark)" />
          
          <line x1="80" y1="0" x2="240" y2="0" className="vec-dash" markerEnd="url(#arrow-dark)" />
          <line x1="160" y1="150" x2="240" y2="0" className="vec-dash" markerEnd="url(#arrow-dark)" />

          <line x1="0" y1="150" x2="240" y2="0" className="vec-result-add" markerEnd="url(#arrow-blue)" />

          {/* Points */}
          <text x="-15" y="160" className="point">O</text>
          <text x="75" y="-10" className="point">A</text>
          <text x="160" y="170" className="point">B</text>
          <text x="250" y="0" className="point">C</text>

          {/* Math Labels */}
          <text x="25" y="70" className="math">a</text>
          <text x="80" y="170" className="math">b</text>
          <text x="160" y="-10" className="math">b</text>
          <text x="210" y="90" className="math">a</text>
          
          <rect x="100" y="50" width="45" height="25" fill="#FAF9F6" />
          <text x="105" y="70" className="math-add">a + b</text>

          {/* Title */}
          <text x="120" y="190" className="title" textAnchor="middle">Vector Addition: OC = a + b</text>
        </g>

      </svg>
    </div>
  );
};
