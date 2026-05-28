import React, { useState } from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const fmt = (value: number) => Number.isFinite(value) ? value.toFixed(5).replace(/\.0+$/, '') : 'undefined';

export const AS1IndicesSurdsLessonWIDGET001: React.FC = () => {
  const [base, setBase] = useState(2);
  const [numerator, setNumerator] = useState(1);
  const [denominator, setDenominator] = useState(2);
  const safeDenominator = denominator === 0 ? 1 : denominator;
  const value = Math.pow(base, numerator / safeDenominator);
  const absNumerator = Math.abs(numerator);
  const rootForm = numerator >= 0
    ? safeDenominator + 'th root of ' + base + '^' + numerator
    : '1 / (' + safeDenominator + 'th root of ' + base + '^' + absNumerator + ')';
  const repeatedRootForm = numerator >= 0
    ? '(' + safeDenominator + 'th root of ' + base + ')^' + numerator
    : '1 / (' + safeDenominator + 'th root of ' + base + ')^' + absNumerator;

  return (
    <DiagramPanel title={"Fractional Exponent Explorer"} analysis={<p>Explore rational exponents by changing the base and fractional power. Negative numerators show the reciprocal form.</p>} wide>
      <div className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 text-zinc-100">
        <div className="grid gap-4 md:grid-cols-3">
          <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500">
            Base a
            <input className="accent-zinc-200" type="range" min={1} max={10} step={1} value={base} onChange={(event) => setBase(Number(event.target.value))} />
            <span className="text-lg font-mono text-zinc-100">{base}</span>
          </label>
          <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500">
            Numerator m
            <input className="accent-zinc-200" type="range" min={-5} max={5} step={1} value={numerator} onChange={(event) => setNumerator(Number(event.target.value))} />
            <span className="text-lg font-mono text-zinc-100">{numerator}</span>
          </label>
          <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500">
            Denominator n
            <input className="accent-zinc-200" type="range" min={1} max={10} step={1} value={denominator} onChange={(event) => setDenominator(Number(event.target.value))} />
            <span className="text-lg font-mono text-zinc-100">{safeDenominator}</span>
          </label>
        </div>
        <div className="mt-6 grid gap-3 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 font-mono text-sm">
          <div className="text-zinc-400">a^(m/n) = <span className="text-zinc-100">{fmt(value)}</span></div>
          <div className="text-zinc-400">Root form: <span className="text-zinc-100">{rootForm}</span></div>
          <div className="text-zinc-400">Repeated root form: <span className="text-zinc-100">{repeatedRootForm}</span></div>
        </div>
      </div>
    </DiagramPanel>
  );
};
