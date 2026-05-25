import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import { cn } from "@/core/utils/cn";
import { LessonVisual, VisualRenderer } from "@/core/components/VisualRenderer";
import { MermaidDiagram } from "@/core/diagram-engine/MermaidDiagram";
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
        rehypePlugins={[rehypeKatex]}
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
const placeholderPattern = /\[(VISUAL|INTERACTIVE) (?:PLACEHOLDER|REFERENCE):\s*([^\]|]+)(?:\|([^\]]*))?\]/gi;
const protectedMarkdownPattern = /(```[\s\S]*?```|`[^`\n]*`|\$\$[\s\S]*?\$\$|\$[^$\n]*\$|!\[[^\]]*\]\([^)]*\)|\[[^\]]*\]\([^)]*\))/g;

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

  return (
    <div className="not-prose mt-24 mb-8 border-t border-zinc-800/70 pt-10">
      <div className="relative pl-6">
        <div className="pointer-events-none absolute left-0 top-1 h-[calc(100%-0.25rem)] w-px bg-linear-to-b from-emerald-400/60 via-zinc-700/80 to-transparent" />
        <div className="mb-3 flex items-center gap-3">
          {sectionNumber && (
            <span className="rounded-md border border-zinc-700/80 bg-zinc-950/60 px-3 py-1 text-2.5 font-mono font-bold uppercase tracking-[0.24em] text-zinc-400 shadow-sm">
              Section {sectionNumber}
            </span>
          )}
          <span className="h-px flex-1 bg-zinc-800/70" />
        </div>
        <h2 className="text-2xl font-serif font-light leading-tight tracking-wide text-zinc-100 md:text-3xl">
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
      <div className="not-prose mt-14 mb-6 flex flex-col gap-2 border-l border-amber-500/40 pl-5">
        <span className="text-2.5 font-mono font-bold uppercase tracking-[0.24em] text-amber-400">
          {label}
        </span>
        {title && (
          <h3 className="text-xl font-serif font-light leading-tight tracking-wide text-zinc-100 md:text-2xl">
            {title}
          </h3>
        )}
      </div>
    );
  }

  return (
    <h3 className="not-prose mt-14 mb-5 text-2.5 font-bold uppercase tracking-[0.24em] text-zinc-400">
      {children}
    </h3>
  );
}

export function MathText({ content, className, center, noMargin, variant = "default" }: MathTextProps) {
  const isLesson = variant === "lesson";
  const visualSpacingClass = isLesson ? "my-16 md:my-20" : "my-12";
  const shouldRenderInline = className?.split(/\s+/).includes("inline") || className?.includes("[&_p]:inline");

  if (!content) return null;

  if (shouldRenderInline) {
    return <MathInline content={content} className={className} />;
  }

  const markdownComponents: Components = {
    p: ({ node, ...props }) => (
      <p
        className={cn(
          "text-lg md:text-xl leading-relaxed text-zinc-300 font-serif tracking-normal antialiased whitespace-pre-wrap font-normal",
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
        <h2 className="mt-12 mb-6 text-xl font-serif font-light text-zinc-100 tracking-wide border-l border-zinc-700 pl-6" {...props}>
          {children}
        </h2>
      )
    ),
    h3: ({ node, children, ...props }) => (
      isLesson ? (
        <LessonSubheading>{children}</LessonSubheading>
      ) : (
        <h3 className="mt-8 mb-4 text-2.5 font-bold text-zinc-500 uppercase tracking-[0.3em]" {...props}>
          {children}
        </h3>
      )
    ),
    li: ({ node, ...props }) => (
      <li className={cn("relative pl-8 text-lg md:text-xl leading-relaxed font-serif text-zinc-300 font-normal before:content-[''] before:absolute before:left-0 before:top-3.5 before:w-4 before:h-px before:bg-zinc-800", isLesson ? "mb-5" : "mb-4")} {...props} />
    ),
    blockquote: ({ node, ...props }) => (
      <blockquote className="my-10 p-8 border border-zinc-800 bg-zinc-900/10 rounded-2xl shadow-sm backdrop-blur-xs italic text-zinc-400 font-serif leading-relaxed" {...props} />
    ),
    strong: ({ node, ...props }) => <strong className="font-bold text-zinc-100 decoration-zinc-800 underline-offset-4" {...props} />,
    code: ({ node, ...props }) => <code className="font-mono text-2.75 bg-zinc-900/40 text-zinc-400 px-2 py-0.5 rounded border border-zinc-800/50 shadow-xs" {...props} />,
    table: ({ node, ...props }) => (
      <div className="my-8 w-full overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-900/10 shadow-inner">
        <table className="w-full border-collapse text-sm text-zinc-300" {...props} />
      </div>
    ),
    thead: ({ node, ...props }) => <thead className="bg-zinc-900/50 border-b border-zinc-800" {...props} />,
    th: ({ node, ...props }) => <th className="p-4 font-bold text-2.5 uppercase tracking-widest text-zinc-500 text-center" {...props} />,
    td: ({ node, ...props }) => <td className="p-4 border-b border-zinc-800/30 text-center" {...props} />,
    img: ({ node, src, alt, ...props }) => {
      if (alt?.startsWith("visual:")) {
        const visualId = alt.replace("visual:", "");
        return (
          <div className={cn(visualSpacingClass, "w-full flex justify-center")}>
            <LessonVisual visualId={visualId} />
          </div>
        );
      }
      return <img src={src} alt={alt} className="my-10 border border-zinc-800/50 shadow-sm max-w-full h-auto rounded-2xl" {...props} />;
    },
  };

  // Pre-process content to handle [VISUAL PLACEHOLDER: ...]
  // We'll replace them with a special format that ReactMarkdown can recognize or we can split on.
  // For now, let's just split the content manually to handle placeholders.

  const formattedContent = formatUnitsAsMath(prepareMathContent(content));
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
                rehypePlugins={[rehypeKatex]}
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
      const type = segments[i + 1];
      const id = segments[i + 2]?.trim();

      finalElements.push(
        <div key={`placeholder-${id}`} className={cn(visualSpacingClass, "w-full flex justify-center")}>
          <VisualRenderer visualId={id} />
        </div>
      );
    }
  }

  return (
    <div className={cn("markdown-container w-full", className)}>
      {finalElements}
    </div>
  );
}
