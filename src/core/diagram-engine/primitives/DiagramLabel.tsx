import React from 'react';
import { cn } from '@/core/utils/cn';
import { MathInline } from '@/core/components/MathText';

export interface DiagramLabelProps {
  /** X coordinate as a percentage (0-100) */
  x: number | string;
  /** Y coordinate as a percentage (0-100) */
  y: number | string;
  /** Optional text to render through MathInline (KaTeX support) */
  text?: string;
  anchor?: 'center' | 'start' | 'end' | 'top' | 'bottom';
  offsetX?: number | string;
  offsetY?: number | string;
  children?: React.ReactNode;
  className?: string;
}

/**
 * Compatibility primitive for old imports from
 * `@/core/diagram-engine/primitives/DiagramLabel`.
 */
export const DiagramLabel: React.FC<DiagramLabelProps> = ({
  x,
  y,
  text,
  anchor = 'center',
  offsetX = 0,
  offsetY = 0,
  children,
  className = '',
}) => {
  let anchorTransform = 'translate(-50%, -50%)';
  if (anchor === 'start') {
    anchorTransform = 'translate(0, -50%)';
  } else if (anchor === 'end') {
    anchorTransform = 'translate(-100%, -50%)';
  } else if (anchor === 'top') {
    anchorTransform = 'translate(-50%, 0)';
  } else if (anchor === 'bottom') {
    anchorTransform = 'translate(-50%, -100%)';
  }

  const left = typeof x === 'number' ? `${x}%` : x.includes('%') ? x : `${x}%`;
  const top = typeof y === 'number' ? `${y}%` : y.includes('%') ? y : `${y}%`;

  return (
    <div
      className={cn(
        'diagram-label absolute pointer-events-none text-zinc-400 font-sans text-xs font-medium drop-shadow-sm transition-opacity duration-300 wrap-break-word',
        className
      )}
      style={{
        top,
        left,
        transform: `translate(calc(${offsetX}), calc(${offsetY})) ${anchorTransform}`,
      }}
    >
      {text ? <MathInline content={text} /> : children}
    </div>
  );
};
