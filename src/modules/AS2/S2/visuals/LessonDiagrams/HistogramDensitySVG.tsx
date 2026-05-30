import React from 'react';
import { MathInline, MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { DiagramLabel } from '@/core/diagram-engine/primitives/DiagramLabel';

const bars = [
  { x: 150, y: 90, width: 120, height: 210, label: 'width = 10', fill: '#141417', stroke: '#3f3f46' },
  { x: 270, y: 150, width: 120, height: 150, label: 'width = 10', fill: '#141417', stroke: '#3f3f46' },
  { x: 390, y: 210, width: 240, height: 90, label: 'width = 20', fill: '#022c22', stroke: '#10b981' },
];

export const HistogramDensitySVG: React.FC = () => (
  <DiagramPanel
    title="Fig 1. Histogram Geometry"
    analysis={
      <div className="space-y-4">
        <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
          <p className="text-sm leading-relaxed text-foreground">
            In a histogram, the <strong className="font-semibold text-primary">area</strong> of each bar represents the{' '}
            <strong className="font-semibold text-primary">frequency</strong>, not the height.
          </p>
        </div>

        <div className="rounded-lg border border-destructive/40 bg-destructive/30 p-4">
          <h4 className="mb-3 text-2.5 font-black uppercase tracking-[0.22em] text-destructive">CCEA Exam Pitfall</h4>
          <p className="mb-4 text-sm leading-relaxed text-destructive">
            Do not read the bar height as the frequency when class widths are unequal.
          </p>
          <div className="rounded-md border border-primary/20 bg-card px-4 py-3 text-center text-foreground">
            <MathText content="{\\Large \\mathit{Area}=\\mathit{Width}\\times\\mathit{Height}}" noMargin />
          </div>
        </div>
      </div>
    }
  >
    <div className="relative mx-auto aspect-16/8 w-full max-w-4xl overflow-hidden rounded-xl border border-primary/20 bg-card shadow-inner">
      <svg
        viewBox="0 0 760 380"
        className="absolute inset-0 h-full w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        shapeRendering="geometricPrecision"
        role="img"
        aria-label="Histogram showing that bar area represents frequency"
      >
        <g stroke="#1e293b" strokeDasharray="7 8" strokeWidth="1.4">
          <line x1="150" y1="90" x2="640" y2="90" />
          <line x1="150" y1="150" x2="640" y2="150" />
          <line x1="150" y1="210" x2="640" y2="210" />
        </g>

        <path d="M150 45 L150 300 L650 300" stroke="#475569" strokeWidth="3" strokeLinecap="round" />

        {bars.map((bar) => (
          <rect
            key={`${bar.x}-${bar.width}`}
            x={bar.x}
            y={bar.y}
            width={bar.width}
            height={bar.height}
            fill={bar.fill}
            stroke={bar.stroke}
            strokeWidth="2.5"
          />
        ))}

        <g stroke="#475569" strokeWidth="1.5" opacity="0.75">
          <line x1="150" y1="300" x2="150" y2="309" />
          <line x1="270" y1="300" x2="270" y2="309" />
          <line x1="390" y1="300" x2="390" y2="309" />
          <line x1="630" y1="300" x2="630" y2="309" />
        </g>
      </svg>

      <DiagramLabel x="11%" y="45%">
        <div className="w-40 -rotate-90 text-center text-2.5 font-semibold uppercase tracking-[0.16em] text-slate-400">
          Frequency Density
        </div>
      </DiagramLabel>

      {bars.map((bar) => (
        <DiagramLabel key={bar.label} x={`${((bar.x + bar.width / 2) / 760) * 100}%`} y="83%">
          <div className="font-serif text-sm italic text-slate-500">{bar.label}</div>
        </DiagramLabel>
      ))}

      <DiagramLabel x="52.5%" y="90%">
        <div className="flex items-baseline justify-center gap-1 whitespace-nowrap text-foreground">
          <span className="font-serif text-lg italic leading-none">Time</span>
          <MathInline content="t" className="[&_.katex]:text-lg" />
        </div>
      </DiagramLabel>

      <DiagramLabel x="67%" y="60%">
        <div className="flex w-36 flex-col items-center justify-center rounded-md border border-primary/25 bg-primary/45 px-2 py-2 text-center text-primary shadow-xl">
          <MathInline content="\\mathit{Area}" className="[&_.katex]:text-lg [&_.katex]:leading-none" />
          <MathInline content="=\\mathit{Frequency}" className="[&_.katex]:text-base [&_.katex]:leading-none" />
        </div>
      </DiagramLabel>
    </div>
  </DiagramPanel>
);
