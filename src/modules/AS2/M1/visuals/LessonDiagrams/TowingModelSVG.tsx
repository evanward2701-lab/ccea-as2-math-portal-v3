import React from 'react';
import { MathInline } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { cn } from '@/core/utils/cn';
import { Particle, SupportSurface } from '@/core/diagram-engine/primitives/PhysicsPrimitives';
import { SVGLibrary } from '@/core/diagram-engine/primitives/SVGLibrary';
import { VectorArrow } from '@/core/diagram-engine/primitives/VectorArrow';

type Tone = 'zinc' | 'amber' | 'emerald' | 'rose';

interface AnalysisCard {
  title: string;
  body: string;
  tone: Tone;
  formula?: string;
  footer?: string;
}

const toneStyles: Record<Tone, { text: string; border: string; bg: string; strip: string }> = {
  zinc: {
    text: 'text-muted-foreground',
    border: 'border-primary/20',
    bg: 'bg-card',
    strip: 'border-primary/20 bg-card text-muted-foreground',
  },
  amber: {
    text: 'text-primary',
    border: 'border-primary/20',
    bg: 'bg-primary/15',
    strip: 'border-primary/20 bg-primary/20 text-primary',
  },
  emerald: {
    text: 'text-primary',
    border: 'border-primary/20',
    bg: 'bg-primary/15',
    strip: 'border-primary/20 bg-primary/20 text-primary',
  },
  rose: {
    text: 'text-destructive',
    border: 'border-destructive/20',
    bg: 'bg-destructive/15',
    strip: 'border-primary/20 bg-card text-muted-foreground',
  },
};

const analysisCards: AnalysisCard[] = [
  {
    title: 'Whole System Method',
    body: 'Treat both vehicles as one system to find the common acceleration. Internal towbar forces cancel.',
    tone: 'amber',
    formula: '$D - R_1 - R_2 = (m_1 + m_2)a$',
  },
  {
    title: 'Isolated Vehicle Method',
    body: 'Isolate one vehicle to expose the internal towbar force and calculate the tension or thrust.',
    tone: 'emerald',
    formula: '$T - R_1 = m_1a$',
  },
  {
    title: 'M1 Modelling',
    body: 'Rigid and light are mathematical instructions: fixed distance with negligible connector mass.',
    tone: 'rose',
    footer: 'Idealised one-dimensional translation model',
  },
];

const AnalysisCard: React.FC<AnalysisCard> = ({ title, body, tone, formula, footer }) => {
  const styles = toneStyles[tone];

  return (
    <article className={cn('flex min-h-47.5 flex-col justify-between rounded-xl border p-5 bg-card/40 shadow-sm', styles.border)}>
      <div>
        <h4 className={cn('mb-2 text-xs font-black uppercase tracking-wider', styles.text)}>{title}</h4>
        <p className="text-xs font-medium leading-relaxed text-muted-foreground">{body}</p>
      </div>
      <div className={cn('mt-4 rounded-lg border p-3 text-center text-xs font-bold shadow-inner', styles.strip)}>
        {formula ? <MathInline content={formula} /> : footer}
      </div>
    </article>
  );
};

