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
          <p className="text-sm text-muted-foreground italic text-center">
            When velocity changes sign (crosses the time axis), the object changes direction.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3 bg-primary/20 border border-primary/30 rounded-lg">
              <h4 className="font-bold text-primary mb-1 text-xs uppercase tracking-wider">Displacement</h4>
              <p className="text-xs text-foreground leading-relaxed">Net area (Positive Area - Negative Area). In this graph, it is the directed distance from the start.</p>
            </div>
            <div className="p-3 bg-primary/20 border border-primary/30 rounded-lg">
              <h4 className="font-bold text-primary mb-1 text-xs uppercase tracking-wider">Total Distance</h4>
              <p className="text-xs text-foreground leading-relaxed">Total area (|Positive| + |Negative|). The odometer reading of the journey.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3 bg-primary/20 border border-primary/30 rounded-lg">
              <h4 className="font-bold text-primary mb-2 text-xs uppercase tracking-wider">Displacement Working</h4>
              <div className="space-y-2">
                <div className="rounded border border-primary/20 bg-card p-2 text-center">
                  <MathText content="A = \\frac{1}{2}\\times4\\times20" noMargin />
                </div>
                <div className="rounded border border-primary/20 bg-card p-2 text-center">
                  <MathText content="= 40\\mathrm{m}" noMargin />
                </div>
                <div className="rounded border border-primary/20 bg-card p-2 text-center">
                  <MathText content="B = \\frac{1}{2}\\times(6-4)\\times10" noMargin />
                </div>
                <div className="rounded border border-primary/20 bg-card p-2 text-center">
                  <MathText content="= 10\\mathrm{m}" noMargin />
                </div>
                <div className="rounded border border-primary/20 bg-card p-2 text-center">
                  <MathText content="\\text{Displacement} = 40 - 10" noMargin />
                </div>
                <div className="rounded border border-primary/20 bg-card p-2 text-center">
                  <MathText content="= 30\\mathrm{m}" noMargin />
                </div>
              </div>
            </div>
            <div className="p-3 bg-primary/20 border border-primary/30 rounded-lg">
              <h4 className="font-bold text-primary mb-2 text-xs uppercase tracking-wider">Distance Working</h4>
              <div className="space-y-2">
                <div className="rounded border border-primary/20 bg-card p-2 text-center">
                  <MathText content="A = \\frac{1}{2}\\times4\\times20" noMargin />
                </div>
                <div className="rounded border border-primary/20 bg-card p-2 text-center">
                  <MathText content="= 40\\mathrm{m}" noMargin />
                </div>
                <div className="rounded border border-primary/20 bg-card p-2 text-center">
                  <MathText content="B = \\frac{1}{2}\\times(6-4)\\times10" noMargin />
                </div>
                <div className="rounded border border-primary/20 bg-card p-2 text-center">
                  <MathText content="= 10\\mathrm{m}" noMargin />
                </div>
                <div className="rounded border border-primary/20 bg-card p-2 text-center">
                  <MathText content="\\text{Distance} = 40 + 10" noMargin />
                </div>
                <div className="rounded border border-primary/20 bg-card p-2 text-center">
                  <MathText content="= 50\\mathrm{m}" noMargin />
                </div>
              </div>
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
          <line x1="100" y1="190" x2="400" y2="190" stroke="#475569" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="400" y1="150" x2="400" y2="190" stroke="#475569" strokeWidth="1" strokeDasharray="2 2" />
        </svg>

        <DiagramLabel x="11.5%" y="7.5%" text="v\\text{ (m s}^{-1}\\text{)}" />
        <DiagramLabel x="93%" y="51.5%" text="t\\text{ (s)}" />

        <DiagramLabel x="24%" y="39%">
          <div className="text-2.5 font-bold text-primary">Area A (+)</div>
        </DiagramLabel>

        <DiagramLabel x="57.5%" y="51%">
          <div className="text-2.5 font-bold text-destructive">Area B (-)</div>
        </DiagramLabel>

        <DiagramLabel x="13.3%" y="20.5%">
          <div className="text-xs font-bold text-primary">20</div>
        </DiagramLabel>

        <DiagramLabel x="49.1%" y="43.5%">
          <div className="text-xs font-bold text-muted-foreground">4</div>
        </DiagramLabel>

        <DiagramLabel x="13.3%" y="62%">
          <div className="text-xs font-bold text-primary">-10</div>
        </DiagramLabel>
        <DiagramLabel x="65.8%" y="43.5%">
          <div className="text-xs font-bold text-muted-foreground">6</div>
        </DiagramLabel>

        <DiagramLabel x="70%" y="16.7%">
          <div className="bg-primary/5 p-3 rounded-lg border border-primary/20 space-y-2 shadow-xl">
            <div className="text-2.5 text-primary font-bold uppercase tracking-wider">Displacement:</div>
            <div className="text-xs text-foreground font-mono text-center">Area A - Area B</div>
            <div className="text-2.5 text-primary font-bold uppercase tracking-wider mt-2">Distance:</div>
            <div className="text-xs text-foreground font-mono text-center">Area A + Area B</div>
          </div>
        </DiagramLabel>
      </div>
    </DiagramPanel>
  );
};
