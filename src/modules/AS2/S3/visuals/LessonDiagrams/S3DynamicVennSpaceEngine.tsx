import React, { useState } from 'react';
import { MathText, MathInline } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { DiagramLabel } from '@/core/diagram-engine/primitives/DiagramLabel';

const formatProbability = (value: number) => value.toFixed(2).replace(/0$/, '').replace(/\.0$/, '');
const toPercent = (value: number, total: number) => `${(value / total) * 100}%`;

export const S3DynamicVennSpaceEngine: React.FC = () => {
  const [separation, setSeparation] = useState(45);

  const pA = 0.4;
  const pB = 0.5;

  const maxPossibleIntersection = Math.min(pA, pB);
  const currentIntersection = Math.max(0, maxPossibleIntersection * (1 - separation / 80));
  const aOnly = pA - currentIntersection;
  const bOnly = pB - currentIntersection;
  const union = pA + pB - currentIntersection;
  const outside = 1 - union;
  const isMutuallyExclusive = currentIntersection < 0.01;

  const svgWidth = 720;
  const svgHeight = 420;
  const radius = 92;
  const centerY = 215;
  const centerX = svgWidth / 2;
  const scaledSeparation = separation * 1.35;

  const circleAX = centerX - scaledSeparation;
  const circleBX = centerX + scaledSeparation;
  const intersectionX = (circleAX + circleBX) / 2;

  return (
    <DiagramPanel
      title="Fig. Dynamic Venn Space Engine"
      analysis={
        <div className="mx-auto space-y-5">
          <p className="mx-auto max-w-5xl text-center text-base italic leading-relaxed text-zinc-400">
            The Addition Law accounts for the overlap between events. Adjust the separation to see how the intersection changes the union.
          </p>

          <div className="mx-auto grid w-full max-w-5xl gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/45 p-4 shadow-sm">
              <h4 className="mb-3 text-center text-2.5 font-black uppercase tracking-[0.24em] text-zinc-500">Addition Law</h4>
              <div className="flex min-h-28 items-center justify-center rounded-lg border border-zinc-800/70 bg-zinc-950/50 p-4 text-center">
                <MathText content="P(A \\cup B) = P(A) + P(B) - P(A \\cap B)" noMargin />
              </div>
            </div>

            <div className="rounded-xl border border-emerald-500/25 bg-emerald-950/10 p-4 shadow-sm">
              <h4 className="mb-3 text-center text-2.5 font-black uppercase tracking-[0.24em] text-emerald-400">Probabilities</h4>
              <div className="grid grid-cols-2 gap-2 rounded-lg border border-zinc-800/70 bg-zinc-950/50 p-3 text-sm text-zinc-300">
                <MathInline content={`P(A) = ${formatProbability(pA)}`} className="justify-center" />
                <MathInline content={`P(B) = ${formatProbability(pB)}`} className="justify-center" />
                <MathInline content={`P(A \\cap B) = ${formatProbability(currentIntersection)}`} className="justify-center text-emerald-300" />
                <MathInline content={`P(A \\cup B) = ${formatProbability(union)}`} className="justify-center text-amber-300" />
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-5xl rounded-xl border border-rose-500/30 bg-rose-950/20 p-4 text-sm leading-relaxed text-rose-200 shadow-sm">
            <span className="font-bold text-rose-300">CCEA Exam Pitfall:</span> never use <MathInline content="P(A \\cup B) = P(A) + P(B)" /> unless the events are explicitly stated to be mutually exclusive.
          </div>
        </div>
      }
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-6">
        <div className="w-full max-w-2xl rounded-xl border border-zinc-800 bg-zinc-900/45 p-4 shadow-sm">
          <div className="grid grid-cols-[112px_1fr_48px] items-center gap-4">
            <label htmlFor="separation-slider" className="text-sm font-semibold text-zinc-300">
              Separation
            </label>
            <input
              id="separation-slider"
              type="range"
              min="0"
              max="80"
              step="1"
              value={separation}
              onChange={(e) => setSeparation(Number(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-zinc-700 accent-pink-500"
            />
            <span className="text-right font-mono text-sm text-zinc-400">{separation}</span>
          </div>
        </div>

        <div className="w-full rounded-2xl border border-zinc-800/80 bg-zinc-950/35 p-5 shadow-2xl">
          <div className="relative aspect-16/9 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/50 shadow-inner">
            <svg
              viewBox={`0 0 ${svgWidth} ${svgHeight}`}
              className="absolute inset-0 h-full w-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              shapeRendering="geometricPrecision"
              role="img"
              aria-label="Interactive Venn diagram showing event region probabilities"
            >
              <rect x="28" y="38" width={svgWidth - 56} height={svgHeight - 76} fill="#141416" stroke="#3f3f46" strokeWidth="2.5" rx="14" />

              <circle cx={circleAX} cy={centerY} r={radius} fill="#f59e0b" fillOpacity="0.18" stroke="#f59e0b" strokeWidth="3" />
              <circle cx={circleBX} cy={centerY} r={radius} fill="#10b981" fillOpacity="0.18" stroke="#10b981" strokeWidth="3" />
            </svg>

            <DiagramLabel x="6.6%" y="12.5%" text="S" className="text-2xl text-slate-300" />

            <DiagramLabel x={toPercent(circleAX - radius - 34, svgWidth)} y={toPercent(centerY - radius - 22, svgHeight)}>
              <div className="rounded-lg border border-amber-500/25 bg-zinc-950/75 px-3 py-1.5 text-center shadow-lg">
                <div className="text-2.5 font-black uppercase tracking-[0.22em] text-amber-400">A</div>
                <MathInline content={`P(A) = ${formatProbability(pA)}`} className="text-xs text-amber-200" />
              </div>
            </DiagramLabel>

            <DiagramLabel x={toPercent(circleBX + radius + 34, svgWidth)} y={toPercent(centerY - radius - 22, svgHeight)}>
              <div className="rounded-lg border border-emerald-500/25 bg-zinc-950/75 px-3 py-1.5 text-center shadow-lg">
                <div className="text-2.5 font-black uppercase tracking-[0.22em] text-emerald-400">B</div>
                <MathInline content={`P(B) = ${formatProbability(pB)}`} className="text-xs text-emerald-200" />
              </div>
            </DiagramLabel>

            <DiagramLabel x={toPercent(circleAX - radius * 0.45, svgWidth)} y={toPercent(centerY, svgHeight)}>
              <div className="rounded-xl border border-amber-500/30 bg-zinc-950/85 px-4 py-2 text-center shadow-xl backdrop-blur-sm">
                <div className="mb-1 text-2.5 font-black uppercase tracking-[0.22em] text-amber-400">A only</div>
                <MathInline content={formatProbability(aOnly)} className="text-lg text-zinc-100" />
              </div>
            </DiagramLabel>

            {!isMutuallyExclusive && (
              <DiagramLabel x={toPercent(intersectionX, svgWidth)} y={toPercent(centerY, svgHeight)}>
                <div className="rounded-xl border border-zinc-500/40 bg-zinc-950/90 px-4 py-2 text-center shadow-xl backdrop-blur-sm">
                  <div className="mb-1 text-2.5 font-black uppercase tracking-[0.2em] text-zinc-300">A ∩ B</div>
                  <MathInline content={formatProbability(currentIntersection)} className="text-lg text-zinc-100" />
                </div>
              </DiagramLabel>
            )}

            {isMutuallyExclusive && (
              <DiagramLabel x={toPercent(intersectionX, svgWidth)} y={toPercent(centerY, svgHeight)}>
                <div className="rounded-xl border border-rose-500/35 bg-rose-950/30 px-4 py-2 text-center text-xs font-black uppercase tracking-[0.24em] text-rose-300 shadow-xl">
                  mutually exclusive
                </div>
              </DiagramLabel>
            )}

            <DiagramLabel x={toPercent(circleBX + radius * 0.45, svgWidth)} y={toPercent(centerY, svgHeight)}>
              <div className="rounded-xl border border-emerald-500/30 bg-zinc-950/85 px-4 py-2 text-center shadow-xl backdrop-blur-sm">
                <div className="mb-1 text-2.5 font-black uppercase tracking-[0.22em] text-emerald-400">B only</div>
                <MathInline content={formatProbability(bOnly)} className="text-lg text-zinc-100" />
              </div>
            </DiagramLabel>

            <DiagramLabel x="82%" y="77%">
              <div className="rounded-xl border border-zinc-700/70 bg-zinc-950/80 px-4 py-2 text-center shadow-lg">
                <div className="mb-1 text-2.5 font-black uppercase tracking-[0.22em] text-zinc-500">Outside</div>
                <MathInline content={formatProbability(outside)} className="text-lg text-zinc-300" />
              </div>
            </DiagramLabel>

            <DiagramLabel x="50%" y="84%">
              <div className="rounded-lg border border-amber-500/25 bg-amber-950/15 px-4 py-2 text-center shadow-lg">
                <MathInline content={`P(A \\cup B) = ${formatProbability(union)}`} className="text-base text-amber-200" />
              </div>
            </DiagramLabel>
          </div>
        </div>
      </div>
    </DiagramPanel>
  );
};
