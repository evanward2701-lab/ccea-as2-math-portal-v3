import React from 'react';
import { MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { DiagramLabel } from '@/core/diagram-engine/primitives/DiagramLabel';

export const M2GravitySignConvention: React.FC = () => {
  return (
    <DiagramPanel
      title="Fig 3. Vertical Motion Sign Convention"
      analysis={
        <>
          <div className="space-y-3">
            <div className="p-3 bg-zinc-900/50 border border-zinc-800 rounded-lg">
              <p className="text-sm text-zinc-300 leading-relaxed">Gravity always acts downwards.</p>
            </div>
            <div className="p-3 bg-zinc-900/50 border border-zinc-800 rounded-lg">
              <p className="text-sm text-zinc-300 leading-relaxed">The sign of acceleration depends entirely on which direction is chosen as positive.</p>
            </div>
          </div>
          <div className="mt-4 p-3 bg-rose-950/30 border border-rose-900/40 rounded-lg text-sm text-rose-300">
            <strong>Exam Warning:</strong> Submitting two independent workflows with differing sign allocations to "guess" the mark scheme triggers the <em>Poorest Attempt Rule</em>, zeroing the question score.
          </div>
        </>
      }
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-4xl items-center">
        {/* Left Column: Physical Direction */}
        <div className="flex flex-col items-center justify-center bg-zinc-900/50 p-6 rounded-lg border border-zinc-800 h-full relative">
          <div className="relative w-full max-w-[160px] aspect-18/22 select-none">
            <svg viewBox="0 0 180 220" className="absolute inset-0 w-full h-full" shapeRendering="geometricPrecision" overflow="visible">
              <line x1="90" y1="50" x2="90" y2="200" stroke="#475569" strokeWidth="5" />
              <path d="M 82 180 L 90 200 L 98 180 Z" fill="#f43f5e" />
            </svg>
            <DiagramLabel position={{ left: '50%', top: '5%' }}>
              <div className="text-sm font-bold uppercase tracking-wider text-zinc-500 text-center w-32">Physical Direction</div>
            </DiagramLabel>
            <DiagramLabel position={{ left: '20%', top: '55%' }}>
              <div className="text-base font-bold text-rose-400 leading-tight text-right w-24">
                <MathText content="g = 9.8 \text{ m s}^{-2}" />
                <span className="text-sm block">acting downwards</span>
              </div>
            </DiagramLabel>
          </div>
        </div>

        {/* Right Column: Setups */}
        <div className="flex flex-col gap-4">
           {/* Setup 1: Upwards Positive */}
           <div className="bg-[#141416] border border-zinc-800 p-4 rounded-lg flex items-center gap-6 relative">
              <div className="relative w-20 h-28 shrink-0">
                <svg viewBox="0 0 80 120" className="absolute inset-0 w-full h-full" shapeRendering="geometricPrecision">
                  <line x1="40" y1="100" x2="40" y2="20" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrow-emerald)" />
                  <defs>
                    <marker id="arrow-emerald" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981" /></marker>
                  </defs>
                </svg>
                <DiagramLabel position={{ left: '50%', top: '10%' }}>
                  <div className="text-[10px] font-bold text-emerald-400 uppercase">Positive</div>
                </DiagramLabel>
              </div>
              <div className="flex-1">
                <h5 className="text-sm font-bold text-zinc-200 mb-1">Convention: Up is Positive</h5>
                <div className="bg-zinc-900/80 px-3 py-2 rounded font-mono text-emerald-400 text-sm border border-emerald-500/20">
                  a = -9.8
                </div>
                <p className="text-[10px] text-zinc-500 mt-2 italic">Standard for projectiles launched from ground.</p>
              </div>
           </div>

           {/* Setup 2: Downwards Positive */}
           <div className="bg-[#141416] border border-zinc-800 p-4 rounded-lg flex items-center gap-6 relative">
              <div className="relative w-20 h-28 shrink-0">
                <svg viewBox="0 0 80 120" className="absolute inset-0 w-full h-full" shapeRendering="geometricPrecision">
                  <line x1="40" y1="20" x2="40" y2="100" stroke="#f59e0b" strokeWidth="3" markerEnd="url(#arrow-amber)" />
                  <defs>
                    <marker id="arrow-amber" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#f59e0b" /></marker>
                  </defs>
                </svg>
                <DiagramLabel position={{ left: '50%', top: '90%' }}>
                  <div className="text-[10px] font-bold text-amber-400 uppercase">Positive</div>
                </DiagramLabel>
              </div>
              <div className="flex-1">
                <h5 className="text-sm font-bold text-zinc-200 mb-1">Convention: Down is Positive</h5>
                <div className="bg-zinc-900/80 px-3 py-2 rounded font-mono text-amber-400 text-sm border border-amber-500/20">
                  a = +9.8
                </div>
                <p className="text-[10px] text-zinc-500 mt-2 italic">Standard for objects dropped from height.</p>
              </div>
           </div>
        </div>
      </div>
    </DiagramPanel>
  );
};
