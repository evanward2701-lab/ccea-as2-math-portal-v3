import React from 'react';
import { MathInline } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { cn } from '@/core/utils/cn';
import { Particle, SupportSurface } from '@/core/diagram-engine/PhysicsPrimitives';

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
    text: 'text-zinc-300',
    border: 'border-zinc-800/70',
    bg: 'bg-zinc-950/25',
    glow: 'from-zinc-500/10',
  },
  amber: {
    text: 'text-amber-200',
    border: 'border-amber-500/25',
    bg: 'bg-amber-950/20',
    glow: 'from-amber-500/15',
  },
  emerald: {
    text: 'text-emerald-200',
    border: 'border-emerald-500/25',
    bg: 'bg-emerald-950/20',
    glow: 'from-emerald-500/15',
  },
  rose: {
    text: 'text-rose-200',
    border: 'border-rose-500/30',
    bg: 'bg-rose-950/25',
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
    <div className={cn('rounded-lg border px-3 py-3 text-center', styles.border, styles.bg)}>
      <div className={cn('text-2.5 font-bold uppercase tracking-[0.2em]', styles.text)}>{label}</div>
      <div className="mt-1 text-xs font-medium leading-snug text-zinc-300">{effect}</div>
    </div>
  );
};

const RealWorldSketch: React.FC = () => (
  <svg viewBox="0 0 520 260" className="h-full w-full" fill="none" aria-hidden="true">
    <line x1="56" y1="200" x2="456" y2="200" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
    {Array.from({ length: 12 }).map((_, index) => (
      <line
        key={index}
        x1={72 + index * 32}
        y1="208"
        x2={88 + index * 32}
        y2="200"
        stroke="#3f3f46"
        strokeWidth="2"
        strokeLinecap="round"
      />
    ))}

    <rect x="100" y="132" width="88" height="44" rx="5" fill="#182235" stroke="#cbd5e1" strokeWidth="3" />
    <circle cx="122" cy="186" r="15" fill="#09090b" stroke="#cbd5e1" strokeWidth="3" />
    <circle cx="166" cy="186" r="15" fill="#09090b" stroke="#cbd5e1" strokeWidth="3" />

    <rect x="272" y="120" width="144" height="56" rx="9" fill="#182235" stroke="#cbd5e1" strokeWidth="3" />
    <path d="M 296 120 L 322 82 H 382 L 406 120 Z" fill="#292d36" stroke="#cbd5e1" strokeWidth="3" strokeLinejoin="round" />
    <circle cx="306" cy="186" r="20" fill="#09090b" stroke="#cbd5e1" strokeWidth="3" />
    <circle cx="378" cy="186" r="20" fill="#09090b" stroke="#cbd5e1" strokeWidth="3" />

    <line x1="188" y1="156" x2="272" y2="156" stroke="#f59e0b" strokeWidth="5" strokeLinecap="round" />
    <path d="M 78 158 Q 60 146 78 134" stroke="#a1a1aa" strokeWidth="1.8" strokeDasharray="5 7" strokeLinecap="round" opacity="0.55" />
    <path d="M 66 146 Q 50 134 66 122" stroke="#a1a1aa" strokeWidth="1.8" strokeDasharray="5 7" strokeLinecap="round" opacity="0.35" />
    <path d="M 438 118 Q 422 106 438 94" stroke="#a1a1aa" strokeWidth="1.8" strokeDasharray="5 7" strokeLinecap="round" opacity="0.4" />
  </svg>
);

const ModelSketch: React.FC = () => (
  <svg viewBox="0 0 520 260" className="h-full w-full" fill="none" aria-hidden="true">
    <defs>
      <marker id="sandbox-model-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 1 1 L 9 5 L 1 9 Z" fill="#71717a" />
      </marker>
      <marker id="sandbox-tension-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
        <path d="M 1 1 L 9 5 L 1 9 Z" fill="#60a5fa" />
      </marker>
      <marker id="sandbox-drive-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 1 1 L 9 5 L 1 9 Z" fill="#10b981" />
      </marker>
      <marker id="sandbox-resistance-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 1 1 L 9 5 L 1 9 Z" fill="#fb7185" />
      </marker>
    </defs>

    <SupportSurface x1={86} y1={194} x2={434} y2={194} stroke="#71717a" strokeWidth={1.8} className="opacity-45" />
    <g opacity="0.65">
      <line
        x1="164"
        y1="84"
        x2="314"
        y2="84"
        stroke="#71717a"
        strokeWidth="1.8"
        strokeLinecap="round"
        markerEnd="url(#sandbox-model-arrow)"
      />
      <path d="M 294 78 L 306 84 L 294 90 Z" fill="#71717a" />
    </g>

    <Particle cx={150} cy={144} r={30} fill="#1c1c1f" stroke="#52525b" strokeWidth={3.5} />
    <Particle cx={350} cy={144} r={30} fill="#1c1c1f" stroke="#52525b" strokeWidth={3.5} />
    <line x1="180" y1="144" x2="320" y2="144" stroke="#e4e4e7" strokeWidth="3.5" strokeLinecap="round" />

    <line
      x1="120"
      y1="144"
      x2="72"
      y2="144"
      stroke="#fb7185"
      strokeWidth="2.5"
      strokeLinecap="round"
      markerEnd="url(#sandbox-resistance-arrow)"
    />

    <line
      x1="194"
      y1="144"
      x2="232"
      y2="144"
      stroke="#60a5fa"
      strokeWidth="2.4"
      strokeLinecap="round"
      markerEnd="url(#sandbox-tension-arrow)"
    />
    <line
      x1="306"
      y1="144"
      x2="268"
      y2="144"
      stroke="#60a5fa"
      strokeWidth="2.4"
      strokeLinecap="round"
      markerEnd="url(#sandbox-tension-arrow)"
    />
    <line
      x1="380"
      y1="144"
      x2="444"
      y2="144"
      stroke="#10b981"
      strokeWidth="2.8"
      strokeLinecap="round"
      markerEnd="url(#sandbox-drive-arrow)"
    />
  </svg>
);

