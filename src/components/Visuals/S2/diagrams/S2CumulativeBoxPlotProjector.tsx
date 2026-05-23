import React, { useState } from 'react';
import { MathText } from '../../../MathText';
import { DiagramPanel } from '../../../DiagramPanel';
import { DiagramLabel } from '../../../diagrams/primitives/DiagramLabel';

export const S2CumulativeBoxPlotProjector: React.FC = () => {
  const [projectQuartiles, setProjectQuartiles] = useState(false);

  const n = 120; // Total frequency
  const q1Pos = n / 4; // 30
  const q2Pos = n / 2; // 60
  const q3Pos = (3 * n) / 4; // 90

  const svgWidth = 560;
  const svgHeight = 400;
  const padding = 50;

  const cfGraphHeight = (svgHeight / 2) - padding;
  const cfBaseY = svgHeight / 2 - 10;
  const cfMinY = padding;

  const minX = 70;
  const q1X = 155;
  const q2X = 220;
  const q3X = 300;
  const maxX = 420;

  const cfYScale = (value: number) => cfBaseY - (value / n) * cfGraphHeight;

  const q1YCoord = cfYScale(q1Pos);
  const q2YCoord = cfYScale(q2Pos);
  const q3YCoord = cfYScale(q3Pos);

  const curvePath = `M ${minX} ${cfBaseY} C ${minX + 60} ${cfBaseY - 10}, ${q1X - 5} ${q1YCoord + 10}, ${q1X} ${q1YCoord} C ${q1X + 20} ${q1YCoord - 10}, ${q2X - 5} ${q2YCoord + 5}, ${q2X} ${q2YCoord} C ${q2X + 30} ${q2YCoord - 10}, ${q3X - 5} ${q3YCoord + 5}, ${q3X} ${q3YCoord} C ${q3X + 35} ${q3YCoord - 15}, ${maxX - 5} ${cfMinY + 5}, ${maxX} ${cfMinY}`;

  const boxPlotYCenter = svgHeight - padding;

  return (
    <DiagramPanel
      title="Fig. Cumulative Frequency to Box Plot Projector"
      analysis={
        <div className="space-y-4">
          <p className="text-sm text-slate-400 italic">
            The cumulative frequency curve allows us to estimate quartiles and the median, which are then used to construct a box plot.
          </p>
          <div className="p-3 bg-slate-900/50 border border-slate-800 rounded-lg">
            <h4 className="font-bold text-sky-400 mb-2 text-sm uppercase tracking-wider">Quartile Positions</h4>
            <div className="grid grid-cols-3 gap-2 text-center bg-slate-950 p-2 rounded border border-slate-800/60">
              <div><MathText content={`Q_1 = ${q1Pos}`} className="text-xs" /></div>
              <div><MathText content={`\\text{Median} = ${q2Pos}`} className="text-xs" /></div>
              <div><MathText content={`Q_3 = ${q3Pos}`} className="text-xs" /></div>
            </div>
          </div>
          <div className="p-3 bg-rose-950/30 border border-rose-900/40 rounded-lg text-sm text-rose-300">
            <strong className="font-bold text-rose-400">CCEA Exam Pitfall:</strong> The whiskers of a box plot extend to the lowest and highest <strong>valid</strong> data values, not necessarily to the outlier fences.
          </div>
        </div>
      }
    >
      <div className="w-full flex flex-col items-center">
        <button
          onClick={() => setProjectQuartiles(prev => !prev)}
          className="px-6 py-2 mb-8 bg-sky-600 text-white font-bold rounded-lg hover:bg-sky-500 transition-colors"
        >
          {projectQuartiles ? 'Reset View' : 'Project Quartiles'}
        </button>

        <div className="relative w-full aspect-56/40 max-w-2xl mx-auto">
          <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="absolute inset-0 w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" overflow="visible">
            {/* CF Curve Axes */}
            <line x1={padding} y1={cfMinY} x2={padding} y2={cfBaseY} stroke="#475569" strokeWidth="2" />
            <line x1={padding} y1={cfBaseY} x2={svgWidth - padding} y2={cfBaseY} stroke="#475569" strokeWidth="2" />

            {/* CF Curve */}
            <path d={curvePath} fill="none" stroke="#f59e0b" strokeWidth="2.5" />

            {/* Box Plot X-axis */}
            <line x1={padding} y1={boxPlotYCenter} x2={svgWidth - padding} y2={boxPlotYCenter} stroke="#475569" strokeWidth="2" />

            {/* X-axis ticks */}
            {[minX, q1X, q2X, q3X, maxX].map((xVal, i) => (
              <g key={`x-tick-${i}`}>
                <line x1={xVal} y1={cfBaseY} x2={xVal} y2={cfBaseY + 5} stroke="#475569" strokeWidth="1" />
                <line x1={xVal} y1={boxPlotYCenter} x2={xVal} y2={boxPlotYCenter - 5} stroke="#475569" strokeWidth="1" />
              </g>
            ))}

            {projectQuartiles && (
              <>
                {/* Q1 Projection */}
                <polyline points={`${padding},${q1YCoord} ${q1X},${q1YCoord} ${q1X},${boxPlotYCenter}`} fill="none" stroke="#64748b" strokeDasharray="4 2" strokeWidth="1.5" className="transition-all duration-500" />
                {/* Median Projection */}
                <polyline points={`${padding},${q2YCoord} ${q2X},${q2YCoord} ${q2X},${boxPlotYCenter}`} fill="none" stroke="#64748b" strokeDasharray="4 2" strokeWidth="1.5" className="transition-all duration-500" />
                {/* Q3 Projection */}
                <polyline points={`${padding},${q3YCoord} ${q3X},${q3YCoord} ${q3X},${boxPlotYCenter}`} fill="none" stroke="#64748b" strokeDasharray="4 2" strokeWidth="1.5" className="transition-all duration-500" />

                {/* Box Plot */}
                <rect x={q1X} y={boxPlotYCenter - 15} width={q3X - q1X} height="30" fill="#10b981" fillOpacity="0.2" stroke="#10b981" strokeWidth="2" className="transition-all duration-500" />
                <line x1={q2X} y1={boxPlotYCenter - 15} x2={q2X} y2={boxPlotYCenter + 15} stroke="#10b981" strokeWidth="2" className="transition-all duration-500" />

                {/* Whiskers */}
                <line x1={minX} y1={boxPlotYCenter} x2={q1X} y2={boxPlotYCenter} stroke="#10b981" strokeWidth="2" className="transition-all duration-500" />
                <line x1={maxX} y1={boxPlotYCenter} x2={q3X} y2={boxPlotYCenter} stroke="#10b981" strokeWidth="2" className="transition-all duration-500" />
                <line x1={minX} y1={boxPlotYCenter - 5} x2={minX} y2={boxPlotYCenter + 5} stroke="#10b981" strokeWidth="2" className="transition-all duration-500" />
                <line x1={maxX} y1={boxPlotYCenter - 5} x2={maxX} y2={boxPlotYCenter + 5} stroke="#10b981" strokeWidth="2" className="transition-all duration-500" />
              </>
            )}
          </svg>

          {/* Labels */}
          <DiagramLabel position={{ left: 'padding', top: `${(cfMinY - 15) / svgHeight * 100}%` }}>
            <MathText content="\text{CF}" className="text-slate-400 text-xs" />
          </DiagramLabel>

          <DiagramLabel position={{ left: 'padding', top: `${cfYScale(n) / svgHeight * 100}%` }} className="-translate-x-full pr-2">
            <span className="text-slate-400 text-[10px]">{n}</span>
          </DiagramLabel>
          <DiagramLabel position={{ left: 'padding', top: `${cfYScale(q3Pos) / svgHeight * 100}%` }} className="-translate-x-full pr-2">
            <span className="text-slate-400 text-[10px]">{q3Pos}</span>
          </DiagramLabel>
          <DiagramLabel position={{ left: 'padding', top: `${cfYScale(q2Pos) / svgHeight * 100}%` }} className="-translate-x-full pr-2">
            <span className="text-slate-400 text-[10px]">{q2Pos}</span>
          </DiagramLabel>
          <DiagramLabel position={{ left: 'padding', top: `${cfYScale(q1Pos) / svgHeight * 100}%` }} className="-translate-x-full pr-2">
            <span className="text-slate-400 text-[10px]">{q1Pos}</span>
          </DiagramLabel>

          <DiagramLabel position={{ left: `${(svgWidth - padding) / svgWidth * 100}%`, top: `${(boxPlotYCenter + 10) / svgHeight * 100}%` }}>
            <MathText content="x" className="text-slate-400 text-xs" />
          </DiagramLabel>

          {[minX, q1X, q2X, q3X, maxX].map((xVal, i) => (
            <DiagramLabel key={`lbl-x-${i}`} position={{ left: `${xVal / svgWidth * 100}%`, top: `${(boxPlotYCenter + 20) / svgHeight * 100}%` }} className="-translate-x-1/2">
              <span className="text-slate-400 text-[10px]">
                {i === 0 ? 'Min' : i === 1 ? 'Q1' : i === 2 ? 'Med' : i === 3 ? 'Q3' : 'Max'}
              </span>
            </DiagramLabel>
          ))}

          {projectQuartiles && (
            <>
              <DiagramLabel position={{ left: `${q1X / svgWidth * 100}%`, top: `${(q1YCoord - 20) / svgHeight * 100}%` }} className="-translate-x-1/2">
                <MathText content="Q_1" className="text-[#38bdf8] text-xs" />
              </DiagramLabel>
              <DiagramLabel position={{ left: `${q2X / svgWidth * 100}%`, top: `${(q2YCoord - 20) / svgHeight * 100}%` }} className="-translate-x-1/2">
                <MathText content="\text{Median}" className="text-[#38bdf8] text-xs" />
              </DiagramLabel>
              <DiagramLabel position={{ left: `${q3X / svgWidth * 100}%`, top: `${(q3YCoord - 20) / svgHeight * 100}%` }} className="-translate-x-1/2">
                <MathText content="Q_3" className="text-[#38bdf8] text-xs" />
              </DiagramLabel>
            </>
          )}
        </div>
      </div>
    </DiagramPanel>
  );
};
