import React from 'react';
import { MathInline } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { cn } from '@/core/utils/cn';

type Tone = 'amber' | 'emerald' | 'rose';

interface AnalysisCard {
  title: string;
  body: string;
  tone: Tone;
  formula?: string;
  footer?: string;
}

const toneStyles: Record<Tone, { text: string; border: string; bg: string; strip: string }> = {
  amber: {
    text: 'text-amber-300',
    border: 'border-amber-500/25',
    bg: 'bg-amber-950/15',
    strip: 'border-amber-500/25 bg-amber-950/15 text-amber-300',
  },
  emerald: {
    text: 'text-emerald-300',
    border: 'border-emerald-500/25',
    bg: 'bg-emerald-950/15',
    strip: 'border-emerald-500/25 bg-emerald-950/15 text-emerald-300',
  },
  rose: {
    text: 'text-rose-300',
    border: 'border-rose-500/30',
    bg: 'bg-rose-950/20',
    strip: 'border-zinc-800/80 bg-zinc-950/35 text-zinc-500',
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
    <article className={cn('flex min-h-[180px] flex-col justify-between rounded-xl border p-5 shadow-sm', styles.border, styles.bg)}>
      <div>
        <h4 className={cn('mb-2 text-sm font-bold uppercase tracking-wider', styles.text)}>{title}</h4>
        <p className="text-xs font-medium leading-relaxed text-zinc-400">{body}</p>
      </div>
      <div className={cn('mt-4 rounded-lg border p-3 text-center text-sm font-bold shadow-inner', styles.strip)}>
        {formula ? <MathInline content={formula} /> : footer}
      </div>
    </article>
  );
};

const LabelBadge: React.FC<{
  className: string;
  tone?: Tone | 'zinc' | 'blue';
  children: React.ReactNode;
}> = ({ className, tone = 'zinc', children }) => {
  const toneClass =
    tone === 'amber'
      ? 'border-amber-500/25 text-amber-300'
      : tone === 'emerald'
        ? 'border-emerald-500/25 text-emerald-300'
        : tone === 'rose'
          ? 'border-rose-500/25 text-rose-300'
          : tone === 'blue'
            ? 'border-blue-500/25 text-blue-300'
            : 'border-zinc-800/80 text-zinc-300';

  return (
    <div
      className={cn(
        'absolute rounded-md border bg-[#0c0c0e]/95 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider shadow-sm backdrop-blur-xs lg:px-2.5 lg:py-1 lg:text-[10px]',
        toneClass,
        className,
      )}
    >
      {children}
    </div>
  );
};

const MathLabel: React.FC<{
  className: string;
  content: string;
  color?: string;
}> = ({ className, content, color = 'text-zinc-300' }) => (
  <div className={cn('absolute font-bold', color, className)}>
    <MathInline content={content} />
  </div>
);

