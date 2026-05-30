import React from 'react';

export const A21TrigonometrySVG004: React.FC = () => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: '#FAF9F6', padding: '2rem', borderRadius: '12px', overflowX: 'auto' }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 300" width="100%" height="100%" style={{ minWidth: '700px' }}>
        <defs>
          <style>
            {`
              .axis { stroke: #2C2C2E; stroke-width: 2; }
              .curve { stroke: #C5A059; stroke-width: 3; fill: none; stroke-linecap: round; }
              .asymptote { stroke: #666666; stroke-width: 1; stroke-dasharray: 4,4; }
              .label { font-family: 'Inter', system-ui, sans-serif; font-size: 12px; fill: #2C2C2E; }
              .math { font-family: 'Inter', system-ui, sans-serif; font-style: italic; font-size: 14px; fill: #2C2C2E; }
              .title { font-family: 'Inter', system-ui, sans-serif; font-size: 16px; font-weight: 600; fill: #2C2C2E; text-anchor: middle; }
            `}
          </style>
          <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#2C2C2E" />
          </marker>
        </defs>

        {/* PANEL 1: arcsin x */}
        <g transform="translate(0, 0)">
          <text x="150" y="30" className="title">y = arcsin x</text>
          <line x1="50" y1="150" x2="250" y2="150" className="axis" markerEnd="url(#arrow)" />
          <line x1="150" y1="250" x2="150" y2="50" className="axis" markerEnd="url(#arrow)" />
          
          <text x="245" y="140" className="math">x</text>
          <text x="135" y="60" className="math">y</text>
          
          <text x="210" y="165" className="label">1</text>
          <text x="80" y="165" className="label">-1</text>
          <text x="160" y="85" className="math">π/2</text>
          <text x="160" y="225" className="math">-π/2</text>

          <path d="M 90 220 Q 150 220, 150 150 Q 150 80, 210 80" className="curve" />
        </g>

        {/* PANEL 2: arccos x */}
        <g transform="translate(300, 0)">
          <text x="150" y="30" className="title">y = arccos x</text>
          <line x1="50" y1="220" x2="250" y2="220" className="axis" markerEnd="url(#arrow)" />
          <line x1="150" y1="250" x2="150" y2="50" className="axis" markerEnd="url(#arrow)" />
          
          <text x="245" y="210" className="math">x</text>
          <text x="135" y="60" className="math">y</text>
          
          <text x="210" y="235" className="label">1</text>
          <text x="80" y="235" className="label">-1</text>
          <text x="160" y="85" className="math">π</text>
          <text x="160" y="155" className="math">π/2</text>

          <path d="M 90 80 Q 150 80, 150 150 Q 150 220, 210 220" className="curve" />
        </g>

        {/* PANEL 3: arctan x */}
        <g transform="translate(600, 0)">
          <text x="150" y="30" className="title">y = arctan x</text>
          <line x1="30" y1="150" x2="270" y2="150" className="axis" markerEnd="url(#arrow)" />
          <line x1="150" y1="250" x2="150" y2="50" className="axis" markerEnd="url(#arrow)" />
          
          <line x1="30" y1="80" x2="270" y2="80" className="asymptote" />
          <line x1="30" y1="220" x2="270" y2="220" className="asymptote" />

          <text x="265" y="140" className="math">x</text>
          <text x="135" y="60" className="math">y</text>
          
          <text x="160" y="75" className="math">π/2</text>
          <text x="160" y="235" className="math">-π/2</text>

          <path d="M 40 215 Q 150 210, 150 150 Q 150 90, 260 85" className="curve" />
        </g>
      </svg>
    </div>
  );
};