const ModelSketchWithLabels: React.FC = () => (
  <div className="relative mx-auto aspect-2/1 w-full max-w-105 lg:max-w-97.5 xl:max-w-107.5">
    <ModelSketch />
    <div className="pointer-events-none absolute inset-0 z-10 select-none text-zinc-100">
      <div className="absolute left-[28.8%] top-[55.5%] -translate-x-1/2 -translate-y-1/2 text-3.25 font-bold">
        <MathInline content="$m_1$" />
      </div>
      <div className="absolute left-[19%] top-[50.5%] -translate-x-1/2 -translate-y-full text-[12px] font-bold text-rose-300">
        <MathInline content="$R_1$" />
      </div>
      <div className="absolute left-[67.2%] top-[55.5%] -translate-x-1/2 -translate-y-1/2 text-3.25 font-bold">
        <MathInline content="$m_2$" />
      </div>
      <div className="absolute left-[84.5%] top-[50.5%] -translate-x-1/2 -translate-y-full text-3.25 font-bold text-emerald-400">
        <MathInline content="$D$" />
      </div>
      <div className="absolute left-[63%] top-[27.5%] -translate-x-1/2 -translate-y-1/2 text-xs font-bold text-zinc-400">
        <MathInline content="$a$" />
      </div>
      <div className="absolute left-[41%] top-[47%] -translate-x-1/2 -translate-y-1/2 text-2.75 font-bold text-blue-300">
        <MathInline content="$T$" />
      </div>
      <div className="absolute left-[55%] top-[47%] -translate-x-1/2 -translate-y-1/2 text-2.75 font-bold text-blue-300">
        <MathInline content="$T$" />
      </div>
    </div>
  </div>
);

const TransformBadge: React.FC = () => (
  <div className="flex items-center justify-center gap-3 lg:flex-col">
    <div className="h-px w-16 bg-zinc-700/70 lg:h-16 lg:w-px" />
    <div className="rounded-lg border border-zinc-800/80 bg-zinc-950/70 px-4 py-3 text-center shadow-[0_12px_28px_rgba(0,0,0,0.25)]">
      <div className="text-2.5 font-bold uppercase tracking-[0.22em] text-zinc-500">Apply</div>
      <div className="mt-1 whitespace-nowrap text-sm font-semibold text-zinc-200">assumptions</div>
    </div>
    <div className="h-px w-16 bg-zinc-700/70 lg:h-16 lg:w-px" />
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
    <section className={cn('relative overflow-hidden rounded-xl border bg-zinc-950/25 p-4', styles.border)}>
      <div className={cn('pointer-events-none absolute inset-x-0 top-0 h-28 bg-linear-to-b to-transparent', styles.glow)} />
      <div className="relative z-10 mb-3 text-center">
        <div className={cn('text-lg font-bold tracking-tight', styles.text)}>{title}</div>
        <div className="mt-1 text-xs font-medium text-zinc-400">{caption}</div>
      </div>
      <div className="relative z-10 flex h-60 items-center justify-center rounded-lg border border-zinc-800/60 bg-zinc-925/80 p-2">
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
        <div className="rounded-lg border border-emerald-500/25 bg-emerald-950/20 p-4 text-center text-sm font-semibold leading-relaxed text-emerald-200 md:col-span-3">
          Exam technique: translate each modelling word into a mathematical effect before writing equations.
        </div>
      </div>
    }
  >
    <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-xl border border-zinc-800/60 bg-zinc-850 p-5 shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
      <div className="mb-5 flex flex-col gap-2 border-b border-zinc-800/70 pb-5 text-center">
        <div className="text-2.5 font-bold uppercase tracking-[0.32em] text-zinc-500">Model Reduction</div>
        <div className="font-serif text-2xl font-light tracking-wide text-zinc-100">From Real System to Equation Model</div>
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
