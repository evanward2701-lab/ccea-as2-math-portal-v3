import React from 'react';
import { MathText } from '../../MathText';

// Diagram 2: Cumulative Binomial Inequality Interactive Matrix Panel
export const InequalityPanelSVG: React.FC = () => (
  <div className="w-full flex flex-col items-center py-8 px-4 mb-8 border border-slate-800 bg-slate-900 rounded-xl relative shadow-2xl overflow-hidden">
    <div className="absolute top-0 right-0 bg-slate-800 border-l border-b border-slate-700 text-slate-400 px-3 py-1 text-[10px] uppercase tracking-widest font-mono font-bold">
      Fig 2. Binomial Inequalities
    </div>
    
    <div className="w-full mt-4 overflow-x-auto">
      <table className="w-full border-collapse border border-slate-800 text-sm font-sans bg-slate-950 text-center rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-slate-800/80 text-slate-200 border-b border-slate-700">
            <th className="p-3 uppercase font-mono tracking-wider text-[11px] text-left pl-6">English Phrase</th>
            <th className="p-3 uppercase font-mono tracking-wider text-[11px]">Raw Inequality</th>
            <th className="p-3 uppercase font-mono tracking-wider text-[11px] text-right pr-6">Calculate via Calculator</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800/60 text-slate-300">
          <tr className="hover:bg-slate-800/30 transition-colors">
            <td className="p-3 text-left pl-6 font-semibold text-slate-200">Fewer than 4</td>
            <td className="p-3 font-mono text-amber-400">P(X &lt; 4)</td>
            <td className="p-3 text-right pr-6">
              <div className="inline-flex justify-end text-sky-400 font-bold">
                <MathText content="P(X \le 3)" />
              </div>
            </td>
          </tr>
          <tr className="hover:bg-slate-800/30 transition-colors">
            <td className="p-3 text-left pl-6 font-semibold text-slate-200">At most 4</td>
            <td className="p-3 font-mono text-emerald-400">P(X \le 4)</td>
            <td className="p-3 text-right pr-6">
              <div className="inline-flex justify-end text-emerald-400 font-bold">
                <MathText content="P(X \le 4)" />
              </div>
            </td>
          </tr>
          <tr className="hover:bg-slate-800/30 transition-colors">
            <td className="p-3 text-left pl-6 font-semibold text-slate-200">At least 4</td>
            <td className="p-3 font-mono text-rose-400">P(X \ge 4)</td>
            <td className="p-3 text-right pr-6">
              <div className="inline-flex justify-end text-rose-400 font-bold">
                <MathText content="1 - P(X \le 3)" />
              </div>
            </td>
          </tr>
          <tr className="hover:bg-slate-800/30 transition-colors">
            <td className="p-3 text-left pl-6 font-semibold text-slate-200">More than 4</td>
            <td className="p-3 font-mono text-amber-400">P(X &gt; 4)</td>
            <td className="p-3 text-right pr-6">
              <div className="inline-flex justify-end text-rose-400 font-bold">
                <MathText content="1 - P(X \le 4)" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="mt-4 px-4 py-3 bg-slate-950/60 border border-slate-800 rounded-lg w-full">
      <p className="text-[11px] font-sans text-slate-400 leading-relaxed">
        <span className="text-rose-400 font-mono font-bold uppercase tracking-wider block mb-1">⚠️ Exam Misconception Warning:</span>
        Because binomial data is strictly discrete, strict inequalities (<MathText content="<" />, <MathText content=">" />) must be carefully converted into inclusive inequalities (<MathText content="\le" />, <MathText content="\ge" />). Do not accidentally calculate <MathText content="1 - P(X \le 4)" /> when asked for "at least 4".
      </p>
    </div>
  </div>
);

