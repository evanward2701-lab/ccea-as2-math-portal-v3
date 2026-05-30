import React, { useMemo } from 'react';
import { cn } from '@/core/utils/cn';

interface LuxurySVGWrapperProps {
  svgSource: string;
  className?: string;
}

const COLOR_MAP: Record<string, string> = {
  // Dark Backgrounds -> Light Card/Backgrounds
  '"#000000"': '"var(--background)"',
  '"#09090b"': '"var(--background)"', // zinc-950
  '"#18181b"': '"var(--card)"',       // zinc-900
  '"#27272a"': '"var(--border)"',     // zinc-800
  
  // Dark mode text/strokes -> Light mode text/strokes
  '"#ffffff"': '"var(--foreground)"', // pure white to dark charcoal
  '"#f4f4f5"': '"var(--foreground)"', // zinc-50
  '"#e4e4e7"': '"var(--foreground)"', // zinc-200
  '"#d4d4d8"': '"var(--foreground)"', // zinc-300
  '"#a1a1aa"': '"var(--muted-foreground)"', // zinc-400
  '"#71717a"': '"var(--muted-foreground)"', // zinc-500
  '"#52525b"': '"var(--muted-foreground)"', // zinc-600
  
  // Specific accent mappings (e.g. emerald/amber to gold/pink if needed)
  '"#10b981"': '"var(--primary)"',     // emerald-500 -> gold
  '"#064e3b"': '"var(--primary-foreground)"', // emerald-900
  '"#f59e0b"': '"var(--destructive)"', // amber-500
};

export const LuxurySVGWrapper: React.FC<LuxurySVGWrapperProps> = ({ svgSource, className }) => {
  const themedSVG = useMemo(() => {
    let result = svgSource;
    // Replace hardcoded hex values with CSS variables for the luxury theme
    Object.entries(COLOR_MAP).forEach(([originalHex, luxuryVar]) => {
      // Case insensitive replacement for the hex codes
      const regex = new RegExp(originalHex, 'gi');
      result = result.replace(regex, luxuryVar);
    });
    return result;
  }, [svgSource]);

  return (
    <div
      className={cn(
        "w-full overflow-auto flex justify-center [&_svg]:max-w-full [&_svg]:h-auto",
        className
      )}
      dangerouslySetInnerHTML={{ __html: themedSVG }}
    />
  );
};
