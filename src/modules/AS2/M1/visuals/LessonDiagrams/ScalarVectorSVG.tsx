import React from 'react';
import { MathInline } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { Particle } from '@/core/diagram-engine/PhysicsPrimitives';

export const ScalarVectorSVG: React.FC = () => {
  return (
    <DiagramPanel
      title="Fig 2. Scalar vs Vector"
      analysis={
        <div className="grid gap-4 md:grid-cols-2 w-full max-w-5xl mx-auto px-2">
          {/* Scalars Category Grid Card */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 shadow-sm">
            <h4 className="mb-2 font-bold text-amber-400 text-lg">
              <MathInline content="$\text{Scalars}$" />
            </h4>
            <p className="mb-4 text-base leading-relaxed text-zinc-400">
              Magnitude only. A number with units, but no spatial direction.
            </p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {['mass', 'time', 'distance', 'speed'].map((item) => (
                <div key={item} className="rounded-lg border border-amber-900/40 bg-[#141416] px-3 py-2.5 text-center font-bold tracking-wide uppercase text-amber-300/90 shadow-inner">
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Vectors Category Grid Card */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 shadow-sm">
            <h4 className="mb-2 font-bold text-emerald-400 text-lg">
              <MathInline content="$\text{Vectors}$" />
            </h4>
            <p className="mb-4 text-base leading-relaxed text-zinc-400">
              Magnitude and direction. Direction is part of the final answer.
            </p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {['displacement', 'velocity', 'acceleration', 'force', 'weight'].map((item) => (
                <div key={item} className="rounded-lg border border-emerald-900/40 bg-[#141416] px-3 py-2.5 text-center font-bold tracking-wide uppercase text-emerald-300/90 shadow-inner">
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Core Kinematic Directives Rule Footer Block */}
          <div className="md:col-span-2 rounded-xl border border-rose-900/40 bg-rose-950/20 p-4 text-center text-base font-semibold text-rose-300 max-w-4xl mx-auto w-full shadow-md">
            The negative component affects direction, not the final speed.
          </div>
        </div>
      }
    >
      {/* Complete Uniform Geometry Enclosure Track */}
      <div className="relative w-full aspect-[80/50] max-w-5xl mx-auto rounded-xl overflow-hidden border border-zinc-800/60 bg-[#141417] shadow-2xl">
        
        {/* Unified Scalar-Vector Coordinate Space Graphics */}
        <svg
          viewBox="0 0 800 500"
          className="w-full h-full absolute inset-0 z-0"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <marker id="v-arrow-amber" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
              <path d="M 2 2 L 10 5 L 2 8 Z" fill="#fbbf24" />
            </marker>
            <marker id="v-arrow-emerald" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
              <path d="M 2 2 L 10 5 L 2 8 Z" fill="#10b981" />
            </marker>
            <marker id="v-arrow-zinc" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M 2 2 L 10 5 L 2 8 Z" fill="#52525b" />
            </marker>
          </defs>

          {/* ==================== UPPER ROW SECTION ENCLOSURES ==================== */}
          <rect x="40" y="30" width="340" height="110" rx="12" fill="#1c1c1f" stroke="#27272a" strokeWidth="2" />
          <rect x="420" y="30" width="340" height="110" rx="12" fill="#1c1c1f" stroke="#27272a" strokeWidth="2" />

          {/* ==================== LOWER VECTOR COORDINATE ENGINE FRAME ==================== */}
          <rect x="40" y="170" width="720" height="220" rx="12" fill="#1c1c1f" stroke="#3f3f46" strokeWidth="1.5" />

          {/* Coordinate System Unit Grid Axes lines */}
          <line x1="120" y1="210" x2="120" y2="360" stroke="#52525b" strokeWidth="2" markerEnd="url(#v-arrow-zinc)" />
          <line x1="120" y1="210" x2="420" y2="210" stroke="#52525b" strokeWidth="2" markerEnd="url(#v-arrow-zinc)" />

          {/* Subtitle Vector Component Projections (Dashed) */}
          {/* Horizontal component 7i */}
          <line x1="120" y1="210" x2="280" y2="210" stroke="#10b981" strokeWidth="2.5" strokeDasharray="4 4" />
          {/* Vertical component -24j */}
          <line x1="280" y1="210" x2="280" y2="345" stroke="#f43f5e" strokeWidth="2.5" strokeDasharray="4 4" />

          {/* Resultant True Velocity Vector Line Hypotenuse */}
          <line x1="120" y1="210" x2="280" y2="345" stroke="#10b981" strokeWidth="3.5" markerEnd="url(#v-arrow-emerald)" />

          {/* Target Intersection Points Nodes */}
          <Particle cx={120} cy={210} r={6} fill="#ffffff" />
          <Particle cx={280} cy={345} r={6} fill="#10b981" />

          {/* ==================== LOWER CALCULATION BLOCK PANEL STRIP ==================== */}
          <rect x="40" y="415" width="720" height="50" rx="10" fill="#09090b" stroke="#27272a" strokeWidth="2" />
        </svg>

        {/* Absolute Positioned Layout Typography Sheet Layer */}
        <div className="absolute inset-0 z-10 pointer-events-none select-none">
          
          {/* --- FIXED: Moved top yellow scalar content block down to top-[9%] to center perfectly --- */}
          <div className="absolute left-[8%] top-[9%] flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-amber-500/30 bg-[#141417] text-xl font-black text-amber-400 shadow-md">
              <MathInline content="$7$" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-amber-400"><MathInline content="$\text{Scalar: magnitude only}$" /></span>
              <span className="text-zinc-400 text-xs mt-0.5"><MathInline content="$\text{A number with units, but no direction.}$" /></span>
            </div>
          </div>

          {/* --- FIXED: Moved top green vector content block down to top-[9%] to match across row line --- */}
          <div className="absolute left-[55%] top-[9%] flex items-center gap-4">
            <div className="w-[70px] h-[50px] relative shrink-0">
              <svg className="w-full h-full" viewBox="0 0 70 50">
                <line x1="5" y1="45" x2="60" y2="10" stroke="#10b981" strokeWidth="3.5" markerEnd="url(#v-arrow-emerald)" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-emerald-400"><MathInline content="$\text{Vector: magnitude + direction}$" /></span>
              <span className="text-zinc-400 text-xs mt-0.5"><MathInline content="$\text{Direction is part of the final answer.}$" /></span>
            </div>
          </div>

          {/* --- LOWER COORDINATE SYSTEM LABELS --- */}
          <div className="absolute left-[51%] top-[40%] text-sm text-zinc-500 font-bold"><MathInline content="$\mathbf{i}$" /></div>
          <div className="absolute left-[14.5%] top-[70%] text-sm text-zinc-500 font-bold"><MathInline content="$-\mathbf{j}$" /></div>

          {/* Vector component magnitude flags */}
          <div className="absolute left-[24%] top-[37%] rounded-lg border border-emerald-900/50 bg-[#141416]/95 px-2 py-1 text-xs font-bold text-emerald-400 shadow-sm">
            <MathInline content="$7\mathbf{i}$" />
          </div>
          <div className="absolute left-[36.5%] top-[56%] rounded-lg border border-rose-900/50 bg-[#141416]/95 px-2 py-1 text-xs font-bold text-rose-400 shadow-sm">
            <MathInline content="$-24\mathbf{j}$" />
          </div>

          {/* Vector block centered inside card view limits */}
          <div className="absolute left-[63%] top-[47%] min-w-[210px] rounded-xl border border-emerald-800 bg-[#141416]/95 px-4 pt-3.5 pb-4 text-center shadow-lg flex flex-col justify-center items-center">
            <div className="text-sm font-bold text-emerald-400 leading-none mb-1">
              <MathInline content="$\mathbf{v} = 7\mathbf{i} - 24\mathbf{j}\quad\text{m s}^{-1}$" />
            </div>
            <div className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wide leading-none mt-1">
              Velocity is a vector
            </div>
          </div>

          <div className="absolute left-[64.5%] top-[69%] text-xs font-medium text-rose-400/90 max-w-[160px] text-center leading-relaxed">
            Negative component points downward
          </div>

          {/* --- FIXED: Moved the vector magnitude display track equation upward from bottom-[4.5%] to bottom-[5.5%] --- */}
          <div className="absolute left-[50%] bottom-[5.5%] transform -translate-x-1/2 w-full flex justify-center items-center text-center text-sm font-bold text-emerald-400 py-3.5">
            <MathInline content="$|\mathbf{v}| = \sqrt{7^2 + (-24)^2} = 25\quad\text{m s}^{-1}$" />
          </div>

        </div>

      </div>
    </DiagramPanel>
  );
};