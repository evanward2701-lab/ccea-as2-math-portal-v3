import React, { useState } from 'react';
import { DiagramPanel } from '../../DiagramPanel';
import { MathText } from '../../MathText';
import { cn } from '@/lib/utils';

export const S3DynamicVennSpaceEngine: React.FC = () => {
  const [separation, setSeparation] = useState(45); // 0 (concentric) to 80 (separate)

  const pA = 0.4; // Fixed probability of A
  const pB = 0.5; // Fixed probability of B

  // Calculate intersection based on separation
  // When separation is 0, intersection is max(pA, pB) (or min(pA, pB) if we want to be precise about overlap area)
  // When separation is 80, intersection is 0
  const maxPossibleIntersection = Math.min(pA, pB); // Theoretical max overlap
  const currentIntersection = Math.max(0, maxPossibleIntersection * (1 - separation / 80));

  const union = pA + pB - currentIntersection;
  const isMutuallyExclusive = currentIntersection < 0.01; // Threshold for visual "mutually exclusive"

  // SVG geometry
  const svgWidth = 560;
  const svgHeight = 320;
  const radius = 68;
  const centerY = svgHeight / 2;
  const centerX = svgWidth / 2;

  // Adjust circle positions based on separation
  const circleAX = centerX - separation;
  const circleBX = centerX + separation;

  return (
    <DiagramPanel
      title="Fig. Dynamic Venn Space Engine"
      analysis={
        <div className="space-y-4">
          <p className="text-sm text-slate-400 italic">
            The Addition Law accounts for the overlap (intersection) between events. Adjust the separation to see how the intersection affects the union.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-slate-900/50 border border-slate-800 rounded-lg">
              <h4 className="font-bold text-sky-400 mb-2 text-sm uppercase tracking-wider">Addition Law</h4>
              <div className="text-center bg-slate-950 p-2 rounded border border-slate-800/60">
                <MathText content="P(A \cup B) = P(A) + P(B) - P(A \cap B)" />
              </div>
            </div>
            <div className="p-3 bg-slate-900/50 border border-slate-800 rounded-lg">
              <h4 className="font-bold text-emerald-400 mb-2 text-sm uppercase tracking-wider">Probabilities</h4>
              <div className="text-center bg-slate-950 p-2 rounded border border-slate-800/60 space-y-1">
                <MathText content={`P(A) = ${pA.toFixed(1)}`} />
                <MathText content={`P(B) = ${pB.toFixed(1)}`} />
                <MathText content={`P(A \\cap B) = ${currentIntersection.toFixed(2)}`} />
                <MathText content={`P(A \\cup B) = ${union.toFixed(2)}`} />
              </div>
            </div>
          </div>
          <div className="p-3 bg-rose-950/30 border border-rose-900/40 rounded-lg text-sm text-rose-300">
            <strong className="font-bold text-rose-400">CCEA Exam Pitfall:</strong> Never use <MathText content="P(A \cup B) = P(A) + P(B)" className="inline [&_p]:inline" /> unless the events are explicitly stated to be mutually exclusive (i.e., <MathText content="P(A \cap B) = 0" className="inline [&_p]:inline" />).
          </div>
        </div>
      }
    >
      <div className="w-full flex flex-col items-center">
        <div className="w-full max-w-md flex items-center gap-4 mb-8 rounded-lg border border-slate-800 bg-slate-900/50 p-3">
          <label htmlFor="separation-slider" className="text-sm font-medium text-slate-300 whitespace-nowrap">
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
            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
          />
          <span className="text-sm font-mono text-sky-400 w-12 text-right">{separation}</span>
        </div>

        <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-auto max-w-2xl" overflow="visible" shapeRendering="geometricPrecision">
          {/* Universal Set Rectangle */}
          <rect x="20" y="20" width={svgWidth - 40} height={svgHeight - 40} fill="#0f172a" stroke="#334155" strokeWidth="2" rx="8" />
          <text x="30" y="40" fill="#94a3b8" fontSize="16" fontFamily="serif" fontStyle="italic">S</text>

          {/* Event A Circle */}
          <circle cx={circleAX} cy={centerY} r={radius} fill="#f59e0b" fillOpacity="0.3" stroke="#f59e0b" strokeWidth="2" />
          <text x={circleAX - radius - 15} y={centerY - radius - 10} fill="#f59e0b" fontSize="14" fontWeight="bold"><MathText content="A" /></text>

          {/* Event B Circle */}
          <circle cx={circleBX} cy={centerY} r={radius} fill="#10b981" fillOpacity="0.3" stroke="#10b981" strokeWidth="2" style={{ mixBlendMode: 'screen' }} />
          <text x={circleBX + radius + 5} y={centerY - radius - 10} fill="#10b981" fontSize="14" fontWeight="bold"><MathText content="B" /></text>

          {/* Intersection Label */}
          {!isMutuallyExclusive && (
            <foreignObject x={centerX - 40} y={centerY - 15} width="80" height="30">
              <div className="text-center text-sky-400 text-sm font-bold"><MathText content="A \cap B" /></div>
            </foreignObject>
          )}

          {isMutuallyExclusive && (
            <foreignObject x={centerX - 100} y={centerY - 15} width="200" height="30">
              <div className="text-center text-rose-400 text-sm font-bold">Mutually Exclusive</div>
            </foreignObject>
          )}
        </svg>
      </div>
    </DiagramPanel>
  );
};