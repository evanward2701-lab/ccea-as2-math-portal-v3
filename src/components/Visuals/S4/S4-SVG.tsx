import React, { useMemo, useState } from 'react';
import { MathText } from '../../MathText';
import { DiagramPanel } from '../../DiagramPanel';
import { cn } from '@/lib/utils';

// ==========================================
// Fig 2. Cumulative Binomial Inequality Matrix
// ==========================================
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
            <td className="p-4 bg-emerald-950/10 font-bold"><MathText content="1 - P(X \leq 4)" /></td>
          </tr>
          <tr className="hover:bg-slate-800/30 transition-colors">
            <td className="p-4 border-r border-slate-800/50 text-left pl-6 font-semibold text-slate-300">"Fewer than 4"</td>
            <td className="p-4 border-r border-slate-800/50"><MathText content="P(X < 4)" /></td>
            <td className="p-4 bg-emerald-950/10 font-bold"><MathText content="P(X \leq 4)" /></td>
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

// Banked for later Normal Distribution section. Do not render in current binomial section.
// ==========================================
// Fig 3. Standard Normal Distribution Gaussian Curve
// ==========================================
export const NormalDistributionSVG: React.FC = () => (
  <DiagramPanel
    title="Fig 3. Normal Distribution"
    analysis={
      <div className="space-y-3">
        <div className="flex items-start gap-3 p-3 bg-slate-900/50 border border-slate-800 rounded-lg">
          <p className="text-sm text-slate-300 leading-relaxed">The Normal Distribution is a continuous, symmetrical bell-shaped curve defined by its mean <MathText content="\mu" className="inline [&_p]:inline [&_p]:m-0" /> and standard deviation <MathText content="\sigma" className="inline [&_p]:inline [&_p]:m-0" />.
          </p>
        </div>
        <div className="p-4 bg-slate-900/40 border border-slate-800/60 rounded-lg text-center">
          <span className="text-sky-400 font-bold uppercase tracking-wider block mb-2 text-[10px]">Standardisation Formula</span>
          <div className="font-mono text-emerald-400 text-lg"><MathText content="Z = \frac{X - \mu}{\sigma}" /></div>
        </div>
        <div className="p-3 bg-rose-950/30 border border-rose-900/40 rounded-lg text-sm text-rose-300">
          <strong className="font-bold text-rose-400">CCEA Exam Pitfall:</strong> The formula uses standard deviation (<MathText content="\sigma" className="inline [&_p]:inline [&_p]:m-0" />), but exam questions often provide the variance (<MathText content="\sigma^2" className="inline [&_p]:inline [&_p]:m-0" />). You must square root it first!
        </div>
      </div>
    }
  >
    <svg width="500" height="260" viewBox="20 20 460 240" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" overflow="visible" className="max-w-lg">
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
  </DiagramPanel>
);

