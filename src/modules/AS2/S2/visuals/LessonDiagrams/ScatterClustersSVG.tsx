import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { DiagramLabel } from '@/core/diagram-engine/primitives/DiagramLabel';
import { ArrowLibrary } from '@/core/diagram-engine/primitives/ArrowLibrary';
import { VectorArrow } from '@/core/diagram-engine/primitives/VectorArrow';

const groupAPoints = [
  [250, 338],
  [284, 356],
  [318, 368],
  [354, 386],
  [384, 414],
] as const;

const groupBPoints = [
  [606, 170],
  [646, 190],
  [686, 204],
  [724, 236],
  [760, 260],
] as const;

export const ScatterClustersSVG: React.FC = () => (
  <DiagramPanel
    title="Fig 3. Subgroups in Data"
    analysis={
      <div className="mx-auto grid w-full max-w-5xl gap-4 md:grid-cols-[1fr_1fr]">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/45 p-4 text-sm leading-relaxed text-zinc-300 shadow-sm">
          <span className="font-bold text-zinc-100">Check the structure first:</span> one overall regression line can hide distinct subgroup patterns.
        </div>
        <div className="rounded-xl border border-rose-500/30 bg-rose-950/20 p-4 text-sm leading-relaxed text-rose-200 shadow-sm">
          <span className="font-bold text-rose-300">CCEA Exam Pitfall:</span> do not blindly trust a single PMCC value or line of best fit. Inspect the scatter first.
        </div>
      </div>
    }
  >
    <div className="mx-auto w-full max-w-5xl rounded-2xl border border-zinc-800/80 bg-zinc-950/40 p-5 shadow-2xl">
      <div className="relative aspect-16/9 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/60 shadow-inner">
        <svg
          viewBox="0 0 960 540"
          className="absolute inset-0 h-full w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          shapeRendering="geometricPrecision"
          role="img"
          aria-label="Scatter diagram showing two distinct subgroups and a misleading overall trend line"
        >
          <ArrowLibrary />

          <rect x="92" y="64" width="792" height="410" rx="26" fill="#09090b" fillOpacity="0.42" stroke="#27272a" strokeWidth="1.2" />

          <g opacity="0.22">
            <path d="M140 130 H820" stroke="#27272a" strokeWidth="1" />
            <path d="M140 230 H820" stroke="#27272a" strokeWidth="1" />
            <path d="M140 330 H820" stroke="#27272a" strokeWidth="1" />
            <path d="M140 430 H820" stroke="#27272a" strokeWidth="1" />
          </g>

          <VectorArrow x1={140} y1={450} x2={840} y2={450} type="structural" strokeWidth={2.2} />
          <VectorArrow x1={140} y1={450} x2={140} y2={82} type="structural" strokeWidth={2.2} />

          <ellipse
            cx="320"
            cy="370"
            rx="116"
            ry="70"
            transform="rotate(26 320 370)"
            stroke="#a1a1aa"
            strokeWidth="2.5"
            strokeDasharray="8 8"
            fill="#64748b"
            fillOpacity="0.08"
          />
          <ellipse
            cx="682"
            cy="208"
            rx="116"
            ry="70"
            transform="rotate(26 682 208)"
            stroke="#c084fc"
            strokeWidth="2.5"
            strokeDasharray="8 8"
            fill="#7c3aed"
            fillOpacity="0.10"
          />

          <line x1="208" y1="424" x2="432" y2="316" stroke="#a1a1aa" strokeWidth="2" strokeDasharray="6 8" strokeLinecap="round" opacity="0.75" />
          <line x1="572" y1="262" x2="788" y2="156" stroke="#c084fc" strokeWidth="2" strokeDasharray="6 8" strokeLinecap="round" opacity="0.85" />

          <line
            x1="190"
            y1="430"
            x2="790"
            y2="150"
            stroke="#fb7185"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray="14 11"
          />

          <path d="M198 428 L790 152" stroke="#fb7185" strokeWidth="17" strokeLinecap="round" opacity="0.05" />

          {groupAPoints.map(([cx, cy], index) => (
            <circle key={`group-a-${index}`} cx={cx} cy={cy} r="9.5" fill="#d4d4d8" stroke="#09090b" strokeWidth="2" />
          ))}
          {groupBPoints.map(([cx, cy], index) => (
            <circle key={`group-b-${index}`} cx={cx} cy={cy} r="9.5" fill="#c084fc" stroke="#09090b" strokeWidth="2" />
          ))}
        </svg>

        <DiagramLabel x="16%" y="13.5%" text="y" className="text-lg text-zinc-300" />
        <DiagramLabel x="88%" y="85%" text="x" className="text-lg text-zinc-300" />

        <DiagramLabel x="31%" y="83%" className="text-center">
          <div className="rounded-lg border border-zinc-500/35 bg-zinc-950/85 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-zinc-200 shadow-lg backdrop-blur-sm">
            Group A
          </div>
        </DiagramLabel>

        <DiagramLabel x="76%" y="19%" className="text-center">
          <div className="rounded-lg border border-purple-400/40 bg-purple-950/25 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-purple-200 shadow-lg backdrop-blur-sm">
            Group B
          </div>
        </DiagramLabel>

        <DiagramLabel x="71%" y="74%" className="text-center">
          <div className="max-w-72 rounded-xl border border-rose-500/30 bg-rose-950/20 px-4 py-3 text-left shadow-2xl backdrop-blur-sm">
            <div className="mb-1 text-2.5 font-black uppercase tracking-[0.24em] text-rose-400">Single Overall Fit</div>
            <div className="text-xs font-semibold leading-snug text-zinc-300">
              Can hide separate subgroup behaviour.
            </div>
          </div>
        </DiagramLabel>
      </div>
    </div>
  </DiagramPanel>
);
