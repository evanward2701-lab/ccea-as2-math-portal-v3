import React from 'react';
import { cn } from '@/core/utils/cn';
import { MathInline } from '@/core/components/MathText'; 

export interface DiagramLabelProps {
  x: number | string;
  y: number | string;
  text?: string;
  anchor?: 'center' | 'start' | 'end' | 'top' | 'bottom';
  offsetX?: number | string;
  offsetY?: number | string;
  children?: React.ReactNode;
  className?: string;
}

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
  if (anchor === 'start') anchorTransform = 'translate(0, -50%)';
  else if (anchor === 'end') anchorTransform = 'translate(-100%, -50%)';
  else if (anchor === 'top') anchorTransform = 'translate(-50%, 0)';
  else if (anchor === 'bottom') anchorTransform = 'translate(-50%, -100%)';

  const left = typeof x === 'number' ? `${x}%` : x;
  const top = typeof y === 'number' ? `${y}%` : y;

  return (
    <div
      className={cn(
        'absolute pointer-events-none text-foreground font-serif text-xs leading-tight text-balance break-normal',
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
