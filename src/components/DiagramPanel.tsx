import React from 'react';

interface DiagramPanelProps {
  title: string;
  analysis: React.ReactNode;
  children: React.ReactNode;
  wide?: boolean;
}

export const DiagramPanel: React.FC<DiagramPanelProps> = ({ title, analysis, children, wide = false }) => {
  if (wide) {
    return (
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-16">
        <div className="lg:col-span-2 w-full">
          <div className="w-full flex flex-col items-center py-16 border border-slate-800/50 bg-slate-950 relative shadow-[8px_8px_0px_#0f172a] rounded-2xl overflow-hidden">
            <div className="absolute top-0 right-0 bg-slate-900 text-slate-400 border-l border-b border-slate-800/50 px-4 py-1.5 text-[10px] uppercase tracking-widest font-bold">
              {title}
            </div>
            <div className="w-full mt-4 px-8 flex justify-center">
              {children}
            </div>
          </div>
        </div>
        <div className="lg:col-span-1 w-full lg:sticky top-4">
          <div className="p-6 bg-slate-900/40 border border-slate-800/50 rounded-2xl text-sm leading-relaxed">
            {analysis}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center py-16 mb-16 border border-slate-800/50 bg-slate-950 relative shadow-[8px_8px_0px_#0f172a] rounded-2xl overflow-hidden">
      <div className="absolute top-0 right-0 bg-slate-900 text-slate-400 border-l border-b border-slate-800/50 px-4 py-1.5 text-[10px] uppercase tracking-widest font-bold">
        {title}
      </div>
      <div className="w-full mt-4 px-8 flex justify-center">
        {children}
      </div>
      <div className="w-full max-w-prose mt-12 px-8 border-t border-slate-800/50 pt-8 text-sm leading-relaxed">
        {analysis}
      </div>
    </div>
  );
};
