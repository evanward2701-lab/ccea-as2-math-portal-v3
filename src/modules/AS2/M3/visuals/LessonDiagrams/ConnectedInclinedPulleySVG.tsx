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
        <div className="rounded-lg border border-primary/20 bg-primary/5 p-3">
          <p className="text-sm leading-relaxed text-foreground">
            For each mass, resolve forces along its direction of acceleration. For the inclined block, this means resolving parallel and perpendicular to the slope.
          </p>
        </div>
        <div className="rounded-lg border border-destructive/40 bg-destructive/30 p-3 text-sm text-destructive">
          <strong className="font-bold text-destructive">CCEA Exam Pitfall:</strong> Ensure friction opposes the direction of motion. If{' '}
          <MathText content="m_B" className="inline align-baseline not-italic [&_p]:m-0 [&_p]:inline" /> accelerates down, friction on{' '}
          <MathText content="m_A" className="inline align-baseline not-italic [&_p]:m-0 [&_p]:inline" /> acts down the slope.
        </div>
      </div>
    )}
  >
    <div className="relative mx-auto aspect-80/42 w-full max-w-4xl overflow-hidden rounded-2xl border border-primary/20 bg-card shadow-inner">
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
        <path d="M 160 318 A 72 72 0 0 0 151 291" stroke="var(--muted-foreground)" strokeWidth={2} />

        <path d="M 354 190 L 640 74 A 26 26 0 0 1 666 100 L 666 188" stroke="#64748b" strokeWidth={3} strokeLinecap="round" fill="none" />
        <circle cx={640} cy={100} r={26} fill="#141417" stroke="#94a3b8" strokeWidth={3} />
        <circle cx={640} cy={100} r={8} fill="var(--card)" stroke="#52525b" strokeWidth={2.4} />

        <g transform="translate(322 231) rotate(-20.9)">
          <rect x={-45} y={-60} width={90} height={60} rx={7} fill="#1e293b" stroke="#94a3b8" strokeWidth={2.5} />
          <VectorArrow x1={0} y1={-60} x2={0} y2={-132} type="reaction" strokeWidth={2.3} />
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

        <VectorArrow x1={354} y1={190} x2={434} y2={158} type="tension" strokeWidth={2.3} />
        <VectorArrow x1={269} y1={219} x2={202} y2={245} type="friction" strokeWidth={2.3} />
        <VectorArrow x1={322} y1={231} x2={322} y2={312} type="weight" strokeWidth={2.3} />

        <VectorArrow x1={666} y1={188} x2={666} y2={136} type="tension" strokeWidth={2.3} />
        <VectorArrow x1={666} y1={258} x2={666} y2={314} type="weight" strokeWidth={2.3} />
        <VectorArrow x1={724} y1={184} x2={724} y2={242} type="accel" marker="acceleration" strokeWidth={2.3} />
        <VectorArrow x1={448} y1={109} x2={530} y2={76} type="accel" marker="acceleration" strokeWidth={2.3} />
      </svg>

      <DiagramLabel x="46%" y="32%" text="T" className="rounded-md bg-card/90 px-2 py-1 text-xl text-primary" />
      <DiagramLabel x="21%" y="49%" text="F" className="rounded-md bg-card/90 px-2 py-1 text-xl text-primary" />
      <DiagramLabel x="36%" y="23%" text="R" className="rounded-md bg-card/90 px-2 py-1 text-xl text-primary" />
      <DiagramLabel x="37%" y="77%" text="m_Ag" className="rounded-md bg-card/90 px-2 py-1 text-lg text-destructive" />

      <DiagramLabel x="79%" y="35%" text="T" className="rounded-md bg-card/90 px-2 py-1 text-xl text-primary" />
      <DiagramLabel x="80%" y="77%" text="m_Bg" className="rounded-md bg-card/90 px-2 py-1 text-lg text-destructive" />
      <DiagramLabel x="58%" y="13%" text="a" className="rounded-md bg-card/90 px-2 py-1 text-xl text-foreground" />
      <DiagramLabel x="91%" y="53%" text="a" className="rounded-md bg-card/90 px-2 py-1 text-xl text-foreground" />

      <div className="absolute left-[1%] top-[3%] rounded-lg border border-primary/20 bg-card px-4 py-3 shadow-xl">
        <p className="font-serif text-2.5 font-black uppercase tracking-[0.24em] text-muted-foreground">block A on plane</p>
        <p className="mt-1 text-xs font-semibold text-muted-foreground">force labels kept outside vector paths</p>
      </div>
    </div>
  </DiagramPanel>
);
