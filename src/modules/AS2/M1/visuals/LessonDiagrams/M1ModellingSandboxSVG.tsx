import React from 'react';
import { MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { SVGLibrary } from '@/core/diagram-engine/primitives/SVGLibrary';
import { ObjectBlock } from '@/core/diagram-engine/primitives/ObjectBlock';
import { VectorArrow } from '@/core/diagram-engine/primitives/VectorArrow';
import { DiagramLabel } from '@/core/diagram-engine/primitives/DiagramLabel';
import { themeColors } from '@/core/types/mechanicsTheme';

export const M1ModellingSandboxSVG: React.FC = () => (
  <DiagramPanel
    title="Fig 3b. Modelling Sandbox"
    analysis={
      <div className="grid gap-3 md:grid-cols-3 w-full max-w-3xl">
        <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-3 text-sm text-slate-300">
          A model is not claiming reality is perfect. It keeps only the features needed for the maths.
        </div>
        <div className="rounded-lg border border-sky-900/50 bg-sky-950/20 p-3 text-sm text-sky-200">
          Use the exact modelling words from the question in your answer.
        </div>
        <div className="rounded-lg border border-rose-900/50 bg-rose-950/30 p-3 text-sm text-rose-200">
          Rigid light towbar: fixed distance, negligible mass.
        </div>
        <div className="md:col-span-3 rounded-lg border border-emerald-900/50 bg-emerald-950/20 p-3 text-center text-sm font-semibold text-emerald-200">
          Exam technique: translate each modelling word into a mathematical effect before writing equations.
        </div>
      </div>
    }
  >
    <div className="relative w-full aspect-76/41 max-w-4xl mx-auto rounded-xl overflow-hidden border border-slate-800/50 bg-slate-950 shadow-[8px_8px_0px_#0f172a]">
      <SVGLibrary />
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 760 410" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" role="img" aria-label="Real world towing system simplified into a mathematical model using assumptions">
        {/* Panels */}
        <rect x="24" y="28" width="300" height="244" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="1.8" />
        <rect x="436" y="28" width="300" height="244" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="1.8" />

        {/* Real-world towing sketch */}
        <line x1="48" y1="218" x2="300" y2="218" stroke="#64748b" strokeWidth="3" />
        {Array.from({ length: 11 }).map((_, idx) => (
          <line key={idx} x1={58 + idx * 22} y1="218" x2={50 + idx * 22} y2="228" stroke="#334155" strokeWidth="2" />
        ))}
        <rect x="64" y="154" width="82" height="38" rx="5" fill="#1e293b" stroke="#e2e8f0" strokeWidth="2" />
        <path d="M 78 154 L 94 132 H 128 L 142 154" stroke="#e2e8f0" strokeWidth="2" fill="#334155" />
        <circle cx="82" cy="198" r="10" fill="#020617" stroke="#cbd5e1" strokeWidth="2" />
        <circle cx="128" cy="198" r="10" fill="#020617" stroke="#cbd5e1" strokeWidth="2" />
        <rect x="198" y="164" width="64" height="30" rx="4" fill="#1e293b" stroke="#cbd5e1" strokeWidth="2" />
        <path d="M 210 164 L 224 146 H 248 L 260 164" stroke="#cbd5e1" strokeWidth="2" fill="#334155" />
        <circle cx="214" cy="200" r="8" fill="#020617" stroke="#cbd5e1" strokeWidth="2" />
        <circle cx="250" cy="200" r="8" fill="#020617" stroke="#cbd5e1" strokeWidth="2" />
        <line x1="146" y1="178" x2="198" y2="178" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" />
        <path d="M 294 154 C 274 146, 268 132, 292 122" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 5" fill="none" />
        <path d="M 60 132 C 42 124, 44 110, 64 104" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 5" fill="none" />

        {/* Assumption arrow */}
        <VectorArrow x1={338} y1={148} x2={420} y2={148} type="velocity" marker="default" />

        {/* Simplified model */}
        <VectorArrow x1={468} y1={218} x2={704} y2={218} type="velocity" marker="none" />
        <ObjectBlock x={506} y={158} width={40} height={40} isParticle={true} massLabel="m1" />
        <ObjectBlock x={626} y={158} width={40} height={40} isParticle={true} massLabel="m2" />
        <line x1="546" y1="178" x2="626" y2="178" stroke="#e2e8f0" strokeWidth="4" strokeLinecap="round" />
        
        <VectorArrow x1={496} y1={132} x2={676} y2={132} type="accel" marker="default" />
        <VectorArrow x1={482} y1={178} x2={512} y2={178} type="applied" marker="default" />
      </svg>

      {/* HTML Overlays */}
      <DiagramLabel position={{ left: '22.9%', top: '15.9%' }}>
        <div className="text-center">
          <div className="text-base font-bold text-amber-300">Real Situation</div>
          <div className="text-xs text-slate-400">Real system: detailed and messy</div>
        </div>
      </DiagramLabel>

      <DiagramLabel position={{ left: '77.1%', top: '15.9%' }}>
        <div className="text-center">
          <div className="text-base font-bold text-emerald-300">Mathematical Model</div>
          <div className="text-xs text-slate-400">Model: simplified for equations</div>
        </div>
      </DiagramLabel>

      <DiagramLabel position={{ left: '23%', top: '25.9%' }}>
        <div className="grid grid-cols-3 gap-2 text-center text-[11px] font-semibold text-amber-200">
          <div className="rounded border border-amber-900/60 bg-slate-950/80 px-2 py-1">shape</div>
          <div className="rounded border border-amber-900/60 bg-slate-950/80 px-2 py-1">wheels</div>
          <div className="rounded border border-amber-900/60 bg-slate-950/80 px-2 py-1">air</div>
        </div>
      </DiagramLabel>

      <DiagramLabel position={{ left: '50%', top: '30%' }}>
        <div className="rounded border border-sky-900/60 bg-slate-950 px-2 py-2 text-center text-xs font-bold leading-tight text-sky-300">
          Apply assumptions
        </div>
      </DiagramLabel>

      <DiagramLabel position={{ left: '91.4%', top: '32.2%' }}>
        <MathText content="a" className="text-lg font-bold text-emerald-300 [&_p]:m-0" />
      </DiagramLabel>

      <DiagramLabel position={{ left: '63.4%', top: '41%' }}>
        <MathText content="D" className="text-sm font-bold text-amber-300 [&_p]:m-0" />
      </DiagramLabel>

      <DiagramLabel position={{ left: '77.1%', top: '40%' }}>
        <div className="rounded border border-slate-800 bg-slate-950/90 px-2 py-1 text-center text-xs font-bold text-slate-200">
          towbar
        </div>
      </DiagramLabel>

      <DiagramLabel position={{ left: '77.1%', top: '60.2%' }}>
        <div className="text-center text-xs font-semibold leading-tight text-emerald-200 w-57.5">
          clean particles/blocks on a horizontal surface
        </div>
      </DiagramLabel>

      <DiagramLabel position={{ left: '50%', top: '82.4%' }}>
        <div className="grid grid-cols-2 gap-2 text-center text-xs font-semibold text-sky-200 md:grid-cols-5 w-full max-w-164">
          <div className="rounded border border-sky-900/60 bg-sky-950/30 px-2 py-2">particle: dimensions ignored</div>
          <div className="rounded border border-sky-900/60 bg-sky-950/30 px-2 py-2">light towbar: negligible mass</div>
          <div className="rounded border border-sky-900/60 bg-sky-950/30 px-2 py-2">rigid towbar: does not bend</div>
          <div className="rounded border border-sky-900/60 bg-sky-950/30 px-2 py-2">smooth surface: no friction</div>
          <div className="rounded border border-sky-900/60 bg-sky-950/30 px-2 py-2">inextensible idea: same acceleration</div>
        </div>
      </DiagramLabel>
    </div>
  </DiagramPanel>
);
