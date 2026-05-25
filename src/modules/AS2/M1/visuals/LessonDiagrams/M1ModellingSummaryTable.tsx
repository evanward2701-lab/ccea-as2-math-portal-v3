import React from 'react';
import { MathInline } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { cn } from '@/core/utils/cn';
import { Particle, Pulley, SupportSurface } from '@/core/diagram-engine/PhysicsPrimitives';
import { DiagramLabel } from '@/core/diagram-engine/DiagramLabel';
import { ObjectBlock } from '@/core/diagram-engine/ObjectBlock';

type Tone = 'zinc' | 'amber' | 'emerald' | 'rose';

interface Assumption {
  word: string;
  meaning: React.ReactNode;
  effect: React.ReactNode;
  tone: Tone;
  icon: 'particle' | 'smooth' | 'rough' | 'light' | 'inextensible' | 'pulley' | 'rigid';
  formula?: string;
}

const toneStyles: Record<Tone, { title: string; border: string; bg: string; accent: string }> = {
  zinc: {
    title: 'text-zinc-300',
    border: 'border-zinc-800/70',
    bg: 'bg-zinc-950/20',
    accent: '#a1a1aa',
  },
  amber: {
    title: 'text-amber-300',
    border: 'border-amber-500/25',
    bg: 'bg-amber-950/15',
    accent: '#fbbf24',
  },
  emerald: {
    title: 'text-emerald-300',
    border: 'border-emerald-500/25',
    bg: 'bg-emerald-950/15',
    accent: '#10b981',
  },
  rose: {
    title: 'text-rose-300',
    border: 'border-rose-500/30',
    bg: 'bg-rose-950/20',
    accent: '#f43f5e',
  },
};

const assumptions: Assumption[] = [
  {
    word: 'Particle',
    meaning: 'Dimensions are negligible; mass is treated as concentrated at one point.',
    effect: 'Ignore rotation, shape, and air resistance. Forces can be drawn through one point.',
    tone: 'zinc',
    icon: 'particle',
  },
  {
    word: 'Smooth Surface',
    meaning: 'Friction is absent at the contact surface.',
    effect: (
      <>
        Omit friction. The contact force is the normal reaction <MathInline content="$R$" />.
      </>
    ),
    tone: 'amber',
    icon: 'smooth',
  },
  {
    word: 'Rough Surface',
    meaning: 'Friction is present at the contact surface.',
    effect: 'Include a friction force opposing motion or impending motion.',
    tone: 'amber',
    icon: 'rough',
    formula: '$F \\le \\mu R$',
  },
  {
    word: 'Light String',
    meaning: 'The string, cable, or connector has negligible mass.',
    effect: (
      <>
        Ignore its weight. Tension <MathInline content="$T$" /> is constant along the string.
      </>
    ),
    tone: 'emerald',
    icon: 'light',
  },
  {
    word: 'Inextensible',
    meaning: 'The string does not stretch.',
    effect: 'Connected particles share the same acceleration magnitude.',
    tone: 'emerald',
    icon: 'inextensible',
    formula: '$a_1 = a_2 = a$',
  },
  {
    word: 'Smooth Pulley',
    meaning: 'There is no friction at the pulley axle.',
    effect: 'Tension is equal on both sides of the string.',
    tone: 'emerald',
    icon: 'pulley',
    formula: '$T_1 = T_2 = T$',
  },
  {
    word: 'Rigid Rod / Towbar',
    meaning: 'The connector does not bend, buckle, compress, or stretch.',
    effect: 'It keeps a fixed separation and can transmit both tension and thrust.',
    tone: 'rose',
    icon: 'rigid',
  },
];

