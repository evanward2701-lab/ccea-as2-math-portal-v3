import React from 'react';

export const A21ParametricEquationsSVG001: React.FC = () => {
  // Parabola: x = 2t, y = t^2
  // We'll scale for visibility
  const scale = 20; // 1 unit = 20px
  const cx = 300;
  const cy = 250;

  const points = [-3, -2, 0, 2, 3].map(t => ({
    t,
    x: 2 * t,
    y: t * t,
    px: cx + 2 * t * scale,
    py: cy - t * t * scale
  }));

  // Generate curve path
  const pathPoints = [];
  for (let t = -4; t <= 4; t += 0.1) {
    pathPoints.push(`${t === -4 ? 'M' : 'L'} ${cx + 2 * t * scale} ${cy - t * t * scale}`);
  }
  const dString = pathPoints.join(' ');

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: '#FAF9F6', padding: '2rem', borderRadius: '12px', overflowX: 'auto' }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 350" width="100%" height="100%" style={{ minWidth: '400px' }}>
        <defs>
          <style>
            {`
              .axis { stroke: #2C2C2E; stroke-width: 2; }
              .curve { stroke: #0984E3; stroke-width: 3; fill: none; stroke-linecap: round; }
              .point { fill: #D63031; }
              .label { font-family: 'Inter', system-ui, sans-serif; font-size: 14px; font-weight: 600; fill: #D63031; }
              .math { font-family: 'Inter', system-ui, sans-serif; font-style: italic; font-size: 14px; fill: #2C2C2E; }
            `}
          </style>
          <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#2C2C2E" />
          </marker>
        </defs>

        {/* Axes */}
        <line x1="20" y1={cy} x2="580" y2={cy} className="axis" markerEnd="url(#arrow)" />
        <line x1={cx} y1="330" x2={cx} y2="20" className="axis" markerEnd="url(#arrow)" />
        
        {/* Axis Labels */}
        <text x="575" y={cy - 10} className="math">x</text>
        <text x={cx + 10} y="15" className="math">y</text>

        {/* Curve */}
        <path d={dString} className="curve" />

        {/* Points and Labels */}
        {points.map((p, i) => (
          <g key={i}>
            <circle cx={p.px} cy={p.py} r="5" className="point" />
            <text 
              x={p.px + (p.t < 0 ? -45 : 10)} 
              y={p.py + (p.t === 0 ? 20 : 5)} 
              className="label"
            >
              t = {p.t}
            </text>
          </g>
        ))}

        <text x="50" y="40" className="math" style={{ fontSize: '16px', fontWeight: 600, fill: '#0984E3' }}>
          x = 2t, y = t²
        </text>
      </svg>
    </div>
  );
};
