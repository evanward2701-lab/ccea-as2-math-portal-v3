import React from 'react';
import { MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { SVGLibrary } from '@/core/diagram-engine/primitives/SVGLibrary';
import { VectorArrow } from '@/core/diagram-engine/primitives/VectorArrow';
import { DiagramLabel } from '@/core/diagram-engine/primitives/DiagramLabel';
import { themeColors } from '@/core/types/mechanicsTheme';

export const M1KinematicNotationPanel: React.FC = () => {
  const notation = [
    { symbol: 's', name: 'Displacement', unit: '\\text{m}', color: 'text-emerald-400' },
    { symbol: 'u', name: 'Initial Velocity', unit: '\\text{m s}^{-1}', color: 'text-amber-400' },
    { symbol: 'v', name: 'Final Velocity', unit: '\\text{m s}^{-1}', color: 'text-amber-400' },
    { symbol: 'a', name: 'Acceleration', unit: '\\text{m s}^{-2}', color: 'text-sky-400' },
    { symbol: 't', name: 'Time', unit: '\\text{s}', color: 'text-slate-300' },
  ];

  return (
    <DiagramPanel
      title="Fig. Kinematic Notation Legend"
      analysis={
        <div className="grid gap-3 md:grid-cols-2 w-full max-w-3xl">
          <div className="rounded-lg border border-sky-900/50 bg-sky-950/20 p-3 text-sm text-sky-200">
            <strong className="text-sky-300">Choose a positive direction</strong> before using signs.
          </div>
          <div className="rounded-lg border border-rose-900/50 bg-rose-950/30 p-3 text-sm text-rose-200">
            <strong className="text-rose-300">Common trap:</strong> <MathText content="s" className="inline [&_p]:inline [&_p]:m-0" /> is displacement, not speed.
          </div>
        </div>
      }
    >
      <div className="w-full flex flex-col items-center">
        <div className="relative w-full aspect-76/19 max-w-4xl mx-auto rounded-xl overflow-hidden border border-slate-800/50 bg-slate-950 shadow-[8px_8px_0px_#0f172a] mb-5">
          <SVGLibrary />
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 760 190" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" role="img" aria-label="Kinematic position axis showing origin initial position final position and displacement">
            {/* Axis */}
            <VectorArrow x1={92} y1={96} x2={668} y2={96} type="structural" marker="default" />
            <VectorArrow x1={92} y1={96} x2={690} y2={96} type="velocity" marker="default" />

            {/* Position markers */}
            <circle cx="146" cy="96" r="6" fill="#e2e8f0" />
            <VectorArrow x1={146} y1={78} x2={146} y2={114} type="connector" marker="none" />

            <circle cx="274" cy="96" r="6" fill={themeColors.velocity} />
            <VectorArrow x1={274} y1={70} x2={274} y2={122} type="velocity" marker="none" />

            <circle cx="560" cy="96" r="6" fill={themeColors.accel} />
            <VectorArrow x1={560} y1={70} x2={560} y2={122} type="accel" marker="none" />

            {/* Displacement */}
            <VectorArrow x1={284} y1={44} x2={550} y2={44} type="accel" marker="default" />
          </svg>

          <DiagramLabel position={{ left: '81.3%', top: '36.8%' }}>
            <div className="text-sm font-bold text-sky-300">positive direction</div>
          </DiagramLabel>

          <DiagramLabel position={{ left: '19.1%', top: '65.8%' }}>
            <div className="text-base font-bold text-slate-200">O</div>
          </DiagramLabel>
          <DiagramLabel position={{ left: '19.2%', top: '74.7%' }}>
            <div className="text-xs font-semibold text-slate-400">origin</div>
          </DiagramLabel>

          <DiagramLabel position={{ left: '36.7%', top: '73.7%' }}>
            <div className="text-center text-sm font-bold text-sky-300">
              <MathText content="x_0" className="[&_p]:m-0" />
            </div>
          </DiagramLabel>
          <DiagramLabel position={{ left: '36.3%', top: '28.4%' }}>
            <div className="text-xs font-semibold text-slate-300">initial position</div>
          </DiagramLabel>

          <DiagramLabel position={{ left: '73.9%', top: '73.7%' }}>
            <div className="text-center text-sm font-bold text-emerald-300">
              <MathText content="x" className="[&_p]:m-0" />
            </div>
          </DiagramLabel>
          <DiagramLabel position={{ left: '73.4%', top: '28.4%' }}>
            <div className="text-xs font-semibold text-slate-300">final position</div>
          </DiagramLabel>

          <DiagramLabel position={{ left: '56.6%', top: '17.4%' }}>
            <div className="rounded border border-emerald-900/60 bg-slate-950 px-3 py-2 text-center text-sm font-bold text-emerald-300">
              <MathText content="s = x - x_0" className="[&_p]:m-0" />
            </div>
          </DiagramLabel>

          <DiagramLabel position={{ left: '53.7%', top: '86.8%' }}>
            <div className="rounded border border-rose-900/60 bg-rose-950/40 px-3 py-1 text-center text-xs font-bold text-rose-200">
              s is displacement, not speed
            </div>
          </DiagramLabel>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 w-full max-w-4xl">
          {notation.map(item => (
            <div key={item.symbol} className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg text-center flex flex-col items-center justify-center min-h-33">
              <div className={`text-3xl font-mono font-bold ${item.color}`}><MathText content={item.symbol} /></div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mt-2">{item.name}</div>
              <div className="mt-2 rounded border border-slate-800 bg-slate-950 px-2 py-1 text-xs font-semibold text-slate-300">
                <MathText content={item.unit} className="[&_p]:m-0" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </DiagramPanel>
  );
};
