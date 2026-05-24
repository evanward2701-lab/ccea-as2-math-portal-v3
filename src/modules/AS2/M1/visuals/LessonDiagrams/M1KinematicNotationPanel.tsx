import React from 'react';
import { MathInline } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { cn } from '@/core/utils/cn';

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

const toneClasses: Record<NotationTone, string> = {
  emerald: 'text-emerald-400 border-emerald-500/20 bg-emerald-950/10',
  amber: 'text-amber-400 border-amber-500/20 bg-amber-950/10',
  zinc: 'text-zinc-300 border-zinc-700/60 bg-zinc-900/10',
};

const NotationCard: React.FC<NotationCard> = ({ symbol, label, unit, tone }) => (
  <div className="flex h-[148px] flex-col items-center justify-between rounded-xl border border-zinc-800/80 bg-[#141417]/45 p-4 text-center shadow-sm">
    <div className="flex flex-col items-center">
      <div className={cn('text-2xl font-black leading-none', toneClasses[tone])}>
        <MathInline content={symbol} />
      </div>
      <div className="mt-4 text-[10px] font-black uppercase tracking-[0.22em] text-zinc-500">
        {label}
      </div>
    </div>
    <div className={cn('w-full rounded-lg border px-3 py-2 text-sm font-bold shadow-inner', toneClasses[tone])}>
      <MathInline content={unit} />
    </div>
  </div>
);

export const M1KinematicNotationPanel: React.FC = () => {
  return (
    <DiagramPanel
      title="Fig 1b. Kinematic Notation & Position Vectors"
      analysis={
        <div className="mx-auto grid w-full max-w-5xl gap-4 px-2 md:grid-cols-2">
          <div className="flex items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/30 p-4 text-center text-xs leading-relaxed text-zinc-400">
            <span className="mr-1.5 font-bold text-zinc-200">Sign Convention Rule:</span>
            Choose one positive direction before assigning vector signs.
          </div>
          <div className="flex items-center justify-center rounded-xl border border-rose-500/20 bg-rose-950/10 p-4 text-center text-xs font-medium leading-relaxed text-rose-300">
            <span className="inline-flex items-baseline justify-center gap-1.5 md:whitespace-nowrap">
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
        <div className="relative w-full overflow-hidden rounded-2xl border border-zinc-800/80 bg-[#141417] shadow-2xl aspect-[80/36] min-h-[260px]">
          <svg
            viewBox="0 0 800 360"
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="xMidYMid meet"
            role="img"
            aria-label="Kinematic position axis showing origin, initial position, final position, positive direction, and displacement"
          >
            <defs>
              <marker id="kinematic-arrow-amber" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 2 2 L 10 5 L 2 8 Z" fill="#fbbf24" />
              </marker>
              <linearGradient id="kinematic-axis-fade" x1="70" y1="0" x2="730" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#27272a" stopOpacity="0" />
                <stop offset="0.15" stopColor="#27272a" stopOpacity="1" />
                <stop offset="0.85" stopColor="#27272a" stopOpacity="1" />
                <stop offset="1" stopColor="#27272a" stopOpacity="0" />
              </linearGradient>
            </defs>

            <rect x="34" y="34" width="732" height="292" rx="18" fill="#0f0f12" stroke="#27272a" strokeWidth="1.2" opacity="0.72" />

            {/* Positive direction layer */}
            <line x1="535" y1="78" x2="684" y2="78" stroke="#fbbf24" strokeWidth="2.2" markerEnd="url(#kinematic-arrow-amber)" />

            {/* Displacement vector layer */}
            <line x1="360" y1="146" x2="360" y2="192" stroke="#fbbf24" strokeWidth="1.2" strokeDasharray="4 5" opacity="0.38" />
            <line x1="600" y1="146" x2="600" y2="192" stroke="#fbbf24" strokeWidth="1.2" strokeDasharray="4 5" opacity="0.38" />
            <line x1="368" y1="146" x2="590" y2="146" stroke="#fbbf24" strokeWidth="2.6" markerEnd="url(#kinematic-arrow-amber)" />

            {/* Coordinate datum layer */}
            <line x1="80" y1="198" x2="720" y2="198" stroke="url(#kinematic-axis-fade)" strokeWidth="2.2" />
            <line x1="160" y1="168" x2="160" y2="228" stroke="#71717a" strokeWidth="2" opacity="0.82" />
            <line x1="360" y1="168" x2="360" y2="228" stroke="#52525b" strokeWidth="2" opacity="0.88" />
            <line x1="600" y1="168" x2="600" y2="228" stroke="#52525b" strokeWidth="2" opacity="0.88" />
            <circle cx="160" cy="198" r="6" fill="#0f0f12" stroke="#e4e4e7" strokeWidth="2.6" />
            <circle cx="360" cy="198" r="5.5" fill="#71717a" />
            <circle cx="600" cy="198" r="5.5" fill="#71717a" />

            <rect x="421" y="105" width="132" height="38" rx="8" fill="#09090b" stroke="#27272a" strokeWidth="1.5" />
          </svg>

          <div className="absolute inset-0 z-10 pointer-events-none select-none">
            <div className="absolute left-[74.5%] top-[14%] -translate-x-1/2 text-[10px] font-black uppercase tracking-[0.25em] text-amber-400">
              Positive Direction
            </div>

            <div className="absolute left-[61%] top-[32%] -translate-x-1/2 text-sm font-bold text-zinc-100">
              <MathInline content="$s = x - x_0$" />
            </div>

            <div className="absolute left-[20%] top-[69%] -translate-x-1/2 text-center">
              <div className="text-lg font-black text-white">
                O
              </div>
              <div className="mt-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">Origin</div>
            </div>

            <div className="absolute left-[45%] top-[69%] -translate-x-1/2 text-center">
              <div className="text-lg font-black text-zinc-100">
                <MathInline content="$x_0$" />
              </div>
              <div className="mt-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">Initial Position</div>
            </div>

            <div className="absolute left-[75%] top-[69%] -translate-x-1/2 text-center">
              <div className="text-lg font-black text-zinc-100">
                <MathInline content="$x$" />
              </div>
              <div className="mt-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">Final Position</div>
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