// Banked for later Binomial Conditions / Model Validation section. Do not render in current binomial tree/inequalities section.
// ==========================================
// Fig 4. Validation Matrix
// ==========================================
export const BinomialConditionsChecklistSVG: React.FC = () => (
  <DiagramPanel
    title="Fig 4. Model Validation Requirements"
    analysis={
      <div className="p-4 bg-sky-950/30 border border-sky-900/40 rounded-lg text-sm text-sky-300 text-center">
        <strong className="block text-sky-400 not-italic uppercase text-[10px] mb-1">Modelling Notation:</strong>
        If all four conditions are met, the scenario can be modelled by a Binomial Distribution, written as <MathText content="X \sim B(n, p)" className="inline [&_p]:inline [&_p]:m-0" />.
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
  </DiagramPanel>
);


const factorial = (n: number): number => (n <= 1 ? 1 : n * factorial(n - 1));
const choose = (n: number, k: number): number => (k < 0 || k > n) ? 0 : factorial(n) / (factorial(k) * factorial(n - k));
const binomialProb = (n: number, k: number, p: number): number => choose(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k);

export const S4BinomialMorphEngine: React.FC = () => {
  const [n, setN] = useState(10);
  const [p, setP] = useState(0.5);

  const probabilities = useMemo(() => {
    return Array.from({ length: n + 1 }, (_, k) => binomialProb(n, k, p));
  }, [n, p]);

  const svgWidth = 620;
  const svgHeight = 360;
  const padding = { top: 20, right: 20, bottom: 50, left: 50 };
  const graphWidth = svgWidth - padding.left - padding.right;
  const graphHeight = svgHeight - padding.top - padding.bottom;

  const maxProb = Math.max(...probabilities, 0.1);
  const barWidth = graphWidth / (n + 1);

  const isSymmetric = p >= 0.45 && p <= 0.55;

  return (
    <DiagramPanel
      title="Fig. Binomial Distribution Engine"
      analysis={
        <div className="space-y-4">
          <p className="text-sm text-slate-400 italic">
            Adjust the number of trials (n) and the probability of success (p) to see how the shape of the binomial distribution changes.
          </p>
          <div className="p-3 bg-slate-900/50 border border-slate-800 rounded-lg">
            <h4 className="font-bold text-sky-400 mb-2 text-sm uppercase tracking-wider">Binomial Formula</h4>
            <div className="text-center bg-slate-950 p-2 rounded border border-slate-800/60">
              <MathText content="P(X=x) = \binom{n}{x} p^x (1-p)^{n-x}" />
            </div>
          </div>
          <div className="p-3 bg-rose-950/30 border border-rose-900/40 rounded-lg text-sm text-rose-300">
            <strong className="font-bold text-rose-400">CCEA Exam Pitfall:</strong> Do not use the binomial model unless all four conditions are met: fixed trials, two outcomes, constant probability, and independent trials.
          </div>
        </div>
      }
    >
      <div className="w-full flex flex-col items-center">
        <div className="w-full max-w-lg grid grid-cols-1 gap-4 mb-6 rounded-lg border border-slate-800 bg-slate-900/50 p-3">
          <div className="flex items-center gap-3">
            <label className="text-sm font-medium text-slate-300 w-24">Trials (n)</label>
            <input type="range" min="3" max="20" value={n} onChange={(e) => setN(Number(e.target.value))} className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer" />
            <span className="text-sm font-mono text-sky-400 w-12 text-right">{n}</span>
          </div>
          <div className="flex items-center gap-3">
            <label className="text-sm font-medium text-slate-300 w-24">Prob (p)</label>
            <input type="range" min="0.1" max="0.9" step="0.05" value={p} onChange={(e) => setP(Number(e.target.value))} className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer" />
            <span className="text-sm font-mono text-sky-400 w-12 text-right">{p.toFixed(2)}</span>
          </div>
        </div>

        <div className="relative w-full">
          <div className="absolute top-2 left-2 px-3 py-1 text-sm font-bold rounded-full border bg-slate-900 border-slate-700 text-sky-300">
            <MathText content={`X \\sim B(${n}, ${p.toFixed(2)})`} />
          </div>
          <div className={cn(
            "absolute top-2 right-2 px-3 py-1 text-xs font-bold rounded-full border",
            isSymmetric ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300" : "bg-amber-500/10 border-amber-500/30 text-amber-300"
          )}>
            {isSymmetric ? 'Approx. Symmetric' : 'Skewed'}
          </div>

          <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-auto max-w-3xl" overflow="visible" shapeRendering="geometricPrecision">
            {/* Axes */}
            <line x1={padding.left} y1={svgHeight - padding.bottom} x2={svgWidth - padding.right} y2={svgHeight - padding.bottom} stroke="#475569" strokeWidth="2" />
            <line x1={padding.left} y1={padding.top} x2={padding.left} y2={svgHeight - padding.bottom} stroke="#475569" strokeWidth="2" />

            {/* Y-axis Label */}
            <foreignObject x={0} y={svgHeight / 2 - 30} width="20" height="60">
              <div className="text-center text-xs text-slate-400" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                <MathText content="P(X=x)" />
              </div>
            </foreignObject>

            {/* Bars */}
            {probabilities.map((prob, i) => {
              const barHeight = (prob / maxProb) * graphHeight;
              const x = padding.left + i * barWidth;
              const y = svgHeight - padding.bottom - barHeight;

              return (
                <g key={i}>
                  <rect
                    x={x}
                    y={y}
                    width={barWidth - 2}
                    height={barHeight}
                    className={cn(
                      "transition-all duration-300",
                      isSymmetric ? "fill-emerald-500/20 stroke-emerald-400" : "fill-amber-500/20 stroke-amber-400"
                    )}
                    strokeWidth="1"
                  />
                  {n <= 15 && (
                    <text x={x + barWidth / 2 - 1} y={svgHeight - padding.bottom + 15} textAnchor="middle" fill="#94a3b8" fontSize="10">
                      {i}
                    </text>
                  )}
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </DiagramPanel>
  );
};


type Inequality = 'gte' | 'gt' | 'lte' | 'lt';

export const S4ContinuityCorrectionLens: React.FC = () => {
  const [inequality, setInequality] = useState<Inequality>('gte');

  const svgWidth = 620;
  const svgHeight = 340;
  const baseY = 280;
  const barWidth = 40;
  const scaleY = 15;

  const data = [
    { x: 3, f: 2 }, { x: 4, f: 4 }, { x: 5, f: 7 }, { x: 6, f: 9 },
    { x: 7, f: 7 }, { x: 8, f: 4 }, { x: 9, f: 2 },
  ];

  const getCorrection = () => {
    switch (inequality) {
      case 'gte': return { boundary: 5.5, text: 'P(X \\ge 6) \\rightarrow P(Y > 5.5)' };
      case 'gt': return { boundary: 6.5, text: 'P(X > 6) \\rightarrow P(Y > 6.5)' };
      case 'lte': return { boundary: 6.5, text: 'P(X \\le 6) \\rightarrow P(Y < 6.5)' };
      case 'lt': return { boundary: 5.5, text: 'P(X < 6) \\rightarrow P(Y < 5.5)' };
    }
  };

  const correction = getCorrection();
  const boundaryX = 60 + correction.boundary * barWidth;

  return (
    <DiagramPanel
      title="Fig. Continuity Correction Lens"
      analysis={
        <div className="space-y-4">
          <p className="text-sm text-slate-400 italic">
            When approximating a discrete binomial distribution with a continuous normal distribution, a continuity correction is needed to account for the area of the bars.
          </p>
          <div className="p-3 bg-slate-900/50 border border-slate-800 rounded-lg">
            <h4 className="font-bold text-sky-400 mb-2 text-sm uppercase tracking-wider">Correction Rule</h4>
            <p className="text-sm text-slate-300 leading-relaxed">To include a bar, the boundary moves 0.5 to include it. To exclude a bar, the boundary moves 0.5 to exclude it.</p>
          </div>
          <div className="p-3 bg-rose-950/30 border border-rose-900/40 rounded-lg text-sm text-rose-300">
            <strong className="font-bold text-rose-400">CCEA Exam Pitfall:</strong> Draw the bar first. The correction moves to the edge of the bar, not randomly left or right. For <MathText content="P(X \ge 6)" className="inline [&_p]:inline"/>, you want to include the whole bar for '6', so the continuous area must start at 5.5.
          </div>
        </div>
      }
    >
      <div className="w-full flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-2 mb-8 p-1 bg-slate-900 border border-slate-800 rounded-lg">
          {(['gte', 'gt', 'lte', 'lt'] as Inequality[]).map(op => (
            <button key={op} onClick={() => setInequality(op)} className={cn("px-4 py-1.5 text-xs font-bold rounded-md transition-colors", inequality === op ? 'bg-sky-500 text-slate-950' : 'bg-transparent text-slate-400 hover:bg-slate-800')}>
              <MathText content={`P(X ${op === 'gte' ? '\\ge' : op === 'gt' ? '>' : op === 'lte' ? '\\le' : '<'} 6)`} />
            </button>
          ))}
        </div>

        <div className="p-3 mb-4 bg-emerald-950/30 border border-emerald-800 rounded-lg text-emerald-300 font-mono text-sm">
          {correction.text}
        </div>

        <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-auto max-w-3xl" overflow="visible" shapeRendering="geometricPrecision">
          {/* Axes */}
          <line x1="40" y1={baseY} x2={svgWidth - 40} y2={baseY} stroke="#475569" strokeWidth="2" />

          {/* Bars */}
          {data.map(d => (
            <rect
              key={d.x}
              x={60 + (d.x - 0.5) * barWidth}
              y={baseY - d.f * scaleY}
              width={barWidth}
              height={d.f * scaleY}
              fill="#f59e0b"
              fillOpacity="0.1"
              stroke="#f59e0b"
              strokeWidth="1"
            />
          ))}

          {/* Normal Curve */}
          <path d="M 100 280 C 180 100, 440 100, 520 280" fill="none" stroke="#38bdf8" strokeWidth="2" opacity="0.5" />

          {/* Shaded Area */}
          <defs>
            <clipPath id="clip-path-cc">
              <path d={`M ${inequality.startsWith('gt') ? boundaryX : 40} ${baseY} L ${inequality.startsWith('gt') ? boundaryX : 40} 80 C ${inequality.startsWith('gt') ? 350 : 180} 80, ${inequality.startsWith('gt') ? 440 : 300} 80, ${inequality.startsWith('lt') ? boundaryX : 580} 80 L ${inequality.startsWith('lt') ? boundaryX : 580} ${baseY} Z`} />
            </clipPath>
          </defs>
          <path d="M 100 280 C 180 100, 440 100, 520 280" fill="#10b981" fillOpacity="0.25" clipPath="url(#clip-path-cc)" />

          {/* Correction Boundary Line */}
          <line
            x1={boundaryX}
            y1={80}
            x2={boundaryX}
            y2={baseY + 10}
            stroke="#f43f5e"
            strokeWidth="2.5"
            strokeDasharray="4 4"
          />
          <text x={boundaryX} y={baseY + 25} textAnchor="middle" fill="#f43f5e" fontSize="12" fontWeight="bold">
            {correction.boundary}
          </text>

          {/* X-axis labels */}
          {data.map(d => (
            <text key={`label-${d.x}`} x={60 + d.x * barWidth} y={baseY + 15} textAnchor="middle" fill="#94a3b8" fontSize="10">
              {d.x}
            </text>
          ))}
        </svg>
      </div>
    </DiagramPanel>
  );
};


type InequalityPhrase = 'at most' | 'fewer than' | 'at least' | 'more than';

export const S4InequalityTranslator: React.FC = () => {
  const [phrase, setPhrase] = useState<InequalityPhrase>('at most');
  const [r, setR] = useState(5);
  const n = 10;

  const getCondition = (x: number) => {
    switch (phrase) {
      case 'at most': return x <= r;
      case 'fewer than': return x < r;
      case 'at least': return x >= r;
      case 'more than': return x > r;
    }
  };

  const getMath = () => {
    switch (phrase) {
      case 'at most': return `P(X \\le ${r})`;
      case 'fewer than': return `P(X < ${r}) \\rightarrow P(X \\le ${r - 1})`;
      case 'at least': return `P(X \\ge ${r}) \\rightarrow 1 - P(X \\le ${r - 1})`;
      case 'more than': return `P(X > ${r}) \\rightarrow 1 - P(X \\le ${r})`;
    }
  };

  return (
    <DiagramPanel
      title="Fig. Binomial Inequality Translator"
      analysis={
        <div className="space-y-4">
          <p className="text-sm text-slate-400 italic">
            Translating English phrases into mathematical inequalities is a critical skill for binomial problems. This tool visualizes which integer values are included for each phrase.
          </p>
          <div className="p-3 bg-slate-900/50 border border-slate-800 rounded-lg">
            <h4 className="font-bold text-emerald-400 mb-2 text-sm uppercase tracking-wider">Calculator-Ready Formula</h4>
            <div className="text-center bg-slate-950 p-2 rounded border border-slate-800/60">
              <MathText content={getMath()} />
            </div>
          </div>
          <div className="p-3 bg-rose-950/30 border border-rose-900/40 rounded-lg text-sm text-rose-300">
            <strong className="font-bold text-rose-400">CCEA Exam Pitfall:</strong> "Fewer than 5" does not include 5. It means <MathText content="X \le 4" className="inline [&_p]:inline"/>. "At least 5" does include 5. It means <MathText content="X \ge 5" className="inline [&_p]:inline"/>, which is calculated as <MathText content="1 - P(X \le 4)" className="inline [&_p]:inline"/>.
          </div>
        </div>
      }
    >
      <div className="w-full flex flex-col items-center">
        <div className="w-full max-w-lg grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 rounded-lg border border-slate-800 bg-slate-900/50 p-3">
          <div>
            <label className="text-sm font-medium text-slate-300 block mb-2">Phrase</label>
            <select
              value={phrase}
              onChange={(e) => setPhrase(e.target.value as InequalityPhrase)}
              className="w-full bg-slate-800 border border-slate-700 rounded-md p-2 text-sm"
            >
              <option value="at most">At most</option>
              <option value="fewer than">Fewer than</option>
              <option value="at least">At least</option>
              <option value="more than">More than</option>
            </select>
          </div>
          <div className="flex items-center gap-3">
            <label className="text-sm font-medium text-slate-300"><MathText content="r" /></label>
            <input type="range" min="1" max={n} value={r} onChange={(e) => setR(Number(e.target.value))} className="w-full" />
            <span className="text-sm font-mono text-sky-400 w-8 text-right">{r}</span>
          </div>
        </div>

        <div className="w-full max-w-2xl">
          <svg viewBox={`0 0 550 80`} className="w-full h-auto" overflow="visible">
            {/* Number Line */}
            <line x1="20" y1="40" x2="530" y2="40" stroke="#475569" strokeWidth="2" />

            {/* Integer Points */}
            {Array.from({ length: n + 1 }).map((_, i) => {
              const isIncluded = getCondition(i);
              const isBoundary = i === r;
              const x = 25 + i * 50;

              return (
                <g key={i}>
                  <circle
                    cx={x}
                    cy="40"
                    r={isBoundary ? 10 : 8}
                    className={cn(
                      "transition-all",
                      isIncluded ? "fill-emerald-500" : "fill-slate-700",
                      isBoundary && "stroke-rose-400 stroke-2"
                    )}
                  />
                  <text x={x} y="45" textAnchor="middle" className={cn("font-mono text-xs", isIncluded ? "fill-slate-950" : "fill-slate-400")}>
                    {i}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
        <p className="text-center text-sm font-bold text-sky-300 mt-4">
          "{phrase} {r}"
        </p>
      </div>
    </DiagramPanel>
  );
};


const pdf = (z: number) => Math.exp(-(z * z) / 2) / Math.sqrt(2 * Math.PI);

export const S4NormalStandardizer: React.FC = () => {
  const [mu, setMu] = useState(100);
  const [sigma, setSigma] = useState(15);
  const [xVal, setXVal] = useState(115);

  const zScore = (xVal - mu) / sigma;

  const svgWidth = 620;
  const svgHeight = 360;
  const padding = { top: 40, right: 40, bottom: 80, left: 40 };
  const graphWidth = svgWidth - padding.left - padding.right;
  const graphHeight = svgHeight - padding.top - padding.bottom;

  const zMin = -4, zMax = 4;
  const xScaleZ = (z: number) => padding.left + ((z - zMin) / (zMax - zMin)) * graphWidth;
  const yScale = (p: number) => padding.top + graphHeight - p * graphHeight / pdf(0);

  const generateBellCurve = () => {
    let path = "";
    const steps = 100;
    for (let i = 0; i <= steps; i++) {
      const z = zMin + (zMax - zMin) * i / steps;
      const px = xScaleZ(z);
      const py = yScale(pdf(z));
      path += (i === 0 ? "M" : "L") + ` ${px} ${py}`;
    }
    return path;
  };

  const generateShadedArea = (targetZ: number) => {
    let path = `M ${xScaleZ(zMin)} ${yScale(0)}`;
    const steps = 50;
    for (let i = 0; i <= steps; i++) {
      const z = zMin + (targetZ - zMin) * i / steps;
      path += ` L ${xScaleZ(z)} ${yScale(pdf(z))}`;
    }
    path += ` L ${xScaleZ(targetZ)} ${yScale(0)} Z`;
    return path;
  };

  return (
    <DiagramPanel
      title="Fig. Normal Distribution Standardizer"
      analysis={
        <div className="space-y-4">
          <p className="text-sm text-slate-400 italic">
            Standardizing transforms any normal distribution <MathText content="X \sim N(\mu, \sigma^2)" className="inline [&_p]:inline"/> into the standard normal distribution <MathText content="Z \sim N(0, 1)" className="inline [&_p]:inline"/>, allowing us to use standard tables or calculator functions.
          </p>
          <div className="p-3 bg-slate-900/50 border border-slate-800 rounded-lg">
            <h4 className="font-bold text-sky-400 mb-2 text-sm uppercase tracking-wider">Standardization Formula</h4>
            <div className="text-center bg-slate-950 p-2 rounded border border-slate-800/60">
              <MathText content={`z = \\frac{x - \\mu}{\\sigma} = \\frac{${xVal} - ${mu}}{${sigma}} = ${zScore.toFixed(2)}`} />
            </div>
          </div>
          <div className="p-3 bg-rose-950/30 border border-rose-900/40 rounded-lg text-sm text-rose-300">
            <strong className="font-bold text-rose-400">CCEA Exam Pitfall:</strong> If a question gives the variance (<MathText content="\sigma^2" className="inline [&_p]:inline"/>), you must take the square root to find the standard deviation (<MathText content="\sigma" className="inline [&_p]:inline"/>) before using the standardization formula.
          </div>
        </div>
      }
    >
      <div className="w-full flex flex-col items-center">
        <div className="w-full max-w-xl grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 rounded-lg border border-slate-800 bg-slate-900/50 p-3">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-slate-300"><MathText content="\mu" /></label>
            <input type="range" min="80" max="120" value={mu} onChange={(e) => setMu(Number(e.target.value))} className="w-full" />
            <span className="text-sm font-mono text-sky-400 w-8 text-right">{mu}</span>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-slate-300"><MathText content="\sigma" /></label>
            <input type="range" min="5" max="25" value={sigma} onChange={(e) => setSigma(Number(e.target.value))} className="w-full" />
            <span className="text-sm font-mono text-sky-400 w-8 text-right">{sigma}</span>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-slate-300"><MathText content="x" /></label>
            <input type="range" min={mu - 3 * sigma} max={mu + 3 * sigma} value={xVal} onChange={(e) => setXVal(Number(e.target.value))} className="w-full" />
            <span className="text-sm font-mono text-amber-400 w-8 text-right">{xVal}</span>
          </div>
        </div>

        <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-auto max-w-3xl" overflow="visible" shapeRendering="geometricPrecision">
          {/* Shaded Area */}
          <path d={generateShadedArea(zScore)} fill="#10b981" fillOpacity="0.2" />

          {/* Bell Curve */}
          <path d={generateBellCurve()} fill="none" stroke="#38bdf8" strokeWidth="2" />

          {/* X-axis */}
          <line x1={padding.left} y1={yScale(0)} x2={svgWidth - padding.right} y2={yScale(0)} stroke="#475569" strokeWidth="2" />
          <text x={svgWidth - padding.right + 10} y={yScale(0) + 4} fill="#94a3b8" fontSize="12">X</text>

          {/* Z-axis */}
          <line x1={padding.left} y1={yScale(0) + 20} x2={svgWidth - padding.right} y2={yScale(0) + 20} stroke="#64748b" strokeWidth="1" />
          <text x={svgWidth - padding.right + 10} y={yScale(0) + 24} fill="#94a3b8" fontSize="12">Z</text>

          {/* Ticks and Labels */}
          {[-3, -2, -1, 0, 1, 2, 3].map(z => (
            <g key={z}>
              {/* Z-axis ticks */}
              <line x1={xScaleZ(z)} y1={yScale(0) + 20} x2={xScaleZ(z)} y2={yScale(0) + 25} stroke="#64748b" strokeWidth="1" />
              <text x={xScaleZ(z)} y={yScale(0) + 40} textAnchor="middle" fill="#94a3b8" fontSize="10">{z}</text>
              {/* X-axis ticks */}
              <line x1={xScaleZ(z)} y1={yScale(0)} x2={xScaleZ(z)} y2={yScale(0) - 5} stroke="#64748b" strokeWidth="1" />
              <text x={xScaleZ(z)} y={yScale(0) - 10} textAnchor="middle" fill="#94a3b8" fontSize="10">{Math.round(mu + z * sigma)}</text>
            </g>
          ))}

          {/* Mean Line */}
          <line x1={xScaleZ(0)} y1={yScale(pdf(0))} x2={xScaleZ(0)} y2={yScale(0)} stroke="#10b981" strokeDasharray="3 3" strokeWidth="1.5" />

          {/* Target Value Line */}
          <line
            x1={xScaleZ(zScore)}
            y1={yScale(pdf(zScore))}
            x2={xScaleZ(zScore)}
            y2={yScale(0) + 20}
            stroke="#f59e0b"
            strokeWidth="2"
          />
          <circle cx={xScaleZ(zScore)} cy={yScale(pdf(zScore))} r="4" fill="#f59e0b" />
        </svg>
      </div>
    </DiagramPanel>
  );
};
