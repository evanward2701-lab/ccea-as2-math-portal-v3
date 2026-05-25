import React, { useState } from 'react';
import { MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { cn } from '@/core/utils/cn';
import { DiagramLabel } from '@/core/diagram-engine/DiagramLabel';

export const S3ProbabilityTreeEngine: React.FC = () => {
  const [independent, setIndependent] = useState(true);
  const [selectedPath, setSelectedPath] = useState<'RR' | 'RB' | 'BR' | 'BB' | null>(null);

  const initialRed = 3;
  const initialBlue = 2;
  const initialTotal = initialRed + initialBlue;

  const pR1 = initialRed / initialTotal;
  const pB1 = initialBlue / initialTotal;

  let pR2_afterR, pB2_afterR, pR2_afterB, pB2_afterB;

  if (independent) {
    pR2_afterR = pR1;
    pB2_afterR = pB1;
    pR2_afterB = pR1;
    pB2_afterB = pB1;
  } else {
    pR2_afterR = 2 / 4;
    pB2_afterR = 2 / 4;
    pR2_afterB = 3 / 4;
    pB2_afterB = 1 / 4;
  }

  const formatProb = (prob: number) => {
    const fraction = `${Math.round(prob * initialTotal)}/${initialTotal}`;
    if (!independent) {
      if (prob === pR2_afterR && prob === pB2_afterR) return '2/4';
      if (prob === pR2_afterB && prob === pB2_afterB) return '3/4';
      if (prob === pB2_afterB) return '1/4';
    }
    return fraction;
  };

  const calculatePathProb = (path: 'RR' | 'RB' | 'BR' | 'BB') => {
    let prob = 0;
    if (path === 'RR') prob = pR1 * pR2_afterR;
    else if (path === 'RB') prob = pR1 * pB2_afterR;
    else if (path === 'BR') prob = pB1 * pR2_afterB;
    else if (path === 'BB') prob = pB1 * pB2_afterB;
    return prob.toFixed(3);
  };

  return (
    <DiagramPanel
      title="Fig. Auto-Calculating Probability Tree"
      analysis={
        <div className="space-y-4">
          <p className="text-sm text-zinc-400 italic">
            Tree diagrams visualize multi-stage experiments. Observe how probabilities change when events are dependent (without replacement).
          </p>
          <div className="p-3 bg-zinc-900/50 border border-zinc-800 rounded-lg">
            <h4 className="font-bold text-zinc-400 mb-2 text-sm uppercase tracking-wider">Key Rules</h4>
            <ul className="list-disc list-inside text-sm text-zinc-300 space-y-1">
              <li>Multiply probabilities along branches (AND).</li>
              <li>Add probabilities of separate final paths (OR).</li>
            </ul>
          </div>
          <div className="p-3 bg-rose-950/30 border border-rose-900/40 rounded-lg text-sm text-rose-300">
            <strong className="font-bold text-rose-400">CCEA Exam Pitfall:</strong> For "without replacement" scenarios, the denominator (total items remaining) and numerator (items of a specific type remaining) change for the second stage.
          </div>
        </div>
      }
    >
      <div className="w-full flex flex-col items-center">
        <div className="flex space-x-2 mb-8 p-1 bg-zinc-900 border border-zinc-800 rounded-lg">
          <button
            onClick={() => setIndependent(true)}
            className={cn(
              "px-4 py-1.5 text-xs font-bold rounded-md transition-colors",
              independent ? 'bg-emerald-500 text-zinc-950' : 'bg-transparent text-zinc-400 hover:bg-zinc-800'
            )}
          >
            Independent (With Replacement)
          </button>
          <button
            onClick={() => setIndependent(false)}
            className={cn(
              "px-4 py-1.5 text-xs font-bold rounded-md transition-colors",
              !independent ? 'bg-amber-500 text-zinc-950' : 'bg-transparent text-zinc-400 hover:bg-zinc-800'
            )}
          >
            Dependent (Without Replacement)
          </button>
        </div>

        <div className="relative w-full aspect-62/36 max-w-3xl mx-auto">
          <svg viewBox="0 0 620 360" className="absolute inset-0 w-full h-full" overflow="visible" shapeRendering="geometricPrecision">
            {/* Start Node */}
            <circle cx="100" cy="180" r="15" fill="#141417" stroke="#a1a1aa" strokeWidth="2" />
            <text x="100" y="185" textAnchor="middle" fill="#e2e8f0" fontSize="14">Start</text>

            {/* First Stage Branches */}
            <line x1="100" y1="180" x2="250" y2="100" stroke="#64748b" strokeWidth="2" />
            <text x="175" y="130" textAnchor="middle" fill="#f59e0b" fontSize="14"><MathText content={`${initialRed}/${initialTotal}`} /></text>
            <line x1="100" y1="180" x2="250" y2="260" stroke="#64748b" strokeWidth="2" />
            <text x="175" y="230" textAnchor="middle" fill="#a1a1aa" fontSize="14"><MathText content={`${initialBlue}/${initialTotal}`} /></text>

            {/* First Stage Nodes */}
            <circle cx="250" cy="100" r="10" fill="#141417" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="250" y="105" textAnchor="middle" fill="#e2e8f0" fontSize="12">R</text>
            <circle cx="250" cy="260" r="10" fill="#141417" stroke="#a1a1aa" strokeWidth="1.5" />
            <text x="250" y="265" textAnchor="middle" fill="#e2e8f0" fontSize="12">B</text>

            {/* Second Stage Branches (after Red) */}
            <line x1="250" y1="100" x2="400" y2="60" stroke="#64748b" strokeWidth="2" />
            <text x="325" y="75" textAnchor="middle" fill="#f59e0b" fontSize="14"><MathText content={formatProb(pR2_afterR)} /></text>
            <line x1="250" y1="100" x2="400" y2="140" stroke="#64748b" strokeWidth="2" />
            <text x="325" y="125" textAnchor="middle" fill="#a1a1aa" fontSize="14"><MathText content={formatProb(pB2_afterR)} /></text>

            {/* Second Stage Branches (after Blue) */}
            <line x1="250" y1="260" x2="400" y2="220" stroke="#64748b" strokeWidth="2" />
            <text x="325" y="235" textAnchor="middle" fill="#f59e0b" fontSize="14"><MathText content={formatProb(pR2_afterB)} /></text>
            <line x1="250" y1="260" x2="400" y2="300" stroke="#64748b" strokeWidth="2" />
            <text x="325" y="285" textAnchor="middle" fill="#a1a1aa" fontSize="14"><MathText content={formatProb(pB2_afterB)} /></text>

            {/* End Nodes */}
            <circle cx="400" cy="60" r="10" fill="#141417" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="400" y="65" textAnchor="middle" fill="#e2e8f0" fontSize="12">R</text>
            <circle cx="400" cy="140" r="10" fill="#141417" stroke="#a1a1aa" strokeWidth="1.5" />
            <text x="400" y="145" textAnchor="middle" fill="#e2e8f0" fontSize="12">B</text>
            <circle cx="400" cy="220" r="10" fill="#141417" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="400" y="225" textAnchor="middle" fill="#e2e8f0" fontSize="12">R</text>
            <circle cx="400" cy="300" r="10" fill="#141417" stroke="#a1a1aa" strokeWidth="1.5" />
            <text x="400" y="305" textAnchor="middle" fill="#e2e8f0" fontSize="12">B</text>

            {/* Highlighted Path */}
            {selectedPath === 'RR' && <polyline points="100,180 250,100 400,60" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />}
            {selectedPath === 'RB' && <polyline points="100,180 250,100 400,140" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />}
            {selectedPath === 'BR' && <polyline points="100,180 250,260 400,220" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />}
            {selectedPath === 'BB' && <polyline points="100,180 250,260 400,300" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />}
          </svg>

          <DiagramLabel x="67.7%" y="13.9%">
            <div className={cn("text-xs cursor-pointer", selectedPath === 'RR' ? 'text-emerald-400 font-bold' : 'text-zinc-400')} onClick={() => setSelectedPath('RR')}>
              P(R then R) = {calculatePathProb('RR')}
            </div>
          </DiagramLabel>
          <DiagramLabel x="67.7%" y="36.1%">
            <div className={cn("text-xs cursor-pointer", selectedPath === 'RB' ? 'text-emerald-400 font-bold' : 'text-zinc-400')} onClick={() => setSelectedPath('RB')}>
              P(R then B) = {calculatePathProb('RB')}
            </div>
          </DiagramLabel>
          <DiagramLabel x="67.7%" y="58.3%">
            <div className={cn("text-xs cursor-pointer", selectedPath === 'BR' ? 'text-emerald-400 font-bold' : 'text-zinc-400')} onClick={() => setSelectedPath('BR')}>
              P(B then R) = {calculatePathProb('BR')}
            </div>
          </DiagramLabel>
          <DiagramLabel x="67.7%" y="80.6%">
            <div className={cn("text-xs cursor-pointer", selectedPath === 'BB' ? 'text-emerald-400 font-bold' : 'text-zinc-400')} onClick={() => setSelectedPath('BB')}>
              P(B then B) = {calculatePathProb('BB')}
            </div>
          </DiagramLabel>
        </div>
      </div>
    </DiagramPanel>
  );
};
