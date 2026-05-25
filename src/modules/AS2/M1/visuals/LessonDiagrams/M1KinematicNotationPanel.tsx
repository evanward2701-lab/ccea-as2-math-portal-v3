import React from 'react';
import { MathInline } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { cn } from '@/core/utils/cn';
import { Particle } from '@/core/diagram-engine/primitives/PhysicsPrimitives';
import { SVGLibrary } from '@/core/diagram-engine/primitives/SVGLibrary';
import { VectorArrow } from '@/core/diagram-engine/primitives/VectorArrow';

type NotationTone = 'emerald' | 'amber' | 'zinc';

interface NotationCard {
  symbol: string;
  label: string;
  unit: string;
  tone: NotationTone;
}

const notationCards: NotationCard[] = [
  { symbol: '$s$', label: 'Displacement', unit: '$\\text{m}$', tone: 'emerald' },
  { symbol: '$u$', label: 'Initial Velocity', unit: '$\\text{m s}^{-1}$', tone: 'amber' },
  { symbol: '$v$', label: 'Final Velocity', unit: '$\\text{m s}^{-1}$', tone: 'amber' },
  { symbol: '$a$', label: 'Acceleration', unit: '$\\text{m s}^{-2}$', tone: 'zinc' },
  { symbol: '$t$', label: 'Time', unit: '$\\text{s}$', tone: 'zinc' },
];

const toneClasses: Record<NotationTone, { text: string; border: string; bg: string; unit: string }> = {
  emerald: {
    text: 'text-emerald-300',
    border: 'border-emerald-500/25',
    bg: 'bg-emerald-950/12',
    unit: 'border-emerald-500/25 bg-emerald-950/15 text-emerald-300',
  },
  amber: {
    text: 'text-amber-300',
    border: 'border-amber-500/25',
    bg: 'bg-amber-950/12',
    unit: 'border-amber-500/25 bg-amber-950/15 text-amber-300',
  },
  zinc: {
    text: 'text-zinc-200',
    border: 'border-zinc-700/70',
    bg: 'bg-zinc-900/18',
    unit: 'border-zinc-700/70 bg-zinc-950/25 text-zinc-200',
  },
};

const NotationCard: React.FC<NotationCard> = ({ symbol, label, unit, tone }) => {
  const styles = toneClasses[tone];

  return (
    <div className={cn('flex min-h-36 flex-col items-center justify-center gap-3 rounded-xl border px-3 py-4 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.035),0_16px_34px_rgba(0,0,0,0.2)]', styles.border, styles.bg)}>
      <div className={cn('font-serif text-3xl font-semibold leading-none', styles.text)}>
        <MathInline content={symbol} />
      </div>
      <div className="flex min-h-10 items-center justify-center text-center text-[11px] font-black uppercase leading-tight text-zinc-500 text-balance break-words">
        {label}
      </div>
      <div className={cn('flex min-h-9 w-full items-center justify-center rounded-lg border px-3 py-1.5 font-serif text-base font-semibold shadow-inner', styles.unit)}>
        <MathInline content={unit} />
      </div>
    </div>
  );
};

