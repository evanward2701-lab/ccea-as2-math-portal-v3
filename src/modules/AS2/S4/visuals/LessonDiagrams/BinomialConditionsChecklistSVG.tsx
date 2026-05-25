import React from 'react';
import { MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

export const BinomialConditionsChecklistSVG: React.FC = () => (
  <DiagramPanel
    title="Fig 4. Model Validation Requirements"
    analysis={
      <div className="p-4 bg-zinc-950/30 border border-zinc-900/40 rounded-lg text-sm text-zinc-300 text-center">
        <strong className="block text-zinc-400 not-italic uppercase text-2.5 mb-1">Modelling Notation:</strong>
        If all four conditions are met, the scenario can be modelled by a Binomial Distribution, written as <MathText content="X \\sim B(n, p)" className="inline [&_p]:inline [&_p]:m-0" />.
      </div>
    }
  >
    <div className="w-full space-y-3">
      {[
        { id: 1, title: "Fixed Number of Trials (n)", desc: "The experiment must run for a strict, predefined finite series of trials." },
        { id: 2, title: "Binary Outcome Matrix", desc: "Every trial yields exactly two clear states: defined strictly as Success or Failure." },
        { id: 3, title: "Constant Probability (p)", desc: "The underlying chance of success must remain completely uniform across all steps." },
        { id: 4, title: "Mutual Independence", desc: "The outcome of any isolated trial cannot modify or influence the probability vector of another." }
      ].map((cond) => (
        <div key={cond.id} className="flex items-start gap-4 p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg hover:border-emerald-500/50 transition-all group shadow-sm">
          <div className="w-6 h-6 shrink-0 rounded border border-emerald-500/30 bg-emerald-950/40 flex items-center justify-center text-emerald-400 font-mono text-xs font-bold shadow-inner group-hover:bg-emerald-500 group-hover:text-zinc-950 transition-colors">
            {cond.id}
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-mono uppercase tracking-wide text-emerald-400 font-bold mb-1">
              {cond.title}
            </h4>
            <p className="text-zinc-400 text-sm leading-relaxed">
              {cond.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  </DiagramPanel>
);
