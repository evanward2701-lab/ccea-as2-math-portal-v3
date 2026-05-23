import React, { useState } from 'react';
import { MathText } from '../../../MathText';
import { DiagramPanel } from '../../../DiagramPanel';
import { cn } from '@/lib/utils';
import { DiagramLabel } from '../../../diagrams/primitives/DiagramLabel';

type Inequality = 'gte' | 'gt' | 'lte' | 'lt';

export const S4ContinuityCorrectionLens: React.FC = () => {
  const [inequality, setInequality] = useState<Inequality>('gte');

  const svgWidth = 620;
  const svgHeight = 340;
  const baseY = 280;
  const barWidth = 40;
  const scaleY = 15;

  const data = [
    { x: 3, f: 2 }, { x: 4, f: 4 }, { x: 5, f: 7 }, { x: 6, f: 9 },
    { x: 7, f: 7 }, { x: 8, f: 4 }, { x: 9, f: 2 },
  ];

  const getCorrection = () => {
    switch (inequality) {
      case 'gte': return { boundary: 5.5, text: 'P(X \\ge 6) \\rightarrow P(Y > 5.5)' };
      case 'gt': return { boundary: 6.5, text: 'P(X > 6) \\rightarrow P(Y > 6.5)' };
      case 'lte': return { boundary: 6.5, text: 'P(X \\le 6) \\rightarrow P(Y < 6.5)' };
      case 'lt': return { boundary: 5.5, text: 'P(X < 6) \\rightarrow P(Y < 5.5)' };
    }
  };

  const correction = getCorrection();
  const boundaryX = 60 + correction.boundary * barWidth;

  return (
    <DiagramPanel
      title="Fig. Continuity Correction Lens"
      analysis={
        <div className="space-y-4">
          <p className="text-sm text-slate-400 italic">
            When approximating a discrete binomial distribution with a continuous normal distribution, a continuity correction is needed to account for the area of the bars.
          </p>
          <div className="p-3 bg-slate-900/50 border border-slate-800 rounded-lg">
            <h4 className="font-bold text-sky-400 mb-2 text-sm uppercase tracking-wider">Correction Rule</h4>
            <p className="text-sm text-slate-300 leading-relaxed">To include a bar, the boundary moves 0.5 to include it. To exclude a bar, the boundary moves 0.5 to exclude it.</p>
          </div>
          <div className="p-3 bg-rose-950/30 border border-rose-900/40 rounded-lg text-sm text-rose-300">
            <strong className="font-bold text-rose-400">CCEA Exam Pitfall:</strong> Draw the bar first. The correction moves to the edge of the bar, not randomly left or right.
          </div>
        </div>
      }
    >
      <div className="w-full flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-2 mb-8 p-1 bg-slate-900 border border-slate-800 rounded-lg">
          {(['gte', 'gt', 'lte', 'lt'] as Inequality[]).map(op => (
            <button key={op} onClick={() => setInequality(op)} className={cn("px-4 py-1.5 text-xs font-bold rounded-md transition-colors", inequality === op ? 'bg-sky-500 text-slate-950' : 'bg-transparent text-slate-400 hover:bg-slate-800')}>
              <MathText content={`P(X ${op === 'gte' ? '\\ge' : op === 'gt' ? '>' : op === 'lte' ? '\\le' : '<'} 6)`} />
            </button>
          ))}
        </div>

        <div className="p-3 mb-4 bg-emerald-950/30 border border-emerald-800 rounded-lg text-emerald-300 font-mono text-sm">
          {correction.text}
        </div>

        <div className="relative w-full aspect-62/34 max-w-3xl mx-auto">
          <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="absolute inset-0 w-full h-full" overflow="visible" shapeRendering="geometricPrecision">
            {/* Axes */}
            <line x1="40" y1={baseY} x2={svgWidth - 40} y2={baseY} stroke="#475569" strokeWidth="2" />

            {/* Bars */}
            {data.map(d => (
              <rect
                key={d.x}
                x={60 + (d.x - 0.5) * barWidth}
                y={baseY - d.f * scaleY}
                width={barWidth}
                height={d.f * scaleY}
                fill="#f59e0b"
                fillOpacity="0.1"
                stroke="#f59e0b"
                strokeWidth="1"
              />
            ))}

            {/* Normal Curve */}
            <path d="M 100 280 C 180 100, 440 100, 520 280" fill="none" stroke="#38bdf8" strokeWidth="2" opacity="0.5" />

            {/* Shaded Area */}
            <defs>
              <clipPath id="clip-path-cc">
                <path d={`M ${inequality.startsWith('gt') ? boundaryX : 40} ${baseY} L ${inequality.startsWith('gt') ? boundaryX : 40} 80 C ${inequality.startsWith('gt') ? 350 : 180} 80, ${inequality.startsWith('gt') ? 440 : 300} 80, ${inequality.startsWith('lt') ? boundaryX : 580} 80 L ${inequality.startsWith('lt') ? boundaryX : 580} ${baseY} Z`} />
              </clipPath>
            </defs>
            <path d="M 100 280 C 180 100, 440 100, 520 280" fill="#10b981" fillOpacity="0.25" clipPath="url(#clip-path-cc)" />

            {/* Correction Boundary Line */}
            <line
              x1={boundaryX}
              y1={80}
              x2={boundaryX}
              y2={baseY + 10}
              stroke="#f43f5e"
              strokeWidth="2.5"
              strokeDasharray="4 4"
            />

            {/* X-axis labels */}
            {data.map(d => (
              <text key={`label-${d.x}`} x={60 + d.x * barWidth} y={baseY + 15} textAnchor="middle" fill="#94a3b8" fontSize="10">
                {d.x}
              </text>
            ))}
          </svg>

          <DiagramLabel position={{ left: `${boundaryX / svgWidth * 100}%`, top: `${(baseY + 20) / svgHeight * 100}%` }} className="-translate-x-1/2">
            <div className="text-[#f43f5e] text-xs font-bold">{correction.boundary}</div>
          </DiagramLabel>
        </div>
      </div>
    </DiagramPanel>
  );
};
