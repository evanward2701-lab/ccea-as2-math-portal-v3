import React from 'react';
import { MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { cn } from '@/core/utils/cn';
import { DiagramLabel } from '@/core/diagram-engine/primitives/DiagramLabel';

const svgWidth = 500;
const svgHeight = 150;
const padding = 30;
const zeroLineY = svgHeight / 2;

const ResidualPlot: React.FC<{ title: string; pattern: 'random' | 'curved' | 'fan'; status: 'suitable' | 'unsuitable' }> = ({ title, pattern, status }) => {
  let points: [number, number][] = [];
  let trendPath = '';

  switch (pattern) {
    case 'random':
      for (let i = 0; i < 15; i++) {
        const x = padding + (i / 14) * (svgWidth - 2 * padding);
        const y = zeroLineY + (Math.random() - 0.5) * 40;
        points.push([x, y]);
      }
      break;
    case 'curved':
      for (let i = 0; i < 15; i++) {
        const x = padding + (i / 14) * (svgWidth - 2 * padding);
        const normalizedX = (x - padding) / (svgWidth - 2 * padding);
        const y = zeroLineY - (normalizedX - 0.5) * (normalizedX - 0.5) * 100 + 10;
        points.push([x, y]);
      }
      trendPath = `M ${padding} ${zeroLineY - 15} C ${svgWidth / 2} ${zeroLineY + 30}, ${svgWidth - padding} ${zeroLineY - 15}`;
      break;
    case 'fan':
      for (let i = 0; i < 15; i++) {
        const x = padding + (i / 14) * (svgWidth - 2 * padding);
        const spread = (i / 14) * 30;
        const y = zeroLineY + (Math.random() - 0.5) * spread * 2;
        points.push([x, y]);
      }
      trendPath = `M ${padding} ${zeroLineY} L ${svgWidth - padding} ${zeroLineY - 30} M ${padding} ${zeroLineY} L ${svgWidth - padding} ${zeroLineY + 30}`;
      break;
  }

  const dotColor = status === 'suitable' ? '#10b981' : '#f43f5e';
  const trendColor = status === 'suitable' ? '#10b981' : '#f43f5e';

  return (
    <div className="flex flex-col items-center p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg shadow-inner relative">
      <h5 className={`font-bold text-sm mb-3 ${status === 'suitable' ? 'text-emerald-400' : 'text-rose-400'}`}>{title}</h5>
      <div className="relative w-full aspect-50/15">
        <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="absolute inset-0 w-full h-full" overflow="visible" shapeRendering="geometricPrecision">
          <line x1={padding} y1={zeroLineY} x2={svgWidth - padding} y2={zeroLineY} stroke="#475569" strokeWidth="1" strokeDasharray="4 2" />
          {trendPath && <path d={trendPath} fill="none" stroke={trendColor} strokeWidth="1.5" opacity="0.5" />}
          {points.map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="3" fill={dotColor} />
          ))}
        </svg>
        <DiagramLabel position={{ left: `${(svgWidth - padding) / svgWidth * 100}%`, top: `${(zeroLineY + 10) / svgHeight * 100}%` }}>
          <MathText content="x" className="text-zinc-400 text-xs" />
        </DiagramLabel>
        <DiagramLabel position={{ left: `${(padding - 20) / svgWidth * 100}%`, top: `${(zeroLineY - 15) / svgHeight * 100}%` }}>
          <MathText content="e" className="text-zinc-400 text-xs" />
        </DiagramLabel>
      </div>
      <p className={`text-xs mt-2 ${status === 'suitable' ? 'text-emerald-300' : 'text-rose-300'}`}>
        {status === 'suitable' ? 'Linear model is suitable.' : 'Linear model is unsuitable.'}
      </p>
    </div>
  );
};

export const S2ResidualPatternClassifier: React.FC = () => {
  return (
    <DiagramPanel
      title="Fig. Residual Pattern Classifier"
      analysis={
        <div className="space-y-4">
          <p className="text-sm text-zinc-400 italic">
            Residual plots help assess the appropriateness of a linear regression model. A random scatter indicates a good fit, while patterns suggest issues.
          </p>
          <div className="p-3 bg-rose-950/30 border border-rose-900/40 rounded-lg text-sm text-rose-300">
            <strong className="font-bold text-rose-400">CCEA Exam Pitfall:</strong> A high PMCC does not guarantee a linear model is appropriate. Always inspect the residual plot for patterns.
          </div>
        </div>
      }
    >
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6">
        <ResidualPlot title="Random Scatter" pattern="random" status="suitable" />
        <ResidualPlot title="Curved Pattern" pattern="curved" status="unsuitable" />
        <ResidualPlot title="Fan Shape" pattern="fan" status="unsuitable" />
      </div>
    </DiagramPanel>
  );
};
