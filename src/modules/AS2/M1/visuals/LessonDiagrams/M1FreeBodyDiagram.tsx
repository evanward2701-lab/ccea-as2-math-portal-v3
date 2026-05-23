import React, { useState } from 'react';
import { MathText, MathInline } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { SVGLibrary } from '@/core/diagram-engine/primitives/SVGLibrary';
import { ObjectBlock } from '@/core/diagram-engine/primitives/ObjectBlock';
import { VectorArrow } from '@/core/diagram-engine/primitives/VectorArrow';
import { DiagramLabel } from '@/core/diagram-engine/primitives/DiagramLabel';
import { themeColors } from '@/core/types/mechanicsTheme';
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

  return (
    <DiagramPanel
      title="Fig. Interactive Free-Body Diagram"
      analysis={
        <div className="space-y-4 max-w-5xl mx-auto w-full">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-zinc-800 bg-zinc-800/30 p-4 text-base text-zinc-300 leading-relaxed">
              <strong className="text-zinc-100">Smooth surface</strong> means no friction.
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-800/30 p-4 text-base text-zinc-300 leading-relaxed">
              <strong className="text-amber-400">Rough surface</strong> means friction opposes motion.
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-800/30 p-4 text-base text-zinc-300 leading-relaxed">
              <strong className="text-rose-400">Object only:</strong> include forces acting on this object, not forces it exerts.
            </div>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 text-base text-zinc-300 leading-relaxed">
            <span className="font-semibold text-zinc-100">A free-body diagram</span> shows only external forces acting on the selected object. Weight <MathInline content="mg" className="text-rose-400" /> acts vertically downwards; reaction <MathInline content="R" className="text-emerald-400" /> is perpendicular to the surface.
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 text-base text-zinc-300 leading-relaxed">
            Tension <MathInline content="T" className="text-zinc-100" /> appears if a string, towbar, or cable pulls on the object. Applied force <MathInline content="P" className="text-zinc-100" /> appears only when a direct force is given.
          </div>
        </div>
      }
    >
      <div className="flex w-full flex-col items-center gap-6">
        <div className="grid w-full max-w-5xl mx-auto gap-6 lg:grid-cols-[1fr_2.5fr]">
          <div className="rounded-xl border border-zinc-800/60 bg-[#1c1c1f] p-5 shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
            <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-zinc-400">Scenario</h4>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
              {(Object.keys(scenarioLabels) as FreeBodyScenario[]).map(option => (
                <button
                  key={option}
                  type="button"
                  onClick={() => selectScenario(option)}
                  className={`rounded-lg border px-4 py-2.5 text-left text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    scenario === option
                      ? 'border-zinc-500 bg-zinc-800 text-zinc-100 shadow-[0_0_15px_rgba(255,255,255,0.05)]'
                      : 'border-zinc-800 bg-[#141416] text-zinc-500 hover:border-zinc-700 hover:bg-zinc-900 hover:text-zinc-300'
                  }`}
                >
                  {scenarioLabels[option]}
                </button>
              ))}
            </div>

            <h4 className="mb-4 mt-8 text-sm font-bold uppercase tracking-widest text-zinc-400">Forces on the object</h4>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {(Object.keys(forceLabels) as Force[]).map(force => {
                const disabled = scenario === 'smooth' && force === 'friction';
                return (
                  <label
                    key={force}
                    className={`flex items-center justify-between gap-3 rounded-lg border px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                      disabled
                        ? 'cursor-not-allowed border-zinc-800/30 bg-[#141416]/50 text-zinc-600'
                        : 'cursor-pointer border-zinc-800 bg-[#141416] text-zinc-300 hover:border-zinc-700 hover:bg-zinc-900'
                    }`}
                  >
                    <span>{forceLabels[force]}</span>
                    <input
                      type="checkbox"
                      checked={forces[force]}
                      disabled={disabled}
                      onChange={() => toggleForce(force)}
                      className="h-4 w-4 rounded border-zinc-700 bg-zinc-900 text-zinc-400 focus:ring-zinc-500/50 focus:ring-offset-0 disabled:opacity-40 transition-colors cursor-pointer"
                    />
                  </label>
                );
              })}
            </div>
          </div>

          <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-xl overflow-hidden border border-zinc-800/60 bg-[#1c1c1f] shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
            <SVGLibrary />
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" role="img" aria-label="Interactive free body diagram showing selected forces on a block">
              
              {/* Surface and object */}
              <line x1="100" y1="280" x2="700" y2="280" stroke={themeColors.structural} strokeWidth="3" />
              <g className={`transition-opacity duration-300 ${scenario === 'rough' ? 'opacity-85' : 'opacity-0'}`}>
                {Array.from({ length: 20 }).map((_, index) => (
                  <line key={index} x1={120 + index * 30} y1="295" x2={140 + index * 30} y2="285" stroke={themeColors.applied} strokeWidth="1.8" />
                ))}
              </g>
              
              <ObjectBlock x={300} y={160} width={200} height={120} massLabel="object" />

              <g className={`transition-opacity duration-300 ${(forces.friction || forces.tension || forces.applied) ? 'opacity-100' : 'opacity-0'}`}>
                <VectorArrow x1={300} y1={120} x2={500} y2={120} type="structural" dashed marker="default" />
              </g>

              {/* Forces */}
              <g className={`transition-opacity duration-300 ${forces.weight ? 'opacity-100' : 'opacity-0'}`}>
                <VectorArrow x1={400} y1={220} x2={400} y2={380} type="force" />
              </g>

              <g className={`transition-opacity duration-300 ${forces.reaction ? 'opacity-100' : 'opacity-0'}`}>
                <VectorArrow x1={400} y1={160} x2={400} y2={40} type="accel" />
              </g>

              {/* Forces */}
              <g className={`transition-opacity duration-300 ${forces.friction ? 'opacity-100' : 'opacity-0'}`}>
                <VectorArrow x1={300} y1={220} x2={140} y2={220} type="applied" />
              </g>

              <g className={`transition-opacity duration-300 ${forces.tension ? 'opacity-100' : 'opacity-0'}`}>
                <VectorArrow x1={500} y1={220} x2={660} y2={220} type="velocity" />
                <VectorArrow x1={500} y1={220} x2={580} y2={220} type="velocity" dashed marker="none" />
              </g>

              <g className={`transition-opacity duration-300 ${forces.applied ? 'opacity-100' : 'opacity-0'}`}>
                <VectorArrow x1={500} y1={180} x2={660} y2={100} type="weight" />
              </g>

              {/* Legend embedded in SVG to prevent positioning issues */}
              <g transform="translate(60 360)">
                <rect x="0" y="0" width="380" height="60" rx="8" fill="#141416" stroke="#27272a" />
                <circle cx="20" cy="20" r="6" fill={themeColors.force} /><text x="35" y="24" className="fill-zinc-400 text-xs font-semibold tracking-wide" style={{ fontFamily: 'sans-serif' }}>weight</text>
                <circle cx="120" cy="20" r="6" fill={themeColors.accel} /><text x="135" y="24" className="fill-zinc-400 text-xs font-semibold tracking-wide" style={{ fontFamily: 'sans-serif' }}>reaction</text>
                <circle cx="240" cy="20" r="6" fill={themeColors.weight} /><text x="255" y="24" className="fill-zinc-400 text-xs font-semibold tracking-wide" style={{ fontFamily: 'sans-serif' }}>applied</text>
                
                <circle cx="20" cy="40" r="6" fill={themeColors.applied} /><text x="35" y="44" className="fill-zinc-400 text-xs font-semibold tracking-wide" style={{ fontFamily: 'sans-serif' }}>friction</text>
                <circle cx="120" cy="40" r="6" fill={themeColors.velocity} /><text x="135" y="44" className="fill-zinc-400 text-xs font-semibold tracking-wide" style={{ fontFamily: 'sans-serif' }}>tension</text>
              </g>
            </svg>

            {/* HTML Overlay Labels */}
            <DiagramLabel position={{ left: '16%', top: '14%' }} anchor="start">
              <div className="text-base md:text-lg font-bold text-zinc-200">Selected object</div>
            </DiagramLabel>
            
            <DiagramLabel position={{ left: '16%', top: '22%' }} anchor="start">
              <div className="text-sm text-zinc-400">block on table; external forces only</div>
            </DiagramLabel>

            <DiagramLabel position={{ left: '50%', top: '20%' }} className={cn("transition-opacity duration-300", !(forces.friction || forces.tension || forces.applied) && 'opacity-0')}>
              <div className="text-sm font-semibold text-zinc-400">motion / intended motion</div>
            </DiagramLabel>

            <DiagramLabel position={{ left: '55%', top: '80%' }} className={cn("transition-opacity duration-300", !forces.weight && 'opacity-0')}>
              <div className="text-xl font-bold" style={{ color: themeColors.force }}><MathInline content="mg" /></div>
            </DiagramLabel>

            <DiagramLabel position={{ left: '53%', top: '15%' }} className={cn("transition-opacity duration-300", !forces.reaction && 'opacity-0')}>
              <div className="text-xl font-bold" style={{ color: themeColors.accel }}><MathInline content="R" /></div>
            </DiagramLabel>
            <DiagramLabel position={{ left: '59%', top: '19%' }} className={cn("transition-opacity duration-300", !forces.reaction && 'opacity-0')}>
              <div className="text-sm font-semibold" style={{ color: themeColors.accel }}>perpendicular</div>
            </DiagramLabel>

            <DiagramLabel position={{ left: '20%', top: '42%' }} className={cn("transition-opacity duration-300", !forces.friction && 'opacity-0')}>
              <div className="text-xl font-bold" style={{ color: themeColors.applied }}><MathInline content="F" /></div>
            </DiagramLabel>
            <DiagramLabel position={{ left: '20%', top: '55%' }} className={cn("transition-opacity duration-300", !forces.friction && 'opacity-0')}>
              <div className="text-sm font-semibold" style={{ color: themeColors.applied }}>opposes motion</div>
            </DiagramLabel>

            <DiagramLabel position={{ left: '85%', top: '42%' }} className={cn("transition-opacity duration-300", !forces.tension && 'opacity-0')}>
              <div className="text-xl font-bold" style={{ color: themeColors.velocity }}><MathInline content="T" /></div>
            </DiagramLabel>
            <DiagramLabel position={{ left: '85%', top: '55%' }} className={cn("transition-opacity duration-300", !forces.tension && 'opacity-0')}>
              <div className="text-sm font-semibold" style={{ color: themeColors.velocity }}>string pulls</div>
            </DiagramLabel>

            <DiagramLabel position={{ left: '87%', top: '20%' }} className={cn("transition-opacity duration-300", !forces.applied && 'opacity-0')}>
              <div className="text-xl font-bold" style={{ color: themeColors.weight }}><MathInline content="P" /></div>
            </DiagramLabel>
            <DiagramLabel position={{ left: '80%', top: '30%' }} className={cn("transition-opacity duration-300", !forces.applied && 'opacity-0')}>
              <div className="text-sm font-semibold" style={{ color: themeColors.weight }}>direct push/pull</div>
            </DiagramLabel>
          </div>
        </div>
      </div>
    </DiagramPanel>
  );
};
