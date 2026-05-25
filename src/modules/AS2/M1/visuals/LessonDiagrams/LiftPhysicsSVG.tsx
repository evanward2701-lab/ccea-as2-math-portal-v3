import React from 'react';
import { MathInline } from '@/core/components/MathText';
import { Particle, SupportSurface } from '@/core/diagram-engine/PhysicsPrimitives';

export const LiftPhysicsSVG: React.FC = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
      
      {/* ==================== LEFT CARD: WHOLE SYSTEM ==================== */}
      <div className="flex flex-col gap-4 bg-zinc-900/10 border border-zinc-800/40 rounded-xl p-4 backdrop-blur-md">
        {/* Title rendered in beautiful math typography */}
        <div className="text-zinc-300 font-bold tracking-wide text-base pl-2">
          <MathInline content="$\text{Whole System}$" />
        </div>

        {/* Graphic Area - Stretched vertically to h-[290px], elements untouched */}
        <div className="relative w-full h-[290px] bg-[#141417] border border-zinc-800/60 rounded-xl overflow-hidden">
          <svg
            viewBox="0 0 400 290"
            className="w-full h-full absolute inset-0 z-0"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <marker
                id="arr-rose-slim-left"
                viewBox="0 0 10 10"
                refX="7"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                orient="auto-start-reverse"
              >
                <path d="M 2 2 L 10 5 L 2 8 Z" fill="#f43f5e" />
              </marker>
              <marker
                id="arr-accel-slim-left"
                viewBox="0 0 10 10"
                refX="7"
                refY="5"
                markerWidth="7"
                markerHeight="7"
                orient="auto-start-reverse"
              >
                <path d="M 2 2 L 10 5 L 2 8 Z" fill="#ffffff" />
              </marker>
            </defs>

            {/* Ceiling Anchor Support Line */}
            <SupportSurface x1={100} y1={45} x2={300} y2={45} stroke="#27272a" strokeWidth={4.5} className="stroke-dasharray-5" rough={true} />
            
            {/* Solid White Cable String */}
            <line x1="200" y1="45" x2="200" y2="105" stroke="#e4e4e7" strokeWidth="3.5" />
            
            {/* Prominent Green Caret Inline Chevron (^) Indicator */}
            <path d="M 190 82 L 200 70 L 210 82" stroke="#10b981" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />

            {/* Lift Box Frame Enclosure */}
            <rect x="135" y="105" width="130" height="110" rx="10" fill="#18181b" stroke="#3f3f46" strokeWidth="3" />

            {/* Symmetrical Inside Passenger Stickman */}
            <g transform="translate(200, 160) scale(1.35)" stroke="#a1a1aa" strokeWidth="1.5" fill="none" opacity="0.6">
              <Particle cx={0} cy={-22} r={5} stroke="#a1a1aa" fill="#141417" />
              <line x1="0" y1="-17" x2="0" y2="12" />
              <line x1="0" y1="-10" x2="-10" y2="-2" />
              <line x1="0" y1="-10" x2="10" y2="-2" />
              <line x1="0" y1="12" x2="-8" y2="35" />
              <line x1="0" y1="12" x2="8" y2="35" />
            </g>

            {/* Total Weight System Vector Line */}
            <line x1="200" y1="215" x2="200" y2="245" stroke="#f43f5e" strokeWidth="3.5" markerEnd="url(#arr-rose-slim-left)" />

            {/* ACCELERATION: Left Side Arrow */}
            <g stroke="#ffffff" strokeWidth="3" fill="none">
              <line x1="90" y1="180" x2="90" y2="125" markerEnd="url(#arr-accel-slim-left)" />
              <line x1="90" y1="134" x2="90" y2="133" markerEnd="url(#arr-accel-slim-left)" />
            </g>
          </svg>

          {/* HTML Math Labels Overlay Layer for Card 1 */}
          <div className="absolute inset-0 z-10 pointer-events-none select-none">
            <div className="absolute left-[54%] top-[24%] text-emerald-400 font-medium"><MathInline content="$T$" /></div>
            <div className="absolute left-[54%] top-[81%] text-rose-400 font-medium"><MathInline content="$(m + M)g$" /></div>
            <div className="absolute left-[26%] top-[54%] text-white font-medium"><MathInline content="$a$" /></div>
          </div>
        </div>

        {/* Isolated Governing Equation Section */}
        <div className="flex flex-col items-center justify-center text-center bg-zinc-900/40 rounded-xl p-4 border border-zinc-800/50 shadow-xl mt-2">
          <span className="text-xs text-zinc-500 font-semibold mb-2 uppercase tracking-wider select-none">Whole System Equation</span>
          <MathInline content="$$T - (m + M)g = (m + M)a$$" />
        </div>
      </div>

      {/* ==================== RIGHT CARD: ISOLATED PASSENGER ==================== */}
      <div className="flex flex-col gap-4 bg-zinc-900/10 border border-zinc-800/40 rounded-xl p-4 backdrop-blur-md">
        {/* Title rendered in beautiful math typography */}
        <div className="text-zinc-300 font-bold tracking-wide text-base pl-2">
          <MathInline content="$\text{Isolated Passenger}$" />
        </div>

        {/* Graphic Area - Stretched vertically to h-[290px], elements untouched */}
        <div className="relative w-full h-[290px] bg-[#141417] border border-zinc-800/60 rounded-xl overflow-hidden">
          <svg
            viewBox="0 0 400 290"
            className="w-full h-full absolute inset-0 z-0"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <marker
                id="arr-rose-slim-right"
                viewBox="0 0 10 10"
                refX="7"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                orient="auto-start-reverse"
              >
                <path d="M 2 2 L 10 5 L 2 8 Z" fill="#f43f5e" />
              </marker>
              <marker
                id="arr-blue-slim-right"
                viewBox="0 0 10 10"
                refX="7"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                orient="auto-start-reverse"
              >
                <path d="M 2 2 L 10 5 L 2 8 Z" fill="#3b82f6" />
              </marker>
              <marker
                id="arr-accel-slim-right"
                viewBox="0 0 10 10"
                refX="7"
                refY="5"
                markerWidth="7"
                markerHeight="7"
                orient="auto-start-reverse"
              >
                <path d="M 2 2 L 10 5 L 2 8 Z" fill="#ffffff" />
              </marker>
            </defs>

            {/* Bold Solid Floor Platform Casing Line */}
            <SupportSurface x1={110} y1={180} x2={290} y2={180} stroke="#3f3f46" strokeWidth={4.5} />

            {/* Thinner Active Passenger Stickman */}
            <g transform="translate(200, 115) scale(1.6)" stroke="#e4e4e7" strokeWidth="1.5" fill="none">
              <Particle cx={0} cy={-22} r={6} stroke="#e4e4e7" fill="#141417" />
              <line x1="0" y1="-16" x2="0" y2="12" />
              <line x1="0" y1="-10" x2="-12" y2="-2" />
              <line x1="0" y1="-10" x2="12" y2="-2" />
              <line x1="0" y1="12" x2="-10" y2="35" />
              <line x1="0" y1="12" x2="10" y2="35" />
            </g>

            {/* Blue Reaction Vector (R) coming straight out from the top of his head pointing UP */}
            <line x1="200" y1="67" x2="200" y2="35" stroke="#3b82f6" strokeWidth="3.5" markerEnd="url(#arr-blue-slim-right)" />

            {/* Passenger Weight (mg) vector dropping straight DOWN from platform baseline tracking line */}
            <line x1="200" y1="180" x2="200" y2="220" stroke="#f43f5e" strokeWidth="3.5" markerEnd="url(#arr-rose-slim-right)" />

            {/* ACCELERATION: Shifting only this arrow up by 15px so it doesn't touch the platform line */}
            <g stroke="#ffffff" strokeWidth="3" fill="none">
              <line x1="135" y1="165" x2="135" y2="110" markerEnd="url(#arr-accel-slim-right)" />
              <line x1="135" y1="119" x2="135" y2="118" markerEnd="url(#arr-accel-slim-right)" />
            </g>
          </svg>

          {/* HTML Math Labels Overlay Layer for Card 2 - Kept relative positioning perfect */}
          <div className="absolute inset-0 z-10 pointer-events-none select-none">
            <div className="absolute left-[54%] top-[10%] text-blue-400 font-medium"><MathInline content="$R$" /></div>
            <div className="absolute left-[54%] top-[74%] text-rose-400 font-medium"><MathInline content="$mg$" /></div>
            <div className="absolute left-[27%] top-[49%] text-white font-medium"><MathInline content="$a$" /></div>
          </div>
        </div>

        {/* Isolated Governing Equation Section */}
        <div className="flex flex-col items-center justify-center text-center bg-zinc-900/40 rounded-xl p-4 border border-zinc-800/50 shadow-xl mt-2">
          <span className="text-xs text-zinc-500 font-semibold mb-2 uppercase tracking-wider select-none">Passenger Equation</span>
          <MathInline content="$$R - mg = ma$$" />
        </div>
      </div>

    </div>
  );
};