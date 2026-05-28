import React, { useState } from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

export const AS1QuadraticsLessonWIDGET002: React.FC = () => {
  const [a, setA] = useState(1);
  const [b, setB] = useState(0);
  const [c, setC] = useState(-4);
  const discriminant = b * b - 4 * a * c;
  const classification = a === 0
    ? 'Enter a non-zero value for a.'
    : discriminant > 0
      ? 'Two distinct real roots'
      : discriminant === 0
        ? 'One repeated real root'
        : 'No real roots';

  return (
    <DiagramPanel title={"Discriminant classification tool"} analysis={<p>Use the sign of D = b^2 - 4ac to classify roots without solving the equation.</p>} wide>
      <div className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 text-zinc-100">
        <div className="grid gap-4 md:grid-cols-3">
          {[['a', a, setA], ['b', b, setB], ['c', c, setC]].map(([label, value, setter]) => (
            <label key={String(label)} className="flex flex-col gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500">
              {String(label)}
              <input className="rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 font-mono text-base text-zinc-100" type="number" value={Number(value)} onChange={(event) => (setter as React.Dispatch<React.SetStateAction<number>>)(Number(event.target.value))} />
            </label>
          ))}
        </div>
        <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 font-mono text-sm text-zinc-400">
          D = <span className="text-xl text-zinc-100">{discriminant.toFixed(2)}</span>
          <div className="mt-2 text-zinc-100">{classification}</div>
        </div>
      </div>
    </DiagramPanel>
  );
};
