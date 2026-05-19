import React from 'react';
import { MathText } from '../../MathText';

export const HistogramDensitySVG: React.FC = () => (
  <div className="w-full flex flex-col items-center py-12 mb-12 border border-slate-800 bg-slate-900 relative rounded-xl shadow-[2px_4px_16px_rgba(0,0,0,0.4)]">
    <div className="absolute top-0 right-0 bg-slate-800 text-slate-400 border-b border-l border-slate-700 px-3 py-1 text-[10px] uppercase tracking-widest font-mono font-bold rounded-tr-xl rounded-bl-md">
      Fig 1. Histogram Geometry
    </div>
    
    <svg 
      width="500" 
      height="250" 
      viewBox="0 0 500 250" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
    >
      {/* Grid Lines */}
      <line x1="50" y1="60" x2="450" y2="60" stroke="#1E293B" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="50" y1="100" x2="450" y2="100" stroke="#1E293B" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="50" y1="140" x2="450" y2="140" stroke="#1E293B" strokeWidth="1" strokeDasharray="4 4" />

      {/* Axes */}
      <path d="M50 25 L50 200 L460 200" stroke="#64748B" strokeWidth="2" strokeLinecap="round" />
      
      {/* Axis Titles using ForeignObject for KaTeX integration */}
      <foreignObject x="0" y="45" width="40" height="120">
        <div className="w-full h-full flex items-center justify-center -rotate-90 text-xs text-slate-400 font-sans whitespace-nowrap">
          <MathText text="\text{Frequency Density}" />
        </div>
      </foreignObject>

      <foreignObject x="220" y="205" width="60" height="30">
        <div className="w-full text-center text-xs text-slate-400 font-sans">
          <MathText text="\text{Time } (t)" />
        </div>
      </foreignObject>

      {/* Bar 1: Width 100 (50 to 150), Height 140 */}
      <rect x="50" y="60" width="100" height="140" fill="#0F172A" stroke="#334155" strokeWidth="2" className="hover:fill-slate-800/50 transition-colors" />
      
      {/* Bar 2: Width 100 (150 to 250), Height 100 */}
      <rect x="150" y="100" width="100" height="100" fill="#0F172A" stroke="#334155" strokeWidth="2" className="hover:fill-slate-800/50 transition-colors" />
      
      {/* Bar 3: Width 200 (250 to 450), Height 60 */}
      <rect x="250" y="140" width="200" height="60" fill="rgba(16, 185, 129, 0.05)" stroke="#10B981" strokeWidth="2" strokeDasharray="none" className="hover:fill-emerald-500/10 transition-colors" />
      
      {/* Dynamic Content Overlay via foreignObject */}
      <foreignObject x="260" y="150" width="180" height="40">
        <div className="w-full h-full flex items-center justify-center text-emerald-400 text-sm font-semibold tracking-wide">
          <MathText text="\text{Area} = \text{Frequency}" />
        </div>
      </foreignObject>
    </svg>

    <div className="text-[12px] font-sans text-slate-400 text-center mt-6 px-6 max-w-md leading-relaxed">
      In a histogram, the area of the bar represents the frequency. 
      <div className="mt-2 text-rose-400 text-[11px] font-mono uppercase tracking-wide border border-rose-950 bg-rose-950/30 px-3 py-1.5 rounded-md">
        <span className="font-bold">🚨 Exam Misconception:</span> Do not read the height as the frequency when classes have unequal widths!
      </div>
    </div>
  </div>
);


