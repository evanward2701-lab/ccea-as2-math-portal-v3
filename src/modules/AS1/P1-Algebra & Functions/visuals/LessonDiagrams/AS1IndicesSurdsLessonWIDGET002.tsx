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
      <div className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 text-zinc-100">
        <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500">
          Number under the square root
          <input className="rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 font-mono text-base text-zinc-100" type="number" min={1} step={1} value={input} onChange={(event) => setInput(Number(event.target.value))} />
        </label>
        <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 font-mono text-sm text-zinc-400">
          sqrt({n}) = <span className="text-xl text-zinc-100">{result}</span>
        </div>
      </div>
    </DiagramPanel>
  );
};
