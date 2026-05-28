import React, { useMemo, useState } from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const fmt = (value: number) => Number.isFinite(value) ? value.toFixed(2).replace(/\.00$/, '') : 'undefined';

export const AS1QuadraticsLessonWIDGET001: React.FC = () => {
  const [a, setA] = useState(1);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const points = useMemo(() => {
    return Array.from({ length: 161 }, (_, i) => {
      const x = -10 + (20 * i) / 160;
      const y = a * x * x + b * x + c;
      const px = ((x + 10) / 20) * 600;
      const py = Math.max(12, Math.min(308, 160 - y * 14));
      return px.toFixed(1) + ',' + py.toFixed(1);
    }).join(' ');
  }, [a, b, c]);
  const discriminant = b * b - 4 * a * c;
  const vertexX = a === 0 ? NaN : -b / (2 * a);
  const vertexY = a === 0 ? NaN : a * vertexX * vertexX + b * vertexX + c;
  const rootSummary = a === 0
    ? 'a = 0, so this is not quadratic'
    : discriminant > 0
      ? 'Two roots: ' + fmt((-b - Math.sqrt(discriminant)) / (2 * a)) + ', ' + fmt((-b + Math.sqrt(discriminant)) / (2 * a))
      : discriminant === 0
        ? 'Repeated root: ' + fmt(-b / (2 * a))
        : 'No real roots';

  return (
    <DiagramPanel title={"Quadratic graph explorer"} analysis={<p>Move the coefficients to connect the algebraic form y = ax^2 + bx + c with shape, turning point and roots.</p>} wide>
      <div className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 text-zinc-100">
        <div className="grid gap-4 md:grid-cols-3">
          {[['a', a, setA, -5, 5], ['b', b, setB, -10, 10], ['c', c, setC, -10, 10]].map(([label, value, setter, min, max]) => (
            <label key={String(label)} className="flex flex-col gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500">
              Coefficient {String(label)}
              <input className="accent-zinc-200" type="range" min={Number(min)} max={Number(max)} step={0.1} value={Number(value)} onChange={(event) => (setter as React.Dispatch<React.SetStateAction<number>>)(Number(event.target.value))} />
              <span className="text-lg font-mono text-zinc-100">{fmt(Number(value))}</span>
            </label>
          ))}
        </div>
        <svg viewBox="0 0 600 320" className="mt-6 h-auto w-full rounded-xl border border-zinc-800 bg-zinc-900">
          <line x1="0" y1="160" x2="600" y2="160" stroke="#71717a" strokeWidth="1" />
          <line x1="300" y1="0" x2="300" y2="320" stroke="#71717a" strokeWidth="1" />
          <polyline points={points} fill="none" stroke="#f4f4f5" strokeWidth="3" />
        </svg>
        <div className="mt-4 grid gap-2 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 font-mono text-sm text-zinc-400">
          <div>D = <span className="text-zinc-100">{fmt(discriminant)}</span></div>
          <div>Turning point = <span className="text-zinc-100">({fmt(vertexX)}, {fmt(vertexY)})</span></div>
          <div>{rootSummary}</div>
        </div>
      </div>
    </DiagramPanel>
  );
};
