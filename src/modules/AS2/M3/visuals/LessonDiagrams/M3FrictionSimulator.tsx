import React, { useState } from 'react';
import { MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
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

  return (
    <DiagramPanel
      title="Fig. Limiting Friction Simulator"
      analysis={
        <div className="space-y-4">
          <div className="p-3 bg-zinc-900/50 border border-zinc-800 rounded-lg">
            <h4 className="font-bold text-amber-400 mb-2 text-sm uppercase tracking-wider">Limiting Friction</h4>
            <div className="text-center bg-[#141416] p-2 rounded border border-zinc-800/60">
              <MathText content={`F_{max} = \\mu R = ${limitingFriction.toFixed(1)}\\text{ N}`} />
            </div>
          </div>
          <div className="p-3 bg-zinc-900/50 border border-zinc-800 rounded-lg">
            <h4 className="font-bold text-rose-400 mb-2 text-sm uppercase tracking-wider">Actual Friction</h4>
            <div className="text-center bg-[#141416] p-2 rounded border border-zinc-800/60">
              <MathText content={`F = ${actualFriction.toFixed(1)}\\text{ N}`} />
            </div>
          </div>
          <div className="p-3 bg-zinc-900/50 border border-zinc-800 rounded-lg">
            <h4 className="font-bold text-zinc-400 mb-2 text-sm uppercase tracking-wider">Resultant Force & Acceleration</h4>
            <div className="text-center bg-[#141416] p-2 rounded border border-zinc-800/60">
              <MathText content={`F_{res} = ${resultantForce.toFixed(1)}\\text{ N} \\implies a = ${acceleration.toFixed(2)}\\text{ m s}^{-2}`} />
            </div>
          </div>
          <div className="p-3 bg-rose-950/30 border border-rose-900/40 rounded-lg text-sm text-rose-300">
            <strong className="font-bold text-rose-400">CCEA Exam Pitfall:</strong> Do not automatically set friction equal to <MathText content="\mu R" className="inline [&_p]:inline" />. This is only true when the object is on the point of moving (limiting equilibrium) or is already sliding.
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
            <label className="text-sm font-medium text-zinc-300 w-32">Friction Coeff. <MathText content="\mu" className="inline [&_p]:inline" /></label>
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

        <svg viewBox="0 0 600 250" className="w-full h-auto max-w-3xl" overflow="visible" shapeRendering="geometricPrecision">
          <defs>
            <marker id="fs-arrow-emerald" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#10b981" /></marker>
            <marker id="fs-arrow-rose" viewBox="0 0 10 10" refX="2" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 10 1.5 L 2 5 L 10 8.5 z" fill="#f43f5e" /></marker>
            <marker id="fs-arrow-sky" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#a1a1aa" /></marker>
          </defs>

          {/* Ground */}
          <line x1="50" y1="180" x2="550" y2="180" stroke="#475569" strokeWidth="3" />
          {Array.from({ length: 25 }).map((_, i) => (
            <line key={i} x1={50 + i * 20} y1="180" x2={60 + i * 20} y2="185" stroke="#3f3f46" strokeWidth="1" />
          ))}

          {/* Block */}
          <rect x="250" y="120" width="100" height="60" rx="4" fill="#1e293b" stroke="#94a3b8" strokeWidth="1.5" />
          <text x="300" y="155" textAnchor="middle" fill="#e2e8f0" fontSize="14"><MathText content="m" /></text>

          {/* Applied Force P */}
          <line x1="350" y1="150" x2={350 + appliedForce * arrowScale} y2="150" stroke="#10b981" strokeWidth="2.5" markerEnd="url(#fs-arrow-emerald)" />
          <text x={355 + appliedForce * arrowScale} y="145" fill="#10b981" fontSize="14"><MathText content="P" /></text>

          {/* Friction F */}
          {actualFriction > 0.1 && (
            <>
              <line x1="250" y1="165" x2={250 - actualFriction * arrowScale} y2="165" stroke="#f43f5e" strokeWidth="2.5" markerEnd="url(#fs-arrow-rose)" />
              <text x={245 - actualFriction * arrowScale} y="160" fill="#f43f5e" fontSize="14" textAnchor="end"><MathText content="F" /></text>
            </>
          )}

          {/* Acceleration a */}
          {acceleration > 0.01 && (
            <>
              <line x1="300" y1="100" x2={300 + acceleration * 20} y2="100" stroke="#a1a1aa" strokeWidth="2.5" markerEnd="url(#fs-arrow-sky)" />
              <text x={305 + acceleration * 20} y="95" fill="#a1a1aa" fontSize="14"><MathText content="a" /></text>
            </>
          )}
        </svg>
      </div>
    </DiagramPanel>
  );
};
