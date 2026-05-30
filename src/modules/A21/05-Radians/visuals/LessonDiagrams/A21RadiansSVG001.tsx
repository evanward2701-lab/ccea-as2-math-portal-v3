import React from 'react';

export const A21RadiansSVG001: React.FC = () => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: '#FAF9F6', padding: '2rem', borderRadius: '12px', overflowX: 'auto' }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400" style={{ minWidth: '300px' }}>
        <defs>
          <marker id="arrow-gold" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#C5A059" />
          </marker>
        </defs>
        
        {/* Circle outline (faint) */}
        <circle cx="200" cy="200" r="150" fill="none" stroke="#E5E5EA" strokeWidth="2" strokeDasharray="5,5" />
        
        {/* Sector Background */}
        <path d="M 200 200 L 350 200 A 150 150 0 0 0 281.05 73.66 Z" fill="#FCF8F2" stroke="none" />
        
        {/* Sector Lines (Radii) */}
        <line x1="200" y1="200" x2="350" y2="200" stroke="#2C2C2E" strokeWidth="2" strokeLinecap="round" />
        <line x1="200" y1="200" x2="281.05" y2="73.66" stroke="#2C2C2E" strokeWidth="2" strokeLinecap="round" />
        
        {/* Angle Arc */}
        <path d="M 240 200 A 40 40 0 0 0 221.61 166.31" fill="none" stroke="#2C2C2E" strokeWidth="2" />
        
        {/* Radii Labels */}
        <text x="260" y="215" fontFamily="Inter, system-ui, sans-serif" fontSize="18" fontStyle="italic" fill="#2C2C2E">r</text>
        <text x="220" y="130" fontFamily="Inter, system-ui, sans-serif" fontSize="18" fontStyle="italic" fill="#2C2C2E">r</text>
        
        {/* Arc Length Highlight */}
        <path d="M 350 200 A 150 150 0 0 0 281.05 73.66" fill="none" stroke="#C5A059" strokeWidth="4" strokeLinecap="round" />
        
        {/* Arc Length Label Line */}
        <path d="M 365 200 A 165 165 0 0 0 290 60" fill="none" stroke="#C5A059" strokeWidth="1" markerStart="url(#arrow-gold)" markerEnd="url(#arrow-gold)" />
        
        {/* Arc Length Label Text */}
        <text x="340" y="110" fontFamily="Inter, system-ui, sans-serif" fontSize="16" fontWeight="bold" fill="#C5A059">Arc length = r</text>
        
        {/* Angle Label */}
        <text x="245" y="190" fontFamily="Inter, system-ui, sans-serif" fontSize="16" fontWeight="bold" fill="#2C2C2E">1 rad</text>
        
        {/* Center Point */}
        <circle cx="200" cy="200" r="4" fill="#2C2C2E" />
      </svg>
    </div>
  );
};
