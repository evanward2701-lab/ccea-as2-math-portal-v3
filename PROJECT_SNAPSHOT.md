# Project Architecture
## Structure
src
src/App.tsx
src/main.tsx
src/types
src/types/mechanicsTheme.ts
src/index.css
src/types.ts
src/components
src/components/MermaidDiagram.tsx
src/components/diagrams
src/components/diagrams/mermaid.config.ts
src/components/LessonVisual.tsx
src/components/MathText.tsx
src/components/Visuals
src/components/Visuals/S2
src/components/Visuals/S3
src/components/Visuals/S4
src/components/Visuals/M1
src/components/Visuals/S1
src/components/Visuals/M2
src/components/Visuals/M3
src/components/TikzDiagramPanel.tsx
src/components/DiagramPanel.tsx
src/vite-env.d.ts
src/lib
src/lib/utils.ts
src/data 2
src/data
src/data/questions.ts
src/data/lessons.ts
src/pages
src/pages/Dashboard.tsx
src/pages/PracticeBank.tsx
src/pages/Lessons.tsx
\n## Primitives Library
import React from 'react';

export interface DiagramLabelProps {
  position: { top: string; left: string };
  children: React.ReactNode;
  className?: string;
}

/**
 * An HTML-based overlay for rendering high-quality text over an SVG diagram
 * without relying on <foreignObject>, ensuring consistent typography and crisp rendering.
 */
export const DiagramLabel: React.FC<DiagramLabelProps> = ({
  position,
  children,
  className = '',
}) => {
  return (
    <div
      className={`diagram-label ${className}`}
      style={{
        position: 'absolute',
        top: position.top,
        left: position.left,
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        color: '#e2e8f0', // Crisp, light text for dark mode
        fontFamily: 'system-ui, -apple-system, sans-serif',
        fontSize: '0.875rem',
        fontWeight: 500,
        textShadow: '0 2px 4px rgba(0,0,0,0.5)', // Better legibility over lines
      }}
    >
      {children}
    </div>
  );
};
import React from 'react';
import { themeColors } from '../../../types/mechanicsTheme';

export interface ObjectBlockProps {
  x: number;
  y: number;
  width: number;
  height: number;
  massLabel?: string;
  isParticle?: boolean;
}

/**
 * Renders an idealized mass (particle or rigid block) for mechanics diagrams.
 */
export const ObjectBlock: React.FC<ObjectBlockProps> = ({
  x,
  y,
  width,
  height,
  massLabel,
  isParticle = false,
}) => {
  const strokeColor = themeColors.structural;
  // Sleek, minimal dark-mode fill
  const fillColor = 'rgba(40, 44, 52, 0.8)';

  if (isParticle) {
    const radius = Math.min(width, height) / 2;
    const cx = x + width / 2;
    const cy = y + height / 2;

    return (
      <g className="object-particle">
        <circle
          cx={cx}
          cy={cy}
          r={radius}
          stroke={strokeColor}
          strokeWidth={2}
          fill={fillColor}
        />
        {massLabel && (
          <text
            x={cx}
            y={cy}
            fill={themeColors.connector}
            textAnchor="middle"
            dominantBaseline="central"
            fontSize="14"
            fontWeight="500"
            fontFamily="system-ui, -apple-system, sans-serif"
          >
            {massLabel}
          </text>
        )}
      </g>
    );
  }

  return (
    <g className="object-block">
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        stroke={strokeColor}
        strokeWidth={2}
        fill={fillColor}
        rx={6} // Subtle rounded corners for a premium feel
        ry={6}
      />
      {massLabel && (
        <text
          x={x + width / 2}
          y={y + height / 2}
          fill={themeColors.connector}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize="14"
          fontWeight="500"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          {massLabel}
        </text>
      )}
    </g>
  );
};
import React from 'react';
import { SemanticColor, themeColors } from '../../../types/mechanicsTheme';

/**
 * SVGLibrary defines the standard markers (arrows, dots) for use in diagrams.
 * This should be rendered once per SVG context or globally if referencing by ID.
 */
export const SVGLibrary: React.FC = () => {
  const colors = Object.entries(themeColors) as [SemanticColor, string][];

  return (
    <svg aria-hidden="true" style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}>
      <defs>
        {colors.map(([type, color]) => (
          <React.Fragment key={type}>
            {/* Standard forward arrow */}
            <marker
              id={`arrow-${type}`}
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="5"
              markerHeight="5"
              orient="auto-start-reverse"
            >
              <path d="M 0 1 L 10 5 L 0 9 z" fill={color} />
            </marker>
            {/* Reverse arrow */}
            <marker
              id={`arrow-reverse-${type}`}
              viewBox="0 0 10 10"
              refX="2"
              refY="5"
              markerWidth="5"
              markerHeight="5"
              orient="auto-start-reverse"
            >
              <path d="M 10 1 L 0 5 L 10 9 z" fill={color} />
            </marker>
            {/* Dot marker */}
            <marker
              id={`dot-${type}`}
              viewBox="0 0 10 10"
              refX="5"
              refY="5"
              markerWidth="4"
              markerHeight="4"
            >
              <circle cx="5" cy="5" r="3" fill={color} />
            </marker>
          </React.Fragment>
        ))}
      </defs>
    </svg>
  );
};
import React from 'react';
import { SemanticColor, themeColors, ArrowMarker } from '../../../types/mechanicsTheme';

export interface VectorArrowProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  type: SemanticColor;
  marker?: ArrowMarker;
  dashed?: boolean;
}

/**
 * Renders a vector line with optional markers using the semantic theme.
 */
export const VectorArrow: React.FC<VectorArrowProps> = ({
  x1,
  y1,
  x2,
  y2,
  type,
  marker = 'default',
  dashed = false,
}) => {
  const color = themeColors[type];

  let markerEnd: string | undefined = undefined;
  let markerStart: string | undefined = undefined;

  if (marker === 'default') {
    markerEnd = `url(#arrow-${type})`;
  } else if (marker === 'reverse') {
    markerStart = `url(#arrow-reverse-${type})`;
  } else if (marker === 'dot') {
    markerEnd = `url(#dot-${type})`;
  }

  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={color}
      strokeWidth={2}
      strokeDasharray={dashed ? '6,6' : 'none'}
      strokeLinecap="round"
      markerEnd={markerEnd}
      markerStart={markerStart}
    />
  );
};
\n## Main Visuals Status (M1-SVG.tsx)
import React, { useState } from 'react';
import { MathText } from '../../MathText';
import { DiagramPanel } from '../../DiagramPanel';
import { SVGLibrary } from '../../diagrams/SVGLibrary';
import { ObjectBlock } from '../../diagrams/ObjectBlock';
import { VectorArrow } from '../../diagrams/VectorArrow';
import { DiagramLabel } from '../../diagrams/DiagramLabel';
import { themeColors } from '../../../types/mechanicsTheme';

// ==========================================
// Fig 1. The F=ma Bridge
// ==========================================
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
    <svg width="100%" viewBox="0 0 760 300" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" className="max-w-4xl" role="img" aria-label="Newton's Second Law bridge from resultant force to acceleration">
      <defs>
        <marker id="arrow-bridge-slate" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#64748b" />
        </marker>
        <marker id="arrow-bridge-sky" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#38bdf8" />
        </marker>
        <marker id="arrow-bridge-rose" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#fb7185" />
        </marker>
        <marker id="arrow-bridge-emerald" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#10b981" />
        </marker>
        <marker id="arrow-bridge-amber" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#f59e0b" />
        </marker>
      </defs>

      {/* Panels */}
      <rect x="20" y="38" width="220" height="206" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="2" />
      <rect x="270" y="38" width="220" height="206" rx="8" fill="#022c22" stroke="#10b981" strokeWidth="2.5" />
      <rect x="520" y="38" width="220" height="206" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="2" />

      <foreignObject x="36" y="54" width="188" height="44">
        <div className="text-center">
          <div className="text-base font-bold text-sky-300">Forces on object</div>
          <div className="text-xs text-slate-400">Find the single overall force</div>
        </div>
      </foreignObject>
      <foreignObject x="286" y="54" width="188" height="44">
        <div className="text-center">
          <div className="text-base font-bold text-emerald-300">Newton's Second Law</div>
          <div className="text-xs text-slate-400">The bridge from force to motion</div>
        </div>
      </foreignObject>
      <foreignObject x="536" y="54" width="188" height="44">
        <div className="text-center">
          <div className="text-base font-bold text-amber-300">Motion response</div>
          <div className="text-xs text-slate-400">Acceleration changes velocity</div>
        </div>
      </foreignObject>

      {/* Force diagram */}
      <rect x="106" y="126" width="48" height="34" rx="5" fill="#1e293b" stroke="#e2e8f0" strokeWidth="2" />
      <circle cx="130" cy="143" r="3" fill="#e2e8f0" />
      <line x1="154" y1="143" x2="214" y2="143" stroke="#38bdf8" strokeWidth="4" markerEnd="url(#arrow-bridge-sky)" />
      <line x1="106" y1="143" x2="50" y2="143" stroke="#fb7185" strokeWidth="4" markerEnd="url(#arrow-bridge-rose)" />
      <line x1="130" y1="126" x2="130" y2="94" stroke="#38bdf8" strokeWidth="3" markerEnd="url(#arrow-bridge-sky)" />
      <line x1="130" y1="160" x2="130" y2="192" stroke="#fb7185" strokeWidth="3" markerEnd="url(#arrow-bridge-rose)" />
      <text x="184" y="134" className="text-xs font-bold fill-sky-300">push</text>
      <text x="52" y="134" className="text-xs font-bold fill-rose-300">friction</text>
      <text x="140" y="104" className="text-xs font-bold fill-sky-300">R</text>
      <text x="140" y="190" className="text-xs font-bold fill-rose-300">mg</text>

      <path d="M 78 214 H 182" stroke="#10b981" strokeWidth="4" markerEnd="url(#arrow-bridge-emerald)" />
      <foreignObject x="48" y="218" width="164" height="24">
        <div className="text-center text-sm font-semibold text-emerald-300">
          Resultant Force, <MathText content="\Sigma F" className="inline [&_p]:inline [&_p]:m-0" />
        </div>
      </foreignObject>

      {/* Central law */}
      <foreignObject x="292" y="108" width="176" height="56">
        <div className="text-center flex flex-col justify-center h-full">
          <MathText content="F = ma" className="text-3xl font-bold text-emerald-200 [&_p]:m-0" />
        </div>
      </foreignObject>
      <foreignObject x="298" y="166" width="164" height="54">
        <div className="rounded-lg border border-emerald-500/40 bg-slate-950/70 px-3 py-2 text-center text-xs font-semibold leading-snug text-emerald-100">
          F is the resultant force, not just any single force
        </div>
      </foreignObject>

      {/* Motion response */}
      <line x1="556" y1="190" x2="694" y2="190" stroke="#334155" strokeWidth="3" strokeDasharray="5 5" />
      <circle cx="570" cy="190" r="13" fill="#334155" opacity="0.45" />
      <circle cx="608" cy="190" r="13" fill="#334155" opacity="0.7" />
      <circle cx="654" cy="190" r="13" fill="#1e293b" stroke="#e2e8f0" strokeWidth="2" />
      <line x1="654" y1="156" x2="704" y2="156" stroke="#f59e0b" strokeWidth="4" markerEnd="url(#arrow-bridge-amber)" />
      <text x="672" y="145" className="text-sm font-bold fill-amber-300">a</text>
      <path d="M 570 120 H 610 M 586 106 H 636 M 610 92 H 674" stroke="#10b981" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
      <text x="552" y="224" className="text-xs font-semibold fill-slate-300">velocity marks spread out</text>

      {/* Bridge arrows */}
      <line x1="246" y1="141" x2="264" y2="141" stroke="#64748b" strokeWidth="3" markerEnd="url(#arrow-bridge-slate)" />
      <line x1="496" y1="141" x2="514" y2="141" stroke="#64748b" strokeWidth="3" markerEnd="url(#arrow-bridge-slate)" />

      {/* Exam notes */}
      <foreignObject x="62" y="258" width="640" height="36">
        <div className="grid grid-cols-2 gap-4 text-center text-xs leading-snug text-slate-300">
          <div><span className="font-semibold text-sky-300">More resultant force</span> means more acceleration for the same mass</div>
          <div><span className="font-semibold text-amber-300">More mass</span> means less acceleration for the same resultant force</div>
        </div>
      </foreignObject>
    </svg>
  </DiagramPanel>
);

