import React, { useState, useMemo } from 'react';
import { DiagramPanel } from '../../DiagramPanel';
import { cn } from '@/lib/utils';

type DataKind = 'qualitative' | 'quantitative-discrete' | 'quantitative-continuous';
type Decision = 'numerical' | 'categorical' | 'counted' | 'measured';

interface Example {
  label: string;
  path: Decision[];
  answer: DataKind;
  explanation: string;
}

const examples: Example[] = [
  {
    label: "Time taken to complete a race",
    path: ['numerical', 'measured'],
    answer: 'quantitative-continuous',
    explanation: "Time is measured on a continuous scale, so it's quantitative continuous."
  },
  {
    label: "Number of siblings",
    path: ['numerical', 'counted'],
    answer: 'quantitative-discrete',
    explanation: "You count siblings in whole numbers, so it's quantitative discrete."
  },
  {
    label: "Favourite subject",
    path: ['categorical'],
    answer: 'qualitative',
    explanation: "This describes a category, not a number, so it's qualitative."
  },
  {
    label: "Shoe size",
    path: ['numerical', 'counted'],
    answer: 'quantitative-discrete',
    explanation: "Shoe sizes are distinct, counted values (e.g., 7, 7.5, 8), not a continuous scale. It's discrete."
  },
  {
    label: "Height of a student",
    path: ['numerical', 'measured'],
    answer: 'quantitative-continuous',
    explanation: "Height is measured on a continuous scale, so it's quantitative continuous."
  }
];

export const S1TaxonomyDecisionTree: React.FC = () => {
  const [exampleIndex, setExampleIndex] = useState(0);
  const [step, setStep] = useState(0);
  const [userPath, setUserPath] = useState<Decision[]>([]);
  const [feedback, setFeedback] = useState<{ message: string } | null>(null);

  const currentExample = useMemo(() => examples[exampleIndex], [exampleIndex]);

  const handleDecision = (decision: Decision) => {
    if (step >= currentExample.path.length) return;

    if (decision === currentExample.path[step]) {
      setUserPath(prev => [...prev, decision]);
      setStep(prev => prev + 1);
      setFeedback(null);
    } else {
      setFeedback({ message: 'Not quite, try the other path!' });
      setTimeout(() => setFeedback(null), 1500);
    }
  };

  const handleNext = () => {
    setExampleIndex(prev => (prev + 1) % examples.length);
    setStep(0);
    setUserPath([]);
    setFeedback(null);
  };

  const isComplete = step >= currentExample.path.length;

  return (
    <DiagramPanel
      title="Fig. Interactive Data Taxonomy"
      analysis={
        <div className="space-y-4">
          <p className="text-sm text-slate-400 italic">
            Classify the variable by following the decision tree. This interactive tool helps reinforce the difference between data types.
          </p>
          <div className="p-3 bg-rose-950/30 border border-rose-900/40 rounded-lg text-sm text-rose-300">
            <strong className="font-bold text-rose-400">CCEA Exam Pitfall:</strong> Measured numerical data (like age or weight) is <strong>continuous</strong> even if it is rounded to a whole number in a table. The underlying variable can take any value in a range.
          </div>
        </div>
      }
    >
      <div className="w-full max-w-2xl flex flex-col items-center">
        <div className="mb-6 text-center">
          <p className="text-sm text-slate-400 uppercase tracking-wider">Variable to Classify:</p>
          <p className="text-lg font-bold text-sky-300 mt-1">"{currentExample.label}"</p>
        </div>

        <div className="space-y-4 w-full">
          <div className={cn("p-4 rounded-lg border bg-slate-900/50", step > 0 ? "border-slate-800" : "border-sky-500/50")}>
            <p className="text-sm font-bold text-slate-300 mb-3">1. Is the data numerical or descriptive?</p>
            <div className="grid grid-cols-2 gap-3">
              <button onClick={() => handleDecision('numerical')} disabled={step > 0} className={cn("p-3 text-sm font-semibold rounded-md transition-all", step === 0 && "bg-slate-800 hover:bg-slate-700 text-slate-200", step > 0 && userPath[0] === 'numerical' && "bg-emerald-950/50 border border-emerald-700 text-emerald-300", step > 0 && userPath[0] !== 'numerical' && "bg-slate-800/50 text-slate-500 opacity-50")}>Numerical</button>
              <button onClick={() => handleDecision('categorical')} disabled={step > 0} className={cn("p-3 text-sm font-semibold rounded-md transition-all", step === 0 && "bg-slate-800 hover:bg-slate-700 text-slate-200", step > 0 && userPath[0] === 'categorical' && "bg-emerald-950/50 border border-emerald-700 text-emerald-300", step > 0 && userPath[0] !== 'categorical' && "bg-slate-800/50 text-slate-500 opacity-50")}>Categorical</button>
            </div>
          </div>

          {step > 0 && currentExample.path[0] === 'numerical' && (
            <div className={cn("p-4 rounded-lg border bg-slate-900/50", step > 1 ? "border-slate-800" : "border-sky-500/50")}>
              <p className="text-sm font-bold text-slate-300 mb-3">2. Is it counted or measured?</p>
              <div className="grid grid-cols-2 gap-3">
                <button onClick={() => handleDecision('counted')} disabled={step > 1} className={cn("p-3 text-sm font-semibold rounded-md transition-all", step === 1 && "bg-slate-800 hover:bg-slate-700 text-slate-200", step > 1 && userPath[1] === 'counted' && "bg-emerald-950/50 border border-emerald-700 text-emerald-300", step > 1 && userPath[1] !== 'counted' && "bg-slate-800/50 text-slate-500 opacity-50")}>Counted</button>
                <button onClick={() => handleDecision('measured')} disabled={step > 1} className={cn("p-3 text-sm font-semibold rounded-md transition-all", step === 1 && "bg-slate-800 hover:bg-slate-700 text-slate-200", step > 1 && userPath[1] === 'measured' && "bg-emerald-950/50 border border-emerald-700 text-emerald-300", step > 1 && userPath[1] !== 'measured' && "bg-slate-800/50 text-slate-500 opacity-50")}>Measured</button>
              </div>
            </div>
          )}

          <div className="h-12 flex items-center justify-center">
            {feedback && (
              <p className="text-sm font-bold text-rose-400 animate-pulse">{feedback.message}</p>
            )}
            {isComplete && (
              <div className="text-center p-4 bg-emerald-950/50 border-2 border-emerald-600 rounded-lg w-full">
                <p className="text-sm text-emerald-400">Correct Classification:</p>
                <p className="text-lg font-bold text-emerald-200 capitalize">{currentExample.answer.replace('-', ' ')}</p>
                <p className="text-xs text-slate-400 mt-2 italic">{currentExample.explanation}</p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={handleNext}
            className="px-6 py-2 bg-sky-600 text-white font-bold rounded-lg hover:bg-sky-500 transition-colors"
          >
            Next Example
          </button>
        </div>
      </div>
    </DiagramPanel>
  );
};