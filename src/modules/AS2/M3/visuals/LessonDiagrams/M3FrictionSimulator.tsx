import React, { useState } from 'react';
import { MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { DiagramLabel } from '@/core/diagram-engine/primitives/DiagramLabel';
import { SVGLibrary } from '@/core/diagram-engine/primitives/SVGLibrary';
import { VectorArrow } from '@/core/diagram-engine/primitives/VectorArrow';
import { cn } from '@/core/utils/cn';

export const M3FrictionSimulator: React.FC = () => {
  const [appliedForce, setAppliedForce] = useState(30);
  const [mu, setMu] = useState(0.5);

  const mass = 10;
  const g = 9.8;
  const weight = mass * g;
  const reaction = weight;
  const limitingFriction = mu * reaction;
  const isSliding = appliedForce > limitingFriction;
  const actualFriction = isSliding ? limitingFriction : appliedForce;
  const resultantForce = appliedForce - actualFriction;
  const acceleration = resultantForce / mass;

  const arrowScale = 2;
  const blockLeftX = 250;
  const blockRightX = 350;
  const blockCenterY = 178;
  const pEndX = Math.min(540, blockRightX + appliedForce * arrowScale);
  const fEndX = Math.max(60, blockLeftX - actualFriction * arrowScale);
  const aEndX = Math.min(470, 300 + acceleration * 36);

  return (
    <DiagramPanel
      title="Fig. Limiting Friction Simulator"
      analysis={
        <div className="space-y-4">
          <div className="p-3 bg-zinc-900/50 border border-zinc-800 rounded-lg">
            <h4 className="font-bold text-amber-400 mb-2 text-sm uppercase tracking-wider">Limiting Friction</h4>
            <div className="text-center bg-zinc-925 p-2 rounded border border-zinc-800/60">
              <MathText content={`F_{max} = \\mu R = ${limitingFriction.toFixed(1)}\\operatorname{N}`} noMargin />
            </div>
          </div>
          <div className="p-3 bg-zinc-900/50 border border-zinc-800 rounded-lg">
            <h4 className="font-bold text-rose-400 mb-2 text-sm uppercase tracking-wider">Actual Friction</h4>
            <div className="text-center bg-zinc-925 p-2 rounded border border-zinc-800/60">
              <MathText content={`F = ${actualFriction.toFixed(1)}\\operatorname{N}`} noMargin />
            </div>
          </div>
          <div className="p-3 bg-zinc-900/50 border border-zinc-800 rounded-lg">
            <h4 className="font-bold text-zinc-400 mb-2 text-sm uppercase tracking-wider">Resultant Force & Acceleration</h4>
            <div className="text-center bg-zinc-925 p-2 rounded border border-zinc-800/60">
              <MathText content={`F_{res} = ${resultantForce.toFixed(1)}\\operatorname{N} \\implies a = ${acceleration.toFixed(2)}\\operatorname{m s^{-2}}`} noMargin />
            </div>
          </div>
          <div className="p-3 bg-rose-950/30 border border-rose-900/40 rounded-lg text-sm text-rose-300">
            <strong className="font-bold text-rose-400">CCEA Exam Pitfall:</strong> Do not automatically set friction equal to <MathText content="\\mu R" className="inline [&_p]:inline" />. This is only true when the object is on the point of moving (limiting equilibrium) or is already sliding.
          </div>
        </div>
      }
    >
      <div className="w-full flex flex-col items-center">
        <div className="w-full max-w-lg grid grid-cols-1 gap-4 mb-6 rounded-lg border border-zinc-800 bg-zinc-900/50 p-3">
          <div className="flex items-center gap-3">
            <label className="text-sm font-medium text-zinc-300 w-32">Applied Force P</label>
            <input type="range" min="0" max="80" value={appliedForce} onChange={(e) => setAppliedForce(Number(e.target.value))} className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer" />
            <span className="text-sm font-mono text-zinc-400 w-16 text-right">{appliedForce.toFixed(1)} N</span>
          </div>
          <div className="flex items-center gap-3">
            <label className="text-sm font-medium text-zinc-300 w-32">Friction Coeff. <MathText content="\\mu" className="inline [&_p]:inline" /></label>
            <input type="range" min="0.1" max="0.8" step="0.05" value={mu} onChange={(e) => setMu(Number(e.target.value))} className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer" />
            <span className="text-sm font-mono text-amber-400 w-16 text-right">{mu.toFixed(2)}</span>
          </div>
        </div>

        <div className={cn(
          "px-4 py-1 mb-4 text-sm font-bold rounded-full border",
          isSliding ? "bg-rose-500/10 border-rose-500/30 text-rose-300" : "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
        )}>
          {isSliding ? 'Sliding: F = μR' : 'Static Equilibrium: F ≤ μR'}
        </div>

        <div className="relative w-full max-w-3xl aspect-60/30 rounded-xl border border-zinc-800/60 bg-zinc-925 shadow-inner overflow-hidden">
          <SVGLibrary />
          <svg viewBox="0 0 600 300" className="absolute inset-0 h-full w-full" overflow="visible" shapeRendering="geometricPrecision">

            <line x1="50" y1="215" x2="550" y2="215" stroke="#475569" strokeWidth="3" />
            {Array.from({ length: 25 }).map((_, i) => (
              <line key={i} x1={50 + i * 20} y1="215" x2={62 + i * 20} y2="222" stroke="#3f3f46" strokeWidth="1.4" />
            ))}

            <rect x="250" y="140" width="100" height="75" rx="6" fill="#1e293b" stroke="#94a3b8" strokeWidth="2" />
            <VectorArrow x1={300} y1={140} x2={300} y2={70} type="reaction" strokeWidth={3} />
            <VectorArrow x1={300} y1={215} x2={300} y2={280} type="weight" strokeWidth={3} />

            <VectorArrow x1={blockRightX} y1={blockCenterY} x2={pEndX} y2={blockCenterY} type="reaction" strokeWidth={3.2} />

            {actualFriction > 0.1 && (
              <VectorArrow x1={blockLeftX} y1={blockCenterY} x2={fEndX} y2={blockCenterY} type="weight" strokeWidth={3.2} />
            )}

            {acceleration > 0.01 && (
              <VectorArrow x1={300} y1={98} x2={aEndX} y2={98} type="applied" strokeWidth={2.6} dashed />
            )}
          </svg>

          <DiagramLabel x="50%" y="59%">
            <div className="text-xl font-serif font-bold text-zinc-100">m</div>
          </DiagramLabel>

          <DiagramLabel x="50%" y="18%">
            <div className="rounded-md border border-emerald-500/20 bg-zinc-950/70 px-3 py-1 text-emerald-300 shadow-xl">
              <MathText content="R" noMargin />
            </div>
          </DiagramLabel>

          <DiagramLabel x="58%" y="80%">
            <div className="rounded-md border border-rose-500/20 bg-zinc-950/70 px-3 py-1 text-rose-300 shadow-xl">
              <MathText content="W = mg" noMargin />
            </div>
          </DiagramLabel>

          <DiagramLabel x={`${Math.min(92, (pEndX / 600) * 100 + 5)}%`} y="48%">
            <div className="rounded-md border border-emerald-500/20 bg-zinc-950/70 px-3 py-1 text-emerald-300 shadow-xl">
              <MathText content="P" noMargin />
            </div>
          </DiagramLabel>

          {actualFriction > 0.1 && (
            <DiagramLabel x={`${Math.max(8, (fEndX / 600) * 100 - 5)}%`} y="55%">
              <div className="rounded-md border border-rose-500/20 bg-zinc-950/70 px-3 py-1 text-rose-300 shadow-xl">
                <MathText content="F" noMargin />
              </div>
            </DiagramLabel>
          )}

          {acceleration > 0.01 && (
            <DiagramLabel x={`${Math.min(84, (aEndX / 600) * 100 + 6)}%`} y="26%">
              <div className="rounded-md border border-zinc-600/40 bg-zinc-950/70 px-3 py-1 text-zinc-300 shadow-xl">
                <MathText content="a" noMargin />
              </div>
            </DiagramLabel>
          )}
        </div>
      </div>
    </DiagramPanel>
  );
};
