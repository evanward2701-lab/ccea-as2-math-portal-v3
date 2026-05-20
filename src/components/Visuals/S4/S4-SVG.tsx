import React from 'react';
import { MathText } from '../../MathText';

// ==========================================
// Fig 2. Cumulative Binomial Inequality Matrix
// ==========================================
export const InequalityPanelSVG: React.FC = () => (
  <div className="w-full flex flex-col items-center py-10 mb-12 border border-slate-800 bg-slate-950 relative shadow-[8px_8px_0px_#0f172a] rounded-xl overflow-hidden">
    <div className="absolute top-0 right-0 bg-slate-900 border-b border-l border-slate-800 text-slate-400 px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
      Fig 2. Binomial Inequalities
    </div>
    
    <div className="w-full px-6 mt-6 overflow-x-auto">
      <table className="w-full border-collapse border border-slate-800 text-sm font-sans bg-slate-900 text-center">
        <thead>
          <tr className="bg-slate-950 text-slate-400 border-b border-slate-800 uppercase font-mono tracking-wider text-[10px]">
            <th className="p-4 border-r border-slate-800 text-left pl-6">English Phrase</th>
            <th className="p-4 border-r border-slate-800">Raw Inequality</th>
            <th className="p-4 text-emerald-400">Calculator Format <MathText content="(\leq)" className="inline" /></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800/50">
          <tr className="hover:bg-slate-800/30 transition-colors">
            <td className="p-4 border-r border-slate-800/50 text-left pl-6 font-semibold text-slate-300">"More than 5"</td>
            <td className="p-4 border-r border-slate-800/50"><MathText content="P(X > 5)" /></td>
            <td className="p-4 bg-emerald-950/10 font-bold"><MathText content="1 - P(X \leq 5)" /></td>
          </tr>
          <tr className="hover:bg-slate-800/30 transition-colors">
            <td className="p-4 border-r border-slate-800/50 text-left pl-6 font-semibold text-slate-300">"At least 5" / "5 or more"</td>
            <td className="p-4 border-r border-slate-800/50"><MathText content="P(X \geq 5)" /></td>
            <td className="p-4 bg-emerald-950/10 font-bold"><MathText content="1 - P(X \leq 4)" /></td>
          </tr>
          <tr className="hover:bg-slate-800/30 transition-colors">
            <td className="p-4 border-r border-slate-800/50 text-left pl-6 font-semibold text-slate-300">"Fewer than 5"</td>
            <td className="p-4 border-r border-slate-800/50"><MathText content="P(X < 5)" /></td>
            <td className="p-4 bg-emerald-950/10 font-bold"><MathText content="P(X \leq 4)" /></td>
          </tr>
          <tr className="hover:bg-slate-800/30 transition-colors">
            <td className="p-4 border-r border-slate-800/50 text-left pl-6 font-semibold text-slate-300">"At most 5" / "No more than 5"</td>
            <td className="p-4 border-r border-slate-800/50"><MathText content="P(X \leq 5)" /></td>
            <td className="p-4 bg-emerald-950/10 font-bold"><MathText content="P(X \leq 5)" /></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="w-full px-6 mt-6 max-w-prose">
      <div className="p-4 bg-rose-950/30 border border-rose-900/40 rounded-lg text-sm text-rose-300 text-center">
        <strong className="block text-rose-400 not-italic uppercase text-[10px] mb-1">CCEA Exam Pitfall:</strong>
        Most standard calculators only process cumulative probabilities going downwards. You MUST convert strict inequalities (<MathText content="<, >" className="inline" />) and upwards inequalities (<MathText content="\ge" className="inline" />) into a format utilizing <MathText content="P(X \le x)" className="inline" />.
      </div>
    </div>
  </div>
);

