import React, { useState } from 'react';
import { DiagramPanel } from '../../DiagramPanel';
import { MathText } from '../../MathText';
import { cn } from '@/lib/utils';

export const S2OutlierThresholdSandbox: React.FC = () => {
  const [candidateValue, setCandidateValue] = useState(50);

  // Fixed summary values for the box plot
  const q1 = 20;
  const median = 30;
  const q3 = 36;
  const iqr = q3 - q1; // 16
  const lowerFence = q1 - 1.5 * iqr; // 20 - 1.5 * 16 = 20 - 24 = -4
  const upperFence = q3 + 1.5 * iqr; // 36 + 1.5 * 16 = 36 + 24 = 60

  // Fixed data points (excluding the candidate for now)
  const fixedData = [5, 10, 15, 20, 25, 30, 32, 34, 36, 40, 45, 50, 52];
  const lowestValid = Math.min(...fixedData.filter(d => d >= lowerFence)); // 5
  const highestValid = Math.max(...fixedData.filter(d => d <= upperFence)); // 52

  const isOutlier = candidateValue > upperFence;

  // SVG dimensions and scaling
  const svgWidth = 600;
  const svgHeight = 200;
  const padding = 50;
  const graphWidth = svgWidth - 2 * padding;
  const yAxisCenter = svgHeight / 2;

  // X-axis scale (mapping data values to SVG coordinates)
  const minDataValue = -10; // Extend range to show lower fence
  const maxDataValue = 75;  // Extend range to show upper fence and candidate
  const scaleFactor = graphWidth / (maxDataValue - minDataValue);
  const xScale = (value: number) => padding + (value - minDataValue) * scaleFactor;

  // Determine whisker end points based on candidate value
  let whiskerEndRight = xScale(highestValid);
  let candidateDotX = xScale(candidateValue);

  if (!isOutlier) {
    whiskerEndRight = xScale(Math.max(highestValid, candidateValue));
  }

  return (
    <DiagramPanel
      title="Fig. Dynamic Outlier Threshold Sandbox"
      analysis={
        <div className="space-y-4">
          <p className="text-sm text-slate-400 italic">
            Explore how the 1.5 IQR rule defines outlier boundaries and how box plot whiskers adapt to the highest/lowest non-outlier values.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3 bg-slate-900/50 border border-slate-800 rounded-lg">
              <h4 className="font-bold text-sky-400 mb-2 text-sm uppercase tracking-wider">IQR</h4>
              <div className="text-center bg-slate-950 p-2 rounded border border-slate-800/60">
                <MathText content={`\\text{IQR} = Q_3 - Q_1 = ${iqr}`} />
              </div>
            </div>
            <div className="p-3 bg-slate-900/50 border border-slate-800 rounded-lg">
              <h4 className="font-bold text-amber-400 mb-2 text-sm uppercase tracking-wider">Outlier Fences</h4>
              <div className="text-center bg-slate-950 p-2 rounded border border-slate-800/60">
                <MathText content={`Q_1 - 1.5\\text{IQR} = ${lowerFence}`} />
                <MathText content={`Q_3 + 1.5\\text{IQR} = ${upperFence}`} />
              </div>
            </div>
          </div>
          <div className="p-3 bg-rose-950/30 border border-rose-900/40 rounded-lg text-sm text-rose-300">
            <strong className="font-bold text-rose-400">CCEA Exam Pitfall:</strong> The outlier <strong>fence</strong> is a theoretical boundary. The box plot whisker extends only to the most extreme <strong>valid data value</strong> within that fence, not necessarily to the fence itself.
          </div>
        </div>
      }
    >
      <div className="w-full flex flex-col items-center">
        <div className="w-full max-w-lg flex items-center gap-3 mb-8 rounded-lg border border-slate-800 bg-slate-900/50 p-3">
          <label htmlFor="candidate-slider" className="text-sm font-medium text-slate-300 whitespace-nowrap">
            Candidate Value
          </label>
          <input
            id="candidate-slider"
            type="range"
            min="45"
            max="70"
            step="1"
            value={candidateValue}
            onChange={(e) => setCandidateValue(Number(e.target.value))}
            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
          />
          <span className="text-sm font-mono text-sky-400 w-12 text-right">{candidateValue}</span>
        </div>

        <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-auto max-w-3xl" overflow="visible" shapeRendering="geometricPrecision">
          {/* Horizontal Axis */}
          <line x1={xScale(minDataValue)} y1={yAxisCenter} x2={xScale(maxDataValue)} y2={yAxisCenter} stroke="#475569" strokeWidth="2" />

          {/* Axis Ticks and Labels */}
          {[minDataValue, q1, median, q3, upperFence, maxDataValue].map((val, i) => (
            <g key={`tick-${val}`}>
              <line x1={xScale(val)} y1={yAxisCenter - 5} x2={xScale(val)} y2={yAxisCenter + 5} stroke="#64748b" strokeWidth="1" />
              <text x={xScale(val)} y={yAxisCenter + 20} textAnchor="middle" fill="#94a3b8" fontSize="10">
                {i === 0 ? '' : i === 4 ? '' : val}
              </text>
            </g>
          ))}
          <text x={xScale(q1)} y={yAxisCenter + 35} textAnchor="middle" fill="#94a3b8" fontSize="12"><MathText content="Q_1" /></text>
          <text x={xScale(median)} y={yAxisCenter + 35} textAnchor="middle" fill="#94a3b8" fontSize="12"><MathText content="\text{Median}" /></text>
          <text x={xScale(q3)} y={yAxisCenter + 35} textAnchor="middle" fill="#94a3b8" fontSize="12"><MathText content="Q_3" /></text>


          {/* Outlier Fences */}
          <line x1={xScale(lowerFence)} y1={yAxisCenter - 30} x2={xScale(lowerFence)} y2={yAxisCenter + 30} stroke="#f43f5e" strokeDasharray="4 2" strokeWidth="1.5" />
          <text x={xScale(lowerFence)} y={yAxisCenter - 35} textAnchor="middle" fill="#f43f5e" fontSize="10">Lower Fence</text>
          <line x1={xScale(upperFence)} y1={yAxisCenter - 30} x2={xScale(upperFence)} y2={yAxisCenter + 30} stroke="#f43f5e" strokeDasharray="4 2" strokeWidth="1.5" />
          <text x={xScale(upperFence)} y={yAxisCenter - 35} textAnchor="middle" fill="#f43f5e" fontSize="10">Upper Fence</text>

          {/* Box */}
          <rect x={xScale(q1)} y={yAxisCenter - 15} width={xScale(q3) - xScale(q1)} height="30" fill="#10b981" fillOpacity="0.2" stroke="#10b981" strokeWidth="2" />
          {/* Median Line */}
          <line x1={xScale(median)} y1={yAxisCenter - 15} x2={xScale(median)} y2={yAxisCenter + 15} stroke="#10b981" strokeWidth="2" />

          {/* Whiskers */}
          <line x1={xScale(lowestValid)} y1={yAxisCenter} x2={xScale(q1)} y2={yAxisCenter} stroke="#10b981" strokeWidth="2" />
          <line x1={xScale(lowestValid)} y1={yAxisCenter - 5} x2={xScale(lowestValid)} y2={yAxisCenter + 5} stroke="#10b981" strokeWidth="2" />

          <line x1={xScale(q3)} y1={yAxisCenter} x2={whiskerEndRight} y2={yAxisCenter} stroke="#10b981" strokeWidth="2" />
          <line x1={whiskerEndRight} y1={yAxisCenter - 5} x2={whiskerEndRight} y2={yAxisCenter + 5} stroke="#10b981" strokeWidth="2" />

          {/* Candidate Point */}
          <circle
            cx={candidateDotX}
            cy={yAxisCenter - 25}
            r="6"
            fill={isOutlier ? '#f43f5e' : '#10b981'}
            stroke={isOutlier ? '#ef4444' : '#22c55e'}
            strokeWidth="2"
            className="transition-all duration-300"
          />
          <text x={candidateDotX} y={yAxisCenter - 40} textAnchor="middle" fill={isOutlier ? '#f43f5e' : '#10b981'} fontSize="12" className="transition-all duration-300">
            {candidateValue}
          </text>
        </svg>
      </div>
    </DiagramPanel>
  );
};