import React from 'react';
import { MathInline, MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { DiagramLabel } from '@/core/diagram-engine/primitives/DiagramLabel';

const lowerX = 230;
const targetX = 443;
const upperX = 740;

export const InterpolationLineSVG: React.FC = () => (
  <DiagramPanel
    title="Fig 5. Linear Interpolation Setup"
    analysis={
      <div className="space-y-4">
        <div className="rounded-lg border border-zinc-800 bg-zinc-900/45 p-4">
          <h4 className="mb-2 text-2.5 font-black uppercase tracking-[0.22em] text-zinc-500">Assumption</h4>
          <p className="text-sm text-zinc-300 leading-relaxed">
            Interpolation assumes values are evenly distributed across the class interval. It maps the fraction of the cumulative-frequency gap directly onto the same fraction of the class width.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-amber-500/25 bg-amber-950/10 p-4">
            <h4 className="mb-2 text-2.5 font-black uppercase tracking-[0.22em] text-amber-400">Frequency Fraction</h4>
            <p className="mb-3 text-sm leading-relaxed text-zinc-300">
            Move 5 out of the total 12 cumulative-frequency gap.
            </p>
            <div className="flex min-h-16 items-center justify-center rounded-md border border-zinc-800/70 bg-zinc-950/55 px-4 pb-3 pt-4 text-center text-zinc-100">
              <MathText content="{\\large \\frac{10-5}{17-5}=\\frac{5}{12}}" className="translate-y-1 [&_p]:leading-none" noMargin />
            </div>
          </div>

          <div className="rounded-lg border border-emerald-500/25 bg-emerald-950/10 p-4">
            <h4 className="mb-2 text-2.5 font-black uppercase tracking-[0.22em] text-emerald-400">Class-width Fraction</h4>
            <p className="mb-3 text-sm leading-relaxed text-zinc-300">
            Apply the same fraction across the class width from 10 to 20.
            </p>
            <div className="flex min-h-16 items-center justify-center rounded-md border border-zinc-800/70 bg-zinc-950/55 px-4 pb-3 pt-4 text-center text-zinc-100">
              <MathText content="{\\large Q_2=10+\\frac{5}{12}(20-10)}" className="translate-y-1 [&_p]:leading-none" noMargin />
            </div>
          </div>
        </div>
      </div>
    }
  >
    <div className="mx-auto w-full max-w-5xl space-y-4">
      <div className="relative aspect-16/8 w-full overflow-hidden rounded-xl border border-zinc-800/60 bg-zinc-925 shadow-inner">
        <svg
          viewBox="0 0 900 450"
          className="absolute inset-0 h-full w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          shapeRendering="geometricPrecision"
          role="img"
          aria-label="Linear interpolation setup showing cumulative frequency fraction mapped onto class width"
        >
          <defs>
            <filter id="interpolation-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feColorMatrix in="blur" type="matrix" values="0 0 0 0 0.06 0 0 0 0 0.72 0 0 0 0 0.50 0 0 0 0.45 0" />
              <feBlend in="SourceGraphic" />
            </filter>
          </defs>

          <g stroke="#1e293b" strokeDasharray="7 9" strokeWidth="1.5">
            <line x1={lowerX} y1="115" x2={upperX} y2="115" />
            <line x1={lowerX} y1="245" x2={upperX} y2="245" />
          </g>

          <line x1={lowerX} y1="115" x2={upperX} y2="115" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
          <line x1={lowerX} y1="245" x2={upperX} y2="245" stroke="#475569" strokeWidth="3" strokeLinecap="round" />

          <g stroke="#3f3f46" strokeDasharray="6 8" strokeWidth="1.5">
            <line x1={lowerX} y1="115" x2={lowerX} y2="245" />
            <line x1={upperX} y1="115" x2={upperX} y2="245" />
          </g>
          <line x1={targetX} y1="115" x2={targetX} y2="245" stroke="#d4d4d8" strokeDasharray="6 8" strokeWidth="3" />

          <path d={`M ${lowerX} 145 L ${lowerX} 155 L ${targetX} 155 L ${targetX} 145`} stroke="#64748b" strokeWidth="1.5" />
          <path d={`M ${lowerX} 178 L ${lowerX} 188 L ${upperX} 188 L ${upperX} 178`} stroke="#64748b" strokeWidth="1.5" />
          <path d={`M ${lowerX} 285 L ${lowerX} 295 L ${upperX} 295 L ${upperX} 285`} stroke="#10b981" strokeWidth="1.8" />

          <g fill="#64748b">
            <circle cx={lowerX} cy="115" r="6" />
            <circle cx={upperX} cy="115" r="6" />
            <circle cx={lowerX} cy="245" r="6" />
            <circle cx={upperX} cy="245" r="6" />
          </g>
          <circle cx={targetX} cy="115" r="8" fill="#d4d4d8" />
          <circle cx={targetX} cy="245" r="8" fill="#10d6a1" filter="url(#interpolation-glow)" />

          <path d={`M ${targetX - 28} 218 C ${targetX - 12} 206 ${targetX + 12} 206 ${targetX + 28} 218`} stroke="#10b981" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        </svg>

        <DiagramLabel x="13%" y="26%">
          <div className="w-32 text-right text-2.5 font-bold uppercase leading-tight tracking-[0.14em] text-zinc-500">
            Cumulative<br />Frequency
          </div>
        </DiagramLabel>

        <DiagramLabel x="25.6%" y="16%">
          <MathInline content="5" className="text-zinc-200 [&_.katex]:text-lg" />
        </DiagramLabel>
        <DiagramLabel x="49.2%" y="16%">
          <MathInline content="10" className="text-zinc-200 [&_.katex]:text-lg" />
        </DiagramLabel>
        <DiagramLabel x="82.2%" y="16%">
          <MathInline content="17" className="text-zinc-200 [&_.katex]:text-lg" />
        </DiagramLabel>

        <DiagramLabel x="37.4%" y="36%">
          <div className="rounded-md border border-slate-700/60 bg-zinc-950/55 px-3 py-1 font-serif text-sm italic text-slate-300">
            gap = 5
          </div>
        </DiagramLabel>
        <DiagramLabel x="54%" y="43%">
          <div className="rounded-md border border-slate-700/60 bg-zinc-950/55 px-3 py-1 font-serif text-sm italic text-slate-300">
            total = 12
          </div>
        </DiagramLabel>

        <DiagramLabel x="13%" y="55%">
          <div className="w-32 text-right text-2.5 font-bold uppercase leading-tight tracking-[0.14em] text-zinc-500">
            Class<br />Width
          </div>
        </DiagramLabel>

        <DiagramLabel x="25.6%" y="63.5%">
          <MathInline content="10" className="text-zinc-200 [&_.katex]:text-lg" />
        </DiagramLabel>
        <DiagramLabel x="49.2%" y="63.5%">
          <div className="rounded-md border border-emerald-500/25 bg-emerald-950/45 px-2 py-1 text-emerald-200 shadow-xl">
            <MathInline content="Q_2" className="[&_.katex]:text-xl" />
          </div>
        </DiagramLabel>
        <DiagramLabel x="82.2%" y="63.5%">
          <MathInline content="20" className="text-zinc-200 [&_.katex]:text-lg" />
        </DiagramLabel>

        <DiagramLabel x="54%" y="73%">
          <div className="rounded-md border border-emerald-500/25 bg-emerald-950/20 px-3 py-1 font-serif text-sm italic text-emerald-300">
            class width = 10
          </div>
        </DiagramLabel>
      </div>

      <div className="rounded-xl border border-zinc-800/70 bg-zinc-925/80 p-5 text-center shadow-xl">
        <h5 className="mb-4 text-2.5 font-black uppercase tracking-[0.24em] text-zinc-500">Interpolation Ratio</h5>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex min-h-20 items-center justify-center rounded-md border border-zinc-800/70 bg-zinc-950/50 px-4 pb-4 pt-5">
            <MathText content="{\\Large \\frac{Q_2-10}{20-10}=\\frac{10-5}{17-5}}" className="translate-y-1 [&_p]:leading-none" noMargin />
          </div>
          <div className="flex min-h-20 items-center justify-center rounded-md border border-emerald-500/20 bg-emerald-950/10 px-4 pb-4 pt-5 text-emerald-100">
            <MathText content="{\\Large \\frac{Q_2-10}{10}=\\frac{5}{12}}" className="translate-y-1 [&_p]:leading-none" noMargin />
          </div>
        </div>
      </div>
    </div>
  </DiagramPanel>
);
