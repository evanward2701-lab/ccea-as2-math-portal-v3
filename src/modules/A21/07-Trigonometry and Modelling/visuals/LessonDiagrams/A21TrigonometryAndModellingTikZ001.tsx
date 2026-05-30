import React from 'react';

export const A21TrigonometryAndModellingTikZ001: React.FC = () => {
  const scale = 250; // pixels for length 1
  const cx = 50;
  const cy = 350;

  const deg2rad = (deg: number) => (deg * Math.PI) / 180;
  const A = 30;
  const B = 25;
  const A_rad = deg2rad(A);
  const B_rad = deg2rad(B);
  const sum_rad = deg2rad(A + B);

  // Points
  const O = { x: cx, y: cy };
  const P = { x: cx + scale * Math.cos(sum_rad), y: cy - scale * Math.sin(sum_rad) };
  
  // Hypotenuse of lower triangle is cos(B)
  const hypLower = scale * Math.cos(B_rad);
  const Q = { x: cx + hypLower * Math.cos(A_rad), y: cy - hypLower * Math.sin(A_rad) };

  const R = { x: P.x, y: cy };
  const S = { x: Q.x, y: cy };
  const U = { x: P.x, y: Q.y }; // Horizontal from P to vertical from Q? No, horizontal from Q, vertical from P.
  
  // Point U is horizontal from P? In TikZ: U = ({1.5*cos(A+B)}, {1.5*cos(B)*sin(A)})
  // This means U shares x with P, and y with Q.
  const U_pt = { x: P.x, y: Q.y };

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: '#FAF9F6', padding: '2rem', borderRadius: '12px', overflowX: 'auto' }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 400" width="100%" height="100%" style={{ minWidth: '400px' }}>
        <defs>
          <style>
            {`
              .line-base { stroke: #2C2C2E; stroke-width: 2; fill: none; }
              .line-dashed { stroke: #666666; stroke-width: 1.5; stroke-dasharray: 5,5; fill: none; }
              .line-hyp { stroke: #2C2C2E; stroke-width: 3; fill: none; }
              .line-cosB { stroke: #0984E3; stroke-width: 2; fill: none; }
              .line-sinB { stroke: #D63031; stroke-width: 2; fill: none; }
              .line-sinAcosB { stroke: #00B894; stroke-width: 2; fill: none; }
              .line-cosAsinB { stroke: #E17055; stroke-width: 2; fill: none; }
              .text-math { font-family: 'Inter', system-ui, sans-serif; font-style: italic; font-size: 14px; fill: #2C2C2E; }
              .text-label { font-family: 'Inter', system-ui, sans-serif; font-size: 14px; font-weight: 600; fill: #2C2C2E; }
            `}
          </style>
          <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#2C2C2E" />
          </marker>
        </defs>

        {/* Axes */}
        <line x1={cx} y1={cy} x2={cx + 350} y2={cy} className="line-base" markerEnd="url(#arrow)" />

        {/* Main Triangles */}
        <path d={`M ${O.x} ${O.y} L ${Q.x} ${Q.y}`} className="line-cosB" />
        <path d={`M ${Q.x} ${Q.y} L ${P.x} ${P.y}`} className="line-sinB" />
        <path d={`M ${O.x} ${O.y} L ${P.x} ${P.y}`} className="line-hyp" />

        {/* Perpendiculars */}
        <path d={`M ${P.x} ${P.y} L ${R.x} ${R.y}`} className="line-dashed" />
        <path d={`M ${Q.x} ${Q.y} L ${S.x} ${S.y}`} className="line-dashed" />
        
        {/* Components */}
        <path d={`M ${Q.x} ${Q.y} L ${Q.x} ${S.y}`} className="line-sinAcosB" />
        <path d={`M ${Q.x} ${Q.y} L ${U_pt.x} ${U_pt.y} L ${P.x} ${P.y}`} className="line-cosAsinB" />

        {/* Right angle markers */}
        <polyline points={`${S.x},${S.y - 10} ${S.x - 10},${S.y - 10} ${S.x - 10},${S.y}`} className="line-base" strokeWidth="1" />
        <polyline points={`${R.x},${R.y - 10} ${R.x - 10},${R.y - 10} ${R.x - 10},${R.y}`} className="line-base" strokeWidth="1" />
        <polyline points={`${U_pt.x},${U_pt.y - 10} ${U_pt.x - 10},${U_pt.y - 10} ${U_pt.x - 10},${U_pt.y}`} className="line-base" strokeWidth="1" />
        
        {/* Q right angle (rotated) */}
        <g transform={`translate(${Q.x}, ${Q.y}) rotate(${-A})`}>
           <polyline points="0,-10 -10,-10 -10,0" className="line-base" strokeWidth="1" />
        </g>

        {/* Arcs for angles */}
        <path d={`M ${cx + 50} ${cy} A 50 50 0 0 0 ${cx + 50 * Math.cos(A_rad)} ${cy - 50 * Math.sin(A_rad)}`} className="line-base" strokeWidth="1" />
        <text x={cx + 55} y={cy - 10} className="text-math">A</text>

        <path d={`M ${cx + 70 * Math.cos(A_rad)} ${cy - 70 * Math.sin(A_rad)} A 70 70 0 0 0 ${cx + 70 * Math.cos(sum_rad)} ${cy - 70 * Math.sin(sum_rad)}`} className="line-base" strokeWidth="1" />
        <text x={cx + 60} y={cy - 45} className="text-math">B</text>

        {/* Labels */}
        <text x={(O.x + P.x)/2 - 10} y={(O.y + P.y)/2 - 15} className="text-math" style={{ fontWeight: 600 }}>1</text>
        <text x={(O.x + Q.x)/2 + 5} y={(O.y + Q.y)/2 + 20} className="text-math" fill="#0984E3">cos B</text>
        <text x={(Q.x + P.x)/2 - 35} y={(Q.y + P.y)/2 - 5} className="text-math" fill="#D63031">sin B</text>

        <text x={Q.x + 5} y={(Q.y + S.y)/2} className="text-math" fill="#00B894">sin A cos B</text>
        <text x={U_pt.x + 5} y={(U_pt.y + P.y)/2} className="text-math" fill="#E17055">cos A sin B</text>

        {/* Total height label */}
        <line x1={P.x + 100} y1={P.y} x2={R.x + 100} y2={R.y} className="line-base" stroke="#C5A059" markerStart="url(#arrow)" markerEnd="url(#arrow)" />
        <line x1={P.x} y1={P.y} x2={P.x + 110} y2={P.y} className="line-dashed" />
        <line x1={R.x} y1={R.y} x2={R.x + 110} y2={R.y} className="line-dashed" />
        <rect x={P.x + 60} y={(P.y + R.y)/2 - 12} width="80" height="24" fill="#FAF9F6" />
        <text x={P.x + 65} y={(P.y + R.y)/2 + 5} className="text-label" fill="#C5A059">sin(A+B)</text>

      </svg>
    </div>
  );
};
