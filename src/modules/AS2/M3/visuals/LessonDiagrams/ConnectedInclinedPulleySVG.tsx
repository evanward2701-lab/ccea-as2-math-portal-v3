import React from 'react';
import { MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { DiagramLabel } from '@/core/diagram-engine/primitives/DiagramLabel';
import { SVGLibrary } from '@/core/diagram-engine/primitives/SVGLibrary';
import { ObjectBlock } from '@/core/diagram-engine/primitives/ObjectBlock';
import { VectorArrow } from '@/core/diagram-engine/primitives/VectorArrow';
import { themeColors } from '@/core/types/mechanicsTheme';

export const ConnectedInclinedPulleySVG: React.FC = () => (
  <DiagramPanel
    title="Fig 5. Advanced Connected Inclined Plane"
    analysis={(
      <div className="space-y-3">
        <div className="flex items-start gap-3 p-3 bg-zinc-900/50 border border-zinc-800 rounded-lg">
          <p className="text-sm text-zinc-300 leading-relaxed">
            For each mass, resolve forces along its direction of acceleration. For the inclined particle, this means resolving parallel and perpendicular to the slope.
          </p>
        </div>
        <div className="p-3 bg-rose-950/30 border border-rose-900/40 rounded-lg text-sm text-rose-300">
          <strong className="font-bold text-rose-400">CCEA Exam Pitfall:</strong> Ensure friction opposes the direction of motion. If <MathText content="m_B" className="inline not-italic align-baseline [&_p]:inline [&_p]:m-0" /> accelerates down, friction on <MathText content="m_A" className="inline not-italic align-baseline [&_p]:inline [&_p]:m-0" /> acts down the slope.
        </div>
      </div>
    )}
  >
    <div className="relative w-full aspect-60/30 max-w-2xl mx-auto rounded-xl overflow-hidden border border-zinc-800/60 bg-[#141416] shadow-inner">
      <SVGLibrary />
      <svg className="absolute inset-0 w-full h-full" viewBox="40 90 520 260" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" overflow="visible">
        {/* Hanging Mass Body B */}
        <line x1="462" y1="120" x2="462" y2="200" stroke="#64748b" strokeWidth="1.5" />
        <ObjectBlock x={447} y={200} width={30} height={40} massLabel="m_B" />

        {/* Tension & Weight for Mass B */}
        <VectorArrow x1={462} y1={200} x2={462} y2={150} type="accel" marker="default" />
        <VectorArrow x1={462} y1={240} x2={462} y2={290} type="applied" marker="default" />

        {/* Acceleration Mass B */}
        <VectorArrow x1={495} y1={190} x2={495} y2={230} type="velocity" marker="default" />

        {/* Slope Geometry */}
        <line x1="50" y1="280" x2="500" y2="280" stroke="#3f3f46" strokeWidth="2" strokeDasharray="4 4" />
        <line x1="50" y1="280" x2="450" y2="120" stroke="#475569" strokeWidth="3" />
        <line x1="450" y1="120" x2="450" y2="280" stroke="#3f3f46" strokeWidth="1.5" />

        <path d="M 110 280 A 60 60 0 0 0 102 260" fill="none" stroke="#94a3b8" strokeWidth="1.5" />
        <circle cx="450" cy="120" r="12" fill="#141417" stroke="#94a3b8" strokeWidth="2" />

        {/* Inclined Mass Body A */}
        <line x1="285" y1="186" x2="450" y2="120" stroke="#64748b" strokeWidth="1.5" />
        <g transform="translate(250 200) rotate(-21.8)">
          <rect x="-35" y="-25" width="70" height="50" fill="#1e293b" stroke="#475569" strokeWidth="2" />
          
          {/* Labels for m_A are complex with rotation, I'll use absolute overlays for simple ones and SVG text for nested ones if needed, but the task says NO foreignObject. */}
        </g>
      </svg>

      <DiagramLabel x="85%" y="65%" text="m_B" />
      <DiagramLabel x="90%" y="55%" text="T" />
      <DiagramLabel x="90%" y="90%" text="m_Bg" />
      <DiagramLabel x="95%" y="80%" text="a" />

      <DiagramLabel x="15%" y="75%" text="\alpha" />
      
      {/* Simplified labels for m_A for now due to rotation complexity */}
      <DiagramLabel x="45%" y="75%" text="m_A" />
    </div>
  </DiagramPanel>
);
