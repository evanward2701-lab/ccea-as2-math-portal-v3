import React from 'react';
import { MathText } from '../../../MathText';
import { DiagramPanel } from '../../../DiagramPanel';
import { SVGLibrary } from '../../../diagrams/primitives/SVGLibrary';
import { ObjectBlock } from '../../../diagrams/primitives/ObjectBlock';
import { VectorArrow } from '../../../diagrams/primitives/VectorArrow';
import { DiagramLabel } from '../../../diagrams/primitives/DiagramLabel';
import { themeColors } from '../../../../types/mechanicsTheme';

export const LiftPhysicsSVG: React.FC = () => (
  <DiagramPanel
    title="Lift Physics Isolation"
    analysis={
      <div className="grid gap-3 md:grid-cols-2 w-full max-w-3xl">
        <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-3 text-sm text-slate-300">
          <strong className="text-sky-300">Whole system:</strong> use the lift + passenger together to find cable tension <MathText content="T" className="inline [&_p]:inline [&_p]:m-0" />.
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-3 text-sm text-slate-300">
          <strong className="text-amber-300">Isolated passenger:</strong> use the passenger only to find floor reaction <MathText content="R" className="inline [&_p]:inline [&_p]:m-0" />.
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-3 text-sm text-slate-300">
          <strong className="text-emerald-300">Weight:</strong> acts vertically downwards and is measured in newtons.
        </div>
        <div className="rounded-lg border border-rose-900/50 bg-rose-950/30 p-3 text-sm text-rose-300">
          <strong className="text-rose-300">Exam Pitfall:</strong> Do not include the passenger reaction <MathText content="R" className="inline [&_p]:inline [&_p]:m-0" /> when modelling the whole lift + passenger system. It is an internal force and cancels out.
        </div>
        <div className="md:col-span-2 rounded-lg border border-emerald-900/50 bg-emerald-950/20 p-3 text-center text-sm font-semibold text-emerald-200">
          Use this idea later in M3 lift dynamics.
        </div>
      </div>
    }
  >
    <div className="relative w-full aspect-76/39 max-w-4xl mx-auto rounded-xl overflow-hidden border border-slate-800/50 bg-slate-950 shadow-[8px_8px_0px_#0f172a]">
      <SVGLibrary />
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 760 390" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" role="img" aria-label="Lift physics isolation diagram comparing whole lift system and isolated passenger">
        {/* Panels */}
        <rect x="24" y="28" width="340" height="300" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="2" />
        <rect x="396" y="28" width="340" height="300" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="2" />

        {/* Whole-system model */}
        <rect x="118" y="92" width="152" height="168" rx="10" stroke={themeColors.applied} strokeWidth="2.5" strokeDasharray="8 6" fill="#020617" fillOpacity="0.35" />
        <line x1="194" y1="58" x2="194" y2="110" stroke="#cbd5e1" strokeWidth="3" />
        <ObjectBlock x={132} y={110} width={124} height={120} />
        <line x1="132" y1="142" x2="256" y2="142" stroke="#475569" strokeWidth="2" />
        <circle cx="194" cy="164" r="14" stroke="#cbd5e1" strokeWidth="2" fill="#334155" />
        <line x1="194" y1="178" x2="194" y2="210" stroke="#cbd5e1" strokeWidth="2.5" />
        <line x1="176" y1="220" x2="194" y2="210" stroke="#cbd5e1" strokeWidth="2.5" />
        <line x1="212" y1="220" x2="194" y2="210" stroke="#cbd5e1" strokeWidth="2.5" />

        <VectorArrow x1={194} y1={112} x2={194} y2={48} type="accel" marker="default" />
        <VectorArrow x1={194} y1={230} x2={194} y2={292} type="force" marker="default" />
        <VectorArrow x1={88} y1={218} x2={88} y2={150} type="velocity" marker="default" />

        {/* Passenger-only model */}
        <rect x="514" y="118" width="96" height="136" rx="10" stroke={themeColors.applied} strokeWidth="2.5" strokeDasharray="8 6" fill="#020617" fillOpacity="0.35" />
        <line x1="470" y1="226" x2="654" y2="226" stroke="#475569" strokeWidth="4" />
        <circle cx="562" cy="152" r="18" stroke="#e2e8f0" strokeWidth="2.5" fill="#1e293b" />
        <line x1="562" y1="170" x2="562" y2="212" stroke="#e2e8f0" strokeWidth="2.5" />
        <line x1="538" y1="226" x2="562" y2="212" stroke="#e2e8f0" strokeWidth="2.5" />
        <line x1="586" y1="226" x2="562" y2="212" stroke="#e2e8f0" strokeWidth="2.5" />

        <VectorArrow x1={526} y1={226} x2={526} y2={148} type="accel" marker="default" />
        <VectorArrow x1={602} y1={154} x2={602} y2={274} type="force" marker="default" />
        <VectorArrow x1={682} y1={218} x2={682} y2={150} type="velocity" marker="default" />
      </svg>

      <DiagramLabel position={{ left: '25.5%', top: '16.7%' }}>
        <div className="text-center">
          <div className="text-base font-bold text-sky-300">Whole system: lift + passenger</div>
          <div className="text-xs text-slate-400">Use to find cable tension</div>
        </div>
      </DiagramLabel>

      <DiagramLabel position={{ left: '74.5%', top: '16.7%' }}>
        <div className="text-center">
          <div className="text-base font-bold text-amber-300">Isolated passenger</div>
          <div className="text-xs text-slate-400">Use to find floor reaction</div>
        </div>
      </DiagramLabel>

      <DiagramLabel position={{ left: '30.4%', top: '17.9%' }}>
        <MathText content="T" className="text-xl font-bold text-emerald-300 [&_p]:m-0" />
      </DiagramLabel>

      <DiagramLabel position={{ left: '33.8%', top: '73.1%' }}>
        <MathText content="(M+m)g" className="text-lg font-bold text-rose-300 [&_p]:m-0" />
      </DiagramLabel>

      <DiagramLabel position={{ left: '9.9%', top: '44.9%' }}>
        <MathText content="a" className="text-xl font-bold text-sky-300 [&_p]:m-0" />
      </DiagramLabel>

      <DiagramLabel position={{ left: '25.7%', top: '76.7%' }}>
        <div className="rounded-lg border border-emerald-900/60 bg-slate-950 px-3 py-1 text-center text-sm font-bold text-emerald-300">
          <MathText content="T - (M + m)g = (M + m)a" className="[&_p]:m-0" />
        </div>
      </DiagramLabel>

      <DiagramLabel position={{ left: '66.2%', top: '43.3%' }}>
        <MathText content="R" className="text-xl font-bold text-emerald-300 [&_p]:m-0" />
      </DiagramLabel>

      <DiagramLabel position={{ left: '84.1%', top: '64.4%' }}>
        <MathText content="mg" className="text-xl font-bold text-rose-300 [&_p]:m-0" />
      </DiagramLabel>

      <DiagramLabel position={{ left: '93%', top: '44.9%' }}>
        <MathText content="a" className="text-xl font-bold text-sky-300 [&_p]:m-0" />
      </DiagramLabel>

      <DiagramLabel position={{ left: '74.5%', top: '76.7%' }}>
        <div className="rounded-lg border border-amber-900/60 bg-slate-950 px-3 py-1 text-center text-sm font-bold text-amber-300">
          <MathText content="R - mg = ma" className="[&_p]:m-0" />
        </div>
      </DiagramLabel>

      <DiagramLabel position={{ left: '50%', top: '91.8%' }}>
        <div className="grid grid-cols-3 gap-3 text-center text-xs font-semibold text-slate-300 w-full px-4">
          <div className="rounded border border-slate-800 bg-slate-900/60 px-2 py-1"><span className="text-emerald-300">emerald</span>/<span className="text-sky-300">sky</span> arrow = upward force</div>
          <div className="rounded border border-slate-800 bg-slate-900/60 px-2 py-1"><span className="text-rose-300">rose</span> arrow = weight</div>
          <div className="rounded border border-slate-800 bg-slate-900/60 px-2 py-1"><span className="text-amber-300">amber dashed outline</span> = chosen system</div>
        </div>
      </DiagramLabel>
    </div>
  </DiagramPanel>
);
