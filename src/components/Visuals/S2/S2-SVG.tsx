import React from 'react';
import { MathText } from '../../MathText';
import { DiagramPanel } from '../../DiagramPanel';

// ==========================================
// Fig 1. Histogram Area/Density
// ==========================================
export const HistogramDensitySVG: React.FC = () => (
  <DiagramPanel
    title="Fig 1. Histogram Geometry"
    analysis={
      <div className="space-y-3">
        <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
          <p className="text-sm text-slate-300 leading-relaxed">
            In a histogram, the <strong className="font-semibold text-emerald-400">area</strong> of each bar represents the <strong className="font-semibold text-emerald-400">frequency</strong>, not the height.
          </p>
        </div>
        <div className="p-4 bg-rose-950/30 border border-rose-900/40 rounded-lg">
          <h4 className="font-bold text-rose-400 mb-2 text-sm uppercase tracking-wider">CCEA Exam Pitfall</h4>
          <p className="text-sm text-rose-300 leading-relaxed mb-3">
            Do not read the bar height as the frequency when class widths are unequal.
          </p>
          <div className="text-center bg-slate-950 p-2 rounded border border-slate-800/60">
            <MathText content="\text{Area} = \text{Width} \times \text{Height}" />
          </div>
        </div>
      </div>
    }
  >
    <svg width="500" height="260" viewBox="-60 -10 570 280" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" overflow="visible" className="max-w-lg">
      {/* Grid Lines */}
      <line x1="50" y1="60" x2="450" y2="60" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="50" y1="100" x2="450" y2="100" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="50" y1="140" x2="450" y2="140" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />

      {/* Axes */}
      <path d="M50 25 L50 200 L460 200" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
      
      {/* Y-Axis Label */}
      <text
        transform="rotate(-90 -30 112.5)"
        x="-30"
        y="112.5"
        textAnchor="middle"
        dominantBaseline="central"
        fill="#94a3b8"
        className="text-sm font-sans"
      >
        Frequency Density
      </text>

      {/* Class Width Labels */}
      <text x="100" y="212" textAnchor="middle" fill="#64748b" className="text-[10px] font-sans">width = 10</text>
      <text x="200" y="212" textAnchor="middle" fill="#64748b" className="text-[10px] font-sans">width = 10</text>
      <text x="350" y="212" textAnchor="middle" fill="#64748b" className="text-[10px] font-sans">width = 20</text>

      {/* X-Axis Label */}
      <foreignObject x="200" y="225" width="100" height="30">
        <div className="w-full text-center text-sm text-slate-400 font-sans">
          <MathText content="\text{Time } (t)" />
        </div>
      </foreignObject>

      {/* Bar 1: Width 100, Height 140 */}
      <rect x="50" y="60" width="100" height="140" fill="#0f172a" stroke="#334155" strokeWidth="2" className="hover:fill-slate-800 transition-colors" />
      
      {/* Bar 2: Width 100, Height 100 */}
      <rect x="150" y="100" width="100" height="100" fill="#0f172a" stroke="#334155" strokeWidth="2" className="hover:fill-slate-800 transition-colors" />
      
      {/* Bar 3: Width 200, Height 60 */}
      <rect x="250" y="140" width="200" height="60" fill="#022c22" stroke="#10b981" strokeWidth="2" className="hover:fill-emerald-900/50 transition-colors" />
      
      {/* Dynamic Content Overlay via foreignObject */}
      <foreignObject x="260" y="150" width="180" height="40">
        <div className="w-full h-full flex items-center justify-center text-emerald-400 text-sm font-semibold tracking-wide bg-slate-950/40 rounded">
          <MathText content="\text{Area} = \text{Frequency}" />
        </div>
      </foreignObject>
    </svg>
  </DiagramPanel>
);

