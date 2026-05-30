import React, { useState } from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

function simplifySurd(n: number) {
  const limit = Math.floor(Math.sqrt(n));
  let coefficient = 1;
  for (let i = limit; i >= 2; i--) {
    if (n % (i * i) === 0) {
      coefficient = i;
      break;
    }
  }
  const radicand = n / (coefficient * coefficient);
  if (radicand === 1) return String(coefficient);
  return coefficient === 1 ? 'sqrt(' + n + ')' : coefficient + 'sqrt(' + radicand + ')';
}

export const AS1IndicesSurdsLessonWIDGET002: React.FC = () => {
  const [input, setInput] = useState(72);
  const n = Math.max(1, Math.floor(input || 1));
  const result = simplifySurd(n);

  return (
    <DiagramPanel title={"Surd Simplifier"} analysis={<p>Type a positive integer to extract the largest square factor and write the square root in simplest surd form.</p>} wide>
      <div className="w-full rounded-2xl border border-primary/20 bg-card p-6 text-foreground">
        <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
          Number under the square root
          <input className="rounded-lg border border-primary/10 bg-primary/5 px-3 py-2 font-mono text-base text-foreground" type="number" min={1} step={1} value={input} onChange={(event) => setInput(Number(event.target.value))} />
        </label>
        <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-4 font-mono text-sm text-muted-foreground">
          sqrt({n}) = <span className="text-xl text-foreground">{result}</span>
        </div>
      </div>
    </DiagramPanel>
  );
};
