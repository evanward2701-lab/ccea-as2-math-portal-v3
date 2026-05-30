import React from 'react';
import { MathInline, MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { ArrowLibrary } from '@/core/diagram-engine/primitives/ArrowLibrary';
import { cn } from '@/core/utils/cn';

const branchLabels = [
  { label: 'p', x: '29%', y: '38%' },
  { label: '1-p', x: '29%', y: '61%' },
  { label: 'p', x: '64%', y: '24%' },
  { label: '1-p', x: '64%', y: '40%' },
  { label: 'p', x: '65%', y: '60%' },
  { label: '1-p', x: '65%', y: '75%' },
];

const outcomeCards = [
  {
    title: 'Success, Success',
    probability: 'p^2',
    className: 'border-primary/35 bg-primary/15 text-primary',
    style: { left: '73%', top: '18%' },
  },
  {
    title: 'Success, Failure',
    probability: 'p(1-p)',
    className: 'border-primary/10 bg-card text-foreground',
    style: { left: '73%', top: '39%' },
  },
  {
    title: 'Failure, Success',
    probability: '(1-p)p',
    className: 'border-primary/10 bg-card text-foreground',
    style: { left: '73%', top: '61%' },
  },
  {
    title: 'Failure, Failure',
    probability: '(1-p)^2',
    className: 'border-destructive/35 bg-destructive/15 text-destructive',
    style: { left: '73%', top: '82%' },
  },
];

const Card: React.FC<{
  className: string;
  children: React.ReactNode;
  style: React.CSSProperties;
}> = ({ className, children, style }) => (
  <div
    className={cn(
      'absolute z-10 flex min-h-20 w-[210px] -translate-y-1/2 items-center justify-between gap-4 rounded-xl border px-5 py-3 shadow-2xl backdrop-blur-sm',
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
          <p className="text-center text-sm italic leading-relaxed text-muted-foreground md:text-base">
            Each trial keeps the same probability <MathInline content="p" /> of success, regardless of the previous outcome.
          </p>

          <div className="grid gap-4 md:grid-cols-[1fr_1fr]">
            <div className="rounded-xl border border-primary/20 bg-card p-4 shadow-xl">
              <h4 className="mb-2 text-center text-2.5 font-black uppercase tracking-[0.28em] text-muted-foreground">
                Model Notation
              </h4>
              <MathText
                content="X \\sim B(n,p)"
                center
                noMargin
                className="text-2xl md:text-3xl"
              />
            </div>

            <div className="rounded-xl border border-primary/25 bg-primary/10 p-4 text-sm leading-relaxed text-foreground shadow-xl md:text-base">
              <strong className="font-bold text-primary">Independence check:</strong> the second branch still uses <MathInline content="p" /> and <MathInline content="1-p" /> after either first result.
            </div>
          </div>
        </div>
      }
    >
      <div className="mx-auto w-full max-w-6xl space-y-4 rounded-2xl border border-primary/20 bg-card p-4 shadow-2xl md:p-6">
        <div className="relative h-[560px] overflow-hidden rounded-xl bg-card">
          <div className="absolute inset-0 -translate-x-[5%]">
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

            <path d="M158 320 C248 244 330 224 418 218" stroke="var(--muted-foreground)" strokeWidth="2.8" markerEnd="url(#arrow-structural)" opacity="0.86" />
            <path d="M158 320 C248 396 330 416 418 422" stroke="var(--muted-foreground)" strokeWidth="2.8" markerEnd="url(#arrow-structural)" opacity="0.86" />
            <path d="M548 218 C626 138 690 118 760 116" stroke="var(--muted-foreground)" strokeWidth="2.6" markerEnd="url(#arrow-structural)" opacity="0.8" />
            <path d="M548 218 C626 250 690 260 760 252" stroke="var(--muted-foreground)" strokeWidth="2.6" markerEnd="url(#arrow-structural)" opacity="0.8" />
            <path d="M548 422 C626 390 690 380 760 388" stroke="var(--muted-foreground)" strokeWidth="2.6" markerEnd="url(#arrow-structural)" opacity="0.8" />
            <path d="M548 422 C626 502 690 522 760 524" stroke="var(--muted-foreground)" strokeWidth="2.6" markerEnd="url(#arrow-structural)" opacity="0.8" />
          </svg>

          <div className="absolute left-[7%] top-1/2 z-10 flex size-24 -translate-y-1/2 items-center justify-center rounded-full border-2 border-primary bg-primary/15 text-lg font-black text-foreground shadow-2xl shadow-blue-950/30 md:size-28 md:text-xl">
            Start
          </div>

          <Card
            className="min-h-12 w-[128px] py-2 border-primary/80 bg-primary/35 text-primary"
            style={{ left: '39%', top: '34%' }}
          >
            <span className="text-xl font-black">Success</span>
          </Card>

          <Card
            className="min-h-12 w-[128px] py-2 border-destructive/80 bg-destructive/30 text-destructive"
            style={{ left: '39%', top: '66%' }}
          >
            <span className="text-xl font-black">Failure</span>
          </Card>

          {outcomeCards.map((card) => (
            <Card key={card.title} className={cn('w-[230px]', card.className)} style={card.style}>
              <span className="max-w-[7rem] text-base font-black leading-snug">{card.title}</span>
              <MathText content={`{\\large ${card.probability}}`} noMargin center className="[&_p]:m-0" />
            </Card>
          ))}

          {branchLabels.map((branch) => (
            <div
              key={`${branch.label}-${branch.x}-${branch.y}`}
              className="absolute z-20 flex min-h-10 min-w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg border border-primary/10 bg-card px-2 text-foreground shadow-xl backdrop-blur-sm"
              style={{ left: branch.x, top: branch.y }}
            >
              <MathText content={`{\\large ${branch.label}}`} noMargin center className="[&_p]:m-0" />
            </div>
          ))}
          </div>
        </div>

        <div className="rounded-xl border border-primary/20 bg-card px-5 py-4 text-center text-base text-muted-foreground shadow-xl">
          Terminal probabilities: <MathInline content="p^2" />, <MathInline content="p(1-p)" />, <MathInline content="(1-p)p" />, <MathInline content="(1-p)^2" />. Together they add to <MathInline content="1" />.
        </div>
      </div>
    </DiagramPanel>
  );
};
