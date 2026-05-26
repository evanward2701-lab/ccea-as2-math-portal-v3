import React, { useState } from 'react';
import { MathInline, MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { cn } from '@/core/utils/cn';

type InequalityPhrase = 'at most' | 'fewer than' | 'at least' | 'more than';

type PhraseMeta = {
  label: string;
  shortLabel: string;
  cue: string;
  tone: string;
  dot: string;
  fill: string;
  ring: string;
  panel: string;
  included: string;
};

const phraseMeta: Record<InequalityPhrase, PhraseMeta> = {
  'at most': {
    label: 'At most',
    shortLabel: 'Includes r',
    cue: 'Use the cumulative value at the boundary.',
    tone: 'text-emerald-300',
    dot: 'bg-emerald-400',
    fill: 'fill-emerald-400',
    ring: 'stroke-emerald-300',
    panel: 'border-emerald-500/25 bg-emerald-950/15',
    included: 'Everything up to and including r',
  },
  'fewer than': {
    label: 'Fewer than',
    shortLabel: 'Excludes r',
    cue: 'Step back one integer before using cumulative probability.',
    tone: 'text-blue-300',
    dot: 'bg-blue-400',
    fill: 'fill-blue-400',
    ring: 'stroke-blue-300',
    panel: 'border-blue-500/25 bg-blue-950/15',
    included: 'Everything strictly below r',
  },
  'at least': {
    label: 'At least',
    shortLabel: 'Includes r',
    cue: 'Use the complement of the cumulative value before r.',
    tone: 'text-amber-300',
    dot: 'bg-amber-400',
    fill: 'fill-amber-400',
    ring: 'stroke-amber-300',
    panel: 'border-amber-500/25 bg-amber-950/15',
    included: 'Everything from r upwards',
  },
  'more than': {
    label: 'More than',
    shortLabel: 'Excludes r',
    cue: 'Use the complement of the cumulative value at r.',
    tone: 'text-rose-300',
    dot: 'bg-rose-400',
    fill: 'fill-rose-400',
    ring: 'stroke-rose-300',
    panel: 'border-rose-500/25 bg-rose-950/15',
    included: 'Everything strictly above r',
  },
};

export const S4InequalityTranslator: React.FC = () => {
  const [phrase, setPhrase] = useState<InequalityPhrase>('at most');
  const [r, setR] = useState(5);
  const n = 10;
  const active = phraseMeta[phrase];

  const getCondition = (x: number) => {
    switch (phrase) {
      case 'at most':
        return x <= r;
      case 'fewer than':
        return x < r;
      case 'at least':
        return x >= r;
      case 'more than':
        return x > r;
    }
  };

  const getRawMath = () => {
    switch (phrase) {
      case 'at most':
        return `P(X \\leq ${r})`;
      case 'fewer than':
        return `P(X < ${r})`;
      case 'at least':
        return `P(X \\geq ${r})`;
      case 'more than':
        return `P(X > ${r})`;
    }
  };

  const getCalculatorMath = () => {
    switch (phrase) {
      case 'at most':
        return `P(X \\leq ${r})`;
      case 'fewer than':
        return `P(X \\leq ${r - 1})`;
      case 'at least':
        return `1 - P(X \\leq ${r - 1})`;
      case 'more than':
        return `1 - P(X \\leq ${r})`;
    }
  };

  const includedValues = Array.from({ length: n + 1 }, (_, i) => i).filter(getCondition);
  const includedLabel = includedValues.length > 0 ? includedValues.join(', ') : 'none';

  return (
    <DiagramPanel
      title="Fig. Binomial Inequality Translator"
      analysis={
        <div className="space-y-4">
          <p className="text-sm italic leading-relaxed text-zinc-400">
            Translating English phrases into mathematical inequalities is a critical skill for binomial problems. This tool shows exactly which integer outcomes are included before the calculator format is chosen.
          </p>

          <div className="grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
            <div className={cn('rounded-xl border p-4 shadow-xl', active.panel)}>
              <div className="mb-3 flex items-center gap-2 text-2.5 font-black uppercase tracking-[0.24em] text-zinc-500">
                <span className={cn('size-2 rounded-full', active.dot)} />
                Current Phrase
              </div>
              <div className={cn('text-xl font-black', active.tone)}>{active.label} {r}</div>
              <div className="mt-2 text-sm leading-relaxed text-zinc-400">{active.included}</div>
            </div>

            <div className="rounded-xl border border-emerald-500/25 bg-emerald-950/15 p-4 shadow-xl">
              <div className="mb-3 text-2.5 font-black uppercase tracking-[0.24em] text-emerald-400">Calculator-Ready Formula</div>
              <div className="rounded-lg border border-emerald-500/15 bg-zinc-950/50 px-4 py-4 shadow-inner">
                <MathText content={getCalculatorMath()} center noMargin className="text-3xl [&_p]:text-3xl [&_p]:font-semibold [&_p]:text-emerald-50" />
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-rose-500/25 bg-rose-950/20 p-5 text-sm text-rose-100/90 shadow-xl">
            <strong className="mb-2 block text-2.5 font-black uppercase tracking-[0.24em] text-rose-400">CCEA Exam Pitfall:</strong>
            "Fewer than 5" does not include 5, so use <MathInline content="X \\leq 4" className="text-rose-100" />. "At least 5" does include 5, so use{' '}
            <MathInline content="X \\geq 5" className="text-rose-100" />, calculated as <MathInline content="1 - P(X \\leq 4)" className="text-rose-100" />.
          </div>
        </div>
      }
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-7">
        <div className="grid w-full gap-4 rounded-2xl border border-zinc-800/80 bg-zinc-950/45 p-5 shadow-2xl md:grid-cols-[1fr_1.15fr]">
          <div className="min-w-0">
            <label className="mb-3 block text-2.5 font-black uppercase tracking-[0.24em] text-zinc-500">Phrase</label>
            <div className="grid grid-cols-2 gap-2">
              {(Object.keys(phraseMeta) as InequalityPhrase[]).map(option => {
                const meta = phraseMeta[option];
                const isActive = phrase === option;

                return (
                  <button
                    key={option}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setPhrase(option)}
                    className={cn(
                      'min-h-16 rounded-xl border px-3 py-3 text-left transition-all duration-200',
                      isActive ? meta.panel : 'border-zinc-800 bg-zinc-950/60 hover:border-zinc-700 hover:bg-zinc-900/70'
                    )}
                  >
                    <span className={cn('mb-1 flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em]', isActive ? meta.tone : 'text-zinc-400')}>
                      <span className={cn('size-2 rounded-full', isActive ? meta.dot : 'bg-zinc-700')} />
                      {meta.label}
                    </span>
                    <span className="block text-[11px] font-semibold text-zinc-500">{meta.shortLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex min-w-0 flex-col justify-between gap-4 rounded-xl border border-zinc-800/80 bg-zinc-950/60 p-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-2.5 font-black uppercase tracking-[0.24em] text-zinc-500">Boundary</div>
                <div className="mt-1 flex items-baseline gap-2">
                  <MathInline content="r" className="text-2xl text-zinc-100" />
                  <span className="font-mono text-2xl font-bold text-rose-300">{r}</span>
                </div>
              </div>
              <div className={cn('rounded-xl border px-4 py-3 text-right', active.panel)}>
                <div className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-500">Included values</div>
                <div className={cn('mt-1 font-mono text-sm font-bold', active.tone)}>{includedLabel}</div>
              </div>
            </div>

            <input
              type="range"
              min="1"
              max={n}
              value={r}
              onChange={e => setR(Number(e.target.value))}
              className="w-full accent-rose-400"
              aria-label="Boundary value r"
            />
          </div>
        </div>

        <div className="w-full rounded-2xl border border-zinc-800/80 bg-zinc-950/45 p-5 shadow-2xl">
          <div className="mb-5 grid gap-3 md:grid-cols-3">
            <div className={cn('rounded-xl border p-4 shadow-xl', active.panel)}>
              <div className="mb-2 text-2.5 font-black uppercase tracking-[0.22em] text-zinc-500">English</div>
              <div className={cn('text-center text-xl font-black capitalize', active.tone)}>"{phrase} {r}"</div>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4 shadow-xl">
              <div className="mb-2 text-2.5 font-black uppercase tracking-[0.22em] text-zinc-500">Raw Inequality</div>
              <MathText content={getRawMath()} center noMargin className="text-2xl [&_p]:text-2xl [&_p]:text-zinc-100" />
            </div>
            <div className="rounded-xl border border-emerald-500/25 bg-emerald-950/15 p-4 shadow-xl">
              <div className="mb-2 text-2.5 font-black uppercase tracking-[0.22em] text-emerald-400">Calculator</div>
              <MathText content={getCalculatorMath()} center noMargin className="text-2xl [&_p]:text-2xl [&_p]:text-emerald-50" />
            </div>
          </div>

          <div className="relative mx-auto aspect-[11/2.2] w-full max-w-5xl">
            <svg viewBox="0 0 700 140" className="absolute inset-0 h-full w-full" overflow="visible" role="img" aria-label="Number line showing included integer values">
            <line x1="44" y1="70" x2="656" y2="70" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
            <line x1="44" y1="70" x2="656" y2="70" stroke="#94a3b8" strokeWidth="1" strokeOpacity="0.28" strokeLinecap="round" />
            {Array.from({ length: n + 1 }).map((_, i) => {
              const isIncluded = getCondition(i);
              const isBoundary = i === r;
              const x = 50 + i * 60;

              return (
                <g key={i}>
                  <circle
                    cx={x}
                    cy="70"
                    r={isBoundary ? 16 : 12}
                    className={cn(
                      'transition-all duration-200',
                      isIncluded ? active.fill : 'fill-zinc-700',
                      isBoundary ? `${active.ring} stroke-[4]` : 'stroke-zinc-950/70 stroke-[2]'
                    )}
                  />
                  <text
                    x={x}
                    y={76}
                    textAnchor="middle"
                    className={cn('font-mono text-base font-black', isIncluded ? 'fill-zinc-950' : 'fill-zinc-400')}
                  >
                    {i}
                  </text>
                  {isBoundary && (
                    <text x={x} y={36} textAnchor="middle" className={cn('fill-current font-serif text-2xl font-black', active.tone)}>
                      r
                    </text>
                  )}
                </g>
              );
            })}
          </svg>
          </div>

          <div className="mx-auto mt-2 max-w-2xl rounded-xl border border-zinc-800 bg-zinc-950/55 p-4 text-center shadow-inner">
            <div className="text-xs font-black uppercase tracking-[0.24em] text-zinc-500">Rule cue</div>
            <div className="mt-2 text-sm font-medium leading-relaxed text-zinc-300">{active.cue}</div>
          </div>
        </div>
      </div>
    </DiagramPanel>
  );
};
