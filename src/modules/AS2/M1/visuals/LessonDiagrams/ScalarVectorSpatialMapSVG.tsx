import React from 'react';
import { MathInline } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

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
      <div className="relative w-full aspect-76/33 max-w-5xl mx-auto rounded-xl overflow-hidden border border-zinc-800/60 bg-[#141417] shadow-2xl">
        
        {/* Native Coordinate Line Graphic SVG Component Frame */}
        <svg
          viewBox="0 0 760 330"
          className="w-full h-full absolute inset-0 z-0"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <marker id="arr-zinc-arrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
              <path d="M 2 2 L 10 5 L 2 8 Z" fill="#52525b" />
            </marker>
            <marker id="arr-emerald-arrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
              <path d="M 2 2 L 10 5 L 2 8 Z" fill="#10b981" />
            </marker>
            <marker id="arr-amber-compass" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 2 2 L 10 5 L 2 8 Z" fill="#fbbf24" />
            </marker>
          </defs>

          {/* Grid Horizon Guide Array Track */}
          <path d="M 80 240 H 680 M 80 200 H 680 M 80 160 H 680 M 80 120 H 680 M 80 80 H 680" stroke="#27272a" strokeWidth="1" strokeDasharray="6 8" opacity="0.35" />

          {/* Displacement Vector */}
          <line x1="135" y1="230" x2="600" y2="105" stroke="#10b981" strokeWidth="3" markerEnd="url(#arr-emerald-arrow)" />

          {/* Winding Scalar Distance Path Track */}
          <path d="M 135 230 C 220 110, 310 280, 400 180 C 480 90, 550 140, 605 105" fill="none" stroke="#fbbf24" strokeWidth="3.5" strokeDasharray="6 6" strokeLinecap="round" />

          {/* Target Boundary Nodes A & B */}
          <circle cx="135" cy="230" r="14" fill="#1f2937" stroke="#9ca3af" strokeWidth="2.5" />
          <circle cx="612" cy="100" r="14" fill="#1f2937" stroke="#9ca3af" strokeWidth="2.5" />

          {/* COMPASS COMPONENT ASSEMBLY */}
          <g transform="translate(90, 75)">
            <circle cx="0" cy="0" r="32" stroke="#27272a" strokeWidth="1.5" fill="#1c1c1f" />
            <line x1="0" y1="26" x2="0" y2="-22" stroke="#52525b" strokeWidth="1.5" markerEnd="url(#arr-zinc-arrow)" />
            <line x1="-24" y1="0" x2="20" y2="0" stroke="#52525b" strokeWidth="1.5" markerEnd="url(#arr-zinc-arrow)" />
            <line x1="0" y1="0" x2="16" y2="-16" stroke="#fbbf24" strokeWidth="2" markerEnd="url(#arr-amber-compass)" />
          </g>
        </svg>

        {/* Absolute Positioned Native Math Layout Typography Layer */}
        <div className="absolute inset-0 z-10 pointer-events-none select-none text-zinc-400 font-medium">
          
          {/* Compass Points Labels */}
          <div className="absolute left-[11.4%] top-[11%] text-[11px] font-bold text-zinc-500"><MathInline content="$\text{N}$" /></div>
          <div className="absolute left-[15.2%] top-[21%] text-[11px] font-bold text-zinc-500"><MathInline content="$\text{E}$" /></div>
          <div className="absolute left-[14.2%] top-[14%] text-xs font-bold text-emerald-400"><MathInline content="$\text{NE}$" /></div>

          {/* Node Coordinates Metadata Labels */}
          <div className="absolute left-[17.2%] top-[65.5%] text-sm font-black text-white"><MathInline content="$\mathbf{A}$" /></div>
          <div className="absolute left-[14.2%] top-[77%] text-xs text-zinc-400"><MathInline content="$\text{Start Position}$" /></div>

          <div className="absolute left-[79.9%] top-[26.5%] text-sm font-black text-white"><MathInline content="$\mathbf{B}$" /></div>
          <div className="absolute left-[76.8%] top-[38%] text-xs text-zinc-400"><MathInline content="$\text{Target Terminal}$" /></div>

          {/* Vector & Path Metric Readout Boxes */}
          <div className="absolute left-[44%] top-[24%] rounded-xl border border-zinc-800 bg-[#141416]/95 px-3 py-1.5 text-center text-xs font-bold text-amber-400 backdrop-blur-sm shadow-md">
            <MathInline content="$\text{Distance Path} = 12\text{ m}$" />
          </div>

          <div className="absolute left-[54%] top-[54%] rounded-xl border border-zinc-800 bg-[#141416]/95 px-3 py-1.5 text-center text-xs font-bold text-emerald-400 backdrop-blur-sm shadow-md">
            <MathInline content="$\text{Displacement} = 8\text{ m Northeast}$" />
          </div>

          {/* Lower Dynamic Tracking Legend Caption */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center text-xs font-semibold text-zinc-500 w-full px-8 text-balance">
            Direction coordinates govern displacement vectors; absolute scalar trajectories map total distance.
          </div>
        </div>

      </div>
    </DiagramPanel>
  );
};