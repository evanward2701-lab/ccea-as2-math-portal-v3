import React from 'react';

export const A21DifferentiationSVG001: React.FC = () => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: '#FAF9F6', padding: '2rem', borderRadius: '12px', overflowX: 'auto' }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="100%" height="100%" style={{ minWidth: '300px', maxWidth: '400px' }}>
        <defs>
          <style>
            {`
              .math { font-family: 'Inter', system-ui, sans-serif; font-size: 24px; font-weight: 600; fill: #2C2C2E; font-style: italic; }
              .label { font-family: 'Inter', system-ui, sans-serif; font-size: 14px; font-weight: 600; }
              .diff-path { stroke: #D63031; stroke-width: 3; fill: none; }
              .int-path { stroke: #0984E3; stroke-width: 3; fill: none; }
            `}
          </style>
          <marker id="arrowhead-down" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#D63031" />
          </marker>
          <marker id="arrowhead-up" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#0984E3" />
          </marker>
        </defs>

        {/* Text nodes */}
        <text x="150" y="50" textAnchor="middle" className="math">sin x</text>
        <text x="150" y="120" textAnchor="middle" className="math">cos x</text>
        <text x="150" y="190" textAnchor="middle" className="math">-sin x</text>
        <text x="150" y="260" textAnchor="middle" className="math">-cos x</text>

        {/* Down Arrows (Differentiation) */}
        <path d="M 130 60 L 130 90" className="diff-path" markerEnd="url(#arrowhead-down)" />
        <path d="M 130 130 L 130 160" className="diff-path" markerEnd="url(#arrowhead-down)" />
        <path d="M 130 200 L 130 230" className="diff-path" markerEnd="url(#arrowhead-down)" />

        {/* Up Arrows (Integration) */}
        <path d="M 170 90 L 170 60" className="int-path" markerEnd="url(#arrowhead-up)" />
        <path d="M 170 160 L 170 130" className="int-path" markerEnd="url(#arrowhead-up)" />
        <path d="M 170 230 L 170 200" className="int-path" markerEnd="url(#arrowhead-up)" />

        {/* Loop back arrows */}
        <path d="M 110 250 C 40 200, 40 100, 110 50" strokeDasharray="6,4" className="diff-path" markerEnd="url(#arrowhead-down)" />
        <path d="M 190 50 C 260 100, 260 200, 190 250" strokeDasharray="6,4" className="int-path" markerEnd="url(#arrowhead-up)" />

        {/* Side Labels */}
        <text x="50" y="150" className="label" textAnchor="middle" fill="#D63031" transform="rotate(-90 50,150)">Differentiate</text>
        <text x="250" y="150" className="label" textAnchor="middle" fill="#0984E3" transform="rotate(90 250,150)">Integrate</text>
      </svg>
    </div>
  );
};
