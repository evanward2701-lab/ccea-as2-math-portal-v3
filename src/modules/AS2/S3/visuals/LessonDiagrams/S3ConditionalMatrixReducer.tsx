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
    let cellClass = 'p-3 border-r border-primary/20 italic bg-primary/5';
    let textClass = 'text-foreground';

    if (isTotal) {
      cellClass = 'p-3 font-semibold bg-muted/30';
      textClass = 'text-foreground';
      if (row === 'total' && col === 'total') {
        cellClass = 'p-3 font-bold bg-primary text-zinc-950 shadow-[inset_0_0_8px_rgba(0,0,0,0.2)]';
        textClass = 'text-zinc-950';
      }
    }

    let opacityClass = 'opacity-100';
    let highlightClass = '';

    if (mode === 'artGivenMale') {
      if (row === 'male') {
        opacityClass = 'opacity-100';
        if (col === 'art') highlightClass = 'bg-primary/40 border-primary/40';
        else if (col === 'tech') highlightClass = 'bg-primary/30 border-primary/30';
        else if (col === 'total') highlightClass = 'bg-primary/30 border-primary/30';
      } else {
        opacityClass = 'opacity-40';
      }
    } else if (mode === 'techGivenFemale') {
      if (row === 'female') {
        opacityClass = 'opacity-100';
        if (col === 'tech') highlightClass = 'bg-primary/40 border-primary/40';
        else if (col === 'art') highlightClass = 'bg-primary/30 border-primary/30';
        else if (col === 'total') highlightClass = 'bg-primary/30 border-primary/30';
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
          <p className="text-sm text-muted-foreground italic">
            Conditional probability means we reduce the sample space to a specific subgroup. The denominator becomes the size of that subgroup, not the grand total.
          </p>
          <div className="p-3 bg-primary/5 border border-primary/20 rounded-lg">
            <h4 className="font-bold text-muted-foreground mb-2 text-sm uppercase tracking-wider">Conditional Probability</h4>
            <div className="text-center bg-card p-2 rounded border border-primary/20">
              {getConditionalFormula() || <MathText content="P(A|B) = \\frac{P(A \\cap B)}{P(B)}" />}
            </div>
          </div>
          <div className="p-3 bg-destructive/30 border border-destructive/40 rounded-lg text-sm text-destructive">
            <strong className="font-bold text-destructive">CCEA Exam Pitfall:</strong> In conditional probability, the denominator is the size of the "given" group (the reduced sample space), not the grand total of the entire population.
          </div>
        </div>
      }
    >
      <div className="w-full flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-3 mb-8 p-1 bg-primary/5 border border-primary/20 rounded-lg">
          <button
            onClick={() => setMode('full')}
            className={cn("px-4 py-1.5 text-xs font-bold rounded-md transition-colors", mode === 'full' ? 'bg-zinc-500 text-zinc-950' : 'bg-transparent text-muted-foreground hover:bg-muted/30')}
          >
            Full Table
          </button>
          <button
            onClick={() => setMode('artGivenMale')}
            className={cn("px-4 py-1.5 text-xs font-bold rounded-md transition-colors", mode === 'artGivenMale' ? 'bg-primary text-zinc-950' : 'bg-transparent text-muted-foreground hover:bg-muted/30')}
          >
            P(Art | Male)
          </button>
          <button
            onClick={() => setMode('techGivenFemale')}
            className={cn("px-4 py-1.5 text-xs font-bold rounded-md transition-colors", mode === 'techGivenFemale' ? 'bg-primary text-zinc-950' : 'bg-transparent text-muted-foreground hover:bg-muted/30')}
          >
            P(Tech | Female)
          </button>
        </div>

        <div className="w-full overflow-x-auto max-w-lg">
          <table className="w-full border-collapse border border-primary/20 text-sm font-sans bg-primary/5 text-foreground text-center">
            <thead>
              <tr className="bg-card text-muted-foreground border-b border-primary/20">
                <th className="p-3 border-r border-primary/20"></th>
                <th className="p-3 border-r border-primary/20 font-bold text-muted-foreground">Art</th>
                <th className="p-3 border-r border-primary/20 font-bold text-muted-foreground">Technology</th>
                <th className="p-3 font-bold bg-muted/30 text-foreground">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-primary/20">
                <th className="p-3 border-r border-primary/20 font-bold bg-card text-muted-foreground text-left pl-4">Male</th>
                {renderCell(tableData.male.art, 'male', 'art')}
                {renderCell(tableData.male.tech, 'male', 'tech')}
                {renderCell(tableData.male.total, 'male', 'total', true)}
              </tr>
              <tr className="border-b border-primary/20">
                <th className="p-3 border-r border-primary/20 font-bold bg-card text-muted-foreground text-left pl-4">Female</th>
                {renderCell(tableData.female.art, 'female', 'art')}
                {renderCell(tableData.female.tech, 'female', 'tech')}
                {renderCell(tableData.female.total, 'female', 'total', true)}
              </tr>
              <tr className="bg-card/60">
                <th className="p-3 border-r border-primary/20 font-bold text-muted-foreground text-left pl-4">Total</th>
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
