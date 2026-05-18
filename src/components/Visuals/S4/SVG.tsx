import React from 'react';

// Diagram 2: Cumulative Binomial Inequality Panel
export const InequalityPanelSVG: React.FC = () => (
  <div className="w-full flex flex-col items-center py-10 mb-12 border border-[#1A1A1A] bg-[#FAF9F6] relative shadow-[8px_8px_0px_#1A1A1A]">
    <div className="absolute top-0 right-0 bg-[#1A1A1A] text-white px-3 py-1 text-[10px] uppercase tracking-widest font-bold">Fig 2. Binomial Inequalities</div>
    
    <div className="w-full px-6 mt-6 overflow-x-auto">
      <table className="w-full border-collapse border-2 border-[#1A1A1A] text-sm font-sans bg-white text-center">
        <thead>
          <tr className="bg-[#1A1A1A] text-white">
            <th className="p-3 border border-[#1A1A1A] uppercase tracking-wider text-[11px]">English Phrase</th>
            <th className="p-3 border border-[#1A1A1A] uppercase tracking-wider text-[11px]">Raw Inequality</th>
            <th className="p-3 border border-[#1A1A1A] uppercase tracking-wider text-[11px]">Calculate via Calculator</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-3 border border-[#1A1A1A] font-bold">Fewer than 4</td>
            <td className="p-3 border border-[#1A1A1A] font-serif italic">P(X {'<'} 4)</td>
            <td className="p-3 border border-[#1A1A1A] font-serif font-bold text-blue-700">Calculate P(X ≤ 3)</td>
          </tr>
          <tr>
            <td className="p-3 border border-[#1A1A1A] font-bold">At most 4</td>
            <td className="p-3 border border-[#1A1A1A] font-serif italic">P(X ≤ 4)</td>
            <td className="p-3 border border-[#1A1A1A] font-serif font-bold text-blue-700">Calculate P(X ≤ 4)</td>
          </tr>
          <tr>
            <td className="p-3 border border-[#1A1A1A] font-bold">At least 4</td>
            <td className="p-3 border border-[#1A1A1A] font-serif italic">P(X ≥ 4)</td>
            <td className="p-3 border border-[#1A1A1A] font-serif font-bold text-red-600">Calculate 1 - P(X ≤ 3)</td>
          </tr>
          <tr>
            <td className="p-3 border border-[#1A1A1A] font-bold">More than 4</td>
            <td className="p-3 border border-[#1A1A1A] font-serif italic">P(X {'>'} 4)</td>
            <td className="p-3 border border-[#1A1A1A] font-serif font-bold text-red-600">Calculate 1 - P(X ≤ 4)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className="text-[11px] font-sans text-[#1A1A1A]/70 text-center mt-6 px-6 italic">
      Because binomial data is strictly discrete, strict inequalities ({'<'}, {'>'}) must be carefully converted into inclusive inequalities (≤, ≥).
      <br/><strong className="text-red-600 not-italic uppercase text-[10px]">Exam Misconception:</strong> Do not accidentally calculate 1 - P(X ≤ 4) when the question asks for "at least 4".
    </p>
  </div>
);


// Diagram 3: Your Original Normal Distribution Graphic
export const NormalDistributionSVG: React.FC = () => (
  <div className="w-full flex flex-col items-center py-16 mb-12 border border-[#1A1A1A] bg-[#FAF9F6] relative shadow-[8px_8px_0px_#1A1A1A]">
    <div className="absolute top-0 right-0 bg-[#1A1A1A] text-white px-3 py-1 text-[10px] uppercase tracking-widest font-bold">Fig 3. Normal Distribution</div>
    <svg width="400" height="260" viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 210 L370 210" stroke="#1A1A1A" strokeWidth="1.5" />
      <path d="M50 210 C 90 210, 120 190, 150 120 C 170 70, 180 50, 200 50 C 220 50, 230 70, 250 120 C 280 190, 310 210, 350 210" stroke="#1A1A1A" strokeWidth="2.5" fill="none" />
      <path d="M200 50 L200 210" stroke="#1A1A1A" strokeDasharray="5 5" strokeWidth="1.5" opacity="0.6" />
      <path d="M140 160 L140 210" stroke="#1A1A1A" strokeDasharray="3 3" strokeWidth="1.5" opacity="0.6" />
      <path d="M260 160 L260 210" stroke="#1A1A1A" strokeDasharray="3 3" strokeWidth="1.5" opacity="0.6" />
      
      <text x="195" y="235" fill="#1A1A1A" fontSize="16" fontFamily="serif" fontStyle="italic">μ</text>
      <text x="125" y="235" fill="#1A1A1A" fontSize="14" fontFamily="serif">μ - σ</text>
      <text x="245" y="235" fill="#1A1A1A" fontSize="14" fontFamily="serif">μ + σ</text>
      
      <text x="270" y="80" fill="#1A1A1A" fontSize="18" fontFamily="serif" fontStyle="italic">N(μ, σ²)</text>
    </svg>
    <p className="text-[11px] font-sans text-[#1A1A1A]/70 text-center mt-2 px-6 italic">
      <strong className="text-red-600 not-italic uppercase text-[10px]">A2 Warning:</strong> Normal Distribution calculations are excluded from AS2 Mathematics. Do not apply continuous normal curves to discrete binomial data!
    </p>
  </div>
);