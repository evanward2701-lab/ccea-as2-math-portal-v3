import React, { useState } from 'react';
import { MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { DiagramLabel } from '@/core/diagram-engine/primitives/DiagramLabel';
import { cn } from '@/core/utils/cn';

export const S2FrequencyDensityAreaEngine: React.FC = () => {
  const [isMerged, setIsMerged] = useState(false);

  const width = 560;
  const height = 320;
  const padding = 50;
  const baseY = height - padding;
  const graphHeight = baseY - padding;

  const barData = [
    { id: 'A', limitL: 0, limitU: 10, freq: 30, density: 3 },
    { id: 'B', limitL: 10, limitU: 20, freq: 10, density: 1 },
  ];

  const mergedData = { limitL: 0, limitU: 20, freq: 40, density: 2 };

  const maxDensity = 3.5;
  const maxClassValue = 20;
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

        <div className="relative w-full aspect-56/32 max-w-2xl mx-auto">
          <svg viewBox={`0 0 ${width} ${height}`} className="absolute inset-0 w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" overflow="visible">
            {/* Axes */}
            <line x1={padding} y1={baseY} x2={width - padding / 2} y2={baseY} stroke="#475569" strokeWidth="2" />
            <line x1={padding} y1={baseY} x2={padding} y2={padding} stroke="#475569" strokeWidth="2" />

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
              <rect
                x={padding + mergedData.limitL * scaleX}
                y={baseY - mergedData.density * scaleY}
                width={(mergedData.limitU - mergedData.limitL) * scaleX}
                height={mergedData.density * scaleY}
                className="transition-all duration-500 ease-in-out fill-emerald-500/20 stroke-emerald-400"
                strokeWidth="2"
              />
            ) : (
              barData.map((bar) => (
                <rect
                  key={bar.id}
                  x={padding + bar.limitL * scaleX}
                  y={baseY - bar.density * scaleY}
                  width={(bar.limitU - bar.limitL) * scaleX}
                  height={bar.density * scaleY}
                  className="transition-all duration-500 ease-in-out fill-amber-500/20 stroke-amber-400"
                  strokeWidth="2"
                />
              ))
            )}
          </svg>

          <DiagramLabel position={{ left: 'padding', top: `${(padding - 15) / height * 100}%` }} className="-translate-x-1/2">
            <MathText content="\text{FD}" className="text-slate-400 text-xs" />
          </DiagramLabel>
          <DiagramLabel position={{ left: `${(width - padding / 2) / width * 100}%`, top: `${(baseY + 10) / height * 100}%` }}>
            <MathText content="x" className="text-slate-400 text-xs" />
          </DiagramLabel>

          {isMerged ? (
            <DiagramLabel position={{ left: `${(padding + mergedData.limitL * scaleX + 5) / width * 100}%`, top: `${(baseY - mergedData.density * scaleY + 10) / height * 100}%` }}>
              <div className="flex flex-col gap-1">
                <MathText content={`F = ${mergedData.freq}`} className="text-emerald-400 text-xs" />
                <MathText content={`FD = ${mergedData.density}`} className="text-emerald-400 text-xs" />
              </div>
            </DiagramLabel>
          ) : (
            barData.map(bar => (
              <DiagramLabel key={`lbl-${bar.id}`} position={{ left: `${(padding + bar.limitL * scaleX + 5) / width * 100}%`, top: `${(baseY - bar.density * scaleY + 10) / height * 100}%` }}>
                <div className="flex flex-col gap-1">
                  <MathText content={`F = ${bar.freq}`} className="text-amber-400 text-xs" />
                  <MathText content={`FD = ${bar.density}`} className="text-amber-400 text-xs" />
                </div>
              </DiagramLabel>
            ))
          )}
        </div>
      </div>
    </DiagramPanel>
  );
};
