import React, { useMemo, useState } from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const fmt = (value: number) => Number.isFinite(value) ? value.toFixed(2).replace(/\.00$/, '') : 'undefined';

export const AS1P1TransformationsLessonWIDGET001: React.FC = () => {
  const [kind, setKind] = useState('sin');
  const [a, setA] = useState(1);
  const [b, setB] = useState(1);
  const [c, setC] = useState(0);
  const [d, setD] = useState(0);
  const safeB = Math.abs(b) < 0.1 ? 0.1 : b;
  const points = useMemo(() => {
    return Array.from({ length: 181 }, (_, i) => {
      const xDeg = (360 * i) / 180;
      const radians = (safeB * xDeg + c) * Math.PI / 180;
      const raw = kind === 'cos' ? Math.cos(radians) : kind === 'tan' ? Math.tan(radians) : Math.sin(radians);
      const clipped = Math.max(-5, Math.min(5, a * raw + d));
      const px = (xDeg / 360) * 600;
      const py = 160 - clipped * 24;
      return px.toFixed(1) + ',' + Math.max(12, Math.min(308, py)).toFixed(1);
    }).join(' ');
  }, [kind, a, safeB, c, d]);
  const parentPeriod = kind === 'tan' ? 180 : 360;
  const period = parentPeriod / Math.abs(safeB);
  const phaseShift = -c / safeB;

  return (
    <DiagramPanel title={"Trigonometric graph transformation explorer"} analysis={<p>Explore y = a f(bx + c) + d and watch amplitude, period, phase shift and vertical shift update together.</p>} wide>
      <div className="w-full rounded-2xl border border-primary/20 bg-card p-6 text-foreground">
        <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
          Function
          <select className="rounded-lg border border-primary/10 bg-primary/5 px-3 py-2 font-mono text-base text-foreground" value={kind} onChange={(event) => setKind(event.target.value)}>
            <option value="sin">sin</option>
            <option value="cos">cos</option>
            <option value="tan">tan</option>
          </select>
        </label>
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          {[['a', a, setA, -5, 5], ['b', b, setB, -4, 4], ['c', c, setC, -180, 180], ['d', d, setD, -5, 5]].map(([label, value, setter, min, max]) => (
            <label key={String(label)} className="flex flex-col gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              {String(label)}
              <input className="accent-zinc-200" type="range" min={Number(min)} max={Number(max)} step={String(label) === 'c' ? 5 : 0.1} value={Number(value)} onChange={(event) => (setter as React.Dispatch<React.SetStateAction<number>>)(Number(event.target.value))} />
              <span className="text-lg font-mono text-foreground">{fmt(Number(value))}</span>
            </label>
          ))}
        </div>
        <svg viewBox="0 0 600 320" className="mt-6 h-auto w-full rounded-xl border border-primary/20 bg-primary/5">
          <line x1="0" y1="160" x2="600" y2="160" stroke="var(--muted-foreground)" strokeWidth="1" />
          <line x1="0" y1="0" x2="0" y2="320" stroke="var(--muted-foreground)" strokeWidth="1" />
          <polyline points={points} fill="none" stroke="#f4f4f5" strokeWidth="3" />
        </svg>
        <div className="mt-4 grid gap-2 rounded-xl border border-primary/20 bg-primary/5 p-4 font-mono text-sm text-muted-foreground">
          <div>Amplitude: <span className="text-foreground">{fmt(Math.abs(a))}</span></div>
          <div>Period: <span className="text-foreground">{fmt(period)} degrees</span></div>
          <div>Phase shift: <span className="text-foreground">{fmt(phaseShift)} degrees</span></div>
          <div>Vertical shift: <span className="text-foreground">{fmt(d)}</span></div>
        </div>
      </div>
    </DiagramPanel>
  );
};
