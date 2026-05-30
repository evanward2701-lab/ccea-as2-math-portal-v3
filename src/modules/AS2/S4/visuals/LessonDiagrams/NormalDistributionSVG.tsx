import React from 'react';
import { MathInline, MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const tickLabels = [
  { x: '21.5%', content: '\\mu - 2\\sigma', tone: 'text-muted-foreground' },
  { x: '35.75%', content: '\\mu - \\sigma', tone: 'text-foreground' },
  { x: '50%', content: '\\mu', tone: 'text-primary' },
  { x: '64.25%', content: '\\mu + \\sigma', tone: 'text-foreground' },
  { x: '78.5%', content: '\\mu + 2\\sigma', tone: 'text-muted-foreground' },
];

export const NormalDistributionSVG: React.FC = () => (
  <DiagramPanel
    title="Fig 3. Normal Distribution"
    analysis={
      <div className="mx-auto w-full max-w-5xl space-y-4">
        <div className="rounded-xl border border-primary/20 bg-card p-4 text-sm leading-relaxed text-foreground shadow-xl">
          The Normal Distribution is a continuous, symmetrical bell-shaped curve defined by its mean{' '}
          <MathInline content="\\mu" className="text-primary font-bold" /> and standard deviation{' '}
          <MathInline content="\\sigma" className="text-primary font-bold" />.
        </div>

        <div className="grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-xl border border-primary/20 bg-card p-5 text-center shadow-xl">
            <span className="mb-3 block text-2.5 font-black uppercase tracking-[0.26em] text-primary">
              Standardisation Formula
            </span>
            <MathText
              content="Z = \\frac{X - \\mu}{\\sigma}"
              center
              noMargin
              className="[&_p]:mb-0 [&_p]:text-4xl [&_p]:text-foreground md:[&_p]:text-5xl"
            />
          </div>

          <div className="grid gap-3 sm:grid-cols-3 md:grid-cols-1">
            <div className="rounded-xl border border-primary/40 bg-primary/5 p-4 text-center shadow-xl">
              <span className="block text-2.5 font-black uppercase tracking-[0.24em] text-primary">Mean</span>
              <MathText content="\\mu" center noMargin className="[&_p]:mb-0 [&_p]:text-3xl [&_p]:text-foreground" />
            </div>
            <div className="rounded-xl border border-primary/20 bg-card p-4 text-center shadow-xl">
              <span className="block text-2.5 font-black uppercase tracking-[0.24em] text-primary">Spread</span>
              <MathText content="\\sigma" center noMargin className="[&_p]:mb-0 [&_p]:text-3xl [&_p]:text-foreground" />
            </div>
            <div className="rounded-xl border border-primary/20 bg-card p-4 text-center shadow-xl">
              <span className="block text-2.5 font-black uppercase tracking-[0.24em] text-primary">Central Area</span>
              <span className="block text-center font-serif text-3xl text-foreground">≈ 68%</span>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-sm leading-relaxed text-destructive/90 shadow-xl">
          <strong className="font-bold text-destructive">CCEA Exam Pitfall:</strong> The formula uses standard deviation{' '}
          <MathInline content="\\sigma" />. If the question gives variance <MathInline content="\\sigma^2" />, take the square root first.
        </div>
      </div>
    }
  >
    <div className="mx-auto w-full max-w-5xl rounded-2xl border border-primary/20 bg-card p-5 shadow-2xl">
      <div className="relative aspect-16/9 min-h-[420px] overflow-hidden rounded-xl border border-primary/10 bg-background shadow-inner">
        <svg
          viewBox="0 0 900 520"
          className="absolute inset-0 h-full w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          shapeRendering="geometricPrecision"
          role="img"
          aria-label="Normal distribution curve showing the mean and one standard deviation either side"
        >
          <defs>
            <linearGradient id="normal-center-fill" x1="450" y1="92" x2="450" y2="380" gradientUnits="userSpaceOnUse">
              <stop stopColor="var(--primary)" stopOpacity="0.20" />
              <stop offset="1" stopColor="var(--primary)" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="normal-side-fill" x1="450" y1="180" x2="450" y2="380" gradientUnits="userSpaceOnUse">
              <stop stopColor="var(--primary)" stopOpacity="0.13" />
              <stop offset="1" stopColor="var(--primary)" stopOpacity="0.03" />
            </linearGradient>
            <filter id="normal-soft-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feColorMatrix in="blur" type="matrix" values="0 0 0 0 0.8 0 0 0 0 0.7 0 0 0 0 0.5 0 0 0 0.35 0" />
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <rect x="44" y="38" width="812" height="405" rx="30" fill="var(--background)" stroke="var(--border)" strokeWidth="2" />

          <path
            d="M 204 372 C 250 370, 282 298, 334 225 L 334 372 Z"
            fill="url(#normal-side-fill)"
          />
          <path
            d="M 566 372 L 566 225 C 618 298, 650 370, 696 372 Z"
            fill="url(#normal-side-fill)"
          />
          <path
            d="M 334 372 L 334 225 C 365 146, 405 104, 450 104 C 495 104, 535 146, 566 225 L 566 372 Z"
            fill="url(#normal-center-fill)"
          />

          <line x1="160" y1="372" x2="740" y2="372" stroke="var(--border)" strokeWidth="3" strokeLinecap="round" />
          <path
            d="M 160 372 C 243 372, 281 250, 334 225 C 371 137, 408 104, 450 104 C 492 104, 529 137, 566 225 C 619 250, 657 372, 740 372"
            stroke="var(--foreground)"
            strokeWidth="4"
            strokeLinecap="round"
            filter="url(#normal-soft-glow)"
          />

          <line x1="450" y1="104" x2="450" y2="372" stroke="var(--primary)" strokeWidth="3" strokeDasharray="8 10" />

          {[218, 334, 450, 566, 682].map((x) => (
            <line key={x} x1={x} y1="372" x2={x} y2="385" stroke="var(--border)" strokeWidth="3" strokeLinecap="round" />
          ))}

          <text x="93" y="105" fill="var(--muted-foreground)" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="13" fontWeight="800" letterSpacing="4">
            SYMMETRIC CONTINUOUS MODEL
          </text>
          <text x="450" y="132" fill="var(--primary)" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="12" fontWeight="800" textAnchor="middle" letterSpacing="3">
            MEAN
          </text>
        </svg>

        <div className="pointer-events-none absolute left-1/2 top-[39%] -translate-x-1/2 rounded-lg border border-primary/20 bg-card/90 px-5 py-2 shadow-xl backdrop-blur-sm">
          <span className="font-serif text-xl text-primary md:text-2xl">≈ 68%</span>
        </div>

        {tickLabels.map(label => (
          <div
            key={label.content}
            className="pointer-events-none absolute top-[76%] -translate-x-1/2 text-center"
            style={{ left: label.x }}
          >
            <MathInline content={label.content} className={`text-base font-serif md:text-lg ${label.tone}`} />
          </div>
        ))}
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-3">
        <div className="rounded-xl border border-primary/20 bg-card p-4 text-center shadow-xl">
          <span className="mb-2 block text-2.5 font-black uppercase tracking-[0.24em] text-primary">Centre</span>
          <MathText content="X = \\mu" center noMargin className="[&_p]:mb-0 [&_p]:text-2xl [&_p]:text-foreground" />
        </div>
        <div className="rounded-xl border border-primary/40 bg-primary/5 p-4 text-center shadow-xl">
          <span className="mb-2 block text-2.5 font-black uppercase tracking-[0.24em] text-primary">One Sigma</span>
          <MathText content="|Z| < 1" center noMargin className="[&_p]:mb-0 [&_p]:text-2xl [&_p]:text-foreground md:[&_p]:text-3xl" />
        </div>
        <div className="rounded-xl border border-primary/20 bg-card p-4 text-center shadow-xl">
          <span className="mb-2 block text-2.5 font-black uppercase tracking-[0.24em] text-primary">Standard Score</span>
          <MathText content="Z \\sim N(0, 1)" center noMargin className="[&_p]:mb-0 [&_p]:text-2xl [&_p]:text-foreground" />
        </div>
      </div>
    </div>
  </DiagramPanel>
);
