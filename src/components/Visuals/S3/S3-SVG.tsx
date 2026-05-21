import React from 'react';
import { MathText } from '../../MathText';
import { DiagramPanel } from '../../DiagramPanel';

export const VennMutExSVG: React.FC = () => (
  <DiagramPanel
    title="Fig 1. Venn Configurations"
    analysis={
      <div className="space-y-3">
        <div className="flex justify-around w-full max-w-md">
          <div className="text-center font-sans text-sm font-semibold text-emerald-400">
            Mutually Exclusive: <MathText content="P(A \cap B) = 0" className="inline [&_p]:inline [&_p]:m-0" />
          </div>
          <div className="text-center font-sans text-sm font-semibold text-rose-400">
            Intersecting: <MathText content="P(A \cap B) \neq 0" className="inline [&_p]:inline [&_p]:m-0" />
          </div>
        </div>
        <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg text-sm text-slate-300 leading-relaxed">
          If events are mutually exclusive, the subtraction component of the General Addition Law (<MathText content="- P(A \cap B)" className="inline [&_p]:inline [&_p]:m-0" />) becomes zero.
        </div>
        <div className="p-3 bg-rose-950/30 border border-rose-900/40 rounded text-sm text-rose-300">
          <strong className="block text-rose-400 not-italic uppercase text-[10px] mb-1">CCEA Exam Pitfall:</strong>
          Never assume <MathText content="P(A \cup B) = P(A) + P(B)" className="inline [&_p]:inline [&_p]:m-0" /> unless the events are explicitly stated to be mutually exclusive.
        </div>
      </div>
    }
  >
    <svg width="600" height="200" viewBox="0 0 600 220" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" overflow="visible">
      {/* Left Side: Mutually Exclusive */}
      <rect x="20" y="40" width="260" height="170" stroke="#334155" strokeWidth="2" fill="#0f172a" rx="4" />
      <text x="35" y="65" fill="#94a3b8" fontSize="16" fontFamily="serif" fontStyle="italic">E</text>
      
      <circle cx="100" cy="125" r="55" stroke="#10b981" strokeWidth="2" fill="#10b981" fillOpacity="0.05" className="hover:fill-opacity-10 transition-all duration-200" />
      <foreignObject x="85" y="110" width="30" height="30">
        <MathText content="A" className="text-emerald-400 text-center font-serif text-base" />
      </foreignObject>
      
      <circle cx="200" cy="125" r="55" stroke="#38bdf8" strokeWidth="2" fill="#38bdf8" fillOpacity="0.05" className="hover:fill-opacity-10 transition-all duration-200" />
      <foreignObject x="185" y="110" width="30" height="30">
        <MathText content="B" className="text-sky-400 text-center font-serif text-base" />
      </foreignObject>

      {/* Right Side: Intersecting */}
      <rect x="320" y="40" width="260" height="170" stroke="#334155" strokeWidth="2" fill="#0f172a" rx="4" />
      <text x="335" y="65" fill="#94a3b8" fontSize="16" fontFamily="serif" fontStyle="italic">E</text>
      
      <circle cx="410" cy="125" r="55" stroke="#10b981" strokeWidth="2" fill="#10b981" fillOpacity="0.05" />
      <circle cx="470" cy="125" r="55" stroke="#38bdf8" strokeWidth="2" fill="#38bdf8" fillOpacity="0.05" />
      
      {/* Shaded Intersection */}
      <path d="M440,81.3 A55,55 0 0,0 440,168.7 A55,55 0 0,0 440,81.3" fill="#f43f5e" fillOpacity="0.25" className="hover:fill-opacity-40 transition-all duration-100 cursor-help" />
      
      <foreignObject x="370" y="110" width="30" height="30">
        <MathText content="A" className="text-emerald-400 text-center font-serif text-base" />
      </foreignObject>
      <foreignObject x="500" y="110" width="30" height="30">
        <MathText content="B" className="text-sky-400 text-center font-serif text-base" />
      </foreignObject>
    </svg>
  </DiagramPanel>
);
export const TwoWayTableSVG: React.FC = () => (
  <DiagramPanel
    title="Fig 2. Two-Way Probability Table"
    analysis={
      <>
        <p className="text-sm text-slate-400 text-center italic mb-4 max-w-md mx-auto">
          Margin totals give single-event probabilities. Interior cells give intersection (AND) probabilities.
        </p>
        <div className="p-3 bg-rose-950/30 border border-rose-900/40 rounded text-sm text-rose-300 text-center">
          <strong className="block text-rose-400 not-italic uppercase text-[10px] mb-1">CCEA Exam Pitfall:</strong> Interior cross-cells ensure you do not use wrong row/column totals as conditional numerators.
        </div>
      </>
    }
  >
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse border border-slate-800 text-sm font-sans bg-slate-900 text-slate-300 text-center">
        <thead>
          <tr className="bg-slate-950 text-slate-400 border-b border-slate-800">
            <th className="p-3 border-r border-slate-800"></th>
            <th className="p-3 border-r border-slate-800 font-bold text-emerald-400">Event <MathText content="A" className="inline" /></th>
            <th className="p-3 border-r border-slate-800 font-bold text-amber-500">Event <MathText content="A'" className="inline" /> (Not A)</th>
            <th className="p-3 font-bold bg-slate-800/40 text-slate-200">Marginal Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-slate-800/50">
            <th className="p-3 border-r border-slate-800 font-bold bg-slate-950 text-sky-400 text-left pl-4">Event <MathText content="B" className="inline" /></th>
            <td className="p-3 border-r border-slate-800/50 italic bg-slate-900/20 hover:bg-slate-800/30 transition-colors"><MathText content="P(A \cap B)" /></td>
            <td className="p-3 border-r border-slate-800/50 italic bg-slate-900/20 hover:bg-slate-800/30 transition-colors"><MathText content="P(A' \cap B)" /></td>
            <td className="p-3 font-semibold bg-slate-800/20 text-slate-300"><MathText content="P(B)" /></td>
          </tr>
          <tr className="border-b border-slate-800">
            <th className="p-3 border-r border-slate-800 font-bold bg-slate-950 text-purple-400 text-left pl-4">Event <MathText content="B'" className="inline" /></th>
            <td className="p-3 border-r border-slate-800/50 italic bg-slate-900/20 hover:bg-slate-800/30 transition-colors"><MathText content="P(A \cap B')" /></td>
            <td className="p-3 border-r border-slate-800/50 italic bg-slate-900/20 hover:bg-slate-800/30 transition-colors"><MathText content="P(A' \cap B')" /></td>
            <td className="p-3 font-semibold bg-slate-800/20 text-slate-300"><MathText content="P(B')" /></td>
          </tr>
          <tr className="bg-slate-950/60">
            <th className="p-3 border-r border-slate-800 font-bold text-slate-400 text-left pl-4">Marginal Total</th>
            <td className="p-3 border-r border-slate-800/50 font-semibold bg-slate-800/10 text-slate-300"><MathText content="P(A)" /></td>
            <td className="p-3 border-r border-slate-800/50 font-semibold bg-slate-800/10 text-slate-300"><MathText content="P(A')" /></td>
            <td className="p-3 font-bold bg-emerald-500 text-slate-950 shadow-[inset_0_0_8px_rgba(0,0,0,0.2)]">
              <MathText content="1.0" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </DiagramPanel>
);

