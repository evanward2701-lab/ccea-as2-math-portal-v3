import React from 'react';
import { SemanticColor, themeColors } from '@/core/types/mechanicsTheme';

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
            {/* Standard forward arrow - bold textbook pointer */}
            <marker
              id={`arrow-${type}`}
              viewBox="0 0 10 10"
              refX="9.5"
              refY="5"
              markerWidth="7.5"
              markerHeight="7.5"
              orient="auto-start-reverse"
            >
              <path d="M 0 2 L 10 5 L 0 8 L 2.5 5 Z" fill={color} />
            </marker>
            {/* Reverse arrow - bold textbook pointer */}
            <marker
              id={`arrow-reverse-${type}`}
              viewBox="0 0 10 10"
              refX="0.5"
              refY="5"
              markerWidth="7.5"
              markerHeight="7.5"
              orient="auto-start-reverse"
            >
              <path d="M 10 2 L 0 5 L 10 8 L 7.5 5 Z" fill={color} />
            </marker>
            {/* Dot marker - smaller and more precise */}
            <marker
              id={`dot-${type}`}
              viewBox="0 0 10 10"
              refX="5"
              refY="5"
              markerWidth="4"
              markerHeight="4"
            >
              <circle cx="5" cy="5" r="2" fill={color} />
            </marker>
            {/* Double-chevron marker for acceleration vectors */}
            <marker
              id={`arrow-double-${type}`}
              viewBox="0 0 14 10"
              refX="13"
              refY="5"
              markerWidth="10"
              markerHeight="10"
              orient="auto-start-reverse"
            >
              <path d="M 0 2 L 6 5 L 0 8 L 1.5 5 Z" fill={color} opacity="0.55" />
              <path d="M 5 2 L 14 5 L 5 8 L 7.25 5 Z" fill={color} />
            </marker>
          </React.Fragment>
        ))}
      </defs>
    </svg>
  );
};
