import React from 'react';

export const M1ExamTrapSVG: React.FC = () => (
  <div className="w-full border border-slate-800/50 bg-slate-950 p-6 rounded-xl my-8 relative overflow-hidden shadow-[8px_8px_0px_#0f172a]">
    <div className="absolute top-0 right-0 bg-rose-600 text-slate-50 text-[9px] uppercase tracking-widest font-black px-3 py-1 font-sans">
      CCEA Examiner Warning
    </div>
    <h4 className="text-rose-400 font-bold text-sm mb-2 uppercase tracking-wider mt-2">
      The Multiple Responses Penalty Rule
    </h4>
    <p className="text-xs text-slate-300 leading-relaxed mb-6">
      If you are unsure of a sign convention or mathematical method and present two competing solutions on your sheet without clearly crossing one out, 
      <strong className="text-rose-300"> CCEA examiners are required to mark all attempts and award marks based on the POOREST solution.</strong>
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
      {/* Penalized Choice Column */}
      <div className="border border-rose-950/60 bg-rose-950/20 p-4 rounded-lg relative opacity-60">
        <div className="absolute top-2 right-2 text-rose-500 font-bold text-[9px] uppercase tracking-wider">Penalized</div>
        <span className="block font-bold text-slate-400 mb-2">Attempt 1: Upwards Positive</span>
        <code className="text-slate-400 block font-mono text-[10px] bg-slate-950 p-2 rounded tracking-wide mb-3 border border-slate-800">
          0 = 21 - 9.8t ⇒ t = 2.14s
        </code>
        <span className="block font-bold text-slate-400 mb-2">Attempt 2: Downwards Positive</span>
        <code className="text-slate-400 block font-mono text-[10px] bg-slate-950 p-2 rounded tracking-wide border border-slate-800">
          0 = 21 + 9.8t ⇒ t = -2.14s
        </code>
        <p className="text-[10px] text-rose-400/80 italic mt-3 leading-tight">
          Result: Both versions are scanned. Marks are restricted exclusively to the flawed calculation.
        </p>
      </div>

      {/* Correct Practice Column */}
      <div className="border border-emerald-900/60 bg-emerald-950/20 p-4 rounded-lg relative">
        <div className="absolute top-2 right-2 text-emerald-400 font-bold text-[9px] uppercase tracking-wider">Correct Practice</div>
        <span className="block font-bold text-slate-200 mb-2">Discarded Attempt</span>
        <div className="relative inline-block w-full mb-3">
          <div className="absolute inset-0 bg-linear-to-tr from-transparent via-rose-500/50 to-transparent h-0.5 top-1/2 transform -rotate-2" />
          <code className="text-slate-500 block font-mono text-[10px] bg-slate-950 p-2 rounded tracking-wide line-through decoration-rose-500/80 border border-slate-800">
            0 = 21 + 9.8t ⇒ t = -2.14s
          </code>
        </div>
        <span className="block font-bold text-slate-200 mb-2">Active Clean Solution</span>
        <code className="text-emerald-400 block font-mono text-[10px] bg-slate-950 p-2 rounded tracking-wide font-bold border border-emerald-900">
          0 = 21 - 9.8t ⇒ t = 2.14s ✓
        </code>
        <p className="text-[10px] text-emerald-400/80 italic mt-3 leading-tight">
          Result: Cross out flawed models with a single line to ensure only your intended work remains active.
        </p>
      </div>
    </div>
  </div>
);
