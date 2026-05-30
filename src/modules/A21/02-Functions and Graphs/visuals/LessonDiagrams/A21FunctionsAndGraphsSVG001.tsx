import React from 'react';

export const A21FunctionsAndGraphsSVG001: React.FC = () => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: '#FAF9F6', padding: '2rem', borderRadius: '12px' }}>
      <svg viewBox="0 0 600 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <style>
            {`
              .text-main { font-family: 'Times New Roman', serif; font-size: 24px; font-style: italic; fill: #2C2C2E; }
              .text-label { font-family: 'Times New Roman', serif; font-size: 24px; font-style: italic; }
              .ellipse-set { fill: #FFFFFF; stroke: #E5E5EA; stroke-width: 2; }
              .arrow-line { fill: none; stroke: #C5A059; stroke-width: 3; }
              .arrow-composite { fill: none; stroke: #2C2C2E; stroke-width: 3; }
            `}
          </style>
          <marker id="arrow-gold" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L9,3 z" fill="#C5A059" />
          </marker>
          <marker id="arrow-charcoal" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L9,3 z" fill="#2C2C2E" />
          </marker>
          <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.04" floodColor="#2C2C2E" />
          </filter>
        </defs>

        {/* Ovals representing sets */}
        <ellipse cx="100" cy="150" rx="60" ry="100" className="ellipse-set" filter="url(#shadow)" />
        <ellipse cx="300" cy="150" rx="60" ry="100" className="ellipse-set" filter="url(#shadow)" />
        <ellipse cx="500" cy="150" rx="60" ry="100" className="ellipse-set" filter="url(#shadow)" />
        
        {/* Text inside ovals */}
        <text x="100" y="158" textAnchor="middle" className="text-main">x</text>
        <text x="300" y="158" textAnchor="middle" className="text-main">g(x)</text>
        <text x="500" y="158" textAnchor="middle" className="text-main">fg(x)</text>
        
        {/* Top Arrows */}
        <path d="M 130 100 Q 200 60 270 100" className="arrow-line" markerEnd="url(#arrow-gold)"/>
        <text x="200" y="70" textAnchor="middle" className="text-label" fill="#C5A059">g</text>
        
        <path d="M 330 100 Q 400 60 470 100" className="arrow-line" markerEnd="url(#arrow-gold)"/>
        <text x="400" y="70" textAnchor="middle" className="text-label" fill="#C5A059">f</text>
        
        {/* Bottom Composite Arrow */}
        <path d="M 120 220 Q 300 300 480 220" className="arrow-composite" markerEnd="url(#arrow-charcoal)"/>
        <text x="300" y="280" textAnchor="middle" className="text-label" fill="#2C2C2E">fg</text>
        
      </svg>
    </div>
  );
};
