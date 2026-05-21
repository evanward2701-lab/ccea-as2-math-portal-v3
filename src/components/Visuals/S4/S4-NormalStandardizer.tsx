import React, { useState } from 'react';
import { DiagramPanel } from '../../DiagramPanel';
import { MathText } from '../../MathText';

const pdf = (z: number) => Math.exp(-(z * z) / 2) / Math.sqrt(2 * Math.PI);

export const S4NormalStandardizer: React.FC = () => {
  const [mu, setMu] = useState(100);
  const [sigma, setSigma] = useState(15);
  const [xVal, setXVal] = useState(115);

  const zScore = (xVal - mu) / sigma;

  const svgWidth = 620;
  const svgHeight = 360;
  const padding = { top: 40, right: 40, bottom: 80, left: 40 };
  const graphWidth = svgWidth - padding.left - padding.right;
  const graphHeight = svgHeight - padding.top - padding.bottom;

  const zMin = -4, zMax = 4;
  const xScaleZ = (z: number) => padding.left + ((z - zMin) / (zMax - zMin)) * graphWidth;
  const yScale = (p: number) => padding.top + graphHeight - p * graphHeight / pdf(0);

  const generateBellCurve = () => {
    let path = "";
    const steps = 100;
    for (let i = 0; i <= steps; i++) {
      const z = zMin + (zMax - zMin) * i / steps;
      const px = xScaleZ(z);
      const py = yScale(pdf(z));
      path += (i === 0 ? "M" : "L") + ` ${px} ${py}`;
    }
    return path;
  };

  const generateShadedArea = (targetZ: number) => {
    let path = `M ${xScaleZ(zMin)} ${yScale(0)}`;
    const steps = 50;
    for (let i = 0; i <= steps; i++) {
      const z = zMin + (targetZ - zMin) * i / steps;
      path += ` L ${xScaleZ(z)} ${yScale(pdf(z))}`;
    }
    path += ` L ${xScaleZ(targetZ)} ${yScale(0)} Z`;
    return path;
  };

  return (
    <DiagramPanel
      title="Fig. Normal Distribution Standardizer"
      analysis={
        <div className="space-y-4">
          <p className="text-sm text-slate-400 italic">
            Standardizing transforms any normal distribution <MathText content="X \sim N(\mu, \sigma^2)" className="inline [&_p]:inline"/> into the standard normal distribution <MathText content="Z \sim N(0, 1)" className="inline [&_p]:inline"/>, allowing us to use standard tables or calculator functions.
          </p>
          <div className="p-3 bg-slate-900/50 border border-slate-800 rounded-lg">
            <h4 className="font-bold text-sky-400 mb-2 text-sm uppercase tracking-wider">Standardization Formula</h4>
            <div className="text-center bg-slate-950 p-2 rounded border border-slate-800/60">
              <MathText content={`z = \\frac{x - \\mu}{\\sigma} = \\frac{${xVal} - ${mu}}{${sigma}} = ${zScore.toFixed(2)}`} />
            </div>
          </div>
          <div className="p-3 bg-rose-950/30 border border-rose-900/40 rounded-lg text-sm text-rose-300">
            <strong className="font-bold text-rose-400">CCEA Exam Pitfall:</strong> If a question gives the variance (<MathText content="\sigma^2" className="inline [&_p]:inline"/>), you must take the square root to find the standard deviation (<MathText content="\sigma" className="inline [&_p]:inline"/>) before using the standardization formula.
          </div>
        </div>
      }
    >
      <div className="w-full flex flex-col items-center">
        <div className="w-full max-w-xl grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 rounded-lg border border-slate-800 bg-slate-900/50 p-3">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-slate-300"><MathText content="\mu" /></label>
            <input type="range" min="80" max="120" value={mu} onChange={(e) => setMu(Number(e.target.value))} className="w-full" />
            <span className="text-sm font-mono text-sky-400 w-8 text-right">{mu}</span>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-slate-300"><MathText content="\sigma" /></label>
            <input type="range" min="5" max="25" value={sigma} onChange={(e) => setSigma(Number(e.target.value))} className="w-full" />
            <span className="text-sm font-mono text-sky-400 w-8 text-right">{sigma}</span>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-slate-300"><MathText content="x" /></label>
            <input type="range" min={mu - 3 * sigma} max={mu + 3 * sigma} value={xVal} onChange={(e) => setXVal(Number(e.target.value))} className="w-full" />
            <span className="text-sm font-mono text-amber-400 w-8 text-right">{xVal}</span>
          </div>
        </div>

        <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-auto max-w-3xl" overflow="visible" shapeRendering="geometricPrecision">
          {/* Shaded Area */}
          <path d={generateShadedArea(zScore)} fill="#10b981" fillOpacity="0.2" />

          {/* Bell Curve */}
          <path d={generateBellCurve()} fill="none" stroke="#38bdf8" strokeWidth="2" />

          {/* X-axis */}
          <line x1={padding.left} y1={yScale(0)} x2={svgWidth - padding.right} y2={yScale(0)} stroke="#475569" strokeWidth="2" />
          <text x={svgWidth - padding.right + 10} y={yScale(0) + 4} fill="#94a3b8" fontSize="12">X</text>

          {/* Z-axis */}
          <line x1={padding.left} y1={yScale(0) + 20} x2={svgWidth - padding.right} y2={yScale(0) + 20} stroke="#64748b" strokeWidth="1" />
          <text x={svgWidth - padding.right + 10} y={yScale(0) + 24} fill="#94a3b8" fontSize="12">Z</text>

          {/* Ticks and Labels */}
          {[-3, -2, -1, 0, 1, 2, 3].map(z => (
            <g key={z}>
              {/* Z-axis ticks */}
              <line x1={xScaleZ(z)} y1={yScale(0) + 20} x2={xScaleZ(z)} y2={yScale(0) + 25} stroke="#64748b" strokeWidth="1" />
              <text x={xScaleZ(z)} y={yScale(0) + 40} textAnchor="middle" fill="#94a3b8" fontSize="10">{z}</text>
              {/* X-axis ticks */}
              <line x1={xScaleZ(z)} y1={yScale(0)} x2={xScaleZ(z)} y2={yScale(0) - 5} stroke="#64748b" strokeWidth="1" />
              <text x={xScaleZ(z)} y={yScale(0) - 10} textAnchor="middle" fill="#94a3b8" fontSize="10">{Math.round(mu + z * sigma)}</text>
            </g>
          ))}

          {/* Mean Line */}
          <line x1={xScaleZ(0)} y1={yScale(pdf(0))} x2={xScaleZ(0)} y2={yScale(0)} stroke="#10b981" strokeDasharray="3 3" strokeWidth="1.5" />

          {/* Target Value Line */}
          <line
            x1={xScaleZ(zScore)}
            y1={yScale(pdf(zScore))}
            x2={xScaleZ(zScore)}
            y2={yScale(0) + 20}
            stroke="#f59e0b"
            strokeWidth="2"
          />
          <circle cx={xScaleZ(zScore)} cy={yScale(pdf(zScore))} r="4" fill="#f59e0b" />
        </svg>
      </div>
    </DiagramPanel>
  );
};