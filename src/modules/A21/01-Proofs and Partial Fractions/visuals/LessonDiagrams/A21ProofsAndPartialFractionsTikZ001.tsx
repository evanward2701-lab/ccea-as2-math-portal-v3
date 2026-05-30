import React from 'react';

export const A21ProofsAndPartialFractionsTikZ001: React.FC = () => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: '#FAF9F6', padding: '2rem', borderRadius: '12px' }}>
      <svg viewBox="0 0 700 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <style>
            {`
              .text-main { font-family: 'Inter', system-ui, sans-serif; font-size: 16px; font-weight: 600; fill: #2C2C2E; }
              .text-sub { font-family: 'Times New Roman', serif; font-size: 15px; font-style: italic; fill: #666; }
              .ellipse-real { fill: #FFFFFF; stroke: #E5E5EA; stroke-width: 2; }
              .ellipse-rational { fill: #FAF9F6; stroke: #D8D8DF; stroke-width: 2; }
              .ellipse-integer { fill: #FFFFFF; stroke: #C5A059; stroke-width: 2; }
              .ellipse-natural { fill: #FCF8F2; stroke: #C5A059; stroke-width: 3; }
            `}
          </style>
          <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.04" floodColor="#2C2C2E" />
          </filter>
        </defs>

        <g transform="translate(350, 250)">
          {/* Real Numbers */}
          <ellipse cx="0" cy="0" rx="320" ry="220" className="ellipse-real" filter="url(#shadow)" />
          <text x="0" y="-180" textAnchor="middle" className="text-main">Real Numbers (ℝ)</text>
          <text x="180" y="-60" textAnchor="middle" className="text-main" style={{fontWeight: 'normal', fill: '#666'}}>Irrationals</text>
          <text x="180" y="-40" textAnchor="middle" className="text-sub">√2, π, e</text>

          {/* Rational Numbers */}
          <ellipse cx="-40" cy="20" rx="250" ry="180" className="ellipse-rational" filter="url(#shadow)" />
          <text x="-40" y="-130" textAnchor="middle" className="text-main">Rational Numbers (ℚ)</text>
          <text x="80" y="20" textAnchor="middle" className="text-sub">1/2, -0.75, 22/7</text>

          {/* Integers */}
          <ellipse cx="-80" cy="40" rx="180" ry="140" className="ellipse-integer" filter="url(#shadow)" />
          <text x="-80" y="-60" textAnchor="middle" className="text-main">Integers (ℤ)</text>
          <text x="0" y="60" textAnchor="middle" className="text-sub">-3, -1, 0</text>

          {/* Natural Numbers */}
          <ellipse cx="-120" cy="60" rx="110" ry="100" className="ellipse-natural" filter="url(#shadow)" />
          <text x="-120" y="0" textAnchor="middle" className="text-main">Natural (ℕ)</text>
          <text x="-120" y="50" textAnchor="middle" className="text-sub">1, 2, 3, ...</text>
        </g>
      </svg>
    </div>
  );
};
