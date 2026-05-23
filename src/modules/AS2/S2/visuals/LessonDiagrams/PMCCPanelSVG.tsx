import React from 'react';
import { MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

export const PMCCPanelSVG: React.FC = () => (
  <DiagramPanel
    title="Fig 2. PMCC Core Formula"
    analysis={
      <div className="space-y-3">
        <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
          <p className="text-sm text-slate-300 leading-relaxed">
            The PMCC formula combines summary statistics to measure the strength and direction of <strong className="font-semibold text-emerald-400">linear</strong> correlation.
          </p>
        </div>
        <div className="p-4 bg-rose-950/30 border border-rose-900/40 rounded-lg">
          <h4 className="font-bold text-rose-400 mb-2 text-sm uppercase tracking-wider text-center">CCEA Exam Pitfall</h4>
          <p className="text-sm text-rose-300 leading-relaxed mb-3 text-center">
            Always verify your result is between -1 and 1.
          </p>
          <div className="text-center bg-slate-950 p-2 rounded border border-slate-800/60">
            <MathText content="r = 1.2" />
          </div>
          <p className="text-xs text-rose-300/80 italic mt-3 text-center">
            This is impossible, so the substitution or arithmetic must be checked.
          </p>
        </div>
      </div>
    }
  >
    <div className="flex flex-col items-center bg-slate-900/50 border border-slate-800 p-6 rounded-xl shadow-inner max-w-2xl w-full">
      <div className="relative w-full mb-6 flex justify-center items-center h-16 border-b border-slate-800 pb-4 text-2xl text-emerald-400">
        <MathText content="r = \frac{S_{xy}}{\sqrt{S_{xx} S_{yy}}}" />
        <div className="absolute top-0 right-0 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-3 py-1 font-mono font-bold tracking-widest rounded-lg text-xs">
          <MathText content="-1 \leq r \leq 1" />
        </div>
      </div>

      <div className="w-full border-b border-slate-800 mb-6 pb-6">
        <h5 className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-3 text-center">Summary Statistics Needed</h5>
        <div className="grid grid-cols-4 sm:grid-cols-7 gap-2 text-center font-mono text-sm">
          {['r', 'n', '\\sum x', '\\sum y', '\\sum x^2', '\\sum y^2', '\\sum xy'].map(stat => (
            <div key={stat} className="bg-slate-950 p-2 rounded border border-slate-800/60">
              <MathText content={stat} />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full space-y-4 text-lg text-slate-300 font-mono">
        <div className="flex justify-center items-center bg-slate-950 p-3 rounded border border-slate-800/60 shadow-sm">
          <MathText content="S_{xx} = \sum x^2 - \frac{(\sum x)^2}{n}" />
        </div>
        <div className="flex justify-center items-center bg-slate-950 p-3 rounded border border-slate-800/60 shadow-sm">
          <MathText content="S_{yy} = \sum y^2 - \frac{(\sum y)^2}{n}" />
        </div>
        <div className="flex justify-center items-center bg-slate-950 p-3 rounded border border-slate-800/60 shadow-sm">
          <MathText content="S_{xy} = \sum xy - \frac{\sum x \sum y}{n}" />
        </div>
      </div>
    </div>
  </DiagramPanel>
);
