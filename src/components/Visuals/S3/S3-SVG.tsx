import React from 'react';
import { MathText } from '../../MathText';
import { DiagramPanel } from '@/components/DiagramPanel';

export const VennMutExSVG: React.FC = () => (
  <div className="w-full flex flex-col items-center py-12 mb-12 border border-slate-800 bg-slate-950 relative shadow-[8px_8px_0px_#0f172a] rounded-xl overflow-hidden px-4">
    <div className="absolute top-0 right-0 bg-slate-900 border-b border-l border-slate-800 text-slate-400 px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
      Fig 1. Venn Configurations
    </div>
    
    <svg width="600" height="160" viewBox="10 30 580 170" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" overflow="visible">
      {/* Left Side: Mutually Exclusive */}
      <rect x="20" y="40" width="260" height="150" stroke="#334155" strokeWidth="2" fill="#0f172a" rx="4" />
      <text x="35" y="65" fill="#94a3b8" fontSize="16" fontFamily="serif" fontStyle="italic">E</text>
      
      <circle cx="100" cy="115" r="42" stroke="#10b981" strokeWidth="2" fill="#10b981" fillOpacity="0.05" className="hover:fill-opacity-10 transition-all duration-200" />
      <foreignObject x="85" y="100" width="30" height="30">
        <MathText content="A" className="text-emerald-400 text-center font-serif text-base" />
      </foreignObject>
      
      <circle cx="200" cy="115" r="42" stroke="#38bdf8" strokeWidth="2" fill="#38bdf8" fillOpacity="0.05" className="hover:fill-opacity-10 transition-all duration-200" />
      <foreignObject x="185" y="100" width="30" height="30">
        <MathText content="B" className="text-sky-400 text-center font-serif text-base" />
      </foreignObject>

      {/* Right Side: Intersecting */}
      <rect x="320" y="40" width="260" height="150" stroke="#334155" strokeWidth="2" fill="#0f172a" rx="4" />
      <text x="335" y="65" fill="#94a3b8" fontSize="16" fontFamily="serif" fontStyle="italic">E</text>
      
      <circle cx="410" cy="115" r="42" stroke="#10b981" strokeWidth="2" fill="#10b981" fillOpacity="0.05" />
      <circle cx="470" cy="115" r="42" stroke="#38bdf8" strokeWidth="2" fill="#38bdf8" fillOpacity="0.05" />
      
      {/* Shaded Intersection */}
      <path d="M441 87 A 42 42 0 0 0 439 143 A 42 42 0 0 0 441 87" fill="#f43f5e" fillOpacity="0.25" className="hover:fill-opacity-40 transition-all duration-100 cursor-help" />
      
      <foreignObject x="380" y="100" width="30" height="30">
        <MathText content="A" className="text-emerald-400 text-center font-serif text-base" />
      </foreignObject>
      <foreignObject x="490" y="100" width="30" height="30">
        <MathText content="B" className="text-sky-400 text-center font-serif text-base" />
      </foreignObject>
    </svg>

    <div className="flex justify-around w-full max-w-lg mt-4">
      <div className="text-center font-sans text-xs font-semibold text-emerald-400">
        <MathText content="P(A \cap B) = 0" />
        <span className="block text-[10px] text-slate-500 font-normal mt-0.5">Mutually Exclusive (No Overlap)</span>
      </div>
      <div className="text-center font-sans text-xs font-semibold text-rose-400">
        <MathText content="P(A \cap B) \neq 0" />
        <span className="block text-[10px] text-slate-500 font-normal mt-0.5">Intersecting (General Case)</span>
      </div>
    </div>

    <div className="w-full max-w-prose mt-6 border-t border-slate-800 pt-4 text-center">
      <p className="text-sm text-slate-400 italic mb-4">
        If events are mutually exclusive, the subtraction component of the General Addition Law eliminates to zero.
      </p>
      <div className="p-3 bg-rose-950/30 border border-rose-900/40 rounded text-sm text-rose-300">
        <strong className="block text-rose-400 not-italic uppercase text-[10px] mb-1">CCEA Exam Pitfall:</strong>
        Never assume <MathText content="P(A \cup B) = P(A) + P(B)" className="inline" /> unless explicitly stated that the events are mutually exclusive!
      </div>
    </div>
  </div>
);
export const TwoWayTableSVG: React.FC = () => (
  <div className="w-full flex flex-col items-center py-10 mb-12 border border-slate-800 bg-slate-950 relative shadow-[8px_8px_0px_#0f172a] rounded-xl overflow-hidden">
    <div className="absolute top-0 right-0 bg-slate-900 border-b border-l border-slate-800 text-slate-400 px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
      Fig 2. Two-Way Probability Table
    </div>
    
    <div className="w-full px-6 mt-6 overflow-x-auto">
      <table className="w-full border-collapse border border-slate-800 text-sm font-sans bg-slate-900 text-slate-300 text-center">
        <thead>
          <tr className="bg-slate-950 text-slate-400 border-b border-slate-800">
            <th className="p-3 border-r border-slate-800"></th>
            <th className="p-3 border-r border-slate-800 font-bold text-emerald-400">Event <MathText content="A" className="inline" /></th>
            <th className="p-3 border-r border-slate-800 font-bold text-amber-500">Event <MathText content="A'" className="inline" /> (Not A)</th>
            <th className="p-3 font-bold bg-slate-800/40 text-slate-200">Marginal Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-slate-800/50">
            <th className="p-3 border-r border-slate-800 font-bold bg-slate-950 text-sky-400 text-left pl-4">Event <MathText content="B" className="inline" /></th>
            <td className="p-3 border-r border-slate-800/50 italic bg-slate-900/20 hover:bg-slate-800/30 transition-colors"><MathText content="P(A \cap B)" /></td>
            <td className="p-3 border-r border-slate-800/50 italic bg-slate-900/20 hover:bg-slate-800/30 transition-colors"><MathText content="P(A' \cap B)" /></td>
            <td className="p-3 font-semibold bg-slate-800/20 text-slate-300"><MathText content="P(B)" /></td>
          </tr>
          <tr className="border-b border-slate-800">
            <th className="p-3 border-r border-slate-800 font-bold bg-slate-950 text-purple-400 text-left pl-4">Event <MathText content="B'" className="inline" /></th>
            <td className="p-3 border-r border-slate-800/50 italic bg-slate-900/20 hover:bg-slate-800/30 transition-colors"><MathText content="P(A \cap B')" /></td>
            <td className="p-3 border-r border-slate-800/50 italic bg-slate-900/20 hover:bg-slate-800/30 transition-colors"><MathText content="P(A' \cap B')" /></td>
            <td className="p-3 font-semibold bg-slate-800/20 text-slate-300"><MathText content="P(B')" /></td>
          </tr>
          <tr className="bg-slate-950/60">
            <th className="p-3 border-r border-slate-800 font-bold text-slate-400 text-left pl-4">Marginal Total</th>
            <td className="p-3 border-r border-slate-800/50 font-semibold bg-slate-800/10 text-slate-300"><MathText content="P(A)" /></td>
            <td className="p-3 border-r border-slate-800/50 font-semibold bg-slate-800/10 text-slate-300"><MathText content="P(A')" /></td>
            <td className="p-3 font-bold bg-emerald-500 text-slate-950 shadow-[inset_0_0_8px_rgba(0,0,0,0.2)]">
              <MathText content="1.0" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="w-full px-6 mt-6 max-w-prose">
      <p className="text-sm text-slate-400 text-center italic mb-4">
        <span className="text-emerald-400 font-medium">Marginal cells</span> contain single-event probabilities. <span className="text-slate-300 font-medium">Interior elements</span> dictate intersections (<MathText content="\cap" className="inline" />).
      </p>
      <div className="p-3 bg-rose-950/30 border border-rose-900/40 rounded text-sm text-rose-300 text-center">
        <strong className="block text-rose-400 not-italic uppercase text-[10px] mb-1">CCEA Exam Pitfall:</strong> Interior cross-cells ensure you do not use wrong row/column totals as conditional numerators.
      </div>
    </div>
  </div>
);
export const BayesResolutionSVG: React.FC = () => (
  <DiagramPanel
    title="Fig 4. Conditional Partition Asset"
    analysis={
      <div className="space-y-4">
        <p className="text-sm text-slate-400 italic">
          The sample space is divided into mutually exclusive partitions (<MathText content="A_1, A_2, A_3" className="inline"/>).
        </p>
        <div className="p-4 bg-slate-950 rounded-lg border border-slate-800">
          <span className="text-sky-400 font-bold uppercase tracking-wider block mb-2 text-[10px]">Total Probability Law:</span>
          <div className="font-mono text-slate-300 text-sm">
            <MathText content="P(B) = P(A_1 \cap B) + P(A_2 \cap B) + P(A_3 \cap B)" />
          </div>
        </div>
        <p className="text-sm text-slate-400 italic">
          To isolate a conditional reverse path (Bayes' Theorem), compute the path ratio:
        </p>
        <div className="p-4 bg-slate-950 rounded-lg border border-emerald-900">
          <div className="font-mono text-emerald-400 text-base">
            <MathText content="P(A_1 | B) = \frac{P(A_1 \cap B)}{P(B)}" />
          </div>
        </div>
      </div>
    }
  >
    <svg width="600" height="120" viewBox="30 20 540 120" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" overflow="visible">
      {/* Sample Universe Block */}
      <rect x="40" y="30" width="520" height="100" stroke="#475569" strokeWidth="2" fill="#0f172a" rx="4"/>
      
      {/* Partitions */}
      <line x1="220" y1="30" x2="220" y2="130" stroke="#334155" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="400" y1="30" x2="400" y2="130" stroke="#334155" strokeWidth="1" strokeDasharray="4 4" />
      
      {/* Overlapping Target Event B */}
      <ellipse cx="300" cy="85" rx="160" ry="35" stroke="#f59e0b" strokeWidth="2" fill="#f59e0b" fillOpacity="0.08" />
      
      <foreignObject x="270" y="70" width="60" height="30">
        <MathText content="B" className="text-amber-400 text-center font-bold text-sm" />
      </foreignObject>
      
      {/* Mathematical Intersections */}
      <foreignObject x="80" y="90" width="100" height="30">
        <MathText content="A_1 \cap B" className="text-slate-400 text-center text-xs italic" />
      </foreignObject>
      <foreignObject x="250" y="105" width="100" height="30">
        <MathText content="A_2 \cap B" className="text-slate-400 text-center text-xs italic" />
      </foreignObject>
      <foreignObject x="430" y="90" width="100" height="30">
        <MathText content="A_3 \cap B" className="text-slate-400 text-center text-xs italic" />
      </foreignObject>
    </svg>
  </DiagramPanel>
);
