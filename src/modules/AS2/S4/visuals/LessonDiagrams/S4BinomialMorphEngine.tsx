import React, { useMemo, useState } from 'react';
import { MathInline, MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { cn } from '@/core/utils/cn';
import { DiagramLabel } from '@/core/diagram-engine/primitives/DiagramLabel';

const factorial = (n: number): number => (n <= 1 ? 1 : n * factorial(n - 1));
const choose = (n: number, k: number): number => (k < 0 || k > n) ? 0 : factorial(n) / (factorial(k) * factorial(n - k));
const binomialProb = (n: number, k: number, p: number): number => choose(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k);

export const S4BinomialMorphEngine: React.FC = () => {
  const [n, setN] = useState(10);
  const [p, setP] = useState(0.5);

  const probabilities = useMemo(() => {
    return Array.from({ length: n + 1 }, (_, k) => binomialProb(n, k, p));
  }, [n, p]);

  const svgWidth = 760;
  const svgHeight = 430;
  const padding = { top: 88, right: 58, bottom: 68, left: 78 };
  const graphWidth = svgWidth - padding.left - padding.right;
  const graphHeight = svgHeight - padding.top - padding.bottom;

  const maxProb = Math.max(...probabilities, 0.1);
  const barWidth = graphWidth / (n + 1);
  const modeIndex = probabilities.indexOf(maxProb);
  const isSymmetric = p >= 0.45 && p <= 0.55;
  const mean = n * p;
  const variance = n * p * (1 - p);
  const statusTone = isSymmetric
    ? 'border-emerald-500/35 bg-emerald-950/20 text-emerald-300'
    : 'border-amber-500/35 bg-amber-950/20 text-amber-300';
  const barTone = isSymmetric
    ? { fill: '#064e3b', stroke: '#10b981' }
    : { fill: '#451a03', stroke: '#f59e0b' };

  return (
    <DiagramPanel
      title="Fig. Binomial Distribution Engine"
      analysis={
        <div className="mx-auto w-full max-w-5xl space-y-5">
          <p className="text-center text-sm italic leading-relaxed text-zinc-400 md:text-base">
            Adjust the number of trials <MathInline content="n" /> and the probability of success <MathInline content="p" /> to see how the
            binomial shape moves, skews, and concentrates.
          </p>

          <div className="rounded-xl border border-zinc-800 bg-zinc-950/45 p-4 shadow-xl">
            <h4 className="mb-3 text-center text-2.5 font-black uppercase tracking-[0.28em] text-zinc-500">
              Binomial Formula
            </h4>
            <div className="rounded-lg border border-zinc-800/80 bg-zinc-950/70 px-4 py-5 text-center shadow-inner">
              <MathText
                content="\\displaystyle P(X=x)=\\binom{n}{x}p^x(1-p)^{n-x}"
                center
                noMargin
                className="text-2xl md:text-3xl"
              />
            </div>
          </div>

          <div className="rounded-xl border border-rose-500/30 bg-rose-950/25 p-4 text-sm leading-relaxed text-rose-200 md:text-base">
            <strong className="font-bold text-rose-300">CCEA Exam Pitfall:</strong> Do not use the binomial model unless the number of trials is fixed,
            each trial has two outcomes, <MathInline content="p" className="text-rose-100" /> is constant, and trials are independent.
          </div>
        </div>
      }
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-5">
        <div className="mx-auto grid w-full max-w-3xl gap-4 rounded-xl border border-zinc-800 bg-zinc-950/50 p-4 shadow-xl">
          <div className="grid items-center gap-3 sm:grid-cols-[120px_1fr_72px]">
            <label className="text-sm font-semibold text-zinc-300">
              Trials <MathInline content="n" className="text-zinc-100" />
            </label>
            <input
              type="range"
              min="3"
              max="20"
              value={n}
              onChange={(e) => setN(Number(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-zinc-700 accent-pink-500"
            />
            <span className="rounded-lg border border-zinc-800 bg-zinc-950/70 px-3 py-1.5 text-right font-mono text-sm text-zinc-300">
              {n}
            </span>
          </div>

          <div className="grid items-center gap-3 sm:grid-cols-[120px_1fr_72px]">
            <label className="text-sm font-semibold text-zinc-300">
              Prob <MathInline content="p" className="text-zinc-100" />
            </label>
            <input
              type="range"
              min="0.1"
              max="0.9"
              step="0.05"
              value={p}
              onChange={(e) => setP(Number(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-zinc-700 accent-pink-500"
            />
            <span className="rounded-lg border border-zinc-800 bg-zinc-950/70 px-3 py-1.5 text-right font-mono text-sm text-zinc-300">
              {p.toFixed(2)}
            </span>
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-800/80 bg-zinc-950/35 p-5 shadow-2xl">
          <div className="relative mx-auto aspect-16/9 w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/70 shadow-inner">
            <div className="absolute left-5 top-5 z-10 rounded-xl border border-zinc-700/70 bg-zinc-950/90 px-5 py-3 shadow-2xl">
              <MathText
                content={`X \\sim B(${n}, ${p.toFixed(2)})`}
                noMargin
                className="text-xl md:text-2xl"
              />
            </div>
            <div className={cn('absolute right-5 top-5 z-10 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-wider shadow-xl', statusTone)}>
              {isSymmetric ? 'Approx. symmetric' : p < 0.45 ? 'Right skew' : 'Left skew'}
            </div>

            <svg
              viewBox={`0 0 ${svgWidth} ${svgHeight}`}
              className="absolute inset-0 h-full w-full"
              overflow="visible"
              shapeRendering="geometricPrecision"
              role="img"
              aria-label="Interactive binomial probability distribution bar chart"
            >
              <defs>
                <filter id="binomial-soft-glow" x="-40%" y="-40%" width="180%" height="180%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <rect x={36} y={54} width={688} height={322} rx={22} fill="#09090b" stroke="#27272a" strokeWidth={1.4} />

              {[0.25, 0.5, 0.75].map((tick) => {
                const y = svgHeight - padding.bottom - graphHeight * tick;

                return (
                  <line
                    key={tick}
                    x1={padding.left}
                    y1={y}
                    x2={svgWidth - padding.right}
                    y2={y}
                    stroke="#27272a"
                    strokeWidth={1}
                    strokeDasharray="5 8"
                  />
                );
              })}

              <line x1={padding.left} y1={svgHeight - padding.bottom} x2={svgWidth - padding.right + 10} y2={svgHeight - padding.bottom} stroke="#64748b" strokeWidth="2.4" />
              <line x1={padding.left} y1={padding.top - 8} x2={padding.left} y2={svgHeight - padding.bottom} stroke="#64748b" strokeWidth="2.4" />

              {probabilities.map((prob, i) => {
                const barHeight = (prob / maxProb) * graphHeight;
                const x = padding.left + i * barWidth;
                const y = svgHeight - padding.bottom - barHeight;
                const active = i === modeIndex;

                return (
                  <g key={i}>
                    <rect
                      x={x + 1.5}
                      y={y}
                      width={Math.max(4, barWidth - 3)}
                      height={barHeight}
                      rx={Math.min(7, Math.max(3, (barWidth - 3) / 5))}
                      fill={barTone.fill}
                      stroke={barTone.stroke}
                      strokeWidth={active ? 2.4 : 1.25}
                      opacity={active ? 0.95 : 0.7}
                      filter={active ? 'url(#binomial-soft-glow)' : undefined}
                      className="transition-all duration-300"
                    />
                    {(n <= 15 || i % 2 === 0 || i === n) && (
                      <text x={x + barWidth / 2} y={svgHeight - padding.bottom + 25} textAnchor="middle" fill="#a1a1aa" fontSize="13" fontWeight={600}>
                        {i}
                      </text>
                    )}
                  </g>
                );
              })}

              <text x={svgWidth - padding.right + 24} y={svgHeight - padding.bottom + 5} textAnchor="middle" fill="#d4d4d8" fontFamily="serif" fontSize="22" fontStyle="italic">
                x
              </text>
              <text x={padding.left - 6} y={padding.top - 26} textAnchor="middle" fill="#d4d4d8" fontFamily="serif" fontSize="18" fontStyle="italic">
                P(X=x)
              </text>
              <text x={padding.left - 12} y={svgHeight - padding.bottom + 5} textAnchor="end" fill="#a1a1aa" fontSize="12">
                0
              </text>
            </svg>

            <DiagramLabel x="50%" y={74} className="-translate-x-1/2">
              <div className="rounded-lg border border-zinc-800 bg-zinc-950/90 px-3 py-1.5 text-center text-2.5 font-bold uppercase tracking-[0.22em] text-zinc-500 shadow-lg">
                mode x = {modeIndex}
              </div>
            </DiagramLabel>
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl border border-zinc-800 bg-zinc-950/45 p-4 text-center shadow-xl">
            <h4 className="mb-2 text-2.5 font-black uppercase tracking-[0.24em] text-zinc-500">Distribution</h4>
            <MathText content={`X \\sim B(${n}, ${p.toFixed(2)})`} center noMargin className="text-xl" />
          </div>
          <div className="rounded-xl border border-emerald-500/25 bg-emerald-950/10 p-4 text-center shadow-xl">
            <h4 className="mb-2 text-2.5 font-black uppercase tracking-[0.24em] text-emerald-400">Mean</h4>
            <MathText content={`E(X)=np=${mean.toFixed(2)}`} center noMargin className="text-xl" />
          </div>
          <div className="rounded-xl border border-amber-500/25 bg-amber-950/10 p-4 text-center shadow-xl">
            <h4 className="mb-2 text-2.5 font-black uppercase tracking-[0.24em] text-amber-400">Variance</h4>
            <MathText content={`\\operatorname{Var}(X)=npq=${variance.toFixed(2)}`} center noMargin className="text-xl" />
          </div>
        </div>
      </div>
    </DiagramPanel>
  );
};
