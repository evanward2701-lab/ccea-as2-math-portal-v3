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