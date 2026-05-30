import React from 'react';
import { MathInline, MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { DiagramLabel } from '@/core/diagram-engine/primitives/DiagramLabel';

export const VennMutExSVG: React.FC = () => (
  <DiagramPanel
    title="Fig 1. Venn Configurations"
    analysis={
      <div className="space-y-3">
        <div className="flex justify-around w-full max-w-xl mx-auto gap-6">
          <div className="text-center font-sans text-base font-bold text-primary">
            Mutually Exclusive: <MathText content="{\\large P(A \\cap B) = 0}" className="inline [&_p]:inline [&_p]:m-0" />
          </div>
          <div className="text-center font-sans text-base font-bold text-destructive">
            Intersecting: <MathText content="{\\large P(A \\cap B) \\neq 0}" className="inline [&_p]:inline [&_p]:m-0" />
          </div>
        </div>
        <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg text-sm text-foreground leading-relaxed">
          If events are mutually exclusive, the subtraction component of the General Addition Law (<MathText content="- P(A \\cap B)" className="inline [&_p]:inline [&_p]:m-0" />) becomes zero.
        </div>
        <div className="p-3 bg-destructive/30 border border-destructive/40 rounded text-sm text-destructive">
          <strong className="block text-destructive not-italic uppercase text-2.5 mb-1">CCEA Exam Pitfall:</strong>
          Never assume <MathText content="P(A \\cup B) = P(A) + P(B)" className="inline [&_p]:inline [&_p]:m-0" /> unless the events are explicitly stated to be mutually exclusive.
        </div>
      </div>
    }
  >
    <div className="mx-auto w-full max-w-5xl rounded-2xl border border-primary/20 bg-card p-5 shadow-2xl">
      <div className="grid gap-5 lg:grid-cols-2">
        <div className="rounded-xl border border-primary/20 bg-card p-4 shadow-inner">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h4 className="text-2.5 font-black uppercase tracking-[0.24em] text-primary">Mutually Exclusive</h4>
            <div className="min-w-36 rounded-lg border border-primary/25 bg-primary/15 px-3 py-1.5 text-center text-sm text-primary">
              <MathInline content="P(A \\cap B)=0" className="whitespace-nowrap" />
            </div>
          </div>

          <div className="relative aspect-16/9 overflow-hidden rounded-xl border border-primary/20 bg-card shadow-inner">
            <svg viewBox="0 0 520 292" className="absolute inset-0 h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision">
              <rect x="34" y="32" width="452" height="228" rx="22" fill="var(--background)" stroke="#3f3f46" strokeWidth="2.2" />
              <circle cx="190" cy="148" r="72" fill="#10b981" fillOpacity="0.12" stroke="#10b981" strokeWidth="4" />
              <circle cx="344" cy="148" r="72" fill="var(--muted-foreground)" fillOpacity="0.08" stroke="var(--muted-foreground)" strokeWidth="4" />
              <line x1="260" y1="72" x2="260" y2="224" stroke="var(--border)" strokeWidth="1.4" strokeDasharray="7 9" opacity="0.85" />
            </svg>

            <DiagramLabel x="10.5%" y="15%" text="S" className="text-2xl font-serif italic text-muted-foreground" />
            <DiagramLabel x="32.5%" y="40%" text="A" className="text-3xl font-serif italic text-foreground" />
            <DiagramLabel x="62%" y="40%" text="B" className="text-3xl font-serif italic text-foreground" />
            <DiagramLabel x="50%" y="84%">
              <div className="rounded-lg border border-primary/25 bg-primary/15 px-3 py-1 text-2.5 font-black uppercase tracking-[0.22em] text-primary">
                no overlap
              </div>
            </DiagramLabel>
          </div>
        </div>

        <div className="rounded-xl border border-destructive/20 bg-card p-4 shadow-inner">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h4 className="text-2.5 font-black uppercase tracking-[0.24em] text-destructive">Intersecting</h4>
            <div className="min-w-36 rounded-lg border border-destructive/25 bg-destructive/20 px-3 py-1.5 text-center text-sm text-destructive">
              <MathInline content="P(A \\cap B)\\neq0" className="whitespace-nowrap" />
            </div>
          </div>

          <div className="relative aspect-16/9 overflow-hidden rounded-xl border border-primary/20 bg-card shadow-inner">
            <svg viewBox="0 0 520 292" className="absolute inset-0 h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision">
              <defs>
                <clipPath id="venn-a-clip">
                  <circle cx="222" cy="148" r="72" />
                </clipPath>
              </defs>
              <rect x="34" y="32" width="452" height="228" rx="22" fill="var(--background)" stroke="#3f3f46" strokeWidth="2.2" />
              <circle cx="222" cy="148" r="72" fill="#10b981" fillOpacity="0.12" stroke="#10b981" strokeWidth="4" />
              <circle cx="300" cy="148" r="72" fill="var(--muted-foreground)" fillOpacity="0.08" stroke="var(--muted-foreground)" strokeWidth="4" />
              <circle cx="300" cy="148" r="72" fill="#fb7185" fillOpacity="0.26" clipPath="url(#venn-a-clip)" />
              <path d="M261 88 C232 119 232 177 261 208 C290 177 290 119 261 88 Z" fill="#fb7185" fillOpacity="0.18" stroke="#fb7185" strokeWidth="1.4" opacity="0.8" />
              <path d="M261 198 L261 294" stroke="#fb7185" strokeWidth="1.5" strokeLinecap="round" opacity="0.75" />
            </svg>

            <DiagramLabel x="10.5%" y="15%" text="S" className="text-2xl font-serif italic text-muted-foreground" />
            <DiagramLabel x="33%" y="41%" text="A" className="text-3xl font-serif italic text-foreground" />
            <DiagramLabel x="59%" y="41%" text="B" className="text-3xl font-serif italic text-foreground" />
            <DiagramLabel x="37%" y="84%">
              <div className="rounded-md border border-destructive/25 bg-card px-2 py-1 text-center shadow-sm backdrop-blur-sm">
                <MathInline content="P(A\\cap B)" className="whitespace-nowrap text-sm text-destructive" />
              </div>
            </DiagramLabel>
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-2">
        <div className="rounded-xl border border-primary/25 bg-primary/10 p-4 shadow-sm">
          <div className="mb-1 text-2.5 font-black uppercase tracking-[0.22em] text-primary">Exclusive</div>
          <p className="text-sm leading-relaxed text-foreground">The same outcome cannot be in both events.</p>
        </div>
        <div className="rounded-xl border border-destructive/25 bg-destructive/15 p-4 shadow-sm">
          <div className="mb-1 text-2.5 font-black uppercase tracking-[0.22em] text-destructive">Pitfall</div>
          <p className="text-sm leading-relaxed text-foreground">Only drop the intersection term when it is definitely zero.</p>
        </div>
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 shadow-sm md:col-span-2">
          <div className="mb-1 text-2.5 font-black uppercase tracking-[0.22em] text-muted-foreground">Addition Law</div>
          <div className="text-sm text-foreground">
            <MathInline content="{\\large P(A\\cup B)=P(A)+P(B)-P(A\\cap B)}" />
          </div>
        </div>
      </div>
    </div>
  </DiagramPanel>
);
