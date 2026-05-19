import React from 'react';

// Diagram 2: Sampling Method Comparison Table
export const SamplingTableSVG: React.FC = () => (
  <div className="w-full flex flex-col items-center py-10 mb-12 border border-slate-800 bg-slate-900 relative shadow-[8px_8px_0px_#020617]">
    <div className="absolute top-0 right-0 bg-slate-800 text-slate-300 px-3 py-1 text-[10px] uppercase tracking-widest font-mono font-bold border-l border-b border-slate-700">Fig 2. Sampling Methods</div>
    
    <div className="w-full px-6 mt-6 overflow-x-auto">
      <table className="w-full border-collapse border border-slate-800 text-sm font-sans bg-slate-950 text-slate-300">
        <thead>
          <tr className="bg-slate-800 text-slate-200 uppercase tracking-wider text-[11px] font-mono">
            <th className="p-3 border border-slate-700 text-left font-bold w-1/5">Method</th>
            <th className="p-3 border border-slate-700 text-left font-bold w-2/5">Advantage</th>
            <th className="p-3 border border-slate-700 text-left font-bold w-2/5">Disadvantage</th>
          </tr>
        </thead>
        <tbody>
          {/* Census Row */}
          <tr className="border-b border-slate-800 hover:bg-slate-900/50 transition-colors">
            <td className="p-3 border-r border-slate-700 font-bold bg-slate-900 text-slate-200 font-mono text-[13px]">Census</td>
            <td className="p-3 border-r border-slate-700 border-b border-slate-800 text-slate-300 text-[13px]">100% accurate; yields a truly representative result for the whole population. [cite: 81, 82]</td>
            <td className="p-3 text-slate-400 text-[13px]">Extremely time-consuming, expensive, and often impossible to complete. [cite: 82]</td>
          </tr>
          {/* Simple Random Row */}
          <tr className="border-b border-slate-800 hover:bg-slate-900/50 transition-colors">
            <td className="p-3 border-r border-slate-700 font-bold bg-slate-900 text-amber-400 font-mono text-[13px]">Simple Random</td>
            <td className="p-3 border-r border-slate-700 border-b border-slate-800 text-slate-300 text-[13px]">Completely free from human bias; every item has an equal chance of selection. [cite: 82]</td>
            <td className="p-3 text-slate-400 text-[13px]">Requires a full sampling frame; may completely miss minority subgroups by chance. [cite: 83]</td>
          </tr>
          {/* Stratified Row */}
          <tr className="hover:bg-slate-900/50 transition-colors">
            <td className="p-3 border-r border-slate-700 font-bold bg-slate-900 text-emerald-400 font-mono text-[13px]">Stratified</td>
            <td className="p-3 border-r border-slate-700 text-slate-300 text-[13px]">Highly representative of the underlying proportional population structure. [cite: 83]</td>
            <td className="p-3 text-slate-400 text-[13px]">Requires detailed prior knowledge of exact population strata sizes to calculate accurately. [cite: 83]</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className="text-[11px] font-mono text-slate-400 text-center mt-6 px-6 italic max-w-prose">
      Selecting a sampling technique requires balancing accuracy with cost and practicality. [cite: 83]
      <br/>
      <strong className="text-rose-400 not-italic uppercase text-[10px] block mt-1">Exam Misconception:</strong> Simple Random Sampling is not mathematically "perfect"—it can accidentally over-represent or under-represent specific groups purely by statistical chance. [cite: 83]
    </p>
  </div>
);


