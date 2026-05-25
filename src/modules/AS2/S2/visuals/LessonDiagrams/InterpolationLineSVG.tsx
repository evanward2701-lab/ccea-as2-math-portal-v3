import React from 'react';
import { MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { DiagramLabel } from '@/core/diagram-engine/DiagramLabel';

export const InterpolationLineSVG: React.FC = () => (
  <DiagramPanel
    title="Fig 5. Linear Interpolation Setup"
    analysis={
      <div className="space-y-3">
        <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg">
          <h4 className="font-bold text-zinc-400 mb-2 text-sm uppercase tracking-wider">Assumption</h4>
          <p className="text-sm text-zinc-300 leading-relaxed">
            Interpolation assumes values are evenly distributed across the class interval. It maps the fraction of the frequency gap directly onto the same fraction of the class width.
          </p>
        </div>
        <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg">
          <h4 className="font-bold text-amber-400 mb-2 text-sm uppercase tracking-wider">Frequency Fraction</h4>
          <p className="text-sm text-zinc-300 leading-relaxed mb-3">
            Move 5 out of the total 12 cumulative-frequency gap.
          </p>
          <div className="text-center bg-[#141416] p-2 rounded border border-zinc-800/60">
            <MathText content="\frac{10 - 5}{17 - 5} = \frac{5}{12}" />
          </div>
        </div>
        <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg">
          <h4 className="font-bold text-emerald-400 mb-2 text-sm uppercase tracking-wider">Class-width Fraction</h4>
          <p className="text-sm text-zinc-300 leading-relaxed mb-3">
            Apply the same fraction across the class width from 10 to 20.
          </p>
          <div className="text-center bg-[#141416] p-2 rounded border border-zinc-800/60">
            <MathText content="Q_2 = 10 + \frac{5}{12}(20 - 10)" />
          </div>
        </div>
      </div>
    }
  >
    <div className="flex flex-col items-center space-y-4 w-full">
      <div className="relative w-full aspect-52/20 max-w-lg mx-auto">
        <svg viewBox="-10 -10 520 200" className="absolute inset-0 w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" overflow="visible">
          {/* Top Line: Cumulative Frequency */}
          <line x1="80" y1="40" x2="420" y2="40" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
          <circle cx="80" cy="40" r="4" fill="#64748b" />
          <circle cx="220" cy="40" r="5" fill="#a1a1aa" /> 
          <circle cx="420" cy="40" r="4" fill="#64748b" />

          {/* Visual Gap Brackets */}
          <path d="M 80 50 L 80 55 L 220 55 L 220 50" fill="none" stroke="#475569" strokeWidth="1" />
          <path d="M 80 70 L 80 75 L 420 75 L 420 70" fill="none" stroke="#475569" strokeWidth="1" />

          {/* Connection Dashed Lines */}
          <line x1="80" y1="40" x2="80" y2="120" stroke="#3f3f46" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="220" y1="40" x2="220" y2="120" stroke="#a1a1aa" strokeWidth="2.5" strokeDasharray="4 4" />
          <line x1="420" y1="40" x2="420" y2="120" stroke="#3f3f46" strokeWidth="1" strokeDasharray="4 4" />

          {/* Bottom Line: Class Boundaries (x) */}
          <line x1="80" y1="120" x2="420" y2="120" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
          <circle cx="80" cy="120" r="4" fill="#64748b" />
          <circle cx="220" cy="120" r="5" fill="#34d399" /> 
          <circle cx="420" cy="120" r="4" fill="#64748b" />
        </svg>

        <DiagramLabel x="0%" y="20%">
          <div className="text-right text-[10px] text-zinc-400 font-sans pr-2 font-medium leading-tight">Cumulative<br/>Frequency</div>
        </DiagramLabel>

        <DiagramLabel x="15.4%" y="5%" text="5" />
        <DiagramLabel x="42.3%" y="5%" text="10" />
        <DiagramLabel x="80.8%" y="5%" text="17" />

        <DiagramLabel x="26.9%" y="29%">
          <div className="text-center text-[10px] text-zinc-400">gap = 5</div>
        </DiagramLabel>
        <DiagramLabel x="46.2%" y="39%">
          <div className="text-center text-[10px] text-zinc-400">total = 12</div>
        </DiagramLabel>

        <DiagramLabel x="0%" y="60%">
          <div className="text-right text-[10px] text-zinc-400 font-sans pr-2 font-medium leading-tight">Class<br/>Boundary</div>
        </DiagramLabel>

        <DiagramLabel x="15.4%" y="67.5%" text="10" />
        <DiagramLabel x="42.3%" y="67.5%" text="Q_2" />
        <DiagramLabel x="80.8%" y="67.5%" text="20" />
      </div>
      
      <div className="w-full max-w-md">
        <div className="p-3 bg-[#141416] border border-zinc-800 rounded-lg text-center">
          <h5 className="text-xs text-zinc-400 uppercase font-bold tracking-wider mb-2">Interpolation Ratio</h5>
          <div className="text-emerald-400 font-mono text-lg">
            <MathText content="\frac{Q_2 - 10}{20 - 10} = \frac{10 - 5}{17 - 5}" />
          </div>
          <div className="text-zinc-400 font-mono text-base mt-2">
            <MathText content="\frac{Q_2 - 10}{10} = \frac{5}{12}" />
          </div>
        </div>
      </div>
    </div>
  </DiagramPanel>
);
