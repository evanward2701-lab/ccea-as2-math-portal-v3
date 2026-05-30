import React, { useState } from 'react';
import { MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { DiagramLabel } from '@/core/diagram-engine/primitives/DiagramLabel';
import { SVGLibrary } from '@/core/diagram-engine/primitives/SVGLibrary';
import { VectorArrow } from '@/core/diagram-engine/primitives/VectorArrow';
import { cn } from '@/core/utils/cn';

export const M3FrictionSimulator: React.FC = () => {
  const [appliedForce, setAppliedForce] = useState(30);
  const [mu, setMu] = useState(0.5);

  const mass = 10;
  const g = 9.8;
  const weight = mass * g;
  const reaction = weight;
  const limitingFriction = mu * reaction;
  const isSliding = appliedForce > limitingFriction;
  const actualFriction = isSliding ? limitingFriction : appliedForce;
  const resultantForce = appliedForce - actualFriction;
  const acceleration = resultantForce / mass;

  const arrowScale = 2;
  const blockLeftX = 250;
  const blockRightX = 350;
  const blockCenterY = 178;
  const pEndX = Math.min(540, blockRightX + appliedForce * arrowScale);
  const fEndX = Math.max(60, blockLeftX - actualFriction * arrowScale);

  return (
    <DiagramPanel
      title="Fig. Limiting Friction Simulator"
      analysis={
        <div className="space-y-4">
          <div className="p-3 bg-primary/5 border border-primary/20 rounded-lg">
            <h4 className="font-bold text-primary mb-2 text-sm uppercase tracking-wider">Limiting Friction</h4>
            <div className="text-center bg-card p-2 rounded border border-primary/20">
              <MathText content={`F_{max} = \\mu R = ${limitingFriction.toFixed(1)}\\operatorname{N}`} noMargin />
            </div>
          </div>
          <div className="p-3 bg-primary/5 border border-primary/20 rounded-lg">
            <h4 className="font-bold text-destructive mb-2 text-sm uppercase tracking-wider">Actual Friction</h4>
            <div className="text-center bg-card p-2 rounded border border-primary/20">
              <MathText content={`F = ${actualFriction.toFixed(1)}\\operatorname{N}`} noMargin />
            </div>
          </div>
          <div className="p-3 bg-primary/5 border border-primary/20 rounded-lg">
            <h4 className="font-bold text-muted-foreground mb-2 text-sm uppercase tracking-wider">Resultant Force & Acceleration</h4>
            <div className="text-center bg-card p-2 rounded border border-primary/20">
              <MathText content={`F_{res} = ${resultantForce.toFixed(1)}\\operatorname{N} \\implies a = ${acceleration.toFixed(2)}\\operatorname{m s^{-2}}`} noMargin />
            </div>
          </div>
          <div className="p-3 bg-destructive/30 border border-destructive/40 rounded-lg text-sm text-destructive">
            <strong className="font-bold text-destructive">CCEA Exam Pitfall:</strong> Do not automatically set friction equal to <MathText content="\\mu R" className="inline [&_p]:inline" />. This is only true when the object is on the point of moving (limiting equilibrium) or is already sliding.
          </div>
        </div>
      }
    >
      <div className="w-full flex flex-col items-center">
        <div className="w-full max-w-lg grid grid-cols-1 gap-4 mb-6 rounded-lg border border-primary/20 bg-primary/5 p-3">
          <div className="flex items-center gap-3">
            <label className="text-sm font-medium text-foreground w-32">Applied Force P</label>
            <input type="range" min="0" max="80" value={appliedForce} onChange={(e) => setAppliedForce(Number(e.target.value))} className="w-full h-2 bg-muted/50 rounded-lg appearance-none cursor-pointer" />
            <span className="text-sm font-mono text-muted-foreground w-16 text-right">{appliedForce.toFixed(1)} N</span>
          </div>
          <div className="flex items-center gap-3">
            <label className="text-sm font-medium text-foreground w-32">Friction Coeff. <MathText content="\\mu" className="inline [&_p]:inline" /></label>
            <input type="range" min="0.1" max="0.8" step="0.05" value={mu} onChange={(e) => setMu(Number(e.target.value))} className="w-full h-2 bg-muted/50 rounded-lg appearance-none cursor-pointer" />
            <span className="text-sm font-mono text-primary w-16 text-right">{mu.toFixed(2)}</span>
          </div>
        </div>

        <div className={cn(
          "px-4 py-1 mb-4 text-sm font-bold rounded-full border",
          isSliding ? "bg-destructive/10 border-destructive/30 text-destructive" : "bg-primary/10 border-primary/30 text-primary"
        )}>
          {isSliding ? 'Sliding: F = μR' : 'Static Equilibrium: F ≤ μR'}
        </div>

        <div className="relative w-full max-w-3xl aspect-60/30 rounded-xl border border-primary/20 bg-card shadow-inner overflow-hidden">
          <SVGLibrary />
          <svg viewBox="0 0 600 300" className="absolute inset-0 h-full w-full" overflow="visible" shapeRendering="geometricPrecision">

            <line x1="50" y1="215" x2="550" y2="215" stroke="#475569" strokeWidth="3" />
            {Array.from({ length: 25 }).map((_, i) => (
              <line key={i} x1={50 + i * 20} y1="215" x2={62 + i * 20} y2="222" stroke="#3f3f46" strokeWidth="1.4" />
            ))}

            <rect x="250" y="140" width="100" height="75" rx="6" fill="#1e293b" stroke="#94a3b8" strokeWidth="2" />
            <VectorArrow x1={300} y1={140} x2={300} y2={70} type="reaction" strokeWidth={3} />
            <VectorArrow x1={300} y1={215} x2={300} y2={280} type="weight" strokeWidth={3} />

            <VectorArrow x1={blockRightX} y1={blockCenterY} x2={pEndX} y2={blockCenterY} type="reaction" strokeWidth={3.2} />

            {actualFriction > 0.1 && (
              <VectorArrow x1={blockLeftX} y1={blockCenterY} x2={fEndX} y2={blockCenterY} type="weight" strokeWidth={3.2} />
            )}

            <VectorArrow x1={378} y1={78} x2={448} y2={78} type="accel" marker="acceleration" strokeWidth={2.8} />
          </svg>

          <DiagramLabel x="49%" y="56%">
            <div className="text-xl font-serif font-bold text-foreground">m</div>
          </DiagramLabel>

          <DiagramLabel x="47%" y="10%">
            <div className="rounded-md border border-primary/20 bg-card px-3 py-1 text-primary shadow-xl">
              <MathText content="R" noMargin />
            </div>
          </DiagramLabel>

          <DiagramLabel x="53%" y="85%">
            <div className="rounded-md border border-destructive/20 bg-card px-3 py-1 text-destructive shadow-xl">
              <MathText content="W = mg" noMargin />
            </div>
          </DiagramLabel>

          <DiagramLabel x={`${Math.min(92, (pEndX / 600) * 100 + 3)}%`} y="53%">
            <div className="rounded-md border border-primary/20 bg-card px-3 py-1 text-primary shadow-xl">
              <MathText content="P" noMargin />
            </div>
          </DiagramLabel>

          {actualFriction > 0.1 && (
            <DiagramLabel x={`${Math.max(8, (fEndX / 600) * 100 - 7)}%`} y="53%">
              <div className="rounded-md border border-destructive/20 bg-card px-3 py-1 text-destructive shadow-xl">
                <MathText content="F" noMargin />
              </div>
            </DiagramLabel>
          )}

          <DiagramLabel x="66%" y="11%">
            <div className="rounded-md border border-border bg-card px-3 py-1 text-foreground shadow-xl">
              <MathText content="a" noMargin />
            </div>
          </DiagramLabel>
        </div>
      </div>
    </DiagramPanel>
  );
};
