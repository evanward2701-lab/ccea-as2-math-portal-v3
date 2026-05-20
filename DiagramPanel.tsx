import React from 'react';
import { cn } from '@/lib/utils';

interface DiagramPanelProps {
  title?: string;
  children: React.ReactNode; // The main visual
  analysis?: React.ReactNode; // The explanatory content
  wide?: boolean; // For single-column layout
}

export const DiagramPanel: React.FC<DiagramPanelProps> = ({ title, children, analysis, wide = false }) => {
  const gridColsClass = wide ? 'lg:grid-cols-1' : 'lg:grid-cols-2';

  return (
    <div className="my-10">
      {title && (
        <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-400">
          {title}
        </h3>
      )}
      <div
        className={cn(
          'grid grid-cols-1 lg:grid-cols-2 gap-10 items-start bg-slate-900/40 p-8 rounded-3xl border border-slate-800/60 shadow-xl',
          gridColsClass
        )}
      >
        <div className="flex h-full items-center justify-center rounded-2xl border border-slate-800 bg-slate-950/50 p-6">
          {children}
        </div>
        {analysis && <div className="font-serif text-[16px] leading-relaxed text-slate-300">{analysis}</div>}
      </div>
    </div>
  );
};