import React from 'react';
import { MathText } from '@/core/components/MathText';

export const ModellingAssumptionsSVG: React.FC = () => (
  <div className="w-full flex flex-col my-8 relative border border-zinc-800/60 bg-[#141416] p-6 rounded-xl shadow-inner">
    <div className="absolute top-0 right-0 bg-zinc-900 text-zinc-400 border-l border-b border-zinc-800/60 px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
      Fig 3. Common Modelling Assumptions
    </div>
    <p className="text-sm text-zinc-400 italic text-center mt-6 mb-2">
      Modelling words are shortcuts for physical assumptions and mathematical consequences.
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
      <div className="border border-zinc-800 bg-zinc-900 p-4 rounded-xl flex flex-col items-center shadow-inner">
        <span className="font-bold text-xs text-zinc-400 uppercase tracking-wider mb-2">Particle</span>
        <svg width="112" height="74" viewBox="0 0 112 74" fill="none" className="my-1">
          <rect x="16" y="17" width="80" height="40" rx="6" stroke="#3f3f46" strokeWidth="2" strokeDasharray="4 4" />
          <circle cx="56" cy="37" r="8" fill="#a1a1aa" />
          <line x1="8" y1="37" x2="40" y2="37" stroke="#475569" strokeWidth="2" />
          <line x1="72" y1="37" x2="104" y2="37" stroke="#475569" strokeWidth="2" />
        </svg>
        <div className="text-xs text-zinc-400 bg-[#141416] p-3 rounded w-full border border-zinc-800 min-h-24.5 flex flex-col justify-center gap-1">
          <p><strong className="text-zinc-200">Meaning:</strong> dimensions negligible; mass treated at one point.</p>
          <p><strong className="text-zinc-300">Effect:</strong> ignore rotation, shape, and where forces act on the body.</p>
        </div>
      </div>

      <div className="border border-zinc-800 bg-zinc-900 p-4 rounded-xl flex flex-col items-center shadow-inner">
        <span className="font-bold text-xs text-zinc-400 uppercase tracking-wider mb-2">Smooth Surface</span>
        <svg width="112" height="74" viewBox="0 0 112 74" fill="none" className="my-1">
          <line x1="12" y1="52" x2="100" y2="52" stroke="#a1a1aa" strokeWidth="3" />
          <rect x="38" y="26" width="36" height="26" rx="4" stroke="#e2e8f0" strokeWidth="2" fill="#1e293b" />
          <path d="M 22 60 H 90" stroke="#3f3f46" strokeWidth="2" strokeDasharray="4 6" />
        </svg>
        <div className="text-xs text-zinc-400 bg-[#141416] p-3 rounded w-full border border-zinc-800 min-h-24.5 flex flex-col justify-center gap-1">
          <p><strong className="text-zinc-200">Meaning:</strong> no friction at the contact surface.</p>
          <p><strong className="text-zinc-300">Effect:</strong> omit the friction force from the force diagram.</p>
        </div>
      </div>

      <div className="border border-zinc-800 bg-zinc-900 p-4 rounded-xl flex flex-col items-center shadow-inner">
        <span className="font-bold text-xs text-amber-500 uppercase tracking-wider mb-2">Rough Surface</span>
        <svg width="112" height="74" viewBox="0 0 112 74" fill="none" className="my-1">
          <line x1="12" y1="54" x2="100" y2="54" stroke="#64748b" strokeWidth="4" />
          {Array.from({ length: 9 }).map((_, idx) => (
            <line key={idx} x1={20 + idx * 9} y1="54" x2={14 + idx * 9} y2="62" stroke="#475569" strokeWidth="2" />
          ))}
          <rect x="36" y="28" width="40" height="26" rx="4" stroke="#e2e8f0" strokeWidth="2" fill="#1e293b" />
          <path d="M 36 41 H 14" stroke="#f59e0b" strokeWidth="3" />
          <path d="M 16 36 L 10 41 L 16 46" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div className="text-xs text-zinc-400 bg-[#141416] p-3 rounded w-full border border-zinc-800 min-h-24.5 flex flex-col justify-center gap-1">
          <p><strong className="text-zinc-200">Meaning:</strong> friction is present.</p>
          <p><strong className="text-amber-300">Effect:</strong> friction opposes motion or impending motion.</p>
          <MathText content="F \leq \mu R" className="text-amber-400 font-bold [&_p]:m-0" />
        </div>
      </div>

      <div className="border border-zinc-800 bg-zinc-900 p-4 rounded-xl flex flex-col items-center shadow-inner">
        <span className="font-bold text-xs text-zinc-400 uppercase tracking-wider mb-2">Light String / Towbar / Pulley</span>
        <svg width="112" height="74" viewBox="0 0 112 74" fill="none" className="my-1">
          <circle cx="56" cy="36" r="20" stroke="#a1a1aa" strokeWidth="2.5" />
          <line x1="16" y1="36" x2="96" y2="36" stroke="#cbd5e1" strokeWidth="3" />
          <text x="45" y="42" className="text-sm font-bold fill-zinc-300">0 kg</text>
        </svg>
        <div className="text-xs text-zinc-400 bg-[#141416] p-3 rounded w-full border border-zinc-800 min-h-24.5 flex flex-col justify-center gap-1">
          <p><strong className="text-zinc-200">Meaning:</strong> the connector has negligible mass.</p>
          <p><strong className="text-zinc-300">Effect:</strong> do not include its weight or a separate mass term.</p>
        </div>
      </div>

      <div className="border border-zinc-800 bg-zinc-900 p-4 rounded-xl flex flex-col items-center shadow-inner">
        <span className="font-bold text-xs text-emerald-400 uppercase tracking-wider mb-2">Inextensible String</span>
        <svg width="112" height="74" viewBox="0 0 112 74" fill="none" className="my-1">
          <rect x="12" y="28" width="28" height="22" rx="3" stroke="#64748b" strokeWidth="2" fill="#1e293b" />
          <rect x="72" y="28" width="28" height="22" rx="3" stroke="#64748b" strokeWidth="2" fill="#1e293b" />
          <line x1="40" y1="39" x2="72" y2="39" stroke="#10b981" strokeWidth="3" />
          <path d="M 16 18 H 96" stroke="#10b981" strokeWidth="2" strokeDasharray="6 5" />
        </svg>
        <div className="text-xs text-zinc-400 bg-[#141416] p-3 rounded w-full border border-zinc-800 min-h-24.5 flex flex-col justify-center gap-1">
          <p><strong className="text-zinc-200">Meaning:</strong> the string does not stretch.</p>
          <p><strong className="text-emerald-300">Effect:</strong> connected particles share acceleration magnitude.</p>
          <MathText content="a_1 = a_2" className="text-emerald-400 font-bold [&_p]:m-0" />
        </div>
      </div>

      <div className="border border-zinc-800 bg-zinc-900 p-4 rounded-xl flex flex-col items-center shadow-inner">
        <span className="font-bold text-xs text-emerald-400 uppercase tracking-wider mb-2">Smooth Pulley</span>
        <svg width="112" height="74" viewBox="0 0 112 74" fill="none" className="my-1">
          <circle cx="56" cy="28" r="20" stroke="#475569" strokeWidth="2.5" />
          <circle cx="56" cy="28" r="4" fill="#475569" />
          <path d="M 36 68 L 36 28 A 20 20 0 0 1 76 28 L 76 68" stroke="#10b981" strokeWidth="3" />
        </svg>
        <div className="text-xs text-zinc-400 bg-[#141416] p-3 rounded w-full border border-zinc-800 min-h-24.5 flex flex-col justify-center gap-1">
          <p><strong className="text-zinc-200">Meaning:</strong> no friction at the pulley.</p>
          <p><strong className="text-emerald-300">Effect:</strong> tension is the same on both sides.</p>
          <MathText content="T_1 = T_2" className="text-emerald-400 font-bold [&_p]:m-0" />
        </div>
      </div>

      <div className="border border-zinc-800 bg-zinc-900 p-4 rounded-xl flex flex-col items-center shadow-inner md:col-span-2 xl:col-span-1">
        <span className="font-bold text-xs text-rose-400 uppercase tracking-wider mb-2">Rigid Rod / Towbar</span>
        <svg width="112" height="74" viewBox="0 0 112 74" fill="none" className="my-1">
          <rect x="10" y="28" width="26" height="22" rx="3" stroke="#64748b" strokeWidth="2" fill="#1e293b" />
          <rect x="76" y="28" width="26" height="22" rx="3" stroke="#64748b" strokeWidth="2" fill="#1e293b" />
          <line x1="36" y1="39" x2="76" y2="39" stroke="#e2e8f0" strokeWidth="5" strokeLinecap="round" />
          <path d="M 42 54 H 70" stroke="#fb7185" strokeWidth="2" strokeDasharray="5 4" />
        </svg>
        <div className="text-xs text-zinc-400 bg-[#141416] p-3 rounded w-full border border-zinc-800 min-h-24.5 flex flex-col justify-center gap-1">
          <p><strong className="text-zinc-200">Meaning:</strong> does not bend or buckle.</p>
          <p><strong className="text-rose-300">Effect:</strong> keeps a fixed distance between connected bodies.</p>
        </div>
      </div>
    </div>

    <div className="grid gap-4 mt-4 md:grid-cols-2">
      <div className="p-4 bg-rose-950/30 border border-rose-900/50 rounded-xl text-sm text-rose-200">
        <strong className="text-rose-300">Rigid light towbar:</strong> rigid = does not bend; light = negligible mass.
      </div>
      <div className="p-4 bg-zinc-900/60 border border-zinc-800 rounded-xl text-sm text-zinc-300">
        <strong className="text-rose-300">Exam trap:</strong> modelling words are instructions. Do not ignore words like light, smooth, rigid, or inextensible.
      </div>
    </div>
  </div>
);
