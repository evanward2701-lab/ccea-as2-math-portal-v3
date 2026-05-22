import React, { useEffect, useRef } from 'react';
import { DiagramPanel } from './DiagramPanel';

interface TikzDiagramPanelProps {
  title: string;
  analysis: React.ReactNode;
  tikzCode: string;
  wide?: boolean;
}

export const TikzDiagramPanel: React.FC<TikzDiagramPanelProps> = ({ 
  title, 
  analysis, 
  tikzCode, 
  wide = false 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      // Clear previous content
      containerRef.current.innerHTML = '';
      
      // Inject standard dark mode palette directly into the TeX code
      // This allows authors to use these colors, while the filter handles defaults.
      const themeInjectedCode = `
\\definecolor{slate950}{HTML}{020617}
\\definecolor{slate900}{HTML}{0f172a}
\\definecolor{slate800}{HTML}{1e293b}
\\definecolor{slate400}{HTML}{94a3b8}
\\definecolor{slate200}{HTML}{e2e8f0}
\\definecolor{sky400}{HTML}{38bdf8}
\\definecolor{emerald400}{HTML}{34d399}
\\definecolor{rose400}{HTML}{fb7185}
\\definecolor{amber400}{HTML}{fbbf24}
${tikzCode}`;

      // Create the tikzjax script tag
      const script = document.createElement('script');
      script.type = 'text/tikz';
      script.textContent = themeInjectedCode;
      
      containerRef.current.appendChild(script);
      
      // If a global process function exists (e.g. custom TikzJax wrapper), trigger it
      if (typeof (window as any).processTikz === 'function') {
        (window as any).processTikz(containerRef.current);
      }
    }
  }, [tikzCode]);

  return (
    <DiagramPanel title={title} analysis={analysis} wide={wide}>
      <div className="w-full max-w-4xl p-6 sm:p-8 flex justify-center items-center rounded-xl border border-slate-800/50 bg-slate-900/30 relative overflow-hidden shadow-inner">
        {/* 
            CSS filter to smoothly invert black-on-white TikZ defaults for dark mode.
            invert(0.85) converts black lines to a crisp slate-300.
            hue-rotate(180deg) corrects colors (so blue remains blue after invert).
        */}
        <div 
          ref={containerRef}
          className="tikz-render-container w-full flex justify-center items-center min-h-[200px]"
          style={{
            filter: 'invert(0.85) hue-rotate(180deg) brightness(1.1) contrast(1.1)',
            // Explicitly set text styles to override any TikZ defaults bleeding through
            color: '#000', // Set to black so the invert filter turns it to light gray
          }}
        />
      </div>
    </DiagramPanel>
  );
};
