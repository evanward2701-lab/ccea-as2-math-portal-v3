import React from 'react';
import { MathInline, MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { cn } from '@/core/utils/cn';

const conditions = [
  {
    id: 1,
    title: 'Fixed Trials',
    symbol: 'n',
    check: 'Decide before data is collected',
    desc: 'The experiment has a strict, finite number of repeated trials.',
    tone: 'emerald',
    classes: 'border-primary/35 bg-primary/15 text-primary',
    badge: 'border-primary/40 bg-primary/45 text-primary',
  },
  {
    id: 2,
    title: 'Two Outcomes',
    symbol: 'S/F',
    check: 'Success or failure only',
    desc: 'Every trial must resolve into exactly one of two named states.',
    tone: 'amber',
    classes: 'border-primary/35 bg-primary/15 text-primary',
    badge: 'border-primary/40 bg-primary/45 text-primary',
  },
  {
    id: 3,
    title: 'Constant Probability',
    symbol: 'p',
    check: 'Same chance each trial',
    desc: 'The probability of success stays unchanged throughout the process.',
    tone: 'blue',
    classes: 'border-primary/35 bg-primary/15 text-primary',
    badge: 'border-primary/40 bg-primary/45 text-primary',
  },
  {
    id: 4,
    title: 'Independent Trials',
    symbol: '\\perp',
    check: 'No trial changes another',
    desc: 'The result of one trial cannot influence the result of any other trial.',
    tone: 'rose',
    classes: 'border-destructive/35 bg-destructive/15 text-destructive',
    badge: 'border-destructive/40 bg-destructive/45 text-destructive',
  },
];

export const BinomialConditionsChecklistSVG: React.FC = () => (
  <DiagramPanel
    title="Fig 4. Model Validation Requirements"
    analysis={
      <div className="mx-auto grid w-full max-w-5xl gap-4 md:grid-cols-[1fr_1.1fr]">
        <div className="rounded-xl border border-primary/20 bg-card p-5 shadow-xl">
          <h4 className="mb-3 text-2.5 font-black uppercase tracking-[0.28em] text-muted-foreground">
            Modelling Notation
          </h4>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            Use a binomial model only when all four checks pass.
          </p>
        </div>

        <div className="flex items-center justify-center rounded-xl border border-primary/25 bg-primary/10 p-5 shadow-xl">
          <MathText
            content="X \\sim B(n,p)"
            center
            noMargin
            className="text-3xl text-foreground md:text-4xl"
          />
        </div>
      </div>
    }
  >
    <div className="mx-auto w-full max-w-6xl space-y-5">
      <div className="rounded-2xl border border-primary/20 bg-card p-4 shadow-2xl md:p-6">
        <div className="grid gap-4 lg:grid-cols-2">
          {conditions.map((condition) => (
            <section
              key={condition.id}
              className={cn(
                'min-h-48 rounded-xl border p-5 shadow-xl transition-colors',
                condition.classes
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className={cn('flex size-10 shrink-0 items-center justify-center rounded-lg border font-mono text-sm font-black', condition.badge)}>
                    {condition.id}
                  </span>
                  <div>
                    <h4 className="text-2.5 font-black uppercase tracking-[0.24em] text-muted-foreground">
                      Check {condition.id}
                    </h4>
                    <p className="mt-1 text-lg font-black text-current md:text-xl">
                      {condition.title}
                    </p>
                  </div>
                </div>

                <div className={cn('rounded-lg border px-3 py-2 shadow-inner', condition.badge)}>
                  <MathText
                    content={condition.symbol}
                    noMargin
                    center
                    className="text-xl"
                  />
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-foreground md:text-base">
                {condition.desc}
              </p>

              <div className="mt-5 rounded-lg border border-primary/20 bg-card px-4 py-3 text-sm font-semibold text-foreground">
                {condition.check}
              </div>
            </section>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-[1fr_1.15fr]">
        <div className="rounded-xl border border-primary/20 bg-card p-5 text-sm leading-relaxed text-muted-foreground shadow-xl md:text-base">
          <strong className="font-bold text-foreground">Decision rule:</strong> if any condition fails, avoid the binomial formula and use the method that matches the actual scenario.
        </div>

        <div className="rounded-xl border border-destructive/30 bg-destructive/25 p-5 text-sm leading-relaxed text-destructive shadow-xl md:text-base">
          <strong className="font-bold text-destructive">CCEA Exam Pitfall:</strong> fixed <MathInline content="n" className="text-destructive" />, two outcomes, constant <MathInline content="p" className="text-destructive" />, and independence must all be stated or implied.
        </div>
      </div>
    </div>
  </DiagramPanel>
);
