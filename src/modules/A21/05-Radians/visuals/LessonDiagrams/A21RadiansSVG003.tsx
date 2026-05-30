import React from 'react';

export const A21RadiansSVG003: React.FC = () => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: '#FAF9F6', padding: '2rem', borderRadius: '12px', overflowX: 'auto' }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 350" width="400" height="350" style={{ minWidth: '300px' }}>
        
        {/* Full Sector Base Background */}
        <path d="M 150 250 L 300 250 A 150 150 0 0 0 225 120.1 Z" fill="#FFFFFF" stroke="none" />
        
        {/* Triangle Area (Base) */}
        <path d="M 150 250 L 300 250 L 225 120.1 Z" fill="#FFFFFF" stroke="#2C2C2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        
        {/* Segment Area (Shaded Gold) */}
        <path d="M 300 250 A 150 150 0 0 0 225 120.1 L 300 250 Z" fill="#C5A059" fillOpacity="0.2" stroke="#C5A059" strokeWidth="2" strokeLinejoin="round" />
        
        {/* Angle Arc */}
        <path d="M 190 250 A 40 40 0 0 0 170 215.36" fill="none" stroke="#2C2C2E" strokeWidth="2" />
        
        {/* Radii Labels */}
        <text x="210" y="270" fontFamily="Inter, system-ui, sans-serif" fontSize="20" fontStyle="italic" fill="#2C2C2E">r</text>
        <text x="165" y="180" fontFamily="Inter, system-ui, sans-serif" fontSize="20" fontStyle="italic" fill="#2C2C2E">r</text>
        
        {/* Angle Label */}
        <text x="195" y="235" fontFamily="Inter, system-ui, sans-serif" fontSize="20" fontStyle="italic" fill="#2C2C2E">θ</text>
        
        {/* Segment Label */}
        <text x="285" y="190" fontFamily="Inter, system-ui, sans-serif" fontSize="16" fontWeight="bold" fill="#C5A059">Segment</text>
        
        {/* Center Point */}
        <circle cx="150" cy="250" r="4" fill="#2C2C2E" />
      </svg>
    </div>
  );
};
