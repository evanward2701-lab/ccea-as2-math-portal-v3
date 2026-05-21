import React from 'react';

interface DiagramPanelProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: React.ReactNode;
  figureLabel?: React.ReactNode;
  analysis?: React.ReactNode;
  caption?: React.ReactNode;
  children: React.ReactNode;
  wide?: boolean;
}

export const DiagramPanel: React.FC<DiagramPanelProps> = ({
  title,
  figureLabel,
  analysis,
  caption,
  children,
  wide = false,
  className = '',
  ...props
}) => (
  <div
    className={`w-full border border-slate-800 bg-slate-950 relative shadow-[8px_8px_0px_#0f172a] rounded-xl overflow-hidden p-5 ${className}`.trim()}
    {...props}
  >
    {figureLabel && (
      <div className="absolute top-0 right-0 bg-slate-900 text-slate-400 border-l border-b border-slate-800 px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
        {figureLabel}
      </div>
    )}
    {title && (
      <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wide mb-4">
        {title}
      </h3>
    )}
    {analysis ? (
      <div className="grid w-full grid-cols-1 lg:grid-cols-[minmax(0,1fr)_18rem] gap-5 items-center">
        <div className="w-full flex justify-center overflow-visible">
          {children}
        </div>
        <aside className="w-full bg-slate-900/70 border border-slate-800 rounded-lg p-4 shadow-inner">
          {analysis}
        </aside>
      </div>
    ) : (
      <div className={`w-full flex justify-center overflow-visible ${wide ? '' : 'max-w-3xl'}`.trim()}>
        {children}
      </div>
    )}
    {caption && (
      <p className="text-[11px] font-sans text-slate-400 text-center mt-4 px-6 italic">
        {caption}
      </p>
    )}
  </div>
);

export default DiagramPanel;
