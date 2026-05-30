import React from 'react';

export const A21ProofsAndPartialFractionsSVG001: React.FC = () => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: '#FAF9F6', padding: '2rem', borderRadius: '12px' }}>
      <svg viewBox="0 0 800 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <style>
            {`
              .text-math { font-family: 'Times New Roman', serif; font-size: 32px; font-style: italic; fill: #2C2C2E; }
              .text-title { font-family: 'Inter', system-ui, sans-serif; font-size: 20px; font-weight: 600; letter-spacing: 1px; }
              .text-sub { font-family: 'Inter', system-ui, sans-serif; font-size: 16px; fill: #666; }
              .line-fraction { stroke: #2C2C2E; stroke-width: 3; }
              .line-illegal { stroke: #D98282; stroke-width: 4; stroke-linecap: round; }
              .line-legal { stroke: #C5A059; stroke-width: 4; stroke-linecap: round; }
              .box-illegal { fill: #FFFFFF; stroke: #E5E5EA; stroke-width: 2; rx: 12; }
              .box-legal { fill: #FFFFFF; stroke: #C5A059; stroke-width: 2; rx: 12; }
            `}
          </style>
          <filter id="subtle-shadow" x="-5%" y="-5%" width="110%" height="110%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.04" floodColor="#2C2C2E" />
          </filter>
        </defs>

        {/* Illegal Move Box */}
        <g filter="url(#subtle-shadow)">
          <rect x="50" y="20" width="320" height="250" className="box-illegal" />
          <text x="210" y="60" textAnchor="middle" className="text-title" fill="#D98282">ILLEGAL MOVE</text>
          <text x="210" y="85" textAnchor="middle" className="text-sub">Cancelling across addition</text>

          {/* Illegal Math */}
          <text x="120" y="160" className="text-math">ac + ab</text>
          <line x1="110" y1="175" x2="230" y2="175" className="line-fraction" />
          <text x="160" y="215" className="text-math">b</text>

          <text x="250" y="185" className="text-math" fill="#D98282">≠</text>
          <text x="280" y="185" className="text-math">ac + a</text>

          {/* Red Slashes for Illegal Cancel */}
          <line x1="195" y1="165" x2="220" y2="135" className="line-illegal" />
          <line x1="160" y1="220" x2="185" y2="190" className="line-illegal" />
        </g>

        {/* Legal Move Box */}
        <g filter="url(#subtle-shadow)">
          <rect x="430" y="20" width="320" height="250" className="box-legal" />
          <text x="590" y="60" textAnchor="middle" className="text-title" fill="#C5A059">LEGAL MOVE</text>
          <text x="590" y="85" textAnchor="middle" className="text-sub">Factorise first, then cancel</text>

          {/* Legal Math */}
          <text x="480" y="160" className="text-math">b(c + a)</text>
          <line x1="470" y1="175" x2="590" y2="175" className="line-fraction" />
          <text x="520" y="215" className="text-math">b</text>

          <text x="610" y="185" className="text-math" fill="#C5A059">=</text>
          <text x="640" y="185" className="text-math">c + a</text>

          {/* Gold Slashes for Legal Cancel */}
          <line x1="475" y1="165" x2="500" y2="135" className="line-legal" />
          <line x1="520" y1="220" x2="545" y2="190" className="line-legal" />
        </g>
      </svg>
    </div>
  );
};
