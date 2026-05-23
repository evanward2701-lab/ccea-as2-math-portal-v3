import React from 'react';
import { MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { DiagramLabel } from '@/core/diagram-engine/primitives/DiagramLabel';

export const M2CrossingAxisVTGraph: React.FC = () => {
  return (
    <DiagramPanel
      title="Fig. V-T Graph: Distance vs Displacement"
      analysis={
        <div className="space-y-4">
          <p className="text-sm text-zinc-400 italic text-center">
            When velocity changes sign (crosses the time axis), the object changes direction.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3 bg-emerald-950/20 border border-emerald-500/30 rounded-lg">
              <h4 className="font-bold text-emerald-400 mb-1 text-xs uppercase tracking-wider">Displacement</h4>
              <p className="text-xs text-zinc-300 leading-relaxed">Net area (Positive Area - Negative Area). In this graph, it is the directed distance from the start.</p>
            </div>
            <div className="p-3 bg-amber-950/20 border border-amber-500/30 rounded-lg">
              <h4 className="font-bold text-amber-400 mb-1 text-xs uppercase tracking-wider">Total Distance</h4>
              <p className="text-xs text-zinc-300 leading-relaxed">Total area (|Positive| + |Negative|). The odometer reading of the journey.</p>
            </div>
          </div>
        </div>
      }
    >
      <div className="relative w-full max-w-2xl aspect-60/30 select-none">
        <svg viewBox="0 0 600 300" className="absolute inset-0 w-full h-full" overflow="visible" shapeRendering="geometricPrecision">
          {/* Axes */}
          <line x1="50" y1="150" x2="550" y2="150" stroke="#475569" strokeWidth="2" /> {/* t-axis */}
          <line x1="100" y1="40" x2="100" y2="260" stroke="#475569" strokeWidth="2" /> {/* v-axis */}

          {/* Shaded Areas */}
          {/* Area 1: Positive (0 to 4s) */}
          <path d="M 100 150 L 100 70 L 300 150 Z" fill="#10b981" fillOpacity="0.25" stroke="#10b981" strokeWidth="1" strokeDasharray="4 2" />
          
          {/* Area 2: Negative (4 to 6s) */}
          <path d="M 300 150 L 400 190 L 400 150 Z" fill="#f43f5e" fillOpacity="0.25" stroke="#f43f5e" strokeWidth="1" strokeDasharray="4 2" />

          {/* Velocity Line */}
          <line x1="100" y1="70" x2="400" y2="190" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
          
          {/* Key Points */}
          <circle cx="100" cy="70" r="4" fill="#f59e0b" />
          <circle cx="300" cy="150" r="4" fill="#f59e0b" />
          <circle cx="400" cy="190" r="4" fill="#f59e0b" />
          <line x1="400" y1="150" x2="400" y2="190" stroke="#475569" strokeWidth="1" strokeDasharray="2 2" />
        </svg>

        <DiagramLabel position={{ left: '11.5%', top: '15%' }}>
          <MathText content="v" className="text-zinc-400 font-bold italic text-xs" />
        </DiagramLabel>
        <DiagramLabel position={{ left: '93%', top: '51.5%' }}>
          <MathText content="t" className="text-zinc-400 font-bold italic text-xs" />
        </DiagramLabel>

        <DiagramLabel position={{ left: '26.6%', top: '43.3%' }}>
          <div className="text-[10px] font-bold text-emerald-400">Area A (+)</div>
        </DiagramLabel>

        <DiagramLabel position={{ left: '57.5%', top: '58.3%' }}>
          <div className="text-[10px] font-bold text-rose-400">Area B (-)</div>
        </DiagramLabel>

        <DiagramLabel position={{ left: '13.3%', top: '25%' }}>
          <div className="text-xs font-bold text-amber-500">20</div>
        </DiagramLabel>

        <DiagramLabel position={{ left: '49.1%', top: '56%' }}>
          <div className="text-xs font-bold text-zinc-400">4s</div>
        </DiagramLabel>

        <DiagramLabel position={{ left: '67.5%', top: '66.6%' }}>
          <div className="text-xs font-bold text-amber-500">-10</div>
        </DiagramLabel>
        <DiagramLabel position={{ left: '65.8%', top: '48.3%' }}>
          <div className="text-xs font-bold text-zinc-400">6s</div>
        </DiagramLabel>

        <DiagramLabel position={{ left: '70%', top: '16.7%' }}>
          <div className="bg-zinc-900/80 p-3 rounded-lg border border-zinc-800 space-y-2 shadow-xl">
            <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">Displacement:</div>
            <div className="text-xs text-zinc-200 font-mono text-center">Area A - Area B</div>
            <div className="text-[10px] text-amber-400 font-bold uppercase tracking-wider mt-2">Distance:</div>
            <div className="text-xs text-zinc-200 font-mono text-center">Area A + Area B</div>
          </div>
        </DiagramLabel>
      </div>
    </DiagramPanel>
  );
};
