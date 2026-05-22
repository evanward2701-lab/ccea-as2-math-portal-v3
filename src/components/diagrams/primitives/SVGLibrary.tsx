import React from 'react';
import { SemanticColor, themeColors } from '../../../types/mechanicsTheme';

/**
 * SVGLibrary defines the standard markers (arrows, dots) for use in diagrams.
 * This should be rendered once per SVG context or globally if referencing by ID.
 */
export const SVGLibrary: React.FC = () => {
  const colors = Object.entries(themeColors) as [SemanticColor, string][];

  return (
    <svg aria-hidden="true" style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}>
      <defs>
        {colors.map(([type, color]) => (
          <React.Fragment key={type}>
            {/* Standard forward arrow */}
            <marker
              id={`arrow-${type}`}
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="5"
              markerHeight="5"
              orient="auto-start-reverse"
            >
              <path d="M 0 1 L 10 5 L 0 9 z" fill={color} />
            </marker>
            {/* Reverse arrow */}
            <marker
              id={`arrow-reverse-${type}`}
              viewBox="0 0 10 10"
              refX="2"
              refY="5"
              markerWidth="5"
              markerHeight="5"
              orient="auto-start-reverse"
            >
              <path d="M 10 1 L 0 5 L 10 9 z" fill={color} />
            </marker>
            {/* Dot marker */}
            <marker
              id={`dot-${type}`}
              viewBox="0 0 10 10"
              refX="5"
              refY="5"
              markerWidth="4"
              markerHeight="4"
            >
              <circle cx="5" cy="5" r="3" fill={color} />
            </marker>
          </React.Fragment>
        ))}
      </defs>
    </svg>
  );
};
