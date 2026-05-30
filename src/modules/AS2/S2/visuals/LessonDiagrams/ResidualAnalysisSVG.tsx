import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { DiagramLabel } from '@/core/diagram-engine/primitives/DiagramLabel';
import { ArrowLibrary } from '@/core/diagram-engine/primitives/ArrowLibrary';
import { VectorArrow } from '@/core/diagram-engine/primitives/VectorArrow';

const residualPoints = [
  [178, 372],
  [252, 334],
  [326, 292],
  [400, 230],
  [474, 196],
  [548, 190],
  [622, 216],
  [696, 284],
  [770, 354],
] as const;

export const ResidualAnalysisSVG: React.FC = () => (
  <DiagramPanel
    title="Fig 6. Diagnostic Residual Analysis"
    analysis={
      <div className="mx-auto grid w-full max-w-5xl gap-4 md:grid-cols-[1fr_1fr]">
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm leading-relaxed text-foreground shadow-sm">
          <span className="font-bold text-foreground">Residual check:</span> a random spread around zero supports a linear model.
        </div>
        <div className="rounded-xl border border-destructive/30 bg-destructive/20 p-4 text-sm leading-relaxed text-destructive shadow-sm">
          <span className="font-bold text-destructive">CCEA Exam Pitfall:</span> a clear pattern in residuals invalidates a linear regression model, even when PMCC is strong.
        </div>
      </div>
    }
  >
    <div className="mx-auto w-full max-w-5xl rounded-2xl border border-primary/20 bg-card p-5 shadow-2xl">
      <div className="relative aspect-16/9 overflow-hidden rounded-xl border border-primary/20 bg-card shadow-inner">
        <svg
          viewBox="0 0 960 540"
          className="absolute inset-0 h-full w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          shapeRendering="geometricPrecision"
          role="img"
          aria-label="Residual plot with a curved pattern around the zero residual line"
        >
          <ArrowLibrary />

          <rect x="92" y="66" width="792" height="408" rx="26" fill="var(--background)" fillOpacity="0.42" stroke="var(--border)" strokeWidth="1.2" />

          <g opacity="0.2">
            <path d="M154 146 H820" stroke="var(--border)" strokeWidth="1" />
            <path d="M154 222 H820" stroke="var(--border)" strokeWidth="1" />
            <path d="M154 374 H820" stroke="var(--border)" strokeWidth="1" />
            <path d="M154 450 H820" stroke="var(--border)" strokeWidth="1" />
          </g>

          <VectorArrow x1={154} y1={438} x2={154} y2={96} type="structural" strokeWidth={2.2} />
          <VectorArrow x1={154} y1={298} x2={834} y2={298} type="structural" strokeWidth={2.2} />

          <path d="M154 298 H820" stroke="#34d399" strokeWidth="8" strokeLinecap="round" opacity="0.05" />
          <line x1="154" y1="298" x2="820" y2="298" stroke="#34d399" strokeWidth="2.5" strokeDasharray="9 9" strokeLinecap="round" opacity="0.72" />

          <path
            d="M178 372 C292 292 366 218 474 196 C596 170 682 262 770 354"
            fill="none"
            stroke="#fb7185"
            strokeWidth="3"
            strokeDasharray="7 8"
            strokeLinecap="round"
            opacity="0.82"
          />
          <path
            d="M178 372 C292 292 366 218 474 196 C596 170 682 262 770 354"
            fill="none"
            stroke="#fb7185"
            strokeWidth="15"
            strokeLinecap="round"
            opacity="0.045"
          />

          {residualPoints.map(([cx, cy], index) => (
            <circle key={`residual-point-${index}`} cx={cx} cy={cy} r="10.5" fill="#fb7185" stroke="var(--background)" strokeWidth="2.2" />
          ))}

          <circle cx="154" cy="298" r="3.5" fill="var(--muted-foreground)" />
        </svg>

        <DiagramLabel x="14.5%" y="14%" text="e" className="text-lg text-foreground" />
        <DiagramLabel x="91.5%" y="54.5%" text="x" className="text-lg text-foreground" />

        <DiagramLabel x="80%" y="46%" className="text-center">
          <div className="rounded-lg border border-primary/25 bg-primary/15 px-3 py-1.5 text-2.5 font-bold uppercase tracking-[0.22em] text-primary shadow-lg backdrop-blur-sm">
            residual = 0
          </div>
        </DiagramLabel>

        <DiagramLabel x="70%" y="22%" className="text-center">
          <div className="max-w-72 rounded-xl border border-destructive/30 bg-destructive/20 px-4 py-3 text-left shadow-2xl backdrop-blur-sm">
            <div className="mb-1 text-2.5 font-black uppercase tracking-[0.24em] text-destructive">Curved Pattern</div>
            <div className="text-xs font-semibold leading-snug text-foreground">
              Structure in the residuals points away from a linear model.
            </div>
          </div>
        </DiagramLabel>
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-3">
        <div className="rounded-xl border border-primary/25 bg-primary/10 p-4 shadow-sm">
          <div className="mb-1 text-2.5 font-black uppercase tracking-[0.22em] text-primary">Target</div>
          <p className="text-sm leading-relaxed text-foreground">Residuals should scatter randomly above and below zero.</p>
        </div>
        <div className="rounded-xl border border-destructive/25 bg-destructive/15 p-4 shadow-sm">
          <div className="mb-1 text-2.5 font-black uppercase tracking-[0.22em] text-destructive">Warning</div>
          <p className="text-sm leading-relaxed text-foreground">A visible curve suggests the relationship is non-linear.</p>
        </div>
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 shadow-sm">
          <div className="mb-1 text-2.5 font-black uppercase tracking-[0.22em] text-muted-foreground">Decision</div>
          <p className="text-sm leading-relaxed text-foreground">Use the residual plot as a model check after fitting the regression line.</p>
        </div>
      </div>
    </div>
  </DiagramPanel>
);
