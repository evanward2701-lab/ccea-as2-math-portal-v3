import React, { useState } from 'react';
import { MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { cn } from '@/core/utils/cn';
import { DiagramLabel } from '@/core/diagram-engine/primitives/DiagramLabel';

type InequalityPhrase = 'at most' | 'fewer than' | 'at least' | 'more than';

export const S4InequalityTranslator: React.FC = () => {
  const [phrase, setPhrase] = useState<InequalityPhrase>('at most');
  const [r, setR] = useState(5);
  const n = 10;

  const getCondition = (x: number) => {
    switch (phrase) {
      case 'at most': return x <= r;
      case 'fewer than': return x < r;
      case 'at least': return x >= r;
      case 'more than': return x > r;
    }
  };

  const getMath = () => {
    switch (phrase) {
      case 'at most': return `P(X \\le ${r})`;
      case 'fewer than': return `P(X < ${r}) \\rightarrow P(X \\le ${r - 1})`;
      case 'at least': return `P(X \\ge ${r}) \\rightarrow 1 - P(X \\le ${r - 1})`;
      case 'more than': return `P(X > ${r}) \\rightarrow 1 - P(X \\le ${r})`;
    }
  };

  return (
    <DiagramPanel
      title="Fig. Binomial Inequality Translator"
      analysis={
        <div className="space-y-4">
          <p className="text-sm text-zinc-400 italic">
            Translating English phrases into mathematical inequalities is a critical skill for binomial problems. This tool visualizes which integer values are included for each phrase.
          </p>
          <div className="p-3 bg-zinc-900/50 border border-zinc-800 rounded-lg">
            <h4 className="font-bold text-emerald-400 mb-2 text-sm uppercase tracking-wider">Calculator-Ready Formula</h4>
            <div className="text-center bg-[#141416] p-2 rounded border border-zinc-800/60">
              <MathText content={getMath()} />
            </div>
          </div>
          <div className="p-3 bg-rose-950/30 border border-rose-900/40 rounded-lg text-sm text-rose-300">
            <strong className="font-bold text-rose-400">CCEA Exam Pitfall:</strong> "Fewer than 5" does not include 5. It means <MathText content="X \le 4" className="inline [&_p]:inline"/>. "At least 5" does include 5. It means <MathText content="X \ge 5" className="inline [&_p]:inline"/>, which is calculated as <MathText content="1 - P(X \le 4)" className="inline [&_p]:inline"/>.
          </div>
        </div>
      }
    >
      <div className="w-full flex flex-col items-center">
        <div className="w-full max-w-lg grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 rounded-lg border border-zinc-800 bg-zinc-900/50 p-3">
          <div>
            <label className="text-sm font-medium text-zinc-300 block mb-2">Phrase</label>
            <select
              value={phrase}
              onChange={(e) => setPhrase(e.target.value as InequalityPhrase)}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-md p-2 text-sm"
            >
              <option value="at most">At most</option>
              <option value="fewer than">Fewer than</option>
              <option value="at least">At least</option>
              <option value="more than">More than</option>
            </select>
          </div>
          <div className="flex items-center gap-3">
            <label className="text-sm font-medium text-zinc-300"><MathText content="r" /></label>
            <input type="range" min="1" max={n} value={r} onChange={(e) => setR(Number(e.target.value))} className="w-full" />
            <span className="text-sm font-mono text-zinc-400 w-8 text-right">{r}</span>
          </div>
        </div>

        <div className="relative w-full aspect-55/12 max-w-2xl mx-auto">
          <svg viewBox={`0 0 550 80`} className="absolute inset-0 w-full h-full" overflow="visible">
            <line x1="20" y1="40" x2="530" y2="40" stroke="#475569" strokeWidth="2" />
            {Array.from({ length: n + 1 }).map((_, i) => {
              const isIncluded = getCondition(i);
              const isBoundary = i === r;
              const x = 25 + i * 50;

              return (
                <g key={i}>
                  <circle
                    cx={x}
                    cy="40"
                    r={isBoundary ? 10 : 8}
                    className={cn(
                      "transition-all",
                      isIncluded ? "fill-emerald-500" : "fill-zinc-700",
                      isBoundary && "stroke-rose-400 stroke-2"
                    )}
                  />
                  <text x={x} y={45} textAnchor="middle" className={cn("font-mono text-xs", isIncluded ? "fill-zinc-950" : "fill-zinc-400")}>
                    {i}
                  </text>
                </g>
              );
            })}
          </svg>
          
          <DiagramLabel position={{ left: '50%', top: '85%' }} className="-translate-x-1/2">
            <div className="text-center text-sm font-bold text-zinc-300 mt-4 capitalize">
              "{phrase} {r}"
            </div>
          </DiagramLabel>
        </div>
      </div>
    </DiagramPanel>
  );
};
