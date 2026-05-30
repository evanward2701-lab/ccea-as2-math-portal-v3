import React from 'react';

export const A21BinomialExpansionRationalSVG001: React.FC = () => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: '#FAF9F6', padding: '2rem', borderRadius: '12px', overflowX: 'auto' }}>
      <svg viewBox="0 0 600 160" width="100%" height="100%" style={{ minWidth: '500px' }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <style>
            {`
              .axis { stroke: #2C2C2E; stroke-width: 2; }
              .tick { stroke: #2C2C2E; stroke-width: 2; }
              .label { font-family: 'Inter', system-ui, sans-serif; font-size: 16px; fill: #2C2C2E; font-weight: 500; }
              .highlight { stroke: #C5A059; stroke-width: 6; stroke-linecap: round; }
              .circle-open { fill: #FAF9F6; stroke: #C5A059; stroke-width: 2; }
              .text-main { font-family: 'Inter', system-ui, sans-serif; font-size: 16px; font-weight: bold; fill: #C5A059; }
              .text-sub { font-family: 'Inter', system-ui, sans-serif; font-size: 14px; fill: #666; }
            `}
          </style>
          <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#2C2C2E" />
          </marker>
          <marker id="arrow-reverse" viewBox="0 0 10 10" refX="2" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 10 0 L 0 5 L 10 10 z" fill="#2C2C2E" />
          </marker>
        </defs>

        {/* Text explanation */}
        <text x="300" y="40" className="text-main" textAnchor="middle">Valid Region: |x| &lt; 1</text>
        <text x="300" y="140" className="text-sub" textAnchor="middle">Series converges</text>

        {/* Number line */}
        <line x1="50" y1="80" x2="550" y2="80" className="axis" markerEnd="url(#arrow)" markerStart="url(#arrow-reverse)"/>
        
        {/* Valid Region Highlight (placed behind circles) */}
        <line x1="150" y1="80" x2="450" y2="80" className="highlight"/>
        
        {/* Markers */}
        <line x1="150" y1="70" x2="150" y2="90" className="tick"/>
        <line x1="300" y1="70" x2="300" y2="90" className="tick"/>
        <line x1="450" y1="70" x2="450" y2="90" className="tick"/>
        
        {/* Open circles for strict inequality */}
        <circle cx="150" cy="80" r="6" className="circle-open"/>
        <circle cx="450" cy="80" r="6" className="circle-open"/>
        
        {/* Labels */}
        <text x="150" y="115" className="label" textAnchor="middle">-1</text>
        <text x="300" y="115" className="label" textAnchor="middle">0</text>
        <text x="450" y="115" className="label" textAnchor="middle">1</text>
      </svg>
    </div>
  );
};
