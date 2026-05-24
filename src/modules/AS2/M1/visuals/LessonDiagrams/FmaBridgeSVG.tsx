import React from 'react';
import { MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { SVGLibrary } from '@/core/diagram-engine/primitives/SVGLibrary';
import { ObjectBlock } from '@/core/diagram-engine/primitives/ObjectBlock';
import { VectorArrow } from '@/core/diagram-engine/primitives/VectorArrow';
import { DiagramLabel } from '@/core/diagram-engine/primitives/DiagramLabel';
import { themeColors } from '@/core/types/mechanicsTheme';

export const FmaBridgeSVG: React.FC = () => (
  <DiagramPanel
    title="Fig 1. The F=ma Bridge"
    analysis={
      <div className="flex flex-col gap-4 w-full max-w-5xl mx-auto px-4">
        {/* Typography Scaling Update: Upgraded copy to text-base/text-lg */}
        <p className="text-zinc-300 text-base md:text-lg text-center leading-relaxed max-w-3xl mx-auto">
          The Second Law acts as a mathematical translation layer between the physical forces acting on an object and its resulting motion response.
        </p>
      </div>
    }
  >
    {/* Viewport Width Expansion & Contrast Tuning: bg-[#1c1c1f] canvas + clean shadow */}
    <div className="relative w-full aspect-16/9 max-w-5xl mx-auto rounded-xl overflow-hidden border border-zinc-800/60 bg-[#1c1c1f] shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
      <SVGLibrary />
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" role="img" aria-label="Newton's Second Law bridge diagram with massive negative space">
        
        {/* Core Bridge Line - Minimalist geometric separator */}
        <line x1="100" y1="225" x2="700" y2="225" stroke={themeColors.structural} strokeWidth="1" strokeDasharray="4 4" opacity="0.2" />

        {/* Phase 1: Input (Forces) */}
        <g transform="translate(150, 225) scale(0.8)">
          <ObjectBlock x={-25} y={-18} width={50} height={36} isParticle />
          <circle cx="0" cy="0" r="2" fill={themeColors.connector} />
          
          {/* Force Vectors */}
          <VectorArrow x1={25} y1={0} x2={75} y2={0} type="applied" />
          <VectorArrow x1={-25} y1={0} x2={-65} y2={0} type="force" />
          <VectorArrow x1={0} y1={-18} x2={0} y2={-58} type="accel" />
          <VectorArrow x1={0} y1={18} x2={0} y2={58} type="weight" />
        </g>

        {/* Phase 2: The Logic (F=ma) */}
        <g transform="translate(400, 225)">
          <rect x="-60" y="-40" width="120" height="80" rx="4" stroke={themeColors.structural} strokeWidth="1" strokeDasharray="2 2" opacity="0.15" />
        </g>

        {/* Phase 3: Output (Motion) */}
        <g transform="translate(650, 225) scale(0.8)">
          <line x1="-80" y1="0" x2="40" y2="0" stroke={themeColors.structural} strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
          <circle cx="-50" cy="0" r="8" fill={themeColors.structural} opacity="0.15" />
          <circle cx="-10" cy="0" r="10" fill={themeColors.structural} opacity="0.3" />
          <circle cx="40" cy="0" r="12" fill="none" stroke={themeColors.connector} strokeWidth="1.2" />
          
          <VectorArrow x1={40} y1={-25} x2={90} y2={-25} type="velocity" />
        </g>

        {/* Connecting Logic Arrows */}
        <VectorArrow x1={240} y1={225} x2={310} y2={225} type="structural" />
        <VectorArrow x1={490} y1={225} x2={560} y2={225} type="structural" />
      </svg>

      {/* Dynamic Typography Overlays */}
      <DiagramLabel x="18.75%" y="35%">
        <div className="flex flex-col items-center gap-1">
          <span className="font-serif italic text-zinc-300 text-sm">External Forces</span>
          <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-medium">Input</span>
        </div>
      </DiagramLabel>

      <DiagramLabel x="18.75%" y="65%">
        <div className="flex flex-col items-center gap-1.5">
           <div className="flex gap-4 text-xs">
             <span className="text-zinc-500 italic">push</span>
             <span className="text-zinc-500 italic">friction</span>
           </div>
           <MathText content="\Sigma F" className="text-emerald-400 font-semibold text-lg" />
        </div>
      </DiagramLabel>

      {/* Completely Neutral Central Formula Badge Block */}
      <DiagramLabel x="50%" y="50%">
        <div className="flex flex-col items-center">
          <div className="p-5 bg-zinc-900/80 rounded-xl border border-zinc-800/80 shadow-[0_4px_20px_rgba(0,0,0,0.5)] backdrop-blur-md">
            <MathText content="F = ma" className="text-2xl text-zinc-100 font-medium" />
          </div>
          <span className="mt-4 text-[9px] text-zinc-500 uppercase tracking-[0.3em] font-semibold">Newton's Bridge</span>
        </div>
      </DiagramLabel>

      <DiagramLabel x="81.25%" y="35%">
        <div className="flex flex-col items-center gap-1">
          <span className="font-serif italic text-zinc-300 text-sm">Kinematic Response</span>
          <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-medium">Output</span>
        </div>
      </DiagramLabel>

      <DiagramLabel x="81.25%" y="65%">
        <div className="flex items-center gap-3">
          <MathText content="a" className="text-xl text-zinc-300 font-bold" />
          <span className="text-xs text-zinc-500 italic">acceleration</span>
        </div>
      </DiagramLabel>

      <DiagramLabel x="50%" y="15%">
        <div className="text-[10px] text-zinc-500 uppercase tracking-[0.4em] font-medium opacity-80">Mathematical Translation Layer</div>
      </DiagramLabel>
    </div>
  </DiagramPanel>
);
