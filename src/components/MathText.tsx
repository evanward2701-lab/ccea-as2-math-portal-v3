import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { cn } from "@/lib/utils";
import { LessonVisual } from "./LessonVisual";
import type { Components } from "react-markdown";

interface MathTextProps {
  content: string;
  className?: string;
  center?: boolean;
  noMargin?: boolean;
}

const visualTagPattern = /!\[visual:([^\]]+)\]\([^)]*\)/g;

export function MathText({ content, className, center, noMargin }: MathTextProps) {
  const markdownComponents: Components = {
    p: ({ node, ...props }) => (
      <p 
        className={cn(
          "text-[18px] leading-[1.9] text-zinc-300 font-serif tracking-normal antialiased whitespace-pre-wrap",
          !noMargin && "mb-10",
          center && "text-center"
        )} 
        {...props} 
      />
    ),
    h2: ({ node, ...props }) => <h2 className="mt-16 mb-10 text-2xl font-serif font-light text-zinc-100 tracking-wide border-l border-zinc-700 pl-8" {...props} />,
    h3: ({ node, ...props }) => <h3 className="mt-12 mb-8 text-[11px] font-bold text-zinc-500 uppercase tracking-[0.4em]" {...props} />,
    li: ({ node, ...props }) => (
      <li className="relative pl-10 mb-6 text-[18px] leading-[1.9] font-serif text-zinc-400 before:content-[''] before:absolute before:left-0 before:top-[14px] before:w-5 before:h-px before:bg-zinc-800" {...props} />
    ),
    blockquote: ({ node, ...props }) => (
      <blockquote className="my-14 p-12 border border-zinc-800 bg-zinc-900/10 rounded-[2rem] shadow-sm backdrop-blur-xs italic text-zinc-400 font-serif leading-relaxed" {...props} />
    ),
    strong: ({ node, ...props }) => <strong className="font-bold text-zinc-100 decoration-zinc-800 underline-offset-4" {...props} />,
    code: ({ node, ...props }) => <code className="font-mono text-[12px] bg-zinc-900/40 text-zinc-400 px-2.5 py-1 rounded border border-zinc-800/50 shadow-xs" {...props} />,
    img: ({ node, src, alt, ...props }) => {
      if (alt?.startsWith("visual:")) {
        const visualId = alt.replace("visual:", "");
        return (
          <div className="my-16 p-16 bg-[#141417] border border-zinc-800 rounded-[2.5rem] flex justify-center shadow-inner overflow-hidden">
            <LessonVisual visualId={visualId} />
          </div>
        );
      }
      return <img src={src} alt={alt} className="my-16 border border-zinc-800/50 shadow-sm max-w-full h-auto rounded-3xl" {...props} />;
    },
  };
  
  // Ensure content exists
  if (!content) return null;

  const parts = content.split(visualTagPattern);

  return (
    <div className={cn("markdown-container w-full", className)}>
      {parts.map((part, index) => {
        // Even indices are text, odd are visualIds
        if (index % 2 === 0) {
          if (!part.trim()) return null;
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
          return (
            <div key={index} className="my-16 p-16 bg-[#141417] border border-zinc-800 rounded-[2.5rem] flex justify-center shadow-inner overflow-hidden">
              <LessonVisual visualId={part} />
            </div>
          );
        }
      })}
    </div>
  );
}
