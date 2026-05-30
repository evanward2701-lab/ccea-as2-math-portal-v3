import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import { cn } from "@/core/utils/cn";
import { LessonVisual, VisualRenderer } from "@/core/components/VisualRenderer";
import { MermaidDiagram } from "@/core/diagram-engine/MermaidDiagram";
import { CalculatorMastery } from "@/core/components/CalculatorMastery";
import { CALCULATOR_GUIDES } from "@/core/data/calculatorGuides";
import type { Components } from "react-markdown";

interface MathTextProps {
  content: string;
  className?: string;
  center?: boolean;
  noMargin?: boolean;
  variant?: "default" | "lesson";
}

export function MathInline({ content, className }: { content: string; className?: string }) {
  if (!content) return null;
  const preparedContent = prepareMathContent(content);

  return (
    <span className={cn("inline-flex items-center", className)}>
      <ReactMarkdown
        remarkPlugins={[remarkMath]}
        rehypePlugins={[katexPlugin]}
        components={{
          // Inherit paragraph styling from the main MathText component logic
          p: ({ node, ...props }) => <span className="inline-block" {...props} />
        }}
      >
        {formatUnitsAsMath(preparedContent)}
      </ReactMarkdown>
    </span>
  );
}

const visualTagPattern = /!\[visual:([^\]]+)\]\([^)]*\)/g;
const placeholderPattern = /(?<!\!)\[(VISUAL|INTERACTIVE|CALCULATOR_GUIDE)(?: PLACEHOLDER:| REFERENCE:|:)\s*([^\]|]+)(?:\|([^\]]*))?\]/gi;
const protectedMarkdownPattern = /(```[\s\S]*?```|`[^`\n]*`|\$\$[\s\S]*?\$\$|\$[^$\n]*\$|!\[[^\]]*\]\([^)]*\)|\[[^\]]*\]\([^)]*\))/g;
const katexPlugin = [rehypeKatex, { strict: false }] as any;

const unitPhrasePatterns: Array<[RegExp, string]> = [
  [/\bkg\s+m\s+s(?:\^\{?-?2\}?|[-−]2)\b/g, '$\\mathrm{kg\\,m\\,s^{-2}}$'],
  [/\bm\s+s(?:\^\{?-?1\}?|[-−]1)\b/g, '$\\mathrm{m\\,s^{-1}}$'],
  [/\bm\s+s(?:\^\{?-?2\}?|[-−]2)\b/g, '$\\mathrm{m\\,s^{-2}}$'],
  [/\bkilograms\b/g, '$\\mathrm{kilograms}$'],
  [/\bkilogram\b/g, '$\\mathrm{kilogram}$'],
  [/\bmetres\b/g, '$\\mathrm{metres}$'],
  [/\bmetre\b/g, '$\\mathrm{metre}$'],
  [/\bseconds\b/g, '$\\mathrm{seconds}$'],
  [/\bsecond\b/g, '$\\mathrm{second}$'],
  [/\bnewtons\b/g, '$\\mathrm{newtons}$'],
  [/\bNewtons\b/g, '$\\mathrm{Newtons}$'],
  [/\btonnes\b/g, '$\\mathrm{tonnes}$'],
  [/\btonne\b/g, '$\\mathrm{tonne}$'],
  [/\bkg\b/g, '$\\mathrm{kg}$'],
  [/\bN\b/g, '$\\mathrm{N}$'],
  [/(?<!['’])\bm\b/g, '$\\mathrm{m}$'],
  [/(?<!['’])\bs\b/g, '$\\mathrm{s}$'],
];

function formatPlainUnits(text: string): string {
  const unitSegments: string[] = [];

  const formatted = unitPhrasePatterns.reduce(
    (currentText, [pattern, replacement]) =>
      currentText.replace(pattern, () => {
        const token = `@@MATH_TEXT_UNIT_${unitSegments.length}@@`;
        unitSegments.push(replacement);
        return token;
      }),
    text
  );

  return formatted.replace(/@@MATH_TEXT_UNIT_(\d+)@@/g, (_, index) => unitSegments[Number(index)] ?? '');
}

function formatUnitsAsMath(content: string): string {
  const protectedSegments: string[] = [];
  const tokenized = content.replace(protectedMarkdownPattern, (match) => {
    const token = `@@MATH_TEXT_PROTECTED_${protectedSegments.length}@@`;
    protectedSegments.push(match);
    return token;
  });

  const formatted = formatPlainUnits(tokenized);

  return formatted.replace(/@@MATH_TEXT_PROTECTED_(\d+)@@/g, (_, index) => protectedSegments[Number(index)] ?? '');
}

function shouldWrapAsInlineMath(content: string): boolean {
  const trimmed = content.trim();
  if (!trimmed || trimmed.includes('$') || trimmed.includes('\n')) return false;
  if (/\\[a-zA-Z]+/.test(trimmed)) return true;
  if (/[=^_]|[<>≤≥]/.test(trimmed)) return true;
  if (/^[A-Za-z](?:\([^)]*\))?$/.test(trimmed)) return true;
  if (/^[A-Za-z]_\d+$/.test(trimmed)) return true;
  return false;
}

function prepareMathContent(content: string): string {
  const normalized = normalizeLatexUnits(normalizeLatexCommandSlashes(content));
  const trimmed = normalized.trim();
  if (!shouldWrapAsInlineMath(trimmed)) return normalized;
  return `$${trimmed}$`;
}

function normalizeLatexCommandSlashes(content: string): string {
  return content.replace(/\\\\([a-zA-Z]+)/g, '\\$1');
}

function normalizeLatexUnits(content: string): string {
  return content
    .replace(/\\text\{\s*kg\s+m\s+s\s*\}\^\{?-?2\}?/g, '\\mathrm{kg\\,m\\,s^{-2}}')
    .replace(/\\text\{\s*m\s+s\s*\}\^\{?-?1\}?/g, '\\mathrm{m\\,s^{-1}}')
    .replace(/\\text\{\s*m\s+s\s*\}\^\{?-?2\}?/g, '\\mathrm{m\\,s^{-2}}')
    .replace(/\\text\{\s*m\s*\}\s*\\,\s*\\text\{\s*s\s*\}\^\{?-?1\}?/g, '\\mathrm{m\\,s^{-1}}')
    .replace(/\\text\{\s*m\s*\}\s*\\,\s*\\text\{\s*s\s*\}\^\{?-?2\}?/g, '\\mathrm{m\\,s^{-2}}')
    .replace(/\\text\{\s*kg\s*\}/g, '\\mathrm{kg}')
    .replace(/\\text\{\s*N\s*\}/g, '\\mathrm{N}')
    .replace(/\\text\{\s*m\s*\}/g, '\\mathrm{m}')
    .replace(/\\text\{\s*s\s*\}/g, '\\mathrm{s}');
}

function getNodeText(children: React.ReactNode): string {
  if (typeof children === "string" || typeof children === "number") {
    return String(children);
  }

  if (Array.isArray(children)) {
    return children.map(getNodeText).join("");
  }

  if (children && typeof children === "object" && "props" in children) {
    return getNodeText((children as { props?: { children?: React.ReactNode } }).props?.children);
  }

  return "";
}

function LessonSectionHeading({ children }: { children: React.ReactNode }) {
  const headingText = getNodeText(children).trim();
  const numberedHeading = headingText.match(/^(\d+)\.\s*(.+)$/);
  const sectionNumber = numberedHeading?.[1];
  const sectionTitle = numberedHeading?.[2] ?? headingText;

  // Suppress the auto-generated "Lesson Title" section — the title is already shown in the page header
  if (sectionTitle.trim().toLowerCase() === 'lesson title') return null;

  return (
    <div className="not-prose mt-12 mb-8 border-t border-border/70 pt-10">
      <div className="relative pl-6">
        <div className="pointer-events-none absolute left-0 top-1 h-[calc(100%-0.25rem)] w-px bg-linear-to-b from-primary/60 via-accent/80 to-transparent" />
        <div className="mb-3 flex items-center gap-3">
          <span className="h-px w-12 bg-primary/40" />
          <span className="h-px flex-1 bg-border/70" />
        </div>
        <h2 className="text-2xl font-serif font-light leading-tight tracking-wide text-foreground md:text-3xl">
          {sectionTitle}
        </h2>
      </div>
    </div>
  );
}

function LessonSubheading({ children }: { children: React.ReactNode }) {
  const headingText = getNodeText(children).trim();
  const exampleHeading = headingText.match(/^(Example\s+\d+):?\s*(.*)$/i);

  if (exampleHeading) {
    const label = exampleHeading[1];
    const title = exampleHeading[2];

    return (
      <div className="not-prose mt-14 mb-6 flex flex-col gap-2 border-l border-primary/40 pl-5">
        <span className="text-2.5 font-mono font-bold uppercase tracking-[0.24em] text-primary">
          {label}
        </span>
        {title && (
          <h3 className="text-xl font-serif font-light leading-tight tracking-wide text-foreground md:text-2xl">
            {title}
          </h3>
        )}
      </div>
    );
  }

  return (
    <h3 className="not-prose mt-14 mb-5 text-2.5 font-bold uppercase tracking-[0.24em] text-muted-foreground">
      {children}
    </h3>
  );
}

export function MathText({ content, className, center, noMargin, variant = "default" }: MathTextProps) {
  const isLesson = variant === "lesson";
  const visualSpacingClass = isLesson ? "my-16 md:my-20" : "my-12";
  const shouldRenderInline = className?.split(/\s+/).includes("inline") || className?.includes("[&_p]:inline");

  if (!content) return null;

  // Strip the entire "## N. Lesson Title" section (heading + its body) before rendering
  // since the page header already displays the lesson title above the content.
  const contentWithoutLessonTitle = content.replace(
    /^##\s+\d+\.\s*Lesson Title\b[\s\S]*?(?=\n##\s|\n###\s|$)/im,
    ''
  );

  if (shouldRenderInline) {
    return <MathInline content={contentWithoutLessonTitle} className={className} />;
  }

  const markdownComponents: Components = {
    p: ({ node, ...props }) => (
      <p
        className={cn(
          "text-base md:text-lg leading-relaxed text-foreground font-sans tracking-normal antialiased whitespace-pre-wrap font-normal",
          !noMargin && "mb-6",
          center && "text-center"
        )}
        {...props}
      />
    ),
    h2: ({ node, children, ...props }) => (
      isLesson ? (
        <LessonSectionHeading>{children}</LessonSectionHeading>
      ) : (
        <h2 className="mt-12 mb-6 text-xl font-serif font-light text-foreground tracking-wide border-l border-border pl-6" {...props}>
          {children}
        </h2>
      )
    ),
    h3: ({ node, children, ...props }) => (
      isLesson ? (
        <LessonSubheading>{children}</LessonSubheading>
      ) : (
        <h3 className="mt-8 mb-4 text-2.5 font-bold text-muted-foreground uppercase tracking-[0.3em]" {...props}>
          {children}
        </h3>
      )
    ),
    li: ({ node, ...props }) => (
      <li className={cn("relative pl-8 text-base md:text-lg leading-relaxed font-sans text-foreground font-normal before:content-[''] before:absolute before:left-0 before:top-3 before:w-4 before:h-px before:bg-primary/50", isLesson ? "mb-5" : "mb-4")} {...props} />
    ),
    blockquote: ({ node, ...props }) => (
      <blockquote className="my-10 p-8 border border-primary/20 bg-primary/5 rounded-2xl shadow-sm backdrop-blur-xs italic text-muted-foreground font-serif leading-relaxed" {...props} />
    ),
    strong: ({ node, ...props }) => <strong className="font-bold text-foreground decoration-primary/50 underline-offset-4" {...props} />,
    code: ({ node, ...props }) => <code className="font-mono text-2.75 bg-muted text-muted-foreground px-2 py-0.5 rounded border border-border/50 shadow-xs" {...props} />,
    table: ({ node, ...props }) => (
      <div className={cn(
        "my-10 w-full overflow-x-auto rounded-lg border bg-card shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]",
        isLesson ? "border-border/70" : "border-border"
      )}>
        <table className={cn("w-full min-w-[760px] border-collapse", isLesson ? "text-base text-muted-foreground" : "text-sm text-muted-foreground")} {...props} />
      </div>
    ),
    thead: ({ node, ...props }) => <thead className="border-b border-border/80 bg-muted/45" {...props} />,
    tr: ({ node, ...props }) => <tr className="border-b border-border/35 last:border-b-0 transition-colors hover:bg-muted/20" {...props} />,
    th: ({ node, ...props }) => (
      <th
        className={cn(
          "px-5 py-4 text-left align-bottom font-bold uppercase tracking-[0.22em] text-muted-foreground",
          isLesson ? "text-2.5" : "text-xs"
        )}
        {...props}
      />
    ),
    td: ({ node, ...props }) => (
      <td
        className={cn(
          "px-5 py-5 text-left align-top leading-relaxed text-foreground",
          isLesson ? "font-sans text-base" : "text-sm"
        )}
        {...props}
      />
    ),
    img: ({ node, src, alt, ...props }) => {
      if (alt?.startsWith("visual:")) {
        const visualId = alt.replace("visual:", "");
        return (
          <div className={cn(visualSpacingClass, "w-full flex justify-center")}>
            <LessonVisual visualId={visualId} />
          </div>
        );
      }
      return <img src={src} alt={alt} className="my-10 border border-border/50 shadow-sm max-w-full h-auto rounded-2xl" {...props} />;
    },
  };

  // Pre-process content to handle [VISUAL PLACEHOLDER: ...]
  // We'll replace them with a special format that ReactMarkdown can recognize or we can split on.
  // For now, let's just split the content manually to handle placeholders.

  const formattedContent = formatUnitsAsMath(prepareMathContent(contentWithoutLessonTitle));
  const segments = formattedContent.split(placeholderPattern);
  // Pattern has 3 capture groups: (VISUAL|INTERACTIVE), (ID), (Metadata)
  // Split results: [text, type, id, meta, text, type, id, meta, ...]

  const finalElements: React.ReactNode[] = [];

  for (let i = 0; i < segments.length; i += 4) {
    const text = segments[i];
    if (text?.trim()) {
      const parts = text.split(visualTagPattern);
      parts.forEach((part, index) => {
        if (index % 2 === 0) {
          if (part.trim()) {
            finalElements.push(
              <ReactMarkdown
                key={`${i}-${index}`}
                remarkPlugins={[remarkMath, remarkGfm]}
                rehypePlugins={[katexPlugin]}
                components={markdownComponents}
              >
                {part}
              </ReactMarkdown>
            );
          }
        } else {
          finalElements.push(
            <div key={`visual-${i}-${index}`} className={cn(visualSpacingClass, "w-full flex justify-center")}>
              <LessonVisual visualId={part} />
            </div>
          );
        }
      });
    }

    if (i + 1 < segments.length) {
      const type = segments[i + 1]?.toUpperCase();
      const id = segments[i + 2]?.trim();

      if (type === "CALCULATOR_GUIDE") {
        const guide = CALCULATOR_GUIDES[id];
        if (guide) {
          finalElements.push(
            <div key={`calc-${id}-${i}`} className="w-full">
              <CalculatorMastery model={guide.model} steps={guide.steps} />
            </div>
          );
        } else {
          finalElements.push(
            <div key={`calc-${id}-${i}`} className="w-full p-4 border border-red-500/50 bg-red-500/10 text-red-500 rounded text-center font-mono text-sm">
              [Missing Calculator Guide: {id}]
            </div>
          );
        }
      } else {
        finalElements.push(
          <div key={`placeholder-${id}-${i}`} className={cn(visualSpacingClass, "w-full flex justify-center")}>
            <VisualRenderer visualId={id} />
          </div>
        );
      }
    }
  }

  return (
    <div className={cn("markdown-container w-full", className)}>
      {finalElements}
    </div>
  );
}
