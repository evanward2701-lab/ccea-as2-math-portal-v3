import React from 'react';
import { themeColors } from '@/core/types/mechanicsTheme';
import { SemanticColor } from '@/core/types/mechanicsTheme';

const ARROW_HEAD_STROKE = 1.5;

export const ArrowLibrary = () => (
  <defs>
    {/* 1. Standard Arrows */}
    {(Object.keys(themeColors) as SemanticColor[]).map((type) => (
      <marker
        key={`arrow-${type}`}
        id={`arrow-${type}`}
        viewBox="0 0 10 10" refX="8" refY="5"
        markerWidth="6" markerHeight="6" orient="auto"
      >
        <path d="M 0 0 L 10 5 L 0 10 z" fill={themeColors[type]} />
      </marker>
    ))}

    {/* 2. Acceleration: Double Head */}
    {(Object.keys(themeColors) as SemanticColor[]).map((type) => (
      <marker
        key={`arrow-double-${type}`}
        id={`arrow-double-${type}`}
        viewBox="0 0 10 10" refX="8" refY="5"
        markerWidth="8" markerHeight="8" orient="auto"
      >
        <path d="M 0 0 L 5 5 L 0 10 M 4 0 L 9 5 L 4 10" 
              stroke={themeColors[type]} strokeWidth={ARROW_HEAD_STROKE} fill="none" />
      </marker>
    ))}

    {/* 3. Tension/Tick: Dot */}
    {(Object.keys(themeColors) as SemanticColor[]).map((type) => (
      <marker
        key={`dot-${type}`}
        id={`dot-${type}`}
        viewBox="0 0 10 10" refX="5" refY="5"
        markerWidth="4" markerHeight="4" orient="auto"
      >
        <circle cx="5" cy="5" r="3" fill={themeColors[type]} />
      </marker>
    ))}
  </defs>
);