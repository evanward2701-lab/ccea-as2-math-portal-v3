import React from 'react';
import { MathInline } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { Particle } from '@/core/diagram-engine/PhysicsPrimitives';
import { DiagramLabel } from '@/core/diagram-engine/DiagramLabel';
import { VectorArrow } from '@/core/diagram-engine/VectorArrow';
import { SVGLibrary } from '@/core/diagram-engine/SVGLibrary';

export const ScalarVectorSpatialMapSVG: React.FC = () => {
  return (
    <DiagramPanel
      title="Fig. Distance vs. Displacement"
      analysis={
        <div className="grid gap-4 md:grid-cols-2 w-full max-w-5xl mx-auto px-2">
          {/* Distance / Speed Analytical Card Enclosure */}
          <div className="rounded-xl border border-zinc-800/80 bg-zinc-800/30 p-5 shadow-sm flex flex-col justify-between">
            <div>
              <h4 className="mb-2 font-bold text-amber-400 text-lg">
                <MathInline content="$\text{Distance / Speed}$" />
              </h4>
              <p className="mb-4 text-base leading-relaxed text-zinc-300">
                Distance tracks the complete length of the path taken and behaves as a pure scalar magnitude.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-4 text-sm text-zinc-300">
              {/* Enforced layout height alignment block for formulas */}
              <div className="h-14 flex items-center justify-center border-b border-zinc-800/40 pb-2">
                <MathInline content="$\text{Speed} = \frac{\text{Distance}}{\text{Time}}$" />
              </div>
              {/* Enforced geometry metrics group */}
              <div className="space-y-2.5 pt-2">
                <div className="flex justify-between">
                  <span>Distance travelled:</span> 
                  <span className="font-semibold text-amber-400"><MathInline content="$12\text{ m}$" /></span>
                </div>
                <div className="flex justify-between">
                  <span>Elapsed time:</span> 
                  <span className="font-semibold text-zinc-100"><MathInline content="$4\text{ s}$" /></span>
                </div>
                <div className="flex justify-between pt-1 border-t border-zinc-800/40 font-bold">
                  <span>Resulting Speed:</span> 
                  <span className="text-amber-400"><MathInline content="$3\text{ m s}^{-1}$" /></span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Displacement / Velocity Analytical Card Enclosure */}
          <div className="rounded-xl border border-zinc-800/80 bg-zinc-800/30 p-5 shadow-sm flex flex-col justify-between">
            <div>
              <h4 className="mb-2 font-bold text-emerald-400 text-lg">
                <MathInline content="$\text{Displacement / Velocity}$" />
              </h4>
              <p className="mb-4 text-base leading-relaxed text-zinc-300">
                Displacement marks the straight-line position vector directly from start to finish.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-4 text-sm text-zinc-300">
              {/* Enforced layout height alignment block for formulas */}
              <div className="h-14 flex items-center justify-center border-b border-zinc-800/40 pb-2">
                <MathInline content="$\text{Velocity} = \frac{\text{Displacement}}{\text{Time}}$" />
              </div>
              {/* Enforced geometry metrics group */}
              <div className="space-y-2.5 pt-2">
                <div className="flex justify-between">
                  <span>Displacement vector:</span> 
                  <span className="font-semibold text-emerald-400"><MathInline content="$8\text{ m NE}$" /></span>
                </div>
                <div className="flex justify-between">
                  <span>Elapsed time:</span> 
                  <span className="font-semibold text-zinc-100"><MathInline content="$4\text{ s}$" /></span>
                </div>
                <div className="flex justify-between pt-1 border-t border-zinc-800/40 font-bold">
                  <span>Resulting Velocity:</span> 
                  <span className="text-emerald-400"><MathInline content="$2\text{ m s}^{-1}\text{ NE}$" /></span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Descriptive Footer Panel */}
          <div className="md:col-span-2 rounded-xl border border-zinc-800 bg-zinc-800/20 p-4 text-center text-base text-zinc-300 leading-relaxed max-w-4xl mx-auto w-full">
            Even within an identical timeframe, scalar speed and vector velocity calculations yield distinct metrics. For instance, positional displacement can cycle perfectly back to <span className="text-emerald-400 font-medium">zero</span> at the origin point even while total path distance continues accumulating.
          </div>
        </div>
      }
    >
      {/* Map Viewport Card Grid Container */}
      <div className="relative w-full aspect-76/33 max-w-5xl mx-auto rounded-xl overflow-hidden border border-zinc-800/60 bg-zinc-925 shadow-2xl">
        
        {/* Native Coordinate Line Graphic SVG Component Frame */}
        <svg
          viewBox="0 0 760 330"
          className="w-full h-full absolute inset-0 z-0"
          preserveAspectRatio="xMidYMid meet"
        >
          <SVGLibrary />

          {/* Grid Horizon Guide Array Track */}
          <path d="M 80 240 H 680 M 80 200 H 680 M 80 160 H 680 M 80 120 H 680 M 80 80 H 680" stroke="#27272a" strokeWidth="1" strokeDasharray="6 8" opacity="0.35" />

          {/* Displacement Vector */}
          <VectorArrow x1={135} y1={230} x2={600} y2={105} type="velocity" marker="default" />

          {/* Winding Scalar Distance Path Track */}
          <path d="M 135 230 C 220 110, 310 280, 400 180 C 480 90, 550 140, 605 105" fill="none" stroke="#fbbf24" strokeWidth="3.5" strokeDasharray="6 6" strokeLinecap="round" />

          {/* Target Boundary Nodes A & B */}
          <Particle cx={135} cy={230} r={14} fill="#1f2937" stroke="#9ca3af" strokeWidth={2.5} />
          <Particle cx={612} cy={100} r={14} fill="#1f2937" stroke="#9ca3af" strokeWidth={2.5} />

          {/* COMPASS COMPONENT ASSEMBLY */}
          <g transform="translate(90, 75)">
            <Particle cx={0} cy={0} r={32} stroke="#27272a" strokeWidth={1.5} fill="#1c1c1f" />
            <VectorArrow x1={0} y1={26} x2={0} y2={-22} type="structural" marker="default" />
            <VectorArrow x1={-24} y1={0} x2={20} y2={0} type="structural" marker="default" />
            <VectorArrow x1={0} y1={0} x2={16} y2={-16} type="friction" marker="default" />
          </g>
        </svg>

        {/* Absolute Positioned Native Math Layout Typography Layer */}
        
        {/* Compass Points Labels */}
        <DiagramLabel x="11.4%" y="11%" anchor="center" className="text-2.75 font-bold text-zinc-500" text="$\text{N}$" />
        <DiagramLabel x="15.2%" y="21%" anchor="center" className="text-2.75 font-bold text-zinc-500" text="$\text{E}$" />
        <DiagramLabel x="14.2%" y="14%" anchor="center" className="text-xs font-bold text-emerald-400" text="$\text{NE}$" />

        {/* Node Coordinates Metadata Labels */}
        <DiagramLabel x="17.2%" y="65.5%" anchor="center" className="text-sm font-black text-white" text="$\mathbf{A}$" />
        <DiagramLabel x="14.2%" y="77%" anchor="center" className="text-xs text-zinc-400" text="$\text{Start Position}$" />

        <DiagramLabel x="79.9%" y="26.5%" anchor="center" className="text-sm font-black text-white" text="$\mathbf{B}$" />
        <DiagramLabel x="76.8%" y="38%" anchor="center" className="text-xs text-zinc-400" text="$\text{Target Terminal}$" />

        {/* Vector & Path Metric Readout Boxes */}
        <DiagramLabel x="44%" y="24%" anchor="center" className="rounded-xl border border-zinc-800 bg-zinc-925/95 px-3 py-1.5 text-center text-xs font-bold text-amber-400 backdrop-blur-sm shadow-md" text="$\text{Distance Path} = 12\text{ m}$" />

        <DiagramLabel x="54%" y="54%" anchor="center" className="rounded-xl border border-zinc-800 bg-zinc-925/95 px-3 py-1.5 text-center text-xs font-bold text-emerald-400 backdrop-blur-sm shadow-md" text="$\text{Displacement} = 8\text{ m Northeast}$" />

        {/* Lower Dynamic Tracking Legend Caption */}
        <DiagramLabel x="50%" y="90%" anchor="center" className="text-center text-xs font-semibold text-zinc-500 w-full px-8 text-balance">
          Direction coordinates govern displacement vectors; absolute scalar trajectories map total distance.
        </DiagramLabel>

      </div>
    </DiagramPanel>
  );
};