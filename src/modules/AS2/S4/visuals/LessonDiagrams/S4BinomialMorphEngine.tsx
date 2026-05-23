import React, { useMemo, useState } from 'react';
import { MathText } from '@/core/components/MathText';
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

  const svgWidth = 620;
  const svgHeight = 360;
  const padding = { top: 20, right: 20, bottom: 50, left: 50 };
  const graphWidth = svgWidth - padding.left - padding.right;
  const graphHeight = svgHeight - padding.top - padding.bottom;

  const maxProb = Math.max(...probabilities, 0.1);
  const barWidth = graphWidth / (n + 1);

  const isSymmetric = p >= 0.45 && p <= 0.55;

  return (
    <DiagramPanel
      title="Fig. Binomial Distribution Engine"
      analysis={
        <div className="space-y-4">
          <p className="text-sm text-slate-400 italic">
            Adjust the number of trials (n) and the probability of success (p) to see how the shape of the binomial distribution changes.
          </p>
          <div className="p-3 bg-slate-900/50 border border-slate-800 rounded-lg">
            <h4 className="font-bold text-sky-400 mb-2 text-sm uppercase tracking-wider">Binomial Formula</h4>
            <div className="text-center bg-slate-950 p-2 rounded border border-slate-800/60">
              <MathText content="P(X=x) = \binom{n}{x} p^x (1-p)^{n-x}" />
            </div>
          </div>
          <div className="p-3 bg-rose-950/30 border border-rose-900/40 rounded-lg text-sm text-rose-300">
            <strong className="font-bold text-rose-400">CCEA Exam Pitfall:</strong> Do not use the binomial model unless all four conditions are met.
          </div>
        </div>
      }
    >
      <div className="w-full flex flex-col items-center">
        <div className="w-full max-w-lg grid grid-cols-1 gap-4 mb-6 rounded-lg border border-slate-800 bg-slate-900/50 p-3">
          <div className="flex items-center gap-3">
            <label className="text-sm font-medium text-slate-300 w-24">Trials (n)</label>
            <input type="range" min="3" max="20" value={n} onChange={(e) => setN(Number(e.target.value))} className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer" />
            <span className="text-sm font-mono text-sky-400 w-12 text-right">{n}</span>
          </div>
          <div className="flex items-center gap-3">
            <label className="text-sm font-medium text-slate-300 w-24">Prob (p)</label>
            <input type="range" min="0.1" max="0.9" step="0.05" value={p} onChange={(e) => setP(Number(e.target.value))} className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer" />
            <span className="text-sm font-mono text-sky-400 w-12 text-right">{p.toFixed(2)}</span>
          </div>
        </div>

        <div className="relative w-full aspect-62/36 max-w-3xl mx-auto">
          <div className="absolute top-2 left-2 px-3 py-1 text-sm font-bold rounded-full border bg-slate-900 border-slate-800 text-sky-300 z-10">
            <MathText content={`X \\sim B(${n}, ${p.toFixed(2)})`} />
          </div>
          <div className={cn(
            "absolute top-2 right-2 px-3 py-1 text-xs font-bold rounded-full border z-10",
            isSymmetric ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300" : "bg-amber-500/10 border-amber-500/30 text-amber-300"
          )}>
            {isSymmetric ? 'Approx. Symmetric' : 'Skewed'}
          </div>

          <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="absolute inset-0 w-full h-full" overflow="visible" shapeRendering="geometricPrecision">
            {/* Axes */}
            <line x1={padding.left} y1={svgHeight - padding.bottom} x2={svgWidth - padding.right} y2={svgHeight - padding.bottom} stroke="#475569" strokeWidth="2" />
            <line x1={padding.left} y1={padding.top} x2={padding.left} y2={svgHeight - padding.bottom} stroke="#475569" strokeWidth="2" />

            {/* Bars */}
            {probabilities.map((prob, i) => {
              const barHeight = (prob / maxProb) * graphHeight;
              const x = padding.left + i * barWidth;
              const y = svgHeight - padding.bottom - barHeight;

              return (
                <g key={i}>
                  <rect
                    x={x}
                    y={y}
                    width={barWidth - 2}
                    height={barHeight}
                    className={cn(
                      "transition-all duration-300",
                      isSymmetric ? "fill-emerald-500/20 stroke-emerald-400" : "fill-amber-500/20 stroke-amber-400"
                    )}
                    strokeWidth="1"
                  />
                  {n <= 15 && (
                    <text x={x + barWidth / 2 - 1} y={svgHeight - padding.bottom + 15} textAnchor="middle" fill="#94a3b8" fontSize="10">
                      {i}
                    </text>
                  )}
                </g>
              );
            })}
          </svg>

          <DiagramLabel position={{ left: '0%', top: '50%' }} className="-translate-y-1/2">
            <div className="text-center text-xs text-slate-400 -rotate-90 origin-center w-32">
              <MathText content="P(X=x)" />
            </div>
          </DiagramLabel>
        </div>
      </div>
    </DiagramPanel>
  );
};
