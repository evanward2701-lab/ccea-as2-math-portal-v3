import React, { useState } from 'react';
import { MathInline } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { cn } from '@/core/utils/cn';

type Force = 'weight' | 'reaction' | 'friction' | 'tension' | 'applied';
type FreeBodyScenario = 'smooth' | 'rough' | 'string' | 'applied';

const scenarioDefaults: Record<FreeBodyScenario, Record<Force, boolean>> = {
  smooth: { weight: true, reaction: true, friction: false, tension: false, applied: false },
  rough: { weight: true, reaction: true, friction: true, tension: false, applied: false },
  string: { weight: true, reaction: true, friction: false, tension: true, applied: false },
  applied: { weight: true, reaction: true, friction: false, tension: false, applied: true },
};

const scenarioLabels: Record<FreeBodyScenario, string> = {
  smooth: 'Smooth table',
  rough: 'Rough table',
  string: 'Pulled by string',
  applied: 'Applied force',
};

const forceLabels: Record<Force, string> = {
  weight: 'Weight',
  reaction: 'Reaction',
  friction: 'Friction',
  tension: 'Tension',
  applied: 'Applied force',
};

const forceDetails: Record<Force, { label: string; symbol: string; tone: string; dot: string }> = {
  weight: { label: 'Weight', symbol: 'W = mg', tone: 'text-rose-300 border-rose-500/20 bg-rose-950/10', dot: 'bg-rose-400' },
  reaction: { label: 'Reaction', symbol: 'R', tone: 'text-emerald-300 border-emerald-500/20 bg-emerald-950/10', dot: 'bg-emerald-400' },
  friction: { label: 'Friction', symbol: 'F', tone: 'text-amber-300 border-amber-500/20 bg-amber-950/10', dot: 'bg-amber-400' },
  tension: { label: 'Tension', symbol: 'T', tone: 'text-blue-300 border-blue-500/20 bg-blue-950/10', dot: 'bg-blue-400' },
  applied: { label: 'Applied', symbol: 'P', tone: 'text-zinc-300 border-zinc-700/70 bg-zinc-900/20', dot: 'bg-zinc-300' },
};

const scenarioOrder = Object.keys(scenarioLabels) as FreeBodyScenario[];
const forceOrder = Object.keys(forceLabels) as Force[];

const ForceStatusChip: React.FC<{ force: Force; active: boolean; disabled?: boolean }> = ({ force, active, disabled }) => {
  const detail = forceDetails[force];

  return (
    <div
      className={cn(
        'flex min-h-10 items-center justify-between gap-3 rounded-lg border px-3 py-2 text-[11px] font-bold transition-colors',
        active ? detail.tone : 'border-zinc-800 bg-[#0c0c0e]/60 text-zinc-600',
        disabled && 'opacity-45'
      )}
    >
      <span className="flex items-center gap-2">
        <span className={cn('size-2 rounded-full', active ? detail.dot : 'bg-zinc-700')} />
        {detail.label}
      </span>
      <span className="whitespace-nowrap font-serif text-xs">{detail.symbol}</span>
    </div>
  );
};