// Diagram 3: True Discrete Binomial Distribution Graph (Correct Canonical Classes and Content Property Applied)
export const NormalDistributionSVG: React.FC = () => (
  <div className="w-full flex flex-col items-center py-8 px-4 mb-8 border border-slate-800 bg-slate-900 rounded-xl relative shadow-2xl overflow-hidden">
    <div className="absolute top-0 right-0 bg-slate-800 border-l border-b border-slate-700 text-slate-400 px-3 py-1 text-[10px] uppercase tracking-widest font-mono font-bold">
      Fig 3. Binomial pmf vs Continuous Curves
    </div>

    <div className="w-full max-w-110 h-55 mt-6 flex flex-col items-center justify-center">
      <svg width="100%" height="100%" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ shapeRendering: 'geometricPrecision' }}>
        {/* Grid Floor Line & Horizontal Ticks */}
        <line x1="40" y1="30" x2="370" y2="30" stroke="#1E293B" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="40" y1="80" x2="370" y2="80" stroke="#1E293B" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="40" y1="130" x2="370" y2="130" stroke="#1E293B" strokeWidth="1" strokeDasharray="4 4" />
        
        {/* Axes */}
        <line x1="30" y1="180" x2="380" y2="180" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="40" y1="20" x2="40" y2="190" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" />

        {/* Discrete PMF Spikes */}
        <line x1="80" y1="180" x2="80" y2="160" stroke="#475569" strokeWidth="6" strokeLinecap="round" className="hover:stroke-slate-400 transition-all cursor-pointer" />
        <line x1="135" y1="180" x2="135" y2="110" stroke="#38BDF8" strokeWidth="6" strokeLinecap="round" className="hover:stroke-sky-400 transition-all cursor-pointer" />
        <line x1="190" y1="180" x2="190" y2="45" stroke="#34D399" strokeWidth="6" strokeLinecap="round" className="hover:stroke-emerald-400 transition-all cursor-pointer" />
        <line x1="245" y1="180" x2="245" y2="95" stroke="#38BDF8" strokeWidth="6" strokeLinecap="round" className="hover:stroke-sky-400 transition-all cursor-pointer" />
        <line x1="300" y1="180" x2="300" y2="145" stroke="#475569" strokeWidth="6" strokeLinecap="round" className="hover:stroke-slate-400 transition-all cursor-pointer" />
        <line x1="355" y1="180" x2="355" y2="170" stroke="#475569" strokeWidth="6" strokeLinecap="round" className="hover:stroke-slate-400 transition-all cursor-pointer" />

        {/* Labels */}
        <foreignObject x="70" y="188" width="20" height="25">
          <div className="text-[11px] text-slate-500 text-center font-mono">0</div>
        </foreignObject>
        <foreignObject x="125" y="188" width="20" height="25">
          <div className="text-[11px] text-slate-400 text-center font-mono">1</div>
        </foreignObject>
        <foreignObject x="180" y="188" width="20" height="25">
          <div className="text-[11px] text-emerald-400 font-bold text-center font-mono">2</div>
        </foreignObject>
        <foreignObject x="235" y="188" width="20" height="25">
          <div className="text-[11px] text-slate-400 text-center font-mono">3</div>
        </foreignObject>
        <foreignObject x="290" y="188" width="20" height="25">
          <div className="text-[11px] text-slate-400 text-center font-mono">4</div>
        </foreignObject>
        <foreignObject x="345" y="188" width="20" height="25">
          <div className="text-[11px] text-slate-500 text-center font-mono">5</div>
        </foreignObject>

        <foreignObject x="2" y="75" width="35" height="40">
          <div className="text-[10px] text-slate-500 font-mono text-right pr-1">P(X=x)</div>
        </foreignObject>

        <foreignObject x="260" y="35" width="110" height="30">
          <div className="text-right text-xs font-mono text-slate-400">
            <MathText content="X \sim B(n, p)" />
          </div>
        </foreignObject>
      </svg>
    </div>
    
    <p className="text-[11px] font-sans text-slate-400 text-center mt-4 px-4 italic leading-relaxed">
      <span className="text-rose-400 not-italic font-mono font-bold uppercase tracking-wider block mb-1">⚠️ AS2 Warning Node</span>
      Normal Distribution calculations are completely excluded from AS2 Mathematics. Do not apply continuous curves to discrete data structures.
    </p>
  </div>
);

// Model Validation Requirements
export const BinomialConditionsChecklistSVG: React.FC = () => (
  <div className="w-full flex flex-col items-center py-6 px-4 mb-8 border border-slate-800 bg-slate-900 rounded-xl relative shadow-2xl overflow-hidden">
    <div className="absolute top-0 right-0 bg-slate-800 border-l border-b border-slate-700 text-slate-400 px-3 py-1 text-[10px] uppercase tracking-widest font-mono font-bold">
      Fig 4. Model Validation Requirements
    </div>
    <div className="w-full mt-4 space-y-2.5">
      {[
        { id: 1, title: "Fixed Number of Trials (n)", desc: "The experiment must run for a strict, predefined finite series of trials." },
        { id: 2, title: "Binary Outcome Matrix", desc: "Every trial yields exactly two clear states: defined strictly as Success or Failure." },
        { id: 3, title: "Constant Probability (p)", desc: "The underlying chance of success must remain completely uniform across all steps." },
        { id: 4, title: "Mutual Independence", desc: "The outcome of any isolated trial cannot modify or influence the probability vector of another." }
      ].map((cond) => (
        <div key={cond.id} className="flex items-start gap-3 p-3 bg-slate-950/50 border border-slate-800/80 rounded-lg hover:border-emerald-500/30 transition-all group">
          <div className="w-5 h-5 rounded border border-emerald-500/30 bg-emerald-950/40 flex items-center justify-center text-emerald-400 font-mono text-xs font-bold shadow-inner group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
            {cond.id}
          </div>
          <div className="flex-1">
            <h4 className="text-xs font-mono uppercase tracking-wide text-slate-200 font-bold">{cond.title}</h4>
            <p className="text-[11px] text-slate-400 mt-0.5">{cond.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);