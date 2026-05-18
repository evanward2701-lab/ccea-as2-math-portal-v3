import React from 'react';

// Diagram 1: Venn Diagram - Mutually Exclusive vs Intersecting
export const VennMutExSVG: React.FC = () => (
  <div className="w-full flex flex-col items-center py-12 mb-12 border border-[#1A1A1A] bg-[#FAF9F6] relative shadow-[8px_8px_0px_#1A1A1A]">
    <div className="absolute top-0 right-0 bg-[#1A1A1A] text-white px-3 py-1 text-[10px] uppercase tracking-widest font-bold">Fig 1. Venn Configurations</div>
    
    <svg width="600" height="250" viewBox="0 0 600 250" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Left Side: Mutually Exclusive */}
      <rect x="20" y="40" width="260" height="150" stroke="#1A1A1A" strokeWidth="2" fill="white" />
      <text x="35" y="60" fill="#1A1A1A" fontSize="16" fontFamily="serif" fontStyle="italic">E</text>
      
      <circle cx="100" cy="115" r="45" stroke="#1A1A1A" strokeWidth="2" fill="none" />
      <text x="100" y="120" textAnchor="middle" fill="#1A1A1A" fontSize="18" fontFamily="serif">A</text>
      
      <circle cx="200" cy="115" r="45" stroke="#1A1A1A" strokeWidth="2" fill="none" />
      <text x="200" y="120" textAnchor="middle" fill="#1A1A1A" fontSize="18" fontFamily="serif">B</text>
      
      <text x="150" y="215" textAnchor="middle" fill="#1A1A1A" fontSize="12" fontFamily="sans-serif" fontWeight="bold">Mutually Exclusive: P(A ∩ B) = 0</text>

      {/* Right Side: Intersecting */}
      <rect x="320" y="40" width="260" height="150" stroke="#1A1A1A" strokeWidth="2" fill="white" />
      <text x="335" y="60" fill="#1A1A1A" fontSize="16" fontFamily="serif" fontStyle="italic">E</text>
      
      <circle cx="410" cy="115" r="45" stroke="#1A1A1A" strokeWidth="2" fill="none" />
      <circle cx="490" cy="115" r="45" stroke="#1A1A1A" strokeWidth="2" fill="none" />
      
      {/* Shaded Intersection */}
      <path d="M450 85 A 45 45 0 0 0 450 145 A 45 45 0 0 0 450 85" fill="#1A1A1A" opacity="0.2" />
      
      <text x="390" y="120" textAnchor="middle" fill="#1A1A1A" fontSize="18" fontFamily="serif">A</text>
      <text x="510" y="120" textAnchor="middle" fill="#1A1A1A" fontSize="18" fontFamily="serif">B</text>
      <text x="450" y="215" textAnchor="middle" fill="#1A1A1A" fontSize="12" fontFamily="sans-serif" fontWeight="bold">Intersecting: P(A ∩ B) ≠ 0</text>
    </svg>

    <p className="text-[11px] font-sans text-[#1A1A1A]/70 text-center mt-4 px-6 italic">
      If events are mutually exclusive, the subtraction part of the Addition Law simply becomes zero.
      <br/><strong className="text-red-600 not-italic uppercase text-[10px]">Exam Misconception:</strong> Stop automatically writing P(A ∪ B) = P(A) + P(B). This is ONLY true if they do not overlap!
    </p>
  </div>
);

// Diagram 2: Anatomy of a Two-Way Table
export const TwoWayTableSVG: React.FC = () => (
  <div className="w-full flex flex-col items-center py-10 mb-12 border border-[#1A1A1A] bg-white relative shadow-[8px_8px_0px_#1A1A1A]">
    <div className="absolute top-0 right-0 bg-[#1A1A1A] text-white px-3 py-1 text-[10px] uppercase tracking-widest font-bold">Fig 2. Two-Way Table</div>
    
    <div className="w-full px-6 mt-6 overflow-x-auto">
      <table className="w-full border-collapse border-2 border-[#1A1A1A] text-sm font-sans bg-white text-center">
        <thead>
          <tr className="bg-[#FAF9F6]">
            <th className="p-3 border border-[#1A1A1A]"></th>
            <th className="p-3 border border-[#1A1A1A] font-bold">Event A</th>
            <th className="p-3 border border-[#1A1A1A] font-bold">Event A' (Not A)</th>
            <th className="p-3 border border-[#1A1A1A] font-bold bg-neutral-100">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="p-3 border border-[#1A1A1A] font-bold bg-[#FAF9F6]">Event B</th>
            <td className="p-3 border border-[#1A1A1A] italic">A ∩ B</td>
            <td className="p-3 border border-[#1A1A1A] italic">A' ∩ B</td>
            <td className="p-3 border border-[#1A1A1A] font-bold bg-neutral-100">P(B)</td>
          </tr>
          <tr>
            <th className="p-3 border border-[#1A1A1A] font-bold bg-[#FAF9F6]">Event B'</th>
            <td className="p-3 border border-[#1A1A1A] italic">A ∩ B'</td>
            <td className="p-3 border border-[#1A1A1A] italic">A' ∩ B'</td>
            <td className="p-3 border border-[#1A1A1A] font-bold bg-neutral-100">P(B')</td>
          </tr>
          <tr>
            <th className="p-3 border border-[#1A1A1A] font-bold bg-neutral-100">Total</th>
            <td className="p-3 border border-[#1A1A1A] font-bold bg-neutral-100">P(A)</td>
            <td className="p-3 border border-[#1A1A1A] font-bold bg-neutral-100">P(A')</td>
            <td className="p-3 border-2 border-[#1A1A1A] font-bold bg-[#1A1A1A] text-white">Grand Total (1)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className="text-[11px] font-sans text-[#1A1A1A]/70 text-center mt-6 px-6 italic">
      Margin totals give single-event probabilities. Interior cells give intersection (AND) probabilities.
      <br/><strong className="text-red-600 not-italic uppercase text-[10px]">Exam Misconception:</strong> Prevents students from using a row total as the numerator for an intersection question.
    </p>
  </div>
);