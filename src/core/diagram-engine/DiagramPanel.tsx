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
          <div className="w-full flex flex-col items-center py-12 border border-zinc-800/60 bg-[#141416] relative rounded-2xl overflow-hidden shadow-inner">
            <div className="absolute top-0 right-0 bg-zinc-900/50 text-zinc-500 border-l border-b border-zinc-800/60 px-4 py-1.5 text-[10px] uppercase tracking-widest font-bold">
              {title}
            </div>
            <div className="w-full mt-4 px-8 flex justify-center">
              {children}
            </div>
          </div>
        </div>
        <div className="lg:col-span-1 w-full lg:sticky top-4">
          <div className="p-6 bg-zinc-900/40 border border-zinc-800/60 rounded-2xl text-sm leading-relaxed text-zinc-400">
            {analysis}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center py-12 mb-16 border border-zinc-800/60 bg-[#141416] relative rounded-2xl overflow-hidden shadow-inner">
      <div className="absolute top-0 right-0 bg-zinc-900/50 text-zinc-500 border-l border-b border-zinc-800/60 px-4 py-1.5 text-[10px] uppercase tracking-widest font-bold">
        {title}
      </div>
      <div className="w-full mt-4 px-8 flex justify-center">
        {children}
      </div>
      {analysis && (
        <div className="w-full max-w-prose mt-8 px-8 border-t border-zinc-800/60 pt-6 text-sm leading-relaxed text-zinc-400">
          {analysis}
        </div>
      )}
    </div>
  );
};
