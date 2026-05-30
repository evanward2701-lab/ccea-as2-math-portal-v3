import React, { useState } from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const fmt = (value: number) => Number.isFinite(value) ? value.toFixed(2).replace(/\.00$/, '') : 'undefined';

export const AS1P1TransformationsLessonWIDGET002: React.FC = () => {
  const [xOld, setXOld] = useState(0);
  const [yOld, setYOld] = useState(1);
  const [a, setA] = useState(1);
  const [b, setB] = useState(1);
  const [c, setC] = useState(0);
  const [d, setD] = useState(0);
  const valid = b !== 0;
  const xNew = valid ? (xOld - c) / b : NaN;
  const yNew = a * yOld + d;

  return (
    <DiagramPanel title={"Coordinate mapping calculator"} analysis={<p>Map a parent-graph point through y = a f(bx + c) + d using x_new = (x_old - c) / b and y_new = a y_old + d.</p>} wide>
      <div className="w-full rounded-2xl border border-primary/20 bg-card p-6 text-foreground">
        <div className="grid gap-4 md:grid-cols-3">
          {[['x old', xOld, setXOld], ['y old', yOld, setYOld], ['a', a, setA], ['b', b, setB], ['c', c, setC], ['d', d, setD]].map(([label, value, setter]) => (
            <label key={String(label)} className="flex flex-col gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              {String(label)}
              <input className="rounded-lg border border-primary/10 bg-primary/5 px-3 py-2 font-mono text-base text-foreground" type="number" step={0.1} value={Number(value)} onChange={(event) => (setter as React.Dispatch<React.SetStateAction<number>>)(Number(event.target.value))} />
            </label>
          ))}
        </div>
        <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-4 font-mono text-sm text-muted-foreground">
          {valid ? (
            <>
              <div>x new = <span className="text-xl text-foreground">{fmt(xNew)}</span></div>
              <div>y new = <span className="text-xl text-foreground">{fmt(yNew)}</span></div>
            </>
          ) : (
            <div className="text-primary">b cannot be zero.</div>
          )}
        </div>
      </div>
    </DiagramPanel>
  );
};
