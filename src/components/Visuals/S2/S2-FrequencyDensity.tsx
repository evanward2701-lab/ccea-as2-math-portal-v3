import React, { useState } from 'react';
import { DiagramPanel } from '../../DiagramPanel';
import { MathText } from '../../MathText';
import { cn } from '@/lib/utils';

export const S2FrequencyDensityAreaEngine: React.FC = () => {
  const [isMerged, setIsMerged] = useState(false);

  const width = 560;
  const height = 320;
  const padding = 50;
  const baseY = height - padding;
  const graphHeight = baseY - padding;

  // Data for bars
  // Bar A: width 10, frequency 30, density 3
  // Bar B: width 10, frequency 10, density 1
  // Merged: width 20, total frequency 40, density 2
  const barData = [
    { id: 'A', limitL: 0, limitU: 10, freq: 30, density: 3 },
    { id: 'B', limitL: 10, limitU: 20, freq: 10, density: 1 },
  ];

  const mergedData = { limitL: 0, limitU: 20, freq: 40, density: 2 };

  // Scaling factors
  const maxDensity = 3.5; // Max density for scaling Y axis
  const maxClassValue = 20; // Max class value for scaling X axis
  const scaleX = (width - 2 * padding) / maxClassValue;
  const scaleY = graphHeight / maxDensity;

  return (
    <DiagramPanel
      title="Fig. Frequency Density Area Engine"
      analysis={
        <div className="space-y-4">
          <p className="text-sm text-slate-400 italic">
            In a histogram, the area of each bar represents the frequency. When classes are merged, the total frequency (area) remains constant, but the frequency density (height) adjusts.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3 bg-slate-900/50 border border-slate-800 rounded-lg">
              <h4 className="font-bold text-sky-400 mb-2 text-sm uppercase tracking-wider">Frequency Density</h4>
              <div className="text-center bg-slate-950 p-2 rounded border border-slate-800/60">
                <MathText content="\text{FD} = \frac{\text{Frequency}}{\text{Class Width}}" />
              </div>
            </div>
            <div className="p-3 bg-slate-900/50 border border-slate-800 rounded-lg">
              <h4 className="font-bold text-emerald-400 mb-2 text-sm uppercase tracking-wider">Frequency (Area)</h4>
              <div className="text-center bg-slate-950 p-2 rounded border border-slate-800/60">
                <MathText content="\text{Frequency} = \text{FD} \times \text{Class Width}" />
              </div>
            </div>
          </div>
          <div className="p-3 bg-rose-950/30 border border-rose-900/40 rounded-lg text-sm text-rose-300">
            <strong className="font-bold text-rose-400">CCEA Exam Pitfall:</strong> For grouped continuous data with unequal class widths, you must always plot <strong>frequency density</strong> on the y-axis, not frequency.
          </div>
        </div>
      }
    >
      <div className="w-full flex flex-col items-center">
        <div className="flex space-x-2 mb-8 p-1 bg-slate-900 border border-slate-800 rounded-lg">
          <button
            onClick={() => setIsMerged(false)}
            className={cn(
              "px-4 py-1.5 text-xs font-bold rounded-md transition-colors",
              !isMerged
                ? 'bg-amber-500 text-slate-950'
                : 'bg-transparent text-slate-400 hover:bg-slate-800'
            )}
          >
            Separate Classes
          </button>
          <button
            onClick={() => setIsMerged(true)}
            className={cn(
              "px-4 py-1.5 text-xs font-bold rounded-md transition-colors",
              isMerged
                ? 'bg-emerald-500 text-slate-950'
                : 'bg-transparent text-slate-400 hover:bg-slate-800'
            )}
          >
            Merged Class
          </button>
        </div>

        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto max-w-2xl" overflow="visible" shapeRendering="geometricPrecision">
          {/* Axes */}
          <line x1={padding} y1={baseY} x2={width - padding / 2} y2={baseY} stroke="#475569" strokeWidth="2" />
          <line x1={padding} y1={baseY} x2={padding} y2={padding} stroke="#475569" strokeWidth="2" />

          {/* Axis Labels */}
          <foreignObject x={padding - 45} y={padding - 10} width="40" height="30">
            <MathText content="\text{FD}" className="text-slate-400 text-xs" />
          </foreignObject>
          <foreignObject x={width - padding / 2 - 10} y={baseY + 10} width="30" height="20">
            <MathText content="x" className="text-slate-400 text-xs" />
          </foreignObject>

          {/* Y-axis ticks */}
          {[1, 2, 3].map(val => (
            <g key={`y-tick-${val}`}>
              <line x1={padding - 5} y1={baseY - val * scaleY} x2={padding} y2={baseY - val * scaleY} stroke="#475569" strokeWidth="1" />
              <text x={padding - 10} y={baseY - val * scaleY + 4} textAnchor="end" fill="#94a3b8" fontSize="10">{val}</text>
            </g>
          ))}
          <text x={padding - 10} y={baseY + 4} textAnchor="end" fill="#94a3b8" fontSize="10">0</text>

          {/* X-axis ticks */}
          {[0, 10, 20].map(val => (
            <g key={`x-tick-${val}`}>
              <line x1={padding + val * scaleX} y1={baseY} x2={padding + val * scaleX} y2={baseY + 5} stroke="#475569" strokeWidth="1" />
              <text x={padding + val * scaleX} y={baseY + 20} textAnchor="middle" fill="#94a3b8" fontSize="10">{val}</text>
            </g>
          ))}

          {isMerged ? (
            // Merged bar
            <g>
              <rect
                x={padding + mergedData.limitL * scaleX}
                y={baseY - mergedData.density * scaleY}
                width={(mergedData.limitU - mergedData.limitL) * scaleX}
                height={mergedData.density * scaleY}
                className="transition-all duration-500 ease-in-out fill-emerald-500/20 stroke-emerald-400"
                strokeWidth="2"
              />
              <foreignObject x={padding + mergedData.limitL * scaleX + 5} y={baseY - mergedData.density * scaleY + 5} width="100" height="20">
                <MathText content={`F = ${mergedData.freq}`} className="text-emerald-400 text-xs" />
              </foreignObject>
              <foreignObject x={padding + mergedData.limitL * scaleX + 5} y={baseY - mergedData.density * scaleY + 25} width="100" height="20">
                <MathText content={`FD = ${mergedData.density}`} className="text-emerald-400 text-xs" />
              </foreignObject>
            </g>
          ) : (
            // Separate bars
            barData.map((bar, i) => (
              <g key={bar.id}>
                <rect
                  x={padding + bar.limitL * scaleX}
                  y={baseY - bar.density * scaleY}
                  width={(bar.limitU - bar.limitL) * scaleX}
                  height={bar.density * scaleY}
                  className="transition-all duration-500 ease-in-out fill-amber-500/20 stroke-amber-400"
                  strokeWidth="2"
                />
                <foreignObject x={padding + bar.limitL * scaleX + 5} y={baseY - bar.density * scaleY + 5} width="100" height="20">
                  <MathText content={`F = ${bar.freq}`} className="text-amber-400 text-xs" />
                </foreignObject>
                <foreignObject x={padding + bar.limitL * scaleX + 5} y={baseY - bar.density * scaleY + 25} width="100" height="20">
                  <MathText content={`FD = ${bar.density}`} className="text-amber-400 text-xs" />
                </foreignObject>
              </g>
            ))
          )}
        </svg>
      </div>
    </DiagramPanel>
  );
};