import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { cn } from "@/lib/utils";
import { LessonVisual } from "./LessonVisual";
import type { Components } from "react-markdown";

interface MathTextProps {
  content: string;
  className?: string;
}

const visualTagPattern = /!\[visual:([^\]]+)\]\([^)]*\)/g;

export function MathText({ content, className }: MathTextProps) {
  // SMART WRAPPER: If content has no '$' delimiters and is a single line, assume it's pure math from an SVG component
  const isPureMathNode = !content.includes('$') && !content.includes('\n');
  const processedContent = isPureMathNode ? `$${content}$` : content;

  const markdownComponents: Components = {
    p: ({ node, ...props }) => <p className="mb-6 text-[16px] leading-relaxed text-slate-300 font-sans tracking-wide" {...props} />,
    h2: ({ node, ...props }) => <h2 className="mt-12 mb-6 text-2xl font-serif text-emerald-400 border-l-4 border-emerald-500 pl-4" {...props} />,
    h3: ({ node, ...props }) => <h3 className="mt-8 mb-4 text-lg font-bold text-slate-100 uppercase tracking-widest text-[11px]" {...props} />,
    li: ({ node, ...props }) => <li className="relative pl-6 mb-2 text-[16px] leading-relaxed font-sans tracking-wide text-slate-300 before:content-[''] before:absolute before:left-0 before:top-3 before:w-3 before:h-px before:bg-slate-700" {...props} />,
    blockquote: ({ node, ...props }) => <blockquote className="my-10 p-8 border border-slate-800 bg-slate-900/40 rounded-2xl shadow-xl backdrop-blur-md" {...props} />,
    strong: ({ node, ...props }) => <strong className="font-bold underline decoration-slate-700 underline-offset-4 text-slate-100" {...props} />,
    code: ({ node, ...props }) => <code className="font-mono text-[11px] bg-slate-950 text-sky-300 px-2 py-0.5 rounded border border-slate-800/50" {...props} />,
    img: ({ node, src, alt, ...props }) => {
      if (alt?.startsWith("visual:")) {
        const visualId = alt.replace("visual:", "");
        return <LessonVisual visualId={visualId} />;
      }
      return <img src={src} alt={alt} className="my-8 border border-slate-800 shadow-2xl max-w-full h-auto rounded-xl" {...props} />;
    },
  };
  
  const parts = processedContent.split(visualTagPattern);

  return (
    <div className={cn("markdown-body max-w-none", className)}>
      {parts.map((part, index) => {
        // Even indices are text, odd are visualIds from the capture group
        if (index % 2 === 0) {
          if (!part) return null; // Don't render empty text parts
          return (
            <ReactMarkdown
              key={index}
              remarkPlugins={[remarkMath]}
              rehypePlugins={[rehypeKatex]}
              components={markdownComponents}
            >
              {part}
            </ReactMarkdown>
          );
        } else {
          // This is a visualId
          return <LessonVisual key={index} visualId={part} />;
        }
      })}
    </div>
  );
}