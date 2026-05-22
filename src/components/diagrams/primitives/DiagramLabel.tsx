import React from 'react';

export interface DiagramLabelProps {
  position: { top: string; left: string };
  children: React.ReactNode;
  className?: string;
}

/**
 * An HTML-based overlay for rendering high-quality text over an SVG diagram
 * without relying on <foreignObject>, ensuring consistent typography and crisp rendering.
 */
export const DiagramLabel: React.FC<DiagramLabelProps> = ({
  position,
  children,
  className = '',
}) => {
  return (
    <div
      className={`diagram-label ${className}`}
      style={{
        position: 'absolute',
        top: position.top,
        left: position.left,
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        color: '#e2e8f0', // Crisp, light text for dark mode
        fontFamily: 'system-ui, -apple-system, sans-serif',
        fontSize: '0.875rem',
        fontWeight: 500,
        textShadow: '0 2px 4px rgba(0,0,0,0.5)', // Better legibility over lines
      }}
    >
      {children}
    </div>
  );
};
