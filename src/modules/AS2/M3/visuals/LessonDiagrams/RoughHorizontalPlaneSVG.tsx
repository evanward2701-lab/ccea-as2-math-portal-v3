import React from 'react';
import { MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { DiagramLabel } from '@/core/diagram-engine/primitives/DiagramLabel';
import { SVGLibrary } from '@/core/diagram-engine/primitives/SVGLibrary';
import { ObjectBlock } from '@/core/diagram-engine/primitives/ObjectBlock';
import { VectorArrow } from '@/core/diagram-engine/primitives/VectorArrow';
import { themeColors } from '@/core/types/mechanicsTheme';

export const RoughHorizontalPlaneSVG: React.FC = () => (
  <DiagramPanel
    title="Fig 1. Single Particle Resolving"
    analysis={
      <div className="space-y-3">
        <div className="p-3 bg-primary/5 border border-primary/20 rounded-lg">
          <p className="text-sm text-foreground leading-relaxed text-center italic">
            Always draw a comprehensive force diagram before resolving. Acceleration dictates the positive direction.
          </p>
        </div>
        <div className="p-3 bg-destructive/30 border border-destructive/40 rounded-lg text-sm text-destructive">
          <strong className="font-bold text-destructive">CCEA Exam Pitfall:</strong> Never confuse mass (<MathText content="m" className="inline not-italic align-baseline [&_p]:inline [&_p]:m-0" />) with weight (<MathText content="mg" className="inline not-italic align-baseline [&_p]:inline [&_p]:m-0" />) in your diagrams or equations.
        </div>
      </div>
    }
  >
    <div className="relative w-full aspect-45/23 max-w-xl mx-auto rounded-xl overflow-hidden border border-primary/20 bg-card shadow-inner">
      <SVGLibrary />
      <svg className="absolute inset-0 w-full h-full" viewBox="100 20 450 230" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" overflow="visible">
        {/* Ground Plane & Roughness */}
        <line x1="100" y1="160" x2="500" y2="160" stroke="#3f3f46" strokeWidth="3" />
        <path d="M150 160 L140 172 M200 160 L190 172 M250 160 L240 172 M300 160 L290 172 M350 160 L340 172 M400 160 L390 172 M450 160 L440 172" stroke="#1e293b" strokeWidth="2" />

        {/* Particle Block */}
        <ObjectBlock x={250} y={100} width={100} height={60} massLabel="m" />

        {/* Normal Reaction Force R */}
        <VectorArrow x1={300} y1={100} x2={300} y2={35} type="accel" marker="default" />

        {/* Weight Force mg */}
        <VectorArrow x1={300} y1={160} x2={300} y2={215} type="applied" marker="default" />

        {/* Driving Force P */}
        <VectorArrow x1={350} y1={130} x2={445} y2={130} type="accel" marker="default" />

        {/* Friction Resistance Vector F_r */}
        <VectorArrow x1={250} y1={140} x2={165} y2={140} type="force" marker="default" />

        {/* Acceleration Vector */}
        <VectorArrow x1={380} y1={65} x2={430} y2={65} type="velocity" marker="default" />
        <VectorArrow x1={390} y1={65} x2={440} y2={65} type="velocity" marker="default" />
      </svg>

      <DiagramLabel x="44.4%" y="6.5%" text="R" />

      <DiagramLabel x="44.4%" y="84.8%" text="mg" />

      <DiagramLabel x="77.8%" y="34.8%">
        <div className="text-primary text-xs font-semibold whitespace-nowrap">Driving Force (<MathText content="P" className="inline [&_p]:inline"/>)</div>
      </DiagramLabel>

      <DiagramLabel x="0%" y="39.1%">
        <div className="text-destructive text-xs font-semibold whitespace-nowrap">Friction (<MathText content="F" className="inline [&_p]:inline"/>)</div>
      </DiagramLabel>

      <DiagramLabel x="75.6%" y="19.6%" text="a" />
    </div>
  </DiagramPanel>
);
