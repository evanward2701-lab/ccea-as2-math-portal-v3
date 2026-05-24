import React from 'react';
import { MathInline } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

export const M1SIUnitDerivationSVG: React.FC = () => {
  return (
    <DiagramPanel
      title="Fig 2. SI Unit Derivation Tree"
      analysis={
        <div className="grid gap-4 sm:grid-cols-3 w-full max-w-5xl mx-auto px-2">
          <div className="rounded-xl border border-zinc-800 bg-zinc-800/30 p-4 text-center text-base text-zinc-300">
            <strong className="font-semibold text-zinc-400 block mb-1">
              <MathInline content="$\text{Base units:}$" />
            </strong>
            <MathInline content="$\text{kg, m, s}$" />
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-800/30 p-4 text-center text-base text-zinc-300">
            <strong className="font-semibold text-amber-400 block mb-1">
              <MathInline content="$\text{Derived units:}$" />
            </strong>
            <MathInline content="$\text{m s}^{-1}\text{, m s}^{-2}$" />
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-800/30 p-4 text-center text-base text-zinc-300">
            <strong className="font-semibold text-emerald-400 block mb-1">
              <MathInline content="$\text{Force units:}$" />
            </strong>
            <MathInline content="$\text{N} = \text{kg m s}^{-2}$" />
          </div>
        </div>
      }
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col gap-6">
        
        {/* Main Graph Card Enclosure */}
        <div className="relative w-full aspect-[80/50] bg-[#141417] border border-zinc-800/60 rounded-xl overflow-hidden p-6 shadow-2xl">
          
          {/* Pure Geometric SVG Vector Track */}
          <svg
            viewBox="0 0 800 500"
            className="w-full h-full absolute inset-0 z-0"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <marker
                id="tree-arrow"
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                orient="auto-start-reverse"
              >
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#4b5563" />
              </marker>
            </defs>

            {/* --- ROW 1 ENCLOSURES (BASE UNITS) --- */}
            <rect x="50" y="60" width="200" height="90" rx="10" fill="#1c1c1f" stroke="#27272a" strokeWidth="2" />
            <rect x="300" y="60" width="200" height="90" rx="10" fill="#1c1c1f" stroke="#27272a" strokeWidth="2" />
            <rect x="550" y="60" width="200" height="90" rx="10" fill="#1c1c1f" stroke="#27272a" strokeWidth="2" />

            {/* --- ROW 2 ENCLOSURES (DERIVED UNITS) --- */}
            <rect x="100" y="210" width="260" height="100" rx="10" fill="#1c1c1f" stroke="#3f3f46" strokeWidth="2" />
            <rect x="440" y="210" width="260" height="100" rx="10" fill="#1c1c1f" stroke="#3f3f46" strokeWidth="2" />

            {/* --- ROW 3 ENCLOSURES (FORCE UNITS) --- */}
            <rect x="100" y="370" width="260" height="100" rx="10" fill="#1c1c1f" stroke="rgba(16,185,129,0.25)" strokeWidth="2.5" />
            <rect x="440" y="370" width="260" height="100" rx="10" fill="#1c1c1f" stroke="rgba(16,185,129,0.25)" strokeWidth="2.5" />

            {/* --- GEOMETRIC LINE CONNECTORS --- */}
            {/* Length and Time meeting at top-center entry of Velocity */}
            <line x1="400" y1="150" x2="230" y2="210" stroke="#4b5563" strokeWidth="2" markerEnd="url(#tree-arrow)" />
            <line x1="650" y1="150" x2="230" y2="210" stroke="#4b5563" strokeWidth="2" strokeDasharray="5 5" markerEnd="url(#tree-arrow)" />
            
            {/* Time -> Acceleration (Dashed) */}
            <line x1="650" y1="150" x2="570" y2="210" stroke="#4b5563" strokeWidth="2" strokeDasharray="5 5" markerEnd="url(#tree-arrow)" />
            
            {/* Left curve connecting Mass to Force side panel */}
            <path d="M 100 150 Q -10 260 100 420" fill="none" stroke="#4b5563" strokeWidth="2" markerEnd="url(#tree-arrow)" />
            
            {/* Gentle curve mapping Mass into the left-hand edge panel corner of Weight */}
            <path d="M 250 130 Q 340 160 440 390" fill="none" stroke="#4b5563" strokeWidth="2" strokeDasharray="5 5" markerEnd="url(#tree-arrow)" />

            {/* Acceleration -> Force */}
            <line x1="570" y1="310" x2="340" y2="370" stroke="#4b5563" strokeWidth="2" markerEnd="url(#tree-arrow)" />
            
            {/* Acceleration -> Weight (Dashed) */}
            <line x1="570" y1="310" x2="570" y2="370" stroke="#4b5563" strokeWidth="2" strokeDasharray="5 5" markerEnd="url(#tree-arrow)" />
          </svg>

          {/* Absolute Structured Typography Layer */}
          <div className="absolute inset-0 z-10 pointer-events-none select-none">
            
            {/* Row Header Banners */}
            <div className="absolute left-[6.5%] top-[5%] text-zinc-500 font-bold uppercase tracking-[0.2em] text-[10px]"><MathInline content="$\text{Base SI Units}$" /></div>
            
            {/* ADJUSTED: "Derived Motion Units" positioned between cards and vertically lower */}
            <div className="absolute left-[50%] top-[53%] transform -translate-x-1/2 text-amber-500/90 font-bold uppercase tracking-[0.2em] text-[10px]"><MathInline content="$\text{Derived Motion Units}$" /></div>
            
            <div className="absolute left-[12.5%] top-[68%] text-emerald-400 font-bold uppercase tracking-[0.2em] text-[10px]"><MathInline content="$\text{Force Units}$" /></div>

            {/* --- ROW 1 INLINE LABELS --- */}
            <div className="absolute left-[17.5%] top-[14%] transform -translate-x-1/2 flex flex-col items-center">
              <span className="text-zinc-500 text-xs mb-0.5"><MathInline content="$\text{Mass}$" /></span>
              <span className="text-2xl font-black text-white"><MathInline content="$\text{kg}$" /></span>
            </div>
            <div className="absolute left-[50%] top-[14%] transform -translate-x-1/2 flex flex-col items-center">
              <span className="text-zinc-500 text-xs mb-0.5"><MathInline content="$\text{Length}$" /></span>
              <span className="text-2xl font-black text-white"><MathInline content="$\text{m}$" /></span>
            </div>
            <div className="absolute left-[81.5%] top-[14%] transform -translate-x-1/2 flex flex-col items-center">
              <span className="text-zinc-500 text-xs mb-0.5"><MathInline content="$\text{Time}$" /></span>
              <span className="text-2xl font-black text-white"><MathInline content="$\text{s}$" /></span>
            </div>

            {/* --- ROW 2 INLINE LABELS --- */}
            <div className="absolute left-[28.5%] top-[45%] transform -translate-x-1/2 flex flex-col items-center">
              <span className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-0.5"><MathInline content="$\text{Velocity}$" /></span>
              <span className="text-zinc-400 text-[11px] mb-1.5"><MathInline content="$\text{displacement} \div \text{time}$" /></span>
              <span className="text-xl font-extrabold text-white"><MathInline content="$\text{m s}^{-1}$" /></span>
            </div>
            <div className="absolute left-[71.5%] top-[45%] transform -translate-x-1/2 flex flex-col items-center">
              <span className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-0.5"><MathInline content="$\text{Acceleration}$" /></span>
              <span className="text-zinc-400 text-[11px] mb-1.5"><MathInline content="$\text{change in velocity} \div \text{time}$" /></span>
              <span className="text-xl font-extrabold text-white"><MathInline content="$\text{m s}^{-2}$" /></span>
            </div>

            {/* --- ROW 3 INLINE LABELS --- */}
            <div className="absolute left-[28.5%] top-[77%] transform -translate-x-1/2 flex flex-col items-center">
              <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-0.5"><MathInline content="$\text{Force}$" /></span>
              <span className="text-white text-base font-bold mb-0.5"><MathInline content="$F = ma$" /></span>
              <span className="text-zinc-300 text-sm font-semibold"><MathInline content="$\text{N} = \text{kg m s}^{-2}$" /></span>
            </div>
            <div className="absolute left-[71.5%] top-[77%] transform -translate-x-1/2 flex flex-col items-center">
              <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-0.5"><MathInline content="$\text{Weight}$" /></span>
              <span className="text-white text-base font-bold mb-1"><MathInline content="$W = mg$" /></span>
              <span className="text-zinc-500 text-[11px] font-medium italic"><MathInline content="$\text{measured in Newtons (N)}$" /></span>
            </div>

            {/* --- ARROW OPERATION LABELS --- */}
            <div className="absolute left-[47.5%] top-[34%] text-zinc-500 font-semibold text-xs bg-[#141417]/90 px-1.5 py-0.5 rounded backdrop-blur-xs"><MathInline content="$\text{Length} \div \text{Time}$" /></div>
          </div>
        </div>

        {/* ==================== FOOTER WARNING FOOTNOTES ==================== */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2 w-full">
          <div className="flex flex-col items-center justify-start rounded-xl border border-zinc-800/80 bg-[#141416]/40 p-4 shadow-md backdrop-blur-sm min-h-[100px]">
            <span className="text-rose-400 font-bold mb-1 text-xs select-none">Mass Scaling:</span>
            <div className="w-full text-zinc-400 text-xs text-center leading-relaxed whitespace-normal break-words text-balance px-1">
              Convert tonnes to kg before utilizing equations.
            </div>
          </div>
          <div className="flex flex-col items-center justify-start rounded-xl border border-zinc-800/80 bg-[#141416]/40 p-4 shadow-md backdrop-blur-sm min-h-[100px]">
            <span className="text-amber-400 font-bold mb-1 text-xs select-none">Dimension Trap:</span>
            <div className="w-full text-zinc-400 text-xs text-center leading-relaxed whitespace-normal break-words text-balance px-1">
              kg evaluates mass units; Newtons compute active forces.
            </div>
          </div>
          <div className="flex flex-col items-center justify-start rounded-xl border border-zinc-800/80 bg-[#141416]/40 p-4 shadow-md backdrop-blur-sm min-h-[100px]">
            <span className="text-emerald-400 font-bold mb-1 text-xs select-none">Unit Context:</span>
            <div className="w-full text-zinc-400 text-xs text-center leading-relaxed whitespace-normal break-words text-balance px-1 font-sans">
              <MathInline content="$\text{m s}^{-2}$" /> tracks structural acceleration, never static velocity.
            </div>
          </div>
        </div>

      </div>
    </DiagramPanel>
  );
};