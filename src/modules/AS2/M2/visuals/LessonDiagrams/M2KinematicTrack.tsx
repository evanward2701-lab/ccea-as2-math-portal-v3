import React from 'react';
import { MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { DiagramLabel } from '@/core/diagram-engine/DiagramLabel';

export const M2KinematicTrack: React.FC = () => {
  const width = 600;
  const height = 250;
  const padding = 50;

  // Positions for constant velocity (equal spacing)
  const constantVelocityPositions = [60, 140, 220, 300, 380];
  // Positions for constant positive acceleration (increasing spacing)
  const acceleratingPositions = [60, 105, 170, 265, 390];

  return (
    <DiagramPanel
      title="Fig. 1D Particle Track Simulator"
      analysis={
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3 bg-zinc-900/50 border border-zinc-800 rounded-lg">
              <h4 className="font-bold text-emerald-400 mb-2 text-sm uppercase tracking-wider">Constant Velocity</h4>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Equal spacing between position marks indicates constant velocity (zero acceleration).
              </p>
            </div>
            <div className="p-3 bg-zinc-900/50 border border-zinc-800 rounded-lg">
              <h4 className="font-bold text-amber-400 mb-2 text-sm uppercase tracking-wider">Constant Acceleration</h4>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Increasing spacing between position marks indicates constant positive acceleration.
              </p>
            </div>
          </div>
          <div className="p-3 bg-rose-950/30 border border-rose-900/40 rounded-lg text-sm text-rose-300">
            <strong className="font-bold text-rose-400">CCEA Exam Pitfall:</strong> Large velocity does not necessarily mean large acceleration. Acceleration depends on how velocity <em>changes</em>, not its current magnitude.
          </div>
        </div>
      }
    >
      <div className="relative w-full max-w-3xl aspect-60/25 select-none">
        <svg viewBox={`0 0 ${width} ${height}`} className="absolute inset-0 w-full h-full" overflow="visible" shapeRendering="geometricPrecision">
          {/* Horizontal Track */}
          <line x1={padding} y1={height / 2} x2={width - padding} y2={height / 2} stroke="#475569" strokeWidth="2" />
          <path d={`M ${width - padding - 10} ${height / 2 - 5} L ${width - padding} ${height / 2} L ${width - padding - 10} ${height / 2 + 5} Z`} fill="#475569" />

          {/* Constant Velocity Sequence */}
          <g>
            <text x={padding} y={height / 2 - 60} fill="#10b981" fontSize="12" fontWeight="bold" style={{ textTransform: 'uppercase' }}>Zero Acceleration (v = constant)</text>
            {constantVelocityPositions.map((pos, i) => (
              <g key={i}>
                <circle cx={pos} cy={height / 2 - 40} r="6" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
                <text x={pos} y={height / 2 - 25} textAnchor="middle" fill="#94a3b8" fontSize="10">t = {i}</text>
              </g>
            ))}
          </g>

          {/* Constant Acceleration Sequence */}
          <g>
            <text x={padding} y={height / 2 + 30} fill="#f59e0b" fontSize="12" fontWeight="bold" style={{ textTransform: 'uppercase' }}>Positive Acceleration (v is increasing)</text>
            {acceleratingPositions.map((pos, i) => (
              <g key={i}>
                <circle cx={pos} cy={height / 2 + 50} r="6" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
                <text x={pos} y={height / 2 + 65} textAnchor="middle" fill="#94a3b8" fontSize="10">t = {i}</text>
              </g>
            ))}
          </g>
        </svg>

        <DiagramLabel x="5%" y="60%" text="O" />
        <DiagramLabel x="90%" y="60%">
          <p className="text-zinc-400 text-[10px] w-16">Positive Direction</p>
        </DiagramLabel>
      </div>
    </DiagramPanel>
  );
};