export const PMCCPanelSVG: React.FC = () => (
  <div className="w-full flex flex-col items-center py-12 mb-12 border border-slate-800 bg-slate-900 relative rounded-xl shadow-[2px_4px_16px_rgba(0,0,0,0.4)]">
    <div className="absolute top-0 right-0 bg-slate-800 text-slate-400 border-b border-l border-slate-700 px-3 py-1 text-[10px] uppercase tracking-widest font-mono font-bold rounded-tr-xl rounded-bl-md">
      Fig 2. PMCC Core Formula
    </div>
    
    <div className="my-8 flex flex-col items-center bg-slate-950 border border-slate-800 p-8 rounded-lg shadow-inner max-w-md w-11/12">
      <div className="mb-6 flex justify-center items-center h-16 w-full border-b border-slate-800 pb-4 text-xl text-emerald-400">
        <MathText text="r = \frac{S_{xy}}{\sqrt{S_{xx} S_{yy}}}" />
      </div>
      
      <div className="w-full space-y-3 pt-2 text-sm text-slate-300 font-mono">
        <div className="flex justify-between items-center bg-slate-900/50 p-2 rounded border border-slate-800/60">
          <MathText text="S_{xx} = \sum x^2 - \frac{(\sum x)^2}{n}" />
        </div>
        <div className="flex justify-between items-center bg-slate-900/50 p-2 rounded border border-slate-800/60">
          <MathText text="S_{yy} = \sum y^2 - \frac{(\sum y)^2}{n}" />
        </div>
        <div className="flex justify-between items-center bg-slate-900/50 p-2 rounded border border-slate-800/60">
          <MathText text="S_{xy} = \sum xy - \frac{\sum x \sum y}{n}" />
        </div>
      </div>
    </div>

    <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-6 py-2 font-mono font-bold tracking-widest rounded-full text-sm mb-4">
      <MathText text="-1 \le r \le 1" />
    </div>

    <div className="text-[12px] font-sans text-slate-400 text-center mt-2 px-6 max-w-md leading-relaxed">
      The PMCC formula combines summary statistics to measure linear correlation.
      <div className="mt-3 text-rose-400 text-[11px] font-mono uppercase tracking-wide border border-rose-950 bg-rose-950/30 px-3 py-1.5 rounded-md">
        <span className="font-bold">🚨 Exam Misconception:</span> Always verify your result. Accepting an impossible value like $r = 1.2$ proves to the examiner you do not understand the metric.
      </div>
    </div>
  </div>
);


export const ScatterClustersSVG: React.FC = () => (
  <div className="w-full flex flex-col items-center py-12 mb-12 border border-slate-800 bg-slate-900 relative rounded-xl shadow-[2px_4px_16px_rgba(0,0,0,0.4)]">
    <div className="absolute top-0 right-0 bg-slate-800 text-slate-400 border-b border-l border-slate-700 px-3 py-1 text-[10px] uppercase tracking-widest font-mono font-bold rounded-tr-xl rounded-bl-md">
      Fig 3. Subgroups in Data
    </div>
    
    <svg 
      width="500" 
      height="300" 
      viewBox="0 0 500 300" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
    >
      {/* Axes */}
      <path d="M50 30 L50 250 L470 250" stroke="#64748B" strokeWidth="2" strokeLinecap="round" />
      
      <foreignObject x="25" y="10" width="30" height="30">
        <div className="text-slate-400 font-mono italic text-sm"><MathText text="y" /></div>
      </foreignObject>
      <foreignObject x="455" y="255" width="30" height="30">
        <div className="text-slate-400 font-mono italic text-sm"><MathText text="x" /></div>
      </foreignObject>

      {/* Group A Cluster Boundary */}
      <ellipse cx="150" cy="180" rx="60" ry="40" transform="rotate(-30 150 180)" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="4 4" fill="rgba(56, 189, 248, 0.03)" />
      <foreignObject x="110" y="225" width="80" height="25">
        <div className="w-full text-center text-xs font-semibold text-sky-400 font-sans">Group A</div>
      </foreignObject>
      {[ [110, 160], [130, 175], [150, 180], [170, 190], [180, 205] ].map(([cx, cy], i) => (
        <circle key={'a'+i} cx={cx} cy={cy} r="4" fill="#38BDF8" className="transition-all hover:r-6 cursor-pointer" />
      ))}

      {/* Group B Cluster Boundary */}
      <ellipse cx="350" cy="100" rx="60" ry="40" transform="rotate(-30 350 100)" stroke="#A855F7" strokeWidth="1.5" strokeDasharray="4 4" fill="rgba(168, 85, 247, 0.03)" />
      <foreignObject x="310" y="35" width="80" height="25">
        <div className="w-full text-center text-xs font-semibold text-purple-400 font-sans">Group B</div>
      </foreignObject>
      {[ [310, 80], [330, 95], [350, 100], [370, 110], [380, 125] ].map(([cx, cy], i) => (
        <circle key={'b'+i} cx={cx} cy={cy} r="4" fill="#A855F7" className="transition-all hover:r-6 cursor-pointer" />
      ))}

      {/* Misleading Overall Trend Line (Positive) */}
      <line x1="80" y1="230" x2="420" y2="50" stroke="#EF4444" strokeWidth="2.5" strokeDasharray="none" opacity="0.8" strokeLinecap="round" />
      
      <foreignObject x="170" y="110" width="220" height="30" transform="rotate(-28 250 130)">
        <div className="text-center text-rose-400 text-xs font-mono font-bold tracking-wide uppercase bg-slate-950 border border-rose-950 px-2 py-0.5 rounded shadow">
          Misleading Overall Trend
        </div>
      </foreignObject>
    </svg>

    <div className="text-[12px] font-sans text-slate-400 text-center mt-4 px-6 max-w-md leading-relaxed">
      An overall regression line can be highly misleading if the population contains distinct sections or subgroups.
      <div className="mt-3 text-rose-400 text-[11px] font-mono uppercase tracking-wide border border-rose-950 bg-rose-950/30 px-3 py-1.5 rounded-md">
        <span className="font-bold">🚨 Exam Misconception:</span> Do not blindly trust a single PMCC value without looking at the visual scatter structure first.
      </div>
    </div>
  </div>
);


