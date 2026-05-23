import React, { useState } from 'react';
import { MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

export const M3InclinedPlaneResolver: React.FC = () => {
  const [angle, setAngle] = useState(30);
  const [showComponents, setShowComponents] = useState(true);

  const g = 9.8;
  const mass = 10;
  const weight = mass * g;
  const rad = (angle * Math.PI) / 180;
  const parallel = weight * Math.sin(rad);
  const perpendicular = weight * Math.cos(rad);
  const visualScale = 0.8;

  const width = 560;
  const height = 340;
  const originX = 100;
  const originY = 280;
  const planeLength = 400;
  const planeEndX = originX + planeLength * Math.cos(rad);
  const planeEndY = originY - planeLength * Math.sin(rad);

  const blockPosRatio = 0.5;
  const blockX = originX + planeLength * blockPosRatio * Math.cos(rad);
  const blockY = originY - planeLength * blockPosRatio * Math.sin(rad);

  return (
    <DiagramPanel
      title="Fig. Dynamic Inclined Plane Resolver"
      analysis={
        <div className="space-y-4">
          <div className="p-3 bg-zinc-900/50 border border-zinc-800 rounded-lg">
            <h4 className="font-bold text-zinc-400 mb-2 text-sm uppercase tracking-wider">Parallel Component</h4>
            <div className="text-center bg-[#141416] p-2 rounded border border-zinc-800/60">
              <MathText content={`mg \\sin\\theta = ${parallel.toFixed(1)}\\text{ N}`} />
            </div>
          </div>
          <div className="p-3 bg-zinc-900/50 border border-zinc-800 rounded-lg">
            <h4 className="font-bold text-emerald-400 mb-2 text-sm uppercase tracking-wider">Perpendicular Component</h4>
            <div className="text-center bg-[#141416] p-2 rounded border border-zinc-800/60">
              <MathText content={`mg \\cos\\theta = ${perpendicular.toFixed(1)}\\text{ N}`} />
            </div>
          </div>
           <div className="p-3 bg-zinc-900/50 border border-zinc-800 rounded-lg">
            <h4 className="font-bold text-emerald-400 mb-2 text-sm uppercase tracking-wider">Normal Reaction</h4>
            <div className="text-center bg-[#141416] p-2 rounded border border-zinc-800/60">
              <MathText content={`R = mg \\cos\\theta = ${perpendicular.toFixed(1)}\\text{ N}`} />
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
              Angle <MathText content="\theta" className="inline [&_p]:inline" />
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

        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto max-w-2xl" overflow="visible" shapeRendering="geometricPrecision">
          <defs>
            <marker id="ip-arrow-amber" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#f59e0b" /></marker>
            <marker id="ip-arrow-emerald" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#10b981" /></marker>
          </defs>

          {/* Plane */}
          <line x1={originX} y1={originY} x2={planeEndX} y2={planeEndY} stroke="#475569" strokeWidth="3" />
          <line x1={originX} y1={originY} x2={planeEndX} y2={originY} stroke="#3f3f46" strokeWidth="1.5" strokeDasharray="4 4" />
          <path d={`M ${originX + 40} ${originY} A 40 40 0 0 0 ${originX + 40 * Math.cos(rad)} ${originY - 40 * Math.sin(rad)}`} stroke="#94a3b8" strokeWidth="1.5" fill="none" />
          <text x={originX + 50} y={originY - 5} fill="#94a3b8" fontSize="14"><MathText content="\theta" /></text>

          {/* True Weight Vector (always vertical) */}
          <line x1={blockX} y1={blockY} x2={blockX} y2={blockY + weight * visualScale} stroke="#f43f5e" strokeWidth="2.5" markerEnd="url(#ip-arrow-amber)" />
          <text x={blockX + 5} y={blockY + weight * visualScale + 20} fill="#f43f5e" fontSize="14"><MathText content="mg" /></text>

          {/* Rotated group for components relative to the plane */}
          <g transform={`tranzinc(${blockX}, ${blockY}) rotate(${-angle})`}>
            {/* Block */}
            <rect x="-25" y="-40" width="50" height="40" rx="4" fill="#1e293b" stroke="#94a3b8" strokeWidth="1.5" />

            {/* Normal Reaction R */}
            <line x1="0" y1="-40" x2="0" y2={-40 - perpendicular * visualScale} stroke="#10b981" strokeWidth="2.5" markerEnd="url(#ip-arrow-emerald)" />
            <text x={10} y={-40 - perpendicular * visualScale - 5} fill="#10b981" fontSize="14"><MathText content="R" /></text>

            {showComponents && (
              <>
                {/* Perpendicular Component */}
                <line x1="0" y1="0" x2="0" y2={perpendicular * visualScale} stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3" markerEnd="url(#ip-arrow-amber)" />
                <text x={-80} y={perpendicular * visualScale * 0.5} fill="#f59e0b" fontSize="12" transform={`rotate(90 0 ${perpendicular * visualScale * 0.5})`} textAnchor="middle"><MathText content="mg \cos\\theta" /></text>

                {/* Parallel Component */}
                <line x1="0" y1="0" x2={-parallel * visualScale} y2="0" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3" markerEnd="url(#ip-arrow-amber)" />
                <text x={-parallel * visualScale * 0.5} y={-10} fill="#f59e0b" fontSize="12" textAnchor="middle"><MathText content="mg \sin\\theta" /></text>
              </>
            )}
          </g>
        </svg>
      </div>
    </DiagramPanel>
  );
};
