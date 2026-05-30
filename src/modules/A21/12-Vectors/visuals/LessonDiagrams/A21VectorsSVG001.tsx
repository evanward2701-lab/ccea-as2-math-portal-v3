import React from 'react';

export const A21VectorsSVG001: React.FC = () => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: '#FAF9F6', padding: '2rem', borderRadius: '12px', overflowX: 'auto' }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%" style={{ minWidth: '300px', maxWidth: '400px' }}>
        <defs>
          <style>
            {`
              .shape-fill { fill: rgba(9, 132, 227, 0.05); }
              .edge { stroke: #2C2C2E; stroke-width: 2.5; }
              .diagonal { stroke: #D63031; stroke-width: 2; stroke-dasharray: 6 6; }
              .point-label { font-family: 'Inter', system-ui, sans-serif; font-size: 16px; font-weight: 600; fill: #2C2C2E; }
              .math-label { font-family: 'Inter', system-ui, sans-serif; font-size: 18px; font-style: italic; font-weight: bold; fill: #2C2C2E; }
              .intersect-label { font-family: 'Inter', system-ui, sans-serif; font-size: 16px; font-weight: 600; fill: #D63031; }
            `}
          </style>
          <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#2C2C2E" />
          </marker>
        </defs>

        {/* Parallelogram OACB */}
        {/* O=(50, 250), A=(150, 50), C=(350, 50), B=(250, 250) */}
        <polygon points="50,250 150,50 350,50 250,250" className="shape-fill" />

        {/* Diagonals */}
        <line x1="50" y1="250" x2="350" y2="50" className="diagonal" />
        <line x1="150" y1="50" x2="250" y2="250" className="diagonal" />

        {/* Edges */}
        <line x1="50" y1="250" x2="150" y2="50" className="edge" markerEnd="url(#arrow)" />
        <line x1="50" y1="250" x2="250" y2="250" className="edge" markerEnd="url(#arrow)" />
        <line x1="150" y1="50" x2="350" y2="50" className="edge" />
        <line x1="250" y1="250" x2="350" y2="50" className="edge" />

        {/* Intersection X */}
        <circle cx="200" cy="150" r="5" fill="#D63031" />

        {/* Point Labels */}
        <text x="30" y="270" className="point-label">O</text>
        <text x="130" y="35" className="point-label">A</text>
        <text x="360" y="35" className="point-label">C</text>
        <text x="260" y="270" className="point-label">B</text>
        <text x="215" y="145" className="intersect-label">X</text>

        {/* Vector Labels */}
        <rect x="75" y="140" width="20" height="25" fill="#FAF9F6" />
        <text x="85" y="160" className="math-label">a</text>
        
        <rect x="140" y="260" width="20" height="25" fill="#FAF9F6" />
        <text x="150" y="280" className="math-label">b</text>

      </svg>
    </div>
  );
};
