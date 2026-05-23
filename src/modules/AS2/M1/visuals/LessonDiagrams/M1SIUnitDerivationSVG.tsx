import React from 'react';
import { MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { SVGLibrary } from '@/core/diagram-engine/primitives/SVGLibrary';
import { VectorArrow } from '@/core/diagram-engine/primitives/VectorArrow';
import { DiagramLabel } from '@/core/diagram-engine/primitives/DiagramLabel';
import { themeColors } from '@/core/types/mechanicsTheme';

export const M1SIUnitDerivationSVG: React.FC = () => (
  <DiagramPanel
    title="Fig 2. SI Unit Derivation Tree"
    analysis={
      <div className="grid gap-3 sm:grid-cols-3 w-full max-w-3xl">
        <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-3 text-center text-sm text-zinc-300">
          <span className="font-semibold text-zinc-300">Base units:</span> kg, m, s
        </div>
        <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-3 text-center text-sm text-zinc-300">
          <span className="font-semibold text-amber-300">Derived units:</span> m s^-1, m s^-2
        </div>
        <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-3 text-center text-sm text-zinc-300">
          <span className="font-semibold text-emerald-300">Force units:</span> N = kg m s^-2
        </div>
      </div>
    }
  >
    <div className="relative w-full aspect-76/44 max-w-4xl mx-auto rounded-xl overflow-hidden border border-zinc-800/60 bg-[#141416] shadow-inner">
      <SVGLibrary />
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 760 440" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" role="img" aria-label="SI unit derivation tree for velocity, acceleration, force and weight">

        {/* Base units */}
        <rect x="48" y="44" width="170" height="78" rx="8" fill="#141417" stroke={themeColors.velocity} strokeWidth="1.6" />
        <rect x="295" y="44" width="170" height="78" rx="8" fill="#141417" stroke={themeColors.velocity} strokeWidth="1.6" />
        <rect x="542" y="44" width="170" height="78" rx="8" fill="#141417" stroke={themeColors.velocity} strokeWidth="1.6" />

        {/* Derived units */}
        <rect x="130" y="174" width="220" height="84" rx="8" fill="#141417" stroke={themeColors.applied} strokeWidth="1.6" />
        <rect x="410" y="174" width="220" height="84" rx="8" fill="#141417" stroke={themeColors.applied} strokeWidth="1.6" />

        {/* Force units */}
        <rect x="122" y="306" width="236" height="88" rx="8" fill="#022c22" stroke={themeColors.accel} strokeWidth="1.8" />
        <rect x="402" y="306" width="236" height="88" rx="8" fill="#022c22" stroke={themeColors.accel} strokeWidth="1.8" />

        {/* Relationship arrows */}
        <VectorArrow x1={380} y1={122} x2={250} y2={172} type="applied" marker="default" />
        <VectorArrow x1={627} y1={122} x2={250} y2={172} type="applied" marker="default" />
        <VectorArrow x1={282} y1={258} x2={506} y2={306} type="applied" marker="default" />
        <VectorArrow x1={627} y1={122} x2={530} y2={306} type="structural" dashed marker="default" />
        <VectorArrow x1={133} y1={122} x2={230} y2={306} type="accel" marker="default" />
        <VectorArrow x1={520} y1={258} x2={260} y2={306} type="accel" marker="default" />
        <VectorArrow x1={133} y1={122} x2={506} y2={306} type="accel" dashed marker="default" />
      </svg>

      {/* Row labels */}
      <DiagramLabel position={{ left: '10.5%', top: '6.3%' }}>
        <div className="text-xs font-bold uppercase tracking-wider text-zinc-300">Base SI Units</div>
      </DiagramLabel>
      <DiagramLabel position={{ left: '13.5%', top: '35.4%' }}>
        <div className="text-xs font-bold uppercase tracking-wider text-amber-300">Derived Motion Units</div>
      </DiagramLabel>
      <DiagramLabel position={{ left: '9.2%', top: '65%' }}>
        <div className="text-xs font-bold uppercase tracking-wider text-emerald-300">Force Units</div>
      </DiagramLabel>

      {/* Base unit text */}
      <DiagramLabel position={{ left: '17.5%', top: '18.6%' }}>
        <div className="flex flex-col items-center text-center">
          <div className="text-sm font-bold text-zinc-300">Mass</div>
          <MathText content="\text{kg}" className="text-xl font-bold text-zinc-100 [&_p]:m-0" />
        </div>
      </DiagramLabel>
      <DiagramLabel position={{ left: '50%', top: '18.6%' }}>
        <div className="flex flex-col items-center text-center">
          <div className="text-sm font-bold text-zinc-300">Length</div>
          <MathText content="\text{m}" className="text-xl font-bold text-zinc-100 [&_p]:m-0" />
        </div>
      </DiagramLabel>
      <DiagramLabel position={{ left: '82.5%', top: '18.6%' }}>
        <div className="flex flex-col items-center text-center">
          <div className="text-sm font-bold text-zinc-300">Time</div>
          <MathText content="\text{s}" className="text-xl font-bold text-zinc-100 [&_p]:m-0" />
        </div>
      </DiagramLabel>

      {/* Derived unit text */}
      <DiagramLabel position={{ left: '31.5%', top: '49.1%' }}>
        <div className="flex flex-col items-center text-center">
          <div className="text-sm font-bold text-amber-300">Velocity</div>
          <MathText content="\frac{\text{displacement}}{\text{time}} = \text{m s}^{-1}" className="text-base font-semibold text-zinc-100 [&_p]:m-0" />
        </div>
      </DiagramLabel>
      <DiagramLabel position={{ left: '68.4%', top: '49.1%' }}>
        <div className="flex flex-col items-center text-center">
          <div className="text-sm font-bold text-amber-300">Acceleration</div>
          <MathText content="\frac{\text{change in velocity}}{\text{time}} = \text{m s}^{-2}" className="text-base font-semibold text-zinc-100 [&_p]:m-0" />
        </div>
      </DiagramLabel>

      {/* Force unit text */}
      <DiagramLabel position={{ left: '31.5%', top: '80.1%' }}>
        <div className="flex flex-col items-center text-center">
          <div className="text-sm font-bold text-emerald-300">Force</div>
          <MathText content="F = ma,\quad N = \text{kg m s}^{-2}" className="text-base font-semibold text-zinc-100 [&_p]:m-0" />
        </div>
      </DiagramLabel>
      <DiagramLabel position={{ left: '68.4%', top: '80.1%' }}>
        <div className="flex flex-col items-center text-center">
          <div className="text-sm font-bold text-emerald-300">Weight</div>
          <MathText content="W = mg" className="text-lg font-bold text-zinc-100 [&_p]:m-0" />
          <div className="text-xs font-semibold text-zinc-300">weight is measured in N</div>
        </div>
      </DiagramLabel>

      {/* Connection labels */}
      <DiagramLabel position={{ left: '56%', top: '33.6%' }}>
        <div className="text-xs font-semibold text-zinc-300">Length + Time</div>
      </DiagramLabel>
      <DiagramLabel position={{ left: '55.2%', top: '64.1%' }}>
        <div className="text-xs font-semibold text-zinc-300">Velocity + Time</div>
      </DiagramLabel>
      <DiagramLabel position={{ left: '27.1%', top: '65%' }}>
        <div className="text-xs font-semibold text-zinc-300">Mass + Acceleration</div>
      </DiagramLabel>
      <DiagramLabel position={{ left: '73.4%', top: '62.2%' }}>
        <div className="text-xs font-semibold text-zinc-300">Mass + g</div>
      </DiagramLabel>

      {/* Exam warnings */}
      <DiagramLabel position={{ left: '50%', top: '95%' }}>
        <div className="grid grid-cols-3 gap-3 text-center text-[11px] font-semibold leading-tight text-rose-300 w-169">
          <div>Convert tonnes to kg before using W = mg or F = ma.</div>
          <div>kg is mass; N is force.</div>
          <div>m s^-2 means acceleration, not velocity.</div>
        </div>
      </DiagramLabel>
    </div>
  </DiagramPanel>
);
