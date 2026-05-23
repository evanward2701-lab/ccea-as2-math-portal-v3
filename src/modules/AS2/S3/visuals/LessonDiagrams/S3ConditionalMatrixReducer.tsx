import React, { useState } from 'react';
import { MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { cn } from '@/core/utils/cn';

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
        else if (col === 'tech') highlightClass = 'bg-amber-950/30 border-amber-500/30';
        else if (col === 'total') highlightClass = 'bg-amber-950/30 border-amber-500/30';
      } else {
        opacityClass = 'opacity-40';
      }
    } else if (mode === 'techGivenFemale') {
      if (row === 'female') {
        opacityClass = 'opacity-100';
        if (col === 'tech') highlightClass = 'bg-emerald-950/40 border-emerald-500/40';
        else if (col === 'art') highlightClass = 'bg-amber-950/30 border-amber-500/30';
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
