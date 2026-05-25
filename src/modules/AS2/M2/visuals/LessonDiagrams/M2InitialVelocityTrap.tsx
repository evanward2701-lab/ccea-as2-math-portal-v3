import React from 'react';
import { MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { DiagramLabel } from '@/core/diagram-engine/DiagramLabel';

export const M2InitialVelocityTrap: React.FC = () => {
  return (
    <DiagramPanel
      title='Exam Trap: "Assuming Starts from Rest"'
      analysis={
        <p className="text-sm text-zinc-400 italic text-center max-w-md mx-auto">
          A velocity-time graph does not have to begin at zero. Read the initial velocity from the vertical intercept before choosing a SUVAT setup.
        </p>
      }
    >
      <div className="relative w-full max-w-xl aspect-50/15 select-none">
        <svg viewBox="0 0 500 150" className="absolute inset-0 w-full h-full" overflow="visible">
          <line x1="30" y1="120" x2="350" y2="120" stroke="#475569" strokeWidth="2" />
          <line x1="50" y1="20" x2="50" y2="140" stroke="#475569" strokeWidth="2" />
          {/* Wrong Assumption */}
          <line x1="50" y1="120" x2="250" y2="20" stroke="#f43f5e" strokeWidth="2" strokeDasharray="4 4" />
          {/* Correct Intercept */}
          <line x1="50" y1="80" x2="320" y2="20" stroke="#10b981" strokeWidth="3" />
        </svg>

        <DiagramLabel x="65%" y="25%">
          <div className="text-2.5 text-rose-400 font-bold bg-zinc-900 p-1 rounded border border-rose-900/50">FATAL: Assuming u=0</div>
        </DiagramLabel>

        <DiagramLabel x="6%" y="55%" text="u" />
        
        <DiagramLabel x="5%" y="10%" text="v" />
        
        <DiagramLabel x="72%" y="85%" text="t" />
      </div>
    </DiagramPanel>
  );
};
