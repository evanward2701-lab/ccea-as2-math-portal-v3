import React from 'react';
import { MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { DiagramLabel } from '@/core/diagram-engine/primitives/DiagramLabel';
import { SVGLibrary } from '@/core/diagram-engine/primitives/SVGLibrary';
import { VectorArrow } from '@/core/diagram-engine/primitives/VectorArrow';

export const M2SignConventionSplit: React.FC = () => {
  return (
    <DiagramPanel
      title="Fig. SUVAT Sign Convention Comparison"
      analysis={
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground italic text-center">
            The choice of positive direction is arbitrary, but consistency is key. Both conventions yield the same physical result.
          </p>
          <div className="p-3 bg-destructive/30 border border-destructive/40 rounded-lg text-sm text-destructive">
            <strong className="font-bold text-destructive">CCEA Exam Pitfall:</strong> If you are unsure of a sign convention and present two competing solutions without clearly crossing one out, examiners will mark the <strong>poorest</strong> solution.
          </div>
        </div>
      }
    >
      <div className="grid w-full max-w-5xl grid-cols-1 gap-6 2xl:grid-cols-2">
        <SVGLibrary />

        <div className="rounded-xl border border-primary/20 bg-zinc-940/70 p-5 shadow-inner">
          <h4 className="mb-4 text-center text-2.5 font-black uppercase tracking-[0.28em] text-primary">
            Upwards Positive
          </h4>

          <div className="relative h-72 overflow-hidden rounded-xl border border-primary/20 bg-card">
            <svg viewBox="0 0 420 280" className="absolute inset-0 h-full w-full" shapeRendering="geometricPrecision">
              <line x1="110" y1="224" x2="110" y2="52" stroke="#10b981" strokeWidth="2.5" strokeDasharray="5 7" opacity="0.75" />
              <VectorArrow x1={110} y1={210} x2={110} y2={58} type="velocity" dashed strokeWidth={3.5} marker="acceleration" />
              <VectorArrow x1={210} y1={80} x2={210} y2={188} type="weight" strokeWidth={3.5} marker="acceleration" />
              <VectorArrow x1={310} y1={212} x2={310} y2={106} type="friction" strokeWidth={3.5} marker="acceleration" />
            </svg>

            <DiagramLabel x="26%" y="14%">
              <div className="rounded-md border border-primary/20 bg-primary/10 px-3 py-1 text-2.5 font-black uppercase tracking-[0.18em] text-primary">
                positive
              </div>
            </DiagramLabel>
            <DiagramLabel x="50%" y="76%" text="g" className="text-destructive" />
            <DiagramLabel x="74%" y="26%" text="u" className="text-primary" />
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-primary/20 bg-card px-4 py-3 text-center text-primary">
              <MathText content="u = +21\\operatorname{m s^{-1}}" noMargin />
            </div>
            <div className="rounded-lg border border-primary/20 bg-card px-4 py-3 text-center text-primary">
              <MathText content="a = -9.8\\operatorname{m s^{-2}}" noMargin />
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-primary/20 bg-zinc-940/70 p-5 shadow-inner">
          <h4 className="mb-4 text-center text-2.5 font-black uppercase tracking-[0.28em] text-primary">
            Downwards Positive
          </h4>

          <div className="relative h-72 overflow-hidden rounded-xl border border-primary/20 bg-card">
            <svg viewBox="0 0 420 280" className="absolute inset-0 h-full w-full" shapeRendering="geometricPrecision">
              <line x1="110" y1="52" x2="110" y2="224" stroke="#fbbf24" strokeWidth="2.5" strokeDasharray="5 7" opacity="0.75" />
              <VectorArrow x1={110} y1={58} x2={110} y2={210} type="friction" dashed strokeWidth={3.5} marker="acceleration" />
              <VectorArrow x1={210} y1={80} x2={210} y2={188} type="weight" strokeWidth={3.5} marker="acceleration" />
              <VectorArrow x1={310} y1={106} x2={310} y2={212} type="weight" strokeWidth={3.5} marker="acceleration" />
            </svg>

            <DiagramLabel x="26%" y="86%">
              <div className="rounded-md border border-primary/20 bg-primary/10 px-3 py-1 text-2.5 font-black uppercase tracking-[0.18em] text-primary">
                positive
              </div>
            </DiagramLabel>
            <DiagramLabel x="50%" y="76%" text="g" className="text-destructive" />
            <DiagramLabel x="74%" y="76%" text="u" className="text-destructive" />
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-destructive/20 bg-card px-4 py-3 text-center text-destructive">
              <MathText content="u = -21\\operatorname{m s^{-1}}" noMargin />
            </div>
            <div className="rounded-lg border border-primary/20 bg-card px-4 py-3 text-center text-primary">
              <MathText content="a = +9.8\\operatorname{m s^{-2}}" noMargin />
            </div>
          </div>
        </div>
      </div>
    </DiagramPanel>
  );
};
