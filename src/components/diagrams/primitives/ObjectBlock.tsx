import React from 'react';
import { themeColors } from '../../../types/mechanicsTheme';

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
  // Sleek, minimal dark-mode fill
  const fillColor = 'rgba(40, 44, 52, 0.8)';

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
          strokeWidth={2}
          fill={fillColor}
        />
        {massLabel && (
          <text
            x={cx}
            y={cy}
            fill={themeColors.connector}
            textAnchor="middle"
            dominantBaseline="central"
            fontSize="14"
            fontWeight="500"
            fontFamily="system-ui, -apple-system, sans-serif"
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
        strokeWidth={2}
        fill={fillColor}
        rx={6} // Subtle rounded corners for a premium feel
        ry={6}
      />
      {massLabel && (
        <text
          x={x + width / 2}
          y={y + height / 2}
          fill={themeColors.connector}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize="14"
          fontWeight="500"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          {massLabel}
        </text>
      )}
    </g>
  );
};
