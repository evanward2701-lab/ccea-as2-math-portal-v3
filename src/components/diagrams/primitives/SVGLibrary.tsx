import React from 'react';
import { SemanticColor, themeColors } from '../../../types/mechanicsTheme';

/**
 * SVGLibrary defines the standard markers (arrows, dots) for use in diagrams.
 * Updated for a luxury-minimalist aesthetic: sharper, more precise architectural pointers.
 */
export const SVGLibrary: React.FC = () => {
  const colors = Object.entries(themeColors) as [SemanticColor, string][];

  return (
    <svg aria-hidden="true" style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}>
      <defs>
        {colors.map(([type, color]) => (
          <React.Fragment key={type}>
            {/* Standard forward arrow - sharp architectural pointer */}
            <marker
              id={`arrow-${type}`}
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="4"
              markerHeight="4"
              orient="auto-start-reverse"
            >
              <path d="M 0 2 L 10 5 L 0 8 L 2 5 Z" fill={color} />
            </marker>
            {/* Reverse arrow - sharp architectural pointer */}
            <marker
              id={`arrow-reverse-${type}`}
              viewBox="0 0 10 10"
              refX="1"
              refY="5"
              markerWidth="4"
              markerHeight="4"
              orient="auto-start-reverse"
            >
              <path d="M 10 2 L 0 5 L 10 8 L 8 5 Z" fill={color} />
            </marker>
            {/* Dot marker - smaller and more precise */}
            <marker
              id={`dot-${type}`}
              viewBox="0 0 10 10"
              refX="5"
              refY="5"
              markerWidth="3"
              markerHeight="3"
            >
              <circle cx="5" cy="5" r="2" fill={color} />
            </marker>
          </React.Fragment>
        ))}
      </defs>
    </svg>
  );
};
