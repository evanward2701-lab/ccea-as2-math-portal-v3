import React from 'react';
import { MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { DiagramLabel } from '@/core/diagram-engine/primitives/DiagramLabel';

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
    <div className="relative w-full aspect-48/31 max-w-lg mx-auto">
      <svg viewBox="20 0 480 310" className="absolute inset-0 w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" overflow="visible">
        {/* Axes */}
        <path d="M50 30 L50 250 L470 250" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
        
        {/* Group A Cluster Boundary */}
        <ellipse cx="150" cy="180" rx="60" ry="40" transform="rotate(-30 150 180)" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 4" fill="rgba(56, 189, 248, 0.05)" />
        {[ [110, 160], [130, 175], [150, 180], [170, 190], [180, 205] ].map(([cx, cy], i) => (
          <circle key={'a'+i} cx={cx} cy={cy} r="4.5" fill="#38bdf8" className="transition-all duration-300 hover:r-6 cursor-pointer" />
        ))}

        {/* Group B Cluster Boundary */}
        <ellipse cx="350" cy="100" rx="60" ry="40" transform="rotate(-30 350 100)" stroke="#c084fc" strokeWidth="1.5" strokeDasharray="4 4" fill="rgba(192, 132, 252, 0.05)" />
        {[ [310, 80], [330, 95], [350, 100], [370, 110], [380, 125] ].map(([cx, cy], i) => (
          <circle key={'b'+i} cx={cx} cy={cy} r="4.5" fill="#c084fc" className="transition-all duration-300 hover:r-6 cursor-pointer" />
        ))}

        {/* Misleading Overall Trend Line (Positive) */}
        <line x1="80" y1="230" x2="420" y2="50" stroke="#f43f5e" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="6 4" />
      </svg>

      <DiagramLabel position={{ left: '5.2%', top: '3.2%' }}>
        <MathText content="y" className="text-slate-400 text-sm" />
      </DiagramLabel>
      <DiagramLabel position={{ left: '94.8%', top: '82.3%' }}>
        <MathText content="x" className="text-slate-400 text-sm" />
      </DiagramLabel>

      <DiagramLabel position={{ left: '22.9%', top: '72.6%' }}>
        <div className="text-xs font-semibold text-sky-400">Group A</div>
      </DiagramLabel>

      <DiagramLabel position={{ left: '64.6%', top: '11.3%' }}>
        <div className="text-xs font-semibold text-purple-400">Group B</div>
      </DiagramLabel>

      <DiagramLabel position={{ left: '45%', top: '38%' }}>
        <div className="flex items-center justify-center gap-2 text-center text-rose-400 text-[10px] font-mono font-bold tracking-widest uppercase bg-slate-950/90 border border-slate-800 px-3 py-1 rounded shadow-lg backdrop-blur-sm -rotate-[28deg]">
          <div className="w-3 h-3 rounded-full bg-rose-500 text-white flex items-center justify-center text-[9px] font-black shrink-0">!</div>
          <span>Misleading overall trend</span>
        </div>
      </DiagramLabel>
    </div>
  </DiagramPanel>
);