// ==========================================
// Fig 2. SI Unit Derivation Tree
// ==========================================
export const M1SIUnitDerivationSVG: React.FC = () => (
  <DiagramPanel
    title="Fig 2. SI Unit Derivation Tree"
    analysis={
      <div className="grid gap-3 sm:grid-cols-3 w-full max-w-3xl">
        <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-3 text-center text-sm text-slate-300">
          <span className="font-semibold text-sky-300">Base units:</span> kg, m, s
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-3 text-center text-sm text-slate-300">
          <span className="font-semibold text-amber-300">Derived units:</span> m s^-1, m s^-2
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-3 text-center text-sm text-slate-300">
          <span className="font-semibold text-emerald-300">Force units:</span> N = kg m s^-2
        </div>
      </div>
    }
  >
    <svg width="100%" viewBox="0 0 760 440" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" className="max-w-4xl" role="img" aria-label="SI unit derivation tree for velocity, acceleration, force and weight">
      <defs>
        <marker id="si-arrow-slate" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#64748b" />
        </marker>
        <marker id="si-arrow-amber" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#f59e0b" />
        </marker>
        <marker id="si-arrow-emerald" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#10b981" />
        </marker>
      </defs>

      {/* Row labels */}
      <text x="34" y="28" className="text-xs font-bold uppercase tracking-wider fill-sky-300">Base SI Units</text>
      <text x="34" y="156" className="text-xs font-bold uppercase tracking-wider fill-amber-300">Derived Motion Units</text>
      <text x="34" y="286" className="text-xs font-bold uppercase tracking-wider fill-emerald-300">Force Units</text>

      {/* Base units */}
      <rect x="48" y="44" width="170" height="78" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.6" />
      <rect x="295" y="44" width="170" height="78" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.6" />
      <rect x="542" y="44" width="170" height="78" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.6" />

      <foreignObject x="62" y="56" width="142" height="52">
        <div className="flex h-full flex-col items-center justify-center text-center">
          <div className="text-sm font-bold text-sky-300">Mass</div>
          <MathText content="\text{kg}" className="text-xl font-bold text-slate-100 [&_p]:m-0" />
        </div>
      </foreignObject>
      <foreignObject x="309" y="56" width="142" height="52">
        <div className="flex h-full flex-col items-center justify-center text-center">
          <div className="text-sm font-bold text-sky-300">Length</div>
          <MathText content="\text{m}" className="text-xl font-bold text-slate-100 [&_p]:m-0" />
        </div>
      </foreignObject>
      <foreignObject x="556" y="56" width="142" height="52">
        <div className="flex h-full flex-col items-center justify-center text-center">
          <div className="text-sm font-bold text-sky-300">Time</div>
          <MathText content="\text{s}" className="text-xl font-bold text-slate-100 [&_p]:m-0" />
        </div>
      </foreignObject>

      {/* Derived units */}
      <rect x="130" y="174" width="220" height="84" rx="8" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.6" />
      <rect x="410" y="174" width="220" height="84" rx="8" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.6" />

      <foreignObject x="146" y="186" width="188" height="60">
        <div className="flex h-full flex-col items-center justify-center text-center">
          <div className="text-sm font-bold text-amber-300">Velocity</div>
          <MathText content="\frac{\text{displacement}}{\text{time}} = \text{m s}^{-1}" className="text-base font-semibold text-slate-100 [&_p]:m-0" />
        </div>
      </foreignObject>
      <foreignObject x="426" y="186" width="188" height="60">
        <div className="flex h-full flex-col items-center justify-center text-center">
          <div className="text-sm font-bold text-amber-300">Acceleration</div>
          <MathText content="\frac{\text{change in velocity}}{\text{time}} = \text{m s}^{-2}" className="text-base font-semibold text-slate-100 [&_p]:m-0" />
        </div>
      </foreignObject>

      {/* Force units */}
      <rect x="122" y="306" width="236" height="88" rx="8" fill="#022c22" stroke="#10b981" strokeWidth="1.8" />
      <rect x="402" y="306" width="236" height="88" rx="8" fill="#022c22" stroke="#10b981" strokeWidth="1.8" />

      <foreignObject x="138" y="318" width="204" height="64">
        <div className="flex h-full flex-col items-center justify-center text-center">
          <div className="text-sm font-bold text-emerald-300">Force</div>
          <MathText content="F = ma,\quad N = \text{kg m s}^{-2}" className="text-base font-semibold text-slate-100 [&_p]:m-0" />
        </div>
      </foreignObject>
      <foreignObject x="418" y="318" width="204" height="64">
        <div className="flex h-full flex-col items-center justify-center text-center">
          <div className="text-sm font-bold text-emerald-300">Weight</div>
          <MathText content="W = mg" className="text-lg font-bold text-slate-100 [&_p]:m-0" />
          <div className="text-xs font-semibold text-slate-300">weight is measured in N</div>
        </div>
      </foreignObject>

      {/* Relationship arrows */}
      <path d="M 380 122 C 360 144, 312 150, 250 172" stroke="#f59e0b" strokeWidth="2.2" markerEnd="url(#si-arrow-amber)" />
      <path d="M 627 122 C 610 148, 325 146, 250 172" stroke="#f59e0b" strokeWidth="2.2" markerEnd="url(#si-arrow-amber)" />
      <path d="M 282 258 C 318 282, 430 278, 506 306" stroke="#f59e0b" strokeWidth="2.2" markerEnd="url(#si-arrow-amber)" />
      <path d="M 627 122 C 640 176, 608 214, 530 306" stroke="#64748b" strokeWidth="2.2" strokeDasharray="5 5" markerEnd="url(#si-arrow-slate)" />
      <path d="M 133 122 C 126 198, 150 266, 230 306" stroke="#10b981" strokeWidth="2.2" markerEnd="url(#si-arrow-emerald)" />
      <path d="M 520 258 C 494 284, 376 286, 260 306" stroke="#10b981" strokeWidth="2.2" markerEnd="url(#si-arrow-emerald)" />
      <path d="M 133 122 C 210 154, 390 218, 506 306" stroke="#10b981" strokeWidth="2.2" strokeDasharray="5 5" markerEnd="url(#si-arrow-emerald)" />

      <text x="426" y="148" className="text-xs font-semibold fill-slate-300">Length + Time</text>
      <text x="420" y="282" className="text-xs font-semibold fill-slate-300">Velocity + Time</text>
      <text x="206" y="286" className="text-xs font-semibold fill-slate-300">Mass + Acceleration</text>
      <text x="558" y="274" className="text-xs font-semibold fill-slate-300">Mass + g</text>

      {/* Exam warnings */}
      <foreignObject x="42" y="402" width="676" height="32">
        <div className="grid grid-cols-3 gap-3 text-center text-[11px] font-semibold leading-tight text-rose-300">
          <div>Convert tonnes to kg before using W = mg or F = ma.</div>
          <div>kg is mass; N is force.</div>
          <div>m s^-2 means acceleration, not velocity.</div>
        </div>
      </foreignObject>
    </svg>
  </DiagramPanel>
);

