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
      <div className="w-full rounded-2xl border border-primary/20 bg-card p-6 text-foreground">
        <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
          Coefficients, highest degree first
          <input className="rounded-lg border border-primary/10 bg-primary/5 px-3 py-2 font-mono text-base text-foreground" value={coefficientsText} onChange={(event) => setCoefficientsText(event.target.value)} />
        </label>
        <label className="mt-4 flex flex-col gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
          Test value a
          <input className="rounded-lg border border-primary/10 bg-primary/5 px-3 py-2 font-mono text-base text-foreground" type="number" value={testValue} onChange={(event) => setTestValue(Number(event.target.value))} />
        </label>
        <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-4 font-mono text-sm text-muted-foreground">
          f({testValue}) = <span className="text-xl text-foreground">{Number.isFinite(remainder) ? remainder.toFixed(2) : 'undefined'}</span>
          <div className="mt-2 text-foreground">{factorResult}</div>
        </div>
      </div>
    </DiagramPanel>
  );
};
