import React, { useState } from 'react';
import { MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { DiagramLabel } from '@/core/diagram-engine/primitives/DiagramLabel';
import { SVGLibrary } from '@/core/diagram-engine/primitives/SVGLibrary';
import { VectorArrow } from '@/core/diagram-engine/primitives/VectorArrow';

export const M3InclinedPlaneResolver: React.FC = () => {
  const [angle, setAngle] = useState(30);
  const [showComponents, setShowComponents] = useState(true);

  const g = 9.8;
  const mass = 10;
  const weight = mass * g;
  const rad = (angle * Math.PI) / 180;
  const parallel = weight * Math.sin(rad);
  const perpendicular = weight * Math.cos(rad);
  const componentScale = 0.72;
  const weightScale = 0.92;
  const parallelVisualLength = 10 + 155 * Math.pow(Math.sin(rad), 0.9);
  const perpendicularVisualLength = 28 + 82 * Math.pow(Math.cos(rad), 0.75);

  const width = 700;
  const height = 430;
  const originX = 80;
  const originY = 310;
  const planeLength = 560;
  const planeEndX = originX + planeLength * Math.cos(rad);
  const planeEndY = originY - planeLength * Math.sin(rad);

  const blockPosRatio = 0.52;
  const blockX = originX + planeLength * blockPosRatio * Math.cos(rad);
  const blockY = originY - planeLength * blockPosRatio * Math.sin(rad);
  const normalX = -Math.sin(rad);
  const normalY = -Math.cos(rad);
  const reactionStartX = blockX + normalX * 48;
  const reactionStartY = blockY + normalY * 48;
  const reactionEndX = reactionStartX + normalX * perpendicular * componentScale;
  const reactionEndY = reactionStartY + normalY * perpendicular * componentScale;
  const toGlobal = (localX: number, localY: number) => ({
    x: blockX + localX * Math.cos(rad) + localY * Math.sin(rad),
    y: blockY - localX * Math.sin(rad) + localY * Math.cos(rad),
  });
  const reactionLabelPoint = toGlobal(0, -48 - perpendicular * componentScale - 18);
  const parallelLabelPoint = toGlobal(-parallelVisualLength - 34, -116);
  const perpendicularLabelPoint = toGlobal(46, perpendicularVisualLength + 30);
  const weightEndY = blockY + weight * weightScale;
  const labelX = (value: number) => `${(value / width) * 100}%`;
  const labelY = (value: number) => `${(value / height) * 100}%`;
  const nudgeX = width * 0.01;
  const nudgeY = height * 0.01;

  return (
    <DiagramPanel
      title="Fig. Dynamic Inclined Plane Resolver"
      analysis={
        <div className="space-y-4">
          <div className="p-3 bg-zinc-900/50 border border-zinc-800 rounded-lg">
            <h4 className="font-bold text-zinc-400 mb-2 text-sm uppercase tracking-wider">Parallel Component</h4>
            <div className="text-center bg-zinc-925 p-2 rounded border border-zinc-800/60">
              <MathText content={`mg \\sin\\theta = ${parallel.toFixed(1)}\\operatorname{N}`} noMargin />
            </div>
          </div>
          <div className="p-3 bg-zinc-900/50 border border-zinc-800 rounded-lg">
            <h4 className="font-bold text-emerald-400 mb-2 text-sm uppercase tracking-wider">Perpendicular Component</h4>
            <div className="text-center bg-zinc-925 p-2 rounded border border-zinc-800/60">
              <MathText content={`mg \\cos\\theta = ${perpendicular.toFixed(1)}\\operatorname{N}`} noMargin />
            </div>
          </div>
           <div className="p-3 bg-zinc-900/50 border border-zinc-800 rounded-lg">
            <h4 className="font-bold text-emerald-400 mb-2 text-sm uppercase tracking-wider">Normal Reaction</h4>
            <div className="text-center bg-zinc-925 p-2 rounded border border-zinc-800/60">
              <MathText content={`R = mg \\cos\\theta = ${perpendicular.toFixed(1)}\\operatorname{N}`} noMargin />
            </div>
            <p className="text-xs text-zinc-500 italic mt-2 text-center">Assuming no other perpendicular forces.</p>
          </div>
          <div className="p-3 bg-rose-950/30 border border-rose-900/40 rounded-lg text-sm text-rose-300">
            <strong className="font-bold text-rose-400">CCEA Exam Pitfall:</strong> Do not draw the weight vector acting diagonally down the slope. Weight is a gravitational force and is always vertical.
          </div>
        </div>
      }
    >
      <div className="w-full flex flex-col items-center">
        <div className="w-full max-w-md flex flex-col gap-3 mb-6 rounded-lg border border-zinc-800 bg-zinc-900/50 p-3">
          <div className="flex items-center gap-4">
            <label htmlFor="angle-slider" className="text-sm font-medium text-zinc-300 whitespace-nowrap">
              Angle <MathText content="\\theta" className="inline [&_p]:inline" />
            </label>
            <input
              id="angle-slider"
              type="range"
              min="0"
              max="60"
              value={angle}
              onChange={(e) => setAngle(Number(e.target.value))}
              className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer"
            />
            <span className="text-sm font-mono text-zinc-400 w-12 text-right">{angle}°</span>
          </div>
          <label className="flex items-center space-x-2 cursor-pointer text-sm text-zinc-300 self-start">
            <input
              type="checkbox"
              checked={showComponents}
              onChange={() => setShowComponents(prev => !prev)}
              className="form-checkbox h-4 w-4 rounded bg-zinc-800 border-zinc-700 text-zinc-500 focus:ring-zinc-500"
            />
            <span>Show resolved components</span>
          </label>
        </div>

        <div className="relative w-full max-w-3xl aspect-70/43 rounded-xl border border-zinc-800/60 bg-zinc-925 shadow-inner overflow-hidden">
          <SVGLibrary />
          <svg viewBox={`0 0 ${width} ${height}`} className="absolute inset-0 h-full w-full" overflow="visible" shapeRendering="geometricPrecision">
            <line x1={originX} y1={originY} x2={Math.min(660, planeEndX)} y2={originY} stroke="#3f3f46" strokeWidth="1.5" strokeDasharray="7 8" />
            <line x1={originX} y1={originY} x2={planeEndX} y2={planeEndY} stroke="#475569" strokeWidth="5" strokeLinecap="round" />

            <g stroke="#3f3f46" strokeWidth="2" opacity="0.5">
              {Array.from({ length: 10 }).map((_, index) => {
                const markX = originX + 48 + index * 42;
                const markY = originY - (markX - originX) * Math.tan(rad);
                return <line key={index} x1={markX} y1={markY + 10} x2={markX - 24} y2={markY + 34} />;
              })}
            </g>

            <path
              d={`M ${originX + 56} ${originY} A 56 56 0 0 0 ${originX + 56 * Math.cos(rad)} ${originY - 56 * Math.sin(rad)}`}
              stroke="#a1a1aa"
              strokeWidth="2"
              fill="none"
            />

            <g transform={`translate(${blockX}, ${blockY}) rotate(${-angle})`}>
              <rect x="-44" y="-48" width="88" height="48" rx="6" fill="#18181b" stroke="#94a3b8" strokeWidth="2" />
              <line x1="-54" y1="0" x2="54" y2="0" stroke="#a1a1aa" strokeWidth="2" opacity="0.5" />
              <VectorArrow x1={0} y1={-48} x2={0} y2={-48 - perpendicular * componentScale} type="reaction" strokeWidth={3.2} />

              {showComponents && (
                <>
                  <VectorArrow x1={0} y1={-18} x2={-parallelVisualLength} y2={-18} type="friction" dashed strokeWidth={2.8} />
                  <VectorArrow x1={0} y1={-18} x2={0} y2={perpendicularVisualLength} type="friction" dashed strokeWidth={2.8} />
                </>
              )}
            </g>

            <VectorArrow x1={blockX} y1={blockY} x2={blockX} y2={weightEndY} type="weight" strokeWidth={3.4} />
          </svg>

          <DiagramLabel x={labelX(originX + 76)} y={labelY(originY - 16)} text="\\theta" className="text-zinc-300" />

          <DiagramLabel x={labelX(reactionLabelPoint.x + 12 - 5 * nudgeX)} y={labelY(reactionLabelPoint.y - 7 * nudgeY)}>
            <div className="rounded-md border border-emerald-500/20 bg-zinc-950/70 px-3 py-1 text-emerald-300 shadow-xl">
              <MathText content="R" noMargin />
            </div>
          </DiagramLabel>

          {showComponents && (
            <>
              <DiagramLabel x={labelX(parallelLabelPoint.x - 5 * nudgeX)} y={labelY(parallelLabelPoint.y + 10 * nudgeY)}>
                <div className="rounded-md border border-amber-500/20 bg-zinc-950/70 px-3 py-1 text-amber-300 shadow-xl">
                  <MathText content="mg\\sin\\theta" noMargin />
                </div>
              </DiagramLabel>

              <DiagramLabel x={labelX(perpendicularLabelPoint.x - 7 * nudgeX)} y={labelY(perpendicularLabelPoint.y)}>
                <div className="rounded-md border border-amber-500/20 bg-zinc-950/70 px-3 py-1 text-amber-300 shadow-xl">
                  <MathText content="mg\\cos\\theta" noMargin />
                </div>
              </DiagramLabel>
            </>
          )}

          <DiagramLabel x={labelX(blockX + 58 - 12 * nudgeX)} y={labelY(weightEndY + 22 - 2 * nudgeY)}>
            <div className="rounded-md border border-rose-500/20 bg-zinc-950/70 px-3 py-1 text-rose-300 shadow-xl">
              <MathText content="mg" noMargin />
            </div>
          </DiagramLabel>
        </div>
      </div>
    </DiagramPanel>
  );
};
