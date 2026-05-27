import React, { useState } from 'react';
import { MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { DiagramLabel } from '@/core/diagram-engine/primitives/DiagramLabel';
import { SVGLibrary } from '@/core/diagram-engine/primitives/SVGLibrary';
import { VectorArrow } from '@/core/diagram-engine/primitives/VectorArrow';
import { themeColors } from '@/core/types/mechanicsTheme';

export const M3ConnectedParticlesEngine: React.FC = () => {
  const [massA, setMassA] = useState(7);
  const [massB, setMassB] = useState(4);

  const g = 9.8;
  const weightA = massA * g;
  const weightB = massB * g;
  const totalMass = massA + massB;
  const drivingForce = Math.abs(weightA - weightB);
  const acceleration = totalMass === 0 ? 0 : drivingForce / totalMass;
  
  let tension = 0;
  let direction: 'A-down' | 'B-down' | 'equilibrium' = 'equilibrium';

  if (massA > massB) {
    direction = 'A-down';
    tension = massB * (g + acceleration); // T - m_B*g = m_B*a
  } else if (massB > massA) {
    direction = 'B-down';
    tension = massA * (g + acceleration); // T - m_A*g = m_A*a
  } else {
    tension = massA * g;
  }

  const blockAHeight = 48 + massA * 5;
  const blockBHeight = 48 + massB * 5;
  const blockAY = direction === 'A-down' ? 240 : direction === 'B-down' ? 190 : 215;
  const blockBY = direction === 'B-down' ? 240 : direction === 'A-down' ? 190 : 215;
  const blockAX = 288;
  const blockBX = 396;
  const blockWidth = 76;
  const blockACenter = blockAX + blockWidth / 2;
  const blockBCenter = blockBX + blockWidth / 2;
  const blockABottom = blockAY + blockAHeight;
  const blockBBottom = blockBY + blockBHeight;
  const leftAccelDown = direction === 'A-down';
  const rightAccelDown = direction === 'B-down';

  return (
    <DiagramPanel
      title="Fig. Connected Particles Pulley Engine"
      analysis={
        <div className="space-y-4">
          <div className="p-3 bg-zinc-900/50 border border-zinc-800 rounded-lg">
            <h4 className="font-bold text-zinc-400 mb-2 text-sm uppercase tracking-wider">Whole System Equation</h4>
            <p className="text-xs text-zinc-400 italic mb-3">Tension is an internal force and cancels out when considering the whole system, allowing for calculation of acceleration.</p>
            <div className="text-center bg-zinc-925 p-2 rounded border border-zinc-800/60">
              <MathText content={`a = \\frac{|m_A - m_B|g}{m_A + m_B} = ${acceleration.toFixed(2)}\\operatorname{m s^{-2}}`} noMargin />
            </div>
          </div>
          <div className="p-3 bg-zinc-900/50 border border-zinc-800 rounded-lg">
            <h4 className="font-bold text-emerald-400 mb-2 text-sm uppercase tracking-wider">Tension</h4>
             <div className="text-center bg-zinc-925 p-2 rounded border border-zinc-800/60">
              <MathText content={`T = ${tension.toFixed(1)}\\operatorname{N}`} noMargin />
            </div>
          </div>
          <div className="p-3 bg-rose-950/30 border border-rose-900/40 rounded-lg text-sm text-rose-300">
            <strong className="font-bold text-rose-400">CCEA Exam Pitfall:</strong> Tension is not the same as weight. It must usually be found by isolating one particle <em>after</em> finding the system&apos;s acceleration.
          </div>
        </div>
      }
    >
      <div className="flex w-full flex-col items-center">
        <div className="mb-6 grid w-full max-w-3xl grid-cols-1 gap-4 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 md:grid-cols-2">
          <div className="flex items-center gap-3">
            <label htmlFor="massA-slider" className="whitespace-nowrap text-sm font-medium text-zinc-300">Mass A</label>
            <input id="massA-slider" type="range" min="1" max="10" step="0.5" value={massA} onChange={(e) => setMassA(Number(e.target.value))} className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-zinc-700 accent-pink-500" />
            <span className="w-16 text-right font-mono text-sm text-amber-400">{massA.toFixed(1)} kg</span>
          </div>
          <div className="flex items-center gap-3">
            <label htmlFor="massB-slider" className="whitespace-nowrap text-sm font-medium text-zinc-300">Mass B</label>
            <input id="massB-slider" type="range" min="1" max="10" step="0.5" value={massB} onChange={(e) => setMassB(Number(e.target.value))} className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-zinc-700 accent-pink-500" />
            <span className="w-16 text-right font-mono text-sm text-amber-400">{massB.toFixed(1)} kg</span>
          </div>
        </div>

        <div className="relative aspect-80/44 w-full max-w-4xl overflow-hidden rounded-2xl border border-zinc-800/70 bg-zinc-925 shadow-inner">
          <SVGLibrary />
          <svg
            viewBox="0 0 760 420"
            className="absolute inset-0 h-full w-full"
            overflow="visible"
            shapeRendering="geometricPrecision"
            role="img"
            aria-label="Connected particles pulley engine force diagram"
          >
            <line x1={380} y1={26} x2={380} y2={42} stroke="#64748b" strokeWidth={2.5} />
            <circle cx={380} cy={96} r={54} fill="#141417" stroke="#94a3b8" strokeWidth={3} />
            <circle cx={380} cy={96} r={7} fill="#64748b" />

            <path
              d={`M ${blockACenter} ${blockAY} L ${blockACenter} 96 A 54 54 0 0 1 ${blockBCenter} 96 L ${blockBCenter} ${blockBY}`}
              stroke="#64748b"
              strokeWidth={2.5}
              strokeLinecap="round"
              fill="none"
            />

            <rect x={blockAX} y={blockAY} width={blockWidth} height={blockAHeight} rx={5} fill="#1e293b" stroke="#94a3b8" strokeWidth={2.2} />
            <rect x={blockBX} y={blockBY} width={blockWidth} height={blockBHeight} rx={5} fill="#1e293b" stroke="#94a3b8" strokeWidth={2.2} />
            <text x={blockACenter} y={blockAY + blockAHeight / 2} fill={themeColors.connector} textAnchor="middle" dominantBaseline="middle" fontFamily="serif" fontSize={22} fontStyle="italic">A</text>
            <text x={blockBCenter} y={blockBY + blockBHeight / 2} fill={themeColors.connector} textAnchor="middle" dominantBaseline="middle" fontFamily="serif" fontSize={22} fontStyle="italic">B</text>

            <VectorArrow x1={blockACenter} y1={blockAY} x2={blockACenter} y2={blockAY - 64} type="reaction" strokeWidth={2.5} />
            <VectorArrow x1={blockBCenter} y1={blockBY} x2={blockBCenter} y2={blockBY - 64} type="reaction" strokeWidth={2.5} />
            <VectorArrow x1={blockACenter} y1={blockABottom} x2={blockACenter} y2={Math.min(386, blockABottom + 70)} type="friction" strokeWidth={2.5} />
            <VectorArrow x1={blockBCenter} y1={blockBBottom} x2={blockBCenter} y2={Math.min(386, blockBBottom + 70)} type="friction" strokeWidth={2.5} />

            {direction !== 'equilibrium' && (
              <>
                <VectorArrow
                  x1={blockAX - 42}
                  y1={leftAccelDown ? blockAY + 20 : blockAY + blockAHeight + 52}
                  x2={blockAX - 42}
                  y2={leftAccelDown ? blockAY + blockAHeight + 52 : blockAY + 20}
                  type="applied"
                  marker="acceleration"
                  strokeWidth={2.5}
                />
                <VectorArrow
                  x1={blockBX + blockWidth + 42}
                  y1={rightAccelDown ? blockBY + 20 : blockBY + blockBHeight + 52}
                  x2={blockBX + blockWidth + 42}
                  y2={rightAccelDown ? blockBY + blockBHeight + 52 : blockBY + 20}
                  type="applied"
                  marker="acceleration"
                  strokeWidth={2.5}
                />
              </>
            )}
          </svg>

          <DiagramLabel x="38.5%" y={`${((blockAY - 48) / 420) * 100}%`} text="T" className="rounded-md bg-zinc-925/90 px-2 py-1 text-lg text-emerald-300" />
          <DiagramLabel x="58.5%" y={`${((blockBY - 48) / 420) * 100}%`} text="T" className="rounded-md bg-zinc-925/90 px-2 py-1 text-lg text-emerald-300" />
          <DiagramLabel x="39.5%" y={`${((blockABottom + 67.2) / 420) * 100}%`} text="m_Ag" className="rounded-md bg-zinc-925/90 px-2 py-1 text-base text-amber-300" />
          <DiagramLabel x="53.5%" y={`${((blockBBottom + 75.6) / 420) * 100}%`} text="m_Bg" className="rounded-md bg-zinc-925/90 px-2 py-1 text-base text-amber-300" />

          {direction !== 'equilibrium' && (
            <>
              <DiagramLabel x="27%" y={`${((blockAY + blockAHeight / 2 + 18) / 420) * 100}%`} text="a" className="rounded-md bg-zinc-925/90 px-2 py-1 text-lg text-zinc-300" />
              <DiagramLabel x="70%" y={`${((blockBY + blockBHeight / 2 + 18) / 420) * 100}%`} text="a" className="rounded-md bg-zinc-925/90 px-2 py-1 text-lg text-zinc-300" />
            </>
          )}

          {direction === 'equilibrium' && (
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-lg border border-zinc-800 bg-zinc-950/45 px-5 py-3 text-sm font-bold uppercase tracking-[0.24em] text-zinc-400">
              Equilibrium: a = 0
            </div>
          )}
        </div>
      </div>
    </DiagramPanel>
  );
};