// ==========================================
// Fig 2. PMCC Formula Panel
// ==========================================
export const PMCCPanelSVG: React.FC = () => (
  <DiagramPanel
    title="Fig 2. PMCC Core Formula"
    analysis={
      <div className="space-y-3">
        <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
          <p className="text-sm text-slate-300 leading-relaxed">
            The PMCC formula combines summary statistics to measure the strength and direction of <strong className="font-semibold text-emerald-400">linear</strong> correlation.
          </p>
        </div>
        <div className="p-4 bg-rose-950/30 border border-rose-900/40 rounded-lg">
          <h4 className="font-bold text-rose-400 mb-2 text-sm uppercase tracking-wider text-center">CCEA Exam Pitfall</h4>
          <p className="text-sm text-rose-300 leading-relaxed mb-3 text-center">
            Always verify your result is between -1 and 1.
          </p>
          <div className="text-center bg-slate-950 p-2 rounded border border-slate-800/60">
            <MathText content="r = 1.2" />
          </div>
          <p className="text-xs text-rose-300/80 italic mt-3 text-center">
            This is impossible, so the substitution or arithmetic must be checked.
          </p>
        </div>
      </div>
    }
  >
    <div className="flex flex-col items-center bg-slate-900/50 border border-slate-800 p-6 rounded-xl shadow-inner max-w-2xl w-full">
      <div className="relative w-full mb-6 flex justify-center items-center h-16 border-b border-slate-800 pb-4 text-2xl text-emerald-400">
        <MathText content="r = \frac{S_{xy}}{\sqrt{S_{xx} S_{yy}}}" />
        <div className="absolute top-0 right-0 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-3 py-1 font-mono font-bold tracking-widest rounded-lg text-xs">
          <MathText content="-1 \leq r \leq 1" />
        </div>
      </div>

      <div className="w-full border-b border-slate-800 mb-6 pb-6">
        <h5 className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-3 text-center">Summary Statistics Needed</h5>
        <div className="grid grid-cols-4 sm:grid-cols-7 gap-2 text-center font-mono text-sm">
          {['r', 'n', '\\sum x', '\\sum y', '\\sum x^2', '\\sum y^2', '\\sum xy'].map(stat => (
            <div key={stat} className="bg-slate-950 p-2 rounded border border-slate-800/60">
              <MathText content={stat} />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full space-y-4 text-lg text-slate-300 font-mono">
        <div className="flex justify-center items-center bg-slate-950 p-3 rounded border border-slate-800/60 shadow-sm">
          <MathText content="S_{xx} = \sum x^2 - \frac{(\sum x)^2}{n}" />
        </div>
        <div className="flex justify-center items-center bg-slate-950 p-3 rounded border border-slate-800/60 shadow-sm">
          <MathText content="S_{yy} = \sum y^2 - \frac{(\sum y)^2}{n}" />
        </div>
        <div className="flex justify-center items-center bg-slate-950 p-3 rounded border border-slate-800/60 shadow-sm">
          <MathText content="S_{xy} = \sum xy - \frac{\sum x \sum y}{n}" />
        </div>
      </div>
    </div>
  </DiagramPanel>
);

// ==========================================
// Fig 3. Scatter Diagram with Distinct Clusters
// ==========================================
export const ScatterClustersSVG: React.FC = () => (
  <DiagramPanel
    title="Fig 3. Subgroups in Data"
    analysis={
      <div className="space-y-3">
        <div className="flex items-start gap-3 p-3 bg-slate-900/50 border border-slate-800 rounded-lg">
          <p className="text-sm text-slate-300 leading-relaxed">An overall regression line can be highly misleading if the population contains distinct sections or subgroups.</p>
        </div>
        <div className="p-3 bg-rose-950/30 border border-rose-900/40 rounded-lg text-sm text-rose-300">
          <strong className="font-bold text-rose-400">CCEA Exam Pitfall:</strong> Do not blindly trust a single PMCC value or line of best fit. Check the scatter structure first.
        </div>
      </div>
    }
  >
    <svg width="500" height="300" viewBox="20 0 480 310" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" overflow="visible" className="max-w-lg">
      {/* Axes */}
      <path d="M50 30 L50 250 L470 250" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
      
      <foreignObject x="25" y="10" width="30" height="30">
        <MathText content="y" className="text-slate-400 text-sm" />
      </foreignObject>
      <foreignObject x="455" y="255" width="30" height="30">
        <MathText content="x" className="text-slate-400 text-sm" />
      </foreignObject>

      {/* Group A Cluster Boundary */}
      <ellipse cx="150" cy="180" rx="60" ry="40" transform="rotate(-30 150 180)" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 4" fill="rgba(56, 189, 248, 0.05)" />
      <foreignObject x="110" y="225" width="80" height="25">
        <div className="w-full text-center text-xs font-semibold text-sky-400 font-sans">Group A</div>
      </foreignObject>
      {[ [110, 160], [130, 175], [150, 180], [170, 190], [180, 205] ].map(([cx, cy], i) => (
        <circle key={'a'+i} cx={cx} cy={cy} r="4.5" fill="#38bdf8" className="transition-all duration-300 hover:r-6 cursor-pointer" />
      ))}

      {/* Group B Cluster Boundary */}
      <ellipse cx="350" cy="100" rx="60" ry="40" transform="rotate(-30 350 100)" stroke="#c084fc" strokeWidth="1.5" strokeDasharray="4 4" fill="rgba(192, 132, 252, 0.05)" />
      <foreignObject x="310" y="35" width="80" height="25">
        <div className="w-full text-center text-xs font-semibold text-purple-400 font-sans">Group B</div>
      </foreignObject>
      {[ [310, 80], [330, 95], [350, 100], [370, 110], [380, 125] ].map(([cx, cy], i) => (
        <circle key={'b'+i} cx={cx} cy={cy} r="4.5" fill="#c084fc" className="transition-all duration-300 hover:r-6 cursor-pointer" />
      ))}

      {/* Misleading Overall Trend Line (Positive) */}
      <line x1="80" y1="230" x2="420" y2="50" stroke="#f43f5e" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="6 4" />
      
      <foreignObject x="145" y="110" width="220" height="30" transform="rotate(-28 250 130)">
        <div className="flex items-center justify-center gap-2 text-center text-rose-400 text-[10px] font-mono font-bold tracking-widest uppercase bg-slate-950/90 border border-slate-800 px-3 py-1 rounded shadow-lg backdrop-blur-sm">
          <div className="w-3 h-3 rounded-full bg-rose-500 text-white flex items-center justify-center text-[9px] font-black shrink-0">!</div>
          <span>
            Misleading overall trend
          </span>
        </div>
      </foreignObject>
    </svg>
  </DiagramPanel>
);

// ==========================================
// Fig 5. Linear Interpolation Double Number Line
// ==========================================
export const InterpolationLineSVG: React.FC = () => (
  <DiagramPanel
    title="Fig 5. Linear Interpolation Setup"
    analysis={
      <div className="space-y-3">
        <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
          <h4 className="font-bold text-sky-400 mb-2 text-sm uppercase tracking-wider">Assumption</h4>
          <p className="text-sm text-slate-300 leading-relaxed">
            Interpolation assumes values are evenly distributed across the class interval. It maps the fraction of the frequency gap directly onto the same fraction of the class width.
          </p>
        </div>
        <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
          <h4 className="font-bold text-amber-400 mb-2 text-sm uppercase tracking-wider">Frequency Fraction</h4>
          <p className="text-sm text-slate-300 leading-relaxed mb-3">
            Move 5 out of the total 12 cumulative-frequency gap.
          </p>
          <div className="text-center bg-slate-950 p-2 rounded border border-slate-800/60">
            <MathText content="\frac{10 - 5}{17 - 5} = \frac{5}{12}" />
          </div>
        </div>
        <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
          <h4 className="font-bold text-emerald-400 mb-2 text-sm uppercase tracking-wider">Class-width Fraction</h4>
          <p className="text-sm text-slate-300 leading-relaxed mb-3">
            Apply the same fraction across the class width from 10 to 20.
          </p>
          <div className="text-center bg-slate-950 p-2 rounded border border-slate-800/60">
            <MathText content="Q_2 = 10 + \frac{5}{12}(20 - 10)" />
          </div>
        </div>
      </div>
    }
  >
    <div className="flex flex-col items-center space-y-4">
      <svg width="500" height="180" viewBox="-10 -10 520 200" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" overflow="visible" className="max-w-lg">
        {/* Top Line: Cumulative Frequency */}
        <foreignObject x="0" y="30" width="75" height="30">
          <div className="text-right text-[10px] text-slate-400 font-sans pr-2 font-medium leading-tight">Cumulative<br/>Frequency</div>
        </foreignObject>
        <line x1="80" y1="40" x2="420" y2="40" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
        <circle cx="80" cy="40" r="4" fill="#64748b" />
        <circle cx="220" cy="40" r="5" fill="#38bdf8" /> 
        <circle cx="420" cy="40" r="4" fill="#64748b" />
        
        <foreignObject x="65" y="10" width="30" height="20"><MathText content="5" className="text-center text-xs text-slate-300" /></foreignObject>
        <foreignObject x="205" y="10" width="30" height="20"><MathText content="10" className="text-center text-xs font-bold text-sky-400" /></foreignObject>
        <foreignObject x="405" y="10" width="30" height="20"><MathText content="17" className="text-center text-xs text-slate-300" /></foreignObject>

        {/* Visual Gap Brackets */}
        <path d="M 80 50 L 80 55 L 220 55 L 220 50" fill="none" stroke="#475569" strokeWidth="1" />
        <foreignObject x="140" y="58" width="60" height="20">
          <div className="text-center text-[10px] text-slate-400">gap = 5</div>
        </foreignObject>
        
        <path d="M 80 70 L 80 75 L 420 75 L 420 70" fill="none" stroke="#475569" strokeWidth="1" />
        <foreignObject x="240" y="78" width="60" height="20">
          <div className="text-center text-[10px] text-slate-400">total = 12</div>
        </foreignObject>

        {/* Connection Dashed Lines */}
        <line x1="80" y1="40" x2="80" y2="120" stroke="#334155" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="220" y1="40" x2="220" y2="120" stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="4 4" />
        <line x1="420" y1="40" x2="420" y2="120" stroke="#334155" strokeWidth="1" strokeDasharray="4 4" />

        {/* Bottom Line: Class Boundaries (x) */}
        <foreignObject x="0" y="110" width="75" height="30">
          <div className="text-right text-[10px] text-slate-400 font-sans pr-2 font-medium leading-tight">Class<br/>Boundary</div>
        </foreignObject>
        <line x1="80" y1="120" x2="420" y2="120" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
        <circle cx="80" cy="120" r="4" fill="#64748b" />
        <circle cx="220" cy="120" r="5" fill="#34d399" /> 
        <circle cx="420" cy="120" r="4" fill="#64748b" />
        
        <foreignObject x="65" y="135" width="30" height="20"><MathText content="10" className="text-center text-xs text-slate-300" /></foreignObject>
        <foreignObject x="205" y="135" width="30" height="25"><MathText content="Q_2" className="text-center text-sm font-bold text-emerald-400" /></foreignObject>
        <foreignObject x="405" y="135" width="30" height="20"><MathText content="20" className="text-center text-xs text-slate-300" /></foreignObject>
      </svg>
      <div className="w-full max-w-md">
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg text-center">
          <h5 className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-2">Interpolation Ratio</h5>
          <div className="text-emerald-400 font-mono text-lg">
            <MathText content="\frac{Q_2 - 10}{20 - 10} = \frac{10 - 5}{17 - 5}" />
          </div>
          <div className="text-sky-400 font-mono text-base mt-2">
            <MathText content="\frac{Q_2 - 10}{10} = \frac{5}{12}" />
          </div>
        </div>
      </div>
    </div>
  </DiagramPanel>
);

// ==========================================
// Fig 6. Diagnostic Residual Analysis
// ==========================================
export const ResidualAnalysisSVG: React.FC = () => (
  <DiagramPanel
    title="Fig 6. Diagnostic Residual Analysis"
    analysis={
      <div className="space-y-3">
        <div className="flex items-start gap-3 p-3 bg-slate-900/50 border border-slate-800 rounded-lg">
          <p className="text-sm text-slate-300 leading-relaxed">A random dispersion of residual plots validates a linear model. A clear pattern suggests a non-linear model is more appropriate.</p>
        </div>
        <div className="p-3 bg-rose-950/30 border border-rose-900/40 rounded-lg text-sm text-rose-300">
          <strong className="font-bold text-rose-400">CCEA Exam Pitfall:</strong> A clear pattern in the residuals (like the curve above) invalidates a linear regression model, even if the PMCC is strong.
        </div>
      </div>
    }
  >
    <svg width="500" height="200" viewBox="10 0 480 200" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" overflow="visible" className="max-w-lg">
      {/* Zero Residual Reference Line */}
      <line x1="50" y1="100" x2="450" y2="100" stroke="#34d399" strokeWidth="1.5" strokeDasharray="4 4" />
      
      {/* Coordinate Axes */}
      <path d="M50 20 L50 180" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M50 100 L460 100" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" />
      
      {/* Axis Labels */}
      <foreignObject x="15" y="10" width="40" height="40">
        <MathText content="e" className="text-xs text-slate-400 italic" />
      </foreignObject>
      <foreignObject x="465" y="90" width="30" height="20">
        <MathText content="x" className="text-xs text-slate-400 italic" />
      </foreignObject>

      {/* Trend Guide Path Line */}
      <path d="M 90 150 Q 260 20 440 160" fill="none" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="2 2" opacity="0.6" />

      {/* Non-Random Residual Curve Points */}
      {[ [90, 150], [140, 125], [190, 95], [240, 65], [290, 55], [340, 70], [390, 110], [440, 160] ].map(([cx, cy], i) => (
        <circle key={'res'+i} cx={cx} cy={cy} r="5" fill="#f43f5e" className="transition-all duration-300 hover:scale-150 cursor-pointer" />
      ))}
    </svg>
  </DiagramPanel>
);

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