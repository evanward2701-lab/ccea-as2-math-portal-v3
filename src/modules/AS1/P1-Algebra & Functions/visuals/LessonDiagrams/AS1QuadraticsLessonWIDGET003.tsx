import React, { useMemo, useState } from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

function evaluatePolynomial(coefficients: number[], x: number) {
  return coefficients.reduce((acc, coefficient) => acc * x + coefficient, 0);
}

export const AS1QuadraticsLessonWIDGET003: React.FC = () => {
  const [coefficientsText, setCoefficientsText] = useState('1, -6, 11, -6');
  const [testValue, setTestValue] = useState(1);
  const coefficients = useMemo(() => coefficientsText.split(',').map((part) => Number(part.trim())).filter((value) => Number.isFinite(value)), [coefficientsText]);
  const remainder = coefficients.length > 0 ? evaluatePolynomial(coefficients, testValue) : NaN;
  const factorResult = Math.abs(remainder) < 1e-9 ? 'x - ' + testValue + ' is a factor.' : 'Remainder is ' + remainder.toFixed(2) + ', so x - ' + testValue + ' is not a factor.';

  return (
    <DiagramPanel title={"Factor theorem and remainder calculator"} analysis={<p>Use substitution to apply the remainder theorem: when dividing by x - a, the remainder is f(a).</p>} wide>
      <div className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 text-zinc-100">
        <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500">
          Coefficients, highest degree first
          <input className="rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 font-mono text-base text-zinc-100" value={coefficientsText} onChange={(event) => setCoefficientsText(event.target.value)} />
        </label>
        <label className="mt-4 flex flex-col gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500">
          Test value a
          <input className="rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 font-mono text-base text-zinc-100" type="number" value={testValue} onChange={(event) => setTestValue(Number(event.target.value))} />
        </label>
        <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 font-mono text-sm text-zinc-400">
          f({testValue}) = <span className="text-xl text-zinc-100">{Number.isFinite(remainder) ? remainder.toFixed(2) : 'undefined'}</span>
          <div className="mt-2 text-zinc-100">{factorResult}</div>
        </div>
      </div>
    </DiagramPanel>
  );
};
