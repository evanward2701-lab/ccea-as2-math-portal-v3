import React from 'react';

export const SamplingTableSVG: React.FC = () => (
  <div className="w-full flex flex-col items-center py-10 mb-12 border border-zinc-800 bg-zinc-925 relative shadow-inner rounded-xl overflow-hidden">
    <div className="absolute top-0 right-0 bg-zinc-900 text-zinc-400 border-l border-b border-zinc-800 px-3 py-1 text-2.5 uppercase tracking-widest font-bold">
      Fig 2. S1 Sampling Methodologies
    </div>
    
    <div className="w-full px-6 mt-6 overflow-x-auto">
      <table className="w-full border-collapse font-sans bg-zinc-925 text-zinc-300">
        <thead>
          <tr className="bg-zinc-900 text-zinc-400 uppercase tracking-wider text-2.5 font-mono border-b-2 border-zinc-700">
            <th className="p-4 text-left font-bold w-1/3 min-w-25">Method</th>
            <th className="p-4 text-left font-bold w-1/3 min-w-37.5">Advantage</th>
            <th className="p-4 text-left font-bold w-1/3 min-w-37.5">Disadvantage</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-800">
          <tr className="hover:bg-zinc-900/50 transition-colors">
            <td className="p-4 font-bold text-zinc-400">Census</td>
            <td className="p-4 text-sm leading-relaxed">100% accurate</td>
            <td className="p-4 text-sm leading-relaxed">Time-consuming / expensive</td>
          </tr>
          <tr className="hover:bg-zinc-900/50 transition-colors">
            <td className="p-4 font-bold text-zinc-400">Simple Random Sample</td>
            <td className="p-4 text-sm leading-relaxed">Free from human bias</td>
            <td className="p-4 text-sm leading-relaxed">Needs a full sampling frame;<br/>may not represent minority subgroups</td>
          </tr>
          <tr className="hover:bg-zinc-900/50 transition-colors">
            <td className="p-4 font-bold text-zinc-400">Stratified</td>
            <td className="p-4 text-sm leading-relaxed">Highly representative of population structure</td>
            <td className="p-4 text-sm leading-relaxed">Requires detailed prior knowledge<br/>of population strata sizes</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="w-full px-6 mt-6">
      <p className="text-sm text-zinc-300 leading-relaxed text-center">
        Selecting a sampling technique requires balancing accuracy with cost and practicality.
      </p>
    </div>
  </div>
);
