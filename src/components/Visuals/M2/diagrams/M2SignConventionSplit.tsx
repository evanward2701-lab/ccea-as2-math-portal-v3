import React from 'react';
import { MathText } from '../../../MathText';
import { DiagramPanel } from '../../../DiagramPanel';
import { DiagramLabel } from '../../../diagrams/primitives/DiagramLabel';

export const M2SignConventionSplit: React.FC = () => {
  return (
    <DiagramPanel
      title="Fig. SUVAT Sign Convention Comparison"
      analysis={
        <div className="space-y-4">
          <p className="text-sm text-slate-400 italic text-center">
            The choice of positive direction is arbitrary, but consistency is key. Both conventions yield the same physical result.
          </p>
          <div className="p-3 bg-rose-950/30 border border-rose-900/40 rounded-lg text-sm text-rose-300">
            <strong className="font-bold text-rose-400">CCEA Exam Pitfall:</strong> If you are unsure of a sign convention and present two competing solutions without clearly crossing one out, examiners will mark the <strong>poorest</strong> solution.
          </div>
        </div>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl items-center">
        {/* Upwards Positive */}
        <div className="flex flex-col items-center bg-slate-900/50 p-6 rounded-lg border border-slate-800 h-full relative">
          <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-400 mb-4">Upwards Positive</h4>
          <div className="relative w-full max-w-[160px] aspect-18/22">
            <svg viewBox="0 0 180 220" className="absolute inset-0 w-full h-full" shapeRendering="geometricPrecision" overflow="visible">
              {/* Upwards Positive Arrow */}
              <line x1="90" y1="180" x2="90" y2="20" stroke="#10b981" strokeWidth="3" strokeDasharray="3 3" />
              <path d="M 85 35 L 90 20 L 95 35 Z" fill="#10b981" />

              {/* Gravity Arrow */}
              <line x1="90" y1="100" x2="90" y2="150" stroke="#f43f5e" strokeWidth="2" />
              <path d="M 85 140 L 90 150 L 95 140 Z" fill="#f43f5e" />

              {/* Initial Velocity Example */}
              <line x1="110" y1="180" x2="110" y2="120" stroke="#f59e0b" strokeWidth="2" />
              <path d="M 105 135 L 110 120 L 115 135 Z" fill="#f59e0b" />
            </svg>
            <DiagramLabel position={{ left: '45%', top: '5%' }}>
              <div className="text-lg font-bold text-emerald-400 text-center">+</div>
            </DiagramLabel>
            <DiagramLabel position={{ left: '55%', top: '75%' }}>
              <MathText content="g" className="text-rose-400 text-sm" />
            </DiagramLabel>
            <DiagramLabel position={{ left: '65%', top: '55%' }}>
              <MathText content="u = +21" className="text-amber-400 text-xs" />
            </DiagramLabel>
            <DiagramLabel position={{ left: '50%', top: '85%' }}>
              <div className="text-center text-emerald-400 text-lg font-bold">
                <MathText content="a = -9.8" />
              </div>
            </DiagramLabel>
          </div>
        </div>

        {/* Downwards Positive */}
        <div className="flex flex-col items-center bg-slate-900/50 p-6 rounded-lg border border-slate-800 h-full relative">
          <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400 mb-4">Downwards Positive</h4>
          <div className="relative w-full max-w-[160px] aspect-18/22">
            <svg viewBox="0 0 180 220" className="absolute inset-0 w-full h-full" shapeRendering="geometricPrecision" overflow="visible">
              {/* Downwards Positive Arrow */}
              <line x1="90" y1="20" x2="90" y2="180" stroke="#f59e0b" strokeWidth="3" strokeDasharray="3 3" />
              <path d="M 85 165 L 90 180 L 95 165 Z" fill="#f59e0b" />

              {/* Gravity Arrow */}
              <line x1="90" y1="100" x2="90" y2="150" stroke="#10b981" strokeWidth="2" />
              <path d="M 85 140 L 90 150 L 95 140 Z" fill="#10b981" />

              {/* Initial Velocity Example */}
              <line x1="110" y1="20" x2="110" y2="80" stroke="#f43f5e" strokeWidth="2" />
              <path d="M 105 65 L 110 80 L 115 65 Z" fill="#f43f5e" />
            </svg>
            <DiagramLabel position={{ left: '45%', top: '85%' }}>
              <div className="text-lg font-bold text-amber-400 text-center">+</div>
            </DiagramLabel>
            <DiagramLabel position={{ left: '55%', top: '75%' }}>
              <MathText content="g" className="text-emerald-400 text-sm" />
            </DiagramLabel>
            <DiagramLabel position={{ left: '65%', top: '35%' }}>
              <MathText content="u = -21" className="text-rose-400 text-xs" />
            </DiagramLabel>
            <DiagramLabel position={{ left: '50%', top: '85%' }}>
              <div className="text-center text-amber-400 text-lg font-bold">
                <MathText content="a = +9.8" />
              </div>
            </DiagramLabel>
          </div>
        </div>
      </div>
    </DiagramPanel>
  );
};
