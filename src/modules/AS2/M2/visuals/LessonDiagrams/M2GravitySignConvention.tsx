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
            <div className="p-3 bg-primary/5 border border-primary/20 rounded-lg">
              <p className="text-sm text-foreground leading-relaxed">Gravity always acts downwards.</p>
            </div>
            <div className="p-3 bg-primary/5 border border-primary/20 rounded-lg">
              <p className="text-sm text-foreground leading-relaxed">The sign of acceleration depends entirely on which direction is chosen as positive.</p>
            </div>
          </div>
          <div className="mt-4 p-3 bg-destructive/30 border border-destructive/40 rounded-lg text-sm text-destructive">
            <strong>Exam Warning:</strong> Submitting two independent workflows with differing sign allocations to "guess" the mark scheme triggers the <em>Poorest Attempt Rule</em>, zeroing the question score.
          </div>
        </>
      }
    >
      <div className="grid w-full max-w-5xl grid-cols-1 gap-6 2xl:grid-cols-[1.05fr_1fr]">
        <SVGLibrary />

        <section className="relative min-h-[360px] overflow-hidden rounded-xl border border-primary/20 bg-zinc-940/70 shadow-inner">
          <svg
            viewBox="0 0 420 320"
            className="absolute inset-0 h-full w-full"
            shapeRendering="geometricPrecision"
            overflow="visible"
            role="img"
            aria-label="Gravity vector acting vertically downwards"
          >
            <line x1="96" y1="72" x2="96" y2="260" stroke="var(--border)" strokeWidth="1" strokeDasharray="5 8" />
            <VectorArrow x1={180} y1={76} x2={180} y2={238} type="weight" strokeWidth={4.5} marker="acceleration" />
          </svg>

          <DiagramLabel x="12%" y="14%" anchor="start">
            <div className="max-w-48 text-2.5 font-black uppercase tracking-[0.28em] text-muted-foreground">
              Physical Direction
            </div>
          </DiagramLabel>

          <DiagramLabel x="57%" y="43%">
            <div className="w-56 rounded-lg border border-destructive/20 bg-card px-4 py-3 text-center shadow-xl">
              <div className="mb-1 text-2.5 font-black uppercase tracking-[0.22em] text-destructive">gravity</div>
              <div className="text-foreground">
                <MathText content="g = 9.8\\mathrm{m\\,s^{-2}}" noMargin />
              </div>
            </div>
          </DiagramLabel>

          <DiagramLabel x="43%" y="84%">
            <div className="text-center text-xs font-black uppercase tracking-[0.24em] text-destructive">
              acts downwards
            </div>
          </DiagramLabel>
        </section>

        <section className="grid gap-4">
          <div className="grid min-h-40 grid-cols-[112px_1fr] items-center gap-5 rounded-xl border border-primary/20 bg-card p-5 shadow-inner">
            <div className="relative h-32">
              <svg viewBox="0 0 104 128" className="absolute inset-0 h-full w-full" shapeRendering="geometricPrecision">
                <VectorArrow x1={52} y1={94} x2={52} y2={28} type="velocity" strokeWidth={4} />
              </svg>
            </div>

            <div className="min-w-0">
              <h5 className="mb-3 font-serif text-lg font-bold text-foreground">Convention: Up is Positive</h5>
              <div className="mb-3 inline-flex rounded-md border border-primary/20 bg-primary/10 px-3 py-1 text-2.5 font-black uppercase tracking-[0.18em] text-primary">
                Positive direction upward
              </div>
              <div className="rounded-lg border border-primary/20 bg-card px-4 py-3 text-primary">
                <MathText content="a = -9.8\\mathrm{m\\,s^{-2}}" noMargin />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Standard for projectiles launched from ground.
              </p>
            </div>
          </div>

          <div className="grid min-h-40 grid-cols-[112px_1fr] items-center gap-5 rounded-xl border border-primary/20 bg-card p-5 shadow-inner">
            <div className="relative h-32">
              <svg viewBox="0 0 104 128" className="absolute inset-0 h-full w-full" shapeRendering="geometricPrecision">
                <VectorArrow x1={52} y1={28} x2={52} y2={94} type="friction" strokeWidth={4} />
              </svg>
            </div>

            <div className="min-w-0">
              <h5 className="mb-3 font-serif text-lg font-bold text-foreground">Convention: Down is Positive</h5>
              <div className="mb-3 inline-flex rounded-md border border-primary/20 bg-primary/10 px-3 py-1 text-2.5 font-black uppercase tracking-[0.18em] text-primary">
                Positive direction downward
              </div>
              <div className="rounded-lg border border-primary/20 bg-card px-4 py-3 text-primary">
                <MathText content="a = +9.8\\mathrm{m\\,s^{-2}}" noMargin />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Standard for objects dropped from height.
              </p>
            </div>
          </div>
        </section>
      </div>
    </DiagramPanel>
  );
};
