import React from 'react';
import { VisualRegistry as AS2VisualRegistry, AS2_SHORT_ID_MAPPING } from "@/modules/AS2/registry";
import { getPracticeComponent as getAS2PracticeComponent } from "@/modules/AS2/visualManifest";
import { VisualRegistry as AS1VisualRegistry, AS1_SHORT_ID_MAPPING } from "@/modules/AS1/registry";
import { getAS1PracticeComponent } from "@/modules/AS1/visualManifest";

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
    <div className="w-full max-w-3xl bg-muted/30 rounded-3xl border border-primary/10 shadow-inner overflow-hidden flex justify-center items-center p-8 transition-all hover:border-primary/30 duration-700 group">
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
    const ModuleRegistry = AS2VisualRegistry[module];
    const Component = (ModuleRegistry as any)[component];
    if (Component) return <Component />;
  }

  // 2. Try AS1 Short ID Mapping (Lessons)
  const as1Mapping = AS1_SHORT_ID_MAPPING[visualId];
  if (as1Mapping) {
    const { module, component } = as1Mapping;
    const ModuleRegistry = AS1VisualRegistry[module];
    const Component = (ModuleRegistry as any)[component];
    if (Component) return <Component />;
  }

  // 3. Try Practice Manifests (Automatic extraction)
  const AS2PracticeComponent = getAS2PracticeComponent(visualId);
  if (AS2PracticeComponent) {
    return (
      <PracticeVisualFrame id={visualId}>
        <AS2PracticeComponent />
      </PracticeVisualFrame>
    );
  }

  const AS1PracticeComponent = getAS1PracticeComponent(visualId);
  if (AS1PracticeComponent) {
    return (
      <PracticeVisualFrame id={visualId}>
        <AS1PracticeComponent />
      </PracticeVisualFrame>
    );
  }

  // 4. Fallback: Pending/Unavailable Notice
  return (
    <div className="my-6 p-6 rounded-2xl bg-primary/5 border border-primary/10 flex flex-col items-center gap-2 max-w-sm mx-auto">
      <div className="text-2.5 font-mono font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-primary/70 animate-pulse" />
        Visual Pending
      </div>
      <div className="text-2.75 font-mono text-primary truncate max-w-full italic">
        {visualId}
      </div>
    </div>
  );
}

// Alias for backward compatibility
export const LessonVisual = VisualRenderer;
