import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { DiagramLabel } from '@/core/diagram-engine/primitives/DiagramLabel';
import { SVGLibrary } from '@/core/diagram-engine/primitives/SVGLibrary';
import { VectorArrow } from '@/core/diagram-engine/primitives/VectorArrow';
import { themeColors } from '@/core/types/mechanicsTheme';

export const PulleySystemSVG: React.FC = () => (
  <DiagramPanel
    title="Fig 2. Connected Particles"
    analysis={
      <div className="space-y-3">
        <p className="text-sm text-zinc-400 italic text-center">
          A smooth pulley ensures tension T is equal on both sides. The inextensible string ensures acceleration a is equal in magnitude.
        </p>
        <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg">
          <h4 className="font-bold text-emerald-400 mb-2 text-sm">Smooth Pulley</h4>
          <p className="text-sm text-zinc-300 leading-relaxed mb-2">Tension is equal on both sides of the string.</p>
          <div className="text-center bg-zinc-925 p-2 rounded border border-zinc-800/60 text-sm text-zinc-300">T is equal on both sides</div>
        </div>
        <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg">
          <h4 className="font-bold text-amber-400 mb-2 text-sm">Inextensible String</h4>
          <p className="text-sm text-zinc-300 leading-relaxed mb-2">Both connected masses share the same acceleration magnitude.</p>
          <div className="text-center bg-zinc-925 p-2 rounded border border-zinc-800/60 text-sm text-zinc-300">a is common to both masses</div>
        </div>
      </div>
    }
  >
    <div className="relative mx-auto aspect-80/46 w-full max-w-4xl overflow-hidden rounded-2xl border border-zinc-800/70 bg-zinc-925 shadow-inner">
      <SVGLibrary />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 800 460"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        shapeRendering="geometricPrecision"
        role="img"
        aria-label="Connected particles on a smooth pulley"
      >
        <line x1={245} y1={58} x2={515} y2={58} stroke="#64748b" strokeWidth={4} />
        <path d="M 270 58 L 250 35 M 315 58 L 295 35 M 360 58 L 340 35 M 405 58 L 385 35 M 450 58 L 430 35 M 495 58 L 475 35" stroke="#3f3f46" strokeWidth={2.5} />
        <line x1={380} y1={58} x2={380} y2={96} stroke="#64748b" strokeWidth={2.5} />

        <path d="M 338 138 Q 380 66 422 138" stroke="#94a3b8" strokeWidth={3} strokeLinecap="round" />
        <line x1={338} y1={138} x2={338} y2={270} stroke="#94a3b8" strokeWidth={3} />
        <line x1={422} y1={138} x2={422} y2={226} stroke="#94a3b8" strokeWidth={3} />

        <circle cx={380} cy={138} r={42} fill="#141417" stroke="#94a3b8" strokeWidth={3} />
        <circle cx={380} cy={138} r={7} fill="#64748b" />

        <rect x={300} y={270} width={76} height={76} rx={7} fill="rgba(30, 41, 59, 0.78)" stroke="#94a3b8" strokeWidth={2.4} />
        <rect x={393} y={226} width={58} height={52} rx={7} fill="rgba(24, 24, 27, 0.7)" stroke={themeColors.structural} strokeWidth={2.4} />
        <text x={338} y={308} fill={themeColors.connector} textAnchor="middle" dominantBaseline="middle" fontFamily="serif" fontSize={22} fontStyle="italic">
          m
          <tspan baselineShift="sub" fontSize={14}>1</tspan>
        </text>
        <text x={422} y={252} fill={themeColors.connector} textAnchor="middle" dominantBaseline="middle" fontFamily="serif" fontSize={18} fontStyle="italic">
          m
          <tspan baselineShift="sub" fontSize={12}>2</tspan>
        </text>

        <VectorArrow x1={338} y1={270} x2={338} y2={203} type="tension" strokeWidth={2.7} />
        <VectorArrow x1={422} y1={226} x2={422} y2={158} type="tension" strokeWidth={2.7} />
        <VectorArrow x1={338} y1={346} x2={338} y2={414} type="weight" strokeWidth={2.7} />
        <VectorArrow x1={422} y1={278} x2={422} y2={346} type="weight" strokeWidth={2.7} />
        <VectorArrow x1={230} y1={292} x2={230} y2={380} type="velocity" marker="acceleration" strokeWidth={2.7} />
        <VectorArrow x1={540} y1={305} x2={540} y2={217} type="velocity" marker="acceleration" strokeWidth={2.7} />
      </svg>

      <DiagramLabel x="40%" y="50%" text="T" className="rounded-md bg-zinc-925/90 px-2 py-1 text-lg text-blue-300" />
      <DiagramLabel x="56.5%" y="37%" text="T" className="rounded-md bg-zinc-925/90 px-2 py-1 text-lg text-blue-300" />

      <DiagramLabel x="43.5%" y="90%" text="m_1g" className="rounded-md bg-zinc-925/90 px-2 py-1 text-base text-rose-300" />
      <DiagramLabel x="58%" y="76%" text="m_2g" className="rounded-md bg-zinc-925/90 px-2 py-1 text-base text-rose-300" />

      <DiagramLabel x="25%" y="73%" text="a" className="rounded-md bg-zinc-925/90 px-2 py-1 text-lg text-emerald-300" />
      <DiagramLabel x="69%" y="55%" text="a" className="rounded-md bg-zinc-925/90 px-2 py-1 text-lg text-emerald-300" />

      <div className="absolute left-[7%] top-[8%] rounded-lg border border-zinc-800/80 bg-zinc-950/35 px-4 py-3 shadow-xl">
        <p className="font-serif text-2.5 font-black uppercase tracking-[0.24em] text-zinc-500">smooth pulley</p>
        <p className="mt-1 text-xs font-semibold text-zinc-400">equal tension, common acceleration</p>
      </div>
    </div>
  </DiagramPanel>
);