export const TowingModelSVG: React.FC = () => {
  return (
    <DiagramPanel
      title="Fig 4. Towing Dynamics & Force Isolation"
      analysis={
        <div className="mx-auto grid w-full max-w-5xl gap-4 px-2 md:grid-cols-3">
          {analysisCards.map((card) => (
            <AnalysisCard key={card.title} {...card} />
          ))}
          <div className="rounded-xl border border-primary/20 bg-primary/10 p-3.5 text-center text-xs font-bold tracking-wide text-primary shadow-inner md:col-span-3 select-none">
            Exam technique: translate each modelling word into its mathematical consequence before constructing equations.
          </div>
        </div>
      }
    >
      {/* Complete Uniform Geometry Enclosure Track */}
      <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-2xl border border-primary/20 bg-card p-5 shadow-2xl">
        <div className="mb-5 flex flex-col gap-1 border-b border-primary/20 pb-5 text-center select-none">
          <div className="text-2.5 font-black uppercase tracking-[0.32em] text-muted-foreground">System Isolation</div>
          <div className="text-xl font-bold tracking-tight text-white mt-1">Whole System vs Isolated Body Dynamics</div>
        </div>

        <div className="relative w-full aspect-80/42 bg-card rounded-xl border border-primary/20 overflow-hidden">
          <SVGLibrary />
          <svg
            className="absolute inset-0 h-full w-full z-0"
            viewBox="0 0 800 420"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <marker id="tow-zinc-arrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 2 2 L 10 5 L 2 8 Z" fill="#52525b" />
              </marker>
              <marker id="tow-emerald-arrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 2 2 L 10 5 L 2 8 Z" fill="#10b981" />
              </marker>
              <marker id="tow-rose-arrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 2 2 L 10 5 L 2 8 Z" fill="#f43f5e" />
              </marker>
              <marker id="tow-blue-arrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 2 2 L 10 5 L 2 8 Z" fill="#3b82f6" />
              </marker>
            </defs>

            {/* Methods Boundaries Layer Systems */}
            <rect x="35" y="90" width="730" height="235" rx="14" fill="none" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.4" />
            <rect x="85" y="145" width="200" height="160" rx="10" fill="none" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />
            <rect x="220" y="238" width="195" height="60" rx="4" fill="none" stroke="#3b82f6" strokeWidth="1.7" strokeDasharray="6 6" opacity="0.8" />

            {/* Ground Track line */}
            <SupportSurface x1={45} y1={300} x2={755} y2={300} stroke="var(--border)" strokeWidth={2.5} rough={false} />

            {/* Trailing Vehicle Frame Profile (m1) */}
            <rect x="120" y="220" width="95" height="50" rx="5" fill="var(--card)" stroke="var(--muted-foreground)" strokeWidth="3" />
            <Particle cx={145} cy={284} r={14} fill="var(--background)" stroke="var(--muted-foreground)" strokeWidth="3" />
            <Particle cx={190} cy={284} r={14} fill="var(--background)" stroke="var(--muted-foreground)" strokeWidth="3" />

            {/* Leading Vehicle Frame Profile (m2) */}
            <rect x="420" y="205" width="150" height="63" rx="9" fill="var(--card)" stroke="var(--muted-foreground)" strokeWidth="3" />
            <path d="M 446 205 L 472 160 H 538 L 566 205 Z" fill="var(--muted)" stroke="var(--muted-foreground)" strokeWidth="3" strokeLinejoin="round" />
            <Particle cx={455} cy={284} r={16} fill="var(--background)" stroke="var(--muted-foreground)" strokeWidth="3" />
            <Particle cx={535} cy={284} r={16} fill="var(--background)" stroke="var(--muted-foreground)" strokeWidth="3" />

            {/* Coupling Towbar line connector */}
            <line x1="215" y1="243" x2="420" y2="243" stroke="#e4e4e7" strokeWidth="3" strokeLinecap="round" />

            {/* System Acceleration Vector Track overhead (Single line with double-arrowheads) */}
            <VectorArrow x1={280} y1={70} x2={510} y2={70} type="structural" marker="acceleration" strokeWidth={1.8} />

            {/* External Vector Pointers */}
            <line x1="570" y1="243" x2="680" y2="243" stroke="#10b981" strokeWidth="3.5" markerEnd="url(#tow-emerald-arrow)" />
            <line x1="120" y1="243" x2="55" y2="243" stroke="#f43f5e" strokeWidth="2" markerEnd="url(#tow-rose-arrow)" />
            <line x1="420" y1="225" x2="355" y2="225" stroke="#f43f5e" strokeWidth="2" markerEnd="url(#tow-rose-arrow)" />

            {/* Internal Symmetrical Towbar Tension Pairs */}
            <line x1="240" y1="243" x2="275" y2="243" stroke="#3b82f6" strokeWidth="2.5" markerEnd="url(#tow-blue-arrow)" />
            <line x1="395" y1="243" x2="360" y2="243" stroke="#3b82f6" strokeWidth="2.5" markerEnd="url(#tow-blue-arrow)" />
          </svg>

          {/* Absolute Structured Typography Layer Frame */}
          <div className="absolute inset-0 z-10 pointer-events-none select-none text-xs font-semibold text-muted-foreground">
            {/* System Header Badges */}
            <div className="absolute left-[10.5%] top-[23.5%] rounded border border-primary/20 bg-card/95 px-2 py-0.5 text-2.25 font-black uppercase tracking-wider text-[#fbbf24] backdrop-blur-xs">
              Whole System Boundary
            </div>
            <div className="absolute left-[11.5%] top-[34.8%] rounded border border-primary/20 bg-card/95 px-2 py-0.5 text-2.25 font-black uppercase tracking-wider text-[#10b981] backdrop-blur-xs">
              Isolated Forces
            </div>

            {/* FIXED: Balanced and safely grouped mid-span layout metrics callout indicators */}
            <div className="absolute left-[50%] top-[5.5%] -translate-x-1/2 rounded-md border border-primary/20 bg-card/95 px-2 py-1 text-muted-foreground text-2.25 font-black uppercase tracking-widest shadow-sm">
              Common acceleration <MathInline content="$a$" />
            </div>
            <div className="absolute left-[39.7%] top-[67%] -translate-x-1/2 w-[24%] text-center text-[10px] font-black uppercase leading-tight tracking-[0.08em] text-[#3b82f6] whitespace-nowrap">
              Internal forces cancel
            </div>
            <div className="absolute left-[50%] top-[81%] -translate-x-1/2 rounded-md border border-primary/20 bg-card/95 px-2 py-1 text-2.25 font-bold text-muted-foreground tracking-wide uppercase shadow-sm">
              Rigid light towbar
            </div>

            {/* Mass Parameter Labels */}
            <div className="absolute left-[21%] top-[53.5%] transform -translate-x-1/2 text-sm font-bold text-white/95"><MathInline content="$m_1$" /></div>
            <div className="absolute left-[62%] top-[52%] transform -translate-x-1/2 text-sm font-bold text-white/95"><MathInline content="$m_2$" /></div>

            {/* Force Variable Vectors */}
            <div className="absolute left-[5.4%] top-[52%] font-black text-destructive text-sm"><MathInline content="$R_1$" /></div>
            <div className="absolute left-[42.2%] top-[48.5%] font-black text-destructive text-sm"><MathInline content="$R_2$" /></div>
            <div className="absolute left-[86.5%] top-[50%] font-black text-primary text-sm"><MathInline content="$D$" /></div>

            {/* Opposing Towbar Tension Values */}
            <div className="absolute left-[31.6%] top-[60.5%] font-bold text-primary text-xs"><MathInline content="$T$" /></div>
            <div className="absolute left-[46.8%] top-[60.5%] font-bold text-primary text-xs"><MathInline content="$T$" /></div>
          </div>
        </div>
      </div>
    </DiagramPanel>
  );
};
