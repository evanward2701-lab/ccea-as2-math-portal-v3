import React from 'react';

export const A21FunctionsAndGraphsTikZ001: React.FC = () => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: '#FAF9F6', padding: '2rem', borderRadius: '12px' }}>
      <svg viewBox="0 0 400 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <style>
            {`
              .axis-line { stroke: #E5E5EA; stroke-width: 2; }
              .graph-line { fill: none; stroke: #C5A059; stroke-width: 4; stroke-linecap: round; stroke-linejoin: round; }
              .text-label { font-family: 'Times New Roman', serif; font-size: 16px; font-style: italic; fill: #2C2C2E; }
            `}
          </style>
          <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L9,3 z" fill="#E5E5EA" />
          </marker>
        </defs>

        <g transform="translate(200, 220)">
          {/* Axes */}
          <line x1="-150" y1="0" x2="150" y2="0" className="axis-line" markerEnd="url(#arrowhead)"/>
          <line x1="0" y1="30" x2="0" y2="-180" className="axis-line" markerEnd="url(#arrowhead)"/>
          
          {/* Axis Labels */}
          <text x="160" y="5" className="text-label">x</text>
          <text x="-15" y="-190" className="text-label">y</text>
          <text x="5" y="15" className="text-label" fontSize="14">O</text>

          {/* Graph y = |x| */}
          <path d="M -130 -130 L 0 0 L 130 -130" className="graph-line" />
          
          {/* Graph Label */}
          <text x="70" y="-80" className="text-label" fill="#C5A059" fontWeight="bold">y = |x|</text>
        </g>
      </svg>
    </div>
  );
};