export const M1FreeBodyDiagram: React.FC = () => {
  const [scenario, setScenario] = useState<FreeBodyScenario>('smooth');
  const [forces, setForces] = useState<Record<Force, boolean>>(scenarioDefaults.smooth);

  const selectScenario = (nextScenario: FreeBodyScenario) => {
    setScenario(nextScenario);
    setForces(scenarioDefaults[nextScenario]);
  };

  const toggleForce = (force: Force) => {
    if (scenario === 'smooth' && force === 'friction') return;
    setForces(prev => ({ ...prev, [force]: !prev[force] }));
  };

  const showMotionGuide = forces.friction || forces.tension || forces.applied;

  return (
    <DiagramPanel
      title="Fig. Interactive Free-Body Diagram"
      analysis={
        <div className="mx-auto w-full max-w-5xl space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-4 text-sm leading-relaxed text-zinc-400">
              <strong className="font-bold text-zinc-100">Smooth surface</strong> means no friction.
            </div>
            <div className="rounded-xl border border-amber-500/20 bg-amber-950/10 p-4 text-sm leading-relaxed text-zinc-400">
              <strong className="font-bold text-amber-400">Rough surface</strong> means friction opposes motion.
            </div>
            <div className="rounded-xl border border-rose-500/20 bg-rose-950/10 p-4 text-sm leading-relaxed text-zinc-400">
              <strong className="font-bold text-rose-400">Object only:</strong> include forces acting on this object, not forces it exerts.
            </div>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-4 text-sm leading-relaxed text-zinc-400">
            <span className="font-bold text-zinc-100">A free-body diagram</span> shows only external forces acting on the selected object. Weight{' '}
            <MathInline content="$mg$" className="text-rose-400" /> acts vertically downwards; reaction{' '}
            <MathInline content="$R$" className="text-emerald-400" /> is perpendicular to the surface.
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-4 text-sm leading-relaxed text-zinc-400">
            Tension <MathInline content="$T$" className="text-blue-400" /> appears if a string, towbar, or cable pulls on the object. Applied force{' '}
            <MathInline content="$P$" className="text-zinc-200" /> appears only when a direct force is given.
          </div>
        </div>
      }
    >
      <div className="mx-auto w-full max-w-5xl rounded-2xl border border-zinc-800/80 bg-[#141417] p-5 shadow-2xl">
        <div className="grid w-full gap-5 xl:grid-cols-[280px_1fr]">
          <aside className="rounded-xl border border-zinc-800/70 bg-[#0f0f12]/90 p-4 shadow-xl">
            <div>
              <h4 className="mb-3 text-[10px] font-black uppercase tracking-[0.25em] text-zinc-500">Preset scenario</h4>
              <div className="grid grid-cols-2 gap-2 xl:grid-cols-1">
                {scenarioOrder.map(option => (
                  <button
                    key={option}
                    type="button"
                    aria-pressed={scenario === option}
                    onClick={() => selectScenario(option)}
                    className={cn(
                      'rounded-lg border px-3 py-2.5 text-left text-xs font-bold transition-all duration-200',
                      scenario === option
                        ? 'border-zinc-500 bg-zinc-800 text-zinc-100 shadow-sm'
                        : 'border-zinc-800 bg-[#111113] text-zinc-500 hover:border-zinc-700 hover:bg-zinc-900 hover:text-zinc-300'
                    )}
                  >
                    {scenarioLabels[option]}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h4 className="mb-3 text-[10px] font-black uppercase tracking-[0.25em] text-zinc-500">Forces on object</h4>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-1">
                {forceOrder.map(force => {
                  const disabled = scenario === 'smooth' && force === 'friction';

                  return (
                    <label
                      key={force}
                      className={cn(
                        'flex items-center justify-between gap-3 rounded-lg border px-3 py-2.5 text-xs font-semibold transition-all duration-200',
                        disabled
                          ? 'cursor-not-allowed border-zinc-900/60 bg-[#111113]/35 text-zinc-600'
                          : 'cursor-pointer border-zinc-800 bg-[#111113] text-zinc-300 hover:border-zinc-700 hover:bg-zinc-900'
                      )}
                    >
                      <span>{forceLabels[force]}</span>
                      <input
                        type="checkbox"
                        checked={forces[force]}
                        disabled={disabled}
                        onChange={() => toggleForce(force)}
                        className="size-4 rounded border-zinc-700 bg-zinc-900 accent-zinc-300 disabled:opacity-30"
                      />
                    </label>
                  );
                })}
              </div>
            </div>
          </aside>

          <section className="flex min-w-0 flex-col gap-3 rounded-xl border border-zinc-800/70 bg-[#0c0c0e]/70 p-3 shadow-xl">
            <div className="relative aspect-[16/10] min-h-[320px] overflow-hidden rounded-xl border border-zinc-800/60 bg-[#141417] shadow-inner">
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 800 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                shapeRendering="geometricPrecision"
                role="img"
                aria-label="Interactive free body diagram showing selected forces on a block"
              >
                <defs>
                  <marker id="fbd-arrow-rose" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                    <path d="M 2 2 L 10 5 L 2 8 Z" fill="#fb7185" />
                  </marker>
                  <marker id="fbd-arrow-emerald" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                    <path d="M 2 2 L 10 5 L 2 8 Z" fill="#34d399" />
                  </marker>
                  <marker id="fbd-arrow-amber" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                    <path d="M 2 2 L 10 5 L 2 8 Z" fill="#fbbf24" />
                  </marker>
                  <marker id="fbd-arrow-blue" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                    <path d="M 2 2 L 10 5 L 2 8 Z" fill="#60a5fa" />
                  </marker>
                  <marker id="fbd-arrow-zinc" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                    <path d="M 2 2 L 10 5 L 2 8 Z" fill="#e4e4e7" />
                  </marker>
                </defs>

                <text x="72" y="78" fill="#8b8794" className="text-[13px] font-black uppercase tracking-[0.28em]" style={{ fontFamily: 'serif' }}>
                  block on table
                </text>
                <text x="72" y="100" fill="#8b8794" className="text-[13px] font-black uppercase tracking-[0.28em]" style={{ fontFamily: 'serif' }}>
                  external forces only
                </text>

                <line x1="90" y1="320" x2="710" y2="320" stroke="#52525b" strokeWidth="3" strokeLinecap="round" />
                <g className={cn('transition-opacity duration-300', scenario === 'rough' ? 'opacity-80' : 'opacity-0')}>
                  {Array.from({ length: 22 }).map((_, index) => (
                    <line key={index} x1={105 + index * 27} y1="334" x2={118 + index * 27} y2="320" stroke="#3f3f46" strokeWidth="1.4" />
                  ))}
                </g>

                <rect x="310" y="190" width="180" height="130" rx="9" fill="#1c1c1f" stroke="#52525b" strokeWidth="2.4" />
                <text x="400" y="256" fill="#71717a" textAnchor="middle" dominantBaseline="middle" className="text-[11px] font-black uppercase tracking-widest" style={{ fontFamily: 'sans-serif' }}>
                  object
                </text>

                <g className={cn('transition-opacity duration-300', showMotionGuide ? 'opacity-45' : 'opacity-0')}>
                  <line x1="210" y1="48" x2="610" y2="48" stroke="#a1a1aa" strokeWidth="1.6" strokeDasharray="7 7" markerEnd="url(#fbd-arrow-zinc)" />
                  <text x="410" y="32" fill="#a1a1aa" textAnchor="middle" dominantBaseline="middle" className="text-[10px] font-bold uppercase tracking-widest" style={{ fontFamily: 'sans-serif' }}>
                    intended motion
                  </text>
                </g>

                <g className={cn('transition-opacity duration-300', forces.reaction ? 'opacity-100' : 'opacity-0')}>
                  <line x1="400" y1="190" x2="400" y2="70" stroke="#34d399" strokeWidth="4" markerEnd="url(#fbd-arrow-emerald)" />
                  <text x="426" y="90" fill="#34d399" textAnchor="start" dominantBaseline="middle" className="text-[26px] font-black" style={{ fontFamily: 'serif' }}>
                    R
                  </text>
                  <text x="452" y="90" fill="#a7f3d0" textAnchor="start" dominantBaseline="middle" className="text-[12px] font-semibold" style={{ fontFamily: 'sans-serif' }}>
                    perpendicular
                  </text>
                </g>

                <g className={cn('transition-opacity duration-300', forces.weight ? 'opacity-100' : 'opacity-0')}>
                  <line x1="400" y1="320" x2="400" y2="430" stroke="#fb7185" strokeWidth="4" markerEnd="url(#fbd-arrow-rose)" />
                  <text x="424" y="405" fill="#fb7185" textAnchor="start" dominantBaseline="middle" className="text-[22px] font-black" style={{ fontFamily: 'serif' }}>
                    W = mg
                  </text>
                </g>

                <g className={cn('transition-opacity duration-300', forces.friction ? 'opacity-100' : 'opacity-0')}>
                  <line x1="310" y1="320" x2="150" y2="320" stroke="#fbbf24" strokeWidth="4" markerEnd="url(#fbd-arrow-amber)" />
                  <text x="188" y="296" fill="#fbbf24" textAnchor="middle" dominantBaseline="middle" className="text-[24px] font-black" style={{ fontFamily: 'serif' }}>
                    F
                  </text>
                  <text x="220" y="342" fill="#fcd34d" textAnchor="middle" dominantBaseline="middle" className="text-[11px] font-semibold" style={{ fontFamily: 'sans-serif' }}>
                    opposes motion
                  </text>
                </g>

                <g className={cn('transition-opacity duration-300', forces.tension ? 'opacity-100' : 'opacity-0')}>
                  <line x1="490" y1="255" x2="670" y2="255" stroke="#60a5fa" strokeWidth="4" markerEnd="url(#fbd-arrow-blue)" />
                  <text x="635" y="230" fill="#60a5fa" textAnchor="middle" dominantBaseline="middle" className="text-[24px] font-black" style={{ fontFamily: 'serif' }}>
                    T
                  </text>
                  <text x="635" y="282" fill="#93c5fd" textAnchor="middle" dominantBaseline="middle" className="text-[11px] font-semibold" style={{ fontFamily: 'sans-serif' }}>
                    string pulls
                  </text>
                </g>

                <g className={cn('transition-opacity duration-300', forces.applied ? 'opacity-100' : 'opacity-0')}>
                  <line x1="490" y1="190" x2="650" y2="90" stroke="#e4e4e7" strokeWidth="4" markerEnd="url(#fbd-arrow-zinc)" />
                  <text x="655" y="84" fill="#e4e4e7" textAnchor="start" dominantBaseline="middle" className="text-[24px] font-black" style={{ fontFamily: 'serif' }}>
                    P
                  </text>
                  <text x="616" y="124" fill="#d4d4d8" textAnchor="start" dominantBaseline="middle" className="text-[11px] font-semibold" style={{ fontFamily: 'sans-serif' }}>
                    direct push/pull
                  </text>
                </g>
              </svg>
            </div>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
              {forceOrder.map(force => (
                <ForceStatusChip
                  key={force}
                  force={force}
                  active={forces[force]}
                  disabled={scenario === 'smooth' && force === 'friction'}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </DiagramPanel>
  );
};
