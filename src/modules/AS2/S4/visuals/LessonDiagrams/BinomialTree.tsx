import React from 'react';
import { MathInline, MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { ArrowLibrary } from '@/core/diagram-engine/primitives/ArrowLibrary';
import { cn } from '@/core/utils/cn';

const branchLabels = [
  { label: 'p', x: '26%', y: '34%' },
  { label: '1-p', x: '26%', y: '66%' },
  { label: 'p', x: '60%', y: '20%' },
  { label: '1-p', x: '60%', y: '38%' },
  { label: 'p', x: '60%', y: '62%' },
  { label: '1-p', x: '60%', y: '80%' },
];

const outcomeCards = [
  {
    title: 'Success, Success',
    probability: 'p^2',
    className: 'border-emerald-500/35 bg-emerald-950/15 text-emerald-300',
    style: { right: '4%', top: '16%' },
  },
  {
    title: 'Success, Failure',
    probability: 'p(1-p)',
    className: 'border-zinc-700 bg-zinc-950/55 text-zinc-200',
    style: { right: '4%', top: '36%' },
  },
  {
    title: 'Failure, Success',
    probability: '(1-p)p',
    className: 'border-zinc-700 bg-zinc-950/55 text-zinc-200',
    style: { right: '4%', top: '64%' },
  },
  {
    title: 'Failure, Failure',
    probability: '(1-p)^2',
    className: 'border-rose-500/35 bg-rose-950/15 text-rose-300',
    style: { right: '4%', top: '84%' },
  },
];

const Card: React.FC<{
  className: string;
  children: React.ReactNode;
  style: React.CSSProperties;
}> = ({ className, children, style }) => (
  <div
    className={cn(
      'absolute z-10 flex min-h-18 w-[180px] -translate-y-1/2 items-center justify-between gap-3 rounded-lg border px-4 py-3 shadow-xl',
      className
    )}
    style={style}
  >
    {children}
  </div>
);

export const BinomialTree: React.FC = () => {
  return (
    <DiagramPanel
      title="Binomial Logic Tree (n=2)"
      analysis={
        <div className="mx-auto w-full max-w-5xl space-y-4">
          <p className="text-center text-sm italic leading-relaxed text-zinc-400 md:text-base">
            Each trial keeps the same probability <MathInline content="p" /> of success, regardless of the previous outcome.
          </p>

          <div className="grid gap-4 md:grid-cols-[1fr_1fr]">
            <div className="rounded-xl border border-zinc-800 bg-zinc-950/45 p-4 shadow-xl">
              <h4 className="mb-2 text-center text-2.5 font-black uppercase tracking-[0.28em] text-zinc-500">
                Model Notation
              </h4>
              <MathText
                content="X \\sim B(n,p)"
                center
                noMargin
                className="text-2xl md:text-3xl"
              />
            </div>

            <div className="rounded-xl border border-emerald-500/25 bg-emerald-950/10 p-4 text-sm leading-relaxed text-zinc-300 shadow-xl md:text-base">
              <strong className="font-bold text-emerald-300">Independence check:</strong> the second branch still uses <MathInline content="p" /> and <MathInline content="1-p" /> after either first result.
            </div>
          </div>
        </div>
      }
    >
      <div className="mx-auto w-full max-w-full space-y-4 rounded-2xl border border-zinc-800/80 bg-zinc-950/35 p-4 shadow-2xl md:p-6">
        <div className="relative h-[620px] overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/70 shadow-inner">
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 1000 640"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            shapeRendering="geometricPrecision"
            role="img"
            aria-label="Two trial binomial probability tree"
          >
            <ArrowLibrary />

            <rect x="38" y="42" width="924" height="556" rx="24" fill="#09090b" stroke="#27272a" strokeWidth="1.4" />

            <path d="M200 320 C270 238 328 218 386 214" stroke="#52525b" strokeWidth="2.6" markerEnd="url(#arrow-structural)" />
            <path d="M200 320 C270 402 328 422 386 426" stroke="#52525b" strokeWidth="2.6" markerEnd="url(#arrow-structural)" />
            <path d="M500 214 C582 130 642 118 710 110" stroke="#52525b" strokeWidth="2.4" markerEnd="url(#arrow-structural)" />
            <path d="M500 214 C582 258 642 274 710 284" stroke="#52525b" strokeWidth="2.4" markerEnd="url(#arrow-structural)" />
            <path d="M500 426 C582 382 642 366 710 356" stroke="#52525b" strokeWidth="2.4" markerEnd="url(#arrow-structural)" />
            <path d="M500 426 C582 510 642 522 710 530" stroke="#52525b" strokeWidth="2.4" markerEnd="url(#arrow-structural)" />
          </svg>

          <div className="absolute left-[11%] top-1/2 z-10 flex size-22 -translate-y-1/2 items-center justify-center rounded-full border-2 border-blue-500 bg-zinc-950/85 text-base font-bold text-zinc-100 shadow-xl md:size-24 md:text-lg">
            Start
          </div>

          <Card
            className="border-emerald-500 bg-emerald-950/35 text-emerald-200"
            style={{ left: '36%', top: '33.5%' }}
          >
            <span className="text-lg font-bold">Success</span>
          </Card>

          <Card
            className="border-rose-500 bg-rose-950/30 text-rose-200"
            style={{ left: '36%', top: '66.5%' }}
          >
            <span className="text-lg font-bold">Failure</span>
          </Card>

          {outcomeCards.map((card) => (
            <Card key={card.title} className={cn('w-[220px]', card.className)} style={card.style}>
              <span className="max-w-24 text-sm font-semibold leading-snug md:text-base">{card.title}</span>
              <MathText content={card.probability} noMargin center className="text-base md:text-lg" />
            </Card>
          ))}

          {branchLabels.map((branch) => (
            <div
              key={`${branch.label}-${branch.x}-${branch.y}`}
              className="absolute z-20 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-950/95 text-zinc-200 shadow-xl"
              style={{ left: branch.x, top: branch.y }}
            >
              <MathText content={branch.label} noMargin center className="text-base" />
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-zinc-800 bg-zinc-950/65 px-5 py-4 text-center text-sm text-zinc-400 shadow-xl md:text-base">
          Terminal probabilities: <MathInline content="p^2" />, <MathInline content="p(1-p)" />, <MathInline content="(1-p)p" />, <MathInline content="(1-p)^2" />. Together they add to <MathInline content="1" />.
        </div>
      </div>
    </DiagramPanel>
  );
};
