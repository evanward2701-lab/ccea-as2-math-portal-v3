import React from 'react';
import { MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

export const TwoWayTableSVG: React.FC = () => (
  <DiagramPanel
    title="Fig 2. Two-Way Probability Table"
    analysis={
      <>
        <p className="text-sm text-muted-foreground text-center italic mb-4 max-w-md mx-auto">
          Margin totals give single-event probabilities. Interior cells give intersection (AND) probabilities.
        </p>
        <div className="p-3 bg-destructive/30 border border-destructive/40 rounded text-sm text-destructive text-center">
          <strong className="block text-destructive not-italic uppercase text-2.5 mb-1">CCEA Exam Pitfall:</strong> Interior cross-cells ensure you do not use wrong row/column totals as conditional numerators.
        </div>
      </>
    }
  >
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse border border-primary/20 text-sm font-sans bg-primary/5 text-foreground text-center">
        <thead>
          <tr className="bg-card text-muted-foreground border-b border-primary/20">
            <th className="p-3 border-r border-primary/20"></th>
            <th className="p-3 border-r border-primary/20 font-bold text-primary">Event <MathText content="A" className="inline" /></th>
            <th className="p-3 border-r border-primary/20 font-bold text-primary">Event <MathText content="A'" className="inline" /> (Not A)</th>
            <th className="p-3 font-bold bg-muted/30 text-foreground">Marginal Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-primary/20">
            <th className="p-3 border-r border-primary/20 font-bold bg-card text-muted-foreground text-left pl-4">Event <MathText content="B" className="inline" /></th>
            <td className="p-3 border-r border-primary/20 italic bg-primary/5 hover:bg-muted/30 transition-colors"><MathText content="P(A \\cap B)" /></td>
            <td className="p-3 border-r border-primary/20 italic bg-primary/5 hover:bg-muted/30 transition-colors"><MathText content="P(A' \\cap B)" /></td>
            <td className="p-3 font-semibold bg-muted/30 text-foreground"><MathText content="P(B)" /></td>
          </tr>
          <tr className="border-b border-primary/20">
            <th className="p-3 border-r border-primary/20 font-bold bg-card text-purple-400 text-left pl-4">Event <MathText content="B'" className="inline" /></th>
            <td className="p-3 border-r border-primary/20 italic bg-primary/5 hover:bg-muted/30 transition-colors"><MathText content="P(A \\cap B')" /></td>
            <td className="p-3 border-r border-primary/20 italic bg-primary/5 hover:bg-muted/30 transition-colors"><MathText content="P(A' \\cap B')" /></td>
            <td className="p-3 font-semibold bg-muted/30 text-foreground"><MathText content="P(B')" /></td>
          </tr>
          <tr className="bg-card/60">
            <th className="p-3 border-r border-primary/20 font-bold text-muted-foreground text-left pl-4">Marginal Total</th>
            <td className="p-3 border-r border-primary/20 font-semibold bg-muted/30 text-foreground"><MathText content="P(A)" /></td>
            <td className="p-3 border-r border-primary/20 font-semibold bg-muted/30 text-foreground"><MathText content="P(A')" /></td>
            <td className="p-3 bg-primary text-zinc-950 shadow-[inset_0_0_8px_rgba(0,0,0,0.2)]">
              <MathText content="{\\Huge \\mathbf{1}}" className="[&_p]:m-0" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </DiagramPanel>
);
