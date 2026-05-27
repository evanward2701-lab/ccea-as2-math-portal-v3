import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const rows = [
  {
    method: 'Census',
    cue: 'Every member',
    advantage: '100% accurate for the population measured.',
    disadvantage: 'Time-consuming and expensive.',
    accent: 'emerald',
  },
  {
    method: 'Simple Random Sample',
    cue: 'Equal chance',
    advantage: 'Free from human selection bias.',
    disadvantage: 'Needs a full sampling frame and may miss small subgroups.',
    accent: 'amber',
  },
  {
    method: 'Stratified',
    cue: 'Proportional groups',
    advantage: 'Highly representative of the population structure.',
    disadvantage: 'Requires prior knowledge of the population strata sizes.',
    accent: 'purple',
  },
] as const;

const accentClasses = {
  emerald: {
    row: 'border-emerald-500/25 bg-emerald-950/10',
    title: 'text-emerald-300',
    chip: 'border-emerald-500/25 bg-emerald-950/20 text-emerald-300',
  },
  amber: {
    row: 'border-amber-500/25 bg-amber-950/10',
    title: 'text-amber-300',
    chip: 'border-amber-500/25 bg-amber-950/20 text-amber-300',
  },
  purple: {
    row: 'border-purple-500/25 bg-purple-950/10',
    title: 'text-purple-300',
    chip: 'border-purple-500/25 bg-purple-950/20 text-purple-300',
  },
};

export const SamplingTableSVG: React.FC = () => (
  <DiagramPanel
    title="Fig 2. S1 Sampling Methodologies"
    analysis={
      <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 px-4 py-3 text-center text-sm leading-relaxed text-zinc-300">
        Selecting a sampling technique means balancing accuracy, cost, practicality, and representation.
      </div>
    }
  >
    <div className="w-full max-w-5xl">
      <div className="overflow-x-auto">
        <div className="min-w-[820px] space-y-3">
          <div className="grid grid-cols-[1.05fr_1.35fr_1.55fr] gap-3 rounded-lg border border-zinc-800/70 bg-zinc-950/45 px-4 py-3 text-2.5 font-black uppercase tracking-[0.24em] text-zinc-500">
            <div>Method</div>
            <div>Advantage</div>
            <div>Disadvantage</div>
          </div>

          {rows.map(({ method, cue, advantage, disadvantage, accent }) => {
            const colors = accentClasses[accent];

            return (
              <div
                key={method}
                className={`grid min-h-28 grid-cols-[1.05fr_1.35fr_1.55fr] items-stretch gap-3 rounded-lg border ${colors.row} p-3 shadow-xl`}
              >
                <div className="flex min-w-0 flex-col justify-center rounded-md border border-zinc-800/70 bg-zinc-950/45 px-4 py-3">
                  <div className={`text-base font-black leading-tight ${colors.title}`}>{method}</div>
                  <div className={`mt-2 w-full rounded-md border px-2.5 py-1 text-center text-[0.62rem] font-bold uppercase tracking-[0.08em] whitespace-nowrap ${colors.chip}`}>
                    {cue}
                  </div>
                </div>

                <div className="flex min-w-0 items-center rounded-md border border-zinc-800/70 bg-zinc-950/35 px-4 py-3 text-sm leading-relaxed text-zinc-200">
                  {advantage}
                </div>

                <div className="flex min-w-0 items-center rounded-md border border-zinc-800/70 bg-zinc-950/35 px-4 py-3 text-sm leading-relaxed text-zinc-300">
                  {disadvantage}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </DiagramPanel>
);
