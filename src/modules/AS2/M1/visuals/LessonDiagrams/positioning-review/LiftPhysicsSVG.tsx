import React from 'react';
import { MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { SVGLibrary } from '@/core/diagram-engine/primitives/SVGLibrary';
import { ObjectBlock } from '@/core/diagram-engine/primitives/ObjectBlock';
import { VectorArrow } from '@/core/diagram-engine/primitives/VectorArrow';
import { DiagramLabel } from '@/core/diagram-engine/primitives/DiagramLabel';
import { themeColors } from '@/core/types/mechanicsTheme';

export const LiftPhysicsSVG: React.FC = () => (
  <DiagramPanel
    title="Lift Physics Isolation"
    analysis={
      /* Layout Track Expanded: max-w-3xl transformed to max-w-5xl for deep structural spacing */
      <div className="grid gap-4 md:grid-cols-2 w-full max-w-5xl mx-auto px-2">
        {/* Typography Scale: text-sm upgraded to premium text-base / tracking-normal */}
        <div className="rounded-xl border border-zinc-800/80 bg-zinc-800/30 p-4 text-base text-zinc-300 leading-relaxed">
          <strong className="text-zinc-100 font-semibold block mb-1">Whole system:</strong> Use the lift + passenger together to isolate and calculate overall cable tension <MathText content="T" className="inline [&_p]:inline [&_p]:m-0 text-emerald-400" />.
        </div>
        <div className="rounded-xl border border-zinc-800/80 bg-zinc-800/30 p-4 text-base text-zinc-300 leading-relaxed">
          <strong className="text-amber-400 font-semibold block mb-1">Isolated passenger:</strong> Target the passenger boundaries independently to extract floor contact reaction <MathText content="R" className="inline [&_p]:inline [&_p]:m-0 text-amber-400" />.
        </div>
        <div className="rounded-xl border border-zinc-800/80 bg-zinc-800/30 p-4 text-base text-zinc-300 leading-relaxed">
          <strong className="text-emerald-400 font-semibold block mb-1">Weight:</strong> Always acts cleanly vertical downwards through center of mass, scaled continuously in Newtons.
        </div>
        <div className="rounded-xl border border-rose-900/30 bg-rose-950/10 p-4 text-base text-rose-300 leading-relaxed">
          <strong className="text-rose-400 font-semibold block mb-1">Exam Pitfall:</strong> Never map passenger contact reaction <MathText content="R" className="inline [&_p]:inline [&_p]:m-0" /> when solving whole lift configurations. It rests inside system limits as an internal action vector and drops out.
        </div>
        <div className="md:col-span-2 rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 text-center text-sm font-semibold text-zinc-400 tracking-wider uppercase">
          Core concepts transfer directly into structural M3 lift dynamics.
        </div>
      </div>
    }
  >
    {/* Design Engine Alignment: Transitioned to bg-[#1c1c1f], absolute neutral shadow vectors */}
    <div className="relative w-full aspect-76/39 max-w-5xl mx-auto rounded-xl overflow-hidden border border-zinc-800/60 bg-[#1c1c1f] shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
      <SVGLibrary />
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 760 390" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" role="img" aria-label="Lift physics isolation diagram comparing whole lift system and isolated passenger">
        
        {/* Section Viewport Enclosures - Softened structural boundaries */}
        <rect x="24" y="28" width="340" height="300" rx="8" fill="#141416" stroke="#27272a" strokeWidth="1" />
        <rect x="396" y="28" width="340" height="300" rx="8" fill="#141416" stroke="#27272a" strokeWidth="1" />

        {/* Left Side: System Bounds Model (Stripped fill="#020617" blue profiles) */}
        <rect x="118" y="92" width="152" height="168" rx="10" stroke={themeColors.applied} strokeWidth="2" strokeDasharray="6 4" fill="#1c1c1f" fillOpacity="0.4" />
        <line x1="194" y1="58" x2="194" y2="110" stroke="#a1a1aa" strokeWidth="2" />
        <ObjectBlock x={132} y={110} width={124} height={120} />
        <line x1="132" y1="142" x2="256" y2="142" stroke="#27272a" strokeWidth="1.5" />
        <circle cx="194" cy="164" r="14" stroke="#a1a1aa" strokeWidth="2" fill="#27272a" />
        <line x1="194" y1="178" x2="194" y2="210" stroke="#a1a1aa" strokeWidth="2" />
        <line x1="176" y1="220" x2="194" y2="210" stroke="#a1a1aa" strokeWidth="2" />
        <line x1="212" y1="220" x2="194" y2="210" stroke="#a1a1aa" strokeWidth="2" />

        <VectorArrow x1={194} y1={112} x2={194} y2={48} type="accel" marker="default" />
        <VectorArrow x1={194} y1={230} x2={194} y2={292} type="force" marker="default" />
        <VectorArrow x1={88} y1={218} x2={88} y2={150} type="velocity" marker="default" />

        {/* Right Side: Isolated Passenger Profile (Blue values replaced cleanly) */}
        <rect x="514" y="118" width="96" height="136" rx="10" stroke={themeColors.applied} strokeWidth="2" strokeDasharray="6 4" fill="#1c1c1f" fillOpacity="0.4" />
        <line x1="470" y1="226" x2="654" y2="226" stroke="#27272a" strokeWidth="3" />
        <circle cx="562" cy="152" r="18" stroke="#d4d4d8" strokeWidth="2" fill="#141416" />
        <line x1="562" y1="170" x2="562" y2="212" stroke="#d4d4d8" strokeWidth="2" />
        <line x1="538" y1="226" x2="562" y2="212" stroke="#d4d4d8" strokeWidth="2" />
        <line x1="586" y1="226" x2="562" y2="212" stroke="#d4d4d8" strokeWidth="2" />

        <VectorArrow x1={526} y1={226} x2={526} y2={148} type="accel" marker="default" />
        <VectorArrow x1={602} y1={154} x2={602} y2={274} type="force" marker="default" />
        <VectorArrow x1={682} y1={218} x2={682} y2={150} type="velocity" marker="default" />
      </svg>

      {/* Dynamic Overlay Layout Labels */}
      <DiagramLabel position={{ left: '25.5%', top: '16.7%' }}>
        <div className="text-center">
          <div className="text-base font-bold text-zinc-200">Whole system: lift + passenger</div>
          <div className="text-xs text-zinc-500 mt-0.5">Use to find cable tension</div>
        </div>
      </DiagramLabel>

      <DiagramLabel position={{ left: '74.5%', top: '16.7%' }}>
        <div className="text-center">
          <div className="text-base font-bold text-amber-400">Isolated passenger</div>
          <div className="text-xs text-zinc-500 mt-0.5">Use to find floor reaction</div>
        </div>
      </DiagramLabel>

      <DiagramLabel position={{ left: '30.4%', top: '17.9%' }}>
        <MathText content="T" className="text-xl font-bold text-emerald-400 [&_p]:m-0" />
      </DiagramLabel>

      <DiagramLabel position={{ left: '33.8%', top: '73.1%' }}>
        <MathText content="(M+m)g" className="text-lg font-bold text-rose-400 [&_p]:m-0" />
      </DiagramLabel>

      <DiagramLabel position={{ left: '9.9%', top: '44.9%' }}>
        <MathText content="a" className="text-xl font-bold text-zinc-400 [&_p]:m-0" />
      </DiagramLabel>

      <DiagramLabel position={{ left: '25.7%', top: '76.7%' }}>
        <div className="rounded-lg border border-zinc-800 bg-[#141416]/90 px-4 py-1.5 text-center text-sm font-bold text-emerald-400 backdrop-blur-sm shadow-md">
          <MathText content="T - (M + m)g = (M + m)a" className="[&_p]:m-0" />
        </div>
      </DiagramLabel>

      <DiagramLabel position={{ left: '66.2%', top: '43.3%' }}>
        <MathText content="R" className="text-xl font-bold text-emerald-400 [&_p]:m-0" />
      </DiagramLabel>

      <DiagramLabel position={{ left: '84.1%', top: '64.4%' }}>
        <MathText content="mg" className="text-xl font-bold text-rose-400 [&_p]:m-0" />
      </DiagramLabel>

      <DiagramLabel position={{ left: '93%', top: '44.9%' }}>
        <MathText content="a" className="text-xl font-bold text-zinc-400 [&_p]:m-0" />
      </DiagramLabel>

      <DiagramLabel position={{ left: '74.5%', top: '76.7%' }}>
        <div className="rounded-lg border border-zinc-800 bg-[#141416]/90 px-4 py-1.5 text-center text-sm font-bold text-amber-400 backdrop-blur-sm shadow-md">
          <MathText content="R - mg = ma" className="[&_p]:m-0" />
        </div>
      </DiagramLabel>

      {/* Pure Desaturated Neutral Explanatory Legend Footer */}
      <DiagramLabel position={{ left: '50%', top: '91.8%' }}>
        <div className="grid grid-cols-3 gap-3 text-center text-[11px] font-medium text-zinc-400 w-full px-6">
          <div className="rounded border border-zinc-800/80 bg-zinc-900/60 px-2 py-1"><span className="text-emerald-400 font-semibold">Emerald vector</span> = upward tension / reaction force</div>
          <div className="rounded border border-zinc-800/80 bg-zinc-900/60 px-2 py-1"><span className="text-rose-400 font-semibold">Rose vector</span> = gravitational weight down</div>
          <div className="rounded border border-zinc-800/80 bg-zinc-900/60 px-2 py-1"><span className="text-zinc-300 font-semibold">Dashed boundary</span> = current isolated system envelope</div>
        </div>
      </DiagramLabel>
    </div>
  </DiagramPanel>
);