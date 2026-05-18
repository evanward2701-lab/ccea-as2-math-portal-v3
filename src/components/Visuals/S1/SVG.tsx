import React from 'react';

// Diagram 2: Sampling Method Comparison Table
export const SamplingTableSVG: React.FC = () => (
  <div className="w-full flex flex-col items-center py-10 mb-12 border border-[#1A1A1A] bg-[#FAF9F6] relative shadow-[8px_8px_0px_#1A1A1A]">
    <div className="absolute top-0 right-0 bg-[#1A1A1A] text-white px-3 py-1 text-[10px] uppercase tracking-widest font-bold">Fig 2. Sampling Methods</div>
    
    <div className="w-full px-6 mt-6 overflow-x-auto">
      <table className="w-full border-collapse border border-[#1A1A1A] text-sm font-sans bg-white">
        <thead>
          <tr className="bg-[#1A1A1A] text-white uppercase tracking-wider text-[11px]">
            <th className="p-3 border border-[#1A1A1A] text-left font-bold w-1/5">Method</th>
            <th className="p-3 border border-[#1A1A1A] text-left font-bold w-2/5">Advantage</th>
            <th className="p-3 border border-[#1A1A1A] text-left font-bold w-2/5">Disadvantage</th>
          </tr>
        </thead>
        <tbody>
          {/* Census Row */}
          <tr className="border-b border-[#1A1A1A]">
            <td className="p-3 border-r border-[#1A1A1A] font-bold bg-[#FAF9F6]">Census</td>
            <td className="p-3 border-r border-[#1A1A1A]">100% accurate; yields a truly representative result for the whole population.</td>
            <td className="p-3">Extremely time-consuming, expensive, and often impossible to complete.</td>
          </tr>
          {/* Simple Random Row */}
          <tr className="border-b border-[#1A1A1A]">
            <td className="p-3 border-r border-[#1A1A1A] font-bold bg-[#FAF9F6]">Simple Random</td>
            <td className="p-3 border-r border-[#1A1A1A]">Completely free from human bias; every item has an equal chance of selection.</td>
            <td className="p-3">Requires a full sampling frame; may completely miss minority subgroups by chance.</td>
          </tr>
          {/* Stratified Row */}
          <tr>
            <td className="p-3 border-r border-[#1A1A1A] font-bold bg-[#FAF9F6]">Stratified</td>
            <td className="p-3 border-r border-[#1A1A1A]">Highly representative of the underlying proportional population structure.</td>
            <td className="p-3">Requires detailed prior knowledge of exact population strata sizes to calculate accurately.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className="text-[11px] font-sans text-[#1A1A1A]/70 text-center mt-6 px-6 italic">
      Selecting a sampling technique requires balancing accuracy with cost and practicality.
      <br/><strong className="text-red-600 not-italic uppercase text-[10px]">Exam Misconception:</strong> Simple Random Sampling is not mathematically "perfect"—it can accidentally over-represent or under-represent specific groups purely by statistical chance.
    </p>
  </div>
);