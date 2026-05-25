import React, { useState } from 'react';
import { MathText, MathInline } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { DiagramLabel } from '@/core/diagram-engine/primitives/DiagramLabel';

export const S2CumulativeBoxPlotProjector: React.FC = () => {
  const [n, setN] = useState(100);

  const q1Pos = n * 0.25;
  const q2Pos = n * 0.50;
  const q3Pos = n * 0.75;

  const q1Val = 20;
  const q2Val = 35;
  const q3Val = 48;

  const svgWidth = 560;
  const svgHeight = 440;
  const padding = 60;

  const cfGraphHeight = (svgHeight / 2) - padding;
  const cfBaseY = svgHeight / 2;
  const cfMinY = padding;

  const cfYScale = (val: number) => cfBaseY - (val / n) * cfGraphHeight;

  const boxPlotYCenter = svgHeight - padding - 40;
  const q1X = padding + (q1Val / 80) * (svgWidth - 2 * padding);
  const q2X = padding + (q2Val / 80) * (svgWidth - 2 * padding);
  const q3X = padding + (q3Val / 80) * (svgWidth - 2 * padding);

  return (
    <DiagramPanel
      title="Fig. CF to Box Plot Projection"
      analysis={
        <div className="grid gap-4 md:grid-cols-2 w-full max-w-5xl mx-auto">
          <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl">
            <h4 className="font-bold text-zinc-400 mb-2 text-sm uppercase tracking-wider text-center">Quartile Positions</h4>
            <div className="flex flex-col items-center gap-1">
              <MathInline content={`Q_1 = ${q1Pos}`} className="text-sm text-zinc-300" />
              <MathInline content={`\\text{Median} = ${q2Pos}`} className="text-sm text-zinc-300" />
              <MathInline content={`Q_3 = ${q3Pos}`} className="text-sm text-zinc-300" />
            </div>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-800/30 p-4 text-base text-zinc-300 leading-relaxed">
            Project horizontally from the <span className="text-amber-400 font-semibold">Cumulative Frequency</span> axis to the curve, then vertically down to the <span className="text-emerald-400 font-semibold">Box Plot</span> axis.
          </div>
        </div>
      }
    >
      <div className="w-full flex flex-col items-center">
        <div className="relative w-full aspect-[56/44] max-w-2xl mx-auto rounded-xl overflow-hidden border border-zinc-800/60 bg-zinc-850 shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
          <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="absolute inset-0 w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision">
            {/* Grid */}
            <path d={`M ${padding} ${cfMinY} V ${cfBaseY} H ${svgWidth - padding}`} stroke="#3f3f46" strokeWidth="2" />
            <path d={`M ${padding} ${boxPlotYCenter} H ${svgWidth - padding}`} stroke="#3f3f46" strokeWidth="2" />

            {/* Projection Lines */}
            {[q1Pos, q2Pos, q3Pos].map((pos, i) => {
              const y = cfYScale(pos);
              const x = [q1X, q2X, q3X][i];
              return (
                <g key={i}>
                  <line x1={padding} y1={y} x2={x} y2={y} stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.6" />
                  <line x1={x} y1={y} x2={x} y2={boxPlotYCenter} stroke="#10b981" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.6" />
                </g>
              );
            })}

            {/* Curve Sketch */}
            <path d={`M ${padding} ${cfBaseY} Q ${q2X} ${cfYScale(n * 0.1)}, ${svgWidth - padding} ${cfMinY}`} stroke="#a1a1aa" strokeWidth="2" fill="none" opacity="0.4" />

            {/* Box Plot Elements */}
            <rect x={q1X} y={boxPlotYCenter - 20} width={q3X - q1X} height={40} fill="#10b981" fillOpacity="0.1" stroke="#10b981" strokeWidth="1.5" />
            <line x1={q2X} y1={boxPlotYCenter - 20} x2={q2X} y2={boxPlotYCenter + 20} stroke="#10b981" strokeWidth="2" />
          </svg>

          <DiagramLabel x={`${padding / svgWidth * 100}%`} y={`${(cfMinY - 20) / svgHeight * 100}%`} anchor="center">
            <MathInline content="\text{CF}" className="text-zinc-500 text-xs font-bold" />
          </DiagramLabel>

          <DiagramLabel x={`${padding / svgWidth * 100}%`} y={`${cfYScale(n) / svgHeight * 100}%`} anchor="end" offsetX="-8px">
            <span className="text-zinc-400 text-2.5 font-mono">{n}</span>
          </DiagramLabel>

          <DiagramLabel x={`${(svgWidth - padding) / svgWidth * 100}%`} y={`${(boxPlotYCenter + 15) / svgHeight * 100}%`} anchor="center">
            <MathInline content="x" className="text-zinc-500 text-xs font-bold" />
          </DiagramLabel>

          <DiagramLabel x={`${q1X / svgWidth * 100}%`} y={`${(boxPlotYCenter + 35) / svgHeight * 100}%`} anchor="center">
            <MathInline content="Q_1" className="text-zinc-500 text-2.5 font-bold" />
          </DiagramLabel>
          <DiagramLabel x={`${q2X / svgWidth * 100}%`} y={`${(boxPlotYCenter + 35) / svgHeight * 100}%`} anchor="center">
            <MathInline content="\text{Med}" className="text-zinc-500 text-2.5 font-bold" />
          </DiagramLabel>
          <DiagramLabel x={`${q3X / svgWidth * 100}%`} y={`${(boxPlotYCenter + 35) / svgHeight * 100}%`} anchor="center">
            <MathInline content="Q_3" className="text-zinc-500 text-2.5 font-bold" />
          </DiagramLabel>
        </div>
      </div>
    </DiagramPanel>
  );
};
