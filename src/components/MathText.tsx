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
    p: ({ node, ...props }) => <p className="mb-3 text-sm font-serif text-slate-300" {...props} />,
    li: ({ node, ...props }) => <li className="relative pl-6 text-sm before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-px before:bg-slate-700 text-slate-300" {...props} />,
    blockquote: ({ node, ...props }) => <blockquote className="border-l-2 border-emerald-500 bg-slate-900/60 p-6 italic text-slate-300 my-8 text-sm rounded-r-lg" {...props} />,
    strong: ({ node, ...props }) => <strong className="font-bold underline decoration-slate-700 underline-offset-4 text-slate-100" {...props} />,
    code: ({ node, ...props }) => <code className="font-mono text-[10px] bg-slate-900 text-amber-400 px-1.5 py-0.5 uppercase tracking-widest rounded border border-slate-800" {...props} />,
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