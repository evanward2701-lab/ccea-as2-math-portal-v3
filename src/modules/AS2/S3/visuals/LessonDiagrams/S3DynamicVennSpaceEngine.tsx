import React, { useState } from 'react';
import { MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { DiagramLabel } from '@/core/diagram-engine/primitives/DiagramLabel';
import { cn } from '@/core/utils/cn';

export const S3DynamicVennSpaceEngine: React.FC = () => {
  const [separation, setSeparation] = useState(45);

  const pA = 0.4;
  const pB = 0.5;

  const maxPossibleIntersection = Math.min(pA, pB);
  const currentIntersection = Math.max(0, maxPossibleIntersection * (1 - separation / 80));

  const union = pA + pB - currentIntersection;
  const isMutuallyExclusive = currentIntersection < 0.01;

  const svgWidth = 560;
  const svgHeight = 320;
  const radius = 68;
  const centerY = svgHeight / 2;
  const centerX = svgWidth / 2;

  const circleAX = centerX - separation;
  const circleBX = centerX + separation;

  return (
    <DiagramPanel
      title="Fig. Dynamic Venn Space Engine"
      analysis={
        <div className="space-y-4">
          <p className="text-sm text-zinc-400 italic">
            The Addition Law accounts for the overlap (intersection) between events. Adjust the separation to see how the intersection affects the union.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-zinc-900/50 border border-zinc-800 rounded-lg">
              <h4 className="font-bold text-zinc-400 mb-2 text-sm uppercase tracking-wider">Addition Law</h4>
              <div className="text-center bg-[#141416] p-2 rounded border border-zinc-800/60">
                <MathText content="P(A \cup B) = P(A) + P(B) - P(A \cap B)" />
              </div>
            </div>
            <div className="p-3 bg-zinc-900/50 border border-zinc-800 rounded-lg">
              <h4 className="font-bold text-emerald-400 mb-2 text-sm uppercase tracking-wider">Probabilities</h4>
              <div className="text-center bg-[#141416] p-2 rounded border border-zinc-800/60 space-y-1">
                <MathText content={`P(A) = ${pA.toFixed(1)}`} />
                <MathText content={`P(B) = ${pB.toFixed(1)}`} />
                <MathText content={`P(A \\cap B) = ${currentIntersection.toFixed(2)}`} />
                <MathText content={`P(A \\cup B) = ${union.toFixed(2)}`} />
              </div>
            </div>
          </div>
          <div className="p-3 bg-rose-950/30 border border-rose-900/40 rounded-lg text-sm text-rose-300">
            <strong className="font-bold text-rose-400">CCEA Exam Pitfall:</strong> Never use <MathText content="P(A \cup B) = P(A) + P(B)" className="inline [&_p]:inline" /> unless the events are explicitly stated to be mutually exclusive.
          </div>
        </div>
      }
    >
      <div className="w-full flex flex-col items-center">
        <div className="w-full max-w-md flex items-center gap-4 mb-8 rounded-lg border border-zinc-800 bg-zinc-900/50 p-3">
          <label htmlFor="separation-slider" className="text-sm font-medium text-zinc-300 whitespace-nowrap">
            Separation
          </label>
          <input
            id="separation-slider"
            type="range"
            min="0"
            max="80"
            step="1"
            value={separation}
            onChange={(e) => setSeparation(Number(e.target.value))}
            className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer"
          />
          <span className="text-sm font-mono text-zinc-400 w-12 text-right">{separation}</span>
        </div>

        <div className="relative w-full aspect-56/32 max-w-2xl mx-auto">
          <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="absolute inset-0 w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" overflow="visible">
            {/* Universal Set Rectangle */}
            <rect x="20" y="20" width={svgWidth - 40} height={svgHeight - 40} fill="#141417" stroke="#3f3f46" strokeWidth="2" rx="8" />
            <text x="30" y="40" fill="#94a3b8" fontSize="16" fontFamily="serif" fontStyle="italic">S</text>

            {/* Event A Circle */}
            <circle cx={circleAX} cy={centerY} r={radius} fill="#f59e0b" fillOpacity="0.3" stroke="#f59e0b" strokeWidth="2" />
            <text x={circleAX - radius - 15} y={centerY - radius - 10} fill="#f59e0b" fontSize="14" fontWeight="bold"><MathText content="A" /></text>

            {/* Event B Circle */}
            <circle cx={circleBX} cy={centerY} r={radius} fill="#10b981" fillOpacity="0.3" stroke="#10b981" strokeWidth="2" style={{ mixBlendMode: 'screen' }} />
            <text x={circleBX + radius + 5} y={centerY - radius - 10} fill="#10b981" fontSize="14" fontWeight="bold"><MathText content="B" /></text>
          </svg>

          {!isMutuallyExclusive && (
            <DiagramLabel position={{ left: '50%', top: '50%' }} className="-tranzinc-x-1/2 -tranzinc-y-1/2">
              <div className="text-zinc-400 text-sm font-bold"><MathText content="A \cap B" /></div>
            </DiagramLabel>
          )}

          {isMutuallyExclusive && (
            <DiagramLabel position={{ left: '50%', top: '50%' }} className="-tranzinc-x-1/2 -tranzinc-y-1/2">
              <div className="text-rose-400 text-sm font-bold">Mutually Exclusive</div>
            </DiagramLabel>
          )}
        </div>
      </div>
    </DiagramPanel>
  );
};
