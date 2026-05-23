import React from 'react';
import { MathText } from '../../../MathText';
import { DiagramPanel } from '../../../DiagramPanel';
import { DiagramLabel } from '../../../diagrams/primitives/DiagramLabel';

export const VennMutExSVG: React.FC = () => (
  <DiagramPanel
    title="Fig 1. Venn Configurations"
    analysis={
      <div className="space-y-3">
        <div className="flex justify-around w-full max-w-md mx-auto">
          <div className="text-center font-sans text-sm font-semibold text-emerald-400">
            Mutually Exclusive: <MathText content="P(A \cap B) = 0" className="inline [&_p]:inline [&_p]:m-0" />
          </div>
          <div className="text-center font-sans text-sm font-semibold text-rose-400">
            Intersecting: <MathText content="P(A \cap B) \neq 0" className="inline [&_p]:inline [&_p]:m-0" />
          </div>
        </div>
        <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg text-sm text-slate-300 leading-relaxed">
          If events are mutually exclusive, the subtraction component of the General Addition Law (<MathText content="- P(A \cap B)" className="inline [&_p]:inline [&_p]:m-0" />) becomes zero.
        </div>
        <div className="p-3 bg-rose-950/30 border border-rose-900/40 rounded text-sm text-rose-300">
          <strong className="block text-rose-400 not-italic uppercase text-[10px] mb-1">CCEA Exam Pitfall:</strong>
          Never assume <MathText content="P(A \cup B) = P(A) + P(B)" className="inline [&_p]:inline [&_p]:m-0" /> unless the events are explicitly stated to be mutually exclusive.
        </div>
      </div>
    }
  >
    <div className="relative w-full aspect-60/22 max-w-2xl mx-auto">
      <svg viewBox="0 0 600 220" className="absolute inset-0 w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" overflow="visible">
        {/* Left Side: Mutually Exclusive */}
        <rect x="20" y="40" width="260" height="170" stroke="#334155" strokeWidth="2" fill="#0f172a" rx="4" />
        <text x="35" y="65" fill="#94a3b8" fontSize="16" fontFamily="serif" fontStyle="italic">E</text>
        <circle cx="100" cy="125" r="55" stroke="#10b981" strokeWidth="2" fill="#10b981" fillOpacity="0.05" />
        <circle cx="200" cy="125" r="55" stroke="#38bdf8" strokeWidth="2" fill="#38bdf8" fillOpacity="0.05" />

        {/* Right Side: Intersecting */}
        <rect x="320" y="40" width="260" height="170" stroke="#334155" strokeWidth="2" fill="#0f172a" rx="4" />
        <text x="335" y="65" fill="#94a3b8" fontSize="16" fontFamily="serif" fontStyle="italic">E</text>
        <circle cx="410" cy="125" r="55" stroke="#10b981" strokeWidth="2" fill="#10b981" fillOpacity="0.05" />
        <circle cx="470" cy="125" r="55" stroke="#38bdf8" strokeWidth="2" fill="#38bdf8" fillOpacity="0.05" />
        
        {/* Shaded Intersection */}
        <path d="M440,81.3 A55,55 0 0,0 440,168.7 A55,55 0 0,0 440,81.3" fill="#f43f5e" fillOpacity="0.25" />
      </svg>

      <DiagramLabel position={{ left: '16.7%', top: '50%' }}>
        <MathText content="A" className="text-emerald-400 font-serif text-base" />
      </DiagramLabel>
      <DiagramLabel position={{ left: '33.3%', top: '50%' }}>
        <MathText content="B" className="text-sky-400 font-serif text-base" />
      </DiagramLabel>

      <DiagramLabel position={{ left: '63.3%', top: '50%' }}>
        <MathText content="A" className="text-emerald-400 font-serif text-base" />
      </DiagramLabel>
      <DiagramLabel position={{ left: '86.7%', top: '50%' }}>
        <MathText content="B" className="text-sky-400 font-serif text-base" />
      </DiagramLabel>
    </div>
  </DiagramPanel>
);
