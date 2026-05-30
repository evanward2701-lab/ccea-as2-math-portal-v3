import React from 'react';
import { MathInline, MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { cn } from '@/core/utils/cn';

type InequalityRow = {
  phrase: string;
  raw: string;
  calculator: string;
  cue: string;
  tone: string;
};

const rows: InequalityRow[] = [
  {
    phrase: '"More than 4"',
    raw: 'P(X > 4)',
    calculator: '1 - P(X \\leq 4)',
    cue: 'Strict upper tail: subtract cumulative at 4',
    tone: 'rose',
  },
  {
    phrase: '"At least 4" / "4 or more"',
    raw: 'P(X \\geq 4)',
    calculator: '1 - P(X \\leq 3)',
    cue: 'Inclusive upper tail: subtract cumulative before 4',
    tone: 'amber',
  },
  {
    phrase: '"Fewer than 4"',
    raw: 'P(X < 4)',
    calculator: 'P(X \\leq 3)',
    cue: 'Strict lower tail: drop one integer',
    tone: 'blue',
  },
  {
    phrase: '"At most 4" / "No more than 4"',
    raw: 'P(X \\leq 4)',
    calculator: 'P(X \\leq 4)',
    cue: 'Already in calculator format',
    tone: 'emerald',
  },
];

const toneClasses: Record<string, { dot: string; row: string; formula: string }> = {
  rose: {
    dot: 'bg-destructive',
    row: 'hover:bg-destructive/10',
    formula: 'border-destructive/20 bg-destructive/10 text-destructive',
  },
  amber: {
    dot: 'bg-primary',
    row: 'hover:bg-primary/10',
    formula: 'border-primary/20 bg-primary/10 text-primary',
  },
  blue: {
    dot: 'bg-primary',
    row: 'hover:bg-primary/10',
    formula: 'border-primary/20 bg-primary/10 text-primary',
  },
  emerald: {
    dot: 'bg-primary',
    row: 'hover:bg-primary/10',
    formula: 'border-primary/20 bg-primary/10 text-primary',
  },
};

const conversionRules = [
  { label: 'More than', rule: 'P(X > r) = 1 - P(X \\leq r)', tone: 'rose' },
  { label: 'At least', rule: 'P(X \\geq r) = 1 - P(X \\leq r-1)', tone: 'amber' },
  { label: 'Fewer than', rule: 'P(X < r) = P(X \\leq r-1)', tone: 'blue' },
  { label: 'At most', rule: 'P(X \\leq r)', tone: 'emerald' },
];

export const InequalityPanelSVG: React.FC = () => (
  <DiagramPanel
    title="Fig 2. Binomial Inequalities"
    analysis={
      <div className="rounded-xl border border-destructive/25 bg-destructive/20 p-5 text-sm text-destructive shadow-xl">
        <strong className="mb-2 block text-2.5 font-black uppercase tracking-[0.24em] text-destructive">CCEA Exam Pitfall:</strong>
        <p className="leading-relaxed text-destructive/90">
          Most standard calculators only process cumulative probabilities going downwards. Convert strict inequalities (
          <MathInline content="<" className="text-destructive" />, <MathInline content=">" className="text-destructive" />) and upper-tail inequalities (
          <MathInline content="\\geq" className="text-destructive" />) into a cumulative format using{' '}
          <MathInline content="P(X \\leq x)" className="text-destructive" />.
        </p>
      </div>
    }
  >
    <div className="mx-auto w-full max-w-6xl space-y-5">
      <div className="grid gap-3 md:grid-cols-2">
        {conversionRules.map(rule => {
          const tone = toneClasses[rule.tone];

          return (
            <div key={rule.label} className={cn('rounded-xl border p-3 shadow-xl', tone.formula)}>
              <div className="mb-2 flex items-center gap-2 text-2.5 font-black uppercase tracking-[0.22em] text-muted-foreground">
                <span className={cn('size-2 rounded-full', tone.dot)} />
                {rule.label}
              </div>
              <MathText content={rule.rule} center noMargin className="text-lg md:text-xl [&_p]:text-lg [&_p]:md:text-xl [&_p]:text-foreground" />
            </div>
          );
        })}
      </div>

      <div className="overflow-hidden rounded-2xl border border-primary/20 bg-card shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[820px] border-collapse text-center font-sans">
            <thead>
              <tr className="border-b border-primary/20 bg-card text-2.5 font-black uppercase tracking-[0.24em] text-muted-foreground">
                <th className="w-[34%] px-7 py-5 text-left">English Phrase</th>
                <th className="w-[25%] border-l border-primary/20 px-5 py-5">Raw Inequality</th>
                <th className="w-[41%] border-l border-primary/20 px-5 py-5 text-primary">
                  Calculator Format <MathInline content="P(X \\leq x)" className="ml-1 text-primary" />
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/70">
              {rows.map(row => {
                const tone = toneClasses[row.tone];

                return (
                  <tr key={row.phrase} className={cn('transition-colors', tone.row)}>
                    <td className="px-7 py-7 text-left align-middle">
                      <div className="flex items-start gap-3">
                        <span className={cn('mt-2 size-2.5 shrink-0 rounded-full', tone.dot)} />
                        <div>
                          <div className="text-base font-bold leading-tight text-foreground">{row.phrase}</div>
                          <div className="mt-2 text-xs font-medium leading-relaxed text-muted-foreground">{row.cue}</div>
                        </div>
                      </div>
                    </td>
                    <td className="border-l border-primary/20 px-5 py-7 align-middle">
                      <MathText content={row.raw} center noMargin className="text-3xl [&_p]:text-3xl [&_p]:text-foreground" />
                    </td>
                    <td className="border-l border-primary/20 bg-primary/8 px-5 py-7 align-middle">
                      <div className="mx-auto max-w-md rounded-xl border border-primary/20 bg-primary/15 px-4 py-4 shadow-inner">
                        <MathText content={row.calculator} center noMargin className="text-3xl [&_p]:text-3xl [&_p]:font-semibold [&_p]:text-primary" />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </DiagramPanel>
);
