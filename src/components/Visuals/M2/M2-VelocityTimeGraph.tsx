import React from 'react';
import { DiagramPanel } from '../../DiagramPanel';
import { MathText } from '../../MathText';

interface VTGraphProps {
  u: number;
  v: number;
  t: number;
  showArea?: boolean;
  showGradient?: boolean;
  title: string;
}

const VTGraph: React.FC<VTGraphProps> = ({ u, v, t, showArea = true, showGradient = true, title }) => {
  const width = 520;
  const height = 300;
  const padding = 50;
  const graphWidth = width - padding * 2;
  const graphHeight = height - padding * 2;

  const maxV = Math.max(u, v, 1) * 1.25; // Ensure maxV is at least 1 and provides padding
  const scaleX = graphWidth / t;
  const scaleY = graphHeight / maxV;

  const x0 = padding;
  const yBase = height - padding;

  const xU = x0;
  const yU = yBase - u * scaleY;

  const xV = x0 + t * scaleX;
  const yV = yBase - v * scaleY;

  // Ensure coordinates are within bounds
  const clampedYU = Math.max(padding, Math.min(yBase, yU));
  const clampedYV = Math.max(padding, Math.min(yBase, yV));

  return (
    <div className="flex flex-col items-center p-4 bg-slate-900/50 border border-slate-800 rounded-lg shadow-inner">
      <h4 className="font-bold text-sky-400 mb-3 text-sm">{title}</h4>
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto max-w-2xl" overflow="visible" shapeRendering="geometricPrecision">
        {/* Axes */}
        <line x1={x0} y1={padding / 2} x2={x0} y2={yBase} stroke="#475569" strokeWidth="2" />
        <line x1={x0} y1={yBase} x2={width - padding / 2} y2={yBase} stroke="#475569" strokeWidth="2" />

        {/* Axis Labels */}
        <foreignObject x={x0 - 40} y={padding / 2 - 10} width="50" height="30">
          <MathText content="v \text{ (m s}^{-1}\text{)}" className="text-slate-400 text-xs" />
        </foreignObject>
        <foreignObject x={width - padding / 2 - 10} y={yBase + 10} width="30" height="20">
          <MathText content="t \text{ (s)}" className="text-slate-400 text-xs" />
        </foreignObject>

        {/* Velocity Line */}
        <line x1={xU} y1={clampedYU} x2={xV} y2={clampedYV} stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />

        {/* Shaded Area (Displacement) */}
        {showArea && (
          <path
            d={`M ${xU} ${yBase} L ${xU} ${clampedYU} L ${xV} ${clampedYV} L ${xV} ${yBase} Z`}
            fill="#10b981"
            fillOpacity="0.2"
            stroke="#10b981"
            strokeWidth="1"
            strokeDasharray="4 2"
          />
        )}

        {/* Gradient Guide Lines (Acceleration) */}
        {showGradient && (
          <>
            <line x1={xU} y1={clampedYU} x2={xV} y2={clampedYU} stroke="#f43f5e" strokeWidth="1" strokeDasharray="2 2" />
            <line x1={xV} y1={clampedYU} x2={xV} y2={clampedYV} stroke="#f43f5e" strokeWidth="1" strokeDasharray="2 2" />
          </>
        )}

        {/* Labels for u, v, t */}
        <circle cx={xU} cy={clampedYU} r="4" fill="#f59e0b" />
        <foreignObject x={xU - 30} y={clampedYU - 15} width="25" height="20">
          <MathText content="u" className="text-amber-400 text-xs" />
        </foreignObject>

        <circle cx={xV} cy={clampedYV} r="4" fill="#f59e0b" />
        <foreignObject x={xV + 5} y={clampedYV - 15} width="25" height="20">
          <MathText content="v" className="text-amber-400 text-xs" />
        </foreignObject>

        <foreignObject x={xU - 10} y={yBase + 5} width="20" height="20">
          <MathText content="0" className="text-slate-300 text-xs" />
        </foreignObject>
        <foreignObject x={xV - 10} y={yBase + 5} width="20" height="20">
          <MathText content="t" className="text-slate-300 text-xs" />
        </foreignObject>
      </svg>
    </div>
  );
};

export const M2VelocityTimeGraphEngine: React.FC = () => {
  return (
    <DiagramPanel
      title="Fig. Dynamic Velocity-Time Graph"
      analysis={
        <div className="space-y-4">
          <p className="text-sm text-slate-400 italic">
            Velocity-time graphs are powerful tools for analyzing motion with constant acceleration.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3 bg-slate-900/50 border border-slate-800 rounded-lg">
              <h4 className="font-bold text-emerald-400 mb-2 text-sm uppercase tracking-wider">Displacement (Area)</h4>
              <div className="text-center bg-slate-950 p-2 rounded border border-slate-800/60">
                <MathText content="s = \frac{1}{2}(u + v)t" />
              </div>
            </div>
            <div className="p-3 bg-slate-900/50 border border-slate-800 rounded-lg">
              <h4 className="font-bold text-rose-400 mb-2 text-sm uppercase tracking-wider">Acceleration (Gradient)</h4>
              <div className="text-center bg-slate-950 p-2 rounded border border-slate-800/60">
                <MathText content="a = \frac{v - u}{t}" />
              </div>
            </div>
          </div>
          <div className="p-3 bg-rose-950/30 border border-rose-900/40 rounded-lg text-sm text-rose-300">
            <strong className="font-bold text-rose-400">CCEA Exam Pitfall:</strong> The area under a v-t graph gives <strong>displacement</strong>. If the velocity line crosses below the t-axis, calculating <strong>distance travelled</strong> requires summing the magnitudes of separate areas.
          </div>
        </div>
      }
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
        <VTGraph u={4} v={7.5} t={40} title="Example 1: Trapezium (u=4, v=7.5, t=40)" />
        <VTGraph u={0} v={25} t={120} title="Example 2: Triangle (u=0, v=25, t=120)" />
      </div>
    </DiagramPanel>
  );
};