import React from 'react';
import { DiagramPanel } from '../../DiagramPanel';
import { MathText } from '../../MathText';

export const M1KinematicNotationPanel: React.FC = () => {
  return (
    <DiagramPanel
      title="Fig. Kinematic Notation Legend"
      analysis={
        <div className="p-3 bg-rose-950/30 border border-rose-900/40 rounded-lg text-sm text-rose-300">
          <strong className="font-bold text-rose-400">Common Trap:</strong> In SUVAT equations, the variable <MathText content="s" className="inline [&_p]:inline" /> represents vector <strong>displacement</strong>, not scalar speed.
        </div>
      }
    >
      <div className="w-full flex flex-col items-center">
        <svg viewBox="0 0 500 80" className="w-full max-w-lg h-auto mb-6" overflow="visible">
          <line x1="20" y1="40" x2="480" y2="40" stroke="#475569" strokeWidth="2" />
          <path d="M470 35 L480 40 L470 45 Z" fill="#38bdf8" />
          <text x="400" y="25" className="text-xs fill-sky-400 font-bold">Positive Direction</text>

          <circle cx="80" cy="40" r="4" fill="#e2e8f0" />
          <text x="75" y="65" className="text-sm fill-slate-300 font-bold">O</text>
          <text x="60" y="80" className="text-xs fill-slate-400">Origin</text>

          <line x1="180" y1="35" x2="180" y2="45" stroke="#e2e8f0" strokeWidth="2" />
          <foreignObject x="165" y="50" width="30" height="20"><MathText content="x_0" className="text-xs text-slate-300" /></foreignObject>
          <text x="140" y="20" className="text-xs fill-slate-400">Initial Position</text>

          <line x1="400" y1="35" x2="400" y2="45" stroke="#e2e8f0" strokeWidth="2" />
          <foreignObject x="395" y="50" width="20" height="20"><MathText content="x" className="text-xs text-slate-300" /></foreignObject>
          <text x="370" y="20" className="text-xs fill-slate-400">Final Position</text>
        </svg>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 w-full max-w-2xl">
          {notation.map(item => (
            <div key={item.symbol} className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg text-center flex flex-col items-center justify-center">
              <div className={`text-3xl font-mono font-bold ${item.color}`}><MathText content={item.symbol} /></div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mt-2">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </DiagramPanel>
  );
};

const notation = [
  { symbol: 's', name: 'Displacement', color: 'text-sky-400' },
  { symbol: 'u', name: 'Initial Velocity', color: 'text-amber-400' },
  { symbol: 'v', name: 'Final Velocity', color: 'text-emerald-400' },
  { symbol: 'a', name: 'Acceleration', color: 'text-rose-400' },
  { symbol: 't', name: 'Time', color: 'text-slate-300' },
];