import React from 'react';

export const A21BinomialExpansionRationalSVG002: React.FC = () => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: '#FAF9F6', padding: '2rem', borderRadius: '12px', overflowX: 'auto' }}>
      <svg viewBox="0 0 600 220" width="100%" height="100%" style={{ minWidth: '500px' }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <style>
            {`
              .axis { stroke: #2C2C2E; stroke-width: 2; }
              .tick { stroke: #2C2C2E; stroke-width: 2; }
              .label { font-family: 'Inter', system-ui, sans-serif; font-size: 16px; fill: #2C2C2E; font-weight: 500; }
              
              .range1 { stroke: #666666; stroke-width: 4; stroke-linecap: round; stroke-dasharray: 6 4; }
              .range1-text { font-family: 'Inter', system-ui, sans-serif; font-size: 14px; fill: #666666; font-weight: 500; }
              .circle1 { fill: #FAF9F6; stroke: #666666; stroke-width: 2; }
              
              .range2 { stroke: #C5A059; stroke-width: 4; stroke-linecap: round; }
              .range2-text { font-family: 'Inter', system-ui, sans-serif; font-size: 14px; fill: #C5A059; font-weight: 500; }
              .circle2 { fill: #FAF9F6; stroke: #C5A059; stroke-width: 2; }

              .intersection { fill: #C5A059; fill-opacity: 0.15; rx: 4; }
              .intersection-text { font-family: 'Inter', system-ui, sans-serif; font-size: 14px; font-weight: bold; fill: #2C2C2E; }
            `}
          </style>
          <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#2C2C2E" />
          </marker>
          <marker id="arrow-reverse" viewBox="0 0 10 10" refX="2" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 10 0 L 0 5 L 10 10 z" fill="#2C2C2E" />
          </marker>
        </defs>

        {/* Intersection Highlight */}
        <rect x="200" y="20" width="200" height="150" className="intersection" />
        <text x="300" y="35" className="intersection-text" textAnchor="middle">Combined Validity: |x| &lt; 1 (Most restrictive)</text>

        {/* Range 2: |x| < 2 */}
        <line x1="100" y1="110" x2="500" y2="110" className="range1"/>
        <circle cx="100" cy="110" r="5" className="circle1"/>
        <circle cx="500" cy="110" r="5" className="circle1"/>
        <text x="300" y="100" className="range1-text" textAnchor="middle">Expansion 2 valid: |x| &lt; 2</text>

        {/* Range 1: |x| < 1 */}
        <line x1="200" y1="65" x2="400" y2="65" className="range2"/>
        <circle cx="200" cy="65" r="5" className="circle2"/>
        <circle cx="400" cy="65" r="5" className="circle2"/>
        <text x="300" y="55" className="range2-text" textAnchor="middle">Expansion 1 valid: |x| &lt; 1</text>
        
        {/* Number line */}
        <line x1="50" y1="160" x2="550" y2="160" className="axis" markerEnd="url(#arrow)" markerStart="url(#arrow-reverse)"/>
        
        {/* Markers */}
        <line x1="100" y1="150" x2="100" y2="170" className="tick"/>
        <line x1="200" y1="150" x2="200" y2="170" className="tick"/>
        <line x1="300" y1="150" x2="300" y2="170" className="tick"/>
        <line x1="400" y1="150" x2="400" y2="170" className="tick"/>
        <line x1="500" y1="150" x2="500" y2="170" className="tick"/>
        
        {/* Labels */}
        <text x="100" y="195" className="label" textAnchor="middle">-2</text>
        <text x="200" y="195" className="label" textAnchor="middle">-1</text>
        <text x="300" y="195" className="label" textAnchor="middle">0</text>
        <text x="400" y="195" className="label" textAnchor="middle">1</text>
        <text x="500" y="195" className="label" textAnchor="middle">2</text>
      </svg>
    </div>
  );
};
