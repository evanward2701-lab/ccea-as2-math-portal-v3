import React from 'react';
import { MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

export const InequalityPanelSVG: React.FC = () => (
  <DiagramPanel
    title="Fig 2. Binomial Inequalities"
    analysis={
      <div className="p-4 bg-rose-950/30 border border-rose-900/40 rounded-lg text-sm text-rose-300">
        <strong className="block text-rose-400 not-italic uppercase text-[10px] mb-1">CCEA Exam Pitfall:</strong>
        <p className="leading-relaxed">
          Most standard calculators only process cumulative probabilities going downwards. You MUST convert strict inequalities (<MathText content="<, >" className="inline [&_p]:inline [&_p]:m-0" />) and upwards inequalities (<MathText content="\ge" className="inline [&_p]:inline [&_p]:m-0" />) into a format utilizing <MathText content="P(X \le x)" className="inline [&_p]:inline [&_p]:m-0" />.
        </p>
      </div>
    }
  >
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse border border-slate-800 text-sm font-sans bg-slate-900 text-center">
        <thead>
          <tr className="bg-slate-950 text-slate-400 border-b border-slate-800 uppercase font-mono tracking-wider text-[10px]">
            <th className="p-4 border-r border-slate-800 text-left pl-6">English Phrase</th>
            <th className="p-4 border-r border-slate-800">Raw Inequality</th>
            <th className="p-4 text-emerald-400">Calculator Format <MathText content="P(X \le x)" className="inline [&_p]:inline [&_p]:m-0" /></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800/50">
          <tr className="hover:bg-slate-800/30 transition-colors">
            <td className="p-4 border-r border-slate-800/50 text-left pl-6 font-semibold text-slate-300">"More than 4"</td>
            <td className="p-4 border-r border-slate-800/50"><MathText content="P(X > 4)" /></td>
            <td className="p-4 bg-emerald-950/10 font-bold"><MathText content="1 - P(X \leq 4)" /></td>
          </tr>
          <tr className="hover:bg-slate-800/30 transition-colors">
            <td className="p-4 border-r border-slate-800/50 text-left pl-6 font-semibold text-slate-300">"At least 4" / "4 or more"</td>
            <td className="p-4 border-r border-slate-800/50"><MathText content="P(X \geq 4)" /></td>
            <td className="p-4 bg-emerald-950/10 font-bold"><MathText content="1 - P(X \leq 3)" /></td>
          </tr>
          <tr className="hover:bg-slate-800/30 transition-colors">
            <td className="p-4 border-r border-slate-800/50 text-left pl-6 font-semibold text-slate-300">"Fewer than 4"</td>
            <td className="p-4 border-r border-slate-800/50"><MathText content="P(X < 4)" /></td>
            <td className="p-4 bg-emerald-950/10 font-bold"><MathText content="P(X \leq 3)" /></td>
          </tr>
          <tr className="hover:bg-slate-800/30 transition-colors">
            <td className="p-4 border-r border-slate-800/50 text-left pl-6 font-semibold text-slate-300">"At most 4" / "No more than 4"</td>
            <td className="p-4 border-r border-slate-800/50"><MathText content="P(X \leq 4)" /></td>
            <td className="p-4 bg-emerald-950/10 font-bold"><MathText content="P(X \leq 4)" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  </DiagramPanel>
);