export const M1KinematicNotationPanel: React.FC = () => {
  return (
    <DiagramPanel
      title="Fig 1b. Kinematic Notation & Position Vectors"
      analysis={
        <div className="mx-auto grid w-full max-w-5xl gap-4 px-2 md:grid-cols-2">
          <div className="flex items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/30 p-4 text-center text-sm leading-relaxed text-zinc-400">
            <span className="mr-1.5 font-bold text-zinc-200">Sign Convention Rule:</span>
            Choose one positive direction before assigning vector signs.
          </div>
          <div className="flex items-center justify-center rounded-xl border border-rose-500/20 bg-rose-950/10 p-4 text-center text-sm font-medium leading-relaxed text-rose-300">
            <span className="inline-flex flex-wrap items-baseline justify-center gap-1.5">
              <span className="font-bold text-rose-400">Common Trap:</span>
              <span className="inline-flex items-baseline text-base font-bold leading-none text-rose-200">
                <MathInline content="$s$" />
              </span>
              <span>is displacement, not scalar distance or speed.</span>
            </span>
          </div>
        </div>
      }
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
        <div className="relative min-h-80 w-full overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-925 shadow-2xl aspect-[16/8]">
          <SVGLibrary />
          <svg
            viewBox="0 0 800 400"
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="xMidYMid meet"
            role="img"
            aria-label="Kinematic position axis showing origin, initial position, final position, positive direction, and displacement"
          >
            <defs>
              <linearGradient id="kinematic-axis-fade" x1="70" y1="0" x2="730" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#27272a" stopOpacity="0" />
                <stop offset="0.15" stopColor="#27272a" stopOpacity="1" />
                <stop offset="0.85" stopColor="#27272a" stopOpacity="1" />
                <stop offset="1" stopColor="#27272a" stopOpacity="0" />
              </linearGradient>
            </defs>

            <rect x="42" y="42" width="716" height="300" rx="20" fill="#0f0f12" stroke="#27272a" strokeWidth="1.2" opacity="0.78" />

            {/* Positive direction layer */}
            <VectorArrow x1={524} y1={94} x2={688} y2={94} type="friction" strokeWidth={2.4} />

            {/* Displacement vector layer */}
            <line x1="360" y1="168" x2="360" y2="222" stroke="#fbbf24" strokeWidth="1.2" strokeDasharray="4 5" opacity="0.38" />
            <line x1="600" y1="168" x2="600" y2="222" stroke="#fbbf24" strokeWidth="1.2" strokeDasharray="4 5" opacity="0.38" />
            <VectorArrow x1={368} y1={168} x2={590} y2={168} type="friction" strokeWidth={2.8} />

            {/* Coordinate datum layer */}
            <line x1="90" y1="222" x2="710" y2="222" stroke="url(#kinematic-axis-fade)" strokeWidth="2.2" />
            <line x1="160" y1="192" x2="160" y2="252" stroke="#71717a" strokeWidth="2" opacity="0.82" />
            <line x1="360" y1="192" x2="360" y2="252" stroke="#52525b" strokeWidth="2" opacity="0.88" />
            <line x1="600" y1="192" x2="600" y2="252" stroke="#52525b" strokeWidth="2" opacity="0.88" />
            <Particle cx={160} cy={222} r={6} fill="#0f0f12" stroke="#e4e4e7" strokeWidth={2.6} />
            <Particle cx={360} cy={222} r={5.5} fill="#71717a" />
            <Particle cx={600} cy={222} r={5.5} fill="#71717a" />

            <rect x="418" y="112" width="138" height="40" rx="9" fill="#09090b" stroke="#27272a" strokeWidth="1.5" />
          </svg>

          <div className="absolute inset-0 z-10 pointer-events-none select-none">
            <div className="absolute left-[76%] top-[14%] -translate-x-1/2 text-center text-xs font-black uppercase leading-tight text-amber-400">
              Positive Direction
            </div>

            <div className="absolute left-[61%] top-[33%] -translate-x-1/2 text-base font-bold text-zinc-100">
              <MathInline content="$s = x - x_0$" />
            </div>

            <div className="absolute left-[20%] top-[70%] w-30 -translate-x-1/2 text-center">
              <div className="font-serif text-2xl font-semibold text-white">
                O
              </div>
              <div className="mt-1 text-[11px] font-black uppercase leading-tight text-zinc-500">Origin</div>
            </div>

            <div className="absolute left-[45%] top-[70%] w-38 -translate-x-1/2 text-center">
              <div className="font-serif text-2xl font-semibold text-zinc-100">
                <MathInline content="$x_0$" />
              </div>
              <div className="mt-1 text-[11px] font-black uppercase leading-tight text-zinc-500">Initial Position</div>
            </div>

            <div className="absolute left-[75%] top-[70%] w-38 -translate-x-1/2 text-center">
              <div className="font-serif text-2xl font-semibold text-zinc-100">
                <MathInline content="$x$" />
              </div>
              <div className="mt-1 text-[11px] font-black uppercase leading-tight text-zinc-500">Final Position</div>
            </div>
          </div>
        </div>

        <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {notationCards.map((card) => (
            <NotationCard key={card.symbol} {...card} />
          ))}
        </div>
      </div>
    </DiagramPanel>
  );
};
