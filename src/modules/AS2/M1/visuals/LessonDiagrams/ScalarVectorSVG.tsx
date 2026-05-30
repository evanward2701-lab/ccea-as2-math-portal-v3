import React from 'react';
import { MathInline } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { Particle } from '@/core/diagram-engine/primitives/PhysicsPrimitives';
import { SVGLibrary } from '@/core/diagram-engine/primitives/SVGLibrary';
import { VectorArrow } from '@/core/diagram-engine/primitives/VectorArrow';

export const ScalarVectorSVG: React.FC = () => {
  return (
    <DiagramPanel
      title="Fig 2. Scalar vs Vector"
      analysis={
        <div className="grid gap-4 md:grid-cols-2 w-full max-w-5xl mx-auto px-2">
          {/* Scalars Category Grid Card */}
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-5 shadow-sm">
            <h4 className="mb-2 font-bold text-primary text-lg">
              <MathInline content="$\text{Scalars}$" />
            </h4>
            <p className="mb-4 text-base leading-relaxed text-muted-foreground">
              Magnitude only. A number with units, but no spatial direction.
            </p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {['mass', 'time', 'distance', 'speed'].map((item) => (
                <div key={item} className="rounded-lg border border-primary/40 bg-card px-3 py-2.5 text-center font-bold tracking-wide uppercase text-primary/90 shadow-inner">
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Vectors Category Grid Card */}
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-5 shadow-sm">
            <h4 className="mb-2 font-bold text-primary text-lg">
              <MathInline content="$\text{Vectors}$" />
            </h4>
            <p className="mb-4 text-base leading-relaxed text-muted-foreground">
              Magnitude and direction. Direction is part of the final answer.
            </p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {['displacement', 'velocity', 'acceleration', 'force', 'weight'].map((item) => (
                <div key={item} className="rounded-lg border border-primary/40 bg-card px-3 py-2.5 text-center font-bold tracking-wide uppercase text-primary/90 shadow-inner">
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Core Kinematic Directives Rule Footer Block */}
          <div className="md:col-span-2 rounded-xl border border-destructive/40 bg-destructive/20 p-4 text-center text-base font-semibold text-destructive max-w-4xl mx-auto w-full shadow-md">
            The negative component affects direction, not the final speed.
          </div>
        </div>
      }
    >
      {/* Complete Uniform Geometry Enclosure Track */}
      <div className="relative w-full aspect-80/50 max-w-5xl mx-auto rounded-xl overflow-hidden border border-primary/20 bg-card shadow-2xl">
        <SVGLibrary />
        
        {/* Unified Scalar-Vector Coordinate Space Graphics */}
        <svg
          viewBox="0 0 800 500"
          className="w-full h-full absolute inset-0 z-0"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* ==================== UPPER ROW SECTION ENCLOSURES ==================== */}
          <rect x="40" y="30" width="340" height="110" rx="12" fill="var(--muted)" fillOpacity="0.4" stroke="var(--border)" strokeWidth="2" />
          <rect x="420" y="30" width="340" height="110" rx="12" fill="var(--muted)" fillOpacity="0.4" stroke="var(--border)" strokeWidth="2" />

          {/* ==================== LOWER VECTOR COORDINATE ENGINE FRAME ==================== */}
          <rect x="40" y="170" width="720" height="220" rx="12" fill="var(--muted)" fillOpacity="0.4" stroke="var(--border)" strokeWidth="1.5" />

          {/* Coordinate System Unit Grid Axes lines */}
          <VectorArrow x1={120} y1={210} x2={120} y2={360} type="structural" strokeWidth={2} />
          <VectorArrow x1={120} y1={210} x2={420} y2={210} type="structural" strokeWidth={2} />

          {/* Subtitle Vector Component Projections (Dashed) */}
          {/* Horizontal component 7i */}
          <VectorArrow x1={120} y1={210} x2={280} y2={210} type="velocity" dashed marker="none" strokeWidth={2.5} />
          {/* Vertical component -24j */}
          <VectorArrow x1={280} y1={210} x2={280} y2={345} type="weight" dashed marker="none" strokeWidth={2.5} />

          {/* Resultant True Velocity Vector Line Hypotenuse */}
          <VectorArrow x1={120} y1={210} x2={280} y2={345} type="velocity" strokeWidth={3.5} />

          {/* Target Intersection Points Nodes */}
          <Particle cx={120} cy={210} r={6} fill="var(--foreground)" />
          <Particle cx={280} cy={345} r={6} fill="#10b981" />

          {/* ==================== LOWER CALCULATION BLOCK PANEL STRIP ==================== */}
          <rect x="40" y="415" width="720" height="50" rx="10" fill="var(--background)" stroke="var(--border)" strokeWidth="2" />
        </svg>

        {/* Absolute Positioned Layout Typography Sheet Layer */}
        <div className="absolute inset-0 z-10 pointer-events-none select-none">
          
          <div className="absolute left-[5%] top-[6%] flex h-[22%] w-[42.5%] items-center justify-center gap-4 px-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-primary/30 bg-card text-xl font-black text-primary shadow-md">
              <MathInline content="$7$" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-primary"><MathInline content="$\text{Scalar: magnitude only}$" /></span>
              <span className="text-muted-foreground text-xs mt-0.5"><MathInline content="$\text{A number with units, but no direction.}$" /></span>
            </div>
          </div>

          <div className="absolute left-[52.5%] top-[6%] flex h-[22%] w-[42.5%] items-center justify-center gap-4 px-6">
            <div className="w-17.5 h-12.5 relative shrink-0">
              <svg className="w-full h-full" viewBox="0 0 70 50">
                <VectorArrow x1={5} y1={45} x2={60} y2={10} type="velocity" strokeWidth={3.5} />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-primary"><MathInline content="$\text{Vector: magnitude + direction}$" /></span>
              <span className="text-muted-foreground text-xs mt-0.5"><MathInline content="$\text{Direction is part of the final answer.}$" /></span>
            </div>
          </div>

          {/* --- LOWER COORDINATE SYSTEM LABELS --- */}
          <div className="absolute left-[53.5%] top-[40%] text-sm text-muted-foreground font-bold"><MathInline content="$\mathbf{i}$" /></div>
          <div className="absolute left-[14.5%] top-[70%] text-sm text-muted-foreground font-bold"><MathInline content="$-\mathbf{j}$" /></div>

          {/* Vector component magnitude flags */}
          <div className="absolute left-[24%] top-[35.5%] rounded-lg border border-primary/50 bg-card/95 px-2 py-1 text-xs font-bold text-primary shadow-sm">
            <MathInline content="$7\mathbf{i}$" />
          </div>
          <div className="absolute left-[36.5%] top-[56%] rounded-lg border border-destructive/50 bg-card/95 px-2 py-1 text-xs font-bold text-destructive shadow-sm">
            <MathInline content="$-24\mathbf{j}$" />
          </div>

          {/* Vector block centered inside card view limits */}
          <div className="absolute left-[63%] top-[47%] min-w-52.5 rounded-xl border border-primary bg-card/95 px-4 pt-3.5 pb-4 text-center shadow-lg flex flex-col justify-center items-center">
            <div className="text-sm font-bold text-primary leading-none mb-1">
              <MathInline content="$\mathbf{v} = 7\mathbf{i} - 24\mathbf{j}\quad\text{m s}^{-1}$" />
            </div>
            <div className="text-2.75 font-semibold text-muted-foreground uppercase tracking-wide leading-none mt-1">
              Velocity is a vector
            </div>
          </div>

          <div className="absolute left-[64.5%] top-[69%] text-xs font-medium text-destructive/90 max-w-40 text-center leading-relaxed">
            Negative component points downward
          </div>

          <div className="absolute left-[5%] top-[83%] flex h-[10%] w-[90%] items-center justify-center text-center text-sm font-bold text-primary">
            <MathInline content="$|\mathbf{v}| = \sqrt{7^2 + (-24)^2} = 25\quad\text{m s}^{-1}$" />
          </div>

        </div>

      </div>
    </DiagramPanel>
  );
};
