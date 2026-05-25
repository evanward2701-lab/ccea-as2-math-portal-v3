import React from 'react';
import { cn } from '@/core/utils/cn';
import { themeColors } from '@/core/types/mechanicsTheme';

export interface ParticleProps extends React.SVGProps<SVGCircleElement> {
  cx: number;
  cy: number;
  r?: number;
  className?: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
}

export const Particle: React.FC<ParticleProps> = ({
  cx,
  cy,
  r = 6,
  className,
  fill = '#e4e4e7', // zinc-200
  stroke,
  strokeWidth,
  ...props
}) => {
  return (
    <circle
      cx={cx}
      cy={cy}
      r={r}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      className={cn('transition-all duration-300', className)}
      {...props}
    />
  );
};

export interface PulleyProps {
  cx: number;
  cy: number;
  r?: number;
  className?: string;
  showCenter?: boolean;
}

export const Pulley: React.FC<PulleyProps> = ({
  cx,
  cy,
  r = 12,
  className,
  showCenter = true,
}) => {
  return (
    <g className={cn('pulley-primitive', className)}>
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill="#141417" // match diagram background
        stroke="#94a3b8" // slate-400
        strokeWidth={2}
      />
      {showCenter && (
        <circle
          cx={cx}
          cy={cy}
          r={r * 0.15}
          fill="#64748b" // slate-500
        />
      )}
    </g>
  );
};

export interface SupportSurfaceProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  rough?: boolean;
  className?: string;
  stroke?: string;
  strokeWidth?: number;
}

export const SupportSurface: React.FC<SupportSurfaceProps> = ({
  x1,
  y1,
  x2,
  y2,
  rough = false,
  className,
  stroke = '#52525b', // zinc-600
  strokeWidth = 3,
}) => {
  // Calculate hatch marks if rough
  const length = Math.hypot(x2 - x1, y2 - y1);
  const angle = Math.atan2(y2 - y1, x2 - x1);
  
  const numHatchMarks = Math.floor(length / 15);
  const hatchMarks = Array.from({ length: numHatchMarks }).map((_, i) => {
    // Distribute evenly
    const fraction = (i + 1) / (numHatchMarks + 1);
    const px = x1 + fraction * (x2 - x1);
    const py = y1 + fraction * (y2 - y1);
    
    // Hatch direction (45 degrees from the surface normal, pointing "down")
    const hatchLength = 10;
    const hatchAngle = angle + Math.PI / 4; 
    
    const hx = px - hatchLength * Math.cos(hatchAngle);
    const hy = py - hatchLength * Math.sin(hatchAngle);
    
    return { px, py, hx, hy };
  });

  return (
    <g className={cn('support-surface', className)}>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      {rough && (
        <g className="rough-hatching opacity-80">
          {hatchMarks.map((hatch, i) => (
            <line
              key={i}
              x1={hatch.px}
              y1={hatch.py}
              x2={hatch.hx}
              y2={hatch.hy}
              stroke="#3f3f46" // zinc-700
              strokeWidth={1.5}
            />
          ))}
        </g>
      )}
    </g>
  );
};
