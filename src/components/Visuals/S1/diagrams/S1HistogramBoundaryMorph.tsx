import React, { useState } from 'react';
import { MathText } from '../../../MathText';
import { DiagramPanel } from '../../../DiagramPanel';

const data = [
  { limitL: 10, limitU: 14, freq: 5, boundL: 9.5, boundU: 14.5 },
  { limitL: 15, limitU: 19, freq: 8, boundL: 14.5, boundU: 19.5 },
  { limitL: 20, limitU: 24, freq: 4, boundL: 19.5, boundU: 24.5 },
];

export const S1HistogramBoundaryMorph: React.FC = () => {
  const [isContinuous, setIsContinuous] = useState(false);

  const width = 520;
  const height = 280;
  const baseY = 220;
  const scaleX = 18;
  const scaleY = 16;
  const offsetX = -130;

  return (
    <DiagramPanel
      title="Fig. Histogram Class Boundaries"
      analysis={
        <div className="space-y-4">
          <div className="p-3 bg-slate-900/50 border border-slate-800 rounded-lg">
            <h4 className="font-bold text-sky-400 mb-2 text-sm uppercase tracking-wider">Class Width</h4>
            <p className="text-sm text-slate-300 leading-relaxed mb-2">For continuous data, the class width is the difference between the upper and lower boundaries.</p>
            <div className="text-center bg-slate-950 p-2 rounded border border-slate-800/60">
              <MathText content="\text{Width} = \text{Upper Boundary} - \text{Lower Boundary}" />
            </div>
          </div>
          <div className="p-3 bg-rose-950/30 border border-rose-900/40 rounded-lg text-sm text-rose-300">
            <strong className="font-bold text-rose-400">CCEA Exam Pitfall:</strong> For continuous grouped data, class limits like '10-14' and '15-19' must be converted to true boundaries '9.5-14.5' and '14.5-19.5'. The class width for '10-14' is 5, not 4.
          </div>
        </div>
      }
    >
      <div className="w-full flex flex-col items-center">
        <div className="flex space-x-2 mb-8 p-1 bg-slate-900 border border-slate-800 rounded-lg">
          <button
            onClick={() => setIsContinuous(false)}
            className={`px-4 py-1.5 text-xs font-bold rounded-md transition-colors ${
              !isContinuous
                ? 'bg-amber-500 text-slate-950'
                : 'bg-transparent text-slate-400 hover:bg-slate-800'
            }`}
          >
            Class Limits
          </button>
          <button
            onClick={() => setIsContinuous(true)}
            className={`px-4 py-1.5 text-xs font-bold rounded-md transition-colors ${
              isContinuous
                ? 'bg-emerald-500 text-slate-950'
                : 'bg-transparent text-slate-400 hover:bg-slate-800'
            }`}
          >
            Class Boundaries
          </button>
        </div>

        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto max-w-2xl" overflow="visible" shapeRendering="geometricPrecision">
          {/* Axes */}
          <line x1="20" y1={baseY} x2={width - 20} y2={baseY} stroke="#475569" strokeWidth="2" />
          <line x1="20" y1={baseY} x2="20" y2="20" stroke="#475569" strokeWidth="2" />
          <text x="10" y="20" fill="#94a3b8" fontSize="12" textAnchor="middle">f</text>
          <text x={width - 10} y={baseY + 5} fill="#94a3b8" fontSize="12" textAnchor="middle">x</text>

          {/* Bars */}
          {data.map((rect, i) => {
            const currentL = isContinuous ? rect.boundL : rect.limitL;
            const currentU = isContinuous ? rect.boundU : rect.limitU;
            const barWidth = (currentU - currentL) * scaleX;
            const xPos = currentL * scaleX + offsetX;
            const barHeight = rect.freq * scaleY;

            return (
              <g key={i}>
                <rect
                  x={xPos}
                  y={baseY - barHeight}
                  width={barWidth}
                  height={barHeight}
                  className={`transition-all duration-500 ease-in-out ${isContinuous ? "fill-emerald-500/20 stroke-emerald-400" : "fill-amber-500/20 stroke-amber-400"}`}
                  strokeWidth="2"
                />
                <text x={xPos + barWidth / 2} y={baseY - barHeight - 8} textAnchor="middle" fill="#e2e8f0" fontSize="12" fontWeight="bold">
                  {rect.freq}
                </text>
              </g>
            );
          })}

          {/* Axis Ticks and Labels */}
          {[9.5, 14.5, 19.5, 24.5].map(val => {
            const x = val * scaleX + offsetX;
            return (
              <g key={val}>
                <line x1={x} y1={baseY} x2={x} y2={baseY + 5} stroke="#64748b" strokeWidth="1.5" />
                <text x={x} y={baseY + 20} textAnchor="middle" fill="#94a3b8" fontSize="12">
                  {val}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </DiagramPanel>
  );
};
