import React from 'react';
import { MathInline } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { DiagramLabel } from '@/core/diagram-engine/primitives/DiagramLabel';
import { ObjectBlock } from '@/core/diagram-engine/primitives/ObjectBlock';
import { Particle, SupportSurface } from '@/core/diagram-engine/primitives/PhysicsPrimitives';
import { SVGLibrary } from '@/core/diagram-engine/primitives/SVGLibrary';
import { VectorArrow } from '@/core/diagram-engine/primitives/VectorArrow';

interface LiftStudyPanelProps {
  title: string;
  note: string;
  equationTitle: string;
  equation: string;
  children: React.ReactNode;
}

const StickFigure: React.FC<{ x: number; y: number; scale?: number; tone?: 'muted' | 'active' }> = ({
  x,
  y,
  scale = 1,
  tone = 'muted',
}) => {
  const stroke = tone === 'active' ? 'var(--foreground)' : 'var(--muted-foreground)';
  const fill = tone === 'active' ? 'var(--background)' : 'var(--muted)';

  return (
    <g transform={`translate(${x}, ${y}) scale(${scale})`} fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <Particle cx={0} cy={-28} r={8} fill={fill} stroke={stroke} strokeWidth={2} />
      <line x1="0" y1="-20" x2="0" y2="28" />
      <line x1="0" y1="-8" x2="-22" y2="8" />
      <line x1="0" y1="-8" x2="22" y2="8" />
      <line x1="0" y1="28" x2="-18" y2="72" />
      <line x1="0" y1="28" x2="18" y2="72" />
    </g>
  );
};

const LiftStudyPanel: React.FC<LiftStudyPanelProps> = ({ title, note, equationTitle, equation, children }) => (
  <div className="flex flex-col gap-4 rounded-xl border border-primary/20 bg-card p-4 shadow-sm">
    <div className="flex min-h-12 items-start justify-between gap-4">
      <div>
        <h3 className="font-serif text-2xl font-light leading-none tracking-wide text-foreground">{title}</h3>
        <p className="mt-2 max-w-sm text-xs leading-relaxed text-muted-foreground">{note}</p>
      </div>
    </div>

    <div className="relative aspect-[14/9] w-full overflow-hidden rounded-xl border border-primary/20 bg-card shadow-inner">
      <SVGLibrary />
      {children}
    </div>

    <div className="rounded-xl border border-primary/20 bg-muted/40 px-5 py-4 text-center shadow-sm">
      <div className="mb-2 text-2.5 font-black uppercase tracking-[0.24em] text-muted-foreground">{equationTitle}</div>
      <div className="text-xl font-semibold text-foreground">
        <MathInline content={equation} />
      </div>
    </div>
  </div>
);

export const LiftPhysicsSVG: React.FC = () => (
  <DiagramPanel
    title="Lift Physics Isolation"
    analysis={
      <div className="grid gap-4 md:grid-cols-2 w-full max-w-5xl mx-auto px-2">
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm leading-relaxed text-muted-foreground">
          <strong className="text-foreground">Whole system:</strong> model the lift and passenger together to find the cable tension.
        </div>
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm leading-relaxed text-muted-foreground">
          <strong className="text-foreground">Isolated passenger:</strong> model the passenger alone to find the floor reaction.
        </div>
        <div className="rounded-xl border border-destructive/20 bg-destructive/10 p-4 text-sm leading-relaxed text-destructive">
          <strong className="text-destructive">Exam trap:</strong> the passenger reaction is internal to the whole system and must not appear in the whole-system equation.
        </div>
        <div className="rounded-xl border border-primary/20 bg-primary/10 p-4 text-sm leading-relaxed text-primary">
          <strong className="text-primary">Direction rule:</strong> upward acceleration makes the upward force side larger than the weight side.
        </div>
      </div>
    }
  >
    <div className="grid w-full max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2">
      <LiftStudyPanel
        title="Whole System"
        note="Boundary contains the lift and passenger; floor contact is internal."
        equationTitle="Whole System Equation"
        equation="$T - (m + M)g = (m + M)a$"
      >
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 420 270" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" role="img" aria-label="Whole lift system force diagram">
          <rect x="22" y="24" width="376" height="222" rx="18" fill="var(--muted)" fillOpacity="0.4" stroke="var(--border)" strokeWidth="1" />
          <SupportSurface x1={116} y1={54} x2={304} y2={54} rough stroke="var(--muted-foreground)" strokeOpacity="0.5" strokeWidth={3} />
          <line x1="210" y1="54" x2="210" y2="100" stroke="var(--muted-foreground)" strokeOpacity="0.6" strokeWidth="2.5" strokeLinecap="round" />

          <rect x="144" y="100" width="132" height="100" rx="12" fill="var(--card)" stroke="var(--primary)" strokeOpacity="0.3" strokeWidth="2" />
          <StickFigure x={210} y={154} scale={0.62} />

          <VectorArrow x1={210} y1={102} x2={210} y2={64} type="tension" />
          <VectorArrow x1={210} y1={200} x2={210} y2={236} type="weight" />
          <VectorArrow x1={82} y1={210} x2={82} y2={148} type="accel" marker="acceleration" />
        </svg>

        <DiagramLabel x="53.5%" y="24%" text="$T$" className="text-base font-black text-primary" />
        <DiagramLabel x="57.5%" y="82%" text="$(m + M)g$" className="text-base font-black text-destructive" />
        <DiagramLabel x="23.5%" y="64%" text="$a$" className="text-base font-black text-foreground" />
      </LiftStudyPanel>

      <LiftStudyPanel
        title="Isolated Passenger"
        note="Boundary contains only the passenger; the floor reaction is now external."
        equationTitle="Passenger Equation"
        equation="$R - mg = ma$"
      >
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 420 270" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" role="img" aria-label="Isolated passenger force diagram">
          <rect x="22" y="24" width="376" height="222" rx="18" fill="var(--muted)" fillOpacity="0.4" stroke="var(--border)" strokeWidth="1" />
          <SupportSurface x1={122} y1={188} x2={298} y2={188} stroke="var(--primary)" strokeOpacity="0.4" strokeWidth={3} />
          <StickFigure x={210} y={118} scale={0.88} tone="active" />

          <VectorArrow x1={210} y1={84} x2={210} y2={42} type="reaction" />
          <VectorArrow x1={210} y1={188} x2={210} y2={232} type="weight" />
          <VectorArrow x1={86} y1={178} x2={86} y2={118} type="accel" marker="acceleration" />
        </svg>

        <DiagramLabel x="55.5%" y="22%" text="$R$" className="text-base font-black text-primary" />
        <DiagramLabel x="55.5%" y="80.5%" text="$mg$" className="text-base font-black text-destructive" />
        <DiagramLabel x="23.5%" y="56%" text="$a$" className="text-base font-black text-foreground" />
      </LiftStudyPanel>
    </div>
  </DiagramPanel>
);
