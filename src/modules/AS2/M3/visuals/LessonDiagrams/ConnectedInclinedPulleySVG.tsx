import React from 'react';
import { MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { DiagramLabel } from '@/core/diagram-engine/primitives/DiagramLabel';
import { SVGLibrary } from '@/core/diagram-engine/primitives/SVGLibrary';
import { VectorArrow } from '@/core/diagram-engine/primitives/VectorArrow';
import { themeColors } from '@/core/types/mechanicsTheme';

export const ConnectedInclinedPulleySVG: React.FC = () => (
  <DiagramPanel
    title="Fig 5. Advanced Connected Inclined Plane"
    analysis={(
      <div className="space-y-3">
        <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-3">
          <p className="text-sm leading-relaxed text-zinc-300">
            For each mass, resolve forces along its direction of acceleration. For the inclined block, this means resolving parallel and perpendicular to the slope.
          </p>
        </div>
        <div className="rounded-lg border border-rose-900/40 bg-rose-950/30 p-3 text-sm text-rose-300">
          <strong className="font-bold text-rose-400">CCEA Exam Pitfall:</strong> Ensure friction opposes the direction of motion. If{' '}
          <MathText content="m_B" className="inline align-baseline not-italic [&_p]:m-0 [&_p]:inline" /> accelerates down, friction on{' '}
          <MathText content="m_A" className="inline align-baseline not-italic [&_p]:m-0 [&_p]:inline" /> acts down the slope.
        </div>
      </div>
    )}
  >
    <div className="relative mx-auto aspect-80/42 w-full max-w-4xl overflow-hidden rounded-2xl border border-zinc-800/70 bg-zinc-925 shadow-inner">
      <SVGLibrary />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 800 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        shapeRendering="geometricPrecision"
        role="img"
        aria-label="Connected particles on an inclined plane with pulley force diagram"
      >
        <line x1={92} y1={318} x2={704} y2={318} stroke={themeColors.structural} strokeWidth={2} strokeDasharray="7 9" opacity={0.72} />
        <path d="M 92 318 L 615 118 L 615 318" stroke="#475569" strokeWidth={4} strokeLinejoin="round" />
        <path d="M 160 318 A 72 72 0 0 0 151 291" stroke="#a1a1aa" strokeWidth={2} />

        <path d="M 354 207 L 616 108 A 26 26 0 0 0 666 100 L 666 188" stroke="#64748b" strokeWidth={3} strokeLinecap="round" fill="none" />
        <circle cx={640} cy={100} r={26} fill="#141417" stroke="#94a3b8" strokeWidth={3} />
        <circle cx={640} cy={100} r={8} fill="#18181b" stroke="#52525b" strokeWidth={2.4} />

        <g transform="translate(322 231) rotate(-20.9)">
          <rect x={-45} y={-60} width={90} height={60} rx={7} fill="#1e293b" stroke="#94a3b8" strokeWidth={2.5} />
          <text
            x={0}
            y={-30}
            fill={themeColors.connector}
            textAnchor="middle"
            dominantBaseline="middle"
            fontFamily="serif"
            fontSize={20}
            fontStyle="italic"
          >
            m
            <tspan baselineShift="sub" fontSize={13}>A</tspan>
          </text>
        </g>

        <rect x={639} y={188} width={54} height={70} rx={7} fill="rgba(24, 24, 27, 0.62)" stroke="#64748b" strokeWidth={2.5} />
        <text
          x={666}
          y={223}
          fill={themeColors.connector}
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="serif"
          fontSize={20}
          fontStyle="italic"
        >
          m
          <tspan baselineShift="sub" fontSize={13}>B</tspan>
        </text>

        <VectorArrow x1={362} y1={202} x2={438} y2={173} type="tension" strokeWidth={2.3} />
        <VectorArrow x1={295} y1={240} x2={228} y2={266} type="friction" strokeWidth={2.3} />
        <VectorArrow x1={310} y1={198} x2={285} y2={132} type="reaction" strokeWidth={2.3} />
        <VectorArrow x1={322} y1={231} x2={322} y2={312} type="weight" strokeWidth={2.3} />

        <VectorArrow x1={666} y1={188} x2={666} y2={136} type="tension" strokeWidth={2.3} />
        <VectorArrow x1={666} y1={258} x2={666} y2={314} type="weight" strokeWidth={2.3} />
        <VectorArrow x1={724} y1={184} x2={724} y2={242} type="velocity" marker="acceleration" strokeWidth={2.3} />
      </svg>

      <DiagramLabel x="19%" y="79%" text="\\alpha" className="text-base text-zinc-300" />

      <DiagramLabel x="53%" y="40%" text="T" className="rounded-md bg-zinc-925/90 px-2 py-1 text-xl text-blue-300" />
      <DiagramLabel x="27%" y="65%" text="F" className="rounded-md bg-zinc-925/90 px-2 py-1 text-xl text-amber-300" />
      <DiagramLabel x="34%" y="28%" text="R" className="rounded-md bg-zinc-925/90 px-2 py-1 text-xl text-emerald-300" />
      <DiagramLabel x="43%" y="75%" text="m_Ag" className="rounded-md bg-zinc-925/90 px-2 py-1 text-lg text-rose-300" />

      <DiagramLabel x="79%" y="35%" text="T" className="rounded-md bg-zinc-925/90 px-2 py-1 text-xl text-blue-300" />
      <DiagramLabel x="82%" y="79%" text="m_Bg" className="rounded-md bg-zinc-925/90 px-2 py-1 text-lg text-rose-300" />
      <DiagramLabel x="91%" y="53%" text="a" className="rounded-md bg-zinc-925/90 px-2 py-1 text-xl text-emerald-300" />

      <div className="absolute left-[6%] top-[8%] rounded-lg border border-zinc-800/80 bg-zinc-950/35 px-4 py-3 shadow-xl">
        <p className="font-serif text-2.5 font-black uppercase tracking-[0.24em] text-zinc-500">block A on plane</p>
        <p className="mt-1 text-xs font-semibold text-zinc-400">force labels kept outside vector paths</p>
      </div>
    </div>
  </DiagramPanel>
);
