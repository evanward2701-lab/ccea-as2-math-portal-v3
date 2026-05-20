import React from 'react';
import { MathText } from '../../MathText';

// ==========================================
// Fig 1. Histogram Area/Density
// ==========================================
export const HistogramDensitySVG: React.FC = () => (
  <div className="w-full flex flex-col items-center py-12 mb-12 border border-slate-800 bg-slate-950 relative shadow-[8px_8px_0px_#0f172a] rounded-xl overflow-hidden">
    <div className="absolute top-0 right-0 bg-slate-900 text-slate-400 border-b border-l border-slate-800 px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
      Fig 1. Histogram Geometry
    </div>
    
    <svg width="500" height="260" viewBox="0 0 500 260" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision">
      {/* Grid Lines */}
      <line x1="50" y1="60" x2="450" y2="60" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="50" y1="100" x2="450" y2="100" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="50" y1="140" x2="450" y2="140" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />

      {/* Axes */}
      <path d="M50 25 L50 200 L460 200" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
      
      {/* Y-Axis Label */}
      <foreignObject x="0" y="45" width="40" height="120">
        <div className="w-full h-full flex items-center justify-center -rotate-90 text-xs text-slate-400 font-sans whitespace-nowrap">
          <MathText content="\text{Frequency Density}" />
        </div>
      </foreignObject>

      {/* X-Axis Label */}
      <foreignObject x="220" y="205" width="60" height="30">
        <div className="w-full text-center text-xs text-slate-400 font-sans">
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

    <p className="text-[11px] font-sans text-slate-400 text-center mt-4 px-6 italic">
      In a histogram, the area of the bar represents the frequency. 
      <br/><strong className="text-rose-400 not-italic uppercase text-[10px]">CCEA Exam Pitfall:</strong> Do not read the height as the frequency when classes have unequal widths!
    </p>
  </div>
);

// ==========================================
// Fig 2. PMCC Formula Panel
// ==========================================
export const PMCCPanelSVG: React.FC = () => (
  <div className="w-full flex flex-col items-center py-12 mb-12 border border-slate-800 bg-slate-950 relative shadow-[8px_8px_0px_#0f172a] rounded-xl overflow-hidden">
    <div className="absolute top-0 right-0 bg-slate-900 text-slate-400 border-b border-l border-slate-800 px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
      Fig 2. PMCC Core Formula
    </div>
    
    <div className="my-8 flex flex-col items-center bg-slate-900/50 border border-slate-800 p-8 rounded-xl shadow-inner max-w-md w-11/12">
      <div className="mb-6 flex justify-center items-center h-16 w-full border-b border-slate-800 pb-4 text-xl text-emerald-400">
        <MathText content="r = \frac{S_{xy}}{\sqrt{S_{xx} S_{yy}}}" />
      </div>
      
      <div className="w-full space-y-3 pt-2 text-sm text-slate-300 font-mono">
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

    <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-6 py-2 font-mono font-bold tracking-widest rounded-full text-sm mb-4">
      <MathText content="-1 \leq r \leq 1" />
    </div>

    <p className="text-[11px] font-sans text-slate-400 text-center px-6 italic">
      The PMCC formula combines summary statistics to measure linear correlation.
      <br/><strong className="text-rose-400 not-italic uppercase text-[10px]">CCEA Exam Pitfall:</strong> Always verify your result. Accepting an impossible value like $r = 1.2$ proves to the examiner you do not understand the metric.
    </p>
  </div>
);

// ==========================================
// Fig 3. Scatter Diagram with Distinct Clusters
// ==========================================
export const ScatterClustersSVG: React.FC = () => (
  <div className="w-full flex flex-col items-center py-12 mb-12 border border-slate-800 bg-slate-950 relative shadow-[8px_8px_0px_#0f172a] rounded-xl overflow-hidden">
    <div className="absolute top-0 right-0 bg-slate-900 text-slate-400 border-b border-l border-slate-800 px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
      Fig 3. Subgroups in Data
    </div>
    
    <svg width="500" height="300" viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision">
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
        <div className="text-center text-rose-400 text-[10px] font-mono font-bold tracking-widest uppercase bg-slate-950/90 border border-slate-800 px-3 py-1 rounded shadow-lg backdrop-blur-sm">
          Misleading Overall Trend
        </div>
      </foreignObject>
    </svg>

    <p className="text-[11px] font-sans text-slate-400 text-center mt-4 px-6 italic">
      An overall regression line can be highly misleading if the population contains distinct sections or subgroups.
      <br/><strong className="text-rose-400 not-italic uppercase text-[10px]">CCEA Exam Pitfall:</strong> Do not blindly trust a single PMCC value without looking at the visual scatter structure first.
    </p>
  </div>
);

