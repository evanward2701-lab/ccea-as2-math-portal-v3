import React from 'react';
import { DiagramPanel } from '../../DiagramPanel';
import { MathText } from '../../MathText';

export const S2ResidualPatternClassifier: React.FC = () => {
  const svgWidth = 500;
  const svgHeight = 150;
  const padding = 30;
  const zeroLineY = svgHeight / 2;

  const ResidualPlot: React.FC<{ title: string; pattern: 'random' | 'curved' | 'fan'; status: 'suitable' | 'unsuitable' }> = ({ title, pattern, status }) => {
    let points: [number, number][] = [];
    let trendPath = '';

    switch (pattern) {
      case 'random':
        // Generate random points around the zero line
        for (let i = 0; i < 15; i++) {
          const x = padding + (i / 14) * (svgWidth - 2 * padding);
          const y = zeroLineY + (Math.random() - 0.5) * 40; // Random scatter +/- 20
          points.push([x, y]);
        }
        break;
      case 'curved':
        // Simulate a parabolic pattern
        for (let i = 0; i < 15; i++) {
          const x = padding + (i / 14) * (svgWidth - 2 * padding);
          const normalizedX = (x - padding) / (svgWidth - 2 * padding); // 0 to 1
          const y = zeroLineY - (normalizedX - 0.5) * (normalizedX - 0.5) * 100 + 10; // Parabola opening downwards
          points.push([x, y]);
        }
        trendPath = `M ${padding} ${zeroLineY - 15} C ${svgWidth / 2} ${zeroLineY + 30}, ${svgWidth - padding} ${zeroLineY - 15}`;
        break;
      case 'fan':
        // Simulate increasing variance
        for (let i = 0; i < 15; i++) {
          const x = padding + (i / 14) * (svgWidth - 2 * padding);
          const spread = (i / 14) * 30; // Increasing spread
          const y = zeroLineY + (Math.random() - 0.5) * spread * 2;
          points.push([x, y]);
        }
        trendPath = `M ${padding} ${zeroLineY} L ${svgWidth - padding} ${zeroLineY - 30} M ${padding} ${zeroLineY} L ${svgWidth - padding} ${zeroLineY + 30}`;
        break;
    }

    const dotColor = status === 'suitable' ? '#10b981' : '#f43f5e';
    const trendColor = status === 'suitable' ? '#10b981' : '#f43f5e';

    return (
      <div className="flex flex-col items-center p-4 bg-slate-900/50 border border-slate-800 rounded-lg shadow-inner">
        <h5 className={`font-bold text-sm mb-3 ${status === 'suitable' ? 'text-emerald-400' : 'text-rose-400'}`}>{title}</h5>
        <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-auto" overflow="visible" shapeRendering="geometricPrecision">
          {/* Zero Residual Line */}
          <line x1={padding} y1={zeroLineY} x2={svgWidth - padding} y2={zeroLineY} stroke="#475569" strokeWidth="1" strokeDasharray="4 2" />

          {/* X-axis label */}
          <foreignObject x={svgWidth - padding - 10} y={zeroLineY + 10} width="30" height="20">
            <MathText content="x" className="text-slate-400 text-xs" />
          </foreignObject>
          {/* Y-axis label */}
          <foreignObject x={padding - 30} y={zeroLineY - 10} width="30" height="20">
            <MathText content="e" className="text-slate-400 text-xs" />
          </foreignObject>

          {/* Trend path for non-random patterns */}
          {trendPath && <path d={trendPath} fill="none" stroke={trendColor} strokeWidth="1.5" opacity="0.5" />}

          {/* Residual Points */}
          {points.map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="3" fill={dotColor} />
          ))}
        </svg>
        <p className={`text-xs mt-2 ${status === 'suitable' ? 'text-emerald-300' : 'text-rose-300'}`}>
          {status === 'suitable' ? 'Linear model is suitable.' : 'Linear model is unsuitable.'}
        </p>
      </div>
    );
  };

  return (
    <DiagramPanel
      title="Fig. Residual Pattern Classifier"
      analysis={
        <div className="space-y-4">
          <p className="text-sm text-slate-400 italic">
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