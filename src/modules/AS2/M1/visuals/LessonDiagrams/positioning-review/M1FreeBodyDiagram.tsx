import React from 'react';
import { MathInline } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

export const M1FreeBodyDiagram: React.FC = () => {
  return (
    <DiagramPanel
      title="Fig 3. Common Modelling Assumptions"
      analysis={
        <div className="w-full max-w-5xl mx-auto text-center text-zinc-400 italic text-base leading-relaxed py-1 px-4">
          Modelling words are shortcuts for physical assumptions and mathematical consequences.
        </div>
      }
    >
      {/* 3-Column Responsive Core Grid Matrix */}
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* CARD 1: PARTICLE */}
        <div className="flex flex-col justify-between bg-zinc-900/10 border border-zinc-800/40 rounded-xl p-5 backdrop-blur-md min-h-[340px]">
          <div>
            <div className="text-zinc-400 font-bold tracking-wider text-[11px] uppercase mb-4 pl-1">
              <MathInline content="$\text{Particle}$" />
            </div>
            <div className="w-full h-24 bg-[#141417] border border-zinc-800/60 rounded-xl flex items-center justify-center relative overflow-hidden mb-4">
              <svg viewBox="0 0 200 100" className="w-full h-full">
                <rect x="30" y="25" width="140" height="50" rx="6" stroke="#27272a" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
                <circle cx="100" cy="50" r="6" fill="#e4e4e7" />
                <line x1="60" y1="50" x2="140" y2="50" stroke="#52525b" strokeWidth="1.5" />
              </svg>
            </div>
            <div className="space-y-2 text-zinc-300 text-xs px-1">
              <p className="leading-relaxed"><strong className="text-zinc-400 font-bold block mb-0.5">Meaning:</strong> Dimensions are negligible; total mass is treated concentrated at a singular localized point.</p>
              <p className="leading-relaxed"><strong className="text-zinc-400 font-bold block mb-0.5">Effect:</strong> Completely ignore complex rotational elements and shape profiles; lines of action intersect at one locus.</p>
            </div>
          </div>
        </div>

        {/* CARD 2: SMOOTH SURFACE */}
        <div className="flex flex-col justify-between bg-zinc-900/10 border border-zinc-800/40 rounded-xl p-5 backdrop-blur-md min-h-[340px]">
          <div>
            <div className="text-zinc-400 font-bold tracking-wider text-[11px] uppercase mb-4 pl-1">
              <MathInline content="$\text{Smooth Surface}$" />
            </div>
            <div className="w-full h-24 bg-[#141417] border border-zinc-800/60 rounded-xl flex items-center justify-center relative overflow-hidden mb-4">
              <svg viewBox="0 0 200 100" className="w-full h-full">
                <line x1="30" y1="70" x2="170" y2="70" stroke="#3f3f46" strokeWidth="2.5" />
                <rect x="75" y="35" width="50" height="35" rx="4" fill="#1c1c1f" stroke="#e4e4e7" strokeWidth="2" />
              </svg>
            </div>
            <div className="space-y-2 text-zinc-300 text-xs px-1">
              <p className="leading-relaxed"><strong className="text-zinc-400 font-bold block mb-0.5">Meaning:</strong> Absolutely no frictional force components exist at the contact interface mapping tracks.</p>
              <p className="leading-relaxed"><strong className="text-zinc-400 font-bold block mb-0.5">Effect:</strong> Completely omit the active lateral friction force vector (<MathInline content="$F$" />) from the structural free-body system.</p>
            </div>
          </div>
        </div>

        {/* CARD 3: ROUGH SURFACE */}
        <div className="flex flex-col justify-between bg-zinc-900/10 border border-zinc-800/40 rounded-xl p-5 backdrop-blur-md min-h-[340px]">
          <div>
            <div className="text-zinc-400 font-bold tracking-wider text-[11px] uppercase mb-4 pl-1">
              <MathInline content="$\text{Rough Surface}$" />
            </div>
            <div className="w-full h-24 bg-[#141417] border border-zinc-800/60 rounded-xl flex items-center justify-center relative overflow-hidden mb-4">
              <svg viewBox="0 0 200 100" className="w-full h-full">
                <defs>
                  <marker id="arr-amber-mod" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                    <path d="M 2 2 L 10 5 L 2 8 Z" fill="#fbbf24" />
                  </marker>
                </defs>
                <line x1="30" y1="70" x2="170" y2="70" stroke="#3f3f46" strokeWidth="2.5" />
                {Array.from({ length: 8 }).map((_, i) => (
                  <line key={i} x1={40 + i * 16} y1="78" x2={50 + i * 16} y2="70" stroke="#27272a" strokeWidth="1" />
                ))}
                <rect x="75" y="35" width="50" height="35" rx="4" fill="#1c1c1f" stroke="#e4e4e7" strokeWidth="2" />
                <line x1="75" y1="52" x2="35" y2="52" stroke="#fbbf24" strokeWidth="2" markerEnd="url(#arr-amber-mod)" />
              </svg>
            </div>
            <div className="space-y-2 text-zinc-300 text-xs px-1 mb-3">
              <p className="leading-relaxed"><strong className="text-amber-400 font-bold block mb-0.5">Meaning:</strong> High-friction contact resistance is active at the horizontal interface line.</p>
              <p className="leading-relaxed"><strong className="text-amber-400 font-bold block mb-0.5">Effect:</strong> Friction force acts to directly oppose active or impending movement vectors:</p>
            </div>
          </div>
          <div className="w-full bg-[#141417]/80 rounded-lg p-2.5 text-center border border-zinc-800/40 text-sm font-bold text-amber-400 shadow-inner">
            <MathInline content="$F \le \mu R$" />
          </div>
        </div>

        {/* CARD 4: LIGHT STRING / TOWBAR / PULLEY */}
        <div className="flex flex-col justify-between bg-zinc-900/10 border border-zinc-800/40 rounded-xl p-5 backdrop-blur-md min-h-[340px]">
          <div>
            <div className="text-zinc-400 font-bold tracking-wider text-[11px] uppercase mb-4 pl-1">
              <MathInline content="$\text{Light String / Towbar / Pulley}$" />
            </div>
            <div className="w-full h-24 bg-[#141417] border border-zinc-800/60 rounded-xl flex items-center justify-center relative overflow-hidden mb-4">
              <svg viewBox="0 0 200 100" className="w-full h-full">
                <line x1="30" y1="50" x2="170" y2="50" stroke="#e4e4e7" strokeWidth="2" />
                <circle cx="100" cy="50" r="16" fill="#1c1c1f" stroke="#52525b" strokeWidth="2" />
                <text x="100" y="54" textAnchor="middle" className="fill-zinc-500 text-[10px] font-black tracking-wider">0 kg</text>
              </svg>
            </div>
            <div className="space-y-2 text-zinc-300 text-xs px-1">
              <p className="leading-relaxed"><strong className="text-zinc-400 font-bold block mb-0.5">Meaning:</strong> The mechanical connector or tracking element possesses entirely negligible mass.</p>
              <p className="leading-relaxed"><strong className="text-zinc-400 font-bold block mb-0.5">Effect:</strong> Do not include its weight in calculations; tension is completely uniform throughout the path string length.</p>
            </div>
          </div>
        </div>

        {/* CARD 5: INEXTENSIBLE STRING */}
        <div className="flex flex-col justify-between bg-zinc-900/10 border border-zinc-800/40 rounded-xl p-5 backdrop-blur-md min-h-[340px]">
          <div>
            <div className="text-zinc-400 font-bold tracking-wider text-[11px] uppercase mb-4 pl-1">
              <MathInline content="$\text{Inextensible String}$" />
            </div>
            <div className="w-full h-24 bg-[#141417] border border-zinc-800/60 rounded-xl flex items-center justify-center relative overflow-hidden mb-4">
              <svg viewBox="0 0 200 100" className="w-full h-full">
                <line x1="50" y1="50" x2="150" y2="50" stroke="#3b82f6" strokeWidth="2.5" />
                <rect x="35" y="40" width="20" height="20" rx="3" fill="#1c1c1f" stroke="#52525b" strokeWidth="1.5" />
                <rect x="145" y="40" width="20" height="20" rx="3" fill="#1c1c1f" stroke="#52525b" strokeWidth="1.5" />
                <line x1="45" y1="25" x2="155" y2="25" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" />
              </svg>
            </div>
            <div className="space-y-2 text-zinc-300 text-xs px-1 mb-3">
              <p className="leading-relaxed"><strong className="text-emerald-400 font-bold block mb-0.5">Meaning:</strong> The connective string profile is stiff and does not stretch or deform under tension load.</p>
              <p className="leading-relaxed"><strong className="text-emerald-400 font-bold block mb-0.5">Effect:</strong> Coupled boundary particles share an identical magnitude of acceleration speed at all times:</p>
            </div>
          </div>
          <div className="w-full bg-[#141417]/80 rounded-lg p-2.5 text-center border border-zinc-800/40 text-sm font-bold text-emerald-400 shadow-inner">
            <MathInline content="$a_1 = a_2$" />
          </div>
        </div>

        {/* CARD 6: SMOOTH PULLEY */}
        <div className="flex flex-col justify-between bg-zinc-900/10 border border-zinc-800/40 rounded-xl p-5 backdrop-blur-md min-h-[340px]">
          <div>
            <div className="text-zinc-400 font-bold tracking-wider text-[11px] uppercase mb-4 pl-1">
              <MathInline content="$\text{Smooth Pulley}$" />
            </div>
            <div className="w-full h-24 bg-[#141417] border border-zinc-800/60 rounded-xl flex items-center justify-center relative overflow-hidden mb-4">
              <svg viewBox="0 0 200 100" className="w-full h-full">
                <path d="M 85 85 L 85 45 A 15 15 0 0 1 115 45 L 115 85" fill="none" stroke="#10b981" strokeWidth="2.5" />
                <circle cx="100" cy="45" r="12" fill="#1c1c1f" stroke="#3f3f46" strokeWidth="2" />
                <circle cx="100" cy="45" r="2.5" fill="#a1a1aa" />
              </svg>
            </div>
            <div className="space-y-2 text-zinc-300 text-xs px-1 mb-3">
              <p className="leading-relaxed"><strong className="text-emerald-400 font-bold block mb-0.5">Meaning:</strong> The string turns around a bearing casing assembly with absolutely zero frictional losses.</p>
              <p className="leading-relaxed"><strong className="text-emerald-400 font-bold block mb-0.5">Effect:</strong> Tension magnitude remains perfectly equal and constant on both downstream sections of the string:</p>
            </div>
          </div>
          <div className="w-full bg-[#141417]/80 rounded-lg p-2.5 text-center border border-zinc-800/40 text-sm font-bold text-emerald-400 shadow-inner">
            <MathInline content="$T_1 = T_2$" />
          </div>
        </div>

        {/* CARD 7: RIGID ROD / TOWBAR */}
        <div className="flex flex-col justify-between bg-zinc-900/10 border border-zinc-800/40 rounded-xl p-5 backdrop-blur-md min-h-[340px] lg:col-span-3 lg:max-w-md lg:mx-auto w-full">
          <div>
            <div className="text-zinc-400 font-bold tracking-wider text-[11px] uppercase mb-4 pl-1">
              <MathInline content="$\text{Rigid Rod / Towbar}$" />
            </div>
            <div className="w-full h-24 bg-[#141417] border border-zinc-800/60 rounded-xl flex items-center justify-center relative overflow-hidden mb-4">
              <svg viewBox="0 0 200 100" className="w-full h-full">
                <line x1="55" y1="50" x2="145" y2="50" stroke="#f43f5e" strokeWidth="4" strokeLinecap="round" />
                <rect x="30" y="40" width="25" height="20" rx="3" fill="#1c1c1f" stroke="#52525b" strokeWidth="1.5" />
                <rect x="145" y="40" width="25" height="20" rx="3" fill="#1c1c1f" stroke="#52525b" strokeWidth="1.5" />
              </svg>
            </div>
            <div className="space-y-2 text-zinc-300 text-xs px-1">
              <p className="leading-relaxed"><strong className="text-rose-400 font-bold block mb-0.5">Meaning:</strong> The mechanical bar structural connector does not bend, compress, buckle, or deform under load conditions.</p>
              <p className="leading-relaxed"><strong className="text-rose-400 font-bold block mb-0.5">Effect:</strong> Maintains a static, fixed separation distance metric between moving entities; can transmit both tension (pull) and thrust (push) forces.</p>
            </div>
          </div>
        </div>

      </div>
    </DiagramPanel>
  );
};