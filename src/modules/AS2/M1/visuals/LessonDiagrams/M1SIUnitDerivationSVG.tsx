import React from 'react';
import { MathInline } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { ObjectBlock } from '@/core/diagram-engine/primitives/ObjectBlock';
import { DiagramLabel } from '@/core/diagram-engine/primitives/DiagramLabel';
import { VectorArrow } from '@/core/diagram-engine/primitives/VectorArrow';
import { SVGLibrary } from '@/core/diagram-engine/primitives/SVGLibrary';

export const M1SIUnitDerivationSVG: React.FC = () => {
  const BlockLabel = ({
    x,
    y,
    w,
    h,
    title,
    math,
    subtitle,
    tone = 'text-zinc-500',
    mathClass = 'text-xl font-black text-white',
    layout = 'stack',
  }: {
    x: number;
    y: number;
    w: number;
    h: number;
    title: string;
    math: string;
    subtitle?: string;
    tone?: string;
    mathClass?: string;
    layout?: 'stack' | 'inline';
  }) => (
    <div
      className="absolute flex flex-col items-center justify-center pointer-events-none"
      style={{
        left: `${(x / 800) * 100}%`,
        top: `${(y / 500) * 100}%`,
        width: `${(w / 800) * 100}%`,
        height: `${(h / 500) * 100}%`
      }}
    >
      <span className={`mb-0.5 text-[9px] font-bold uppercase tracking-[0.2em] ${tone}`}>{title}</span>
      {layout === 'inline' ? (
        <div className="mt-1 flex w-full items-center justify-center gap-5 px-4">
          {subtitle && (
            <span className="max-w-[62%] text-right text-[13px] font-medium leading-tight text-zinc-500">
              <MathInline content={subtitle} />
            </span>
          )}
          <span className={mathClass}>
            <MathInline content={math} />
          </span>
        </div>
      ) : (
        <>
          {subtitle && (
            <span className="mb-1 text-2.75 font-medium text-zinc-500">
              <MathInline content={subtitle} />
            </span>
          )}
          <span className={mathClass}>
            <MathInline content={math} />
          </span>
        </>
      )}
    </div>
  );

  return (
    <DiagramPanel
      title="Fig 2. SI Unit Derivation Tree"
      analysis={
        <div className="grid gap-4 sm:grid-cols-3 w-full max-w-5xl mx-auto px-2">
          <div className="rounded-xl border border-zinc-800 bg-zinc-800/30 p-4 text-center text-base text-zinc-300">
            <strong className="font-semibold text-zinc-400 block mb-1">
              <MathInline content="$\text{Base units:}$" />
            </strong>
            <MathInline content="$\text{kg, m, s}$" />
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-800/30 p-4 text-center text-base text-zinc-300">
            <strong className="font-semibold text-amber-400 block mb-1">
              <MathInline content="$\text{Derived units:}$" />
            </strong>
            <MathInline content="$\text{m s}^{-1}\text{, m s}^{-2}$" />
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-800/30 p-4 text-center text-base text-zinc-300">
            <strong className="font-semibold text-emerald-400 block mb-1">
              <MathInline content="$\text{Force units:}$" />
            </strong>
            <MathInline content="$\text{N} = \text{kg m s}^{-2}$" />
          </div>
        </div>
      }
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col gap-6">
        <div className="w-full aspect-[8/5] relative bg-zinc-950 border border-zinc-800/60 rounded-xl overflow-hidden shadow-2xl">
          <SVGLibrary />
          <svg viewBox="0 0 800 500" className="w-full h-full absolute inset-0 z-0" preserveAspectRatio="xMidYMid meet">
            {/* Row 1 Blocks */}
            <ObjectBlock x={50} y={60} width={200} height={90} />
            <ObjectBlock x={300} y={60} width={200} height={90} />
            <ObjectBlock x={550} y={60} width={200} height={90} />

            {/* Row 2 Blocks */}
            <ObjectBlock x={100} y={210} width={260} height={100} />
            <ObjectBlock x={440} y={210} width={260} height={100} />

            {/* Row 3 Rects */}
            <rect x="100" y="370" width="260" height="100" rx="8" fill="#141417" stroke="rgba(16,185,129,0.3)" strokeWidth="2" />
            <rect x="440" y="370" width="260" height="100" rx="8" fill="#141417" stroke="rgba(16,185,129,0.3)" strokeWidth="2" />

            {/* Unit derivation connectors */}
            <VectorArrow x1={400} y1={150} x2={230} y2={210} type="structural" marker="default" />
            <VectorArrow x1={650} y1={150} x2={230} y2={210} type="structural" dashed marker="default" />
            <VectorArrow x1={650} y1={150} x2={570} y2={210} type="structural" dashed marker="default" />
            <path d="M 100 150 Q -10 260 100 420" fill="none" stroke="#52525b" strokeWidth="2" markerEnd="url(#arrow-structural)" />
            <path d="M 250 130 Q 340 160 440 390" fill="none" stroke="#52525b" strokeWidth="2" strokeDasharray="5 5" markerEnd="url(#arrow-structural)" />
            <VectorArrow x1={570} y1={310} x2={340} y2={370} type="structural" marker="default" />
            <VectorArrow x1={570} y1={310} x2={570} y2={370} type="structural" dashed marker="default" />
          </svg>

          <DiagramLabel x="6.5%" y="5%" anchor="start" className="text-zinc-300 font-bold uppercase tracking-[0.2em] text-2.5" text="$\text{Base SI Units}$" />
          <DiagramLabel x="50%" y="39%" className="text-zinc-300 font-bold uppercase tracking-[0.2em] text-2.5" text="$\text{Derived Motion Units}$" />
          <DiagramLabel x="12.5%" y="68%" anchor="start" className="text-zinc-300 font-bold uppercase tracking-[0.2em] text-2.5" text="$\text{Force Units}$" />

          <BlockLabel x={50} y={60} w={200} h={90} title="Mass" math="$\text{kg}$" />
          <BlockLabel x={300} y={60} w={200} h={90} title="Length" math="$\text{m}$" />
          <BlockLabel x={550} y={60} w={200} h={90} title="Time" math="$\text{s}$" />

          <BlockLabel
            x={100}
            y={210}
            w={260}
            h={100}
            title="Velocity"
            subtitle="$\frac{\text{displacement}}{\text{time}}$"
            math="$\text{m s}^{-1}$"
            tone="text-amber-400"
            layout="inline"
          />
          <BlockLabel
            x={440}
            y={210}
            w={260}
            h={100}
            title="Acceleration"
            subtitle="$\frac{\text{change in velocity}}{\text{time}}$"
            math="$\text{m s}^{-2}$"
            tone="text-amber-400"
            layout="inline"
          />
          <BlockLabel
            x={100}
            y={370}
            w={260}
            h={100}
            title="Force"
            subtitle="$F = ma$"
            math="$\text{N} = \text{kg m s}^{-2}$"
            tone="text-emerald-400"
            mathClass="text-sm font-semibold text-zinc-300"
          />
          <BlockLabel
            x={440}
            y={370}
            w={260}
            h={100}
            title="Weight"
            subtitle="$W = mg$"
            math="$\text{measured in Newtons (N)}$"
            tone="text-emerald-400"
            mathClass="text-2.75 font-medium italic text-zinc-500"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
          <div className="flex min-h-25 flex-col items-center justify-start rounded-xl border border-zinc-800/80 bg-zinc-925/40 p-4 text-center shadow-md backdrop-blur-sm">
            <span className="mb-1 text-xs font-bold text-rose-400">Mass Scaling:</span>
            <div className="px-1 text-xs leading-relaxed text-zinc-400">
              <MathInline content="Convert tonnes to kg before using equations." />
            </div>
          </div>
          <div className="flex min-h-25 flex-col items-center justify-start rounded-xl border border-zinc-800/80 bg-zinc-925/40 p-4 text-center shadow-md backdrop-blur-sm">
            <span className="mb-1 text-xs font-bold text-amber-400">Dimension Trap:</span>
            <div className="px-1 text-xs leading-relaxed text-zinc-400">
              <MathInline content="kg evaluates mass units; Newtons compute active forces." />
            </div>
          </div>
          <div className="flex min-h-25 flex-col items-center justify-start rounded-xl border border-zinc-800/80 bg-zinc-925/40 p-4 text-center shadow-md backdrop-blur-sm">
            <span className="mb-1 text-xs font-bold text-emerald-400">Unit Context:</span>
            <div className="px-1 text-xs leading-relaxed text-zinc-400">
              <MathInline content="m s^-2 tracks acceleration, never static velocity." />
            </div>
          </div>
        </div>
      </div>
    </DiagramPanel>
  );
};
