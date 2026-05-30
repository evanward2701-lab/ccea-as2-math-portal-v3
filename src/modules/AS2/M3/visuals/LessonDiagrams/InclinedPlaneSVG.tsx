import React from 'react';
import { MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { DiagramLabel } from '@/core/diagram-engine/primitives/DiagramLabel';
import { SVGLibrary } from '@/core/diagram-engine/primitives/SVGLibrary';
import { VectorArrow } from '@/core/diagram-engine/primitives/VectorArrow';
import { themeColors } from '@/core/types/mechanicsTheme';

export const InclinedPlaneSVG: React.FC = () => (
  <DiagramPanel
    title="Fig 3. Inclined Plane Resolution"
    analysis={(
      <div className="space-y-3">
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-lg border border-primary/20 bg-primary/10 p-3 text-center">
            <h4 className="mb-2 text-2.5 font-black uppercase tracking-[0.18em] text-primary">Down Plane</h4>
            <MathText content="mg\\sin\\theta" noMargin />
          </div>
          <div className="rounded-lg border border-primary/20 bg-primary/10 p-3 text-center">
            <h4 className="mb-2 text-2.5 font-black uppercase tracking-[0.18em] text-primary">Into Plane</h4>
            <MathText content="mg\\cos\\theta" noMargin />
          </div>
          <div className="rounded-lg border border-primary/20 bg-primary/10 p-3 text-center">
            <h4 className="mb-2 text-2.5 font-black uppercase tracking-[0.18em] text-primary">Reaction</h4>
            <MathText content="R = mg\\cos\\theta" noMargin />
          </div>
        </div>
        <div className="rounded-lg border border-primary/20 bg-primary/5 p-3">
          <p className="text-sm leading-relaxed text-foreground">
            Weight <MathText content="mg" className="inline not-italic align-baseline [&_p]:inline [&_p]:m-0" /> always acts vertically downwards. Resolve it parallel and perpendicular to the plane of motion.
          </p>
        </div>
        <div className="rounded-lg border border-destructive/40 bg-destructive/30 p-3 text-sm text-destructive">
          <strong className="font-bold text-destructive">CCEA Exam Pitfall:</strong> Never draw the weight vector acting diagonally down the slope. It is always vertical.
        </div>
      </div>
    )}
  >
    <div className="relative mx-auto aspect-42/30 w-full max-w-3xl overflow-hidden rounded-xl border border-primary/20 bg-card shadow-inner">
      <SVGLibrary />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 700 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        shapeRendering="geometricPrecision"
        overflow="visible"
        role="img"
        aria-label="Inclined plane force resolution diagram"
      >
        <line x1="100" y1="400" x2="640" y2="400" stroke="#3f3f46" strokeWidth="2" strokeDasharray="7 8" />
        <line x1="92" y1="400" x2="632" y2="156" stroke={themeColors.structural} strokeWidth="5" strokeLinecap="round" />

        <g stroke="#3f3f46" strokeWidth="2" opacity="0.55">
          <line x1="130" y1="392" x2="106" y2="416" />
          <line x1="170" y1="374" x2="146" y2="398" />
          <line x1="210" y1="356" x2="186" y2="380" />
          <line x1="250" y1="338" x2="226" y2="362" />
          <line x1="290" y1="320" x2="266" y2="344" />
          <line x1="330" y1="302" x2="306" y2="326" />
          <line x1="370" y1="284" x2="346" y2="308" />
          <line x1="410" y1="266" x2="386" y2="290" />
          <line x1="450" y1="248" x2="426" y2="272" />
          <line x1="490" y1="230" x2="466" y2="254" />
        </g>

        <path d="M 150 400 A 58 58 0 0 0 145 376" stroke="var(--muted-foreground)" strokeWidth="2" />

        <g transform="translate(360 278) rotate(-24.3)">
          <rect x="-44" y="-48" width="88" height="48" rx="6" fill="var(--card)" stroke="var(--muted-foreground)" strokeWidth="2" />
          <line x1="-54" y1="0" x2="54" y2="0" stroke="var(--muted-foreground)" strokeWidth="2" opacity="0.55" />

          <VectorArrow x1={0} y1={-48} x2={0} y2={-132} type="reaction" strokeWidth={3.2} marker="default" />
          <VectorArrow x1={0} y1={-18} x2={-122} y2={-18} type="friction" dashed strokeWidth={2.8} marker="default" />
          <VectorArrow x1={0} y1={-18} x2={0} y2={66} type="friction" dashed strokeWidth={2.8} marker="default" />
        </g>

        <VectorArrow x1={360} y1={278} x2={360} y2={424} type="weight" strokeWidth={3.4} marker="default" />
      </svg>

      <DiagramLabel x="19%" y="77%" text="\\theta" className="text-foreground" />

      <DiagramLabel x="40%" y="22%">
        <div className="rounded-md border border-primary/20 bg-card px-3 py-1 text-primary shadow-xl">
          <MathText content="R" noMargin />
        </div>
      </DiagramLabel>

      <DiagramLabel x="18%" y="59%">
        <div className="rounded-md border border-primary/20 bg-card px-3 py-1 text-primary shadow-xl">
          <MathText content="mg\\sin\\theta" noMargin />
        </div>
      </DiagramLabel>

      <DiagramLabel x="54%" y="69%">
        <div className="rounded-md border border-primary/20 bg-card px-3 py-1 text-primary shadow-xl">
          <MathText content="mg\\cos\\theta" noMargin />
        </div>
      </DiagramLabel>

      <DiagramLabel x="48%" y="86%">
        <div className="rounded-md border border-destructive/20 bg-card px-3 py-1 text-destructive shadow-xl">
          <MathText content="mg" noMargin />
        </div>
      </DiagramLabel>

      <DiagramLabel x="75%" y="20%">
        <div className="max-w-44 text-center text-2.5 font-black uppercase tracking-[0.22em] text-muted-foreground">
          components are resolved from vertical weight
        </div>
      </DiagramLabel>
    </div>
  </DiagramPanel>
);
