import React from 'react';
import { VisualRegistry, AS2_SHORT_ID_MAPPING } from "@/modules/AS2/registry";
import { getPracticeComponent } from "@/modules/AS2/visualManifest";

// ==========================================
// ROUTER COMPONENT
// ==========================================

interface VisualRendererProps {
  visualId: string;
}

/**
 * Shared framing for practice diagrams to ensure consistent sizing and spacing.
 */
export const PracticeVisualFrame: React.FC<{ children: React.ReactNode; id: string }> = ({ children, id }) => (
  <div className="w-full flex justify-center py-6">
    <div className="w-full max-w-3xl bg-zinc-925 rounded-3xl border border-zinc-800/50 shadow-inner overflow-hidden flex justify-center items-center p-8 transition-all hover:border-zinc-700 duration-700 group">
      <div className="w-full max-h-105 overflow-auto flex justify-center items-center scrollbar-hide">
        {children}
      </div>
    </div>
  </div>
);

/**
 * Shared Visual Renderer that handles both Lesson short IDs and Practice long source IDs.
 */
export function VisualRenderer({ visualId }: VisualRendererProps) {
  // 1. Try AS2 Short ID Mapping (Lessons)
  const as2Mapping = AS2_SHORT_ID_MAPPING[visualId];
  if (as2Mapping) {
    const { module, component } = as2Mapping;
    const ModuleRegistry = VisualRegistry[module];
    const Component = (ModuleRegistry as any)[component];
    if (Component) return <Component />;
  }

  // 2. Try Practice Manifest (Automatic extraction)
  const PracticeComponent = getPracticeComponent(visualId);
  if (PracticeComponent) {
    return (
      <PracticeVisualFrame id={visualId}>
        <PracticeComponent />
      </PracticeVisualFrame>
    );
  }

  // 3. Fallback: Pending/Unavailable Notice
  return (
    <div className="my-6 p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 flex flex-col items-center gap-2 max-w-sm mx-auto">
      <div className="text-2.5 font-mono font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-500/50 animate-pulse" />
        Visual Pending
      </div>
      <div className="text-2.75 font-mono text-zinc-600 truncate max-w-full italic">
        {visualId}
      </div>
    </div>
  );
}

// Alias for backward compatibility
export const LessonVisual = VisualRenderer;
