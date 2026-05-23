import React from 'react';
import { MathText } from '../../../MathText';
import { DiagramPanel } from '../../../DiagramPanel';

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
