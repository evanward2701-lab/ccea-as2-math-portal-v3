import React from 'react';

export interface DiagramLabelProps {
  position: { top: string; left: string };
  children: React.ReactNode;
  className?: string;
}

/**
 * An HTML-based overlay for rendering high-quality text over an SVG diagram.
 * Refined for a luxury-minimalist aesthetic: smaller font size and muted colors.
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
        transform: 'tranzinc(-50%, -50%)',
        pointerEvents: 'none',
        color: '#a1a1aa', // zinc-400 for a muted, receding effect
        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        fontSize: '12px', // precise, smaller architectural labels
        fontWeight: 500,
        textShadow: '0 1px 2px rgba(0,0,0,0.3)', // subtle shadow for clarity
      }}
    >
      {children}
    </div>
  );
};