export const InterpolationLineSVG: React.FC = () => (
  <div className="w-full flex flex-col items-center py-12 mb-12 border border-slate-800 bg-slate-900 relative rounded-xl shadow-[2px_4px_16px_rgba(0,0,0,0.4)]">
    <div className="absolute top-0 right-0 bg-slate-800 text-slate-400 border-b border-l border-slate-700 px-3 py-1 text-[10px] uppercase tracking-widest font-mono font-bold rounded-tr-xl rounded-bl-md">
      Fig 5. Linear Interpolation
    </div>
    
    <svg 
      width="500" 
      height="180" 
      viewBox="0 0 500 180" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
    >
      {/* Top Line: Cumulative Frequency */}
      <foreignObject x="0" y="30" width="75" height="20">
        <div className="text-right text-[10px] text-slate-400 font-sans pr-2 font-medium">Cum. Freq (y)</div>
      </foreignObject>
      <line x1="80" y1="40" x2="420" y2="40" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
      <circle cx="80" cy="40" r="4" fill="#64748B" />
      <circle cx="220" cy="40" r="5" fill="#3B82F6" /> 
      <circle cx="420" cy="40" r="4" fill="#64748B" />
      
      <foreignObject x="65" y="10" width="30" height="20">
        <div className="text-center text-xs font-mono text-slate-300"><MathText text="5" /></div>
      </foreignObject>
      <foreignObject x="205" y="10" width="30" height="20">
        <div className="text-center text-xs font-mono font-bold text-blue-400"><MathText text="10" /></div>
      </foreignObject>
      <foreignObject x="405" y="10" width="30" height="20">
        <div className="text-center text-xs font-mono text-slate-300"><MathText text="17" /></div>
      </foreignObject>

      {/* Connection Dashed Lines */}
      <line x1="80" y1="40" x2="80" y2="120" stroke="#334155" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="220" y1="40" x2="220" y2="120" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="4 4" />
      <line x1="420" y1="40" x2="420" y2="120" stroke="#334155" strokeWidth="1" strokeDasharray="4 4" />

      {/* Bottom Line: Class Boundaries (x) */}
      <foreignObject x="0" y="110" width="75" height="20">
        <div className="text-right text-[10px] text-slate-400 font-sans pr-2 font-medium">Boundary (x)</div>
      </foreignObject>
      <line x1="80" y1="120" x2="420" y2="120" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
      <circle cx="80" cy="120" r="4" fill="#64748B" />
      <circle cx="220" cy="120" r="5" fill="#10B981" /> 
      <circle cx="420" cy="120" r="4" fill="#64748B" />
      
      <foreignObject x="65" y="135" width="30" height="20">
        <div className="text-center text-xs font-mono text-slate-300"><MathText text="10" /></div>
      </foreignObject>
      <foreignObject x="205" y="135" width="30" height="25">
        <div className="text-center text-sm font-mono font-bold text-emerald-400"><MathText text="Q_2" /></div>
      </foreignObject>
      <foreignObject x="405" y="135" width="30" height="20">
        <div className="text-center text-xs font-mono text-slate-300"><MathText text="20" /></div>
      </foreignObject>

      {/* Brackets / Ratios indicator */}
      <path d="M 80 58 L 80 68 L 220 68 L 220 58" fill="none" stroke="#334155" strokeWidth="1" />
      <foreignObject x="110" y="72" width="80" height="20">
        <div className="text-center text-[10px] text-slate-400 font-mono"><MathText text="\text{Gap} = 5" /></div>
      </foreignObject>
      
      <path d="M 80 102 L 80 92 L 420 92 L 420 102" fill="none" stroke="#334155" strokeWidth="1" />
      <foreignObject x="210" y="72" width="80" height="20">
        <div className="text-center text-[10px] text-slate-400 font-mono"><MathText text="\text{Total} = 12" /></div>
      </foreignObject>
    </svg>

    <div className="text-[12px] font-sans text-slate-400 text-center mt-2 px-6 max-w-md leading-relaxed">
      Interpolation maps the fraction of the frequency directly onto the fraction of the class width:
      <div className="mt-2 text-emerald-400 font-mono text-xs bg-slate-950 p-2 rounded border border-slate-800">
        <MathText text="\frac{Q_2 - 10}{20 - 10} = \frac{10 - 5}{17 - 5}" />
      </div>
    </div>
  </div>
);


