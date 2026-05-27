import React from 'react';
import { MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { SVGLibrary } from '@/core/diagram-engine/primitives/SVGLibrary';
import { VectorArrow } from '@/core/diagram-engine/primitives/VectorArrow';

const strata = [
  { year: 'Yr 12', population: 120, sample: 24, accent: 'emerald' },
  { year: 'Yr 13', population: 100, sample: 20, accent: 'amber' },
  { year: 'Yr 14', population: 80, sample: 16, accent: 'purple' },
] as const;

const accentClasses = {
  emerald: {
    border: 'border-emerald-400',
    softBorder: 'border-emerald-500/25',
    text: 'text-emerald-300',
    muted: 'text-emerald-400',
    bg: 'bg-emerald-950/10',
  },
  amber: {
    border: 'border-amber-400',
    softBorder: 'border-amber-500/25',
    text: 'text-amber-300',
    muted: 'text-amber-400',
    bg: 'bg-amber-950/10',
  },
  purple: {
    border: 'border-purple-400',
    softBorder: 'border-purple-500/25',
    text: 'text-purple-300',
    muted: 'text-purple-400',
    bg: 'bg-purple-950/10',
  },
};

export const StratifiedProportionVisual: React.FC = () => (
  <DiagramPanel
    title="Fig 3. Stratified Sample Allocation"
    analysis={
      <div className="space-y-5">
        <div className="space-y-2">
          <h4 className="text-2.5 font-black uppercase tracking-[0.22em] text-zinc-500">
            Mathematical Allocation Pipeline
          </h4>
          <p className="text-sm leading-relaxed text-zinc-400">
            To keep the sample proportional, each stratum receives the same fraction of the target sample as it has in the population.
          </p>
          <div className="rounded-lg border border-emerald-500/20 bg-zinc-925 px-4 py-3 text-center text-emerald-300">
            <MathText
              content="\\text{Stratum sample}=\\frac{\\text{Stratum population}}{\\text{Total population}}\\times\\text{Sample size}"
              noMargin
            />
          </div>
        </div>

        <div className="grid gap-3">
          {strata.map(({ year, population, sample, accent }) => {
            const colors = accentClasses[accent];

            return (
              <div
                key={year}
                className={`grid gap-3 rounded-lg border ${colors.softBorder} ${colors.bg} p-3 md:grid-cols-[120px_1fr_76px] md:items-center`}
              >
                <div>
                  <div className={`text-sm font-black ${colors.text}`}>{year}</div>
                  <div className="text-2.5 uppercase tracking-[0.18em] text-zinc-500">Sample</div>
                </div>
                <div className="rounded-md border border-zinc-800/70 bg-zinc-950/55 px-3 py-2 text-center">
                  <MathText content={`\\frac{${population}}{300}\\times 60=${sample}`} noMargin />
                </div>
                <div className={`rounded-md border ${colors.softBorder} bg-zinc-950/55 px-3 py-2 text-center text-sm font-black ${colors.text}`}>
                  {sample}
                </div>
              </div>
            );
          })}
        </div>

        <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 px-4 py-3 text-center font-mono text-sm text-zinc-400">
          Verification: <span className="text-zinc-100">24 + 20 + 16 = 60</span>
        </div>
      </div>
    }
  >
    <div className="w-full max-w-5xl space-y-6">
      <div className="overflow-x-auto rounded-xl border border-zinc-800/60 bg-zinc-925 shadow-inner">
        <div className="relative mx-auto aspect-16/7 min-h-[360px] w-full min-w-[860px] overflow-hidden">
          <SVGLibrary />
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 960 420"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            shapeRendering="geometricPrecision"
            role="img"
            aria-label="Stratified sampling allocation flow from population to strata to target sample"
          >
            <VectorArrow x1={211} y1={210} x2={331} y2={104} type="structural" marker="default" strokeWidth={2.4} />
            <VectorArrow x1={211} y1={210} x2={331} y2={210} type="structural" marker="default" strokeWidth={2.4} />
            <VectorArrow x1={211} y1={210} x2={331} y2={316} type="structural" marker="default" strokeWidth={2.4} />
            <VectorArrow x1={503} y1={104} x2={685} y2={210} type="structural" marker="default" strokeWidth={2.2} dashed />
            <VectorArrow x1={503} y1={210} x2={685} y2={210} type="structural" marker="default" strokeWidth={2.2} dashed />
            <VectorArrow x1={503} y1={316} x2={685} y2={210} type="structural" marker="default" strokeWidth={2.2} dashed />
          </svg>

          <div className="absolute left-[2%] top-1/2 flex h-28 w-52 -translate-y-1/2 flex-col items-center justify-center rounded-lg border-2 border-zinc-400 bg-zinc-950/70 px-5 text-center shadow-xl">
            <div className="text-sm font-black uppercase tracking-[0.18em] text-zinc-100">Total Population</div>
            <div className="mt-1 font-mono text-sm text-zinc-400">N = 300</div>
          </div>

          <div className="absolute left-[33%] top-1/2 grid w-60 -translate-y-1/2 gap-5">
            {strata.map(({ year, population, sample, accent }) => {
              const colors = accentClasses[accent];

              return (
                <div
                  key={year}
                  className={`flex h-24 items-center justify-between gap-3 rounded-lg border-2 ${colors.border} bg-slate-900/90 px-4 shadow-xl`}
                >
                  <div className="min-w-0">
                    <div className={`truncate text-sm font-black uppercase tracking-[0.12em] ${colors.text}`}>
                      {year} Strata
                    </div>
                    <div className="mt-1 font-mono text-xs text-zinc-400">Population {population}</div>
                  </div>
                  <div className={`shrink-0 rounded-md border ${colors.softBorder} bg-zinc-950/55 px-3 py-2 text-center ${colors.muted}`}>
                    <div className="text-2.5 uppercase tracking-[0.14em] text-zinc-500">Sample</div>
                    <div className="font-mono text-sm font-black">{sample}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="absolute right-[6%] top-1/2 flex h-28 w-52 -translate-y-1/2 flex-col items-center justify-center rounded-lg border-2 border-dashed border-rose-500 bg-rose-950/10 px-5 text-center shadow-xl">
            <div className="text-sm font-black uppercase tracking-[0.16em] text-zinc-100">Target Sample</div>
            <div className="mt-1 font-mono text-sm text-rose-300">n = 60</div>
          </div>
        </div>
      </div>
    </div>
  </DiagramPanel>
);
