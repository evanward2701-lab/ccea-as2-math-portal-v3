import React from 'react';
import { MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { SVGLibrary } from '@/core/diagram-engine/primitives/SVGLibrary';
import { VectorArrow } from '@/core/diagram-engine/primitives/VectorArrow';
import { themeColors } from '@/core/types/mechanicsTheme';

export const M1SIUnitDerivationSVG: React.FC = () => (
  <DiagramPanel
    title="Fig 2. SI Unit Derivation Tree"
    analysis={
      /* Expanded Viewport Track: Spreads descriptions out across the screen */
      <div className="grid gap-4 sm:grid-cols-3 w-full max-w-5xl mx-auto px-2">
        <div className="rounded-xl border border-zinc-800 bg-zinc-800/30 p-4 text-center text-base text-zinc-300">
          <strong className="font-semibold text-zinc-400 block mb-0.5">Base units:</strong> kg, m, s
        </div>
        <div className="rounded-xl border border-zinc-800 bg-zinc-800/30 p-4 text-center text-base text-zinc-300">
          <strong className="font-semibold text-amber-400 block mb-0.5">Derived units:</strong> m s⁻¹, m s⁻²
        </div>
        <div className="rounded-xl border border-zinc-800 bg-zinc-800/30 p-4 text-center text-base text-zinc-300">
          <strong className="font-semibold text-emerald-400 block mb-0.5">Force units:</strong> N = kg m s⁻²
        </div>
      </div>
    }
  >
    {/* Canvas Layer: Premium background (#1c1c1f) casting color-neutral shadows */}
    <div className="relative w-full aspect-76/44 max-w-5xl mx-auto rounded-xl overflow-hidden border border-zinc-800/60 bg-[#1c1c1f] shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
      <SVGLibrary />
      
      {/* Unified Architecture: 100% of boxes, connections, and typography 
        live together inside the native coordinate track below.
      */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 760 440" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" role="img" aria-label="SI unit derivation tree layout">
        
        {/* --- GEOMETRIC BOX ENCLOSURES (RESTORED) --- */}
        {/* Base SI Units Row Containers (Top) */}
        <rect x="48" y="44" width="170" height="78" rx="8" fill="#141416" stroke="#27272a" strokeWidth="1.2" />
        <rect x="295" y="44" width="170" height="78" rx="8" fill="#141416" stroke="#27272a" strokeWidth="1.2" />
        <rect x="542" y="44" width="170" height="78" rx="8" fill="#141416" stroke="#27272a" strokeWidth="1.2" />

        {/* Derived Motion Units Row Containers (Middle) */}
        <rect x="130" y="174" width="220" height="84" rx="8" fill="#141416" stroke="#27272a" strokeWidth="1.2" />
        <rect x="410" y="174" width="220" height="84" rx="8" fill="#141416" stroke="#27272a" strokeWidth="1.2" />

        {/* Force & Kinetic Units Row Containers (Bottom) — Translucent emerald borders */}
        <rect x="122" y="306" width="236" height="88" rx="8" fill="#141416" stroke="rgba(16,185,129,0.35)" strokeWidth="1.5" />
        <rect x="402" y="306" width="236" height="88" rx="8" fill="#141416" stroke="rgba(16,185,129,0.35)" strokeWidth="1.5" />

        {/* --- DYNAMIC ARROW VECTORS --- */}
        <VectorArrow x1={380} y1={122} x2={250} y2={172} type="applied" marker="default" />
        <VectorArrow x1={627} y1={122} x2={250} y2={172} type="applied" marker="default" />
        <VectorArrow x1={282} y1={258} x2={506} y2={306} type="applied" marker="default" />
        <VectorArrow x1={627} y1={122} x2={530} y2={306} type="structural" dashed marker="default" />
        <VectorArrow x1={133} y1={122} x2={230} y2={306} type="accel" marker="default" />
        <VectorArrow x1={520} y1={258} x2={260} y2={306} type="accel" marker="default" />
        <VectorArrow x1={133} y1={122} x2={506} y2={306} type="accel" dashed marker="default" />

        {/* --- INDEPENDENT VECTOR TYPOGRAPHY SYSTEM --- */}
        {/* Category Structural Tags */}
        <text x="48" y="32" fill="#71717a" className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ fontFamily: 'sans-serif' }}>Base SI Units</text>
        <text x="130" y="162" fill="#d97706" className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80" style={{ fontFamily: 'sans-serif' }}>Derived Motion Units</text>
        <text x="122" y="296" fill="#10b981" className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80" style={{ fontFamily: 'sans-serif' }}>Force Units</text>

        {/* Top Row: Base Units Inner Text labels */}
        <g fill="#e4e4e7" textAnchor="middle" dominantBaseline="central" style={{ fontFamily: 'sans-serif' }}>
          <text x="133" y="74" fill="#71717a" className="text-xs font-medium">Mass</text>
          <text x="133" y="98" className="text-xl font-bold fill-white">kg</text>
          
          <text x="380" y="74" fill="#71717a" className="text-xs font-medium">Length</text>
          <text x="380" y="98" className="text-xl font-bold fill-white">m</text>
          
          <text x="627" y="74" fill="#71717a" className="text-xs font-medium">Time</text>
          <text x="627" y="98" className="text-xl font-bold fill-white">s</text>
        </g>

        {/* Middle Row: Derived Units Inner Text labels */}
        <g textAnchor="middle" dominantBaseline="central" style={{ fontFamily: 'sans-serif' }}>
          <text x="240" y="200" fill="#fbbf24" className="text-xs font-semibold uppercase tracking-wider">Velocity</text>
          <text x="240" y="222" fill="#d4d4d8" className="text-xs font-medium">displacement / time</text>
          <text x="240" y="240" fill="#ffffff" className="text-sm font-bold">m s⁻¹</text>
          
          <text x="520" y="200" fill="#fbbf24" className="text-xs font-semibold uppercase tracking-wider">Acceleration</text>
          <text x="520" y="222" fill="#d4d4d8" className="text-xs font-medium">change in velocity / time</text>
          <text x="520" y="240" fill="#ffffff" className="text-sm font-bold">m s⁻²</text>
        </g>

        {/* Bottom Row: Force Units Inner Text labels */}
        <g textAnchor="middle" dominantBaseline="central" style={{ fontFamily: 'sans-serif' }}>
          <text x="240" y="334" fill="#34d399" className="text-xs font-semibold uppercase tracking-wider">Force</text>
          <text x="240" y="358" fill="#ffffff" className="text-sm font-bold">F = ma</text>
          <text x="240" y="376" fill="#d4d4d8" className="text-xs font-medium">N = kg m s⁻²</text>
          
          <text x="520" y="334" fill="#34d399" className="text-xs font-semibold uppercase tracking-wider">Weight</text>
          <text x="520" y="358" fill="#ffffff" className="text-sm font-bold">W = mg</text>
          <text x="520" y="376" fill="#a1a1aa" className="text-[10px] font-medium italic">measured in Newtons (N)</text>
        </g>

        {/* Coordinate Logic Badges */}
        <g fill="#71717a" className="text-[10px] font-semibold" textAnchor="middle" dominantBaseline="central" style={{ fontFamily: 'sans-serif' }}>
          <text x="440" y="152">Length ÷ Time</text>
          <text x="580" y="278">Velocity ÷ Time</text>
          <text x="210" y="280">Mass × Acceleration</text>
          <text x="690" y="260">Mass × g</text>
        </g>
      </svg>

      {/* Fluid Warnings Footnote Panel Layer */}
      <div className="absolute bottom-4 left-0 right-0 px-6">
        <div className="grid grid-cols-3 gap-4 text-center text-[11px] text-zinc-400 max-w-3xl mx-auto">
          <div className="rounded-lg border border-zinc-800/80 bg-zinc-900/60 px-3 py-1.5 backdrop-blur-sm"><span className="text-rose-400 font-semibold block mb-0.5">Mass Scaling:</span> Convert tonnes to kg before utilizing equations.</div>
          <div className="rounded-lg border border-zinc-800/80 bg-zinc-900/60 px-3 py-1.5 backdrop-blur-sm"><span className="text-amber-400 font-semibold block mb-0.5">Dimension Trap:</span> kg evaluates mass units; Newtons compute active forces.</div>
          <div className="rounded-lg border border-zinc-800/80 bg-zinc-900/60 px-3 py-1.5 backdrop-blur-sm"><span className="text-emerald-400 font-semibold block mb-0.5">Unit Context:</span> m s⁻² tracks structural acceleration, never static velocity.</div>
        </div>
      </div>
    </div>
  </DiagramPanel>
);
