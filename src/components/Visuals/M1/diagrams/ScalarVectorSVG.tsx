import React from 'react';
import { MathText } from '../../../MathText';
import { DiagramPanel } from '../../../DiagramPanel';
import { SVGLibrary } from '../../../diagrams/primitives/SVGLibrary';
import { VectorArrow } from '../../../diagrams/primitives/VectorArrow';
import { DiagramLabel } from '../../../diagrams/primitives/DiagramLabel';
import { themeColors } from '../../../../types/mechanicsTheme';

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
    <div className="relative w-full aspect-76/39 max-w-4xl mx-auto rounded-xl overflow-hidden border border-slate-800/50 bg-slate-950 shadow-[8px_8px_0px_#0f172a]">
      <SVGLibrary />
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 760 390" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" role="img" aria-label="Scalar and vector classification with velocity vector magnitude calculation">
        {/* Classification panels */}
        <rect x="34" y="26" width="318" height="124" rx="8" fill="#0f172a" stroke={themeColors.applied} strokeWidth="1.8" />
        <rect x="408" y="26" width="318" height="124" rx="8" fill="#0f172a" stroke={themeColors.accel} strokeWidth="1.8" />

        <VectorArrow x1={448} y1={98} x2={524} y2={62} type="accel" marker="default" />

        {/* Coordinate diagram */}
        <rect x="146" y="168" width="468" height="134" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="1.6" />
        <VectorArrow x1={196} y1={198} x2={196} y2={278} type="structural" marker="default" />
        <VectorArrow x1={196} y1={198} x2={584} y2={198} type="structural" marker="default" />

        <VectorArrow x1={196} y1={198} x2={308} y2={198} type="accel" marker="none" />
        <VectorArrow x1={308} y1={198} x2={308} y2={278} type="force" marker="none" />
        <VectorArrow x1={196} y1={198} x2={308} y2={278} type="accel" marker="default" />

        <circle cx="196" cy="198" r="5" fill="#e2e8f0" />
        <circle cx="308" cy="278" r="5" fill={themeColors.accel} />

        {/* Calculation strip */}
        <rect x="68" y="330" width="624" height="38" rx="8" fill="#020617" stroke="#334155" strokeWidth="1.6" />
      </svg>

      <DiagramLabel position={{ left: '25.4%', top: '22.8%' }}>
        <div className="flex items-center gap-4 w-69.5">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded border border-amber-900/60 bg-slate-950 text-2xl font-black text-amber-300">7</div>
          <div className="text-left">
            <div className="text-base font-bold text-amber-300">Scalar: magnitude only</div>
            <div className="mt-1 text-sm leading-snug text-slate-300">A number with units, but no direction.</div>
          </div>
        </div>
      </DiagramLabel>

      <DiagramLabel position={{ left: '82%', top: '22.8%' }}>
        <div className="w-41.5 text-left">
          <div className="text-base font-bold leading-snug text-emerald-300">Vector: magnitude + direction</div>
          <div className="mt-1 text-sm leading-snug text-slate-300">Direction is part of the answer.</div>
        </div>
      </DiagramLabel>

      <DiagramLabel position={{ left: '78.5%', top: '51.8%' }}>
        <div className="text-sm font-bold text-slate-300">i</div>
      </DiagramLabel>

      <DiagramLabel position={{ left: '25.5%', top: '74.9%' }}>
        <div className="text-sm font-bold text-slate-300">-j</div>
      </DiagramLabel>

      <DiagramLabel position={{ left: '35%', top: '47.7%' }}>
        <div className="rounded border border-emerald-900/60 bg-slate-950/90 px-2 py-1 text-center text-sm font-bold text-emerald-300">
          <MathText content="7\mathbf{i}" className="[&_p]:m-0" />
        </div>
      </DiagramLabel>

      <DiagramLabel position={{ left: '35%', top: '67.2%' }}>
        <div className="rounded border border-rose-900/60 bg-slate-950/90 px-2 py-1 text-center text-sm font-bold text-rose-300">
          <MathText content="-24\mathbf{j}" className="[&_p]:m-0" />
        </div>
      </DiagramLabel>

      <DiagramLabel position={{ left: '59.3%', top: '55.1%' }}>
        <div className="rounded border border-emerald-900/60 bg-slate-950/90 px-3 py-2 text-sm font-bold text-emerald-300 text-center">
          <MathText content="\mathbf{v} = 7\mathbf{i} - 24\mathbf{j}\ \text{m s}^{-1}" className="[&_p]:m-0" />
          <div className="mt-1 text-xs font-semibold text-slate-300">velocity is a vector</div>
        </div>
      </DiagramLabel>

      <DiagramLabel position={{ left: '68%', top: '71.3%' }}>
        <div className="text-sm font-semibold text-rose-300 w-48 text-center">
          negative component points down
        </div>
      </DiagramLabel>

      <DiagramLabel position={{ left: '50%', top: '89.5%' }}>
        <div className="text-center text-base font-bold text-emerald-300 w-147">
          <MathText content="|\mathbf{v}| = \sqrt{7^2 + (-24)^2} = 25\ \text{m s}^{-1}" className="[&_p]:m-0" />
        </div>
      </DiagramLabel>
    </div>
  </DiagramPanel>
);