export const ResidualAnalysisSVG: React.FC = () => (
  <div className="w-full flex flex-col items-center py-12 mb-12 border border-slate-800 bg-slate-900 relative rounded-xl shadow-[2px_4px_16px_rgba(0,0,0,0.4)]">
    <div className="absolute top-0 right-0 bg-slate-800 text-slate-400 border-b border-l border-slate-700 px-3 py-1 text-[10px] uppercase tracking-widest font-mono font-bold rounded-tr-xl rounded-bl-md">
      Fig 6. Diagnostic Residual Analysis
    </div>
    
    <svg 
      width="500" 
      height="200" 
      viewBox="0 0 500 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      shapeRendering="geometricPrecision"
    >
      {/* Zero Residual Reference Line */}
      <line x1="50" y1="100" x2="450" y2="100" stroke="#10B981" strokeWidth="2" strokeDasharray="4 4" />
      
      {/* Coordinate Axes */}
      <path d="M50 20 L50 180" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M50 100 L460 100" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" />
      
      {/* Axis Labels */}
      <foreignObject x="15" y="10" width="40" height="40">
        <div className="text-xs text-slate-400 font-mono italic">
          <MathText text="e" />
        </div>
      </foreignObject>
      <foreignObject x="465" y="90" width="30" height="20">
        <div className="text-xs text-slate-400 font-mono italic">
          <MathText text="x" />
        </div>
      </foreignObject>

      {/* Non-Random Residual Curve Points (Indicating Non-Linear Fit Failure) */}
      {[ [90, 150], [140, 125], [190, 95], [240, 65], [290, 55], [340, 70], [390, 110], [440, 160] ].map(([cx, cy], i) => (
        <circle 
          key={'res'+i} 
          cx={cx} 
          cy={cy} 
          r="4.5" 
          fill="#EF4444" 
          className="transition-all duration-200 hover:scale-150 cursor-pointer" 
        />
      ))}
      
      {/* Trend Guide Path Line */}
      <path d="M 90 150 Q 260 20 440 160" fill="none" stroke="#EF4444" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" />
    </svg>

    <div className="text-[12px] font-sans text-slate-400 text-center mt-4 px-6 max-w-md leading-relaxed">
      A completely random dispersion of residual plots validates the reliability of a linear model fit.
      <div className="mt-3 text-amber-400 text-[11px] font-mono uppercase tracking-wide border border-amber-950 bg-amber-950/30 px-3 py-1.5 rounded-md">
        <span className="font-bold">⚠️ Diagnostic Trap:</span> Clear parabolic patterns like the one above indicate that a non-linear relationship exists, proving that a linear PMCC calculation is an invalid metric.
      </div>
    </div>
  </div>
);