const TowingBoard: React.FC = () => (
  <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-xl border border-zinc-800/80 bg-[#141417] shadow-2xl">
    <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-zinc-500/5 to-transparent" />
    <svg
      className="relative z-0 h-full w-full"
      viewBox="0 0 800 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      role="img"
      aria-label="Towing dynamics model showing whole system and isolated vehicle methods"
    >
      <defs>
        <marker id="tow-zinc-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M 1 1 L 9 5 L 1 9 Z" fill="#a1a1aa" />
        </marker>
        <marker id="tow-emerald-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M 1 1 L 9 5 L 1 9 Z" fill="#10b981" />
        </marker>
        <marker id="tow-rose-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M 1 1 L 9 5 L 1 9 Z" fill="#fb7185" />
        </marker>
        <marker id="tow-blue-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 1 1 L 9 5 L 1 9 Z" fill="#60a5fa" />
        </marker>
      </defs>

      <rect x="34" y="52" width="732" height="300" rx="16" fill="#111113" stroke="#27272a" strokeWidth="1.5" />

      <rect
        x="80"
        y="108"
        width="620"
        height="214"
        rx="14"
        fill="none"
        stroke="#f59e0b"
        strokeWidth="2"
        strokeDasharray="8 8"
        opacity="0.65"
      />
      <rect
        x="96"
        y="140"
        width="202"
        height="156"
        rx="12"
        fill="none"
        stroke="#10b981"
        strokeWidth="2"
        strokeDasharray="7 7"
        opacity="0.65"
      />

      <line x1="70" y1="282" x2="730" y2="282" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
      {Array.from({ length: 24 }).map((_, index) => (
        <line
          key={index}
          x1={86 + index * 27}
          y1="292"
          x2={98 + index * 27}
          y2="282"
          stroke="#3f3f46"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      ))}

      <rect x="120" y="214" width="96" height="48" rx="5" fill="#182235" stroke="#cbd5e1" strokeWidth="2.4" />
      <circle cx="144" cy="274" r="15" fill="#09090b" stroke="#cbd5e1" strokeWidth="2.4" />
      <circle cx="192" cy="274" r="15" fill="#09090b" stroke="#cbd5e1" strokeWidth="2.4" />

      <rect x="414" y="198" width="154" height="64" rx="9" fill="#182235" stroke="#cbd5e1" strokeWidth="2.4" />
      <path
        d="M 440 198 L 466 154 H 540 L 566 198 Z"
        fill="#292d36"
        stroke="#cbd5e1"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <circle cx="450" cy="274" r="18" fill="#09090b" stroke="#cbd5e1" strokeWidth="2.4" />
      <circle cx="538" cy="274" r="18" fill="#09090b" stroke="#cbd5e1" strokeWidth="2.4" />

      <line x1="216" y1="238" x2="414" y2="238" stroke="#e4e4e7" strokeWidth="4" strokeLinecap="round" />

      <line x1="300" y1="84" x2="526" y2="84" stroke="#a1a1aa" strokeWidth="2.8" markerEnd="url(#tow-zinc-arrow)" />
      <line x1="568" y1="238" x2="682" y2="238" stroke="#10b981" strokeWidth="3.4" markerEnd="url(#tow-emerald-arrow)" />

      <line x1="120" y1="238" x2="58" y2="238" stroke="#fb7185" strokeWidth="2.6" markerEnd="url(#tow-rose-arrow)" />
      <line x1="414" y1="238" x2="352" y2="238" stroke="#fb7185" strokeWidth="2.6" markerEnd="url(#tow-rose-arrow)" />

      <line x1="242" y1="238" x2="286" y2="238" stroke="#60a5fa" strokeWidth="2.6" markerEnd="url(#tow-blue-arrow)" />
      <line x1="388" y1="238" x2="344" y2="238" stroke="#60a5fa" strokeWidth="2.6" markerEnd="url(#tow-blue-arrow)" />
    </svg>

    <div className="pointer-events-none absolute inset-0 z-10 select-none">
      <LabelBadge className="left-[13%] top-[22%]" tone="amber">
        whole system boundary
      </LabelBadge>
      <LabelBadge className="left-[13%] top-[71%]" tone="emerald">
        isolated focus
      </LabelBadge>
      <LabelBadge className="left-[39%] top-[36%] hidden lg:block" tone="zinc">
        rigid light towbar
      </LabelBadge>
      <LabelBadge className="left-[44%] top-[27%]" tone="blue">
        internal forces cancel
      </LabelBadge>
      <LabelBadge className="left-[66%] top-[17%]" tone="zinc">
        common acceleration
      </LabelBadge>

      <MathLabel className="left-[20%] top-[55%] -translate-x-1/2 text-sm" content="$m_1$" color="text-zinc-100" />
      <MathLabel className="left-[61.5%] top-[52%] -translate-x-1/2 text-sm" content="$m_2$" color="text-zinc-100" />
      <MathLabel className="left-[7.5%] top-[50%] -translate-x-1/2 text-xs lg:text-sm" content="$R_1$" color="text-rose-300" />
      <MathLabel className="left-[41.5%] top-[45%] -translate-x-1/2 text-xs lg:text-sm" content="$R_2$" color="text-rose-300" />
      <MathLabel className="left-[84.5%] top-[49%] -translate-x-1/2 text-xs lg:text-sm" content="$D$" color="text-emerald-300" />
      <MathLabel className="left-[51.7%] top-[15%] text-xs lg:text-sm" content="$a$" color="text-zinc-300" />
      <MathLabel className="left-[32.5%] top-[55%] -translate-x-1/2 text-[10px] lg:text-xs" content="$T$" color="text-blue-300" />
      <MathLabel className="left-[46%] top-[55%] -translate-x-1/2 text-[10px] lg:text-xs" content="$T$" color="text-blue-300" />
    </div>
  </div>
);

export const TowingModelSVG: React.FC = () => (
  <DiagramPanel
    title="Fig. Towing Dynamics"
    analysis={
      <div className="mx-auto grid w-full max-w-5xl gap-4 px-2 md:grid-cols-3">
        {analysisCards.map((card) => (
          <AnalysisCard key={card.title} {...card} />
        ))}
        <div className="rounded-xl border border-emerald-500/20 bg-emerald-950/10 p-3.5 text-center text-xs font-bold tracking-wide text-emerald-300 shadow-inner md:col-span-3">
          Exam technique: translate each modelling word into its mathematical consequence before constructing equations.
        </div>
      </div>
    }
  >
    <TowingBoard />
  </DiagramPanel>
);
