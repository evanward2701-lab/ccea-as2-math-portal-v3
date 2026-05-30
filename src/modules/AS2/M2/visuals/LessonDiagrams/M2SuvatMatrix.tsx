import React, { useState } from 'react';
import { MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { cn } from '@/core/utils/cn';

type SuvatVariable = 's' | 'u' | 'v' | 'a' | 't';

interface SuvatFormula {
  id: string;
  label: string;
  vars: SuvatVariable[];
  math: string;
}

const suvatFormulae: SuvatFormula[] = [
  { id: '1', label: 'Formula 1', vars: ['v', 'u', 'a', 't'], math: 'v = u + at' },
  { id: '2', label: 'Formula 2', vars: ['s', 'u', 'v', 't'], math: 's = \\frac{1}{2}(u + v)t' },
  { id: '3', label: 'Formula 3', vars: ['s', 'u', 'a', 't'], math: 's = ut + \\frac{1}{2}at^2' },
  { id: '4', label: 'Formula 4', vars: ['s', 'v', 'a', 't'], math: 's = vt - \\frac{1}{2}at^2' },
  { id: '5', label: 'Formula 5', vars: ['s', 'u', 'v', 'a'], math: 'v^2 = u^2 + 2as' },
];

export const M2SuvatMatrix: React.FC = () => {
  const [selectedKnowns, setSelectedKnowns] = useState<SuvatVariable[]>([]);

  const toggleKnown = (variable: SuvatVariable) => {
    setSelectedKnowns(prev => {
      if (prev.includes(variable)) {
        return prev.filter(v => v !== variable);
      } else {
        if (prev.length < 3) { // Limit to 3 selections for clarity
          return [...prev, variable];
        }
        return prev;
      }
    });
  };

  const isFormulaRelevant = (formula: SuvatFormula) => {
    if (selectedKnowns.length < 3) return false;

    // Check if all selected knowns are present in the formula's variables
    const allKnownsPresent = selectedKnowns.every(known => formula.vars.includes(known));

    // Check if the formula has exactly one unknown variable among the selected ones
    const unknownInFormula = formula.vars.filter(v => !selectedKnowns.includes(v));

    return allKnownsPresent && unknownInFormula.length === 1;
  };

  return (
    <DiagramPanel
      title="Fig. SUVAT Known-Unknown Matrix"
      analysis={
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground italic">
            Select the three quantities you know from the list below. The most useful SUVAT formula (containing your knowns and one unknown) will be highlighted.
          </p>
          <div className="p-3 bg-destructive/30 border border-destructive/40 rounded-lg text-sm text-destructive">
            <strong className="font-bold text-destructive">CCEA Exam Pitfall:</strong> Do not use <MathText content="v^2 = u^2 + 2as" className="inline [&_p]:inline" /> for 2D vector SUVAT problems. It is a scalar equation and only applies to 1D motion or individual vector components.
          </div>
        </div>
      }
    >
      <div className="w-full flex flex-col items-center">
        <div className="mb-8 p-4 bg-primary/5 border border-primary/20 rounded-lg">
          <h4 className="font-bold text-muted-foreground mb-3 text-sm uppercase tracking-wider text-center">Known Quantities</h4>
          <div className="grid grid-cols-5 gap-3">
            {(['s', 'u', 'v', 'a', 't'] as SuvatVariable[]).map(variable => (
              <button
                key={variable}
                onClick={() => toggleKnown(variable)}
                className={cn(
                  "p-3 rounded-lg text-lg font-bold transition-all duration-200",
                  selectedKnowns.includes(variable)
                    ? "bg-primary text-zinc-950 shadow-lg"
                    : "bg-muted/30 text-foreground hover:bg-muted/50 hover:text-white"
                )}
              >
                <MathText content={variable} className="[&_p]:m-0" />
              </button>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-3 text-center">
            Selected: {selectedKnowns.length} / 3
          </p>
        </div>

        <div className="w-full max-w-2xl space-y-3">
          {suvatFormulae.map(formula => {
            const relevant = isFormulaRelevant(formula);
            return (
              <div
                key={formula.id}
                className={cn(
                  "p-4 rounded-xl border transition-all duration-500 flex items-center justify-between",
                  relevant
                    ? "bg-primary/30 border-primary/50 shadow-[0_0_20px_rgba(16,185,129,0.1)] scale-[1.02]"
                    : "bg-primary/5 border-primary/20 opacity-50 grayscale-[0.5]"
                )}
              >
                <div className="flex flex-col">
                  <span className={cn(
                    "text-2.5 font-bold uppercase tracking-widest mb-1",
                    relevant ? "text-primary" : "text-muted-foreground"
                  )}>
                    {formula.label}
                  </span>
                  <div className={cn(
                    "text-lg sm:text-xl font-bold font-mono",
                    relevant ? "text-foreground" : "text-muted-foreground"
                  )}>
                    <MathText content={formula.math} />
                  </div>
                </div>
                <div className="flex gap-1">
                  {formula.vars.map(v => (
                    <span
                      key={v}
                      className={cn(
                        "w-6 h-6 flex items-center justify-center rounded text-2.5 font-bold",
                        selectedKnowns.includes(v)
                          ? "bg-primary/20 text-primary border border-primary/30"
                          : relevant
                            ? "bg-zinc-500/20 text-muted-foreground border border-zinc-500/30 animate-pulse" // This is the unknown one
                            : "bg-muted/30 text-zinc-600 border border-primary/10"
                      )}
                    >
                      <MathText content={v} className="[&_p]:m-0" />
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </DiagramPanel>
  );
};
