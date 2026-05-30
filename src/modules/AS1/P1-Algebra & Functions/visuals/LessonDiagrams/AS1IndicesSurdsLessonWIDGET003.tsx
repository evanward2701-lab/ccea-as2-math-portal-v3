import React, { useMemo, useState } from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

function rationalise(input: string) {
  const compact = input.replace(/\s+/g, '');
  const simple = compact.match(/^sqrt\((\d+)\)$/i);
  if (simple) {
    const a = Number(simple[1]);
    return ['Multiply numerator and denominator by sqrt(' + a + ').', '1 / sqrt(' + a + ') = sqrt(' + a + ') / ' + a + '.'];
  }
  const binomial = compact.match(/^(\d+)([+-])sqrt\((\d+)\)$/i);
  if (binomial) {
    const a = Number(binomial[1]);
    const sign = binomial[2];
    const b = Number(binomial[3]);
    const opposite = sign === '+' ? '-' : '+';
    return [
      'Use the conjugate ' + a + opposite + 'sqrt(' + b + ').',
      'The denominator becomes ' + a + '^2 - sqrt(' + b + ')^2 = ' + (a * a - b) + '.',
      'So 1 / (' + compact + ') = (' + a + opposite + 'sqrt(' + b + ')) / ' + (a * a - b) + '.',
    ];
  }
  return ['Enter a denominator like sqrt(7), 3+sqrt(2), or 5-sqrt(3).'];
}

export const AS1IndicesSurdsLessonWIDGET003: React.FC = () => {
  const [denominator, setDenominator] = useState('3+sqrt(2)');
  const steps = useMemo(() => rationalise(denominator), [denominator]);

  return (
    <DiagramPanel title={"Rationalising Surd Denominators"} analysis={<p>Practise choosing the correct rationalising factor: the same surd for simple denominators or the conjugate for binomial denominators.</p>} wide>
      <div className="w-full rounded-2xl border border-primary/20 bg-card p-6 text-foreground">
        <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
          Denominator
          <input className="rounded-lg border border-primary/10 bg-primary/5 px-3 py-2 font-mono text-base text-foreground" value={denominator} onChange={(event) => setDenominator(event.target.value)} />
        </label>
        <ol className="mt-6 space-y-3 rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm text-foreground">
          {steps.map((step, index) => <li key={step} className="font-mono">{index + 1}. {step}</li>)}
        </ol>
      </div>
    </DiagramPanel>
  );
};
