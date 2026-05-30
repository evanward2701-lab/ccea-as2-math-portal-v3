import React from 'react';
import { MathInline, MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { cn } from '@/core/utils/cn';

const summaryStats = ['r', 'n', '\\sum x', '\\sum y', '\\sum x^2', '\\sum y^2', '\\sum xy'];

const statisticTones = [
  'border-primary/25 bg-primary/10 text-primary',
  'border-primary/10 bg-primary/5 text-foreground',
  'border-primary/25 bg-primary/10 text-primary',
  'border-purple-500/25 bg-purple-950/10 text-purple-200',
  'border-primary/25 bg-primary/10 text-primary',
  'border-purple-500/25 bg-purple-950/10 text-purple-200',
  'border-primary/25 bg-primary/10 text-primary',
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
    border: 'border-primary/25',
    bg: 'bg-primary/10',
    text: 'text-primary',
  },
  emerald: {
    border: 'border-primary/25',
    bg: 'bg-primary/10',
    text: 'text-primary',
  },
  amber: {
    border: 'border-primary/25',
    bg: 'bg-primary/10',
    text: 'text-primary',
  },
};

export const PMCCPanelSVG: React.FC = () => (
  <DiagramPanel
    title="Fig 2. PMCC Core Formula"
    analysis={
      <div className="mx-auto grid w-full max-w-5xl gap-4 md:grid-cols-[1fr_1fr]">
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 shadow-sm">
          <p className="text-sm leading-relaxed text-foreground">
            PMCC measures the strength and direction of <strong className="font-semibold text-primary">linear</strong> correlation.
            Build the three corrected sums first, then substitute them into the final ratio.
          </p>
        </div>

        <div className="rounded-xl border border-destructive/30 bg-destructive/20 p-4 shadow-sm">
          <div className="mb-2 text-2.5 font-black uppercase tracking-[0.22em] text-destructive">CCEA Exam Pitfall</div>
          <p className="text-sm leading-relaxed text-destructive">
            Always verify <MathInline content="-1 \\le r \\le 1" className="text-destructive" />. A result like{' '}
            <MathInline content="r=1.2" className="text-destructive" /> means the arithmetic must be checked.
          </p>
        </div>
      </div>
    }
  >
    <div className="mx-auto w-full max-w-5xl rounded-2xl border border-primary/20 bg-card p-5 shadow-2xl">
      <div className="rounded-xl border border-primary/20 bg-card p-5 shadow-inner">
        <div className="grid gap-4 lg:grid-cols-[1fr_280px]">
          <div className="flex min-h-32 items-center justify-center rounded-xl border border-primary/20 bg-card px-5 pb-5 pt-6 text-foreground shadow-sm">
            <MathText content="{\\Huge r=\\frac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}}" className="translate-y-1 [&_p]:leading-none" noMargin />
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            <div className="flex min-h-20 items-center justify-center rounded-xl border border-primary/25 bg-primary/15 px-4 pb-3 pt-4 text-center">
              <MathText content="{\\large -1\\le r\\le 1}" className="translate-y-0.5 [&_p]:leading-none" noMargin />
            </div>
            <div className="rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 text-center">
              <div className="mb-1 text-2.5 font-black uppercase tracking-[0.2em] text-muted-foreground">Direction</div>
              <div className="text-sm font-semibold text-foreground">sign of <MathInline content="r" className="text-foreground" /></div>
            </div>
            <div className="rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 text-center">
              <div className="mb-1 text-2.5 font-black uppercase tracking-[0.2em] text-muted-foreground">Strength</div>
              <div className="text-sm font-semibold text-foreground">size of <MathInline content="|r|" className="text-foreground" /></div>
            </div>
          </div>
        </div>

        <div className="my-5 h-px bg-muted/30" />

        <section>
          <h5 className="mb-4 text-center text-2.5 font-black uppercase tracking-[0.24em] text-muted-foreground">
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
                'grid items-center gap-4 rounded-xl border bg-card p-4 shadow-sm sm:grid-cols-[180px_1fr]',
                tone.border,
                tone.bg
              )}
            >
              <h5 className={cn('text-center text-2.5 font-black uppercase tracking-[0.22em] sm:text-left', tone.text)}>
                {label}
              </h5>
              <div className="flex min-h-24 items-center justify-center rounded-md border border-primary/20 bg-card px-4 pb-4 pt-5 text-center text-foreground">
                <MathText content={`{\\Large ${formula}}`} className="translate-y-1 [&_p]:leading-none" noMargin />
              </div>
            </div>
          );
        })}

        <div className="grid items-center gap-4 rounded-xl border border-destructive/25 bg-destructive/10 p-4 shadow-sm sm:grid-cols-[180px_1fr]">
          <h5 className="text-center text-2.5 font-black uppercase tracking-[0.22em] text-destructive sm:text-left">
            Full formula
          </h5>
          <div className="flex min-h-28 items-center justify-center rounded-md border border-destructive/20 bg-card px-4 pb-4 pt-5 text-center text-foreground">
            <MathText content={`{\\large ${fullPMCCFormula}}`} className="translate-y-1 [&_p]:leading-none" noMargin />
          </div>
        </div>
      </div>
    </div>
  </DiagramPanel>
);