const AssumptionIcon: React.FC<{ icon: Assumption['icon']; accent: string }> = ({ icon, accent }) => {
  if (icon === 'particle') {
    return (
      <svg viewBox="0 0 220 88" className="h-full w-full" fill="none" aria-hidden="true">
        <rect x="48" y="22" width="124" height="44" rx="6" stroke="#27272a" strokeWidth="1.5" strokeDasharray="5 5" />
        <line x1="72" y1="44" x2="148" y2="44" stroke="#52525b" strokeWidth="1.5" />
        <Particle cx={110} cy={44} r={6} fill="#e4e4e7" />
      </svg>
    );
  }

  if (icon === 'smooth') {
    return (
      <svg viewBox="0 0 220 88" className="h-full w-full" fill="none" aria-hidden="true">
        <SupportSurface x1={42} y1={62} x2={178} y2={62} rough={false} stroke="#3f3f46" strokeWidth={2.4} />
        <rect x="88" y="28" width="44" height="34" rx="4" fill="#141417" stroke={accent} strokeWidth="1.8" />
      </svg>
    );
  }

  if (icon === 'rough') {
    return (
      <svg viewBox="0 0 220 88" className="h-full w-full" fill="none" aria-hidden="true">
        <SupportSurface x1={42} y1={62} x2={178} y2={62} rough={true} stroke="#3f3f46" strokeWidth={2.4} />
        <rect x="92" y="28" width="44" height="34" rx="4" fill="#141417" stroke="#e4e4e7" strokeWidth="1.6" />
        <line x1="92" y1="45" x2="58" y2="45" stroke={accent} strokeWidth="1.8" strokeLinecap="round" />
        <path d="M 58 45 L 66 41 L 66 49 Z" fill={accent} />
      </svg>
    );
  }

  if (icon === 'light') {
    return (
      <div className="relative h-full w-full">
        <svg viewBox="0 0 220 88" className="absolute inset-0 h-full w-full" fill="none" aria-hidden="true">
          <line x1="42" y1="44" x2="178" y2="44" stroke={accent} strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="110" cy="44" r="15" fill="#141417" stroke="#3f3f46" strokeWidth="1.5" />
        </svg>
        <DiagramLabel x="50%" y="50%" text="0\text{ kg}" className="text-[9px] font-black tracking-wide text-zinc-500" />
      </div>
    );
  }

  if (icon === 'inextensible') {
    return (
      <svg viewBox="0 0 220 88" className="h-full w-full" fill="none" aria-hidden="true">
        <line x1="60" y1="44" x2="160" y2="44" stroke="#3b82f6" strokeWidth="2.2" strokeLinecap="round" />
        <ObjectBlock x={42} y={34} width={22} height={20} />
        <ObjectBlock x={156} y={34} width={22} height={20} />
        <line x1="52" y1="20" x2="168" y2="20" stroke={accent} strokeWidth="1.4" strokeDasharray="4 4" />
      </svg>
    );
  }

  if (icon === 'pulley') {
    return (
      <svg viewBox="0 0 220 88" className="h-full w-full" fill="none" aria-hidden="true">
        <path d="M 94 74 L 94 38 A 16 16 0 0 1 126 38 L 126 74" stroke={accent} strokeWidth="2.4" strokeLinecap="round" />
        <Pulley cx={110} cy={38} r={13} showCenter={true} />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 220 88" className="h-full w-full" fill="none" aria-hidden="true">
      <line x1="68" y1="44" x2="152" y2="44" stroke={accent} strokeWidth="4" strokeLinecap="round" />
      <ObjectBlock x={42} y={34} width={26} height={20} />
      <ObjectBlock x={152} y={34} width={26} height={20} />
    </svg>
  );
};

const AssumptionCard: React.FC<Assumption> = ({ word, meaning, effect, tone, icon, formula }) => {
  const styles = toneStyles[tone];

  return (
    <article
      className={cn(
        'flex min-h-[300px] flex-col justify-between rounded-xl border p-5 shadow-sm',
        icon === 'rigid' && 'md:col-span-2 lg:col-span-3 lg:mx-auto lg:w-full lg:max-w-md',
        styles.border,
        styles.bg,
      )}
    >
      <div>
        <div className={cn('mb-3.5 text-[11px] font-bold uppercase tracking-[0.18em]', styles.title)}>{word}</div>
        <div className="mb-4 flex h-20 items-center justify-center overflow-hidden rounded-xl border border-zinc-900 bg-[#0c0c0e] shadow-inner">
          <AssumptionIcon icon={icon} accent={styles.accent} />
        </div>
        <div className="space-y-2 text-xs leading-relaxed text-zinc-400">
          <p>
            <strong className={cn('mb-0.5 block font-semibold', styles.title)}>Physical Meaning:</strong>
            {meaning}
          </p>
          <p>
            <strong className={cn('mb-0.5 block font-semibold', styles.title)}>Mathematical Effect:</strong>
            {effect}
          </p>
        </div>
      </div>
      {formula && (
        <div className={cn('mt-4 rounded-lg border border-zinc-900 bg-[#0c0c0e] py-2 text-center text-xs font-bold shadow-inner', styles.title)}>
          <MathInline content={formula} />
        </div>
      )}
    </article>
  );
};

export const M1ModellingSummaryTable: React.FC = () => (
  <DiagramPanel
    title="Fig 5. CCEA Modelling Assumptions Matrix"
    analysis={
      <div className="mx-auto w-full max-w-5xl px-4 py-1 text-center text-sm font-medium leading-relaxed text-zinc-400">
        CCEA examiners often award marks for translating modelling words into their{' '}
        <span className="font-bold text-emerald-300">mathematical effects</span> before equations are written.
      </div>
    }
  >
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
      <div className="relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-[#141417] p-6 text-center shadow-xl">
        <div className="text-[10px] font-black uppercase tracking-[0.35em] text-zinc-500">Exam Strategy Index</div>
        <div className="mt-1 text-xl font-bold tracking-tight text-zinc-100">
          Translating Modelling Words to Mathematical Effects
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {assumptions.map((assumption) => (
          <AssumptionCard key={assumption.word} {...assumption} />
        ))}
      </div>
    </div>
  </DiagramPanel>
);
