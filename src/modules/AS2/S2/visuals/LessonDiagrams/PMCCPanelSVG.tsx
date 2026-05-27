import React from 'react';
import { MathInline, MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { cn } from '@/core/utils/cn';

const summaryStats = ['r', 'n', '\\sum x', '\\sum y', '\\sum x^2', '\\sum y^2', '\\sum xy'];

const statisticTones = [
  'border-emerald-500/25 bg-emerald-950/10 text-emerald-200',
  'border-zinc-700/80 bg-zinc-900/60 text-zinc-200',
  'border-blue-500/25 bg-blue-950/10 text-blue-200',
  'border-purple-500/25 bg-purple-950/10 text-purple-200',
  'border-blue-500/25 bg-blue-950/10 text-blue-200',
  'border-purple-500/25 bg-purple-950/10 text-purple-200',
  'border-amber-500/25 bg-amber-950/10 text-amber-200',
];

const supportingFormulae = [
  {
    label: 'Spread in x',
    accent: 'blue',
    formula: 'S_{xx}=\\sum x^2-\\frac{(\\sum x)^2}{n}',
  },
  {
    label: 'Spread in y',
    accent: 'emerald',
    formula: 'S_{yy}=\\sum y^2-\\frac{(\\sum y)^2}{n}',
  },
  {
    label: 'Shared movement',
    accent: 'amber',
    formula: 'S_{xy}=\\sum xy-\\frac{\\sum x\\sum y}{n}',
  },
] as const;

const fullPMCCFormula = 'r=\\frac{n\\sum xy-\\sum x\\sum y}{\\sqrt{(n\\sum x^2-(\\sum x)^2)(n\\sum y^2-(\\sum y)^2)}}';

const accentClasses = {
  blue: {
    border: 'border-blue-500/25',
    bg: 'bg-blue-950/10',
    text: 'text-blue-300',
  },
  emerald: {
    border: 'border-emerald-500/25',
    bg: 'bg-emerald-950/10',
    text: 'text-emerald-300',
  },
  amber: {
    border: 'border-amber-500/25',
    bg: 'bg-amber-950/10',
    text: 'text-amber-300',
  },
};

export const PMCCPanelSVG: React.FC = () => (
  <DiagramPanel
    title="Fig 2. PMCC Core Formula"
    analysis={
      <div className="mx-auto grid w-full max-w-5xl gap-4 md:grid-cols-[1fr_1fr]">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/45 p-4 shadow-sm">
          <p className="text-sm leading-relaxed text-zinc-300">
            PMCC measures the strength and direction of <strong className="font-semibold text-emerald-400">linear</strong> correlation.
            Build the three corrected sums first, then substitute them into the final ratio.
          </p>
        </div>

        <div className="rounded-xl border border-rose-500/30 bg-rose-950/20 p-4 shadow-sm">
          <div className="mb-2 text-2.5 font-black uppercase tracking-[0.22em] text-rose-400">CCEA Exam Pitfall</div>
          <p className="text-sm leading-relaxed text-rose-200">
            Always verify <MathInline content="-1 \\le r \\le 1" className="text-rose-100" />. A result like{' '}
            <MathInline content="r=1.2" className="text-rose-100" /> means the arithmetic must be checked.
          </p>
        </div>
      </div>
    }
  >
    <div className="mx-auto w-full max-w-5xl rounded-2xl border border-zinc-800/80 bg-zinc-950/35 p-5 shadow-2xl">
      <div className="rounded-xl border border-zinc-800 bg-zinc-950/50 p-5 shadow-inner">
        <div className="grid gap-4 lg:grid-cols-[1fr_280px]">
          <div className="flex min-h-32 items-center justify-center rounded-xl border border-zinc-800/80 bg-zinc-950/65 px-5 pb-5 pt-6 text-zinc-100 shadow-sm">
            <MathText content="{\\Huge r=\\frac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}}" className="translate-y-1 [&_p]:leading-none" noMargin />
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            <div className="flex min-h-20 items-center justify-center rounded-xl border border-emerald-500/25 bg-emerald-950/15 px-4 pb-3 pt-4 text-center">
              <MathText content="{\\large -1\\le r\\le 1}" className="translate-y-0.5 [&_p]:leading-none" noMargin />
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/45 px-4 py-3 text-center">
              <div className="mb-1 text-2.5 font-black uppercase tracking-[0.2em] text-zinc-500">Direction</div>
              <div className="text-sm font-semibold text-zinc-300">sign of <MathInline content="r" className="text-zinc-100" /></div>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/45 px-4 py-3 text-center">
              <div className="mb-1 text-2.5 font-black uppercase tracking-[0.2em] text-zinc-500">Strength</div>
              <div className="text-sm font-semibold text-zinc-300">size of <MathInline content="|r|" className="text-zinc-100" /></div>
            </div>
          </div>
        </div>

        <div className="my-5 h-px bg-zinc-800/80" />

        <section>
          <h5 className="mb-4 text-center text-2.5 font-black uppercase tracking-[0.24em] text-zinc-500">
            Summary Statistics Needed
          </h5>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7">
            {summaryStats.map((stat, index) => (
              <div
                key={stat}
                className={cn(
                  'flex min-h-20 items-center justify-center rounded-lg border px-3 pb-3 pt-4 text-center shadow-sm',
                  statisticTones[index]
                )}
              >
                <MathText content={`{\\large ${stat}}`} className="translate-y-0.5 [&_p]:leading-none" noMargin />
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="mt-5 grid gap-3">
        {supportingFormulae.map(({ label, accent, formula }) => {
          const tone = accentClasses[accent];

          return (
            <div
              key={label}
              className={cn(
                'grid items-center gap-4 rounded-xl border bg-zinc-950/35 p-4 shadow-sm sm:grid-cols-[180px_1fr]',
                tone.border,
                tone.bg
              )}
            >
              <h5 className={cn('text-center text-2.5 font-black uppercase tracking-[0.22em] sm:text-left', tone.text)}>
                {label}
              </h5>
              <div className="flex min-h-24 items-center justify-center rounded-md border border-zinc-800/70 bg-zinc-950/55 px-4 pb-4 pt-5 text-center text-zinc-100">
                <MathText content={`{\\Large ${formula}}`} className="translate-y-1 [&_p]:leading-none" noMargin />
              </div>
            </div>
          );
        })}

        <div className="grid items-center gap-4 rounded-xl border border-rose-500/25 bg-rose-950/10 p-4 shadow-sm sm:grid-cols-[180px_1fr]">
          <h5 className="text-center text-2.5 font-black uppercase tracking-[0.22em] text-rose-300 sm:text-left">
            Full formula
          </h5>
          <div className="flex min-h-28 items-center justify-center rounded-md border border-rose-500/20 bg-zinc-950/55 px-4 pb-4 pt-5 text-center text-zinc-100">
            <MathText content={`{\\large ${fullPMCCFormula}}`} className="translate-y-1 [&_p]:leading-none" noMargin />
          </div>
        </div>
      </div>
    </div>
  </DiagramPanel>
);
