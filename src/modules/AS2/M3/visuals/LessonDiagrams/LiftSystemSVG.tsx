import React from 'react';
import { MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { DiagramLabel } from '@/core/diagram-engine/primitives/DiagramLabel';
import { SVGLibrary } from '@/core/diagram-engine/primitives/SVGLibrary';
import { VectorArrow } from '@/core/diagram-engine/primitives/VectorArrow';
import { themeColors } from '@/core/types/mechanicsTheme';

export const LiftSystemSVG: React.FC = () => (
  <DiagramPanel
    title="Fig 4. Lift Systems Isolation"
    analysis={
      <div className="space-y-3">
        <div className="flex items-start gap-3 p-3 bg-slate-900/50 border border-slate-800 rounded-lg">
          <p className="text-sm text-slate-300 leading-relaxed">
            To find cable tension (<MathText content="T" className="inline" />), model the lift and passenger as one combined system. To find the floor reaction (<MathText content="R" className="inline" />), isolate the passenger.
          </p>
        </div>
        <div className="p-3 bg-rose-950/30 border border-rose-900/40 rounded-lg text-sm text-rose-300">
          <strong className="font-bold text-rose-400">CCEA Exam Pitfall:</strong> The normal reaction <MathText content="R" className="inline" /> is an internal force to the system and must not be included in the whole-system equation for tension.
        </div>
      </div>
    }
  >
    <div className="relative w-full aspect-60/28 max-w-2xl mx-auto rounded-xl overflow-hidden border border-slate-800/50 bg-slate-950 shadow-[8px_8px_0px_#0f172a]">
      <SVGLibrary />
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 280" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" overflow="visible">
        <line x1="300" y1="10" x2="300" y2="250" stroke="#1e293b" strokeWidth="1.5" strokeDasharray="4 4" />
        
        {/* DIAGRAM A */}
        <line x1="150" y1="40" x2="150" y2="80" stroke="#475569" strokeWidth="2" />
        <VectorArrow x1={150} y1={80} x2={150} y2={45} type="accel" marker="default" />
        
        <rect x="90" y="80" width="120" height="120" fill="#0f172a" stroke="#334155" strokeWidth="2" />
        <rect x="130" y="140" width="40" height="60" fill="#1e293b" stroke="#475569" strokeWidth="1" strokeDasharray="2 2" />
        
        <VectorArrow x1={150} y1={200} x2={150} y2={250} type="applied" marker="default" />

        {/* System Accel A */}
        <VectorArrow x1={50} y1={160} x2={50} y2={120} type="velocity" marker="default" />

        {/* DIAGRAM B */}
        <rect x="430" y="140" width="40" height="60" fill="#1e293b" stroke="#64748b" strokeWidth="2" className="hover:stroke-sky-400 transition-all" />
        
        <VectorArrow x1={450} y1={140} x2={450} y2={85} type="accel" marker="default" />

        <VectorArrow x1={450} y1={200} x2={450} y2={250} type="applied" marker="default" />

        <VectorArrow x1={380} y1={160} x2={380} y2={120} type="velocity" marker="default" />
      </svg>

      <DiagramLabel position={{ left: '21.5%', top: '5%' }}>
        <div className="text-center text-slate-400 text-[11px] font-bold uppercase tracking-wider">Diagram A: Whole System</div>
      </DiagramLabel>
      <DiagramLabel position={{ left: '71.5%', top: '5%' }}>
        <div className="text-center text-slate-400 text-[11px] font-bold uppercase tracking-wider">Diagram B: Isolated Passenger</div>
      </DiagramLabel>

      <DiagramLabel position={{ left: '26.5%', top: '15%' }}>
        <MathText content="T" />
      </DiagramLabel>
      <DiagramLabel position={{ left: '26.5%', top: '90%' }}>
        <MathText content="(M+m)g" />
      </DiagramLabel>
      <DiagramLabel position={{ left: '5%', top: '45%' }}>
        <MathText content="a" />
      </DiagramLabel>

      <DiagramLabel position={{ left: '76.5%', top: '30%' }}>
        <MathText content="R" />
      </DiagramLabel>
      <DiagramLabel position={{ left: '76.5%', top: '90%' }}>
        <MathText content="mg" />
      </DiagramLabel>
      <DiagramLabel position={{ left: '60%', top: '45%' }}>
        <MathText content="a" />
      </DiagramLabel>
    </div>
  </DiagramPanel>
);
