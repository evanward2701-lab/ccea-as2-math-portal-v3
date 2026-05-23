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
      <div className="grid gap-4 md:grid-cols-2 w-full max-w-3xl">
        <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
          <h4 className="mb-2 font-bold text-amber-300">Distance / Speed</h4>
          <p className="mb-3 text-sm leading-relaxed text-slate-300">Distance is the total path length travelled and is a scalar.</p>
          <div className="space-y-2 rounded border border-slate-800/60 bg-slate-950 p-3 text-sm text-slate-300">
            <MathText content="\text{Speed} = \frac{\text{Distance}}{\text{Time}}" className="text-amber-300 font-semibold [&_p]:m-0" />
            <div>Distance travelled = <span className="font-semibold text-amber-300">12 m</span></div>
            <div>Time = <span className="font-semibold text-slate-100">4 s</span></div>
            <div>Speed = <span className="font-semibold text-amber-300">3 m s^-1</span></div>
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
          <h4 className="mb-2 font-bold text-emerald-300">Displacement / Velocity</h4>
          <p className="mb-3 text-sm leading-relaxed text-slate-300">Displacement is the straight-line change in position from start to finish and is a vector.</p>
          <div className="space-y-2 rounded border border-slate-800/60 bg-slate-950 p-3 text-sm text-slate-300">
            <MathText content="\text{Velocity} = \frac{\text{Displacement}}{\text{Time}}" className="text-emerald-300 font-semibold [&_p]:m-0" />
            <div>Displacement = <span className="font-semibold text-emerald-300">8 m northeast</span></div>
            <div>Time = <span className="font-semibold text-slate-100">4 s</span></div>
            <div>Velocity = <span className="font-semibold text-emerald-300">2 m s^-1 northeast</span></div>
          </div>
        </div>
        <div className="md:col-span-2 rounded-lg border border-sky-900/50 bg-sky-950/20 p-3 text-center text-sm text-sky-200">
          Same time, different answers: speed and velocity can differ because distance and displacement are different. Displacement can be zero even when distance is not zero.
        </div>
      </div>
    }
  >
    <div className="relative w-full aspect-76/30 max-w-4xl mx-auto rounded-xl overflow-hidden border border-slate-800/50 bg-slate-950 shadow-[8px_8px_0px_#0f172a]">
      <SVGLibrary />
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 760 300" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" role="img" aria-label="Map comparing distance path and displacement vector from A to B">
        <path d="M 82 224 H 682 M 112 194 H 652 M 142 164 H 622 M 172 134 H 592 M 202 104 H 562 M 232 74 H 532" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 8" />

        {/* Points A and B */}
        <circle cx="120" cy="214" r="12" fill={themeColors.velocity} />
        <circle cx="620" cy="74" r="12" fill={themeColors.velocity} />

        {/* Distance Path (Winding) */}
        <path d="M 130 206 C 210 100, 312 256, 394 166 C 492 58, 574 114, 610 82" stroke={themeColors.applied} strokeWidth="4" strokeDasharray="7 8" strokeLinecap="round" fill="none" />

        {/* Displacement Vector (Straight) */}
        <VectorArrow x1={132} y1={210} x2={608} y2={78} type="accel" marker="default" />

        {/* Compass */}
        <circle cx="90" cy="72" r="34" stroke="#334155" strokeWidth="2" fill="#020617" fillOpacity="0.7" />
        <VectorArrow x1={90} y1={94} x2={90} y2={46} type="velocity" marker="default" />
        <VectorArrow x1={68} y1={72} x2={116} y2={72} type="structural" marker="default" />
        <VectorArrow x1={78} y1={84} x2={108} y2={54} type="accel" marker="default" />
      </svg>

      <DiagramLabel position={{ left: '15.8%', top: '71.3%' }}>
        <div className="text-sm font-bold text-slate-950">A</div>
      </DiagramLabel>
      <DiagramLabel position={{ left: '11.6%', top: '82%' }}>
        <div className="text-sm font-bold text-sky-300">Start A</div>
      </DiagramLabel>

      <DiagramLabel position={{ left: '81.6%', top: '24.7%' }}>
        <div className="text-sm font-bold text-slate-950">B</div>
      </DiagramLabel>
      <DiagramLabel position={{ left: '77.4%', top: '16%' }}>
        <div className="text-sm font-bold text-sky-300">Finish B</div>
      </DiagramLabel>

      <DiagramLabel position={{ left: '44%', top: '24.7%' }}>
        <div className="rounded border border-amber-900/60 bg-slate-950/90 px-3 py-2 text-center text-sm font-bold text-amber-300">
          Distance path = 12 m
        </div>
      </DiagramLabel>

      <DiagramLabel position={{ left: '64.3%', top: '72.7%' }}>
        <div className="rounded border border-emerald-900/60 bg-slate-950/90 px-3 py-2 text-center text-sm font-bold text-emerald-300">
          Displacement = 8 m northeast
        </div>
      </DiagramLabel>

      <DiagramLabel position={{ left: '11.2%', top: '14%' }}>
        <div className="text-xs font-bold text-sky-300">N</div>
      </DiagramLabel>
      <DiagramLabel position={{ left: '15.5%', top: '25.7%' }}>
        <div className="text-xs font-bold text-slate-300">E</div>
      </DiagramLabel>
      <DiagramLabel position={{ left: '14.2%', top: '18%' }}>
        <div className="text-xs font-bold text-emerald-300">NE</div>
      </DiagramLabel>

      <DiagramLabel position={{ left: '50%', top: '89.3%' }}>
        <div className="text-center text-xs font-semibold text-slate-400 w-full px-4">
          Direction matters for displacement and velocity; path length matters for distance and speed.
        </div>
      </DiagramLabel>
    </div>
  </DiagramPanel>
);
