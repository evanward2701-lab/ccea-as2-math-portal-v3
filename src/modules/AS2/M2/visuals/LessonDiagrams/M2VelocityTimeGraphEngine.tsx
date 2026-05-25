import React from 'react';
import { MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { DiagramLabel } from '@/core/diagram-engine/primitives/DiagramLabel';

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
    <div className="flex flex-col items-center p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg shadow-inner relative">
      <h4 className="font-bold text-zinc-400 mb-3 text-sm">{title}</h4>
      <div className="relative w-full max-w-2xl aspect-52/30">
        <svg viewBox={`0 0 ${width} ${height}`} className="absolute inset-0 w-full h-full" overflow="visible" shapeRendering="geometricPrecision">
          {/* Axes */}
          <line x1={x0} y1={padding / 2} x2={x0} y2={yBase} stroke="#475569" strokeWidth="2" />
          <line x1={x0} y1={yBase} x2={width - padding / 2} y2={yBase} stroke="#475569" strokeWidth="2" />

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

          {/* Points */}
          <circle cx={xU} cy={clampedYU} r="4" fill="#f59e0b" />
          <circle cx={xV} cy={clampedYV} r="4" fill="#f59e0b" />
        </svg>

        <DiagramLabel x={`${(x0 - 40) / width * 100}%`} y={`${(padding / 2 - 10) / height * 100}%`} text="v \\text{ (m s}^{-1}\\text{)}" />
        <DiagramLabel x={`${(width - padding / 2 - 10) / width * 100}%`} y={`${(yBase + 10) / height * 100}%`} text="t \\text{ (s)}" />

        <DiagramLabel x={`${(xU - 30) / width * 100}%`} y={`${(clampedYU - 15) / height * 100}%`} text="u" />

        <DiagramLabel x={`${(xV + 5) / width * 100}%`} y={`${(clampedYV - 15) / height * 100}%`} text="v" />

        <DiagramLabel x={`${(xU - 10) / width * 100}%`} y={`${(yBase + 5) / height * 100}%`} text="0" />
        <DiagramLabel x={`${(xV - 10) / width * 100}%`} y={`${(yBase + 5) / height * 100}%`} text="t" />
      </div>
    </div>
  );
};

export const M2VelocityTimeGraphEngine: React.FC = () => {
  const exampleOneDisplacement = 0.5 * (4 + 7.5) * 40;
  const exampleOneAcceleration = (7.5 - 4) / 40;
  const exampleTwoDisplacement = 0.5 * (0 + 25) * 120;
  const exampleTwoAcceleration = (25 - 0) / 120;

  return (
    <DiagramPanel
      title="Fig. Dynamic Velocity-Time Graph"
      analysis={
        <div className="space-y-4">
          <p className="text-sm text-zinc-400 italic">
            Velocity-time graphs are powerful tools for analyzing motion with constant acceleration.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3 bg-zinc-900/50 border border-zinc-800 rounded-lg">
              <h4 className="font-bold text-emerald-400 mb-2 text-sm uppercase tracking-wider">Example 1 Working</h4>
              <div className="space-y-2">
                <div className="text-center bg-zinc-925 p-2 rounded border border-zinc-800/60">
                  <MathText content={`s = \\frac{1}{2}(4+7.5)(40) = ${exampleOneDisplacement}\\mathrm{m}`} noMargin />
                </div>
                <div className="text-center bg-zinc-925 p-2 rounded border border-zinc-800/60">
                  <MathText content={`a = \\frac{7.5-4}{40} = ${exampleOneAcceleration.toFixed(4)}\\mathrm{m\\,s^{-2}}`} noMargin />
                </div>
              </div>
            </div>
            <div className="p-3 bg-zinc-900/50 border border-zinc-800 rounded-lg">
              <h4 className="font-bold text-amber-400 mb-2 text-sm uppercase tracking-wider">Example 2 Working</h4>
              <div className="space-y-2">
                <div className="text-center bg-zinc-925 p-2 rounded border border-zinc-800/60">
                  <MathText content={`s = \\frac{1}{2}(0+25)(120) = ${exampleTwoDisplacement}\\mathrm{m}`} noMargin />
                </div>
                <div className="text-center bg-zinc-925 p-2 rounded border border-zinc-800/60">
                  <MathText content={`a = \\frac{25-0}{120} = ${exampleTwoAcceleration.toFixed(3)}\\mathrm{m\\,s^{-2}}`} noMargin />
                </div>
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