// Banked for later Bayes / total probability section. Do not render in current probability lesson.
export const BayesResolutionSVG: React.FC = () => (
  <DiagramPanel
    title="Fig 4. Conditional Partition Asset"
    analysis={
      <div className="space-y-4">
        <p className="text-sm text-slate-400 italic">
          The sample space is divided into mutually exclusive partitions (<MathText content="A_1, A_2, A_3" className="inline"/>).
        </p>
        <div className="p-4 bg-slate-950 rounded-lg border border-slate-800">
          <span className="text-sky-400 font-bold uppercase tracking-wider block mb-2 text-[10px]">Total Probability Law:</span>
          <div className="font-mono text-slate-300 text-sm">
            <MathText content="P(B) = P(A_1 \cap B) + P(A_2 \cap B) + P(A_3 \cap B)" />
          </div>
        </div>
        <p className="text-sm text-slate-400 italic">
          To isolate a conditional reverse path (Bayes' Theorem), compute the path ratio:
        </p>
        <div className="p-4 bg-slate-950 rounded-lg border border-emerald-900">
          <div className="font-mono text-emerald-400 text-base">
            <MathText content="P(A_1 | B) = \frac{P(A_1 \cap B)}{P(B)}" />
          </div>
        </div>
      </div>
    }
  >
    <svg width="600" height="180" viewBox="30 20 540 160" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" overflow="visible">
      {/* Sample Universe Block */}
      <rect x="40" y="30" width="520" height="120" stroke="#475569" strokeWidth="2" fill="#0f172a" rx="4"/>
      
      {/* Partitions */}
      <line x1="220" y1="30" x2="220" y2="150" stroke="#334155" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="400" y1="30" x2="400" y2="150" stroke="#334155" strokeWidth="1" strokeDasharray="4 4" />
      
      {/* Overlapping Target Event B */}
      <ellipse cx="300" cy="90" rx="180" ry="50" stroke="#f59e0b" strokeWidth="2" fill="#f59e0b" fillOpacity="0.08" />
      
      <foreignObject x="270" y="70" width="60" height="30">
        <MathText content="B" className="text-amber-400 text-center font-bold text-sm" />
      </foreignObject>
      
      {/* Mathematical Intersections */}
      <foreignObject x="80" y="90" width="100" height="30">
        <MathText content="A_1 \cap B" className="text-slate-400 text-center text-xs italic" />
      </foreignObject>
      <foreignObject x="250" y="105" width="100" height="30">
        <MathText content="A_2 \cap B" className="text-slate-400 text-center text-xs italic" />
      </foreignObject>
      <foreignObject x="430" y="90" width="100" height="30">
        <MathText content="A_3 \cap B" className="text-slate-400 text-center text-xs italic" />
      </foreignObject>
    </svg>
  </DiagramPanel>
);

import React, { useState } from 'react';
import { DiagramPanel } from '../../DiagramPanel';
import { MathText } from '../../MathText';
import { cn } from '@/lib/utils';

export const S3ProbabilityTreeEngine: React.FC = () => {
  const [independent, setIndependent] = useState(true);
  const [selectedPath, setSelectedPath] = useState<'RR' | 'RB' | 'BR' | 'BB' | null>(null);

  const initialRed = 3;
  const initialBlue = 2;
  const initialTotal = initialRed + initialBlue;

  // First draw probabilities
  const pR1 = initialRed / initialTotal;
  const pB1 = initialBlue / initialTotal;

  // Second draw probabilities (dependent on 'independent' state)
  let pR2_afterR, pB2_afterR, pR2_afterB, pB2_afterB;

  if (independent) {
    pR2_afterR = pR1;
    pB2_afterR = pB1;
    pR2_afterB = pR1;
    pB2_afterB = pB1;
  } else {
    // Without replacement
    // After drawing Red first: 2 Red, 2 Blue, Total 4
    pR2_afterR = 2 / 4;
    pB2_afterR = 2 / 4;
    // After drawing Blue first: 3 Red, 1 Blue, Total 4
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
          <p className="text-sm text-slate-400 italic">
            Tree diagrams visualize multi-stage experiments. Observe how probabilities change when events are dependent (without replacement).
          </p>
          <div className="p-3 bg-slate-900/50 border border-slate-800 rounded-lg">
            <h4 className="font-bold text-sky-400 mb-2 text-sm uppercase tracking-wider">Key Rules</h4>
            <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
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
        <div className="flex space-x-2 mb-8 p-1 bg-slate-900 border border-slate-800 rounded-lg">
          <button
            onClick={() => setIndependent(true)}
            className={cn(
              "px-4 py-1.5 text-xs font-bold rounded-md transition-colors",
              independent ? 'bg-emerald-500 text-slate-950' : 'bg-transparent text-slate-400 hover:bg-slate-800'
            )}
          >
            Independent (With Replacement)
          </button>
          <button
            onClick={() => setIndependent(false)}
            className={cn(
              "px-4 py-1.5 text-xs font-bold rounded-md transition-colors",
              !independent ? 'bg-amber-500 text-slate-950' : 'bg-transparent text-slate-400 hover:bg-slate-800'
            )}
          >
            Dependent (Without Replacement)
          </button>
        </div>

        <svg viewBox="0 0 620 360" className="w-full h-auto max-w-3xl" overflow="visible" shapeRendering="geometricPrecision">
          {/* Start Node */}
          <circle cx="100" cy="180" r="15" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
          <text x="100" y="185" textAnchor="middle" fill="#e2e8f0" fontSize="14">Start</text>

          {/* First Stage Branches */}
          <line x1="100" y1="180" x2="250" y2="100" stroke="#64748b" strokeWidth="2" />
          <text x="175" y="130" textAnchor="middle" fill="#f59e0b" fontSize="14"><MathText content={`${initialRed}/${initialTotal}`} /></text>
          <line x1="100" y1="180" x2="250" y2="260" stroke="#64748b" strokeWidth="2" />
          <text x="175" y="230" textAnchor="middle" fill="#38bdf8" fontSize="14"><MathText content={`${initialBlue}/${initialTotal}`} /></text>

          {/* First Stage Nodes */}
          <circle cx="250" cy="100" r="10" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="250" y="105" textAnchor="middle" fill="#e2e8f0" fontSize="12">R</text>
          <circle cx="250" cy="260" r="10" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="250" y="265" textAnchor="middle" fill="#e2e8f0" fontSize="12">B</text>

          {/* Second Stage Branches (after Red) */}
          <line x1="250" y1="100" x2="400" y2="60" stroke="#64748b" strokeWidth="2" />
          <text x="325" y="75" textAnchor="middle" fill="#f59e0b" fontSize="14"><MathText content={formatProb(pR2_afterR)} /></text>
          <line x1="250" y1="100" x2="400" y2="140" stroke="#64748b" strokeWidth="2" />
          <text x="325" y="125" textAnchor="middle" fill="#38bdf8" fontSize="14"><MathText content={formatProb(pB2_afterR)} /></text>

          {/* Second Stage Branches (after Blue) */}
          <line x1="250" y1="260" x2="400" y2="220" stroke="#64748b" strokeWidth="2" />
          <text x="325" y="235" textAnchor="middle" fill="#f59e0b" fontSize="14"><MathText content={formatProb(pR2_afterB)} /></text>
          <line x1="250" y1="260" x2="400" y2="300" stroke="#64748b" strokeWidth="2" />
          <text x="325" y="285" textAnchor="middle" fill="#38bdf8" fontSize="14"><MathText content={formatProb(pB2_afterB)} /></text>

          {/* End Nodes */}
          <circle cx="400" cy="60" r="10" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="400" y="65" textAnchor="middle" fill="#e2e8f0" fontSize="12">R</text>
          <circle cx="400" cy="140" r="10" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="400" y="145" textAnchor="middle" fill="#e2e8f0" fontSize="12">B</text>
          <circle cx="400" cy="220" r="10" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="400" y="225" textAnchor="middle" fill="#e2e8f0" fontSize="12">R</text>
          <circle cx="400" cy="300" r="10" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="400" y="305" textAnchor="middle" fill="#e2e8f0" fontSize="12">B</text>

          {/* Final Probabilities */}
          <foreignObject x="420" y="50" width="180" height="20">
            <div className={cn("text-xs", selectedPath === 'RR' ? 'text-emerald-400 font-bold' : 'text-slate-400')} onClick={() => setSelectedPath('RR')}>
              P(R then R) = {calculatePathProb('RR')}
            </div>
          </foreignObject>
          <foreignObject x="420" y="130" width="180" height="20">
            <div className={cn("text-xs", selectedPath === 'RB' ? 'text-emerald-400 font-bold' : 'text-slate-400')} onClick={() => setSelectedPath('RB')}>
              P(R then B) = {calculatePathProb('RB')}
            </div>
          </foreignObject>
          <foreignObject x="420" y="210" width="180" height="20">
            <div className={cn("text-xs", selectedPath === 'BR' ? 'text-emerald-400 font-bold' : 'text-slate-400')} onClick={() => setSelectedPath('BR')}>
              P(B then R) = {calculatePathProb('BR')}
            </div>
          </foreignObject>
          <foreignObject x="420" y="290" width="180" height="20">
            <div className={cn("text-xs", selectedPath === 'BB' ? 'text-emerald-400 font-bold' : 'text-slate-400')} onClick={() => setSelectedPath('BB')}>
              P(B then B) = {calculatePathProb('BB')}
            </div>
          </foreignObject>

          {/* Highlighted Path */}
          {selectedPath === 'RR' && <polyline points="100,180 250,100 400,60" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />}
          {selectedPath === 'RB' && <polyline points="100,180 250,100 400,140" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />}
          {selectedPath === 'BR' && <polyline points="100,180 250,260 400,220" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />}
          {selectedPath === 'BB' && <polyline points="100,180 250,260 400,300" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />}
        </svg>
      </div>
    </DiagramPanel>
  );
};

import React, { useState } from 'react';
import { DiagramPanel } from '../../DiagramPanel';
import { MathText } from '../../MathText';
import { cn } from '@/lib/utils';

type Mode = 'full' | 'artGivenMale' | 'techGivenFemale' | 'independence';

const tableData = {
  male: { art: 12, tech: 18, total: 30 },
  female: { art: 20, tech: 10, total: 30 },
  total: { art: 32, tech: 28, total: 60 },
};

export const S3ConditionalMatrixReducer: React.FC = () => {
  const [mode, setMode] = useState<Mode>('full');

  const renderCell = (value: number | string, row: string, col: string, isTotal: boolean = false) => {
    let cellClass = 'p-3 border-r border-slate-800/50 italic bg-slate-900/20';
    let textClass = 'text-slate-300';

    if (isTotal) {
      cellClass = 'p-3 font-semibold bg-slate-800/20';
      textClass = 'text-slate-300';
      if (row === 'total' && col === 'total') {
        cellClass = 'p-3 font-bold bg-emerald-500 text-slate-950 shadow-[inset_0_0_8px_rgba(0,0,0,0.2)]';
        textClass = 'text-slate-950';
      }
    }

    let opacityClass = 'opacity-100';
    let highlightClass = '';

    if (mode === 'artGivenMale') {
      if (row === 'male') {
        opacityClass = 'opacity-100';
        if (col === 'art') highlightClass = 'bg-emerald-950/40 border-emerald-500/40';
        else if (col === 'tech') highlightClass = 'bg-amber-950/30 border-amber-500/30'; // Highlight the given row
        else if (col === 'total') highlightClass = 'bg-amber-950/30 border-amber-500/30';
      } else {
        opacityClass = 'opacity-40';
      }
    } else if (mode === 'techGivenFemale') {
      if (row === 'female') {
        opacityClass = 'opacity-100';
        if (col === 'tech') highlightClass = 'bg-emerald-950/40 border-emerald-500/40';
        else if (col === 'art') highlightClass = 'bg-amber-950/30 border-amber-500/30'; // Highlight the given row
        else if (col === 'total') highlightClass = 'bg-amber-950/30 border-amber-500/30';
      } else {
        opacityClass = 'opacity-40';
      }
    }

    return (
      <td className={cn(cellClass, opacityClass, highlightClass, 'transition-all duration-300')}>
        <span className={textClass}>{value}</span>
      </td>
    );
  };

  const getConditionalFormula = () => {
    if (mode === 'artGivenMale') {
      return (
        <MathText content={`P(\\text{Art} | \\text{Male}) = \\frac{\\text{Number of Male and Art}}{\\text{Total Number of Male}} = \\frac{${tableData.male.art}}{${tableData.male.total}} = \\frac{12}{30} = 0.4`} />
      );
    } else if (mode === 'techGivenFemale') {
      return (
        <MathText content={`P(\\text{Tech} | \\text{Female}) = \\frac{\\text{Number of Female and Tech}}{\\text{Total Number of Female}} = \\frac{${tableData.female.tech}}{${tableData.female.total}} = \\frac{10}{30} = \\frac{1}{3} \\approx 0.333`} />
      );
    }
    return null;
  };

  return (
    <DiagramPanel
      title="Fig. Conditional Matrix Reducer"
      analysis={
        <div className="space-y-4">
          <p className="text-sm text-slate-400 italic">
            Conditional probability means we reduce the sample space to a specific subgroup. The denominator becomes the size of that subgroup, not the grand total.
          </p>
          <div className="p-3 bg-slate-900/50 border border-slate-800 rounded-lg">
            <h4 className="font-bold text-sky-400 mb-2 text-sm uppercase tracking-wider">Conditional Probability</h4>
            <div className="text-center bg-slate-950 p-2 rounded border border-slate-800/60">
              {getConditionalFormula() || <MathText content="P(A|B) = \frac{P(A \cap B)}{P(B)}" />}
            </div>
          </div>
          <div className="p-3 bg-rose-950/30 border border-rose-900/40 rounded-lg text-sm text-rose-300">
            <strong className="font-bold text-rose-400">CCEA Exam Pitfall:</strong> In conditional probability, the denominator is the size of the "given" group (the reduced sample space), not the grand total of the entire population.
          </div>
        </div>
      }
    >
      <div className="w-full flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-3 mb-8 p-1 bg-slate-900 border border-slate-800 rounded-lg">
          <button
            onClick={() => setMode('full')}
            className={cn("px-4 py-1.5 text-xs font-bold rounded-md transition-colors", mode === 'full' ? 'bg-sky-500 text-slate-950' : 'bg-transparent text-slate-400 hover:bg-slate-800')}
          >
            Full Table
          </button>
          <button
            onClick={() => setMode('artGivenMale')}
            className={cn("px-4 py-1.5 text-xs font-bold rounded-md transition-colors", mode === 'artGivenMale' ? 'bg-emerald-500 text-slate-950' : 'bg-transparent text-slate-400 hover:bg-slate-800')}
          >
            P(Art | Male)
          </button>
          <button
            onClick={() => setMode('techGivenFemale')}
            className={cn("px-4 py-1.5 text-xs font-bold rounded-md transition-colors", mode === 'techGivenFemale' ? 'bg-amber-500 text-slate-950' : 'bg-transparent text-slate-400 hover:bg-slate-800')}
          >
            P(Tech | Female)
          </button>
        </div>

        <div className="w-full overflow-x-auto max-w-lg">
          <table className="w-full border-collapse border border-slate-800 text-sm font-sans bg-slate-900 text-slate-300 text-center">
            <thead>
              <tr className="bg-slate-950 text-slate-400 border-b border-slate-800">
                <th className="p-3 border-r border-slate-800"></th>
                <th className="p-3 border-r border-slate-800 font-bold text-sky-400">Art</th>
                <th className="p-3 border-r border-slate-800 font-bold text-sky-400">Technology</th>
                <th className="p-3 font-bold bg-slate-800/40 text-slate-200">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-800/50">
                <th className="p-3 border-r border-slate-800 font-bold bg-slate-950 text-sky-400 text-left pl-4">Male</th>
                {renderCell(tableData.male.art, 'male', 'art')}
                {renderCell(tableData.male.tech, 'male', 'tech')}
                {renderCell(tableData.male.total, 'male', 'total', true)}
              </tr>
              <tr className="border-b border-slate-800">
                <th className="p-3 border-r border-slate-800 font-bold bg-slate-950 text-sky-400 text-left pl-4">Female</th>
                {renderCell(tableData.female.art, 'female', 'art')}
                {renderCell(tableData.female.tech, 'female', 'tech')}
                {renderCell(tableData.female.total, 'female', 'total', true)}
              </tr>
              <tr className="bg-slate-950/60">
                <th className="p-3 border-r border-slate-800 font-bold text-slate-400 text-left pl-4">Total</th>
                {renderCell(tableData.total.art, 'total', 'art', true)}
                {renderCell(tableData.total.tech, 'total', 'tech', true)}
                {renderCell(tableData.total.total, 'total', 'total', true)}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </DiagramPanel>
  );
};

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