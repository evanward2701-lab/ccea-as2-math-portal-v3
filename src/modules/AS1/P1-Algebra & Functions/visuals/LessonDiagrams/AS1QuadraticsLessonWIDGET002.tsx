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
      <div className="w-full rounded-2xl border border-primary/20 bg-card p-6 text-foreground">
        <div className="grid gap-4 md:grid-cols-3">
          {[['a', a, setA], ['b', b, setB], ['c', c, setC]].map(([label, value, setter]) => (
            <label key={String(label)} className="flex flex-col gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              {String(label)}
              <input className="rounded-lg border border-primary/10 bg-primary/5 px-3 py-2 font-mono text-base text-foreground" type="number" value={Number(value)} onChange={(event) => (setter as React.Dispatch<React.SetStateAction<number>>)(Number(event.target.value))} />
            </label>
          ))}
        </div>
        <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-4 font-mono text-sm text-muted-foreground">
          D = <span className="text-xl text-foreground">{discriminant.toFixed(2)}</span>
          <div className="mt-2 text-foreground">{classification}</div>
        </div>
      </div>
    </DiagramPanel>
  );
};
