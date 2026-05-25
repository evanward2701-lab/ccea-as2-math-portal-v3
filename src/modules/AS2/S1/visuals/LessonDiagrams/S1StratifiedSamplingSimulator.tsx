import React, { useState } from 'react';
import { MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

import { cn } from '@/core/utils/cn';

const POPULATION = { A: 50, B: 30, C: 20, total: 100 };

interface StratumRowProps {
  name: string;
  popSize: number;
  sampleSize: number;
  totalPop: number;
  n: number;
  color: 'sky' | 'amber' | 'purple';
}

const StratumRow: React.FC<StratumRowProps> = ({ name, popSize, sampleSize, totalPop, n, color }) => {
  const colorClasses = {
    sky: { bg: 'bg-zinc-500/20', border: 'border-zinc-500', text: 'text-zinc-400' },
    amber: { bg: 'bg-amber-500/20', border: 'border-amber-500', text: 'text-amber-400' },
    purple: { bg: 'bg-purple-500/20', border: 'border-purple-500', text: 'text-purple-400' },
  };

  const dotClasses = {
    sky: {
      selected: 'bg-zinc-400 ring-2 ring-offset-2 ring-offset-zinc-900 ring-emerald-400',
      unselected: 'bg-zinc-500/50',
    },
    amber: {
      selected: 'bg-amber-400 ring-2 ring-offset-2 ring-offset-zinc-900 ring-emerald-400',
      unselected: 'bg-amber-500/50',
    },
    purple: {
      selected: 'bg-purple-400 ring-2 ring-offset-2 ring-offset-zinc-900 ring-emerald-400',
      unselected: 'bg-purple-500/50',
    },
  };

  return (
    <div className={`p-4 rounded-lg border border-zinc-800 ${colorClasses[color].bg}`}>
      <div className="flex justify-between items-center mb-3">
        <h4 className={`font-bold ${colorClasses[color].text}`}>Stratum {name}</h4>
        <div className="text-xs text-zinc-400">
          Population: {popSize} &rarr; Sample: <span className="font-bold text-emerald-400">{sampleSize}</span>
        </div>
      </div>
      <div className="grid grid-cols-10 gap-1.5">
        {Array.from({ length: popSize }).map((_, i) => (
          <div
            key={i}
            className={cn(
              'w-full aspect-square rounded-full',
              i < sampleSize ? dotClasses[color].selected : dotClasses[color].unselected
            )}
          />
        ))}
      </div>
      <div className="text-xs text-zinc-400 mt-4 text-center bg-zinc-925/50 p-2 rounded border border-zinc-800/60">
        <MathText content={`\\text{Sample}_${name} = \\frac{${popSize}}{${totalPop}} \\times ${n} \\approx ${sampleSize}`} />
      </div>
    </div>
  );
};

export const S1StratifiedSamplingSimulator: React.FC = () => {
  const [sampleSize, setSampleSize] = useState(20);

  const sampleA = Math.round((POPULATION.A / POPULATION.total) * sampleSize);
  const sampleB = Math.round((POPULATION.B / POPULATION.total) * sampleSize);
  const sampleC = sampleSize - sampleA - sampleB; // Ensure total matches

  return (
    <DiagramPanel
      title="Fig. Stratified Sampling Simulator"
      analysis={
        <div className="space-y-4">
          <p className="text-sm text-zinc-400 italic">
            Stratified sampling ensures subgroups (strata) are represented proportionally in the final sample. Adjust the sample size to see how the allocation changes.
          </p>
          <div className="p-3 bg-zinc-900/50 border border-zinc-800 rounded-lg">
            <h4 className="font-bold text-zinc-400 mb-2 text-sm uppercase tracking-wider">Allocation Formula</h4>
            <div className="text-center bg-zinc-925 p-2 rounded border border-zinc-800/60">
              <MathText content="\text{Sample Size} = \frac{\text{Strata Size}}{\text{Total Pop.}} \times n" />
            </div>
          </div>
          <div className="p-3 bg-rose-950/30 border border-rose-900/40 rounded-lg text-sm text-rose-300">
            <strong className="font-bold text-rose-400">CCEA Exam Pitfall:</strong> After rounding, always check that your calculated stratum sample sizes add up to the exact target sample size. If not, adjust one of the rounded values.
          </div>
        </div>
      }
    >
      <div className="w-full flex flex-col items-center">
        <div className="w-full max-w-md flex flex-col gap-3 mb-8 rounded-lg border border-zinc-800 bg-zinc-900/50 p-3">
          <div className="flex items-center gap-4">
            <label htmlFor="sample-size-slider" className="text-sm font-medium text-zinc-300 whitespace-nowrap">
              Sample Size <MathText content="n" className="inline [&_p]:inline" />
            </label>
            <input
              id="sample-size-slider"
              type="range"
              min="10"
              max="50"
              step="5"
              value={sampleSize}
              onChange={(e) => setSampleSize(Number(e.target.value))}
              className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer"
            />
            <span className="text-sm font-mono text-zinc-400 w-12 text-right">{sampleSize}</span>
          </div>
        </div>

        <div className="w-full max-w-3xl space-y-6">
          <StratumRow name="A" popSize={POPULATION.A} sampleSize={sampleA} totalPop={POPULATION.total} n={sampleSize} color="sky" />
          <StratumRow name="B" popSize={POPULATION.B} sampleSize={sampleB} totalPop={POPULATION.total} n={sampleSize} color="amber" />
          <StratumRow name="C" popSize={POPULATION.C} sampleSize={sampleC} totalPop={POPULATION.total} n={sampleSize} color="purple" />
        </div>

        <div className="mt-6 p-3 bg-zinc-900 border border-zinc-700 rounded-lg text-sm font-mono text-emerald-400">
          Verification: {sampleA} + {sampleB} + {sampleC} = {sampleA + sampleB + sampleC}
        </div>
      </div>
    </DiagramPanel>
  );
};
