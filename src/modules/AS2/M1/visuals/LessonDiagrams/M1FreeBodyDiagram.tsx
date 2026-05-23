import React, { useState } from 'react';
import { MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { SVGLibrary } from '@/core/diagram-engine/primitives/SVGLibrary';
import { ObjectBlock } from '@/core/diagram-engine/primitives/ObjectBlock';
import { VectorArrow } from '@/core/diagram-engine/primitives/VectorArrow';
import { DiagramLabel } from '@/core/diagram-engine/primitives/DiagramLabel';
import { themeColors } from '@/core/types/mechanicsTheme';

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
        <div className="space-y-3">
          <div className="grid gap-3 md:grid-cols-3">
            <div className="rounded-lg border border-sky-900/50 bg-sky-950/20 p-3 text-sm text-sky-200">
              <strong className="text-sky-300">Smooth surface</strong> means no friction.
            </div>
            <div className="rounded-lg border border-amber-900/50 bg-amber-950/20 p-3 text-sm text-amber-200">
              <strong className="text-amber-300">Rough surface</strong> means friction opposes motion.
            </div>
            <div className="rounded-lg border border-rose-900/50 bg-rose-950/25 p-3 text-sm text-rose-200">
              <strong className="text-rose-300">Object only:</strong> include forces acting on this object, not forces it exerts.
            </div>
          </div>
          <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-3 text-sm text-slate-300">
            <a href="#" className="hover:underline">A free-body diagram</a> shows only external forces acting on the selected object. Weight <MathText content="mg" className="inline text-rose-300 [&_p]:inline [&_p]:m-0" /> acts vertically downwards; reaction <MathText content="R" className="inline text-emerald-300 [&_p]:inline [&_p]:m-0" /> is perpendicular to the surface.
          </div>
          <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-3 text-sm text-slate-300">
            Tension <MathText content="T" className="inline text-sky-300 [&_p]:inline [&_p]:m-0" /> appears if a string, towbar, or cable pulls on the object. Applied force <MathText content="P" className="inline text-violet-300 [&_p]:inline [&_p]:m-0" /> appears only when a direct force is given.
          </div>
        </div>
      }
    >
      <div className="flex w-full flex-col items-center gap-4">
        <div className="grid w-full max-w-4xl gap-4 lg:grid-cols-[1fr_1.15fr]">
          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
            <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-sky-300">Scenario</h4>
            <div className="grid grid-cols-2 gap-2">
              {(Object.keys(scenarioLabels) as FreeBodyScenario[]).map(option => (
                <button
                  key={option}
                  type="button"
                  onClick={() => selectScenario(option)}
                  className={`rounded-lg border px-3 py-2 text-left text-xs font-semibold transition-all duration-300 ${
                    scenario === option
                      ? 'border-sky-500/50 bg-sky-950/60 text-sky-100 shadow-[0_0_15px_rgba(14,165,233,0.15)]'
                      : 'border-slate-800/50 bg-slate-950 text-slate-400 hover:border-slate-700 hover:bg-slate-900/50'
                  }`}
                >
                  {scenarioLabels[option]}
                </button>
              ))}
            </div>

            <h4 className="mb-3 mt-6 text-xs font-bold uppercase tracking-wider text-slate-400">Forces on the object</h4>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1">
              {(Object.keys(forceLabels) as Force[]).map(force => {
                const disabled = scenario === 'smooth' && force === 'friction';
                return (
                  <label
                    key={force}
                    className={`flex items-center justify-between gap-3 rounded-lg border px-3 py-2 text-sm transition-all duration-300 ${
                      disabled
                        ? 'cursor-not-allowed border-slate-800/30 bg-slate-950/50 text-slate-600'
                        : 'cursor-pointer border-slate-800/50 bg-slate-950 text-slate-300 hover:border-slate-700 hover:bg-slate-900/50'
                    }`}
                  >
                    <span>{forceLabels[force]}</span>
                    <input
                      type="checkbox"
                      checked={forces[force]}
                      disabled={disabled}
                      onChange={() => toggleForce(force)}
                      className="h-4 w-4 rounded border-slate-700 bg-slate-900 text-sky-500 focus:ring-sky-500/50 focus:ring-offset-0 disabled:opacity-40 transition-colors"
                    />
                  </label>
                );
              })}
            </div>
          </div>

          <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden border border-slate-800/50 bg-slate-950 shadow-[8px_8px_0px_#0f172a]">
            <SVGLibrary />
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 560 420" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" role="img" aria-label="Interactive free body diagram showing selected forces on a block">
              <rect x="28" y="28" width="504" height="364" rx="10" fill="#0f172a" stroke="#1e293b" strokeWidth="1.8" />
              
              {/* Surface and object */}
              <line x1="72" y1="234" x2="488" y2="234" stroke={themeColors.structural} strokeWidth="3" />
              <g className={`transition-opacity duration-300 ${scenario === 'rough' ? 'opacity-85' : 'opacity-0'}`}>
                {Array.from({ length: 13 }).map((_, index) => (
                  <line key={index} x1={92 + index * 30} y1="246" x2={108 + index * 30} y2="238" stroke={themeColors.applied} strokeWidth="1.8" />
                ))}
              </g>
              
              <ObjectBlock x={210} y={154} width={140} height={80} massLabel="object" />

              <g className={`transition-opacity duration-300 ${(forces.friction || forces.tension || forces.applied) ? 'opacity-100' : 'opacity-0'}`}>
                <VectorArrow x1={214} y1={122} x2={346} y2={122} type="structural" dashed marker="default" />
              </g>

              {/* Forces */}
              <g className={`transition-opacity duration-300 ${forces.weight ? 'opacity-100' : 'opacity-0'}`}>
                <VectorArrow x1={280} y1={194} x2={280} y2={320} type="force" />
              </g>

              <g className={`transition-opacity duration-300 ${forces.reaction ? 'opacity-100' : 'opacity-0'}`}>
                <VectorArrow x1={280} y1={154} x2={280} y2={48} type="accel" />
              </g>

              <g className={`transition-opacity duration-300 ${forces.friction ? 'opacity-100' : 'opacity-0'}`}>
                <VectorArrow x1={210} y1={194} x2={92} y2={194} type="applied" />
              </g>

              <g className={`transition-opacity duration-300 ${forces.tension ? 'opacity-100' : 'opacity-0'}`}>
                <VectorArrow x1={350} y1={194} x2={486} y2={194} type="velocity" />
                <VectorArrow x1={350} y1={194} x2={410} y2={194} type="velocity" dashed marker="none" />
              </g>

              <g className={`transition-opacity duration-300 ${forces.applied ? 'opacity-100' : 'opacity-0'}`}>
                <VectorArrow x1={350} y1={164} x2={486} y2={122} type="weight" />
              </g>

              {/* Legend */}
              <g transform="translate(48 336)">
                <rect x="0" y="0" width="276" height="42" rx="6" fill="#020617" stroke="#1e293b" />
                <circle cx="16" cy="14" r="5" fill={themeColors.force} /><text x="28" y="18" className="fill-slate-400 text-[10px] font-medium tracking-wide">weight</text>
                <circle cx="86" cy="14" r="5" fill={themeColors.accel} /><text x="98" y="18" className="fill-slate-400 text-[10px] font-medium tracking-wide">reaction</text>
                <circle cx="176" cy="14" r="5" fill={themeColors.weight} /><text x="188" y="18" className="fill-slate-400 text-[10px] font-medium tracking-wide">applied</text>
                <circle cx="16" cy="28" r="5" fill={themeColors.applied} /><text x="28" y="32" className="fill-slate-400 text-[10px] font-medium tracking-wide">friction</text>
                <circle cx="86" cy="28" r="5" fill={themeColors.velocity} /><text x="98" y="32" className="fill-slate-400 text-[10px] font-medium tracking-wide">tension</text>
              </g>
            </svg>

            {/* HTML Overlay Labels */}
            <DiagramLabel position={{ left: '16%', top: '14%' }}>
              <div className="text-base font-bold text-slate-200">Selected object</div>
            </DiagramLabel>
            
            <DiagramLabel position={{ left: '21%', top: '19%' }}>
              <div className="text-xs text-slate-400">block on table; external forces only</div>
            </DiagramLabel>

            <DiagramLabel position={{ left: '50%', top: '26%' }} className={`transition-opacity duration-300 ${(forces.friction || forces.tension || forces.applied) ? 'opacity-100' : 'opacity-0'}`}>
              <div className="text-xs font-semibold text-slate-400">motion / intended motion</div>
            </DiagramLabel>

            <DiagramLabel position={{ left: '58%', top: '72%' }} className={`transition-opacity duration-300 ${forces.weight ? 'opacity-100' : 'opacity-0'}`}>
              <div className="text-lg font-bold" style={{ color: themeColors.force }}><MathText content="mg" className="[&_p]:m-0" /></div>
            </DiagramLabel>

            <DiagramLabel position={{ left: '56%', top: '18%' }} className={`transition-opacity duration-300 ${forces.reaction ? 'opacity-100' : 'opacity-0'}`}>
              <div className="text-lg font-bold" style={{ color: themeColors.accel }}><MathText content="R" className="[&_p]:m-0" /></div>
            </DiagramLabel>
            <DiagramLabel position={{ left: '62%', top: '22%' }} className={`transition-opacity duration-300 ${forces.reaction ? 'opacity-100' : 'opacity-0'}`}>
              <div className="text-xs font-semibold" style={{ color: themeColors.accel }}>perpendicular</div>
            </DiagramLabel>

            <DiagramLabel position={{ left: '23%', top: '42%' }} className={`transition-opacity duration-300 ${forces.friction ? 'opacity-100' : 'opacity-0'}`}>
              <div className="text-lg font-bold" style={{ color: themeColors.applied }}><MathText content="F" className="[&_p]:m-0" /></div>
            </DiagramLabel>
            <DiagramLabel position={{ left: '24%', top: '53%' }} className={`transition-opacity duration-300 ${forces.friction ? 'opacity-100' : 'opacity-0'}`}>
              <div className="text-xs font-semibold" style={{ color: themeColors.applied }}>opposes motion</div>
            </DiagramLabel>

            <DiagramLabel position={{ left: '84%', top: '42%' }} className={`transition-opacity duration-300 ${forces.tension ? 'opacity-100' : 'opacity-0'}`}>
              <div className="text-lg font-bold" style={{ color: themeColors.velocity }}><MathText content="T" className="[&_p]:m-0" /></div>
            </DiagramLabel>
            <DiagramLabel position={{ left: '78%', top: '53%' }} className={`transition-opacity duration-300 ${forces.tension ? 'opacity-100' : 'opacity-0'}`}>
              <div className="text-xs font-semibold" style={{ color: themeColors.velocity }}>string pulls</div>
            </DiagramLabel>

            <DiagramLabel position={{ left: '85%', top: '25%' }} className={`transition-opacity duration-300 ${forces.applied ? 'opacity-100' : 'opacity-0'}`}>
              <div className="text-lg font-bold" style={{ color: themeColors.weight }}><MathText content="P" className="[&_p]:m-0" /></div>
            </DiagramLabel>
            <DiagramLabel position={{ left: '79%', top: '33%' }} className={`transition-opacity duration-300 ${forces.applied ? 'opacity-100' : 'opacity-0'}`}>
              <div className="text-xs font-semibold" style={{ color: themeColors.weight }}>direct push/pull</div>
            </DiagramLabel>
          </div>
        </div>
      </div>
    </DiagramPanel>
  );
};
