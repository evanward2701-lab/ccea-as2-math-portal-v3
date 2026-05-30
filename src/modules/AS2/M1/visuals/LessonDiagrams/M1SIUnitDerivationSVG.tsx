import React from 'react';
import { MathInline } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { ObjectBlock } from '@/core/diagram-engine/primitives/ObjectBlock';
import { DiagramLabel } from '@/core/diagram-engine/primitives/DiagramLabel';
import { VectorArrow } from '@/core/diagram-engine/primitives/VectorArrow';
import { SVGLibrary } from '@/core/diagram-engine/primitives/SVGLibrary';

export const M1SIUnitDerivationSVG: React.FC = () => {
  const BlockLabel = ({
    x,
    y,
    w,
    h,
    title,
    math,
    subtitle,
    tone = 'text-muted-foreground',
    mathClass = 'text-2xl font-medium text-foreground tracking-wide',
    subtitleClass,
    layout = 'stack',
  }: {
    x: number;
    y: number;
    w: number;
    h: number;
    title: string;
    math: string;
    subtitle?: string;
    tone?: string;
    mathClass?: string;
    subtitleClass?: string;
    layout?: 'stack' | 'inline';
  }) => (
    <div
      className="absolute flex flex-col items-center justify-center pointer-events-none"
      style={{
        left: `${(x / 850) * 100}%`,
        top: `${(y / 500) * 100}%`,
        width: `${(w / 850) * 100}%`,
        height: `${(h / 500) * 100}%`
      }}
    >
      <span className={`mb-1 text-xs font-bold uppercase tracking-[0.24em] ${tone}`}>{title}</span>
      {layout === 'inline' ? (
        <div className="mt-1 flex w-full items-center justify-center gap-5 px-4">
          {subtitle && (
            <span className={subtitleClass || "max-w-[62%] text-right text-base font-medium leading-tight text-muted-foreground"}>
              <MathInline content={subtitle} />
            </span>
          )}
          <span className={mathClass}>
            <MathInline content={math} />
          </span>
        </div>
      ) : (
        <>
          {subtitle && (
            <span className={subtitleClass || "mb-1 text-sm font-medium text-muted-foreground"}>
              <MathInline content={subtitle} />
            </span>
          )}
          <span className={mathClass}>
            <MathInline content={math} />
          </span>
        </>
      )}
    </div>
  );

  return (
    <DiagramPanel
      title="Fig 2. SI Unit Derivation Tree"
      analysis={
        <div className="grid gap-4 sm:grid-cols-3 w-full">
          <div className="flex flex-col items-center justify-center rounded-xl border border-primary/20 bg-muted/40 p-4 text-center">
            <span className="mb-2 text-2.5 font-bold uppercase tracking-[0.2em] text-muted-foreground">Base Units</span>
            <span className="font-serif text-lg text-foreground"><MathInline content="$\text{kg, m, s}$" /></span>
          </div>
          <div className="flex flex-col items-center justify-center rounded-xl border border-primary/20 bg-primary/5 p-4 text-center">
            <span className="mb-2 text-2.5 font-bold uppercase tracking-[0.2em] text-primary">Derived Motion</span>
            <span className="font-serif text-lg text-foreground"><MathInline content="$\text{m s}^{-1}\text{, m s}^{-2}$" /></span>
          </div>
          <div className="flex flex-col items-center justify-center rounded-xl border border-primary/20 bg-primary/10 p-4 text-center">
            <span className="mb-2 text-2.5 font-bold uppercase tracking-[0.2em] text-primary">Force Units</span>
            <span className="font-serif text-lg text-foreground"><MathInline content="$\text{N} = \text{kg m s}^{-2}$" /></span>
          </div>
        </div>
      }
    >
      <div className="w-full flex flex-col gap-6">
        <div className="w-full aspect-[17/10] relative bg-card rounded-2xl overflow-hidden shadow-sm border border-border">
          <SVGLibrary />
          <svg viewBox="0 0 850 500" className="w-full h-full absolute inset-0 z-0" preserveAspectRatio="xMidYMid meet">
            {/* Row 1 Blocks */}
            <ObjectBlock x={125} y={60} width={200} height={90} />
            <ObjectBlock x={375} y={60} width={200} height={90} />
            <ObjectBlock x={625} y={60} width={200} height={90} />

            {/* Row 2 Blocks */}
            <ObjectBlock x={175} y={210} width={260} height={100} />
            <ObjectBlock x={515} y={210} width={260} height={100} />

            {/* Row 3 Rects */}
            <rect x="175" y="370" width="260" height="100" rx="12" fill="var(--muted)" fillOpacity="0.3" stroke="var(--primary)" strokeOpacity="0.4" strokeWidth="1.5" />
            <rect x="515" y="370" width="260" height="100" rx="12" fill="var(--muted)" fillOpacity="0.3" stroke="var(--primary)" strokeOpacity="0.4" strokeWidth="1.5" />

            {/* Unit derivation connectors */}
            <VectorArrow x1={475} y1={150} x2={405} y2={210} type="structural" marker="default" />
            <VectorArrow x1={725} y1={150} x2={405} y2={210} type="structural" marker="default" />
            <VectorArrow x1={725} y1={150} x2={645} y2={210} type="structural" marker="default" />
            <path d="M 175 150 Q 135 260 175 420" fill="none" stroke="var(--primary)" strokeOpacity="0.5" strokeWidth="2" markerEnd="url(#arrow-structural)" />
            <path d="M 325 130 Q 415 160 515 390" fill="none" stroke="var(--primary)" strokeOpacity="0.5" strokeWidth="2" markerEnd="url(#arrow-structural)" />
            <VectorArrow x1={645} y1={310} x2={415} y2={370} type="structural" marker="default" />
            <VectorArrow x1={645} y1={310} x2={645} y2={370} type="structural" marker="default" />
          </svg>

          <DiagramLabel x="3%" y="17%" anchor="start" className="text-foreground font-bold uppercase tracking-[0.2em] text-2.5 opacity-60" text="$\text{Base SI}$" />
          <DiagramLabel x="3%" y="23%" anchor="start" className="text-foreground font-bold uppercase tracking-[0.2em] text-2.5 opacity-60" text="$\text{Units}$" />

          <DiagramLabel x="3%" y="44%" anchor="start" className="text-foreground font-bold uppercase tracking-[0.2em] text-2.5 opacity-60" text="$\text{Derived}$" />
          <DiagramLabel x="3%" y="50%" anchor="start" className="text-foreground font-bold uppercase tracking-[0.2em] text-2.5 opacity-60" text="$\text{Motion}$" />
          <DiagramLabel x="3%" y="56%" anchor="start" className="text-foreground font-bold uppercase tracking-[0.2em] text-2.5 opacity-60" text="$\text{Units}$" />

          <DiagramLabel x="3%" y="79%" anchor="start" className="text-foreground font-bold uppercase tracking-[0.2em] text-2.5 opacity-60" text="$\text{Force}$" />
          <DiagramLabel x="3%" y="85%" anchor="start" className="text-foreground font-bold uppercase tracking-[0.2em] text-2.5 opacity-60" text="$\text{Units}$" />

          <BlockLabel x={125} y={60} w={200} h={90} title="Mass" math="$\text{kg}$" />
          <BlockLabel x={375} y={60} w={200} h={90} title="Length" math="$\text{m}$" />
          <BlockLabel x={625} y={60} w={200} h={90} title="Time" math="$\text{s}$" />

          <BlockLabel
            x={175}
            y={210}
            w={260}
            h={100}
            title="Velocity"
            subtitle="$\displaystyle \frac{\text{displacement}}{\text{time}}$"
            math="$\text{m s}^{-1}$"
            tone="text-primary"
            layout="inline"
            mathClass="text-lg font-medium text-foreground tracking-wide"
            subtitleClass="text-base font-medium text-muted-foreground"
          />
          <BlockLabel
            x={515}
            y={210}
            w={260}
            h={100}
            title="Acceleration"
            subtitle="$\displaystyle \frac{\text{change in velocity}}{\text{time}}$"
            math="$\text{m s}^{-2}$"
            tone="text-primary"
            layout="inline"
            mathClass="text-lg font-medium text-foreground tracking-wide"
            subtitleClass="text-base font-medium text-muted-foreground"
          />
          <BlockLabel
            x={175}
            y={370}
            w={260}
            h={100}
            title="Force"
            subtitle="$F = ma$"
            math="$\text{N} = \text{kg m s}^{-2}$"
            tone="text-primary"
            mathClass="text-sm font-medium text-muted-foreground mt-1"
            subtitleClass="text-xl font-medium text-foreground tracking-wide"
          />
          <BlockLabel
            x={515}
            y={370}
            w={260}
            h={100}
            title="Weight"
            subtitle="$W = mg$"
            math="$\text{measured in Newtons (N)}$"
            tone="text-primary"
            mathClass="text-xs font-serif italic text-muted-foreground mt-1"
            subtitleClass="text-xl font-medium text-foreground tracking-wide"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
          <div className="flex flex-col items-center justify-start rounded-xl border border-border bg-card p-5 text-center shadow-sm">
            <span className="mb-2 text-2.5 font-bold uppercase tracking-[0.2em] text-primary">Mass Scaling</span>
            <span className="text-sm leading-relaxed text-muted-foreground">
              Always convert tonnes to <strong className="text-foreground font-normal">kg</strong> before using equations.
            </span>
          </div>
          <div className="flex flex-col items-center justify-start rounded-xl border border-border bg-card p-5 text-center shadow-sm">
            <span className="mb-2 text-2.5 font-bold uppercase tracking-[0.2em] text-primary">Dimension Trap</span>
            <span className="text-sm leading-relaxed text-muted-foreground">
              kg evaluates <strong className="text-foreground font-normal">mass</strong>; Newtons compute active <strong className="text-foreground font-normal">forces</strong>.
            </span>
          </div>
          <div className="flex flex-col items-center justify-start rounded-xl border border-border bg-card p-5 text-center shadow-sm">
            <span className="mb-2 text-2.5 font-bold uppercase tracking-[0.2em] text-primary">Unit Context</span>
            <span className="text-sm leading-relaxed text-muted-foreground">
              <strong className="text-foreground font-normal">m s⁻²</strong> tracks acceleration, never static velocity.
            </span>
          </div>
        </div>
      </div>
    </DiagramPanel>
  );
};
