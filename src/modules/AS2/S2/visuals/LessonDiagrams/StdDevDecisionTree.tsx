import React from 'react';
import { MathInline, MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { cn } from '@/core/utils/cn';

type FlowNodeTone = 'neutral' | 'amber' | 'blue' | 'emerald';

type FlowNodeProps = {
  x: number;
  y: number;
  width: number;
  tone?: FlowNodeTone;
  children: React.ReactNode;
};

const toneClasses: Record<FlowNodeTone, string> = {
  neutral: 'border-zinc-700/80 bg-zinc-900/70 text-zinc-200',
  amber: 'border-amber-500/35 bg-amber-950/15 text-amber-200',
  blue: 'border-blue-500/35 bg-blue-950/25 text-blue-100',
  emerald: 'border-emerald-500/35 bg-emerald-950/25 text-emerald-100',
};

const FlowNode: React.FC<FlowNodeProps> = ({ x, y, width, tone = 'neutral', children }) => (
  <div
    className={cn(
      'absolute flex min-h-14 items-center justify-center rounded-lg border px-4 py-3 text-center text-sm font-semibold leading-tight shadow-xl backdrop-blur-xs',
      toneClasses[tone]
    )}
    style={{
      left: `${x / 10}%`,
      top: `${y / 6.2}%`,
      width: `${width / 10}%`,
      transform: 'translate(-50%, -50%)',
    }}
  >
    {children}
  </div>
);

export const StdDevDecisionTree: React.FC = () => (
  <DiagramPanel
    title="Standard Deviation Workflow"
    analysis={
      <div className="space-y-4">
        <div className="rounded-lg border border-zinc-800 bg-zinc-900/45 p-4">
          <p className="text-sm leading-relaxed text-zinc-300">
            The workflow is the same for discrete frequency tables and grouped data. For grouped data, use class midpoints as the working values of{' '}
            <MathInline content="x" className="text-zinc-100" />.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-blue-500/25 bg-blue-950/10 p-4">
            <h4 className="mb-2 text-2.5 font-black uppercase tracking-[0.22em] text-blue-300">Variance First</h4>
            <div className="rounded-md border border-zinc-800/70 bg-zinc-950/55 px-4 py-3 text-center">
              <MathText content="{\\large \\sigma^2=\\frac{\\sum fx^2}{\\sum f}-\\left(\\frac{\\sum fx}{\\sum f}\\right)^2}" noMargin />
            </div>
          </div>

          <div className="rounded-lg border border-emerald-500/25 bg-emerald-950/10 p-4">
            <h4 className="mb-2 text-2.5 font-black uppercase tracking-[0.22em] text-emerald-400">Then Square Root</h4>
            <div className="rounded-md border border-zinc-800/70 bg-zinc-950/55 px-4 py-3 text-center">
              <MathText content="{\\large \\sigma=\\sqrt{\\sigma^2}}" noMargin />
            </div>
          </div>
        </div>
      </div>
    }
  >
    <div className="mx-auto w-full max-w-5xl">
      <div className="relative mx-auto aspect-16/9 w-full overflow-hidden rounded-xl border border-zinc-800/60 bg-zinc-925 shadow-inner">
        <svg
          viewBox="0 0 1000 620"
          className="absolute inset-0 h-full w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          shapeRendering="geometricPrecision"
          role="img"
          aria-label="Standard deviation workflow from data presentation to variance and standard deviation"
        >
          <defs>
            <marker id="stddev-flow-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 1 1 L 9 5 L 1 9 Z" fill="#71717a" />
            </marker>
            <linearGradient id="stddev-flow-line" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0" stopColor="#71717a" stopOpacity="0.9" />
              <stop offset="1" stopColor="#3f3f46" stopOpacity="0.7" />
            </linearGradient>
          </defs>

          <g stroke="url(#stddev-flow-line)" strokeWidth="2" markerEnd="url(#stddev-flow-arrow)" opacity="0.95">
            <path d="M500 105 C500 138 365 142 285 172" />
            <path d="M500 105 C500 138 635 142 715 172" />

            <path d="M285 228 C285 262 210 268 170 310" />
            <path d="M285 228 C285 262 355 268 390 310" />
            <path d="M715 228 C715 262 645 268 610 310" />
            <path d="M715 228 C715 262 790 268 830 310" />

            <path d="M390 370 C390 416 455 418 500 438" />
            <path d="M830 370 C830 416 545 418 500 438" />
            <path d="M500 498 L500 535" />
          </g>
        </svg>

        <FlowNode x={500} y={75} width={250}>
          Data Presentation
        </FlowNode>

        <FlowNode x={285} y={200} width={230} tone="amber">
          Frequency Table
        </FlowNode>
        <FlowNode x={715} y={200} width={230} tone="amber">
          Grouped Data
        </FlowNode>

        <FlowNode x={170} y={340} width={210}>
          Calculate midpoints <MathInline content="x" className="ml-1 text-zinc-100" />
        </FlowNode>
        <FlowNode x={390} y={340} width={220}>
          <span>
            Sum <MathInline content="\\sum fx" className="mx-1 text-zinc-100" /> and{' '}
            <MathInline content="\\sum fx^2" className="text-zinc-100" />
          </span>
        </FlowNode>
        <FlowNode x={610} y={340} width={210}>
          Use class midpoints
        </FlowNode>
        <FlowNode x={830} y={340} width={220}>
          <span>
            Sum <MathInline content="\\sum fx" className="mx-1 text-zinc-100" /> and{' '}
            <MathInline content="\\sum fx^2" className="text-zinc-100" />
          </span>
        </FlowNode>

        <FlowNode x={500} y={468} width={280} tone="blue">
          Variance formula
        </FlowNode>
        <FlowNode x={500} y={565} width={280} tone="emerald">
          Standard Deviation
        </FlowNode>
      </div>
    </div>
  </DiagramPanel>
);
