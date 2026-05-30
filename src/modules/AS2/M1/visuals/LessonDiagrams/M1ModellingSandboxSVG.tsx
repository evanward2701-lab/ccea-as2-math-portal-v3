import React from 'react';
import { MathInline } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { cn } from '@/core/utils/cn';
import { Particle, SupportSurface } from '@/core/diagram-engine/primitives/PhysicsPrimitives';
import { SVGLibrary } from '@/core/diagram-engine/primitives/SVGLibrary';
import { VectorArrow } from '@/core/diagram-engine/primitives/VectorArrow';

type Tone = 'zinc' | 'amber' | 'emerald' | 'rose';

interface Chip {
  label: string;
  effect: string;
  tone: Tone;
}

interface AnalysisCard {
  text: string;
  tone: Tone;
}

const toneStyles: Record<Tone, { text: string; border: string; bg: string; glow: string }> = {
  zinc: {
    text: 'text-foreground',
    border: 'border-primary/20',
    bg: 'bg-card',
    glow: 'from-zinc-500/10',
  },
  amber: {
    text: 'text-primary',
    border: 'border-primary/25',
    bg: 'bg-primary/20',
    glow: 'from-amber-500/15',
  },
  emerald: {
    text: 'text-primary',
    border: 'border-primary/25',
    bg: 'bg-primary/20',
    glow: 'from-emerald-500/15',
  },
  rose: {
    text: 'text-destructive',
    border: 'border-destructive/30',
    bg: 'bg-destructive/25',
    glow: 'from-rose-500/15',
  },
};

const analysisCards: AnalysisCard[] = [
  {
    text: 'A model is not claiming reality is perfect. It keeps only the features needed for the maths.',
    tone: 'zinc',
  },
  {
    text: 'Use the exact modelling words from the question in your answer.',
    tone: 'zinc',
  },
  {
    text: 'Rigid light towbar means fixed distance and negligible mass.',
    tone: 'rose',
  },
];

const assumptionChips: Chip[] = [
  { label: 'particle', effect: 'dimensions ignored', tone: 'zinc' },
  { label: 'light towbar', effect: 'negligible mass', tone: 'zinc' },
  { label: 'rigid towbar', effect: 'does not bend', tone: 'rose' },
  { label: 'smooth surface', effect: 'no friction', tone: 'amber' },
  { label: 'same acceleration', effect: 'connected motion', tone: 'emerald' },
];

const AnalysisCard: React.FC<AnalysisCard> = ({ text, tone }) => {
  const styles = toneStyles[tone];

  return (
    <div className={cn('rounded-lg border p-4 text-sm leading-relaxed', styles.border, styles.bg, styles.text)}>
      {text}
    </div>
  );
};

const AssumptionChip: React.FC<Chip> = ({ label, effect, tone }) => {
  const styles = toneStyles[tone];

  return (
    <div
      className={cn(
        'flex min-h-23 flex-col items-center justify-center rounded-xl border px-3 py-3 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.035),0_14px_30px_rgba(0,0,0,0.18)]',
        styles.border,
        styles.bg
      )}
    >
      <div className={cn('max-w-full text-[11px] font-black uppercase leading-snug tracking-[0.14em] text-balance break-words', styles.text)}>
        {label}
      </div>
      <div className="mt-1.5 max-w-full text-xs font-medium leading-snug text-foreground text-balance break-words">{effect}</div>
    </div>
  );
};

