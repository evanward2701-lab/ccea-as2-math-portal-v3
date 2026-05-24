import React from 'react';
import { MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { DiagramLabel } from '@/core/diagram-engine/primitives/DiagramLabel';

export const HistogramDensitySVG: React.FC = () => (
  <DiagramPanel
    title="Fig 1. Histogram Geometry"
    analysis={
      <div className="space-y-3">
        <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg">
          <p className="text-sm text-zinc-300 leading-relaxed">
            In a histogram, the <strong className="font-semibold text-emerald-400">area</strong> of each bar represents the <strong className="font-semibold text-emerald-400">frequency</strong>, not the height.
          </p>
        </div>
        <div className="p-4 bg-rose-950/30 border border-rose-900/40 rounded-lg">
          <h4 className="font-bold text-rose-400 mb-2 text-sm uppercase tracking-wider">CCEA Exam Pitfall</h4>
          <p className="text-sm text-rose-300 leading-relaxed mb-3">
            Do not read the bar height as the frequency when class widths are unequal.
          </p>
          <div className="text-center bg-[#141416] p-2 rounded border border-zinc-800/60">
            <MathText content="\text{Area} = \text{Width} \times \text{Height}" />
          </div>
        </div>
      </div>
    }
  >
    <div className="relative w-full aspect-57/28 max-w-lg mx-auto">
      <svg viewBox="-60 -10 570 280" className="absolute inset-0 w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" overflow="visible">
        {/* Grid Lines */}
        <line x1="50" y1="60" x2="450" y2="60" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="50" y1="100" x2="450" y2="100" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="50" y1="140" x2="450" y2="140" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />

        {/* Axes */}
        <path d="M50 25 L50 200 L460 200" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
        
        {/* Bars */}
        <rect x="50" y="60" width="100" height="140" fill="#141417" stroke="#3f3f46" strokeWidth="2" className="hover:fill-zinc-800 transition-colors" />
        <rect x="150" y="100" width="100" height="100" fill="#141417" stroke="#3f3f46" strokeWidth="2" className="hover:fill-zinc-800 transition-colors" />
        <rect x="250" y="140" width="200" height="60" fill="#022c22" stroke="#10b981" strokeWidth="2" className="hover:fill-emerald-900/50 transition-colors" />
      </svg>

      <DiagramLabel x="5%" y="40%">
        <div className="text-[#94a3b8] text-sm -rotate-90 origin-center w-32 text-center">Frequency Density</div>
      </DiagramLabel>

      <DiagramLabel x="17.5%" y="75%">
        <div className="text-[#64748b] text-[10px]">width = 10</div>
      </DiagramLabel>
      <DiagramLabel x="35.1%" y="75%">
        <div className="text-[#64748b] text-[10px]">width = 10</div>
      </DiagramLabel>
      <DiagramLabel x="61.4%" y="75%">
        <div className="text-[#64748b] text-[10px]">width = 20</div>
      </DiagramLabel>

      <DiagramLabel x="45.6%" y="85%" text="\text{Time } (t)" />

      <DiagramLabel x="61.4%" y="55%">
        <div className="text-emerald-400 text-sm font-semibold tracking-wide bg-[#141416]/40 rounded px-2 py-1">
          <MathText content="\text{Area} = \text{Frequency}" />
        </div>
      </DiagramLabel>
    </div>
  </DiagramPanel>
);
