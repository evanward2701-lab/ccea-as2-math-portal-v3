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
}

const visualTagPattern = /!\[visual:([^\]]+)\]\([^)]*\)/g;
const placeholderPattern = /\[(VISUAL|INTERACTIVE) (?:PLACEHOLDER|REFERENCE):\s*([^\]|]+)(?:\|([^\]]*))?\]/gi;

export function MathText({ content, className, center, noMargin }: MathTextProps) {
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
    h2: ({ node, ...props }) => <h2 className="mt-12 mb-6 text-xl font-serif font-light text-zinc-100 tracking-wide border-l border-zinc-700 pl-6" {...props} />,
    h3: ({ node, ...props }) => <h3 className="mt-8 mb-4 text-[10px] font-bold text-zinc-500 uppercase tracking-[0.3em]" {...props} />,
    li: ({ node, ...props }) => (
      <li className="relative pl-8 mb-4 text-lg md:text-xl leading-relaxed font-serif text-zinc-300 font-normal before:content-[''] before:absolute before:left-0 before:top-[14px] before:w-4 before:h-px before:bg-zinc-800" {...props} />
    ),
    blockquote: ({ node, ...props }) => (
      <blockquote className="my-10 p-8 border border-zinc-800 bg-zinc-900/10 rounded-2xl shadow-sm backdrop-blur-xs italic text-zinc-400 font-serif leading-relaxed" {...props} />
    ),
    strong: ({ node, ...props }) => <strong className="font-bold text-zinc-100 decoration-zinc-800 underline-offset-4" {...props} />,
    code: ({ node, ...props }) => <code className="font-mono text-[11px] bg-zinc-900/40 text-zinc-400 px-2 py-0.5 rounded border border-zinc-800/50 shadow-xs" {...props} />,
    table: ({ node, ...props }) => (
      <div className="my-8 w-full overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-900/10 shadow-inner">
        <table className="w-full border-collapse text-sm text-zinc-300" {...props} />
      </div>
    ),
    thead: ({ node, ...props }) => <thead className="bg-zinc-900/50 border-b border-zinc-800" {...props} />,
    th: ({ node, ...props }) => <th className="p-4 font-bold text-[10px] uppercase tracking-widest text-zinc-500 text-center" {...props} />,
    td: ({ node, ...props }) => <td className="p-4 border-b border-zinc-800/30 text-center" {...props} />,
    img: ({ node, src, alt, ...props }) => {
      if (alt?.startsWith("visual:")) {
        const visualId = alt.replace("visual:", "");
        return (
          <div className="my-10 p-10 bg-[#141416] border border-zinc-800 rounded-2xl flex justify-center shadow-inner overflow-hidden">
            <LessonVisual visualId={visualId} />
          </div>
        );
      }
      return <img src={src} alt={alt} className="my-10 border border-zinc-800/50 shadow-sm max-w-full h-auto rounded-2xl" {...props} />;
    },
  };
  
  if (!content) return null;

  // Pre-process content to handle [VISUAL PLACEHOLDER: ...]
  // We'll replace them with a special format that ReactMarkdown can recognize or we can split on.
  // For now, let's just split the content manually to handle placeholders.
  
  const segments = content.split(placeholderPattern);
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
            <div key={`visual-${i}-${index}`} className="my-10 p-10 bg-[#141416] border border-zinc-800 rounded-2xl flex justify-center shadow-inner overflow-hidden">
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
        <div key={`placeholder-${id}`} className="my-8 flex justify-center">
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
