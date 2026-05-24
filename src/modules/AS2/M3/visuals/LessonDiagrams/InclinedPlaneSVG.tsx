import React from 'react';
import { MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { DiagramLabel } from '@/core/diagram-engine/primitives/DiagramLabel';
import { SVGLibrary } from '@/core/diagram-engine/primitives/SVGLibrary';
import { VectorArrow } from '@/core/diagram-engine/primitives/VectorArrow';
import { themeColors } from '@/core/types/mechanicsTheme';

export const InclinedPlaneSVG: React.FC = () => (
  <DiagramPanel
    title="Fig 3. Inclined Plane Resolution"
    analysis={(
      <div className="space-y-3">
        <div className="flex items-start gap-3 p-3 bg-zinc-900/50 border border-zinc-800 rounded-lg">
          <p className="text-sm text-zinc-300 leading-relaxed">
            Weight <MathText content="mg" className="inline not-italic align-baseline [&_p]:inline [&_p]:m-0" /> always acts vertically downwards. Resolve forces parallel and perpendicular to the plane of motion.
          </p>
        </div>
        <div className="p-3 bg-rose-950/30 border border-rose-900/40 rounded-lg text-sm text-rose-300">
          <strong className="font-bold text-rose-400">CCEA Exam Pitfall:</strong> Never draw the weight vector acting diagonally down the slope. It is always vertical.
        </div>
      </div>
    )}
  >
    <div className="relative w-full aspect-42/30 max-w-xl mx-auto rounded-xl overflow-hidden border border-zinc-800/60 bg-[#141416] shadow-inner">
      <SVGLibrary />
      <svg className="absolute inset-0 w-full h-full" viewBox="40 20 420 300" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" overflow="visible">
        {/* Horizontal Base */}
        <line x1="50" y1="260" x2="450" y2="260" stroke="#3f3f46" strokeWidth="2" strokeDasharray="4 4" />
        
        {/* Inclined Plane */}
        <line x1="50" y1="260" x2="450" y2="100" stroke="#475569" strokeWidth="3" />
        
        {/* Base Angle Theta */}
        <path d="M 110 260 A 60 60 0 0 0 105 238" fill="none" stroke="#94a3b8" strokeWidth="1.5" />

        {/* Main Weight Vector (Vertical) */}
        <VectorArrow x1={250} y1={180} x2={250} y2={280} type="applied" marker="default" />
      </svg>

      <DiagramLabel x="55%" y="90%" text="mg" />

      <DiagramLabel x="20%" y="75%" text="\theta" />

      <DiagramLabel x="50%" y="50%">
        <div className="bg-zinc-900/80 p-2 rounded border border-zinc-800 text-xs text-zinc-300">
          Resolving diagram...
        </div>
      </DiagramLabel>
    </div>
  </DiagramPanel>
);
