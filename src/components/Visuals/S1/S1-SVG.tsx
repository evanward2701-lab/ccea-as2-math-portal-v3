import React from 'react';
import { MathText } from '../../MathText';

export const SamplingTableSVG: React.FC = () => (
  <div className="w-full flex flex-col items-center py-10 mb-12 border border-slate-800 bg-slate-950 relative shadow-[8px_8px_0px_#0f172a] rounded-xl overflow-hidden">
    <div className="absolute top-0 right-0 bg-slate-900 text-slate-400 border-l border-b border-slate-800 px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
      Fig 2. S1 Sampling Methodologies
    </div>
    
    <div className="w-full px-6 mt-6 overflow-x-auto">
      <table className="w-full border-collapse font-sans bg-slate-950 text-slate-300">
        <thead>
          <tr className="bg-slate-900 text-slate-400 uppercase tracking-wider text-[10px] font-mono border-b-2 border-slate-700">
            <th className="p-4 text-left font-bold w-1/3 min-w-[100px]">Method</th>
            <th className="p-4 text-left font-bold w-1/3 min-w-[150px]">Advantage</th>
            <th className="p-4 text-left font-bold w-1/3 min-w-[150px]">Disadvantage</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800">
          <tr className="hover:bg-slate-900/50 transition-colors">
            <td className="p-4 font-bold text-sky-400">Census</td>
            <td className="p-4 text-sm leading-relaxed">100% accurate</td>
            <td className="p-4 text-sm leading-relaxed">Time-consuming / expensive</td>
          </tr>
          <tr className="hover:bg-slate-900/50 transition-colors">
            <td className="p-4 font-bold text-sky-400">Simple Random Sample</td>
            <td className="p-4 text-sm leading-relaxed">Free from human bias</td>
            <td className="p-4 text-sm leading-relaxed">Needs a full sampling frame;<br/>may not represent minority subgroups</td>
          </tr>
          <tr className="hover:bg-slate-900/50 transition-colors">
            <td className="p-4 font-bold text-sky-400">Stratified</td>
            <td className="p-4 text-sm leading-relaxed">Highly representative of population structure</td>
            <td className="p-4 text-sm leading-relaxed">Requires detailed prior knowledge<br/>of population strata sizes</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="w-full px-6 mt-6">
      <p className="text-sm text-slate-300 leading-relaxed text-center">
        Selecting a sampling technique requires balancing accuracy with cost and practicality.
      </p>
    </div>
  </div>
);
export const StratifiedProportionVisual: React.FC = () => (
  <div className="w-full flex flex-col items-center py-10 mb-12 border border-slate-800 bg-slate-950 relative shadow-[8px_8px_0px_#0f172a] rounded-xl overflow-hidden">
    <div className="absolute top-0 right-0 bg-slate-900 text-slate-400 border-l border-b border-slate-800 px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
      Fig 3. Stratified Sample Allocation
    </div>

    <svg width="600" height="220" viewBox="40 15 520 200" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" overflow="visible">
      <defs>
        <marker id="flow-arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#64748b" />
        </marker>
      </defs>

      {/* Main Population Node */}
      <rect x="50" y="85" width="120" height="50" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
      <text x="110" y="105" textAnchor="middle" fill="#f8fafc" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Total Population</text>
      <text x="110" y="120" textAnchor="middle" fill="#38bdf8" fontSize="11" fontFamily="monospace">N = 300</text>

      {/* Path lines */}
      <line x1="170" y1="110" x2="250" y2="50" stroke="#64748b" strokeWidth="2" markerEnd="url(#flow-arrow)" />
      <line x1="170" y1="110" x2="250" y2="110" stroke="#64748b" strokeWidth="2" markerEnd="url(#flow-arrow)" />
      <line x1="170" y1="110" x2="250" y2="170" stroke="#64748b" strokeWidth="2" markerEnd="url(#flow-arrow)" />

      {/* Strata Nodes */}
      {/* Year 12 */}
      <rect x="260" y="25" width="100" height="50" rx="6" fill="#1e293b" stroke="#34d399" strokeWidth="2" />
      <text x="310" y="45" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="bold">Yr 12 Strata</text>
      <text x="310" y="60" textAnchor="middle" fill="#34d399" fontSize="11" fontFamily="monospace">Pop: 120</text>

      {/* Year 13 */}
      <rect x="260" y="85" width="100" height="50" rx="6" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
      <text x="310" y="105" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="bold">Yr 13 Strata</text>
      <text x="310" y="120" textAnchor="middle" fill="#f59e0b" fontSize="11" fontFamily="monospace">Pop: 100</text>

      {/* Year 14 */}
      <rect x="260" y="145" width="100" height="50" rx="6" fill="#1e293b" stroke="#c084fc" strokeWidth="2" />
      <text x="310" y="165" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="bold">Yr 14 Strata</text>
      <text x="310" y="180" textAnchor="middle" fill="#c084fc" fontSize="11" fontFamily="monospace">Pop: 80</text>

      {/* Target Sample Node */}
      <rect x="430" y="85" width="120" height="50" rx="8" fill="#0f172a" stroke="#f43f5e" strokeWidth="2" strokeDasharray="4 4" />
      <text x="490" y="105" textAnchor="middle" fill="#f8fafc" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Target Sample</text>
      <text x="490" y="120" textAnchor="middle" fill="#f43f5e" fontSize="11" fontFamily="monospace">n = 60</text>
    </svg>

    <div className="w-full px-8 border-t border-slate-800/60 pt-6 bg-slate-900/40 text-[12px]">
      <span className="text-sky-400 font-bold uppercase tracking-wider block mb-3 text-[10px]">Mathematical Allocation Pipeline:</span>
      <p className="text-slate-300 leading-relaxed mb-4 italic">
        To maintain proportional representation, we calculate: <span className="text-emerald-400 font-bold not-italic font-mono bg-slate-900 px-1 py-0.5 rounded border border-slate-700">(Strata Size ÷ Total Population) × Sample Size</span>
      </p>
      <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 font-mono space-y-4 text-slate-300">
        <div className="flex items-center gap-4">
          <span className="w-24 text-slate-400">Yr 12 Sample:</span> 
          <MathText content="\frac{120}{300} \times 60 = 24" className="text-emerald-400" />
        </div>
        <div className="flex items-center gap-4">
          <span className="w-24 text-slate-400">Yr 13 Sample:</span> 
          <MathText content="\frac{100}{300} \times 60 = 20" className="text-amber-400" />
        </div>
        <div className="flex items-center gap-4">
          <span className="w-24 text-slate-400">Yr 14 Sample:</span> 
          <MathText content="\frac{80}{300} \times 60 = 16" className="text-purple-400" />
        </div>
      </div>
      <p className="text-[10px] text-slate-500 font-mono mt-3 text-right">
        Verification Check: 24 + 20 + 16 = 60
      </p>
    </div>
  </div>
);