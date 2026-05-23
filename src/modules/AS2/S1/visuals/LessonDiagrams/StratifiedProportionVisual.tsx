import React from 'react';
import { MathText } from '@/core/components/MathText';
import { DiagramLabel } from '@/core/diagram-engine/primitives/DiagramLabel';

export const StratifiedProportionVisual: React.FC = () => (
  <div className="w-full flex flex-col items-center py-10 mb-12 border border-zinc-800 bg-[#141416] relative shadow-inner rounded-xl overflow-hidden">
    <div className="absolute top-0 right-0 bg-zinc-900 text-zinc-400 border-l border-b border-zinc-800 px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
      Fig 3. Stratified Sample Allocation
    </div>

    <div className="relative w-full aspect-52/20 max-w-2xl mx-auto">
      <svg viewBox="40 15 520 200" className="absolute inset-0 w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" overflow="visible">
        <defs>
          <marker id="flow-arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#64748b" />
          </marker>
        </defs>

        {/* Main Population Node */}
        <rect x="50" y="85" width="120" height="50" rx="8" fill="#141417" stroke="#a1a1aa" strokeWidth="2" />

        {/* Path lines */}
        <line x1="170" y1="110" x2="250" y2="50" stroke="#64748b" strokeWidth="2" markerEnd="url(#flow-arrow)" />
        <line x1="170" y1="110" x2="250" y2="110" stroke="#64748b" strokeWidth="2" markerEnd="url(#flow-arrow)" />
        <line x1="170" y1="110" x2="250" y2="170" stroke="#64748b" strokeWidth="2" markerEnd="url(#flow-arrow)" />

        {/* Strata Nodes */}
        <rect x="260" y="25" width="100" height="50" rx="6" fill="#1e293b" stroke="#34d399" strokeWidth="2" />
        <rect x="260" y="85" width="100" height="50" rx="6" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
        <rect x="260" y="145" width="100" height="50" rx="6" fill="#1e293b" stroke="#c084fc" strokeWidth="2" />

        {/* Target Sample Node */}
        <rect x="430" y="85" width="120" height="50" rx="8" fill="#141417" stroke="#f43f5e" strokeWidth="2" strokeDasharray="4 4" />
      </svg>

      <DiagramLabel position={{ left: '21.1%', top: '48%' }}>
        <div className="text-center w-24">
          <div className="text-[#f8fafc] text-[10px] font-bold">Total Population</div>
          <div className="text-[#a1a1aa] text-[9px] font-mono">N = 300</div>
        </div>
      </DiagramLabel>

      <DiagramLabel position={{ left: '59.6%', top: '22%' }}>
        <div className="text-center w-20">
          <div className="text-[#94a3b8] text-[9px] font-bold">Yr 12 Strata</div>
          <div className="text-[#34d399] text-[9px] font-mono">Pop: 120</div>
        </div>
      </DiagramLabel>

      <DiagramLabel position={{ left: '59.6%', top: '52%' }}>
        <div className="text-center w-20">
          <div className="text-[#94a3b8] text-[9px] font-bold">Yr 13 Strata</div>
          <div className="text-[#f59e0b] text-[9px] font-mono">Pop: 100</div>
        </div>
      </DiagramLabel>

      <DiagramLabel position={{ left: '59.6%', top: '82%' }}>
        <div className="text-center w-20">
          <div className="text-[#94a3b8] text-[9px] font-bold">Yr 14 Strata</div>
          <div className="text-[#c084fc] text-[9px] font-mono">Pop: 80</div>
        </div>
      </DiagramLabel>

      <DiagramLabel position={{ left: '94.2%', top: '48%' }}>
        <div className="text-center w-24">
          <div className="text-[#f8fafc] text-[10px] font-bold">Target Sample</div>
          <div className="text-[#f43f5e] text-[9px] font-mono">n = 60</div>
        </div>
      </DiagramLabel>
    </div>

    <div className="w-full px-8 border-t border-zinc-800/60 pt-6 bg-zinc-900/40 text-[12px]">
      <span className="text-zinc-400 font-bold uppercase tracking-wider block mb-3 text-[10px]">Mathematical Allocation Pipeline:</span>
      <p className="text-zinc-300 leading-relaxed mb-4 italic">
        To maintain proportional representation, we calculate: <span className="text-emerald-400 font-bold not-italic font-mono bg-zinc-900 px-1 py-0.5 rounded border border-zinc-700">(Strata Size ÷ Total Population) × Sample Size</span>
      </p>
      <div className="bg-[#141416] p-4 rounded-lg border border-zinc-800 font-mono space-y-4 text-zinc-300">
        <div className="flex items-center gap-4">
          <span className="w-24 text-zinc-400">Yr 12 Sample:</span> 
          <MathText content="\frac{120}{300} \times 60 = 24" className="text-emerald-400" />
        </div>
        <div className="flex items-center gap-4">
          <span className="w-24 text-zinc-400">Yr 13 Sample:</span> 
          <MathText content="\frac{100}{300} \times 60 = 20" className="text-amber-400" />
        </div>
        <div className="flex items-center gap-4">
          <span className="w-24 text-zinc-400">Yr 14 Sample:</span> 
          <MathText content="\frac{80}{300} \times 60 = 16" className="text-purple-400" />
        </div>
      </div>
      <p className="text-[10px] text-zinc-500 font-mono mt-3 text-right">
        Verification Check: 24 + 20 + 16 = 60
      </p>
    </div>
  </div>
);
