import React from 'react';

export const A21FunctionsAndGraphsTikZ002: React.FC = () => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: '#FAF9F6', padding: '2rem', borderRadius: '12px' }}>
      <svg viewBox="0 0 500 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <style>
            {`
              .axis-line { stroke: #E5E5EA; stroke-width: 2; }
              .graph-dashed { fill: none; stroke: #C7C7CC; stroke-width: 2; stroke-dasharray: 6, 6; }
              .graph-solid { fill: none; stroke: #C5A059; stroke-width: 4; stroke-linecap: round; stroke-linejoin: round; }
              .text-label { font-family: 'Times New Roman', serif; font-size: 16px; font-style: italic; fill: #2C2C2E; }
              .text-coord { font-family: 'Inter', system-ui, sans-serif; font-size: 14px; fill: #2C2C2E; }
              .text-coord-fade { fill: #8E8E93; }
            `}
          </style>
          <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L9,3 z" fill="#E5E5EA" />
          </marker>
        </defs>

        <g transform="translate(150, 250)">
          {/* Axes */}
          <line x1="-50" y1="0" x2="250" y2="0" className="axis-line" markerEnd="url(#arrowhead)"/>
          <line x1="0" y1="100" x2="0" y2="-200" className="axis-line" markerEnd="url(#arrowhead)"/>
          
          {/* Axis Labels */}
          <text x="260" y="5" className="text-label">x</text>
          <text x="-15" y="-210" className="text-label">y</text>

          {/* Scale: 40px = 1 unit */}
          {/* Original line y = 2x - 3 (below axis) -> passes through (0, -3) [y=120] and (1.5, 0) [x=60] */}
          {/* We'll just draw the dashed part below the axis */}
          <line x1="-20" y1="160" x2="60" y2="0" className="graph-dashed" />
          
          {/* Modulus graph y = |2x - 3| */}
          <path d="M -30 -180 L 60 0 L 150 -180" className="graph-solid" />
          
          {/* Key coordinates */}
          <text x="-10" y="-115" className="text-coord" textAnchor="end">3</text>
          <text x="-10" y="125" className="text-coord text-coord-fade" textAnchor="end">-3</text>
          <text x="60" y="20" className="text-coord" textAnchor="middle">3/2</text>
          
          {/* Graph Label */}
          <text x="160" y="-150" className="text-label" fill="#C5A059" fontWeight="bold">y = |2x - 3|</text>
        </g>
      </svg>
    </div>
  );
};
