import React from 'react';
import { MathInline } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { cn } from '@/core/utils/cn';

type Tone = 'neutral' | 'amber' | 'emerald' | 'rose';

interface Assumption {
  title: string;
  tone: Tone;
  meaning: string;
  effect: string;
  formula?: string;
  Icon: React.FC<{ accent: string }>;
}

const toneStyles: Record<
  Tone,
  {
    accent: string;
    title: string;
    border: string;
    glow: string;
    formula: string;
  }
> = {
  neutral: {
    accent: '#a1a1aa',
    title: 'text-zinc-300',
    border: 'border-zinc-800/70',
    glow: 'from-zinc-500/10',
    formula: 'border-zinc-700/70 bg-zinc-950/60 text-zinc-200',
  },
  amber: {
    accent: '#f59e0b',
    title: 'text-amber-300',
    border: 'border-amber-500/25',
    glow: 'from-amber-500/15',
    formula: 'border-amber-500/30 bg-amber-950/25 text-amber-200',
  },
  emerald: {
    accent: '#10b981',
    title: 'text-emerald-300',
    border: 'border-emerald-500/25',
    glow: 'from-emerald-500/15',
    formula: 'border-emerald-500/30 bg-emerald-950/25 text-emerald-200',
  },
  rose: {
    accent: '#fb7185',
    title: 'text-rose-300',
    border: 'border-rose-500/25',
    glow: 'from-rose-500/15',
    formula: 'border-rose-500/30 bg-rose-950/25 text-rose-200',
  },
};

const ParticleIcon: Assumption['Icon'] = ({ accent }) => (
  <svg viewBox="0 0 180 96" className="h-full w-full" fill="none" aria-hidden="true">
    <rect x="43" y="27" width="94" height="42" rx="7" stroke="#3f3f46" strokeWidth="1.4" strokeDasharray="5 5" />
    <line x1="22" y1="48" x2="76" y2="48" stroke="#52525b" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="104" y1="48" x2="158" y2="48" stroke="#52525b" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="90" cy="48" r="7" fill={accent} />
    <circle cx="90" cy="48" r="16" stroke={accent} strokeOpacity="0.16" />
  </svg>
);

const SmoothSurfaceIcon: Assumption['Icon'] = ({ accent }) => (
  <svg viewBox="0 0 180 96" className="h-full w-full" fill="none" aria-hidden="true">
    <line x1="32" y1="66" x2="148" y2="66" stroke={accent} strokeWidth="2" strokeLinecap="round" />
    <rect x="70" y="34" width="40" height="32" rx="5" fill="#1c1c1f" stroke="#e4e4e7" strokeWidth="1.8" />
    <path d="M 50 76 H 130" stroke="#3f3f46" strokeWidth="1.5" strokeDasharray="5 7" strokeLinecap="round" />
  </svg>
);

