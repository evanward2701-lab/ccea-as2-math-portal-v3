import React from 'react';
import { SemanticColor, themeColors, ArrowMarker } from '../../../types/mechanicsTheme';

export interface VectorArrowProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  type: SemanticColor;
  marker?: ArrowMarker;
  dashed?: boolean;
}

/**
 * Renders a vector line with optional markers using the semantic theme.
 */
export const VectorArrow: React.FC<VectorArrowProps> = ({
  x1,
  y1,
  x2,
  y2,
  type,
  marker = 'default',
  dashed = false,
}) => {
  const color = themeColors[type];

  let markerEnd: string | undefined = undefined;
  let markerStart: string | undefined = undefined;

  if (marker === 'default') {
    markerEnd = `url(#arrow-${type})`;
  } else if (marker === 'reverse') {
    markerStart = `url(#arrow-reverse-${type})`;
  } else if (marker === 'dot') {
    markerEnd = `url(#dot-${type})`;
  }

  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={color}
      strokeWidth={2}
      strokeDasharray={dashed ? '6,6' : 'none'}
      strokeLinecap="round"
      markerEnd={markerEnd}
      markerStart={markerStart}
    />
  );
};
