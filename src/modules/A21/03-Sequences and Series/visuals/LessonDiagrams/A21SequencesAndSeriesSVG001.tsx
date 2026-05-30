import React from 'react';

export const A21SequencesAndSeriesSVG001: React.FC = () => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: '#FAF9F6', padding: '2rem', borderRadius: '12px' }}>
      <svg viewBox="0 0 500 280" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <style>
            {`
              .rect-base { stroke: #E5E5EA; stroke-width: 2; }
              .text-main { font-family: 'Inter', system-ui, sans-serif; font-weight: 600; fill: #2C2C2E; }
              .text-light { fill: #FFFFFF; }
              .text-eq { font-family: 'Times New Roman', serif; font-size: 20px; font-style: italic; fill: #2C2C2E; }
            `}
          </style>
          <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.04" floodColor="#2C2C2E" />
          </filter>
        </defs>

        <g transform="translate(30, 20)">
          {/* First Unit (1) */}
          {/* We'll use a gradient of Gold and Charcoal or just alternating luxury tones */}
          {/* Base Unit = Deep Charcoal */}
          <rect x="0" y="0" width="200" height="200" fill="#2C2C2E" className="rect-base" filter="url(#shadow)" />
          <text x="100" y="112" fontSize="48" className="text-main text-light" textAnchor="middle">1</text>
          
          {/* Second Unit (Subdivided) */}
          <g transform="translate(200, 0)">
            {/* 1/2 = Subtle Gold */}
            <rect x="0" y="0" width="100" height="200" fill="#C5A059" className="rect-base" filter="url(#shadow)" />
            <text x="50" y="110" fontSize="32" className="text-main text-light" textAnchor="middle">1/2</text>
            
            {/* 1/4 = Soft Neutral Grey */}
            <rect x="100" y="0" width="100" height="100" fill="#E5E5EA" className="rect-base" filter="url(#shadow)" />
            <text x="150" y="60" fontSize="24" className="text-main" textAnchor="middle">1/4</text>
            
            {/* 1/8 = Deep Charcoal (lighter opacity or just charcoal) */}
            <rect x="100" y="100" width="50" height="100" fill="#2C2C2E" className="rect-base" filter="url(#shadow)" />
            <text x="125" y="156" fontSize="16" className="text-main text-light" textAnchor="middle">1/8</text>
            
            {/* 1/16 = Subtle Gold */}
            <rect x="150" y="100" width="50" height="50" fill="#C5A059" className="rect-base" filter="url(#shadow)" />
            <text x="175" y="132" fontSize="12" className="text-main text-light" textAnchor="middle">1/16</text>
            
            {/* 1/32 = Soft Neutral Grey */}
            <rect x="150" y="150" width="25" height="50" fill="#E5E5EA" className="rect-base" />
            
            {/* 1/64 = Deep Charcoal */}
            <rect x="175" y="150" width="25" height="25" fill="#2C2C2E" className="rect-base" />
            
            {/* Remaining infinite space = Subtle Gold */}
            <rect x="175" y="175" width="25" height="25" fill="#C5A059" className="rect-base" />
          </g>
          
          {/* Equation at the bottom */}
          <text x="200" y="240" className="text-eq" textAnchor="middle">
            1 + 1/2 + 1/4 + 1/8 + 1/16 + ... = 2
          </text>
        </g>
      </svg>
    </div>
  );
};
