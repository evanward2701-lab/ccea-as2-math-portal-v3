import React from 'react';

export const A21TrigonometryAndModellingSVG001: React.FC = () => {
  // We'll generate the path dynamically for smoothness
  const width = 600;
  const height = 400;
  const cx = 300;
  const cy = 200;
  
  const scaleX = 100 / Math.PI; // roughly 31.8px per radian
  const scaleY = 30; // 30px per unit amplitude

  const pathPoints = [];
  for (let px = 0; px <= width; px++) {
    const x = (px - cx) / scaleX;
    const y = 3 * Math.sin(x) + 4 * Math.cos(x);
    const py = cy - y * scaleY;
    pathPoints.push(`${px === 0 ? 'M' : 'L'} ${px} ${py}`);
  }
  const dString = pathPoints.join(' ');

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: '#FAF9F6', padding: '2rem', borderRadius: '12px', overflowX: 'auto' }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${width} ${height}`} width="100%" height="100%" style={{ minWidth: '500px' }}>
        <defs>
          <style>
            {`
              .axis { stroke: #2C2C2E; stroke-width: 2; }
              .grid { stroke: #E5E5EA; stroke-width: 1; stroke-dasharray: 4,4; }
              .wave { stroke: #C5A059; stroke-width: 3; fill: none; stroke-linecap: round; }
              .label { font-family: 'Inter', system-ui, sans-serif; font-size: 14px; fill: #2C2C2E; }
              .math { font-family: 'Inter', system-ui, sans-serif; font-style: italic; font-size: 16px; fill: #2C2C2E; }
              .title { font-family: 'Inter', system-ui, sans-serif; font-size: 16px; font-weight: 600; fill: #2C2C2E; }
            `}
          </style>
          <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#2C2C2E" />
          </marker>
        </defs>

        {/* Grid Lines */}
        <line x1="0" y1={cy - 5 * scaleY} x2={width} y2={cy - 5 * scaleY} className="grid" />
        <line x1="0" y1={cy + 5 * scaleY} x2={width} y2={cy + 5 * scaleY} className="grid" />

        {/* Axes */}
        <line x1="20" y1={cy} x2={width - 20} y2={cy} className="axis" markerEnd="url(#arrow)" />
        <line x1={cx} y1={height - 20} x2={cx} y2={20} className="axis" markerEnd="url(#arrow)" />

        {/* Axis Labels */}
        <text x={width - 15} y={cy - 10} className="math">x</text>
        <text x={cx + 15} y={15} className="math">y</text>

        {/* Y-axis Ticks */}
        <text x={cx - 20} y={cy - 5 * scaleY + 5} className="label">5</text>
        <text x={cx - 25} y={cy + 5 * scaleY + 5} className="label">-5</text>
        
        {/* X-axis Ticks */}
        <text x={cx + Math.PI * scaleX - 5} y={cy + 25} className="math">π</text>
        <text x={cx + 2 * Math.PI * scaleX - 10} y={cy + 25} className="math">2π</text>
        <text x={cx - Math.PI * scaleX - 15} y={cy + 25} className="math">-π</text>
        <text x={cx - 2 * Math.PI * scaleX - 20} y={cy + 25} className="math">-2π</text>

        {/* The Wave */}
        <path d={dString} className="wave" />

        {/* Title / Annotation */}
        <text x="320" y="40" className="title" fill="#C5A059">y = 3sin(x) + 4cos(x) ≡ 5sin(x + 53.1°)</text>

        {/* Amplitude markers */}
        <line x1={cx - 5} y1={cy - 5 * scaleY} x2={cx + 5} y2={cy - 5 * scaleY} className="axis" />
        <line x1={cx - 5} y1={cy + 5 * scaleY} x2={cx + 5} y2={cy + 5 * scaleY} className="axis" />
        
        <path d={`M ${cx - 50} ${cy} L ${cx - 50} ${cy - 5 * scaleY}`} stroke="#2C2C2E" strokeWidth="1" strokeDasharray="5,5" fill="none" />
        <text x={cx - 150} y={cy - 2.5 * scaleY} className="label">Amplitude = 5</text>

      </svg>
    </div>
  );
};
