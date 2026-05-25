import React from 'react';
import { SemanticColor, themeColors, ArrowMarker } from '@/core/types/mechanicsTheme';
import { cn } from '@/core/utils/cn';

export interface VectorArrowProps {
  x1: number; y1: number; x2: number; y2: number;
  type: SemanticColor;
  marker?: ArrowMarker | 'acceleration' | 'tension' | 'dot';
  dashed?: boolean;
}

const ARROW_STROKE_WIDTH = 1.5;

export const VectorArrow: React.FC<VectorArrowProps> = ({
  x1, y1, x2, y2, type, marker = 'default', dashed = false 
}) => {
  const color = themeColors[type];

  const getMarkerEnd = () => {
    switch (marker) {
      case 'acceleration': return `url(#arrow-double-${type})`;
      case 'tension':      return `url(#dot-${type})`;
      case 'dot':          return `url(#dot-${type})`;
      default:             return `url(#arrow-${type})`;
    }
  };

  return (
    <line
      x1={x1} y1={y1} x2={x2} y2={y2}
      stroke={color}
      strokeWidth={ARROW_STROKE_WIDTH} 
      strokeDasharray={dashed ? '4,4' : 'none'}
      strokeLinecap="round"
      markerEnd={getMarkerEnd()}
      className={cn("transition-colors duration-300")}
    />
  );
};