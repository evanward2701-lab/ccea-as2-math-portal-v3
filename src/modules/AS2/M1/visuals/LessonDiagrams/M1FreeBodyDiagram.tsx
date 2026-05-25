import React, { useState } from 'react';
import { MathInline } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { cn } from '@/core/utils/cn';
import { SupportSurface } from '@/core/diagram-engine/primitives/PhysicsPrimitives';
import { DiagramLabel } from '@/core/diagram-engine/primitives/DiagramLabel';
import { ObjectBlock } from '@/core/diagram-engine/primitives/ObjectBlock';
import { VectorArrow } from '@/core/diagram-engine/primitives/VectorArrow';

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
        'flex min-h-10 items-center justify-between gap-3 rounded-lg border px-3 py-2 text-2.75 font-bold transition-colors',
        active ? detail.tone : 'border-zinc-800 bg-zinc-940/60 text-zinc-600',
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
      <div className="mx-auto w-full max-w-5xl rounded-2xl border border-zinc-800/80 bg-zinc-925 p-5 shadow-2xl">
        <div className="grid w-full gap-5 xl:grid-cols-[280px_1fr]">
          <aside className="rounded-xl border border-zinc-800/70 bg-zinc-930/90 p-4 shadow-xl">
            <div>
              <h4 className="mb-3 text-2.5 font-black uppercase tracking-[0.25em] text-zinc-500">Preset scenario</h4>
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
                        : 'border-zinc-800 bg-zinc-940 text-zinc-500 hover:border-zinc-700 hover:bg-zinc-900 hover:text-zinc-300'
                    )}
                  >
                    {scenarioLabels[option]}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h4 className="mb-3 text-2.5 font-black uppercase tracking-[0.25em] text-zinc-500">Forces on object</h4>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-1">
                {forceOrder.map(force => {
                  const disabled = scenario === 'smooth' && force === 'friction';

                  return (
                    <label
                      key={force}
                      className={cn(
                        'flex items-center justify-between gap-3 rounded-lg border px-3 py-2.5 text-xs font-semibold transition-all duration-200',
                        disabled
                          ? 'cursor-not-allowed border-zinc-900/60 bg-zinc-940/35 text-zinc-600'
                          : 'cursor-pointer border-zinc-800 bg-zinc-940 text-zinc-300 hover:border-zinc-700 hover:bg-zinc-900'
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

          <section className="flex min-w-0 flex-col gap-3 rounded-xl border border-zinc-800/70 bg-zinc-940/70 p-3 shadow-xl">
            <div className="relative aspect-16/10 min-h-80 overflow-hidden rounded-xl border border-zinc-800/60 bg-zinc-925 shadow-inner">
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

                <SupportSurface x1={90} y1={320} x2={710} y2={320} stroke="#52525b" strokeWidth={3} rough={scenario === 'rough'} className={cn('transition-all duration-300')} />

                <ObjectBlock x={310} y={190} width={180} height={130} />

                <g className={cn('transition-opacity duration-300', showMotionGuide ? 'opacity-45' : 'opacity-0')}>
                  <VectorArrow x1={210} y1={48} x2={610} y2={48} type="applied" dashed marker="default" />
                </g>

                <g className={cn('transition-opacity duration-300', forces.reaction ? 'opacity-100' : 'opacity-0')}>
                  <VectorArrow x1={400} y1={190} x2={400} y2={70} type="reaction" />
                </g>

                <g className={cn('transition-opacity duration-300', forces.weight ? 'opacity-100' : 'opacity-0')}>
                  <VectorArrow x1={400} y1={320} x2={400} y2={430} type="weight" />
                </g>

                <g className={cn('transition-opacity duration-300', forces.friction ? 'opacity-100' : 'opacity-0')}>
                  <VectorArrow x1={310} y1={320} x2={150} y2={320} type="friction" />
                </g>

                <g className={cn('transition-opacity duration-300', forces.tension ? 'opacity-100' : 'opacity-0')}>
                  <VectorArrow x1={490} y1={255} x2={670} y2={255} type="tension" />
                </g>

                <g className={cn('transition-opacity duration-300', forces.applied ? 'opacity-100' : 'opacity-0')}>
                  <VectorArrow x1={490} y1={190} x2={650} y2={90} type="applied" />
                </g>
              </svg>

              <DiagramLabel x={72} y={78} anchor="start" className="text-3.25 font-black uppercase tracking-[0.28em] font-serif text-[#8b8794]">block on table</DiagramLabel>
              <DiagramLabel x={72} y={100} anchor="start" className="text-3.25 font-black uppercase tracking-[0.28em] font-serif text-[#8b8794]">external forces only</DiagramLabel>
              <DiagramLabel x="50%" y={256} className="text-2.75 font-black uppercase tracking-widest font-sans text-zinc-500">object</DiagramLabel>

              <div className={cn('transition-opacity duration-300', showMotionGuide ? 'opacity-100' : 'opacity-0')}>
                <DiagramLabel x="51.25%" y={32} className="text-2.5 font-bold uppercase tracking-widest font-sans text-zinc-400">intended motion</DiagramLabel>
              </div>

              <div className={cn('transition-opacity duration-300', forces.reaction ? 'opacity-100' : 'opacity-0')}>
                <DiagramLabel x={426} y={90} anchor="start" className="text-6.5 font-black font-serif text-emerald-400">R</DiagramLabel>
                <DiagramLabel x={452} y={90} anchor="start" className="text-[12px] font-semibold font-sans text-emerald-200">perpendicular</DiagramLabel>
              </div>

              <div className={cn('transition-opacity duration-300', forces.weight ? 'opacity-100' : 'opacity-0')}>
                <DiagramLabel x={424} y={405} anchor="start" className="text-[22px] font-black font-serif text-rose-400">W = mg</DiagramLabel>
              </div>

              <div className={cn('transition-opacity duration-300', forces.friction ? 'opacity-100' : 'opacity-0')}>
                <DiagramLabel x={188} y={296} className="text-[24px] font-black font-serif text-amber-400">F</DiagramLabel>
                <DiagramLabel x={220} y={342} className="text-2.75 font-semibold font-sans text-amber-300">opposes motion</DiagramLabel>
              </div>

              <div className={cn('transition-opacity duration-300', forces.tension ? 'opacity-100' : 'opacity-0')}>
                <DiagramLabel x={635} y={230} className="text-[24px] font-black font-serif text-blue-400">T</DiagramLabel>
                <DiagramLabel x={635} y={282} className="text-2.75 font-semibold font-sans text-blue-300">string pulls</DiagramLabel>
              </div>

              <div className={cn('transition-opacity duration-300', forces.applied ? 'opacity-100' : 'opacity-0')}>
                <DiagramLabel x={655} y={84} anchor="start" className="text-[24px] font-black font-serif text-zinc-200">P</DiagramLabel>
                <DiagramLabel x={616} y={124} anchor="start" className="text-2.75 font-semibold font-sans text-zinc-300">direct push/pull</DiagramLabel>
              </div>
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