// ==========================================
// Fig 3. Standard Normal Distribution Gaussian Curve
// ==========================================
export const NormalDistributionSVG: React.FC = () => (
  <div className="w-full flex flex-col items-center py-12 mb-12 border border-slate-800 bg-slate-950 relative shadow-[8px_8px_0px_#0f172a] rounded-xl overflow-hidden">
    <div className="absolute top-0 right-0 bg-slate-900 border-b border-l border-slate-800 text-slate-400 px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
      Fig 3. Normal Distribution
    </div>
    
    <svg width="500" height="260" viewBox="20 20 460 240" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" overflow="visible">
      {/* Background shading for standard deviations */}
      <path d="M 183 200 L 183 118 C 210 50, 230 40, 250 40 C 270 40, 290 50, 317 118 L 317 200 Z" fill="#38bdf8" fillOpacity="0.1" />
      <path d="M 117 200 L 117 185 C 130 150, 150 120, 183 118 L 183 200 Z" fill="#3b82f6" fillOpacity="0.05" />
      <path d="M 383 200 L 383 185 C 370 150, 350 120, 317 118 L 317 200 Z" fill="#3b82f6" fillOpacity="0.05" />

      {/* Axis and Curve */}
      <line x1="30" y1="200" x2="470" y2="200" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
      <path d="M 30 200 C 130 200, 170 40, 250 40 C 330 40, 370 200, 470 200" stroke="#38bdf8" strokeWidth="2.5" fill="none" />
      
      {/* Center Mean Line */}
      <line x1="250" y1="40" x2="250" y2="200" stroke="#10b981" strokeWidth="2" strokeDasharray="4 4" />
      <foreignObject x="240" y="210" width="20" height="25">
        <MathText content="\mu" className="text-emerald-400 text-center font-bold" />
      </foreignObject>

      {/* Std Dev Markers */}
      <line x1="183" y1="200" x2="183" y2="205" stroke="#64748b" strokeWidth="2" />
      <line x1="117" y1="200" x2="117" y2="205" stroke="#64748b" strokeWidth="2" />
      <line x1="317" y1="200" x2="317" y2="205" stroke="#64748b" strokeWidth="2" />
      <line x1="383" y1="200" x2="383" y2="205" stroke="#64748b" strokeWidth="2" />

      <foreignObject x="145" y="210" width="80" height="30">
        <MathText content="\mu - \sigma" className="text-slate-400 text-center text-xs" />
      </foreignObject>
      <foreignObject x="275" y="210" width="80" height="30">
        <MathText content="\mu + \sigma" className="text-slate-400 text-center text-xs" />
      </foreignObject>
      <foreignObject x="220" y="100" width="60" height="30">
        <MathText content="\approx 68\%" className="text-sky-300 text-center font-bold text-xs" />
      </foreignObject>
    </svg>

    <div className="w-full px-6 mt-6 space-y-4 text-center max-w-prose">
      <p className="text-sm text-slate-400 italic">
        The Normal Distribution is perfectly symmetrical about the mean (<MathText content="\mu" className="inline" />).
      </p>
      <div className="p-4 bg-slate-900/40 border border-slate-800/60 rounded-lg">
        <span className="text-sky-400 font-bold uppercase tracking-wider block mb-2 text-[10px]">Standardisation Formula:</span>
        <div className="font-mono text-emerald-400 text-lg"><MathText content="Z = \frac{X - \mu}{\sigma}" /></div>
      </div>
      <div className="p-3 bg-rose-950/30 border border-rose-900/40 rounded text-sm text-rose-300">
        <strong className="block text-rose-400 not-italic uppercase text-[10px] mb-1">CCEA Exam Pitfall:</strong>
        Note that <MathText content="\sigma" className="inline" /> is the standard deviation, but exam questions frequently try to trick you by providing the variance (<MathText content="\sigma^2" className="inline" />) instead!
      </div>
    </div>
  </div>
);

// ==========================================
// Fig 4. Validation Matrix
// ==========================================
export const BinomialConditionsChecklistSVG: React.FC = () => (
  <div className="w-full flex flex-col items-center py-10 mb-12 border border-slate-800 bg-slate-950 relative shadow-[8px_8px_0px_#0f172a] rounded-xl overflow-hidden">
    <div className="absolute top-0 right-0 bg-slate-900 border-b border-l border-slate-800 text-slate-400 px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
      Fig 4. Model Validation Requirements
    </div>
    
    <div className="w-full px-6 mt-8 space-y-3 mb-4">
      {[
        { id: 1, title: "Fixed Number of Trials (n)", desc: "The experiment must run for a strict, predefined finite series of trials." },
        { id: 2, title: "Binary Outcome Matrix", desc: "Every trial yields exactly two clear states: defined strictly as Success or Failure." },
        { id: 3, title: "Constant Probability (p)", desc: "The underlying chance of success must remain completely uniform across all steps." },
        { id: 4, title: "Mutual Independence", desc: "The outcome of any isolated trial cannot modify or influence the probability vector of another." }
      ].map((cond) => (
        <div key={cond.id} className="flex items-start gap-4 p-4 bg-slate-900/50 border border-slate-800 rounded-lg hover:border-emerald-500/50 transition-all group shadow-sm">
          <div className="w-6 h-6 shrink-0 rounded border border-emerald-500/30 bg-emerald-950/40 flex items-center justify-center text-emerald-400 font-mono text-xs font-bold shadow-inner group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
            {cond.id}
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-mono uppercase tracking-wide text-emerald-400 font-bold mb-1">
              {cond.title}
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              {cond.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
    <div className="w-full px-6 mt-4 max-w-prose">
      <div className="p-4 bg-sky-950/30 border border-sky-900/40 rounded-lg text-sm text-sky-300 text-center">
        <strong className="block text-sky-400 not-italic uppercase text-[10px] mb-1">Modelling Notation:</strong>
        If all four conditions are met, the scenario can be modelled by a Binomial Distribution, written as <MathText content="X \sim B(n, p)" className="inline" />.
      </div>
    </div>
  </div>
);