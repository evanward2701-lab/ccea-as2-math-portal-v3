import React from 'react';
import { MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { DiagramLabel } from '@/core/diagram-engine/primitives/DiagramLabel';
import { SVGLibrary } from '@/core/diagram-engine/primitives/SVGLibrary';
import { ObjectBlock } from '@/core/diagram-engine/primitives/ObjectBlock';
import { VectorArrow } from '@/core/diagram-engine/primitives/VectorArrow';
import { themeColors } from '@/core/types/mechanicsTheme';

export const PulleySystemSVG: React.FC = () => (
  <DiagramPanel
    title="Fig 2. Connected Particles"
    analysis={
      <div className="space-y-3">
        <p className="text-sm text-slate-400 italic text-center">
          A smooth pulley ensures tension T is equal on both sides. The inextensible string ensures acceleration a is equal in magnitude.
        </p>
        <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
          <h4 className="font-bold text-emerald-400 mb-2 text-sm">Smooth Pulley</h4>
          <p className="text-sm text-slate-300 leading-relaxed mb-2">Tension is equal on both sides of the string.</p>
          <div className="text-center bg-slate-950 p-2 rounded border border-slate-800/60 text-sm text-slate-300">T is equal on both sides</div>
        </div>
        <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
          <h4 className="font-bold text-amber-400 mb-2 text-sm">Inextensible String</h4>
          <p className="text-sm text-slate-300 leading-relaxed mb-2">Both connected masses share the same acceleration magnitude.</p>
          <div className="text-center bg-slate-950 p-2 rounded border border-slate-800/60 text-sm text-slate-300">a is common to both masses</div>
        </div>
      </div>
    }
  >
    <div className="relative w-full aspect-30/35 max-w-sm mx-auto rounded-xl overflow-hidden border border-slate-800/50 bg-slate-950 shadow-[8px_8px_0px_#0f172a]">
      <SVGLibrary />
      <svg className="absolute inset-0 w-full h-full" viewBox="80 20 300 330" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" overflow="visible">
        {/* Ceiling & Pulley */}
        <line x1="120" y1="30" x2="280" y2="30" stroke="#475569" strokeWidth="3" />
        <path d="M130 30 L120 20 M160 30 L150 20 M190 30 L180 20 M220 30 L210 20 M250 30 L240 20 M280 30 L270 20" stroke="#334155" strokeWidth="1.5" />
        <line x1="200" y1="30" x2="200" y2="75" stroke="#64748b" strokeWidth="2" />
        <circle cx="200" cy="75" r="25" fill="#0f172a" stroke="#94a3b8" strokeWidth="2" />
        <circle cx="200" cy="75" r="4" fill="#64748b" />

        {/* Cables */}
        <line x1="175" y1="75" x2="175" y2="200" stroke="#64748b" strokeWidth="1.5" /> {/* m1 cable */}
        <line x1="225" y1="75" x2="225" y2="150" stroke="#64748b" strokeWidth="1.5" />

        {/* Mass Body 1 */}
        <ObjectBlock x={150} y={200} width={50} height={60} massLabel="m_1" />
        
        {/* Mass Body 2 */}
        <ObjectBlock x={210} y={150} width={30} height={35} massLabel="m_2" />

        {/* Tensions */}
        <VectorArrow x1={175} y1={200} x2={175} y2={120} type="accel" marker="default" />
        <VectorArrow x1={225} y1={150} x2={225} y2={95} type="accel" marker="default" />

        {/* Gravity */}
        <VectorArrow x1={175} y1={260} x2={175} y2={320} type="applied" marker="default" />
        <VectorArrow x1={225} y1={185} x2={225} y2={235} type="applied" marker="default" />

        {/* Acceleration */}
        <VectorArrow x1={130} y1={220} x2={130} y2={260} type="velocity" marker="default" />
        <VectorArrow x1={270} y1={180} x2={270} y2={140} type="velocity" marker="default" />
      </svg>

      <DiagramLabel position={{ left: '35%', top: '35%' }}>
        <MathText content="T" />
      </DiagramLabel>
      <DiagramLabel position={{ left: '55%', top: '25%' }}>
        <MathText content="T" />
      </DiagramLabel>

      <DiagramLabel position={{ left: '35%', top: '90%' }}>
        <MathText content="m_1g" />
      </DiagramLabel>
      <DiagramLabel position={{ left: '55%', top: '65%' }}>
        <MathText content="m_2g" />
      </DiagramLabel>

      <DiagramLabel position={{ left: '10%', top: '65%' }}>
        <MathText content="a" />
      </DiagramLabel>
      <DiagramLabel position={{ left: '60%', top: '40%' }}>
        <MathText content="a" />
      </DiagramLabel>
    </div>
  </DiagramPanel>
);
