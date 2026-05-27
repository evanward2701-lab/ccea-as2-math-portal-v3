import React from 'react';
import { MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { DiagramLabel } from '@/core/diagram-engine/primitives/DiagramLabel';
import { SVGLibrary } from '@/core/diagram-engine/primitives/SVGLibrary';
import { VectorArrow } from '@/core/diagram-engine/primitives/VectorArrow';

export const M2GravitySignConvention: React.FC = () => {
  return (
    <DiagramPanel
      title="Fig 3. Vertical Motion Sign Convention"
      analysis={
        <>
          <div className="space-y-3">
            <div className="p-3 bg-zinc-900/50 border border-zinc-800 rounded-lg">
              <p className="text-sm text-zinc-300 leading-relaxed">Gravity always acts downwards.</p>
            </div>
            <div className="p-3 bg-zinc-900/50 border border-zinc-800 rounded-lg">
              <p className="text-sm text-zinc-300 leading-relaxed">The sign of acceleration depends entirely on which direction is chosen as positive.</p>
            </div>
          </div>
          <div className="mt-4 p-3 bg-rose-950/30 border border-rose-900/40 rounded-lg text-sm text-rose-300">
            <strong>Exam Warning:</strong> Submitting two independent workflows with differing sign allocations to "guess" the mark scheme triggers the <em>Poorest Attempt Rule</em>, zeroing the question score.
          </div>
        </>
      }
    >
      <div className="grid w-full max-w-5xl grid-cols-1 gap-6 2xl:grid-cols-[1.05fr_1fr]">
        <SVGLibrary />

        <section className="relative min-h-[360px] overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-940/70 shadow-inner">
          <svg
            viewBox="0 0 420 320"
            className="absolute inset-0 h-full w-full"
            shapeRendering="geometricPrecision"
            overflow="visible"
            role="img"
            aria-label="Gravity vector acting vertically downwards"
          >
            <line x1="96" y1="72" x2="96" y2="260" stroke="#27272a" strokeWidth="1" strokeDasharray="5 8" />
            <VectorArrow x1={180} y1={76} x2={180} y2={238} type="weight" strokeWidth={4.5} marker="acceleration" />
          </svg>

          <DiagramLabel x="12%" y="14%" anchor="start">
            <div className="max-w-48 text-2.5 font-black uppercase tracking-[0.28em] text-zinc-500">
              Physical Direction
            </div>
          </DiagramLabel>

          <DiagramLabel x="57%" y="43%">
            <div className="w-56 rounded-lg border border-rose-500/20 bg-zinc-950/70 px-4 py-3 text-center shadow-xl">
              <div className="mb-1 text-2.5 font-black uppercase tracking-[0.22em] text-rose-400">gravity</div>
              <div className="text-zinc-100">
                <MathText content="g = 9.8\\mathrm{m\\,s^{-2}}" noMargin />
              </div>
            </div>
          </DiagramLabel>

          <DiagramLabel x="43%" y="84%">
            <div className="text-center text-xs font-black uppercase tracking-[0.24em] text-rose-300">
              acts downwards
            </div>
          </DiagramLabel>
        </section>

        <section className="grid gap-4">
          <div className="grid min-h-40 grid-cols-[112px_1fr] items-center gap-5 rounded-xl border border-zinc-800/80 bg-zinc-925 p-5 shadow-inner">
            <div className="relative h-32">
              <svg viewBox="0 0 104 128" className="absolute inset-0 h-full w-full" shapeRendering="geometricPrecision">
                <VectorArrow x1={52} y1={94} x2={52} y2={28} type="velocity" strokeWidth={4} />
              </svg>
            </div>

            <div className="min-w-0">
              <h5 className="mb-3 font-serif text-lg font-bold text-zinc-100">Convention: Up is Positive</h5>
              <div className="mb-3 inline-flex rounded-md border border-emerald-500/20 bg-emerald-950/10 px-3 py-1 text-2.5 font-black uppercase tracking-[0.18em] text-emerald-400">
                Positive direction upward
              </div>
              <div className="rounded-lg border border-emerald-500/20 bg-zinc-950/60 px-4 py-3 text-emerald-300">
                <MathText content="a = -9.8\\mathrm{m\\,s^{-2}}" noMargin />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                Standard for projectiles launched from ground.
              </p>
            </div>
          </div>

          <div className="grid min-h-40 grid-cols-[112px_1fr] items-center gap-5 rounded-xl border border-zinc-800/80 bg-zinc-925 p-5 shadow-inner">
            <div className="relative h-32">
              <svg viewBox="0 0 104 128" className="absolute inset-0 h-full w-full" shapeRendering="geometricPrecision">
                <VectorArrow x1={52} y1={28} x2={52} y2={94} type="friction" strokeWidth={4} />
              </svg>
            </div>

            <div className="min-w-0">
              <h5 className="mb-3 font-serif text-lg font-bold text-zinc-100">Convention: Down is Positive</h5>
              <div className="mb-3 inline-flex rounded-md border border-amber-500/20 bg-amber-950/10 px-3 py-1 text-2.5 font-black uppercase tracking-[0.18em] text-amber-400">
                Positive direction downward
              </div>
              <div className="rounded-lg border border-amber-500/20 bg-zinc-950/60 px-4 py-3 text-amber-300">
                <MathText content="a = +9.8\\mathrm{m\\,s^{-2}}" noMargin />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                Standard for objects dropped from height.
              </p>
            </div>
          </div>
        </section>
      </div>
    </DiagramPanel>
  );
};
