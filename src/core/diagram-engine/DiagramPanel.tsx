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
          <div className="w-full flex flex-col items-center py-12 border border-primary/20 bg-card relative rounded-2xl overflow-hidden shadow-lg">
            <div className="absolute top-0 right-0 bg-primary/5 text-primary border-l border-b border-primary/20 px-4 py-1.5 text-2.5 uppercase tracking-widest font-bold">
              {title}
            </div>
            <div className="w-full mt-4 px-8 flex justify-center">
              {children}
            </div>
          </div>
        </div>
        <div className="lg:col-span-1 w-full lg:sticky top-4">
          <div className="p-6 bg-muted/30 border border-primary/10 rounded-2xl text-sm leading-relaxed text-muted-foreground">
            {analysis}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center py-12 mb-16 border border-primary/20 bg-card relative rounded-2xl overflow-hidden shadow-lg">
      <div className="absolute top-0 right-0 bg-primary/5 text-primary border-l border-b border-primary/20 px-4 py-1.5 text-2.5 uppercase tracking-widest font-bold">
        {title}
      </div>
      <div className="w-full mt-4 px-8 flex justify-center">
        {children}
      </div>
      {analysis && (
        <div className="w-full max-w-5xl mt-8 px-8 border-t border-primary/10 pt-6 text-sm leading-relaxed text-muted-foreground">
          {analysis}
        </div>
      )}
    </div>
  );
};
