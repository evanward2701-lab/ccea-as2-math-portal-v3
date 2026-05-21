import React, { useMemo, useState } from 'react';
import { MathText } from '../../MathText';
import { DiagramPanel } from '../../DiagramPanel';
import { cn } from '@/lib/utils';

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


const data = [
  { limitL: 10, limitU: 14, freq: 5, boundL: 9.5, boundU: 14.5 },
  { limitL: 15, limitU: 19, freq: 8, boundL: 14.5, boundU: 19.5 },
  { limitL: 20, limitU: 24, freq: 4, boundL: 19.5, boundU: 24.5 },
];

export const S1HistogramBoundaryMorph: React.FC = () => {
  const [isContinuous, setIsContinuous] = useState(false);

  const width = 520;
  const height = 280;
  const baseY = 220;
  const scaleX = 18;
  const scaleY = 16;
  const offsetX = -130;

  return (
    <DiagramPanel
      title="Fig. Histogram Class Boundaries"
      analysis={
        <div className="space-y-4">
          <div className="p-3 bg-slate-900/50 border border-slate-800 rounded-lg">
            <h4 className="font-bold text-sky-400 mb-2 text-sm uppercase tracking-wider">Class Width</h4>
            <p className="text-sm text-slate-300 leading-relaxed mb-2">For continuous data, the class width is the difference between the upper and lower boundaries.</p>
            <div className="text-center bg-slate-950 p-2 rounded border border-slate-800/60">
              <MathText content="\text{Width} = \text{Upper Boundary} - \text{Lower Boundary}" />
            </div>
          </div>
          <div className="p-3 bg-rose-950/30 border border-rose-900/40 rounded-lg text-sm text-rose-300">
            <strong className="font-bold text-rose-400">CCEA Exam Pitfall:</strong> For continuous grouped data, class limits like '10-14' and '15-19' must be converted to true boundaries '9.5-14.5' and '14.5-19.5'. The class width for '10-14' is 5, not 4.
          </div>
        </div>
      }
    >
      <div className="w-full flex flex-col items-center">
        <div className="flex space-x-2 mb-8 p-1 bg-slate-900 border border-slate-800 rounded-lg">
          <button
            onClick={() => setIsContinuous(false)}
            className={`px-4 py-1.5 text-xs font-bold rounded-md transition-colors ${
              !isContinuous
                ? 'bg-amber-500 text-slate-950'
                : 'bg-transparent text-slate-400 hover:bg-slate-800'
            }`}
          >
            Class Limits
          </button>
          <button
            onClick={() => setIsContinuous(true)}
            className={`px-4 py-1.5 text-xs font-bold rounded-md transition-colors ${
              isContinuous
                ? 'bg-emerald-500 text-slate-950'
                : 'bg-transparent text-slate-400 hover:bg-slate-800'
            }`}
          >
            Class Boundaries
          </button>
        </div>

        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto max-w-2xl" overflow="visible" shapeRendering="geometricPrecision">
          {/* Axes */}
          <line x1="20" y1={baseY} x2={width - 20} y2={baseY} stroke="#475569" strokeWidth="2" />
          <line x1="20" y1={baseY} x2="20" y2="20" stroke="#475569" strokeWidth="2" />
          <text x="10" y="20" fill="#94a3b8" fontSize="12" textAnchor="middle">f</text>
          <text x={width - 10} y={baseY + 5} fill="#94a3b8" fontSize="12" textAnchor="middle">x</text>

          {/* Bars */}
          {data.map((rect, i) => {
            const currentL = isContinuous ? rect.boundL : rect.limitL;
            const currentU = isContinuous ? rect.boundU : rect.limitU;
            const barWidth = (currentU - currentL) * scaleX;
            const xPos = currentL * scaleX + offsetX;
            const barHeight = rect.freq * scaleY;

            return (
              <g key={i}>
                <rect
                  x={xPos}
                  y={baseY - barHeight}
                  width={barWidth}
                  height={barHeight}
                  className={`transition-all duration-500 ease-in-out ${isContinuous ? "fill-emerald-500/20 stroke-emerald-400" : "fill-amber-500/20 stroke-amber-400"}`}
                  strokeWidth="2"
                />
                <text x={xPos + barWidth / 2} y={baseY - barHeight - 8} textAnchor="middle" fill="#e2e8f0" fontSize="12" fontWeight="bold">
                  {rect.freq}
                </text>
              </g>
            );
          })}

          {/* Axis Ticks and Labels */}
          {[9.5, 14.5, 19.5, 24.5].map(val => {
            const x = val * scaleX + offsetX;
            return (
              <g key={val}>
                <line x1={x} y1={baseY} x2={x} y2={baseY + 5} stroke="#64748b" strokeWidth="1.5" />
                <text x={x} y={baseY + 20} textAnchor="middle" fill="#94a3b8" fontSize="12">
                  {val}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </DiagramPanel>
  );
};


const POPULATION = { A: 50, B: 30, C: 20, total: 100 };

export const S1StratifiedSamplingSimulator: React.FC = () => {
  const [sampleSize, setSampleSize] = useState(20);

  const sampleA = Math.round((POPULATION.A / POPULATION.total) * sampleSize);
  const sampleB = Math.round((POPULATION.B / POPULATION.total) * sampleSize);
  const sampleC = sampleSize - sampleA - sampleB; // Ensure total matches

  return (
    <DiagramPanel
      title="Fig. Stratified Sampling Simulator"
      analysis={
        <div className="space-y-4">
          <p className="text-sm text-slate-400 italic">
            Stratified sampling ensures subgroups (strata) are represented proportionally in the final sample. Adjust the sample size to see how the allocation changes.
          </p>
          <div className="p-3 bg-slate-900/50 border border-slate-800 rounded-lg">
            <h4 className="font-bold text-sky-400 mb-2 text-sm uppercase tracking-wider">Allocation Formula</h4>
            <div className="text-center bg-slate-950 p-2 rounded border border-slate-800/60">
              <MathText content="\text{Sample Size} = \frac{\text{Strata Size}}{\text{Total Pop.}} \times n" />
            </div>
          </div>
          <div className="p-3 bg-rose-950/30 border border-rose-900/40 rounded-lg text-sm text-rose-300">
            <strong className="font-bold text-rose-400">CCEA Exam Pitfall:</strong> After rounding, always check that your calculated stratum sample sizes add up to the exact target sample size. If not, adjust one of the rounded values.
          </div>
        </div>
      }
    >
      <div className="w-full flex flex-col items-center">
        <div className="w-full max-w-md flex flex-col gap-3 mb-8 rounded-lg border border-slate-800 bg-slate-900/50 p-3">
          <div className="flex items-center gap-4">
            <label htmlFor="sample-size-slider" className="text-sm font-medium text-slate-300 whitespace-nowrap">
              Sample Size <MathText content="n" className="inline [&_p]:inline" />
            </label>
            <input
              id="sample-size-slider"
              type="range"
              min="10"
              max="50"
              step="5"
              value={sampleSize}
              onChange={(e) => setSampleSize(Number(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
            />
            <span className="text-sm font-mono text-sky-400 w-12 text-right">{sampleSize}</span>
          </div>
        </div>

        <div className="w-full max-w-3xl space-y-6">
          <StratumRow name="A" popSize={POPULATION.A} sampleSize={sampleA} totalPop={POPULATION.total} n={sampleSize} color="sky" />
          <StratumRow name="B" popSize={POPULATION.B} sampleSize={sampleB} totalPop={POPULATION.total} n={sampleSize} color="amber" />
          <StratumRow name="C" popSize={POPULATION.C} sampleSize={sampleC} totalPop={POPULATION.total} n={sampleSize} color="purple" />
        </div>

        <div className="mt-6 p-3 bg-slate-900 border border-slate-700 rounded-lg text-sm font-mono text-emerald-400">
          Verification: {sampleA} + {sampleB} + {sampleC} = {sampleA + sampleB + sampleC}
        </div>
      </div>
    </DiagramPanel>
  );
};

interface StratumRowProps {
  name: string;
  popSize: number;
  sampleSize: number;
  totalPop: number;
  n: number;
  color: 'sky' | 'amber' | 'purple';
}

const StratumRow: React.FC<StratumRowProps> = ({ name, popSize, sampleSize, totalPop, n, color }) => {
  const colorClasses = {
    sky: { bg: 'bg-sky-500/20', border: 'border-sky-500' },
    amber: { bg: 'bg-amber-500/20', border: 'border-amber-500' },
    purple: { bg: 'bg-purple-500/20', border: 'border-purple-500' },
  };

  return (
    <div className={`p-4 rounded-lg border border-slate-800 ${colorClasses[color].bg}`}>
      <div className="flex justify-between items-center mb-3">
        <h4 className={`font-bold text-${color}-400`}>Stratum {name}</h4>
        <div className="text-xs text-slate-400">
          Population: {popSize} &rarr; Sample: <span className="font-bold text-emerald-400">{sampleSize}</span>
        </div>
      </div>
      <div className="grid grid-cols-10 gap-1.5">
        {Array.from({ length: popSize }).map((_, i) => (
          <div
            key={i}
            className={`w-full aspect-square rounded-full ${i < sampleSize ? `bg-${color}-400 ring-2 ring-offset-2 ring-offset-slate-900 ring-emerald-400` : `bg-${color}-500/50`}`}
          />
        ))}
      </div>
      <div className="text-xs text-slate-400 mt-4 text-center bg-slate-950/50 p-2 rounded border border-slate-800/60">
        <MathText content={`\\text{Sample}_${name} = \\frac{${popSize}}{${totalPop}} \\times ${n} \\approx ${sampleSize}`} />
      </div>
    </div>
  );
};


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
