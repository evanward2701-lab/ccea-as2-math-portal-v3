import React from 'react';
import { MathText } from '../../../MathText';
import { DiagramPanel } from '../../../DiagramPanel';
import { DiagramLabel } from '../../../diagrams/primitives/DiagramLabel';

export const ResidualAnalysisSVG: React.FC = () => (
  <DiagramPanel
    title="Fig 6. Diagnostic Residual Analysis"
    analysis={
      <div className="space-y-3">
        <div className="flex items-start gap-3 p-3 bg-slate-900/50 border border-slate-800 rounded-lg">
          <p className="text-sm text-slate-300 leading-relaxed">A random dispersion of residual plots validates a linear model. A clear pattern suggests a non-linear model is more appropriate.</p>
        </div>
        <div className="p-3 bg-rose-950/30 border border-rose-900/40 rounded-lg text-sm text-rose-300">
          <strong className="font-bold text-rose-400">CCEA Exam Pitfall:</strong> A clear pattern in the residuals (like the curve above) invalidates a linear regression model, even if the PMCC is strong.
        </div>
      </div>
    }
  >
    <div className="relative w-full aspect-48/20 max-w-lg mx-auto">
      <svg viewBox="10 0 480 200" className="absolute inset-0 w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" overflow="visible">
        {/* Zero Residual Reference Line */}
        <line x1="50" y1="100" x2="450" y2="100" stroke="#34d399" strokeWidth="1.5" strokeDasharray="4 4" />
        
        {/* Coordinate Axes */}
        <path d="M50 20 L50 180" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M50 100 L460 100" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Trend Guide Path Line */}
        <path d="M 90 150 Q 260 20 440 160" fill="none" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="2 2" opacity="0.6" />

        {/* Non-Random Residual Curve Points */}
        {[ [90, 150], [140, 125], [190, 95], [240, 65], [290, 55], [340, 70], [390, 110], [440, 160] ].map(([cx, cy], i) => (
          <circle key={'res'+i} cx={cx} cy={cy} r="5" fill="#f43f5e" className="transition-all duration-300 hover:scale-150 cursor-pointer" />
        ))}
      </svg>

      <DiagramLabel position={{ left: '3.1%', top: '5%' }}>
        <MathText content="e" className="text-xs text-slate-400 italic" />
      </DiagramLabel>
      <DiagramLabel position={{ left: '96.9%', top: '45%' }}>
        <MathText content="x" className="text-xs text-slate-400 italic" />
      </DiagramLabel>
    </div>
  </DiagramPanel>
);
