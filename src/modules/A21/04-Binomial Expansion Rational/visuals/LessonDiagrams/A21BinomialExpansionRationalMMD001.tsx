import React from 'react';

export const A21BinomialExpansionRationalMMD001: React.FC = () => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: '#FAF9F6', padding: '2rem', borderRadius: '12px', overflowX: 'auto' }}>
      <svg width="600" height="700" viewBox="0 0 600 700" xmlns="http://www.w3.org/2000/svg" style={{ fontFamily: 'Inter, system-ui, sans-serif', minWidth: '500px' }}>
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
        
        {/* Branch Lines from Decision */}
        <line x1="300" y1="180" x2="150" y2="180" stroke="#C5A059" strokeWidth="2" />
        <line x1="150" y1="180" x2="150" y2="220" stroke="#C5A059" strokeWidth="2" markerEnd="url(#arrow)" />
        
        <line x1="300" y1="180" x2="450" y2="180" stroke="#C5A059" strokeWidth="2" />
        <line x1="450" y1="180" x2="450" y2="220" stroke="#C5A059" strokeWidth="2" markerEnd="url(#arrow)" />

        {/* Vertical lines on No side */}
        <line x1="450" y1="280" x2="450" y2="320" stroke="#C5A059" strokeWidth="2" markerEnd="url(#arrow)" />
        <line x1="450" y1="380" x2="450" y2="420" stroke="#C5A059" strokeWidth="2" markerEnd="url(#arrow)" />
        <line x1="450" y1="480" x2="450" y2="520" stroke="#C5A059" strokeWidth="2" markerEnd="url(#arrow)" />

        {/* Lines joining back to validity */}
        <line x1="150" y1="280" x2="150" y2="600" stroke="#C5A059" strokeWidth="2" />
        <line x1="150" y1="600" x2="300" y2="600" stroke="#C5A059" strokeWidth="2" markerEnd="url(#arrow)" />
        <line x1="450" y1="580" x2="450" y2="600" stroke="#C5A059" strokeWidth="2" />
        <line x1="450" y1="600" x2="300" y2="600" stroke="#C5A059" strokeWidth="2" markerEnd="url(#arrow)" />

        {/* Yes/No Labels */}
        <text x="220" y="170" fill="#2C2C2E" fontSize="14" fontWeight="600">Yes</text>
        <text x="380" y="170" fill="#2C2C2E" fontSize="14" fontWeight="600">No</text>

        {/* Box: Start */}
        <g filter="url(#shadow)">
          <rect x="150" y="10" width="300" height="50" rx="8" fill="#FFFFFF" stroke="#E5E5EA" strokeWidth="2" />
          <text x="300" y="40" textAnchor="middle" fill="#2C2C2E" fontSize="16" fontWeight="bold">Expression to expand</text>
        </g>

        {/* Box: Decision */}
        <g filter="url(#shadow)">
          <polygon points="300,100 420,140 300,180 180,140" fill="#FFFFFF" stroke="#C5A059" strokeWidth="2" />
          <text x="300" y="135" textAnchor="middle" fill="#2C2C2E" fontSize="14" fontWeight="600">Is the first term</text>
          <text x="300" y="155" textAnchor="middle" fill="#2C2C2E" fontSize="14" fontWeight="600">inside exactly 1?</text>
        </g>

        {/* Box: Yes branch */}
        <g filter="url(#shadow)">
          <rect x="30" y="220" width="240" height="60" rx="8" fill="#FCF8F2" stroke="#E5E5EA" strokeWidth="2" />
          <text x="150" y="245" textAnchor="middle" fill="#2C2C2E" fontSize="14" fontWeight="bold">Apply formula directly:</text>
          <text x="150" y="265" textAnchor="middle" fill="#2C2C2E" fontSize="14">1 + nx + ...</text>
        </g>

        {/* Boxes: No branch */}
        <g filter="url(#shadow)">
          <rect x="330" y="220" width="240" height="60" rx="8" fill="#FFFFFF" stroke="#E5E5EA" strokeWidth="2" />
          <text x="450" y="255" textAnchor="middle" fill="#2C2C2E" fontSize="14">Factor out the first term 'a'</text>
        </g>

        <g filter="url(#shadow)">
          <rect x="330" y="320" width="240" height="60" rx="8" fill="#FFFFFF" stroke="#E5E5EA" strokeWidth="2" />
          <text x="450" y="345" textAnchor="middle" fill="#2C2C2E" fontSize="14">Apply power 'n' to 'a'</text>
          <text x="450" y="365" textAnchor="middle" fill="#2C2C2E" fontSize="14">and to the new bracket</text>
        </g>

        <g filter="url(#shadow)">
          <rect x="330" y="420" width="240" height="60" rx="8" fill="#FCF8F2" stroke="#E5E5EA" strokeWidth="2" />
          <text x="450" y="445" textAnchor="middle" fill="#2C2C2E" fontSize="14" fontWeight="bold">Expand the new bracket:</text>
          <text x="450" y="465" textAnchor="middle" fill="#2C2C2E" fontSize="14">1 + n(b/a)x + ...</text>
        </g>

        <g filter="url(#shadow)">
          <rect x="330" y="520" width="240" height="60" rx="8" fill="#FFFFFF" stroke="#E5E5EA" strokeWidth="2" />
          <text x="450" y="545" textAnchor="middle" fill="#2C2C2E" fontSize="14">Multiply every term by</text>
          <text x="450" y="565" textAnchor="middle" fill="#2C2C2E" fontSize="14" fontWeight="bold">aⁿ</text>
        </g>

        {/* Box: Combine at Validity */}
        <g filter="url(#shadow)">
          <rect x="180" y="620" width="240" height="60" rx="8" fill="#FAF5F5" stroke="#C5A059" strokeWidth="2" />
          <text x="300" y="645" textAnchor="middle" fill="#2C2C2E" fontSize="14" fontWeight="bold">Determine validity:</text>
          <text x="300" y="665" textAnchor="middle" fill="#2C2C2E" fontSize="14">| x term | &lt; 1</text>
        </g>

      </svg>
    </div>
  );
};
