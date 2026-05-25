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
    <div className="mx-auto w-full max-w-5xl rounded-2xl border border-zinc-800/80 bg-zinc-950/35 p-5 shadow-2xl">
      <div className="relative aspect-16/9 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/50 shadow-inner">
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

          <g opacity="0.26">
            <path d="M140 110 H820" stroke="#27272a" strokeWidth="1" />
            <path d="M140 210 H820" stroke="#27272a" strokeWidth="1" />
            <path d="M140 310 H820" stroke="#27272a" strokeWidth="1" />
            <path d="M140 410 H820" stroke="#27272a" strokeWidth="1" />
          </g>

          <VectorArrow x1={140} y1={460} x2={840} y2={460} type="structural" strokeWidth={2.2} />
          <VectorArrow x1={140} y1={460} x2={140} y2={70} type="structural" strokeWidth={2.2} />

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

          {groupAPoints.map(([cx, cy], index) => (
            <circle key={`group-a-${index}`} cx={cx} cy={cy} r="9" fill="#d4d4d8" stroke="#18181b" strokeWidth="2" />
          ))}
          {groupBPoints.map(([cx, cy], index) => (
            <circle key={`group-b-${index}`} cx={cx} cy={cy} r="9" fill="#c084fc" stroke="#18181b" strokeWidth="2" />
          ))}
        </svg>

        <DiagramLabel x="13.5%" y="11.5%" text="y" className="text-lg text-zinc-300" />
        <DiagramLabel x="88.5%" y="88.5%" text="x" className="text-lg text-zinc-300" />

        <DiagramLabel x="30%" y="79%" className="text-center">
          <div className="rounded-lg border border-zinc-700/80 bg-zinc-950/80 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-zinc-300 shadow-lg backdrop-blur-sm">
            Group A
          </div>
        </DiagramLabel>

        <DiagramLabel x="72%" y="20%" className="text-center">
          <div className="rounded-lg border border-purple-400/35 bg-purple-950/20 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-purple-200 shadow-lg backdrop-blur-sm">
            Group B
          </div>
        </DiagramLabel>

        <DiagramLabel x="66%" y="73%" className="text-center">
          <div className="max-w-72 rounded-xl border border-rose-500/30 bg-zinc-950/90 px-4 py-3 text-left shadow-2xl backdrop-blur-sm">
            <div className="mb-1 text-2.5 font-black uppercase tracking-[0.24em] text-rose-400">Overall line</div>
            <div className="text-xs font-semibold leading-snug text-zinc-300">
              Can suggest a trend while hiding separate subgroup behaviour.
            </div>
          </div>
        </DiagramLabel>
      </div>
    </div>
  </DiagramPanel>
);
