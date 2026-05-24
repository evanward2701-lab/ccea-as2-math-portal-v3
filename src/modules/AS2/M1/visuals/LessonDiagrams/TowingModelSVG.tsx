import React from 'react';
import { MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { SVGLibrary } from '@/core/diagram-engine/primitives/SVGLibrary';
import { DiagramLabel } from '@/core/diagram-engine/primitives/DiagramLabel';
import { themeColors } from '@/core/types/mechanicsTheme';

export const TowingModelSVG: React.FC = () => (
  <DiagramPanel
    title="Fig. Towing Dynamics"
    analysis={
      <div className="grid gap-3 md:grid-cols-3 w-full max-w-4xl">
        <div className="rounded-lg border border-amber-900/50 bg-zinc-900/50 p-3 text-sm text-zinc-300">
          <h4 className="mb-2 font-bold text-amber-300">Whole system</h4>
          <p className="mb-2">Find common acceleration. Internal connecting forces cancel.</p>
          <div className="rounded border border-zinc-800 bg-[#141416] p-2 text-center">
            <MathText content="D - R_1 - R_2 = (m_1 + m_2)a" className="text-amber-300 font-semibold [&_p]:m-0" />
          </div>
        </div>
        <div className="rounded-lg border border-emerald-900/50 bg-zinc-900/50 p-3 text-sm text-zinc-300">
          <h4 className="mb-2 font-bold text-emerald-300">Isolate one vehicle</h4>
          <p className="mb-2">Find the towbar force by modelling one vehicle only.</p>
          <div className="rounded border border-zinc-800 bg-[#141416] p-2 text-center">
            <MathText content="T - R_1 = m_1a" className="text-emerald-300 font-semibold [&_p]:m-0" />
          </div>
        </div>
        <div className="rounded-lg border border-rose-900/50 bg-rose-950/30 p-3 text-sm text-rose-200">
          <h4 className="mb-2 font-bold text-rose-300">M1 modelling</h4>
          <p>Rigid + light are mathematical instructions: fixed distance, negligible mass.</p>
        </div>
      </div>
    }
  >
    <div className="relative w-full aspect-76/42 max-w-4xl mx-auto rounded-xl overflow-hidden border border-zinc-800/60 bg-[#141416] shadow-inner">
      <SVGLibrary />
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 760 420" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" role="img" aria-label="Towing dynamics model with whole system and isolated vehicle methods">
        <defs>
          <marker id="tow-arrow-emerald" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#10b981" />
          </marker>
          <marker id="tow-arrow-sky" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#a1a1aa" />
          </marker>
          <marker id="tow-arrow-amber" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#f59e0b" />
          </marker>
          <marker id="tow-arrow-rose" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#fb7185" />
          </marker>
        </defs>

        <rect x="28" y="24" width="704" height="266" rx="8" fill="#141417" stroke="#3f3f46" strokeWidth="1.8" />

        {/* Method outlines */}
        <rect x="70" y="96" width="520" height="148" rx="10" stroke="#f59e0b" strokeWidth="2" strokeDasharray="8 6" />
        <rect x="86" y="112" width="150" height="114" rx="8" stroke="#10b981" strokeWidth="2" strokeDasharray="7 5" />

        {/* Road */}
        <line x1="56" y1="216" x2="704" y2="216" stroke="#475569" strokeWidth="2.5" />
        {Array.from({ length: 25 }).map((_, idx) => (
          <line key={idx} x1={68 + idx * 25} y1="216" x2={58 + idx * 25} y2="228" stroke="#3f3f46" strokeWidth="1.6" />
        ))}

        {/* Broken-down car */}
        <rect x="104" y="162" width="108" height="38" rx="5" stroke="#e2e8f0" strokeWidth="1.8" fill="#1e293b" />
        <path d="M 124 162 L 140 138 H 182 L 204 162" stroke="#e2e8f0" strokeWidth="1.8" fill="#3f3f46" />
        <circle cx="126" cy="204" r="10" stroke="#cbd5e1" strokeWidth="1.8" fill="#020617" />
        <circle cx="190" cy="204" r="10" stroke="#cbd5e1" strokeWidth="1.8" fill="#020617" />

        {/* Towbar */}
        <line x1="212" y1="182" x2="334" y2="182" stroke="#e2e8f0" strokeWidth="4" strokeLinecap="round" />

        {/* Rescue vehicle */}
        <rect x="334" y="150" width="152" height="50" rx="5" stroke="#e2e8f0" strokeWidth="1.8" fill="#1e293b" />
        <path d="M 362 150 L 388 122 H 450 L 478 150" stroke="#e2e8f0" strokeWidth="1.8" fill="#3f3f46" />
        <circle cx="364" cy="206" r="12" stroke="#cbd5e1" strokeWidth="1.8" fill="#020617" />
        <circle cx="458" cy="206" r="12" stroke="#cbd5e1" strokeWidth="1.8" fill="#020617" />

        {/* Common acceleration */}
        <path d="M 270 68 H 500" stroke="#a1a1aa" strokeWidth="3" markerEnd="url(#tow-arrow-sky)" />

        {/* Internal towbar forces */}
        <path d="M 218 182 H 278" stroke="#10b981" strokeWidth="2.6" markerEnd="url(#tow-arrow-emerald)" />
        <path d="M 328 182 H 268" stroke="#10b981" strokeWidth="2.6" markerEnd="url(#tow-arrow-emerald)" />

        {/* External forces */}
        <path d="M 486 176 H 548" stroke="#f59e0b" strokeWidth="3.2" markerEnd="url(#tow-arrow-amber)" />
        <path d="M 104 190 H 56" stroke="#fb7185" strokeWidth="2.6" markerEnd="url(#tow-arrow-rose)" />
      </svg>

      <DiagramLabel x="22.4%" y="16.4%">
        <div className="rounded border border-amber-900/60 bg-[#141416] px-3 py-1 text-center text-sm font-bold text-amber-300">
          whole system
        </div>
      </DiagramLabel>

      <DiagramLabel x="22.1%" y="61.4%">
        <div className="rounded border border-emerald-900/60 bg-[#141416] px-3 py-1 text-center text-sm font-bold text-emerald-300">
          isolated vehicle
        </div>
      </DiagramLabel>

      <DiagramLabel x="20.8%" y="42.9%" text="m_1" />

      <DiagramLabel x="36.3%" y="34.5%">
        <div className="rounded border border-zinc-900/60 bg-[#141416] px-2 py-1 text-center text-xs font-bold text-zinc-300">
          rigid light towbar
        </div>
      </DiagramLabel>

      <DiagramLabel x="55%" y="41%" text="m_2" />

      <DiagramLabel x="75.7%" y="17.1%">
        <div className="rounded border border-zinc-900/60 bg-[#141416] px-3 py-2 text-center text-xs font-bold leading-tight text-zinc-300">
          common acceleration <MathText content="a" className="inline [&_p]:inline [&_p]:m-0" />
        </div>
      </DiagramLabel>

      <DiagramLabel x="35.9%" y="48.1%" text="T" />

      <DiagramLabel x="52%" y="28.1%">
        <div className="rounded border border-emerald-900/60 bg-[#141416] px-3 py-1 text-center text-xs font-semibold leading-tight text-emerald-200">
          internal forces cancel
        </div>
      </DiagramLabel>

      <DiagramLabel x="75.1%" y="41.9%" text="D" />

      <DiagramLabel x="10.5%" y="41.2%" text="R_1" />
    </div>
  </DiagramPanel>
);
