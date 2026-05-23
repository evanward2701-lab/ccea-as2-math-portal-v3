import React, { useState } from 'react';
import { MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

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

  return (
    <DiagramPanel
      title="Fig. Connected Particles Pulley Engine"
      analysis={
        <div className="space-y-4">
          <div className="p-3 bg-zinc-900/50 border border-zinc-800 rounded-lg">
            <h4 className="font-bold text-zinc-400 mb-2 text-sm uppercase tracking-wider">Whole System Equation</h4>
            <p className="text-xs text-zinc-400 italic mb-3">Tension is an internal force and cancels out when considering the whole system, allowing for calculation of acceleration.</p>
            <div className="text-center bg-[#141416] p-2 rounded border border-zinc-800/60">
              <MathText content={`a = \\frac{|m_A - m_B|g}{m_A + m_B} = ${acceleration.toFixed(2)}\\text{ m s}^{-2}`} />
            </div>
          </div>
          <div className="p-3 bg-zinc-900/50 border border-zinc-800 rounded-lg">
            <h4 className="font-bold text-emerald-400 mb-2 text-sm uppercase tracking-wider">Tension</h4>
             <div className="text-center bg-[#141416] p-2 rounded border border-zinc-800/60">
              <MathText content={`T = ${tension.toFixed(1)}\\text{ N}`} />
            </div>
          </div>
          <div className="p-3 bg-rose-950/30 border border-rose-900/40 rounded-lg text-sm text-rose-300">
            <strong className="font-bold text-rose-400">CCEA Exam Pitfall:</strong> Tension is not the same as weight. It must usually be found by isolating one particle *after* finding the system's acceleration.
          </div>
        </div>
      }
    >
      <div className="w-full flex flex-col items-center">
        <div className="w-full max-w-lg grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 rounded-lg border border-zinc-800 bg-zinc-900/50 p-3">
          <div className="flex items-center gap-3">
            <label htmlFor="massA-slider" className="text-sm font-medium text-zinc-300 whitespace-nowrap">Mass A</label>
            <input id="massA-slider" type="range" min="1" max="10" step="0.5" value={massA} onChange={(e) => setMassA(Number(e.target.value))} className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer" />
            <span className="text-sm font-mono text-amber-400 w-16 text-right">{massA.toFixed(1)} kg</span>
          </div>
          <div className="flex items-center gap-3">
            <label htmlFor="massB-slider" className="text-sm font-medium text-zinc-300 whitespace-nowrap">Mass B</label>
            <input id="massB-slider" type="range" min="1" max="10" step="0.5" value={massB} onChange={(e) => setMassB(Number(e.target.value))} className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer" />
            <span className="text-sm font-mono text-amber-400 w-16 text-right">{massB.toFixed(1)} kg</span>
          </div>
        </div>

        <svg viewBox="0 0 560 380" className="w-full h-auto max-w-xl" overflow="visible" shapeRendering="geometricPrecision">
          <defs>
            <marker id="cp-arrow-emerald" viewBox="0 0 10 10" refX="5" refY="2" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 10 L 5 0 L 10 10 Z" fill="#10b981" /></marker>
            <marker id="cp-arrow-amber" viewBox="0 0 10 10" refX="5" refY="8" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 5 10 L 10 0 Z" fill="#f59e0b" /></marker>
            <marker id="cp-arrow-sky-up" viewBox="0 0 10 10" refX="5" refY="2" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 10 L 5 0 L 10 10 Z" fill="#a1a1aa" /></marker>
            <marker id="cp-arrow-sky-down" viewBox="0 0 10 10" refX="5" refY="8" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 5 10 L 10 0 Z" fill="#a1a1aa" /></marker>
          </defs>

          {/* Pulley */}
          <line x1="280" y1="20" x2="280" y2="60" stroke="#64748b" strokeWidth="2" />
          <circle cx="280" cy="60" r="30" fill="#141417" stroke="#94a3b8" strokeWidth="2" />
          <circle cx="280" cy="60" r="4" fill="#64748b" />

          {/* Masses and Strings */}
          <rect x="150" y="150" width="60" height={20 + massA * 5} fill="#1e293b" stroke="#94a3b8" strokeWidth="1.5" />
          <text x="180" y="140" textAnchor="middle" fill="#e2e8f0" fontSize="14">A</text>
          <line x1="180" y1="60" x2="180" y2="150" stroke="#94a3b8" strokeWidth="1.5" />

          <rect x="350" y="150" width="60" height={20 + massB * 5} fill="#1e293b" stroke="#94a3b8" strokeWidth="1.5" />
          <text x="380" y="140" textAnchor="middle" fill="#e2e8f0" fontSize="14">B</text>
          <line x1="380" y1="60" x2="380" y2="150" stroke="#94a3b8" strokeWidth="1.5" />

          {/* Forces on A */}
          <line x1="180" y1="150" x2="180" y2="100" stroke="#10b981" strokeWidth="2.5" markerEnd="url(#cp-arrow-emerald)" />
          <text x="190" y="95" fill="#10b981" fontSize="14"><MathText content="T" /></text>
          <line x1="180" y1={170 + massA * 5} x2="180" y2={220 + massA * 5} stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#cp-arrow-amber)" />
          <text x="190" y={230 + massA * 5} fill="#f59e0b" fontSize="14"><MathText content="m_A g" /></text>

          {/* Forces on B */}
          <line x1="380" y1="150" x2="380" y2="100" stroke="#10b981" strokeWidth="2.5" markerEnd="url(#cp-arrow-emerald)" />
          <text x="390" y="95" fill="#10b981" fontSize="14"><MathText content="T" /></text>
          <line x1="380" y1={170 + massB * 5} x2="380" y2={220 + massB * 5} stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#cp-arrow-amber)" />
          <text x="390" y={230 + massB * 5} fill="#f59e0b" fontSize="14"><MathText content="m_B g" /></text>

          {/* Acceleration */}
          {direction === 'A-down' && <>
            <line x1="120" y1="180" x2="120" y2="230" stroke="#a1a1aa" strokeWidth="2.5" markerEnd="url(#cp-arrow-sky-down)" />
            <text x="100" y="205" fill="#a1a1aa" fontSize="14"><MathText content="a" /></text>
            <line x1="440" y1="230" x2="440" y2="180" stroke="#a1a1aa" strokeWidth="2.5" markerEnd="url(#cp-arrow-sky-up)" />
            <text x="450" y="205" fill="#a1a1aa" fontSize="14"><MathText content="a" /></text>
          </>}
          {direction === 'B-down' && <>
            <line x1="120" y1="230" x2="120" y2="180" stroke="#a1a1aa" strokeWidth="2.5" markerEnd="url(#cp-arrow-sky-up)" />
            <text x="100" y="205" fill="#a1a1aa" fontSize="14"><MathText content="a" /></text>
            <line x1="440" y1="180" x2="440" y2="230" stroke="#a1a1aa" strokeWidth="2.5" markerEnd="url(#cp-arrow-sky-down)" />
            <text x="450" y="205" fill="#a1a1aa" fontSize="14"><MathText content="a" /></text>
          </>}
          {direction === 'equilibrium' && <text x="280" y="350" textAnchor="middle" fill="#a1a1aa" fontSize="14" fontWeight="bold">Equilibrium: a = 0</text>}
        </svg>
      </div>
    </DiagramPanel>
  );
};
