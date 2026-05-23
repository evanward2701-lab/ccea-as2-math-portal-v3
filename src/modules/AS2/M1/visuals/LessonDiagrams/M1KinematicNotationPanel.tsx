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
    { symbol: 'a', name: 'Acceleration', unit: '\\text{m s}^{-2}', color: 'text-zinc-400' },
    { symbol: 't', name: 'Time', unit: '\\text{s}', color: 'text-zinc-300' },
  ];

  return (
    <DiagramPanel
      title="Fig. Kinematic Notation Legend"
      analysis={
        <div className="grid gap-3 md:grid-cols-2 w-full max-w-5xl mx-auto">
          <div className="rounded-lg border border-zinc-900/50 bg-zinc-950/20 p-4 text-base text-zinc-300 leading-relaxed">
            <strong className="text-zinc-200">Choose a positive direction</strong> before using signs.
          </div>
          <div className="rounded-lg border border-rose-900/50 bg-rose-950/30 p-4 text-base text-rose-300 leading-relaxed">
            <strong className="text-rose-400">Common trap:</strong> <MathText content="s" className="inline [&_p]:inline [&_p]:m-0" /> is displacement, not speed.
          </div>
        </div>
      }
    >
      <div className="w-full flex flex-col items-center">
        <div className="relative w-full aspect-76/19 max-w-5xl mx-auto rounded-xl overflow-hidden border border-zinc-800/60 bg-[#1c1c1f] shadow-[0_4px_30px_rgba(0,0,0,0.3)] mb-5">
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

            {/* Native SVG Text Labels */}
            <text x="618" y="70" fill="#d4d4d8" textAnchor="middle" dominantBaseline="central" className="text-sm font-bold" style={{ fontFamily: 'sans-serif' }}>positive direction</text>

            <text x="146" y="125" fill="#e4e4e7" textAnchor="middle" dominantBaseline="central" className="text-base font-bold" style={{ fontFamily: 'sans-serif' }}>O</text>
            <text x="146" y="142" fill="#a1a1aa" textAnchor="middle" dominantBaseline="central" className="text-xs font-semibold" style={{ fontFamily: 'sans-serif' }}>origin</text>

            <text x="274" y="54" fill="#d4d4d8" textAnchor="middle" dominantBaseline="central" className="text-xs font-semibold" style={{ fontFamily: 'sans-serif' }}>initial position</text>
            <text x="560" y="54" fill="#d4d4d8" textAnchor="middle" dominantBaseline="central" className="text-xs font-semibold" style={{ fontFamily: 'sans-serif' }}>final position</text>
          </svg>

          {/* MathText labels that require KaTeX */}
          <DiagramLabel position={{ left: '36.0%', top: '73.7%' }} anchor="center">
            <div className="text-center text-sm font-bold text-zinc-300">
              <MathText content="x_0" className="[&_p]:m-0" />
            </div>
          </DiagramLabel>

          <DiagramLabel position={{ left: '73.7%', top: '73.7%' }} anchor="center">
            <div className="text-center text-sm font-bold text-emerald-400">
              <MathText content="x" className="[&_p]:m-0" />
            </div>
          </DiagramLabel>

          <DiagramLabel position={{ left: '55.2%', top: '15%' }} anchor="center">
            <div className="rounded border border-emerald-900/60 bg-[#1c1c1f] px-3 py-2 text-center text-sm font-bold text-emerald-400 shadow-md">
              <MathText content="s = x - x_0" className="[&_p]:m-0" />
            </div>
          </DiagramLabel>

          <DiagramLabel position={{ left: '50%', top: '90%' }} anchor="center">
            <div className="rounded border border-rose-900/60 bg-rose-950/40 px-3 py-1 text-center text-xs font-bold text-rose-300">
              s is displacement, not speed
            </div>
          </DiagramLabel>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 w-full max-w-5xl mx-auto">
          {notation.map(item => (
            <div key={item.symbol} className="p-4 bg-zinc-800/40 border border-zinc-700/50 rounded-xl text-center flex flex-col items-center justify-center min-h-[132px] shadow-sm backdrop-blur-sm">
              <div className={`text-4xl font-mono font-bold ${item.color}`}><MathText content={item.symbol} /></div>
              <div className="text-[11px] text-zinc-400 uppercase tracking-wider mt-2 font-medium">{item.name}</div>
              <div className="mt-2 rounded border border-zinc-700/50 bg-zinc-900/50 px-2 py-1 text-xs font-semibold text-zinc-300 shadow-inner">
                <MathText content={item.unit} className="[&_p]:m-0" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </DiagramPanel>
  );
};
