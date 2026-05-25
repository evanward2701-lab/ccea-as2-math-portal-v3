import React from 'react';
import { themeColors } from '@/core/types/mechanicsTheme';

export interface ObjectBlockProps {
  x: number;
  y: number;
  width: number;
  height: number;
  massLabel?: string;
  isParticle?: boolean;
}

/**
 * Renders an idealized mass (particle or rigid block) for mechanics diagrams.
 * Updated for a luxury-minimalist aesthetic: thinner strokes and muted tones.
 */
export const ObjectBlock: React.FC<ObjectBlockProps> = ({
  x,
  y,
  width,
  height,
  massLabel,
  isParticle = false,
}) => {
  const strokeColor = themeColors.structural;
  // Sleek, minimal semi-transparent fill
  const fillColor = 'rgba(24, 24, 27, 0.4)'; // matches zinc-900 with transparency

  if (isParticle) {
    const radius = Math.min(width, height) / 2;
    const cx = x + width / 2;
    const cy = y + height / 2;

    return (
      <g className="object-particle">
        <circle
          cx={cx}
          cy={cy}
          r={radius}
          stroke={strokeColor}
          strokeWidth={1.5}
          fill={fillColor}
        />
        {massLabel && (
          <text
            x={cx}
            y={cy}
            fill={themeColors.connector}
            textAnchor="middle"
            dominantBaseline="central"
            fontSize="12"
            fontWeight="400"
            fontFamily="serif"
            fontStyle="italic"
          >
            {massLabel}
          </text>
        )}
      </g>
    );
  }

  return (
    <g className="object-block">
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        stroke={strokeColor}
        strokeWidth={1.5}
        fill={fillColor}
        rx={4} // Slightly less rounded for a more precise architectural feel
        ry={4}
      />
      {massLabel && (
        <text
          x={x + width / 2}
          y={y + height / 2}
          fill={themeColors.connector}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize="12"
          fontWeight="400"
          fontFamily="serif"
          fontStyle="italic"
        >
          {massLabel}
        </text>
      )}
    </g>
  );
};
