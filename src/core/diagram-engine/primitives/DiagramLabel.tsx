import React from 'react';
import { cn } from '@/core/utils/cn';

export interface DiagramLabelProps {
  position: { top: string; left: string };
  anchor?: 'center' | 'start' | 'end' | 'top' | 'bottom';
  offsetX?: number | string;
  offsetY?: number | string;
  children: React.ReactNode;
  className?: string;
}

/**
 * An HTML-based overlay for rendering high-quality text over an SVG diagram.
 */
export const DiagramLabel: React.FC<DiagramLabelProps> = ({
  position,
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

  return (
    <div
      className={cn(
        'diagram-label absolute pointer-events-none text-zinc-400 font-sans text-xs font-medium drop-shadow-sm transition-opacity duration-300',
        className
      )}
      style={{
        top: position.top,
        left: position.left,
        transform: `translate(calc(${offsetX}), calc(${offsetY})) ${anchorTransform}`,
      }}
    >
      {children}
    </div>
  );
};
