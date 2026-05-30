import React from 'react';

export const A21ProofsAndPartialFractionsMMD001: React.FC = () => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: '#FAF9F6', padding: '2rem', borderRadius: '12px' }}>
      <svg width="600" height="850" viewBox="0 0 600 850" xmlns="http://www.w3.org/2000/svg" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#C5A059" />
          </marker>
          <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.05" floodColor="#2C2C2E" />
          </filter>
        </defs>

        {/* Lines */}
        <line x1="300" y1="60" x2="300" y2="100" stroke="#C5A059" strokeWidth="2" markerEnd="url(#arrow)" />
        <line x1="300" y1="150" x2="300" y2="190" stroke="#C5A059" strokeWidth="2" markerEnd="url(#arrow)" />
        <line x1="300" y1="240" x2="300" y2="280" stroke="#C5A059" strokeWidth="2" markerEnd="url(#arrow)" />
        <line x1="300" y1="350" x2="300" y2="390" stroke="#C5A059" strokeWidth="2" markerEnd="url(#arrow)" />
        <line x1="300" y1="470" x2="300" y2="520" stroke="#C5A059" strokeWidth="2" markerEnd="url(#arrow)" />
        <line x1="300" y1="580" x2="300" y2="620" stroke="#C5A059" strokeWidth="2" markerEnd="url(#arrow)" />
        <line x1="300" y1="680" x2="300" y2="720" stroke="#C5A059" strokeWidth="2" markerEnd="url(#arrow)" />

        {/* Branch Lines */}
        <line x1="160" y1="430" x2="80" y2="430" stroke="#C5A059" strokeWidth="2" />
        <line x1="80" y1="430" x2="80" y2="620" stroke="#C5A059" strokeWidth="2" markerEnd="url(#arrow)" />
        
        {/* Yes/No Labels */}
        <text x="310" y="500" fill="#2C2C2E" fontSize="14" fontWeight="600">Yes</text>
        <text x="120" y="420" fill="#2C2C2E" fontSize="14" fontWeight="600">No</text>

        {/* Boxes */}
        <g filter="url(#shadow)">
          <rect x="150" y="10" width="300" height="50" rx="8" fill="#FFFFFF" stroke="#E5E5EA" strokeWidth="2" />
          <text x="300" y="40" textAnchor="middle" fill="#2C2C2E" fontSize="16" fontWeight="bold">Start: Given a statement to prove</text>
        </g>

        <g filter="url(#shadow)">
          <rect x="150" y="100" width="300" height="50" rx="8" fill="#FFFFFF" stroke="#E5E5EA" strokeWidth="2" />
          <text x="300" y="130" textAnchor="middle" fill="#2C2C2E" fontSize="16">Step 1: Negate the statement</text>
        </g>

        <g filter="url(#shadow)">
          <rect x="150" y="190" width="300" height="50" rx="8" fill="#FCF8F2" stroke="#C5A059" strokeWidth="2" />
          <text x="300" y="220" textAnchor="middle" fill="#2C2C2E" fontSize="16" fontWeight="bold">Assume negated statement is TRUE</text>
        </g>

        <g filter="url(#shadow)">
          <rect x="100" y="280" width="400" height="70" rx="8" fill="#FFFFFF" stroke="#E5E5EA" strokeWidth="2" />
          <text x="300" y="310" textAnchor="middle" fill="#2C2C2E" fontSize="16">Step 2: Perform logical mathematical steps</text>
          <text x="300" y="335" textAnchor="middle" fill="#2C2C2E" fontSize="16">based on this assumption</text>
        </g>

        <g filter="url(#shadow)">
          <polygon points="300,390 440,430 300,470 160,430" fill="#FFFFFF" stroke="#E5E5EA" strokeWidth="2" />
          <text x="300" y="425" textAnchor="middle" fill="#2C2C2E" fontSize="16" fontWeight="600">Does this lead to</text>
          <text x="300" y="445" textAnchor="middle" fill="#2C2C2E" fontSize="16" fontWeight="600">a mathematical impossibility?</text>
        </g>

        <g filter="url(#shadow)">
          <rect x="150" y="520" width="300" height="60" rx="8" fill="#FAF5F5" stroke="#E5E5EA" strokeWidth="2" />
          <text x="300" y="555" textAnchor="middle" fill="#2C2C2E" fontSize="16" fontWeight="bold">Step 3: A Contradiction is found!</text>
        </g>

        <g filter="url(#shadow)">
          <rect x="150" y="620" width="300" height="60" rx="8" fill="#FFFFFF" stroke="#E5E5EA" strokeWidth="2" />
          <text x="300" y="655" textAnchor="middle" fill="#2C2C2E" fontSize="16">Conclusion: The assumption must be FALSE</text>
        </g>

        <g filter="url(#shadow)">
          <rect x="150" y="720" width="300" height="60" rx="8" fill="#F4F8F4" stroke="#C5A059" strokeWidth="2" />
          <text x="300" y="755" textAnchor="middle" fill="#2C2C2E" fontSize="16" fontWeight="bold">Therefore, the ORIGINAL statement is TRUE</text>
        </g>

        <g filter="url(#shadow)">
          <rect x="10" y="620" width="140" height="80" rx="8" fill="#FFFFFF" stroke="#E5E5EA" strokeWidth="2" />
          <text x="80" y="655" textAnchor="middle" fill="#2C2C2E" fontSize="14">Check your maths</text>
          <text x="80" y="675" textAnchor="middle" fill="#2C2C2E" fontSize="14">or try a different</text>
          <text x="80" y="695" textAnchor="middle" fill="#2C2C2E" fontSize="14">proof method</text>
        </g>
      </svg>
    </div>
  );
};
