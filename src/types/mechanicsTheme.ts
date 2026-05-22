/**
 * Foundational UI types for the mechanics platform theme.
 * Uses a polished, muted dark-mode palette suitable for luxury-minimalist UI.
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
  force: '#e06c75',      // Muted red
  velocity: '#61afef',   // Muted blue
  accel: '#98c379',      // Muted green
  weight: '#c678dd',     // Muted purple
  structural: '#5c6370', // Muted dark grey
  connector: '#abb2bf',  // Muted light grey
  applied: '#e5c07b',    // Muted yellow
};
