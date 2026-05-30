import React from 'react';

export const A21ParametricEquationsTikZ001: React.FC = () => {
  const width = 500;
  const height = 500;
  const cx = width / 2;
  const cy = height / 2;
  
  // Plot x = 8*cos(2t), y = 12*sin(t - 60)
  // Scale factor to fit inside 500x500
  const scale = 15; // 8*15 = 120px max horizontal, 12*15 = 180px max vertical. Fits perfectly.

  const pathPoints = [];
  const startT = 0;
  let startX = 0;
  let startY = 0;

  for (let deg = 0; deg <= 360; deg++) {
    const t = (deg * Math.PI) / 180;
    const x = 8 * Math.cos(2 * t);
    const y = 12 * Math.sin(t - Math.PI / 3);
    
    const px = cx + x * scale;
    const py = cy - y * scale; // SVG y is inverted
    
    if (deg === 0) {
      startX = px;
      startY = py;
    }

    pathPoints.push(`${deg === 0 ? 'M' : 'L'} ${px} ${py}`);
  }
  const dString = pathPoints.join(' ');

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: '#FAF9F6', padding: '2rem', borderRadius: '12px', overflowX: 'auto' }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${width} ${height}`} width="100%" height="100%" style={{ minWidth: '400px', maxWidth: '500px' }}>
        <defs>
          <style>
            {`
              .axis { stroke: #2C2C2E; stroke-width: 2; }
              .grid { stroke: #E5E5EA; stroke-width: 1; }
              .curve { stroke: #0984E3; stroke-width: 3; fill: none; stroke-linecap: round; stroke-linejoin: round; }
              .point { fill: #2C2C2E; }
              .label { font-family: 'Inter', system-ui, sans-serif; font-size: 14px; font-weight: 600; fill: #2C2C2E; }
              .math { font-family: 'Inter', system-ui, sans-serif; font-style: italic; font-size: 14px; fill: #2C2C2E; }
              .title { font-family: 'Inter', system-ui, sans-serif; font-size: 16px; font-weight: 600; fill: #0984E3; }
            `}
          </style>
          <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#2C2C2E" />
          </marker>
        </defs>

        {/* Grid */}
        {[...Array(9)].map((_, i) => {
           const y = cy + (i - 4) * 5 * scale;
           return <line key={`h${i}`} x1={cx - 10*scale} y1={y} x2={cx + 10*scale} y2={y} className="grid" />;
        })}
        {[...Array(5)].map((_, i) => {
           const x = cx + (i - 2) * 5 * scale;
           return <line key={`v${i}`} x1={x} y1={cy - 12*scale} x2={x} y2={cy + 12*scale} className="grid" />;
        })}

        {/* Axes */}
        <line x1="20" y1={cy} x2={width - 20} y2={cy} className="axis" markerEnd="url(#arrow)" />
        <line x1={cx} y1={height - 20} x2={cx} y2="20" className="axis" markerEnd="url(#arrow)" />
        
        {/* Ticks */}
        <text x={cx + 5 * scale - 5} y={cy + 20} className="math">5</text>
        <text x={cx - 5 * scale - 10} y={cy + 20} className="math">-5</text>
        <text x={cx + 10} y={cy - 5 * scale + 5} className="math">5</text>
        <text x={cx + 10} y={cy - 10 * scale + 5} className="math">10</text>
        
        {/* Axis Labels */}
        <text x={width - 15} y={cy - 10} className="math">x</text>
        <text x={cx + 15} y="15" className="math">y</text>

        {/* The Curve */}
        <path d={dString} className="curve" />

        {/* Start Point */}
        <circle cx={startX} cy={startY} r="5" className="point" />
        <text x={startX + 10} y={startY + 5} className="label">t = 0</text>

        {/* Title */}
        <text x="30" y="40" className="title">x = 8cos(2t)</text>
        <text x="30" y="60" className="title">y = 12sin(t - π/3)</text>
      </svg>
    </div>
  );
};