export const StratifiedProportionVisual: React.FC = () => (
  <div className="w-full flex flex-col items-center py-8 mb-12 border border-slate-800 bg-slate-900 relative shadow-[8px_8px_0px_#020617]">
    <div className="absolute top-0 right-0 bg-slate-800 text-slate-300 px-3 py-1 text-[10px] uppercase tracking-widest font-mono font-bold border-l border-b border-slate-700">Fig 3. Stratified Proportional Split</div>
    
    <div className="w-full max-w-lg px-4 my-4">
      <svg viewBox="0 0 500 180" className="w-full overflow-visible" shapeRendering="geometricPrecision">
        {/* Population Box Base */}
        <rect x="10" y="20" width="480" height="45" rx="4" className="fill-slate-950 stroke-slate-700 stroke-2" />
        <text x="250" y="47" textAnchor="middle" className="fill-slate-400 font-mono text-[11px] uppercase tracking-wider">Total Target Population (N = 300)</text>

        {/* Breakdown Structural Vectors */}
        <path d="M 90 65 L 90 95" className="stroke-slate-600 stroke-2 fill-none marker-end" strokeDasharray="3 3" />
        <path d="M 250 65 L 250 95" className="stroke-slate-600 stroke-2 fill-none marker-end" strokeDasharray="3 3" />
        <path d="M 410 65 L 410 95" className="stroke-slate-600 stroke-2 fill-none marker-end" strokeDasharray="3 3" />

        {/* Stratum Boxes */}
        {/* Stratum 1: Year 12 */}
        <rect x="10" y="95" width="150" height="40" rx="4" className="fill-slate-950 stroke-amber-500/80 stroke-2" />
        <foreignObject x="15" y="100" width="140" height="30">
          <div className="text-center text-[10px] font-mono text-amber-400 font-bold uppercase">Strata 1: Yr 12</div>
          <div className="text-center text-[11px] font-sans text-slate-300">Pop: 120</div>
        </foreignObject>

        {/* Stratum 2: Year 13 */}
        <rect x="175" y="95" width="150" height="40" rx="4" className="fill-slate-950 stroke-emerald-500/80 stroke-2" />
        <foreignObject x="180" y="100" width="140" height="30">
          <div className="text-center text-[10px] font-mono text-emerald-400 font-bold uppercase">Strata 2: Yr 13</div>
          <div className="text-center text-[11px] font-sans text-slate-300">Pop: 100</div>
        </foreignObject>

        {/* Stratum 3: Year 14 */}
        <rect x="340" y="95" width="150" height="40" rx="4" className="fill-slate-950 stroke-blue-500/80 stroke-2" />
        <foreignObject x="345" y="100" width="140" height="30">
          <div className="text-center text-[10px] font-mono text-blue-400 font-bold uppercase">Strata 3: Yr 14</div>
          <div className="text-center text-[11px] font-sans text-slate-300">Pop: 80</div>
        </foreignObject>
      </svg>
    </div>

    <div className="w-full px-6 text-left border-t border-slate-800/60 pt-4 bg-slate-950/40 font-mono text-[11px]">
      <span className="text-emerald-400 font-bold uppercase block mb-1">CCEA Mathematical Sampling Allocation Pipeline:</span>
      <p className="text-slate-300 leading-relaxed mb-2">
        To isolate a representative subset vector size of <span className="text-slate-100 font-bold">n = 60</span> out of the core population framework[cite: 89]:
      </p>
      <div className="bg-slate-950 p-3 rounded border border-slate-800 font-mono space-y-1.5 text-slate-400">
        <div>• Year 12 Sample Size = <span className="text-amber-400 font-bold">$$\frac{120}{300} \times 60 = 24$$</span> [cite: 89]</div>
        <div>• Year 13 Sample Size = <span className="text-emerald-400 font-bold">$$\frac{100}{300} \times 60 = 20$$</span></div>
        <div>• Year 14 Sample Size = <span className="text-blue-400 font-bold">$$\frac{80}{300} \times 60 = 16$$</span> [cite: 89]</div>
      </div>
      <p className="text-[10px] text-rose-400 mt-2 italic">
        * Warning: Always round to the nearest whole integer when dealing with individual sample counts, while ensuring that the aggregated total exactly meets the specified parameter n. [cite: 88]
      </p>
    </div>
  </div>
);