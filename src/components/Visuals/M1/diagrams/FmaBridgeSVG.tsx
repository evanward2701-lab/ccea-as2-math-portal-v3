import React from 'react';
import { MathText } from '../../../MathText';
import { DiagramPanel } from '../../../DiagramPanel';
import { SVGLibrary } from '../../../diagrams/primitives/SVGLibrary';
import { ObjectBlock } from '../../../diagrams/primitives/ObjectBlock';
import { VectorArrow } from '../../../diagrams/primitives/VectorArrow';
import { DiagramLabel } from '../../../diagrams/primitives/DiagramLabel';
import { themeColors } from '../../../../types/mechanicsTheme';

export const FmaBridgeSVG: React.FC = () => (
  <DiagramPanel
    title="Fig 1. The F=ma Bridge"
    analysis={
      <div className="grid gap-3 sm:grid-cols-2 w-full max-w-2xl">
        <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-3 text-center text-sm text-slate-300">
          <span className="font-semibold text-sky-300">Resultant force:</span> add all forces first.
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-3 text-center text-sm text-slate-300">
          Then use <MathText content="F = ma" className="inline text-emerald-300 font-semibold [&_p]:inline [&_p]:m-0" /> to find the acceleration.
        </div>
      </div>
    }
  >
    <div className="relative w-full aspect-760/300 max-w-4xl mx-auto rounded-xl overflow-hidden border border-slate-800/50 bg-slate-950 shadow-[8px_8px_0px_#0f172a]">
      <SVGLibrary />
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 760 300" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" role="img" aria-label="Newton's Second Law bridge from resultant force to acceleration">
        {/* Panels */}
        <rect x="20" y="38" width="220" height="206" rx="8" fill="#0f172a" stroke={themeColors.structural} strokeWidth="2" />
        <rect x="270" y="38" width="220" height="206" rx="8" fill="#022c22" stroke={themeColors.accel} strokeWidth="2.5" />
        <rect x="520" y="38" width="220" height="206" rx="8" fill="#0f172a" stroke={themeColors.structural} strokeWidth="2" />

        {/* Force diagram */}
        <ObjectBlock x={106} y={126} width={48} height={34} />
        <circle cx="130" cy="143" r="3" fill={themeColors.connector} />
        
        <VectorArrow x1={154} y1={143} x2={214} y2={143} type="velocity" />
        <VectorArrow x1={106} y1={143} x2={50} y2={143} type="force" />
        <VectorArrow x1={130} y1={126} x2={130} y2={94} type="velocity" />
        <VectorArrow x1={130} y1={160} x2={130} y2={192} type="force" />

        <text x="184" y="134" className="text-xs font-bold" fill={themeColors.velocity}>push</text>
        <text x="52" y="134" className="text-xs font-bold" fill={themeColors.force}>friction</text>
        <text x="140" y="104" className="text-xs font-bold" fill={themeColors.velocity}>R</text>
        <text x="140" y="190" className="text-xs font-bold" fill={themeColors.force}>mg</text>

        <VectorArrow x1={78} y1={214} x2={182} y2={214} type="accel" />

        {/* Central law components handled by DiagramLabel */}

        {/* Motion response */}
        <line x1="556" y1="190" x2="694" y2="190" stroke={themeColors.structural} strokeWidth="3" strokeDasharray="5 5" />
        <circle cx="570" cy="190" r="13" fill={themeColors.structural} opacity="0.45" />
        <circle cx="608" cy="190" r="13" fill={themeColors.structural} opacity="0.7" />
        <circle cx="654" cy="190" r="13" fill="#1e293b" stroke={themeColors.connector} strokeWidth="2" />
        
        <VectorArrow x1={654} y1={156} x2={704} y2={156} type="applied" />
        <text x="672" y="145" className="text-sm font-bold" fill={themeColors.applied}>a</text>
        
        <path d="M 570 120 H 610 M 586 106 H 636 M 610 92 H 674" stroke={themeColors.accel} strokeWidth="3" strokeLinecap="round" opacity="0.9" />

        {/* Bridge arrows */}
        <VectorArrow x1={246} y1={141} x2={264} y2={141} type="structural" />
        <VectorArrow x1={496} y1={141} x2={514} y2={141} type="structural" />
      </svg>

      {/* Labels */}
      <DiagramLabel position={{ top: '25.3%', left: '17.1%' }}>
        <div className="text-center">
          <div className="text-base font-bold" style={{ color: themeColors.velocity }}>Forces on object</div>
          <div className="text-xs text-slate-400">Find the single overall force</div>
        </div>
      </DiagramLabel>

      <DiagramLabel position={{ top: '25.3%', left: '50%' }}>
        <div className="text-center">
          <div className="text-base font-bold" style={{ color: themeColors.accel }}>Newton's Second Law</div>
          <div className="text-xs text-slate-400">The bridge from force to motion</div>
        </div>
      </DiagramLabel>

      <DiagramLabel position={{ top: '25.3%', left: '82.9%' }}>
        <div className="text-center">
          <div className="text-base font-bold" style={{ color: themeColors.applied }}>Motion response</div>
          <div className="text-xs text-slate-400">Acceleration changes velocity</div>
        </div>
      </DiagramLabel>

      <DiagramLabel position={{ top: '76.7%', left: '17.1%' }}>
        <div className="text-center text-sm font-semibold" style={{ color: themeColors.accel }}>
          Resultant Force, <MathText content="\Sigma F" className="inline [&_p]:inline [&_p]:m-0" />
        </div>
      </DiagramLabel>

      <DiagramLabel position={{ top: '45.3%', left: '50%' }}>
        <div className="text-center flex flex-col justify-center h-full">
          <div style={{ color: themeColors.accel }}>
            <MathText content="F = ma" className="text-3xl font-bold [&_p]:m-0" />
          </div>
        </div>
      </DiagramLabel>

      <DiagramLabel position={{ top: '64.3%', left: '50%' }}>
        <div className="rounded-lg border border-emerald-500/40 bg-slate-950/70 px-3 py-2 text-center text-xs font-semibold leading-snug text-emerald-100">
          F is the resultant force, not just any single force
        </div>
      </DiagramLabel>

      <DiagramLabel position={{ top: '92%', left: '50.3%' }}>
        <div className="grid grid-cols-2 gap-4 text-center text-xs leading-snug text-slate-300">
          <div><span className="font-semibold" style={{ color: themeColors.velocity }}>More resultant force</span> means more acceleration for the same mass</div>
          <div><span className="font-semibold" style={{ color: themeColors.applied }}>More mass</span> means less acceleration for the same resultant force</div>
        </div>
      </DiagramLabel>
      
      <DiagramLabel position={{ top: '74.7%', left: '82%' }}>
        <div className="text-xs font-semibold text-slate-300">velocity marks spread out</div>
      </DiagramLabel>
    </div>
  </DiagramPanel>
);
