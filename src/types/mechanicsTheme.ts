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
  | 'applied';

export type ArrowMarker = 'default' | 'none' | 'dot' | 'reverse';

export const themeColors: Record<SemanticColor, string> = {
  force: '#71717a',      // zinc-500
  velocity: '#71717a',   // zinc-500
  accel: '#71717a',      // zinc-500
  weight: '#71717a',     // zinc-500
  structural: '#52525b', // zinc-600
  connector: '#d4d4d8',  // zinc-300
  applied: '#a1a1aa',    // zinc-400
};
