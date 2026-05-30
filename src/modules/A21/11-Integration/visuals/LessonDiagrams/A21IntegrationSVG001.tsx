import React from 'react';

export const A21IntegrationSVG001: React.FC = () => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: '#FAF9F6', padding: '2rem', borderRadius: '12px', overflowX: 'auto' }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 300" width="100%" height="100%" style={{ minWidth: '400px', maxWidth: '500px' }}>
        <defs>
          <style>
            {`
              .math-large { font-family: 'Inter', system-ui, sans-serif; font-size: 32px; font-style: italic; fill: #2C2C2E; font-weight: 600; }
              .math-bold { font-family: 'Inter', system-ui, sans-serif; font-size: 20px; font-style: italic; font-weight: bold; }
              .label { font-family: 'Inter', system-ui, sans-serif; font-size: 14px; fill: #666; }
              .arrow-down { stroke: #666; stroke-width: 2; stroke-dasharray: 4 4; }
              .arrow-diag { stroke: #0984E3; stroke-width: 3; }
              .arrow-horiz { stroke: #D63031; stroke-width: 3; }
              .box-bg { fill: #FAF9F6; }
            `}
          </style>
          <marker id="arrow-gray" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#666" />
          </marker>
          <marker id="arrow-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#0984E3" />
          </marker>
          <marker id="arrow-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#D63031" />
          </marker>
        </defs>

        {/* Title */}
        <text x="250" y="40" fontFamily="'Inter', sans-serif" fontSize="20" fontWeight="600" textAnchor="middle" fill="#2C2C2E">Integration by Parts Pattern</text>

        {/* Math Elements */}
        <text x="150" y="120" className="math-large" textAnchor="middle">u</text>
        <text x="350" y="120" className="math-large" textAnchor="middle">v'</text>
        
        <text x="150" y="230" className="math-large" textAnchor="middle">u'</text>
        <text x="350" y="230" className="math-large" textAnchor="middle">v</text>

        {/* Vertical Operations */}
        <text x="90" y="170" className="label" textAnchor="middle">Differentiate</text>
        <line x1="150" y1="135" x2="150" y2="195" className="arrow-down" markerEnd="url(#arrow-gray)" />

        <text x="410" y="170" className="label" textAnchor="middle">Integrate</text>
        <line x1="350" y1="135" x2="350" y2="195" className="arrow-down" markerEnd="url(#arrow-gray)" />

        {/* Diagonal Multiplication (uv) */}
        <line x1="170" y1="125" x2="330" y2="215" className="arrow-diag" markerEnd="url(#arrow-blue)" />
        <rect x="230" y="155" width="40" height="30" className="box-bg" />
        <text x="250" y="176" className="math-bold" textAnchor="middle" fill="#0984E3">uv</text>

        {/* Horizontal Integration (- integral v u') */}
        <line x1="320" y1="220" x2="180" y2="220" className="arrow-horiz" markerEnd="url(#arrow-red)" />
        <rect x="200" y="205" width="100" height="30" className="box-bg" />
        <text x="250" y="226" className="math-bold" textAnchor="middle" fill="#D63031">- ∫ v u' dx</text>

      </svg>
    </div>
  );
};
