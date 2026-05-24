import React from 'react';
import { MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { SVGLibrary } from '@/core/diagram-engine/primitives/SVGLibrary';
import { VectorArrow } from '@/core/diagram-engine/primitives/VectorArrow';
import { DiagramLabel } from '@/core/diagram-engine/primitives/DiagramLabel';
import { themeColors } from '@/core/types/mechanicsTheme';

export const ScalarVectorSpatialMapSVG: React.FC = () => (
  <DiagramPanel
    title="Fig. Distance vs. Displacement"
    analysis={
      /* Expanded Layout Width Track: max-w-3xl upgraded to max-w-5xl for premium spacing */
      <div className="grid gap-4 md:grid-cols-2 w-full max-w-5xl mx-auto px-2">
        {/* Typography Scale: text-sm upgraded to premium text-base / tracking-normal */}
        <div className="rounded-xl border border-zinc-800/80 bg-zinc-800/30 p-5 shadow-sm">
          <h4 className="mb-2 font-bold text-amber-400 text-lg">Distance / Speed</h4>
          <p className="mb-4 text-base leading-relaxed text-zinc-300">Distance tracks the complete length of the path taken and behaves as a pure scalar magnitude.</p>
          <div className="space-y-2.5 rounded-lg border border-zinc-800 bg-zinc-900/60 p-4 text-sm text-zinc-300">
            <MathText content="\text{Speed} = \frac{\text{Distance}}{\text{Time}}" className="text-amber-400 font-semibold [&_p]:m-0 text-base" />
            <div className="pt-1 flex justify-between border-t border-zinc-800/40"><span>Distance travelled:</span> <span className="font-semibold text-amber-400">12 m</span></div>
            <div className="flex justify-between"><span>Elapsed time:</span> <span className="font-semibold text-zinc-100">4 s</span></div>
            <div className="flex justify-between pt-1 border-t border-zinc-800/40"><span>Resulting Speed:</span> <span className="font-semibold text-amber-400">3 m s^{-1}</span></div>
          </div>
        </div>
        
        <div className="rounded-xl border border-zinc-800/80 bg-zinc-800/30 p-5 shadow-sm">
          <h4 className="mb-2 font-bold text-emerald-400 text-lg">Displacement / Velocity</h4>
          <p className="mb-4 text-base leading-relaxed text-zinc-300">Displacement marks the straight-line position vector directly from start to finish.</p>
          <div className="space-y-2.5 rounded-lg border border-zinc-800 bg-zinc-900/60 p-4 text-sm text-zinc-300">
            <MathText content="\text{Velocity} = \frac{\text{Displacement}}{\text{Time}}" className="text-emerald-400 font-semibold [&_p]:m-0 text-base" />
            <div className="pt-1 flex justify-between border-t border-zinc-800/40"><span>Displacement vector:</span> <span className="font-semibold text-emerald-400">8 m NE</span></div>
            <div className="flex justify-between"><span>Elapsed time:</span> <span className="font-semibold text-zinc-100">4 s</span></div>
            <div className="flex justify-between pt-1 border-t border-zinc-800/40"><span>Resulting Velocity:</span> <span className="font-semibold text-emerald-400">2 m s^{-1} NE</span></div>
          </div>
        </div>

        {/* Soft Contrast Footer panel adjustment */}
        <div className="md:col-span-2 rounded-xl border border-zinc-800 bg-zinc-800/20 p-4 text-center text-base text-zinc-300 leading-relaxed max-w-4xl mx-auto w-full">
          Even within an identical timeframe, scalar speed and vector velocity calculations yield distinct metrics. For instance, positional displacement can cycle perfectly back to <span className="text-emerald-400 font-medium">zero</span> at the origin point even while total path distance continues accumulating.
        </div>
      </div>
    }
  >
    {/* Layout Track Expansion & Canvas Leveling: Set baseline background layer to-[#1c1c1f] */}
    <div className="relative w-full aspect-76/30 max-w-5xl mx-auto rounded-xl overflow-hidden border border-zinc-800/60 bg-[#1c1c1f] shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
      <SVGLibrary />
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 760 300" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" role="img" aria-label="Map comparing distance path and displacement vector from A to B">
        <path d="M 82 224 H 682 M 112 194 H 652 M 142 164 H 622 M 172 134 H 592 M 202 104 H 562 M 232 74 H 532" stroke="#27272a" strokeWidth="0.75" strokeDasharray="4 8" opacity="0.4" />

        {/* Nodes A and B */}
        <circle cx="120" cy="214" r="12" fill={themeColors.velocity} />
        <circle cx="620" cy="74" r="12" fill={themeColors.velocity} />

        {/* Distance Path (Winding) */}
        <path d="M 130 206 C 210 100, 312 256, 394 166 C 492 58, 574 114, 610 82" stroke={themeColors.applied} strokeWidth="3.5" strokeDasharray="6 6" strokeLinecap="round" fill="none" />

        {/* Displacement Vector (Straight line) */}
        <VectorArrow x1={132} y1={210} x2={608} y2={78} type="accel" marker="default" />

        {/* Compass Assembly - Cleaned out dark blue fill properties */}
        <circle cx="90" cy="72" r="34" stroke="#27272a" strokeWidth="1" fill="#141416" fillOpacity="0.8" />
        <VectorArrow x1={90} y1={94} x2={90} y2={46} type="velocity" marker="default" />
        <VectorArrow x1={68} y1={72} x2={116} y2={72} type="structural" marker="default" />
        <VectorArrow x1={78} y1={84} x2={108} y2={54} type="accel" marker="default" />
      </svg>

      {/* Dynamic Typography Overlays — Swapped contrasting text weight defaults */}
      <DiagramLabel x="15.8%" y="71.3%">
        <div className="text-sm font-black text-white">A</div>
      </DiagramLabel>
      <DiagramLabel x="11.6%" y="82%">
        <div className="text-xs font-bold text-zinc-400">Start Position</div>
      </DiagramLabel>

      <DiagramLabel x="81.6%" y="24.7%">
        <div className="text-sm font-black text-white">B</div>
      </DiagramLabel>
      <DiagramLabel x="77.4%" y="16%">
        <div className="text-xs font-bold text-zinc-400">Target Terminal</div>
      </DiagramLabel>

      <DiagramLabel x="44%" y="24.7%">
        <div className="rounded-lg border border-zinc-800 bg-[#141416]/90 px-3 py-1.5 text-center text-xs font-bold text-amber-400 backdrop-blur-sm">
          Distance Path = 12 m
        </div>
      </DiagramLabel>

      <DiagramLabel x="64.3%" y="72.7%">
        <div className="rounded-lg border border-zinc-800 bg-[#141416]/90 px-3 py-1.5 text-center text-xs font-bold text-emerald-400 backdrop-blur-sm">
          Displacement = 8 m Northeast
        </div>
      </DiagramLabel>

      <DiagramLabel x="11.2%" y="14%">
        <div className="text-[10px] font-bold text-zinc-500">N</div>
      </DiagramLabel>
      <DiagramLabel x="15.5%" y="25.7%">
        <div className="text-[10px] font-bold text-zinc-500">E</div>
      </DiagramLabel>
      <DiagramLabel x="14.2%" y="18%">
        <div className="text-[10px] font-bold text-emerald-400">NE</div>
      </DiagramLabel>

      <DiagramLabel x="50%" y="89.3%">
        <div className="text-center text-xs font-semibold text-zinc-400 w-full px-4">
          Direction coordinates govern displacement vectors; absolute scalar trajectories map total distance.
        </div>
      </DiagramLabel>
    </div>
  </DiagramPanel>
);