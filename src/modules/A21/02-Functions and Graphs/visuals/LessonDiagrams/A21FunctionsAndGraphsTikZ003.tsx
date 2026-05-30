import React from 'react';

export const A21FunctionsAndGraphsTikZ003: React.FC = () => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: '#FAF9F6', padding: '2rem', borderRadius: '12px' }}>
      <svg viewBox="0 0 500 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <style>
            {`
              .axis-line { stroke: #E5E5EA; stroke-width: 2; }
              .graph-dashed { fill: none; stroke: #C7C7CC; stroke-width: 2; stroke-dasharray: 6, 6; }
              .curve-f { fill: none; stroke: #2C2C2E; stroke-width: 4; stroke-linecap: round; }
              .curve-finv { fill: none; stroke: #C5A059; stroke-width: 4; stroke-linecap: round; }
              .text-label { font-family: 'Times New Roman', serif; font-size: 16px; font-style: italic; fill: #2C2C2E; }
              .text-coord { font-family: 'Inter', system-ui, sans-serif; font-size: 14px; fill: #2C2C2E; }
              .point-dot { fill: #2C2C2E; }
            `}
          </style>
          <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L9,3 z" fill="#E5E5EA" />
          </marker>
        </defs>

        <g transform="translate(100, 400)">
          {/* Axes */}
          <line x1="-50" y1="0" x2="350" y2="0" className="axis-line" markerEnd="url(#arrowhead)"/>
          <line x1="0" y1="50" x2="0" y2="-350" className="axis-line" markerEnd="url(#arrowhead)"/>
          
          {/* Axis Labels */}
          <text x="360" y="5" className="text-label">x</text>
          <text x="-15" y="-360" className="text-label">y</text>
          
          {/* y = x line */}
          <line x1="-50" y1="50" x2="350" y2="-350" className="graph-dashed" />
          <text x="330" y="-310" className="text-label" fill="#8E8E93">y = x</text>

          {/* f(x) curve (exponential shape) */}
          {/* Using a bezier curve starting low on y axis and shooting up */}
          <path d="M -50 -15 Q 100 -20 200 -300" className="curve-f" />
          <text x="120" y="-280" className="text-label" fill="#2C2C2E" fontWeight="bold">y = f(x)</text>

          {/* f^-1(x) curve (logarithmic shape) */}
          {/* Reflected bezier curve starting low on x axis and shooting right */}
          <path d="M 15 50 Q 20 -100 300 -200" className="curve-finv" />
          <text x="260" y="-140" className="text-label" fill="#C5A059" fontWeight="bold">y = f⁻¹(x)</text>

          {/* Intercepts */}
          {/* Exponential curve crosses y axis at (0, -18) approx */}
          <circle cx="0" cy="-18" r="4" className="point-dot" />
          <text x="-15" y="-12" className="text-coord">a</text>

          {/* Log curve crosses x axis at (18, 0) approx */}
          <circle cx="18" cy="0" r="4" className="point-dot" />
          <text x="15" y="20" className="text-coord">a</text>

        </g>
      </svg>
    </div>
  );
};
