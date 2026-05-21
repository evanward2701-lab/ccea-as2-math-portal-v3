import React, { useState } from 'react';
import { DiagramPanel } from '../../DiagramPanel';
import { MathText } from '../../MathText';
import { cn } from '@/lib/utils';

export const S2CumulativeBoxPlotProjector: React.FC = () => {
  const [projectQuartiles, setProjectQuartiles] = useState(false);

  const n = 120; // Total frequency
  const q1Pos = n / 4; // 30
  const q2Pos = n / 2; // 60
  const q3Pos = (3 * n) / 4; // 90

  // Fixed approximate coordinates for the CF curve and quartile projections
  const svgWidth = 560;
  const svgHeight = 400;
  const padding = 50;

  // CF curve section
  const cfGraphHeight = (svgHeight / 2) - padding;
  const cfBaseY = svgHeight / 2 - 10; // Baseline for CF graph
  const cfMinY = padding; // Top of CF graph

  // Data points for CF curve and corresponding x-values for quartiles
  // These are illustrative and not derived from a precise function
  const minX = 70;
  const q1X = 155; // x-value on the data axis for Q1
  const q2X = 220; // x-value on the data axis for Median
  const q3X = 300; // x-value on the data axis for Q3
  const maxX = 420;

  // Corresponding y-values on the CF axis for Q1, Q2, Q3
  // Assuming CF axis from 0 to n (120)
  const cfYScale = (value: number) => cfBaseY - (value / n) * cfGraphHeight;

  const q1YCoord = cfYScale(q1Pos);
  const q2YCoord = cfYScale(q2Pos);
  const q3YCoord = cfYScale(q3Pos);

  // CF curve path (illustrative, not mathematically precise)
  const curvePath = `M ${minX} ${cfBaseY} C ${minX + 60} ${cfBaseY - 10}, ${q1X - 5} ${q1YCoord + 10}, ${q1X} ${q1YCoord} C ${q1X + 20} ${q1YCoord - 10}, ${q2X - 5} ${q2YCoord + 5}, ${q2X} ${q2YCoord} C ${q2X + 30} ${q2YCoord - 10}, ${q3X - 5} ${q3YCoord + 5}, ${q3X} ${q3YCoord} C ${q3X + 35} ${q3YCoord - 15}, ${maxX - 5} ${cfMinY + 5}, ${maxX} ${cfMinY}`;

  // Box plot Y-position
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
            <strong className="font-bold text-rose-400">CCEA Exam Pitfall:</strong> The whiskers of a box plot extend to the lowest and highest <strong>valid</strong> data values, not necessarily to the outlier fences (e.g., <MathText content="Q_1 - 1.5 \\text{IQR}" className="inline [&_p]:inline" />).
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

        <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-auto max-w-2xl" overflow="visible" shapeRendering="geometricPrecision">
          {/* CF Curve Axes */}
          <line x1={padding} y1={cfMinY} x2={padding} y2={cfBaseY} stroke="#475569" strokeWidth="2" />
          <line x1={padding} y1={cfBaseY} x2={svgWidth - padding} y2={cfBaseY} stroke="#475569" strokeWidth="2" />

          {/* CF Y-axis labels */}
          <text x={padding - 10} y={cfMinY + 5} textAnchor="end" fill="#94a3b8" fontSize="10">{n}</text>
          <text x={padding - 10} y={cfYScale(q3Pos) + 4} textAnchor="end" fill="#94a3b8" fontSize="10">{q3Pos}</text>
          <text x={padding - 10} y={cfYScale(q2Pos) + 4} textAnchor="end" fill="#94a3b8" fontSize="10">{q2Pos}</text>
          <text x={padding - 10} y={cfYScale(q1Pos) + 4} textAnchor="end" fill="#94a3b8" fontSize="10">{q1Pos}</text>
          <text x={padding - 10} y={cfBaseY + 4} textAnchor="end" fill="#94a3b8" fontSize="10">0</text>
          <foreignObject x={padding - 45} y={cfMinY - 10} width="40" height="30">
            <MathText content="\text{CF}" className="text-slate-400 text-xs" />
          </foreignObject>

          {/* CF Curve */}
          <path d={curvePath} fill="none" stroke="#f59e0b" strokeWidth="2.5" />

          {/* Box Plot X-axis */}
          <line x1={padding} y1={boxPlotYCenter} x2={svgWidth - padding} y2={boxPlotYCenter} stroke="#475569" strokeWidth="2" />
          <foreignObject x={svgWidth - padding - 10} y={boxPlotYCenter + 10} width="30" height="20">
            <MathText content="x" className="text-slate-400 text-xs" />
          </foreignObject>

          {/* X-axis ticks (illustrative) */}
          {[minX, q1X, q2X, q3X, maxX].map((xVal, i) => (
            <g key={`x-tick-${i}`}>
              <line x1={xVal} y1={cfBaseY} x2={xVal} y2={cfBaseY + 5} stroke="#475569" strokeWidth="1" />
              <line x1={xVal} y1={boxPlotYCenter} x2={xVal} y2={boxPlotYCenter - 5} stroke="#475569" strokeWidth="1" />
              <text x={xVal} y={boxPlotYCenter + 20} textAnchor="middle" fill="#94a3b8" fontSize="10">
                {i === 0 ? 'Min' : i === 1 ? 'Q1' : i === 2 ? 'Med' : i === 3 ? 'Q3' : 'Max'}
              </text>
            </g>
          ))}

          {projectQuartiles && (
            <>
              {/* Q1 Projection */}
              <polyline points={`${padding},${q1YCoord} ${q1X},${q1YCoord} ${q1X},${boxPlotYCenter}`} fill="none" stroke="#64748b" strokeDasharray="4 2" strokeWidth="1.5" className="transition-all duration-500" />
              <text x={q1X} y={q1YCoord - 10} textAnchor="middle" fill="#38bdf8" fontSize="12"><MathText content="Q_1" /></text>

              {/* Median Projection */}
              <polyline points={`${padding},${q2YCoord} ${q2X},${q2YCoord} ${q2X},${boxPlotYCenter}`} fill="none" stroke="#64748b" strokeDasharray="4 2" strokeWidth="1.5" className="transition-all duration-500" />
              <text x={q2X} y={q2YCoord - 10} textAnchor="middle" fill="#38bdf8" fontSize="12"><MathText content="\text{Median}" /></text>

              {/* Q3 Projection */}
              <polyline points={`${padding},${q3YCoord} ${q3X},${q3YCoord} ${q3X},${boxPlotYCenter}`} fill="none" stroke="#64748b" strokeDasharray="4 2" strokeWidth="1.5" className="transition-all duration-500" />
              <text x={q3X} y={q3YCoord - 10} textAnchor="middle" fill="#38bdf8" fontSize="12"><MathText content="Q_3" /></text>

              {/* Box Plot */}
              <rect x={q1X} y={boxPlotYCenter - 15} width={q3X - q1X} height="30" fill="#10b981" fillOpacity="0.2" stroke="#10b981" strokeWidth="2" className="transition-all duration-500" />
              <line x1={q2X} y1={boxPlotYCenter - 15} x2={q2X} y2={boxPlotYCenter + 15} stroke="#10b981" strokeWidth="2" className="transition-all duration-500" />

              {/* Whiskers (illustrative, connecting to min/max) */}
              <line x1={minX} y1={boxPlotYCenter} x2={q1X} y2={boxPlotYCenter} stroke="#10b981" strokeWidth="2" className="transition-all duration-500" />
              <line x1={maxX} y1={boxPlotYCenter} x2={q3X} y2={boxPlotYCenter} stroke="#10b981" strokeWidth="2" className="transition-all duration-500" />
              <line x1={minX} y1={boxPlotYCenter - 5} x2={minX} y2={boxPlotYCenter + 5} stroke="#10b981" strokeWidth="2" className="transition-all duration-500" />
              <line x1={maxX} y1={boxPlotYCenter - 5} x2={maxX} y2={boxPlotYCenter + 5} stroke="#10b981" strokeWidth="2" className="transition-all duration-500" />
            </>
          )}
        </svg>
      </div>
    </DiagramPanel>
  );
};