const RoughSurfaceIcon: Assumption['Icon'] = ({ accent }) => (
  <svg viewBox="0 0 180 96" className="h-full w-full" fill="none" aria-hidden="true">
    <line x1="32" y1="68" x2="148" y2="68" stroke="#52525b" strokeWidth="2" strokeLinecap="round" />
    {Array.from({ length: 9 }).map((_, index) => (
      <line
        key={index}
        x1={42 + index * 12}
        y1="68"
        x2={34 + index * 12}
        y2="78"
        stroke="#3f3f46"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    ))}
    <rect x="72" y="36" width="40" height="32" rx="5" fill="#1c1c1f" stroke="#e4e4e7" strokeWidth="1.8" />
    <line x1="72" y1="52" x2="36" y2="52" stroke={accent} strokeWidth="2.4" strokeLinecap="round" />
    <path d="M 41 46 L 34 52 L 41 58" stroke={accent} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LightConnectorIcon: Assumption['Icon'] = ({ accent }) => (
  <svg viewBox="0 0 180 96" className="h-full w-full" fill="none" aria-hidden="true">
    <line x1="34" y1="48" x2="146" y2="48" stroke="#e4e4e7" strokeWidth="2" strokeLinecap="round" />
    <circle cx="90" cy="48" r="18" fill="#1c1c1f" stroke={accent} strokeWidth="1.7" />
    <text x="90" y="52" textAnchor="middle" className="fill-zinc-400 text-[10px] font-bold tracking-[0.18em]">
      0 kg
    </text>
  </svg>
);

const InextensibleIcon: Assumption['Icon'] = ({ accent }) => (
  <svg viewBox="0 0 180 96" className="h-full w-full" fill="none" aria-hidden="true">
    <rect x="39" y="42" width="26" height="22" rx="4" fill="#1c1c1f" stroke="#64748b" strokeWidth="1.6" />
    <rect x="115" y="42" width="26" height="22" rx="4" fill="#1c1c1f" stroke="#64748b" strokeWidth="1.6" />
    <line x1="65" y1="53" x2="115" y2="53" stroke={accent} strokeWidth="2.4" strokeLinecap="round" />
    <path d="M 43 28 H 137" stroke={accent} strokeWidth="1.7" strokeDasharray="6 6" strokeLinecap="round" />
  </svg>
);

const SmoothPulleyIcon: Assumption['Icon'] = ({ accent }) => (
  <svg viewBox="0 0 180 96" className="h-full w-full" fill="none" aria-hidden="true">
    <path d="M 67 83 L 67 44 A 23 23 0 0 1 113 44 L 113 83" stroke={accent} strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="90" cy="44" r="19" fill="#1c1c1f" stroke="#52525b" strokeWidth="1.8" />
    <circle cx="90" cy="44" r="3.5" fill={accent} />
  </svg>
);

const RigidRodIcon: Assumption['Icon'] = ({ accent }) => (
  <svg viewBox="0 0 180 96" className="h-full w-full" fill="none" aria-hidden="true">
    <rect x="35" y="41" width="28" height="24" rx="4" fill="#1c1c1f" stroke="#64748b" strokeWidth="1.6" />
    <rect x="117" y="41" width="28" height="24" rx="4" fill="#1c1c1f" stroke="#64748b" strokeWidth="1.6" />
    <line x1="63" y1="53" x2="117" y2="53" stroke={accent} strokeWidth="4" strokeLinecap="round" />
    <path d="M 71 72 H 109" stroke={accent} strokeOpacity="0.55" strokeWidth="1.6" strokeDasharray="5 5" />
  </svg>
);

const ExamTrapIcon: Assumption['Icon'] = ({ accent }) => (
  <svg viewBox="0 0 180 96" className="h-full w-full" fill="none" aria-hidden="true">
    <path d="M 90 22 L 136 74 H 44 L 90 22 Z" fill="#1c1c1f" stroke={accent} strokeWidth="1.8" />
    <line x1="90" y1="40" x2="90" y2="58" stroke={accent} strokeWidth="3" strokeLinecap="round" />
    <circle cx="90" cy="66" r="2.8" fill={accent} />
  </svg>
);

const assumptions: Assumption[] = [
  {
    title: 'Particle',
    tone: 'neutral',
    meaning: 'Dimensions are negligible; mass is treated at one point.',
    effect: 'Ignore rotation, shape, and where forces act on the body.',
    Icon: ParticleIcon,
  },
  {
    title: 'Smooth Surface',
    tone: 'neutral',
    meaning: 'There is no friction at the contact surface.',
    effect: 'Omit the friction force from the force diagram.',
    Icon: SmoothSurfaceIcon,
  },
  {
    title: 'Rough Surface',
    tone: 'amber',
    meaning: 'Friction is present at the contact surface.',
    effect: 'Friction opposes motion or impending motion.',
    formula: '$F \\leq \\mu R$',
    Icon: RoughSurfaceIcon,
  },
  {
    title: 'Light Connector',
    tone: 'neutral',
    meaning: 'The string, towbar, or pulley has negligible mass.',
    effect: 'Do not include its weight or a separate mass term.',
    Icon: LightConnectorIcon,
  },
  {
    title: 'Inextensible String',
    tone: 'emerald',
    meaning: 'The string does not stretch.',
    effect: 'Connected particles share the same acceleration magnitude.',
    formula: '$a_1 = a_2$',
    Icon: InextensibleIcon,
  },
  {
    title: 'Smooth Pulley',
    tone: 'emerald',
    meaning: 'There is no friction at the pulley.',
    effect: 'Tension is the same on both sides of the string.',
    formula: '$T_1 = T_2$',
    Icon: SmoothPulleyIcon,
  },
  {
    title: 'Rigid Rod / Towbar',
    tone: 'rose',
    meaning: 'The connector does not bend or buckle.',
    effect: 'It keeps a fixed distance between connected bodies.',
    Icon: RigidRodIcon,
  },
  {
    title: 'Exam Trap',
    tone: 'rose',
    meaning: 'Modelling words are instructions, not decoration.',
    effect: 'Translate each word before writing the equation.',
    Icon: ExamTrapIcon,
  },
];

const AssumptionCard: React.FC<Assumption> = ({ title, tone, meaning, effect, formula, Icon }) => {
  const styles = toneStyles[tone];

  return (
    <article
      className={cn(
        'group relative flex min-h-[330px] flex-col overflow-hidden rounded-lg border bg-zinc-950/30 p-4',
        'shadow-[0_16px_36px_rgba(0,0,0,0.18)] transition-colors duration-300',
        styles.border
      )}
    >
      <div className={cn('pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b to-transparent opacity-70', styles.glow)} />

      <div className="relative z-10 flex h-full flex-col">
        <div className={cn('mb-3 text-[11px] font-bold uppercase tracking-[0.22em]', styles.title)}>
          {title}
        </div>

        <div className="mb-4 flex h-24 items-center justify-center rounded-md border border-zinc-800/70 bg-[#141416]/80">
          <Icon accent={styles.accent} />
        </div>

        <div className="space-y-3 text-[13px] leading-relaxed text-zinc-300">
          <p>
            <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-500">Meaning</span>
            {meaning}
          </p>
          <p>
            <span className={cn('block text-[10px] font-bold uppercase tracking-[0.18em]', styles.title)}>Effect</span>
            {effect}
          </p>
        </div>

        <div className="mt-auto pt-4">
          {formula ? (
            <div className={cn('rounded-md border px-3 py-2 text-center text-sm font-semibold', styles.formula)}>
              <MathInline content={formula} />
            </div>
          ) : (
            <div className="h-[38px]" aria-hidden="true" />
          )}
        </div>
      </div>
    </article>
  );
};

export const ModellingAssumptionsSVG: React.FC = () => (
  <DiagramPanel
    title="Fig 3. Common Modelling Assumptions"
    analysis={
      <div className="mx-auto w-full max-w-3xl px-4 text-center text-base leading-relaxed text-zinc-300">
        Modelling words turn real mechanics into force-diagram rules and mathematical consequences.
      </div>
    }
  >
    <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-xl border border-zinc-800/60 bg-[#1c1c1f] p-5 shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
      <div className="mb-5 flex flex-col gap-2 border-b border-zinc-800/70 pb-5 text-center">
        <div className="text-[10px] font-bold uppercase tracking-[0.32em] text-zinc-500">Model Language</div>
        <div className="font-serif text-2xl font-light tracking-wide text-zinc-100">Assumptions as Equation Rules</div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {assumptions.map((assumption) => (
          <AssumptionCard key={assumption.title} {...assumption} />
        ))}
      </div>
    </div>
  </DiagramPanel>
);