const RealWorldSketch: React.FC = () => (
  <svg viewBox="0 0 520 260" className="h-full w-full" fill="none" aria-hidden="true">
    <line x1="56" y1="200" x2="456" y2="200" stroke="var(--foreground)" strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
    {Array.from({ length: 12 }).map((_, index) => (
      <line
        key={index}
        x1={72 + index * 32}
        y1="208"
        x2={88 + index * 32}
        y2="200"
        stroke="var(--muted-foreground)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    ))}

    <rect x="100" y="132" width="88" height="44" rx="5" fill="var(--card)" stroke="var(--muted-foreground)" strokeWidth="3" />
    <circle cx="122" cy="186" r="15" fill="var(--background)" stroke="var(--muted-foreground)" strokeWidth="3" />
    <circle cx="166" cy="186" r="15" fill="var(--background)" stroke="var(--muted-foreground)" strokeWidth="3" />

    <rect x="272" y="120" width="144" height="56" rx="9" fill="var(--card)" stroke="var(--muted-foreground)" strokeWidth="3" />
    <path d="M 296 120 L 322 82 H 382 L 406 120 Z" fill="var(--muted)" stroke="var(--muted-foreground)" strokeWidth="3" strokeLinejoin="round" />
    <circle cx="306" cy="186" r="20" fill="var(--background)" stroke="var(--muted-foreground)" strokeWidth="3" />
    <circle cx="378" cy="186" r="20" fill="var(--background)" stroke="var(--muted-foreground)" strokeWidth="3" />

    <line x1="188" y1="156" x2="272" y2="156" stroke="#f59e0b" strokeWidth="5" strokeLinecap="round" />
    <path d="M 78 158 Q 60 146 78 134" stroke="var(--muted-foreground)" strokeWidth="1.8" strokeDasharray="5 7" strokeLinecap="round" opacity="0.55" />
    <path d="M 66 146 Q 50 134 66 122" stroke="var(--muted-foreground)" strokeWidth="1.8" strokeDasharray="5 7" strokeLinecap="round" opacity="0.35" />
    <path d="M 438 118 Q 422 106 438 94" stroke="var(--muted-foreground)" strokeWidth="1.8" strokeDasharray="5 7" strokeLinecap="round" opacity="0.4" />
  </svg>
);

const ModelSketch: React.FC = () => (
  <svg viewBox="0 0 520 260" className="h-full w-full" fill="none" aria-hidden="true">
    <SupportSurface x1={86} y1={194} x2={434} y2={194} stroke="var(--muted-foreground)" strokeWidth={1.8} className="opacity-45" />
    <g opacity="0.65">
      <VectorArrow x1={164} y1={84} x2={314} y2={84} type="force" strokeWidth={1.8} />
    </g>

    <Particle cx={150} cy={144} r={30} fill="var(--card)" stroke="var(--foreground)" strokeWidth={3.5} />
    <Particle cx={350} cy={144} r={30} fill="var(--card)" stroke="var(--foreground)" strokeWidth={3.5} />
    <line x1="180" y1="144" x2="320" y2="144" stroke="var(--muted-foreground)" strokeWidth="3.5" strokeLinecap="round" />

    <VectorArrow x1={120} y1={144} x2={72} y2={144} type="weight" strokeWidth={2.5} />
    <VectorArrow x1={194} y1={144} x2={232} y2={144} type="tension" strokeWidth={2.4} />
    <VectorArrow x1={306} y1={144} x2={268} y2={144} type="tension" strokeWidth={2.4} />
    <VectorArrow x1={380} y1={144} x2={444} y2={144} type="velocity" strokeWidth={2.8} />
  </svg>
);

const ModelSketchWithLabels: React.FC = () => (
  <div className="relative mx-auto aspect-2/1 w-full max-w-105 lg:max-w-97.5 xl:max-w-107.5">
    <SVGLibrary />
    <ModelSketch />
    <div className="pointer-events-none absolute inset-0 z-10 select-none text-foreground">
      <div className="absolute left-[28.8%] top-[55.5%] -translate-x-1/2 -translate-y-1/2 text-3.25 font-bold">
        <MathInline content="$m_1$" />
      </div>
      <div className="absolute left-[19%] top-[50.5%] -translate-x-1/2 -translate-y-full text-[12px] font-bold text-destructive">
        <MathInline content="$R_1$" />
      </div>
      <div className="absolute left-[67.2%] top-[55.5%] -translate-x-1/2 -translate-y-1/2 text-3.25 font-bold">
        <MathInline content="$m_2$" />
      </div>
      <div className="absolute left-[84.5%] top-[50.5%] -translate-x-1/2 -translate-y-full text-3.25 font-bold text-primary">
        <MathInline content="$D$" />
      </div>
      <div className="absolute left-[63%] top-[27.5%] -translate-x-1/2 -translate-y-1/2 text-xs font-bold text-muted-foreground">
        <MathInline content="$a$" />
      </div>
      <div className="absolute left-[41%] top-[47%] -translate-x-1/2 -translate-y-1/2 text-2.75 font-bold text-primary">
        <MathInline content="$T$" />
      </div>
      <div className="absolute left-[55%] top-[47%] -translate-x-1/2 -translate-y-1/2 text-2.75 font-bold text-primary">
        <MathInline content="$T$" />
      </div>
    </div>
  </div>
);

const TransformBadge: React.FC = () => (
  <div className="flex items-center justify-center gap-3 lg:flex-col">
    <div className="h-px w-16 bg-muted/50 lg:h-16 lg:w-px" />
    <div className="rounded-lg border border-primary/20 bg-card px-4 py-3 text-center shadow-[0_12px_28px_rgba(0,0,0,0.25)]">
      <div className="text-2.5 font-bold uppercase tracking-[0.22em] text-muted-foreground">Apply</div>
      <div className="mt-1 whitespace-nowrap text-sm font-semibold text-foreground">assumptions</div>
    </div>
    <div className="h-px w-16 bg-muted/50 lg:h-16 lg:w-px" />
  </div>
);

const StagePanel: React.FC<{
  title: string;
  caption: string;
  tone: 'amber' | 'emerald';
  children: React.ReactNode;
}> = ({ title, caption, tone, children }) => {
  const styles = toneStyles[tone];

  return (
    <section className={cn('relative overflow-hidden rounded-xl border bg-card p-4', styles.border)}>
      <div className={cn('pointer-events-none absolute inset-x-0 top-0 h-28 bg-linear-to-b to-transparent', styles.glow)} />
      <div className="relative z-10 mb-3 text-center">
        <div className={cn('text-lg font-bold tracking-tight', styles.text)}>{title}</div>
        <div className="mt-1 text-xs font-medium text-muted-foreground">{caption}</div>
      </div>
      <div className="relative z-10 flex h-60 items-center justify-center rounded-lg border border-primary/20 bg-card/80 p-2">
        {children}
      </div>
    </section>
  );
};

export const M1ModellingSandboxSVG: React.FC = () => (
  <DiagramPanel
    title="Fig 3b. Modelling Sandbox"
    analysis={
      <div className="mx-auto grid w-full max-w-5xl gap-3 md:grid-cols-3">
        {analysisCards.map((card) => (
          <AnalysisCard key={card.text} {...card} />
        ))}
        <div className="rounded-lg border border-primary/25 bg-primary/20 p-4 text-center text-sm font-semibold leading-relaxed text-primary md:col-span-3">
          Exam technique: translate each modelling word into a mathematical effect before writing equations.
        </div>
      </div>
    }
  >
    <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-xl border border-primary/20 bg-muted/30 p-5 shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
      <div className="mb-5 flex flex-col gap-2 border-b border-primary/20 pb-5 text-center">
        <div className="text-2.5 font-bold uppercase tracking-[0.32em] text-muted-foreground">Model Reduction</div>
        <div className="font-serif text-2xl font-light tracking-wide text-foreground">From Real System to Equation Model</div>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
        <StagePanel title="Real Situation" caption="Detailed system with distracting features" tone="amber">
          <RealWorldSketch />
        </StagePanel>

        <TransformBadge />

        <StagePanel title="Mathematical Model" caption="Simplified structure for equations" tone="emerald">
          <ModelSketchWithLabels />
        </StagePanel>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {assumptionChips.map((chip) => (
          <AssumptionChip key={chip.label} {...chip} />
        ))}
      </div>
    </div>
  </DiagramPanel>
);
