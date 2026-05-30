/**
 * Foundational UI types for the mechanics platform theme.
 * Uses a polished, luxury-minimalist zinc-based palette.
 */

export type SemanticColor =
  | 'force'
  | 'velocity'
  | 'accel'
  | 'weight'
  | 'structural'
  | 'connector'
  | 'applied'
  | 'friction'
  | 'reaction'
  | 'tension';

export type ArrowMarker = 'default' | 'none' | 'dot' | 'reverse';

export const themeColors: Record<SemanticColor, string> = {
  force: '#71717a',      // zinc-500
  velocity: '#10b981',   // emerald-500
  accel: 'var(--foreground)',      // dynamic foreground
  weight: '#fb7185',     // rose-400
  structural: '#52525b', // zinc-600
  connector: '#d4d4d8',  // zinc-300
  applied: '#a1a1aa',    // zinc-400
  friction: '#fbbf24',   // amber-400
  reaction: '#34d399',   // emerald-400
  tension: '#60a5fa',    // blue-400
};