// ==========================================
// Diagram 2: Scalar vs Vector Classification
// ==========================================
export const ScalarVectorSVG: React.FC = () => (
  <DiagramPanel
    title="Fig 2. Scalar vs Vector"
    analysis={
      <div className="grid gap-4 md:grid-cols-2 w-full max-w-3xl">
        <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
          <h4 className="mb-2 font-bold text-amber-300">Scalars</h4>
          <p className="mb-3 text-sm text-slate-300">Magnitude only.</p>
          <div className="grid grid-cols-2 gap-2 text-sm text-slate-300">
            {['mass', 'time', 'distance', 'speed'].map((item) => (
              <div key={item} className="rounded border border-amber-900/50 bg-slate-950 px-3 py-2 text-center font-semibold text-amber-200">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
          <h4 className="mb-2 font-bold text-emerald-300">Vectors</h4>
          <p className="mb-3 text-sm text-slate-300">Magnitude and direction.</p>
          <div className="grid grid-cols-2 gap-2 text-sm text-slate-300">
            {['displacement', 'velocity', 'acceleration', 'force', 'weight'].map((item) => (
              <div key={item} className="rounded border border-emerald-900/50 bg-slate-950 px-3 py-2 text-center font-semibold text-emerald-200">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="md:col-span-2 rounded-lg border border-rose-900/50 bg-rose-950/30 p-3 text-center text-sm font-semibold text-rose-200">
          The negative component affects direction, not the final speed.
        </div>
      </div>
    }
  >
    <svg width="100%" viewBox="0 0 760 390" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" className="max-w-4xl" role="img" aria-label="Scalar and vector classification with velocity vector magnitude calculation">
      <defs>
        <marker id="scalar-vector-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#10b981" />
        </marker>
      </defs>

      {/* Classification panels */}
      <rect x="34" y="26" width="318" height="124" rx="8" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.8" />
      <rect x="408" y="26" width="318" height="124" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1.8" />

      <foreignObject x="54" y="42" width="278" height="94">
        <div className="flex h-full items-center gap-4 overflow-visible">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded border border-amber-900/60 bg-slate-950 text-2xl font-black text-amber-300">7</div>
          <div>
            <div className="text-base font-bold text-amber-300">Scalar: magnitude only</div>
            <div className="mt-1 text-sm leading-snug text-slate-300">A number with units, but no direction.</div>
          </div>
        </div>
      </foreignObject>

      <line x1="448" y1="98" x2="524" y2="62" stroke="#10b981" strokeWidth="3.2" markerEnd="url(#scalar-vector-arrow)" />
      <foreignObject x="540" y="42" width="166" height="94">
        <div className="overflow-visible">
          <div className="text-base font-bold leading-snug text-emerald-300">Vector: magnitude + direction</div>
          <div className="mt-1 text-sm leading-snug text-slate-300">Direction is part of the answer.</div>
        </div>
      </foreignObject>

      {/* Coordinate diagram */}
      <rect x="146" y="168" width="468" height="134" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="1.6" />
      <line x1="196" y1="198" x2="196" y2="278" stroke="#64748b" strokeWidth="1.8" markerEnd="url(#scalar-vector-arrow)" />
      <line x1="196" y1="198" x2="584" y2="198" stroke="#64748b" strokeWidth="1.8" markerEnd="url(#scalar-vector-arrow)" />
      <text x="588" y="202" className="text-sm font-bold fill-slate-300">i</text>
      <text x="190" y="292" className="text-sm font-bold fill-slate-300">-j</text>

      <line x1="196" y1="198" x2="308" y2="198" stroke="#10b981" strokeWidth="3.2" />
      <line x1="308" y1="198" x2="308" y2="278" stroke="#fb7185" strokeWidth="3.2" />
      <line x1="196" y1="198" x2="308" y2="278" stroke="#10b981" strokeWidth="3.2" markerEnd="url(#scalar-vector-arrow)" />
      <circle cx="196" cy="198" r="5" fill="#e2e8f0" />
      <circle cx="308" cy="278" r="5" fill="#10b981" />

      <foreignObject x="218" y="172" width="96" height="28">
        <div className="rounded border border-emerald-900/60 bg-slate-950/90 px-2 py-1 text-center text-sm font-bold text-emerald-300">
          <MathText content="7\mathbf{i}" className="[&_p]:m-0" />
        </div>
      </foreignObject>
      <foreignObject x="220" y="248" width="92" height="28">
        <div className="rounded border border-rose-900/60 bg-slate-950/90 px-2 py-1 text-center text-sm font-bold text-rose-300">
          <MathText content="-24\mathbf{j}" className="[&_p]:m-0" />
        </div>
      </foreignObject>
      <foreignObject x="330" y="188" width="242" height="54">
        <div className="rounded border border-emerald-900/60 bg-slate-950/90 px-3 py-2 text-sm font-bold text-emerald-300">
          <MathText content="\mathbf{v} = 7\mathbf{i} - 24\mathbf{j}\ \text{m s}^{-1}" className="[&_p]:m-0" />
          <div className="mt-1 text-xs font-semibold text-slate-300">velocity is a vector</div>
        </div>
      </foreignObject>

      <text x="430" y="278" className="text-sm font-semibold fill-rose-300">negative component points down</text>

      {/* Calculation strip */}
      <rect x="68" y="330" width="624" height="38" rx="8" fill="#020617" stroke="#334155" strokeWidth="1.6" />
      <foreignObject x="86" y="336" width="588" height="26">
        <div className="text-center text-base font-bold text-emerald-300">
          <MathText content="|\mathbf{v}| = \sqrt{7^2 + (-24)^2} = 25\ \text{m s}^{-1}" className="[&_p]:m-0" />
        </div>
      </foreignObject>
    </svg>
  </DiagramPanel>
);

// ==========================================
// Diagram: Scalar vs Vector Spatial Map
// ==========================================
export const ScalarVectorSpatialMapSVG: React.FC = () => (
  <DiagramPanel
    title="Fig. Distance vs. Displacement"
    analysis={
      <div className="grid gap-4 md:grid-cols-2 w-full max-w-3xl">
        <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
          <h4 className="mb-2 font-bold text-amber-300">Distance / Speed</h4>
          <p className="mb-3 text-sm leading-relaxed text-slate-300">Distance is the total path length travelled and is a scalar.</p>
          <div className="space-y-2 rounded border border-slate-800/60 bg-slate-950 p-3 text-sm text-slate-300">
            <MathText content="\text{Speed} = \frac{\text{Distance}}{\text{Time}}" className="text-amber-300 font-semibold [&_p]:m-0" />
            <div>Distance travelled = <span className="font-semibold text-amber-300">12 m</span></div>
            <div>Time = <span className="font-semibold text-slate-100">4 s</span></div>
            <div>Speed = <span className="font-semibold text-amber-300">3 m s^-1</span></div>
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
          <h4 className="mb-2 font-bold text-emerald-300">Displacement / Velocity</h4>
          <p className="mb-3 text-sm leading-relaxed text-slate-300">Displacement is the straight-line change in position from start to finish and is a vector.</p>
          <div className="space-y-2 rounded border border-slate-800/60 bg-slate-950 p-3 text-sm text-slate-300">
            <MathText content="\text{Velocity} = \frac{\text{Displacement}}{\text{Time}}" className="text-emerald-300 font-semibold [&_p]:m-0" />
            <div>Displacement = <span className="font-semibold text-emerald-300">8 m northeast</span></div>
            <div>Time = <span className="font-semibold text-slate-100">4 s</span></div>
            <div>Velocity = <span className="font-semibold text-emerald-300">2 m s^-1 northeast</span></div>
          </div>
        </div>
        <div className="md:col-span-2 rounded-lg border border-sky-900/50 bg-sky-950/20 p-3 text-center text-sm text-sky-200">
          Same time, different answers: speed and velocity can differ because distance and displacement are different. Displacement can be zero even when distance is not zero.
        </div>
      </div>
    }
  >
    <div className="relative w-full aspect-76/30 max-w-4xl mx-auto rounded-xl overflow-hidden border border-slate-800/50 bg-slate-950 shadow-[8px_8px_0px_#0f172a]">
      <SVGLibrary />
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 760 300" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" role="img" aria-label="Map comparing distance path and displacement vector from A to B">
        <path d="M 82 224 H 682 M 112 194 H 652 M 142 164 H 622 M 172 134 H 592 M 202 104 H 562 M 232 74 H 532" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 8" />

        {/* Points A and B */}
        <circle cx="120" cy="214" r="12" fill={themeColors.velocity} />
        <circle cx="620" cy="74" r="12" fill={themeColors.velocity} />

        {/* Distance Path (Winding) */}
        <path d="M 130 206 C 210 100, 312 256, 394 166 C 492 58, 574 114, 610 82" stroke={themeColors.applied} strokeWidth="4" strokeDasharray="7 8" strokeLinecap="round" fill="none" />

        {/* Displacement Vector (Straight) */}
        <VectorArrow x1={132} y1={210} x2={608} y2={78} type="accel" marker="default" />

        {/* Compass */}
        <circle cx="90" cy="72" r="34" stroke="#334155" strokeWidth="2" fill="#020617" fillOpacity="0.7" />
        <VectorArrow x1={90} y1={94} x2={90} y2={46} type="velocity" marker="default" />
        <VectorArrow x1={68} y1={72} x2={116} y2={72} type="structural" marker="default" />
        <VectorArrow x1={78} y1={84} x2={108} y2={54} type="accel" marker="default" />
      </svg>

      <DiagramLabel position={{ left: '15.8%', top: '71.3%' }}>
        <div className="text-sm font-bold text-slate-950">A</div>
      </DiagramLabel>
      <DiagramLabel position={{ left: '11.6%', top: '82%' }}>
        <div className="text-sm font-bold text-sky-300">Start A</div>
      </DiagramLabel>

      <DiagramLabel position={{ left: '81.6%', top: '24.7%' }}>
        <div className="text-sm font-bold text-slate-950">B</div>
      </DiagramLabel>
      <DiagramLabel position={{ left: '77.4%', top: '16%' }}>
        <div className="text-sm font-bold text-sky-300">Finish B</div>
      </DiagramLabel>

      <DiagramLabel position={{ left: '44%', top: '24.7%' }}>
        <div className="rounded border border-amber-900/60 bg-slate-950/90 px-3 py-2 text-center text-sm font-bold text-amber-300">
          Distance path = 12 m
        </div>
      </DiagramLabel>

      <DiagramLabel position={{ left: '64.3%', top: '72.7%' }}>
        <div className="rounded border border-emerald-900/60 bg-slate-950/90 px-3 py-2 text-center text-sm font-bold text-emerald-300">
          Displacement = 8 m northeast
        </div>
      </DiagramLabel>

      <DiagramLabel position={{ left: '11.2%', top: '14%' }}>
        <div className="text-xs font-bold text-sky-300">N</div>
      </DiagramLabel>
      <DiagramLabel position={{ left: '15.5%', top: '25.7%' }}>
        <div className="text-xs font-bold text-slate-300">E</div>
      </DiagramLabel>
      <DiagramLabel position={{ left: '14.2%', top: '18%' }}>
        <div className="text-xs font-bold text-emerald-300">NE</div>
      </DiagramLabel>

      <DiagramLabel position={{ left: '50%', top: '89.3%' }}>
        <div className="text-center text-xs font-semibold text-slate-400 w-full px-4">
          Direction matters for displacement and velocity; path length matters for distance and speed.
        </div>
      </DiagramLabel>
    </div>
  </DiagramPanel>
);

// ==========================================
// Diagram 3: Mechanics Modelling Assumptions
// ==========================================
export const ModellingAssumptionsSVG: React.FC = () => (
  <div className="w-full flex flex-col my-8 relative border border-slate-800 bg-slate-950 p-6 rounded-xl shadow-[8px_8px_0px_#0f172a]">
    <div className="absolute top-0 right-0 bg-slate-900 text-slate-400 border-l border-b border-slate-800 px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
      Fig 3. Common Modelling Assumptions
    </div>
    <p className="text-sm text-slate-400 italic text-center mt-6 mb-2">
      Modelling words are shortcuts for physical assumptions and mathematical consequences.
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
      <div className="border border-slate-800 bg-slate-900 p-4 rounded-xl flex flex-col items-center shadow-inner">
        <span className="font-bold text-xs text-sky-400 uppercase tracking-wider mb-2">Particle</span>
        <svg width="112" height="74" viewBox="0 0 112 74" fill="none" className="my-1">
          <rect x="16" y="17" width="80" height="40" rx="6" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
          <circle cx="56" cy="37" r="8" fill="#38bdf8" />
          <line x1="8" y1="37" x2="40" y2="37" stroke="#475569" strokeWidth="2" />
          <line x1="72" y1="37" x2="104" y2="37" stroke="#475569" strokeWidth="2" />
        </svg>
        <div className="text-xs text-slate-400 bg-slate-950 p-3 rounded w-full border border-slate-800 min-h-24.5 flex flex-col justify-center gap-1">
          <p><strong className="text-slate-200">Meaning:</strong> dimensions negligible; mass treated at one point.</p>
          <p><strong className="text-sky-300">Effect:</strong> ignore rotation, shape, and where forces act on the body.</p>
        </div>
      </div>

      <div className="border border-slate-800 bg-slate-900 p-4 rounded-xl flex flex-col items-center shadow-inner">
        <span className="font-bold text-xs text-sky-400 uppercase tracking-wider mb-2">Smooth Surface</span>
        <svg width="112" height="74" viewBox="0 0 112 74" fill="none" className="my-1">
          <line x1="12" y1="52" x2="100" y2="52" stroke="#38bdf8" strokeWidth="3" />
          <rect x="38" y="26" width="36" height="26" rx="4" stroke="#e2e8f0" strokeWidth="2" fill="#1e293b" />
          <path d="M 22 60 H 90" stroke="#334155" strokeWidth="2" strokeDasharray="4 6" />
        </svg>
        <div className="text-xs text-slate-400 bg-slate-950 p-3 rounded w-full border border-slate-800 min-h-24.5 flex flex-col justify-center gap-1">
          <p><strong className="text-slate-200">Meaning:</strong> no friction at the contact surface.</p>
          <p><strong className="text-sky-300">Effect:</strong> omit the friction force from the force diagram.</p>
        </div>
      </div>

      <div className="border border-slate-800 bg-slate-900 p-4 rounded-xl flex flex-col items-center shadow-inner">
        <span className="font-bold text-xs text-amber-500 uppercase tracking-wider mb-2">Rough Surface</span>
        <svg width="112" height="74" viewBox="0 0 112 74" fill="none" className="my-1">
          <line x1="12" y1="54" x2="100" y2="54" stroke="#64748b" strokeWidth="4" />
          {Array.from({ length: 9 }).map((_, idx) => (
            <line key={idx} x1={20 + idx * 9} y1="54" x2={14 + idx * 9} y2="62" stroke="#475569" strokeWidth="2" />
          ))}
          <rect x="36" y="28" width="40" height="26" rx="4" stroke="#e2e8f0" strokeWidth="2" fill="#1e293b" />
          <path d="M 36 41 H 14" stroke="#f59e0b" strokeWidth="3" />
          <path d="M 16 36 L 10 41 L 16 46" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div className="text-xs text-slate-400 bg-slate-950 p-3 rounded w-full border border-slate-800 min-h-24.5 flex flex-col justify-center gap-1">
          <p><strong className="text-slate-200">Meaning:</strong> friction is present.</p>
          <p><strong className="text-amber-300">Effect:</strong> friction opposes motion or impending motion.</p>
          <MathText content="F \leq \mu R" className="text-amber-400 font-bold [&_p]:m-0" />
        </div>
      </div>

      <div className="border border-slate-800 bg-slate-900 p-4 rounded-xl flex flex-col items-center shadow-inner">
        <span className="font-bold text-xs text-sky-400 uppercase tracking-wider mb-2">Light String / Towbar / Pulley</span>
        <svg width="112" height="74" viewBox="0 0 112 74" fill="none" className="my-1">
          <circle cx="56" cy="36" r="20" stroke="#38bdf8" strokeWidth="2.5" />
          <line x1="16" y1="36" x2="96" y2="36" stroke="#cbd5e1" strokeWidth="3" />
          <text x="45" y="42" className="text-sm font-bold fill-sky-300">0 kg</text>
        </svg>
        <div className="text-xs text-slate-400 bg-slate-950 p-3 rounded w-full border border-slate-800 min-h-24.5 flex flex-col justify-center gap-1">
          <p><strong className="text-slate-200">Meaning:</strong> the connector has negligible mass.</p>
          <p><strong className="text-sky-300">Effect:</strong> do not include its weight or a separate mass term.</p>
        </div>
      </div>

      <div className="border border-slate-800 bg-slate-900 p-4 rounded-xl flex flex-col items-center shadow-inner">
        <span className="font-bold text-xs text-emerald-400 uppercase tracking-wider mb-2">Inextensible String</span>
        <svg width="112" height="74" viewBox="0 0 112 74" fill="none" className="my-1">
          <rect x="12" y="28" width="28" height="22" rx="3" stroke="#64748b" strokeWidth="2" fill="#1e293b" />
          <rect x="72" y="28" width="28" height="22" rx="3" stroke="#64748b" strokeWidth="2" fill="#1e293b" />
          <line x1="40" y1="39" x2="72" y2="39" stroke="#10b981" strokeWidth="3" />
          <path d="M 16 18 H 96" stroke="#10b981" strokeWidth="2" strokeDasharray="6 5" />
        </svg>
        <div className="text-xs text-slate-400 bg-slate-950 p-3 rounded w-full border border-slate-800 min-h-24.5 flex flex-col justify-center gap-1">
          <p><strong className="text-slate-200">Meaning:</strong> the string does not stretch.</p>
          <p><strong className="text-emerald-300">Effect:</strong> connected particles share acceleration magnitude.</p>
          <MathText content="a_1 = a_2" className="text-emerald-400 font-bold [&_p]:m-0" />
        </div>
      </div>

      <div className="border border-slate-800 bg-slate-900 p-4 rounded-xl flex flex-col items-center shadow-inner">
        <span className="font-bold text-xs text-emerald-400 uppercase tracking-wider mb-2">Smooth Pulley</span>
        <svg width="112" height="74" viewBox="0 0 112 74" fill="none" className="my-1">
          <circle cx="56" cy="28" r="20" stroke="#475569" strokeWidth="2.5" />
          <circle cx="56" cy="28" r="4" fill="#475569" />
          <path d="M 36 68 L 36 28 A 20 20 0 0 1 76 28 L 76 68" stroke="#10b981" strokeWidth="3" />
        </svg>
        <div className="text-xs text-slate-400 bg-slate-950 p-3 rounded w-full border border-slate-800 min-h-24.5 flex flex-col justify-center gap-1">
          <p><strong className="text-slate-200">Meaning:</strong> no friction at the pulley.</p>
          <p><strong className="text-emerald-300">Effect:</strong> tension is the same on both sides.</p>
          <MathText content="T_1 = T_2" className="text-emerald-400 font-bold [&_p]:m-0" />
        </div>
      </div>

      <div className="border border-slate-800 bg-slate-900 p-4 rounded-xl flex flex-col items-center shadow-inner md:col-span-2 xl:col-span-1">
        <span className="font-bold text-xs text-rose-400 uppercase tracking-wider mb-2">Rigid Rod / Towbar</span>
        <svg width="112" height="74" viewBox="0 0 112 74" fill="none" className="my-1">
          <rect x="10" y="28" width="26" height="22" rx="3" stroke="#64748b" strokeWidth="2" fill="#1e293b" />
          <rect x="76" y="28" width="26" height="22" rx="3" stroke="#64748b" strokeWidth="2" fill="#1e293b" />
          <line x1="36" y1="39" x2="76" y2="39" stroke="#e2e8f0" strokeWidth="5" strokeLinecap="round" />
          <path d="M 42 54 H 70" stroke="#fb7185" strokeWidth="2" strokeDasharray="5 4" />
        </svg>
        <div className="text-xs text-slate-400 bg-slate-950 p-3 rounded w-full border border-slate-800 min-h-24.5 flex flex-col justify-center gap-1">
          <p><strong className="text-slate-200">Meaning:</strong> does not bend or buckle.</p>
          <p><strong className="text-rose-300">Effect:</strong> keeps a fixed distance between connected bodies.</p>
        </div>
      </div>
    </div>

    <div className="grid gap-4 mt-4 md:grid-cols-2">
      <div className="p-4 bg-rose-950/30 border border-rose-900/50 rounded-xl text-sm text-rose-200">
        <strong className="text-rose-300">Rigid light towbar:</strong> rigid = does not bend; light = negligible mass.
      </div>
      <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl text-sm text-slate-300">
        <strong className="text-rose-300">Exam trap:</strong> modelling words are instructions. Do not ignore words like light, smooth, rigid, or inextensible.
      </div>
    </div>
  </div>
);

// ==========================================
// Diagram 3b: Modelling Sandbox
// ==========================================
export const M1ModellingSandboxSVG: React.FC = () => (
  <DiagramPanel
    title="Fig 3b. Modelling Sandbox"
    analysis={
      <div className="grid gap-3 md:grid-cols-3 w-full max-w-3xl">
        <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-3 text-sm text-slate-300">
          A model is not claiming reality is perfect. It keeps only the features needed for the maths.
        </div>
        <div className="rounded-lg border border-sky-900/50 bg-sky-950/20 p-3 text-sm text-sky-200">
          Use the exact modelling words from the question in your answer.
        </div>
        <div className="rounded-lg border border-rose-900/50 bg-rose-950/30 p-3 text-sm text-rose-200">
          Rigid light towbar: fixed distance, negligible mass.
        </div>
        <div className="md:col-span-3 rounded-lg border border-emerald-900/50 bg-emerald-950/20 p-3 text-center text-sm font-semibold text-emerald-200">
          Exam technique: translate each modelling word into a mathematical effect before writing equations.
        </div>
      </div>
    }
  >
    <svg width="100%" viewBox="0 0 760 410" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" className="max-w-4xl" role="img" aria-label="Real world towing system simplified into a mathematical model using assumptions">
      <defs>
        <marker id="sandbox-arrow-main" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
          <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#38bdf8" />
        </marker>
        <marker id="sandbox-arrow-emerald" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#10b981" />
        </marker>
        <marker id="sandbox-arrow-amber" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#f59e0b" />
        </marker>
      </defs>

      {/* Panels */}
      <rect x="24" y="28" width="300" height="244" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="1.8" />
      <rect x="436" y="28" width="300" height="244" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="1.8" />

      <foreignObject x="44" y="46" width="260" height="38">
        <div className="text-center">
          <div className="text-base font-bold text-amber-300">Real Situation</div>
          <div className="text-xs text-slate-400">Real system: detailed and messy</div>
        </div>
      </foreignObject>
      <foreignObject x="456" y="46" width="260" height="38">
        <div className="text-center">
          <div className="text-base font-bold text-emerald-300">Mathematical Model</div>
          <div className="text-xs text-slate-400">Model: simplified for equations</div>
        </div>
      </foreignObject>

      {/* Real-world towing sketch */}
      <line x1="48" y1="218" x2="300" y2="218" stroke="#64748b" strokeWidth="3" />
      {Array.from({ length: 11 }).map((_, idx) => (
        <line key={idx} x1={58 + idx * 22} y1="218" x2={50 + idx * 22} y2="228" stroke="#334155" strokeWidth="2" />
      ))}
      <rect x="64" y="154" width="82" height="38" rx="5" fill="#1e293b" stroke="#e2e8f0" strokeWidth="2" />
      <path d="M 78 154 L 94 132 H 128 L 142 154" stroke="#e2e8f0" strokeWidth="2" fill="#334155" />
      <circle cx="82" cy="198" r="10" fill="#020617" stroke="#cbd5e1" strokeWidth="2" />
      <circle cx="128" cy="198" r="10" fill="#020617" stroke="#cbd5e1" strokeWidth="2" />
      <rect x="198" y="164" width="64" height="30" rx="4" fill="#1e293b" stroke="#cbd5e1" strokeWidth="2" />
      <path d="M 210 164 L 224 146 H 248 L 260 164" stroke="#cbd5e1" strokeWidth="2" fill="#334155" />
      <circle cx="214" cy="200" r="8" fill="#020617" stroke="#cbd5e1" strokeWidth="2" />
      <circle cx="250" cy="200" r="8" fill="#020617" stroke="#cbd5e1" strokeWidth="2" />
      <line x1="146" y1="178" x2="198" y2="178" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" />
      <path d="M 294 154 C 274 146, 268 132, 292 122" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 5" fill="none" />
      <path d="M 60 132 C 42 124, 44 110, 64 104" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 5" fill="none" />
      <foreignObject x="50" y="88" width="250" height="36">
        <div className="grid grid-cols-3 gap-2 text-center text-[11px] font-semibold text-amber-200">
          <div className="rounded border border-amber-900/60 bg-slate-950/80 px-2 py-1">shape</div>
          <div className="rounded border border-amber-900/60 bg-slate-950/80 px-2 py-1">wheels</div>
          <div className="rounded border border-amber-900/60 bg-slate-950/80 px-2 py-1">air</div>
        </div>
      </foreignObject>

      {/* Assumption arrow */}
      <line x1="338" y1="148" x2="420" y2="148" stroke="#38bdf8" strokeWidth="3.5" markerEnd="url(#sandbox-arrow-main)" />
      <foreignObject x="332" y="100" width="96" height="46">
        <div className="rounded border border-sky-900/60 bg-slate-950 px-2 py-2 text-center text-xs font-bold leading-tight text-sky-300">
          Apply assumptions
        </div>
      </foreignObject>

      {/* Simplified model */}
      <line x1="468" y1="218" x2="704" y2="218" stroke="#38bdf8" strokeWidth="2.5" />
      <circle cx="526" cy="178" r="20" fill="#022c22" stroke="#10b981" strokeWidth="3" />
      <circle cx="646" cy="178" r="20" fill="#022c22" stroke="#10b981" strokeWidth="3" />
      <text x="518" y="184" className="text-sm font-bold fill-emerald-200">m1</text>
      <text x="638" y="184" className="text-sm font-bold fill-emerald-200">m2</text>
      <line x1="546" y1="178" x2="626" y2="178" stroke="#e2e8f0" strokeWidth="4" strokeLinecap="round" />
      <path d="M 496 132 H 676" stroke="#10b981" strokeWidth="2.8" markerEnd="url(#sandbox-arrow-emerald)" />
      <foreignObject x="680" y="120" width="30" height="24">
        <MathText content="a" className="text-lg font-bold text-emerald-300 [&_p]:m-0" />
      </foreignObject>
      <path d="M 482 178 H 512" stroke="#f59e0b" strokeWidth="2.8" markerEnd="url(#sandbox-arrow-amber)" />
      <foreignObject x="458" y="156" width="48" height="24">
        <MathText content="D" className="text-sm font-bold text-amber-300 [&_p]:m-0" />
      </foreignObject>
      <foreignObject x="558" y="152" width="56" height="24">
        <div className="rounded border border-slate-800 bg-slate-950/90 text-center text-xs font-bold text-slate-200">
          towbar
        </div>
      </foreignObject>
      <foreignObject x="470" y="228" width="230" height="38">
        <div className="text-center text-xs font-semibold leading-tight text-emerald-200">
          clean particles/blocks on a horizontal surface
        </div>
      </foreignObject>

      {/* Assumption chips */}
      <foreignObject x="52" y="294" width="656" height="88">
        <div className="grid grid-cols-2 gap-2 text-center text-xs font-semibold text-sky-200 md:grid-cols-5">
          <div className="rounded border border-sky-900/60 bg-sky-950/30 px-2 py-2">particle: dimensions ignored</div>
          <div className="rounded border border-sky-900/60 bg-sky-950/30 px-2 py-2">light towbar: negligible mass</div>
          <div className="rounded border border-sky-900/60 bg-sky-950/30 px-2 py-2">rigid towbar: does not bend</div>
          <div className="rounded border border-sky-900/60 bg-sky-950/30 px-2 py-2">smooth surface: no friction</div>
          <div className="rounded border border-sky-900/60 bg-sky-950/30 px-2 py-2">inextensible idea: same acceleration</div>
        </div>
      </foreignObject>
    </svg>
  </DiagramPanel>
);

// ==========================================
// Diagram 4: Towing Model
// ==========================================
export const TowingModelSVG: React.FC = () => (
  <DiagramPanel
    title="Fig. Towing Dynamics"
    analysis={
      <div className="grid gap-3 md:grid-cols-3 w-full max-w-4xl">
        <div className="rounded-lg border border-amber-900/50 bg-slate-900/50 p-3 text-sm text-slate-300">
          <h4 className="mb-2 font-bold text-amber-300">Whole system</h4>
          <p className="mb-2">Find common acceleration. Internal connecting forces cancel.</p>
          <div className="rounded border border-slate-800 bg-slate-950 p-2 text-center">
            <MathText content="D - R_1 - R_2 = (m_1 + m_2)a" className="text-amber-300 font-semibold [&_p]:m-0" />
          </div>
        </div>
        <div className="rounded-lg border border-emerald-900/50 bg-slate-900/50 p-3 text-sm text-slate-300">
          <h4 className="mb-2 font-bold text-emerald-300">Isolate one vehicle</h4>
          <p className="mb-2">Find the towbar force by modelling one vehicle only.</p>
          <div className="rounded border border-slate-800 bg-slate-950 p-2 text-center">
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
    <svg width="100%" viewBox="0 0 760 420" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" className="max-w-4xl" role="img" aria-label="Towing dynamics model with whole system and isolated vehicle methods">
      <defs>
        <marker id="tow-arrow-emerald" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#10b981" />
        </marker>
        <marker id="tow-arrow-sky" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#38bdf8" />
        </marker>
        <marker id="tow-arrow-amber" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#f59e0b" />
        </marker>
        <marker id="tow-arrow-rose" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#fb7185" />
        </marker>
      </defs>

      <rect x="28" y="24" width="704" height="266" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="1.8" />

      {/* Method outlines */}
      <rect x="70" y="96" width="520" height="148" rx="10" stroke="#f59e0b" strokeWidth="2" strokeDasharray="8 6" />
      <rect x="86" y="112" width="150" height="114" rx="8" stroke="#10b981" strokeWidth="2" strokeDasharray="7 5" />

      <foreignObject x="86" y="54" width="168" height="30">
        <div className="rounded border border-amber-900/60 bg-slate-950 px-3 py-1 text-center text-sm font-bold text-amber-300">
          whole system
        </div>
      </foreignObject>
      <foreignObject x="104" y="244" width="128" height="28">
        <div className="rounded border border-emerald-900/60 bg-slate-950 px-3 py-1 text-center text-sm font-bold text-emerald-300">
          isolated vehicle
        </div>
      </foreignObject>

      {/* Road */}
      <line x1="56" y1="216" x2="704" y2="216" stroke="#475569" strokeWidth="2.5" />
      {Array.from({ length: 25 }).map((_, idx) => (
        <line key={idx} x1={68 + idx * 25} y1="216" x2={58 + idx * 25} y2="228" stroke="#334155" strokeWidth="1.6" />
      ))}

      {/* Broken-down car */}
      <rect x="104" y="162" width="108" height="38" rx="5" stroke="#e2e8f0" strokeWidth="1.8" fill="#1e293b" />
      <path d="M 124 162 L 140 138 H 182 L 204 162" stroke="#e2e8f0" strokeWidth="1.8" fill="#334155" />
      <circle cx="126" cy="204" r="10" stroke="#cbd5e1" strokeWidth="1.8" fill="#020617" />
      <circle cx="190" cy="204" r="10" stroke="#cbd5e1" strokeWidth="1.8" fill="#020617" />
      <foreignObject x="136" y="168" width="44" height="24">
        <MathText content="m_1" className="text-sm font-bold text-slate-200 [&_p]:m-0" />
      </foreignObject>

      {/* Towbar */}
      <line x1="212" y1="182" x2="334" y2="182" stroke="#e2e8f0" strokeWidth="4" strokeLinecap="round" />
      <foreignObject x="228" y="128" width="96" height="34">
        <div className="rounded border border-sky-900/60 bg-slate-950 px-2 py-1 text-center text-xs font-bold text-sky-300">
          rigid light towbar
        </div>
      </foreignObject>

      {/* Rescue vehicle */}
      <rect x="334" y="150" width="152" height="50" rx="5" stroke="#e2e8f0" strokeWidth="1.8" fill="#1e293b" />
      <path d="M 362 150 L 388 122 H 450 L 478 150" stroke="#e2e8f0" strokeWidth="1.8" fill="#334155" />
      <circle cx="364" cy="206" r="12" stroke="#cbd5e1" strokeWidth="1.8" fill="#020617" />
      <circle cx="458" cy="206" r="12" stroke="#cbd5e1" strokeWidth="1.8" fill="#020617" />
      <foreignObject x="394" y="160" width="48" height="24">
        <MathText content="m_2" className="text-sm font-bold text-slate-200 [&_p]:m-0" />
      </foreignObject>

      {/* Common acceleration */}
      <path d="M 270 68 H 500" stroke="#38bdf8" strokeWidth="3" markerEnd="url(#tow-arrow-sky)" />
      <foreignObject x="510" y="50" width="130" height="44">
        <div className="rounded border border-sky-900/60 bg-slate-950 px-3 py-2 text-center text-xs font-bold leading-tight text-sky-300">
          common acceleration <MathText content="a" className="inline [&_p]:inline [&_p]:m-0" />
        </div>
      </foreignObject>

      {/* Internal towbar forces */}
      <path d="M 218 182 H 278" stroke="#10b981" strokeWidth="2.6" markerEnd="url(#tow-arrow-emerald)" />
      <path d="M 328 182 H 268" stroke="#10b981" strokeWidth="2.6" markerEnd="url(#tow-arrow-emerald)" />
      <foreignObject x="246" y="190" width="54" height="24">
        <MathText content="T" className="text-base font-bold text-emerald-300 [&_p]:m-0" />
      </foreignObject>
      <foreignObject x="320" y="100" width="150" height="36">
        <div className="rounded border border-emerald-900/60 bg-slate-950 px-3 py-1 text-center text-xs font-semibold leading-tight text-emerald-200">
          internal forces cancel
        </div>
      </foreignObject>

      {/* External forces */}
      <path d="M 486 176 H 548" stroke="#f59e0b" strokeWidth="3.2" markerEnd="url(#tow-arrow-amber)" />
      <foreignObject x="554" y="162" width="34" height="28">
        <MathText content="D" className="text-lg font-bold text-amber-300 [&_p]:m-0" />
      </foreignObject>
      <path d="M 104 190 H 56" stroke="#fb7185" strokeWidth="2.6" markerEnd="url(#tow-arrow-rose)" />
      <foreignObject x="54" y="160" width="42" height="26">
        <MathText content="R_1" className="text-sm font-bold text-rose-300 [&_p]:m-0" />
      </foreignObject>
      <path d="M 334 190 H 286" stroke="#fb7185" strokeWidth="2.6" markerEnd="url(#tow-arrow-rose)" />
      <foreignObject x="288" y="214" width="42" height="26">
        <MathText content="R_2" className="text-sm font-bold text-rose-300 [&_p]:m-0" />
      </foreignObject>

      {/* Exam notes */}
      <foreignObject x="58" y="308" width="644" height="76">
        <div className="grid grid-cols-3 gap-3 text-center text-xs font-semibold leading-tight text-slate-300">
          <div className="rounded border border-sky-900/60 bg-sky-950/20 px-3 py-2"><span className="text-sky-300">Rigid towbar:</span> does not bend or buckle; fixed distance between vehicles.</div>
          <div className="rounded border border-sky-900/60 bg-sky-950/20 px-3 py-2"><span className="text-sky-300">Light towbar:</span> negligible mass.</div>
          <div className="rounded border border-emerald-900/60 bg-emerald-950/20 px-3 py-2"><span className="text-emerald-300">Isolate one vehicle</span> to find tension/thrust.</div>
        </div>
      </foreignObject>
    </svg>
  </DiagramPanel>
);

// ==========================================
// Diagram 5: Lift Physics
// ==========================================
export const LiftPhysicsSVG: React.FC = () => (
  <DiagramPanel
    title="Lift Physics Isolation"
    analysis={
      <div className="grid gap-3 md:grid-cols-2 w-full max-w-3xl">
        <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-3 text-sm text-slate-300">
          <strong className="text-sky-300">Whole system:</strong> use the lift + passenger together to find cable tension <MathText content="T" className="inline [&_p]:inline [&_p]:m-0" />.
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-3 text-sm text-slate-300">
          <strong className="text-amber-300">Isolated passenger:</strong> use the passenger only to find floor reaction <MathText content="R" className="inline [&_p]:inline [&_p]:m-0" />.
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-3 text-sm text-slate-300">
          <strong className="text-emerald-300">Weight:</strong> acts vertically downwards and is measured in newtons.
        </div>
        <div className="rounded-lg border border-rose-900/50 bg-rose-950/30 p-3 text-sm text-rose-300">
          <strong className="text-rose-300">Exam Pitfall:</strong> Do not include the passenger reaction <MathText content="R" className="inline [&_p]:inline [&_p]:m-0" /> when modelling the whole lift + passenger system. It is an internal force and cancels out.
        </div>
        <div className="md:col-span-2 rounded-lg border border-emerald-900/50 bg-emerald-950/20 p-3 text-center text-sm font-semibold text-emerald-200">
          Use this idea later in M3 lift dynamics.
        </div>
      </div>
    }
  >
    <div className="relative w-full aspect-76/39 max-w-4xl mx-auto rounded-xl overflow-hidden border border-slate-800/50 bg-slate-950 shadow-[8px_8px_0px_#0f172a]">
      <SVGLibrary />
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 760 390" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" role="img" aria-label="Lift physics isolation diagram comparing whole lift system and isolated passenger">
        {/* Panels */}
        <rect x="24" y="28" width="340" height="300" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="2" />
        <rect x="396" y="28" width="340" height="300" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="2" />

        {/* Whole-system model */}
        <rect x="118" y="92" width="152" height="168" rx="10" stroke={themeColors.applied} strokeWidth="2.5" strokeDasharray="8 6" fill="#020617" fillOpacity="0.35" />
        <line x1="194" y1="58" x2="194" y2="110" stroke="#cbd5e1" strokeWidth="3" />
        <ObjectBlock x={132} y={110} width={124} height={120} />
        <line x1="132" y1="142" x2="256" y2="142" stroke="#475569" strokeWidth="2" />
        <circle cx="194" cy="164" r="14" stroke="#cbd5e1" strokeWidth="2" fill="#334155" />
        <line x1="194" y1="178" x2="194" y2="210" stroke="#cbd5e1" strokeWidth="2.5" />
        <line x1="176" y1="220" x2="194" y2="210" stroke="#cbd5e1" strokeWidth="2.5" />
        <line x1="212" y1="220" x2="194" y2="210" stroke="#cbd5e1" strokeWidth="2.5" />

        <VectorArrow x1={194} y1={112} x2={194} y2={48} type="accel" marker="default" />
        <VectorArrow x1={194} y1={230} x2={194} y2={292} type="force" marker="default" />
        <VectorArrow x1={88} y1={218} x2={88} y2={150} type="velocity" marker="default" />

        {/* Passenger-only model */}
        <rect x="514" y="118" width="96" height="136" rx="10" stroke={themeColors.applied} strokeWidth="2.5" strokeDasharray="8 6" fill="#020617" fillOpacity="0.35" />
        <line x1="470" y1="226" x2="654" y2="226" stroke="#475569" strokeWidth="4" />
        <circle cx="562" cy="152" r="18" stroke="#e2e8f0" strokeWidth="2.5" fill="#1e293b" />
        <line x1="562" y1="170" x2="562" y2="212" stroke="#e2e8f0" strokeWidth="2.5" />
        <line x1="538" y1="226" x2="562" y2="212" stroke="#e2e8f0" strokeWidth="2.5" />
        <line x1="586" y1="226" x2="562" y2="212" stroke="#e2e8f0" strokeWidth="2.5" />

        <VectorArrow x1={526} y1={226} x2={526} y2={148} type="accel" marker="default" />
        <VectorArrow x1={602} y1={154} x2={602} y2={274} type="force" marker="default" />
        <VectorArrow x1={682} y1={218} x2={682} y2={150} type="velocity" marker="default" />
      </svg>

      <DiagramLabel position={{ left: '25.5%', top: '16.7%' }}>
        <div className="text-center">
          <div className="text-base font-bold text-sky-300">Whole system: lift + passenger</div>
          <div className="text-xs text-slate-400">Use to find cable tension</div>
        </div>
      </DiagramLabel>

      <DiagramLabel position={{ left: '74.5%', top: '16.7%' }}>
        <div className="text-center">
          <div className="text-base font-bold text-amber-300">Isolated passenger</div>
          <div className="text-xs text-slate-400">Use to find floor reaction</div>
        </div>
      </DiagramLabel>

      <DiagramLabel position={{ left: '30.4%', top: '17.9%' }}>
        <MathText content="T" className="text-xl font-bold text-emerald-300 [&_p]:m-0" />
      </DiagramLabel>

      <DiagramLabel position={{ left: '33.8%', top: '73.1%' }}>
        <MathText content="(M+m)g" className="text-lg font-bold text-rose-300 [&_p]:m-0" />
      </DiagramLabel>

      <DiagramLabel position={{ left: '9.9%', top: '44.9%' }}>
        <MathText content="a" className="text-xl font-bold text-sky-300 [&_p]:m-0" />
      </DiagramLabel>

      <DiagramLabel position={{ left: '25.7%', top: '76.7%' }}>
        <div className="rounded-lg border border-emerald-900/60 bg-slate-950 px-3 py-1 text-center text-sm font-bold text-emerald-300">
          <MathText content="T - (M + m)g = (M + m)a" className="[&_p]:m-0" />
        </div>
      </DiagramLabel>

      <DiagramLabel position={{ left: '66.2%', top: '43.3%' }}>
        <MathText content="R" className="text-xl font-bold text-emerald-300 [&_p]:m-0" />
      </DiagramLabel>

      <DiagramLabel position={{ left: '84.1%', top: '64.4%' }}>
        <MathText content="mg" className="text-xl font-bold text-rose-300 [&_p]:m-0" />
      </DiagramLabel>

      <DiagramLabel position={{ left: '93%', top: '44.9%' }}>
        <MathText content="a" className="text-xl font-bold text-sky-300 [&_p]:m-0" />
      </DiagramLabel>

      <DiagramLabel position={{ left: '74.5%', top: '76.7%' }}>
        <div className="rounded-lg border border-amber-900/60 bg-slate-950 px-3 py-1 text-center text-sm font-bold text-amber-300">
          <MathText content="R - mg = ma" className="[&_p]:m-0" />
        </div>
      </DiagramLabel>

      <DiagramLabel position={{ left: '50%', top: '91.8%' }}>
        <div className="grid grid-cols-3 gap-3 text-center text-xs font-semibold text-slate-300 w-full px-4">
          <div className="rounded border border-slate-800 bg-slate-900/60 px-2 py-1"><span className="text-emerald-300">emerald</span>/<span className="text-sky-300">sky</span> arrow = upward force</div>
          <div className="rounded border border-slate-800 bg-slate-900/60 px-2 py-1"><span className="text-rose-300">rose</span> arrow = weight</div>
          <div className="rounded border border-slate-800 bg-slate-900/60 px-2 py-1"><span className="text-amber-300">amber dashed outline</span> = chosen system</div>
        </div>
      </DiagramLabel>
    </div>
  </DiagramPanel>
);

// ==========================================
// Diagram 6: CCEA Examiner Warning Trap (Restored)
// ==========================================
export const M1ExamTrapSVG: React.FC = () => (
  <div className="w-full border border-rose-500/40 bg-slate-950 p-6 rounded-xl my-8 relative overflow-hidden shadow-[8px_8px_0px_#4c0519]">
    <div className="absolute top-0 right-0 bg-rose-600 text-slate-50 text-[9px] uppercase tracking-widest font-black px-3 py-1 font-sans">
      CCEA Examiner Warning
    </div>
    <h4 className="text-rose-400 font-bold text-sm mb-2 uppercase tracking-wider mt-2">
      The Multiple Responses Penalty Rule
    </h4>
    <p className="text-xs text-slate-300 leading-relaxed mb-6">
      If you are unsure of a sign convention or mathematical method and present two competing solutions on your sheet without clearly crossing one out, 
      <strong className="text-rose-300"> CCEA examiners are required to mark all attempts and award marks based on the POOREST solution.</strong>
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
      {/* Penalized Choice Column */}
      <div className="border border-rose-950/60 bg-rose-950/20 p-4 rounded-lg relative opacity-60">
        <div className="absolute top-2 right-2 text-rose-500 font-bold text-[9px] uppercase tracking-wider">Penalized</div>
        <span className="block font-bold text-slate-400 mb-2">Attempt 1: Upwards Positive</span>
        <code className="text-slate-400 block font-mono text-[10px] bg-slate-950 p-2 rounded tracking-wide mb-3 border border-slate-800">
          0 = 21 - 9.8t ⇒ t = 2.14s
        </code>
        <span className="block font-bold text-slate-400 mb-2">Attempt 2: Downwards Positive</span>
        <code className="text-slate-400 block font-mono text-[10px] bg-slate-950 p-2 rounded tracking-wide border border-slate-800">
          0 = 21 + 9.8t ⇒ t = -2.14s
        </code>
        <p className="text-[10px] text-rose-400/80 italic mt-3 leading-tight">
          Result: Both versions are scanned. Marks are restricted exclusively to the flawed calculation.
        </p>
      </div>

      {/* Correct Practice Column */}
      <div className="border border-emerald-900/60 bg-emerald-950/20 p-4 rounded-lg relative">
        <div className="absolute top-2 right-2 text-emerald-400 font-bold text-[9px] uppercase tracking-wider">Correct Practice</div>
        <span className="block font-bold text-slate-200 mb-2">Discarded Attempt</span>
        <div className="relative inline-block w-full mb-3">
          <div className="absolute inset-0 bg-linear-to-tr from-transparent via-rose-500/50 to-transparent h-0.5 top-1/2 transform -rotate-2" />
          <code className="text-slate-500 block font-mono text-[10px] bg-slate-950 p-2 rounded tracking-wide line-through decoration-rose-500/80 border border-slate-800">
            0 = 21 + 9.8t ⇒ t = -2.14s
          </code>
        </div>
        <span className="block font-bold text-slate-200 mb-2">Active Clean Solution</span>
        <code className="text-emerald-400 block font-mono text-[10px] bg-slate-950 p-2 rounded tracking-wide font-bold border border-emerald-900">
          0 = 21 - 9.8t ⇒ t = 2.14s ✓
        </code>
        <p className="text-[10px] text-emerald-400/80 italic mt-3 leading-tight">
          Result: Cross out flawed models with a single line to ensure only your intended work remains active.
        </p>
      </div>
    </div>
  </div>
);


export const M1KinematicNotationPanel: React.FC = () => {
  return (
    <DiagramPanel
      title="Fig. Kinematic Notation Legend"
      analysis={
        <div className="grid gap-3 md:grid-cols-2 w-full max-w-3xl">
          <div className="rounded-lg border border-sky-900/50 bg-sky-950/20 p-3 text-sm text-sky-200">
            <strong className="text-sky-300">Choose a positive direction</strong> before using signs.
          </div>
          <div className="rounded-lg border border-rose-900/50 bg-rose-950/30 p-3 text-sm text-rose-200">
            <strong className="text-rose-300">Common trap:</strong> <MathText content="s" className="inline [&_p]:inline [&_p]:m-0" /> is displacement, not speed.
          </div>
        </div>
      }
    >
      <div className="w-full flex flex-col items-center">
        <svg width="100%" viewBox="0 0 760 190" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" className="max-w-4xl mb-5" role="img" aria-label="Kinematic position axis showing origin initial position final position and displacement">
          <defs>
            <marker id="notation-arrow-sky" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#38bdf8" />
            </marker>
            <marker id="notation-arrow-emerald" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#10b981" />
            </marker>
          </defs>

          <rect x="36" y="28" width="688" height="132" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="2" />

          {/* Axis */}
          <line x1="92" y1="96" x2="668" y2="96" stroke="#475569" strokeWidth="3" />
          <line x1="92" y1="96" x2="690" y2="96" stroke="#38bdf8" strokeWidth="3" markerEnd="url(#notation-arrow-sky)" />
          <text x="558" y="78" className="text-sm font-bold fill-sky-300">positive direction</text>

          {/* Position markers */}
          <circle cx="146" cy="96" r="6" fill="#e2e8f0" />
          <line x1="146" y1="78" x2="146" y2="114" stroke="#e2e8f0" strokeWidth="2" />
          <text x="139" y="133" className="text-base font-bold fill-slate-200">O</text>
          <text x="126" y="150" className="text-xs font-semibold fill-slate-400">origin</text>

          <circle cx="274" cy="96" r="6" fill="#38bdf8" />
          <line x1="274" y1="70" x2="274" y2="122" stroke="#38bdf8" strokeWidth="2" />
          <foreignObject x="250" y="126" width="58" height="28">
            <div className="text-center text-sm font-bold text-sky-300">
              <MathText content="x_0" className="[&_p]:m-0" />
            </div>
          </foreignObject>
          <text x="226" y="62" className="text-xs font-semibold fill-slate-300">initial position</text>

          <circle cx="560" cy="96" r="6" fill="#10b981" />
          <line x1="560" y1="70" x2="560" y2="122" stroke="#10b981" strokeWidth="2" />
          <foreignObject x="544" y="126" width="36" height="28">
            <div className="text-center text-sm font-bold text-emerald-300">
              <MathText content="x" className="[&_p]:m-0" />
            </div>
          </foreignObject>
          <text x="518" y="62" className="text-xs font-semibold fill-slate-300">final position</text>

          {/* Displacement */}
          <path d="M 284 44 H 550" stroke="#10b981" strokeWidth="4" markerEnd="url(#notation-arrow-emerald)" />
          <foreignObject x="350" y="16" width="160" height="34">
            <div className="rounded border border-emerald-900/60 bg-slate-950 px-3 py-2 text-center text-sm font-bold text-emerald-300">
              <MathText content="s = x - x_0" className="[&_p]:m-0" />
            </div>
          </foreignObject>

          <foreignObject x="278" y="150" width="260" height="30">
            <div className="rounded border border-rose-900/60 bg-rose-950/40 px-3 py-1 text-center text-xs font-bold text-rose-200">
              s is displacement, not speed
            </div>
          </foreignObject>
        </svg>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 w-full max-w-4xl">
          {notation.map(item => (
            <div key={item.symbol} className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg text-center flex flex-col items-center justify-center min-h-33">
              <div className={`text-3xl font-mono font-bold ${item.color}`}><MathText content={item.symbol} /></div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mt-2">{item.name}</div>
              <div className="mt-2 rounded border border-slate-800 bg-slate-950 px-2 py-1 text-xs font-semibold text-slate-300">
                <MathText content={item.unit} className="[&_p]:m-0" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </DiagramPanel>
  );
};

const notation = [
  { symbol: 's', name: 'Displacement', unit: '\\text{m}', color: 'text-emerald-400' },
  { symbol: 'u', name: 'Initial Velocity', unit: '\\text{m s}^{-1}', color: 'text-amber-400' },
  { symbol: 'v', name: 'Final Velocity', unit: '\\text{m s}^{-1}', color: 'text-amber-400' },
  { symbol: 'a', name: 'Acceleration', unit: '\\text{m s}^{-2}', color: 'text-sky-400' },
  { symbol: 't', name: 'Time', unit: '\\text{s}', color: 'text-slate-300' },
];


type Force = 'weight' | 'reaction' | 'friction' | 'tension' | 'applied';
type FreeBodyScenario = 'smooth' | 'rough' | 'string' | 'applied';

const scenarioDefaults: Record<FreeBodyScenario, Record<Force, boolean>> = {
  smooth: { weight: true, reaction: true, friction: false, tension: false, applied: false },
  rough: { weight: true, reaction: true, friction: true, tension: false, applied: false },
  string: { weight: true, reaction: true, friction: false, tension: true, applied: false },
  applied: { weight: true, reaction: true, friction: false, tension: false, applied: true },
};

const scenarioLabels: Record<FreeBodyScenario, string> = {
  smooth: 'Smooth table',
  rough: 'Rough table',
  string: 'Pulled by string',
  applied: 'Applied force',
};

const forceLabels: Record<Force, string> = {
  weight: 'Weight',
  reaction: 'Reaction',
  friction: 'Friction',
  tension: 'Tension',
  applied: 'Applied force',
};

export const M1FreeBodyDiagram: React.FC = () => {
  const [scenario, setScenario] = useState<FreeBodyScenario>('smooth');
  const [forces, setForces] = useState<Record<Force, boolean>>(scenarioDefaults.smooth);

  const selectScenario = (nextScenario: FreeBodyScenario) => {
    setScenario(nextScenario);
    setForces(scenarioDefaults[nextScenario]);
  };

  const toggleForce = (force: Force) => {
    if (scenario === 'smooth' && force === 'friction') return;
    setForces(prev => ({ ...prev, [force]: !prev[force] }));
  };

  return (
    <DiagramPanel
      title="Fig. Interactive Free-Body Diagram"
      analysis={
        <div className="space-y-3">
          <div className="grid gap-3 md:grid-cols-3">
            <div className="rounded-lg border border-sky-900/50 bg-sky-950/20 p-3 text-sm text-sky-200">
              <strong className="text-sky-300">Smooth surface</strong> means no friction.
            </div>
            <div className="rounded-lg border border-amber-900/50 bg-amber-950/20 p-3 text-sm text-amber-200">
              <strong className="text-amber-300">Rough surface</strong> means friction opposes motion.
            </div>
            <div className="rounded-lg border border-rose-900/50 bg-rose-950/25 p-3 text-sm text-rose-200">
              <strong className="text-rose-300">Object only:</strong> include forces acting on this object, not forces it exerts.
            </div>
          </div>
          <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-3 text-sm text-slate-300">
            A free-body diagram shows only external forces acting on the selected object. Weight <MathText content="mg" className="inline text-rose-300 [&_p]:inline [&_p]:m-0" /> acts vertically downwards; reaction <MathText content="R" className="inline text-emerald-300 [&_p]:inline [&_p]:m-0" /> is perpendicular to the surface.
          </div>
          <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-3 text-sm text-slate-300">
            Tension <MathText content="T" className="inline text-sky-300 [&_p]:inline [&_p]:m-0" /> appears if a string, towbar, or cable pulls on the object. Applied force <MathText content="P" className="inline text-violet-300 [&_p]:inline [&_p]:m-0" /> appears only when a direct force is given.
          </div>
        </div>
      }
    >
      <div className="flex w-full flex-col items-center gap-4">
        <div className="grid w-full max-w-4xl gap-4 lg:grid-cols-[1fr_1.15fr]">
          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
            <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-sky-300">Scenario</h4>
            <div className="grid grid-cols-2 gap-2">
              {(Object.keys(scenarioLabels) as FreeBodyScenario[]).map(option => (
                <button
                  key={option}
                  type="button"
                  onClick={() => selectScenario(option)}
                  className={`rounded-lg border px-3 py-2 text-left text-xs font-semibold transition-all duration-300 ${
                    scenario === option
                      ? 'border-sky-500/50 bg-sky-950/60 text-sky-100 shadow-[0_0_15px_rgba(14,165,233,0.15)]'
                      : 'border-slate-800/50 bg-slate-950 text-slate-400 hover:border-slate-700 hover:bg-slate-900/50'
                  }`}
                >
                  {scenarioLabels[option]}
                </button>
              ))}
            </div>

            <h4 className="mb-3 mt-6 text-xs font-bold uppercase tracking-wider text-slate-400">Forces on the object</h4>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1">
              {(Object.keys(forceLabels) as Force[]).map(force => {
                const disabled = scenario === 'smooth' && force === 'friction';
                return (
                  <label
                    key={force}
                    className={`flex items-center justify-between gap-3 rounded-lg border px-3 py-2 text-sm transition-all duration-300 ${
                      disabled
                        ? 'cursor-not-allowed border-slate-800/30 bg-slate-950/50 text-slate-600'
                        : 'cursor-pointer border-slate-800/50 bg-slate-950 text-slate-300 hover:border-slate-700 hover:bg-slate-900/50'
                    }`}
                  >
                    <span>{forceLabels[force]}</span>
                    <input
                      type="checkbox"
                      checked={forces[force]}
                      disabled={disabled}
                      onChange={() => toggleForce(force)}
                      className="h-4 w-4 rounded border-slate-700 bg-slate-900 text-sky-500 focus:ring-sky-500/50 focus:ring-offset-0 disabled:opacity-40 transition-colors"
                    />
                  </label>
                );
              })}
            </div>
          </div>

          <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden border border-slate-800/50 bg-slate-950 shadow-[8px_8px_0px_#0f172a]">
            <SVGLibrary />
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 560 420" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" role="img" aria-label="Interactive free body diagram showing selected forces on a block">
              <rect x="28" y="28" width="504" height="364" rx="10" fill="#0f172a" stroke="#1e293b" strokeWidth="1.8" />
              
              {/* Surface and object */}
              <line x1="72" y1="234" x2="488" y2="234" stroke={themeColors.structural} strokeWidth="3" />
              <g className={`transition-opacity duration-300 ${scenario === 'rough' ? 'opacity-85' : 'opacity-0'}`}>
                {Array.from({ length: 13 }).map((_, index) => (
                  <line key={index} x1={92 + index * 30} y1="246" x2={108 + index * 30} y2="238" stroke={themeColors.applied} strokeWidth="1.8" />
                ))}
              </g>
              
              <ObjectBlock x={210} y={154} width={140} height={80} massLabel="object" />

              <g className={`transition-opacity duration-300 ${(forces.friction || forces.tension || forces.applied) ? 'opacity-100' : 'opacity-0'}`}>
                <VectorArrow x1={214} y1={122} x2={346} y2={122} type="structural" dashed marker="default" />
              </g>

              {/* Forces */}
              <g className={`transition-opacity duration-300 ${forces.weight ? 'opacity-100' : 'opacity-0'}`}>
                <VectorArrow x1={280} y1={194} x2={280} y2={320} type="force" />
              </g>

              <g className={`transition-opacity duration-300 ${forces.reaction ? 'opacity-100' : 'opacity-0'}`}>
                <VectorArrow x1={280} y1={154} x2={280} y2={48} type="accel" />
              </g>

              <g className={`transition-opacity duration-300 ${forces.friction ? 'opacity-100' : 'opacity-0'}`}>
                <VectorArrow x1={210} y1={194} x2={92} y2={194} type="applied" />
              </g>

              <g className={`transition-opacity duration-300 ${forces.tension ? 'opacity-100' : 'opacity-0'}`}>
                <VectorArrow x1={350} y1={194} x2={486} y2={194} type="velocity" />
                <VectorArrow x1={350} y1={194} x2={410} y2={194} type="velocity" dashed marker="none" />
              </g>

              <g className={`transition-opacity duration-300 ${forces.applied ? 'opacity-100' : 'opacity-0'}`}>
                <VectorArrow x1={350} y1={164} x2={486} y2={122} type="weight" />
              </g>

              {/* Legend */}
              <g transform="translate(48 336)">
                <rect x="0" y="0" width="276" height="42" rx="6" fill="#020617" stroke="#1e293b" />
                <circle cx="16" cy="14" r="5" fill={themeColors.force} /><text x="28" y="18" className="fill-slate-400 text-[10px] font-medium tracking-wide">weight</text>
                <circle cx="86" cy="14" r="5" fill={themeColors.accel} /><text x="98" y="18" className="fill-slate-400 text-[10px] font-medium tracking-wide">reaction</text>
                <circle cx="176" cy="14" r="5" fill={themeColors.weight} /><text x="188" y="18" className="fill-slate-400 text-[10px] font-medium tracking-wide">applied</text>
                <circle cx="16" cy="28" r="5" fill={themeColors.applied} /><text x="28" y="32" className="fill-slate-400 text-[10px] font-medium tracking-wide">friction</text>
                <circle cx="86" cy="28" r="5" fill={themeColors.velocity} /><text x="98" y="32" className="fill-slate-400 text-[10px] font-medium tracking-wide">tension</text>
              </g>
            </svg>

            {/* HTML Overlay Labels */}
            <DiagramLabel position={{ left: '16%', top: '14%' }}>
              <div className="text-base font-bold text-slate-200">Selected object</div>
            </DiagramLabel>
            
            <DiagramLabel position={{ left: '21%', top: '19%' }}>
              <div className="text-xs text-slate-400">block on table; external forces only</div>
            </DiagramLabel>

            <DiagramLabel position={{ left: '50%', top: '26%' }} className={`transition-opacity duration-300 ${(forces.friction || forces.tension || forces.applied) ? 'opacity-100' : 'opacity-0'}`}>
              <div className="text-xs font-semibold text-slate-400">motion / intended motion</div>
            </DiagramLabel>

            <DiagramLabel position={{ left: '58%', top: '72%' }} className={`transition-opacity duration-300 ${forces.weight ? 'opacity-100' : 'opacity-0'}`}>
              <div className="text-lg font-bold" style={{ color: themeColors.force }}><MathText content="mg" className="[&_p]:m-0" /></div>
            </DiagramLabel>

            <DiagramLabel position={{ left: '56%', top: '18%' }} className={`transition-opacity duration-300 ${forces.reaction ? 'opacity-100' : 'opacity-0'}`}>
              <div className="text-lg font-bold" style={{ color: themeColors.accel }}><MathText content="R" className="[&_p]:m-0" /></div>
            </DiagramLabel>
            <DiagramLabel position={{ left: '62%', top: '22%' }} className={`transition-opacity duration-300 ${forces.reaction ? 'opacity-100' : 'opacity-0'}`}>
              <div className="text-xs font-semibold" style={{ color: themeColors.accel }}>perpendicular</div>
            </DiagramLabel>

            <DiagramLabel position={{ left: '23%', top: '42%' }} className={`transition-opacity duration-300 ${forces.friction ? 'opacity-100' : 'opacity-0'}`}>
              <div className="text-lg font-bold" style={{ color: themeColors.applied }}><MathText content="F" className="[&_p]:m-0" /></div>
            </DiagramLabel>
            <DiagramLabel position={{ left: '24%', top: '53%' }} className={`transition-opacity duration-300 ${forces.friction ? 'opacity-100' : 'opacity-0'}`}>
              <div className="text-xs font-semibold" style={{ color: themeColors.applied }}>opposes motion</div>
            </DiagramLabel>

            <DiagramLabel position={{ left: '84%', top: '42%' }} className={`transition-opacity duration-300 ${forces.tension ? 'opacity-100' : 'opacity-0'}`}>
              <div className="text-lg font-bold" style={{ color: themeColors.velocity }}><MathText content="T" className="[&_p]:m-0" /></div>
            </DiagramLabel>
            <DiagramLabel position={{ left: '78%', top: '53%' }} className={`transition-opacity duration-300 ${forces.tension ? 'opacity-100' : 'opacity-0'}`}>
              <div className="text-xs font-semibold" style={{ color: themeColors.velocity }}>string pulls</div>
            </DiagramLabel>

            <DiagramLabel position={{ left: '85%', top: '25%' }} className={`transition-opacity duration-300 ${forces.applied ? 'opacity-100' : 'opacity-0'}`}>
              <div className="text-lg font-bold" style={{ color: themeColors.weight }}><MathText content="P" className="[&_p]:m-0" /></div>
            </DiagramLabel>
            <DiagramLabel position={{ left: '79%', top: '33%' }} className={`transition-opacity duration-300 ${forces.applied ? 'opacity-100' : 'opacity-0'}`}>
              <div className="text-xs font-semibold" style={{ color: themeColors.weight }}>direct push/pull</div>
            </DiagramLabel>
          </div>
        </div>
      </div>
    </DiagramPanel>
  );
};