// ==========================================
// Fig 5. Linear Interpolation Double Number Line
// ==========================================
export const InterpolationLineSVG: React.FC = () => (
  <div className="w-full flex flex-col items-center py-12 mb-12 border border-slate-800 bg-slate-950 relative shadow-[8px_8px_0px_#0f172a] rounded-xl overflow-hidden">
    <div className="absolute top-0 right-0 bg-slate-900 text-slate-400 border-b border-l border-slate-800 px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
      Fig 5. Linear Interpolation Setup
    </div>
    
    <svg width="500" height="180" viewBox="0 0 500 180" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision">
      {/* Top Line: Cumulative Frequency */}
      <foreignObject x="0" y="30" width="75" height="30">
        <div className="text-right text-[10px] text-slate-400 font-sans pr-2 font-medium leading-tight">Cum. Freq<br/>(y)</div>
      </foreignObject>
      <line x1="80" y1="40" x2="420" y2="40" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
      <circle cx="80" cy="40" r="4" fill="#64748b" />
      <circle cx="220" cy="40" r="5" fill="#38bdf8" /> 
      <circle cx="420" cy="40" r="4" fill="#64748b" />
      
      <foreignObject x="65" y="10" width="30" height="20"><MathText content="5" className="text-center text-xs text-slate-300" /></foreignObject>
      <foreignObject x="205" y="10" width="30" height="20"><MathText content="10" className="text-center text-xs font-bold text-sky-400" /></foreignObject>
      <foreignObject x="405" y="10" width="30" height="20"><MathText content="17" className="text-center text-xs text-slate-300" /></foreignObject>

      {/* Connection Dashed Lines */}
      <line x1="80" y1="40" x2="80" y2="120" stroke="#334155" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="220" y1="40" x2="220" y2="120" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 4" />
      <line x1="420" y1="40" x2="420" y2="120" stroke="#334155" strokeWidth="1" strokeDasharray="4 4" />

      {/* Bottom Line: Class Boundaries (x) */}
      <foreignObject x="0" y="110" width="75" height="30">
        <div className="text-right text-[10px] text-slate-400 font-sans pr-2 font-medium leading-tight">Boundary<br/>(x)</div>
      </foreignObject>
      <line x1="80" y1="120" x2="420" y2="120" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
      <circle cx="80" cy="120" r="4" fill="#64748b" />
      <circle cx="220" cy="120" r="5" fill="#34d399" /> 
      <circle cx="420" cy="120" r="4" fill="#64748b" />
      
      <foreignObject x="65" y="135" width="30" height="20"><MathText content="10" className="text-center text-xs text-slate-300" /></foreignObject>
      <foreignObject x="205" y="135" width="30" height="25"><MathText content="Q_2" className="text-center text-sm font-bold text-emerald-400" /></foreignObject>
      <foreignObject x="405" y="135" width="30" height="20"><MathText content="20" className="text-center text-xs text-slate-300" /></foreignObject>

      {/* Visual Gap Brackets */}
      <path d="M 80 58 L 80 68 L 220 68 L 220 58" fill="none" stroke="#334155" strokeWidth="1" />
      <foreignObject x="110" y="72" width="80" height="20">
        <MathText content="\text{Gap} = 5" className="text-center text-[10px] text-slate-400" />
      </foreignObject>
      
      <path d="M 80 102 L 80 92 L 420 92 L 420 102" fill="none" stroke="#334155" strokeWidth="1" />
      <foreignObject x="210" y="72" width="80" height="20">
        <MathText content="\text{Total} = 12" className="text-center text-[10px] text-slate-400" />
      </foreignObject>
    </svg>

    <div className="w-full px-8 border-t border-slate-800/60 pt-6 bg-slate-900/40">
      <p className="text-[11px] text-slate-300 leading-relaxed italic text-center mb-4">
        Interpolation maps the fraction of the frequency directly onto the fraction of the class width:
      </p>
      <div className="flex justify-center mb-4">
        <div className="text-emerald-400 font-mono text-sm bg-slate-950 py-3 px-6 rounded-lg border border-slate-800 shadow-md">
          <MathText content="\frac{Q_2 - 10}{20 - 10} = \frac{10 - 5}{17 - 5}" />
        </div>
      </div>
    </div>
  </div>
);

// ==========================================
// Fig 6. Diagnostic Residual Analysis
// ==========================================
export const ResidualAnalysisSVG: React.FC = () => (
  <div className="w-full flex flex-col items-center py-12 mb-12 border border-slate-800 bg-slate-950 relative shadow-[8px_8px_0px_#0f172a] rounded-xl overflow-hidden">
    <div className="absolute top-0 right-0 bg-slate-900 text-slate-400 border-b border-l border-slate-800 px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
      Fig 6. Diagnostic Residual Analysis
    </div>
    
    <svg width="500" height="200" viewBox="0 0 500 200" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision">
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

    <p className="text-[11px] font-sans text-slate-400 text-center mt-4 px-6 italic">
      A completely random dispersion of residual plots validates the reliability of a linear model fit.
      <br/><strong className="text-rose-400 not-italic uppercase text-[10px]">CCEA Exam Pitfall:</strong> Clear parabolic patterns like the one above indicate that a non-linear relationship exists, proving that a linear PMCC calculation is an invalid metric.
    </p>
  </div>
);