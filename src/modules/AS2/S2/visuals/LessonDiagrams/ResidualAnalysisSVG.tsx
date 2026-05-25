import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { DiagramLabel } from '@/core/diagram-engine/primitives/DiagramLabel';
import { ArrowLibrary } from '@/core/diagram-engine/primitives/ArrowLibrary';
import { VectorArrow } from '@/core/diagram-engine/primitives/VectorArrow';

const residualPoints = [
  [178, 372],
  [252, 334],
  [326, 292],
  [400, 230],
  [474, 196],
  [548, 190],
  [622, 216],
  [696, 284],
  [770, 354],
] as const;

export const ResidualAnalysisSVG: React.FC = () => (
  <DiagramPanel
    title="Fig 6. Diagnostic Residual Analysis"
    analysis={
      <div className="mx-auto grid w-full max-w-5xl gap-4 md:grid-cols-[1fr_1fr]">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/45 p-4 text-sm leading-relaxed text-zinc-300 shadow-sm">
          <span className="font-bold text-zinc-100">Residual check:</span> a random spread around zero supports a linear model.
        </div>
        <div className="rounded-xl border border-rose-500/30 bg-rose-950/20 p-4 text-sm leading-relaxed text-rose-200 shadow-sm">
          <span className="font-bold text-rose-300">CCEA Exam Pitfall:</span> a clear pattern in residuals invalidates a linear regression model, even when PMCC is strong.
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
          aria-label="Residual plot with a curved pattern around the zero residual line"
        >
          <ArrowLibrary />

          <g opacity="0.24">
            <path d="M154 146 H820" stroke="#27272a" strokeWidth="1" />
            <path d="M154 222 H820" stroke="#27272a" strokeWidth="1" />
            <path d="M154 374 H820" stroke="#27272a" strokeWidth="1" />
            <path d="M154 450 H820" stroke="#27272a" strokeWidth="1" />
          </g>

          <VectorArrow x1={154} y1={438} x2={154} y2={96} type="structural" strokeWidth={2.2} />
          <VectorArrow x1={154} y1={298} x2={834} y2={298} type="structural" strokeWidth={2.2} />

          <line x1="154" y1="298" x2="820" y2="298" stroke="#34d399" strokeWidth="2" strokeDasharray="8 8" strokeLinecap="round" opacity="0.65" />

          <path
            d="M178 372 C292 292 366 218 474 196 C596 170 682 262 770 354"
            fill="none"
            stroke="#fb7185"
            strokeWidth="3"
            strokeDasharray="7 8"
            strokeLinecap="round"
            opacity="0.82"
          />

          {residualPoints.map(([cx, cy], index) => (
            <circle key={`residual-point-${index}`} cx={cx} cy={cy} r="10" fill="#fb7185" stroke="#18181b" strokeWidth="2" />
          ))}

          <circle cx="154" cy="298" r="3.5" fill="#71717a" />
        </svg>

        <DiagramLabel x="14.5%" y="14%" text="e" className="text-lg text-zinc-300" />
        <DiagramLabel x="91.5%" y="54.5%" text="x" className="text-lg text-zinc-300" />

        <DiagramLabel x="75%" y="47%" className="text-center">
          <div className="rounded-lg border border-emerald-500/25 bg-emerald-950/15 px-3 py-1.5 text-2.5 font-bold uppercase tracking-[0.22em] text-emerald-300 shadow-lg backdrop-blur-sm">
            zero residual line
          </div>
        </DiagramLabel>

        <DiagramLabel x="63%" y="25%" className="text-center">
          <div className="max-w-72 rounded-xl border border-rose-500/30 bg-zinc-950/90 px-4 py-3 text-left shadow-2xl backdrop-blur-sm">
            <div className="mb-1 text-2.5 font-black uppercase tracking-[0.24em] text-rose-400">curved pattern</div>
            <div className="text-xs font-semibold leading-snug text-zinc-300">
              Residuals are structured, so a straight-line model is suspect.
            </div>
          </div>
        </DiagramLabel>
      </div>
    </div>
  </DiagramPanel>
);
