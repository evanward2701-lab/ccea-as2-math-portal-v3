import React from 'react';

export const A21IntegrationTikZ001: React.FC = () => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: '#FAF9F6', padding: '2rem', borderRadius: '12px', overflowX: 'auto' }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" width="100%" height="100%" style={{ minWidth: '600px', maxWidth: '800px' }}>
        <defs>
          <style>
            {`
              .axis { stroke: #E5E5EA; stroke-width: 2; }
              .curve-convex { stroke: #0984E3; stroke-width: 3; fill: none; }
              .curve-concave { stroke: #D63031; stroke-width: 3; fill: none; }
              .trap { fill: rgba(197, 160, 89, 0.4); stroke: #C5A059; stroke-width: 1.5; }
              .label { font-family: 'Inter', system-ui, sans-serif; font-size: 14px; fill: #2C2C2E; }
              .title { font-family: 'Inter', system-ui, sans-serif; font-size: 16px; font-weight: 600; fill: #2C2C2E; }
              .math { font-family: 'Inter', system-ui, sans-serif; font-size: 14px; font-style: italic; fill: #2C2C2E; }
            `}
          </style>
          <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#E5E5EA" />
          </marker>
        </defs>

        {/* LEFT GRAPH: Convex */}
        <g transform="translate(50, 0)">
          {/* Axes */}
          <line x1="0" y1="300" x2="300" y2="300" className="axis" markerEnd="url(#arrow)" />
          <line x1="30" y1="330" x2="30" y2="20" className="axis" markerEnd="url(#arrow)" />
          
          <text x="310" y="305" className="math">x</text>
          <text x="10" y="30" className="math">y</text>

          {/* Trapeziums */}
          {/* Base x points: 60, 120, 180, 240 */}
          {/* Curve y = 0.005*(x-30)^2 + 40 (upside down since y grows down) */}
          {/* x=60: y=300 - (0.005*900+40) = 300-44.5 = 255.5 */}
          {/* x=120: y=300 - (0.005*8100+40) = 300-80.5 = 219.5 */}
          {/* x=180: y=300 - (0.005*22500+40) = 300-152.5 = 147.5 */}
          {/* x=240: y=300 - (0.005*44100+40) = 300-260.5 = 39.5 */}
          <path d="M 60 300 L 60 255.5 L 120 219.5 L 120 300 Z" className="trap" />
          <path d="M 120 300 L 120 219.5 L 180 147.5 L 180 300 Z" className="trap" />
          <path d="M 180 300 L 180 147.5 L 240 39.5 L 240 300 Z" className="trap" />

          {/* Convex Curve */}
          <path d="M 30 260 Q 150 200 250 15" className="curve-convex" />

          {/* Labels */}
          <text x="150" y="340" className="title" textAnchor="middle">Convex Curve</text>
          <text x="150" y="360" className="label" textAnchor="middle">f''(x) &gt; 0</text>
          <text x="150" y="380" className="label" textAnchor="middle">Trapeziums sit above (Overestimate)</text>
        </g>

        {/* RIGHT GRAPH: Concave */}
        <g transform="translate(450, 0)">
          {/* Axes */}
          <line x1="0" y1="300" x2="300" y2="300" className="axis" markerEnd="url(#arrow)" />
          <line x1="30" y1="330" x2="30" y2="20" className="axis" markerEnd="url(#arrow)" />
          
          <text x="310" y="305" className="math">x</text>
          <text x="10" y="30" className="math">y</text>

          {/* Trapeziums */}
          {/* Concave Curve approx y = sqrt(x-30)*15 + 40 */}
          {/* x=60: sqrt(30)*15+40 ~ 122 => y=178 */}
          {/* x=120: sqrt(90)*15+40 ~ 182 => y=118 */}
          {/* x=180: sqrt(150)*15+40 ~ 223 => y=77 */}
          {/* x=240: sqrt(210)*15+40 ~ 257 => y=43 */}
          <path d="M 60 300 L 60 178 L 120 118 L 120 300 Z" className="trap" />
          <path d="M 120 300 L 120 118 L 180 77 L 180 300 Z" className="trap" />
          <path d="M 180 300 L 180 77 L 240 43 L 240 300 Z" className="trap" />

          {/* Concave Curve */}
          <path d="M 30 260 Q 100 130 270 30" className="curve-concave" />

          {/* Labels */}
          <text x="150" y="340" className="title" textAnchor="middle">Concave Curve</text>
          <text x="150" y="360" className="label" textAnchor="middle">f''(x) &lt; 0</text>
          <text x="150" y="380" className="label" textAnchor="middle">Trapeziums sit below (Underestimate)</text>
        </g>

      </svg>
    </div>
  );
};
