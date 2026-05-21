import React from 'react';
import { MathText } from '../../MathText';
import { DiagramPanel } from '../../DiagramPanel';

export const VennMutExSVG: React.FC = () => (
  <DiagramPanel
    title="Fig 1. Venn Configurations"
    analysis={
      <div className="space-y-3">
        <div className="flex justify-around w-full max-w-md">
          <div className="text-center font-sans text-sm font-semibold text-emerald-400">
            Mutually Exclusive: <MathText content="P(A \cap B) = 0" className="inline [&_p]:inline [&_p]:m-0" />
          </div>
          <div className="text-center font-sans text-sm font-semibold text-rose-400">
            Intersecting: <MathText content="P(A \cap B) \neq 0" className="inline [&_p]:inline [&_p]:m-0" />
          </div>
        </div>
        <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg text-sm text-slate-300 leading-relaxed">
          If events are mutually exclusive, the subtraction component of the General Addition Law (<MathText content="- P(A \cap B)" className="inline [&_p]:inline [&_p]:m-0" />) becomes zero.
        </div>
        <div className="p-3 bg-rose-950/30 border border-rose-900/40 rounded text-sm text-rose-300">
          <strong className="block text-rose-400 not-italic uppercase text-[10px] mb-1">CCEA Exam Pitfall:</strong>
          Never assume <MathText content="P(A \cup B) = P(A) + P(B)" className="inline [&_p]:inline [&_p]:m-0" /> unless the events are explicitly stated to be mutually exclusive.
        </div>
      </div>
    }
  >
    <svg width="600" height="200" viewBox="0 0 600 220" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" overflow="visible">
      {/* Left Side: Mutually Exclusive */}
      <rect x="20" y="40" width="260" height="170" stroke="#334155" strokeWidth="2" fill="#0f172a" rx="4" />
      <text x="35" y="65" fill="#94a3b8" fontSize="16" fontFamily="serif" fontStyle="italic">E</text>
      
      <circle cx="100" cy="125" r="55" stroke="#10b981" strokeWidth="2" fill="#10b981" fillOpacity="0.05" className="hover:fill-opacity-10 transition-all duration-200" />
      <foreignObject x="85" y="110" width="30" height="30">
        <MathText content="A" className="text-emerald-400 text-center font-serif text-base" />
      </foreignObject>
      
      <circle cx="200" cy="125" r="55" stroke="#38bdf8" strokeWidth="2" fill="#38bdf8" fillOpacity="0.05" className="hover:fill-opacity-10 transition-all duration-200" />
      <foreignObject x="185" y="110" width="30" height="30">
        <MathText content="B" className="text-sky-400 text-center font-serif text-base" />
      </foreignObject>

      {/* Right Side: Intersecting */}
      <rect x="320" y="40" width="260" height="170" stroke="#334155" strokeWidth="2" fill="#0f172a" rx="4" />
      <text x="335" y="65" fill="#94a3b8" fontSize="16" fontFamily="serif" fontStyle="italic">E</text>
      
      <circle cx="410" cy="125" r="55" stroke="#10b981" strokeWidth="2" fill="#10b981" fillOpacity="0.05" />
      <circle cx="470" cy="125" r="55" stroke="#38bdf8" strokeWidth="2" fill="#38bdf8" fillOpacity="0.05" />
      
      {/* Shaded Intersection */}
      <path d="M440,81.3 A55,55 0 0,0 440,168.7 A55,55 0 0,0 440,81.3" fill="#f43f5e" fillOpacity="0.25" className="hover:fill-opacity-40 transition-all duration-100 cursor-help" />
      
      <foreignObject x="370" y="110" width="30" height="30">
        <MathText content="A" className="text-emerald-400 text-center font-serif text-base" />
      </foreignObject>
      <foreignObject x="500" y="110" width="30" height="30">
        <MathText content="B" className="text-sky-400 text-center font-serif text-base" />
      </foreignObject>
    </svg>
  </DiagramPanel>
);
export const TwoWayTableSVG: React.FC = () => (
  <DiagramPanel
    title="Fig 2. Two-Way Probability Table"
    analysis={
      <>
        <p className="text-sm text-slate-400 text-center italic mb-4 max-w-md mx-auto">
          Margin totals give single-event probabilities. Interior cells give intersection (AND) probabilities.
        </p>
        <div className="p-3 bg-rose-950/30 border border-rose-900/40 rounded text-sm text-rose-300 text-center">
          <strong className="block text-rose-400 not-italic uppercase text-[10px] mb-1">CCEA Exam Pitfall:</strong> Interior cross-cells ensure you do not use wrong row/column totals as conditional numerators.
        </div>
      </>
    }
  >
    <div className="w-full overflow-x-auto">
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
  </DiagramPanel>
);

// Banked for later Bayes / total probability section. Do not render in current probability lesson.
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
    <svg width="600" height="180" viewBox="30 20 540 160" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" overflow="visible">
      {/* Sample Universe Block */}
      <rect x="40" y="30" width="520" height="120" stroke="#475569" strokeWidth="2" fill="#0f172a" rx="4"/>
      
      {/* Partitions */}
      <line x1="220" y1="30" x2="220" y2="150" stroke="#334155" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="400" y1="30" x2="400" y2="150" stroke="#334155" strokeWidth="1" strokeDasharray="4 4" />
      
      {/* Overlapping Target Event B */}
      <ellipse cx="300" cy="90" rx="180" ry="50" stroke="#f59e0b" strokeWidth="2" fill="#f59e0b" fillOpacity="0.08" />
      
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
