import React from 'react';
import { DiagramPanel } from '../../DiagramPanel';
import { MathText } from '../../MathText';

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
            <div className="p-3 bg-slate-900/50 border border-slate-800 rounded-lg">
              <h4 className="font-bold text-emerald-400 mb-2 text-sm uppercase tracking-wider">Constant Velocity</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Equal spacing between position marks indicates constant velocity (zero acceleration).
              </p>
            </div>
            <div className="p-3 bg-slate-900/50 border border-slate-800 rounded-lg">
              <h4 className="font-bold text-amber-400 mb-2 text-sm uppercase tracking-wider">Constant Acceleration</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
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
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto max-w-3xl" overflow="visible" shapeRendering="geometricPrecision">
        {/* Horizontal Track */}
        <line x1={padding} y1={height / 2} x2={width - padding} y2={height / 2} stroke="#475569" strokeWidth="2" />
        <path d={`M ${width - padding - 10} ${height / 2 - 5} L ${width - padding} ${height / 2} L ${width - padding - 10} ${height / 2 + 5} Z`} fill="#475569" />
        <foreignObject x={padding - 20} y={height / 2 + 10} width="20" height="20">
          <MathText content="O" className="text-slate-300 text-xs" />
        </foreignObject>
        <foreignObject x={width - padding - 20} y={height / 2 + 10} width="50" height="20">
          <p className="text-slate-400 text-xs">Positive Direction</p>
        </foreignObject>

        {/* Constant Velocity Row */}
        <foreignObject x={padding - 40} y={height / 2 - 70} width="80" height="20">
          <p className="text-emerald-400 text-xs font-bold">Constant Velocity</p>
        </foreignObject>
        <line x1={padding} y1={height / 2 - 40} x2={width - padding} y2={height / 2 - 40} stroke="#475569" strokeWidth="1" strokeDasharray="2 2" />
        {constantVelocityPositions.map((x, index) => (
          <g key={`cv-${index}`}>
            <circle cx={x} cy={height / 2 - 40} r="6" fill="#10b981" />
            <foreignObject x={x - 10} y={height / 2 - 25} width="20" height="20">
              <MathText content={`t=${index}`} className="text-slate-300 text-xs" />
            </foreignObject>
          </g>
        ))}

        {/* Accelerating Row */}
        <foreignObject x={padding - 40} y={height / 2 + 30} width="80" height="20">
          <p className="text-amber-400 text-xs font-bold">Acceleration</p>
        </foreignObject>
        <line x1={padding} y1={height / 2 + 60} x2={width - padding} y2={height / 2 + 60} stroke="#475569" strokeWidth="1" strokeDasharray="2 2" />
        {acceleratingPositions.map((x, index) => (
          <g key={`accel-${index}`}>
            <circle cx={x} cy={height / 2 + 60} r="6" fill="#f59e0b" />
            <foreignObject x={x - 10} y={height / 2 + 75} width="20" height="20">
              <MathText content={`t=${index}`} className="text-slate-300 text-xs" />
            </foreignObject>
          </g>
        ))}
      </svg>
    </DiagramPanel>
  );
};